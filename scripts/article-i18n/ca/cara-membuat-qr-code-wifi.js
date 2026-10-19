// cara-membuat-qr-code-wifi
module.exports = {
  title: "Com crear un QR Code de WiFi perquè els convidats no hagin d'escriure la contrasenya",
  desc: "Els convidats només han d'escanejar un QR Code per connectar-se al WiFi. Ideal per a cafeteries, oficines, allotjaments i cases. Descobreixi com crear-lo i on col·locar-lo.",
  tags: ["Guia", "QR Code"],
  coverCaption: "Les dades de WiFi de l'encaminador es poden desar en un sol QR Code.",
  inlineCaption: "Els clients de la cafeteria es poden connectar de seguida sense escriure la contrasenya.",
  faq: [
    ["Tots els mòbils poden escanejar un QR Code de WiFi?", "La càmera integrada de l'iPhone amb iOS 11 o posterior i la majoria de dispositius amb Android 10 o posterior el poden llegir directament. Els mòbils més antics poden necessitar una aplicació d'escaneig de QR."],
    ["El QR Code de WiFi és segur?", "Qualsevol persona que escanegi aquest QR Code es podrà connectar al seu WiFi. Per això, utilitzi una xarxa per a convidats i no col·loqui el QR Code de la seva xarxa privada en llocs públics."],
    ["Què cal fer si es canvia la contrasenya del WiFi?", "Torni a crear i a imprimir el QR Code de WiFi, perquè l'antic QR Code encara conté la contrasenya antiga."]
  ],
  body: `
<p>Lletrejar una contrasenya de WiFi llarga als convidats sovint és pesat, sobretot si té majúscules, números i símbols. Amb un <strong>QR Code de WiFi</strong>, n'hi ha prou que el convidat apunti la càmera del mòbil al QR Code per connectar-se de seguida.</p>

<h2>Com funciona el QR Code de WiFi</h2>
<p>El QR Code de WiFi desa el nom de la xarxa (SSID), el tipus de seguretat i la contrasenya en un format especial que reconeixen els mòbils, per exemple <code>WIFI:T:WPA;S:NomDeLaXarxa;P:Contrasenya;;</code>. La càmera integrada de l'iPhone (iOS 11 o posterior) i la majoria de dispositius Android (Android 10 o posterior) el poden llegir directament, sense aplicacions addicionals.</p>

<h2>Passos per crear-lo</h2>
<ol>
  <li>Obri el <a href="/?type=qrcode">generador de QR Code</a> i seleccioni la pestanya <strong>WiFi</strong> a l'apartat Dades.</li>
  <li>Escrigui el <strong>nom de la xarxa</strong> exactament tal com apareix a la llista de xarxes WiFi, respectant les majúscules i les minúscules.</li>
  <li>Escrigui la <strong>contrasenya</strong> i triï el tipus de seguretat. La majoria d'encaminadors domèstics i d'oficina fan servir WPA/WPA2/WPA3.</li>
  <li>Marqui <strong>Xarxa oculta</strong> si el nom del seu WiFi no apareix a la llista.</li>
  <li>Afegeixi un marc amb un text com "SCAN WIFI" perquè els convidats n'entenguin la funció i descarregui el PNG.</li>
</ol>

<h2>On col·locar-lo?</h2>
<ul>
  <li>En una targeta petita a les taules de la cafeteria o del restaurant.</li>
  <li>A la paret de la sala d'espera, a la recepció o a la sala de reunions de l'oficina.</li>
  <li>A les habitacions de l'allotjament, a prop de la porta o de la televisió.</li>
  <li>A la part de sota de l'encaminador de casa, perquè la família connecti fàcilment els dispositius nous.</li>
</ul>

<h2>Consells de seguretat</h2>
<ul>
  <li>Utilitzi una <strong>xarxa per a convidats</strong> (guest network) si el seu encaminador ho permet, perquè els convidats no entrin a la mateixa xarxa que els ordinadors de l'oficina.</li>
  <li>Si canvia la contrasenya del WiFi, torni a crear i a imprimir el QR Code, perquè l'antic contindrà la contrasenya antiga.</li>
  <li>No col·loqui un QR Code de WiFi de la seva xarxa privada en llocs públics on qualsevol persona el pugui fotografiar.</li>
</ul>

<h2>Si el QR Code no es connecta</h2>
<p>Revisi l'ortografia del nom de la xarxa i de la contrasenya, perquè n'hi ha prou amb una lletra incorrecta perquè el mòbil no es pugui connectar. Comprovi també que el tipus de seguretat triat coincideixi amb la configuració de l'encaminador. Per a altres problemes d'escaneig, llegeixi <a href="/artikel/barcode-tidak-bisa-dipindai">motius pels quals un codi de barres no es llegeix</a>.</p>
`
};
