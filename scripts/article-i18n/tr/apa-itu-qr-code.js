// apa-itu-qr-code
module.exports = {
  title: "QR Code Nedir ve Nasıl Çalışır?",
  desc: "QR Code bağlantı, metin ve hatta WiFi bilgisi saklayabilir; bir kısmı hasar görse bile okunmaya devam eder. İşte çalışma prensibi ve avantajları.",
  tags: ["Temel Bilgiler", "QR Code"],
  coverCaption: "QR Code, telefon kamerasıyla doğrudan taranabilir.",
  inlineCaption: "Her QR Code küçük siyah ve beyaz karelerden oluşur.",
  faq: [
    ["QR Code'un süresi dolabilir mi?", "Statik QR Code'un süresi asla dolmaz, çünkü verisi doğrudan görselin içine gömülüdür. Dinamik QR Code ise bağlantıyı sağlayan hizmet kapanırsa veya abonelik sona ererse çalışmayı durdurabilir."],
    ["QR Code ne kadar veri saklayabilir?", "QR Code'un en büyük sürümü 7.089 rakama veya yaklaşık 2.953 bayta kadar veri saklayabilir. Ancak veri ne kadar azsa QR Code o kadar kolay taranır."],
    ["QR Code bir kısmı hasar görse de okunur mu?", "Evet. Hata düzeltme sayesinde QR Code, kullanılan L, M, Q veya H düzeltme seviyesine bağlı olarak yaklaşık %7 ile %30 arası hasar görse bile okunabilir."]
  ],
  body: `
<p>QR Code (Quick Response Code), küçük siyah ve beyaz karelerden oluşan kare biçimli bir 2D barkoddur. Yalnızca on birkaç rakam saklayabilen çizgili barkodların aksine QR Code; web sitesi bağlantısı, uzun metin, telefon numarası, kişi bilgisi ve hatta WiFi ağı bilgisi saklayabilir.</p>
<p>QR Code, 1994'te Japon şirketi Denso Wave tarafından fabrikalarda araç yedek parçalarını takip etmek amacıyla geliştirildi. Bugün QR Code, telefon kamerasıyla doğrudan taranabildiği için dijital ödemelerden restoran menülerine kadar her yerde kullanılıyor.</p>

<h2>QR Code'un bölümleri</h2>
<ul>
  <li><strong>Köşelerdeki üç büyük kare</strong> (finder pattern): kameranın QR Code'u bulmasına ve yönünü anlamasına yardımcı olur; bu sayede QR Code eğik ya da ters taransa bile okunabilir.</li>
  <li><strong>Hizalama deseni</strong> (alignment pattern): bükülmüş veya açılı görünen QR Code'ların okunmasına yardımcı olan küçük karedir.</li>
  <li><strong>Veri alanı</strong>: sakladığınız bilgiyi içeren küçük karelerdir.</li>
  <li><strong>Sessiz bölge</strong> (quiet zone): QR Code'un arka plandan kolayca ayırt edilebilmesi için çevresinde bırakılan boşluktur.</li>
</ul>

<h2>Ne kadar veri saklayabilir?</h2>
<p>QR Code'un 40 boyut sürümü vardır. En büyük sürüm 7.089 rakama veya yaklaşık 2.953 bayt veriye kadar saklayabilir. Uygulamada ne kadar az veri saklanırsa kareler o kadar büyük olur ve QR Code o kadar kolay taranır. Bu nedenle kısa bir bağlantı, çok uzun bir bağlantıdan daha iyidir.</p>

<h2>Hasar görse bile okunur</h2>
<p>QR Code hata düzeltme (error correction) kullanır. Dört seviye vardır:</p>
<ul>
  <li><strong>L</strong>: QR Code'un yaklaşık %7'si hasar görse bile veri kurtarılabilir.</li>
  <li><strong>M</strong>: yaklaşık %15. Bu, yaygın ve dengeli bir seçimdir.</li>
  <li><strong>Q</strong>: yaklaşık %25.</li>
  <li><strong>H</strong>: yaklaşık %30; logo eklenecek veya kolay kirlenen yerlere basılacak QR Code'lar için uygundur.</li>
</ul>
<p>Düzeltme seviyesi ne kadar yüksekse o kadar çok kare gerekir; bu nedenle QR Code deseni daha sık görünür.</p>

<h2>QR Code'da neler saklanabilir?</h2>
<ul>
  <li>Web sitesi, çevrimiçi mağaza veya form bağlantıları.</li>
  <li>WiFi bilgisi; böylece misafirler şifre yazmadan bağlanabilir. <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> rehberine göz atın.</li>
  <li>Dijital kartvizit (vCard), e-posta, SMS ve WhatsApp sohbeti.</li>
  <li>Haritadaki konum ve etkinlik takvimi.</li>
</ul>

<h2>Statik ve dinamik QR Code</h2>
<p>Doğrudan veriden oluşturulan QR Code'a <strong>statik QR Code</strong> denir: içeriği görsele gömülüdür ve değiştirilemez, ancak süresi de asla dolmaz. <strong>Dinamik</strong> QR Code ise bir hizmete ait kısa bir bağlantı içerir ve bu bağlantı sizi hedefinize yönlendirir; hedef değiştirilebilir, ancak o hizmet kapanırsa QR Code çalışmaz hâle gelir. Çoğu ihtiyaç için statik QR Code yeterlidir ve uzun vadede daha güvenlidir.</p>

<p>Denemek ister misiniz? Hemen <a href="/?type=qrcode">ücretsiz QR Code</a> oluşturun veya <a href="/artikel/cara-membuat-qr-code-gratis">3 adımda QR Code oluşturma</a> rehberini okuyun.</p>
`
};
