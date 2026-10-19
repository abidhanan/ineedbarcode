// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Habe sy Resolution Mety ho an'ny Barcode Hatonta",
  desc: "Sarotra scannena ny barcode kely loatra na manjavozavo. Ianaro ny habe kely indrindra, ny fitsipika momba ny elanelana scan, ary ny resolution-n'ny sary azo antoka hanontana.",
  tags: ["Torolalana", "Fanontana"],
  coverCaption: "Manonta barcode ho an'ny fonosana sy entana alefa ny printy marika.",
  inlineCaption: "Ny haben'ny marika no mamaritra ny halehiben'ny barcode azo atonta.",
  faq: [
    ["Ohatrinona ny habe kely indrindra amin'ny QR Code hatonta?", "Raha hoscannena akaiky, ny eo amin'ny 2 × 2 cm eo ho eo no fetra azo antoka. Ho an'ny elanelana lavitra kokoa, ampiasao ny fifandanjana eo amin'ny 10 : 1 eo ho eo eo amin'ny elanelana scan sy ny sakan'ny QR Code."],
    ["Ohatrinona ny haben'ny barcode EAN-13 mahazatra?", "Ny haben'ny EAN-13 mahazatra dia eo amin'ny 37,3 × 25,9 mm eo ho eo. Azo ahelezina hatramin'ny 80% eo ho eo na ahalehibeazina hatramin'ny 200% io habe io."],
    ["Nahoana no manjavozavo ny barcode rehefa avy natonta?", "Matetika satria kely ny sary dia nohalehibeazina, na notehirizina ho JPG ambany kalitao. Alaivo amin'ny haben'ny modiola lehibe kokoa amin'ny endrika PNG."]
  ],
  body: `
<p>Ny barcode tsara jerena eo amin'ny efijery dia tsy voatery ho voavaky rehefa avy natonta. Ny habe kely loatra, ny resolution ambany, na ny ranomainty miparitaka dia mety hahatonga ny scanner tsy hahavaky azy. Ity ny torolalana mba hijanonan'ny vokatra atontanao ho azo vakiana.</p>

<h2>Fantaro ny modiola</h2>
<p>Ny <strong>modiola</strong> dia ny singa kely indrindra amin'ny barcode, izany hoe efajoro kely iray amin'ny QR Code na ny tsipika tery indrindra amin'ny barcode tsipika. Ny haben'ny modiola no mamaritra ny hamoran'ny famakiana ny barcode. Ao amin'ny <a href="/">I Need Barcode</a>, azo ahitsy ao amin'ny fizarana Fandrindrana ny haben'ny modiola: arakaraka ny halehiben'ny sandany no mahalehibe sy mahamaranitra ny sary alaina.</p>

<h2>Habe kely indrindra amin'ny QR Code</h2>
<ul>
  <li>Raha hoscannena akaiky (ohatra karatra famantarana na marika vokatra), ny habe eo amin'ny <strong>2 × 2 cm</strong> eo ho eo no fetra azo antoka.</li>
  <li>Ampiasao ny fitsipiky ny fifandanjana eo amin'ny <strong>10 : 1</strong> eo ho eo: ny elanelana scan dia eo amin'ny im-polo eo ho eo ny sakan'ny QR Code. Ho an'ny afisy hoscannena avy amin'ny elanelana 2 metatra, ataovy farafahakeliny eo amin'ny 20 cm eo ho eo ny QR Code.</li>
  <li>Arakaraka ny habetsahan'ny angona voatahiry no mahatery ny laminy, ka mila habe lehibe kokoa.</li>
</ul>

<h2>Haben'ny barcode vokatra</h2>
<p>Ny haben'ny <a href="/?type=ean13">EAN-13</a> mahazatra dia eo amin'ny 37,3 × 25,9 mm eo ho eo (100%). Azo ahelezina hatramin'ny 80% eo ho eo na ahalehibeazina hatramin'ny 200% io habe io. Aza fohezina loatra ny haavon'ny tsipika, satria mila toerana ny scanner amin'ny toeram-pandoavam-bola mba hamakiana avy amin'ny lafiny samihafa.</p>

<h2>Resolution-n'ny sary</h2>
<ul>
  <li>Ho an'ny fanontana, ezaho mba ho voasary amin'ny <strong>piksely feno maromaro</strong> ny modiola tsirairay, fa tsy ampahan-piksely. Safidio ny haben'ny modiola lehibe kokoa rehefa maka azy, dia ahelezo ao amin'ny rindranasa famolavolana, fa tsy ny mifamadika amin'izany.</li>
  <li>Aza halehibeazina ny sarin'ny barcode kely, satria ho manjavozavo na ho mitsofotsofoka ny sisin'ny efajorony.</li>
  <li>Tehirizo amin'ny endrika PNG mba tsy ho simba ny loko sy ny sisiny toy ny amin'ny JPG.</li>
</ul>

<h2>Faritra mangina</h2>
<p>Mila toerana banga manodidina azy ny barcode tsirairay, antsoina hoe <strong>faritra mangina</strong> (quiet zone). Ho an'ny QR Code, ny tsara indrindra dia mitovy sakany amin'ny modiola efatra izy. Ho an'ny barcode tsipika, tena zava-dehibe ny toerana banga eo ankavia sy ankavanana. Aza atakaiky loatra ny soratra, ny tsipika haingo, na ny sisin'ny fonosana.</p>

<h2>Loko sy fitaovana</h2>
<ul>
  <li>Ampiasao loko maizina ho an'ny barcode sy loko mazava ho an'ny ambadika.</li>
  <li>Aza mampiasa fitaovana mamirapiratra na mangarahara, satria mety hanakorontana ny fakan-tsary ny hazavana miverina.</li>
  <li>Manontà ohatra iray foana ary andramo amin'ny finday na scanner maromaro alohan'ny hanontana be dia be.</li>
</ul>
<p>Raha mbola sarotra scannena ihany ny barcode-nao, jereo ny <a href="/artikel/barcode-tidak-bisa-dipindai">antony 7 tsy ahafahana manao scan barcode</a>.</p>
`
};
