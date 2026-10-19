// cara-membuat-qr-code-wifi
module.exports = {
  title: "Myhmanlar açar sözüni ýazmaz ýaly WiFi QR Code-y nädip döretmeli",
  desc: "WiFi-a birikmek üçin myhmanlara QR Code-y skanerlemek ýeterlik. Kafeler, edaralar, myhmanhanalar we öýler üçin amatly. Ony döretmegiň we ýerleşdirmegiň usuly şeýle.",
  tags: ["Gollanma", "QR Code"],
  coverCaption: "Routeriň WiFi maglumatlaryny bir QR Code-da saklap bolýar.",
  inlineCaption: "Kafäniň myhmanlary açar sözüni ýazmazdan derrew birigip bilýärler.",
  faq: [
    ["WiFi QR Code-y ähli telefonlar skanerläp bilýärmi?", "iOS 11 we ondan täze wersiýaly iPhone-yň gurlan kamerasy we Android 10 we ondan täze wersiýaly enjamlaryň köpüsi ony göni okap bilýär. Köne telefonlara QR skaner programmasy gerek bolmagy mümkin."],
    ["WiFi QR Code howpsuzmy?", "Şol QR Code-y skanerlän islendik adam Siziň WiFi-yňyza birigip biler. Şonuň üçin myhman ulgamyny ulanyň we şahsy ulgamyň QR Code-yny jemgyýetçilik ýerlerinde goýmaň."],
    ["WiFi-yň açar sözi üýtgedilse näme etmeli?", "WiFi QR Code-y täzeden dörediň we çap ediň, sebäbi köne QR Code-da öňki açar sözi saklanýar."]
  ],
  body: `
<p>Uzyn WiFi açar sözüni myhmanlara harpma-harp aýtmak köplenç kynçylyk döredýär, esasan hem onda baş harplar, sanlar we nyşanlar bar bolsa. <strong>WiFi QR Code</strong> bilen myhmanlar telefonynyň kamerasyny QR Code-a gönükdirýärler we derrew birigýärler.</p>

<h2>WiFi QR Code nähili işleýär</h2>
<p>WiFi QR Code ulgamyň adyny (SSID), howpsuzlyk görnüşini we açar sözüni telefonlaryň tanaýan ýörite formatynda saklaýar, meselem, <code>WIFI:T:WPA;S:UlgamyňAdy;P:AçarSözi;;</code>. iPhone-yň (iOS 11 we ondan täze) we Android enjamlarynyň köpüsiniň (Android 10 we ondan täze) gurlan kamerasy ony goşmaça programmasyz göni okap bilýär.</p>

<h2>Ony döretmegiň ädimleri</h2>
<ol>
  <li><a href="/?type=qrcode">QR Code generatoryny</a> açyň we Maglumatlary giriziň bölüminde <strong>WiFi</strong> goýmasyny saýlaň.</li>
  <li><strong>Ulgamyň adyny</strong> WiFi sanawynda görkezilişi ýaly, baş we setir harplaryny hem goşmak bilen takyk ýazyň.</li>
  <li><strong>Açar sözüni</strong> ýazyň we howpsuzlyk görnüşini saýlaň. Öý we edara routerleriniň köpüsi WPA/WPA2/WPA3 ulanýar.</li>
  <li>Eger WiFi-yňyzyň ady sanawda görkezilmeýän bolsa, <strong>Gizlin ulgam</strong> belgisini goýuň.</li>
  <li>Myhmanlar onuň näme üçindigini bilerleri ýaly, meselem, "SCAN WIFI" ýazgyly çarçuwa goşuň we PNG görnüşinde ýükläň.</li>
</ol>

<h2>Ony nirede ýerleşdirmeli?</h2>
<ul>
  <li>Kafäniň ýa-da restoranyň stolundaky kiçijik kartoçkada.</li>
  <li>Myhman otagynyň, kabulhananyň ýa-da edaradaky ýygnaklar otagynyň diwarynda.</li>
  <li>Myhmanhananyň otagynda, gapynyň ýa-da telewizoryň golaýynda ýelmenip.</li>
  <li>Maşgala agzalary täze enjamlary aňsat birikdirer ýaly, öýdäki routeriň aşaky böleginde.</li>
</ul>

<h2>Howpsuzlyk boýunça maslahatlar</h2>
<ul>
  <li>Eger routeriňiz goldaýan bolsa, <strong>myhman ulgamyny</strong> (guest network) ulanyň, şeýlelikde myhmanlar edaranyň kompýuterleri bilen bir ulgama girmezler.</li>
  <li>Eger WiFi-yň açar sözi üýtgedilse, QR Code-y täzeden dörediň we çap ediň, sebäbi köne QR Code-da öňki açar sözi bolar.</li>
  <li>Şahsy ulgamyň WiFi QR Code-yny islendik adamyň suratyny alyp biljek jemgyýetçilik ýerlerinde goýmaň.</li>
</ul>

<h2>Eger QR Code arkaly birigip bolmasa</h2>
<p>Ulgamyň adynyň we açar sözüniň ýazylyşyny gaýtadan barlaň, sebäbi bir ýalňyş harp hem telefonyň birikmezligine sebäp bolýar. Şeýle hem saýlanan howpsuzlyk görnüşiniň routeriň sazlamalaryna laýyk gelýändigine göz ýetiriň. Skanerleme bilen bagly beýleki meseleler üçin <a href="/artikel/barcode-tidak-bisa-dipindai">ştrihkodyň skanerlenmezliginiň sebäpleri</a> barada okaň.</p>
`
};
