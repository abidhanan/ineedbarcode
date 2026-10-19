// apa-itu-qr-code
module.exports = {
  title: "Apa Itu QR Code dan Bagaimana Cara Kerjanya?",
  desc: "QR Code bisa menyimpan link, teks, hingga data WiFi dan tetap terbaca walau sebagian rusak. Begini cara kerja dan kelebihannya.",
  tags: ["Dasar", "QR Code"],
  coverCaption: "QR Code bisa dipindai langsung dengan kamera ponsel.",
  inlineCaption: "Setiap QR Code tersusun dari kotak-kotak kecil hitam dan putih.",
  faq: [
    ["Apakah QR Code bisa kedaluwarsa?", "QR Code statis tidak pernah kedaluwarsa karena datanya tertanam langsung di gambar. QR Code dinamis bisa berhenti bekerja jika layanan penyedia link-nya berhenti atau langganan berakhir."],
    ["Berapa banyak data yang bisa disimpan QR Code?", "Versi terbesar QR Code bisa menyimpan hingga 7.089 angka atau sekitar 2.953 byte. Namun, makin sedikit data, makin mudah QR Code dipindai."],
    ["Apakah QR Code tetap terbaca jika sebagian rusak?", "Ya. Berkat koreksi kesalahan, QR Code tetap terbaca walau sekitar 7% hingga 30% bagiannya rusak, tergantung tingkat koreksi L, M, Q, atau H yang dipakai."]
  ],
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
};
