---
id: 019e0a10-a501-7001-d001-f1a7f8000501
title: 'Lesson 14: FHIR Documents and Messaging'
slug: bai-14-fhir-documents-va-messaging
description: >-
  FHIR Documents (Composition resource, Document Bundle, signatures), FHIR
  Messaging (MessageHeader, MessageDefinition, message events), compare REST vs
  Messaging vs Documents, use cases for each paradigm.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 'Part 5: Integration, Messaging and Security'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Basic to Advanced Healthcare Data Standard
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ Architecture — Lesson 14</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 14: FHIR Documents and Messaging</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Basic to Advanced Healthcare Data Standard</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Integration, Messaging and Security</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-fhir-exchange-paradigms"><strong>1. Three Paradigms exchange data in FHIR</strong></h2>

<table>
<thead>
<tr><th>Paradigm</th><th>Description</th><th>Use cases</th></tr>
</thead>
<tbody>
<tr><td>RESTful APIs</td><td>CRUD operations on each Resource</td><td>Real-time interactive application</td></tr>
<tr><td>Documents</td><td>The Resources collection forms the complete "document".</td><td>Discharge summary, transfer papers, medical records</td></tr>
<tr><td>Messaging</td><td>Event-driven, sending messages between systems</td><td>Hospital admission notice, test results, orders</td></tr>
</tbody>
</table>

<h2 id="2-fhir-documents"><strong>2. FHIR Documents</strong></h2>

<p>FHIR Document is <strong>Bundle type "document"</strong>, the first entry must be <strong>Composition</strong>, followed by all referenced Resources.</p>

<h3 id="composition"><strong>Composition Resource</strong></h3>

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

<h3 id="document-bundle"><strong>Document Bundle</strong></h3>

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

<h3 id="document-rules"><strong>Document Rules</strong></h3>

<ol>
<li>Bundle.type = "document"</li>
<li>The first entry MUST be Composition</li>
<li>All Resources referenced from Composition MUST be in the Bundle</li>
<li>Document is immutable after signing</li>
<li>Can be digitally signed (signature in Bundle or Provenance)</li>
</ol>

<h2 id="3-fhir-messaging"><strong>3. FHIR Messaging</strong></h2>

<p>Messaging usage <strong>Bundle type "message"</strong> with <strong>MessageHeader</strong> make the first entry.</p>

<h3 id="messageheader"><strong>MessageHeader Resource</strong></h3>

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

<h3 id="message-bundle"><strong>Message Bundle</strong></h3>

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

<h3 id="process-message"><strong>Send Message</strong></h3>

<pre><code class="language-http">POST /fhir/$process-message HTTP/1.1
Content-Type: application/fhir+json

{
  "resourceType": "Bundle",
  "type": "message",
  ...
}
</code></pre>

<h2 id="4-so-sanh"><strong>4. Compare three paradigms</strong></h2>

<table>
<thead>
<tr><th>Criteria</th><th>REST</th><th>Documents</th><th>Messaging</th></tr>
</thead>
<tbody>
<tr><td>Model</td><td>Request/Response CRUD</td><td>Immutable package</td><td>Event-driven</td></tr>
<tr><td>Coupling</td><td>Loose</td><td>None (self-contained)</td><td>Loose</td></tr>
<tr><td>Atomicity</td><td>Transaction bundle</td><td>Entire document</td><td>Entire message</td></tr>
<tr><td>Routing</td><td>URL-based</td><td>N/A</td><td>Endpoint-based</td></tr>
<tr><td>Timing</td><td>Synchronous</td><td>N/A</td><td>Async or sync</td></tr>
<tr><td>Compatible with HL7 v2</td><td>Different model</td><td>Similar to CDA</td><td>Similar to HL7 v2 messages</td></tr>
</tbody>
</table>

<h2 id="5-tong-ket"><strong>5. Summary</strong></h2>

<ul>
<li><p><strong>Documents</strong> — Composition + Bundle "document", self-contained, immutable, signable</p></li>
<li><p><strong>Messaging</strong> — MessageHeader + Bundle "message", event-driven, $process-message</p></li>
<li><p><strong>REST</strong> is still the most popular paradigm, but Documents and Messaging are essential for many traditional medical use cases</p></li>
</ul>
