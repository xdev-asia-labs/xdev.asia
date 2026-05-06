---
id: 019e0a10-a204-7001-d001-f1a7f8000204
title: 'レッスン 7: 診断レポート、手順、アレルギー不耐症 - 診断リソース'
slug: bai-7-diagnosticreport-procedure-allergyintolerance-resources-chan-doan
description: >-
  DiagnosticReport（検査結果、画像）、Procedure（処置、手術）、AllergyIntolerance（アレルギー）、ServiceRequest（サービスリクエスト）、Specimen（検体）。要件から結果までの診断ワークフロー。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: 'パート 2: コア FHIR リソース'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3623" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3623)"/>

  <!-- Decorations -->
  <g>
    <circle cx="863" cy="99" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="626" cy="122" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="889" cy="145" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="652" cy="168" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="915" cy="191" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="249" x2="1100" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="279" x2="1050" y2="349" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1087.1051177665154,227 1087.1051177665154,271 1049,293 1010.8948822334847,271 1010.8948822334847,227 1049,205" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ アーキテクチャ — レッスン 7</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 7: 診断レポート、手順、</tspan>
      <tspan x="60" dy="42">アレルギー不耐症 - 診断リソース</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: コア FHIR リソース</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-diagnostic-workflow"><strong>1. 診断ワークフロー</strong></h2>

<pre><code>
Bác sĩ yêu cầu         Lấy mẫu          Phòng xét nghiệm     Trả kết quả
      │                    │                    │                    │
      ▼                    ▼                    ▼                    ▼
ServiceRequest ──▶    Specimen ──▶     Observation(s) ──▶  DiagnosticReport
(order)              (bệnh phẩm)       (từng chỉ số)      (báo cáo tổng hợp)
</code></pre>

<h2 id="2-servicerequest"><strong>2. ServiceRequest — サービスリクエスト</strong></h2>

<pre><code class="language-json">{
  "resourceType": "ServiceRequest",
  "id": "sr-cbc-001",
  "status": "completed",
  "intent": "order",
  "category": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "108252007",
          "display": "Laboratory procedure"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "58410-2",
        "display": "Complete blood count (CBC) panel - Blood by Automated count"
      }
    ],
    "text": "Công thức máu toàn phần"
  },
  "subject": {
    "reference": "Patient/patient-001"
  },
  "encounter": {
    "reference": "Encounter/encounter-outpatient-001"
  },
  "authoredOn": "2025-01-15T08:20:00+07:00",
  "requester": {
    "reference": "Practitioner/practitioner-001",
    "display": "BS. Trần Thị B"
  },
  "specimen": [
    {
      "reference": "Specimen/specimen-blood-001"
    }
  ]
}
</code></pre>

<h2 id="3-specimen"><strong>3. 検体 - 患者サンプル</strong></h2>

<pre><code class="language-json">{
  "resourceType": "Specimen",
  "id": "specimen-blood-001",
  "type": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "119297000",
        "display": "Blood specimen"
      }
    ],
    "text": "Mẫu máu tĩnh mạch"
  },
  "subject": {
    "reference": "Patient/patient-001"
  },
  "receivedTime": "2025-01-15T08:30:00+07:00",
  "collection": {
    "collectedDateTime": "2025-01-15T08:25:00+07:00",
    "quantity": {
      "value": 5,
      "unit": "mL"
    },
    "bodySite": {
      "concept": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "49852007",
            "display": "Structure of median cubital vein"
          }
        ],
        "text": "Tĩnh mạch giữa khuỷu tay"
      }
    }
  },
  "container": [
    {
      "device": {
        "concept": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "706050005",
              "display": "EDTA blood collection tube"
            }
          ],
          "text": "Ống EDTA (nắp tím)"
        }
      }
    }
  ]
}
</code></pre>

<h2 id="4-diagnosticreport"><strong>4. DiagnosticReport — 結果をレポートする</strong></h2>

<p><strong>診断レポート</strong> 血液検査、X線画像、超音波、ECGなどの診断結果の総合。</p>

<h3 id="diagnosticreport-structure"><strong>DiagnosticReport の構造</strong></h3>

<table>
<thead>
<tr><th>要素</th><th>カーディナリティ</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>ステータス。ステータス</td><td>1..1</td><td>登録済み |部分的 |予備 |変更されました |最終 |変更された |修正しました |追加 |キャンセルされました |誤って入力されました</td></tr>
<tr><td>カテゴリ。カテゴリ</td><td>0..*</td><td>ラボ |ラッド |パット | ... (レポートタイプ)</td></tr>
<tr><td>コード</td><td>1..1</td><td>テスト/レポートコード (LOINC)</td></tr>
<tr><td>主題。件名</td><td>1..1</td><td>参考人（患者）</td></tr>
<tr><td>出会い。出会い</td><td>0..1</td><td>リファレンス(出会い)</td></tr>
<tr><td>有効[x]</td><td>0..1</td><td>実施時期・期間</td></tr>
<tr><td>発行されました。発行された</td><td>0..1</td><td>結果を返すまでの時間</td></tr>
<tr><td>出演者</td><td>0..*</td><td>実施者・単位</td></tr>
<tr><td>標本。標本</td><td>0..*</td><td>リファレンス(試料)</td></tr>
<tr><td>結果。結果</td><td>0..*</td><td>参照(観察) — 結果インデックス</td></tr>
<tr><td>結論</td><td>0..1</td><td>コメント/結論</td></tr>
<tr><td>メディア。メディア</td><td>0..*</td><td>添付画像</td></tr>
</tbody>
</table>

<h3 id="diagnosticreport-cbc"><strong>例: CBC テスト結果</strong></h3>

<pre><code class="language-json">{
  "resourceType": "DiagnosticReport",
  "id": "dr-cbc-001",
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
          "code": "LAB",
          "display": "Laboratory"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "58410-2",
        "display": "CBC panel - Blood by Automated count"
      }
    ],
    "text": "Công thức máu toàn phần"
  },
  "subject": {
    "reference": "Patient/patient-001"
  },
  "encounter": {
    "reference": "Encounter/encounter-outpatient-001"
  },
  "effectiveDateTime": "2025-01-15T09:00:00+07:00",
  "issued": "2025-01-15T10:30:00+07:00",
  "performer": [
    {
      "reference": "Organization/org-lab-001",
      "display": "Khoa Xét nghiệm - BVĐK TW"
    }
  ],
  "specimen": [
    {
      "reference": "Specimen/specimen-blood-001"
    }
  ],
  "result": [
    {
      "reference": "Observation/obs-wbc-001",
      "display": "WBC: 8.5 x10^9/L"
    },
    {
      "reference": "Observation/obs-rbc-001",
      "display": "RBC: 4.8 x10^12/L"
    },
    {
      "reference": "Observation/obs-hgb-001",
      "display": "Hemoglobin: 14.2 g/dL"
    },
    {
      "reference": "Observation/obs-plt-001",
      "display": "Platelets: 250 x10^9/L"
    }
  ],
  "conclusion": "Công thức máu trong giới hạn bình thường. Không phát hiện bất thường."
}
</code></pre>

<h2 id="5-procedure"><strong>5. 手順 — 手順/手術</strong></h2>

<pre><code class="language-json">{
  "resourceType": "Procedure",
  "id": "proc-appendectomy-001",
  "status": "completed",
  "category": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "387713003",
          "display": "Surgical procedure"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "80146002",
        "display": "Appendectomy"
      },
      {
        "system": "http://www.ama-assn.org/go/cpt",
        "code": "44970",
        "display": "Laparoscopic appendectomy"
      }
    ],
    "text": "Cắt ruột thừa nội soi"
  },
  "subject": {
    "reference": "Patient/patient-004"
  },
  "encounter": {
    "reference": "Encounter/encounter-inpatient-002"
  },
  "occurrencePeriod": {
    "start": "2025-01-14T14:00:00+07:00",
    "end": "2025-01-14T15:30:00+07:00"
  },
  "performer": [
    {
      "function": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "304292004",
            "display": "Surgeon"
          }
        ]
      },
      "actor": {
        "reference": "Practitioner/practitioner-surgeon-001",
        "display": "BS. Phạm Quốc D"
      }
    }
  ],
  "reason": [
    {
      "reference": {
        "reference": "Condition/cond-appendicitis-001",
        "display": "Viêm ruột thừa cấp"
      }
    }
  ],
  "bodySite": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "66754008",
          "display": "Appendix structure"
        }
      ]
    }
  ],
  "outcome": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "385669000",
        "display": "Successful"
      }
    ],
    "text": "Phẫu thuật thành công, không biến chứng"
  }
}
</code></pre>

<h2 id="6-allergyintolerance"><strong>6. アレルギー不耐症 — アレルギー</strong></h2>

<pre><code class="language-json">{
  "resourceType": "AllergyIntolerance",
  "id": "allergy-penicillin-001",
  "clinicalStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
        "code": "active"
      }
    ]
  },
  "verificationStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
        "code": "confirmed"
      }
    ]
  },
  "type": "allergy",
  "category": ["medication"],
  "criticality": "high",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "764146007",
        "display": "Penicillin"
      }
    ],
    "text": "Dị ứng Penicillin"
  },
  "patient": {
    "reference": "Patient/patient-001"
  },
  "onsetDateTime": "2020-05-10",
  "recordedDate": "2020-05-12",
  "recorder": {
    "reference": "Practitioner/practitioner-001"
  },
  "reaction": [
    {
      "substance": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "764146007",
            "display": "Penicillin"
          }
        ]
      },
      "manifestation": [
        {
          "concept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "271807003",
                "display": "Skin rash"
              }
            ],
            "text": "Phát ban da"
          }
        },
        {
          "concept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "267036007",
                "display": "Dyspnea"
              }
            ],
            "text": "Khó thở"
          }
        }
      ],
      "severity": "severe"
    }
  ]
}
</code></pre>

<h2 id="7-tong-ket"><strong>7. まとめ</strong></h2>

<ul>
<li><p><strong>ServiceRequest → 検体 → 観察 → DiagnosticReport</strong> — 完全な診断ワークフロー</p></li>
<li><p><strong>診断レポート</strong> — 結果を要約し、多くの観察、結論、画像を収集します</p></li>
<li><p><strong>手順</strong> — コードSNOMED/CPTを含む手順/手術、実行者、結果</p></li>
<li><p><strong>アレルギー不耐症</strong> — 薬物/食品/環境アレルギー、反応、重大性</p></li>
</ul>
