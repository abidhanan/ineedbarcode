// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "1D ve 2D Barkod Arasındaki Farklar: Hangisine İhtiyacınız Var?",
  desc: "Çizgili barkod da QR Code da birer barkoddur, ancak kullanım amaçları farklıdır. Kapasitelerini, tarama yöntemlerini ve kullanım örneklerini karşılaştırın.",
  tags: ["Temel Bilgiler", "Barkod"],
  coverCaption: "Depodaki el tipi tarayıcı 1D ve 2D barkodları okur.",
  inlineCaption: "Kargo etiketlerinde genellikle çizgili barkod kullanılır.",
  faq: [
    ["Kasa tarayıcıları QR Code okuyabilir mi?", "Hepsi değil. 1D lazer tarayıcılar yalnızca çizgili barkodları okur. QR Code için kamera tabanlı bir 2D tarayıcı veya telefon kamerası gerekir."],
    ["En küçük barkod hangisidir?", "Data Matrix çok küçük basılabilen bir 2D barkoddur; bu nedenle elektronik bileşenlerde, tıbbi cihazlarda ve ilaç etiketlerinde sıkça kullanılır."],
    ["Perakende ürünlerde EAN-13 yerine QR Code kullanılabilir mi?", "Perakende mağazalarında satılabilmesi için ürünün yine de kayıtlı bir EAN-13 veya UPC barkoduna ihtiyacı vardır. QR Code ise ambalaja tamamlayıcı olarak, örneğin ürün bilgisi veya tanıtım için eklenebilir."]
  ],
  body: `
<p>Barkod oluştururken genellikle akla gelen ilk soru şudur: çizgili barkod mu, QR Code mu? İkisine de barkod denir, ancak verileri saklama biçimleri farklı olduğu için kullanım amaçları da farklıdır.</p>

<h2>1D (doğrusal) barkod</h2>
<p>1D barkod, dikey çizgilerden oluşan bir barkoddur. Veriler tek bir yönde, yani soldan sağa doğru saklanır. En bilinen örnekleri ürün ambalajlarındaki <a href="/?type=ean13">EAN-13</a> ve kargo etiketlerindeki <a href="/?type=code128">Code 128</a>'dir.</p>
<ul>
  <li>Kapasitesi küçüktür; genellikle on birkaç ile birkaç düzine karakter arasıdır.</li>
  <li>Ucuz ve çok hızlı kasa lazer tarayıcılarıyla okunabilir.</li>
  <li>Ürün kodları, seri numaraları ve kargo takip numaraları için uygundur.</li>
</ul>

<h2>2D barkod</h2>
<p>2D barkod verileri iki yönde, yani yatay ve dikey olarak saklar; bu sayede çok daha fazla veri sığdırır. Örnekleri <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> ve <a href="/?type=azteccode">Aztec</a>'tir.</p>
<ul>
  <li>Kapasitesi büyüktür; birkaç düzineden binlerce karaktere kadar çıkar.</li>
  <li>Telefon kamerasıyla farklı yönlerden taranabilir.</li>
  <li>Hata düzeltme özelliği vardır; bu nedenle bir kısmı hasar görse bile okunabilir.</li>
  <li>Çok küçük yapılabilir; örneğin elektronik bileşenlerdeki Data Matrix.</li>
</ul>

<h2>Kısa karşılaştırma</h2>
<table>
  <thead><tr><th></th><th>1D barkod</th><th>2D barkod</th></tr></thead>
  <tbody>
    <tr><td>Biçim</td><td>Dikey çizgiler</td><td>Kare içinde kareler/noktalar</td></tr>
    <tr><td>Kapasite</td><td>Küçük</td><td>Büyük</td></tr>
    <tr><td>Tarama aracı</td><td>Lazer tarayıcı veya kamera</td><td>Kamera veya 2D tarayıcı</td></tr>
    <tr><td>Hasara dayanıklılık</td><td>Sınırlı</td><td>Hata düzeltme var</td></tr>
    <tr><td>Örnekler</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Hangisi ne zaman kullanılmalı?</h2>
<ul>
  <li><strong>Mağazalarda veya marketlerde satılan ürünler</strong>: GS1'den alınmış resmî EAN-13 kullanın. <a href="/artikel/cara-mendapatkan-barcode-ean-13">EAN-13 barkodu nasıl alınır</a> makalesine göz atın.</li>
  <li><strong>Depo, raf veya kargo etiketleri</strong>: Code 128, kompakt olduğu ve hem harfleri hem rakamları desteklediği için yaygın bir seçimdir.</li>
  <li><strong>Müşteriler için bağlantı, menü, WiFi veya kişi bilgisi</strong>: QR Code, çünkü telefon kamerasıyla doğrudan taranabilir.</li>
  <li><strong>Çok küçük etiketler</strong>: Data Matrix.</li>
  <li><strong>Kimlik kartları, uçak biletleri veya belgeler</strong>: PDF417 veya Aztec.</li>
</ul>
<p>Yukarıdaki türlerin hepsini <a href="/">I Need Barcode</a> üzerinde ücretsiz oluşturabilirsiniz. Hâlâ kararsızsanız müşteri ihtiyaçları için QR Code, dahilî ihtiyaçlar için ise Code 128 ile başlayın.</p>
`
};
