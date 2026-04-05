---
id: 019e0a10-a703-7001-d001-f1a7f8000703
title: 'Bài 24: Case Studies — US Core, IPS và Triển khai Thực tế'
slug: bai-24-case-studies-us-core-ips-va-trien-khai-thuc-te
description: >-
  Phân tích US Core Implementation Guide, International Patient Summary (IPS),
  AU Core (Australia), UK Core, bài học từ triển khai thực tế,
  so sánh các quốc gia, áp dụng cho Việt Nam.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 24
section_title: "Phần 7: Production, Quy mô và Tương lai"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9907" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9907)"/>

  <!-- Decorations -->
  <g>
    <circle cx="888" cy="34" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="676" cy="122" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="964" cy="210" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="752" cy="38" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1040" cy="126" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="174" x2="1100" y2="254" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="204" x2="1050" y2="274" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1049.1147367097487,209.5 1049.1147367097487,238.5 1024,253 998.8852632902513,238.5 998.8852632902513,209.5 1024,195" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ Kiến trúc — Bài 24</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 24: Case Studies — US Core, IPS và</tspan>
      <tspan x="60" dy="42">Triển khai Thực tế</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 7: Production, Quy mô và Tương lai</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-us-core"><strong>1. US Core Implementation Guide</strong></h2>

<p><strong>US Core</strong> là IG chính thức của Hoa Kỳ, bắt buộc cho mọi hệ thống EHR certified theo ONC (21st Century Cures Act). Đây là IG tham chiếu quan trọng nhất trên thế giới.</p>

<h3 id="us-core-profiles"><strong>US Core Profiles chính</strong></h3>

<table>
<thead>
<tr><th>Profile</th><th>Base Resource</th><th>Yêu cầu nổi bật</th></tr>
</thead>
<tbody>
<tr><td>US Core Patient</td><td>Patient</td><td>Race, ethnicity extensions; MRN identifier</td></tr>
<tr><td>US Core Condition</td><td>Condition</td><td>SNOMED CT + ICD-10-CM; clinical status bắt buộc</td></tr>
<tr><td>US Core Observation</td><td>Observation</td><td>Vital Signs, Lab Results, Social History</td></tr>
<tr><td>US Core MedicationRequest</td><td>MedicationRequest</td><td>RxNorm coding bắt buộc</td></tr>
<tr><td>US Core Encounter</td><td>Encounter</td><td>Class, type, participant bắt buộc</td></tr>
<tr><td>US Core Procedure</td><td>Procedure</td><td>CPT/SNOMED CT coding</td></tr>
<tr><td>US Core AllergyIntolerance</td><td>AllergyIntolerance</td><td>Clinical status + reaction</td></tr>
<tr><td>US Core DocumentReference</td><td>DocumentReference</td><td>Clinical Notes (C-CDA on FHIR)</td></tr>
</tbody>
</table>

<h3 id="us-core-patient-example"><strong>US Core Patient — Ví dụ</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
      "extension": [
        {
          "url": "ombCategory",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2106-3",
            "display": "White"
          }
        },
        {"url": "text", "valueString": "White"}
      ]
    },
    {
      "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
      "extension": [
        {
          "url": "ombCategory",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2186-5",
            "display": "Not Hispanic or Latino"
          }
        }
      ]
    }
  ],
  "identifier": [
    {
      "system": "http://hospital.example.org/mrn",
      "value": "MRN123456"
    }
  ],
  "name": [
    {"family": "Smith", "given": ["John", "A."]}
  ],
  "gender": "male",
  "birthDate": "1985-03-15"
}
</code></pre>

<h3 id="us-core-lessons"><strong>Bài học từ US Core</strong></h3>

<ol>
<li><strong>Mandate tiêu chuẩn</strong> — ONC rule (2020) bắt buộc EHR vendors triển khai US Core</li>
<li><strong>USCDI</strong> — US Core Data for Interoperability định nghĩa data elements tối thiểu</li>
<li><strong>Terminology binding</strong> — Bắt buộc SNOMED CT, LOINC, RxNorm</li>
<li><strong>$everything operation</strong> — Patient Access API cho patient portals</li>
<li><strong>Bulk Data</strong> — Payer-to-Payer data exchange</li>
</ol>

<h2 id="2-ips"><strong>2. International Patient Summary (IPS)</strong></h2>

<p><strong>IPS</strong> là tóm tắt hồ sơ sức khỏe xuyên biên giới — tối thiểu, không phụ thuộc jurisdictional. ISO 27269:2021.</p>

<h3 id="ips-sections"><strong>IPS Sections bắt buộc</strong></h3>

<table>
<thead>
<tr><th>Section</th><th>FHIR Resource</th><th>Nội dung</th></tr>
</thead>
<tbody>
<tr><td>Medication Summary</td><td>MedicationStatement</td><td>Thuốc đang dùng</td></tr>
<tr><td>Allergies and Intolerances</td><td>AllergyIntolerance</td><td>Dị ứng, BDR thuốc</td></tr>
<tr><td>Problem List</td><td>Condition</td><td>Bệnh lý đang điều trị</td></tr>
<tr><td>Immunizations</td><td>Immunization</td><td>Tiêm chủng</td></tr>
<tr><td>Procedures History</td><td>Procedure</td><td>Phẫu thuật, thủ thuật đã thực hiện</td></tr>
</tbody>
</table>

<h3 id="ips-document"><strong>IPS Document Bundle</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "document",
  "entry": [
    {
      "resource": {
        "resourceType": "Composition",
        "meta": {
          "profile": [
            "http://hl7.org/fhir/uv/ips/StructureDefinition/Composition-uv-ips"
          ]
        },
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "60591-5",
              "display": "Patient summary Document"
            }
          ]
        },
        "subject": {"reference": "Patient/patient-001"},
        "date": "2025-01-15",
        "author": [{"reference": "Practitioner/practitioner-001"}],
        "title": "International Patient Summary",
        "section": [
          {
            "title": "Active Problems",
            "code": {"coding": [{"system": "http://loinc.org", "code": "11450-4"}]},
            "entry": [{"reference": "Condition/cond-001"}]
          },
          {
            "title": "Medication Summary",
            "code": {"coding": [{"system": "http://loinc.org", "code": "10160-0"}]},
            "entry": [{"reference": "MedicationStatement/med-001"}]
          },
          {
            "title": "Allergies and Intolerances",
            "code": {"coding": [{"system": "http://loinc.org", "code": "48765-2"}]},
            "entry": [{"reference": "AllergyIntolerance/allergy-001"}]
          }
        ]
      }
    }
  ]
}
</code></pre>

<h3 id="ips-use-case"><strong>Use case IPS cho Việt Nam</strong></h3>

<ul>
<li><strong>Du lịch y tế</strong> — BN Nhật/Hàn đến VN mang theo IPS</li>
<li><strong>Lao động nước ngoài</strong> — Công nhân VN tại Nhật/Hàn cần IPS</li>
<li><strong>Chuyển viện quốc tế</strong> — BV FV, Vinmec quốc tế</li>
</ul>

<h2 id="3-au-core"><strong>3. AU Core (Australia)</strong></h2>

<table>
<thead>
<tr><th>Đặc điểm</th><th>AU Core</th><th>Bài học cho VN</th></tr>
</thead>
<tbody>
<tr><td>Identifier</td><td>IHI (Individual Healthcare Identifier)</td><td>Tương tự CCCD/BHYT</td></tr>
<tr><td>Indigenous status</td><td>Aboriginal/Torres Strait Islander extension</td><td>Tương tự Dân tộc VN extension</td></tr>
<tr><td>Healthcare provider</td><td>HPI-I (identifier cho BS)</td><td>Mã chứng chỉ hành nghề</td></tr>
<tr><td>Organization</td><td>HPI-O (identifier cho tổ chức)</td><td>Mã cơ sở KCB</td></tr>
<tr><td>Terminology</td><td>SNOMED CT-AU, PBS, AMT</td><td>ICD-10 VN, Thuốc BHYT</td></tr>
</tbody>
</table>

<h2 id="4-uk-core"><strong>4. UK Core</strong></h2>

<table>
<thead>
<tr><th>Đặc điểm</th><th>UK Core</th><th>Bài học cho VN</th></tr>
</thead>
<tbody>
<tr><td>NHS Number</td><td>10-digit unique ID mỗi công dân</td><td>CCCD 12 số</td></tr>
<tr><td>Ethnicity</td><td>ONS 2011 Census categories</td><td>54 dân tộc VN</td></tr>
<tr><td>GP Practice</td><td>ODS code cho every GP</td><td>Mã cơ sở KCB ban đầu</td></tr>
<tr><td>dm+d</td><td>NHS Dictionary of Medicines</td><td>Danh mục thuốc BHYT</td></tr>
<tr><td>SNOMED CT UK</td><td>UK clinical terms</td><td>ICD-10 VN</td></tr>
</tbody>
</table>

<h2 id="5-so-sanh"><strong>5. So sánh Implementation Guides</strong></h2>

<table>
<thead>
<tr><th>Tiêu chí</th><th>US Core</th><th>AU Core</th><th>UK Core</th><th>VN Core (đề xuất)</th></tr>
</thead>
<tbody>
<tr><td>FHIR Version</td><td>R4</td><td>R4</td><td>R4</td><td>R5</td></tr>
<tr><td>Patient ID</td><td>MRN/SSN</td><td>IHI</td><td>NHS Number</td><td>CCCD</td></tr>
<tr><td>Insurance</td><td>Coverage</td><td>Medicare</td><td>NHS</td><td>BHYT</td></tr>
<tr><td>Diagnosis code</td><td>ICD-10-CM</td><td>ICD-10-AM</td><td>SNOMED CT</td><td>ICD-10 VN</td></tr>
<tr><td>Drug code</td><td>RxNorm</td><td>AMT</td><td>dm+d</td><td>Thuốc BHYT</td></tr>
<tr><td>Lab code</td><td>LOINC</td><td>LOINC</td><td>LOINC</td><td>LOINC</td></tr>
<tr><td>Mandate</td><td>ONC Rule</td><td>ADHA</td><td>NHS Digital</td><td>BYT (tương lai)</td></tr>
</tbody>
</table>

<h2 id="6-bai-hoc"><strong>6. Bài học từ triển khai thực tế</strong></h2>

<ol>
<li><strong>Start small</strong> — US Core bắt đầu với 15 profiles, mở rộng dần</li>
<li><strong>Government mandate</strong> — Cần quy định pháp lý (ONC Rule, ADHA) để thúc đẩy adoption</li>
<li><strong>Terminology first</strong> — Xây dựng CodeSystems/ValueSets (ICD-10 VN, Thuốc BHYT) trước profiles</li>
<li><strong>Testing infrastructure</strong> — US có Touchstone, Inferno cho conformance testing</li>
<li><strong>Community</strong> — Connectathon, IG balloting, community feedback</li>
<li><strong>Backward compatibility</strong> — US Core giữ R4 vì ecosystem lớn; VN có thể bắt đầu R5</li>
<li><strong>Must Support</strong> — Định nghĩa rõ must-support semantics cho vendors</li>
</ol>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><p><strong>US Core</strong> — IG tham chiếu lớn nhất, bắt buộc bởi ONC, sử dụng SNOMED CT + LOINC + RxNorm</p></li>
<li><p><strong>IPS</strong> — Tóm tắt hồ sơ xuyên biên giới, ISO 27269, 5 sections bắt buộc</p></li>
<li><p><strong>AU/UK Core</strong> — Mỗi quốc gia tùy chỉnh theo identifier, terminology, legislation riêng</p></li>
<li><p><strong>VN Core</strong> — Cần xây dựng dựa trên bài học quốc tế, bắt đầu từ terminology + Patient profile</p></li>
</ul>
