// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Como obter o código de barras EAN-13 para produtos de pequenas empresas",
  desc: "Quer ver o seu produto em mercadinhos ou supermercados? Entenda o significado dos números do EAN-13, como registrar um número oficial na GS1 Indonesia e como imprimi-lo.",
  tags: ["Negócios", "Varejo"],
  coverCaption: "Embalagens de produtos de varejo precisam de um código de barras EAN-13 registrado.",
  inlineCaption: "As lojas de varejo reconhecem o produto pelo número EAN-13 no sistema do caixa.",
  faq: [
    ["Posso criar o meu próprio número EAN-13?", "A imagem do código de barras você pode criar por conta própria, mas o número deve ser, de preferência, oficial da GS1. Um número inventado pode coincidir com o de outro produto e ser recusado pelas lojas de varejo."],
    ["Cada variante do produto precisa de um código de barras diferente?", "Sim. Cada variante diferente, por exemplo com outro sabor, tamanho ou conteúdo da embalagem, precisa do seu próprio número EAN-13."],
    ["O que é o dígito verificador do EAN-13?", "O dígito verificador é o 13º número, calculado a partir dos 12 números anteriores. O leitor o usa para garantir que o código de barras foi lido corretamente. O gerador do I Need Barcode o calcula automaticamente se você inserir 12 dígitos."]
  ],
  body: `
<p>Se você quer vender o seu produto em mercadinhos, supermercados ou grandes marketplaces, normalmente será solicitado a incluir um código de barras <strong>EAN-13</strong> na embalagem. Esse código de barras contém 13 dígitos numéricos que funcionam como a identidade única do seu produto no mundo inteiro.</p>

<h2>O significado dos 13 dígitos do EAN-13</h2>
<ul>
  <li><strong>Prefixo GS1</strong>: os três primeiros dígitos indicam a organização GS1 que emitiu o número. Os números emitidos pela GS1 Indonesia começam com <strong>899</strong>.</li>
  <li><strong>Número da empresa</strong>: a identificação da sua empresa, atribuída no momento do registro.</li>
  <li><strong>Número do produto</strong>: definido pela própria empresa para cada variante do produto, por exemplo com sabor ou tamanho diferente.</li>
  <li><strong>Dígito verificador</strong>: o último dígito, calculado automaticamente a partir dos 12 dígitos anteriores para evitar erros de leitura.</li>
</ul>

<h2>Por que usar um número oficial?</h2>
<p>Qualquer pessoa pode desenhar um código de barras EAN-13, mas o <strong>número</strong> precisa estar registrado. As lojas de varejo usam esse número para reconhecer o produto nos seus sistemas. Se você inventar um número, ele pode coincidir com o produto de outra empresa e ser recusado quando o produto for cadastrado na loja.</p>

<h2>Como registrar um número na GS1 Indonesia</h2>
<ol>
  <li>Prepare os documentos da empresa, como o NIB (número de registro empresarial da Indonésia) e o NPWP (número de contribuinte), além da lista de produtos que receberão código de barras.</li>
  <li>Registre a empresa pelo site oficial da GS1 Indonesia e escolha a quantidade de números necessária.</li>
  <li>Pague a taxa de registro e a anuidade conforme as regras vigentes.</li>
  <li>Após a aprovação, você recebe o número da empresa e pode criar números para cada produto.</li>
</ol>
<p>Os requisitos e as taxas podem mudar, por isso confira sempre as informações mais recentes diretamente no site da GS1 Indonesia.</p>

<h2>Como criar a imagem do código de barras</h2>
<p>Depois de ter o número, abra o <a href="/?type=ean13">gerador de EAN-13</a> e insira os 12 ou 13 dígitos do número do seu produto. Se você inserir 12 dígitos, o dígito verificador será calculado automaticamente. Verifique se a opção de texto abaixo do código de barras está ativada para que os números sejam impressos e baixe como PNG.</p>

<h2>Dicas para imprimir na embalagem</h2>
<ul>
  <li>Use barras pretas ou azul-marinho sobre fundo branco. Evite a cor vermelha nas barras, porque muitos leitores de caixa usam luz vermelha e, com isso, as barras vermelhas não são lidas.</li>
  <li>Não reduza demais o código de barras. O tamanho padrão do EAN-13 é de cerca de 37,3 × 25,9 mm e pode ser reduzido até cerca de 80%. Mais detalhes no <a href="/artikel/ukuran-barcode-untuk-dicetak">guia de tamanhos de código de barras</a>.</li>
  <li>Deixe um espaço vazio à esquerda e à direita do código de barras e evite colocá-lo em dobras ou emendas da embalagem.</li>
  <li>Teste a impressão com um leitor antes de imprimir em grande quantidade.</li>
</ul>
<p>Para produtos vendidos na América do Norte, também pode ser exigido o <a href="/?type=upca">UPC-A</a>, que contém 12 dígitos.</p>
`
};
