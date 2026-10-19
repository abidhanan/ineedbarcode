// desain-qr-code-kreatif
module.exports = {
  title: "Loominguline QR Code'i disain, mis jääb skannitavaks",
  desc: "QR Code võib olla südame- või ringikujuline, raami ja värvidega. Tutvuge reeglitega, et disain oleks ühtaegu atraktiivne ja kergesti skannitav.",
  tags: ["Disain", "QR Code"],
  coverCaption: "Värvid muudavad QR Code'i atraktiivsemaks, kui kontrast jääb tugevaks.",
  inlineCaption: "QR Code'i disaini tasub alati enne printimist katsetada.",
  faq: [
    ["Kas südamekujulist QR Code'i saab skannida?", "Jah. Tegelik QR Code jääb keskele terveks ja ülejäänu on vaid dekoratiivne muster. Kui kontrast on tugev ja suurus piisav, on QR Code loetav."],
    ["Millised värvid on QR Code'i jaoks ohutud?", "Tumedad värvid, nagu must, tumesinine, tumeroheline, lilla või tumepruun, valgel või väga heledal taustal."],
    ["Kas QR Code'ile võib lisada teksti või raami?", "Jah. Üleskutsega raam, näiteks „SKANNI MIND“, aitab inimestel isegi selle otstarvet mõista, kui raam QR Code'i ei kata."]
  ],
  body: `
<p>Must-valge QR Code on küll funktsionaalne, kuid pakenditel, kutsetel või reklaammaterjalidel näeb see sageli jäik välja. Väikese disainilihvi abil võib QR Code näha atraktiivsem välja, kaotamata oma funktsiooni. Peamine on mõista, milliseid osi tohib muuta ja millised peavad jääma terveks.</p>

<h2>Väliskuju: süda, ring ja muud</h2>
<p><a href="/?type=qrcode">QR Code'i generaatori</a> jaotises „Disain“ saate valida kujusid nagu ring, süda, kuusnurk, kaheksanurk, täht või romb. Tegelik QR Code jääb keskele ja ülejäänu täidetakse dekoratiivse mustriga, kuni moodustub valitud kuju. Dekoratiivne muster ei sisalda andmeid, seega ei sega see skannimist, kui tegeliku QR Code'i ümber on tühja ruumi.</p>

<h2>Punktide stiil</h2>
<p>QR Code'i ruute saab muuta ümardatud kujudeks või ümmargusteks punktideks. Et kood jääks kergesti skannitavaks, peaksid kolm suurt nurgaruutu (finder pattern) jääma tervete ruutudena alles, sest just neid otsib kaamera esimesena. Meie generaator joonistab need osad alati tervete ruutudena, kõige rohkem ümardatud nurkadega, ükskõik millise punktistiili valite.</p>

<h2>Värvid</h2>
<ul>
  <li>Kasutage QR Code'i jaoks <strong>tumedat</strong> ja tausta jaoks <strong>heledat</strong> värvi. Tumesinine, tumeroheline, lilla või tumepruun on üldiselt ohutud.</li>
  <li>Vältige QR Code'i puhul kahvatuid värve, nagu kollane, kahvaturoosa või helehall.</li>
  <li>Ärge pöörake värve ümber heledaks QR Code'iks tumedal taustal, sest kõik skannimisrakendused seda ei toeta.</li>
</ul>

<h2>Raam ja üleskutse</h2>
<p>Raam üleskutsega, näiteks „SKANNI MIND“, „MENÜÜ“ või „SCAN WIFI“, aitab tõestatult inimestel QR Code'i otstarvet mõista. Saate valida raami alumise sildi, ülemise sildi, nurga, mulli, ringi või lindiga ning seejärel muuta teksti ja selle värvi.</p>

<h2>Reeglid, et disain jääks loetavaks</h2>
<ol>
  <li>Hoidke QR Code'i ja selle tausta vahel tugevat <strong>kontrasti</strong>.</li>
  <li>Laske <strong>kolmel nurgamärgil</strong> jääda selgeks ja katmata.</li>
  <li>Jätke QR Code'i ja raami ümber <strong>tühja ruumi</strong>.</li>
  <li>Ärge vähendage disainitud QR Code'i liigselt. Sellised kujud nagu süda muudavad tegeliku QR Code'i ala kogu pildi suurusest väiksemaks.</li>
  <li><strong>Katsetage</strong> enne printimist mitme telefoniga.</li>
</ol>

<p>Kui teie disaini on raske skannida, taastage nupuga <strong>Lähtesta</strong> seaded ükshaaval algseisu, et põhjus leida. Muid levinud põhjuseid saate lugeda artiklist <a href="/artikel/barcode-tidak-bisa-dipindai">7 põhjust, miks vöötkood ei skanni</a>.</p>
`
};
