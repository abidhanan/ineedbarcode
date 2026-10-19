// apa-itu-barcode
module.exports = {
  title: "Apakah Itu Kod Bar? Definisi, Cara Ia Berfungsi dan Jenisnya",
  desc: "Kod bar terdapat pada hampir semua produk yang anda beli. Kenali cara ia berfungsi, sejarah ringkasnya dan jenis kod bar yang paling kerap digunakan.",
  tags: ["Asas", "Kod Bar"],
  coverCaption: "Kod bar pada pembungkusan menyimpan kod unik produk.",
  inlineCaption: "Juruwang menggunakan pengimbas untuk membaca kod bar dalam sekelip mata.",
  faq: [
    ["Apakah perbezaan antara kod bar dan QR Code?", "QR Code ialah salah satu jenis kod bar, iaitu kod bar 2D. Kod bar garis (1D) hanya menyimpan sedikit aksara dan dibaca dari kiri ke kanan, manakala QR Code menyimpan data dalam dua arah supaya muat pautan, teks atau maklumat WiFi."],
    ["Adakah kod bar menyimpan harga produk?", "Biasanya tidak. Kod bar produk hanya mengandungi kod. Harga dan nama produk disimpan dalam sistem juruwang, kemudian dicari berdasarkan kod yang diimbas."],
    ["Adakah saya perlu membayar untuk membuat kod bar?", "Tidak. Imej kod bar boleh dibuat secara percuma, contohnya di I Need Barcode. Yang perlu didaftarkan secara berbayar hanyalah nombor rasmi untuk kod bar produk runcit seperti EAN-13 melalui GS1."]
  ],
  body: `
<p>Kod bar ialah cara menulis data dalam bentuk corak yang boleh dibaca oleh mesin. Corak itu biasanya berupa garisan hitam dan putih dengan lebar yang berbeza, atau petak-petak kecil yang tersusun dalam sebuah segi empat sama. Apabila diimbas, corak tersebut diterjemahkan semula menjadi nombor atau teks, contohnya kod produk, nombor penjejakan atau alamat laman web.</p>
<p>Oleh sebab dibaca oleh mesin, kod bar jauh lebih pantas dan kurang kesilapan berbanding menaip kod secara manual. Itulah sebabnya kod bar digunakan di kaunter bayaran, gudang, hospital, tiket hinggalah pada pembungkusan makanan.</p>

<h2>Sejarah ringkas kod bar</h2>
<p>Idea kod bar dipatenkan pada tahun 1952 oleh Norman Joseph Woodland dan Bernard Silver di Amerika Syarikat. Kod bar hanya benar-benar digunakan di kedai pada tahun 1974, apabila sebungkus gula-gula getah diimbas di sebuah pasar raya di Ohio dengan kod UPC. Sejak itu, kod bar tersebar ke seluruh dunia dan kini diuruskan secara global oleh sebuah organisasi piawaian bernama GS1.</p>

<h2>Bagaimanakah kod bar berfungsi?</h2>
<p>Pengimbas menyinari kod bar lalu membaca pantulannya. Bahagian gelap memantulkan sedikit cahaya, manakala bahagian cerah memantulkan banyak cahaya. Perbezaan itu ditukar menjadi rangkaian nombor 0 dan 1, kemudian dipadankan dengan peraturan jenis kod bar tersebut. Banyak kod bar juga mempunyai <strong>digit semak</strong> (check digit), iaitu digit terakhir yang dikira daripada digit-digit sebelumnya. Jika hasil kiraannya tidak sepadan, pengimbas tahu ada kesilapan dan menolak hasil tersebut.</p>
<p>Kod bar itu sendiri biasanya hanya menyimpan kod. Maklumat seperti nama produk atau harga disimpan dalam sistem juruwang atau pangkalan data, kemudian dicari berdasarkan kod tersebut.</p>

<h2>Jenis kod bar yang kerap digunakan</h2>
<p>Secara umumnya, kod bar terbahagi kepada dua kumpulan besar:</p>
<ul>
  <li><strong>Kod bar 1D (linear)</strong>: berupa garisan menegak yang dibaca dari kiri ke kanan. Contohnya <a href="/?type=ean13">EAN-13</a> dan <a href="/?type=upca">UPC-A</a> untuk produk runcit, serta <a href="/?type=code128">Code 128</a> dan <a href="/?type=code39">Code 39</a> untuk logistik dan gudang.</li>
  <li><strong>Kod bar 2D</strong>: berupa corak petak yang menyimpan data dalam dua arah, jadi ia boleh memuatkan jauh lebih banyak data. Contohnya <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> dan <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Selain itu, terdapat kod bar khas untuk pos dan penghantaran, kesihatan, serta piawaian GS1 untuk rantaian bekalan. Penjelasan yang lebih terperinci tentang perbezaannya boleh anda baca dalam artikel <a href="/artikel/perbedaan-barcode-1d-dan-2d">Perbezaan Kod Bar 1D dan 2D</a>.</p>

<h2>Kod bar digunakan untuk apa?</h2>
<ul>
  <li><strong>Runcit</strong>: mempercepat urusan di kaunter bayaran dan merekod stok secara automatik.</li>
  <li><strong>Gudang dan penghantaran</strong>: menjejak barang dan bungkusan dari satu tempat ke tempat lain.</li>
  <li><strong>Tiket dan acara</strong>: memeriksa keaslian tiket dengan sekali imbas.</li>
  <li><strong>Pemasaran</strong>: QR Code pada risalah atau pembungkusan membawa orang terus ke laman web, menu atau WhatsApp anda.</li>
</ul>

<h2>Membuat kod bar sendiri</h2>
<p>Anda tidak memerlukan aplikasi berbayar untuk membuat kod bar. Di <a href="/">I Need Barcode</a>, pilih jenis kod bar, isikan datanya, kemudian muat turun sebagai imej PNG. Terdapat lebih daripada 100 jenis untuk dipilih, dan semuanya percuma tanpa perlu mendaftar.</p>
`
};
