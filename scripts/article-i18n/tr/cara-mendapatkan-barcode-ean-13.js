// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "KOBİ'ler için EAN-13 Ürün Barkodu Nasıl Alınır?",
  desc: "Ürünlerinizin marketlerde veya süpermarketlerde satılmasını mı istiyorsunuz? EAN-13 rakamlarının anlamını, GS1 Indonesia'ya resmî numara başvurusunun nasıl yapıldığını ve barkodun nasıl basılacağını öğrenin.",
  tags: ["İşletme", "Perakende"],
  coverCaption: "Perakende ürün ambalajları kayıtlı bir EAN-13 barkoduna ihtiyaç duyar.",
  inlineCaption: "Perakende mağazaları ürünleri kasa sistemlerindeki EAN-13 numarasıyla tanır.",
  faq: [
    ["Kendi EAN-13 numaramı oluşturabilir miyim?", "Barkod görselini kendiniz oluşturabilirsiniz, ancak numaranın GS1'den alınmış resmî bir numara olması gerekir. Kendi uydurduğunuz numara başka bir ürünle çakışabilir ve perakende mağazaları tarafından reddedilebilir."],
    ["Her ürün çeşidi için farklı bir barkod gerekir mi?", "Evet. Farklı tat, boyut veya ambalaj içeriği gibi her farklı çeşit için ayrı bir EAN-13 numarası gerekir."],
    ["EAN-13'teki kontrol basamağı nedir?", "Kontrol basamağı, önceki 12 rakamdan hesaplanan 13. rakamdır. Tarayıcı, barkodun doğru okunduğundan emin olmak için bunu kullanır. 12 hane girdiğinizde I Need Barcode oluşturucusu bunu otomatik olarak hesaplar."]
  ],
  body: `
<p>Ürününüzü marketlerde, süpermarketlerde veya büyük pazaryerlerinde satmak istiyorsanız genellikle ambalajın üzerine bir <strong>EAN-13</strong> barkodu koymanız istenir. Bu barkod, ürününüzün dünya genelindeki benzersiz kimliği olan 13 haneli bir numara içerir.</p>

<h2>EAN-13'teki 13 hanenin anlamı</h2>
<ul>
  <li><strong>GS1 öneki</strong>: ilk üç hane, numarayı veren GS1 kuruluşunu gösterir. GS1 Indonesia tarafından verilen numaralar <strong>899</strong> ile başlar.</li>
  <li><strong>Firma numarası</strong>: kayıt sırasında size verilen firma kimliğinizdir.</li>
  <li><strong>Ürün numarası</strong>: firmanın her ürün çeşidi için, örneğin farklı tat veya farklı boyut için, kendisinin belirlediği numaradır.</li>
  <li><strong>Kontrol basamağı</strong>: yanlış okumayı önlemek için önceki 12 haneden otomatik olarak hesaplanan son hanedir.</li>
</ul>

<h2>Neden resmî numara gerekir?</h2>
<p>EAN-13 barkodunu herkes çizebilir, ancak <strong>numarasının</strong> kayıtlı olması gerekir. Perakende mağazaları bu numarayı ürünü kendi sistemlerinde tanımak için kullanır. Numarayı kendiniz uydurursanız başka bir firmanın ürünüyle çakışabilir ve ürün mağazaya kaydedilirken reddedilebilir.</p>

<h2>GS1 Indonesia'ya numara başvurusu nasıl yapılır?</h2>
<ol>
  <li>NIB (Nomor Induk Berusaha, işletme kayıt numarası) ve NPWP (vergi kimlik numarası) gibi işletme belgelerini ve barkod verilecek ürünlerin listesini hazırlayın.</li>
  <li>Firmanızı GS1 Indonesia'nın resmî web sitesi üzerinden kaydettirin ve ihtiyaç duyduğunuz numara adedini seçin.</li>
  <li>Geçerli kurallara göre kayıt ücretini ve yıllık aidatı ödeyin.</li>
  <li>Başvurunuz onaylandıktan sonra bir firma numarası alırsınız ve her ürün için numara oluşturabilirsiniz.</li>
</ol>
<p>Gereklilikler ve ücretler değişebilir; bu nedenle en güncel bilgileri her zaman doğrudan GS1 Indonesia'nın web sitesinden kontrol edin.</p>

<h2>Barkod görselini oluşturma</h2>
<p>Numaranızı aldıktan sonra <a href="/?type=ean13">EAN-13 oluşturucuyu</a> açın ve ürün numaranızın 12 veya 13 hanesini girin. 12 hane girerseniz kontrol basamağı otomatik olarak hesaplanır. Rakamların basılması için barkodun altındaki metin seçeneğinin etkin olduğundan emin olun ve ardından PNG olarak indirin.</p>

<h2>Ambalaja basma ipuçları</h2>
<ul>
  <li>Beyaz zemin üzerinde siyah veya lacivert çizgiler kullanın. Çizgiler için kırmızı renkten kaçının; birçok kasa tarayıcısı kırmızı ışık kullandığından kırmızı çizgiler okunamaz.</li>
  <li>Barkodu aşırı küçültmeyin. EAN-13'ün standart boyutu yaklaşık 37,3 × 25,9 mm'dir ve yaklaşık %80'e kadar küçültülebilir. Ayrıntılar <a href="/artikel/ukuran-barcode-untuk-dicetak">barkod boyutu rehberinde</a>.</li>
  <li>Barkodun sol ve sağında boşluk bırakın; ambalajın katlanma yerlerine veya birleşim noktalarına yerleştirmekten kaçının.</li>
  <li>Büyük miktarda basmadan önce baskıyı bir tarayıcıyla test edin.</li>
</ul>
<p>Kuzey Amerika'da satılan ürünler için 12 haneli <a href="/?type=upca">UPC-A</a> kullanmanız da istenebilir.</p>
`
};
