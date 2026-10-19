// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Baskı için Doğru Barkod Boyutu ve Çözünürlüğü",
  desc: "Çok küçük veya bulanık barkodlar zor taranır. Baskı için güvenli minimum boyutu, tarama mesafesi kuralını ve görsel çözünürlüğünü öğrenin.",
  tags: ["Rehber", "Baskı"],
  coverCaption: "Etiket yazıcısı, paketler ve ambalajlar için barkod basar.",
  inlineCaption: "Etiketin boyutu, barkodun ne kadar büyük basılabileceğini belirler.",
  faq: [
    ["Baskı için QR Code'un minimum boyutu nedir?", "Yakından taranacaksa yaklaşık 2 × 2 cm güvenli alt sınırdır. Daha uzak mesafeler için tarama mesafesi ile QR Code genişliği arasında yaklaşık 10 : 1 oranını kullanın."],
    ["EAN-13 barkodunun standart boyutu nedir?", "EAN-13'ün standart boyutu yaklaşık 37,3 × 25,9 mm'dir. Bu boyut yaklaşık %80'e kadar küçültülebilir veya %200'e kadar büyütülebilir."],
    ["Barkod basıldıktan sonra neden bulanık çıkar?", "Genellikle görselin küçük boyutlu olup sonradan büyütülmesi veya düşük kaliteli JPG olarak kaydedilmesi nedeniyle. Daha büyük modül boyutuyla PNG formatında indirin."]
  ],
  body: `
<p>Ekranda güzel görünen bir barkod, basıldıktan sonra her zaman okunmayabilir. Çok küçük boyut, düşük çözünürlük veya yayılan mürekkep tarayıcının okumasını engelleyebilir. Baskılarınızın okunabilir kalması için işte bir rehber.</p>

<h2>Modülü tanıyın</h2>
<p><strong>Modül</strong>, barkodun en küçük birimidir; yani QR Code'daki tek bir küçük kare ya da çizgili barkoddaki en ince çizgidir. Modül boyutu, barkodun ne kadar kolay okunacağını belirler. <a href="/">I Need Barcode</a> üzerinde modül boyutu Ayarlar bölümünden ayarlanabilir: değer ne kadar büyükse indirilen görsel o kadar büyük ve keskin olur.</p>

<h2>QR Code'un minimum boyutu</h2>
<ul>
  <li>Yakından taranacaksa (örneğin kartvizit veya ürün etiketi) yaklaşık <strong>2 × 2 cm</strong> güvenli alt sınırdır.</li>
  <li>Yaklaşık <strong>10 : 1</strong> oranı kuralını kullanın: tarama mesafesi, QR Code genişliğinin yaklaşık on katıdır. 2 metreden taranacak bir afiş için QR Code'u en az yaklaşık 20 cm yapın.</li>
  <li>Saklanan veri ne kadar fazlaysa desen o kadar sıklaşır ve daha büyük bir boyut gerekir.</li>
</ul>

<h2>Ürün barkodu boyutu</h2>
<p><a href="/?type=ean13">EAN-13</a>'ün standart boyutu yaklaşık 37,3 × 25,9 mm'dir (%100). Bu boyut yaklaşık %80'e kadar küçültülebilir veya %200'e kadar büyütülebilir. Çizgilerin yüksekliğini çok kısaltmaktan kaçının, çünkü kasa tarayıcılarının farklı açılardan okuyabilmek için alana ihtiyacı vardır.</p>

<h2>Görsel çözünürlüğü</h2>
<ul>
  <li>Baskı için her modülün piksellerin bir kısmıyla değil, <strong>birkaç tam pikselle</strong> çizilmesine özen gösterin. İndirirken daha büyük bir modül boyutu seçin ve ardından tasarım uygulamasında küçültün; tersini yapmayın.</li>
  <li>Küçük barkod görsellerini büyütmekten kaçının, çünkü karelerin kenarları bulanıklaşır veya tırtıklı hâle gelir.</li>
  <li>Renklerin ve kenarların JPG'deki gibi bozulmaması için PNG formatında kaydedin.</li>
</ul>

<h2>Sessiz bölge</h2>
<p>Her barkodun çevresinde <strong>sessiz bölge</strong> (quiet zone) adı verilen bir boşluğa ihtiyacı vardır. QR Code için bu boşluk ideal olarak dört modül genişliğinde olmalıdır. Çizgili barkodlarda ise sol ve sağdaki boşluk çok önemlidir. Yazıları, tasarım çizgilerini veya ambalaj kenarlarını barkoda çok yakın yerleştirmeyin.</p>

<h2>Renk ve malzeme</h2>
<ul>
  <li>Barkod için koyu, zemin için açık renk kullanın.</li>
  <li>Işık yansıması kamerayı etkileyebileceğinden parlak veya şeffaf malzemelerden kaçının.</li>
  <li>Çok sayıda basmadan önce her zaman bir örnek basın ve birkaç telefon veya tarayıcıyla test edin.</li>
</ul>
<p>Barkodunuz hâlâ zor taranıyorsa <a href="/artikel/barcode-tidak-bisa-dipindai">barkodun taranamamasının 7 nedeni</a> makalesine göz atın.</p>
`
};
