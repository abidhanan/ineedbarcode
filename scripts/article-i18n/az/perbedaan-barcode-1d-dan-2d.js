// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "1D və 2D barkodlar arasındakı fərq: Sizə hansı lazımdır?",
  desc: "Xətti barkod da, QR Code da barkoddur, lakin onların təyinatı fərqlidir. Tutumlarını, skan üsullarını və istifadə nümunələrini müqayisə edin.",
  tags: ["Əsaslar", "Barkod"],
  coverCaption: "Anbardakı əl skaneri 1D və 2D barkodları oxuyur.",
  inlineCaption: "Göndəriş etiketlərində adətən xətti barkoddan istifadə olunur.",
  faq: [
    ["Kassa skaneri QR Code-u oxuya bilərmi?", "Hamısı yox. 1D lazer skanerləri yalnız xətti barkodları oxuyur. QR Code üçün kamera əsaslı 2D skaner və ya telefon kamerası lazımdır."],
    ["Ən kiçik barkod hansıdır?", "Data Matrix çox kiçik ölçüdə çap oluna bilən 2D barkodlardandır, buna görə də ondan tez-tez elektron komponentlərdə, tibbi avadanlıqda və dərman etiketlərində istifadə olunur."],
    ["Pərakəndə məhsullarda EAN-13 əvəzinə QR Code istifadə etmək olarmı?", "Pərakəndə mağazada satılması üçün məhsulun yenə də qeydiyyatdan keçmiş EAN-13 və ya UPC kodu olmalıdır. QR Code-u qablaşdırmaya əlavə olaraq, məsələn, məhsul haqqında məlumat və ya reklam üçün yerləşdirmək olar."]
  ],
  body: `
<p>Barkod yaradarkən adətən ilk yaranan sual belədir: xətti barkod, yoxsa QR Code? Hər ikisi barkod adlanır, lakin məlumatı fərqli şəkildə saxlayır, buna görə də təyinatları da fərqlidir.</p>

<h2>1D (xətti) barkod</h2>
<p>1D barkod şaquli xətlərdən ibarət barkoddur. Məlumat bir istiqamətdə, yəni soldan sağa saxlanılır. Ən tanınmış nümunələr məhsul qablaşdırmasındakı <a href="/?type=ean13">EAN-13</a> və göndəriş etiketlərindəki <a href="/?type=code128">Code 128</a>-dir.</p>
<ul>
  <li>Tutumu kiçikdir, adətən on-on beşdən bir neçə onlarla simvola qədər.</li>
  <li>Ucuz və çox sürətli kassa lazer skanerləri ilə oxuna bilir.</li>
  <li>Məhsul kodları, seriya nömrələri və göndəriş nömrələri üçün uyğundur.</li>
</ul>

<h2>2D barkod</h2>
<p>2D barkod məlumatı iki istiqamətdə, yana və aşağıya doğru saxlayır, buna görə də ona qat-qat çox məlumat sığır. Məsələn, <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a> və <a href="/?type=azteccode">Aztec</a>.</p>
<ul>
  <li>Tutumu böyükdür, onlarla simvoldan minlərlə simvola qədər.</li>
  <li>Telefon kamerası ilə müxtəlif istiqamətlərdən skan edilə bilir.</li>
  <li>Xətaların korreksiyası var, buna görə də bir hissəsi zədələnsə belə, oxunur.</li>
  <li>Çox kiçik ölçüdə yaradıla bilir, məsələn, elektron komponentlərdəki Data Matrix.</li>
</ul>

<h2>Qısa müqayisə</h2>
<table>
  <thead><tr><th></th><th>1D barkod</th><th>2D barkod</th></tr></thead>
  <tbody>
    <tr><td>Forma</td><td>Şaquli xətlər</td><td>Kvadratın içində xanalar/nöqtələr</td></tr>
    <tr><td>Tutum</td><td>Kiçik</td><td>Böyük</td></tr>
    <tr><td>Skan vasitəsi</td><td>Lazer skaneri və ya kamera</td><td>Kamera və ya 2D skaner</td></tr>
    <tr><td>Zədəyə davamlılıq</td><td>Məhduddur</td><td>Xətaların korreksiyası var</td></tr>
    <tr><td>Nümunələr</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>Hansını nə vaxt istifadə etməli?</h2>
<ul>
  <li><strong>Mağazada və ya minimarketdə satılan məhsullar</strong>: GS1-dən alınmış rəsmi EAN-13 istifadə edin. <a href="/artikel/cara-mendapatkan-barcode-ean-13">EAN-13 barkodunu necə əldə etmək olar</a> məqaləsinə baxın.</li>
  <li><strong>Anbar, rəf və ya göndəriş etiketləri</strong>: Code 128 geniş yayılmış seçimdir, çünki yığcamdır və həm hərfləri, həm də rəqəmləri dəstəkləyir.</li>
  <li><strong>Müştərilər üçün link, menyu, WiFi və ya kontakt</strong>: QR Code, çünki onu birbaşa telefon kamerası ilə skan etmək olar.</li>
  <li><strong>Çox kiçik etiketlər</strong>: Data Matrix.</li>
  <li><strong>Şəxsiyyət vəsiqələri, aviabiletlər və ya sənədlər</strong>: PDF417 və ya Aztec.</li>
</ul>
<p>Yuxarıdakı bütün növləri <a href="/">I Need Barcode</a> saytında pulsuz yarada bilərsiniz. Hələ də tərəddüd edirsinizsə, müştəri ehtiyacları üçün QR Code, daxili ehtiyaclar üçün isə Code 128 ilə başlayın.</p>
`
};
