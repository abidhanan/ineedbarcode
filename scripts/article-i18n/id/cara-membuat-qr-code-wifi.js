// cara-membuat-qr-code-wifi
module.exports = {
  title: "Cara Membuat QR Code WiFi agar Tamu Tak Perlu Mengetik Sandi",
  desc: "Tamu cukup memindai QR Code untuk tersambung ke WiFi. Cocok untuk kafe, kantor, penginapan, dan rumah. Begini cara membuat dan memasangnya.",
  tags: ["Panduan", "QR Code"],
  coverCaption: "Data WiFi dari router bisa disimpan dalam satu QR Code.",
  inlineCaption: "Tamu kafe bisa langsung tersambung tanpa mengetik sandi.",
  faq: [
    ["Apakah semua ponsel bisa memindai QR Code WiFi?", "Kamera bawaan iPhone dengan iOS 11 ke atas dan sebagian besar Android 10 ke atas bisa langsung membacanya. Ponsel lama mungkin memerlukan aplikasi pemindai QR."],
    ["Apakah QR Code WiFi aman?", "Siapa pun yang memindai QR Code itu bisa tersambung ke WiFi Anda. Karena itu, gunakan jaringan tamu dan jangan memasang QR Code jaringan pribadi di tempat umum."],
    ["Apa yang harus dilakukan jika sandi WiFi diganti?", "Buat dan cetak ulang QR Code WiFi, karena QR Code lama masih berisi sandi yang lama."]
  ],
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
};
