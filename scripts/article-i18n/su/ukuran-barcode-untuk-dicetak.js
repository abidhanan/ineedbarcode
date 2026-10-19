// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Ukuran jeung Résolusi Barcode anu Pas pikeun Dicitak",
  desc: "Barcode anu leutik teuing atawa buram hésé dipindai. Diajar ukuran minimum, aturan jarak pindai, jeung résolusi gambar anu aman pikeun dicitak.",
  tags: ["Pituduh", "Citak"],
  coverCaption: "Printer labél nyitak barcode pikeun pakét jeung bungkusan.",
  inlineCaption: "Ukuran labél nangtukeun sabaraha gedé barcode bisa dicitak.",
  faq: [
    ["Sabaraha ukuran minimum QR Code pikeun dicitak?", "Pikeun dipindai ti jarak deukeut, kira-kira 2 × 2 cm nyaéta wates anu aman. Pikeun jarak anu leuwih jauh, paké babandingan kira-kira 10 : 1 antara jarak pindai jeung rubak QR Code."],
    ["Sabaraha ukuran standar barcode EAN-13?", "Ukuran standar EAN-13 kira-kira 37,3 × 25,9 mm. Ukuran ieu meunang dileutikan nepi ka kira-kira 80% atawa digedékeun nepi ka 200%."],
    ["Naha barcode buram sanggeus dicitak?", "Biasana sabab gambarna ukuranana leutik tuluy digedékeun, atawa disimpen salaku JPG anu kualitasna handap. Undeur ku ukuran modul anu leuwih gedé dina format PNG."]
  ],
  body: `
<p>Barcode anu katingali alus dina layar can tangtu kabaca sanggeus dicitak. Ukuran anu leutik teuing, résolusi anu handap, atawa mangsi anu ngalémbéréh bisa ngajadikeun pamindai gagal maca. Ieu di handap pituduh sangkan hasil citakan anjeun tetep kabaca.</p>

<h2>Kenal modul</h2>
<p><strong>Modul</strong> nyaéta hijian pangleutikna dina barcode, nyaéta hiji kotak leutik dina QR Code atawa garis pangheureutna dina barcode garis. Ukuran modul nangtukeun sabaraha gampang barcode dibaca. Di <a href="/">I Need Barcode</a>, ukuran modul bisa diatur dina bagian Setélan: beuki gedé nilaina, beuki gedé sarta seukeut gambar anu diundeur.</p>

<h2>Ukuran minimum QR Code</h2>
<ul>
  <li>Pikeun dipindai ti jarak deukeut (contona kartu nama atawa labél produk), ukuran kira-kira <strong>2 × 2 cm</strong> nyaéta wates anu aman.</li>
  <li>Paké aturan babandingan kira-kira <strong>10 : 1</strong>: jarak pindai kira-kira sapuluh kali rubak QR Code. Pikeun poster anu dipindai ti jarak 2 méter, jieun QR Code sahenteuna kira-kira 20 cm.</li>
  <li>Beuki loba data anu disimpen, beuki kandel polana, sahingga butuh ukuran anu leuwih gedé.</li>
</ul>

<h2>Ukuran barcode produk</h2>
<p>Ukuran standar <a href="/?type=ean13">EAN-13</a> nyaéta kira-kira 37,3 × 25,9 mm (100%). Ukuran ieu meunang dileutikan nepi ka kira-kira 80% atawa digedékeun nepi ka 200%. Hindarkeun motong jangkungna garis pondok teuing, sabab pamindai kasir butuh rohangan pikeun maca ti sagala rupa sudut.</p>

<h2>Résolusi gambar</h2>
<ul>
  <li>Pikeun citakan, usahakeun unggal modul kagambar ku <strong>sababaraha piksel pinuh</strong>, lain sabagian piksel. Pilih ukuran modul anu leuwih gedé waktu ngundeur, tuluy leutikan dina aplikasi désain, lain sabalikna.</li>
  <li>Hindarkeun ngagedékeun gambar barcode anu leutik, sabab sisi kotakna bakal jadi buram atawa gerigi.</li>
  <li>Simpen dina format PNG sangkan warna jeung sisina teu ruksak saperti dina JPG.</li>
</ul>

<h2>Zona tenang</h2>
<p>Unggal barcode butuh rohangan kosong di sabudeureunana, anu disebut <strong>zona tenang</strong> (quiet zone). Pikeun QR Code, idéalna sarubak opat modul. Pikeun barcode garis, rohangan kosong di kénca jeung katuhu penting pisan. Ulah napelkeun tulisan, garis désain, atawa sisi bungkusan deukeut teuing.</p>

<h2>Warna jeung bahan</h2>
<ul>
  <li>Paké warna poék pikeun barcode jeung warna caang pikeun latar.</li>
  <li>Hindarkeun bahan anu hérang atawa bening, sabab pantulan cahaya bisa ngaganggu kaméra.</li>
  <li>Salawasna citak hiji conto sarta uji maké sababaraha HP atawa pamindai saméméh nyitak loba.</li>
</ul>
<p>Lamun barcode anjeun tetep hésé dipindai, pariksa <a href="/artikel/barcode-tidak-bisa-dipindai">7 sabab barcode teu bisa dipindai</a>.</p>
`
};
