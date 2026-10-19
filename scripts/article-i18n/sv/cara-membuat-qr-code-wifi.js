// cara-membuat-qr-code-wifi
module.exports = {
  title: "Så skapar du en QR Code för WiFi så att gästerna slipper skriva lösenordet",
  desc: "Gästerna behöver bara skanna en QR Code för att ansluta till WiFi. Perfekt för kaféer, kontor, boenden och hemmet. Så här skapar du den och sätter upp den.",
  tags: ["Guider", "QR Code"],
  coverCaption: "Routerns WiFi-uppgifter kan lagras i en enda QR Code.",
  inlineCaption: "Kaféets gäster kan ansluta direkt utan att skriva lösenordet.",
  faq: [
    ["Kan alla mobiler skanna en QR Code för WiFi?", "Den inbyggda kameran i iPhone med iOS 11 eller senare och i de flesta Android-enheter med Android 10 eller senare kan läsa den direkt. Äldre mobiler kan behöva en app för att skanna QR-koder."],
    ["Är en QR Code för WiFi säker?", "Alla som skannar QR Code kan ansluta till ditt WiFi. Använd därför ett gästnätverk och sätt inte upp en QR Code för ett privat nätverk på offentliga platser."],
    ["Vad ska jag göra om WiFi-lösenordet ändras?", "Skapa och skriv ut en ny QR Code för WiFi, eftersom den gamla QR Code fortfarande innehåller det gamla lösenordet."]
  ],
  body: `
<p>Att bokstavera ett långt WiFi-lösenord för gäster är ofta krångligt, särskilt om det innehåller versaler, siffror och symboler. Med en <strong>QR Code för WiFi</strong> behöver gästerna bara rikta mobilkameran mot QR Code för att ansluta direkt.</p>

<h2>Så fungerar en QR Code för WiFi</h2>
<p>En QR Code för WiFi lagrar nätverksnamnet (SSID), säkerhetstypen och lösenordet i ett särskilt format som mobiler känner igen, till exempel <code>WIFI:T:WPA;S:Natverksnamn;P:Losenord;;</code>. Den inbyggda kameran i iPhone (iOS 11 eller senare) och i de flesta Android-enheter (Android 10 eller senare) kan läsa den direkt, utan någon extra app.</p>

<h2>Så här skapar du den</h2>
<ol>
  <li>Öppna <a href="/?type=qrcode">QR Code-generatorn</a> och välj fliken <strong>WiFi</strong> under Fyll i uppgifter.</li>
  <li>Skriv <strong>nätverksnamnet</strong> exakt som det visas i listan över WiFi-nätverk, inklusive stora och små bokstäver.</li>
  <li>Skriv <strong>lösenordet</strong> och välj säkerhetstyp. De flesta routrar i hem och på kontor använder WPA/WPA2/WPA3.</li>
  <li>Markera <strong>Dolt nätverk</strong> om namnet på ditt WiFi inte visas i listan.</li>
  <li>Lägg till en ram med text, till exempel ”SCAN WIFI”, så att gästerna förstår vad den är till för, och ladda sedan ner PNG.</li>
</ol>

<h2>Var ska den sitta?</h2>
<ul>
  <li>Ett litet kort på bordet i kaféet eller restaurangen.</li>
  <li>Väggen i vardagsrummet, receptionen eller kontorets mötesrum.</li>
  <li>Rummet på boendet, uppsatt nära dörren eller tv:n.</li>
  <li>Undersidan av routern hemma, så att familjen enkelt kan ansluta nya enheter.</li>
</ul>

<h2>Säkerhetstips</h2>
<ul>
  <li>Använd ett <strong>gästnätverk</strong> (guest network) om din router har stöd för det, så att gästerna inte hamnar i samma nätverk som kontorets datorer.</li>
  <li>Om WiFi-lösenordet ändras ska du skapa och skriva ut en ny QR Code, eftersom den gamla QR Code innehåller det gamla lösenordet.</li>
  <li>Sätt inte upp en QR Code för WiFi till ett privat nätverk på offentliga platser där vem som helst kan fotografera den.</li>
</ul>

<h2>Om QR Code inte ansluter</h2>
<p>Kontrollera stavningen av nätverksnamnet och lösenordet igen, eftersom en enda felaktig bokstav gör att mobilen inte kan ansluta. Se också till att den valda säkerhetstypen stämmer med routerns inställningar. Läs om andra skanningsproblem i <a href="/artikel/barcode-tidak-bisa-dipindai">orsaker till att streckkoden inte går att skanna</a>.</p>
`
};
