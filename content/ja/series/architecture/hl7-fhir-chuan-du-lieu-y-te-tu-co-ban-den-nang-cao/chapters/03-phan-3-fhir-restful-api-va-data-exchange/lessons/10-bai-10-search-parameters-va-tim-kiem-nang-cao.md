---
id: 019e0a10-a303-7001-d001-f1a7f8000303
title: 'レッスン 10: 検索パラメータと高度な検索'
slug: bai-10-search-parameters-va-tim-kiem-nang-cao
description: >-
  検索パラメーターのタイプ (文字列、トークン、参照、日付、数値、数量、uri)、修飾子
  (:exact、:contains、:missing、:not)、連鎖、逆連鎖
  (_has)、_include、_revinclude、_summary、_elements、_count、ページング、複合検索パラメーター、カスタム
  SearchParameter。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: 'パート 3: FHIR RESTful API とデータ交換'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1152" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1152)"/>

  <!-- Decorations -->
  <g>
    <circle cx="779" cy="87" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="958" cy="106" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="637" cy="125" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="816" cy="144" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="995" cy="163" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="217" x2="1100" y2="297" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="247" x2="1050" y2="317" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1044.712812921102,201 1044.712812921102,233 1017,249 989.287187078898,233 989.287187078898,201 1017,185" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ アーキテクチャ — レッスン 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 10: 検索パラメータと高度な検索</tspan>
      <tspan x="60" dy="42">高い</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: FHIR RESTful API とデータ交換</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-search-parameter-types"><strong>1. 検索パラメータの種類</strong></h2>

<table>
<thead>
<tr><th>種類</th><th>説明</th><th>たとえば</th></tr>
</thead>
<tbody>
<tr><td>文字列.文字列</td><td>テキストを検索する</td><td>患者?名前=グエン</td></tr>
<tr><td>トークン</td><td>コード/識別子</td><td>患者?性別=男性</td></tr>
<tr><td>参考。参照</td><td>別のリソースへの参照</td><td>観察?被験者=患者/123</td></tr>
<tr><td>日付。日付</td><td>日付</td><td>患者?生年月日=1990-05-15</td></tr>
<tr><td>番号。番号</td><td>いいえ</td><td>リスク評価?確率=gt0.8</td></tr>
<tr><td>量。量</td><td>数値+単位</td><td>観察?値-量=gt5.4|http://unitsofmeasure.org|mg</td></tr>
<tr><td>ウリ</td><td>URI</td><td>値セット?url=http://hl7.org/fhir/ValueSet/example</td></tr>
<tr><td>複合材</td><td>複数のパラメータを結合する</td><td>観測?コード値数量=...</td></tr>
<tr><td>特別な</td><td>特に</td><td>位置?近く=42.2|-71.0|10|km</td></tr>
</tbody>
</table>

<h2 id="2-string-search"><strong>2. 文字列検索</strong></h2>

<pre><code class="language-http"># Default: starts-with, case-insensitive
GET /Patient?name=Nguyen

# Exact match
GET /Patient?name:exact=Nguyễn

# Contains
GET /Patient?name:contains=van

# Text (full-text search trên narrative)
GET /Patient?_text=hypertension
</code></pre>

<h2 id="3-token-search"><strong>3. トークンの検索</strong></h2>

<pre><code class="language-http"># Chỉ code
GET /Patient?gender=male

# System + code
GET /Condition?code=http://hl7.org/fhir/sid/icd-10|I10

# Chỉ system (tìm tất cả codes trong system)
GET /Condition?code=http://snomed.info/sct|

# Identifier
GET /Patient?identifier=http://hospital.vn/mrn|MRN12345

# :not modifier
GET /Patient?gender:not=male

# :text modifier (tìm trên display text)
GET /Condition?code:text=hypertension
</code></pre>

<h2 id="4-date-search"><strong>4. 日付検索</strong></h2>

<pre><code class="language-http"># Exact date
GET /Patient?birthdate=1990-05-15

# Prefixes: eq, ne, gt, lt, ge, le, sa (starts after), eb (ends before)
GET /Patient?birthdate=gt1990-01-01
GET /Encounter?date=ge2025-01-01&date=le2025-01-31
GET /Observation?date=sa2025-01-01T00:00:00Z

# Precision matters
GET /Patient?birthdate=1990      # born in 1990
GET /Patient?birthdate=1990-05   # born in May 1990
</code></pre>

<h2 id="5-reference-search"><strong>5. 文献検索</strong></h2>

<pre><code class="language-http"># Relative reference
GET /Observation?subject=Patient/patient-001

# Chỉ ID (nếu type rõ ràng)
GET /Observation?subject=patient-001

# Absolute reference
GET /Observation?subject=https://fhir-server.example.com/fhir/r5/Patient/patient-001

# Identifier trên referenced resource
GET /Observation?subject:identifier=http://hospital.vn/mrn|MRN12345
</code></pre>

<h2 id="6-chaining"><strong>6. 連鎖 — 参考文献を検索する</strong></h2>

<pre><code class="language-http"># Tìm Observation của Patient có tên "Nguyen"
GET /Observation?subject:Patient.name=Nguyen

# Chain sâu hơn
GET /Observation?subject:Patient.organization.name=Bach%20Mai

# Tìm MedicationRequest kê bởi Practitioner chuyên khoa Tim mạch
GET /MedicationRequest?requester:Practitioner.qualification=cardiology
</code></pre>

<h2 id="7-reverse-chaining"><strong>7. リバースチェーン (_has)</strong></h2>

<pre><code class="language-http"># Tìm Patient có Observation với code=hba1c và value>7
GET /Patient?_has:Observation:subject:code=4548-4&_has:Observation:subject:value-quantity=gt7

# Tìm Patient có Condition "hypertension" active
GET /Patient?_has:Condition:subject:code=I10&_has:Condition:subject:clinical-status=active

# Tìm Practitioner có ít nhất 1 Encounter
GET /Practitioner?_has:Encounter:participant:date=ge2025-01-01
</code></pre>

<h2 id="8-include-revinclude"><strong>8. _include と _revinclude</strong></h2>

<pre><code class="language-http"># _include: kéo theo referenced resources
# Tìm Encounter VÀ Patient của Encounter đó
GET /Encounter?date=ge2025-01-15&_include=Encounter:subject

# Multiple includes
GET /MedicationRequest?status=active
  &_include=MedicationRequest:subject
  &_include=MedicationRequest:requester
  &_include=MedicationRequest:medication

# _revinclude: kéo theo resources reference ngược lại
# Tìm Patient VÀ tất cả Observation, Condition reference đến Patient
GET /Patient?_id=patient-001
  &_revinclude=Observation:subject
  &_revinclude=Condition:subject

# :iterate — recursive include
GET /MedicationRequest?_include:iterate=MedicationRequest:medication
</code></pre>

<h2 id="9-result-parameters"><strong>9. 結果パラメータ</strong></h2>

<pre><code class="language-http"># _count — số entry per page
GET /Patient?name=Nguyen&_count=20

# _sort — sắp xếp
GET /Observation?subject=Patient/patient-001&_sort=-date  # descending
GET /Patient?_sort=family,given                            # multi-sort

# _summary — trả về tóm tắt
GET /Patient?_summary=true      # chỉ `mandatory` elements
GET /Patient?_summary=count     # chỉ count, không trả resources
GET /Patient?_summary=text      # text + id + meta + mandatory

# _elements — chọn elements cụ thể
GET /Patient?_elements=name,birthDate,gender,identifier

# _total — kiểm soát tính total
GET /Patient?_total=accurate    # tính chính xác total
GET /Patient?_total=none        # không tính total (nhanh hơn)
</code></pre>

<h2 id="10-paging"><strong>10. ページング</strong></h2>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 150,
  "link": [
    {"relation": "self",     "url": "...?_count=10&_offset=0"},
    {"relation": "first",    "url": "...?_count=10&_offset=0"},
    {"relation": "next",     "url": "...?_count=10&_offset=10"},
    {"relation": "last",     "url": "...?_count=10&_offset=140"}
  ]
}
</code></pre>

<p>クライアントはリンクをたどります <code>次に。次へ</code> 次のページを取得します。 <strong>独自の URL を作成しないでください</strong> — 常にサーバー応答からのリンクを使用します。</p>

<h2 id="11-custom-search-parameter"><strong>11. カスタム検索パラメータ</strong></h2>

<pre><code class="language-json">{
  "resourceType": "SearchParameter",
  "url": "http://hospital.vn/fhir/SearchParameter/patient-cccd",
  "name": "cccd",
  "status": "active",
  "description": "Tìm Patient theo số CCCD",
  "code": "cccd",
  "base": ["Patient"],
  "type": "token",
  "expression": "Patient.identifier.where(system='http://hospital.vn/cccd')"
}
</code></pre>

<pre><code class="language-http"># Sử dụng custom search parameter
GET /Patient?cccd=012345678901
</code></pre>

<h2 id="12-tong-ket"><strong>12. まとめ</strong></h2>

<ul>
<li><p><strong>9種類のパラメータ</strong> — 文字列、トークン、参照、日付、数値、数量、URI、複合、特殊</p></li>
<li><p><strong>修飾子</strong> — :exact、:contains、:missing、:not、:text、:identifier</p></li>
<li><p><strong>連鎖</strong> — チェーン参照の検索 (件名:Patient.name)</p></li>
<li><p><strong>_あります</strong> — 逆連鎖、他のリソースによって参照されているリソースの検索</p></li>
<li><p><strong>_include / _revinclude</strong> — 参照リソースを結果にドラッグします</p></li>
<li><p><strong>_summary、_elements、_sort、_count</strong> — 制御応答性</p></li>
</ul>
