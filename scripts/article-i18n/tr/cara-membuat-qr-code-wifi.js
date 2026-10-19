// cara-membuat-qr-code-wifi
module.exports = {
  title: "Misafirlerin Şifre Yazmasına Gerek Kalmayan WiFi QR Code Nasıl Oluşturulur?",
  desc: "Misafirlerin WiFi'a bağlanmak için QR Code'u taramaları yeterli. Kafeler, ofisler, konaklama yerleri ve evler için idealdir. İşte nasıl oluşturup yerleştireceğiniz.",
  tags: ["Rehber", "QR Code"],
  coverCaption: "Modemdeki WiFi bilgileri tek bir QR Code'da saklanabilir.",
  inlineCaption: "Kafedeki misafirler şifre yazmadan anında bağlanabilir.",
  faq: [
    ["Her telefon WiFi QR Code'u tarayabilir mi?", "iOS 11 ve üzeri sürümlere sahip iPhone'ların ve Android 10 ve üzeri cihazların çoğunun yerleşik kamerası bunu doğrudan okuyabilir. Eski telefonlarda bir QR tarayıcı uygulaması gerekebilir."],
    ["WiFi QR Code güvenli mi?", "Bu QR Code'u tarayan herkes WiFi ağınıza bağlanabilir. Bu nedenle misafir ağı kullanın ve özel ağınızın QR Code'unu herkese açık yerlere asmayın."],
    ["WiFi şifresi değişirse ne yapmalıyım?", "WiFi QR Code'u yeniden oluşturup basın, çünkü eski QR Code hâlâ eski şifreyi içerir."]
  ],
  body: `
<p>Uzun bir WiFi şifresini misafirlere harf harf söylemek, özellikle büyük harf, rakam ve sembol içeriyorsa çoğu zaman zahmetlidir. <strong>WiFi QR Code</strong> sayesinde misafirlerin telefon kamerasını QR Code'a doğrultmaları yeterlidir; anında bağlanırlar.</p>

<h2>WiFi QR Code nasıl çalışır?</h2>
<p>WiFi QR Code; ağ adını (SSID), güvenlik türünü ve şifreyi telefonların tanıdığı özel bir formatta saklar, örneğin <code>WIFI:T:WPA;S:NamaJaringan;P:Sandi;;</code>. iPhone'un (iOS 11 ve üzeri) ve Android cihazların çoğunun (Android 10 ve üzeri) yerleşik kamerası bunu ek bir uygulamaya gerek kalmadan doğrudan okuyabilir.</p>

<h2>Oluşturma adımları</h2>
<ol>
  <li><a href="/?type=qrcode">QR Code oluşturucuyu</a> açın ve Veri girişi bölümünde <strong>WiFi</strong> sekmesini seçin.</li>
  <li><strong>Ağ adını</strong>, büyük ve küçük harfler dâhil olmak üzere WiFi listesinde göründüğü şekliyle birebir yazın.</li>
  <li><strong>Şifreyi</strong> yazın ve güvenlik türünü seçin. Ev ve ofis modemlerinin çoğu WPA/WPA2/WPA3 kullanır.</li>
  <li>WiFi adınız listede görünmüyorsa <strong>Gizli ağ</strong> seçeneğini işaretleyin.</li>
  <li>Misafirlerin ne işe yaradığını anlaması için örneğin "SCAN WIFI" yazan bir çerçeve ekleyin ve PNG olarak indirin.</li>
</ol>

<h2>Nereye yerleştirmeli?</h2>
<ul>
  <li>Kafe veya restoran masalarındaki küçük kartlara.</li>
  <li>Misafir salonunun, resepsiyonun veya ofis toplantı odasının duvarına.</li>
  <li>Konaklama yerlerinin odalarında, kapının veya televizyonun yanına.</li>
  <li>Evdeki modemin alt kısmına; böylece aile üyeleri yeni cihazları kolayca bağlayabilir.</li>
</ul>

<h2>Güvenlik ipuçları</h2>
<ul>
  <li>Modeminiz destekliyorsa <strong>misafir ağı</strong> (guest network) kullanın; böylece misafirler ofis bilgisayarlarıyla aynı ağa girmez.</li>
  <li>WiFi şifresi değişirse QR Code'u yeniden oluşturup basın, çünkü eski QR Code eski şifreyi içerir.</li>
  <li>Özel ağınızın WiFi QR Code'unu, herkesin fotoğrafını çekebileceği kamuya açık yerlere asmayın.</li>
</ul>

<h2>QR Code bağlanmıyorsa</h2>
<p>Ağ adının ve şifrenin yazımını yeniden kontrol edin; tek bir yanlış harf bile telefonun bağlanamamasına neden olur. Seçilen güvenlik türünün modem ayarlarıyla uyumlu olduğundan da emin olun. Diğer tarama sorunları için <a href="/artikel/barcode-tidak-bisa-dipindai">barkodun taranamama nedenleri</a> makalesini okuyun.</p>
`
};
