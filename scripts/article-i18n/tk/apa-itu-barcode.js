// apa-itu-barcode
module.exports = {
  title: "Ştrihkod näme? Manysy, işleýşi we görnüşleri",
  desc: "Ştrihkod satyn alýan harytlaryňyzyň diýen ýaly hemmesinde bar. Onuň nähili işleýändigi, gysgaça taryhy we iň köp ulanylýan ştrihkod görnüşleri bilen tanyşyň.",
  tags: ["Esaslar", "Ştrihkod"],
  coverCaption: "Gaplamadaky ştrihkod harydyň özboluşly koduny saklaýar.",
  inlineCaption: "Kassir ştrihkody bir pursatda okamak üçin skaner ulanýar.",
  faq: [
    ["Ştrihkod bilen QR Code-yň tapawudy näme?", "QR Code ştrihkodyň görnüşleriniň biri, ýagny 2D ştrihkoddyr. Çyzykly (1D) ştrihkod diňe az sanly nyşany saklaýar we çepden saga okalýar, QR Code bolsa maglumaty iki ugur boýunça saklaýar, şonuň üçin oňa salgy, tekst ýa-da WiFi maglumatlary sygýar."],
    ["Ştrihkod harydyň bahasyny saklaýarmy?", "Adatça ýok. Harydyň ştrihkodynda diňe kod bolýar. Harydyň bahasy we ady kassa ulgamynda saklanýar we skanerlenen kod boýunça gözlenip tapylýar."],
    ["Ştrihkod döretmek tölegli bolmalymy?", "Ýok. Ştrihkodyň suratyny mugt döredip bilersiňiz, meselem, I Need Barcode-da. Tölegli hasaba aldyrmaly zat diňe EAN-13 ýaly bölek satuw harytlarynyň ştrihkody üçin GS1 arkaly berilýän resmi belgidir."]
  ],
  body: `
<p>Ştrihkod maglumaty enjamyň okap bilýän nagyşy görnüşinde ýazmagyň usulydyr. Bu nagyş adatça dürli giňlikdäki gara we ak çyzyklardan ýa-da bir inedördülde ýerleşdirilen kiçijik inedördüllerden ybarat bolýar. Skanerlenende bu nagyş ýene-de san ýa-da tekste öwrülýär, meselem, harydyň koduna, iberiş belgisine ýa-da saýtyň salgysyna.</p>
<p>Ony enjam okaýandygy sebäpli, ştrihkod kody el bilen ýazmaga garanyňda has çalt we ýalňyşlyklary juda az bolýar. Şonuň üçin ştrihkodlar kassalarda, ammarlarda, hassahanalarda, biletlerde we hatda iýmit gaplamalarynda hem ulanylýar.</p>

<h2>Ştrihkodyň gysgaça taryhy</h2>
<p>Ştrihkod pikiri 1952-nji ýylda Amerikanyň Birleşen Ştatlarynda Norman Joseph Woodland we Bernard Silver tarapyndan patentlenipdir. Ştrihkod dükanlarda hakyky manyda diňe 1974-nji ýylda ulanylyp başlandy: şonda Ohio ştatyndaky bir supermarketde bir gap çeýnelýän saggyz UPC kody bilen skanerlendi. Şondan bäri ştrihkodlar bütin dünýä ýaýrady we häzir olary GS1 atly standartlar guramasy global derejede dolandyrýar.</p>

<h2>Ştrihkod nähili işleýär?</h2>
<p>Skaner ştrihkody ýagtylandyrýar we ondan serpigen şöhläni okaýar. Garaňky bölekler az ýagtylyk serpikdirýär, açyk bölekler bolsa köp. Bu tapawut 0 we 1 sanlaryň yzygiderliligine öwrülýär, soňra şol ştrihkod görnüşiniň düzgünleri bilen deňeşdirilýär. Köp ştrihkodlarda <strong>barlag sanly belgisi</strong> (check digit) hem bolýar, ýagny öňki sanlardan hasaplanýan iň soňky san. Hasaplamanyň netijesi gabat gelmese, skaner bir ýerde ýalňyşlyk bardygyny bilýär we netijäni kabul etmeýär.</p>
<p>Ştrihkodyň özi adatça diňe kody saklaýar. Harydyň ady ýa-da bahasy ýaly maglumatlar kassa ulgamynda ýa-da maglumatlar bazasynda saklanýar we şol kod boýunça gözlenip tapylýar.</p>

<h2>Köp ulanylýan ştrihkod görnüşleri</h2>
<p>Umuman, ştrihkodlar iki uly topara bölünýär:</p>
<ul>
  <li><strong>1D (çyzykly) ştrihkod</strong>: çepden saga okalýan dik çyzyklardan ybarat. Mysal üçin, bölek satuw harytlary üçin <a href="/?type=ean13">EAN-13</a> we <a href="/?type=upca">UPC-A</a>, şeýle hem logistika we ammarlar üçin <a href="/?type=code128">Code 128</a> we <a href="/?type=code39">Code 39</a>.</li>
  <li><strong>2D ştrihkod</strong>: maglumaty iki ugur boýunça saklaýan inedördül nagyş, şonuň üçin oňa has köp maglumat sygýar. Mysal üçin, <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> we <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Mundan başga-da poçta we eltip bermek, saglygy goraýyş üçin ýörite ştrihkodlar, şeýle hem üpjünçilik zynjyry üçin GS1 standartlary bar. Olaryň tapawutlary barada has jikme-jik maglumaty <a href="/artikel/perbedaan-barcode-1d-dan-2d">1D we 2D ştrihkodlaryň tapawudy</a> atly makalada okap bilersiňiz.</p>

<h2>Ştrihkod näme üçin ulanylýar?</h2>
<ul>
  <li><strong>Bölek satuw</strong>: kassada işi çaltlandyrýar we galyndylary awtomatik hasaba alýar.</li>
  <li><strong>Ammar we eltip bermek</strong>: harytlary we posylkalary bir ýerden beýleki ýere çenli yzarlaýar.</li>
  <li><strong>Biletler we çäreler</strong>: biletiň hakykydygyny bir gezek skanerlemek bilen barlaýar.</li>
  <li><strong>Marketing</strong>: broşýuradaky ýa-da gaplamadaky QR Code adamlary göni saýtyňyza, menýuňyza ýa-da WhatsApp-yňyza alyp barýar.</li>
</ul>

<h2>Ştrihkody özüňiz dörediň</h2>
<p>Ştrihkod döretmek üçin tölegli programma gerek däl. <a href="/">I Need Barcode</a>-da ştrihkod görnüşini saýlaň, maglumatlary giriziň we PNG suraty hökmünde ýükläň. Saýlap boljak 100-den gowrak görnüş bar we olaryň hemmesi hasaba durmazdan mugt.</p>
`
};
