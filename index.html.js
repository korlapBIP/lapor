if ('serviceWorker' in navigator) { window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(()=>{})); }
const STORAGE_KEY = 'absensi_muatan_breeder_pwa_v5';
const ATTENDANCE_KEY = 'absensi_muatan_breeder_attendance_v1';
const PENDING_ATTENDANCE_KEY = 'absensi_muatan_breeder_pending_attendance_v1';
const REPORT_SETTINGS_KEY = 'absensi_muatan_breeder_report_settings_v1';
const GLOBAL_CHECK_TIMES_KEY = 'absensi_breeder_global_check_times_v1';
const AUTO_SHIFT3_ENABLED_KEY = 'absensi_bip_auto_shift3_enabled_v1';
const SHOW_DURATION_REPORT_KEY = 'absensi_bip_show_duration_report_v1';
const COMMERCIAL_KEY = 'muatan_commercial';
const STAPEL_TF_KEY = 'stapel_tf';
const MALLETI_TF_KEY = 'malleti_tf';
const COMMERCIAL_ACTIVITY_DEFS = [
  { key: STAPEL_TF_KEY, label: 'Stapel (TF)', title: 'Input Jadwal Kegiatan Stapel (TF)' },
  { key: MALLETI_TF_KEY, label: 'Malleti (TF)', title: 'Input Jadwal Kegiatan Malleti (TF)' }
];
const LOADING_DOCKS_KEY = 'absensi_bip_loading_docks_commercial_v1';
const COMMERCIAL_DRAFT_KEY = 'absensi_bip_commercial_draft_v1';
let commercialScheduleRowsCache = [];
let commercialActivityRowsCache = {};
let bahanBakuOverzakRowsCache = [];
const BAHAN_BAKU_PAGI_KEY = 'bongkaran_bahan_baku_pagi';
const BAHAN_BAKU_MALAM_KEY = 'bongkaran_bahan_baku_malam';
const SILO_KEY = 'silo';
const SILO_NAME = 'Silo';
const OVERZAK_KEY = 'overzak';
const OVERZAK_NAME = 'Overzak';
const COORDINATOR_ACTIVITY_CHOICE_KEY = 'absensi_bahan_baku_pagi_activity_choice_v1';
const BAHAN_BAKU_GABUNGAN_KEY = 'bongkaran_bahan_baku_gabungan';
const BAHAN_BAKU_GABUNGAN_NAME = 'Bongkaran Bahan Baku Pagi / Malam';
const AUTH_KEY = 'absensi_muatan_breeder_login_simulasi_v1';
const COORDINATORS_KEY = 'absensi_muatan_breeder_coordinator_accounts_v1';
const OLD_KEYS = ['absensi_muatan_breeder_v2_mobile','absensi_muatan_breeder_v1'];
const UNITS = [
  { key:'muatan_breeder', name:'Muatan Breeder' },
  { key:'bongkaran_bahan_baku_pagi', name:'Bongkaran Bahan Baku Pagi' },
  { key:'bongkaran_bahan_baku_malam', name:'Bongkaran Bahan Baku Malam' },
  { key:'silo', name:'Silo' },
  { key:'overzak', name:'Overzak' },
  { key:'oper_oper_bahan_baku', name:'Oper Oper Bahan Baku' },
  { key:'muatan_commercial', name:'Muatan Commercial' },
  { key:'stapel_tf', name:'Stapel (TF)' },
  { key:'malleti_tf', name:'Malleti (TF)' }
];
let adminManagedUnitKey = 'muatan_breeder';
let coordinatorActivityKey = BAHAN_BAKU_PAGI_KEY;
const demoUsers = [
  { username:'admin', nip:'9999', password:'123456', name:'Admin Absensi BIP', role:'admin', unit:'Admin' },
  { username:'breeder', nip:'9001', password:'123456', name:'Koordinator Muatan Breeder', role:'koordinator', unit:'Muatan Breeder' },
  { username:'bb_pagi', nip:'9002', password:'123456', name:'Koordinator Bahan Baku Pagi', role:'koordinator', unit:'Bongkaran Bahan Baku Pagi' },
  { username:'bb_malam', nip:'9003', password:'123456', name:'Koordinator Bahan Baku Malam', role:'koordinator', unit:'Bongkaran Bahan Baku Malam' },
  { username:'oper', nip:'9004', password:'123456', name:'Koordinator Oper Oper Bahan Baku', role:'koordinator', unit:'Oper Oper Bahan Baku' },
  { username:'commercial', nip:'9005', password:'123456', name:'Koordinator Muatan Commercial', role:'koordinator', unit:'Muatan Commercial' }
];
let currentUser = null;
const defaultWorkers = [
  { no:1, nip:'133', name:'Moch. Sholeh', s1:false, s2:false },{ no:2, nip:'16', name:'Joyo', s1:false, s2:false },{ no:3, nip:'17', name:'Muhammad Wahyudi', s1:false, s2:false },{ no:4, nip:'134', name:'Lufi Alfiandi', s1:false, s2:false },{ no:5, nip:'136', name:'Paiman', s1:false, s2:false },{ no:6, nip:'138', name:'Suwoto', s1:false, s2:false },{ no:7, nip:'140', name:'Rohmat', s1:false, s2:false },{ no:8, nip:'143', name:'Santoso', s1:false, s2:false },{ no:9, nip:'247', name:'Untung', s1:false, s2:false },{ no:10, nip:'248', name:'Madsuri', s1:false, s2:false },{ no:11, nip:'250', name:'Matnidi', s1:false, s2:false },{ no:12, nip:'3101', name:'Subur', s1:false, s2:false },{ no:13, nip:'3102', name:'Ahmad Baydowi', s1:false, s2:false },{ no:14, nip:'3104', name:'M Chawibi', s1:false, s2:false },{ no:15, nip:'3105', name:'Jainul Mostofa', s1:false, s2:false },{ no:16, nip:'3106', name:'Hartono', s1:false, s2:false },{ no:17, nip:'3108', name:'Eko', s1:false, s2:false },{ no:18, nip:'3109', name:'Joni Adeka P', s1:false, s2:false },{ no:19, nip:'3110', name:'Syamsul Arifin', s1:false, s2:false },{ no:20, nip:'3111', name:'Busro', s1:false, s2:false },{ no:21, nip:'3112', name:'Choirul Aripin', s1:false, s2:false },{ no:22, nip:'3114', name:'Topan Yunaidi', s1:false, s2:false },{ no:23, nip:'3115', name:'Nanang Bahri', s1:false, s2:false },{ no:24, nip:'3117', name:'M Fahmi Nur Hakim', s1:false, s2:false },{ no:25, nip:'3118', name:'Galih Kurnia Wijaya', s1:false, s2:false },{ no:26, nip:'3119', name:'Abdul Aziz', s1:false, s2:false },{ no:27, nip:'3120', name:'Dicky Andrian', s1:false, s2:false },{ no:28, nip:'3121', name:'Qodar Romdoni', s1:false, s2:false },{ no:29, nip:'3220', name:'Supaat', s1:false, s2:false },{ no:30, nip:'3314', name:'Dymas Angga S', s1:false, s2:false },{ no:31, nip:'3122', name:'Agung Prasetyo', s1:false, s2:false },{ no:32, nip:'3124', name:'Dani Indra Ismawan', s1:false, s2:false },{ no:33, nip:'3125', name:'Farhan Badri', s1:false, s2:false },{ no:34, nip:'3126', name:'Irvan', s1:false, s2:false },{ no:35, nip:'3515', name:'Miftaqul Ulum', s1:false, s2:false }
];
let state = { company:'PT. BUDI INTI PERKASA', reportDate:new Date().toISOString().slice(0,10), workers: JSON.parse(JSON.stringify(defaultWorkers)), allowEmptyWorkers:false };
let adminReportData = null;
const $ = (id) => document.getElementById(id);
function setAuthMode(isLoggedIn){ document.body.classList.toggle('auth-ok', Boolean(isLoggedIn)); document.body.classList.toggle('auth-pending', !isLoggedIn); document.body.classList.toggle('auth-admin', Boolean(isLoggedIn && isAdmin())); }
function renderDemoUsers(){ /* daftar akun uji coba sengaja tidak ditampilkan pada halaman login */ }
function getLocalAccountOverrides(){ try{ return JSON.parse(localStorage.getItem(COORDINATORS_KEY) || '{}') || {}; }catch(err){ return {}; } }
function accountUsername(user){ return String((user && user.username) || (user && user.nip) || '').trim(); }
function normalizeLoginUser(user){ const username=accountUsername(user); return { ...user, username, nip:String(user && user.nip || username), active:user && user.active !== false }; }
function getAllLoginUsers(){
  const overrides=getLocalAccountOverrides();
  const used=new Set();
  const merged=demoUsers.map(base=>{
    const key=accountUsername(base);
    const oldKey=String(base.nip || '');
    const override=overrides[key] || overrides[oldKey] || {};
    used.add(key); if(oldKey) used.add(oldKey);
    if(override && override.username) used.add(String(override.username));
    if(override && override.nip) used.add(String(override.nip));
    return normalizeLoginUser({ ...base, ...override });
  });
  Object.keys(overrides).forEach(key=>{
    const row=normalizeLoginUser(overrides[key]);
    const rowKey=accountUsername(row);
    if(rowKey && !used.has(rowKey)){ merged.push(row); used.add(rowKey); }
  });
  return merged;
}
function saveLocalCoordinatorAccount(user){ if(!user) return; const normalized=normalizeLoginUser(user); const key=accountUsername(normalized); if(!key) return; const overrides=getLocalAccountOverrides(); overrides[key]={ ...overrides[key], ...normalized, username:key }; localStorage.setItem(COORDINATORS_KEY, JSON.stringify(overrides)); }
function saveLocalAdminAccount(user){
  if(!user) return;
  const normalized=normalizeLoginUser(user);
  const baseAdmin=demoUsers.find(u=>u.role==='admin') || { username:'admin', nip:'9999' };
  const baseKey=accountUsername(baseAdmin) || 'admin';
  const overrides=getLocalAccountOverrides();
  Object.keys(overrides).forEach(key=>{ if(overrides[key] && overrides[key].role==='admin' && key!==baseKey) delete overrides[key]; });
  overrides[baseKey]={ ...overrides[baseKey], ...normalized, username:accountUsername(normalized), role:'admin', unit:'Admin', active:true };
  localStorage.setItem(COORDINATORS_KEY, JSON.stringify(overrides));
}
function coordinatorBaseUsers(){ return getAllLoginUsers().filter(u=>u.role==='koordinator'); }
function adminLoginUser(){ return getAllLoginUsers().find(u=>u.role==='admin') || demoUsers.find(u=>u.role==='admin') || demoUsers[0]; }
function coordinatorByUsername(username){ const key=String(username||'').trim(); return coordinatorBaseUsers().find(u=>accountUsername(u)===key) || coordinatorBaseUsers()[0] || null; }
async function syncCloudSession(user){
  try{
    const bridge = await firebaseBridgeReady();
    if(bridge && bridge.enabled && bridge.saveSession && user){
      await bridge.saveSession(user);
    }
  }catch(err){
    console.warn('Sync session gagal:', err);
  }
}
async function clearCloudSession(user){
  try{
    const bridge = await firebaseBridgeReady();
    if(bridge && bridge.enabled && bridge.clearSession && user && user.username){
      await bridge.clearSession(user.username);
    }
  }catch(err){
    console.warn('Hapus session cloud gagal:', err);
  }
}
function saveAuth(user){
  currentUser=user ? { username:accountUsername(user), nip:user.nip, name:user.name, role:user.role, unit:user.unit } : null;
  if(currentUser){
    localStorage.setItem(AUTH_KEY, JSON.stringify(currentUser));
    localStorage.setItem('ABSENSI_LAST_USERNAME', currentUser.username || '');
    resetInactivityTimer();
    syncCloudSession(currentUser);
  } else {
    const oldUser = JSON.parse(localStorage.getItem(AUTH_KEY) || 'null');
    if(oldUser){ clearCloudSession(oldUser); }
    localStorage.removeItem(AUTH_KEY);
    clearTimeout(inactivityTimer);
  }
  loadCoordinatorActivityChoice();
  updateAuthUI();
}
async function loadAuth(){
  try{
    const raw=localStorage.getItem(AUTH_KEY);
    currentUser=raw ? JSON.parse(raw) : null;
    if(!currentUser){
      const lastUsername = localStorage.getItem('ABSENSI_LAST_USERNAME');
      if(lastUsername){
        const bridge = await firebaseBridgeReady();
        if(bridge && bridge.enabled && bridge.loadSession){
          const remoteSession = await bridge.loadSession(lastUsername);
          if(remoteSession && remoteSession.username){
            currentUser = remoteSession;
            localStorage.setItem(AUTH_KEY, JSON.stringify(currentUser));
          }
        }
      }
    }
  }catch(err){
    console.warn(err);
    currentUser=null;
  }
  loadCoordinatorActivityChoice();
  updateAuthUI();
}
const AUTO_LOGOUT_MINUTES = 15;
let inactivityTimer = null;

function resetInactivityTimer(){
  if(!currentUser) return;

  clearTimeout(inactivityTimer);

  inactivityTimer = setTimeout(()=>{
    alert('Sesi login berakhir karena tidak ada aktivitas selama 15 menit.');
    saveAuth(null);

    if($('loginPassword')) $('loginPassword').value='';
    if($('loginNip')) $('loginNip').focus();

    try{
      location.reload();
    }catch(err){}
  }, AUTO_LOGOUT_MINUTES * 60 * 1000);
}

['click','mousemove','keydown','scroll','touchstart'].forEach(evt=>{
  document.addEventListener(evt, ()=>{
    if(currentUser){
      resetInactivityTimer();
    }
  }, true);
});


function unitKey(unit){ return String(unit || 'Muatan Breeder').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'_').replace(/^_+|_+$/g,'') || 'muatan_breeder'; }
function isSiloKey(key){ return String(key || '') === SILO_KEY; }
function isOverzakKey(key){ return String(key || '') === OVERZAK_KEY; }
function unitNameFromKey(key){ if(isSiloKey(key)) return SILO_NAME; if(isOverzakKey(key)) return OVERZAK_NAME; const found=UNITS.find(u=>u.key===key); return found ? found.name : 'Muatan Breeder'; }
function isCommercialKey(key){ return String(key || '') === COMMERCIAL_KEY; }
function normalizeRegu(value){ const raw=String(value||'').trim(); if(!raw) return ''; const m=raw.match(/\d+/); if(m) return String(parseInt(m[0],10)).padStart(2,'0'); return raw.toUpperCase(); }
function normalizeDockName(value){ const raw=String(value||'').trim(); if(!raw) return ''; const m=raw.match(/\d+/); if(m) return String(parseInt(m[0],10)).padStart(2,'0'); return raw; }
function dockLabel(value){ const v=normalizeDockName(value); return v ? `LD ${v}` : '-'; }
function isAdmin(){ return Boolean(currentUser && currentUser.role === 'admin'); }
function coordinatorCanChooseSilo(){ return Boolean(currentUser && currentUser.role==='koordinator' && unitKey(currentUser.unit)===BAHAN_BAKU_PAGI_KEY); }
function normalizeBahanBakuActivityChoice(value){ return isSiloKey(value) ? SILO_KEY : BAHAN_BAKU_PAGI_KEY; }
function loadCoordinatorActivityChoice(){ if(coordinatorCanChooseSilo()){ const saved=localStorage.getItem(COORDINATOR_ACTIVITY_CHOICE_KEY); coordinatorActivityKey = normalizeBahanBakuActivityChoice(saved); } else { coordinatorActivityKey = currentUser && currentUser.unit ? unitKey(currentUser.unit) : BAHAN_BAKU_PAGI_KEY; } }
function currentCoordinatorUnitKey(){ if(coordinatorCanChooseSilo()) return normalizeBahanBakuActivityChoice(coordinatorActivityKey); return currentUser && currentUser.unit ? unitKey(currentUser.unit) : 'muatan_breeder'; }
function activeUnitName(){ return isAdmin() ? unitNameFromKey(adminManagedUnitKey) : unitNameFromKey(currentCoordinatorUnitKey()); }
function adminGlobalTitle(){ return 'Admin Absensi BIP'; }
function adminGlobalLabel(){ return 'Global Semua Bagian'; }
function currentAbsensiTitle(){ return isAdmin() ? adminGlobalTitle() : `Absensi ${activeUnitName()}`; }
function activeUnitKey(){ return isAdmin() ? adminManagedUnitKey : currentCoordinatorUnitKey(); }
function updateCoordinatorActivityUI(){ const field=$('activityField'); const select=$('activitySelect'); const show=coordinatorCanChooseSilo(); if(field) field.style.display=show ? '' : 'none'; if(select){ select.value=normalizeBahanBakuActivityChoice(coordinatorActivityKey); } }
async function changeCoordinatorActivity(value){ if(!coordinatorCanChooseSilo()) return; coordinatorActivityKey = normalizeBahanBakuActivityChoice(value); localStorage.setItem(COORDINATOR_ACTIVITY_CHOICE_KEY, coordinatorActivityKey); updateAuthUI(); await loadState(); renderAll(); }
function isBahanBakuPagiKey(key){ return String(key || '') === BAHAN_BAKU_PAGI_KEY; }
function isBahanBakuMalamKey(key){ return String(key || '') === BAHAN_BAKU_MALAM_KEY; }
function isBahanBakuPagiMalamKey(key){ return isBahanBakuPagiKey(key) || isBahanBakuMalamKey(key); }
function coordinatorAllowedShift(){ return ''; }
function coordinatorSingleShiftMode(){ return Boolean(coordinatorAllowedShift()); }
function coordinatorAllowedShiftLabel(){ return coordinatorAllowedShift()==='s3' ? 'Shift 3' : (coordinatorAllowedShift()==='s2' ? 'Shift 2' : 'Shift 1'); }
function enforceSingleShiftInputRule(){
  const allowed=coordinatorAllowedShift();
  if(!allowed || !state || !Array.isArray(state.workers)) return false;
  let changed=false;
  state.workers.forEach(w=>{
    if(allowed==='s1' && (w.s2 || w.s3)){ w.s2=false; w.s3=false; changed=true; }
    if(allowed==='s2' && (w.s1 || w.s3)){ w.s1=false; w.s3=false; changed=true; }
    if(allowed==='s3' && (w.s1 || w.s2)){ w.s1=false; w.s2=false; changed=true; }
  });
  return changed;
}
function updateSingleShiftUI(){
  const allowed=coordinatorAllowedShift();
  const s1Stat=$('countS1') ? $('countS1').closest('.stat') : null;
  const s2Stat=$('countS2') ? $('countS2').closest('.stat') : null;
  const s3Stat=$('countS3') ? $('countS3').closest('.stat') : null;
  if(s1Stat) s1Stat.style.display=(allowed && allowed!=='s1') ? 'none' : '';
  if(s2Stat) s2Stat.style.display=(allowed && allowed!=='s2') ? 'none' : '';
  if(s3Stat) s3Stat.style.display=(allowed && allowed!=='s3') ? 'none' : '';
  if($('workerFilter')) $('workerFilter').placeholder = allowed ? `Cari NIP, nama, PKWT, atau Freelance... (input ${coordinatorAllowedShiftLabel()} saja)` : 'Cari NIP, nama, PKWT, atau Freelance...';
}
function stateStorageKey(){ return `${STORAGE_KEY}_${activeUnitKey()}`; }
function setFirebaseStatus(mode,text){ const el=$('firebaseStatus'); if(!el) return; el.className=`firebase-status ${mode || 'local'}`; el.textContent=text || '💾 Data Lokal'; }
async function waitFirebase(){ if(window.AbsensiFirebase && window.AbsensiFirebase.ready){ try{ return await window.AbsensiFirebase.ready; }catch(err){ console.warn('Firebase gagal dimuat.', err); return null; } } return null; }

function updateAuthUI(){
  const logged=Boolean(currentUser && (currentUser.username || currentUser.nip));
  if(isAdmin() && $('adminUnitSelect')) $('adminUnitSelect').value=adminManagedUnitKey;
  setAuthMode(logged);
  const title=currentAbsensiTitle();
  if($('appUnitTitle')) $('appUnitTitle').textContent=title;
  document.title=title;
  if(logged){
    const initial=(currentUser.name||'K').trim().charAt(0).toUpperCase();
    const username=currentUser.username || currentUser.nip || '-';
    if($('userAvatar')) $('userAvatar').textContent=initial;
    if($('activeUserName')) $('activeUserName').textContent=currentUser.name || 'Koordinator';
    if($('activeUserUnit')){
      if(isAdmin()){
        $('activeUserUnit').textContent='';
        $('activeUserUnit').style.display='none';
      }else{
        $('activeUserUnit').textContent=coordinatorCanChooseSilo() ? `Username ${username}` : `Username ${username}`;
        $('activeUserUnit').style.display='';
      }
    }
    if($('activeUserBadge')) $('activeUserBadge').textContent=isAdmin()?`👤 Admin • Global`:`👤 ${activeUnitName()}`;
  }
  updateFirebaseStatusUI();
}
async function updateFirebaseStatusUI(){ const bridge=await waitFirebase(); if(bridge && bridge.enabled){ setFirebaseStatus('online','☁️ Firebase Online'); } else if(bridge && bridge.error){ setFirebaseStatus('error','⚠️ Firebase Error'); } else { setFirebaseStatus('local','💾 Data Lokal'); } }
async function loginLocal(username,password){
  const cleanUsername=String(username).trim();
  const bridge=await waitFirebase();
  if(bridge && bridge.enabled && bridge.loginCoordinator){
    const remoteUser=await bridge.loginCoordinator(cleanUsername, String(password));
    if(remoteUser){ saveAuth(remoteUser); if($('loginError')) $('loginError').classList.remove('show'); await loadState(); await renderAll(); if(isAdmin()) { switchToPanel('panelAdmin'); } return true; }
  }
  const user=getAllLoginUsers().find(u=>{ const uName=accountUsername(u); return uName===cleanUsername && u.password===String(password) && u.active !== false; });
  if(!user) return false;
  saveAuth(user); if($('loginError')) $('loginError').classList.remove('show'); await loadState(); await renderAll(); if(isAdmin()) { switchToPanel('panelAdmin'); } return true;
}
function logoutLocal(){ if(!confirm('Keluar dari aplikasi?')) return; saveAuth(null); if($('loginPassword')) $('loginPassword').value=''; if($('loginNip')) $('loginNip').focus(); }
function safeText(value){ return String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function normalizeWorkerStatus(status, nip){ const raw=String(status || '').trim().toLowerCase(); if(raw==='pkwt') return 'PKWT'; if(raw==='freelance' || raw==='free lance' || raw==='tenaga freelance') return 'Freelance'; const n = parseInt(String(nip).replace(/\D/g,''),10); return Number.isFinite(n) && n < 1000 ? 'PKWT' : 'Freelance'; }
function workerType(w){ return normalizeWorkerStatus(w && (w.status || w.statusPekerja || w.type), w && w.nip); }
function cleanWorker(w,i){ const nip=String(w.nip||''); return { no:Number(w.no)||i+1, nip, name:String(w.name||''), status:normalizeWorkerStatus(w.status || w.statusPekerja || w.type, nip), regu:normalizeRegu(w.regu || w.namaRegu || w.nama_regu || ''), s1:Boolean(w.s1), s2:Boolean(w.s2), s3:Boolean(w.s3), checkIn:w.checkIn||'', checkOut:w.checkOut||'' }; }
function todayISO(){ return new Date().toISOString().slice(0,10); }
function yesterdayISO(){ const d=new Date(); d.setDate(d.getDate()-1); return d.toISOString().slice(0,10); }
function defaultWorkersForUnit(unitKeyValue){ return unitKeyValue === 'muatan_breeder' ? JSON.parse(JSON.stringify(defaultWorkers)) : []; }
function ensureBaseWorkers(){ if(!state.reportDate) state.reportDate=todayISO(); if(state.allowEmptyWorkers) { normalizeNo(); return; } if(activeUnitKey()==='muatan_breeder'){ const first=state.workers.find(w=>String(w.nip)==='133'); if(!first){ state.workers.unshift({no:1,nip:'133',name:'Moch. Sholeh',s1:false,s2:false}); } else { first.name='Moch. Sholeh'; } } normalizeNo(); }
async function loadSiloActivityState(){
  const currentDate=state.reportDate || todayISO();
  let baseWorkers=[];
  let allowEmpty=false;
  try{
    const base=await loadUnitStateForImport(SILO_KEY);
    baseWorkers=normalizeWorkersForUnit((base && base.workers) || [], SILO_KEY).map((w,i)=>({...w, no:i+1, s1:false, s2:false, s3:false, kegiatan:'Silo'}));
    allowEmpty=Boolean(base && base.allowEmptyWorkers);
  }catch(err){ console.warn('Data pekerja Silo gagal dibaca.', err); }
  let saved=null;
  try{ const raw=localStorage.getItem(`${STORAGE_KEY}_${SILO_KEY}`); saved=raw?JSON.parse(raw):null; }catch(err){ saved=null; }
  const bridge=await waitFirebase();
  if(bridge && bridge.enabled && bridge.loadAppState){
    try{ const remote=await bridge.loadAppState(SILO_KEY); if(remote && Array.isArray(remote.workers)) saved=remote; }catch(err){ console.warn('Data Silo Firebase gagal dibaca, memakai data lokal.', err); }
  }
  const selectedByNip=new Map();
  if(saved && Array.isArray(saved.workers)){
    saved.workers.map(cleanWorker).forEach(w=>selectedByNip.set(String(w.nip), {s1:Boolean(w.s1), s2:Boolean(w.s2), s3:Boolean(w.s3)}));
  }
  const workers=baseWorkers.map(w=>{ const selected=selectedByNip.get(String(w.nip)) || {}; return {...w, s1:Boolean(selected.s1), s2:Boolean(selected.s2)}; });
  return { company:'PT. BUDI INTI PERKASA', reportDate:(saved && saved.reportDate) || currentDate, workers, allowEmptyWorkers:allowEmpty };
}
function getBlockedOverzakWorkerNips(dateValue){
  const blocked=new Set();
  const addFromPayload=(payload)=>{
    rowsFromAttendancePayload(payload).forEach(r=>{
      if(r && r.s1 && r.nip) blocked.add(String(r.nip).trim());
    });
  };
  try{
    const raw=localStorage.getItem(`${ATTENDANCE_KEY}_${BAHAN_BAKU_PAGI_KEY}_${dateValue}`);
    if(raw) addFromPayload(JSON.parse(raw));
  }catch(err){ console.warn('Filter Overzak dari Bongkaran gagal.', err); }
  try{
    const raw=localStorage.getItem(`${ATTENDANCE_KEY}_${SILO_KEY}_${dateValue}`);
    if(raw) addFromPayload(JSON.parse(raw));
  }catch(err){ console.warn('Filter Overzak dari Silo gagal.', err); }
  return blocked;
}
async function loadOverzakActivityState(){
  const currentDate=state.reportDate || todayISO();
  let baseWorkers=[];
  let allowEmpty=false;
  try{
    const base=await loadUnitStateForImport(OVERZAK_KEY);
    baseWorkers=normalizeWorkersForUnit((base && base.workers) || [], OVERZAK_KEY).map((w,i)=>({...w, no:i+1, s1:false, s2:false, s3:false, kegiatan:'Overzak'}));
    allowEmpty=Boolean(base && base.allowEmptyWorkers);
  }catch(err){ console.warn('Data pekerja Overzak gagal dibaca.', err); }
  let saved=null;
  try{ const raw=localStorage.getItem(`${STORAGE_KEY}_${OVERZAK_KEY}`); saved=raw?JSON.parse(raw):null; }catch(err){ saved=null; }
  const bridge=await waitFirebase();
  if(bridge && bridge.enabled && bridge.loadAppState){
    try{ const remote=await bridge.loadAppState(OVERZAK_KEY); if(remote && Array.isArray(remote.workers)) saved=remote; }catch(err){ console.warn('Data Overzak Firebase gagal dibaca, memakai data lokal.', err); }
  }
  const selectedByNip=new Map();
  if(saved && Array.isArray(saved.workers)){
    saved.workers.map(cleanWorker).forEach(w=>selectedByNip.set(String(w.nip), {s1:Boolean(w.s1), s2:Boolean(w.s2), s3:Boolean(w.s3)}));
  }
  const blocked=getBlockedOverzakWorkerNips(currentDate);
  const workers=baseWorkers.filter(w=>!blocked.has(String(w.nip||'').trim())).map(w=>{ const selected=selectedByNip.get(String(w.nip||'')) || {}; return {...w, s1:Boolean(selected.s1), s2:Boolean(selected.s2), s3:Boolean(selected.s3), kegiatan:'Overzak'}; });
  return { company:'PT. BUDI INTI PERKASA', reportDate:(saved && saved.reportDate) || currentDate, workers, allowEmptyWorkers:allowEmpty };
}
async function loadState(){
  const unitKeyValue=activeUnitKey();
  if(isSiloKey(unitKeyValue)){
    state=await loadSiloActivityState();
    ensureBaseWorkers();
    syncPendingAttendanceOnline().catch(err=>console.warn('Sinkron antrian absensi gagal.', err));
    return;
  }
  state={ company:'PT. BUDI INTI PERKASA', reportDate: state.reportDate || todayISO(), workers: defaultWorkersForUnit(unitKeyValue), allowEmptyWorkers:false };
  try{
    const raw = localStorage.getItem(stateStorageKey());
    const saved = raw ? JSON.parse(raw) : null;
    if(saved && Array.isArray(saved.workers)){ state = { company:'PT. BUDI INTI PERKASA', reportDate:saved.reportDate || todayISO(), workers:saved.workers.map(cleanWorker), allowEmptyWorkers:Boolean(saved.allowEmptyWorkers) }; }
  }catch(err){ console.warn('Data lokal gagal dibaca.', err); }
  const bridge=await waitFirebase();
  if(bridge && bridge.enabled && bridge.loadAppState){
    try{
      const remote=await bridge.loadAppState(unitKeyValue);
      if(remote && Array.isArray(remote.workers)){
        state={ company:'PT. BUDI INTI PERKASA', reportDate:remote.reportDate || state.reportDate || todayISO(), workers:remote.workers.map(cleanWorker), allowEmptyWorkers:Boolean(remote.allowEmptyWorkers) };
        localStorage.setItem(stateStorageKey(), JSON.stringify(state));
      }
    }catch(err){ console.warn('Data Firebase gagal dibaca, memakai data lokal.', err); }
  }
  ensureBaseWorkers();
  if(!isAdmin() && isCommercialKey(unitKeyValue)) applyCommercialDraftSelection();
  enforceSingleShiftInputRule();
  syncPendingAttendanceOnline().catch(err=>console.warn('Sinkron antrian absensi gagal.', err));
}
function saveState(){
  if(!isAdmin() && activeUnitKey()===BAHAN_BAKU_PAGI_KEY){ saveBahanBakuOverzakDraftSelection(); }
  if(!isAdmin() && isCommercialKey(activeUnitKey())){ saveCommercialDraftSelection(); return; }
  localStorage.setItem(stateStorageKey(), JSON.stringify(state));
  const bridge=window.AbsensiFirebase;
  if(bridge && bridge.enabled && bridge.saveAppState){
    bridge.saveAppState(activeUnitKey(), state, currentUser).catch(err=>console.warn('Sinkron Firebase gagal.', err));
  }
}

function bahanBakuOverzakDraftKey(){ return `${STORAGE_KEY}_${BAHAN_BAKU_PAGI_KEY}_overzak_${state.reportDate || todayISO()}`; }
function readBahanBakuOverzakDraft(){ try{ const raw=localStorage.getItem(bahanBakuOverzakDraftKey()); const arr=raw?JSON.parse(raw):[]; return Array.isArray(arr)?arr:[]; }catch(err){ return []; } }
function getBlockedOverzakEmbeddedNips(){
  const blocked=new Set();
  try{ (state.workers||[]).forEach(w=>{ if(w && w.s1 && w.nip) blocked.add(String(w.nip).trim()); }); }catch(err){}
  try{
    const raw=localStorage.getItem(`${ATTENDANCE_KEY}_${SILO_KEY}_${state.reportDate || todayISO()}`);
    if(raw){ rowsFromAttendancePayload(JSON.parse(raw)).forEach(r=>{ if(r && r.s1 && r.nip) blocked.add(String(r.nip).trim()); }); }
  }catch(err){ console.warn('Filter pekerja Overzak dari Silo gagal.', err); }
  return blocked;
}
async function loadBahanBakuOverzakMasterRows(){
  try{
    const unitState=await loadUnitStateForImport(OVERZAK_KEY);
    bahanBakuOverzakRowsCache=normalizeWorkersForUnit((unitState && unitState.workers) || [], OVERZAK_KEY).map((w,i)=>({...w, no:i+1, kegiatan:'Overzak', s1:false, s2:false, s3:false, checkIn:'', checkOut:''}));
  }catch(err){
    console.warn('Data pekerja Overzak gagal dibaca.', err);
    bahanBakuOverzakRowsCache=[];
  }
  return bahanBakuOverzakRowsCache;
}
function getBahanBakuOverzakRowsFromDom(){
  const rows=[];
  const saved=readBahanBakuOverzakDraft();
  const savedByNip=new Map(saved.map(r=>[String(r.nip||''), r]));
  const blocked=getBlockedOverzakEmbeddedNips();
  (bahanBakuOverzakRowsCache||[]).forEach((w,i)=>{
    const nip=String(w.nip||'').trim();
    if(!nip || blocked.has(nip)) return;
    const safeNip=nip.replace(/\"/g,'&quot;');
    const s1El=document.querySelector(`[data-overzak-shift="s1"][data-nip="${safeNip}"]`);
    const s2El=document.querySelector(`[data-overzak-shift="s2"][data-nip="${safeNip}"]`);
    const s3El=document.querySelector(`[data-overzak-shift="s3"][data-nip="${safeNip}"]`);
    const savedRow=savedByNip.get(nip) || {};
    rows.push({...w, no:Number(w.no)||i+1, kegiatan:'Overzak', s1:Boolean(s1El ? s1El.checked : savedRow.s1), s2:Boolean(s2El ? s2El.checked : savedRow.s2), s3:Boolean(s3El ? s3El.checked : savedRow.s3), checkIn:'', checkOut:''});
  });
  return rows;
}
function selectedBahanBakuOverzakRows(){
  if(isAdmin() || activeUnitKey()!==BAHAN_BAKU_PAGI_KEY) return [];
  return getBahanBakuOverzakRowsFromDom().filter(w=>w.s1 || w.s2 || w.s3).map(w=>({...w, kegiatan:'Overzak', checkIn:'', checkOut:''}));
}
function saveBahanBakuOverzakDraftSelection(){
  if(isAdmin() || activeUnitKey()!==BAHAN_BAKU_PAGI_KEY) return;
  const rows=getBahanBakuOverzakRowsFromDom().filter(w=>w.s1 || w.s2 || w.s3).map(w=>({nip:String(w.nip||''), s1:Boolean(w.s1), s2:Boolean(w.s2), s3:Boolean(w.s3)}));
  try{ localStorage.setItem(bahanBakuOverzakDraftKey(), JSON.stringify(rows)); }catch(err){ console.warn('Simpan draft Overzak gagal.', err); }
}
function renderBahanBakuOverzakSection(){
  if(isAdmin() || activeUnitKey()!==BAHAN_BAKU_PAGI_KEY) return '';
  const rows=getBahanBakuOverzakRowsFromDom();
  const body=rows.length ? `<div class="overzak-worker-grid">${rows.map((w,i)=>{
    const type=workerType(w).toUpperCase();
    const cardClass=workerType(w)==='PKWT'?'pkwt':'freelance';
    const nip=safeText(w.nip);
    return `<div class="worker-card overzak-worker-card ${cardClass}" data-overzak-no="${i+1}">
      <div class="worker-top"><div class="worker-nip">NIP ${nip || '-'}</div><div class="worker-name">${safeText(w.name)}</div><div class="worker-status">${safeText(type)}</div></div>
      <div class="shift-row">
        <label class="shift-toggle s1">S1 <input type="checkbox" data-overzak-shift="s1" data-nip="${nip}" ${w.s1?'checked':''}><span class="checkmark">✓</span></label>
        <label class="shift-toggle s2">S2 <input type="checkbox" data-overzak-shift="s2" data-nip="${nip}" ${w.s2?'checked':''}><span class="checkmark">✓</span></label>
        <label class="shift-toggle s3">S3 <input type="checkbox" data-overzak-shift="s3" data-nip="${nip}" ${w.s3?'checked':''}><span class="checkmark">✓</span></label>
      </div>
    </div>`;
  }).join('')}</div>` : '<div class="empty">Tidak ada pekerja tersedia untuk Overzak. Import pekerja Overzak dari Admin > Import Data. Pekerja yang sudah terpilih di Bongkaran Shift 1 atau Silo Shift 1 tidak ditampilkan.</div>';
  return `<div class="commercial-activity-section bahan-baku-overzak overzak-card-section"><div class="commercial-activity-title">Input Jadwal Kegiatan Overzak - Shift 1, Shift 2 &amp; Shift 3</div>${body}</div>`;
}

function selectedWorkers(){
  if(!isAdmin() && isCommercialKey(activeUnitKey())) return selectedCommercialReportRows();
  const base=(state.workers||[]).filter(w => w.s1 || w.s2 || w.s3).sort((a,b)=>(Number(a.no)||0)-(Number(b.no)||0)).map(w=>({...w, kegiatan:w.kegiatan || (activeUnitKey()===BAHAN_BAKU_PAGI_KEY ? 'Bongkaran' : '')}));
  if(!isAdmin() && activeUnitKey()===BAHAN_BAKU_PAGI_KEY){ return [...base, ...selectedBahanBakuOverzakRows()].map((w,i)=>({...w,no:i+1})); }
  return base;
}

function formatLongDate(dateValue){ if(!dateValue) return 'HARI - TANGGAL'; const date = new Date(dateValue + 'T00:00:00'); const hari=['MINGGU','SENIN','SELASA','RABU','KAMIS','JUMAT','SABTU'][date.getDay()]; const bulan=['JANUARI','FEBRUARI','MARET','APRIL','MEI','JUNI','JULI','AGUSTUS','SEPTEMBER','OKTOBER','NOVEMBER','DESEMBER'][date.getMonth()]; return `HARI ${hari} - TANGGAL ${String(date.getDate()).padStart(2,'0')} ${bulan} ${date.getFullYear()}`; }
function updateCounts(){
  if(coordinatorSingleShiftMode()) enforceSingleShiftInputRule();
  let rows;
  if(!isAdmin() && isCommercialKey(activeUnitKey())) rows=selectedCommercialReportRows();
  if(!isAdmin() && activeUnitKey()===BAHAN_BAKU_PAGI_KEY) rows=selectedWorkers();
  const baseRows=rows || state.workers || [];
  const s1=baseRows.filter(w=>w.s1).length;
  const s2=baseRows.filter(w=>w.s2).length;
  const s3=baseRows.filter(w=>w.s3).length;
  const total=rows ? rows.length : selectedWorkers().length;
  ['countS1','sumS1'].forEach(id=>{ if($(id)) $(id).textContent=s1; });
  ['countS2','sumS2'].forEach(id=>{ if($(id)) $(id).textContent=s2; });
  ['countS3','sumS3'].forEach(id=>{ if($(id)) $(id).textContent=s3; });
  ['countTotal','sumTotal','selectedCountBadge'].forEach(id=>{ if($(id)) $(id).textContent=total; });
  updateSingleShiftUI();
}
function syncInputs(){ if($('reportDate')) $('reportDate').value = state.reportDate || todayISO(); updateCoordinatorActivityUI(); }
function renderDropdowns(){ const pkwt = state.workers.filter(w=>workerType(w)==='PKWT').sort((a,b)=>a.no-b.no); const free = state.workers.filter(w=>workerType(w)==='Freelance').sort((a,b)=>a.no-b.no); $('pkwtCount').textContent = `${pkwt.length} data`; $('freelanceCount').textContent = `${free.length} data`; const make = (rows, text) => '<option value="">'+text+'</option>' + rows.map(w=>`<option value="${w.no}">${safeText(w.nip)} - ${safeText(w.name)}</option>`).join(''); $('selectPkwt').innerHTML = make(pkwt, 'Pilih pekerja PKWT'); $('selectFreelance').innerHTML = make(free, 'Pilih pekerja Freelance'); }

function getBlockedSiloShift1WorkerNips(){
  try{
    if(!coordinatorCanChooseSilo()) return new Set();
    if(isSiloKey(activeUnitKey())) return new Set();
    if(activeUnitKey() !== BAHAN_BAKU_PAGI_KEY) return new Set();
    const dateValue=state.reportDate || todayISO();
    const siloRaw=localStorage.getItem(`${ATTENDANCE_KEY}_${SILO_KEY}_${dateValue}`);
    if(!siloRaw) return new Set();
    const siloData=JSON.parse(siloRaw);
    const rows=rowsFromAttendancePayload(siloData);
    return new Set(rows.filter(w=>w && w.s1).map(w=>String(w.nip || '').trim()).filter(Boolean));
  }catch(err){
    console.warn('Filter pekerja SILO Shift 1 gagal diproses.', err);
    return new Set();
  }
}

function getLocalLoadingDocks(){
  try{ const arr=JSON.parse(localStorage.getItem(LOADING_DOCKS_KEY)||'null'); if(Array.isArray(arr) && arr.length) return arr.map(normalizeDockName).filter(Boolean); }catch(err){}
  return ['01','02','03'];
}
async function getLoadingDocks(){
  let rows=getLocalLoadingDocks();
  const bridge=await waitFirebase();
  if(bridge && bridge.enabled && bridge.loadMasterData){
    try{ const remote=await bridge.loadMasterData('commercial_loading_docks'); if(remote && Array.isArray(remote.items) && remote.items.length){ rows=remote.items.map(normalizeDockName).filter(Boolean); localStorage.setItem(LOADING_DOCKS_KEY, JSON.stringify(rows)); } }catch(err){ console.warn('Load loading dock Firebase gagal.', err); }
  }
  return Array.from(new Set(rows)).sort((a,b)=>(parseInt(a,10)||999)-(parseInt(b,10)||999) || a.localeCompare(b));
}
async function saveLoadingDocks(rows){
  const clean=Array.from(new Set((rows||[]).map(normalizeDockName).filter(Boolean))).sort((a,b)=>(parseInt(a,10)||999)-(parseInt(b,10)||999) || a.localeCompare(b));
  localStorage.setItem(LOADING_DOCKS_KEY, JSON.stringify(clean));
  const bridge=window.AbsensiFirebase;
  if(bridge && bridge.enabled && bridge.saveMasterData){ try{ await bridge.saveMasterData('commercial_loading_docks', {items:clean}, currentUser); }catch(err){ console.warn('Simpan loading dock Firebase gagal.', err); } }
  return clean;
}
function commercialReguList(){ return Array.from(new Set((state.workers||[]).map(w=>normalizeRegu(w.regu)).filter(Boolean))).sort((a,b)=>(parseInt(a,10)||999)-(parseInt(b,10)||999) || a.localeCompare(b)); }
function commercialSelection(){ return { dock:'', regu:'' }; }
function commercialScheduleKey(){ return ''; }
function commercialDraftStorageKey(){ const date=state.reportDate || todayISO(); return `${COMMERCIAL_DRAFT_KEY}_${date}_matrix`; }
function commercialAssignmentId(dock, regu){ return `LD${normalizeDockName(dock)}-R${normalizeRegu(regu)}`; }
function commercialLdReguLabel(dock, regu){
  const d=normalizeDockName(dock), r=normalizeRegu(regu);
  return d && r ? `LD ${d} - Regu ${r}` : '';
}
function isCommercialTfActivityRow(row){
  const key=String((row && row.activityKey) || '').toLowerCase();
  const label=String((row && (row.ldRegu || row.activityLabel || row.unit || row.bagian)) || '').toLowerCase();
  return key===STAPEL_TF_KEY || key===MALLETI_TF_KEY || label.includes('stapel') || label.includes('malleti') || label.includes('mallet');
}
function commercialCheckInOutValue(row, type){
  if(isCommercialTfActivityRow(row)) return '';
  return String(type==='in' ? (row.checkIn || row.cekIn || '') : (row.checkOut || row.cekOut || '')).trim();
}
function commercialReportRowsForAssignment(row){
  const dock=normalizeDockName(row.dock), regu=normalizeRegu(row.regu);
  if(!dock || !regu || (!row.s1 && !row.s2 && !row.s3)) return [];
  const workers=(state.workers||[]).filter(w=>normalizeRegu(w.regu)===regu).sort((a,b)=>(Number(a.no)||0)-(Number(b.no)||0));
  const ldRegu=commercialLdReguLabel(dock, regu);
  return workers.map(w=>({
    no:Number(w.no)||0,
    ldRegu,
    nip:String(w.nip||''),
    name:String(w.name||''),
    status:w.status || workerType(w),
    type:w.type || workerType(w),
    regu,
    loadingDock:dock,
    s1:Boolean(row.s1),
    s2:Boolean(row.s2),
    s3:Boolean(row.s3),
    checkIn:'',
    checkOut:''
  }));
}
function commercialReportRow(row, index){
  const dock=normalizeDockName(row.dock), regu=normalizeRegu(row.regu);
  return { no:index+1, ldRegu:commercialLdReguLabel(dock, regu), nip:commercialAssignmentId(dock, regu), name:`${dockLabel(dock)} - Regu ${regu}`, status:'Loading Dock', regu, loadingDock:dock, s1:Boolean(row.s1), s2:Boolean(row.s2), s3:Boolean(row.s3), checkIn:row.checkIn||'', checkOut:row.checkOut||'' };
}
function readCommercialDraftData(){
  try{
    const raw=localStorage.getItem(commercialDraftStorageKey());
    const saved=raw?JSON.parse(raw):null;
    return { rows:Array.isArray(saved && saved.rows) ? saved.rows : [], activities:(saved && saved.activities && typeof saved.activities==='object') ? saved.activities : {} };
  }catch(err){ return {rows:[], activities:{}}; }
}
function readCommercialDraftRows(){ return readCommercialDraftData().rows; }
function commercialActivitySelectedMap(activityKey){
  const arr=readCommercialDraftData().activities[activityKey] || [];
  return new Map((Array.isArray(arr)?arr:[]).map(r=>[String(r.nip||''), {s1:Boolean(r.s1), s2:Boolean(r.s2), s3:Boolean(r.s3)}]));
}
async function loadCommercialActivityRows(){
  const next={};
  for(const def of COMMERCIAL_ACTIVITY_DEFS){
    let unitState={workers:[]};
    try{ unitState=await loadUnitStateForImport(def.key); }catch(err){ console.warn('Load pekerja '+def.label+' gagal', err); }
    const selected=commercialActivitySelectedMap(def.key);
    next[def.key]=(unitState.workers||[]).map((w,i)=>{
      const saved=selected.get(String(w.nip||'')) || {};
      return {...w, no:Number(w.no)||i+1, activityKey:def.key, activityLabel:def.label, ldRegu:def.label, s1:Boolean(saved.s1), s2:Boolean(saved.s2), s3:Boolean(saved.s3)};
    });
  }
  commercialActivityRowsCache=next;
  return next;
}
function getCommercialActivityRows(){
  const rows=[];
  COMMERCIAL_ACTIVITY_DEFS.forEach(def=>{
    const cached=(commercialActivityRowsCache && commercialActivityRowsCache[def.key]) || [];
    cached.forEach(w=>{
      const safeNip=String(w.nip||'').replace(/\"/g,'&quot;');
      const s1=document.querySelector(`[data-commercial-activity-shift="s1"][data-activity-key="${def.key}"][data-nip="${safeNip}"]`);
      const s2=document.querySelector(`[data-commercial-activity-shift="s2"][data-activity-key="${def.key}"][data-nip="${safeNip}"]`);
      const s3=document.querySelector(`[data-commercial-activity-shift="s3"][data-activity-key="${def.key}"][data-nip="${safeNip}"]`);
      const row={...w, ldRegu:def.label, activityKey:def.key, activityLabel:def.label, s1:Boolean(s1 ? s1.checked : w.s1), s2:Boolean(s2 ? s2.checked : w.s2), s3:Boolean(s3 ? s3.checked : w.s3), loadingDock:'', regu:''};
      w.s1=row.s1; w.s2=row.s2; w.s3=row.s3;
      rows.push(row);
    });
  });
  return rows;
}
function selectedCommercialActivityReportRows(){
  const rows=[];
  getCommercialActivityRows().filter(w=>w.s1 || w.s2 || w.s3).forEach(w=>rows.push({
    no:Number(w.no)||0,
    ldRegu:w.ldRegu || w.activityLabel || '',
    nip:String(w.nip||''),
    name:String(w.name||''),
    status:w.status || workerType(w),
    type:w.type || workerType(w),
    regu:'',
    loadingDock:'',
    activityKey:w.activityKey || '',
    activityLabel:w.activityLabel || w.ldRegu || '',
    s1:Boolean(w.s1),
    s2:Boolean(w.s2),
    s3:Boolean(w.s3),
    checkIn:'',
    checkOut:''
  }));
  return rows;
}
function renderCommercialActivitySections(){
  return COMMERCIAL_ACTIVITY_DEFS.map(def=>{
    const rows=(commercialActivityRowsCache && commercialActivityRowsCache[def.key]) || [];
    const body=rows.length ? rows.map((w,i)=>`<div class="commercial-activity-row"><div>${i+1}</div><div>${safeText(w.nip)}</div><div class="activity-worker-name">${safeText(w.name)}</div><label><input type="checkbox" data-commercial-activity-shift="s1" data-activity-key="${safeText(def.key)}" data-nip="${safeText(w.nip)}" ${w.s1?'checked':''}> S1</label><label><input type="checkbox" data-commercial-activity-shift="s2" data-activity-key="${safeText(def.key)}" data-nip="${safeText(w.nip)}" ${w.s2?'checked':''}> S2</label><label><input type="checkbox" data-commercial-activity-shift="s3" data-activity-key="${safeText(def.key)}" data-nip="${safeText(w.nip)}" ${w.s3?'checked':''}> S3</label></div>`).join('') : `<div class="empty">Belum ada pekerja untuk ${safeText(def.label)}. Tambahkan dari Admin &gt; CRUD Data Pekerja.</div>`;
    return `<div class="commercial-activity-section"><div class="commercial-activity-title">${safeText(def.title)}</div><div class="commercial-activity-head"><div>No</div><div>NIP</div><div>Nama Pekerja</div><div>Shift 1</div><div>Shift 2</div><div>Shift 3</div></div>${body}</div>`;
  }).join('');
}
function getCommercialAssignmentRows(){
  const selects=document.querySelectorAll('[data-commercial-regu-select]');
  if(selects && selects.length){
    enforceUniqueCommercialReguSelection();
    refreshCommercialReguSelectOptions();
    const rows=[];
    selects.forEach(sel=>{
      const dock=normalizeDockName(sel.dataset.dock);
      const regu=normalizeRegu(sel.value);
      const s1=document.querySelector(`[data-commercial-shift="s1"][data-dock="${dock}"]`);
      const s2=document.querySelector(`[data-commercial-shift="s2"][data-dock="${dock}"]`);
      const s3=document.querySelector(`[data-commercial-shift="s3"][data-dock="${dock}"]`);
      rows.push({dock, regu, s1:Boolean(s1 && s1.checked), s2:Boolean(s2 && s2.checked), s3:Boolean(s3 && s3.checked)});
    });
    commercialScheduleRowsCache=rows.filter(r=>r.dock).sort((a,b)=>(parseInt(a.dock,10)||999)-(parseInt(b.dock,10)||999) || a.dock.localeCompare(b.dock));
  }
  return commercialScheduleRowsCache || [];
}

function enforceUniqueCommercialReguSelection(changedSelect){
  const selects=Array.from(document.querySelectorAll('[data-commercial-regu-select]'));
  if(changedSelect){
    const current=normalizeRegu(changedSelect.value);
    if(current){
      const duplicate=selects.find(sel=>sel!==changedSelect && normalizeRegu(sel.value)===current);
      if(duplicate){
        changedSelect.value='';
        alert('Regu tersebut sudah dipilih pada LD lain. Satu Regu hanya boleh dipakai pada satu LD.');
      }
    }
  }
  const used=new Set();
  selects.forEach(sel=>{
    const val=normalizeRegu(sel.value);
    if(val){
      if(used.has(val)) sel.value='';
      else used.add(val);
    }
  });
}
function refreshCommercialReguSelectOptions(){
  const selects=Array.from(document.querySelectorAll('[data-commercial-regu-select]'));
  selects.forEach(sel=>{
    const current=normalizeRegu(sel.value);
    const usedByOther=new Set(selects.filter(other=>other!==sel).map(other=>normalizeRegu(other.value)).filter(Boolean));
    Array.from(sel.options||[]).forEach(opt=>{
      const val=normalizeRegu(opt.value);
      if(!val){ opt.disabled=false; opt.hidden=false; return; }
      const blocked=usedByOther.has(val) && val!==current;
      opt.disabled=blocked;
      opt.hidden=blocked;
    });
  });
}
function selectedCommercialReportRows(){
  const rows=[];
  getCommercialAssignmentRows().filter(r=>normalizeRegu(r.regu) && (r.s1 || r.s2 || r.s3)).forEach(assignment=>{
    rows.push(...commercialReportRowsForAssignment(assignment));
  });
  rows.push(...selectedCommercialActivityReportRows());
  rows.forEach((r,i)=>{ r.no=i+1; });
  return rows;
}
function saveCommercialDraftSelection(){
  if(!isCommercialKey(activeUnitKey()) || isAdmin()) return;
  const rows=getCommercialAssignmentRows().filter(r=>normalizeRegu(r.regu) && (r.s1 || r.s2 || r.s3)).map(r=>({dock:normalizeDockName(r.dock), regu:normalizeRegu(r.regu), s1:Boolean(r.s1), s2:Boolean(r.s2), s3:Boolean(r.s3)}));
  const activities={};
  COMMERCIAL_ACTIVITY_DEFS.forEach(def=>{
    activities[def.key]=getCommercialActivityRows().filter(w=>w.activityKey===def.key && (w.s1 || w.s2 || w.s3)).map(w=>({nip:String(w.nip||''), s1:Boolean(w.s1), s2:Boolean(w.s2), s3:Boolean(w.s3)}));
  });
  try{ localStorage.setItem(commercialDraftStorageKey(), JSON.stringify({reportDate:state.reportDate||todayISO(), rows, activities, updatedAt:new Date().toISOString()})); }catch(err){ console.warn('Simpan draft commercial gagal.', err); }
}
function applyCommercialDraftSelection(){
  if(!isCommercialKey(activeUnitKey()) || isAdmin()) return;
  const savedRows=readCommercialDraftRows();
  const byDock=new Map(savedRows.map(r=>[normalizeDockName(r.dock), r]));
  commercialScheduleRowsCache=(commercialScheduleRowsCache||[]).map(r=>{ const saved=byDock.get(normalizeDockName(r.dock)); return {...r, regu:normalizeRegu(saved && saved.regu) || normalizeRegu(r.regu), s1:Boolean(saved && saved.s1), s2:Boolean(saved && saved.s2), s3:Boolean(saved && saved.s3)}; });
}
async function updateCommercialScheduleUI(){
  const wrap=$('commercialScheduleTools'); if(!wrap) return false;
  const show=!isAdmin() && isCommercialKey(activeUnitKey());
  wrap.classList.toggle('show', show);
  const searchRow=$('workerFilter') ? $('workerFilter').closest('.search-row') : null;
  if(searchRow) searchRow.style.display=show ? 'none' : '';
  if(!show) return false;
  const matrix=$('commercialScheduleMatrix');
  await loadCommercialActivityRows();
  const docks=await getLoadingDocks();
  const regus=commercialReguList();
  const savedByDock=new Map(readCommercialDraftRows().map(r=>[normalizeDockName(r.dock), r]));
  const rows=docks.map(d=>{ const saved=savedByDock.get(normalizeDockName(d)); return {dock:d, regu:normalizeRegu(saved && saved.regu), s1:Boolean(saved && saved.s1), s2:Boolean(saved && saved.s2), s3:Boolean(saved && saved.s3)}; });
  commercialScheduleRowsCache=rows;
  if(matrix){
    if(!docks.length || !regus.length){
      matrix.innerHTML='<div class="empty">Belum ada data Loading Dock atau Regu. Admin perlu membuat Loading Dock dan import pekerja Muatan Commercial dengan kolom Regu.</div>' + renderCommercialActivitySections();
    }else{
      const usedByOther=(dock, selected)=>new Set(rows.filter(x=>normalizeDockName(x.dock)!==normalizeDockName(dock)).map(x=>normalizeRegu(x.regu)).filter(Boolean));
      const reguOptions=(dock, selected)=>{
        const current=normalizeRegu(selected);
        const used=usedByOther(dock, current);
        return '<option value="">Regu</option>'+regus.map(r=>{
          const isSelected=current===r;
          const disabled=used.has(r) && !isSelected;
          return `<option value="${safeText(r)}" ${isSelected?'selected':''} ${disabled?'disabled hidden':''}>Regu ${safeText(r)}</option>`;
        }).join('');
      };
      const dockMatrix='<div class="commercial-matrix-head"><div>LD</div><div>Regu</div><div>Shift 1</div><div>Shift 2</div><div>Shift 3</div></div>' + rows.map(r=>`<div class="commercial-matrix-row" data-commercial-row="${safeText(normalizeDockName(r.dock))}"><div class="dock-name">${safeText(dockLabel(r.dock))}</div><div><select class="commercial-regu-select" data-commercial-regu-select data-dock="${safeText(r.dock)}">${reguOptions(r.dock, r.regu)}</select></div><label><input type="checkbox" data-commercial-shift="s1" data-dock="${safeText(r.dock)}" ${r.s1?'checked':''}> S1</label><label><input type="checkbox" data-commercial-shift="s2" data-dock="${safeText(r.dock)}" ${r.s2?'checked':''}> S2</label><label><input type="checkbox" data-commercial-shift="s3" data-dock="${safeText(r.dock)}" ${r.s3?'checked':''}> S3</label></div>`).join('');
      matrix.innerHTML=dockMatrix + renderCommercialActivitySections();
      refreshCommercialReguSelectOptions();
    }
  }
  const selected=rows.filter(r=>normalizeRegu(r.regu) && (r.s1 || r.s2 || r.s3));
  const selectedActivities=selectedCommercialActivityReportRows().length;
  if($('commercialScheduleSummary')) $('commercialScheduleSummary').innerHTML = `Jadwal Muatan Commercial: tampil <b>${rows.length}</b> LD. Terpilih <b>${selected.length}</b> LD dan <b>${selectedActivities}</b> pekerja kegiatan Stapel/Malleti. Saat Shift 1 dichecklist, Shift 2 dan Shift 3 bisa ikut dipilih dan tetap bisa diubah jika hanya masuk Shift 1.`;
  if($('workerShownCount')) $('workerShownCount').textContent=rows.length;
  return true;
}
async function renderAdminLoadingDocks(){ if(!isAdmin()) return; const list=$('adminDockList'); if(!list) return; const docks=await getLoadingDocks(); list.innerHTML=docks.length?docks.map(d=>`<div class="dock-row"><div><div class="name">${safeText(dockLabel(d))}</div><div class="meta">Kode: ${safeText(d)}</div></div><button class="btn danger" data-dock-delete="${safeText(d)}">Hapus</button></div>`).join(''):'<div class="empty-admin-list">Belum ada loading dock.</div>'; }
async function adminAddDock(){ if(!isAdmin()) return; const input=$('adminDockName'); const name=normalizeDockName(input?input.value:''); if(!name){ alert('Isi nama Loading Dock terlebih dahulu.'); return; } const docks=getLocalLoadingDocks(); if(docks.includes(name)){ alert('Loading Dock sudah ada.'); return; } await saveLoadingDocks([...docks,name]); if(input) input.value=''; await renderAdminLoadingDocks(); adminLog('Loading Dock ditambahkan: '+dockLabel(name)); }
async function adminResetDocks(){ if(!isAdmin()) return; if(!confirm('Reset Loading Dock ke default 01, 02, 03?')) return; await saveLoadingDocks(['01','02','03']); await renderAdminLoadingDocks(); adminLog('Loading Dock direset ke default 01, 02, 03.'); }
async function adminDeleteDock(value){ if(!isAdmin()) return; const dock=normalizeDockName(value); if(!dock) return; if(!confirm('Hapus '+dockLabel(dock)+'?')) return; await saveLoadingDocks(getLocalLoadingDocks().filter(d=>d!==dock)); await renderAdminLoadingDocks(); adminLog('Loading Dock dihapus: '+dockLabel(dock)); }

async function renderWorkers(){
  if(coordinatorSingleShiftMode()) enforceSingleShiftInputRule();
  const isCommercialMatrix = await updateCommercialScheduleUI();
  if(isCommercialMatrix){
    renderDropdowns();
    updateSingleShiftUI();
    const list=$('workerList');
    if(list) list.innerHTML='<div class="commercial-worker-hidden-note">Daftar pekerja tiap regu LD tidak ditampilkan. Pilih 1 Regu per LD, lalu gunakan input Stapel (TF) / Malleti (TF) untuk kegiatan tambahan.</div>';
    updateCounts();
    return;
  }
  renderDropdowns();
  updateSingleShiftUI();
  if(activeUnitKey()===BAHAN_BAKU_PAGI_KEY){ await loadBahanBakuOverzakMasterRows(); }
  const allowed=coordinatorAllowedShift();
  const q=$('workerFilter').value.trim().toLowerCase();
  const blockedSiloShift1Nips=getBlockedSiloShift1WorkerNips();
  const commercialSel=commercialSelection();
  const rows=state.workers.filter(w=>{
    if(!isAdmin() && isCommercialKey(activeUnitKey())){ if(!commercialSel.dock || !commercialSel.regu) return false; if(normalizeRegu(w.regu)!==commercialSel.regu) return false; }
    const t=workerType(w).toLowerCase();
    const match=!q || w.nip.toLowerCase().includes(q) || w.name.toLowerCase().includes(q) || t.includes(q);
    if(!match) return false;
    if(blockedSiloShift1Nips.has(String(w.nip || '').trim())) return false;
    return true;
  }).sort((a,b)=>a.no-b.no);
  const list=$('workerList');
  list.innerHTML='';
  $('workerShownCount').textContent=rows.length;
  if(!rows.length){ list.innerHTML='<div class="empty">Data pekerja tidak ditemukan.</div>'; updateCounts(); return; }
  rows.forEach(worker=>{
    const div=document.createElement('div');
    div.className='worker-card '+(workerType(worker)==='PKWT'?'pkwt':'freelance');
    div.dataset.no=worker.no;
    const type=workerType(worker).toUpperCase();
    const reguText=worker.regu ? ` • Regu ${safeText(worker.regu)}` : '';
    const shift1Html=`<label class="shift-toggle s1">S1 <input type="checkbox" data-shift="s1" data-no="${worker.no}" ${worker.s1?'checked':''}><span class="checkmark">✓</span></label>`;
    const shift2Html=`<label class="shift-toggle s2">S2 <input type="checkbox" data-shift="s2" data-no="${worker.no}" ${worker.s2?'checked':''}><span class="checkmark">✓</span></label>`;
    const shift3Html=`<label class="shift-toggle s3">S3 <input type="checkbox" data-shift="s3" data-no="${worker.no}" ${worker.s3?'checked':''}><span class="checkmark">✓</span></label>`;
    const shiftHtml=allowed==='s1' ? shift1Html : (allowed==='s2' ? shift2Html : (allowed==='s3' ? shift3Html : shift1Html + shift2Html + shift3Html));
    const shiftRowClass=allowed ? 'shift-row single-shift-row' : 'shift-row';
    div.innerHTML=`<div class="worker-top"><div class="worker-nip">NIP ${safeText(worker.nip || '-')}</div><div class="worker-name">${safeText(worker.name)}</div><div class="worker-status">${type}${reguText}</div></div><div class="${shiftRowClass}">${shiftHtml}</div>`;
    div.addEventListener('click', e=>{ if(e.target.closest('.shift-toggle')) return; fillForm(worker.no); window.scrollTo({top:0, behavior:'smooth'}); });
    list.appendChild(div);
  });
  if(activeUnitKey()===BAHAN_BAKU_PAGI_KEY){
    const wrap=document.createElement('div');
    wrap.innerHTML=renderBahanBakuOverzakSection();
    while(wrap.firstChild) list.appendChild(wrap.firstChild);
  }
  updateCounts();
}
function renderMobileReportGeneric(rows, emptyMsg){
  const list=$('mobileReportList'); if(!list) return;
  list.innerHTML='';
  const isCommercialRows=rows.some(w=>w && (w.ldRegu || w.loadingDock || w.regu));
  const s1=rows.filter(w=>w.s1).sort((a,b)=>(Number(a.no)||0)-(Number(b.no)||0));
  const s2=rows.filter(w=>w.s2).sort((a,b)=>(Number(a.no)||0)-(Number(b.no)||0));
  const s3=rows.filter(w=>w.s3).sort((a,b)=>(Number(a.no)||0)-(Number(b.no)||0));
  if(!rows.length){ list.innerHTML=`<div class="empty">${safeText(emptyMsg || 'Belum ada pekerja yang dipilih.')}</div>`; return; }
  const header=isCommercialRows ? '<tr><th>No</th><th>LD-Regu</th><th>NIP</th><th>Nama Pekerja</th></tr>' : '<tr><th>No</th><th>NIP</th><th>Nama Pekerja</th></tr>';
  const emptyColspan=isCommercialRows ? 4 : 3;
  const rowHtml=(w,i)=> isCommercialRows ? `<tr><td>${i+1}</td><td>${safeText(w.ldRegu || commercialLdReguLabel(w.loadingDock,w.regu))}</td><td>${safeText(w.nip)}</td><td>${safeText(w.name)}</td></tr>` : `<tr><td>${i+1}</td><td>${safeText(w.nip)}</td><td>${safeText(w.name)}</td></tr>`;
  const makeSection=(title, cls, data)=>`<div class="shift-section ${cls}"><div class="shift-section-head"><span>${title}</span><span class="shift-count">${data.length} pekerja</span></div><table class="shift-table"><thead>${header}</thead><tbody>${data.length?data.map(rowHtml).join(''):`<tr><td colspan="${emptyColspan}" style="text-align:center;color:#64748b">Belum ada pekerja.</td></tr>`}</tbody></table></div>`;
  list.innerHTML=makeSection('Shift 1','s1',s1)+makeSection('Shift 2','s2',s2)+makeSection('Shift 3','s3',s3);
}
function renderMobileReportGeneric(rows, emptyMsg){
  const list=$('mobileReportList'); if(!list) return;
  list.innerHTML='';
  const allowed=coordinatorAllowedShift();
  const isCommercialRows=rows.some(w=>w && (w.ldRegu || w.loadingDock || w.regu));
  const s1=rows.filter(w=>w.s1).sort((a,b)=>(Number(a.no)||0)-(Number(b.no)||0));
  const s2=rows.filter(w=>w.s2).sort((a,b)=>(Number(a.no)||0)-(Number(b.no)||0));
  if(!rows.length){ list.innerHTML=`<div class="empty">${safeText(emptyMsg || 'Belum ada pekerja yang dipilih.')}</div>`; return; }
  const header=isCommercialRows ? '<tr><th>No</th><th>LD-Regu</th><th>NIP</th><th>Nama Pekerja</th></tr>' : '<tr><th>No</th><th>NIP</th><th>Nama Pekerja</th></tr>';
  const emptyColspan=isCommercialRows ? 4 : 3;
  const rowHtml=(w,i)=> isCommercialRows ? `<tr><td>${i+1}</td><td>${safeText(w.ldRegu || commercialLdReguLabel(w.loadingDock,w.regu))}</td><td>${safeText(w.nip)}</td><td>${safeText(w.name)}</td></tr>` : `<tr><td>${i+1}</td><td>${safeText(w.nip)}</td><td>${safeText(w.name)}</td></tr>`;
  const makeSection=(title, cls, data)=>`<div class="shift-section ${cls}"><div class="shift-section-head"><span>${title}</span><span class="shift-count">${data.length} pekerja</span></div><table class="shift-table"><thead>${header}</thead><tbody>${data.length?data.map(rowHtml).join(''):`<tr><td colspan="${emptyColspan}" style="text-align:center;color:#64748b">Belum ada pekerja.</td></tr>`}</tbody></table></div>`;
  list.innerHTML=allowed==='s1' ? makeSection('Shift 1','s1',s1) : (allowed==='s2' ? makeSection('Shift 2','s2',s2) : makeSection('Shift 1','s1',s1)+makeSection('Shift 2','s2',s2));
}
function renderMobileReport(rows){ renderMobileReportGeneric(rows, coordinatorSingleShiftMode() ? `Belum ada pekerja yang dipilih. Buka menu Jadwal lalu checklist ${coordinatorAllowedShiftLabel()}.` : 'Belum ada pekerja yang dipilih. Buka menu Jadwal lalu checklist Shift 1, Shift 2, atau Shift 3.'); }
function rowsFromAttendancePayload(payload){
  if(!payload) return [];
  if((!payload.workers || !payload.workers.length) && Array.isArray(payload.commercialAssignments)){ return payload.commercialAssignments.filter(r=>r && (r.s1 || r.s2 || r.s3)).map(commercialReportRow); }
  const checkTimes=payload.checkTimes || {};
  const applyCheck=(row)=>{
    if(isCommercialTfActivityRow(row)){ row.checkIn=''; row.checkOut=''; return row; }
    const key=String(row.nip||'');
    const source=checkTimes[key] || {};
    row.checkIn=String(row.checkIn || row.cekIn || source.checkIn || source.cekIn || '');
    row.checkOut=String(row.checkOut || row.cekOut || source.checkOut || source.cekOut || '');
    return row;
  };
  if(Array.isArray(payload.workers) && payload.workers.length){
    return payload.workers.map((w,i)=>applyCheck({
      no:i+1,
      ldRegu:String(w.ldRegu || commercialLdReguLabel(w.loadingDock,w.regu) || ''),
      nip:String(w.nip||''),
      name:String(w.name||''),
      s1:Boolean(w.s1),
      s2:Boolean(w.s2),
      s3:Boolean(w.s3),
      type:w.type || '',
      activityKey:w.activityKey || '',
      activityLabel:w.activityLabel || '',
      kegiatan:w.kegiatan || w.activityLabel || '',
      sourceUnitKey:w.sourceUnitKey || '',
      sourceUnitName:w.sourceUnitName || '',
      regu:w.regu || '',
      loadingDock:w.loadingDock || '',
      checkIn:w.checkIn || w.cekIn || '',
      checkOut:w.checkOut || w.cekOut || ''
    }));
  }
  const map=new Map();
  const addShift=(arr, prop)=> (arr||[]).forEach(w=>{
    const key=String(w.nip||'');
    const row=map.get(key) || applyCheck({ no:map.size+1, ldRegu:String(w.ldRegu||commercialLdReguLabel(w.loadingDock,w.regu)||''), nip:key, name:String(w.name||''), s1:false, s2:false, s3:false, regu:w.regu||'', loadingDock:w.loadingDock||'', activityKey:w.activityKey||'', activityLabel:w.activityLabel||'', kegiatan:w.kegiatan||w.activityLabel||'', sourceUnitKey:w.sourceUnitKey||'', sourceUnitName:w.sourceUnitName||'', checkIn:w.checkIn||'', checkOut:w.checkOut||'' });
    row[prop]=true;
    if(!row.name) row.name=String(w.name||'');
    if(!row.kegiatan) row.kegiatan=w.kegiatan||w.activityLabel||'';
    map.set(key,row);
  });
  addShift(payload.shift1,'s1'); addShift(payload.shift2,'s2'); addShift(payload.shift3,'s3');
  return Array.from(map.values());
}

function getReportUnitKeyForSettings(){ return isAdmin() ? (($('adminReportUnitSelect') && $('adminReportUnitSelect').value) || adminManagedUnitKey) : activeUnitKey(); }
function defaultReportSettings(unitName){ return { signBip:'B I P', signGudang:'Bagian Gudang', signKasie:`Kasie ${unitName || 'Muatan Breeder'}`, signPga:'Bagian P&GA', note:'', workTitle:'JAM KERJA CEK IN dan CEK OUT', shiftPagiLabel:'SHIFT 1', shiftPagiIn:'07.00', shiftPagiOut:'17.00', shiftSiangLabel:'SHIFT 2', shiftSiangIn:'17.00', shiftSiangOut:'23.00', shiftMalamLabel:'SHIFT 3', shiftMalamIn:'23.00', shiftMalamOut:'07.00' }; }
function reportSettingsStorageKey(unitKeyValue){ return `${REPORT_SETTINGS_KEY}_${unitKeyValue || 'global'}`; }
function getReportSettings(unitKeyValue, unitName){ const def=defaultReportSettings(unitName); try{ const raw=localStorage.getItem(reportSettingsStorageKey(unitKeyValue)); const saved=raw ? JSON.parse(raw) : {}; const merged={ ...def, ...saved }; if(String(merged.shiftPagiLabel||'').toUpperCase()==='PAGI') merged.shiftPagiLabel='SHIFT 1'; if(String(merged.shiftSiangLabel||'').toUpperCase()==='SIANG') merged.shiftSiangLabel='SHIFT 2'; if(!merged.shiftMalamLabel) merged.shiftMalamLabel='SHIFT 3'; if(!merged.shiftMalamIn) merged.shiftMalamIn='23.00'; if(!merged.shiftMalamOut) merged.shiftMalamOut='07.00'; if(String(merged.workTitle||'').toUpperCase().startsWith('JAM KERJA ')) merged.workTitle='JAM KERJA CEK IN dan CEK OUT'; if(merged.shiftPagiOut==='15.00' && merged.shiftSiangIn==='15.00'){ merged.shiftPagiOut='17.00'; merged.shiftSiangIn='17.00'; } return merged; }catch(err){ return def; } }
function renderReportSettings(unitKeyValue, unitName){ const settings=getReportSettings(unitKeyValue, unitName); document.querySelectorAll('[data-report-setting]').forEach(el=>{ const key=el.dataset.reportSetting; if(key && settings[key] !== undefined) el.textContent=settings[key]; el.contentEditable = isAdmin() ? 'true' : 'false'; }); syncAdminAutoShiftInputs(settings); }
function syncAdminAutoShiftInputs(settings){ if(!isAdmin() || !settings) return; const pairs={adminAutoS1In:'shiftPagiIn',adminAutoS1Out:'shiftPagiOut',adminAutoS2In:'shiftSiangIn',adminAutoS2Out:'shiftSiangOut',adminAutoS3In:'shiftMalamIn',adminAutoS3Out:'shiftMalamOut'}; Object.keys(pairs).forEach(id=>{ const el=$(id); if(el && !el.dataset.userEdited){ el.value=settings[pairs[id]] || el.value || ''; } }); }
function collectReportSettings(){ const data={}; document.querySelectorAll('[data-report-setting]').forEach(el=>{ const key=el.dataset.reportSetting; if(key) data[key]=el.textContent.trim(); }); return data; }
function saveReportSettings(){ if(!isAdmin()) return; const unitKeyValue=getReportUnitKeyForSettings(); localStorage.setItem(reportSettingsStorageKey(unitKeyValue), JSON.stringify(collectReportSettings())); }
function isAdminAutoShift3Enabled(){ const el=$('adminAutoUseS3'); if(el) return !!el.checked; return localStorage.getItem(AUTO_SHIFT3_ENABLED_KEY)==='1'; }
function isDurationReportEnabled(){ const el=$('adminShowDurationReport'); if(el) return !!el.checked; return localStorage.getItem(SHOW_DURATION_REPORT_KEY)==='1'; }
function syncAdminAttendanceOptionCheckboxes(){ if($('adminAutoUseS3')) $('adminAutoUseS3').checked = localStorage.getItem(AUTO_SHIFT3_ENABLED_KEY)==='1'; if($('adminShowDurationReport')) $('adminShowDurationReport').checked = localStorage.getItem(SHOW_DURATION_REPORT_KEY)==='1'; }
function parseAttendanceTimeToMinutes(value){ const raw=String(value||'').trim(); if(!raw) return null; const m=raw.match(/^(\d{1,2})\s*[:.]\s*(\d{1,2})$/); if(!m) return null; const h=Number(m[1]); const min=Number(m[2]); if(!Number.isFinite(h) || !Number.isFinite(min) || h<0 || h>23 || min<0 || min>59) return null; return h*60+min; }
function durationHHMM(checkIn, checkOut){ const start=parseAttendanceTimeToMinutes(checkIn); const end=parseAttendanceTimeToMinutes(checkOut); if(start===null || end===null) return ''; let diff=end-start; if(diff<0) diff+=1440; const h=Math.floor(diff/60); const m=diff%60; return String(h).padStart(2,'0')+':'+String(m).padStart(2,'0'); }
function renderDurationCell(row){ if(!isDurationReportEnabled()) return ''; if(isCommercialTfActivityRow(row)) return '<td></td>'; return `<td>${safeText(durationHHMM(rowCheckValue(row,'in'), rowCheckValue(row,'out')))}</td>`; }

function rowCheckValue(row, type){
  if(isCommercialTfActivityRow(row)) return '';
  const val=commercialCheckInOutValue(row,type);
  return val || (isAdmin() ? '' : 'source finger');
}
function renderCheckCell(row, type){
  if(isCommercialTfActivityRow(row)) return '';
  const value=rowCheckValue(row,type);
  if(isAdmin()) return `<input class="check-input" data-check-${type} data-check-nip="${safeText(row.nip)}" value="${safeText(value)}" placeholder="${type==='in'?'Cek In':'Cek Out'}">`;
  return `<span class="check-source">${safeText(value)}</span>`;
}
function isBahanBakuCombinedReport(){ return isBahanBakuPagiMalamKey(getReportUnitKeyForSettings()) || (adminReportData && adminReportData.combinedAttendance); }
function bahanBakuKegiatanLabel(row){
  const key=String((row && (row.kegiatan || row.activityLabel || row.sourceUnitKey || row.sourceUnitName)) || '').toLowerCase();
  if(key.includes('overzak')) return 'Overzak';
  return 'Bongkaran';
}
function renderReportTable(unitName, dateValue, rows, emptyMsg){
  if($('reportMainTitle')) $('reportMainTitle').textContent =`ABSENSI KEGIATAN ${String(unitName||'').replace(/PAGI/gi,'').replace(/MALAM/gi,'').replace(/\//g,'').replace(/\s+/g,' ').trim().toUpperCase()}`;
  if($('reportCompanyText')) $('reportCompanyText').textContent = 'PT. BUDI INTI PERKASA';
  if($('reportDateText')) $('reportDateText').textContent = formatLongDate(dateValue);
  renderMobileReportGeneric(rows, emptyMsg);
  renderReportSettings(getReportUnitKeyForSettings(), unitName);
  const table=$('reportTable');
  const body=$('reportBody'); if(!body) return;
  const isCommercialRows=isCommercialKey(getReportUnitKeyForSettings()) || rows.some(w=>w && (w.ldRegu || w.loadingDock || w.regu));
  const isBahanBakuRows=!isCommercialRows && isBahanBakuCombinedReport();
  const showDuration=isDurationReportEnabled();
  const durationHeader=showDuration ? '<th>DURASI</th>' : '';
  const durationColspan=showDuration ? 3 : 2;
  if(table){
    const thead=table.querySelector('thead');
    const foot=table.querySelector('tfoot.report-summary');
    if(thead){
      thead.innerHTML = isCommercialRows
        ? '<tr><th>NO</th><th>LD-Regu</th><th>NIP</th><th>NAMA PEKERJA</th><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th><th>CEK IN</th><th>CEK OUT</th>'+durationHeader+'</tr>'
        : (isBahanBakuRows ? '<tr><th>NO</th><th>NIP</th><th>KEGIATAN</th><th>NAMA</th><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th><th>CEK IN</th><th>CEK OUT</th>'+durationHeader+'</tr>' : '<tr><th>NO</th><th>NIP</th><th>NAMA</th><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th><th>CEK IN</th><th>CEK OUT</th>'+durationHeader+'</tr>');
    }
    if(foot){
      foot.innerHTML = isCommercialRows
        ? `<tr><td class="summary-empty" colspan="4"></td><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th><td class="summary-empty" colspan="${durationColspan}"></td></tr><tr><td class="left-label" colspan="4">JUMLAH PEKERJA</td><td id="sumS1">0</td><td id="sumS2">0</td><td id="sumS3">0</td><td class="summary-empty" colspan="${durationColspan}"></td></tr><tr><td class="summary-empty" colspan="4"></td><td class="total" colspan="3"><span id="sumTotal">0</span> Orang</td><td class="summary-empty" colspan="${durationColspan}"></td></tr>`
        : (isBahanBakuRows ? `<tr><td class="summary-empty" colspan="4"></td><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th><td class="summary-empty" colspan="${durationColspan}"></td></tr><tr><td class="left-label" colspan="4">JUMLAH PEKERJA</td><td id="sumS1">0</td><td id="sumS2">0</td><td id="sumS3">0</td><td class="summary-empty" colspan="${durationColspan}"></td></tr><tr><td class="summary-empty" colspan="4"></td><td class="total" colspan="3"><span id="sumTotal">0</span> Orang</td><td class="summary-empty" colspan="${durationColspan}"></td></tr>` : `<tr><td class="summary-empty" colspan="3"></td><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th><td class="summary-empty" colspan="${durationColspan}"></td></tr><tr><td class="left-label" colspan="3">JUMLAH PEKERJA</td><td id="sumS1">0</td><td id="sumS2">0</td><td id="sumS3">0</td><td class="summary-empty" colspan="${durationColspan}"></td></tr><tr><td class="summary-empty" colspan="3"></td><td class="total" colspan="3"><span id="sumTotal">0</span> Orang</td><td class="summary-empty" colspan="${durationColspan}"></td></tr>`);
    }
  }
  body.innerHTML='';
  rows.forEach((w,i)=>{
    const tr=document.createElement('tr');
    tr.innerHTML = isCommercialRows
      ? `<td>${i+1}</td><td>${safeText(w.ldRegu || commercialLdReguLabel(w.loadingDock,w.regu))}</td><td>${safeText(w.nip)}</td><td class="name">${safeText(w.name)}</td><td>${w.s1?'<span class="tick">✓</span>':''}</td><td>${w.s2?'<span class="tick">✓</span>':''}</td><td>${w.s3?'<span class="tick">✓</span>':''}</td><td>${renderCheckCell(w,'in')}</td><td>${renderCheckCell(w,'out')}</td>${renderDurationCell(w)}`
      : (isBahanBakuRows ? `<td>${i+1}</td><td>${safeText(w.nip)}</td><td>${safeText(bahanBakuKegiatanLabel(w))}</td><td class="name">${safeText(w.name)}</td><td>${w.s1?'<span class="tick">✓</span>':''}</td><td>${w.s2?'<span class="tick">✓</span>':''}</td><td>${w.s3?'<span class="tick">✓</span>':''}</td><td>${renderCheckCell(w,'in')}</td><td>${renderCheckCell(w,'out')}</td>${renderDurationCell(w)}` : `<td>${i+1}</td><td>${safeText(w.nip)}</td><td class="name">${safeText(w.name)}</td><td>${w.s1?'<span class="tick">✓</span>':''}</td><td>${w.s2?'<span class="tick">✓</span>':''}</td><td>${w.s3?'<span class="tick">✓</span>':''}</td><td>${renderCheckCell(w,'in')}</td><td>${renderCheckCell(w,'out')}</td>${renderDurationCell(w)}`);
    body.appendChild(tr);
  });
  if(!rows.length){ body.innerHTML=`<tr><td colspan="${((isCommercialRows||isBahanBakuRows)?9:8) + (showDuration?1:0)}" style="height:42px;color:#65758b">${safeText(emptyMsg || 'Belum ada pekerja yang dipilih.')}</td></tr>`; }
  const s1=rows.filter(w=>w.s1).length;
  const s2=rows.filter(w=>w.s2).length;
  const s3=rows.filter(w=>w.s3).length;
  const total=rows.length;
  ['sumS1'].forEach(id=>{ if($(id)) $(id).textContent=s1; });
  ['sumS2'].forEach(id=>{ if($(id)) $(id).textContent=s2; });
  ['sumS3'].forEach(id=>{ if($(id)) $(id).textContent=s3; });
  ['sumTotal','selectedCountBadge'].forEach(id=>{ if($(id)) $(id).textContent=total; });
}
function renderAdminReport(){
  const unitKeyValue=$('adminReportUnitSelect') ? $('adminReportUnitSelect').value : adminManagedUnitKey;
  const dateValue=$('adminReportDate') ? $('adminReportDate').value : todayISO();
  const unitName=isBahanBakuPagiMalamKey(unitKeyValue) ? BAHAN_BAKU_GABUNGAN_NAME : unitNameFromKey(unitKeyValue);
  if(!adminReportData){ renderReportTable(unitName, dateValue, [], ''); if($('adminAttendanceInfo')) $('adminAttendanceInfo').textContent=''; return; }
  const rows=rowsFromAttendancePayload(adminReportData);
  renderReportTable(adminReportData.unit || unitName, adminReportData.reportDate || dateValue, rows, 'Data absensi belum berisi pekerja.');
  if($('adminAttendanceInfo')){
    if(adminReportData.combinedAttendance){
      const sources=adminReportData.sources || {};
      $('adminAttendanceInfo').textContent=`Data gabungan Bahan Baku. Shift 1 dari akun Pagi: ${sources.pagi?'ada':'belum ada'}. Shift 2 dari akun Malam: ${sources.malam?'ada':'belum ada'}. Overzak: ${sources.overzak?'ada':'belum ada'}. Total: ${rows.length} pekerja.`;
    }else{
      const by=adminReportData.inputBy ? `${adminReportData.inputBy.name || '-'} / Username ${adminReportData.inputBy.username || adminReportData.inputBy.nip || '-'}` : '-';
      $('adminAttendanceInfo').textContent=`Data ditemukan. Input oleh: ${by}. Total: ${rows.length} pekerja.`;
    }
  }
}
function shareText(){ const d=formatLongDate(state.reportDate); const rows=selectedWorkers(); const s1=rows.filter(w=>w.s1).sort((a,b)=>a.no-b.no).map(w=>w.nip); const s2=rows.filter(w=>w.s2).sort((a,b)=>a.no-b.no).map(w=>w.nip); const s3=rows.filter(w=>w.s3).sort((a,b)=>a.no-b.no).map(w=>w.nip); return d + '\n\nShift 1\n' + (s1.length ? s1.join('\n') : '-') + '\n\nShift 2\n' + (s2.length ? s2.join('\n') : '-') + '\n\nShift 3\n' + (s3.length ? s3.join('\n') : '-'); }
function reportImageBlob(){
  const rows=selectedWorkers(); const scale=2; const w=980; const rowH=40; const headH=132; const footH=110; const h=headH+rowH*(rows.length+1)+footH;
  const canvas=document.createElement('canvas'); canvas.width=w*scale; canvas.height=h*scale; const ctx=canvas.getContext('2d'); ctx.scale(scale,scale);
  ctx.fillStyle='#ffffff'; ctx.fillRect(0,0,w,h); ctx.fillStyle='#111827'; ctx.textAlign='center'; ctx.font='bold 24px Arial'; ctx.fillText(`ABSENSI KEGIATAN ${activeUnitName().toUpperCase()}`,w/2,35); ctx.font='20px Arial'; ctx.fillText('PT. BUDI INTI PERKASA',w/2,62); ctx.font='18px Arial'; ctx.fillText(formatLongDate(state.reportDate),w/2,88);
  const x=[20,90,210,580,700,820,960]; const y0=116; ctx.lineWidth=1; ctx.strokeStyle='#111111'; ctx.font='bold 15px Arial'; ctx.fillStyle='#f3f4f6'; ctx.fillRect(x[0],y0,x[6]-x[0],rowH); ctx.fillStyle='#111827'; ['NO','NIP','NAMA','SHIFT 1','SHIFT 2','SHIFT 3'].forEach((t,i)=>{ ctx.textAlign=i===2?'left':'center'; ctx.fillText(t, i===2?x[i]+12:(x[i]+x[i+1])/2, y0+26); });
  const drawCell=(x1,y,x2)=>ctx.strokeRect(x1,y,x2-x1,rowH); for(let i=0;i<x.length-1;i++) drawCell(x[i],y0,x[i+1]); ctx.font='15px Arial';
  rows.forEach((r,idx)=>{ const y=y0+rowH*(idx+1); ctx.fillStyle=idx%2?'#ffffff':'#fbfdff'; ctx.fillRect(x[0],y,x[6]-x[0],rowH); ctx.fillStyle='#111827'; ctx.textAlign='center'; ctx.fillText(String(idx+1),(x[0]+x[1])/2,y+26); ctx.fillText(r.nip,(x[1]+x[2])/2,y+26); ctx.textAlign='left'; ctx.fillText(r.name,x[2]+12,y+26); ctx.textAlign='center'; ctx.font='bold 19px Arial'; if(r.s1) ctx.fillText('✓',(x[3]+x[4])/2,y+26); if(r.s2) ctx.fillText('✓',(x[4]+x[5])/2,y+26); if(r.s3) ctx.fillText('✓',(x[5]+x[6])/2,y+26); ctx.font='15px Arial'; for(let i=0;i<x.length-1;i++) drawCell(x[i],y,x[i+1]); });
  const base=y0+rowH*(rows.length+1)+22; const s1=rows.filter(w=>w.s1).length, s2=rows.filter(w=>w.s2).length, s3=rows.filter(w=>w.s3).length; ctx.fillStyle='#111827'; ctx.font='bold 16px Arial'; ctx.textAlign='center'; ctx.fillText(`SHIFT 1: ${s1} pekerja    |    SHIFT 2: ${s2} pekerja    |    SHIFT 3: ${s3} pekerja`,w/2,base); ctx.font='bold 18px Arial'; ctx.fillText(`TOTAL: ${rows.length} Orang`,w/2,base+32); return new Promise(resolve=>canvas.toBlob(resolve,'image/png',1)); }
function shareTextWhatsapp(){ if(selectedWorkers().length===0){ alert('Share belum bisa dikirim. Pilih minimal 1 pekerja terlebih dahulu.'); return; } window.open('https://wa.me/?text='+encodeURIComponent(shareText()),'_blank'); }
function backupPathInfo(){ const dateValue=state.reportDate || todayISO(); const date=new Date(dateValue+'T00:00:00'); const dd=String(date.getDate()).padStart(2,'0'); const mm=String(date.getMonth()+1).padStart(2,'0'); const yyyy=date.getFullYear(); const monthFolder=`${mm}-${yyyy}`; const filename=`${dd}-${mm}-${yyyy}.png`; return {mainFolder:'Absensi Mt Breeder', monthFolder, filename, downloadPath:`Absensi Mt Breeder/${monthFolder}/${filename}`}; }
function downloadBackupImage(blob, filename){ const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),2500); }
async function saveBackupImage(blob){ const info=backupPathInfo(); let savedWithFolder=false; if(window.showDirectoryPicker){ try{ const rootHandle=await window.showDirectoryPicker({id:'absensi-mt-breeder-backup', mode:'readwrite'}); const mainHandle=await rootHandle.getDirectoryHandle(info.mainFolder,{create:true}); const monthHandle=await mainHandle.getDirectoryHandle(info.monthFolder,{create:true}); const fileHandle=await monthHandle.getFileHandle(info.filename,{create:true}); const writable=await fileHandle.createWritable(); await writable.write(blob); await writable.close(); savedWithFolder=true; }catch(err){ console.warn('Simpan ke folder khusus tidak didukung atau dibatalkan, lanjut download biasa.', err); } } if(!savedWithFolder){ downloadBackupImage(blob, info.downloadPath); } return info; }
function openWhatsappWithText(text){ window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank'); }
async function shareWhatsapp(){ const rows=selectedWorkers(); if(rows.length===0){ alert('Lapor BIP belum bisa dikirim. Pilih minimal 1 pekerja terlebih dahulu.'); return; } const btn=$('btnShareWa'); const originalText=btn ? btn.textContent : ''; try{ if(btn){ btn.disabled=true; btn.textContent='Menyiapkan backup...'; } const blob=await reportImageBlob(); if(!blob){ alert('Gambar laporan gagal dibuat. Silakan coba lagi.'); return; } const filename=`laporan-${new Date().getTime()}.png`; const file=new File([blob],filename,{type:'image/png'}); await new Promise(resolve=>setTimeout(resolve,450)); if(btn) btn.textContent='Membuka WhatsApp...'; if(navigator.canShare && navigator.canShare({files:[file]}) && navigator.share){ try{ await navigator.share({title:`Absensi ${activeUnitName()}`,files:[file]}); return; }catch(err){ if(err && err.name==='AbortError') return; console.warn('Share gambar gagal.', err); } } alert('Gambar laporan sudah tersimpan. Browser ini belum mendukung share gambar otomatis, silakan lampirkan gambar dari galeri/download ke WhatsApp.'); }catch(err){ console.error(err); alert('Lapor BIP gagal diproses. Coba ulangi sekali lagi.'); }finally{ if(btn){ btn.disabled=false; btn.textContent=originalText || 'Lapor BIP via WA'; } } }
function renderReport(){ if(isAdmin()){ renderAdminReport(); return; } renderReportTable(activeUnitName(), state.reportDate, selectedWorkers(), 'Belum ada pekerja yang dipilih.'); updateCounts(); }
async function renderAll(){ syncInputs(); await renderWorkers(); renderReport(); if(isAdmin()) renderAdminDashboard(); }
function nextNo(){ return state.workers.reduce((m,w)=>Math.max(m, Number(w.no)||0),0)+1; }
function getFormData(){ return { no:Number($('workerNo').value)||nextNo(), nip:$('workerNip').value.trim(), name:$('workerName').value.trim() }; }
function clearForm(){ ['workerNo','workerNip','workerName'].forEach(id=>$(id).value=''); $('selectPkwt').value=''; $('selectFreelance').value=''; $('workerName').focus(); }
function fillForm(no){ const w=state.workers.find(x=>x.no===Number(no)); if(!w) return; $('workerNo').value=w.no; $('workerNip').value=w.nip; $('workerName').value=w.name; if(workerType(w)==='PKWT'){ $('selectPkwt').value=w.no; $('selectFreelance').value=''; } else { $('selectFreelance').value=w.no; $('selectPkwt').value=''; } }
function normalizeNo(){ state.workers.sort((a,b)=>{ if(String(a.nip)==='133') return -1; if(String(b.nip)==='133') return 1; return (Number(a.no)||0)-(Number(b.no)||0); }); state.workers.forEach((w,i)=>w.no=i+1); }
function addWorker(){ const d=getFormData(); if(!d.name){ alert('Nama pekerja wajib diisi.'); return; } if(!d.nip){ alert('NIP wajib diisi agar sistem bisa memisahkan PKWT / Freelance.'); return; } if(state.workers.some(w=>w.no===d.no)) d.no=nextNo(); state.workers.push({...d, s1:false, s2:false, s3:false}); normalizeNo(); saveState(); renderAll(); clearForm(); }
function updateWorker(){ const d=getFormData(); const w=state.workers.find(x=>x.no===d.no); if(!w){ alert('Pilih pekerja dari dropdown atau kartu terlebih dahulu.'); return; } if(!d.name){ alert('Nama pekerja wajib diisi.'); return; } if(!d.nip){ alert('NIP wajib diisi.'); return; } w.nip=d.nip; w.name=d.name; saveState(); renderAll(); clearForm(); }
function deleteWorker(){ const no=Number($('workerNo').value); const w=state.workers.find(x=>x.no===no); if(!w){ alert('Pilih pekerja yang akan dihapus.'); return; } if(!confirm(`Hapus pekerja: ${w.name}?`)) return; state.workers=state.workers.filter(x=>x.no!==no); normalizeNo(); saveState(); renderAll(); clearForm(); }
function resetShift(){ if(!isAdmin() && isCommercialKey(activeUnitKey())){ if(!confirm('Reset semua pilihan Shift 1, Shift 2, dan Shift 3 untuk jadwal Muatan Commercial?')) return; document.querySelectorAll('[data-commercial-shift],[data-commercial-activity-shift]').forEach(el=>{ el.checked=false; }); commercialScheduleRowsCache=(commercialScheduleRowsCache||[]).map(r=>({...r,s1:false,s2:false,s3:false})); Object.keys(commercialActivityRowsCache||{}).forEach(k=>{ commercialActivityRowsCache[k]=(commercialActivityRowsCache[k]||[]).map(r=>({...r,s1:false,s2:false,s3:false})); }); saveCommercialDraftSelection(); renderReport(); updateCounts(); return; } const msg=coordinatorSingleShiftMode() ? `Reset semua pilihan ${coordinatorAllowedShiftLabel()}?` : 'Reset semua pilihan Shift 1, Shift 2, dan Shift 3?'; if(!confirm(msg)) return; state.workers.forEach(w=>{w.s1=false; w.s2=false; w.s3=false;}); saveState(); renderAll(); }
function attendanceStorageKey(payload){ return payload.scheduleKey ? `${ATTENDANCE_KEY}_${payload.unitKey}_${payload.scheduleKey}_${payload.reportDate}` : `${ATTENDANCE_KEY}_${payload.unitKey}_${payload.reportDate}`; }
function attendanceDocId(payload){ return payload.scheduleKey ? `${payload.unitKey}_${payload.scheduleKey}_${payload.reportDate}` : `${payload.unitKey}_${payload.reportDate}`; }
function makeAttendancePayload(){
  if(coordinatorSingleShiftMode()) enforceSingleShiftInputRule();
  const rowsForPayload=selectedWorkers();
  const s1=rowsForPayload.filter(w=>w.s1).sort((a,b)=>(a.no||0)-(b.no||0)).map(w=>({nip:String(w.nip),name:String(w.name)}));
  const s2=rowsForPayload.filter(w=>w.s2).sort((a,b)=>(a.no||0)-(b.no||0)).map(w=>({nip:String(w.nip),name:String(w.name)}));
  const s3=rowsForPayload.filter(w=>w.s3).sort((a,b)=>(a.no||0)-(b.no||0)).map(w=>({nip:String(w.nip),name:String(w.name)}));
  const workers=rowsForPayload.map(w=>({nip:String(w.nip),name:String(w.name),ldRegu:w.ldRegu || commercialLdReguLabel(w.loadingDock,w.regu) || '',s1:Boolean(w.s1),s2:Boolean(w.s2),s3:Boolean(w.s3),type:w.type || workerType(w),activityKey:w.activityKey||'',activityLabel:w.activityLabel||'',kegiatan:isOverzakKey(activeUnitKey())?'Overzak':(w.kegiatan||''),sourceUnitKey:activeUnitKey(),sourceUnitName:activeUnitName(),regu:w.regu||'',loadingDock:w.loadingDock||'',checkIn:isCommercialTfActivityRow(w)?'':(w.checkIn||''),checkOut:isCommercialTfActivityRow(w)?'':(w.checkOut||'')}));
  const isCommercial=isCommercialKey(activeUnitKey());
  const commercialRows=isCommercial ? getCommercialAssignmentRows().filter(r=>normalizeRegu(r.regu) && (r.s1 || r.s2 || r.s3)).map(r=>({dock:normalizeDockName(r.dock),regu:normalizeRegu(r.regu),s1:Boolean(r.s1),s2:Boolean(r.s2),s3:Boolean(r.s3)})) : [];
  const commercialActivities=isCommercial ? COMMERCIAL_ACTIVITY_DEFS.map(def=>({key:def.key,label:def.label,workers:selectedCommercialActivityReportRows().filter(w=>w.activityKey===def.key).map(w=>({nip:w.nip,name:w.name,s1:Boolean(w.s1),s2:Boolean(w.s2),s3:Boolean(w.s3)}))})) : [];
  return { id:null, reportDate:state.reportDate || todayISO(), company:'PT. BUDI INTI PERKASA', unit:activeUnitName(), unitKey:activeUnitKey(), loadingDock:'', regu:'', commercialAssignments:commercialRows, commercialActivities, scheduleKey:'', inputBy:currentUser ? {username:String(currentUser.username || currentUser.nip || ''),nip:String(currentUser.nip || ''),name:String(currentUser.name),role:String(currentUser.role || 'koordinator'),unit:currentUser.unit || activeUnitName(),activity:activeUnitName()} : null, counts:{shift1:s1.length, shift2:s2.length, shift3:s3.length, total:workers.length}, workers, shift1:s1, shift2:s2, shift3:s3, savedFrom:'pwa', inputMode: isCommercial ? 'commercial_loading_dock_regu_shift' : (isSiloKey(activeUnitKey()) ? 'silo_shift_1_2' : (coordinatorSingleShiftMode() ? (coordinatorAllowedShift()==='s2' ? 'single_shift_2' : 'single_shift_1') : 'normal')) };
}
function saveAttendanceLocal(payload){ const data={...payload, id:attendanceDocId(payload), savedAtLocal:new Date().toISOString(), onlineStatus:'local'}; try{ localStorage.setItem(attendanceStorageKey(data), JSON.stringify(data)); }catch(err){ console.warn('Simpan absensi lokal gagal.', err); } return data; }
function getPendingAttendance(){ try{ const raw=localStorage.getItem(PENDING_ATTENDANCE_KEY); const arr=raw?JSON.parse(raw):[]; return Array.isArray(arr)?arr:[]; }catch(err){ return []; } }
function setPendingAttendance(rows){ try{ localStorage.setItem(PENDING_ATTENDANCE_KEY, JSON.stringify(rows)); }catch(err){ console.warn('Simpan antrian absensi gagal.', err); } }
function queuePendingAttendance(payload){ const rows=getPendingAttendance().filter(x=>x && x.id!==attendanceDocId(payload)); rows.push({...payload, id:attendanceDocId(payload), queuedAtLocal:new Date().toISOString()}); setPendingAttendance(rows); }
async function saveAttendanceOnline(payload){ const bridge=window.AbsensiFirebase; if(!(bridge && bridge.enabled && bridge.saveAttendance)) return {online:false, reason:'Firebase belum online'}; await bridge.saveAttendance(payload); return {online:true}; }
async function syncPendingAttendanceOnline(){ const bridge=window.AbsensiFirebase; if(!(bridge && bridge.enabled && bridge.saveAttendance)) return; const rows=getPendingAttendance(); if(!rows.length) return; const remain=[]; for(const payload of rows){ try{ await bridge.saveAttendance(payload); }catch(err){ console.warn('Absensi pending belum berhasil disinkronkan.', err); remain.push(payload); } } setPendingAttendance(remain); }
let isSavingSchedule=false;
async function saveSchedule(){
  if(isSavingSchedule) return;
  if(coordinatorSingleShiftMode()) enforceSingleShiftInputRule();
  const rows=selectedWorkers();
  if(rows.length===0){ alert(!isAdmin() && isCommercialKey(activeUnitKey()) ? 'Simpan belum bisa diproses. Pilih minimal 1 Loading Dock, 1 Regu, dan Shift 1, Shift 2, atau Shift 3.' : (coordinatorSingleShiftMode() ? `Simpan belum bisa diproses. Pilih minimal 1 pekerja pada ${coordinatorAllowedShiftLabel()}.` : 'Simpan belum bisa diproses. Pilih minimal 1 pekerja pada Shift 1, Shift 2, atau Shift 3.')); return; }
  const btn=$('btnSaveSchedule'); const oldText=btn ? btn.textContent : '';
  try{
    isSavingSchedule=true;
    if(btn){ btn.disabled=true; btn.textContent='Menyimpan...'; }
    saveState();
    const payload=saveAttendanceLocal(makeAttendancePayload());
    let online=false;
    try{ const result=await saveAttendanceOnline(payload); online=Boolean(result && result.online); }catch(err){ console.warn('Simpan absensi Firebase gagal, masuk antrian sinkron.', err); queuePendingAttendance(payload); }
    if(!online){ queuePendingAttendance(payload); } else { await syncPendingAttendanceOnline(); }
    renderAll();
    alert(online ? 'Jadwal pekerja sudah disimpan online ke Firebase.' : 'Jadwal pekerja tersimpan lokal dan masuk antrian sinkron. Saat Firebase online, data akan dikirim otomatis.');
  } finally { isSavingSchedule=false; if(btn){ btn.disabled=false; btn.textContent=oldText || '💾 Simpan'; } }
}
function printReport(){ if(selectedWorkers().length===0){ alert('Print / PDF belum bisa dicetak. Pilih minimal 1 pekerja terlebih dahulu.'); return; } window.print(); }

async function readAttendancePayloadForUnit(unitKeyValue, dateValue, bridge){
  let payload=null;
  if(bridge && bridge.enabled && bridge.loadAttendance){
    try{ payload=await bridge.loadAttendance(unitKeyValue,dateValue); }catch(err){ console.warn('Load absensi Firebase gagal untuk '+unitKeyValue+', cek data lokal.', err); }
  }
  if(!payload){
    try{ const raw=localStorage.getItem(`${ATTENDANCE_KEY}_${unitKeyValue}_${dateValue}`); payload=raw?JSON.parse(raw):null; }catch(err){ payload=null; }
  }
  return payload;
}
function sourceRowsAsShift(payload, targetShift, sourceUnitKey){
  const rawRows=rowsFromAttendancePayload(payload);
  return rawRows.filter(r=>r && ((targetShift==='s1' && r.s1) || (targetShift==='s2' && r.s2) || (targetShift==='s3' && r.s3))).map(r=>({
    nip:String(r.nip||''),
    name:String(r.name||''),
    s1:targetShift==='s1',
    s2:targetShift==='s2',
    s3:targetShift==='s3',
    type:r.type || '',
    checkIn:r.checkIn || '',
    checkOut:r.checkOut || '',
    kegiatan:isOverzakKey(sourceUnitKey) ? 'Overzak' : (r.kegiatan || r.activityLabel || 'Bongkaran'),
    sourceUnitKey:sourceUnitKey,
    sourceUnitName:unitNameFromKey(sourceUnitKey)
  })).filter(r=>r.nip);
}
function mergeRowsByNip(rows){
  const map=new Map();
  rows.forEach(row=>{
    const key=String(row.nip||'');
    if(!key) return;
    const prev=map.get(key) || { nip:key, name:row.name || '', s1:false, s2:false, s3:false, type:row.type || '', kegiatan:'', checkIn:'', checkOut:'', sourceUnitKey:'', sourceUnitName:'' };
    prev.name = prev.name || row.name || '';
    prev.type = prev.type || row.type || '';
    prev.s1 = Boolean(prev.s1 || row.s1);
    prev.s2 = Boolean(prev.s2 || row.s2);
    prev.s3 = Boolean(prev.s3 || row.s3);
    prev.kegiatan = prev.kegiatan || row.kegiatan || '';
    if(String(row.kegiatan||'').toLowerCase().includes('overzak')) prev.kegiatan='Overzak';
    prev.checkIn = row.checkIn || prev.checkIn || '';
    prev.checkOut = row.checkOut || prev.checkOut || '';
    prev.sourceUnitKey = [prev.sourceUnitKey, row.sourceUnitKey].filter(Boolean).filter((v,i,a)=>a.indexOf(v)===i).join(',');
    prev.sourceUnitName = [prev.sourceUnitName, row.sourceUnitName].filter(Boolean).filter((v,i,a)=>a.indexOf(v)===i).join(' / ');
    map.set(key, prev);
  });
  return Array.from(map.values());
}
function buildBahanBakuCombinedPayload(pagiPayload, malamPayload, dateValue, overzakPayload){
  const pagiAllRows=rowsFromAttendancePayload(pagiPayload);
  const pagiRows=pagiAllRows.filter(r=>r && r.s1 && !String(r.kegiatan||'').toLowerCase().includes('overzak')).map(r=>({nip:String(r.nip||''),name:String(r.name||''),s1:true,s2:false,s3:false,type:r.type||'',kegiatan:'Bongkaran',checkIn:r.checkIn||'',checkOut:r.checkOut||'',sourceUnitKey:BAHAN_BAKU_PAGI_KEY,sourceUnitName:unitNameFromKey(BAHAN_BAKU_PAGI_KEY)})).filter(r=>r.nip);
  const malamRows=sourceRowsAsShift(malamPayload, 's2', BAHAN_BAKU_MALAM_KEY).map(r=>({...r,kegiatan:'Bongkaran'}));
  const overzakFromPagi=pagiAllRows.filter(r=>r && (r.s1 || r.s2 || r.s3) && String(r.kegiatan||'').toLowerCase().includes('overzak')).map(r=>({nip:String(r.nip||''),name:String(r.name||''),s1:Boolean(r.s1),s2:Boolean(r.s2),s3:Boolean(r.s3),type:r.type||'',kegiatan:'Overzak',checkIn:r.checkIn||'',checkOut:r.checkOut||'',sourceUnitKey:BAHAN_BAKU_PAGI_KEY,sourceUnitName:unitNameFromKey(BAHAN_BAKU_PAGI_KEY)})).filter(r=>r.nip);
  const overzakRaw=rowsFromAttendancePayload(overzakPayload).filter(r=>r && (r.s1 || r.s2 || r.s3)).map(r=>({
    nip:String(r.nip||''),
    name:String(r.name||''),
    s1:Boolean(r.s1),
    s2:Boolean(r.s2),
    s3:Boolean(r.s3),
    type:r.type || '',
    kegiatan:'Overzak',
    checkIn:r.checkIn || '',
    checkOut:r.checkOut || '',
    sourceUnitKey:OVERZAK_KEY,
    sourceUnitName:OVERZAK_NAME
  })).filter(r=>r.nip);
  const rows=mergeRowsByNip([...pagiRows, ...malamRows, ...overzakFromPagi, ...overzakRaw]);
  return {
    id:`${BAHAN_BAKU_GABUNGAN_KEY}_${dateValue}`,
    reportDate:dateValue,
    company:'PT. BUDI INTI PERKASA',
    unit:BAHAN_BAKU_GABUNGAN_NAME,
    unitKey:BAHAN_BAKU_GABUNGAN_KEY,
    selectedUnitKey:(($('adminReportUnitSelect') && $('adminReportUnitSelect').value) || BAHAN_BAKU_PAGI_KEY),
    combinedAttendance:true,
    inputBy:{ username:'gabungan', nip:'', name:'Gabungan Koordinator Bahan Baku Pagi & Malam', role:'system', unit:BAHAN_BAKU_GABUNGAN_NAME },
    counts:{ shift1:rows.filter(r=>r.s1).length, shift2:rows.filter(r=>r.s2).length, shift3:rows.filter(r=>r.s3).length, total:rows.length },
    workers:rows.map(r=>({nip:r.nip,name:r.name,kegiatan:bahanBakuKegiatanLabel(r),s1:Boolean(r.s1),s2:Boolean(r.s2),s3:Boolean(r.s3),type:r.type||'',checkIn:r.checkIn||'',checkOut:r.checkOut||'',sourceUnitKey:r.sourceUnitKey||'',sourceUnitName:r.sourceUnitName||''})),
    shift1:rows.filter(r=>r.s1).map(r=>({nip:r.nip,name:r.name,kegiatan:bahanBakuKegiatanLabel(r),checkIn:r.checkIn||'',checkOut:r.checkOut||'',sourceUnitKey:r.sourceUnitKey||'',sourceUnitName:r.sourceUnitName||''})),
    shift2:rows.filter(r=>r.s2).map(r=>({nip:r.nip,name:r.name,kegiatan:bahanBakuKegiatanLabel(r),checkIn:r.checkIn||'',checkOut:r.checkOut||'',sourceUnitKey:r.sourceUnitKey||'',sourceUnitName:r.sourceUnitName||''})),
    shift3:rows.filter(r=>r.s3).map(r=>({nip:r.nip,name:r.name,kegiatan:bahanBakuKegiatanLabel(r),checkIn:r.checkIn||'',checkOut:r.checkOut||'',sourceUnitKey:r.sourceUnitKey||'',sourceUnitName:r.sourceUnitName||''})),
    sources:{ pagi:Boolean(pagiPayload), malam:Boolean(malamPayload), overzak:Boolean(overzakPayload) || overzakFromPagi.length>0 },
    savedFrom:'combined_admin_view'
  };
}
async function loadBahanBakuCombinedAttendance(dateValue, bridge){
  const pagiPayload=await readAttendancePayloadForUnit(BAHAN_BAKU_PAGI_KEY, dateValue, bridge);
  const malamPayload=await readAttendancePayloadForUnit(BAHAN_BAKU_MALAM_KEY, dateValue, bridge);
  const overzakPayload=await readAttendancePayloadForUnit(OVERZAK_KEY, dateValue, bridge);
  if(!pagiPayload && !malamPayload && !overzakPayload) return null;
  return buildBahanBakuCombinedPayload(pagiPayload, malamPayload, dateValue, overzakPayload);
}
function saveCombinedRowsToGlobalCheckTimes(dateValue, rows){
  if(!dateValue || !Array.isArray(rows) || !rows.length) return 0;
  const store=getGlobalCheckStore();
  const day={...(store[dateValue] || {})};
  let saved=0;
  rows.forEach(r=>{
    const nip=String(r.nip||'').trim();
    const checkIn=String(r.checkIn||'').trim();
    const checkOut=String(r.checkOut||'').trim();
    if(!nip || (!checkIn && !checkOut)) return;
    day[nip]={checkIn,checkOut,source:'manual_combined_admin',updatedAtLocal:new Date().toISOString()};
    saved++;
  });
  store[dateValue]=day;
  setGlobalCheckStore(store);
  return saved;
}
async function loadAdminAttendance(){
  if(!isAdmin()) return;
  const unitKeyValue=$('adminReportUnitSelect') ? $('adminReportUnitSelect').value : adminManagedUnitKey;
  const dateValue=$('adminReportDate') ? $('adminReportDate').value : todayISO();
  const btn=$('btnAdminLoadAttendance');
  const old=btn?btn.textContent:'';
  try{
    if(btn){ btn.disabled=true; btn.textContent='Memuat...'; }
    adminReportData=null;
    const bridge=await waitFirebase();
    if(isBahanBakuPagiMalamKey(unitKeyValue)){
      adminReportData=await loadBahanBakuCombinedAttendance(dateValue, bridge);
    }else{
      adminReportData=await readAttendancePayloadForUnit(unitKeyValue, dateValue, bridge);
    }
    if(adminReportData){
      const globalMatched=applyCheckTimesToAdminReport(getGlobalCheckTimesForDate(dateValue), {render:false, overwrite:true});
      if(globalMatched){ adminReportData.globalCheckTimesApplied=globalMatched; }
    }
    renderReport();
    if(!adminReportData) alert('Data absensi tidak ditemukan untuk bagian dan tanggal yang dipilih.');
  }finally{
    if(btn){ btn.disabled=false; btn.textContent=old || '🔍 Tampilkan'; }
  }
}
function printAdminAttendance(){
  if(!isAdmin()) return;
  const rows=rowsFromAttendancePayload(adminReportData);
  if(!rows.length){
    alert('Belum ada data absensi yang bisa dicetak. Pilih bagian dan tanggal, lalu klik Tampilkan.');
    return;
  }

  const selectedUnitKey = (($('adminReportUnitSelect') && $('adminReportUnitSelect').value) || adminManagedUnitKey);
  const unitKey = (adminReportData && adminReportData.unitKey) || selectedUnitKey;
  const unit = UNITS.find(u=>u.key===unitKey) || UNITS.find(u=>u.key===selectedUnitKey);
  const unitNameForPrint = (adminReportData && adminReportData.unit) || (unit && unit.name) || unitNameFromKey(unitKey);
  // Ambil setting langsung dari tampilan laporan yang sedang terlihat,
  // supaya halaman preview selalu sama dengan laporan admin (Kasie/NOTE/Jam Kerja tidak kembali ke default).
  const reportSettings = collectReportSettings();

  const payload = {
    rows: rows,
    unitKey: unitKey,
    unitName: unitNameForPrint || 'Muatan Breeder',
    reportDate: (adminReportData && adminReportData.reportDate) || (($('adminReportDate') && $('adminReportDate').value) || todayISO()),
    dateText: $('reportDateText') ? $('reportDateText').textContent : '',
    title: $('reportMainTitle') ? $('reportMainTitle').textContent : 'ABSENSI KEGIATAN MUATAN BREEDER',
    company: $('reportCompanyText') ? $('reportCompanyText').textContent : 'PT. BUDI INTI PERKASA',
    showDuration: isDurationReportEnabled(),
    settings: reportSettings
  };

  try{
    localStorage.setItem('BIP_PRINT_ABSENSI_PAYLOAD', JSON.stringify(payload));
    const printUrl = 'print-absensi.html?ts=' + Date.now();
    const win = window.open(printUrl, '_blank');
    if(!win){
      alert('Popup print diblokir browser. Izinkan popup untuk aplikasi ini, lalu klik Print lagi.');
    }
  }catch(err){
    console.error(err);
    alert('Gagal menyiapkan halaman print: ' + (err && err.message ? err.message : err));
  }
}
window.addEventListener('afterprint', ()=>document.body.classList.remove('print-report-only'));
function getGlobalCheckStore(){ try{ const raw=localStorage.getItem(GLOBAL_CHECK_TIMES_KEY); const data=raw?JSON.parse(raw):{}; return data && typeof data==='object' ? data : {}; }catch(err){ return {}; } }
function setGlobalCheckStore(store){ localStorage.setItem(GLOBAL_CHECK_TIMES_KEY, JSON.stringify(store || {})); }
function getGlobalCheckTimesForDate(dateValue){ const store=getGlobalCheckStore(); return (dateValue && store[dateValue] && typeof store[dateValue]==='object') ? store[dateValue] : {}; }
function twoDigits(n){ return String(Math.max(0, Math.min(99, Number(n)||0))).padStart(2,'0'); }
function formatImportedTime(value){ if(value===null || value===undefined) return ''; if(value instanceof Date && !isNaN(value)){ return twoDigits(value.getHours())+'.'+twoDigits(value.getMinutes()); } if(typeof value==='number' && Number.isFinite(value)){ const fraction=((value%1)+1)%1; if(value>=0 && value<1 || fraction>0){ const minutes=Math.round(fraction*24*60); return twoDigits(Math.floor(minutes/60)%24)+'.'+twoDigits(minutes%60); } return String(value).trim(); } const raw=String(value).trim(); if(!raw) return ''; const m=raw.match(/(\d{1,2})\s*[:.]\s*(\d{1,2})/); if(m) return twoDigits(m[1])+'.'+twoDigits(m[2]); const d=new Date(raw); if(!isNaN(d) && /\d{1,2}:\d{1,2}/.test(raw)) return twoDigits(d.getHours())+'.'+twoDigits(d.getMinutes()); return raw; }
function normalizeImportDate(value, fallbackDate){ const fallback=fallbackDate || todayISO(); if(value===null || value===undefined || value==='') return fallback; if(value instanceof Date && !isNaN(value)) return value.toISOString().slice(0,10); if(typeof value==='number' && Number.isFinite(value) && value>20000 && value<80000){ const base=new Date(Date.UTC(1899,11,30)); base.setUTCDate(base.getUTCDate()+Math.floor(value)); return base.toISOString().slice(0,10); } const raw=String(value).trim(); if(!raw) return fallback; let m=raw.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/); if(m) return `${m[1]}-${twoDigits(m[2])}-${twoDigits(m[3])}`; m=raw.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})/); if(m) return `${m[3]}-${twoDigits(m[2])}-${twoDigits(m[1])}`; const d=new Date(raw); if(!isNaN(d)) return d.toISOString().slice(0,10); return fallback; }
function checkMapFromImportRows(rows, fallbackDate){ const byDate={}; const skipped=[]; let imported=0; (rows||[]).forEach((row,idx)=>{ const nip=String(findCell(row,['NIP','No Induk','Nomor Induk','ID','PIN','Kode'])||'').trim(); const checkIn=formatImportedTime(findCell(row,['Cek In','Check In','Jam Masuk','Masuk','IN','Clock In'])); const checkOut=formatImportedTime(findCell(row,['Cek Out','Check Out','Jam Keluar','Keluar','OUT','Clock Out'])); const dateValue=normalizeImportDate(findCell(row,['Tanggal','Tgl','Date','Tanggal Absensi','Hari Tanggal']), fallbackDate); if(!nip || (!checkIn && !checkOut)){ skipped.push(idx+2); return; } if(!byDate[dateValue]) byDate[dateValue]={}; byDate[dateValue][nip]={checkIn,checkOut,source:'global_import',updatedAtLocal:new Date().toISOString()}; imported++; }); return {byDate, imported, skipped}; }
function countGlobalCheckRows(dateValue){ const map=getGlobalCheckTimesForDate(dateValue); return Object.keys(map || {}).length; }
function updateGlobalCheckInfo(message){ const dateValue=($('adminGlobalCheckDate') && $('adminGlobalCheckDate').value) || todayISO(); const count=countGlobalCheckRows(dateValue); const base=`Data global tanggal ${dateValue}: ${count} NIP tersimpan. Data ini dipakai untuk semua kegiatan berdasarkan NIP pekerja.`; if($('adminGlobalCheckInfo')) $('adminGlobalCheckInfo').textContent=message ? `${message} ${base}` : base; }

function payloadRowFromReportRow(r){
  return {nip:r.nip,name:r.name,ldRegu:r.ldRegu||commercialLdReguLabel(r.loadingDock,r.regu)||'',s1:Boolean(r.s1),s2:Boolean(r.s2),s3:Boolean(r.s3),type:r.type||'',activityKey:r.activityKey||'',activityLabel:r.activityLabel||'',kegiatan:r.kegiatan||r.activityLabel||'',sourceUnitKey:r.sourceUnitKey||'',sourceUnitName:r.sourceUnitName||'',regu:r.regu||'',loadingDock:r.loadingDock||'',checkIn:isCommercialTfActivityRow(r)?'':(r.checkIn||''),checkOut:isCommercialTfActivityRow(r)?'':(r.checkOut||'')};
}
function updateAdminReportDataFromRows(rows){
  adminReportData.workers=rows.map(payloadRowFromReportRow);
  adminReportData.shift1=rows.filter(r=>r.s1).map(payloadRowFromReportRow);
  adminReportData.shift2=rows.filter(r=>r.s2).map(payloadRowFromReportRow);
  adminReportData.shift3=rows.filter(r=>r.s3).map(payloadRowFromReportRow);
  adminReportData.counts={shift1:rows.filter(r=>r.s1).length,shift2:rows.filter(r=>r.s2).length,shift3:rows.filter(r=>r.s3).length,total:rows.length};
  adminReportData.checkTimes=Object.fromEntries(rows.map(r=>[String(r.nip),{checkIn:r.checkIn||'',checkOut:r.checkOut||''}]));
}
function applyCheckTimesToAdminReport(checkMap, options){ if(!isAdmin() || !adminReportData) return 0; const opts=options || {}; const rows=rowsFromAttendancePayload(adminReportData); let changed=0; rows.forEach(row=>{ if(isCommercialTfActivityRow(row)){ row.checkIn=''; row.checkOut=''; return; } const key=String(row.nip||''); const data=checkMap && checkMap[key]; if(!data) return; const importedIn=String(data.checkIn || data.cekIn || '').trim(); const importedOut=String(data.checkOut || data.cekOut || '').trim(); if(!importedIn && !importedOut) return; if(opts.overwrite===false){ if(importedIn && !row.checkIn) row.checkIn=importedIn; if(importedOut && !row.checkOut) row.checkOut=importedOut; }else{ if(importedIn) row.checkIn=importedIn; if(importedOut) row.checkOut=importedOut; } changed++; }); updateAdminReportDataFromRows(rows); if(opts.render!==false) renderReport(); return changed; }
function updateAdminReportRowsWithCheckTimes(rows){ updateAdminReportDataFromRows(rows); }
function parseWorkTimeToMinutes(value){ const raw=String(value||'').trim().replace(':','.'); const parts=raw.split('.'); let h=parseInt(parts[0],10); let m=parseInt(parts[1] || '0',10); if(!Number.isFinite(h)) h=0; if(!Number.isFinite(m)) m=0; h=Math.max(0,Math.min(23,h)); m=Math.max(0,Math.min(59,m)); return h*60+m; }
function formatMinutesToWorkTime(total){ total=((Number(total)||0)%1440+1440)%1440; const h=Math.floor(total/60); const m=total%60; return String(h).padStart(2,'0')+'.'+String(m).padStart(2,'0'); }
function randBetween(min,max){ min=Number(min)||0; max=Number(max)||min; if(max<min){ const t=min; min=max; max=t; } return Math.floor(Math.random()*(max-min+1))+min; }
function randomBeforeWorkTime(value,minBefore,maxBefore){ return formatMinutesToWorkTime(parseWorkTimeToMinutes(value)-randBetween(minBefore,maxBefore)); }
function randomAfterWorkTime(value,minAfter,maxAfter){ return formatMinutesToWorkTime(parseWorkTimeToMinutes(value)+randBetween(minAfter,maxAfter)); }
function adminApplyAutoCheckTimes(){
  if(!isAdmin()) return;
  if(!adminReportData){ alert('Tampilkan data absensi terlebih dahulu.'); return; }
  const s1In=($('adminAutoS1In')&&$('adminAutoS1In').value.trim()) || '07.00';
  const s1Out=($('adminAutoS1Out')&&$('adminAutoS1Out').value.trim()) || '17.00';
  const s2In=($('adminAutoS2In')&&$('adminAutoS2In').value.trim()) || '17.00';
  const s2Out=($('adminAutoS2Out')&&$('adminAutoS2Out').value.trim()) || '23.00';
  const s3In=($('adminAutoS3In')&&$('adminAutoS3In').value.trim()) || '23.00';
  const s3Out=($('adminAutoS3Out')&&$('adminAutoS3Out').value.trim()) || '07.00';
  const rows=rowsFromAttendancePayload(adminReportData);
  const useS3=isAdminAutoShift3Enabled();
  rows.forEach(r=>{
    if(isCommercialTfActivityRow(r)){ r.checkIn=''; r.checkOut=''; return; }
    const autoS1=!!r.s1;
    const autoS2=!!r.s2;
    const autoS3=useS3 && !!r.s3;
    if(autoS1 && (autoS2 || autoS3)){ r.checkIn=randomBeforeWorkTime(s1In,10,15); r.checkOut=randomAfterWorkTime(autoS3?s3Out:s2Out,5,15); }
    else if(autoS2 && autoS3){ r.checkIn=randomBeforeWorkTime(s2In,10,15); r.checkOut=randomAfterWorkTime(s3Out,5,15); }
    else if(autoS1){ r.checkIn=randomBeforeWorkTime(s1In,10,15); r.checkOut=randomAfterWorkTime(s1Out,5,15); }
    else if(autoS2){ r.checkIn=randomBeforeWorkTime(s2In,10,15); r.checkOut=randomAfterWorkTime(s2Out,5,15); }
    else if(autoS3){ r.checkIn=randomBeforeWorkTime(s3In,10,15); r.checkOut=randomAfterWorkTime(s3Out,5,15); }
    else { r.checkIn=''; r.checkOut=''; }
  });
  updateAdminReportRowsWithCheckTimes(rows);
  renderReport();
  alert('Cek In / Cek Out otomatis sudah diisi acak sesuai ketentuan Shift 1 dan Shift 2' + (isAdminAutoShift3Enabled() ? ', serta Shift 3' : '') + '. Kegiatan Stapel (TF) dan Malleti (TF) tetap dikosongkan. Klik Simpan Cek In / Cek Out untuk menyimpan ke database.');
}
async function adminImportGlobalCheckTimes(){ if(!isAdmin()) return; const input=$('adminGlobalCheckFile'); const file=input && input.files && input.files[0]; const fallbackDate=($('adminGlobalCheckDate') && $('adminGlobalCheckDate').value) || todayISO(); if(!file){ alert('Pilih file Excel/CSV data mesin absensi terlebih dahulu.'); return; } const btn=$('btnAdminImportGlobalCheckTimes'); const old=btn?btn.textContent:''; try{ if(btn){ btn.disabled=true; btn.textContent='Mengimpor...'; } const rows=await readImportRows(file); const parsed=checkMapFromImportRows(rows, fallbackDate); if(!parsed.imported){ alert('Tidak ada data valid yang bisa diimpor. Pastikan kolom NIP, Cek In, dan Cek Out tersedia.'); return; } const store=getGlobalCheckStore(); Object.keys(parsed.byDate).forEach(dateKey=>{ store[dateKey]={...(store[dateKey]||{}), ...parsed.byDate[dateKey]}; }); setGlobalCheckStore(store); let applied=0; const reportDate=(adminReportData && adminReportData.reportDate) || (($('adminReportDate') && $('adminReportDate').value) || ''); if(reportDate && parsed.byDate[reportDate]) applied=applyCheckTimesToAdminReport(parsed.byDate[reportDate], {overwrite:true}); updateGlobalCheckInfo(`Import selesai. ${parsed.imported} baris valid disimpan. ${applied} pekerja cocok dengan laporan yang sedang dibuka.`); adminLog(`Import Cek In/Out global selesai. ${parsed.imported} baris valid. Tanggal: ${Object.keys(parsed.byDate).join(', ')}.`); alert(`Import Cek In/Out global selesai. ${parsed.imported} baris valid disimpan. ${applied} pekerja cocok dengan laporan yang sedang dibuka.`); }catch(err){ console.error(err); alert('Import Cek In/Out global gagal: '+(err && err.message ? err.message : err)); }finally{ if(btn){ btn.disabled=false; btn.textContent=old || '📥 Import Global Cek In/Out'; } } }
function adminClearGlobalCheckTimes(){ if(!isAdmin()) return; const dateValue=($('adminGlobalCheckDate') && $('adminGlobalCheckDate').value) || todayISO(); if(!confirm(`Hapus data Cek In/Out global tanggal ${dateValue}?

Data absensi yang sudah pernah disimpan tidak ikut dihapus.`)) return; const store=getGlobalCheckStore(); delete store[dateValue]; setGlobalCheckStore(store); updateGlobalCheckInfo('Data tanggal ini sudah dihapus.'); adminLog(`Data Cek In/Out global dihapus untuk tanggal ${dateValue}.`); }
function adminSaveReportFormat(){ if(!isAdmin()) return; saveReportSettings(); const settings=getReportSettings(getReportUnitKeyForSettings(), unitNameFromKey(getReportUnitKeyForSettings())); syncAdminAutoShiftInputs(settings); adminLog('Format NOTE dan tabel Jam Kerja berhasil disimpan.'); alert('NOTE dan tabel Jam Kerja berhasil disimpan.'); }
async function adminSaveCheckTimes(){
  if(!isAdmin()) return;
  if(!adminReportData){ alert('Tampilkan data absensi terlebih dahulu.'); return; }
  const rows=rowsFromAttendancePayload(adminReportData);
  const inputMap={};
  document.querySelectorAll('[data-check-nip]').forEach(el=>{ const nip=String(el.dataset.checkNip||''); if(!inputMap[nip]) inputMap[nip]={}; if(el.hasAttribute('data-check-in')) inputMap[nip].checkIn=el.value.trim(); if(el.hasAttribute('data-check-out')) inputMap[nip].checkOut=el.value.trim(); });
  rows.forEach(r=>{ if(isCommercialTfActivityRow(r)){ r.checkIn=''; r.checkOut=''; return; } const found=inputMap[String(r.nip)] || {}; r.checkIn=found.checkIn || ''; r.checkOut=found.checkOut || ''; });
  updateAdminReportDataFromRows(rows);
  adminReportData.updatedByAdmin=currentUser ? {username:currentUser.username||'', name:currentUser.name||'', role:currentUser.role||''} : null;
  adminReportData.updatedAtLocal=new Date().toISOString();
  saveReportSettings();
  const btn=$('btnAdminSaveCheckTimes'); const old=btn?btn.textContent:'';
  try{ if(btn){ btn.disabled=true; btn.textContent='Menyimpan...'; } adminReportData.unitKey = adminReportData.unitKey || (($('adminReportUnitSelect') && $('adminReportUnitSelect').value) || adminManagedUnitKey); adminReportData.reportDate = adminReportData.reportDate || (($('adminReportDate') && $('adminReportDate').value) || todayISO()); localStorage.setItem(`${ATTENDANCE_KEY}_${adminReportData.unitKey}_${adminReportData.reportDate}`, JSON.stringify(adminReportData)); const bridge=await waitFirebase(); if(bridge && bridge.enabled && bridge.saveAttendance && !adminReportData.combinedAttendance){ await bridge.saveAttendance(adminReportData); } if(adminReportData.combinedAttendance){ const savedGlobal=saveCombinedRowsToGlobalCheckTimes(adminReportData.reportDate, rows); if(savedGlobal && $('adminGlobalCheckDate')){ $('adminGlobalCheckDate').value=adminReportData.reportDate; updateGlobalCheckInfo('Data manual gabungan tersimpan.'); } } alert('Cek In / Cek Out dan format tanda tangan berhasil disimpan.'); renderReport(); }catch(err){ console.error(err); alert('Simpan Cek In / Cek Out gagal: '+(err && err.message ? err.message : err)); }finally{ if(btn){ btn.disabled=false; btn.textContent=old || '💾 Simpan Cek In / Cek Out'; } }
}

function optionUnits(includeAll=false){ return (includeAll?'<option value="ALL">Semua Bagian</option>':'') + UNITS.map(u=>`<option value="${u.key}">${safeText(u.name)}</option>`).join(''); }
function optionReportUnits(){ return (UNITS.filter(u=>u.key!==SILO_KEY && u.key!==OVERZAK_KEY).map(u=>`<option value="${u.key}">${safeText(u.name)}</option>`).join('')); }
function initAdminTools(){
  ['adminUnitSelect','adminDashUnitSelect','adminPanelUnitSelect','adminWorkerUnitSelect'].forEach(id=>{ const sel=$(id); if(sel){ sel.innerHTML=optionUnits(false); sel.value=adminManagedUnitKey; } });
  const reportSel=$('adminReportUnitSelect');
  if(reportSel){ const current=reportSel.value || adminManagedUnitKey; reportSel.innerHTML=optionReportUnits(); reportSel.value=current && optionReportUnits().includes(`value="${current}"`) ? current : adminManagedUnitKey; }
  ['adminCoordUnit'].forEach(id=>{ const sel=$(id); if(sel){ sel.innerHTML=optionUnits(false); } });
  ['adminClearWorkersUnit'].forEach(id=>{ const sel=$(id); if(sel){ sel.innerHTML=optionUnits(true); sel.value=adminManagedUnitKey; } });
  const deleteAttendanceSel=$('adminDeleteAttendanceUnit');
  if(deleteAttendanceSel){ deleteAttendanceSel.innerHTML=optionUnits(true); deleteAttendanceSel.value=adminManagedUnitKey; }
  const coordSel=$('adminCoordinatorSelect');
  if(coordSel){ coordSel.innerHTML=coordinatorBaseUsers().map(u=>`<option value="${safeText(accountUsername(u))}">${safeText(accountUsername(u))} - ${safeText(u.name)}</option>`).join(''); }
  const today=todayISO();
  if($('adminDeleteStart') && !$('adminDeleteStart').value) $('adminDeleteStart').value=today;
  if($('adminDeleteEnd') && !$('adminDeleteEnd').value) $('adminDeleteEnd').value=today;
  if($('adminReportDate') && !$('adminReportDate').value) $('adminReportDate').value=today;
  if($('adminGlobalCheckDate') && !$('adminGlobalCheckDate').value) $('adminGlobalCheckDate').value=today;
  updateGlobalCheckInfo();
  renderCoordinatorSettingForm();
  renderAdminAccountForm();
  refreshAdminWorkerReguSelect();
  renderAdminWorkerCrud();
  renderAdminLoadingDocks();
}
function matchUnitKey(value){ const raw=String(value||'').trim(); if(!raw) return ''; const key=unitKey(raw); const exact=UNITS.find(u=>u.key===key || unitKey(u.name)===key); if(exact) return exact.key; const low=raw.toLowerCase(); if(low.includes('silo')) return SILO_KEY; if(low.includes('overzak')) return OVERZAK_KEY; if(low.includes('breeder')) return 'muatan_breeder'; if(low.includes('pagi')) return 'bongkaran_bahan_baku_pagi'; if(low.includes('malam')) return 'bongkaran_bahan_baku_malam'; if(low.includes('oper')) return 'oper_oper_bahan_baku'; if(low.includes('commercial') || low.includes('komersial')) return 'muatan_commercial'; if(low.includes('stapel')) return STAPEL_TF_KEY; if(low.includes('malleti') || low.includes('mallet')) return MALLETI_TF_KEY; return ''; }
function findCell(row, names){ const keys=Object.keys(row || {}); for(const wanted of names){ const hit=keys.find(k=>unitKey(k)===unitKey(wanted)); if(hit !== undefined) return row[hit]; } return ''; }
function parseCsv(text){ const rows=[]; let row=[]; let cell=''; let inQuote=false; for(let i=0;i<text.length;i++){ const ch=text[i], next=text[i+1]; if(ch==='"' && inQuote && next==='"'){ cell+='"'; i++; continue; } if(ch==='"'){ inQuote=!inQuote; continue; } if(ch===',' && !inQuote){ row.push(cell); cell=''; continue; } if((ch==='\n' || ch==='\r') && !inQuote){ if(ch==='\r' && next==='\n') i++; row.push(cell); if(row.some(v=>String(v).trim()!=='')) rows.push(row); row=[]; cell=''; continue; } cell+=ch; } row.push(cell); if(row.some(v=>String(v).trim()!=='')) rows.push(row); if(!rows.length) return []; const headers=rows.shift().map(h=>String(h||'').trim()); return rows.map(r=>Object.fromEntries(headers.map((h,i)=>[h, r[i] || '']))); }
async function readImportRows(file){ const name=(file.name||'').toLowerCase(); if(name.endsWith('.csv')) return parseCsv(await file.text()); if(!window.XLSX) throw new Error('Library pembaca Excel belum dimuat. Pastikan internet aktif, atau gunakan format CSV.'); const buffer=await file.arrayBuffer(); const workbook=window.XLSX.read(buffer,{type:'array'}); const sheetName=workbook.SheetNames[0]; const sheet=workbook.Sheets[sheetName]; return window.XLSX.utils.sheet_to_json(sheet,{defval:''}); }
function cleanImportedWorkers(rows, fallbackUnitKey){ const grouped={}; const skipped=[]; const reguMissing=[]; rows.forEach((row,idx)=>{ const nip=String(findCell(row,['NIP','No Induk','Nomor Induk','ID','PIN']) || '').trim(); const name=String(findCell(row,['Nama Pekerja','Nama','Pekerja','Nama Lengkap']) || '').trim(); const rawUnit=findCell(row,['Bagian','Unit','Lokasi','Departemen']); const rawStatus=findCell(row,['Status Pekerja','Status','Jenis Pekerja','Tipe Pekerja']); const targetUnit=matchUnitKey(rawUnit) || fallbackUnitKey; const regu=normalizeRegu(findCell(row,['Regu','Nama Regu','Nama Regu Commercial','Nama Regu Muatan Commercial'])); if(!nip || !name){ skipped.push(idx+2); return; } if(isCommercialKey(targetUnit) && !regu){ reguMissing.push(idx+2); skipped.push(idx+2); return; } if(!grouped[targetUnit]) grouped[targetUnit]=[]; grouped[targetUnit].push({nip,name,status:normalizeWorkerStatus(rawStatus, nip),regu}); }); return {grouped, skipped, reguMissing}; }
function normalizeWorkersForUnit(workers, unitKeyValue){ const arr=(workers||[]).map(cleanWorker).filter(w=>w.nip && w.name); arr.sort((a,b)=>{ if(unitKeyValue==='muatan_breeder'){ if(String(a.nip)==='133') return -1; if(String(b.nip)==='133') return 1; } if(isCommercialKey(unitKeyValue)){ const rg=(parseInt(normalizeRegu(a.regu),10)||999)-(parseInt(normalizeRegu(b.regu),10)||999); if(rg) return rg; } return (parseInt(a.nip,10)||999999)-(parseInt(b.nip,10)||999999) || String(a.name).localeCompare(String(b.name)); }); arr.forEach((w,i)=>{ w.no=i+1; }); return arr; }
async function loadUnitStateForImport(unitKeyValue){ let result={ company:'PT. BUDI INTI PERKASA', reportDate: state.reportDate || todayISO(), workers: defaultWorkersForUnit(unitKeyValue), allowEmptyWorkers:false }; try{ const raw=localStorage.getItem(`${STORAGE_KEY}_${unitKeyValue}`); const saved=raw?JSON.parse(raw):null; if(saved && Array.isArray(saved.workers)) result={ company:'PT. BUDI INTI PERKASA', reportDate:saved.reportDate || result.reportDate, workers:saved.workers.map(cleanWorker), allowEmptyWorkers:Boolean(saved.allowEmptyWorkers) }; }catch(err){} const bridge=await waitFirebase(); if(bridge && bridge.enabled && bridge.loadAppState){ try{ const remote=await bridge.loadAppState(unitKeyValue); if(remote && Array.isArray(remote.workers)) result={ company:'PT. BUDI INTI PERKASA', reportDate:remote.reportDate || result.reportDate, workers:remote.workers.map(cleanWorker), allowEmptyWorkers:Boolean(remote.allowEmptyWorkers) }; }catch(err){ console.warn('Load unit import gagal', err); } } return result; }
async function saveUnitStateForImport(unitKeyValue, unitState){ localStorage.setItem(`${STORAGE_KEY}_${unitKeyValue}`, JSON.stringify(unitState)); const bridge=window.AbsensiFirebase; if(bridge && bridge.enabled && bridge.saveAppState) await bridge.saveAppState(unitKeyValue, unitState, currentUser); }
function renderAdminAccountForm(){
  const localAdmin=adminLoginUser() || {};
  const user=(currentUser && currentUser.role==='admin') ? { ...localAdmin, ...currentUser, password: localAdmin.password || '' } : localAdmin;
  if($('adminAccountNip')) $('adminAccountNip').value=accountUsername(user) || 'admin';
  if($('adminAccountName')) $('adminAccountName').value=user.name || 'Admin Absensi BIP';
  if($('adminAccountPassword')) $('adminAccountPassword').value=user.password || '';
  if($('adminAccountConfirm')) $('adminAccountConfirm').value=user.password || '';
}

async function saveAdminAccountSetting(){
  if(!isAdmin()){ alert('Fitur ini hanya untuk admin.'); return; }
  const username=String($('adminAccountNip') ? $('adminAccountNip').value : '').trim();
  const name=String($('adminAccountName') ? $('adminAccountName').value : '').trim();
  const password=String($('adminAccountPassword') ? $('adminAccountPassword').value : '').trim();
  const confirmPassword=String($('adminAccountConfirm') ? $('adminAccountConfirm').value : '').trim();
  if(!username || !name || !password){ alert('Username admin, nama admin, dan password baru wajib diisi.'); return; }
  if(password !== confirmPassword){ alert('Konfirmasi password admin belum sama.'); return; }
  if(!confirm('Simpan perubahan akun admin?\n\nLogin admin berikutnya akan memakai username dan password baru.')) return;
  const payload={ username, nip:String((currentUser && currentUser.nip) || '9999'), name, password, role:'admin', unit:'Admin', active:true };
  const btn=$('btnAdminSaveAdminAccount'); const old=btn?btn.textContent:'';
  try{
    if(btn){ btn.disabled=true; btn.textContent='Menyimpan...'; }
    saveLocalAdminAccount(payload);
    const bridge=await waitFirebase();
    if(bridge && bridge.enabled && bridge.saveCoordinator){ await bridge.saveCoordinator(payload, currentUser); }
    saveAuth(payload);
    initAdminTools();
    updateAuthUI();
    adminLog(`Akun admin berhasil disimpan: ${name} / Username ${username}.`);
    alert('Setting akun admin berhasil disimpan.');
  }catch(err){
    console.error(err);
    alert('Simpan akun admin gagal: ' + (err && err.message ? err.message : err));
  }finally{
    if(btn){ btn.disabled=false; btn.textContent=old || '💾 Simpan Admin'; }
  }
}
function renderCoordinatorSettingForm(){
  const sel=$('adminCoordinatorSelect');
  const user=coordinatorByUsername(sel ? sel.value : 'breeder');
  if(!user) return;
  const username=accountUsername(user);
  if(sel) sel.value=username;
  if($('adminCoordNip')) $('adminCoordNip').value=username || '';
  if($('adminCoordName')) $('adminCoordName').value=user.name || '';
  if($('adminCoordUnit')) $('adminCoordUnit').value=unitKey(user.unit || 'Muatan Breeder');
  if($('adminCoordPassword')) $('adminCoordPassword').value=user.password || '';
  if($('adminCoordActive')) $('adminCoordActive').checked=user.active !== false;
}
async function saveCoordinatorSetting(){
  if(!isAdmin()){ alert('Fitur ini hanya untuk admin.'); return; }
  const username=String($('adminCoordNip') ? $('adminCoordNip').value : '').trim();
  const name=String($('adminCoordName') ? $('adminCoordName').value : '').trim();
  const password=String($('adminCoordPassword') ? $('adminCoordPassword').value : '').trim();
  const unitKeyValue=$('adminCoordUnit') ? $('adminCoordUnit').value : 'muatan_breeder';
  const active=$('adminCoordActive') ? $('adminCoordActive').checked : true;
  if(!username || !name || !password){ alert('Username, nama koordinator, dan password wajib diisi.'); return; }
  const existing=coordinatorByUsername(username) || {};
  const payload={ username, nip:String(existing.nip || username), name, password, role:'koordinator', unit:unitNameFromKey(unitKeyValue), active };
  const btn=$('btnAdminSaveCoordinator'); const old=btn?btn.textContent:'';
  try{
    if(btn){ btn.disabled=true; btn.textContent='Menyimpan...'; }
    saveLocalCoordinatorAccount(payload);
    const bridge=await waitFirebase();
    if(bridge && bridge.enabled && bridge.saveCoordinator){ await bridge.saveCoordinator(payload, currentUser); }
    initAdminTools();
    const sel=$('adminCoordinatorSelect'); if(sel) sel.value=username;
    renderCoordinatorSettingForm();
    adminLog(`Akun koordinator berhasil disimpan: ${name} / Username ${username} / ${unitNameFromKey(unitKeyValue)}.`);
    alert('Setting akun koordinator berhasil disimpan.');
  }catch(err){
    console.error(err);
    alert('Simpan akun koordinator gagal: ' + (err && err.message ? err.message : err));
  }finally{
    if(btn){ btn.disabled=false; btn.textContent=old || '💾 Simpan Akun'; }
  }
}

function adminWorkerTargetUnit(){ return $('adminWorkerUnitSelect') ? $('adminWorkerUnitSelect').value : adminManagedUnitKey; }
function adminCrudReguOptions(selected){
  const current=normalizeRegu(selected || '');
  const values=[];
  for(let i=1;i<=20;i++) values.push(String(i).padStart(2,'0'));
  if(current && !values.includes(current)) values.push(current);
  return '<option value="">Regu</option>' + values.sort((a,b)=>(parseInt(a,10)||999)-(parseInt(b,10)||999) || a.localeCompare(b)).map(r=>`<option value="${safeText(r)}" ${r===current?'selected':''}>Regu ${safeText(r)}</option>`).join('');
}
function refreshAdminWorkerReguSelect(selected){
  const sel=$('adminWorkerCrudRegu');
  if(!sel) return;
  const unitKeyValue=adminWorkerTargetUnit();
  sel.innerHTML=adminCrudReguOptions(selected || sel.value || '');
  const field=sel.closest('.field');
  if(field) field.style.display=isCommercialKey(unitKeyValue) ? '' : 'none';
}
function adminWorkerClearForm(){ if($('adminWorkerEditNo')) $('adminWorkerEditNo').value=''; if($('adminWorkerNip')) $('adminWorkerNip').value=''; if($('adminWorkerName')) $('adminWorkerName').value=''; if($('adminWorkerStatus')) $('adminWorkerStatus').value=''; refreshAdminWorkerReguSelect(''); if($('adminWorkerNip')) $('adminWorkerNip').focus(); }
async function renderAdminWorkerCrud(){
  if(!isAdmin()) return;
  const list=$('adminWorkerList');
  if(!list) return;
  const unitKeyValue=adminWorkerTargetUnit();
  refreshAdminWorkerReguSelect();
  let workers=[];
  try{ workers=await loadWorkersForAdmin(unitKeyValue); }catch(err){ console.warn('Load CRUD pekerja gagal', err); }
  const q=String($('adminWorkerSearch') ? $('adminWorkerSearch').value : '').toLowerCase().trim();
  const selectedStatus=String($('adminWorkerStatus') ? $('adminWorkerStatus').value : '').trim();
  const selectedRegu=isCommercialKey(unitKeyValue) ? normalizeRegu($('adminWorkerCrudRegu') ? $('adminWorkerCrudRegu').value : '') : '';
  let filtered=selectedStatus ? workers.filter(w=>workerType(w)===selectedStatus) : workers;
  filtered=selectedRegu ? filtered.filter(w=>normalizeRegu(w.regu)===selectedRegu) : filtered;
  filtered=q ? filtered.filter(w=>String(w.nip).toLowerCase().includes(q) || String(w.name).toLowerCase().includes(q)) : filtered;
  const statusLabel=selectedStatus || 'Semua Status';
  const reguLabel=isCommercialKey(unitKeyValue) ? (selectedRegu ? `Regu ${selectedRegu}` : 'Semua Regu') : '';
  if($('adminWorkerCount')) $('adminWorkerCount').textContent=`${filtered.length} dari ${workers.length} data pekerja • ${unitNameFromKey(unitKeyValue)} • ${statusLabel}${reguLabel ? ' • '+reguLabel : ''}`;
  if(!filtered.length){ list.innerHTML='<div class="empty-admin-list">Belum ada data pekerja sesuai bagian/status/regu yang dipilih.</div>'; return; }
  list.innerHTML=filtered.map(w=>`<div class="admin-worker-row"><div class="nip">${safeText(w.nip)}</div><div><div class="name">${safeText(w.name)}</div><div class="meta">${workerType(w)} • No ${safeText(w.no)}${w.regu ? ' • Regu '+safeText(w.regu) : ''}</div></div><div class="row-actions"><button type="button" class="btn secondary" data-admin-worker-edit="${safeText(w.no)}">Edit</button><button type="button" class="btn danger" data-admin-worker-delete="${safeText(w.no)}">Hapus</button></div></div>`).join('');
}
async function adminLoadWorkerState(unitKeyValue){ const unitState=await loadUnitStateForImport(unitKeyValue); unitState.workers=normalizeWorkersForUnit(unitState.workers || [], unitKeyValue); return unitState; }
async function adminSaveWorkerState(unitKeyValue, unitState){ unitState.workers=normalizeWorkersForUnit(unitState.workers || [], unitKeyValue); unitState.allowEmptyWorkers=unitState.workers.length===0; await saveUnitStateForImport(unitKeyValue, unitState); if(activeUnitKey()===unitKeyValue){ await loadState(); renderAll(); } await renderAdminDashboard(); await renderAdminWorkerCrud(); }
async function adminFillWorkerForm(no){ if(!isAdmin()) return; const unitKeyValue=adminWorkerTargetUnit(); const unitState=await adminLoadWorkerState(unitKeyValue); const worker=unitState.workers.find(w=>Number(w.no)===Number(no)); if(!worker) return; if($('adminWorkerEditNo')) $('adminWorkerEditNo').value=worker.no; if($('adminWorkerNip')) $('adminWorkerNip').value=worker.nip; if($('adminWorkerName')) $('adminWorkerName').value=worker.name; if($('adminWorkerStatus')) $('adminWorkerStatus').value=workerType(worker); refreshAdminWorkerReguSelect(worker.regu || ''); }
async function adminSaveWorkerCrud(){
  if(!isAdmin()){ alert('Fitur ini hanya untuk admin.'); return; }
  const unitKeyValue=adminWorkerTargetUnit();
  const editNo=Number($('adminWorkerEditNo') ? $('adminWorkerEditNo').value : 0);
  const nip=String($('adminWorkerNip') ? $('adminWorkerNip').value : '').trim();
  const name=String($('adminWorkerName') ? $('adminWorkerName').value : '').trim();
  const status=normalizeWorkerStatus($('adminWorkerStatus') ? $('adminWorkerStatus').value : '', nip);
  const regu=isCommercialKey(unitKeyValue) ? normalizeRegu($('adminWorkerCrudRegu') ? $('adminWorkerCrudRegu').value : '') : '';
  if(!nip || !name){ alert('NIP dan nama pekerja wajib diisi.'); return; }
  if(isCommercialKey(unitKeyValue) && !regu){ alert('Khusus Muatan Commercial, Regu wajib dipilih.'); return; }
  const btn=$('btnAdminSaveWorker'); const old=btn?btn.textContent:'';
  try{
    if(btn){ btn.disabled=true; btn.textContent='Menyimpan...'; }
    const unitState=await adminLoadWorkerState(unitKeyValue);
    let target=editNo ? unitState.workers.find(w=>Number(w.no)===editNo) : null;
    const duplicate=unitState.workers.find(w=>String(w.nip)===nip && Number(w.no)!==editNo);
    if(duplicate && !confirm('NIP pekerja sudah ada di bagian ini. Update data pekerja tersebut?')) return;
    if(duplicate) target=duplicate;
    if(target){ target.nip=nip; target.name=name; target.status=status; target.regu=regu; }
    else { unitState.workers.push({ no:0, nip, name, status, regu, s1:false, s2:false, s3:false }); }
    await adminSaveWorkerState(unitKeyValue, unitState);
    adminWorkerClearForm();
    adminLog(`Data pekerja disimpan: ${name} / NIP ${nip} / ${status} / ${unitNameFromKey(unitKeyValue)}${regu ? ' / Regu '+regu : ''}.`);
    alert('Data pekerja berhasil disimpan.');
  }catch(err){ console.error(err); alert('Simpan data pekerja gagal: '+(err && err.message ? err.message : err)); }
  finally{ if(btn){ btn.disabled=false; btn.textContent=old || '💾 Simpan Pekerja'; } }
}
async function adminDeleteWorkerCrud(no){
  if(!isAdmin()) return;
  const unitKeyValue=adminWorkerTargetUnit();
  const unitState=await adminLoadWorkerState(unitKeyValue);
  const worker=unitState.workers.find(w=>Number(w.no)===Number(no));
  if(!worker){ alert('Data pekerja tidak ditemukan.'); return; }
  if(!confirm(`Hapus pekerja ${worker.name} dari ${unitNameFromKey(unitKeyValue)}?`)) return;
  unitState.workers=unitState.workers.filter(w=>Number(w.no)!==Number(no));
  await adminSaveWorkerState(unitKeyValue, unitState);
  adminWorkerClearForm();
  adminLog(`Data pekerja dihapus: ${worker.name} / NIP ${worker.nip} / ${unitNameFromKey(unitKeyValue)}.`);
}
async function importWorkersFromExcel(source){ if(!isAdmin()){ alert('Import pekerja hanya bisa diproses oleh admin.'); return; } const panelInput=$('adminPanelImportFile'); const oldInput=$('importWorkerFile'); const input=(source==='panel' && panelInput) ? panelInput : ((oldInput && oldInput.files && oldInput.files[0]) ? oldInput : panelInput); const file=input && input.files ? input.files[0] : null; if(!file){ alert('Pilih file Excel atau CSV terlebih dahulu.'); return; } const btn=source==='panel' ? $('btnAdminPanelImportWorkers') : $('btnImportWorkers'); const old=btn ? btn.textContent : ''; const defaultUnit=(source==='panel' && $('adminPanelUnitSelect')) ? $('adminPanelUnitSelect').value : ($('adminUnitSelect') ? $('adminUnitSelect').value : adminManagedUnitKey); try{ if(btn){ btn.disabled=true; btn.textContent='Memproses import...'; } const rows=await readImportRows(file); const parsed=cleanImportedWorkers(rows, defaultUnit); const unitKeys=Object.keys(parsed.grouped); if(!unitKeys.length){ alert('Tidak ada data valid. Pastikan kolom NIP dan Nama Pekerja terisi.'); return; } const summary=[]; for(const unitKeyValue of unitKeys){ const unitState=await loadUnitStateForImport(unitKeyValue); const byNip=new Map((unitState.workers||[]).map(w=>[String(w.nip), {...w}])); parsed.grouped[unitKeyValue].forEach(row=>{ const existing=byNip.get(String(row.nip)); byNip.set(String(row.nip), { no: existing ? existing.no : 0, nip:String(row.nip), name:String(row.name), status: row.status || (existing ? workerType(existing) : normalizeWorkerStatus('', row.nip)), regu: isCommercialKey(unitKeyValue) ? normalizeRegu(row.regu || (existing && existing.regu) || '') : '', s1: existing ? Boolean(existing.s1) : false, s2: existing ? Boolean(existing.s2) : false, s3: existing ? Boolean(existing.s3) : false }); }); unitState.workers=normalizeWorkersForUnit(Array.from(byNip.values()), unitKeyValue); unitState.allowEmptyWorkers=false; await saveUnitStateForImport(unitKeyValue, unitState); summary.push(`${unitNameFromKey(unitKeyValue)}: ${parsed.grouped[unitKeyValue].length} data`); } if(unitKeys.includes(activeUnitKey())){ await loadState(); renderAll(); } await renderAdminDashboard(); await renderAdminWorkerCrud(); alert('Import pekerja selesai.\n' + summary.join('\n') + (parsed.reguMissing && parsed.reguMissing.length ? `\n\nKhusus Muatan Commercial, baris tanpa Regu dilewati: ${parsed.reguMissing.join(', ')}` : (parsed.skipped.length ? `\n\nBaris dilewati: ${parsed.skipped.join(', ')}` : ''))); }catch(err){ console.error(err); alert('Import gagal: ' + (err && err.message ? err.message : err)); } finally{ if(btn){ btn.disabled=false; btn.textContent=old || '📥 Import Pekerja'; } } }
function downloadImportTemplate(){ const rows=[['NIP','Nama Pekerja','Bagian','Status Pekerja','Regu'],['133','Moch. Sholeh','Muatan Breeder','PKWT',''],['1201','Contoh Pekerja','Bongkaran Bahan Baku Pagi','Freelance',''],['2201','Contoh Pekerja Silo','Silo','PKWT',''],['3301','Contoh Pekerja Overzak','Overzak','Freelance',''],['20010401','Ahmad Fauzi','Muatan Commercial','Freelance','10'],['5001','Contoh Stapel','Stapel (TF)','PKWT',''],['6001','Contoh Malleti','Malleti (TF)','Freelance','']]; const html='<html><head><meta charset="utf-8"></head><body><table border="1">'+rows.map(r=>'<tr>'+r.map(c=>`<td>${safeText(c)}</td>`).join('')+'</tr>').join('')+'</table></body></html>'; const blob=new Blob(['\ufeff',html],{type:'application/vnd.ms-excel'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='template_import_pekerja_absensi.xls'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); }
function adminLog(message){ const el=$('adminActionLog'); if(el){ el.textContent='['+new Date().toLocaleString('id-ID')+'] '+message+'\n\n'+(el.textContent||''); } }
function localStorageKeys(prefix){ const out=[]; for(let i=0;i<localStorage.length;i++){ const k=localStorage.key(i); if(!prefix || k.startsWith(prefix)) out.push(k); } return out; }
function parseDateInput(id){ const value=$(id) ? $(id).value : ''; return value || todayISO(); }
function dateRangeList(start,end){ const rows=[]; const s=new Date(start+'T00:00:00'); const e=new Date(end+'T00:00:00'); if(isNaN(s) || isNaN(e) || s>e) return rows; for(let d=new Date(s); d<=e; d.setDate(d.getDate()+1)){ rows.push(d.toISOString().slice(0,10)); } return rows; }
async function loadWorkersForAdmin(unitKeyValue){ const unitState=await loadUnitStateForImport(unitKeyValue); return normalizeWorkersForUnit(unitState.workers || [], unitKeyValue); }
async function renderAdminDashboard(){ if(!isAdmin()) return; renderCoordinatorSettingForm(); const unitSel=$('adminDashUnitSelect'); const target=unitSel ? unitSel.value : adminManagedUnitKey; let workers=[]; try{ workers=await loadWorkersForAdmin(target); }catch(err){ console.warn('Ringkasan admin gagal dimuat', err); }
  const pkwt=workers.filter(w=>workerType(w)==='PKWT').length; const free=workers.filter(w=>workerType(w)==='Freelance').length; if($('adminTotalWorkers')) $('adminTotalWorkers').textContent=workers.length; if($('adminTotalPkwt')) $('adminTotalPkwt').textContent=pkwt; if($('adminTotalFreelance')) $('adminTotalFreelance').textContent=free; if($('adminPendingCount')) $('adminPendingCount').textContent=getPendingAttendance().length; }
async function clearWorkersForUnit(unitKeyValue){ const unitState={ company:'PT. BUDI INTI PERKASA', reportDate: state.reportDate || todayISO(), workers: [], allowEmptyWorkers:true }; localStorage.setItem(`${STORAGE_KEY}_${unitKeyValue}`, JSON.stringify(unitState)); const bridge=window.AbsensiFirebase; if(bridge && bridge.enabled && bridge.saveAppState){ await bridge.saveAppState(unitKeyValue, unitState, currentUser); } if(activeUnitKey()===unitKeyValue){ state=unitState; renderAll(); } }
async function adminClearWorkers(){ if(!isAdmin()){ alert('Fitur ini hanya untuk admin.'); return; } const sel=$('adminClearWorkersUnit'); const target=sel ? sel.value : adminManagedUnitKey; const targets=target==='ALL' ? UNITS.map(u=>u.key) : [target]; const names=target==='ALL' ? 'SEMUA BAGIAN' : unitNameFromKey(target); if(!confirm(`Hapus data pekerja ${names}?\n\nData absensi tidak ikut terhapus. Setelah itu kamu bisa import ulang data pekerja.`)) return; const btn=$('btnAdminClearWorkers'); const old=btn?btn.textContent:''; try{ if(btn){ btn.disabled=true; btn.textContent='Menghapus...'; } for(const key of targets){ await clearWorkersForUnit(key); } await loadState(); renderAll(); await renderAdminDashboard(); await renderAdminWorkerCrud(); adminLog('Data pekerja berhasil dihapus: '+names); alert('Data pekerja berhasil dihapus. Silakan import ulang data pekerja.'); }catch(err){ console.error(err); alert('Hapus data pekerja gagal: '+(err && err.message ? err.message : err)); }finally{ if(btn){ btn.disabled=false; btn.textContent=old || '🗑 Hapus Data Pekerja'; } } }
function removeAttendanceLocal(unitKeys, dates){ let count=0; unitKeys.forEach(key=>dates.forEach(date=>{ const k=`${ATTENDANCE_KEY}_${key}_${date}`; if(localStorage.getItem(k)!==null){ localStorage.removeItem(k); count++; } })); const pending=getPendingAttendance().filter(row=>!(row && unitKeys.includes(row.unitKey) && dates.includes(row.reportDate))); setPendingAttendance(pending); return count; }
async function deleteAttendanceOnline(unitKeys,start,end){ const bridge=window.AbsensiFirebase; if(!(bridge && bridge.enabled && bridge.deleteAttendanceRange)) return {deleted:0, online:false}; let total=0; for(const key of unitKeys){ const res=await bridge.deleteAttendanceRange(key,start,end); total += Number(res && res.deleted || 0); } return {deleted:total, online:true}; }
async function adminDeleteAttendance(){ if(!isAdmin()){ alert('Fitur ini hanya untuk admin.'); return; } const target=$('adminDeleteAttendanceUnit') ? $('adminDeleteAttendanceUnit').value : adminManagedUnitKey; const start=parseDateInput('adminDeleteStart'); const end=parseDateInput('adminDeleteEnd'); const dates=dateRangeList(start,end); if(!dates.length){ alert('Periode tanggal tidak valid. Pastikan tanggal awal tidak lebih besar dari tanggal akhir.'); return; } const unitKeys=target==='ALL' ? UNITS.map(u=>u.key) : [target]; const label=target==='ALL' ? 'SEMUA BAGIAN' : unitNameFromKey(target); if(!confirm(`Hapus data absensi ${label}\nPeriode ${start} sampai ${end}?\n\nData yang sudah dihapus tidak bisa dikembalikan dari aplikasi.`)) return; const btn=$('btnAdminDeleteAttendance'); const old=btn?btn.textContent:''; try{ if(btn){ btn.disabled=true; btn.textContent='Menghapus...'; } const localDeleted=removeAttendanceLocal(unitKeys, dates); const online=await deleteAttendanceOnline(unitKeys,start,end); await renderAdminDashboard(); adminLog(`Hapus absensi selesai. Target: ${label}. Periode: ${start} s/d ${end}. Lokal: ${localDeleted}. Firebase: ${online.online?online.deleted:'tidak online'}.`); alert('Proses hapus absensi selesai.'); }catch(err){ console.error(err); alert('Hapus absensi gagal: '+(err && err.message ? err.message : err)); }finally{ if(btn){ btn.disabled=false; btn.textContent=old || '🗑 Hapus Absensi Periode'; } } }
function switchToPanel(panelId){ const btn=document.querySelector(`.tab-btn[data-panel="${panelId}"]`); if(btn) btn.click(); }
function showAdminSection(section){
  const target=section || 'summary';
  document.querySelectorAll('.admin-section-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.adminSection===target));
  document.querySelectorAll('.admin-section-card').forEach(card=>card.classList.toggle('active', card.dataset.adminPanel===target));
}


function exportExcel(){
  const rows=selectedWorkers();
  if(rows.length===0){ alert('Export Excel belum bisa dibuat. Pilih minimal 1 pekerja terlebih dahulu.'); return; }
  const isCommercialRows=isCommercialKey(activeUnitKey()) || rows.some(w=>w && (w.ldRegu || w.loadingDock || w.regu));
  const s1=rows.filter(w=>w.s1).length, s2=rows.filter(w=>w.s2).length, s3=rows.filter(w=>w.s3).length;
  const tableRows=rows.map((w,i)=> isCommercialRows
    ? `<tr><td>${i+1}</td><td>${safeText(w.ldRegu || commercialLdReguLabel(w.loadingDock,w.regu))}</td><td>${safeText(w.nip)}</td><td>${safeText(w.name)}</td><td>${w.s1?'✓':''}</td><td>${w.s2?'✓':''}</td><td>${w.s3?'✓':''}</td></tr>`
    : `<tr><td>${i+1}</td><td>${safeText(w.nip)}</td><td>${safeText(w.name)}</td><td>${w.s1?'✓':''}</td><td>${w.s2?'✓':''}</td><td>${w.s3?'✓':''}</td></tr>`
  ).join('');
  const header=isCommercialRows ? '<tr><th>NO</th><th>LD-Regu</th><th>NIP</th><th>NAMA PEKERJA</th><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th></tr>' : '<tr><th>NO</th><th>NIP</th><th>NAMA</th><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th></tr>';
  const html=`<html><head><meta charset="utf-8"></head><body><h3 style="text-align:center">ABSENSI KEGIATAN ${safeText(activeUnitName()).toUpperCase()}</h3><div style="text-align:center">PT. BUDI INTI PERKASA</div><div style="text-align:center">${formatLongDate(state.reportDate)}</div><table border="1" cellspacing="0" cellpadding="5"><thead>${header}</thead><tbody>${tableRows}</tbody></table><br><table border="1" cellspacing="0" cellpadding="5"><tr><th></th><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th></tr><tr><td>JUMLAH PEKERJA</td><td>${s1}</td><td>${s2}</td><td>${s3}</td></tr><tr><td colspan="4">${rows.length} Orang</td></tr></table></body></html>`;
  const blob=new Blob(['﻿',html],{type:'application/vnd.ms-excel'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download=`absensi_${activeUnitKey()}_${state.reportDate || 'tanggal'}.xls`;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
document.addEventListener('input', e=>{ if(e.target && e.target.matches('[data-report-setting]')) saveReportSettings(); });
document.addEventListener('blur', e=>{ if(e.target && e.target.matches('[data-report-setting]')) saveReportSettings(); }, true);
document.addEventListener('click', e=>{ const sectionBtn=e.target.closest('[data-admin-section]'); if(sectionBtn){ showAdminSection(sectionBtn.dataset.adminSection); if(sectionBtn.dataset.adminSection==='worker-crud') renderAdminWorkerCrud(); if(sectionBtn.dataset.adminSection==='summary') renderAdminDashboard(); if(sectionBtn.dataset.adminSection==='import-data') updateGlobalCheckInfo(); if(sectionBtn.dataset.adminSection==='loading-dock') renderAdminLoadingDocks(); return; } const dockDel=e.target.closest('[data-dock-delete]'); if(dockDel){ adminDeleteDock(dockDel.dataset.dockDelete); return; } const editBtn=e.target.closest('[data-admin-worker-edit]'); if(editBtn){ adminFillWorkerForm(editBtn.dataset.adminWorkerEdit); return; } const delBtn=e.target.closest('[data-admin-worker-delete]'); if(delBtn){ adminDeleteWorkerCrud(delBtn.dataset.adminWorkerDelete); return; } const btn=e.target.closest('.tab-btn'); if(btn){ if(isAdmin() && btn.dataset.panel==='panelWorkers') return; document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active')); document.querySelectorAll(`.tab-btn[data-panel="${btn.dataset.panel}"]`).forEach(b=>b.classList.add('active')); $(btn.dataset.panel).classList.add('active'); renderReport(); if(btn.dataset.panel==='panelAdmin') renderAdminDashboard(); } });
document.addEventListener('change', e=>{
  if(e.target.matches('input[data-shift]')){
    const no=Number(e.target.dataset.no), shift=e.target.dataset.shift;
    const allowed=coordinatorAllowedShift();
    if(allowed && shift!==allowed){ e.target.checked=false; return; }
    const w=state.workers.find(x=>x.no===no);
    if(w){
      w[shift]=e.target.checked;
      if(allowed==='s1'){ w.s2=false; w.s3=false; }
      if(allowed==='s2'){ w.s1=false; w.s3=false; }
      if(allowed==='s3'){ w.s1=false; w.s2=false; }
      saveState();
      if(activeUnitKey()===BAHAN_BAKU_PAGI_KEY){ renderWorkers(); }
      renderReport();
      updateCounts();
    }
  }
  if(e.target.matches('#reportDate')){ state.reportDate=e.target.value; if(isCommercialKey(activeUnitKey()) && !isAdmin()) applyCommercialDraftSelection(); saveState(); renderAll(); }
  if(e.target.matches('#activitySelect')){ changeCoordinatorActivity(e.target.value).catch(err=>{ console.error(err); alert('Gagal mengganti kegiatan: ' + (err && err.message ? err.message : err)); }); }
  if(e.target.matches('[data-commercial-shift]')){
    const dock=normalizeDockName(e.target.dataset.dock);
    const shift=e.target.dataset.commercialShift;
    if(shift==='s1' && e.target.checked){
      const s2=document.querySelector(`[data-commercial-shift="s2"][data-dock="${dock}"]`);
      const s3=document.querySelector(`[data-commercial-shift="s3"][data-dock="${dock}"]`);
      if(s2) s2.checked=true; if(s3) s3.checked=true;
    }
    saveCommercialDraftSelection(); renderReport(); updateCounts();
  }
  if(e.target.matches('[data-commercial-regu-select]')){ enforceUniqueCommercialReguSelection(e.target); refreshCommercialReguSelectOptions(); saveCommercialDraftSelection(); renderReport(); updateCounts(); }
  if(e.target.matches('[data-commercial-activity-shift]')){
    const key=e.target.dataset.activityKey;
    const nip=e.target.dataset.nip;
    const shift=e.target.dataset.commercialActivityShift;
    if(shift==='s1' && e.target.checked){
      const s2=document.querySelector(`[data-commercial-activity-shift="s2"][data-activity-key="${key}"][data-nip="${nip}"]`);
      const s3=document.querySelector(`[data-commercial-activity-shift="s3"][data-activity-key="${key}"][data-nip="${nip}"]`);
      if(s2) s2.checked=true; if(s3) s3.checked=true;
    }
    saveCommercialDraftSelection(); renderReport(); updateCounts();
  }
  if(e.target.matches('[data-overzak-shift]')){ saveBahanBakuOverzakDraftSelection(); renderReport(); updateCounts(); }
  if(e.target.matches('#selectPkwt') && e.target.value){ fillForm(e.target.value); }
  if(e.target.matches('#selectFreelance') && e.target.value){ fillForm(e.target.value); }
});
syncAdminAttendanceOptionCheckboxes(); if($('adminAutoUseS3')) $('adminAutoUseS3').addEventListener('change', e=>{ localStorage.setItem(AUTO_SHIFT3_ENABLED_KEY, e.target.checked ? '1' : '0'); }); if($('adminShowDurationReport')) $('adminShowDurationReport').addEventListener('change', e=>{ localStorage.setItem(SHOW_DURATION_REPORT_KEY, e.target.checked ? '1' : '0'); renderReport(); });
if($('loginForm')) $('loginForm').addEventListener('submit', async e=>{ e.preventDefault(); const ok=await loginLocal($('loginNip').value, $('loginPassword').value); if(!ok){ $('loginError').classList.add('show'); $('loginPassword').focus(); } });
if($('btnTogglePassword')) $('btnTogglePassword').addEventListener('click', ()=>{ const input=$('loginPassword'); input.type=input.type==='password'?'text':'password'; });
if($('btnLogout')) $('btnLogout').addEventListener('click', logoutLocal);
$('btnAddWorker').addEventListener('click', addWorker); $('btnUpdateWorker').addEventListener('click', updateWorker); $('btnDeleteWorker').addEventListener('click', deleteWorker); $('btnClearForm').addEventListener('click', clearForm); $('btnResetShift').addEventListener('click', resetShift); $('btnSaveSchedule').addEventListener('click', saveSchedule); $('workerFilter').addEventListener('input', renderWorkers); $('btnShareWa').addEventListener('click', shareWhatsapp); if($('adminUnitSelect')) $('adminUnitSelect').addEventListener('change', async e=>{ adminManagedUnitKey=e.target.value || 'muatan_breeder'; updateAuthUI(); await loadState(); renderAll(); }); if($('importWorkerFile')) $('importWorkerFile').addEventListener('change', e=>{ const file=e.target.files && e.target.files[0]; if($('importFileName')) $('importFileName').textContent=file ? `File dipilih: ${file.name}` : 'Belum ada file dipilih.'; }); if($('btnImportWorkers')) $('btnImportWorkers').addEventListener('click', ()=>importWorkersFromExcel('legacy')); if($('btnDownloadTemplate')) $('btnDownloadTemplate').addEventListener('click', downloadImportTemplate); if($('adminDashUnitSelect')) $('adminDashUnitSelect').addEventListener('change', renderAdminDashboard); if($('adminReportUnitSelect')) $('adminReportUnitSelect').addEventListener('change', ()=>{ adminReportData=null; renderReport(); }); if($('adminReportDate')) $('adminReportDate').addEventListener('change', ()=>{ adminReportData=null; renderReport(); }); if($('btnAdminLoadAttendance')) $('btnAdminLoadAttendance').addEventListener('click', loadAdminAttendance); if($('btnAdminRefreshAttendance')) $('btnAdminRefreshAttendance').addEventListener('click', loadAdminAttendance); if($('btnBottomPrintAttendance')) $('btnBottomPrintAttendance').addEventListener('click', printAdminAttendance); if($('btnAdminSaveCheckTimes')) $('btnAdminSaveCheckTimes').addEventListener('click', adminSaveCheckTimes); ['adminAutoS1In','adminAutoS1Out','adminAutoS2In','adminAutoS2Out','adminAutoS3In','adminAutoS3Out'].forEach(id=>{ if($(id)) $(id).addEventListener('input', e=>{ e.target.dataset.userEdited='1'; }); }); if($('btnAdminApplyAutoCheckTimes')) $('btnAdminApplyAutoCheckTimes').addEventListener('click', adminApplyAutoCheckTimes); if($('btnAdminRefresh')) $('btnAdminRefresh').addEventListener('click', renderAdminDashboard); if($('btnAdminSyncPending')) $('btnAdminSyncPending').addEventListener('click', async()=>{ await syncPendingAttendanceOnline(); await renderAdminDashboard(); adminLog('Sinkron data pending selesai diproses.'); }); if($('btnAdminPanelImportWorkers')) $('btnAdminPanelImportWorkers').addEventListener('click', ()=>importWorkersFromExcel('panel')); if($('adminPanelImportFile')) $('adminPanelImportFile').addEventListener('change', e=>{ const file=e.target.files && e.target.files[0]; if($('adminPanelImportFileName')) $('adminPanelImportFileName').textContent=file ? `File dipilih: ${file.name}` : 'Belum ada file dipilih.'; }); if($('btnAdminTemplate')) $('btnAdminTemplate').addEventListener('click', downloadImportTemplate); if($('adminGlobalCheckFile')) $('adminGlobalCheckFile').addEventListener('change', e=>{ const file=e.target.files && e.target.files[0]; if($('adminGlobalCheckFileName')) $('adminGlobalCheckFileName').textContent=file ? `File dipilih: ${file.name}` : 'Belum ada file dipilih.'; }); if($('adminGlobalCheckDate')) $('adminGlobalCheckDate').addEventListener('change', updateGlobalCheckInfo); if($('btnAdminImportGlobalCheckTimes')) $('btnAdminImportGlobalCheckTimes').addEventListener('click', adminImportGlobalCheckTimes); if($('btnAdminClearGlobalCheckTimes')) $('btnAdminClearGlobalCheckTimes').addEventListener('click', adminClearGlobalCheckTimes); if($('btnSaveReportFormat')) $('btnSaveReportFormat').addEventListener('click', adminSaveReportFormat); if($('adminCoordinatorSelect')) $('adminCoordinatorSelect').addEventListener('change', renderCoordinatorSettingForm); if($('btnAdminResetCoordinatorForm')) $('btnAdminResetCoordinatorForm').addEventListener('click', renderCoordinatorSettingForm); if($('btnAdminSaveCoordinator')) $('btnAdminSaveCoordinator').addEventListener('click', saveCoordinatorSetting); if($('btnAdminResetAdminAccountForm')) $('btnAdminResetAdminAccountForm').addEventListener('click', renderAdminAccountForm); if($('btnAdminSaveAdminAccount')) $('btnAdminSaveAdminAccount').addEventListener('click', saveAdminAccountSetting); if($('btnAdminClearWorkers')) $('btnAdminClearWorkers').addEventListener('click', adminClearWorkers); if($('btnAdminDeleteAttendance')) $('btnAdminDeleteAttendance').addEventListener('click', adminDeleteAttendance); if($('adminWorkerUnitSelect')) $('adminWorkerUnitSelect').addEventListener('change', ()=>{ adminWorkerClearForm(); renderAdminWorkerCrud(); }); if($('adminWorkerStatus')) $('adminWorkerStatus').addEventListener('change', renderAdminWorkerCrud); if($('adminWorkerSearch')) $('adminWorkerSearch').addEventListener('input', renderAdminWorkerCrud); if($('btnAdminSaveWorker')) $('btnAdminSaveWorker').addEventListener('click', adminSaveWorkerCrud); if($('btnAdminResetWorkerForm')) $('btnAdminResetWorkerForm').addEventListener('click', adminWorkerClearForm); if($('adminWorkerCrudRegu')) $('adminWorkerCrudRegu').addEventListener('change', e=>{ e.target.value=normalizeRegu(e.target.value); renderAdminWorkerCrud(); }); if($('btnAdminAddDock')) $('btnAdminAddDock').addEventListener('click', adminAddDock); if($('btnAdminResetDock')) $('btnAdminResetDock').addEventListener('click', adminResetDocks);
let deferredPrompt=null; const installSheet=$('installSheet'); function showInstall(){ if(deferredPrompt) { installSheet.classList.add('show'); $('btnInlineInstall').classList.add('show'); }} window.addEventListener('beforeinstallprompt', e=>{ e.preventDefault(); deferredPrompt=e; setTimeout(showInstall,700); }); async function installApp(){ if(!deferredPrompt){ alert('Menu install belum tersedia. Buka dari Chrome/Edge Android lalu pilih Add to Home Screen jika tombol belum muncul.'); return; } deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null; installSheet.classList.remove('show'); $('btnInlineInstall').classList.remove('show'); } $('btnInstallApp').addEventListener('click', installApp); $('btnInlineInstall').addEventListener('click', installApp); $('btnDismissInstall').addEventListener('click', ()=>installSheet.classList.remove('show')); $('btnDismissInstallTop').addEventListener('click', ()=>installSheet.classList.remove('show'));
function hideSplash(){ const splash=$('appSplash'); if(splash) splash.classList.add('hide'); }
window.addEventListener('load', ()=>{ setTimeout(hideSplash,650); });
setTimeout(hideSplash,3500);
async function bootApp(){
  try{
    initAdminTools();
    renderDemoUsers();
    await waitFirebase();
    await loadAuth();
    await loadState();
    await renderAll();
    if(isAdmin()) { switchToPanel('panelAdmin'); showAdminSection('summary'); }
    updateFirebaseStatusUI();
  }catch(err){
    console.error('Boot aplikasi gagal:', err);
    try{ currentUser=null; updateAuthUI(); }catch(innerErr){ document.body.classList.remove('auth-ok','auth-admin'); document.body.classList.add('auth-pending'); }
  }finally{
    hideSplash();
  }
}
bootApp();
