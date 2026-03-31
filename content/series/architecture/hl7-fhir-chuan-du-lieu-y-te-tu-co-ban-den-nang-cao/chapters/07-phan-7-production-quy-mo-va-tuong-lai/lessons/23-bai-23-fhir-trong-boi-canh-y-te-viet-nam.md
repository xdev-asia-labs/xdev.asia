---
id: 019e0a10-a702-7001-d001-f1a7f8000702
title: 'Bài 23: FHIR trong Bối cảnh Y tế Việt Nam'
slug: bai-23-fhir-trong-boi-canh-y-te-viet-nam
description: >-
  Thông tư 54/2017/TT-BYT (EMR), Thông tư 46/2018/TT-BYT (HSBA điện tử),
  tích hợp VNEID, BHXH, cổng liên thông dữ liệu y tế,
  thực trạng ứng dụng FHIR tại Việt Nam, roadmap triển khai.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 23
section_title: "Phần 7: Production, Quy mô và Tương lai"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-he-thong-y-te-viet-nam"><strong>1. Hệ thống Y tế Việt Nam — Tổng quan</strong></h2>

<p>Việt Nam có hệ thống y tế 4 cấp với hàng chục ngàn cơ sở y tế, mỗi nơi sử dụng HIS khác nhau. FHIR là cơ hội thống nhất dữ liệu.</p>

<table>
<thead>
<tr><th>Cấp</th><th>Số lượng</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td>Trung ương</td><td>~40 BV</td><td>Bạch Mai, Chợ Rẫy, Trung ương Huế</td></tr>
<tr><td>Tỉnh/Thành</td><td>~400 BV</td><td>BV Đa khoa tỉnh</td></tr>
<tr><td>Huyện/Quận</td><td>~700 BV</td><td>BV Đa khoa huyện, TTYT</td></tr>
<tr><td>Xã/Phường</td><td>~11,000</td><td>Trạm y tế xã</td></tr>
</tbody>
</table>

<h2 id="2-khung-phap-ly"><strong>2. Khung pháp lý liên quan</strong></h2>

<h3 id="tt-54-2017"><strong>Thông tư 54/2017/TT-BYT</strong></h3>

<p>Quy định tiêu chí, tiêu chuẩn chất lượng đối với phần mềm quản lý y tế.</p>

<table>
<thead>
<tr><th>Nhóm tiêu chí</th><th>Yêu cầu</th><th>FHIR mapping</th></tr>
</thead>
<tbody>
<tr><td>Quản lý BN</td><td>Mã BN, thông tin nhân khẩu</td><td>Patient resource</td></tr>
<tr><td>Khám bệnh</td><td>Tiền sử, chẩn đoán, y lệnh</td><td>Encounter, Condition, ServiceRequest</td></tr>
<tr><td>Cận lâm sàng</td><td>XN, CDHA, GPBL</td><td>DiagnosticReport, Observation</td></tr>
<tr><td>Điều trị nội trú</td><td>Diễn biến, thuốc, phẫu thuật</td><td>MedicationRequest, Procedure</td></tr>
<tr><td>Viện phí/BHYT</td><td>Chi phí, thanh toán</td><td>Claim, Coverage</td></tr>
<tr><td>Báo cáo</td><td>Báo cáo BYT theo mẫu</td><td>MeasureReport</td></tr>
</tbody>
</table>

<h3 id="tt-46-2018"><strong>Thông tư 46/2018/TT-BYT</strong></h3>

<p>Quy định hồ sơ bệnh án điện tử (HSBA ĐT). Đây là nền tảng pháp lý cho EMR tại VN.</p>

<ul>
<li><strong>Điều 4</strong>: Nội dung HSBA ĐT phải tương đương HSBA giấy</li>
<li><strong>Điều 5</strong>: Chữ ký số cho bác sĩ, dược sĩ</li>
<li><strong>Điều 7</strong>: Lưu trữ tối thiểu 10 năm (nội trú), 5 năm (ngoại trú)</li>
<li><strong>Điều 8</strong>: Liên thông dữ liệu giữa các cơ sở y tế</li>
</ul>

<h3 id="nd-13-2023"><strong>Nghị định 13/2023/NĐ-CP</strong></h3>

<p>Bảo vệ dữ liệu cá nhân — áp dụng cho dữ liệu y tế (dữ liệu nhạy cảm).</p>

<ul>
<li>Phải có <strong>sự đồng ý</strong> của bệnh nhân → FHIR Consent resource</li>
<li>Thông báo khi xảy ra <strong>data breach</strong> trong 72 giờ</li>
<li>Cử <strong>DPO</strong> (Data Protection Officer) → AuditEvent tracking</li>
<li>Quyền <strong>xóa dữ liệu</strong> (right to erasure) — cần cân nhắc với yêu cầu lưu trữ y tế</li>
</ul>

<h2 id="3-he-thong-lien-thong"><strong>3. Các hệ thống liên thông hiện tại</strong></h2>

<h3 id="bhxh"><strong>Cổng BHXH — Giám định bảo hiểm</strong></h3>

<pre><code class="language-text">┌──────────┐     ┌──────────────┐     ┌──────────┐
│  HIS BV  │────▶│ Cổng BHXH    │────▶│ BHXH VN  │
│          │ XML │ (9210/API)   │     │          │
└──────────┘     └──────────────┘     └──────────┘
                  Hiện: XML 130 mẫu
                  Tương lai: FHIR?
</code></pre>

<p>Hiện tại cổng BHXH dùng XML format riêng (130 bảng). FHIR có thể thay thế bằng cách map:</p>

<table>
<thead>
<tr><th>Bảng XML BHXH</th><th>FHIR Resource</th></tr>
</thead>
<tbody>
<tr><td>XML1 — Thông tin BN</td><td>Patient + Coverage</td></tr>
<tr><td>XML2 — Chẩn đoán</td><td>Condition</td></tr>
<tr><td>XML3 — Thuốc</td><td>MedicationRequest</td></tr>
<tr><td>XML4 — Dịch vụ kỹ thuật</td><td>Procedure + ChargeItem</td></tr>
<tr><td>XML5 — Chi phí</td><td>Claim + ClaimResponse</td></tr>
</tbody>
</table>

<h3 id="vneid"><strong>VNEID — Định danh công dân</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "identifier": [
    {
      "system": "http://fhir.vn/sid/cccd",
      "value": "001234567890",
      "assigner": {
        "display": "Cục Cảnh sát QLHC — Bộ Công an"
      }
    },
    {
      "system": "http://fhir.vn/sid/vneid",
      "value": "VN-001234567890"
    }
  ]
}
</code></pre>

<h3 id="cong-du-lieu-y-te"><strong>Cổng Dữ liệu Y tế Quốc gia</strong></h3>

<pre><code class="language-text">                    ┌─────────────────────┐
                    │  Cổng DL Y tế QG    │
                    │  (HIE Gateway)      │
                    │  ┌───────────────┐  │
                    │  │ FHIR Server   │  │
                    │  │ (Aggregator)  │  │
                    │  └───────┬───────┘  │
                    └──────────┼──────────┘
              ┌────────────────┼────────────────┐
              ▼                ▼                ▼
     ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
     │   BV Bạch Mai │ │  BV Chợ Rẫy  │ │  BV Trung    │
     │   FHIR Node  │ │  FHIR Node  │ │  ương Huế    │
     └──────────────┘ └──────────────┘ └──────────────┘
</code></pre>

<h2 id="4-mapping-icd10-vn"><strong>4. ICD-10 Việt Nam</strong></h2>

<p>Việt Nam sử dụng ICD-10 WHO có bổ sung mã VN (ICD-10 VN). Cần tạo CodeSystem riêng.</p>

<pre><code class="language-json">{
  "resourceType": "CodeSystem",
  "url": "http://fhir.vn/CodeSystem/icd10-vn",
  "name": "ICD10VN",
  "title": "ICD-10 Việt Nam",
  "status": "active",
  "content": "supplement",
  "supplements": "http://hl7.org/fhir/sid/icd-10",
  "concept": [
    {
      "code": "A09",
      "display": "Tiêu chảy và viêm dạ dày-ruột có nguồn gốc nhiễm trùng"
    },
    {
      "code": "J06.9",
      "display": "Nhiễm trùng đường hô hấp trên cấp tính, không đặc hiệu"
    },
    {
      "code": "K29.7",
      "display": "Viêm dạ dày, không đặc hiệu"
    }
  ]
}
</code></pre>

<h2 id="5-danh-muc-thuoc"><strong>5. Danh mục thuốc BHYT</strong></h2>

<pre><code class="language-json">{
  "resourceType": "CodeSystem",
  "url": "http://fhir.vn/CodeSystem/thuoc-bhyt",
  "name": "ThuocBHYTVN",
  "title": "Danh mục thuốc BHYT Việt Nam (TT 30/2018)",
  "status": "active",
  "concept": [
    {
      "code": "N05BA01",
      "display": "Diazepam",
      "designation": [
        {
          "language": "vi",
          "value": "Diazepam 5mg viên nén"
        }
      ],
      "property": [
        {
          "code": "route",
          "valueString": "Uống"
        },
        {
          "code": "bhyt-group",
          "valueString": "Nhóm 1 — BHYT chi trả 100%"
        }
      ]
    }
  ]
}
</code></pre>

<h2 id="6-roadmap"><strong>6. Roadmap triển khai FHIR tại Việt Nam</strong></h2>

<table>
<thead>
<tr><th>Giai đoạn</th><th>Mục tiêu</th><th>Thời gian</th></tr>
</thead>
<tbody>
<tr><td>1. Foundation</td><td>VN Core IG (Patient, Organization, Practitioner)</td><td>6-12 tháng</td></tr>
<tr><td>2. Clinical</td><td>Encounter, Condition, Observation, Medication profiles</td><td>12-18 tháng</td></tr>
<tr><td>3. Integration</td><td>Liên thông BV tuyến trên-dưới, BHXH gateway</td><td>18-24 tháng</td></tr>
<tr><td>4. Scale</td><td>HIE quốc gia, telemedicine, PHR</td><td>24-36 tháng</td></tr>
</tbody>
</table>

<h2 id="7-thuc-trang"><strong>7. Thực trạng và Thách thức</strong></h2>

<table>
<thead>
<tr><th>Thách thức</th><th>Chi tiết</th></tr>
</thead>
<tbody>
<tr><td>Đa dạng HIS</td><td>20+ nhà cung cấp HIS, không có chuẩn chung</td></tr>
<tr><td>Hạ tầng CNTT</td><td>Tuyến huyện/xã: internet không ổn định</td></tr>
<tr><td>Nhân lực</td><td>Thiếu kỹ sư hiểu cả CNTT và y tế</td></tr>
<tr><td>Kinh phí</td><td>BV công hạn chế ngân sách CNTT</td></tr>
<tr><td>Kháng cự thay đổi</td><td>Nhân viên y tế quen hệ thống cũ</td></tr>
<tr><td>Bảo mật</td><td>NĐ 13/2023 mới, chưa có hướng dẫn chi tiết cho y tế</td></tr>
</tbody>
</table>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<ul>
<li><p><strong>TT 54/2017</strong> — Tiêu chuẩn phần mềm quản lý y tế → map được sang FHIR resources</p></li>
<li><p><strong>TT 46/2018</strong> — HSBA điện tử, liên thông dữ liệu → FHIR Documents + API</p></li>
<li><p><strong>NĐ 13/2023</strong> — Bảo vệ dữ liệu cá nhân → FHIR Consent + AuditEvent</p></li>
<li><p><strong>BHXH, VNEID</strong> — Tích hợp qua identifier systems</p></li>
<li><p><strong>ICD-10 VN, Thuốc BHYT</strong> — Cần tạo CodeSystem/ValueSet cho VN</p></li>
<li><p><strong>Roadmap</strong> — Từ VN Core IG → Clinical profiles → HIE quốc gia</p></li>
</ul>
