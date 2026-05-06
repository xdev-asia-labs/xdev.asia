---
id: 019e0a10-a203-7001-d001-f1a7f8000203
title: 'レッスン 6: 投薬、投薬リクエスト、予防接種 - 医薬品リソース'
slug: bai-6-medication-medicationrequest-immunization-resources-thuoc
description: >-
  FHIR での薬剤管理: Medication、MedicationRequest
  (処方箋)、MedicationAdministration、MedicationDispense、MedicationStatement。予防接種
  (ワクチン接種)、薬剤コードシステム (RxNorm、ATC) にリンクされています。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 'パート 2: コア FHIR リソース'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ アーキテクチャ — レッスン 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 6: 投薬、投薬リクエスト、</tspan>
      <tspan x="60" dy="42">予防接種 - 医薬品リソース</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: コア FHIR リソース</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-medication-workflow"><strong>1. FHIR での投薬ワークフロー</strong></h2>

<p>FHIR は、処方から調剤、投与に至る投薬プロセス全体を説明する一連のリソースを提供します。</p>

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

<h2 id="2-medication-resource"><strong>2. 医薬品リソース</strong></h2>

<p><strong>薬</strong> 薬に関する情報（名前、成分、剤形、製造元）を説明します。</p>

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

<h2 id="3-medicationrequest"><strong>3. MedicationRequest — 処方箋</strong></h2>

<p><strong>投薬依頼</strong> (以前は MedicationOrder として知られていました) は、薬の処方箋の注文を記録します。</p>

<h3 id="medicationrequest-structure"><strong>重要な要素</strong></h3>

<table>
<thead>
<tr><th>要素</th><th>カーディナリティ</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>ステータス。ステータス</td><td>1..1</td><td>アクティブ |保留中 |終了しました |停止しました |完了しました |キャンセルされました |下書き。ドラフト</td></tr>
<tr><td>意図。意図</td><td>1..1</td><td>提案 |計画 |注文 |オリジナルオーダー |反射順序 |フィラーオーダー |インスタンスの順序 |オプション。オプション</td></tr>
<tr><td>薬。薬。薬</td><td>1..1</td><td>リファレンス(医薬品)またはCodeableConcept</td></tr>
<tr><td>主題。件名</td><td>1..1</td><td>参考人（患者）</td></tr>
<tr><td>出会い。出会い</td><td>0..1</td><td>リファレンス(出会い)</td></tr>
<tr><td>依頼者</td><td>0..1</td><td>参考人（開業医）</td></tr>
<tr><td>用量指示</td><td>0..*</td><td>投与量の指示</td></tr>
<tr><td>ディスペンスリクエスト</td><td>0..1</td><td>調剤要件（数量、補充、有効期限）</td></tr>
<tr><td>置換</td><td>0..1</td><td>薬物の代替品は許可されていますか?</td></tr>
</tbody>
</table>

<h3 id="medicationrequest-example"><strong>例：血圧処方箋</strong></h3>

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

<h2 id="4-medicationadministration"><strong>4. 投薬管理</strong></h2>

<p>実際の投薬管理（入院患者に投薬/注射を行う看護師）を記録します。</p>

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

<h2 id="5-immunization"><strong>5. 予防接種 – ワクチン接種</strong></h2>

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

<h2 id="6-codesystems-thuoc"><strong>6. 薬物コード体系</strong></h2>

<table>
<thead>
<tr><th>コードシステム</th><th>目的</th><th>範囲</th></tr>
</thead>
<tbody>
<tr><td>ATC (WHO)</td><td>医薬品の分類</td><td>インターナショナル</td></tr>
<tr><td>RxNorm (NLM)</td><td>統一された薬剤名</td><td>米国</td></tr>
<tr><td>SNOMED CT</td><td>臨床用語（医薬品を含む）</td><td>インターナショナル</td></tr>
<tr><td>CVX (CDC)</td><td>ワクチンコード</td><td>米国 (広く使用されている)</td></tr>
<tr><td>NDC</td><td>国家医薬品法</td><td>米国</td></tr>
</tbody>
</table>

<h2 id="7-tong-ket"><strong>7. まとめ</strong></h2>

<ul>
<li><p><strong>薬</strong> — 医薬品情報（成分、剤形）</p></li>
<li><p><strong>投薬依頼</strong> — 処方コマンド (投与量、調剤、代替品)</p></li>
<li><p><strong>薬の管理</strong> — 実際の医学の帰属</p></li>
<li><p><strong>薬を調剤する</strong> — 薬剤師が薬を調剤する</p></li>
<li><p><strong>予防接種</strong> — 完全なワクチン情報、用量、ロットを含む予防接種</p></li>
<li><p>コードシステムの使用: <strong>ATC</strong>、 <strong>RxNorm</strong>、 <strong>CVX</strong>、 <strong>SNOMED CT</strong></p></li>
</ul>
