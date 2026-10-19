// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Zo krijgt u een EAN-13-productbarcode voor kleine ondernemingen",
  desc: "Wilt u uw product in buurtsupermarkten of supermarkten krijgen? Ontdek wat de cijfers van EAN-13 betekenen, hoe u een officieel nummer registreert bij GS1 Indonesia en hoe u het afdrukt.",
  tags: ["Zakelijk", "Retail"],
  coverCaption: "Verpakkingen van retailproducten hebben een geregistreerde EAN-13-barcode nodig.",
  inlineCaption: "Winkels herkennen producten aan het EAN-13-nummer in hun kassasysteem.",
  faq: [
    ["Mag ik zelf een EAN-13-nummer bedenken?", "De afbeelding van de barcode mag u zelf maken, maar het nummer kan beter officieel van GS1 komen. Een zelfbedacht nummer kan botsen met een ander product en door winkels worden geweigerd."],
    ["Heeft elke productvariant een eigen barcode nodig?", "Ja. Elke afwijkende variant, bijvoorbeeld met een andere smaak, maat of verpakkingsinhoud, heeft een eigen EAN-13-nummer nodig."],
    ["Wat is het controlecijfer van een EAN-13?", "Het controlecijfer is het 13e cijfer, dat wordt berekend uit de 12 voorgaande cijfers. De scanner gebruikt het om te controleren of de barcode correct is gelezen. De generator van I Need Barcode berekent het automatisch als u 12 cijfers invoert."]
  ],
  body: `
<p>Als u uw product wilt verkopen in buurtsupermarkten, supermarkten of op grote online marktplaatsen, wordt u meestal gevraagd om een <strong>EAN-13</strong>-barcode op de verpakking te zetten. Deze barcode bevat 13 cijfers die uw product wereldwijd uniek identificeren.</p>

<h2>De betekenis van de 13 cijfers van EAN-13</h2>
<ul>
  <li><strong>GS1-prefix</strong>: de eerste drie cijfers geven aan welke GS1-organisatie het nummer heeft uitgegeven. Nummers die door GS1 Indonesia zijn uitgegeven, beginnen met <strong>899</strong>.</li>
  <li><strong>Bedrijfsnummer</strong>: de identificatie van uw bedrijf, die u bij de registratie krijgt.</li>
  <li><strong>Productnummer</strong>: wordt door het bedrijf zelf vastgesteld voor elke productvariant, bijvoorbeeld voor een andere smaak of maat.</li>
  <li><strong>Controlecijfer</strong>: het laatste cijfer, dat automatisch wordt berekend uit de 12 voorgaande cijfers om leesfouten te voorkomen.</li>
</ul>

<h2>Waarom een officieel nummer?</h2>
<p>Iedereen kan een EAN-13-barcode tekenen, maar het <strong>nummer</strong> moet geregistreerd zijn. Winkels gebruiken dat nummer om producten in hun systeem te herkennen. Als u zelf een nummer verzint, kan het botsen met het product van een ander bedrijf en worden geweigerd wanneer u het product bij de winkel aanmeldt.</p>

<h2>Zo registreert u een nummer bij GS1 Indonesia</h2>
<ol>
  <li>Zorg dat u uw bedrijfsdocumenten bij de hand hebt, zoals het NIB (Indonesisch bedrijfsidentificatienummer) en het NPWP (fiscaal nummer), en een lijst van de producten die een barcode krijgen.</li>
  <li>Registreer uw bedrijf via de officiële website van GS1 Indonesia en kies het aantal nummers dat u nodig hebt.</li>
  <li>Betaal de registratiekosten en de jaarlijkse bijdrage volgens de geldende voorwaarden.</li>
  <li>Na goedkeuring ontvangt u een bedrijfsnummer en kunt u voor elk product een nummer aanmaken.</li>
</ol>
<p>Voorwaarden en kosten kunnen veranderen, dus controleer altijd de meest actuele informatie rechtstreeks op de website van GS1 Indonesia.</p>

<h2>De barcode-afbeelding maken</h2>
<p>Zodra u een nummer hebt, opent u de <a href="/?type=ean13">EAN-13-generator</a> en voert u de 12 of 13 cijfers van uw productnummer in. Als u 12 cijfers invoert, wordt het controlecijfer automatisch berekend. Zorg dat de optie voor tekst onder de barcode is ingeschakeld, zodat de cijfers mee worden afgedrukt, en download de barcode als PNG.</p>

<h2>Tips voor het afdrukken op de verpakking</h2>
<ul>
  <li>Gebruik zwarte of donkerblauwe strepen op een witte achtergrond. Vermijd rood voor de strepen, want veel kassascanners gebruiken rood licht, waardoor rode strepen niet worden gelezen.</li>
  <li>Maak de barcode niet te klein. Het standaardformaat van EAN-13 is ongeveer 37,3 × 25,9 mm en mag worden verkleind tot ongeveer 80%. Meer hierover in de <a href="/artikel/ukuran-barcode-untuk-dicetak">handleiding voor barcodeformaten</a>.</li>
  <li>Laat links en rechts van de barcode lege ruimte en plaats hem niet op vouwen of naden van de verpakking.</li>
  <li>Test de afdruk met een scanner voordat u in grote aantallen drukt.</li>
</ul>
<p>Voor producten die in Noord-Amerika worden verkocht, kan ook worden gevraagd om een <a href="/?type=upca">UPC-A</a> met 12 cijfers.</p>
`
};
