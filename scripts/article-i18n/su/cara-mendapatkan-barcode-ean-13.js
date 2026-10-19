// cara-mendapatkan-barcode-ean-13
module.exports = {
  title: "Cara Meunangkeun Barcode Produk EAN-13 pikeun UMKM",
  desc: "Hayang produk anjeun asup ka minimarket atawa supermarket? Diajar harti angka EAN-13, cara ngadaptarkeun nomer resmi ka GS1 Indonesia, jeung cara nyitakna.",
  tags: ["Bisnis", "Ritel"],
  coverCaption: "Bungkusan produk ritel merlukeun barcode EAN-13 anu kadaptar.",
  inlineCaption: "Toko ritel mikawanoh produk tina nomer EAN-13 dina sistem kasirna.",
  faq: [
    ["Meunang teu nyieun nomer EAN-13 sorangan?", "Gambar barcode-na meunang dijieun sorangan, tapi nomerna leuwih hadé anu resmi ti GS1. Nomer jieunan sorangan bisa paséa jeung produk séjén sarta ditolak ku toko ritel."],
    ["Naha unggal varian produk butuh barcode anu béda?", "Enya. Unggal varian anu béda, contona béda rasa, ukuran, atawa eusi bungkusan, merlukeun nomer EAN-13 sorangan."],
    ["Naon éta digit pamariksa dina EAN-13?", "Digit pamariksa nyaéta angka ka-13 anu diitung tina 12 angka saméméhna. Pamindai ngagunakeunana pikeun mastikeun barcode kabaca kalayan bener. Generator I Need Barcode ngitungna sacara otomatis lamun anjeun ngasupkeun 12 digit."]
  ],
  body: `
<p>Lamun produk anjeun rék dijual di minimarket, supermarket, atawa marketplace gedé, biasana anjeun bakal dipénta nyantumkeun barcode <strong>EAN-13</strong> dina bungkusan. Ieu barcode eusina 13 digit angka anu jadi idéntitas unik produk anjeun di sakuliah dunya.</p>

<h2>Harti 13 digit dina EAN-13</h2>
<ul>
  <li><strong>Awalan GS1</strong>: tilu digit kahiji nuduhkeun organisasi GS1 anu ngaluarkeun nomer. Nomer anu dikaluarkeun ku GS1 Indonesia dimimitian ku <strong>899</strong>.</li>
  <li><strong>Nomer pausahaan</strong>: idéntitas pausahaan anjeun anu dibikeun nalika daptar.</li>
  <li><strong>Nomer produk</strong>: diatur sorangan ku pausahaan pikeun unggal varian produk, contona béda rasa atawa béda ukuran.</li>
  <li><strong>Digit pamariksa</strong>: digit panungtung anu diitung sacara otomatis tina 12 digit saméméhna pikeun nyegah salah baca.</li>
</ul>

<h2>Naha kudu nomer resmi?</h2>
<p>Barcode EAN-13 bisa digambar ku saha waé, tapi <strong>nomerna</strong> kudu kadaptar. Toko ritel ngagunakeun éta nomer pikeun mikawanoh produk dina sistemna. Lamun anjeun ngarang nomer sorangan, éta nomer bisa paséa jeung produk pausahaan séjén sarta ditolak nalika produk didaptarkeun ka toko.</p>

<h2>Cara ngadaptarkeun nomer ka GS1 Indonesia</h2>
<ol>
  <li>Siapkeun dokumén usaha, saperti NIB (Nomor Induk Berusaha) jeung NPWP, kitu ogé daptar produk anu rék dibéré barcode.</li>
  <li>Daptarkeun pausahaan ngaliwatan situs resmi GS1 Indonesia sarta pilih jumlah nomer anu diperlukeun.</li>
  <li>Bayar biaya pendaptaran jeung iuran taunan luyu jeung katangtuan anu lumaku.</li>
  <li>Sanggeus disatujuan, anjeun bakal narima nomer pausahaan sarta bisa nyieun nomer pikeun unggal produk.</li>
</ol>
<p>Sarat jeung biaya bisa robah, jadi salawasna pariksa informasi panganyarna langsung di situs GS1 Indonesia.</p>

<h2>Nyieun gambar barcode-na</h2>
<p>Sanggeus boga nomer, buka <a href="/?type=ean13">generator EAN-13</a> sarta asupkeun 12 atawa 13 digit nomer produk anjeun. Lamun anjeun ngasupkeun 12 digit, digit pamariksa bakal diitung sacara otomatis. Pastikeun pilihan téks di handapeun barcode aktip sangkan angkana kacitak, tuluy undeur salaku PNG.</p>

<h2>Tips nyitak dina bungkusan</h2>
<ul>
  <li>Paké garis hideung atawa bulao kolot dina latar bodas. Hindarkeun warna beureum pikeun garisna, sabab loba pamindai kasir maké cahaya beureum sahingga garis beureum teu kabaca.</li>
  <li>Ulah ngaleutikan barcode kaleuleuwihi. Ukuran standar EAN-13 kira-kira 37,3 × 25,9 mm sarta meunang dileutikan nepi ka kira-kira 80%. Salengkepna dina <a href="/artikel/ukuran-barcode-untuk-dicetak">pituduh ukuran barcode</a>.</li>
  <li>Sésakeun rohangan kosong di kénca jeung katuhu barcode, sarta hindarkeun nempatkeunana dina lipetan atawa sambungan bungkusan.</li>
  <li>Uji citakan maké pamindai saméméh nyitak dina jumlah anu loba.</li>
</ul>
<p>Pikeun produk anu dijual di Amérika Kalér, anjeun meureun ogé dipénta maké <a href="/?type=upca">UPC-A</a> anu eusina 12 digit.</p>
`
};
