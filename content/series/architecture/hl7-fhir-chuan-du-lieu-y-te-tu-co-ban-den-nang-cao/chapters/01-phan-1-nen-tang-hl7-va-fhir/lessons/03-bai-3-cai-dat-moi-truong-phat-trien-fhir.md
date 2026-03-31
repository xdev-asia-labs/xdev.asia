---
id: 019e0a10-a103-7001-d001-f1a7f8000103
title: 'Bài 3: Cài đặt môi trường phát triển FHIR'
slug: bai-3-cai-dat-moi-truong-phat-trien-fhir
description: >-
  Cài đặt HAPI FHIR Server (Docker), FHIR Test Server công khai,
  Postman Collection cho FHIR, FHIR Shorthand (FSH) và SUSHI,
  VS Code extensions cho FHIR, chạy thử các thao tác CRUD đầu tiên.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Nền tảng HL7 và FHIR"
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - Chuẩn Dữ liệu Y tế từ Cơ bản đến Nâng cao
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
---

<h2 id="1-tong-quan-cong-cu"><strong>1. Tổng quan các công cụ cần thiết</strong></h2>

<p>Để thực hành FHIR hiệu quả, bạn cần chuẩn bị các công cụ sau:</p>

<table>
<thead>
<tr><th>Công cụ</th><th>Mục đích</th><th>Bắt buộc?</th></tr>
</thead>
<tbody>
<tr><td><strong>HAPI FHIR Server</strong></td><td>FHIR Server local để thực hành</td><td>Có</td></tr>
<tr><td><strong>Docker</strong></td><td>Chạy HAPI FHIR Server</td><td>Có</td></tr>
<tr><td><strong>Postman / Bruno</strong></td><td>Test API</td><td>Có</td></tr>
<tr><td><strong>VS Code</strong></td><td>Editor với FHIR extensions</td><td>Có</td></tr>
<tr><td><strong>Node.js</strong></td><td>Chạy SUSHI (FHIR Shorthand compiler)</td><td>Khuyến nghị</td></tr>
<tr><td><strong>Java 17+</strong></td><td>HAPI FHIR Client library</td><td>Tùy chọn</td></tr>
</tbody>
</table>

<h2 id="2-cai-dat-hapi-fhir-server"><strong>2. Cài đặt HAPI FHIR Server với Docker</strong></h2>

<p><strong>HAPI FHIR</strong> là FHIR Server mã nguồn mở phổ biến nhất, được viết bằng Java. Cách nhanh nhất để chạy là dùng Docker.</p>

<h3 id="docker-compose"><strong>Bước 1: Tạo file docker-compose.yml</strong></h3>

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

<h3 id="chay-server"><strong>Bước 2: Khởi chạy server</strong></h3>

<pre><code class="language-bash"># Tạo thư mục dự án
mkdir fhir-lab &amp;&amp; cd fhir-lab

# Tạo docker-compose.yml (nội dung ở trên)

# Khởi chạy
docker compose up -d

# Kiểm tra log
docker compose logs -f hapi-fhir
</code></pre>

<p>Đợi khoảng 30-60 giây, server sẽ sẵn sàng tại <strong>http://localhost:8080</strong>.</p>

<h3 id="kiem-tra-server"><strong>Bước 3: Kiểm tra server</strong></h3>

<pre><code class="language-bash"># Lấy CapabilityStatement
curl -s http://localhost:8080/fhir/metadata | jq '.fhirVersion'
# Kết quả: "5.0.0"

# Kiểm tra resource types được hỗ trợ
curl -s http://localhost:8080/fhir/metadata | jq '.rest[0].resource | length'
# Kết quả: 157 (hoặc gần đó)
</code></pre>

<h3 id="hapi-web-ui"><strong>HAPI FHIR Web UI</strong></h3>

<p>Truy cập <strong>http://localhost:8080</strong> để vào HAPI FHIR Web Testing UI — một giao diện web cho phép bạn thực hiện mọi thao tác FHIR mà không cần viết code.</p>

<h2 id="3-fhir-test-servers"><strong>3. FHIR Test Servers công khai</strong></h2>

<p>Ngoài local server, bạn có thể dùng các server công khai để test:</p>

<table>
<thead>
<tr><th>Server</th><th>URL</th><th>Version</th><th>Ghi chú</th></tr>
</thead>
<tbody>
<tr><td>HAPI FHIR R5</td><td>https://hapi.fhir.org/baseR5</td><td>R5</td><td>Public, free, reset định kỳ</td></tr>
<tr><td>HAPI FHIR R4</td><td>https://hapi.fhir.org/baseR4</td><td>R4</td><td>Public, free</td></tr>
<tr><td>Firely Server</td><td>https://server.fire.ly</td><td>R4</td><td>Sandbox miễn phí</td></tr>
<tr><td>SMART Health IT</td><td>https://launch.smarthealthit.org</td><td>R4</td><td>SMART on FHIR sandbox</td></tr>
</tbody>
</table>

<p><strong>Lưu ý:</strong> Không đưa dữ liệu thật lên public servers. Chỉ dùng dữ liệu test/synthetic.</p>

<h2 id="4-postman-setup"><strong>4. Cấu hình Postman cho FHIR</strong></h2>

<h3 id="tao-collection"><strong>Bước 1: Tạo Collection</strong></h3>

<p>Tạo collection "FHIR Lab" trong Postman với biến:</p>

<ul>
<li><p><code>baseUrl</code> = <code>http://localhost:8080/fhir</code></p></li>
</ul>

<h3 id="cac-request-co-ban"><strong>Bước 2: Tạo các request cơ bản</strong></h3>

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

<h2 id="5-vscode-extensions"><strong>5. VS Code Extensions cho FHIR</strong></h2>

<p>Cài đặt các extensions hữu ích:</p>

<h3 id="fhir-tools"><strong>FHIR Tools (khuyên dùng)</strong></h3>
<ul>
<li><p><strong>FHIR Shorthand</strong> (SUSHI/HL7) — syntax highlighting cho FSH</p></li>
<li><p><strong>REST Client</strong> (Huachao Mao) — gửi HTTP requests trực tiếp từ VS Code</p></li>
<li><p><strong>JSON Path Finder</strong> — navigate JSON lớn</p></li>
</ul>

<h3 id="rest-client-demo"><strong>Sử dụng REST Client trong VS Code</strong></h3>

<p>Tạo file <code>fhir-test.http</code>:</p>

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

<p>Click "Send Request" phía trên mỗi request để gửi.</p>

<h2 id="6-fhir-shorthand-sushi"><strong>6. FHIR Shorthand (FSH) và SUSHI</strong></h2>

<p><strong>FHIR Shorthand (FSH)</strong> là ngôn ngữ đặc tả để viết Profiles, Extensions, ValueSets một cách ngắn gọn. <strong>SUSHI</strong> là compiler biên dịch FSH thành FHIR resources.</p>

<h3 id="cai-dat-sushi"><strong>Cài đặt SUSHI</strong></h3>

<pre><code class="language-bash"># Cài Node.js (nếu chưa có)
# macOS
brew install node

# Cài SUSHI globally
npm install -g fsh-sushi

# Kiểm tra
sushi --version
</code></pre>

<h3 id="vd-fsh"><strong>Ví dụ FSH đơn giản</strong></h3>

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

<p>FSH sẽ được dùng nhiều trong bài 13 (Profiles) và bài 20 (Implementation Guide).</p>

<h2 id="7-thuc-hanh-crud"><strong>7. Thực hành: Các thao tác CRUD đầu tiên</strong></h2>

<p>Bây giờ, hãy thực hành các thao tác cơ bản trên HAPI FHIR Server.</p>

<h3 id="tao-patient"><strong>7.1. Tạo Patient (CREATE)</strong></h3>

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

<p>Server trả về <code>201 Created</code> với header <code>Location: Patient/{id}/_history/1</code>.</p>

<h3 id="doc-patient"><strong>7.2. Đọc Patient (READ)</strong></h3>

<pre><code class="language-bash"># Thay {id} bằng id thực tế được trả về
curl -s http://localhost:8080/fhir/Patient/{id} | jq '.name[0]'
</code></pre>

<h3 id="tim-kiem-patient"><strong>7.3. Tìm kiếm Patient (SEARCH)</strong></h3>

<pre><code class="language-bash"># Tìm theo họ
curl -s "http://localhost:8080/fhir/Patient?family=Nguyen" | jq '.total'

# Tìm theo giới tính
curl -s "http://localhost:8080/fhir/Patient?gender=male" | jq '.entry | length'

# Tìm theo identifier (số CCCD)
curl -s "http://localhost:8080/fhir/Patient?identifier=http://fhir.vn/sid/cccd|001085012345" | jq '.entry[0].resource.name'
</code></pre>

<h3 id="update-patient"><strong>7.4. Cập nhật Patient (UPDATE)</strong></h3>

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

<h3 id="xoa-patient"><strong>7.5. Xóa Patient (DELETE)</strong></h3>

<pre><code class="language-bash">curl -X DELETE http://localhost:8080/fhir/Patient/{id}
# Trả về 200 OK hoặc 204 No Content
</code></pre>

<h3 id="lich-su-patient"><strong>7.6. Xem lịch sử (HISTORY)</strong></h3>

<pre><code class="language-bash"># Lịch sử một resource cụ thể
curl -s http://localhost:8080/fhir/Patient/{id}/_history | jq '.entry | length'

# Lịch sử toàn bộ Patient type
curl -s "http://localhost:8080/fhir/Patient/_history?_count=5" | jq '.entry[].request.method'
</code></pre>

<h2 id="8-tao-du-lieu-test"><strong>8. Tạo dữ liệu test hàng loạt</strong></h2>

<p>Để có dữ liệu thực hành phong phú, sử dụng <strong>Synthea</strong> — công cụ tạo dữ liệu bệnh nhân synthetic:</p>

<pre><code class="language-bash"># Cài Synthea (cần Java 11+)
git clone https://github.com/synthetichealth/synthea.git
cd synthea

# Tạo 10 bệnh nhân
./run_synthea -p 10 --exporter.fhir.export=true

# Output sẽ nằm trong output/fhir/
ls output/fhir/
</code></pre>

<p>Các file output là FHIR Bundle (transaction), có thể POST trực tiếp lên server:</p>

<pre><code class="language-bash"># Upload một bundle lên server
curl -X POST http://localhost:8080/fhir \
  -H "Content-Type: application/fhir+json" \
  -d @output/fhir/hospitalInformation1234.json
</code></pre>

<h2 id="9-cau-truc-du-an"><strong>9. Cấu trúc dự án khuyến nghị</strong></h2>

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

<h2 id="10-tom-tat"><strong>10. Tóm tắt</strong></h2>

<p>Trong bài này, chúng ta đã:</p>

<ul>
<li><p>Cài đặt <strong>HAPI FHIR Server</strong> bằng Docker (port 8080)</p></li>
<li><p>Biết các <strong>FHIR Test Servers</strong> công khai (hapi.fhir.org)</p></li>
<li><p>Cấu hình <strong>Postman</strong> và <strong>VS Code REST Client</strong> cho FHIR</p></li>
<li><p>Cài đặt <strong>SUSHI</strong> (FHIR Shorthand compiler)</p></li>
<li><p>Thực hành <strong>CRUD operations</strong>: Create, Read, Search, Update, Delete, History</p></li>
<li><p>Sử dụng <strong>Synthea</strong> để tạo dữ liệu test synthetic</p></li>
</ul>

<p>Bài tiếp theo, chúng ta sẽ bắt đầu đi sâu vào <strong>FHIR Resources</strong> — bắt đầu với Patient, Practitioner, Organization và các Resources hành chính.</p>
