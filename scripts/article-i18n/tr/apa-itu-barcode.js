// apa-itu-barcode
module.exports = {
  title: "Barkod Nedir? Tanımı, Çalışma Prensibi ve Türleri",
  desc: "Satın aldığınız neredeyse her üründe bir barkod bulunur. Nasıl çalıştığını, kısa tarihçesini ve en sık kullanılan barkod türlerini tanıyın.",
  tags: ["Temel Bilgiler", "Barkod"],
  coverCaption: "Ambalajdaki barkod, ürünün benzersiz kodunu saklar.",
  inlineCaption: "Kasiyer, barkodu bir anda okumak için tarayıcı kullanır.",
  faq: [
    ["Barkod ile QR Code arasındaki fark nedir?", "QR Code, barkod türlerinden biridir; yani 2D bir barkoddur. Çizgili (1D) barkodlar yalnızca birkaç karakter saklar ve soldan sağa okunur. QR Code ise veriyi iki yönde sakladığı için bir bağlantı, metin veya WiFi bilgisi sığdırabilir."],
    ["Barkod ürünün fiyatını saklar mı?", "Genellikle hayır. Ürün barkodu yalnızca bir kod içerir. Ürünün fiyatı ve adı kasa sisteminde saklanır ve taranan koda göre bulunur."],
    ["Barkod oluşturmak ücretli mi?", "Hayır. Barkod görseli, örneğin I Need Barcode üzerinde ücretsiz oluşturulabilir. Ücretli olarak kaydettirilmesi gereken tek şey, EAN-13 gibi perakende ürün barkodları için GS1 aracılığıyla alınan resmî numaradır."]
  ],
  body: `
<p>Barkod, verileri makinelerin okuyabileceği bir desen biçiminde yazmanın bir yoludur. Bu desen genellikle farklı genişliklerdeki siyah ve beyaz çizgilerden ya da bir kare içinde dizilmiş küçük karelerden oluşur. Tarandığında desen yeniden bir sayıya veya metne dönüştürülür; örneğin bir ürün kodu, kargo takip numarası ya da bir web sitesi adresi.</p>
<p>Makine tarafından okunduğu için barkod, kodu elle yazmaya kıyasla çok daha hızlıdır ve hata payı çok düşüktür. Bu yüzden barkodlar kasalarda, depolarda, hastanelerde, biletlerde ve hatta gıda ambalajlarında kullanılır.</p>

<h2>Barkodun kısa tarihçesi</h2>
<p>Barkod fikri 1952'de Amerika Birleşik Devletleri'nde Norman Joseph Woodland ve Bernard Silver tarafından patentlendi. Barkod mağazalarda ancak 1974'te gerçekten kullanılmaya başlandı; o yıl Ohio'daki bir süpermarkette bir paket sakız, UPC koduyla tarandı. O tarihten bu yana barkod tüm dünyaya yayıldı ve bugün GS1 adlı standart kuruluşu tarafından küresel ölçekte yönetiliyor.</p>

<h2>Barkod nasıl çalışır?</h2>
<p>Tarayıcı barkodu aydınlatır ve yansıyan ışığı okur. Koyu bölümler az ışık, açık bölümler ise çok ışık yansıtır. Bu fark 0 ve 1'lerden oluşan bir diziye dönüştürülür ve ardından o barkod türünün kurallarıyla eşleştirilir. Birçok barkodda ayrıca bir <strong>kontrol basamağı</strong> (check digit) bulunur; bu, önceki rakamlardan hesaplanan son rakamdır. Hesaplama sonucu uyuşmazsa tarayıcı bir sorun olduğunu anlar ve sonucu reddeder.</p>
<p>Barkodun kendisi genellikle yalnızca bir kod saklar. Ürün adı veya fiyatı gibi bilgiler kasa sisteminde ya da bir veritabanında tutulur ve bu koda göre bulunur.</p>

<h2>Sık kullanılan barkod türleri</h2>
<p>Barkodlar genel olarak iki büyük gruba ayrılır:</p>
<ul>
  <li><strong>1D (doğrusal) barkodlar</strong>: soldan sağa okunan dikey çizgilerden oluşur. Örnekler arasında perakende ürünler için <a href="/?type=ean13">EAN-13</a> ve <a href="/?type=upca">UPC-A</a>, lojistik ve depolar için ise <a href="/?type=code128">Code 128</a> ve <a href="/?type=code39">Code 39</a> bulunur.</li>
  <li><strong>2D barkodlar</strong>: veriyi iki yönde saklayan kare desenlerden oluşur ve bu sayede çok daha fazla veri sığdırır. Örnekler arasında <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> ve <a href="/?type=azteccode">Aztec</a> bulunur.</li>
</ul>
<p>Bunların yanı sıra posta ve kargo, sağlık sektörü için özel barkodlar ile tedarik zinciri için GS1 standartları da vardır. Aralarındaki farkların daha ayrıntılı açıklamasını <a href="/artikel/perbedaan-barcode-1d-dan-2d">1D ve 2D Barkod Arasındaki Farklar</a> makalesinde okuyabilirsiniz.</p>

<h2>Barkod nerelerde kullanılır?</h2>
<ul>
  <li><strong>Perakende</strong>: kasa işlemlerini hızlandırır ve stoku otomatik olarak kaydeder.</li>
  <li><strong>Depo ve kargo</strong>: ürünleri ve paketleri bir yerden diğerine takip eder.</li>
  <li><strong>Bilet ve etkinlikler</strong>: biletlerin geçerliliğini tek bir taramayla kontrol eder.</li>
  <li><strong>Pazarlama</strong>: broşür veya ambalaj üzerindeki QR Code, insanları doğrudan web sitenize, menünüze ya da WhatsApp hesabınıza yönlendirir.</li>
</ul>

<h2>Kendi barkodunuzu oluşturun</h2>
<p>Barkod oluşturmak için ücretli bir uygulamaya ihtiyacınız yok. <a href="/">I Need Barcode</a> üzerinde barkod türünü seçin, verileri girin ve PNG görseli olarak indirin. Seçebileceğiniz 100'den fazla tür vardır ve hepsi ücretsizdir, kayıt gerektirmez.</p>
`
};
