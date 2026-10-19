// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Farqiga u dhexeeya Barcode 1D iyo 2D: Kee Baad U Baahan Tahay?",
  desc: "Barcode-ka xariiqda ah iyo QR Code labaduba waa barcode, laakiin isticmaalkoodu wuu kala duwan yahay. Isbarbar dhig awoodda kaydinta, habka iskaanka, iyo tusaalooyinka isticmaalkooda.",
  tags: ["Aasaaska", "Barcode"],
  coverCaption: "Iskaanarka gacanta lagu qabto ee bakhaarka wuxuu akhriyaa barcode 1D iyo 2D.",
  inlineCaption: "Calaamadaha gudbintu badanaa waxay isticmaalaan barcode xariiq ah.",
  faq: [
    ["Iskaanarrada lacag-bixintu ma akhriyi karaan QR Code?", "Dhammaantood maaha. Iskaanarrada laser-ka 1D waxay akhriyaan barcode-ka xariiqda ah oo keliya. QR Code wuxuu u baahan yahay iskaanar 2D ah oo kamarad ku shaqeeya ama kamaradda taleefanka."],
    ["Barcode-kee ayaa ugu yar?", "Data Matrix waa barcode 2D ah oo loo daabici karo si aad u yar, sidaas darteed badanaa waxaa lagu isticmaalaa qaybaha elektaroonigga, qalabka caafimaadka, iyo calaamadaha daawooyinka."],
    ["Ma isticmaali karaa QR Code beddelka EAN-13 alaabta tafaariiqda?", "Si loogu iibiyo dukaamada tafaariiqda, alaabtu weli waxay u baahan tahay EAN-13 ama UPC diiwaangashan. QR Code waxaa lagu dari karaa baakadda sidii dhammaystir, tusaale ahaan macluumaadka alaabta ama xayeysiin."]
  ],
  body: `
<p>Marka aad samaynayso barcode, su'aasha ugu horreysa ee badanaa soo baxda waa: ma isticmaalaa barcode xariiq ah mise QR Code? Labaduba waxaa la yiraahdaa barcode, laakiin habka ay xogta u kaydiyaan wuu kala duwan yahay, sidaas darteed isticmaalkooduna wuu kala duwan yahay.</p>

<h2>Barcode 1D (toosan)</h2>
<p>Barcode 1D waa barcode ka kooban xariiqyo taagan. Xogta waxaa lagu kaydiyaa hal jiho, taas oo ah bidix ilaa midig. Tusaalaha ugu caansan waa <a href="/?type=ean13">EAN-13</a> oo ku yaal baakadaha alaabta iyo <a href="/?type=code128">Code 128</a> oo ku yaal calaamadaha gudbinta.</p>
<ul>
  <li>Awood kaydin oo yar, badanaa toban ilaa dhowr iyo toban xaraf.</li>
  <li>Waxaa akhriyi kara iskaanarrada laser-ka ee lacag-bixinta oo raqiis ah oo aad u dhakhso badan.</li>
  <li>Wuxuu ku habboon yahay koodhadhka alaabta, lambarrada taxanaha, iyo lambarrada rasiidka gudbinta.</li>
</ul>

<h2>Barcode 2D</h2>
<p>Barcode 2D wuxuu xogta ku kaydiyaa laba jiho, dhinac iyo hoos, sidaas darteed wuxuu qaadi karaa wax aad u badan. Tusaalooyinka waxaa ka mid ah <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, iyo <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Awood kaydin oo weyn, laga bilaabo tobanaan ilaa kumanaan xaraf.</li>
  <li>Waxaa lagu iskaan karaa kamaradda taleefanka jihooyin kala duwan.</li>
  <li>Wuxuu leeyahay sixitaanka khaladaadka, sidaas darteed weli wuu akhrismaa xitaa haddii qayb ka mid ah ay dhaawacanto.</li>
  <li>Waxaa loo samayn karaa si aad u yar, tusaale ahaan Data Matrix oo ku yaal qaybaha elektaroonigga.</li>
</ul>

<h2>Isbarbar dhig kooban</h2>
<table>
  <thead><tr><th></th><th>Barcode 1D</th><th>Barcode 2D</th></tr></thead>
  <tbody>
    <tr><td>Qaabka</td><td>Xariiqyo taagan</td><td>Afar-geesood/dhibco ku dhex jira afar-geesle</td></tr>
    <tr><td>Awoodda kaydinta</td><td>Yar</td><td>Weyn</td></tr>
    <tr><td>Qalabka iskaanka</td><td>Iskaanar laser ah ama kamarad</td><td>Kamarad ama iskaanar 2D ah</td></tr>
    <tr><td>U adkaysiga dhaawaca</td><td>Xaddidan</td><td>Wuxuu leeyahay sixitaanka khaladaadka</td></tr>
    <tr><td>Tusaalooyin</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Goormaa la isticmaalaa kee?</h2>
<ul>
  <li><strong>Alaabta laga iibiyo dukaamada ama dukaamada yaryar</strong>: isticmaal EAN-13 rasmi ah oo ka yimid GS1. Eeg <a href="/artikel/cara-mendapatkan-barcode-ean-13">sida loo helo barcode EAN-13</a>.</li>
  <li><strong>Calaamadaha bakhaarka, khaanadaha, ama gudbinta</strong>: Code 128 waa doorasho caadi ah sababtoo ah waa cufan yahay wuxuuna taageeraa xarfo iyo lambarro.</li>
  <li><strong>Xiriirro, liiska cuntada, WiFi, ama xiriirka macaamiisha</strong>: QR Code, sababtoo ah si toos ah ayaa loogu iskaan karaa kamaradda taleefanka.</li>
  <li><strong>Calaamado aad u yaryar</strong>: Data Matrix.</li>
  <li><strong>Kaararka aqoonsiga, tigidhada diyaaradda, ama dukumentiyada</strong>: PDF417 ama Aztec.</li>
</ul>
<p>Dhammaan noocyada kor ku xusan waxaad si bilaash ah uga samayn kartaa <a href="/">I Need Barcode</a>. Haddii aad weli shaki ku jirto, ku bilow QR Code baahiyaha macaamiisha iyo Code 128 baahiyaha gudaha.</p>
`
};
