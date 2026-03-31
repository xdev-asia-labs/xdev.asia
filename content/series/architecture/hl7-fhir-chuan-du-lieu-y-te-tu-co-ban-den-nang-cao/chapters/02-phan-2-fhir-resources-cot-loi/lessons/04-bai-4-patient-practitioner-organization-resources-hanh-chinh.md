---
id: 019e0a10-a201-7001-d001-f1a7f8000201
title: 'Bài 4: Patient, Practitioner, Organization - Resources hành chính'
slug: bai-4-patient-practitioner-organization-resources-hanh-chinh
description: >-
  Chi tiết Resource Patient (demographics, identifiers, contact, link),
  Practitioner và PractitionerRole, Organization, Location, Endpoint.
  Thực hành tạo, đọc, cập nhật Patient trên FHIR Server.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: FHIR Resources cốt lõi"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-patient-resource"><strong>1. Patient Resource — Trung tâm dữ liệu y tế</strong></h2>

<p><strong>Patient</strong> là Resource quan trọng nhất trong FHIR — hầu hết mọi dữ liệu lâm sàng đều liên kết với một Patient. Đây cũng là Resource đầu tiên đạt cấp <strong>Normative</strong> (stable, backward-compatible).</p>

<h3 id="cau-truc-patient"><strong>Cấu trúc Patient Resource</strong></h3>

<table>
<thead>
<tr><th>Element</th><th>Type</th><th>Cardinality</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>identifier</td><td>Identifier[]</td><td>0..*</td><td>Mã định danh (CCCD, BHYT, MRN...)</td></tr>
<tr><td>active</td><td>boolean</td><td>0..1</td><td>Record có đang hoạt động?</td></tr>
<tr><td>name</td><td>HumanName[]</td><td>0..*</td><td>Họ tên bệnh nhân</td></tr>
<tr><td>telecom</td><td>ContactPoint[]</td><td>0..*</td><td>SĐT, email</td></tr>
<tr><td>gender</td><td>code</td><td>0..1</td><td>male | female | other | unknown</td></tr>
<tr><td>birthDate</td><td>date</td><td>0..1</td><td>Ngày sinh</td></tr>
<tr><td>deceased[x]</td><td>boolean/dateTime</td><td>0..1</td><td>Đã mất?</td></tr>
<tr><td>address</td><td>Address[]</td><td>0..*</td><td>Địa chỉ</td></tr>
<tr><td>maritalStatus</td><td>CodeableConcept</td><td>0..1</td><td>Tình trạng hôn nhân</td></tr>
<tr><td>multipleBirth[x]</td><td>boolean/integer</td><td>0..1</td><td>Sinh đôi/ba?</td></tr>
<tr><td>photo</td><td>Attachment[]</td><td>0..*</td><td>Ảnh đại diện</td></tr>
<tr><td>contact</td><td>BackboneElement[]</td><td>0..*</td><td>Người liên hệ</td></tr>
<tr><td>communication</td><td>BackboneElement[]</td><td>0..*</td><td>Ngôn ngữ giao tiếp</td></tr>
<tr><td>generalPractitioner</td><td>Reference[]</td><td>0..*</td><td>Bác sĩ chăm sóc chính</td></tr>
<tr><td>managingOrganization</td><td>Reference</td><td>0..1</td><td>Tổ chức quản lý hồ sơ</td></tr>
<tr><td>link</td><td>BackboneElement[]</td><td>0..*</td><td>Liên kết đến record khác (merge)</td></tr>
</tbody>
</table>

<h3 id="patient-viet-nam"><strong>Patient Resource cho bệnh nhân Việt Nam — Ví dụ đầy đủ</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "id": "vn-patient-001",
  "meta": {
    "profile": ["http://fhir.vn/StructureDefinition/vn-core-patient"]
  },
  "identifier": [
    {
      "use": "official",
      "type": {
        "coding": [{
          "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
          "code": "NI",
          "display": "National unique individual identifier"
        }]
      },
      "system": "http://fhir.vn/sid/cccd",
      "value": "001085012345"
    },
    {
      "use": "secondary",
      "type": {
        "coding": [{
          "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
          "code": "SB",
          "display": "Social Beneficiary Identifier"
        }]
      },
      "system": "http://fhir.vn/sid/bhyt",
      "value": "DN4850112340001"
    },
    {
      "use": "usual",
      "type": {
        "coding": [{
          "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
          "code": "MR",
          "display": "Medical record number"
        }]
      },
      "system": "http://benhvien-a.vn/sid/mrn",
      "value": "BN-2026-00123"
    }
  ],
  "active": true,
  "name": [
    {
      "use": "official",
      "text": "Nguyễn Văn An",
      "family": "Nguyễn",
      "given": ["Văn", "An"]
    }
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "+84901234567",
      "use": "mobile",
      "rank": 1
    },
    {
      "system": "email",
      "value": "nguyen.van.an@email.com",
      "use": "home"
    }
  ],
  "gender": "male",
  "birthDate": "1985-03-15",
  "address": [
    {
      "use": "home",
      "type": "physical",
      "text": "123 Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM",
      "line": ["123 Lê Lợi"],
      "city": "Thành phố Hồ Chí Minh",
      "district": "Quận 1",
      "state": "Thành phố Hồ Chí Minh",
      "postalCode": "700000",
      "country": "VN"
    }
  ],
  "maritalStatus": {
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
      "code": "M",
      "display": "Married"
    }],
    "text": "Đã kết hôn"
  },
  "contact": [
    {
      "relationship": [{
        "coding": [{
          "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
          "code": "N",
          "display": "Next-of-Kin"
        }]
      }],
      "name": {
        "text": "Trần Thị Bình",
        "family": "Trần",
        "given": ["Thị", "Bình"]
      },
      "telecom": [{
        "system": "phone",
        "value": "+84907654321"
      }]
    }
  ],
  "communication": [{
    "language": {
      "coding": [{
        "system": "urn:ietf:bcp:47",
        "code": "vi",
        "display": "Vietnamese"
      }]
    },
    "preferred": true
  }],
  "managingOrganization": {
    "reference": "Organization/benhvien-a",
    "display": "Bệnh viện Đại học Y Dược TP.HCM"
  }
}
</code></pre>

<h3 id="identifier-patterns"><strong>Identifier Patterns cho Việt Nam</strong></h3>

<table>
<thead>
<tr><th>Loại ID</th><th>System (URL)</th><th>Ví dụ value</th></tr>
</thead>
<tbody>
<tr><td>Căn cước công dân (CCCD)</td><td>http://fhir.vn/sid/cccd</td><td>001085012345</td></tr>
<tr><td>Thẻ BHYT</td><td>http://fhir.vn/sid/bhyt</td><td>DN4850112340001</td></tr>
<tr><td>Mã bệnh nhân (MRN)</td><td>http://benhvien.vn/sid/mrn</td><td>BN-2026-00123</td></tr>
<tr><td>Hộ chiếu</td><td>http://fhir.vn/sid/passport</td><td>C1234567</td></tr>
</tbody>
</table>

<h2 id="2-practitioner-resource"><strong>2. Practitioner Resource — Nhân viên y tế</strong></h2>

<p><strong>Practitioner</strong> đại diện cho bất kỳ cá nhân nào tham gia vào việc chăm sóc sức khỏe: bác sĩ, điều dưỡng, dược sĩ, kỹ thuật viên...</p>

<pre><code class="language-json">{
  "resourceType": "Practitioner",
  "id": "dr-tran-001",
  "identifier": [{
    "system": "http://fhir.vn/sid/physician-license",
    "value": "BS-TPHCM-2010-00456"
  }],
  "active": true,
  "name": [{
    "use": "official",
    "text": "TS.BS Trần Minh Đức",
    "family": "Trần",
    "given": ["Minh", "Đức"],
    "prefix": ["TS.BS"]
  }],
  "telecom": [{
    "system": "phone",
    "value": "+84909876543",
    "use": "work"
  }],
  "gender": "male",
  "birthDate": "1978-05-20",
  "qualification": [
    {
      "identifier": [{
        "system": "http://fhir.vn/sid/medical-degree",
        "value": "BSCK2-NKH-2010"
      }],
      "code": {
        "coding": [{
          "system": "http://fhir.vn/CodeSystem/qualification",
          "code": "BSCK2",
          "display": "Bác sĩ Chuyên khoa II"
        }]
      },
      "issuer": {
        "display": "Đại học Y Dược TP.HCM"
      }
    }
  ],
  "communication": [{
    "coding": [{
      "system": "urn:ietf:bcp:47",
      "code": "vi"
    }]
  }]
}
</code></pre>

<h3 id="practitioner-role"><strong>PractitionerRole — Vai trò cụ thể</strong></h3>

<p><strong>PractitionerRole</strong> mô tả vai trò của Practitioner tại một Organization cụ thể. Một bác sĩ có thể có nhiều PractitionerRoles (làm việc ở nhiều nơi).</p>

<pre><code class="language-json">{
  "resourceType": "PractitionerRole",
  "id": "dr-tran-role-bva",
  "active": true,
  "practitioner": {
    "reference": "Practitioner/dr-tran-001",
    "display": "TS.BS Trần Minh Đức"
  },
  "organization": {
    "reference": "Organization/benhvien-a",
    "display": "Bệnh viện A"
  },
  "code": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/practitioner-role",
      "code": "doctor",
      "display": "Doctor"
    }]
  }],
  "specialty": [{
    "coding": [{
      "system": "http://snomed.info/sct",
      "code": "394579002",
      "display": "Cardiology"
    }],
    "text": "Tim mạch"
  }],
  "location": [{
    "reference": "Location/phong-kham-tim-mach"
  }],
  "availableTime": [{
    "daysOfWeek": ["mon", "tue", "wed", "thu", "fri"],
    "availableStartTime": "07:30:00",
    "availableEndTime": "16:30:00"
  }]
}
</code></pre>

<h2 id="3-organization-resource"><strong>3. Organization Resource — Cơ sở y tế</strong></h2>

<pre><code class="language-json">{
  "resourceType": "Organization",
  "id": "benhvien-a",
  "identifier": [
    {
      "system": "http://fhir.vn/sid/facility-code",
      "value": "79001"
    },
    {
      "system": "http://fhir.vn/sid/bhxh-facility",
      "value": "79-001"
    }
  ],
  "active": true,
  "type": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/organization-type",
      "code": "prov",
      "display": "Healthcare Provider"
    }]
  }],
  "name": "Bệnh viện Đại học Y Dược TP.HCM",
  "alias": ["BV ĐHYD"],
  "telecom": [
    {
      "system": "phone",
      "value": "+842838554269",
      "use": "work"
    },
    {
      "system": "url",
      "value": "https://www.bvdhydtphcm.vn"
    }
  ],
  "address": [{
    "use": "work",
    "line": ["215 Hồng Bàng"],
    "city": "Thành phố Hồ Chí Minh",
    "district": "Quận 5",
    "country": "VN"
  }]
}
</code></pre>

<h2 id="4-location-resource"><strong>4. Location Resource — Vị trí</strong></h2>

<p><strong>Location</strong> mô tả vị trí vật lý: phòng khám, khoa, giường bệnh, phòng mổ...</p>

<pre><code class="language-json">{
  "resourceType": "Location",
  "id": "phong-kham-tim-mach",
  "status": "active",
  "name": "Phòng khám Tim mạch - Tầng 3",
  "description": "Phòng khám chuyên khoa Tim mạch, tầng 3 tòa nhà B",
  "mode": "instance",
  "type": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
      "code": "CARD",
      "display": "Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities"
    }]
  }],
  "telecom": [{
    "system": "phone",
    "value": "+842838554269-303"
  }],
  "address": {
    "line": ["Tầng 3, Tòa B, 215 Hồng Bàng"],
    "city": "TP.HCM",
    "country": "VN"
  },
  "physicalType": {
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/location-physical-type",
      "code": "ro",
      "display": "Room"
    }]
  },
  "managingOrganization": {
    "reference": "Organization/benhvien-a"
  }
}
</code></pre>

<h2 id="5-quan-he-giua-resources"><strong>5. Mối quan hệ giữa các Resources hành chính</strong></h2>

<pre><code>┌──────────────────┐
│   Organization   │ ← Bệnh viện/Phòng khám
│   (benhvien-a)   │
└───────┬──────────┘
        │ managingOrganization
        ▼
┌──────────────────┐        ┌──────────────────────┐
│    Location      │◄───────│   PractitionerRole   │
│ (phong-kham-tm)  │        │  (dr-tran-role-bva)  │
└──────────────────┘        └───────┬──────────────┘
                                    │ practitioner
                                    ▼
                            ┌──────────────────┐
                            │  Practitioner    │
                            │  (dr-tran-001)   │
                            └──────────────────┘
                                    ▲ generalPractitioner
                                    │
                            ┌──────────────────┐
                            │    Patient       │
                            │ (vn-patient-001) │
                            └──────────────────┘
</code></pre>

<h2 id="6-thuc-hanh"><strong>6. Thực hành: Tạo hệ thống Resources hoàn chỉnh</strong></h2>

<p>Hãy tạo một workflow thực tế: đăng ký bệnh nhân tại bệnh viện.</p>

<h3 id="buoc-1-tao-organization"><strong>Bước 1: Tạo Organization</strong></h3>
<pre><code class="language-bash">curl -X POST http://localhost:8080/fhir/Organization \
  -H "Content-Type: application/fhir+json" \
  -d '{"resourceType":"Organization","name":"Bệnh viện Đa khoa A","active":true}'
# Ghi lại id trả về → {org-id}
</code></pre>

<h3 id="buoc-2-tao-practitioner"><strong>Bước 2: Tạo Practitioner</strong></h3>
<pre><code class="language-bash">curl -X POST http://localhost:8080/fhir/Practitioner \
  -H "Content-Type: application/fhir+json" \
  -d '{"resourceType":"Practitioner","name":[{"family":"Trần","given":["Minh","Đức"],"prefix":["BS"]}],"active":true}'
# Ghi lại id trả về → {prac-id}
</code></pre>

<h3 id="buoc-3-tao-patient"><strong>Bước 3: Tạo Patient liên kết với Organization và Practitioner</strong></h3>
<pre><code class="language-bash">curl -X POST http://localhost:8080/fhir/Patient \
  -H "Content-Type: application/fhir+json" \
  -d '{
    "resourceType": "Patient",
    "name": [{"family":"Nguyễn","given":["Thị","Mai"]}],
    "gender": "female",
    "birthDate": "1992-08-10",
    "generalPractitioner": [{"reference":"Practitioner/{prac-id}"}],
    "managingOrganization": {"reference":"Organization/{org-id}"}
  }'
</code></pre>

<h3 id="buoc-4-verify"><strong>Bước 4: Verify — Tìm kiếm Patient với _include</strong></h3>
<pre><code class="language-bash"># Tìm patient kèm thông tin Practitioner
curl -s "http://localhost:8080/fhir/Patient?_include=Patient:general-practitioner" | jq '.entry[].resource.resourceType'
# Kết quả: "Patient", "Practitioner"
</code></pre>

<h2 id="7-tom-tat"><strong>7. Tóm tắt</strong></h2>

<ul>
<li><p><strong>Patient</strong>: trung tâm dữ liệu, chứa identifiers, demographics, contacts</p></li>
<li><p><strong>Practitioner</strong>: thông tin cá nhân nhân viên y tế, bằng cấp, chứng chỉ</p></li>
<li><p><strong>PractitionerRole</strong>: vai trò cụ thể tại tổ chức cụ thể (1 người nhiều role)</p></li>
<li><p><strong>Organization</strong>: bệnh viện, phòng khám, khoa, phòng ban</p></li>
<li><p><strong>Location</strong>: vị trí vật lý (phòng, tầng, giường)</p></li>
<li><p>Các Resources liên kết với nhau qua <strong>References</strong></p></li>
<li><p>Sử dụng <strong>Identifiers</strong> phù hợp cho bối cảnh Việt Nam (CCCD, BHYT, MRN)</p></li>
</ul>
