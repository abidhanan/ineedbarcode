// apa-itu-barcode
module.exports = {
  title: "Unsa ang Barcode? Kahulogan, Unsaon Kini Paglihok, ug mga Klase Niini",
  desc: "Ang barcode makita sa halos tanang produkto nga inyong palitan. Ilha kon unsaon kini paglihok, ang mubo nga kasaysayan niini, ug ang mga klase sa barcode nga kasagarang gigamit.",
  tags: ["Sukaranan", "Barcode"],
  coverCaption: "Ang barcode sa putos nagtipig sa talagsaong code sa produkto.",
  inlineCaption: "Ang kahera mogamit og scanner aron mabasa ang barcode sa usa ka pamilok.",
  faq: [
    ["Unsa ang kalainan sa barcode ug QR Code?", "Ang QR Code usa ka klase sa barcode, nga mao ang 2D nga barcode. Ang barcode nga linya (1D) nagtipig lamang og pipila ka karakter ug gibasa gikan sa wala paingon sa tuo, samtang ang QR Code nagtipig og datos sa duha ka direksiyon mao nga masudlan kini og link, teksto, o datos sa WiFi."],
    ["Nagtipig ba ang barcode sa presyo sa produkto?", "Kasagaran dili. Ang barcode sa produkto adunay code lamang. Ang presyo ug ngalan sa produkto gitipigan sa sistema sa kahera, unya gipangita base sa code nga na-scan."],
    ["Kinahanglan ba nga bayaran ang paghimo og barcode?", "Dili. Ang hulagway sa barcode mahimo nga libre, pananglitan sa I Need Barcode. Ang kinahanglan lamang irehistro nga adunay bayad mao ang opisyal nga numero alang sa barcode sa produktong retail sama sa EAN-13 pinaagi sa GS1."]
  ],
  body: `
<p>Ang barcode usa ka paagi sa pagsulat og datos sa porma sa sumbanan nga mabasa sa makina. Kasagaran ang sumbanan mao ang itom ug puti nga mga linya nga lainlain ang gilapdon, o gagmay nga mga kahon nga gihan-ay sulod sa usa ka kuwadrado. Kon i-scan, kana nga sumbanan hubaron balik ngadto sa numero o teksto, pananglitan code sa produkto, numero sa resibo sa padala, o adres sa website.</p>
<p>Tungod kay makina ang mobasa, ang barcode mas paspas kaayo ug talagsa ra masayop kon itandi sa pag-type sa code nga mano-mano. Mao kana ang hinungdan nga ang barcode gigamit sa kahera, bodega, ospital, tiket, hangtod sa putos sa pagkaon.</p>

<h2>Mubo nga kasaysayan sa barcode</h2>
<p>Ang ideya sa barcode gi-patent niadtong 1952 ni Norman Joseph Woodland ug Bernard Silver sa Estados Unidos. Ang barcode tinuod nga nagamit sa tindahan niadtong 1974 pa, sa dihang ang usa ka putos sa chewing gum gi-scan sa usa ka supermarket sa Ohio gamit ang UPC nga code. Sukad niadto, ang barcode mikaylap sa tibuok kalibotan ug karon gidumala sa tibuok kalibotan sa organisasyon sa sumbanan nga ginganlag GS1.</p>

<h2>Unsaon paglihok sa barcode?</h2>
<p>Ang scanner mosiga sa barcode unya basahon ang pagbanaag niini. Ang ngitngit nga bahin mobanaag og gamay nga kahayag, ang hayag nga bahin mobanaag og daghan. Kana nga kalainan himoong serye sa numerong 0 ug 1, unya itandi sa mga lagda sa maong klase sa barcode. Daghang barcode usab ang adunay <strong>digit nga tigsusi</strong> (check digit), nga mao ang kataposang numero nga gikuwenta gikan sa mga numero sa wala pa niini. Kon ang resulta sa kuwenta dili motakdo, mahibaw-an sa scanner nga adunay sayop ug isalikway niini ang resulta.</p>
<p>Ang barcode mismo kasagaran nagtipig lamang og code. Ang impormasyon sama sa ngalan sa produkto o presyo gitipigan sa sistema sa kahera o database, unya gipangita base sa maong code.</p>

<h2>Mga klase sa barcode nga kasagarang gigamit</h2>
<p>Sa kinatibuk-an ang barcode nabahin ngadto sa duha ka dagkong grupo:</p>
<ul>
  <li><strong>1D nga barcode (linear)</strong>: mga bertikal nga linya nga gibasa gikan sa wala paingon sa tuo. Pananglitan ang <a href="/?type=ean13">EAN-13</a> ug <a href="/?type=upca">UPC-A</a> alang sa mga produktong retail, ingon man ang <a href="/?type=code128">Code 128</a> ug <a href="/?type=code39">Code 39</a> alang sa logistics ug bodega.</li>
  <li><strong>2D nga barcode</strong>: sumbanan nga mga kahon nga nagtipig og datos sa duha ka direksiyon, mao nga masudlan kini og mas daghan pa. Pananglitan ang <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, ug <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Gawas niana adunay espesyal nga barcode alang sa koreyo ug pagpadala, panglawas, ingon man ang mga sumbanan sa GS1 alang sa supply chain. Ang mas detalyadong pagpasabot bahin sa ilang kalainan mabasa ninyo sa artikulo nga <a href="/artikel/perbedaan-barcode-1d-dan-2d">Kalainan sa 1D ug 2D nga Barcode</a>.</p>

<h2>Para sa unsa ang barcode?</h2>
<ul>
  <li><strong>Retail</strong>: mopaspas sa kahera ug motala sa stock nga awtomatiko.</li>
  <li><strong>Bodega ug pagpadala</strong>: mosubay sa mga butang ug padala gikan sa usa ka dapit ngadto sa lain.</li>
  <li><strong>Tiket ug mga kalihokan</strong>: mosusi kon tinuod ba ang tiket sa usa lang ka scan.</li>
  <li><strong>Marketing</strong>: ang QR Code sa brochure o putos modala dayon sa mga tawo ngadto sa inyong website, menu, o WhatsApp.</li>
</ul>

<h2>Paghimo og kaugalingong barcode</h2>
<p>Dili ninyo kinahanglan ang bayad nga app aron makahimo og barcode. Sa <a href="/">I Need Barcode</a>, pilia ang klase sa barcode, isulod ang datos, unya i-download isip hulagway nga PNG. Adunay kapin sa 100 ka klase nga mapilian, ug tanan libre nga walay pagparehistro.</p>
`
};
