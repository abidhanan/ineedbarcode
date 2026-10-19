// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Como obter um código de barras EAN-13 para produtos de pequenas empresas",
  desc: "Quer ver o seu produto em minimercados ou supermercados? Conheça o significado dos números do EAN-13, como registar um número oficial na GS1 Indonesia e como imprimi-lo.",
  tags: ["Negócios", "Retalho"],
  coverCaption: "As embalagens de produtos de retalho precisam de um código de barras EAN-13 registado.",
  inlineCaption: "As lojas de retalho reconhecem o produto pelo número EAN-13 no sistema da caixa.",
  faq: [
    ["Posso criar o meu próprio número EAN-13?", "A imagem do código de barras pode ser criada por si, mas o número deve, de preferência, ser oficial da GS1. Um número inventado pode coincidir com o de outro produto e ser recusado pelas lojas de retalho."],
    ["Cada variante do produto precisa de um código de barras diferente?", "Sim. Cada variante diferente, por exemplo com outro sabor, tamanho ou conteúdo da embalagem, precisa do seu próprio número EAN-13."],
    ["O que é o dígito de controlo do EAN-13?", "O dígito de controlo é o 13.º número, calculado a partir dos 12 números anteriores. O leitor utiliza-o para garantir que o código de barras é lido corretamente. O gerador do I Need Barcode calcula-o automaticamente se introduzir 12 dígitos."]
  ],
  body: `
<p>Se pretende vender o seu produto em minimercados, supermercados ou grandes marketplaces, normalmente ser-lhe-á pedido que inclua um código de barras <strong>EAN-13</strong> na embalagem. Este código de barras contém 13 dígitos numéricos que servem de identidade única do seu produto em todo o mundo.</p>

<h2>O significado dos 13 dígitos do EAN-13</h2>
<ul>
  <li><strong>Prefixo GS1</strong>: os três primeiros dígitos indicam a organização GS1 que emitiu o número. Os números emitidos pela GS1 Indonesia começam por <strong>899</strong>.</li>
  <li><strong>Número da empresa</strong>: a identificação da sua empresa, atribuída no momento do registo.</li>
  <li><strong>Número do produto</strong>: definido pela própria empresa para cada variante do produto, por exemplo com outro sabor ou outro tamanho.</li>
  <li><strong>Dígito de controlo</strong>: o último dígito, calculado automaticamente a partir dos 12 dígitos anteriores para evitar erros de leitura.</li>
</ul>

<h2>Porquê um número oficial?</h2>
<p>Qualquer pessoa pode desenhar um código de barras EAN-13, mas o <strong>número</strong> tem de estar registado. As lojas de retalho utilizam esse número para reconhecer o produto nos seus sistemas. Se inventar um número, este pode coincidir com o produto de outra empresa e ser recusado quando o produto for registado na loja.</p>

<h2>Como registar um número na GS1 Indonesia</h2>
<ol>
  <li>Prepare os documentos da empresa, como o NIB (número de registo empresarial indonésio) e o NPWP (número de contribuinte), bem como a lista de produtos que vão ter código de barras.</li>
  <li>Registe a empresa através do site oficial da GS1 Indonesia e escolha a quantidade de números de que precisa.</li>
  <li>Pague a taxa de registo e a quota anual de acordo com as regras em vigor.</li>
  <li>Após a aprovação, recebe o número da empresa e pode criar números para cada produto.</li>
</ol>
<p>Os requisitos e as taxas podem mudar, por isso consulte sempre as informações mais recentes diretamente no site da GS1 Indonesia.</p>

<h2>Criar a imagem do código de barras</h2>
<p>Depois de ter o número, abra o <a href="/?type=ean13">gerador de EAN-13</a> e introduza os 12 ou 13 dígitos do número do seu produto. Se introduzir 12 dígitos, o dígito de controlo é calculado automaticamente. Certifique-se de que a opção de texto por baixo do código de barras está ativa para que os números sejam impressos e transfira-o como PNG.</p>

<h2>Dicas para imprimir na embalagem</h2>
<ul>
  <li>Utilize barras pretas ou azul-escuras sobre fundo branco. Evite o vermelho nas barras, porque muitos leitores de caixa utilizam luz vermelha e, por isso, as barras vermelhas não são lidas.</li>
  <li>Não reduza excessivamente o código de barras. O tamanho padrão do EAN-13 é de cerca de 37,3 × 25,9 mm e pode ser reduzido até cerca de 80%. Saiba mais no <a href="/artikel/ukuran-barcode-untuk-dicetak">guia de tamanhos de códigos de barras</a>.</li>
  <li>Deixe um espaço vazio à esquerda e à direita do código de barras e evite colocá-lo em dobras ou junções da embalagem.</li>
  <li>Teste a impressão com um leitor antes de imprimir em grande quantidade.</li>
</ul>
<p>Para produtos vendidos na América do Norte, poderá também ser-lhe pedido o <a href="/?type=upca">UPC-A</a>, que contém 12 dígitos.</p>
`
};
