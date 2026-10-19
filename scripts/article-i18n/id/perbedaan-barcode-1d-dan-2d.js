// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Perbedaan Barcode 1D dan 2D: Mana yang Anda Butuhkan?",
  desc: "Barcode garis dan QR Code sama-sama barcode, tetapi kegunaannya berbeda. Bandingkan kapasitas, cara pindai, dan contoh penggunaannya.",
  tags: ["Dasar", "Barcode"],
  coverCaption: "Pemindai genggam di gudang membaca barcode 1D dan 2D.",
  inlineCaption: "Label pengiriman biasanya memakai barcode garis.",
  faq: [
    ["Apakah pemindai kasir bisa membaca QR Code?", "Tidak semua. Pemindai laser 1D hanya membaca barcode garis. Untuk QR Code dibutuhkan pemindai 2D berbasis kamera atau kamera ponsel."],
    ["Barcode mana yang paling kecil?", "Data Matrix termasuk barcode 2D yang bisa dicetak sangat kecil, sehingga sering dipakai pada komponen elektronik, alat kesehatan, dan label obat."],
    ["Bolehkah memakai QR Code sebagai pengganti EAN-13 di produk ritel?", "Untuk dijual di toko ritel, produk tetap memerlukan EAN-13 atau UPC yang terdaftar. QR Code bisa ditambahkan di kemasan sebagai pelengkap, misalnya untuk informasi produk atau promosi."]
  ],
  body: `
<p>Saat membuat barcode, pertanyaan pertama yang biasanya muncul adalah: pakai barcode garis atau QR Code? Keduanya disebut barcode, tetapi cara menyimpan datanya berbeda sehingga kegunaannya pun berbeda.</p>

<h2>Barcode 1D (linear)</h2>
<p>Barcode 1D adalah barcode berupa garis-garis vertikal. Data disimpan dalam satu arah, yaitu dari kiri ke kanan. Contoh yang paling dikenal adalah <a href="/?type=ean13">EAN-13</a> di kemasan produk dan <a href="/?type=code128">Code 128</a> di label pengiriman.</p>
<ul>
  <li>Kapasitas kecil, biasanya belasan hingga puluhan karakter.</li>
  <li>Bisa dibaca pemindai laser kasir yang murah dan sangat cepat.</li>
  <li>Cocok untuk kode produk, nomor seri, dan nomor resi.</li>
</ul>

<h2>Barcode 2D</h2>
<p>Barcode 2D menyimpan data dalam dua arah, ke samping dan ke bawah, sehingga muat jauh lebih banyak. Contohnya <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, dan <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Kapasitas besar, dari puluhan hingga ribuan karakter.</li>
  <li>Bisa dipindai kamera ponsel dari berbagai arah.</li>
  <li>Punya koreksi kesalahan, jadi tetap terbaca walau sebagian rusak.</li>
  <li>Bisa dibuat sangat kecil, misalnya Data Matrix pada komponen elektronik.</li>
</ul>

<h2>Perbandingan singkat</h2>
<table>
  <thead><tr><th></th><th>Barcode 1D</th><th>Barcode 2D</th></tr></thead>
  <tbody>
    <tr><td>Bentuk</td><td>Garis vertikal</td><td>Kotak/titik dalam persegi</td></tr>
    <tr><td>Kapasitas</td><td>Kecil</td><td>Besar</td></tr>
    <tr><td>Alat pindai</td><td>Pemindai laser atau kamera</td><td>Kamera atau pemindai 2D</td></tr>
    <tr><td>Tahan rusak</td><td>Terbatas</td><td>Ada koreksi kesalahan</td></tr>
    <tr><td>Contoh</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kapan memakai yang mana?</h2>
<ul>
  <li><strong>Produk yang dijual di toko atau minimarket</strong>: gunakan EAN-13 resmi dari GS1. Lihat <a href="/artikel/cara-mendapatkan-barcode-ean-13">cara mendapatkan barcode EAN-13</a>.</li>
  <li><strong>Label gudang, rak, atau pengiriman</strong>: Code 128 adalah pilihan umum karena padat dan mendukung huruf serta angka.</li>
  <li><strong>Link, menu, WiFi, atau kontak untuk pelanggan</strong>: QR Code, karena bisa dipindai langsung dengan kamera ponsel.</li>
  <li><strong>Label sangat kecil</strong>: Data Matrix.</li>
  <li><strong>Kartu identitas, tiket pesawat, atau dokumen</strong>: PDF417 atau Aztec.</li>
</ul>
<p>Semua jenis di atas bisa Anda buat gratis di <a href="/">I Need Barcode</a>. Jika masih ragu, mulailah dengan QR Code untuk kebutuhan pelanggan dan Code 128 untuk kebutuhan internal.</p>
`
};
