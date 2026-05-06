---
id: 019e0a10-a103-7001-d001-f1a7f8000103
title: 'Lesson 3: Install the FHIR development environment'
slug: bai-3-cai-dat-moi-truong-phat-trien-fhir
description: >-
  Install HAPI FHIR Server (Docker), public FHIR Test Server, Postman Collection
  for FHIR, FHIR Shorthand (FSH) and SUSHI, VS Code extensions for FHIR, test
  the first CRUD operations.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 1: HL7 and FHIR Platform'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Basic to Advanced Healthcare Data Standard
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9304" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9304)"/>

  <!-- Decorations -->
  <g>
    <circle cx="713" cy="49" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="826" cy="142" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="939" cy="235" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1052" cy="68" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="665" cy="161" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="199" x2="1100" y2="279" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="229" x2="1050" y2="299" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="978.444863728671,132 978.444863728671,166 949,183 919.555136271329,166 919.555136271329,132 949,115" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ Architecture — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Install the FHIR development environment</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - Basic to Advanced Healthcare Data Standard</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: HL7 and FHIR Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tong-quan-cong-cu"><strong>1. Overview of necessary tools</strong></h2>

<p>To practice FHIR effectively, you need to prepare the following tools:</p>

<table>
<thead>
<tr><th>Tools</th><th>Purpose</th><th>Required?</th></tr>
</thead>
<tbody>
<tr><td><strong>HAPI FHIR Server</strong></td><td>FHIR Server local for practice</td><td>Yes</td></tr>
<tr><td><strong>Docker</strong></td><td>Run HAPI FHIR Server</td><td>Yes</td></tr>
<tr><td><strong>Postman/Bruno</strong></td><td>Test API</td><td>Yes</td></tr>
<tr><td><strong>VS Code</strong></td><td>Editor with FHIR extensions</td><td>Yes</td></tr>
<tr><td><strong>Node.js</strong></td><td>Run SUSHI (FHIR Shorthand compiler)</td><td>Recommended</td></tr>
<tr><td><strong>Java 17+</strong></td><td>HAPI FHIR Client library</td><td>Options</td></tr>
</tbody>
</table>

<h2 id="2-cai-dat-hapi-fhir-server"><strong>2. Install HAPI FHIR Server with Docker</strong></h2>

<p><strong>HAPI FHIR</strong> is the most popular open source FHIR Server, written in Java. The fastest way to get it running is using Docker.</p>

<h3 id="docker-compose"><strong>Step 1: Create docker-compose.yml file</strong></h3>

<pre><code class="language-yaml">version: "3.8"
services:
  hapi-fhir:
    image: hapiproject/hapi:latest
    container_name: hapi-fhir-server
    ports:
      - "8080:8080"
    environment:
      - hapi.fhir.fhir_version=R5
      - hapi.fhir.allow_multiple_delete=true
      - hapi.fhir.allow_external_references=true
      - hapi.fhir.reuse_cached_search_results_millis=-1
    volumes:
      - hapi-data:/data/hapi
    restart: unless-stopped

volumes:
  hapi-data:
</code></pre>

<h3 id="chay-server"><strong>Step 2: Launch the server</strong></h3>

<pre><code class="language-bash"># Tạo thư mục dự án
mkdir fhir-lab &amp;&amp; cd fhir-lab

# Tạo docker-compose.yml (nội dung ở trên)

# Khởi chạy
docker compose up -d

# Kiểm tra log
docker compose logs -f hapi-fhir
</code></pre>

<p>Wait about 30-60 seconds, the server will be ready <strong>http://localhost:8080</strong>.</p>

<h3 id="kiem-tra-server"><strong>Step 3: Check the server</strong></h3>

<pre><code class="language-bash"># Lấy CapabilityStatement
curl -s http://localhost:8080/fhir/metadata | jq '.fhirVersion'
# Kết quả: "5.0.0"

# Kiểm tra resource types được hỗ trợ
curl -s http://localhost:8080/fhir/metadata | jq '.rest[0].resource | length'
# Kết quả: 157 (hoặc gần đó)
</code></pre>

<h3 id="hapi-web-ui"><strong>HAPI FHIR Web UI</strong></h3>

<p>Access <strong>http://localhost:8080</strong> to enter HAPI FHIR Web Testing UI — a web interface that allows you to perform all FHIR operations without writing code.</p>

<h2 id="3-fhir-test-servers"><strong>3. Public FHIR Test Servers</strong></h2>

<p>In addition to local servers, you can use public servers to test:</p>

<table>
<thead>
<tr><th>Server</th><th>URL</th><th>Version</th><th>Notes</th></tr>
</thead>
<tbody>
<tr><td>HAPI FHIR R5</td><td>https://hapi.fhir.org/baseR5</td><td>R5</td><td>Public, free, reset periodically</td></tr>
<tr><td>HAPI FHIR R4</td><td>https://hapi.fhir.org/baseR4</td><td>R4</td><td>Public, free</td></tr>
<tr><td>Firely Server</td><td>https://server.fire.ly</td><td>R4</td><td>Sandbox free</td></tr>
<tr><td>SMART Health IT</td><td>https://launch.smarthealthit.org</td><td>R4</td><td>SMART on FHIR sandbox</td></tr>
</tbody>
</table>

<p><strong>Note:</strong> Do not post real data to public servers. Use only test/synthetic data.</p>

<h2 id="4-postman-setup"><strong>4. Configure Postman for FHIR</strong></h2>

<h3 id="tao-collection"><strong>Step 1: Create Collection</strong></h3>

<p>Create collection "FHIR Lab" in Postman with variable:</p>

<ul>
<li><p><code>baseUrl</code> = <code>http://localhost:8080/fhir</code></p></li>
</ul>

<h3 id="cac-request-co-ban"><strong>Step 2: Create basic requests</strong></h3>

<p><strong>1. CapabilityStatement (GET metadata)</strong></p>
<pre><code>GET {{baseUrl}}/metadata
Accept: application/fhir+json
</code></pre>

<p><strong>2. Create Patient (POST)</strong></p>
<pre><code>POST {{baseUrl}}/Patient
Content-Type: application/fhir+json
Accept: application/fhir+json

{
  "resourceType": "Patient",
  "identifier": [{
    "system": "http://fhir.vn/sid/cccd",
    "value": "001085012345"
  }],
  "name": [{
    "use": "official",
    "family": "Nguyễn",
    "given": ["Văn", "A"]
  }],
  "gender": "male",
  "birthDate": "1985-03-15",
  "address": [{
    "use": "home",
    "line": ["123 Lê Lợi, Quận 1"],
    "city": "Thành phố Hồ Chí Minh",
    "country": "VN"
  }],
  "telecom": [{
    "system": "phone",
    "value": "+84901234567",
    "use": "mobile"
  }]
}
</code></pre>

<p><strong>3. Read Patient (GET)</strong></p>
<pre><code>GET {{baseUrl}}/Patient/{{patientId}}
Accept: application/fhir+json
</code></pre>

<p><strong>4. Search Patient (GET)</strong></p>
<pre><code>GET {{baseUrl}}/Patient?family=Nguyen&amp;gender=male
Accept: application/fhir+json
</code></pre>

<p><strong>5. Update Patient (PUT)</strong></p>
<pre><code>PUT {{baseUrl}}/Patient/{{patientId}}
Content-Type: application/fhir+json
Accept: application/fhir+json
</code></pre>

<h2 id="5-vscode-extensions"><strong>5. VS Code Extensions for FHIR</strong></h2>

<p>Install useful extensions:</p>

<h3 id="fhir-tools"><strong>FHIR Tools (recommended)</strong></h3>
<ul>
<li><p><strong>FHIR Shorthand</strong> (SUSHI/HL7) — syntax highlighting for FSH</p></li>
<li><p><strong>REST Client</strong> (Huachao Mao) — send HTTP requests directly from VS Code</p></li>
<li><p><strong>JSON Path Finder</strong> — navigate large JSON</p></li>
</ul>

<h3 id="rest-client-demo"><strong>Using REST Client in VS Code</strong></h3>

<p>Create files <code>fhir-test.http</code>:</p>

<pre><code>@baseUrl = http://localhost:8080/fhir

### Metadata
GET {{baseUrl}}/metadata
Accept: application/fhir+json

### Create Patient
POST {{baseUrl}}/Patient
Content-Type: application/fhir+json

{
  "resourceType": "Patient",
  "name": [{"family": "Trần", "given": ["Thị", "B"]}],
  "gender": "female",
  "birthDate": "1990-07-20"
}

### Search all patients
GET {{baseUrl}}/Patient?_count=10
Accept: application/fhir+json
</code></pre>

<p>Click "Send Request" above each request to send.</p>

<h2 id="6-fhir-shorthand-sushi"><strong>6. FHIR Shorthand (FSH) and SUSHI</strong></h2>

<p><strong>FHIR Shorthand (FSH)</strong> is a specification language to write Profiles, Extensions, ValueSets concisely. <strong>SUSHI</strong> is a compiler that compiles FSH into FHIR resources.</p>

<h3 id="cai-dat-sushi"><strong>Install SUSHI</strong></h3>

<pre><code class="language-bash"># Cài Node.js (nếu chưa có)
# macOS
brew install node

# Cài SUSHI globally
npm install -g fsh-sushi

# Kiểm tra
sushi --version
</code></pre>

<h3 id="vd-fsh"><strong>Simple FSH example</strong></h3>

<pre><code class="language-fsh">Profile: VNPatient
Parent: Patient
Id: vn-patient
Title: "Vietnam Core Patient Profile"
Description: "Profile cho bệnh nhân Việt Nam"

* identifier 1..* MS
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open

* identifier contains cccd 0..1 MS
* identifier[cccd].system = "http://fhir.vn/sid/cccd"
* identifier[cccd].value 1..1

* name 1..* MS
* gender 1..1 MS
* birthDate 1..1 MS
</code></pre>

<p>FSH will be used extensively in lesson 13 (Profiles) and lesson 20 (Implementation Guide).</p>

<h2 id="7-thuc-hanh-crud"><strong>7. Practice: First CRUD operations</strong></h2>

<p>Now, let's practice basic operations on HAPI FHIR Server.</p>

<h3 id="tao-patient"><strong>7.1. Create Patient (CREATE)</strong></h3>

<pre><code class="language-bash">curl -X POST http://localhost:8080/fhir/Patient \
  -H "Content-Type: application/fhir+json" \
  -d '{
    "resourceType": "Patient",
    "identifier": [{
      "system": "http://fhir.vn/sid/cccd",
      "value": "001085012345"
    }],
    "name": [{
      "use": "official",
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }],
    "gender": "male",
    "birthDate": "1985-03-15",
    "address": [{
      "line": ["123 Lê Lợi"],
      "city": "Hồ Chí Minh",
      "country": "VN"
    }]
  }'
</code></pre>

<p>Server returns <code>201 Created</code> with header <code>Location: Patient/{id}/_history/1</code>.</p>

<h3 id="doc-patient"><strong>7.2. Read Patient (READ)</strong></h3>

<pre><code class="language-bash"># Thay {id} bằng id thực tế được trả về
curl -s http://localhost:8080/fhir/Patient/{id} | jq '.name[0]'
</code></pre>

<h3 id="tim-kiem-patient"><strong>7.3. Search for Patients (SEARCH)</strong></h3>

<pre><code class="language-bash"># Tìm theo họ
curl -s "http://localhost:8080/fhir/Patient?family=Nguyen" | jq '.total'

# Tìm theo giới tính
curl -s "http://localhost:8080/fhir/Patient?gender=male" | jq '.entry | length'

# Tìm theo identifier (số CCCD)
curl -s "http://localhost:8080/fhir/Patient?identifier=http://fhir.vn/sid/cccd|001085012345" | jq '.entry[0].resource.name'
</code></pre>

<h3 id="update-patient"><strong>7.4. Update Patient (UPDATE)</strong></h3>

<pre><code class="language-bash">curl -X PUT http://localhost:8080/fhir/Patient/{id} \
  -H "Content-Type: application/fhir+json" \
  -d '{
    "resourceType": "Patient",
    "id": "{id}",
    "identifier": [{
      "system": "http://fhir.vn/sid/cccd",
      "value": "001085012345"
    }],
    "name": [{
      "use": "official",
      "family": "Nguyễn",
      "given": ["Văn", "A"]
    }],
    "gender": "male",
    "birthDate": "1985-03-15",
    "telecom": [{
      "system": "phone",
      "value": "+84901234567",
      "use": "mobile"
    }],
    "address": [{
      "line": ["456 Nguyễn Huệ"],
      "city": "Hồ Chí Minh",
      "country": "VN"
    }]
  }'
</code></pre>

<h3 id="xoa-patient"><strong>7.5. Delete Patient (DELETE)</strong></h3>

<pre><code class="language-bash">curl -X DELETE http://localhost:8080/fhir/Patient/{id}
# Trả về 200 OK hoặc 204 No Content
</code></pre>

<h3 id="lich-su-patient"><strong>7.6. View history (HISTORY)</strong></h3>

<pre><code class="language-bash"># Lịch sử một resource cụ thể
curl -s http://localhost:8080/fhir/Patient/{id}/_history | jq '.entry | length'

# Lịch sử toàn bộ Patient type
curl -s "http://localhost:8080/fhir/Patient/_history?_count=5" | jq '.entry[].request.method'
</code></pre>

<h2 id="8-tao-du-lieu-test"><strong>8. Create batch test data</strong></h2>

<p>For rich practice data, use <strong>Synthea</strong> — tool to create synthetic patient data:</p>

<pre><code class="language-bash"># Cài Synthea (cần Java 11+)
git clone https://github.com/synthetichealth/synthea.git
cd synthea

# Tạo 10 bệnh nhân
./run_synthea -p 10 --exporter.fhir.export=true

# Output sẽ nằm trong output/fhir/
ls output/fhir/
</code></pre>

<p>The output files are FHIR Bundle (transaction), which can be POST directly to the server:</p>

<pre><code class="language-bash"># Upload một bundle lên server
curl -X POST http://localhost:8080/fhir \
  -H "Content-Type: application/fhir+json" \
  -d @output/fhir/hospitalInformation1234.json
</code></pre>

<h2 id="9-cau-truc-du-an"><strong>9. Recommended project structure</strong></h2>

<pre><code>fhir-lab/
├── docker-compose.yml          # HAPI FHIR Server
├── http/                       # REST Client files
│   ├── patient.http
│   ├── observation.http
│   └── search.http
├── fsh/                        # FHIR Shorthand files
│   ├── input/
│   │   └── fsh/
│   │       ├── profiles/
│   │       ├── extensions/
│   │       └── valuesets/
│   └── sushi-config.yaml
├── sample-data/                # Dữ liệu mẫu
│   ├── patients/
│   ├── observations/
│   └── bundles/
└── scripts/                    # Scripts tiện ích
    ├── load-data.sh
    └── cleanup.sh
</code></pre>

<h2 id="10-tom-tat"><strong>10. Summary</strong></h2>

<p>In this article, we have:</p>

<ul>
<li><p>Install <strong>HAPI FHIR Server</strong> using Docker (port 8080)</p></li>
<li><p>Know the <strong>FHIR Test Servers</strong> public (hapi.fhir.org)</p></li>
<li><p>Configuration <strong>Postman</strong> and <strong>VS Code REST Client</strong> for FHIR</p></li>
<li><p>Install <strong>SUSHI</strong> (FHIR Shorthand compiler)</p></li>
<li><p>Practice <strong>CRUD operations</strong>: Create, Read, Search, Update, Delete, History</p></li>
<li><p>Use <strong>Synthea</strong> to create synthetic test data</p></li>
</ul>

<p>Next article, we will start going deeper <strong>FHIR Resources</strong> — starting with Patient, Practitioner, Organization and Administrative Resources.</p>
