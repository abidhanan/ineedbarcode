// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Så får du en EAN-13-streckkod till din produkt som småföretagare",
  desc: "Vill du att din produkt ska säljas i närbutiker eller stormarknader? Lär dig vad siffrorna i EAN-13 betyder, hur du registrerar ett officiellt nummer hos GS1 Indonesia och hur du skriver ut det.",
  tags: ["Företag", "Detaljhandel"],
  coverCaption: "Förpackningar för detaljhandeln behöver en registrerad EAN-13-streckkod.",
  inlineCaption: "Butiker känner igen produkten via EAN-13-numret i sitt kassasystem.",
  faq: [
    ["Får jag hitta på ett eget EAN-13-nummer?", "Själva streckkodsbilden får du skapa själv, men numret bör vara officiellt från GS1. Ett egenpåhittat nummer kan krocka med andra produkter och avvisas av butikerna."],
    ["Behöver varje produktvariant en egen streckkod?", "Ja. Varje variant som skiljer sig, till exempel i smak, storlek eller förpackningsinnehåll, behöver ett eget EAN-13-nummer."],
    ["Vad är kontrollsiffran i EAN-13?", "Kontrollsiffran är den 13:e siffran, som beräknas utifrån de 12 föregående siffrorna. Skannern använder den för att säkerställa att streckkoden har lästs korrekt. Generatorn på I Need Barcode räknar ut den automatiskt om du anger 12 siffror."]
  ],
  body: `
<p>Om du vill sälja din produkt i närbutiker, stormarknader eller på stora marknadsplatser på nätet blir du oftast ombedd att ha en <strong>EAN-13</strong>-streckkod på förpackningen. Streckkoden innehåller 13 siffror som utgör produktens unika identitet i hela världen.</p>

<h2>Vad de 13 siffrorna i EAN-13 betyder</h2>
<ul>
  <li><strong>GS1-prefix</strong>: de tre första siffrorna visar vilken GS1-organisation som har utfärdat numret. Nummer som utfärdas av GS1 Indonesia börjar med <strong>899</strong>.</li>
  <li><strong>Företagsnummer</strong>: ditt företags identitet, som du får när du registrerar dig.</li>
  <li><strong>Produktnummer</strong>: bestäms av företaget självt för varje produktvariant, till exempel olika smaker eller storlekar.</li>
  <li><strong>Kontrollsiffra</strong>: den sista siffran, som beräknas automatiskt utifrån de 12 föregående siffrorna för att förhindra felläsningar.</li>
</ul>

<h2>Varför måste numret vara officiellt?</h2>
<p>En EAN-13-streckkod kan ritas av vem som helst, men <strong>numret</strong> måste vara registrerat. Butikerna använder numret för att känna igen produkten i sina system. Om du hittar på ett eget nummer kan det krocka med ett annat företags produkt och avvisas när produkten registreras hos butiken.</p>

<h2>Så registrerar du ett nummer hos GS1 Indonesia</h2>
<ol>
  <li>Förbered företagshandlingar, som NIB (företagets registreringsnummer) och NPWP (skatteregistreringsnummer), samt en lista över de produkter som ska få streckkoder.</li>
  <li>Registrera företaget via GS1 Indonesias officiella webbplats och välj hur många nummer du behöver.</li>
  <li>Betala registreringsavgiften och årsavgiften enligt gällande villkor.</li>
  <li>När ansökan har godkänts får du ett företagsnummer och kan skapa ett nummer för varje produkt.</li>
</ol>
<p>Krav och avgifter kan ändras, så kontrollera alltid den senaste informationen direkt på GS1 Indonesias webbplats.</p>

<h2>Skapa streckkodsbilden</h2>
<p>När du har fått numret öppnar du <a href="/?type=ean13">EAN-13-generatorn</a> och anger produktnumrets 12 eller 13 siffror. Om du anger 12 siffror räknas kontrollsiffran ut automatiskt. Se till att alternativet för text under streckkoden är aktiverat så att siffrorna skrivs ut, och ladda sedan ner den som PNG.</p>

<h2>Tips för tryck på förpackningen</h2>
<ul>
  <li>Använd svarta eller mörkblå streck mot vit bakgrund. Undvik rött för strecken, eftersom många kassaskannrar använder rött ljus, vilket gör att röda streck inte går att läsa.</li>
  <li>Förminska inte streckkoden för mycket. Standardstorleken för EAN-13 är cirka 37,3 × 25,9 mm och får förminskas till cirka 80 %. Läs mer i <a href="/artikel/ukuran-barcode-untuk-dicetak">guiden om streckkodsstorlek</a>.</li>
  <li>Lämna tomt utrymme till vänster och höger om streckkoden, och undvik att placera den på vikningar eller skarvar i förpackningen.</li>
  <li>Testa utskriften med en skanner innan du trycker i stora mängder.</li>
</ul>
<p>För produkter som säljs i Nordamerika kan du också bli ombedd att använda <a href="/?type=upca">UPC-A</a>, som innehåller 12 siffror.</p>
`
};
