// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Kiçik və orta biznes üçün EAN-13 məhsul barkodunu necə əldə etmək olar",
  desc: "Məhsulunuzun minimarket və ya supermarket rəflərinə çıxmasını istəyirsiniz? EAN-13 rəqəmlərinin mənasını, GS1 Indonesia-da rəsmi nömrə üçün necə qeydiyyatdan keçməyi və onu necə çap etməyi öyrənin.",
  tags: ["Biznes", "Pərakəndə"],
  coverCaption: "Pərakəndə məhsulun qablaşdırmasında qeydiyyatdan keçmiş EAN-13 barkodu olmalıdır.",
  inlineCaption: "Pərakəndə mağaza məhsulu kassa sistemindəki EAN-13 nömrəsinə görə tanıyır.",
  faq: [
    ["EAN-13 nömrəsini özüm yarada bilərəmmi?", "Barkodun şəklini özünüz yarada bilərsiniz, lakin nömrənin GS1-dən alınmış rəsmi nömrə olması məsləhətdir. Özünüzün uydurduğunuz nömrə başqa məhsulun nömrəsi ilə üst-üstə düşə və pərakəndə mağaza tərəfindən rədd edilə bilər."],
    ["Məhsulun hər variantı üçün ayrıca barkod lazımdırmı?", "Bəli. Hər bir fərqli variantın, məsələn, dadı, ölçüsü və ya qablaşdırmadakı miqdarı fərqli olan məhsulun öz EAN-13 nömrəsi olmalıdır."],
    ["EAN-13-də yoxlama rəqəmi nədir?", "Yoxlama rəqəmi əvvəlki 12 rəqəmdən hesablanan 13-cü rəqəmdir. Skaner ondan barkodun düzgün oxunduğuna əmin olmaq üçün istifadə edir. 12 rəqəm daxil etsəniz, I Need Barcode generatoru onu avtomatik hesablayır."]
  ],
  body: `
<p>Məhsulunuzu minimarketdə, supermarketdə və ya böyük marketplace-də satmaq istəyirsinizsə, adətən qablaşdırmada <strong>EAN-13</strong> barkodunu göstərməyiniz tələb olunacaq. Bu barkod məhsulunuzun bütün dünyada unikal identifikatoru olan 13 rəqəmdən ibarətdir.</p>

<h2>EAN-13-dəki 13 rəqəmin mənası</h2>
<ul>
  <li><strong>GS1 prefiksi</strong>: ilk üç rəqəm nömrəni verən GS1 təşkilatını göstərir. GS1 Indonesia tərəfindən verilən nömrələr <strong>899</strong> ilə başlayır.</li>
  <li><strong>Şirkət nömrəsi</strong>: qeydiyyat zamanı verilən, şirkətinizi tanıdan nömrə.</li>
  <li><strong>Məhsul nömrəsi</strong>: şirkət tərəfindən məhsulun hər variantı üçün, məsələn, fərqli dad və ya fərqli ölçü üçün müəyyən edilir.</li>
  <li><strong>Yoxlama rəqəmi</strong>: səhv oxunmanın qarşısını almaq üçün əvvəlki 12 rəqəmdən avtomatik hesablanan sonuncu rəqəm.</li>
</ul>

<h2>Nə üçün rəsmi nömrə olmalıdır?</h2>
<p>EAN-13 barkodunu hər kəs çəkə bilər, lakin onun <strong>nömrəsi</strong> qeydiyyatdan keçməlidir. Pərakəndə mağazalar məhsulu öz sistemlərində bu nömrəyə görə tanıyır. Nömrəni özünüz uydursanız, o, başqa şirkətin məhsulunun nömrəsi ilə üst-üstə düşə və məhsul mağazada qeydiyyata alınarkən rədd edilə bilər.</p>

<h2>GS1 Indonesia-da nömrə üçün necə qeydiyyatdan keçmək olar</h2>
<ol>
  <li>NIB (Biznesin Qeydiyyat Nömrəsi) və NPWP (Vergi Ödəyicisinin Eyniləşdirmə Nömrəsi) kimi biznes sənədlərini, həmçinin barkod veriləcək məhsulların siyahısını hazırlayın.</li>
  <li>Şirkətinizi GS1 Indonesia-nın rəsmi saytı vasitəsilə qeydiyyatdan keçirin və sizə lazım olan nömrələrin sayını seçin.</li>
  <li>Qüvvədə olan qaydalara uyğun olaraq qeydiyyat haqqını və illik üzvlük haqqını ödəyin.</li>
  <li>Təsdiq edildikdən sonra şirkət nömrəsini alırsınız və hər məhsul üçün nömrə yarada bilərsiniz.</li>
</ol>
<p>Tələblər və ödənişlər dəyişə bilər, buna görə də ən son məlumatı həmişə birbaşa GS1 Indonesia saytında yoxlayın.</p>

<h2>Barkodun şəklini yaradın</h2>
<p>Nömrəni əldə etdikdən sonra <a href="/?type=ean13">EAN-13 generatorunu</a> açın və məhsul nömrənizin 12 və ya 13 rəqəmini daxil edin. 12 rəqəm daxil etsəniz, yoxlama rəqəmi avtomatik hesablanacaq. Rəqəmlərin çap olunması üçün barkodun altındakı mətn seçiminin aktiv olduğuna əmin olun, sonra PNG kimi yükləyin.</p>

<h2>Qablaşdırmada çap üçün məsləhətlər</h2>
<ul>
  <li>Ağ fonda qara və ya tünd göy xətlərdən istifadə edin. Xətlər üçün qırmızı rəngdən çəkinin, çünki bir çox kassa skanerləri qırmızı işıqdan istifadə edir və qırmızı xətlər oxunmur.</li>
  <li>Barkodu həddindən artıq kiçiltməyin. EAN-13-ün standart ölçüsü təxminən 37,3 × 25,9 mm-dir və onu təxminən 80%-ə qədər kiçiltmək olar. Ətraflı məlumat <a href="/artikel/ukuran-barcode-untuk-dicetak">barkod ölçüsü bələdçisində</a>.</li>
  <li>Barkodun sağında və solunda boş sahə saxlayın və onu qablaşdırmanın qatlarında və ya birləşmə yerlərində yerləşdirməyin.</li>
  <li>Böyük tirajla çap etməzdən əvvəl nümunəni skanerlə yoxlayın.</li>
</ul>
<p>Şimali Amerikada satılan məhsullar üçün Sizdən 12 rəqəmdən ibarət <a href="/?type=upca">UPC-A</a> istifadə etməyiniz də tələb oluna bilər.</p>
`
};
