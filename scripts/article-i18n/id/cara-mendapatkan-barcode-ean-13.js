// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Cara Mendapatkan Barcode Produk EAN-13 untuk UMKM",
  desc: "Ingin produk Anda masuk minimarket atau supermarket? Pelajari arti angka EAN-13, cara mendaftar nomor resmi ke GS1 Indonesia, dan cara mencetaknya.",
  tags: ["Bisnis", "Ritel"],
  coverCaption: "Kemasan produk ritel memerlukan barcode EAN-13 yang terdaftar.",
  inlineCaption: "Toko ritel mengenali produk dari nomor EAN-13 di sistem kasirnya.",
  faq: [
    ["Bolehkah membuat nomor EAN-13 sendiri?", "Gambar barcodenya boleh dibuat sendiri, tetapi nomornya sebaiknya resmi dari GS1. Nomor buatan sendiri bisa bentrok dengan produk lain dan ditolak toko ritel."],
    ["Apakah setiap varian produk butuh barcode berbeda?", "Ya. Setiap varian yang berbeda, misalnya beda rasa, ukuran, atau isi kemasan, memerlukan nomor EAN-13 sendiri."],
    ["Apa itu digit pemeriksa pada EAN-13?", "Digit pemeriksa adalah angka ke-13 yang dihitung dari 12 angka sebelumnya. Pemindai memakainya untuk memastikan barcode terbaca dengan benar. Generator I Need Barcode menghitungnya otomatis jika Anda memasukkan 12 digit."]
  ],
  body: `
<p>Jika produk Anda ingin dijual di minimarket, supermarket, atau marketplace besar, biasanya Anda akan diminta mencantumkan barcode <strong>EAN-13</strong> pada kemasan. Barcode ini berisi 13 digit angka yang menjadi identitas unik produk Anda di seluruh dunia.</p>

<h2>Arti 13 digit pada EAN-13</h2>
<ul>
  <li><strong>Awalan GS1</strong>: tiga digit pertama menunjukkan organisasi GS1 yang menerbitkan nomor. Nomor yang diterbitkan GS1 Indonesia diawali <strong>899</strong>.</li>
  <li><strong>Nomor perusahaan</strong>: identitas perusahaan Anda yang diberikan saat mendaftar.</li>
  <li><strong>Nomor produk</strong>: diatur sendiri oleh perusahaan untuk setiap varian produk, misalnya beda rasa atau beda ukuran.</li>
  <li><strong>Digit pemeriksa</strong>: digit terakhir yang dihitung otomatis dari 12 digit sebelumnya untuk mencegah salah baca.</li>
</ul>

<h2>Kenapa harus nomor resmi?</h2>
<p>Barcode EAN-13 bisa digambar oleh siapa saja, tetapi <strong>nomornya</strong> harus terdaftar. Toko ritel memakai nomor itu untuk mengenali produk di sistem mereka. Jika Anda mengarang nomor sendiri, nomor itu bisa bentrok dengan produk perusahaan lain dan ditolak saat produk didaftarkan ke toko.</p>

<h2>Cara mendaftar nomor ke GS1 Indonesia</h2>
<ol>
  <li>Siapkan dokumen usaha, seperti NIB (Nomor Induk Berusaha) dan NPWP, serta daftar produk yang akan diberi barcode.</li>
  <li>Daftarkan perusahaan melalui situs resmi GS1 Indonesia dan pilih jumlah nomor yang dibutuhkan.</li>
  <li>Bayar biaya pendaftaran dan iuran tahunan sesuai ketentuan yang berlaku.</li>
  <li>Setelah disetujui, Anda menerima nomor perusahaan dan bisa membuat nomor untuk setiap produk.</li>
</ol>
<p>Persyaratan dan biaya bisa berubah, jadi selalu periksa informasi terbaru langsung di situs GS1 Indonesia.</p>

<h2>Membuat gambar barcodenya</h2>
<p>Setelah memiliki nomor, buka <a href="/?type=ean13">generator EAN-13</a> dan masukkan 12 atau 13 digit nomor produk Anda. Jika Anda memasukkan 12 digit, digit pemeriksa akan dihitung otomatis. Pastikan pilihan teks di bawah barcode aktif agar angkanya tercetak, lalu unduh sebagai PNG.</p>

<h2>Tips mencetak di kemasan</h2>
<ul>
  <li>Gunakan garis hitam atau biru tua di atas latar putih. Hindari warna merah untuk garisnya, karena banyak pemindai kasir memakai cahaya merah sehingga garis merah tidak terbaca.</li>
  <li>Jangan memperkecil barcode berlebihan. Ukuran standar EAN-13 sekitar 37,3 × 25,9 mm dan boleh diperkecil hingga sekitar 80%. Selengkapnya di <a href="/artikel/ukuran-barcode-untuk-dicetak">panduan ukuran barcode</a>.</li>
  <li>Sisakan ruang kosong di kiri dan kanan barcode, dan hindari menempatkannya di lipatan atau sambungan kemasan.</li>
  <li>Uji cetakan dengan pemindai sebelum mencetak dalam jumlah besar.</li>
</ul>
<p>Untuk produk yang dijual di Amerika Utara, Anda mungkin juga diminta memakai <a href="/?type=upca">UPC-A</a> yang berisi 12 digit.</p>
`
};
