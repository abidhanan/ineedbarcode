// apa-itu-barcode
module.exports = {
  title: "Gịnị Bụ Barcode? Nkọwa Ya, Otu O Si Arụ Ọrụ, na Ụdị Ya Dị Iche Iche",
  desc: "Barcode dị ihe fọrọ nke nta ka ọ bụrụ na ngwaahịa ọ bụla unu na-azụ. Matanụ otu o si arụ ọrụ, akụkọ ihe mere eme ya na mkpirikpi, na ụdị barcode a na-ejikarị eme ihe.",
  tags: ["Ntọala", "Barcode"],
  coverCaption: "Barcode dị n'ngwugwu ngwaahịa na-echekwa koodu pụrụ iche nke ngwaahịa ahụ.",
  inlineCaption: "Onye na-anata ego na-eji igwe nyocha agụ barcode n'otu ntabi anya.",
  faq: [
    ["Gịnị bụ ọdịiche dị n'etiti barcode na QR Code?", "QR Code bụ otu n'ime ụdị barcode, ya bụ barcode 2D. Barcode ahịrị (1D) na-echekwa naanị mkpụrụedemede ole na ole, a na-agụkwa ya site n'aka ekpe gaa n'aka nri, ebe QR Code na-echekwa data n'ụzọ abụọ, nke mere o nwere ike ibu njikọ, ederede, ma ọ bụ data WiFi."],
    ["Barcode ọ na-echekwa ọnụahịa ngwaahịa?", "Ọ bụghị mgbe niile. Barcode ngwaahịa nwere naanị koodu. A na-echekwa ọnụahịa na aha ngwaahịa n'ime sistemụ ịkwụ ụgwọ, wee chọta ha site na koodu e nyochara."],
    ["Ọ dị mkpa ịkwụ ụgwọ iji mepụta barcode?", "Mba. Enwere ike ịmepụta onyonyo barcode n'efu, dịka ọmụmaatụ na I Need Barcode. Naanị ihe chọrọ ndebanye aha a na-akwụ ụgwọ ya bụ nọmba gọọmentị maka barcode ngwaahịa ire ahịa dịka EAN-13 site na GS1."]
  ],
  body: `
<p>Barcode bụ ụzọ e si ede data n'ụdị usoro igwe nwere ike ịgụ. Usoro a na-abụkarị ahịrị ojii na ọcha nwere obosara dị iche iche, ma ọ bụ igbe ndị pere mpe a haziri n'ime square. Mgbe a nyochara ya, a na-asụgharị usoro ahụ ọzọ ka ọ bụrụ nọmba ma ọ bụ ederede, dịka ọmụmaatụ koodu ngwaahịa, nọmba nsochi ngwugwu, ma ọ bụ adreesị webụsaịtị.</p>
<p>N'ihi na igwe na-agụ ya, barcode na-adị ọsọ ọsọ karịa, njehie ya dịkwa obere karịa ịpị koodu n'aka. Ọ bụ ya mere e ji eji barcode eme ihe n'ebe a na-akwụ ụgwọ, n'ụlọ nkwakọba ihe, n'ụlọ ọgwụ, na tiketi, ruo na ngwugwu nri.</p>

<h2>Akụkọ mkpirikpi nke barcode</h2>
<p>Norman Joseph Woodland na Bernard Silver nwetara ikike nchọpụta (patent) maka echiche barcode n'afọ 1952 na United States. Naanị n'afọ 1974 ka a malitere iji barcode n'ụlọ ahịa n'ezie, mgbe a nyochara otu ngwugwu chịngọm n'otu nnukwu ụlọ ahịa dị na Ohio site na koodu UPC. Kemgbe ahụ, barcode agbasaala n'ụwa niile, ugbu a otu nzukọ na-ahazi ụkpụrụ a na-akpọ GS1 na-elekọta ya n'ụwa niile.</p>

<h2>Kedu otu barcode si arụ ọrụ?</h2>
<p>Igwe nyocha na-enwu ọkụ na barcode wee gụọ ọkụ na-alaghachi. Akụkụ gbara ọchịchịrị na-alaghachi obere ọkụ, akụkụ na-egbuke egbuke na-alaghachikwa ọtụtụ ọkụ. A na-agbanwe ọdịiche ahụ ka ọ bụrụ usoro nọmba 0 na 1, wee jiri ya tụnyere iwu nke ụdị barcode ahụ. Ọtụtụ barcode nwekwara <strong>nọmba nlele</strong> (check digit), ya bụ nọmba ikpeazụ a gbakọrọ site na nọmba ndị bu ya ụzọ. Ọ bụrụ na nsonaazụ ngụkọ ahụ adabaghị, igwe nyocha ga-ama na e nwere njehie, ọ ga-ajụkwa nsonaazụ ahụ.</p>
<p>Barcode n'onwe ya na-echekwakarị naanị koodu. A na-echekwa ozi dịka aha ngwaahịa ma ọ bụ ọnụahịa n'ime sistemụ ịkwụ ụgwọ ma ọ bụ nchekwa data (database), wee chọta ha site na koodu ahụ.</p>

<h2>Ụdị barcode a na-ejikarị eme ihe</h2>
<p>N'ozuzu, barcode kewara ụzọ abụọ buru ibu:</p>
<ul>
  <li><strong>Barcode 1D (nke ahịrị)</strong>: ahịrị kwụ ọtọ a na-agụ site n'aka ekpe gaa n'aka nri. Ihe atụ ha gụnyere <a href="/?type=ean13">EAN-13</a> na <a href="/?type=upca">UPC-A</a> maka ngwaahịa ire ahịa, yana <a href="/?type=code128">Code 128</a> na <a href="/?type=code39">Code 39</a> maka mbupu ngwongwo na ụlọ nkwakọba ihe.</li>
  <li><strong>Barcode 2D</strong>: usoro igbe na-echekwa data n'ụzọ abụọ, nke mere o nwere ike ibu ọtụtụ ihe karịa. Ihe atụ ha gụnyere <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, na <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Ewezuga ndị a, e nwere barcode pụrụ iche maka ozi na mbupu ngwongwo, maka ahụike, yana ụkpụrụ GS1 maka usoro ọkọnọ ngwaahịa. Unu nwere ike ịgụ nkọwa zuru ezu gbasara ọdịiche ha n'edemede <a href="/artikel/perbedaan-barcode-1d-dan-2d">Ọdịiche Dị n'Etiti Barcode 1D na 2D</a>.</p>

<h2>Gịnị ka a na-eji barcode eme?</h2>
<ul>
  <li><strong>Ire ahịa</strong>: ọ na-eme ka ịkwụ ụgwọ dị ọsọ ọsọ ma na-edekọ ngwaahịa dị n'ụlọ ahịa n'onwe ya.</li>
  <li><strong>Ụlọ nkwakọba ihe na mbupu ngwongwo</strong>: ọ na-esochi ngwongwo na ngwugwu site n'otu ebe gaa n'ebe ọzọ.</li>
  <li><strong>Tiketi na mmemme</strong>: ọ na-enyocha ma tiketi ọ bụ nke ezi site n'otu nyocha.</li>
  <li><strong>Mgbasa ozi</strong>: QR Code dị na mpempe akwụkwọ mgbasa ozi ma ọ bụ ngwugwu ngwaahịa na-ebuga ndị mmadụ ozugbo na webụsaịtị, menu, ma ọ bụ WhatsApp unu.</li>
</ul>

<h2>Ịmepụta barcode n'onwe unu</h2>
<p>Unu achọghị ngwa a na-akwụ ụgwọ iji mepụta barcode. Na <a href="/">I Need Barcode</a>, họrọnụ ụdị barcode, tinyenụ data, wee budata ya dịka onyonyo PNG. E nwere ihe karịrị ụdị 100 unu nwere ike ịhọrọ, ha niile bụkwa n'efu na-enweghị ndebanye aha.</p>
`
};
