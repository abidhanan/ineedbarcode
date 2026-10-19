// apa-itu-barcode
module.exports = {
  title: "Que é un código de barras? Definición, funcionamento e tipos",
  desc: "O código de barras está en case todos os produtos que compra. Coñeza como funciona, a súa breve historia e os tipos de código de barras máis empregados.",
  tags: ["Conceptos básicos", "Códigos de barras"],
  coverCaption: "O código de barras da embalaxe garda o código único do produto.",
  inlineCaption: "Na caixa úsase un lector para ler o código de barras nun instante.",
  faq: [
    ["Cal é a diferenza entre un código de barras e un QR Code?", "O QR Code é un tipo de código de barras, concretamente un código de barras 2D. O código de barras lineal (1D) só garda uns poucos caracteres e lese de esquerda a dereita, mentres que o QR Code garda datos en dúas direccións, polo que nel caben ligazóns, texto ou datos de WiFi."],
    ["O código de barras garda o prezo do produto?", "Normalmente, non. O código de barras do produto só contén un código. O prezo e o nome do produto gárdanse no sistema da caixa e búscanse a partir do código lido."],
    ["Hai que pagar para crear un código de barras?", "Non. A imaxe do código de barras pódese crear de balde, por exemplo en I Need Barcode. O único que hai que rexistrar pagando é o número oficial para os códigos de barras de produtos de venda polo miúdo, como o EAN-13, a través de GS1."]
  ],
  body: `
<p>O código de barras é unha maneira de escribir datos en forma dun patrón que poden ler as máquinas. Ese patrón adoita estar formado por liñas negras e brancas de anchuras diferentes, ou por cadradiños dispostos dentro dun cadrado. Ao escanealo, o patrón convértese de novo en números ou texto, como un código de produto, un número de envío ou o enderezo dun sitio web.</p>
<p>Como o len as máquinas, o código de barras é moito máis rápido e ten menos erros ca escribir un código á man. Por iso se usa nas caixas das tendas, nos almacéns, nos hospitais, nas entradas e mesmo nas embalaxes de alimentos.</p>

<h2>Breve historia do código de barras</h2>
<p>A idea do código de barras patentárona en 1952 Norman Joseph Woodland e Bernard Silver nos Estados Unidos. O código de barras non se empezou a usar de verdade nas tendas ata 1974, cando se escaneou un paquete de chicles nun supermercado de Ohio cun código UPC. Desde aquela, o código de barras estendeuse por todo o mundo e hoxe xestióno a nivel global unha organización de estándares chamada GS1.</p>

<h2>Como funciona o código de barras?</h2>
<p>O lector ilumina o código de barras e le o reflexo. As partes escuras reflicten pouca luz e as partes claras reflicten moita. Esa diferenza convértese nunha secuencia de 0 e 1, que despois se compara coas regras dese tipo de código de barras. Moitos códigos de barras tamén teñen un <strong>díxito de control</strong> (check digit), é dicir, o último número, que se calcula a partir dos números anteriores. Se o resultado do cálculo non coincide, o lector sabe que hai un erro e rexeita a lectura.</p>
<p>O código de barras en si normalmente só garda un código. A información como o nome do produto ou o prezo gárdase no sistema da caixa ou nunha base de datos e búscase a partir dese código.</p>

<h2>Os tipos de código de barras máis empregados</h2>
<p>En xeral, os códigos de barras divídense en dous grandes grupos:</p>
<ul>
  <li><strong>Códigos de barras 1D (lineais)</strong>: formados por liñas verticais que se len de esquerda a dereita. Son exemplos o <a href="/?type=ean13">EAN-13</a> e o <a href="/?type=upca">UPC-A</a> para produtos de venda polo miúdo, así como o <a href="/?type=code128">Code 128</a> e o <a href="/?type=code39">Code 39</a> para loxística e almacéns.</li>
  <li><strong>Códigos de barras 2D</strong>: formados por un patrón de cadrados que garda datos en dúas direccións, polo que caben moitos máis. Son exemplos o <a href="/?type=qrcode">QR Code</a>, o <a href="/?type=datamatrix">Data Matrix</a>, o <a href="/?type=pdf417">PDF417</a> e o <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Ademais, hai códigos de barras específicos para correos e envíos, para o ámbito sanitario e os estándares GS1 para a cadea de subministración. Pode ler unha explicación máis detallada sobre as diferenzas no artigo <a href="/artikel/perbedaan-barcode-1d-dan-2d">Diferenza entre códigos de barras 1D e 2D</a>.</p>

<h2>Para que serve o código de barras?</h2>
<ul>
  <li><strong>Venda polo miúdo</strong>: axiliza a caixa e rexistra o inventario automaticamente.</li>
  <li><strong>Almacéns e envíos</strong>: permite seguir mercadorías e paquetes dun lugar a outro.</li>
  <li><strong>Entradas e eventos</strong>: comproba a autenticidade das entradas cunha soa lectura.</li>
  <li><strong>Márketing</strong>: un QR Code en folletos ou embalaxes leva a xente directamente ao seu sitio web, á súa carta ou ao seu WhatsApp.</li>
</ul>

<h2>Cree o seu propio código de barras</h2>
<p>Non precisa ningunha aplicación de pago para crear códigos de barras. En <a href="/">I Need Barcode</a>, escolla o tipo de código de barras, introduza os datos e descárgueo como imaxe PNG. Hai máis de 100 tipos para escoller, todos de balde e sen rexistro.</p>
`
};
