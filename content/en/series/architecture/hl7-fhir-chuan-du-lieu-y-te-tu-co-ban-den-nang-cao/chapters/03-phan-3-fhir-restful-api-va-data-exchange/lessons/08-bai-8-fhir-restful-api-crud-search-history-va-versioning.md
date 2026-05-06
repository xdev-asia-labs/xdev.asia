---
id: 019e0a10-a301-7001-d001-f1a7f8000301
title: 'Lesson 8: FHIR RESTful API - CRUD, Search, History and Versioning'
slug: bai-8-fhir-restful-api-crud-search-history-va-versioning
description: >-
  Details of REST interactions: create (POST), read (GET), update (PUT), patch
  (PATCH), delete (DELETE), vread, history. Content negotiation (JSON/XML),
  ETag, If-Match, Conditional operations, CapabilityStatement.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 'Part 3: FHIR RESTful API and Data Exchange'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Basic to Advanced Healthcare Data Standard
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7720" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7720)"/>

  <!-- Decorations -->
  <g>
    <circle cx="704" cy="182" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="808" cy="146" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="912" cy="110" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="1016" cy="74" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="620" cy="38" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="142" x2="1100" y2="222" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="172" x2="1050" y2="242" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1074.0429399400243,223.5 1074.0429399400243,260.5 1042,279 1009.9570600599758,260.5 1009.9570600599758,223.5 1042,205" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ Architecture — Lesson 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 8: FHIR RESTful API - CRUD, Search,</tspan>
      <tspan x="60" dy="42">History and Versioning</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Basic to Advanced Healthcare Data Standard</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: FHIR RESTful API and Data Exchange</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-fhir-restful-api-overview"><strong>1. FHIR RESTful API Overview</strong></h2>

<p>FHIR uses <strong>RESTful APIs</strong> as the main interaction paradigm. Each Resource type has its own endpoint, following the HTTP standard.</p>

<h3 id="base-url"><strong>Base URL</strong></h3>

<pre><code>https://fhir-server.example.com/fhir/r5
        ├── base URL ──────────────────┘
        
GET [base]/Patient/123           → Đọc Patient có id=123
POST [base]/Patient              → Tạo Patient mới
PUT [base]/Patient/123           → Cập nhật Patient 123
DELETE [base]/Patient/123        → Xóa Patient 123
</code></pre>

<h3 id="interactions-summary"><strong>Overview of Interactions</strong></h3>

<table>
<thead>
<tr><th>Interaction</th><th>HTTP Method</th><th>URL</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>read</td><td>GET</td><td>[base]/[type]/[id]</td><td>Read resources</td></tr>
<tr><td>vread</td><td>GET</td><td>[base]/[type]/[id]/_history/[vid]</td><td>Read specific version</td></tr>
<tr><td>update. update</td><td>PUT</td><td>[base]/[type]/[id]</td><td>Update resources</td></tr>
<tr><td>patch. patch</td><td>PATCH</td><td>[base]/[type]/[id]</td><td>Partial update</td></tr>
<tr><td>delete</td><td>DELETE</td><td>[base]/[type]/[id]</td><td>Delete resources</td></tr>
<tr><td>create</td><td>POST</td><td>[base]/[type]</td><td>Create new resources</td></tr>
<tr><td>search. search</td><td>GET/POST</td><td>[base]/[type]?params</td><td>Search</td></tr>
<tr><td>history. history</td><td>GET</td><td>[base]/[type]/[id]/_history</td><td>History changes</td></tr>
<tr><td>capabilities</td><td>GET</td><td>[base]/metadata</td><td>CapabilityStatement</td></tr>
</tbody>
</table>

<h2 id="2-create"><strong>2. Create (POST)</strong></h2>

<pre><code class="language-http">POST /fhir/r5/Patient HTTP/1.1
Host: fhir-server.example.com
Content-Type: application/fhir+json
Prefer: return=representation

{
  "resourceType": "Patient",
  "name": [
    {
      "family": "Nguyễn",
      "given": ["Văn", "A"],
      "text": "Nguyễn Văn A"
    }
  ],
  "gender": "male",
  "birthDate": "1990-05-15"
}
</code></pre>

<pre><code class="language-http">HTTP/1.1 201 Created
Location: /fhir/r5/Patient/newly-assigned-id/_history/1
ETag: W/"1"
Last-Modified: 2025-01-15T10:00:00Z
Content-Type: application/fhir+json

{
  "resourceType": "Patient",
  "id": "newly-assigned-id",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2025-01-15T10:00:00.000Z"
  },
  ...
}
</code></pre>

<h3 id="conditional-create"><strong>Conditional Create</strong></h3>

<pre><code class="language-http">POST /fhir/r5/Patient HTTP/1.1
If-None-Exist: identifier=http://hospital.vn/mrn|MRN12345

{...}
</code></pre>

<p>Only create if there is no Patient that matches the condition → avoid duplicates.</p>

<h2 id="3-read"><strong>3. Read (GET)</strong></h2>

<pre><code class="language-http">GET /fhir/r5/Patient/patient-001 HTTP/1.1
Accept: application/fhir+json
</code></pre>

<h3 id="vread"><strong>Version Read (vread)</strong></h3>

<pre><code class="language-http">GET /fhir/r5/Patient/patient-001/_history/3 HTTP/1.1
</code></pre>

<h3 id="content-negotiation"><strong>Content Negotiation</strong></h3>

<table>
<thead>
<tr><th>Accept Header</th><th>Format</th></tr>
</thead>
<tbody>
<tr><td>application/fhir+json</td><td>JSON (recommended)</td></tr>
<tr><td>application/fhir+xml</td><td>XML</td></tr>
<tr><td>Or use _format param</td><td>?_format=json</td></tr>
</tbody>
</table>

<h2 id="4-update"><strong>4. Update (PUT)</strong></h2>

<pre><code class="language-http">PUT /fhir/r5/Patient/patient-001 HTTP/1.1
Content-Type: application/fhir+json
If-Match: W/"3"

{
  "resourceType": "Patient",
  "id": "patient-001",
  "name": [
    {
      "family": "Nguyễn",
      "given": ["Văn", "A"],
      "text": "Nguyễn Văn A"
    }
  ],
  "gender": "male",
  "birthDate": "1990-05-15",
  "telecom": [
    {
      "system": "phone",
      "value": "0901234567",
      "use": "mobile"
    }
  ]
}
</code></pre>

<p><code>If-Match: W/"3"</code> → Optimistic locking. Only update if the current version is 3. If it has changed → 409 Conflict.</p>

<h3 id="conditional-update"><strong>Conditional Update</strong></h3>

<pre><code class="language-http">PUT /fhir/r5/Patient?identifier=http://hospital.vn/mrn|MRN12345 HTTP/1.1

{...resource body...}
</code></pre>

<h2 id="5-patch"><strong>5. Patch (PATCH)</strong></h2>

<h3 id="json-patch"><strong>JSON Patch (RFC 6902)</strong></h3>

<pre><code class="language-http">PATCH /fhir/r5/Patient/patient-001 HTTP/1.1
Content-Type: application/json-patch+json

[
  {
    "op": "add",
    "path": "/telecom/-",
    "value": {
      "system": "email",
      "value": "nguyenvana@email.com",
      "use": "home"
    }
  },
  {
    "op": "replace",
    "path": "/active",
    "value": true
  }
]
</code></pre>

<h3 id="fhirpath-patch"><strong>FHIRPath Patch</strong></h3>

<pre><code class="language-http">PATCH /fhir/r5/Patient/patient-001 HTTP/1.1
Content-Type: application/fhir+json

{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "operation",
      "part": [
        {"name": "type", "valueCode": "add"},
        {"name": "path", "valueString": "Patient"},
        {"name": "name", "valueString": "active"},
        {"name": "value", "valueBoolean": true}
      ]
    }
  ]
}
</code></pre>

<h2 id="6-delete"><strong>6. Delete (DELETE)</strong></h2>

<pre><code class="language-http">DELETE /fhir/r5/Patient/patient-001 HTTP/1.1
</code></pre>

<p>FHIR servers often implement <strong>logical delete</strong> (mark deleted, retained in history) instead of physically deleting.</p>

<h2 id="7-history"><strong>7. History</strong></h2>

<pre><code class="language-http"># History của một resource
GET /fhir/r5/Patient/patient-001/_history

# History của tất cả Patient
GET /fhir/r5/Patient/_history

# History toàn server
GET /fhir/r5/_history

# Với parameters
GET /fhir/r5/Patient/patient-001/_history?_count=10&_since=2025-01-01T00:00:00Z
</code></pre>

<p>Response returns Bundle type <code>history. history</code> contains all versions.</p>

<h2 id="8-search-co-ban"><strong>8. Basic search</strong></h2>

<pre><code class="language-http"># Tìm Patient theo tên
GET /fhir/r5/Patient?name=Nguyen

# Tìm theo giới tính
GET /fhir/r5/Patient?gender=male

# Kết hợp nhiều tham số (AND)
GET /fhir/r5/Patient?name=Nguyen&gender=male&birthdate=1990-05-15

# Tìm Observation theo Patient
GET /fhir/r5/Observation?subject=Patient/patient-001&category=vital-signs

# POST search (khi query string quá dài)
POST /fhir/r5/Patient/_search
Content-Type: application/x-www-form-urlencoded

name=Nguyen&gender=male
</code></pre>

<h3 id="search-response"><strong>Search Response (Bundle searchset)</strong></h3>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 42,
  "link": [
    {
      "relation": "self",
      "url": "https://fhir-server.example.com/fhir/r5/Patient?name=Nguyen&_count=10"
    },
    {
      "relation": "next",
      "url": "https://fhir-server.example.com/fhir/r5?_getpages=uuid-abc&_pageId=2"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://fhir-server.example.com/fhir/r5/Patient/patient-001",
      "resource": {
        "resourceType": "Patient",
        "id": "patient-001"
      },
      "search": {
        "mode": "match",
        "score": 1
      }
    }
  ]
}
</code></pre>

<h2 id="9-capabilitystatement"><strong>9. CapabilityStatement</strong></h2>

<pre><code class="language-http">GET /fhir/r5/metadata HTTP/1.1
Accept: application/fhir+json
</code></pre>

<p><strong>CapabilityStatement</strong> (old name: Conformance) describes the capabilities of the FHIR server: which resource types, interactions, and search parameters it supports.</p>

<h2 id="10-http-status-codes"><strong>10. HTTP Status Codes in FHIR</strong></h2>

<table>
<thead>
<tr><th>Status</th><th>Meaning</th></tr>
</thead>
<tbody>
<tr><td>200 OK</td><td>Read/Search/Update successfully</td></tr>
<tr><td>201 Created</td><td>Create successfully</td></tr>
<tr><td>204 No Content</td><td>Deleted successfully</td></tr>
<tr><td>304 Not Modified</td><td>Conditional read, not changed</td></tr>
<tr><td>400 Bad Requests</td><td>Request is invalid</td></tr>
<tr><td>401 Unauthorized</td><td>Not authenticated</td></tr>
<tr><td>403 Forbidden</td><td>No rights</td></tr>
<tr><td>404 Not Found</td><td>Resource does not exist</td></tr>
<tr><td>409 Conflict</td><td>Version conflict (If-Match)</td></tr>
<tr><td>410 Gone</td><td>Resource has been deleted</td></tr>
<tr><td>412 Preconditions Failed</td><td>Conditional operation failed</td></tr>
<tr><td>422 Unprocessable Entity</td><td>Validation failed (OperationOutcome)</td></tr>
</tbody>
</table>

<h2 id="11-tong-ket"><strong>11. Summary</strong></h2>

<ul>
<li><p>FHIR RESTful API complies with HTTP standard: <strong>POST/GET/PUT/PATCH/DELETE</strong></p></li>
<li><p><strong>Versioning</strong> — Each update creates a new version, accessed via vread and history</p></li>
<li><p><strong>Conditional operations</strong> — If-Match, If-None-Exist for concurrency control</p></li>
<li><p><strong>Search</strong> — High flexibility with many parameter types, AND/OR combinations</p></li>
<li><p><strong>CapabilityStatement</strong> — Self-describing server capabilities (machine-readable)</p></li>
</ul>
