// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Ọdịiche Dị n'Etiti Barcode 1D na 2D: Kedu Nke Unu Chọrọ?",
  desc: "Barcode ahịrị na QR Code bụ barcode abụọ, mana ojiji ha dị iche. Tụlee ikike nchekwa ha, ụzọ e si enyocha ha, na ihe atụ nke ojiji ha.",
  tags: ["Ntọala", "Barcode"],
  coverCaption: "Igwe nyocha aka n'ụlọ nkwakọba ihe na-agụ barcode 1D na 2D.",
  inlineCaption: "Akara mbupu ngwongwo na-ejikarị barcode ahịrị.",
  faq: [
    ["Igwe nyocha n'ebe a na-akwụ ụgwọ ọ nwere ike ịgụ QR Code?", "Ọ bụghị ha niile. Igwe nyocha laser 1D na-agụ naanị barcode ahịrị. Maka QR Code, a chọrọ igwe nyocha 2D na-eji igwefoto ma ọ bụ igwefoto ekwentị."],
    ["Kedu barcode kachasị obere?", "Data Matrix so na barcode 2D enwere ike ibipụta n'obere nke ukwuu, ya mere a na-ejikarị ya na akụrụngwa eletrọnịkị, ngwa ahụike, na akara ọgwụ."],
    ["Enwere m ike iji QR Code dochie EAN-13 na ngwaahịa ire ahịa?", "Iji ree ya n'ụlọ ahịa, ngwaahịa ka chọrọ EAN-13 ma ọ bụ UPC e debanyere aha ya. Enwere ike itinye QR Code na ngwugwu dịka mgbakwunye, dịka ọmụmaatụ maka ozi ngwaahịa ma ọ bụ nkwalite."]
  ],
  body: `
<p>Mgbe a na-emepụta barcode, ajụjụ mbụ na-apụtakarị bụ: ọ bụ barcode ahịrị ka m ga-eji ka ọ bụ QR Code? A na-akpọ ha abụọ barcode, mana ụzọ ha si echekwa data dị iche, ya mere ojiji ha dịkwa iche.</p>

<h2>Barcode 1D (nke ahịrị)</h2>
<p>Barcode 1D bụ barcode nwere ahịrị kwụ ọtọ. A na-echekwa data n'otu ụzọ, ya bụ site n'aka ekpe gaa n'aka nri. Ihe atụ a kachasị mara bụ <a href="/?type=ean13">EAN-13</a> na ngwugwu ngwaahịa na <a href="/?type=code128">Code 128</a> na akara mbupu ngwongwo.</p>
<ul>
  <li>Ikike nchekwa dị obere, na-abụkarị mkpụrụedemede iri na ole na ole ruo iri ole na ole.</li>
  <li>Igwe nyocha laser n'ebe a na-akwụ ụgwọ dị ọnụ ala ma dị ọsọ ọsọ nke ukwuu nwere ike ịgụ ya.</li>
  <li>Ọ dabara adaba maka koodu ngwaahịa, nọmba usoro (serial), na nọmba nsochi ngwugwu.</li>
</ul>

<h2>Barcode 2D</h2>
<p>Barcode 2D na-echekwa data n'ụzọ abụọ, n'akụkụ na n'okpuru, ya mere o nwere ike ibu ọtụtụ ihe karịa. Ihe atụ ha gụnyere <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, na <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Ikike nchekwa buru ibu, site na iri ole na ole ruo na puku kwuru puku mkpụrụedemede.</li>
  <li>Igwefoto ekwentị nwere ike inyocha ya site n'akụkụ dị iche iche.</li>
  <li>O nwere mmezi njehie, ya mere a ka na-agụ ya ọ bụrụgodị na akụkụ ya mebiri emebi.</li>
  <li>Enwere ike ime ya obere nke ukwuu, dịka ọmụmaatụ Data Matrix na akụrụngwa eletrọnịkị.</li>
</ul>

<h2>Ntụnyere mkpirikpi</h2>
<table>
  <thead><tr><th></th><th>Barcode 1D</th><th>Barcode 2D</th></tr></thead>
  <tbody>
    <tr><td>Ọdịdị</td><td>Ahịrị kwụ ọtọ</td><td>Igbe/ntụpọ n'ime square</td></tr>
    <tr><td>Ikike nchekwa</td><td>Obere</td><td>Buru ibu</td></tr>
    <tr><td>Ngwa nyocha</td><td>Igwe nyocha laser ma ọ bụ igwefoto</td><td>Igwefoto ma ọ bụ igwe nyocha 2D</td></tr>
    <tr><td>Ịnagide mmebi</td><td>Nwere oke</td><td>O nwere mmezi njehie</td></tr>
    <tr><td>Ihe atụ</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Olee mgbe a ga-eji nke ọ bụla?</h2>
<ul>
  <li><strong>Ngwaahịa a na-ere n'ụlọ ahịa ma ọ bụ obere ụlọ ahịa</strong>: jiri EAN-13 gọọmentị si na GS1. Lee <a href="/artikel/cara-mendapatkan-barcode-ean-13">otu e si enweta barcode EAN-13</a>.</li>
  <li><strong>Akara ụlọ nkwakọba ihe, shelf, ma ọ bụ mbupu ngwongwo</strong>: Code 128 bụ nhọrọ a na-ahọrọkarị n'ihi na ọ dị kọmpat ma na-akwado mkpụrụedemede na nọmba.</li>
  <li><strong>Njikọ, menu, WiFi, ma ọ bụ kọntaktị maka ndị ahịa</strong>: QR Code, n'ihi na enwere ike iji igwefoto ekwentị nyochaa ya ozugbo.</li>
  <li><strong>Akara dị obere nke ukwuu</strong>: Data Matrix.</li>
  <li><strong>Kaadị njirimara, tiketi ụgbọelu, ma ọ bụ akwụkwọ</strong>: PDF417 ma ọ bụ Aztec.</li>
</ul>
<p>Unu nwere ike ịmepụta ụdị niile dị n'elu a n'efu na <a href="/">I Need Barcode</a>. Ọ bụrụ na unu ka nwere obi abụọ, malite na QR Code maka mkpa ndị ahịa na Code 128 maka mkpa n'ime ụlọ ọrụ.</p>
`
};
