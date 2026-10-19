// cara-membuat-qr-code-wifi
module.exports = {
  title: "Cara Membuat QR Code WiFi supaya Tetamu Tidak Perlu Menaip Kata Laluan",
  desc: "Tetamu hanya perlu mengimbas QR Code untuk bersambung ke WiFi. Sesuai untuk kafe, pejabat, rumah tumpangan dan rumah. Begini cara membuat dan memasangnya.",
  tags: ["Panduan", "QR Code"],
  coverCaption: "Maklumat WiFi daripada penghala boleh disimpan dalam satu QR Code.",
  inlineCaption: "Tetamu kafe boleh terus bersambung tanpa menaip kata laluan.",
  faq: [
    ["Bolehkah semua telefon mengimbas QR Code WiFi?", "Kamera terbina dalam iPhone dengan iOS 11 ke atas dan kebanyakan Android 10 ke atas boleh terus membacanya. Telefon lama mungkin memerlukan aplikasi pengimbas QR."],
    ["Adakah QR Code WiFi selamat?", "Sesiapa sahaja yang mengimbas QR Code itu boleh bersambung ke WiFi anda. Oleh itu, gunakan rangkaian tetamu dan jangan pasang QR Code rangkaian peribadi di tempat awam."],
    ["Apakah yang perlu dilakukan jika kata laluan WiFi ditukar?", "Buat dan cetak semula QR Code WiFi, kerana QR Code lama masih mengandungi kata laluan yang lama."]
  ],
  body: `
<p>Mengeja kata laluan WiFi yang panjang kepada tetamu sering kali menyusahkan, apatah lagi jika ada huruf besar, nombor dan simbol. Dengan <strong>QR Code WiFi</strong>, tetamu hanya perlu menghalakan kamera telefon ke QR Code dan terus bersambung.</p>

<h2>Cara QR Code WiFi berfungsi</h2>
<p>QR Code WiFi menyimpan nama rangkaian (SSID), jenis keselamatan dan kata laluan dalam format khas yang dikenali oleh telefon, contohnya <code>WIFI:T:WPA;S:NamaRangkaian;P:KataLaluan;;</code>. Kamera terbina dalam iPhone (iOS 11 ke atas) dan kebanyakan Android (Android 10 ke atas) boleh terus membacanya, tanpa aplikasi tambahan.</p>

<h2>Langkah membuatnya</h2>
<ol>
  <li>Buka <a href="/?type=qrcode">penjana QR Code</a> dan pilih tab <strong>WiFi</strong> pada bahagian Isi data.</li>
  <li>Taip <strong>nama rangkaian</strong> sama persis seperti yang dipaparkan dalam senarai WiFi, termasuk huruf besar dan kecilnya.</li>
  <li>Taip <strong>kata laluan</strong>, kemudian pilih jenis keselamatan. Kebanyakan penghala rumah dan pejabat menggunakan WPA/WPA2/WPA3.</li>
  <li>Tandakan <strong>Rangkaian tersembunyi</strong> jika nama WiFi anda tidak dipaparkan dalam senarai.</li>
  <li>Tambahkan bingkai bertulis, contohnya "SCAN WIFI", supaya tetamu tahu fungsinya, kemudian muat turun PNG.</li>
</ol>

<h2>Di manakah hendak memasangnya?</h2>
<ul>
  <li>Kad kecil di meja kafe atau restoran.</li>
  <li>Dinding ruang tamu, kaunter penyambut tetamu atau bilik mesyuarat pejabat.</li>
  <li>Bilik rumah tumpangan, ditampal berhampiran pintu atau TV.</li>
  <li>Bahagian bawah penghala di rumah, supaya ahli keluarga mudah menyambungkan peranti baharu.</li>
</ul>

<h2>Tip keselamatan</h2>
<ul>
  <li>Gunakan <strong>rangkaian tetamu</strong> (guest network) jika penghala anda menyokongnya, supaya tetamu tidak masuk ke rangkaian yang sama dengan komputer pejabat.</li>
  <li>Jika kata laluan WiFi ditukar, buat dan cetak semula QR Code-nya, kerana QR Code lama akan mengandungi kata laluan lama.</li>
  <li>Jangan pasang QR Code WiFi untuk rangkaian peribadi di tempat awam yang boleh difoto oleh sesiapa sahaja.</li>
</ul>

<h2>Jika QR Code tidak dapat bersambung</h2>
<p>Semak semula ejaan nama rangkaian dan kata laluan, kerana satu huruf yang salah menyebabkan telefon gagal bersambung. Pastikan juga jenis keselamatan yang dipilih sepadan dengan tetapan penghala. Untuk masalah imbasan yang lain, baca <a href="/artikel/barcode-tidak-bisa-dipindai">punca kod bar tidak boleh diimbas</a>.</p>
`
};
