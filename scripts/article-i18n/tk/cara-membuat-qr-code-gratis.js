// cara-membuat-qr-code-gratis
module.exports = {
  title: "3 ädimde mugt QR Code nädip döretmeli",
  desc: "Salgy, WiFi, kontakt ýa-da WhatsApp üçin QR Code-y programmasyz we hasaba durmazdan döretmek boýunça amaly gollanma, aňsat skanerlenmegi üçin maslahatlar bilen.",
  tags: ["Gollanma", "QR Code"],
  coverCaption: "QR Code salgy, WiFi ýa-da kontakt üçin ulanmaga taýýar.",
  inlineCaption: "Noutbukda ýa-da telefonda brauzeri açmak ýeterlik, goşmaça programma gerek däl.",
  faq: [
    ["Mugt döredilen QR Code-y iş üçin ulanyp bolýarmy?", "Bolýar. Siziň döreden statik QR Code-yňyzy gaplamada, broşýurada, menýuda ýa-da mahabat materiallarynda suw belgisiz we ygtyýarnama tölegsiz erkin ulanyp bilersiňiz."],
    ["Çap edilenden soň QR Code-yň mazmunyny üýtgedip bolýarmy?", "Statik QR Code-y çap edilenden soň üýtgedip bolmaýar. Eger mazmuny üýtgemegi ähtimal bolsa, QR Code-y mazmunyny özüňiz täzeläp bilýän sahypa, meselem, öz saýtyňyzdaky sahypa ugrukdyryň."],
    ["QR Code-y çap etmek üçin haýsy surat formaty iň gowusy?", "PNG, sebäbi inedördülleriň gyralary ýiti bolup galýar. Moduluň ölçegini ýeterlik uly edip ýükläň, soňra zerur bolsa dizaýn programmasynda kiçeldiň, tersine däl."]
  ],
  body: `
<p>Häzir QR Code döretmek üçin ýörite programma ýa-da abuna tölegi gerek däl. <a href="/">I Need Barcode</a> ýaly onlaýn generator bilen QR Code-y telefonda-da, noutbukda-da göni brauzerden birnäçe sekuntda döredip bilersiňiz.</p>

<h2>1-nji ädim: Ştrihkod görnüşini saýlaň</h2>
<p><a href="/?type=qrcode">QR Code generatoryny</a> açyň we Ştrihkod görnüşi bölüminde <strong>QR Code</strong>-y saýlaň. Eger ştrihkod telefonyň kamerasy bilen skanerlenjek bolsa, QR Code iň dogry saýlawdyr.</p>

<h2>2-nji ädim: Maglumatlary giriziň</h2>
<p>Zerurlygyňyza görä maglumat görnüşini saýlaň:</p>
<ul>
  <li><strong>URL</strong>: saýtyň, onlaýn dükanyň, Google Maps-iň ýa-da formanyň salgysy.</li>
  <li><strong>WiFi</strong>: myhmanlar ýazmazdan birigip bilmekleri üçin ulgamyň ady we açar sözi.</li>
  <li><strong>Kontakt</strong>: sanly wizit kartoçkasy formatynda at, telefon belgisi, e-poçta we kompaniýa.</li>
  <li><strong>WhatsApp</strong>: müşderiler Siziň bilen söhbetdeşligi derrew açar ýaly belgi we başlangyç habar.</li>
  <li>Beýleki zerurlyklar üçin <strong>Tekst, E-poçta, Telefon, SMS, Ýerleşýän ýeri, Çäre</strong>.</li>
</ul>
<p>Siz her gezek ýazanyňyzda deslapky görnüş derrew üýtgeýär, şonuň üçin netijäni ýüklemezden öň barlap bilersiňiz.</p>

<h2>3-nji ädim: Daş görnüşini sazlaň we ýükläň</h2>
<p>Sazlamalar bölüminde moduluň ölçegini (näçe uly bolsa, çap edilende şonça-da ýiti bolýar), reňki we gyra boşlugyny sazlaň. Dizaýn bölüminde tegelek ýa-da ýürek ýaly şekil, nokat stili we "MENI SKANERLE" ýaly ýazgyly çarçuwa berip bilersiňiz. Tamamlanyňyzdan soň <strong>PNG ýükle</strong> düwmesine basyň.</p>

<h2>QR Code-yň aňsat skanerlenmegi üçin maslahatlar</h2>
<ul>
  <li><strong>Çap etmezden öň synap görüň.</strong> Ony iki-üç dürli telefon bilen kadaly aralykdan skanerläň.</li>
  <li><strong>Güýçli kontrast ulanyň.</strong> Açyk fondaky garaňky reňk iň ygtybarlysydyr. Garaňky fondaky açyk QR Code-dan gaça duruň.</li>
  <li><strong>Gaty kiçi etmäň.</strong> Ýakyn aralykdan skanerlemek üçin takmynan 2 × 2 sm ölçeg howpsuz çäkdir. Skanerleme aralygy näçe uzak bolsa, ölçeg şonça-da uly bolmaly. Şeýle hem <a href="/artikel/ukuran-barcode-untuk-dicetak">çap etmek üçin ştrihkodyň ölçegi</a> barada okaň.</li>
  <li>QR Code beýleki surata ýa-da ýazga ýelmeşmez ýaly, onuň <strong>daş-töwereginde boş ýer goýuň</strong>.</li>
  <li><strong>Gysga salgy ulanyň.</strong> Az maglumat has seýrek we aňsat okalýan nagyş emele getirýär.</li>
</ul>

<h2>Birbada köp QR Code gerekmi?</h2>
<p><strong>Köpçülikleýin</strong> tertibi işjeňleşdiriň, her setire bir maglumat ýazyň (100 setire çenli), soňra olaryň hemmesini bir ZIP faýlynda ýükläň. Bu usul inwentar ýarlyklary, gatnaşyjylaryň kartoçkalary ýa-da çäre biletleri üçin amatly.</p>
`
};
