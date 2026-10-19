// qr-code-menu-restoran
module.exports = {
  title: "QR Code til restaurantmenuer: Den komplette vejledning",
  desc: "En digital menu via QR Code gør det nemt for gæsterne og sparer trykomkostninger. Sådan laver du den, forbereder menuen og sætter den op på bordene.",
  tags: ["Erhverv", "QR Code"],
  coverCaption: "En QR Code på bordet fører gæsterne direkte til den digitale menu.",
  inlineCaption: "Placér QR Coden, så den er let at nå fra stolen.",
  faq: [
    ["Hvad er bedst til en digital menu: PDF eller en webside?", "En webside er som regel mere behagelig at læse på mobilen og åbner hurtigere. En PDF kan bruges, hvis filen er lille, og teksten er stor nok på skærmen."],
    ["Hvor stor skal en QR Code til menuen på bordet være?", "Cirka 3 til 5 cm er nok til at kunne scannes fra stolen. Brug et materiale, der tåler spild og ikke er for blankt."],
    ["Skal QR Coden trykkes igen, når menuen ændres?", "Nej, så længe linket forbliver det samme. Du skal blot opdatere indholdet på den side eller i den menufil, som QR Coden peger på."]
  ],
  body: `
<p>Digitale menuer via QR Code er i dag almindelige på caféer og restauranter. Gæsterne skal blot scanne QR Coden på bordet for at se retter, priser og billeder. For ejeren sparer det trykomkostninger og gør det nemt at ændre priser eller menu.</p>

<h2>Fordele ved en QR Code-menu</h2>
<ul>
  <li><strong>Let at opdatere</strong>: ændr priser eller tilføj retter uden at trykke menukortet igen.</li>
  <li><strong>Sparer penge</strong>: du skal blot trykke en lille QR Code til hvert bord.</li>
  <li><strong>Mere informativ</strong>: vis billeder, beskrivelser og mærkater som stærk eller vegetarisk.</li>
  <li><strong>Understøtter onlinebestilling</strong>: send gæsterne videre til en bestillingsformular eller WhatsApp.</li>
</ul>

<h2>Trin 1: Forbered en onlinemenu</h2>
<p>En QR Code indeholder kun et link, så du har brug for en menu, der kan åbnes på internettet. Mulighederne er blandt andet en side på din egen hjemmeside, en PDF-fil i et onlinelager, der er delt offentligt, eller en katalogside på en bestillingsplatform. Sørg for, at menuen er behagelig at læse på en mobilskærm: stor nok tekst, billeder der ikke er for tunge, og tydelige priser.</p>

<h2>Trin 2: Lav QR Coden</h2>
<ol>
  <li>Kopiér linket til din menu.</li>
  <li>Åbn <a href="/?type=qrcode">QR Code-generatoren</a>, vælg fanen <strong>URL</strong>, og indsæt linket.</li>
  <li>Tilføj en ramme med teksten "MENU" eller "SCAN FOR AT SE MENUEN" under Design.</li>
  <li>Tilpas farverne til restaurantens identitet, men brug stadig en mørk farve på en lys baggrund.</li>
  <li>Download PNG-filen med en modulstørrelse, der er stor nok til tryk.</li>
</ol>
<p>Brug et link, der ikke ændrer sig. Hvis menuen flyttes til en anden adresse, kan de allerede trykte QR Codes ikke opdateres. Forklaringen findes i artiklen <a href="/artikel/apa-itu-qr-code">hvad er en QR Code</a>.</p>

<h2>Trin 3: Tryk og sæt op</h2>
<ul>
  <li>Tryk i en størrelse på mindst cirka 3–5 cm, så den er let at scanne fra stolen.</li>
  <li>Brug et materiale, der tåler spild, for eksempel vinylklistermærker eller laminerede kort uden for meget glans.</li>
  <li>Placér den et sted, der er let at nå, for eksempel i et akrylstativ midt på bordet.</li>
  <li>Tilføj bordnummeret ved siden af QR Coden, hvis gæsterne bestiller via chat.</li>
</ul>

<h2>Glem ikke gæster uden telefon</h2>
<p>Hav et eller to trykte menukort klar til gæster, der ikke har deres telefon med, hvis batteri er løbet tør, eller som foretrækker at læse en fysisk menu.</p>
<p>Du kan også lave en <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> til gæsterne og placere den ved siden af menuens QR Code.</p>
`
};
