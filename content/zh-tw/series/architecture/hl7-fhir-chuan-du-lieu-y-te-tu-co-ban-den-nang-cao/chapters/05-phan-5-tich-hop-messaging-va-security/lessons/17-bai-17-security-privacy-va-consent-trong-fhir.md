---
id: 019e0a10-a504-7001-d001-f1a7f8000504
title: 第 17 課：FHIR 中的安全、隱私和同意
slug: bai-17-security-privacy-va-consent-trong-fhir
description: >-
  FHIR 安全標籤、AuditEvent 資源、Provenance 資源、同意框架、FHIR 中的 RBAC/ABAC、醫療資料加密、HIPAA
  合規性、GDPR、越南醫療安全法規、FHIR 伺服器的安全最佳實務。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 17
section_title: 第 5 部分：整合、訊息傳遞與安全性
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6846" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6846)"/>

  <!-- Decorations -->
  <g>
    <circle cx="615" cy="95" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="630" cy="30" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="645" cy="225" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="660" cy="160" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="675" cy="95" r="8" fill="#fb923c" opacity="0.1"/>
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
    <polygon points="979.6410161513776,125 979.6410161513776,165 945,185 910.3589838486224,165 910.3589838486224,125.00000000000001 945,105" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ 建築 — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：安全、隱私和同意</tspan>
      <tspan x="60" dy="42">FHIR</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：整合、訊息傳遞與安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-fhir-security-overview"><strong>1.FHIR 安全概述</strong></h2>

<p>醫療資料是最敏感的資料類型之一。 FHIR 提供了許多內建的安全機制。</p>

<table>
<thead>
<tr><th>安全層</th><th>FHIR機制</th></tr>
</thead>
<tbody>
<tr><td>認證</td><td>FHIR、OAuth 2.0 上的 SMART</td></tr>
<tr><td>授權</td><td>臨床範圍、同意書</td></tr>
<tr><td>審計</td><td>審計事件資源</td></tr>
<tr><td>出處</td><td>來源資源</td></tr>
<tr><td>標籤</td><td>安全標籤（meta.security）</td></tr>
<tr><td>同意</td><td>同意資源</td></tr>
<tr><td>交通</td><td>TLS 1.2+</td></tr>
</tbody>
</table>

<h2 id="2-security-labels"><strong>2. 防偽標籤</strong></h2>

<p>附有安全標籤 <code>元安全性</code> 為資源分配安全標籤。</p>

<pre><code class="language-json">{
  "resourceType": "Observation",
  "meta": {
    "security": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
        "code": "R",
        "display": "Restricted"
      },
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        "code": "HIV",
        "display": "HIV/AIDS information sensitivity"
      }
    ]
  }
}
</code></pre>

<h3 id="confidentiality-codes"><strong>保密代碼</strong></h3>

<table>
<thead>
<tr><th>程式碼</th><th>顯示</th><th>描述</th></tr>
</thead>
<tbody>
<tr><td>U</td><td>無限制</td><td>無限制</td></tr>
<tr><td>L</td><td>低</td><td>低電平</td></tr>
<tr><td>中號</td><td>中等</td><td>平均水平</td></tr>
<tr><td>氮</td><td>正常</td><td>正常</td></tr>
<tr><td>右</td><td>受限</td><td>限制</td></tr>
<tr><td>V</td><td>非常受限</td><td>非常有限（精神醫學、愛滋病毒、虐待）</td></tr>
</tbody>
</table>

<h2 id="3-auditevent"><strong>3.審計事件資源</strong></h2>

<p>注意事項 <strong>每一次操作</strong> 資料存取－誰對哪些資料做了什麼、何時、何地、為什麼。</p>

<pre><code class="language-json">{
  "resourceType": "AuditEvent",
  "category": [
    {
      "coding": [
        {
          "system": "http://dicom.nema.org/resources/ontology/DCM",
          "code": "110112",
          "display": "Query"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/restful-interaction",
        "code": "search-type",
        "display": "search"
      }
    ]
  },
  "action": "E",
  "recorded": "2025-01-15T10:30:00+07:00",
  "outcome": {
    "code": {
      "system": "http://terminology.hl7.org/CodeSystem/audit-event-outcome",
      "code": "success"
    }
  },
  "agent": [
    {
      "type": {
        "coding": [
          {
            "system": "http://dicom.nema.org/resources/ontology/DCM",
            "code": "110153",
            "display": "Source Role ID"
          }
        ]
      },
      "who": {
        "reference": "Practitioner/practitioner-001",
        "display": "BS. Trần Thị B"
      },
      "requestor": true,
      "networkString": "192.168.1.100"
    }
  ],
  "source": {
    "observer": {
      "reference": "Device/fhir-server-001"
    },
    "type": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/security-source-type",
            "code": "4",
            "display": "Application Server"
          }
        ]
      }
    ]
  },
  "entity": [
    {
      "what": {
        "reference": "Patient/patient-001"
      },
      "role": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/object-role",
            "code": "1",
            "display": "Patient"
          }
        ]
      }
    }
  ]
}
</code></pre>

<h2 id="4-provenance"><strong>4. 來源資源</strong></h2>

<p>注意事項 <strong>起源</strong> 和 <strong>歷史</strong> 數據變化——誰創建、誰編輯、來自什麼來源。</p>

<pre><code class="language-json">{
  "resourceType": "Provenance",
  "target": [
    {"reference": "Observation/obs-hba1c-001"}
  ],
  "recorded": "2025-01-15T10:30:00+07:00",
  "activity": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-DataOperation",
        "code": "CREATE"
      }
    ]
  },
  "agent": [
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
            "code": "author"
          }
        ]
      },
      "who": {
        "reference": "Practitioner/practitioner-001"
      },
      "onBehalfOf": {
        "reference": "Organization/org-lab-001"
      }
    }
  ],
  "entity": [
    {
      "role": "source",
      "what": {
        "reference": "Device/lab-analyzer-001",
        "display": "Máy xét nghiệm huyết học tự động"
      }
    }
  ]
}
</code></pre>

<h2 id="5-consent"><strong>5. 同意資源</strong></h2>

<p><strong>同意</strong> 記錄患者同意/拒絕資料使用。</p>

<pre><code class="language-json">{
  "resourceType": "Consent",
  "status": "active",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/consentcategorycodes",
          "code": "59284-0",
          "display": "Patient Consent"
        }
      ]
    }
  ],
  "subject": {
    "reference": "Patient/patient-001"
  },
  "date": "2025-01-15",
  "grantor": [
    {
      "reference": "Patient/patient-001"
    }
  ],
  "controller": [
    {
      "reference": "Organization/org-bvdk-001"
    }
  ],
  "decision": "permit",
  "provision": [
    {
      "type": "permit",
      "actor": [
        {
          "role": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                "code": "PRCP",
                "display": "Primary information recipient"
              }
            ]
          },
          "reference": {
            "reference": "Organization/org-bvdk-001"
          }
        }
      ],
      "action": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/consentaction",
              "code": "access"
            }
          ]
        }
      ],
      "securityLabel": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
          "code": "N"
        }
      ],
      "purpose": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          "code": "TREAT",
          "display": "Treatment"
        }
      ],
      "provision": [
        {
          "type": "deny",
          "securityLabel": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              "code": "PSY",
              "display": "Psychiatry"
            }
          ]
        }
      ]
    }
  ]
}
</code></pre>

<h2 id="6-rbac-abac"><strong>6. FHIR 中的 RBAC/ABAC</strong></h2>

<table>
<thead>
<tr><th>型號</th><th>描述</th><th>例如</th></tr>
</thead>
<tbody>
<tr><td>RBAC</td><td>基於角色的存取控制</td><td>心臟科醫生只看心臟病患者</td></tr>
<tr><td>阿巴克</td><td>基於屬性的存取控制</td><td>基於安全標籤、位置、時間</td></tr>
<tr><td>PBAC</td><td>基於目的的存取控制</td><td>僅供治療目的使用 (TREAT)</td></tr>
</tbody>
</table>

<h2 id="7-compliance"><strong>7. 合規性 — HIPAA、GDPR、越南</strong></h2>

<table>
<thead>
<tr><th>法規</th><th>適用範圍</th><th>主要要求</th></tr>
</thead>
<tbody>
<tr><td>健康保險流通與責任法案</td><td>美國</td><td>PHI 保護、最低必要性、稽核追蹤、BAA</td></tr>
<tr><td>一般資料保護條例</td><td>歐盟</td><td>同意、刪除權、DPO、資料可攜性</td></tr>
<tr><td>網路安全法 (86/2015)</td><td>越南</td><td>保護個人訊息，違規時通知</td></tr>
<tr><td>第 13/2023/ND-CP 號法令</td><td>越南</td><td>個人資料保護、同意、DPO</td></tr>
<tr><td>46/2018/TT-BYT 號通知</td><td>越南</td><td>電子病歷，保密</td></tr>
</tbody>
</table>

<h2 id="8-best-practices"><strong>8. FHIR 伺服器安全最佳實踐</strong></h2>

<ol>
<li><strong>TLS 1.2+</strong> 對於所有連接</li>
<li><strong>OAuth 2.0</strong> （FHIR 上的 SMART）用於身份驗證/授權</li>
<li><strong>審計事件</strong> 記錄每次就診 — 保留 ≥ 7 年（醫療）</li>
<li><strong>防偽標籤</strong> 敏感資料（HIV、精神病、遺傳）</li>
<li><strong>同意</strong> — 儲存並強制執行病患同意書</li>
<li><strong>靜態加密</strong> — 資料庫加密</li>
<li><strong>網路分段</strong> — 內部網路中的 FHIR 伺服器</li>
<li><strong>速率限制</strong> — 反濫用 API</li>
<li><strong>輸入驗證</strong> — 驗證所有 FHIR 資源</li>
<li><strong>最小程度的暴露</strong> — 僅透過 CapabilityStatement 公開必要的內容</li>
</ol>

<h2 id="9-tong-ket"><strong>9. 總結</strong></h2>

<ul>
<li><p><strong>防偽標籤</strong> — 標記資源的機密性和敏感性</p></li>
<li><p><strong>審計事件</strong> — 所有資料存取的審計跟踪</p></li>
<li><p><strong>出處</strong> — 資料的可追溯性</p></li>
<li><p><strong>同意</strong> — 病人同意管理，依目的允許/拒絕</p></li>
<li><p><strong>合規性</strong> — HIPAA（美國）、GDPR（歐盟）、第 13/2023 號法令（越南）</p></li>
</ul>
