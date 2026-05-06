---
id: 019e0a10-a403-7001-d001-f1a7f8000403
title: 第 13 課：設定檔、擴充和實施指南
slug: bai-13-profiles-extensions-va-implementation-guides
description: >-
  StructureDefinition，建立Profile來綁定Resource、Extensions（簡單、複雜、修飾符）、Slicing、Invariants（FHIRPath約束）。實施指南
  (IG)，IG 出版商，以美國核心概況為例，國際病患摘要 (IPS)。 FHIR 簡寫 (FSH)。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 第 4 部分：資料類型、術語和設定文件
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-201" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-201)"/>

  <!-- Decorations -->
  <g>
    <circle cx="782" cy="236" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="964" cy="218" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="646" cy="200" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="828" cy="182" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="1010" cy="164" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="236" x2="1100" y2="316" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="266" x2="1050" y2="336" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="962.8467875173176,120.5 962.8467875173176,151.5 936,167 909.1532124826824,151.5 909.1532124826824,120.50000000000001 936,105" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ 建築 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：設定檔、擴充和</tspan>
      <tspan x="60" dy="42">實施指南</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：資料類型、術語和設定文件</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-profiles"><strong>1. 設定檔－綁定資源</strong></h2>

<p>一 <strong>公司簡介</strong> (StructureDefinition) 增加了對基本 FHIR 資源的限制 — 必需的元素、有限的基數、綁定術語、新增的擴充。</p>

<h3 id="fsh-profile"><strong>使用 FHIR 簡寫 (FSH) 的設定檔範例</strong></h3>

<pre><code class="language-fsh">Profile: VNPatient
Parent: Patient
Id: vn-patient
Title: "VN Core Patient Profile"
Description: "Patient profile cho y tế Việt Nam, yêu cầu CCCD, ngày sinh, giới tính"

// Bắt buộc các elements
* identifier 1..* MS
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open

* identifier contains
    cccd 0..1 MS and
    bhyt 0..1 MS

* identifier[cccd].system = "http://cccd.gov.vn" (exactly)
* identifier[cccd].type = http://terminology.hl7.org/CodeSystem/v2-0203#NI
* identifier[cccd].value 1..1

* identifier[bhyt].system = "http://bhxh.gov.vn/bhyt" (exactly)
* identifier[bhyt].type = http://terminology.hl7.org/CodeSystem/v2-0203#SB

* name 1..* MS
* gender 1..1 MS
* birthDate 1..1 MS

// Extension
* extension contains
    VNEthnicity named ethnicity 0..1 MS and
    VNNationality named nationality 0..1 MS

// Binding
* maritalStatus from http://hl7.org/fhir/ValueSet/marital-status (extensible)
</code></pre>

<h3 id="structuredefinition"><strong>結構定義 (JSON)</strong></h3>

<pre><code class="language-json">{
  "resourceType": "StructureDefinition",
  "url": "http://fhir.vn/StructureDefinition/vn-patient",
  "name": "VNPatient",
  "title": "VN Core Patient Profile",
  "status": "active",
  "kind": "resource",
  "abstract": false,
  "type": "Patient",
  "baseDefinition": "http://hl7.org/fhir/StructureDefinition/Patient",
  "derivation": "constraint",
  "differential": {
    "element": [
      {
        "id": "Patient.identifier",
        "path": "Patient.identifier",
        "min": 1,
        "mustSupport": true,
        "slicing": {
          "discriminator": [
            {"type": "pattern", "path": "type"}
          ],
          "rules": "open"
        }
      },
      {
        "id": "Patient.identifier:cccd",
        "path": "Patient.identifier",
        "sliceName": "cccd",
        "min": 0,
        "max": "1",
        "mustSupport": true
      },
      {
        "id": "Patient.identifier:cccd.system",
        "path": "Patient.identifier.system",
        "fixedUri": "http://cccd.gov.vn"
      },
      {
        "id": "Patient.identifier:cccd.value",
        "path": "Patient.identifier.value",
        "min": 1
      },
      {
        "id": "Patient.name",
        "path": "Patient.name",
        "min": 1,
        "mustSupport": true
      },
      {
        "id": "Patient.gender",
        "path": "Patient.gender",
        "min": 1,
        "mustSupport": true
      },
      {
        "id": "Patient.birthDate",
        "path": "Patient.birthDate",
        "min": 1,
        "mustSupport": true
      }
    ]
  }
}
</code></pre>

<h2 id="2-extensions"><strong>2. 擴展</strong></h2>

<p>擴展允許添加基本 FHIR 資源沒有的數據 - 這就是機制 <strong>可擴展性</strong> 核心。</p>

<h3 id="simple-extension"><strong>簡單的擴展</strong></h3>

<pre><code class="language-fsh">Extension: VNEthnicity
Id: vn-ethnicity
Title: "Dân tộc Việt Nam"
Description: "Mã dân tộc theo danh mục 54 dân tộc Việt Nam"
Context: Patient
* value[x] only CodeableConcept
* valueCodeableConcept from VNEthnicityVS (required)
</code></pre>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "extension": [
    {
      "url": "http://fhir.vn/StructureDefinition/vn-ethnicity",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://fhir.vn/CodeSystem/vn-ethnicity",
            "code": "01",
            "display": "Kinh"
          }
        ]
      }
    }
  ]
}
</code></pre>

<h3 id="complex-extension"><strong>複雜擴展</strong></h3>

<pre><code class="language-fsh">Extension: VNAddress
Id: vn-address
Title: "Địa chỉ hành chính Việt Nam"
Context: Address
* extension contains
    province 1..1 MS and
    district 1..1 MS and
    ward 0..1 MS
* extension[province].value[x] only CodeableConcept
* extension[province].valueCodeableConcept from VNProvinceVS (required)
* extension[district].value[x] only CodeableConcept
* extension[district].valueCodeableConcept from VNDistrictVS (required)
* extension[ward].value[x] only CodeableConcept
* extension[ward].valueCodeableConcept from VNWardVS (required)
</code></pre>

<h3 id="modifier-extension"><strong>修飾符擴充</strong></h3>

<p>修飾符擴充 <strong>改變意義</strong> 包含它的元素的名稱 - 接收者必須理解這個擴充。</p>

<pre><code class="language-json">{
  "resourceType": "AllergyIntolerance",
  "modifierExtension": [
    {
      "url": "http://hospital.vn/fhir/StructureDefinition/allergy-certainty",
      "valueCode": "unconfirmed"
    }
  ]
}
</code></pre>

<h2 id="3-slicing"><strong>3. 切片</strong></h2>

<p>切片將重複元素（基數 0..*）劃分為具有不同約束的單獨「切片」。</p>

<pre><code class="language-fsh">* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "type"
* identifier ^slicing.rules = #open
* identifier ^slicing.ordered = false

* identifier contains
    cccd 0..1 MS and    // Slice cho CCCD
    bhyt 0..1 MS and    // Slice cho BHYT
    mrn 1..1 MS         // Slice cho MRN (bắt buộc)
</code></pre>

<table>
<thead>
<tr><th>鑑別器類型</th><th>描述</th></tr>
</thead>
<tbody>
<tr><td>值。值</td><td>以具體數值區分</td></tr>
<tr><td>模式。圖案</td><td>使用模式匹配進行區分</td></tr>
<tr><td>類型</td><td>按類型區分（選擇類型）</td></tr>
<tr><td>簡介。簡介</td><td>按外形區分</td></tr>
<tr><td>存在</td><td>以存在區分</td></tr>
</tbody>
</table>

<h2 id="4-invariants"><strong>4. 不變量（FHIRPath 約束）</strong></h2>

<pre><code class="language-fsh">Invariant: vn-patient-1
Description: "Phải có ít nhất CCCD hoặc BHYT"
Expression: "identifier.where(system='http://cccd.gov.vn').exists() or identifier.where(system='http://bhxh.gov.vn/bhyt').exists()"
Severity: #error

Invariant: vn-patient-2
Description: "Nếu có CCCD thì phải có 12 chữ số"
Expression: "identifier.where(system='http://cccd.gov.vn').value.matches('^[0-9]{12}$')"
Severity: #error
</code></pre>

<h2 id="5-implementation-guide"><strong>5. 實施指南（IG）</strong></h2>

<p>IG 是一個完整的套件：設定檔、擴充、ValueSets、CodeSystems、範例、敘述性文件。</p>

<h3 id="ig-structure"><strong>IG專案結構</strong></h3>

<pre><code>vn-core-ig/
├── sushi-config.yaml        # SUSHI config
├── input/
│   ├── fsh/
│   │   ├── profiles/
│   │   │   ├── VNPatient.fsh
│   │   │   ├── VNEncounter.fsh
│   │   │   └── VNObservation.fsh
│   │   ├── extensions/
│   │   │   ├── VNEthnicity.fsh
│   │   │   └── VNAddress.fsh
│   │   ├── terminology/
│   │   │   ├── VNEthnicityCS.fsh
│   │   │   └── VNEthnicityVS.fsh
│   │   └── examples/
│   │       └── ExamplePatient.fsh
│   └── pagecontent/
│       ├── index.md
│       └── design.md
├── ig.ini
└── _genonce.sh
</code></pre>

<h3 id="sushi-config"><strong>sushi-config.yaml</strong></h3>

<pre><code class="language-yaml">id: vn.fhir.core
canonical: http://fhir.vn/ig/core
name: VNCoreIG
title: "Vietnam Core FHIR Implementation Guide"
status: active
version: 0.1.0
fhirVersion: 5.0.0
copyrightYear: 2025+
releaseLabel: ci-build
publisher:
  name: Vietnam Health IT Association
dependencies:
  hl7.fhir.r5.core: 5.0.0
</code></pre>

<h3 id="build-ig"><strong>建立IG</strong></h3>

<pre><code class="language-bash"># Install SUSHI
npm install -g fsh-sushi

# Compile FSH → FHIR JSON
sushi .

# Run IG Publisher
./_genonce.sh
# Output: output/ directory with HTML pages
</code></pre>

<h2 id="6-us-core-ips"><strong>6. US Core和IPS作為參考</strong></h2>

<table>
<thead>
<tr><th>免疫組化</th><th>描述</th><th>型材</th></tr>
</thead>
<tbody>
<tr><td>美國核心</td><td>美國，21 世紀治癒法案所要求的</td><td>患者、遭遇、病情、觀察、藥物治療…</td></tr>
<tr><td>IPS</td><td>國際病患摘要，ISO 27269</td><td>患者、藥物、過敏、問題、免疫接種…</td></tr>
<tr><td>非盟基地</td><td>澳洲</td><td>非盟患者、非盟從業者、...</td></tr>
</tbody>
</table>

<h2 id="7-tong-ket"><strong>七、總結</strong></h2>

<ul>
<li><p><strong>公司簡介</strong> — 資源綁定（必需元素、綁定、基底數）</p></li>
<li><p><strong>擴充</strong> — 新增基礎中沒有的資料（簡單、複雜、修飾符）</p></li>
<li><p><strong>切片</strong> — 將重複元素劃分為具有單獨約束的切片</p></li>
<li><p><strong>不變數</strong> — 使用 FHIRPath 的業務規則</p></li>
<li><p><strong>卵泡刺激素+壽司</strong> — 用於編寫簡潔的設定檔/擴充的 DSL 語言</p></li>
<li><p><strong>IG出版商</strong> — 從 FSH/JSON 建立網站文檔</p></li>
</ul>
