// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Diferenza entre códigos de barras 1D e 2D: cal necesita?",
  desc: "O código de barras lineal e o QR Code son os dous códigos de barras, pero teñen usos diferentes. Compare a súa capacidade, a forma de escanealos e exemplos de uso.",
  tags: ["Conceptos básicos", "Códigos de barras"],
  coverCaption: "O lector portátil do almacén le códigos de barras 1D e 2D.",
  inlineCaption: "As etiquetas de envío adoitan usar códigos de barras lineais.",
  faq: [
    ["O lector da caixa pode ler QR Codes?", "Non todos. Os lectores láser 1D só len códigos de barras lineais. Para os QR Codes cómpre un lector 2D con cámara ou a cámara do móbil."],
    ["Cal é o código de barras máis pequeno?", "O Data Matrix é un código de barras 2D que se pode imprimir en tamaños moi pequenos, por iso se usa a miúdo en compoñentes electrónicos, produtos sanitarios e etiquetas de medicamentos."],
    ["Pódese usar un QR Code en lugar do EAN-13 en produtos de venda polo miúdo?", "Para venderse en tendas, o produto segue necesitando un EAN-13 ou un UPC rexistrado. O QR Code pódese engadir á embalaxe como complemento, por exemplo para información do produto ou promocións."]
  ],
  body: `
<p>Cando se crea un código de barras, a primeira pregunta que adoita xurdir é: usar un código de barras lineal ou un QR Code? Os dous chámanse códigos de barras, pero gardan os datos de forma diferente e, polo tanto, tamén teñen usos diferentes.</p>

<h2>Códigos de barras 1D (lineais)</h2>
<p>O código de barras 1D está formado por liñas verticais. Os datos gárdanse nunha soa dirección, de esquerda a dereita. Os exemplos máis coñecidos son o <a href="/?type=ean13">EAN-13</a> nas embalaxes de produtos e o <a href="/?type=code128">Code 128</a> nas etiquetas de envío.</p>
<ul>
  <li>Capacidade pequena, normalmente dunha ducia a unhas cantas decenas de caracteres.</li>
  <li>Pódense ler cos lectores láser de caixa, que son baratos e moi rápidos.</li>
  <li>Axeitados para códigos de produto, números de serie e números de envío.</li>
</ul>

<h2>Códigos de barras 2D</h2>
<p>O código de barras 2D garda datos en dúas direccións, en horizontal e en vertical, polo que nel caben moitos máis. Son exemplos o <a href="/?type=qrcode">QR Code</a>, o <a href="/?type=datamatrix">Data Matrix</a>, o <a href="/?type=pdf417">PDF417</a> e o <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Gran capacidade, de decenas a miles de caracteres.</li>
  <li>Pódense escanear coa cámara do móbil desde calquera dirección.</li>
  <li>Teñen corrección de erros, polo que se poden ler aínda que estean parcialmente danados.</li>
  <li>Poden ser moi pequenos, como o Data Matrix en compoñentes electrónicos.</li>
</ul>

<h2>Comparación rápida</h2>
<table>
  <thead><tr><th></th><th>Código de barras 1D</th><th>Código de barras 2D</th></tr></thead>
  <tbody>
    <tr><td>Forma</td><td>Liñas verticais</td><td>Cadrados/puntos dentro dun cadrado</td></tr>
    <tr><td>Capacidade</td><td>Pequena</td><td>Grande</td></tr>
    <tr><td>Lector</td><td>Lector láser ou cámara</td><td>Cámara ou lector 2D</td></tr>
    <tr><td>Resistencia aos danos</td><td>Limitada</td><td>Corrección de erros</td></tr>
    <tr><td>Exemplos</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Cando usar cada un?</h2>
<ul>
  <li><strong>Produtos que se venden en tendas ou establecementos de proximidade</strong>: use un EAN-13 oficial de GS1. Consulte <a href="/artikel/cara-mendapatkan-barcode-ean-13">como obter un código de barras EAN-13</a>.</li>
  <li><strong>Etiquetas de almacén, andel ou envío</strong>: o Code 128 é a opción habitual porque é compacto e admite letras e números.</li>
  <li><strong>Ligazóns, cartas, WiFi ou contactos para os clientes</strong>: QR Code, porque se pode escanear directamente coa cámara do móbil.</li>
  <li><strong>Etiquetas moi pequenas</strong>: Data Matrix.</li>
  <li><strong>Documentos de identidade, tarxetas de embarque ou documentos</strong>: PDF417 ou Aztec.</li>
</ul>
<p>Pode crear de balde todos estes tipos en <a href="/">I Need Barcode</a>. Se aínda ten dúbidas, comece polo QR Code para as necesidades dos clientes e polo Code 128 para as necesidades internas.</p>
`
};
