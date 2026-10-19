// cara-membuat-qr-code-wifi
module.exports = {
  title: "Cómo crear un QR Code de WiFi para que sus invitados no tengan que teclear la contraseña",
  desc: "Sus invitados solo tienen que escanear un QR Code para conectarse al WiFi. Ideal para cafeterías, oficinas, alojamientos y hogares. Así se crea y se coloca.",
  tags: ["Guía", "QR Code"],
  coverCaption: "Los datos de WiFi del router se pueden guardar en un solo QR Code.",
  inlineCaption: "Los clientes de la cafetería pueden conectarse al instante sin teclear la contraseña.",
  faq: [
    ["¿Todos los móviles pueden escanear un QR Code de WiFi?", "La cámara integrada del iPhone con iOS 11 o posterior y la mayoría de los Android con Android 10 o posterior pueden leerlo directamente. Los móviles más antiguos pueden necesitar una aplicación para escanear QR."],
    ["¿Es seguro un QR Code de WiFi?", "Cualquier persona que escanee ese QR Code puede conectarse a su WiFi. Por eso, utilice una red de invitados y no coloque el QR Code de su red privada en lugares públicos."],
    ["¿Qué debo hacer si cambio la contraseña del WiFi?", "Cree e imprima de nuevo el QR Code de WiFi, porque el QR Code antiguo sigue conteniendo la contraseña anterior."]
  ],
  body: `
<p>Deletrear una contraseña de WiFi larga a sus invitados suele ser engorroso, sobre todo si tiene mayúsculas, números y símbolos. Con un <strong>QR Code de WiFi</strong>, los invitados solo tienen que apuntar la cámara del móvil al QR Code y se conectan al instante.</p>

<h2>Cómo funciona un QR Code de WiFi</h2>
<p>Un QR Code de WiFi guarda el nombre de la red (SSID), el tipo de seguridad y la contraseña en un formato especial que los móviles reconocen, por ejemplo <code>WIFI:T:WPA;S:NombreDeRed;P:Contrasena;;</code>. La cámara integrada del iPhone (iOS 11 o posterior) y la mayoría de los Android (Android 10 o posterior) pueden leerlo directamente, sin aplicaciones adicionales.</p>

<h2>Pasos para crearlo</h2>
<ol>
  <li>Abra el <a href="/?type=qrcode">generador de QR Code</a> y seleccione la pestaña <strong>WiFi</strong> en la sección Introduce los datos.</li>
  <li>Escriba el <strong>nombre de la red</strong> exactamente como aparece en la lista de redes WiFi, respetando mayúsculas y minúsculas.</li>
  <li>Escriba la <strong>contraseña</strong> y elija el tipo de seguridad. La mayoría de los routers domésticos y de oficina usan WPA/WPA2/WPA3.</li>
  <li>Marque <strong>Red oculta</strong> si el nombre de su WiFi no aparece en la lista.</li>
  <li>Añada un marco con un texto como «SCAN WIFI» para que los invitados sepan para qué sirve y descargue el PNG.</li>
</ol>

<h2>¿Dónde colocarlo?</h2>
<ul>
  <li>En una tarjeta pequeña sobre las mesas de una cafetería o un restaurante.</li>
  <li>En la pared de la sala de espera, en la recepción o en la sala de reuniones de la oficina.</li>
  <li>En la habitación de un alojamiento, cerca de la puerta o del televisor.</li>
  <li>En la parte inferior del router de casa, para que la familia pueda conectar fácilmente dispositivos nuevos.</li>
</ul>

<h2>Consejos de seguridad</h2>
<ul>
  <li>Utilice una <strong>red de invitados</strong> (guest network) si su router lo permite, para que los invitados no entren en la misma red que los ordenadores de la oficina.</li>
  <li>Si cambia la contraseña del WiFi, cree e imprima de nuevo el QR Code, porque el antiguo contendrá la contraseña anterior.</li>
  <li>No coloque un QR Code de WiFi de una red privada en lugares públicos donde cualquiera pueda fotografiarlo.</li>
</ul>

<h2>Si el QR Code no conecta</h2>
<p>Revise la ortografía del nombre de la red y de la contraseña, porque una sola letra incorrecta impide que el móvil se conecte. Asegúrese también de que el tipo de seguridad elegido coincide con la configuración del router. Para otros problemas de escaneo, lea <a href="/artikel/barcode-tidak-bisa-dipindai">las causas por las que un código de barras no se puede escanear</a>.</p>
`
};
