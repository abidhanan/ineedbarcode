// cara-membuat-qr-code-wifi
module.exports = {
  title: "Sådan laver du en WiFi QR Code, så gæster ikke skal taste adgangskoden",
  desc: "Gæster skal blot scanne en QR Code for at komme på WiFi. Velegnet til caféer, kontorer, overnatningssteder og hjemmet. Sådan laver og opsætter du den.",
  tags: ["Guide", "QR Code"],
  coverCaption: "WiFi-oplysningerne fra routeren kan gemmes i én QR Code.",
  inlineCaption: "Caféens gæster kan koble sig på med det samme uden at taste adgangskoden.",
  faq: [
    ["Kan alle telefoner scanne en WiFi QR Code?", "Det indbyggede kamera på iPhone med iOS 11 eller nyere og de fleste Android-telefoner med Android 10 eller nyere kan læse den direkte. Ældre telefoner kan kræve en app til scanning af QR Codes."],
    ["Er en WiFi QR Code sikker?", "Alle, der scanner QR Coden, kan koble sig på dit WiFi. Brug derfor et gæstenetværk, og sæt ikke en QR Code til dit private netværk op på offentlige steder."],
    ["Hvad skal jeg gøre, hvis WiFi-adgangskoden ændres?", "Lav og tryk en ny WiFi QR Code, fordi den gamle QR Code stadig indeholder den gamle adgangskode."]
  ],
  body: `
<p>Det er ofte besværligt at stave en lang WiFi-adgangskode for gæster, især når den indeholder store bogstaver, tal og symboler. Med en <strong>WiFi QR Code</strong> skal gæsterne blot rette mobilens kamera mod QR Coden, og så er de koblet på med det samme.</p>

<h2>Sådan fungerer en WiFi QR Code</h2>
<p>En WiFi QR Code gemmer netværksnavnet (SSID), sikkerhedstypen og adgangskoden i et særligt format, som telefoner genkender, for eksempel <code>WIFI:T:WPA;S:Netværksnavn;P:Adgangskode;;</code>. Det indbyggede kamera på iPhone (iOS 11 eller nyere) og de fleste Android-telefoner (Android 10 eller nyere) kan læse den direkte, uden ekstra apps.</p>

<h2>Sådan laver du den</h2>
<ol>
  <li>Åbn <a href="/?type=qrcode">QR Code-generatoren</a>, og vælg fanen <strong>WiFi</strong> under Data.</li>
  <li>Skriv <strong>netværksnavnet</strong> nøjagtigt, som det vises på WiFi-listen, inklusive store og små bogstaver.</li>
  <li>Skriv <strong>adgangskoden</strong>, og vælg sikkerhedstypen. De fleste routere i hjem og på kontorer bruger WPA/WPA2/WPA3.</li>
  <li>Sæt flueben i <strong>Skjult netværk</strong>, hvis dit WiFi-navn ikke vises på listen.</li>
  <li>Tilføj en ramme med for eksempel teksten "SCAN WIFI", så gæsterne ved, hvad den er til, og download derefter PNG-filen.</li>
</ol>

<h2>Hvor skal den sættes op?</h2>
<ul>
  <li>Et lille kort på bordet i caféen eller restauranten.</li>
  <li>På væggen i opholdsrummet, i receptionen eller i kontorets mødelokale.</li>
  <li>På værelser på overnatningssteder, sat op ved døren eller fjernsynet.</li>
  <li>På undersiden af routeren derhjemme, så familien let kan koble nye enheder på.</li>
</ul>

<h2>Sikkerhedstips</h2>
<ul>
  <li>Brug et <strong>gæstenetværk</strong> (guest network), hvis din router understøtter det, så gæster ikke kommer på samme netværk som kontorets computere.</li>
  <li>Hvis WiFi-adgangskoden ændres, skal du lave og trykke QR Coden igen, fordi den gamle QR Code indeholder den gamle adgangskode.</li>
  <li>Sæt ikke en WiFi QR Code til et privat netværk op på offentlige steder, hvor alle kan fotografere den.</li>
</ul>

<h2>Hvis QR Coden ikke kobler på</h2>
<p>Kontrollér stavningen af netværksnavnet og adgangskoden igen, for ét forkert bogstav får telefonen til ikke at kunne koble sig på. Sørg også for, at den valgte sikkerhedstype passer til routerens indstillinger. Ved andre scanningsproblemer kan du læse om <a href="/artikel/barcode-tidak-bisa-dipindai">årsager til, at en stregkode ikke kan scannes</a>.</p>
`
};
