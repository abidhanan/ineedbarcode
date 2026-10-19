// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Perbezaan Kod Bar 1D dan 2D: Yang Mana Anda Perlukan?",
  desc: "Kod bar garis dan QR Code kedua-duanya ialah kod bar, tetapi kegunaannya berbeza. Bandingkan kapasiti, cara imbasan dan contoh penggunaannya.",
  tags: ["Asas", "Kod Bar"],
  coverCaption: "Pengimbas pegang tangan di gudang membaca kod bar 1D dan 2D.",
  inlineCaption: "Label penghantaran biasanya menggunakan kod bar garis.",
  faq: [
    ["Bolehkah pengimbas juruwang membaca QR Code?", "Tidak semua. Pengimbas laser 1D hanya membaca kod bar garis. Untuk QR Code, diperlukan pengimbas 2D berasaskan kamera atau kamera telefon."],
    ["Kod bar manakah yang paling kecil?", "Data Matrix ialah kod bar 2D yang boleh dicetak dalam saiz yang sangat kecil, jadi ia sering digunakan pada komponen elektronik, peralatan perubatan dan label ubat."],
    ["Bolehkah saya menggunakan QR Code sebagai pengganti EAN-13 pada produk runcit?", "Untuk dijual di kedai runcit, produk tetap memerlukan EAN-13 atau UPC yang berdaftar. QR Code boleh ditambah pada pembungkusan sebagai pelengkap, contohnya untuk maklumat produk atau promosi."]
  ],
  body: `
<p>Semasa membuat kod bar, soalan pertama yang biasanya timbul ialah: guna kod bar garis atau QR Code? Kedua-duanya dipanggil kod bar, tetapi cara menyimpan datanya berbeza, jadi kegunaannya juga berbeza.</p>

<h2>Kod bar 1D (linear)</h2>
<p>Kod bar 1D ialah kod bar yang berupa garisan menegak. Data disimpan dalam satu arah, iaitu dari kiri ke kanan. Contoh yang paling dikenali ialah <a href="/?type=ean13">EAN-13</a> pada pembungkusan produk dan <a href="/?type=code128">Code 128</a> pada label penghantaran.</p>
<ul>
  <li>Kapasiti kecil, biasanya belasan hingga puluhan aksara.</li>
  <li>Boleh dibaca oleh pengimbas laser juruwang yang murah dan sangat pantas.</li>
  <li>Sesuai untuk kod produk, nombor siri dan nombor penjejakan.</li>
</ul>

<h2>Kod bar 2D</h2>
<p>Kod bar 2D menyimpan data dalam dua arah, ke sisi dan ke bawah, jadi ia boleh memuatkan jauh lebih banyak data. Contohnya <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> dan <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Kapasiti besar, daripada puluhan hingga ribuan aksara.</li>
  <li>Boleh diimbas oleh kamera telefon dari pelbagai arah.</li>
  <li>Mempunyai pembetulan ralat, jadi masih boleh dibaca walaupun sebahagiannya rosak.</li>
  <li>Boleh dibuat sangat kecil, contohnya Data Matrix pada komponen elektronik.</li>
</ul>

<h2>Perbandingan ringkas</h2>
<table>
  <thead><tr><th></th><th>Kod Bar 1D</th><th>Kod Bar 2D</th></tr></thead>
  <tbody>
    <tr><td>Bentuk</td><td>Garisan menegak</td><td>Petak/titik dalam segi empat sama</td></tr>
    <tr><td>Kapasiti</td><td>Kecil</td><td>Besar</td></tr>
    <tr><td>Alat imbasan</td><td>Pengimbas laser atau kamera</td><td>Kamera atau pengimbas 2D</td></tr>
    <tr><td>Ketahanan terhadap kerosakan</td><td>Terhad</td><td>Ada pembetulan ralat</td></tr>
    <tr><td>Contoh</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Bilakah hendak menggunakan yang mana?</h2>
<ul>
  <li><strong>Produk yang dijual di kedai atau kedai serbaneka</strong>: gunakan EAN-13 rasmi daripada GS1. Lihat <a href="/artikel/cara-mendapatkan-barcode-ean-13">cara mendapatkan kod bar EAN-13</a>.</li>
  <li><strong>Label gudang, rak atau penghantaran</strong>: Code 128 ialah pilihan biasa kerana padat dan menyokong huruf serta nombor.</li>
  <li><strong>Pautan, menu, WiFi atau kenalan untuk pelanggan</strong>: QR Code, kerana boleh diimbas terus dengan kamera telefon.</li>
  <li><strong>Label yang sangat kecil</strong>: Data Matrix.</li>
  <li><strong>Kad pengenalan, pas masuk pesawat atau dokumen</strong>: PDF417 atau Aztec.</li>
</ul>
<p>Semua jenis di atas boleh anda buat secara percuma di <a href="/">I Need Barcode</a>. Jika masih ragu-ragu, mulakan dengan QR Code untuk keperluan pelanggan dan Code 128 untuk keperluan dalaman.</p>
`
};
