---
id: 019e0a10-a501-7001-d001-f1a7f8000501
title: 'レッスン 14: FHIR ドキュメントとメッセージング'
slug: bai-14-fhir-documents-va-messaging
description: >-
  FHIR ドキュメント (構成リソース、ドキュメント バンドル、署名)、FHIR メッセージング (メッセージ ヘッダー、メッセージ定義、メッセージ
  イベント)、REST 対メッセージング対ドキュメントの比較、各パラダイムのユースケース。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 5: 統合、メッセージング、セキュリティ'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7442" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7442)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1006" cy="208" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="912" cy="94" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="818" cy="240" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="724" cy="126" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="272" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="188" x2="1100" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="218" x2="1050" y2="288" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.2390923627308,116.5 975.2390923627308,159.5 938,181 900.7609076372692,159.5 900.7609076372692,116.50000000000001 938,95" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ アーキテクチャ — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: FHIR ドキュメントとメッセージング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: 統合、メッセージング、セキュリティ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-fhir-exchange-paradigms"><strong>1. 3 つのパラダイムが FHIR でデータを交換する</strong></h2>

<table>
<thead>
<tr><th>パラダイム</th><th>説明</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td>RESTful API</td><td>各リソースに対する CRUD 操作</td><td>リアルタイム対話型アプリケーション</td></tr>
<tr><td>書類</td><td>Resources コレクションは完全な「ドキュメント」を形成します。</td><td>退院概要、転送書類、医療記録</td></tr>
<tr><td>メッセージング</td><td>イベント駆動型、システム間でメッセージを送信</td><td>入院通知、検査結果、指示書</td></tr>
</tbody>
</table>

<h2 id="2-fhir-documents"><strong>2. FHIR 文書</strong></h2>

<p>FHIR ドキュメントは <strong>バンドルタイプ「ドキュメント」</strong>、最初のエントリは次のようにする必要があります <strong>構成</strong>、その後に参照されているすべてのリソースが続きます。</p>

<h3 id="composition"><strong>構成リソース</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Composition",
  "id": "comp-discharge-001",
  "status": "final",
  "type": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "18842-5",
        "display": "Discharge summary"
      }
    ],
    "text": "Tóm tắt xuất viện"
  },
  "subject": {
    "reference": "Patient/patient-001",
    "display": "Nguyễn Văn A"
  },
  "encounter": {
    "reference": "Encounter/encounter-inpatient-001"
  },
  "date": "2025-01-20T16:00:00+07:00",
  "author": [
    {
      "reference": "Practitioner/practitioner-001",
      "display": "BS. Trần Thị B"
    }
  ],
  "title": "Tóm tắt xuất viện - Nguyễn Văn A",
  "custodian": {
    "reference": "Organization/org-bvdk-001"
  },
  "section": [
    {
      "title": "Chẩn đoán",
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "11535-2",
            "display": "Hospital discharge Dx Narrative"
          }
        ]
      },
      "text": {
        "status": "generated",
        "div": "<div xmlns='http://www.w3.org/1999/xhtml'><p>Tăng huyết áp độ 2, Đái tháo đường type 2</p></div>"
      },
      "entry": [
        {"reference": "Condition/cond-hypertension-001"},
        {"reference": "Condition/cond-diabetes-001"}
      ]
    },
    {
      "title": "Thuốc kê đơn khi xuất viện",
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "10183-2",
            "display": "Hospital discharge medications"
          }
        ]
      },
      "entry": [
        {"reference": "MedicationRequest/mr-amlodipine-001"},
        {"reference": "MedicationRequest/mr-metformin-001"}
      ]
    },
    {
      "title": "Kết quả xét nghiệm",
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "30954-2",
            "display": "Relevant diagnostic tests/lab data"
          }
        ]
      },
      "entry": [
        {"reference": "DiagnosticReport/dr-cbc-001"},
        {"reference": "Observation/obs-hba1c-001"}
      ]
    }
  ]
}
</code></pre>

<h3 id="document-bundle"><strong>文書の束</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "document",
  "identifier": {
    "system": "http://hospital.vn/documents",
    "value": "DOC-20250120-001"
  },
  "timestamp": "2025-01-20T16:00:00+07:00",
  "entry": [
    {
      "fullUrl": "urn:uuid:comp-001",
      "resource": {
        "resourceType": "Composition"
      }
    },
    {
      "fullUrl": "urn:uuid:patient-001",
      "resource": {
        "resourceType": "Patient"
      }
    },
    {
      "fullUrl": "urn:uuid:cond-001",
      "resource": {
        "resourceType": "Condition"
      }
    }
  ]
}
</code></pre>

<h3 id="document-rules"><strong>文書規則</strong></h3>

<ol>
<li>Bundle.type = "ドキュメント"</li>
<li>最初のエントリはCompositionである必要があります</li>
<li>構成から参照されるすべてのリソースはバンドル内に存在する必要があります</li>
<li>文書は署名後は変更できません</li>
<li>デジタル署名可能 (バンドルまたは来歴の署名)</li>
</ol>

<h2 id="3-fhir-messaging"><strong>3. FHIR メッセージング</strong></h2>

<p>メッセージングの使用法 <strong>バンドルタイプ「メッセージ」</strong> と <strong>メッセージヘッダー</strong> 最初のエントリを作成します。</p>

<h3 id="messageheader"><strong>メッセージヘッダーリソース</strong></h3>

<pre><code class="language-json">{
  "resourceType": "MessageHeader",
  "id": "msg-admission-001",
  "eventCoding": {
    "system": "http://terminology.hl7.org/CodeSystem/message-events",
    "code": "admin-notify"
  },
  "source": {
    "name": "HIS Bệnh viện ĐK TW",
    "endpoint": "https://his.bvdk.vn/fhir/$process-message"
  },
  "destination": [
    {
      "name": "Hệ thống BHXH",
      "endpoint": "https://api.bhxh.gov.vn/fhir/$process-message"
    }
  ],
  "focus": [
    {
      "reference": "Encounter/encounter-inpatient-001"
    },
    {
      "reference": "Patient/patient-001"
    }
  ],
  "reason": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/message-reasons-encounter",
        "code": "admit"
      }
    ],
    "text": "Thông báo nhập viện"
  }
}
</code></pre>

<h3 id="message-bundle"><strong>メッセージバンドル</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "message",
  "timestamp": "2025-01-15T14:30:00+07:00",
  "entry": [
    {
      "fullUrl": "urn:uuid:msg-001",
      "resource": {
        "resourceType": "MessageHeader"
      }
    },
    {
      "fullUrl": "urn:uuid:encounter-001",
      "resource": {
        "resourceType": "Encounter"
      }
    },
    {
      "fullUrl": "urn:uuid:patient-001",
      "resource": {
        "resourceType": "Patient"
      }
    }
  ]
}
</code></pre>

<h3 id="process-message"><strong>メッセージを送信する</strong></h3>

<pre><code class="language-http">POST /fhir/$process-message HTTP/1.1
Content-Type: application/fhir+json

{
  "resourceType": "Bundle",
  "type": "message",
  ...
}
</code></pre>

<h2 id="4-so-sanh"><strong>4. 3 つのパラダイムを比較する</strong></h2>

<table>
<thead>
<tr><th>基準</th><th>休息</th><th>書類</th><th>メッセージング</th></tr>
</thead>
<tbody>
<tr><td>モデル</td><td>リクエスト/レスポンス CRUD</td><td>不変パッケージ</td><td>イベント駆動型</td></tr>
<tr><td>カップリング</td><td>緩い</td><td>なし (自己完結型)</td><td>緩い</td></tr>
<tr><td>原子性</td><td>トランザクションバンドル</td><td>文書全体</td><td>メッセージ全体</td></tr>
<tr><td>ルーティング</td><td>URLベース</td><td>該当なし</td><td>エンドポイントベース</td></tr>
<tr><td>タイミング</td><td>同期</td><td>該当なし</td><td>非同期または同期</td></tr>
<tr><td>HL7 v2と互換性があります</td><td>別のモデル</td><td>CDAに似ている</td><td>HL7 v2 メッセージに類似</td></tr>
</tbody>
</table>

<h2 id="5-tong-ket"><strong>5. まとめ</strong></h2>

<ul>
<li><p><strong>書類</strong> — 構成 + バンドル「ドキュメント」、自己完結型、不変、署名可能</p></li>
<li><p><strong>メッセージング</strong> — MessageHeader + バンドル「メッセージ」、イベント駆動型、$process-message</p></li>
<li><p><strong>休息</strong> は依然として最も人気のあるパラダイムですが、ドキュメントとメッセージングは多くの従来の医療ユースケースに不可欠です</p></li>
</ul>
