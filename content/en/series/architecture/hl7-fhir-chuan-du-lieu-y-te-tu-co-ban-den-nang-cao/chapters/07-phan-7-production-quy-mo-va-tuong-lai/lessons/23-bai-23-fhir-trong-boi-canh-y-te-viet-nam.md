---
id: 019e0a10-a702-7001-d001-f1a7f8000702
title: 'Lesson 23: FHIR in the Vietnamese Health Context'
slug: bai-23-fhir-trong-boi-canh-y-te-viet-nam
description: >-
  Circular 54/2017/TT-BYT (EMR), Circular 46/2018/TT-BYT (electronic HSBA),
  integrating VNEID, social insurance, health data portal, current status of
  FHIR application in Vietnam, implementation roadmap.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 23
section_title: 'Part 7: Production, Scale and Future'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Basic to Advanced Healthcare Data Standard
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2987" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2987)"/>

  <!-- Decorations -->
  <g>
    <circle cx="659" cy="47" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="718" cy="226" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="777" cy="145" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="836" cy="64" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="895" cy="243" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="57" x2="1100" y2="137" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="87" x2="1050" y2="157" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1034.712812921102,191 1034.712812921102,223 1007,239 979.287187078898,223 979.287187078898,191 1007,175" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ Architecture — Lesson 23</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 23: FHIR in the Vietnamese Health Context</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Basic to Advanced Healthcare Data Standard</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 7: Production, Scale and Future</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-he-thong-y-te-viet-nam"><strong>1. Vietnam Healthcare System — Overview</strong></h2>

<p>Vietnam has a 4-level healthcare system with tens of thousands of medical facilities, each using different HIS. FHIR is an opportunity to unify data.</p>

<table>
<thead>
<tr><th>Granted</th><th>Quantity</th><th>For example</th></tr>
</thead>
<tbody>
<tr><td>Central</td><td>~40 Hospitals</td><td>Bach Mai, Cho Ray, Hue Central</td></tr>
<tr><td>Province/City</td><td>~400 Hospitals</td><td>Provincial General Hospital</td></tr>
<tr><td>District/District</td><td>~700 Hospitals</td><td>District General Hospital, Medical Center</td></tr>
<tr><td>Commune/Ward</td><td>~11,000</td><td>Commune medical station</td></tr>
</tbody>
</table>

<h2 id="2-khung-phap-ly"><strong>2. Relevant legal framework</strong></h2>

<h3 id="tt-54-2017"><strong>Circular 54/2017/TT-BYT</strong></h3>

<p>Regulation of quality criteria and standards for medical management software.</p>

<table>
<thead>
<tr><th>Criteria group</th><th>Request</th><th>FHIR mapping</th></tr>
</thead>
<tbody>
<tr><td>BN management</td><td>Patient code, demographic information</td><td>Patient resources</td></tr>
<tr><td>Medical examination</td><td>History, diagnosis, medical orders</td><td>Encounter, Condition, ServiceRequest</td></tr>
<tr><td>Paraclinical</td><td>XN, CDHA, GPBL</td><td>DiagnosticReport, Observation</td></tr>
<tr><td>Inpatient treatment</td><td>Developments, drugs, surgery</td><td>MedicationRequest, Procedure</td></tr>
<tr><td>Hospital fees/health insurance</td><td>Expenses, payments</td><td>Claim, Coverage</td></tr>
<tr><td>Report</td><td>Report to the Ministry of Health according to the form</td><td>MeasureReport</td></tr>
</tbody>
</table>

<h3 id="tt-46-2018"><strong>Circular 46/2018/TT-BYT</strong></h3>

<p>Regulations on electronic medical records (HSBA DT). This is the legal foundation for EMR in Vietnam.</p>

<ul>
<li><strong>Article 4</strong>: The content of the electronic HSBA must be equivalent to the paper HSBA</li>
<li><strong>Article 5</strong>: Digital signature for doctors and pharmacists</li>
<li><strong>Article 7</strong>: Minimum storage of 10 years (inpatient), 5 years (outpatient)</li>
<li><strong>Article 8</strong>: Data communication between medical facilities</li>
</ul>

<h3 id="nd-13-2023"><strong>Decree 13/2023/ND-CP</strong></h3>

<p>Personal data protection — applies to medical data (sensitive data).</p>

<ul>
<li>Must have <strong>consent</strong> of the patient → FHIR Consent resource</li>
<li>Notify when it happens <strong>data breach</strong> within 72 hours</li>
<li>Bachelor <strong>DPO</strong> (Data Protection Officer) → AuditEvent tracking</li>
<li>Rights <strong>delete data</strong> (right to erasure) — should be considered with medical storage requirements</li>
</ul>

<h2 id="3-he-thong-lien-thong"><strong>3. Current interconnected systems</strong></h2>

<h3 id="bhxh"><strong>Social insurance portal — Insurance appraisal</strong></h3>

<pre><code class="language-text">┌──────────┐     ┌──────────────┐     ┌──────────┐
│  HIS BV  │────▶│ Cổng BHXH    │────▶│ BHXH VN  │
│          │ XML │ (9210/API)   │     │          │
└──────────┘     └──────────────┘     └──────────┘
                  Hiện: XML 130 mẫu
                  Tương lai: FHIR?
</code></pre>

<p>Currently, the social insurance portal uses its own XML format (130 tables). FHIR can be replaced by map:</p>

<table>
<thead>
<tr><th>Social insurance XML table</th><th>FHIR Resource</th></tr>
</thead>
<tbody>
<tr><td>XML1 — Patient information</td><td>Patient + Coverage</td></tr>
<tr><td>XML2 — Diagnostics</td><td>Condition</td></tr>
<tr><td>XML3 — Medicine</td><td>MedicationRequest</td></tr>
<tr><td>XML4 — Technical Services</td><td>Procedure + ChargeItem</td></tr>
<tr><td>XML5 — Cost</td><td>Claim + ClaimResponse</td></tr>
</tbody>
</table>

<h3 id="vneid"><strong>VNEID — Citizen identification</strong></h3>

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

<h3 id="cong-du-lieu-y-te"><strong>National Health Data Portal</strong></h3>

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

<h2 id="4-mapping-icd10-vn"><strong>4. ICD-10 Vietnam</strong></h2>

<p>Vietnam uses ICD-10 WHO with additional code VN (ICD-10 VN). Need to create separate CodeSystem.</p>

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

<h2 id="5-danh-muc-thuoc"><strong>5. List of drugs covered by health insurance</strong></h2>

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

<h2 id="6-roadmap"><strong>6. Roadmap for FHIR implementation in Vietnam</strong></h2>

<table>
<thead>
<tr><th>Phase</th><th>Target</th><th>Time</th></tr>
</thead>
<tbody>
<tr><td>1. Foundation</td><td>VN Core IG (Patient, Organization, Practitioner)</td><td>6-12 months</td></tr>
<tr><td>2. Clinical</td><td>Encounter, Condition, Observation, Medication profiles</td><td>12-18 months</td></tr>
<tr><td>3. Integration</td><td>Connecting upper and lower level hospitals, social insurance gateway</td><td>18-24 months</td></tr>
<tr><td>4. Scale</td><td>National HIE, telemedicine, PHR</td><td>24-36 months</td></tr>
</tbody>
</table>

<h2 id="7-thuc-trang"><strong>7. Current Situation and Challenges</strong></h2>

<table>
<thead>
<tr><th>Challenge</th><th>Details</th></tr>
</thead>
<tbody>
<tr><td>HIS diversity</td><td>20+ HIS vendors, no common standard</td></tr>
<tr><td>IT infrastructure</td><td>District/commune level: internet is unstable</td></tr>
<tr><td>Human resources</td><td>There is a shortage of engineers who understand both IT and healthcare</td></tr>
<tr><td>Funding</td><td>Public hospitals have limited IT budgets</td></tr>
<tr><td>Resistance to change</td><td>Medical staff are familiar with the old system</td></tr>
<tr><td>Security</td><td>Decree 13/2023 is new, there are no detailed instructions for healthcare</td></tr>
</tbody>
</table>

<h2 id="8-tong-ket"><strong>8. Summary</strong></h2>

<ul>
<li><p><strong>Circular 54/2017</strong> — Healthcare management software standards → map to FHIR resources</p></li>
<li><p><strong>Circular 46/2018</strong> — Electronic HSBA, data communication → FHIR Documents + API</p></li>
<li><p><strong>Decree 13/2023</strong> — Personal data protection → FHIR Consent + AuditEvent</p></li>
<li><p><strong>Social insurance, VNEID</strong> — Integration via identifier systems</p></li>
<li><p><strong>ICD-10 VN, Health insurance drugs</strong> — Need to create CodeSystem/ValueSet for VN</p></li>
<li><p><strong>Roadmap</strong> — From VN Core IG → Clinical profiles → National HIE</p></li>
</ul>
