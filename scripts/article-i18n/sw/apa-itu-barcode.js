// apa-itu-barcode
module.exports = {
  title: "Barcode Ni Nini? Maana, Jinsi Inavyofanya Kazi, na Aina Zake",
  desc: "Barcode zipo karibu kwenye kila bidhaa unayonunua. Fahamu jinsi zinavyofanya kazi, historia yake fupi, na aina za barcode zinazotumika zaidi.",
  tags: ["Misingi", "Barcode"],
  coverCaption: "Barcode kwenye kifungashio huhifadhi msimbo wa kipekee wa bidhaa.",
  inlineCaption: "Keshia hutumia kisomaji kusoma barcode kwa kufumba na kufumbua.",
  faq: [
    ["Kuna tofauti gani kati ya barcode na QR Code?", "QR Code ni mojawapo ya aina za barcode, yaani barcode ya 2D. Barcode ya mistari (1D) huhifadhi herufi chache tu na husomwa kutoka kushoto kwenda kulia, ilhali QR Code huhifadhi data kwa pande mbili, hivyo inaweza kubeba kiungo, maandishi, au data ya WiFi."],
    ["Je, barcode huhifadhi bei ya bidhaa?", "Kwa kawaida hapana. Barcode ya bidhaa huwa na msimbo tu. Bei na jina la bidhaa huhifadhiwa kwenye mfumo wa malipo, kisha hutafutwa kwa kutumia msimbo uliosomwa."],
    ["Je, ni lazima kulipia ili kutengeneza barcode?", "Hapana. Picha ya barcode inaweza kutengenezwa bure, kwa mfano kwenye I Need Barcode. Kinachohitaji usajili wa kulipia ni nambari rasmi tu za barcode za bidhaa za rejareja kama EAN-13 kupitia GS1."]
  ],
  body: `
<p>Barcode ni njia ya kuandika data katika muundo unaoweza kusomwa na mashine. Muundo huo kwa kawaida huwa ni mistari myeusi na myeupe yenye upana tofauti, au visanduku vidogo vilivyopangwa ndani ya mraba. Inaposomwa, muundo huo hutafsiriwa tena kuwa nambari au maandishi, kwa mfano msimbo wa bidhaa, nambari ya ufuatiliaji wa mzigo, au anwani ya tovuti.</p>
<p>Kwa sababu husomwa na mashine, barcode ni ya haraka zaidi na yenye makosa machache sana kuliko kuandika msimbo kwa mkono. Ndiyo sababu barcode hutumika kwenye kaunta za malipo, maghala, hospitali, tiketi, hadi vifungashio vya vyakula.</p>

<h2>Historia fupi ya barcode</h2>
<p>Wazo la barcode lilipewa hataza mwaka 1952 na Norman Joseph Woodland na Bernard Silver nchini Marekani. Barcode ilianza kutumika kikamilifu madukani mwaka 1974, pale pakiti ya chingamu iliposomwa katika duka kubwa huko Ohio kwa msimbo wa UPC. Tangu wakati huo, barcode imeenea duniani kote na sasa inasimamiwa kimataifa na shirika la viwango linaloitwa GS1.</p>

<h2>Barcode hufanya kazi vipi?</h2>
<p>Kisomaji humulika barcode kisha husoma mwanga unaoakisiwa. Sehemu nyeusi huakisi mwanga kidogo, na sehemu nyeupe huakisi mwanga mwingi. Tofauti hiyo hubadilishwa kuwa mfululizo wa tarakimu 0 na 1, kisha hulinganishwa na kanuni za aina hiyo ya barcode. Barcode nyingi pia zina <strong>tarakimu ya uthibitisho</strong> (check digit), yaani tarakimu ya mwisho inayokokotolewa kutoka kwa tarakimu zilizotangulia. Ikiwa matokeo ya hesabu hayalingani, kisomaji hutambua kuna kosa na hukataa matokeo hayo.</p>
<p>Barcode yenyewe kwa kawaida huhifadhi msimbo tu. Taarifa kama jina la bidhaa au bei huhifadhiwa kwenye mfumo wa malipo au hifadhidata, kisha hutafutwa kwa kutumia msimbo huo.</p>

<h2>Aina za barcode zinazotumika mara nyingi</h2>
<p>Kwa ujumla barcode zimegawanyika katika makundi mawili makubwa:</p>
<ul>
  <li><strong>Barcode ya 1D (ya mstari)</strong>: ni mistari wima inayosomwa kutoka kushoto kwenda kulia. Mifano yake ni <a href="/?type=ean13">EAN-13</a> na <a href="/?type=upca">UPC-A</a> kwa bidhaa za rejareja, pamoja na <a href="/?type=code128">Code 128</a> na <a href="/?type=code39">Code 39</a> kwa usafirishaji na maghala.</li>
  <li><strong>Barcode ya 2D</strong>: ni muundo wa visanduku unaohifadhi data kwa pande mbili, hivyo inabeba data nyingi zaidi. Mifano yake ni <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, na <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Mbali na hizo, kuna barcode maalum za posta na usafirishaji, za afya, pamoja na viwango vya GS1 kwa mnyororo wa ugavi. Maelezo zaidi kuhusu tofauti zake unaweza kusoma katika makala <a href="/artikel/perbedaan-barcode-1d-dan-2d">Tofauti ya Barcode ya 1D na 2D</a>.</p>

<h2>Barcode hutumika kwa nini?</h2>
<ul>
  <li><strong>Rejareja</strong>: huharakisha malipo na hurekodi akiba ya bidhaa kiotomatiki.</li>
  <li><strong>Maghala na usafirishaji</strong>: hufuatilia bidhaa na vifurushi kutoka sehemu moja hadi nyingine.</li>
  <li><strong>Tiketi na matukio</strong>: huthibitisha uhalali wa tiketi kwa usomaji mmoja tu.</li>
  <li><strong>Masoko</strong>: QR Code kwenye vipeperushi au vifungashio huwapeleka watu moja kwa moja kwenye tovuti, menyu, au WhatsApp yako.</li>
</ul>

<h2>Kutengeneza barcode mwenyewe</h2>
<p>Huhitaji programu ya kulipia ili kutengeneza barcode. Kwenye <a href="/">I Need Barcode</a>, chagua aina ya barcode, jaza data, kisha pakua kama picha ya PNG. Kuna zaidi ya aina 100 za kuchagua, na zote ni bure bila kujisajili.</p>
`
};
