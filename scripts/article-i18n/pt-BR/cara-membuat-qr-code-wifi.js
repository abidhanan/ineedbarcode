// cara-membuat-qr-code-wifi
module.exports = {
  title: "Como criar um QR Code de WiFi para que os visitantes não precisem digitar a senha",
  desc: "Os visitantes só precisam escanear o QR Code para se conectar ao WiFi. Ideal para cafés, escritórios, pousadas e residências. Veja como criar e onde colocar.",
  tags: ["Guia", "QR Code"],
  coverCaption: "Os dados de WiFi do roteador podem ser guardados em um único QR Code.",
  inlineCaption: "Os clientes do café se conectam na hora, sem digitar a senha.",
  faq: [
    ["Todos os celulares conseguem ler um QR Code de WiFi?", "A câmera nativa do iPhone com iOS 11 ou superior e a maioria dos aparelhos com Android 10 ou superior conseguem lê-lo diretamente. Celulares mais antigos podem precisar de um aplicativo leitor de QR."],
    ["O QR Code de WiFi é seguro?", "Qualquer pessoa que escanear esse QR Code pode se conectar ao seu WiFi. Por isso, use uma rede para visitantes e não exponha o QR Code da sua rede privada em locais públicos."],
    ["O que fazer se a senha do WiFi for trocada?", "Crie e imprima novamente o QR Code de WiFi, porque o QR Code antigo ainda contém a senha antiga."]
  ],
  body: `
<p>Soletrar uma senha de WiFi longa para os visitantes costuma ser trabalhoso, principalmente quando há letras maiúsculas, números e símbolos. Com um <strong>QR Code de WiFi</strong>, basta o visitante apontar a câmera do celular para o QR Code e ele se conecta na hora.</p>

<h2>Como funciona o QR Code de WiFi</h2>
<p>O QR Code de WiFi guarda o nome da rede (SSID), o tipo de segurança e a senha em um formato especial reconhecido pelos celulares, por exemplo <code>WIFI:T:WPA;S:NomeDaRede;P:Senha;;</code>. A câmera nativa do iPhone (iOS 11 ou superior) e a maioria dos aparelhos Android (Android 10 ou superior) conseguem lê-lo diretamente, sem aplicativos extras.</p>

<h2>Passo a passo para criar</h2>
<ol>
  <li>Abra o <a href="/?type=qrcode">gerador de QR Code</a> e selecione a aba <strong>WiFi</strong> na seção Dados.</li>
  <li>Digite o <strong>nome da rede</strong> exatamente como aparece na lista de redes WiFi, respeitando maiúsculas e minúsculas.</li>
  <li>Digite a <strong>senha</strong> e escolha o tipo de segurança. A maioria dos roteadores domésticos e corporativos usa WPA/WPA2/WPA3.</li>
  <li>Marque <strong>Rede oculta</strong> se o nome do seu WiFi não aparecer na lista.</li>
  <li>Adicione uma moldura com um texto como "SCAN WIFI" para que os visitantes entendam a função e baixe o PNG.</li>
</ol>

<h2>Onde colocar?</h2>
<ul>
  <li>Em um cartãozinho sobre as mesas do café ou do restaurante.</li>
  <li>Na parede da sala de espera, na recepção ou na sala de reuniões do escritório.</li>
  <li>Nos quartos de pousadas e hotéis, perto da porta ou da TV.</li>
  <li>Embaixo do roteador de casa, para que a família conecte novos aparelhos com facilidade.</li>
</ul>

<h2>Dicas de segurança</h2>
<ul>
  <li>Use uma <strong>rede para visitantes</strong> (guest network) se o seu roteador oferecer essa opção, para que os visitantes não entrem na mesma rede dos computadores do escritório.</li>
  <li>Se a senha do WiFi for trocada, crie e imprima o QR Code novamente, porque o QR Code antigo terá a senha antiga.</li>
  <li>Não exponha um QR Code de WiFi da sua rede privada em locais públicos onde qualquer pessoa possa fotografá-lo.</li>
</ul>

<h2>Se o QR Code não conectar</h2>
<p>Confira novamente a grafia do nome da rede e da senha, pois uma única letra errada impede que o celular se conecte. Verifique também se o tipo de segurança escolhido corresponde à configuração do roteador. Para outros problemas de leitura, leia <a href="/artikel/barcode-tidak-bisa-dipindai">motivos para o código de barras não ser lido</a>.</p>
`
};
