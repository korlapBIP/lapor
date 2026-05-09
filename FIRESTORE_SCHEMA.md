# FIRESTORE_SCHEMA - update_absensi_BIP v70

Dokumen ini menjelaskan struktur Firestore yang dipakai aplikasi Absensi BIP. Mulai v64 dan diperkuat sampai v70, Firestore diposisikan sebagai sumber data utama untuk data akun dan data operasional. `localStorage` hanya dipertahankan sebagai cache/fallback offline untuk modul tertentu.

## Prinsip utama

1. Jangan menghapus collection lama tanpa migrasi dan backup.
2. Gunakan document ID stabil agar data tidak dobel.
3. Simpan `updatedAt`/`createdAt` memakai `serverTimestamp()` jika data ditulis melalui aplikasi.
4. Simpan juga `updatedAtLocal`/`createdAtLocal` sebagai cadangan waktu dari device.
5. Untuk data penting, isi `updatedBy` atau `actor` agar perubahan bisa diaudit.

## Collection: coordinators

Menyimpan akun admin dan koordinator.

Document ID disarankan sama dengan `username`.

Field utama:

- `username`: string
- `nip`: string
- `name`: string
- `password`: string
- `role`: `admin`, `koordinator`, `payroll`, atau `viewer`
- `unit`: nama unit/bagian
- `active`: boolean
- `updatedAt`: timestamp
- `updatedAtLocal`: string ISO datetime
- `updatedBy`: object admin/operator yang mengubah

Contoh document ID:

```text
coordinators/admin
coordinators/breeder
coordinators/bb_pagi
```

## Collection: active_sessions

Menyimpan session aktif terakhir per username.

Document ID: `username`.

Field utama:

- `username`
- `nip`
- `name`
- `role`
- `unit`
- `active`
- `loginAt`
- `loginAtLocal`
- `updatedAt`

## Collection: app_data

Menyimpan master pekerja per unit/bagian.

Document ID: `unitKey`.

Contoh document ID:

```text
app_data/muatan_breeder
app_data/bongkaran_bahan_baku_pagi
app_data/silo
app_data/overzak
app_data/muatan_commercial
app_data/stapel_tf
app_data/malleti_tf
```

Field utama:

- `company`
- `reportDate`
- `workers`: array pekerja
- `allowEmptyWorkers`: boolean
- `updatedAt`
- `updatedAtLocal`
- `updatedBy`

Struktur item `workers`:

- `no`
- `nip`
- `name`
- `status`: `PKWT` atau `Freelance`
- `regu`: khusus Muatan Commercial
- `s1`, `s2`, `s3`: boolean cache UI
- `checkIn`, `checkOut`: string bila relevan

## Collection: attendance

Menyimpan hasil absensi per unit/tanggal. Mulai v65, penulisan absensi memakai **document ID stabil** agar submit ulang, retry pending offline, atau klik simpan berulang tidak membuat dokumen dobel.

Format document ID aktif:

```text
{unitKey}_{date}
{unitKey}_{scheduleKey}_{date}
```

Catatan kompatibilitas: format lama yang sudah memakai pola di atas tetap dibaca. Fungsi load dan delete dibuat kompatibel dengan format lama/stabil sehingga data versi sebelumnya tidak hilang.

Field utama:

- `id`: sama dengan document ID
- `attendanceDocId`: ID stabil yang dipakai Firestore
- `dedupeKey`: key deduplikasi dokumen, sama dengan `attendanceDocId`
- `docIdVersion`: `2` mulai v65
- `unitKey`
- `unit` / `unitName`
- `reportDate`
- `workers`: array pekerja hasil deduplikasi
- `shift1`, `shift2`, `shift3`: array pekerja per shift hasil dari `workers`
- `counts`: jumlah shift dan total setelah deduplikasi
- `inputBy`
- `saveVersion`: `5` mulai v65
- `savedAt`
- `savedAtLocal`

Struktur item `workers` mulai v65:

- `rowId`: ID stabil baris absensi
- `nip`
- `name`
- `s1`, `s2`, `s3`
- `type`
- `kegiatan`
- `activityKey`, `activityLabel`
- `loadingDock`, `regu`
- `checkIn`, `checkOut`
- `sourceUnitKey`, `sourceUnitName`

Deduplikasi baris menggunakan kombinasi stabil:

```text
sourceUnitKey + nip + activity/kegiatan + loadingDock + regu
```

Tujuannya mencegah baris identik dobel tanpa menghapus kemungkinan penugasan yang memang berbeda dock/regu/kegiatan.

## Collection: master_data

Menyimpan data setting dan data operasional ringan yang bukan absensi utama.

Document ID yang dipakai aplikasi:

```text
master_data/report_settings_global
master_data/report_settings_{unitKey}
master_data/admin_attendance_options
master_data/global_check_times_{YYYY-MM-DD}
master_data/commercial_draft_{YYYY-MM-DD}
master_data/overzak_draft_{YYYY-MM-DD}
master_data/loading_docks_commercial
```

### report_settings_global / report_settings_{unitKey}

Field:

- `settings`: object format laporan
- `updatedAt`
- `updatedAtLocal`
- `updatedBy`

### admin_attendance_options

Field:

- `autoShift3`: boolean
- `showDuration`: boolean
- `updatedAt`
- `updatedAtLocal`
- `updatedBy`

### global_check_times_{YYYY-MM-DD}

Field:

- data map NIP ke jam masuk/keluar
- `updatedAt`
- `updatedAtLocal`
- `updatedBy`

### commercial_draft_{YYYY-MM-DD}

Field:

- `reportDate`
- `rows`
- `activities`
- `updatedAt`
- `updatedAtLocal`
- `updatedBy`

### overzak_draft_{YYYY-MM-DD}

Field:

- `reportDate`
- `rows`
- `updatedAt`
- `updatedAtLocal`
- `updatedBy`

## Collection: audit_logs

Ditambahkan pada v64 dan dilanjutkan di v65/v66. Menyimpan jejak aktivitas penting admin/koordinator.

Document ID otomatis dari Firestore `addDoc()`.

Field utama:

- `action`: jenis aktivitas, contoh `login_success`, `logout`, `save_attendance`, `admin_activity`
- `module`: modul, contoh `auth`, `attendance`, `admin`, `account`, `worker`, `report`
- `message`: ringkasan aktivitas
- `actor`: object user yang melakukan aksi
- `target`: object target bila ada
- `before`: data sebelum perubahan bila tersedia
- `after`: data setelah perubahan bila tersedia
- `details`: detail tambahan
- `status`: `success`, `failed`, atau status lain
- `appVersion`: versi aplikasi, contoh `v67`
- `createdAt`: timestamp server
- `createdAtLocal`: string ISO datetime device
- `userAgent`: informasi browser/device ringkas

Contoh `actor`:

```json
{
  "username": "admin",
  "nip": "9999",
  "name": "Admin Absensi BIP",
  "role": "admin",
  "unit": "Admin"
}
```

Aktivitas yang dicatat mulai v64/v65/v66:

- login berhasil via Firestore
- login berhasil via cache offline
- logout
- simpan absensi
- aktivitas admin yang sudah masuk panel log, termasuk simpan akun, import pekerja, hapus pekerja, hapus absensi, import/hapus global check in/out, dan simpan format laporan

## Catatan keamanan

- Password saat ini masih mengikuti pola aplikasi lama. Untuk pengembangan berikutnya, disarankan migrasi ke autentikasi yang lebih aman atau hashing password.
- Firestore Rules perlu disesuaikan agar:
  - admin bisa membaca/menulis semua data yang diperlukan;
  - koordinator hanya bisa menulis unitnya sendiri;
  - `audit_logs` tidak bisa diedit/dihapus oleh user biasa;
  - data payroll/absensi tidak bisa diakses publik.

## Rekomendasi update berikutnya

1. Halaman admin untuk melihat `audit_logs` dengan filter tanggal, user, dan modul.
2. Penguatan role permission berbasis Firestore Rules dan validasi aplikasi.
4. Riwayat import check in/check out dan backup/export database.

---

# Catatan tambahan v66 - Status Sync / Pending Data

Pada v66 aplikasi menambahkan halaman admin **Status Sync / Pending Data**. Fitur ini tidak menambah collection baru, tetapi memperjelas alur sinkronisasi offline/online.

## Alur pending attendance

Jika koordinator menyimpan absensi saat Firestore gagal/offline:

1. Aplikasi tetap membuat payload absensi dengan `attendanceDocId` stabil.
2. Payload disimpan sementara di `localStorage` key:

```text
absensi_muatan_breeder_pending_attendance_v1
```

3. Saat Firebase kembali online, halaman Status Sync atau proses otomatis akan mengirim ulang payload ke collection:

```text
attendance/{attendanceDocId}
```

Karena document ID stabil sudah diterapkan sejak v65, proses sync ulang tidak membuat data dobel. Data akan memperbarui dokumen yang sama.

## Field tambahan pada pending lokal

Data pending lokal dapat memiliki field tambahan berikut:

- `queuedAtLocal`: waktu data masuk antrean offline.
- `lastSyncStatus`: status proses sync terakhir, misalnya `pending` atau `failed`.
- `lastSyncAtLocal`: waktu percobaan sync terakhir.
- `lastSyncError`: pesan error ringkas jika sync gagal.

Field ini hanya dipakai untuk monitoring UI lokal dan tidak wajib menjadi field permanen di Firestore.

## Audit log sync

Saat admin memproses sync pending, aplikasi menulis audit log dengan:

```text
action: sync_pending_attendance
module: sync
```

Jika admin menghapus antrean pending lokal dari browser, aplikasi menulis audit log dengan:

```text
action: delete_pending_local
module: sync
```

Catatan: hapus pending lokal tidak menghapus data utama di Firestore. Fitur ini hanya membersihkan antrean lokal di browser/admin device tersebut.

## Rekomendasi lanjutan setelah v67

1. Tambahkan halaman pembaca `audit_logs` dengan filter tanggal/user/modul.
2. Tambahkan role permission yang lebih ketat untuk admin, koordinator, viewer, dan payroll.
3. Tambahkan riwayat import check in/check out.
4. Tambahkan backup/export database.

---

## Update v67 - Role Permission Lebih Ketat

Versi v67 menambahkan standar role akun pada collection `coordinators` dan guard akses di aplikasi. Field `role` sekarang dinormalisasi menjadi salah satu dari:

- `admin`: akses penuh panel admin, setting akun, import, hapus data, loading dock, sync pending, edit cek in/out, laporan.
- `koordinator`: akses input absensi dan kelola pekerja hanya untuk unit/bagian akun tersebut. Tidak memiliki akses panel admin.
- `payroll`: akses baca/cetak laporan tanpa izin mengubah input absensi, pekerja, import, hapus data, atau setting admin.
- `viewer`: akses baca laporan saja. Tidak bisa menyimpan absensi, share, print, mengubah pekerja, import, hapus data, atau membuka panel admin.

Catatan penting: guard v67 berada di sisi aplikasi client dan membantu mencegah salah klik/akses menu dari UI. Untuk keamanan produksi yang lebih kuat, Firestore Security Rules tetap harus disesuaikan supaya role yang sama juga ditegakkan di server Firestore.

Contoh dokumen akun:

```json
{
  "username": "payroll",
  "nip": "payroll",
  "name": "User Payroll",
  "password": "******",
  "role": "payroll",
  "unit": "Muatan Breeder",
  "active": true
}
```

## Update v68 - Riwayat import Cek In/Out

Collection baru:

```text
attendance_imports/{auto_id}
```

Dipakai untuk menyimpan histori import data mesin absensi/global Cek In-Out. Data utama Cek In/Out tetap berada di:

```text
master_data/global_check_times_YYYY-MM-DD
```

Field penting `attendance_imports`:

```text
type: "global_check_times"
action: "import" | "clear"
fileName: nama file sumber import
fileSize: ukuran file
fileType: MIME/type file jika tersedia
fallbackDate: tanggal default dari form admin
dates: daftar tanggal yang terdeteksi dari file
dateCounts: jumlah NIP unik per tanggal
importedRows: jumlah baris valid terbaca
skippedRows: jumlah baris dilewati karena NIP/jam kosong
duplicateRows: jumlah baris yang menimpa NIP sama pada tanggal sama
totalRows: total baris yang dibaca dari file
appliedRows: jumlah pekerja yang langsung cocok dengan laporan aktif
status: success / failed / cleared
errorMessage: pesan error bila import gagal
importedBy: user admin yang menjalankan proses
importedAt: server timestamp
importedAtLocal: waktu lokal browser
appVersion: versi aplikasi
```

Catatan:

- Riwayat import tidak mengubah data absensi tersimpan; riwayat hanya mencatat proses import/hapus global Cek In/Out.
- Jika Firestore gagal saat menyimpan riwayat, aplikasi menyimpan cache riwayat lokal sementara agar admin tetap dapat melihat status proses dari browser tersebut.
- Baris dobel dihitung bila file memiliki NIP yang sama pada tanggal yang sama. Data terakhir tetap dipakai sebagai nilai final, supaya tidak membuat data jam ganda.


---

## Update v69 - Backup / Export Database

Versi v69 menambahkan menu admin **Backup / Export Database** untuk membuat arsip data aplikasi dari Firestore.

Collection baru:

```text
backup_exports/{auto_id}
```

Dipakai untuk menyimpan riwayat proses export/backup database yang dilakukan admin. Riwayat ini tidak menyimpan file backup penuh, hanya metadata export supaya aktivitas backup bisa diaudit.

Field penting `backup_exports`:

```text
type: "database_backup"
status: "success" | "failed"
format: "json" | "xlsx"
fileName: nama file backup yang dibuat di browser admin
collectionCounts: jumlah dokumen per collection yang ikut diexport
filter: filter tanggal absensi dan opsi audit log saat export
exportedBy: user admin yang menjalankan export
exportedAt: server timestamp
exportedAtLocal: waktu lokal browser
appVersion: versi aplikasi
```

Data yang diexport dari Firestore:

```text
coordinators
active_sessions
app_data
attendance
master_data
attendance_imports
audit_logs terbaru, sesuai limit export
backup_exports
```

Catatan keamanan dan operasional:

- Export JSON adalah backup teknis yang paling lengkap untuk arsip/recovery manual.
- Export Excel dibuat untuk pemeriksaan manual dan ringkasan data. Field yang kompleks disimpan sebagai JSON string di cell Excel.
- Filter tanggal hanya membatasi collection `attendance` berdasarkan `reportDate`/tanggal dokumen. Collection master data dan setting tetap ikut diexport agar backup tetap lengkap.
- Jika Firestore offline, aplikasi hanya bisa membuat backup dari cache lokal browser tersebut. Backup lokal tidak boleh dianggap sebagai backup utama database.
- Karena collection `coordinators` dapat berisi password aplikasi, file backup harus disimpan di tempat aman dan tidak dibagikan ke pihak yang tidak berwenang.


## Update v70 - Optimasi performa laporan Firestore

Perubahan v70 berfokus pada efisiensi baca data laporan tanpa mengubah struktur utama data:

1. **Cache memori halaman laporan admin**
   - Data `attendance` yang sudah dibuka pada kombinasi `unitKey + reportDate` disimpan sementara di memori browser.
   - Tombol **Tampilkan** memakai cache memori bila data yang sama sudah dimuat.
   - Tombol **Refresh** memaksa baca ulang ke Firestore agar admin tetap bisa mengambil data terbaru.

2. **Batch read untuk laporan gabungan Bahan Baku**
   - Laporan gabungan Bahan Baku Pagi/Malam/Overzak sekarang membaca beberapa dokumen attendance dalam satu batch query bila Firestore tersedia.
   - Jika batch query gagal, aplikasi otomatis fallback ke pembacaan satuan dan cache lokal.

3. **Export attendance lebih hemat**
   - Backup/export dengan filter tanggal membaca collection `attendance` menggunakan range `reportDate`, bukan mengambil semua dokumen lalu memfilter di browser.
   - Jika tidak ada filter tanggal, export tetap dibatasi agar tidak menarik data berlebihan.

4. **Aturan operasional**
   - Gunakan tombol **Refresh** jika ingin memastikan data laporan benar-benar terbaru dari Firestore.
   - Cache memori hanya aktif selama halaman aplikasi terbuka dan akan hilang saat reload browser.
