// cara-membuat-qr-code-gratis
module.exports = {
  title: "Kuidas luua tasuta QR Code 3 sammuga",
  desc: "Praktiline juhend QR Code'i loomiseks lingi, WiFi, kontakti või WhatsAppi jaoks ilma rakenduse ja registreerumiseta, koos nõuannetega, et seda oleks lihtne skannida.",
  tags: ["Juhendid", "QR Code"],
  coverCaption: "QR Code on valmis kasutamiseks lingi, WiFi või kontakti jaoks.",
  inlineCaption: "Piisab brauseri avamisest sülearvutis või telefonis, lisarakendusi pole vaja.",
  faq: [
    ["Kas tasuta loodud QR Code'i võib kasutada äriliselt?", "Jah. Teie loodud staatilist QR Code'i võite vabalt kasutada pakenditel, brošüüridel, menüüdel või reklaammaterjalidel – ilma vesimärgi ja litsentsitasuta."],
    ["Kas QR Code'i sisu saab pärast printimist muuta?", "Staatilist QR Code'i ei saa pärast printimist muuta. Kui sisu võib muutuda, suunake QR Code lehele, mille sisu saate ise uuendada, näiteks oma veebilehe lehele."],
    ["Milline pildivorming sobib QR Code'i printimiseks kõige paremini?", "PNG, sest ruutude servad jäävad teravaks. Laadige alla piisavalt suure moodulisuurusega ja vajaduse korral vähendage seda disainirakenduses, mitte vastupidi."]
  ],
  body: `
<p>QR Code'i loomiseks ei ole tänapäeval vaja spetsiaalset rakendust ega tellimustasu. Veebigeneraatoriga, nagu <a href="/">I Need Barcode</a>, saate QR Code'i luua mõne sekundiga otse brauseris – nii telefonis kui ka sülearvutis.</p>

<h2>1. samm: valige vöötkoodi liik</h2>
<p>Avage <a href="/?type=qrcode">QR Code'i generaator</a> ja valige jaotises „Vöötkoodi liik“ <strong>QR Code</strong>. QR Code on kõige sobivam valik, kui koodi hakatakse skannima telefoni kaameraga.</p>

<h2>2. samm: sisestage andmed</h2>
<p>Valige vajadusele vastav andmetüüp:</p>
<ul>
  <li><strong>URL</strong>: veebilehe, e-poe, Google Mapsi või vormi link.</li>
  <li><strong>WiFi</strong>: võrgu nimi ja parool, et külalised saaksid ühenduse luua midagi sisestamata.</li>
  <li><strong>Kontakt</strong>: nimi, telefoninumber, e-post ja ettevõte digitaalse visiitkaardi vormingus.</li>
  <li><strong>WhatsApp</strong>: number ja algsõnum, et klient avaks kohe vestluse teiega.</li>
  <li><strong>Tekst, e-post, telefon, SMS, asukoht, üritus</strong> muude vajaduste jaoks.</li>
</ul>
<p>Eelvaade muutub kohe, kui te kirjutate, nii et saate tulemust enne allalaadimist kontrollida.</p>

<h2>3. samm: kohandage välimust ja laadige alla</h2>
<p>Jaotises „Seaded“ määrake moodulisuurus (mida suurem, seda teravam on prinditud tulemus), värvid ja veerised. Jaotises „Disain“ saate valida kuju, näiteks ringi või südame, punktide stiili ning raami tekstiga, näiteks „SKANNI MIND“. Kui olete valmis, vajutage <strong>Laadi alla PNG</strong>.</p>

<h2>Nõuanded, et QR Code oleks lihtne skannida</h2>
<ul>
  <li><strong>Katsetage enne printimist.</strong> Skannige kahe või kolme erineva telefoniga mõistlikult kauguselt.</li>
  <li><strong>Kasutage tugevat kontrasti.</strong> Tume värv heledal taustal on kõige kindlam. Vältige heledat QR Code'i tumedal taustal.</li>
  <li><strong>Ärge tehke liiga väikest.</strong> Lähedalt skannimisel on umbes 2 × 2 cm ohutu piir. Mida suurem on skannimiskaugus, seda suurem peab kood olema. Lugege ka <a href="/artikel/ukuran-barcode-untuk-dicetak">vöötkoodi suurused printimiseks</a>.</li>
  <li><strong>Jätke tühja ruumi</strong> QR Code'i ümber, et see ei puutuks kokku teiste piltide või tekstiga.</li>
  <li><strong>Kasutage lühikest linki.</strong> Vähem andmeid annab hõredama mustri, mida on lihtsam lugeda.</li>
</ul>

<h2>Vajate korraga palju QR Code'e?</h2>
<p>Lülitage sisse režiim <strong>Hulgi</strong>, kirjutage üks andmekirje rea kohta (kuni 100 rida) ja laadige kõik alla ühes ZIP-failis. See sobib inventarisiltide, osalejakaartide või ürituste piletite jaoks.</p>
`
};
