(function(){
  const PLACEHOLDER_WORD = 'ISI_';
  const coordinatorPath = 'coordinators';
  const appDataPath = 'app_data';
  const attendancePath = 'attendance';
  const masterDataPath = 'master_data';
  const auditLogsPath = 'audit_logs';
  const attendanceImportsPath = 'attendance_imports';
  const backupExportsPath = 'backup_exports';
  const serverTimeFallback = () => new Date().toISOString();

  function configLooksReady(config){
    return Boolean(config && config.apiKey && config.projectId && !String(config.apiKey).includes(PLACEHOLDER_WORD) && !String(config.projectId).includes(PLACEHOLDER_WORD));
  }
  function normalizeRole(role){ const raw=String(role || 'koordinator').trim().toLowerCase(); if(raw==='admin') return 'admin'; if(raw==='payroll' || raw==='penggajian') return 'payroll'; if(raw==='viewer' || raw==='view' || raw==='readonly' || raw==='read_only') return 'viewer'; return 'koordinator'; }
  function normalizeUser(docId, data){
    const username=String(data.username || data.userName || docId || data.nip || '').trim();
    return {
      username,
      nip: String(data.nip || username || docId || '').trim(),
      name: String(data.name || data.nama || 'Koordinator').trim(),
      role: normalizeRole(data.role || 'koordinator'),
      unit: String(data.unit || data.bagian || 'Muatan Breeder').trim(),
      active: data.active !== false,
      password: String(data.password || '').trim(),
      coordinatorNip: String(data.coordinatorNip || data.workerNip || data.employeeNip || data.coordinator_nip || data.worker_nip || '').trim(),
      coordinatorName: String(data.coordinatorName || data.workerName || data.employeeName || data.coordinator_name || data.worker_name || '').trim(),
      workerNip: String(data.workerNip || data.coordinatorNip || data.employeeNip || data.coordinator_nip || data.worker_nip || '').trim(),
      workerName: String(data.workerName || data.coordinatorName || data.employeeName || data.coordinator_name || data.worker_name || '').trim(),
      id: String(docId || username || '').trim()
    };
  }
  function cleanForFirestore(value){
    return JSON.parse(JSON.stringify(value || null));
  }

  function exportValue(value){
    if(value === null || value === undefined) return value;
    if(value && typeof value.toDate === 'function') return value.toDate().toISOString();
    if(Array.isArray(value)) return value.map(exportValue);
    if(typeof value === 'object'){
      const out={};
      Object.keys(value).forEach(k=>{ out[k]=exportValue(value[k]); });
      return out;
    }
    return value;
  }
  function dateInRange(value, startDate, endDate){
    const v=String(value || '').slice(0,10);
    if(!v) return true;
    if(startDate && v < startDate) return false;
    if(endDate && v > endDate) return false;
    return true;
  }

  function stableIdPart(value){
    return String(value || '').trim().toLowerCase().replace(/[^a-z0-9_-]+/g,'_').replace(/^_+|_+$/g,'') || 'default';
  }
  function attendanceDocIdFromPayload(payload){
    const unitKey=stableIdPart(payload && payload.unitKey ? payload.unitKey : 'muatan_breeder');
    const date=stableIdPart(payload && payload.reportDate ? payload.reportDate : new Date().toISOString().slice(0,10));
    const scheduleKey=payload && payload.scheduleKey ? stableIdPart(payload.scheduleKey) : 'default';
    return scheduleKey && scheduleKey!=='default' ? `${unitKey}_${scheduleKey}_${date}` : `${unitKey}_${date}`;
  }
  function attendanceRowStableKey(row, unitKey){
    return [
      stableIdPart(row && row.sourceUnitKey ? row.sourceUnitKey : unitKey),
      stableIdPart(row && row.nip ? row.nip : row && row.name ? row.name : ''),
      stableIdPart(row && row.activityKey ? row.activityKey : row && row.kegiatan ? row.kegiatan : ''),
      stableIdPart(row && row.loadingDock ? row.loadingDock : ''),
      stableIdPart(row && row.regu ? row.regu : '')
    ].join('__');
  }
  function dedupeAttendanceWorkers(rows, unitKey){
    const map=new Map();
    (rows||[]).forEach(row=>{
      if(!row) return;
      const key=attendanceRowStableKey(row, unitKey);
      const prev=map.get(key) || {...row, s1:false, s2:false, s3:false};
      prev.nip=String(prev.nip || row.nip || '').trim();
      prev.name=String(prev.name || row.name || '').trim();
      prev.s1=Boolean(prev.s1 || row.s1);
      prev.s2=Boolean(prev.s2 || row.s2);
      prev.s3=Boolean(prev.s3 || row.s3);
      prev.checkIn=row.checkIn || prev.checkIn || '';
      prev.checkOut=row.checkOut || prev.checkOut || '';
      prev.rowId=key;
      map.set(key, prev);
    });
    return Array.from(map.values()).filter(w=>w && (w.s1 || w.s2 || w.s3));
  }
  function shiftRowsFromWorkers(workers, shiftKey){
    return (workers||[]).filter(w=>w && w[shiftKey]).map(w=>({
      rowId:w.rowId || '',
      nip:String(w.nip || ''),
      name:String(w.name || ''),
      kegiatan:w.kegiatan || '',
      activityKey:w.activityKey || '',
      activityLabel:w.activityLabel || '',
      loadingDock:w.loadingDock || '',
      regu:w.regu || ''
    }));
  }
  function normalizeAttendancePayload(payload){
    const base=payload && typeof payload==='object' ? {...payload} : {};
    base.unitKey=String(base.unitKey || 'muatan_breeder').trim();
    base.reportDate=String(base.reportDate || new Date().toISOString().slice(0,10)).trim();
    base.scheduleKey=String(base.scheduleKey || '').trim();
    const docId=attendanceDocIdFromPayload(base);
    base.id=docId;
    base.attendanceDocId=docId;
    base.dedupeKey=docId;
    base.docIdVersion=2;
    base.workers=dedupeAttendanceWorkers(base.workers || [], base.unitKey);
    base.shift1=shiftRowsFromWorkers(base.workers, 's1');
    base.shift2=shiftRowsFromWorkers(base.workers, 's2');
    base.shift3=shiftRowsFromWorkers(base.workers, 's3');
    base.counts={ shift1:base.shift1.length, shift2:base.shift2.length, shift3:base.shift3.length, total:base.workers.length };
    return base;
  }

  async function init(){
    const config = window.ABSENSI_FIREBASE_CONFIG;
    if(!window.ABSENSI_USE_FIREBASE || !configLooksReady(config)){
      return { enabled:false, reason:'Firebase belum diaktifkan. Aplikasi memakai data lokal.' };
    }
    try{
      const appMod = await import('https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js');
      const fs = await import('https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js');
      const app = appMod.initializeApp(config);
      const db = fs.getFirestore(app);
      const api = {
        enabled:true,
        db,

        async writeAuditLog(entry){
          const safeEntry=entry && typeof entry==='object' ? entry : { message:String(entry || '') };
          const actor=safeEntry.actor && typeof safeEntry.actor==='object' ? safeEntry.actor : null;
          const doc={
            action:String(safeEntry.action || 'activity').trim(),
            module:String(safeEntry.module || 'general').trim(),
            message:String(safeEntry.message || '').trim(),
            actor: actor ? {
              username:String(actor.username || actor.nip || '').trim(),
              nip:String(actor.nip || actor.username || '').trim(),
              name:String(actor.name || '').trim(),
              role:String(actor.role || '').trim(),
              unit:String(actor.unit || '').trim()
            } : null,
            target:safeEntry.target ? cleanForFirestore(safeEntry.target) : null,
            before:safeEntry.before !== undefined ? cleanForFirestore(safeEntry.before) : null,
            after:safeEntry.after !== undefined ? cleanForFirestore(safeEntry.after) : null,
            details:safeEntry.details !== undefined ? cleanForFirestore(safeEntry.details) : null,
            status:String(safeEntry.status || 'success').trim(),
            appVersion:'v70',
            createdAt: fs.serverTimestamp(),
            createdAtLocal: serverTimeFallback(),
            userAgent: (typeof navigator !== 'undefined' && navigator.userAgent) ? String(navigator.userAgent).slice(0,260) : ''
          };
          const ref=await fs.addDoc(fs.collection(db, auditLogsPath), doc);
          return { id: ref.id };
        },
        async loginCoordinator(username, password){
          const cleanUsername=String(username||'').trim();
          if(!cleanUsername) return null;
          let snap=null;
          const directSnap=await fs.getDoc(fs.doc(db, coordinatorPath, cleanUsername));
          if(directSnap.exists()) snap=directSnap;
          if(!snap){
            const q=fs.query(fs.collection(db, coordinatorPath), fs.where('username','==',cleanUsername), fs.limit(1));
            const qs=await fs.getDocs(q);
            if(!qs.empty) snap=qs.docs[0];
          }
          if(!snap){
            const qNip=fs.query(fs.collection(db, coordinatorPath), fs.where('nip','==',cleanUsername), fs.limit(1));
            const qsNip=await fs.getDocs(qNip);
            if(!qsNip.empty) snap=qsNip.docs[0];
          }
          if(!snap) return null;
          const data=snap.data() || {};
          const user=normalizeUser(snap.id || cleanUsername, data);
          if(!user.active) return null;
          if(String(data.password || '') !== String(password || '')) return null;
          await fs.setDoc(fs.doc(db, coordinatorPath, snap.id || cleanUsername), { lastLoginAt: fs.serverTimestamp() }, { merge:true });
          return user;
        },
        
        async saveSession(user){
          if(!user || !user.username) return false;
          const payload = {
            username:String(user.username || '').trim(),
            nip:String(user.nip || '').trim(),
            name:String(user.name || '').trim(),
            role:normalizeRole(user.role || 'koordinator'),
            unit:String(user.unit || '').trim(),
            coordinatorNip:String(user.coordinatorNip || user.workerNip || '').trim(),
            coordinatorName:String(user.coordinatorName || user.workerName || '').trim(),
            workerNip:String(user.workerNip || user.coordinatorNip || '').trim(),
            workerName:String(user.workerName || user.coordinatorName || '').trim(),
            active:true,
            loginAt: fs.serverTimestamp(),
            loginAtLocal: serverTimeFallback(),
            updatedAt: fs.serverTimestamp()
          };
          await fs.setDoc(fs.doc(db, 'active_sessions', payload.username), payload, { merge:true });
          return true;
        },
        async loadSession(username){
          const cleanUsername=String(username || '').trim();
          if(!cleanUsername) return null;
          const snap=await fs.getDoc(fs.doc(db, 'active_sessions', cleanUsername));
          if(!snap.exists()) return null;
          return snap.data() || null;
        },
        async clearSession(username){
          const cleanUsername=String(username || '').trim();
          if(!cleanUsername) return false;
          try{
            await fs.deleteDoc(fs.doc(db, 'active_sessions', cleanUsername));
          }catch(err){}
          return true;
        },


        async exportCollectionDocs(collectionName, maxCount){
          const coll=fs.collection(db, collectionName);
          const q=maxCount ? fs.query(coll, fs.limit(Math.max(1, Math.min(Number(maxCount || 1000), 10000)))) : coll;
          const qs=await fs.getDocs(q);
          const rows=[];
          qs.forEach(snap=>rows.push({ id:snap.id, ...exportValue(snap.data() || {}) }));
          return rows;
        },
        async exportAttendanceDocsByDateRange(startDate, endDate, maxCount){
          const constraints=[];
          const cleanStart=String(startDate || '').slice(0,10);
          const cleanEnd=String(endDate || '').slice(0,10);
          if(cleanStart) constraints.push(fs.where('reportDate','>=',cleanStart));
          if(cleanEnd) constraints.push(fs.where('reportDate','<=',cleanEnd));
          if(cleanStart || cleanEnd) constraints.push(fs.orderBy('reportDate','asc'));
          constraints.push(fs.limit(Math.max(1, Math.min(Number(maxCount || 5000), 10000))));
          const q=fs.query(fs.collection(db, attendancePath), ...constraints);
          const qs=await fs.getDocs(q);
          const rows=[];
          qs.forEach(snap=>rows.push({ id:snap.id, ...exportValue(snap.data() || {}) }));
          return rows;
        },
        async saveBackupExportHistory(summary, user){
          const safe=summary && typeof summary==='object' ? summary : {};
          const doc={
            type:'database_backup',
            status:String(safe.status || 'success'),
            format:String(safe.format || '').trim(),
            fileName:String(safe.fileName || '').trim(),
            collectionCounts:cleanForFirestore(safe.collectionCounts || {}),
            filter:cleanForFirestore(safe.filter || {}),
            exportedBy:user ? { username:user.username || user.nip || '', nip:user.nip || user.username || '', name:user.name || '', role:user.role || '', unit:user.unit || '' } : null,
            exportedAt:fs.serverTimestamp(),
            exportedAtLocal:serverTimeFallback(),
            appVersion:'v70'
          };
          const ref=await fs.addDoc(fs.collection(db, backupExportsPath), doc);
          return { id:ref.id, ...doc };
        },
        async exportDatabaseSnapshot(options){
          const opt=options && typeof options==='object' ? options : {};
          const startDate=String(opt.startDate || '').slice(0,10);
          const endDate=String(opt.endDate || '').slice(0,10);
          const includeAudit=opt.includeAudit !== false;
          const includeSessions=opt.includeSessions !== false;
          const auditLimit=Math.max(1, Math.min(Number(opt.auditLimit || 1000), 5000));
          const collections={};
          collections.coordinators=await this.exportCollectionDocs(coordinatorPath);
          if(includeSessions) collections.active_sessions=await this.exportCollectionDocs('active_sessions');
          collections.app_data=await this.exportCollectionDocs(appDataPath);
          if(startDate || endDate){
            collections.attendance=await this.exportAttendanceDocsByDateRange(startDate, endDate, 10000);
          }else{
            collections.attendance=await this.exportCollectionDocs(attendancePath, 10000);
          }
          collections.master_data=await this.exportCollectionDocs(masterDataPath);
          collections.attendance_imports=await this.exportCollectionDocs(attendanceImportsPath);
          if(includeAudit){
            try{
              const aq=fs.query(fs.collection(db, auditLogsPath), fs.orderBy('createdAtLocal','desc'), fs.limit(auditLimit));
              const aqs=await fs.getDocs(aq);
              collections.audit_logs=[];
              aqs.forEach(snap=>collections.audit_logs.push({ id:snap.id, ...exportValue(snap.data() || {}) }));
            }catch(err){
              collections.audit_logs=await this.exportCollectionDocs(auditLogsPath, auditLimit);
            }
          }
          collections.backup_exports=await this.exportCollectionDocs(backupExportsPath, 200);
          const counts={};
          Object.keys(collections).forEach(k=>{ counts[k]=(collections[k] || []).length; });
          return {
            app:'update_absensi_BIP',
            appVersion:'v70',
            exportedAtLocal:serverTimeFallback(),
            filter:{ startDate, endDate, includeAudit, auditLimit },
            collectionCounts:counts,
            collections
          };
        },
        async restoreDatabaseSnapshot(snapshot, options){
          const safeSnapshot=snapshot && typeof snapshot==='object' ? snapshot : {};
          const collections=safeSnapshot.collections && typeof safeSnapshot.collections==='object' ? safeSnapshot.collections : {};
          const opt=options && typeof options==='object' ? options : {};
          const allowed=new Set(Array.isArray(opt.collections) ? opt.collections : []);
          if(!allowed.size) throw new Error('Collection restore belum dipilih.');
          const pathMap={ coordinators:coordinatorPath, app_data:appDataPath, attendance:attendancePath, master_data:masterDataPath, attendance_imports:attendanceImportsPath };
          const counts={};
          const writeRows=[];
          Object.keys(pathMap).forEach(name=>{
            if(!allowed.has(name)) return;
            const rows=Array.isArray(collections[name]) ? collections[name] : [];
            rows.forEach((row,idx)=>{
              if(!row || typeof row!=='object') return;
              let doc={...row};
              let id=String(doc.id || doc.attendanceDocId || doc.unitKey || '').trim();
              if(name==='attendance'){
                doc=normalizeAttendancePayload(doc);
                id=String(doc.id || doc.attendanceDocId || attendanceDocIdFromPayload(doc)).trim();
              }
              if(!id) id='restore_'+idx+'_'+Date.now();
              delete doc.createdAt;
              delete doc.updatedAt;
              delete doc.savedAt;
              delete doc.importedAt;
              delete doc.exportedAt;
              doc.id=id;
              doc.restoredAtLocal=serverTimeFallback();
              if(opt.restoredBy){
                doc.restoredBy={ username:String(opt.restoredBy.username || opt.restoredBy.nip || '').trim(), nip:String(opt.restoredBy.nip || opt.restoredBy.username || '').trim(), name:String(opt.restoredBy.name || '').trim(), role:String(opt.restoredBy.role || '').trim(), unit:String(opt.restoredBy.unit || '').trim() };
              }
              const cleanDoc=cleanForFirestore(doc);
              cleanDoc.restoredAt=fs.serverTimestamp();
              writeRows.push({ collection:name, path:pathMap[name], id, doc:cleanDoc });
            });
          });
          let committed=0;
          for(let i=0;i<writeRows.length;i+=400){
            const batch=fs.writeBatch(db);
            const chunk=writeRows.slice(i,i+400);
            chunk.forEach(item=>{ batch.set(fs.doc(db, item.path, item.id), item.doc, { merge:true }); counts[item.collection]=(counts[item.collection] || 0)+1; });
            await batch.commit();
            committed += chunk.length;
          }
          await fs.addDoc(fs.collection(db, backupExportsPath), {
            type:'database_restore',
            status:'success',
            sourceApp:String(safeSnapshot.app || ''),
            sourceVersion:String(safeSnapshot.appVersion || ''),
            restoredCollections:Array.from(allowed),
            counts:cleanForFirestore(counts),
            restoredBy:opt.restoredBy ? { username:opt.restoredBy.username || opt.restoredBy.nip || '', nip:opt.restoredBy.nip || opt.restoredBy.username || '', name:opt.restoredBy.name || '', role:opt.restoredBy.role || '', unit:opt.restoredBy.unit || '' } : null,
            restoredAt:fs.serverTimestamp(),
            restoredAtLocal:serverTimeFallback(),
            appVersion:'v162'
          }).catch(()=>{});
          return { committed, counts };
        },
        async loadCoordinatorAccounts(){
          const qs=await fs.getDocs(fs.collection(db, coordinatorPath));
          const rows=[];
          qs.forEach(snap=>{ rows.push(normalizeUser(snap.id, snap.data() || {})); });
          rows.sort((a,b)=>{
            const ar=String(a.role||'').localeCompare(String(b.role||''));
            if(ar) return ar;
            return String(a.username||'').localeCompare(String(b.username||''));
          });
          return rows;
        },
        async saveCoordinator(user, adminUser){
          const cleanUsername=String(user && (user.username || user.nip) || '').trim();
          if(!cleanUsername) throw new Error('Username akun kosong.');
          await fs.setDoc(fs.doc(db, coordinatorPath, cleanUsername), {
            username: cleanUsername,
            nip: String(user.nip || cleanUsername).trim(),
            name: String(user.name || '').trim(),
            password: String(user.password || '').trim(),
            role: normalizeRole(user.role || 'koordinator'),
            unit: String(user.unit || '').trim(),
            coordinatorNip: String(user.coordinatorNip || user.workerNip || '').trim(),
            coordinatorName: String(user.coordinatorName || user.workerName || '').trim(),
            workerNip: String(user.workerNip || user.coordinatorNip || '').trim(),
            workerName: String(user.workerName || user.coordinatorName || '').trim(),
            active: user.active !== false,
            updatedAt: fs.serverTimestamp(),
            updatedAtLocal: serverTimeFallback(),
            updatedBy: adminUser ? { username:adminUser.username || adminUser.nip, nip:adminUser.nip, name:adminUser.name, role:adminUser.role } : null
          }, { merge:true });
          return { id: cleanUsername };
        },
        async deleteCoordinator(username, adminUser){
          const cleanUsername=String(username || '').trim();
          if(!cleanUsername) throw new Error('Username akun kosong.');
          const ref=fs.doc(db, coordinatorPath, cleanUsername);
          const snap=await fs.getDoc(ref);
          if(snap.exists()){
            const data=snap.data() || {};
            if(normalizeRole(data.role || 'koordinator') === 'admin') throw new Error('Akun admin tidak bisa dihapus dari menu koordinator.');
          }
          await fs.deleteDoc(ref);
          try{ await fs.deleteDoc(fs.doc(db, 'active_sessions', cleanUsername)); }catch(err){}
          if(adminUser){
            await fs.addDoc(fs.collection(db, auditLogsPath), {
              type:'account_delete',
              username:cleanUsername,
              deletedBy:{ username:adminUser.username || adminUser.nip || '', nip:adminUser.nip || adminUser.username || '', name:adminUser.name || '', role:adminUser.role || '' },
              createdAt:fs.serverTimestamp(),
              createdAtLocal:serverTimeFallback(),
              appVersion:'v70'
            }).catch(()=>{});
          }
          return { id: cleanUsername, deleted:true };
        },
        async loadAppState(unitKey){
          const snap=await fs.getDoc(fs.doc(db, appDataPath, unitKey));
          if(!snap.exists()) return null;
          return snap.data() || null;
        },
        async loadMasterData(docId){
          const cleanDoc=String(docId || '').trim();
          if(!cleanDoc) return null;
          const snap=await fs.getDoc(fs.doc(db, masterDataPath, cleanDoc));
          if(!snap.exists()) return null;
          return snap.data() || null;
        },
        async saveMasterData(docId, data, user){
          const cleanDoc=String(docId || '').trim();
          if(!cleanDoc) throw new Error('ID master data kosong.');
          await fs.setDoc(fs.doc(db, masterDataPath, cleanDoc), {
            ...cleanForFirestore(data || {}),
            updatedAt: fs.serverTimestamp(),
            updatedAtLocal: serverTimeFallback(),
            updatedBy: user ? { username:user.username || user.nip, nip:user.nip, name:user.name, unit:user.unit } : null
          }, { merge:true });
          return { id: cleanDoc };
        },
        async deleteMasterData(docId){
          const cleanDoc=String(docId || '').trim();
          if(!cleanDoc) throw new Error('ID master data kosong.');
          await fs.deleteDoc(fs.doc(db, masterDataPath, cleanDoc));
          return { id: cleanDoc, deleted:true };
        },

        async saveCheckImportHistory(entry, user){
          const safe=entry && typeof entry==='object' ? entry : {};
          const doc={
            type:'global_check_times',
            action:String(safe.action || 'import').trim(),
            fileName:String(safe.fileName || '').trim(),
            fileSize:Number(safe.fileSize || 0),
            fileType:String(safe.fileType || '').trim(),
            fallbackDate:String(safe.fallbackDate || '').trim(),
            dates:cleanForFirestore(safe.dates || []),
            dateCounts:cleanForFirestore(safe.dateCounts || {}),
            importedRows:Number(safe.importedRows || 0),
            skippedRows:Number(safe.skippedRows || 0),
            duplicateRows:Number(safe.duplicateRows || 0),
            totalRows:Number(safe.totalRows || 0),
            appliedRows:Number(safe.appliedRows || 0),
            status:String(safe.status || 'success').trim(),
            errorMessage:String(safe.errorMessage || '').trim(),
            note:String(safe.note || '').trim(),
            importedBy:user ? { username:user.username || user.nip || '', nip:user.nip || user.username || '', name:user.name || '', role:user.role || '', unit:user.unit || '' } : null,
            importedAt: fs.serverTimestamp(),
            importedAtLocal: serverTimeFallback(),
            appVersion:'v70'
          };
          const ref=await fs.addDoc(fs.collection(db, attendanceImportsPath), doc);
          return { id:ref.id, ...doc };
        },
        async loadCheckImportHistory(limitCount){
          const max=Math.max(1, Math.min(Number(limitCount || 20), 100));
          const q=fs.query(fs.collection(db, attendanceImportsPath), fs.orderBy('importedAtLocal','desc'), fs.limit(max));
          const qs=await fs.getDocs(q);
          const rows=[];
          qs.forEach(snap=>{ const data=snap.data() || {}; if(!data.type || data.type==='global_check_times') rows.push({ id:snap.id, ...data }); });
          return rows;
        },
        async deleteCheckImportHistory(limitCount){
          const max=Math.max(1, Math.min(Number(limitCount || 100), 500));
          const q=fs.query(fs.collection(db, attendanceImportsPath), fs.orderBy('importedAtLocal','desc'), fs.limit(max));
          const qs=await fs.getDocs(q);
          const batch=fs.writeBatch(db);
          let deleted=0;
          qs.forEach(snap=>{
            const data=snap.data() || {};
            if(!data.type || data.type==='global_check_times'){
              batch.delete(fs.doc(db, attendanceImportsPath, snap.id));
              deleted++;
            }
          });
          if(deleted>0) await batch.commit();
          return { deleted };
        },
        async saveAppState(unitKey, state, user){
          await fs.setDoc(fs.doc(db, appDataPath, unitKey), {
            company:'PT. BUDI INTI PERKASA',
            reportDate: state && state.reportDate ? state.reportDate : null,
            workers: cleanForFirestore(state && state.workers ? state.workers : []),
            allowEmptyWorkers: Boolean(state && state.allowEmptyWorkers),
            updatedAt: fs.serverTimestamp(),
            updatedAtLocal: serverTimeFallback(),
            updatedBy: user ? { username:user.username || user.nip, nip:user.nip, name:user.name, unit:user.unit } : null
          }, { merge:true });
        },
        async saveAttendance(payload){
          const normalized=normalizeAttendancePayload(payload);
          const docId=normalized.id;
          const ref=fs.doc(db, attendancePath, docId);
          await fs.setDoc(ref, {
            ...cleanForFirestore(normalized),
            id: docId,
            attendanceDocId: docId,
            dedupeKey: docId,
            docIdVersion: 2,
            saveVersion: 6,
            savedAt: fs.serverTimestamp(),
            savedAtLocal: serverTimeFallback()
          }, { merge:true });
          return { id: docId, dedupedRows: normalized.workers.length };
        },
        async loadAttendance(unitKey, reportDate, scheduleKey){
          const payload={ unitKey, reportDate: reportDate || new Date().toISOString().slice(0,10), scheduleKey: scheduleKey || '' };
          const docId=attendanceDocIdFromPayload(payload);
          let snap=await fs.getDoc(fs.doc(db, attendancePath, docId));
          if(!snap.exists()){
            const legacyId=scheduleKey ? `${unitKey}_${scheduleKey}_${payload.reportDate}` : `${unitKey}_${payload.reportDate}`;
            if(legacyId !== docId) snap=await fs.getDoc(fs.doc(db, attendancePath, legacyId));
          }
          if(!snap.exists()) return null;
          const data=snap.data() || null;
          return data ? normalizeAttendancePayload(data) : null;
        },
        async loadAttendanceBatch(requests){
          const reqs=(Array.isArray(requests) ? requests : []).map((req,idx)=>{
            const payload={ unitKey:req && req.unitKey, reportDate:(req && req.reportDate) || new Date().toISOString().slice(0,10), scheduleKey:(req && req.scheduleKey) || '' };
            const docId=attendanceDocIdFromPayload(payload);
            const legacyId=payload.scheduleKey ? `${payload.unitKey}_${payload.scheduleKey}_${payload.reportDate}` : `${payload.unitKey}_${payload.reportDate}`;
            return { key:(req && req.key) || `${payload.unitKey}_${payload.reportDate}_${idx}`, payload, docId, legacyId };
          }).filter(r=>r.payload.unitKey);
          const ids=Array.from(new Set(reqs.flatMap(r=>[r.docId, r.legacyId]).filter(Boolean)));
          const docs={};
          for(let i=0;i<ids.length;i+=30){
            const chunk=ids.slice(i,i+30);
            if(!chunk.length) continue;
            const q=fs.query(fs.collection(db, attendancePath), fs.where(fs.documentId(),'in',chunk));
            const qs=await fs.getDocs(q);
            qs.forEach(snap=>{ docs[snap.id]=snap.data() || null; });
          }
          const out={};
          reqs.forEach(req=>{
            const data=docs[req.docId] || docs[req.legacyId] || null;
            out[req.key]=data ? normalizeAttendancePayload(data) : null;
          });
          return out;
        },

        async pruneAuditLogs(options){
          const opt=options && typeof options==='object' ? options : {};
          const retentionDays=Math.max(7, Math.min(Number(opt.retentionDays || 90), 3650));
          const maxDocs=Math.max(100, Math.min(Number(opt.maxDocs || 1000), 5000));
          const maxScan=Math.max(maxDocs, Math.min(Number(opt.maxScan || 5000), 10000));
          const cutoff=new Date();
          cutoff.setDate(cutoff.getDate()-retentionDays);
          const cutoffIso=cutoff.toISOString();
          let qs;
          try{
            qs=await fs.getDocs(fs.query(fs.collection(db, auditLogsPath), fs.orderBy('createdAtLocal','desc'), fs.limit(maxScan)));
          }catch(err){
            qs=await fs.getDocs(fs.query(fs.collection(db, auditLogsPath), fs.limit(maxScan)));
          }
          const rows=[];
          qs.forEach(snap=>rows.push({ id:snap.id, ...exportValue(snap.data() || {}) }));
          rows.sort((a,b)=>String(b.createdAtLocal || b.exportedAtLocal || '').localeCompare(String(a.createdAtLocal || a.exportedAtLocal || '')));
          const keepIds=new Set(rows.slice(0,maxDocs).map(row=>String(row.id || '')));
          const deleteRows=[];
          rows.forEach((row,idx)=>{
            const id=String(row.id || '').trim();
            if(!id) return;
            const created=String(row.createdAtLocal || row.createdAt || '').slice(0,24);
            const tooOld=created && created < cutoffIso;
            const overMax=idx >= maxDocs || !keepIds.has(id);
            if(tooOld || overMax) deleteRows.push(row);
          });
          let deleted=0;
          for(let i=0;i<deleteRows.length;i+=400){
            const batch=fs.writeBatch(db);
            deleteRows.slice(i,i+400).forEach(row=>{ batch.delete(fs.doc(db, auditLogsPath, String(row.id))); deleted++; });
            await batch.commit();
          }
          return { retentionDays, maxDocs, scanned:rows.length, deleted, remainingEstimate:Math.max(0, rows.length-deleted), cutoffIso, backupRows: opt.backupBeforeDelete === false ? [] : deleteRows };
        },
        async deleteAttendanceRange(unitKey, startDate, endDate){
          const rows=[];
          const makeDate=(v)=>{
            const m=String(v||'').match(/^(\d{4})-(\d{2})-(\d{2})$/);
            return m ? new Date(Number(m[1]), Number(m[2])-1, Number(m[3])) : new Date(String(v||'')+'T00:00:00');
          };
          const two=n=>String(n).padStart(2,'0');
          const fmt=d=>`${d.getFullYear()}-${two(d.getMonth()+1)}-${two(d.getDate())}`;
          const start=makeDate(startDate);
          const end=makeDate(endDate);
          if(isNaN(start) || isNaN(end) || start>end) return { deleted:0 };
          for(const d=new Date(start.getFullYear(),start.getMonth(),start.getDate()); d<=end; d.setDate(d.getDate()+1)){
            rows.push(fmt(d));
          }
          let deleted=0;
          for(let i=0;i<rows.length;i+=225){
            const batch=fs.writeBatch(db);
            rows.slice(i,i+225).forEach(date=>{
              const stableId=attendanceDocIdFromPayload({ unitKey, reportDate:date });
              const legacyId=`${unitKey}_${date}`;
              batch.delete(fs.doc(db, attendancePath, stableId));
              deleted++;
              if(legacyId !== stableId){
                batch.delete(fs.doc(db, attendancePath, legacyId));
                deleted++;
              }
            });
            await batch.commit();
          }
          return { deleted };
        }
      };
      Object.assign(window.AbsensiFirebase, api);
      return api;
    }catch(error){
      console.error('Firebase init error:', error);
      return { enabled:false, error:String(error && error.message ? error.message : error) };
    }
  }

  window.AbsensiFirebase = { enabled:false, ready:init() };
})();
