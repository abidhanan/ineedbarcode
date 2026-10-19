// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 motivos polos que un código de barras non se le e como solucionalo",
  desc: "O código de barras ou o QR Code non se deixa escanear? Consulte as sete causas máis frecuentes, desde o contraste das cores ata o tamaño, e como corrixilas.",
  tags: ["Consellos", "Códigos de barras"],
  coverCaption: "O contraste e o tamaño determinan se un QR Code é doado de escanear.",
  inlineCaption: "No almacén, un código de barras que non se le atrasa o traballo.",
  faq: [
    ["Por que o QR Code se le cun móbil pero non con outro?", "As cámaras e as aplicacións de escaneo teñen capacidades diferentes. Os QR Codes demasiado pequenos, con pouco contraste ou coas cores invertidas fallan con máis frecuencia nalgúns móbiles. Próbeos con varios móbiles antes de imprimir."],
    ["Pódense ler os códigos de barras de cores?", "Si, sempre que a cor sexa escura sobre un fondo claro. Evite o vermello nas barras, porque moitos lectores de caixa usan luz vermella."],
    ["Como se pode comprobar se un código de barras é correcto?", "Escanee a impresión con varios móbiles ou lectores e asegúrese de que os datos lidos son exactamente iguais ca os que introduciu."]
  ],
  body: `
<p>Non hai nada máis frustrante ca imprimir centos de follas cun código de barras e descubrir despois que non se pode escanear. A boa nova é que a causa adoita ser sinxela e doada de evitar. A continuación atopará as sete causas máis frecuentes.</p>

<h2>1. Contraste de cores demasiado baixo</h2>
<p>O lector detecta a diferenza entre escuro e claro. Un código de barras gris claro sobre branco, ou azul mariño sobre negro, é difícil de distinguir. <strong>Solución:</strong> use unha cor escura sobre un fondo claro. Negro sobre branco é a opción máis segura.</p>

<h2>2. Cores invertidas ou cor vermella</h2>
<p>Non todos os lectores admiten un código de barras claro sobre fondo escuro. Ademais, moitos lectores de caixa usan luz vermella, de xeito que as barras vermellas parecen iguais ca o fondo branco. <strong>Solución:</strong> evite o vermello nas barras ou nos módulos do código de barras e non inverta as cores.</p>

<h2>3. Tamaño demasiado pequeno</h2>
<p>A cámara necesita píxeles abondo para recoñecer cada módulo. <strong>Solución:</strong> aumente o código de barras. Para un QR Code que se escanea de preto, use como mínimo uns 2 × 2 cm. Consulte a <a href="/artikel/ukuran-barcode-untuk-dicetak">guía de tamaños para imprimir</a>.</p>

<h2>4. Non hai zona de silencio</h2>
<p>Un código de barras pegado a imaxes, texto ou ao bordo do papel é difícil de separar do que o rodea. <strong>Solución:</strong> deixe un espazo baleiro arredor do código de barras, sobre todo á esquerda e á dereita dos códigos de barras lineais.</p>

<h2>5. Imaxe borrosa ou distorsionada</h2>
<p>Un código de barras ampliado a partir dunha imaxe pequena, gardado como JPG de baixa calidade ou estirado de forma desproporcionada perde a súa forma. <strong>Solución:</strong> descárgueo cun tamaño de módulo maior en formato PNG e cambie sempre o tamaño de forma proporcional.</p>

<h2>6. Datos incorrectos ou non axeitados ao tipo</h2>
<p>Cada tipo de código de barras ten as súas regras. O EAN-13, por exemplo, só acepta 12 ou 13 díxitos numéricos co díxito de control correcto. Unha ligazón mal escrita tamén fai que o QR Code se lea pero non abra nada. <strong>Solución:</strong> revise os datos antes de imprimir. O xerador de <a href="/">I Need Barcode</a> mostra unha mensaxe se os datos non cumpren as regras do tipo de código de barras escollido.</p>

<h2>7. Superficie e iluminación</h2>
<p>Os materiais brillantes, o plástico transparente, as dobras e as superficies curvas poden reflectir a luz ou deformar o código de barras. <strong>Solución:</strong> imprima sobre unha superficie plana e mate e probe nas condicións de luz reais.</p>

<h2>Sobre os QR Codes con deseño</h2>
<p>Un QR Code con forma, cores ou marco pódese seguir escaneando sempre que os tres cadrados de referencia das esquinas estean intactos e o contraste sexa suficiente. Máis información en <a href="/artikel/desain-qr-code-kreatif">deseño creativo de QR Code que segue sendo lexible</a>.</p>
<p>O mellor hábito: <strong>probe sempre unha impresión</strong> con varios móbiles e lectores antes de imprimir en grandes cantidades.</p>
`
};
