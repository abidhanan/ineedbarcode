// cara-membuat-qr-code-wifi
module.exports = {
  title: "Unsaon Paghimo og QR Code sa WiFi Aron Dili Na Mag-type og Password ang mga Bisita",
  desc: "Ang mga bisita mo-scan lang og QR Code aron makakonektar sa WiFi. Angay kaayo alang sa café, opisina, guesthouse, ug balay. Ania kon unsaon kini paghimo ug pagbutang.",
  tags: ["Giya", "QR Code"],
  coverCaption: "Ang datos sa WiFi gikan sa router matipigan sa usa lang ka QR Code.",
  inlineCaption: "Ang mga bisita sa café makakonektar dayon nga dili na mag-type og password.",
  faq: [
    ["Ma-scan ba sa tanang cellphone ang QR Code sa WiFi?", "Ang built-in nga camera sa iPhone nga adunay iOS 11 pataas ug sa kadaghanan sa cellphone nga adunay Android 10 pataas makabasa niini dayon. Ang mas karaan nga cellphone tingali magkinahanglan og app nga pang-scan og QR."],
    ["Luwas ba ang QR Code sa WiFi?", "Bisan kinsa nga mo-scan sa QR Code makakonektar sa inyong WiFi. Tungod niana, gamita ang guest network ug ayaw ibutang ang QR Code sa pribadong network sa publikong dapit."],
    ["Unsay angay buhaton kon usbon ang password sa WiFi?", "Paghimo ug i-imprenta pag-usab ang QR Code sa WiFi, tungod kay ang karaan nga QR Code adunay gihapon sa karaan nga password."]
  ],
  body: `
<p>Ang pag-spell sa taas nga password sa WiFi ngadto sa mga bisita kasagaran makalagot, labi na kon adunay dagkong letra, numero, ug simbolo. Gamit ang <strong>QR Code sa WiFi</strong>, itumong lang sa mga bisita ang camera sa ilang cellphone ngadto sa QR Code ug makakonektar dayon sila.</p>

<h2>Unsaon paglihok sa QR Code sa WiFi</h2>
<p>Ang QR Code sa WiFi nagtipig sa ngalan sa network (SSID), klase sa seguridad, ug password sa espesyal nga format nga mailhan sa cellphone, pananglitan <code>WIFI:T:WPA;S:NgalanSaNetwork;P:Password;;</code>. Ang built-in nga camera sa iPhone (iOS 11 pataas) ug sa kadaghanan sa Android (Android 10 pataas) makabasa niini dayon, nga walay dugang nga app.</p>

<h2>Mga lakang sa paghimo</h2>
<ol>
  <li>Ablihi ang <a href="/?type=qrcode">generator sa QR Code</a> ug pilia ang tab nga <strong>WiFi</strong> sa bahin nga Data.</li>
  <li>I-type ang <strong>ngalan sa network</strong> sama gayod sa makita sa listahan sa WiFi, lakip ang dagko ug gagmay nga mga letra.</li>
  <li>I-type ang <strong>password</strong>, unya pilia ang klase sa seguridad. Kadaghanan sa mga router sa balay ug opisina naggamit og WPA/WPA2/WPA3.</li>
  <li>Markahi ang <strong>Hidden network</strong> kon ang ngalan sa inyong WiFi dili makita sa listahan.</li>
  <li>Dugangi og frame nga adunay teksto sama sa "SCAN WIFI" aron mahibaloan sa mga bisita kon para sa unsa kini, unya i-download ang PNG.</li>
</ol>

<h2>Asa kini ibutang?</h2>
<ul>
  <li>Gamay nga kard sa lamesa sa café o restawran.</li>
  <li>Bungbong sa sala, resepsiyon, o kuwarto sa miting sa opisina.</li>
  <li>Kuwarto sa guesthouse, gipapilit duol sa pultahan o sa TV.</li>
  <li>Ilawom nga bahin sa router sa balay, aron sayon nga makakonektar ang mga sakop sa pamilya og bag-ong gadyet.</li>
</ul>

<h2>Mga tip sa seguridad</h2>
<ul>
  <li>Gamita ang <strong>guest network</strong> kon kini gisuportahan sa inyong router, aron ang mga bisita dili moapil sa samang network sa mga kompyuter sa opisina.</li>
  <li>Kon usbon ang password sa WiFi, paghimo ug i-imprenta pag-usab ang QR Code, tungod kay ang karaan nga QR Code adunay sa karaan nga password.</li>
  <li>Ayaw ibutang ang QR Code sa WiFi sa pribadong network sa publikong dapit diin bisan kinsa makakuha og litrato niini.</li>
</ul>

<h2>Kon ang QR Code dili makakonektar</h2>
<p>Susiha pag-usab ang espeling sa ngalan sa network ug password, tungod kay usa lang ka sayop nga letra makapapakyas na sa cellphone sa pagkonektar. Siguroha usab nga ang napiling klase sa seguridad motakdo sa mga setting sa router. Alang sa ubang problema sa pag-scan, basaha ang <a href="/artikel/barcode-tidak-bisa-dipindai">mga hinungdan nganong dili ma-scan ang barcode</a>.</p>
`
};
