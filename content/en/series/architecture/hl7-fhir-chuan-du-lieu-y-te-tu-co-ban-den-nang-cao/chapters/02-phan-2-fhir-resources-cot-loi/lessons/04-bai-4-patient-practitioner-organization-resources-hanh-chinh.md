---
id: 019e0a10-a201-7001-d001-f1a7f8000201
title: 'Lesson 4: Patient, Practitioner, Organization - Administrative Resources'
slug: bai-4-patient-practitioner-organization-resources-hanh-chinh
description: >-
  Resource Patient details (demographics, identifiers, contact, link),
  Practitioner and PractitionerRole, Organization, Location, Endpoint. Practice
  creating, reading, and updating Patients on FHIR Server.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 'Part 2: Core FHIR Resources'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Basic to Advanced Healthcare Data Standard
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2971" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2971)"/>

  <!-- Decorations -->
  <g>
    <circle cx="807" cy="91" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1014" cy="198" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="721" cy="45" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="928" cy="152" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="635" cy="259" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="161" x2="1100" y2="241" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="191" x2="1050" y2="261" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="992.1769145362398,143 992.1769145362398,179 961,197 929.8230854637602,179 929.8230854637602,143 961,125" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🏗️ Architecture — Lesson 4</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 4: Patient, Practitioner, Organization</tspan>
      <tspan x="60" dy="42">- Administrative resources</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Basic to Advanced Healthcare Data Standard</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Core FHIR Resources</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-patient-resource"><strong>1. Patient Resource — Medical data center</strong></h2>

<p><strong>Patient</strong> is the most important Resource in FHIR — almost all clinical data is associated with a Patient. This is also the first Resource to level up <strong>Normative</strong> (stable, backward-compatible).</p>

<h3 id="cau-truc-patient"><strong>Patient Resource structure</strong></h3>

<table>
<thead>
<tr><th>Element</th><th>Type</th><th>Cardinality</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>identifier</td><td>Identifier[]</td><td>0..*</td><td>Identifier code (CCCD, health insurance, MRN...)</td></tr>
<tr><td>active</td><td>boolean</td><td>0..1</td><td>Is recording active?</td></tr>
<tr><td>name</td><td>HumanName[]</td><td>0..*</td><td>Patient's full name</td></tr>
<tr><td>telecom</td><td>ContactPoint[]</td><td>0..*</td><td>Phone number, email</td></tr>
<tr><td>gender</td><td>code</td><td>0..1</td><td>male | female | other | unknown. unknown</td></tr>
<tr><td>birthDate</td><td>date. date</td><td>0..1</td><td>Date of birth</td></tr>
<tr><td>deceased[x]</td><td>boolean/dateTime</td><td>0..1</td><td>Lost?</td></tr>
<tr><td>address</td><td>Address[]</td><td>0..*</td><td>Address</td></tr>
<tr><td>maritalStatus</td><td>CodeableConcept</td><td>0..1</td><td>Marital status</td></tr>
<tr><td>multipleBirth[x]</td><td>boolean/integer</td><td>0..1</td><td>Twins/triplets?</td></tr>
<tr><td>photo. photo</td><td>Attachment[]</td><td>0..*</td><td>Representative photo</td></tr>
<tr><td>contact. contact</td><td>BackboneElement[]</td><td>0..*</td><td>Contact person</td></tr>
<tr><td>communication. communication</td><td>BackboneElement[]</td><td>0..*</td><td>Communication language</td></tr>
<tr><td>generalPractitioner</td><td>Reference[]</td><td>0..*</td><td>Primary care physician</td></tr>
<tr><td>managingOrganization</td><td>Reference</td><td>0..1</td><td>Organize records management</td></tr>
<tr><td>link. link</td><td>BackboneElement[]</td><td>0..*</td><td>Link to another record (merge)</td></tr>
</tbody>
</table>

<h3 id="patient-viet-nam"><strong>Patient Resource for Vietnamese patients — Full example</strong></h3>

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

<h3 id="identifier-patterns"><strong>Identifier Patterns for Vietnam</strong></h3>

<table>
<thead>
<tr><th>ID type</th><th>System (URL)</th><th>Value example</th></tr>
</thead>
<tbody>
<tr><td>Citizen identification card (CCCD)</td><td>http://fhir.vn/sid/cccd</td><td>001085012345</td></tr>
<tr><td>Health insurance card</td><td>http://fhir.vn/sid/bhyt</td><td>DN4850112340001</td></tr>
<tr><td>Patient code (MRN)</td><td>http://benhvien.vn/sid/mrn</td><td>BN-2026-00123</td></tr>
<tr><td>Passport</td><td>http://fhir.vn/sid/passport</td><td>C1234567</td></tr>
</tbody>
</table>

<h2 id="2-practitioner-resource"><strong>2. Practitioner Resource — Medical staff</strong></h2>

<p><strong>Practitioner</strong> represents any individual involved in health care: doctors, nurses, pharmacists, technicians...</p>

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

<h3 id="practitioner-role"><strong>PractitionerRole — Specific role</strong></h3>

<p><strong>PractitionerRole</strong> Describes the role of a Practitioner at a specific Organization. A doctor can have many PractitionerRoles (work in many places).</p>

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

<h2 id="3-organization-resource"><strong>3. Organization Resource — Medical facility</strong></h2>

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

<h2 id="4-location-resource"><strong>4. Location Resource — Location</strong></h2>

<p><strong>Location</strong> Describe the physical location: clinic, department, hospital bed, operating room...</p>

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

<h2 id="5-quan-he-giua-resources"><strong>5. Relationships between administrative Resources</strong></h2>

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

<h2 id="6-thuc-hanh"><strong>6. Practice: Create a complete Resources system</strong></h2>

<p>Let's create a practical workflow: patient registration at the hospital.</p>

<h3 id="buoc-1-tao-organization"><strong>Step 1: Create Organization</strong></h3>
<pre><code class="language-bash">curl -X POST http://localhost:8080/fhir/Organization \
  -H "Content-Type: application/fhir+json" \
  -d '{"resourceType":"Organization","name":"Bệnh viện Đa khoa A","active":true}'
# Ghi lại id trả về → {org-id}
</code></pre>

<h3 id="buoc-2-tao-practitioner"><strong>Step 2: Create Practitioner</strong></h3>
<pre><code class="language-bash">curl -X POST http://localhost:8080/fhir/Practitioner \
  -H "Content-Type: application/fhir+json" \
  -d '{"resourceType":"Practitioner","name":[{"family":"Trần","given":["Minh","Đức"],"prefix":["BS"]}],"active":true}'
# Ghi lại id trả về → {prac-id}
</code></pre>

<h3 id="buoc-3-tao-patient"><strong>Step 3: Create Patient associated with Organization and Practitioner</strong></h3>
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

<h3 id="buoc-4-verify"><strong>Step 4: Verify — Search for Patients with _include</strong></h3>
<pre><code class="language-bash"># Tìm patient kèm thông tin Practitioner
curl -s "http://localhost:8080/fhir/Patient?_include=Patient:general-practitioner" | jq '.entry[].resource.resourceType'
# Kết quả: "Patient", "Practitioner"
</code></pre>

<h2 id="7-tom-tat"><strong>7. Summary</strong></h2>

<ul>
<li><p><strong>Patient</strong>: data center, contains identifiers, demographics, contacts</p></li>
<li><p><strong>Practitioner</strong>: personal information of medical staff, degrees, certificates</p></li>
<li><p><strong>PractitionerRole</strong>: specific role at a specific organization (1 person in many roles)</p></li>
<li><p><strong>Organization</strong>: hospital, clinic, department, department</p></li>
<li><p><strong>Location</strong>: physical location (room, floor, bed)</p></li>
<li><p>Resources are linked together <strong>References</strong></p></li>
<li><p>Use <strong>Identifiers</strong> suitable for the Vietnamese context (CCCD, health insurance, MRN)</p></li>
</ul>
