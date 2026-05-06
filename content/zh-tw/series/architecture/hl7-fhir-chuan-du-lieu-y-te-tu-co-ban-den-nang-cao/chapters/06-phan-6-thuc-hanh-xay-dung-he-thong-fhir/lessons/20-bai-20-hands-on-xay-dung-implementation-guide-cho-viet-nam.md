---
id: 019e0a10-a603-7001-d001-f1a7f8000603
title: 第 20 課：實踐－為越南制定實施指南
slug: bai-20-hands-on-xay-dung-implementation-guide-cho-viet-nam
description: >-
  建立 VN-Core-Patient 設定檔（CCCD、健康保險）、FSH（FHIR 簡寫）、SUSHI 編譯器、IG
  發佈器，為越南衛生系統建立設定檔、擴充、值集，發布和驗證 IG。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 20
section_title: 第 6 部分：實踐 - 建構 FHIR 系統
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — 第 20 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 20 課：實踐 — 建構實施</tspan>
      <tspan x="60" dy="42">越南指南</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：實踐 - 建構 FHIR 系統</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-implementation-guide-la-gi"><strong>1. 什麼是實施指南？</strong></h2>

<p><strong>實施指南（IG）</strong> 是規則、設定檔、擴充、值集、特定用例範例的集合。越南 IG 將定義如何根據越南標準表示醫療數據。</p>

<table>
<thead>
<tr><th>IG成分</th><th>描述</th><th>例如越南</th></tr>
</thead>
<tbody>
<tr><td>型材</td><td>基礎資源綁定</td><td>VN-核心-患者（需要 CCCD）</td></tr>
<tr><td>擴充</td><td>新增數據元素</td><td>健康保險號碼，越南裔</td></tr>
<tr><td>值集</td><td>啟用的代碼集</td><td>越南民族列表，ICD-10 越南</td></tr>
<tr><td>代碼系統</td><td>代碼系統</td><td>省/市代碼、醫療機構代碼</td></tr>
<tr><td>範例</td><td>範例範例</td><td>具有 CCCD 和健康保險的樣本患者</td></tr>
<tr><td>能力聲明</td><td>伺服器要求</td><td>需要什麼最低支援？</td></tr>
</tbody>
</table>

<h2 id="2-fsh-fhir-shorthand"><strong>2. FSH——FHIR 簡寫</strong></h2>

<p><strong>卵泡刺激素</strong> 是一種特定於領域的語言，有助於編寫比 JSON/XML 簡潔許多倍的 FHIR 設定檔。</p>

<pre><code class="language-bash"># Cài đặt SUSHI (FSH compiler)
npm install -g fsh-sushi

# Tạo IG project mới
sushi init
</code></pre>

<h3 id="project-structure"><strong>專案結構</strong></h3>

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

<h3 id="sushi-config"><strong>sushi-config.yaml</strong></h3>

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

<h2 id="3-vn-core-patient-profile"><strong>3. VN-核心-病患資料</strong></h2>

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

<h2 id="4-extensions"><strong>4. 越南延期</strong></h2>

<h3 id="bhyt-extension"><strong>延伸：健康保險訊息</strong></h3>

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

<h3 id="ethnicity-extension"><strong>延伸：種族</strong></h3>

<pre><code class="language-fsh">// input/fsh/extensions/EthnicityExtension.fsh
Extension: VNEthnicityExtension
Id: vn-ethnicity-extension
Title: "VN Ethnicity Extension"
Description: "Dân tộc theo danh mục 54 dân tộc Việt Nam"
Context: Patient

* value[x] only CodeableConcept
* valueCodeableConcept from VNEthnicityVS (required)
</code></pre>

<h2 id="5-codesystems-valuesets"><strong>5. 代碼系統和值集</strong></h2>

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

<h2 id="6-examples"><strong>6. 例子</strong></h2>

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

<h2 id="7-build-publish"><strong>7. 建置並發布 IG</strong></h2>

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

<h3 id="validate"><strong>與 IG 驗證資源</strong></h3>

<pre><code class="language-bash"># Validate một resource
java -jar validator_cli.jar \
  patient-example.json \
  -ig vn-core-ig/output \
  -profile http://fhir.vn/StructureDefinition/vn-core-patient

# Kết quả: 
# Information: All OK (0 errors, 0 warnings)
</code></pre>

<h2 id="8-ig-nang-cao"><strong>8. 高階 IG——不變量和約束</strong></h2>

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

<h2 id="9-tong-ket"><strong>9. 總結</strong></h2>

<ul>
<li><p><strong>實施指南</strong> — 針對特定用例的一組規則、設定檔、擴充</p></li>
<li><p><strong>FSH（FHIR 簡寫）</strong> — 簡介書寫語言簡潔易讀</p></li>
<li><p><strong>VN-核心-患者</strong> — 資料 患者需要身分證、健康保險、全名、性別、出生日期</p></li>
<li><p><strong>擴充</strong> — 健康保險資訊（卡號、註冊地點、福利等級）、越南裔</p></li>
<li><p><strong>代碼系統/值集</strong> — 54個民族、63個省/市、醫療機構代碼</p></li>
<li><p><strong>SUSHI + IG 出版商</strong> — 從 FSH → JSON → HTML IG 建立管道</p></li>
</ul>
