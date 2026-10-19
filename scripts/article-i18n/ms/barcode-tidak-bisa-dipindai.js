// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 Punca Kod Bar Tidak Boleh Diimbas dan Cara Mengatasinya",
  desc: "Kod bar atau QR Code gagal diimbas? Semak tujuh punca yang paling kerap berlaku, daripada kontras warna hinggalah saiz, berserta cara membaikinya.",
  tags: ["Tip", "Kod Bar"],
  coverCaption: "Kontras dan saiz menentukan sama ada QR Code mudah diimbas.",
  inlineCaption: "Di gudang, kod bar yang gagal diimbas melambatkan kerja.",
  faq: [
    ["Mengapakah QR Code boleh diimbas pada satu telefon tetapi tidak pada telefon lain?", "Kamera dan aplikasi pengimbas berbeza keupayaannya. QR Code yang terlalu kecil, kontrasnya rendah atau warnanya terbalik lebih kerap gagal pada telefon tertentu. Uji dengan beberapa telefon sebelum mencetak."],
    ["Bolehkah kod bar berwarna diimbas?", "Boleh, asalkan warnanya gelap di atas latar belakang cerah. Elakkan warna merah untuk garisan kod bar kerana banyak pengimbas juruwang menggunakan cahaya merah."],
    ["Bagaimanakah cara memeriksa sama ada kod bar sudah betul?", "Imbas hasil cetakan dengan beberapa telefon atau pengimbas, kemudian pastikan data yang dibaca sama persis dengan data yang anda masukkan."]
  ],
  body: `
<p>Tiada yang lebih menjengkelkan daripada kod bar yang sudah dicetak beratus-ratus helai tetapi ternyata tidak boleh diimbas. Berita baiknya, puncanya biasanya mudah dan senang dicegah. Berikut ialah tujuh punca yang paling kerap berlaku.</p>

<h2>1. Kontras warna terlalu rendah</h2>
<p>Pengimbas membaca perbezaan antara gelap dan cerah. Kod bar kelabu muda di atas putih, atau biru tua di atas hitam, sukar dibezakan. <strong>Penyelesaian:</strong> gunakan warna gelap di atas latar belakang cerah. Hitam di atas putih ialah pilihan paling selamat.</p>

<h2>2. Warna terbalik atau warna merah</h2>
<p>Kod bar cerah di atas latar belakang gelap tidak disokong oleh semua pengimbas. Selain itu, banyak pengimbas juruwang menggunakan cahaya merah, jadi garisan berwarna merah kelihatan sama dengan latar belakang putih. <strong>Penyelesaian:</strong> elakkan warna merah untuk garisan atau modul kod bar, dan jangan terbalikkan warnanya.</p>

<h2>3. Saiz terlalu kecil</h2>
<p>Kamera memerlukan piksel yang mencukupi untuk mengenal pasti setiap modul. <strong>Penyelesaian:</strong> besarkan kod bar. Untuk QR Code yang diimbas dari dekat, gunakan sekurang-kurangnya kira-kira 2 × 2 cm. Lihat <a href="/artikel/ukuran-barcode-untuk-dicetak">panduan saiz cetakan</a>.</p>

<h2>4. Tiada zon senyap</h2>
<p>Kod bar yang melekat pada gambar, tulisan atau tepi kertas sukar dibezakan daripada sekelilingnya. <strong>Penyelesaian:</strong> tinggalkan ruang kosong di sekeliling kod bar, terutamanya di sebelah kiri dan kanan kod bar garis.</p>

<h2>5. Imej kabur atau herot</h2>
<p>Kod bar yang dibesarkan daripada imej kecil, disimpan sebagai JPG berkualiti rendah, atau ditarik sehingga tidak berkadar akan hilang bentuknya. <strong>Penyelesaian:</strong> muat turun dengan saiz modul yang lebih besar dalam format PNG, dan sentiasa ubah saiz secara berkadar.</p>

<h2>6. Data salah atau tidak sesuai dengan jenisnya</h2>
<p>Setiap jenis kod bar mempunyai peraturan. EAN-13, misalnya, hanya menerima 12 atau 13 digit nombor dengan digit semak yang betul. Pautan yang tersalah taip juga menyebabkan QR Code boleh dibaca tetapi tidak membuka apa-apa. <strong>Penyelesaian:</strong> semak data sebelum mencetak. Penjana <a href="/">I Need Barcode</a> akan memaparkan mesej jika data tidak mematuhi peraturan jenis kod bar yang dipilih.</p>

<h2>7. Permukaan dan pencahayaan</h2>
<p>Bahan berkilat, plastik lut sinar, lipatan dan permukaan melengkung boleh memantulkan cahaya atau mengubah bentuk kod bar. <strong>Penyelesaian:</strong> cetak pada permukaan yang rata dan tidak berkilat, kemudian uji dalam keadaan cahaya yang sebenar.</p>

<h2>Tentang QR Code yang direka</h2>
<p>QR Code yang diberi bentuk, warna atau bingkai masih boleh diimbas selagi tiga petak penanda di penjurunya utuh dan kontrasnya mencukupi. Baca selanjutnya dalam <a href="/artikel/desain-qr-code-kreatif">reka bentuk QR Code kreatif yang masih boleh dibaca</a>.</p>
<p>Amalan terbaik: <strong>sentiasa uji satu cetakan</strong> dengan beberapa telefon dan pengimbas sebelum mencetak dalam jumlah yang banyak.</p>
`
};
