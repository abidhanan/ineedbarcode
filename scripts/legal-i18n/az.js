// Məxfilik Siyasəti və Şərtlər və Qaydalar (Azərbaycan dili).
module.exports = {
  labels: {
    privacy: "Məxfilik Siyasəti",
    terms: "Şərtlər və Qaydalar",
    effective: "Qüvvəyə minmə tarixi: {date}"
  },
  privacy: {
    title: "Məxfilik Siyasəti",
    desc: "Barkod və QR Code yaratdığınız zaman I Need Barcode hansı məlumatları emal edir və biz onlarla necə davranırıq.",
    body: `
<p>I Need Barcode (ineedbarcode.com) Abid Hanan Wicaksono tərəfindən idarə olunan pulsuz barkod və QR Code generatorudur. Bu siyasət vebsaytdan istifadə etdiyiniz zaman hansı məlumatları emal etdiyimizi və onlarla necə davrandığımızı izah edir. Biz qəsdən mümkün qədər az məlumat toplayırıq: bu xidmətdən istifadə etmək üçün qeydiyyatdan keçməyiniz, hesaba daxil olmağınız və ya adınızı və e-poçtunuzu təqdim etməyiniz tələb olunmur.</p>
<h2>Emal etdiyimiz məlumatlar</h2>
<ul>
<li><strong>Barkodun məzmunu.</strong> Daxil etdiyiniz mətn, keçid, WiFi məlumatları, əlaqə məlumatları və digər məlumatlar birbaşa brauzerinizdə emal olunur. Barkod təsvirləri cihazınızda yaradılır və serverlərimizə göndərilmir, o cümlədən eyni anda çoxlu barkod yaratdığınız zaman.</li>
<li><strong>Məkan.</strong> "Məkanımdan istifadə et" düyməsi cihazın məkanını yalnız siz brauzerdə icazə verdikdən sonra tələb edir. Koordinatlar yalnız forma sahəsinə yazılır və bizə göndərilmir.</li>
<li><strong>Təxmini ölkə.</strong> İlkin dili seçmək üçün bu vebsayt serverimizə göndərilən sorğudan təxmini ölkənizi oxuya bilər. Bu məlumat heç bir verilənlər bazasında saxlanılmır.</li>
<li><strong>Texniki məlumatlar.</strong> Demək olar ki, bütün vebsaytlarda olduğu kimi, hostinq provayderimiz (Vercel) təhlükəsizlik və istismar məqsədilə IP ünvanı, brauzer növü və giriş vaxtı kimi sorğulara aid texniki məlumatları qeydə alır. Bu qeydlər Vercel-in siyasətinə uyğun olaraq yalnız müvəqqəti saxlanılır.</li>
<li><strong>Məqalə statistikası.</strong> Aktiv edildikdə baxış, bəyənmə və paylaşma sayları sizi müəyyənləşdirən heç bir məlumat olmadan yalnız hər məqalə üzrə ümumi rəqəm kimi saxlanılır.</li>
</ul>
<h2>Kukilər və brauzerdə saxlama</h2>
<ul>
<li><strong>inbLang</strong>: bu cihazda seçdiyiniz dili yadda saxlayır (localStorage).</li>
<li><strong>inbCountry</strong>: dilin yenidən müəyyən edilməsinə ehtiyac qalmasın deyə təxmini ölkəni bir sessiya ərzində saxlayır (sessionStorage).</li>
<li><strong>Digər yerli saxlama</strong> (localStorage və sessionStorage): bəyəndiyiniz məqalələri qeyd edir və bir ziyarətin iki dəfə hesablanmasının qarşısını alır. Bu məlumatlar cihazınızda qalır.</li>
<li><strong>Üçüncü tərəf analitika kukiləri</strong>: Google Analytics və Microsoft Clarity-yə məxsusdur və aşağıda izah olunur.</li>
</ul>
<h2>Analitika</h2>
<p>Vebsaytdan necə istifadə olunduğunu anlamaq və onu təkmilləşdirmək üçün analitika alətlərindən istifadə edirik. Bu alətlər yalnız siz səhifə ilə qarşılıqlı əlaqəyə başladıqdan sonra yüklənir və brauzeriniz Global Privacy Control və ya Do Not Track siqnalı göndərirsə, ümumiyyətlə yüklənmir. Barkodun məzmunu və formaların məzmunu heç vaxt analitika alətlərinə göndərilmir; yalnız seçilmiş barkod növü və endirmə düyməsinə klik kimi hadisələr qeydə alınır.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google LLC): açılan səhifələri, təxmini ölkəni, cihaz növünü və yuxarıdakı hadisələri ölçmək üçün kukilərdən istifadə edir. Reklam üçün saxlama və Google Signals deaktiv edilib. Məlumatlar Google tərəfindən <a href="https://policies.google.com/privacy">Google Məxfilik Siyasəti</a>nə uyğun olaraq emal olunur.</li>
<li><strong>Microsoft Clarity</strong>: istilik xəritələri və sessiya yazıları üçün klik və sürüşdürmə kimi qarşılıqlı əlaqələri qeydə alır və daxiletmə sahələrinin məzmununu gizlədir. Məlumatlar Microsoft tərəfindən <a href="https://privacy.microsoft.com/privacystatement">Microsoft Məxfilik Bəyanatı</a>na uyğun olaraq emal olunur.</li>
</ul>
<p>Global Privacy Control və ya Do Not Track funksiyasını aktivləşdirməklə, brauzer parametrlərində üçüncü tərəf kukilərini bloklamaqla, izləmə bloklayıcısından istifadə etməklə və ya <a href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on</a> əlavəsini quraşdırmaqla analitikadan imtina edə bilərsiniz. Vebsayt tam şəkildə istifadəyə yararlı qalır.</p>
<h2>Üçüncü tərəf xidmətləri</h2>
<ul>
<li><strong>Vercel Inc.</strong> hostinq xidməti göstərir. Onun serverləri İndoneziyadan kənarda yerləşə bilər.</li>
<li><strong>Google Fonts</strong> bəzi yazı sistemlərini (məsələn, ərəb, tay və ya yapon) göstərmək üçün istifadə olunur. Şriftlər yüklənərkən IP ünvanınız Google üçün görünən olur.</li>
<li><strong>Paylaşma düymələri</strong> (WhatsApp, Facebook, X, LinkedIn, Telegram) və sosial media keçidləri həmin xidmətlərlə yalnız siz onlara kliklədikdə əlaqə qurur.</li>
</ul>
<h2>Təhlükəsizlik və məlumat paylaşımı</h2>
<p>Bu vebsayta bütün bağlantılar HTTPS-dən istifadə edir. Biz şəxsi məlumatları satmırıq, icarəyə vermirik və ticarətini etmirik. Məlumatlar yalnız vebsaytın işləməsi üçün zəruri olduğu həddə yuxarıdakı xidmət təminatçıları ilə və ya qanunla tələb olunduqda paylaşılır.</p>
<h2>Uşaqlar</h2>
<p>Bu xidmət 13 yaşdan kiçik uşaqlar üçün nəzərdə tutulmayıb və biz uşaqların şəxsi məlumatlarını bilərəkdən toplamırıq.</p>
<h2>Hüquqlarınız</h2>
<p>Şəxsi Məlumatların Qorunması haqqında 2022-ci il tarixli 27 nömrəli Qanuna uyğun olaraq, şəxsi məlumatlarınıza çıxış, onların düzəldilməsi və ya silinməsini tələb etmək, həmçinin emala verdiyiniz razılığı geri götürmək hüququnuz var. Sizi müəyyənləşdirən demək olar ki, heç bir məlumat saxlamadığımız üçün sorğuların əksəriyyəti sadəcə brauzerinizdəki kukiləri və sayt məlumatlarını silməklə həll olunur. Google və ya Microsoft tərəfindən emal edilən məlumatlar üçün onların xidmətlərindəki məxfilik parametrlərindən də istifadə edə bilərsiniz. Digər sorğular üçün bizimlə əlaqə saxlayın.</p>
<h2>Siyasətdə dəyişikliklər</h2>
<p>Bu siyasət istənilən vaxt yenilənə bilər. Dəyişikliklər bu səhifədə dərc olunduğu andan qüvvəyə minir, qüvvəyə minmə tarixi isə səhifənin yuxarısında göstərilir.</p>
<h2>Əlaqə</h2>
<p>Bu siyasətlə bağlı suallarınızı hər səhifənin aşağısındakı əlaqə keçidi və ya <a href="https://abidhanan.my.id">abidhanan.my.id</a> vasitəsilə göndərə bilərsiniz. Həmçinin <a href="/syarat-ketentuan">Şərtlər və Qaydalar</a> səhifəmizi oxuyun.</p>
`
  },
  terms: {
    title: "Şərtlər və Qaydalar",
    desc: "Pulsuz barkod və QR Code generatoru olan I Need Barcode-dan istifadə şərtləri və qaydaları.",
    body: `
<p>I Need Barcode-dan (ineedbarcode.com) istifadə etməklə aşağıdakı şərtləri və qaydaları qəbul etmiş olursunuz. Razı deyilsinizsə, xahiş edirik bu xidmətdən istifadə etməyin.</p>
<h2>Xidmət haqqında</h2>
<p>I Need Barcode barkod və QR Code təsvirlərini birbaşa brauzerdə yaratmaq üçün pulsuz alətdir. I Need Barcode GS1 və ya hər hansı digər barkod standartı sahibi ilə əlaqəli deyil, onlar tərəfindən dəstəklənmir və onlarla əməkdaşlıq etmir. QR Code DENSO WAVE INCORPORATED-ə məxsus qeydiyyatdan keçmiş ticarət nişanıdır. Bütün ticarət nişanları müvafiq sahiblərinə məxsusdur.</p>
<h2>İcazə verilən istifadə</h2>
<ul>
<li>Yaratdığınız barkod təsvirlərindən həm şəxsi, həm də kommersiya məqsədləri üçün, məsələn, məhsullar, qablaşdırma, etiketlər və çap materialları üçün su nişanı olmadan və ödənişsiz istifadə edə bilərsiniz.</li>
<li>Biz yalnız barkod təsvirləri yaradırıq və barkod nömrələri vermirik. Pərakəndə məhsullar üçün EAN, UPC və ya GTIN nömrələri GS1 vasitəsilə rəsmi şəkildə qeydiyyatdan keçirilməlidir.</li>
<li>Barkodun istifadə olunduğu yerdə qüvvədə olan qaydalara da əməl edin, məsələn, mağazanın, marketpleysin və ya çatdırılma xidmətinin şərtlərinə.</li>
</ul>
<h2>Sizin məsuliyyətiniz</h2>
<p>Barkoda daxil etdiyiniz məlumatlara və ondan necə istifadə etdiyinizə görə tam məsuliyyət daşıyırsınız. Barkodu böyük sayda çap etməzdən əvvəl həmişə onu bir neçə skaner və ya kamera tətbiqi ilə yoxlayın və ölçüsünün, rənglərinin və kontrastının ehtiyaclarınıza uyğun olduğuna əmin olun.</p>
<h2>Qadağan olunanlar</h2>
<ul>
<li>Fırıldaqçılığa, fişinqə, zərərli proqrama və ya qanuna zidd məzmuna yönləndirən barkod və ya QR Code yaratmaq.</li>
<li>Barkodlardan başqalarına məxsus məhsulları, sənədləri, biletləri və ya nömrələri saxtalaşdırmaq üçün istifadə etmək.</li>
<li>Xidmətə kütləvi şəkildə daxil olmaq üçün bot, skript və ya avtomatlaşdırmadan istifadə etmək.</li>
<li>Serverlərimizin və xidmətlərimizin işini pozmaq, onları həddindən artıq yükləmək və ya təhlükəsizliyini sındırmağa cəhd etmək.</li>
</ul>
<h2>Xidmətin əlçatanlığı</h2>
<p>Xidmət pulsuz təqdim olunur və istənilən vaxt xəbərdarlıq edilmədən dəyişdirilə, məhdudlaşdırıla və ya dayandırıla bilər.</p>
<h2>Məsuliyyətdən imtina</h2>
<p>Xidmət "olduğu kimi" və "mövcud olduğu şəkildə", heç bir zəmanət olmadan təqdim olunur, o cümlədən xidmətin həmişə işləyəcəyinə, xətasız olacağına və ya yaradılan hər bir barkodun bütün cihazlar tərəfindən skan ediləcəyinə və müəyyən məqsəd üçün uyğun olacağına dair zəmanətlər olmadan.</p>
<h2>Məsuliyyətin məhdudlaşdırılması</h2>
<p>Qanunun icazə verdiyi həddə, bu xidmətdən istifadə nəticəsində və ya yaratdığınız barkodlardan irəli gələn birbaşa və ya dolayı zərərlərə, o cümlədən təkrar çap xərclərinə və oxunmayan barkodlar səbəbindən dəyən zərərlərə görə məsuliyyət daşımırıq.</p>
<h2>Üçüncü tərəf keçidləri</h2>
<p>Bu vebsayt üçüncü tərəflərə məxsus sayt və xidmətlərə keçidlər ehtiva edir. Həmin saytların məzmununa və siyasətlərinə görə məsuliyyət daşımırıq.</p>
<h2>Şərtlərdə dəyişikliklər</h2>
<p>Bu şərtlər və qaydalar istənilən vaxt yenilənə bilər. Dəyişikliklər dərc olunduqdan sonra xidmətdən istifadəni davam etdirməklə ən son versiyanı qəbul etmiş sayılırsınız.</p>
<h2>Tətbiq olunan qanun</h2>
<p>Bu şərtlər və qaydalar İndoneziya Respublikasının qanunvericiliyinə tabedir.</p>
<h2>Əlaqə</h2>
<p>Sual və bildirişlərinizi hər səhifənin aşağısındakı əlaqə keçidi və ya <a href="https://abidhanan.my.id">abidhanan.my.id</a> vasitəsilə göndərə bilərsiniz. Həmçinin <a href="/kebijakan-privasi">Məxfilik Siyasəti</a> səhifəmizi oxuyun.</p>
`
  }
};
