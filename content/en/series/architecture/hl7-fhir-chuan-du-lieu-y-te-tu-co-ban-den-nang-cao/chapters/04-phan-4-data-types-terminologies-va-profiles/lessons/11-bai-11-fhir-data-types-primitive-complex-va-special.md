---
id: 019e0a10-a401-7001-d001-f1a7f8000401
title: 'Lesson 11: FHIR Data Types - Primitive, Complex and Special'
slug: bai-11-fhir-data-types-primitive-complex-va-special
description: >-
  Primitive types (boolean, string, uri, date, dateTime, instant, decimal,
  integer), Complex types (HumanName, Address, ContactPoint, Identifier,
  CodeableConcept, Coding, Quantity, Period, Reference, Narrative),
  BackboneElement, Element. Extensions on data types.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 4: Data Types, Terminologies and Profiles'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Basic to Advanced Healthcare Data Standard
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1400" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1400)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1055" cy="195" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="1010" cy="250" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="965" cy="45" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="920" cy="100" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="155" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="65" x2="1100" y2="145" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="95" x2="1050" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="999.6410161513776,145 999.6410161513776,185 965,205 930.3589838486224,185 930.3589838486224,145 965,125" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ Architecture — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 11: FHIR Data Types - Primitive,</tspan>
      <tspan x="60" dy="42">Complex and Special</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Basic to Advanced Healthcare Data Standard</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: Data Types, Terminologies and Profiles</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-primitive-types"><strong>1. Primitive Types</strong></h2>

<p>Primitive types are simple, "atomic" values in FHIR.</p>

<table>
<thead>
<tr><th>Type</th><th>Description</th><th>For example</th></tr>
</thead>
<tbody>
<tr><td>boolean</td><td>true/false</td><td><code>true</code></td></tr>
<tr><td>integer</td><td>32-bit integer</td><td><code>42</code></td></tr>
<tr><td>integer64</td><td>64-bit integer (new R5)</td><td><code>9223372036854775807</code></td></tr>
<tr><td>string.string</td><td>Unicode String (≤ 1MB)</td><td><code>"Nguyen Van A"</code></td></tr>
<tr><td>decimal</td><td>Real numbers (arbitrary precision)</td><td><code>3.14159</code></td></tr>
<tr><td>uri</td><td>URI (RFC 3986)</td><td><code>"http://loinc.org"</code></td></tr>
<tr><td>url</td><td>URL</td><td><code>"https://fhir.example.com"</code></td></tr>
<tr><td>canonical</td><td>URL to conformance resource</td><td><code>"http://hl7.org/fhir/StructureDefinition/Patient"</code></td></tr>
<tr><td>uuid</td><td>UUID (RFC 4122)</td><td><code>"urn:uuid:c757873d-ec9a-4326-a141-556f43239520"</code></td></tr>
<tr><td>id</td><td>Resource ID (1-64 chars, [A-Za-z0-9\-.])</td><td><code>"patient-001"</code></td></tr>
<tr><td>date. date</td><td>Date (YYYY, YYYY-MM, YYYY-MM-DD)</td><td><code>"2025-01-15"</code></td></tr>
<tr><td>dateTime</td><td>Date and time with timezone</td><td><code>"2025-01-15T10:30:00+07:00"</code></td></tr>
<tr><td>instant. instant</td><td>Exact time (xs:dateTime)</td><td><code>"2025-01-15T10:30:00.000Z"</code></td></tr>
<tr><td>time. time</td><td>Hours of the day</td><td><code>"10:30:00"</code></td></tr>
<tr><td>code</td><td>Value from ValueSet</td><td><code>"male"</code></td></tr>
<tr><td>oid</td><td>OID (ISO)</td><td><code>"urn:oid:2.16.840.1.113883.6.1"</code></td></tr>
<tr><td>markdown</td><td>Markdown text</td><td><code>"**Bold** and *italic*"</code></td></tr>
<tr><td>base64Binary</td><td>Base64 encoded</td><td>Binary data</td></tr>
<tr><td>positiveInt</td><td>Integer > 0</td><td><code>1</code></td></tr>
<tr><td>unsignedInt</td><td>Integer ≥ 0</td><td><code>0</code></td></tr>
</tbody>
</table>

<h3 id="primitive-extensions"><strong>Extensions on Primitive</strong></h3>

<p>Even primitives can carry extensions (using the underscore convention):</p>

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

<h3 id="coding-codeableconcept"><strong>Coding and CodeableConcept</strong></h3>

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

<p><strong>CodeableConcept</strong> allows representing the same concept in different CodeSystems — supporting interoperability.</p>

<h3 id="quantity"><strong>Quantity</strong></h3>

<pre><code class="language-json">{
  "value": 145,
  "comparator": "&gt;=",
  "unit": "mmHg",
  "system": "http://unitsofmeasure.org",
  "code": "mm[Hg]"
}
</code></pre>

<h3 id="period-timing"><strong>Period and Timing</strong></h3>

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

<p>Reference may contain <code>reference. reference</code> (literal URL), <code>identifier</code> (logical reference), or both.</p>

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
<tr><th>Status</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>generated</td><td>Created automatically from structured data</td></tr>
<tr><td>extensions</td><td>There is information from extensions that is not in the structured data</td></tr>
<tr><td>additional. additional</td><td>There is additional information that is not included in the structured data</td></tr>
<tr><td>empty</td><td>No text (empty narrative)</td></tr>
</tbody>
</table>

<h2 id="4-backbone-element"><strong>4. BackboneElement</strong></h2>

<p>BackboneElement is a complex type <strong>only exists inside the resource</strong> father, cannot be reused elsewhere. For example: <code>Patient.contact</code>, <code>Encounter.participant</code>, <code>Encounter.diagnosis</code>.</p>

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

<p>Some elements allow multiple data types — equals symbol <code>[x]</code>:</p>

<table>
<thead>
<tr><th>Element definition</th><th>Practical use</th></tr>
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

<h2 id="6-tong-ket"><strong>6. Summary</strong></h2>

<ul>
<li><p><strong>Primitive types</strong> — 20+ basic types (string, date, code, uri, ...), extensions supported</p></li>
<li><p><strong>Complex types</strong> — HumanName, Address, Identifier, CodeableConcept, Quantity, Reference, ...</p></li>
<li><p><strong>CodeableConcept</strong> — Most importantly, allow multi-coding for interoperability</p></li>
<li><p><strong>Narrative</strong> — Human-readable XHTML in all DomainResources</p></li>
<li><p><strong>BackboneElement</strong> — Complex type internal resource</p></li>
<li><p><strong>Choice types [x]</strong> — Flexibly choose the appropriate data type</p></li>
</ul>
