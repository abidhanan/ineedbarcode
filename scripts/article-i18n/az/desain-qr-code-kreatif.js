// desain-qr-code-kreatif
module.exports = {
  title: "Skan olunmağa davam edən kreativ QR Code dizaynı",
  desc: "QR Code-u ürək, dairə formasında yaratmaq, ona çərçivə və rəng əlavə etmək olar. Dizaynın həm cəlbedici, həm də asan skan olunan qalması üçün qaydaları öyrənin.",
  tags: ["Dizayn", "QR Code"],
  coverCaption: "Rənglər QR Code-u daha cəlbedici edir, yetər ki, kontrast güclü qalsın.",
  inlineCaption: "QR Code dizaynını çapdan əvvəl həmişə yoxlamaq məsləhətdir.",
  faq: [
    ["Ürək formalı QR Code skan olunurmu?", "Bəli. Əsl QR Code mərkəzdə bütöv qalır, qalan hissə isə sadəcə bəzək naxışıdır. Kontrast güclü və ölçü kifayət qədər olduqca, QR Code oxunur."],
    ["QR Code üçün hansı rənglər təhlükəsizdir?", "Ağ və ya çox açıq fonda qara, tünd göy, tünd yaşıl, bənövşəyi və ya tünd qəhvəyi kimi tünd rənglər."],
    ["QR Code-a yazı və ya çərçivə əlavə etmək olarmı?", "Olar. \"MƏNİ SKAN EDİN\" kimi çağırışlı çərçivə, əksinə, insanlara onun nə üçün olduğunu anlamağa kömək edir, yetər ki, çərçivə QR Code-u örtməsin."]
  ],
  body: `
<p>Qara-ağ QR Code funksionaldır, lakin qablaşdırmada, dəvətnamələrdə və ya reklam materiallarında çox vaxt quru görünür. Bir az dizayn toxunuşu ilə QR Code funksiyasını itirmədən daha cəlbedici görünə bilər. Əsas məsələ hansı hissələrin dəyişdirilə biləcəyini, hansılarının isə bütöv qalmalı olduğunu anlamaqdır.</p>

<h2>Xarici forma: ürək, dairə və digərləri</h2>
<p><a href="/?type=qrcode">QR Code generatorunun</a> Dizayn bölməsində dairə, ürək, altıbucaq, səkkizbucaq, ulduz və ya romb kimi formaları seçə bilərsiniz. Əsl QR Code mərkəzdə qalır, qalan hissə isə seçilmiş forma alınana qədər bəzək naxışı ilə doldurulur. Bəzək naxışında məlumat olmur, buna görə də əsl QR Code-un ətrafında boş məsafə olduqca, skan etməyə mane olmur.</p>

<h2>Nöqtə üslubu</h2>
<p>QR Code-un xanalarını yumrulanmış formaya və ya dairəvi nöqtələrə çevirmək olar. Asan skan olunması üçün künclərdəki üç böyük kvadratın (finder pattern) bütöv kvadrat kimi qalması məsləhətdir, çünki kamera ilk növbədə məhz bu hissəni axtarır. Generatorumuz hansı nöqtə üslubunu seçməyinizdən asılı olmayaraq, bu hissəni həmişə bütöv kvadrat kimi, ən çoxu yumrulanmış künclərlə çəkir.</p>

<h2>Rəng</h2>
<ul>
  <li>QR Code üçün <strong>tünd</strong>, fon üçün isə <strong>açıq</strong> rəngdən istifadə edin. Tünd göy, tünd yaşıl, bənövşəyi və ya tünd qəhvəyi adətən təhlükəsizdir.</li>
  <li>QR Code üçün sarı, solğun çəhrayı və ya açıq boz kimi solğun rənglərdən çəkinin.</li>
  <li>Rəngləri tərsinə çevirib tünd fonda açıq rəngli QR Code etməyin, çünki bütün skaner tətbiqləri bunu dəstəkləmir.</li>
</ul>

<h2>Çərçivə və çağırış</h2>
<p>"MƏNİ SKAN EDİN", "MENYU" və ya "SCAN WIFI" kimi çağırış yazılı çərçivənin insanlara QR Code-un nə üçün olduğunu anlamağa kömək etdiyi sübut olunub. Alt yazılı, üst yazılı, künc, şar, dairə və ya lent çərçivəsini seçə, sonra yazını və rəngini dəyişə bilərsiniz.</p>

<h2>Dizaynın oxunaqlı qalması üçün qaydalar</h2>
<ol>
  <li>QR Code ilə fonu arasında güclü <strong>kontrast</strong> saxlayın.</li>
  <li>Künclərdəki <strong>üç nişan kvadratını</strong> aydın və açıq saxlayın, onları örtməyin.</li>
  <li>QR Code-un və çərçivənin ətrafında <strong>boş sahə</strong> saxlayın.</li>
  <li>Dizayn verilmiş QR Code-u həddindən artıq kiçiltməyin. Ürək kimi formalar əsl QR Code sahəsini şəklin ümumi ölçüsündən kiçik edir.</li>
  <li>Çapdan əvvəl bir neçə telefonla <strong>yoxlayın</strong>.</li>
</ol>

<p>Dizaynınız çətin skan olunursa, səbəbi tapmaq üçün <strong>Sıfırla</strong> düyməsi ilə parametrləri bir-bir əsas vəziyyətə qaytarın. Digər geniş yayılmış səbəbləri <a href="/artikel/barcode-tidak-bisa-dipindai">barkodun skan olunmamasının 7 səbəbi</a> məqaləsində oxuya bilərsiniz.</p>
`
};
