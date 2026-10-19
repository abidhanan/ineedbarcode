// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Bédana Barcode 1D jeung 2D: Mana anu Anjeun Butuhkeun?",
  desc: "Barcode garis jeung QR Code sarua-sarua barcode, tapi gunana béda. Bandingkeun kapasitas, cara mindai, jeung conto pamakéanana.",
  tags: ["Dasar", "Barcode"],
  coverCaption: "Pamindai genggam di gudang maca barcode 1D jeung 2D.",
  inlineCaption: "Labél pangiriman biasana maké barcode garis.",
  faq: [
    ["Naha pamindai kasir bisa maca QR Code?", "Henteu sakabéhna. Pamindai laser 1D ngan maca barcode garis. Pikeun QR Code diperlukeun pamindai 2D dumasar kaméra atawa kaméra HP."],
    ["Barcode mana anu pangleutikna?", "Data Matrix kaasup barcode 2D anu bisa dicitak leutik pisan, sahingga mindeng dipaké dina komponén éléktronik, alat kaséhatan, jeung labél ubar."],
    ["Meunang teu maké QR Code salaku gaganti EAN-13 dina produk ritel?", "Pikeun dijual di toko ritel, produk tetep merlukeun EAN-13 atawa UPC anu kadaptar. QR Code bisa ditambahkeun dina bungkusan salaku palengkep, contona pikeun informasi produk atawa promosi."]
  ],
  body: `
<p>Nalika nyieun barcode, patarosan kahiji anu biasana muncul nyaéta: maké barcode garis atawa QR Code? Duanana disebut barcode, tapi cara nyimpen datana béda sahingga gunana ogé béda.</p>

<h2>Barcode 1D (linear)</h2>
<p>Barcode 1D nyaéta barcode anu mangrupa garis-garis nangtung. Data disimpen dina hiji arah, nyaéta ti kénca ka katuhu. Conto anu pangkawentarna nyaéta <a href="/?type=ean13">EAN-13</a> dina bungkusan produk jeung <a href="/?type=code128">Code 128</a> dina labél pangiriman.</p>
<ul>
  <li>Kapasitasna leutik, biasana belasan nepi ka puluhan karakter.</li>
  <li>Bisa dibaca ku pamindai laser kasir anu murah sarta gancang pisan.</li>
  <li>Cocog pikeun kode produk, nomer séri, jeung nomer resi.</li>
</ul>

<h2>Barcode 2D</h2>
<p>Barcode 2D nyimpen data dina dua arah, ka gigir jeung ka handap, sahingga muat jauh leuwih loba. Contona <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, jeung <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Kapasitasna gedé, ti puluhan nepi ka rébuan karakter.</li>
  <li>Bisa dipindai ku kaméra HP ti sagala rupa arah.</li>
  <li>Boga koréksi kasalahan, jadi tetep kabaca sanajan sabagian ruksak.</li>
  <li>Bisa dijieun leutik pisan, contona Data Matrix dina komponén éléktronik.</li>
</ul>

<h2>Babandingan singget</h2>
<table>
  <thead><tr><th></th><th>Barcode 1D</th><th>Barcode 2D</th></tr></thead>
  <tbody>
    <tr><td>Wangun</td><td>Garis nangtung</td><td>Kotak/titik dina pasagi</td></tr>
    <tr><td>Kapasitas</td><td>Leutik</td><td>Gedé</td></tr>
    <tr><td>Alat pindai</td><td>Pamindai laser atawa kaméra</td><td>Kaméra atawa pamindai 2D</td></tr>
    <tr><td>Tahan ruksak</td><td>Kawates</td><td>Aya koréksi kasalahan</td></tr>
    <tr><td>Conto</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Iraha maké anu mana?</h2>
<ul>
  <li><strong>Produk anu dijual di toko atawa minimarket</strong>: paké EAN-13 resmi ti GS1. Tingali <a href="/artikel/cara-mendapatkan-barcode-ean-13">cara meunangkeun barcode EAN-13</a>.</li>
  <li><strong>Labél gudang, rak, atawa pangiriman</strong>: Code 128 nyaéta pilihan anu umum sabab padet sarta ngarojong hurup jeung angka.</li>
  <li><strong>Link, ménu, WiFi, atawa kontak pikeun palanggan</strong>: QR Code, sabab bisa dipindai langsung ku kaméra HP.</li>
  <li><strong>Labél anu leutik pisan</strong>: Data Matrix.</li>
  <li><strong>Kartu idéntitas, tikét kapal udara, atawa dokumén</strong>: PDF417 atawa Aztec.</li>
</ul>
<p>Sakabéh jenis di luhur bisa ku anjeun dijieun gratis di <a href="/">I Need Barcode</a>. Lamun masih ragu, mimitian ku QR Code pikeun kaperluan palanggan jeung Code 128 pikeun kaperluan internal.</p>
`
};
