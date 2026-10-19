// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Saiz dan Resolusi Kod Bar yang Tepat untuk Dicetak",
  desc: "Kod bar yang terlalu kecil atau kabur sukar diimbas. Pelajari saiz minimum, peraturan jarak imbasan dan resolusi imej yang selamat untuk dicetak.",
  tags: ["Panduan", "Cetakan"],
  coverCaption: "Pencetak label mencetak kod bar untuk bungkusan dan pembungkusan.",
  inlineCaption: "Saiz label menentukan sebesar mana kod bar boleh dicetak.",
  faq: [
    ["Berapakah saiz minimum QR Code untuk dicetak?", "Untuk diimbas dari jarak dekat, kira-kira 2 × 2 cm ialah had selamat. Untuk jarak yang lebih jauh, gunakan nisbah kira-kira 10 : 1 antara jarak imbasan dan lebar QR Code."],
    ["Berapakah saiz piawai kod bar EAN-13?", "Saiz piawai EAN-13 ialah kira-kira 37.3 × 25.9 mm. Saiz ini boleh dikecilkan hingga kira-kira 80% atau dibesarkan hingga 200%."],
    ["Mengapakah kod bar kabur selepas dicetak?", "Biasanya kerana imej bersaiz kecil kemudian dibesarkan, atau disimpan sebagai JPG berkualiti rendah. Muat turun dengan saiz modul yang lebih besar dalam format PNG."]
  ],
  body: `
<p>Kod bar yang kelihatan cantik pada skrin belum tentu boleh dibaca setelah dicetak. Saiz yang terlalu kecil, resolusi yang rendah atau dakwat yang merebak boleh menyebabkan pengimbas gagal membacanya. Berikut ialah panduan supaya hasil cetakan anda masih boleh dibaca.</p>

<h2>Kenali modul</h2>
<p><strong>Modul</strong> ialah unit terkecil kod bar, iaitu satu petak kecil pada QR Code atau garisan tersempit pada kod bar garis. Saiz modul menentukan sejauh mana kod bar mudah dibaca. Di <a href="/">I Need Barcode</a>, saiz modul boleh dilaraskan pada bahagian Tetapan: semakin besar nilainya, semakin besar dan tajam imej yang dimuat turun.</p>

<h2>Saiz minimum QR Code</h2>
<ul>
  <li>Untuk diimbas dari jarak dekat (contohnya kad nama atau label produk), saiz kira-kira <strong>2 × 2 cm</strong> ialah had selamat.</li>
  <li>Gunakan peraturan nisbah kira-kira <strong>10 : 1</strong>: jarak imbasan lebih kurang sepuluh kali lebar QR Code. Untuk poster yang diimbas dari jarak 2 meter, buat QR Code sekurang-kurangnya kira-kira 20 cm.</li>
  <li>Semakin banyak data yang disimpan, semakin padat coraknya, jadi saiz yang lebih besar diperlukan.</li>
</ul>

<h2>Saiz kod bar produk</h2>
<p>Saiz piawai <a href="/?type=ean13">EAN-13</a> ialah kira-kira 37.3 × 25.9 mm (100%). Saiz ini boleh dikecilkan hingga kira-kira 80% atau dibesarkan hingga 200%. Elakkan memotong ketinggian garisan terlalu pendek, kerana pengimbas juruwang memerlukan ruang untuk membaca dari pelbagai sudut.</p>

<h2>Resolusi imej</h2>
<ul>
  <li>Untuk cetakan, pastikan setiap modul dilukis dengan <strong>beberapa piksel penuh</strong>, bukan sebahagian piksel. Pilih saiz modul yang lebih besar semasa memuat turun, kemudian kecilkan dalam aplikasi reka bentuk, bukan sebaliknya.</li>
  <li>Elakkan membesarkan imej kod bar yang kecil, kerana tepi petaknya akan menjadi kabur atau bergerigi.</li>
  <li>Simpan dalam format PNG supaya warna dan tepinya tidak rosak seperti pada JPG.</li>
</ul>

<h2>Zon senyap</h2>
<p>Setiap kod bar memerlukan ruang kosong di sekelilingnya, yang dipanggil <strong>zon senyap</strong> (quiet zone). Untuk QR Code, idealnya selebar empat modul. Untuk kod bar garis, ruang kosong di sebelah kiri dan kanan amat penting. Jangan letakkan tulisan, garisan reka bentuk atau tepi pembungkusan terlalu dekat.</p>

<h2>Warna dan bahan</h2>
<ul>
  <li>Gunakan warna gelap untuk kod bar dan warna cerah untuk latar belakang.</li>
  <li>Elakkan bahan yang berkilat atau lut sinar, kerana pantulan cahaya boleh mengganggu kamera.</li>
  <li>Sentiasa cetak satu contoh dan uji dengan beberapa telefon atau pengimbas sebelum mencetak dalam jumlah yang banyak.</li>
</ul>
<p>Jika kod bar anda masih sukar diimbas, semak <a href="/artikel/barcode-tidak-bisa-dipindai">7 punca kod bar tidak boleh diimbas</a>.</p>
`
};
