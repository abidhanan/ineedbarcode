// cara-membuat-qr-code-wifi
module.exports = {
  title: "Paano Gumawa ng WiFi QR Code Para Hindi Na Mag-type ng Password ang mga Bisita",
  desc: "I-scan lang ng mga bisita ang QR Code para makakonekta sa WiFi. Bagay ito sa café, opisina, paupahang tuluyan, at bahay. Ganito ito gawin at ilagay.",
  tags: ["Gabay", "QR Code"],
  coverCaption: "Maaaring iimbak sa iisang QR Code ang detalye ng WiFi mula sa router.",
  inlineCaption: "Agad na makakakonekta ang mga bisita sa café nang hindi nagta-type ng password.",
  faq: [
    ["Kaya bang i-scan ng lahat ng cellphone ang WiFi QR Code?", "Direktang nababasa ito ng built-in na camera ng iPhone na may iOS 11 pataas at ng karamihan ng Android 10 pataas. Ang mga lumang cellphone ay maaaring mangailangan ng QR scanner app."],
    ["Ligtas ba ang WiFi QR Code?", "Sinumang mag-scan ng QR Code na iyon ay makakakonekta sa inyong WiFi. Kaya gumamit ng guest network at huwag maglagay ng QR Code ng pribadong network sa pampublikong lugar."],
    ["Ano ang dapat gawin kapag pinalitan ang password ng WiFi?", "Gumawa at mag-print muli ng WiFi QR Code, dahil ang lumang QR Code ay naglalaman pa rin ng lumang password."]
  ],
  body: `
<p>Kadalasang abala ang pag-ispel ng mahabang password ng WiFi sa mga bisita, lalo na kung may malalaking titik, numero, at simbolo. Sa pamamagitan ng <strong>WiFi QR Code</strong>, itututok lang ng mga bisita ang camera ng kanilang cellphone sa QR Code at agad na silang makakakonekta.</p>

<h2>Paano gumagana ang WiFi QR Code</h2>
<p>Iniimbak ng WiFi QR Code ang pangalan ng network (SSID), uri ng seguridad, at password sa isang espesyal na format na kinikilala ng cellphone, halimbawa <code>WIFI:T:WPA;S:PangalanNgNetwork;P:Password;;</code>. Direktang nababasa ito ng built-in na camera ng iPhone (iOS 11 pataas) at ng karamihan ng Android (Android 10 pataas), nang walang karagdagang app.</p>

<h2>Mga hakbang sa paggawa nito</h2>
<ol>
  <li>Buksan ang <a href="/?type=qrcode">QR Code generator</a> at piliin ang tab na <strong>WiFi</strong> sa seksyong Data.</li>
  <li>I-type ang <strong>pangalan ng network</strong> nang eksakto kung paano ito lumalabas sa listahan ng WiFi, kasama ang malalaki at maliliit na titik.</li>
  <li>I-type ang <strong>password</strong>, at piliin ang uri ng seguridad. Karamihan sa mga router sa bahay at opisina ay gumagamit ng WPA/WPA2/WPA3.</li>
  <li>Lagyan ng tsek ang <strong>Nakatagong network</strong> kung hindi lumalabas sa listahan ang pangalan ng inyong WiFi.</li>
  <li>Magdagdag ng frame na may tekstong gaya ng "SCAN WIFI" para malaman ng mga bisita kung para saan ito, at i-download ang PNG.</li>
</ol>

<h2>Saan ito ilalagay?</h2>
<ul>
  <li>Maliit na card sa mesa ng café o restawran.</li>
  <li>Sa dingding ng sala, reception, o meeting room ng opisina.</li>
  <li>Sa kuwarto ng paupahang tuluyan, nakadikit malapit sa pinto o TV.</li>
  <li>Sa ilalim ng router sa bahay, para madaling maikonekta ng pamilya ang mga bagong device.</li>
</ul>

<h2>Mga tip sa seguridad</h2>
<ul>
  <li>Gumamit ng <strong>guest network</strong> kung sinusuportahan ito ng inyong router, para hindi mapunta ang mga bisita sa parehong network ng mga computer sa opisina.</li>
  <li>Kapag pinalitan ang password ng WiFi, gumawa at mag-print muli ng QR Code, dahil ang lumang QR Code ay maglalaman ng lumang password.</li>
  <li>Huwag maglagay ng WiFi QR Code para sa pribadong network sa pampublikong lugar na maaaring kunan ng litrato ng kahit sino.</li>
</ul>

<h2>Kung hindi kumokonekta ang QR Code</h2>
<p>Suriing muli ang baybay ng pangalan ng network at password, dahil ang isang maling titik ay magiging dahilan para hindi makakonekta ang cellphone. Tiyakin din na tugma ang napiling uri ng seguridad sa setting ng router. Para sa iba pang problema sa pag-scan, basahin ang <a href="/artikel/barcode-tidak-bisa-dipindai">mga dahilan kung bakit hindi ma-scan ang barcode</a>.</p>
`
};
