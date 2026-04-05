---
id: 019e0a10-a402-7001-d001-f1a7f8000402
title: 'Bài 12: Terminologies - CodeSystem, ValueSet, ConceptMap'
slug: bai-12-terminologies-codesystem-valueset-conceptmap
description: >-
  Hệ thống thuật ngữ y tế: ICD-10 (chẩn đoán), SNOMED CT (lâm sàng),
  LOINC (xét nghiệm), RxNorm (thuốc), CPT (thủ thuật), ATC (phân loại thuốc).
  CodeSystem, ValueSet, ConceptMap trong FHIR. Terminology binding
  (required, extensible, preferred, example). $validate-code, $expand, $lookup.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 4: Data Types, Terminologies và Profiles"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1644" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1644)"/>

  <!-- Decorations -->
  <g>
    <circle cx="880" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="940" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="190" x2="1100" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="220" x2="1050" y2="290" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1011.650635094611,177.5 1011.650635094611,202.5 990,215 968.349364905389,202.5 968.349364905389,177.5 990,165" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ Kiến trúc — Bài 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: Terminologies - CodeSystem,</tspan>
      <tspan x="60" dy="42">ValueSet, ConceptMap</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Data Types, Terminologies và Profiles</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-he-thong-thuat-ngu-y-te"><strong>1. Các hệ thống thuật ngữ y tế chính</strong></h2>

<table>
<thead>
<tr><th>Hệ thống</th><th>Tổ chức</th><th>Mục đích</th><th>FHIR system URI</th></tr>
</thead>
<tbody>
<tr><td>ICD-10</td><td>WHO</td><td>Phân loại bệnh tật, nguyên nhân tử vong</td><td>http://hl7.org/fhir/sid/icd-10</td></tr>
<tr><td>SNOMED CT</td><td>SNOMED Int'l</td><td>Thuật ngữ lâm sàng toàn diện</td><td>http://snomed.info/sct</td></tr>
<tr><td>LOINC</td><td>Regenstrief</td><td>Xét nghiệm, quan sát lâm sàng</td><td>http://loinc.org</td></tr>
<tr><td>RxNorm</td><td>NLM</td><td>Tên thuốc chuẩn hóa (Hoa Kỳ)</td><td>http://www.nlm.nih.gov/research/umls/rxnorm</td></tr>
<tr><td>ATC</td><td>WHO</td><td>Phân loại thuốc theo nhóm (quốc tế)</td><td>http://www.whocc.no/atc</td></tr>
<tr><td>CPT</td><td>AMA</td><td>Mã thủ thuật / dịch vụ y tế</td><td>http://www.ama-assn.org/go/cpt</td></tr>
<tr><td>CVX</td><td>CDC</td><td>Mã vaccine</td><td>http://hl7.org/fhir/sid/cvx</td></tr>
<tr><td>UCUM</td><td>Regenstrief</td><td>Đơn vị đo lường</td><td>http://unitsofmeasure.org</td></tr>
</tbody>
</table>

<h3 id="icd-10"><strong>ICD-10 — International Classification of Diseases</strong></h3>

<p>Sử dụng cho <code>Condition.code</code>, <code>Encounter.diagnosis</code>. Việt Nam sử dụng ICD-10 chính thức (WHO).</p>

<pre><code class="language-json">{
  "system": "http://hl7.org/fhir/sid/icd-10",
  "code": "E11.9",
  "display": "Type 2 diabetes mellitus without complications"
}
</code></pre>

<h3 id="snomed-ct"><strong>SNOMED CT — Systematized Nomenclature of Medicine</strong></h3>

<p>Hệ thống thuật ngữ toàn diện nhất, 350,000+ concepts, quan hệ phân cấp (ontology).</p>

<pre><code class="language-json">{
  "system": "http://snomed.info/sct",
  "code": "73211009",
  "display": "Diabetes mellitus"
}
</code></pre>

<h3 id="loinc"><strong>LOINC — Logical Observation Identifiers Names and Codes</strong></h3>

<p>97,000+ codes cho xét nghiệm và quan sát lâm sàng. Dùng cho <code>Observation.code</code>, <code>DiagnosticReport.code</code>.</p>

<pre><code class="language-json">{
  "system": "http://loinc.org",
  "code": "4548-4",
  "display": "Hemoglobin A1c/Hemoglobin.total in Blood"
}
</code></pre>

<h2 id="2-codesystem"><strong>2. CodeSystem Resource</strong></h2>

<p><strong>CodeSystem</strong> định nghĩa tập hợp các concepts (codes) — có thể là hệ thống quốc tế hoặc custom.</p>

<pre><code class="language-json">{
  "resourceType": "CodeSystem",
  "url": "http://hospital.vn/fhir/CodeSystem/loai-kham",
  "name": "LoaiKham",
  "title": "Loại hình khám chữa bệnh",
  "status": "active",
  "content": "complete",
  "count": 5,
  "concept": [
    {
      "code": "KSK",
      "display": "Khám sức khỏe",
      "definition": "Khám sức khỏe tổng quát định kỳ"
    },
    {
      "code": "KBT",
      "display": "Khám bệnh thường",
      "definition": "Khám bệnh ngoại trú thông thường"
    },
    {
      "code": "CC",
      "display": "Cấp cứu",
      "definition": "Khám cấp cứu"
    },
    {
      "code": "BHYT",
      "display": "Khám BHYT",
      "definition": "Khám bảo hiểm y tế"
    },
    {
      "code": "DV",
      "display": "Khám dịch vụ",
      "definition": "Khám theo yêu cầu (dịch vụ)"
    }
  ]
}
</code></pre>

<h2 id="3-valueset"><strong>3. ValueSet Resource</strong></h2>

<p><strong>ValueSet</strong> chọn lọc một tập con từ một hoặc nhiều CodeSystems.</p>

<pre><code class="language-json">{
  "resourceType": "ValueSet",
  "url": "http://hospital.vn/fhir/ValueSet/vital-signs-codes",
  "name": "VitalSignsCodes",
  "title": "Mã dấu hiệu sinh tồn",
  "status": "active",
  "compose": {
    "include": [
      {
        "system": "http://loinc.org",
        "concept": [
          {"code": "8480-6", "display": "Systolic blood pressure"},
          {"code": "8462-4", "display": "Diastolic blood pressure"},
          {"code": "8867-4", "display": "Heart rate"},
          {"code": "8310-5", "display": "Body temperature"},
          {"code": "9279-1", "display": "Respiratory rate"},
          {"code": "2708-6", "display": "Oxygen saturation (SpO2)"},
          {"code": "29463-7", "display": "Body weight"},
          {"code": "8302-2", "display": "Body height"}
        ]
      }
    ]
  }
}
</code></pre>

<h3 id="valueset-filter"><strong>ValueSet với Filter</strong></h3>

<pre><code class="language-json">{
  "resourceType": "ValueSet",
  "url": "http://hospital.vn/fhir/ValueSet/icd10-cardiovascular",
  "compose": {
    "include": [
      {
        "system": "http://hl7.org/fhir/sid/icd-10",
        "filter": [
          {
            "property": "concept",
            "op": "is-a",
            "value": "I00-I99"
          }
        ]
      }
    ],
    "exclude": [
      {
        "system": "http://hl7.org/fhir/sid/icd-10",
        "concept": [
          {"code": "I99"}
        ]
      }
    ]
  }
}
</code></pre>

<h2 id="4-conceptmap"><strong>4. ConceptMap — Ánh xạ giữa CodeSystems</strong></h2>

<pre><code class="language-json">{
  "resourceType": "ConceptMap",
  "url": "http://hospital.vn/fhir/ConceptMap/icd10-to-snomed",
  "name": "ICD10ToSNOMED",
  "title": "ICD-10 → SNOMED CT Mapping",
  "status": "active",
  "sourceScope": "http://hl7.org/fhir/sid/icd-10",
  "targetScope": "http://snomed.info/sct",
  "group": [
    {
      "source": "http://hl7.org/fhir/sid/icd-10",
      "target": "http://snomed.info/sct",
      "element": [
        {
          "code": "I10",
          "display": "Essential (primary) hypertension",
          "target": [
            {
              "code": "38341003",
              "display": "Hypertensive disorder",
              "relationship": "equivalent"
            }
          ]
        },
        {
          "code": "E11",
          "display": "Type 2 diabetes mellitus",
          "target": [
            {
              "code": "44054006",
              "display": "Type 2 diabetes mellitus",
              "relationship": "equivalent"
            }
          ]
        }
      ]
    }
  ]
}
</code></pre>

<h3 id="relationship-types"><strong>Relationship Types</strong></h3>

<table>
<thead>
<tr><th>Relationship</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>equivalent</td><td>Tương đương hoàn toàn</td></tr>
<tr><td>source-is-narrower-than-target</td><td>Source hẹp hơn target</td></tr>
<tr><td>source-is-broader-than-target</td><td>Source rộng hơn target</td></tr>
<tr><td>not-related-to</td><td>Không liên quan</td></tr>
</tbody>
</table>

<h2 id="5-terminology-binding"><strong>5. Terminology Binding</strong></h2>

<p>Binding quy định element BẮT BUỘC dùng codes từ ValueSet nào.</p>

<table>
<thead>
<tr><th>Strength</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td>required</td><td>BẮT BUỘC dùng code từ ValueSet</td><td>Patient.gender</td></tr>
<tr><td>extensible</td><td>NÊN dùng. Có thể dùng code khác nếu không tìm thấy</td><td>Condition.code</td></tr>
<tr><td>preferred</td><td>KHUYẾN NGHỊ. Có thể dùng code khác</td><td>Encounter.type</td></tr>
<tr><td>example</td><td>Chỉ ví dụ. Dùng ValueSet nào cũng được</td><td>Observation.code</td></tr>
</tbody>
</table>

<h2 id="6-terminology-operations"><strong>6. Terminology Service Operations</strong></h2>

<pre><code class="language-http"># $validate-code — kiểm tra code có hợp lệ trong ValueSet
POST /ValueSet/$validate-code
{
  "resourceType": "Parameters",
  "parameter": [
    {"name": "url", "valueUri": "http://hl7.org/fhir/ValueSet/administrative-gender"},
    {"name": "code", "valueCode": "male"},
    {"name": "system", "valueUri": "http://hl7.org/fhir/administrative-gender"}
  ]
}

# $expand — mở rộng ValueSet ra danh sách codes
GET /ValueSet/$expand?url=http://hospital.vn/fhir/ValueSet/vital-signs-codes

# $lookup — tra cứu thông tin code
GET /CodeSystem/$lookup?system=http://loinc.org&code=4548-4

# $translate — ánh xạ code qua ConceptMap
GET /ConceptMap/$translate?system=http://hl7.org/fhir/sid/icd-10&code=I10&target=http://snomed.info/sct
</code></pre>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><p><strong>CodeSystem</strong> — Định nghĩa tập codes (ICD-10, SNOMED CT, LOINC, hoặc custom)</p></li>
<li><p><strong>ValueSet</strong> — Chọn lọc subset từ CodeSystems, dùng cho binding</p></li>
<li><p><strong>ConceptMap</strong> — Ánh xạ giữa CodeSystems (ICD-10 ↔ SNOMED CT)</p></li>
<li><p><strong>Binding strengths</strong> — required > extensible > preferred > example</p></li>
<li><p><strong>Terminology operations</strong> — $validate-code, $expand, $lookup, $translate</p></li>
</ul>
