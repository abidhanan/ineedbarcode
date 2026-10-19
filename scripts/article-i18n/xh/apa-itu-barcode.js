// apa-itu-barcode
module.exports = {
  title: "Yintoni iBarcode? Intsingiselo, Indlela Esebenza Ngayo, Neentlobo Zayo",
  desc: "IBarcode ikho phantse kuzo zonke iimveliso enizithengayo. Yazini indlela esebenza ngayo, imbali yayo emfutshane, kunye neentlobo zebarcode ezisetyenziswa kakhulu.",
  tags: ["Iziseko", "Barcode"],
  coverCaption: "IBarcode esekupakisheni igcina ikhowudi ekhethekileyo yemveliso.",
  inlineCaption: "Umgcini-mali usebenzisa isikena ukufunda ibarcode ngokuphazima kweliso.",
  faq: [
    ["Yintoni umahluko phakathi kwebarcode neQR Code?", "IQR Code luhlobo olunye lwebarcode, oko kukuthi yibarcode ye-2D. IBarcode yemigca (1D) igcina oonobumba abambalwa kuphela kwaye ifundwa ukusuka ekhohlo ukuya ekunene, ngelixa iQR Code igcina idatha ngamacala omabini, ngoko ke ingathwala ikhonkco, umbhalo, okanye idatha yeWiFi."],
    ["Ingaba ibarcode igcina ixabiso lemveliso?", "Ngesiqhelo, hayi. IBarcode yemveliso iqulethe ikhowudi kuphela. Ixabiso negama lemveliso zigcinwa kwinkqubo yomgcini-mali, ze zikhangelwe ngokwekhowudi eskeniweyo."],
    ["Ingaba kufuneka nihlawule ukwenza ibarcode?", "Hayi. Umfanekiso webarcode unokwenziwa simahla, umzekelo kwi-I Need Barcode. Into ekufuneka ibhaliswe ngentlawulo yinombolo esemthethweni kuphela yeebarcode zeemveliso zokuthengisa ezifana ne-EAN-13, ngokusebenzisa i-GS1."]
  ],
  body: `
<p>IBarcode yindlela yokubhala idatha ngohlobo lwepateni enokufundwa ngumatshini. Le pateni idla ngokuba yimigca emnyama nemhlophe enobubanzi obahlukeneyo, okanye izikwere ezincinci ezicwangciswe ngaphakathi kwesikwere esinye. Xa iskeniwe, le pateni iguqulelwa kwakhona ibe ngamanani okanye umbhalo, umzekelo ikhowudi yemveliso, inombolo yerisithi yokuthumela, okanye idilesi yewebhusayithi.</p>
<p>Ngenxa yokuba ifundwa ngumatshini, ibarcode ikhawuleza kakhulu kwaye ineempazamo ezimbalwa xa kuthelekiswa nokuchwetheza ikhowudi ngesandla. Yiyo loo nto ibarcode isetyenziswa kwiindawo zokuhlawula, koovimba bempahla, ezibhedlele, kumatikiti, kwanasekupakisheni kokutya.</p>

<h2>Imbali emfutshane yebarcode</h2>
<p>Umbono webarcode wafumana ilungelo elilodwa (patent) ngo-1952, ngoNorman Joseph Woodland noBernard Silver eUnited States. IBarcode yaqala ukusetyenziswa ngokwenene evenkileni ngo-1974, xa ipakethi yentlafuno yaskenwa kwivenkile enkulu e-Ohio ngekhowudi ye-UPC. Ukusukela ngoko, ibarcode yasasazeka kwihlabathi liphela kwaye ngoku ilawulwa kwihlabathi jikelele ngumbutho wemigangatho obizwa ngokuba yi-GS1.</p>

<h2>Isebenza njani ibarcode?</h2>
<p>Isikena sikhanyisela ibarcode size sifunde ukukhanya okubuyayo. Iindawo ezimnyama zibuyisa ukukhanya okuncinci, iindawo ezikhanyayo zibuyisa okuninzi. Lo mahluko uguqulwa ube luluhlu lwamanani u-0 no-1, ze uthelekiswe nemithetho yolo hlobo lwebarcode. Iibarcode ezininzi zikwanayo <strong>idijithi yokukhangela</strong> (check digit), oko kukuthi inani lokugqibela elibalwa ngamanani angaphambili. Ukuba isiphumo sokubala asihambelani, isikena siyazi ukuba kukho into engalunganga kwaye siyasigatya isiphumo.</p>
<p>IBarcode ngokwayo idla ngokugcina ikhowudi kuphela. Ulwazi olufana negama lemveliso okanye ixabiso lugcinwa kwinkqubo yomgcini-mali okanye kwisiseko sedatha, ze lukhangelwe ngokwaloo khowudi.</p>

<h2>Iintlobo zebarcode ezisetyenziswa kakhulu</h2>
<p>Ngokubanzi, iibarcode zahlulwe zangamaqela amabini amakhulu:</p>
<ul>
  <li><strong>IBarcode ye-1D (yomgca)</strong>: yimigca ethe nkqo efundwa ukusuka ekhohlo ukuya ekunene. Imizekelo yi-<a href="/?type=ean13">EAN-13</a> ne-<a href="/?type=upca">UPC-A</a> zeemveliso zokuthengisa, kunye ne-<a href="/?type=code128">Code 128</a> ne-<a href="/?type=code39">Code 39</a> zezothutho noovimba bempahla.</li>
  <li><strong>IBarcode ye-2D</strong>: yipateni yezikwere egcina idatha ngamacala omabini, ngoko ke ithwala okuninzi kakhulu. Imizekelo yi-<a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, kunye ne-<a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Ngaphezu koko, kukho iibarcode ezikhethekileyo zeposi nokuthumela, ezempilo, kunye nemigangatho ye-GS1 yekhonkco lokubonelela. Inkcazelo eneenkcukacha ngakumbi ngomahluko wazo ningayifunda kwinqaku elithi <a href="/artikel/perbedaan-barcode-1d-dan-2d">Umahluko phakathi kweBarcode ye-1D neye-2D</a>.</p>

<h2>Isetyenziselwa ntoni ibarcode?</h2>
<ul>
  <li><strong>Ukuthengisa</strong>: ikhawulezisa ukuhlawula kwaye ibhala isitokhwe ngokuzenzekelayo.</li>
  <li><strong>Oovimba bempahla nokuthumela</strong>: ilandelela iimpahla neepasile ukusuka kwenye indawo ukuya kwenye.</li>
  <li><strong>Amatikiti neminyhadala</strong>: iqinisekisa ukuba itikiti liyinyani ngesikena esinye.</li>
  <li><strong>Intengiso</strong>: iQR Code kwiincwadana okanye ekupakisheni isa abantu ngqo kwiwebhusayithi yenu, kwimenyu, okanye kwi-WhatsApp.</li>
</ul>

<h2>Ukuzenzela ibarcode</h2>
<p>Anidingi app ehlawulelwayo ukwenza ibarcode. Kwi-<a href="/">I Need Barcode</a>, khethani uhlobo lwebarcode, faka idatha, ze nikhuphele njengomfanekiso we-PNG. Kukho iintlobo ezingaphezu kwe-100 enokukhetha kuzo, kwaye zonke zisimahla ngaphandle kokubhalisa.</p>
`
};
