// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Bentenipun Barcode 1D lan 2D: Pundi ingkang Panjenengan Betahaken?",
  desc: "Barcode garis lan QR Code sami-sami barcode, nanging ginanipun benten. Bandhingaken kapasitas, cara mindai, lan tuladha panganggenipun.",
  tags: ["Dhasar", "Barcode"],
  coverCaption: "Pemindai genggam ing gudhang maos barcode 1D lan 2D.",
  inlineCaption: "Label pangiriman limrahipun ngginakaken barcode garis.",
  faq: [
    ["Menapa pemindai kasir saged maos QR Code?", "Mboten sedaya. Pemindai laser 1D namung maos barcode garis. Kangge QR Code dipunbetahaken pemindai 2D ingkang adhedhasar kamera utawi kamera HP."],
    ["Barcode pundi ingkang paling alit?", "Data Matrix kalebet barcode 2D ingkang saged dipuncithak alit sanget, satemah asring dipunginakaken ing komponen elektronik, piranti kasarasan, lan label obat."],
    ["Menapa kenging ngginakaken QR Code minangka gantosipun EAN-13 ing produk ritel?", "Kangge dipunsade ing toko ritel, produk tetep mbetahaken EAN-13 utawi UPC ingkang kadaftar. QR Code saged dipuntambahaken ing bungkus minangka pelengkap, tuladhanipun kangge informasi produk utawi promosi."]
  ],
  body: `
<p>Nalika ndamel barcode, pitakenan kapisan ingkang limrahipun medal inggih menika: ngginakaken barcode garis utawi QR Code? Kalihipun dipunwastani barcode, nanging cara nyimpen datanipun benten satemah ginanipun ugi benten.</p>

<h2>Barcode 1D (linear)</h2>
<p>Barcode 1D inggih menika barcode ingkang awujud garis-garis vertikal. Data dipunsimpen ing setunggal arah, inggih menika saking kiwa dhateng tengen. Tuladha ingkang paling misuwur inggih menika <a href="/?type=ean13">EAN-13</a> ing bungkus produk lan <a href="/?type=code128">Code 128</a> ing label pangiriman.</p>
<ul>
  <li>Kapasitasipun alit, limrahipun sawetawis ngantos puluhan karakter.</li>
  <li>Saged dipunwaos pemindai laser kasir ingkang mirah lan cepet sanget.</li>
  <li>Cocog kangge kode produk, nomer seri, lan nomer resi.</li>
</ul>

<h2>Barcode 2D</h2>
<p>Barcode 2D nyimpen data ing kalih arah, mangiwa-manengen lan mangandhap, satemah saged ngemot langkung kathah. Tuladhanipun <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, lan <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Kapasitasipun ageng, wiwit puluhan ngantos ewonan karakter.</li>
  <li>Saged dipunpindai kamera HP saking maneka arah.</li>
  <li>Gadhah koreksi kalepatan, dados taksih saged dipunwaos senajan sapérangan risak.</li>
  <li>Saged dipundamel alit sanget, tuladhanipun Data Matrix ing komponen elektronik.</li>
</ul>

<h2>Pambandhing cekak</h2>
<table>
  <thead><tr><th></th><th>Barcode 1D</th><th>Barcode 2D</th></tr></thead>
  <tbody>
    <tr><td>Wujud</td><td>Garis vertikal</td><td>Kothak/titik ing salebeting persegi</td></tr>
    <tr><td>Kapasitas</td><td>Alit</td><td>Ageng</td></tr>
    <tr><td>Piranti pindai</td><td>Pemindai laser utawi kamera</td><td>Kamera utawi pemindai 2D</td></tr>
    <tr><td>Tahan risak</td><td>Winates</td><td>Wonten koreksi kalepatan</td></tr>
    <tr><td>Tuladha</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kapan ngginakaken ingkang pundi?</h2>
<ul>
  <li><strong>Produk ingkang dipunsade ing toko utawi minimarket</strong>: ginakaken EAN-13 resmi saking GS1. Pirsani <a href="/artikel/cara-mendapatkan-barcode-ean-13">cara pikantuk barcode EAN-13</a>.</li>
  <li><strong>Label gudhang, rak, utawi pangiriman</strong>: Code 128 menika pilihan ingkang umum amargi padhet lan ndhukung aksara sarta angka.</li>
  <li><strong>Link, menu, WiFi, utawi kontak kangge pelanggan</strong>: QR Code, amargi saged dipunpindai langsung ngginakaken kamera HP.</li>
  <li><strong>Label ingkang alit sanget</strong>: Data Matrix.</li>
  <li><strong>Kartu identitas, tiket montor mabur, utawi dokumen</strong>: PDF417 utawi Aztec.</li>
</ul>
<p>Sedaya jinis ing nginggil saged panjenengan damel gratis ing <a href="/">I Need Barcode</a>. Menawi taksih mangu-mangu, wiwitana kanthi QR Code kangge kabetahan pelanggan lan Code 128 kangge kabetahan internal.</p>
`
};
