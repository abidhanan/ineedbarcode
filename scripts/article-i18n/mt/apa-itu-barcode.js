// apa-itu-barcode
module.exports = {
  title: "X'inhu Barcode? Tifsira, Kif Jaħdem, u t-Tipi Tiegħu",
  desc: "Il-barcodes jinsabu fuq kważi kull prodott li tixtri. Sir af kif jaħdmu, l-istorja qasira tagħhom, u t-tipi ta' barcode li jintużaw l-iktar.",
  tags: ["Bażi", "Barcode"],
  coverCaption: "Il-barcode fuq l-imballaġġ jaħżen il-kodiċi uniku tal-prodott.",
  inlineCaption: "Il-kaxxier juża skaner biex jaqra l-barcode f'teptipa ta' għajn.",
  faq: [
    ["X'inhi d-differenza bejn barcode u QR Code?", "QR Code huwa tip ta' barcode, jiġifieri barcode 2D. Barcode bil-linji (1D) jaħżen biss ftit karattri u jinqara mix-xellug għal-lemin, filwaqt li QR Code jaħżen id-data f'żewġ direzzjonijiet, u għalhekk fih post għal link, test jew data tal-WiFi."],
    ["Il-barcode jaħżen il-prezz tal-prodott?", "Normalment le. Il-barcode tal-prodott fih biss kodiċi. Il-prezz u l-isem tal-prodott jinżammu fis-sistema tal-kaxxa, u mbagħad jiġu mfittxija skont il-kodiċi li jkun ġie skenjat."],
    ["Trid tħallas biex toħloq barcode?", "Le. Tista' toħloq l-istampa tal-barcode b'xejn, pereżempju fuq I Need Barcode. L-unika ħaġa li trid tħallas biex tirreġistraha hija n-numru uffiċjali għall-barcodes ta' prodotti tal-bejgħ bl-imnut bħal EAN-13 permezz ta' GS1."]
  ],
  body: `
<p>Barcode huwa mod kif tikteb id-data f'forma ta' disinn li magna tista' taqrah. Dan id-disinn normalment ikun magħmul minn linji suwed u bojod ta' wisgħat differenti, jew minn kwadri żgħar irranġati ġo kwadru. Meta jiġi skenjat, id-disinn jerġa' jinbidel f'numri jew test, pereżempju kodiċi ta' prodott, numru ta' traċċar jew indirizz ta' sit web.</p>
<p>Peress li jinqara minn magna, il-barcode huwa ħafna iktar mgħaġġel u jwassal għal inqas żbalji milli tittajpja kodiċi bl-idejn. Huwa għalhekk li l-barcodes jintużaw fil-kaxxa, fil-magazzini, fl-isptarijiet, fuq il-biljetti u anke fuq l-imballaġġ tal-ikel.</p>

<h2>Storja qasira tal-barcode</h2>
<p>L-idea tal-barcode ġiet ippatentata fl-1952 minn Norman Joseph Woodland u Bernard Silver fl-Istati Uniti. Il-barcodes bdew jintużaw verament fil-ħwienet biss fl-1974, meta pakkett gomma tal-mastika ġie skenjat f'supermarket f'Ohio b'kodiċi UPC. Minn dakinhar, il-barcodes infirxu madwar id-dinja kollha, u llum huma ġestiti globalment minn organizzazzjoni tal-istandards jisimha GS1.</p>

<h2>Kif jaħdem il-barcode?</h2>
<p>L-iskaner jixgħel dawl fuq il-barcode u mbagħad jaqra r-rifless. Il-partijiet skuri jirriflettu ftit dawl, u l-partijiet ċari jirriflettu ħafna. Din id-differenza tinbidel f'sensiela ta' 0 u 1, li mbagħad titqabbel mar-regoli ta' dak it-tip ta' barcode. Ħafna barcodes għandhom ukoll <strong>ċifra ta' kontroll</strong> (check digit), jiġifieri l-aħħar numru li jiġi kkalkulat min-numri ta' qablu. Jekk il-kalkolu ma jaqbilx, l-iskaner ikun jaf li hemm xi ħaġa ħażina u jirrifjuta r-riżultat.</p>
<p>Il-barcode innifsu normalment jaħżen biss kodiċi. Informazzjoni bħall-isem jew il-prezz tal-prodott tinżamm fis-sistema tal-kaxxa jew f'database, u mbagħad tiġi mfittxija skont dak il-kodiċi.</p>

<h2>Tipi ta' barcode li jintużaw spiss</h2>
<p>B'mod ġenerali, il-barcodes jinqasmu f'żewġ gruppi kbar:</p>
<ul>
  <li><strong>Barcodes 1D (lineari)</strong>: linji vertikali li jinqraw mix-xellug għal-lemin. Eżempji huma <a href="/?type=ean13">EAN-13</a> u <a href="/?type=upca">UPC-A</a> għall-prodotti tal-bejgħ bl-imnut, u <a href="/?type=code128">Code 128</a> u <a href="/?type=code39">Code 39</a> għal-loġistika u l-magazzini.</li>
  <li><strong>Barcodes 2D</strong>: disinn ta' kwadri li jaħżen id-data f'żewġ direzzjonijiet, u għalhekk fih post għal ħafna iktar. Eżempji huma <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> u <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Barra minn hekk, hemm barcodes speċjali għall-posta u l-konsenja, għall-kura tas-saħħa, u l-istandards GS1 għall-katina tal-provvista. Tista' taqra spjegazzjoni iktar dettaljata tad-differenzi fl-artiklu <a href="/artikel/perbedaan-barcode-1d-dan-2d">Id-Differenza bejn Barcodes 1D u 2D</a>.</p>

<h2>Għal xiex jintużaw il-barcodes?</h2>
<ul>
  <li><strong>Bejgħ bl-imnut</strong>: iħaffu l-kaxxa u jirreġistraw l-istokk awtomatikament.</li>
  <li><strong>Magazzini u konsenja</strong>: jittraċċaw il-merkanzija u l-pakketti minn post għal ieħor.</li>
  <li><strong>Biljetti u avvenimenti</strong>: jivverifikaw l-awtentiċità tal-biljett bi skan wieħed.</li>
  <li><strong>Marketing</strong>: QR Code fuq fuljett jew imballaġġ jieħu lin-nies dritt għas-sit web, il-menu jew il-WhatsApp tiegħek.</li>
</ul>

<h2>Oħloq il-barcode tiegħek stess</h2>
<p>M'għandekx bżonn app bi ħlas biex toħloq barcode. Fuq <a href="/">I Need Barcode</a>, agħżel it-tip ta' barcode, daħħal id-data, u mbagħad niżżlu bħala stampa PNG. Hemm iktar minn 100 tip x'tagħżel minnhom, u kollha huma b'xejn mingħajr reġistrazzjoni.</p>
`
};
