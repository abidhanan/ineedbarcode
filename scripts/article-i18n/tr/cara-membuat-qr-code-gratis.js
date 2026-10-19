// cara-membuat-qr-code-gratis
module.exports = {
  title: "3 Adımda Ücretsiz QR Code Nasıl Oluşturulur?",
  desc: "Bağlantı, WiFi, kişi bilgisi veya WhatsApp için uygulama indirmeden ve kayıt olmadan QR Code oluşturmanın pratik rehberi; kolay taranması için ipuçlarıyla birlikte.",
  tags: ["Rehber", "QR Code"],
  coverCaption: "QR Code; bağlantı, WiFi veya kişi bilgisi için kullanıma hazır.",
  inlineCaption: "Dizüstü bilgisayarınızda veya telefonunuzda tarayıcıyı açmanız yeterli; ek uygulama gerekmez.",
  faq: [
    ["Ücretsiz oluşturulan QR Code işletme için kullanılabilir mi?", "Evet. Oluşturduğunuz statik QR Code'u ambalaj, broşür, menü veya tanıtım materyallerinde filigran olmadan ve lisans ücreti ödemeden özgürce kullanabilirsiniz."],
    ["QR Code'un içeriği basıldıktan sonra değiştirilebilir mi?", "Statik QR Code basıldıktan sonra değiştirilemez. İçeriğin değişme ihtimali varsa QR Code'u, içeriğini kendiniz güncelleyebileceğiniz bir sayfaya, örneğin web sitenizdeki bir sayfaya yönlendirin."],
    ["QR Code basmak için en iyi görsel formatı hangisidir?", "PNG, çünkü karelerin kenarları keskin kalır. Yeterince büyük bir modül boyutuyla indirin ve gerekirse tasarım uygulamasında küçültün; tersini yapmayın."]
  ],
  body: `
<p>Artık QR Code oluşturmak için özel bir uygulamaya ya da abonelik ücretine gerek yok. <a href="/">I Need Barcode</a> gibi çevrimiçi bir oluşturucuyla, ister telefonda ister dizüstü bilgisayarda olsun, doğrudan tarayıcınızdan saniyeler içinde QR Code oluşturabilirsiniz.</p>

<h2>Adım 1: Barkod türünü seçin</h2>
<p><a href="/?type=qrcode">QR Code oluşturucuyu</a> açın ve Barkod türü bölümünden <strong>QR Code</strong> seçeneğini seçin. Barkod telefon kamerasıyla taranacaksa en doğru seçim QR Code'dur.</p>

<h2>Adım 2: Verileri girin</h2>
<p>İhtiyacınıza uygun veri türünü seçin:</p>
<ul>
  <li><strong>URL</strong>: web sitesi, çevrimiçi mağaza, Google Maps veya form bağlantısı.</li>
  <li><strong>WiFi</strong>: misafirlerin yazmadan bağlanabilmesi için ağ adı ve şifre.</li>
  <li><strong>Kişi</strong>: dijital kartvizit formatında ad, telefon numarası, e-posta ve şirket.</li>
  <li><strong>WhatsApp</strong>: müşterilerin sizinle doğrudan sohbet açabilmesi için numara ve ilk mesaj.</li>
  <li>Diğer ihtiyaçlar için <strong>Metin, E-posta, Telefon, SMS, Konum, Etkinlik</strong>.</li>
</ul>
<p>Önizleme siz yazdıkça anında değişir; böylece indirmeden önce sonucu kontrol edebilirsiniz.</p>

<h2>Adım 3: Görünümü ayarlayıp indirin</h2>
<p>Ayarlar bölümünde modül boyutunu (ne kadar büyükse baskıda o kadar keskin olur), rengi ve kenar boşluğunu ayarlayın. Tasarım bölümünde daire veya kalp gibi bir şekil, nokta stili ve "BENİ TARA" gibi bir yazı içeren çerçeve ekleyebilirsiniz. İşiniz bittiğinde <strong>PNG İndir</strong> düğmesine basın.</p>

<h2>QR Code'un kolay taranması için ipuçları</h2>
<ul>
  <li><strong>Basmadan önce test edin.</strong> Makul bir mesafeden iki veya üç farklı telefonla tarayın.</li>
  <li><strong>Güçlü kontrast kullanın.</strong> Açık zemin üzerinde koyu renk en güvenlisidir. Koyu zemin üzerinde açık renkli QR Code'dan kaçının.</li>
  <li><strong>Çok küçük yapmayın.</strong> Yakından taranacaksa yaklaşık 2 × 2 cm güvenli alt sınırdır. Tarama mesafesi arttıkça boyut da büyümelidir. <a href="/artikel/ukuran-barcode-untuk-dicetak">Baskı için barkod boyutu</a> makalesini de okuyun.</li>
  <li>QR Code'un başka görsellere veya yazılara yapışmaması için <strong>çevresinde boşluk bırakın</strong>.</li>
  <li><strong>Kısa bağlantı kullanın.</strong> Az veri, daha seyrek ve daha kolay okunan bir desen oluşturur.</li>
</ul>

<h2>Aynı anda çok sayıda QR Code mu gerekiyor?</h2>
<p><strong>Toplu</strong> modu etkinleştirin, her satıra bir veri yazın (100 satıra kadar) ve hepsini tek bir ZIP dosyası olarak indirin. Bu yöntem envanter etiketleri, katılımcı kartları veya etkinlik biletleri için idealdir.</p>
`
};
