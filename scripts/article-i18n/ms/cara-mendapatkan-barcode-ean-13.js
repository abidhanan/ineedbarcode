// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Cara Mendapatkan Kod Bar Produk EAN-13 untuk PKS",
  desc: "Ingin produk anda masuk ke kedai serbaneka atau pasar raya? Pelajari maksud digit EAN-13, cara mendaftar nombor rasmi dengan GS1 Indonesia dan cara mencetaknya.",
  tags: ["Perniagaan", "Runcit"],
  coverCaption: "Pembungkusan produk runcit memerlukan kod bar EAN-13 yang berdaftar.",
  inlineCaption: "Kedai runcit mengenal pasti produk daripada nombor EAN-13 dalam sistem juruwangnya.",
  faq: [
    ["Bolehkah saya mencipta nombor EAN-13 sendiri?", "Imej kod barnya boleh dibuat sendiri, tetapi nombornya sebaiknya nombor rasmi daripada GS1. Nombor ciptaan sendiri boleh bertembung dengan produk lain dan ditolak oleh kedai runcit."],
    ["Adakah setiap varian produk memerlukan kod bar yang berbeza?", "Ya. Setiap varian yang berbeza, contohnya berbeza perisa, saiz atau isi pembungkusan, memerlukan nombor EAN-13 tersendiri."],
    ["Apakah itu digit semak pada EAN-13?", "Digit semak ialah digit ke-13 yang dikira daripada 12 digit sebelumnya. Pengimbas menggunakannya untuk memastikan kod bar dibaca dengan betul. Penjana I Need Barcode mengiranya secara automatik jika anda memasukkan 12 digit."]
  ],
  body: `
<p>Jika anda mahu produk anda dijual di kedai serbaneka, pasar raya atau platform e-dagang yang besar, biasanya anda akan diminta meletakkan kod bar <strong>EAN-13</strong> pada pembungkusan. Kod bar ini mengandungi 13 digit nombor yang menjadi identiti unik produk anda di seluruh dunia.</p>

<h2>Maksud 13 digit pada EAN-13</h2>
<ul>
  <li><strong>Awalan GS1</strong>: tiga digit pertama menunjukkan organisasi GS1 yang mengeluarkan nombor tersebut. Nombor yang dikeluarkan oleh GS1 Indonesia bermula dengan <strong>899</strong>.</li>
  <li><strong>Nombor syarikat</strong>: identiti syarikat anda yang diberikan semasa mendaftar.</li>
  <li><strong>Nombor produk</strong>: ditetapkan sendiri oleh syarikat bagi setiap varian produk, contohnya berbeza perisa atau berbeza saiz.</li>
  <li><strong>Digit semak</strong>: digit terakhir yang dikira secara automatik daripada 12 digit sebelumnya untuk mengelakkan salah baca.</li>
</ul>

<h2>Mengapa perlu nombor rasmi?</h2>
<p>Kod bar EAN-13 boleh dilukis oleh sesiapa sahaja, tetapi <strong>nombornya</strong> mesti berdaftar. Kedai runcit menggunakan nombor itu untuk mengenal pasti produk dalam sistem mereka. Jika anda mereka nombor sendiri, nombor itu boleh bertembung dengan produk syarikat lain dan ditolak semasa produk didaftarkan dengan kedai.</p>

<h2>Cara mendaftar nombor dengan GS1 Indonesia</h2>
<ol>
  <li>Sediakan dokumen perniagaan, seperti NIB (Nombor Induk Perniagaan) dan NPWP (Nombor Pokok Wajib Cukai), serta senarai produk yang akan diberikan kod bar.</li>
  <li>Daftarkan syarikat melalui laman web rasmi GS1 Indonesia dan pilih jumlah nombor yang diperlukan.</li>
  <li>Bayar yuran pendaftaran dan yuran tahunan mengikut ketetapan yang berkuat kuasa.</li>
  <li>Setelah diluluskan, anda akan menerima nombor syarikat dan boleh membuat nombor bagi setiap produk.</li>
</ol>
<p>Syarat dan yuran boleh berubah, jadi sentiasa semak maklumat terkini terus di laman web GS1 Indonesia.</p>

<h2>Membuat imej kod barnya</h2>
<p>Setelah memiliki nombor, buka <a href="/?type=ean13">penjana EAN-13</a> dan masukkan 12 atau 13 digit nombor produk anda. Jika anda memasukkan 12 digit, digit semak akan dikira secara automatik. Pastikan pilihan teks di bawah kod bar diaktifkan supaya digitnya turut dicetak, kemudian muat turun sebagai PNG.</p>

<h2>Tip mencetak pada pembungkusan</h2>
<ul>
  <li>Gunakan garisan hitam atau biru tua di atas latar belakang putih. Elakkan warna merah untuk garisannya, kerana banyak pengimbas juruwang menggunakan cahaya merah sehingga garisan merah tidak dapat dibaca.</li>
  <li>Jangan kecilkan kod bar secara berlebihan. Saiz piawai EAN-13 ialah kira-kira 37.3 × 25.9 mm dan boleh dikecilkan hingga kira-kira 80%. Selanjutnya dalam <a href="/artikel/ukuran-barcode-untuk-dicetak">panduan saiz kod bar</a>.</li>
  <li>Tinggalkan ruang kosong di sebelah kiri dan kanan kod bar, dan elakkan meletakkannya pada lipatan atau sambungan pembungkusan.</li>
  <li>Uji cetakan dengan pengimbas sebelum mencetak dalam jumlah yang banyak.</li>
</ul>
<p>Untuk produk yang dijual di Amerika Utara, anda mungkin juga diminta menggunakan <a href="/?type=upca">UPC-A</a> yang mengandungi 12 digit.</p>
`
};
