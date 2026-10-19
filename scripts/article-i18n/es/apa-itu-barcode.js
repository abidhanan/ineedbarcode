// apa-itu-barcode
module.exports = {
  title: "¿Qué es un código de barras? Definición, funcionamiento y tipos",
  desc: "Los códigos de barras aparecen en casi todos los productos que compra. Conozca cómo funcionan, su breve historia y los tipos de códigos de barras más utilizados.",
  tags: ["Conceptos básicos", "Códigos de barras"],
  coverCaption: "El código de barras del envase guarda el código único del producto.",
  inlineCaption: "En la caja, el escáner lee el código de barras en un instante.",
  faq: [
    ["¿Qué diferencia hay entre un código de barras y un QR Code?", "El QR Code es un tipo de código de barras, concretamente un código de barras 2D. Un código de barras lineal (1D) solo guarda unos pocos caracteres y se lee de izquierda a derecha, mientras que un QR Code guarda datos en dos direcciones, por lo que caben enlaces, texto o datos de WiFi."],
    ["¿El código de barras guarda el precio del producto?", "Normalmente no. El código de barras de un producto solo contiene un código. El precio y el nombre del producto se guardan en el sistema de caja y se buscan a partir del código escaneado."],
    ["¿Hay que pagar para crear un código de barras?", "No. La imagen del código de barras se puede crear gratis, por ejemplo en I Need Barcode. Lo único que requiere un registro de pago es el número oficial para códigos de barras de productos de venta al por menor, como el EAN-13, a través de GS1."]
  ],
  body: `
<p>Un código de barras es una forma de escribir datos mediante un patrón que una máquina puede leer. Ese patrón suele estar formado por barras negras y blancas de distintos anchos, o por pequeños cuadrados dispuestos dentro de un cuadrado. Al escanearlo, el patrón se vuelve a traducir en números o texto, por ejemplo un código de producto, un número de seguimiento o la dirección de un sitio web.</p>
<p>Como lo lee una máquina, el código de barras es mucho más rápido y produce muchos menos errores que teclear un código a mano. Por eso se utiliza en cajas, almacenes, hospitales, entradas e incluso en envases de alimentos.</p>

<h2>Breve historia del código de barras</h2>
<p>La idea del código de barras fue patentada en 1952 por Norman Joseph Woodland y Bernard Silver en Estados Unidos. El código de barras no se utilizó realmente en una tienda hasta 1974, cuando se escaneó un paquete de chicles con un código UPC en un supermercado de Ohio. Desde entonces, los códigos de barras se han extendido por todo el mundo y hoy los gestiona a nivel mundial una organización de estándares llamada GS1.</p>

<h2>¿Cómo funciona un código de barras?</h2>
<p>El escáner ilumina el código de barras y lee la luz reflejada. Las zonas oscuras reflejan poca luz y las claras reflejan mucha. Esa diferencia se convierte en una secuencia de 0 y 1, que luego se compara con las reglas de ese tipo de código de barras. Muchos códigos de barras también tienen un <strong>dígito de control</strong> (check digit), es decir, un último número que se calcula a partir de los anteriores. Si el resultado del cálculo no coincide, el escáner sabe que algo está mal y rechaza la lectura.</p>
<p>El código de barras en sí normalmente solo guarda un código. La información como el nombre del producto o el precio se guarda en el sistema de caja o en una base de datos, y se busca a partir de ese código.</p>

<h2>Tipos de códigos de barras más utilizados</h2>
<p>En general, los códigos de barras se dividen en dos grandes grupos:</p>
<ul>
  <li><strong>Códigos de barras 1D (lineales)</strong>: están formados por barras verticales que se leen de izquierda a derecha. Por ejemplo, <a href="/?type=ean13">EAN-13</a> y <a href="/?type=upca">UPC-A</a> para productos de venta al por menor, y <a href="/?type=code128">Code 128</a> y <a href="/?type=code39">Code 39</a> para logística y almacenes.</li>
  <li><strong>Códigos de barras 2D</strong>: están formados por un patrón de cuadrados que guarda datos en dos direcciones, por lo que caben muchos más. Por ejemplo, <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> y <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Además, existen códigos de barras especiales para correos y envíos, para el sector sanitario y los estándares GS1 para la cadena de suministro. Puede leer una explicación más detallada de sus diferencias en el artículo <a href="/artikel/perbedaan-barcode-1d-dan-2d">Diferencias entre códigos de barras 1D y 2D</a>.</p>

<h2>¿Para qué sirven los códigos de barras?</h2>
<ul>
  <li><strong>Comercio minorista</strong>: agilizan el cobro en caja y registran el inventario automáticamente.</li>
  <li><strong>Almacenes y envíos</strong>: permiten seguir mercancías y paquetes de un lugar a otro.</li>
  <li><strong>Entradas y eventos</strong>: comprueban la autenticidad de una entrada con un solo escaneo.</li>
  <li><strong>Marketing</strong>: un QR Code en un folleto o envase lleva a las personas directamente a su sitio web, su menú o su WhatsApp.</li>
</ul>

<h2>Cree su propio código de barras</h2>
<p>No necesita una aplicación de pago para crear un código de barras. En <a href="/">I Need Barcode</a>, elija el tipo de código, introduzca los datos y descárguelo como imagen PNG. Hay más de 100 tipos para elegir, todos gratis y sin registro.</p>
`
};
