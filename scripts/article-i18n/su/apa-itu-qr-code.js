// apa-itu-qr-code
module.exports = {
  title: "Naon Éta QR Code jeung Kumaha Cara Kerjana?",
  desc: "QR Code bisa nyimpen link, téks, nepi ka data WiFi sarta tetep kabaca sanajan sabagian ruksak. Kieu cara kerja jeung kaunggulanana.",
  tags: ["Dasar", "QR Code"],
  coverCaption: "QR Code bisa dipindai langsung ku kaméra HP.",
  inlineCaption: "Unggal QR Code diwangun ku kotak-kotak leutik hideung jeung bodas.",
  faq: [
    ["Naha QR Code bisa kadaluwarsa?", "QR Code statis moal kadaluwarsa sabab datana napel langsung dina gambar. QR Code dinamis bisa eureun jalan lamun layanan panyadia link-na eureun atawa langganana béak."],
    ["Sabaraha loba data anu bisa disimpen ku QR Code?", "Vérsi QR Code anu panggedéna bisa nyimpen nepi ka 7.089 angka atawa kira-kira 2.953 bait. Tapi, beuki saeutik datana, beuki gampang QR Code dipindai."],
    ["Naha QR Code tetep kabaca lamun sabagian ruksak?", "Enya. Berkat koréksi kasalahan, QR Code tetep kabaca sanajan kira-kira 7% nepi ka 30% bagianana ruksak, gumantung kana tingkat koréksi L, M, Q, atawa H anu dipaké."]
  ],
  body: `
<p>QR Code (Quick Response Code) nyaéta barcode 2D anu wangunna pasagi sarta diwangun ku kotak-kotak leutik hideung jeung bodas. Béda jeung barcode garis anu ngan nyimpen belasan angka, QR Code bisa nyimpen link situs, téks panjang, nomer telepon, kontak, nepi ka data jaringan WiFi.</p>
<p>QR Code dimekarkeun dina taun 1994 ku Denso Wave, pausahaan ti Jepang, pikeun ngalacak suku cadang kendaraan di pabrik. Ayeuna QR Code dipaké di mana-mana, ti mimiti pamayaran digital nepi ka ménu réstoran, sabab bisa dipindai langsung ku kaméra HP.</p>

<h2>Bagian-bagian QR Code</h2>
<ul>
  <li><strong>Tilu kotak gedé di juru</strong> (finder pattern): mantuan kaméra manggihan QR Code jeung nyaho arahna, sahingga QR Code tetep kabaca sanajan dipindai déngdék atawa tibalik.</li>
  <li><strong>Pola panyelaras</strong> (alignment pattern): kotak leutik anu mantuan maca QR Code anu bengkok atawa katingali ti sisi.</li>
  <li><strong>Wewengkon data</strong>: kotak-kotak leutik anu eusina informasi anu ku anjeun disimpen.</li>
  <li><strong>Zona tenang</strong> (quiet zone): rohangan kosong di sabudeureun QR Code sangkan gampang dipisahkeun tina latar.</li>
</ul>

<h2>Bisa nyimpen sabaraha loba data?</h2>
<p>QR Code boga 40 vérsi ukuran. Vérsi panggedéna bisa nyimpen nepi ka 7.089 angka atawa kira-kira 2.953 bait data. Dina prakna, beuki saeutik data anu disimpen, beuki gedé kotak-kotakna sarta beuki gampang QR Code dipindai. Ku kituna, link anu pondok leuwih alus batan link anu panjang pisan.</p>

<h2>Tetep kabaca sanajan ruksak</h2>
<p>QR Code maké koréksi kasalahan (error correction). Aya opat tingkat:</p>
<ul>
  <li><strong>L</strong>: data tetep bisa dipulihkeun lamun kira-kira 7% QR Code ruksak.</li>
  <li><strong>M</strong>: kira-kira 15%. Ieu pilihan anu umum tur saimbang.</li>
  <li><strong>Q</strong>: kira-kira 25%.</li>
  <li><strong>H</strong>: kira-kira 30%, cocog pikeun QR Code anu rék dibéré logo atawa dicitak di tempat anu gampang kotor.</li>
</ul>
<p>Beuki luhur tingkat koréksina, beuki loba kotak anu diperlukeun, sahingga pola QR Code katingali leuwih kandel.</p>

<h2>Naon waé anu bisa disimpen dina QR Code?</h2>
<ul>
  <li>Link situs, toko online, atawa formulir.</li>
  <li>Data WiFi, sahingga sémah bisa nyambung tanpa ngetik sandi. Tingali pituduh <a href="/artikel/cara-membuat-qr-code-wifi">QR Code WiFi</a>.</li>
  <li>Kartu nama digital (vCard), email, SMS, jeung obrolan WhatsApp.</li>
  <li>Lokasi dina peta jeung jadwal acara.</li>
</ul>

<h2>QR Code statis jeung dinamis</h2>
<p>QR Code anu dijieun langsung tina data disebut <strong>QR Code statis</strong>: eusina napel dina gambar sarta teu bisa dirobah, tapi ogé moal kadaluwarsa. QR Code <strong>dinamis</strong> eusina link pondok milik hiji layanan anu saterusna ngarahkeun ka tujuan anjeun; tujuanana bisa diganti, tapi QR Code bakal paéh lamun éta layanan eureun. Pikeun kalolobaan kaperluan, QR Code statis geus cukup sarta leuwih aman pikeun jangka panjang.</p>

<p>Hayang nyobaan? Jieun <a href="/?type=qrcode">QR Code gratis</a> ayeuna, atawa baca <a href="/artikel/cara-membuat-qr-code-gratis">cara nyieun QR Code dina 3 léngkah</a>.</p>
`
};
