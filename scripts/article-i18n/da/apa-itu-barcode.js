// apa-itu-barcode
module.exports = {
  title: "Hvad er en stregkode? Betydning, funktion og typer",
  desc: "Der er stregkoder på næsten alle de produkter, du køber. Lær, hvordan de fungerer, få en kort historik, og se de mest anvendte typer af stregkoder.",
  tags: ["Grundlæggende", "Stregkode"],
  coverCaption: "Stregkoden på emballagen indeholder produktets unikke kode.",
  inlineCaption: "Kassemedarbejderen bruger en scanner til at aflæse stregkoden på et øjeblik.",
  faq: [
    ["Hvad er forskellen på en stregkode og en QR Code?", "En QR Code er en type stregkode, nemlig en 2D-stregkode. En lineær stregkode (1D) rummer kun få tegn og læses fra venstre mod højre, mens en QR Code gemmer data i to retninger og derfor kan rumme et link, en tekst eller WiFi-oplysninger."],
    ["Indeholder stregkoden produktets pris?", "Normalt ikke. En produktstregkode indeholder kun en kode. Pris og produktnavn ligger i kassesystemet og slås op ud fra den scannede kode."],
    ["Koster det penge at lave en stregkode?", "Nej. Selve stregkodebilledet kan laves gratis, for eksempel hos I Need Barcode. Det eneste, der skal registreres mod betaling, er det officielle nummer til stregkoder på detailvarer som EAN-13 via GS1."]
  ],
  body: `
<p>En stregkode er en måde at skrive data på i form af et mønster, som en maskine kan læse. Mønsteret består som regel af sorte og hvide streger i forskellige bredder eller af små firkanter, der er samlet i et kvadrat. Når det scannes, bliver mønsteret oversat tilbage til tal eller tekst, for eksempel en produktkode, et forsendelsesnummer eller en webadresse.</p>
<p>Fordi den læses af en maskine, er en stregkode langt hurtigere og giver færre fejl end at taste koden manuelt. Derfor bruges stregkoder ved kasser, på lagre, på hospitaler, på billetter og på fødevareemballage.</p>

<h2>Stregkodens korte historie</h2>
<p>Idéen til stregkoden blev patenteret i 1952 af Norman Joseph Woodland og Bernard Silver i USA. Først i 1974 kom stregkoden for alvor i brug i butikkerne, da en pakke tyggegummi blev scannet med en UPC-kode i et supermarked i Ohio. Siden da har stregkoder bredt sig over hele verden, og i dag forvaltes de globalt af standardiseringsorganisationen GS1.</p>

<h2>Hvordan fungerer en stregkode?</h2>
<p>Scanneren lyser på stregkoden og aflæser det reflekterede lys. Mørke områder reflekterer lidt lys, mens lyse områder reflekterer meget. Forskellen omdannes til en række af 0 og 1, som derefter sammenholdes med reglerne for den pågældende stregkodetype. Mange stregkoder har også et <strong>kontrolciffer</strong> (check digit), det vil sige et sidste ciffer, der beregnes ud fra de foregående cifre. Hvis beregningen ikke stemmer, ved scanneren, at noget er galt, og afviser resultatet.</p>
<p>Selve stregkoden indeholder normalt kun en kode. Oplysninger som produktnavn eller pris ligger i kassesystemet eller en database og slås op ud fra koden.</p>

<h2>De mest anvendte typer af stregkoder</h2>
<p>Overordnet kan stregkoder deles i to store grupper:</p>
<ul>
  <li><strong>1D-stregkoder (lineære)</strong>: lodrette streger, der læses fra venstre mod højre. Eksempler er <a href="/?type=ean13">EAN-13</a> og <a href="/?type=upca">UPC-A</a> til detailvarer samt <a href="/?type=code128">Code 128</a> og <a href="/?type=code39">Code 39</a> til logistik og lager.</li>
  <li><strong>2D-stregkoder</strong>: firkantede mønstre, der gemmer data i to retninger og derfor kan rumme langt mere. Eksempler er <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> og <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Derudover findes der særlige stregkoder til post og forsendelse, til sundhedssektoren samt GS1-standarder til forsyningskæden. Du kan læse mere om forskellene i artiklen <a href="/artikel/perbedaan-barcode-1d-dan-2d">Forskellen på 1D- og 2D-stregkoder</a>.</p>

<h2>Hvad bruges stregkoder til?</h2>
<ul>
  <li><strong>Detailhandel</strong>: gør betalingen ved kassen hurtigere og registrerer lagerbeholdningen automatisk.</li>
  <li><strong>Lager og forsendelse</strong>: sporer varer og pakker fra ét sted til et andet.</li>
  <li><strong>Billetter og arrangementer</strong>: kontrollerer, om en billet er ægte, med én enkelt scanning.</li>
  <li><strong>Markedsføring</strong>: en QR Code på en brochure eller emballage fører folk direkte til din hjemmeside, menu eller WhatsApp.</li>
</ul>

<h2>Lav din egen stregkode</h2>
<p>Du behøver ikke en betalingsapp for at lave en stregkode. Hos <a href="/">I Need Barcode</a> vælger du stregkodetypen, udfylder dataene og downloader den som et PNG-billede. Der er mere end 100 typer at vælge imellem, og de er alle gratis uden tilmelding.</p>
`
};
