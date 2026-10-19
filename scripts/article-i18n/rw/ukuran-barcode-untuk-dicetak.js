// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Ingano n'Ubwiza bw'Ishusho bya Barcode Bikwiriye Gucapwa",
  desc: "Barcode nto cyane cyangwa idasobanutse iragoye gusikana. Mumenye ingano ntoya ishoboka, itegeko ry'intera yo gusikana, n'ubwiza bw'ishusho (resolution) butekanye bwo gucapa.",
  tags: ["Ubuyobozi", "Gucapa"],
  coverCaption: "Printer y'ibirango icapa barcode z'amapaki n'ibipfunyika.",
  inlineCaption: "Ingano y'akarango igena uko barcode ishobora gucapwa ingana.",
  faq: [
    ["Ingano ntoya ishoboka ya QR Code yo gucapa ni iyihe?", "Kugira ngo isikanwe hafi, hafi 2 × 2 cm ni yo mbibi itekanye. Ku ntera ndende kurushaho, mukoreshe igereranya rya hafi 10 : 1 hagati y'intera yo gusikana n'ubugari bwa QR Code."],
    ["Ingano isanzwe ya barcode EAN-13 ni iyihe?", "Ingano isanzwe ya EAN-13 ni hafi 37,3 × 25,9 mm. Iyi ngano ishobora kugabanywa kugeza kuri hafi 80% cyangwa kongerwa kugeza kuri 200%."],
    ["Kuki barcode idasobanuka imaze gucapwa?", "Akenshi ni ukubera ko ishusho yari nto hanyuma ikongerwa ingano, cyangwa yabitswe nka JPG y'ubwiza buke. Muyimanure ifite ingano nini y'agasanduku mu buryo bwa PNG."]
  ],
  body: `
<p>Barcode igaragara neza kuri ecran ntibivuze ko izasomeka imaze gucapwa. Ingano nto cyane, ubwiza buke bw'ishusho, cyangwa wino isandaye bishobora gutuma sikaneri inanirwa kuyisoma. Dore ubuyobozi butuma ibyo mucapa bikomeza gusomeka.</p>

<h2>Mumenye agasanduku (module)</h2>
<p><strong>Agasanduku</strong> (module) ni igice gito kurusha ibindi cya barcode, ni ukuvuga agasanduku gato kamwe kuri QR Code cyangwa umurongo muto kurusha indi kuri barcode y'imirongo. Ingano y'agasanduku igena uko barcode yoroshye gusoma. Kuri <a href="/">I Need Barcode</a>, ingano y'agasanduku ishobora gutunganywa mu gice cy'Igenamiterere: uko agaciro kaba kanini, ni ko ishusho imanurwa iba nini kandi ikarishye.</p>

<h2>Ingano ntoya ishoboka ya QR Code</h2>
<ul>
  <li>Kugira ngo isikanwe hafi (urugero ku ikarita y'ubucuruzi cyangwa ku kirango cy'igicuruzwa), ingano ya hafi <strong>2 × 2 cm</strong> ni yo mbibi itekanye.</li>
  <li>Mukoreshe itegeko ry'igereranya rya hafi <strong>10 : 1</strong>: intera yo gusikana ni hafi incuro icumi z'ubugari bwa QR Code. Ku cyapa gisikanwa kiri ku ntera ya metero 2, mukore QR Code ya nibura hafi cm 20.</li>
  <li>Uko amakuru abitswe aba menshi, ni ko igishushanyo kiba kegeranye, bityo hakenerwa ingano nini kurushaho.</li>
</ul>

<h2>Ingano ya barcode y'igicuruzwa</h2>
<p>Ingano isanzwe ya <a href="/?type=ean13">EAN-13</a> ni hafi 37,3 × 25,9 mm (100%). Iyi ngano ishobora kugabanywa kugeza kuri hafi 80% cyangwa kongerwa kugeza kuri 200%. Mwirinde kugabanya cyane uburebure bw'imirongo, kuko sikaneri zo kuri kase zikenera umwanya wo gusoma ziturutse mu mpande zitandukanye.</p>

<h2>Ubwiza bw'ishusho (resolution)</h2>
<ul>
  <li>Ku byo gucapa, mugerageze ko buri gasanduku gashushanywa na <strong>pigiseli nyinshi zuzuye</strong>, aho kuba igice cya pigiseli. Muhitemo ingano nini y'agasanduku igihe mumanura, hanyuma muyigabanye muri porogaramu yo gushushanya, aho kubikora binyuranye.</li>
  <li>Mwirinde kongera ingano y'ishusho nto ya barcode, kuko inkengero z'udusanduku zizaba zidasobanutse cyangwa zifite amenyo.</li>
  <li>Muyibike mu buryo bwa PNG kugira ngo amabara n'inkengero bitangirika nk'uko bigenda kuri JPG.</li>
</ul>

<h2>Agace gatuje</h2>
<p>Buri barcode ikenera umwanya w'ubusa uyikikije, witwa <strong>agace gatuje</strong> (quiet zone). Kuri QR Code, mu buryo bwiza ugomba kungana n'udusanduku tune. Kuri barcode y'imirongo, umwanya w'ubusa ibumoso n'iburyo ni ingenzi cyane. Ntimwegereze cyane inyandiko, imirongo y'igishushanyo, cyangwa inkengero z'igipfunyika.</p>

<h2>Amabara n'ibikoresho</h2>
<ul>
  <li>Mukoreshe ibara ryijimye kuri barcode n'ibara ryerurutse ku nyuma.</li>
  <li>Mwirinde ibikoresho birabagirana cyangwa bibonerana, kuko urumuri rugaruka rushobora kubangamira kamera.</li>
  <li>Buri gihe mucape urugero rumwe kandi murugerageze mukoresheje telefoni cyangwa sikaneri nyinshi mbere yo gucapa byinshi.</li>
</ul>
<p>Niba barcode yanyu ikomeje kugorana gusikana, murebe <a href="/artikel/barcode-tidak-bisa-dipindai">impamvu 7 zituma barcode idasikanwa</a>.</p>
`
};
