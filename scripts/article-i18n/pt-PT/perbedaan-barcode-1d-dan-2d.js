// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Diferença entre códigos de barras 1D e 2D: de qual precisa?",
  desc: "O código de barras linear e o QR Code são ambos códigos de barras, mas têm utilizações diferentes. Compare a capacidade, a forma de leitura e exemplos de utilização.",
  tags: ["Noções básicas", "Códigos de barras"],
  coverCaption: "O leitor portátil do armazém lê códigos de barras 1D e 2D.",
  inlineCaption: "As etiquetas de envio utilizam normalmente códigos de barras lineares.",
  faq: [
    ["O leitor da caixa consegue ler um QR Code?", "Nem todos. O leitor laser 1D só lê códigos de barras lineares. Para o QR Code, é necessário um leitor 2D com câmara ou a câmara do telemóvel."],
    ["Qual é o código de barras mais pequeno?", "O Data Matrix é um código de barras 2D que pode ser impresso em tamanho muito reduzido, pelo que é muito utilizado em componentes eletrónicos, dispositivos médicos e rótulos de medicamentos."],
    ["Posso utilizar um QR Code em vez do EAN-13 em produtos de retalho?", "Para ser vendido em lojas de retalho, o produto continua a precisar de um EAN-13 ou UPC registado. O QR Code pode ser acrescentado à embalagem como complemento, por exemplo para informações sobre o produto ou promoções."]
  ],
  body: `
<p>Ao criar um código de barras, a primeira pergunta que costuma surgir é: utilizar um código de barras linear ou um QR Code? Ambos são chamados códigos de barras, mas a forma como guardam os dados é diferente, pelo que a sua utilização também é diferente.</p>

<h2>Código de barras 1D (linear)</h2>
<p>O código de barras 1D é composto por linhas verticais. Os dados são guardados numa única direção, da esquerda para a direita. Os exemplos mais conhecidos são o <a href="/?type=ean13">EAN-13</a> nas embalagens de produtos e o <a href="/?type=code128">Code 128</a> nas etiquetas de envio.</p>
<ul>
  <li>Capacidade reduzida, normalmente de uma dezena a algumas dezenas de caracteres.</li>
  <li>Pode ser lido pelos leitores laser das caixas, baratos e muito rápidos.</li>
  <li>Adequado para códigos de produtos, números de série e números de envio.</li>
</ul>

<h2>Código de barras 2D</h2>
<p>O código de barras 2D guarda dados em duas direções, na horizontal e na vertical, pelo que comporta muito mais informação. Alguns exemplos são o <a href="/?type=qrcode">QR Code</a>, o <a href="/?type=datamatrix">Data Matrix</a>, o <a href="/?type=pdf417">PDF417</a> e o <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Grande capacidade, de dezenas a milhares de caracteres.</li>
  <li>Pode ser lido pela câmara do telemóvel a partir de qualquer direção.</li>
  <li>Tem correção de erros, pelo que continua legível mesmo que parte esteja danificada.</li>
  <li>Pode ser muito pequeno, como o Data Matrix em componentes eletrónicos.</li>
</ul>

<h2>Comparação rápida</h2>
<table>
  <thead><tr><th></th><th>Código de barras 1D</th><th>Código de barras 2D</th></tr></thead>
  <tbody>
    <tr><td>Forma</td><td>Linhas verticais</td><td>Quadrados/pontos dentro de um quadrado</td></tr>
    <tr><td>Capacidade</td><td>Reduzida</td><td>Grande</td></tr>
    <tr><td>Leitor</td><td>Leitor laser ou câmara</td><td>Câmara ou leitor 2D</td></tr>
    <tr><td>Resistência a danos</td><td>Limitada</td><td>Tem correção de erros</td></tr>
    <tr><td>Exemplos</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Quando utilizar cada um?</h2>
<ul>
  <li><strong>Produtos vendidos em lojas ou minimercados</strong>: utilize um EAN-13 oficial da GS1. Consulte <a href="/artikel/cara-mendapatkan-barcode-ean-13">como obter um código de barras EAN-13</a>.</li>
  <li><strong>Etiquetas de armazém, prateleira ou envio</strong>: o Code 128 é a opção habitual, porque é compacto e suporta letras e números.</li>
  <li><strong>Ligações, ementas, WiFi ou contactos para clientes</strong>: QR Code, porque pode ser lido diretamente com a câmara do telemóvel.</li>
  <li><strong>Etiquetas muito pequenas</strong>: Data Matrix.</li>
  <li><strong>Cartões de identificação, cartões de embarque ou documentos</strong>: PDF417 ou Aztec.</li>
</ul>
<p>Pode criar todos estes tipos gratuitamente no <a href="/">I Need Barcode</a>. Se ainda tiver dúvidas, comece pelo QR Code para as necessidades dos clientes e pelo Code 128 para as necessidades internas.</p>
`
};
