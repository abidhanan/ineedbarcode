// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Como obter un código de barras EAN-13 para os produtos das pequenas empresas",
  desc: "Quere que o seu produto chegue a tendas de proximidade ou supermercados? Descubra que significan os números do EAN-13, como rexistrar un número oficial en GS1 Indonesia e como imprimilo.",
  tags: ["Negocios", "Venda polo miúdo"],
  coverCaption: "As embalaxes de produtos de venda polo miúdo necesitan un código de barras EAN-13 rexistrado.",
  inlineCaption: "As tendas recoñecen o produto polo número EAN-13 no seu sistema de caixa.",
  faq: [
    ["Podo crear o meu propio número EAN-13?", "A imaxe do código de barras pode creala vostede mesmo, pero convén que o número sexa oficial de GS1. Un número inventado pode coincidir co doutro produto e as tendas poden rexeitalo."],
    ["Cada variante do produto necesita un código de barras diferente?", "Si. Cada variante diferente, por exemplo con outro sabor, outro tamaño ou outro contido da embalaxe, necesita o seu propio número EAN-13."],
    ["Que é o díxito de control do EAN-13?", "O díxito de control é o 13.º número, que se calcula a partir dos 12 números anteriores. O lector utilízao para asegurarse de que o código de barras se leu correctamente. O xerador de I Need Barcode calcúlao automaticamente se introduce 12 díxitos."]
  ],
  body: `
<p>Se quere vender o seu produto en tendas de proximidade, supermercados ou grandes plataformas de venda en liña, normalmente pediranlle que inclúa un código de barras <strong>EAN-13</strong> na embalaxe. Este código de barras contén 13 díxitos numéricos que son a identidade única do seu produto en todo o mundo.</p>

<h2>O significado dos 13 díxitos do EAN-13</h2>
<ul>
  <li><strong>Prefixo GS1</strong>: os tres primeiros díxitos indican a organización GS1 que emitiu o número. Os números emitidos por GS1 Indonesia comezan por <strong>899</strong>.</li>
  <li><strong>Número da empresa</strong>: a identificación da súa empresa, que se asigna no momento do rexistro.</li>
  <li><strong>Número do produto</strong>: establéceo a propia empresa para cada variante do produto, por exemplo cun sabor ou un tamaño diferentes.</li>
  <li><strong>Díxito de control</strong>: o último díxito, que se calcula automaticamente a partir dos 12 díxitos anteriores para evitar erros de lectura.</li>
</ul>

<h2>Por que fai falta un número oficial?</h2>
<p>Calquera persoa pode debuxar un código de barras EAN-13, pero o <strong>número</strong> ten que estar rexistrado. As tendas usan ese número para recoñecer o produto nos seus sistemas. Se inventa un número, pode coincidir co produto doutra empresa e ser rexeitado cando o produto se dea de alta na tenda.</p>

<h2>Como rexistrar un número en GS1 Indonesia</h2>
<ol>
  <li>Prepare os documentos da empresa, como o NIB (número de rexistro empresarial de Indonesia) e o NPWP (número de identificación fiscal), así como a lista de produtos que levarán código de barras.</li>
  <li>Rexistre a empresa a través do sitio web oficial de GS1 Indonesia e escolla a cantidade de números que necesita.</li>
  <li>Pague a taxa de rexistro e a cota anual segundo as condicións vixentes.</li>
  <li>Unha vez aprobada a solicitude, recibirá o número da empresa e poderá crear números para cada produto.</li>
</ol>
<p>Os requisitos e as tarifas poden cambiar, así que consulte sempre a información máis recente directamente no sitio web de GS1 Indonesia.</p>

<h2>Crear a imaxe do código de barras</h2>
<p>Cando teña o número, abra o <a href="/?type=ean13">xerador de EAN-13</a> e introduza os 12 ou 13 díxitos do número do seu produto. Se introduce 12 díxitos, o díxito de control calcularase automaticamente. Asegúrese de que a opción de texto debaixo do código de barras estea activada para que se impriman os números e descárgueo como PNG.</p>

<h2>Consellos para imprimilo na embalaxe</h2>
<ul>
  <li>Use barras negras ou azul mariño sobre fondo branco. Evite o vermello nas barras, porque moitos lectores de caixa usan luz vermella e as barras vermellas non se len.</li>
  <li>Non reduza en exceso o código de barras. O tamaño estándar do EAN-13 é duns 37,3 × 25,9 mm e pódese reducir ata arredor do 80%. Máis información na <a href="/artikel/ukuran-barcode-untuk-dicetak">guía de tamaños de códigos de barras</a>.</li>
  <li>Deixe un espazo baleiro á esquerda e á dereita do código de barras e evite colocalo en dobras ou unións da embalaxe.</li>
  <li>Probe a impresión cun lector antes de imprimir en grandes cantidades.</li>
</ul>
<p>Para os produtos que se venden en América do Norte, tamén é posible que lle pidan o <a href="/?type=upca">UPC-A</a>, que contén 12 díxitos.</p>
`
};
