// desain-qr-code-kreatif
module.exports = {
  title: "Kreativt QR Code-design, der stadig kan scannes",
  desc: "En QR Code kan formes som et hjerte eller en cirkel eller få en ramme og farver. Lær reglerne, så designet både bliver flot og er let at scanne.",
  tags: ["Design", "QR Code"],
  coverCaption: "Farver gør en QR Code mere iøjnefaldende, så længe kontrasten forbliver stærk.",
  inlineCaption: "Et QR Code-design bør altid testes, før det trykkes.",
  faq: [
    ["Kan en hjerteformet QR Code stadig scannes?", "Ja. Den egentlige QR Code forbliver intakt i midten, og resten er blot et dekorativt mønster. Så længe kontrasten er stærk, og størrelsen er tilstrækkelig, kan QR Coden stadig læses."],
    ["Hvilke farver er sikre til en QR Code?", "Mørke farver som sort, mørkeblå, mørkegrøn, lilla eller mørkebrun på en hvid eller meget lys baggrund."],
    ["Kan en QR Code få tekst eller en ramme?", "Ja. En ramme med en opfordring som \"SCAN MIG\" hjælper faktisk folk med at forstå, hvad den er til, så længe rammen ikke dækker QR Coden."]
  ],
  body: `
<p>En sort-hvid QR Code er ganske vist funktionel, men ser ofte stiv ud på emballage, invitationer eller reklamemateriale. Med et lille designmæssigt touch kan en QR Code se mere tiltalende ud uden at miste sin funktion. Nøglen er at forstå, hvilke dele der må ændres, og hvilke der skal forblive intakte.</p>

<h2>Ydre form: hjerte, cirkel og andre</h2>
<p>Under Design i <a href="/?type=qrcode">QR Code-generatoren</a> kan du vælge former som cirkel, hjerte, sekskant, ottekant, stjerne eller rombe. Den egentlige QR Code bliver i midten, og resten fyldes med et dekorativt mønster, indtil den valgte form er dannet. Det dekorative mønster indeholder ingen data og forstyrrer derfor ikke scanningen, så længe der er tom plads rundt om den egentlige QR Code.</p>

<h2>Prikstil</h2>
<p>QR Codens firkanter kan ændres til afrundede former eller runde prikker. For at den stadig skal være let at scanne, bør de tre store firkanter i hjørnerne (finder pattern) forblive intakte som firkanter, fordi det er dem, kameraet leder efter først. Vores generator tegner altid disse dele som hele firkanter, højst med afrundede hjørner, uanset hvilken prikstil du vælger.</p>

<h2>Farver</h2>
<ul>
  <li>Brug en <strong>mørk</strong> farve til QR Coden og en <strong>lys</strong> farve til baggrunden. Mørkeblå, mørkegrøn, lilla eller mørkebrun er generelt sikre.</li>
  <li>Undgå blege farver til QR Coden, såsom gul, lyserød eller lysegrå.</li>
  <li>Vend ikke farverne om til en lys QR Code på mørk baggrund, fordi ikke alle scannerapps understøtter det.</li>
</ul>

<h2>Rammer og opfordringer</h2>
<p>En ramme med en opfordring som "SCAN MIG", "MENU" eller "SCAN WIFI" har vist sig at hjælpe folk med at forstå, hvad en QR Code er til. Du kan vælge en ramme med etiket forneden, etiket foroven, hjørne, taleboble, cirkel eller bånd og derefter ændre teksten og farven.</p>

<h2>Regler, så designet stadig kan læses</h2>
<ol>
  <li>Bevar en stærk <strong>kontrast</strong> mellem QR Coden og baggrunden.</li>
  <li>Lad de <strong>tre markeringsfirkanter</strong> i hjørnerne være tydelige og utildækkede.</li>
  <li>Lad der være <strong>tom plads</strong> rundt om QR Coden og rammen.</li>
  <li>Gør ikke en designet QR Code alt for lille. Former som et hjerte gør den egentlige QR Codes område mindre end billedets samlede størrelse.</li>
  <li><strong>Test</strong> med flere telefoner, før du trykker.</li>
</ol>

<p>Hvis dit design er svært at scanne, så sæt indstillingerne tilbage én ad gangen med knappen <strong>Nulstil</strong> for at finde årsagen. Andre almindelige årsager kan du læse om i <a href="/artikel/barcode-tidak-bisa-dipindai">7 årsager til, at en stregkode ikke kan scannes</a>.</p>
`
};
