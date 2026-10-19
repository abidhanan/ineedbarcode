// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 Penyebab Barcode Tidak Bisa Dipindai dan Cara Mengatasinya",
  desc: "Barcode atau QR Code gagal dipindai? Cek tujuh penyebab yang paling sering terjadi, dari kontras warna hingga ukuran, beserta cara memperbaikinya.",
  tags: ["Tips", "Barcode"],
  coverCaption: "Kontras dan ukuran menentukan apakah QR Code mudah dipindai.",
  inlineCaption: "Di gudang, barcode yang gagal dipindai memperlambat pekerjaan.",
  faq: [
    ["Kenapa QR Code bisa dipindai di satu ponsel tetapi tidak di ponsel lain?", "Kamera dan aplikasi pemindai berbeda kemampuannya. QR Code yang terlalu kecil, kontrasnya rendah, atau warnanya terbalik lebih sering gagal di ponsel tertentu. Uji dengan beberapa ponsel sebelum mencetak."],
    ["Apakah barcode berwarna bisa dipindai?", "Bisa, selama warnanya gelap di atas latar terang. Hindari warna merah untuk garis barcode karena banyak pemindai kasir memakai cahaya merah."],
    ["Bagaimana memeriksa apakah barcode sudah benar?", "Pindai hasil cetak dengan beberapa ponsel atau pemindai, lalu pastikan data yang terbaca sama persis dengan data yang Anda masukkan."]
  ],
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
};
