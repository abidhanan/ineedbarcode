// apa-itu-barcode
module.exports = {
  title: "O que é um código de barras? Definição, funcionamento e tipos",
  desc: "O código de barras está em quase todos os produtos que compra. Conheça o seu funcionamento, a sua breve história e os tipos de código de barras mais utilizados.",
  tags: ["Noções básicas", "Códigos de barras"],
  coverCaption: "O código de barras na embalagem guarda o código único do produto.",
  inlineCaption: "O operador de caixa utiliza um leitor para ler o código de barras num instante.",
  faq: [
    ["Qual é a diferença entre um código de barras e um QR Code?", "O QR Code é um tipo de código de barras, mais concretamente um código de barras 2D. O código de barras linear (1D) guarda apenas alguns caracteres e é lido da esquerda para a direita, ao passo que o QR Code guarda dados em duas direções, pelo que comporta ligações, texto ou dados de WiFi."],
    ["O código de barras guarda o preço do produto?", "Normalmente, não. O código de barras do produto contém apenas um código. O preço e o nome do produto são guardados no sistema da caixa e procurados com base no código lido."],
    ["É preciso pagar para criar um código de barras?", "Não. A imagem do código de barras pode ser criada gratuitamente, por exemplo no I Need Barcode. O que tem de ser registado mediante pagamento é apenas o número oficial para códigos de barras de produtos de retalho, como o EAN-13, através da GS1."]
  ],
  body: `
<p>O código de barras é uma forma de escrever dados num padrão que pode ser lido por máquinas. Esse padrão é normalmente composto por linhas pretas e brancas de larguras diferentes, ou por pequenos quadrados dispostos dentro de um quadrado. Quando é lido, o padrão é novamente convertido em números ou texto, como um código de produto, um número de envio ou o endereço de um site.</p>
<p>Por ser lido por máquinas, o código de barras é muito mais rápido e menos sujeito a erros do que introduzir um código manualmente. É por isso que é utilizado nas caixas das lojas, em armazéns, hospitais, bilhetes e até em embalagens de alimentos.</p>

<h2>Breve história do código de barras</h2>
<p>A ideia do código de barras foi patenteada em 1952 por Norman Joseph Woodland e Bernard Silver, nos Estados Unidos. O código de barras só começou realmente a ser utilizado nas lojas em 1974, quando uma embalagem de pastilhas elásticas foi lida num supermercado do Ohio com um código UPC. Desde então, o código de barras espalhou-se pelo mundo inteiro e é hoje gerido a nível global por uma organização de normalização chamada GS1.</p>

<h2>Como funciona o código de barras?</h2>
<p>O leitor ilumina o código de barras e lê o reflexo. As partes escuras refletem pouca luz e as partes claras refletem muita. Essa diferença é convertida numa sequência de 0 e 1, que é depois comparada com as regras desse tipo de código de barras. Muitos códigos de barras têm também um <strong>dígito de controlo</strong> (check digit), ou seja, o último número, calculado a partir dos números anteriores. Se o resultado do cálculo não corresponder, o leitor sabe que algo está errado e rejeita a leitura.</p>
<p>O código de barras propriamente dito guarda normalmente apenas um código. Informações como o nome do produto ou o preço são guardadas no sistema da caixa ou numa base de dados e procuradas com base nesse código.</p>

<h2>Tipos de código de barras mais utilizados</h2>
<p>De um modo geral, os códigos de barras dividem-se em dois grandes grupos:</p>
<ul>
  <li><strong>Código de barras 1D (linear)</strong>: composto por linhas verticais lidas da esquerda para a direita. Alguns exemplos são o <a href="/?type=ean13">EAN-13</a> e o <a href="/?type=upca">UPC-A</a> para produtos de retalho, bem como o <a href="/?type=code128">Code 128</a> e o <a href="/?type=code39">Code 39</a> para logística e armazéns.</li>
  <li><strong>Código de barras 2D</strong>: composto por um padrão de quadrados que guarda dados em duas direções, pelo que comporta muito mais informação. Alguns exemplos são o <a href="/?type=qrcode">QR Code</a>, o <a href="/?type=datamatrix">Data Matrix</a>, o <a href="/?type=pdf417">PDF417</a> e o <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Existem ainda códigos de barras próprios para correios e envios, para a área da saúde, bem como as normas GS1 para a cadeia de abastecimento. Pode ler uma explicação mais pormenorizada sobre as diferenças no artigo <a href="/artikel/perbedaan-barcode-1d-dan-2d">Diferença entre códigos de barras 1D e 2D</a>.</p>

<h2>Para que serve o código de barras?</h2>
<ul>
  <li><strong>Retalho</strong>: acelera a caixa e regista o stock automaticamente.</li>
  <li><strong>Armazéns e envios</strong>: segue mercadorias e encomendas de um local para outro.</li>
  <li><strong>Bilhetes e eventos</strong>: verifica a autenticidade dos bilhetes com uma única leitura.</li>
  <li><strong>Marketing</strong>: um QR Code em folhetos ou embalagens leva as pessoas diretamente ao seu site, ementa ou WhatsApp.</li>
</ul>

<h2>Criar o seu próprio código de barras</h2>
<p>Não precisa de uma aplicação paga para criar códigos de barras. No <a href="/">I Need Barcode</a>, escolha o tipo de código de barras, introduza os dados e transfira-o como imagem PNG. Há mais de 100 tipos à escolha, todos gratuitos e sem registo.</p>
`
};
