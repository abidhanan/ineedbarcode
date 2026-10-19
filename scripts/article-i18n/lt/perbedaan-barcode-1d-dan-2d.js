// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "1D ir 2D brūkšninių kodų skirtumai: kurio jums reikia?",
  desc: "Linijinis brūkšninis kodas ir QR Code – abu yra brūkšniniai kodai, tačiau jų paskirtis skiriasi. Palyginkite talpą, nuskaitymo būdą ir naudojimo pavyzdžius.",
  tags: ["Pagrindai", "Brūkšniniai kodai"],
  coverCaption: "Rankinis skaitytuvas sandėlyje nuskaito 1D ir 2D brūkšninius kodus.",
  inlineCaption: "Siuntų etiketėse paprastai naudojami linijiniai brūkšniniai kodai.",
  faq: [
    ["Ar kasos skaitytuvas gali nuskaityti QR Code?", "Ne visi. 1D lazeriniai skaitytuvai skaito tik linijinius brūkšninius kodus. QR Code reikia kamera pagrįsto 2D skaitytuvo arba telefono kameros."],
    ["Kuris brūkšninis kodas mažiausias?", "Data Matrix – tai 2D brūkšninis kodas, kurį galima atspausdinti labai mažą, todėl jis dažnai naudojamas ant elektronikos komponentų, medicinos prietaisų ir vaistų etikečių."],
    ["Ar galima naudoti QR Code vietoj EAN-13 ant mažmeninės prekybos prekių?", "Kad būtų parduodama parduotuvėse, prekei vis tiek reikia registruoto EAN-13 arba UPC. QR Code galima pridėti ant pakuotės kaip papildymą, pavyzdžiui, informacijai apie prekę ar akcijoms."]
  ],
  body: `
<p>Kuriant brūkšninį kodą, pirmas klausimas paprastai būna toks: naudoti linijinį brūkšninį kodą ar QR Code? Abu vadinami brūkšniniais kodais, tačiau duomenis jie saugo skirtingai, todėl ir jų paskirtis skiriasi.</p>

<h2>1D (linijinis) brūkšninis kodas</h2>
<p>1D brūkšninis kodas – tai vertikalių linijų seka. Duomenys saugomi viena kryptimi, t. y. iš kairės į dešinę. Žinomiausi pavyzdžiai – <a href="/?type=ean13">EAN-13</a> ant prekių pakuočių ir <a href="/?type=code128">Code 128</a> ant siuntų etikečių.</p>
<ul>
  <li>Maža talpa, paprastai nuo keliolikos iki keliasdešimties simbolių.</li>
  <li>Nuskaitomas pigiais ir labai greitais kasų lazeriniais skaitytuvais.</li>
  <li>Tinka prekių kodams, serijos numeriams ir siuntų numeriams.</li>
</ul>

<h2>2D brūkšninis kodas</h2>
<p>2D brūkšninis kodas duomenis saugo dviem kryptimis – horizontaliai ir vertikaliai, todėl į jį telpa daug daugiau. Pavyzdžiui, <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> ir <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Didelė talpa – nuo keliasdešimties iki tūkstančių simbolių.</li>
  <li>Nuskaitomas telefono kamera iš įvairių krypčių.</li>
  <li>Turi klaidų taisymą, todėl nuskaitomas net iš dalies pažeistas.</li>
  <li>Gali būti labai mažas, pavyzdžiui, Data Matrix ant elektronikos komponentų.</li>
</ul>

<h2>Trumpas palyginimas</h2>
<table>
  <thead><tr><th></th><th>1D brūkšninis kodas</th><th>2D brūkšninis kodas</th></tr></thead>
  <tbody>
    <tr><td>Forma</td><td>Vertikalios linijos</td><td>Kvadratėliai / taškai kvadrate</td></tr>
    <tr><td>Talpa</td><td>Maža</td><td>Didelė</td></tr>
    <tr><td>Nuskaitymo įrenginys</td><td>Lazerinis skaitytuvas arba kamera</td><td>Kamera arba 2D skaitytuvas</td></tr>
    <tr><td>Atsparumas pažeidimams</td><td>Ribotas</td><td>Yra klaidų taisymas</td></tr>
    <tr><td>Pavyzdžiai</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Kada kurį naudoti?</h2>
<ul>
  <li><strong>Prekės, parduodamos parduotuvėse ar prekybos centruose</strong>: naudokite oficialų GS1 EAN-13. Žr. <a href="/artikel/cara-mendapatkan-barcode-ean-13">kaip gauti EAN-13 brūkšninį kodą</a>.</li>
  <li><strong>Sandėlio, lentynų ar siuntų etiketės</strong>: Code 128 – dažnas pasirinkimas, nes jis kompaktiškas ir palaiko raides bei skaičius.</li>
  <li><strong>Nuorodos, meniu, WiFi ar kontaktai klientams</strong>: QR Code, nes jį galima nuskaityti tiesiog telefono kamera.</li>
  <li><strong>Labai mažos etiketės</strong>: Data Matrix.</li>
  <li><strong>Asmens tapatybės kortelės, lėktuvo bilietai ar dokumentai</strong>: PDF417 arba Aztec.</li>
</ul>
<p>Visas aukščiau išvardytas rūšis galite nemokamai sukurti svetainėje <a href="/">I Need Barcode</a>. Jei vis dar abejojate, pradėkite nuo QR Code klientų poreikiams ir Code 128 vidiniams poreikiams.</p>
`
};
