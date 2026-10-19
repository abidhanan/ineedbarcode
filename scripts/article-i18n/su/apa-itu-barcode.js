// apa-itu-barcode
module.exports = {
  title: "Naon Éta Barcode? Hartina, Cara Kerjana, jeung Jenis-jenisna",
  desc: "Barcode aya dina ampir sakabéh produk anu ku anjeun dibeuli. Kenal cara kerjana, sajarah singgetna, jeung jenis-jenis barcode anu pangmindengna dipaké.",
  tags: ["Dasar", "Barcode"],
  coverCaption: "Barcode dina bungkusan nyimpen kode unik produk.",
  inlineCaption: "Kasir maké pamindai pikeun maca barcode dina sakedapan.",
  faq: [
    ["Naon bédana barcode jeung QR Code?", "QR Code téh salah sahiji jenis barcode, nyaéta barcode 2D. Barcode garis (1D) ngan nyimpen saeutik karakter sarta dibaca ti kénca ka katuhu, sedengkeun QR Code nyimpen data ka dua arah sahingga muat link, téks, atawa data WiFi."],
    ["Naha barcode nyimpen harga produk?", "Biasana henteu. Barcode produk ngan ukur eusina kode. Harga jeung ngaran produk disimpen dina sistem kasir, tuluy dipilarian dumasar kana kode anu dipindai."],
    ["Naha nyieun barcode kudu mayar?", "Henteu. Gambar barcode bisa dijieun gratis, contona di I Need Barcode. Anu kudu didaptarkeun kalayan mayar téh ngan nomer resmi pikeun barcode produk ritel saperti EAN-13 ngaliwatan GS1."]
  ],
  body: `
<p>Barcode nyaéta cara nuliskeun data dina wangun pola anu bisa dibaca ku mesin. Éta pola biasana mangrupa garis hideung jeung bodas anu rubakna béda-béda, atawa kotak-kotak leutik anu disusun dina hiji pasagi. Nalika dipindai, éta pola ditarjamahkeun deui jadi angka atawa téks, contona kode produk, nomer resi, atawa alamat situs.</p>
<p>Ku sabab dibaca ku mesin, barcode jauh leuwih gancang sarta leuwih saeutik kasalahanana dibandingkeun jeung ngetik kode sacara manual. Éta sababna barcode dipaké di kasir, gudang, rumah sakit, tikét, nepi ka bungkusan kadaharan.</p>

<h2>Sajarah singget barcode</h2>
<p>Ide barcode dipaténkeun dina taun 1952 ku Norman Joseph Woodland jeung Bernard Silver di Amérika Serikat. Barcode kakara bener-bener dipaké di toko dina taun 1974, nalika sabungkus permén karét dipindai di hiji supermarket di Ohio maké kode UPC. Ti saprak harita, barcode sumebar ka sakuliah dunya sarta ayeuna diatur sacara global ku organisasi standar anu ngaranna GS1.</p>

<h2>Kumaha cara kerja barcode?</h2>
<p>Pamindai nyorot barcode tuluy maca pantulanana. Bagian anu poék mantulkeun saeutik cahaya, bagian anu caang mantulkeun loba cahaya. Bédana éta dirobah jadi runtuyan angka 0 jeung 1, tuluy dicocogkeun jeung aturan jenis barcode éta. Loba barcode ogé boga <strong>digit pamariksa</strong> (check digit), nyaéta angka panungtung anu diitung tina angka-angka saméméhna. Lamun hasil itunganana teu cocog, pamindai nyaho aya anu salah sarta nolak hasilna.</p>
<p>Barcode sorangan biasana ngan ukur nyimpen kode. Informasi saperti ngaran produk atawa harga disimpen dina sistem kasir atawa database, tuluy dipilarian dumasar kana éta kode.</p>

<h2>Jenis-jenis barcode anu sering dipaké</h2>
<p>Sacara umum barcode kabagi jadi dua golongan gedé:</p>
<ul>
  <li><strong>Barcode 1D (linear)</strong>: mangrupa garis-garis nangtung anu dibaca ti kénca ka katuhu. Contona <a href="/?type=ean13">EAN-13</a> jeung <a href="/?type=upca">UPC-A</a> pikeun produk ritel, kitu ogé <a href="/?type=code128">Code 128</a> jeung <a href="/?type=code39">Code 39</a> pikeun logistik jeung gudang.</li>
  <li><strong>Barcode 2D</strong>: mangrupa pola kotak anu nyimpen data ka dua arah, sahingga muat jauh leuwih loba. Contona <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, jeung <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Salian ti éta aya barcode husus pikeun pos jeung pangiriman, kaséhatan, sarta standar GS1 pikeun ranté pasokan. Katerangan anu leuwih jéntré ngeunaan bédana bisa dibaca dina artikel <a href="/artikel/perbedaan-barcode-1d-dan-2d">Bédana Barcode 1D jeung 2D</a>.</p>

<h2>Barcode téh pikeun naon waé?</h2>
<ul>
  <li><strong>Ritel</strong>: ngagancangkeun kasir jeung nyatet stok sacara otomatis.</li>
  <li><strong>Gudang jeung pangiriman</strong>: ngalacak barang jeung pakét ti hiji tempat ka tempat séjén.</li>
  <li><strong>Tikét jeung acara</strong>: mariksa kaaslian tikét ku sakali pindai.</li>
  <li><strong>Pamasaran</strong>: QR Code dina brosur atawa bungkusan mawa jalma langsung ka situs, ménu, atawa WhatsApp anjeun.</li>
</ul>

<h2>Nyieun barcode sorangan</h2>
<p>Anjeun teu butuh aplikasi anu mayar pikeun nyieun barcode. Di <a href="/">I Need Barcode</a>, pilih jenis barcode, eusian datana, tuluy undeur salaku gambar PNG. Aya leuwih ti 100 jenis anu bisa dipilih, sarta sakabéhna gratis tanpa kudu daptar.</p>
`
};
