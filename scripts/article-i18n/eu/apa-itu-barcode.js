// apa-itu-barcode
module.exports = {
  title: "Zer da barra-kodea? Esanahia, funtzionamendua eta motak",
  desc: "Erosten dituzun ia produktu guztiek dute barra-kodea. Ezagutu nola funtzionatzen duen, haren historia laburra eta gehien erabiltzen diren barra-kode motak.",
  tags: ["Oinarriak", "Barra-kodea"],
  coverCaption: "Ontziko barra-kodeak produktuaren kode bakarra gordetzen du.",
  inlineCaption: "Kutxazainak eskanerra erabiltzen du barra-kodea begi-keinu batean irakurtzeko.",
  faq: [
    ["Zer desberdintasun dago barra-kodearen eta QR Codearen artean?", "QR Code barra-kode mota bat da, hain zuzen ere 2D barra-kode bat. Barra-kode linealak (1D) karaktere gutxi batzuk baino ez ditu gordetzen eta ezkerretik eskuinera irakurtzen da; QR Codeak, berriz, bi norabidetan gordetzen ditu datuak, eta, beraz, esteka bat, testu bat edo WiFi datuak sar daitezke."],
    ["Produktuaren prezioa gordetzen al du barra-kodeak?", "Normalean, ez. Produktuaren barra-kodeak kode bat baino ez du. Prezioa eta produktuaren izena kutxako sisteman gordetzen dira, eta eskaneatutako kodearen arabera bilatzen dira."],
    ["Ordaindu egin behar al da barra-kode bat sortzeko?", "Ez. Barra-kodearen irudia doan sor daiteke, adibidez I Need Barcode-n. Ordainduta erregistratu behar den gauza bakarra txikizkako produktuen barra-kodeetarako zenbaki ofiziala da, EAN-13 adibidez, GS1 bidez."]
  ],
  body: `
<p>Barra-kodea datuak makina batek irakur dezakeen eredu moduan idazteko modu bat da. Eredu hori zabalera desberdineko marra beltz eta zuriz osatuta egon ohi da, edo karratu batean antolatutako lauki txikiz. Eskaneatzen denean, eredua berriro zenbaki edo testu bihurtzen da, adibidez produktu-kode bat, bidalketa-zenbaki bat edo webgune baten helbidea.</p>
<p>Makina batek irakurtzen duenez, barra-kodea askoz azkarragoa da eta akats gutxiago eragiten ditu kodea eskuz idaztea baino. Horregatik erabiltzen dira barra-kodeak kutxetan, biltegietan, ospitaleetan, sarreretan eta elikagaien ontzietan.</p>

<h2>Barra-kodearen historia laburra</h2>
<p>Norman Joseph Woodlandek eta Bernard Silverrek patentatu zuten barra-kodearen ideia 1952an, Ameriketako Estatu Batuetan. 1974ra arte ez zen dendetan benetan erabiltzen hasi, Ohioko supermerkatu batean txikle-pakete bat UPC kode batekin eskaneatu zen arte. Harrezkero, barra-kodeak mundu osora zabaldu dira, eta gaur egun GS1 izeneko arau-erakundeak kudeatzen ditu mundu mailan.</p>

<h2>Nola funtzionatzen du barra-kodeak?</h2>
<p>Eskanerrak barra-kodea argiztatzen du eta islatutako argia irakurtzen du. Zati ilunek argi gutxi islatzen dute, eta zati argiek asko. Desberdintasun hori 0 eta 1eko segida bihurtzen da, eta, ondoren, barra-kode mota horren arauekin alderatzen da. Barra-kode askok <strong>kontrol-digitu</strong> bat ere badute (check digit), hau da, aurreko digituetatik kalkulatzen den azken zenbakia. Kalkuluaren emaitza bat ez badator, eskanerrak badaki zerbait gaizki dagoela eta emaitza baztertzen du.</p>
<p>Barra-kodeak berak kode bat baino ez du gordetzen normalean. Produktuaren izena edo prezioa bezalako informazioa kutxako sisteman edo datu-base batean gordetzen da, eta kode horren arabera bilatzen da.</p>

<h2>Gehien erabiltzen diren barra-kode motak</h2>
<p>Oro har, barra-kodeak bi talde handitan banatzen dira:</p>
<ul>
  <li><strong>1D barra-kodeak (linealak)</strong>: ezkerretik eskuinera irakurtzen diren marra bertikalak. Adibidez, <a href="/?type=ean13">EAN-13</a> eta <a href="/?type=upca">UPC-A</a> txikizkako produktuetarako, eta <a href="/?type=code128">Code 128</a> eta <a href="/?type=code39">Code 39</a> logistikarako eta biltegietarako.</li>
  <li><strong>2D barra-kodeak</strong>: datuak bi norabidetan gordetzen dituzten lauki-ereduak, eta, beraz, askoz gehiago sartzen da. Adibidez, <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> eta <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Horrez gain, posta eta bidalketetarako, osasunerako barra-kode bereziak daude, baita hornikuntza-katerako GS1 arauak ere. Desberdintasunei buruzko azalpen zehatzagoa <a href="/artikel/perbedaan-barcode-1d-dan-2d">1D eta 2D barra-kodeen arteko desberdintasuna</a> artikuluan irakur dezakezu.</p>

<h2>Zertarako erabiltzen dira barra-kodeak?</h2>
<ul>
  <li><strong>Txikizkako salmenta</strong>: kutxa azkartzen du eta stocka automatikoki erregistratzen du.</li>
  <li><strong>Biltegia eta bidalketak</strong>: salgaien eta paketeen jarraipena egiten du leku batetik bestera.</li>
  <li><strong>Sarrerak eta ekitaldiak</strong>: sarrera benetakoa den egiaztatzen du eskaneatze bakar batekin.</li>
  <li><strong>Marketina</strong>: liburuxka edo ontzi bateko QR Codeak jendea zuzenean eramaten du zure webgunera, menura edo WhatsAppera.</li>
</ul>

<h2>Zeuk sortu barra-kodea</h2>
<p>Ez duzu ordainpeko aplikaziorik behar barra-kode bat sortzeko. <a href="/">I Need Barcode</a>-n, aukeratu barra-kode mota, bete datuak eta deskargatu PNG irudi gisa. 100 mota baino gehiago dituzu aukeran, eta guztiak doakoak dira, izena eman beharrik gabe.</p>
`
};
