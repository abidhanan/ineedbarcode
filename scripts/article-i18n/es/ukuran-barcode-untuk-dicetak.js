// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Tamaño y resolución adecuados de un código de barras para imprimir",
  desc: "Un código de barras demasiado pequeño o borroso es difícil de escanear. Conozca el tamaño mínimo, la regla de la distancia de escaneo y la resolución de imagen segura para imprimir.",
  tags: ["Guía", "Impresión"],
  coverCaption: "Una impresora de etiquetas imprime códigos de barras para paquetes y envases.",
  inlineCaption: "El tamaño de la etiqueta determina lo grande que se puede imprimir el código de barras.",
  faq: [
    ["¿Cuál es el tamaño mínimo de un QR Code para imprimir?", "Para escanearlo de cerca, unos 2 × 2 cm es el límite seguro. Para distancias mayores, utilice una proporción de aproximadamente 10 : 1 entre la distancia de escaneo y el ancho del QR Code."],
    ["¿Cuál es el tamaño estándar de un código de barras EAN-13?", "El tamaño estándar del EAN-13 es de unos 37,3 × 25,9 mm. Se puede reducir hasta aproximadamente el 80 % o ampliar hasta el 200 %."],
    ["¿Por qué el código de barras sale borroso al imprimirlo?", "Normalmente porque la imagen era pequeña y se amplió, o porque se guardó como JPG de baja calidad. Descárguelo con un tamaño de módulo mayor en formato PNG."]
  ],
  body: `
<p>Un código de barras que se ve bien en la pantalla no siempre se puede leer una vez impreso. Un tamaño demasiado pequeño, una resolución baja o una tinta que se corre pueden hacer que el escáner no consiga leerlo. Esta guía le ayudará a que sus impresiones sigan siendo legibles.</p>

<h2>Conozca el módulo</h2>
<p>El <strong>módulo</strong> es la unidad más pequeña de un código de barras: un cuadradito en un QR Code o la barra más estrecha en un código de barras lineal. El tamaño del módulo determina lo fácil que es leer el código. En <a href="/">I Need Barcode</a>, el tamaño del módulo se puede configurar en la sección Ajustes: cuanto mayor sea el valor, más grande y nítida será la imagen descargada.</p>

<h2>Tamaño mínimo de un QR Code</h2>
<ul>
  <li>Para escanearlo de cerca (por ejemplo, en una tarjeta de visita o una etiqueta de producto), un tamaño de unos <strong>2 × 2 cm</strong> es el límite seguro.</li>
  <li>Aplique una regla de proporción de aproximadamente <strong>10 : 1</strong>: la distancia de escaneo es más o menos diez veces el ancho del QR Code. Para un póster que se escanea a 2 metros, haga el QR Code de al menos unos 20 cm.</li>
  <li>Cuantos más datos se guarden, más denso será el patrón y mayor tendrá que ser el tamaño.</li>
</ul>

<h2>Tamaño del código de barras de producto</h2>
<p>El tamaño estándar del <a href="/?type=ean13">EAN-13</a> es de unos 37,3 × 25,9 mm (100 %). Se puede reducir hasta aproximadamente el 80 % o ampliar hasta el 200 %. Evite recortar demasiado la altura de las barras, porque los escáneres de caja necesitan espacio para leer desde distintos ángulos.</p>

<h2>Resolución de la imagen</h2>
<ul>
  <li>Para imprimir, procure que cada módulo esté representado por <strong>varios píxeles completos</strong>, no por fracciones de píxel. Elija un tamaño de módulo mayor al descargar y redúzcalo en el programa de diseño, no al revés.</li>
  <li>Evite ampliar una imagen pequeña de un código de barras, porque los bordes de los cuadrados quedarán borrosos o dentados.</li>
  <li>Guárdelo en formato PNG para que los colores y los bordes no se deterioren como ocurre con el JPG.</li>
</ul>

<h2>Zona de silencio</h2>
<p>Todo código de barras necesita un espacio vacío a su alrededor, llamado <strong>zona de silencio</strong> (quiet zone). En un QR Code, lo ideal es que tenga un ancho de cuatro módulos. En un código de barras lineal, el espacio vacío a la izquierda y a la derecha es muy importante. No coloque texto, líneas de diseño ni el borde del envase demasiado cerca.</p>

<h2>Color y material</h2>
<ul>
  <li>Utilice un color oscuro para el código de barras y un color claro para el fondo.</li>
  <li>Evite los materiales brillantes o transparentes, porque los reflejos de la luz pueden confundir a la cámara.</li>
  <li>Imprima siempre una muestra y pruébela con varios móviles o escáneres antes de imprimir en grandes cantidades.</li>
</ul>
<p>Si su código de barras sigue siendo difícil de escanear, consulte <a href="/artikel/barcode-tidak-bisa-dipindai">7 causas por las que un código de barras no se puede escanear</a>.</p>
`
};
