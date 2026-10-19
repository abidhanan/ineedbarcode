// desain-qr-code-kreatif
module.exports = {
  title: "Desain QR Code Kreatif yang Tetap Bisa Dipindai",
  desc: "QR Code bisa dibuat berbentuk hati, lingkaran, atau diberi bingkai dan warna. Pelajari aturan agar desainnya tetap menarik sekaligus mudah dipindai.",
  tags: ["Desain", "QR Code"],
  coverCaption: "Warna membuat QR Code lebih menarik, asal kontrasnya tetap kuat.",
  inlineCaption: "Desain QR Code sebaiknya selalu diuji sebelum dicetak.",
  faq: [
    ["Apakah QR Code berbentuk hati tetap bisa dipindai?", "Bisa. QR Code aslinya tetap utuh di tengah dan sisanya hanya pola hiasan. Selama kontrasnya kuat dan ukurannya cukup, QR Code tetap terbaca."],
    ["Warna apa yang aman untuk QR Code?", "Warna gelap seperti hitam, biru tua, hijau tua, ungu, atau cokelat tua di atas latar putih atau sangat terang."],
    ["Apakah QR Code bisa diberi tulisan atau bingkai?", "Bisa. Bingkai dengan ajakan seperti \"PINDAI SAYA\" justru membantu orang memahami fungsinya, selama bingkai tidak menutupi QR Code."]
  ],
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
};
