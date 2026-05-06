---
id: 019e0a10-a203-7001-d001-f1a7f8000203
title: 第 6 課：藥物治療、藥物請求、免疫接種 - 藥物資源
slug: bai-6-medication-medicationrequest-immunization-resources-thuoc
description: FHIR 中的藥物管理：藥物、藥物請求（處方）、藥物管理、藥物分配、藥物聲明。免疫（疫苗接種），與藥物代碼系統（RxNorm、ATC）相連。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 第 2 部分：FHIR 核心資源
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ 建築 — 第 6 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：藥物治療、藥物請求、</tspan>
      <tspan x="60" dy="42">免疫 - 藥物資源</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：FHIR 核心資源</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-medication-workflow"><strong>1. FHIR 中的用藥工作流程</strong></h2>

<p>FHIR 提供了一系列資源來描述從處方到配藥和管理的整個用藥過程。</p>

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

<h2 id="2-medication-resource"><strong>2. 藥物資源</strong></h2>

<p><strong>藥物治療</strong> 描述有關藥物的資訊：名稱、成分、劑型、製造商。</p>

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

<h2 id="3-medicationrequest"><strong>3. 藥物請求－處方</strong></h2>

<p><strong>藥物請求</strong> （以前稱為 MemedicationOrder）記錄藥物處方單。</p>

<h3 id="medicationrequest-structure"><strong>重要元素</strong></h3>

<table>
<thead>
<tr><th>元素</th><th>基數</th><th>描述</th></tr>
</thead>
<tbody>
<tr><td>狀態。狀態</td><td>1..1</td><td>活躍 |等待 |結束 |停止|已完成 |取消 |草稿。草案</td></tr>
<tr><td>意圖。意圖</td><td>1..1</td><td>提案|計劃|訂單|原始訂單 |反射順序 |填充順序 |實例順序 |選項。選項</td></tr>
<tr><td>藥物治療。藥物。藥物治療</td><td>1..1</td><td>參考（藥物）或 CodeableConcept</td></tr>
<tr><td>主題。主題</td><td>1..1</td><td>參考（患者）</td></tr>
<tr><td>相遇。遭遇</td><td>0..1</td><td>參考（遭遇）</td></tr>
<tr><td>請求者</td><td>0..1</td><td>參考（從業者）</td></tr>
<tr><td>用量說明</td><td>0..*</td><td>劑量說明</td></tr>
<tr><td>分配請求</td><td>0..1</td><td>配藥要求（數量、補充量、有效期限）</td></tr>
<tr><td>替代</td><td>0..1</td><td>是否允許藥物替代？</td></tr>
</tbody>
</table>

<h3 id="medicationrequest-example"><strong>例：血壓處方</strong></h3>

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

<h2 id="4-medicationadministration"><strong>4. 用藥管理</strong></h2>

<p>記錄實際用藥情況（護理師為住院病人用藥/注射）。</p>

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

<h2 id="5-immunization"><strong>5. 免疫－疫苗接種</strong></h2>

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

<h2 id="6-codesystems-thuoc"><strong>6.藥品編碼系統</strong></h2>

<table>
<thead>
<tr><th>編碼系統</th><th>目的</th><th>適用範圍</th></tr>
</thead>
<tbody>
<tr><td>空中交通管制（世界衛生組織）</td><td>藥品分類</td><td>國際</td></tr>
<tr><td>RxNorm (NLM)</td><td>標準化藥品名稱</td><td>美國</td></tr>
<tr><td>斯諾梅德CT</td><td>臨床術語（包括藥物）</td><td>國際</td></tr>
<tr><td>CVX（疾病預防控制中心）</td><td>疫苗代碼</td><td>美國（廣泛使用）</td></tr>
<tr><td>國家資料中心</td><td>國家藥品法規</td><td>美國</td></tr>
</tbody>
</table>

<h2 id="7-tong-ket"><strong>七、總結</strong></h2>

<ul>
<li><p><strong>藥物治療</strong> — 藥品資訊（成分、劑型）</p></li>
<li><p><strong>藥物請求</strong> — 處方命令（劑量、分配、替代）</p></li>
<li><p><strong>藥物管理</strong> — 實際醫學的歸屬</p></li>
<li><p><strong>藥物分配</strong> — 藥劑師配藥</p></li>
<li><p><strong>免疫接種</strong> — 疫苗接種，包含完整的疫苗資訊、劑量、批次</p></li>
<li><p>使用代碼系統： <strong>空中交通管制</strong>, <strong>接收標準</strong>, <strong>CVX</strong>, <strong>斯諾梅德CT</strong></p></li>
</ul>
