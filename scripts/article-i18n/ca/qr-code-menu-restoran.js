// qr-code-menu-restoran
module.exports = {
  title: "QR Code per a la carta del restaurant: guia completa",
  desc: "La carta digital amb QR Code facilita les coses als clients i estalvia costos d'impressió. Descobreixi com crear-la, preparar la carta i col·locar-la a les taules.",
  tags: ["Negocis", "QR Code"],
  coverCaption: "El QR Code de la taula porta els clients directament a la carta digital.",
  inlineCaption: "Col·loqui el QR Code en un lloc fàcil d'abastar des de la cadira.",
  faq: [
    ["Què és millor per a la carta digital: un PDF o una pàgina web?", "Una pàgina web sol ser més còmoda de llegir al mòbil i s'obre més de pressa. El PDF es pot utilitzar si és lleuger i el text és prou gran a la pantalla."],
    ["Quina mida ha de tenir el QR Code de la carta a la taula?", "Amb uns 3 a 5 cm n'hi ha prou per escanejar-lo des de la cadira. Utilitzi un material resistent a les esquitxades i no gaire brillant."],
    ["Cal tornar a imprimir el QR Code quan canvia la carta?", "No, sempre que l'enllaç continuï sent el mateix. N'hi ha prou d'actualitzar el contingut de la pàgina o del fitxer de la carta a què apunta el QR Code."]
  ],
  body: `
<p>La carta digital amb QR Code ja és habitual a les cafeteries i als restaurants. El client només ha d'escanejar el QR Code de la taula per veure la llista de plats, els preus i les fotos. Per al propietari del negoci, això estalvia costos d'impressió i facilita els canvis de preus o de carta.</p>

<h2>Avantatges de la carta amb QR Code</h2>
<ul>
  <li><strong>Fàcil d'actualitzar</strong>: canviï preus o afegeixi plats sense tornar a imprimir la carta.</li>
  <li><strong>Estalvi</strong>: només cal imprimir un QR Code petit per a cada taula.</li>
  <li><strong>Més informativa</strong>: mostri fotos, descripcions i etiquetes com ara picant o vegetarià.</li>
  <li><strong>Permet comandes en línia</strong>: dirigeixi els clients a un formulari de comanda o a WhatsApp.</li>
</ul>

<h2>Pas 1: Prepari la carta en línia</h2>
<p>El QR Code només conté un enllaç, per tant necessita una carta que es pugui obrir a internet. Les opcions inclouen una pàgina al seu propi lloc web, un fitxer PDF en un emmagatzematge en línia compartit públicament o una pàgina de catàleg en una plataforma de comandes. Asseguri's que la carta sigui còmoda de llegir a la pantalla del mòbil: text prou gran, fotos no gaire pesades i preus clars.</p>

<h2>Pas 2: Creï el QR Code</h2>
<ol>
  <li>Copiï l'enllaç de la seva carta.</li>
  <li>Obri el <a href="/?type=qrcode">generador de QR Code</a>, seleccioni la pestanya <strong>URL</strong> i enganxi-hi l'enllaç.</li>
  <li>Afegeixi un marc amb el text "CARTA" o "ESCANEJA PER VEURE LA CARTA" a l'apartat Disseny.</li>
  <li>Adapti els colors a la identitat del restaurant, però continuï utilitzant un color fosc sobre un fons clar.</li>
  <li>Descarregui el PNG amb una mida de mòdul prou gran per imprimir-lo.</li>
</ol>
<p>Utilitzi un enllaç que no hagi de canviar. Si la carta es trasllada a una altra adreça, el QR Code que ja està imprès no es podrà actualitzar. En trobarà l'explicació a l'article <a href="/artikel/apa-itu-qr-code">què és un QR Code</a>.</p>

<h2>Pas 3: Imprimeixi'l i col·loqui'l</h2>
<ul>
  <li>Imprimeixi'l amb una mida mínima d'uns 3–5 cm perquè sigui fàcil d'escanejar des de la cadira.</li>
  <li>Utilitzi un material resistent a les esquitxades, com un adhesiu de vinil o una targeta plastificada sense una brillantor excessiva.</li>
  <li>Col·loqui'l en un lloc fàcil d'abastar, per exemple en un suport d'acrílic al centre de la taula.</li>
  <li>Afegeixi el número de taula a prop del QR Code si els clients fan les comandes per xat.</li>
</ul>

<h2>No s'oblidi dels clients sense mòbil</h2>
<p>Tingui una o dues cartes impreses per als clients que no porten el mòbil, que s'han quedat sense bateria o que prefereixen llegir una carta en paper.</p>
<p>També pot crear un <a href="/artikel/cara-membuat-qr-code-wifi">QR Code de WiFi</a> per als clients i col·locar-lo al costat del QR Code de la carta.</p>
`
};
