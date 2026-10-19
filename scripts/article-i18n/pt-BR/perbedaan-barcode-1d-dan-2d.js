// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Diferença entre código de barras 1D e 2D: qual você precisa?",
  desc: "O código de barras linear e o QR Code são ambos códigos de barras, mas têm usos diferentes. Compare a capacidade, a forma de leitura e exemplos de uso.",
  tags: ["Noções básicas", "Códigos de barras"],
  coverCaption: "O leitor portátil do armazém lê códigos de barras 1D e 2D.",
  inlineCaption: "Etiquetas de envio costumam usar códigos de barras lineares.",
  faq: [
    ["O leitor do caixa consegue ler QR Code?", "Nem todos. O leitor a laser 1D só lê códigos de barras lineares. Para o QR Code, é preciso um leitor 2D com câmera ou a câmera do celular."],
    ["Qual é o menor código de barras?", "O Data Matrix é um código de barras 2D que pode ser impresso em tamanho muito pequeno, por isso é muito usado em componentes eletrônicos, equipamentos médicos e rótulos de medicamentos."],
    ["Posso usar QR Code no lugar do EAN-13 em produtos de varejo?", "Para ser vendido em lojas de varejo, o produto continua precisando de um EAN-13 ou UPC registrado. O QR Code pode ser adicionado à embalagem como complemento, por exemplo para informações do produto ou promoções."]
  ],
  body: `
<p>Ao criar um código de barras, a primeira pergunta que costuma surgir é: usar um código de barras linear ou um QR Code? Os dois são chamados de código de barras, mas a forma de guardar os dados é diferente, e por isso o uso também é diferente.</p>

<h2>Código de barras 1D (linear)</h2>
<p>O código de barras 1D é formado por linhas verticais. Os dados são guardados em uma única direção, da esquerda para a direita. Os exemplos mais conhecidos são o <a href="/?type=ean13">EAN-13</a> nas embalagens de produtos e o <a href="/?type=code128">Code 128</a> nas etiquetas de envio.</p>
<ul>
  <li>Capacidade pequena, geralmente de uma dezena a algumas dezenas de caracteres.</li>
  <li>Pode ser lido por leitores a laser de caixa, baratos e muito rápidos.</li>
  <li>Ideal para códigos de produtos, números de série e números de rastreamento.</li>
</ul>

<h2>Código de barras 2D</h2>
<p>O código de barras 2D guarda dados em duas direções, na horizontal e na vertical, por isso comporta muito mais informação. Exemplos são o <a href="/?type=qrcode">QR Code</a>, o <a href="/?type=datamatrix">Data Matrix</a>, o <a href="/?type=pdf417">PDF417</a> e o <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Capacidade grande, de dezenas a milhares de caracteres.</li>
  <li>Pode ser lido pela câmera do celular em qualquer direção.</li>
  <li>Tem correção de erros, então continua legível mesmo com parte danificada.</li>
  <li>Pode ser feito em tamanho muito pequeno, como o Data Matrix em componentes eletrônicos.</li>
</ul>

<h2>Comparação rápida</h2>
<table>
  <thead><tr><th></th><th>Código de barras 1D</th><th>Código de barras 2D</th></tr></thead>
  <tbody>
    <tr><td>Formato</td><td>Linhas verticais</td><td>Quadrados/pontos dentro de um quadrado</td></tr>
    <tr><td>Capacidade</td><td>Pequena</td><td>Grande</td></tr>
    <tr><td>Leitor</td><td>Leitor a laser ou câmera</td><td>Câmera ou leitor 2D</td></tr>
    <tr><td>Resistência a danos</td><td>Limitada</td><td>Tem correção de erros</td></tr>
    <tr><td>Exemplos</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Quando usar cada um?</h2>
<ul>
  <li><strong>Produtos vendidos em lojas ou mercadinhos</strong>: use o EAN-13 oficial da GS1. Veja <a href="/artikel/cara-mendapatkan-barcode-ean-13">como obter o código de barras EAN-13</a>.</li>
  <li><strong>Etiquetas de armazém, prateleira ou envio</strong>: o Code 128 é a escolha mais comum, porque é compacto e aceita letras e números.</li>
  <li><strong>Links, cardápios, WiFi ou contatos para clientes</strong>: QR Code, porque pode ser lido diretamente com a câmera do celular.</li>
  <li><strong>Etiquetas muito pequenas</strong>: Data Matrix.</li>
  <li><strong>Documentos de identidade, cartões de embarque ou documentos</strong>: PDF417 ou Aztec.</li>
</ul>
<p>Você pode criar todos esses tipos gratuitamente no <a href="/">I Need Barcode</a>. Se ainda estiver em dúvida, comece com o QR Code para as necessidades dos clientes e o Code 128 para as necessidades internas.</p>
`
};
