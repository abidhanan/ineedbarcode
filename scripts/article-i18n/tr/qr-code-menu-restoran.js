// qr-code-menu-restoran
module.exports = {
  title: "Restoran Menüleri için QR Code: Kapsamlı Rehber",
  desc: "QR Code ile sunulan dijital menü müşterilerin işini kolaylaştırır ve baskı maliyetlerinden tasarruf sağlar. İşte nasıl oluşturacağınız, menüyü nasıl hazırlayacağınız ve masalara nasıl yerleştireceğiniz.",
  tags: ["İşletme", "QR Code"],
  coverCaption: "Masadaki QR Code, müşterileri doğrudan dijital menüye götürür.",
  inlineCaption: "QR Code'u oturulan yerden kolayca ulaşılabilecek bir yere koyun.",
  faq: [
    ["Dijital menü için hangisi kullanılmalı: PDF mi, web sayfası mı?", "Web sayfası genellikle telefonda daha rahat okunur ve daha hızlı açılır. PDF ise dosya boyutu küçükse ve yazılar ekranda yeterince büyük görünüyorsa kullanılabilir."],
    ["Masadaki menü QR Code'u ne boyutta olmalı?", "Oturulan yerden taranabilmesi için yaklaşık 3 ile 5 cm yeterlidir. Dökülmelere dayanıklı ve çok parlak olmayan bir malzeme kullanın."],
    ["Menü değiştiğinde QR Code'u yeniden basmak gerekir mi?", "Hayır, bağlantı aynı kaldığı sürece gerekmez. QR Code'un yönlendirdiği sayfanın veya menü dosyasının içeriğini güncellemeniz yeterlidir."]
  ],
  body: `
<p>QR Code ile sunulan dijital menüler artık kafelerde ve restoranlarda olağan hâle geldi. Müşterilerin yiyecek listesini, fiyatları ve fotoğrafları görmek için masadaki QR Code'u taramaları yeterlidir. İşletme sahipleri için ise bu yöntem baskı maliyetlerinden tasarruf sağlar ve fiyat ya da menü değişikliklerini kolaylaştırır.</p>

<h2>QR Code menünün avantajları</h2>
<ul>
  <li><strong>Kolayca güncellenir</strong>: menü kitapçığını yeniden bastırmadan fiyatları değiştirin veya yeni ürünler ekleyin.</li>
  <li><strong>Maliyet tasarrufu</strong>: her masa için küçük bir QR Code basmanız yeterlidir.</li>
  <li><strong>Daha bilgilendirici</strong>: fotoğraflar, açıklamalar ve acı veya vejetaryen gibi etiketler gösterin.</li>
  <li><strong>Çevrimiçi siparişi destekler</strong>: müşterileri bir sipariş formuna veya WhatsApp'a yönlendirin.</li>
</ul>

<h2>Adım 1: Çevrimiçi menünüzü hazırlayın</h2>
<p>QR Code yalnızca bir bağlantı içerir; bu nedenle internette açılabilen bir menüye ihtiyacınız vardır. Seçenekler arasında kendi web sitenizdeki bir sayfa, çevrimiçi depolama alanında herkese açık olarak paylaşılan bir PDF dosyası veya bir sipariş platformundaki katalog sayfası bulunur. Menünün telefon ekranında rahat okunduğundan emin olun: yazılar yeterince büyük, fotoğraflar çok ağır olmasın ve fiyatlar net görünsün.</p>

<h2>Adım 2: QR Code'u oluşturun</h2>
<ol>
  <li>Menünüzün bağlantısını kopyalayın.</li>
  <li><a href="/?type=qrcode">QR Code oluşturucuyu</a> açın, <strong>URL</strong> sekmesini seçin ve bağlantıyı yapıştırın.</li>
  <li>Tasarım bölümünde "MENÜ" veya "MENÜYÜ GÖRMEK İÇİN TARAYIN" yazan bir çerçeve ekleyin.</li>
  <li>Renkleri restoranınızın kurumsal kimliğine uyarlayın, ancak yine de açık zemin üzerinde koyu renk kullanın.</li>
  <li>Baskı için yeterince büyük bir modül boyutuyla PNG olarak indirin.</li>
</ol>
<p>Değişmeyecek bir bağlantı kullanın. Menü başka bir adrese taşınırsa basılmış QR Code güncellenemez. Açıklamasını <a href="/artikel/apa-itu-qr-code">QR Code nedir</a> makalesinde bulabilirsiniz.</p>

<h2>Adım 3: Basın ve yerleştirin</h2>
<ul>
  <li>Oturulan yerden kolayca taranabilmesi için en az yaklaşık 3–5 cm boyutunda basın.</li>
  <li>Vinil etiket veya aşırı parlak olmayan lamine kart gibi dökülmelere dayanıklı bir malzeme kullanın.</li>
  <li>Örneğin masanın ortasındaki akrilik bir standa, kolay ulaşılabilecek bir konuma yerleştirin.</li>
  <li>Müşteriler sohbet üzerinden sipariş veriyorsa QR Code'un yanına masa numarasını ekleyin.</li>
</ul>

<h2>Telefonu olmayan müşterileri unutmayın</h2>
<p>Telefonunu yanına almamış, şarjı bitmiş veya basılı menüyü okumayı tercih eden müşteriler için bir iki adet basılı menü bulundurun.</p>
<p>Ayrıca misafirleriniz için bir <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> oluşturup menü QR Code'unun yanına koyabilirsiniz.</p>
`
};
