// barcode-tidak-bisa-dipindai
module.exports = {
  title: "7 ástæður fyrir því að ekki er hægt að skanna strikamerki og hvernig má laga það",
  desc: "Mistekst að skanna strikamerkið eða QR Code? Skoðaðu sjö algengustu ástæðurnar, allt frá litaskilum til stærðar, og hvernig þú lagar þær.",
  tags: ["Ráð", "Strikamerki"],
  coverCaption: "Birtuskil og stærð ráða því hvort auðvelt er að skanna QR Code.",
  inlineCaption: "Í vöruhúsinu tefja strikamerki sem ekki skannast vinnuna.",
  faq: [
    ["Af hverju er hægt að skanna QR Code með einum síma en ekki öðrum?", "Myndavélar og skannaforrit hafa mismunandi getu. QR Code sem er of lítið, með lítil birtuskil eða öfuga liti bregst oftar í ákveðnum símum. Prófaðu með nokkrum símum áður en þú prentar."],
    ["Er hægt að skanna lituð strikamerki?", "Já, svo framarlega sem liturinn er dökkur á ljósum bakgrunni. Forðastu rauðan lit á strikin því margir afgreiðsluskannar nota rautt ljós."],
    ["Hvernig athuga ég hvort strikamerkið sé rétt?", "Skannaðu prentunina með nokkrum símum eða skönnum og gakktu úr skugga um að gögnin sem lesin eru séu nákvæmlega þau sömu og þú slóst inn."]
  ],
  body: `
<p>Fátt er meira pirrandi en strikamerki sem búið er að prenta í hundruðum eintaka og reynist svo ekki skannanlegt. Góðu fréttirnar eru þær að orsökin er yfirleitt einföld og auðvelt að koma í veg fyrir hana. Hér eru sjö algengustu ástæðurnar.</p>

<h2>1. Of lítil litaskil</h2>
<p>Skanninn les muninn á dökku og ljósu. Ljósgrátt strikamerki á hvítu eða dökkblátt á svörtu er erfitt að greina í sundur. <strong>Lausn:</strong> notaðu dökkan lit á ljósum bakgrunni. Svart á hvítu er öruggasta valið.</p>

<h2>2. Öfugir litir eða rauður litur</h2>
<p>Ljóst strikamerki á dökkum bakgrunni er ekki stutt af öllum skönnum. Auk þess nota margir afgreiðsluskannar rautt ljós, svo rauð strik líta eins út og hvítur bakgrunnur. <strong>Lausn:</strong> forðastu rauðan lit á strik eða einingar strikamerkisins og ekki snúa litunum við.</p>

<h2>3. Of lítil stærð</h2>
<p>Myndavélin þarf nógu marga díla til að greina hverja einingu. <strong>Lausn:</strong> stækkaðu strikamerkið. Fyrir QR Code sem er skannað af stuttu færi skaltu nota að minnsta kosti um 2 × 2 cm. Sjá <a href="/artikel/ukuran-barcode-untuk-dicetak">leiðbeiningar um prentstærð</a>.</p>

<h2>4. Ekkert kyrrðarsvæði</h2>
<p>Strikamerki sem liggur alveg upp að myndum, texta eða pappírsbrún er erfitt að greina frá umhverfinu. <strong>Lausn:</strong> skildu eftir autt svæði umhverfis strikamerkið, sérstaklega vinstra og hægra megin við línulegt strikamerki.</p>

<h2>5. Óskýr eða bjöguð mynd</h2>
<p>Strikamerki sem er stækkað úr lítilli mynd, vistað sem JPG í lágum gæðum eða teygt úr hlutföllum missir lögun sína. <strong>Lausn:</strong> sæktu það með stærri einingastærð á PNG-sniði og breyttu stærðinni alltaf í réttum hlutföllum.</p>

<h2>6. Röng gögn eða gögn sem passa ekki við tegundina</h2>
<p>Hver tegund strikamerkis hefur sínar reglur. EAN-13 tekur til dæmis aðeins við 12 eða 13 tölustöfum með réttri vartölu. Tengill með innsláttarvillu veldur því einnig að QR Code er læsilegt en opnar ekkert. <strong>Lausn:</strong> athugaðu gögnin áður en þú prentar. Rafallinn hjá <a href="/">I Need Barcode</a> birtir skilaboð ef gögnin fylgja ekki reglum þeirrar tegundar strikamerkis sem valin er.</p>

<h2>7. Yfirborð og lýsing</h2>
<p>Glansandi efni, glært plast, brot og bogið yfirborð geta endurkastað ljósi eða breytt lögun strikamerkisins. <strong>Lausn:</strong> prentaðu á flatt og matt yfirborð og prófaðu við raunverulegar birtuaðstæður.</p>

<h2>Um QR Code með hönnun</h2>
<p>QR Code með lögun, litum eða ramma er enn skannanlegt svo framarlega sem merkjaferningarnir þrír í hornunum eru heilir og birtuskilin nægileg. Lestu meira í <a href="/artikel/desain-qr-code-kreatif">skapandi hönnun á QR Code sem er enn læsilegt</a>.</p>
<p>Besti vaninn: <strong>prófaðu alltaf eitt prentað eintak</strong> með nokkrum símum og skönnum áður en þú prentar í miklu magni.</p>
`
};
