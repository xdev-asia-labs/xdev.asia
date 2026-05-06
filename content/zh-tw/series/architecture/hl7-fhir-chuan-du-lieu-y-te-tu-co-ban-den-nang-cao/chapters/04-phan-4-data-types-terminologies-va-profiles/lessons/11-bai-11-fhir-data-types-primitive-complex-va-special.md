---
id: 019e0a10-a401-7001-d001-f1a7f8000401
title: 第 11 課：FHIR 資料類型 - 原始、複雜和特殊
slug: bai-11-fhir-data-types-primitive-complex-va-special
description: >-
  基本型別（布林、字串、uri、日期、日期時間、即時、小數、整數）、複雜型別（HumanName、Address、ContactPoint、Identifier、CodeableConcept、Coding、Quantity、Period、Reference、Narrative）、BackboneElement、Element。資料類型的擴充。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 第 4 部分：資料類型、術語和設定文件
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1400" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1400)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1055" cy="195" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1010" cy="250" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="965" cy="45" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="920" cy="100" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="155" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="65" x2="1100" y2="145" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="95" x2="1050" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="999.6410161513776,145 999.6410161513776,185 965,205 930.3589838486224,185 930.3589838486224,145 965,125" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ 建築 — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：FHIR 資料型態 - 原始、</tspan>
      <tspan x="60" dy="42">複雜且特殊</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：資料類型、術語和設定文件</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-primitive-types"><strong>1. 原始類型</strong></h2>

<p>原始類型是 FHIR 中簡單的“原子”值。</p>

<table>
<thead>
<tr><th>類型</th><th>描述</th><th>例如</th></tr>
</thead>
<tbody>
<tr><td>布林值</td><td>真/假</td><td><code>真實</code></td></tr>
<tr><td>整數</td><td>32 位元整數</td><td><code>42</code></td></tr>
<tr><td>整數64</td><td>64 位元整數（新 R5）</td><td><code>9223372036854775807</code></td></tr>
<tr><td>字串.字串</td><td>Unicode 字串（≤ 1MB）</td><td><code>“阮文A”</code></td></tr>
<tr><td>小數</td><td>實數（任意精度）</td><td><code>3.14159</code></td></tr>
<tr><td>烏裡</td><td>URI（RFC 3986）</td><td><code>」http://loinc.org」</code></td></tr>
<tr><td>網址</td><td>網址</td><td><code>」https://fhir.example.com」</code></td></tr>
<tr><td>規範的</td><td>一致性資源的 URL</td><td><code>」http://hl7.org/fhir/StructureDefinition/Patient」</code></td></tr>
<tr><td>uuid</td><td>UUID（RFC 4122）</td><td><code>“甕：uuid：c757873d-ec9a-4326-a141-556f43239520”</code></td></tr>
<tr><td>編號</td><td>資源 ID（1-64 個字符，[A-Za-z0-9\-.]）</td><td><code>“病人-001”</code></td></tr>
<tr><td>日期。日期</td><td>日期（年、年-月、年-月-日）</td><td><code>“2025-01-15”</code></td></tr>
<tr><td>日期時間</td><td>帶時區的日期和時間</td><td><code>“2025-01-15T10:30:00+07:00”</code></td></tr>
<tr><td>瞬間。即時</td><td>確切時間 (xs:日期時間)</td><td><code>“2025-01-15T10:30:00.000Z”</code></td></tr>
<tr><td>時間。時間</td><td>一天中的幾個小時</td><td><code>“10:30:00”</code></td></tr>
<tr><td>程式碼</td><td>來自 ValueSet 的值</td><td><code>“男”</code></td></tr>
<tr><td>奧德</td><td>組織識別碼（ISO）</td><td><code>“甕：oid：2.16.840.1.113883.6.1”</code></td></tr>
<tr><td>降價</td><td>降價文本</td><td><code>“**粗體**和*斜體*”</code></td></tr>
<tr><td>base64二進位</td><td>Base64 編碼</td><td>二進位數據</td></tr>
<tr><td>正整數</td><td>整數 > 0</td><td><code>1</code></td></tr>
<tr><td>無符號整數</td><td>整數≥0</td><td><code>0</code></td></tr>
</tbody>
</table>

<h3 id="primitive-extensions"><strong>原語的擴展</strong></h3>

<p>甚至原語也可以攜帶延伸（使用底線約定）：</p>

<pre><code class="language-json">{
  "birthDate": "1990-05-15",
  "_birthDate": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
        "valueDateTime": "1990-05-15T14:30:00+07:00"
      }
    ]
  }
}
</code></pre>

<h2 id="2-complex-types"><strong>2. 複雜型別－通用</strong></h2>

<h3 id="identifier"><strong>識別符</strong></h3>

<pre><code class="language-json">{
  "use": "official",
  "type": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code": "NI",
        "display": "National unique individual identifier"
      }
    ],
    "text": "CCCD"
  },
  "system": "http://cccd.gov.vn",
  "value": "012345678901",
  "period": {
    "start": "2021-01-01",
    "end": "2036-01-01"
  },
  "assigner": {
    "display": "Bộ Công an"
  }
}
</code></pre>

<h3 id="humanname"><strong>人名</strong></h3>

<pre><code class="language-json">{
  "use": "official",
  "text": "Nguyễn Văn A",
  "family": "Nguyễn",
  "given": ["Văn", "A"],
  "prefix": ["BS."],
  "suffix": ["ThS."],
  "period": {
    "start": "1990-05-15"
  }
}
</code></pre>

<h3 id="address"><strong>地址</strong></h3>

<pre><code class="language-json">{
  "use": "home",
  "type": "physical",
  "text": "123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM",
  "line": ["123 Đường Lê Lợi"],
  "city": "Hồ Chí Minh",
  "district": "Quận 1",
  "state": "TP.HCM",
  "postalCode": "700000",
  "country": "VN"
}
</code></pre>

<h3 id="contactpoint"><strong>聯絡點</strong></h3>

<pre><code class="language-json">[
  {
    "system": "phone",
    "value": "+84901234567",
    "use": "mobile",
    "rank": 1
  },
  {
    "system": "email",
    "value": "nguyen.van.a@email.com",
    "use": "home"
  }
]
</code></pre>

<h3 id="coding-codeableconcept"><strong>編碼與可編碼概念</strong></h3>

<pre><code class="language-json">// Coding — một mã duy nhất
{
  "system": "http://loinc.org",
  "version": "2.77",
  "code": "8480-6",
  "display": "Systolic blood pressure"
}

// CodeableConcept — nhiều Codings + text
{
  "coding": [
    {
      "system": "http://hl7.org/fhir/sid/icd-10",
      "code": "I10",
      "display": "Essential (primary) hypertension"
    },
    {
      "system": "http://snomed.info/sct",
      "code": "38341003",
      "display": "Hypertensive disorder"
    }
  ],
  "text": "Tăng huyết áp nguyên phát"
}
</code></pre>

<p><strong>可編碼概念</strong> 允許在不同的程式碼系統中表示相同的概念—支援互通性。</p>

<h3 id="quantity"><strong>數量</strong></h3>

<pre><code class="language-json">{
  "value": 145,
  "comparator": "&gt;=",
  "unit": "mmHg",
  "system": "http://unitsofmeasure.org",
  "code": "mm[Hg]"
}
</code></pre>

<h3 id="period-timing"><strong>期間和時間</strong></h3>

<pre><code class="language-json">// Period
{
  "start": "2025-01-15T08:00:00+07:00",
  "end": "2025-01-15T08:45:00+07:00"
}

// Timing (cho medication dosage)
{
  "repeat": {
    "frequency": 2,
    "period": 1,
    "periodUnit": "d",
    "when": ["ACM", "ACV"],
    "boundsPeriod": {
      "start": "2025-01-15",
      "end": "2025-02-15"
    }
  },
  "code": {
    "text": "Ngày 2 lần, sáng và tối sau ăn"
  }
}
</code></pre>

<h3 id="reference"><strong>參考</strong></h3>

<pre><code class="language-json">{
  "reference": "Patient/patient-001",
  "type": "Patient",
  "identifier": {
    "system": "http://hospital.vn/mrn",
    "value": "MRN12345"
  },
  "display": "Nguyễn Văn A"
}
</code></pre>

<p>參考資料可能包含 <code>參考。參考</code> （文字 URL）， <code>識別符</code> （邏輯參考），或兩者兼具。</p>

<h2 id="3-narrative"><strong>3. 敘述（人類可讀）</strong></h2>

<pre><code class="language-json">{
  "text": {
    "status": "generated",
    "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;p&gt;Bệnh nhân: Nguyễn Văn A, Nam, sinh ngày 15/05/1990&lt;/p&gt;&lt;/div&gt;"
  }
}
</code></pre>

<table>
<thead>
<tr><th>狀態</th><th>描述</th></tr>
</thead>
<tbody>
<tr><td>產生的</td><td>根據結構化資料自動創建</td></tr>
<tr><td>擴充</td><td>來自擴展的資訊不在結構化資料中</td></tr>
<tr><td>額外的。額外的</td><td>還有一些未包含在結構化資料中的附加信息</td></tr>
<tr><td>空的</td><td>沒有文字（空洞的敘述）</td></tr>
</tbody>
</table>

<h2 id="4-backbone-element"><strong>4. 骨幹元素</strong></h2>

<p>BackboneElement 是一個複雜類型 <strong>只存在於資源內部</strong> 父親，不能在其他地方重複使用。例如： <code>患者聯絡方式</code>, <code>遭遇參與者</code>, <code>遭遇診斷</code>。</p>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "contact": [
    {
      "relationship": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
              "code": "N",
              "display": "Next-of-Kin"
            }
          ]
        }
      ],
      "name": {
        "text": "Nguyễn Thị B (vợ)"
      },
      "telecom": [
        {
          "system": "phone",
          "value": "+84907654321"
        }
      ]
    }
  ]
}
</code></pre>

<h2 id="5-choice-types"><strong>5. 選擇類型 [x]</strong></h2>

<p>有些元素允許多種資料類型—等於符號 <code>[x]</code>：</p>

<table>
<thead>
<tr><th>元素定義</th><th>實際使用</th></tr>
</thead>
<tbody>
<tr><td>值[x]</td><td>valueQuantity、valueString、valueCodeableConcept、valueBoolean、...</td></tr>
<tr><td>開始[x]</td><td>onsetDateTime、onsetAge、onsetPeriod、onsetRange、onsetString</td></tr>
<tr><td>有效[x]</td><td>effectiveDateTime、 effectivePeriod、 effectiveInstant、 effectiveTiming</td></tr>
<tr><td>已故[x]</td><td>已故布林值、已故日期時間</td></tr>
<tr><td>多胞胎[x]</td><td>multipleBirth布林值，multipleBirth整數</td></tr>
</tbody>
</table>

<pre><code class="language-json">// Observation value dạng Quantity
{"valueQuantity": {"value": 37.2, "unit": "°C"}}

// Observation value dạng CodeableConcept
{"valueCodeableConcept": {"coding": [{"code": "positive"}]}}

// Observation value dạng string
{"valueString": "Bình thường"}
</code></pre>

<h2 id="6-tong-ket"><strong>六、總結</strong></h2>

<ul>
<li><p><strong>原始型</strong> — 20 多種基本類型（字串、日期、代碼、uri...），支援擴展</p></li>
<li><p><strong>複雜類型</strong> — 人名、地址、識別碼、CodeableConcept、數量、參考...</p></li>
<li><p><strong>可編碼概念</strong> — 最重要的是，允許多重編碼以實現互通性</p></li>
<li><p><strong>敘事</strong> — 所有領域資源中人類可讀的 XHTML</p></li>
<li><p><strong>骨幹元素</strong> — 複雜型內部資源</p></li>
<li><p><strong>選擇類型 [x]</strong> — 靈活選擇合適的資料類型</p></li>
</ul>
