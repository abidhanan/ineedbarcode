// apa-itu-qr-code
module.exports = {
  title: "O que é QR Code e como ele funciona?",
  desc: "O QR Code pode guardar links, textos e até dados de WiFi, e continua legível mesmo se parte dele estiver danificada. Veja como ele funciona e quais são as suas vantagens.",
  tags: ["Noções básicas", "QR Code"],
  coverCaption: "O QR Code pode ser escaneado diretamente com a câmera do celular.",
  inlineCaption: "Todo QR Code é formado por pequenos quadrados pretos e brancos.",
  faq: [
    ["O QR Code pode expirar?", "O QR Code estático nunca expira, porque os dados ficam gravados diretamente na imagem. O QR Code dinâmico pode parar de funcionar se o serviço que fornece o link for encerrado ou se a assinatura terminar."],
    ["Quantos dados um QR Code consegue guardar?", "A maior versão do QR Code consegue guardar até 7.089 números, ou cerca de 2.953 bytes. Porém, quanto menos dados, mais fácil é escanear o QR Code."],
    ["O QR Code continua legível se parte dele estiver danificada?", "Sim. Graças à correção de erros, o QR Code continua legível mesmo com cerca de 7% a 30% da sua área danificada, dependendo do nível de correção usado: L, M, Q ou H."]
  ],
  body: `
<p>O QR Code (Quick Response Code) é um código de barras 2D em formato quadrado, formado por pequenos quadrados pretos e brancos. Diferente do código de barras linear, que guarda apenas algumas dezenas de números, o QR Code pode guardar links de sites, textos longos, números de telefone, contatos e até dados de redes WiFi.</p>
<p>O QR Code foi desenvolvido em 1994 pela Denso Wave, uma empresa japonesa, para rastrear peças de veículos nas fábricas. Hoje o QR Code está em toda parte, de pagamentos digitais a cardápios de restaurantes, porque pode ser escaneado diretamente com a câmera do celular.</p>

<h2>As partes do QR Code</h2>
<ul>
  <li><strong>Três quadrados grandes nos cantos</strong> (finder pattern): ajudam a câmera a encontrar o QR Code e a identificar a sua orientação, para que ele seja lido mesmo inclinado ou de cabeça para baixo.</li>
  <li><strong>Padrão de alinhamento</strong> (alignment pattern): um quadrado pequeno que ajuda a ler QR Codes dobrados ou vistos de lado.</li>
  <li><strong>Área de dados</strong>: os pequenos quadrados que contêm as informações que você guardou.</li>
  <li><strong>Zona de silêncio</strong> (quiet zone): o espaço vazio ao redor do QR Code, que facilita separá-lo do fundo.</li>
</ul>

<h2>Quantos dados ele consegue guardar?</h2>
<p>O QR Code tem 40 versões de tamanho. A maior versão consegue guardar até 7.089 números ou cerca de 2.953 bytes de dados. Na prática, quanto menos dados forem guardados, maiores ficam os quadrados e mais fácil é escanear o QR Code. Por isso, um link curto é melhor do que um link muito longo.</p>

<h2>Legível mesmo danificado</h2>
<p>O QR Code usa correção de erros (error correction). Existem quatro níveis:</p>
<ul>
  <li><strong>L</strong>: os dados ainda podem ser recuperados se cerca de 7% do QR Code estiver danificado.</li>
  <li><strong>M</strong>: cerca de 15%. É a opção mais comum e equilibrada.</li>
  <li><strong>Q</strong>: cerca de 25%.</li>
  <li><strong>H</strong>: cerca de 30%, ideal para QR Codes que receberão um logotipo ou serão impressos em locais que se sujam com facilidade.</li>
</ul>
<p>Quanto maior o nível de correção, mais quadrados são necessários, e o padrão do QR Code fica mais denso.</p>

<h2>O que pode ser guardado em um QR Code?</h2>
<ul>
  <li>Links de sites, lojas virtuais ou formulários.</li>
  <li>Dados de WiFi, para que os visitantes se conectem sem digitar a senha. Veja o guia de <a href="/artikel/cara-membuat-qr-code-wifi">QR Code de WiFi</a>.</li>
  <li>Cartões de visita digitais (vCard), e-mails, SMS e conversas no WhatsApp.</li>
  <li>Localizações no mapa e agendas de eventos.</li>
</ul>

<h2>QR Code estático e dinâmico</h2>
<p>O QR Code criado diretamente a partir dos dados é chamado de <strong>QR Code estático</strong>: o conteúdo fica gravado na imagem e não pode ser alterado, mas também nunca expira. O QR Code <strong>dinâmico</strong> contém um link curto de um serviço, que depois redireciona para o seu destino; o destino pode ser trocado, mas o QR Code deixa de funcionar se o serviço for encerrado. Para a maioria das necessidades, o QR Code estático é suficiente e mais seguro a longo prazo.</p>

<p>Quer experimentar? Crie um <a href="/?type=qrcode">QR Code grátis</a> agora ou leia <a href="/artikel/cara-membuat-qr-code-gratis">como criar um QR Code em 3 passos</a>.</p>
`
};
