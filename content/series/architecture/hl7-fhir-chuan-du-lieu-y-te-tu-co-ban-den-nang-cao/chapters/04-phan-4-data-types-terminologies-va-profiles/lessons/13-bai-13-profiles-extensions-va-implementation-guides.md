---
id: 019e0a10-a403-7001-d001-f1a7f8000403
title: 'Bài 13: Profiles, Extensions và Implementation Guides'
slug: bai-13-profiles-extensions-va-implementation-guides
description: >-
  StructureDefinition, tạo Profile để ràng buộc Resource, Extensions
  (simple, complex, modifier), Slicing, Invariants (FHIRPath constraints).
  Implementation Guide (IG), IG Publisher, US Core Profile làm ví dụ,
  International Patient Summary (IPS). FHIR Shorthand (FSH).
duration_minutes: 150
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Data Types, Terminologies và Profiles"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-profiles"><strong>1. Profiles — Ràng buộc Resources</strong></h2>

<p>Một <strong>Profile</strong> (StructureDefinition) thêm các ràng buộc lên resource FHIR cơ sở — bắt buộc elements, giới hạn cardinalities, binding terminologies, thêm extensions.</p>

<h3 id="fsh-profile"><strong>Ví dụ Profile bằng FHIR Shorthand (FSH)</strong></h3>

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

<h3 id="structuredefinition"><strong>StructureDefinition (JSON)</strong></h3>

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

<h2 id="2-extensions"><strong>2. Extensions</strong></h2>

<p>Extensions cho phép thêm data mà base FHIR Resource không có — đây là cơ chế <strong>extensibility</strong> cốt lõi.</p>

<h3 id="simple-extension"><strong>Simple Extension</strong></h3>

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

<h3 id="complex-extension"><strong>Complex Extension</strong></h3>

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

<h3 id="modifier-extension"><strong>Modifier Extension</strong></h3>

<p>Modifier extension <strong>thay đổi ý nghĩa</strong> của element chứa nó — receivers PHẢI hiểu extension này.</p>

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

<h2 id="3-slicing"><strong>3. Slicing</strong></h2>

<p>Slicing chia một element lặp (cardinality 0..*) thành các "slices" riêng biệt với ràng buộc khác nhau.</p>

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
<tr><th>Discriminator Type</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>value</td><td>Phân biệt bằng giá trị cụ thể</td></tr>
<tr><td>pattern</td><td>Phân biệt bằng pattern matching</td></tr>
<tr><td>type</td><td>Phân biệt bằng type (choice types)</td></tr>
<tr><td>profile</td><td>Phân biệt bằng profile</td></tr>
<tr><td>exists</td><td>Phân biệt bằng sự tồn tại</td></tr>
</tbody>
</table>

<h2 id="4-invariants"><strong>4. Invariants (FHIRPath Constraints)</strong></h2>

<pre><code class="language-fsh">Invariant: vn-patient-1
Description: "Phải có ít nhất CCCD hoặc BHYT"
Expression: "identifier.where(system='http://cccd.gov.vn').exists() or identifier.where(system='http://bhxh.gov.vn/bhyt').exists()"
Severity: #error

Invariant: vn-patient-2
Description: "Nếu có CCCD thì phải có 12 chữ số"
Expression: "identifier.where(system='http://cccd.gov.vn').value.matches('^[0-9]{12}$')"
Severity: #error
</code></pre>

<h2 id="5-implementation-guide"><strong>5. Implementation Guide (IG)</strong></h2>

<p>IG là bộ đóng gói hoàn chỉnh: profiles, extensions, ValueSets, CodeSystems, examples, narrative documentation.</p>

<h3 id="ig-structure"><strong>Cấu trúc dự án IG</strong></h3>

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

<h3 id="build-ig"><strong>Build IG</strong></h3>

<pre><code class="language-bash"># Install SUSHI
npm install -g fsh-sushi

# Compile FSH → FHIR JSON
sushi .

# Run IG Publisher
./_genonce.sh
# Output: output/ directory with HTML pages
</code></pre>

<h2 id="6-us-core-ips"><strong>6. US Core và IPS làm tham khảo</strong></h2>

<table>
<thead>
<tr><th>IG</th><th>Mô tả</th><th>Profiles</th></tr>
</thead>
<tbody>
<tr><td>US Core</td><td>Hoa Kỳ, bắt buộc cho 21st Century Cures Act</td><td>Patient, Encounter, Condition, Observation, Medication, ...</td></tr>
<tr><td>IPS</td><td>International Patient Summary, ISO 27269</td><td>Patient, Medication, Allergy, Problem, Immunization, ...</td></tr>
<tr><td>AU Base</td><td>Australia</td><td>AU Patient, AU Practitioner, ...</td></tr>
</tbody>
</table>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><p><strong>Profile</strong> — Ràng buộc Resource (bắt buộc elements, binding, cardinality)</p></li>
<li><p><strong>Extension</strong> — Thêm data không có trong base (simple, complex, modifier)</p></li>
<li><p><strong>Slicing</strong> — Chia repeating elements thành slices có ràng buộc riêng</p></li>
<li><p><strong>Invariants</strong> — Business rules bằng FHIRPath</p></li>
<li><p><strong>FSH + SUSHI</strong> — Ngôn ngữ DSL để viết profiles/extensions ngắn gọn</p></li>
<li><p><strong>IG Publisher</strong> — Build documentation website từ FSH/JSON</p></li>
</ul>
