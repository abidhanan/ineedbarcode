// apa-itu-barcode
module.exports = {
  title: "Kas yra brūkšninis kodas? Apibrėžimas, veikimo principas ir rūšys",
  desc: "Brūkšninis kodas yra beveik ant kiekvienos jūsų perkamos prekės. Sužinokite, kaip jis veikia, kokia trumpai jo istorija ir kokios brūkšninių kodų rūšys naudojamos dažniausiai.",
  tags: ["Pagrindai", "Brūkšniniai kodai"],
  coverCaption: "Brūkšninis kodas ant pakuotės saugo unikalų prekės kodą.",
  inlineCaption: "Kasininkas skaitytuvu akimirksniu nuskaito brūkšninį kodą.",
  faq: [
    ["Kuo skiriasi brūkšninis kodas ir QR Code?", "QR Code yra viena iš brūkšninių kodų rūšių, t. y. 2D brūkšninis kodas. Linijinis (1D) brūkšninis kodas talpina tik nedaug simbolių ir skaitomas iš kairės į dešinę, o QR Code duomenis saugo dviem kryptimis, todėl į jį telpa nuoroda, tekstas ar WiFi duomenys."],
    ["Ar brūkšniniame kode saugoma prekės kaina?", "Paprastai ne. Prekės brūkšniniame kode yra tik kodas. Kaina ir prekės pavadinimas saugomi kasos sistemoje ir surandami pagal nuskaitytą kodą."],
    ["Ar už brūkšninio kodo sukūrimą reikia mokėti?", "Ne. Brūkšninio kodo paveikslėlį galima sukurti nemokamai, pavyzdžiui, I Need Barcode svetainėje. Mokamai registruoti reikia tik oficialų numerį mažmeninės prekybos brūkšniniams kodams, tokiems kaip EAN-13, per GS1."]
  ],
  body: `
<p>Brūkšninis kodas – tai būdas užrašyti duomenis raštu, kurį gali perskaityti mašina. Šis raštas dažniausiai būna juodų ir baltų skirtingo pločio linijų seka arba mažų kvadratėlių, išdėstytų kvadrate, rinkinys. Nuskaičius raštas vėl paverčiamas skaičiais ar tekstu, pavyzdžiui, prekės kodu, siuntos numeriu ar svetainės adresu.</p>
<p>Kadangi brūkšninį kodą skaito mašina, tai daug greičiau ir patikimiau nei kodą įvesti ranka. Todėl brūkšniniai kodai naudojami kasose, sandėliuose, ligoninėse, ant bilietų ir net maisto pakuočių.</p>

<h2>Trumpa brūkšninio kodo istorija</h2>
<p>Brūkšninio kodo idėją 1952 m. Jungtinėse Amerikos Valstijose užpatentavo Normanas Josephas Woodlandas ir Bernardas Silveris. Parduotuvėse brūkšniniai kodai iš tikrųjų pradėti naudoti tik 1974 m., kai viename Ohajo prekybos centre buvo nuskaitytas kramtomosios gumos pakelis su UPC kodu. Nuo tada brūkšniniai kodai paplito visame pasaulyje, o dabar juos pasauliniu mastu administruoja standartų organizacija GS1.</p>

<h2>Kaip veikia brūkšninis kodas?</h2>
<p>Skaitytuvas apšviečia brūkšninį kodą ir nuskaito atspindėtą šviesą. Tamsios dalys atspindi mažai šviesos, šviesios – daug. Šis skirtumas paverčiamas nulių ir vienetų seka, kuri sulyginama su konkrečios brūkšninio kodo rūšies taisyklėmis. Daugelis brūkšninių kodų taip pat turi <strong>kontrolinį skaitmenį</strong> (check digit) – paskutinį skaitmenį, apskaičiuojamą iš ankstesnių skaitmenų. Jei skaičiavimo rezultatas nesutampa, skaitytuvas supranta, kad kažkas negerai, ir rezultatą atmeta.</p>
<p>Pats brūkšninis kodas paprastai saugo tik kodą. Tokia informacija kaip prekės pavadinimas ar kaina saugoma kasos sistemoje arba duomenų bazėje ir surandama pagal tą kodą.</p>

<h2>Dažniausiai naudojamos brūkšninių kodų rūšys</h2>
<p>Apskritai brūkšniniai kodai skirstomi į dvi dideles grupes:</p>
<ul>
  <li><strong>1D (linijiniai) brūkšniniai kodai</strong>: vertikalios linijos, skaitomos iš kairės į dešinę. Pavyzdžiui, <a href="/?type=ean13">EAN-13</a> ir <a href="/?type=upca">UPC-A</a> mažmeninės prekybos prekėms, taip pat <a href="/?type=code128">Code 128</a> ir <a href="/?type=code39">Code 39</a> logistikai ir sandėliams.</li>
  <li><strong>2D brūkšniniai kodai</strong>: kvadratėlių raštas, saugantis duomenis dviem kryptimis, todėl į jį telpa daug daugiau. Pavyzdžiui, <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> ir <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Be to, yra specialių brūkšninių kodų paštui ir siuntoms, sveikatos priežiūrai, taip pat GS1 standartai tiekimo grandinei. Išsamiau apie jų skirtumus galite paskaityti straipsnyje <a href="/artikel/perbedaan-barcode-1d-dan-2d">1D ir 2D brūkšninių kodų skirtumai</a>.</p>

<h2>Kam naudojami brūkšniniai kodai?</h2>
<ul>
  <li><strong>Mažmeninė prekyba</strong>: pagreitina darbą kasoje ir automatiškai apskaito atsargas.</li>
  <li><strong>Sandėliai ir siuntos</strong>: leidžia sekti prekes ir siuntinius iš vienos vietos į kitą.</li>
  <li><strong>Bilietai ir renginiai</strong>: bilieto tikrumą galima patikrinti vienu nuskaitymu.</li>
  <li><strong>Rinkodara</strong>: QR Code ant lankstinuko ar pakuotės nukreipia žmones tiesiai į jūsų svetainę, meniu ar WhatsApp.</li>
</ul>

<h2>Kaip patiems sukurti brūkšninį kodą</h2>
<p>Brūkšniniam kodui sukurti mokamos programėlės nereikia. Svetainėje <a href="/">I Need Barcode</a> pasirinkite brūkšninio kodo rūšį, įveskite duomenis ir atsisiųskite kaip PNG paveikslėlį. Galite rinktis iš daugiau nei 100 rūšių, ir visos jos nemokamos, be registracijos.</p>
`
};
