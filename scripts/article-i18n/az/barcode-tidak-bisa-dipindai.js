// barcode-tidak-bisa-dipindai
module.exports = {
  title: "Barkodun skan olunmamasının 7 səbəbi və onların həlli",
  desc: "Barkod və ya QR Code skan olunmur? Rəng kontrastından ölçüyə qədər ən çox rast gəlinən yeddi səbəbi və onların aradan qaldırılması yollarını yoxlayın.",
  tags: ["Məsləhətlər", "Barkod"],
  coverCaption: "QR Code-un asan skan olunub-olunmaması kontrastdan və ölçüdən asılıdır.",
  inlineCaption: "Anbarda skan olunmayan barkod işi ləngidir.",
  faq: [
    ["Nə üçün QR Code bir telefonda skan olunur, digərində isə yox?", "Kameraların və skaner tətbiqlərinin imkanları fərqlidir. Çox kiçik, kontrastı aşağı və ya rəngləri tərsinə olan QR Code bəzi telefonlarda daha tez-tez oxunmur. Çapdan əvvəl bir neçə telefonla yoxlayın."],
    ["Rəngli barkodu skan etmək olarmı?", "Olar, bir şərtlə ki, açıq fonda tünd rəngdə olsun. Barkod xətləri üçün qırmızı rəngdən çəkinin, çünki bir çox kassa skanerləri qırmızı işıqdan istifadə edir."],
    ["Barkodun düzgün olub-olmadığını necə yoxlamaq olar?", "Çap olunmuş nüsxəni bir neçə telefon və ya skanerlə skan edin və oxunan məlumatın daxil etdiyiniz məlumatla tam eyni olduğuna əmin olun."]
  ],
  body: `
<p>Yüzlərlə nüsxə çap olunmuş barkodun skan olunmadığını aşkar etməkdən daha əsəbiləşdirici bir şey yoxdur. Yaxşı xəbər budur ki, səbəb adətən sadədir və qarşısını almaq asandır. Aşağıda ən çox rast gəlinən yeddi səbəb verilib.</p>

<h2>1. Rəng kontrastı çox aşağıdır</h2>
<p>Skaner tünd və açıq arasındakı fərqi oxuyur. Ağ üzərində açıq boz və ya qara üzərində tünd göy barkodu ayırd etmək çətindir. <strong>Həll:</strong> açıq fonda tünd rəngdən istifadə edin. Ağ üzərində qara ən etibarlı seçimdir.</p>

<h2>2. Tərs rənglər və ya qırmızı rəng</h2>
<p>Tünd fonda açıq rəngli barkodu bütün skanerlər dəstəkləmir. Bundan əlavə, bir çox kassa skanerləri qırmızı işıqdan istifadə edir, buna görə də qırmızı xətlər ağ fonla eyni görünür. <strong>Həll:</strong> barkodun xətləri və ya modulları üçün qırmızı rəngdən çəkinin və rəngləri tərsinə çevirməyin.</p>

<h2>3. Ölçü çox kiçikdir</h2>
<p>Kameranın hər bir modulu tanıması üçün kifayət qədər piksel lazımdır. <strong>Həll:</strong> barkodu böyüdün. Yaxın məsafədən skan ediləcək QR Code üçün ən azı təxminən 2 × 2 sm ölçüdən istifadə edin. <a href="/artikel/ukuran-barcode-untuk-dicetak">Çap ölçüsü bələdçisinə</a> baxın.</p>

<h2>4. Sakit zona yoxdur</h2>
<p>Şəklə, yazıya və ya kağızın kənarına bitişik olan barkodu ətrafından ayırmaq çətindir. <strong>Həll:</strong> barkodun ətrafında, xüsusilə xətti barkodun sağında və solunda boş sahə saxlayın.</p>

<h2>5. Şəkil bulanıq və ya təhrif olunub</h2>
<p>Kiçik şəkildən böyüdülmüş, aşağı keyfiyyətli JPG kimi saxlanılmış və ya qeyri-mütənasib şəkildə dartılmış barkod formasını itirir. <strong>Həll:</strong> barkodu daha böyük modul ölçüsü ilə PNG formatında yükləyin və ölçüsünü həmişə mütənasib şəkildə dəyişin.</p>

<h2>6. Məlumat səhvdir və ya növə uyğun deyil</h2>
<p>Hər barkod növünün öz qaydaları var. Məsələn, EAN-13 yalnız düzgün yoxlama rəqəmi olan 12 və ya 13 rəqəmli ədədləri qəbul edir. Səhv yazılmış link də QR Code-un oxunmasına, lakin heç nəyi açmamasına səbəb olur. <strong>Həll:</strong> çapdan əvvəl məlumatı yoxlayın. <a href="/">I Need Barcode</a> generatoru məlumat seçilmiş barkod növünün qaydalarına uyğun gəlmədikdə xəbərdarlıq göstərir.</p>

<h2>7. Səth və işıqlandırma</h2>
<p>Parıldayan materiallar, şəffaf plastik, qatlar və əyri səthlər işığı əks etdirə və ya barkodun formasını dəyişə bilər. <strong>Həll:</strong> düz və parıldamayan səthdə çap edin, sonra real işıqlandırma şəraitində yoxlayın.</p>

<h2>Dizaynlı QR Code barədə</h2>
<p>Forması, rəngi və ya çərçivəsi dəyişdirilmiş QR Code künclərindəki üç nişan kvadratı bütöv qaldıqca və kontrast kifayət qədər olduqca skan olunur. Ətraflı məlumatı <a href="/artikel/desain-qr-code-kreatif">oxunaqlı qalan kreativ QR Code dizaynı</a> məqaləsində oxuyun.</p>
<p>Ən yaxşı vərdiş: <strong>həmişə əvvəlcə bir nüsxəni yoxlayın</strong>; böyük tirajla çap etməzdən əvvəl onu bir neçə telefon və skanerlə sınaqdan keçirin.</p>
`
};
