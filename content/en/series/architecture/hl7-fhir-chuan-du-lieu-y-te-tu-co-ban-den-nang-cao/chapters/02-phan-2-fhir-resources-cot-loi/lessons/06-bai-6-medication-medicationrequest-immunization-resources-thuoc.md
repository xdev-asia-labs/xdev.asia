---
id: 019e0a10-a203-7001-d001-f1a7f8000203
title: 'Lesson 6: Medication, MedicationRequest, Immunization - Drug resources'
slug: bai-6-medication-medicationrequest-immunization-resources-thuoc
description: >-
  Medication management in FHIR: Medication, MedicationRequest (prescription),
  MedicationAdministration, MedicationDispense, MedicationStatement.
  Immunization (vaccination), linked to drug CodeSystem (RxNorm, ATC).
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 2: Core FHIR Resources'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Basic to Advanced Healthcare Data Standard
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2239" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2239)"/>

  <!-- Decorations -->
  <g>
    <circle cx="815" cy="255" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1030" cy="70" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="745" cy="145" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="960" cy="220" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="675" cy="35" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="245" x2="1100" y2="325" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="275" x2="1050" y2="345" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1079.6410161513775,225 1079.6410161513775,265 1045,285 1010.3589838486224,265 1010.3589838486224,225 1045,205" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ Architecture — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: Medication, MedicationRequest,</tspan>
      <tspan x="60" dy="42">Immunization - Drug Resources</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Basic to Advanced Healthcare Data Standard</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Core FHIR Resources</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-medication-workflow"><strong>1. Medication Workflow in FHIR</strong></h2>

<p>FHIR provides a series of Resources to describe the entire medication process, from prescribing to dispensing and administration.</p>

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

<p><strong>Medication</strong> Describe information about the drug: name, ingredients, dosage form, manufacturer.</p>

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

<h2 id="3-medicationrequest"><strong>3. MedicationRequest — Prescription</strong></h2>

<p><strong>MedicationRequest</strong> (formerly known as MedicationOrder) records drug prescription orders.</p>

<h3 id="medicationrequest-structure"><strong>Important elements</strong></h3>

<table>
<thead>
<tr><th>Element</th><th>Cardinality</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>status. status</td><td>1..1</td><td>active | on-hold | ended | stopped | completed | canceled | draft. draft</td></tr>
<tr><td>intent. intent</td><td>1..1</td><td>proposals | plan | order | original-order | reflex-order | filler-order | instance-order | option. option</td></tr>
<tr><td>medication. medication. medication</td><td>1..1</td><td>Reference(Medication) or CodeableConcept</td></tr>
<tr><td>subject. subject</td><td>1..1</td><td>Reference(Patient)</td></tr>
<tr><td>encounter. encounter</td><td>0..1</td><td>Reference(Encounter)</td></tr>
<tr><td>requester</td><td>0..1</td><td>Reference(Practitioner)</td></tr>
<tr><td>dosageInstruction</td><td>0..*</td><td>Dosage instructions</td></tr>
<tr><td>dispenseRequest</td><td>0..1</td><td>Dispensing requirements (quantity, refills, validityPeriod)</td></tr>
<tr><td>substitution</td><td>0..1</td><td>Are drug substitutions allowed?</td></tr>
</tbody>
</table>

<h3 id="medicationrequest-example"><strong>Example: Blood pressure prescription</strong></h3>

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

<p>Record actual medication administration (nurse giving inpatient medication/injection).</p>

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

<h2 id="5-immunization"><strong>5. Immunization — Vaccination</strong></h2>

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

<h2 id="6-codesystems-thuoc"><strong>6. Drug coding system</strong></h2>

<table>
<thead>
<tr><th>CodeSystem</th><th>Purpose</th><th>Scope</th></tr>
</thead>
<tbody>
<tr><td>ATC (WHO)</td><td>Classification of drugs</td><td>International</td></tr>
<tr><td>RxNorm (NLM)</td><td>Standardized drug name</td><td>United States</td></tr>
<tr><td>SNOMED CT</td><td>Clinical terminology (including drugs)</td><td>International</td></tr>
<tr><td>CVX (CDC)</td><td>Vaccine code</td><td>United States (widely used)</td></tr>
<tr><td>NDC</td><td>National Drug Code</td><td>United States</td></tr>
</tbody>
</table>

<h2 id="7-tong-ket"><strong>7. Summary</strong></h2>

<ul>
<li><p><strong>Medication</strong> — Drug information (ingredients, dosage form)</p></li>
<li><p><strong>MedicationRequest</strong> — Prescription commands (dosage, dispense, substitution)</p></li>
<li><p><strong>MedicationAdministration</strong> — Attribution for actual medicine</p></li>
<li><p><strong>MedicationDispense</strong> — Pharmacist dispenses medicine</p></li>
<li><p><strong>Immunization</strong> — Vaccination with complete vaccine information, dose, lot</p></li>
<li><p>Using CodeSystems: <strong>ATC</strong>, <strong>RxNorm</strong>, <strong>CVX</strong>, <strong>SNOMED CT</strong></p></li>
</ul>
