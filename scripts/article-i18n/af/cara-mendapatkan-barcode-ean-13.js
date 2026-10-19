// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Hoe om 'n EAN-13-produkstrepieskode vir klein en mediumgrootte ondernemings te kry",
  desc: "Wil u hê u produkte moet in geriefswinkels of supermarkte verkoop word? Leer wat die syfers in EAN-13 beteken, hoe om 'n amptelike nommer by GS1 Indonesia te registreer en hoe om dit te druk.",
  tags: ["Besigheid", "Kleinhandel"],
  coverCaption: "Die verpakking van kleinhandelprodukte vereis 'n geregistreerde EAN-13-strepieskode.",
  inlineCaption: "Kleinhandelwinkels herken produkte aan die EAN-13-nommer in hul kassastelsel.",
  faq: [
    ["Mag ek my eie EAN-13-nommer opmaak?", "Die strepieskodebeeld mag u self maak, maar die nommer behoort 'n amptelike nommer van GS1 te wees. 'n Selfopgemaakte nommer kan met ander produkte bots en deur kleinhandelwinkels geweier word."],
    ["Het elke produkvariant 'n ander strepieskode nodig?", "Ja. Elke verskillende variant, byvoorbeeld met 'n ander geur, grootte of hoeveelheid in die verpakking, het sy eie EAN-13-nommer nodig."],
    ["Wat is die kontrolesyfer in EAN-13?", "Die kontrolesyfer is die 13de syfer, wat uit die voorafgaande 12 syfers bereken word. Die skandeerder gebruik dit om seker te maak dat die strepieskode korrek gelees is. Die generator by I Need Barcode bereken dit outomaties as u 12 syfers invoer."]
  ],
  body: `
<p>As u produkte in geriefswinkels, supermarkte of op groot aanlynmarkplekke verkoop moet word, sal u gewoonlik gevra word om 'n <strong>EAN-13</strong>-strepieskode op die verpakking te plaas. Hierdie strepieskode bevat 13 syfers wat die unieke identiteit van u produk regoor die wêreld is.</p>

<h2>Die betekenis van die 13 syfers in EAN-13</h2>
<ul>
  <li><strong>GS1-voorvoegsel</strong>: die eerste drie syfers dui die GS1-organisasie aan wat die nommer uitgereik het. Nommers wat deur GS1 Indonesia uitgereik word, begin met <strong>899</strong>.</li>
  <li><strong>Maatskappynommer</strong>: u maatskappy se identiteit, wat u by registrasie ontvang.</li>
  <li><strong>Produknommer</strong>: word deur die maatskappy self vir elke produkvariant bepaal, byvoorbeeld 'n ander geur of grootte.</li>
  <li><strong>Kontrolesyfer</strong>: die laaste syfer, wat outomaties uit die voorafgaande 12 syfers bereken word om verkeerde lesings te voorkom.</li>
</ul>

<h2>Waarom moet dit 'n amptelike nommer wees?</h2>
<p>Enigiemand kan 'n EAN-13-strepieskode teken, maar die <strong>nommer</strong> moet geregistreer wees. Kleinhandelwinkels gebruik daardie nommer om die produk in hul stelsels te herken. As u self 'n nommer opmaak, kan dit met 'n ander maatskappy se produk bots en geweier word wanneer die produk by die winkel geregistreer word.</p>

<h2>Hoe om 'n nommer by GS1 Indonesia te registreer</h2>
<ol>
  <li>Berei u besigheidsdokumente voor, soos die NIB (besigheidsidentifikasienommer) en NPWP (belastingbetalernommer), asook 'n lys van die produkte wat strepieskodes gaan kry.</li>
  <li>Registreer die maatskappy via die amptelike webwerf van GS1 Indonesia en kies die aantal nommers wat u nodig het.</li>
  <li>Betaal die registrasiefooi en die jaarlikse ledegeld volgens die geldende bepalings.</li>
  <li>Sodra u aansoek goedgekeur is, ontvang u 'n maatskappynommer en kan u nommers vir elke produk skep.</li>
</ol>
<p>Vereistes en fooie kan verander, so kontroleer altyd die nuutste inligting direk op die webwerf van GS1 Indonesia.</p>

<h2>Maak die strepieskodebeeld</h2>
<p>Sodra u 'n nommer het, maak die <a href="/?type=ean13">EAN-13-generator</a> oop en voer die 12 of 13 syfers van u produknommer in. As u 12 syfers invoer, word die kontrolesyfer outomaties bereken. Maak seker dat die opsie vir teks onder die strepieskode aangeskakel is sodat die syfers saam gedruk word, en laai dit dan as PNG af.</p>

<h2>Wenke vir drukwerk op verpakking</h2>
<ul>
  <li>Gebruik swart of donkerblou strepe op 'n wit agtergrond. Vermy rooi vir die strepe, omdat baie kassaskandeerders rooi lig gebruik, sodat rooi strepe nie gelees kan word nie.</li>
  <li>Moenie die strepieskode te veel verklein nie. Die standaardgrootte van EAN-13 is ongeveer 37,3 × 25,9 mm en mag tot ongeveer 80% verklein word. Meer hieroor in die <a href="/artikel/ukuran-barcode-untuk-dicetak">gids oor strepieskodegroottes</a>.</li>
  <li>Laat leë ruimte links en regs van die strepieskode, en vermy om dit op voue of nate van die verpakking te plaas.</li>
  <li>Toets die drukstuk met 'n skandeerder voordat u in groot hoeveelhede druk.</li>
</ul>
<p>Vir produkte wat in Noord-Amerika verkoop word, kan u ook gevra word om <a href="/?type=upca">UPC-A</a> te gebruik, wat 12 syfers bevat.</p>
`
};
