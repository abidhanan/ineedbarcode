// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Tamanho e resolução adequados de um código de barras para impressão",
  desc: "Um código de barras demasiado pequeno ou desfocado é difícil de ler. Conheça o tamanho mínimo, a regra da distância de leitura e a resolução de imagem segura para impressão.",
  tags: ["Guia", "Impressão"],
  coverCaption: "A impressora de etiquetas imprime códigos de barras para encomendas e embalagens.",
  inlineCaption: "O tamanho da etiqueta determina até que ponto o código de barras pode ser grande.",
  faq: [
    ["Qual é o tamanho mínimo de um QR Code para impressão?", "Para ser lido de perto, cerca de 2 × 2 cm é o limite seguro. Para distâncias maiores, utilize uma proporção de cerca de 10 : 1 entre a distância de leitura e a largura do QR Code."],
    ["Qual é o tamanho padrão de um código de barras EAN-13?", "O tamanho padrão do EAN-13 é de cerca de 37,3 × 25,9 mm. Pode ser reduzido até cerca de 80% ou ampliado até 200%."],
    ["Porque é que o código de barras fica desfocado depois de impresso?", "Normalmente porque a imagem era pequena e foi ampliada, ou foi guardada como JPG de baixa qualidade. Transfira-o com um tamanho de módulo maior em formato PNG."]
  ],
  body: `
<p>Um código de barras que parece bem no ecrã nem sempre é legível depois de impresso. Um tamanho demasiado pequeno, uma resolução baixa ou tinta esborratada podem fazer com que o leitor falhe. Apresentamos de seguida um guia para que as suas impressões continuem legíveis.</p>

<h2>Conheça o módulo</h2>
<p>O <strong>módulo</strong> é a unidade mais pequena de um código de barras, ou seja, um pequeno quadrado num QR Code ou a barra mais estreita num código de barras linear. O tamanho do módulo determina a facilidade com que o código de barras é lido. No <a href="/">I Need Barcode</a>, o tamanho do módulo pode ser ajustado na secção Definições: quanto maior o valor, maior e mais nítida é a imagem transferida.</p>

<h2>Tamanho mínimo do QR Code</h2>
<ul>
  <li>Para ser lido de perto (por exemplo, em cartões de visita ou etiquetas de produtos), cerca de <strong>2 × 2 cm</strong> é o limite seguro.</li>
  <li>Utilize a regra de proporção de cerca de <strong>10 : 1</strong>: a distância de leitura é aproximadamente dez vezes a largura do QR Code. Para um cartaz lido a 2 metros de distância, crie um QR Code com pelo menos cerca de 20 cm.</li>
  <li>Quanto mais dados forem guardados, mais denso fica o padrão, pelo que é necessário um tamanho maior.</li>
</ul>

<h2>Tamanho do código de barras de produtos</h2>
<p>O tamanho padrão do <a href="/?type=ean13">EAN-13</a> é de cerca de 37,3 × 25,9 mm (100%). Pode ser reduzido até cerca de 80% ou ampliado até 200%. Evite encurtar demasiado a altura das barras, porque o leitor da caixa precisa de espaço para ler a partir de vários ângulos.</p>

<h2>Resolução da imagem</h2>
<ul>
  <li>Para impressão, procure que cada módulo seja desenhado com <strong>vários píxeis completos</strong>, e não com frações de píxel. Escolha um tamanho de módulo maior ao transferir e reduza-o na aplicação de design, e não o contrário.</li>
  <li>Evite ampliar uma imagem pequena de código de barras, porque as margens dos quadrados ficam desfocadas ou serrilhadas.</li>
  <li>Guarde em formato PNG para que as cores e as margens não se degradem como acontece no JPG.</li>
</ul>

<h2>Zona de silêncio</h2>
<p>Todos os códigos de barras precisam de um espaço vazio à sua volta, chamado <strong>zona de silêncio</strong> (quiet zone). No QR Code, o ideal é que tenha a largura de quatro módulos. Nos códigos de barras lineares, o espaço vazio à esquerda e à direita é muito importante. Não coloque texto, linhas decorativas ou a margem da embalagem demasiado perto.</p>

<h2>Cores e materiais</h2>
<ul>
  <li>Utilize uma cor escura para o código de barras e uma cor clara para o fundo.</li>
  <li>Evite materiais brilhantes ou transparentes, porque o reflexo da luz pode perturbar a câmara.</li>
  <li>Imprima sempre um exemplar e teste-o com vários telemóveis ou leitores antes de imprimir em quantidade.</li>
</ul>
<p>Se o seu código de barras continuar difícil de ler, consulte <a href="/artikel/barcode-tidak-bisa-dipindai">7 causas para um código de barras não ser lido</a>.</p>
`
};
