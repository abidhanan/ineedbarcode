// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Rätt storlek och upplösning på streckkoder för utskrift",
  desc: "En streckkod som är för liten eller suddig är svår att skanna. Lär dig minsta storlekar, regeln för skanningsavstånd och vilken bildupplösning som är säker för utskrift.",
  tags: ["Guider", "Utskrift"],
  coverCaption: "En etikettskrivare skriver ut streckkoder för paket och förpackningar.",
  inlineCaption: "Etikettens storlek avgör hur stor streckkoden kan skrivas ut.",
  faq: [
    ["Vilken är den minsta storleken på en QR Code för utskrift?", "För skanning på nära håll är cirka 2 × 2 cm en säker gräns. För längre avstånd kan du använda ett förhållande på cirka 10 : 1 mellan skanningsavståndet och bredden på QR Code."],
    ["Vilken är standardstorleken för en EAN-13-streckkod?", "Standardstorleken för EAN-13 är cirka 37,3 × 25,9 mm. Den får förminskas till cirka 80 % eller förstoras upp till 200 %."],
    ["Varför blir streckkoden suddig efter utskrift?", "Oftast för att bilden var liten och sedan förstorades, eller sparades som JPG i låg kvalitet. Ladda ner med större modulstorlek i PNG-format."]
  ],
  body: `
<p>En streckkod som ser bra ut på skärmen går inte nödvändigtvis att läsa när den har skrivits ut. För liten storlek, låg upplösning eller bläck som flyter ut kan göra att skannern inte kan läsa den. Här är en guide för att din utskrift ska förbli läsbar.</p>

<h2>Lär känna modulen</h2>
<p>En <strong>modul</strong> är den minsta enheten i en streckkod, alltså en liten ruta i en QR Code eller det smalaste strecket i en linjär streckkod. Modulens storlek avgör hur lätt streckkoden är att läsa. På <a href="/">I Need Barcode</a> kan du ställa in modulstorleken under Inställningar: ju högre värde, desto större och skarpare blir bilden du laddar ner.</p>

<h2>Minsta storlek på en QR Code</h2>
<ul>
  <li>För skanning på nära håll (till exempel visitkort eller produktetiketter) är cirka <strong>2 × 2 cm</strong> en säker gräns.</li>
  <li>Använd tumregeln med förhållandet cirka <strong>10 : 1</strong>: skanningsavståndet är ungefär tio gånger bredden på QR Code. För en affisch som skannas från 2 meters avstånd bör QR Code vara minst cirka 20 cm.</li>
  <li>Ju mer data som lagras, desto tätare blir mönstret, och desto större storlek behövs.</li>
</ul>

<h2>Storlek på produktstreckkoder</h2>
<p>Standardstorleken för <a href="/?type=ean13">EAN-13</a> är cirka 37,3 × 25,9 mm (100 %). Den får förminskas till cirka 80 % eller förstoras upp till 200 %. Undvik att korta streckens höjd för mycket, eftersom kassaskannern behöver utrymme för att läsa från olika vinklar.</p>

<h2>Bildupplösning</h2>
<ul>
  <li>Vid utskrift bör varje modul återges med <strong>flera hela pixlar</strong>, inte delar av pixlar. Välj en större modulstorlek när du laddar ner och förminska sedan i designprogrammet, inte tvärtom.</li>
  <li>Undvik att förstora små streckkodsbilder, eftersom rutornas kanter då blir suddiga eller taggiga.</li>
  <li>Spara i PNG-format så att färger och kanter inte förstörs som med JPG.</li>
</ul>

<h2>Tyst zon</h2>
<p>Varje streckkod behöver tomt utrymme runt sig, en så kallad <strong>tyst zon</strong> (quiet zone). För en QR Code bör den helst vara fyra moduler bred. För linjära streckkoder är det tomma utrymmet till vänster och höger mycket viktigt. Placera inte text, designlinjer eller förpackningens kant för nära.</p>

<h2>Färger och material</h2>
<ul>
  <li>Använd en mörk färg för streckkoden och en ljus färg för bakgrunden.</li>
  <li>Undvik blanka eller genomskinliga material, eftersom ljusreflexer kan störa kameran.</li>
  <li>Skriv alltid ut ett provexemplar och testa det med flera mobiler eller skannrar innan du skriver ut i större mängd.</li>
</ul>
<p>Om din streckkod fortfarande är svår att skanna kan du läsa <a href="/artikel/barcode-tidak-bisa-dipindai">7 orsaker till att streckkoden inte går att skanna</a>.</p>
`
};
