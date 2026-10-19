// cara-membuat-qr-code-wifi
module.exports = {
  title: "Si të krijoni QR Code WiFi që mysafirët të mos shtypin fjalëkalimin",
  desc: "Mysafirëve u mjafton të skanojnë një QR Code për t'u lidhur me WiFi. I përshtatshëm për kafene, zyra, akomodime dhe shtëpi. Ja si ta krijoni dhe ta vendosni.",
  tags: ["Udhëzues", "QR Code"],
  coverCaption: "Të dhënat WiFi të ruterit mund të ruhen në një QR Code të vetëm.",
  inlineCaption: "Mysafirët e kafenesë mund të lidhen menjëherë pa shtypur fjalëkalimin.",
  faq: [
    ["A mund ta skanojnë të gjithë telefonat QR Code WiFi?", "Kamera e integruar e iPhone me iOS 11 e lart dhe e shumicës së pajisjeve me Android 10 e lart mund ta lexojë menjëherë. Telefonat e vjetër mund të kenë nevojë për një aplikacion skanimi QR."],
    ["A është i sigurt QR Code WiFi?", "Kushdo që skanon atë QR Code mund të lidhet me WiFi-n tuaj. Prandaj përdorni rrjetin për mysafirë dhe mos vendosni QR Code të rrjetit privat në vende publike."],
    ["Çfarë duhet bërë nëse ndryshohet fjalëkalimi i WiFi?", "Krijoni dhe printoni përsëri QR Code WiFi, sepse QR Code i vjetër përmban ende fjalëkalimin e vjetër."]
  ],
  body: `
<p>T'u diktosh mysafirëve një fjalëkalim të gjatë WiFi shpesh është e lodhshme, sidomos kur ka shkronja të mëdha, numra dhe simbole. Me një <strong>QR Code WiFi</strong>, mysafirëve u mjafton të drejtojnë kamerën e telefonit te QR Code dhe lidhen menjëherë.</p>

<h2>Si funksionon QR Code WiFi</h2>
<p>QR Code WiFi ruan emrin e rrjetit (SSID), llojin e sigurisë dhe fjalëkalimin në një format të posaçëm që e njohin telefonat, për shembull <code>WIFI:T:WPA;S:EmriRrjetit;P:Fjalekalimi;;</code>. Kamera e integruar e iPhone (iOS 11 e lart) dhe e shumicës së pajisjeve Android (Android 10 e lart) mund ta lexojë drejtpërdrejt, pa aplikacion shtesë.</p>

<h2>Hapat për ta krijuar</h2>
<ol>
  <li>Hapni <a href="/?type=qrcode">gjeneratorin e QR Code</a> dhe zgjidhni skedën <strong>WiFi</strong> te seksioni Të dhënat.</li>
  <li>Shkruani <strong>emrin e rrjetit</strong> saktësisht siç shfaqet në listën e rrjeteve WiFi, duke përfshirë shkronjat e mëdha dhe të vogla.</li>
  <li>Shkruani <strong>fjalëkalimin</strong> dhe zgjidhni llojin e sigurisë. Shumica e ruterëve të shtëpisë dhe të zyrës përdorin WPA/WPA2/WPA3.</li>
  <li>Shënoni <strong>Rrjet i fshehur</strong> nëse emri i WiFi-t tuaj nuk shfaqet në listë.</li>
  <li>Shtoni një kornizë me tekst, për shembull "SCAN WIFI", që mysafirët ta kuptojnë funksionin, pastaj shkarkoni PNG.</li>
</ol>

<h2>Ku ta vendosni?</h2>
<ul>
  <li>Një kartë e vogël mbi tavolinën e kafenesë ose restorantit.</li>
  <li>Muri i dhomës së ndenjes, recepsionit ose sallës së mbledhjeve në zyrë.</li>
  <li>Dhoma e akomodimit, ngjitur pranë derës ose televizorit.</li>
  <li>Pjesa e poshtme e ruterit në shtëpi, që familjarët të lidhin lehtë pajisjet e reja.</li>
</ul>

<h2>Këshilla sigurie</h2>
<ul>
  <li>Përdorni <strong>rrjetin për mysafirë</strong> (guest network) nëse ruteri juaj e mbështet, që mysafirët të mos jenë në të njëjtin rrjet me kompjuterët e zyrës.</li>
  <li>Nëse ndryshohet fjalëkalimi i WiFi, krijoni dhe printoni përsëri QR Code, sepse QR Code i vjetër do të përmbajë fjalëkalimin e vjetër.</li>
  <li>Mos vendosni QR Code WiFi për rrjetin privat në vende publike ku kushdo mund ta fotografojë.</li>
</ul>

<h2>Nëse QR Code nuk lidhet</h2>
<p>Kontrolloni përsëri drejtshkrimin e emrit të rrjetit dhe të fjalëkalimit, sepse një shkronjë e gabuar bën që telefoni të mos lidhet. Sigurohuni gjithashtu që lloji i zgjedhur i sigurisë të përputhet me cilësimet e ruterit. Për probleme të tjera skanimi, lexoni <a href="/artikel/barcode-tidak-bisa-dipindai">arsyet pse barkodi nuk skanohet</a>.</p>
`
};
