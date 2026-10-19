// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 motivos para o código de barras não ser lido e como resolver",
  desc: "O código de barras ou QR Code não é lido? Confira os sete motivos mais comuns, do contraste de cores ao tamanho, e saiba como corrigi-los.",
  tags: ["Dicas", "Códigos de barras"],
  coverCaption: "O contraste e o tamanho determinam se o QR Code é fácil de escanear.",
  inlineCaption: "No armazém, um código de barras que não é lido atrasa o trabalho.",
  faq: [
    ["Por que o QR Code é lido em um celular, mas não em outro?", "As câmeras e os aplicativos de leitura têm capacidades diferentes. QR Codes muito pequenos, com pouco contraste ou com cores invertidas falham com mais frequência em alguns celulares. Teste com vários celulares antes de imprimir."],
    ["Códigos de barras coloridos podem ser lidos?", "Podem, desde que a cor seja escura sobre um fundo claro. Evite a cor vermelha nas barras, porque muitos leitores de caixa usam luz vermelha."],
    ["Como verificar se o código de barras está correto?", "Escaneie a impressão com vários celulares ou leitores e confirme se os dados lidos são exatamente iguais aos dados que você inseriu."]
  ],
  body: `
<p>Nada é mais frustrante do que imprimir centenas de folhas com um código de barras e depois descobrir que ele não pode ser lido. A boa notícia é que a causa costuma ser simples e fácil de evitar. Veja a seguir os sete motivos mais comuns.</p>

<h2>1. Contraste de cores muito baixo</h2>
<p>O leitor identifica a diferença entre o escuro e o claro. Um código de barras cinza-claro sobre branco, ou azul-marinho sobre preto, é difícil de distinguir. <strong>Solução:</strong> use uma cor escura sobre um fundo claro. Preto sobre branco é a opção mais segura.</p>

<h2>2. Cores invertidas ou cor vermelha</h2>
<p>Nem todos os leitores aceitam um código de barras claro sobre fundo escuro. Além disso, muitos leitores de caixa usam luz vermelha, o que faz as barras vermelhas parecerem iguais ao fundo branco. <strong>Solução:</strong> evite a cor vermelha nas barras ou nos módulos do código de barras e não inverta as cores.</p>

<h2>3. Tamanho muito pequeno</h2>
<p>A câmera precisa de pixels suficientes para reconhecer cada módulo. <strong>Solução:</strong> aumente o código de barras. Para um QR Code lido de perto, use no mínimo cerca de 2 × 2 cm. Veja o <a href="/artikel/ukuran-barcode-untuk-dicetak">guia de tamanhos para impressão</a>.</p>

<h2>4. Falta de zona de silêncio</h2>
<p>Um código de barras colado a imagens, textos ou à borda do papel é difícil de separar do que está ao redor. <strong>Solução:</strong> deixe um espaço vazio ao redor do código de barras, principalmente à esquerda e à direita dos códigos de barras lineares.</p>

<h2>5. Imagem borrada ou distorcida</h2>
<p>Um código de barras ampliado a partir de uma imagem pequena, salvo como JPG de baixa qualidade ou esticado de forma desproporcional perde a sua forma. <strong>Solução:</strong> baixe com um tamanho de módulo maior no formato PNG e sempre redimensione de forma proporcional.</p>

<h2>6. Dados errados ou incompatíveis com o tipo</h2>
<p>Cada tipo de código de barras tem as suas regras. O EAN-13, por exemplo, aceita apenas 12 ou 13 dígitos numéricos com o dígito verificador correto. Um link digitado errado também faz com que o QR Code seja lido, mas não abra nada. <strong>Solução:</strong> confira os dados antes de imprimir. O gerador do <a href="/">I Need Barcode</a> exibe uma mensagem se os dados não seguirem as regras do tipo de código de barras escolhido.</p>

<h2>7. Superfície e iluminação</h2>
<p>Materiais brilhantes, plástico transparente, dobras e superfícies curvas podem refletir a luz ou deformar o código de barras. <strong>Solução:</strong> imprima em uma superfície plana e fosca e teste nas condições reais de iluminação.</p>

<h2>Sobre QR Codes com design</h2>
<p>Um QR Code com formato, cores ou moldura continua legível desde que os três quadrados de referência nos cantos estejam intactos e o contraste seja suficiente. Saiba mais em <a href="/artikel/desain-qr-code-kreatif">design criativo de QR Code que continua legível</a>.</p>
<p>O melhor hábito: <strong>sempre teste uma impressão</strong> com vários celulares e leitores antes de imprimir em grande quantidade.</p>
`
};
