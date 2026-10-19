// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "Tofauti ya Barcode ya 1D na 2D: Ipi Unayoihitaji?",
  desc: "Barcode ya mistari na QR Code zote ni barcode, lakini matumizi yake ni tofauti. Linganisha uwezo wa kuhifadhi, njia ya kusoma, na mifano ya matumizi yake.",
  tags: ["Misingi", "Barcode"],
  coverCaption: "Kisomaji cha mkononi ghalani husoma barcode za 1D na 2D.",
  inlineCaption: "Lebo za usafirishaji kwa kawaida hutumia barcode ya mistari.",
  faq: [
    ["Je, kisomaji cha kaunta ya malipo kinaweza kusoma QR Code?", "Si vyote. Kisomaji cha leza cha 1D husoma barcode ya mistari tu. Kwa QR Code kunahitajika kisomaji cha 2D kinachotumia kamera au kamera ya simu."],
    ["Barcode ipi ni ndogo zaidi?", "Data Matrix ni miongoni mwa barcode za 2D zinazoweza kuchapishwa kwa udogo sana, hivyo mara nyingi hutumika kwenye vipuri vya kielektroniki, vifaa vya matibabu, na lebo za dawa."],
    ["Je, ninaweza kutumia QR Code badala ya EAN-13 kwenye bidhaa za rejareja?", "Ili kuuzwa kwenye maduka ya rejareja, bidhaa bado inahitaji EAN-13 au UPC iliyosajiliwa. QR Code inaweza kuongezwa kwenye kifungashio kama nyongeza, kwa mfano kwa taarifa za bidhaa au matangazo."]
  ],
  body: `
<p>Unapotengeneza barcode, swali la kwanza linalojitokeza kwa kawaida ni: nitumie barcode ya mistari au QR Code? Zote mbili huitwa barcode, lakini njia ya kuhifadhi data ni tofauti hivyo matumizi yake pia ni tofauti.</p>

<h2>Barcode ya 1D (ya mstari)</h2>
<p>Barcode ya 1D ni barcode yenye mistari wima. Data huhifadhiwa kwa upande mmoja, yaani kutoka kushoto kwenda kulia. Mifano inayojulikana zaidi ni <a href="/?type=ean13">EAN-13</a> kwenye vifungashio vya bidhaa na <a href="/?type=code128">Code 128</a> kwenye lebo za usafirishaji.</p>
<ul>
  <li>Uwezo mdogo wa kuhifadhi, kwa kawaida herufi kumi na kidogo hadi makumi kadhaa.</li>
  <li>Inaweza kusomwa na visomaji vya leza vya kaunta za malipo ambavyo ni vya bei nafuu na vya haraka sana.</li>
  <li>Inafaa kwa misimbo ya bidhaa, nambari tambulishi, na nambari za ufuatiliaji wa mizigo.</li>
</ul>

<h2>Barcode ya 2D</h2>
<p>Barcode ya 2D huhifadhi data kwa pande mbili, kwa ubavu na kwenda chini, hivyo inabeba data nyingi zaidi. Mifano yake ni <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, na <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Uwezo mkubwa wa kuhifadhi, kuanzia makumi hadi maelfu ya herufi.</li>
  <li>Inaweza kusomwa na kamera ya simu kutoka pande mbalimbali.</li>
  <li>Ina urekebishaji wa makosa, hivyo husomeka hata kama sehemu yake imeharibika.</li>
  <li>Inaweza kutengenezwa ndogo sana, kwa mfano Data Matrix kwenye vipuri vya kielektroniki.</li>
</ul>

<h2>Ulinganisho mfupi</h2>
<table>
  <thead><tr><th></th><th>Barcode ya 1D</th><th>Barcode ya 2D</th></tr></thead>
  <tbody>
    <tr><td>Umbo</td><td>Mistari wima</td><td>Visanduku/nukta ndani ya mraba</td></tr>
    <tr><td>Uwezo</td><td>Mdogo</td><td>Mkubwa</td></tr>
    <tr><td>Kifaa cha kusoma</td><td>Kisomaji cha leza au kamera</td><td>Kamera au kisomaji cha 2D</td></tr>
    <tr><td>Kustahimili uharibifu</td><td>Kwa kiasi kidogo</td><td>Ina urekebishaji wa makosa</td></tr>
    <tr><td>Mifano</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Utumie ipi na wakati gani?</h2>
<ul>
  <li><strong>Bidhaa zinazouzwa madukani au kwenye maduka madogo</strong>: tumia EAN-13 rasmi kutoka GS1. Tazama <a href="/artikel/cara-mendapatkan-barcode-ean-13">jinsi ya kupata barcode ya EAN-13</a>.</li>
  <li><strong>Lebo za ghala, rafu, au usafirishaji</strong>: Code 128 ni chaguo la kawaida kwa sababu ni fupi na inaauni herufi pamoja na tarakimu.</li>
  <li><strong>Viungo, menyu, WiFi, au mawasiliano kwa wateja</strong>: QR Code, kwa sababu inaweza kusomwa moja kwa moja kwa kamera ya simu.</li>
  <li><strong>Lebo ndogo sana</strong>: Data Matrix.</li>
  <li><strong>Vitambulisho, tiketi za ndege, au nyaraka</strong>: PDF417 au Aztec.</li>
</ul>
<p>Aina zote zilizo hapo juu unaweza kuzitengeneza bure kwenye <a href="/">I Need Barcode</a>. Ikiwa bado una shaka, anza na QR Code kwa mahitaji ya wateja na Code 128 kwa mahitaji ya ndani.</p>
`
};
