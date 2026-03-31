---
id: 019e0a10-a301-7001-d001-f1a7f8000301
title: 'Bài 8: FHIR RESTful API - CRUD, Search, History và Versioning'
slug: bai-8-fhir-restful-api-crud-search-history-va-versioning
description: >-
  Chi tiết các tương tác REST: create (POST), read (GET), update (PUT),
  patch (PATCH), delete (DELETE), vread, history. Content negotiation
  (JSON/XML), ETag, If-Match, Conditional operations, CapabilityStatement.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: FHIR RESTful API và Data Exchange"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-fhir-restful-api-overview"><strong>1. FHIR RESTful API Overview</strong></h2>

<p>FHIR sử dụng <strong>RESTful API</strong> làm paradigm tương tác chính. Mỗi Resource type có một endpoint riêng, tuân theo chuẩn HTTP.</p>

<h3 id="base-url"><strong>Base URL</strong></h3>

<pre><code>https://fhir-server.example.com/fhir/r5
        ├── base URL ──────────────────┘
        
GET [base]/Patient/123           → Đọc Patient có id=123
POST [base]/Patient              → Tạo Patient mới
PUT [base]/Patient/123           → Cập nhật Patient 123
DELETE [base]/Patient/123        → Xóa Patient 123
</code></pre>

<h3 id="interactions-summary"><strong>Tổng quan các Interactions</strong></h3>

<table>
<thead>
<tr><th>Interaction</th><th>HTTP Method</th><th>URL</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>read</td><td>GET</td><td>[base]/[type]/[id]</td><td>Đọc resource</td></tr>
<tr><td>vread</td><td>GET</td><td>[base]/[type]/[id]/_history/[vid]</td><td>Đọc version cụ thể</td></tr>
<tr><td>update</td><td>PUT</td><td>[base]/[type]/[id]</td><td>Cập nhật resource</td></tr>
<tr><td>patch</td><td>PATCH</td><td>[base]/[type]/[id]</td><td>Cập nhật một phần</td></tr>
<tr><td>delete</td><td>DELETE</td><td>[base]/[type]/[id]</td><td>Xóa resource</td></tr>
<tr><td>create</td><td>POST</td><td>[base]/[type]</td><td>Tạo resource mới</td></tr>
<tr><td>search</td><td>GET / POST</td><td>[base]/[type]?params</td><td>Tìm kiếm</td></tr>
<tr><td>history</td><td>GET</td><td>[base]/[type]/[id]/_history</td><td>Lịch sử thay đổi</td></tr>
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

<p>Chỉ tạo nếu chưa tồn tại Patient nào match điều kiện → tránh duplicate.</p>

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
<tr><td>application/fhir+json</td><td>JSON (khuyên dùng)</td></tr>
<tr><td>application/fhir+xml</td><td>XML</td></tr>
<tr><td>Hoặc dùng _format param</td><td>?_format=json</td></tr>
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

<p><code>If-Match: W/"3"</code> → Optimistic locking. Chỉ update nếu version hiện tại là 3. Nếu đã thay đổi → 409 Conflict.</p>

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

<p>FHIR servers thường implement <strong>logical delete</strong> (đánh dấu đã xóa, giữ lại trong history) thay vì xóa vật lý.</p>

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

<p>Response trả về Bundle type <code>history</code> chứa tất cả versions.</p>

<h2 id="8-search-co-ban"><strong>8. Search cơ bản</strong></h2>

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

<p><strong>CapabilityStatement</strong> (tên cũ: Conformance) mô tả khả năng của FHIR server: hỗ trợ resource types nào, interactions nào, search parameters nào.</p>

<h2 id="10-http-status-codes"><strong>10. HTTP Status Codes trong FHIR</strong></h2>

<table>
<thead>
<tr><th>Status</th><th>Ý nghĩa</th></tr>
</thead>
<tbody>
<tr><td>200 OK</td><td>Read/Search/Update thành công</td></tr>
<tr><td>201 Created</td><td>Create thành công</td></tr>
<tr><td>204 No Content</td><td>Delete thành công</td></tr>
<tr><td>304 Not Modified</td><td>Conditional read, chưa thay đổi</td></tr>
<tr><td>400 Bad Request</td><td>Request không hợp lệ</td></tr>
<tr><td>401 Unauthorized</td><td>Chưa xác thực</td></tr>
<tr><td>403 Forbidden</td><td>Không có quyền</td></tr>
<tr><td>404 Not Found</td><td>Resource không tồn tại</td></tr>
<tr><td>409 Conflict</td><td>Version conflict (If-Match)</td></tr>
<tr><td>410 Gone</td><td>Resource đã bị xóa</td></tr>
<tr><td>412 Precondition Failed</td><td>Conditional operation failed</td></tr>
<tr><td>422 Unprocessable Entity</td><td>Validation failed (OperationOutcome)</td></tr>
</tbody>
</table>

<h2 id="11-tong-ket"><strong>11. Tổng kết</strong></h2>

<ul>
<li><p>FHIR RESTful API tuân thủ chuẩn HTTP: <strong>POST/GET/PUT/PATCH/DELETE</strong></p></li>
<li><p><strong>Versioning</strong> — Mỗi update tạo version mới, truy xuất qua vread và history</p></li>
<li><p><strong>Conditional operations</strong> — If-Match, If-None-Exist cho concurrency control</p></li>
<li><p><strong>Search</strong> — Flexibility cao với nhiều parameter types, kết hợp AND/OR</p></li>
<li><p><strong>CapabilityStatement</strong> — Tự mô tả khả năng server (machine-readable)</p></li>
</ul>
