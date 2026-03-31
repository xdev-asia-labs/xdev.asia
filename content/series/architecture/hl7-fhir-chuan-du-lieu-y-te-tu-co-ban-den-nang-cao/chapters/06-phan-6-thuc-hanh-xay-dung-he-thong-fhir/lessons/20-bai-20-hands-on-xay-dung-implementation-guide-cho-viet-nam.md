---
id: 019e0a10-a603-7001-d001-f1a7f8000603
title: 'Bài 20: Hands-on — Xây dựng Implementation Guide cho Việt Nam'
slug: bai-20-hands-on-xay-dung-implementation-guide-cho-viet-nam
description: >-
  Xây dựng VN-Core-Patient profile (CCCD, BHYT), FSH (FHIR Shorthand),
  SUSHI compiler, IG Publisher, tạo profiles, extensions, value sets
  cho hệ thống y tế Việt Nam, publish và validate IG.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 6: Thực hành - Xây dựng hệ thống FHIR"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-implementation-guide-la-gi"><strong>1. Implementation Guide là gì?</strong></h2>

<p><strong>Implementation Guide (IG)</strong> là tập hợp các quy tắc, profiles, extensions, value sets, examples cho một use case cụ thể. IG cho Việt Nam sẽ định nghĩa cách biểu diễn dữ liệu y tế theo chuẩn Việt Nam.</p>

<table>
<thead>
<tr><th>Thành phần IG</th><th>Mô tả</th><th>Ví dụ VN</th></tr>
</thead>
<tbody>
<tr><td>Profiles</td><td>Ràng buộc cho base resources</td><td>VN-Core-Patient (bắt buộc CCCD)</td></tr>
<tr><td>Extensions</td><td>Thêm data elements</td><td>Số BHYT, dân tộc VN</td></tr>
<tr><td>ValueSets</td><td>Bộ mã cho phép</td><td>Danh mục dân tộc VN, ICD-10 VN</td></tr>
<tr><td>CodeSystems</td><td>Hệ thống mã</td><td>Mã tỉnh/thành, mã cơ sở KCB</td></tr>
<tr><td>Examples</td><td>Ví dụ mẫu</td><td>Patient mẫu với CCCD, BHYT</td></tr>
<tr><td>CapabilityStatement</td><td>Server requirements</td><td>Tối thiểu phải hỗ trợ gì</td></tr>
</tbody>
</table>

<h2 id="2-fsh-fhir-shorthand"><strong>2. FSH — FHIR Shorthand</strong></h2>

<p><strong>FSH</strong> là ngôn ngữ domain-specific giúp viết FHIR Profiles ngắn gọn hơn JSON/XML gấp nhiều lần.</p>

<pre><code class="language-bash"># Cài đặt SUSHI (FSH compiler)
npm install -g fsh-sushi

# Tạo IG project mới
sushi init
</code></pre>

<h3 id="project-structure"><strong>Cấu trúc Project</strong></h3>

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

<h2 id="3-vn-core-patient-profile"><strong>3. VN-Core-Patient Profile</strong></h2>

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

<h2 id="4-extensions"><strong>4. Extensions cho Việt Nam</strong></h2>

<h3 id="bhyt-extension"><strong>Extension: Thông tin BHYT</strong></h3>

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

<h3 id="ethnicity-extension"><strong>Extension: Dân tộc</strong></h3>

<pre><code class="language-fsh">// input/fsh/extensions/EthnicityExtension.fsh
Extension: VNEthnicityExtension
Id: vn-ethnicity-extension
Title: "VN Ethnicity Extension"
Description: "Dân tộc theo danh mục 54 dân tộc Việt Nam"
Context: Patient

* value[x] only CodeableConcept
* valueCodeableConcept from VNEthnicityVS (required)
</code></pre>

<h2 id="5-codesystems-valuesets"><strong>5. CodeSystems và ValueSets</strong></h2>

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

<h2 id="6-examples"><strong>6. Examples</strong></h2>

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

<h2 id="7-build-publish"><strong>7. Build và Publish IG</strong></h2>

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

<h3 id="validate"><strong>Validate resources với IG</strong></h3>

<pre><code class="language-bash"># Validate một resource
java -jar validator_cli.jar \
  patient-example.json \
  -ig vn-core-ig/output \
  -profile http://fhir.vn/StructureDefinition/vn-core-patient

# Kết quả: 
# Information: All OK (0 errors, 0 warnings)
</code></pre>

<h2 id="8-ig-nang-cao"><strong>8. IG nâng cao — Invariants và Constraints</strong></h2>

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

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>

<ul>
<li><p><strong>Implementation Guide</strong> — Tập quy tắc, profiles, extensions cho use case cụ thể</p></li>
<li><p><strong>FSH (FHIR Shorthand)</strong> — Ngôn ngữ viết profiles ngắn gọn, dễ đọc</p></li>
<li><p><strong>VN-Core-Patient</strong> — Profile Patient bắt buộc CCCD, BHYT, họ tên, giới tính, ngày sinh</p></li>
<li><p><strong>Extensions</strong> — BHYT info (số thẻ, nơi đăng ký, mức hưởng), dân tộc VN</p></li>
<li><p><strong>CodeSystems/ValueSets</strong> — 54 dân tộc, 63 tỉnh/thành, mã cơ sở KCB</p></li>
<li><p><strong>SUSHI + IG Publisher</strong> — Build pipeline từ FSH → JSON → HTML IG</p></li>
</ul>
