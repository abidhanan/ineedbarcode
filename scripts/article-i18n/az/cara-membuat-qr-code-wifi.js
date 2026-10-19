// cara-membuat-qr-code-wifi
module.exports = {
  title: "Qonaqlar şifrə yazmasın deyə WiFi QR Code necə yaradılır",
  desc: "WiFi-a qoşulmaq üçün qonaqların QR Code-u skan etməsi kifayətdir. Kafe, ofis, qonaq evi və ev üçün idealdır. Onu necə yaradıb yerləşdirməyi öyrənin.",
  tags: ["Bələdçi", "QR Code"],
  coverCaption: "Routerin WiFi məlumatlarını bir QR Code-da saxlamaq olar.",
  inlineCaption: "Kafenin qonaqları şifrə yazmadan dərhal qoşula bilir.",
  faq: [
    ["Bütün telefonlar WiFi QR Code-u skan edə bilərmi?", "iOS 11 və daha yeni versiyalı iPhone-ların, həmçinin Android 10 və daha yeni versiyalı əksər cihazların daxili kamerası onu birbaşa oxuya bilir. Köhnə telefonlar üçün QR skaner tətbiqi lazım ola bilər."],
    ["WiFi QR Code təhlükəsizdirmi?", "Həmin QR Code-u skan edən hər kəs WiFi şəbəkənizə qoşula bilər. Buna görə də qonaq şəbəkəsindən istifadə edin və şəxsi şəbəkənizin QR Code-unu ictimai yerlərdə yerləşdirməyin."],
    ["WiFi şifrəsi dəyişdirilərsə, nə etmək lazımdır?", "WiFi QR Code-u yenidən yaradın və çap edin, çünki köhnə QR Code-da hələ də köhnə şifrə var."]
  ],
  body: `
<p>Uzun WiFi şifrəsini qonaqlara hərf-hərf demək, xüsusilə də içində böyük hərflər, rəqəmlər və simvollar varsa, çox vaxt narahatlıq yaradır. <strong>WiFi QR Code</strong> ilə qonaqların telefon kamerasını QR Code-a tutması kifayətdir və onlar dərhal qoşulurlar.</p>

<h2>WiFi QR Code necə işləyir</h2>
<p>WiFi QR Code şəbəkənin adını (SSID), təhlükəsizlik növünü və şifrəni telefonların tanıdığı xüsusi formatda saxlayır, məsələn, <code>WIFI:T:WPA;S:NamaJaringan;P:Sandi;;</code>. iPhone-un (iOS 11 və daha yeni) və əksər Android cihazlarının (Android 10 və daha yeni) daxili kamerası onu əlavə tətbiq olmadan birbaşa oxuya bilir.</p>

<h2>Yaratma addımları</h2>
<ol>
  <li><a href="/?type=qrcode">QR Code generatorunu</a> açın və Məlumat bölməsində <strong>WiFi</strong> tabını seçin.</li>
  <li><strong>Şəbəkənin adını</strong> WiFi siyahısında göründüyü kimi, böyük və kiçik hərflərə qədər eynilə yazın.</li>
  <li><strong>Şifrəni</strong> yazın və təhlükəsizlik növünü seçin. Ev və ofis routerlərinin əksəriyyəti WPA/WPA2/WPA3 istifadə edir.</li>
  <li>WiFi şəbəkənizin adı siyahıda görünmürsə, <strong>Gizli şəbəkə</strong> xanasını işarələyin.</li>
  <li>Qonaqlar onun nə üçün olduğunu bilsin deyə, məsələn, "SCAN WIFI" yazılı çərçivə əlavə edin və PNG kimi yükləyin.</li>
</ol>

<h2>Onu harada yerləşdirmək olar?</h2>
<ul>
  <li>Kafe və ya restoran masasında kiçik kartda.</li>
  <li>Qonaq otağının, resepsiyanın və ya ofisin iclas otağının divarında.</li>
  <li>Qonaq evinin otağında, qapının və ya televizorun yanında.</li>
  <li>Evdə routerin alt hissəsində; bu sayədə ailə üzvləri yeni cihazları asanlıqla qoşa bilər.</li>
</ul>

<h2>Təhlükəsizlik məsləhətləri</h2>
<ul>
  <li>Routeriniz dəstəkləyirsə, <strong>qonaq şəbəkəsindən</strong> (guest network) istifadə edin; bu halda qonaqlar ofis kompüterləri ilə eyni şəbəkəyə daxil olmur.</li>
  <li>WiFi şifrəsi dəyişdirilərsə, QR Code-u yenidən yaradın və çap edin, çünki köhnə QR Code-da köhnə şifrə qalacaq.</li>
  <li>Şəxsi şəbəkə üçün WiFi QR Code-u hər kəsin şəklini çəkə biləcəyi ictimai yerlərdə yerləşdirməyin.</li>
</ul>

<h2>QR Code ilə qoşulmaq alınmırsa</h2>
<p>Şəbəkə adının və şifrənin yazılışını yenidən yoxlayın, çünki bircə səhv hərf telefonun qoşulmasına mane olur. Həmçinin seçilmiş təhlükəsizlik növünün routerin parametrlərinə uyğun olduğuna əmin olun. Skanla bağlı digər problemlər üçün <a href="/artikel/barcode-tidak-bisa-dipindai">barkodun skan olunmamasının səbəbləri</a> məqaləsini oxuyun.</p>
`
};
