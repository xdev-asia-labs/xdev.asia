---
id: 019e0a10-a403-7001-d001-f1a7f8000403
title: 'レッスン 13: プロファイル、拡張機能、および実装ガイド'
slug: bai-13-profiles-extensions-va-implementation-guides
description: >-
  StructureDefinition で、リソース、拡張機能 (単純、複合、修飾子)、スライス、不変条件 (FHIRPath 制約)
  をバインドするプロファイルを作成します。 Implementation Guide (IG)、IG Publisher、例としての US Core
  Profile、International Patient Summary (IPS)。 FHIR 略記法 (FSH)。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 4: データ型、用語、プロファイル'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ アーキテクチャ — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: プロファイル、拡張機能、および</tspan>
      <tspan x="60" dy="42">実装ガイド</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: データ型、用語、プロファイル</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-profiles"><strong>1. プロファイル — バインディング リソース</strong></h2>

<p>1 つ <strong>プロフィール</strong> (StructureDefinition) は、基本 FHIR リソースに制約を追加します。つまり、必須の要素、制限された基数、バインディング用語、追加された拡張機能です。</p>

<h3 id="fsh-profile"><strong>FHIR 短縮表記 (FSH) を使用したプロファイルの例</strong></h3>

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

<h3 id="structuredefinition"><strong>構造定義(JSON)</strong></h3>

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

<h2 id="2-extensions"><strong>2. 拡張機能</strong></h2>

<p>拡張機能を使用すると、ベースの FHIR リソースにないデータを追加できます。これがメカニズムです。 <strong>拡張性</strong> コア。</p>

<h3 id="simple-extension"><strong>単純な拡張</strong></h3>

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

<h3 id="complex-extension"><strong>複雑な拡張機能</strong></h3>

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

<h3 id="modifier-extension"><strong>モディファイア拡張子</strong></h3>

<p>修飾子拡張子 <strong>意味を変える</strong> それを含む要素の — 受信者はこの拡張を理解する必要があります。</p>

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

<h2 id="3-slicing"><strong>3. スライス</strong></h2>

<p>スライスでは、繰り返し要素 (カーディナリティ 0..*) が、異なる制約を持つ個別の「スライス」に分割されます。</p>

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
<tr><th>識別子の種類</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>値。値</td><td>特定の値によって区別される</td></tr>
<tr><td>パターン。パターン</td><td>パターンマッチングを使って区別する</td></tr>
<tr><td>タイプ</td><td>タイプによる差別化（タイプの選択）</td></tr>
<tr><td>プロフィール。プロフィール</td><td>プロフィールで区別する</td></tr>
<tr><td>存在します</td><td>存在によって区別される</td></tr>
</tbody>
</table>

<h2 id="4-invariants"><strong>4. 不変条件 (FHIRPath 制約)</strong></h2>

<pre><code class="language-fsh">Invariant: vn-patient-1
Description: "Phải có ít nhất CCCD hoặc BHYT"
Expression: "identifier.where(system='http://cccd.gov.vn').exists() or identifier.where(system='http://bhxh.gov.vn/bhyt').exists()"
Severity: #error

Invariant: vn-patient-2
Description: "Nếu có CCCD thì phải có 12 chữ số"
Expression: "identifier.where(system='http://cccd.gov.vn').value.matches('^[0-9]{12}$')"
Severity: #error
</code></pre>

<h2 id="5-implementation-guide"><strong>5. 実装ガイド (IG)</strong></h2>

<p>IG は、プロファイル、拡張機能、ValueSet、CodeSystem、サンプル、説明ドキュメントなどの完全なパッケージです。</p>

<h3 id="ig-structure"><strong>IGプロジェクトの構造</strong></h3>

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

<h3 id="sushi-config"><strong>寿司設定.yaml</strong></h3>

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

<h3 id="build-ig"><strong>ビルドIG</strong></h3>

<pre><code class="language-bash"># Install SUSHI
npm install -g fsh-sushi

# Compile FSH → FHIR JSON
sushi .

# Run IG Publisher
./_genonce.sh
# Output: output/ directory with HTML pages
</code></pre>

<h2 id="6-us-core-ips"><strong>6. 参考としての US Core と IPS</strong></h2>

<table>
<thead>
<tr><th>IG</th><th>説明</th><th>プロフィール</th></tr>
</thead>
<tbody>
<tr><td>米国コア</td><td>米国、21世紀の治療法で必須</td><td>患者、出会い、状態、観察、投薬、...</td></tr>
<tr><td>IPS</td><td>国際患者概要、ISO 27269</td><td>患者、薬、アレルギー、問題、予防接種など...</td></tr>
<tr><td>AUベース</td><td>オーストラリア</td><td>オーストラリアの患者、オーストラリアの医師、...</td></tr>
</tbody>
</table>

<h2 id="7-tong-ket"><strong>7. まとめ</strong></h2>

<ul>
<li><p><strong>プロフィール</strong> — リソース バインディング (必須要素、バインディング、カーディナリティ)</p></li>
<li><p><strong>延長</strong> — ベースにないデータを追加します (単純、複合、修飾子)</p></li>
<li><p><strong>スライス</strong> — 個別の制約を使用して繰り返し要素をスライスに分割します。</p></li>
<li><p><strong>不変条件</strong> — FHIRPath を使用したビジネス ルール</p></li>
<li><p><strong>FSH + 寿司</strong> — 簡潔なプロファイル/拡張機能を記述するための DSL 言語</p></li>
<li><p><strong>IGパブリッシャー</strong> — FSH/JSON から Web サイトのドキュメントを構築する</p></li>
</ul>
