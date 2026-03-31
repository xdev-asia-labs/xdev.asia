---
id: 019e0a10-a501-7001-d001-f1a7f8000501
title: 'Bài 14: FHIR Documents và Messaging'
slug: bai-14-fhir-documents-va-messaging
description: >-
  FHIR Documents (Composition resource, Document Bundle, signatures),
  FHIR Messaging (MessageHeader, MessageDefinition, message events),
  so sánh REST vs Messaging vs Documents, use cases cho từng paradigm.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 5: Tích hợp, Messaging và Security"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-fhir-exchange-paradigms"><strong>1. Ba Paradigm trao đổi dữ liệu trong FHIR</strong></h2>

<table>
<thead>
<tr><th>Paradigm</th><th>Mô tả</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td>RESTful API</td><td>CRUD operations trên từng Resource</td><td>Ứng dụng tương tác real-time</td></tr>
<tr><td>Documents</td><td>Bộ sưu tập Resources tạo thành "document" hoàn chỉnh</td><td>Tóm tắt xuất viện, giấy chuyển viện, hồ sơ y tế</td></tr>
<tr><td>Messaging</td><td>Event-driven, gửi message giữa hệ thống</td><td>Thông báo nhập viện, kết quả xét nghiệm, orders</td></tr>
</tbody>
</table>

<h2 id="2-fhir-documents"><strong>2. FHIR Documents</strong></h2>

<p>FHIR Document là <strong>Bundle type "document"</strong>, entry đầu tiên phải là <strong>Composition</strong>, theo sau là tất cả Resources được reference.</p>

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
<li>Entry đầu tiên PHẢI là Composition</li>
<li>Tất cả Resources referenced từ Composition PHẢI có trong Bundle</li>
<li>Document là immutable sau khi ký</li>
<li>Có thể ký số (signature trong Bundle hoặc Provenance)</li>
</ol>

<h2 id="3-fhir-messaging"><strong>3. FHIR Messaging</strong></h2>

<p>Messaging sử dụng <strong>Bundle type "message"</strong> với <strong>MessageHeader</strong> làm entry đầu tiên.</p>

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

<h3 id="process-message"><strong>Gửi Message</strong></h3>

<pre><code class="language-http">POST /fhir/$process-message HTTP/1.1
Content-Type: application/fhir+json

{
  "resourceType": "Bundle",
  "type": "message",
  ...
}
</code></pre>

<h2 id="4-so-sanh"><strong>4. So sánh ba paradigms</strong></h2>

<table>
<thead>
<tr><th>Tiêu chí</th><th>REST</th><th>Documents</th><th>Messaging</th></tr>
</thead>
<tbody>
<tr><td>Mô hình</td><td>Request/Response CRUD</td><td>Immutable package</td><td>Event-driven</td></tr>
<tr><td>Coupling</td><td>Loose</td><td>None (self-contained)</td><td>Loose</td></tr>
<tr><td>Atomicity</td><td>Transaction bundle</td><td>Toàn bộ document</td><td>Toàn bộ message</td></tr>
<tr><td>Routing</td><td>URL-based</td><td>N/A</td><td>Endpoint-based</td></tr>
<tr><td>Timing</td><td>Synchronous</td><td>N/A</td><td>Async hoặc sync</td></tr>
<tr><td>Tương thích HL7 v2</td><td>Khác mô hình</td><td>Tương tự CDA</td><td>Tương tự HL7 v2 messages</td></tr>
</tbody>
</table>

<h2 id="5-tong-ket"><strong>5. Tổng kết</strong></h2>

<ul>
<li><p><strong>Documents</strong> — Composition + Bundle "document", self-contained, immutable, signable</p></li>
<li><p><strong>Messaging</strong> — MessageHeader + Bundle "message", event-driven, $process-message</p></li>
<li><p><strong>REST</strong> vẫn là paradigm phổ biến nhất, nhưng Documents và Messaging cần thiết cho nhiều use cases y tế truyền thống</p></li>
</ul>
