// apa-itu-barcode
module.exports = {
  title: "Menapa Menika Barcode? Pangertosan, Cara Kerja, lan Jinisipun",
  desc: "Barcode wonten ing meh sedaya produk ingkang panjenengan tumbas. Tepangi cara kerjanipun, sejarah cekakipun, saha jinis-jinis barcode ingkang paling asring dipunginakaken.",
  tags: ["Dhasar", "Barcode"],
  coverCaption: "Barcode ing bungkus nyimpen kode unik produk.",
  inlineCaption: "Kasir ngginakaken pemindai kangge maos barcode namung sakedhap.",
  faq: [
    ["Menapa bedanipun barcode kaliyan QR Code?", "QR Code menika salah satunggaling jinis barcode, inggih menika barcode 2D. Barcode garis (1D) namung nyimpen sekedhik karakter lan dipunwaos saking kiwa dhateng tengen, dene QR Code nyimpen data dhateng kalih arah satemah saged ngemot link, teks, utawi data WiFi."],
    ["Menapa barcode nyimpen rega produk?", "Limrahipun mboten. Barcode produk namung ngemot kode. Rega lan nami produk dipunsimpen wonten ing sistem kasir, lajeng dipunpadosi adhedhasar kode ingkang dipunpindai."],
    ["Menapa ndamel barcode kedah mbayar?", "Mboten. Gambar barcode saged dipundamel gratis, tuladhanipun wonten ing I Need Barcode. Ingkang kedah dipundaftaraken kanthi mbayar namung nomer resmi kangge barcode produk ritel kados EAN-13 lumantar GS1."]
  ],
  body: `
<p>Barcode inggih menika cara nyerat data awujud pola ingkang saged dipunwaos mesin. Pola menika limrahipun awujud garis cemeng lan pethak ingkang ombanipun benten-benten, utawi kothak-kothak alit ingkang dipuntata wonten ing salebeting persegi. Nalika dipunpindai, pola kasebut dipunterjemahaken malih dados angka utawi teks, tuladhanipun kode produk, nomer resi, utawi alamat situs.</p>
<p>Amargi dipunwaos mesin, barcode langkung cepet tebih lan langkung sekedhik lepatipun tinimbang ngetik kode kanthi manual. Pramila barcode dipunginakaken wonten ing kasir, gudhang, griya sakit, karcis, ngantos bungkus dhaharan.</p>

<h2>Sejarah cekak barcode</h2>
<p>Gagasan barcode dipunpatenaken ing taun 1952 dening Norman Joseph Woodland lan Bernard Silver ing Amerika Serikat. Barcode nembe saestu dipunginakaken ing toko ing taun 1974, nalika sabungkus permen karet dipunpindai ing satunggaling supermarket ing Ohio kanthi kode UPC. Wiwit nalika semanten, barcode sumebar dhateng sadaya donya lan samenika dipuntata sacara global dening organisasi standar ingkang namanipun GS1.</p>

<h2>Kados pundi cara kerja barcode?</h2>
<p>Pemindai nyorot barcode lajeng maos pantulanipun. Perangan ingkang peteng mantulaken cahya sekedhik, perangan ingkang padhang mantulaken cahya kathah. Bentenipun kasebut dipunewahi dados rerangkening angka 0 lan 1, lajeng dipuncocogaken kaliyan aturan jinis barcode kasebut. Kathah barcode ugi gadhah <strong>digit pamriksa</strong> (check digit), inggih menika angka pungkasan ingkang dipunetang saking angka-angka saderengipun. Menawi asil etanganipun mboten cocog, pemindai mangertos wonten ingkang lepat lan nolak asilipun.</p>
<p>Barcode piyambak limrahipun namung nyimpen kode. Informasi kados nami produk utawi rega dipunsimpen wonten ing sistem kasir utawi database, lajeng dipunpadosi adhedhasar kode kasebut.</p>

<h2>Jinis-jinis barcode ingkang asring dipunginakaken</h2>
<p>Sacara umum barcode kaperang dados kalih golongan ageng:</p>
<ul>
  <li><strong>Barcode 1D (linear)</strong>: awujud garis-garis vertikal ingkang dipunwaos saking kiwa dhateng tengen. Tuladhanipun <a href="/?type=ean13">EAN-13</a> lan <a href="/?type=upca">UPC-A</a> kangge produk ritel, ugi <a href="/?type=code128">Code 128</a> lan <a href="/?type=code39">Code 39</a> kangge logistik lan gudhang.</li>
  <li><strong>Barcode 2D</strong>: awujud pola kothak ingkang nyimpen data dhateng kalih arah, satemah saged ngemot langkung kathah. Tuladhanipun <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, lan <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Sanesipun menika wonten barcode mligi kangge pos lan pangiriman, kasarasan, saha standar GS1 kangge ranté pasokan. Andharan ingkang langkung rinci bab bentenipun saged panjenengan waos ing artikel <a href="/artikel/perbedaan-barcode-1d-dan-2d">Bentenipun Barcode 1D lan 2D</a>.</p>

<h2>Barcode kangge menapa kemawon?</h2>
<ul>
  <li><strong>Ritel</strong>: nyepetaken kasir lan nyathet stok kanthi otomatis.</li>
  <li><strong>Gudhang lan pangiriman</strong>: nglacak barang lan paket saking satunggaling papan dhateng papan sanesipun.</li>
  <li><strong>Karcis lan acara</strong>: mriksa keaslian karcis kanthi sapisan pindai.</li>
  <li><strong>Pemasaran</strong>: QR Code ing brosur utawi bungkus mbekta tiyang langsung dhateng situs, menu, utawi WhatsApp panjenengan.</li>
</ul>

<h2>Ndamel barcode piyambak</h2>
<p>Panjenengan mboten betah aplikasi ingkang mbayar kangge ndamel barcode. Wonten ing <a href="/">I Need Barcode</a>, pilih jinis barcode, isi datanipun, lajeng undhuh dados gambar PNG. Wonten langkung saking 100 jinis ingkang saged dipunpilih, lan sedayanipun gratis tanpa ndaftar.</p>
`
};
