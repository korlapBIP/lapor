(function(){
  function esc(value){
    return String(value ?? '').replace(/[&<>"']/g, function(ch){
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[ch];
    });
  }
  function tick(show){
    return show ? '<span class="tick">✓</span>' : '';
  }
  function normalizeDateText(payload){
    if(payload && payload.dateText) return String(payload.dateText);
    return 'HARI - TANGGAL';
  }
  function defaultSettings(unitName){
    const unit = unitName || 'Muatan Breeder';
    return {
      signBip:'B I P',
      signGudang:'Bagian Gudang',
      signKasie:'Kasie ' + unit,
      signPga:'Bagian P&GA',
      note:'',
      workTitle:'JAM KERJA CEK IN dan CEK OUT',
      shiftPagiLabel:'SHIFT 1',
      shiftPagiIn:'07.00',
      shiftPagiOut:'17.00',
      shiftSiangLabel:'SHIFT 2',
      shiftSiangIn:'17.00',
      shiftSiangOut:'23.00',
      shiftMalamLabel:'SHIFT 3',
      shiftMalamIn:'23.00',
      shiftMalamOut:'07.00'
    };
  }
  function normalizeLdReguText(value){
    return String(value || '')
      .trim()
      .replace(/\s+-\s+/g, '-')
      .replace(/^(LD\s*\d+)\s+Regu/ig, '$1-Regu')
      .replace(/-\s*Regu/ig, '-Regu')
      .replace(/Regu\s+/ig, 'Regu ');
  }
  function isCommercialTfActivityRow(row){
    const key = String((row && row.activityKey) || '').toLowerCase();
    const label = String((row && (row.ldRegu || row.activityLabel || row.unit || row.bagian)) || '').toLowerCase();
    return key === 'stapel_tf' || key === 'malleti_tf' || label.includes('stapel') || label.includes('malleti') || label.includes('mallet');
  }
  function bahanBakuKegiatanLabel(row){
    const key = String((row && (row.kegiatan || row.activityLabel || row.sourceUnitKey || row.sourceUnitName)) || '').toLowerCase();
    if(key.includes('overzak')) return 'Overzak';
    return 'Bongkaran';
  }

  function render(){
    const raw = sessionStorage.getItem('BIP_PRINT_ABSENSI_PAYLOAD');
    const sheet = document.getElementById('sheet');
    if(!raw){
      sheet.innerHTML = '<div class="empty-message">Data laporan print belum tersedia. Kembali ke aplikasi lalu klik tombol Print lagi.</div>';
      return;
    }

    let payload;
    try{ payload = JSON.parse(raw); }catch(err){ payload = null; }
    if(!payload || !Array.isArray(payload.rows) || !payload.rows.length){
      sheet.innerHTML = '<div class="empty-message">Data laporan print kosong. Kembali ke aplikasi lalu tampilkan data absensi terlebih dahulu.</div>';
      return;
    }

    const settings = Object.assign(defaultSettings(payload.unitName), payload.settings || {});
    if(String(settings.shiftPagiLabel||'').toUpperCase()==='PAGI') settings.shiftPagiLabel='SHIFT 1';
    if(String(settings.shiftSiangLabel||'').toUpperCase()==='SIANG') settings.shiftSiangLabel='SHIFT 2';
    if(!settings.shiftMalamLabel) settings.shiftMalamLabel='SHIFT 3';
    if(!settings.shiftMalamIn) settings.shiftMalamIn='23.00';
    if(!settings.shiftMalamOut) settings.shiftMalamOut='07.00';
    if(String(settings.workTitle||'').toUpperCase().startsWith('JAM KERJA ')) settings.workTitle='JAM KERJA CEK IN dan CEK OUT';
    const rows = payload.rows;
    const isCommercialReport = String(payload.title || '').toUpperCase().includes('MUATAN COMMERCIAL') || rows.some(r => r && (r.ldRegu || r.loadingDock || r.regu));
    const isBahanBakuReport = !isCommercialReport && String(payload.title || '').toUpperCase().includes('BONGKARAN BAHAN BAKU');
    function ldReguText(row){
      const direct = normalizeLdReguText(row.ldRegu || '');
      if(direct) return direct;
      const ld = String(row.loadingDock || '').trim();
      const regu = String(row.regu || '').trim();
      if(ld && regu) return normalizeLdReguText(`LD ${ld.replace(/^LD\s*/i,'')}-Regu ${regu.replace(/^Regu\s*/i,'')}`);
      if(ld) return normalizeLdReguText(ld);
      if(regu) return `Regu ${regu.replace(/^Regu\s*/i,'')}`;
      return '';
    }
    const sumS1 = rows.filter(r=>!!r.s1).length;
    const sumS2 = rows.filter(r=>!!r.s2).length;
    const sumS3 = rows.filter(r=>!!r.s3).length;
    const total = rows.length;

    const bodyRows = rows.map((r,idx)=> isCommercialReport ? `
      <tr>
        <td>${idx+1}</td>
        <td>${esc(ldReguText(r))}</td>
        <td>${esc(r.nip)}</td>
        <td class="name">${esc(r.name)}</td>
        <td class="shift-col">${tick(r.s1)}</td>
        <td class="shift-col">${tick(r.s2)}</td>
        <td class="shift-col">${tick(r.s3)}</td>
        <td><span class="check-text">${isCommercialTfActivityRow(r) ? '' : esc(r.checkIn || '')}</span></td>
        <td><span class="check-text">${isCommercialTfActivityRow(r) ? '' : esc(r.checkOut || '')}</span></td>
      </tr>
    ` : (isBahanBakuReport ? `
      <tr>
        <td>${idx+1}</td>
        <td>${esc(r.nip)}</td>
        <td>${esc(bahanBakuKegiatanLabel(r))}</td>
        <td class="name">${esc(r.name)}</td>
        <td class="shift-col">${tick(r.s1)}</td>
        <td class="shift-col">${tick(r.s2)}</td>
        <td class="shift-col">${tick(r.s3)}</td>
        <td><span class="check-text">${esc(r.checkIn || '')}</span></td>
        <td><span class="check-text">${esc(r.checkOut || '')}</span></td>
      </tr>
    ` : `
      <tr>
        <td>${idx+1}</td>
        <td>${esc(r.nip)}</td>
        <td class="name">${esc(r.name)}</td>
        <td class="shift-col">${tick(r.s1)}</td>
        <td class="shift-col">${tick(r.s2)}</td>
        <td class="shift-col">${tick(r.s3)}</td>
        <td><span class="check-text">${esc(r.checkIn || '')}</span></td>
        <td><span class="check-text">${esc(r.checkOut || '')}</span></td>
      </tr>
    `)).join('');

    const tableClass = isCommercialReport ? 'report-table commercial' : (isBahanBakuReport ? 'report-table bahan-baku' : 'report-table');
    const tableHeader = isCommercialReport
      ? '<tr><th>NO</th><th>LD-Regu</th><th>NIP</th><th>NAMA PEKERJA</th><th class="shift-col">SHIFT 1</th><th class="shift-col">SHIFT 2</th><th class="shift-col">SHIFT 3</th><th>CEK IN</th><th>CEK OUT</th></tr>'
      : (isBahanBakuReport ? '<tr><th>NO</th><th>NIP</th><th>KEGIATAN</th><th>NAMA</th><th class="shift-col">SHIFT 1</th><th class="shift-col">SHIFT 2</th><th class="shift-col">SHIFT 3</th><th>CEK IN</th><th>CEK OUT</th></tr>' : '<tr><th>NO</th><th>NIP</th><th>NAMA</th><th class="shift-col">SHIFT 1</th><th class="shift-col">SHIFT 2</th><th class="shift-col">SHIFT 3</th><th>CEK IN</th><th>CEK OUT</th></tr>');
    const tableFooter = (isCommercialReport || isBahanBakuReport) ? `
            <tr class="report-summary">
              <td class="summary-empty" colspan="4"></td>
              <th class="shift-col">SHIFT 1</th>
              <th class="shift-col">SHIFT 2</th>
              <th class="shift-col">SHIFT 3</th>
              <td class="summary-empty" colspan="2"></td>
            </tr>
            <tr class="report-summary">
              <td class="left-label" colspan="4">JUMLAH PEKERJA</td>
              <td>${sumS1}</td>
              <td>${sumS2}</td>
              <td>${sumS3}</td>
              <td class="summary-empty" colspan="2"></td>
            </tr>
            <tr class="report-summary">
              <td class="summary-empty" colspan="4"></td>
              <td class="total" colspan="3">${total} Orang</td>
              <td class="summary-empty" colspan="2"></td>
            </tr>` : `
            <tr class="report-summary">
              <td class="summary-empty" colspan="3"></td>
              <th class="shift-col">SHIFT 1</th>
              <th class="shift-col">SHIFT 2</th>
              <th class="shift-col">SHIFT 3</th>
              <td class="summary-empty" colspan="2"></td>
            </tr>
            <tr class="report-summary">
              <td class="left-label" colspan="3">JUMLAH PEKERJA</td>
              <td>${sumS1}</td>
              <td>${sumS2}</td>
              <td>${sumS3}</td>
              <td class="summary-empty" colspan="2"></td>
            </tr>
            <tr class="report-summary">
              <td class="summary-empty" colspan="3"></td>
              <td class="total" colspan="3">${total} Orang</td>
              <td class="summary-empty" colspan="2"></td>
            </tr>`;

    sheet.innerHTML = `
      <section class="print-title">
        <div class="main">${esc(payload.title || 'ABSENSI KEGIATAN MUATAN BREEDER')}</div>
        <div class="company">${esc(payload.company || 'PT. BUDI INTI PERKASA')}</div>
        <div class="date">${esc(normalizeDateText(payload))}</div>
      </section>
      <div class="table-wrap">
        <table class="${tableClass}">
          <thead>${tableHeader}</thead>
          <tbody>${bodyRows}${tableFooter}</tbody>
        </table>
      </div>
      <section class="report-footer">
        <div class="signature-grid">
          <div><div class="signature-title">${esc(settings.signBip)}</div><div class="signature-line"></div></div>
          <div><div class="signature-title">${esc(settings.signGudang)}</div><div class="signature-line"></div></div>
          <div><div class="signature-title">${esc(settings.signKasie)}</div><div class="signature-line"></div></div>
          <div><div class="signature-title">${esc(settings.signPga)}</div><div class="signature-line"></div></div>
        </div>
        <div class="note-area">
          <div class="note-title">NOTE :</div>
          <div class="note-content">${esc(settings.note)}</div>
          <table class="worktime-table">
            <tr><th colspan="3" class="worktime-main">ABSENSI SIDIK JARI<br><span>${esc(settings.workTitle)}</span></th></tr>
            <tr><th>JADWAL</th><th colspan="2">JAM KERJA</th></tr>
            <tr><th>KERJA</th><th>CEK IN</th><th>CEK OUT</th></tr>
            <tr><td>${esc(settings.shiftPagiLabel)}</td><td>${esc(settings.shiftPagiIn)}</td><td>${esc(settings.shiftPagiOut)}</td></tr>
            <tr><td>${esc(settings.shiftSiangLabel)}</td><td>${esc(settings.shiftSiangIn)}</td><td>${esc(settings.shiftSiangOut)}</td></tr>
            <tr><td>${esc(settings.shiftMalamLabel)}</td><td>${esc(settings.shiftMalamIn)}</td><td>${esc(settings.shiftMalamOut)}</td></tr>
          </table>
        </div>
      </section>
    `;
  }
  render();
})();
