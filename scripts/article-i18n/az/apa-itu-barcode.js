// apa-itu-barcode
module.exports = {
  title: "Barkod nədir? Tərifi, iş prinsipi və növləri",
  desc: "Barkod aldığınız demək olar ki, bütün məhsulların üzərində var. Onun necə işlədiyini, qısa tarixçəsini və ən çox istifadə olunan barkod növlərini öyrənin.",
  tags: ["Əsaslar", "Barkod"],
  coverCaption: "Qablaşdırmadakı barkod məhsulun unikal kodunu saxlayır.",
  inlineCaption: "Kassir barkodu bir anda oxumaq üçün skanerdən istifadə edir.",
  faq: [
    ["Barkod ilə QR Code arasında nə fərq var?", "QR Code barkod növlərindən biridir, yəni 2D barkoddur. Xətti (1D) barkodlar cəmi bir neçə simvol saxlayır və soldan sağa oxunur, QR Code isə məlumatı iki istiqamətdə saxlayır, buna görə də ona link, mətn və ya WiFi məlumatları sığır."],
    ["Barkod məhsulun qiymətini saxlayırmı?", "Adətən yox. Məhsul barkodunda yalnız kod olur. Məhsulun qiyməti və adı kassa sistemində saxlanılır və skan edilən koda əsasən tapılır."],
    ["Barkod yaratmaq ödənişlidirmi?", "Xeyr. Barkod şəklini pulsuz yaratmaq olar, məsələn, I Need Barcode saytında. Ödənişli qeydiyyat yalnız EAN-13 kimi pərakəndə məhsul barkodları üçün GS1 vasitəsilə alınan rəsmi nömrəyə lazımdır."]
  ],
  body: `
<p>Barkod məlumatı maşının oxuya biləcəyi naxış şəklində yazmaq üsuludur. Bu naxış adətən müxtəlif enli qara və ağ xətlərdən və ya bir kvadratın içində düzülmüş kiçik xanalardan ibarət olur. Skan edildikdə naxış yenidən rəqəmlərə və ya mətnə çevrilir, məsələn, məhsul koduna, göndəriş nömrəsinə və ya sayt ünvanına.</p>
<p>Barkodu maşın oxuduğu üçün o, kodu əl ilə yazmaqdan qat-qat sürətlidir və səhv ehtimalı xeyli azdır. Məhz buna görə barkodlardan kassalarda, anbarlarda, xəstəxanalarda, biletlərdə və hətta qida qablaşdırmalarında istifadə olunur.</p>

<h2>Barkodun qısa tarixçəsi</h2>
<p>Barkod ideyası 1952-ci ildə ABŞ-da Norman Cozef Vudlend və Bernard Silver tərəfindən patentləşdirilib. Barkoddan mağazalarda real olaraq ilk dəfə 1974-cü ildə istifadə olunub: həmin il Ohayo ştatındakı bir supermarketdə bir paket saqqız UPC kodu ilə skan edilib. O vaxtdan barkodlar bütün dünyaya yayılıb və hazırda qlobal miqyasda GS1 adlı standartlar təşkilatı tərəfindən idarə olunur.</p>

<h2>Barkod necə işləyir?</h2>
<p>Skaner barkodu işıqlandırır və əks olunan işığı oxuyur. Tünd hissələr az, açıq hissələr isə çox işıq əks etdirir. Bu fərq 0 və 1-lərdən ibarət ardıcıllığa çevrilir və həmin barkod növünün qaydaları ilə tutuşdurulur. Bir çox barkodda həmçinin <strong>yoxlama rəqəmi</strong> (check digit) olur, yəni əvvəlki rəqəmlərdən hesablanan sonuncu rəqəm. Hesablamanın nəticəsi uyğun gəlmirsə, skaner nəyinsə səhv olduğunu anlayır və nəticəni rədd edir.</p>
<p>Barkodun özündə adətən yalnız kod saxlanılır. Məhsulun adı və ya qiyməti kimi məlumatlar kassa sistemində və ya verilənlər bazasında saxlanılır və həmin koda əsasən tapılır.</p>

<h2>Ən çox istifadə olunan barkod növləri</h2>
<p>Ümumiyyətlə, barkodlar iki böyük qrupa bölünür:</p>
<ul>
  <li><strong>1D (xətti) barkodlar</strong>: soldan sağa oxunan şaquli xətlərdən ibarətdir. Məsələn, pərakəndə məhsullar üçün <a href="/?type=ean13">EAN-13</a> və <a href="/?type=upca">UPC-A</a>, logistika və anbarlar üçün isə <a href="/?type=code128">Code 128</a> və <a href="/?type=code39">Code 39</a>.</li>
  <li><strong>2D barkodlar</strong>: məlumatı iki istiqamətdə saxlayan kvadrat naxışlardır, buna görə də onlara qat-qat çox məlumat sığır. Məsələn, <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> və <a href="/?type=azteccode">Aztec</a>.</li>
</ul>
<p>Bundan əlavə, poçt və göndərişlər, səhiyyə üçün xüsusi barkodlar, həmçinin təchizat zənciri üçün GS1 standartları da mövcuddur. Onların arasındakı fərqlər barədə ətraflı izahı <a href="/artikel/perbedaan-barcode-1d-dan-2d">1D və 2D barkodlar arasındakı fərq</a> məqaləsində oxuya bilərsiniz.</p>

<h2>Barkod nə üçün istifadə olunur?</h2>
<ul>
  <li><strong>Pərakəndə satış</strong>: kassada işi sürətləndirir və ehtiyatı avtomatik qeydə alır.</li>
  <li><strong>Anbar və göndərişlər</strong>: malları və bağlamaları bir yerdən digərinə izləməyə imkan verir.</li>
  <li><strong>Biletlər və tədbirlər</strong>: biletin həqiqiliyini bir skanla yoxlayır.</li>
  <li><strong>Marketinq</strong>: broşür və ya qablaşdırmadakı QR Code insanları birbaşa Sizin saytınıza, menyunuza və ya WhatsApp-ınıza yönləndirir.</li>
</ul>

<h2>Barkodu özünüz yaradın</h2>
<p>Barkod yaratmaq üçün ödənişli proqrama ehtiyacınız yoxdur. <a href="/">I Need Barcode</a> saytında barkod növünü seçin, məlumatı daxil edin və PNG şəkli kimi yükləyin. Seçim üçün 100-dən çox növ var və hamısı pulsuzdur, qeydiyyat tələb olunmur.</p>
`
};
