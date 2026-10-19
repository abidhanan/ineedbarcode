// Mengembalikan kode negara pengunjung dari header geolokasi Vercel.
module.exports = function handler(req, res) {
  var country = req.headers['x-vercel-ip-country'] || '';
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'private, no-store');
  res.end(JSON.stringify({ country: String(country).toUpperCase() }));
};
