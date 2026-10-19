// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 redes waarom 'n strepieskode nie geskandeer kan word nie en hoe om dit reg te stel",
  desc: "Kan u strepieskode of QR Code nie geskandeer word nie? Kyk na die sewe algemeenste oorsake, van kleurkontras tot grootte, en hoe om dit reg te stel.",
  tags: ["Wenke", "Strepieskode"],
  coverCaption: "Kontras en grootte bepaal of 'n QR Code maklik geskandeer kan word.",
  inlineCaption: "In die pakhuis vertraag strepieskodes wat nie skandeer nie die werk.",
  faq: [
    ["Waarom kan 'n QR Code met een foon geskandeer word, maar nie met 'n ander nie?", "Kameras en skandeertoepassings verskil in vermoë. QR Codes wat te klein is, 'n lae kontras het of omgekeerde kleure het, misluk meer dikwels op sekere fone. Toets met verskeie fone voordat u druk."],
    ["Kan gekleurde strepieskodes geskandeer word?", "Ja, solank die kleur donker is op 'n ligte agtergrond. Vermy rooi vir die strepe van die strepieskode, omdat baie kassaskandeerders rooi lig gebruik."],
    ["Hoe kontroleer ek of die strepieskode korrek is?", "Skandeer die drukstuk met verskeie fone of skandeerders, en maak seker dat die data wat gelees word presies dieselfde is as die data wat u ingevoer het."]
  ],
  body: `
<p>Niks is meer frustrerend as 'n strepieskode wat in honderde eksemplare gedruk is en dan blyk nie geskandeer te kan word nie. Die goeie nuus is dat die oorsaak gewoonlik eenvoudig is en maklik voorkom kan word. Hier is die sewe algemeenste oorsake.</p>

<h2>1. Kleurkontras is te laag</h2>
<p>Die skandeerder lees die verskil tussen donker en lig. 'n Liggrys strepieskode op wit, of donkerblou op swart, is moeilik om te onderskei. <strong>Oplossing:</strong> gebruik 'n donker kleur op 'n ligte agtergrond. Swart op wit is die veiligste keuse.</p>

<h2>2. Omgekeerde kleure of rooi</h2>
<p>'n Ligte strepieskode op 'n donker agtergrond word nie deur alle skandeerders ondersteun nie. Boonop gebruik baie kassaskandeerders rooi lig, sodat rooi strepe net soos die wit agtergrond lyk. <strong>Oplossing:</strong> vermy rooi vir die strepe of modules van die strepieskode, en moenie die kleure omkeer nie.</p>

<h2>3. Grootte is te klein</h2>
<p>Die kamera het genoeg pieksels nodig om elke module te herken. <strong>Oplossing:</strong> maak die strepieskode groter. Vir QR Codes wat van naby geskandeer word, gebruik ten minste ongeveer 2 × 2 cm. Sien die <a href="/artikel/ukuran-barcode-untuk-dicetak">gids oor drukgrootte</a>.</p>

<h2>4. Geen stil sone nie</h2>
<p>'n Strepieskode wat teen beelde, teks of die rand van die papier vasdruk, is moeilik om van sy omgewing te onderskei. <strong>Oplossing:</strong> laat leë ruimte rondom die strepieskode, veral links en regs van 'n lynstrepieskode.</p>

<h2>5. Wasige of vervormde beeld</h2>
<p>'n Strepieskode wat uit 'n klein beeld vergroot is, as 'n JPG van lae gehalte gestoor is of buite verhouding uitgerek is, verloor sy vorm. <strong>Oplossing:</strong> laai dit met 'n groter modulegrootte in PNG-formaat af, en verander die grootte altyd proporsioneel.</p>

<h2>6. Verkeerde data of data wat nie by die tipe pas nie</h2>
<p>Elke tipe strepieskode het reëls. EAN-13 aanvaar byvoorbeeld net 12 of 13 syfers met die korrekte kontrolesyfer. 'n Skakel met 'n tikfout veroorsaak ook dat die QR Code wel gelees word, maar niks oopmaak nie. <strong>Oplossing:</strong> kontroleer die data voordat u druk. Die generator by <a href="/">I Need Barcode</a> wys 'n boodskap as die data nie aan die reëls van die gekose tipe strepieskode voldoen nie.</p>

<h2>7. Oppervlak en beligting</h2>
<p>Blink materiale, deursigtige plastiek, voue en geboë oppervlaktes kan lig weerkaats of die vorm van die strepieskode verander. <strong>Oplossing:</strong> druk op 'n plat, mat oppervlak, en toets onder die werklike ligtoestande.</p>

<h2>Oor QR Codes met 'n ontwerp</h2>
<p>'n QR Code met 'n vorm, kleure of 'n raam kan steeds geskandeer word, solank die drie merkblokke in die hoeke ongeskonde is en die kontras voldoende is. Lees meer in <a href="/artikel/desain-qr-code-kreatif">kreatiewe QR Code-ontwerp wat leesbaar bly</a>.</p>
<p>Die beste gewoonte: <strong>toets altyd een drukstuk</strong> met verskeie fone en skandeerders voordat u in groot hoeveelhede druk.</p>
`
};
