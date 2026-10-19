// apa-itu-barcode
module.exports = {
  title: "Vad är en streckkod? Definition, hur den fungerar och olika typer",
  desc: "Streckkoder finns på nästan alla produkter du köper. Lär dig hur de fungerar, deras korta historia och vilka typer av streckkoder som används oftast.",
  tags: ["Grunder", "Streckkod"],
  coverCaption: "Streckkoden på förpackningen lagrar produktens unika kod.",
  inlineCaption: "Kassapersonalen använder en skanner för att läsa streckkoden på ett ögonblick.",
  faq: [
    ["Vad är skillnaden mellan en streckkod och en QR Code?", "En QR Code är en typ av streckkod, nämligen en 2D-streckkod. Linjära (1D) streckkoder lagrar bara ett fåtal tecken och läses från vänster till höger, medan en QR Code lagrar data i två riktningar och därför rymmer en länk, text eller WiFi-uppgifter."],
    ["Lagrar streckkoden produktens pris?", "Vanligtvis inte. En produktstreckkod innehåller bara en kod. Produktens pris och namn lagras i kassasystemet och slås upp utifrån den skannade koden."],
    ["Kostar det att skapa en streckkod?", "Nej. Streckkodsbilder kan skapas gratis, till exempel på I Need Barcode. Det enda som kräver en avgiftsbelagd registrering är det officiella numret för streckkoder på detaljhandelsprodukter, som EAN-13, via GS1."]
  ],
  body: `
<p>En streckkod är ett sätt att skriva data i form av ett mönster som maskiner kan läsa. Mönstret består oftast av svarta och vita streck med olika bredd, eller av små rutor som är ordnade inom en kvadrat. När koden skannas översätts mönstret tillbaka till siffror eller text, till exempel en produktkod, ett sändningsnummer eller en webbadress.</p>
<p>Eftersom streckkoder läses av maskiner är de mycket snabbare och ger betydligt färre fel än att skriva in koder för hand. Därför används streckkoder i kassor, lager, sjukhus och på biljetter, ända till livsmedelsförpackningar.</p>

<h2>Streckkodens korta historia</h2>
<p>Idén till streckkoden patenterades 1952 av Norman Joseph Woodland och Bernard Silver i USA. Streckkoder började användas på riktigt i butiker först 1974, när ett paket tuggummi skannades med en UPC-kod i en stormarknad i Ohio. Sedan dess har streckkoderna spridit sig över hela världen, och i dag förvaltas de globalt av en standardiseringsorganisation som heter GS1.</p>

<h2>Hur fungerar en streckkod?</h2>
<p>Skannern belyser streckkoden och läser sedan av reflexen. Mörka partier reflekterar lite ljus, medan ljusa partier reflekterar mycket. Skillnaden omvandlas till en följd av nollor och ettor, som sedan jämförs med reglerna för just den streckkodstypen. Många streckkoder har också en <strong>kontrollsiffra</strong> (check digit), alltså den sista siffran som beräknas utifrån siffrorna före den. Om beräkningen inte stämmer vet skannern att något är fel och avvisar resultatet.</p>
<p>Själva streckkoden lagrar vanligtvis bara en kod. Information som produktnamn eller pris lagras i kassasystemet eller i en databas och slås upp utifrån koden.</p>

<h2>Vanliga typer av streckkoder</h2>
<p>Generellt delas streckkoder in i två stora grupper:</p>
<ul>
  <li><strong>1D-streckkoder (linjära)</strong>: lodräta streck som läses från vänster till höger. Exempel är <a href="/?type=ean13">EAN-13</a> och <a href="/?type=upca">UPC-A</a> för detaljhandelsprodukter, samt <a href="/?type=code128">Code 128</a> och <a href="/?type=code39">Code 39</a> för logistik och lager.</li>
  <li><strong>2D-streckkoder</strong>: rutmönster som lagrar data i två riktningar och därför rymmer mycket mer. Exempel är <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> och <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Dessutom finns det särskilda streckkoder för post och frakt, hälso- och sjukvård samt GS1-standarder för leveranskedjor. En mer utförlig förklaring av skillnaderna kan du läsa i artikeln <a href="/artikel/perbedaan-barcode-1d-dan-2d">Skillnaden mellan 1D- och 2D-streckkoder</a>.</p>

<h2>Vad används streckkoder till?</h2>
<ul>
  <li><strong>Detaljhandel</strong>: snabbar upp kassan och registrerar lagret automatiskt.</li>
  <li><strong>Lager och frakt</strong>: spårar varor och paket från en plats till en annan.</li>
  <li><strong>Biljetter och evenemang</strong>: kontrollerar att biljetter är äkta med en enda skanning.</li>
  <li><strong>Marknadsföring</strong>: en QR Code på en broschyr eller förpackning tar människor direkt till din webbplats, meny eller WhatsApp.</li>
</ul>

<h2>Skapa din egen streckkod</h2>
<p>Du behöver ingen betalapp för att skapa en streckkod. På <a href="/">I Need Barcode</a> väljer du streckkodstyp, fyller i dina uppgifter och laddar ner den som en PNG-bild. Det finns fler än 100 typer att välja mellan, och alla är gratis utan registrering.</p>
`
};
