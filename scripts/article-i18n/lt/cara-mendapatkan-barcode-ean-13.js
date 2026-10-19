// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Kaip gauti EAN-13 prekės brūkšninį kodą mažajam verslui",
  desc: "Norite, kad jūsų prekė patektų į parduotuves ar prekybos centrus? Sužinokite, ką reiškia EAN-13 skaitmenys, kaip užregistruoti oficialų numerį GS1 Indonesia ir kaip jį atspausdinti.",
  tags: ["Verslas", "Mažmeninė prekyba"],
  coverCaption: "Mažmeninės prekybos prekių pakuotėms reikia registruoto EAN-13 brūkšninio kodo.",
  inlineCaption: "Parduotuvė atpažįsta prekę pagal EAN-13 numerį savo kasos sistemoje.",
  faq: [
    ["Ar galima susikurti EAN-13 numerį patiems?", "Brūkšninio kodo paveikslėlį galite susikurti patys, tačiau numeris turėtų būti oficialus, gautas iš GS1. Patiems sugalvotas numeris gali sutapti su kitos prekės numeriu, ir parduotuvės jį atmes."],
    ["Ar kiekvienam prekės variantui reikia atskiro brūkšninio kodo?", "Taip. Kiekvienam skirtingam variantui, pavyzdžiui, kitokio skonio, dydžio ar pakuotės turinio, reikia atskiro EAN-13 numerio."],
    ["Kas yra EAN-13 kontrolinis skaitmuo?", "Kontrolinis skaitmuo yra 13-asis skaitmuo, apskaičiuojamas iš 12 ankstesnių skaitmenų. Skaitytuvas jį naudoja, kad įsitikintų, jog brūkšninis kodas nuskaitytas teisingai. I Need Barcode generatorius jį apskaičiuoja automatiškai, jei įvedate 12 skaitmenų."]
  ],
  body: `
<p>Jei norite, kad jūsų prekė būtų parduodama parduotuvėse, prekybos centruose ar didelėse prekyvietėse, paprastai jūsų paprašys ant pakuotės pateikti <strong>EAN-13</strong> brūkšninį kodą. Šį brūkšninį kodą sudaro 13 skaitmenų, kurie tampa unikaliu jūsų prekės identifikatoriumi visame pasaulyje.</p>

<h2>Ką reiškia 13 EAN-13 skaitmenų</h2>
<ul>
  <li><strong>GS1 prefiksas</strong>: pirmieji trys skaitmenys nurodo numerį išdavusią GS1 organizaciją. GS1 Indonesia išduoti numeriai prasideda <strong>899</strong>.</li>
  <li><strong>Įmonės numeris</strong>: jūsų įmonės identifikatorius, suteikiamas registruojantis.</li>
  <li><strong>Prekės numeris</strong>: įmonė pati jį nustato kiekvienam prekės variantui, pavyzdžiui, kitokio skonio ar dydžio.</li>
  <li><strong>Kontrolinis skaitmuo</strong>: paskutinis skaitmuo, automatiškai apskaičiuojamas iš 12 ankstesnių skaitmenų, kad būtų išvengta nuskaitymo klaidų.</li>
</ul>

<h2>Kodėl reikia oficialaus numerio?</h2>
<p>EAN-13 brūkšninį kodą nupiešti gali bet kas, tačiau <strong>numeris</strong> turi būti registruotas. Parduotuvės pagal šį numerį atpažįsta prekę savo sistemose. Jei numerį sugalvosite patys, jis gali sutapti su kitos įmonės prekės numeriu ir būti atmestas, kai prekė bus registruojama parduotuvėje.</p>

<h2>Kaip užregistruoti numerį GS1 Indonesia</h2>
<ol>
  <li>Parenkite verslo dokumentus, tokius kaip NIB (Nomor Induk Berusaha) ir NPWP, taip pat prekių, kurioms bus suteikiami brūkšniniai kodai, sąrašą.</li>
  <li>Užregistruokite įmonę oficialioje GS1 Indonesia svetainėje ir pasirinkite reikiamą numerių kiekį.</li>
  <li>Sumokėkite registracijos mokestį ir metinį mokestį pagal galiojančias taisykles.</li>
  <li>Patvirtinus paraišką gausite įmonės numerį ir galėsite sukurti numerius kiekvienai prekei.</li>
</ol>
<p>Reikalavimai ir mokesčiai gali keistis, todėl visada tikrinkite naujausią informaciją tiesiai GS1 Indonesia svetainėje.</p>

<h2>Brūkšninio kodo paveikslėlio kūrimas</h2>
<p>Gavę numerį, atidarykite <a href="/?type=ean13">EAN-13 generatorių</a> ir įveskite 12 ar 13 savo prekės numerio skaitmenų. Jei įvesite 12 skaitmenų, kontrolinis skaitmuo bus apskaičiuotas automatiškai. Įsitikinkite, kad įjungta teksto po brūkšniniu kodu parinktis, kad skaičiai būtų atspausdinti, ir atsisiųskite kaip PNG.</p>

<h2>Patarimai spausdinant ant pakuotės</h2>
<ul>
  <li>Naudokite juodas arba tamsiai mėlynas linijas ant balto fono. Venkite raudonos spalvos linijoms, nes daugelis kasų skaitytuvų naudoja raudoną šviesą, todėl raudonos linijos nenuskaitomos.</li>
  <li>Per daug nesumažinkite brūkšninio kodo. Standartinis EAN-13 dydis yra apie 37,3 × 25,9 mm, jį galima sumažinti iki maždaug 80 %. Daugiau – <a href="/artikel/ukuran-barcode-untuk-dicetak">brūkšninių kodų dydžių gide</a>.</li>
  <li>Palikite tuščios vietos brūkšninio kodo kairėje ir dešinėje ir nedėkite jo ant pakuotės lenkimų ar siūlių.</li>
  <li>Prieš spausdindami dideliais kiekiais išbandykite atspaudą skaitytuvu.</li>
</ul>
<p>Prekėms, parduodamoms Šiaurės Amerikoje, gali būti reikalaujama naudoti <a href="/?type=upca">UPC-A</a>, kurį sudaro 12 skaitmenų.</p>
`
};
