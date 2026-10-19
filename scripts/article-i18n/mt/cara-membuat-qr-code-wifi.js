// cara-membuat-qr-code-wifi
module.exports = {
  title: "Kif Toħloq QR Code tal-WiFi biex il-Mistednin Ma Jkollhomx Għalfejn Jittajpjaw il-Password",
  desc: "Il-mistednin ikollhom biss jiskenjaw QR Code biex jikkonnettjaw mal-WiFi. Adattat għal kafetteriji, uffiċċji, akkomodazzjoni u djar. Hawn kif toħolqu u fejn tpoġġih.",
  tags: ["Gwida", "QR Code"],
  coverCaption: "Id-data tal-WiFi tar-router tista' tinħażen f'QR Code wieħed.",
  inlineCaption: "Il-mistednin tal-kafetterija jistgħu jikkonnettjaw minnufih mingħajr ma jittajpjaw il-password.",
  faq: [
    ["Il-mowbajls kollha jistgħu jiskenjaw QR Code tal-WiFi?", "Il-kamera integrata tal-iPhone b'iOS 11 jew iktar ġdid u l-biċċa l-kbira tal-mowbajls b'Android 10 jew iktar ġdid jistgħu jaqrawh direttament. Mowbajls eqdem jista' jkollhom bżonn app għall-iskenjar tal-QR."],
    ["QR Code tal-WiFi huwa sikur?", "Kull min jiskenja dak il-QR Code jista' jikkonnettja mal-WiFi tiegħek. Għalhekk, uża netwerk għall-mistednin u tpoġġix QR Code ta' netwerk privat f'post pubbliku."],
    ["X'għandi nagħmel jekk il-password tal-WiFi tinbidel?", "Oħloq u stampa QR Code tal-WiFi ġdid, għax il-QR Code l-qadim għadu fih il-password il-qadima."]
  ],
  body: `
<p>Li tispelli password twila tal-WiFi lill-mistednin spiss ikun ta' fastidju, speċjalment jekk ikun fiha ittri kbar, numri u simboli. B'<strong>QR Code tal-WiFi</strong>, il-mistednin ikollhom biss jippuntaw il-kamera tal-mowbajl lejn il-QR Code u jkunu kkonnettjati minnufih.</p>

<h2>Kif jaħdem il-QR Code tal-WiFi</h2>
<p>QR Code tal-WiFi jaħżen l-isem tan-netwerk (SSID), it-tip ta' sigurtà u l-password f'format speċjali li l-mowbajls jagħrfu, pereżempju <code>WIFI:T:WPA;S:NamaJaringan;P:Sandi;;</code>. Il-kamera integrata tal-iPhone (iOS 11 jew iktar ġdid) u l-biċċa l-kbira tal-mowbajls Android (Android 10 jew iktar ġdid) jistgħu jaqrawh direttament, mingħajr apps addizzjonali.</p>

<h2>Il-passi biex toħolqu</h2>
<ol>
  <li>Iftaħ il-<a href="/?type=qrcode">ġeneratur tal-QR Code</a> u agħżel it-tab <strong>WiFi</strong> fit-taqsima Data.</li>
  <li>Ittajpja <strong>l-isem tan-netwerk</strong> eżattament kif jidher fil-lista tal-WiFi, inklużi l-ittri kbar u żgħar.</li>
  <li>Ittajpja l-<strong>password</strong>, u mbagħad agħżel it-tip ta' sigurtà. Il-biċċa l-kbira tar-routers tad-dar u tal-uffiċċju jużaw WPA/WPA2/WPA3.</li>
  <li>Immarka <strong>Netwerk moħbi</strong> jekk l-isem tal-WiFi tiegħek ma jidhirx fil-lista.</li>
  <li>Żid qafas b'test bħal "SCAN WIFI" biex il-mistednin ikunu jafu għal xiex inhu, u mbagħad niżżel il-PNG.</li>
</ol>

<h2>Fejn għandek tpoġġih?</h2>
<ul>
  <li>Karta żgħira fuq il-mejda tal-kafetterija jew tar-ristorant.</li>
  <li>Il-ħajt tas-sala tal-mistednin, tar-riċeviment jew tal-kamra tal-laqgħat tal-uffiċċju.</li>
  <li>Il-kmamar tal-akkomodazzjoni, imwaħħal ħdejn il-bieb jew it-TV.</li>
  <li>Taħt ir-router fid-dar, biex il-familja tkun tista' tikkonnettja apparat ġdid faċilment.</li>
</ul>

<h2>Pariri dwar is-sigurtà</h2>
<ul>
  <li>Uża <strong>netwerk għall-mistednin</strong> (guest network) jekk ir-router tiegħek jappoġġah, biex il-mistednin ma jkunux fuq l-istess netwerk tal-kompjuters tal-uffiċċju.</li>
  <li>Jekk il-password tal-WiFi tinbidel, oħloq u stampa l-QR Code mill-ġdid, għax il-QR Code l-qadim ikun fih il-password il-qadima.</li>
  <li>Tpoġġix QR Code tal-WiFi għal netwerk privat f'post pubbliku fejn kulħadd jista' jieħdu ritratt.</li>
</ul>

<h2>Jekk il-QR Code ma jikkonnettjax</h2>
<p>Erġa' ċċekkja l-ortografija tal-isem tan-netwerk u tal-password, għax ittra waħda ħażina tagħmel li l-mowbajl ma jirnexxilux jikkonnettja. Kun żgur ukoll li t-tip ta' sigurtà magħżul jaqbel mas-settings tar-router. Għal problemi oħra tal-iskenjar, aqra <a href="/artikel/barcode-tidak-bisa-dipindai">għaliex barcode ma jiġix skenjat</a>.</p>
`
};
