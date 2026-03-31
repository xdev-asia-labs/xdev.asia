---
id: 019e0a10-a102-7001-d001-f1a7f8000102
title: 'Bài 2: Tổng quan FHIR R5 - Kiến trúc và nguyên tắc thiết kế'
slug: bai-2-tong-quan-fhir-r5-kien-truc-va-nguyen-tac-thiet-ke
description: >-
  Kiến trúc FHIR (Resources, Data Types, Extensibility, RESTful API,
  Messaging, Documents), nguyên tắc thiết kế 80/20, FHIR Maturity Model (FMM),
  so sánh FHIR R4 vs R5, các modules trong specification.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền tảng HL7 và FHIR"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-kien-truc-tong-the-fhir"><strong>1. Kiến trúc tổng thể FHIR</strong></h2>

<p>FHIR được thiết kế như một <strong>platform</strong> — không chỉ là một chuẩn dữ liệu mà là cả một hệ sinh thái hoàn chỉnh cho trao đổi thông tin y tế. Kiến trúc FHIR bao gồm các tầng sau:</p>

<h3 id="cac-tang-kien-truc"><strong>Các tầng kiến trúc</strong></h3>

<pre><code>┌─────────────────────────────────────────┐
│     Implementation Guides (IGs)         │  ← Tùy chỉnh cho ngữ cảnh
├─────────────────────────────────────────┤
│   Profiles / Extensions / Terminologies │  ← Ràng buộc &amp; mở rộng
├─────────────────────────────────────────┤
│   Exchange (REST / Messaging / Docs)    │  ← Cách trao đổi dữ liệu
├─────────────────────────────────────────┤
│          Resources (~157 loại)          │  ← Đơn vị dữ liệu
├─────────────────────────────────────────┤
│         Data Types (Primitive/Complex)  │  ← Kiểu dữ liệu
├─────────────────────────────────────────┤
│      Foundation (Infrastructure)        │  ← Nền tảng chung
└─────────────────────────────────────────┘
</code></pre>

<h2 id="2-resource-don-vi-co-ban"><strong>2. Resource — Đơn vị cơ bản của FHIR</strong></h2>

<p>Trong FHIR, mọi thứ được biểu diễn dưới dạng <strong>Resource</strong>. Resource là building block cơ bản — giống như "bảng" trong cơ sở dữ liệu quan hệ, nhưng linh hoạt hơn nhiều.</p>

<h3 id="dac-diem-resource"><strong>Đặc điểm chung của mọi Resource</strong></h3>

<p>Tất cả Resources đều có:</p>

<ul>
<li><p><strong>id</strong> — logical identifier, duy nhất trong server</p></li>
<li><p><strong>meta</strong> — metadata (versionId, lastUpdated, profile, security, tag)</p></li>
<li><p><strong>implicitRules</strong> — tham chiếu đến quy tắc xử lý đặc biệt (hiếm dùng)</p></li>
<li><p><strong>language</strong> — ngôn ngữ của resource</p></li>
</ul>

<p>Hầu hết Resources là <strong>DomainResource</strong> (kế thừa từ Resource), thêm:</p>

<ul>
<li><p><strong>text</strong> — Narrative (phần human-readable HTML)</p></li>
<li><p><strong>contained</strong> — Resources nhúng bên trong</p></li>
<li><p><strong>extension</strong> — dữ liệu mở rộng</p></li>
<li><p><strong>modifierExtension</strong> — extension thay đổi ngữ nghĩa Resource</p></li>
</ul>

<h3 id="vi-du-patient-json"><strong>Ví dụ: Patient Resource (JSON)</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "id": "example-vn",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2026-03-30T10:00:00Z"
  },
  "text": {
    "status": "generated",
    "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;Nguyễn Văn A, Nam, 15/03/1985&lt;/div&gt;"
  },
  "identifier": [
    {
      "system": "urn:oid:2.16.840.1.113883.4.56.10",
      "value": "001085012345"
    }
  ],
  "active": true,
  "name": [
    {
      "use": "official",
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }
  ],
  "gender": "male",
  "birthDate": "1985-03-15",
  "address": [
    {
      "use": "home",
      "line": ["123 Lê Lợi"],
      "city": "Thành phố Hồ Chí Minh",
      "country": "VN"
    }
  ]
}
</code></pre>

<h3 id="157-resources"><strong>157 Resources được phân loại theo modules</strong></h3>

<p>FHIR R5 có <strong>157 resource types</strong>, được tổ chức thành các module:</p>

<table>
<thead>
<tr><th>Module</th><th>Mô tả</th><th>Resources tiêu biểu</th></tr>
</thead>
<tbody>
<tr><td><strong>Foundation</strong></td><td>Hạ tầng cơ bản</td><td>Bundle, OperationOutcome, Binary, Parameters</td></tr>
<tr><td><strong>Conformance</strong></td><td>Đặc tả conformance</td><td>CapabilityStatement, StructureDefinition, SearchParameter</td></tr>
<tr><td><strong>Terminology</strong></td><td>Thuật ngữ</td><td>CodeSystem, ValueSet, ConceptMap</td></tr>
<tr><td><strong>Security</strong></td><td>Bảo mật</td><td>Provenance, AuditEvent, Consent, Permission</td></tr>
<tr><td><strong>Administration</strong></td><td>Hành chính</td><td>Patient, Practitioner, Organization, Location, Encounter</td></tr>
<tr><td><strong>Clinical</strong></td><td>Lâm sàng</td><td>Condition, Observation, AllergyIntolerance, Procedure</td></tr>
<tr><td><strong>Diagnostics</strong></td><td>Chẩn đoán</td><td>DiagnosticReport, Specimen, ImagingStudy</td></tr>
<tr><td><strong>Medications</strong></td><td>Thuốc</td><td>Medication, MedicationRequest, Immunization</td></tr>
<tr><td><strong>Workflow</strong></td><td>Quy trình</td><td>Task, Appointment, Schedule, ServiceRequest</td></tr>
<tr><td><strong>Financial</strong></td><td>Tài chính</td><td>Claim, Coverage, ExplanationOfBenefit</td></tr>
</tbody>
</table>

<h2 id="3-nguyen-tac-80-20"><strong>3. Nguyên tắc thiết kế 80/20</strong></h2>

<p>FHIR áp dụng triết lý: <strong>giải quyết 80% use cases phổ biến trong chuẩn cơ bản, cho phép 20% còn lại qua extensions và profiles</strong>.</p>

<p>Điều này có nghĩa:</p>

<ul>
<li><p><strong>Resource cơ bản đủ đơn giản</strong> — không cố nhồi nhét mọi trường hợp đặc biệt</p></li>
<li><p><strong>Extension mechanism</strong> — khi cần thêm dữ liệu, dùng Extensions thay vì thay đổi chuẩn</p></li>
<li><p><strong>Profile</strong> — khi cần ràng buộc chặt hơn, dùng StructureDefinition</p></li>
</ul>

<p>Ví dụ: Resource Patient cơ bản không có trường "số CCCD" (chỉ Việt Nam dùng), nhưng bạn có thể thêm qua Extension hoặc sử dụng <code>identifier</code> với system phù hợp.</p>

<h2 id="4-exchange-paradigms"><strong>4. Ba paradigm trao đổi dữ liệu</strong></h2>

<p>FHIR hỗ trợ 3 cách trao đổi dữ liệu, phù hợp với các tình huống khác nhau:</p>

<h3 id="restful-api"><strong>4.1. RESTful API</strong></h3>

<p>Cách phổ biến nhất, dựa trên HTTP methods:</p>

<pre><code># Đọc thông tin bệnh nhân
GET /Patient/123

# Tạo bệnh nhân mới
POST /Patient
Content-Type: application/fhir+json
{...}

# Cập nhật
PUT /Patient/123
{...}

# Tìm kiếm
GET /Patient?family=Nguyen&amp;birthdate=1985-03-15

# Xóa
DELETE /Patient/123
</code></pre>

<p><strong>Dùng khi:</strong> Ứng dụng web/mobile, patient portals, data queries, SMART apps.</p>

<h3 id="messaging"><strong>4.2. Messaging</strong></h3>

<p>Gửi message giữa các hệ thống (tương tự HL7 v2 nhưng dùng FHIR Resources):</p>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "message",
  "entry": [
    {
      "resource": {
        "resourceType": "MessageHeader",
        "eventCoding": {
          "system": "http://example.org/events",
          "code": "admit-notification"
        },
        "source": { "endpoint": "http://hospital-a.vn/fhir" }
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "id": "123"
      }
    }
  ]
}
</code></pre>

<p><strong>Dùng khi:</strong> Trao đổi event-driven (nhập viện, ra viện, kết quả xét nghiệm), tích hợp với legacy systems.</p>

<h3 id="documents"><strong>4.3. Documents</strong></h3>

<p>Tạo tài liệu y tế có cấu trúc (tương tự CDA nhưng dùng FHIR):</p>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "document",
  "entry": [
    {
      "resource": {
        "resourceType": "Composition",
        "title": "Tóm tắt xuất viện",
        "type": {
          "coding": [{
            "system": "http://loinc.org",
            "code": "18842-5",
            "display": "Discharge summary"
          }]
        },
        "section": [...]
      }
    }
  ]
}
</code></pre>

<p><strong>Dùng khi:</strong> Giấy ra viện, tóm tắt bệnh án, giấy chuyển tuyến, International Patient Summary.</p>

<h2 id="5-fhir-maturity-model"><strong>5. FHIR Maturity Model (FMM)</strong></h2>

<p>Mỗi Resource trong FHIR có một mức độ trưởng thành (FMM) từ 0 đến Normative (N):</p>

<table>
<thead>
<tr><th>FMM</th><th>Mức độ</th><th>Ý nghĩa</th></tr>
</thead>
<tbody>
<tr><td>0</td><td>Draft</td><td>Mới đề xuất, chưa implement</td></tr>
<tr><td>1</td><td>Draft (tested)</td><td>Đã có ít nhất 1 implementation</td></tr>
<tr><td>2</td><td>Trial Use</td><td>Đã được test tại Connectathon</td></tr>
<tr><td>3</td><td>Trial Use (verified)</td><td>Đã có nhiều implementation thực tế</td></tr>
<tr><td>4</td><td>Trial Use (agreed)</td><td>Quality criteria đạt, chuẩn bị normative</td></tr>
<tr><td>5</td><td>Trial Use (published)</td><td>Đã published trong 2+ ballot cycles</td></tr>
<tr><td><strong>N</strong></td><td><strong>Normative</strong></td><td><strong>Ổn định, backward compatible — KHÔNG thay đổi</strong></td></tr>
</tbody>
</table>

<p>Một số Resources đã đạt <strong>Normative</strong> trong R5:</p>
<ul>
<li><p><strong>Patient</strong> (N), <strong>Observation</strong> (N), <strong>Bundle</strong> (N), <strong>CapabilityStatement</strong> (N)</p></li>
<li><p><strong>StructureDefinition</strong> (N), <strong>ValueSet</strong> (N), <strong>CodeSystem</strong> (N)</p></li>
<li><p><strong>OperationOutcome</strong> (N), <strong>Binary</strong> (N), <strong>Parameters</strong> (N)</p></li>
</ul>

<p>Khi chọn Resource cho dự án, nên ưu tiên Resources có FMM ≥ 3 hoặc Normative để đảm bảo ổn định.</p>

<h2 id="6-fhir-r4-vs-r5"><strong>6. FHIR R4 vs R5 — Những thay đổi quan trọng</strong></h2>

<p>R4 hiện vẫn là phiên bản được dùng nhiều nhất (vì nhiều mandate tại Mỹ dựa trên R4). R5 mang đến nhiều cải tiến:</p>

<table>
<thead>
<tr><th>Tính năng</th><th>R4</th><th>R5</th></tr>
</thead>
<tbody>
<tr><td>Subscriptions</td><td>Subscription cơ bản (criteria-based)</td><td><strong>Topic-based Subscriptions</strong> (SubscriptionTopic)</td></tr>
<tr><td>Workflow</td><td>Task basic</td><td>Transport resource mới, improved workflow patterns</td></tr>
<tr><td>Evidence-Based Med</td><td>Hạn chế</td><td>Evidence, EvidenceVariable, ArtifactAssessment mới</td></tr>
<tr><td>New Resources</td><td>—</td><td>Permission, InventoryItem, InventoryReport, NutritionIntake</td></tr>
<tr><td>Observation</td><td>component-based</td><td>Cải tiến triggeredBy, instantiatesCanonical</td></tr>
<tr><td>Search</td><td>Standard</td><td>Cải tiến _filter, _sort enhancements</td></tr>
<tr><td>Types</td><td>—</td><td>CodeableReference (mới), integer64</td></tr>
</tbody>
</table>

<p><strong>Khuyến nghị:</strong></p>
<ul>
<li><p>Dự án mới tại Mỹ: dùng <strong>R4</strong> (vì US Core mandate)</p></li>
<li><p>Dự án mới không ràng buộc: cân nhắc <strong>R5</strong> (mới hơn, nhiều tính năng)</p></li>
<li><p>Dự án tại Việt Nam: <strong>R4</strong> hoặc <strong>R5</strong> đều phù hợp (chưa có mandate cụ thể)</p></li>
</ul>

<h2 id="7-specification-modules"><strong>7. Các modules trong FHIR Specification</strong></h2>

<p>FHIR specification được tổ chức thành các modules chính:</p>

<h3 id="foundation-module"><strong>Foundation Module</strong></h3>
<p>Nền tảng kỹ thuật: Resource definition, Data Types, Extensions, REST API, Messaging, Documents, Narrative, Compartments.</p>

<h3 id="implementer-support"><strong>Implementer Support Module</strong></h3>
<p>Hỗ trợ triển khai: Downloads, testing tools, implementation guides registry, validation.</p>

<h3 id="security-privacy"><strong>Security &amp; Privacy Module</strong></h3>
<p>Bảo mật: Authorization, Authentication, Security labels, Audit, Consent, Provenance.</p>

<h3 id="conformance-module"><strong>Conformance Module</strong></h3>
<p>Đặc tả conformance: CapabilityStatement, StructureDefinition, OperationDefinition, SearchParameter, Implementation Guides.</p>

<h3 id="terminology-module"><strong>Terminology Module</strong></h3>
<p>Thuật ngữ: CodeSystem, ValueSet, ConceptMap, NamingSystem, terminology operations ($validate-code, $expand, $lookup, $translate).</p>

<h3 id="administration-module"><strong>Administration Module</strong></h3>
<p>Quản lý hành chính: Patient, Practitioner, Organization, Location, HealthcareService, Endpoint, Device.</p>

<h3 id="clinical-modules"><strong>Clinical Modules</strong></h3>
<p>Modules lâm sàng bao gồm: Clinical Summary (Condition, AllergyIntolerance, Procedure), Diagnostics (Observation, DiagnosticReport), Medications, Care Provision (CarePlan, Goal), Workflow (Task, Appointment).</p>

<h3 id="financial-module"><strong>Financial Module</strong></h3>
<p>Tài chính y tế: Coverage, Claim, ExplanationOfBenefit, Account, Invoice.</p>

<h2 id="8-resource-references"><strong>8. Resource References — Liên kết giữa Resources</strong></h2>

<p>Resources trong FHIR liên kết với nhau qua <strong>References</strong>. Đây là cơ chế quan trọng nhất để tạo nên mạng lưới dữ liệu y tế.</p>

<pre><code class="language-json">{
  "resourceType": "Observation",
  "id": "blood-pressure",
  "status": "final",
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "85354-9",
      "display": "Blood pressure panel"
    }]
  },
  "subject": {
    "reference": "Patient/example-vn",
    "display": "Nguyễn Văn A"
  },
  "encounter": {
    "reference": "Encounter/visit-2026-03-30"
  },
  "performer": [{
    "reference": "Practitioner/dr-tran"
  }],
  "effectiveDateTime": "2026-03-30T09:00:00+07:00",
  "component": [
    {
      "code": {
        "coding": [{
          "system": "http://loinc.org",
          "code": "8480-6",
          "display": "Systolic blood pressure"
        }]
      },
      "valueQuantity": {
        "value": 120,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      }
    },
    {
      "code": {
        "coding": [{
          "system": "http://loinc.org",
          "code": "8462-4",
          "display": "Diastolic blood pressure"
        }]
      },
      "valueQuantity": {
        "value": 80,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      }
    }
  ]
}
</code></pre>

<p>Trong ví dụ trên:</p>
<ul>
<li><p><code>subject</code> → liên kết đến <strong>Patient</strong></p></li>
<li><p><code>encounter</code> → liên kết đến <strong>Encounter</strong> (lượt khám)</p></li>
<li><p><code>performer</code> → liên kết đến <strong>Practitioner</strong> (bác sĩ đo)</p></li>
</ul>

<h2 id="9-narrative"><strong>9. Narrative — Phần human-readable</strong></h2>

<p>Mỗi DomainResource có thể chứa phần <strong>Narrative</strong> — HTML đại diện cho nội dung resource mà con người có thể đọc. Đây là tính năng quan trọng cho <strong>clinical safety</strong>:</p>

<pre><code class="language-json">{
  "text": {
    "status": "generated",
    "div": "&lt;div xmlns='http://www.w3.org/1999/xhtml'&gt;&lt;p&gt;Huyết áp: 120/80 mmHg&lt;/p&gt;&lt;p&gt;Bệnh nhân: Nguyễn Văn A&lt;/p&gt;&lt;p&gt;Ngày đo: 30/03/2026&lt;/p&gt;&lt;/div&gt;"
  }
}
</code></pre>

<p>Narrative status có thể là:</p>
<ul>
<li><p><code>generated</code> — được tạo từ structured data</p></li>
<li><p><code>extensions</code> — chứa thông tin từ extensions</p></li>
<li><p><code>additional</code> — có thông tin thêm không có trong structured data</p></li>
<li><p><code>empty</code> — không có nội dung (trong contained resources)</p></li>
</ul>

<h2 id="10-extensibility"><strong>10. Extensibility — Cơ chế mở rộng của FHIR</strong></h2>

<p>Đây là một trong những tính năng mạnh nhất của FHIR. Khi cần thêm dữ liệu không có trong chuẩn, bạn sử dụng <strong>Extensions</strong>:</p>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "id": "vn-patient",
  "extension": [
    {
      "url": "http://fhir.vn/StructureDefinition/patient-ethnicity",
      "valueCodeableConcept": {
        "coding": [{
          "system": "http://fhir.vn/CodeSystem/vn-ethnicity",
          "code": "01",
          "display": "Kinh"
        }]
      }
    },
    {
      "url": "http://fhir.vn/StructureDefinition/patient-cccd",
      "valueString": "001085012345"
    }
  ],
  "name": [{"family": "Nguyễn", "given": ["Văn", "A"]}]
}
</code></pre>

<p>Hai quy tắc quan trọng:</p>
<ol>
<li><p><strong>Hệ thống nhận PHẢI có thể đọc resource</strong> ngay cả khi không hiểu extension (graceful handling)</p></li>
<li><p><strong>Extensions KHÔNG ĐƯỢC thay đổi ngữ nghĩa</strong> của elements cơ bản (trừ modifierExtension)</p></li>
</ol>

<h2 id="11-tom-tat"><strong>11. Tóm tắt</strong></h2>

<p>Trong bài này, chúng ta đã tìm hiểu:</p>

<ul>
<li><p><strong>Kiến trúc FHIR</strong> gồm nhiều tầng: Foundation → Data Types → Resources → Exchange → Profiles → IGs</p></li>
<li><p><strong>Resource</strong> là đơn vị cơ bản, FHIR R5 có 157 resource types</p></li>
<li><p><strong>Nguyên tắc 80/20</strong>: chuẩn cơ bản giải quyết 80%, extensions cho 20%</p></li>
<li><p><strong>3 paradigm</strong>: REST (phổ biến nhất), Messaging, Documents</p></li>
<li><p><strong>FMM</strong>: đánh giá mức trưởng thành, ưu tiên Resources Normative</p></li>
<li><p><strong>R4 vs R5</strong>: R4 ổn định hơn, R5 nhiều tính năng mới</p></li>
<li><p><strong>References</strong>: cách liên kết Resources thành mạng lưới dữ liệu</p></li>
<li><p><strong>Narrative</strong>: phần HTML human-readable cho clinical safety</p></li>
<li><p><strong>Extensibility</strong>: cơ chế mở rộng linh hoạt mà không phá vỡ chuẩn</p></li>
</ul>

<p>Bài tiếp theo, chúng ta sẽ <strong>thực hành cài đặt môi trường</strong>: HAPI FHIR Server, Postman, FHIR tools — và chạy thử các thao tác CRUD đầu tiên.</p>
