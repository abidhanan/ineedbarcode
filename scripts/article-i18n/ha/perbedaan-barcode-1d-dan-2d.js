// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Bambancin Barcode na 1D da 2D: Wanne Kuke Buƙata?",
  desc: "Barcode na layi da QR Code duka barcode ne, amma amfaninsu ya bambanta. Ku kwatanta iya ɗaukar bayanai, hanyar sikani, da misalan amfaninsu.",
  tags: ["Tushe", "Barcode"],
  coverCaption: "Na'urar sikan ta hannu a rumbun ajiya tana karanta barcode na 1D da 2D.",
  inlineCaption: "Alamomin jigilar kaya yawanci suna amfani da barcode na layi.",
  faq: [
    ["Shin na'urar sikan ta wurin biyan kuɗi tana iya karanta QR Code?", "Ba duka ba. Na'urar sikan ta laser ta 1D tana karanta barcode na layi kawai. Ga QR Code ana buƙatar na'urar sikan ta 2D mai amfani da kyamara ko kyamarar waya."],
    ["Wane barcode ne ya fi ƙanƙanta?", "Data Matrix yana cikin barcode na 2D da za a iya buga su ƙanana sosai, don haka ana yawan amfani da shi a kan kayan lantarki, kayan aikin lafiya, da alamomin magani."],
    ["Shin zan iya amfani da QR Code maimakon EAN-13 a kan kayan sayarwa?", "Don a sayar a shagunan sayarwa, kaya yana buƙatar EAN-13 ko UPC da aka yi wa rajista. Ana iya ƙara QR Code a kan kwalin a matsayin ƙari, misali don bayanan kaya ko tallatawa."]
  ],
  body: `
<p>Lokacin ƙirƙirar barcode, tambaya ta farko da yawanci ke tasowa ita ce: barcode na layi zan yi amfani da shi ko QR Code? Duka biyun ana kiransu barcode, amma hanyar ajiye bayanansu ta bambanta, don haka amfaninsu ma ya bambanta.</p>

<h2>Barcode na 1D (na layi)</h2>
<p>Barcode na 1D barcode ne mai layuka a tsaye. Ana ajiye bayanai a hanya ɗaya, wato daga hagu zuwa dama. Misalan da aka fi sani su ne <a href="/?type=ean13">EAN-13</a> a kan kwalayen kaya da <a href="/?type=code128">Code 128</a> a kan alamomin jigilar kaya.</p>
<ul>
  <li>Ƙaramin iya ɗaukar bayanai, yawanci haruffa goma sha wani abu zuwa 'yan dozin.</li>
  <li>Na'urorin sikan na laser na wuraren biyan kuɗi masu araha da sauri sosai suna iya karanta shi.</li>
  <li>Ya dace da lambobin kaya, lambobin jeri (serial), da lambobin bin diddigin kaya.</li>
</ul>

<h2>Barcode na 2D</h2>
<p>Barcode na 2D yana ajiye bayanai a hanyoyi biyu, gefe da ƙasa, don haka yana ɗaukar abubuwa da yawa fiye da haka. Misalansu sun haɗa da <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, da <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Babban iya ɗaukar bayanai, daga 'yan dozin zuwa dubban haruffa.</li>
  <li>Kyamarar waya tana iya yin sikanin sa daga ɓangarori daban-daban.</li>
  <li>Yana da gyaran kuskure, don haka yana karantuwa ko da wani ɓangarensa ya lalace.</li>
  <li>Ana iya yin sa ƙarami sosai, misali Data Matrix a kan kayan lantarki.</li>
</ul>

<h2>Taƙaitaccen kwatance</h2>
<table>
  <thead><tr><th></th><th>Barcode na 1D</th><th>Barcode na 2D</th></tr></thead>
  <tbody>
    <tr><td>Siffa</td><td>Layuka a tsaye</td><td>Akwatuna/ɗigogi a cikin murabba'i</td></tr>
    <tr><td>Iya ɗaukar bayanai</td><td>Ƙarami</td><td>Babba</td></tr>
    <tr><td>Na'urar sikani</td><td>Na'urar sikan ta laser ko kyamara</td><td>Kyamara ko na'urar sikan ta 2D</td></tr>
    <tr><td>Juriya ga lalacewa</td><td>Iyakantacce</td><td>Yana da gyaran kuskure</td></tr>
    <tr><td>Misalai</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Yaushe za a yi amfani da wanne?</h2>
<ul>
  <li><strong>Kayan da ake sayarwa a shaguna ko ƙananan kantuna</strong>: ku yi amfani da EAN-13 na hukuma daga GS1. Duba <a href="/artikel/cara-mendapatkan-barcode-ean-13">yadda ake samun barcode na EAN-13</a>.</li>
  <li><strong>Alamomin rumbun ajiya, shiryayye, ko jigilar kaya</strong>: Code 128 zaɓi ne na gama-gari domin yana da matse kuma yana tallafa wa haruffa da lambobi.</li>
  <li><strong>Mahaɗi, menu, WiFi, ko bayanan tuntuɓa ga abokan ciniki</strong>: QR Code, domin ana iya yin sikanin sa kai tsaye da kyamarar waya.</li>
  <li><strong>Alamomi ƙanana sosai</strong>: Data Matrix.</li>
  <li><strong>Katin shaida, tikitin jirgin sama, ko takardu</strong>: PDF417 ko Aztec.</li>
</ul>
<p>Duk nau'o'in da ke sama za ku iya ƙirƙirar su kyauta a <a href="/">I Need Barcode</a>. Idan har yanzu kuna da shakka, ku fara da QR Code don buƙatun abokan ciniki da Code 128 don buƙatun cikin gida.</p>
`
};
