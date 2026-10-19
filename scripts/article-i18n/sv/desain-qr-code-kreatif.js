// desain-qr-code-kreatif
module.exports = {
  title: "Kreativ design av QR Code som fortfarande går att skanna",
  desc: "En QR Code kan formas som ett hjärta eller en cirkel, eller få ram och färger. Lär dig reglerna för att göra designen snygg och samtidigt lätt att skanna.",
  tags: ["Design", "QR Code"],
  coverCaption: "Färger gör en QR Code mer tilltalande, så länge kontrasten förblir stark.",
  inlineCaption: "En designad QR Code bör alltid testas innan den trycks.",
  faq: [
    ["Går en hjärtformad QR Code att skanna?", "Ja. Den ursprungliga QR Code finns kvar intakt i mitten och resten är bara ett dekorativt mönster. Så länge kontrasten är stark och storleken tillräcklig går den att läsa."],
    ["Vilka färger är säkra för en QR Code?", "Mörka färger som svart, mörkblått, mörkgrönt, lila eller mörkbrunt mot en vit eller mycket ljus bakgrund."],
    ["Kan en QR Code förses med text eller ram?", "Ja. En ram med en uppmaning som ”SKANNA MIG” hjälper faktiskt människor att förstå vad den är till för, så länge ramen inte täcker QR Code."]
  ],
  body: `
<p>En svartvit QR Code är visserligen funktionell, men ser ofta stel ut på förpackningar, inbjudningar eller reklammaterial. Med lite design kan en QR Code bli mer tilltalande utan att förlora sin funktion. Nyckeln är att förstå vilka delar som får ändras och vilka som måste förbli intakta.</p>

<h2>Yttre form: hjärta, cirkel och mer</h2>
<p>Under Design i <a href="/?type=qrcode">QR Code-generatorn</a> kan du välja former som cirkel, hjärta, sexhörning, åttahörning, stjärna eller romb. Den ursprungliga QR Code ligger kvar i mitten, och resten fylls med ett dekorativt mönster tills den valda formen bildas. Det dekorativa mönstret innehåller inga data och stör därför inte skanningen, så länge det finns tomt utrymme runt den ursprungliga QR Code.</p>

<h2>Punktstil</h2>
<p>Rutorna i en QR Code kan göras om till rundade former eller runda punkter. För att koden ska förbli lätt att skanna bör de tre stora rutorna i hörnen (finder pattern) behållas som hela rutor, eftersom det är dem kameran letar efter först. Vår generator ritar alltid dessa delar som hela rutor, som mest med rundade hörn, oavsett vilken punktstil du väljer.</p>

<h2>Färger</h2>
<ul>
  <li>Använd en <strong>mörk</strong> färg för QR Code och en <strong>ljus</strong> färg för bakgrunden. Mörkblått, mörkgrönt, lila eller mörkbrunt är i regel säkra val.</li>
  <li>Undvik bleka färger för QR Code, som gult, ljusrosa eller ljusgrått.</li>
  <li>Invertera inte färgerna till en ljus QR Code mot mörk bakgrund, eftersom inte alla skanningsappar har stöd för det.</li>
</ul>

<h2>Ramar och uppmaningar</h2>
<p>Ramar med uppmaningar som ”SKANNA MIG”, ”MENY” eller ”SCAN WIFI” har visat sig hjälpa människor att förstå vad QR Code är till för. Du kan välja en ram med etikett nedtill, etikett upptill, hörn, pratbubbla, cirkel eller band, och sedan ändra text och färg.</p>

<h2>Regler för att designen ska förbli läsbar</h2>
<ol>
  <li>Behåll en stark <strong>kontrast</strong> mellan QR Code och bakgrunden.</li>
  <li>Låt de <strong>tre markeringsrutorna</strong> i hörnen förbli tydliga och otäckta.</li>
  <li>Lämna <strong>tomt utrymme</strong> runt QR Code och ramen.</li>
  <li>Förminska inte en designad QR Code för mycket. Former som hjärtat gör att den ursprungliga QR Code blir mindre än bildens totala storlek.</li>
  <li><strong>Testa</strong> med flera mobiler innan du trycker.</li>
</ol>

<p>Om din design är svår att skanna kan du återställa inställningarna en i taget med knappen <strong>Återställ</strong> för att hitta orsaken. Andra vanliga orsaker kan du läsa om i <a href="/artikel/barcode-tidak-bisa-dipindai">7 orsaker till att streckkoden inte går att skanna</a>.</p>
`
};
