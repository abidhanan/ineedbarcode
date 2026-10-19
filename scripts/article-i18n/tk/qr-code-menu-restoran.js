// qr-code-menu-restoran
module.exports = {
  title: "Restoran menýusy üçin QR Code: doly gollanma",
  desc: "QR Code arkaly sanly menýu müşderilere amatlylyk döredýär we çap çykdajylaryny tygşytlaýar. Ony döretmegiň, menýuny taýýarlamagyň we stollarda ýerleşdirmegiň usuly şeýle.",
  tags: ["Biznes", "QR Code"],
  coverCaption: "Stoldaky QR Code müşderini göni sanly menýa alyp barýar.",
  inlineCaption: "QR Code-y oturgyçdan aňsat ýetip bolýan ýerde goýuň.",
  faq: [
    ["Sanly menýu üçin näme ulanmak gowy: PDF-mi ýa-da web sahypasy?", "Web sahypasyny adatça telefonda okamak has amatly we ol has çalt açylýar. PDF-i, eger onuň ölçegi kiçi we ekranda ýazgylary ýeterlik uly bolsa, ulanyp bolýar."],
    ["Stoldaky menýu QR Code-y näçe ululykda bolmaly?", "Oturgyçdan skanerlemek üçin takmynan 3-den 5 sm-e çenli ýeterlik. Dökülen zatlara çydamly we aşa ýalpyldawuk bolmadyk material ulanyň."],
    ["Menýu üýtgände QR Code-y täzeden çap etmeli bolarmy?", "Ýok, eger salgysy şol bir bolup galsa. QR Code-yň alyp barýan sahypasynyň ýa-da menýu faýlynyň mazmunyny täzelemek ýeterlik."]
  ],
  body: `
<p>QR Code arkaly sanly menýu häzir kafelerde we restoranlarda adaty zada öwrüldi. Tagamlaryň sanawyny, bahalaryny we suratlaryny görmek üçin müşderä stoldaky QR Code-y skanerlemek ýeterlik. Iş eýesi üçin bu usul çap çykdajylaryny tygşytlaýar we bahalary ýa-da menýuny üýtgetmegi aňsatlaşdyrýar.</p>

<h2>QR Code menýusynyň artykmaçlyklary</h2>
<ul>
  <li><strong>Aňsat täzelenýär</strong>: menýu kitabyny täzeden çap etmezden bahalary üýtgediň ýa-da täze tagamlary goşuň.</li>
  <li><strong>Çykdajylary tygşytlaýar</strong>: her stol üçin kiçijik QR Code çap etmek ýeterlik.</li>
  <li><strong>Has köp maglumat berýär</strong>: suratlary, düşündirişleri we ajy ýa-da wegetarian ýaly bellikleri görkeziň.</li>
  <li><strong>Onlaýn sargyt etmegi goldaýar</strong>: müşderileri sargyt formasyna ýa-da WhatsApp-a ugrukdyryň.</li>
</ul>

<h2>1-nji ädim: Onlaýn menýu taýýarlaň</h2>
<p>QR Code diňe salgyny saklaýar, şonuň üçin Size internetde açyp bolýan menýu gerek. Saýlawlaryň arasynda öz saýtyňyzdaky sahypa, onlaýn ammarda köpçülige açyk paýlaşylan PDF faýly ýa-da sargyt platformasyndaky katalog sahypasy bar. Menýunyň telefonyň ekranynda okamaga amatlydygyna göz ýetiriň: ýazgylar ýeterlik uly, suratlar aşa agyr däl we bahalar aýdyň bolsun.</p>

<h2>2-nji ädim: QR Code dörediň</h2>
<ol>
  <li>Menýuňyzyň salgysyny göçüriň.</li>
  <li><a href="/?type=qrcode">QR Code generatoryny</a> açyň, <strong>URL</strong> goýmasyny saýlaň we şol salgyny goýuň.</li>
  <li>Dizaýn bölüminde "MENÝU" ýa-da "MENÝUNY GÖRMEK ÜÇIN SKANERLÄŇ" ýazgyly çarçuwa goşuň.</li>
  <li>Reňkleri restoranyň stiline laýyklaşdyryň, ýöne açyk fonda garaňky reňki ulanmagy dowam ediň.</li>
  <li>Çap etmek üçin moduluň ölçegini ýeterlik uly edip, PNG görnüşinde ýükläň.</li>
</ol>
<p>Üýtgemejek salgy ulanyň. Eger menýu başga salga geçirilse, eýýäm çap edilen QR Code-y täzeläp bolmaz. Munuň düşündirişi <a href="/artikel/apa-itu-qr-code">QR Code näme</a> atly makalada bar.</p>

<h2>3-nji ädim: Çap ediň we ýerleşdiriň</h2>
<ul>
  <li>Oturgyçdan aňsat skanerlenmegi üçin azyndan takmynan 3–5 sm ölçegde çap ediň.</li>
  <li>Winil ştikeri ýa-da aşa ýalpyldawuk bolmadyk laminirlenen kartoçka ýaly dökülen zatlara çydamly material ulanyň.</li>
  <li>Aňsat ýetip bolýan ýerde, meselem, stoluň ortasyndaky akril dikeltgiçde goýuň.</li>
  <li>Eger müşderiler söhbetdeşlik arkaly sargyt edýän bolsa, QR Code-yň golaýynda stoluň belgisini goşuň.</li>
</ul>

<h2>Telefony bolmadyk müşderileri ýatdan çykarmaň</h2>
<p>Telefonyny ýany bilen getirmedik, telefonynyň batareýasy gutaran ýa-da kagyz menýuny okamagy amatly görýän müşderiler üçin bir ýa-da iki sany çap edilen menýu taýýarlaň.</p>
<p>Şeýle hem myhmanlar üçin <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> döredip, ony menýu QR Code-ynyň gapdalynda goýup bilersiňiz.</p>
`
};
