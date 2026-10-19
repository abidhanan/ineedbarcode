// ukuran-barcode-untuk-dicetak
module.exports = {
  title: "Kích thước và độ phân giải mã vạch phù hợp để in",
  desc: "Mã vạch quá nhỏ hoặc bị mờ sẽ khó quét. Hãy tìm hiểu kích thước tối thiểu, quy tắc khoảng cách quét và độ phân giải hình ảnh an toàn khi in.",
  tags: ["Hướng dẫn", "In ấn"],
  coverCaption: "Máy in nhãn in mã vạch cho bưu kiện và bao bì.",
  inlineCaption: "Kích thước nhãn quyết định mã vạch có thể được in lớn đến mức nào.",
  faq: [
    ["Kích thước tối thiểu của QR Code khi in là bao nhiêu?", "Để quét ở khoảng cách gần, khoảng 2 × 2 cm là mức an toàn. Với khoảng cách xa hơn, hãy dùng tỷ lệ khoảng 10 : 1 giữa khoảng cách quét và chiều rộng QR Code."],
    ["Kích thước tiêu chuẩn của mã vạch EAN-13 là bao nhiêu?", "Kích thước tiêu chuẩn của EAN-13 khoảng 37,3 × 25,9 mm. Kích thước này có thể thu nhỏ đến khoảng 80% hoặc phóng to đến 200%."],
    ["Vì sao mã vạch bị mờ sau khi in?", "Thường là do hình ảnh có kích thước nhỏ rồi bị phóng to, hoặc được lưu dưới dạng JPG chất lượng thấp. Hãy tải xuống với kích thước mô-đun lớn hơn ở định dạng PNG."]
  ],
  body: `
<p>Mã vạch trông đẹp trên màn hình chưa chắc đã đọc được sau khi in. Kích thước quá nhỏ, độ phân giải thấp hoặc mực bị lem có thể khiến máy quét không đọc được. Dưới đây là hướng dẫn để bản in của bạn luôn đọc được.</p>

<h2>Tìm hiểu về mô-đun</h2>
<p><strong>Mô-đun</strong> là đơn vị nhỏ nhất của mã vạch, tức là một ô vuông nhỏ trên QR Code hoặc vạch hẹp nhất trên mã vạch dạng vạch. Kích thước mô-đun quyết định mã vạch dễ đọc đến mức nào. Trên <a href="/">I Need Barcode</a>, kích thước mô-đun có thể điều chỉnh ở mục Cài đặt: giá trị càng lớn, hình ảnh tải xuống càng lớn và sắc nét.</p>

<h2>Kích thước tối thiểu của QR Code</h2>
<ul>
  <li>Để quét ở khoảng cách gần (ví dụ danh thiếp hoặc nhãn sản phẩm), kích thước khoảng <strong>2 × 2 cm</strong> là mức an toàn.</li>
  <li>Hãy áp dụng quy tắc tỷ lệ khoảng <strong>10 : 1</strong>: khoảng cách quét xấp xỉ gấp mười lần chiều rộng QR Code. Với áp phích được quét từ khoảng cách 2 mét, hãy làm QR Code rộng tối thiểu khoảng 20 cm.</li>
  <li>Dữ liệu lưu càng nhiều thì mẫu càng dày đặc, nên cần kích thước lớn hơn.</li>
</ul>

<h2>Kích thước mã vạch sản phẩm</h2>
<p>Kích thước tiêu chuẩn của <a href="/?type=ean13">EAN-13</a> khoảng 37,3 × 25,9 mm (100%). Kích thước này có thể thu nhỏ đến khoảng 80% hoặc phóng to đến 200%. Tránh cắt chiều cao của vạch quá ngắn, vì máy quét ở quầy thu ngân cần không gian để đọc từ nhiều góc độ.</p>

<h2>Độ phân giải hình ảnh</h2>
<ul>
  <li>Khi in, hãy cố gắng để mỗi mô-đun được thể hiện bằng <strong>vài điểm ảnh trọn vẹn</strong>, chứ không phải một phần điểm ảnh. Hãy chọn kích thước mô-đun lớn hơn khi tải xuống, rồi thu nhỏ trong ứng dụng thiết kế, chứ không làm ngược lại.</li>
  <li>Tránh phóng to hình ảnh mã vạch nhỏ, vì cạnh các ô vuông sẽ bị mờ hoặc răng cưa.</li>
  <li>Lưu ở định dạng PNG để màu sắc và các cạnh không bị hỏng như khi dùng JPG.</li>
</ul>

<h2>Vùng yên tĩnh</h2>
<p>Mỗi mã vạch đều cần khoảng trống xung quanh, gọi là <strong>vùng yên tĩnh</strong> (quiet zone). Với QR Code, lý tưởng nhất là rộng bằng bốn mô-đun. Với mã vạch dạng vạch, khoảng trống ở bên trái và bên phải là rất quan trọng. Đừng đặt chữ, đường nét thiết kế hoặc mép bao bì quá gần.</p>

<h2>Màu sắc và chất liệu</h2>
<ul>
  <li>Dùng màu tối cho mã vạch và màu sáng cho nền.</li>
  <li>Tránh chất liệu bóng hoặc trong suốt, vì ánh sáng phản chiếu có thể gây nhiễu camera.</li>
  <li>Luôn in một bản mẫu và quét thử bằng vài chiếc điện thoại hoặc máy quét trước khi in số lượng lớn.</li>
</ul>
<p>Nếu mã vạch của bạn vẫn khó quét, hãy xem <a href="/artikel/barcode-tidak-bisa-dipindai">7 nguyên nhân khiến mã vạch không quét được</a>.</p>
`
};
