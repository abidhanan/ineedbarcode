// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Die regte grootte en resolusie om strepieskodes te druk",
  desc: "Strepieskodes wat te klein of wasig is, is moeilik om te skandeer. Leer die minimum grootte, die reël vir skanderingsafstand en die beeldresolusie wat veilig is om te druk.",
  tags: ["Gids", "Drukwerk"],
  coverCaption: "'n Etiketdrukker druk strepieskodes vir pakkies en verpakking.",
  inlineCaption: "Die grootte van die etiket bepaal hoe groot die strepieskode gedruk kan word.",
  faq: [
    ["Wat is die minimum grootte van 'n QR Code vir drukwerk?", "Om van naby te skandeer, is ongeveer 2 × 2 cm die veilige grens. Vir groter afstande, gebruik 'n verhouding van ongeveer 10 : 1 tussen die skanderingsafstand en die breedte van die QR Code."],
    ["Wat is die standaardgrootte van 'n EAN-13-strepieskode?", "Die standaardgrootte van EAN-13 is ongeveer 37,3 × 25,9 mm. Dit mag tot ongeveer 80% verklein of tot 200% vergroot word."],
    ["Waarom is die strepieskode wasig nadat dit gedruk is?", "Gewoonlik omdat die beeld klein was en toe vergroot is, of as 'n JPG van lae gehalte gestoor is. Laai dit af met 'n groter modulegrootte in PNG-formaat."]
  ],
  body: `
<p>'n Strepieskode wat goed op die skerm lyk, is nie noodwendig leesbaar nadat dit gedruk is nie. 'n Grootte wat te klein is, 'n lae resolusie of ink wat uitloop, kan veroorsaak dat die skandeerder dit nie kan lees nie. Hier is 'n gids sodat u drukwerk leesbaar bly.</p>

<h2>Leer die module ken</h2>
<p>'n <strong>Module</strong> is die kleinste eenheid van 'n strepieskode, dit wil sê een klein blokkie in 'n QR Code of die smalste streep in 'n lynstrepieskode. Die modulegrootte bepaal hoe maklik die strepieskode gelees kan word. By <a href="/">I Need Barcode</a> kan die modulegrootte onder Instellings aangepas word: hoe hoër die waarde, hoe groter en skerper is die afgelaaide beeld.</p>

<h2>Minimum grootte van 'n QR Code</h2>
<ul>
  <li>Om van naby te skandeer (byvoorbeeld besigheidskaartjies of produketikette), is ongeveer <strong>2 × 2 cm</strong> die veilige grens.</li>
  <li>Gebruik die verhoudingsreël van ongeveer <strong>10 : 1</strong>: die skanderingsafstand is ongeveer tien keer die breedte van die QR Code. Vir 'n plakkaat wat van 2 meter af geskandeer word, maak die QR Code ten minste ongeveer 20 cm.</li>
  <li>Hoe meer data gestoor word, hoe digter is die patroon, en dus is 'n groter grootte nodig.</li>
</ul>

<h2>Grootte van produkstrepieskodes</h2>
<p>Die standaardgrootte van <a href="/?type=ean13">EAN-13</a> is ongeveer 37,3 × 25,9 mm (100%). Dit mag tot ongeveer 80% verklein of tot 200% vergroot word. Vermy om die hoogte van die strepe te kort te sny, omdat kassaskandeerders ruimte nodig het om uit verskillende hoeke te lees.</p>

<h2>Beeldresolusie</h2>
<ul>
  <li>Vir drukwerk, probeer om elke module met <strong>verskeie volle pieksels</strong> te teken, nie gedeeltes van pieksels nie. Kies 'n groter modulegrootte wanneer u aflaai, en verklein dit dan in u ontwerptoepassing, nie andersom nie.</li>
  <li>Vermy om 'n klein strepieskodebeeld te vergroot, omdat die rande van die blokkies dan wasig of gekarteld word.</li>
  <li>Stoor in PNG-formaat sodat die kleure en rande nie beskadig word soos met JPG nie.</li>
</ul>

<h2>Stil sone</h2>
<p>Elke strepieskode het leë ruimte rondom hom nodig, die sogenaamde <strong>stil sone</strong> (quiet zone). Vir QR Codes behoort dit ideaal vier modules breed te wees. Vir lynstrepieskodes is die leë ruimte links en regs baie belangrik. Moenie teks, ontwerplyne of die rand van die verpakking te naby plaas nie.</p>

<h2>Kleure en materiale</h2>
<ul>
  <li>Gebruik 'n donker kleur vir die strepieskode en 'n ligte kleur vir die agtergrond.</li>
  <li>Vermy blink of deursigtige materiale, omdat ligweerkaatsing die kamera kan steur.</li>
  <li>Druk altyd een voorbeeld en toets dit met verskeie fone of skandeerders voordat u baie druk.</li>
</ul>
<p>As u strepieskode steeds moeilik is om te skandeer, kyk na <a href="/artikel/barcode-tidak-bisa-dipindai">7 redes waarom 'n strepieskode nie geskandeer kan word nie</a>.</p>
`
};
