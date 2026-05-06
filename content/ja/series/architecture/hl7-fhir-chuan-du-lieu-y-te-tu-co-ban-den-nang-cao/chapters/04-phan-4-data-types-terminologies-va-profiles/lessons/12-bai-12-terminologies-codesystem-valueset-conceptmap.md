---
id: 019e0a10-a402-7001-d001-f1a7f8000402
title: 'レッスン 12: 用語 - コードシステム、バリューセット、コンセプトマップ'
slug: bai-12-terminologies-codesystem-valueset-conceptmap
description: >-
  医療用語システム: ICD-10 (診断)、SNOMED CT (臨床)、LOINC (検査室)、RxNorm (薬剤)、CPT (処置)、ATC
  (薬剤分類)。 FHIR のコードシステム、バリューセット、コンセプトマップ。用語のバインディング (必須、拡張可能、推奨など)。
  $validate-code、$expand、$lookup。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 4: データ型、用語、プロファイル'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ アーキテクチャ — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: 用語 - コードシステム、</tspan>
      <tspan x="60" dy="42">バリューセット、コンセプトマップ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: データ型、用語、プロファイル</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-he-thong-thuat-ngu-y-te"><strong>1. 主な医学用語体系</strong></h2>

<table>
<thead>
<tr><th>システム</th><th>整理する</th><th>目的</th><th>FHIR システム URI</th></tr>
</thead>
<tbody>
<tr><td>ICD-10</td><td>誰が</td><td>病気の分類と死因</td><td>http://hl7.org/fhir/sid/icd-10</td></tr>
<tr><td>SNOMED CT</td><td>SNOMED国際空港</td><td>包括的な臨床用語</td><td>http://snomed.info/sct</td></tr>
<tr><td>ロインク</td><td>レゲンストリーフ</td><td>臨床検査と臨床観察</td><td>http://loinc.org</td></tr>
<tr><td>RxNorm</td><td>NLM</td><td>標準化された医薬品名（米国）</td><td>http://www.nlm.nih.gov/research/umls/rxnorm</td></tr>
<tr><td>ATC</td><td>誰が</td><td>医薬品のグループ分類（国際）</td><td>http://www.whocc.no/atc</td></tr>
<tr><td>CPT</td><td>アマ</td><td>医療処置・サービスコード</td><td>http://www.ama-assn.org/go/cpt</td></tr>
<tr><td>CVX</td><td>CDC</td><td>ワクチンコード</td><td>http://hl7.org/fhir/sid/cvx</td></tr>
<tr><td>UCUM</td><td>レゲンストリーフ</td><td>測定単位</td><td>http://unitsofmeasure.org</td></tr>
</tbody>
</table>

<h3 id="icd-10"><strong>ICD-10 — 疾病の国際分類</strong></h3>

<p>用途 <code>条件.コード</code>、 <code>出会い・診断</code>。ベトナムは公式の ICD-10 (WHO) を使用しています。</p>

<pre><code class="language-json">{
  "system": "http://hl7.org/fhir/sid/icd-10",
  "code": "E11.9",
  "display": "Type 2 diabetes mellitus without complications"
}
</code></pre>

<h3 id="snomed-ct"><strong>SNOMED CT — 体系化された医学命名法</strong></h3>

<p>最も包括的な用語システム、350,000 以上の概念、階層関係 (オントロジー)。</p>

<pre><code class="language-json">{
  "system": "http://snomed.info/sct",
  "code": "73211009",
  "display": "Diabetes mellitus"
}
</code></pre>

<h3 id="loinc"><strong>LOINC — 論理観測識別子の名前とコード</strong></h3>

<p>検査および臨床観察用の 97,000 以上のコード。用途 <code>観察.コード</code>、 <code>DiagnosticReport.code</code>。</p>

<pre><code class="language-json">{
  "system": "http://loinc.org",
  "code": "4548-4",
  "display": "Hemoglobin A1c/Hemoglobin.total in Blood"
}
</code></pre>

<h2 id="2-codesystem"><strong>2. コードシステムリソース</strong></h2>

<p><strong>コードシステム</strong> 一連の概念 (コード) を定義します。国際システムまたはカスタム システムにすることができます。</p>

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

<h2 id="3-valueset"><strong>3. 値セットリソース</strong></h2>

<p><strong>値セット</strong> 1 つ以上の CodeSystem からサブセットを選択します。</p>

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

<h3 id="valueset-filter"><strong>フィルター付きの値セット</strong></h3>

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

<h2 id="4-conceptmap"><strong>4. ConceptMap — コードシステム間のマッピング</strong></h2>

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

<h3 id="relationship-types"><strong>関係の種類</strong></h3>

<table>
<thead>
<tr><th>関係性</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>同等の</td><td>完全に同等</td></tr>
<tr><td>ソースがターゲットより狭い</td><td>ソースがターゲットより狭い</td></tr>
<tr><td>ソースがターゲットよりも広い</td><td>ソースがターゲットよりも広い</td></tr>
<tr><td>無関係</td><td>関連しない</td></tr>
</tbody>
</table>

<h2 id="5-terminology-binding"><strong>5. 用語の拘束</strong></h2>

<p>バインディングは、ValueSet のコードを使用するためにどの要素が必須であるかを指定します。</p>

<table>
<thead>
<tr><th>強さ</th><th>説明</th><th>たとえば</th></tr>
</thead>
<tbody>
<tr><td>必須です。必須</td><td>ValueSet のコードを使用する必要があります</td><td>患者の性別</td></tr>
<tr><td>拡張可能な</td><td>使用すべきです。見つからない場合は別のコードを使用できます</td><td>条件.コード</td></tr>
<tr><td>好ましい</td><td>推奨されます。他のコードも使用可能</td><td>出会いの種類</td></tr>
<tr><td>例</td><td>単なる例です。任意の ValueSet を使用できます</td><td>観察.コード</td></tr>
</tbody>
</table>

<h2 id="6-terminology-operations"><strong>6. 用語サービス業務</strong></h2>

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

<h2 id="7-tong-ket"><strong>7. まとめ</strong></h2>

<ul>
<li><p><strong>コードシステム</strong> — コードセットの定義 (ICD-10、SNOMED CT、LOINC、またはカスタム)</p></li>
<li><p><strong>値セット</strong> — CodeSystems からバインドに使用されるサブセットを選択します</p></li>
<li><p><strong>コンセプトマップ</strong> — コードシステム間のマッピング (ICD-10 ↔ SNOMED CT)</p></li>
<li><p><strong>結合強度</strong> — 必須 > 拡張可能 > 優先 > 例</p></li>
<li><p><strong>用語の操作</strong> — $validate-code、$expand、$lookup、$translate</p></li>
</ul>
