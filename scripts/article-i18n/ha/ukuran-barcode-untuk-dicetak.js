// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Daidaitaccen Girma da Ingancin Hoton Barcode don Bugawa",
  desc: "Barcode da ya yi ƙanƙanta sosai ko mara haske yana da wuyar sikani. Ku koyi mafi ƙarancin girma, ƙa'idar nisan sikani, da ingancin hoto mai aminci don bugawa.",
  tags: ["Jagora", "Bugu"],
  coverCaption: "Na'urar buga alamomi tana buga barcode don fakiti da kwalaye.",
  inlineCaption: "Girman alama ne ke tantance yadda barcode zai iya girma idan an buga shi.",
  faq: [
    ["Mene ne mafi ƙarancin girman QR Code don bugawa?", "Don sikani daga kusa, kusan 2 × 2 cm shi ne iyaka mai aminci. Don nisa mafi tsawo, ku yi amfani da gwargwadon kusan 10 : 1 tsakanin nisan sikani da faɗin QR Code."],
    ["Mene ne daidaitaccen girman barcode na EAN-13?", "Daidaitaccen girman EAN-13 kusan 37.3 × 25.9 mm ne. Ana iya rage wannan girma har zuwa kusan 80% ko a ƙara shi har zuwa 200%."],
    ["Me ya sa barcode yake rashin haske bayan an buga shi?", "Yawanci saboda hoton ƙarami ne sannan aka ƙara girmansa, ko an ajiye shi a matsayin JPG mara inganci. Ku sauke shi da babban girman module a tsarin PNG."]
  ],
  body: `
<p>Barcode da ke bayyana da kyau a allo ba lallai ne ya karantu bayan an buga shi ba. Girman da ya yi ƙanƙanta sosai, ƙarancin ingancin hoto, ko tawada mai bazuwa na iya sa na'urar sikan ta kasa karantawa. Ga jagora don abubuwan da kuka buga su ci gaba da karantuwa.</p>

<h2>Ku san module</h2>
<p><strong>Module</strong> shi ne mafi ƙanƙantar ma'aunin barcode, wato ƙaramin akwati ɗaya a QR Code ko mafi siririn layi a barcode na layi. Girman module ne ke tantance yadda barcode zai yi sauƙin karantawa. A <a href="/">I Need Barcode</a>, ana iya daidaita girman module a sashen Saituna: yawan girman ƙimar, yawan girma da kaifin hoton da aka sauke.</p>

<h2>Mafi ƙarancin girman QR Code</h2>
<ul>
  <li>Don sikani daga kusa (misali katin kasuwanci ko alamar kaya), girman kusan <strong>2 × 2 cm</strong> shi ne iyaka mai aminci.</li>
  <li>Ku yi amfani da ƙa'idar gwargwadon kusan <strong>10 : 1</strong>: nisan sikani ya kai kusan ninki goma na faɗin QR Code. Ga fosta da za a yi sikanin sa daga nisan mita 2, ku yi QR Code aƙalla kusan 20 cm.</li>
  <li>Yawan bayanan da aka ajiye, yawan matsewar tsarin, don haka ana buƙatar girma mafi girma.</li>
</ul>

<h2>Girman barcode na kaya</h2>
<p>Daidaitaccen girman <a href="/?type=ean13">EAN-13</a> kusan 37.3 × 25.9 mm ne (100%). Ana iya rage wannan girma har zuwa kusan 80% ko a ƙara shi har zuwa 200%. Ku guji yanke tsayin layuka su yi gajeru sosai, domin na'urorin sikan na wuraren biyan kuɗi suna buƙatar sarari don karantawa daga kusurwoyi daban-daban.</p>

<h2>Ingancin hoto</h2>
<ul>
  <li>Don bugawa, ku tabbatar an zana kowane module da <strong>cikakkun pixel da dama</strong>, ba wani ɓangare na pixel ba. Ku zaɓi babban girman module lokacin saukewa, sannan ku rage girmansa a manhajar zane, ba akasin haka ba.</li>
  <li>Ku guji ƙara girman ƙaramin hoton barcode, domin gefunan akwatuna za su zama marasa haske ko masu kaifi-kaifi.</li>
  <li>Ku ajiye shi a tsarin PNG don kada launi da gefuna su lalace kamar yadda ke faruwa da JPG.</li>
</ul>

<h2>Yankin shiru</h2>
<p>Kowane barcode yana buƙatar fili mara komai a kewayensa, wanda ake kira <strong>yankin shiru</strong> (quiet zone). Ga QR Code, ya fi kyau faɗinsa ya kai module huɗu. Ga barcode na layi, fili mara komai a hagu da dama yana da matuƙar muhimmanci. Kada ku manna rubutu, layukan zane, ko gefen kwali kusa da shi sosai.</p>

<h2>Launi da kayan bugawa</h2>
<ul>
  <li>Ku yi amfani da launi mai duhu ga barcode da launi mai haske ga bango.</li>
  <li>Ku guji kayan da ke sheƙi ko masu bayyana abin da ke ciki, domin hasken da ya dawo na iya damun kyamara.</li>
  <li>Koyaushe ku buga samfuri ɗaya kuma ku gwada shi da wayoyi ko na'urorin sikan da dama kafin ku buga da yawa.</li>
</ul>
<p>Idan har yanzu barcode ɗinku yana da wuyar sikani, ku duba <a href="/artikel/barcode-tidak-bisa-dipindai">dalilai 7 da ke sa barcode ya ƙi karantuwa</a>.</p>
`
};
