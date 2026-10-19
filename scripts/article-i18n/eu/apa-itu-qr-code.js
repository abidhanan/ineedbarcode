// apa-itu-qr-code
module.exports = {
  title: "Zer da QR Code eta nola funtzionatzen du?",
  desc: "QR Codeak estekak, testua eta baita WiFi datuak ere gorde ditzake, eta irakurgarria izaten jarraitzen du zati bat hondatuta egon arren. Hona hemen nola funtzionatzen duen eta zer abantaila dituen.",
  tags: ["Oinarriak", "QR Code"],
  coverCaption: "QR Codea zuzenean eskanea daiteke telefonoaren kamerarekin.",
  inlineCaption: "QR Code bakoitza lauki txiki beltz eta zuriz osatuta dago.",
  faq: [
    ["Iraungi daiteke QR Code bat?", "QR Code estatikoa ez da inoiz iraungitzen, datuak zuzenean irudian txertatuta daudelako. QR Code dinamikoak funtzionatzeari utz diezaioke esteka ematen duen zerbitzua amaitzen bada edo harpidetza iraungitzen bada."],
    ["Zenbat datu gorde ditzake QR Code batek?", "QR Codearen bertsio handienak 7.089 digitu edo 2.953 byte inguru gorde ditzake. Hala ere, zenbat eta datu gutxiago, orduan eta errazagoa da QR Codea eskaneatzea."],
    ["Irakurgarria al da QR Codea zati bat hondatuta badago?", "Bai. Akatsen zuzenketari esker, QR Codea irakurgarria da % 7tik % 30era bitarteko zatia hondatuta egon arren, erabilitako zuzenketa-mailaren arabera: L, M, Q edo H."]
  ],
  body: `
<p>QR Code (Quick Response Code) lauki txiki beltz eta zuriz osatutako 2D barra-kode karratu bat da. Dozena bat digitu edo gehiago baino gordetzen ez dituen barra-kode linealak ez bezala, QR Codeak webgune baterako esteka, testu luzeak, telefono-zenbakiak, kontaktuak eta baita WiFi sareen datuak ere gorde ditzake.</p>
<p>QR Codea 1994an garatu zuen Denso Wave enpresa japoniarrak, lantegietan ibilgailuen ordezko piezen jarraipena egiteko. Gaur egun, QR Codea nonahi erabiltzen da, ordainketa digitaletatik hasi eta jatetxeetako menuetaraino, telefonoaren kamerarekin zuzenean eskanea daitekeelako.</p>

<h2>QR Code baten atalak</h2>
<ul>
  <li><strong>Izkinetako hiru lauki handiak</strong> (finder pattern): kamerari QR Codea aurkitzen eta haren norabidea jakiten laguntzen diote, eta, horri esker, irakurgarria da okertuta edo buruz behera eskaneatuta ere.</li>
  <li><strong>Lerrokatze-eredua</strong> (alignment pattern): okertuta dagoen edo angelu batetik ikusten den QR Codea irakurtzen laguntzen duen lauki txikia.</li>
  <li><strong>Datu-eremua</strong>: gordetzen duzun informazioa duten lauki txikiak.</li>
  <li><strong>Eremu lasaia</strong> (quiet zone): QR Codearen inguruko espazio hutsa, atzealdetik erraz bereizteko.</li>
</ul>

<h2>Zenbat datu gorde ditzake?</h2>
<p>QR Codeak 40 tamaina-bertsio ditu. Bertsio handienak 7.089 digitu edo 2.953 byte inguru gorde ditzake. Praktikan, zenbat eta datu gutxiago gorde, orduan eta handiagoak dira laukiak eta orduan eta errazagoa da QR Codea eskaneatzea. Horregatik, esteka laburra hobea da oso luzea baino.</p>

<h2>Irakurgarria hondatuta egon arren</h2>
<p>QR Codeak akatsen zuzenketa (error correction) erabiltzen du. Lau maila daude:</p>
<ul>
  <li><strong>L</strong>: datuak berreskura daitezke QR Codearen % 7 inguru hondatuta badago.</li>
  <li><strong>M</strong>: % 15 inguru. Aukera ohikoa eta orekatua da.</li>
  <li><strong>Q</strong>: % 25 inguru.</li>
  <li><strong>H</strong>: % 30 inguru, egokia logotipoa izango duten QR Codeetarako edo erraz zikintzen den leku batean inprimatuko direnetarako.</li>
</ul>
<p>Zenbat eta zuzenketa-maila handiagoa, orduan eta lauki gehiago behar dira, eta, beraz, QR Codearen eredua trinkoagoa ikusten da.</p>

<h2>Zer gorde daiteke QR Code batean?</h2>
<ul>
  <li>Webguneetarako, lineako dendetarako edo inprimakietarako estekak.</li>
  <li>WiFi datuak, gonbidatuak pasahitza idatzi gabe konekta daitezen. Ikusi <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> gida.</li>
  <li>Bisita-txartel digitalak (vCard), posta elektronikoa, SMSak eta WhatsApp txatak.</li>
  <li>Mapako kokapenak eta ekitaldien egutegiak.</li>
</ul>

<h2>QR Code estatikoak eta dinamikoak</h2>
<p>Datuetatik zuzenean sortzen den QR Codeari <strong>QR Code estatikoa</strong> deritzo: edukia irudian txertatuta dago eta ezin da aldatu, baina ez da inoiz iraungitzen ere. QR Code <strong>dinamikoak</strong> zerbitzu baten esteka laburra du, eta horrek zure helmugara birbideratzen du; helmuga alda daiteke, baina QR Codeak funtzionatzeari utziko dio zerbitzua amaitzen bada. Behar gehienetarako, QR Code estatikoa nahikoa da, eta seguruagoa epe luzera.</p>

<p>Probatu nahi duzu? Sortu <a href="/?type=qrcode">doako QR Code</a> bat orain, edo irakurri <a href="/artikel/cara-membuat-qr-code-gratis">nola sortu QR Code bat 3 urratsetan</a>.</p>
`
};
