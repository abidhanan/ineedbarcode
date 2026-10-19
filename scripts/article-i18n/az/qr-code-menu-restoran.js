// qr-code-menu-restoran
module.exports = {
  title: "Restoran menyusu üçün QR Code: tam bələdçi",
  desc: "QR Code vasitəsilə rəqəmsal menyu müştərilərin işini asanlaşdırır və çap xərclərinə qənaət edir. Onu necə yaratmağı, menyunu necə hazırlamağı və masalarda necə yerləşdirməyi öyrənin.",
  tags: ["Biznes", "QR Code"],
  coverCaption: "Masadakı QR Code müştərini birbaşa rəqəmsal menyuya aparır.",
  inlineCaption: "QR Code-u oturacaqdan asanlıqla əl çatan yerə qoyun.",
  faq: [
    ["Rəqəmsal menyu üçün nə istifadə etmək daha yaxşıdır: PDF, yoxsa veb səhifə?", "Veb səhifəni telefonda oxumaq adətən daha rahatdır və o, daha tez açılır. PDF-dən faylın həcmi kiçik və yazılar ekranda kifayət qədər iri olduqda istifadə etmək olar."],
    ["Masadakı menyu QR Code-u hansı ölçüdə olmalıdır?", "Oturacaqdan skan etmək üçün təxminən 3–5 sm kifayətdir. Tökülən mayelərə davamlı və çox parıldamayan materialdan istifadə edin."],
    ["Menyu dəyişəndə QR Code-u yenidən çap etmək lazımdırmı?", "Xeyr, link eyni qaldıqca lazım deyil. QR Code-un yönləndirdiyi səhifənin və ya menyu faylının məzmununu yeniləmək kifayətdir."]
  ],
  body: `
<p>QR Code vasitəsilə rəqəmsal menyu artıq kafe və restoranlarda adi hala çevrilib. Müştərinin yeməklərin siyahısını, qiymətləri və şəkilləri görmək üçün masadakı QR Code-u skan etməsi kifayətdir. Biznes sahibləri üçün isə bu üsul çap xərclərinə qənaət edir və qiymətləri və ya menyunu dəyişməyi asanlaşdırır.</p>

<h2>QR Code menyunun üstünlükləri</h2>
<ul>
  <li><strong>Asan yenilənir</strong>: menyu kitabçasını yenidən çap etmədən qiymətləri dəyişin və ya yeni yeməklər əlavə edin.</li>
  <li><strong>Qənaətlidir</strong>: hər masa üçün kiçik bir QR Code çap etmək kifayətdir.</li>
  <li><strong>Daha informativdir</strong>: şəkilləri, təsvirləri və acı və ya vegetarian kimi nişanları göstərin.</li>
  <li><strong>Onlayn sifarişi dəstəkləyir</strong>: müştəriləri sifariş formasına və ya WhatsApp-a yönləndirin.</li>
</ul>

<h2>Addım 1: Onlayn menyu hazırlayın</h2>
<p>QR Code-da yalnız link olur, buna görə də Sizə internetdə açıla bilən menyu lazımdır. Seçimlər arasında öz saytınızdakı səhifə, onlayn yaddaşda hamı üçün açıq paylaşılan PDF faylı və ya sifariş platformasındakı kataloq səhifəsi var. Menyunun telefon ekranında rahat oxunduğuna əmin olun: yazılar kifayət qədər iri, şəkillər çox ağır olmasın, qiymətlər isə aydın görünsün.</p>

<h2>Addım 2: QR Code yaradın</h2>
<ol>
  <li>Menyunuzun linkini kopyalayın.</li>
  <li><a href="/?type=qrcode">QR Code generatorunu</a> açın, <strong>URL</strong> tabını seçin və həmin linki yapışdırın.</li>
  <li>Dizayn bölməsində "MENYU" və ya "MENYUYA BAXMAQ ÜÇÜN SKAN EDİN" yazılı çərçivə əlavə edin.</li>
  <li>Rəngləri restoranın korporativ üslubuna uyğunlaşdırın, lakin yenə də açıq fonda tünd rəngdən istifadə edin.</li>
  <li>Çap üçün kifayət qədər böyük modul ölçüsü ilə PNG yükləyin.</li>
</ol>
<p>Dəyişməyəcək linkdən istifadə edin. Menyu başqa ünvana köçürülərsə, artıq çap olunmuş QR Code-u yeniləmək mümkün olmayacaq. Bunun izahı <a href="/artikel/apa-itu-qr-code">QR Code nədir</a> məqaləsindədir.</p>

<h2>Addım 3: Çap edin və yerləşdirin</h2>
<ul>
  <li>Oturacaqdan asan skan olunması üçün ən azı təxminən 3–5 sm ölçüdə çap edin.</li>
  <li>Vinil stiker və ya həddindən artıq parıltısı olmayan laminasiya edilmiş kart kimi tökülən mayelərə davamlı materialdan istifadə edin.</li>
  <li>Asanlıqla əl çatan yerə, məsələn, masanın ortasındakı akril altlığa qoyun.</li>
  <li>Müştərilər çat vasitəsilə sifariş verirsə, QR Code-un yanına masa nömrəsini əlavə edin.</li>
</ul>

<h2>Telefonu olmayan müştəriləri unutmayın</h2>
<p>Telefonu yanında olmayan, telefonunun batareyası bitmiş və ya çap olunmuş menyunu oxumağı daha rahat sayan müştərilər üçün bir-iki çap menyusu saxlayın.</p>
<p>Həmçinin qonaqlar üçün <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> yaradıb onu menyu QR Code-unun yanında yerləşdirə bilərsiniz.</p>
`
};
