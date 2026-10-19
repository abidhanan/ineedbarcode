// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Diferencias entre códigos de barras 1D y 2D: ¿cuál necesita?",
  desc: "Los códigos de barras lineales y los QR Codes son códigos de barras, pero sus usos son distintos. Compare su capacidad, su forma de escaneo y ejemplos de uso.",
  tags: ["Conceptos básicos", "Códigos de barras"],
  coverCaption: "Un escáner de mano en el almacén lee códigos de barras 1D y 2D.",
  inlineCaption: "Las etiquetas de envío suelen usar un código de barras lineal.",
  faq: [
    ["¿Puede un escáner de caja leer un QR Code?", "No todos. Los escáneres láser 1D solo leen códigos de barras lineales. Para un QR Code se necesita un escáner 2D con cámara o la cámara de un móvil."],
    ["¿Cuál es el código de barras más pequeño?", "Data Matrix es un código de barras 2D que se puede imprimir en un tamaño muy pequeño, por lo que se usa a menudo en componentes electrónicos, productos sanitarios y etiquetas de medicamentos."],
    ["¿Puedo usar un QR Code en lugar de un EAN-13 en un producto de venta al por menor?", "Para venderse en tiendas, el producto sigue necesitando un EAN-13 o UPC registrado. El QR Code se puede añadir al envase como complemento, por ejemplo para información del producto o promociones."]
  ],
  body: `
<p>Al crear un código de barras, la primera pregunta que suele surgir es: ¿código de barras lineal o QR Code? Ambos se llaman códigos de barras, pero guardan los datos de forma distinta y, por tanto, sus usos también son distintos.</p>

<h2>Códigos de barras 1D (lineales)</h2>
<p>Un código de barras 1D está formado por barras verticales. Los datos se guardan en una sola dirección, de izquierda a derecha. Los ejemplos más conocidos son el <a href="/?type=ean13">EAN-13</a> en los envases de productos y el <a href="/?type=code128">Code 128</a> en las etiquetas de envío.</p>
<ul>
  <li>Capacidad pequeña, normalmente de una docena a unas decenas de caracteres.</li>
  <li>Se lee con los escáneres láser de caja, baratos y muy rápidos.</li>
  <li>Adecuado para códigos de producto, números de serie y números de seguimiento.</li>
</ul>

<h2>Códigos de barras 2D</h2>
<p>Un código de barras 2D guarda los datos en dos direcciones, en horizontal y en vertical, por lo que caben muchos más. Por ejemplo, <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> y <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Gran capacidad, desde decenas hasta miles de caracteres.</li>
  <li>Se puede escanear con la cámara del móvil desde distintas direcciones.</li>
  <li>Tiene corrección de errores, por lo que sigue siendo legible aunque esté parcialmente dañado.</li>
  <li>Puede ser muy pequeño, como el Data Matrix en componentes electrónicos.</li>
</ul>

<h2>Comparación rápida</h2>
<table>
  <thead><tr><th></th><th>Código de barras 1D</th><th>Código de barras 2D</th></tr></thead>
  <tbody>
    <tr><td>Forma</td><td>Barras verticales</td><td>Cuadrados/puntos dentro de un cuadrado</td></tr>
    <tr><td>Capacidad</td><td>Pequeña</td><td>Grande</td></tr>
    <tr><td>Dispositivo de escaneo</td><td>Escáner láser o cámara</td><td>Cámara o escáner 2D</td></tr>
    <tr><td>Resistencia a daños</td><td>Limitada</td><td>Con corrección de errores</td></tr>
    <tr><td>Ejemplos</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>¿Cuándo usar cada uno?</h2>
<ul>
  <li><strong>Productos que se venden en tiendas o supermercados</strong>: utilice un EAN-13 oficial de GS1. Consulte <a href="/artikel/cara-mendapatkan-barcode-ean-13">cómo obtener un código de barras EAN-13</a>.</li>
  <li><strong>Etiquetas de almacén, estanterías o envíos</strong>: Code 128 es una opción habitual porque es compacto y admite letras y números.</li>
  <li><strong>Enlaces, menús, WiFi o contactos para clientes</strong>: QR Code, porque se puede escanear directamente con la cámara del móvil.</li>
  <li><strong>Etiquetas muy pequeñas</strong>: Data Matrix.</li>
  <li><strong>Documentos de identidad, tarjetas de embarque o documentos</strong>: PDF417 o Aztec.</li>
</ul>
<p>Puede crear gratis todos estos tipos en <a href="/">I Need Barcode</a>. Si aún tiene dudas, empiece con un QR Code para sus clientes y con Code 128 para las necesidades internas.</p>
`
};
