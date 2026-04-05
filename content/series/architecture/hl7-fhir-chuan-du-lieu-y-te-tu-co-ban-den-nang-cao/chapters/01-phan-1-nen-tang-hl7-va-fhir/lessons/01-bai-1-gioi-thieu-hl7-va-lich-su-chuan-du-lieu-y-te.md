---
id: 019e0a10-a101-7001-d001-f1a7f8000101
title: 'Bài 1: Giới thiệu HL7 và lịch sử chuẩn dữ liệu y tế'
slug: bai-1-gioi-thieu-hl7-va-lich-su-chuan-du-lieu-y-te
description: >-
  Tìm hiểu HL7 International là gì, lịch sử phát triển chuẩn dữ liệu y tế
  (HL7 v2, HL7 v3/RIM, CDA), tại sao cần chuẩn hóa dữ liệu y tế,
  các thách thức interoperability trong healthcare, và cách FHIR ra đời
  để giải quyết các hạn chế của các chuẩn trước đó.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền tảng HL7 và FHIR"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6120" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6120)"/>

  <!-- Decorations -->
  <g>
    <circle cx="927" cy="231" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="754" cy="38" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1081" cy="105" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="908" cy="172" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="239" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="121" x2="1100" y2="201" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="151" x2="1050" y2="221" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="952.1769145362398,103 952.1769145362398,139 921,157 889.8230854637602,139 889.8230854637602,103.00000000000001 921,85" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ Kiến trúc — Bài 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 1: Giới thiệu HL7 và lịch sử chuẩn dữ</tspan>
      <tspan x="60" dy="42">liệu y tế</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng HL7 và FHIR</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tai-sao-can-chuan-du-lieu-y-te"><strong>1. Tại sao cần chuẩn dữ liệu y tế?</strong></h2>

<p>Hãy tưởng tượng bạn đến bệnh viện A khám bệnh, được chẩn đoán tiểu đường type 2 và kê đơn thuốc. Tuần sau, bạn đến bệnh viện B vì lý do khác. Bác sĩ bệnh viện B không thể xem được hồ sơ bệnh án của bạn tại bệnh viện A — vì hai hệ thống hoàn toàn không "nói chuyện" được với nhau.</p>

<p>Đây không phải câu chuyện hiếm gặp. Trên thực tế, đây là <strong>vấn đề phổ biến nhất</strong> trong ngành y tế số (Digital Health) trên toàn cầu. Mỗi bệnh viện, mỗi phòng khám sử dụng phần mềm khác nhau, lưu trữ dữ liệu theo cách khác nhau, và không có một "ngôn ngữ chung" để trao đổi thông tin.</p>

<h3 id="interoperability-la-gi"><strong>Interoperability là gì?</strong></h3>

<p><strong>Interoperability</strong> (khả năng tương tác) trong y tế là khả năng của các hệ thống thông tin y tế khác nhau có thể:</p>

<ul>
<li><strong>Trao đổi dữ liệu</strong> (Exchange) — gửi và nhận dữ liệu giữa các hệ thống</li>
<li><strong>Hiểu dữ liệu</strong> (Interpret) — hệ thống nhận có thể hiểu đúng ý nghĩa dữ liệu</li>
<li><strong>Sử dụng dữ liệu</strong> (Use) — dữ liệu nhận được có thể được dùng để hỗ trợ ra quyết định lâm sàng</li>
</ul>

<p>Có 4 cấp độ Interoperability:</p>

<table>
<thead>
<tr><th>Cấp độ</th><th>Tên gọi</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Foundational</td><td>Gửi/nhận dữ liệu giữa 2 hệ thống</td><td>Gửi file PDF kết quả xét nghiệm</td></tr>
<tr><td>2</td><td>Structural</td><td>Dữ liệu có cấu trúc thống nhất</td><td>Gửi kết quả xét nghiệm dạng HL7 v2 message</td></tr>
<tr><td>3</td><td>Semantic</td><td>Hai bên hiểu cùng một nghĩa</td><td>Mã ICD-10 "E11.9" đều hiểu là "Type 2 diabetes mellitus"</td></tr>
<tr><td>4</td><td>Organizational</td><td>Có quy trình, chính sách, pháp lý hỗ trợ</td><td>Thông tư cho phép chia sẻ dữ liệu giữa các bệnh viện</td></tr>
</tbody>
</table>

<h3 id="hau-qua-thieu-interoperability"><strong>Hậu quả của thiếu Interoperability</strong></h3>

<ul>
<li><p><strong>Xét nghiệm lặp lại</strong> — bệnh nhân phải làm lại xét nghiệm vì bệnh viện mới không có kết quả cũ</p></li>
<li><p><strong>Sai sót y khoa</strong> — bác sĩ không biết bệnh nhân dị ứng thuốc gì, đang dùng thuốc gì</p></li>
<li><p><strong>Chi phí tăng cao</strong> — ước tính Mỹ lãng phí $30 tỷ/năm do thiếu interoperability</p></li>
<li><p><strong>Trì hoãn điều trị</strong> — phải đợi hồ sơ chuyển viện bằng giấy</p></li>
<li><p><strong>Nghiên cứu y học bị hạn chế</strong> — không tổng hợp được dữ liệu đa trung tâm</p></li>
</ul>

<h2 id="2-hl7-international"><strong>2. HL7 International — Tổ chức đứng sau chuẩn dữ liệu y tế</strong></h2>

<p><strong>HL7 (Health Level Seven)</strong> International là tổ chức tiêu chuẩn phi lợi nhuận được thành lập năm <strong>1987</strong>, có trụ sở tại Ann Arbor, Michigan, Mỹ. Tên gọi "Level Seven" ám chỉ tầng thứ 7 (Application Layer) trong mô hình OSI — tầng mà các ứng dụng giao tiếp với nhau.</p>

<p>HL7 International có hơn <strong>1.600 thành viên</strong> từ hơn <strong>55 quốc gia</strong>, bao gồm các nhà cung cấp phần mềm y tế, bệnh viện, tổ chức chính phủ, hãng bảo hiểm, và các tổ chức nghiên cứu.</p>

<h3 id="cac-chuan-hl7-da-phat-trien"><strong>Các chuẩn HL7 đã phát triển</strong></h3>

<p>Qua hơn 35 năm, HL7 đã phát triển nhiều chuẩn dữ liệu, mỗi chuẩn giải quyết nhu cầu của thời đại:</p>

<h2 id="3-hl7-v2"><strong>3. HL7 Version 2 (v2) — Chuẩn phổ biến nhất thế giới</strong></h2>

<h3 id="lich-su-hl7-v2"><strong>Lịch sử</strong></h3>

<p>HL7 v2 được phát hành lần đầu năm <strong>1989</strong> và nhanh chóng trở thành chuẩn trao đổi dữ liệu y tế phổ biến nhất thế giới. Đến nay, ước tính <strong>95% bệnh viện tại Mỹ</strong> và <strong>35+ quốc gia</strong> sử dụng HL7 v2.</p>

<h3 id="cau-truc-hl7-v2"><strong>Cấu trúc HL7 v2 Message</strong></h3>

<p>HL7 v2 sử dụng format dạng text với các ký tự phân cách (pipe-delimited):</p>

<pre><code>MSH|^~\&amp;|HIS|BVBACHMAI|LIS|LABXN|202603301000||ADT^A01|MSG00001|P|2.5
EVN|A01|202603301000
PID|1||MRN12345^^^BVBACHMAI||NGUYEN^VAN^A||19850315|M|||123 Le Loi^^HCM^^700000^VN
PV1|1|I|W4B^401^1|||||||||||||||VN001|||||||||||||||||||||||||202603300800
</code></pre>

<p>Giải thích:</p>
<ul>
<li><p><strong>MSH</strong> — Message Header: thông tin về message (nguồn, đích, loại, version)</p></li>
<li><p><strong>EVN</strong> — Event: sự kiện kích hoạt message (A01 = nhập viện)</p></li>
<li><p><strong>PID</strong> — Patient Identification: thông tin bệnh nhân</p></li>
<li><p><strong>PV1</strong> — Patient Visit: thông tin lượt khám/nhập viện</p></li>
</ul>

<h3 id="uu-nhuoc-diem-hl7-v2"><strong>Ưu và nhược điểm</strong></h3>

<table>
<thead>
<tr><th>Ưu điểm</th><th>Nhược điểm</th></tr>
</thead>
<tbody>
<tr><td>Phổ biến rộng rãi, được hỗ trợ tốt</td><td>Quá nhiều tùy chọn, mỗi nơi implement khác nhau</td></tr>
<tr><td>Đơn giản, lightweight</td><td>Không có model chặt chẽ (mỗi field có thể dùng khác nhau)</td></tr>
<tr><td>Hàng triệu interface đang chạy</td><td>Backward compatibility phức tạp (v2.1 → v2.9)</td></tr>
<tr><td>Nhiều công cụ hỗ trợ (Mirth, Rhapsody)</td><td>Không hỗ trợ web/REST natively</td></tr>
</tbody>
</table>

<h2 id="4-hl7-v3-rim"><strong>4. HL7 Version 3 và Reference Information Model (RIM)</strong></h2>

<h3 id="tham-vong-v3"><strong>Tham vọng chuẩn hóa triệt để</strong></h3>

<p>Nhận thấy hạn chế của v2, HL7 bắt đầu phát triển <strong>v3</strong> từ cuối thập niên 1990 với tham vọng tạo ra một mô hình dữ liệu thống nhất, chặt chẽ cho toàn bộ y tế.</p>

<p>Trung tâm của HL7 v3 là <strong>RIM (Reference Information Model)</strong> — một mô hình đối tượng trừu tượng mô tả tất cả các khái niệm trong y tế:</p>

<ul>
<li><p><strong>Act</strong> — hành động y tế (khám, xét nghiệm, kê đơn...)</p></li>
<li><p><strong>Entity</strong> — thực thể (bệnh nhân, bác sĩ, thuốc, thiết bị...)</p></li>
<li><p><strong>Role</strong> — vai trò (bệnh nhân, nhân viên y tế, nhà cung cấp...)</p></li>
<li><p><strong>Participation</strong> — tham gia (ai tham gia vào hành động nào)</p></li>
<li><p><strong>ActRelationship</strong> — quan hệ giữa các hành động</p></li>
<li><p><strong>RoleLink</strong> — quan hệ giữa các vai trò</p></li>
</ul>

<h3 id="van-de-v3"><strong>Vấn đề với HL7 v3</strong></h3>

<p>Mặc dù v3/RIM rất chặt chẽ về mặt lý thuyết, nhưng trong thực tế:</p>

<ul>
<li><p><strong>Quá phức tạp</strong> — XML messages cồng kềnh, khó implement</p></li>
<li><p><strong>Đường cong học khó</strong> — cần hiểu sâu về RIM mới có thể triển khai</p></li>
<li><p><strong>Chi phí cao</strong> — thời gian và nguồn lực để implement rất lớn</p></li>
<li><p><strong>Adoption thấp</strong> — rất ít tổ chức triển khai thành công HL7 v3 thuần</p></li>
</ul>

<h2 id="5-cda"><strong>5. CDA (Clinical Document Architecture)</strong></h2>

<p><strong>CDA</strong> là một chuẩn HL7 v3 thành công nhất, được sử dụng rộng rãi cho trao đổi tài liệu lâm sàng. CDA sử dụng XML để cấu trúc tài liệu y tế, bao gồm:</p>

<ul>
<li><p><strong>Header</strong> — metadata (bệnh nhân, tác giả, tổ chức, ngày tạo)</p></li>
<li><p><strong>Body</strong> — nội dung lâm sàng, có thể ở 3 cấp độ:
<ul>
<li><strong>Level 1</strong>: non-structured body (PDF/text)</li>
<li><strong>Level 2</strong>: sections với narrative text</li>
<li><strong>Level 3</strong>: fully structured, coded entries</li>
</ul></p></li>
</ul>

<p>CDA được sử dụng rộng rãi trong <strong>C-CDA (Consolidated CDA)</strong> tại Mỹ cho Meaningful Use/Promoting Interoperability, và trong nhiều dự án tại châu Âu, Nhật Bản.</p>

<h3 id="han-che-cda"><strong>Hạn chế của CDA</strong></h3>

<ul>
<li><p>Chỉ phù hợp với <strong>document-based exchange</strong> (trao đổi dạng tài liệu)</p></li>
<li><p>Không hỗ trợ <strong>data-level exchange</strong> (truy vấn từng trường dữ liệu)</p></li>
<li><p>XML phức tạp, cần hiểu RIM</p></li>
<li><p>Không hỗ trợ mobile/web app hiện đại</p></li>
</ul>

<h2 id="6-fhir-ra-doi"><strong>6. FHIR ra đời — "Lửa" mới cho interoperability</strong></h2>

<h3 id="nguon-goc-fhir"><strong>Nguồn gốc</strong></h3>

<p>Năm <strong>2011</strong>, <strong>Grahame Grieve</strong> — một trong những nhà phát triển kỳ cựu nhất của HL7 — đề xuất một cách tiếp cận hoàn toàn mới. Thay vì cố gắng mô hình hóa mọi thứ (như v3), ông đề xuất:</p>

<blockquote>
<p>"Xây dựng một tập hợp các Resources đơn giản, có thể kết hợp linh hoạt, dựa trên công nghệ web hiện đại (REST, JSON, OAuth), và áp dụng nguyên tắc 80/20 — giải quyết 80% use-cases với 20% phức tạp."</p>
</blockquote>

<p>Tên gọi <strong>FHIR</strong> (đọc là "fire" — lửa) là viết tắt của <strong>Fast Healthcare Interoperability Resources</strong>, phản ánh các mục tiêu:</p>

<ul>
<li><p><strong>Fast</strong> — nhanh chóng implement, dễ học</p></li>
<li><p><strong>Healthcare</strong> — tập trung vào y tế</p></li>
<li><p><strong>Interoperability</strong> — khả năng tương tác giữa các hệ thống</p></li>
<li><p><strong>Resources</strong> — đơn vị dữ liệu cơ bản có thể tổ hợp</p></li>
</ul>

<h3 id="cac-milestone-fhir"><strong>Các mốc phát triển của FHIR</strong></h3>

<table>
<thead>
<tr><th>Năm</th><th>Phiên bản</th><th>Đặc điểm nổi bật</th></tr>
</thead>
<tbody>
<tr><td>2012</td><td>DSTU 0 (Draft)</td><td>Bản thử nghiệm đầu tiên</td></tr>
<tr><td>2014</td><td>DSTU 1 (R1)</td><td>Draft Standard for Trial Use đầu tiên</td></tr>
<tr><td>2015</td><td>DSTU 2 (R2)</td><td>Adoption bắt đầu tăng mạnh</td></tr>
<tr><td>2017</td><td>STU 3 (R3)</td><td>Standard for Trial Use, nhiều Resources mới</td></tr>
<tr><td>2019</td><td>R4</td><td><strong>Normative đầu tiên</strong> — Patient, Observation, Bundle ổn định</td></tr>
<tr><td>2020</td><td>R4B</td><td>Bản cập nhật nhỏ của R4</td></tr>
<tr><td>2023</td><td><strong>R5</strong></td><td>Phiên bản hiện tại — Topic-based subscriptions, nhiều cải tiến</td></tr>
<tr><td>~2026+</td><td>R6</td><td>Đang phát triển — AI/ML integration, improved Workflow</td></tr>
</tbody>
</table>

<h3 id="tai-sao-fhir-thanh-cong"><strong>Tại sao FHIR thành công?</strong></h3>

<ol>
<li><p><strong>Dựa trên web standards</strong> — REST, JSON, XML, OAuth 2.0, HTTP</p></li>
<li><p><strong>Dễ implement</strong> — nhiều developer có interface chạy trong 1 ngày</p></li>
<li><p><strong>Specification miễn phí</strong> — không có license fee</p></li>
<li><p><strong>Nhiều thư viện hỗ trợ</strong> — HAPI FHIR (Java), fhir.js, fhirclient.py, Firely (.NET)</p></li>
<li><p><strong>Extensibility tốt</strong> — cơ chế Extension cho phép mở rộng mà không phá vỡ chuẩn</p></li>
<li><p><strong>Human-readable</strong> — mỗi Resource có phần narrative HTML</p></li>
<li><p><strong>Hỗ trợ đa paradigm</strong> — REST, Messaging, Documents, Services</p></li>
<li><p><strong>Chính phủ bắt buộc</strong> — Mỹ (ONC/CMS), Úc, Anh, EU đều có mandate</p></li>
</ol>

<h2 id="7-so-sanh-cac-chuan-hl7"><strong>7. So sánh các chuẩn HL7</strong></h2>

<table>
<thead>
<tr><th>Tiêu chí</th><th>HL7 v2</th><th>HL7 v3</th><th>CDA</th><th>FHIR</th></tr>
</thead>
<tbody>
<tr><td>Năm ra đời</td><td>1989</td><td>~2000</td><td>2005</td><td>2014</td></tr>
<tr><td>Format</td><td>Pipe-delimited text</td><td>XML</td><td>XML</td><td>JSON, XML, RDF</td></tr>
<tr><td>Mô hình dữ liệu</td><td>Implicit (loose)</td><td>RIM (strict)</td><td>RIM (document)</td><td>Resources (composable)</td></tr>
<tr><td>Paradigm</td><td>Messaging</td><td>Messaging</td><td>Document</td><td>REST + Messaging + Document</td></tr>
<tr><td>Độ phức tạp implement</td><td>Trung bình</td><td>Rất cao</td><td>Cao</td><td>Thấp</td></tr>
<tr><td>Web/Mobile support</td><td>Không</td><td>Không</td><td>Hạn chế</td><td>Native</td></tr>
<tr><td>Adoption</td><td>Rất cao (legacy)</td><td>Thấp</td><td>Trung bình</td><td>Tăng nhanh</td></tr>
<tr><td>Human-readable</td><td>Không</td><td>Không</td><td>Có (section narrative)</td><td>Có (resource narrative)</td></tr>
</tbody>
</table>

<h2 id="8-fhir-tren-toan-cau"><strong>8. FHIR trên toàn cầu — Ai đang sử dụng?</strong></h2>

<h3 id="hoa-ky"><strong>Hoa Kỳ</strong></h3>
<ul>
<li><p><strong>21st Century Cures Act</strong> (2020): Bắt buộc EHR vendors hỗ trợ FHIR API (US Core)</p></li>
<li><p><strong>CMS Interoperability Rules</strong>: Yêu cầu payers (bảo hiểm) cung cấp Patient Access API dựa trên FHIR</p></li>
<li><p><strong>ONC TEFCA</strong>: Framework trao đổi dữ liệu quốc gia, FHIR là foundation</p></li>
<li><p>Epic, Cerner (Oracle Health), Allscripts đều có FHIR API</p></li>
</ul>

<h3 id="chau-au"><strong>Châu Âu</strong></h3>
<ul>
<li><p><strong>European Health Data Space (EHDS)</strong>: Regulation EU sử dụng FHIR cho cross-border health data</p></li>
<li><p><strong>International Patient Summary (IPS)</strong>: Dựa trên FHIR, cho phép chia sẻ tóm tắt bệnh án quốc tế</p></li>
</ul>

<h3 id="uc"><strong>Úc</strong></h3>
<ul>
<li><p><strong>AU Base Implementation Guide</strong>: Profile FHIR chuẩn cho toàn quốc</p></li>
<li><p><strong>My Health Record</strong>: Hệ thống hồ sơ sức khỏe quốc gia sử dụng FHIR</p></li>
</ul>

<h3 id="viet-nam"><strong>Việt Nam</strong></h3>
<ul>
<li><p>Chưa có mandate chính thức về FHIR, nhưng đang trong lộ trình số hóa y tế</p></li>
<li><p>Thông tư 54/2017/TT-BYT quy định chuẩn liên thông dữ liệu y tế (chưa dùng FHIR)</p></li>
<li><p>Thông tư 46/2018/TT-BYT về hồ sơ bệnh án điện tử</p></li>
<li><p>Một số dự án tiên phong đang thử nghiệm FHIR</p></li>
<li><p>Cơ hội lớn cho việc xây dựng Vietnam FHIR Implementation Guide</p></li>
</ul>

<h2 id="9-khai-niem-co-ban-fhir"><strong>9. Các khái niệm cơ bản FHIR cần biết trước</strong></h2>

<p>Trước khi đi sâu vào các bài tiếp theo, hãy làm quen với một số thuật ngữ quan trọng:</p>

<table>
<thead>
<tr><th>Thuật ngữ</th><th>Giải thích</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td><strong>Resource</strong></td><td>Đơn vị dữ liệu cơ bản trong FHIR</td><td>Patient, Observation, Encounter</td></tr>
<tr><td><strong>Data Type</strong></td><td>Kiểu dữ liệu được sử dụng trong Resources</td><td>HumanName, Address, CodeableConcept</td></tr>
<tr><td><strong>Extension</strong></td><td>Cách thêm dữ liệu tùy chỉnh vào Resource</td><td>Thêm trường "dân tộc" vào Patient</td></tr>
<tr><td><strong>Profile</strong></td><td>Ràng buộc Resource cho use case cụ thể</td><td>US Core Patient Profile</td></tr>
<tr><td><strong>Terminology</strong></td><td>Hệ thống mã y tế</td><td>ICD-10, SNOMED CT, LOINC</td></tr>
<tr><td><strong>Bundle</strong></td><td>Tập hợp nhiều Resources</td><td>Kết quả tìm kiếm, transaction</td></tr>
<tr><td><strong>Reference</strong></td><td>Liên kết giữa các Resources</td><td>Observation.subject → Patient/123</td></tr>
<tr><td><strong>Implementation Guide</strong></td><td>Hướng dẫn triển khai FHIR cho ngữ cảnh cụ thể</td><td>US Core IG, IPS IG</td></tr>
</tbody>
</table>

<h2 id="10-tom-tat"><strong>10. Tóm tắt</strong></h2>

<p>Trong bài này, chúng ta đã tìm hiểu:</p>

<ul>
<li><p><strong>Interoperability</strong> là thách thức lớn nhất trong y tế số, gồm 4 cấp độ</p></li>
<li><p><strong>HL7 International</strong> là tổ chức tiêu chuẩn y tế hàng đầu, hoạt động từ 1987</p></li>
<li><p><strong>HL7 v2</strong> phổ biến nhất nhưng thiếu tính nhất quán</p></li>
<li><p><strong>HL7 v3/RIM</strong> chặt chẽ nhưng quá phức tạp</p></li>
<li><p><strong>CDA</strong> thành công cho document exchange nhưng hạn chế cho data-level access</p></li>
<li><p><strong>FHIR</strong> kết hợp ưu điểm tất cả, dựa trên web standards, dễ implement</p></li>
<li><p><strong>FHIR R5</strong> là phiên bản hiện tại, R4 normative là phiên bản ổn định được dùng nhiều nhất</p></li>
<li><p>Nhiều quốc gia đã <strong>bắt buộc</strong> sử dụng FHIR, Việt Nam đang trong lộ trình</p></li>
</ul>

<p>Bài tiếp theo, chúng ta sẽ đi sâu vào <strong>kiến trúc FHIR R5</strong> — hiểu rõ Resources, Data Types, Extensibility, và các nguyên tắc thiết kế cốt lõi.</p>
