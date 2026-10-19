// apa-itu-qr-code
module.exports = {
  title: "¿Qué es un QR Code y cómo funciona?",
  desc: "Un QR Code puede guardar enlaces, texto e incluso datos de WiFi, y sigue siendo legible aunque esté parcialmente dañado. Así funciona y estas son sus ventajas.",
  tags: ["Conceptos básicos", "QR Code"],
  coverCaption: "Un QR Code se puede escanear directamente con la cámara del móvil.",
  inlineCaption: "Cada QR Code está formado por pequeños cuadrados negros y blancos.",
  faq: [
    ["¿Puede caducar un QR Code?", "Un QR Code estático nunca caduca, porque sus datos están incrustados directamente en la imagen. Un QR Code dinámico puede dejar de funcionar si el servicio que proporciona el enlace cierra o si la suscripción termina."],
    ["¿Cuántos datos puede guardar un QR Code?", "La versión más grande de un QR Code puede guardar hasta 7.089 dígitos, o unos 2.953 bytes. Sin embargo, cuantos menos datos contenga, más fácil será escanearlo."],
    ["¿Sigue siendo legible un QR Code si está parcialmente dañado?", "Sí. Gracias a la corrección de errores, un QR Code sigue siendo legible aunque entre un 7 % y un 30 % de su superficie esté dañada, según el nivel de corrección utilizado: L, M, Q o H."]
  ],
  body: `
<p>El QR Code (Quick Response Code) es un código de barras 2D de forma cuadrada formado por pequeños cuadrados negros y blancos. A diferencia del código de barras lineal, que solo guarda una docena de dígitos, el QR Code puede guardar enlaces a sitios web, textos largos, números de teléfono, contactos e incluso los datos de una red WiFi.</p>
<p>El QR Code fue desarrollado en 1994 por Denso Wave, una empresa japonesa, para seguir piezas de vehículos en las fábricas. Hoy se utiliza en todas partes, desde los pagos digitales hasta los menús de restaurante, porque se puede escanear directamente con la cámara del móvil.</p>

<h2>Partes de un QR Code</h2>
<ul>
  <li><strong>Tres cuadrados grandes en las esquinas</strong> (finder pattern): ayudan a la cámara a encontrar el QR Code y a conocer su orientación, de modo que sigue siendo legible aunque se escanee inclinado o al revés.</li>
  <li><strong>Patrón de alineación</strong> (alignment pattern): un cuadrado pequeño que ayuda a leer un QR Code doblado o visto en ángulo.</li>
  <li><strong>Zona de datos</strong>: los pequeños cuadrados que contienen la información que usted guarda.</li>
  <li><strong>Zona de silencio</strong> (quiet zone): el espacio vacío alrededor del QR Code que permite distinguirlo fácilmente del fondo.</li>
</ul>

<h2>¿Cuántos datos puede guardar?</h2>
<p>El QR Code tiene 40 versiones de tamaño. La más grande puede guardar hasta 7.089 dígitos, o unos 2.953 bytes de datos. En la práctica, cuantos menos datos se guarden, más grandes serán los cuadrados y más fácil será escanear el QR Code. Por eso, un enlace corto es mejor que uno muy largo.</p>

<h2>Legible aunque esté dañado</h2>
<p>El QR Code utiliza corrección de errores (error correction). Hay cuatro niveles:</p>
<ul>
  <li><strong>L</strong>: los datos se pueden recuperar si aproximadamente un 7 % del QR Code está dañado.</li>
  <li><strong>M</strong>: aproximadamente un 15 %. Es la opción habitual y equilibrada.</li>
  <li><strong>Q</strong>: aproximadamente un 25 %.</li>
  <li><strong>H</strong>: aproximadamente un 30 %, ideal para QR Codes que llevarán un logotipo o que se imprimirán en lugares que se ensucian con facilidad.</li>
</ul>
<p>Cuanto más alto es el nivel de corrección, más cuadrados se necesitan, por lo que el patrón del QR Code se ve más denso.</p>

<h2>¿Qué se puede guardar en un QR Code?</h2>
<ul>
  <li>Enlaces a sitios web, tiendas online o formularios.</li>
  <li>Datos de WiFi, para que los invitados se conecten sin teclear la contraseña. Consulte la guía <a href="/artikel/cara-membuat-qr-code-wifi">QR Code de WiFi</a>.</li>
  <li>Tarjetas de visita digitales (vCard), correos electrónicos, SMS y chats de WhatsApp.</li>
  <li>Ubicaciones en un mapa y eventos.</li>
</ul>

<h2>QR Code estático y dinámico</h2>
<p>Un QR Code creado directamente a partir de los datos se llama <strong>QR Code estático</strong>: su contenido está incrustado en la imagen y no se puede cambiar, pero tampoco caduca nunca. Un QR Code <strong>dinámico</strong> contiene un enlace corto de un servicio que luego redirige a su destino; el destino se puede cambiar, pero el QR Code dejará de funcionar si ese servicio cierra. Para la mayoría de las necesidades, un QR Code estático es suficiente y más seguro a largo plazo.</p>

<p>¿Quiere probarlo? Cree ahora un <a href="/?type=qrcode">QR Code gratis</a> o lea <a href="/artikel/cara-membuat-qr-code-gratis">cómo crear un QR Code en 3 pasos</a>.</p>
`
};
