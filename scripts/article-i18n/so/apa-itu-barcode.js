// apa-itu-barcode
module.exports = {
  title: "Waa Maxay Barcode? Macnaha, Sida Uu U Shaqeeyo, iyo Noocyadiisa",
  desc: "Barcode wuxuu ku yaal ku dhowaad dhammaan alaabta aad iibsato. Baro sida uu u shaqeeyo, taariikhdiisa kooban, iyo noocyada barcode ee ugu badan ee la isticmaalo.",
  tags: ["Aasaaska", "Barcode"],
  coverCaption: "Barcode-ka ku yaal baakadda wuxuu kaydiyaa koodh gaar ah oo alaabta ah.",
  inlineCaption: "Qasnajiga wuxuu isticmaalaa iskaanar si uu barcode-ka u akhriyo daqiiqad gudaheed.",
  faq: [
    ["Maxay ku kala duwan yihiin barcode iyo QR Code?", "QR Code waa mid ka mid ah noocyada barcode, kaas oo ah barcode 2D. Barcode-ka xariiqda ah (1D) wuxuu kaydiyaa xarfo yar oo keliya waxaana laga akhriyaa bidix ilaa midig, halka QR Code uu xogta ku kaydiyo laba jiho, sidaas darteed wuxuu qaadi karaa xiriir, qoraal, ama xogta WiFi."],
    ["Barcode-ku ma kaydiyaa qiimaha alaabta?", "Badanaa maya. Barcode-ka alaabtu wuxuu ka kooban yahay koodh oo keliya. Qiimaha iyo magaca alaabta waxaa lagu kaydiyaa nidaamka qasnajiga, kadibna waxaa lagu raadiyaa koodhka la iskaanay."],
    ["Ma lacag baa looga baahan yahay samaynta barcode?", "Maya. Sawirka barcode-ka bilaash ayaa loo samayn karaa, tusaale ahaan I Need Barcode. Waxa keliya ee lacag lagu diiwaangeliyo waa lambarka rasmiga ah ee barcode-yada alaabta tafaariiqda sida EAN-13, kaas oo laga helo GS1."]
  ],
  body: `
<p>Barcode waa hab xogta loogu qoro qaab naqshad ah oo mashiin akhriyi karo. Naqshaddaasi badanaa waa xariiqyo madow iyo cad oo ballac kala duwan leh, ama afar-geesood yaryar oo lagu habeeyay gudaha hal afar-geesle. Marka la iskaano, naqshaddaas waxaa dib loogu turjumaa lambarro ama qoraal, tusaale ahaan koodhka alaabta, lambarka rasiidka gudbinta, ama cinwaanka bogga internetka.</p>
<p>Maadaama mashiin akhriyo, barcode-ku aad buu uga dhakhso badan yahay oo khaladkiisuna aad buu u yar yahay marka la barbar dhigo in koodhka gacanta lagu qoro. Taasi waa sababta barcode loogu isticmaalo goobaha lacag-bixinta, bakhaarada, isbitaalada, tigidhada, iyo xitaa baakadaha cuntada.</p>

<h2>Taariikh kooban oo barcode-ka</h2>
<p>Fikradda barcode-ka waxaa shati (patent) loogu helay 1952 Norman Joseph Woodland iyo Bernard Silver oo ku sugnaa Maraykanka. Barcode-ka si dhab ah ayaa dukaamada loogu bilaabay 1974, markii xidhmo xanjo ah lagu iskaanay suuq weyn oo ku yaal Ohio iyadoo la adeegsanayo koodhka UPC. Tan iyo markaas, barcode-ku wuxuu ku faafay adduunka oo dhan, haddana waxaa caalami ahaan maamula urur heerar ah oo la yiraahdo GS1.</p>

<h2>Sidee buu barcode-ku u shaqeeyaa?</h2>
<p>Iskaanarku wuxuu iftiin ku shiddaa barcode-ka kadibna wuxuu akhriyaa iftiinka dib u soo noqda. Qaybaha madow waxay dib u celiyaan iftiin yar, qaybaha iftiimayana waxay celiyaan iftiin badan. Farqigaas waxaa loo beddelaa taxane lambarro ah oo 0 iyo 1 ah, kadibna waxaa la barbar dhigaa xeerarka nooca barcode-kaas. Barcode-yo badan waxay sidoo kale leeyihiin <strong>lambar hubin</strong> (check digit), kaas oo ah lambarka ugu dambeeya ee laga xisaabiyo lambarrada ka horreeya. Haddii natiijada xisaabtu aysan is waafaqin, iskaanarku wuu ogaadaa in wax khaldan yihiin wuxuuna diidaa natiijada.</p>
<p>Barcode-ku laftiisa badanaa wuxuu kaydiyaa koodh oo keliya. Macluumaadka sida magaca alaabta ama qiimaha waxaa lagu kaydiyaa nidaamka qasnajiga ama kaydka xogta, kadibna waxaa lagu raadiyaa koodhkaas.</p>

<h2>Noocyada barcode ee inta badan la isticmaalo</h2>
<p>Guud ahaan, barcode-yada waxay u qaybsamaan laba koox oo waaweyn:</p>
<ul>
  <li><strong>Barcode 1D (toosan)</strong>: waa xariiqyo taagan oo laga akhriyo bidix ilaa midig. Tusaalooyinka waxaa ka mid ah <a href="/?type=ean13">EAN-13</a> iyo <a href="/?type=upca">UPC-A</a> ee alaabta tafaariiqda, iyo sidoo kale <a href="/?type=code128">Code 128</a> iyo <a href="/?type=code39">Code 39</a> ee saadka iyo bakhaarada.</li>
  <li><strong>Barcode 2D</strong>: waa naqshad afar-geesood ah oo xogta ku kaydisa laba jiho, sidaas darteed waxay qaadi kartaa wax aad u badan. Tusaalooyinka waxaa ka mid ah <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, iyo <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Intaas waxaa dheer barcode-yo gaar ah oo loogu talagalay boostada iyo gudbinta, caafimaadka, iyo heerarka GS1 ee silsiladda sahayda. Sharaxaad faahfaahsan oo ku saabsan kala duwanaanshahooda waxaad ka akhrisan kartaa maqaalka <a href="/artikel/perbedaan-barcode-1d-dan-2d">Farqiga u dhexeeya Barcode 1D iyo 2D</a>.</p>

<h2>Barcode maxaa loo isticmaalaa?</h2>
<ul>
  <li><strong>Tafaariiqda</strong>: wuxuu dardar geliyaa lacag-bixinta wuxuuna si toos ah u diiwaangeliyaa kaydka alaabta.</li>
  <li><strong>Bakhaarada iyo gudbinta</strong>: wuxuu la socdaa alaabta iyo xirmooyinka meel ilaa meel kale.</li>
  <li><strong>Tigidhada iyo munaasabadaha</strong>: wuxuu hubiyaa runnimada tigidhka hal iskaan oo keliya.</li>
  <li><strong>Suuqgeynta</strong>: QR Code ku yaal buug-yaraha ama baakadda wuxuu dadka si toos ah ugu geeyaa boggaaga internetka, liiska cuntada, ama WhatsApp-kaaga.</li>
</ul>

<h2>Adigu samee barcode-kaaga</h2>
<p>Uma baahnid app lacag ah si aad barcode u samayso. Gudaha <a href="/">I Need Barcode</a>, dooro nooca barcode-ka, geli xogta, kadibna u soo dejiso sawir PNG ah. Waxaa jira in ka badan 100 nooc oo aad ka dooran karto, dhammaantoodna waa bilaash, iska-diiwaangelin la'aan.</p>
`
};
