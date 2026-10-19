// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 causas por las que un código de barras no se puede escanear y cómo solucionarlas",
  desc: "¿Su código de barras o QR Code no se escanea? Revise las siete causas más frecuentes, desde el contraste de color hasta el tamaño, y cómo corregirlas.",
  tags: ["Consejos", "Códigos de barras"],
  coverCaption: "El contraste y el tamaño determinan si un QR Code se escanea con facilidad.",
  inlineCaption: "En el almacén, un código de barras que no se escanea ralentiza el trabajo.",
  faq: [
    ["¿Por qué un QR Code se escanea con un móvil pero no con otro?", "Las cámaras y las aplicaciones de escaneo tienen capacidades distintas. Un QR Code demasiado pequeño, con poco contraste o con los colores invertidos falla con más frecuencia en algunos móviles. Pruébelo con varios móviles antes de imprimir."],
    ["¿Se puede escanear un código de barras de color?", "Sí, siempre que el color sea oscuro sobre un fondo claro. Evite el rojo para las barras, porque muchos escáneres de caja utilizan luz roja."],
    ["¿Cómo comprobar si un código de barras es correcto?", "Escanee la impresión con varios móviles o escáneres y asegúrese de que los datos leídos coinciden exactamente con los que introdujo."]
  ],
  body: `
<p>No hay nada más frustrante que un código de barras impreso cientos de veces que luego no se puede escanear. La buena noticia es que la causa suele ser sencilla y fácil de evitar. Estas son las siete causas más frecuentes.</p>

<h2>1. Contraste de color demasiado bajo</h2>
<p>El escáner lee la diferencia entre lo oscuro y lo claro. Un código de barras gris claro sobre blanco, o azul oscuro sobre negro, es difícil de distinguir. <strong>Solución:</strong> utilice un color oscuro sobre un fondo claro. El negro sobre blanco es la opción más segura.</p>

<h2>2. Colores invertidos o color rojo</h2>
<p>No todos los escáneres admiten un código de barras claro sobre un fondo oscuro. Además, muchos escáneres de caja utilizan luz roja, por lo que las barras rojas se ven igual que el fondo blanco. <strong>Solución:</strong> evite el rojo para las barras o los módulos del código y no invierta los colores.</p>

<h2>3. Tamaño demasiado pequeño</h2>
<p>La cámara necesita suficientes píxeles para reconocer cada módulo. <strong>Solución:</strong> amplíe el código de barras. Para un QR Code que se escanea de cerca, utilice como mínimo unos 2 × 2 cm. Consulte la <a href="/artikel/ukuran-barcode-untuk-dicetak">guía de tamaños de impresión</a>.</p>

<h2>4. Sin zona de silencio</h2>
<p>Un código de barras pegado a imágenes, texto o al borde del papel es difícil de separar de lo que lo rodea. <strong>Solución:</strong> deje espacio vacío alrededor del código de barras, sobre todo a la izquierda y a la derecha de un código lineal.</p>

<h2>5. Imagen borrosa o distorsionada</h2>
<p>Un código de barras ampliado a partir de una imagen pequeña, guardado como JPG de baja calidad o estirado de forma desproporcionada pierde su forma. <strong>Solución:</strong> descárguelo con un tamaño de módulo mayor en formato PNG y cambie siempre el tamaño de forma proporcional.</p>

<h2>6. Datos incorrectos o que no corresponden al tipo</h2>
<p>Cada tipo de código de barras tiene sus reglas. El EAN-13, por ejemplo, solo admite 12 o 13 dígitos con un dígito de control correcto. Un enlace mal escrito también hace que el QR Code se lea pero no abra nada. <strong>Solución:</strong> revise los datos antes de imprimir. El generador de <a href="/">I Need Barcode</a> mostrará un aviso si los datos no cumplen las reglas del tipo de código elegido.</p>

<h2>7. Superficie e iluminación</h2>
<p>Los materiales brillantes, el plástico transparente, los pliegues y las superficies curvas pueden reflejar la luz o deformar el código de barras. <strong>Solución:</strong> imprima sobre una superficie plana y mate, y pruébelo en las condiciones de luz reales.</p>

<h2>Sobre los QR Codes con diseño</h2>
<p>Un QR Code con forma, color o marco sigue siendo escaneable siempre que los tres cuadrados de referencia de sus esquinas estén intactos y el contraste sea suficiente. Lea más en <a href="/artikel/desain-qr-code-kreatif">diseños creativos de QR Code que siguen siendo legibles</a>.</p>
<p>La mejor costumbre: <strong>pruebe siempre una impresión</strong> con varios móviles y escáneres antes de imprimir en grandes cantidades.</p>
`
};
