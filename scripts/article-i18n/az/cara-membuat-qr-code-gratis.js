// cara-membuat-qr-code-gratis
module.exports = {
  title: "3 addımda pulsuz QR Code necə yaradılır",
  desc: "Tətbiq və qeydiyyat olmadan link, WiFi, kontakt və ya WhatsApp üçün QR Code yaratmağa dair praktik bələdçi, asan skan olunması üçün məsləhətlərlə birlikdə.",
  tags: ["Bələdçi", "QR Code"],
  coverCaption: "QR Code link, WiFi və ya kontakt üçün istifadəyə hazırdır.",
  inlineCaption: "Noutbukda və ya telefonda brauzeri açmaq kifayətdir, əlavə tətbiq lazım deyil.",
  faq: [
    ["Pulsuz yaradılmış QR Code-dan biznes üçün istifadə etmək olarmı?", "Olar. Yaratdığınız statik QR Code-dan qablaşdırmada, broşürlərdə, menyularda və ya reklam materiallarında sərbəst istifadə edə bilərsiniz; su nişanı yoxdur və lisenziya haqqı tələb olunmur."],
    ["Çap edildikdən sonra QR Code-un məzmununu dəyişmək olarmı?", "Statik QR Code-u çap edildikdən sonra dəyişmək mümkün deyil. Məzmunun dəyişə biləcəyi ehtimalı varsa, QR Code-u məzmununu özünüz yeniləyə biləcəyiniz səhifəyə, məsələn, saytınızdakı bir səhifəyə yönləndirin."],
    ["QR Code-u çap etmək üçün ən yaxşı şəkil formatı hansıdır?", "PNG, çünki xanaların kənarları kəskin qalır. Kifayət qədər böyük modul ölçüsü ilə yükləyin, lazım gələrsə, dizayn proqramında kiçildin, əksinə yox."]
  ],
  body: `
<p>Bu gün QR Code yaratmaq üçün xüsusi tətbiqə və ya abunə haqqına ehtiyac yoxdur. <a href="/">I Need Barcode</a> kimi onlayn generatorla QR Code-u istər telefonda, istərsə də noutbukda birbaşa brauzerdən bir neçə saniyəyə yarada bilərsiniz.</p>

<h2>Addım 1: Barkod növünü seçin</h2>
<p><a href="/?type=qrcode">QR Code generatorunu</a> açın və Barkod növü bölməsində <strong>QR Code</strong> seçin. Barkod telefon kamerası ilə skan ediləcəksə, QR Code ən uyğun seçimdir.</p>

<h2>Addım 2: Məlumatı daxil edin</h2>
<p>Ehtiyacınıza uyğun məlumat növünü seçin:</p>
<ul>
  <li><strong>URL</strong>: sayt, onlayn mağaza, Google Maps və ya forma linki.</li>
  <li><strong>WiFi</strong>: şəbəkənin adı və şifrəsi; bu sayədə qonaqlar heç nə yazmadan qoşula bilir.</li>
  <li><strong>Kontakt</strong>: rəqəmsal vizit kartı formatında ad, telefon nömrəsi, e-poçt və şirkət.</li>
  <li><strong>WhatsApp</strong>: nömrə və ilk mesaj; bu sayədə müştərilər Sizinlə dərhal söhbətə başlayır.</li>
  <li>Digər ehtiyaclar üçün <strong>Mətn, E-poçt, Telefon, SMS, Məkan, Tədbir</strong>.</li>
</ul>
<p>Hər dəfə yazdıqca önizləmə dərhal yenilənir, beləliklə, nəticəni yükləməzdən əvvəl yoxlaya bilərsiniz.</p>

<h2>Addım 3: Görünüşü tənzimləyin və yükləyin</h2>
<p>Parametrlər bölməsində modul ölçüsünü (nə qədər böyük olsa, çapda bir o qədər kəskin olar), rəngi və kənar boşluğunu tənzimləyin. Dizayn bölməsində dairə və ya ürək kimi forma, nöqtə üslubu, həmçinin "MƏNİ SKAN EDİN" kimi yazısı olan çərçivə əlavə edə bilərsiniz. Hazır olduqda <strong>PNG yüklə</strong> düyməsini basın.</p>

<h2>QR Code-un asan skan olunması üçün məsləhətlər</h2>
<ul>
  <li><strong>Çapdan əvvəl yoxlayın.</strong> İki-üç müxtəlif telefonla normal məsafədən skan edin.</li>
  <li><strong>Güclü kontrastdan istifadə edin.</strong> Açıq fonda tünd rəng ən etibarlı seçimdir. Tünd fonda açıq rəngli QR Code-dan çəkinin.</li>
  <li><strong>Çox kiçik etməyin.</strong> Yaxın məsafədən skan etmək üçün təxminən 2 × 2 sm ölçü təhlükəsiz həddir. Skan məsafəsi nə qədər uzaq olsa, ölçü bir o qədər böyük olmalıdır. Həmçinin <a href="/artikel/ukuran-barcode-untuk-dicetak">çap üçün barkod ölçüsü</a> məqaləsini oxuyun.</li>
  <li>QR Code başqa şəklə və ya yazıya bitişməsin deyə, onun <strong>ətrafında boş sahə saxlayın</strong>.</li>
  <li><strong>Qısa linkdən istifadə edin.</strong> Az məlumat daha seyrək və asan oxunan naxış yaradır.</li>
</ul>

<h2>Eyni anda çoxlu QR Code lazımdır?</h2>
<p><strong>Toplu</strong> rejimini aktivləşdirin, hər sətirə bir məlumat yazın (100 sətirə qədər) və hamısını bir ZIP faylında yükləyin. Bu üsul inventar etiketləri, iştirakçı kartları və ya tədbir biletləri üçün uyğundur.</p>
`
};
