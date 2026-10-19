// apa-itu-barcode
module.exports = {
  title: "O que é código de barras? Definição, funcionamento e tipos",
  desc: "O código de barras está em quase todos os produtos que você compra. Conheça como ele funciona, um pouco da sua história e os tipos de código de barras mais usados.",
  tags: ["Noções básicas", "Códigos de barras"],
  coverCaption: "O código de barras na embalagem guarda o código único do produto.",
  inlineCaption: "O caixa usa um leitor para ler o código de barras em um instante.",
  faq: [
    ["Qual é a diferença entre código de barras e QR Code?", "O QR Code é um tipo de código de barras, mais precisamente um código de barras 2D. O código de barras linear (1D) guarda poucos caracteres e é lido da esquerda para a direita, enquanto o QR Code guarda dados em duas direções e, por isso, comporta links, textos ou dados de WiFi."],
    ["O código de barras guarda o preço do produto?", "Normalmente, não. O código de barras do produto contém apenas um código. O preço e o nome do produto ficam no sistema do caixa e são buscados a partir do código lido."],
    ["É preciso pagar para criar um código de barras?", "Não. A imagem do código de barras pode ser criada gratuitamente, por exemplo no I Need Barcode. O que precisa ser registrado mediante pagamento é apenas o número oficial para códigos de barras de produtos de varejo, como o EAN-13, por meio da GS1."]
  ],
  body: `
<p>O código de barras é uma forma de escrever dados em um padrão que pode ser lido por máquinas. Esse padrão costuma ser formado por linhas pretas e brancas de larguras diferentes, ou por pequenos quadrados organizados dentro de um quadrado maior. Ao ser escaneado, o padrão é convertido de volta em números ou texto, como o código de um produto, um número de rastreamento ou o endereço de um site.</p>
<p>Como é lido por máquinas, o código de barras é muito mais rápido e menos sujeito a erros do que digitar um código manualmente. É por isso que ele é usado em caixas de lojas, armazéns, hospitais, ingressos e até embalagens de alimentos.</p>

<h2>Breve história do código de barras</h2>
<p>A ideia do código de barras foi patenteada em 1952 por Norman Joseph Woodland e Bernard Silver, nos Estados Unidos. O código de barras só passou a ser usado de fato nas lojas em 1974, quando um pacote de chicletes foi escaneado em um supermercado de Ohio com um código UPC. Desde então, o código de barras se espalhou pelo mundo e hoje é administrado globalmente por uma organização de padrões chamada GS1.</p>

<h2>Como funciona o código de barras?</h2>
<p>O leitor ilumina o código de barras e lê o reflexo. As partes escuras refletem pouca luz e as partes claras refletem muita. Essa diferença é convertida em uma sequência de 0 e 1, que depois é comparada com as regras daquele tipo de código de barras. Muitos códigos de barras também têm um <strong>dígito verificador</strong> (check digit), que é o último número, calculado a partir dos números anteriores. Se o resultado do cálculo não bater, o leitor sabe que algo está errado e rejeita a leitura.</p>
<p>O código de barras em si normalmente guarda apenas um código. Informações como o nome do produto ou o preço ficam no sistema do caixa ou em um banco de dados e são buscadas a partir desse código.</p>

<h2>Tipos de código de barras mais usados</h2>
<p>De modo geral, os códigos de barras se dividem em dois grandes grupos:</p>
<ul>
  <li><strong>Código de barras 1D (linear)</strong>: formado por linhas verticais lidas da esquerda para a direita. Exemplos são o <a href="/?type=ean13">EAN-13</a> e o <a href="/?type=upca">UPC-A</a> para produtos de varejo, além do <a href="/?type=code128">Code 128</a> e do <a href="/?type=code39">Code 39</a> para logística e armazéns.</li>
  <li><strong>Código de barras 2D</strong>: formado por um padrão de quadrados que guarda dados em duas direções, por isso comporta muito mais informação. Exemplos são o <a href="/?type=qrcode">QR Code</a>, o <a href="/?type=datamatrix">Data Matrix</a>, o <a href="/?type=pdf417">PDF417</a> e o <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Além disso, existem códigos de barras específicos para correios e envios, para a área da saúde e os padrões GS1 para a cadeia de suprimentos. Uma explicação mais detalhada sobre as diferenças pode ser lida no artigo <a href="/artikel/perbedaan-barcode-1d-dan-2d">Diferença entre código de barras 1D e 2D</a>.</p>

<h2>Para que serve o código de barras?</h2>
<ul>
  <li><strong>Varejo</strong>: agiliza o caixa e registra o estoque automaticamente.</li>
  <li><strong>Armazéns e envios</strong>: rastreia mercadorias e pacotes de um lugar para outro.</li>
  <li><strong>Ingressos e eventos</strong>: confere a autenticidade dos ingressos com uma única leitura.</li>
  <li><strong>Marketing</strong>: um QR Code em folhetos ou embalagens leva as pessoas diretamente ao seu site, cardápio ou WhatsApp.</li>
</ul>

<h2>Crie seu próprio código de barras</h2>
<p>Você não precisa de um aplicativo pago para criar códigos de barras. No <a href="/">I Need Barcode</a>, escolha o tipo de código de barras, preencha os dados e baixe como imagem PNG. São mais de 100 tipos disponíveis, todos gratuitos e sem cadastro.</p>
`
};
