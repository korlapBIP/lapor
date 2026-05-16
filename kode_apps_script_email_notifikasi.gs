/*
  GOOGLE APPS SCRIPT - EMAIL NOTIFIKASI ADMIN ABSENSI BIP
  Dipakai untuk aplikasi PWA tanpa Flask/backend.

  Cara pakai singkat:
  1. Buka https://script.google.com/ dengan akun Gmail admin.
  2. Buat project baru.
  3. Hapus kode default, lalu paste seluruh isi file ini.
  4. Simpan project.
  5. Deploy > New deployment > Web app.
  6. Execute as: Me.
  7. Who has access: Anyone.
  8. Authorize.
  9. Copy Web App URL.
  10. Masukkan URL itu ke firebase-config.js pada:
      window.ABSENSI_EMAIL_NOTIFY_WEBAPP_URL = "PASTE_URL_DI_SINI";
*/

const ADMIN_EMAIL_TO = 'naafi.aoa@gmail.com';
const SECRET_TOKEN = 'BIP_EMAIL_NOTIFY_TOKEN_2026';

function doPost(e) {
  try {
    const raw = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
    const data = JSON.parse(raw);

    if (String(data.token || '') !== SECRET_TOKEN) {
      return jsonResponse({ ok: false, error: 'TOKEN_TIDAK_VALID' });
    }

    const to = String(data.to || ADMIN_EMAIL_TO || '').trim();
    if (!to) {
      return jsonResponse({ ok: false, error: 'EMAIL_TUJUAN_KOSONG' });
    }

    const subject = String(data.subject || '[Absensi BIP] Koordinator klik Simpan').slice(0, 180);
    const body = buildEmailBody(data);

    MailApp.sendEmail({
      to: to,
      subject: subject,
      body: body,
      name: 'Absensi BIP'
    });

    return jsonResponse({ ok: true, sentTo: to, remainingQuota: MailApp.getRemainingDailyQuota() });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

function doGet() {
  return jsonResponse({
    ok: true,
    service: 'Email Notifikasi Admin Absensi BIP',
    remainingQuota: MailApp.getRemainingDailyQuota()
  });
}

function buildEmailBody(data) {
  const counts = data.counts || {};
  const lines = [
    'Notifikasi Simpan Absensi BIP',
    '',
    'Koordinator : ' + safeValue(data.coordinatorName),
    'NIP         : ' + safeValue(data.coordinatorNip),
    'Role        : ' + safeValue(data.coordinatorRole),
    'Kegiatan    : ' + safeValue(data.unitName),
    'Tanggal     : ' + safeValue(data.reportDate),
    'Status      : ' + safeValue(data.onlineStatus),
    'Waktu Simpan: ' + safeValue(data.savedAtLocal),
    '',
    'Ringkasan:',
    'Shift 1     : ' + Number(counts.shift1 || 0),
    'Shift 2     : ' + Number(counts.shift2 || 0),
    'Shift 3     : ' + Number(counts.shift3 || 0),
    'Total       : ' + Number(counts.total || data.workerTotal || 0) + ' pekerja',
    '',
    'Dokumen:',
    'Unit Key    : ' + safeValue(data.unitKey),
    'Doc ID      : ' + safeValue(data.attendanceDocId),
    '',
    'Catatan:',
    'Email ini dikirim otomatis setiap koordinator menekan tombol Simpan di aplikasi PWA Absensi BIP.'
  ];
  return lines.join('\n');
}

function safeValue(value) {
  const text = String(value === undefined || value === null ? '-' : value);
  return text.length > 500 ? text.slice(0, 500) + '...' : text;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
