// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Het juiste formaat en de juiste resolutie van een barcode om te drukken",
  desc: "Een barcode die te klein of wazig is, is moeilijk te scannen. Ontdek het minimale formaat, de vuistregel voor de scanafstand en een veilige beeldresolutie om te drukken.",
  tags: ["Handleiding", "Afdrukken"],
  coverCaption: "Een labelprinter drukt barcodes af voor pakketten en verpakkingen.",
  inlineCaption: "Het formaat van het label bepaalt hoe groot de barcode kan worden afgedrukt.",
  faq: [
    ["Wat is het minimale formaat van een QR Code om te drukken?", "Voor scannen van dichtbij is ongeveer 2 × 2 cm de veilige ondergrens. Gebruik voor grotere afstanden een verhouding van ongeveer 10 : 1 tussen scanafstand en breedte van de QR Code."],
    ["Wat is het standaardformaat van een EAN-13-barcode?", "Het standaardformaat van EAN-13 is ongeveer 37,3 × 25,9 mm. Dit mag worden verkleind tot ongeveer 80% of vergroot tot 200%."],
    ["Waarom is de barcode na het afdrukken wazig?", "Meestal omdat een kleine afbeelding is vergroot of is opgeslagen als JPG van lage kwaliteit. Download hem met een grotere modulegrootte in PNG-formaat."]
  ],
  body: `
<p>Een barcode die er op het scherm goed uitziet, is na het afdrukken niet altijd leesbaar. Een te klein formaat, een lage resolutie of uitlopende inkt kan ervoor zorgen dat de scanner hem niet kan lezen. Met deze handleiding blijven uw afdrukken leesbaar.</p>

<h2>Ken de module</h2>
<p>Een <strong>module</strong> is de kleinste eenheid van een barcode: één klein vierkantje in een QR Code of de smalste streep in een streepjescode. De modulegrootte bepaalt hoe makkelijk een barcode te lezen is. Bij <a href="/">I Need Barcode</a> stelt u de modulegrootte in bij Instellingen: hoe hoger de waarde, hoe groter en scherper de gedownloade afbeelding.</p>

<h2>Minimaal formaat van een QR Code</h2>
<ul>
  <li>Voor scannen van dichtbij (bijvoorbeeld op een visitekaartje of productlabel) is ongeveer <strong>2 × 2 cm</strong> de veilige ondergrens.</li>
  <li>Gebruik een vuistregel van ongeveer <strong>10 : 1</strong>: de scanafstand is ongeveer tien keer de breedte van de QR Code. Maak de QR Code voor een poster die vanaf 2 meter wordt gescand minimaal ongeveer 20 cm.</li>
  <li>Hoe meer gegevens u opslaat, hoe dichter het patroon en hoe groter het formaat moet zijn.</li>
</ul>

<h2>Formaat van productbarcodes</h2>
<p>Het standaardformaat van <a href="/?type=ean13">EAN-13</a> is ongeveer 37,3 × 25,9 mm (100%). Dit mag worden verkleind tot ongeveer 80% of vergroot tot 200%. Maak de strepen niet te kort, want kassascanners hebben ruimte nodig om vanuit verschillende hoeken te lezen.</p>

<h2>Beeldresolutie</h2>
<ul>
  <li>Zorg er bij het drukken voor dat elke module wordt weergegeven met <strong>meerdere volledige pixels</strong>, niet met delen van pixels. Kies bij het downloaden een grotere modulegrootte en verklein de afbeelding daarna in uw ontwerpprogramma, niet andersom.</li>
  <li>Vergroot geen kleine barcode-afbeelding, want dan worden de randen van de vierkantjes wazig of gekarteld.</li>
  <li>Sla op in PNG-formaat, zodat kleuren en randen niet beschadigd raken zoals bij JPG.</li>
</ul>

<h2>Stille zone</h2>
<p>Elke barcode heeft lege ruimte om zich heen nodig, de zogeheten <strong>stille zone</strong> (quiet zone). Bij een QR Code is die idealiter vier modules breed. Bij een streepjescode is de lege ruimte links en rechts heel belangrijk. Plaats tekst, ontwerplijnen of de rand van de verpakking niet te dichtbij.</p>

<h2>Kleur en materiaal</h2>
<ul>
  <li>Gebruik een donkere kleur voor de barcode en een lichte kleur voor de achtergrond.</li>
  <li>Vermijd glanzende of transparante materialen, want lichtreflecties kunnen de camera storen.</li>
  <li>Druk altijd eerst één exemplaar af en test het met meerdere telefoons of scanners voordat u veel drukt.</li>
</ul>
<p>Is uw barcode nog steeds moeilijk te scannen? Bekijk dan <a href="/artikel/barcode-tidak-bisa-dipindai">7 oorzaken waarom een barcode niet scant</a>.</p>
`
};
