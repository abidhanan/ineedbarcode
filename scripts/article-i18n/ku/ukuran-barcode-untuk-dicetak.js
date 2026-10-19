// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Mezinahî û Rezolûsyona Rast a Barkodê ji bo Çapê",
  desc: "Barkoda ku pir piçûk an nezelal be bi zehmetî tê skankirin. Mezinahiya herî kêm, qaîdeya dûrahiya skankirinê û rezolûsyona wêneyê ya ewle ji bo çapê fêr bibin.",
  tags: ["Rêber", "Çap"],
  coverCaption: "Çapkera etîketan barkodan ji bo pakêt û ambalajan çap dike.",
  inlineCaption: "Mezinahiya etîketê diyar dike ka barkod dikare çiqas mezin were çapkirin.",
  faq: [
    ["Mezinahiya herî kêm a QR Code ji bo çapê çi ye?", "Ji bo skankirina ji nêzîk, nêzîkî 2 × 2 cm sînorê ewle ye. Ji bo dûrahiyên mezintir, nîsbeta nêzîkî 10 : 1 di navbera dûrahiya skankirinê û firehiya QR Code de bi kar bînin."],
    ["Mezinahiya standard a barkoda EAN-13 çi ye?", "Mezinahiya standard a EAN-13 nêzîkî 37,3 × 25,9 mm ye. Ev mezinahî dikare heta nêzîkî 80% were piçûkkirin an heta 200% were mezinkirin."],
    ["Çima barkod piştî çapkirinê nezelal dibe?", "Bi gelemperî ji ber ku wêne piçûk bû û paşê hate mezinkirin, an wekî JPG bi kalîteya nizm hate tomarkirin. Bi mezinahiya modulê ya mezintir di formata PNG de dakêşin."]
  ],
  body: `
<p>Barkoda ku li ser ekranê baş xuya dike ne mecbûr e ku piştî çapkirinê jî were xwendin. Mezinahiya pir piçûk, rezolûsyona nizm an mîrekeba belavbûyî dikare bike ku skaner nikaribe bixwîne. Li jêr rêberek heye da ku çapên we xwendî bimînin.</p>

<h2>Modulê nas bikin</h2>
<p><strong>Modul</strong> yekîneya herî piçûk a barkodê ye, ango çargoşeyeke piçûk li ser QR Code an xêzika herî teng li ser barkoda xêzikî. Mezinahiya modulê diyar dike ka barkod çiqas bi hêsanî tê xwendin. Li ser <a href="/">I Need Barcode</a>, mezinahiya modulê dikare di beşa Mîhengan de were eyarkirin: çiqas nirx mezintir be, wêneyê dakêşandî ewqas mezintir û tûjtir e.</p>

<h2>Mezinahiya herî kêm a QR Code</h2>
<ul>
  <li>Ji bo skankirina ji nêzîk (wek mînak karta navê an etîketa berhemê), mezinahiya nêzîkî <strong>2 × 2 cm</strong> sînorê ewle ye.</li>
  <li>Qaîdeya nîsbeta nêzîkî <strong>10 : 1</strong> bi kar bînin: dûrahiya skankirinê bi qasî deh qatên firehiya QR Code ye. Ji bo posterek ku ji dûrahiya 2 metreyan tê skankirin, QR Codeyek herî kêm nêzîkî 20 cm çêkin.</li>
  <li>Çiqas dane zêdetir werin hilanîn, nexşe ewqas tîrtir dibe, ji ber vê yekê mezinahiyeke mezintir pêwîst e.</li>
</ul>

<h2>Mezinahiya barkoda berhemê</h2>
<p>Mezinahiya standard a <a href="/?type=ean13">EAN-13</a> nêzîkî 37,3 × 25,9 mm (100%) ye. Ev mezinahî dikare heta nêzîkî 80% were piçûkkirin an heta 200% were mezinkirin. Ji kurtkirina zêde ya bilindahiya xêzikan dûr bisekinin, ji ber ku skanera kasê hewceyî cih e da ku ji goşeyên cuda bixwîne.</p>

<h2>Rezolûsyona wêneyê</h2>
<ul>
  <li>Ji bo çapê, hewl bidin ku her modul bi <strong>çend pîkselên tam</strong> were xêzkirin, ne bi beşek ji pîkselê. Dema daxistinê mezinahiya modulê ya mezintir hilbijêrin, û paşê di sepana dîzaynê de piçûk bikin, ne berevajî.</li>
  <li>Ji mezinkirina wêneyê barkodeke piçûk dûr bisekinin, ji ber ku qeraxên çargoşeyan dê nezelal an diranî bibin.</li>
  <li>Di formata PNG de tomar bikin da ku reng û qeraxên wê wek di JPG de xera nebin.</li>
</ul>

<h2>Herêma bêdeng</h2>
<p>Her barkod hewceyî cihekî vala li dora xwe ye, ku jê re <strong>herêma bêdeng</strong> (quiet zone) tê gotin. Ji bo QR Code, bi îdeal bi firehiya çar modulan e. Ji bo barkoda xêzikî, cihê vala li milê çep û rast pir girîng e. Nivîs, xêzikên dîzaynê an qeraxa pakêtê pir nêzîk daneynin.</p>

<h2>Reng û materyal</h2>
<ul>
  <li>Ji bo barkodê rengekî tarî û ji bo paşxaneyê rengekî ronî bi kar bînin.</li>
  <li>Ji materyalên biriqok an zelal dûr bisekinin, ji ber ku vegerandina ronahiyê dikare kamerayê asteng bike.</li>
  <li>Berî çapkirina bi hejmareke mezin, her tim nimûneyekê çap bikin û bi çend telefon an skaneran biceribînin.</li>
</ul>
<p>Heke barkoda we hîn jî bi zehmetî tê skankirin, li <a href="/artikel/barcode-tidak-bisa-dipindai">7 sedemên ku barkod nayê skankirin</a> binêrin.</p>
`
};
