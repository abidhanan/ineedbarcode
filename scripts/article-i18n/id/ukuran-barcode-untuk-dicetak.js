// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Ukuran dan Resolusi Barcode yang Tepat untuk Dicetak",
  desc: "Barcode yang terlalu kecil atau buram sulit dipindai. Pelajari ukuran minimum, aturan jarak pindai, dan resolusi gambar yang aman untuk dicetak.",
  tags: ["Panduan", "Cetak"],
  coverCaption: "Printer label mencetak barcode untuk paket dan kemasan.",
  inlineCaption: "Ukuran label menentukan seberapa besar barcode bisa dicetak.",
  faq: [
    ["Berapa ukuran minimum QR Code untuk dicetak?", "Untuk dipindai dari jarak dekat, sekitar 2 × 2 cm adalah batas aman. Untuk jarak yang lebih jauh, gunakan perbandingan sekitar 10 : 1 antara jarak pindai dan lebar QR Code."],
    ["Berapa ukuran standar barcode EAN-13?", "Ukuran standar EAN-13 sekitar 37,3 × 25,9 mm. Ukuran ini boleh diperkecil hingga sekitar 80% atau diperbesar hingga 200%."],
    ["Kenapa barcode buram setelah dicetak?", "Biasanya karena gambar berukuran kecil lalu diperbesar, atau disimpan sebagai JPG berkualitas rendah. Unduh dengan ukuran modul lebih besar dalam format PNG."]
  ],
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
};
