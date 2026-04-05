---
id: 019e0a10-a302-7001-d001-f1a7f8000302
title: 'Bài 9: Bundle, Transaction và Batch - Xử lý nhiều Resources'
slug: bai-9-bundle-transaction-va-batch-xu-ly-nhieu-resources
description: >-
  Resource Bundle và các loại (searchset, transaction, batch, document, message,
  collection, history). Transaction processing rules, atomic operations,
  conditional references, batch processing, thực hành tạo transaction bundle.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: FHIR RESTful API và Data Exchange"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6626" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6626)"/>

  <!-- Decorations -->
  <g>
    <circle cx="863" cy="219" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="626" cy="282" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="889" cy="85" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="652" cy="148" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="915" cy="211" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="149" x2="1100" y2="229" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="179" x2="1050" y2="249" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1087.1051177665154,227 1087.1051177665154,271 1049,293 1010.8948822334847,271 1010.8948822334847,227 1049,205" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ Kiến trúc — Bài 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 9: Bundle, Transaction và Batch - Xử</tspan>
      <tspan x="60" dy="42">lý nhiều Resources</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: FHIR RESTful API và Data Exchange</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-bundle-resource"><strong>1. Bundle Resource</strong></h2>

<p><strong>Bundle</strong> là container chứa nhiều Resources. Nó là cách FHIR xử lý nhiều resources trong một request, đóng gói documents, trả về kết quả search.</p>

<h3 id="bundle-types"><strong>Bundle Types</strong></h3>

<table>
<thead>
<tr><th>Type</th><th>Mô tả</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td>searchset</td><td>Kết quả tìm kiếm</td><td>Response của GET search</td></tr>
<tr><td>transaction</td><td>Nhóm operations atomic</td><td>Tạo nhiều resources liên quan</td></tr>
<tr><td>batch</td><td>Nhóm operations independent</td><td>Bulk operations, mỗi entry xử lý độc lập</td></tr>
<tr><td>document</td><td>FHIR Document</td><td>Clinical document (Composition + resources)</td></tr>
<tr><td>message</td><td>FHIR Message</td><td>Messaging paradigm (MessageHeader + payload)</td></tr>
<tr><td>collection</td><td>Bộ sưu tập</td><td>Gom resources không có interaction cụ thể</td></tr>
<tr><td>history</td><td>Lịch sử thay đổi</td><td>Response của _history</td></tr>
<tr><td>subscription-notification</td><td>Thông báo subscription</td><td>Real-time notifications</td></tr>
</tbody>
</table>

<h2 id="2-transaction-bundle"><strong>2. Transaction Bundle</strong></h2>

<p>Transaction Bundle xử lý <strong>atomic</strong> — tất cả entries thành công hoặc tất cả rollback.</p>

<h3 id="transaction-example"><strong>Ví dụ: Tạo Patient + Encounter + Observation cùng lúc</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "fullUrl": "urn:uuid:patient-temp-1",
      "resource": {
        "resourceType": "Patient",
        "name": [
          {
            "family": "Nguyễn",
            "given": ["Văn", "A"],
            "text": "Nguyễn Văn A"
          }
        ],
        "gender": "male",
        "birthDate": "1990-05-15",
        "identifier": [
          {
            "system": "http://hospital.vn/mrn",
            "value": "MRN-2025-001"
          }
        ]
      },
      "request": {
        "method": "POST",
        "url": "Patient",
        "ifNoneExist": "identifier=http://hospital.vn/mrn|MRN-2025-001"
      }
    },
    {
      "fullUrl": "urn:uuid:encounter-temp-1",
      "resource": {
        "resourceType": "Encounter",
        "status": "in-progress",
        "class": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                "code": "AMB"
              }
            ]
          }
        ],
        "subject": {
          "reference": "urn:uuid:patient-temp-1"
        },
        "period": {
          "start": "2025-01-15T08:00:00+07:00"
        }
      },
      "request": {
        "method": "POST",
        "url": "Encounter"
      }
    },
    {
      "fullUrl": "urn:uuid:obs-temp-1",
      "resource": {
        "resourceType": "Observation",
        "status": "final",
        "category": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                "code": "vital-signs"
              }
            ]
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "8310-5",
              "display": "Body temperature"
            }
          ]
        },
        "subject": {
          "reference": "urn:uuid:patient-temp-1"
        },
        "encounter": {
          "reference": "urn:uuid:encounter-temp-1"
        },
        "valueQuantity": {
          "value": 37.2,
          "unit": "°C",
          "system": "http://unitsofmeasure.org",
          "code": "Cel"
        }
      },
      "request": {
        "method": "POST",
        "url": "Observation"
      }
    }
  ]
}
</code></pre>

<h3 id="transaction-references"><strong>Conditional References trong Transaction</strong></h3>

<p>Sử dụng <code>urn:uuid:</code> làm temporary ID để các entries trong cùng transaction reference nhau. Server sẽ thay thế bằng ID thực tế sau khi tạo.</p>

<h3 id="transaction-response"><strong>Transaction Response</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "transaction-response",
  "entry": [
    {
      "response": {
        "status": "201 Created",
        "location": "Patient/patient-001/_history/1",
        "etag": "W/\"1\"",
        "lastModified": "2025-01-15T08:00:00Z"
      }
    },
    {
      "response": {
        "status": "201 Created",
        "location": "Encounter/encounter-001/_history/1",
        "etag": "W/\"1\""
      }
    },
    {
      "response": {
        "status": "201 Created",
        "location": "Observation/obs-001/_history/1",
        "etag": "W/\"1\""
      }
    }
  ]
}
</code></pre>

<h3 id="transaction-processing"><strong>Transaction Processing Rules</strong></h3>

<ol>
<li>Server xử lý theo thứ tự: DELETE → POST → PUT/PATCH → GET (conditional)</li>
<li>Tất cả entries phải thành công → atomic</li>
<li>Nếu bất kỳ entry nào fail → <strong>toàn bộ transaction rollback</strong></li>
<li><code>urn:uuid:</code> references được resolve trước khi xử lý</li>
</ol>

<h2 id="3-batch-bundle"><strong>3. Batch Bundle</strong></h2>

<p>Batch xử lý <strong>independent</strong> — mỗi entry xử lý riêng, một entry fail không ảnh hưởng entries khác.</p>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "batch",
  "entry": [
    {
      "request": {
        "method": "GET",
        "url": "Patient/patient-001"
      }
    },
    {
      "request": {
        "method": "GET",
        "url": "Observation?subject=Patient/patient-001&category=vital-signs&_sort=-date&_count=5"
      }
    },
    {
      "request": {
        "method": "GET",
        "url": "Condition?subject=Patient/patient-001&clinical-status=active"
      }
    },
    {
      "request": {
        "method": "GET",
        "url": "MedicationRequest?subject=Patient/patient-001&status=active"
      }
    }
  ]
}
</code></pre>

<p>Use case: Lấy tất cả thông tin bệnh nhân trong một API call thay vì 4 calls riêng biệt.</p>

<h3 id="batch-response"><strong>Batch Response</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "batch-response",
  "entry": [
    {
      "resource": {"resourceType": "Patient", "id": "patient-001", "...": "..."},
      "response": {"status": "200 OK"}
    },
    {
      "resource": {"resourceType": "Bundle", "type": "searchset", "...": "..."},
      "response": {"status": "200 OK"}
    },
    {
      "resource": {"resourceType": "Bundle", "type": "searchset", "...": "..."},
      "response": {"status": "200 OK"}
    },
    {
      "resource": {"resourceType": "OperationOutcome", "...": "..."},
      "response": {"status": "404 Not Found"}
    }
  ]
}
</code></pre>

<h2 id="4-so-sanh-transaction-batch"><strong>4. So sánh Transaction vs Batch</strong></h2>

<table>
<thead>
<tr><th>Đặc tính</th><th>Transaction</th><th>Batch</th></tr>
</thead>
<tbody>
<tr><td>Atomicity</td><td>✅ All-or-nothing</td><td>❌ Independent</td></tr>
<tr><td>Internal references</td><td>✅ urn:uuid: resolved</td><td>❌ Không hỗ trợ</td></tr>
<tr><td>Failure handling</td><td>Toàn bộ rollback</td><td>Mỗi entry trả status riêng</td></tr>
<tr><td>Performance</td><td>Chậm hơn (transaction boundary)</td><td>Nhanh hơn (parallel possible)</td></tr>
<tr><td>Use case</td><td>Data liên quan, cần consistency</td><td>Batch read, independent writes</td></tr>
</tbody>
</table>

<h2 id="5-mixed-operations"><strong>5. Mixed Operations trong Transaction</strong></h2>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "request": {
        "method": "PUT",
        "url": "Patient/patient-001"
      },
      "resource": {"resourceType": "Patient", "id": "patient-001", "active": true}
    },
    {
      "request": {
        "method": "DELETE",
        "url": "Observation/obs-old-001"
      }
    },
    {
      "request": {
        "method": "POST",
        "url": "Observation"
      },
      "resource": {"resourceType": "Observation", "status": "final"}
    },
    {
      "request": {
        "method": "GET",
        "url": "Condition?subject=Patient/patient-001",
        "ifNoneMatch": "W/\"5\""
      }
    }
  ]
}
</code></pre>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<ul>
<li><p><strong>Bundle</strong> — Container cho nhiều resources, 8 types khác nhau</p></li>
<li><p><strong>Transaction</strong> — Atomic, all-or-nothing, dùng urn:uuid: cho internal references</p></li>
<li><p><strong>Batch</strong> — Independent processing, parallel, mỗi entry trả status riêng</p></li>
<li><p>Transaction phù hợp cho <strong>data integrity</strong>, Batch phù hợp cho <strong>performance</strong></p></li>
</ul>
