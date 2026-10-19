// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Rétt stærð og upplausn strikamerkja til prentunar",
  desc: "Strikamerki sem eru of lítil eða óskýr er erfitt að skanna. Kynntu þér lágmarksstærð, regluna um skönnunarfjarlægð og þá myndupplausn sem er örugg til prentunar.",
  tags: ["Leiðbeiningar", "Prentun"],
  coverCaption: "Merkimiðaprentari prentar strikamerki fyrir pakka og umbúðir.",
  inlineCaption: "Stærð merkimiðans ræður því hversu stórt strikamerkið getur orðið.",
  faq: [
    ["Hver er lágmarksstærð QR Code til prentunar?", "Fyrir skönnun af stuttu færi eru um 2 × 2 cm örugg lágmörk. Fyrir lengri fjarlægð skaltu nota hlutfallið um 10 : 1 milli skönnunarfjarlægðar og breiddar QR Code."],
    ["Hver er staðalstærð EAN-13-strikamerkis?", "Staðalstærð EAN-13 er um 37,3 × 25,9 mm. Hana má minnka niður í um 80% eða stækka upp í 200%."],
    ["Af hverju verður strikamerkið óskýrt eftir prentun?", "Yfirleitt vegna þess að myndin var lítil og síðan stækkuð, eða vistuð sem JPG í lágum gæðum. Sæktu með stærri einingastærð á PNG-sniði."]
  ],
  body: `
<p>Strikamerki sem lítur vel út á skjánum er ekki endilega læsilegt eftir prentun. Of lítil stærð, lág upplausn eða blek sem rennur út getur valdið því að skanninn nær ekki að lesa það. Hér eru leiðbeiningar svo prentunin þín haldist læsileg.</p>

<h2>Kynntu þér eininguna</h2>
<p><strong>Eining</strong> (module) er minnsta mælieining strikamerkis, það er einn lítill ferningur í QR Code eða mjósta strikið í línulegu strikamerki. Einingastærðin ræður því hversu auðvelt er að lesa strikamerkið. Hjá <a href="/">I Need Barcode</a> er hægt að stilla einingastærðina undir Stillingar: því hærra sem gildið er, því stærri og skarpari verður myndin sem þú sækir.</p>

<h2>Lágmarksstærð QR Code</h2>
<ul>
  <li>Fyrir skönnun af stuttu færi (til dæmis nafnspjöld eða vörumerkingar) eru um <strong>2 × 2 cm</strong> örugg lágmörk.</li>
  <li>Notaðu hlutfallsregluna um <strong>10 : 1</strong>: skönnunarfjarlægðin er um tífalt breidd QR Code. Fyrir veggspjald sem skannað er úr 2 metra fjarlægð skaltu hafa QR Code að minnsta kosti um 20 cm.</li>
  <li>Því meiri gögn sem eru geymd, því þéttara verður mynstrið og því stærra þarf það að vera.</li>
</ul>

<h2>Stærð strikamerkja á vörum</h2>
<p>Staðalstærð <a href="/?type=ean13">EAN-13</a> er um 37,3 × 25,9 mm (100%). Hana má minnka niður í um 80% eða stækka upp í 200%. Forðastu að stytta hæð strikanna um of, því afgreiðsluskannar þurfa svigrúm til að lesa úr ýmsum sjónarhornum.</p>

<h2>Myndupplausn</h2>
<ul>
  <li>Til prentunar ætti hver eining helst að vera teiknuð með <strong>nokkrum heilum dílum</strong>, ekki hluta úr díl. Veldu stærri einingastærð þegar þú sækir og minnkaðu síðan í hönnunarforritinu, ekki öfugt.</li>
  <li>Forðastu að stækka litla strikamerkjamynd, því brúnir ferninganna verða þá óskýrar eða tenntar.</li>
  <li>Vistaðu á PNG-sniði svo litir og brúnir skemmist ekki eins og gerist með JPG.</li>
</ul>

<h2>Kyrrðarsvæði</h2>
<p>Hvert strikamerki þarf autt svæði umhverfis sig, svokallað <strong>kyrrðarsvæði</strong> (quiet zone). Fyrir QR Code ætti það helst að vera fjórar einingar á breidd. Fyrir línuleg strikamerki er auða svæðið vinstra og hægra megin mjög mikilvægt. Ekki setja texta, hönnunarlínur eða brún umbúðanna of nálægt.</p>

<h2>Litir og efni</h2>
<ul>
  <li>Notaðu dökkan lit á strikamerkið og ljósan lit á bakgrunninn.</li>
  <li>Forðastu glansandi eða glær efni, því endurkast ljóss getur truflað myndavélina.</li>
  <li>Prentaðu alltaf eitt sýnishorn og prófaðu það með nokkrum símum eða skönnum áður en þú prentar mikið.</li>
</ul>
<p>Ef enn er erfitt að skanna strikamerkið þitt skaltu skoða <a href="/artikel/barcode-tidak-bisa-dipindai">7 ástæður fyrir því að ekki er hægt að skanna strikamerki</a>.</p>
`
};
