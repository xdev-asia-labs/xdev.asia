---
id: 019e0a10-a203-7001-d001-f1a7f8000203
title: 'Bài 6: Medication, MedicationRequest, Immunization - Resources thuốc'
slug: bai-6-medication-medicationrequest-immunization-resources-thuoc
description: >-
  Quản lý thuốc trong FHIR: Medication, MedicationRequest (đơn thuốc),
  MedicationAdministration, MedicationDispense, MedicationStatement.
  Immunization (tiêm chủng), liên kết với CodeSystem thuốc (RxNorm, ATC).
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: FHIR Resources cốt lõi"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-medication-workflow"><strong>1. Medication Workflow trong FHIR</strong></h2>

<p>FHIR cung cấp một chuỗi Resources để mô tả toàn bộ quy trình thuốc, từ kê đơn đến cấp phát và sử dụng.</p>

<pre><code>
Bác sĩ kê đơn         Dược sĩ cấp phát       Điều dưỡng cho thuốc
      │                      │                        │
      ▼                      ▼                        ▼
MedicationRequest ──▶ MedicationDispense ──▶ MedicationAdministration
      │                                              │
      │              MedicationStatement ◀────────────┘
      │              (bệnh nhân tự báo cáo)
      ▼
  Medication
  (thông tin thuốc)
</code></pre>

<h2 id="2-medication-resource"><strong>2. Medication Resource</strong></h2>

<p><strong>Medication</strong> mô tả thông tin về thuốc: tên, thành phần, dạng bào chế, nhà sản xuất.</p>

<pre><code class="language-json">{
  "resourceType": "Medication",
  "id": "med-amlodipine-5mg",
  "code": {
    "coding": [
      {
        "system": "http://www.whocc.no/atc",
        "code": "C08CA01",
        "display": "Amlodipine"
      }
    ],
    "text": "Amlodipine 5mg"
  },
  "doseForm": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "385055001",
        "display": "Tablet dose form"
      }
    ],
    "text": "Viên nén"
  },
  "ingredient": [
    {
      "item": {
        "concept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "386864001",
              "display": "Amlodipine"
            }
          ]
        }
      },
      "isActive": true,
      "strengthRatio": {
        "numerator": {
          "value": 5,
          "unit": "mg",
          "system": "http://unitsofmeasure.org",
          "code": "mg"
        },
        "denominator": {
          "value": 1,
          "unit": "tablet",
          "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
          "code": "TAB"
        }
      }
    }
  ]
}
</code></pre>

<h2 id="3-medicationrequest"><strong>3. MedicationRequest — Đơn thuốc</strong></h2>

<p><strong>MedicationRequest</strong> (trước đây gọi là MedicationOrder) ghi nhận y lệnh kê đơn thuốc.</p>

<h3 id="medicationrequest-structure"><strong>Các elements quan trọng</strong></h3>

<table>
<thead>
<tr><th>Element</th><th>Cardinality</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>status</td><td>1..1</td><td>active | on-hold | ended | stopped | completed | cancelled | draft</td></tr>
<tr><td>intent</td><td>1..1</td><td>proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option</td></tr>
<tr><td>medication</td><td>1..1</td><td>Reference(Medication) hoặc CodeableConcept</td></tr>
<tr><td>subject</td><td>1..1</td><td>Reference(Patient)</td></tr>
<tr><td>encounter</td><td>0..1</td><td>Reference(Encounter)</td></tr>
<tr><td>requester</td><td>0..1</td><td>Reference(Practitioner)</td></tr>
<tr><td>dosageInstruction</td><td>0..*</td><td>Hướng dẫn liều dùng</td></tr>
<tr><td>dispenseRequest</td><td>0..1</td><td>Yêu cầu cấp phát (quantity, refills, validityPeriod)</td></tr>
<tr><td>substitution</td><td>0..1</td><td>Cho phép thay thế thuốc không?</td></tr>
</tbody>
</table>

<h3 id="medicationrequest-example"><strong>Ví dụ: Đơn thuốc huyết áp</strong></h3>

<pre><code class="language-json">{
  "resourceType": "MedicationRequest",
  "id": "mr-amlodipine-001",
  "status": "active",
  "intent": "order",
  "medication": {
    "reference": {
      "reference": "Medication/med-amlodipine-5mg",
      "display": "Amlodipine 5mg"
    }
  },
  "subject": {
    "reference": "Patient/patient-001",
    "display": "Nguyễn Văn A"
  },
  "encounter": {
    "reference": "Encounter/encounter-outpatient-001"
  },
  "authoredOn": "2025-01-15T08:40:00+07:00",
  "requester": {
    "reference": "Practitioner/practitioner-001",
    "display": "BS. Trần Thị B"
  },
  "reason": [
    {
      "reference": {
        "reference": "Condition/cond-hypertension-001",
        "display": "Tăng huyết áp nguyên phát"
      }
    }
  ],
  "dosageInstruction": [
    {
      "sequence": 1,
      "text": "Uống 1 viên mỗi sáng sau ăn",
      "timing": {
        "repeat": {
          "frequency": 1,
          "period": 1,
          "periodUnit": "d",
          "when": ["ACM"]
        }
      },
      "route": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "26643006",
            "display": "Oral route"
          }
        ]
      },
      "doseAndRate": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                "code": "ordered"
              }
            ]
          },
          "doseQuantity": {
            "value": 1,
            "unit": "tablet",
            "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            "code": "TAB"
          }
        }
      ]
    }
  ],
  "dispenseRequest": {
    "numberOfRepeatsAllowed": 3,
    "quantity": {
      "value": 30,
      "unit": "tablet"
    },
    "expectedSupplyDuration": {
      "value": 30,
      "unit": "days",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    }
  }
}
</code></pre>

<h2 id="4-medicationadministration"><strong>4. MedicationAdministration</strong></h2>

<p>Ghi nhận việc cho thuốc thực tế (điều dưỡng cho bệnh nhân nội trú uống/tiêm thuốc).</p>

<pre><code class="language-json">{
  "resourceType": "MedicationAdministration",
  "id": "ma-001",
  "status": "completed",
  "medication": {
    "reference": {
      "reference": "Medication/med-amlodipine-5mg"
    }
  },
  "subject": {
    "reference": "Patient/patient-001"
  },
  "occurenceDateTime": "2025-01-16T07:00:00+07:00",
  "performer": [
    {
      "actor": {
        "reference": {
          "reference": "Practitioner/practitioner-002",
          "display": "ĐD. Lê Thị C"
        }
      }
    }
  ],
  "request": {
    "reference": "MedicationRequest/mr-amlodipine-001"
  },
  "dosage": {
    "text": "1 viên uống",
    "route": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "26643006",
          "display": "Oral route"
        }
      ]
    },
    "dose": {
      "value": 5,
      "unit": "mg",
      "system": "http://unitsofmeasure.org",
      "code": "mg"
    }
  }
}
</code></pre>

<h2 id="5-immunization"><strong>5. Immunization — Tiêm chủng</strong></h2>

<pre><code class="language-json">{
  "resourceType": "Immunization",
  "id": "imm-covid-001",
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/sid/cvx",
        "code": "208",
        "display": "SARS-COV-2 (COVID-19) vaccine, mRNA, spike protein, LNP, preservative free, 30 mcg/0.3mL dose"
      }
    ],
    "text": "Pfizer-BioNTech COVID-19 Vaccine"
  },
  "patient": {
    "reference": "Patient/patient-001"
  },
  "encounter": {
    "reference": "Encounter/encounter-vaccination-001"
  },
  "occurrenceDateTime": "2024-03-15T09:30:00+07:00",
  "primarySource": true,
  "location": {
    "reference": "Location/loc-vaccination-center"
  },
  "lotNumber": "EW0150",
  "expirationDate": "2024-09-30",
  "site": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-ActSite",
        "code": "LA",
        "display": "Left arm"
      }
    ]
  },
  "route": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
        "code": "IM",
        "display": "Intramuscular"
      }
    ]
  },
  "doseQuantity": {
    "value": 0.3,
    "unit": "mL",
    "system": "http://unitsofmeasure.org",
    "code": "mL"
  },
  "performer": [
    {
      "function": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0443",
            "code": "AP",
            "display": "Administering Provider"
          }
        ]
      },
      "actor": {
        "reference": "Practitioner/practitioner-002"
      }
    }
  ],
  "protocolApplied": [
    {
      "series": "COVID-19 Primary Series",
      "doseNumber": "2"
    }
  ]
}
</code></pre>

<h2 id="6-codesystems-thuoc"><strong>6. Hệ thống mã thuốc</strong></h2>

<table>
<thead>
<tr><th>CodeSystem</th><th>Mục đích</th><th>Phạm vi</th></tr>
</thead>
<tbody>
<tr><td>ATC (WHO)</td><td>Phân loại thuốc</td><td>Quốc tế</td></tr>
<tr><td>RxNorm (NLM)</td><td>Tên thuốc chuẩn hóa</td><td>Hoa Kỳ</td></tr>
<tr><td>SNOMED CT</td><td>Thuật ngữ lâm sàng (gồm thuốc)</td><td>Quốc tế</td></tr>
<tr><td>CVX (CDC)</td><td>Mã vaccine</td><td>Hoa Kỳ (dùng rộng rãi)</td></tr>
<tr><td>NDC</td><td>National Drug Code</td><td>Hoa Kỳ</td></tr>
</tbody>
</table>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><p><strong>Medication</strong> — Thông tin thuốc (thành phần, dạng bào chế)</p></li>
<li><p><strong>MedicationRequest</strong> — Y lệnh kê đơn (dosage, dispense, substitution)</p></li>
<li><p><strong>MedicationAdministration</strong> — Ghi nhận cho thuốc thực tế</p></li>
<li><p><strong>MedicationDispense</strong> — Dược sĩ cấp phát thuốc</p></li>
<li><p><strong>Immunization</strong> — Tiêm chủng với đầy đủ thông tin vaccine, liều, lô</p></li>
<li><p>Sử dụng CodeSystems: <strong>ATC</strong>, <strong>RxNorm</strong>, <strong>CVX</strong>, <strong>SNOMED CT</strong></p></li>
</ul>
