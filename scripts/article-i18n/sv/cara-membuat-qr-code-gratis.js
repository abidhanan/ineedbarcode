// cara-membuat-qr-code-gratis
module.exports = {
  title: "Så skapar du en QR Code gratis i 3 steg",
  desc: "En praktisk guide till att skapa QR Code för länkar, WiFi, kontakter eller WhatsApp utan app och utan registrering, med tips för att göra den lätt att skanna.",
  tags: ["Guider", "QR Code"],
  coverCaption: "En QR Code redo att användas för länkar, WiFi eller kontakter.",
  inlineCaption: "Det räcker att öppna webbläsaren på datorn eller mobilen, utan extra appar.",
  faq: [
    ["Kan en gratis skapad QR Code användas i företaget?", "Ja. Den statiska QR Code du skapar kan användas fritt på förpackningar, broschyrer, menyer eller reklammaterial, utan vattenstämpel och utan licensavgifter."],
    ["Kan innehållet i en QR Code ändras efter att den har tryckts?", "En statisk QR Code kan inte ändras efter att den har tryckts. Om innehållet kan komma att ändras, låt QR Code leda till en sida vars innehåll du själv kan uppdatera, till exempel en sida på din webbplats."],
    ["Vilket bildformat är bäst för att trycka en QR Code?", "PNG, eftersom rutornas kanter förblir skarpa. Ladda ner med tillräckligt stor modulstorlek och förminska sedan i designprogrammet vid behov, inte tvärtom."]
  ],
  body: `
<p>Att skapa en QR Code kräver i dag ingen särskild app eller något abonnemang. Med en onlinegenerator som <a href="/">I Need Barcode</a> kan du skapa en QR Code på några sekunder direkt i webbläsaren, oavsett om du använder mobilen eller datorn.</p>

<h2>Steg 1: Välj streckkodstyp</h2>
<p>Öppna <a href="/?type=qrcode">QR Code-generatorn</a> och välj <strong>QR Code</strong> under Streckkodstyp. QR Code är det bästa valet om streckkoden ska skannas med en mobilkamera.</p>

<h2>Steg 2: Fyll i uppgifterna</h2>
<p>Välj datatyp efter behov:</p>
<ul>
  <li><strong>URL</strong>: länk till en webbplats, webbutik, Google Maps eller ett formulär.</li>
  <li><strong>WiFi</strong>: nätverksnamn och lösenord, så att gäster kan ansluta utan att skriva något.</li>
  <li><strong>Kontakt</strong>: namn, telefonnummer, e-post och företag i form av ett digitalt visitkort.</li>
  <li><strong>WhatsApp</strong>: nummer och inledande meddelande, så att kunderna direkt öppnar en chatt med dig.</li>
  <li><strong>Text, E-post, Telefon, SMS, Plats, Evenemang</strong> för andra behov.</li>
</ul>
<p>Förhandsgranskningen ändras direkt medan du skriver, så du kan kontrollera resultatet innan du laddar ner.</p>

<h2>Steg 3: Anpassa utseendet och ladda ner</h2>
<p>Under Inställningar kan du justera modulstorlek (ju större, desto skarpare utskrift), färg och marginal. Under Design kan du ge koden en form, som en cirkel eller ett hjärta, en punktstil och en ram med text som ”SKANNA MIG”. När du är klar trycker du på <strong>Ladda ner PNG</strong>.</p>

<h2>Tips för att din QR Code ska vara lätt att skanna</h2>
<ul>
  <li><strong>Testa innan du trycker.</strong> Skanna med två eller tre olika mobiler från ett rimligt avstånd.</li>
  <li><strong>Använd stark kontrast.</strong> En mörk färg mot ljus bakgrund är säkrast. Undvik en ljus QR Code mot mörk bakgrund.</li>
  <li><strong>Gör den inte för liten.</strong> För skanning på nära håll är cirka 2 × 2 cm en säker gräns. Ju längre skanningsavstånd, desto större bör den vara. Läs också <a href="/artikel/ukuran-barcode-untuk-dicetak">streckkodsstorlek för utskrift</a>.</li>
  <li><strong>Lämna tomt utrymme</strong> runt QR Code så att den inte ligger tätt intill bilder eller annan text.</li>
  <li><strong>Använd en kort länk.</strong> Mindre data ger ett glesare mönster som är lättare att läsa.</li>
</ul>

<h2>Behöver du många QR Code på en gång?</h2>
<p>Aktivera läget <strong>Massgenerering</strong>, skriv en uppgift per rad (upp till 100 rader) och ladda ner allt i en enda ZIP-fil. Det passar bra för inventarieetiketter, deltagarkort eller evenemangsbiljetter.</p>
`
};
