---
id: 019e0a10-a501-7001-d001-f1a7f8000501
title: 第 14 課：FHIR 文件和訊息傳遞
slug: bai-14-fhir-documents-va-messaging
description: FHIR 文件（組合資源、文件包、簽章）、FHIR 訊息傳遞（訊息標頭、訊息定義、訊息事件）、比較 REST 與訊息傳遞與文件、每個範例的使用案例。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 第 5 部分：整合、訊息傳遞與安全性
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ 建築 — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：FHIR 文件和訊息傳遞</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：整合、訊息傳遞與安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-fhir-exchange-paradigms"><strong>1. FHIR中三種範式交換數據</strong></h2>

<table>
<thead>
<tr><th>範式</th><th>描述</th><th>使用案例</th></tr>
</thead>
<tbody>
<tr><td>RESTful API</td><td>每個資源上的 CRUD 操作</td><td>即時互動應用</td></tr>
<tr><td>文件</td><td>資源集合構成了完整的「文件」。</td><td>出院小結、轉院文件、病歷</td></tr>
<tr><td>訊息傳遞</td><td>事件驅動，在系統之間發送訊息</td><td>入院通知書、檢查結果、醫囑</td></tr>
</tbody>
</table>

<h2 id="2-fhir-documents"><strong>2.FHIR 文件</strong></h2>

<p>FHIR 檔案是 <strong>捆綁類型“文檔”</strong>，第一個條目必須是 <strong>成分</strong>，後面跟著所有引用的資源。</p>

<h3 id="composition"><strong>作文資源</strong></h3>

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

<h3 id="document-bundle"><strong>文件包</strong></h3>

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

<h3 id="document-rules"><strong>文件規則</strong></h3>

<ol>
<li>Bundle.type = "文件"</li>
<li>第一個條目必須是作文</li>
<li>組合引用的所有資源必須位於捆綁包中</li>
<li>文件簽署後不可更改</li>
<li>可以進行數位簽章（捆綁包或來源中的簽名）</li>
</ol>

<h2 id="3-fhir-messaging"><strong>3.FHIR 訊息傳遞</strong></h2>

<p>訊息傳遞使用 <strong>捆綁類型“訊息”</strong> 與 <strong>訊息頭</strong> 進行第一個條目。</p>

<h3 id="messageheader"><strong>訊息頭資源</strong></h3>

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

<h3 id="message-bundle"><strong>訊息包</strong></h3>

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

<h3 id="process-message"><strong>發送訊息</strong></h3>

<pre><code class="language-http">POST /fhir/$process-message HTTP/1.1
Content-Type: application/fhir+json

{
  "resourceType": "Bundle",
  "type": "message",
  ...
}
</code></pre>

<h2 id="4-so-sanh"><strong>4. 比較三種範式</strong></h2>

<table>
<thead>
<tr><th>標準</th><th>休息</th><th>文件</th><th>訊息傳遞</th></tr>
</thead>
<tbody>
<tr><td>型號</td><td>請求/回應增刪改查</td><td>不可變的包</td><td>事件驅動</td></tr>
<tr><td>聯軸器</td><td>鬆動</td><td>無（獨立）</td><td>鬆動</td></tr>
<tr><td>原子性</td><td>交易捆綁</td><td>整個文檔</td><td>整個訊息</td></tr>
<tr><td>路由</td><td>基於URL</td><td>不適用</td><td>基於端點</td></tr>
<tr><td>時機</td><td>同步</td><td>不適用</td><td>非同步或同步</td></tr>
<tr><td>相容於HL7 v2</td><td>型號不同</td><td>類似 CDA</td><td>類似 HL7 v2 訊息</td></tr>
</tbody>
</table>

<h2 id="5-tong-ket"><strong>5. 總結</strong></h2>

<ul>
<li><p><strong>文件</strong> — 組合+捆綁“文件”，獨立，不可變，可簽名</p></li>
<li><p><strong>訊息傳遞</strong> — MessageHeader + Bundle“訊息”，事件驅動，$process-message</p></li>
<li><p><strong>休息</strong> 仍然是最受歡迎的範例，但文件和訊息對於許多傳統醫療用例至關重要</p></li>
</ul>
