---
id: 019e0a10-a704-7001-d001-f1a7f8000704
title: 'Bài 25: Tương lai FHIR — R6, AI/ML, Genomics và Xu hướng mới'
slug: bai-25-tuong-lai-fhir-r6-ai-ml-genomics-va-xu-huong-moi
description: >-
  FHIR R6 roadmap, FHIR và AI/ML (CDS Hooks, inference), Genomics
  (MolecularSequence, DiagnosticReport Genetics), FHIR Bulk Data,
  SMART Health Cards, FHIR cho IoT/Wearables, PHR, tương lai y tế số.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 25
section_title: "Phần 7: Production, Quy mô và Tương lai"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-fhir-r6-roadmap"><strong>1. FHIR R6 Roadmap</strong></h2>

<p>FHIR R5 (2023) là phiên bản normative hiện tại. R6 đang được phát triển với nhiều cải tiến.</p>

<table>
<thead>
<tr><th>Phiên bản</th><th>Năm</th><th>Trạng thái</th></tr>
</thead>
<tbody>
<tr><td>DSTU 1</td><td>2014</td><td>Legacy</td></tr>
<tr><td>DSTU 2</td><td>2015</td><td>Legacy</td></tr>
<tr><td>STU 3</td><td>2017</td><td>Legacy</td></tr>
<tr><td>R4</td><td>2019</td><td>Normative (được dùng rộng rãi nhất)</td></tr>
<tr><td>R4B</td><td>2022</td><td>Normative</td></tr>
<tr><td>R5</td><td>2023</td><td>Normative (hiện tại)</td></tr>
<tr><td>R6</td><td>~2026</td><td>Đang phát triển</td></tr>
</tbody>
</table>

<h3 id="r6-expected"><strong>Dự kiến R6 sẽ có</strong></h3>

<ul>
<li><strong>Improved Subscriptions</strong> — Topic-based subscriptions hoàn thiện hơn</li>
<li><strong>Enhanced search</strong> — Composite search parameters, GraphQL improvements</li>
<li><strong>AI/ML integration</strong> — Standardized resources cho model inference</li>
<li><strong>Device/IoT</strong> — Cải thiện resource cho medical devices, wearables</li>
<li><strong>Cross-version compatibility</strong> — Tooling tốt hơn cho version migration</li>
<li><strong>Performance</strong> — Binary resource streaming, pagination improvements</li>
</ul>

<h2 id="2-fhir-va-ai-ml"><strong>2. FHIR và AI/ML</strong></h2>

<h3 id="cds-hooks-ai"><strong>CDS Hooks + AI — Clinical Decision Support</strong></h3>

<pre><code class="language-text">┌──────────┐    CDS Hook     ┌──────────────┐     ┌──────────┐
│   EHR    │───────────────▶│   CDS Server  │────▶│  AI/ML   │
│ (trigger │    prefetch     │  (mediator)   │     │  Model   │
│  event)  │◀───────────────│               │◀────│(TF/PyTorch)│
└──────────┘    CDS Card     └──────────────┘     └──────────┘
</code></pre>

<pre><code class="language-json">// CDS Hook request: patient-view → AI risk prediction
{
  "hook": "patient-view",
  "hookInstance": "abc-123",
  "context": {
    "userId": "Practitioner/practitioner-001",
    "patientId": "patient-001"
  },
  "prefetch": {
    "patient": {
      "resourceType": "Patient",
      "id": "patient-001",
      "gender": "male",
      "birthDate": "1960-05-15"
    },
    "conditions": {
      "resourceType": "Bundle",
      "entry": [
        {
          "resource": {
            "resourceType": "Condition",
            "code": {"coding": [{"system": "http://snomed.info/sct", "code": "44054006", "display": "Diabetes mellitus type 2"}]}
          }
        }
      ]
    },
    "observations": {
      "resourceType": "Bundle",
      "entry": [
        {
          "resource": {
            "resourceType": "Observation",
            "code": {"coding": [{"system": "http://loinc.org", "code": "4548-4", "display": "HbA1c"}]},
            "valueQuantity": {"value": 8.5, "unit": "%"}
          }
        }
      ]
    }
  }
}
</code></pre>

<pre><code class="language-json">// CDS Response: AI prediction card
{
  "cards": [
    {
      "summary": "Nguy cơ biến chứng tim mạch cao",
      "detail": "AI model dự đoán nguy cơ biến chứng tim mạch trong 5 năm: **42%** (dựa trên HbA1c 8.5%, ĐTĐ type 2, nam, 64 tuổi). Khuyến nghị tăng cường kiểm soát HbA1c < 7%.",
      "indicator": "warning",
      "source": {
        "label": "Cardiovascular Risk AI Model v2.1",
        "url": "https://ai.hospital.vn/models/cv-risk"
      },
      "suggestions": [
        {
          "label": "Tạo y lệnh xét nghiệm Lipid Panel",
          "actions": [
            {
              "type": "create",
              "resource": {
                "resourceType": "ServiceRequest",
                "status": "draft",
                "intent": "proposal",
                "code": {"coding": [{"system": "http://loinc.org", "code": "24331-1", "display": "Lipid Panel"}]},
                "subject": {"reference": "Patient/patient-001"}
              }
            }
          ]
        }
      ]
    }
  ]
}
</code></pre>

<h3 id="fhir-ml-pipeline"><strong>FHIR → ML Pipeline</strong></h3>

<pre><code class="language-python"># Extract FHIR data → Train ML model
import requests
import pandas as pd
from sklearn.ensemble import GradientBoostingClassifier

FHIR_BASE = "http://localhost:8080/fhir"

def extract_training_data():
    """Trích xuất dữ liệu từ FHIR Server cho ML training"""
    
    # Bulk export
    patients_bundle = requests.get(
        f"{FHIR_BASE}/Patient?_count=1000"
    ).json()
    
    records = []
    for entry in patients_bundle.get("entry", []):
        patient = entry["resource"]
        pid = patient["id"]
        
        # Lấy Observations
        obs_bundle = requests.get(
            f"{FHIR_BASE}/Observation?subject=Patient/{pid}&code=4548-4"
        ).json()
        
        # Lấy Conditions
        cond_bundle = requests.get(
            f"{FHIR_BASE}/Condition?subject=Patient/{pid}"
        ).json()
        
        record = {
            "patient_id": pid,
            "age": calculate_age(patient.get("birthDate")),
            "gender": 1 if patient.get("gender") == "male" else 0,
            "hba1c": extract_latest_value(obs_bundle),
            "diabetes": has_condition(cond_bundle, "44054006"),
            "hypertension": has_condition(cond_bundle, "38341003"),
        }
        records.append(record)
    
    return pd.DataFrame(records)

# Train model
df = extract_training_data()
X = df[["age", "gender", "hba1c", "diabetes", "hypertension"]]
y = df["cv_event_5yr"]  # label từ follow-up data

model = GradientBoostingClassifier()
model.fit(X, y)
</code></pre>

<h2 id="3-genomics"><strong>3. FHIR Genomics</strong></h2>

<p>FHIR hỗ trợ dữ liệu genomics qua các resources chuyên biệt:</p>

<table>
<thead>
<tr><th>Resource</th><th>Mục đích</th></tr>
</thead>
<tbody>
<tr><td>MolecularSequence</td><td>Trình tự DNA/RNA/Protein</td></tr>
<tr><td>Observation (Genetics)</td><td>Kết quả xét nghiệm di truyền</td></tr>
<tr><td>DiagnosticReport (Genetics)</td><td>Báo cáo xét nghiệm gen</td></tr>
<tr><td>RiskAssessment</td><td>Đánh giá nguy cơ di truyền</td></tr>
</tbody>
</table>

<pre><code class="language-json">{
  "resourceType": "Observation",
  "meta": {
    "profile": ["http://hl7.org/fhir/StructureDefinition/observation-genetics"]
  },
  "status": "final",
  "category": [
    {
      "coding": [
        {"system": "http://terminology.hl7.org/CodeSystem/observation-category", "code": "laboratory"}
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "69548-6",
        "display": "Genetic variant assessment"
      }
    ]
  },
  "subject": {"reference": "Patient/patient-001"},
  "valueCodeableConcept": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "LA6703-8",
        "display": "Heterozygous"
      }
    ]
  },
  "component": [
    {
      "code": {
        "coding": [{"system": "http://loinc.org", "code": "48018-6", "display": "Gene studied"}]
      },
      "valueCodeableConcept": {
        "coding": [
          {"system": "http://www.genenames.org", "code": "HGNC:1100", "display": "BRCA1"}
        ]
      }
    },
    {
      "code": {
        "coding": [{"system": "http://loinc.org", "code": "81252-9", "display": "Discrete genetic variant"}]
      },
      "valueCodeableConcept": {
        "coding": [
          {"system": "http://www.ncbi.nlm.nih.gov/clinvar", "code": "37153", "display": "NM_007294.4(BRCA1):c.5266dupC"}
        ]
      }
    }
  ]
}
</code></pre>

<h2 id="4-iot-wearables"><strong>4. FHIR cho IoT và Wearables</strong></h2>

<pre><code class="language-text">┌──────────────┐    BLE/WiFi    ┌──────────────┐    FHIR API    ┌──────────────┐
│  Wearable    │──────────────▶│  Mobile App  │──────────────▶│ FHIR Server  │
│  (Apple Watch│               │  (HealthKit) │               │              │
│   Mi Band)   │               │              │               │              │
└──────────────┘               └──────────────┘               └──────────────┘
</code></pre>

<pre><code class="language-json">{
  "resourceType": "Observation",
  "status": "final",
  "category": [
    {
      "coding": [
        {"system": "http://terminology.hl7.org/CodeSystem/observation-category", "code": "vital-signs"}
      ]
    }
  ],
  "code": {
    "coding": [
      {"system": "http://loinc.org", "code": "8867-4", "display": "Heart rate"}
    ]
  },
  "subject": {"reference": "Patient/patient-001"},
  "effectiveDateTime": "2025-01-15T10:30:00+07:00",
  "valueQuantity": {
    "value": 72,
    "unit": "beats/minute",
    "system": "http://unitsofmeasure.org",
    "code": "/min"
  },
  "device": {
    "reference": "Device/apple-watch-001",
    "display": "Apple Watch Series 9"
  },
  "method": {
    "coding": [
      {"system": "http://snomed.info/sct", "code": "258104002", "display": "Measured"}
    ]
  }
}
</code></pre>

<h2 id="5-smart-health-cards"><strong>5. SMART Health Cards</strong></h2>

<p><strong>SMART Health Cards (SHC)</strong> — Verifiable credentials cho y tế (vaccine, xét nghiệm).</p>

<ul>
<li>Sử dụng FHIR Bundle bên trong JWT (JWS compact)</li>
<li>QR code chứa thẻ — offline verifiable</li>
<li>Được dùng rộng rãi cho COVID-19 vaccine records (SMART Health Cards Framework)</li>
</ul>

<pre><code class="language-text">SHC QR Code → JWT → FHIR Bundle:
{
  "resourceType": "Bundle",
  "type": "collection",
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "name": [{"family": "Nguyen", "given": ["Van A"]}],
        "birthDate": "1990-05-15"
      }
    },
    {
      "resource": {
        "resourceType": "Immunization",
        "status": "completed",
        "vaccineCode": {
          "coding": [{"system": "http://hl7.org/fhir/sid/cvx", "code": "208", "display": "COVID-19 mRNA"}]
        },
        "occurrenceDateTime": "2024-03-15",
        "lotNumber": "EN6207",
        "performer": [{"actor": {"display": "TTYT Quận 1"}}]
      }
    }
  ]
}
</code></pre>

<h2 id="6-phr"><strong>6. Personal Health Record (PHR)</strong></h2>

<p>PHR cho phép bệnh nhân <strong>tự quản lý</strong> hồ sơ sức khỏe. FHIR Patient Access API là nền tảng.</p>

<table>
<thead>
<tr><th>Tính năng PHR</th><th>FHIR API</th></tr>
</thead>
<tbody>
<tr><td>Xem hồ sơ y tế</td><td>Patient/$everything</td></tr>
<tr><td>Kết quả xét nghiệm</td><td>Observation?patient=X</td></tr>
<tr><td>Đơn thuốc</td><td>MedicationRequest?patient=X</td></tr>
<tr><td>Lịch hẹn</td><td>Appointment?patient=X</td></tr>
<tr><td>Chia sẻ với BS mới</td><td>IPS Document</td></tr>
<tr><td>Từ wearable</td><td>POST Observation (vital signs)</td></tr>
</tbody>
</table>

<h2 id="7-xu-huong"><strong>7. Xu hướng mới</strong></h2>

<table>
<thead>
<tr><th>Xu hướng</th><th>Mô tả</th><th>FHIR support</th></tr>
</thead>
<tbody>
<tr><td>AI Clinical Copilot</td><td>LLM hỗ trợ bác sĩ ra quyết định</td><td>CDS Hooks + SMART App</td></tr>
<tr><td>Precision Medicine</td><td>Điều trị cá nhân hóa dựa trên genetics</td><td>Genomics resources</td></tr>
<tr><td>Telemedicine</td><td>Khám bệnh từ xa</td><td>Encounter (virtual), Communication</td></tr>
<tr><td>Federated Learning</td><td>Train AI trên data tại chỗ, không tập trung</td><td>Bulk Data + local inference</td></tr>
<tr><td>Blockchain + FHIR</td><td>Immutable audit trail</td><td>AuditEvent + on-chain hash</td></tr>
<tr><td>FHIR Shorthand (FSH)</td><td>Democratize IG creation</td><td>SUSHI, GoFSH tools</td></tr>
<tr><td>GraphQL for FHIR</td><td>Flexible queries thay thế REST</td><td>$graphql operation</td></tr>
</tbody>
</table>

<h2 id="8-ket-thuc-series"><strong>8. Kết thúc Series</strong></h2>

<p>Qua 25 bài học, chúng ta đã đi qua toàn bộ hành trình FHIR:</p>

<ol>
<li><strong>Phần 1</strong> — Nền tảng: HL7 history, FHIR R5 overview, development environment</li>
<li><strong>Phần 2</strong> — Resources cốt lõi: Patient, Encounter, Condition, Observation, Medication...</li>
<li><strong>Phần 3</strong> — RESTful API: CRUD, Search, Bundle, Transaction</li>
<li><strong>Phần 4</strong> — Data Types, Terminologies, Profiles, Extensions, IGs</li>
<li><strong>Phần 5</strong> — Documents, Messaging, Subscriptions, SMART on FHIR, Security</li>
<li><strong>Phần 6</strong> — Hands-on: HAPI FHIR Server, Client, VN Core IG, EMR/HIS integration</li>
<li><strong>Phần 7</strong> — Production: Performance, VN context, Case Studies, Future</li>
</ol>

<p>FHIR đang thay đổi cách thế giới trao đổi dữ liệu y tế. Với nền tảng kiến thức này, bạn đã sẵn sàng xây dựng hệ thống interoperable cho y tế Việt Nam.</p>

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>

<ul>
<li><p><strong>FHIR R6</strong> — Cải tiến Subscriptions, AI integration, IoT resources</p></li>
<li><p><strong>AI/ML + FHIR</strong> — CDS Hooks cho clinical decision support, ML pipeline từ FHIR data</p></li>
<li><p><strong>Genomics</strong> — MolecularSequence, genetic observations cho precision medicine</p></li>
<li><p><strong>IoT/Wearables</strong> — Apple Watch, Mi Band → Observations → FHIR Server</p></li>
<li><p><strong>SMART Health Cards</strong> — Verifiable health credentials (vaccine, xét nghiệm)</p></li>
<li><p><strong>PHR</strong> — Patient Access API cho tự quản lý hồ sơ sức khỏe</p></li>
</ul>
