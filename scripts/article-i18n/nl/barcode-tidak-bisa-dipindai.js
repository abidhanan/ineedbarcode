// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 oorzaken waarom een barcode niet scant en hoe u dat oplost",
  desc: "Scant uw barcode of QR Code niet? Bekijk de zeven meest voorkomende oorzaken, van kleurcontrast tot formaat, en hoe u ze oplost.",
  tags: ["Tips", "Barcode"],
  coverCaption: "Contrast en formaat bepalen of een QR Code makkelijk te scannen is.",
  inlineCaption: "In het magazijn vertragen barcodes die niet scannen het werk.",
  faq: [
    ["Waarom scant een QR Code wel met de ene telefoon maar niet met de andere?", "Camera's en scanapps verschillen in mogelijkheden. Een QR Code die te klein is, weinig contrast heeft of omgekeerde kleuren gebruikt, mislukt vaker op bepaalde telefoons. Test met meerdere telefoons voordat u gaat drukken."],
    ["Kan een gekleurde barcode worden gescand?", "Ja, zolang de kleur donker is op een lichte achtergrond. Vermijd rood voor de strepen van de barcode, omdat veel kassascanners rood licht gebruiken."],
    ["Hoe controleer ik of een barcode klopt?", "Scan de afdruk met meerdere telefoons of scanners en controleer of de gelezen gegevens precies overeenkomen met de gegevens die u hebt ingevoerd."]
  ],
  body: `
<p>Er is weinig zo vervelend als een barcode die al honderden keren is gedrukt en dan niet blijkt te scannen. Het goede nieuws: de oorzaak is meestal eenvoudig en makkelijk te voorkomen. Dit zijn de zeven meest voorkomende oorzaken.</p>

<h2>1. Te weinig kleurcontrast</h2>
<p>Een scanner leest het verschil tussen donker en licht. Een lichtgrijze barcode op wit, of donkerblauw op zwart, is moeilijk te onderscheiden. <strong>Oplossing:</strong> gebruik een donkere kleur op een lichte achtergrond. Zwart op wit is de veiligste keuze.</p>

<h2>2. Omgekeerde kleuren of de kleur rood</h2>
<p>Een lichte barcode op een donkere achtergrond wordt niet door alle scanners ondersteund. Bovendien gebruiken veel kassascanners rood licht, waardoor rode strepen er hetzelfde uitzien als de witte achtergrond. <strong>Oplossing:</strong> vermijd rood voor de strepen of modules van de barcode en draai de kleuren niet om.</p>

<h2>3. Te klein formaat</h2>
<p>De camera heeft genoeg pixels nodig om elke module te herkennen. <strong>Oplossing:</strong> maak de barcode groter. Gebruik voor een QR Code die van dichtbij wordt gescand minimaal ongeveer 2 × 2 cm. Zie de <a href="/artikel/ukuran-barcode-untuk-dicetak">handleiding voor drukformaten</a>.</p>

<h2>4. Geen stille zone</h2>
<p>Een barcode die tegen afbeeldingen, tekst of de rand van het papier aan staat, is moeilijk van zijn omgeving te onderscheiden. <strong>Oplossing:</strong> laat lege ruimte rond de barcode, vooral links en rechts van een streepjescode.</p>

<h2>5. Wazige of vervormde afbeelding</h2>
<p>Een barcode die is vergroot vanuit een kleine afbeelding, is opgeslagen als JPG van lage kwaliteit of onevenredig is uitgerekt, verliest zijn vorm. <strong>Oplossing:</strong> download hem met een grotere modulegrootte in PNG-formaat en wijzig het formaat altijd proportioneel.</p>

<h2>6. Onjuiste gegevens of gegevens die niet bij het type passen</h2>
<p>Elk type barcode heeft zijn eigen regels. EAN-13 accepteert bijvoorbeeld alleen 12 of 13 cijfers met een correct controlecijfer. Een verkeerd getypte link zorgt er ook voor dat de QR Code wel wordt gelezen, maar niets opent. <strong>Oplossing:</strong> controleer de gegevens voordat u gaat drukken. De generator van <a href="/">I Need Barcode</a> toont een melding als de gegevens niet voldoen aan de regels van het gekozen type barcode.</p>

<h2>7. Oppervlak en verlichting</h2>
<p>Glanzende materialen, transparant plastic, vouwen en gebogen oppervlakken kunnen licht weerkaatsen of de vorm van de barcode veranderen. <strong>Oplossing:</strong> druk af op een vlak, niet-glanzend oppervlak en test onder de werkelijke lichtomstandigheden.</p>

<h2>Over QR Codes met een ontwerp</h2>
<p>Een QR Code met een vorm, kleur of kader blijft scanbaar zolang de drie markeringsvierkanten in de hoeken intact zijn en het contrast voldoende is. Lees meer in <a href="/artikel/desain-qr-code-kreatif">creatief QR Code-ontwerp dat leesbaar blijft</a>.</p>
<p>De beste gewoonte: <strong>test altijd één afdruk</strong> met meerdere telefoons en scanners voordat u in grote aantallen drukt.</p>
`
};
