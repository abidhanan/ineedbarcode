// Tanya-jawab per artikel: ditampilkan di akhir artikel & sebagai data terstruktur FAQPage.
module.exports = {
  'apa-itu-barcode': [
    ['Apa bedanya barcode dan QR Code?', 'QR Code adalah salah satu jenis barcode, yaitu barcode 2D. Barcode garis (1D) hanya menyimpan sedikit karakter dan dibaca dari kiri ke kanan, sedangkan QR Code menyimpan data ke dua arah sehingga muat link, teks, atau data WiFi.'],
    ['Apakah barcode menyimpan harga produk?', 'Biasanya tidak. Barcode produk hanya berisi kode. Harga dan nama produk disimpan di sistem kasir, lalu dicari berdasarkan kode yang dipindai.'],
    ['Apakah membuat barcode harus berbayar?', 'Tidak. Gambar barcode bisa dibuat gratis, misalnya di I Need Barcode. Yang perlu didaftarkan berbayar hanyalah nomor resmi untuk barcode produk ritel seperti EAN-13 melalui GS1.']
  ],
  'apa-itu-qr-code': [
    ['Apakah QR Code bisa kedaluwarsa?', 'QR Code statis tidak pernah kedaluwarsa karena datanya tertanam langsung di gambar. QR Code dinamis bisa berhenti bekerja jika layanan penyedia link-nya berhenti atau langganan berakhir.'],
    ['Berapa banyak data yang bisa disimpan QR Code?', 'Versi terbesar QR Code bisa menyimpan hingga 7.089 angka atau sekitar 2.953 byte. Namun, makin sedikit data, makin mudah QR Code dipindai.'],
    ['Apakah QR Code tetap terbaca jika sebagian rusak?', 'Ya. Berkat koreksi kesalahan, QR Code tetap terbaca walau sekitar 7% hingga 30% bagiannya rusak, tergantung tingkat koreksi L, M, Q, atau H yang dipakai.']
  ],
  'cara-membuat-qr-code-gratis': [
    ['Apakah QR Code yang dibuat gratis bisa dipakai untuk usaha?', 'Bisa. QR Code statis yang Anda buat bebas dipakai untuk kemasan, brosur, menu, atau materi promosi, tanpa watermark dan tanpa biaya lisensi.'],
    ['Bisakah isi QR Code diubah setelah dicetak?', 'QR Code statis tidak bisa diubah setelah dicetak. Jika isinya kemungkinan berubah, arahkan QR Code ke halaman yang isinya bisa Anda perbarui sendiri, misalnya halaman di situs Anda.'],
    ['Format gambar apa yang terbaik untuk mencetak QR Code?', 'PNG, karena tepi kotak tetap tajam. Unduh dengan ukuran modul yang cukup besar, lalu perkecil di aplikasi desain jika perlu, bukan sebaliknya.']
  ],
  'perbedaan-barcode-1d-dan-2d': [
    ['Apakah pemindai kasir bisa membaca QR Code?', 'Tidak semua. Pemindai laser 1D hanya membaca barcode garis. Untuk QR Code dibutuhkan pemindai 2D berbasis kamera atau kamera ponsel.'],
    ['Barcode mana yang paling kecil?', 'Data Matrix termasuk barcode 2D yang bisa dicetak sangat kecil, sehingga sering dipakai pada komponen elektronik, alat kesehatan, dan label obat.'],
    ['Bolehkah memakai QR Code sebagai pengganti EAN-13 di produk ritel?', 'Untuk dijual di toko ritel, produk tetap memerlukan EAN-13 atau UPC yang terdaftar. QR Code bisa ditambahkan di kemasan sebagai pelengkap, misalnya untuk informasi produk atau promosi.']
  ],
  'cara-mendapatkan-barcode-ean-13': [
    ['Bolehkah membuat nomor EAN-13 sendiri?', 'Gambar barcodenya boleh dibuat sendiri, tetapi nomornya sebaiknya resmi dari GS1. Nomor buatan sendiri bisa bentrok dengan produk lain dan ditolak toko ritel.'],
    ['Apakah setiap varian produk butuh barcode berbeda?', 'Ya. Setiap varian yang berbeda, misalnya beda rasa, ukuran, atau isi kemasan, memerlukan nomor EAN-13 sendiri.'],
    ['Apa itu digit pemeriksa pada EAN-13?', 'Digit pemeriksa adalah angka ke-13 yang dihitung dari 12 angka sebelumnya. Pemindai memakainya untuk memastikan barcode terbaca dengan benar. Generator I Need Barcode menghitungnya otomatis jika Anda memasukkan 12 digit.']
  ],
  'cara-membuat-qr-code-wifi': [
    ['Apakah semua ponsel bisa memindai QR Code WiFi?', 'Kamera bawaan iPhone dengan iOS 11 ke atas dan sebagian besar Android 10 ke atas bisa langsung membacanya. Ponsel lama mungkin memerlukan aplikasi pemindai QR.'],
    ['Apakah QR Code WiFi aman?', 'Siapa pun yang memindai QR Code itu bisa tersambung ke WiFi Anda. Karena itu, gunakan jaringan tamu dan jangan memasang QR Code jaringan pribadi di tempat umum.'],
    ['Apa yang harus dilakukan jika sandi WiFi diganti?', 'Buat dan cetak ulang QR Code WiFi, karena QR Code lama masih berisi sandi yang lama.']
  ],
  'ukuran-barcode-untuk-dicetak': [
    ['Berapa ukuran minimum QR Code untuk dicetak?', 'Untuk dipindai dari jarak dekat, sekitar 2 × 2 cm adalah batas aman. Untuk jarak yang lebih jauh, gunakan perbandingan sekitar 10 : 1 antara jarak pindai dan lebar QR Code.'],
    ['Berapa ukuran standar barcode EAN-13?', 'Ukuran standar EAN-13 sekitar 37,3 × 25,9 mm. Ukuran ini boleh diperkecil hingga sekitar 80% atau diperbesar hingga 200%.'],
    ['Kenapa barcode buram setelah dicetak?', 'Biasanya karena gambar berukuran kecil lalu diperbesar, atau disimpan sebagai JPG berkualitas rendah. Unduh dengan ukuran modul lebih besar dalam format PNG.']
  ],
  'barcode-tidak-bisa-dipindai': [
    ['Kenapa QR Code bisa dipindai di satu ponsel tetapi tidak di ponsel lain?', 'Kamera dan aplikasi pemindai berbeda kemampuannya. QR Code yang terlalu kecil, kontrasnya rendah, atau warnanya terbalik lebih sering gagal di ponsel tertentu. Uji dengan beberapa ponsel sebelum mencetak.'],
    ['Apakah barcode berwarna bisa dipindai?', 'Bisa, selama warnanya gelap di atas latar terang. Hindari warna merah untuk garis barcode karena banyak pemindai kasir memakai cahaya merah.'],
    ['Bagaimana memeriksa apakah barcode sudah benar?', 'Pindai hasil cetak dengan beberapa ponsel atau pemindai, lalu pastikan data yang terbaca sama persis dengan data yang Anda masukkan.']
  ],
  'qr-code-menu-restoran': [
    ['Apa yang sebaiknya dipakai untuk menu digital: PDF atau halaman web?', 'Halaman web biasanya lebih nyaman dibaca di HP dan lebih cepat dibuka. PDF bisa dipakai jika ukurannya kecil dan tulisannya cukup besar di layar.'],
    ['Berapa ukuran QR Code menu di meja?', 'Sekitar 3 hingga 5 cm sudah cukup untuk dipindai dari kursi. Gunakan bahan tahan tumpahan dan tidak terlalu mengilap.'],
    ['Apakah perlu mencetak ulang QR Code saat menu berubah?', 'Tidak, selama link-nya tetap sama. Cukup perbarui isi halaman atau file menu yang dituju QR Code tersebut.']
  ],
  'desain-qr-code-kreatif': [
    ['Apakah QR Code berbentuk hati tetap bisa dipindai?', 'Bisa. QR Code aslinya tetap utuh di tengah dan sisanya hanya pola hiasan. Selama kontrasnya kuat dan ukurannya cukup, QR Code tetap terbaca.'],
    ['Warna apa yang aman untuk QR Code?', 'Warna gelap seperti hitam, biru tua, hijau tua, ungu, atau cokelat tua di atas latar putih atau sangat terang.'],
    ['Apakah QR Code bisa diberi tulisan atau bingkai?', 'Bisa. Bingkai dengan ajakan seperti "PINDAI SAYA" justru membantu orang memahami fungsinya, selama bingkai tidak menutupi QR Code.']
  ]
};
