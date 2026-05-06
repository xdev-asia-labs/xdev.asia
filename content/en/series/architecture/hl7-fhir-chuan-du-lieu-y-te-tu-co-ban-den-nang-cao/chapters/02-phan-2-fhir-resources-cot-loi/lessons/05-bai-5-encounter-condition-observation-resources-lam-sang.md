---
id: 019e0a10-a202-7001-d001-f1a7f8000202
title: 'Lesson 5: Encounter, Condition, Observation - Clinical Resources'
slug: bai-5-encounter-condition-observation-resources-lam-sang
description: >-
  Resource Encounter (visits, hospitalizations), Condition (diagnosis, health
  problems), Observation (vital signs, lab results, social history). How to link
  Resources together through References, Observation categories, Condition
  staging.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 2: Core FHIR Resources'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Basic to Advanced Healthcare Data Standard
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4004" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4004)"/>

  <!-- Decorations -->
  <g>
    <circle cx="660" cy="130" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="780" cy="110" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="230" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="230" x2="1100" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="260" x2="1050" y2="330" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.650635094611,167.5 1001.650635094611,192.5 980,205 958.349364905389,192.5 958.349364905389,167.5 980,155" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ Architecture — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 5: Encounter, Condition, Observation -</tspan>
      <tspan x="60" dy="42">Clinical Resources</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Basic to Advanced Healthcare Data Standard</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Core FHIR Resources</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-encounter-resource"><strong>1. Encounter Resource — Visits / Hospitalizations</strong></h2>

<p><strong>Encounter</strong> describes an interaction between a patient and a healthcare provider — from outpatient visits, to hospitalizations, to emergency rooms, to telehealth.</p>

<h3 id="encounter-structure"><strong>Encounter structure</strong></h3>

<table>
<thead>
<tr><th>Element</th><th>Cardinality</th><th>Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>status. status</td><td>1..1</td><td>code</td><td>planned | in-progress | on-hold | discharged | completed | canceled | entered-in-error</td></tr>
<tr><td>class. class</td><td>1..*</td><td>CodeableConcept</td><td>AMB (outpatient) | IMP (inpatient) | EMER (emergency) | VR (telehealth)</td></tr>
<tr><td>type</td><td>0..*</td><td>CodeableConcept</td><td>Specific type of examination</td></tr>
<tr><td>priority. priority</td><td>0..1</td><td>CodeableConcept</td><td>Priority level</td></tr>
<tr><td>subject. subject</td><td>1..1</td><td>Reference(Patient)</td><td>Patient</td></tr>
<tr><td>participant. participant</td><td>0..*</td><td>BackboneElement</td><td>Doctors and nurses participate</td></tr>
<tr><td>period. period</td><td>0..1</td><td>Period</td><td>Start time - end time</td></tr>
<tr><td>reason. reason</td><td>0..*</td><td>BackboneElement</td><td>Reason for examination</td></tr>
<tr><td>diagnosis. diagnosis</td><td>0..*</td><td>BackboneElement</td><td>Diagnosis is tied to the visit</td></tr>
<tr><td>admission. admission</td><td>0..1</td><td>BackboneElement</td><td>Admission details (preAdmission, admissionSource, dischargeDisposition)</td></tr>
<tr><td>location. location</td><td>0..*</td><td>BackboneElement</td><td>Room/ward/bed</td></tr>
<tr><td>serviceProvider</td><td>0..1</td><td>Reference(Organization)</td><td>Medical facility</td></tr>
</tbody>
</table>

<h3 id="encounter-example"><strong>For example: Outpatient Encounter</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Encounter",
  "id": "encounter-outpatient-001",
  "status": "completed",
  "class": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "AMB",
          "display": "ambulatory"
        }
      ]
    }
  ],
  "type": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "185349003",
          "display": "Encounter for check up"
        }
      ],
      "text": "Khám sức khỏe tổng quát"
    }
  ],
  "subject": {
    "reference": "Patient/patient-001",
    "display": "Nguyễn Văn A"
  },
  "participant": [
    {
      "type": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              "code": "ATND",
              "display": "attender"
            }
          ]
        }
      ],
      "actor": {
        "reference": "Practitioner/practitioner-001",
        "display": "BS. Trần Thị B"
      }
    }
  ],
  "period": {
    "start": "2025-01-15T08:00:00+07:00",
    "end": "2025-01-15T08:45:00+07:00"
  },
  "reason": [
    {
      "use": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/encounter-reason-use",
            "code": "CC",
            "display": "Chief Complaint"
          }
        ]
      },
      "value": [
        {
          "concept": {
            "text": "Đau đầu và mệt mỏi kéo dài 2 tuần"
          }
        }
      ]
    }
  ],
  "serviceProvider": {
    "reference": "Organization/org-bvdk-001",
    "display": "Bệnh viện Đa khoa Trung ương"
  }
}
</code></pre>

<h3 id="encounter-noi-tru"><strong>For example: Encounter is hospitalized</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Encounter",
  "id": "encounter-inpatient-001",
  "status": "in-progress",
  "class": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          "code": "IMP",
          "display": "inpatient encounter"
        }
      ]
    }
  ],
  "subject": {
    "reference": "Patient/patient-002"
  },
  "period": {
    "start": "2025-01-10T14:30:00+07:00"
  },
  "admission": {
    "admitSource": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/admit-source",
          "code": "emd",
          "display": "From accident/emergency department"
        }
      ]
    },
    "preAdmissionIdentifier": {
      "system": "http://bvdk.vn/pre-admit",
      "value": "PA-20250110-001"
    }
  },
  "location": [
    {
      "location": {
        "reference": "Location/loc-cardiology-bed-12",
        "display": "Khoa Tim mạch - Giường 12"
      },
      "status": "active",
      "period": {
        "start": "2025-01-10T15:00:00+07:00"
      }
    }
  ],
  "diagnosis": [
    {
      "condition": [
        {
          "reference": {
            "reference": "Condition/cond-001"
          }
        }
      ],
      "use": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/diagnosis-role",
              "code": "AD",
              "display": "Admission diagnosis"
            }
          ]
        }
      ]
    }
  ]
}
</code></pre>

<h2 id="2-condition-resource"><strong>2. Condition Resource — Diagnosis / Health Problem</strong></h2>

<p><strong>Condition</strong> records the patient's diagnosis, health problem, or medical condition.</p>

<h3 id="condition-structure"><strong>Condition structure</strong></h3>

<table>
<thead>
<tr><th>Element</th><th>Cardinality</th><th>Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>clinicalStatus</td><td>0..1</td><td>CodeableConcept</td><td>active | recurrence | relapse | inactive | remission | resolved. resolved</td></tr>
<tr><td>verificationStatus</td><td>0..1</td><td>CodeableConcept</td><td>unconfirmed | provisional | differential | confirmed | refuted | entered-in-error</td></tr>
<tr><td>category. category</td><td>0..*</td><td>CodeableConcept</td><td>problem-list-item | encounter-diagnosis</td></tr>
<tr><td>severity</td><td>0..1</td><td>CodeableConcept</td><td>Severity (SNOMED CT)</td></tr>
<tr><td>code</td><td>1..1</td><td>CodeableConcept</td><td>Diagnosis codes (ICD-10, SNOMED CT)</td></tr>
<tr><td>bodySite</td><td>0..*</td><td>CodeableConcept</td><td>Body position</td></tr>
<tr><td>subject. subject</td><td>1..1</td><td>Reference(Patient)</td><td>Patient</td></tr>
<tr><td>encounter. encounter</td><td>0..1</td><td>Reference(Encounter)</td><td>Related visits</td></tr>
<tr><td>onset[x]</td><td>0..1</td><td>dateTime | Age | Period | Range | string.string</td><td>Onset time</td></tr>
<tr><td>abatement[x]</td><td>0..1</td><td>dateTime | Age | Period | Range | string.string</td><td>Time of remission</td></tr>
<tr><td>stage. stage</td><td>0..*</td><td>BackboneElement</td><td>Disease stage</td></tr>
</tbody>
</table>

<h3 id="condition-example"><strong>For example: Diagnosis of Hypertension</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Condition",
  "id": "cond-hypertension-001",
  "clinicalStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
        "code": "active"
      }
    ]
  },
  "verificationStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        "code": "confirmed"
      }
    ]
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-category",
          "code": "encounter-diagnosis",
          "display": "Encounter Diagnosis"
        }
      ]
    }
  ],
  "severity": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "24484000",
        "display": "Severe"
      }
    ]
  },
  "code": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/sid/icd-10",
        "code": "I10",
        "display": "Essential (primary) hypertension"
      },
      {
        "system": "http://snomed.info/sct",
        "code": "38341003",
        "display": "Hypertensive disorder"
      }
    ],
    "text": "Tăng huyết áp nguyên phát"
  },
  "subject": {
    "reference": "Patient/patient-001",
    "display": "Nguyễn Văn A"
  },
  "encounter": {
    "reference": "Encounter/encounter-outpatient-001"
  },
  "onsetDateTime": "2024-06-15",
  "recordedDate": "2025-01-15"
}
</code></pre>

<h3 id="condition-staging"><strong>Condition Staging (Cancer)</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Condition",
  "id": "cond-cancer-001",
  "code": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/sid/icd-10",
        "code": "C34.1",
        "display": "Malignant neoplasm of upper lobe, bronchus or lung"
      }
    ],
    "text": "Ung thư phổi thùy trên"
  },
  "subject": {
    "reference": "Patient/patient-003"
  },
  "stage": [
    {
      "summary": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "258219007",
            "display": "Stage 2"
          }
        ]
      },
      "type": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "260998006",
            "display": "Clinical staging (qualifier value)"
          }
        ]
      }
    }
  ]
}
</code></pre>

<h2 id="3-observation-resource"><strong>3. Observation Resource — Observation results</strong></h2>

<p><strong>Observation</strong> is the most versatile resource in FHIR — for vital signs, lab results, social history, surveys, imaging measurements, and clinical assessments.</p>

<h3 id="observation-categories"><strong>Observation Categories</strong></h3>

<table>
<thead>
<tr><th>Category</th><th>Description</th><th>For example</th></tr>
</thead>
<tbody>
<tr><td>vital-signs</td><td>Signs of vitality</td><td>Blood pressure, heart rate, SpO2, temperature</td></tr>
<tr><td>laboratory</td><td>Test results</td><td>HbA1c, glucose, CBC, lipid panel</td></tr>
<tr><td>imaging. imaging</td><td>Image results</td><td>Tumor size</td></tr>
<tr><td>social-history</td><td>Social history</td><td>Smoking, drinking alcohol</td></tr>
<tr><td>survey. survey</td><td>Survey table</td><td>PHQ-9 (depression), VAS (pain)</td></tr>
<tr><td>exam. exam</td><td>Clinical examination</td><td>Weight, height</td></tr>
</tbody>
</table>

<h3 id="vital-signs-example"><strong>For example: Vital Signs — Blood pressure</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Observation",
  "id": "obs-bp-001",
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "vital-signs",
          "display": "Vital Signs"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "85354-9",
        "display": "Blood pressure panel with all children optional"
      }
    ],
    "text": "Huyết áp"
  },
  "subject": {
    "reference": "Patient/patient-001"
  },
  "encounter": {
    "reference": "Encounter/encounter-outpatient-001"
  },
  "effectiveDateTime": "2025-01-15T08:15:00+07:00",
  "performer": [
    {
      "reference": "Practitioner/practitioner-002",
      "display": "ĐD. Lê Thị C"
    }
  ],
  "component": [
    {
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "8480-6",
            "display": "Systolic blood pressure"
          }
        ]
      },
      "valueQuantity": {
        "value": 145,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      },
      "interpretation": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
              "code": "H",
              "display": "High"
            }
          ]
        }
      ]
    },
    {
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "8462-4",
            "display": "Diastolic blood pressure"
          }
        ]
      },
      "valueQuantity": {
        "value": 92,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      },
      "interpretation": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
              "code": "H",
              "display": "High"
            }
          ]
        }
      ]
    }
  ]
}
</code></pre>

<h3 id="lab-result"><strong>For example: Lab Result — HbA1c</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Observation",
  "id": "obs-hba1c-001",
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "laboratory"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "4548-4",
        "display": "Hemoglobin A1c/Hemoglobin.total in Blood"
      }
    ],
    "text": "HbA1c"
  },
  "subject": {
    "reference": "Patient/patient-001"
  },
  "effectiveDateTime": "2025-01-15",
  "valueQuantity": {
    "value": 7.2,
    "unit": "%",
    "system": "http://unitsofmeasure.org",
    "code": "%"
  },
  "referenceRange": [
    {
      "low": {
        "value": 4.0,
        "unit": "%"
      },
      "high": {
        "value": 5.6,
        "unit": "%"
      },
      "text": "Bình thường: 4.0 - 5.6%"
    }
  ],
  "interpretation": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          "code": "H",
          "display": "High"
        }
      ],
      "text": "Cao — Gợi ý đái tháo đường kiểm soát chưa tốt"
    }
  ]
}
</code></pre>

<h2 id="4-lien-ket-resources"><strong>4. Link Resources via References</strong></h2>

<pre><code>
Patient ──────────────────┐
  │                        │
  ▼                        ▼
Encounter ──────────────▶ Condition
  │         diagnosis       │
  │                         │ evidence
  ▼                         ▼
Observation ◀──────────── Observation
(vital signs)              (lab results)
</code></pre>

<p>All clinical Resources are linked together via <strong>Reference</strong>. Encounter contains reference to Patient, Condition is attached to Encounter via element <code>encounter. encounter</code>, Observation references both Patient, Encounter, and can refer to Condition.</p>

<h2 id="5-tong-ket"><strong>5. Summary</strong></h2>

<ul>
<li><p><strong>Encounter</strong> — Description of interactions (outpatient visit, hospital admission, emergency room, telehealth)</p></li>
<li><p><strong>Condition</strong> — Diagnose the disease with ICD-10/SNOMED CT, staging, severity</p></li>
<li><p><strong>Observation</strong> — Most flexible resource: vital signs (LOINC), lab results, social history</p></li>
<li><p><strong>References</strong> — Links create a complete clinical data network</p></li>
</ul>
