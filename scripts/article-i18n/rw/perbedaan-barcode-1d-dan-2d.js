// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Itandukaniro rya Barcode ya 1D n'iya 2D: Ni Iyihe Mukeneye?",
  desc: "Barcode y'imirongo na QR Code byombi ni barcode, ariko akamaro kabyo karatandukanye. Mugereranye ubushobozi bwo kubika, uburyo bwo gusikana, n'ingero z'aho bikoreshwa.",
  tags: ["Ibanze", "Barcode"],
  coverCaption: "Sikaneri ifatwa mu ntoki yo mu bubiko isoma barcode za 1D n'iza 2D.",
  inlineCaption: "Ibirango byo kohereza ibintu akenshi bikoresha barcode y'imirongo.",
  faq: [
    ["Ese sikaneri zo kuri kase zishobora gusoma QR Code?", "Si zose. Sikaneri za laser za 1D zisoma barcode y'imirongo gusa. Kuri QR Code hakenerwa sikaneri ya 2D ikoresha kamera cyangwa kamera ya telefoni."],
    ["Ni iyihe barcode nto kurusha izindi?", "Data Matrix ni imwe muri barcode za 2D zishobora gucapwa ari nto cyane, ku buryo ikunze gukoreshwa ku bice by'ibikoresho by'ikoranabuhanga, ku bikoresho by'ubuvuzi, no ku birango by'imiti."],
    ["Ese birashoboka gukoresha QR Code mu mwanya wa EAN-13 ku bicuruzwa byo mu maduka?", "Kugira ngo kigurishwe mu maduka, igicuruzwa gikomeza gukenera EAN-13 cyangwa UPC yanditswe. QR Code ishobora kongerwa ku gipfunyika nk'inyongera, urugero ku makuru y'igicuruzwa cyangwa ku kwamamaza."]
  ],
  body: `
<p>Iyo mukora barcode, ikibazo cya mbere gikunze kuza ni iki: dukoreshe barcode y'imirongo cyangwa QR Code? Byombi byitwa barcode, ariko uburyo bibika amakuru buratandukanye, bityo n'akamaro kabyo karatandukanye.</p>

<h2>Barcode ya 1D (y'umurongo)</h2>
<p>Barcode ya 1D ni barcode igizwe n'imirongo ihagaze. Amakuru abikwa mu cyerekezo kimwe, ni ukuvuga kuva ibumoso ujya iburyo. Ingero zizwi cyane ni <a href="/?type=ean13">EAN-13</a> iri ku bipfunyika by'ibicuruzwa na <a href="/?type=code128">Code 128</a> iri ku birango byo kohereza ibintu.</p>
<ul>
  <li>Ubushobozi buto bwo kubika, akenshi inyuguti icumi n'indi mike kugeza ku mirongo mike.</li>
  <li>Ishobora gusomwa na sikaneri za laser zo kuri kase zihendutse kandi zihuta cyane.</li>
  <li>Ibereye kode z'ibicuruzwa, nimero z'uruhererekane, na nimero zo kohereza amapaki.</li>
</ul>

<h2>Barcode ya 2D</h2>
<p>Barcode ya 2D ibika amakuru mu byerekezo bibiri, ku ruhande no hasi, ku buryo ibika byinshi cyane. Ingero ni <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, na <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Ubushobozi bunini bwo kubika, kuva ku nyuguti mirongo mike kugeza ku bihumbi.</li>
  <li>Ishobora gusikanwa na kamera ya telefoni iturutse mu byerekezo bitandukanye.</li>
  <li>Ifite ikosora ry'amakosa, bityo ikomeza gusomeka nubwo igice cyayo cyangiritse.</li>
  <li>Ishobora gukorwa ari nto cyane, urugero Data Matrix iri ku bice by'ibikoresho by'ikoranabuhanga.</li>
</ul>

<h2>Igereranya mu ncamake</h2>
<table>
  <thead><tr><th></th><th>Barcode ya 1D</th><th>Barcode ya 2D</th></tr></thead>
  <tbody>
    <tr><td>Imiterere</td><td>Imirongo ihagaze</td><td>Udusanduku/utudomo muri kare</td></tr>
    <tr><td>Ubushobozi bwo kubika</td><td>Buto</td><td>Bunini</td></tr>
    <tr><td>Igikoresho cyo gusikana</td><td>Sikaneri ya laser cyangwa kamera</td><td>Kamera cyangwa sikaneri ya 2D</td></tr>
    <tr><td>Kwihanganira kwangirika</td><td>Ni guke</td><td>Ifite ikosora ry'amakosa</td></tr>
    <tr><td>Ingero</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Ni ryari mukoresha imwe cyangwa indi?</h2>
<ul>
  <li><strong>Ibicuruzwa bigurishwa mu maduka cyangwa mu maduka mato</strong>: mukoreshe EAN-13 yemewe itangwa na GS1. Reba <a href="/artikel/cara-mendapatkan-barcode-ean-13">uko wabona barcode EAN-13</a>.</li>
  <li><strong>Ibirango by'ububiko, by'utubati, cyangwa byo kohereza</strong>: Code 128 ni yo ikunze guhitwamo kuko ibika byinshi ahantu hato kandi ishyigikira inyuguti n'imibare.</li>
  <li><strong>Umurongo (link), urutonde rw'ibiribwa, WiFi, cyangwa aderesi ku bakiriya</strong>: QR Code, kuko ishobora gusikanwa mu buryo butaziguye na kamera ya telefoni.</li>
  <li><strong>Ibirango bito cyane</strong>: Data Matrix.</li>
  <li><strong>Amakarita y'indangamuntu, amatike y'indege, cyangwa inyandiko</strong>: PDF417 cyangwa Aztec.</li>
</ul>
<p>Ubwoko bwose buvuzwe haruguru mushobora kubukora ku buntu kuri <a href="/">I Need Barcode</a>. Niba mugishidikanya, mutangire na QR Code ku bikenewe n'abakiriya na Code 128 ku bikenewe imbere mu kigo.</p>
`
};
