<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
  <title>Absensi Koordinator BIP</title>
  <meta name="theme-color" content="#2558d9">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="Lapor Absensi">
  <meta name="description" content="Aplikasi PWA Absensi Koordinator BIP untuk koordinator dan admin melalui HP atau tablet.">
  <link rel="manifest" href="manifest.json">
  <link rel="apple-touch-icon" href="icons/icon-192.png">
  <style>
    :root{
      --bg:#eef3f9;--panel:#ffffff;--ink:#172033;--muted:#65758b;--line:#d9e3f1;--line-strong:#bdcbe0;
      --primary:#2558d9;--primary-2:#163f9f;--success:#15803d;--danger:#c0392b;--warning:#d97706;
      --shadow:0 18px 45px rgba(20,38,72,.11);--radius:24px;
      --worker-bg:#f2f8ff;--worker-accent:#2558d9;--data-bg:#f3fbf6;--data-accent:#15803d;--report-bg:#fff8ed;--report-accent:#d97706;
    }
    *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
    html,body{margin:0;padding:0;font-family:Inter,Segoe UI,Roboto,Arial,sans-serif;background:radial-gradient(circle at top left,#dfeaff 0,#f6f9fd 340px,var(--bg) 100%);color:var(--ink)}
    body{padding:14px 10px 92px}button,input,select{font:inherit}button{border:0;cursor:pointer}.wrap{max-width:1180px;margin:0 auto}
    .app-splash{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at top left,#d5e4ff 0,#edf4ff 28%,#f5f8fe 62%,#e8f0ff 100%);z-index:9999;transition:opacity .45s ease,visibility .45s ease;overflow:hidden}.app-splash.hide{opacity:0;visibility:hidden}.app-splash-orb{position:absolute;border-radius:50%;filter:blur(8px);opacity:.72;animation:floatOrb 7s ease-in-out infinite}.app-splash-orb.a{width:220px;height:220px;left:-50px;top:-40px;background:rgba(37,88,217,.18)}.app-splash-orb.b{width:190px;height:190px;right:-35px;top:90px;background:rgba(16,185,129,.12);animation-delay:-2s}.app-splash-orb.c{width:160px;height:160px;right:12%;bottom:-40px;background:rgba(245,158,11,.12);animation-delay:-4s}.app-splash-card{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:15px;min-width:min(90vw,390px);padding:34px 28px 28px;border-radius:34px;background:linear-gradient(180deg,rgba(255,255,255,.96),rgba(255,255,255,.9));border:1px solid rgba(188,202,221,.75);box-shadow:0 28px 68px rgba(20,38,72,.18)}.app-splash-kicker{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;background:rgba(37,88,217,.08);color:#2558d9;font-size:12px;font-weight:900;letter-spacing:.08em;text-transform:uppercase}.app-splash-logo-shell{position:relative;width:142px;height:142px;display:flex;align-items:center;justify-content:center}.app-splash-logo-ring{position:absolute;inset:0;border-radius:40px;background:conic-gradient(from 0deg,#2558d9,#65a2ff,#7dd3fc,#2558d9);filter:drop-shadow(0 14px 22px rgba(37,88,217,.22));animation:spin 6s linear infinite}.app-splash-logo-ring::after{content:'';position:absolute;inset:10px;border-radius:34px;background:rgba(255,255,255,.98)}.app-splash-logo{position:relative;z-index:1;width:96px;height:96px;object-fit:contain;border-radius:28px;background:#fff;padding:8px;box-shadow:0 12px 22px rgba(37,88,217,.12)}.app-splash-title{font-size:27px;font-weight:900;color:#20355b;text-align:center}.app-splash-sub{max-width:310px;font-size:13px;font-weight:800;color:#64748b;text-align:center;line-height:1.65}.app-splash-progress{width:min(82%,290px);height:10px;border-radius:999px;background:#dce8ff;overflow:hidden;box-shadow:inset 0 1px 2px rgba(20,38,72,.08)}.app-splash-progress span{display:block;width:42%;height:100%;border-radius:999px;background:linear-gradient(90deg,#2558d9,#65a2ff,#8bc5ff);animation:progressMove 1.5s ease-in-out infinite}.app-splash-foot{font-size:12px;font-weight:900;color:#8292aa;letter-spacing:.12em;text-transform:uppercase;text-align:center}
    .hero{background:linear-gradient(135deg,#11285f 0%,#2558d9 58%,#65a2ff 100%);color:#fff;border-radius:30px;padding:22px 18px;box-shadow:0 22px 48px rgba(37,88,217,.25);position:relative;overflow:hidden;margin-bottom:14px}.hero:after,.hero:before{content:"";position:absolute;border-radius:50%;background:rgba(255,255,255,.09)}.hero:after{right:-45px;top:-45px;width:180px;height:180px}.hero:before{right:70px;bottom:-65px;width:150px;height:150px}.hero-brand{display:flex;align-items:center;gap:14px;position:relative;z-index:1}.hero-logo{width:64px;height:64px;border-radius:18px;background:rgba(255,255,255,.96);padding:8px;box-shadow:0 12px 28px rgba(12,28,69,.22);object-fit:contain;flex:0 0 auto}.hero small{display:block;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.74);font-weight:900}.hero h1{margin:3px 0 0;font-size:22px;font-weight:900;letter-spacing:.2px}.hero p{margin:8px 0 0;color:rgba(255,255,255,.90);font-size:13px;line-height:1.55;position:relative;z-index:1}.hero-badges{display:flex;gap:8px;flex-wrap:wrap;margin-top:14px;position:relative;z-index:1}.badge{display:inline-flex;align-items:center;justify-content:center;gap:7px;background:rgba(255,255,255,.13);border:1px solid rgba(255,255,255,.25);padding:8px 11px;border-radius:999px;font-size:12px;font-weight:900;color:inherit}.badge.light{background:#eef5ff;color:#2558d9;border-color:#d9e7ff}.badge.green{background:#e8f8ee;color:#15803d;border-color:#c5efd4}.badge.orange{background:#fff4df;color:#b45309;border-color:#f7dcaa}.app-inline-install{display:none}.app-inline-install.show{display:inline-flex}
    .tabs{position:fixed;left:0;right:0;bottom:0;z-index:50;background:rgba(255,255,255,.96);border-top:1px solid var(--line);padding:9px 12px calc(9px + env(safe-area-inset-bottom));display:grid;grid-template-columns:1fr 1fr;gap:10px;box-shadow:0 -12px 30px rgba(20,38,72,.10)}.tab-btn{height:52px;border-radius:18px;background:#f4f7fb;color:#42526c;font-weight:900;display:flex;align-items:center;justify-content:center;gap:8px;border:1px solid #e4edf8}.tab-btn.active{background:linear-gradient(135deg,var(--primary),#65a2ff);color:#fff;box-shadow:0 10px 24px rgba(37,88,217,.25);border-color:transparent}
    .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:0 0 14px}.stat{background:rgba(255,255,255,.96);border:1px solid rgba(188,202,221,.66);border-radius:22px;padding:13px;box-shadow:0 10px 26px rgba(20,38,72,.07)}.stat .label{font-size:10px;color:#71829b;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.stat .num{font-size:24px;font-weight:950;margin-top:4px;line-height:1}.stat .desc{font-size:11px;color:#728198;margin-top:3px;font-weight:750}.panel{display:none}.panel.active{display:block}
    .frame{border-radius:28px;padding:15px;border:1px solid rgba(188,202,221,.55);box-shadow:var(--shadow);position:relative;overflow:hidden;margin-bottom:14px}.frame:before{content:"";position:absolute;inset:0 0 auto 0;height:6px;background:var(--frame-accent)}.frame.worker{--frame-accent:var(--worker-accent);background:linear-gradient(135deg,#f7fbff 0%,var(--worker-bg) 100%)}.frame.data{--frame-accent:var(--data-accent);background:linear-gradient(135deg,#fbfffc 0%,var(--data-bg) 100%)}.frame.report-frame{--frame-accent:var(--report-accent);background:linear-gradient(135deg,#fffdf8 0%,var(--report-bg) 100%)}.frame-head{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;margin:8px 4px 14px}.frame-kicker{font-size:11px;text-transform:uppercase;letter-spacing:.12em;font-weight:900;color:var(--frame-accent)}.frame-head h2{margin:3px 0 5px;font-size:20px;font-weight:900}.frame-head p{margin:0;color:var(--muted);font-size:12px;line-height:1.45}.frame-number{width:42px;height:42px;border-radius:16px;background:#fff;display:flex;align-items:center;justify-content:center;color:var(--frame-accent);font-weight:900;box-shadow:0 10px 24px rgba(20,38,72,.09);border:1px solid rgba(188,202,221,.55)}
    .card{background:var(--panel);border:1px solid rgba(188,202,221,.66);border-radius:22px;box-shadow:0 10px 26px rgba(20,38,72,.08);overflow:hidden;margin-bottom:12px}.card-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 15px;border-bottom:1px solid var(--line);background:linear-gradient(180deg,#fff,#f9fbfe)}.card-head h3{margin:0;font-size:16px;font-weight:900}.card-head span{font-size:12px;color:var(--muted);font-weight:800}.card-body{padding:15px}.grid-form{display:grid;grid-template-columns:88px 1fr;gap:10px}.field label{display:block;color:#3d4f68;font-size:12px;font-weight:900;margin-bottom:6px}input,select{width:100%;min-height:48px;border:1px solid #d5e0ee;border-radius:16px;background:#fff;padding:10px 12px;color:var(--ink);outline:none}input:focus,select:focus{border-color:var(--primary);box-shadow:0 0 0 4px rgba(37,88,217,.12)}.span-2{grid-column:span 2}.actions{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:12px}.btn{min-height:48px;border-radius:16px;font-weight:950;padding:10px 12px;display:inline-flex;align-items:center;justify-content:center;gap:8px;text-align:center}.primary{background:linear-gradient(135deg,var(--primary),#65a2ff);color:#fff}.success{background:#e8f8ee;color:#15803d}.warning{background:#fff4df;color:#b45309}.danger{background:#ffe8e4;color:#b42318}.secondary{background:#f4f7fb;color:#42526c;border:1px solid #e4edf8}.dark{background:#172033;color:#fff}.full{grid-column:1/-1}.note{margin-top:12px;background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;padding:10px 12px;border-radius:16px;font-size:12px;line-height:1.45;font-weight:750}
    .split-grid{display:grid;grid-template-columns:1fr;gap:12px}.type-box{border:1px solid #dfe8f5;background:#f8fbff;border-radius:20px;padding:12px}.type-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:9px}.type-title strong{font-size:13px}.type-title span{font-size:11px;font-weight:900;color:#687892}.search-row{display:grid;grid-template-columns:1fr;gap:10px;align-items:center}.schedule-bar{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:end;margin-bottom:10px}.worker-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px}.worker-card{border:1px solid var(--line);border-radius:22px;background:#fff;padding:14px;box-shadow:0 8px 20px rgba(15,23,42,.04)}.worker-card.pkwt{background:linear-gradient(135deg,#eef7ff,#ffffff);border-color:#b9dcff}.worker-card.freelance{background:linear-gradient(135deg,#fff7e8,#ffffff);border-color:#f4d39c}.worker-top{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:10px;margin-bottom:12px}.worker-nip{font-size:12px;color:#516179;font-weight:950;background:rgba(255,255,255,.68);border:1px solid rgba(188,202,221,.55);border-radius:999px;padding:7px 9px;white-space:nowrap}.worker-name{font-weight:950;font-size:19px;line-height:1.15;text-align:center}.worker-status{font-size:11px;font-weight:950;border-radius:999px;padding:7px 9px;white-space:nowrap}.worker-card.pkwt .worker-status{background:#dff0ff;color:#1d4ed8}.worker-card.freelance .worker-status{background:#fff0d3;color:#b45309}.shift-row{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}.shift-toggle{position:relative;display:flex;align-items:center;gap:8px;justify-content:space-between;min-height:52px;border-radius:17px;border:1px solid #e5e7eb;background:#f9fafb;padding:9px 10px;font-weight:950;font-size:13px;user-select:none}.shift-toggle input{position:absolute;opacity:0;pointer-events:none}.shift-toggle.shift-disabled{opacity:.55;background:#f1f5f9!important;border-color:#cbd5e1!important;color:#64748b!important;cursor:not-allowed}.shift-toggle.shift-disabled .checkmark{background:#e2e8f0!important;border-color:#cbd5e1!important;color:#e2e8f0!important}.checkmark{width:27px;height:27px;border-radius:10px;border:2px solid #cbd5e1;display:grid;place-items:center;color:#fff;font-weight:950;background:#fff}.shift-toggle.s1 input:checked + .checkmark{background:#2563eb;border-color:#2563eb}.shift-toggle.s1:has(input:checked){background:#eaf2ff;border-color:#a9c8ff;color:#1e3a8a}.shift-toggle.s2 input:checked + .checkmark{background:#ea580c;border-color:#ea580c}.shift-toggle.s2:has(input:checked){background:#fff1e8;border-color:#fdba74;color:#9a3412}.shift-toggle.s3 input:checked + .checkmark{background:#16a34a;border-color:#16a34a}.shift-toggle.s3:has(input:checked){background:#ecfdf5;border-color:#86efac;color:#166534}.empty{padding:18px;text-align:center;color:var(--muted);border:1px dashed #cbd5e1;border-radius:20px;background:#f8fafc;font-size:13px;font-weight:800}.schedule-safety-status{margin-top:10px;border:1px solid #dbeafe;background:#eff6ff;color:#1e3a8a;border-radius:18px;padding:10px 12px;font-size:12px;font-weight:900;line-height:1.35}.schedule-safety-status.warn{border-color:#fed7aa;background:#fff7ed;color:#9a3412}.schedule-safety-status.locked{border-color:#bbf7d0;background:#f0fdf4;color:#166534}.schedule-safety-status .small{display:block;margin-top:3px;font-weight:800;color:#64748b}.schedule-safety-status .status-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:9px}.schedule-edit-note{margin-top:8px;padding:8px 10px;border-radius:14px;background:rgba(255,255,255,.7);font-weight:900}.schedule-locked-mask{position:relative}.schedule-locked-mask:after{content:"Jadwal terkunci. Klik Edit Jadwal Tanggal Ini untuk mengubah.";display:block;margin-top:8px;font-size:12px;font-weight:900;color:#9a3412}.schedule-history-panel{margin-top:12px;border:1px solid #e5e7eb;background:#fff;border-radius:20px;padding:12px;box-shadow:0 8px 20px rgba(15,23,42,.04)}.schedule-history-head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:8px}.schedule-history-head strong{font-size:13px}.schedule-history-head span{display:block;margin-top:3px;font-size:11px;font-weight:850;color:#64748b}.schedule-history-list{display:grid;grid-template-columns:1fr;gap:8px}.schedule-history-item{border:1px solid #edf2f7;background:#f8fafc;border-radius:16px;padding:10px;font-size:12px;font-weight:850}.schedule-history-item .meta{color:#475569;line-height:1.35}.schedule-history-item .changes{margin-top:6px;color:#0f172a;font-weight:900}.schedule-history-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}.schedule-history-empty{border:1px dashed #cbd5e1;background:#f8fafc;border-radius:16px;padding:12px;color:#64748b;font-size:12px;font-weight:900;text-align:center}.btn:disabled{opacity:.55;cursor:not-allowed}
    .control-report{display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center;padding:14px;border-radius:24px;background:linear-gradient(135deg,#ffffff,#fff7e8);border:1px solid #f3d6a2;box-shadow:0 14px 30px rgba(217,119,6,.10);margin-bottom:12px}.control-info{display:flex;align-items:center;gap:12px}.control-icon{width:48px;height:48px;border-radius:18px;background:#fff4df;display:grid;place-items:center;font-size:22px}.control-info h3{margin:0;font-size:16px;font-weight:950}.control-info p{margin:4px 0 0;color:#7c5a23;font-size:12px;font-weight:850}.control-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px}.attendance-list{display:grid;grid-template-columns:1fr;gap:12px}.shift-section{background:#fff;border:1px solid rgba(188,202,221,.75);border-radius:24px;box-shadow:0 10px 24px rgba(15,23,42,.06);overflow:hidden}.shift-section-head{display:flex;align-items:center;justify-content:space-between;padding:14px 15px;font-weight:950}.shift-section.s1 .shift-section-head{background:#eaf2ff;color:#1e3a8a}.shift-section.s2 .shift-section-head{background:#fff1e8;color:#9a3412}.shift-section.s3 .shift-section-head{background:#ecfdf5;color:#166534}.shift-count{font-size:12px;border-radius:999px;background:rgba(255,255,255,.75);padding:6px 10px}.shift-table{width:100%;border-collapse:separate;border-spacing:0}.shift-table th{font-size:11px;color:#64748b;text-align:left;background:#f8fafc;padding:9px 10px}.shift-table td{padding:10px;border-top:1px solid #edf2f7;font-weight:850}.shift-table td:first-child,.shift-table th:first-child{text-align:center;width:54px}.shift-table td:nth-child(2),.shift-table th:nth-child(2){width:82px}.print-sheet{background:#fff;border-radius:18px;overflow:visible;width:100%;max-width:920px;margin:0 auto}.print-title{text-align:center;line-height:1.2;padding:12px 6px 8px}.print-title .main{font-weight:900;text-transform:uppercase}.print-title .company,.print-title .date{text-transform:uppercase;font-size:13px}.table-wrap{width:100%;overflow:auto;display:flex;justify-content:center}.report-table{width:100%;max-width:820px;margin:0 auto;border-collapse:collapse;font-size:12px;table-layout:fixed}.report-table th,.report-table td{border:1px solid #111;padding:5px 6px;text-align:center;white-space:normal;word-break:break-word}.report-table th{background:#f3f4f6}.report-table td.name{text-align:left;min-width:0;width:40%}.report-table th:nth-child(1),.report-table td:nth-child(1){width:46px}.report-table th:nth-child(2),.report-table td:nth-child(2){width:68px}.report-table th:nth-child(4),.report-table td:nth-child(4),.report-table th:nth-child(5),.report-table td:nth-child(5){width:72px}.report-table th:nth-child(6),.report-table td:nth-child(6),.report-table th:nth-child(7),.report-table td:nth-child(7){width:104px}.tick{color:var(--success);font-weight:950;font-size:17px}.summary-table{width:330px;max-width:100%;margin:10px auto 8px;border-collapse:collapse;font-size:12px}.summary-table td,.summary-table th{border:1px solid #111;padding:5px;text-align:center}.summary-table .left-label{font-weight:950}.summary-table .total{font-weight:950;font-size:14px}.check-input{min-height:34px;border-radius:10px;padding:5px 7px;font-size:12px;text-align:center}.check-source{font-size:11px;font-weight:900;color:#64748b}.report-footer{max-width:820px;margin:12px auto 8px;font-size:12px}.signature-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;text-align:center;margin:12px 0 8px}.signature-title{font-weight:950;min-height:22px}.signature-line{border-bottom:1px solid #111;margin:28px auto 0;width:80%}.editable-report{display:inline-block;min-width:60px;padding:2px 4px;border-radius:6px}.auth-admin .editable-report{outline:1px dashed #cbd5e1;background:#f8fafc}.note-area{margin-top:6px}.note-title{font-weight:950;margin-bottom:4px}.worktime-table{border-collapse:collapse;width:300px;max-width:100%;font-size:10px;margin-top:4px}.worktime-table th,.worktime-table td{border:1px solid #111;padding:5px;text-align:center}.worktime-table td.editable-report{display:table-cell;min-width:0;padding:5px;border-radius:0}.worktime-table .worktime-main .editable-report{display:inline;min-width:0;padding:0;border-radius:0}.auth-admin .worktime-table td.editable-report{outline:0;background:#fff}.auth-admin .worktime-table .worktime-main .editable-report{outline:1px dashed #cbd5e1;background:#f8fafc}.worktime-table .worktime-main{font-weight:950;text-transform:uppercase}.bottom-print-actions{display:flex;justify-content:center;margin:14px 0 4px}.note-save-row{display:flex;justify-content:flex-start;margin-top:8px}body:not(.auth-admin) .report-footer,body:not(.auth-admin) .bottom-print-actions{display:none!important}.desktop-print-preview{display:none}.report-preview{display:block;margin:12px auto 0}.schedule-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}.inside-stats{margin:12px 0 0}
    .install-sheet{position:fixed;left:50%;bottom:82px;transform:translateX(-50%) translateY(18px);width:min(94vw,460px);z-index:80;opacity:0;pointer-events:none;transition:.28s ease}.install-sheet.show{opacity:1;transform:translateX(-50%) translateY(0);pointer-events:auto}.install-sheet-card{position:relative;background:linear-gradient(180deg,rgba(255,255,255,.98),rgba(247,250,255,.98));border:1px solid rgba(188,202,221,.8);box-shadow:0 22px 48px rgba(20,38,72,.16);border-radius:24px;padding:18px 18px 16px}.install-sheet-top{display:flex;gap:14px;align-items:center}.install-sheet-logo{width:56px;height:56px;object-fit:contain;border-radius:18px;background:#fff;padding:6px;box-shadow:0 10px 18px rgba(37,88,217,.12);flex:0 0 auto}.install-sheet-text small{display:block;font-size:11px;font-weight:900;letter-spacing:.14em;text-transform:uppercase;color:#2558d9;margin-bottom:4px}.install-sheet-text strong{display:block;font-size:18px;line-height:1.2;color:#20355b}.install-sheet-text p{margin:6px 0 0;color:#64748b;font-size:12px;line-height:1.55;font-weight:700}.install-sheet-actions{display:flex;gap:10px;margin-top:13px}.install-sheet-actions .btn{flex:1}.install-sheet-close{position:absolute;right:14px;top:14px;width:32px;height:32px;border-radius:12px;border:1px solid #d7e3f7;background:#fff;color:#50647f;font-weight:900;cursor:pointer}
    @keyframes spin{to{transform:rotate(360deg)}}@keyframes progressMove{0%{transform:translateX(-70%)}50%{transform:translateX(90%)}100%{transform:translateX(230%)}}@keyframes floatOrb{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-18px) scale(1.05)}}

    .login-view{min-height:calc(100vh - 30px);display:flex;align-items:center;justify-content:center;padding:18px 0 34px}.auth-ok .login-view{display:none!important}.auth-pending .wrap,.auth-pending .tabs,.auth-pending .install-sheet{display:none!important}.login-shell{width:min(100%,460px);position:relative}.login-card{border-radius:32px;background:linear-gradient(180deg,rgba(255,255,255,.98),rgba(247,250,255,.96));border:1px solid rgba(188,202,221,.72);box-shadow:0 28px 70px rgba(20,38,72,.16);overflow:hidden}.login-top{position:relative;overflow:hidden;background:linear-gradient(135deg,#11285f 0%,#2558d9 58%,#65a2ff 100%);padding:24px 20px 22px;color:#fff}.login-top:before,.login-top:after{content:"";position:absolute;border-radius:50%;background:rgba(255,255,255,.10)}.login-top:before{width:170px;height:170px;right:-48px;top:-42px}.login-top:after{width:130px;height:130px;right:54px;bottom:-68px}.login-brand{position:relative;z-index:1;display:flex;align-items:center;gap:14px}.login-logo{width:68px;height:68px;border-radius:20px;background:#fff;padding:8px;object-fit:contain;box-shadow:0 14px 28px rgba(12,28,69,.24)}.login-brand small{display:block;font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:950;color:rgba(255,255,255,.78)}.login-brand h1{margin:3px 0 0;font-size:22px;font-weight:950}.login-body{padding:18px}.login-note{margin:0 0 14px;padding:12px 13px;border-radius:18px;background:#eef5ff;border:1px solid #d9e7ff;color:#2558d9;font-size:12px;font-weight:850;line-height:1.5}.login-form{display:grid;gap:12px}.password-wrap{position:relative}.password-wrap input{padding-right:54px}.mini-btn{position:absolute;right:8px;top:50%;transform:translateY(-50%);width:42px;height:36px;border-radius:12px;background:#eef5ff;color:#2558d9;font-weight:950}.login-error{display:none;margin-top:2px;padding:11px 12px;border-radius:16px;background:#ffe8e4;color:#b42318;border:1px solid #ffc8c0;font-size:12px;font-weight:850}.login-error.show{display:block}.demo-box{margin-top:14px;border:1px dashed #bfd0ea;border-radius:20px;background:#fbfdff;padding:13px}.demo-title{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:9px;color:#20355b;font-weight:950;font-size:13px}.demo-list{display:grid;gap:8px}.demo-user{display:grid;grid-template-columns:1fr auto;gap:8px;align-items:center;background:#fff;border:1px solid #e1eaf6;border-radius:16px;padding:10px 11px}.demo-user strong{display:block;font-size:12px;color:#20355b}.demo-user span{display:block;font-size:11px;color:#65758b;font-weight:800;margin-top:2px}.demo-user code{font-family:Consolas,monospace;font-size:11px;background:#eef5ff;color:#2558d9;padding:6px 7px;border-radius:10px;font-weight:900}.user-strip{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px;padding:11px 13px;border-radius:20px;background:rgba(255,255,255,.94);border:1px solid rgba(188,202,221,.66);box-shadow:0 10px 26px rgba(20,38,72,.07)}.user-strip-left{display:flex;align-items:center;gap:10px;min-width:0}.user-avatar{width:42px;height:42px;border-radius:15px;background:linear-gradient(135deg,#2558d9,#65a2ff);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:950;box-shadow:0 10px 18px rgba(37,88,217,.18);flex:0 0 auto}.user-name{font-weight:950;color:#20355b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.user-unit{font-size:12px;color:#65758b;font-weight:850;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.logout-btn{min-height:40px;border-radius:14px;background:#ffe8e4;color:#b42318;padding:8px 12px;font-size:12px;font-weight:950;flex:0 0 auto}.hero-user{background:rgba(255,255,255,.18);border-color:rgba(255,255,255,.25)}.admin-only{display:none!important}.auth-admin .admin-only{display:block!important}.auth-admin .panel.admin-only{display:none!important}.auth-admin .panel.admin-only.active{display:block!important}.admin-import-grid{display:grid;grid-template-columns:1fr;gap:10px}.admin-import-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}.import-help{margin-top:12px;border-radius:16px;background:#eef5ff;border:1px solid #d9e7ff;color:#2558d9;padding:11px 12px;font-size:12px;font-weight:800;line-height:1.55}.import-file-name{margin-top:8px;color:#64748b;font-size:12px;font-weight:800}.machine-preview-box{margin-top:12px;border:1px solid #dfe8f5;background:#fff;border-radius:18px;overflow:hidden}.machine-preview-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 12px;background:#f8fafc;border-bottom:1px solid #e5edf7;font-size:12px;font-weight:950;color:#20355b}.machine-preview-table-wrap{width:100%;overflow:auto}.machine-preview-table{width:100%;border-collapse:collapse;font-size:12px;min-width:900px}.machine-preview-table th,.machine-preview-table td{border:1px solid #e5edf7;padding:7px 8px;text-align:left;white-space:nowrap}.machine-preview-table th{background:#eef5ff;color:#2558d9;font-weight:950}.machine-status{display:inline-block;border-radius:999px;padding:4px 8px;font-size:11px;font-weight:950}.machine-status.ok{background:#dcfce7;color:#166534}.machine-status.warn{background:#fff7ed;color:#9a3412}.machine-status.err{background:#fee2e2;color:#991b1b}.machine-status.muted{background:#f1f5f9;color:#475569}.auth-admin .tabs{grid-template-columns:repeat(2,1fr)}.auth-admin .tab-worker{display:none!important}.auth-admin #panelWorkers{display:none!important}.auth-admin .coordinator-only{display:none!important}.role-readonly .input-only,.role-readonly #panelWorkers,.role-readonly .tab-worker,.role-payroll .input-only,.role-payroll #panelWorkers,.role-payroll .tab-worker{display:none!important}.role-readonly [data-role-write],.role-payroll [data-role-write]{display:none!important}.permission-note{margin-top:12px;border:1px solid #f8d98b;background:#fff8df;color:#7a4b00;border-radius:16px;padding:11px 12px;font-size:12px;font-weight:850;line-height:1.5}.admin-panel-grid{display:grid;grid-template-columns:1fr;gap:12px}.admin-mini-stats{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:12px}.admin-mini{border:1px solid #dfe8f5;background:#fff;border-radius:18px;padding:12px;box-shadow:0 8px 20px rgba(20,38,72,.06)}.admin-mini .label{font-size:10px;color:#71829b;font-weight:900;text-transform:uppercase;letter-spacing:.08em}.admin-mini .value{font-size:22px;font-weight:950;margin-top:4px;color:#20355b}.admin-danger-box{border:1px solid #ffd0c8;background:#fff7f5;border-radius:20px;padding:12px}.admin-safe-box{border:1px solid #d9e7ff;background:#fbfdff;border-radius:20px;padding:12px}.admin-log{margin-top:12px;border-radius:16px;background:#0f172a;color:#e5edf8;padding:12px;font-size:12px;line-height:1.55;white-space:pre-wrap;max-height:180px;overflow:auto}.admin-actions-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}.admin-actions-row.three{grid-template-columns:1fr 1fr 1fr}.admin-checkline{display:flex;align-items:center;gap:10px;margin-top:10px;padding:12px;border:1px solid #dfe8f5;border-radius:16px;background:#fff;font-size:13px;font-weight:900;color:#20355b}.admin-checkline input{width:20px;height:20px;accent-color:#2558d9}


    .admin-admin-nav{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:9px;margin-bottom:12px}.admin-section-btn{min-height:44px;border-radius:16px;background:#f4f7fb;color:#42526c;border:1px solid #dfe8f5;font-weight:950;padding:9px 10px}.admin-section-btn.active{background:linear-gradient(135deg,var(--primary),#65a2ff);color:#fff;border-color:transparent;box-shadow:0 10px 22px rgba(37,88,217,.20)}.admin-section-card{display:none}.admin-section-card.active{display:block;grid-column:1/-1}.admin-frame-grid{display:grid;grid-template-columns:1fr;gap:12px}.admin-sub-frame{border:1px solid #dfe8f5;background:#fbfdff;border-radius:20px;padding:12px}.admin-sub-title{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:12px}.admin-sub-title small{display:inline-flex;align-items:center;justify-content:center;min-width:64px;padding:6px 9px;border-radius:999px;background:#eef5ff;color:#2558d9;font-size:10px;font-weight:950;text-transform:uppercase;letter-spacing:.08em}.admin-sub-title h4{margin:0;font-size:15px;color:#20355b;font-weight:950}.admin-worker-crud{display:grid;grid-template-columns:1fr;gap:12px;margin-top:10px}.admin-worker-form{display:grid;grid-template-columns:1fr;gap:10px}.admin-worker-tools{display:grid;grid-template-columns:1fr 1fr;gap:10px}.admin-worker-list{border:1px solid #dfe8f5;border-radius:18px;overflow:hidden;background:#fff}.admin-worker-row{display:grid;grid-template-columns:80px 1fr auto;gap:10px;align-items:center;padding:10px 12px;border-bottom:1px solid #edf2f8}.admin-worker-row:last-child{border-bottom:0}.admin-worker-row .nip{font-weight:950;color:#2558d9}.admin-worker-row .name{font-weight:900;color:#20355b}.admin-worker-row .meta{font-size:11px;color:#64748b;font-weight:800;margin-top:2px}.admin-worker-row .row-actions{display:flex;gap:6px}.admin-worker-row .row-actions button{min-height:34px;border-radius:12px;padding:7px 9px;font-size:12px}.empty-admin-list{padding:14px;text-align:center;color:#64748b;font-weight:850;font-size:12px}.admin-worker-count{font-size:12px;color:#64748b;font-weight:900;margin-top:8px}.commercial-tools{display:none;grid-template-columns:1fr;gap:10px;margin-top:10px}.commercial-tools.show{display:grid}.commercial-summary{border:1px solid #dfe8f5;border-radius:16px;background:#fbfdff;padding:10px;font-size:12px;color:#42526c;font-weight:850}.commercial-summary b{color:#20355b}.commercial-matrix{border:1px solid #dfe8f5;border-radius:18px;overflow:hidden;background:#fff}.commercial-matrix-head,.commercial-matrix-row{display:grid;grid-template-columns:1.2fr 1fr 90px 90px;gap:8px;align-items:center;padding:10px 12px;border-bottom:1px solid #edf2f8}.commercial-matrix-head{background:#f4f7fb;color:#20355b;font-weight:950;font-size:12px}.commercial-matrix-row:last-child{border-bottom:0}.commercial-matrix-row .dock-name{font-weight:950;color:#2558d9}.commercial-matrix-row .regu-name{font-weight:900;color:#20355b}.commercial-matrix-row label{display:flex;align-items:center;justify-content:center;gap:6px;font-weight:950;color:#334155}.commercial-matrix-row input[type="checkbox"]{width:18px;height:18px;accent-color:#2558d9}.commercial-regu-select{width:100%;min-height:40px;border:1px solid #dfe8f5;border-radius:12px;background:#fff;padding:8px 10px;font-weight:900;color:#20355b}.commercial-regu-select option[disabled]{color:#94a3b8}.commercial-matrix-row select:invalid{color:#64748b}@media(max-width:640px){.commercial-matrix-head,.commercial-matrix-row{grid-template-columns:54px minmax(96px,1fr) 56px 56px;gap:5px;padding:10px 7px}.commercial-matrix-head{font-size:10px}.commercial-matrix-row .dock-name{font-size:16px;line-height:1.1;white-space:normal}.commercial-regu-select{min-height:42px;border-radius:14px;padding:6px 20px 6px 6px;font-size:13px;min-width:0}.commercial-matrix-row label{font-size:16px;gap:4px}.commercial-matrix-row input[type="checkbox"]{width:20px;height:20px}}.commercial-worker-hidden-note{margin-top:10px;border:1px dashed #cbd5e1;border-radius:16px;background:#f8fafc;padding:12px;text-align:center;color:#64748b;font-weight:850;font-size:12px}.dock-row{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;padding:10px 12px;border-bottom:1px solid #edf2f8}.dock-row:last-child{border-bottom:0}.dock-row .name{font-weight:950;color:#20355b}.dock-row .meta{font-size:11px;color:#64748b;font-weight:800;margin-top:2px}.dock-list{border:1px solid #dfe8f5;border-radius:18px;overflow:hidden;background:#fff;margin-top:12px}.sync-status-box{border:1px solid #dfe8f5;border-radius:20px;background:#fbfdff;padding:12px;margin-bottom:12px}.sync-status-title{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px}.sync-status-title h4{margin:0;color:#20355b;font-size:15px;font-weight:950}.sync-chip{display:inline-flex;align-items:center;gap:6px;border-radius:999px;padding:6px 10px;font-size:11px;font-weight:950;background:#eef5ff;color:#2558d9}.sync-chip.ok{background:#dcfce7;color:#166534}.sync-chip.warn{background:#fff7ed;color:#9a3412}.sync-chip.err{background:#fee2e2;color:#991b1b}.sync-pending-list{border:1px solid #dfe8f5;border-radius:18px;background:#fff;overflow:hidden}.sync-row{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:center;padding:11px 12px;border-bottom:1px solid #edf2f8}.sync-row:last-child{border-bottom:0}.sync-row .main{font-weight:950;color:#20355b}.sync-row .meta{font-size:11px;color:#64748b;font-weight:800;margin-top:3px;line-height:1.45}.sync-row .row-actions{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}.sync-row .row-actions button{min-height:34px;border-radius:12px;padding:7px 9px;font-size:12px}.sync-cache-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px}.sync-cache-card{border:1px solid #dfe8f5;border-radius:16px;background:#fff;padding:10px}.sync-cache-card .label{font-size:11px;color:#64748b;font-weight:900}.sync-cache-card .value{font-size:20px;color:#20355b;font-weight:950;margin-top:4px}.usage-meter{margin-top:8px;height:9px;border-radius:999px;background:#eef2f7;overflow:hidden}.usage-meter-fill{height:100%;border-radius:999px;background:linear-gradient(90deg,#22c55e,#f59e0b)}.usage-detail{font-size:11px;color:#64748b;font-weight:800;margin-top:6px;line-height:1.45}.usage-table-wrap{width:100%;overflow:auto;margin-top:10px}.usage-table{width:100%;border-collapse:collapse;font-size:12px;min-width:620px}.usage-table th,.usage-table td{border:1px solid #e5edf7;padding:8px;text-align:left}.usage-table th{background:#f8fafc;color:#20355b}.usage-warn{color:#b45309;font-weight:950}.usage-ok{color:#15803d;font-weight:950}@media(max-width:640px){.sync-row{grid-template-columns:1fr}.sync-row .row-actions{justify-content:stretch}.sync-row .row-actions button{flex:1}}
    @media(min-width:900px){body{padding-bottom:26px}.admin-panel-grid{grid-template-columns:1fr 1fr}.admin-frame-grid{grid-template-columns:1fr 1fr}.admin-sub-frame .grid-form{grid-template-columns:1fr 1fr}.admin-sub-frame .span-2{grid-column:span 2}.admin-sub-frame .name-field{grid-column:auto}.tabs{position:static;display:flex;justify-content:flex-end;background:transparent;border:0;box-shadow:none;padding:0;margin-bottom:14px}.tab-btn{min-width:180px}.grid-form{grid-template-columns:90px 130px 1fr 150px}.span-2{grid-column:auto}.name-field{grid-column:span 1}.actions{grid-template-columns:repeat(4,1fr)}.split-grid{grid-template-columns:1fr 1fr}.desktop-print-preview{display:block}.mobile-only{display:none!important}.install-sheet{bottom:16px}}
    @media(max-width:540px){.inside-stats{grid-template-columns:repeat(3,1fr);margin-top:12px}body{padding-left:8px;padding-right:8px}.hero{border-radius:24px;padding:18px 14px}.hero-logo{width:56px;height:56px}.hero h1{font-size:18px}.hero p{font-size:12px}.stats{gap:8px}.stat{padding:10px;border-radius:18px}.stat .num{font-size:21px}.worker-list,.attendance-list{grid-template-columns:1fr}.frame{padding:12px;border-radius:24px}.card-body{padding:13px}.actions{grid-template-columns:1fr 1fr}.control-report{grid-template-columns:1fr}.control-actions{grid-template-columns:1fr}.schedule-bar{grid-template-columns:1fr auto}.btn{min-height:48px}.search-row{grid-template-columns:1fr}.install-sheet-actions{display:grid;grid-template-columns:1fr 1fr}.app-splash-title{font-size:24px}}

    .firebase-status{display:inline-flex;align-items:center;gap:7px;padding:8px 11px;border-radius:999px;background:rgba(255,255,255,.13);border:1px solid rgba(255,255,255,.25);font-size:12px;font-weight:900;color:#fff}
    .firebase-status.local{background:rgba(255,255,255,.12)}.firebase-status.online{background:rgba(21,128,61,.22)}.firebase-status.error{background:rgba(192,57,43,.22)}
    @page{size:215mm 330mm;margin:6mm 7mm 6mm 7mm}
    @media print{body{background:#fff;padding:0}.no-print,.hero,.tabs,.stats,.mobile-only,.install-sheet,.app-splash,.login-view,.user-strip{display:none!important}.wrap{max-width:none}.panel{display:none!important}#panelReport{display:block!important}.frame,.card{box-shadow:none;border:0;border-radius:0;margin:0;padding:0;background:#fff}.frame:before,.frame-head,.card-head{display:none}.card-body{padding:0}.desktop-print-preview{display:block!important}.print-sheet{border-radius:0;overflow:visible;width:100%;max-width:197mm;margin:0 auto;padding:0}.report-preview{margin:0 auto}.table-wrap{overflow:visible;display:block}.report-table{font-size:9px;table-layout:fixed;width:100%;max-width:100%;margin:0 auto}.report-table th,.report-table td{padding:2px 3px;line-height:1.05}.report-table th:nth-child(1),.report-table td:nth-child(1){width:24px}.report-table th:nth-child(2),.report-table td:nth-child(2){width:42px}.report-table th:nth-child(3),.report-table td:nth-child(3){width:128px}.report-table th:nth-child(4),.report-table td:nth-child(4),.report-table th:nth-child(5),.report-table td:nth-child(5){width:52px}.report-table th:nth-child(6),.report-table td:nth-child(6),.report-table th:nth-child(7),.report-table td:nth-child(7){width:58px}.report-table td.name{min-width:0;width:auto}.summary-table{width:220px;font-size:9px;margin:6px auto 4px}.summary-table td,.summary-table th{padding:2px 3px}.summary-table .total{font-size:11px}.print-title{padding:0 0 4px;line-height:1.08}.print-title .main{font-size:13px}.print-title .company,.print-title .date{font-size:9px}.report-footer{font-size:9px;margin:8px auto 0;max-width:100%}.signature-grid{margin:6px 0 6px;gap:8px}.signature-title{min-height:16px}.signature-line{margin-top:18px;width:80%}.note-area{margin-top:2px}.note-title{margin-bottom:3px}.worktime-table{width:250px;font-size:8px;margin-top:3px}.worktime-table th,.worktime-table td{padding:3px}.summary-table,.signature-grid,.note-area,.worktime-table{page-break-inside:avoid;break-inside:avoid}.check-input{border:0;padding:0;min-height:0;width:100%;font-size:9px;background:transparent}.auth-admin .editable-report{outline:0;background:transparent}.editable-report{padding:0;min-width:0}.bottom-print-actions{display:none!important}body.print-report-only *{visibility:hidden!important}body.print-report-only .print-sheet,body.print-report-only .print-sheet *{visibility:visible!important}body.print-report-only .print-sheet{position:absolute!important;left:0;top:0;width:100%!important;max-width:none!important;margin:0!important;padding:0!important}body.print-report-only .print-sheet .no-print{display:none!important;visibility:hidden!important}}

    /* UPDATE 23 - PRINT A4-SAFE + F4-READY */
    @media print{
      body.print-report-only .print-sheet{
        
        
        width:100%!important;
        max-width:none!important;
      }
      body.print-report-only .report-table{
        font-size:8px!important;
        width:100%!important;
        max-width:100%!important;
      }
      body.print-report-only .report-table th,
      body.print-report-only .report-table td{
        padding:1.6px 2.4px!important;
        line-height:1!important;
      }
      body.print-report-only .report-table th:nth-child(1),
      body.print-report-only .report-table td:nth-child(1){width:24px!important}
      body.print-report-only .report-table th:nth-child(2),
      body.print-report-only .report-table td:nth-child(2){width:42px!important}
      body.print-report-only .report-table th:nth-child(3),
      body.print-report-only .report-table td:nth-child(3){width:130px!important}
      body.print-report-only .report-table th:nth-child(4),
      body.print-report-only .report-table td:nth-child(4),
      body.print-report-only .report-table th:nth-child(5),
      body.print-report-only .report-table td:nth-child(5){width:46px!important}
      body.print-report-only .report-table th:nth-child(6),
      body.print-report-only .report-table td:nth-child(6),
      body.print-report-only .report-table th:nth-child(7),
      body.print-report-only .report-table td:nth-child(7){width:54px!important}
      body.print-report-only .tick{font-size:13px!important;line-height:1!important}
      body.print-report-only .check-input{
        font-size:8px!important;
        line-height:1!important;
        background:transparent!important;
      }
      body.print-report-only .print-title{
        padding:0 0 3px!important;
        line-height:1.02!important;
      }
      body.print-report-only .print-title .main{font-size:12px!important}
      body.print-report-only .print-title .company,
      body.print-report-only .print-title .date{font-size:8.2px!important}
      body.print-report-only .summary-table{
        width:205px!important;
        font-size:8px!important;
        margin:4px auto 3px!important;
      }
      body.print-report-only .summary-table td,
      body.print-report-only .summary-table th{
        padding:1.8px 2.4px!important;
        line-height:1!important;
      }
      body.print-report-only .summary-table .total{font-size:10px!important}
      body.print-report-only .report-footer{
        margin:4px auto 0!important;
        font-size:8.4px!important;
        max-width:100%!important;
      }
      body.print-report-only .signature-grid{
        margin:4px 0 4px!important;
        gap:8px!important;
      }
      body.print-report-only .signature-title{
        min-height:14px!important;
        line-height:1.05!important;
      }
      body.print-report-only .signature-line{
        margin-top:28px!important;
        width:76%!important;
      }
      body.print-report-only .note-area{
        margin-top:2px!important;
      }
      body.print-report-only .note-title{
        margin-bottom:2px!important;
        line-height:1!important;
      }
      body.print-report-only .worktime-table{
        width:245px!important;
        font-size:7.4px!important;
        margin-top:2px!important;
      }
      body.print-report-only .worktime-table th,
      body.print-report-only .worktime-table td{
        padding:2px 2.5px!important;
        line-height:1.02!important;
      }
      body.print-report-only .editable-report{
        outline:0!important;
        background:transparent!important;
      }
    }


    /* UPDATE 25 - POSISI JUMLAH PEKERJA DAN TANDA TANGAN */
    .summary-table{
      margin-left:auto;
      margin-right:calc(104px + 104px);
    }
    .signature-grid{
      margin-top:42px;
    }
    @media print{
      .summary-table{
        margin-left:auto!important;
        margin-right:calc(104px + 104px)!important;
      }
      .signature-grid{
        margin-top:34px!important;
      }
      body.print-report-only .summary-table{
        margin-left:auto!important;
        margin-right:calc(54px + 54px)!important;
      }
      body.print-report-only .signature-grid{
        margin-top:30px!important;
      }
      body.print-report-only .signature-line{
        margin-top:30px!important;
      }
    }


    /* UPDATE 26 - JUMLAH PEKERJA MASUK KE TABEL UTAMA */
    .report-table tfoot.report-summary th,
    .report-table tfoot.report-summary td{
      border:1px solid #111;
      text-align:center;
      font-weight:900;
      background:#fff;
      white-space:normal;
    }
    .report-table tfoot.report-summary .left-label{
      text-align:center;
      font-weight:950;
    }
    .report-table tfoot.report-summary .total{
      font-weight:950;
      font-size:14px;
    }
    .report-table tfoot.report-summary .summary-empty{
      border:0!important;
      background:transparent!important;
    }
    .report-table tfoot.report-summary tr:first-child .summary-empty{
      border:0!important;
    }
    .signature-grid{
      margin-top:54px;
    }
    @media print{
      .report-table tfoot.report-summary th,
      .report-table tfoot.report-summary td{
        padding:2px 3px!important;
        line-height:1.05!important;
      }
      .report-table tfoot.report-summary .total{
        font-size:10px!important;
      }
      .report-table tfoot.report-summary .summary-empty{
        border:0!important;
        background:transparent!important;
      }
      body.print-report-only .report-table tfoot.report-summary th,
      body.print-report-only .report-table tfoot.report-summary td{
        padding:1.6px 2.4px!important;
        line-height:1!important;
      }
      body.print-report-only .report-table tfoot.report-summary .total{
        font-size:9.5px!important;
      }
      body.print-report-only .signature-grid{
        margin-top:44px!important;
      }
    }


    /* UPDATE 28 - FONT PRINT PX + JARAK TTD */
    @media print{
      .print-title .main,
      body.print-report-only .print-title .main{
        font-size:16px!important; /* 12pt */
      }

      .print-title .company,
      .print-title .date,
      body.print-report-only .print-title .company,
      body.print-report-only .print-title .date{
        font-size:16px!important; /* 12pt */
      }

      .report-table,
      body.print-report-only .report-table{
        font-size:16px!important; /* 12pt */
      }

      .tick,
      body.print-report-only .tick{
        font-size:13.33px!important; /* 10pt */
      }

      .check-input,
      body.print-report-only .check-input{
        font-size:13.33px!important; /* 10pt */
      }

      .report-table tfoot.report-summary th,
      .report-table tfoot.report-summary td,
      body.print-report-only .report-table tfoot.report-summary th,
      body.print-report-only .report-table tfoot.report-summary td{
        font-size:13.33px!important; /* 10pt */
      }

      .report-table tfoot.report-summary .total,
      body.print-report-only .report-table tfoot.report-summary .total{
        font-size:13.33px!important; /* 10pt */
      }

      .report-footer,
      .signature-title,
      body.print-report-only .report-footer,
      body.print-report-only .signature-title{
        font-size:14.67px!important; /* 11pt */
      }

      .worktime-table,
      .worktime-table th,
      .worktime-table td,
      body.print-report-only .worktime-table,
      body.print-report-only .worktime-table th,
      body.print-report-only .worktime-table td{
        font-size:10.67px!important; /* 8pt */
      }

      .signature-grid{
        margin-top:86px!important; /* tambahan jarak kira-kira 2x enter */
      }

      body.print-report-only .signature-grid{
        margin-top:78px!important; /* tambahan jarak kira-kira 2x enter pada mode print admin */
      }
    }


    /* UPDATE 29 - JARAK GARIS TTD + TABEL SIDIK JARI UTUH */
    @media print{
      /* Teks B I P / Bagian Gudang / Kasie / P&GA tetap di posisi bawah tabel,
         garis tanda tangan diturunkan agar tidak terlalu mepet. */
      .signature-line{
        margin-top:62px!important;
      }
      body.print-report-only .signature-line{
        margin-top:62px!important;
      }

      /* NOTE dan tabel ABSENSI SIDIK JARI dirapatkan ke atas setelah garis,
         supaya tabel tidak turun lalu terpotong. */
      .note-area{
        margin-top:4px!important;
        page-break-inside:avoid!important;
        break-inside:avoid!important;
        display:block!important;
        overflow:visible!important;
      }
      body.print-report-only .note-area{
        margin-top:4px!important;
        page-break-inside:avoid!important;
        break-inside:avoid!important;
        display:block!important;
        overflow:visible!important;
      }

      .note-title{
        margin-top:0!important;
        margin-bottom:6px!important;
      }
      body.print-report-only .note-title{
        margin-top:0!important;
        margin-bottom:6px!important;
      }

      /* Kotak note kosong jangan membuat tinggi aneh saat print. */
      .note-area > .editable-report[data-report-setting="note"]{
        display:block!important;
        min-height:0!important;
        height:0!important;
        line-height:0!important;
        padding:0!important;
        margin:0 0 4px 0!important;
        border:0!important;
        outline:0!important;
        overflow:hidden!important;
      }
      body.print-report-only .note-area > .editable-report[data-report-setting="note"]{
        display:block!important;
        min-height:0!important;
        height:0!important;
        line-height:0!important;
        padding:0!important;
        margin:0 0 4px 0!important;
        border:0!important;
        outline:0!important;
        overflow:hidden!important;
      }

      /* Tabel sidik jari dipaksa tampil utuh, tidak terpotong. */
      .worktime-table{
        display:table!important;
        visibility:visible!important;
        overflow:visible!important;
        page-break-inside:avoid!important;
        break-inside:avoid!important;
        margin-top:4px!important;
        margin-bottom:0!important;
        height:auto!important;
      }
      .worktime-table tbody,
      .worktime-table tr,
      .worktime-table th,
      .worktime-table td{
        visibility:visible!important;
        page-break-inside:avoid!important;
        break-inside:avoid!important;
      }
      body.print-report-only .worktime-table{
        display:table!important;
        visibility:visible!important;
        overflow:visible!important;
        page-break-inside:avoid!important;
        break-inside:avoid!important;
        margin-top:4px!important;
        margin-bottom:0!important;
        height:auto!important;
      }
      body.print-report-only .worktime-table tbody,
      body.print-report-only .worktime-table tr,
      body.print-report-only .worktime-table th,
      body.print-report-only .worktime-table td{
        visibility:visible!important;
        page-break-inside:avoid!important;
        break-inside:avoid!important;
      }
    }


    /* UPDATE 31 - ADMIN ABSENSI CLEANUP */
    #adminAttendanceCard .card-body{
      padding-top:15px;
    }
    #adminAttendanceCard .grid-form{
      grid-template-columns:minmax(360px, 1.7fr) minmax(190px, .8fr);
      align-items:end;
    }
    #adminAttendanceCard #adminReportUnitSelect{
      min-width:360px;
    }
    @media(max-width:720px){
      #adminAttendanceCard .grid-form{
        grid-template-columns:1fr;
      }
      #adminAttendanceCard #adminReportUnitSelect{
        min-width:0;
      }
    }

    .shift-row.single-shift-row{grid-template-columns:1fr}
  
.commercial-activity-section{margin-top:18px;border:1px solid var(--line);border-radius:18px;overflow:hidden;background:#fff}
.commercial-activity-title{padding:14px 16px;font-weight:950;color:#0b2b57;background:#eef6ff;border-bottom:1px solid var(--line)}
.commercial-activity-head,.commercial-activity-row{display:grid;grid-template-columns:70px 120px minmax(180px,1fr) 110px 110px;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid #e7eef8}
.commercial-activity-head{font-weight:900;background:#f8fafc;color:#334b6b}
.commercial-activity-row label{font-weight:900;display:flex;gap:8px;align-items:center;justify-content:center}
.activity-worker-name{font-weight:850;color:#0f2447}
.overzak-card-section{padding-bottom:14px;background:linear-gradient(135deg,#f6fbff,#ffffff)}
.overzak-worker-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px;padding:14px}
.overzak-worker-card{margin:0}
@media(max-width:720px){.commercial-activity-head,.commercial-activity-row{grid-template-columns:34px 62px minmax(100px,1fr) 64px 64px;gap:5px;padding:9px 8px;font-size:12px}.commercial-activity-row label{gap:4px}.commercial-activity-title{font-size:14px;padding:12px 10px}}



/* v104 - Audit fix: preview global tidak dobel Oper Oper, tombol import rekap dipertegas, mobile Shift 3, file print disinkronkan */
/* v102 - Laporan gabungan Bongkaran Bahan Baku menambahkan Oper Oper Bahan Baku */
.commercial-dock-rules{border:1px solid var(--line);border-radius:18px;overflow:hidden;background:#fff;margin-bottom:14px}
.commercial-dock-rules>summary{list-style:none;cursor:pointer;user-select:none}
.commercial-dock-rules>summary::-webkit-details-marker{display:none}
.commercial-dock-rule-title{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 16px;font-weight:950;color:#0b2b57;background:#eef6ff;border-bottom:1px solid transparent}
.commercial-dock-rules[open] .commercial-dock-rule-title{border-bottom-color:var(--line)}
.commercial-dock-rule-toggle{display:inline-flex;align-items:center;justify-content:center;border:1px solid #cfe0f6;background:#fff;color:#2558d9;border-radius:999px;padding:6px 10px;font-size:11px;font-weight:950;white-space:nowrap}
.commercial-dock-rule-toggle::after{content:'Tampilkan'}
.commercial-dock-rules[open] .commercial-dock-rule-toggle::after{content:'Sembunyikan'}
.commercial-dock-rule-body{display:block}
.commercial-dock-rule-head,.commercial-dock-rule-row{display:grid;grid-template-columns:minmax(90px,1fr) 110px 110px;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid #e7eef8}
.commercial-dock-rule-head{font-weight:900;background:#f8fafc;color:#334b6b}
.commercial-dock-rule-row:last-child{border-bottom:0}
.commercial-dock-rule-row .dock-name{font-weight:950;color:#2558d9}
.commercial-dock-rule-row label{display:flex;align-items:center;justify-content:center;gap:8px;font-weight:950;color:#334155}
.commercial-dock-rule-row input[type="checkbox"]{width:20px;height:20px;accent-color:#2558d9}
.commercial-matrix-row input[data-commercial-plan-disabled="1"] + span{color:#94a3b8}
.commercial-matrix-row input[data-commercial-plan-disabled="1"]{cursor:not-allowed}
@media(max-width:720px){.commercial-dock-rule-title{font-size:14px;padding:12px 10px}.commercial-dock-rule-toggle{font-size:10px;padding:5px 8px}.commercial-dock-rule-head{display:none}.commercial-dock-rule-row{grid-template-columns:1fr 1fr;gap:10px;padding:12px 10px}.commercial-dock-rule-row .dock-name{grid-column:1/-1;font-size:16px}.commercial-dock-rule-row label{border:1px solid #dfe8f5;border-radius:14px;padding:10px;background:#f8fafc;justify-content:flex-start}}
/* v81 - Perbaikan tampilan mobile Muatan Commercial
   - Desktop/tablet: jumlah kolom disesuaikan dengan header/isi sebenarnya.
   - HP: frame lebih full-width dan jadwal Commercial berubah menjadi card agar checkbox S1/S2/S3 rapi. */
.commercial-matrix-head,
.commercial-matrix-row{
  grid-template-columns:minmax(86px,1fr) minmax(130px,1fr) 96px 96px 96px;
}
.commercial-activity-head,
.commercial-activity-row{
  grid-template-columns:64px 110px minmax(180px,1fr) 96px 96px 96px;
}
.commercial-activity-row input[type="checkbox"],
.commercial-matrix-row input[type="checkbox"]{
  width:20px;
  height:20px;
  min-height:20px;
  padding:0;
  flex:0 0 auto;
  accent-color:#2558d9;
}
@media(max-width:720px){
  body{
    padding-left:4px;
    padding-right:4px;
  }
  .wrap{
    width:100%;
    max-width:100%;
  }
  .hero{
    border-radius:22px;
    padding-left:12px;
    padding-right:12px;
  }
  .frame{
    width:100%;
    max-width:100%;
    margin-left:0;
    margin-right:0;
    padding:9px 6px;
    border-radius:20px;
  }
  .frame-head{
    margin-left:4px;
    margin-right:4px;
  }
  .card{
    border-radius:18px;
  }
  .card-head{
    padding:12px 10px;
  }
  .card-body{
    padding:10px 8px;
  }
  .commercial-summary{
    border-radius:16px;
    padding:10px 11px;
    line-height:1.5;
  }
  .commercial-matrix{
    border:0;
    background:transparent;
    overflow:visible;
  }
  .commercial-matrix-head{
    display:none;
  }
  .commercial-matrix-row{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:10px;
    align-items:stretch;
    padding:12px;
    margin:0 0 12px;
    border:1px solid #dfe8f5;
    border-radius:18px;
    background:#fff;
    box-shadow:0 8px 20px rgba(20,38,72,.06);
  }
  .commercial-matrix-row .dock-name{
    grid-column:1/-1;
    font-size:20px;
    line-height:1.15;
  }
  .commercial-matrix-row > div:nth-child(2){
    grid-column:1/-1;
  }
  .commercial-matrix-row > div:nth-child(2)::before{
    content:'Regu';
    display:block;
    margin:0 0 5px;
    color:#64748b;
    font-size:11px;
    font-weight:950;
    letter-spacing:.04em;
    text-transform:uppercase;
  }
  .commercial-regu-select{
    min-height:46px;
    font-size:15px;
    border-radius:15px;
  }
  .commercial-matrix-row label,
  .commercial-activity-row label{
    min-height:46px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:7px;
    border:1px solid #dfe8f5;
    border-radius:15px;
    background:#f8fbff;
    color:#20355b;
    font-size:15px;
    font-weight:950;
    white-space:nowrap;
  }
  .commercial-activity-section{
    margin-top:14px;
    border:0;
    background:transparent;
    overflow:visible;
  }
  .commercial-activity-title{
    border:1px solid #dfe8f5;
    border-radius:18px 18px 0 0;
    padding:13px 12px;
    font-size:16px;
    background:#eef6ff;
  }
  .commercial-activity-head{
    display:none;
  }
  .commercial-activity-row{
    display:grid;
    grid-template-columns:repeat(3,minmax(0,1fr));
    gap:10px;
    align-items:stretch;
    padding:12px;
    margin:0 0 12px;
    border:1px solid #dfe8f5;
    border-top:0;
    border-radius:0 0 18px 18px;
    background:#fff;
    box-shadow:0 8px 20px rgba(20,38,72,.06);
    font-size:14px;
  }
  .commercial-activity-row + .commercial-activity-row{
    border-top:1px solid #dfe8f5;
    border-radius:18px;
  }
  .commercial-activity-row > div:first-child{
    display:none;
  }
  .commercial-activity-row > div:nth-child(2){
    grid-column:1/-1;
    color:#2558d9;
    font-size:13px;
    font-weight:950;
    line-height:1.2;
  }
  .commercial-activity-row > div:nth-child(2)::before{
    content:'NIP ';
    color:#64748b;
  }
  .commercial-activity-row .activity-worker-name{
    grid-column:1/-1;
    color:#0f2342;
    font-size:18px;
    font-weight:950;
    line-height:1.2;
    overflow-wrap:anywhere;
  }
  .tabs{
    padding-left:8px;
    padding-right:8px;
  }
}
@media(max-width:430px){
  .stats.inside-stats{
    grid-template-columns:repeat(2,1fr);
  }
  .commercial-matrix-row,
  .commercial-activity-row{
    gap:8px;
    padding:10px;
  }
  .commercial-matrix-row label,
  .commercial-activity-row label{
    min-height:44px;
    font-size:14px;
    gap:5px;
  }
  .commercial-activity-row input[type="checkbox"],
  .commercial-matrix-row input[type="checkbox"]{
    width:19px;
    height:19px;
    min-height:19px;
  }
}

  

    /* v101: Rapikan Setting Cek In/Out Admin */
    #adminAttendanceCard .admin-checktime-panel{
      display:grid;
      gap:12px;
      padding:12px;
      border:1px solid #dfe8f5;
      border-radius:18px;
      background:#fbfdff;
    }
    #adminAttendanceCard .admin-time-grid,
    #adminAttendanceCard .admin-random-grid{
      display:grid;
      grid-template-columns:repeat(2,minmax(180px,1fr));
      gap:10px;
    }
    #adminAttendanceCard .admin-check-options{
      display:grid;
      grid-template-columns:repeat(2,minmax(160px,1fr));
      gap:10px;
    }
    #adminAttendanceCard .admin-check-options label{
      display:flex;
      align-items:center;
      gap:10px;
      min-height:48px;
      padding:10px 12px;
      border:1px solid #dfe8f5;
      border-radius:16px;
      background:#fff;
      font-weight:900;
      color:#20355b;
    }
    #adminAttendanceCard .admin-check-options input{
      width:20px;
      height:20px;
      min-height:20px;
      accent-color:#2558d9;
      flex:0 0 auto;
    }
    @media(max-width:760px){
      #adminAttendanceCard .admin-time-grid,
      #adminAttendanceCard .admin-random-grid,
      #adminAttendanceCard .admin-check-options{
        grid-template-columns:1fr;
      }
    }

    /* v96-v97: Rapikan layout Admin > Import Data; Frame Pekerja di atas, Frame Cek In/Out di bawah */
    .admin-section-card[data-admin-panel="import-data"] .admin-frame-grid{
      grid-template-columns:1fr !important;
      align-items:start;
    }
    .admin-section-card[data-admin-panel="import-data"] .admin-sub-frame{
      min-width:0;
      width:100%;
      box-sizing:border-box;
      overflow:hidden;
    }
    .admin-section-card[data-admin-panel="import-data"] .grid-form,
    .admin-section-card[data-admin-panel="import-data"] .admin-import-grid{
      min-width:0;
    }
    .admin-section-card[data-admin-panel="import-data"] input,
    .admin-section-card[data-admin-panel="import-data"] select,
    .admin-section-card[data-admin-panel="import-data"] button{
      max-width:100%;
      box-sizing:border-box;
    }
    .admin-section-card[data-admin-panel="import-data"] .admin-actions-row.three{
      grid-template-columns:repeat(auto-fit,minmax(180px,1fr)) !important;
    }
    .admin-section-card[data-admin-panel="import-data"] .admin-actions-row{
      align-items:stretch;
    }
    .admin-section-card[data-admin-panel="import-data"] .machine-preview-box{
      max-width:100%;
      min-width:0;
      overflow:hidden;
    }
    .admin-section-card[data-admin-panel="import-data"] .machine-preview-head{
      flex-wrap:wrap;
      align-items:flex-start;
    }
    .admin-section-card[data-admin-panel="import-data"] .machine-preview-head span:last-child{
      overflow-wrap:anywhere;
      text-align:right;
      max-width:100%;
    }
    .admin-section-card[data-admin-panel="import-data"] .machine-preview-table-wrap{
      max-width:100%;
      overflow-x:auto;
      -webkit-overflow-scrolling:touch;
    }
    /* v97: Import Data disusun vertikal permanen agar Frame 1 di atas dan Frame 2 di bawah */
    .admin-section-card[data-admin-panel="import-data"] .admin-frame-grid{
      grid-template-columns:1fr !important;
    }
    .admin-section-card[data-admin-panel="import-data"] .admin-sub-frame + .admin-sub-frame{
      margin-top:14px;
    }
    @media (max-width:760px){
      .admin-section-card[data-admin-panel="import-data"] .grid-form,
      .admin-sub-frame .grid-form{
        grid-template-columns:1fr !important;
      }
      .admin-section-card[data-admin-panel="import-data"] .span-2{
        grid-column:auto !important;
      }
      .admin-section-card[data-admin-panel="import-data"] .admin-actions-row,
      .admin-section-card[data-admin-panel="import-data"] .admin-actions-row.three{
        grid-template-columns:1fr !important;
      }
      .admin-section-card[data-admin-panel="import-data"] .machine-preview-table{
        min-width:860px;
      }
    }

    /* v99: Import mesin global tanpa pilihan bagian preview */
    .all-schedule-preview-box{
      margin-top:12px;
      border:1px solid #dfe8f5;
      background:#fff;
      border-radius:18px;
      overflow:hidden;
    }
    .all-schedule-preview-head{
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      flex-wrap:wrap;
      gap:10px;
      padding:11px 12px;
      background:#f8fafc;
      border-bottom:1px solid #e5edf7;
      font-size:12px;
      font-weight:950;
      color:#20355b;
    }
    .all-schedule-preview-table-wrap{
      width:100%;
      max-width:100%;
      overflow-x:auto;
      -webkit-overflow-scrolling:touch;
    }
    .all-schedule-preview-table{
      width:100%;
      min-width:980px;
      border-collapse:collapse;
      font-size:12px;
    }
    .all-schedule-preview-table th,.all-schedule-preview-table td{
      border:1px solid #e5edf7;
      padding:8px 9px;
      text-align:center;
      white-space:nowrap;
    }
    .all-schedule-preview-table th{
      background:#eef5ff;
      color:#2558d9;
      font-weight:950;
    }
    .all-schedule-preview-table td:first-child,.all-schedule-preview-table th:first-child{
      text-align:left;
    }
    .all-schedule-preview-note{
      padding:10px 12px;
      font-size:12px;
      font-weight:850;
      color:#64748b;
      background:#fbfdff;
      border-top:1px solid #edf2f8;
      line-height:1.5;
    }

  </style>
</head>
<body class="auth-pending">
<div class="app-splash" id="appSplash">
  <div class="app-splash-orb a"></div><div class="app-splash-orb b"></div><div class="app-splash-orb c"></div>
  <div class="app-splash-card"><div class="app-splash-kicker">BiP Productivity App</div><div class="app-splash-logo-shell"><div class="app-splash-logo-ring"></div><img src="icons/icon-512.png" alt="Logo" class="app-splash-logo"></div><div class="app-splash-title">Lapor Absensi</div><div class="app-splash-sub">Menyiapkan daftar pekerja, jadwal shift, dan laporan absensi.</div><div class="app-splash-progress"><span></span></div><div class="app-splash-foot">Fast • Mobile • PWA</div></div>
</div>
<div class="install-sheet no-print" id="installSheet">
  <div class="install-sheet-card"><button type="button" class="install-sheet-close" id="btnDismissInstallTop">×</button><div class="install-sheet-top"><img src="icons/icon-512.png" alt="Logo" class="install-sheet-logo"><div class="install-sheet-text"><small>Install Android</small><strong>Absensi Koordinator BIP</strong><p>Pasang ke layar utama agar koordinator dan admin bisa mengelola absensi dari HP atau tablet seperti aplikasi native.</p></div></div><div class="install-sheet-actions"><button class="btn primary" id="btnInstallApp">Install</button><button class="btn secondary" id="btnDismissInstall">Nanti</button></div></div>
</div>
<section class="login-view no-print" id="loginView" aria-label="Login aplikasi">
  <div class="login-shell">
    <div class="login-card">
      <div class="login-top">
        <div class="login-brand"><img src="icons/icon-512.png" alt="Logo aplikasi" class="login-logo"><div><small>Login Aplikasi</small><h1>Absensi Koordinator BIP</h1></div></div>
      </div>
      <div class="login-body">
        <form class="login-form" id="loginForm">
          <div class="field"><label for="loginNip">Username</label><input id="loginNip" type="text" autocomplete="username" placeholder="Masukkan username"></div>
          <div class="field"><label for="loginPassword">Password</label><div class="password-wrap"><input id="loginPassword" type="password" autocomplete="current-password" placeholder="Masukkan password"><button class="mini-btn" type="button" id="btnTogglePassword">👁</button></div></div>
          <button class="btn primary full" type="submit">Masuk Aplikasi</button>
          <div class="login-error" id="loginError">Username atau password salah. Periksa kembali data login.</div>
        </form>
      </div>
    </div>
  </div>
</section>
<div class="wrap">
  <div class="user-strip no-print" id="userStrip"><div class="user-strip-left"><div class="user-avatar" id="userAvatar">K</div><div><div class="user-name" id="activeUserName">Koordinator</div><div class="user-unit" id="activeUserUnit"></div></div></div><button type="button" class="logout-btn" id="btnLogout">Logout</button></div>
  <section class="hero no-print">
    <div class="hero-brand"><img src="icons/icon-512.png" alt="Logo aplikasi" class="hero-logo"><div><small>BiP Productivity App</small><h1 id="appUnitTitle">Absensi Muatan Breeder</h1></div></div>
    <div class="hero-badges"><span class="badge">👥 PKWT & Freelance</span><span class="badge">✅ Jadwal Shift</span><span class="badge">📲 Share WA</span><span class="badge hero-user" id="activeUserBadge">👤 Belum login</span><span class="firebase-status local" id="firebaseStatus">💾 Data Lokal</span><button type="button" class="badge app-inline-install" id="btnInlineInstall">Install Android</button></div>
  </section>
  <nav class="tabs no-print" aria-label="Navigasi aplikasi"><button class="tab-btn admin-only" data-panel="panelAdmin">🛠 Admin</button><button class="tab-btn active tab-worker coordinator-only" data-panel="panelWorkers">✅ Jadwal</button><button class="tab-btn" data-panel="panelReport">📝 Absensi</button></nav>
  <section id="panelWorkers" class="panel active">
    <section class="frame worker no-print" id="legacyWorkerMasterFrame" style="display:none!important" aria-hidden="true"><div class="frame-head"><div><div class="frame-kicker">Frame Lama</div><h2>Daftar Pekerja</h2></div><div class="frame-number">-</div></div>
      <div class="card"><div class="card-head"><h3>Add / Edit / Hapus</h3><span>Master data pekerja</span></div><div class="card-body">
        <div class="split-grid">
          <div class="type-box"><div class="type-title"><strong>Daftar Pekerja PKWT</strong><span id="pkwtCount">0 data</span></div><select id="selectPkwt"><option value="">Pilih pekerja PKWT</option></select></div>
          <div class="type-box"><div class="type-title"><strong>Daftar Pekerja Freelance</strong><span id="freelanceCount">0 data</span></div><select id="selectFreelance"><option value="">Pilih pekerja Freelance</option></select></div>
        </div>
        <div class="grid-form" style="margin-top:12px"><div class="field"><label for="workerNo">NO</label><input id="workerNo" type="number" min="1" placeholder="Auto"></div><div class="field"><label for="workerNip">NIP</label><input id="workerNip" type="text" inputmode="numeric" placeholder="133"></div><div class="field name-field span-2"><label for="workerName">NAMA PEKERJA</label><input id="workerName" type="text" placeholder="Nama pekerja"></div></div>
        <div class="actions"><button class="btn primary" id="btnAddWorker">＋ Tambah</button><button class="btn warning" id="btnUpdateWorker">↻ Update</button><button class="btn danger" id="btnDeleteWorker">🗑 Hapus</button><button class="btn secondary" id="btnClearForm">Bersihkan</button></div>
      </div></div>
      <div class="card admin-only" id="adminImportCard"><div class="card-head"><h3>Import Data Pekerja</h3><span>Khusus admin</span></div><div class="card-body">
        <div class="admin-import-grid">
          <div class="field"><label for="adminUnitSelect">Kelola Bagian</label><select id="adminUnitSelect"></select></div>
          <div class="field"><label for="importWorkerFile">File Excel / CSV</label><input id="importWorkerFile" type="file" accept=".xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv"></div>
        </div>
        <div class="import-file-name" id="importFileName">Belum ada file dipilih.</div>
        <div class="admin-import-actions"><button class="btn success" id="btnImportWorkers">📥 Import Pekerja</button><button class="btn secondary" id="btnDownloadTemplate">⬇ Template Excel</button></div>
        <div class="import-help">Format kolom: <b>NIP</b>, <b>Nama Pekerja</b>, <b>Bagian</b>. Untuk Bongkaran Bahan Baku bisa pilih bagian <b>Bongkaran Bahan Baku Pagi</b>, <b>Silo</b>, atau <b>Overzak</b>. Khusus <b>Muatan Commercial</b> wajib ada kolom <b>Regu</b>. Jika kolom Bagian kosong, data akan masuk ke bagian yang dipilih pada dropdown. NIP &lt; 1000 otomatis PKWT, NIP 1000 ke atas otomatis Freelance.</div>
      </div></div>
    </section>

    <section class="frame data no-print"><div class="frame-head"><div><div class="frame-kicker">Frame 1</div><h2>Input Jadwal Pekerja</h2></div><div class="frame-number">1</div></div>
      <div class="card"><div class="card-head"><h3>Pilih Jadwal Shift</h3><span><span id="workerShownCount">0</span> data tampil</span></div><div class="card-body"><div class="field"><label for="reportDate">Tanggal Jadwal</label><input id="reportDate" type="date"></div><div id="scheduleSafetyStatus" class="schedule-safety-status warn">Mode: Tanggal belum dipilih<span class="small">Pilih tanggal dulu sebelum memilih shift dan menyimpan jadwal.</span></div><div class="field" id="activityField" style="display:none;margin-top:10px"><label for="activitySelect">Kegiatan</label><select id="activitySelect"><option value="bongkaran_bahan_baku_pagi">Bongkaran Bahan Baku Pagi - Shift 1</option><option value="silo">Silo - Shift 1, Shift 2 &amp; Shift 3</option><option value="overzak">Overzak - Shift 1, Shift 2 &amp; Shift 3</option></select></div><div class="commercial-tools" id="commercialScheduleTools"><div class="commercial-summary" id="commercialScheduleSummary" style="display:none"></div><div class="commercial-matrix" id="commercialScheduleMatrix"></div></div><div class="search-row"><input id="workerFilter" type="search" placeholder="Cari NIP, nama, PKWT, atau Freelance..."></div><div class="stats inside-stats"><div class="stat"><div class="label">Shift 1</div><div class="num" id="countS1">0</div><div class="desc">orang</div></div><div class="stat"><div class="label">Shift 2</div><div class="num" id="countS2">0</div><div class="desc">orang</div></div><div class="stat"><div class="label">Shift 3</div><div class="num" id="countS3">0</div><div class="desc">orang</div></div><div class="stat"><div class="label">Total</div><div class="num" id="countTotal">0</div><div class="desc">terpilih</div></div></div></div></div>
      <div class="worker-list" id="workerList"></div>
      <div class="schedule-actions"><button class="btn primary" id="btnSaveSchedule">💾 Simpan</button><button class="btn dark" id="btnEditSchedule" type="button" style="display:none">✏️ Edit Jadwal Tanggal Ini</button><button class="btn danger" id="btnCancelSchedule" type="button" style="display:none">Batal</button><button class="btn danger" id="btnResetShift">Reset</button></div><div id="scheduleHistoryPanel" class="schedule-history-panel"><div class="schedule-history-empty">Pilih tanggal untuk melihat riwayat perubahan dan backup jadwal.</div></div>
    </section>
  </section>

  <section id="panelReport" class="panel">
    <section class="frame report-frame"><div class="frame-head no-print"><div><div class="frame-kicker">Frame 3</div><h2>Absensi Kegiatan</h2></div><div class="frame-number">3</div></div>
      <div class="card admin-only no-print" id="adminAttendanceCard"><div class="card-body">
        <div class="grid-form">
          <div class="field span-2"><label for="adminReportUnitSelect">Bagian / Koordinator</label><select id="adminReportUnitSelect"></select></div>
          <div class="field"><label for="adminReportDate">Tanggal Absensi</label><input id="adminReportDate" type="date"></div>
          <div class="field"><label>&nbsp;</label><button type="button" class="btn primary full" id="btnAdminLoadAttendance">🔍 Tampilkan</button></div>
        </div>
        <div class="admin-actions-row" style="grid-template-columns:1fr"><button type="button" class="btn success full" id="btnAdminRefreshAttendance">🔄 Refresh Data</button></div>
        <div class="admin-actions-row" style="margin-top:10px"><button type="button" class="btn primary full" id="btnAdminSaveCheckTimes">💾 Simpan Cek In / Cek Out</button></div>
        
        <div class="admin-checktime-panel" style="margin-top:10px">
          <div class="admin-time-grid">
            <div class="field"><label for="adminAutoS1In">Shift 1 Cek In</label><input id="adminAutoS1In" type="text" value="07:00:00"></div>
            <div class="field"><label for="adminAutoS1Out">Shift 1 Cek Out</label><input id="adminAutoS1Out" type="text" value="17:00:00"></div>
            <div class="field"><label for="adminAutoS2In">Shift 2 Cek In</label><input id="adminAutoS2In" type="text" value="17:00:00"></div>
            <div class="field"><label for="adminAutoS2Out">Shift 2 Cek Out</label><input id="adminAutoS2Out" type="text" value="23:00:00"></div>
            <div class="field"><label for="adminAutoS3In">Shift 3 Cek In</label><input id="adminAutoS3In" type="text" value="23:00:00"></div>
            <div class="field"><label for="adminAutoS3Out">Shift 3 Cek Out</label><input id="adminAutoS3Out" type="text" value="07:00:00"></div>
          </div>
          <div class="admin-random-grid">
            <div class="field"><label for="adminAutoInMinBefore">Cek In min. menit sebelumnya</label><input id="adminAutoInMinBefore" type="number" min="0" step="1" value="5"></div>
            <div class="field"><label for="adminAutoInMaxBefore">Cek In max. menit sebelumnya</label><input id="adminAutoInMaxBefore" type="number" min="0" step="1" value="10"></div>
            <div class="field"><label for="adminAutoOutMinAfter">Cek Out min. menit sesudahnya</label><input id="adminAutoOutMinAfter" type="number" min="0" step="1" value="5"></div>
            <div class="field"><label for="adminAutoOutMaxAfter">Cek Out max. menit sesudahnya</label><input id="adminAutoOutMaxAfter" type="number" min="0" step="1" value="15"></div>
          </div>
          <div class="admin-check-options">
            <label><input id="adminAutoUseS3" type="checkbox"> Shift 3</label>
            <label><input id="adminShowDurationReport" type="checkbox"> Durasi</label>
          </div>
          <button type="button" class="btn success full" id="btnAdminApplyAutoCheckTimes">⚙️ Isi Otomatis Cek In / Cek Out</button>
          <button type="button" class="btn primary full" id="btnAdminUseCheckSummaryReport" style="margin-top:10px">↘️ Pakai Ringkasan Bagian ke Form Cek In/Out</button>
          <div class="import-help" id="adminCheckTimesSourceLabel">ℹ️ Sumber pengisian terakhir: Manual / belum ada pengisian otomatis.</div>
        </div>
        <div class="import-help" id="adminAttendanceInfo">Cek In / Cek Out bisa diisi manual, otomatis, atau mengambil Ringkasan Preview Mesin berdasarkan Bagian dari menu Admin &gt; Import Data.</div>
      </div></div>
      <div class="attendance-list no-print" id="mobileReportList"></div>
      <div class="card print-sheet report-preview"><div class="card-head no-print"><h3>Tabel Hasil Input</h3><span><strong id="selectedCountBadge">0</strong> pekerja dipilih</span></div><div class="print-title"><div class="main" id="reportMainTitle">ABSENSI KEGIATAN MUATAN BREEDER</div><div class="company" id="reportCompanyText">PT. BUDI INTI PERKASA</div><div class="date" id="reportDateText">HARI - TANGGAL</div></div><div class="table-wrap"><table class="report-table" id="reportTable"><thead><tr><th>NO</th><th>NIP</th><th>NAMA</th><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th><th>CEK IN</th><th>CEK OUT</th></tr></thead><tbody id="reportBody"></tbody><tfoot class="report-summary"><tr><td class="summary-empty" colspan="3"></td><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th><td class="summary-empty" colspan="2"></td></tr><tr><td class="left-label" colspan="3">JUMLAH PEKERJA</td><td id="sumS1">0</td><td id="sumS2">0</td><td id="sumS3">0</td><td class="summary-empty" colspan="2"></td></tr><tr><td class="summary-empty" colspan="3"></td><td class="total" colspan="3"><span id="sumTotal">0</span> Orang</td><td class="summary-empty" colspan="2"></td></tr></tfoot></table></div><div class="report-footer" id="reportFooter"><div class="signature-grid"><div><div class="signature-title editable-report" data-report-setting="signBip" contenteditable="true">B I P</div><div class="signature-line"></div></div><div><div class="signature-title editable-report" data-report-setting="signGudang" contenteditable="true">Bagian Gudang</div><div class="signature-line"></div></div><div><div class="signature-title editable-report" data-report-setting="signKasie" contenteditable="true">Kasie Muatan Breeder</div><div class="signature-line"></div></div><div><div class="signature-title editable-report" data-report-setting="signPga" contenteditable="true">Bagian P&amp;GA</div><div class="signature-line"></div></div></div><div class="note-area"><div class="note-title">NOTE :</div><div class="editable-report" data-report-setting="note" contenteditable="true"></div><table class="worktime-table"><tr><th colspan="3" class="worktime-main">ABSENSI SIDIK JARI<br><span class="editable-report" data-report-setting="workTitle" contenteditable="true">JAM KERJA CEK IN dan CEK OUT</span></th></tr><tr><th>JADWAL</th><th colspan="2">JAM KERJA</th></tr><tr><th>KERJA</th><th>CEK IN</th><th>CEK OUT</th></tr><tr><td class="editable-report" data-report-setting="shiftPagiLabel" contenteditable="true">SHIFT 1</td><td class="editable-report" data-report-setting="shiftPagiIn" contenteditable="true">07:00</td><td class="editable-report" data-report-setting="shiftPagiOut" contenteditable="true">17:00</td></tr><tr><td class="editable-report" data-report-setting="shiftSiangLabel" contenteditable="true">SHIFT 2</td><td class="editable-report" data-report-setting="shiftSiangIn" contenteditable="true">17:00</td><td class="editable-report" data-report-setting="shiftSiangOut" contenteditable="true">23:00</td></tr><tr><td class="editable-report" data-report-setting="shiftMalamLabel" contenteditable="true">SHIFT 3</td><td class="editable-report" data-report-setting="shiftMalamIn" contenteditable="true">23:00</td><td class="editable-report" data-report-setting="shiftMalamOut" contenteditable="true">07:00</td></tr></table><div class="note-save-row no-print"><button type="button" class="btn primary" id="btnSaveReportFormat">💾 Simpan NOTE / Jam Kerja</button></div></div></div><div class="bottom-print-actions no-print"><button type="button" class="btn dark" id="btnBottomPrintAttendance">👁 Preview</button></div></div>
      <div class="control-report no-print coordinator-only"><div class="control-info"><div class="control-icon">📲</div><div><h3>Share Laporan Absensi</h3><p>Bagikan gambar tabel via WhatsApp.</p></div></div><div class="control-actions"><button class="btn success full" id="btnShareWa">Lapor BIP via WA</button></div></div>
    </section>
  </section>

  <section id="panelAdmin" class="panel admin-only">
    <section class="frame data no-print"><div class="frame-head"><div><div class="frame-kicker">Dashboard Admin</div><h2>Kontrol Data Aplikasi</h2></div><div class="frame-number">A</div></div>
      <div class="admin-admin-nav" id="adminSectionNav">
        <button type="button" class="admin-section-btn active" data-admin-section="summary">Ringkasan Data</button>
        <button type="button" class="admin-section-btn" data-admin-section="setting-account">Setting Akun</button>
        <button type="button" class="admin-section-btn" data-admin-section="import-data">Import Data</button>
        <button type="button" class="admin-section-btn" data-admin-section="loading-dock">Loading Dock</button>
        <button type="button" class="admin-section-btn" data-admin-section="worker-crud">CRUD Data Pekerja</button>
        <button type="button" class="admin-section-btn" data-admin-section="delete-data">Hapus Data</button>
        <button type="button" class="admin-section-btn" data-admin-section="sync-status">Status Sync</button>
        <button type="button" class="admin-section-btn" data-admin-section="backup-export">Backup / Export</button>
      </div>
      <div class="admin-panel-grid">
        <div class="card admin-section-card active" data-admin-panel="summary"><div class="card-head"><h3>Ringkasan Data</h3><span>Admin</span></div><div class="card-body">
          <div class="field"><label for="adminDashUnitSelect">Pilih Bagian</label><select id="adminDashUnitSelect"></select></div>
          <div class="admin-mini-stats">
            <div class="admin-mini"><div class="label">Total Pekerja</div><div class="value" id="adminTotalWorkers">0</div></div>
            <div class="admin-mini"><div class="label">PKWT</div><div class="value" id="adminTotalPkwt">0</div></div>
            <div class="admin-mini"><div class="label">Freelance</div><div class="value" id="adminTotalFreelance">0</div></div>
            <div class="admin-mini"><div class="label">Antrian Offline</div><div class="value" id="adminPendingCount">0</div></div>
          </div>
          <div class="admin-actions-row"><button class="btn primary" id="btnAdminRefresh">🔄 Refresh</button><button class="btn success" id="btnAdminSyncPending">☁️ Sync Pending</button></div>
        </div></div>

        <div class="card admin-section-card" data-admin-panel="setting-account"><div class="card-head"><h3>Setting Akun</h3><span>Admin & Koordinator</span></div><div class="card-body">
          <div class="admin-frame-grid">
            <div class="admin-sub-frame">
              <div class="admin-sub-title"><div><h4>Menu Setting Akun Admin</h4></div><small>Frame 1</small></div>
              <div class="grid-form">
                <div class="field"><label for="adminAccountNip">Username Admin</label><input id="adminAccountNip" type="text" autocomplete="username" placeholder="admin"></div>
                <div class="field name-field"><label for="adminAccountName">Nama Admin</label><input id="adminAccountName" type="text"></div>
                <div class="field"><label for="adminAccountPassword">Password Baru Admin</label><input id="adminAccountPassword" type="password" placeholder="Isi password admin"></div>
                <div class="field"><label for="adminAccountConfirm">Konfirmasi Password</label><input id="adminAccountConfirm" type="password" placeholder="Ulangi password admin"></div>
              </div>
              <div class="admin-actions-row"><button class="btn primary" id="btnAdminSaveAdminAccount">💾 Simpan Admin</button><button class="btn secondary" id="btnAdminResetAdminAccountForm">↻ Reset Form</button></div>
            </div>
            <div class="admin-sub-frame">
              <div class="admin-sub-title"><div><h4>Menu Setting Akun Koordinator</h4></div><small>Frame 2</small></div>
              <div class="grid-form">
                <div class="field span-2"><label for="adminCoordinatorSelect">Pilih Akun Non-Admin</label><select id="adminCoordinatorSelect"></select></div>
                <div class="field"><label for="adminCoordNip">Username</label><input id="adminCoordNip" type="text" autocomplete="username" placeholder="contoh: breeder"></div>
                <div class="field name-field"><label for="adminCoordName">Nama Akun</label><input id="adminCoordName" type="text"></div>
                <div class="field"><label for="adminCoordWorkerNip">NIP Koordinator</label><input id="adminCoordWorkerNip" type="text" inputmode="numeric" placeholder="contoh: 91"></div>
                <div class="field name-field"><label for="adminCoordWorkerName">Nama Koordinator</label><input id="adminCoordWorkerName" type="text" placeholder="Nama pekerja koordinator"></div>
                <div class="field"><label for="adminCoordUnit">Bagian</label><select id="adminCoordUnit"></select></div>
                <div class="field"><label for="adminCoordRole">Role / Hak Akses</label><select id="adminCoordRole"><option value="koordinator">Koordinator - input unit sendiri</option><option value="payroll">Payroll - lihat/cetak laporan</option><option value="viewer">Viewer - lihat laporan saja</option></select></div>
                <div class="field span-2"><label for="adminCoordPassword">Password Baru</label><input id="adminCoordPassword" type="text" placeholder="Isi password baru"></div>
              </div>
              <label class="admin-checkline"><input id="adminCoordActive" type="checkbox" checked> Aktifkan akun koordinator</label>
              <div class="admin-actions-row three"><button class="btn primary" id="btnAdminSaveCoordinator">💾 Simpan Akun</button><button class="btn danger" id="btnAdminDeleteCoordinator">🗑 Hapus Akun</button><button class="btn secondary" id="btnAdminResetCoordinatorForm">↻ Reset Form</button></div>
            </div>
          </div>
        </div></div>

        <div class="card admin-section-card" data-admin-panel="import-data"><div class="card-head"><h3>Import Data</h3><span>Pekerja & Cek In/Out</span></div><div class="card-body">
          <div class="admin-frame-grid">
            <div class="admin-sub-frame">
              <div class="admin-sub-title"><div><h4>Menu Import Data Pekerja</h4></div><small>Frame 1</small></div>
              <div class="admin-import-grid">
                <div class="field"><label for="adminPanelUnitSelect">Target Bagian Default</label><select id="adminPanelUnitSelect"></select></div>
                <div class="field"><label for="adminPanelImportFile">File Excel / CSV</label><input id="adminPanelImportFile" type="file" accept=".xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv"></div>
              </div>
              <div class="import-file-name" id="adminPanelImportFileName">Belum ada file dipilih.</div>
              <div class="admin-actions-row"><button class="btn success" id="btnAdminPanelImportWorkers">📥 Import Pekerja</button><button class="btn secondary" id="btnAdminTemplate">⬇ Template</button></div>
            </div>
            <div class="admin-sub-frame">
              <div class="admin-sub-title"><div><h4>Menu Import Cek In/Out</h4></div><small>Frame 2</small></div>
              <div class="grid-form">
                <div class="field span-2"><label for="adminGlobalCheckDate">Tanggal Data Mesin / Jadwal</label><input id="adminGlobalCheckDate" type="date"></div>
                <div class="field span-2"><label for="adminGlobalCheckFile">File Excel / CSV</label><input id="adminGlobalCheckFile" type="file" accept=".xlsx,.xls,.csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv"></div>
                <div class="field span-2"><label for="adminCheckSummaryUnitSelect">Bagian Ringkasan Cek In/Out</label><select id="adminCheckSummaryUnitSelect"></select></div>
              </div>
              <div class="import-file-name" id="adminGlobalCheckFileName">Belum ada file dipilih.</div>
              <div class="admin-actions-row three"><button class="btn secondary" id="btnAdminPreviewMachineImport">🔎 Preview Import Data Mesin</button><button class="btn warning" id="btnAdminImportGlobalCheckTimes">📥 Import Rekap Cek In/Out</button><button class="btn danger" id="btnAdminClearGlobalCheckTimes">🗑 Hapus Data Tanggal Ini</button></div>
              <div class="admin-actions-row" style="grid-template-columns:1fr"><button class="btn primary" id="btnAdminPreviewAllSchedules">📋 Preview Jadwal Semua Kegiatan</button></div>
              <div class="admin-actions-row" style="grid-template-columns:1fr"><button class="btn success" id="btnAdminImportMachinePreview">📥 Import Hasil Preview Mesin ke Cek In/Out</button></div>
              <div class="admin-actions-row"><button class="btn primary" id="btnAdminCheckInOutSummary">📊 Cek Ringkasan Cek In/Out Berdasarkan Bagian</button><button class="btn secondary" id="btnAdminUseCheckSummary">↘️ Pakai Ringkasan Bagian ke Form Cek In/Out</button></div>
              <div class="import-help" id="adminGlobalCheckInfo">Import Rekap Cek In/Out memakai file rekap berkolom <b>NIP</b>, <b>Cek In</b>, dan <b>Cek Out</b>. Untuk file mentah mesin berkolom <b>No.ID</b>, <b>Tgl/Waktu</b>, dan <b>Lokasi ID</b>, gunakan <b>Preview Import Data Mesin</b>, lalu klik <b>Import Hasil Preview Mesin ke Cek In/Out</b>. Jam disimpan format <b>HH:MM:SS</b>.</div>
              <div class="machine-preview-box" id="adminCheckSummaryBox" style="display:none"></div>
              <div class="machine-preview-box" id="adminMachinePreviewBox" style="display:none"></div>
              <div class="all-schedule-preview-box" id="adminAllSchedulePreviewBox" style="display:none"></div>
              <div class="admin-sub-title" style="margin-top:14px"><div><h4>Riwayat Import Cek In/Out</h4></div><small>v70</small></div>
              <div class="admin-actions-row"><button class="btn secondary" id="btnAdminRefreshCheckImportHistory">🔄 Refresh Riwayat</button><button class="btn secondary" type="button" disabled>Firestore</button></div>
              <div class="sync-pending-list" id="adminCheckImportHistory"><div class="empty-admin-list">Belum ada riwayat import Cek In/Out.</div></div>
            </div>
          </div>
        </div></div>

        <div class="card admin-section-card" data-admin-panel="loading-dock"><div class="card-head"><h3>Tambah Loading Dock</h3><span>Muatan Commercial</span></div><div class="card-body">
          <div class="admin-sub-frame">
            <div class="admin-sub-title"><div><h4>Master Loading Dock Muatan Commercial</h4></div><small>Baru</small></div>
            <div class="grid-form">
              <div class="field span-2"><label for="adminDockName">Nama Loading Dock</label><input id="adminDockName" type="text" placeholder="Contoh: 01 atau Loading Dock 01"></div>
            </div>
            <div class="admin-actions-row" style="grid-template-columns:1fr"><button class="btn primary" id="btnAdminAddDock">＋ Tambah Loading Dock</button></div>
            <div class="dock-list" id="adminDockList"><div class="empty-admin-list">Belum ada loading dock.</div></div>
          </div>
        </div></div>

        <div class="card admin-section-card" data-admin-panel="worker-crud"><div class="card-head"><h3>CRUD Data Pekerja</h3><span>Kelola manual</span></div><div class="card-body">
          <div class="admin-worker-crud">
            <div class="field"><label for="adminWorkerUnitSelect">Pilih Bagian</label><select id="adminWorkerUnitSelect"></select></div>
            <div class="field"><label for="adminWorkerStatus">Status Pekerja</label><select id="adminWorkerStatus"><option value="">-</option><option value="PKWT">PKWT</option><option value="Freelance">Freelance</option></select></div>
            <div class="field"><label for="adminWorkerCrudRegu">Regu</label><select id="adminWorkerCrudRegu"></select></div>
            <div class="field"><label for="adminWorkerSearch">Cari Pekerja</label><input id="adminWorkerSearch" type="search" placeholder="Cari NIP atau nama pekerja..."></div>
            <div class="admin-worker-form">
              <input id="adminWorkerEditNo" type="hidden">
              <div class="field"><label for="adminWorkerNip">NIP Pekerja</label><input id="adminWorkerNip" type="text" inputmode="numeric" placeholder="Contoh: 133"></div>
              <div class="field"><label for="adminWorkerName">Nama Pekerja</label><input id="adminWorkerName" type="text" placeholder="Nama pekerja"></div>
            </div>
            <div class="admin-worker-tools"><button class="btn primary" id="btnAdminSaveWorker">💾 Simpan Pekerja</button><button class="btn secondary" id="btnAdminResetWorkerForm">↻ Reset Form</button></div>
            <div class="admin-worker-count" id="adminWorkerCount">0 data pekerja</div>
            <div class="admin-worker-list" id="adminWorkerList"><div class="empty-admin-list">Pilih bagian untuk melihat data pekerja.</div></div>
          </div>
        </div></div>

        <div class="card admin-section-card" data-admin-panel="delete-data"><div class="card-head"><h3>Hapus Data</h3><span>Pekerja & Absensi</span></div><div class="card-body">
          <div class="admin-frame-grid">
            <div class="admin-sub-frame">
              <div class="admin-sub-title"><div><h4>Menu Hapus Data Pekerja</h4></div><small>Frame 1</small></div>
              <div class="field"><label for="adminClearWorkersUnit">Target Bagian</label><select id="adminClearWorkersUnit"></select></div>
              <button class="btn danger full" id="btnAdminClearWorkers" style="margin-top:12px">🗑 Hapus Data Pekerja</button>
            </div>
            <div class="admin-sub-frame">
              <div class="admin-sub-title"><div><h4>Menu Hapus Data Absensi</h4></div><small>Frame 2</small></div>
              <div class="grid-form">
                <div class="field span-2"><label for="adminDeleteAttendanceUnit">Target Bagian</label><select id="adminDeleteAttendanceUnit"></select></div>
                <div class="field"><label for="adminDeleteStart">Dari Tanggal</label><input id="adminDeleteStart" type="date"></div>
                <div class="field"><label for="adminDeleteEnd">Sampai Tanggal</label><input id="adminDeleteEnd" type="date"></div>
              </div>
              <button class="btn danger full" id="btnAdminDeleteAttendance" style="margin-top:12px">🗑 Hapus Absensi Periode</button>
            </div>
          </div>
        </div></div>

        <div class="card admin-section-card" data-admin-panel="sync-status"><div class="card-head"><h3>Status Sync / Pending Data</h3><span>Monitoring sinkronisasi</span></div><div class="card-body">
          <div class="admin-frame-grid">
            <div class="admin-sub-frame">
              <div class="admin-sub-title"><div><h4>Status Koneksi & Antrian</h4></div><small>v67</small></div>
              <div class="admin-mini-stats">
                <div class="admin-mini"><div class="label">Status Firebase</div><div class="value" id="syncFirebaseStatus">-</div></div>
                <div class="admin-mini"><div class="label">Antrian Pending</div><div class="value" id="syncPendingCount">0</div></div>
                <div class="admin-mini"><div class="label">Cache Offline</div><div class="value" id="syncOfflineCacheCount">0</div></div>
                <div class="admin-mini"><div class="label">Update Terakhir</div><div class="value" id="syncLastUpdated">-</div></div>
              </div>
              <div class="admin-actions-row"><button class="btn primary" id="btnAdminRefreshSyncStatus">🔄 Refresh Status</button><button class="btn success" id="btnAdminSyncAllPending">☁️ Sync Semua Pending</button></div>
              <div class="import-help">Halaman ini tidak menghapus data utama. Data pending adalah absensi yang belum berhasil dikirim ke Firestore saat koneksi gagal/offline. Tombol hapus hanya menghapus antrean lokal di browser ini.</div>
            </div>
            <div class="admin-sub-frame">
              <div class="admin-sub-title"><div><h4>Daftar Absensi Pending</h4></div><small>Offline</small></div>
              <div class="sync-pending-list" id="syncPendingList"><div class="empty-admin-list">Belum ada data pending.</div></div>
            </div>
            <div class="admin-sub-frame">
              <div class="admin-sub-title"><div><h4>Ringkasan Cache Lokal</h4></div><small>Info</small></div>
              <div class="sync-cache-grid" id="syncCacheSummary"><div class="empty-admin-list">Belum ada ringkasan cache.</div></div>
            </div>
            <div class="admin-sub-frame">
              <div class="admin-sub-title"><div><h4>Monitor Estimasi Penggunaan Firestore</h4></div><small>Kuota Gratis</small></div>
              <div class="admin-actions-row"><button class="btn primary" id="btnAdminRefreshFirestoreUsage">📊 Hitung Estimasi</button></div>
              <div class="import-help">Estimasi dihitung dari dokumen yang bisa dibaca aplikasi. Angka ini membantu memantau kuota gratis Firestore, bukan angka billing resmi Google Cloud.</div>
              <div class="sync-cache-grid" id="firestoreUsageSummary"><div class="empty-admin-list">Klik Hitung Estimasi untuk melihat penggunaan Firestore.</div></div>
              <div class="usage-table-wrap" id="firestoreUsageDetails"></div>
            </div>
          </div>
        </div></div>

        <div class="card admin-section-card" data-admin-panel="backup-export"><div class="card-head"><h3>Backup / Export Database</h3><span>v70</span></div><div class="card-body">
          <div class="admin-frame-grid">
            <div class="admin-sub-frame">
              <div class="admin-sub-title"><div><h4>Export Database Firestore</h4></div><small>Backup</small></div>
              <div class="grid-form">
                <div class="field"><label for="adminBackupStart">Filter Absensi Dari Tanggal</label><input id="adminBackupStart" type="date"></div>
                <div class="field"><label for="adminBackupEnd">Sampai Tanggal</label><input id="adminBackupEnd" type="date"></div>
              </div>
              <label class="admin-checkline"><input id="adminBackupIncludeAudit" type="checkbox" checked> Sertakan audit log terbaru</label>
              <label class="admin-checkline"><input id="adminBackupIncludeLocalCache" type="checkbox"> Sertakan ringkasan cache lokal browser ini</label>
              <div class="admin-actions-row"><button class="btn primary" id="btnAdminExportBackupJson">⬇ Export JSON</button><button class="btn success" id="btnAdminExportBackupExcel">⬇ Export Excel</button></div>
              <div class="admin-actions-row" style="margin-top:10px"><button class="btn secondary" id="btnAdminPreviewBackup">🔍 Preview Ringkasan</button><button class="btn secondary" id="btnAdminBackupToday">Hari Ini</button></div>
              <div class="import-help">Backup JSON berisi snapshot lengkap untuk arsip/recovery teknis. Export Excel berisi ringkasan data penting agar mudah diperiksa manual. Gunakan filter tanggal untuk membatasi data absensi supaya export lebih ringan.</div>
            </div>
            <div class="admin-sub-frame">
              <div class="admin-sub-title"><div><h4>Ringkasan Backup</h4></div><small>Status</small></div>
              <div class="sync-cache-grid" id="adminBackupSummary"><div class="empty-admin-list">Belum ada backup diproses.</div></div>
              <div class="import-help" id="adminBackupInfo">Data utama diambil dari Firestore. Jika Firestore offline, aplikasi hanya bisa mengekspor cache lokal yang tersedia di browser ini.</div>
            </div>
          </div>
        </div></div>
      </div>
      <div class="admin-log" id="adminActionLog">Dashboard admin siap digunakan.</div>
    </section>
  </section>
</div>
<script async src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
<script src="firebase-config.js"></script>
<script src="firebase-bridge.js"></script>
<script>
if ('serviceWorker' in navigator) { window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(()=>{})); }
const STORAGE_KEY = 'absensi_muatan_breeder_pwa_v5';
const ATTENDANCE_KEY = 'absensi_muatan_breeder_attendance_v1';
const PENDING_ATTENDANCE_KEY = 'absensi_muatan_breeder_pending_attendance_v1';
const REPORT_SETTINGS_KEY = 'absensi_muatan_breeder_report_settings_v1';
const GLOBAL_CHECK_TIMES_KEY = 'absensi_breeder_global_check_times_v1';
const IMPORT_HISTORY_CACHE_KEY = 'absensi_bip_import_check_history_v1';
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
let commercialCoordinatorRowsCache = [];
let commercialInputActivityKey = COMMERCIAL_KEY;
let bahanBakuOverzakRowsCache = [];
let bahanBakuActivityConflictRowsCache = {};
let bahanBakuConflictRefreshBusy = false;
const BAHAN_BAKU_PAGI_KEY = 'bongkaran_bahan_baku_pagi';
const BAHAN_BAKU_MALAM_KEY = 'bongkaran_bahan_baku_malam';
const SILO_KEY = 'silo';
const SILO_NAME = 'Silo';
const OVERZAK_KEY = 'overzak';
const OVERZAK_NAME = 'Overzak';
const BAHAN_BAKU_PAGI_COORDINATOR_NIPS = ['91'];
const BAHAN_BAKU_PAGI_COORDINATOR_NAMES = ['yudi efendi'];
function accountCoordinatorWorkerIdentity(user){
  const nip=String(user && (user.coordinatorNip || user.workerNip || user.employeeNip || user.coordinator_nip || user.worker_nip || '') || '').trim();
  const name=String(user && (user.coordinatorName || user.workerName || user.employeeName || user.coordinator_name || user.worker_name || '') || '').trim();
  return { nip, name };
}
function workerMatchesCoordinatorIdentity(worker, ident){
  const data=ident || {};
  const nip=String(worker && worker.nip || '').trim();
  const name=normalizePersonName(worker && worker.name);
  const targetNip=String(data.nip || '').trim();
  const targetName=normalizePersonName(data.name);
  if(targetNip && nip && nip===targetNip) return true;
  if(targetName && name && name===targetName) return true;
  return false;
}
function normalizePersonName(value){ return String(value || '').trim().toLowerCase().replace(/\s+/g,' '); }
function isBahanBakuPagiCoordinatorWorker(worker){
  const nip=String(worker && worker.nip || '').trim();
  const name=normalizePersonName(worker && worker.name);
  if(currentUser && unitKey(currentUser.unit)===BAHAN_BAKU_PAGI_KEY && workerMatchesCoordinatorIdentity(worker, accountCoordinatorWorkerIdentity(currentUser))) return true;
  return BAHAN_BAKU_PAGI_COORDINATOR_NIPS.includes(nip) || BAHAN_BAKU_PAGI_COORDINATOR_NAMES.includes(name);
}
function allowWorkerInBahanBakuActivity(worker, unitKeyValue){
  const key=String(unitKeyValue || '');
  if((key===SILO_KEY || key===OVERZAK_KEY) && isBahanBakuPagiCoordinatorWorker(worker)) return false;
  return true;
}
const COORDINATOR_ACTIVITY_CHOICE_KEY = 'absensi_bahan_baku_pagi_activity_choice_v1';
const BAHAN_BAKU_GABUNGAN_KEY = 'bongkaran_bahan_baku_gabungan';
const BAHAN_BAKU_GABUNGAN_NAME = 'Bongkaran Bahan Baku';
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
let cloudAccountsLoaded = false;
const defaultWorkers = [
  { no:1, nip:'133', name:'Moch. Sholeh', s1:false, s2:false },{ no:2, nip:'16', name:'Joyo', s1:false, s2:false },{ no:3, nip:'17', name:'Muhammad Wahyudi', s1:false, s2:false },{ no:4, nip:'134', name:'Lufi Alfiandi', s1:false, s2:false },{ no:5, nip:'136', name:'Paiman', s1:false, s2:false },{ no:6, nip:'138', name:'Suwoto', s1:false, s2:false },{ no:7, nip:'140', name:'Rohmat', s1:false, s2:false },{ no:8, nip:'143', name:'Santoso', s1:false, s2:false },{ no:9, nip:'247', name:'Untung', s1:false, s2:false },{ no:10, nip:'248', name:'Madsuri', s1:false, s2:false },{ no:11, nip:'250', name:'Matnidi', s1:false, s2:false },{ no:12, nip:'3101', name:'Subur', s1:false, s2:false },{ no:13, nip:'3102', name:'Ahmad Baydowi', s1:false, s2:false },{ no:14, nip:'3104', name:'M Chawibi', s1:false, s2:false },{ no:15, nip:'3105', name:'Jainul Mostofa', s1:false, s2:false },{ no:16, nip:'3106', name:'Hartono', s1:false, s2:false },{ no:17, nip:'3108', name:'Eko', s1:false, s2:false },{ no:18, nip:'3109', name:'Joni Adeka P', s1:false, s2:false },{ no:19, nip:'3110', name:'Syamsul Arifin', s1:false, s2:false },{ no:20, nip:'3111', name:'Busro', s1:false, s2:false },{ no:21, nip:'3112', name:'Choirul Aripin', s1:false, s2:false },{ no:22, nip:'3114', name:'Topan Yunaidi', s1:false, s2:false },{ no:23, nip:'3115', name:'Nanang Bahri', s1:false, s2:false },{ no:24, nip:'3117', name:'M Fahmi Nur Hakim', s1:false, s2:false },{ no:25, nip:'3118', name:'Galih Kurnia Wijaya', s1:false, s2:false },{ no:26, nip:'3119', name:'Abdul Aziz', s1:false, s2:false },{ no:27, nip:'3120', name:'Dicky Andrian', s1:false, s2:false },{ no:28, nip:'3121', name:'Qodar Romdoni', s1:false, s2:false },{ no:29, nip:'3220', name:'Supaat', s1:false, s2:false },{ no:30, nip:'3314', name:'Dymas Angga S', s1:false, s2:false },{ no:31, nip:'3122', name:'Agung Prasetyo', s1:false, s2:false },{ no:32, nip:'3124', name:'Dani Indra Ismawan', s1:false, s2:false },{ no:33, nip:'3125', name:'Farhan Badri', s1:false, s2:false },{ no:34, nip:'3126', name:'Irvan', s1:false, s2:false },{ no:35, nip:'3515', name:'Miftaqul Ulum', s1:false, s2:false }
];
let state = { company:'PT. BUDI INTI PERKASA', reportDate:new Date().toISOString().slice(0,10), workers: JSON.parse(JSON.stringify(defaultWorkers)), allowEmptyWorkers:false };
let adminReportData = null;
const adminAttendanceCache = new Map();
const adminAttendanceCacheMeta = { hits:0, misses:0, lastSource:'' };
const $ = (id) => document.getElementById(id);
function setAuthMode(isLoggedIn){ const logged=Boolean(isLoggedIn); document.body.classList.toggle('auth-ok', logged); document.body.classList.toggle('auth-pending', !logged); document.body.classList.toggle('auth-admin', Boolean(logged && isAdmin())); ['role-admin','role-koordinator','role-payroll','role-viewer'].forEach(c=>document.body.classList.remove(c)); if(logged) document.body.classList.add('role-'+currentRole()); }
function renderDemoUsers(){ /* daftar akun uji coba sengaja tidak ditampilkan pada halaman login */ }
function accountUsername(user){ return String((user && user.username) || (user && user.nip) || '').trim(); }
function normalizeLoginUser(user){ const username=accountUsername(user); return { ...user, username, nip:String(user && user.nip || username), active:user && user.active !== false }; }
let cloudAccountsCache = [];
let accountDataSource = 'default';
function uniqueLoginUsers(rows){
  const used=new Set();
  const out=[];
  (Array.isArray(rows) ? rows : []).forEach(row=>{
    const normalized=normalizeLoginUser(row || {});
    const key=accountUsername(normalized);
    if(!key || used.has(key)) return;
    used.add(key);
    out.push(normalized);
  });
  return out;
}
function getCachedCoordinatorAccounts(){
  try{
    const raw=localStorage.getItem(COORDINATORS_KEY);
    if(!raw) return [];
    const data=JSON.parse(raw);
    if(Array.isArray(data)) return uniqueLoginUsers(data);
    if(data && Array.isArray(data.accounts)) return uniqueLoginUsers(data.accounts);
    if(data && typeof data==='object'){
      return uniqueLoginUsers(Object.keys(data).filter(k=>!String(k).startsWith('__')).map(k=>data[k]));
    }
  }catch(err){ console.warn('Cache akun lokal tidak bisa dibaca:', err); }
  return [];
}
function writeCachedCoordinatorAccounts(rows, source='local_cache'){
  const accounts=uniqueLoginUsers(rows);
  try{
    localStorage.setItem(COORDINATORS_KEY, JSON.stringify({ __source:source, __updatedAt:new Date().toISOString(), accounts }));
  }catch(err){ console.warn('Cache akun lokal tidak bisa disimpan:', err); }
  return accounts;
}
function setAccountCache(rows, source){
  cloudAccountsCache=uniqueLoginUsers(rows);
  accountDataSource=source || (cloudAccountsCache.length ? 'cache' : 'default');
  return cloudAccountsCache;
}
function getFallbackLoginUsers(){ return uniqueLoginUsers(demoUsers); }
function getAllLoginUsers(){
  if(cloudAccountsCache.length) return cloudAccountsCache.slice();
  const cached=getCachedCoordinatorAccounts();
  if(cached.length){ accountDataSource='local_cache'; return cached; }
  accountDataSource='default';
  return getFallbackLoginUsers();
}
function upsertAccountToCache(user){
  if(!user) return [];
  const normalized=normalizeLoginUser(user);
  const key=accountUsername(normalized);
  if(!key) return getAllLoginUsers();
  const rows=getAllLoginUsers().filter(row=>accountUsername(row)!==key);
  rows.push(normalized);
  const cached=writeCachedCoordinatorAccounts(rows, accountDataSource==='firestore' ? 'firestore_cache' : 'local_cache');
  setAccountCache(cached, accountDataSource==='firestore' ? 'firestore' : 'local_cache');
  return cached;
}
function saveLocalCoordinatorAccount(user){ if(!user) return; const role=normalizeRole(user.role || 'koordinator'); upsertAccountToCache({ ...user, role:role==='admin' ? 'koordinator' : role, active:user.active !== false }); }
function deleteLocalCoordinatorAccount(username){
  const key=String(username || '').trim();
  if(!key) return getAllLoginUsers();
  const rows=getAllLoginUsers().filter(row=>accountUsername(row)!==key);
  const cached=writeCachedCoordinatorAccounts(rows, accountDataSource==='firestore' ? 'firestore_cache' : 'local_cache');
  setAccountCache(cached, accountDataSource==='firestore' ? 'firestore' : 'local_cache');
  return cached;
}
function saveLocalAdminAccount(user){ if(!user) return; upsertAccountToCache({ ...user, role:'admin', unit:'Admin', active:true }); }
function mergeCloudAccountsToLocal(users){
  const rows=uniqueLoginUsers(users);
  if(!rows.length) return 0;
  setAccountCache(rows, 'firestore');
  writeCachedCoordinatorAccounts(rows, 'firestore_cache');
  return rows.length;
}
async function refreshAccountsFromFirestore(force=false){
  if(cloudAccountsLoaded && !force) return false;
  try{
    const bridge=await waitFirebase();
    if(!(bridge && bridge.enabled && bridge.loadCoordinatorAccounts)){
      const cached=getCachedCoordinatorAccounts();
      if(cached.length) setAccountCache(cached, 'local_cache');
      cloudAccountsLoaded=true;
      return false;
    }
    const rows=await bridge.loadCoordinatorAccounts();
    const count=mergeCloudAccountsToLocal(rows);
    cloudAccountsLoaded=true;
    if(count) adminLog(`Data akun dari Firebase dimuat: ${count} akun.`);
    return count>0;
  }catch(err){
    cloudAccountsLoaded=false;
    const cached=getCachedCoordinatorAccounts();
    if(cached.length) setAccountCache(cached, 'local_cache');
    console.warn('Load akun Firebase gagal, memakai cache akun lokal bila tersedia:', err);
    return false;
  }
}
function coordinatorBaseUsers(){ return getAllLoginUsers().filter(u=>normalizeRole(u.role)!=='admin'); }
function renderCoordinatorAccountOptions(selectedValue){
  const sel=$('adminCoordinatorSelect');
  if(!sel) return;
  const users=coordinatorBaseUsers();
  sel.innerHTML=users.map(u=>`<option value="${safeText(accountUsername(u))}">${safeText(accountUsername(u))} - ${safeText(u.name)} (${safeText(roleLabel(u.role))})</option>`).join('');
  const wanted=String(selectedValue || sel.value || '').trim();
  if(wanted && users.some(u=>accountUsername(u)===wanted)) sel.value=wanted;
  else if(users[0]) sel.value=accountUsername(users[0]);
}
function adminLoginUser(){ return getAllLoginUsers().find(u=>u.role==='admin') || getFallbackLoginUsers().find(u=>u.role==='admin') || getFallbackLoginUsers()[0]; }
function coordinatorByUsername(username){ const key=String(username||'').trim(); const rows=coordinatorBaseUsers(); return rows.find(u=>accountUsername(u)===key) || rows[0] || null; }
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
  currentUser=user ? {
    username:accountUsername(user),
    nip:user.nip,
    name:user.name,
    role:normalizeRole(user.role),
    unit:user.unit,
    coordinatorNip:String(user.coordinatorNip || user.workerNip || user.employeeNip || user.coordinator_nip || user.worker_nip || '').trim(),
    coordinatorName:String(user.coordinatorName || user.workerName || user.employeeName || user.coordinator_name || user.worker_name || '').trim()
  } : null;
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
function unitNameFromKey(key){ if(String(key || '')===BAHAN_BAKU_GABUNGAN_KEY) return BAHAN_BAKU_GABUNGAN_NAME; if(isSiloKey(key)) return SILO_NAME; if(isOverzakKey(key)) return OVERZAK_NAME; const found=UNITS.find(u=>u.key===key); return found ? found.name : 'Muatan Breeder'; }
function isCommercialKey(key){ return String(key || '') === COMMERCIAL_KEY; }
function normalizeRegu(value){ const raw=String(value||'').trim(); if(!raw) return ''; const m=raw.match(/\d+/); if(m) return String(parseInt(m[0],10)).padStart(2,'0'); return raw.toUpperCase(); }
function normalizeDockName(value){ const raw=String(value||'').trim(); if(!raw) return ''; const m=raw.match(/\d+/); if(m) return String(parseInt(m[0],10)).padStart(2,'0'); return raw; }
function dockLabel(value){ const v=normalizeDockName(value); return v ? `LD ${v}` : '-'; }
function normalizeRole(role){ const raw=String(role || 'koordinator').trim().toLowerCase(); if(raw==='admin') return 'admin'; if(raw==='payroll' || raw==='penggajian') return 'payroll'; if(raw==='viewer' || raw==='view' || raw==='readonly' || raw==='read_only') return 'viewer'; return 'koordinator'; }
function currentRole(){ return normalizeRole(currentUser && currentUser.role); }
function isAdmin(){ return Boolean(currentUser && currentRole() === 'admin'); }
function isCoordinator(){ return Boolean(currentUser && currentRole() === 'koordinator'); }
function isPayroll(){ return Boolean(currentUser && currentRole() === 'payroll'); }
function isViewer(){ return Boolean(currentUser && currentRole() === 'viewer'); }
function roleLabel(role){ const r=normalizeRole(role); if(r==='admin') return 'Admin'; if(r==='payroll') return 'Payroll'; if(r==='viewer') return 'Viewer'; return 'Koordinator'; }
const ROLE_PERMISSIONS={
  admin:{adminPanel:true,manageAccounts:true,manageWorkers:true,importData:true,deleteData:true,manageSettings:true,manageDocks:true,syncPending:true,backupExport:true,inputAttendance:true,saveAttendance:true,editCheckTimes:true,viewReports:true,printReports:true,shareReports:true},
  koordinator:{adminPanel:false,manageAccounts:false,manageWorkers:true,importData:false,deleteData:false,manageSettings:false,manageDocks:false,syncPending:false,backupExport:false,inputAttendance:true,saveAttendance:true,editCheckTimes:false,viewReports:true,printReports:true,shareReports:true},
  payroll:{adminPanel:false,manageAccounts:false,manageWorkers:false,importData:false,deleteData:false,manageSettings:false,manageDocks:false,syncPending:false,backupExport:false,inputAttendance:false,saveAttendance:false,editCheckTimes:false,viewReports:true,printReports:true,shareReports:false},
  viewer:{adminPanel:false,manageAccounts:false,manageWorkers:false,importData:false,deleteData:false,manageSettings:false,manageDocks:false,syncPending:false,backupExport:false,inputAttendance:false,saveAttendance:false,editCheckTimes:false,viewReports:true,printReports:false,shareReports:false}
};
function hasPermission(permission){ const perms=ROLE_PERMISSIONS[currentRole()] || ROLE_PERMISSIONS.koordinator; return !!perms[permission]; }
function requirePermission(permission, message){ if(hasPermission(permission)) return true; alert(message || ('Akses ditolak. Role '+roleLabel(currentRole())+' tidak memiliki izin untuk fitur ini.')); auditLog('permission_denied','access_control',{message:'Akses ditolak', permission, role:currentRole()}).catch(()=>{}); return false; }
function canAccessUnit(unitKeyValue){ if(isAdmin()) return true; const key=String(unitKeyValue || ''); const own=currentCoordinatorUnitKey(); return !key || key===own; }
function enforceRoleUi(){
  const role=currentRole();
  document.body.classList.toggle('role-readonly', role==='viewer');
  document.body.classList.toggle('role-payroll', role==='payroll');
  document.querySelectorAll('[data-role-write]').forEach(el=>{ el.style.display=hasPermission('inputAttendance') ? '' : 'none'; });
  ['btnSaveSchedule','btnAddWorker','btnUpdateWorker','btnDeleteWorker','btnResetShift','btnShareWa'].forEach(id=>{ const el=$(id); if(!el) return; if(id==='btnShareWa') el.disabled=!hasPermission('shareReports'); else el.disabled=!hasPermission(id==='btnSaveSchedule'?'saveAttendance':'manageWorkers'); });
  document.querySelectorAll('input[data-shift],[data-commercial-shift],[data-commercial-dock-plan],[data-commercial-regu-select],[data-commercial-activity-shift],[data-commercial-coordinator-shift],[data-overzak-shift]').forEach(el=>{ const allowed=hasPermission('inputAttendance'); el.disabled=!allowed || el.dataset.bahanBakuConflict==='1' || el.dataset.commercialPlanDisabled==='1'; });
  document.querySelectorAll('[data-report-setting]').forEach(el=>{ if(el.hasAttribute('contenteditable')) el.setAttribute('contenteditable', hasPermission('manageSettings') ? 'true' : 'false'); });
  updateScheduleSafetyUI();
}
function coordinatorCanChooseSilo(){ return Boolean(currentUser && isCoordinator() && unitKey(currentUser.unit)===BAHAN_BAKU_PAGI_KEY); }
function coordinatorCanChooseBahanBakuActivity(){ return coordinatorCanChooseSilo(); }
function isBahanBakuSelectableActivityKey(value){ return [BAHAN_BAKU_PAGI_KEY, SILO_KEY, OVERZAK_KEY].includes(String(value || '')); }
function normalizeBahanBakuActivityChoice(value){ return isBahanBakuSelectableActivityKey(value) ? String(value) : BAHAN_BAKU_PAGI_KEY; }
function loadCoordinatorActivityChoice(){ if(coordinatorCanChooseBahanBakuActivity()){ const saved=localStorage.getItem(COORDINATOR_ACTIVITY_CHOICE_KEY); coordinatorActivityKey = normalizeBahanBakuActivityChoice(saved); } else { coordinatorActivityKey = currentUser && currentUser.unit ? unitKey(currentUser.unit) : BAHAN_BAKU_PAGI_KEY; } }
function currentCoordinatorUnitKey(){ if(coordinatorCanChooseBahanBakuActivity()) return normalizeBahanBakuActivityChoice(coordinatorActivityKey); return currentUser && currentUser.unit ? unitKey(currentUser.unit) : 'muatan_breeder'; }
function activeUnitName(){ return isAdmin() ? unitNameFromKey(adminManagedUnitKey) : unitNameFromKey(currentCoordinatorUnitKey()); }
function adminGlobalTitle(){ return 'Admin Absensi BIP'; }
function adminGlobalLabel(){ return 'Global Semua Bagian'; }
function currentAbsensiTitle(){ return isAdmin() ? adminGlobalTitle() : `Absensi ${activeUnitName()}`; }
function activeUnitKey(){ return isAdmin() ? adminManagedUnitKey : currentCoordinatorUnitKey(); }
function isCommercialInputActivityKey(value){ return [COMMERCIAL_KEY, STAPEL_TF_KEY, MALLETI_TF_KEY].includes(String(value || '')); }
function normalizeCommercialInputActivityChoice(value){ return isCommercialInputActivityKey(value) ? String(value) : COMMERCIAL_KEY; }
function commercialInputActivityLabel(key){ const value=normalizeCommercialInputActivityChoice(key); if(value===STAPEL_TF_KEY) return 'Stapel'; if(value===MALLETI_TF_KEY) return 'Malleti'; return 'Muatan Commercial'; }
function coordinatorCanChooseCommercialActivity(){ return Boolean(currentUser && isCoordinator() && unitKey(currentUser.unit)===COMMERCIAL_KEY); }
function updateCoordinatorActivityUI(){
  const field=$('activityField');
  const select=$('activitySelect');
  const showBahan=coordinatorCanChooseBahanBakuActivity();
  const showCommercial=coordinatorCanChooseCommercialActivity();
  if(field) field.style.display=(showBahan || showCommercial) ? '' : 'none';
  if(!select) return;
  if(showCommercial){
    const options=[
      {value:COMMERCIAL_KEY, text:'Muatan Commercial'},
      {value:STAPEL_TF_KEY, text:'Stapel'},
      {value:MALLETI_TF_KEY, text:'Malleti'}
    ];
    select.innerHTML=options.map(o=>`<option value="${o.value}">${safeText(o.text)}</option>`).join('');
    select.value=normalizeCommercialInputActivityChoice(commercialInputActivityKey);
  }else if(showBahan){
    const options=[
      {value:BAHAN_BAKU_PAGI_KEY, text:'Bongkaran Bahan Baku Pagi - Shift 1'},
      {value:SILO_KEY, text:'Silo - Shift 1, Shift 2 & Shift 3'},
      {value:OVERZAK_KEY, text:'Overzak - Shift 1, Shift 2 & Shift 3'}
    ];
    select.innerHTML=options.map(o=>`<option value="${o.value}">${safeText(o.text)}</option>`).join('');
    select.value=normalizeBahanBakuActivityChoice(coordinatorActivityKey);
  }
}
async function changeCoordinatorActivity(value){ if(!coordinatorCanChooseBahanBakuActivity()) return; const selectedDate=state.reportDate || todayISO(); await saveState(); coordinatorActivityKey = normalizeBahanBakuActivityChoice(value); localStorage.setItem(COORDINATOR_ACTIVITY_CHOICE_KEY, coordinatorActivityKey); updateAuthUI(); await loadState({reportDate:selectedDate}); state.reportDate=selectedDate; renderAll(); }
async function changeCommercialInputActivity(value){ if(!coordinatorCanChooseCommercialActivity()) return; saveCommercialDraftSelection(); commercialInputActivityKey=normalizeCommercialInputActivityChoice(value); updateCoordinatorActivityUI(); await renderWorkers(); renderReport(); updateCounts(); }
function isBahanBakuPagiKey(key){ return String(key || '') === BAHAN_BAKU_PAGI_KEY; }
function isBahanBakuMalamKey(key){ return String(key || '') === BAHAN_BAKU_MALAM_KEY; }
function coordinatorBahanBakuMalamMode(){ return Boolean(!isAdmin() && isCoordinator() && activeUnitKey()===BAHAN_BAKU_MALAM_KEY); }
function coordinatorBahanBakuMalamShiftAllowed(shiftKey){ return shiftKey==='s2' || shiftKey==='s3'; }
function shiftAllowedForActiveCoordinator(shiftKey, worker){
  if(coordinatorBahanBakuMalamMode()) return coordinatorBahanBakuMalamShiftAllowed(shiftKey);
  const allowed=coordinatorAllowedShift();
  if(allowed && shiftKey!==allowed && !canUseAllShiftsDespiteSingleShiftRule(worker)) return false;
  return true;
}
function isBahanBakuPagiMalamKey(key){ return isBahanBakuPagiKey(key) || isBahanBakuMalamKey(key); }
function coordinatorAllowedShift(){ return coordinatorCanChooseBahanBakuActivity() && activeUnitKey()===BAHAN_BAKU_PAGI_KEY ? 's1' : ''; }
function canUseAllShiftsDespiteSingleShiftRule(worker){ return Boolean(coordinatorCanChooseBahanBakuActivity() && activeUnitKey()===BAHAN_BAKU_PAGI_KEY && isBahanBakuPagiCoordinatorWorker(worker)); }
function coordinatorSingleShiftMode(){ return Boolean(coordinatorAllowedShift()); }
function coordinatorAllowedShiftLabel(){ return coordinatorAllowedShift()==='s3' ? 'Shift 3' : (coordinatorAllowedShift()==='s2' ? 'Shift 2' : 'Shift 1'); }
function enforceSingleShiftInputRule(){
  const allowed=coordinatorAllowedShift();
  if(!state || !Array.isArray(state.workers)) return false;
  let changed=false;
  const currentKey=activeUnitKey();
  if(currentKey===SILO_KEY || currentKey===OVERZAK_KEY){
    const before=state.workers.length;
    state.workers=state.workers.filter(w=>allowWorkerInBahanBakuActivity(w, currentKey));
    if(state.workers.length!==before) changed=true;
  }
  if(currentKey===BAHAN_BAKU_MALAM_KEY){
    state.workers.forEach(w=>{ if(w && w.s1){ w.s1=false; changed=true; } });
    return changed;
  }
  if(!allowed) return changed;
  state.workers.forEach(w=>{
    if(canUseAllShiftsDespiteSingleShiftRule(w)) return;
    if(allowed==='s1' && (w.s2 || w.s3)){ w.s2=false; w.s3=false; changed=true; }
    if(allowed==='s2' && (w.s1 || w.s3)){ w.s1=false; w.s3=false; changed=true; }
    if(allowed==='s3' && (w.s1 || w.s2)){ w.s1=false; w.s2=false; changed=true; }
  });
  return changed;
}
function updateSingleShiftUI(){
  const allowed=coordinatorAllowedShift();
  const malamMode=coordinatorBahanBakuMalamMode();
  const s1Stat=$('countS1') ? $('countS1').closest('.stat') : null;
  const s2Stat=$('countS2') ? $('countS2').closest('.stat') : null;
  const s3Stat=$('countS3') ? $('countS3').closest('.stat') : null;
  if(s1Stat) s1Stat.style.display=malamMode ? 'none' : ((allowed && allowed!=='s1') ? 'none' : '');
  if(s2Stat) s2Stat.style.display=(allowed && allowed!=='s2') ? 'none' : '';
  if(s3Stat) s3Stat.style.display=(allowed && allowed!=='s3') ? 'none' : '';
  if($('workerFilter')){
    if(malamMode) $('workerFilter').placeholder='Cari NIP, nama, PKWT, atau Freelance... (input Shift 2 dan Shift 3 saja)';
    else $('workerFilter').placeholder = allowed ? `Cari NIP, nama, PKWT, atau Freelance... (input ${coordinatorAllowedShiftLabel()} saja)` : 'Cari NIP, nama, PKWT, atau Freelance...';
  }
}
function stateStorageKey(){ return `${STORAGE_KEY}_${activeUnitKey()}`; }
function setFirebaseStatus(mode,text){ const el=$('firebaseStatus'); if(!el) return; el.className=`firebase-status ${mode || 'local'}`; el.textContent=text || '💾 Data Lokal'; }
async function waitFirebase(){ if(window.AbsensiFirebase && window.AbsensiFirebase.ready){ try{ return await window.AbsensiFirebase.ready; }catch(err){ console.warn('Firebase gagal dimuat.', err); return null; } } return null; }
function currentAuditActor(){ return currentUser ? { username:currentUser.username||currentUser.nip||'', nip:currentUser.nip||currentUser.username||'', name:currentUser.name||'', role:currentUser.role||'', unit:currentUser.unit||activeUnitName()||'' } : null; }
async function auditLog(action, moduleName, details={}, before=null, after=null, status='success'){
  try{
    const bridge=window.AbsensiFirebase || await waitFirebase();
    if(!(bridge && bridge.enabled && bridge.writeAuditLog)) return false;
    await bridge.writeAuditLog({ action, module:moduleName || 'general', message: details && details.message ? details.message : '', actor: currentAuditActor(), target: details && details.target ? details.target : null, details, before, after, status });
    return true;
  }catch(err){ console.warn('Audit log gagal disimpan.', err); return false; }
}

// v75: Bahan Baku Pagi dibatasi Shift 1, laporan admin disederhanakan menjadi 4 pilihan utama, dan validasi lintas kegiatan dipastikan tersimpan sebelum pindah/simpan. v74-v71 tetap dipertahankan.
function safeLocalGetJSON(key, fallback=null){
  try{ const raw=localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(err){ return fallback; }
}
function safeLocalSetJSON(key, value){
  try{ localStorage.setItem(key, JSON.stringify(value)); return true; }catch(err){ console.warn('Cache lokal gagal disimpan:', key, err); return false; }
}
function cacheEnvelope(value, source){ return { __source:source || 'firestore_cache', __updatedAt:new Date().toISOString(), data:value }; }
function unwrapCacheEnvelope(value){ return value && typeof value==='object' && Object.prototype.hasOwnProperty.call(value,'data') ? value.data : value; }
async function loadMasterDataPrimary(docId, localKey, fallbackValue=null){
  const bridge=await waitFirebase();
  if(bridge && bridge.enabled && bridge.loadMasterData){
    try{
      const remote=await bridge.loadMasterData(docId);
      if(remote !== null && remote !== undefined){
        safeLocalSetJSON(localKey, cacheEnvelope(remote, 'firestore_cache'));
        return { data:remote, source:'firestore' };
      }
    }catch(err){ console.warn('Load Firestore gagal untuk '+docId+', memakai cache lokal bila ada.', err); }
  }
  const cached=unwrapCacheEnvelope(safeLocalGetJSON(localKey, null));
  if(cached !== null && cached !== undefined) return { data:cached, source:'local_cache' };
  return { data:fallbackValue, source:'default' };
}
async function saveMasterDataPrimary(docId, localKey, data){
  safeLocalSetJSON(localKey, cacheEnvelope(data, 'pending_or_cache'));
  const bridge=window.AbsensiFirebase;
  if(bridge && bridge.enabled && bridge.saveMasterData){
    try{
      await bridge.saveMasterData(docId, data, currentUser);
      safeLocalSetJSON(localKey, cacheEnvelope(data, 'firestore_cache'));
      return { online:true };
    }catch(err){ console.warn('Simpan Firestore gagal untuk '+docId+', data tetap tersimpan sebagai cache lokal.', err); }
  }
  return { online:false };
}
async function saveMasterDataFirestoreFirst(docId, localKey, data){
  const bridge=window.AbsensiFirebase;
  if(bridge && bridge.enabled && bridge.saveMasterData){
    try{
      await bridge.saveMasterData(docId, data, currentUser);
      safeLocalSetJSON(localKey, cacheEnvelope(data, 'firestore_cache'));
      return { online:true };
    }catch(err){
      console.warn('Simpan Firestore gagal untuk '+docId+', data baru disimpan sebagai cache offline lokal.', err);
      safeLocalSetJSON(localKey, cacheEnvelope(data, 'offline_pending'));
      return { online:false, error:err };
    }
  }
  safeLocalSetJSON(localKey, cacheEnvelope(data, 'offline_pending'));
  return { online:false };
}
function reportSettingsDocId(unitKeyValue){ return 'report_settings_' + (unitKeyValue || 'global'); }
function reportOptionsLocalKey(){ return REPORT_SETTINGS_KEY + '_admin_options_v1'; }
const reportSettingsCloudCache = {};
const reportSettingsCloudLoaded = {};
let adminAttendanceOptionsLoaded = false;
const adminAttendanceOptions = { autoShift3:false, showDuration:false, autoInMinBefore:5, autoInMaxBefore:10, autoOutMinAfter:5, autoOutMaxAfter:15 };
async function refreshReportSettingsFromFirestore(unitKeyValue, force=false){
  const key=unitKeyValue || 'global';
  if(reportSettingsCloudLoaded[key] && !force) return reportSettingsCloudCache[key] || null;
  const localKey=reportSettingsStorageKey(key);
  const result=await loadMasterDataPrimary(reportSettingsDocId(key), localKey, null);
  const data=unwrapCacheEnvelope(result.data);
  if(data && typeof data==='object'){
    const settings=data.settings && typeof data.settings==='object' ? data.settings : data;
    reportSettingsCloudCache[key]=settings;
    reportSettingsCloudLoaded[key]=true;
    return settings;
  }
  reportSettingsCloudLoaded[key]=true;
  return null;
}
async function saveReportSettingsToFirestore(unitKeyValue, settings){
  reportSettingsCloudCache[unitKeyValue || 'global']=settings || {};
  reportSettingsCloudLoaded[unitKeyValue || 'global']=true;
  return saveMasterDataPrimary(reportSettingsDocId(unitKeyValue || 'global'), reportSettingsStorageKey(unitKeyValue || 'global'), { settings:settings || {} });
}
async function refreshAdminAttendanceOptionsFromFirestore(force=false){
  if(adminAttendanceOptionsLoaded && !force) return;
  const result=await loadMasterDataPrimary('admin_attendance_options', reportOptionsLocalKey(), null);
  const data=unwrapCacheEnvelope(result.data);
  if(data && typeof data==='object'){
    if(Object.prototype.hasOwnProperty.call(data,'autoShift3')) adminAttendanceOptions.autoShift3 = !!data.autoShift3;
    if(Object.prototype.hasOwnProperty.call(data,'showDuration')) adminAttendanceOptions.showDuration = !!data.showDuration;
    ['autoInMinBefore','autoInMaxBefore','autoOutMinAfter','autoOutMaxAfter'].forEach(k=>{ if(Object.prototype.hasOwnProperty.call(data,k)) adminAttendanceOptions[k] = normalizeAdminRandomMinutes(data[k], adminAttendanceOptions[k]); });
  }
  adminAttendanceOptionsLoaded=true;
  syncAdminAttendanceOptionCheckboxes();
}
async function saveAdminAttendanceOptionsToFirestore(){
  const randomOpts=getAdminAutoRandomOptions();
  const data={
    autoShift3: $('adminAutoUseS3') ? !!$('adminAutoUseS3').checked : !!adminAttendanceOptions.autoShift3,
    showDuration: $('adminShowDurationReport') ? !!$('adminShowDurationReport').checked : !!adminAttendanceOptions.showDuration,
    autoInMinBefore: randomOpts.inMin,
    autoInMaxBefore: randomOpts.inMax,
    autoOutMinAfter: randomOpts.outMin,
    autoOutMaxAfter: randomOpts.outMax
  };
  adminAttendanceOptions.autoShift3 = data.autoShift3;
  adminAttendanceOptions.showDuration = data.showDuration;
  adminAttendanceOptions.autoInMinBefore = data.autoInMinBefore;
  adminAttendanceOptions.autoInMaxBefore = data.autoInMaxBefore;
  adminAttendanceOptions.autoOutMinAfter = data.autoOutMinAfter;
  adminAttendanceOptions.autoOutMaxAfter = data.autoOutMaxAfter;
  return saveMasterDataPrimary('admin_attendance_options', reportOptionsLocalKey(), data);
}
function commercialDraftDocId(){ return 'commercial_draft_' + (state.reportDate || todayISO()); }
function overzakDraftDocId(){ return 'overzak_draft_' + (state.reportDate || todayISO()); }

async function firebaseBridgeReady(){ return waitFirebase(); }

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
    if($('activeUserBadge')) $('activeUserBadge').textContent=isAdmin()?`👤 Admin • Global`:`👤 ${roleLabel(currentRole())} • ${activeUnitName()}`;
    enforceRoleUi();
  }
  updateFirebaseStatusUI();
}
async function updateFirebaseStatusUI(){ const bridge=await waitFirebase(); if(bridge && bridge.enabled){ setFirebaseStatus('online','☁️ Firebase Online'); } else if(bridge && bridge.error){ setFirebaseStatus('error','⚠️ Firebase Error'); } else { setFirebaseStatus('local','💾 Data Lokal'); } updateSyncBadges(); }
async function loginLocal(username,password){
  const cleanUsername=String(username).trim();
  const cleanPassword=String(password);
  const bridge=await waitFirebase();
  let remoteLoginError=null;
  if(bridge && bridge.enabled && bridge.loginCoordinator){
    try{
      const remoteUser=await bridge.loginCoordinator(cleanUsername, cleanPassword);
      if(remoteUser){
        await refreshAccountsFromFirestore(true);
        if(String(remoteUser.role || '')==='admin') saveLocalAdminAccount(remoteUser); else saveLocalCoordinatorAccount(remoteUser);
        saveAuth(remoteUser);
        initAdminTools();
        if($('loginError')) $('loginError').classList.remove('show');
        await loadState();
        await renderAll();
        if(isAdmin()) { switchToPanel('panelAdmin'); }
        auditLog('login_success','auth',{message:'Login berhasil via Firestore', username:cleanUsername, role:remoteUser.role || '', unit:remoteUser.unit || ''}).catch(()=>{});
        return true;
      }
    }catch(err){
      remoteLoginError=err;
      console.warn('Login Firebase gagal, mencoba cache akun lokal:', err);
    }
    if(!remoteLoginError){
      await refreshAccountsFromFirestore(true);
      return false;
    }
  }else{
    await refreshAccountsFromFirestore(false);
  }
  const user=getAllLoginUsers().find(u=>{ const uName=accountUsername(u); return uName===cleanUsername && u.password===cleanPassword && u.active !== false; });
  if(!user) return false;
  saveAuth(user);
  initAdminTools();
  if($('loginError')) $('loginError').classList.remove('show');
  await loadState();
  await renderAll();
  if(isAdmin()) { switchToPanel('panelAdmin'); }
  auditLog('login_success_offline_cache','auth',{message:'Login berhasil via cache lokal/offline', username:cleanUsername, role:user.role || '', unit:user.unit || ''}).catch(()=>{});
  return true;
}
function logoutLocal(){ if(!confirm('Keluar dari aplikasi?')) return; const previous=currentUser ? {...currentUser} : null; auditLog('logout','auth',{message:'Logout aplikasi', username: previous ? (previous.username || previous.nip || '') : ''}, previous, null).catch(()=>{}); saveAuth(null); if($('loginPassword')) $('loginPassword').value=''; if($('loginNip')) $('loginNip').focus(); }
function safeText(value){ return String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function normalizeWorkerStatus(status, nip){ const raw=String(status || '').trim().toLowerCase(); if(raw==='pkwt') return 'PKWT'; if(raw==='freelance' || raw==='free lance' || raw==='tenaga freelance') return 'Freelance'; const n = parseInt(String(nip).replace(/\D/g,''),10); return Number.isFinite(n) && n < 1000 ? 'PKWT' : 'Freelance'; }
function workerType(w){ return normalizeWorkerStatus(w && (w.status || w.statusPekerja || w.type), w && w.nip); }
function cleanWorker(w,i){ const nip=String(w.nip||''); return { no:Number(w.no)||i+1, nip, name:String(w.name||''), status:normalizeWorkerStatus(w.status || w.statusPekerja || w.type, nip), regu:normalizeRegu(w.regu || w.namaRegu || w.nama_regu || ''), s1:Boolean(w.s1), s2:Boolean(w.s2), s3:Boolean(w.s3), checkIn:w.checkIn||'', checkOut:w.checkOut||'' }; }
function shouldShowLoggedCoordinatorWorkerInActiveUnit(){
  if(!currentUser || currentRole()!=='koordinator') return false;
  const ident=accountCoordinatorWorkerIdentity(currentUser);
  if(!ident.nip || !ident.name) return false;
  const ownKey=unitKey(currentUser.unit);
  const key=activeUnitKey();
  if(ownKey===BAHAN_BAKU_PAGI_KEY) return key===BAHAN_BAKU_PAGI_KEY;
  return key===ownKey;
}
function ensureLoggedCoordinatorWorkerAtTop(){
  if(!shouldShowLoggedCoordinatorWorkerInActiveUnit()) return false;
  const ident=accountCoordinatorWorkerIdentity(currentUser);
  const rows=Array.isArray(state.workers) ? state.workers : [];
  let picked=null;
  const remaining=[];
  let changed=false;
  rows.forEach(w=>{
    if(workerMatchesCoordinatorIdentity(w, ident)){
      if(!picked) picked=w;
      else changed=true;
    }else{
      remaining.push(w);
    }
  });
  const base=picked || { nip:ident.nip, name:ident.name, status:normalizeWorkerStatus('', ident.nip), s1:false, s2:false, s3:false, checkIn:'', checkOut:'' };
  const coordinatorRow={
    ...cleanWorker(base, 0),
    no:1,
    nip:ident.nip,
    name:ident.name,
    status:normalizeWorkerStatus(base.status || base.statusPekerja || base.type, ident.nip),
    regu:normalizeRegu(base.regu || base.namaRegu || base.nama_regu || ''),
    s1:Boolean(base.s1),
    s2:Boolean(base.s2),
    s3:Boolean(base.s3),
    checkIn:base.checkIn || '',
    checkOut:base.checkOut || '',
    isCoordinatorWorker:true
  };
  if(!picked) changed=true;
  if(rows[0] && !workerMatchesCoordinatorIdentity(rows[0], ident)) changed=true;
  if(picked && (String(picked.nip || '').trim()!==ident.nip || String(picked.name || '').trim()!==ident.name)) changed=true;
  state.workers=[coordinatorRow, ...remaining];
  normalizeNo();
  return changed;
}
function todayISO(){ return new Date().toISOString().slice(0,10); }
function yesterdayISO(){ const d=new Date(); d.setDate(d.getDate()-1); return d.toISOString().slice(0,10); }
function defaultWorkersForUnit(unitKeyValue){ return unitKeyValue === 'muatan_breeder' ? JSON.parse(JSON.stringify(defaultWorkers)) : []; }
function ensureBaseWorkers(){
  if(!state.reportDate) state.reportDate=todayISO();
  if(state.allowEmptyWorkers) { ensureLoggedCoordinatorWorkerAtTop(); normalizeNo(); return; }
  if(activeUnitKey()==='muatan_breeder'){
    const first=state.workers.find(w=>String(w.nip)==='133');
    if(!first){ state.workers.unshift({no:1,nip:'133',name:'Moch. Sholeh',s1:false,s2:false}); }
    else { first.name='Moch. Sholeh'; }
  }
  ensureLoggedCoordinatorWorkerAtTop();
  normalizeNo();
}
async function loadBahanBakuSharedWorkerSource(sourceKey){
  let result=null;
  const bridge=await waitFirebase();
  if(bridge && bridge.enabled && bridge.loadAppState){
    try{
      const remote=await bridge.loadAppState(sourceKey);
      if(remote && Array.isArray(remote.workers)) result=remote;
    }catch(err){ console.warn('Data pekerja pool Bahan Baku dari Firestore gagal dibaca: '+sourceKey, err); }
  }
  if(!result){
    try{
      const cached=unwrapCacheEnvelope(safeLocalGetJSON(`${STORAGE_KEY}_${sourceKey}`, null));
      if(cached && Array.isArray(cached.workers)) result=cached;
    }catch(err){ console.warn('Cache pekerja pool Bahan Baku gagal dibaca: '+sourceKey, err); }
  }
  return result || {workers:[], allowEmptyWorkers:false};
}
async function loadBahanBakuSharedWorkerPool(activityKey){
  const sources=[BAHAN_BAKU_PAGI_KEY];
  if(activityKey && !sources.includes(activityKey)) sources.push(activityKey);
  let allowEmpty=false;
  const merged=[];
  const seen=new Set();
  for(const sourceKey of sources){
    try{
      const base=await loadBahanBakuSharedWorkerSource(sourceKey);
      if(base && base.allowEmptyWorkers) allowEmpty=true;
      normalizeWorkersForUnit((base && base.workers) || [], sourceKey).forEach(w=>{
        const nip=String(w.nip||'').trim();
        if(!nip || seen.has(nip)) return;
        seen.add(nip);
        merged.push({...w, no:merged.length+1, s1:false, s2:false, s3:false});
      });
    }catch(err){
      console.warn('Data pekerja pool Bahan Baku gagal dibaca dari '+sourceKey+'.', err);
    }
  }
  return {workers:merged, allowEmpty};
}
async function loadSiloActivityState(reportDateOverride){
  const currentDate=reportDateOverride || state.reportDate || todayISO();
  let baseWorkers=[];
  let allowEmpty=false;
  const sharedPool=await loadBahanBakuSharedWorkerPool(SILO_KEY);
  baseWorkers=(sharedPool.workers || []).filter(w=>allowWorkerInBahanBakuActivity(w, SILO_KEY)).map((w,i)=>({...w, no:i+1, s1:false, s2:false, s3:false, kegiatan:'Silo'}));
  allowEmpty=Boolean(sharedPool.allowEmpty);
  let saved=null;
  try{ saved=unwrapCacheEnvelope(safeLocalGetJSON(`${STORAGE_KEY}_${SILO_KEY}`, null)); }catch(err){ saved=null; }
  const bridge=await waitFirebase();
  if(bridge && bridge.enabled && bridge.loadAppState){
    try{ const remote=await bridge.loadAppState(SILO_KEY); if(remote && Array.isArray(remote.workers)) saved=remote; }catch(err){ console.warn('Data Silo Firebase gagal dibaca, memakai data lokal.', err); }
  }
  const selectedByNip=new Map();
  if(saved && Array.isArray(saved.workers) && (!saved.reportDate || saved.reportDate===currentDate)){
    saved.workers.map(cleanWorker).forEach(w=>selectedByNip.set(String(w.nip), {s1:Boolean(w.s1), s2:Boolean(w.s2), s3:Boolean(w.s3)}));
  }
  const workers=baseWorkers.map(w=>{ const selected=selectedByNip.get(String(w.nip)) || {}; return {...w, s1:Boolean(selected.s1), s2:Boolean(selected.s2), s3:Boolean(selected.s3), kegiatan:'Silo'}; });
  return { company:'PT. BUDI INTI PERKASA', reportDate:reportDateOverride ? currentDate : ((saved && saved.reportDate) || currentDate), workers, allowEmptyWorkers:allowEmpty };
}
function getBlockedOverzakWorkerNips(dateValue){
  const blocked=new Set();
  const addFromPayload=(payload)=>{
    rowsFromAttendancePayload(payload).forEach(r=>{
      if(r && r.s1 && r.nip) blocked.add(String(r.nip).trim());
    });
  };
  try{
    const data=unwrapCacheEnvelope(safeLocalGetJSON(`${ATTENDANCE_KEY}_${BAHAN_BAKU_PAGI_KEY}_${dateValue}`, null));
    if(data) addFromPayload(data);
  }catch(err){ console.warn('Filter Overzak dari Bongkaran gagal.', err); }
  try{
    const data=unwrapCacheEnvelope(safeLocalGetJSON(`${ATTENDANCE_KEY}_${SILO_KEY}_${dateValue}`, null));
    if(data) addFromPayload(data);
  }catch(err){ console.warn('Filter Overzak dari Silo gagal.', err); }
  return blocked;
}
async function loadOverzakActivityState(reportDateOverride){
  const currentDate=reportDateOverride || state.reportDate || todayISO();
  let baseWorkers=[];
  let allowEmpty=false;
  const sharedPool=await loadBahanBakuSharedWorkerPool(OVERZAK_KEY);
  baseWorkers=(sharedPool.workers || []).filter(w=>allowWorkerInBahanBakuActivity(w, OVERZAK_KEY)).map((w,i)=>({...w, no:i+1, s1:false, s2:false, s3:false, kegiatan:'Overzak'}));
  allowEmpty=Boolean(sharedPool.allowEmpty);
  let saved=null;
  try{ saved=unwrapCacheEnvelope(safeLocalGetJSON(`${STORAGE_KEY}_${OVERZAK_KEY}`, null)); }catch(err){ saved=null; }
  const bridge=await waitFirebase();
  if(bridge && bridge.enabled && bridge.loadAppState){
    try{ const remote=await bridge.loadAppState(OVERZAK_KEY); if(remote && Array.isArray(remote.workers)) saved=remote; }catch(err){ console.warn('Data Overzak Firebase gagal dibaca, memakai data lokal.', err); }
  }
  const selectedByNip=new Map();
  if(saved && Array.isArray(saved.workers) && (!saved.reportDate || saved.reportDate===currentDate)){
    saved.workers.map(cleanWorker).forEach(w=>selectedByNip.set(String(w.nip), {s1:Boolean(w.s1), s2:Boolean(w.s2), s3:Boolean(w.s3)}));
  }
  const workers=baseWorkers.map(w=>{ const selected=selectedByNip.get(String(w.nip||'')) || {}; return {...w, s1:Boolean(selected.s1), s2:Boolean(selected.s2), s3:Boolean(selected.s3), kegiatan:'Overzak'}; });
  return { company:'PT. BUDI INTI PERKASA', reportDate:reportDateOverride ? currentDate : ((saved && saved.reportDate) || currentDate), workers, allowEmptyWorkers:allowEmpty };
}
async function loadState(options){
  const opt=options || {};
  const requestedDate=opt.reportDate || '';
  const unitKeyValue=activeUnitKey();
  if(isSiloKey(unitKeyValue)){
    state=await loadSiloActivityState(requestedDate);
    ensureBaseWorkers();
    await refreshBahanBakuActivityConflictCache();
    syncPendingAttendanceOnline().catch(err=>console.warn('Sinkron antrian absensi gagal.', err));
    return;
  }
  if(isOverzakKey(unitKeyValue)){
    state=await loadOverzakActivityState(requestedDate);
    ensureBaseWorkers();
    await refreshBahanBakuActivityConflictCache();
    syncPendingAttendanceOnline().catch(err=>console.warn('Sinkron antrian absensi gagal.', err));
    return;
  }
  const defaultState={ company:'PT. BUDI INTI PERKASA', reportDate: requestedDate || state.reportDate || todayISO(), workers: defaultWorkersForUnit(unitKeyValue), allowEmptyWorkers:false };
  state=defaultState;
  const bridge=await waitFirebase();
  let loadedFromFirestore=false;
  if(bridge && bridge.enabled && bridge.loadAppState){
    try{
      const remote=await bridge.loadAppState(unitKeyValue);
      if(remote && Array.isArray(remote.workers) && (!requestedDate || !remote.reportDate || remote.reportDate===requestedDate)){
        state={ company:'PT. BUDI INTI PERKASA', reportDate:requestedDate || remote.reportDate || state.reportDate || todayISO(), workers:remote.workers.map(cleanWorker), allowEmptyWorkers:Boolean(remote.allowEmptyWorkers) };
        safeLocalSetJSON(stateStorageKey(), cacheEnvelope(state, 'firestore_cache'));
        loadedFromFirestore=true;
      }
    }catch(err){ console.warn('Data Firestore gagal dibaca, memakai cache lokal.', err); }
  }
  if(!loadedFromFirestore){
    try{
      const cached=unwrapCacheEnvelope(safeLocalGetJSON(stateStorageKey(), null));
      if(cached && Array.isArray(cached.workers) && (!requestedDate || !cached.reportDate || cached.reportDate===requestedDate)) state={ company:'PT. BUDI INTI PERKASA', reportDate:requestedDate || cached.reportDate || todayISO(), workers:cached.workers.map(cleanWorker), allowEmptyWorkers:Boolean(cached.allowEmptyWorkers) };
    }catch(err){ console.warn('Cache lokal gagal dibaca.', err); }
  }
  ensureBaseWorkers();
  if(!isAdmin() && isCommercialKey(unitKeyValue)) await refreshCommercialDraftFromFirestore();
  if(!isAdmin() && activeUnitKey()===BAHAN_BAKU_PAGI_KEY) await refreshBahanBakuOverzakDraftFromFirestore();
  enforceSingleShiftInputRule();
  await refreshBahanBakuActivityConflictCache();
  syncPendingAttendanceOnline().catch(err=>console.warn('Sinkron antrian absensi gagal.', err));
}
function saveState(){
  if(!isAdmin() && isCommercialKey(activeUnitKey())){ saveCommercialDraftSelection(); return Promise.resolve(false); }
  enforceSingleShiftInputRule();
  safeLocalSetJSON(stateStorageKey(), cacheEnvelope(state, 'pending_or_cache'));
  const bridge=window.AbsensiFirebase;
  if(bridge && bridge.enabled && bridge.saveAppState){
    return bridge.saveAppState(activeUnitKey(), state, currentUser)
      .then(()=>{ safeLocalSetJSON(stateStorageKey(), cacheEnvelope(state, 'firestore_cache')); return true; })
      .catch(err=>{ console.warn('Sinkron Firestore gagal. Cache lokal tetap disimpan.', err); return false; });
  }
  return Promise.resolve(false);
}

function bahanBakuOverzakDraftKey(){ return `${STORAGE_KEY}_${BAHAN_BAKU_PAGI_KEY}_overzak_${state.reportDate || todayISO()}`; }
function readBahanBakuOverzakDraft(){ const data=unwrapCacheEnvelope(safeLocalGetJSON(bahanBakuOverzakDraftKey(), [])); if(Array.isArray(data)) return data; if(data && Array.isArray(data.rows)) return data.rows; return []; }
async function refreshBahanBakuOverzakDraftFromFirestore(){
  const result=await loadMasterDataPrimary(overzakDraftDocId(), bahanBakuOverzakDraftKey(), []);
  const data=unwrapCacheEnvelope(result.data);
  if(Array.isArray(data)) return data;
  if(data && Array.isArray(data.rows)) return data.rows;
  return [];
}
function getBlockedOverzakEmbeddedNips(){
  const blocked=new Set();
  try{ (state.workers||[]).forEach(w=>{ if(w && w.s1 && w.nip) blocked.add(String(w.nip).trim()); }); }catch(err){}
  try{
    const data=unwrapCacheEnvelope(safeLocalGetJSON(`${ATTENDANCE_KEY}_${SILO_KEY}_${state.reportDate || todayISO()}`, null));
    if(data){ rowsFromAttendancePayload(data).forEach(r=>{ if(r && r.s1 && r.nip) blocked.add(String(r.nip).trim()); }); }
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
  const payload={ reportDate:state.reportDate || todayISO(), rows, updatedAt:new Date().toISOString() };
  saveMasterDataFirestoreFirst(overzakDraftDocId(), bahanBakuOverzakDraftKey(), payload).catch(err=>console.warn('Simpan draft Overzak Firestore gagal.', err));
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
  }).join('')}</div>` : '<div class="empty">Tidak ada pekerja tersedia untuk Overzak. Import pekerja Overzak dari Admin > Import Data.</div>';
  return `<div class="commercial-activity-section bahan-baku-overzak overzak-card-section"><div class="commercial-activity-title">Input Jadwal Kegiatan Overzak - Shift 1, Shift 2 &amp; Shift 3</div>${body}</div>`;
}


function shiftLabelFromKey(shiftKey){ return shiftKey==='s1' ? 'Shift 1' : (shiftKey==='s2' ? 'Shift 2' : 'Shift 3'); }
function scheduleDateSelected(){ const el=$('reportDate'); const value=el ? String(el.value || '').trim() : String(state.reportDate || '').trim(); return value; }
function scheduleDateRequiredMessage(){ return 'Tanggal jadwal wajib dipilih sebelum memilih shift atau menyimpan.'; }
let scheduleActiveDateStatus={unitKey:'',date:'',state:'idle',savedCount:0,checkedAt:0,source:''};
let scheduleActiveDateStatusSeq=0;
let scheduleEditSession={unitKey:'',date:'',unlocked:false,dirty:false,baselineState:null,baselineDrafts:null};
function clonePlain(value){ try{ return value===undefined ? undefined : JSON.parse(JSON.stringify(value)); }catch(err){ return value; } }
function scheduleActiveKey(){ return `${activeUnitKey()}__${scheduleDateSelected() || ''}`; }
function resetScheduleEditSession(){ scheduleEditSession={unitKey:activeUnitKey(),date:scheduleDateSelected() || '',unlocked:false,dirty:false,baselineState:null,baselineDrafts:null}; }
function scheduleStatusInfoForActiveDate(){ const dateValue=scheduleDateSelected(); return (scheduleActiveDateStatus && scheduleActiveDateStatus.unitKey===activeUnitKey() && scheduleActiveDateStatus.date===dateValue) ? scheduleActiveDateStatus : null; }
function scheduleHasExistingDataActive(){ const info=scheduleStatusInfoForActiveDate(); return Boolean(info && info.state==='has_data'); }
function scheduleEditUnlockedForActiveDate(){ return Boolean(scheduleEditSession && scheduleEditSession.unlocked && scheduleEditSession.unitKey===activeUnitKey() && scheduleEditSession.date===scheduleDateSelected()); }
function scheduleInputLocked(){ return Boolean(scheduleHasExistingDataActive() && !scheduleEditUnlockedForActiveDate()); }
function scheduleHasUnsavedChanges(){ return Boolean(scheduleEditSession && scheduleEditSession.dirty && scheduleEditSession.unitKey===activeUnitKey() && scheduleEditSession.date===scheduleDateSelected()); }
function currentScheduleDraftSnapshot(){
  const drafts={};
  try{ drafts.stateStorageKey=stateStorageKey(); drafts.stateValue=localStorage.getItem(drafts.stateStorageKey); }catch(err){}
  try{ drafts.commercialKey=commercialDraftStorageKey(); drafts.commercialValue=localStorage.getItem(drafts.commercialKey); }catch(err){}
  try{ drafts.overzakKey=bahanBakuOverzakDraftKey(); drafts.overzakValue=localStorage.getItem(drafts.overzakKey); }catch(err){}
  return drafts;
}
function restoreScheduleDraftSnapshot(drafts){
  if(!drafts) return;
  [['stateStorageKey','stateValue'],['commercialKey','commercialValue'],['overzakKey','overzakValue']].forEach(pair=>{
    const key=drafts[pair[0]], value=drafts[pair[1]];
    if(!key) return;
    try{ if(value===null || value===undefined) localStorage.removeItem(key); else localStorage.setItem(key,value); }catch(err){}
  });
}
function ensureScheduleEditBaseline(){ if(!scheduleDateSelected()) return; if(!scheduleEditSession || scheduleEditSession.unitKey!==activeUnitKey() || scheduleEditSession.date!==scheduleDateSelected() || (!scheduleEditSession.baselineState && !scheduleEditSession.baselineDrafts)){ scheduleEditSession={unitKey:activeUnitKey(),date:scheduleDateSelected(),unlocked:scheduleEditUnlockedForActiveDate() || !scheduleHasExistingDataActive(),dirty:false,baselineState:clonePlain(state),baselineDrafts:currentScheduleDraftSnapshot()}; } }
function markScheduleDirty(){ if(scheduleInputLocked()) return; if(!scheduleDateSelected()) return; ensureScheduleEditBaseline(); scheduleEditSession.dirty=true; updateScheduleSafetyUI(); }
function scheduleExistingLockedDisabledAttr(){ return scheduleInputLocked() ? ' disabled data-schedule-locked="1" title="Jadwal tanggal ini terkunci. Klik Edit Jadwal Tanggal Ini untuk mengubah."' : ''; }
function applyScheduleInputLockUI(){
  const locked=scheduleInputLocked();
  document.body.classList.toggle('schedule-existing-locked', locked);
  document.querySelectorAll('input[data-shift],[data-commercial-shift],[data-commercial-dock-plan],[data-commercial-regu-select],[data-commercial-activity-shift],[data-commercial-coordinator-shift],[data-overzak-shift],#activitySelect').forEach(el=>{
    const allowed=hasPermission('inputAttendance');
    const baseBlocked=!allowed || el.dataset.bahanBakuConflict==='1' || el.dataset.commercialPlanDisabled==='1';
    el.disabled=baseBlocked || locked;
    if(locked) el.dataset.scheduleLocked='1'; else delete el.dataset.scheduleLocked;
  });
  const editBtn=$('btnEditSchedule'); if(editBtn) editBtn.style.display=(scheduleHasExistingDataActive() && !scheduleEditUnlockedForActiveDate() && hasPermission('inputAttendance')) ? '' : 'none';
  const cancelBtn=$('btnCancelSchedule'); if(cancelBtn) cancelBtn.style.display=(scheduleEditUnlockedForActiveDate() || scheduleHasUnsavedChanges()) ? '' : 'none';
}
function beginEditSchedule(){
  const dateValue=assertScheduleDateSelected(); if(!dateValue) return;
  if(!scheduleHasExistingDataActive()){ alert('Tanggal aktif masih kosong. Jadwal baru bisa langsung diisi tanpa menekan tombol Edit.'); return; }
  const ok=confirm(`Jadwal pada tanggal aktif sudah ada.

Tanggal: ${formatLongDate(dateValue)}

Klik OK jika Anda memang ingin membuka mode edit untuk mengubah jadwal tanggal ini.`);
  if(!ok) return;
  scheduleEditSession={unitKey:activeUnitKey(),date:dateValue,unlocked:true,dirty:false,baselineState:clonePlain(state),baselineDrafts:currentScheduleDraftSnapshot()};
  updateScheduleSafetyUI();
  auditLog('open_edit_existing_schedule','attendance',{message:'Koordinator membuka mode edit jadwal tersimpan', unitKey:activeUnitKey(), unitName:activeUnitName(), reportDate:dateValue}).catch(()=>{});
}
async function cancelScheduleChanges(){
  const dateValue=scheduleDateSelected();
  const hasDirty=scheduleHasUnsavedChanges();
  const ok=!hasDirty || confirm(`Batalkan perubahan jadwal yang belum disimpan untuk ${formatLongDate(dateValue)}?

Data akan dikembalikan ke kondisi saat tombol Edit dibuka.`);
  if(!ok) return;
  const hadBaseline=Boolean(scheduleEditSession && scheduleEditSession.baselineState);
  if(scheduleEditSession && scheduleEditSession.baselineDrafts) restoreScheduleDraftSnapshot(scheduleEditSession.baselineDrafts);
  if(scheduleEditSession && scheduleEditSession.baselineState) state=clonePlain(scheduleEditSession.baselineState);
  if(dateValue) state.reportDate=dateValue;
  if(hadBaseline && !isCommercialKey(activeUnitKey())) await saveState();
  resetScheduleEditSession();
  if(!hadBaseline) await loadState({reportDate:dateValue});
  state.reportDate=dateValue || state.reportDate;
  await renderAll();
  await refreshScheduleActiveDateStatus(state.reportDate, {force:true});
  auditLog('cancel_schedule_edit','attendance',{message:'Perubahan jadwal dibatalkan sebelum simpan', unitKey:activeUnitKey(), unitName:activeUnitName(), reportDate:dateValue}).catch(()=>{});
}
function confirmLeaveUnsavedScheduleChanges(){
  if(!scheduleHasUnsavedChanges()) return true;
  return confirm(`Ada perubahan jadwal yang belum disimpan untuk ${formatLongDate(scheduleDateSelected())}.

Jika lanjut, perubahan yang belum disimpan bisa hilang. Lanjutkan?`);
}
function scheduleSummaryTextFromPayload(payload){
  const rows=compactScheduleRowsFromPayload(payload || {});
  const dateText=formatLongDate(payload && payload.reportDate);
  const unitText=(payload && (payload.unitName || payload.unit)) || activeUnitName();
  const lineForShift=(key,label)=>{
    const names=rows.filter(r=>r[key]).map(r=>`${r.name || r.nip}${r.kegiatan ? ' - '+r.kegiatan : ''}${r.loadingDock ? ' - LD '+r.loadingDock : ''}`);
    const preview=names.slice(0,18).map(x=>`- ${x}`).join('\n') || '- Kosong';
    const more=names.length>18 ? `\n...dan ${names.length-18} lainnya` : '';
    return `${label} (${names.length}):
${preview}${more}`;
  };
  return `Ringkasan jadwal sebelum simpan

Unit/Kegiatan: ${unitText}
Tanggal: ${dateText}
Total baris terpilih: ${rows.length}

${lineForShift('s1','Shift 1')}

${lineForShift('s2','Shift 2')}

${lineForShift('s3','Shift 3')}

Lanjut simpan jadwal ini?`;
}
function confirmScheduleSaveSummary(payload){ return confirm(scheduleSummaryTextFromPayload(payload)); }
function scheduleHasSavedRows(payload){ return rowsFromAttendancePayload(payload || {}).some(r=>r && (r.s1 || r.s2 || r.s3)); }
function scheduleSavedRowsCount(payload){ return rowsFromAttendancePayload(payload || {}).filter(r=>r && (r.s1 || r.s2 || r.s3)).length; }
function resetScheduleActiveDateStatus(){ scheduleActiveDateStatus={unitKey:activeUnitKey(),date:'',state:'idle',savedCount:0,checkedAt:Date.now(),source:''}; resetScheduleEditSession(); }
async function refreshScheduleActiveDateStatus(dateValue, opt={}){
  const date=String(dateValue || scheduleDateSelected() || '').trim();
  const unitKeyValue=activeUnitKey();
  const seq=++scheduleActiveDateStatusSeq;
  if(!date){ resetScheduleActiveDateStatus(); updateScheduleSafetyUI(); return scheduleActiveDateStatus; }
  if(!opt.silent){
    scheduleActiveDateStatus={unitKey:unitKeyValue,date,state:'checking',savedCount:0,checkedAt:Date.now(),source:''};
    updateScheduleSafetyUI();
  }
  try{
    const existing=await getExistingAttendanceForDate(unitKeyValue, date);
    if(seq!==scheduleActiveDateStatusSeq || unitKeyValue!==activeUnitKey() || date!==scheduleDateSelected()) return scheduleActiveDateStatus;
    const hasData=scheduleHasSavedRows(existing);
    scheduleActiveDateStatus={unitKey:unitKeyValue,date,state:hasData?'has_data':'empty',savedCount:hasData?scheduleSavedRowsCount(existing):0,checkedAt:Date.now(),source:existing?'local_or_firestore':''};
  }catch(err){
    console.warn('Cek status jadwal tanggal aktif gagal.', err);
    if(seq===scheduleActiveDateStatusSeq) scheduleActiveDateStatus={unitKey:unitKeyValue,date,state:'error',savedCount:0,checkedAt:Date.now(),source:''};
  }
  updateScheduleSafetyUI();
  return scheduleActiveDateStatus;
}
function updateScheduleSafetyUI(){
  const dateValue=scheduleDateSelected();
  const status=$('scheduleSafetyStatus');
  const btn=$('btnSaveSchedule');
  const canSave=hasPermission('saveAttendance');
  if(status){
    if(!dateValue){
      status.className='schedule-safety-status warn';
      status.innerHTML='Tanggal aktif: Belum dipilih<span class="small">Status jadwal: BELUM BISA DICEK. Pilih tanggal dulu sebelum memilih shift dan menyimpan jadwal. Tombol Simpan dikunci untuk mencegah data tanggal lama berubah tanpa sengaja.</span>';
    }else{
      const selectedCount=selectedWorkers().length;
      const statusInfo=scheduleStatusInfoForActiveDate();
      const dirtyNote=scheduleHasUnsavedChanges() ? '<div class="schedule-edit-note">Ada perubahan yang belum disimpan.</div>' : '';
      if(!statusInfo || statusInfo.state==='checking'){
        status.className='schedule-safety-status';
        status.innerHTML=`Tanggal aktif: ${safeText(formatLongDate(dateValue))}<span class="small">Status jadwal: SEDANG DICEK... Sistem sedang memeriksa apakah tanggal aktif sudah punya data.</span>${dirtyNote}`;
      }else if(statusInfo.state==='has_data'){
        status.className='schedule-safety-status warn';
        const modeText=scheduleEditUnlockedForActiveDate() ? 'Mode: EDIT JADWAL TERSIMPAN. Periksa perubahan sebelum simpan.' : 'Mode: TERKUNCI. Klik tombol Edit Jadwal Tanggal Ini sebelum mengubah.';
        status.innerHTML=`Tanggal aktif: ${safeText(formatLongDate(dateValue))}<span class="small">Status jadwal: SUDAH ADA DATA (${Number(statusInfo.savedCount||0)} baris tersimpan). ${modeText}</span>${dirtyNote}`;
      }else if(statusInfo.state==='empty'){
        status.className='schedule-safety-status locked';
        status.innerHTML=`Tanggal aktif: ${safeText(formatLongDate(dateValue))}<span class="small">Status jadwal: MASIH KOSONG. Mode: ${selectedCount ? 'Tambah Jadwal Baru - ada pilihan pekerja yang belum disimpan' : 'Tambah Jadwal Baru'}.</span>${dirtyNote}`;
      }else{
        status.className='schedule-safety-status warn';
        status.innerHTML=`Tanggal aktif: ${safeText(formatLongDate(dateValue))}<span class="small">Status jadwal: BELUM BERHASIL DICEK. Simpan tetap aman karena sistem akan mengecek ulang dan meminta konfirmasi jika data tanggal ini sudah ada.</span>${dirtyNote}`;
      }
    }
  }
  if(btn){ btn.disabled = !canSave || !dateValue || isSavingSchedule || scheduleInputLocked(); btn.title = !dateValue ? scheduleDateRequiredMessage() : (scheduleInputLocked() ? 'Jadwal tanggal ini terkunci. Klik Edit Jadwal Tanggal Ini untuk mengubah.' : ''); }
  applyScheduleInputLockUI();
  renderScheduleHistoryPanel();
}
function assertScheduleDateSelected(){
  const dateValue=scheduleDateSelected();
  if(!dateValue){ alert(scheduleDateRequiredMessage()); const el=$('reportDate'); if(el) el.focus(); updateScheduleSafetyUI(); return ''; }
  state.reportDate=dateValue;
  return dateValue;
}
function clearScheduleSelectionsOnly(){
  if(!isAdmin() && isCommercialKey(activeUnitKey())){
    document.querySelectorAll('[data-commercial-activity-shift],[data-commercial-coordinator-shift],[data-commercial-dock-plan]').forEach(el=>{ el.checked=false; });
    document.querySelectorAll('[data-commercial-shift]').forEach(el=>{ el.checked=false; el.disabled=true; el.dataset.commercialPlanDisabled='1'; });
    commercialScheduleRowsCache=(commercialScheduleRowsCache||[]).map(r=>({...r,schedulePlan:'',s1:false,s2:false,s3:false}));
    Object.keys(commercialActivityRowsCache||{}).forEach(k=>{ commercialActivityRowsCache[k]=(commercialActivityRowsCache[k]||[]).map(r=>({...r,s1:false,s2:false,s3:false})); });
    saveCommercialDraftSelection();
    return;
  }
  (state.workers||[]).forEach(w=>{ w.s1=false; w.s2=false; w.s3=false; });
}
async function resetScheduleFormAfterSave(savedDate){
  clearScheduleSelectionsOnly();
  state.reportDate=savedDate || state.reportDate || '';
  await saveState();
  state.reportDate='';
  const dateEl=$('reportDate'); if(dateEl) dateEl.value='';
  resetScheduleActiveDateStatus();
  resetScheduleEditSession();
  updateScheduleSafetyUI();
  auditLog('reset_schedule_form_after_save','attendance',{message:'Form jadwal dikosongkan otomatis setelah simpan', savedReportDate:savedDate, unitKey:activeUnitKey(), unitName:activeUnitName()}).catch(()=>{});
}
function scheduleHistoryLocalKey(){ return 'absensi_muatan_breeder_schedule_change_history_v1'; }
function compactScheduleRowsFromPayload(payload){ return rowsFromAttendancePayload(payload).filter(r=>r && (r.s1 || r.s2 || r.s3)).map(r=>({nip:String(r.nip||''),name:String(r.name||''),s1:Boolean(r.s1),s2:Boolean(r.s2),s3:Boolean(r.s3),activityKey:r.activityKey||'',kegiatan:r.kegiatan||'',loadingDock:r.loadingDock||'',regu:r.regu||''})); }
function scheduleRowsDiff(beforePayload, afterPayload){
  const beforeRows=compactScheduleRowsFromPayload(beforePayload || {});
  const afterRows=compactScheduleRowsFromPayload(afterPayload || {});
  const keyOf=r=>[String(r.nip||''),String(r.activityKey||r.kegiatan||''),String(r.loadingDock||''),String(r.regu||'')].join('__');
  const beforeMap=new Map(beforeRows.map(r=>[keyOf(r),r]));
  const afterMap=new Map(afterRows.map(r=>[keyOf(r),r]));
  const changes=[];
  const keys=new Set([...beforeMap.keys(),...afterMap.keys()]);
  keys.forEach(k=>{
    const b=beforeMap.get(k); const a=afterMap.get(k);
    if(!b && a){ changes.push({type:'ditambah', nip:a.nip, name:a.name, shiftAfter:['s1','s2','s3'].filter(x=>a[x]).map(shiftLabelFromKey).join(', ')}); return; }
    if(b && !a){ changes.push({type:'dihapus', nip:b.nip, name:b.name, shiftBefore:['s1','s2','s3'].filter(x=>b[x]).map(shiftLabelFromKey).join(', ')}); return; }
    if(b && a && (Boolean(b.s1)!==Boolean(a.s1) || Boolean(b.s2)!==Boolean(a.s2) || Boolean(b.s3)!==Boolean(a.s3))){
      changes.push({type:'diubah', nip:a.nip || b.nip, name:a.name || b.name, shiftBefore:['s1','s2','s3'].filter(x=>b[x]).map(shiftLabelFromKey).join(', '), shiftAfter:['s1','s2','s3'].filter(x=>a[x]).map(shiftLabelFromKey).join(', ')});
    }
  });
  return {beforeCount:beforeRows.length, afterCount:afterRows.length, changes};
}
function saveScheduleChangeHistoryLocal(entry){
  try{
    const key=scheduleHistoryLocalKey();
    const rows=safeLocalGetJSON(key, []);
    const arr=Array.isArray(rows)?rows:[];
    arr.unshift(entry);
    safeLocalSetJSON(key, arr.slice(0,300));
  }catch(err){ console.warn('Riwayat perubahan jadwal lokal gagal disimpan.', err); }
}
function scheduleBackupLocalKey(){ return 'absensi_muatan_breeder_schedule_backup_before_overwrite_v1'; }
function scheduleBackupDocId(unitKeyValue, dateValue, backupId){
  return ['schedule_backup', unitKeyValue || 'unit', dateValue || 'date', backupId || Date.now()].join('_').replace(/[^A-Za-z0-9_\-]/g,'_');
}
function saveScheduleBackupLocal(entry){
  try{
    const key=scheduleBackupLocalKey();
    const rows=safeLocalGetJSON(key, []);
    const arr=Array.isArray(rows)?rows:[];
    arr.unshift(entry);
    return safeLocalSetJSON(key, arr.slice(0,500));
  }catch(err){
    console.warn('Backup jadwal lokal sebelum overwrite gagal disimpan.', err);
    return false;
  }
}
async function createScheduleBackupBeforeOverwrite(existingPayload, newPayload, diff){
  if(!existingPayload || !scheduleHasSavedRows(existingPayload)) return {ok:true, skipped:true, entry:null, online:false};
  const normalizedExisting=normalizeAttendancePayload(existingPayload);
  const normalizedIncoming=normalizeAttendancePayload(newPayload);
  const backupId='schbak_'+Date.now();
  const entry={
    id:backupId,
    backupCreatedAt:new Date().toISOString(),
    reason:'before_overwrite_schedule',
    unitKey:normalizedIncoming.unitKey || normalizedExisting.unitKey || activeUnitKey(),
    unitName:normalizedIncoming.unitName || normalizedIncoming.unit || normalizedExisting.unitName || normalizedExisting.unit || activeUnitName(),
    reportDate:normalizedIncoming.reportDate || normalizedExisting.reportDate || scheduleDateSelected(),
    attendanceDocId:attendanceDocId(normalizedExisting),
    actor:currentAuditActor(),
    beforeCount:scheduleSavedRowsCount(normalizedExisting),
    incomingCount:scheduleSavedRowsCount(normalizedIncoming),
    changedRows:diff && Array.isArray(diff.changes) ? diff.changes.length : null,
    diffPreview:diff && Array.isArray(diff.changes) ? diff.changes.slice(0,120) : [],
    previousPayload:normalizedExisting
  };
  const localOk=saveScheduleBackupLocal(entry);
  if(!localOk) return {ok:false, skipped:false, entry, online:false, reason:'local_backup_failed'};
  let online=false;
  try{
    const cloud=await saveMasterDataFirestoreFirst(scheduleBackupDocId(entry.unitKey, entry.reportDate, backupId), scheduleBackupLocalKey()+'_'+backupId, entry);
    online=Boolean(cloud && cloud.online);
  }catch(err){
    console.warn('Backup jadwal ke Firestore gagal, backup lokal tetap tersedia.', err);
  }
  auditLog('schedule_backup_before_overwrite','attendance',{message:'Backup otomatis dibuat sebelum jadwal lama ditimpa', backupId, unitKey:entry.unitKey, unitName:entry.unitName, reportDate:entry.reportDate, attendanceDocId:entry.attendanceDocId, beforeCount:entry.beforeCount, incomingCount:entry.incomingCount, changedRows:entry.changedRows, online}, normalizedExisting, null).catch(()=>{});
  return {ok:true, skipped:false, entry, online};
}

function readScheduleChangeHistoryLocal(){
  try{ const rows=safeLocalGetJSON(scheduleHistoryLocalKey(), []); return Array.isArray(rows) ? rows : []; }catch(err){ return []; }
}
function readScheduleBackupsLocal(){
  try{ const rows=safeLocalGetJSON(scheduleBackupLocalKey(), []); return Array.isArray(rows) ? rows : []; }catch(err){ return []; }
}
function scheduleHistoryActorName(actor){
  if(!actor) return '-';
  return safeText(actor.name || actor.username || actor.nip || '-');
}
function formatDateTimeLocal(iso){
  if(!iso) return '-';
  try{ const d=new Date(iso); if(isNaN(d.getTime())) return safeText(iso); return d.toLocaleString('id-ID',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}); }catch(err){ return safeText(iso); }
}
function scheduleHistoryRowsForActiveDate(){
  const dateValue=scheduleDateSelected();
  const unitKeyValue=activeUnitKey();
  if(!dateValue) return {history:[], backups:[]};
  const match=x=>x && String(x.unitKey||'')===String(unitKeyValue||'') && String(x.reportDate||'')===String(dateValue||'');
  const history=readScheduleChangeHistoryLocal().filter(match).slice(0,8);
  const backups=readScheduleBackupsLocal().filter(match).slice(0,8);
  return {history, backups};
}
function renderScheduleHistoryPanel(){
  const panel=$('scheduleHistoryPanel');
  if(!panel) return;
  const dateValue=scheduleDateSelected();
  if(!dateValue){ panel.innerHTML='<div class="schedule-history-empty">Pilih tanggal untuk melihat riwayat perubahan dan backup jadwal.</div>'; return; }
  const data=scheduleHistoryRowsForActiveDate();
  const history=data.history || [];
  const backups=data.backups || [];
  const historyHtml=history.length ? history.map(h=>{
    const changes=Array.isArray(h.changes) ? h.changes : [];
    const preview=changes.slice(0,3).map(c=>{
      if(c.type==='ditambah') return `+ ${safeText(c.name || c.nip)} (${safeText(c.shiftAfter || '')})`;
      if(c.type==='dihapus') return `- ${safeText(c.name || c.nip)} (${safeText(c.shiftBefore || '')})`;
      return `~ ${safeText(c.name || c.nip)}: ${safeText(c.shiftBefore || '-')} → ${safeText(c.shiftAfter || '-')}`;
    }).join('<br>');
    const more=changes.length>3 ? `<br>...dan ${changes.length-3} perubahan lainnya.` : '';
    return `<div class="schedule-history-item"><div class="meta"><b>${safeText(formatDateTimeLocal(h.changedAt))}</b> · ${safeText(h.unitName || activeUnitName())}<br>Oleh: ${scheduleHistoryActorName(h.actor)} · Sebelum: ${Number(h.beforeCount||0)} baris · Sesudah: ${Number(h.afterCount||0)} baris</div><div class="changes">${preview || 'Jadwal disimpan ulang.'}${more}</div></div>`;
  }).join('') : '<div class="schedule-history-empty">Belum ada riwayat perubahan lokal untuk tanggal aktif ini.</div>';
  const backupHtml=backups.length ? backups.map(b=>{
    const preview=Array.isArray(b.diffPreview) ? b.diffPreview.slice(0,3).map(c=>{
      if(c.type==='ditambah') return `+ ${safeText(c.name || c.nip)} (${safeText(c.shiftAfter || '')})`;
      if(c.type==='dihapus') return `- ${safeText(c.name || c.nip)} (${safeText(c.shiftBefore || '')})`;
      return `~ ${safeText(c.name || c.nip)}: ${safeText(c.shiftBefore || '-')} → ${safeText(c.shiftAfter || '-')}`;
    }).join('<br>') : '';
    const disabled=!hasPermission('saveAttendance') ? ' disabled title="Role ini tidak boleh memulihkan jadwal."' : '';
    return `<div class="schedule-history-item"><div class="meta"><b>Backup sebelum overwrite</b> · ${safeText(formatDateTimeLocal(b.backupCreatedAt))}<br>Oleh: ${scheduleHistoryActorName(b.actor)} · Data lama: ${Number(b.beforeCount||0)} baris · Data pengganti: ${Number(b.incomingCount||0)} baris</div><div class="changes">${preview || 'Backup data lama tersedia.'}</div><div class="schedule-history-actions"><button class="btn secondary" type="button" data-restore-schedule-backup="${safeText(b.id)}"${disabled}>Pulihkan Jadwal Sebelumnya</button></div></div>`;
  }).join('') : '<div class="schedule-history-empty">Belum ada backup overwrite untuk tanggal aktif ini.</div>';
  panel.innerHTML=`<div class="schedule-history-head"><div><strong>Riwayat Perubahan Jadwal</strong><span>${safeText(formatLongDate(dateValue))}</span></div><button class="btn secondary" type="button" id="btnRefreshScheduleHistory">Refresh</button></div><div class="schedule-history-list"><div><b>Riwayat simpan/perubahan</b></div>${historyHtml}<div style="margin-top:4px"><b>Backup untuk pemulihan</b></div>${backupHtml}</div>`;
}
async function applyRestoredAttendanceToInputState(restoredPayload){
  const restored=normalizeAttendancePayload(restoredPayload || {});
  if(!restored.reportDate) return;
  await loadState({reportDate:restored.reportDate});
  state.reportDate=restored.reportDate;
  const rows=rowsFromAttendancePayload(restored);
  if(!isAdmin() && !isCommercialKey(activeUnitKey())){
    const overzakRows=[];
    const selected=new Map();
    rows.forEach(r=>{
      const kegiatan=String(r.kegiatan || r.activityLabel || r.activityKey || '').toLowerCase();
      if(activeUnitKey()===BAHAN_BAKU_PAGI_KEY && kegiatan.includes('overzak')){ overzakRows.push(r); return; }
      if(r && r.nip) selected.set(String(r.nip).trim(), {s1:Boolean(r.s1), s2:Boolean(r.s2), s3:Boolean(r.s3)});
    });
    (state.workers||[]).forEach(w=>{
      const saved=selected.get(String(w.nip||'').trim()) || {};
      w.s1=Boolean(saved.s1);
      w.s2=Boolean(saved.s2);
      w.s3=Boolean(saved.s3);
      if(activeUnitKey()===BAHAN_BAKU_MALAM_KEY) w.s1=false;
    });
    await saveState();
    if(activeUnitKey()===BAHAN_BAKU_PAGI_KEY){
      const payload={reportDate:state.reportDate, rows:overzakRows.map(r=>({nip:String(r.nip||''), s1:Boolean(r.s1), s2:Boolean(r.s2), s3:Boolean(r.s3)})), updatedAt:new Date().toISOString(), restoredFrom:true};
      try{ await saveMasterDataFirestoreFirst(overzakDraftDocId(), bahanBakuOverzakDraftKey(), payload); }catch(err){ console.warn('Restore draft Overzak gagal disinkronkan, data laporan tetap sudah dipulihkan.', err); }
    }
  }
}
async function restoreScheduleBackup(backupId){
  if(!requirePermission('saveAttendance','Akses ditolak. Role ini tidak boleh memulihkan jadwal.')) return;
  const backups=readScheduleBackupsLocal();
  const entry=backups.find(b=>String(b && b.id)===String(backupId));
  if(!entry || !entry.previousPayload){ alert('Backup jadwal tidak ditemukan atau tidak lengkap.'); renderScheduleHistoryPanel(); return; }
  const previous=normalizeAttendancePayload(entry.previousPayload);
  const dateValue=previous.reportDate || entry.reportDate || scheduleDateSelected();
  const unitKeyValue=previous.unitKey || entry.unitKey || activeUnitKey();
  if(String(unitKeyValue)!==String(activeUnitKey())){ alert('Backup ini bukan untuk unit yang sedang aktif. Pilih unit yang sesuai terlebih dahulu.'); return; }
  const ok=confirm(`Pulihkan jadwal sebelumnya untuk ${formatLongDate(dateValue)}?

Data aktif saat ini akan ditimpa dengan backup lama (${scheduleSavedRowsCount(previous)} baris).
Sistem akan membuat backup kondisi saat ini terlebih dahulu sebelum pemulihan.`);
  if(!ok) return;
  const current=await getExistingAttendanceForDate(unitKeyValue, dateValue);
  if(current && scheduleHasSavedRows(current)){
    const safetyDiff=scheduleRowsDiff(current, previous);
    const safety=await createScheduleBackupBeforeOverwrite(current, previous, safetyDiff);
    if(!safety.ok){ alert('Backup kondisi saat ini gagal dibuat. Pemulihan dibatalkan agar data aktif tetap aman.'); return; }
  }
  const restored=saveAttendanceLocal({...previous, restoredAt:new Date().toISOString(), restoredFromBackupId:entry.id});
  let online=false;
  try{ const result=await saveAttendanceOnline(restored); online=Boolean(result && result.online); }catch(err){ console.warn('Pulihkan jadwal ke Firebase gagal, masuk antrian sinkron.', err); queuePendingAttendance(restored, err && err.message ? err.message : err); }
  if(!online){ queuePendingAttendance(restored, 'Firebase belum online saat restore'); } else { await syncPendingAttendanceOnline(); }
  const diff=scheduleRowsDiff(current || null, restored);
  const historyEntry={id:'sch_restore_'+Date.now(), changedAt:new Date().toISOString(), unitKey:restored.unitKey, unitName:restored.unitName, reportDate:restored.reportDate, attendanceDocId:restored.id, actor:currentAuditActor(), beforeCount:diff.beforeCount, afterCount:diff.afterCount, changes:diff.changes.slice(0,80), restoreFromBackupId:entry.id, online};
  saveScheduleChangeHistoryLocal(historyEntry);
  auditLog('restore_schedule_from_backup','attendance',{message:'Jadwal dipulihkan dari backup sebelumnya', backupId:entry.id, unitKey:restored.unitKey, unitName:restored.unitName, reportDate:restored.reportDate, attendanceDocId:restored.id, beforeCount:diff.beforeCount, afterCount:diff.afterCount, changedRows:diff.changes.length, online}, current, restored).catch(()=>{});
  resetScheduleEditSession();
  await applyRestoredAttendanceToInputState(restored);
  await renderAll();
  await refreshScheduleActiveDateStatus(restored.reportDate,{force:true});
  renderScheduleHistoryPanel();
  alert(`${online ? 'Jadwal berhasil dipulihkan dan tersimpan online.' : 'Jadwal berhasil dipulihkan secara lokal dan masuk antrian sinkron.'}\n\nSilakan cek ulang laporan tanggal aktif.`);
}
function confirmEmptyScheduleBlocked(){
  alert(`Simpan jadwal dibatalkan untuk keamanan.

Tidak ada pekerja yang dipilih pada tanggal aktif. Sistem tidak mengizinkan penyimpanan jadwal kosong agar data lama tidak terhapus karena salah klik.

Jika memang ingin mengosongkan jadwal tanggal ini, lakukan melalui prosedur khusus/admin setelah memastikan backup tersedia.`);
  return false;
}
async function getExistingAttendanceForDate(unitKeyValue, dateValue){
  let payload=null;
  try{ payload=unwrapCacheEnvelope(safeLocalGetJSON(`${ATTENDANCE_KEY}_${unitKeyValue}_${dateValue}`, null)); }catch(err){ payload=null; }
  const bridge=await waitFirebase();
  if(bridge && bridge.enabled && bridge.loadAttendance){
    try{ const remote=await bridge.loadAttendance(unitKeyValue,dateValue); if(remote) payload=remote; }catch(err){ console.warn('Cek data jadwal tersimpan gagal, memakai cache lokal jika ada.', err); }
  }
  return payload;
}
async function confirmOverwriteIfNeeded(newPayload){
  const existing=await getExistingAttendanceForDate(newPayload.unitKey, newPayload.reportDate);
  if(existing && rowsFromAttendancePayload(existing).some(r=>r && (r.s1 || r.s2 || r.s3))){
    const diff=scheduleRowsDiff(existing, newPayload);
    const preview=diff.changes.slice(0,8).map(c=>{
      if(c.type==='ditambah') return `+ ${c.name || c.nip} masuk ${c.shiftAfter}`;
      if(c.type==='dihapus') return `- ${c.name || c.nip} dihapus dari ${c.shiftBefore}`;
      return `~ ${c.name || c.nip}: ${c.shiftBefore || '-'} menjadi ${c.shiftAfter || '-'}`;
    }).join('\n');
    const more=diff.changes.length>8 ? `\n...dan ${diff.changes.length-8} perubahan lainnya.` : '';
    const ok=confirm(`Jadwal untuk tanggal ${formatLongDate(newPayload.reportDate)} sudah pernah disimpan.\n\nAnda yakin ingin memperbarui data tanggal ini?\n\nRingkasan perubahan:\n${preview || 'Data akan disimpan ulang tanpa perubahan pekerja yang besar.'}${more}`);
    return {ok, existing, diff};
  }
  return {ok:true, existing:null, diff:null};
}
function selectedWorkers(){
  if(!isAdmin() && isCommercialKey(activeUnitKey())) return selectedCommercialReportRows();
  const key=activeUnitKey();
  const defaultKegiatan=isOverzakKey(key) ? 'Overzak' : (isSiloKey(key) ? 'Silo' : (key===BAHAN_BAKU_PAGI_KEY || key===BAHAN_BAKU_MALAM_KEY ? 'Bongkaran' : ''));
  return (state.workers||[]).filter(w => allowWorkerInBahanBakuActivity(w, key) && (w.s1 || w.s2 || w.s3)).sort((a,b)=>(Number(a.no)||0)-(Number(b.no)||0)).map((w,i)=>{
    const row={...w, no:i+1, kegiatan:w.kegiatan || defaultKegiatan};
    if(key===BAHAN_BAKU_MALAM_KEY) row.s1=false;
    return row;
  }).filter(w=>w.s1 || w.s2 || w.s3);
}

function formatLongDate(dateValue){ if(!dateValue) return 'HARI - TANGGAL'; const date = new Date(dateValue + 'T00:00:00'); const hari=['MINGGU','SENIN','SELASA','RABU','KAMIS','JUMAT','SABTU'][date.getDay()]; const bulan=['JANUARI','FEBRUARI','MARET','APRIL','MEI','JUNI','JULI','AGUSTUS','SEPTEMBER','OKTOBER','NOVEMBER','DESEMBER'][date.getMonth()]; return `HARI ${hari} - TANGGAL ${String(date.getDate()).padStart(2,'0')} ${bulan} ${date.getFullYear()}`; }
function updateCounts(){
  if(coordinatorSingleShiftMode() || coordinatorBahanBakuMalamMode()) enforceSingleShiftInputRule();
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
function syncInputs(){ if($('reportDate')) $('reportDate').value = (state.reportDate === '' ? '' : (state.reportDate || todayISO())); updateCoordinatorActivityUI(); updateScheduleSafetyUI(); }
function renderDropdowns(){ const pkwt = state.workers.filter(w=>workerType(w)==='PKWT').sort((a,b)=>a.no-b.no); const free = state.workers.filter(w=>workerType(w)==='Freelance').sort((a,b)=>a.no-b.no); $('pkwtCount').textContent = `${pkwt.length} data`; $('freelanceCount').textContent = `${free.length} data`; const make = (rows, text) => '<option value="">'+text+'</option>' + rows.map(w=>`<option value="${w.no}">${safeText(w.nip)} - ${safeText(w.name)}</option>`).join(''); $('selectPkwt').innerHTML = make(pkwt, 'Pilih pekerja PKWT'); $('selectFreelance').innerHTML = make(free, 'Pilih pekerja Freelance'); }

function getBlockedSiloShift1WorkerNips(){
  return new Set();
}

function getLocalLoadingDocks(){
  const cached=unwrapCacheEnvelope(safeLocalGetJSON(LOADING_DOCKS_KEY, null));
  const arr=Array.isArray(cached) ? cached : (cached && Array.isArray(cached.items) ? cached.items : null);
  if(Array.isArray(arr) && arr.length) return arr.map(normalizeDockName).filter(Boolean);
  return ['01','02','03'];
}
async function getLoadingDocks(){
  let rows=getLocalLoadingDocks();
  const result=await loadMasterDataPrimary('commercial_loading_docks', LOADING_DOCKS_KEY, null);
  const remote=unwrapCacheEnvelope(result.data);
  if(remote && Array.isArray(remote.items) && remote.items.length) rows=remote.items.map(normalizeDockName).filter(Boolean);
  return Array.from(new Set(rows)).sort((a,b)=>(parseInt(a,10)||999)-(parseInt(b,10)||999) || a.localeCompare(b));
}
async function saveLoadingDocks(rows){
  const clean=Array.from(new Set((rows||[]).map(normalizeDockName).filter(Boolean))).sort((a,b)=>(parseInt(a,10)||999)-(parseInt(b,10)||999) || a.localeCompare(b));
  await saveMasterDataPrimary('commercial_loading_docks', LOADING_DOCKS_KEY, {items:clean});
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
function normalizeCommercialDockPlan(value){ const v=String(value || '').trim().toLowerCase(); return v==='pagi' || v==='siang' ? v : ''; }
function defaultCommercialDockPlan(dockValue){
  const n=parseInt(normalizeDockName(dockValue),10);
  if(n>=1 && n<=6) return 'pagi';
  if(n>=7 && n<=16) return 'siang';
  return '';
}
function commercialPlanDefaultShifts(planValue){
  const plan=normalizeCommercialDockPlan(planValue);
  if(plan==='pagi') return {s1:true, s2:true, s3:false};
  if(plan==='siang') return {s1:false, s2:true, s3:false};
  return {s1:false, s2:false, s3:false};
}
function commercialDockShiftDisabledAttr(planValue){ return normalizeCommercialDockPlan(planValue) ? '' : ' disabled data-commercial-plan-disabled="1"'; }
function readCommercialDraftData(){
  const saved=unwrapCacheEnvelope(safeLocalGetJSON(commercialDraftStorageKey(), null));
  return { rows:Array.isArray(saved && saved.rows) ? saved.rows : [], activities:(saved && saved.activities && typeof saved.activities==='object') ? saved.activities : {}, coordinators:Array.isArray(saved && saved.coordinators) ? saved.coordinators : [] };
}
async function refreshCommercialDraftFromFirestore(){
  const result=await loadMasterDataPrimary(commercialDraftDocId(), commercialDraftStorageKey(), null);
  const saved=unwrapCacheEnvelope(result.data);
  return { rows:Array.isArray(saved && saved.rows) ? saved.rows : [], activities:(saved && saved.activities && typeof saved.activities==='object') ? saved.activities : {}, coordinators:Array.isArray(saved && saved.coordinators) ? saved.coordinators : [] };
}
function readCommercialDraftRows(){ return readCommercialDraftData().rows; }
function commercialActivitySelectedMap(activityKey){
  const arr=readCommercialDraftData().activities[activityKey] || [];
  return new Map((Array.isArray(arr)?arr:[]).map(r=>[String(r.nip||''), {s1:Boolean(r.s1), s2:Boolean(r.s2), s3:Boolean(r.s3)}]));
}
function commercialCoordinatorSelectedMap(){
  const arr=readCommercialDraftData().coordinators || [];
  return new Map((Array.isArray(arr)?arr:[]).map(r=>[String(r.nip||''), {s1:Boolean(r.s1), s2:Boolean(r.s2), s3:Boolean(r.s3)}]));
}
function coordinatorAccountWorkerRowsForUnit(unitKeyValue){
  const targetKey=unitKey(unitKeyValue || activeUnitKey());
  const accounts=[...getAllLoginUsers(), currentUser].filter(Boolean);
  const used=new Set();
  const rows=[];
  accounts.forEach(user=>{
    if(normalizeRole(user.role)!=='koordinator') return;
    if(user.active === false) return;
    if(unitKey(user.unit)!==targetKey) return;
    const ident=accountCoordinatorWorkerIdentity(user);
    if(!ident.nip || !ident.name) return;
    const dedupe=(ident.nip || normalizePersonName(ident.name));
    if(!dedupe || used.has(dedupe)) return;
    used.add(dedupe);
    rows.push({ no:rows.length+1, nip:ident.nip, name:ident.name, status:'Koordinator', type:'Koordinator', regu:'', s1:false, s2:false, s3:false, checkIn:'', checkOut:'', isCoordinatorWorker:true, nonReguCoordinator:true });
  });
  return rows;
}
function loadCommercialCoordinatorRows(){
  const selected=commercialCoordinatorSelectedMap();
  commercialCoordinatorRowsCache=coordinatorAccountWorkerRowsForUnit(COMMERCIAL_KEY).map((w,i)=>{
    const saved=selected.get(String(w.nip||'')) || {};
    return {...w, no:i+1, ldRegu:'Koordinator', activityKey:'commercial_coordinator', activityLabel:'Koordinator', s1:Boolean(saved.s1), s2:Boolean(saved.s2), s3:Boolean(saved.s3)};
  });
  return commercialCoordinatorRowsCache;
}
function getCommercialCoordinatorRows(){
  const rows=[];
  (commercialCoordinatorRowsCache||[]).forEach(w=>{
    const safeNip=String(w.nip||'').replace(/\"/g,'&quot;');
    const s1=document.querySelector(`[data-commercial-coordinator-shift="s1"][data-nip="${safeNip}"]`);
    const s2=document.querySelector(`[data-commercial-coordinator-shift="s2"][data-nip="${safeNip}"]`);
    const s3=document.querySelector(`[data-commercial-coordinator-shift="s3"][data-nip="${safeNip}"]`);
    const row={...w, ldRegu:'Koordinator', activityKey:'commercial_coordinator', activityLabel:'Koordinator', regu:'', loadingDock:'', s1:Boolean(s1 ? s1.checked : w.s1), s2:Boolean(s2 ? s2.checked : w.s2), s3:Boolean(s3 ? s3.checked : w.s3)};
    w.s1=row.s1; w.s2=row.s2; w.s3=row.s3;
    rows.push(row);
  });
  return rows;
}
function selectedCommercialCoordinatorReportRows(){
  return getCommercialCoordinatorRows().filter(w=>w.s1 || w.s2 || w.s3).map((w,i)=>({
    no:i+1,
    ldRegu:'Koordinator',
    nip:String(w.nip||''),
    name:String(w.name||''),
    status:'Koordinator',
    type:'Koordinator',
    regu:'',
    loadingDock:'',
    activityKey:'commercial_coordinator',
    activityLabel:'Koordinator',
    kegiatan:'Koordinator',
    s1:Boolean(w.s1),
    s2:Boolean(w.s2),
    s3:Boolean(w.s3),
    checkIn:'',
    checkOut:''
  }));
}
function renderCommercialCoordinatorSection(){
  const rows=commercialCoordinatorRowsCache || [];
  if(!rows.length) return '<div class="commercial-activity-section"><div class="commercial-activity-title">Koordinator Non-Regu</div><div class="empty">Belum ada akun koordinator Muatan Commercial yang memiliki NIP Koordinator dan Nama Koordinator. Tambahkan dari Admin &gt; Setting Akun.</div></div>';
  const body=rows.map((w,i)=>`<div class="commercial-activity-row"><div>${i+1}</div><div>${safeText(w.nip)}</div><div class="activity-worker-name">${safeText(w.name)}</div><label><input type="checkbox" data-commercial-coordinator-shift="s1" data-nip="${safeText(w.nip)}" ${w.s1?'checked':''}> S1</label><label><input type="checkbox" data-commercial-coordinator-shift="s2" data-nip="${safeText(w.nip)}" ${w.s2?'checked':''}> S2</label><label><input type="checkbox" data-commercial-coordinator-shift="s3" data-nip="${safeText(w.nip)}" ${w.s3?'checked':''}> S3</label></div>`).join('');
  return `<div class="commercial-activity-section"><div class="commercial-activity-title">Koordinator Non-Regu</div><div class="commercial-activity-head"><div>No</div><div>NIP</div><div>Nama Koordinator</div><div>Shift 1</div><div>Shift 2</div><div>Shift 3</div></div>${body}</div>`;
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
function renderCommercialActivitySections(activityKey){
  const selectedKey=activityKey ? normalizeCommercialInputActivityChoice(activityKey) : '';
  return COMMERCIAL_ACTIVITY_DEFS.filter(def=>!selectedKey || selectedKey===def.key).map(def=>{
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
      const planInput=document.querySelector(`[data-commercial-dock-plan][data-dock="${dock}"]:checked`);
      const cached=(commercialScheduleRowsCache||[]).find(x=>normalizeDockName(x.dock)===dock) || {};
      const plan=normalizeCommercialDockPlan(planInput ? planInput.value : cached.schedulePlan);
      rows.push({dock, regu, schedulePlan:plan, s1:Boolean(plan && s1 && s1.checked), s2:Boolean(plan && s2 && s2.checked), s3:Boolean(plan && s3 && s3.checked)});
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
function renderCommercialDockRuleSection(rows){
  const list=Array.isArray(rows) ? rows : [];
  if(!list.length) return '';
  const body=list.map(r=>{
    const dock=normalizeDockName(r.dock);
    const plan=normalizeCommercialDockPlan(r.schedulePlan);
    return `<div class="commercial-dock-rule-row" data-commercial-dock-rule-row="${safeText(dock)}"><div class="dock-name">${safeText(dockLabel(dock))}</div><label><input type="checkbox" data-commercial-dock-plan="pagi" data-dock="${safeText(dock)}" value="pagi" ${plan==='pagi'?'checked':''}> PAGI</label><label><input type="checkbox" data-commercial-dock-plan="siang" data-dock="${safeText(dock)}" value="siang" ${plan==='siang'?'checked':''}> SIANG</label></div>`;
  }).join('');
  return `<details class="commercial-dock-rules"><summary class="commercial-dock-rule-title"><span>Aturan Dasar Jadwal Loading Dock</span><span class="commercial-dock-rule-toggle" aria-hidden="true"></span></summary><div class="commercial-dock-rule-body"><div class="commercial-dock-rule-head"><div>Loading Dock</div><div>PAGI</div><div>SIANG</div></div>${body}</div></details>`;
}
function applyCommercialDockPlanToInputs(dockValue, planValue){
  const dock=normalizeDockName(dockValue);
  if(!dock) return;
  const plan=normalizeCommercialDockPlan(planValue);
  document.querySelectorAll(`[data-commercial-dock-plan][data-dock="${dock}"]`).forEach(el=>{ el.checked=!!plan && normalizeCommercialDockPlan(el.value)===plan; });
  const s1=document.querySelector(`[data-commercial-shift="s1"][data-dock="${dock}"]`);
  const s2=document.querySelector(`[data-commercial-shift="s2"][data-dock="${dock}"]`);
  const s3=document.querySelector(`[data-commercial-shift="s3"][data-dock="${dock}"]`);
  const disabled=!plan;
  [s1,s2,s3].forEach(el=>{ if(el){ el.disabled=disabled || !hasPermission('inputAttendance'); el.dataset.commercialPlanDisabled=disabled ? '1' : '0'; } });
  if(!plan){
    if(s1) s1.checked=false;
    if(s2) s2.checked=false;
    if(s3) s3.checked=false;
    return;
  }
  const shifts=commercialPlanDefaultShifts(plan);
  if(s1) s1.checked=shifts.s1;
  if(s2) s2.checked=shifts.s2;
  if(s3) s3.checked=shifts.s3;
}
function selectedCommercialReportRows(){
  const rows=[];
  getCommercialAssignmentRows().filter(r=>normalizeRegu(r.regu) && (r.s1 || r.s2 || r.s3)).forEach(assignment=>{
    rows.push(...commercialReportRowsForAssignment(assignment));
  });
  rows.push(...selectedCommercialCoordinatorReportRows());
  rows.push(...selectedCommercialActivityReportRows());
  rows.forEach((r,i)=>{ r.no=i+1; });
  return rows;
}
function saveCommercialDraftSelection(){
  if(!isCommercialKey(activeUnitKey()) || isAdmin()) return;
  const rows=getCommercialAssignmentRows().filter(r=>normalizeRegu(r.regu) || normalizeCommercialDockPlan(r.schedulePlan) || r.s1 || r.s2 || r.s3).map(r=>({dock:normalizeDockName(r.dock), regu:normalizeRegu(r.regu), schedulePlan:normalizeCommercialDockPlan(r.schedulePlan), s1:Boolean(r.s1), s2:Boolean(r.s2), s3:Boolean(r.s3)}));
  const coordinators=getCommercialCoordinatorRows().filter(w=>w.s1 || w.s2 || w.s3).map(w=>({nip:String(w.nip||''), s1:Boolean(w.s1), s2:Boolean(w.s2), s3:Boolean(w.s3)}));
  const activities={};
  COMMERCIAL_ACTIVITY_DEFS.forEach(def=>{
    activities[def.key]=getCommercialActivityRows().filter(w=>w.activityKey===def.key && (w.s1 || w.s2 || w.s3)).map(w=>({nip:String(w.nip||''), s1:Boolean(w.s1), s2:Boolean(w.s2), s3:Boolean(w.s3)}));
  });
  const payload={reportDate:state.reportDate||todayISO(), rows, coordinators, activities, updatedAt:new Date().toISOString()};
  saveMasterDataFirestoreFirst(commercialDraftDocId(), commercialDraftStorageKey(), payload).catch(err=>console.warn('Simpan draft Commercial Firestore gagal.', err));
}
function applyCommercialDraftSelection(){
  if(!isCommercialKey(activeUnitKey()) || isAdmin()) return;
  const savedRows=readCommercialDraftRows();
  const byDock=new Map(savedRows.map(r=>[normalizeDockName(r.dock), r]));
  commercialScheduleRowsCache=(commercialScheduleRowsCache||[]).map(r=>{ const saved=byDock.get(normalizeDockName(r.dock)); return {...r, regu:normalizeRegu(saved && saved.regu) || normalizeRegu(r.regu), schedulePlan:normalizeCommercialDockPlan(saved && (saved.schedulePlan || saved.plan || saved.jadwal || saved.shiftPlan)) || normalizeCommercialDockPlan(r.schedulePlan), s1:Boolean(saved && saved.s1), s2:Boolean(saved && saved.s2), s3:Boolean(saved && saved.s3)}; });
}
async function updateCommercialScheduleUI(){
  const wrap=$('commercialScheduleTools'); if(!wrap) return false;
  const show=!isAdmin() && isCommercialKey(activeUnitKey());
  wrap.classList.toggle('show', show);
  const searchRow=$('workerFilter') ? $('workerFilter').closest('.search-row') : null;
  if(searchRow) searchRow.style.display=show ? 'none' : '';
  if(!show) return false;
  const matrix=$('commercialScheduleMatrix');
  await refreshCommercialDraftFromFirestore();
  await loadCommercialActivityRows();
  loadCommercialCoordinatorRows();
  const docks=await getLoadingDocks();
  const regus=commercialReguList();
  const savedByDock=new Map(readCommercialDraftRows().map(r=>[normalizeDockName(r.dock), r]));
  const rows=docks.map(d=>{
    const saved=savedByDock.get(normalizeDockName(d));
    const hasSaved=!!saved;
    const plan=hasSaved ? normalizeCommercialDockPlan(saved && (saved.schedulePlan || saved.plan || saved.jadwal || saved.shiftPlan)) : defaultCommercialDockPlan(d);
    const defaults=commercialPlanDefaultShifts(plan);
    return {dock:d, regu:normalizeRegu(saved && saved.regu), schedulePlan:plan, s1:hasSaved ? Boolean(plan && saved && saved.s1) : defaults.s1, s2:hasSaved ? Boolean(plan && saved && saved.s2) : defaults.s2, s3:hasSaved ? Boolean(plan && saved && saved.s3) : defaults.s3};
  });
  commercialScheduleRowsCache=rows;
  if(matrix){
    const currentActivity=normalizeCommercialInputActivityChoice(commercialInputActivityKey);
    if(currentActivity===COMMERCIAL_KEY){
      if(!docks.length || !regus.length){
        matrix.innerHTML=renderCommercialCoordinatorSection() + '<div class="empty">Belum ada data Loading Dock atau Regu. Admin perlu membuat Loading Dock dan import pekerja Muatan Commercial dengan kolom Regu.</div>';
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
        const dockMatrix='<div class="commercial-matrix-head"><div>LD</div><div>Regu</div><div>Shift 1</div><div>Shift 2</div><div>Shift 3</div></div>' + rows.map(r=>{ const disabled=commercialDockShiftDisabledAttr(r.schedulePlan); return `<div class="commercial-matrix-row" data-commercial-row="${safeText(normalizeDockName(r.dock))}"><div class="dock-name">${safeText(dockLabel(r.dock))}</div><div><select class="commercial-regu-select" data-commercial-regu-select data-dock="${safeText(r.dock)}">${reguOptions(r.dock, r.regu)}</select></div><label><input type="checkbox" data-commercial-shift="s1" data-dock="${safeText(r.dock)}" ${r.s1?'checked':''}${disabled}> S1</label><label><input type="checkbox" data-commercial-shift="s2" data-dock="${safeText(r.dock)}" ${r.s2?'checked':''}${disabled}> S2</label><label><input type="checkbox" data-commercial-shift="s3" data-dock="${safeText(r.dock)}" ${r.s3?'checked':''}${disabled}> S3</label></div>`; }).join('');
        matrix.innerHTML=renderCommercialDockRuleSection(rows) + renderCommercialCoordinatorSection() + dockMatrix;
        refreshCommercialReguSelectOptions();
      }
    }else{
      matrix.innerHTML=renderCommercialActivitySections(currentActivity);
    }
  }
  const selected=rows.filter(r=>normalizeRegu(r.regu) && (r.s1 || r.s2 || r.s3));
  const selectedCoordinators=selectedCommercialCoordinatorReportRows().length;
  const selectedActivities=selectedCommercialActivityReportRows().length;
  const currentActivityLabel=commercialInputActivityLabel(commercialInputActivityKey);
  if($('commercialScheduleSummary')){ $('commercialScheduleSummary').innerHTML=''; $('commercialScheduleSummary').style.display='none'; }
  if($('workerShownCount')) $('workerShownCount').textContent = normalizeCommercialInputActivityChoice(commercialInputActivityKey)===COMMERCIAL_KEY ? rows.length : ((commercialActivityRowsCache[normalizeCommercialInputActivityChoice(commercialInputActivityKey)]||[]).length);
  return true;
}
async function renderAdminLoadingDocks(){ if(!isAdmin()) return; const list=$('adminDockList'); if(!list) return; const docks=await getLoadingDocks(); list.innerHTML=docks.length?docks.map(d=>`<div class="dock-row"><div><div class="name">${safeText(dockLabel(d))}</div><div class="meta">Kode: ${safeText(d)}</div></div><button class="btn danger" data-dock-delete="${safeText(d)}">Hapus</button></div>`).join(''):'<div class="empty-admin-list">Belum ada loading dock.</div>'; }
async function adminAddDock(){ if(!requirePermission('manageDocks','Fitur Loading Dock hanya untuk admin.')) return; const input=$('adminDockName'); const name=normalizeDockName(input?input.value:''); if(!name){ alert('Isi nama Loading Dock terlebih dahulu.'); return; } const docks=getLocalLoadingDocks(); if(docks.includes(name)){ alert('Loading Dock sudah ada.'); return; } await saveLoadingDocks([...docks,name]); if(input) input.value=''; await renderAdminLoadingDocks(); adminLog('Loading Dock ditambahkan: '+dockLabel(name)); }
async function adminResetDocks(){ if(!isAdmin()) return; if(!confirm('Reset Loading Dock ke default 01, 02, 03?')) return; await saveLoadingDocks(['01','02','03']); await renderAdminLoadingDocks(); adminLog('Loading Dock direset ke default 01, 02, 03.'); }
async function adminDeleteDock(value){ if(!requirePermission('manageDocks','Fitur Loading Dock hanya untuk admin.')) return; const dock=normalizeDockName(value); if(!dock) return; if(!confirm('Hapus '+dockLabel(dock)+'?')) return; await saveLoadingDocks(getLocalLoadingDocks().filter(d=>d!==dock)); await renderAdminLoadingDocks(); adminLog('Loading Dock dihapus: '+dockLabel(dock)); }

function bahanBakuActivityLabelFromKey(key){
  if(isOverzakKey(key)) return 'Overzak';
  if(isSiloKey(key)) return 'Silo';
  if(String(key || '')===BAHAN_BAKU_PAGI_KEY) return 'Bongkaran';
  return unitNameFromKey(key);
}
function getBahanBakuActivityUnitKeys(){ return [BAHAN_BAKU_PAGI_KEY, SILO_KEY, OVERZAK_KEY]; }
function rowsFromSavedActivityState(unitKeyValue){
  try{
    const cached=unwrapCacheEnvelope(safeLocalGetJSON(`${STORAGE_KEY}_${unitKeyValue}`, null));
    if(cached && Array.isArray(cached.workers)){
      const dateValue=state.reportDate || todayISO();
      if(cached.reportDate && cached.reportDate !== dateValue) return [];
      return cached.workers.map((w,i)=>({...cleanWorker(w,i), kegiatan:w.kegiatan || bahanBakuActivityLabelFromKey(unitKeyValue), sourceUnitKey:unitKeyValue}));
    }
  }catch(err){ console.warn('Baca state kegiatan gagal:', unitKeyValue, err); }
  return [];
}
function rowsFromSavedAttendance(unitKeyValue, dateValue){
  try{
    const data=unwrapCacheEnvelope(safeLocalGetJSON(`${ATTENDANCE_KEY}_${unitKeyValue}_${dateValue}`, null));
    return rowsFromAttendancePayload(data).map(r=>({...r, sourceUnitKey:unitKeyValue, kegiatan:r.kegiatan || bahanBakuActivityLabelFromKey(unitKeyValue)}));
  }catch(err){ console.warn('Baca absensi kegiatan gagal:', unitKeyValue, err); return []; }
}
function mergeBahanBakuConflictRows(rows){
  const out=[];
  const seen=new Set();
  (rows||[]).forEach((r,idx)=>{
    if(!r) return;
    const nip=String(r.nip||'').trim();
    if(!nip) return;
    const key=[nip, r.sourceUnitKey || '', Boolean(r.s1)?'1':'0', Boolean(r.s2)?'1':'0', Boolean(r.s3)?'1':'0'].join('__');
    if(seen.has(key)) return;
    seen.add(key);
    out.push({...r, no:Number(r.no)||idx+1});
  });
  return out;
}
async function loadBahanBakuRowsForConflict(unitKeyValue, dateValue){
  let rows=[];
  // Validasi lintas kegiatan harus tetap membaca cache lokal lama, walaupun Firebase online.
  // Ini penting agar Bongkaran <-> Silo langsung terkunci setelah jadwal disimpan,
  // sama seperti Overzak yang sudah bekerja dari data tersimpan lokal.
  rows=rows.concat(rowsFromSavedActivityState(unitKeyValue));
  rows=rows.concat(rowsFromSavedAttendance(unitKeyValue, dateValue));
  const bridge=await waitFirebase();
  if(bridge && bridge.enabled && bridge.loadAppState){
    try{
      const remote=await bridge.loadAppState(unitKeyValue);
      if(remote && Array.isArray(remote.workers) && (!remote.reportDate || remote.reportDate===dateValue)){
        rows=rows.concat(remote.workers.map((w,i)=>({...cleanWorker(w,i), kegiatan:w.kegiatan || bahanBakuActivityLabelFromKey(unitKeyValue), sourceUnitKey:unitKeyValue})));
      }
    }catch(err){ console.warn('Baca jadwal Firestore untuk validasi gagal:', unitKeyValue, err); }
  }
  if(bridge && bridge.enabled && bridge.loadAttendance){
    try{
      const payload=await bridge.loadAttendance(unitKeyValue, dateValue);
      if(payload) rows=rows.concat(rowsFromAttendancePayload(payload).map(r=>({...r, sourceUnitKey:unitKeyValue, kegiatan:r.kegiatan || bahanBakuActivityLabelFromKey(unitKeyValue)})));
    }catch(err){ console.warn('Baca absensi Firestore untuk validasi gagal:', unitKeyValue, err); }
  }
  return mergeBahanBakuConflictRows(rows);
}
async function refreshBahanBakuActivityConflictCache(options){
  const opt=options || {};
  if(!coordinatorCanChooseBahanBakuActivity()) return;
  if(!getBahanBakuActivityUnitKeys().includes(activeUnitKey())) return;
  if(bahanBakuConflictRefreshBusy && !opt.force) return;
  bahanBakuConflictRefreshBusy=true;
  try{
    const dateValue=state.reportDate || todayISO();
    const cache={};
    for(const unitKeyValue of getBahanBakuActivityUnitKeys()){
      if(unitKeyValue===activeUnitKey()){
        cache[unitKeyValue]=(state.workers||[]).map((w,i)=>({...cleanWorker(w,i), kegiatan:w.kegiatan || bahanBakuActivityLabelFromKey(unitKeyValue), sourceUnitKey:unitKeyValue}));
      }else{
        cache[unitKeyValue]=await loadBahanBakuRowsForConflict(unitKeyValue, dateValue);
      }
    }
    bahanBakuActivityConflictRowsCache=cache;
  }finally{
    bahanBakuConflictRefreshBusy=false;
  }
}
function getBahanBakuShiftConflict(nipValue, shiftKey, excludeUnitKey){
  const nip=String(nipValue || '').trim();
  if(!nip || !shiftKey) return null;
  const dateValue=state.reportDate || todayISO();
  const ownKey=excludeUnitKey || activeUnitKey();
  for(const unitKeyValue of getBahanBakuActivityUnitKeys()){
    if(unitKeyValue===ownKey) continue;
    const cachedRows=Array.isArray(bahanBakuActivityConflictRowsCache[unitKeyValue]) ? bahanBakuActivityConflictRowsCache[unitKeyValue] : [];
    const rows=mergeBahanBakuConflictRows([
      ...cachedRows,
      ...rowsFromSavedActivityState(unitKeyValue),
      ...rowsFromSavedAttendance(unitKeyValue, dateValue)
    ]);
    const hit=rows.find(r=>String(r.nip||'').trim()===nip && Boolean(r[shiftKey]));
    if(hit){
      return { unitKey:unitKeyValue, label:bahanBakuActivityLabelFromKey(unitKeyValue), row:hit, shiftLabel:shiftKey==='s1'?'Shift 1':(shiftKey==='s2'?'Shift 2':'Shift 3') };
    }
  }
  return null;
}
function validateBahanBakuShiftChange(worker, shiftKey, checked){
  if(!checked) return true;
  if(!coordinatorCanChooseBahanBakuActivity()) return true;
  if(!getBahanBakuActivityUnitKeys().includes(activeUnitKey())) return true;
  const conflict=getBahanBakuShiftConflict(worker && worker.nip, shiftKey, activeUnitKey());
  if(!conflict) return true;
  alert(`Pekerja ${worker && worker.name ? worker.name : worker && worker.nip ? worker.nip : ''} sudah terjadwal pada ${conflict.shiftLabel} sebagai ${conflict.label}.

Satu pekerja hanya boleh punya 1 kegiatan pada tanggal dan shift yang sama. Jika ingin memindahkan, buka kegiatan ${conflict.label}, hapus checklist shift tersebut, lalu pilih di kegiatan baru.`);
  return false;
}

function clearBahanBakuConflictingSelectionsInCurrentState(){
  if(!coordinatorCanChooseBahanBakuActivity()) return false;
  if(!getBahanBakuActivityUnitKeys().includes(activeUnitKey())) return false;
  let changed=false;
  (state.workers||[]).forEach(w=>{
    ['s1','s2','s3'].forEach(shiftKey=>{
      if(!w || !w[shiftKey]) return;
      const conflict=getBahanBakuShiftConflict(w.nip, shiftKey, activeUnitKey());
      if(conflict){ w[shiftKey]=false; changed=true; }
    });
  });
  return changed;
}

async function validateBahanBakuNoDuplicateSelection(options){
  const opt=options || {};
  if(!coordinatorCanChooseBahanBakuActivity()) return {ok:true, conflicts:[]};
  if(!getBahanBakuActivityUnitKeys().includes(activeUnitKey())) return {ok:true, conflicts:[]};
  await refreshBahanBakuActivityConflictCache({force:true});
  const conflicts=[];
  const selected=(state.workers||[]).filter(w=>w && (w.s1 || w.s2 || w.s3));
  const seenCurrent=new Map();
  selected.forEach(w=>{
    ['s1','s2','s3'].forEach(shiftKey=>{
      if(!w[shiftKey]) return;
      const nip=String(w.nip||'').trim();
      if(!nip) return;
      const key=nip+'__'+shiftKey;
      if(seenCurrent.has(key)){
        const prev=seenCurrent.get(key);
        conflicts.push({worker:w, shiftKey, shiftLabel:shiftKey==='s1'?'Shift 1':(shiftKey==='s2'?'Shift 2':'Shift 3'), label:bahanBakuActivityLabelFromKey(activeUnitKey()), internal:true, other:prev});
        return;
      }
      seenCurrent.set(key,w);
      const hit=getBahanBakuShiftConflict(nip, shiftKey, activeUnitKey());
      if(hit) conflicts.push({worker:w, shiftKey, shiftLabel:hit.shiftLabel, label:hit.label, unitKey:hit.unitKey, row:hit.row});
    });
  });
  if(conflicts.length){
    if(opt.clear){
      conflicts.forEach(c=>{ if(c.worker && c.shiftKey) c.worker[c.shiftKey]=false; });
      saveState();
    }
    const preview=conflicts.slice(0,8).map(c=>`- ${c.worker && c.worker.name ? c.worker.name : c.worker && c.worker.nip ? c.worker.nip : 'Pekerja'} (${c.shiftLabel}) sudah terjadwal di ${c.label}`).join('\n');
    const more=conflicts.length>8 ? `\n...dan ${conflicts.length-8} data lainnya.` : '';
    alert(`Validasi jadwal menolak input dobel.\n\n${preview}${more}\n\nAturan: 1 pekerja + 1 tanggal + 1 shift hanya boleh masuk 1 kegiatan. Hapus checklist di kegiatan lama terlebih dahulu jika ingin memindahkan.`);
    return {ok:false, conflicts};
  }
  return {ok:true, conflicts:[]};
}
function bahanBakuShiftDisabledAttrs(worker, shiftKey){
  if(!coordinatorCanChooseBahanBakuActivity() || !getBahanBakuActivityUnitKeys().includes(activeUnitKey())) return '';
  const conflict=getBahanBakuShiftConflict(worker && worker.nip, shiftKey, activeUnitKey());
  if(!conflict) return '';
  return ` disabled data-bahan-baku-conflict="1" title="Sudah terjadwal di ${safeText(conflict.label)} ${safeText(conflict.shiftLabel)}"`;
}
async function renderWorkers(){
  if(coordinatorSingleShiftMode() || coordinatorBahanBakuMalamMode()) enforceSingleShiftInputRule();
  if(coordinatorCanChooseBahanBakuActivity() && getBahanBakuActivityUnitKeys().includes(activeUnitKey())){
    await refreshBahanBakuActivityConflictCache({force:true});
    if(clearBahanBakuConflictingSelectionsInCurrentState()) await saveState();
  }
  const isCommercialMatrix = await updateCommercialScheduleUI();
  if(isCommercialMatrix){
    renderDropdowns();
    updateSingleShiftUI();
    const list=$('workerList');
    if(list) list.innerHTML='<div class="commercial-worker-hidden-note">Daftar pekerja biasa tidak ditampilkan di bagian ini. Pilih kegiatan dari dropdown: Muatan Commercial, Stapel, atau Malleti.</div>';
    updateCounts();
    return;
  }
  renderDropdowns();
  updateSingleShiftUI();
  const allowed=coordinatorAllowedShift();
  const q=$('workerFilter').value.trim().toLowerCase();
  const commercialSel=commercialSelection();
  const rows=state.workers.filter(w=>{
    if(!allowWorkerInBahanBakuActivity(w, activeUnitKey())) return false;
    if(!isAdmin() && isCommercialKey(activeUnitKey())){ if(!commercialSel.dock || !commercialSel.regu) return false; if(normalizeRegu(w.regu)!==commercialSel.regu) return false; }
    const t=workerType(w).toLowerCase();
    const match=!q || w.nip.toLowerCase().includes(q) || w.name.toLowerCase().includes(q) || t.includes(q);
    if(!match) return false;
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
    const s1Disabled=bahanBakuShiftDisabledAttrs(worker,'s1');
    const s2Disabled=bahanBakuShiftDisabledAttrs(worker,'s2');
    const s3Disabled=bahanBakuShiftDisabledAttrs(worker,'s3');
    const shift1Html=`<label class="shift-toggle s1 ${s1Disabled?'shift-disabled':''}">S1 <input type="checkbox" data-shift="s1" data-no="${worker.no}" ${worker.s1 && !s1Disabled?'checked':''}${s1Disabled}><span class="checkmark">✓</span></label>`;
    const shift2Html=`<label class="shift-toggle s2 ${s2Disabled?'shift-disabled':''}">S2 <input type="checkbox" data-shift="s2" data-no="${worker.no}" ${worker.s2 && !s2Disabled?'checked':''}${s2Disabled}><span class="checkmark">✓</span></label>`;
    const shift3Html=`<label class="shift-toggle s3 ${s3Disabled?'shift-disabled':''}">S3 <input type="checkbox" data-shift="s3" data-no="${worker.no}" ${worker.s3 && !s3Disabled?'checked':''}${s3Disabled}><span class="checkmark">✓</span></label>`;
    const coordinatorAllShiftException=canUseAllShiftsDespiteSingleShiftRule(worker);
    const malamMode=coordinatorBahanBakuMalamMode();
    const forceShift1Only=(activeUnitKey()===BAHAN_BAKU_PAGI_KEY && !coordinatorAllShiftException) || (isBahanBakuPagiCoordinatorWorker(worker) && getBahanBakuActivityUnitKeys().includes(activeUnitKey()) && !coordinatorAllShiftException);
    const shiftHtml=malamMode ? (shift2Html + shift3Html) : (coordinatorAllShiftException ? (shift1Html + shift2Html + shift3Html) : (forceShift1Only ? shift1Html : (allowed==='s1' ? shift1Html : (allowed==='s2' ? shift2Html : (allowed==='s3' ? shift3Html : shift1Html + shift2Html + shift3Html)))));
    const shiftRowClass=malamMode ? 'shift-row bahan-baku-malam-shift-row' : ((allowed || forceShift1Only) && !coordinatorAllShiftException ? 'shift-row single-shift-row' : 'shift-row');
    div.innerHTML=`<div class="worker-top"><div class="worker-nip">NIP ${safeText(worker.nip || '-')}</div><div class="worker-name">${safeText(worker.name)}</div><div class="worker-status">${type}${reguText}</div></div><div class="${shiftRowClass}">${shiftHtml}</div>`;
    div.addEventListener('click', e=>{ if(e.target.closest('.shift-toggle')) return; fillForm(worker.no); window.scrollTo({top:0, behavior:'smooth'}); });
    list.appendChild(div);
  });
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
/* v104: fungsi mobile report duplikat dibersihkan agar Shift 3 tetap tampil. */
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
function defaultReportSettings(unitName){ return { signBip:'B I P', signGudang:'Bagian Gudang', signKasie:`Kasie ${unitName || 'Muatan Breeder'}`, signPga:'Bagian P&GA', note:'', workTitle:'JAM KERJA CEK IN dan CEK OUT', shiftPagiLabel:'SHIFT 1', shiftPagiIn:'07:00', shiftPagiOut:'17:00', shiftSiangLabel:'SHIFT 2', shiftSiangIn:'17:00', shiftSiangOut:'23:00', shiftMalamLabel:'SHIFT 3', shiftMalamIn:'23:00', shiftMalamOut:'07:00' }; }
function reportSettingsStorageKey(unitKeyValue){ return `${REPORT_SETTINGS_KEY}_${unitKeyValue || 'global'}`; }
function normalizeReportSettings(settings, unitName){ const def=defaultReportSettings(unitName); const merged={ ...def, ...(settings || {}) }; if(String(merged.shiftPagiLabel||'').toUpperCase()==='PAGI') merged.shiftPagiLabel='SHIFT 1'; if(String(merged.shiftSiangLabel||'').toUpperCase()==='SIANG') merged.shiftSiangLabel='SHIFT 2'; if(!merged.shiftMalamLabel) merged.shiftMalamLabel='SHIFT 3'; if(!merged.shiftMalamIn) merged.shiftMalamIn='23:00'; if(!merged.shiftMalamOut) merged.shiftMalamOut='07:00'; if(String(merged.workTitle||'').toUpperCase().startsWith('JAM KERJA ')) merged.workTitle='JAM KERJA CEK IN dan CEK OUT'; if(merged.shiftPagiOut==='15.00' && merged.shiftSiangIn==='15.00'){ merged.shiftPagiOut='17:00'; merged.shiftSiangIn='17:00'; } ['shiftPagiIn','shiftPagiOut','shiftSiangIn','shiftSiangOut','shiftMalamIn','shiftMalamOut'].forEach(k=>{ merged[k]=normalizeTimeToHM(merged[k]) || normalizeTimeToHM(def[k]) || ''; }); return merged; }
function getReportSettings(unitKeyValue, unitName){
  const key=unitKeyValue || 'global';
  if(reportSettingsCloudCache[key]) return normalizeReportSettings(reportSettingsCloudCache[key], unitName);
  const cached=unwrapCacheEnvelope(safeLocalGetJSON(reportSettingsStorageKey(key), {}));
  const saved=cached && cached.settings ? cached.settings : cached;
  return normalizeReportSettings(saved || {}, unitName);
}
function renderReportSettings(unitKeyValue, unitName){
  const key=unitKeyValue || 'global';
  const settings=getReportSettings(key, unitName);
  document.querySelectorAll('[data-report-setting]').forEach(el=>{ const k=el.dataset.reportSetting; if(k && settings[k] !== undefined) el.textContent=settings[k]; el.contentEditable = isAdmin() ? 'true' : 'false'; });
  syncAdminAutoShiftInputs(settings);
  refreshReportSettingsFromFirestore(key).then(remote=>{
    if(remote){ const latest=normalizeReportSettings(remote, unitName); document.querySelectorAll('[data-report-setting]').forEach(el=>{ const k=el.dataset.reportSetting; if(k && latest[k] !== undefined) el.textContent=latest[k]; }); syncAdminAutoShiftInputs(latest); }
  }).catch(err=>console.warn('Load format laporan Firestore gagal.', err));
}
function syncAdminAutoShiftInputs(settings){ if(!isAdmin() || !settings) return; const pairs={adminAutoS1In:'shiftPagiIn',adminAutoS1Out:'shiftPagiOut',adminAutoS2In:'shiftSiangIn',adminAutoS2Out:'shiftSiangOut',adminAutoS3In:'shiftMalamIn',adminAutoS3Out:'shiftMalamOut'}; Object.keys(pairs).forEach(id=>{ const el=$(id); if(el && !el.dataset.userEdited){ el.value=settings[pairs[id]] || el.value || ''; } }); }
function collectReportSettings(){ const data={}; const timeKeys=new Set(['shiftPagiIn','shiftPagiOut','shiftSiangIn','shiftSiangOut','shiftMalamIn','shiftMalamOut']); document.querySelectorAll('[data-report-setting]').forEach(el=>{ const key=el.dataset.reportSetting; if(key) data[key]=timeKeys.has(key) ? normalizeTimeToHM(el.textContent.trim()) : el.textContent.trim(); }); return data; }
function saveReportSettings(){ if(!isAdmin()) return; const unitKeyValue=getReportUnitKeyForSettings(); const settings=collectReportSettings(); saveReportSettingsToFirestore(unitKeyValue, settings).catch(err=>console.warn('Simpan format laporan Firestore gagal.', err)); }
function normalizeAdminRandomMinutes(value, fallback){ const n=Math.floor(Number(value)); if(!Number.isFinite(n) || n<0) return Number(fallback)||0; return n; }
function isAdminAutoShift3Enabled(){ const el=$('adminAutoUseS3'); if(el) return !!el.checked; return !!adminAttendanceOptions.autoShift3; }
function isDurationReportEnabled(){ const el=$('adminShowDurationReport'); if(el) return !!el.checked; return !!adminAttendanceOptions.showDuration; }
function getAdminAutoRandomOptions(){
  const read=(id,fallback)=>normalizeAdminRandomMinutes($(id) ? $(id).value : undefined, fallback);
  let inMin=read('adminAutoInMinBefore', adminAttendanceOptions.autoInMinBefore);
  let inMax=read('adminAutoInMaxBefore', adminAttendanceOptions.autoInMaxBefore);
  let outMin=read('adminAutoOutMinAfter', adminAttendanceOptions.autoOutMinAfter);
  let outMax=read('adminAutoOutMaxAfter', adminAttendanceOptions.autoOutMaxAfter);
  if(inMax<inMin){ const t=inMin; inMin=inMax; inMax=t; }
  if(outMax<outMin){ const t=outMin; outMin=outMax; outMax=t; }
  const pairs={adminAutoInMinBefore:inMin,adminAutoInMaxBefore:inMax,adminAutoOutMinAfter:outMin,adminAutoOutMaxAfter:outMax};
  Object.keys(pairs).forEach(id=>{ if($(id)) $(id).value=String(pairs[id]); });
  return {inMin,inMax,outMin,outMax};
}
function syncAdminAttendanceOptionCheckboxes(){
  if($('adminAutoUseS3')) $('adminAutoUseS3').checked = !!adminAttendanceOptions.autoShift3;
  if($('adminShowDurationReport')) $('adminShowDurationReport').checked = !!adminAttendanceOptions.showDuration;
  const pairs={adminAutoInMinBefore:'autoInMinBefore',adminAutoInMaxBefore:'autoInMaxBefore',adminAutoOutMinAfter:'autoOutMinAfter',adminAutoOutMaxAfter:'autoOutMaxAfter'};
  Object.keys(pairs).forEach(id=>{ if($(id)) $(id).value=String(normalizeAdminRandomMinutes(adminAttendanceOptions[pairs[id]], $(id).value || 0)); });
}
function normalizeTimeToHMS(value){
  if(value===null || value===undefined) return '';
  if(value instanceof Date && !isNaN(value)){ return `${String(value.getHours()).padStart(2,'0')}:${String(value.getMinutes()).padStart(2,'0')}:${String(value.getSeconds()).padStart(2,'0')}`; }
  if(typeof value==='number' && Number.isFinite(value)){
    if(value>=0 && value<1){ const total=Math.round(value*86400)%86400; return formatSecondsToHMS(total); }
    if(value>=0 && value<24){ const h=Math.floor(value); const total=(h*3600)+Math.round((value-h)*3600); return formatSecondsToHMS(total); }
  }
  const raw=String(value||'').trim();
  if(!raw) return '';
  const compact=raw.replace(/,/g,'.');
  let m=compact.match(/^(\d{1,2})\s*[:.]\s*(\d{1,2})(?:\s*[:.]\s*(\d{1,2}))?$/);
  if(m){ const h=Number(m[1]); const min=Number(m[2]); const sec=Number(m[3]||0); if(h>=0&&h<=23&&min>=0&&min<=59&&sec>=0&&sec<=59) return `${String(h).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`; }
  m=compact.match(/^(\d{1,2})$/);
  if(m){ const h=Number(m[1]); if(h>=0&&h<=23) return `${String(h).padStart(2,'0')}:00:00`; }
  const d=new Date(raw);
  if(!isNaN(d) && /\d{1,2}:\d{1,2}/.test(raw)) return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`;
  return raw;
}
function normalizeTimeToHM(value){
  const hms=normalizeTimeToHMS(value);
  const m=String(hms||'').match(/^(\d{2}):(\d{2})(?::\d{2})?$/);
  if(m) return `${m[1]}:${m[2]}`;
  return hms || String(value||'').trim();
}
function parseAttendanceTimeToSeconds(value){ const hms=normalizeTimeToHMS(value); const m=String(hms||'').match(/^(\d{2}):(\d{2}):(\d{2})$/); if(!m) return null; const h=Number(m[1]); const min=Number(m[2]); const sec=Number(m[3]); if(!Number.isFinite(h)||!Number.isFinite(min)||!Number.isFinite(sec)||h<0||h>23||min<0||min>59||sec<0||sec>59) return null; return h*3600+min*60+sec; }
function parseAttendanceTimeToMinutes(value){ const seconds=parseAttendanceTimeToSeconds(value); return seconds===null ? null : Math.floor(seconds/60); }
function formatSecondsToHMS(total){ total=((Math.round(Number(total)||0)%86400)+86400)%86400; const h=Math.floor(total/3600); const m=Math.floor((total%3600)/60); const s=total%60; return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; }
function durationHHMMSS(checkIn, checkOut){ const start=parseAttendanceTimeToSeconds(checkIn); const end=parseAttendanceTimeToSeconds(checkOut); if(start===null || end===null) return ''; let diff=end-start; if(diff<0) diff+=86400; const h=Math.floor(diff/3600); const m=Math.floor((diff%3600)/60); const s=diff%60; return String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0'); }
function durationHHMM(checkIn, checkOut){ return durationHHMMSS(checkIn, checkOut); }
function renderDurationCell(row){ if(!isDurationReportEnabled()) return ''; if(isCommercialTfActivityRow(row)) return '<td></td>'; return `<td>${safeText(durationHHMMSS(rowCheckValue(row,'in'), rowCheckValue(row,'out')))}</td>`; }

function rowCheckValue(row, type){
  if(isCommercialTfActivityRow(row)) return '';
  const val=normalizeTimeToHMS(commercialCheckInOutValue(row,type));
  return val || (isAdmin() ? '' : 'source finger');
}
function renderCheckCell(row, type){
  if(isCommercialTfActivityRow(row)) return '';
  const value=rowCheckValue(row,type);
  if(isAdmin()) return `<input class="check-input" data-check-${type} data-check-nip="${safeText(row.nip)}" value="${safeText(normalizeTimeToHMS(value))}" placeholder="HH:MM:SS" inputmode="numeric">`;
  return `<span class="check-source">${safeText(value)}</span>`;
}
function isBahanBakuCombinedReport(){ const key=getReportUnitKeyForSettings(); return String(key || '')===BAHAN_BAKU_GABUNGAN_KEY || isBahanBakuPagiMalamKey(key) || isOverzakKey(key) || (adminReportData && adminReportData.combinedAttendance); }
function bahanBakuKegiatanLabel(row){
  const key=String((row && (row.kegiatan || row.activityLabel || row.sourceUnitKey || row.sourceUnitName)) || '').toLowerCase();
  if(key.includes('overzak')) return 'Overzak';
  if(key.includes('oper2') || key.includes('oper oper') || key.includes('oper_oper')) return 'Oper2 BB';
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
  /*
   * Koordinator hanya melaporkan daftar jadwal pekerja.
   * Cek In, Cek Out, dan Durasi dikelola oleh admin/import mesin absensi,
   * sehingga kolom tersebut hanya ditampilkan pada mode admin.
   */
  const showTimeColumns=isAdmin();
  const showDuration=showTimeColumns && isDurationReportEnabled();
  const durationHeader=showDuration ? '<th>DURASI</th>' : '';
  const timeHeader=showTimeColumns ? '<th>CEK IN</th><th>CEK OUT</th>'+durationHeader : '';
  const trailingColspan=showTimeColumns ? (showDuration ? 3 : 2) : 0;
  const trailingSummary = trailingColspan ? `<td class="summary-empty" colspan="${trailingColspan}"></td>` : '';
  const emptyColspan = (isCommercialRows ? 7 : (isBahanBakuRows ? 7 : 6)) + (showTimeColumns ? 2 : 0) + (showDuration ? 1 : 0);
  if(table){
    const thead=table.querySelector('thead');
    const foot=table.querySelector('tfoot.report-summary');
    if(thead){
      thead.innerHTML = isCommercialRows
        ? '<tr><th>NO</th><th>LD-Regu</th><th>NIP</th><th>NAMA PEKERJA</th><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th>'+timeHeader+'</tr>'
        : (isBahanBakuRows ? '<tr><th>NO</th><th>NIP</th><th>NAMA</th><th>KEGIATAN</th><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th>'+timeHeader+'</tr>' : '<tr><th>NO</th><th>NIP</th><th>NAMA</th><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th>'+timeHeader+'</tr>');
    }
    if(foot){
      foot.innerHTML = isCommercialRows
        ? `<tr><td class="summary-empty" colspan="4"></td><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th>${trailingSummary}</tr><tr><td class="left-label" colspan="4">JUMLAH PEKERJA</td><td id="sumS1">0</td><td id="sumS2">0</td><td id="sumS3">0</td>${trailingSummary}</tr><tr><td class="summary-empty" colspan="4"></td><td class="total" colspan="3"><span id="sumTotal">0</span> Orang</td>${trailingSummary}</tr>`
        : (isBahanBakuRows ? `<tr><td class="summary-empty" colspan="4"></td><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th>${trailingSummary}</tr><tr><td class="left-label" colspan="4">JUMLAH PEKERJA</td><td id="sumS1">0</td><td id="sumS2">0</td><td id="sumS3">0</td>${trailingSummary}</tr><tr><td class="summary-empty" colspan="4"></td><td class="total" colspan="3"><span id="sumTotal">0</span> Orang</td>${trailingSummary}</tr>` : `<tr><td class="summary-empty" colspan="3"></td><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th>${trailingSummary}</tr><tr><td class="left-label" colspan="3">JUMLAH PEKERJA</td><td id="sumS1">0</td><td id="sumS2">0</td><td id="sumS3">0</td>${trailingSummary}</tr><tr><td class="summary-empty" colspan="3"></td><td class="total" colspan="3"><span id="sumTotal">0</span> Orang</td>${trailingSummary}</tr>`);
    }
  }
  body.innerHTML='';
  rows.forEach((w,i)=>{
    const tr=document.createElement('tr');
    const timeCells=showTimeColumns ? `<td>${renderCheckCell(w,'in')}</td><td>${renderCheckCell(w,'out')}</td>${renderDurationCell(w)}` : '';
    tr.innerHTML = isCommercialRows
      ? `<td>${i+1}</td><td>${safeText(w.ldRegu || commercialLdReguLabel(w.loadingDock,w.regu))}</td><td>${safeText(w.nip)}</td><td class="name">${safeText(w.name)}</td><td>${w.s1?'<span class="tick">✓</span>':''}</td><td>${w.s2?'<span class="tick">✓</span>':''}</td><td>${w.s3?'<span class="tick">✓</span>':''}</td>${timeCells}`
      : (isBahanBakuRows ? `<td>${i+1}</td><td>${safeText(w.nip)}</td><td class="name">${safeText(w.name)}</td><td>${safeText(bahanBakuKegiatanLabel(w))}</td><td>${w.s1?'<span class="tick">✓</span>':''}</td><td>${w.s2?'<span class="tick">✓</span>':''}</td><td>${w.s3?'<span class="tick">✓</span>':''}</td>${timeCells}` : `<td>${i+1}</td><td>${safeText(w.nip)}</td><td class="name">${safeText(w.name)}</td><td>${w.s1?'<span class="tick">✓</span>':''}</td><td>${w.s2?'<span class="tick">✓</span>':''}</td><td>${w.s3?'<span class="tick">✓</span>':''}</td>${timeCells}`);
    body.appendChild(tr);
  });
  if(!rows.length){ body.innerHTML=`<tr><td colspan="${emptyColspan}" style="height:42px;color:#65758b">${safeText(emptyMsg || 'Belum ada pekerja yang dipilih.')}</td></tr>`; }
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
  const unitName=(String(unitKeyValue || '')===BAHAN_BAKU_GABUNGAN_KEY || isBahanBakuPagiMalamKey(unitKeyValue)) ? BAHAN_BAKU_GABUNGAN_NAME : unitNameFromKey(unitKeyValue);
  if(!adminReportData){ renderReportTable(unitName, dateValue, [], ''); if($('adminAttendanceInfo')) $('adminAttendanceInfo').textContent=''; return; }
  const rows=rowsFromAttendancePayload(adminReportData);
  renderReportTable(adminReportData.unit || unitName, adminReportData.reportDate || dateValue, rows, 'Data absensi belum berisi pekerja.');
  if($('adminAttendanceInfo')){
    if(adminReportData.combinedAttendance){
      const sources=adminReportData.sources || {};
      $('adminAttendanceInfo').textContent=`Data gabungan Bongkaran Bahan Baku. Oper2 BB: ${sources.oper?'ada':'belum ada'}. Bongkaran Pagi: ${sources.pagi?'ada':'belum ada'}. Bongkaran Malam: ${sources.malam?'ada':'belum ada'}. Overzak: ${sources.overzak?'ada':'belum ada'}. Total: ${rows.length} pekerja.`;
    }else{
      const by=adminReportData.inputBy ? `${adminReportData.inputBy.name || '-'} / Username ${adminReportData.inputBy.username || adminReportData.inputBy.nip || '-'}` : '-';
      $('adminAttendanceInfo').textContent=`Data ditemukan. Input oleh: ${by}. Total: ${rows.length} pekerja.`;
    }
  }
}
function shareText(){ const d=formatLongDate(state.reportDate); const rows=selectedWorkers(); const s1=rows.filter(w=>w.s1).sort((a,b)=>a.no-b.no).map(w=>w.nip); const s2=rows.filter(w=>w.s2).sort((a,b)=>a.no-b.no).map(w=>w.nip); const s3=rows.filter(w=>w.s3).sort((a,b)=>a.no-b.no).map(w=>w.nip); return d + '\n\nShift 1\n' + (s1.length ? s1.join('\n') : '-') + '\n\nShift 2\n' + (s2.length ? s2.join('\n') : '-') + '\n\nShift 3\n' + (s3.length ? s3.join('\n') : '-'); }
function nextAnimationFrame(){ return new Promise(resolve=>requestAnimationFrame(resolve)); }
function waitMs(ms){ return new Promise(resolve=>setTimeout(resolve,ms)); }

function createWaProgressOverlay(){
  let overlay=document.getElementById('waShareProgressOverlay');
  if(!overlay){
    overlay=document.createElement('div');
    overlay.id='waShareProgressOverlay';
    overlay.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(15,23,42,.72);display:flex;align-items:center;justify-content:center;padding:22px;backdrop-filter:blur(4px);';
    overlay.innerHTML='<div style="width:min(92vw,430px);background:#ffffff;border-radius:26px;padding:24px 20px;text-align:center;box-shadow:0 26px 70px rgba(0,0,0,.32);font-family:Arial, sans-serif;"><div id="waProgressNumber" style="width:92px;height:92px;border-radius:50%;display:grid;place-items:center;margin:0 auto 14px;background:#2558d9;color:#fff;font-size:42px;font-weight:950;">1</div><div id="waProgressTitle" style="font-size:18px;font-weight:950;color:#111827;margin-bottom:8px;">Tahap 1 / 6</div><div id="waProgressText" style="font-size:13px;font-weight:800;color:#475569;line-height:1.45;">Mohon tunggu, gambar sedang diproses.</div><div style="display:flex;justify-content:space-between;align-items:center;margin-top:16px;font-size:12px;font-weight:900;color:#2558d9;"><span id="waProgressPercent">5%</span><span>WA Super HD</span></div><div style="height:12px;border-radius:999px;background:#e5e7eb;overflow:hidden;margin-top:10px;"><div id="waProgressBar" style="height:100%;width:5%;background:#2558d9;border-radius:999px;transition:width .18s ease;"></div></div></div>';
    document.body.appendChild(overlay);
  }
  overlay.style.display='flex';
  return overlay;
}
function setWaProgress(step, message, percent, totalSteps){
  const total=Math.max(1, Number(totalSteps)||6);
  const safeStep=Math.min(total, Math.max(1, Number(step)||1));
  const num=document.getElementById('waProgressNumber');
  const title=document.getElementById('waProgressTitle');
  const text=document.getElementById('waProgressText');
  const bar=document.getElementById('waProgressBar');
  const percentText=document.getElementById('waProgressPercent');
  const pct=Math.max(5, Math.min(100, Number(percent)||5));
  if(num) num.textContent=String(safeStep);
  if(title) title.textContent=`Tahap ${safeStep} / ${total}`;
  if(text) text.textContent=message || 'Mohon tunggu, gambar sedang diproses.';
  if(bar) bar.style.width=pct+'%';
  if(percentText) percentText.textContent=`${Math.round(pct)}%`;
}
function hideWaProgressOverlay(){ const overlay=document.getElementById('waShareProgressOverlay'); if(overlay) overlay.style.display='none'; }
function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines){
  const words=String(text||'').split(/\s+/).filter(Boolean);
  let line=''; let lines=[];
  words.forEach(word=>{
    const test=line ? line+' '+word : word;
    if(ctx.measureText(test).width>maxWidth && line){ lines.push(line); line=word; }
    else line=test;
  });
  if(line) lines.push(line);
  if(maxLines && lines.length>maxLines){
    lines=lines.slice(0,maxLines);
    while(lines[lines.length-1] && ctx.measureText(lines[lines.length-1]+'...').width>maxWidth){ lines[lines.length-1]=lines[lines.length-1].slice(0,-1); }
    lines[lines.length-1]=(lines[lines.length-1]||'').trim()+'...';
  }
  lines.forEach((ln,i)=>ctx.fillText(ln,x,y+(i*lineHeight)));
}
function fitCanvasText(ctx, text, maxWidth){
  let value=String(text||'').replace(/\s+/g,' ').trim();
  if(!value) return '';
  if(ctx.measureText(value).width<=maxWidth) return value;
  while(value.length>0 && ctx.measureText(value+'...').width>maxWidth){ value=value.slice(0,-1); }
  return (value||'').trim() + '...';
}
function waExportReportConfig(rows){
  const unitKey=activeUnitKey();
  const unitLabel=(!isAdmin() && isOverzakKey(unitKey) ? BAHAN_BAKU_GABUNGAN_NAME : activeUnitName());
  const isCommercialRows=isCommercialKey(unitKey) || rows.some(w=>w && (w.ldRegu || w.loadingDock || w.regu));
  const isBahanBakuRows=!isCommercialRows && (String(unitKey||'')===BAHAN_BAKU_GABUNGAN_KEY || isBahanBakuPagiMalamKey(unitKey) || isOverzakKey(unitKey) || rows.some(w=>w && (w.kegiatan || w.activityLabel || w.sourceUnitKey || w.sourceUnitName)));
  const columns=isCommercialRows
    ? [
        {key:'no', label:'NO', width:100, align:'center'},
        {key:'ldRegu', label:'LD-REGU', width:320, align:'left'},
        {key:'nip', label:'NIP', width:210, align:'center'},
        {key:'name', label:'NAMA PEKERJA', width:860, align:'left'},
        {key:'s1', label:'SHIFT 1', width:210, align:'center', type:'check'},
        {key:'s2', label:'SHIFT 2', width:210, align:'center', type:'check'},
        {key:'s3', label:'SHIFT 3', width:210, align:'center', type:'check'}
      ]
    : (isBahanBakuRows
      ? [
          {key:'no', label:'NO', width:100, align:'center'},
          {key:'nip', label:'NIP', width:220, align:'center'},
          {key:'name', label:'NAMA PEKERJA', width:760, align:'left'},
          {key:'kegiatan', label:'KEGIATAN', width:300, align:'left'},
          {key:'s1', label:'SHIFT 1', width:200, align:'center', type:'check'},
          {key:'s2', label:'SHIFT 2', width:200, align:'center', type:'check'},
          {key:'s3', label:'SHIFT 3', width:200, align:'center', type:'check'}
        ]
      : [
          {key:'no', label:'NO', width:100, align:'center'},
          {key:'nip', label:'NIP', width:220, align:'center'},
          {key:'name', label:'NAMA PEKERJA', width:940, align:'left'},
          {key:'s1', label:'SHIFT 1', width:220, align:'center', type:'check'},
          {key:'s2', label:'SHIFT 2', width:220, align:'center', type:'check'},
          {key:'s3', label:'SHIFT 3', width:220, align:'center', type:'check'}
        ]);
  return {unitLabel, isCommercialRows, isBahanBakuRows, columns};
}
function waExportFieldValue(row, key, index){
  if(key==='no') return String(index+1);
  if(key==='ldRegu') return String((row && (row.ldRegu || commercialLdReguLabel(row.loadingDock,row.regu))) || '');
  if(key==='kegiatan') return String((row && bahanBakuKegiatanLabel(row)) || '');
  if(key==='nip') return String((row && row.nip) || '');
  if(key==='name') return String((row && row.name) || '');
  if(key==='s1' || key==='s2' || key==='s3') return row && row[key] ? '✓' : '';
  return String((row && row[key]) || '');
}
function waExportLayoutMeta(rowCount, columnCount){
  const count=Math.max(0, Number(rowCount)||0);
  let rowH=68, bodyFont=27, headFont=24, titleFont=39, subTitleFont=25, dateFont=23, summaryFont=24, totalFont=29, checkFont=33;
  if(count>24){ rowH=66; bodyFont=26; headFont=23; titleFont=38; subTitleFont=24; dateFont=22; summaryFont=23; totalFont=28; checkFont=32; }
  if(count>36){ rowH=63; bodyFont=24.5; headFont=22.5; titleFont=37; subTitleFont=24; dateFont=21.5; summaryFont=22.5; totalFont=27; checkFont=30; }
  if(count>48){ rowH=60; bodyFont=23; headFont=21.5; titleFont=35; subTitleFont=23; dateFont=21; summaryFont=21.5; totalFont=26; checkFont=29; }
  if(count>60){ rowH=57; bodyFont=21.5; headFont=20.5; titleFont=34; subTitleFont=22; dateFont=20; summaryFont=20.5; totalFont=25; checkFont=28; }
  if(count>75){ rowH=54; bodyFont=20; headFont=19.5; titleFont=32; subTitleFont=21; dateFont=19; summaryFont=19.5; totalFont=24; checkFont=27; }
  if(columnCount>=7){ bodyFont=Math.max(19, bodyFont-0.5); }
  return {rowH, bodyFont, headFont, titleFont, subTitleFont, dateFont, summaryFont, totalFont, checkFont};
}
async function reportImageBlob(onProgress){
  const progress=typeof onProgress==='function' ? onProgress : ()=>{};
  const totalSteps=6;
  const rows=selectedWorkers();
  const {unitLabel, columns}=waExportReportConfig(rows);
  progress(1,'Menyiapkan data laporan...',8,totalSteps); await nextAnimationFrame();
  const layout=waExportLayoutMeta(rows.length, columns.length);
  progress(2,'Menyusun layout export WA khusus...',20,totalSteps); await nextAnimationFrame();
  const marginX=52;
  const topPad=38;
  const headerBlockH=132;
  const tableHeadH=Math.max(64, layout.rowH);
  const summaryTopGap=30;
  const summaryBlockH=96;
  const bottomPad=42;
  const tableWidth=columns.reduce((sum,col)=>sum+col.width,0);
  const cssWidth=tableWidth + marginX*2;
  const cssHeight=topPad + headerBlockH + tableHeadH + Math.max(1, rows.length)*layout.rowH + summaryTopGap + summaryBlockH + bottomPad;
  const maxPixels=68000000;
  const maxDimension=14000;
  const preferredScale=rows.length>75 ? 2.8 : (rows.length>55 ? 3.0 : 3.2);
  let scale=Math.sqrt(maxPixels/(cssWidth*cssHeight));
  if(!Number.isFinite(scale)) scale=preferredScale;
  scale=Math.min(preferredScale, Math.max(2.35, scale));
  const scaleByDim=Math.min(maxDimension/cssWidth, maxDimension/cssHeight);
  scale=Math.max(1.9, Math.min(scale, scaleByDim));
  const canvas=document.createElement('canvas');
  canvas.width=Math.max(1, Math.round(cssWidth*scale));
  canvas.height=Math.max(1, Math.round(cssHeight*scale));
  const ctx=canvas.getContext('2d',{alpha:false});
  ctx.scale(scale,scale);
  ctx.fillStyle='#ffffff';
  ctx.fillRect(0,0,cssWidth,cssHeight);
  if('imageSmoothingEnabled' in ctx) ctx.imageSmoothingEnabled=true;
  if('imageSmoothingQuality' in ctx) ctx.imageSmoothingQuality='high';
  progress(3,'Meningkatkan ketajaman, ukuran font, dan lebar tabel...',34,totalSteps); await nextAnimationFrame();

  const left=marginX;
  const tableTop=topPad + headerBlockH;
  const columnLefts=[];
  let cursor=left;
  columns.forEach(col=>{ columnLefts.push(cursor); cursor+=col.width; });
  const tableRight=left+tableWidth;
  const titleText=`ABSENSI KEGIATAN ${String(unitLabel||'').replace(/PAGI/gi,'').replace(/MALAM/gi,'').replace(/\//g,'').replace(/\s+/g,' ').trim().toUpperCase()}`;

  ctx.fillStyle='#0f172a';
  ctx.textAlign='center';
  ctx.font=`900 ${layout.titleFont}px Arial`;
  ctx.fillText(titleText, cssWidth/2, topPad+34);
  ctx.font=`800 ${layout.subTitleFont}px Arial`;
  ctx.fillText('PT. BUDI INTI PERKASA', cssWidth/2, topPad+72);
  ctx.font=`800 ${layout.dateFont}px Arial`;
  ctx.fillStyle='#334155';
  ctx.fillText(formatLongDate(state.reportDate), cssWidth/2, topPad+104);

  ctx.fillStyle='#e8f0fe';
  ctx.fillRect(left, tableTop, tableWidth, tableHeadH);
  ctx.strokeStyle='#0f172a';
  ctx.lineWidth=1.4;
  ctx.strokeRect(left, tableTop, tableWidth, tableHeadH);
  ctx.font=`900 ${layout.headFont}px Arial`;
  ctx.fillStyle='#0f172a';
  columns.forEach((col, idx)=>{
    const cellX=columnLefts[idx];
    const midX=cellX + (col.width/2);
    ctx.textAlign=col.align==='left' ? 'left' : 'center';
    const textX=col.align==='left' ? cellX+14 : midX;
    const label=fitCanvasText(ctx, col.label, col.width-18);
    ctx.fillText(label, textX, tableTop + (tableHeadH/2) + (layout.headFont*0.34));
    if(idx>0){
      ctx.beginPath();
      ctx.moveTo(cellX, tableTop);
      ctx.lineTo(cellX, tableTop + tableHeadH);
      ctx.stroke();
    }
  });
  ctx.beginPath();
  ctx.moveTo(tableRight, tableTop);
  ctx.lineTo(tableRight, tableTop + tableHeadH);
  ctx.stroke();

  progress(4, rows.length ? `Menggambar isi tabel 0 / ${rows.length}...` : 'Menyiapkan isi tabel...',52,totalSteps);
  await nextAnimationFrame();
  const dataRows=rows.length ? rows : [{}];
  const updateEvery=Math.max(1, Math.ceil(Math.max(1, rows.length)/12));
  for(let idx=0; idx<dataRows.length; idx++){
    const row=dataRows[idx];
    const y=tableTop + tableHeadH + idx*layout.rowH;
    ctx.fillStyle=idx%2===0 ? '#ffffff' : '#f8fbff';
    ctx.fillRect(left,y,tableWidth,layout.rowH);
    ctx.strokeStyle='#1e293b';
    ctx.lineWidth=1;
    ctx.strokeRect(left,y,tableWidth,layout.rowH);
    columns.forEach((col, colIdx)=>{
      const cellX=columnLefts[colIdx];
      if(colIdx>0){
        ctx.beginPath();
        ctx.moveTo(cellX, y);
        ctx.lineTo(cellX, y + layout.rowH);
        ctx.stroke();
      }
      const value=rows.length ? waExportFieldValue(row,col.key,idx) : (colIdx===0 ? '' : (col.key==='name' ? 'Belum ada pekerja yang dipilih.' : ''));
      const textBaseY=y + (layout.rowH/2) + (layout.bodyFont*0.34);
      if(col.type==='check'){
        ctx.textAlign='center';
        ctx.font=`900 ${layout.checkFont}px Arial`;
        ctx.fillStyle='#0f172a';
        if(value) ctx.fillText(value, cellX + (col.width/2), y + (layout.rowH/2) + (layout.checkFont*0.34));
      }else{
        ctx.font=`${col.key==='name' ? '800' : '700'} ${layout.bodyFont}px Arial`;
        ctx.fillStyle=rows.length ? '#0f172a' : '#64748b';
        if(col.align==='left'){
          ctx.textAlign='left';
          const fitted=fitCanvasText(ctx, value, col.width-26);
          ctx.fillText(fitted, cellX+14, textBaseY);
        }else{
          ctx.textAlign='center';
          const fitted=fitCanvasText(ctx, value, col.width-18);
          ctx.fillText(fitted, cellX + (col.width/2), textBaseY);
        }
      }
    });
    ctx.beginPath();
    ctx.moveTo(tableRight, y);
    ctx.lineTo(tableRight, y + layout.rowH);
    ctx.stroke();
    if(rows.length && ((idx+1)%updateEvery===0 || idx===rows.length-1)){
      const pct=52 + Math.round(((idx+1)/Math.max(1, rows.length))*28);
      progress(4, `Menggambar isi tabel ${idx+1} / ${rows.length}...`, pct, totalSteps);
      await nextAnimationFrame();
    }
  }

  progress(5,'Menyempurnakan gambar PNG Super HD++...',86,totalSteps); await nextAnimationFrame();
  const summaryTop=tableTop + tableHeadH + dataRows.length*layout.rowH + summaryTopGap;
  const s1=rows.filter(w=>w && w.s1).length;
  const s2=rows.filter(w=>w && w.s2).length;
  const s3=rows.filter(w=>w && w.s3).length;
  const total=rows.length;
  const boxGap=18;
  const boxCount=4;
  const boxWidth=(tableWidth - boxGap*(boxCount-1))/boxCount;
  const summaryItems=[`SHIFT 1 : ${s1} pekerja`,`SHIFT 2 : ${s2} pekerja`,`SHIFT 3 : ${s3} pekerja`,`TOTAL : ${total} Orang`];
  summaryItems.forEach((label, idx)=>{
    const x=left + idx*(boxWidth+boxGap);
    ctx.fillStyle=idx===3 ? '#dbeafe' : '#f8fafc';
    ctx.strokeStyle=idx===3 ? '#2558d9' : '#cbd5e1';
    ctx.lineWidth=1.7;
    const radius=12;
    ctx.beginPath();
    ctx.moveTo(x+radius, summaryTop);
    ctx.arcTo(x+boxWidth, summaryTop, x+boxWidth, summaryTop+summaryBlockH, radius);
    ctx.arcTo(x+boxWidth, summaryTop+summaryBlockH, x, summaryTop+summaryBlockH, radius);
    ctx.arcTo(x, summaryTop+summaryBlockH, x, summaryTop, radius);
    ctx.arcTo(x, summaryTop, x+boxWidth, summaryTop, radius);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle=idx===3 ? '#1d4ed8' : '#0f172a';
    ctx.font=`900 ${idx===3 ? layout.totalFont : layout.summaryFont}px Arial`;
    ctx.textAlign='center';
    const fitted=fitCanvasText(ctx, label, boxWidth-18);
    ctx.fillText(fitted, x + boxWidth/2, summaryTop + summaryBlockH/2 + ((idx===3 ? layout.totalFont : layout.summaryFont)*0.34));
  });
  await waitMs(120);
  const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png',1));
  progress(5,'PNG Super HD++ selesai dibuat.',94,totalSteps); await waitMs(150);
  return blob;
}
function shareTextWhatsapp(){ if(selectedWorkers().length===0){ alert('Share belum bisa dikirim. Pilih minimal 1 pekerja terlebih dahulu.'); return; } window.open('https://wa.me/?text='+encodeURIComponent(shareText()),'_blank'); }
function backupPathInfo(){ const dateValue=state.reportDate || todayISO(); const date=new Date(dateValue+'T00:00:00'); const dd=String(date.getDate()).padStart(2,'0'); const mm=String(date.getMonth()+1).padStart(2,'0'); const yyyy=date.getFullYear(); const monthFolder=`${mm}-${yyyy}`; const filename=`${dd}-${mm}-${yyyy}.png`; return {mainFolder:'Absensi Mt Breeder', monthFolder, filename, downloadPath:`Absensi Mt Breeder/${monthFolder}/${filename}`}; }
function downloadBackupImage(blob, filename){ const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),2500); }
async function saveBackupImage(blob){ const info=backupPathInfo(); let savedWithFolder=false; if(window.showDirectoryPicker){ try{ const rootHandle=await window.showDirectoryPicker({id:'absensi-mt-breeder-backup', mode:'readwrite'}); const mainHandle=await rootHandle.getDirectoryHandle(info.mainFolder,{create:true}); const monthHandle=await mainHandle.getDirectoryHandle(info.monthFolder,{create:true}); const fileHandle=await monthHandle.getFileHandle(info.filename,{create:true}); const writable=await fileHandle.createWritable(); await writable.write(blob); await writable.close(); savedWithFolder=true; }catch(err){ console.warn('Simpan ke folder khusus tidak didukung atau dibatalkan, lanjut download biasa.', err); } } if(!savedWithFolder){ downloadBackupImage(blob, info.downloadPath); } return info; }
function openWhatsappWithText(text){ window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank'); }
async function shareWhatsapp(){ if(!requirePermission('shareReports','Akses ditolak. Role ini tidak boleh share laporan via WhatsApp.')) return; const rows=selectedWorkers(); if(rows.length===0){ alert('Lapor BIP belum bisa dikirim. Pilih minimal 1 pekerja terlebih dahulu.'); return; } const btn=$('btnShareWa'); const originalText=btn ? btn.textContent : ''; createWaProgressOverlay(); try{ if(btn){ btn.disabled=true; btn.textContent='Membuat WA Super HD...'; } const blob=await reportImageBlob((step,msg,pct,total)=>{ setWaProgress(step,msg,pct,total); if(btn) btn.textContent=`Tahap ${Math.min(total||6, step)}...`; }); if(!blob){ alert('Gambar laporan gagal dibuat. Silakan coba lagi.'); return; } const filename=`laporan-${new Date().getTime()}.png`; const file=new File([blob],filename,{type:'image/png'}); await waitMs(250); setWaProgress(6,'Menyiapkan link share ke WhatsApp...',97,6); if(btn) btn.textContent='Membuka WhatsApp...'; if(navigator.canShare && navigator.canShare({files:[file]}) && navigator.share){ try{ await navigator.share({title:`Absensi ${(!isAdmin() && isOverzakKey(activeUnitKey()) ? BAHAN_BAKU_GABUNGAN_NAME : activeUnitName())}`,text:`Laporan absensi ${formatLongDate(state.reportDate)}`,files:[file]}); setWaProgress(6,'Share WhatsApp berhasil dibuka.',100,6); await waitMs(220); return; }catch(err){ if(err && err.name==='AbortError') return; console.warn('Share gambar gagal.', err); } } await saveBackupImage(blob); openWhatsappWithText(`Laporan absensi ${(!isAdmin() && isOverzakKey(activeUnitKey()) ? BAHAN_BAKU_GABUNGAN_NAME : activeUnitName())} tanggal ${formatLongDate(state.reportDate)} sudah dibuat. Silakan lampirkan gambar PNG yang baru diunduh jika WhatsApp belum menerima file otomatis.`); setWaProgress(6,'WhatsApp dibuka. Jika file belum ikut terlampir otomatis, gunakan gambar PNG yang baru diunduh.',100,6); await waitMs(260); }catch(err){ console.error(err); alert('Lapor BIP gagal diproses. Coba ulangi sekali lagi.'); }finally{ hideWaProgressOverlay(); if(btn){ btn.disabled=false; btn.textContent=originalText || 'Lapor BIP via WA'; } } }

let coordinatorCombinedReportToken=0;
function liveOverzakAttendancePayload(dateValue){
  const rows=selectedWorkers().filter(r=>r && (r.s1 || r.s2 || r.s3)).map((r,i)=>({
    no:i+1,
    nip:String(r.nip||''),
    name:String(r.name||''),
    s1:Boolean(r.s1),
    s2:Boolean(r.s2),
    s3:Boolean(r.s3),
    type:r.type || workerType(r),
    kegiatan:'Overzak',
    checkIn:r.checkIn || '',
    checkOut:r.checkOut || '',
    sourceUnitKey:OVERZAK_KEY,
    sourceUnitName:OVERZAK_NAME
  })).filter(r=>r.nip);
  return normalizeAttendancePayload({
    id:`${OVERZAK_KEY}_${dateValue || todayISO()}_live`,
    reportDate:dateValue || todayISO(),
    company:'PT. BUDI INTI PERKASA',
    unit:OVERZAK_NAME,
    unitKey:OVERZAK_KEY,
    workers:rows,
    shift1:rows.filter(r=>r.s1),
    shift2:rows.filter(r=>r.s2),
    shift3:rows.filter(r=>r.s3),
    counts:{shift1:rows.filter(r=>r.s1).length,shift2:rows.filter(r=>r.s2).length,shift3:rows.filter(r=>r.s3).length,total:rows.length},
    savedFrom:'live_overzak_tab'
  });
}
async function renderCoordinatorOverzakCombinedReport(){
  const token=++coordinatorCombinedReportToken;
  const dateValue=state.reportDate || todayISO();
  const liveOverzakPayload=liveOverzakAttendancePayload(dateValue);
  const renderCombined=(pagiPayload, malamPayload)=>{
    if(token!==coordinatorCombinedReportToken) return;
    const combined=buildBahanBakuCombinedPayload(pagiPayload || null, malamPayload || null, dateValue, liveOverzakPayload);
    const rows=rowsFromAttendancePayload(combined);
    renderReportTable(BAHAN_BAKU_GABUNGAN_NAME, dateValue, rows, 'Belum ada pekerja yang dipilih.');
    updateCounts();
  };
  renderCombined(null, null);
  try{
    const bridge=await waitFirebase();
    const batch=await readAttendancePayloadBatch([
      {key:'pagi', unitKey:BAHAN_BAKU_PAGI_KEY, reportDate:dateValue},
      {key:'malam', unitKey:BAHAN_BAKU_MALAM_KEY, reportDate:dateValue}
    ], bridge, {force:false});
    renderCombined(batch.pagi || null, batch.malam || null);
  }catch(err){ console.warn('Laporan gabungan Bongkaran Bahan Baku untuk Overzak gagal dimuat lengkap.', err); }
}
async function renderReport(){
  if(isAdmin()){ renderAdminReport(); return; }
  if(isOverzakKey(activeUnitKey())){ await renderCoordinatorOverzakCombinedReport(); return; }
  renderReportTable(activeUnitName(), state.reportDate, selectedWorkers(), 'Belum ada pekerja yang dipilih.');
  updateCounts();
}
async function renderAll(){ syncInputs(); await renderWorkers(); renderReport(); renderScheduleHistoryPanel(); if(isAdmin()) renderAdminDashboard(); enforceRoleUi(); }
function nextNo(){ return state.workers.reduce((m,w)=>Math.max(m, Number(w.no)||0),0)+1; }
function getFormData(){ return { no:Number($('workerNo').value)||nextNo(), nip:$('workerNip').value.trim(), name:$('workerName').value.trim() }; }
function clearForm(){ ['workerNo','workerNip','workerName'].forEach(id=>$(id).value=''); $('selectPkwt').value=''; $('selectFreelance').value=''; $('workerName').focus(); }
function fillForm(no){ const w=state.workers.find(x=>x.no===Number(no)); if(!w) return; $('workerNo').value=w.no; $('workerNip').value=w.nip; $('workerName').value=w.name; if(workerType(w)==='PKWT'){ $('selectPkwt').value=w.no; $('selectFreelance').value=''; } else { $('selectFreelance').value=w.no; $('selectPkwt').value=''; } }
function normalizeNo(){ state.workers.sort((a,b)=>{ if(String(a.nip)==='133') return -1; if(String(b.nip)==='133') return 1; return (Number(a.no)||0)-(Number(b.no)||0); }); state.workers.forEach((w,i)=>w.no=i+1); }
function addWorker(){ if(!requirePermission('manageWorkers','Akses ditolak. Role ini tidak boleh menambah data pekerja.')) return; const d=getFormData(); if(!d.name){ alert('Nama pekerja wajib diisi.'); return; } if(!d.nip){ alert('NIP wajib diisi agar sistem bisa memisahkan PKWT / Freelance.'); return; } if(state.workers.some(w=>w.no===d.no)) d.no=nextNo(); state.workers.push({...d, s1:false, s2:false, s3:false}); normalizeNo(); saveState(); renderAll(); clearForm(); }
function updateWorker(){ if(!requirePermission('manageWorkers','Akses ditolak. Role ini tidak boleh mengubah data pekerja.')) return; const d=getFormData(); const w=state.workers.find(x=>x.no===d.no); if(!w){ alert('Pilih pekerja dari dropdown atau kartu terlebih dahulu.'); return; } if(!d.name){ alert('Nama pekerja wajib diisi.'); return; } if(!d.nip){ alert('NIP wajib diisi.'); return; } w.nip=d.nip; w.name=d.name; saveState(); renderAll(); clearForm(); }
function deleteWorker(){ if(!requirePermission('manageWorkers','Akses ditolak. Role ini tidak boleh menghapus data pekerja.')) return; const no=Number($('workerNo').value); const w=state.workers.find(x=>x.no===no); if(!w){ alert('Pilih pekerja yang akan dihapus.'); return; } if(!confirm(`Hapus pekerja: ${w.name}?`)) return; state.workers=state.workers.filter(x=>x.no!==no); normalizeNo(); saveState(); renderAll(); clearForm(); }
function resetShift(){
  if(scheduleInputLocked()){ alert('Jadwal tanggal ini terkunci. Klik Edit Jadwal Tanggal Ini sebelum melakukan reset.'); updateScheduleSafetyUI(); return; }
  if(!assertScheduleDateSelected()) return;
  ensureScheduleEditBaseline();
  if(!isAdmin() && isCommercialKey(activeUnitKey())){
    if(!confirm('Reset semua pilihan Shift 1, Shift 2, dan Shift 3 untuk jadwal Muatan Commercial?')) return;
    document.querySelectorAll('[data-commercial-activity-shift],[data-commercial-coordinator-shift],[data-commercial-dock-plan]').forEach(el=>{ el.checked=false; });
    document.querySelectorAll('[data-commercial-shift]').forEach(el=>{ el.checked=false; el.disabled=true; el.dataset.commercialPlanDisabled='1'; });
    commercialScheduleRowsCache=(commercialScheduleRowsCache||[]).map(r=>({...r,schedulePlan:'',s1:false,s2:false,s3:false}));
    Object.keys(commercialActivityRowsCache||{}).forEach(k=>{ commercialActivityRowsCache[k]=(commercialActivityRowsCache[k]||[]).map(r=>({...r,s1:false,s2:false,s3:false})); });
    markScheduleDirty(); saveCommercialDraftSelection(); renderReport(); updateCounts(); return;
  }
  const msg=coordinatorSingleShiftMode() ? `Reset semua pilihan ${coordinatorAllowedShiftLabel()}?` : 'Reset semua pilihan Shift 1, Shift 2, dan Shift 3?';
  if(!confirm(msg)) return;
  state.workers.forEach(w=>{w.s1=false; w.s2=false; w.s3=false;});
  markScheduleDirty(); saveState(); renderAll();
}
function stableIdPart(value){ return String(value || '').trim().toLowerCase().replace(/[^a-z0-9_-]+/g,'_').replace(/^_+|_+$/g,'') || 'default'; }
function attendanceStorageKey(payload){ const docId=attendanceDocId(payload); return `${ATTENDANCE_KEY}_${docId}`; }
function attendanceDocId(payload){
  const unitKey=stableIdPart(payload && payload.unitKey ? payload.unitKey : activeUnitKey());
  const date=stableIdPart(payload && payload.reportDate ? payload.reportDate : (state.reportDate || todayISO()));
  const scheduleKey=payload && payload.scheduleKey ? stableIdPart(payload.scheduleKey) : 'default';
  return scheduleKey && scheduleKey!=='default' ? `${unitKey}_${scheduleKey}_${date}` : `${unitKey}_${date}`;
}
function attendanceRowStableKey(row){
  return [
    stableIdPart(row && row.sourceUnitKey ? row.sourceUnitKey : activeUnitKey()),
    stableIdPart(row && row.nip ? row.nip : row && row.name ? row.name : ''),
    stableIdPart(row && row.activityKey ? row.activityKey : row && row.kegiatan ? row.kegiatan : ''),
    stableIdPart(row && row.loadingDock ? row.loadingDock : ''),
    stableIdPart(row && row.regu ? row.regu : '')
  ].join('__');
}
function dedupeAttendanceWorkers(rows){
  const map=new Map();
  (rows||[]).forEach(row=>{
    if(!row) return;
    const key=attendanceRowStableKey(row);
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
  return (workers||[]).filter(w=>w && w[shiftKey]).sort((a,b)=>String(a.name||'').localeCompare(String(b.name||''))).map(w=>({rowId:w.rowId || attendanceRowStableKey(w), nip:String(w.nip||''), name:String(w.name||''), kegiatan:w.kegiatan||'', activityKey:w.activityKey||'', activityLabel:w.activityLabel||'', loadingDock:w.loadingDock||'', regu:w.regu||''}));
}
function normalizeAttendancePayload(payload){
  const base={...(payload||{})};
  base.reportDate=base.reportDate || state.reportDate || todayISO();
  base.unitKey=base.unitKey || activeUnitKey();
  base.unit=base.unit || activeUnitName();
  base.scheduleKey=base.scheduleKey || '';
  base.id=attendanceDocId(base);
  base.attendanceDocId=base.id;
  base.dedupeKey=base.id;
  base.docIdVersion=2;
  base.workers=dedupeAttendanceWorkers(base.workers || []);
  base.shift1=shiftRowsFromWorkers(base.workers, 's1');
  base.shift2=shiftRowsFromWorkers(base.workers, 's2');
  base.shift3=shiftRowsFromWorkers(base.workers, 's3');
  base.counts={shift1:base.shift1.length, shift2:base.shift2.length, shift3:base.shift3.length, total:base.workers.length};
  return base;
}
function makeAttendancePayload(){
  if(coordinatorSingleShiftMode() || coordinatorBahanBakuMalamMode()) enforceSingleShiftInputRule();
  const rowsForPayload=selectedWorkers();
  const currentKey=activeUnitKey();
  const workersRaw=rowsForPayload.map(w=>({nip:String(w.nip),name:String(w.name),ldRegu:w.ldRegu || commercialLdReguLabel(w.loadingDock,w.regu) || '',s1:Boolean(w.s1),s2:Boolean(w.s2),s3:Boolean(w.s3),type:w.type || workerType(w),activityKey:w.activityKey||'',activityLabel:w.activityLabel||'',kegiatan:isOverzakKey(currentKey)?'Overzak':(isSiloKey(currentKey)?'Silo':(w.kegiatan||'')),sourceUnitKey:currentKey,sourceUnitName:activeUnitName(),regu:w.regu||'',loadingDock:w.loadingDock||'',checkIn:isCommercialTfActivityRow(w)?'':(w.checkIn||''),checkOut:isCommercialTfActivityRow(w)?'':(w.checkOut||'')}));
  const isCommercial=isCommercialKey(activeUnitKey());
  const commercialRows=isCommercial ? getCommercialAssignmentRows().filter(r=>normalizeRegu(r.regu) && (r.s1 || r.s2 || r.s3)).map(r=>({dock:normalizeDockName(r.dock),regu:normalizeRegu(r.regu),s1:Boolean(r.s1),s2:Boolean(r.s2),s3:Boolean(r.s3)})) : [];
  const commercialActivities=isCommercial ? COMMERCIAL_ACTIVITY_DEFS.map(def=>{
    const activityWorkers=dedupeAttendanceWorkers(selectedCommercialActivityReportRows().filter(w=>w.activityKey===def.key).map(w=>({nip:w.nip,name:w.name,s1:Boolean(w.s1),s2:Boolean(w.s2),s3:Boolean(w.s3),activityKey:def.key,activityLabel:def.label,sourceUnitKey:activeUnitKey()})));
    return {key:def.key,label:def.label,workers:activityWorkers.map(w=>({rowId:w.rowId,nip:w.nip,name:w.name,s1:Boolean(w.s1),s2:Boolean(w.s2),s3:Boolean(w.s3)}))};
  }) : [];
  return normalizeAttendancePayload({ id:null, reportDate:state.reportDate || todayISO(), company:'PT. BUDI INTI PERKASA', unit:activeUnitName(), unitKey:activeUnitKey(), loadingDock:'', regu:'', commercialAssignments:commercialRows, commercialActivities, scheduleKey:'', inputBy:currentUser ? {username:String(currentUser.username || currentUser.nip || ''),nip:String(currentUser.nip || ''),name:String(currentUser.name),role:String(currentUser.role || 'koordinator'),unit:currentUser.unit || activeUnitName(),activity:activeUnitName()} : null, workers:workersRaw, savedFrom:'pwa', inputMode: isCommercial ? 'commercial_loading_dock_regu_shift' : (isOverzakKey(activeUnitKey()) ? 'overzak_shift_1_2_3' : (isSiloKey(activeUnitKey()) ? 'silo_shift_1_2_3' : (coordinatorBahanBakuMalamMode() ? 'bongkaran_bahan_baku_malam_shift_2_3' : (coordinatorSingleShiftMode() ? (coordinatorAllowedShift()==='s2' ? 'single_shift_2' : 'single_shift_1') : 'normal')))) });
}
function saveAttendanceLocal(payload){ const data={...normalizeAttendancePayload(payload), savedAtLocal:new Date().toISOString(), onlineStatus:'local_cache'}; safeLocalSetJSON(attendanceStorageKey(data), cacheEnvelope(data, 'pending_or_cache')); return data; }
function getPendingAttendance(){ try{ const raw=localStorage.getItem(PENDING_ATTENDANCE_KEY); const arr=raw?JSON.parse(raw):[]; return Array.isArray(arr)?arr:[]; }catch(err){ return []; } }
function setPendingAttendance(rows){ try{ localStorage.setItem(PENDING_ATTENDANCE_KEY, JSON.stringify(rows)); }catch(err){ console.warn('Simpan antrian absensi gagal.', err); } updateSyncBadges(); }
function queuePendingAttendance(payload, reason){ const normalized=normalizeAttendancePayload(payload); const rows=getPendingAttendance().filter(x=>x && attendanceDocId(x)!==normalized.id); rows.push({...normalized, queuedAtLocal:new Date().toISOString(), lastSyncStatus:'pending', lastSyncError:reason ? String(reason).slice(0,220) : ''}); setPendingAttendance(rows); }
async function saveAttendanceOnline(payload){ const bridge=window.AbsensiFirebase; if(!(bridge && bridge.enabled && bridge.saveAttendance)) return {online:false, reason:'Firebase belum online'}; const normalized=normalizeAttendancePayload(payload); const result=await bridge.saveAttendance(normalized); clearAdminAttendanceCache(normalized.unitKey, normalized.reportDate); return {online:true, id:(result && result.id) || normalized.id}; }
async function syncPendingAttendanceOnline(targetId){
  const bridge=window.AbsensiFirebase;
  const rows=getPendingAttendance();
  if(!(bridge && bridge.enabled && bridge.saveAttendance)) return { attempted:0, success:0, failed:rows.length, remaining:rows.length, reason:'Firebase belum online' };
  if(!rows.length) return { attempted:0, success:0, failed:0, remaining:0 };
  const remain=[]; const sent=new Set(); let attempted=0; let success=0; let failed=0;
  for(const payload of rows){
    const normalized=normalizeAttendancePayload(payload);
    if(targetId && normalized.id!==targetId){ remain.push(payload); continue; }
    if(sent.has(normalized.id)) continue;
    attempted++;
    try{
      await bridge.saveAttendance(normalized);
      sent.add(normalized.id); success++;
    }catch(err){
      console.warn('Absensi pending belum berhasil disinkronkan.', err);
      failed++;
      remain.push({...normalized, lastSyncStatus:'failed', lastSyncAtLocal:new Date().toISOString(), lastSyncError:(err && err.message ? err.message : String(err || '')).slice(0,220)});
    }
  }
  setPendingAttendance(remain);
  if(success || failed){ auditLog('sync_pending_attendance','sync',{message:'Proses sync pending absensi', attempted, success, failed, remaining:remain.length, targetId:targetId || ''}).catch(()=>{}); }
  renderAdminSyncStatus(false);
  renderAdminDashboard();
  return { attempted, success, failed, remaining:remain.length };
}
let isSavingSchedule=false;
async function saveSchedule(){
  if(!requirePermission('saveAttendance','Akses ditolak. Role ini tidak boleh menyimpan absensi.')) return;
  if(isSavingSchedule) return;
  const selectedDate=assertScheduleDateSelected();
  if(!selectedDate) return;
  if(scheduleInputLocked()){ alert('Jadwal pada tanggal aktif sudah ada dan masih terkunci. Klik tombol Edit Jadwal Tanggal Ini sebelum menyimpan perubahan.'); updateScheduleSafetyUI(); return; }
  if(coordinatorSingleShiftMode() || coordinatorBahanBakuMalamMode()) enforceSingleShiftInputRule();
  const rows=selectedWorkers();
  if(rows.length===0){ confirmEmptyScheduleBlocked(); return; }
  const duplicateCheck=await validateBahanBakuNoDuplicateSelection();
  if(!duplicateCheck.ok){ await renderWorkers(); renderReport(); updateCounts(); return; }
  const btn=$('btnSaveSchedule'); const oldText=btn ? btn.textContent : '';
  try{
    isSavingSchedule=true;
    if(btn){ btn.disabled=true; btn.textContent='Mengecek data tersimpan...'; }
    await saveState();
    await refreshBahanBakuActivityConflictCache({force:true});
    const candidatePayload=makeAttendancePayload();
    if(!confirmScheduleSaveSummary(candidatePayload)) return;
    const overwriteCheck=await confirmOverwriteIfNeeded(candidatePayload);
    if(!overwriteCheck.ok) return;
    if(overwriteCheck.existing && scheduleHasSavedRows(overwriteCheck.existing)){
      if(btn){ btn.textContent='Membuat backup data lama...'; }
      const backupResult=await createScheduleBackupBeforeOverwrite(overwriteCheck.existing, candidatePayload, overwriteCheck.diff);
      if(!backupResult.ok){
        alert('Backup otomatis sebelum overwrite gagal dibuat. Proses simpan dibatalkan agar data lama tetap aman. Coba ulangi simpan, atau hubungi admin jika pesan ini terus muncul.');
        return;
      }
    }
    if(btn){ btn.textContent='Menyimpan...'; }
    const payload=saveAttendanceLocal(candidatePayload);
    let online=false;
    try{ const result=await saveAttendanceOnline(payload); online=Boolean(result && result.online); }catch(err){ console.warn('Simpan absensi Firebase gagal, masuk antrian sinkron.', err); queuePendingAttendance(payload, err && err.message ? err.message : err); }
    if(!online){ queuePendingAttendance(payload, 'Firebase belum online'); } else { await syncPendingAttendanceOnline(); }
    const diff=overwriteCheck.diff || scheduleRowsDiff(null, payload);
    const historyEntry={id:'sch_'+Date.now(), changedAt:new Date().toISOString(), unitKey:payload.unitKey, unitName:payload.unitName, reportDate:payload.reportDate, attendanceDocId:payload.id, actor:currentAuditActor(), beforeCount:diff.beforeCount, afterCount:diff.afterCount, changes:diff.changes.slice(0,80), online};
    saveScheduleChangeHistoryLocal(historyEntry);
    auditLog('schedule_change_history','attendance',{message:'Riwayat perubahan jadwal pekerja', unitKey:payload.unitKey, unitName:payload.unitName, reportDate:payload.reportDate, attendanceDocId:payload.id, beforeCount:diff.beforeCount, afterCount:diff.afterCount, changedRows:diff.changes.length, online}, overwriteCheck.existing, payload).catch(()=>{});
    scheduleEditSession.dirty=false;
    await resetScheduleFormAfterSave(payload.reportDate);
    await renderAll();
    auditLog('save_attendance','attendance',{message: online ? 'Absensi tersimpan online ke Firebase' : 'Absensi tersimpan lokal dan masuk antrean sync', unitKey:payload.unitKey, unitName:payload.unitName, reportDate:payload.reportDate, attendanceDocId:payload.id, totalRows:(payload.workers||[]).length, online}).catch(()=>{});
    alert((online ? 'Jadwal pekerja sudah disimpan online ke Firebase.' : 'Jadwal pekerja tersimpan lokal dan masuk antrian sinkron. Saat Firebase online, data akan dikirim otomatis.') + `

Form sudah dikosongkan otomatis. Untuk input atau edit jadwal berikutnya, pilih tanggal lagi terlebih dahulu.`);
  } finally { isSavingSchedule=false; if(btn){ btn.textContent=oldText || '💾 Simpan'; } updateScheduleSafetyUI(); }
}
function printReport(){ if(!requirePermission('printReports','Akses ditolak. Role ini tidak boleh mencetak laporan.')) return; if(selectedWorkers().length===0){ alert('Print / PDF belum bisa dicetak. Pilih minimal 1 pekerja terlebih dahulu.'); return; } window.print(); }

function adminAttendanceCacheKey(unitKeyValue, dateValue){ return `${unitKeyValue || ''}__${dateValue || todayISO()}`; }
function cloneData(value){ try{ return value ? JSON.parse(JSON.stringify(value)) : value; }catch(err){ return value; } }
function rememberAdminAttendance(unitKeyValue, dateValue, payload, source){
  const key=adminAttendanceCacheKey(unitKeyValue, dateValue);
  if(payload){ adminAttendanceCache.set(key,{payload:cloneData(payload), source:source || 'firestore', cachedAt:Date.now()}); }
  return payload;
}
function clearAdminAttendanceCache(unitKeyValue, dateValue){
  if(unitKeyValue && dateValue){ adminAttendanceCache.delete(adminAttendanceCacheKey(unitKeyValue,dateValue)); return; }
  adminAttendanceCache.clear();
}
async function readAttendancePayloadForUnit(unitKeyValue, dateValue, bridge, options){
  const opt=options || {};
  const cacheKey=adminAttendanceCacheKey(unitKeyValue,dateValue);
  if(!opt.force && adminAttendanceCache.has(cacheKey)){
    adminAttendanceCacheMeta.hits++;
    adminAttendanceCacheMeta.lastSource='memory_cache';
    return cloneData(adminAttendanceCache.get(cacheKey).payload);
  }
  adminAttendanceCacheMeta.misses++;
  let payload=null;
  if(bridge && bridge.enabled && bridge.loadAttendance){
    try{ payload=await bridge.loadAttendance(unitKeyValue,dateValue); if(payload) adminAttendanceCacheMeta.lastSource='firestore'; }catch(err){ console.warn('Load absensi Firebase gagal untuk '+unitKeyValue+', cek data lokal.', err); }
  }
  if(!payload){
    const cached=unwrapCacheEnvelope(safeLocalGetJSON(`${ATTENDANCE_KEY}_${unitKeyValue}_${dateValue}`, null));
    payload=cached || null;
    if(payload) adminAttendanceCacheMeta.lastSource='local_cache';
  }
  return rememberAdminAttendance(unitKeyValue,dateValue,payload,adminAttendanceCacheMeta.lastSource);
}
async function readAttendancePayloadBatch(requests, bridge, options){
  const opt=options || {};
  const reqs=Array.isArray(requests) ? requests : [];
  const out={};
  const missing=[];
  reqs.forEach(req=>{
    const key=req.key || adminAttendanceCacheKey(req.unitKey, req.reportDate);
    const cacheKey=adminAttendanceCacheKey(req.unitKey, req.reportDate);
    if(!opt.force && adminAttendanceCache.has(cacheKey)){
      adminAttendanceCacheMeta.hits++;
      out[key]=cloneData(adminAttendanceCache.get(cacheKey).payload);
    }else{
      adminAttendanceCacheMeta.misses++;
      missing.push({...req,key,cacheKey});
    }
  });
  if(missing.length && bridge && bridge.enabled && bridge.loadAttendanceBatch){
    try{
      const batch=await bridge.loadAttendanceBatch(missing.map(r=>({key:r.key, unitKey:r.unitKey, reportDate:r.reportDate, scheduleKey:r.scheduleKey || ''})));
      missing.slice().forEach(req=>{
        if(batch && Object.prototype.hasOwnProperty.call(batch, req.key)){
          const payload=batch[req.key];
          out[req.key]=payload || null;
          if(payload) rememberAdminAttendance(req.unitKey, req.reportDate, payload, 'firestore_batch');
        }
      });
      adminAttendanceCacheMeta.lastSource='firestore_batch';
    }catch(err){ console.warn('Batch load absensi Firestore gagal, memakai fallback satuan/lokal.', err); }
  }
  for(const req of missing){
    if(Object.prototype.hasOwnProperty.call(out, req.key)) continue;
    out[req.key]=await readAttendancePayloadForUnit(req.unitKey, req.reportDate, bridge, {force:opt.force});
  }
  return out;
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
function sourceRowsPreserveSelectedShifts(payload, sourceUnitKey, options){
  const opt=options || {};
  const rawRows=rowsFromAttendancePayload(payload);
  return rawRows.filter(r=>r && (r.s1 || r.s2 || r.s3)).map(r=>({
    nip:String(r.nip||''),
    name:String(r.name||''),
    s1:opt.allowS1===false ? false : Boolean(r.s1),
    s2:opt.allowS2===false ? false : Boolean(r.s2),
    s3:opt.allowS3===false ? false : Boolean(r.s3),
    type:r.type || '',
    checkIn:r.checkIn || '',
    checkOut:r.checkOut || '',
    kegiatan:isOverzakKey(sourceUnitKey) ? 'Overzak' : (r.kegiatan || r.activityLabel || 'Bongkaran'),
    sourceUnitKey:sourceUnitKey,
    sourceUnitName:unitNameFromKey(sourceUnitKey)
  })).filter(r=>r.nip && (r.s1 || r.s2 || r.s3));
}
function mergeRowsByNip(rows){
  const map=new Map();
  rows.forEach(row=>{
    const nip=String(row.nip||'').trim();
    if(!nip) return;
    const kegiatanLabel=String(row.kegiatan || '').toLowerCase().includes('overzak') ? 'Overzak' : (String(row.kegiatan || '').toLowerCase().includes('silo') ? 'Silo' : (row.kegiatan || 'Bongkaran'));
    const key=nip + '__' + stableIdPart(kegiatanLabel);
    const prev=map.get(key) || { nip:nip, name:row.name || '', s1:false, s2:false, s3:false, type:row.type || '', kegiatan:kegiatanLabel, checkIn:'', checkOut:'', sourceUnitKey:'', sourceUnitName:'' };
    prev.name = prev.name || row.name || '';
    prev.type = prev.type || row.type || '';
    prev.s1 = Boolean(prev.s1 || row.s1);
    prev.s2 = Boolean(prev.s2 || row.s2);
    prev.s3 = Boolean(prev.s3 || row.s3);
    prev.kegiatan = kegiatanLabel;
    prev.checkIn = row.checkIn || prev.checkIn || '';
    prev.checkOut = row.checkOut || prev.checkOut || '';
    prev.sourceUnitKey = [prev.sourceUnitKey, row.sourceUnitKey].filter(Boolean).filter((v,i,a)=>a.indexOf(v)===i).join(',');
    prev.sourceUnitName = [prev.sourceUnitName, row.sourceUnitName].filter(Boolean).filter((v,i,a)=>a.indexOf(v)===i).join(' / ');
    map.set(key, prev);
  });
  return Array.from(map.values());
}
function buildBahanBakuCombinedPayload(pagiPayload, malamPayload, dateValue, overzakPayload, operPayload){
  const pagiAllRows=rowsFromAttendancePayload(pagiPayload);
  const pagiRows=pagiAllRows.filter(r=>r && (r.s1 || r.s2 || r.s3) && !String(r.kegiatan||'').toLowerCase().includes('overzak')).map(r=>({nip:String(r.nip||''),name:String(r.name||''),s1:Boolean(r.s1),s2:Boolean(r.s2),s3:Boolean(r.s3),type:r.type||'',kegiatan:'Bongkaran',checkIn:r.checkIn||'',checkOut:r.checkOut||'',sourceUnitKey:BAHAN_BAKU_PAGI_KEY,sourceUnitName:unitNameFromKey(BAHAN_BAKU_PAGI_KEY)})).filter(r=>r.nip);
  const malamRows=sourceRowsPreserveSelectedShifts(malamPayload, BAHAN_BAKU_MALAM_KEY, {allowS1:false, allowS2:true, allowS3:true}).map(r=>({...r,kegiatan:'Bongkaran'}));
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
  const operRows=sourceRowsPreserveSelectedShifts(operPayload, 'oper_oper_bahan_baku').map(r=>({...r,kegiatan:'Oper2 BB'}));
  const rows=mergeRowsByNip([...operRows, ...pagiRows, ...malamRows, ...overzakFromPagi, ...overzakRaw]);
  return {
    id:`${BAHAN_BAKU_GABUNGAN_KEY}_${dateValue}`,
    reportDate:dateValue,
    company:'PT. BUDI INTI PERKASA',
    unit:BAHAN_BAKU_GABUNGAN_NAME,
    unitKey:BAHAN_BAKU_GABUNGAN_KEY,
    selectedUnitKey:(($('adminReportUnitSelect') && $('adminReportUnitSelect').value) || BAHAN_BAKU_PAGI_KEY),
    combinedAttendance:true,
    inputBy:{ username:'gabungan', nip:'', name:'Gabungan Koordinator Oper Oper BB, Bahan Baku Pagi/Malam & Overzak', role:'system', unit:BAHAN_BAKU_GABUNGAN_NAME },
    counts:{ shift1:rows.filter(r=>r.s1).length, shift2:rows.filter(r=>r.s2).length, shift3:rows.filter(r=>r.s3).length, total:rows.length },
    workers:rows.map(r=>({nip:r.nip,name:r.name,kegiatan:bahanBakuKegiatanLabel(r),s1:Boolean(r.s1),s2:Boolean(r.s2),s3:Boolean(r.s3),type:r.type||'',checkIn:r.checkIn||'',checkOut:r.checkOut||'',sourceUnitKey:r.sourceUnitKey||'',sourceUnitName:r.sourceUnitName||''})),
    shift1:rows.filter(r=>r.s1).map(r=>({nip:r.nip,name:r.name,kegiatan:bahanBakuKegiatanLabel(r),checkIn:r.checkIn||'',checkOut:r.checkOut||'',sourceUnitKey:r.sourceUnitKey||'',sourceUnitName:r.sourceUnitName||''})),
    shift2:rows.filter(r=>r.s2).map(r=>({nip:r.nip,name:r.name,kegiatan:bahanBakuKegiatanLabel(r),checkIn:r.checkIn||'',checkOut:r.checkOut||'',sourceUnitKey:r.sourceUnitKey||'',sourceUnitName:r.sourceUnitName||''})),
    shift3:rows.filter(r=>r.s3).map(r=>({nip:r.nip,name:r.name,kegiatan:bahanBakuKegiatanLabel(r),checkIn:r.checkIn||'',checkOut:r.checkOut||'',sourceUnitKey:r.sourceUnitKey||'',sourceUnitName:r.sourceUnitName||''})),
    sources:{ oper:Boolean(operPayload), pagi:Boolean(pagiPayload), malam:Boolean(malamPayload), overzak:Boolean(overzakPayload) || overzakFromPagi.length>0 },
    savedFrom:'combined_admin_view'
  };
}
async function loadBahanBakuCombinedAttendance(dateValue, bridge, options){
  const batch=await readAttendancePayloadBatch([
    {key:'pagi', unitKey:BAHAN_BAKU_PAGI_KEY, reportDate:dateValue},
    {key:'malam', unitKey:BAHAN_BAKU_MALAM_KEY, reportDate:dateValue},
    {key:'overzak', unitKey:OVERZAK_KEY, reportDate:dateValue},
    {key:'oper', unitKey:'oper_oper_bahan_baku', reportDate:dateValue}
  ], bridge, options || {});
  const pagiPayload=batch.pagi || null;
  const malamPayload=batch.malam || null;
  const overzakPayload=batch.overzak || null;
  const operPayload=batch.oper || null;
  if(!operPayload && !pagiPayload && !malamPayload && !overzakPayload) return null;
  return buildBahanBakuCombinedPayload(pagiPayload, malamPayload, dateValue, overzakPayload, operPayload);
}
function globalCheckDocId(dateValue){ return 'global_check_times_' + (dateValue || todayISO()); }
function normalizeGlobalCheckMap(value){
  const raw=value && value.map && typeof value.map==='object' ? value.map : value;
  const out={};
  if(raw && typeof raw==='object'){
    Object.keys(raw).forEach(nip=>{
      const row=raw[nip] || {};
      const cleanNip=String(nip||'').trim();
      const checkIn=normalizeTimeToHMS(row.checkIn || row.cekIn || '');
      const checkOut=normalizeTimeToHMS(row.checkOut || row.cekOut || '');
      if(cleanNip && (checkIn || checkOut)) out[cleanNip]={...row, checkIn, checkOut};
    });
  }
  return out;
}
async function loadGlobalCheckTimesForDate(dateValue, force=false){
  const date=dateValue || todayISO();
  const store=getGlobalCheckStore();
  if(!force && store[date] && typeof store[date]==='object') return store[date];
  const bridge=await waitFirebase();
  if(bridge && bridge.enabled && bridge.loadMasterData){
    try{
      const remote=await bridge.loadMasterData(globalCheckDocId(date));
      if(remote && typeof remote==='object'){
        const map=normalizeGlobalCheckMap(remote);
        store[date]=map;
        setGlobalCheckStore(store);
        return map;
      }
    }catch(err){ console.warn('Load Cek In/Out global Firestore gagal, memakai cache lokal bila ada.', err); }
  }
  return (store[date] && typeof store[date]==='object') ? store[date] : {};
}
async function saveGlobalCheckTimesForDate(dateValue, map){
  const date=dateValue || todayISO();
  const clean=normalizeGlobalCheckMap(map);
  const bridge=window.AbsensiFirebase && window.AbsensiFirebase.enabled ? window.AbsensiFirebase : await waitFirebase();
  if(bridge && bridge.enabled && bridge.saveMasterData){
    try{
      await bridge.saveMasterData(globalCheckDocId(date), { reportDate:date, map:clean, updatedAtLocal:new Date().toISOString() }, currentUser);
      const store=getGlobalCheckStore();
      store[date]=clean;
      setGlobalCheckStore(store);
      return { online:true, count:Object.keys(clean).length };
    }catch(err){
      console.warn('Simpan Cek In/Out global Firestore gagal, data disimpan sebagai cache offline lokal.', err);
      const store=getGlobalCheckStore();
      store[date]=clean;
      setGlobalCheckStore(store);
      return { online:false, count:Object.keys(clean).length, error:err };
    }
  }
  const store=getGlobalCheckStore();
  store[date]=clean;
  setGlobalCheckStore(store);
  return { online:false, count:Object.keys(clean).length };
}
async function saveCombinedRowsToGlobalCheckTimes(dateValue, rows){
  if(!dateValue || !Array.isArray(rows) || !rows.length) return 0;
  const day={...(await loadGlobalCheckTimesForDate(dateValue, true))};
  let saved=0;
  rows.forEach(r=>{
    const nip=String(r.nip||'').trim();
    const checkIn=normalizeTimeToHMS(r.checkIn||'');
    const checkOut=normalizeTimeToHMS(r.checkOut||'');
    if(!nip || (!checkIn && !checkOut)) return;
    day[nip]={checkIn,checkOut,source:'manual_combined_admin',updatedAtLocal:new Date().toISOString()};
    saved++;
  });
  await saveGlobalCheckTimesForDate(dateValue, day);
  return saved;
}
async function loadAdminAttendance(event){
  if(!requirePermission('viewReports','Tampilkan laporan admin hanya untuk admin/role laporan yang diizinkan.')) return;
  if(!isAdmin()) return;
  const unitKeyValue=$('adminReportUnitSelect') ? $('adminReportUnitSelect').value : adminManagedUnitKey;
  const dateValue=$('adminReportDate') ? $('adminReportDate').value : todayISO();
  const force=Boolean(event && event.currentTarget && event.currentTarget.id==='btnAdminRefreshAttendance');
  const btn=(event && event.currentTarget) || $('btnAdminLoadAttendance');
  const old=btn?btn.textContent:'';
  try{
    if(btn){ btn.disabled=true; btn.textContent=force ? 'Refresh...' : 'Memuat...'; }
    adminReportData=null;
    const bridge=await waitFirebase();
    if(String(unitKeyValue || '')===BAHAN_BAKU_GABUNGAN_KEY || isBahanBakuPagiMalamKey(unitKeyValue)){
      adminReportData=await loadBahanBakuCombinedAttendance(dateValue, bridge, {force});
    }else{
      adminReportData=await readAttendancePayloadForUnit(unitKeyValue, dateValue, bridge, {force});
    }
    if(adminReportData){
      const globalMatched=applyCheckTimesToAdminReport(await loadGlobalCheckTimesForDate(dateValue, force), {render:false, overwrite:true});
      if(globalMatched){ adminReportData.globalCheckTimesApplied=globalMatched; }
    }
    renderReport();
    if(adminReportData && $('adminAttendanceInfo')){
      const src=adminAttendanceCacheMeta.lastSource || (force ? 'refresh' : 'cache');
      $('adminAttendanceInfo').textContent = `${$('adminAttendanceInfo').textContent || ''}  •  Sumber: ${src}. Cache laporan: ${adminAttendanceCache.size} item.`.trim();
    }
    if(!adminReportData) alert('Data absensi tidak ditemukan untuk bagian dan tanggal yang dipilih.');
  }finally{
    if(btn){ btn.disabled=false; btn.textContent=old || '🔍 Tampilkan'; }
  }
}
function printAdminAttendance(){
  if(!requirePermission('printReports','Akses ditolak. Role ini tidak boleh mencetak laporan.')) return;
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
    sessionStorage.setItem('BIP_PRINT_ABSENSI_PAYLOAD', JSON.stringify(payload));
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
function setGlobalCheckStore(store){ try{ localStorage.setItem(GLOBAL_CHECK_TIMES_KEY, JSON.stringify(store || {})); }catch(err){ console.warn('Cache Cek In/Out global lokal gagal disimpan.', err); } }
function getGlobalCheckTimesForDate(dateValue){ const store=getGlobalCheckStore(); return (dateValue && store[dateValue] && typeof store[dateValue]==='object') ? store[dateValue] : {}; }
function twoDigits(n){ return String(Math.max(0, Math.min(99, Number(n)||0))).padStart(2,'0'); }
function formatImportedTime(value){ if(value===null || value===undefined) return ''; if(value instanceof Date && !isNaN(value)) return normalizeTimeToHMS(value); if(typeof value==='number' && Number.isFinite(value)){ const fraction=((value%1)+1)%1; if((value>=0 && value<1) || fraction>0){ const seconds=Math.round(fraction*86400); return formatSecondsToHMS(seconds); } if(value>=0 && value<24) return formatSecondsToHMS(value*3600); return normalizeTimeToHMS(String(value).trim()); } const raw=String(value).trim(); if(!raw) return ''; return normalizeTimeToHMS(raw); }
function normalizeImportDate(value, fallbackDate){ const fallback=fallbackDate || todayISO(); if(value===null || value===undefined || value==='') return fallback; if(value instanceof Date && !isNaN(value)) return value.toISOString().slice(0,10); if(typeof value==='number' && Number.isFinite(value) && value>20000 && value<80000){ const base=new Date(Date.UTC(1899,11,30)); base.setUTCDate(base.getUTCDate()+Math.floor(value)); return base.toISOString().slice(0,10); } const raw=String(value).trim(); if(!raw) return fallback; let m=raw.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/); if(m) return `${m[1]}-${twoDigits(m[2])}-${twoDigits(m[3])}`; m=raw.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})/); if(m) return `${m[3]}-${twoDigits(m[2])}-${twoDigits(m[1])}`; const d=new Date(raw); if(!isNaN(d)) return d.toISOString().slice(0,10); return fallback; }
function checkMapFromImportRows(rows, fallbackDate){ const byDate={}; const skipped=[]; const duplicates=[]; let imported=0; (rows||[]).forEach((row,idx)=>{ const nip=String(findCell(row,['NIP','No Induk','Nomor Induk','ID','PIN','Kode'])||'').trim(); const checkIn=formatImportedTime(findCell(row,['Cek In','Check In','Jam Masuk','Masuk','IN','Clock In'])); const checkOut=formatImportedTime(findCell(row,['Cek Out','Check Out','Jam Keluar','Keluar','OUT','Clock Out'])); const dateValue=normalizeImportDate(findCell(row,['Tanggal','Tgl','Date','Tanggal Absensi','Hari Tanggal']), fallbackDate); if(!nip || (!checkIn && !checkOut)){ skipped.push(idx+2); return; } if(!byDate[dateValue]) byDate[dateValue]={}; if(byDate[dateValue][nip]) duplicates.push({row:idx+2,date:dateValue,nip}); byDate[dateValue][nip]={checkIn,checkOut,source:'global_import',updatedAtLocal:new Date().toISOString()}; imported++; }); const dateCounts={}; Object.keys(byDate).forEach(date=>{ dateCounts[date]=Object.keys(byDate[date]||{}).length; }); return {byDate, imported, skipped, duplicates, dateCounts, totalRows:(rows||[]).length}; }
function countGlobalCheckRows(dateValue){ const map=getGlobalCheckTimesForDate(dateValue); return Object.keys(map || {}).length; }
async function updateGlobalCheckInfo(message){ const dateValue=($('adminGlobalCheckDate') && $('adminGlobalCheckDate').value) || todayISO(); const map=await loadGlobalCheckTimesForDate(dateValue, true); const count=Object.keys(map || {}).length; const base=`Data global tanggal ${dateValue}: ${count} NIP tersimpan. Data ini dipakai untuk semua kegiatan berdasarkan NIP pekerja.`; if($('adminGlobalCheckInfo')) $('adminGlobalCheckInfo').textContent=message ? `${message} ${base}` : base; }

function getCachedCheckImportHistory(){ const rows=safeLocalGetJSON(IMPORT_HISTORY_CACHE_KEY, []); return Array.isArray(rows) ? rows : []; }
function setCachedCheckImportHistory(rows){ safeLocalSetJSON(IMPORT_HISTORY_CACHE_KEY, (Array.isArray(rows)?rows:[]).slice(0,50)); }
function summarizeCheckImportDates(entry){ const dates=Array.isArray(entry && entry.dates) ? entry.dates : Object.keys((entry && entry.dateCounts) || {}); if(!dates.length) return '-'; return dates.slice(0,4).join(', ') + (dates.length>4 ? ` +${dates.length-4}` : ''); }
function cacheImportHistoryEntry(entry){ const rows=getCachedCheckImportHistory(); const row={...entry, id:entry.id || ('local_'+Date.now()), localOnly:entry.localOnly || false, importedAtLocal:entry.importedAtLocal || new Date().toISOString()}; rows.unshift(row); setCachedCheckImportHistory(rows); return row; }
async function recordCheckImportHistory(entry){ const payload={...(entry||{}), importedAtLocal:(entry&&entry.importedAtLocal)||new Date().toISOString()}; try{ const bridge=await waitFirebase(); if(bridge && bridge.enabled && bridge.saveCheckImportHistory){ const saved=await bridge.saveCheckImportHistory(payload, currentUser); cacheImportHistoryEntry({...payload, id:saved.id, localOnly:false}); return saved; } }catch(err){ console.warn('Riwayat import Firestore gagal, disimpan cache lokal.', err); payload.status=payload.status || 'local_cache'; payload.errorMessage=payload.errorMessage || (err && err.message ? err.message : String(err)); } payload.localOnly=true; return cacheImportHistoryEntry(payload); }
async function loadCheckImportHistory(force=false){ if(!force){ const cached=getCachedCheckImportHistory(); if(cached.length) return cached; } try{ const bridge=await waitFirebase(); if(bridge && bridge.enabled && bridge.loadCheckImportHistory){ const rows=await bridge.loadCheckImportHistory(30); setCachedCheckImportHistory(rows || []); return rows || []; } }catch(err){ console.warn('Load riwayat import gagal, pakai cache lokal.', err); } return getCachedCheckImportHistory(); }
async function renderGlobalCheckImportHistory(force=true){ const el=$('adminCheckImportHistory'); if(!el) return; el.innerHTML='<div class="empty-admin-list">Memuat riwayat import...</div>'; const rows=await loadCheckImportHistory(force); if(!rows.length){ el.innerHTML='<div class="empty-admin-list">Belum ada riwayat import Cek In/Out.</div>'; return; } el.innerHTML=rows.slice(0,20).map(row=>{ const status=String(row.status||'success'); const badge=status==='success'?'✅ Berhasil':(status==='cleared'?'🗑 Dihapus':(row.localOnly?'💾 Cache lokal':'⚠️ '+status)); const file=row.fileName || (status==='cleared' ? 'Hapus data tanggal' : '-'); const counts=`Valid: ${Number(row.importedRows||0)} | Unik: ${Object.values(row.dateCounts||{}).reduce((a,b)=>a+Number(b||0),0)} | Lewat: ${Number(row.skippedRows||0)} | Dobel: ${Number(row.duplicateRows||0)}`; return `<div class="sync-pending-item"><div><b>${safeText(badge)}</b> <span class="muted">${safeText(new Date(row.importedAtLocal||Date.now()).toLocaleString('id-ID'))}</span></div><div><b>File:</b> ${safeText(file)}</div><div><b>Tanggal:</b> ${safeText(summarizeCheckImportDates(row))}</div><div><b>Ringkasan:</b> ${safeText(counts)}${row.appliedRows!==undefined ? ` | Cocok laporan: ${Number(row.appliedRows||0)}` : ''}</div>${row.importedBy&&row.importedBy.username?`<div><b>User:</b> ${safeText(row.importedBy.name||row.importedBy.username)} (${safeText(row.importedBy.role||'')})</div>`:''}${row.errorMessage?`<div class="muted">Error: ${safeText(row.errorMessage)}</div>`:''}</div>`; }).join(''); }

function payloadRowFromReportRow(r){
  return {nip:r.nip,name:r.name,ldRegu:r.ldRegu||commercialLdReguLabel(r.loadingDock,r.regu)||'',s1:Boolean(r.s1),s2:Boolean(r.s2),s3:Boolean(r.s3),type:r.type||'',activityKey:r.activityKey||'',activityLabel:r.activityLabel||'',kegiatan:r.kegiatan||r.activityLabel||'',sourceUnitKey:r.sourceUnitKey||'',sourceUnitName:r.sourceUnitName||'',regu:r.regu||'',loadingDock:r.loadingDock||'',checkIn:isCommercialTfActivityRow(r)?'':normalizeTimeToHMS(r.checkIn||''),checkOut:isCommercialTfActivityRow(r)?'':normalizeTimeToHMS(r.checkOut||'')};
}
function updateAdminReportDataFromRows(rows){
  adminReportData.workers=rows.map(payloadRowFromReportRow);
  adminReportData.shift1=rows.filter(r=>r.s1).map(payloadRowFromReportRow);
  adminReportData.shift2=rows.filter(r=>r.s2).map(payloadRowFromReportRow);
  adminReportData.shift3=rows.filter(r=>r.s3).map(payloadRowFromReportRow);
  adminReportData.counts={shift1:rows.filter(r=>r.s1).length,shift2:rows.filter(r=>r.s2).length,shift3:rows.filter(r=>r.s3).length,total:rows.length};
  adminReportData.checkTimes=Object.fromEntries(rows.map(r=>[String(r.nip),{checkIn:r.checkIn||'',checkOut:r.checkOut||''}]));
}
function applyCheckTimesToAdminReport(checkMap, options){ if(!isAdmin() || !adminReportData) return 0; const opts=options || {}; const rows=rowsFromAttendancePayload(adminReportData); let changed=0; rows.forEach(row=>{ if(isCommercialTfActivityRow(row)){ row.checkIn=''; row.checkOut=''; return; } const key=String(row.nip||''); const data=checkMap && checkMap[key]; if(!data) return; const importedIn=normalizeTimeToHMS(data.checkIn || data.cekIn || ''); const importedOut=normalizeTimeToHMS(data.checkOut || data.cekOut || ''); if(!importedIn && !importedOut) return; const beforeIn=row.checkIn || ''; const beforeOut=row.checkOut || ''; if(opts.overwrite===false){ if(importedIn && !row.checkIn) row.checkIn=importedIn; if(importedOut && !row.checkOut) row.checkOut=importedOut; }else{ if(importedIn || opts.clearMissing) row.checkIn=importedIn; if(importedOut || opts.clearMissing) row.checkOut=importedOut; } if((row.checkIn||'')!==beforeIn || (row.checkOut||'')!==beforeOut) changed++; }); updateAdminReportDataFromRows(rows); if(opts.render!==false) renderReport(); return changed; }
function updateAdminReportRowsWithCheckTimes(rows){ updateAdminReportDataFromRows(rows); }
function parseWorkTimeToMinutes(value){ const seconds=parseAttendanceTimeToSeconds(value); return seconds===null ? 0 : Math.floor(seconds/60); }
function formatMinutesToWorkTime(total){ return formatSecondsToHMS((Number(total)||0)*60); }
function randBetween(min,max){ min=Number(min)||0; max=Number(max)||min; if(max<min){ const t=min; min=max; max=t; } return Math.floor(Math.random()*(max-min+1))+min; }
function parseWorkTimeToSeconds(value){ const seconds=parseAttendanceTimeToSeconds(value); return seconds===null ? 0 : seconds; }
function randomBeforeWorkTime(value,minBefore,maxBefore){ const offset=(randBetween(minBefore,maxBefore)*60)+randBetween(0,59); return formatSecondsToHMS(parseWorkTimeToSeconds(value)-offset); }
function randomAfterWorkTime(value,minAfter,maxAfter){ const offset=(randBetween(minAfter,maxAfter)*60)+randBetween(0,59); return formatSecondsToHMS(parseWorkTimeToSeconds(value)+offset); }
function adminAutoBaseTime(inputId, fallback){
  const el=$(inputId);
  const normalized=normalizeTimeToHMS((el && el.value ? el.value.trim() : '') || fallback);
  if(el && normalized) el.value=normalized;
  return normalized || normalizeTimeToHMS(fallback);
}
function adminApplyAutoCheckTimes(){
  if(!requirePermission('editCheckTimes','Isi otomatis cek in/out hanya untuk admin.')) return;
  if(!isAdmin()) return;
  if(!adminReportData){ alert('Tampilkan data absensi terlebih dahulu.'); return; }
  const s1In=adminAutoBaseTime('adminAutoS1In','07:00:00');
  const s1Out=adminAutoBaseTime('adminAutoS1Out','17:00:00');
  const s2In=adminAutoBaseTime('adminAutoS2In','17:00:00');
  const s2Out=adminAutoBaseTime('adminAutoS2Out','23:00:00');
  const s3In=adminAutoBaseTime('adminAutoS3In','23:00:00');
  const s3Out=adminAutoBaseTime('adminAutoS3Out','07:00:00');
  const rows=rowsFromAttendancePayload(adminReportData);
  const useS3=isAdminAutoShift3Enabled();
  const randomOpts=getAdminAutoRandomOptions();
  adminAttendanceOptions.autoInMinBefore=randomOpts.inMin;
  adminAttendanceOptions.autoInMaxBefore=randomOpts.inMax;
  adminAttendanceOptions.autoOutMinAfter=randomOpts.outMin;
  adminAttendanceOptions.autoOutMaxAfter=randomOpts.outMax;
  saveAdminAttendanceOptionsToFirestore().catch(err=>console.warn('Simpan aturan acak otomatis gagal.', err));
  const cekInMinBefore=randomOpts.inMin;
  const cekInMaxBefore=randomOpts.inMax;
  const cekOutMinAfter=randomOpts.outMin;
  const cekOutMaxAfter=randomOpts.outMax;
  let filledIn=0, filledOut=0, skippedExisting=0, skippedNoShift=0, skippedTf=0;
  rows.forEach(r=>{
    if(isCommercialTfActivityRow(r)){ skippedTf++; return; }
    const autoS1=!!r.s1;
    const autoS2=!!r.s2;
    const autoS3=useS3 && !!r.s3;
    let nextIn='', nextOut='';
    if(autoS1 && (autoS2 || autoS3)){ nextIn=randomBeforeWorkTime(s1In,cekInMinBefore,cekInMaxBefore); nextOut=randomAfterWorkTime(autoS3?s3Out:s2Out,cekOutMinAfter,cekOutMaxAfter); }
    else if(autoS2 && autoS3){ nextIn=randomBeforeWorkTime(s2In,cekInMinBefore,cekInMaxBefore); nextOut=randomAfterWorkTime(s3Out,cekOutMinAfter,cekOutMaxAfter); }
    else if(autoS1){ nextIn=randomBeforeWorkTime(s1In,cekInMinBefore,cekInMaxBefore); nextOut=randomAfterWorkTime(s1Out,cekOutMinAfter,cekOutMaxAfter); }
    else if(autoS2){ nextIn=randomBeforeWorkTime(s2In,cekInMinBefore,cekInMaxBefore); nextOut=randomAfterWorkTime(s2Out,cekOutMinAfter,cekOutMaxAfter); }
    else if(autoS3){ nextIn=randomBeforeWorkTime(s3In,cekInMinBefore,cekInMaxBefore); nextOut=randomAfterWorkTime(s3Out,cekOutMinAfter,cekOutMaxAfter); }
    else { skippedNoShift++; return; }
    const hasIn=!!normalizeTimeToHMS(r.checkIn || '');
    const hasOut=!!normalizeTimeToHMS(r.checkOut || '');
    if(!hasIn && nextIn){ r.checkIn=nextIn; filledIn++; } else if(hasIn){ skippedExisting++; }
    if(!hasOut && nextOut){ r.checkOut=nextOut; filledOut++; } else if(hasOut){ skippedExisting++; }
  });
  updateAdminReportRowsWithCheckTimes(rows);
  renderReport();
  setAdminCheckTimesSourceInfo('Isi Otomatis Berdasarkan Aturan Menit - hanya mengisi field kosong');
  alert(`Isi Otomatis selesai. Field yang sudah berisi data tidak ditimpa. Terisi: Cek In ${filledIn}, Cek Out ${filledOut}. Dilewati karena sudah ada isi: ${skippedExisting}. Cek In dibuat ${cekInMinBefore}-${cekInMaxBefore} menit sebelum jam dasar, Cek Out dibuat ${cekOutMinAfter}-${cekOutMaxAfter} menit sesudah jam dasar, lengkap sampai detik. Kegiatan Stapel (TF) dan Malleti (TF) tidak diisi otomatis. Klik Simpan Cek In / Cek Out untuk menyimpan ke database.`);
}

function parseISODateUTC(dateValue){
  const m=String(dateValue||'').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if(!m) return null;
  return Date.UTC(Number(m[1]), Number(m[2])-1, Number(m[3]));
}
function dateDiffDays(dateValue, baseDate){
  const a=parseISODateUTC(dateValue), b=parseISODateUTC(baseDate);
  if(a===null || b===null) return 0;
  return Math.round((a-b)/86400000);
}
function parseMachineDateTime(value, fallbackDate){
  const fallback=fallbackDate || todayISO();
  if(value===null || value===undefined || value==='') return null;
  if(value instanceof Date && !isNaN(value)){
    return { date:value.toISOString().slice(0,10), time:formatSecondsToHMS(value.getHours()*3600 + value.getMinutes()*60 + value.getSeconds()) };
  }
  if(typeof value==='number' && Number.isFinite(value)){
    const whole=Math.floor(value);
    const fraction=((value%1)+1)%1;
    const base=new Date(Date.UTC(1899,11,30));
    base.setUTCDate(base.getUTCDate()+whole);
    const seconds=Math.round(fraction*86400);
    return { date:base.toISOString().slice(0,10), time:formatSecondsToHMS(seconds) };
  }
  const raw=String(value).trim();
  if(!raw) return null;
  const parts=raw.split(/\s+/);
  const datePart=parts[0] || '';
  const timePart=parts.slice(1).join(' ') || '';
  const dateValue=normalizeImportDate(datePart, fallback);
  let timeValue=formatImportedTime(timePart);
  if(!timeValue){
    const m=raw.match(/(\d{1,2})[:.](\d{1,2})(?:[:.](\d{1,2}))?/);
    if(m) timeValue=normalizeTimeToHMS(m[0]);
  }
  if(!dateValue || !timeValue) return null;
  return {date:dateValue, time:timeValue};
}
function normalizeNipForMatch(value){
  const raw=String(value===null || value===undefined ? '' : value).trim();
  if(!raw) return '';
  const digits=raw.replace(/\D/g,'');
  if(digits) return digits.replace(/^0+/,'') || '0';
  return raw.toLowerCase();
}
function parseMachineImportRows(rows, fallbackDate){
  const scans=[];
  const skipped=[];
  (rows||[]).forEach((row,idx)=>{
    const nip=normalizeNipForMatch(findCell(row,['No.ID','No ID','NIP','PIN','ID']));
    const dt=parseMachineDateTime(findCell(row,['Tgl/Waktu','Tanggal Waktu','Tgl Waktu','Date Time','Datetime','Waktu']), fallbackDate);
    const locRaw=String(findCell(row,['Lokasi ID','LokasiID','Location ID','Status','Mode'])||'').trim();
    const locMatch=locRaw.match(/\d+/);
    const loc=locMatch ? locMatch[0] : locRaw;
    if(!nip || !dt || !loc){ skipped.push(idx+2); return; }
    const seconds=parseAttendanceTimeToSeconds(dt.time);
    if(seconds===null){ skipped.push(idx+2); return; }
    scans.push({ nip, date:dt.date, time:dt.time, seconds, loc, rowNumber:idx+2 });
  });
  return {scans, skipped, totalRows:(rows||[]).length};
}
function shiftLabelsForRow(row){
  const labels=[];
  if(row.s1) labels.push('Shift 1');
  if(row.s2) labels.push('Shift 2');
  if(row.s3) labels.push('Shift 3');
  return labels.join(', ');
}
function shiftWindowSeconds(row, dateValue, settings){
  const cfg=[];
  if(row.s1) cfg.push([settings.shiftPagiIn, settings.shiftPagiOut]);
  if(row.s2) cfg.push([settings.shiftSiangIn, settings.shiftSiangOut]);
  if(row.s3) cfg.push([settings.shiftMalamIn, settings.shiftMalamOut]);
  let start=null, end=null;
  cfg.forEach(pair=>{
    let a=parseAttendanceTimeToSeconds(pair[0]);
    let b=parseAttendanceTimeToSeconds(pair[1]);
    if(a===null || b===null) return;
    if(b<=a) b+=86400;
    const s=a-(4*3600);
    const e=b+(8*3600);
    start=start===null ? s : Math.min(start,s);
    end=end===null ? e : Math.max(end,e);
  });
  return {start:start===null ? -1 : start, end:end===null ? 86400 : end};
}
function shiftWindowSecondsForShift(shiftKey, dateValue, settings){
  let inTime='', outTime='';
  if(shiftKey==='s1'){ inTime=settings.shiftPagiIn; outTime=settings.shiftPagiOut; }
  else if(shiftKey==='s2'){ inTime=settings.shiftSiangIn; outTime=settings.shiftSiangOut; }
  else if(shiftKey==='s3'){ inTime=settings.shiftMalamIn; outTime=settings.shiftMalamOut; }
  let a=parseAttendanceTimeToSeconds(inTime);
  let b=parseAttendanceTimeToSeconds(outTime);
  if(a===null || b===null) return {start:-1,end:86400};
  if(b<=a) b+=86400;
  return {start:a-(4*3600), end:b+(8*3600)};
}
function activeShiftKeysForScheduleRow(row){
  const keys=[];
  if(row && row.s1) keys.push('s1');
  if(row && row.s2) keys.push('s2');
  if(row && row.s3) keys.push('s3');
  return keys;
}
function machineCheckForShift(scansByNip, nip, shiftKey, dateValue, settings){
  const win=shiftWindowSecondsForShift(shiftKey, dateValue, settings);
  const scans=(scansByNip[nip]||[])
    .map(scan=>({...scan, abs:machineScanAbsSeconds(scan, dateValue)}))
    .filter(scan=>scan.abs>=win.start && scan.abs<=win.end);
  const ins=scans.filter(scan=>String(scan.loc)==='1').sort((a,b)=>a.abs-b.abs);
  const outs=scans.filter(scan=>String(scan.loc)==='2').sort((a,b)=>b.abs-a.abs);
  const firstIn=ins[0] || null;
  const lastOut=outs[0] || null;
  return {
    checkIn:firstIn ? normalizeTimeToHMS(firstIn.time) : '',
    checkOut:lastOut ? normalizeTimeToHMS(lastOut.time) : '',
    inAbs:firstIn ? firstIn.abs : null,
    outAbs:lastOut ? lastOut.abs : null,
    scanCount:scans.length
  };
}
function displaySummaryTime(value){
  const hms=normalizeTimeToHMS(value || '');
  return hms ? hms.replace(/:/g,'.') : '0';
}
function machineScanAbsSeconds(scan, baseDate){
  return dateDiffDays(scan.date, baseDate)*86400 + (Number(scan.seconds)||0);
}
function formatDurationAbsHMS(startAbs, endAbs){
  if(startAbs===null || startAbs===undefined || endAbs===null || endAbs===undefined) return '';
  let diff=Number(endAbs)-Number(startAbs);
  if(!Number.isFinite(diff) || diff<0) return '';
  const h=Math.floor(diff/3600);
  const m=Math.floor((diff%3600)/60);
  const s=Math.floor(diff%60);
  return String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
}
async function loadAttendanceForMachinePreview(unitKeyValue, dateValue){
  const bridge=await waitFirebase();
  if(String(unitKeyValue || '')===BAHAN_BAKU_GABUNGAN_KEY || isBahanBakuPagiMalamKey(unitKeyValue)){
    return await loadBahanBakuCombinedAttendance(dateValue, bridge, {force:true});
  }
  return await readAttendancePayloadForUnit(unitKeyValue, dateValue, bridge, {force:true});
}
function statusClassMachine(status){
  if(status==='Cocok') return 'ok';
  if(status==='NIP tidak ada di jadwal') return 'muted';
  if(status==='Tidak ada data mesin') return 'err';
  return 'warn';
}
let lastMachineImportPreviewResult=null;
function machineImportAllowedStatus(status){ return ['Cocok','Cek In tidak ditemukan','Cek Out tidak ditemukan'].includes(String(status||'')); }
function validMachinePreviewRows(rows){ return (rows||[]).filter(r=>r && machineImportAllowedStatus(r.status) && String(r.nip||'').trim() && (normalizeTimeToHMS(r.checkIn||'') || normalizeTimeToHMS(r.checkOut||''))); }
let lastCheckInOutSummaryResult=null;
function setAdminCheckTimesSourceInfo(message){
  const text=message || 'Manual / belum ada pengisian otomatis.';
  const label=$('adminCheckTimesSourceLabel');
  if(label) label.textContent='ℹ️ Sumber pengisian terakhir: '+text;
}
function getSelectedCheckSummaryUnitKey(){
  const summarySel=$('adminCheckSummaryUnitSelect');
  if(summarySel && summarySel.value) return summarySel.value;
  const reportSel=$('adminReportUnitSelect');
  if(reportSel && reportSel.value) return reportSel.value;
  return adminManagedUnitKey || 'muatan_breeder';
}
function syncCheckSummaryUnitFromReport(){
  const reportSel=$('adminReportUnitSelect');
  const summarySel=$('adminCheckSummaryUnitSelect');
  if(summarySel && reportSel && reportSel.value){ summarySel.value=reportSel.value; }
}
function machineSummaryShiftKeysForRow(row){
  // v119: ringkasan per shift harus memakai pekerja yang masuk shift itu saja.
  // Jika satu pekerja/baris terjadwal di lebih dari satu shift, baris tersebut tidak
  // dipakai untuk ringkasan shift tunggal agar jam Shift 1 tidak masuk ke Shift 2
  // atau sebaliknya. Contoh yang dipakai Shift 2 adalah baris dengan label tepat
  // "Shift 2", bukan "Shift 1, Shift 2".
  const active=row && (row.s1 || row.s2 || row.s3) ? activeShiftKeysForScheduleRow(row) : [];
  if(active.length===1) return active;
  if(active.length>1) return [];
  const label=String(row && row.shift || '').toLowerCase().replace(/\s+/g,' ').trim();
  if(/^shift\s*1$/.test(label)) return ['s1'];
  if(/^shift\s*2$/.test(label)) return ['s2'];
  if(/^shift\s*3$/.test(label)) return ['s3'];
  return [];
}
function machineSummaryWeightedTime(value, shiftKey, kind){
  const hms=normalizeTimeToHMS(value || '');
  const seconds=parseAttendanceTimeToSeconds(hms);
  if(!hms || seconds===null) return null;
  let weight=seconds;
  if(shiftKey==='s3' && seconds < 12*3600) weight+=86400;
  return {time:hms, weight, kind};
}
function machineSummaryPick(values, mode){
  const rows=(values||[]).filter(Boolean).sort((a,b)=>a.weight-b.weight);
  if(!rows.length) return '';
  return (mode==='max' ? rows[rows.length-1] : rows[0]).time;
}
function checkSummaryRowMatchesSelected(row, selectedUnitKey){
  const key=String(selectedUnitKey || '');
  const rowUnit=String(row && row.unitKey || '');
  const rowSource=String(row && row.sourceUnitKey || '');
  const rowActivity=String(row && row.activityKey || '');
  const rowKegiatan=String(row && row.kegiatan || row && row.activityLabel || '').toLowerCase();
  if(key===BAHAN_BAKU_GABUNGAN_KEY){
    return [BAHAN_BAKU_PAGI_KEY, BAHAN_BAKU_MALAM_KEY, OVERZAK_KEY, 'oper_oper_bahan_baku', BAHAN_BAKU_GABUNGAN_KEY].includes(rowUnit) || [BAHAN_BAKU_PAGI_KEY, BAHAN_BAKU_MALAM_KEY, OVERZAK_KEY, 'oper_oper_bahan_baku'].includes(rowSource);
  }
  if(key===STAPEL_TF_KEY) return rowActivity===STAPEL_TF_KEY || rowKegiatan.includes('stapel');
  if(key===MALLETI_TF_KEY) return rowActivity===MALLETI_TF_KEY || rowKegiatan.includes('malleti') || rowKegiatan.includes('mallet');
  return rowUnit===key || rowSource===key;
}
function machineSummaryValueFromShift(row, shiftKey, type){
  const checks=row && row._shiftChecks && row._shiftChecks[shiftKey] ? row._shiftChecks[shiftKey] : null;
  if(checks) return type==='in' ? checks.checkIn : checks.checkOut;
  return type==='in' ? (row && row.checkIn) : (row && row.checkOut);
}
function buildCheckInOutSummaryFromPreview(rows, opts={}){
  const selectedUnitKey=opts.unitKey || getSelectedCheckSummaryUnitKey();
  const selectedUnitName=unitNameFromKey(selectedUnitKey);
  const allRows=Array.isArray(rows) ? rows : [];
  const unitRows=allRows.filter(row=>checkSummaryRowMatchesSelected(row, selectedUnitKey));
  const summary={
    _meta:{ unitKey:selectedUnitKey, unitName:selectedUnitName, totalPreviewRows:allRows.length, scheduledRows:unitRows.length, foundMachineRows:0, notFoundRows:0, noInRows:0, noOutRows:0, validImportRows:0, noSchedule:unitRows.length===0 },
    s1:{label:'Shift 1',inValues:[],outValues:[],scheduledRows:0,validRows:0,missingIn:0,missingOut:0,invalidRows:0},
    s2:{label:'Shift 2',inValues:[],outValues:[],scheduledRows:0,validRows:0,missingIn:0,missingOut:0,invalidRows:0},
    s3:{label:'Shift 3',inValues:[],outValues:[],scheduledRows:0,validRows:0,missingIn:0,missingOut:0,invalidRows:0}
  };
  unitRows.forEach(row=>{
    const keys=machineSummaryShiftKeysForRow(row);
    if(!keys.length) return;
    const status=String(row.status || '');
    if(status==='Tidak ada data mesin') summary._meta.notFoundRows+=1;
    if(status==='Cek In tidak ditemukan') summary._meta.noInRows+=1;
    if(status==='Cek Out tidak ditemukan') summary._meta.noOutRows+=1;
    if(status!=='Tidak ada data mesin' && status!=='NIP tidak ada di jadwal') summary._meta.foundMachineRows+=1;
    keys.forEach(key=>{
      const bucket=summary[key];
      bucket.scheduledRows+=1;
      const inRaw=machineSummaryValueFromShift(row, key, 'in');
      const outRaw=machineSummaryValueFromShift(row, key, 'out');
      const inVal=machineSummaryWeightedTime(inRaw, key, 'in');
      const outVal=machineSummaryWeightedTime(outRaw, key, 'out');
      const hasAny=Boolean(inVal || outVal);
      if(hasAny){ bucket.validRows+=1; summary._meta.validImportRows+=1; } else { bucket.invalidRows+=1; }
      if(inVal) bucket.inValues.push(inVal); else bucket.missingIn+=1;
      if(outVal) bucket.outValues.push(outVal); else bucket.missingOut+=1;
    });
  });
  Object.keys(summary).filter(k=>k[0]==='s').forEach(key=>{
    const b=summary[key];
    b.minIn=machineSummaryPick(b.inValues,'min');
    b.maxOut=machineSummaryPick(b.outValues,'max');
    b.maxIn=machineSummaryPick(b.inValues,'max');
    b.minOut=machineSummaryPick(b.outValues,'min');
    if(!b.scheduledRows) b.status='Tidak ada jadwal shift ini';
    else if(!b.validRows) b.status='Tidak ada data mesin valid';
    else if(b.missingIn || b.missingOut) b.status=`Perlu dicek: Cek In kosong ${b.missingIn}, Cek Out kosong ${b.missingOut}`;
    else b.status=key==='s3' ? 'Normal - mode lintas tengah malam' : 'Normal';
  });
  return summary;
}
function renderCheckInOutSummary(summary){
  const box=$('adminCheckSummaryBox');
  if(!box) return;
  const data=summary || lastCheckInOutSummaryResult;
  if(!data){ box.style.display='none'; return; }
  box.style.display='block';
  const meta=data._meta || {};
  const body=['s1','s2','s3'].map(key=>{
    const r=data[key] || {};
    const cls=String(r.status||'').startsWith('Normal') ? 'ok' : (r.validRows ? 'warn' : 'muted');
    const ket=!r.scheduledRows ? 'Tidak ada jadwal shift ini' : `Sumber Cek In Cek Out dari pekerja yang masuk ${String(r.label||key).toLowerCase()} saja${r.status && !String(r.status).startsWith('Normal') ? ' • '+r.status : ''}`;
    return `<tr><td>${safeText(r.label||key)}</td><td>${safeText(displaySummaryTime(r.minIn))}</td><td>${safeText(displaySummaryTime(r.maxOut))}</td><td><span class="machine-status ${cls}">${safeText(ket)}</span></td></tr>`;
  }).join('');
  const titleUnit=meta.unitName || unitNameFromKey(meta.unitKey || getSelectedCheckSummaryUnitKey());
  const note=meta.noSchedule
    ? `Jadwal kegiatan <b>${safeText(titleUnit)}</b> untuk tanggal ini belum ditemukan. Ringkasan tidak memakai data global.`
    : `Ringkasan ini hanya memakai NIP pekerja yang ada di jadwal <b>${safeText(titleUnit)}</b> dan dihitung per shift masing-masing. Jadwal: <b>${safeText(meta.scheduledRows||0)}</b> pekerja/baris, ditemukan di mesin: <b>${safeText(meta.foundMachineRows||0)}</b>, tidak ditemukan: <b>${safeText(meta.notFoundRows||0)}</b>.`;
  box.innerHTML=`<div class="machine-preview-head"><span>📊 Ringkasan Cek In/Out dari Preview Mesin - ${safeText(titleUnit)}</span><span>Sederhana: Min Cek In dan Max Cek Out per shift</span></div><div class="machine-preview-table-wrap"><table class="machine-preview-table"><thead><tr><th>Shift</th><th>Min Cek In</th><th>Max Cek Out</th><th>Keterangan</th></tr></thead><tbody>${body}</tbody></table></div><div class="all-schedule-preview-note">${note}<br>Tombol <b>↘️ Pakai Ringkasan ke Form Cek In/Out</b> mengisi form dari <b>Min Cek In</b> dan <b>Max Cek Out</b> khusus bagian/shift ini. Proses simpan tetap memakai tombol <b>💾 Simpan Cek In / Cek Out</b>.</div>`;
}
async function ensureMachinePreviewSummary(){
  const input=$('adminGlobalCheckFile');
  const file=input && input.files && input.files[0];
  const dateValue=($('adminGlobalCheckDate') && $('adminGlobalCheckDate').value) || todayISO();
  const unitKey=getSelectedCheckSummaryUnitKey();
  let result=lastMachineImportPreviewResult;
  if(!result || result.dateValue!==dateValue || (file && result.fileName!==(file.name||''))){
    if(!file){ alert('Pilih file Excel/CSV data mesin absensi dan jalankan Preview Import Data Mesin terlebih dahulu.'); return null; }
    result=await buildMachineImportPreviewFromFile(file, dateValue);
    lastMachineImportPreviewResult={...result, fileName:file.name || '', fileSize:file.size || 0, fileType:file.type || '', generatedAtLocal:new Date().toISOString()};
    renderMachineImportPreview(result);
  }
  lastCheckInOutSummaryResult=buildCheckInOutSummaryFromPreview(result.rows || [], {unitKey});
  renderCheckInOutSummary(lastCheckInOutSummaryResult);
  if(lastCheckInOutSummaryResult._meta && lastCheckInOutSummaryResult._meta.noSchedule){
    alert(`Jadwal kegiatan ${lastCheckInOutSummaryResult._meta.unitName} untuk tanggal ${dateValue} belum ditemukan. Silakan input jadwal koordinator terlebih dahulu.`);
  }
  return lastCheckInOutSummaryResult;
}
async function adminCheckInOutSummary(){
  if(!requirePermission('importData','Cek ringkasan Cek In/Out hanya untuk admin.')) return;
  const btn=$('btnAdminCheckInOutSummary'); const old=btn?btn.textContent:'';
  try{ if(btn){ btn.disabled=true; btn.textContent='Menghitung...'; } const summary=await ensureMachinePreviewSummary(); if(summary){ updateGlobalCheckInfo(`Ringkasan Cek In/Out ${summary._meta && summary._meta.unitName ? summary._meta.unitName : ''} berhasil dihitung dari hasil preview mesin.`); } }
  catch(err){ console.error(err); alert('Cek Ringkasan Cek In/Out gagal: '+(err && err.message ? err.message : err)); }
  finally{ if(btn){ btn.disabled=false; btn.textContent=old || '📊 Cek Ringkasan Cek In/Out Berdasarkan Bagian'; } }
}
function summaryShiftValue(summary, key, type){ const row=summary && summary[key] || {}; return normalizeTimeToHMS(row[type] || ''); }
function applySummaryToLoadedReport(summary){
  if(!adminReportData) return {changed:0, skippedNoReport:true, skippedS3:0};
  const useS3=isAdminAutoShift3Enabled();
  const rows=rowsFromAttendancePayload(adminReportData);
  let changed=0, skippedS3=0;
  const order=['s1','s2','s3'];
  rows.forEach(r=>{
    if(isCommercialTfActivityRow(r)){ r.checkIn=''; r.checkOut=''; return; }
    const shifts=[];
    if(r.s1) shifts.push('s1');
    if(r.s2) shifts.push('s2');
    if(r.s3){ if(useS3) shifts.push('s3'); else skippedS3+=1; }
    const active=order.filter(k=>shifts.includes(k) && summary && summary[k]);
    if(!active.length) return;
    const first=active[0], last=active[active.length-1];
    const nextIn=summaryShiftValue(summary, first, 'minIn');
    const nextOut=summaryShiftValue(summary, last, 'maxOut');
    const beforeIn=r.checkIn || '', beforeOut=r.checkOut || '';
    if(nextIn) r.checkIn=nextIn;
    if(nextOut) r.checkOut=nextOut;
    if((r.checkIn||'')!==beforeIn || (r.checkOut||'')!==beforeOut) changed+=1;
  });
  updateAdminReportRowsWithCheckTimes(rows);
  renderReport();
  return {changed, skippedNoReport:false, skippedS3};
}
async function adminUseCheckSummaryToForm(){
  if(!requirePermission('editCheckTimes','Pakai ringkasan ke form Cek In/Out hanya untuk admin.')) return;
  const btn=$('btnAdminUseCheckSummary') || $('btnAdminUseCheckSummaryReport'); const old=btn?btn.textContent:'';
  try{
    if(btn){ btn.disabled=true; btn.textContent='Menerapkan...'; }
    const summary=lastCheckInOutSummaryResult || await ensureMachinePreviewSummary();
    if(!summary) return;
    const meta=summary._meta || {};
    if(meta.noSchedule){ alert(`Ringkasan belum bisa dipakai karena jadwal ${meta.unitName || 'bagian ini'} belum ditemukan.`); return; }
    const reportUnit=(($('adminReportUnitSelect') && $('adminReportUnitSelect').value) || '');
    if(reportUnit && meta.unitKey && reportUnit!==meta.unitKey){
      if(!confirm(`Bagian laporan yang sedang dipilih berbeda dengan Bagian Ringkasan.\n\nLaporan: ${unitNameFromKey(reportUnit)}\nRingkasan: ${meta.unitName}\n\nLanjutkan mengisi form dari ringkasan ${meta.unitName}?`)) return;
    }
    const useS3=isAdminAutoShift3Enabled();
    const pairs=[['adminAutoS1In','s1','minIn'],['adminAutoS1Out','s1','maxOut'],['adminAutoS2In','s2','minIn'],['adminAutoS2Out','s2','maxOut']];
    if(useS3){ pairs.push(['adminAutoS3In','s3','minIn'],['adminAutoS3Out','s3','maxOut']); }
    pairs.forEach(([id,key,type])=>{ const val=summaryShiftValue(summary,key,type); const el=$(id); if(el && val){ el.value=val; el.dataset.userEdited='1'; } });
    const applied=applySummaryToLoadedReport(summary);
    setAdminCheckTimesSourceInfo(`Ringkasan Import Mesin - ${meta.unitName || unitNameFromKey(meta.unitKey || '')}`);
    const s3Note=useS3 ? '' : '\nShift 3 tidak diterapkan karena checkbox Shift 3 belum aktif.';
    const reportNote=applied.skippedNoReport ? '\nData absensi belum ditampilkan, jadi yang diisi baru form jam Shift 1/2/3. Buka Absensi lalu klik Tampilkan jika ingin menerapkan ke baris pekerja.' : `\n${applied.changed} baris pekerja pada laporan yang sedang dibuka ikut diperbarui.`;
    alert(`Ringkasan Cek In/Out ${meta.unitName || ''} sudah dipakai ke form.\n\nShift 1/2/3 diisi dari Min Cek In dan Max Cek Out hasil preview mesin khusus bagian ini.`+reportNote+s3Note+'\n\nPeriksa kembali, lalu klik 💾 Simpan Cek In / Cek Out untuk menyimpan.');
  }catch(err){ console.error(err); alert('Pakai Ringkasan ke Form Cek In/Out gagal: '+(err && err.message ? err.message : err)); }
  finally{ if(btn){ btn.disabled=false; btn.textContent=old || '↘️ Pakai Ringkasan Bagian ke Form Cek In/Out'; } }
}
function renderMachineImportPreview(result){
  const box=$('adminMachinePreviewBox');
  if(!box) return;
  const rows=result && Array.isArray(result.rows) ? result.rows : [];
  const summary=result && result.summary ? result.summary : '';
  const validCount=validMachinePreviewRows(rows).length;
  box.style.display='block';
  const body=rows.length ? rows.map(r=>`<tr><td>${safeText(r.date)}</td><td>${safeText(r.nip)}</td><td>${safeText(r.name)}</td><td>${safeText(r.kegiatan)}</td><td>${safeText(r.shift)}</td><td>${safeText(r.checkIn)}</td><td>${safeText(r.checkOut)}</td><td>${safeText(r.duration)}</td><td><span class="machine-status ${statusClassMachine(r.status)}">${safeText(r.status)}</span></td></tr>`).join('') : '<tr><td colspan="9" style="text-align:center;color:#64748b">Belum ada data preview.</td></tr>';
  box.innerHTML=`<div class="machine-preview-head"><span>Preview Import Data Mesin Absensi</span><span>${safeText(summary)} • Siap import ${validCount}</span></div><div class="machine-preview-table-wrap"><table class="machine-preview-table"><thead><tr><th>Tanggal</th><th>NIP</th><th>Nama</th><th>Kegiatan</th><th>Shift</th><th>Cek In Mesin</th><th>Cek Out Mesin</th><th>Durasi</th><th>Status</th></tr></thead><tbody>${body}</tbody></table></div><div class="all-schedule-preview-note">Status yang boleh diimpor: <b>Cocok</b>, <b>Cek In tidak ditemukan</b>, dan <b>Cek Out tidak ditemukan</b>. Jam disimpan format <b>HH:MM:SS</b>.</div>`;
}

function allSchedulePreviewUnitKeys(){
  // v104: Oper Oper Bahan Baku sudah menjadi bagian laporan gabungan Bongkaran Bahan Baku,
  // jadi tidak dihitung ulang sebagai baris terpisah pada preview global.
  return ['muatan_breeder', BAHAN_BAKU_GABUNGAN_KEY, SILO_KEY, COMMERCIAL_KEY];
}
function machinePreviewCountsForRows(scheduleRows, dateValue, settings, scansByNip){
  const counts={scheduled:0, ok:0, noData:0, noIn:0, noOut:0};
  (scheduleRows||[]).forEach(row=>{
    if(!row || !row.nip || !(row.s1 || row.s2 || row.s3)) return;
    counts.scheduled+=1;
    const nip=String(row.nip||'');
    const win=shiftWindowSeconds(row, dateValue, settings);
    const scans=(scansByNip[nip]||[]).map(scan=>({...scan, abs:machineScanAbsSeconds(scan, dateValue)})).filter(scan=>scan.abs>=win.start && scan.abs<=win.end);
    const firstIn=scans.filter(scan=>String(scan.loc)==='1').sort((a,b)=>a.abs-b.abs)[0] || null;
    const lastOut=scans.filter(scan=>String(scan.loc)==='2').sort((a,b)=>b.abs-a.abs)[0] || null;
    if(firstIn && lastOut) counts.ok+=1;
    else if(!firstIn && !lastOut) counts.noData+=1;
    else if(!firstIn) counts.noIn+=1;
    else if(!lastOut) counts.noOut+=1;
  });
  return counts;
}
function renderAllSchedulesPreview(result){
  const box=$('adminAllSchedulePreviewBox');
  if(!box) return;
  const rows=result && Array.isArray(result.rows) ? result.rows : [];
  const summary=result && result.summary ? result.summary : '';
  const unmatched=result && result.unmatched !== undefined ? Number(result.unmatched)||0 : 0;
  box.style.display='block';
  const body=rows.length ? rows.map(r=>`<tr><td>${safeText(r.date)}</td><td>${safeText(r.unit)}</td><td>${safeText(r.scheduled)}</td><td><span class="machine-status ok">${safeText(r.ok)}</span></td><td><span class="machine-status err">${safeText(r.noData)}</span></td><td><span class="machine-status warn">${safeText(r.noIn)}</span></td><td><span class="machine-status warn">${safeText(r.noOut)}</span></td><td>${safeText(r.scanNips)}</td></tr>`).join('') : '<tr><td colspan="8" style="text-align:center;color:#64748b">Belum ada data jadwal untuk tanggal ini.</td></tr>';
  box.innerHTML=`<div class="all-schedule-preview-head"><span>Preview Jadwal Semua Kegiatan</span><span>${safeText(summary)}</span></div><div class="all-schedule-preview-table-wrap"><table class="all-schedule-preview-table"><thead><tr><th>Tanggal</th><th>Bagian / Kegiatan</th><th>Jumlah Terjadwal</th><th>Cocok Mesin</th><th>Tidak Ada Data Mesin</th><th>Cek In Tidak Ditemukan</th><th>Cek Out Tidak Ditemukan</th><th>NIP Mesin Terdeteksi</th></tr></thead><tbody>${body}</tbody></table></div><div class="all-schedule-preview-note">Catatan: Preview ini hanya membaca jadwal dan file mesin untuk pengecekan. Data belum diterapkan ke laporan. NIP mesin yang tidak masuk jadwal semua kegiatan: <b>${safeText(unmatched)}</b>.</div>`;
}
async function adminPreviewAllSchedules(){
  if(!requirePermission('importData','Preview jadwal semua kegiatan hanya untuk admin.')) return;
  const input=$('adminGlobalCheckFile');
  const file=input && input.files && input.files[0];
  const dateValue=($('adminGlobalCheckDate') && $('adminGlobalCheckDate').value) || todayISO();
  if(!file){ alert('Pilih file Excel/CSV data mesin absensi terlebih dahulu untuk preview semua kegiatan.'); return; }
  const btn=$('btnAdminPreviewAllSchedules'); const old=btn?btn.textContent:'';
  try{
    if(btn){ btn.disabled=true; btn.textContent='Memuat preview semua kegiatan...'; }
    const rows=await readImportRows(file);
    const parsed=parseMachineImportRows(rows, dateValue);
    const scansByNip={};
    parsed.scans.forEach(scan=>{ const k=normalizeNipForMatch(scan.nip); scan.nip=k; if(!scansByNip[k]) scansByNip[k]=[]; scansByNip[k].push(scan); });
    const bridge=await waitFirebase();
    const previewRows=[];
    const scheduledNipSet=new Set();
    let totalScheduled=0, totalOk=0, totalNoData=0, totalNoIn=0, totalNoOut=0;
    for(const unitKeyValue of allSchedulePreviewUnitKeys()){
      const payload=await loadAttendanceForMachinePreview(unitKeyValue, dateValue);
      const scheduleRows=rowsFromAttendancePayload(payload).filter(r=>r && r.nip && (r.s1 || r.s2 || r.s3));
      scheduleRows.forEach(r=>scheduledNipSet.add(normalizeNipForMatch(r.nip)));
      const unitName=(payload && payload.unit) || unitNameFromKey(unitKeyValue);
      const settings=getReportSettings(unitKeyValue, unitName);
      const counts=machinePreviewCountsForRows(scheduleRows, dateValue, settings, scansByNip);
      totalScheduled+=counts.scheduled; totalOk+=counts.ok; totalNoData+=counts.noData; totalNoIn+=counts.noIn; totalNoOut+=counts.noOut;
      const nipsInUnit=new Set(scheduleRows.map(r=>normalizeNipForMatch(r.nip)).filter(Boolean));
      const scanNips=Object.keys(scansByNip).filter(nip=>nipsInUnit.has(normalizeNipForMatch(nip))).length;
      previewRows.push({date:dateValue, unit:unitNameFromKey(unitKeyValue), scheduled:counts.scheduled, ok:counts.ok, noData:counts.noData, noIn:counts.noIn, noOut:counts.noOut, scanNips});
    }
    const unmatched=Object.keys(scansByNip).filter(nip=>!scheduledNipSet.has(String(nip))).length;
    renderAllSchedulesPreview({rows:previewRows, unmatched, summary:`Tanggal ${dateValue} • Scan ${parsed.scans.length} • Jadwal ${totalScheduled} • Cocok ${totalOk} • Perlu cek ${totalNoData+totalNoIn+totalNoOut}`});
    adminLog(`Preview jadwal semua kegiatan selesai. Tanggal: ${dateValue}. Scan: ${parsed.scans.length}. Jadwal: ${totalScheduled}. Cocok: ${totalOk}. Perlu cek: ${totalNoData+totalNoIn+totalNoOut}. Data belum diterapkan ke laporan.`);
  }catch(err){
    console.error(err);
    alert('Preview jadwal semua kegiatan gagal: '+(err && err.message ? err.message : err));
  }finally{ if(btn){ btn.disabled=false; btn.textContent=old || '📋 Preview Jadwal Semua Kegiatan'; } }
}
async function buildMachineImportPreviewFromFile(file, dateValue){
  const rows=await readImportRows(file);
  const parsed=parseMachineImportRows(rows, dateValue);
  const scansByNip={};
  parsed.scans.forEach(scan=>{ const k=normalizeNipForMatch(scan.nip); scan.nip=k; if(!scansByNip[k]) scansByNip[k]=[]; scansByNip[k].push(scan); });
  const preview=[];
  const scheduledNips=new Set();
  let totalSchedules=0;
  for(const unitKeyValue of allSchedulePreviewUnitKeys()){
    const payload=await loadAttendanceForMachinePreview(unitKeyValue, dateValue);
    const scheduleRows=rowsFromAttendancePayload(payload).filter(r=>r && r.nip && (r.s1 || r.s2 || r.s3));
    const unitName=(payload && payload.unit) || unitNameFromKey(unitKeyValue);
    const settings=getReportSettings(unitKeyValue, unitName);
    totalSchedules+=scheduleRows.length;
    scheduleRows.forEach(row=>{
      const originalNip=String(row.nip||'').trim();
      const nip=normalizeNipForMatch(originalNip);
      scheduledNips.add(nip);
      const perShiftChecks={};
      activeShiftKeysForScheduleRow(row).forEach(shiftKey=>{ perShiftChecks[shiftKey]=machineCheckForShift(scansByNip, nip, shiftKey, dateValue, settings); });
      const win=shiftWindowSeconds(row, dateValue, settings);
      const scans=(scansByNip[nip]||[]).map(scan=>({...scan, abs:machineScanAbsSeconds(scan, dateValue)})).filter(scan=>scan.abs>=win.start && scan.abs<=win.end);
      const ins=scans.filter(scan=>String(scan.loc)==='1').sort((a,b)=>a.abs-b.abs);
      const outs=scans.filter(scan=>String(scan.loc)==='2').sort((a,b)=>b.abs-a.abs);
      const firstIn=ins[0] || null;
      const lastOut=outs[0] || null;
      let status='Cocok';
      if(!firstIn && !lastOut) status='Tidak ada data mesin';
      else if(!firstIn) status='Cek In tidak ditemukan';
      else if(!lastOut) status='Cek Out tidak ditemukan';
      preview.push({
        date:dateValue,
        unitKey:row.sourceUnitKey || unitKeyValue,
        unitName:unitNameFromKey(row.sourceUnitKey || unitKeyValue),
        sourceUnitKey:row.sourceUnitKey || unitKeyValue,
        activityKey:row.activityKey || '',
        activityLabel:row.activityLabel || '',
        s1:Boolean(row.s1),
        s2:Boolean(row.s2),
        s3:Boolean(row.s3),
        _shiftChecks:perShiftChecks,
        nip:originalNip || nip,
        matchNip:nip,
        name:row.name || '',
        kegiatan:row.kegiatan || row.activityLabel || unitNameFromKey(row.sourceUnitKey || unitKeyValue) || '',
        shift:shiftLabelsForRow(row),
        checkIn:firstIn ? normalizeTimeToHMS(firstIn.time) : '',
        checkOut:lastOut ? normalizeTimeToHMS(lastOut.time) : '',
        duration:(firstIn && lastOut) ? formatDurationAbsHMS(firstIn.abs, lastOut.abs) : '',
        status
      });
    });
  }
  Object.keys(scansByNip).sort((a,b)=>(parseInt(a,10)||999999)-(parseInt(b,10)||999999)).forEach(nip=>{
    if(scheduledNips.has(normalizeNipForMatch(nip))) return;
    const scans=scansByNip[nip].map(scan=>({...scan, abs:machineScanAbsSeconds(scan, dateValue)})).filter(scan=>scan.date===dateValue || dateDiffDays(scan.date,dateValue)===1);
    if(!scans.length) return;
    const ins=scans.filter(scan=>String(scan.loc)==='1').sort((a,b)=>a.abs-b.abs);
    const outs=scans.filter(scan=>String(scan.loc)==='2').sort((a,b)=>b.abs-a.abs);
    const firstIn=ins[0] || null;
    const lastOut=outs[0] || null;
    preview.push({date:dateValue,unitKey:'',unitName:'-',nip,name:'-',kegiatan:'-',shift:'-',checkIn:firstIn?normalizeTimeToHMS(firstIn.time):'',checkOut:lastOut?normalizeTimeToHMS(lastOut.time):'',duration:(firstIn&&lastOut)?formatDurationAbsHMS(firstIn.abs,lastOut.abs):'',status:'NIP tidak ada di jadwal'});
  });
  const ok=preview.filter(r=>r.status==='Cocok').length;
  const noIn=preview.filter(r=>r.status==='Cek In tidak ditemukan').length;
  const noOut=preview.filter(r=>r.status==='Cek Out tidak ditemukan').length;
  const validImport=validMachinePreviewRows(preview).length;
  const warn=preview.filter(r=>r.status!=='Cocok').length;
  return { rows:preview, parsed, totalSchedules, ok, noIn, noOut, validImport, warn, dateValue, summary:`Global semua kegiatan • Jadwal ${totalSchedules} • Scan ${parsed.scans.length} • Cocok ${ok} • In kosong ${noIn} • Out kosong ${noOut} • Siap import ${validImport} • Perlu cek ${warn}` };
}
async function adminPreviewMachineImport(){
  if(!requirePermission('importData','Preview import mesin absensi hanya untuk admin.')) return;
  const input=$('adminGlobalCheckFile');
  const file=input && input.files && input.files[0];
  const dateValue=($('adminGlobalCheckDate') && $('adminGlobalCheckDate').value) || todayISO();
  if(!file){ alert('Pilih file Excel/CSV data mesin absensi terlebih dahulu.'); return; }
  const btn=$('btnAdminPreviewMachineImport'); const old=btn?btn.textContent:'';
  try{
    if(btn){ btn.disabled=true; btn.textContent='Preview global...'; }
    const result=await buildMachineImportPreviewFromFile(file, dateValue);
    lastMachineImportPreviewResult={...result, fileName:file.name || '', fileSize:file.size || 0, fileType:file.type || '', generatedAtLocal:new Date().toISOString()};
    lastCheckInOutSummaryResult=null;
    renderCheckInOutSummary(null);
    renderMachineImportPreview(result);
    adminLog(`Preview import mesin absensi global selesai. Tanggal: ${dateValue}. Scan terbaca: ${result.parsed.scans.length}. Jadwal: ${result.totalSchedules}. Cocok: ${result.ok}. Siap import: ${result.validImport}. Data belum disimpan ke laporan.`);
  }catch(err){
    console.error(err);
    alert('Preview import data mesin gagal: '+(err && err.message ? err.message : err));
  }finally{ if(btn){ btn.disabled=false; btn.textContent=old || '🔎 Preview Import Data Mesin'; } }
}

async function adminImportMachinePreviewToCheckTimes(){
  if(!requirePermission('importData','Import hasil preview mesin hanya untuk admin.')) return;
  const input=$('adminGlobalCheckFile');
  const file=input && input.files && input.files[0];
  const dateValue=($('adminGlobalCheckDate') && $('adminGlobalCheckDate').value) || todayISO();
  if(!file){ alert('Pilih file Excel/CSV data mesin absensi terlebih dahulu.'); return; }
  const btn=$('btnAdminImportMachinePreview'); const old=btn?btn.textContent:'';
  let historyPayload=null;
  try{
    if(btn){ btn.disabled=true; btn.textContent='Mengimpor hasil preview...'; }
    let result=lastMachineImportPreviewResult;
    if(!result || result.dateValue!==dateValue || result.fileName!==(file.name||'')){
      result=await buildMachineImportPreviewFromFile(file, dateValue);
      lastMachineImportPreviewResult={...result, fileName:file.name || '', fileSize:file.size || 0, fileType:file.type || '', generatedAtLocal:new Date().toISOString()};
      renderMachineImportPreview(result);
    }
    const validRows=validMachinePreviewRows(result.rows);
    const skippedRows=(result.rows||[]).length-validRows.length;
    const byDate={};
    const duplicates=[];
    validRows.forEach((row,idx)=>{
      const d=row.date || dateValue;
      const nip=String(row.nip||'').trim();
      if(!byDate[d]) byDate[d]={};
      if(byDate[d][nip]) duplicates.push({row:idx+1,date:d,nip});
      byDate[d][nip]={checkIn:normalizeTimeToHMS(row.checkIn||''), checkOut:normalizeTimeToHMS(row.checkOut||''), source:'machine_preview_import', status:row.status || '', updatedAtLocal:new Date().toISOString()};
    });
    const dateCounts={};
    Object.keys(byDate).forEach(d=>{ dateCounts[d]=Object.keys(byDate[d]||{}).length; });
    historyPayload={
      action:'import_machine_preview', status:'success', fileName:file.name || '', fileSize:file.size || 0, fileType:file.type || '', fallbackDate:dateValue,
      dates:Object.keys(byDate), dateCounts, importedRows:validRows.length, skippedRows, duplicateRows:duplicates.length,
      totalRows:(result.rows||[]).length, appliedRows:0,
      note:'Import hasil Preview Data Mesin ke Cek In/Out. Status valid: Cocok, Cek In tidak ditemukan, Cek Out tidak ditemukan. Format jam HH:MM:SS.'
    };
    if(!validRows.length){
      historyPayload.status='failed'; historyPayload.errorMessage='Tidak ada baris preview dengan status valid yang bisa diimpor.';
      await recordCheckImportHistory(historyPayload); await renderGlobalCheckImportHistory(false);
      alert('Tidak ada hasil preview yang bisa diimpor. Status yang boleh masuk: Cocok, Cek In tidak ditemukan, dan Cek Out tidak ditemukan.');
      return;
    }
    if(!confirm(`Import hasil Preview Data Mesin ke Cek In/Out?

Tanggal: ${dateValue}
Siap import: ${validRows.length} NIP
Dilewati: ${skippedRows}

Jam akan disimpan dalam format HH:MM:SS.`)) return;
    for(const d of Object.keys(byDate)){
      const existing=await loadGlobalCheckTimesForDate(d, true);
      await saveGlobalCheckTimesForDate(d, {...existing, ...byDate[d]});
    }
    let applied=0;
    const reportDate=(adminReportData && adminReportData.reportDate) || (($('adminReportDate') && $('adminReportDate').value) || '');
    if(reportDate && byDate[reportDate]) applied=applyCheckTimesToAdminReport(byDate[reportDate], {overwrite:true, clearMissing:true});
    historyPayload.appliedRows=applied;
    await recordCheckImportHistory(historyPayload);
    await renderGlobalCheckImportHistory(false);
    await updateGlobalCheckInfo(`Import hasil preview mesin selesai. ${validRows.length} NIP valid disimpan. ${applied} pekerja diterapkan ke laporan yang sedang dibuka.`);
    adminLog(`Import hasil Preview Data Mesin selesai. Tanggal: ${Object.keys(byDate).join(', ')}. Valid: ${validRows.length}. Dilewati: ${skippedRows}. Riwayat import tersimpan.`);
    alert(`Import hasil Preview Data Mesin selesai.

${validRows.length} NIP valid disimpan.
${applied} pekerja diterapkan ke laporan yang sedang dibuka.
Riwayat import tersimpan.`);
  }catch(err){
    console.error(err);
    if(historyPayload){ historyPayload.status='failed'; historyPayload.errorMessage=err && err.message ? err.message : String(err); await recordCheckImportHistory(historyPayload).catch(()=>{}); await renderGlobalCheckImportHistory(false).catch(()=>{}); }
    alert('Import hasil Preview Data Mesin gagal: '+(err && err.message ? err.message : err));
  }finally{ if(btn){ btn.disabled=false; btn.textContent=old || '📥 Import Hasil Preview Mesin ke Cek In/Out'; } }
}


async function adminImportGlobalCheckTimes(){
  if(!requirePermission('importData','Import Cek In/Out hanya untuk admin.')) return;
  const input=$('adminGlobalCheckFile');
  const file=input && input.files && input.files[0];
  const fallbackDate=($('adminGlobalCheckDate') && $('adminGlobalCheckDate').value) || todayISO();
  if(!file){ alert('Pilih file Excel/CSV rekap Cek In/Out terlebih dahulu.'); return; }
  const btn=$('btnAdminImportGlobalCheckTimes'); const old=btn?btn.textContent:'';
  let historyPayload=null;
  try{
    if(btn){ btn.disabled=true; btn.textContent='Mengimpor...'; }
    const rows=await readImportRows(file);
    const parsed=checkMapFromImportRows(rows, fallbackDate);
    historyPayload={
      action:'import', status:'success', fileName:file.name || '', fileSize:file.size || 0, fileType:file.type || '', fallbackDate,
      dates:Object.keys(parsed.byDate || {}), dateCounts:parsed.dateCounts || {}, importedRows:parsed.imported,
      skippedRows:(parsed.skipped||[]).length, duplicateRows:(parsed.duplicates||[]).length, totalRows:parsed.totalRows || rows.length,
      appliedRows:0, note:'Import rekap Cek In/Out global'
    };
    if(!parsed.imported){
      historyPayload.status='failed'; historyPayload.errorMessage='Tidak ada data valid yang bisa diimpor.';
      await recordCheckImportHistory(historyPayload); await renderGlobalCheckImportHistory(false);
      alert('Tidak ada data valid yang bisa diimpor. Tombol ini khusus file rekap dengan kolom NIP, Cek In, dan Cek Out. Untuk file mentah mesin (No.ID, Tgl/Waktu, Lokasi ID), gunakan Preview Import Data Mesin.'); return;
    }
    for(const dateKey of Object.keys(parsed.byDate)){
      const existing=await loadGlobalCheckTimesForDate(dateKey, true);
      await saveGlobalCheckTimesForDate(dateKey, {...existing, ...parsed.byDate[dateKey]});
    }
    let applied=0;
    const reportDate=(adminReportData && adminReportData.reportDate) || (($('adminReportDate') && $('adminReportDate').value) || '');
    if(reportDate && parsed.byDate[reportDate]) applied=applyCheckTimesToAdminReport(await loadGlobalCheckTimesForDate(reportDate, true), {overwrite:true});
    historyPayload.appliedRows=applied;
    await recordCheckImportHistory(historyPayload);
    await renderGlobalCheckImportHistory(false);
    await updateGlobalCheckInfo(`Import selesai. ${parsed.imported} baris valid disimpan. ${applied} pekerja cocok dengan laporan yang sedang dibuka.`);
    adminLog(`Import Rekap Cek In/Out selesai. ${parsed.imported} baris valid. Tanggal: ${Object.keys(parsed.byDate).join(', ')}. Riwayat import tersimpan.`);
    alert(`Import Rekap Cek In/Out selesai. ${parsed.imported} baris valid disimpan. ${applied} pekerja cocok dengan laporan yang sedang dibuka. Riwayat import tersimpan.`);
  }catch(err){
    console.error(err);
    if(historyPayload){ historyPayload.status='failed'; historyPayload.errorMessage=err && err.message ? err.message : String(err); await recordCheckImportHistory(historyPayload).catch(()=>{}); await renderGlobalCheckImportHistory(false).catch(()=>{}); }
    alert('Import Rekap Cek In/Out gagal: '+(err && err.message ? err.message : err));
  }finally{ if(btn){ btn.disabled=false; btn.textContent=old || '📥 Import Rekap Cek In/Out'; } }
}
async function adminClearGlobalCheckTimes(){ if(!requirePermission('deleteData','Hapus Cek In/Out hanya untuk admin.')) return; const dateValue=($('adminGlobalCheckDate') && $('adminGlobalCheckDate').value) || todayISO(); if(!confirm(`Hapus data Cek In/Out global tanggal ${dateValue}?

Data absensi yang sudah pernah disimpan tidak ikut dihapus.`)) return; await saveGlobalCheckTimesForDate(dateValue, {}); await recordCheckImportHistory({action:'clear', status:'cleared', fallbackDate:dateValue, dates:[dateValue], dateCounts:{[dateValue]:0}, importedRows:0, skippedRows:0, duplicateRows:0, totalRows:0, appliedRows:0, note:'Admin menghapus data Cek In/Out global tanggal '+dateValue}); await renderGlobalCheckImportHistory(false); await updateGlobalCheckInfo('Data tanggal ini sudah dihapus.'); adminLog(`Data Cek In/Out global dihapus untuk tanggal ${dateValue}. Riwayat penghapusan tersimpan.`); }
function adminSaveReportFormat(){ if(!requirePermission('manageSettings','Simpan format laporan hanya untuk admin.')) return; saveReportSettings(); const settings=getReportSettings(getReportUnitKeyForSettings(), unitNameFromKey(getReportUnitKeyForSettings())); syncAdminAutoShiftInputs(settings); adminLog('Format NOTE dan tabel Jam Kerja berhasil disimpan.'); alert('NOTE dan tabel Jam Kerja berhasil disimpan.'); }
async function adminSaveCheckTimes(){
  if(!requirePermission('editCheckTimes','Simpan cek in/out hanya untuk admin.')) return;
  if(!adminReportData){ alert('Tampilkan data absensi terlebih dahulu.'); return; }
  const rows=rowsFromAttendancePayload(adminReportData);
  const inputMap={};
  document.querySelectorAll('[data-check-nip]').forEach(el=>{ const nip=String(el.dataset.checkNip||''); if(!inputMap[nip]) inputMap[nip]={}; const normalized=normalizeTimeToHMS(el.value || ''); if(normalized && el.value.trim()!==normalized) el.value=normalized; if(el.hasAttribute('data-check-in')) inputMap[nip].checkIn=normalized; if(el.hasAttribute('data-check-out')) inputMap[nip].checkOut=normalized; });
  rows.forEach(r=>{ if(isCommercialTfActivityRow(r)){ r.checkIn=''; r.checkOut=''; return; } const found=inputMap[String(r.nip)] || {}; r.checkIn=found.checkIn || ''; r.checkOut=found.checkOut || ''; });
  updateAdminReportDataFromRows(rows);
  adminReportData.updatedByAdmin=currentUser ? {username:currentUser.username||'', name:currentUser.name||'', role:currentUser.role||''} : null;
  adminReportData.updatedAtLocal=new Date().toISOString();
  // Aman: tombol Simpan Cek In / Cek Out hanya menyimpan data absensi pekerja.
  // Jangan panggil saveReportSettings() di sini agar NOTE / JAM KERJA bawah laporan tidak ikut berubah.
  const btn=$('btnAdminSaveCheckTimes'); const old=btn?btn.textContent:'';
  try{ if(btn){ btn.disabled=true; btn.textContent='Menyimpan...'; } adminReportData.unitKey = adminReportData.unitKey || (($('adminReportUnitSelect') && $('adminReportUnitSelect').value) || adminManagedUnitKey); adminReportData.reportDate = adminReportData.reportDate || (($('adminReportDate') && $('adminReportDate').value) || todayISO()); safeLocalSetJSON(`${ATTENDANCE_KEY}_${adminReportData.unitKey}_${adminReportData.reportDate}`, cacheEnvelope(adminReportData, 'pending_or_cache')); const bridge=await waitFirebase(); if(bridge && bridge.enabled && bridge.saveAttendance && !adminReportData.combinedAttendance){ await bridge.saveAttendance(adminReportData); clearAdminAttendanceCache(adminReportData.unitKey, adminReportData.reportDate); } if(adminReportData.combinedAttendance){ const savedGlobal=await saveCombinedRowsToGlobalCheckTimes(adminReportData.reportDate, rows); if(savedGlobal && $('adminGlobalCheckDate')){ $('adminGlobalCheckDate').value=adminReportData.reportDate; updateGlobalCheckInfo('Data manual gabungan tersimpan.'); } } alert('Cek In / Cek Out berhasil disimpan. NOTE / JAM KERJA bawah laporan tidak diubah.'); renderReport(); }catch(err){ console.error(err); alert('Simpan Cek In / Cek Out gagal: '+(err && err.message ? err.message : err)); }finally{ if(btn){ btn.disabled=false; btn.textContent=old || '💾 Simpan Cek In / Cek Out'; } }
}

function optionUnits(includeAll=false){ return (includeAll?'<option value="ALL">Semua Bagian</option>':'') + UNITS.map(u=>`<option value="${u.key}">${safeText(u.name)}</option>`).join(''); }
function optionReportUnits(){ const rows=[{key:'muatan_breeder',name:'Muatan Breeder'},{key:BAHAN_BAKU_GABUNGAN_KEY,name:'Bongkaran Bahan Baku'},{key:SILO_KEY,name:SILO_NAME},{key:'oper_oper_bahan_baku',name:'Oper Oper Bahan Baku'},{key:COMMERCIAL_KEY,name:'Muatan Commercial'}]; return rows.map(u=>`<option value="${u.key}">${safeText(u.name)}</option>`).join(''); }
function optionCheckSummaryUnits(){ const rows=[{key:'muatan_breeder',name:'Muatan Breeder'},{key:BAHAN_BAKU_GABUNGAN_KEY,name:'Bongkaran Bahan Baku - Gabungan'},...UNITS.filter(u=>u.key!=='muatan_breeder')]; return rows.map(u=>`<option value="${u.key}">${safeText(u.name)}</option>`).join(''); }
function initAdminTools(){
  ['adminUnitSelect','adminPanelUnitSelect','adminWorkerUnitSelect'].forEach(id=>{ const sel=$(id); if(sel){ sel.innerHTML=optionUnits(false); sel.value=adminManagedUnitKey; } }); const dashSel=$('adminDashUnitSelect'); if(dashSel){ dashSel.innerHTML=optionUnits(true); dashSel.value='ALL'; }
  const reportSel=$('adminReportUnitSelect');
  if(reportSel){ const current=reportSel.value || adminManagedUnitKey; reportSel.innerHTML=optionReportUnits(); const allowedReportKeys=['muatan_breeder',BAHAN_BAKU_GABUNGAN_KEY,SILO_KEY,'oper_oper_bahan_baku',COMMERCIAL_KEY]; reportSel.value=allowedReportKeys.includes(current) ? current : 'muatan_breeder'; }
  const checkSummarySel=$('adminCheckSummaryUnitSelect');
  if(checkSummarySel){ const current=checkSummarySel.value || (reportSel && reportSel.value) || adminManagedUnitKey; checkSummarySel.innerHTML=optionCheckSummaryUnits(); checkSummarySel.value=current || 'muatan_breeder'; }
  ['adminCoordUnit'].forEach(id=>{ const sel=$(id); if(sel){ sel.innerHTML=optionUnits(false); } });
  ['adminClearWorkersUnit'].forEach(id=>{ const sel=$(id); if(sel){ sel.innerHTML=optionUnits(true); sel.value=adminManagedUnitKey; } });
  const deleteAttendanceSel=$('adminDeleteAttendanceUnit');
  if(deleteAttendanceSel){ deleteAttendanceSel.innerHTML=optionUnits(true); deleteAttendanceSel.value='ALL'; }
  renderCoordinatorAccountOptions();
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
  renderAdminSyncStatus(false);
}
function matchUnitKey(value){ const raw=String(value||'').trim(); if(!raw) return ''; const key=unitKey(raw); const exact=UNITS.find(u=>u.key===key || unitKey(u.name)===key); if(exact) return exact.key; const low=raw.toLowerCase(); if(low.includes('silo')) return SILO_KEY; if(low.includes('overzak')) return OVERZAK_KEY; if(low.includes('breeder')) return 'muatan_breeder'; if(low.includes('pagi')) return 'bongkaran_bahan_baku_pagi'; if(low.includes('malam')) return 'bongkaran_bahan_baku_malam'; if(low.includes('oper')) return 'oper_oper_bahan_baku'; if(low.includes('commercial') || low.includes('komersial')) return 'muatan_commercial'; if(low.includes('stapel')) return STAPEL_TF_KEY; if(low.includes('malleti') || low.includes('mallet')) return MALLETI_TF_KEY; return ''; }
function findCell(row, names){ const keys=Object.keys(row || {}); for(const wanted of names){ const hit=keys.find(k=>unitKey(k)===unitKey(wanted)); if(hit !== undefined) return row[hit]; } return ''; }
function parseCsv(text){ const rows=[]; let row=[]; let cell=''; let inQuote=false; for(let i=0;i<text.length;i++){ const ch=text[i], next=text[i+1]; if(ch==='"' && inQuote && next==='"'){ cell+='"'; i++; continue; } if(ch==='"'){ inQuote=!inQuote; continue; } if(ch===',' && !inQuote){ row.push(cell); cell=''; continue; } if((ch==='\n' || ch==='\r') && !inQuote){ if(ch==='\r' && next==='\n') i++; row.push(cell); if(row.some(v=>String(v).trim()!=='')) rows.push(row); row=[]; cell=''; continue; } cell+=ch; } row.push(cell); if(row.some(v=>String(v).trim()!=='')) rows.push(row); if(!rows.length) return []; const headers=rows.shift().map(h=>String(h||'').trim()); return rows.map(r=>Object.fromEntries(headers.map((h,i)=>[h, r[i] || '']))); }
async function readImportRows(file){ const name=(file.name||'').toLowerCase(); if(name.endsWith('.csv')) return parseCsv(await file.text()); if(!window.XLSX) throw new Error('Library pembaca Excel belum dimuat. Pastikan internet aktif, atau gunakan format CSV.'); const buffer=await file.arrayBuffer(); const workbook=window.XLSX.read(buffer,{type:'array'}); const sheetName=workbook.SheetNames[0]; const sheet=workbook.Sheets[sheetName]; return window.XLSX.utils.sheet_to_json(sheet,{defval:''}); }
function cleanImportedWorkers(rows, fallbackUnitKey){ const grouped={}; const skipped=[]; const reguMissing=[]; rows.forEach((row,idx)=>{ const nip=String(findCell(row,['NIP','No Induk','Nomor Induk','ID','PIN']) || '').trim(); const name=String(findCell(row,['Nama Pekerja','Nama','Pekerja','Nama Lengkap']) || '').trim(); const rawUnit=findCell(row,['Bagian','Unit','Lokasi','Departemen']); const rawStatus=findCell(row,['Status Pekerja','Status','Jenis Pekerja','Tipe Pekerja']); const targetUnit=matchUnitKey(rawUnit) || fallbackUnitKey; const regu=normalizeRegu(findCell(row,['Regu','Nama Regu','Nama Regu Commercial','Nama Regu Muatan Commercial'])); if(!nip || !name){ skipped.push(idx+2); return; } if(isCommercialKey(targetUnit) && !regu){ reguMissing.push(idx+2); skipped.push(idx+2); return; } if(!grouped[targetUnit]) grouped[targetUnit]=[]; grouped[targetUnit].push({nip,name,status:normalizeWorkerStatus(rawStatus, nip),regu}); }); return {grouped, skipped, reguMissing}; }
function normalizeWorkersForUnit(workers, unitKeyValue){ const arr=(workers||[]).map(cleanWorker).filter(w=>w.nip && w.name); arr.sort((a,b)=>{ if(unitKeyValue==='muatan_breeder'){ if(String(a.nip)==='133') return -1; if(String(b.nip)==='133') return 1; } if(isCommercialKey(unitKeyValue)){ const rg=(parseInt(normalizeRegu(a.regu),10)||999)-(parseInt(normalizeRegu(b.regu),10)||999); if(rg) return rg; } return (parseInt(a.nip,10)||999999)-(parseInt(b.nip,10)||999999) || String(a.name).localeCompare(String(b.name)); }); arr.forEach((w,i)=>{ w.no=i+1; }); return arr; }
async function loadUnitStateForImport(unitKeyValue){
  let result={ company:'PT. BUDI INTI PERKASA', reportDate: state.reportDate || todayISO(), workers: defaultWorkersForUnit(unitKeyValue), allowEmptyWorkers:false };
  const bridge=await waitFirebase();
  let loaded=false;
  if(bridge && bridge.enabled && bridge.loadAppState){
    try{
      const remote=await bridge.loadAppState(unitKeyValue);
      if(remote && Array.isArray(remote.workers)){
        result={ company:'PT. BUDI INTI PERKASA', reportDate:remote.reportDate || result.reportDate, workers:remote.workers.map(cleanWorker), allowEmptyWorkers:Boolean(remote.allowEmptyWorkers) };
        safeLocalSetJSON(`${STORAGE_KEY}_${unitKeyValue}`, cacheEnvelope(result, 'firestore_cache'));
        loaded=true;
      }
    }catch(err){ console.warn('Load unit Firestore gagal, memakai cache lokal.', err); }
  }
  if(!loaded){ const saved=unwrapCacheEnvelope(safeLocalGetJSON(`${STORAGE_KEY}_${unitKeyValue}`, null)); if(saved && Array.isArray(saved.workers)) result={ company:'PT. BUDI INTI PERKASA', reportDate:saved.reportDate || result.reportDate, workers:saved.workers.map(cleanWorker), allowEmptyWorkers:Boolean(saved.allowEmptyWorkers) }; }
  return result;
}
async function saveUnitStateForImport(unitKeyValue, unitState){ safeLocalSetJSON(`${STORAGE_KEY}_${unitKeyValue}`, cacheEnvelope(unitState, 'pending_or_cache')); const bridge=window.AbsensiFirebase; if(bridge && bridge.enabled && bridge.saveAppState){ await bridge.saveAppState(unitKeyValue, unitState, currentUser); safeLocalSetJSON(`${STORAGE_KEY}_${unitKeyValue}`, cacheEnvelope(unitState, 'firestore_cache')); } }
function renderAdminAccountForm(){
  const localAdmin=adminLoginUser() || {};
  const user=(currentUser && currentUser.role==='admin') ? { ...localAdmin, ...currentUser, password: localAdmin.password || '' } : localAdmin;
  if($('adminAccountNip')) $('adminAccountNip').value=accountUsername(user) || 'admin';
  if($('adminAccountName')) $('adminAccountName').value=user.name || 'Admin Absensi BIP';
  if($('adminAccountPassword')) $('adminAccountPassword').value=user.password || '';
  if($('adminAccountConfirm')) $('adminAccountConfirm').value=user.password || '';
}

async function saveAdminAccountSetting(){
  if(!requirePermission('manageAccounts','Setting akun hanya untuk admin.')) return;
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
    const bridge=await waitFirebase();
    if(bridge && bridge.enabled && bridge.saveCoordinator){ await bridge.saveCoordinator(payload, currentUser); }
    saveLocalAdminAccount(payload);
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
  if(!user){
    if($('adminCoordNip')) $('adminCoordNip').value='';
    if($('adminCoordName')) $('adminCoordName').value='';
    if($('adminCoordWorkerNip')) $('adminCoordWorkerNip').value='';
    if($('adminCoordWorkerName')) $('adminCoordWorkerName').value='';
    if($('adminCoordPassword')) $('adminCoordPassword').value='';
    if($('adminCoordActive')) $('adminCoordActive').checked=true;
    return;
  }
  const username=accountUsername(user);
  if(sel) sel.value=username;
  if($('adminCoordNip')) $('adminCoordNip').value=username || '';
  if($('adminCoordName')) $('adminCoordName').value=user.name || '';
  const workerIdentity=accountCoordinatorWorkerIdentity(user);
  if($('adminCoordWorkerNip')) $('adminCoordWorkerNip').value=workerIdentity.nip || '';
  if($('adminCoordWorkerName')) $('adminCoordWorkerName').value=workerIdentity.name || '';
  if($('adminCoordUnit')) $('adminCoordUnit').value=unitKey(user.unit || 'Muatan Breeder');
  if($('adminCoordRole')) $('adminCoordRole').value=normalizeRole(user.role || 'koordinator')==='admin' ? 'koordinator' : normalizeRole(user.role || 'koordinator');
  if($('adminCoordPassword')) $('adminCoordPassword').value=user.password || '';
  if($('adminCoordActive')) $('adminCoordActive').checked=user.active !== false;
}
async function saveCoordinatorSetting(){
  if(!requirePermission('manageAccounts','Setting akun hanya untuk admin.')) return;
  const username=String($('adminCoordNip') ? $('adminCoordNip').value : '').trim();
  const name=String($('adminCoordName') ? $('adminCoordName').value : '').trim();
  const coordinatorWorkerNip=String($('adminCoordWorkerNip') ? $('adminCoordWorkerNip').value : '').trim();
  const coordinatorWorkerName=String($('adminCoordWorkerName') ? $('adminCoordWorkerName').value : '').trim();
  const password=String($('adminCoordPassword') ? $('adminCoordPassword').value : '').trim();
  const unitKeyValue=$('adminCoordUnit') ? $('adminCoordUnit').value : 'muatan_breeder';
  const active=$('adminCoordActive') ? $('adminCoordActive').checked : true;
  const role=normalizeRole($('adminCoordRole') ? $('adminCoordRole').value : 'koordinator');
  if(!username || !name || !password){ alert('Username, nama, dan password wajib diisi.'); return; }
  if((coordinatorWorkerNip && !coordinatorWorkerName) || (!coordinatorWorkerNip && coordinatorWorkerName)){ alert('NIP Koordinator dan Nama Koordinator harus diisi lengkap, atau kosongkan keduanya.'); return; }
  const existing=coordinatorByUsername(username) || {};
  const payload={
    username,
    nip:String(existing.nip || username),
    name,
    password,
    role:role==='admin' ? 'koordinator' : role,
    unit:unitNameFromKey(unitKeyValue),
    active,
    coordinatorNip:coordinatorWorkerNip,
    coordinatorName:coordinatorWorkerName,
    workerNip:coordinatorWorkerNip,
    workerName:coordinatorWorkerName
  };
  const btn=$('btnAdminSaveCoordinator'); const old=btn?btn.textContent:'';
  try{
    if(btn){ btn.disabled=true; btn.textContent='Menyimpan...'; }
    const bridge=await waitFirebase();
    if(bridge && bridge.enabled && bridge.saveCoordinator){ await bridge.saveCoordinator(payload, currentUser); }
    saveLocalCoordinatorAccount(payload);
    initAdminTools();
    renderCoordinatorAccountOptions(username);
    const sel=$('adminCoordinatorSelect'); if(sel) sel.value=username;
    renderCoordinatorSettingForm();
    const workerLabel=coordinatorWorkerNip && coordinatorWorkerName ? ` / Koordinator ${coordinatorWorkerNip} - ${coordinatorWorkerName}` : '';
    adminLog(`Akun ${roleLabel(payload.role)} berhasil disimpan: ${name} / Username ${username} / ${unitNameFromKey(unitKeyValue)}${workerLabel}.`);
    alert('Setting akun berhasil disimpan.');
  }catch(err){
    console.error(err);
    alert('Simpan akun koordinator gagal: ' + (err && err.message ? err.message : err));
  }finally{
    if(btn){ btn.disabled=false; btn.textContent=old || '💾 Simpan Akun'; }
  }
}

async function deleteCoordinatorSetting(){
  if(!requirePermission('manageAccounts','Hapus akun hanya untuk admin.')) return;
  const sel=$('adminCoordinatorSelect');
  const selected=sel ? String(sel.value || '').trim() : '';
  const typed=String($('adminCoordNip') ? $('adminCoordNip').value : '').trim();
  const username=selected || typed;
  const user=coordinatorByUsername(username);
  if(!username || !user){ alert('Pilih akun yang akan dihapus terlebih dahulu.'); return; }
  const role=normalizeRole(user.role || 'koordinator');
  if(role==='admin'){ alert('Akun admin tidak bisa dihapus dari menu ini.'); return; }
  const label=`${user.name || username} / Username ${username} / Role ${roleLabel(role)}`;
  if(!confirm(`Hapus akun ini?

${label}

Tindakan ini menghapus akses login akun tersebut. Data absensi/pekerja lama tidak ikut dihapus.`)) return;
  const btn=$('btnAdminDeleteCoordinator'); const old=btn?btn.textContent:'';
  try{
    if(btn){ btn.disabled=true; btn.textContent='Menghapus...'; }
    const bridge=await waitFirebase();
    if(bridge && bridge.enabled && bridge.deleteCoordinator){ await bridge.deleteCoordinator(username, currentUser); }
    deleteLocalCoordinatorAccount(username);
    initAdminTools();
    renderCoordinatorAccountOptions();
    renderCoordinatorSettingForm();
    adminLog(`Akun ${roleLabel(role)} berhasil dihapus: ${label}.`);
    alert('Akun berhasil dihapus.');
  }catch(err){
    console.error(err);
    alert('Hapus akun gagal: ' + (err && err.message ? err.message : err));
  }finally{
    if(btn){ btn.disabled=false; btn.textContent=old || '🗑 Hapus Akun'; }
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
async function importWorkersFromExcel(source){ if(!requirePermission('importData','Import pekerja hanya bisa diproses oleh admin.')) return; const panelInput=$('adminPanelImportFile'); const oldInput=$('importWorkerFile'); const input=(source==='panel' && panelInput) ? panelInput : ((oldInput && oldInput.files && oldInput.files[0]) ? oldInput : panelInput); const file=input && input.files ? input.files[0] : null; if(!file){ alert('Pilih file Excel atau CSV terlebih dahulu.'); return; } const btn=source==='panel' ? $('btnAdminPanelImportWorkers') : $('btnImportWorkers'); const old=btn ? btn.textContent : ''; const defaultUnit=(source==='panel' && $('adminPanelUnitSelect')) ? $('adminPanelUnitSelect').value : ($('adminUnitSelect') ? $('adminUnitSelect').value : adminManagedUnitKey); try{ if(btn){ btn.disabled=true; btn.textContent='Memproses import...'; } const rows=await readImportRows(file); const parsed=cleanImportedWorkers(rows, defaultUnit); const unitKeys=Object.keys(parsed.grouped); if(!unitKeys.length){ alert('Tidak ada data valid. Pastikan kolom NIP dan Nama Pekerja terisi.'); return; } const summary=[]; for(const unitKeyValue of unitKeys){ const unitState=await loadUnitStateForImport(unitKeyValue); const byNip=new Map((unitState.workers||[]).map(w=>[String(w.nip), {...w}])); parsed.grouped[unitKeyValue].forEach(row=>{ const existing=byNip.get(String(row.nip)); byNip.set(String(row.nip), { no: existing ? existing.no : 0, nip:String(row.nip), name:String(row.name), status: row.status || (existing ? workerType(existing) : normalizeWorkerStatus('', row.nip)), regu: isCommercialKey(unitKeyValue) ? normalizeRegu(row.regu || (existing && existing.regu) || '') : '', s1: existing ? Boolean(existing.s1) : false, s2: existing ? Boolean(existing.s2) : false, s3: existing ? Boolean(existing.s3) : false }); }); unitState.workers=normalizeWorkersForUnit(Array.from(byNip.values()), unitKeyValue); unitState.allowEmptyWorkers=false; await saveUnitStateForImport(unitKeyValue, unitState); summary.push(`${unitNameFromKey(unitKeyValue)}: ${parsed.grouped[unitKeyValue].length} data`); } if(unitKeys.includes(activeUnitKey())){ await loadState(); renderAll(); } await renderAdminDashboard(); await renderAdminWorkerCrud(); alert('Import pekerja selesai.\n' + summary.join('\n') + (parsed.reguMissing && parsed.reguMissing.length ? `\n\nKhusus Muatan Commercial, baris tanpa Regu dilewati: ${parsed.reguMissing.join(', ')}` : (parsed.skipped.length ? `\n\nBaris dilewati: ${parsed.skipped.join(', ')}` : ''))); }catch(err){ console.error(err); alert('Import gagal: ' + (err && err.message ? err.message : err)); } finally{ if(btn){ btn.disabled=false; btn.textContent=old || '📥 Import Pekerja'; } } }
function downloadImportTemplate(){ const rows=[['NIP','Nama Pekerja','Bagian','Status Pekerja','Regu'],['133','Moch. Sholeh','Muatan Breeder','PKWT',''],['1201','Contoh Pekerja','Bongkaran Bahan Baku Pagi','Freelance',''],['2201','Contoh Pekerja Silo','Silo','PKWT',''],['3301','Contoh Pekerja Overzak','Overzak','Freelance',''],['20010401','Ahmad Fauzi','Muatan Commercial','Freelance','10'],['5001','Contoh Stapel','Stapel (TF)','PKWT',''],['6001','Contoh Malleti','Malleti (TF)','Freelance','']]; const html='<html><head><meta charset="utf-8"></head><body><table border="1">'+rows.map(r=>'<tr>'+r.map(c=>`<td>${safeText(c)}</td>`).join('')+'</tr>').join('')+'</table></body></html>'; const blob=new Blob(['\ufeff',html],{type:'application/vnd.ms-excel'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='template_import_pekerja_absensi.xls'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); }
function adminLog(message){ const el=$('adminActionLog'); if(el){ el.textContent='['+new Date().toLocaleString('id-ID')+'] '+message+'\n\n'+(el.textContent||''); } auditLog('admin_activity','admin',{message:String(message || '')}).catch(()=>{}); }
function localStorageKeys(prefix){ const out=[]; for(let i=0;i<localStorage.length;i++){ const k=localStorage.key(i); if(!prefix || k.startsWith(prefix)) out.push(k); } return out; }
function backupOptions(){
  const start=($('adminBackupStart') && $('adminBackupStart').value) || '';
  const end=($('adminBackupEnd') && $('adminBackupEnd').value) || '';
  return {
    startDate:start,
    endDate:end,
    includeAudit: $('adminBackupIncludeAudit') ? !!$('adminBackupIncludeAudit').checked : true,
    includeLocalCache: $('adminBackupIncludeLocalCache') ? !!$('adminBackupIncludeLocalCache').checked : false,
    auditLimit:1000
  };
}
function setBackupInfo(message){ if($('adminBackupInfo')) $('adminBackupInfo').textContent=message || ''; }
function backupFileStamp(){ return new Date().toISOString().replace(/[-:]/g,'').replace(/\..+$/,'').replace('T','_'); }
function downloadTextFile(filename, content, mime){ const blob=new Blob([content],{type:mime || 'application/octet-stream'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),2500); return filename; }
function backupLocalStorageSnapshot(includeValues){
  const keys=localStorageKeys().filter(k=>k && (k.startsWith('absensi_') || k.startsWith('BIP_'))).sort();
  return keys.map(key=>{
    const raw=localStorage.getItem(key) || '';
    let parsed=null, source='', updatedAt='';
    try{ parsed=JSON.parse(raw); source=parsed && parsed.__source ? parsed.__source : ''; updatedAt=parsed && parsed.__updatedAt ? parsed.__updatedAt : ''; }catch(err){}
    const row={ key, size:raw.length, source, updatedAt };
    if(includeValues) row.value=parsed !== null ? parsed : raw;
    return row;
  });
}
function buildLocalBackupSnapshot(options){
  const opt=options || {};
  const localRows=backupLocalStorageSnapshot(true);
  const collections={ local_storage_snapshot:localRows };
  return {
    app:'update_absensi_BIP', appVersion:'v70', source:'local_cache', exportedAtLocal:new Date().toISOString(),
    filter:{ startDate:opt.startDate || '', endDate:opt.endDate || '', includeAudit:false, localOnly:true },
    collectionCounts:{ local_storage_snapshot:localRows.length }, collections
  };
}
function backupCollectionCounts(snapshot){
  const counts={};
  const collections=(snapshot && snapshot.collections) || {};
  Object.keys(collections).forEach(k=>{ counts[k]=Array.isArray(collections[k]) ? collections[k].length : 0; });
  return counts;
}
function renderBackupSummary(snapshot){
  const el=$('adminBackupSummary'); if(!el) return;
  if(!snapshot){ el.innerHTML='<div class="empty-admin-list">Belum ada backup diproses.</div>'; return; }
  const counts=backupCollectionCounts(snapshot);
  const rows=Object.keys(counts).sort().map(k=>`<div class="sync-cache-card"><div class="label">${safeText(k)}</div><div class="value">${counts[k]}</div></div>`).join('');
  el.innerHTML=rows || '<div class="empty-admin-list">Tidak ada data backup.</div>';
}
function flattenBackupRow(row){
  const out={};
  Object.keys(row || {}).forEach(k=>{
    const v=row[k];
    if(v === null || v === undefined) out[k]='';
    else if(typeof v === 'object'){
      const json=JSON.stringify(v);
      out[k]=json.length>30000 ? json.slice(0,30000)+'...[dipotong]' : json;
    }else out[k]=v;
  });
  return out;
}
async function collectDatabaseBackup(options){
  const opt=options || backupOptions();
  const bridge=await waitFirebase();
  let snapshot=null;
  if(bridge && bridge.enabled && bridge.exportDatabaseSnapshot){
    snapshot=await bridge.exportDatabaseSnapshot(opt);
    snapshot.source='firestore';
    if(opt.includeLocalCache){ snapshot.collections.local_storage_summary=backupLocalStorageSnapshot(false); snapshot.collectionCounts=backupCollectionCounts(snapshot); }
    return snapshot;
  }
  snapshot=buildLocalBackupSnapshot(opt);
  return snapshot;
}
async function saveBackupHistory(snapshot, format, fileName){
  try{
    const bridge=window.AbsensiFirebase || await waitFirebase();
    if(bridge && bridge.enabled && bridge.saveBackupExportHistory){
      await bridge.saveBackupExportHistory({ status:'success', format, fileName, collectionCounts:backupCollectionCounts(snapshot), filter:(snapshot && snapshot.filter) || {} }, currentUser);
    }
  }catch(err){ console.warn('Riwayat backup gagal disimpan.', err); }
  auditLog('database_backup_export','backup_export',{message:'Backup database diexport: '+fileName, format, fileName, collectionCounts:backupCollectionCounts(snapshot)}).catch(()=>{});
}
async function adminPreviewBackup(){
  if(!requirePermission('backupExport','Backup/export database hanya untuk admin.')) return;
  const btn=$('btnAdminPreviewBackup'); const old=btn?btn.textContent:'';
  try{ if(btn){ btn.disabled=true; btn.textContent='Membaca...'; } const snapshot=await collectDatabaseBackup(backupOptions()); renderBackupSummary(snapshot); const source=snapshot.source==='firestore'?'Firestore':'cache lokal'; setBackupInfo('Preview siap dari '+source+'. Total collection: '+Object.keys((snapshot&&snapshot.collections)||{}).length+'.'); }
  catch(err){ console.error(err); alert('Preview backup gagal: '+(err && err.message ? err.message : err)); setBackupInfo('Preview gagal. Cek koneksi Firebase atau coba export cache lokal.'); }
  finally{ if(btn){ btn.disabled=false; btn.textContent=old || '🔍 Preview Ringkasan'; } }
}
async function adminExportBackupJson(){
  if(!requirePermission('backupExport','Backup/export database hanya untuk admin.')) return;
  const btn=$('btnAdminExportBackupJson'); const old=btn?btn.textContent:'';
  try{ if(btn){ btn.disabled=true; btn.textContent='Mengekspor...'; } const snapshot=await collectDatabaseBackup(backupOptions()); const filename='backup_update_absensi_BIP_v70_'+backupFileStamp()+'.json'; downloadTextFile(filename, JSON.stringify(snapshot,null,2), 'application/json;charset=utf-8'); renderBackupSummary(snapshot); await saveBackupHistory(snapshot,'json',filename); setBackupInfo('Backup JSON berhasil dibuat: '+filename); adminLog('Backup database JSON berhasil dibuat: '+filename); }
  catch(err){ console.error(err); alert('Export JSON gagal: '+(err && err.message ? err.message : err)); setBackupInfo('Export JSON gagal.'); }
  finally{ if(btn){ btn.disabled=false; btn.textContent=old || '⬇ Export JSON'; } }
}
async function adminExportBackupExcel(){
  if(!requirePermission('backupExport','Backup/export database hanya untuk admin.')) return;
  if(!window.XLSX){ alert('Library Excel belum dimuat. Gunakan Export JSON atau pastikan internet aktif.'); return; }
  const btn=$('btnAdminExportBackupExcel'); const old=btn?btn.textContent:'';
  try{
    if(btn){ btn.disabled=true; btn.textContent='Mengekspor...'; }
    const snapshot=await collectDatabaseBackup(backupOptions());
    const wb=window.XLSX.utils.book_new();
    const counts=backupCollectionCounts(snapshot);
    const meta=[
      { field:'app', value:snapshot.app || '' },{ field:'appVersion', value:snapshot.appVersion || '' },{ field:'source', value:snapshot.source || 'firestore' },{ field:'exportedAtLocal', value:snapshot.exportedAtLocal || '' },{ field:'filterStartDate', value:(snapshot.filter&&snapshot.filter.startDate)||'' },{ field:'filterEndDate', value:(snapshot.filter&&snapshot.filter.endDate)||'' }
    ];
    Object.keys(counts).forEach(k=>meta.push({ field:'count_'+k, value:counts[k] }));
    window.XLSX.utils.book_append_sheet(wb, window.XLSX.utils.json_to_sheet(meta), 'README');
    const collections=(snapshot && snapshot.collections) || {};
    Object.keys(collections).forEach(name=>{
      const rows=Array.isArray(collections[name]) ? collections[name].map(flattenBackupRow) : [];
      const sheet=window.XLSX.utils.json_to_sheet(rows.length ? rows : [{info:'Tidak ada data'}]);
      window.XLSX.utils.book_append_sheet(wb, sheet, String(name).slice(0,31));
    });
    const filename='backup_update_absensi_BIP_v70_'+backupFileStamp()+'.xlsx';
    window.XLSX.writeFile(wb, filename);
    renderBackupSummary(snapshot); await saveBackupHistory(snapshot,'xlsx',filename); setBackupInfo('Backup Excel berhasil dibuat: '+filename); adminLog('Backup database Excel berhasil dibuat: '+filename);
  }catch(err){ console.error(err); alert('Export Excel gagal: '+(err && err.message ? err.message : err)); setBackupInfo('Export Excel gagal.'); }
  finally{ if(btn){ btn.disabled=false; btn.textContent=old || '⬇ Export Excel'; } }
}
function adminBackupToday(){ const today=todayISO(); if($('adminBackupStart')) $('adminBackupStart').value=today; if($('adminBackupEnd')) $('adminBackupEnd').value=today; setBackupInfo('Filter backup diset ke hari ini: '+today); }

function parseDateInput(id){ const value=$(id) ? $(id).value : ''; return value || todayISO(); }
function dateRangeList(start,end){ const rows=[]; const makeDate=(v)=>{ const m=String(v||'').match(/^(\d{4})-(\d{2})-(\d{2})$/); return m ? new Date(Number(m[1]), Number(m[2])-1, Number(m[3])) : new Date(String(v||'')+'T00:00:00'); }; const fmt=(d)=>`${d.getFullYear()}-${twoDigits(d.getMonth()+1)}-${twoDigits(d.getDate())}`; const s=makeDate(start); const e=makeDate(end); if(isNaN(s) || isNaN(e) || s>e) return rows; for(let d=new Date(s.getFullYear(),s.getMonth(),s.getDate()); d<=e; d.setDate(d.getDate()+1)){ rows.push(fmt(d)); } return rows; }
async function loadWorkersForAdmin(unitKeyValue){ if(unitKeyValue==='ALL'){ const all=[]; for(const unit of UNITS){ const unitState=await loadUnitStateForImport(unit.key); all.push(...normalizeWorkersForUnit(unitState.workers || [], unit.key)); } return all; } const unitState=await loadUnitStateForImport(unitKeyValue); return normalizeWorkersForUnit(unitState.workers || [], unitKeyValue); }

function formatSyncTime(value){ if(!value) return '-'; try{ const d=new Date(value); if(isNaN(d)) return String(value); return d.toLocaleString('id-ID',{dateStyle:'short',timeStyle:'short'}); }catch(err){ return String(value); } }
function localCacheAuditSummary(){
  const groups={ pending_cache:0, offline_pending:0, firestore_cache:0, legacy:0 };
  try{
    for(let i=0;i<localStorage.length;i++){
      const key=localStorage.key(i) || '';
      if(!key.startsWith('absensi_') && !key.startsWith('BIP_')) continue;
      let val=null; try{ val=JSON.parse(localStorage.getItem(key)); }catch(err){}
      const source=val && typeof val==='object' && val.__source ? String(val.__source) : 'legacy';
      if(source.includes('offline')) groups.offline_pending++;
      else if(source.includes('pending')) groups.pending_cache++;
      else if(source.includes('firestore')) groups.firestore_cache++;
      else groups.legacy++;
    }
  }catch(err){}
  return groups;
}
function updateSyncBadges(){
  const pendingCount=getPendingAttendance().length;
  if($('adminPendingCount')) $('adminPendingCount').textContent=String(pendingCount);
  if($('syncPendingCount')) $('syncPendingCount').textContent=String(pendingCount);
}
function pendingAttendanceRowsForUI(){ return getPendingAttendance().map(row=>normalizeAttendancePayload(row)).sort((a,b)=>String(b.queuedAtLocal||b.savedAtLocal||'').localeCompare(String(a.queuedAtLocal||a.savedAtLocal||''))); }
function renderPendingList(){
  const list=$('syncPendingList'); if(!list) return;
  const rows=pendingAttendanceRowsForUI();
  if(!rows.length){ list.innerHTML='<div class="empty-admin-list">Belum ada data pending. Semua absensi di browser ini sudah tersinkron atau belum ada antrean offline.</div>'; return; }
  list.innerHTML=rows.map(row=>{
    const total=(row.workers||[]).length;
    const err=row.lastSyncError ? `<div class="meta">Error terakhir: ${safeText(row.lastSyncError)}</div>` : '';
    return `<div class="sync-row"><div><div class="main">${safeText(row.unit || unitNameFromKey(row.unitKey))} - ${safeText(row.reportDate)} <span class="sync-chip warn">Pending</span></div><div class="meta">ID: ${safeText(row.id)} • ${total} baris • Dibuat: ${safeText(formatSyncTime(row.queuedAtLocal || row.savedAtLocal))}</div>${err}</div><div class="row-actions"><button class="btn success" data-pending-sync="${safeText(row.id)}">Sync</button><button class="btn danger" data-pending-delete="${safeText(row.id)}">Hapus</button></div></div>`;
  }).join('');
}

const FIRESTORE_FREE_QUOTA = {
  storageBytes: 1024 * 1024 * 1024,
  readsPerDay: 50000,
  writesPerDay: 20000,
  deletesPerDay: 20000,
  outboundBytesPerMonth: 10 * 1024 * 1024 * 1024
};
const FIRESTORE_USAGE_COLLECTIONS = ['coordinators','active_sessions','app_data','attendance','master_data','attendance_imports','audit_logs','backup_exports'];
function bytesFromText(value){ try{ return new Blob([String(value || '')]).size; }catch(err){ return String(value || '').length; } }
function formatBytesID(bytes){ const n=Number(bytes || 0); if(n < 1024) return `${n} B`; if(n < 1024*1024) return `${(n/1024).toFixed(1)} KB`; if(n < 1024*1024*1024) return `${(n/1024/1024).toFixed(2)} MB`; return `${(n/1024/1024/1024).toFixed(2)} GB`; }
function pctOfQuota(value, quota){ if(!quota) return 0; return Math.max(0, Math.min(100, (Number(value || 0) / quota) * 100)); }
function quotaCard(label, valueText, detailText, pct, warnAt=80){ const cls=pct>=warnAt ? 'usage-warn' : 'usage-ok'; return `<div class="sync-cache-card"><div class="label">${safeText(label)}</div><div class="value ${cls}">${safeText(valueText)}</div><div class="usage-meter"><div class="usage-meter-fill" style="width:${Math.min(100, Math.max(0, pct)).toFixed(2)}%"></div></div><div class="usage-detail">${safeText(detailText)}</div></div>`; }
function firstDateValue(row, keys){ for(const key of keys){ const v=row && row[key]; if(v){ const s=String(v).slice(0,10); if(/^\d{4}-\d{2}-\d{2}$/.test(s)) return s; } } return ''; }
function isFirestoreDocToday(collectionName, row, today){ const keys=['createdAtLocal','savedAtLocal','updatedAtLocal','importedAtLocal','exportedAtLocal','loginAtLocal']; const direct=firstDateValue(row, keys); if(direct) return direct===today; if(collectionName==='attendance' && String(row && row.reportDate || '').slice(0,10)===today) return true; return false; }
async function collectFirestoreUsageEstimate(){
  const bridge=window.AbsensiFirebase || await waitFirebase();
  if(!(bridge && bridge.enabled && bridge.exportCollectionDocs)) throw new Error('Firebase belum online atau fungsi exportCollectionDocs tidak tersedia.');
  const today=todayISO();
  const collections=[];
  let totalDocs=0, totalBytes=0, todayWritesEstimate=0;
  for(const name of FIRESTORE_USAGE_COLLECTIONS){
    let rows=[];
    try{
      const max=name==='attendance' ? 10000 : (name==='audit_logs' ? 3000 : 2000);
      rows=await bridge.exportCollectionDocs(name, max);
    }catch(err){
      collections.push({ name, docs:0, bytes:0, todayWrites:0, error:String(err && err.message ? err.message : err) });
      continue;
    }
    const json=JSON.stringify(rows || []);
    const bytes=bytesFromText(json);
    const todayWrites=(rows || []).filter(row=>isFirestoreDocToday(name, row, today)).length;
    totalDocs += rows.length;
    totalBytes += bytes;
    todayWritesEstimate += todayWrites;
    collections.push({ name, docs:rows.length, bytes, todayWrites, error:'' });
  }
  return {
    generatedAt:new Date().toISOString(),
    today,
    collections,
    totalDocs,
    totalBytes,
    estimatedReadsThisRefresh:totalDocs,
    todayWritesEstimate,
    storagePct:pctOfQuota(totalBytes, FIRESTORE_FREE_QUOTA.storageBytes),
    readsPct:pctOfQuota(totalDocs, FIRESTORE_FREE_QUOTA.readsPerDay),
    writesPct:pctOfQuota(todayWritesEstimate, FIRESTORE_FREE_QUOTA.writesPerDay)
  };
}
function renderFirestoreUsageEstimate(data, errorMessage){
  const summary=$('firestoreUsageSummary');
  const detail=$('firestoreUsageDetails');
  if(errorMessage){
    if(summary) summary.innerHTML=`<div class="empty-admin-list">${safeText(errorMessage)}</div>`;
    if(detail) detail.innerHTML='';
    return;
  }
  if(!data){ return; }
  if(summary){
    summary.innerHTML=[
      quotaCard('Estimasi Storage', formatBytesID(data.totalBytes), `${data.storagePct.toFixed(3)}% dari kuota gratis 1 GiB`, data.storagePct),
      quotaCard('Total Dokumen Terbaca', String(data.totalDocs), `Estimasi read untuk refresh ini: ${data.estimatedReadsThisRefresh} / 50.000 per hari`, data.readsPct),
      quotaCard('Estimasi Write Hari Ini', String(data.todayWritesEstimate), `${data.writesPct.toFixed(3)}% dari kuota gratis 20.000 write/hari`, data.writesPct),
      quotaCard('Status Estimasi', data.storagePct < 70 && data.readsPct < 70 && data.writesPct < 70 ? 'Aman' : 'Perlu Dipantau', `Dihitung: ${formatSyncTime(data.generatedAt)}`, Math.max(data.storagePct,data.readsPct,data.writesPct))
    ].join('');
  }
  if(detail){
    const rows=(data.collections || []).map(c=>`<tr><td>${safeText(c.name)}</td><td>${safeText(c.docs)}</td><td>${safeText(formatBytesID(c.bytes))}</td><td>${safeText(c.todayWrites)}</td><td>${c.error ? safeText(c.error) : 'OK'}</td></tr>`).join('');
    detail.innerHTML=`<table class="usage-table"><thead><tr><th>Collection</th><th>Dokumen</th><th>Estimasi Ukuran JSON</th><th>Estimasi Write Hari Ini</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table><div class="usage-detail">Catatan: Firestore tidak menyediakan angka kuota resmi langsung dari aplikasi client. Untuk angka billing resmi, cek Firebase Console / Google Cloud Billing. Fitur ini hanya estimasi praktis dari data yang berhasil dibaca aplikasi.</div>`;
  }
}
async function refreshFirestoreUsageEstimate(){
  if(!isAdmin()) return;
  const btn=$('btnAdminRefreshFirestoreUsage'); const old=btn ? btn.textContent : '';
  try{
    if(btn){ btn.disabled=true; btn.textContent='Menghitung...'; }
    renderFirestoreUsageEstimate(null, 'Menghitung estimasi penggunaan Firestore...');
    const data=await collectFirestoreUsageEstimate();
    renderFirestoreUsageEstimate(data, '');
    adminLog(`Estimasi Firestore dihitung. Dokumen: ${data.totalDocs}, storage: ${formatBytesID(data.totalBytes)}, write hari ini: ${data.todayWritesEstimate}.`);
  }catch(err){
    console.error(err);
    renderFirestoreUsageEstimate(null, 'Gagal menghitung estimasi Firestore: '+(err && err.message ? err.message : err));
  }finally{
    if(btn){ btn.disabled=false; btn.textContent=old || '📊 Hitung Estimasi'; }
  }
}
async function renderAdminSyncStatus(refreshConnection=true){
  if(!isAdmin()) return;
  if(refreshConnection) await updateFirebaseStatusUI();
  const bridge=window.AbsensiFirebase || await waitFirebase();
  const online=Boolean(bridge && bridge.enabled);
  if($('syncFirebaseStatus')) $('syncFirebaseStatus').innerHTML=online ? '<span class="sync-chip ok">Online</span>' : '<span class="sync-chip err">Offline</span>';
  updateSyncBadges();
  const summary=localCacheAuditSummary();
  if($('syncOfflineCacheCount')) $('syncOfflineCacheCount').textContent=String(summary.offline_pending + summary.pending_cache);
  if($('syncLastUpdated')) $('syncLastUpdated').textContent=formatSyncTime(new Date().toISOString());
  renderPendingList();
  const grid=$('syncCacheSummary');
  if(grid){
    grid.innerHTML=[
      ['Firestore Cache', summary.firestore_cache],
      ['Pending/Cache Lokal', summary.pending_cache],
      ['Offline Pending', summary.offline_pending],
      ['Legacy/Lainnya', summary.legacy]
    ].map(([label,value])=>`<div class="sync-cache-card"><div class="label">${safeText(label)}</div><div class="value">${safeText(value)}</div></div>`).join('');
  }
}
async function syncOnePendingAttendance(id){
  if(!id) return;
  const result=await syncPendingAttendanceOnline(id);
  await renderAdminSyncStatus();
  if(result && result.success) adminLog('Data pending berhasil disync: '+id); else adminLog('Data pending belum berhasil disync: '+id);
}
function deleteOnePendingAttendance(id){
  if(!id) return;
  const row=getPendingAttendance().find(x=>attendanceDocId(x)===id);
  if(!row) return;
  if(!confirm('Hapus antrean pending lokal ini?\n\nData utama Firestore tidak akan dihapus.')) return;
  setPendingAttendance(getPendingAttendance().filter(x=>attendanceDocId(x)!==id));
  auditLog('delete_pending_local','sync',{message:'Admin menghapus antrean pending lokal', attendanceDocId:id, unitKey:row.unitKey, reportDate:row.reportDate}).catch(()=>{});
  renderAdminSyncStatus(false);
  renderAdminDashboard();
  adminLog('Antrean pending lokal dihapus: '+id);
}
async function renderAdminDashboard(){ if(!isAdmin()) return; renderCoordinatorSettingForm(); const unitSel=$('adminDashUnitSelect'); const target=unitSel ? unitSel.value : adminManagedUnitKey; let workers=[]; try{ workers=await loadWorkersForAdmin(target); }catch(err){ console.warn('Ringkasan admin gagal dimuat', err); }
  const pkwt=workers.filter(w=>workerType(w)==='PKWT').length; const free=workers.filter(w=>workerType(w)==='Freelance').length; if($('adminTotalWorkers')) $('adminTotalWorkers').textContent=workers.length; if($('adminTotalPkwt')) $('adminTotalPkwt').textContent=pkwt; if($('adminTotalFreelance')) $('adminTotalFreelance').textContent=free; if($('adminPendingCount')) $('adminPendingCount').textContent=getPendingAttendance().length; }
async function clearWorkersForUnit(unitKeyValue){ const unitState={ company:'PT. BUDI INTI PERKASA', reportDate: state.reportDate || todayISO(), workers: [], allowEmptyWorkers:true }; safeLocalSetJSON(`${STORAGE_KEY}_${unitKeyValue}`, cacheEnvelope(unitState, 'pending_or_cache')); const bridge=window.AbsensiFirebase; if(bridge && bridge.enabled && bridge.saveAppState){ await bridge.saveAppState(unitKeyValue, unitState, currentUser); safeLocalSetJSON(`${STORAGE_KEY}_${unitKeyValue}`, cacheEnvelope(unitState, 'firestore_cache')); } if(activeUnitKey()===unitKeyValue){ state=unitState; renderAll(); } }
async function adminClearWorkers(){ if(!requirePermission('deleteData','Hapus data pekerja hanya untuk admin.')) return; const sel=$('adminClearWorkersUnit'); const target=sel ? sel.value : adminManagedUnitKey; const targets=target==='ALL' ? UNITS.map(u=>u.key) : [target]; const names=target==='ALL' ? 'SEMUA BAGIAN' : unitNameFromKey(target); if(!confirm(`Hapus data pekerja ${names}?\n\nData absensi tidak ikut terhapus. Setelah itu kamu bisa import ulang data pekerja.`)) return; const btn=$('btnAdminClearWorkers'); const old=btn?btn.textContent:''; try{ if(btn){ btn.disabled=true; btn.textContent='Menghapus...'; } for(const key of targets){ await clearWorkersForUnit(key); } await loadState(); renderAll(); await renderAdminDashboard(); await renderAdminWorkerCrud(); adminLog('Data pekerja berhasil dihapus: '+names); alert('Data pekerja berhasil dihapus. Silakan import ulang data pekerja.'); }catch(err){ console.error(err); alert('Hapus data pekerja gagal: '+(err && err.message ? err.message : err)); }finally{ if(btn){ btn.disabled=false; btn.textContent=old || '🗑 Hapus Data Pekerja'; } } }
function removeAttendanceLocal(unitKeys, dates){ let count=0; unitKeys.forEach(key=>dates.forEach(date=>{ const k=`${ATTENDANCE_KEY}_${key}_${date}`; if(localStorage.getItem(k)!==null){ localStorage.removeItem(k); count++; } })); const pending=getPendingAttendance().filter(row=>!(row && unitKeys.includes(row.unitKey) && dates.includes(row.reportDate))); setPendingAttendance(pending); return count; }
async function deleteAttendanceOnline(unitKeys,start,end){ const bridge=window.AbsensiFirebase; if(!(bridge && bridge.enabled && bridge.deleteAttendanceRange)) return {deleted:0, online:false}; let total=0; for(const key of unitKeys){ const res=await bridge.deleteAttendanceRange(key,start,end); total += Number(res && res.deleted || 0); } return {deleted:total, online:true}; }
async function adminDeleteAttendance(){ if(!requirePermission('deleteData','Hapus data absensi hanya untuk admin.')) return; const target=$('adminDeleteAttendanceUnit') ? $('adminDeleteAttendanceUnit').value : adminManagedUnitKey; const start=parseDateInput('adminDeleteStart'); const end=parseDateInput('adminDeleteEnd'); const dates=dateRangeList(start,end); if(!dates.length){ alert('Periode tanggal tidak valid. Pastikan tanggal awal tidak lebih besar dari tanggal akhir.'); return; } const unitKeys=target==='ALL' ? UNITS.map(u=>u.key) : [target]; const label=target==='ALL' ? 'SEMUA BAGIAN' : unitNameFromKey(target); if(!confirm(`Hapus data absensi ${label}\nPeriode ${start} sampai ${end}?\n\nData yang sudah dihapus tidak bisa dikembalikan dari aplikasi.`)) return; const btn=$('btnAdminDeleteAttendance'); const old=btn?btn.textContent:''; try{ if(btn){ btn.disabled=true; btn.textContent='Menghapus...'; } const localDeleted=removeAttendanceLocal(unitKeys, dates); const online=await deleteAttendanceOnline(unitKeys,start,end); await renderAdminDashboard(); adminLog(`Hapus absensi selesai. Target: ${label}. Periode: ${start} s/d ${end}. Lokal: ${localDeleted}. Firebase: ${online.online?online.deleted:'tidak online'}.`); alert('Proses hapus absensi selesai.'); }catch(err){ console.error(err); alert('Hapus absensi gagal: '+(err && err.message ? err.message : err)); }finally{ if(btn){ btn.disabled=false; btn.textContent=old || '🗑 Hapus Absensi Periode'; } } }
function switchToPanel(panelId){ const btn=document.querySelector(`.tab-btn[data-panel="${panelId}"]`); if(btn) btn.click(); }
function showAdminSection(section){
  const target=section || 'summary';
  document.querySelectorAll('.admin-section-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.adminSection===target));
  document.querySelectorAll('.admin-section-card').forEach(card=>card.classList.toggle('active', card.dataset.adminPanel===target));
  if(target==='setting-account' && isAdmin()){
    refreshAccountsFromFirestore(true).then(()=>{
      initAdminTools();
      renderCoordinatorSettingForm();
      renderAdminAccountForm();
    });
  }
  if(target==='backup-export' && isAdmin()){
    renderBackupSummary(null);
  }
}


function exportExcel(){
  if(!requirePermission('printReports','Akses ditolak. Role ini tidak boleh export laporan.')) return;
  const rows=selectedWorkers();
  if(rows.length===0){ alert('Export Excel belum bisa dibuat. Pilih minimal 1 pekerja terlebih dahulu.'); return; }
  const isCommercialRows=isCommercialKey(activeUnitKey()) || rows.some(w=>w && (w.ldRegu || w.loadingDock || w.regu));
  const s1=rows.filter(w=>w.s1).length, s2=rows.filter(w=>w.s2).length, s3=rows.filter(w=>w.s3).length;
  const tableRows=rows.map((w,i)=> isCommercialRows
    ? `<tr><td>${i+1}</td><td>${safeText(w.ldRegu || commercialLdReguLabel(w.loadingDock,w.regu))}</td><td>${safeText(w.nip)}</td><td>${safeText(w.name)}</td><td>${w.s1?'✓':''}</td><td>${w.s2?'✓':''}</td><td>${w.s3?'✓':''}</td></tr>`
    : `<tr><td>${i+1}</td><td>${safeText(w.nip)}</td><td>${safeText(w.name)}</td><td>${w.s1?'✓':''}</td><td>${w.s2?'✓':''}</td><td>${w.s3?'✓':''}</td></tr>`
  ).join('');
  const header=isCommercialRows ? '<tr><th>NO</th><th>LD-Regu</th><th>NIP</th><th>NAMA PEKERJA</th><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th></tr>' : '<tr><th>NO</th><th>NIP</th><th>NAMA</th><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th></tr>';
  const html=`<html><head><meta charset="utf-8"></head><body><h3 style="text-align:center">ABSENSI KEGIATAN ${safeText(!isAdmin() && isOverzakKey(activeUnitKey()) ? BAHAN_BAKU_GABUNGAN_NAME : activeUnitName()).toUpperCase()}</h3><div style="text-align:center">PT. BUDI INTI PERKASA</div><div style="text-align:center">${formatLongDate(state.reportDate)}</div><table border="1" cellspacing="0" cellpadding="5"><thead>${header}</thead><tbody>${tableRows}</tbody></table><br><table border="1" cellspacing="0" cellpadding="5"><tr><th></th><th>SHIFT 1</th><th>SHIFT 2</th><th>SHIFT 3</th></tr><tr><td>JUMLAH PEKERJA</td><td>${s1}</td><td>${s2}</td><td>${s3}</td></tr><tr><td colspan="4">${rows.length} Orang</td></tr></table></body></html>`;
  const blob=new Blob(['﻿',html],{type:'application/vnd.ms-excel'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download=`absensi_${activeUnitKey()}_${state.reportDate || 'tanggal'}.xls`;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
window.addEventListener('beforeunload', e=>{ if(scheduleHasUnsavedChanges()){ e.preventDefault(); e.returnValue=''; } });
document.addEventListener('focusin', e=>{ if(e.target && e.target.matches('#reportDate')) e.target.dataset.prevValue=e.target.value || state.reportDate || ''; });
document.addEventListener('input', e=>{ if(e.target && e.target.matches('[data-report-setting]')){ if(hasPermission('manageSettings')) saveReportSettings(); } });
document.addEventListener('blur', e=>{ if(e.target && e.target.matches('[data-report-setting]')){ if(hasPermission('manageSettings')) saveReportSettings(); } }, true);
document.addEventListener('click', e=>{ const restoreBackupBtn=e.target.closest('[data-restore-schedule-backup]'); if(restoreBackupBtn){ restoreScheduleBackup(restoreBackupBtn.dataset.restoreScheduleBackup); return; } const refreshHistoryBtn=e.target.closest('#btnRefreshScheduleHistory'); if(refreshHistoryBtn){ renderScheduleHistoryPanel(); return; } const editScheduleBtn=e.target.closest('#btnEditSchedule'); if(editScheduleBtn){ beginEditSchedule(); return; } const cancelScheduleBtn=e.target.closest('#btnCancelSchedule'); if(cancelScheduleBtn){ cancelScheduleChanges(); return; } const sectionBtn=e.target.closest('[data-admin-section]'); if(sectionBtn){ if(!requirePermission('adminPanel','Panel admin hanya untuk admin.')) return; showAdminSection(sectionBtn.dataset.adminSection); if(sectionBtn.dataset.adminSection==='worker-crud') renderAdminWorkerCrud(); if(sectionBtn.dataset.adminSection==='summary') renderAdminDashboard(); if(sectionBtn.dataset.adminSection==='import-data'){ updateGlobalCheckInfo(); renderGlobalCheckImportHistory(); } if(sectionBtn.dataset.adminSection==='loading-dock') renderAdminLoadingDocks(); if(sectionBtn.dataset.adminSection==='sync-status') renderAdminSyncStatus(); return; } const syncBtn=e.target.closest('[data-pending-sync]'); if(syncBtn){ syncOnePendingAttendance(syncBtn.dataset.pendingSync); return; } const pendingDel=e.target.closest('[data-pending-delete]'); if(pendingDel){ deleteOnePendingAttendance(pendingDel.dataset.pendingDelete); return; } const dockDel=e.target.closest('[data-dock-delete]'); if(dockDel){ adminDeleteDock(dockDel.dataset.dockDelete); return; } const editBtn=e.target.closest('[data-admin-worker-edit]'); if(editBtn){ adminFillWorkerForm(editBtn.dataset.adminWorkerEdit); return; } const delBtn=e.target.closest('[data-admin-worker-delete]'); if(delBtn){ adminDeleteWorkerCrud(delBtn.dataset.adminWorkerDelete); return; } const btn=e.target.closest('.tab-btn'); if(btn){ if(isAdmin() && btn.dataset.panel==='panelWorkers') return; document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active')); document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active')); document.querySelectorAll(`.tab-btn[data-panel="${btn.dataset.panel}"]`).forEach(b=>b.classList.add('active')); $(btn.dataset.panel).classList.add('active'); renderReport(); if(btn.dataset.panel==='panelAdmin') renderAdminDashboard(); } });
document.addEventListener('change', async e=>{
  if(e.target.matches('input[data-shift]') && !hasPermission('inputAttendance')){ e.target.checked=!e.target.checked; requirePermission('inputAttendance','Akses ditolak. Role ini tidak boleh mengubah input absensi.'); return; }
  if(e.target.matches('input[data-shift]')){
    if(!assertScheduleDateSelected()){ e.target.checked=!e.target.checked; return; }
    const no=Number(e.target.dataset.no), shift=e.target.dataset.shift;
    const w=state.workers.find(x=>x.no===no);
    const allowed=coordinatorAllowedShift();
    if(w && !shiftAllowedForActiveCoordinator(shift, w)){ e.target.checked=false; return; }
    if(w){
      if(e.target.checked && coordinatorCanChooseBahanBakuActivity() && getBahanBakuActivityUnitKeys().includes(activeUnitKey())) await refreshBahanBakuActivityConflictCache({force:true});
      if(!validateBahanBakuShiftChange(w, shift, e.target.checked)){ e.target.checked=false; return; }
      ensureScheduleEditBaseline();
      w[shift]=e.target.checked;
      if(coordinatorBahanBakuMalamMode()){
        w.s1=false;
      }else if(!canUseAllShiftsDespiteSingleShiftRule(w)){
        if(allowed==='s1'){ w.s2=false; w.s3=false; }
        if(allowed==='s2'){ w.s1=false; w.s3=false; }
        if(allowed==='s3'){ w.s1=false; w.s2=false; }
      }
      markScheduleDirty();
      await saveState();
      bahanBakuActivityConflictRowsCache[activeUnitKey()]=(state.workers||[]).map((row,idx)=>({...cleanWorker(row,idx), kegiatan:row.kegiatan || bahanBakuActivityLabelFromKey(activeUnitKey()), sourceUnitKey:activeUnitKey()}));
      renderReport();
      renderWorkers();
      updateCounts();
    }
  }
  if(e.target.matches('#reportDate')){ if(!hasPermission('inputAttendance') && !hasPermission('viewReports')) return; const previous=e.target.dataset.prevValue || state.reportDate || ''; if(!confirmLeaveUnsavedScheduleChanges()){ e.target.value=previous; return; } scheduleEditSession.dirty=false; state.reportDate=e.target.value || ''; resetScheduleActiveDateStatus(); if(isCommercialKey(activeUnitKey()) && !isAdmin()) applyCommercialDraftSelection(); await saveState(); await refreshBahanBakuActivityConflictCache({force:true}); renderAll(); await refreshScheduleActiveDateStatus(state.reportDate, {force:true}); }
  if(e.target.matches('#activitySelect')){
    if(coordinatorCanChooseCommercialActivity()){
      changeCommercialInputActivity(e.target.value).catch(err=>{ console.error(err); alert('Gagal mengganti kegiatan Commercial: ' + (err && err.message ? err.message : err)); });
    }else{
      changeCoordinatorActivity(e.target.value).catch(err=>{ console.error(err); alert('Gagal mengganti kegiatan: ' + (err && err.message ? err.message : err)); });
    }
  }
  if(e.target.matches('[data-commercial-dock-plan]')){
    if(!assertScheduleDateSelected()){ e.target.checked=!e.target.checked; return; }
    if(!requirePermission('inputAttendance','Akses ditolak. Role ini tidak boleh mengubah aturan jadwal Loading Dock.')){ e.target.checked=!e.target.checked; return; }
    const dock=normalizeDockName(e.target.dataset.dock);
    const plan=normalizeCommercialDockPlan(e.target.value || e.target.dataset.commercialDockPlan);
    if(e.target.checked){
      applyCommercialDockPlanToInputs(dock, plan);
    }else{
      applyCommercialDockPlanToInputs(dock, '');
    }
    markScheduleDirty(); saveCommercialDraftSelection(); renderReport(); updateCounts();
  }
  if(e.target.matches('[data-commercial-shift]')){
    if(!assertScheduleDateSelected()){ e.target.checked=!e.target.checked; return; }
    if(!requirePermission('inputAttendance','Akses ditolak. Role ini tidak boleh mengubah input Commercial.')){ e.target.checked=!e.target.checked; return; }
    markScheduleDirty(); saveCommercialDraftSelection(); renderReport(); updateCounts();
  }
  if(e.target.matches('[data-commercial-regu-select]')){ if(!assertScheduleDateSelected()){ renderAll(); return; } if(!requirePermission('inputAttendance','Akses ditolak. Role ini tidak boleh mengubah Regu Commercial.')) return; enforceUniqueCommercialReguSelection(e.target); refreshCommercialReguSelectOptions(); markScheduleDirty(); saveCommercialDraftSelection(); renderReport(); updateCounts(); }
  if(e.target.matches('[data-commercial-coordinator-shift]')){
    if(!assertScheduleDateSelected()){ e.target.checked=!e.target.checked; return; }
    if(!requirePermission('inputAttendance','Akses ditolak. Role ini tidak boleh mengubah jadwal koordinator Muatan Commercial.')){ e.target.checked=!e.target.checked; return; }
    markScheduleDirty(); saveCommercialDraftSelection(); renderReport(); updateCounts();
  }
  if(e.target.matches('[data-commercial-activity-shift]')){
    if(!assertScheduleDateSelected()){ e.target.checked=!e.target.checked; return; }
    if(!requirePermission('inputAttendance','Akses ditolak. Role ini tidak boleh mengubah input aktivitas Commercial.')){ e.target.checked=!e.target.checked; return; }
    markScheduleDirty(); saveCommercialDraftSelection(); renderReport(); updateCounts();
  }
  if(e.target.matches('[data-overzak-shift]')){ if(!assertScheduleDateSelected()){ e.target.checked=!e.target.checked; return; } if(!requirePermission('inputAttendance','Akses ditolak. Role ini tidak boleh mengubah input Overzak.')){ e.target.checked=!e.target.checked; return; } markScheduleDirty(); saveBahanBakuOverzakDraftSelection(); renderReport(); updateCounts(); }
  if(e.target.matches('#selectPkwt') && e.target.value){ fillForm(e.target.value); }
  if(e.target.matches('#selectFreelance') && e.target.value){ fillForm(e.target.value); }
});
syncAdminAttendanceOptionCheckboxes(); refreshAdminAttendanceOptionsFromFirestore().catch(err=>console.warn('Load opsi admin Firestore gagal.', err)); if($('adminAutoUseS3')) $('adminAutoUseS3').addEventListener('change', e=>{ adminAttendanceOptions.autoShift3=!!e.target.checked; saveAdminAttendanceOptionsToFirestore().catch(err=>console.warn('Simpan opsi Shift 3 Firestore gagal.', err)); }); if($('adminShowDurationReport')) $('adminShowDurationReport').addEventListener('change', e=>{ adminAttendanceOptions.showDuration=!!e.target.checked; saveAdminAttendanceOptionsToFirestore().catch(err=>console.warn('Simpan opsi durasi Firestore gagal.', err)); renderReport(); }); ['adminAutoInMinBefore','adminAutoInMaxBefore','adminAutoOutMinAfter','adminAutoOutMaxAfter'].forEach(id=>{ if($(id)) $(id).addEventListener('change', ()=>{ getAdminAutoRandomOptions(); saveAdminAttendanceOptionsToFirestore().catch(err=>console.warn('Simpan aturan acak otomatis gagal.', err)); }); });
if($('loginForm')) $('loginForm').addEventListener('submit', async e=>{ e.preventDefault(); const ok=await loginLocal($('loginNip').value, $('loginPassword').value); if(!ok){ $('loginError').classList.add('show'); $('loginPassword').focus(); } });
if($('btnTogglePassword')) $('btnTogglePassword').addEventListener('click', ()=>{ const input=$('loginPassword'); input.type=input.type==='password'?'text':'password'; });
if($('btnLogout')) $('btnLogout').addEventListener('click', logoutLocal);
$('btnAddWorker').addEventListener('click', addWorker); $('btnUpdateWorker').addEventListener('click', updateWorker); $('btnDeleteWorker').addEventListener('click', deleteWorker); $('btnClearForm').addEventListener('click', clearForm); $('btnResetShift').addEventListener('click', resetShift); $('btnSaveSchedule').addEventListener('click', saveSchedule); $('workerFilter').addEventListener('input', renderWorkers); $('btnShareWa').addEventListener('click', shareWhatsapp); if($('adminUnitSelect')) $('adminUnitSelect').addEventListener('change', async e=>{ adminManagedUnitKey=e.target.value || 'muatan_breeder'; updateAuthUI(); await loadState(); renderAll(); }); if($('importWorkerFile')) $('importWorkerFile').addEventListener('change', e=>{ const file=e.target.files && e.target.files[0]; if($('importFileName')) $('importFileName').textContent=file ? `File dipilih: ${file.name}` : 'Belum ada file dipilih.'; }); if($('btnImportWorkers')) $('btnImportWorkers').addEventListener('click', ()=>importWorkersFromExcel('legacy')); if($('btnDownloadTemplate')) $('btnDownloadTemplate').addEventListener('click', downloadImportTemplate); if($('adminDashUnitSelect')) $('adminDashUnitSelect').addEventListener('change', renderAdminDashboard); if($('adminReportUnitSelect')) $('adminReportUnitSelect').addEventListener('change', ()=>{ adminReportData=null; syncCheckSummaryUnitFromReport(); lastCheckInOutSummaryResult=null; renderCheckInOutSummary(null); renderReport(); }); if($('adminReportDate')) $('adminReportDate').addEventListener('change', ()=>{ adminReportData=null; renderReport(); }); if($('btnAdminLoadAttendance')) $('btnAdminLoadAttendance').addEventListener('click', loadAdminAttendance); if($('btnAdminRefreshAttendance')) $('btnAdminRefreshAttendance').addEventListener('click', loadAdminAttendance); if($('btnBottomPrintAttendance')) $('btnBottomPrintAttendance').addEventListener('click', printAdminAttendance); if($('btnAdminSaveCheckTimes')) $('btnAdminSaveCheckTimes').addEventListener('click', adminSaveCheckTimes); ['adminAutoS1In','adminAutoS1Out','adminAutoS2In','adminAutoS2Out','adminAutoS3In','adminAutoS3Out'].forEach(id=>{ if($(id)) $(id).addEventListener('input', e=>{ e.target.dataset.userEdited='1'; setAdminCheckTimesSourceInfo('Manual'); }); }); if($('btnAdminApplyAutoCheckTimes')) $('btnAdminApplyAutoCheckTimes').addEventListener('click', adminApplyAutoCheckTimes); if($('btnAdminCheckInOutSummary')) $('btnAdminCheckInOutSummary').addEventListener('click', adminCheckInOutSummary); if($('btnAdminUseCheckSummary')) $('btnAdminUseCheckSummary').addEventListener('click', adminUseCheckSummaryToForm); if($('btnAdminUseCheckSummaryReport')) $('btnAdminUseCheckSummaryReport').addEventListener('click', adminUseCheckSummaryToForm); if($('btnAdminRefresh')) $('btnAdminRefresh').addEventListener('click', renderAdminDashboard); if($('btnAdminSyncPending')) $('btnAdminSyncPending').addEventListener('click', async()=>{ const res=await syncPendingAttendanceOnline(); await renderAdminDashboard(); await renderAdminSyncStatus(false); adminLog(`Sinkron data pending selesai diproses. Berhasil: ${res && res.success !== undefined ? res.success : 0}, gagal: ${res && res.failed !== undefined ? res.failed : 0}.`); }); if($('btnAdminRefreshSyncStatus')) $('btnAdminRefreshSyncStatus').addEventListener('click', ()=>renderAdminSyncStatus()); if($('btnAdminRefreshFirestoreUsage')) $('btnAdminRefreshFirestoreUsage').addEventListener('click', refreshFirestoreUsageEstimate); if($('btnAdminSyncAllPending')) $('btnAdminSyncAllPending').addEventListener('click', async()=>{ const res=await syncPendingAttendanceOnline(); await renderAdminSyncStatus(false); adminLog(`Sync semua pending selesai. Berhasil: ${res && res.success !== undefined ? res.success : 0}, gagal: ${res && res.failed !== undefined ? res.failed : 0}.`); }); if($('btnAdminPanelImportWorkers')) $('btnAdminPanelImportWorkers').addEventListener('click', ()=>importWorkersFromExcel('panel')); if($('adminPanelImportFile')) $('adminPanelImportFile').addEventListener('change', e=>{ const file=e.target.files && e.target.files[0]; if($('adminPanelImportFileName')) $('adminPanelImportFileName').textContent=file ? `File dipilih: ${file.name}` : 'Belum ada file dipilih.'; }); if($('btnAdminTemplate')) $('btnAdminTemplate').addEventListener('click', downloadImportTemplate); if($('adminGlobalCheckFile')) $('adminGlobalCheckFile').addEventListener('change', e=>{ lastMachineImportPreviewResult=null; lastCheckInOutSummaryResult=null; renderCheckInOutSummary(null); const file=e.target.files && e.target.files[0]; if($('adminGlobalCheckFileName')) $('adminGlobalCheckFileName').textContent=file ? `File dipilih: ${file.name}` : 'Belum ada file dipilih.'; }); if($('adminGlobalCheckDate')) $('adminGlobalCheckDate').addEventListener('change', ()=>{ lastMachineImportPreviewResult=null; lastCheckInOutSummaryResult=null; renderCheckInOutSummary(null); updateGlobalCheckInfo(); }); if($('adminCheckSummaryUnitSelect')) $('adminCheckSummaryUnitSelect').addEventListener('change', ()=>{ lastCheckInOutSummaryResult=null; renderCheckInOutSummary(null); }); if($('btnAdminPreviewMachineImport')) $('btnAdminPreviewMachineImport').addEventListener('click', adminPreviewMachineImport); if($('btnAdminPreviewAllSchedules')) $('btnAdminPreviewAllSchedules').addEventListener('click', adminPreviewAllSchedules); if($('btnAdminImportMachinePreview')) $('btnAdminImportMachinePreview').addEventListener('click', adminImportMachinePreviewToCheckTimes); if($('btnAdminImportGlobalCheckTimes')) $('btnAdminImportGlobalCheckTimes').addEventListener('click', adminImportGlobalCheckTimes); if($('btnAdminClearGlobalCheckTimes')) $('btnAdminClearGlobalCheckTimes').addEventListener('click', adminClearGlobalCheckTimes); if($('btnAdminRefreshCheckImportHistory')) $('btnAdminRefreshCheckImportHistory').addEventListener('click', ()=>renderGlobalCheckImportHistory(true)); if($('btnSaveReportFormat')) $('btnSaveReportFormat').addEventListener('click', adminSaveReportFormat); if($('adminCoordinatorSelect')) $('adminCoordinatorSelect').addEventListener('change', renderCoordinatorSettingForm); if($('btnAdminResetCoordinatorForm')) $('btnAdminResetCoordinatorForm').addEventListener('click', renderCoordinatorSettingForm); if($('btnAdminSaveCoordinator')) $('btnAdminSaveCoordinator').addEventListener('click', saveCoordinatorSetting); if($('btnAdminDeleteCoordinator')) $('btnAdminDeleteCoordinator').addEventListener('click', deleteCoordinatorSetting); if($('btnAdminResetAdminAccountForm')) $('btnAdminResetAdminAccountForm').addEventListener('click', renderAdminAccountForm); if($('btnAdminSaveAdminAccount')) $('btnAdminSaveAdminAccount').addEventListener('click', saveAdminAccountSetting); if($('btnAdminClearWorkers')) $('btnAdminClearWorkers').addEventListener('click', adminClearWorkers); if($('btnAdminDeleteAttendance')) $('btnAdminDeleteAttendance').addEventListener('click', adminDeleteAttendance); if($('adminWorkerUnitSelect')) $('adminWorkerUnitSelect').addEventListener('change', ()=>{ adminWorkerClearForm(); renderAdminWorkerCrud(); }); if($('adminWorkerStatus')) $('adminWorkerStatus').addEventListener('change', renderAdminWorkerCrud); if($('adminWorkerSearch')) $('adminWorkerSearch').addEventListener('input', renderAdminWorkerCrud); if($('btnAdminSaveWorker')) $('btnAdminSaveWorker').addEventListener('click', adminSaveWorkerCrud); if($('btnAdminResetWorkerForm')) $('btnAdminResetWorkerForm').addEventListener('click', adminWorkerClearForm); if($('adminWorkerCrudRegu')) $('adminWorkerCrudRegu').addEventListener('change', e=>{ e.target.value=normalizeRegu(e.target.value); renderAdminWorkerCrud(); }); if($('btnAdminAddDock')) $('btnAdminAddDock').addEventListener('click', adminAddDock); if($('btnAdminResetDock')) $('btnAdminResetDock').addEventListener('click', adminResetDocks); if($('btnAdminPreviewBackup')) $('btnAdminPreviewBackup').addEventListener('click', adminPreviewBackup); if($('btnAdminExportBackupJson')) $('btnAdminExportBackupJson').addEventListener('click', adminExportBackupJson); if($('btnAdminExportBackupExcel')) $('btnAdminExportBackupExcel').addEventListener('click', adminExportBackupExcel); if($('btnAdminBackupToday')) $('btnAdminBackupToday').addEventListener('click', adminBackupToday);
document.addEventListener('input', e=>{ if(e && e.target && e.target.matches && e.target.matches('[data-check-nip]')) setAdminCheckTimesSourceInfo('Manual'); });
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
    if(isAdmin()) await refreshAccountsFromFirestore(true);
    await refreshAdminAttendanceOptionsFromFirestore(true);
    initAdminTools();
    await loadState();
    await renderAll();
    await refreshScheduleActiveDateStatus(scheduleDateSelected(), {silent:true});
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
</script>
</body>
</html>