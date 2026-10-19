// cara-membuat-qr-code-wifi
module.exports = {
  title: "Como criar um QR Code de WiFi para que os visitantes não tenham de escrever a palavra-passe",
  desc: "Os visitantes só têm de ler o QR Code para se ligarem ao WiFi. Ideal para cafés, escritórios, alojamentos e casas. Saiba como o criar e onde o colocar.",
  tags: ["Guia", "QR Code"],
  coverCaption: "Os dados de WiFi do router podem ser guardados num único QR Code.",
  inlineCaption: "Os clientes do café podem ligar-se de imediato, sem escrever a palavra-passe.",
  faq: [
    ["Todos os telemóveis conseguem ler um QR Code de WiFi?", "A câmara nativa do iPhone com iOS 11 ou superior e a maioria dos dispositivos com Android 10 ou superior conseguem lê-lo diretamente. Os telemóveis mais antigos podem precisar de uma aplicação de leitura de QR."],
    ["O QR Code de WiFi é seguro?", "Qualquer pessoa que leia esse QR Code pode ligar-se ao seu WiFi. Por isso, utilize uma rede para convidados e não afixe o QR Code da sua rede privada em locais públicos."],
    ["O que devo fazer se a palavra-passe do WiFi for alterada?", "Crie e imprima novamente o QR Code de WiFi, porque o QR Code antigo continua a conter a palavra-passe antiga."]
  ],
  body: `
<p>Soletrar uma palavra-passe de WiFi longa aos visitantes é muitas vezes complicado, sobretudo quando tem maiúsculas, números e símbolos. Com um <strong>QR Code de WiFi</strong>, basta que o visitante aponte a câmara do telemóvel para o QR Code e fica logo ligado.</p>

<h2>Como funciona o QR Code de WiFi</h2>
<p>O QR Code de WiFi guarda o nome da rede (SSID), o tipo de segurança e a palavra-passe num formato especial reconhecido pelos telemóveis, por exemplo <code>WIFI:T:WPA;S:NomeDaRede;P:PalavraPasse;;</code>. A câmara nativa do iPhone (iOS 11 ou superior) e a maioria dos dispositivos Android (Android 10 ou superior) conseguem lê-lo diretamente, sem aplicações adicionais.</p>

<h2>Passos para o criar</h2>
<ol>
  <li>Abra o <a href="/?type=qrcode">gerador de QR Code</a> e selecione o separador <strong>WiFi</strong> na secção Dados.</li>
  <li>Escreva o <strong>nome da rede</strong> exatamente como aparece na lista de redes WiFi, respeitando maiúsculas e minúsculas.</li>
  <li>Escreva a <strong>palavra-passe</strong> e escolha o tipo de segurança. A maioria dos routers domésticos e de escritório utiliza WPA/WPA2/WPA3.</li>
  <li>Assinale <strong>Rede oculta</strong> se o nome do seu WiFi não aparecer na lista.</li>
  <li>Adicione uma moldura com um texto como "SCAN WIFI" para que os visitantes percebam a sua função e transfira o PNG.</li>
</ol>

<h2>Onde o colocar?</h2>
<ul>
  <li>Num pequeno cartão nas mesas do café ou do restaurante.</li>
  <li>Na parede da sala de espera, na receção ou na sala de reuniões do escritório.</li>
  <li>Nos quartos do alojamento, afixado perto da porta ou da televisão.</li>
  <li>Na parte de baixo do router de casa, para que a família ligue facilmente novos dispositivos.</li>
</ul>

<h2>Dicas de segurança</h2>
<ul>
  <li>Utilize uma <strong>rede para convidados</strong> (guest network) se o seu router o permitir, para que os visitantes não entrem na mesma rede dos computadores do escritório.</li>
  <li>Se a palavra-passe do WiFi for alterada, crie e imprima novamente o QR Code, porque o QR Code antigo terá a palavra-passe antiga.</li>
  <li>Não afixe um QR Code de WiFi da sua rede privada em locais públicos onde qualquer pessoa o possa fotografar.</li>
</ul>

<h2>Se o QR Code não ligar</h2>
<p>Verifique novamente a ortografia do nome da rede e da palavra-passe, porque basta uma letra errada para que o telemóvel não se consiga ligar. Confirme também que o tipo de segurança escolhido corresponde às definições do router. Para outros problemas de leitura, leia <a href="/artikel/barcode-tidak-bisa-dipindai">causas para um código de barras não ser lido</a>.</p>
`
};
