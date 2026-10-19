// cara-membuat-qr-code-wifi
module.exports = {
  title: "Kako ustvariti QR Code za WiFi, da gostom ne bo treba vnašati gesla",
  desc: "Gostje le skenirajo QR Code in so povezani z WiFi. Idealno za kavarne, pisarne, nastanitve in domove. Tako ga ustvarite in namestite.",
  tags: ["Vodniki", "QR Code"],
  coverCaption: "Podatke o WiFi iz usmerjevalnika lahko shranite v en sam QR Code.",
  inlineCaption: "Gostje kavarne se lahko takoj povežejo, brez vnašanja gesla.",
  faq: [
    ["Ali lahko vsi telefoni skenirajo QR Code za WiFi?", "Vgrajena kamera iPhona z iOS 11 ali novejšim in večine telefonov z Androidom 10 ali novejšim ga prebere neposredno. Starejši telefoni bodo morda potrebovali aplikacijo za skeniranje QR."],
    ["Ali je QR Code za WiFi varen?", "Kdorkoli skenira ta QR Code, se lahko poveže z vašim WiFi. Zato uporabljajte omrežje za goste in QR Code zasebnega omrežja ne nameščajte na javnih mestih."],
    ["Kaj storiti, če zamenjam geslo za WiFi?", "Ustvarite in znova natisnite QR Code za WiFi, ker stari QR Code še vedno vsebuje staro geslo."]
  ],
  body: `
<p>Črkovanje dolgega gesla za WiFi gostom je pogosto zamudno, zlasti če vsebuje velike črke, številke in simbole. S <strong>QR Code za WiFi</strong> gostje le usmerijo kamero telefona v QR Code in so takoj povezani.</p>

<h2>Kako deluje QR Code za WiFi</h2>
<p>QR Code za WiFi hrani ime omrežja (SSID), vrsto zaščite in geslo v posebni obliki, ki jo telefoni prepoznajo, na primer <code>WIFI:T:WPA;S:ImeOmrezja;P:Geslo;;</code>. Vgrajena kamera iPhona (iOS 11 ali novejši) in večine telefonov z Androidom (Android 10 ali novejši) ga prebere neposredno, brez dodatne aplikacije.</p>

<h2>Koraki izdelave</h2>
<ol>
  <li>Odprite <a href="/?type=qrcode">generator QR Code</a> in v razdelku Podatki izberite zavihek <strong>WiFi</strong>.</li>
  <li>Vnesite <strong>ime omrežja</strong> natanko tako, kot je prikazano na seznamu WiFi, vključno z velikimi in malimi črkami.</li>
  <li>Vnesite <strong>geslo</strong> in izberite vrsto zaščite. Večina domačih in pisarniških usmerjevalnikov uporablja WPA/WPA2/WPA3.</li>
  <li>Označite <strong>Skrito omrežje</strong>, če ime vašega WiFi ni prikazano na seznamu.</li>
  <li>Dodajte okvir z napisom, na primer „SCAN WIFI“, da gostje vedo, čemu je namenjen, nato prenesite PNG.</li>
</ol>

<h2>Kam ga namestiti?</h2>
<ul>
  <li>Majhna kartica na mizi v kavarni ali restavraciji.</li>
  <li>Stena dnevne sobe, recepcije ali pisarniške sejne sobe.</li>
  <li>Soba v nastanitvi, nalepljen ob vratih ali televizorju.</li>
  <li>Spodnja stran usmerjevalnika doma, da družina zlahka poveže nove naprave.</li>
</ul>

<h2>Varnostni nasveti</h2>
<ul>
  <li>Uporabljajte <strong>omrežje za goste</strong> (guest network), če ga vaš usmerjevalnik podpira, da gostje ne vstopijo v isto omrežje kot pisarniški računalniki.</li>
  <li>Če zamenjate geslo za WiFi, ustvarite in znova natisnite QR Code, ker bo stari QR Code vseboval staro geslo.</li>
  <li>QR Code za WiFi zasebnega omrežja ne nameščajte na javnih mestih, kjer ga lahko kdorkoli fotografira.</li>
</ul>

<h2>Če se prek QR Code ni mogoče povezati</h2>
<p>Znova preverite črkovanje imena omrežja in gesla, saj že ena napačna črka povzroči, da se telefon ne poveže. Prepričajte se tudi, da izbrana vrsta zaščite ustreza nastavitvam usmerjevalnika. Za druge težave s skeniranjem preberite <a href="/artikel/barcode-tidak-bisa-dipindai">razloge, zakaj črtne kode ni mogoče skenirati</a>.</p>
`
};
