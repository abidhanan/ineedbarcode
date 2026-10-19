// apa-itu-barcode
module.exports = {
  title: "O le a le Barcode? O lona Uiga, le Auala e Galue ai, ma ona Ituaiga",
  desc: "O lo'o i ai le barcode i luga o le tele o oloa tou te fa'atauina. Ia iloa le auala e galue ai, sina tala fa'asolopito pu'upu'u, ma ituaiga barcode e sili ona fa'aaogaina.",
  tags: ["Fa'avae", "Barcode"],
  coverCaption: "O le barcode i luga o le afifi e teuina ai se numera fa'apitoa o le oloa.",
  inlineCaption: "E fa'aaoga e le tagata tali tupe se masini sikeni e faitau ai le barcode i se emo o le mata.",
  faq: [
    ["O le a le ese'esega o le barcode ma le QR Code?", "O le QR Code o se tasi o ituaiga barcode, o se barcode 2D. O le barcode laina (1D) e na'o ni nai mata'itusi e teuina ma e faitau mai le agavale i le taumatau, ae o le QR Code e teuina fa'amatalaga i itu e lua, o lea e mafai ai ona teuina se so'otaga, se tusitusiga, po'o fa'amatalaga WiFi."],
    ["E teuina ea e le barcode le tau o le oloa?", "E masani lava e leai. E na'o se numera o lo'o i totonu o le barcode o se oloa. O le tau ma le igoa o le oloa e teuina i le faiga a le mea e totogi ai, ona su'e ai lea e fa'atatau i le numera na sikeni."],
    ["E tatau ea ona totogi le faia o se barcode?", "Leai. E mafai ona faia fua le ata o le barcode, mo se fa'ata'ita'iga i le I Need Barcode. Pau lava le mea e tatau ona resitala ma totogi o le numera aloa'ia mo barcode o oloa e fa'atau atu i faleoloa e pei o le EAN-13, e ala i le GS1."]
  ],
  body: `
<p>O le barcode o se auala e tusi ai fa'amatalaga i se mamanu e mafai ona faitau e se masini. O lea mamanu e masani lava o ni laina uliuli ma papa'e e ese'ese lona lautele, po'o ni sikuea laiti ua fa'atulaga i totonu o se sikuea. A sikeni, e toe fa'aliliu le mamanu i numera po'o tusitusiga, mo se fa'ata'ita'iga o le numera o se oloa, le numera o se afifi o lo'o lafo, po'o le tuatusi o se upega tafa'ilagi.</p>
<p>Ona o se masini e faitauina, e sili atu ona vave le barcode ma e itiiti mea sese pe a fa'atusatusa i le taina lima o se numera. O le mafua'aga lena e fa'aaoga ai le barcode i mea e totogi ai, fale teu oloa, falema'i, pepa ulufale, e o'o lava i afifi o mea'ai.</p>

<h2>O se tala fa'asolopito pu'upu'u o le barcode</h2>
<p>O le manatu o le barcode na maua ai se pateni i le 1952 e Norman Joseph Woodland ma Bernard Silver i Amerika. Na amata ona fa'aaoga moni le barcode i faleoloa i le 1974, ina ua sikeni se pusa lole mama i se supamaketi i Ohio i se numera UPC. Talu mai lena taimi, ua sosolo le barcode i le lalolagi atoa ma ua pulea nei i le tulaga fa'avaomalo e se fa'alapotopotoga o tulaga fa'atonutonu e ta'ua o le GS1.</p>

<h2>E fa'apefea ona galue le barcode?</h2>
<p>E fa'amalamalamaina e le masini sikeni le barcode ona faitau lea o le malamalama e toe fo'i mai. O vaega pogisa e itiiti le malamalama e toe fa'afo'i, ae o vaega malamalama e tele. O lea ese'esega e liua i se fa'asologa o numera 0 ma le 1, ona fa'atusatusa lea i tulafono o lea ituaiga barcode. E tele fo'i barcode e i ai se <strong>numera siaki</strong> (check digit), o le numera mulimuli lea e fuafua mai numera o lo'o i ona luma. Afai e le ogatusa le i'uga o le fuafuaga, e iloa ai e le masini sikeni o lo'o i ai se mea sese ma e teena ai le i'uga.</p>
<p>O le barcode lava ia e masani lava ona na'o se numera e teuina. O fa'amatalaga e pei o le igoa o le oloa po'o le tau e teuina i le faiga a le mea e totogi ai po'o se fa'amaumauga (database), ona su'e ai lea e fa'atatau i lea numera.</p>

<h2>Ituaiga barcode e masani ona fa'aaogaina</h2>
<p>I se tulaga lautele, e vaevaeina barcode i ni vaega tetele se lua:</p>
<ul>
  <li><strong>Barcode 1D (laina)</strong>: o ni laina tutu sa'o e faitau mai le agavale i le taumatau. O fa'ata'ita'iga o le <a href="/?type=ean13">EAN-13</a> ma le <a href="/?type=upca">UPC-A</a> mo oloa fa'atau, fa'apea le <a href="/?type=code128">Code 128</a> ma le <a href="/?type=code39">Code 39</a> mo felauaiga o oloa ma fale teu oloa.</li>
  <li><strong>Barcode 2D</strong>: o se mamanu sikuea e teuina fa'amatalaga i itu e lua, o lea e mafai ai ona teuina le tele atili. O fa'ata'ita'iga o le <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, ma le <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>E le gata i lea, o lo'o i ai barcode fa'apitoa mo le meli ma le lafoina o oloa, mo le soifua maloloina, fa'apea tulaga fa'atonutonu a le GS1 mo le filifili o le tu'uina atu o oloa. E mafai ona outou faitau i fa'amatalaga au'ili'ili e uiga i o latou ese'esega i le tusitusiga <a href="/artikel/perbedaan-barcode-1d-dan-2d">O le Ese'esega o le Barcode 1D ma le 2D</a>.</p>

<h2>O le a le aoga o le barcode?</h2>
<ul>
  <li><strong>Fa'atauoloa</strong>: e fa'avave ai le totogiina ma fa'amaumau otometi ai oloa o lo'o teu.</li>
  <li><strong>Fale teu oloa ma le lafoina</strong>: e siaki ai oloa ma afifi mai le tasi nofoaga i le isi.</li>
  <li><strong>Pepa ulufale ma fa'amoemoega</strong>: e siaki ai pe moni se pepa ulufale i le na'o le tasi le sikeni.</li>
  <li><strong>Fa'alauiloaina</strong>: o le QR Code i luga o se pepa fa'asalalau po'o se afifi e ave sa'o ai tagata i lo outou upega tafa'ilagi, lo outou lisi o mea'ai, po'o lo outou WhatsApp.</li>
</ul>

<h2>Faia la outou lava barcode</h2>
<p>Tou te le mana'omia se polokalame e totogi ina ia faia ai se barcode. I le <a href="/">I Need Barcode</a>, filifili le ituaiga barcode, fa'atumu fa'amatalaga, ona la'u mai lea o se ata PNG. E silia ma le 100 ituaiga e mafai ona filifili mai ai, ma e fua uma lava e aunoa ma le resitala.</p>
`
};
