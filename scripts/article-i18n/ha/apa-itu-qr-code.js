// apa-itu-qr-code
module.exports = {
  title: "Mene Ne QR Code kuma Ta Yaya Yake Aiki?",
  desc: "QR Code yana iya ajiye mahaɗi, rubutu, har ma da bayanan WiFi, kuma ana iya karanta shi ko da wani ɓangarensa ya lalace. Ga yadda yake aiki da fa'idodinsa.",
  tags: ["Tushe", "QR Code"],
  coverCaption: "Ana iya yin sikanin QR Code kai tsaye da kyamarar waya.",
  inlineCaption: "Kowane QR Code an gina shi ne da ƙananan akwatuna baƙi da fari.",
  faq: [
    ["Shin QR Code yana iya ƙarewa?", "QR Code na tsaye (static) ba ya taɓa ƙarewa domin bayanansa suna cikin hoton kai tsaye. QR Code mai sauyawa (dynamic) yana iya daina aiki idan sabis ɗin da ke samar da mahaɗinsa ya tsaya ko kuma biyan kuɗin ya ƙare."],
    ["Bayanai nawa QR Code zai iya ajiyewa?", "Mafi girman sigar QR Code tana iya ajiye har lambobi 7,089 ko kusan baiti 2,953. Amma, yawan raguwar bayanai, yawan sauƙin sikanin QR Code."],
    ["Shin QR Code yana karantuwa idan wani ɓangarensa ya lalace?", "I. Saboda gyaran kuskure, QR Code yana karantuwa ko da kusan kashi 7% zuwa 30% nasa ya lalace, ya danganta da matakin gyara L, M, Q, ko H da aka yi amfani da shi."]
  ],
  body: `
<p>QR Code (Quick Response Code) barcode ne na 2D mai siffar murabba'i da aka gina da ƙananan akwatuna baƙi da fari. Ba kamar barcode na layi da ke ɗaukar lambobi kaɗan kawai ba, QR Code yana iya ajiye mahaɗin shafin yanar gizo, dogon rubutu, lambar waya, bayanan tuntuɓa, har ma da bayanan hanyar sadarwar WiFi.</p>
<p>Kamfanin Denso Wave na ƙasar Japan ne ya ƙirƙiro QR Code a shekarar 1994 don bin diddigin kayayyakin motoci a masana'anta. Yanzu ana amfani da QR Code a ko'ina, daga biyan kuɗi ta intanet zuwa menu na gidan abinci, domin ana iya yin sikanin sa kai tsaye da kyamarar waya.</p>

<h2>Sassan QR Code</h2>
<ul>
  <li><strong>Manyan akwatuna uku a kusurwoyi</strong> (finder pattern): suna taimaka wa kyamara ta gano QR Code kuma ta san alƙiblarsa, don haka QR Code yana karantuwa ko da an yi sikanin sa a karkace ko a juye.</li>
  <li><strong>Tsarin daidaitawa</strong> (alignment pattern): ƙaramin akwati da ke taimakawa wajen karanta QR Code da ya lanƙwasa ko ake gani daga gefe.</li>
  <li><strong>Yankin bayanai</strong>: ƙananan akwatuna da ke ɗauke da bayanan da kuka ajiye.</li>
  <li><strong>Yankin shiru</strong> (quiet zone): fili mara komai a kewayen QR Code don a sauƙaƙe raba shi da bango.</li>
</ul>

<h2>Bayanai nawa zai iya ajiyewa?</h2>
<p>QR Code yana da sigogin girma guda 40. Mafi girman sigar tana iya ajiye har lambobi 7,089 ko kusan baiti 2,953 na bayanai. A aikace, yawan raguwar bayanan da aka ajiye, yawan girman akwatunan, kuma yawan sauƙin sikanin QR Code. Saboda haka, gajeren mahaɗi ya fi dogon mahaɗi sosai kyau.</p>

<h2>Yana karantuwa ko da ya lalace</h2>
<p>QR Code yana amfani da gyaran kuskure (error correction). Akwai matakai huɗu:</p>
<ul>
  <li><strong>L</strong>: ana iya dawo da bayanai idan kusan kashi 7% na QR Code ya lalace.</li>
  <li><strong>M</strong>: kusan kashi 15%. Wannan zaɓi ne na gama-gari kuma mai daidaito.</li>
  <li><strong>Q</strong>: kusan kashi 25%.</li>
  <li><strong>H</strong>: kusan kashi 30%, ya dace da QR Code da za a saka masa tambari ko za a buga a wurin da yake saurin ƙazanta.</li>
</ul>
<p>Yawan hauhawar matakin gyaran, yawan akwatunan da ake buƙata, don haka tsarin QR Code yana bayyana a matse sosai.</p>

<h2>Me za a iya ajiyewa a cikin QR Code?</h2>
<ul>
  <li>Mahaɗin shafin yanar gizo, shagon intanet, ko fom.</li>
  <li>Bayanan WiFi, ta yadda baƙi za su iya haɗawa ba tare da rubuta kalmar sirri ba. Duba jagorar <a href="/artikel/cara-membuat-qr-code-wifi">QR Code na WiFi</a>.</li>
  <li>Katin kasuwanci na dijital (vCard), imel, SMS, da hira ta WhatsApp.</li>
  <li>Wuri a taswira da jadawalin taro.</li>
</ul>

<h2>QR Code na tsaye da mai sauyawa</h2>
<p>QR Code da aka ƙirƙira kai tsaye daga bayanai ana kiransa <strong>QR Code na tsaye</strong>: abin da ke cikinsa yana cikin hoton kuma ba za a iya canza shi ba, amma kuma ba ya taɓa ƙarewa. QR Code <strong>mai sauyawa</strong> kuwa yana ɗauke da gajeren mahaɗi mallakar wani sabis wanda daga baya yake tura mutum zuwa inda kuke so; ana iya canza inda yake zuwa, amma QR Code zai mutu idan sabis ɗin ya tsaya. Ga yawancin buƙatu, QR Code na tsaye ya isa kuma ya fi aminci a dogon lokaci.</p>

<p>Kuna son gwadawa? Ku ƙirƙiri <a href="/?type=qrcode">QR Code kyauta</a> yanzu, ko ku karanta <a href="/artikel/cara-membuat-qr-code-gratis">yadda ake ƙirƙirar QR Code a matakai 3</a>.</p>
`
};
