// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Cómo obtener un código de barras EAN-13 para los productos de su pequeña empresa",
  desc: "¿Quiere que su producto llegue a tiendas de conveniencia o supermercados? Conozca el significado de los dígitos del EAN-13, cómo registrar un número oficial en GS1 Indonesia y cómo imprimirlo.",
  tags: ["Negocios", "Comercio minorista"],
  coverCaption: "Los envases de productos de venta al por menor necesitan un código de barras EAN-13 registrado.",
  inlineCaption: "Las tiendas reconocen los productos por el número EAN-13 de su sistema de caja.",
  faq: [
    ["¿Puedo inventar mi propio número EAN-13?", "Puede crear usted mismo la imagen del código de barras, pero conviene que el número sea oficial y proceda de GS1. Un número inventado puede coincidir con el de otro producto y ser rechazado por las tiendas."],
    ["¿Cada variante de producto necesita un código de barras distinto?", "Sí. Cada variante diferente, por ejemplo con otro sabor, otro tamaño u otro contenido del envase, necesita su propio número EAN-13."],
    ["¿Qué es el dígito de control del EAN-13?", "El dígito de control es el 13.º dígito, que se calcula a partir de los 12 anteriores. El escáner lo usa para asegurarse de que el código de barras se ha leído correctamente. El generador de I Need Barcode lo calcula automáticamente si introduce 12 dígitos."]
  ],
  body: `
<p>Si quiere vender su producto en tiendas de conveniencia, supermercados o grandes marketplaces, normalmente le pedirán que incluya un código de barras <strong>EAN-13</strong> en el envase. Este código de barras contiene 13 dígitos que identifican su producto de forma única en todo el mundo.</p>

<h2>Significado de los 13 dígitos del EAN-13</h2>
<ul>
  <li><strong>Prefijo GS1</strong>: los tres primeros dígitos indican la organización GS1 que emitió el número. Los números emitidos por GS1 Indonesia empiezan por <strong>899</strong>.</li>
  <li><strong>Número de empresa</strong>: la identificación de su empresa, que se le asigna al registrarse.</li>
  <li><strong>Número de producto</strong>: lo asigna la propia empresa para cada variante de producto, por ejemplo con distinto sabor o tamaño.</li>
  <li><strong>Dígito de control</strong>: el último dígito, que se calcula automáticamente a partir de los 12 anteriores para evitar errores de lectura.</li>
</ul>

<h2>¿Por qué un número oficial?</h2>
<p>Cualquiera puede dibujar un código de barras EAN-13, pero el <strong>número</strong> debe estar registrado. Las tiendas utilizan ese número para reconocer los productos en su sistema. Si se inventa un número, este puede coincidir con el producto de otra empresa y ser rechazado cuando registre el producto en la tienda.</p>

<h2>Cómo registrar un número en GS1 Indonesia</h2>
<ol>
  <li>Prepare la documentación de su empresa, como el NIB (número de identificación empresarial de Indonesia) y el NPWP (número de identificación fiscal), además de la lista de productos que llevarán código de barras.</li>
  <li>Registre la empresa a través del sitio web oficial de GS1 Indonesia y elija la cantidad de números que necesita.</li>
  <li>Pague la cuota de inscripción y la cuota anual según las condiciones vigentes.</li>
  <li>Una vez aprobada la solicitud, recibirá un número de empresa y podrá crear un número para cada producto.</li>
</ol>
<p>Los requisitos y las tarifas pueden cambiar, así que consulte siempre la información más reciente directamente en el sitio web de GS1 Indonesia.</p>

<h2>Crear la imagen del código de barras</h2>
<p>Cuando tenga su número, abra el <a href="/?type=ean13">generador de EAN-13</a> e introduzca los 12 o 13 dígitos del número de su producto. Si introduce 12 dígitos, el dígito de control se calculará automáticamente. Asegúrese de que la opción de texto debajo del código esté activada para que se impriman los números y descárguelo como PNG.</p>

<h2>Consejos para imprimir en el envase</h2>
<ul>
  <li>Utilice barras negras o azul oscuro sobre fondo blanco. Evite el rojo para las barras, porque muchos escáneres de caja usan luz roja y no leen las barras rojas.</li>
  <li>No reduzca demasiado el código de barras. El tamaño estándar del EAN-13 es de unos 37,3 × 25,9 mm y se puede reducir hasta aproximadamente el 80 %. Más información en la <a href="/artikel/ukuran-barcode-untuk-dicetak">guía de tamaños de códigos de barras</a>.</li>
  <li>Deje espacio vacío a la izquierda y a la derecha del código de barras, y evite colocarlo en pliegues o uniones del envase.</li>
  <li>Pruebe la impresión con un escáner antes de imprimir en grandes cantidades.</li>
</ul>
<p>Para productos que se venden en Norteamérica, es posible que también le pidan usar un <a href="/?type=upca">UPC-A</a> de 12 dígitos.</p>
`
};
