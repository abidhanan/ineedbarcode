// Statistik artikel (dilihat/suka/dibagikan). Belum memakai database, jadi selalu melaporkan
// "enabled: false" — sama seperti ineedsave.site — dan halaman artikel menampilkan angka 0.
module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify({ enabled: false }));
};
