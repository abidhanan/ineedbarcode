// apa-itu-qr-code
module.exports = {
  title: "Hva er en QR Code, og hvordan fungerer den?",
  desc: "En QR Code kan lagre lenker, tekst og til og med WiFi-opplysninger, og den kan leses selv om den er delvis skadet. Slik fungerer den, og dette er fordelene.",
  tags: ["Grunnleggende", "QR Code"],
  coverCaption: "En QR Code kan skannes direkte med mobilkameraet.",
  inlineCaption: "Hver QR Code består av små svarte og hvite ruter.",
  faq: [
    ["Kan en QR Code utløpe?", "En statisk QR Code utløper aldri, fordi dataene er bakt direkte inn i bildet. En dynamisk QR Code kan slutte å virke hvis tjenesten som leverer lenken, legges ned eller abonnementet utløper."],
    ["Hvor mye data kan en QR Code lagre?", "Den største versjonen av QR Code kan lagre opptil 7 089 sifre eller rundt 2 953 byte. Men jo mindre data, desto lettere er det å skanne QR Code."],
    ["Kan en QR Code leses selv om den er delvis skadet?", "Ja. Takket være feilkorrigering kan en QR Code leses selv om rundt 7 % til 30 % av den er skadet, avhengig av hvilket korrigeringsnivå som brukes: L, M, Q eller H."]
  ],
  body: `
<p>En QR Code (Quick Response Code) er en kvadratisk 2D-strekkode som består av små svarte og hvite ruter. I motsetning til lineære strekkoder, som bare lagrer et titalls sifre, kan en QR Code lagre en nettlenke, lang tekst, telefonnummer, kontaktinformasjon og til og med opplysninger om et WiFi-nettverk.</p>
<p>QR Code ble utviklet i 1994 av det japanske selskapet Denso Wave for å spore kjøretøydeler i fabrikken. I dag brukes QR Code overalt, fra digitale betalinger til restaurantmenyer, fordi den kan skannes direkte med mobilkameraet.</p>

<h2>Delene i en QR Code</h2>
<ul>
  <li><strong>Tre store ruter i hjørnene</strong> (finder pattern): hjelper kameraet med å finne QR Code og avgjøre retningen, slik at den kan leses selv om den skannes skrått eller opp ned.</li>
  <li><strong>Justeringsmønster</strong> (alignment pattern): en liten rute som hjelper med å lese en QR Code som er bøyd eller sett fra en vinkel.</li>
  <li><strong>Dataområde</strong>: de små rutene som inneholder informasjonen du lagrer.</li>
  <li><strong>Stille sone</strong> (quiet zone): det tomme området rundt QR Code som gjør den lett å skille fra bakgrunnen.</li>
</ul>

<h2>Hvor mye data kan den lagre?</h2>
<p>QR Code finnes i 40 størrelsesversjoner. Den største versjonen kan lagre opptil 7 089 sifre eller rundt 2 953 byte data. I praksis gjelder det at jo mindre data som lagres, desto større blir rutene og desto lettere er QR Code å skanne. Derfor er en kort lenke bedre enn en svært lang.</p>

<h2>Lesbar selv når den er skadet</h2>
<p>QR Code bruker feilkorrigering (error correction). Det finnes fire nivåer:</p>
<ul>
  <li><strong>L</strong>: dataene kan gjenopprettes hvis rundt 7 % av QR Code er skadet.</li>
  <li><strong>M</strong>: rundt 15 %. Dette er et vanlig og balansert valg.</li>
  <li><strong>Q</strong>: rundt 25 %.</li>
  <li><strong>H</strong>: rundt 30 %, egnet for en QR Code som skal få en logo eller trykkes på steder der den lett blir skitten.</li>
</ul>
<p>Jo høyere korrigeringsnivå, desto flere ruter trengs, og derfor ser mønsteret i QR Code tettere ut.</p>

<h2>Hva kan lagres i en QR Code?</h2>
<ul>
  <li>Lenker til nettsteder, nettbutikker eller skjemaer.</li>
  <li>WiFi-opplysninger, slik at gjester kan koble til uten å skrive passordet. Se veiledningen om <a href="/artikel/cara-membuat-qr-code-wifi">QR Code for WiFi</a>.</li>
  <li>Digitale visittkort (vCard), e-post, SMS og WhatsApp-chat.</li>
  <li>Steder på kartet og arrangementsplaner.</li>
</ul>

<h2>Statisk og dynamisk QR Code</h2>
<p>En QR Code som lages direkte fra dataene, kalles en <strong>statisk QR Code</strong>: innholdet er bakt inn i bildet og kan ikke endres, men den utløper heller aldri. En <strong>dynamisk</strong> QR Code inneholder en kort lenke fra en tjeneste som deretter videresender til målet ditt; målet kan byttes, men QR Code slutter å virke hvis tjenesten legges ned. For de fleste behov er en statisk QR Code nok, og den er tryggere på lang sikt.</p>

<p>Vil du prøve? Lag en <a href="/?type=qrcode">gratis QR Code</a> nå, eller les <a href="/artikel/cara-membuat-qr-code-gratis">hvordan du lager en QR Code i 3 trinn</a>.</p>
`
};
