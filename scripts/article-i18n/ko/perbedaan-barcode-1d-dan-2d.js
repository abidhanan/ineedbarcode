// perbedaan-barcode-1d-dan-2d
module.exports = {
  title: "1D 바코드와 2D 바코드의 차이: 어떤 것이 필요할까요?",
  desc: "막대형 바코드와 QR Code는 모두 바코드이지만 용도는 다릅니다. 용량, 스캔 방식, 사용 예를 비교해 보세요.",
  tags: ["기초", "바코드"],
  coverCaption: "창고의 휴대용 스캐너는 1D와 2D 바코드를 모두 읽습니다.",
  inlineCaption: "배송 라벨에는 보통 막대형 바코드가 쓰입니다.",
  faq: [
    ["계산대 스캐너로 QR Code를 읽을 수 있나요?", "모두 그렇지는 않습니다. 1D 레이저 스캐너는 막대형 바코드만 읽습니다. QR Code를 읽으려면 카메라 기반 2D 스캐너나 휴대폰 카메라가 필요합니다."],
    ["가장 작은 바코드는 무엇인가요?", "Data Matrix는 아주 작게 인쇄할 수 있는 2D 바코드로, 전자 부품, 의료 기기, 의약품 라벨에 자주 쓰입니다."],
    ["소매 제품에 EAN-13 대신 QR Code를 사용해도 되나요?", "소매점에서 판매하려면 여전히 등록된 EAN-13 또는 UPC가 필요합니다. QR Code는 제품 정보나 홍보 등을 위한 보조 수단으로 포장에 추가할 수 있습니다."]
  ],
  body: `
<p>바코드를 만들 때 보통 가장 먼저 떠오르는 질문은 "막대형 바코드를 쓸까, QR Code를 쓸까?"입니다. 둘 다 바코드라고 부르지만, 데이터를 저장하는 방식이 다르기 때문에 용도도 다릅니다.</p>

<h2>1D(선형) 바코드</h2>
<p>1D 바코드는 세로 막대로 이루어진 바코드입니다. 데이터는 한 방향, 즉 왼쪽에서 오른쪽으로 저장됩니다. 가장 잘 알려진 예는 제품 포장의 <a href="/?type=ean13">EAN-13</a>과 배송 라벨의 <a href="/?type=code128">Code 128</a>입니다.</p>
<ul>
  <li>용량이 작아서 보통 십여 자에서 수십 자 정도입니다.</li>
  <li>저렴하고 매우 빠른 계산대 레이저 스캐너로 읽을 수 있습니다.</li>
  <li>제품 코드, 일련번호, 송장 번호에 적합합니다.</li>
</ul>

<h2>2D 바코드</h2>
<p>2D 바코드는 가로와 세로, 두 방향으로 데이터를 저장하므로 훨씬 많은 정보를 담을 수 있습니다. <a href="/?type=qrcode">QR Code</a>, <a href="/?type=datamatrix">Data Matrix</a>, <a href="/?type=pdf417">PDF417</a>, <a href="/?type=azteccode">Aztec</a>가 그 예입니다.</p>
<ul>
  <li>용량이 커서 수십 자에서 수천 자까지 저장할 수 있습니다.</li>
  <li>휴대폰 카메라로 여러 방향에서 스캔할 수 있습니다.</li>
  <li>오류 정정 기능이 있어 일부가 손상되어도 읽힙니다.</li>
  <li>전자 부품의 Data Matrix처럼 아주 작게 만들 수 있습니다.</li>
</ul>

<h2>간단 비교</h2>
<table>
  <thead><tr><th></th><th>1D 바코드</th><th>2D 바코드</th></tr></thead>
  <tbody>
    <tr><td>형태</td><td>세로 막대</td><td>정사각형 안의 사각형/점</td></tr>
    <tr><td>용량</td><td>작음</td><td>큼</td></tr>
    <tr><td>스캔 도구</td><td>레이저 스캐너 또는 카메라</td><td>카메라 또는 2D 스캐너</td></tr>
    <tr><td>손상 내구성</td><td>제한적</td><td>오류 정정 있음</td></tr>
    <tr><td>예시</td><td>EAN-13, UPC-A, Code 128</td><td>QR Code, Data Matrix, PDF417</td></tr>
  </tbody>
</table>

<h2>언제 무엇을 사용할까요?</h2>
<ul>
  <li><strong>매장이나 편의점에서 판매하는 제품</strong>: GS1에서 발급한 공식 EAN-13을 사용하세요. <a href="/artikel/cara-mendapatkan-barcode-ean-13">EAN-13 바코드 발급 방법</a>을 참고하세요.</li>
  <li><strong>창고, 선반, 배송 라벨</strong>: Code 128은 촘촘하고 문자와 숫자를 모두 지원해서 많이 쓰입니다.</li>
  <li><strong>고객을 위한 링크, 메뉴, WiFi, 연락처</strong>: 휴대폰 카메라로 바로 스캔할 수 있는 QR Code.</li>
  <li><strong>아주 작은 라벨</strong>: Data Matrix.</li>
  <li><strong>신분증, 항공권, 문서</strong>: PDF417 또는 Aztec.</li>
</ul>
<p>위의 모든 종류는 <a href="/">I Need Barcode</a>에서 무료로 만들 수 있습니다. 아직 고민된다면 고객용으로는 QR Code, 내부용으로는 Code 128부터 시작해 보세요.</p>
`
};
