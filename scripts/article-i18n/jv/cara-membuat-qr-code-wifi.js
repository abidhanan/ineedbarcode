// cara-membuat-qr-code-wifi
module.exports = {
  title: "Cara Ndamel QR Code WiFi supados Tamu Mboten Perlu Ngetik Sandi",
  desc: "Tamu cekap mindai QR Code kangge nyambung dhateng WiFi. Cocog kangge kafe, kantor, penginapan, lan griya. Mekaten cara ndamel lan masangipun.",
  tags: ["Pandhuan", "QR Code"],
  coverCaption: "Data WiFi saking router saged dipunsimpen ing setunggal QR Code.",
  inlineCaption: "Tamu kafe saged langsung nyambung tanpa ngetik sandi.",
  faq: [
    ["Menapa sedaya HP saged mindai QR Code WiFi?", "Kamera bawaan iPhone kanthi iOS 11 utawi langkung enggal lan kathah-kathahipun Android 10 utawi langkung enggal saged langsung maos. HP ingkang lami mbokmenawi mbetahaken aplikasi pemindai QR."],
    ["Menapa QR Code WiFi aman?", "Sinten kemawon ingkang mindai QR Code kasebut saged nyambung dhateng WiFi panjenengan. Pramila, ginakaken jaringan tamu lan sampun ngantos masang QR Code jaringan pribadi ing papan umum."],
    ["Menapa ingkang kedah dipuntindakaken menawi sandi WiFi dipungantos?", "Damel lan cithak malih QR Code WiFi, amargi QR Code ingkang lami taksih ngemot sandi ingkang lami."]
  ],
  body: `
<p>Ngeja sandi WiFi ingkang panjang dhateng tamu asring ngrepoti, langkung-langkung menawi wonten aksara ageng, angka, lan simbol. Kanthi <strong>QR Code WiFi</strong>, tamu cekap ngarahaken kamera HP dhateng QR Code lajeng langsung nyambung.</p>

<h2>Cara kerja QR Code WiFi</h2>
<p>QR Code WiFi nyimpen nami jaringan (SSID), jinis kaamanan, lan sandi ing format mligi ingkang dipuntepangi HP, tuladhanipun <code>WIFI:T:WPA;S:NamiJaringan;P:Sandi;;</code>. Kamera bawaan iPhone (iOS 11 utawi langkung enggal) lan kathah-kathahipun Android (Android 10 utawi langkung enggal) saged langsung maos, tanpa aplikasi tambahan.</p>

<h2>Langkah ndamelipun</h2>
<ol>
  <li>Bikak <a href="/?type=qrcode">generator QR Code</a> lan pilih tab <strong>WiFi</strong> ing perangan Isi data.</li>
  <li>Ketik <strong>nami jaringan</strong> plek kados ingkang medal ing daftar WiFi, kalebet aksara ageng lan alitipun.</li>
  <li>Ketik <strong>sandi</strong>, lajeng pilih jinis kaamanan. Kathah-kathahipun router griya lan kantor ngginakaken WPA/WPA2/WPA3.</li>
  <li>Centhang <strong>Jaringan ingkang kasingidaken</strong> menawi nami WiFi panjenengan mboten katampilaken ing daftar.</li>
  <li>Tambahaken bingkai kanthi seratan tuladhanipun "SCAN WIFI" supados tamu mangertos ginanipun, lajeng undhuh PNG.</li>
</ol>

<h2>Wonten pundi masangipun?</h2>
<ul>
  <li>Kartu alit ing meja kafe utawi restoran.</li>
  <li>Tembok ruang tamu, resepsionis, utawi ruang rapat kantor.</li>
  <li>Kamar penginapan, dipuntempel ing celakipun kori utawi TV.</li>
  <li>Perangan ngandhap router ing griya, supados kulawarga gampil nyambungaken piranti enggal.</li>
</ul>

<h2>Tips kaamanan</h2>
<ul>
  <li>Ginakaken <strong>jaringan tamu</strong> (guest network) menawi router panjenengan ndhukung, satemah tamu mboten mlebet ing jaringan ingkang sami kaliyan komputer kantor.</li>
  <li>Menawi sandi WiFi dipungantos, damel lan cithak malih QR Code-ipun, amargi QR Code ingkang lami badhe ngemot sandi ingkang lami.</li>
  <li>Sampun ngantos masang QR Code WiFi kangge jaringan pribadi ing papan umum ingkang saged dipunfoto dening sinten kemawon.</li>
</ul>

<h2>Menawi QR Code mboten saged nyambung</h2>
<p>Priksa malih ejaan nami jaringan lan sandi, amargi setunggal aksara ingkang lepat ndadosaken HP gagal nyambung. Pesthekaken ugi jinis kaamanan ingkang dipunpilih jumbuh kaliyan setelan router. Kangge prekawis pamindaian sanesipun, waos <a href="/artikel/barcode-tidak-bisa-dipindai">sebab barcode mboten saged dipunpindai</a>.</p>
`
};
