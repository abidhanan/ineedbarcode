// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Ukuran lan Resolusi Barcode ingkang Pas kangge Dipuncithak",
  desc: "Barcode ingkang alit sanget utawi burem angel dipunpindai. Sinau ukuran minimal, aturan tebih pindai, lan resolusi gambar ingkang aman kangge dipuncithak.",
  tags: ["Pandhuan", "Cithak"],
  coverCaption: "Printer label nyithak barcode kangge paket lan bungkus.",
  inlineCaption: "Ukuran label nemtokaken pinten agengipun barcode ingkang saged dipuncithak.",
  faq: [
    ["Pinten ukuran minimal QR Code kangge dipuncithak?", "Kangge dipunpindai saking celak, kirang langkung 2 × 2 cm menika wates ingkang aman. Kangge tebih ingkang langkung adoh, ginakaken pambandhing kirang langkung 10 : 1 ing antawisipun tebih pindai lan ombanipun QR Code."],
    ["Pinten ukuran standar barcode EAN-13?", "Ukuran standar EAN-13 kirang langkung 37,3 × 25,9 mm. Ukuran menika kenging dipunalitaken ngantos kirang langkung 80% utawi dipunagengaken ngantos 200%."],
    ["Kenging menapa barcode burem sasampunipun dipuncithak?", "Limrahipun amargi gambaripun alit lajeng dipunagengaken, utawi dipunsimpen dados JPG ingkang kualitasipun andhap. Undhuh kanthi ukuran modul ingkang langkung ageng ing format PNG."]
  ],
  body: `
<p>Barcode ingkang katingal sae ing layar dereng tamtu saged dipunwaos sasampunipun dipuncithak. Ukuran ingkang alit sanget, resolusi ingkang andhap, utawi mangsi ingkang mbleber saged ndadosaken pemindai gagal maos. Ing ngandhap menika pandhuan supados asil cithakan panjenengan tetep saged dipunwaos.</p>

<h2>Tepangi modul</h2>
<p><strong>Modul</strong> inggih menika satuan paling alit ing barcode, inggih menika setunggal kothak alit ing QR Code utawi garis ingkang paling ciut ing barcode garis. Ukuran modul nemtokaken pinten gampilipun barcode dipunwaos. Ing <a href="/">I Need Barcode</a>, ukuran modul saged dipunatur ing perangan Setelan: saya ageng angkanipun, saya ageng lan landhep gambar ingkang dipununduh.</p>

<h2>Ukuran minimal QR Code</h2>
<ul>
  <li>Kangge dipunpindai saking celak (tuladhanipun kartu nama utawi label produk), ukuran kirang langkung <strong>2 × 2 cm</strong> menika wates ingkang aman.</li>
  <li>Ginakaken aturan pambandhing kirang langkung <strong>10 : 1</strong>: tebih pindai kinten-kinten kaping sedasa ombanipun QR Code. Kangge poster ingkang dipunpindai saking tebih 2 meter, damel QR Code minimal kirang langkung 20 cm.</li>
  <li>Saya kathah data ingkang dipunsimpen, saya kenthel polanipun, satemah mbetahaken ukuran ingkang langkung ageng.</li>
</ul>

<h2>Ukuran barcode produk</h2>
<p>Ukuran standar <a href="/?type=ean13">EAN-13</a> inggih menika kirang langkung 37,3 × 25,9 mm (100%). Ukuran menika kenging dipunalitaken ngantos kirang langkung 80% utawi dipunagengaken ngantos 200%. Singkiri ngethok inggilipun garis ngantos cendhak sanget, amargi pemindai kasir mbetahaken papan kangge maos saking maneka pojok.</p>

<h2>Resolusi gambar</h2>
<ul>
  <li>Kangge cithak, usahakaken saben modul kagambar kanthi <strong>sawetawis piksel wetah</strong>, sanes sapérangan piksel. Pilih ukuran modul ingkang langkung ageng nalika ngundhuh, lajeng alitaken ing aplikasi desain, sanes kosokwangsulipun.</li>
  <li>Singkiri ngagengaken gambar barcode ingkang alit, amargi pinggiring kothakipun badhe dados burem utawi gerigen.</li>
  <li>Simpen ing format PNG supados warni lan pinggiripun mboten risak kados ing JPG.</li>
</ul>

<h2>Zona sepi</h2>
<p>Saben barcode mbetahaken papan kosong ing sakubengipun, ingkang dipunwastani <strong>zona sepi</strong> (quiet zone). Kangge QR Code, idealipun ombanipun sekawan modul. Kangge barcode garis, papan kosong ing sisih kiwa lan tengen wigati sanget. Sampun ngantos nempelaken seratan, garis desain, utawi pinggiring bungkus celak sanget.</p>

<h2>Warni lan bahan</h2>
<ul>
  <li>Ginakaken warni peteng kangge barcode lan warni padhang kangge latar.</li>
  <li>Singkiri bahan ingkang nglimpang utawi bening, amargi pantulan cahya saged ngganggu kamera.</li>
  <li>Tansah cithak setunggal conto lan uji ngginakaken sawetawis HP utawi pemindai saderengipun nyithak kathah.</li>
</ul>
<p>Menawi barcode panjenengan taksih angel dipunpindai, priksa <a href="/artikel/barcode-tidak-bisa-dipindai">7 sebab barcode mboten saged dipunpindai</a>.</p>
`
};
