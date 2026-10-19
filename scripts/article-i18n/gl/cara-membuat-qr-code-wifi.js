// cara-membuat-qr-code-wifi
module.exports = {
  title: "Como crear un QR Code de WiFi para que os convidados non teñan que escribir o contrasinal",
  desc: "Os convidados só teñen que escanear un QR Code para conectarse á WiFi. Ideal para cafetarías, oficinas, aloxamentos e casas. Descubra como crealo e onde colocalo.",
  tags: ["Guía", "QR Code"],
  coverCaption: "Os datos de WiFi do router pódense gardar nun só QR Code.",
  inlineCaption: "Os clientes da cafetaría poden conectarse de inmediato sen escribir o contrasinal.",
  faq: [
    ["Todos os móbiles poden escanear un QR Code de WiFi?", "A cámara integrada do iPhone con iOS 11 ou posterior e a maioría dos dispositivos con Android 10 ou posterior poden lelo directamente. Os móbiles máis antigos poden necesitar unha aplicación de escaneo de QR."],
    ["É seguro o QR Code de WiFi?", "Calquera persoa que escanee ese QR Code poderá conectarse á súa WiFi. Por iso, use unha rede para convidados e non coloque o QR Code da súa rede privada en lugares públicos."],
    ["Que hai que facer se se cambia o contrasinal da WiFi?", "Volva crear e imprimir o QR Code de WiFi, porque o QR Code antigo aínda contén o contrasinal antigo."]
  ],
  body: `
<p>Deletrearlles aos convidados un contrasinal de WiFi longo adoita ser pesado, sobre todo se ten maiúsculas, números e símbolos. Cun <strong>QR Code de WiFi</strong>, abonda con que o convidado apunte a cámara do móbil ao QR Code para conectarse de inmediato.</p>

<h2>Como funciona o QR Code de WiFi</h2>
<p>O QR Code de WiFi garda o nome da rede (SSID), o tipo de seguranza e o contrasinal nun formato especial que recoñecen os móbiles, por exemplo <code>WIFI:T:WPA;S:NomeDaRede;P:Contrasinal;;</code>. A cámara integrada do iPhone (iOS 11 ou posterior) e a maioría dos dispositivos Android (Android 10 ou posterior) poden lelo directamente, sen aplicacións adicionais.</p>

<h2>Pasos para crealo</h2>
<ol>
  <li>Abra o <a href="/?type=qrcode">xerador de QR Code</a> e seleccione a lapela <strong>WiFi</strong> na sección Datos.</li>
  <li>Escriba o <strong>nome da rede</strong> exactamente como aparece na lista de redes WiFi, respectando as maiúsculas e as minúsculas.</li>
  <li>Escriba o <strong>contrasinal</strong> e escolla o tipo de seguranza. A maioría dos routers domésticos e de oficina usan WPA/WPA2/WPA3.</li>
  <li>Marque <strong>Rede oculta</strong> se o nome da súa WiFi non aparece na lista.</li>
  <li>Engada un marco cun texto como "SCAN WIFI" para que os convidados entendan a súa función e descargue o PNG.</li>
</ol>

<h2>Onde colocalo?</h2>
<ul>
  <li>Nunha tarxeta pequena nas mesas da cafetaría ou do restaurante.</li>
  <li>Na parede da sala de espera, na recepción ou na sala de reunións da oficina.</li>
  <li>Nos cuartos do aloxamento, preto da porta ou da televisión.</li>
  <li>Na parte de abaixo do router da casa, para que a familia conecte facilmente os dispositivos novos.</li>
</ul>

<h2>Consellos de seguranza</h2>
<ul>
  <li>Use unha <strong>rede para convidados</strong> (guest network) se o seu router o permite, para que os convidados non entren na mesma rede ca os ordenadores da oficina.</li>
  <li>Se cambia o contrasinal da WiFi, volva crear e imprimir o QR Code, porque o antigo conterá o contrasinal antigo.</li>
  <li>Non coloque un QR Code de WiFi da súa rede privada en lugares públicos onde calquera persoa o poida fotografar.</li>
</ul>

<h2>Se o QR Code non conecta</h2>
<p>Revise a ortografía do nome da rede e do contrasinal, porque abonda cunha letra incorrecta para que o móbil non poida conectarse. Comprobe tamén que o tipo de seguranza escollido coincida coa configuración do router. Para outros problemas de escaneo, lea <a href="/artikel/barcode-tidak-bisa-dipindai">motivos polos que un código de barras non se le</a>.</p>
`
};
