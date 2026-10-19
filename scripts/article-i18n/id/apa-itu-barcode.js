// apa-itu-barcode
module.exports = {
  title: "Apa Itu Barcode? Pengertian, Cara Kerja, dan Jenisnya",
  desc: "Barcode ada di hampir semua produk yang Anda beli. Kenali cara kerjanya, sejarah singkatnya, dan jenis-jenis barcode yang paling sering dipakai.",
  tags: ["Dasar", "Barcode"],
  coverCaption: "Barcode pada kemasan menyimpan kode unik produk.",
  inlineCaption: "Kasir memakai pemindai untuk membaca barcode dalam sekejap.",
  faq: [
    ["Apa bedanya barcode dan QR Code?", "QR Code adalah salah satu jenis barcode, yaitu barcode 2D. Barcode garis (1D) hanya menyimpan sedikit karakter dan dibaca dari kiri ke kanan, sedangkan QR Code menyimpan data ke dua arah sehingga muat link, teks, atau data WiFi."],
    ["Apakah barcode menyimpan harga produk?", "Biasanya tidak. Barcode produk hanya berisi kode. Harga dan nama produk disimpan di sistem kasir, lalu dicari berdasarkan kode yang dipindai."],
    ["Apakah membuat barcode harus berbayar?", "Tidak. Gambar barcode bisa dibuat gratis, misalnya di I Need Barcode. Yang perlu didaftarkan berbayar hanyalah nomor resmi untuk barcode produk ritel seperti EAN-13 melalui GS1."]
  ],
  body: `
<p>Barcode adalah cara menuliskan data dalam bentuk pola yang bisa dibaca mesin. Pola itu biasanya berupa garis hitam dan putih dengan lebar berbeda, atau kotak-kotak kecil yang tersusun dalam sebuah persegi. Saat dipindai, pola tersebut diterjemahkan kembali menjadi angka atau teks, misalnya kode produk, nomor resi, atau alamat situs.</p>
<p>Karena dibaca mesin, barcode jauh lebih cepat dan minim salah dibanding mengetik kode secara manual. Itulah sebabnya barcode dipakai di kasir, gudang, rumah sakit, tiket, hingga kemasan makanan.</p>

<h2>Sejarah singkat barcode</h2>
<p>Ide barcode dipatenkan pada 1952 oleh Norman Joseph Woodland dan Bernard Silver di Amerika Serikat. Barcode baru benar-benar dipakai di toko pada 1974, ketika sebungkus permen karet dipindai di sebuah supermarket di Ohio dengan kode UPC. Sejak itu, barcode menyebar ke seluruh dunia dan kini dikelola secara global oleh organisasi standar bernama GS1.</p>

<h2>Bagaimana barcode bekerja?</h2>
<p>Pemindai menyinari barcode lalu membaca pantulannya. Bagian gelap memantulkan sedikit cahaya, bagian terang memantulkan banyak. Perbedaan itu diubah menjadi rangkaian angka 0 dan 1, lalu dicocokkan dengan aturan jenis barcode tersebut. Banyak barcode juga punya <strong>digit pemeriksa</strong> (check digit), yaitu angka terakhir yang dihitung dari angka-angka sebelumnya. Jika hasil hitungannya tidak cocok, pemindai tahu ada yang salah dan menolak hasilnya.</p>
<p>Barcode sendiri biasanya hanya menyimpan kode. Informasi seperti nama produk atau harga disimpan di sistem kasir atau database, lalu dicari berdasarkan kode tersebut.</p>

<h2>Jenis-jenis barcode yang sering dipakai</h2>
<p>Secara umum barcode terbagi menjadi dua kelompok besar:</p>
<ul>
  <li><strong>Barcode 1D (linear)</strong>: berupa garis-garis vertikal yang dibaca dari kiri ke kanan. Contohnya <a href="/?type=ean13">EAN-13</a> dan <a href="/?type=upca">UPC-A</a> untuk produk ritel, serta <a href="/?type=code128">Code 128</a> dan <a href="/?type=code39">Code 39</a> untuk logistik dan gudang.</li>
  <li><strong>Barcode 2D</strong>: berupa pola kotak yang menyimpan data ke dua arah, sehingga muat jauh lebih banyak. Contohnya <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, dan <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Selain itu ada barcode khusus untuk pos dan pengiriman, kesehatan, serta standar GS1 untuk rantai pasok. Penjelasan lebih rinci tentang perbedaannya bisa Anda baca di artikel <a href="/artikel/perbedaan-barcode-1d-dan-2d">Perbedaan Barcode 1D dan 2D</a>.</p>

<h2>Barcode untuk apa saja?</h2>
<ul>
  <li><strong>Ritel</strong>: mempercepat kasir dan mencatat stok secara otomatis.</li>
  <li><strong>Gudang dan pengiriman</strong>: melacak barang dan paket dari satu tempat ke tempat lain.</li>
  <li><strong>Tiket dan acara</strong>: memeriksa keaslian tiket dengan sekali pindai.</li>
  <li><strong>Pemasaran</strong>: QR Code di brosur atau kemasan membawa orang langsung ke situs, menu, atau WhatsApp Anda.</li>
</ul>

<h2>Membuat barcode sendiri</h2>
<p>Anda tidak perlu aplikasi berbayar untuk membuat barcode. Di <a href="/">I Need Barcode</a>, pilih jenis barcode, isi datanya, lalu unduh sebagai gambar PNG. Ada lebih dari 100 jenis yang bisa dipilih, dan semuanya gratis tanpa daftar.</p>
`
};
