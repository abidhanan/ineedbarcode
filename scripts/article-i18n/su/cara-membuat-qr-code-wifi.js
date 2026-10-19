// cara-membuat-qr-code-wifi
module.exports = {
  title: "Cara Nyieun QR Code WiFi sangkan Sémah Teu Kudu Ngetik Sandi",
  desc: "Sémah cukup mindai QR Code pikeun nyambung ka WiFi. Cocog pikeun kafé, kantor, panginepan, jeung imah. Kieu cara nyieun jeung masangna.",
  tags: ["Pituduh", "QR Code"],
  coverCaption: "Data WiFi tina router bisa disimpen dina hiji QR Code.",
  inlineCaption: "Sémah kafé bisa langsung nyambung tanpa ngetik sandi.",
  faq: [
    ["Naha sakabéh HP bisa mindai QR Code WiFi?", "Kaméra bawaan iPhone kalayan iOS 11 ka luhur jeung kalolobaan Android 10 ka luhur bisa langsung macana. HP heubeul meureun merlukeun aplikasi pamindai QR."],
    ["Naha QR Code WiFi aman?", "Saha waé anu mindai éta QR Code bisa nyambung ka WiFi anjeun. Ku kituna, paké jaringan sémah sarta ulah masang QR Code jaringan pribadi di tempat umum."],
    ["Naon anu kudu dilakukeun lamun sandi WiFi diganti?", "Jieun tur citak deui QR Code WiFi, sabab QR Code heubeul masih eusina sandi anu heubeul."]
  ],
  body: `
<p>Ngéja sandi WiFi anu panjang ka sémah mindeng ngarépotkeun, komo lamun aya hurup gedé, angka, jeung simbol. Ku <strong>QR Code WiFi</strong>, sémah cukup ngarahkeun kaméra HP ka QR Code tuluy langsung nyambung.</p>

<h2>Cara kerja QR Code WiFi</h2>
<p>QR Code WiFi nyimpen ngaran jaringan (SSID), jenis kaamanan, jeung sandi dina format husus anu dipikawanoh ku HP, contona <code>WIFI:T:WPA;S:NgaranJaringan;P:Sandi;;</code>. Kaméra bawaan iPhone (iOS 11 ka luhur) jeung kalolobaan Android (Android 10 ka luhur) bisa langsung macana, tanpa aplikasi tambahan.</p>

<h2>Léngkah nyieunna</h2>
<ol>
  <li>Buka <a href="/?type=qrcode">generator QR Code</a> sarta pilih tab <strong>WiFi</strong> dina bagian Eusi data.</li>
  <li>Ketik <strong>ngaran jaringan</strong> persis saperti anu némbongan dina daptar WiFi, kaasup hurup gedé jeung leutikna.</li>
  <li>Ketik <strong>sandi</strong>, tuluy pilih jenis kaamanan. Kalolobaan router imah jeung kantor maké WPA/WPA2/WPA3.</li>
  <li>Centang <strong>Jaringan disumputkeun</strong> lamun ngaran WiFi anjeun teu ditémbongkeun dina daptar.</li>
  <li>Tambahkeun bingkai anu tulisanana contona "SCAN WIFI" sangkan sémah nyaho fungsina, tuluy undeur PNG.</li>
</ol>

<h2>Di mana masangna?</h2>
<ul>
  <li>Kartu leutik dina méja kafé atawa réstoran.</li>
  <li>Témbok rohangan tamu, résépsionis, atawa rohangan rapat kantor.</li>
  <li>Kamar panginepan, ditempelkeun deukeut panto atawa TV.</li>
  <li>Bagian handap router di imah, sangkan kulawarga gampang nyambungkeun alat anyar.</li>
</ul>

<h2>Tips kaamanan</h2>
<ul>
  <li>Paké <strong>jaringan sémah</strong> (guest network) lamun router anjeun ngarojong, sahingga sémah teu asup ka jaringan anu sarua jeung komputer kantor.</li>
  <li>Lamun sandi WiFi diganti, jieun tur citak deui QR Code-na, sabab QR Code heubeul bakal eusina sandi heubeul.</li>
  <li>Ulah masang QR Code WiFi pikeun jaringan pribadi di tempat umum anu bisa dipoto ku saha waé.</li>
</ul>

<h2>Lamun QR Code teu nyambung</h2>
<p>Pariksa deui éjahan ngaran jaringan jeung sandi, sabab hiji hurup anu salah ngajadikeun HP gagal nyambung. Pastikeun ogé jenis kaamanan anu dipilih luyu jeung setélan router. Pikeun masalah mindai séjénna, baca <a href="/artikel/barcode-tidak-bisa-dipindai">sabab barcode teu bisa dipindai</a>.</p>
`
};
