// cara-membuat-qr-code-wifi
module.exports = {
  title: "Hoe om 'n WiFi QR Code te maak sodat gaste nie die wagwoord hoef in te tik nie",
  desc: "Gaste hoef net 'n QR Code te skandeer om aan die WiFi te koppel. Geskik vir kafees, kantore, verblyf en tuis. Só maak u dit en sit u dit op.",
  tags: ["Gids", "QR Code"],
  coverCaption: "Die WiFi-data van die roeteerder kan in een QR Code gestoor word.",
  inlineCaption: "Kafeegaste kan dadelik koppel sonder om die wagwoord in te tik.",
  faq: [
    ["Kan alle fone 'n WiFi QR Code skandeer?", "Die ingeboude kamera van iPhones met iOS 11 of nuwer en die meeste Android-fone met Android 10 of nuwer kan dit direk lees. Ouer fone het moontlik 'n QR-skandeertoepassing nodig."],
    ["Is 'n WiFi QR Code veilig?", "Enigiemand wat daardie QR Code skandeer, kan aan u WiFi koppel. Gebruik dus 'n gastenetwerk, en moenie 'n QR Code van u private netwerk op openbare plekke opsit nie."],
    ["Wat moet ek doen as die WiFi-wagwoord verander word?", "Maak en druk 'n nuwe WiFi QR Code, omdat die ou QR Code steeds die ou wagwoord bevat."]
  ],
  body: `
<p>Om 'n lang WiFi-wagwoord vir gaste te spel, is dikwels omslagtig, veral as dit hoofletters, syfers en simbole bevat. Met 'n <strong>WiFi QR Code</strong> hoef gaste net hul foon se kamera op die QR Code te rig, en hulle is dadelik gekoppel.</p>

<h2>Hoe 'n WiFi QR Code werk</h2>
<p>'n WiFi QR Code stoor die netwerknaam (SSID), die sekuriteitstipe en die wagwoord in 'n spesiale formaat wat fone herken, byvoorbeeld <code>WIFI:T:WPA;S:Netwerknaam;P:Wagwoord;;</code>. Die ingeboude kamera van iPhones (iOS 11 of nuwer) en die meeste Android-fone (Android 10 of nuwer) kan dit direk lees, sonder ekstra toepassings.</p>

<h2>Stappe om dit te maak</h2>
<ol>
  <li>Maak die <a href="/?type=qrcode">QR Code-generator</a> oop en kies die <strong>WiFi</strong>-oortjie onder Data.</li>
  <li>Tik die <strong>netwerknaam</strong> presies soos dit in die WiFi-lys verskyn, insluitend hoof- en kleinletters.</li>
  <li>Tik die <strong>wagwoord</strong> in en kies die sekuriteitstipe. Die meeste roeteerders by die huis en op kantoor gebruik WPA/WPA2/WPA3.</li>
  <li>Merk <strong>Versteekte netwerk</strong> as u WiFi-naam nie in die lys gewys word nie.</li>
  <li>Voeg 'n raam by met byvoorbeeld die teks "SCAN WIFI" sodat gaste weet waarvoor dit is, en laai dan die PNG af.</li>
</ol>

<h2>Waar sit u dit op?</h2>
<ul>
  <li>'n Klein kaartjie op die tafel in die kafee of restaurant.</li>
  <li>Teen die muur van die sitkamer, ontvangs of die kantoor se vergaderkamer.</li>
  <li>In kamers by verblyfplekke, naby die deur of die TV vasgeplak.</li>
  <li>Aan die onderkant van die roeteerder by die huis, sodat die gesin nuwe toestelle maklik kan koppel.</li>
</ul>

<h2>Sekuriteitswenke</h2>
<ul>
  <li>Gebruik 'n <strong>gastenetwerk</strong> (guest network) as u roeteerder dit ondersteun, sodat gaste nie op dieselfde netwerk as die kantoorrekenaars kom nie.</li>
  <li>As die WiFi-wagwoord verander word, maak en druk die QR Code weer, omdat die ou QR Code die ou wagwoord sal bevat.</li>
  <li>Moenie 'n WiFi QR Code vir 'n private netwerk op openbare plekke opsit waar enigiemand dit kan afneem nie.</li>
</ul>

<h2>As die QR Code nie koppel nie</h2>
<p>Kontroleer weer die spelling van die netwerknaam en die wagwoord, want een verkeerde letter veroorsaak dat die foon nie kan koppel nie. Maak ook seker dat die gekose sekuriteitstipe ooreenstem met die roeteerder se instellings. Vir ander skanderingsprobleme, lees <a href="/artikel/barcode-tidak-bisa-dipindai">redes waarom 'n strepieskode nie geskandeer kan word nie</a>.</p>
`
};
