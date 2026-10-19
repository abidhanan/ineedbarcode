// apa-itu-barcode
module.exports = {
  title: "Barcode ni Iki? Igisobanuro, Uko Ikora, n'Ubwoko Bwayo",
  desc: "Barcode iboneka hafi ku bicuruzwa byose mugura. Menya uko ikora, amateka yayo mu ncamake, n'ubwoko bwa barcode bukoreshwa cyane.",
  tags: ["Ibanze", "Barcode"],
  coverCaption: "Barcode iri ku gipfunyika ibika kode yihariye y'igicuruzwa.",
  inlineCaption: "Umukozi wo kuri kase akoresha sikaneri gusoma barcode mu kanya nk'ako guhumbya.",
  faq: [
    ["Barcode na QR Code bitandukaniye he?", "QR Code ni bumwe mu bwoko bwa barcode, ni ukuvuga barcode ya 2D. Barcode y'imirongo (1D) ibika inyuguti nke gusa kandi isomwa kuva ibumoso ujya iburyo, mu gihe QR Code ibika amakuru mu byerekezo bibiri ku buryo ishobora kubika umurongo (link), inyandiko, cyangwa amakuru ya WiFi."],
    ["Ese barcode ibika igiciro cy'igicuruzwa?", "Akenshi oya. Barcode y'igicuruzwa irimo kode gusa. Igiciro n'izina by'igicuruzwa bibikwa muri sisitemu ya kase, hanyuma bigashakishwa hakurikijwe kode yasikanywe."],
    ["Ese gukora barcode birishyurwa?", "Oya. Ishusho ya barcode ishobora gukorwa ku buntu, urugero kuri I Need Barcode. Igikenera kwandikwa no kwishyurwa ni nimero yemewe gusa ya barcode z'ibicuruzwa bicuruzwa mu maduka nka EAN-13, binyuze kuri GS1."]
  ],
  body: `
<p>Barcode ni uburyo bwo kwandika amakuru mu ishusho y'igishushanyo gishobora gusomwa n'imashini. Icyo gishushanyo akenshi kiba imirongo y'umukara n'umweru ifite ubugari butandukanye, cyangwa udusanduku duto dutondekanye mu kare kamwe. Iyo gisikanywe, icyo gishushanyo gisubizwa mu mibare cyangwa mu nyandiko, urugero kode y'igicuruzwa, nimero yo kohereza ipaki, cyangwa aderesi y'urubuga.</p>
<p>Kubera ko isomwa n'imashini, barcode yihuta cyane kandi igira amakosa make ugereranyije no kwandika kode n'intoki. Ni yo mpamvu barcode ikoreshwa kuri kase, mu bubiko, mu bitaro, ku matike, ndetse no ku bipfunyika by'ibiribwa.</p>

<h2>Amateka ya barcode mu ncamake</h2>
<p>Igitekerezo cya barcode cyahawe uburenganzira bw'ihimbano (patent) mu 1952 na Norman Joseph Woodland na Bernard Silver muri Leta Zunze Ubumwe za Amerika. Barcode yatangiye gukoreshwa koko mu iduka mu 1974, ubwo agapaki k'ishikarete kasikanywe muri supermarket imwe yo muri Ohio hakoreshejwe kode ya UPC. Kuva icyo gihe, barcode yakwiriye isi yose kandi ubu icungwa ku rwego mpuzamahanga n'umuryango ushinzwe ibipimo witwa GS1.</p>

<h2>Barcode ikora ite?</h2>
<p>Sikaneri imurikira barcode hanyuma igasoma urumuri rugaruka. Ibice byijimye bigarura urumuri ruke, ibice byera bikagarura rwinshi. Iryo tandukaniro rihindurwamo urukurikirane rw'imibare 0 na 1, hanyuma rikagereranywa n'amategeko y'ubwo bwoko bwa barcode. Barcode nyinshi kandi zigira <strong>umubare w'igenzura</strong> (check digit), ni ukuvuga umubare wa nyuma ubarwa hakurikijwe imibare iwubanziriza. Iyo igisubizo cy'ibarwa kidahuye, sikaneri imenya ko hari ikitagenda neza ikanga icyo gisubizo.</p>
<p>Barcode ubwayo akenshi ibika kode gusa. Amakuru nk'izina ry'igicuruzwa cyangwa igiciro abikwa muri sisitemu ya kase cyangwa mu bubiko bw'amakuru (database), hanyuma agashakishwa hakurikijwe iyo kode.</p>

<h2>Ubwoko bwa barcode bukoreshwa kenshi</h2>
<p>Muri rusange barcode zigabanyijemo amatsinda abiri manini:</p>
<ul>
  <li><strong>Barcode ya 1D (y'umurongo)</strong>: ni imirongo ihagaze isomwa kuva ibumoso ujya iburyo. Ingero ni <a href="/?type=ean13">EAN-13</a> na <a href="/?type=upca">UPC-A</a> ku bicuruzwa byo mu maduka, ndetse na <a href="/?type=code128">Code 128</a> na <a href="/?type=code39">Code 39</a> mu bwikorezi no mu bubiko.</li>
  <li><strong>Barcode ya 2D</strong>: ni igishushanyo cy'udusanduku kibika amakuru mu byerekezo bibiri, ku buryo kibika byinshi cyane. Ingero ni <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, na <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Uretse ibyo, hari barcode zihariye z'iposita no kohereza, iz'ubuvuzi, n'ibipimo bya GS1 by'urunigi rw'itangwa ry'ibicuruzwa. Ibisobanuro birambuye ku itandukaniro ryazo mwabisoma mu nyandiko <a href="/artikel/perbedaan-barcode-1d-dan-2d">Itandukaniro rya Barcode ya 1D n'iya 2D</a>.</p>

<h2>Barcode ikoreshwa mu biki?</h2>
<ul>
  <li><strong>Gucuruza</strong>: yihutisha kase kandi ikandika ububiko mu buryo bwikora.</li>
  <li><strong>Ububiko no kohereza</strong>: ikurikirana ibicuruzwa n'amapaki kuva ahantu hamwe ujya ahandi.</li>
  <li><strong>Amatike n'ibirori</strong>: igenzura ukuri kw'itike mu isikana rimwe.</li>
  <li><strong>Kwamamaza</strong>: QR Code iri ku dutabo cyangwa ku gipfunyika ijyana abantu mu buryo butaziguye ku rubuga rwanyu, ku rutonde rw'ibiribwa (menu), cyangwa kuri WhatsApp yanyu.</li>
</ul>

<h2>Kwikorera barcode</h2>
<p>Ntimukeneye porogaramu yishyurwa kugira ngo mukore barcode. Kuri <a href="/">I Need Barcode</a>, muhitemo ubwoko bwa barcode, mwuzuze amakuru, hanyuma muyimanure nk'ishusho ya PNG. Hari ubwoko burenga 100 mwahitamo, kandi bwose ni ubuntu nta kwiyandikisha.</p>
`
};
