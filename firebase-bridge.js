(function(){
  const PLACEHOLDER_WORD = 'ISI_';
  const coordinatorPath = 'coordinators';
  const appDataPath = 'app_data';
  const attendancePath = 'attendance';
  const masterDataPath = 'master_data';
  const serverTimeFallback = () => new Date().toISOString();

  function configLooksReady(config){
    return Boolean(config && config.apiKey && config.projectId && !String(config.apiKey).includes(PLACEHOLDER_WORD) && !String(config.projectId).includes(PLACEHOLDER_WORD));
  }
  function normalizeUser(docId, data){
    const username=String(data.username || data.userName || docId || data.nip || '').trim();
    return {
      username,
      nip: String(data.nip || username || docId || '').trim(),
      name: String(data.name || data.nama || 'Koordinator').trim(),
      role: String(data.role || 'koordinator').trim(),
      unit: String(data.unit || data.bagian || 'Muatan Breeder').trim(),
      active: data.active !== false
    };
  }
  function cleanForFirestore(value){
    return JSON.parse(JSON.stringify(value || null));
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
        async loginCoordinator(username, password){
          const cleanUsername=String(username||'').trim();
          const q=fs.query(fs.collection(db, coordinatorPath), fs.where('username','==',cleanUsername), fs.limit(1));
          const qs=await fs.getDocs(q);
          if(qs.empty) return null;
          const snap=qs.docs[0];
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
            role:String(user.role || 'koordinator').trim(),
            unit:String(user.unit || '').trim(),
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

        async saveCoordinator(user, adminUser){
          const cleanUsername=String(user && (user.username || user.nip) || '').trim();
          if(!cleanUsername) throw new Error('Username akun kosong.');
          await fs.setDoc(fs.doc(db, coordinatorPath, cleanUsername), {
            username: cleanUsername,
            nip: String(user.nip || cleanUsername).trim(),
            name: String(user.name || '').trim(),
            password: String(user.password || '').trim(),
            role: String(user.role || 'koordinator').trim(),
            unit: String(user.unit || '').trim(),
            active: user.active !== false,
            updatedAt: fs.serverTimestamp(),
            updatedAtLocal: serverTimeFallback(),
            updatedBy: adminUser ? { username:adminUser.username || adminUser.nip, nip:adminUser.nip, name:adminUser.name, role:adminUser.role } : null
          }, { merge:true });
          return { id: cleanUsername };
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
          const unitKey=payload.unitKey || 'muatan_breeder';
          const date=payload.reportDate || new Date().toISOString().slice(0,10);
          const scheduleKey=payload.scheduleKey ? String(payload.scheduleKey) : '';
          const docId=scheduleKey ? `${unitKey}_${scheduleKey}_${date}` : `${unitKey}_${date}`;
          await fs.setDoc(fs.doc(db, attendancePath, docId), {
            ...cleanForFirestore(payload),
            id: docId,
            saveVersion: 4,
            savedAt: fs.serverTimestamp(),
            savedAtLocal: serverTimeFallback()
          }, { merge:true });
          return { id: docId };
        },
        async loadAttendance(unitKey, reportDate){
          const date=reportDate || new Date().toISOString().slice(0,10);
          const snap=await fs.getDoc(fs.doc(db, attendancePath, `${unitKey}_${date}`));
          if(!snap.exists()) return null;
          return snap.data() || null;
        },
        async deleteAttendanceRange(unitKey, startDate, endDate){
          const rows=[];
          const start=new Date(String(startDate)+'T00:00:00');
          const end=new Date(String(endDate)+'T00:00:00');
          if(isNaN(start) || isNaN(end) || start>end) return { deleted:0 };
          for(const d=new Date(start); d<=end; d.setDate(d.getDate()+1)){
            rows.push(d.toISOString().slice(0,10));
          }
          let deleted=0;
          for(let i=0;i<rows.length;i+=450){
            const batch=fs.writeBatch(db);
            rows.slice(i,i+450).forEach(date=>{
              batch.delete(fs.doc(db, attendancePath, `${unitKey}_${date}`));
              deleted++;
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
