---
id: 019e0a10-a402-7001-d001-f1a7f8000402
title: 第 12 課：術語 - CodeSystem、ValueSet、ConceptMap
slug: bai-12-terminologies-codesystem-valueset-conceptmap
description: >-
  醫學術語系統：ICD-10（診斷）、SNOMED CT（臨床）、LOINC（實驗室）、RxNorm（藥物）、CPT（程序）、ATC（藥物分類）。 FHIR
  中的程式碼系統、值集、概念圖。術語綁定（必需、可擴充、首選、範例）。 $驗證程式碼，$擴展，$查找。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 第 4 部分：資料類型、術語和設定文件
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ 建築 — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：術語 - CodeSystem、</tspan>
      <tspan x="60" dy="42">值集、概念圖</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：資料類型、術語和設定文件</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-he-thong-thuat-ngu-y-te"><strong>1. 主要醫學術語系統</strong></h2>

<table>
<thead>
<tr><th>系統</th><th>整理</th><th>目的</th><th>FHIR 系統 URI</th></tr>
</thead>
<tbody>
<tr><td>ICD-10</td><td>世界衛生組織</td><td>疾病分類與死因</td><td>http://hl7.org/fhir/sid/icd-10</td></tr>
<tr><td>斯諾梅德CT</td><td>斯諾梅德國際</td><td>全面的臨床術語</td><td>http://snomed.info/sct</td></tr>
<tr><td>洛因克</td><td>雷根斯特里夫</td><td>實驗室檢測和臨床觀察</td><td>http://loinc.org</td></tr>
<tr><td>接收標準</td><td>自然語言管理</td><td>標準化藥物名稱（美國）</td><td>http://www.nlm.nih.gov/research/umls/rxnorm</td></tr>
<tr><td>空中交通管制</td><td>世界衛生組織</td><td>藥物依組別分類（國際）</td><td>http://www.whocc.no/atc</td></tr>
<tr><td>顯性PT</td><td>美國醫學協會</td><td>醫療程序/服務代碼</td><td>http://www.ama-assn.org/go/cpt</td></tr>
<tr><td>CVX</td><td>疾病預防控制中心</td><td>疫苗代碼</td><td>http://hl7.org/fhir/sid/cvx</td></tr>
<tr><td>UCUM</td><td>雷根斯特里夫</td><td>計量單位</td><td>http://unitsofmeasure.org</td></tr>
</tbody>
</table>

<h3 id="icd-10"><strong>ICD-10 — 國際疾病分類</strong></h3>

<p>用於 <code>條件代碼</code>, <code>遭遇診斷</code>。越南使用官方 ICD-10 (WHO)。</p>

<pre><code class="language-json">{
  "system": "http://hl7.org/fhir/sid/icd-10",
  "code": "E11.9",
  "display": "Type 2 diabetes mellitus without complications"
}
</code></pre>

<h3 id="snomed-ct"><strong>SNOMED CT — 醫學系統命名法</strong></h3>

<p>最全面的術語系統，35萬+個概念、層次關係（本體）。</p>

<pre><code class="language-json">{
  "system": "http://snomed.info/sct",
  "code": "73211009",
  "display": "Diabetes mellitus"
}
</code></pre>

<h3 id="loinc"><strong>LOINC — 邏輯觀察識別碼名稱和代碼</strong></h3>

<p>97,000 多個用於測試和臨床觀察的代碼。用於 <code>觀察程式碼</code>, <code>診斷報告.code</code>。</p>

<pre><code class="language-json">{
  "system": "http://loinc.org",
  "code": "4548-4",
  "display": "Hemoglobin A1c/Hemoglobin.total in Blood"
}
</code></pre>

<h2 id="2-codesystem"><strong>2. 代碼系統資源</strong></h2>

<p><strong>編碼系統</strong> 定義一組概念（代碼）－可以是國際系統或自訂系統。</p>

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

<h2 id="3-valueset"><strong>3. 值集資源</strong></h2>

<p><strong>值集</strong> 從一個或多個代碼系統中選擇一個子集。</p>

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

<h3 id="valueset-filter"><strong>帶過濾器的值集</strong></h3>

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

<h2 id="4-conceptmap"><strong>4. ConceptMap－程式碼系統之間的映射</strong></h2>

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

<h3 id="relationship-types"><strong>關係類型</strong></h3>

<table>
<thead>
<tr><th>關係</th><th>描述</th></tr>
</thead>
<tbody>
<tr><td>同等</td><td>完全等價</td></tr>
<tr><td>源比目標窄</td><td>源比目標窄</td></tr>
<tr><td>來源比目標更廣泛</td><td>來源比目標更廣泛</td></tr>
<tr><td>不相關</td><td>不相關</td></tr>
</tbody>
</table>

<h2 id="5-terminology-binding"><strong>5. 術語綁定</strong></h2>

<p>綁定指定哪些元素需要使用 ValueSet 中的程式碼。</p>

<table>
<thead>
<tr><th>實力</th><th>描述</th><th>例如</th></tr>
</thead>
<tbody>
<tr><td>需要。必填</td><td>需要使用 ValueSet 中的程式碼</td><td>患者性別</td></tr>
<tr><td>可擴展的</td><td>應該使用。如果找不到，您可以使用其他程式碼</td><td>條件代碼</td></tr>
<tr><td>首選</td><td>推薦。可以使用其他代碼</td><td>遭遇型</td></tr>
<tr><td>例子</td><td>只是例子。可以使用任何值集</td><td>觀察程式碼</td></tr>
</tbody>
</table>

<h2 id="6-terminology-operations"><strong>6. 術語服務運營</strong></h2>

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

<h2 id="7-tong-ket"><strong>七、總結</strong></h2>

<ul>
<li><p><strong>編碼系統</strong> — 定義代碼集（ICD-10、SNOMED CT、LOINC 或自訂）</p></li>
<li><p><strong>值集</strong> — 从CodeSystems中选择子集，用于绑定</p></li>
<li><p><strong>概念圖</strong> — 代碼系統之間的對應 (ICD-10 ↔ SNOMED CT)</p></li>
<li><p><strong>結合強度</strong> — 必需 > 可扩展 > 首选 > 示例</p></li>
<li><p><strong>術語操作</strong> — $validate-code、$expand、$lookup、$translate</p></li>
</ul>
