// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Kif Tikseb Barcode tal-Prodott EAN-13 għan-Negozji Żgħar",
  desc: "Trid li l-prodott tiegħek jinbiegħ fil-minimarkets jew fis-supermarkets? Tgħallem it-tifsira tan-numri EAN-13, kif tirreġistra numru uffiċjali ma' GS1 Indonesia, u kif tistampah.",
  tags: ["Negozju", "Bejgħ bl-Imnut"],
  coverCaption: "L-imballaġġ tal-prodotti tal-bejgħ bl-imnut jeħtieġ barcode EAN-13 irreġistrat.",
  inlineCaption: "Il-ħwienet tal-bejgħ bl-imnut jagħrfu l-prodotti min-numru EAN-13 fis-sistema tal-kaxxa tagħhom.",
  faq: [
    ["Nista' noħloq in-numru EAN-13 tiegħi stess?", "L-istampa tal-barcode tista' toħloqha int stess, iżda n-numru jaħtieġ ikun wieħed uffiċjali minn GS1. Numru li toħloq int jista' jaħbat ma' prodotti oħra u jiġi miċħud mill-ħwienet tal-bejgħ bl-imnut."],
    ["Kull varjant tal-prodott jeħtieġ barcode differenti?", "Iva. Kull varjant differenti, pereżempju b'togħma, daqs jew kontenut tal-pakkett differenti, jeħtieġ in-numru EAN-13 tiegħu."],
    ["X'inhi ċ-ċifra ta' kontroll f'EAN-13?", "Iċ-ċifra ta' kontroll hija t-13-il numru, li jiġi kkalkulat mit-12-il numru ta' qablu. L-iskaners jużawha biex jiżguraw li l-barcode jkun inqara b'mod korrett. Il-ġeneratur I Need Barcode jikkalkulaha awtomatikament jekk iddaħħal 12-il ċifra."]
  ],
  body: `
<p>Jekk trid tbigħ il-prodott tiegħek fil-minimarkets, fis-supermarkets jew f'marketplaces onlajn kbar, normalment tintalab tinkludi barcode <strong>EAN-13</strong> fuq l-imballaġġ. Dan il-barcode fih 13-il ċifra li jservu bħala l-identità unika tal-prodott tiegħek madwar id-dinja kollha.</p>

<h2>It-tifsira tat-13-il ċifra f'EAN-13</h2>
<ul>
  <li><strong>Prefiss GS1</strong>: l-ewwel tliet ċifri juru liema organizzazzjoni GS1 ħarġet in-numru. In-numri maħruġa minn GS1 Indonesia jibdew b'<strong>899</strong>.</li>
  <li><strong>Numru tal-kumpanija</strong>: l-identità tal-kumpanija tiegħek, mogħtija meta tirreġistra.</li>
  <li><strong>Numru tal-prodott</strong>: stabbilit mill-kumpanija stess għal kull varjant tal-prodott, pereżempju togħma jew daqs differenti.</li>
  <li><strong>Ċifra ta' kontroll</strong>: l-aħħar ċifra, ikkalkulata awtomatikament mit-12-il ċifra ta' qabilha biex tiġi evitata qari ħażin.</li>
</ul>

<h2>Għaliex trid numru uffiċjali?</h2>
<p>Kulħadd jista' jpinġi barcode EAN-13, iżda <strong>n-numru</strong> jrid ikun irreġistrat. Il-ħwienet tal-bejgħ bl-imnut jużaw dak in-numru biex jagħrfu l-prodotti fis-sistemi tagħhom. Jekk tivvinta numru int stess, jista' jaħbat ma' prodott ta' kumpanija oħra u jiġi miċħud meta l-prodott jiġi rreġistrat mal-ħanut.</p>

<h2>Kif tirreġistra numru ma' GS1 Indonesia</h2>
<ol>
  <li>Ipprepara d-dokumenti tan-negozju, bħan-NIB (Nomor Induk Berusaha) u n-NPWP, flimkien ma' lista tal-prodotti li se jingħataw barcode.</li>
  <li>Irreġistra l-kumpanija permezz tas-sit web uffiċjali ta' GS1 Indonesia u agħżel kemm numri għandek bżonn.</li>
  <li>Ħallas it-tariffa tar-reġistrazzjoni u l-miżata annwali skont ir-regoli applikabbli.</li>
  <li>Wara l-approvazzjoni, tirċievi numru tal-kumpanija u tista' toħloq numru għal kull prodott.</li>
</ol>
<p>Ir-rekwiżiti u t-tariffi jistgħu jinbidlu, għalhekk dejjem iċċekkja l-informazzjoni l-iktar riċenti direttament fuq is-sit web ta' GS1 Indonesia.</p>

<h2>Oħloq l-istampa tal-barcode</h2>
<p>Ladarba jkollok numru, iftaħ il-<a href="/?type=ean13">ġeneratur tal-EAN-13</a> u daħħal it-12 jew it-13-il ċifra tan-numru tal-prodott tiegħek. Jekk iddaħħal 12-il ċifra, iċ-ċifra ta' kontroll tiġi kkalkulata awtomatikament. Kun żgur li l-għażla tat-test taħt il-barcode tkun attivata biex in-numri jiġu stampati, u mbagħad niżżlu bħala PNG.</p>

<h2>Pariri għall-istampar fuq l-imballaġġ</h2>
<ul>
  <li>Uża linji suwed jew blu skur fuq sfond abjad. Evita l-aħmar għal-linji, għax ħafna skaners tal-kaxxa jużaw dawl aħmar u għalhekk il-linji ħomor ma jinqrawx.</li>
  <li>Tiċċekkenx il-barcode iżżejjed. Id-daqs standard ta' EAN-13 huwa madwar 37.3 × 25.9 mm u jista' jiċċekken sa madwar 80%. Iktar dettalji fil-<a href="/artikel/ukuran-barcode-untuk-dicetak">gwida għad-daqs tal-barcode</a>.</li>
  <li>Ħalli spazju vojt fuq ix-xellug u l-lemin tal-barcode, u evita li tpoġġih fuq tinjiet jew ġonot tal-imballaġġ.</li>
  <li>Ittestja l-kopja stampata bi skaner qabel tistampa kwantità kbira.</li>
</ul>
<p>Għal prodotti li jinbiegħu fl-Amerika ta' Fuq, tista' tintalab ukoll tuża <a href="/?type=upca">UPC-A</a>, li fih 12-il ċifra.</p>
`
};
