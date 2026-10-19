// qr-code-menu-restoran
module.exports = {
  title: "QR Code jatetxeetako menuetarako: Gida osoa",
  desc: "QR Code bidezko menu digitalak bezeroei erraztasunak ematen dizkie eta inprimatze-kostuak aurrezten ditu. Hona hemen nola sortu, menua prestatu eta mahaietan jarri.",
  tags: ["Negozioa", "QR Code"],
  coverCaption: "Mahaiko QR Codeak bezeroak zuzenean eramaten ditu menu digitalera.",
  inlineCaption: "Jarri QR Codea aulkitik erraz iristeko moduko leku batean.",
  faq: [
    ["Zer da hobea menu digital baterako: PDFa ala web-orria?", "Web-orria erosoagoa izan ohi da telefonoan irakurtzeko, eta azkarrago irekitzen da. PDFa erabil daiteke fitxategia txikia bada eta testua pantailan nahikoa handia bada."],
    ["Zer tamaina izan behar du mahaiko menuaren QR Codeak?", "3 eta 5 cm artean nahikoa da aulkitik eskaneatzeko. Erabili isuriei eusten dien eta oso distiratsua ez den materiala."],
    ["Berriro inprimatu behar al da QR Codea menua aldatzen denean?", "Ez, estekak berdin jarraitzen badu. Nahikoa da QR Codeak seinalatzen duen orriaren edo menu-fitxategiaren edukia eguneratzea."]
  ],
  body: `
<p>QR Code bidezko menu digitalak ohikoak dira gaur egun kafetegietan eta jatetxeetan. Bezeroek mahaiko QR Codea eskaneatu besterik ez dute egin behar janarien zerrenda, prezioak eta argazkiak ikusteko. Negozioaren jabearentzat, inprimatze-kostuak aurrezten ditu eta prezioak edo menua aldatzea errazten du.</p>

<h2>QR Code menuaren abantailak</h2>
<ul>
  <li><strong>Erraz eguneratzen da</strong>: aldatu prezioak edo gehitu platerak menu-liburua berriro inprimatu gabe.</li>
  <li><strong>Kostuak aurrezten ditu</strong>: nahikoa da mahai bakoitzerako QR Code txiki bat inprimatzea.</li>
  <li><strong>Informazio gehiago</strong>: erakutsi argazkiak, deskribapenak eta pikantea edo begetarianoa bezalako etiketak.</li>
  <li><strong>Lineako eskaerak onartzen ditu</strong>: bideratu bezeroak eskaera-inprimaki batera edo WhatsAppera.</li>
</ul>

<h2>1. urratsa: Prestatu lineako menua</h2>
<p>QR Codeak esteka bat baino ez du; beraz, Interneten ireki daitekeen menu bat behar duzu. Aukeren artean daude zure webguneko orri bat, publikoki partekatutako lineako biltegiratze bateko PDF fitxategi bat edo eskaera-plataforma bateko katalogo-orri bat. Ziurtatu menua erosoa dela telefonoaren pantailan irakurtzeko: testu nahiko handia, argazki ez oso astunak eta prezio argiak.</p>

<h2>2. urratsa: Sortu QR Codea</h2>
<ol>
  <li>Kopiatu zure menuaren esteka.</li>
  <li>Ireki <a href="/?type=qrcode">QR Code sorgailua</a>, aukeratu <strong>URL</strong> fitxa eta itsatsi esteka.</li>
  <li>Gehitu "MENUA" edo "ESKANEATU MENUA IKUSTEKO" testua duen markoa Diseinua atalean.</li>
  <li>Egokitu koloreak jatetxearen identitatera, baina erabili beti kolore iluna atzealde argiaren gainean.</li>
  <li>Deskargatu PNGa inprimatzeko nahiko handia den modulu-tamainarekin.</li>
</ol>
<p>Erabili aldatuko ez den esteka. Menua beste helbide batera eramaten bada, ezin izango dira eguneratu jada inprimatutako QR Codeak. Azalpena <a href="/artikel/apa-itu-qr-code">zer da QR Code</a> artikuluan dago.</p>

<h2>3. urratsa: Inprimatu eta jarri</h2>
<ul>
  <li>Inprimatu gutxienez 3–5 cm inguruko tamainan, aulkitik erraz eskaneatzeko.</li>
  <li>Erabili isuriei eusten dien materiala, hala nola binilozko eranskailuak edo distira handiegirik gabeko txartel plastifikatuak.</li>
  <li>Jarri erraz iristeko moduko leku batean, adibidez mahaiaren erdiko akrilikozko euskarri batean.</li>
  <li>Gehitu mahai-zenbakia QR Codearen ondoan, bezeroek txat bidez eskatzen badute.</li>
</ul>

<h2>Ez ahaztu telefonorik gabeko bezeroak</h2>
<p>Izan inprimatutako menu bat edo bi telefonorik ez daramaten, bateria agortuta duten edo menu fisikoa irakurtzea nahiago duten bezeroentzat.</p>
<p><a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> bat ere sor dezakezu gonbidatuentzat, eta menuaren QR Codearen ondoan jarri.</p>
`
};
