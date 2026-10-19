// apa-itu-qr-code
module.exports = {
  title: "Hvad er en QR Code, og hvordan fungerer den?",
  desc: "En QR Code kan gemme links, tekst og endda WiFi-oplysninger og kan stadig læses, selv om en del af den er beskadiget. Sådan fungerer den, og det er dens fordele.",
  tags: ["Grundlæggende", "QR Code"],
  coverCaption: "En QR Code kan scannes direkte med mobilens kamera.",
  inlineCaption: "Hver QR Code består af små sorte og hvide firkanter.",
  faq: [
    ["Kan en QR Code udløbe?", "En statisk QR Code udløber aldrig, fordi dataene er indlejret direkte i billedet. En dynamisk QR Code kan holde op med at virke, hvis tjenesten bag linket lukker, eller abonnementet udløber."],
    ["Hvor mange data kan en QR Code rumme?", "Den største version af en QR Code kan rumme op til 7.089 cifre eller cirka 2.953 byte. Men jo færre data, desto lettere er QR Coden at scanne."],
    ["Kan en QR Code stadig læses, hvis en del af den er beskadiget?", "Ja. Takket være fejlkorrektion kan en QR Code stadig læses, selv om cirka 7 % til 30 % af den er beskadiget, afhængigt af hvilket korrektionsniveau, L, M, Q eller H, der bruges."]
  ],
  body: `
<p>En QR Code (Quick Response Code) er en kvadratisk 2D-stregkode, der består af små sorte og hvide firkanter. I modsætning til en lineær stregkode, som kun rummer et dusin eller flere cifre, kan en QR Code gemme et link til en hjemmeside, lang tekst, et telefonnummer, en kontakt og endda oplysninger om et WiFi-netværk.</p>
<p>QR Coden blev udviklet i 1994 af den japanske virksomhed Denso Wave for at spore bildele på fabrikker. I dag bruges QR Codes overalt, fra digitale betalinger til restaurantmenuer, fordi de kan scannes direkte med mobilens kamera.</p>

<h2>En QR Codes dele</h2>
<ul>
  <li><strong>Tre store firkanter i hjørnerne</strong> (finder pattern): hjælper kameraet med at finde QR Coden og bestemme dens retning, så den stadig kan læses, selv om den scannes skævt eller på hovedet.</li>
  <li><strong>Justeringsmønster</strong> (alignment pattern): en lille firkant, der hjælper med at læse en QR Code, som er bøjet eller ses fra en vinkel.</li>
  <li><strong>Dataområde</strong>: de små firkanter, der indeholder de oplysninger, du gemmer.</li>
  <li><strong>Stille zone</strong> (quiet zone): det tomme område rundt om QR Coden, så den let kan skelnes fra baggrunden.</li>
</ul>

<h2>Hvor mange data kan den rumme?</h2>
<p>QR Codes findes i 40 størrelsesversioner. Den største version kan rumme op til 7.089 cifre eller cirka 2.953 byte data. I praksis gælder det, at jo færre data der gemmes, desto større bliver firkanterne, og desto lettere er QR Coden at scanne. Derfor er et kort link bedre end et meget langt link.</p>

<h2>Kan læses, selv om den er beskadiget</h2>
<p>QR Codes bruger fejlkorrektion (error correction). Der findes fire niveauer:</p>
<ul>
  <li><strong>L</strong>: dataene kan stadig gendannes, hvis cirka 7 % af QR Coden er beskadiget.</li>
  <li><strong>M</strong>: cirka 15 %. Dette er det almindelige og afbalancerede valg.</li>
  <li><strong>Q</strong>: cirka 25 %.</li>
  <li><strong>H</strong>: cirka 30 %, velegnet til QR Codes, der skal have et logo, eller som trykkes et sted, hvor de let bliver snavsede.</li>
</ul>
<p>Jo højere korrektionsniveau, desto flere firkanter kræves der, så QR Codens mønster ser tættere ud.</p>

<h2>Hvad kan man gemme i en QR Code?</h2>
<ul>
  <li>Links til hjemmesider, webbutikker eller formularer.</li>
  <li>WiFi-oplysninger, så gæster kan koble sig på uden at taste adgangskoden. Se vejledningen om <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a>.</li>
  <li>Digitale visitkort (vCard), e-mail, sms og WhatsApp-chat.</li>
  <li>Placeringer på kortet og tidspunkter for arrangementer.</li>
</ul>

<h2>Statiske og dynamiske QR Codes</h2>
<p>En QR Code, der laves direkte ud fra dataene, kaldes en <strong>statisk QR Code</strong>: indholdet er indlejret i billedet og kan ikke ændres, men det udløber heller aldrig. En <strong>dynamisk</strong> QR Code indeholder et kort link fra en tjeneste, som derefter videresender til din destination; destinationen kan ændres, men QR Coden holder op med at virke, hvis tjenesten lukker. Til de fleste formål er en statisk QR Code tilstrækkelig og mere sikker på lang sigt.</p>

<p>Vil du prøve? Lav en <a href="/?type=qrcode">gratis QR Code</a> nu, eller læs <a href="/artikel/cara-membuat-qr-code-gratis">sådan laver du en QR Code i 3 trin</a>.</p>
`
};
