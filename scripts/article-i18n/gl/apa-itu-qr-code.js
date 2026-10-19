// apa-itu-qr-code
module.exports = {
  title: "Que é un QR Code e como funciona?",
  desc: "O QR Code pode gardar ligazóns, texto e mesmo datos de WiFi, e segue sendo lexible aínda que estea parcialmente danado. Descubra como funciona e cales son as súas vantaxes.",
  tags: ["Conceptos básicos", "QR Code"],
  coverCaption: "O QR Code pódese escanear directamente coa cámara do móbil.",
  inlineCaption: "Cada QR Code está formado por cadradiños negros e brancos.",
  faq: [
    ["Pode caducar un QR Code?", "Un QR Code estático non caduca nunca, porque os datos están incrustados directamente na imaxe. Un QR Code dinámico pode deixar de funcionar se o servizo que fornece a ligazón pecha ou se remata a subscrición."],
    ["Cantos datos pode gardar un QR Code?", "A versión máis grande do QR Code pode gardar ata 7.089 números ou uns 2.953 bytes. Porén, canto menos datos, máis doado é escanear o QR Code."],
    ["O QR Code segue sendo lexible se está parcialmente danado?", "Si. Grazas á corrección de erros, o QR Code segue sendo lexible aínda que estea danado entre un 7% e un 30% da súa superficie, segundo o nivel de corrección L, M, Q ou H que se empregue."]
  ],
  body: `
<p>O QR Code (Quick Response Code) é un código de barras 2D de forma cadrada formado por cadradiños negros e brancos. A diferenza do código de barras lineal, que só garda unha ducia de números ou pouco máis, o QR Code pode gardar ligazóns a sitios web, textos longos, números de teléfono, contactos e mesmo os datos dunha rede WiFi.</p>
<p>O QR Code desenvolveuno en 1994 Denso Wave, unha empresa xaponesa, para facer o seguimento de pezas de vehículos nas fábricas. Hoxe o QR Code úsase en todas partes, desde os pagamentos dixitais ata as cartas dos restaurantes, porque se pode escanear directamente coa cámara do móbil.</p>

<h2>As partes do QR Code</h2>
<ul>
  <li><strong>Tres cadrados grandes nas esquinas</strong> (finder pattern): axudan a cámara a atopar o QR Code e a coñecer a súa orientación, de xeito que se pode ler aínda que se escanee inclinado ou do revés.</li>
  <li><strong>Patrón de aliñamento</strong> (alignment pattern): un cadrado pequeno que axuda a ler os QR Codes dobrados ou vistos de esguello.</li>
  <li><strong>Área de datos</strong>: os cadradiños que conteñen a información que gardou.</li>
  <li><strong>Zona de silencio</strong> (quiet zone): o espazo baleiro arredor do QR Code para que se distinga facilmente do fondo.</li>
</ul>

<h2>Cantos datos pode gardar?</h2>
<p>O QR Code ten 40 versións de tamaño. A versión máis grande pode gardar ata 7.089 números ou uns 2.953 bytes de datos. Na práctica, canto menos datos se garden, máis grandes son os cadrados e máis doado é escanear o QR Code. Por iso, unha ligazón curta é mellor ca unha ligazón moi longa.</p>

<h2>Lexible mesmo danado</h2>
<p>O QR Code emprega a corrección de erros (error correction). Hai catro niveis:</p>
<ul>
  <li><strong>L</strong>: os datos pódense recuperar se arredor dun 7% do QR Code está danado.</li>
  <li><strong>M</strong>: arredor dun 15%. É a opción habitual e equilibrada.</li>
  <li><strong>Q</strong>: arredor dun 25%.</li>
  <li><strong>H</strong>: arredor dun 30%, axeitado para os QR Codes que levarán un logotipo ou que se imprimirán en lugares que se ensucian facilmente.</li>
</ul>
<p>Canto máis alto é o nivel de corrección, máis cadrados se necesitan, e o patrón do QR Code vese máis denso.</p>

<h2>Que se pode gardar nun QR Code?</h2>
<ul>
  <li>Ligazóns a sitios web, tendas en liña ou formularios.</li>
  <li>Datos de WiFi, para que os convidados se conecten sen escribir o contrasinal. Consulte a guía do <a href="/artikel/cara-membuat-qr-code-wifi">QR Code de WiFi</a>.</li>
  <li>Tarxetas de visita dixitais (vCard), correos electrónicos, SMS e chats de WhatsApp.</li>
  <li>Localizacións no mapa e axendas de eventos.</li>
</ul>

<h2>QR Code estático e dinámico</h2>
<p>O QR Code creado directamente a partir dos datos chámase <strong>QR Code estático</strong>: o contido está incrustado na imaxe e non se pode cambiar, pero tampouco non caduca nunca. O QR Code <strong>dinámico</strong> contén unha ligazón curta dun servizo que despois redirixe ao seu destino; o destino pódese cambiar, pero o QR Code deixa de funcionar se ese servizo pecha. Para a maioría das necesidades, o QR Code estático é suficiente e máis seguro a longo prazo.</p>

<p>Quere probalo? Cree agora un <a href="/?type=qrcode">QR Code de balde</a> ou lea <a href="/artikel/cara-membuat-qr-code-gratis">como crear un QR Code en 3 pasos</a>.</p>
`
};
