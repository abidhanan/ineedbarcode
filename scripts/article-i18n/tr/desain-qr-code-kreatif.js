// desain-qr-code-kreatif
module.exports = {
  title: "Taranabilirliğini Koruyan Yaratıcı QR Code Tasarımları",
  desc: "QR Code kalp veya daire şeklinde yapılabilir, çerçeve ve renk eklenebilir. Tasarımın hem çekici hem de kolay taranabilir kalması için kuralları öğrenin.",
  tags: ["Tasarım", "QR Code"],
  coverCaption: "Kontrast güçlü kaldığı sürece renkler QR Code'u daha çekici hâle getirir.",
  inlineCaption: "QR Code tasarımı basılmadan önce her zaman test edilmelidir.",
  faq: [
    ["Kalp şeklindeki QR Code taranabilir mi?", "Evet. Asıl QR Code ortada bozulmadan kalır, geri kalanı yalnızca süsleme desenidir. Kontrast güçlü ve boyut yeterli olduğu sürece QR Code okunabilir."],
    ["QR Code için hangi renkler güvenlidir?", "Beyaz veya çok açık bir zemin üzerinde siyah, lacivert, koyu yeşil, mor veya koyu kahverengi gibi koyu renkler."],
    ["QR Code'a yazı veya çerçeve eklenebilir mi?", "Evet. \"BENİ TARA\" gibi bir çağrı içeren çerçeve, QR Code'u kapatmadığı sürece insanların ne işe yaradığını anlamasına aslında yardımcı olur."]
  ],
  body: `
<p>Siyah beyaz QR Code işlevseldir, ancak ambalajlarda, davetiyelerde veya tanıtım materyallerinde çoğu zaman sıkıcı görünür. Küçük bir tasarım dokunuşuyla QR Code, işlevini kaybetmeden daha çekici görünebilir. İşin sırrı, hangi bölümlerin değiştirilebileceğini ve hangilerinin olduğu gibi kalması gerektiğini bilmektir.</p>

<h2>Dış şekil: kalp, daire ve diğerleri</h2>
<p><a href="/?type=qrcode">QR Code oluşturucunun</a> Tasarım bölümünde daire, kalp, altıgen, sekizgen, yıldız veya baklava gibi şekiller seçebilirsiniz. Asıl QR Code ortada kalır ve geri kalan alan, seçilen şekil oluşana kadar süsleme deseniyle doldurulur. Süsleme deseni veri içermez; bu nedenle asıl QR Code'un çevresinde boşluk olduğu sürece taramayı etkilemez.</p>

<h2>Nokta stili</h2>
<p>QR Code'un kareleri yuvarlatılmış biçimlere veya yuvarlak noktalara dönüştürülebilir. Kolayca taranabilmesi için köşelerdeki üç büyük karenin (finder pattern) kare olarak bozulmadan kalması önerilir, çünkü kameranın ilk aradığı bölüm burasıdır. Oluşturucumuz, hangi nokta stilini seçerseniz seçin, bu bölümü her zaman tam bir kare olarak, en fazla köşeleri yuvarlatılmış şekilde çizer.</p>

<h2>Renk</h2>
<ul>
  <li>QR Code için <strong>koyu</strong>, zemin için <strong>açık</strong> renk kullanın. Lacivert, koyu yeşil, mor veya koyu kahverengi genellikle güvenlidir.</li>
  <li>QR Code için sarı, soluk pembe veya açık gri gibi soluk renklerden kaçının.</li>
  <li>Renkleri ters çevirip koyu zemin üzerinde açık renkli QR Code yapmayın, çünkü her tarayıcı uygulaması bunu desteklemez.</li>
</ul>

<h2>Çerçeve ve çağrı</h2>
<p>"BENİ TARA", "MENÜ" veya "SCAN WIFI" gibi çağrılar içeren çerçevelerin, insanların QR Code'un işlevini anlamasına yardımcı olduğu kanıtlanmıştır. Alt etiket, üst etiket, köşe, konuşma balonu, daire veya şerit çerçevelerinden birini seçebilir, ardından yazıyı ve rengini değiştirebilirsiniz.</p>

<h2>Tasarımın okunabilir kalması için kurallar</h2>
<ol>
  <li>QR Code ile zemini arasında güçlü bir <strong>kontrast</strong> koruyun.</li>
  <li>Köşelerdeki <strong>üç işaret karesinin</strong> net ve açıkta kalmasını sağlayın.</li>
  <li>QR Code'un ve çerçevenin çevresinde <strong>boşluk</strong> bırakın.</li>
  <li>Tasarım eklenmiş QR Code'u aşırı küçültmeyin. Kalp gibi şekiller, asıl QR Code alanını görselin toplam boyutundan daha küçük hâle getirir.</li>
  <li>Basmadan önce birkaç telefonla <strong>test edin</strong>.</li>
</ol>

<p>Tasarımınız zor taranıyorsa nedeni bulmak için <strong>Sıfırla</strong> düğmesiyle ayarları birer birer temel hâline döndürün. Diğer yaygın nedenleri <a href="/artikel/barcode-tidak-bisa-dipindai">barkodun taranamamasının 7 nedeni</a> makalesinde okuyabilirsiniz.</p>
`
};
