// apa-itu-qr-code
module.exports = {
  title: "Hvað er QR Code og hvernig virkar það?",
  desc: "QR Code getur geymt tengla, texta og jafnvel WiFi-upplýsingar og er samt læsilegt þótt hluti þess sé skemmdur. Svona virkar það og þetta eru kostir þess.",
  tags: ["Grunnatriði", "QR Code"],
  coverCaption: "Hægt er að skanna QR Code beint með myndavél símans.",
  inlineCaption: "Hvert QR Code er sett saman úr litlum svörtum og hvítum ferningum.",
  faq: [
    ["Getur QR Code runnið út?", "Kyrrstætt QR Code rennur aldrei út því gögnin eru felld beint inn í myndina. Breytilegt QR Code getur hætt að virka ef þjónustan sem býður upp á tengilinn hættir eða áskriftin rennur út."],
    ["Hversu mikið af gögnum getur QR Code geymt?", "Stærsta útgáfa QR Code getur geymt allt að 7.089 tölustafi eða um 2.953 bæti. Því minni gögn, því auðveldara er þó að skanna QR Code."],
    ["Er QR Code enn læsilegt ef hluti þess er skemmdur?", "Já. Þökk sé villuleiðréttingu er QR Code læsilegt þótt um 7% til 30% þess séu skemmd, allt eftir því hvaða leiðréttingarstig, L, M, Q eða H, er notað."]
  ],
  body: `
<p>QR Code (Quick Response Code) er ferhyrnt 2D-strikamerki sem er sett saman úr litlum svörtum og hvítum ferningum. Ólíkt línulegu strikamerki, sem geymir aðeins rúmlega tug tölustafa, getur QR Code geymt tengil á vefsíðu, langan texta, símanúmer, tengiliði og jafnvel upplýsingar um WiFi-net.</p>
<p>QR Code var þróað árið 1994 af japanska fyrirtækinu Denso Wave til að rekja varahluti í bíla í verksmiðjum. Í dag er QR Code notað alls staðar, allt frá stafrænum greiðslum til matseðla á veitingastöðum, því hægt er að skanna það beint með myndavél símans.</p>

<h2>Hlutar QR Code</h2>
<ul>
  <li><strong>Þrír stórir ferningar í hornunum</strong> (finder pattern): hjálpa myndavélinni að finna QR Code og átta sig á stefnu þess, svo það sé læsilegt þótt það sé skannað á ská eða á hvolfi.</li>
  <li><strong>Jöfnunarmynstur</strong> (alignment pattern): lítill ferningur sem hjálpar til við að lesa QR Code sem er bogið eða sést frá horni.</li>
  <li><strong>Gagnasvæði</strong>: litlu ferningarnir sem innihalda upplýsingarnar sem þú geymir.</li>
  <li><strong>Kyrrðarsvæði</strong> (quiet zone): auða svæðið umhverfis QR Code svo auðvelt sé að greina það frá bakgrunninum.</li>
</ul>

<h2>Hversu mikið af gögnum rúmar það?</h2>
<p>QR Code er til í 40 stærðarútgáfum. Stærsta útgáfan getur geymt allt að 7.089 tölustafi eða um 2.953 bæti af gögnum. Í reynd gildir að því minni gögn sem eru geymd, því stærri verða ferningarnir og því auðveldara er að skanna QR Code. Þess vegna er stuttur tengill betri en mjög langur tengill.</p>

<h2>Læsilegt þótt það sé skemmt</h2>
<p>QR Code notar villuleiðréttingu (error correction). Stigin eru fjögur:</p>
<ul>
  <li><strong>L</strong>: hægt er að endurheimta gögnin ef um 7% af QR Code eru skemmd.</li>
  <li><strong>M</strong>: um 15%. Þetta er algengt og jafnvægt val.</li>
  <li><strong>Q</strong>: um 25%.</li>
  <li><strong>H</strong>: um 30%, hentar fyrir QR Code sem á að fá merki (lógó) eða verður prentað á stað þar sem það óhreinkast auðveldlega.</li>
</ul>
<p>Því hærra sem leiðréttingarstigið er, því fleiri ferninga þarf, svo mynstur QR Code verður þéttara.</p>

<h2>Hvað er hægt að geyma í QR Code?</h2>
<ul>
  <li>Tengla á vefsíður, netverslanir eða eyðublöð.</li>
  <li>WiFi-upplýsingar, svo gestir geti tengst án þess að slá inn lykilorð. Sjá leiðbeiningar um <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a>.</li>
  <li>Stafræn nafnspjöld (vCard), tölvupóst, SMS og WhatsApp-spjall.</li>
  <li>Staðsetningu á korti og tímasetningu viðburða.</li>
</ul>

<h2>Kyrrstætt og breytilegt QR Code</h2>
<p>QR Code sem er búið til beint út frá gögnunum kallast <strong>kyrrstætt QR Code</strong>: innihaldið er fellt inn í myndina og er ekki hægt að breyta, en það rennur heldur aldrei út. <strong>Breytilegt</strong> QR Code inniheldur stuttan tengil frá þjónustu sem síðan vísar áfram á áfangastaðinn þinn; hægt er að breyta áfangastaðnum, en QR Code hættir að virka ef þjónustan hættir. Fyrir flestar þarfir dugar kyrrstætt QR Code og það er öruggara til lengri tíma.</p>

<p>Viltu prófa? Búðu til <a href="/?type=qrcode">ókeypis QR Code</a> núna eða lestu <a href="/artikel/cara-membuat-qr-code-gratis">hvernig á að búa til QR Code í 3 skrefum</a>.</p>
`
};
