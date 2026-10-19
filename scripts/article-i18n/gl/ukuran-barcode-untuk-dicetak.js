// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Tamaño e resolución axeitados dun código de barras para imprimir",
  desc: "Un código de barras demasiado pequeno ou borroso é difícil de escanear. Coñeza o tamaño mínimo, a regra da distancia de escaneo e a resolución de imaxe segura para imprimir.",
  tags: ["Guía", "Impresión"],
  coverCaption: "A impresora de etiquetas imprime códigos de barras para paquetes e embalaxes.",
  inlineCaption: "O tamaño da etiqueta determina canto de grande se pode imprimir o código de barras.",
  faq: [
    ["Cal é o tamaño mínimo dun QR Code para imprimir?", "Para escanealo de preto, uns 2 × 2 cm é o límite seguro. Para distancias maiores, use unha proporción de arredor de 10 : 1 entre a distancia de escaneo e a anchura do QR Code."],
    ["Cal é o tamaño estándar dun código de barras EAN-13?", "O tamaño estándar do EAN-13 é duns 37,3 × 25,9 mm. Pódese reducir ata arredor do 80% ou ampliar ata o 200%."],
    ["Por que o código de barras sae borroso despois de imprimilo?", "Normalmente porque a imaxe era pequena e se ampliou, ou porque se gardou como JPG de baixa calidade. Descárgueo cun tamaño de módulo maior en formato PNG."]
  ],
  body: `
<p>Un código de barras que se ve ben na pantalla non sempre se pode ler unha vez impreso. Un tamaño demasiado pequeno, unha resolución baixa ou unha tinta que se esparexe poden facer que o lector non consiga lelo. A continuación atopará unha guía para que as súas impresións se sigan podendo ler.</p>

<h2>Coñeza o módulo</h2>
<p>O <strong>módulo</strong> é a unidade máis pequena dun código de barras, é dicir, un cadradiño nun QR Code ou a barra máis estreita nun código de barras lineal. O tamaño do módulo determina o doado que é ler o código de barras. En <a href="/">I Need Barcode</a>, o tamaño do módulo pódese axustar na sección Configuración: canto máis alto é o valor, máis grande e nítida é a imaxe descargada.</p>

<h2>Tamaño mínimo do QR Code</h2>
<ul>
  <li>Para escanealo de preto (por exemplo, en tarxetas de visita ou etiquetas de produto), uns <strong>2 × 2 cm</strong> é o límite seguro.</li>
  <li>Use a regra de proporción de arredor de <strong>10 : 1</strong>: a distancia de escaneo é aproximadamente dez veces a anchura do QR Code. Para un cartel que se escanea a 2 metros de distancia, faga un QR Code de polo menos uns 20 cm.</li>
  <li>Canto máis datos se garden, máis denso é o patrón, polo que se necesita un tamaño maior.</li>
</ul>

<h2>Tamaño do código de barras de produto</h2>
<p>O tamaño estándar do <a href="/?type=ean13">EAN-13</a> é duns 37,3 × 25,9 mm (100%). Pódese reducir ata arredor do 80% ou ampliar ata o 200%. Evite acurtar demasiado a altura das barras, porque o lector de caixa necesita espazo para ler desde varios ángulos.</p>

<h2>Resolución da imaxe</h2>
<ul>
  <li>Para imprimir, procure que cada módulo se debuxe con <strong>varios píxeles enteiros</strong>, e non con fraccións de píxel. Escolla un tamaño de módulo maior ao descargalo e redúzao na aplicación de deseño, e non ao revés.</li>
  <li>Evite ampliar unha imaxe pequena de código de barras, porque os bordos dos cadrados vólvense borrosos ou dentados.</li>
  <li>Gárdea en formato PNG para que as cores e os bordos non se deterioren como pasa co JPG.</li>
</ul>

<h2>Zona de silencio</h2>
<p>Todos os códigos de barras necesitan un espazo baleiro arredor, chamado <strong>zona de silencio</strong> (quiet zone). No QR Code, o ideal é que teña a anchura de catro módulos. Nos códigos de barras lineais, o espazo baleiro á esquerda e á dereita é moi importante. Non achegue demasiado textos, liñas decorativas ou o bordo da embalaxe.</p>

<h2>Cores e materiais</h2>
<ul>
  <li>Use unha cor escura para o código de barras e unha cor clara para o fondo.</li>
  <li>Evite os materiais brillantes ou transparentes, porque o reflexo da luz pode interferir na cámara.</li>
  <li>Imprima sempre unha mostra e próbea con varios móbiles ou lectores antes de imprimir moitas.</li>
</ul>
<p>Se o seu código de barras segue sendo difícil de escanear, consulte <a href="/artikel/barcode-tidak-bisa-dipindai">7 motivos polos que un código de barras non se le</a>.</p>
`
};
