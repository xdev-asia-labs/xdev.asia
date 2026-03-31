---
id: 019e0a10-a401-7001-d001-f1a7f8000401
title: 'Bài 11: FHIR Data Types - Primitive, Complex và Special'
slug: bai-11-fhir-data-types-primitive-complex-va-special
description: >-
  Primitive types (boolean, string, uri, date, dateTime, instant, decimal, integer),
  Complex types (HumanName, Address, ContactPoint, Identifier, CodeableConcept,
  Coding, Quantity, Period, Reference, Narrative), BackboneElement, Element.
  Extensions trên data types.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: Data Types, Terminologies và Profiles"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-primitive-types"><strong>1. Primitive Types</strong></h2>

<p>Primitive types là các giá trị đơn giản, "nguyên tử" trong FHIR.</p>

<table>
<thead>
<tr><th>Type</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td>boolean</td><td>true/false</td><td><code>true</code></td></tr>
<tr><td>integer</td><td>Số nguyên 32-bit</td><td><code>42</code></td></tr>
<tr><td>integer64</td><td>Số nguyên 64-bit (R5 mới)</td><td><code>9223372036854775807</code></td></tr>
<tr><td>string</td><td>Chuỗi Unicode (≤ 1MB)</td><td><code>"Nguyễn Văn A"</code></td></tr>
<tr><td>decimal</td><td>Số thực (precision tùy ý)</td><td><code>3.14159</code></td></tr>
<tr><td>uri</td><td>URI (RFC 3986)</td><td><code>"http://loinc.org"</code></td></tr>
<tr><td>url</td><td>URL</td><td><code>"https://fhir.example.com"</code></td></tr>
<tr><td>canonical</td><td>URL đến conformance resource</td><td><code>"http://hl7.org/fhir/StructureDefinition/Patient"</code></td></tr>
<tr><td>uuid</td><td>UUID (RFC 4122)</td><td><code>"urn:uuid:c757873d-ec9a-4326-a141-556f43239520"</code></td></tr>
<tr><td>id</td><td>Resource ID (1-64 chars, [A-Za-z0-9\-.])</td><td><code>"patient-001"</code></td></tr>
<tr><td>date</td><td>Ngày (YYYY, YYYY-MM, YYYY-MM-DD)</td><td><code>"2025-01-15"</code></td></tr>
<tr><td>dateTime</td><td>Ngày giờ với timezone</td><td><code>"2025-01-15T10:30:00+07:00"</code></td></tr>
<tr><td>instant</td><td>Thời điểm chính xác (xs:dateTime)</td><td><code>"2025-01-15T10:30:00.000Z"</code></td></tr>
<tr><td>time</td><td>Giờ trong ngày</td><td><code>"10:30:00"</code></td></tr>
<tr><td>code</td><td>Giá trị từ ValueSet</td><td><code>"male"</code></td></tr>
<tr><td>oid</td><td>OID (ISO)</td><td><code>"urn:oid:2.16.840.1.113883.6.1"</code></td></tr>
<tr><td>markdown</td><td>Markdown text</td><td><code>"**Bold** and *italic*"</code></td></tr>
<tr><td>base64Binary</td><td>Base64 encoded</td><td>Binary data</td></tr>
<tr><td>positiveInt</td><td>Số nguyên &gt; 0</td><td><code>1</code></td></tr>
<tr><td>unsignedInt</td><td>Số nguyên ≥ 0</td><td><code>0</code></td></tr>
</tbody>
</table>

<h3 id="primitive-extensions"><strong>Extensions trên Primitive</strong></h3>

<p>Ngay cả primitives cũng có thể mang extensions (sử dụng underscore convention):</p>

<pre><code class="language-json">{
  "birthDate": "1990-05-15",
  "_birthDate": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
        "valueDateTime": "1990-05-15T14:30:00+07:00"
      }
    ]
  }
}
</code></pre>

<h2 id="2-complex-types"><strong>2. Complex Types — General-Purpose</strong></h2>

<h3 id="identifier"><strong>Identifier</strong></h3>

<pre><code class="language-json">{
  "use": "official",
  "type": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
        "code": "NI",
        "display": "National unique individual identifier"
      }
    ],
    "text": "CCCD"
  },
  "system": "http://cccd.gov.vn",
  "value": "012345678901",
  "period": {
    "start": "2021-01-01",
    "end": "2036-01-01"
  },
  "assigner": {
    "display": "Bộ Công an"
  }
}
</code></pre>

<h3 id="humanname"><strong>HumanName</strong></h3>

<pre><code class="language-json">{
  "use": "official",
  "text": "Nguyễn Văn A",
  "family": "Nguyễn",
  "given": ["Văn", "A"],
  "prefix": ["BS."],
  "suffix": ["ThS."],
  "period": {
    "start": "1990-05-15"
  }
}
</code></pre>

<h3 id="address"><strong>Address</strong></h3>

<pre><code class="language-json">{
  "use": "home",
  "type": "physical",
  "text": "123 Đường Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM",
  "line": ["123 Đường Lê Lợi"],
  "city": "Hồ Chí Minh",
  "district": "Quận 1",
  "state": "TP.HCM",
  "postalCode": "700000",
  "country": "VN"
}
</code></pre>

<h3 id="contactpoint"><strong>ContactPoint</strong></h3>

<pre><code class="language-json">[
  {
    "system": "phone",
    "value": "+84901234567",
    "use": "mobile",
    "rank": 1
  },
  {
    "system": "email",
    "value": "nguyen.van.a@email.com",
    "use": "home"
  }
]
</code></pre>

<h3 id="coding-codeableconcept"><strong>Coding và CodeableConcept</strong></h3>

<pre><code class="language-json">// Coding — một mã duy nhất
{
  "system": "http://loinc.org",
  "version": "2.77",
  "code": "8480-6",
  "display": "Systolic blood pressure"
}

// CodeableConcept — nhiều Codings + text
{
  "coding": [
    {
      "system": "http://hl7.org/fhir/sid/icd-10",
      "code": "I10",
      "display": "Essential (primary) hypertension"
    },
    {
      "system": "http://snomed.info/sct",
      "code": "38341003",
      "display": "Hypertensive disorder"
    }
  ],
  "text": "Tăng huyết áp nguyên phát"
}
</code></pre>

<p><strong>CodeableConcept</strong> cho phép biểu diễn cùng một khái niệm bằng nhiều CodeSystems khác nhau — hỗ trợ interoperability.</p>

<h3 id="quantity"><strong>Quantity</strong></h3>

<pre><code class="language-json">{
  "value": 145,
  "comparator": "&gt;=",
  "unit": "mmHg",
  "system": "http://unitsofmeasure.org",
  "code": "mm[Hg]"
}
</code></pre>

<h3 id="period-timing"><strong>Period và Timing</strong></h3>

<pre><code class="language-json">// Period
{
  "start": "2025-01-15T08:00:00+07:00",
  "end": "2025-01-15T08:45:00+07:00"
}

// Timing (cho medication dosage)
{
  "repeat": {
    "frequency": 2,
    "period": 1,
    "periodUnit": "d",
    "when": ["ACM", "ACV"],
    "boundsPeriod": {
      "start": "2025-01-15",
      "end": "2025-02-15"
    }
  },
  "code": {
    "text": "Ngày 2 lần, sáng và tối sau ăn"
  }
}
</code></pre>

<h3 id="reference"><strong>Reference</strong></h3>

<pre><code class="language-json">{
  "reference": "Patient/patient-001",
  "type": "Patient",
  "identifier": {
    "system": "http://hospital.vn/mrn",
    "value": "MRN12345"
  },
  "display": "Nguyễn Văn A"
}
</code></pre>

<p>Reference có thể chứa <code>reference</code> (literal URL), <code>identifier</code> (logical reference), hoặc cả hai.</p>

<h2 id="3-narrative"><strong>3. Narrative (Human-Readable)</strong></h2>

<pre><code class="language-json">{
  "text": {
    "status": "generated",
    "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;p&gt;Bệnh nhân: Nguyễn Văn A, Nam, sinh ngày 15/05/1990&lt;/p&gt;&lt;/div&gt;"
  }
}
</code></pre>

<table>
<thead>
<tr><th>Status</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>generated</td><td>Tạo tự động từ structured data</td></tr>
<tr><td>extensions</td><td>Có thông tin từ extensions không có trong structured data</td></tr>
<tr><td>additional</td><td>Có thông tin bổ sung không có trong structured data</td></tr>
<tr><td>empty</td><td>Không có text (narrative trống)</td></tr>
</tbody>
</table>

<h2 id="4-backbone-element"><strong>4. BackboneElement</strong></h2>

<p>BackboneElement là complex type <strong>chỉ tồn tại bên trong resource</strong> cha, không thể dùng lại ở nơi khác. Ví dụ: <code>Patient.contact</code>, <code>Encounter.participant</code>, <code>Encounter.diagnosis</code>.</p>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "contact": [
    {
      "relationship": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
              "code": "N",
              "display": "Next-of-Kin"
            }
          ]
        }
      ],
      "name": {
        "text": "Nguyễn Thị B (vợ)"
      },
      "telecom": [
        {
          "system": "phone",
          "value": "+84907654321"
        }
      ]
    }
  ]
}
</code></pre>

<h2 id="5-choice-types"><strong>5. Choice Types [x]</strong></h2>

<p>Một số elements cho phép nhiều data types — ký hiệu bằng <code>[x]</code>:</p>

<table>
<thead>
<tr><th>Element definition</th><th>Sử dụng thực tế</th></tr>
</thead>
<tbody>
<tr><td>value[x]</td><td>valueQuantity, valueString, valueCodeableConcept, valueBoolean, ...</td></tr>
<tr><td>onset[x]</td><td>onsetDateTime, onsetAge, onsetPeriod, onsetRange, onsetString</td></tr>
<tr><td>effective[x]</td><td>effectiveDateTime, effectivePeriod, effectiveInstant, effectiveTiming</td></tr>
<tr><td>deceased[x]</td><td>deceasedBoolean, deceasedDateTime</td></tr>
<tr><td>multipleBirth[x]</td><td>multipleBirthBoolean, multipleBirthInteger</td></tr>
</tbody>
</table>

<pre><code class="language-json">// Observation value dạng Quantity
{"valueQuantity": {"value": 37.2, "unit": "°C"}}

// Observation value dạng CodeableConcept
{"valueCodeableConcept": {"coding": [{"code": "positive"}]}}

// Observation value dạng string
{"valueString": "Bình thường"}
</code></pre>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<ul>
<li><p><strong>Primitive types</strong> — 20+ types cơ bản (string, date, code, uri, ...), hỗ trợ extensions</p></li>
<li><p><strong>Complex types</strong> — HumanName, Address, Identifier, CodeableConcept, Quantity, Reference, ...</p></li>
<li><p><strong>CodeableConcept</strong> — Quan trọng nhất, cho phép multi-coding cho interoperability</p></li>
<li><p><strong>Narrative</strong> — Human-readable XHTML trong mọi DomainResource</p></li>
<li><p><strong>BackboneElement</strong> — Complex type nội bộ resource</p></li>
<li><p><strong>Choice types [x]</strong> — Linh hoạt chọn data type phù hợp</p></li>
</ul>
