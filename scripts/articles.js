// Data 10 artikel (Bahasa Indonesia). Dipakai scripts/build.js untuk membuat halaman /artikel/*,
// section Artikel di beranda, dan sitemap.xml. Sampul dibuat dari definisi `cover`.
module.exports = [
  {
    slug: 'apa-itu-barcode',
    title: 'Apa Itu Barcode? Pengertian, Cara Kerja, dan Jenisnya',
    desc: 'Barcode ada di hampir semua produk yang Anda beli. Kenali cara kerjanya, sejarah singkatnya, dan jenis-jenis barcode yang paling sering dipakai.',
    tags: ['Dasar', 'Barcode'],
    date: '2026-10-18',
    cover: { bcid: 'code128', text: 'I NEED BARCODE', includetext: true, scale: 3, design: { frame: 'none' } },
    coverAlt: 'Contoh barcode Code 128 bertuliskan I NEED BARCODE',
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
  },
  {
    slug: 'apa-itu-qr-code',
    title: 'Apa Itu QR Code dan Bagaimana Cara Kerjanya?',
    desc: 'QR Code bisa menyimpan link, teks, hingga data WiFi dan tetap terbaca walau sebagian rusak. Begini cara kerja dan kelebihannya.',
    tags: ['Dasar', 'QR Code'],
    date: '2026-10-17',
    cover: { bcid: 'qrcode', text: 'https://ineedbarcode.com/artikel/apa-itu-qr-code', scale: 6, design: { frame: 'none' } },
    coverAlt: 'Contoh QR Code hitam putih',
    body: `
<p>QR Code (Quick Response Code) adalah barcode 2D berbentuk persegi yang tersusun dari kotak-kotak kecil hitam dan putih. Berbeda dengan barcode garis yang hanya menyimpan belasan angka, QR Code bisa menyimpan link situs, teks panjang, nomor telepon, kontak, hingga data jaringan WiFi.</p>
<p>QR Code dikembangkan pada 1994 oleh Denso Wave, perusahaan Jepang, untuk melacak suku cadang kendaraan di pabrik. Kini QR Code dipakai di mana-mana, dari pembayaran digital hingga menu restoran, karena bisa dipindai langsung dengan kamera ponsel.</p>

<h2>Bagian-bagian QR Code</h2>
<ul>
  <li><strong>Tiga kotak besar di sudut</strong> (finder pattern): membantu kamera menemukan QR Code dan mengetahui arahnya, sehingga QR Code tetap terbaca walau dipindai miring atau terbalik.</li>
  <li><strong>Pola penyelaras</strong> (alignment pattern): kotak kecil yang membantu membaca QR Code yang tertekuk atau terlihat dari sudut.</li>
  <li><strong>Area data</strong>: kotak-kotak kecil yang berisi informasi yang Anda simpan.</li>
  <li><strong>Zona tenang</strong> (quiet zone): ruang kosong di sekeliling QR Code agar mudah dipisahkan dari latar.</li>
</ul>

<h2>Bisa menyimpan berapa banyak data?</h2>
<p>QR Code punya 40 versi ukuran. Versi terbesar bisa menyimpan hingga 7.089 angka atau sekitar 2.953 byte data. Dalam praktiknya, makin sedikit data yang disimpan, makin besar kotak-kotaknya dan makin mudah QR Code dipindai. Karena itu, link yang pendek lebih baik daripada link yang sangat panjang.</p>

<h2>Tetap terbaca walau rusak</h2>
<p>QR Code memakai koreksi kesalahan (error correction). Ada empat tingkat:</p>
<ul>
  <li><strong>L</strong>: data tetap bisa dipulihkan jika sekitar 7% QR Code rusak.</li>
  <li><strong>M</strong>: sekitar 15%. Ini pilihan umum dan seimbang.</li>
  <li><strong>Q</strong>: sekitar 25%.</li>
  <li><strong>H</strong>: sekitar 30%, cocok untuk QR Code yang akan diberi logo atau dicetak di tempat yang mudah kotor.</li>
</ul>
<p>Makin tinggi tingkat koreksinya, makin banyak kotak yang dibutuhkan, sehingga pola QR Code terlihat lebih rapat.</p>

<h2>Apa saja yang bisa disimpan di QR Code?</h2>
<ul>
  <li>Link situs, toko online, atau formulir.</li>
  <li>Data WiFi, sehingga tamu bisa tersambung tanpa mengetik sandi. Lihat panduan <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a>.</li>
  <li>Kartu nama digital (vCard), email, SMS, dan chat WhatsApp.</li>
  <li>Lokasi di peta dan jadwal acara.</li>
</ul>

<h2>QR Code statis dan dinamis</h2>
<p>QR Code yang dibuat langsung dari data disebut <strong>QR Code statis</strong>: isinya tertanam di gambar dan tidak bisa diubah, tetapi juga tidak pernah kedaluwarsa. QR Code <strong>dinamis</strong> berisi link pendek milik sebuah layanan yang kemudian mengarahkan ke tujuan Anda; tujuannya bisa diganti, tetapi QR Code akan mati jika layanan itu berhenti. Untuk kebanyakan kebutuhan, QR Code statis sudah cukup dan lebih aman untuk jangka panjang.</p>

<p>Ingin mencoba? Buat <a href="/?type=qrcode">QR Code gratis</a> sekarang, atau baca <a href="/artikel/cara-membuat-qr-code-gratis">cara membuat QR Code dalam 3 langkah</a>.</p>
`
  },
  {
    slug: 'cara-membuat-qr-code-gratis',
    title: 'Cara Membuat QR Code Gratis dalam 3 Langkah',
    desc: 'Panduan praktis membuat QR Code untuk link, WiFi, kontak, atau WhatsApp tanpa aplikasi dan tanpa daftar, lengkap dengan tips agar mudah dipindai.',
    tags: ['Panduan', 'QR Code'],
    date: '2026-10-16',
    cover: { bcid: 'qrcode', text: 'https://ineedbarcode.com/', scale: 5, design: { frame: 'bottom', frameText: 'PINDAI SAYA', dots: 'rounded' } },
    coverAlt: 'QR Code bergaya titik membulat dengan bingkai bertuliskan PINDAI SAYA',
    body: `
<p>Membuat QR Code sekarang tidak perlu aplikasi khusus atau biaya langganan. Dengan generator online seperti <a href="/">I Need Barcode</a>, Anda bisa membuat QR Code dalam hitungan detik langsung dari browser, baik di HP maupun laptop.</p>

<h2>Langkah 1: Pilih jenis barcode</h2>
<p>Buka <a href="/?type=qrcode">generator QR Code</a>, lalu pilih <strong>QR Code</strong> pada bagian Jenis barcode. QR Code adalah pilihan paling tepat jika barcode akan dipindai memakai kamera ponsel.</p>

<h2>Langkah 2: Isi data</h2>
<p>Pilih jenis data sesuai kebutuhan:</p>
<ul>
  <li><strong>URL</strong>: link situs, toko online, Google Maps, atau formulir.</li>
  <li><strong>WiFi</strong>: nama jaringan dan sandi, agar tamu bisa tersambung tanpa mengetik.</li>
  <li><strong>Kontak</strong>: nama, nomor telepon, email, dan perusahaan dalam format kartu nama digital.</li>
  <li><strong>WhatsApp</strong>: nomor dan pesan awal, sehingga pelanggan langsung membuka chat dengan Anda.</li>
  <li><strong>Teks, Email, Telepon, SMS, Lokasi, Acara</strong> untuk kebutuhan lainnya.</li>
</ul>
<p>Pratinjau akan langsung berubah setiap kali Anda mengetik, jadi Anda bisa memeriksa hasilnya sebelum mengunduh.</p>

<h2>Langkah 3: Atur tampilan lalu unduh</h2>
<p>Pada bagian Pengaturan, atur ukuran modul (makin besar, makin tajam saat dicetak), warna, dan margin. Di bagian Desain, Anda bisa memberi bentuk seperti lingkaran atau hati, gaya titik, serta bingkai dengan tulisan seperti "PINDAI SAYA". Setelah selesai, tekan <strong>Unduh PNG</strong>.</p>

<h2>Tips agar QR Code mudah dipindai</h2>
<ul>
  <li><strong>Uji sebelum mencetak.</strong> Pindai dengan dua atau tiga ponsel berbeda dari jarak yang wajar.</li>
  <li><strong>Gunakan kontras yang kuat.</strong> Warna gelap di atas latar terang paling aman. Hindari QR Code terang di atas latar gelap.</li>
  <li><strong>Jangan terlalu kecil.</strong> Untuk dipindai dari jarak dekat, ukuran sekitar 2 × 2 cm adalah batas aman. Makin jauh jarak pindainya, makin besar ukurannya. Baca juga <a href="/artikel/ukuran-barcode-untuk-dicetak">ukuran barcode untuk dicetak</a>.</li>
  <li><strong>Sisakan ruang kosong</strong> di sekeliling QR Code agar tidak menempel pada gambar atau tulisan lain.</li>
  <li><strong>Pakai link yang pendek.</strong> Data yang sedikit menghasilkan pola yang lebih renggang dan lebih mudah dibaca.</li>
</ul>

<h2>Butuh banyak QR Code sekaligus?</h2>
<p>Aktifkan mode <strong>Massal</strong>, tulis satu data per baris (hingga 100 baris), lalu unduh semuanya dalam satu file ZIP. Cara ini cocok untuk label inventaris, kartu peserta, atau tiket acara.</p>
`
  },
  {
    slug: 'perbedaan-barcode-1d-dan-2d',
    title: 'Perbedaan Barcode 1D dan 2D: Mana yang Anda Butuhkan?',
    desc: 'Barcode garis dan QR Code sama-sama barcode, tetapi kegunaannya berbeda. Bandingkan kapasitas, cara pindai, dan contoh penggunaannya.',
    tags: ['Dasar', 'Barcode'],
    date: '2026-10-15',
    cover: { pair: true },
    coverAlt: 'Perbandingan barcode EAN-13 dan QR Code',
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
  },
  {
    slug: 'cara-mendapatkan-barcode-ean-13',
    title: 'Cara Mendapatkan Barcode Produk EAN-13 untuk UMKM',
    desc: 'Ingin produk Anda masuk minimarket atau supermarket? Pelajari arti angka EAN-13, cara mendaftar nomor resmi ke GS1 Indonesia, dan cara mencetaknya.',
    tags: ['Bisnis', 'Ritel'],
    date: '2026-10-14',
    cover: { bcid: 'ean13', text: '8991234567891', includetext: true, guardwhitespace: true, scale: 4, design: { frame: 'corners', frameText: '' } },
    coverAlt: 'Barcode EAN-13 dengan bingkai sudut',
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
  },
  {
    slug: 'cara-membuat-qr-code-wifi',
    title: 'Cara Membuat QR Code WiFi agar Tamu Tak Perlu Mengetik Sandi',
    desc: 'Tamu cukup memindai QR Code untuk tersambung ke WiFi. Cocok untuk kafe, kantor, penginapan, dan rumah. Begini cara membuat dan memasangnya.',
    tags: ['Panduan', 'QR Code'],
    date: '2026-10-13',
    cover: { bcid: 'qrcode', text: 'WIFI:T:WPA;S:I Need Barcode;P:contoh-sandi-wifi;;', scale: 5, design: { frame: 'circle', frameText: 'WIFI', shape: 'circle', dots: 'dots' } },
    coverAlt: 'QR Code WiFi berbentuk lingkaran dengan label WIFI',
    body: `
<p>Mengeja sandi WiFi yang panjang kepada tamu sering merepotkan, apalagi kalau ada huruf besar, angka, dan simbol. Dengan <strong>QR Code WiFi</strong>, tamu cukup mengarahkan kamera ponsel ke QR Code lalu langsung tersambung.</p>

<h2>Cara kerja QR Code WiFi</h2>
<p>QR Code WiFi menyimpan nama jaringan (SSID), jenis keamanan, dan sandi dalam format khusus yang dikenali ponsel, misalnya <code>WIFI:T:WPA;S:NamaJaringan;P:Sandi;;</code>. Kamera bawaan iPhone (iOS 11 ke atas) dan sebagian besar Android (Android 10 ke atas) bisa membacanya langsung, tanpa aplikasi tambahan.</p>

<h2>Langkah membuatnya</h2>
<ol>
  <li>Buka <a href="/?type=qrcode">generator QR Code</a> dan pilih tab <strong>WiFi</strong> pada bagian Isi data.</li>
  <li>Ketik <strong>nama jaringan</strong> persis seperti yang muncul di daftar WiFi, termasuk huruf besar dan kecilnya.</li>
  <li>Ketik <strong>sandi</strong>, lalu pilih jenis keamanan. Sebagian besar router rumah dan kantor memakai WPA/WPA2/WPA3.</li>
  <li>Centang <strong>Jaringan tersembunyi</strong> jika nama WiFi Anda tidak ditampilkan di daftar.</li>
  <li>Tambahkan bingkai bertuliskan misalnya "SCAN WIFI" agar tamu tahu fungsinya, lalu unduh PNG.</li>
</ol>

<h2>Di mana memasangnya?</h2>
<ul>
  <li>Kartu kecil di meja kafe atau restoran.</li>
  <li>Dinding ruang tamu, resepsionis, atau ruang rapat kantor.</li>
  <li>Kamar penginapan, ditempel di dekat pintu atau TV.</li>
  <li>Bagian bawah router di rumah, agar keluarga mudah menyambungkan perangkat baru.</li>
</ul>

<h2>Tips keamanan</h2>
<ul>
  <li>Gunakan <strong>jaringan tamu</strong> (guest network) jika router Anda mendukungnya, sehingga tamu tidak masuk ke jaringan yang sama dengan komputer kantor.</li>
  <li>Jika sandi WiFi diganti, buat dan cetak ulang QR Code-nya, karena QR Code lama akan berisi sandi lama.</li>
  <li>Jangan memasang QR Code WiFi untuk jaringan pribadi di tempat umum yang bisa difoto siapa saja.</li>
</ul>

<h2>Jika QR Code tidak tersambung</h2>
<p>Periksa kembali ejaan nama jaringan dan sandi, karena satu huruf yang salah membuat ponsel gagal tersambung. Pastikan juga jenis keamanan yang dipilih sesuai dengan pengaturan router. Untuk masalah pemindaian lainnya, baca <a href="/artikel/barcode-tidak-bisa-dipindai">penyebab barcode tidak bisa dipindai</a>.</p>
`
  },
  {
    slug: 'ukuran-barcode-untuk-dicetak',
    title: 'Ukuran dan Resolusi Barcode yang Tepat untuk Dicetak',
    desc: 'Barcode yang terlalu kecil atau buram sulit dipindai. Pelajari ukuran minimum, aturan jarak pindai, dan resolusi gambar yang aman untuk dicetak.',
    tags: ['Panduan', 'Cetak'],
    date: '2026-10-12',
    cover: { bcid: 'datamatrix', text: 'I Need Barcode - ukuran cetak', scale: 6, design: { frame: 'rounded', frameText: 'CETAK' } },
    coverAlt: 'Barcode Data Matrix dengan bingkai membulat bertuliskan CETAK',
    body: `
<p>Barcode yang terlihat bagus di layar belum tentu terbaca setelah dicetak. Ukuran yang terlalu kecil, resolusi yang rendah, atau tinta yang meluber bisa membuat pemindai gagal membaca. Berikut panduan agar hasil cetak Anda tetap terbaca.</p>

<h2>Kenali modul</h2>
<p><strong>Modul</strong> adalah satuan terkecil barcode, yaitu satu kotak kecil pada QR Code atau garis tersempit pada barcode garis. Ukuran modul menentukan seberapa mudah barcode dibaca. Di <a href="/">I Need Barcode</a>, ukuran modul bisa diatur pada bagian Pengaturan: makin besar nilainya, makin besar dan tajam gambar yang diunduh.</p>

<h2>Ukuran minimum QR Code</h2>
<ul>
  <li>Untuk dipindai dari jarak dekat (misalnya kartu nama atau label produk), ukuran sekitar <strong>2 × 2 cm</strong> adalah batas aman.</li>
  <li>Gunakan aturan perbandingan sekitar <strong>10 : 1</strong>: jarak pindai kira-kira sepuluh kali lebar QR Code. Untuk poster yang dipindai dari jarak 2 meter, buat QR Code minimal sekitar 20 cm.</li>
  <li>Makin banyak data yang disimpan, makin rapat polanya, sehingga butuh ukuran yang lebih besar.</li>
</ul>

<h2>Ukuran barcode produk</h2>
<p>Ukuran standar <a href="/?type=ean13">EAN-13</a> adalah sekitar 37,3 × 25,9 mm (100%). Ukuran ini boleh diperkecil hingga sekitar 80% atau diperbesar hingga 200%. Hindari memotong tinggi garis terlalu pendek, karena pemindai kasir butuh ruang untuk membaca dari berbagai sudut.</p>

<h2>Resolusi gambar</h2>
<ul>
  <li>Untuk cetak, usahakan setiap modul tergambar dengan <strong>beberapa piksel penuh</strong>, bukan sebagian piksel. Pilih ukuran modul yang lebih besar saat mengunduh, lalu perkecil di aplikasi desain, bukan sebaliknya.</li>
  <li>Hindari memperbesar gambar barcode yang kecil, karena tepi kotaknya akan menjadi buram atau bergerigi.</li>
  <li>Simpan dalam format PNG agar warna dan tepinya tidak rusak seperti pada JPG.</li>
</ul>

<h2>Zona tenang</h2>
<p>Setiap barcode butuh ruang kosong di sekelilingnya, disebut <strong>zona tenang</strong> (quiet zone). Untuk QR Code, idealnya selebar empat modul. Untuk barcode garis, ruang kosong di kiri dan kanan sangat penting. Jangan menempelkan tulisan, garis desain, atau tepi kemasan terlalu dekat.</p>

<h2>Warna dan bahan</h2>
<ul>
  <li>Gunakan warna gelap untuk barcode dan warna terang untuk latar.</li>
  <li>Hindari bahan yang mengilap atau transparan, karena pantulan cahaya bisa mengganggu kamera.</li>
  <li>Selalu cetak satu contoh dan uji dengan beberapa ponsel atau pemindai sebelum mencetak banyak.</li>
</ul>
<p>Jika barcode Anda tetap sulit dipindai, cek <a href="/artikel/barcode-tidak-bisa-dipindai">7 penyebab barcode tidak bisa dipindai</a>.</p>
`
  },
  {
    slug: 'barcode-tidak-bisa-dipindai',
    title: '7 Penyebab Barcode Tidak Bisa Dipindai dan Cara Mengatasinya',
    desc: 'Barcode atau QR Code gagal dipindai? Cek tujuh penyebab yang paling sering terjadi, dari kontras warna hingga ukuran, beserta cara memperbaikinya.',
    tags: ['Tips', 'Barcode'],
    date: '2026-10-11',
    cover: { bcid: 'qrcode', text: 'https://ineedbarcode.com/artikel/barcode-tidak-bisa-dipindai', scale: 5, design: { frame: 'bubble', frameText: 'CEK ULANG' } },
    coverAlt: 'QR Code dalam bingkai balon bertuliskan CEK ULANG',
    body: `
<p>Tidak ada yang lebih menjengkelkan daripada barcode yang sudah dicetak ratusan lembar lalu ternyata tidak bisa dipindai. Kabar baiknya, penyebabnya biasanya sederhana dan mudah dicegah. Berikut tujuh penyebab yang paling sering terjadi.</p>

<h2>1. Kontras warna terlalu rendah</h2>
<p>Pemindai membaca perbedaan gelap dan terang. Barcode abu-abu muda di atas putih, atau biru tua di atas hitam, sulit dibedakan. <strong>Solusi:</strong> gunakan warna gelap di atas latar terang. Hitam di atas putih adalah pilihan paling aman.</p>

<h2>2. Warna terbalik atau warna merah</h2>
<p>Barcode terang di atas latar gelap tidak didukung semua pemindai. Selain itu, banyak pemindai kasir memakai cahaya merah, sehingga garis berwarna merah terlihat sama dengan latar putih. <strong>Solusi:</strong> hindari warna merah untuk garis atau modul barcode, dan jangan membalik warnanya.</p>

<h2>3. Ukuran terlalu kecil</h2>
<p>Kamera butuh cukup piksel untuk mengenali setiap modul. <strong>Solusi:</strong> perbesar barcode. Untuk QR Code yang dipindai dari dekat, gunakan minimal sekitar 2 × 2 cm. Lihat <a href="/artikel/ukuran-barcode-untuk-dicetak">panduan ukuran cetak</a>.</p>

<h2>4. Tidak ada zona tenang</h2>
<p>Barcode yang menempel pada gambar, tulisan, atau tepi kertas sulit dipisahkan dari sekitarnya. <strong>Solusi:</strong> sisakan ruang kosong di sekeliling barcode, terutama di kiri dan kanan barcode garis.</p>

<h2>5. Gambar buram atau terdistorsi</h2>
<p>Barcode yang diperbesar dari gambar kecil, disimpan sebagai JPG berkualitas rendah, atau ditarik sehingga tidak proporsional akan kehilangan bentuknya. <strong>Solusi:</strong> unduh dengan ukuran modul lebih besar dalam format PNG, dan selalu ubah ukuran secara proporsional.</p>

<h2>6. Data salah atau tidak sesuai jenisnya</h2>
<p>Setiap jenis barcode punya aturan. EAN-13, misalnya, hanya menerima 12 atau 13 digit angka dengan digit pemeriksa yang benar. Link yang salah ketik juga membuat QR Code terbaca tetapi tidak membuka apa-apa. <strong>Solusi:</strong> periksa data sebelum mencetak. Generator <a href="/">I Need Barcode</a> akan menampilkan pesan jika data tidak sesuai aturan jenis barcode yang dipilih.</p>

<h2>7. Permukaan dan pencahayaan</h2>
<p>Bahan mengilap, plastik transparan, lipatan, dan permukaan melengkung dapat memantulkan cahaya atau mengubah bentuk barcode. <strong>Solusi:</strong> cetak di permukaan datar dan tidak mengilap, lalu uji di kondisi cahaya yang sebenarnya.</p>

<h2>Soal QR Code dengan desain</h2>
<p>QR Code yang diberi bentuk, warna, atau bingkai tetap bisa dipindai selama tiga kotak penanda di sudutnya utuh dan kontrasnya cukup. Baca selengkapnya di <a href="/artikel/desain-qr-code-kreatif">desain QR Code kreatif yang tetap terbaca</a>.</p>
<p>Kebiasaan terbaik: <strong>selalu uji satu cetakan</strong> dengan beberapa ponsel dan pemindai sebelum mencetak dalam jumlah besar.</p>
`
  },
  {
    slug: 'qr-code-menu-restoran',
    title: 'QR Code untuk Menu Restoran: Panduan Lengkap',
    desc: 'Menu digital lewat QR Code memudahkan pelanggan dan menghemat biaya cetak. Begini cara membuatnya, menyiapkan menu, dan memasangnya di meja.',
    tags: ['Bisnis', 'QR Code'],
    date: '2026-10-10',
    cover: { bcid: 'qrcode', text: 'https://ineedbarcode.com/artikel/qr-code-menu-restoran', scale: 5, design: { frame: 'banner', frameText: 'MENU' } },
    coverAlt: 'QR Code dengan pita bertuliskan MENU',
    body: `
<p>Menu digital lewat QR Code kini menjadi hal biasa di kafe dan restoran. Pelanggan cukup memindai QR Code di meja untuk melihat daftar makanan, harga, dan foto. Bagi pemilik usaha, cara ini menghemat biaya cetak dan memudahkan perubahan harga atau menu.</p>

<h2>Keuntungan menu QR Code</h2>
<ul>
  <li><strong>Mudah diperbarui</strong>: ganti harga atau tambah menu tanpa mencetak ulang buku menu.</li>
  <li><strong>Hemat biaya</strong>: cukup cetak QR Code kecil untuk setiap meja.</li>
  <li><strong>Lebih informatif</strong>: tampilkan foto, deskripsi, dan label seperti pedas atau vegetarian.</li>
  <li><strong>Mendukung pesan online</strong>: arahkan pelanggan ke formulir pesanan atau WhatsApp.</li>
</ul>

<h2>Langkah 1: Siapkan menu online</h2>
<p>QR Code hanya berisi link, jadi Anda perlu menu yang bisa dibuka di internet. Pilihannya antara lain halaman di situs sendiri, file PDF di penyimpanan online yang dibagikan secara publik, atau halaman katalog di platform pemesanan. Pastikan menu nyaman dibaca di layar HP: tulisan cukup besar, foto tidak terlalu berat, dan harga jelas.</p>

<h2>Langkah 2: Buat QR Code</h2>
<ol>
  <li>Salin link menu Anda.</li>
  <li>Buka <a href="/?type=qrcode">generator QR Code</a>, pilih tab <strong>URL</strong>, lalu tempel link tersebut.</li>
  <li>Tambahkan bingkai bertuliskan "MENU" atau "PINDAI UNTUK MELIHAT MENU" pada bagian Desain.</li>
  <li>Sesuaikan warna dengan identitas restoran, tetapi tetap gunakan warna gelap di atas latar terang.</li>
  <li>Unduh PNG dengan ukuran modul yang cukup besar untuk dicetak.</li>
</ol>
<p>Gunakan link yang tidak akan berubah. Jika menu dipindah ke alamat lain, QR Code yang sudah tercetak tidak bisa diperbarui. Penjelasannya ada di artikel <a href="/artikel/apa-itu-qr-code">apa itu QR Code</a>.</p>

<h2>Langkah 3: Cetak dan pasang</h2>
<ul>
  <li>Cetak dengan ukuran minimal sekitar 3–5 cm agar mudah dipindai dari kursi.</li>
  <li>Gunakan bahan yang tahan tumpahan, seperti stiker vinyl atau kartu yang dilaminasi tanpa kilap berlebihan.</li>
  <li>Letakkan di posisi yang mudah dijangkau, misalnya stand akrilik di tengah meja.</li>
  <li>Tambahkan nomor meja di dekat QR Code jika pelanggan memesan lewat chat.</li>
</ul>

<h2>Jangan lupakan pelanggan tanpa ponsel</h2>
<p>Sediakan satu atau dua menu cetak untuk pelanggan yang tidak membawa ponsel, baterainya habis, atau lebih nyaman membaca menu fisik.</p>
<p>Anda juga bisa membuat <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a> untuk tamu dan meletakkannya di samping QR Code menu.</p>
`
  },
  {
    slug: 'desain-qr-code-kreatif',
    title: 'Desain QR Code Kreatif yang Tetap Bisa Dipindai',
    desc: 'QR Code bisa dibuat berbentuk hati, lingkaran, atau diberi bingkai dan warna. Pelajari aturan agar desainnya tetap menarik sekaligus mudah dipindai.',
    tags: ['Desain', 'QR Code'],
    date: '2026-10-09',
    cover: { bcid: 'qrcode', text: 'https://ineedbarcode.com/artikel/desain-qr-code-kreatif', scale: 5, color: '1D4ED8', design: { shape: 'heart', dots: 'rounded', frame: 'none' } },
    coverAlt: 'QR Code berbentuk hati berwarna biru',
    body: `
<p>QR Code hitam putih memang fungsional, tetapi sering terlihat kaku di kemasan, undangan, atau materi promosi. Dengan sedikit sentuhan desain, QR Code bisa tampil lebih menarik tanpa kehilangan fungsinya. Kuncinya adalah memahami bagian mana yang boleh diubah dan mana yang harus tetap utuh.</p>

<h2>Bentuk luar: hati, lingkaran, dan lainnya</h2>
<p>Di bagian Desain pada <a href="/?type=qrcode">generator QR Code</a>, Anda bisa memilih bentuk seperti lingkaran, hati, segi enam, segi delapan, bintang, atau wajik. QR Code aslinya tetap berada di tengah, lalu sisanya diisi pola hiasan sampai membentuk bentuk yang dipilih. Pola hiasan tidak berisi data, sehingga tidak mengganggu pemindaian selama ada jarak kosong di sekeliling QR Code aslinya.</p>

<h2>Gaya titik</h2>
<p>Kotak-kotak QR Code bisa diubah menjadi bentuk membulat atau titik bulat. Agar tetap mudah dipindai, tiga kotak besar di sudut (finder pattern) sebaiknya tetap utuh sebagai kotak, karena bagian inilah yang dicari kamera pertama kali. Generator kami selalu menggambar bagian ini sebagai kotak utuh, paling jauh dengan sudut yang membulat, apa pun gaya titik yang Anda pilih.</p>

<h2>Warna</h2>
<ul>
  <li>Gunakan warna <strong>gelap</strong> untuk QR Code dan warna <strong>terang</strong> untuk latar. Biru tua, hijau tua, ungu, atau cokelat tua umumnya aman.</li>
  <li>Hindari warna pucat untuk QR Code, seperti kuning, merah muda pucat, atau abu-abu terang.</li>
  <li>Jangan membalik warna menjadi QR Code terang di atas latar gelap, karena tidak semua aplikasi pemindai mendukungnya.</li>
</ul>

<h2>Bingkai dan ajakan</h2>
<p>Bingkai bertuliskan ajakan seperti "PINDAI SAYA", "MENU", atau "SCAN WIFI" terbukti membantu orang memahami fungsi QR Code. Anda bisa memilih bingkai label bawah, label atas, sudut, balon, lingkaran, atau pita, lalu mengganti tulisan dan warnanya.</p>

<h2>Aturan agar desain tetap terbaca</h2>
<ol>
  <li>Jaga <strong>kontras</strong> yang kuat antara QR Code dan latarnya.</li>
  <li>Biarkan <strong>tiga kotak penanda</strong> di sudut tetap jelas dan tidak tertutup.</li>
  <li>Sisakan <strong>ruang kosong</strong> di sekitar QR Code dan bingkai.</li>
  <li>Jangan memperkecil QR Code yang sudah diberi desain secara berlebihan. Bentuk seperti hati membuat area QR Code aslinya lebih kecil dari ukuran keseluruhan gambar.</li>
  <li><strong>Uji</strong> dengan beberapa ponsel sebelum mencetak.</li>
</ol>

<p>Jika desain Anda sulit dipindai, kembalikan satu per satu ke pengaturan dasar dengan tombol <strong>Atur ulang</strong> untuk menemukan penyebabnya. Penyebab umum lainnya bisa dibaca di <a href="/artikel/barcode-tidak-bisa-dipindai">7 penyebab barcode tidak bisa dipindai</a>.</p>
`
  }
];
