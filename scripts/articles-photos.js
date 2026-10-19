// Foto artikel dari Unsplash (Unsplash License: gratis, termasuk untuk komersial; kredit tetap dicantumkan).
// Disimpan sendiri sebagai WebP 1200x630 di public/artikel/img/<slug>.webp (sampul) dan <slug>-2.webp (isi).
// Unduh ulang: node scripts/fetch-photos.js
module.exports = {
  'apa-itu-barcode': {
    cover: { img: 'https://images.unsplash.com/photo-1640090330138-4360e82a690c', photo: 'a-bar-code-on-top-of-a-box-on-a-table--Djc-ZO57XE', name: 'COSMOH', caption: 'Barcode pada kemasan menyimpan kode unik produk.' },
    inline: { img: 'https://images.unsplash.com/photo-1780037190608-1d871be1fe41', photo: 'multiple-cash-registers-with-computer-monitors-at-a-checkout-counter-UaMMROu5fq0', name: 'Allen Y', caption: 'Kasir memakai pemindai untuk membaca barcode dalam sekejap.' }
  },
  'apa-itu-qr-code': {
    cover: { img: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf', photo: 'black-android-smartphone-displaying-qr-code-Q6uqw_Hjye8', name: 'Markus Winkler', caption: 'QR Code bisa dipindai langsung dengan kamera ponsel.' },
    inline: { img: 'https://images.unsplash.com/photo-1550482768-88b710a445fd', photo: 'qr-code-G5HkBfwOths', name: 'Mitya Ivanov', caption: 'Setiap QR Code tersusun dari kotak-kotak kecil hitam dan putih.' }
  },
  'cara-membuat-qr-code-gratis': {
    cover: { img: 'https://images.unsplash.com/photo-1595079835357-a94a13cab10c', photo: 'black-android-smartphone-displaying-qr-code-kHMiTbqI5QU', name: 'Markus Winkler', caption: 'QR Code siap dipakai untuk link, WiFi, atau kontak.' },
    inline: { img: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef', photo: 'laptop-computer-beside-coffee-mug-j4uuKnN43_M', name: 'Alex Knight', caption: 'Cukup buka browser di laptop atau HP, tanpa aplikasi tambahan.' }
  },
  'perbedaan-barcode-1d-dan-2d': {
    cover: { img: 'https://images.unsplash.com/photo-1758543102397-e14b5dfdd8bd', photo: 'barcode-scanner-device-in-charging-dock-on-table-UnAB9U3D4rA', name: 'Bluestonex', caption: 'Pemindai genggam di gudang membaca barcode 1D dan 2D.' },
    inline: { img: 'https://images.unsplash.com/photo-1771848194199-873beaa7c1dc', photo: 'brown-cardboard-tube-with-a-label-pqRWC7UW9qk', name: 'Egor Komarov', caption: 'Label pengiriman biasanya memakai barcode garis.' }
  },
  'cara-mendapatkan-barcode-ean-13': {
    cover: { img: 'https://images.unsplash.com/photo-1617825295690-28ae56c56135', photo: 'green-and-pink-cardboard-boxes-xudcDDtjY2c', name: 'Tarah Dane', caption: 'Kemasan produk ritel memerlukan barcode EAN-13 yang terdaftar.' },
    inline: { img: 'https://images.unsplash.com/photo-1647427017067-8f33ccbae493', photo: 'a-person-is-using-a-pos-machine-in-a-store--gkndM1GvSA', name: 'Simon Kadula', caption: 'Toko ritel mengenali produk dari nomor EAN-13 di sistem kasirnya.' }
  },
  'cara-membuat-qr-code-wifi': {
    cover: { img: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2', photo: 'white-router-on-white-table-hXVVNB6Qctg', name: 'Compare Fibre', caption: 'Data WiFi dari router bisa disimpan dalam satu QR Code.' },
    inline: { img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', photo: 'caffe-latte-on-white-ceramic-cup-beside-silver-and-black-laptop-computer-It0DCaCBr40', name: 'Nolan Issac', caption: 'Tamu kafe bisa langsung tersambung tanpa mengetik sandi.' }
  },
  'ukuran-barcode-untuk-dicetak': {
    cover: { img: 'https://images.unsplash.com/photo-1781899710894-f9ecfea088f3', photo: 'brown-shipping-boxes-next-to-a-small-label-printer-cpwP43LnGRk', name: 'Karori Production', caption: 'Printer label mencetak barcode untuk paket dan kemasan.' },
    inline: { img: 'https://images.unsplash.com/photo-1783099779589-fd12bde5c2aa', photo: 'label-maker-smartphone-and-snacks-labels-on-a-grey-surface-x_HkcWw9U9o', name: 'Cabri Caldwell', caption: 'Ukuran label menentukan seberapa besar barcode bisa dicetak.' }
  },
  'barcode-tidak-bisa-dipindai': {
    cover: { img: 'https://images.unsplash.com/photo-1662383729882-e03ce8e00887', photo: 'a-person-holding-a-cell-phone-VaeGMpaSlck', name: 'Claudio Schwarz', caption: 'Kontras dan ukuran menentukan apakah QR Code mudah dipindai.' },
    inline: { img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866', photo: 'brown-cardboard-boxes-on-white-metal-rack-BNBA1h-NgdY', name: 'CHUTTERSNAP', caption: 'Di gudang, barcode yang gagal dipindai memperlambat pekerjaan.' }
  },
  'qr-code-menu-restoran': {
    cover: { img: 'https://images.unsplash.com/photo-1766072972117-f3b61a0ccd54', photo: 'qr-code-on-table-with-coffee-shop-information-xeL1j-VMHIc', name: 'Haberdoedas', caption: 'QR Code di meja membawa pelanggan langsung ke menu digital.' },
    inline: { img: 'https://images.unsplash.com/photo-1760783320025-471f331b5d93', photo: 'people-dining-at-a-sunlit-restaurant-table-kBqOzBUjajs', name: 'Philipp Hubert', caption: 'Letakkan QR Code di tempat yang mudah dijangkau dari kursi.' }
  },
  'desain-qr-code-kreatif': {
    cover: { img: 'https://images.unsplash.com/photo-1787580113284-1ebd249eb2dc', photo: 'colored-pencils-arranged-in-spectrum-u383406WNS4', name: 'Lucas George Wendt', caption: 'Warna membuat QR Code lebih menarik, asal kontrasnya tetap kuat.' },
    inline: { img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea', photo: 'designer-using-tablet-and-laptop-workspace-CGpifH3FjOA', name: 'Theme Photos', caption: 'Desain QR Code sebaiknya selalu diuji sebelum dicetak.' }
  }
};
