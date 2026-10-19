// apa-itu-qr-code
module.exports = {
  title: "O que é um QR Code e como funciona?",
  desc: "O QR Code pode guardar ligações, texto e até dados de WiFi e continua legível mesmo que parte dele esteja danificada. Saiba como funciona e quais são as suas vantagens.",
  tags: ["Noções básicas", "QR Code"],
  coverCaption: "O QR Code pode ser lido diretamente com a câmara do telemóvel.",
  inlineCaption: "Cada QR Code é composto por pequenos quadrados pretos e brancos.",
  faq: [
    ["Um QR Code pode expirar?", "O QR Code estático nunca expira, porque os dados estão gravados diretamente na imagem. O QR Code dinâmico pode deixar de funcionar se o serviço que fornece a ligação terminar ou se a subscrição chegar ao fim."],
    ["Quantos dados consegue guardar um QR Code?", "A versão maior do QR Code consegue guardar até 7.089 números, ou cerca de 2.953 bytes. No entanto, quanto menos dados, mais fácil é ler o QR Code."],
    ["O QR Code continua legível se parte dele estiver danificada?", "Sim. Graças à correção de erros, o QR Code continua legível mesmo com cerca de 7% a 30% da sua área danificada, consoante o nível de correção utilizado: L, M, Q ou H."]
  ],
  body: `
<p>O QR Code (Quick Response Code) é um código de barras 2D de forma quadrada, composto por pequenos quadrados pretos e brancos. Ao contrário do código de barras linear, que guarda apenas algumas dezenas de números, o QR Code pode guardar ligações para sites, textos longos, números de telefone, contactos e até dados de redes WiFi.</p>
<p>O QR Code foi desenvolvido em 1994 pela Denso Wave, uma empresa japonesa, para seguir peças de automóveis nas fábricas. Hoje, o QR Code é utilizado em todo o lado, dos pagamentos digitais às ementas de restaurantes, porque pode ser lido diretamente com a câmara do telemóvel.</p>

<h2>As partes do QR Code</h2>
<ul>
  <li><strong>Três quadrados grandes nos cantos</strong> (finder pattern): ajudam a câmara a encontrar o QR Code e a reconhecer a sua orientação, para que continue legível mesmo inclinado ou de pernas para o ar.</li>
  <li><strong>Padrão de alinhamento</strong> (alignment pattern): um pequeno quadrado que ajuda a ler QR Codes dobrados ou vistos de lado.</li>
  <li><strong>Área de dados</strong>: os pequenos quadrados que contêm a informação que guardou.</li>
  <li><strong>Zona de silêncio</strong> (quiet zone): o espaço vazio à volta do QR Code, que facilita a sua distinção do fundo.</li>
</ul>

<h2>Quantos dados consegue guardar?</h2>
<p>O QR Code tem 40 versões de tamanho. A versão maior consegue guardar até 7.089 números ou cerca de 2.953 bytes de dados. Na prática, quanto menos dados forem guardados, maiores ficam os quadrados e mais fácil é ler o QR Code. Por isso, uma ligação curta é preferível a uma ligação muito longa.</p>

<h2>Legível mesmo danificado</h2>
<p>O QR Code utiliza correção de erros (error correction). Há quatro níveis:</p>
<ul>
  <li><strong>L</strong>: os dados podem ser recuperados se cerca de 7% do QR Code estiver danificado.</li>
  <li><strong>M</strong>: cerca de 15%. É a opção habitual e equilibrada.</li>
  <li><strong>Q</strong>: cerca de 25%.</li>
  <li><strong>H</strong>: cerca de 30%, adequado para QR Codes que vão ter um logótipo ou ser impressos em locais que se sujam facilmente.</li>
</ul>
<p>Quanto mais alto o nível de correção, mais quadrados são necessários, pelo que o padrão do QR Code fica mais denso.</p>

<h2>O que se pode guardar num QR Code?</h2>
<ul>
  <li>Ligações para sites, lojas online ou formulários.</li>
  <li>Dados de WiFi, para que os visitantes se liguem sem escrever a palavra-passe. Consulte o guia de <a href="/artikel/cara-membuat-qr-code-wifi">QR Code de WiFi</a>.</li>
  <li>Cartões de visita digitais (vCard), e-mails, SMS e conversas de WhatsApp.</li>
  <li>Localizações no mapa e calendários de eventos.</li>
</ul>

<h2>QR Code estático e dinâmico</h2>
<p>O QR Code criado diretamente a partir dos dados chama-se <strong>QR Code estático</strong>: o conteúdo está gravado na imagem e não pode ser alterado, mas também nunca expira. O QR Code <strong>dinâmico</strong> contém uma ligação curta de um serviço, que depois redireciona para o seu destino; o destino pode ser alterado, mas o QR Code deixa de funcionar se esse serviço terminar. Para a maioria das necessidades, o QR Code estático é suficiente e mais seguro a longo prazo.</p>

<p>Quer experimentar? Crie um <a href="/?type=qrcode">QR Code gratuito</a> agora ou leia <a href="/artikel/cara-membuat-qr-code-gratis">como criar um QR Code em 3 passos</a>.</p>
`
};
