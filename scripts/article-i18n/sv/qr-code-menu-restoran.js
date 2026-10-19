// qr-code-menu-restoran
module.exports = {
  title: "QR Code för restaurangmenyn: en komplett guide",
  desc: "En digital meny via QR Code gör det enklare för gästerna och sparar tryckkostnader. Så här skapar du den, förbereder menyn och placerar den på borden.",
  tags: ["Företag", "QR Code"],
  coverCaption: "En QR Code på bordet tar gästerna direkt till den digitala menyn.",
  inlineCaption: "Placera QR Code där den är lätt att nå från stolen.",
  faq: [
    ["Vad är bäst för en digital meny: PDF eller webbsida?", "En webbsida är oftast bekvämare att läsa på mobilen och öppnas snabbare. En PDF kan användas om filen är liten och texten tillräckligt stor på skärmen."],
    ["Hur stor ska menyns QR Code på bordet vara?", "Cirka 3 till 5 cm räcker för att den ska kunna skannas från stolen. Använd ett material som tål spill och inte är alltför blankt."],
    ["Måste QR Code tryckas om när menyn ändras?", "Nej, inte så länge länken är densamma. Det räcker att uppdatera innehållet på sidan eller i menyfilen som QR Code leder till."]
  ],
  body: `
<p>Digitala menyer via QR Code har blivit vardag på kaféer och restauranger. Gästerna behöver bara skanna QR Code på bordet för att se maträtter, priser och bilder. För ägarna sparar det tryckkostnader och gör det lättare att ändra priser eller menyn.</p>

<h2>Fördelar med en meny via QR Code</h2>
<ul>
  <li><strong>Lätt att uppdatera</strong>: ändra priser eller lägg till rätter utan att trycka om menyn.</li>
  <li><strong>Sparar pengar</strong>: det räcker att trycka en liten QR Code för varje bord.</li>
  <li><strong>Mer informativ</strong>: visa bilder, beskrivningar och märkningar som stark eller vegetarisk.</li>
  <li><strong>Stöd för onlinebeställning</strong>: hänvisa gästerna till ett beställningsformulär eller till WhatsApp.</li>
</ul>

<h2>Steg 1: Förbered en meny på nätet</h2>
<p>QR Code innehåller bara en länk, så du behöver en meny som kan öppnas på internet. Några alternativ är en sida på din egen webbplats, en PDF-fil i en molntjänst som delas offentligt, eller en katalogsida på en beställningsplattform. Se till att menyn är bekväm att läsa på en mobilskärm: tillräckligt stor text, bilder som inte är för tunga och tydliga priser.</p>

<h2>Steg 2: Skapa QR Code</h2>
<ol>
  <li>Kopiera länken till din meny.</li>
  <li>Öppna <a href="/?type=qrcode">QR Code-generatorn</a>, välj fliken <strong>URL</strong> och klistra in länken.</li>
  <li>Lägg till en ram med texten ”MENY” eller ”SKANNA FÖR ATT SE MENYN” under Design.</li>
  <li>Anpassa färgerna efter restaurangens profil, men använd fortfarande en mörk färg mot ljus bakgrund.</li>
  <li>Ladda ner PNG med en modulstorlek som är tillräckligt stor för tryck.</li>
</ol>
<p>Använd en länk som inte kommer att ändras. Om menyn flyttas till en annan adress kan en redan tryckt QR Code inte uppdateras. Förklaringen finns i artikeln <a href="/artikel/apa-itu-qr-code">vad är en QR Code</a>.</p>

<h2>Steg 3: Tryck och placera</h2>
<ul>
  <li>Tryck i en storlek på minst cirka 3–5 cm så att den är lätt att skanna från stolen.</li>
  <li>Använd ett material som tål spill, som vinyldekaler eller laminerade kort utan överdriven glans.</li>
  <li>Placera den där den är lätt att nå, till exempel i ett akrylställ mitt på bordet.</li>
  <li>Lägg till bordsnumret bredvid QR Code om gästerna beställer via chatt.</li>
</ul>

<h2>Glöm inte gäster utan mobil</h2>
<p>Ha en eller två tryckta menyer till hands för gäster som inte har mobilen med sig, vars batteri har tagit slut eller som hellre läser en fysisk meny.</p>
<p>Du kan också skapa en <a href="/artikel/cara-membuat-qr-code-wifi">QR Code för WiFi</a> åt gästerna och placera den bredvid menyns QR Code.</p>
`
};
