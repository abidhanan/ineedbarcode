// cara-membuat-qr-code-wifi
module.exports = {
  title: "Uko Wakora QR Code ya WiFi Kugira ngo Abashyitsi Batandika Ijambobanga",
  desc: "Abashyitsi bakeneye gusa gusikana QR Code kugira ngo bihuze na WiFi. Ibereye amakafe, ibiro, amacumbi, n'ingo. Dore uko mwayikora n'uko mwayishyira ahagaragara.",
  tags: ["Ubuyobozi", "QR Code"],
  coverCaption: "Amakuru ya WiFi ya router ashobora kubikwa muri QR Code imwe.",
  inlineCaption: "Abashyitsi bo muri kafe bashobora guhita bihuza batanditse ijambobanga.",
  faq: [
    ["Ese telefoni zose zishobora gusikana QR Code ya WiFi?", "Kamera isanzwe ya iPhone ifite iOS 11 kuzamura na Android nyinshi zifite Android 10 kuzamura zishobora kuyisoma mu buryo butaziguye. Telefoni za kera zishobora gukenera porogaramu yo gusikana QR."],
    ["Ese QR Code ya WiFi iratekanye?", "Umuntu wese usikanye iyo QR Code ashobora kwihuza na WiFi yanyu. Kubera iyo mpamvu, mukoreshe umuyoboro w'abashyitsi kandi ntimushyire QR Code y'umuyoboro bwite ahantu hahurira abantu benshi."],
    ["Ni iki gikwiye gukorwa iyo ijambobanga rya WiFi rihinduwe?", "Mukore kandi mucape bundi bushya QR Code ya WiFi, kuko QR Code ya kera iracyarimo ijambobanga rya kera."]
  ],
  body: `
<p>Gutondagura ijambobanga rirerire rya WiFi ku bashyitsi akenshi biruhije, cyane cyane iyo ririmo inyuguti nkuru, imibare, n'ibimenyetso. Hamwe na <strong>QR Code ya WiFi</strong>, abashyitsi bakeneye gusa kwerekeza kamera ya telefoni kuri QR Code hanyuma bagahita bihuza.</p>

<h2>Uko QR Code ya WiFi ikora</h2>
<p>QR Code ya WiFi ibika izina ry'umuyoboro (SSID), ubwoko bw'umutekano, n'ijambobanga mu buryo bwihariye bumenywa na telefoni, urugero <code>WIFI:T:WPA;S:NamaJaringan;P:Sandi;;</code>. Kamera isanzwe ya iPhone (iOS 11 kuzamura) na Android nyinshi (Android 10 kuzamura) zishobora kuyisoma mu buryo butaziguye, nta yindi porogaramu.</p>

<h2>Intambwe zo kuyikora</h2>
<ol>
  <li>Mufungure <a href="/?type=qrcode">igikoresho cyo gukora QR Code</a> hanyuma muhitemo tabu ya <strong>WiFi</strong> mu gice cyo Kuzuza amakuru.</li>
  <li>Mwandike <strong>izina ry'umuyoboro</strong> neza uko rigaragara ku rutonde rwa WiFi, harimo inyuguti nkuru n'into.</li>
  <li>Mwandike <strong>ijambobanga</strong>, hanyuma muhitemo ubwoko bw'umutekano. Router nyinshi zo mu ngo no mu biro zikoresha WPA/WPA2/WPA3.</li>
  <li>Muhitemo <strong>Umuyoboro uhishe</strong> niba izina rya WiFi yanyu ritagaragara ku rutonde.</li>
  <li>Mwongereho ikadiri yanditseho urugero "SCAN WIFI" kugira ngo abashyitsi bamenye icyo ikora, hanyuma mumanure PNG.</li>
</ol>

<h2>Iyishyirwa he?</h2>
<ul>
  <li>Akarita gato ku meza ya kafe cyangwa resitora.</li>
  <li>Ku rukuta rw'icyumba cy'abashyitsi, ku kwakira abantu, cyangwa mu cyumba cy'inama cy'ibiro.</li>
  <li>Mu byumba by'amacumbi, ifashe hafi y'urugi cyangwa televiziyo.</li>
  <li>Munsi ya router mu rugo, kugira ngo umuryango uhuze byoroshye ibikoresho bishya.</li>
</ul>

<h2>Inama z'umutekano</h2>
<ul>
  <li>Mukoreshe <strong>umuyoboro w'abashyitsi</strong> (guest network) niba router yanyu ibishyigikira, kugira ngo abashyitsi batinjira mu muyoboro umwe na mudasobwa z'ibiro.</li>
  <li>Niba ijambobanga rya WiFi rihinduwe, mukore kandi mucape bundi bushya QR Code yaryo, kuko QR Code ya kera izaba irimo ijambobanga rya kera.</li>
  <li>Ntimushyire QR Code ya WiFi y'umuyoboro bwite ahantu hahurira abantu benshi aho umuntu uwo ari we wese yayifotora.</li>
</ul>

<h2>Niba QR Code idahuza</h2>
<p>Mwongere mugenzure imyandikire y'izina ry'umuyoboro n'ijambobanga, kuko inyuguti imwe itari yo ituma telefoni inanirwa kwihuza. Mwemeze kandi ko ubwoko bw'umutekano bwatoranyijwe buhuye n'igenamiterere rya router. Ku bindi bibazo byo gusikana, musome <a href="/artikel/barcode-tidak-bisa-dipindai">impamvu zituma barcode idasikanwa</a>.</p>
`
};
