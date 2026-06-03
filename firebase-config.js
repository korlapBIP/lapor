/*
  FIREBASE CONFIG ABSENSI KOORDINATOR BIP
  Update 3: Firebase aktif untuk sinkron data pekerja per bagian dan absensi.
*/
window.ABSENSI_USE_FIREBASE = true;
window.ABSENSI_FIREBASE_CONFIG = {
  apiKey: "AIzaSyBmjBRQb6YTf24R-vNQDcY29SBUuJNTiTw",
  authDomain: "absensi-koordinator-bip.firebaseapp.com",
  projectId: "absensi-koordinator-bip",
  storageBucket: "absensi-koordinator-bip.firebasestorage.app",
  messagingSenderId: "699411096037",
  appId: "1:699411096037:web:4d701733fe78a22ed80f0c"
};

/*
  EMAIL NOTIFIKASI ADMIN SAAT KOORDINATOR KLIK SIMPAN
  Alur: PWA -> Google Apps Script Web App -> Gmail.
  Setelah file kode_apps_script_email_notifikasi.gs dideploy sebagai Web App,
  isi URL deployment ke ABSENSI_EMAIL_NOTIFY_WEBAPP_URL.
*/
window.ABSENSI_EMAIL_NOTIFY_ENABLED = true;
window.ABSENSI_EMAIL_NOTIFY_TO = "naafi.aoa@gmail.com";
window.ABSENSI_EMAIL_NOTIFY_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbycwBlmsZ609sIoM1XpgastLJZ0XElTY4QbqZf9tsit9S4IVTittAFPcdUpK1Y8NIf2XQ/exec"; // isi dengan URL Web App Google Apps Script setelah deploy
window.ABSENSI_EMAIL_NOTIFY_TOKEN = "BIP_EMAIL_NOTIFY_TOKEN_2026";

