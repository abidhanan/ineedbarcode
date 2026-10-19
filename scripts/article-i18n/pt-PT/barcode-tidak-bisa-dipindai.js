// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 causas para um código de barras não ser lido e como resolvê-las",
  desc: "O código de barras ou QR Code não é lido? Conheça as sete causas mais frequentes, do contraste das cores ao tamanho, e saiba como corrigi-las.",
  tags: ["Dicas", "Códigos de barras"],
  coverCaption: "O contraste e o tamanho determinam se o QR Code é fácil de ler.",
  inlineCaption: "No armazém, um código de barras que não é lido atrasa o trabalho.",
  faq: [
    ["Porque é que o QR Code é lido num telemóvel, mas não noutro?", "As câmaras e as aplicações de leitura têm capacidades diferentes. Os QR Codes demasiado pequenos, com pouco contraste ou com as cores invertidas falham com mais frequência em determinados telemóveis. Teste com vários telemóveis antes de imprimir."],
    ["Os códigos de barras coloridos podem ser lidos?", "Podem, desde que a cor seja escura sobre um fundo claro. Evite o vermelho nas barras, porque muitos leitores de caixa utilizam luz vermelha."],
    ["Como posso verificar se o código de barras está correto?", "Leia a impressão com vários telemóveis ou leitores e confirme que os dados lidos são exatamente iguais aos dados que introduziu."]
  ],
  body: `
<p>Não há nada mais irritante do que imprimir centenas de folhas com um código de barras e depois descobrir que não pode ser lido. A boa notícia é que a causa costuma ser simples e fácil de evitar. Apresentamos de seguida as sete causas mais frequentes.</p>

<h2>1. Contraste de cores demasiado baixo</h2>
<p>O leitor deteta a diferença entre escuro e claro. Um código de barras cinzento-claro sobre branco, ou azul-escuro sobre preto, é difícil de distinguir. <strong>Solução:</strong> utilize uma cor escura sobre um fundo claro. Preto sobre branco é a opção mais segura.</p>

<h2>2. Cores invertidas ou cor vermelha</h2>
<p>Nem todos os leitores suportam um código de barras claro sobre fundo escuro. Além disso, muitos leitores de caixa utilizam luz vermelha, pelo que as barras vermelhas parecem iguais ao fundo branco. <strong>Solução:</strong> evite o vermelho nas barras ou nos módulos do código de barras e não inverta as cores.</p>

<h2>3. Tamanho demasiado pequeno</h2>
<p>A câmara precisa de píxeis suficientes para reconhecer cada módulo. <strong>Solução:</strong> aumente o código de barras. Para um QR Code lido de perto, utilize no mínimo cerca de 2 × 2 cm. Consulte o <a href="/artikel/ukuran-barcode-untuk-dicetak">guia de tamanhos para impressão</a>.</p>

<h2>4. Sem zona de silêncio</h2>
<p>Um código de barras encostado a imagens, texto ou à margem do papel é difícil de separar do que o rodeia. <strong>Solução:</strong> deixe um espaço vazio à volta do código de barras, sobretudo à esquerda e à direita dos códigos de barras lineares.</p>

<h2>5. Imagem desfocada ou distorcida</h2>
<p>Um código de barras ampliado a partir de uma imagem pequena, guardado como JPG de baixa qualidade ou esticado de forma desproporcionada perde a sua forma. <strong>Solução:</strong> transfira-o com um tamanho de módulo maior em formato PNG e redimensione sempre de forma proporcional.</p>

<h2>6. Dados errados ou inadequados ao tipo</h2>
<p>Cada tipo de código de barras tem as suas regras. O EAN-13, por exemplo, só aceita 12 ou 13 dígitos numéricos com o dígito de controlo correto. Uma ligação mal escrita também faz com que o QR Code seja lido, mas não abra nada. <strong>Solução:</strong> verifique os dados antes de imprimir. O gerador do <a href="/">I Need Barcode</a> mostra uma mensagem se os dados não cumprirem as regras do tipo de código de barras escolhido.</p>

<h2>7. Superfície e iluminação</h2>
<p>Materiais brilhantes, plástico transparente, dobras e superfícies curvas podem refletir a luz ou deformar o código de barras. <strong>Solução:</strong> imprima numa superfície plana e mate e teste nas condições de iluminação reais.</p>

<h2>Quanto aos QR Codes com design</h2>
<p>Um QR Code com forma, cores ou moldura continua a poder ser lido desde que os três quadrados de referência nos cantos estejam intactos e o contraste seja suficiente. Saiba mais em <a href="/artikel/desain-qr-code-kreatif">design criativo de QR Code que continua legível</a>.</p>
<p>O melhor hábito: <strong>teste sempre uma impressão</strong> com vários telemóveis e leitores antes de imprimir em grande quantidade.</p>
`
};
