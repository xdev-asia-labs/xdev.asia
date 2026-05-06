---
id: 019e0a10-a102-7001-d001-f1a7f8000102
title: 'Lesson 2: Overview of FHIR R5 - Architecture and design principles'
slug: bai-2-tong-quan-fhir-r5-kien-truc-va-nguyen-tac-thiet-ke
description: >-
  FHIR architecture (Resources, Data Types, Extensibility, RESTful API,
  Messaging, Documents), 80/20 design principles, FHIR Maturity Model (FMM),
  comparison of FHIR R4 vs R5, modules in specification.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 1: HL7 and FHIR Platform'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Basic to Advanced Healthcare Data Standard
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1779" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1779)"/>

  <!-- Decorations -->
  <g>
    <circle cx="973" cy="69" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="846" cy="82" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="719" cy="95" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1092" cy="108" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="965" cy="121" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="79" x2="1100" y2="159" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="109" x2="1050" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1058.444863728671,212 1058.444863728671,246 1029,263 999.555136271329,246 999.555136271329,212 1029,195" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ Architecture — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 2: Overview of FHIR R5 - Architecture and</tspan>
      <tspan x="60" dy="42">design principles</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Basic to Advanced Healthcare Data Standard</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: HL7 and FHIR Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-kien-truc-tong-the-fhir"><strong>1. Overall architecture of FHIR</strong></h2>

<p>FHIR is designed as one <strong>platform. platform</strong> — not just a data standard but a complete ecosystem for health information exchange. The FHIR architecture includes the following layers:</p>

<h3 id="cac-tang-kien-truc"><strong>Architectural floors</strong></h3>

<pre><code>┌─────────────────────────────────────────┐
│     Implementation Guides (IGs)         │  ← Tùy chỉnh cho ngữ cảnh
├─────────────────────────────────────────┤
│   Profiles / Extensions / Terminologies │  ← Ràng buộc &amp; mở rộng
├─────────────────────────────────────────┤
│   Exchange (REST / Messaging / Docs)    │  ← Cách trao đổi dữ liệu
├─────────────────────────────────────────┤
│          Resources (~157 loại)          │  ← Đơn vị dữ liệu
├─────────────────────────────────────────┤
│         Data Types (Primitive/Complex)  │  ← Kiểu dữ liệu
├─────────────────────────────────────────┤
│      Foundation (Infrastructure)        │  ← Nền tảng chung
└─────────────────────────────────────────┘
</code></pre>

<h2 id="2-resource-don-vi-co-ban"><strong>2. Resource — The basic unit of FHIR</strong></h2>

<p>In FHIR, everything is represented as <strong>Resource</strong>. Resources are basic building blocks — like "tables" in a relational database, but much more flexible.</p>

<h3 id="dac-diem-resource"><strong>Common characteristics of all Resources</strong></h3>

<p>All Resources have:</p>

<ul>
<li><p><strong>id</strong> — logical identifier, unique within the server</p></li>
<li><p><strong>meta. meta</strong> — metadata (versionId, lastUpdated, profile, security, tag)</p></li>
<li><p><strong>implicitRules</strong> — reference to special handling rules (rarely used)</p></li>
<li><p><strong>language. language</strong> — language of the resource</p></li>
</ul>

<p>Most Resources are <strong>DomainResource</strong> (inherit from Resource), add:</p>

<ul>
<li><p><strong>text. text</strong> — Narrative (human-readable HTML part)</p></li>
<li><p><strong>contained. contained</strong> — Resources embedded inside</p></li>
<li><p><strong>extension</strong> — extended data</p></li>
<li><p><strong>modifierExtension</strong> — extension changes the semantics of Resource</p></li>
</ul>

<h3 id="vi-du-patient-json"><strong>Example: Patient Resource (JSON)</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "id": "example-vn",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2026-03-30T10:00:00Z"
  },
  "text": {
    "status": "generated",
    "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;Nguyễn Văn A, Nam, 15/03/1985&lt;/div&gt;"
  },
  "identifier": [
    {
      "system": "urn:oid:2.16.840.1.113883.4.56.10",
      "value": "001085012345"
    }
  ],
  "active": true,
  "name": [
    {
      "use": "official",
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }
  ],
  "gender": "male",
  "birthDate": "1985-03-15",
  "address": [
    {
      "use": "home",
      "line": ["123 Lê Lợi"],
      "city": "Thành phố Hồ Chí Minh",
      "country": "VN"
    }
  ]
}
</code></pre>

<h3 id="157-resources"><strong>157 Resources are classified by modules</strong></h3>

<p>FHIR R5 has <strong>157 resource types</strong>, organized into modules:</p>

<table>
<thead>
<tr><th>Module</th><th>Description</th><th>Typical Resources</th></tr>
</thead>
<tbody>
<tr><td><strong>Foundation</strong></td><td>Basic infrastructure</td><td>Bundle, OperationOutcome, Binary, Parameters</td></tr>
<tr><td><strong>Conformance</strong></td><td>Conformance specification</td><td>CapabilityStatement, StructureDefinition, SearchParameter</td></tr>
<tr><td><strong>Terminology</strong></td><td>Terminology</td><td>CodeSystem, ValueSet, ConceptMap</td></tr>
<tr><td><strong>Security</strong></td><td>Security</td><td>Provenance, AuditEvent, Consent, Permission</td></tr>
<tr><td><strong>Administration</strong></td><td>Administration</td><td>Patient, Practitioner, Organization, Location, Encounter</td></tr>
<tr><td><strong>Clinical</strong></td><td>Clinical</td><td>Condition, Observation, AllergyIntolerance, Procedure</td></tr>
<tr><td><strong>Diagnostics</strong></td><td>Diagnosis</td><td>DiagnosticReport, Specimen, ImagingStudy</td></tr>
<tr><td><strong>Medications</strong></td><td>Medicine</td><td>Medication, MedicationRequest, Immunization</td></tr>
<tr><td><strong>Workflow</strong></td><td>Process</td><td>Task, Appointment, Schedule, ServiceRequest</td></tr>
<tr><td><strong>Financial</strong></td><td>Finance</td><td>Claim, Coverage, ExplanationOfBenefit</td></tr>
</tbody>
</table>

<h2 id="3-nguyen-tac-80-20"><strong>3. 80/20 design principle</strong></h2>

<p>FHIR applies the philosophy: <strong>Addresses 80% of common use cases in the basic standard, allowing the remaining 20% through extensions and profiles</strong>.</p>

<p>This means:</p>

<ul>
<li><p><strong>The basic resource is simple enough</strong> — don't try to cram in every special case</p></li>
<li><p><strong>Extension mechanism</strong> — when you need more data, use Extensions instead of standard changes</p></li>
<li><p><strong>Profile</strong> — when tighter constraints are needed, use StructureDefinition</p></li>
</ul>

<p>For example, the basic Resource Patient does not have a "CCCD number" field (only used in Vietnam), but you can add it via Extension or use <code>identifier</code> with the appropriate system.</p>

<h2 id="4-exchange-paradigms"><strong>4. Three data exchange paradigms</strong></h2>

<p>FHIR supports 3 ways of data exchange, suitable for different situations:</p>

<h3 id="restful-api"><strong>4.1. RESTful APIs</strong></h3>

<p>The most common way, based on HTTP methods:</p>

<pre><code># Đọc thông tin bệnh nhân
GET /Patient/123

# Tạo bệnh nhân mới
POST /Patient
Content-Type: application/fhir+json
{...}

# Cập nhật
PUT /Patient/123
{...}

# Tìm kiếm
GET /Patient?family=Nguyen&amp;birthdate=1985-03-15

# Xóa
DELETE /Patient/123
</code></pre>

<p><strong>Use when:</strong> Web/mobile applications, patient portals, data queries, SMART apps.</p>

<h3 id="messaging"><strong>4.2. Messaging</strong></h3>

<p>Sending messages between systems (similar to HL7 v2 but using FHIR Resources):</p>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "message",
  "entry": [
    {
      "resource": {
        "resourceType": "MessageHeader",
        "eventCoding": {
          "system": "http://example.org/events",
          "code": "admit-notification"
        },
        "source": { "endpoint": "http://hospital-a.vn/fhir" }
      }
    },
    {
      "resource": {
        "resourceType": "Patient",
        "id": "123"
      }
    }
  ]
}
</code></pre>

<p><strong>Use when:</strong> Event-driven exchange (hospital admission, discharge, test results), integration with legacy systems.</p>

<h3 id="documents"><strong>4.3. Documents</strong></h3>

<p>Create structured medical documents (similar to CDA but using FHIR):</p>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "document",
  "entry": [
    {
      "resource": {
        "resourceType": "Composition",
        "title": "Tóm tắt xuất viện",
        "type": {
          "coding": [{
            "system": "http://loinc.org",
            "code": "18842-5",
            "display": "Discharge summary"
          }]
        },
        "section": [...]
      }
    }
  ]
}
</code></pre>

<p><strong>Use when:</strong> Hospital discharge papers, medical history summaries, referral papers, International Patient Summary.</p>

<h2 id="5-fhir-maturity-model"><strong>5. FHIR Maturity Model (FMM)</strong></h2>

<p>Each Resource in FHIR has a maturity level (FMM) from 0 to Normal (N):</p>

<table>
<thead>
<tr><th>FMM</th><th>Level</th><th>Meaning</th></tr>
</thead>
<tbody>
<tr><td>0</td><td>Draft</td><td>Just proposed, not yet implemented</td></tr>
<tr><td>1</td><td>Draft (tested)</td><td>There is at least 1 implementation</td></tr>
<tr><td>2</td><td>Trial Use</td><td>Tested at Connectathon</td></tr>
<tr><td>3</td><td>Trial Use (verified)</td><td>There have been many practical implementations</td></tr>
<tr><td>4</td><td>Trial Use (agreed)</td><td>Quality criteria met, standard preparation</td></tr>
<tr><td>5</td><td>Trial Use (published)</td><td>Published in 2+ ballot cycles</td></tr>
<tr><td><strong>N</strong></td><td><strong>Normative</strong></td><td><strong>Stable, backward compatible — NO change</strong></td></tr>
</tbody>
</table>

<p>Some Resources have been reached <strong>Normative</strong> in R5:</p>
<ul>
<li><p><strong>Patient</strong> (N), <strong>Observation</strong> (N), <strong>Bundle</strong> (N), <strong>CapabilityStatement</strong> (N)</p></li>
<li><p><strong>StructureDefinition</strong> (N), <strong>ValueSet</strong> (N), <strong>CodeSystem</strong> (N)</p></li>
<li><p><strong>OperationOutcome</strong> (N), <strong>Binary</strong> (N), <strong>Parameters</strong> (N)</p></li>
</ul>

<p>When choosing Resources for a project, priority should be given to Resources with FMM ≥ 3 or Normal to ensure stability.</p>

<h2 id="6-fhir-r4-vs-r5"><strong>6. FHIR R4 vs R5 — Important changes</strong></h2>

<p>R4 is still the most used version (because many mandates in the US are based on R4). R5 brings many improvements:</p>

<table>
<thead>
<tr><th>Features</th><th>R4</th><th>R5</th></tr>
</thead>
<tbody>
<tr><td>Subscriptions</td><td>Criteria-based subscription</td><td><strong>Topic-based Subscriptions</strong> (SubscriptionTopic)</td></tr>
<tr><td>Workflow</td><td>Task basic</td><td>New Transport resource, improved workflow patterns</td></tr>
<tr><td>Evidence-Based Med</td><td>Limitations</td><td>new Evidence, EvidenceVariable, ArtifactAssessment</td></tr>
<tr><td>New Resources</td><td>—</td><td>Permission, InventoryItem, InventoryReport, NutritionIntake</td></tr>
<tr><td>Observation</td><td>component-based</td><td>Improvements triggeredBy, instantiatesCanonical</td></tr>
<tr><td>Search</td><td>Standard</td><td>_filter, _sort enhancements</td></tr>
<tr><td>Types</td><td>—</td><td>CodeableReference(new), integer64</td></tr>
</tbody>
</table>

<p><strong>Recommendation:</strong></p>
<ul>
<li><p>New project in the US: use <strong>R4</strong> (because of US Core mandate)</p></li>
<li><p>New non-binding project: considerations <strong>R5</strong> (newer, more features)</p></li>
<li><p>Project in Vietnam: <strong>R4</strong> or <strong>R5</strong> are all suitable (no specific mandate yet)</p></li>
</ul>

<h2 id="7-specification-modules"><strong>7. Modules in the FHIR Specification</strong></h2>

<p>FHIR specification is organized into main modules:</p>

<h3 id="foundation-module"><strong>Foundation Module</strong></h3>
<p>Technical foundation: Resource definition, Data Types, Extensions, REST API, Messaging, Documents, Narrative, Compartments.</p>

<h3 id="implementer-support"><strong>Implementer Support Module</strong></h3>
<p>Deployment support: Downloads, testing tools, implementation guides registry, validation.</p>

<h3 id="security-privacy"><strong>Security & Privacy Module</strong></h3>
<p>Security: Authorization, Authentication, Security labels, Audit, Consent, Provenance.</p>

<h3 id="conformance-module"><strong>Conformance Module</strong></h3>
<p>Conformance specification: CapabilityStatement, StructureDefinition, OperationDefinition, SearchParameter, Implementation Guides.</p>

<h3 id="terminology-module"><strong>Terminology Module</strong></h3>
<p>Terminology: CodeSystem, ValueSet, ConceptMap, NamingSystem, terminology operations ($validate-code, $expand, $lookup, $translate).</p>

<h3 id="administration-module"><strong>Administration Module</strong></h3>
<p>Administrative management: Patient, Practitioner, Organization, Location, HealthcareService, Endpoint, Device.</p>

<h3 id="clinical-modules"><strong>Clinical Modules</strong></h3>
<p>Clinical Modules include: Clinical Summary (Condition, AllergyIntolerance, Procedure), Diagnostics (Observation, DiagnosticReport), Medications, Care Provision (CarePlan, Goal), Workflow (Task, Appointment).</p>

<h3 id="financial-module"><strong>Financial Module</strong></h3>
<p>Medical finance: Coverage, Claim, ExplanationOfBenefit, Account, Invoice.</p>

<h2 id="8-resource-references"><strong>8. Resource References — Links between Resources</strong></h2>

<p>Resources in FHIR are linked together <strong>References</strong>. This is the most important mechanism to create a medical data network.</p>

<pre><code class="language-json">{
  "resourceType": "Observation",
  "id": "blood-pressure",
  "status": "final",
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "85354-9",
      "display": "Blood pressure panel"
    }]
  },
  "subject": {
    "reference": "Patient/example-vn",
    "display": "Nguyễn Văn A"
  },
  "encounter": {
    "reference": "Encounter/visit-2026-03-30"
  },
  "performer": [{
    "reference": "Practitioner/dr-tran"
  }],
  "effectiveDateTime": "2026-03-30T09:00:00+07:00",
  "component": [
    {
      "code": {
        "coding": [{
          "system": "http://loinc.org",
          "code": "8480-6",
          "display": "Systolic blood pressure"
        }]
      },
      "valueQuantity": {
        "value": 120,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      }
    },
    {
      "code": {
        "coding": [{
          "system": "http://loinc.org",
          "code": "8462-4",
          "display": "Diastolic blood pressure"
        }]
      },
      "valueQuantity": {
        "value": 80,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      }
    }
  ]
}
</code></pre>

<p>In the example above:</p>
<ul>
<li><p><code>subject. subject</code> → link to <strong>Patient</strong></p></li>
<li><p><code>encounter. encounter</code> → link to <strong>Encounter</strong> (visit)</p></li>
<li><p><code>performer</code> → link to <strong>Practitioner</strong> (doctor measures)</p></li>
</ul>

<h2 id="9-narrative"><strong>9. Narrative — Human-readable part</strong></h2>

<p>Each DomainResource can contain sections <strong>Narrative</strong> — HTML represents resource content that humans can read. This is an important feature for <strong>clinical safety</strong>:</p>

<pre><code class="language-json">{
  "text": {
    "status": "generated",
    "div": "&lt;div xmlns='http://www.w3.org/1999/xhtml'&gt;&lt;p&gt;Huyết áp: 120/80 mmHg&lt;/p&gt;&lt;p&gt;Bệnh nhân: Nguyễn Văn A&lt;/p&gt;&lt;p&gt;Ngày đo: 30/03/2026&lt;/p&gt;&lt;/div&gt;"
  }
}
</code></pre>

<p>Narrative status can be:</p>
<ul>
<li><p><code>generated</code> — created from structured data</p></li>
<li><p><code>extensions</code> — contains information from extensions</p></li>
<li><p><code>additional. additional</code> — has additional information that is not included in the structured data</p></li>
<li><p><code>empty</code> — no content (in contained resources)</p></li>
</ul>

<h2 id="10-extensibility"><strong>10. Extensibility — Extensibility mechanism of FHIR</strong></h2>

<p>This is one of FHIR's strongest features. When you need additional data that is not in the standard, you use it <strong>Extensions</strong>:</p>

<pre><code class="language-json">{
  "resourceType": "Patient",
  "id": "vn-patient",
  "extension": [
    {
      "url": "http://fhir.vn/StructureDefinition/patient-ethnicity",
      "valueCodeableConcept": {
        "coding": [{
          "system": "http://fhir.vn/CodeSystem/vn-ethnicity",
          "code": "01",
          "display": "Kinh"
        }]
      }
    },
    {
      "url": "http://fhir.vn/StructureDefinition/patient-cccd",
      "valueString": "001085012345"
    }
  ],
  "name": [{"family": "Nguyễn", "given": ["Văn", "A"]}]
}
</code></pre>

<p>Two important rules:</p>
<ol>
<li><p><strong>The receiving system MUST be able to read the resource</strong> even if you don't understand extension (graceful handling)</p></li>
<li><p><strong>Extensions MUST NOT change semantics</strong> of base elements (except modifierExtension)</p></li>
</ol>

<h2 id="11-tom-tat"><strong>11. Summary</strong></h2>

<p>In this article, we learned:</p>

<ul>
<li><p><strong>FHIR architecture</strong> includes many layers: Foundation → Data Types → Resources → Exchange → Profiles → IGs</p></li>
<li><p><strong>Resource</strong> As the basic unit, FHIR R5 has 157 resource types</p></li>
<li><p><strong>80/20 rule</strong>: basic standard solves 80%, extensions give 20%</p></li>
<li><p><strong>3 paradigms</strong>: REST (most popular), Messaging, Documents</p></li>
<li><p><strong>FMM</strong>: assess maturity level, prioritize Resources Normative</p></li>
<li><p><strong>R4 vs R5</strong>: R4 is more stable, R5 has many new features</p></li>
<li><p><strong>References</strong>: how to link Resources into a data network</p></li>
<li><p><strong>Narrative</strong>: human-readable HTML section for clinical safety</p></li>
<li><p><strong>Extensibility</strong>: flexible extensibility mechanism without breaking the standard</p></li>
</ul>

<p>Next lesson, we will <strong>Practice setting up the environment</strong>: HAPI FHIR Server, Postman, FHIR tools — and test your first CRUD operations.</p>
