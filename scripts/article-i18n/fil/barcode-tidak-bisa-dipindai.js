// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 Dahilan Kung Bakit Hindi Ma-scan ang Barcode at Paano Ito Ayusin",
  desc: "Hindi ma-scan ang inyong barcode o QR Code? Suriin ang pitong pinakakaraniwang dahilan, mula sa contrast ng kulay hanggang sa laki, kasama ang paraan ng pag-aayos sa mga ito.",
  tags: ["Tips", "Barcode"],
  coverCaption: "Ang contrast at laki ang nagtatakda kung madaling ma-scan ang QR Code.",
  inlineCaption: "Sa bodega, bumabagal ang trabaho kapag hindi ma-scan ang barcode.",
  faq: [
    ["Bakit na-scan ang QR Code sa isang cellphone pero hindi sa iba?", "Magkakaiba ang kakayahan ng mga camera at scanner app. Ang QR Code na masyadong maliit, mababa ang contrast, o baligtad ang kulay ay mas madalas pumalya sa ilang cellphone. Subukan muna sa ilang cellphone bago mag-print."],
    ["Nai-scan ba ang barcode na may kulay?", "Oo, basta madilim ang kulay sa maliwanag na background. Iwasan ang pula para sa mga guhit ng barcode dahil maraming scanner sa kahera ang gumagamit ng pulang ilaw."],
    ["Paano malalaman kung tama ang barcode?", "I-scan ang na-print gamit ang ilang cellphone o scanner, at tiyaking eksaktong kapareho ng data na inilagay ninyo ang data na nabasa."]
  ],
  body: `
<p>Wala nang mas nakakainis pa kaysa sa barcode na naipa-print na nang daan-daang piraso pero hindi pala ma-scan. Ang magandang balita, kadalasang simple ang dahilan at madali itong maiwasan. Narito ang pitong pinakakaraniwang dahilan.</p>

<h2>1. Masyadong mababa ang contrast ng kulay</h2>
<p>Binabasa ng scanner ang pagkakaiba ng madilim at maliwanag. Mahirap pag-ibahin ang mapusyaw na abuhing barcode sa puti, o madilim na asul sa itim. <strong>Solusyon:</strong> gumamit ng madilim na kulay sa maliwanag na background. Itim sa puti ang pinakaligtas na pagpipilian.</p>

<h2>2. Baligtad ang kulay o kulay pula</h2>
<p>Hindi lahat ng scanner ay sumusuporta sa maliwanag na barcode sa madilim na background. Bukod dito, maraming scanner sa kahera ang gumagamit ng pulang ilaw, kaya ang pulang guhit ay mukhang kapareho ng puting background. <strong>Solusyon:</strong> iwasan ang pula para sa mga guhit o module ng barcode, at huwag baligtarin ang mga kulay.</p>

<h2>3. Masyadong maliit</h2>
<p>Kailangan ng camera ng sapat na pixel para makilala ang bawat module. <strong>Solusyon:</strong> palakihin ang barcode. Para sa QR Code na isa-scan nang malapitan, gumamit ng hindi bababa sa mga 2 × 2 cm. Tingnan ang <a href="/artikel/ukuran-barcode-untuk-dicetak">gabay sa laki ng print</a>.</p>

<h2>4. Walang quiet zone</h2>
<p>Mahirap ihiwalay sa paligid nito ang barcode na nakadikit sa larawan, teksto, o gilid ng papel. <strong>Solusyon:</strong> mag-iwan ng bakanteng espasyo sa paligid ng barcode, lalo na sa kaliwa at kanan ng barcode na guhit.</p>

<h2>5. Malabo o distorted ang larawan</h2>
<p>Mawawala ang hugis ng barcode na pinalaki mula sa maliit na larawan, na-save bilang mababang kalidad na JPG, o hinila hanggang mawala sa tamang proporsyon. <strong>Solusyon:</strong> i-download ito nang may mas malaking module size sa format na PNG, at palaging baguhin ang laki nang proporsyonal.</p>

<h2>6. Mali ang data o hindi angkop sa uri</h2>
<p>May mga patakaran ang bawat uri ng barcode. Ang EAN-13, halimbawa, ay tumatanggap lamang ng 12 o 13 digit na may tamang check digit. Ang maling pagkaka-type ng link ay nagdudulot din ng QR Code na nababasa pero walang binubuksan. <strong>Solusyon:</strong> suriin ang data bago mag-print. Magpapakita ng mensahe ang generator ng <a href="/">I Need Barcode</a> kapag hindi tumutugma ang data sa mga patakaran ng napiling uri ng barcode.</p>

<h2>7. Ibabaw at ilaw</h2>
<p>Ang makintab na materyal, malinaw na plastik, tupi, at kurbadong ibabaw ay maaaring magpatalbog ng liwanag o magbago ng hugis ng barcode. <strong>Solusyon:</strong> mag-print sa patag at hindi makintab na ibabaw, at subukan ito sa aktwal na kondisyon ng ilaw.</p>

<h2>Tungkol sa QR Code na may disenyo</h2>
<p>Ang QR Code na binigyan ng hugis, kulay, o frame ay maaari pa ring ma-scan basta buo ang tatlong marker na kahon sa mga sulok nito at sapat ang contrast. Magbasa pa sa <a href="/artikel/desain-qr-code-kreatif">malikhaing disenyo ng QR Code na nababasa pa rin</a>.</p>
<p>Ang pinakamagandang gawi: <strong>palaging subukan ang isang print</strong> gamit ang ilang cellphone at scanner bago mag-print nang maramihan.</p>
`
};
