// apa-itu-qr-code
module.exports = {
  title: "QR Code näme we ol nähili işleýär?",
  desc: "QR Code salgyny, teksti we hatda WiFi maglumatlaryny saklap bilýär we bir bölegi zaýalansa-da okalýar. Onuň işleýşi we artykmaçlyklary şeýle.",
  tags: ["Esaslar", "QR Code"],
  coverCaption: "QR Code-y göni telefonyň kamerasy bilen skanerläp bolýar.",
  inlineCaption: "Her bir QR Code kiçijik gara we ak inedördüllerden düzülýär.",
  faq: [
    ["QR Code-yň möhleti geçip bilermi?", "Statik QR Code-yň möhleti hiç haçan geçmeýär, sebäbi onuň maglumaty göni suratyň içinde ýerleşdirilendir. Dinamik QR Code bolsa salgyny berýän hyzmat işini bes etse ýa-da abunalyk tamamlansa, işlemesini bes edip biler."],
    ["QR Code näçe maglumat saklap bilýär?", "QR Code-yň iň uly wersiýasy 7.089 sana ýa-da takmynan 2.953 baýta çenli maglumat saklap bilýär. Ýöne maglumat näçe az bolsa, QR Code-y skanerlemek şonça-da aňsat bolýar."],
    ["QR Code bir bölegi zaýalansa-da okalýarmy?", "Hawa. Ýalňyşlyklary düzetmek mümkinçiligi sebäpli, QR Code takmynan 7%-den 30%-e çenli bölegi zaýalansa-da okalýar; bu ulanylýan L, M, Q ýa-da H düzediş derejesine bagly."]
  ],
  body: `
<p>QR Code (Quick Response Code) kiçijik gara we ak inedördüllerden düzülen, inedördül görnüşli 2D ştrihkoddyr. Diňe on-on bäş töweregi san saklaýan çyzykly ştrihkoddan tapawutlylykda, QR Code saýtyň salgysyny, uzyn teksti, telefon belgisini, kontakty we hatda WiFi ulgamynyň maglumatlaryny saklap bilýär.</p>
<p>QR Code 1994-nji ýylda ýapon kompaniýasy Denso Wave tarapyndan zawodda ulaglaryň ätiýaçlyk şaýlaryny yzarlamak üçin işlenip düzüldi. Häzir QR Code sanly tölegden başlap restoran menýusyna çenli hemme ýerde ulanylýar, sebäbi ony göni telefonyň kamerasy bilen skanerläp bolýar.</p>

<h2>QR Code-yň bölekleri</h2>
<ul>
  <li><strong>Burçlardaky üç sany uly inedördül</strong> (finder pattern): kamera QR Code-y tapmaga we onuň ugruny anyklamaga kömek edýär, şonuň üçin QR Code gyşyk ýa-da tersine skanerlense-de okalýar.</li>
  <li><strong>Deňleşdiriji nagyş</strong> (alignment pattern): epilen ýa-da burçdan görünýän QR Code-y okamaga kömek edýän kiçi inedördül.</li>
  <li><strong>Maglumat meýdany</strong>: Siziň saklaýan maglumatyňyzy öz içine alýan kiçijik inedördüller.</li>
  <li><strong>Asuda zona</strong> (quiet zone): QR Code-y fondan aňsat aýyrmak üçin onuň daş-töweregindäki boş ýer.</li>
</ul>

<h2>Näçe maglumat saklap bilýär?</h2>
<p>QR Code-yň 40 sany ölçeg wersiýasy bar. Iň uly wersiýasy 7.089 sana ýa-da takmynan 2.953 baýt maglumata çenli saklap bilýär. Amalda, saklanýan maglumat näçe az bolsa, inedördüller şonça-da uly bolýar we QR Code-y skanerlemek aňsatlaşýar. Şonuň üçin gysga salgy juda uzyn salgydan has gowudyr.</p>

<h2>Zaýalansa-da okalýar</h2>
<p>QR Code ýalňyşlyklary düzetmek (error correction) usulyny ulanýar. Onuň dört derejesi bar:</p>
<ul>
  <li><strong>L</strong>: QR Code-yň takmynan 7%-i zaýalansa-da, maglumaty dikeldip bolýar.</li>
  <li><strong>M</strong>: takmynan 15%. Bu umumy we deňagramly saýlawdyr.</li>
  <li><strong>Q</strong>: takmynan 25%.</li>
  <li><strong>H</strong>: takmynan 30%, logotip goşuljak ýa-da aňsat hapalanýan ýerde çap ediljek QR Code üçin amatly.</li>
</ul>
<p>Düzediş derejesi näçe ýokary bolsa, şonça-da köp inedördül gerek bolýar, şonuň üçin QR Code-yň nagyşy has dykyz görünýär.</p>

<h2>QR Code-da näme saklap bolýar?</h2>
<ul>
  <li>Saýtyň, onlaýn dükanyň ýa-da formanyň salgysy.</li>
  <li>WiFi maglumatlary, şeýlelikde myhmanlar açar sözüni ýazmazdan birigip bilýärler. <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> gollanmasyna serediň.</li>
  <li>Sanly wizit kartoçkasy (vCard), e-poçta, SMS we WhatsApp söhbetdeşligi.</li>
  <li>Kartadaky ýerleşýän ýer we çäräniň tertibi.</li>
</ul>

<h2>Statik we dinamik QR Code</h2>
<p>Göni maglumatdan döredilen QR Code <strong>statik QR Code</strong> diýlip atlandyrylýar: onuň mazmuny suratyň içinde ýerleşdirilýär we ony üýtgedip bolmaýar, emma onuň möhleti hem hiç haçan geçmeýär. <strong>Dinamik</strong> QR Code bolsa haýsydyr bir hyzmata degişli gysga salgyny saklaýar we ol soňra Sizi gerekli ýere ugrukdyrýar; barmaly ýerini üýtgedip bolýar, ýöne şol hyzmat işini bes etse, QR Code hem işlemesini bes eder. Köp zerurlyklar üçin statik QR Code ýeterlik we uzak möhletde has ygtybarlydyr.</p>

<p>Synap görmek isleýärsiňizmi? Häzir <a href="/?type=qrcode">mugt QR Code</a> dörediň ýa-da <a href="/artikel/cara-membuat-qr-code-gratis">3 ädimde QR Code döretmegiň usuly</a> barada okaň.</p>
`
};
