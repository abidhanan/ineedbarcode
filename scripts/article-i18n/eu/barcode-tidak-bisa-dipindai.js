// barcode-tidak-bisa-dipindai
module.exports = {
  title: "Barra-kode bat eskaneatu ezin izateko 7 arrazoi eta nola konpondu",
  desc: "Ezin da barra-kodea edo QR Codea eskaneatu? Begiratu maizen gertatzen diren zazpi arrazoiak, kolore-kontrastetik tamainaraino, eta nola konpondu.",
  tags: ["Aholkuak", "Barra-kodea"],
  coverCaption: "Kontrasteak eta tamainak erabakitzen dute QR Codea erraz eskaneatzen den ala ez.",
  inlineCaption: "Biltegian, eskaneatu ezin diren barra-kodeek lana moteltzen dute.",
  faq: [
    ["Zergatik eskanea daiteke QR Code bat telefono batekin, baina ez beste batekin?", "Kamerek eta eskaneatzeko aplikazioek gaitasun desberdinak dituzte. Txikiegiak diren, kontraste txikia duten edo koloreak alderantzikatuta dituzten QR Codeek huts egiten dute maizago zenbait telefonotan. Probatu hainbat telefonorekin inprimatu aurretik."],
    ["Eskanea al daitezke koloretako barra-kodeak?", "Bai, kolorea iluna bada eta atzealde argi baten gainean badago. Saihestu kolore gorria barra-kodearen marretarako, kutxetako eskaner askok argi gorria erabiltzen dutelako."],
    ["Nola egiaztatu barra-kodea zuzena den?", "Eskaneatu inprimatutakoa hainbat telefono edo eskanerrekin, eta ziurtatu irakurritako datuak sartu dituzunen berdin-berdinak direla."]
  ],
  body: `
<p>Ez dago ehunka aletan inprimatu ondoren eskaneatu ezin dela ikusten den barra-kode bat baino gauza gogaikarriagorik. Albiste ona da arrazoia sinplea izan ohi dela eta erraz saihets daitekeela. Hona hemen maizen gertatzen diren zazpi arrazoiak.</p>

<h2>1. Kolore-kontraste txikiegia</h2>
<p>Eskanerrak ilunaren eta argiaren arteko aldea irakurtzen du. Zuriaren gaineko barra-kode gris argia edo beltzaren gaineko urdin iluna zaila da bereizten. <strong>Konponbidea:</strong> erabili kolore iluna atzealde argi baten gainean. Zuriaren gaineko beltza da aukerarik seguruena.</p>

<h2>2. Kolore alderantzikatuak edo kolore gorria</h2>
<p>Atzealde ilun baten gaineko barra-kode argia ez dute eskaner guztiek onartzen. Gainera, kutxetako eskaner askok argi gorria erabiltzen dute, eta, beraz, marra gorriak atzealde zuriaren berdinak ikusten dira. <strong>Konponbidea:</strong> saihestu kolore gorria barra-kodearen marretarako edo moduluetarako, eta ez alderantzikatu koloreak.</p>

<h2>3. Tamaina txikiegia</h2>
<p>Kamerak pixel nahikoa behar ditu modulu bakoitza ezagutzeko. <strong>Konponbidea:</strong> handitu barra-kodea. Hurbiletik eskaneatzen diren QR Codeetarako, erabili gutxienez 2 × 2 cm inguru. Ikusi <a href="/artikel/ukuran-barcode-untuk-dicetak">inprimatzeko tamainaren gida</a>.</p>

<h2>4. Eremu lasairik ez</h2>
<p>Irudiei, testuari edo paperaren ertzari itsatsita dagoen barra-kodea zaila da ingurunetik bereizten. <strong>Konponbidea:</strong> utzi espazio hutsa barra-kodearen inguruan, batez ere barra-kode linealen ezkerrean eta eskuinean.</p>

<h2>5. Irudi lausoa edo desitxuratua</h2>
<p>Irudi txiki batetik handitutako, kalitate txikiko JPG gisa gordetako edo proportzioz kanpo luzatutako barra-kodeak bere forma galtzen du. <strong>Konponbidea:</strong> deskargatu modulu-tamaina handiagoarekin PNG formatuan, eta aldatu beti tamaina proportzionalki.</p>

<h2>6. Datu okerrak edo motarekin bat ez datozenak</h2>
<p>Barra-kode mota bakoitzak bere arauak ditu. EAN-13k, adibidez, 12 edo 13 digitu baino ez ditu onartzen, kontrol-digitu zuzenarekin. Gaizki idatzitako esteka batek ere QR Codea irakurgarria izatea eragiten du, baina ez du ezer irekitzen. <strong>Konponbidea:</strong> egiaztatu datuak inprimatu aurretik. <a href="/">I Need Barcode</a>-ren sorgailuak mezu bat erakutsiko du datuak aukeratutako barra-kode motaren arauekin bat ez badatoz.</p>

<h2>7. Gainazala eta argiztapena</h2>
<p>Material distiratsuek, plastiko gardenak, tolesturek eta gainazal kurbatuek argia isla dezakete edo barra-kodearen forma alda dezakete. <strong>Konponbidea:</strong> inprimatu gainazal lau eta ez-distiratsu batean, eta probatu benetako argi-baldintzetan.</p>

<h2>Diseinua duten QR Codeei buruz</h2>
<p>Forma, koloreak edo markoa dituen QR Codea eskanea daiteke oraindik, baldin eta izkinetako hiru lauki markatzaileak osorik badaude eta kontrastea nahikoa bada. Irakurri gehiago <a href="/artikel/desain-qr-code-kreatif">irakurgarria izaten jarraitzen duen QR Code diseinu sortzailea</a> artikuluan.</p>
<p>Ohiturarik onena: <strong>probatu beti inprimatutako ale bat</strong> hainbat telefono eta eskanerrekin, kopuru handitan inprimatu aurretik.</p>
`
};
