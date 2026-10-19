// apa-itu-qr-code
module.exports = {
  title: "QR Code nədir və necə işləyir?",
  desc: "QR Code link, mətn və hətta WiFi məlumatlarını saxlaya bilir və bir hissəsi zədələnsə belə, oxunmağa davam edir. Onun iş prinsipi və üstünlükləri ilə tanış olun.",
  tags: ["Əsaslar", "QR Code"],
  coverCaption: "QR Code-u birbaşa telefon kamerası ilə skan etmək olar.",
  inlineCaption: "Hər bir QR Code kiçik qara və ağ xanalardan ibarətdir.",
  faq: [
    ["QR Code-un müddəti bitə bilərmi?", "Statik QR Code-un müddəti heç vaxt bitmir, çünki məlumat birbaşa şəklin içinə yerləşdirilib. Dinamik QR Code isə linki təmin edən xidmət fəaliyyətini dayandırarsa və ya abunəlik bitərsə, işləməyə bilər."],
    ["QR Code nə qədər məlumat saxlaya bilər?", "QR Code-un ən böyük versiyası 7.089 rəqəmə və ya təxminən 2.953 bayta qədər məlumat saxlaya bilər. Lakin məlumat nə qədər az olsa, QR Code-u skan etmək bir o qədər asan olur."],
    ["QR Code-un bir hissəsi zədələnsə, oxunacaqmı?", "Bəli. Xətaların korreksiyası sayəsində QR Code istifadə olunan L, M, Q və ya H korreksiya səviyyəsindən asılı olaraq, təxminən 7%-dən 30%-ə qədər hissəsi zədələnsə belə, oxunur."]
  ],
  body: `
<p>QR Code (Quick Response Code) kiçik qara və ağ xanalardan ibarət, kvadrat formalı 2D barkoddur. Cəmi on-on beş rəqəm saxlayan xətti barkoddan fərqli olaraq, QR Code sayt linkini, uzun mətni, telefon nömrəsini, kontaktı və hətta WiFi şəbəkəsinin məlumatlarını saxlaya bilir.</p>
<p>QR Code 1994-cü ildə Yaponiya şirkəti Denso Wave tərəfindən zavodda avtomobil ehtiyat hissələrini izləmək üçün hazırlanıb. Bu gün QR Code-dan rəqəmsal ödənişlərdən tutmuş restoran menyularına qədər hər yerdə istifadə olunur, çünki onu birbaşa telefon kamerası ilə skan etmək mümkündür.</p>

<h2>QR Code-un hissələri</h2>
<ul>
  <li><strong>Künclərdəki üç böyük kvadrat</strong> (finder pattern): kameraya QR Code-u tapmağa və onun istiqamətini müəyyən etməyə kömək edir, buna görə də QR Code əyri və ya tərsinə skan edilsə belə, oxunur.</li>
  <li><strong>Hizalama naxışı</strong> (alignment pattern): əyilmiş və ya bucaq altında görünən QR Code-u oxumağa kömək edən kiçik kvadrat.</li>
  <li><strong>Məlumat sahəsi</strong>: saxladığınız məlumatı özündə daşıyan kiçik xanalar.</li>
  <li><strong>Sakit zona</strong> (quiet zone): QR Code-un fondan asanlıqla ayrılması üçün onun ətrafındakı boş sahə.</li>
</ul>

<h2>Nə qədər məlumat saxlaya bilər?</h2>
<p>QR Code-un 40 ölçü versiyası var. Ən böyük versiya 7.089 rəqəmə və ya təxminən 2.953 bayta qədər məlumat saxlaya bilər. Praktikada saxlanılan məlumat nə qədər az olsa, xanalar bir o qədər böyük olur və QR Code-u skan etmək bir o qədər asanlaşır. Buna görə də qısa link çox uzun linkdən daha yaxşıdır.</p>

<h2>Zədələnsə belə, oxunur</h2>
<p>QR Code xətaların korreksiyasından (error correction) istifadə edir. Dörd səviyyə var:</p>
<ul>
  <li><strong>L</strong>: QR Code-un təxminən 7%-i zədələnsə belə, məlumatı bərpa etmək mümkündür.</li>
  <li><strong>M</strong>: təxminən 15%. Bu, geniş yayılmış və balanslı seçimdir.</li>
  <li><strong>Q</strong>: təxminən 25%.</li>
  <li><strong>H</strong>: təxminən 30%; üzərinə loqo qoyulacaq və ya tez çirklənən yerdə çap ediləcək QR Code üçün uyğundur.</li>
</ul>
<p>Korreksiya səviyyəsi nə qədər yüksək olsa, bir o qədər çox xana tələb olunur, buna görə də QR Code-un naxışı daha sıx görünür.</p>

<h2>QR Code-da nələri saxlamaq olar?</h2>
<ul>
  <li>Sayt, onlayn mağaza və ya forma linki.</li>
  <li>WiFi məlumatları; bu sayədə qonaqlar şifrə yazmadan qoşula bilir. <a href="/artikel/cara-membuat-qr-code-wifi">WiFi QR Code</a> bələdçisinə baxın.</li>
  <li>Rəqəmsal vizit kartı (vCard), e-poçt, SMS və WhatsApp söhbəti.</li>
  <li>Xəritədə məkan və tədbir təqvimi.</li>
</ul>

<h2>Statik və dinamik QR Code</h2>
<p>Birbaşa məlumatdan yaradılan QR Code <strong>statik QR Code</strong> adlanır: onun məzmunu şəklin içinə yerləşdirilir və dəyişdirilə bilməz, amma müddəti də heç vaxt bitmir. <strong>Dinamik</strong> QR Code isə hansısa xidmətə məxsus qısa linkdən ibarətdir və bu link Sizi təyinat ünvanınıza yönləndirir; təyinat ünvanını dəyişmək olar, lakin həmin xidmət fəaliyyətini dayandırarsa, QR Code işləməz. Əksər ehtiyaclar üçün statik QR Code kifayətdir və uzunmüddətli perspektivdə daha etibarlıdır.</p>

<p>Sınamaq istəyirsiniz? Elə indi <a href="/?type=qrcode">pulsuz QR Code</a> yaradın və ya <a href="/artikel/cara-membuat-qr-code-gratis">3 addımda QR Code yaratmaq qaydası</a> ilə tanış olun.</p>
`
};
