// apa-itu-qr-code
module.exports = {
  title: "Vad är en QR Code och hur fungerar den?",
  desc: "En QR Code kan lagra länkar, text och till och med WiFi-uppgifter, och den går att läsa även om den är delvis skadad. Så här fungerar den och det här är fördelarna.",
  tags: ["Grunder", "QR Code"],
  coverCaption: "En QR Code kan skannas direkt med mobilkameran.",
  inlineCaption: "Varje QR Code består av små svarta och vita rutor.",
  faq: [
    ["Kan en QR Code sluta gälla?", "En statisk QR Code slutar aldrig gälla, eftersom dess data är inbäddad direkt i bilden. En dynamisk QR Code kan sluta fungera om tjänsten som tillhandahåller länken läggs ner eller om abonnemanget upphör."],
    ["Hur mycket data kan en QR Code lagra?", "Den största versionen av QR Code kan lagra upp till 7 089 siffror eller cirka 2 953 byte. Men ju mindre data, desto lättare är det att skanna QR Code."],
    ["Går en QR Code att läsa om den är delvis skadad?", "Ja. Tack vare felkorrigering går en QR Code att läsa även om cirka 7 % till 30 % av den är skadad, beroende på vilken korrigeringsnivå som används: L, M, Q eller H."]
  ],
  body: `
<p>En QR Code (Quick Response Code) är en kvadratisk 2D-streckkod som består av små svarta och vita rutor. Till skillnad från linjära streckkoder, som bara lagrar ett tiotal siffror, kan en QR Code lagra en webblänk, lång text, telefonnummer, kontaktuppgifter och till och med uppgifter om ett WiFi-nätverk.</p>
<p>QR Code utvecklades 1994 av det japanska företaget Denso Wave för att spåra fordonsdelar i fabriken. I dag används QR Code överallt, från digitala betalningar till restaurangmenyer, eftersom den kan skannas direkt med mobilkameran.</p>

<h2>Delarna i en QR Code</h2>
<ul>
  <li><strong>Tre stora rutor i hörnen</strong> (finder pattern): hjälper kameran att hitta QR Code och avgöra dess riktning, så att den går att läsa även om den skannas snett eller upp och ner.</li>
  <li><strong>Justeringsmönster</strong> (alignment pattern): en liten ruta som hjälper till att läsa en QR Code som är böjd eller ses från en vinkel.</li>
  <li><strong>Dataområde</strong>: de små rutorna som innehåller informationen du lagrar.</li>
  <li><strong>Tyst zon</strong> (quiet zone): det tomma utrymmet runt QR Code som gör den lätt att skilja från bakgrunden.</li>
</ul>

<h2>Hur mycket data kan den lagra?</h2>
<p>QR Code finns i 40 storleksversioner. Den största versionen kan lagra upp till 7 089 siffror eller cirka 2 953 byte data. I praktiken gäller att ju mindre data som lagras, desto större blir rutorna och desto lättare är QR Code att skanna. Därför är en kort länk bättre än en mycket lång.</p>

<h2>Läsbar även när den är skadad</h2>
<p>QR Code använder felkorrigering (error correction). Det finns fyra nivåer:</p>
<ul>
  <li><strong>L</strong>: data kan återställas om cirka 7 % av QR Code är skadad.</li>
  <li><strong>M</strong>: cirka 15 %. Det här är ett vanligt och balanserat val.</li>
  <li><strong>Q</strong>: cirka 25 %.</li>
  <li><strong>H</strong>: cirka 30 %, lämpligt för en QR Code som ska förses med en logotyp eller tryckas på platser där den lätt blir smutsig.</li>
</ul>
<p>Ju högre korrigeringsnivå, desto fler rutor behövs, och därför ser mönstret i QR Code tätare ut.</p>

<h2>Vad kan man lagra i en QR Code?</h2>
<ul>
  <li>Länkar till webbplatser, webbutiker eller formulär.</li>
  <li>WiFi-uppgifter, så att gäster kan ansluta utan att skriva lösenordet. Se guiden om <a href="/artikel/cara-membuat-qr-code-wifi">QR Code för WiFi</a>.</li>
  <li>Digitala visitkort (vCard), e-post, sms och WhatsApp-chatt.</li>
  <li>Platser på kartan och evenemangsscheman.</li>
</ul>

<h2>Statisk och dynamisk QR Code</h2>
<p>En QR Code som skapas direkt utifrån data kallas för en <strong>statisk QR Code</strong>: innehållet är inbäddat i bilden och kan inte ändras, men slutar heller aldrig gälla. En <strong>dynamisk</strong> QR Code innehåller en kort länk från en tjänst som sedan vidarebefordrar till ditt mål; målet kan bytas, men QR Code slutar fungera om tjänsten läggs ner. För de flesta behov räcker en statisk QR Code, och den är säkrare på lång sikt.</p>

<p>Vill du prova? Skapa en <a href="/?type=qrcode">gratis QR Code</a> nu, eller läs <a href="/artikel/cara-membuat-qr-code-gratis">hur du skapar en QR Code i 3 steg</a>.</p>
`
};
