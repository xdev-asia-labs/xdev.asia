---
id: 019e0a10-a504-7001-d001-f1a7f8000504
title: 'レッスン 17: FHIR におけるセキュリティ、プライバシー、および同意'
slug: bai-17-security-privacy-va-consent-trong-fhir
description: >-
  FHIR セキュリティ ラベル、AuditEvent リソース、来歴リソース、同意フレームワーク、FHIR の
  RBAC/ABAC、医療データの暗号化、HIPAA 準拠、GDPR、ベトナムの医療セキュリティ規制、FHIR サーバーのセキュリティのベスト プラクティス。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 17
section_title: 'パート 5: 統合、メッセージング、セキュリティ'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ アーキテクチャ — レッスン 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: セキュリティ、プライバシー、および同意</tspan>
      <tspan x="60" dy="42">FHIR</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: 統合、メッセージング、セキュリティ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-fhir-security-overview"><strong>1. FHIR セキュリティの概要</strong></h2>

<p>医療データは、最も機密性の高いデータの 1 つです。 FHIR は、多くの組み込みセキュリティ メカニズムを提供します。</p>

<table>
<thead>
<tr><th>セキュリティ層</th><th>FHIR機構</th></tr>
</thead>
<tbody>
<tr><td>認証</td><td>FHIR、OAuth 2.0 でのスマート</td></tr>
<tr><td>認可</td><td>臨床範囲、同意</td></tr>
<tr><td>監査</td><td>監査イベントリソース</td></tr>
<tr><td>来歴</td><td>来歴リソース</td></tr>
<tr><td>ラベリング</td><td>セキュリティラベル (meta.security)</td></tr>
<tr><td>同意</td><td>同意リソース</td></tr>
<tr><td>輸送</td><td>TLS 1.2+</td></tr>
</tbody>
</table>

<h2 id="2-security-labels"><strong>2. セキュリティラベル</strong></h2>

<p>セキュリティラベルが貼られています <code>メタセキュリティ</code> セキュリティラベルをリソースに割り当てます。</p>

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

<h3 id="confidentiality-codes"><strong>機密性コード</strong></h3>

<table>
<thead>
<tr><th>コード</th><th>ディスプレイ</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>U</td><td>無制限</td><td>制限なし</td></tr>
<tr><td>L</td><td>低い</td><td>低レベル</td></tr>
<tr><td>M</td><td>中等度</td><td>平均レベル</td></tr>
<tr><td>N</td><td>ノーマル</td><td>ノーマル</td></tr>
<tr><td>R</td><td>制限付き</td><td>制限事項</td></tr>
<tr><td>V</td><td>非常に制限されている</td><td>非常に限定的（精神医学、HIV、虐待）</td></tr>
</tbody>
</table>

<h2 id="3-auditevent"><strong>3. AuditEvent リソース</strong></h2>

<p>注記 <strong>あらゆる操作</strong> データ アクセス — 誰がどのデータに対して、いつ、どこで、なぜ行ったのか。</p>

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

<h2 id="4-provenance"><strong>4. 来歴リソース</strong></h2>

<p>注記 <strong>起源</strong> そして <strong>歴史</strong> データの変更 — 作成者、編集者、ソースからのもの。</p>

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

<h2 id="5-consent"><strong>5. 同意リソース</strong></h2>

<p><strong>同意</strong> データ使用に対する患者の同意/拒否を記録します。</p>

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

<h2 id="6-rbac-abac"><strong>6. FHIR の RBAC/ABAC</strong></h2>

<table>
<thead>
<tr><th>モデル</th><th>説明</th><th>たとえば</th></tr>
</thead>
<tbody>
<tr><td>RBAC</td><td>役割ベースのアクセス制御</td><td>循環器科の医師は循環器科の患者のみを診察します</td></tr>
<tr><td>アバック</td><td>属性ベースのアクセス制御</td><td>セキュリティラベル、場所、時間に基づく</td></tr>
<tr><td>PBAC</td><td>目的に基づいたアクセス制御</td><td>治療目的のみのアクセス (TREAT)</td></tr>
</tbody>
</table>

<h2 id="7-compliance"><strong>7. コンプライアンス — HIPAA、GDPR、ベトナム</strong></h2>

<table>
<thead>
<tr><th>規制</th><th>範囲</th><th>主な要件</th></tr>
</thead>
<tbody>
<tr><td>ヒパア</td><td>米国</td><td>PHI 保護、必要最小限、監査証跡、BAA</td></tr>
<tr><td>GDPR</td><td>EU</td><td>同意、消去する権利、DPO、データポータビリティ</td></tr>
<tr><td>サイバーセキュリティ法 (86/2015)</td><td>ベトナム</td><td>個人情報を保護し、違反した場合は通知します</td></tr>
<tr><td>政令 13/2023/ND-CP</td><td>ベトナム</td><td>個人データ保護、同意、DPO</td></tr>
<tr><td>回覧 46/2018/TT-BYT</td><td>ベトナム</td><td>電子医療記録、機密</td></tr>
</tbody>
</table>

<h2 id="8-best-practices"><strong>8. FHIR サーバーのセキュリティのベスト プラクティス</strong></h2>

<ol>
<li><strong>TLS 1.2+</strong> すべての接続に対して</li>
<li><strong>OAuth 2.0</strong> (SMART on FHIR) 認証/認可用</li>
<li><strong>監査イベント</strong> すべての訪問を記録する — 保存期間 ≥ 7 年 (医療)</li>
<li><strong>セキュリティラベル</strong> 機密データ (HIV、精神医学、遺伝学) の場合</li>
<li><strong>同意</strong> — 患者の同意を保存および強制する</li>
<li><strong>保存時の暗号化</strong> — データベースの暗号化</li>
<li><strong>ネットワークのセグメンテーション</strong> — 内部ネットワークの FHIR サーバー</li>
<li><strong>レート制限</strong> — 不正行為防止 API</li>
<li><strong>入力の検証</strong> — すべての FHIR リソースを検証する</li>
<li><strong>最小限の露出</strong> — CapabilityStatement を介して必要な場合のみ公開します</li>
</ol>

<h2 id="9-tong-ket"><strong>9. まとめ</strong></h2>

<ul>
<li><p><strong>セキュリティラベル</strong> — リソースに対するラベルの機密性と機密性</p></li>
<li><p><strong>監査イベント</strong> — すべてのデータアクセスの監査証跡</p></li>
<li><p><strong>来歴</strong> — データのトレーサビリティ</p></li>
<li><p><strong>同意</strong> — 患者の同意管理、目的別の許可/拒否</p></li>
<li><p><strong>コンプライアンス</strong> — HIPAA (米国)、GDPR (EU)、政令 13/2023 (ベトナム)</p></li>
</ul>
