// apa-itu-barcode
module.exports = {
  title: "Iyini i-Barcode? Incazelo, Indlela Esebenza Ngayo, Nezinhlobo Zayo",
  desc: "Ama-barcode atholakala cishe kuyo yonke imikhiqizo eniyithengayo. Yazini ukuthi asebenza kanjani, umlando wawo omfushane, nezinhlobo zama-barcode ezisetshenziswa kakhulu.",
  tags: ["Izisekelo", "Barcode"],
  coverCaption: "I-barcode esephaketheni igcina ikhodi ehlukile yomkhiqizo.",
  inlineCaption: "Ikheshiya lisebenzisa isiskena ukufunda i-barcode ngokuphazima kweso.",
  faq: [
    ["Uyini umehluko phakathi kwe-barcode ne-QR Code?", "I-QR Code ingenye yezinhlobo zama-barcode, okungukuthi i-barcode ye-2D. I-barcode enemigqa (1D) igcina izinhlamvu ezimbalwa kuphela futhi ifundwa kusukela kwesobunxele kuya kwesokudla, kanti i-QR Code igcina idatha ngezindlela ezimbili, ngakho ingaqukatha isixhumanisi, umbhalo, noma idatha ye-WiFi."],
    ["Ingabe i-barcode igcina intengo yomkhiqizo?", "Ngokuvamile cha. I-barcode yomkhiqizo iqukethe ikhodi kuphela. Intengo negama lomkhiqizo kugcinwa ohlelweni lokukhokha, bese kuyatholwa ngokusebenzisa ikhodi eskeniwe."],
    ["Ingabe kufanele ukhokhe ukuze wenze i-barcode?", "Cha. Isithombe se-barcode singenziwa mahhala, isibonelo ku-I Need Barcode. Okudinga ukubhaliswa okukhokhelwayo yizinombolo ezisemthethweni kuphela zama-barcode emikhiqizo yokudayisa njenge-EAN-13 nge-GS1."]
  ],
  body: `
<p>I-barcode iyindlela yokubhala idatha ngendlela yephethini engafundwa umshini. Le phethini ngokuvamile iba yimigqa emnyama nemhlophe enobubanzi obuhlukene, noma amabhokisi amancane ahlelwe ngaphakathi kwesikwele. Uma iskenwa, le phethini iphinde ihunyushwe ibe izinombolo noma umbhalo, isibonelo ikhodi yomkhiqizo, inombolo yokulandelela iphasela, noma ikheli lewebhusayithi.</p>
<p>Ngenxa yokuthi ifundwa umshini, i-barcode isheshe kakhulu futhi inamaphutha ambalwa kakhulu kunokuthayipha ikhodi ngesandla. Yingakho ama-barcode esetshenziswa ezindaweni zokukhokha, ezindaweni zokugcina impahla, ezibhedlela, kumathikithi, kuze kufike emaphaketheni okudla.</p>

<h2>Umlando omfushane we-barcode</h2>
<p>Umqondo we-barcode wanikwa ilungelo lobunikazi (patent) ngo-1952 nguNorman Joseph Woodland noBernard Silver e-United States. Ama-barcode aqala ukusetshenziswa ngempela ezitolo ngo-1974, lapho iphakethe likashingamu liskenwa esitolo esikhulu e-Ohio ngekhodi ye-UPC. Kusukela ngaleso sikhathi, ama-barcode asakazeke emhlabeni wonke futhi manje aphethwe emhlabeni jikelele yinhlangano yamazinga ebizwa ngokuthi yi-GS1.</p>

<h2>Isebenza kanjani i-barcode?</h2>
<p>Isiskena sikhanyisa i-barcode bese sifunda ukukhanya okubuyayo. Izingxenye ezimnyama zibuyisa ukukhanya okuncane, kanti izingxenye ezikhanyayo zibuyisa ukukhanya okuningi. Lowo mehluko uguqulwa ube uchungechunge lwezinombolo u-0 no-1, bese uqhathaniswa nemithetho yalolo hlobo lwe-barcode. Ama-barcode amaningi nawo ane-<strong>dijithi yokuhlola</strong> (check digit), okuyinombolo yokugcina ebalwa kusukela ezinombolweni eziyandulelayo. Uma umphumela wokubala ungahambisani, isiskena siyazi ukuthi kukhona okungalungile bese senqaba lowo mphumela.</p>
<p>I-barcode ngokwayo ngokuvamile igcina ikhodi kuphela. Ulwazi olufana negama lomkhiqizo noma intengo lugcinwa ohlelweni lokukhokha noma kusizindalwazi (database), bese lutholwa ngokusebenzisa leyo khodi.</p>

<h2>Izinhlobo zama-barcode ezivame ukusetshenziswa</h2>
<p>Ngokujwayelekile ama-barcode ahlukaniswe aba ngamaqembu amabili amakhulu:</p>
<ul>
  <li><strong>I-barcode ye-1D (enemigqa)</strong>: imigqa emile efundwa kusukela kwesobunxele kuya kwesokudla. Izibonelo zayo yi-<a href="/?type=ean13">EAN-13</a> ne-<a href="/?type=upca">UPC-A</a> zemikhiqizo yokudayisa, kanye ne-<a href="/?type=code128">Code 128</a> ne-<a href="/?type=code39">Code 39</a> zokuthutha izimpahla nezindawo zokugcina impahla.</li>
  <li><strong>I-barcode ye-2D</strong>: iphethini yamabhokisi egcina idatha ngezindlela ezimbili, ngakho iqukatha okuningi kakhulu. Izibonelo zayo yi-<a href="/?type=qrcode">QR Code</a>, i-<a href="/?type=datamatrix">Data Matrix</a>, i-<a href="/?type=pdf417">PDF417</a>, ne-<a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Ngaphandle kwalokho, kukhona ama-barcode akhethekile eposi nokuthunyelwa kwezimpahla, ezempilo, kanye namazinga e-GS1 ochungechunge lokuhlinzeka. Incazelo enemininingwane mayelana nomehluko wawo ningayifunda endatshaneni ethi <a href="/artikel/perbedaan-barcode-1d-dan-2d">Umehluko Phakathi Kwe-Barcode Ye-1D Ne-2D</a>.</p>

<h2>Ama-barcode asetshenziselwa ini?</h2>
<ul>
  <li><strong>Ukudayisa</strong>: asheshisa ukukhokha futhi abhala isitokwe ngokuzenzakalelayo.</li>
  <li><strong>Izindawo zokugcina impahla nokuthunyelwa kwezimpahla</strong>: alandelela izimpahla namaphasela kusukela kwenye indawo kuya kwenye.</li>
  <li><strong>Amathikithi nemicimbi</strong>: ahlola ubuqiniso bethikithi ngokuskena kanye nje.</li>
  <li><strong>Ukumaketha</strong>: i-QR Code esephepheni lokukhangisa noma ephaketheni iyisa abantu ngqo kuwebhusayithi, kumenyu, noma ku-WhatsApp yenu.</li>
</ul>

<h2>Ukwenza i-barcode ngokwenu</h2>
<p>Anidingi uhlelo olukhokhelwayo ukuze nenze i-barcode. Ku-<a href="/">I Need Barcode</a>, khethani uhlobo lwe-barcode, fakani idatha, bese niyilanda njengesithombe se-PNG. Kunezinhlobo ezingaphezu kuka-100 eningakhetha kuzo, futhi zonke zimahhala ngaphandle kokubhalisa.</p>
`
};
