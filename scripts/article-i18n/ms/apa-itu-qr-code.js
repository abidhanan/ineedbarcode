// apa-itu-qr-code
module.exports = {
  title: "Apakah Itu QR Code dan Bagaimanakah Ia Berfungsi?",
  desc: "QR Code boleh menyimpan pautan, teks hinggalah maklumat WiFi dan masih boleh dibaca walaupun sebahagiannya rosak. Begini cara ia berfungsi dan kelebihannya.",
  tags: ["Asas", "QR Code"],
  coverCaption: "QR Code boleh diimbas terus dengan kamera telefon.",
  inlineCaption: "Setiap QR Code terdiri daripada petak-petak kecil hitam dan putih.",
  faq: [
    ["Bolehkah QR Code tamat tempoh?", "QR Code statik tidak pernah tamat tempoh kerana datanya tertanam terus dalam imej. QR Code dinamik boleh berhenti berfungsi jika perkhidmatan penyedia pautannya ditamatkan atau langganan berakhir."],
    ["Berapa banyak data yang boleh disimpan oleh QR Code?", "Versi QR Code yang terbesar boleh menyimpan sehingga 7,089 digit atau kira-kira 2,953 bait. Namun, semakin sedikit data, semakin mudah QR Code diimbas."],
    ["Adakah QR Code masih boleh dibaca jika sebahagiannya rosak?", "Ya. Berkat pembetulan ralat, QR Code masih boleh dibaca walaupun kira-kira 7% hingga 30% bahagiannya rosak, bergantung pada tahap pembetulan L, M, Q atau H yang digunakan."]
  ],
  body: `
<p>QR Code (Quick Response Code) ialah kod bar 2D berbentuk segi empat sama yang terdiri daripada petak-petak kecil hitam dan putih. Berbeza dengan kod bar garis yang hanya menyimpan belasan digit, QR Code boleh menyimpan pautan laman web, teks panjang, nombor telefon, kenalan hinggalah maklumat rangkaian WiFi.</p>
<p>QR Code dibangunkan pada tahun 1994 oleh Denso Wave, sebuah syarikat Jepun, untuk menjejak alat ganti kenderaan di kilang. Kini QR Code digunakan di mana-mana, daripada pembayaran digital hinggalah menu restoran, kerana ia boleh diimbas terus dengan kamera telefon.</p>

<h2>Bahagian-bahagian QR Code</h2>
<ul>
  <li><strong>Tiga petak besar di penjuru</strong> (finder pattern): membantu kamera mengesan QR Code dan mengetahui arahnya, supaya QR Code masih boleh dibaca walaupun diimbas secara senget atau terbalik.</li>
  <li><strong>Corak penjajaran</strong> (alignment pattern): petak kecil yang membantu membaca QR Code yang terlipat atau dilihat dari sudut tertentu.</li>
  <li><strong>Kawasan data</strong>: petak-petak kecil yang mengandungi maklumat yang anda simpan.</li>
  <li><strong>Zon senyap</strong> (quiet zone): ruang kosong di sekeliling QR Code supaya mudah dibezakan daripada latar belakang.</li>
</ul>

<h2>Berapa banyak data yang boleh disimpan?</h2>
<p>QR Code mempunyai 40 versi saiz. Versi terbesar boleh menyimpan sehingga 7,089 digit atau kira-kira 2,953 bait data. Dalam amalan, semakin sedikit data yang disimpan, semakin besar petak-petaknya dan semakin mudah QR Code diimbas. Oleh itu, pautan yang pendek adalah lebih baik daripada pautan yang sangat panjang.</p>

<h2>Masih boleh dibaca walaupun rosak</h2>
<p>QR Code menggunakan pembetulan ralat (error correction). Terdapat empat tahap:</p>
<ul>
  <li><strong>L</strong>: data masih boleh dipulihkan jika kira-kira 7% QR Code rosak.</li>
  <li><strong>M</strong>: kira-kira 15%. Ini pilihan yang biasa dan seimbang.</li>
  <li><strong>Q</strong>: kira-kira 25%.</li>
  <li><strong>H</strong>: kira-kira 30%, sesuai untuk QR Code yang akan diletakkan logo atau dicetak di tempat yang mudah kotor.</li>
</ul>
<p>Semakin tinggi tahap pembetulannya, semakin banyak petak yang diperlukan, jadi corak QR Code kelihatan lebih padat.</p>

<h2>Apakah yang boleh disimpan dalam QR Code?</h2>
<ul>
  <li>Pautan laman web, kedai dalam talian atau borang.</li>
  <li>Maklumat WiFi, supaya tetamu boleh bersambung tanpa menaip kata laluan. Lihat panduan <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a>.</li>
  <li>Kad nama digital (vCard), e-mel, SMS dan sembang WhatsApp.</li>
  <li>Lokasi pada peta dan jadual acara.</li>
</ul>

<h2>QR Code statik dan dinamik</h2>
<p>QR Code yang dibuat terus daripada data dipanggil <strong>QR Code statik</strong>: kandungannya tertanam dalam imej dan tidak boleh diubah, tetapi ia juga tidak pernah tamat tempoh. QR Code <strong>dinamik</strong> mengandungi pautan pendek milik sesuatu perkhidmatan yang kemudiannya menghala ke destinasi anda; destinasinya boleh ditukar, tetapi QR Code akan mati jika perkhidmatan itu ditamatkan. Untuk kebanyakan keperluan, QR Code statik sudah memadai dan lebih selamat untuk jangka panjang.</p>

<p>Ingin mencuba? Buat <a href="/?type=qrcode">QR Code percuma</a> sekarang, atau baca <a href="/artikel/cara-membuat-qr-code-gratis">cara membuat QR Code dalam 3 langkah</a>.</p>
`
};
