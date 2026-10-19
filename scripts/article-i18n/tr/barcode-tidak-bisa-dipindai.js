// barcode-tidak-bisa-dipindai
module.exports = {
  title: "Barkodun Taranamamasının 7 Nedeni ve Çözümleri",
  desc: "Barkod veya QR Code taranamıyor mu? Renk kontrastından boyuta kadar en sık karşılaşılan yedi nedeni ve bunları nasıl düzelteceğinizi inceleyin.",
  tags: ["İpuçları", "Barkod"],
  coverCaption: "Kontrast ve boyut, bir QR Code'un kolay taranıp taranmayacağını belirler.",
  inlineCaption: "Depoda taranamayan barkodlar işleri yavaşlatır.",
  faq: [
    ["QR Code neden bir telefonda taranıyor da başka bir telefonda taranmıyor?", "Kameraların ve tarayıcı uygulamalarının yetenekleri farklıdır. Çok küçük, kontrastı düşük veya renkleri ters çevrilmiş QR Code'lar bazı telefonlarda daha sık başarısız olur. Basmadan önce birkaç telefonla test edin."],
    ["Renkli barkodlar taranabilir mi?", "Evet, açık renkli bir zemin üzerinde koyu renkte oldukları sürece taranabilir. Birçok kasa tarayıcısı kırmızı ışık kullandığından barkod çizgileri için kırmızı renkten kaçının."],
    ["Barkodun doğru olup olmadığını nasıl kontrol ederim?", "Baskıyı birkaç telefon veya tarayıcıyla tarayın ve okunan verinin girdiğiniz veriyle birebir aynı olduğundan emin olun."]
  ],
  body: `
<p>Yüzlerce adet basılmış bir barkodun taranamadığını fark etmekten daha sinir bozucu bir şey yoktur. İyi haber şu ki nedeni genellikle basittir ve kolayca önlenebilir. İşte en sık karşılaşılan yedi neden.</p>

<h2>1. Renk kontrastı çok düşük</h2>
<p>Tarayıcılar koyu ile açık arasındaki farkı okur. Beyaz üzerinde açık gri ya da siyah üzerinde lacivert bir barkod zor ayırt edilir. <strong>Çözüm:</strong> açık renkli bir zemin üzerinde koyu bir renk kullanın. Beyaz üzerine siyah en güvenli seçimdir.</p>

<h2>2. Ters çevrilmiş renkler veya kırmızı renk</h2>
<p>Koyu zemin üzerindeki açık renkli barkodlar her tarayıcı tarafından desteklenmez. Ayrıca birçok kasa tarayıcısı kırmızı ışık kullanır; bu nedenle kırmızı çizgiler beyaz zeminle aynı görünür. <strong>Çözüm:</strong> barkod çizgileri veya modülleri için kırmızı renkten kaçının ve renkleri ters çevirmeyin.</p>

<h2>3. Boyut çok küçük</h2>
<p>Kameranın her modülü tanıyabilmesi için yeterli piksele ihtiyacı vardır. <strong>Çözüm:</strong> barkodu büyütün. Yakından taranacak QR Code'lar için en az yaklaşık 2 × 2 cm kullanın. <a href="/artikel/ukuran-barcode-untuk-dicetak">Baskı boyutu rehberine</a> göz atın.</p>

<h2>4. Sessiz bölge yok</h2>
<p>Bir görsele, yazıya veya kâğıdın kenarına yapışık duran barkodlar çevresinden zor ayırt edilir. <strong>Çözüm:</strong> barkodun çevresinde, özellikle çizgili barkodların sol ve sağında boşluk bırakın.</p>

<h2>5. Bulanık veya bozulmuş görsel</h2>
<p>Küçük bir görselden büyütülen, düşük kaliteli JPG olarak kaydedilen ya da orantısız biçimde esnetilen barkodlar şeklini kaybeder. <strong>Çözüm:</strong> daha büyük modül boyutuyla PNG formatında indirin ve boyutu her zaman orantılı olarak değiştirin.</p>

<h2>6. Yanlış veya türe uygun olmayan veri</h2>
<p>Her barkod türünün kendi kuralları vardır. Örneğin EAN-13 yalnızca doğru kontrol basamağına sahip 12 veya 13 haneli rakamları kabul eder. Yanlış yazılmış bir bağlantı da QR Code'un okunmasına rağmen hiçbir şey açmamasına yol açar. <strong>Çözüm:</strong> basmadan önce verileri kontrol edin. <a href="/">I Need Barcode</a> oluşturucusu, veriler seçilen barkod türünün kurallarına uymuyorsa bir uyarı mesajı gösterir.</p>

<h2>7. Yüzey ve aydınlatma</h2>
<p>Parlak malzemeler, şeffaf plastik, katlanma yerleri ve kavisli yüzeyler ışığı yansıtabilir veya barkodun şeklini bozabilir. <strong>Çözüm:</strong> düz ve parlak olmayan bir yüzeye basın, ardından gerçek ışık koşullarında test edin.</p>

<h2>Tasarımlı QR Code'lar hakkında</h2>
<p>Şekil, renk veya çerçeve eklenmiş QR Code'lar, köşelerindeki üç işaret karesi bozulmadığı ve kontrast yeterli olduğu sürece taranabilir. Ayrıntıları <a href="/artikel/desain-qr-code-kreatif">okunabilirliğini koruyan yaratıcı QR Code tasarımı</a> makalesinde okuyabilirsiniz.</p>
<p>En iyi alışkanlık: büyük miktarda basmadan önce <strong>her zaman tek bir baskıyı test edin</strong>; bunu birkaç telefon ve tarayıcıyla yapın.</p>
`
};
