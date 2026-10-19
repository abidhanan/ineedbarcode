// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Tamanho e resolução ideais do código de barras para impressão",
  desc: "Um código de barras muito pequeno ou borrado é difícil de ler. Conheça o tamanho mínimo, a regra da distância de leitura e a resolução de imagem segura para impressão.",
  tags: ["Guia", "Impressão"],
  coverCaption: "A impressora de etiquetas imprime códigos de barras para pacotes e embalagens.",
  inlineCaption: "O tamanho da etiqueta define o quanto o código de barras pode ser grande na impressão.",
  faq: [
    ["Qual é o tamanho mínimo de um QR Code para impressão?", "Para leitura de perto, cerca de 2 × 2 cm é o limite seguro. Para distâncias maiores, use uma proporção de cerca de 10 : 1 entre a distância de leitura e a largura do QR Code."],
    ["Qual é o tamanho padrão do código de barras EAN-13?", "O tamanho padrão do EAN-13 é de cerca de 37,3 × 25,9 mm. Ele pode ser reduzido até cerca de 80% ou ampliado até 200%."],
    ["Por que o código de barras fica borrado depois de impresso?", "Normalmente porque a imagem era pequena e foi ampliada, ou foi salva como JPG de baixa qualidade. Baixe com um tamanho de módulo maior no formato PNG."]
  ],
  body: `
<p>Um código de barras que fica bonito na tela nem sempre é legível depois de impresso. Um tamanho muito pequeno, uma resolução baixa ou tinta borrada podem fazer o leitor falhar. Veja a seguir um guia para que as suas impressões continuem legíveis.</p>

<h2>Conheça o módulo</h2>
<p>O <strong>módulo</strong> é a menor unidade do código de barras, ou seja, um quadradinho no QR Code ou a barra mais estreita no código de barras linear. O tamanho do módulo determina a facilidade de leitura do código de barras. No <a href="/">I Need Barcode</a>, o tamanho do módulo pode ser ajustado na seção Configurações: quanto maior o valor, maior e mais nítida será a imagem baixada.</p>

<h2>Tamanho mínimo do QR Code</h2>
<ul>
  <li>Para leitura de perto (por exemplo, em cartões de visita ou etiquetas de produtos), cerca de <strong>2 × 2 cm</strong> é o limite seguro.</li>
  <li>Use a regra de proporção de cerca de <strong>10 : 1</strong>: a distância de leitura é aproximadamente dez vezes a largura do QR Code. Para um pôster lido a 2 metros de distância, faça um QR Code de pelo menos cerca de 20 cm.</li>
  <li>Quanto mais dados forem guardados, mais denso fica o padrão, e maior precisa ser o tamanho.</li>
</ul>

<h2>Tamanho do código de barras de produtos</h2>
<p>O tamanho padrão do <a href="/?type=ean13">EAN-13</a> é de cerca de 37,3 × 25,9 mm (100%). Ele pode ser reduzido até cerca de 80% ou ampliado até 200%. Evite cortar demais a altura das barras, porque o leitor do caixa precisa de espaço para ler de vários ângulos.</p>

<h2>Resolução da imagem</h2>
<ul>
  <li>Para impressão, procure fazer com que cada módulo seja desenhado com <strong>vários pixels inteiros</strong>, e não com frações de pixel. Escolha um tamanho de módulo maior ao baixar e reduza no programa de design, e não o contrário.</li>
  <li>Evite ampliar uma imagem pequena de código de barras, porque as bordas dos quadrados ficam borradas ou serrilhadas.</li>
  <li>Salve no formato PNG para que as cores e as bordas não se deteriorem como acontece no JPG.</li>
</ul>

<h2>Zona de silêncio</h2>
<p>Todo código de barras precisa de um espaço vazio ao redor, chamado de <strong>zona de silêncio</strong> (quiet zone). No QR Code, o ideal é que ela tenha a largura de quatro módulos. No código de barras linear, o espaço vazio à esquerda e à direita é muito importante. Não coloque textos, linhas decorativas ou a borda da embalagem perto demais.</p>

<h2>Cores e materiais</h2>
<ul>
  <li>Use uma cor escura para o código de barras e uma cor clara para o fundo.</li>
  <li>Evite materiais brilhantes ou transparentes, porque o reflexo da luz pode atrapalhar a câmera.</li>
  <li>Sempre imprima uma amostra e teste com vários celulares ou leitores antes de imprimir em quantidade.</li>
</ul>
<p>Se o seu código de barras continuar difícil de ler, confira <a href="/artikel/barcode-tidak-bisa-dipindai">7 motivos para o código de barras não ser lido</a>.</p>
`
};
