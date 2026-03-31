---
id: 019e0a10-a303-7001-d001-f1a7f8000303
title: 'Bài 10: Search Parameters và tìm kiếm nâng cao'
slug: bai-10-search-parameters-va-tim-kiem-nang-cao
description: >-
  Search parameter types (string, token, reference, date, number, quantity, uri),
  modifiers (:exact, :contains, :missing, :not), chaining, reverse chaining (_has),
  _include, _revinclude, _summary, _elements, _count, paging,
  Composite search parameters, custom SearchParameter.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: FHIR RESTful API và Data Exchange"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-search-parameter-types"><strong>1. Search Parameter Types</strong></h2>

<table>
<thead>
<tr><th>Type</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td>string</td><td>Tìm kiếm text</td><td>Patient?name=Nguyen</td></tr>
<tr><td>token</td><td>Code / identifier</td><td>Patient?gender=male</td></tr>
<tr><td>reference</td><td>Reference đến resource khác</td><td>Observation?subject=Patient/123</td></tr>
<tr><td>date</td><td>Ngày tháng</td><td>Patient?birthdate=1990-05-15</td></tr>
<tr><td>number</td><td>Số</td><td>RiskAssessment?probability=gt0.8</td></tr>
<tr><td>quantity</td><td>Số + đơn vị</td><td>Observation?value-quantity=gt5.4|http://unitsofmeasure.org|mg</td></tr>
<tr><td>uri</td><td>URI</td><td>ValueSet?url=http://hl7.org/fhir/ValueSet/example</td></tr>
<tr><td>composite</td><td>Kết hợp nhiều params</td><td>Observation?code-value-quantity=...</td></tr>
<tr><td>special</td><td>Đặc biệt</td><td>Location?near=42.2|-71.0|10|km</td></tr>
</tbody>
</table>

<h2 id="2-string-search"><strong>2. String Search</strong></h2>

<pre><code class="language-http"># Default: starts-with, case-insensitive
GET /Patient?name=Nguyen

# Exact match
GET /Patient?name:exact=Nguyễn

# Contains
GET /Patient?name:contains=van

# Text (full-text search trên narrative)
GET /Patient?_text=hypertension
</code></pre>

<h2 id="3-token-search"><strong>3. Token Search</strong></h2>

<pre><code class="language-http"># Chỉ code
GET /Patient?gender=male

# System + code
GET /Condition?code=http://hl7.org/fhir/sid/icd-10|I10

# Chỉ system (tìm tất cả codes trong system)
GET /Condition?code=http://snomed.info/sct|

# Identifier
GET /Patient?identifier=http://hospital.vn/mrn|MRN12345

# :not modifier
GET /Patient?gender:not=male

# :text modifier (tìm trên display text)
GET /Condition?code:text=hypertension
</code></pre>

<h2 id="4-date-search"><strong>4. Date Search</strong></h2>

<pre><code class="language-http"># Exact date
GET /Patient?birthdate=1990-05-15

# Prefixes: eq, ne, gt, lt, ge, le, sa (starts after), eb (ends before)
GET /Patient?birthdate=gt1990-01-01
GET /Encounter?date=ge2025-01-01&date=le2025-01-31
GET /Observation?date=sa2025-01-01T00:00:00Z

# Precision matters
GET /Patient?birthdate=1990      # born in 1990
GET /Patient?birthdate=1990-05   # born in May 1990
</code></pre>

<h2 id="5-reference-search"><strong>5. Reference Search</strong></h2>

<pre><code class="language-http"># Relative reference
GET /Observation?subject=Patient/patient-001

# Chỉ ID (nếu type rõ ràng)
GET /Observation?subject=patient-001

# Absolute reference
GET /Observation?subject=https://fhir-server.example.com/fhir/r5/Patient/patient-001

# Identifier trên referenced resource
GET /Observation?subject:identifier=http://hospital.vn/mrn|MRN12345
</code></pre>

<h2 id="6-chaining"><strong>6. Chaining — Tìm kiếm qua references</strong></h2>

<pre><code class="language-http"># Tìm Observation của Patient có tên "Nguyen"
GET /Observation?subject:Patient.name=Nguyen

# Chain sâu hơn
GET /Observation?subject:Patient.organization.name=Bach%20Mai

# Tìm MedicationRequest kê bởi Practitioner chuyên khoa Tim mạch
GET /MedicationRequest?requester:Practitioner.qualification=cardiology
</code></pre>

<h2 id="7-reverse-chaining"><strong>7. Reverse Chaining (_has)</strong></h2>

<pre><code class="language-http"># Tìm Patient có Observation với code=hba1c và value>7
GET /Patient?_has:Observation:subject:code=4548-4&_has:Observation:subject:value-quantity=gt7

# Tìm Patient có Condition "hypertension" active
GET /Patient?_has:Condition:subject:code=I10&_has:Condition:subject:clinical-status=active

# Tìm Practitioner có ít nhất 1 Encounter
GET /Practitioner?_has:Encounter:participant:date=ge2025-01-01
</code></pre>

<h2 id="8-include-revinclude"><strong>8. _include và _revinclude</strong></h2>

<pre><code class="language-http"># _include: kéo theo referenced resources
# Tìm Encounter VÀ Patient của Encounter đó
GET /Encounter?date=ge2025-01-15&_include=Encounter:subject

# Multiple includes
GET /MedicationRequest?status=active
  &_include=MedicationRequest:subject
  &_include=MedicationRequest:requester
  &_include=MedicationRequest:medication

# _revinclude: kéo theo resources reference ngược lại
# Tìm Patient VÀ tất cả Observation, Condition reference đến Patient
GET /Patient?_id=patient-001
  &_revinclude=Observation:subject
  &_revinclude=Condition:subject

# :iterate — recursive include
GET /MedicationRequest?_include:iterate=MedicationRequest:medication
</code></pre>

<h2 id="9-result-parameters"><strong>9. Result Parameters</strong></h2>

<pre><code class="language-http"># _count — số entry per page
GET /Patient?name=Nguyen&_count=20

# _sort — sắp xếp
GET /Observation?subject=Patient/patient-001&_sort=-date  # descending
GET /Patient?_sort=family,given                            # multi-sort

# _summary — trả về tóm tắt
GET /Patient?_summary=true      # chỉ `mandatory` elements
GET /Patient?_summary=count     # chỉ count, không trả resources
GET /Patient?_summary=text      # text + id + meta + mandatory

# _elements — chọn elements cụ thể
GET /Patient?_elements=name,birthDate,gender,identifier

# _total — kiểm soát tính total
GET /Patient?_total=accurate    # tính chính xác total
GET /Patient?_total=none        # không tính total (nhanh hơn)
</code></pre>

<h2 id="10-paging"><strong>10. Paging</strong></h2>

<pre><code class="language-json">{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 150,
  "link": [
    {"relation": "self",     "url": "...?_count=10&_offset=0"},
    {"relation": "first",    "url": "...?_count=10&_offset=0"},
    {"relation": "next",     "url": "...?_count=10&_offset=10"},
    {"relation": "last",     "url": "...?_count=10&_offset=140"}
  ]
}
</code></pre>

<p>Client follow link <code>next</code> để lấy trang tiếp theo. <strong>Không tự construct URL</strong> — luôn dùng link từ server response.</p>

<h2 id="11-custom-search-parameter"><strong>11. Custom SearchParameter</strong></h2>

<pre><code class="language-json">{
  "resourceType": "SearchParameter",
  "url": "http://hospital.vn/fhir/SearchParameter/patient-cccd",
  "name": "cccd",
  "status": "active",
  "description": "Tìm Patient theo số CCCD",
  "code": "cccd",
  "base": ["Patient"],
  "type": "token",
  "expression": "Patient.identifier.where(system='http://hospital.vn/cccd')"
}
</code></pre>

<pre><code class="language-http"># Sử dụng custom search parameter
GET /Patient?cccd=012345678901
</code></pre>

<h2 id="12-tong-ket"><strong>12. Tổng kết</strong></h2>

<ul>
<li><p><strong>9 parameter types</strong> — string, token, reference, date, number, quantity, uri, composite, special</p></li>
<li><p><strong>Modifiers</strong> — :exact, :contains, :missing, :not, :text, :identifier</p></li>
<li><p><strong>Chaining</strong> — Tìm qua chain references (subject:Patient.name)</p></li>
<li><p><strong>_has</strong> — Reverse chaining, tìm resource được reference bởi resource khác</p></li>
<li><p><strong>_include / _revinclude</strong> — Kéo referenced resources vào kết quả</p></li>
<li><p><strong>_summary, _elements, _sort, _count</strong> — Kiểm soát response</p></li>
</ul>
