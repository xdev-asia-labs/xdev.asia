---
id: 019e0a10-a401-7001-d001-f1a7f8000401
title: 'レッスン 11: FHIR データ型 - プリミティブ、複雑、特殊'
slug: bai-11-fhir-data-types-primitive-complex-va-special
description: >-
  プリミティブ型 (ブール、文字列、uri、日付、dateTime、インスタント、十進数、整数)、複合型
  (HumanName、住所、連絡先、識別子、CodeableConcept、コーディング、数量、期間、参照、物語)、BackboneElement、Element。データ型の拡張。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'パート 4: データ型、用語、プロファイル'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ アーキテクチャ — レッスン 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 11: FHIR データ型 - プリミティブ、</tspan>
      <tspan x="60" dy="42">複雑かつ特殊</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: データ型、用語、プロファイル</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-primitive-types"><strong>1. プリミティブ型</strong></h2>

<p>プリミティブ型は、FHIR における単純な「アトミック」値です。</p>

<table>
<thead>
<tr><th>種類</th><th>説明</th><th>たとえば</th></tr>
</thead>
<tbody>
<tr><td>ブール値</td><td>真/偽</td><td><code>本当の</code></td></tr>
<tr><td>整数</td><td>32ビット整数</td><td><code>42</code></td></tr>
<tr><td>整数64</td><td>64 ビット整数 (新しい R5)</td><td><code>9223372036854775807</code></td></tr>
<tr><td>文字列.文字列</td><td>Unicode 文字列 (≤ 1MB)</td><td><code>「グエン・ヴァン・A」</code></td></tr>
<tr><td>10進数</td><td>実数（任意精度）</td><td><code>3.14159</code></td></tr>
<tr><td>ウリ</td><td>URI (RFC 3986)</td><td><code>」http://loinc.org」</code></td></tr>
<tr><td>URL</td><td>URL</td><td><code>」https://fhir.example.com」</code></td></tr>
<tr><td>正規の</td><td>適合リソースへの URL</td><td><code>」http://hl7.org/fhir/StructureDefinition/Patient」</code></td></tr>
<tr><td>uuid</td><td>UUID (RFC 4122)</td><td><code>「urn:uuid:c757873d-ec9a-4326-a141-556f43239520」</code></td></tr>
<tr><td>ID</td><td>リソース ID (1 ～ 64 文字、[A-Za-z0-9\-.])</td><td><code>「患者-001」</code></td></tr>
<tr><td>日付。日付</td><td>日付 (YYYY、YYYY-MM、YYYY-MM-DD)</td><td><code>「2025-01-15」</code></td></tr>
<tr><td>日付時刻</td><td>タイムゾーン付きの日付と時刻</td><td><code>「2025-01-15T10:30:00+07:00」</code></td></tr>
<tr><td>インスタント。インスタント</td><td>正確な時刻 (xs:dateTime)</td><td><code>「2025-01-15T10:30:00.000Z」</code></td></tr>
<tr><td>時間。時間</td><td>時間帯</td><td><code>「10時30分00秒」</code></td></tr>
<tr><td>コード</td><td>ValueSet からの値</td><td><code>「男性」</code></td></tr>
<tr><td>オイド</td><td>OID (ISO)</td><td><code>「urn:oid:2.16.840.1.113883.6.1」</code></td></tr>
<tr><td>値下げ</td><td>マークダウンテキスト</td><td><code>「**太字**と*斜体*」</code></td></tr>
<tr><td>Base64バイナリ</td><td>Base64エンコード</td><td>バイナリデータ</td></tr>
<tr><td>正の整数</td><td>整数 > 0</td><td><code>1</code></td></tr>
<tr><td>unsignedInt</td><td>整数 ≥ 0</td><td><code>0</code></td></tr>
</tbody>
</table>

<h3 id="primitive-extensions"><strong>プリミティブの拡張機能</strong></h3>

<p>プリミティブでも拡張子を付けることができます (アンダースコア規則を使用)。</p>

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

<h2 id="2-complex-types"><strong>2. 複合型 — 汎用</strong></h2>

<h3 id="identifier"><strong>識別子</strong></h3>

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

<h3 id="humanname"><strong>人間の名前</strong></h3>

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

<h3 id="address"><strong>住所</strong></h3>

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

<h3 id="contactpoint"><strong>連絡先</strong></h3>

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

<h3 id="coding-codeableconcept"><strong>コーディングとコーディング可能なコンセプト</strong></h3>

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

<p><strong>コード可能なコンセプト</strong> 異なるコードシステムで同じ概念を表現できるようになり、相互運用性がサポートされます。</p>

<h3 id="quantity"><strong>数量</strong></h3>

<pre><code class="language-json">{
  "value": 145,
  "comparator": "&gt;=",
  "unit": "mmHg",
  "system": "http://unitsofmeasure.org",
  "code": "mm[Hg]"
}
</code></pre>

<h3 id="period-timing"><strong>期間とタイミング</strong></h3>

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

<h3 id="reference"><strong>参考資料</strong></h3>

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

<p>参照には以下が含まれる可能性があります <code>参考。参照</code> (リテラル URL)、 <code>識別子</code> (論理参照)、またはその両方。</p>

<h2 id="3-narrative"><strong>3. 物語 (人間が読める)</strong></h2>

<pre><code class="language-json">{
  "text": {
    "status": "generated",
    "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;p&gt;Bệnh nhân: Nguyễn Văn A, Nam, sinh ngày 15/05/1990&lt;/p&gt;&lt;/div&gt;"
  }
}
</code></pre>

<table>
<thead>
<tr><th>ステータス</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>生成された</td><td>構造化データから自動作成</td></tr>
<tr><td>拡張子</td><td>構造化データにない拡張機能からの情報があります</td></tr>
<tr><td>追加。追加の</td><td>構造化データに含まれていない追加情報がある</td></tr>
<tr><td>空の</td><td>テキストなし (空の物語)</td></tr>
</tbody>
</table>

<h2 id="4-backbone-element"><strong>4.バックボーン要素</strong></h2>

<p>BackboneElement は複合型です <strong>リソース内にのみ存在します</strong> お父さん、他の場所で再利用することはできません。たとえば: <code>患者連絡先</code>、 <code>出会い・参加者</code>、 <code>出会い・診断</code>。</p>

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

<h2 id="5-choice-types"><strong>5. 選択肢の種類 [x]</strong></h2>

<p>一部の要素では複数のデータ型が許可されます - イコール記号 <code>[×]</code>:</p>

<table>
<thead>
<tr><th>要素の定義</th><th>実用化</th></tr>
</thead>
<tbody>
<tr><td>値[x]</td><td>valueQuantity、valueString、valueCodeableConcept、valueBoolean、...</td></tr>
<tr><td>発症[x]</td><td>onsetDateTime、onsetAge、onsetPeriod、onsetRange、onsetString</td></tr>
<tr><td>有効[x]</td><td>有効な日付時刻、有効な期間、有効なインスタント、有効なタイミング</td></tr>
<tr><td>故人[x]</td><td>死亡ブール値、死亡日時</td></tr>
<tr><td>複数の誕生[x]</td><td>multipleBirthBoolean、multipleBirthInteger</td></tr>
</tbody>
</table>

<pre><code class="language-json">// Observation value dạng Quantity
{"valueQuantity": {"value": 37.2, "unit": "°C"}}

// Observation value dạng CodeableConcept
{"valueCodeableConcept": {"coding": [{"code": "positive"}]}}

// Observation value dạng string
{"valueString": "Bình thường"}
</code></pre>

<h2 id="6-tong-ket"><strong>6. まとめ</strong></h2>

<ul>
<li><p><strong>プリミティブ型</strong> — 20 以上の基本タイプ (文字列、日付、コード、URI など)、拡張機能をサポート</p></li>
<li><p><strong>複合型</strong> — HumanName、住所、識別子、CodeableConcept、数量、参照など</p></li>
<li><p><strong>コード可能なコンセプト</strong> — 最も重要なのは、相互運用性のためにマルチコーディングを許可することです</p></li>
<li><p><strong>物語</strong> — すべての DomainResources 内の人間が判読できる XHTML</p></li>
<li><p><strong>バックボーン要素</strong> — 複合型内部リソース</p></li>
<li><p><strong>選択肢の種類 [x]</strong> — 適切なデータ型を柔軟に選択</p></li>
</ul>
