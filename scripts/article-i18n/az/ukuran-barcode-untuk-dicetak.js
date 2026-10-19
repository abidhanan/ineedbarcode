// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Çap üçün düzgün barkod ölçüsü və ayırdetmə qabiliyyəti",
  desc: "Çox kiçik və ya bulanıq barkodu skan etmək çətindir. Çap üçün təhlükəsiz minimum ölçünü, skan məsafəsi qaydasını və şəklin ayırdetmə qabiliyyətini öyrənin.",
  tags: ["Bələdçi", "Çap"],
  coverCaption: "Etiket printeri bağlamalar və qablaşdırma üçün barkod çap edir.",
  inlineCaption: "Barkodun nə qədər böyük çap oluna biləcəyi etiketin ölçüsündən asılıdır.",
  faq: [
    ["Çap üçün QR Code-un minimum ölçüsü nə qədərdir?", "Yaxın məsafədən skan etmək üçün təxminən 2 × 2 sm təhlükəsiz həddir. Daha uzaq məsafə üçün skan məsafəsi ilə QR Code-un eni arasında təxminən 10 : 1 nisbətindən istifadə edin."],
    ["EAN-13 barkodunun standart ölçüsü nə qədərdir?", "EAN-13-ün standart ölçüsü təxminən 37,3 × 25,9 mm-dir. Bu ölçünü təxminən 80%-ə qədər kiçiltmək və ya 200%-ə qədər böyütmək olar."],
    ["Nə üçün barkod çapdan sonra bulanıq çıxır?", "Adətən ona görə ki, şəkil kiçik ölçüdə olub və sonra böyüdülüb, ya da aşağı keyfiyyətli JPG kimi saxlanılıb. Daha böyük modul ölçüsü ilə PNG formatında yükləyin."]
  ],
  body: `
<p>Ekranda yaxşı görünən barkod çapdan sonra mütləq oxunacaq demək deyil. Çox kiçik ölçü, aşağı ayırdetmə qabiliyyəti və ya yayılan mürəkkəb skanerin oxumasına mane ola bilər. Çap nəticənizin oxunaqlı qalması üçün bələdçi aşağıdadır.</p>

<h2>Modulla tanış olun</h2>
<p><strong>Modul</strong> barkodun ən kiçik vahididir, yəni QR Code-da bir kiçik xana və ya xətti barkodda ən nazik xətt. Modulun ölçüsü barkodun nə qədər asan oxunacağını müəyyən edir. <a href="/">I Need Barcode</a> saytında modul ölçüsünü Parametrlər bölməsində tənzimləmək olar: dəyər nə qədər böyük olsa, yüklənən şəkil bir o qədər böyük və kəskin olar.</p>

<h2>QR Code-un minimum ölçüsü</h2>
<ul>
  <li>Yaxın məsafədən skan etmək üçün (məsələn, vizit kartı və ya məhsul etiketi) təxminən <strong>2 × 2 sm</strong> ölçü təhlükəsiz həddir.</li>
  <li>Təxminən <strong>10 : 1</strong> nisbət qaydasından istifadə edin: skan məsafəsi QR Code-un enindən təxminən on dəfə çox olur. 2 metr məsafədən skan ediləcək afişa üçün QR Code-u ən azı təxminən 20 sm edin.</li>
  <li>Nə qədər çox məlumat saxlanılsa, naxış bir o qədər sıx olur, buna görə də daha böyük ölçü tələb olunur.</li>
</ul>

<h2>Məhsul barkodunun ölçüsü</h2>
<p><a href="/?type=ean13">EAN-13</a>-ün standart ölçüsü təxminən 37,3 × 25,9 mm-dir (100%). Bu ölçünü təxminən 80%-ə qədər kiçiltmək və ya 200%-ə qədər böyütmək olar. Xətlərin hündürlüyünü çox qısaltmayın, çünki kassa skanerinə müxtəlif bucaqlardan oxumaq üçün yer lazımdır.</p>

<h2>Şəklin ayırdetmə qabiliyyəti</h2>
<ul>
  <li>Çap üçün hər modulun pikselin bir hissəsi ilə deyil, <strong>bir neçə tam piksellə</strong> çəkilməsinə çalışın. Yükləyərkən daha böyük modul ölçüsü seçin, sonra dizayn proqramında kiçildin, əksinə yox.</li>
  <li>Kiçik barkod şəklini böyütməkdən çəkinin, çünki xanaların kənarları bulanıqlaşacaq və ya pilləli görünəcək.</li>
  <li>Rənglərin və kənarların JPG-də olduğu kimi korlanmaması üçün PNG formatında saxlayın.</li>
</ul>

<h2>Sakit zona</h2>
<p>Hər barkodun ətrafında boş sahə lazımdır; bu, <strong>sakit zona</strong> (quiet zone) adlanır. QR Code üçün onun ideal eni dörd moduldur. Xətti barkod üçün sağda və solda boş sahə çox vacibdir. Yazıları, dizayn xətlərini və ya qablaşdırmanın kənarlarını barkoda çox yaxın yerləşdirməyin.</p>

<h2>Rəng və material</h2>
<ul>
  <li>Barkod üçün tünd, fon üçün açıq rəngdən istifadə edin.</li>
  <li>Parıldayan və ya şəffaf materiallardan çəkinin, çünki işığın əks olunması kameraya mane ola bilər.</li>
  <li>Böyük tirajla çap etməzdən əvvəl həmişə bir nümunə çap edin və onu bir neçə telefon və ya skanerlə yoxlayın.</li>
</ul>
<p>Barkodunuz yenə də çətin skan olunursa, <a href="/artikel/barcode-tidak-bisa-dipindai">barkodun skan olunmamasının 7 səbəbi</a> məqaləsinə baxın.</p>
`
};
