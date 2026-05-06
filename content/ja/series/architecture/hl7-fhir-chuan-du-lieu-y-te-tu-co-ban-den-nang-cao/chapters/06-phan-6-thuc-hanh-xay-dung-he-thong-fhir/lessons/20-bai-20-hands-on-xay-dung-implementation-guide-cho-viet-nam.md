---
id: 019e0a10-a603-7001-d001-f1a7f8000603
title: 'レッスン 20: 実践 — ベトナム向けの実装ガイドの作成'
slug: bai-20-hands-on-xay-dung-implementation-guide-cho-viet-nam
description: >-
  VN-Core-Patient プロファイル (CCCD、健康保険)、FSH (FHIR 略記)、SUSHI コンパイラー、IG
  パブリッシャーを構築し、ベトナムの医療システム用のプロファイル、拡張機能、値セットを作成し、IG を公開および検証します。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 20
section_title: 'パート 6: 実践 - FHIR システムの構築'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4052" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4052)"/>

  <!-- Decorations -->
  <g>
    <circle cx="669" cy="137" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="738" cy="86" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="807" cy="35" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="876" cy="244" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="945" cy="193" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="187" x2="1100" y2="267" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="217" x2="1050" y2="287" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1073.3730669589463,216 1073.3730669589463,258 1037,279 1000.6269330410536,258 1000.6269330410536,216 1037,195" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ アーキテクチャ — レッスン 20</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 20: 実践 — 実装の構築</tspan>
      <tspan x="60" dy="42">ベトナムガイド</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 実践 - FHIR システムの構築</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-implementation-guide-la-gi"><strong>1. 導入ガイドとは何ですか?</strong></h2>

<p><strong>実装ガイド (IG)</strong> は、ルール、プロファイル、拡張機能、値セット、特定の使用例の例のコレクションです。ベトナムの IG は、ベトナムの基準に従って医療データを表現する方法を定義します。</p>

<table>
<thead>
<tr><th>IG成分</th><th>説明</th><th>たとえば、VN</th></tr>
</thead>
<tbody>
<tr><td>プロフィール</td><td>基本リソースのバインド</td><td>VN-Core-Patient (必須 CCCD)</td></tr>
<tr><td>拡張機能</td><td>データ要素を追加する</td><td>健康保険番号、ベトナム人の民族</td></tr>
<tr><td>値セット</td><td>有効なコードセット</td><td>ベトナムの民族リスト、ICD-10 ベトナム</td></tr>
<tr><td>コードシステム</td><td>コード体系</td><td>都道府県・市区町村コード、医療機関コード</td></tr>
<tr><td>例</td><td>サンプル例</td><td>CCCDおよび健康保険に加入しているサンプル患者</td></tr>
<tr><td>能力に関する声明</td><td>サーバー要件</td><td>最低限必要なサポートは何ですか?</td></tr>
</tbody>
</table>

<h2 id="2-fsh-fhir-shorthand"><strong>2. FSH — FHIR 略記法</strong></h2>

<p><strong>FSH</strong> は、JSON/XML よりも何倍も簡潔な FHIR プロファイルを作成するのに役立つドメイン固有の言語です。</p>

<pre><code class="language-bash"># Cài đặt SUSHI (FSH compiler)
npm install -g fsh-sushi

# Tạo IG project mới
sushi init
</code></pre>

<h3 id="project-structure"><strong>プロジェクトの構造</strong></h3>

<pre><code class="language-text">vn-core-ig/
├── sushi-config.yaml
├── input/
│   ├── fsh/
│   │   ├── profiles/
│   │   │   ├── VNCorePatient.fsh
│   │   │   ├── VNCoreOrganization.fsh
│   │   │   └── VNCoreEncounter.fsh
│   │   ├── extensions/
│   │   │   ├── BHYTExtension.fsh
│   │   │   └── EthnicityExtension.fsh
│   │   ├── valuesets/
│   │   │   ├── VNEthnicityVS.fsh
│   │   │   └── VNProvinceVS.fsh
│   │   ├── codesystems/
│   │   │   ├── VNEthnicityCS.fsh
│   │   │   └── VNProvinceCS.fsh
│   │   └── examples/
│   │       └── PatientExample.fsh
│   └── pagecontent/
│       └── index.md
└── ig.ini
</code></pre>

<h3 id="sushi-config"><strong>寿司設定.yaml</strong></h3>

<pre><code class="language-yaml">id: vn.core
canonical: http://fhir.vn/ImplementationGuide/vn-core
name: VNCoreIG
title: Vietnam Core Implementation Guide
status: draft
version: 0.1.0
fhirVersion: 5.0.0
copyrightYear: 2025+
releaseLabel: ci-build
publisher:
  name: Vietnam FHIR Community
  url: https://fhir.vn
jurisdiction: urn:iso:std:iso:3166#VN "Vietnam"
dependencies:
  hl7.fhir.r5.core: 5.0.0
</code></pre>

<h2 id="3-vn-core-patient-profile"><strong>3. VN-コア患者プロファイル</strong></h2>

<pre><code class="language-fsh">// input/fsh/profiles/VNCorePatient.fsh
Profile: VNCorePatient
Parent: Patient
Id: vn-core-patient
Title: "VN Core Patient"
Description: "Profile Patient cho hệ thống y tế Việt Nam"

// Bắt buộc có ít nhất 1 identifier (CCCD hoặc BHYT)
* identifier 1..* MS
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open

// Slice: CCCD
* identifier contains cccd 0..1 MS
* identifier[cccd].system = "http://fhir.vn/sid/cccd" (exactly)
* identifier[cccd].value 1..1
* identifier[cccd].value ^short = "Số Căn cước Công dân (12 số)"

// Slice: BHYT
* identifier contains bhyt 0..1 MS
* identifier[bhyt].system = "http://fhir.vn/sid/bhyt" (exactly)
* identifier[bhyt].value 1..1
* identifier[bhyt].value ^short = "Số thẻ Bảo hiểm Y tế"

// Họ tên bắt buộc
* name 1..* MS
* name.family 1..1 MS
* name.given 1..* MS
* name.text 1..1 MS

// Giới tính, ngày sinh bắt buộc
* gender 1..1 MS
* birthDate 1..1 MS

// Địa chỉ
* address MS
* address.city MS
* address.district MS
* address.state MS
* address.line MS

// Extensions
* extension contains
    VNEthnicityExtension named ethnicity 0..1 MS and
    VNBHYTExtension named bhytInfo 0..1 MS
</code></pre>

<h2 id="4-extensions"><strong>4. ベトナム向け拡張機能</strong></h2>

<h3 id="bhyt-extension"><strong>内線：健康保険情報</strong></h3>

<pre><code class="language-fsh">// input/fsh/extensions/BHYTExtension.fsh
Extension: VNBHYTExtension
Id: vn-bhyt-extension
Title: "VN BHYT Extension"
Description: "Thông tin bảo hiểm y tế Việt Nam"
Context: Patient

* extension contains
    soThe 1..1 MS and
    noiDangKy 1..1 MS and
    ngayHieuLuc 1..1 MS and
    ngayHetHan 0..1 MS and
    mucHuong 1..1 MS

* extension[soThe].value[x] only string
* extension[soThe] ^short = "Số thẻ BHYT (15 ký tự)"

* extension[noiDangKy].value[x] only Reference(Organization)
* extension[noiDangKy] ^short = "Nơi đăng ký KCB ban đầu"

* extension[ngayHieuLuc].value[x] only date
* extension[ngayHieuLuc] ^short = "Ngày bắt đầu hiệu lực"

* extension[ngayHetHan].value[x] only date
* extension[ngayHetHan] ^short = "Ngày hết hạn"

* extension[mucHuong].value[x] only integer
* extension[mucHuong] ^short = "Mức hưởng BHYT (%)"
</code></pre>

<h3 id="ethnicity-extension"><strong>拡張子: 民族</strong></h3>

<pre><code class="language-fsh">// input/fsh/extensions/EthnicityExtension.fsh
Extension: VNEthnicityExtension
Id: vn-ethnicity-extension
Title: "VN Ethnicity Extension"
Description: "Dân tộc theo danh mục 54 dân tộc Việt Nam"
Context: Patient

* value[x] only CodeableConcept
* valueCodeableConcept from VNEthnicityVS (required)
</code></pre>

<h2 id="5-codesystems-valuesets"><strong>5. コードシステムと値セット</strong></h2>

<pre><code class="language-fsh">// input/fsh/codesystems/VNEthnicityCS.fsh
CodeSystem: VNEthnicityCS
Id: vn-ethnicity-cs
Title: "VN Ethnicity CodeSystem"
Description: "Danh mục 54 dân tộc Việt Nam (theo TCTK)"
* ^caseSensitive = true
* #01 "Kinh"
* #02 "Tày"
* #03 "Thái"
* #04 "Mường"
* #05 "Khmer"
* #06 "Hoa"
* #07 "Nùng"
* #08 "Hmông"
* #09 "Dao"
* #10 "Gia Rai"
// ... thêm 44 dân tộc còn lại

// input/fsh/valuesets/VNEthnicityVS.fsh
ValueSet: VNEthnicityVS
Id: vn-ethnicity-vs
Title: "VN Ethnicity ValueSet"
Description: "ValueSet cho 54 dân tộc Việt Nam"
* include codes from system VNEthnicityCS
</code></pre>

<pre><code class="language-fsh">// input/fsh/codesystems/VNProvinceCS.fsh
CodeSystem: VNProvinceCS
Id: vn-province-cs
Title: "VN Province CodeSystem"
Description: "63 tỉnh/thành phố Việt Nam"
* ^caseSensitive = true
* #01 "Hà Nội"
* #79 "TP. Hồ Chí Minh"
* #48 "Đà Nẵng"
* #31 "Hải Phòng"
* #92 "Cần Thơ"
// ... thêm các tỉnh/thành còn lại
</code></pre>

<h2 id="6-examples"><strong>6. 例</strong></h2>

<pre><code class="language-fsh">// input/fsh/examples/PatientExample.fsh
Instance: VNPatientExample01
InstanceOf: VNCorePatient
Title: "Ví dụ: Bệnh nhân Nguyễn Văn A"
Description: "Ví dụ Patient tuân thủ VN-Core-Patient profile"
Usage: #example

* identifier[cccd].system = "http://fhir.vn/sid/cccd"
* identifier[cccd].value = "001234567890"

* identifier[bhyt].system = "http://fhir.vn/sid/bhyt"
* identifier[bhyt].value = "DN4012345678901"

* name[0].family = "Nguyễn"
* name[0].given[0] = "Văn"
* name[0].given[1] = "A"
* name[0].text = "Nguyễn Văn A"

* gender = #male
* birthDate = "1990-05-15"

* address[0].line[0] = "123 Nguyễn Huệ, Phường Bến Nghé"
* address[0].district = "Quận 1"
* address[0].city = "TP. Hồ Chí Minh"
* address[0].state = "79"
* address[0].country = "VN"

* extension[ethnicity].valueCodeableConcept = VNEthnicityCS#01 "Kinh"

* extension[bhytInfo].extension[soThe].valueString = "DN4012345678901"
* extension[bhytInfo].extension[noiDangKy].valueReference = Reference(Organization/org-bvdk-001)
* extension[bhytInfo].extension[ngayHieuLuc].valueDate = "2025-01-01"
* extension[bhytInfo].extension[ngayHetHan].valueDate = "2025-12-31"
* extension[bhytInfo].extension[mucHuong].valueInteger = 80
</code></pre>

<h2 id="7-build-publish"><strong>7. IG の構築と公開</strong></h2>

<pre><code class="language-bash"># Compile FSH → FHIR JSON
sushi .

# Output:
# fsh-generated/
#   resources/
#     StructureDefinition-vn-core-patient.json
#     StructureDefinition-vn-bhyt-extension.json
#     CodeSystem-vn-ethnicity-cs.json
#     ValueSet-vn-ethnicity-vs.json
#     Patient-VNPatientExample01.json

# Chạy IG Publisher (cần Java 17+)
./_genonce.sh

# Hoặc dùng Docker
docker run --rm -v $(pwd):/ig \
  hl7fhir/ig-publisher-base:latest \
  java -jar /app/publisher.jar \
  -ig /ig/ig.ini
</code></pre>

<h3 id="validate"><strong>IG でリソースを検証する</strong></h3>

<pre><code class="language-bash"># Validate một resource
java -jar validator_cli.jar \
  patient-example.json \
  -ig vn-core-ig/output \
  -profile http://fhir.vn/StructureDefinition/vn-core-patient

# Kết quả: 
# Information: All OK (0 errors, 0 warnings)
</code></pre>

<h2 id="8-ig-nang-cao"><strong>8. 高度な IG — 不変条件と制約</strong></h2>

<pre><code class="language-fsh">// Thêm invariant cho CCCD (12 số)
Invariant: vn-cccd-format
Description: "Số CCCD phải có đúng 12 chữ số"
Expression: "value.matches('^[0-9]{12}$')"
Severity: #error

* identifier[cccd].value obeys vn-cccd-format

// Thêm invariant cho BHYT (15 ký tự)
Invariant: vn-bhyt-format
Description: "Số thẻ BHYT phải có đúng 15 ký tự"
Expression: "value.matches('^[A-Z]{2}[0-9]{13}$')"
Severity: #error

* identifier[bhyt].value obeys vn-bhyt-format
</code></pre>

<h2 id="9-tong-ket"><strong>9. まとめ</strong></h2>

<ul>
<li><p><strong>実装ガイド</strong> — 特定のユースケース向けのルール、プロファイル、拡張機能のセット</p></li>
<li><p><strong>FSH (FHIR 略記法)</strong> — プロフィールの記述言語が簡潔で読みやすい</p></li>
<li><p><strong>VN-コア患者</strong> — プロフィール 患者には ID カード、健康保険、氏名、性別、生年月日が必要です</p></li>
<li><p><strong>拡張機能</strong> — 健康保険情報 (カード番号、登録場所、給付レベル)、ベトナム人の民族</p></li>
<li><p><strong>コードシステム/値セット</strong> — 54の民族グループ、63の省/都市、医療施設コード</p></li>
<li><p><strong>SUSHI + IG パブリッシャー</strong> — FSH → JSON → HTML IG のパイプラインを構築</p></li>
</ul>
