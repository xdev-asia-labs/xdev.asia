---
id: 019e0a10-a103-7001-d001-f1a7f8000103
title: 第3課：安裝FHIR開發環境
slug: bai-3-cai-dat-moi-truong-phat-trien-fhir
description: >-
  安裝 HAPI FHIR 伺服器 (Docker)、公共 FHIR 測試伺服器、FHIR 的 Postman Collection、FHIR
  Shorthand (FSH) 和 SUSHI、FHIR 的 VS Code 擴展，測試第一個 CRUD 操作。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 第 1 部分：HL7 和 FHIR 平台
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ 建築 — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第3課：安裝FHIR開發環境</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：HL7 和 FHIR 平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-tong-quan-cong-cu"><strong>1. 必要工具概述</strong></h2>

<p>为了有效实践FHIR，您需要准备以下工具：</p>

<table>
<thead>
<tr><th>工具</th><th>目的</th><th>需要嗎？</th></tr>
</thead>
<tbody>
<tr><td><strong>HAPI FHIR 伺服器</strong></td><td>FHIR 伺服器本地用於練習</td><td>是的</td></tr>
<tr><td><strong>碼頭工人</strong></td><td>运行 HAPI FHIR 服务器</td><td>是的</td></tr>
<tr><td><strong>郵差/布魯諾</strong></td><td>測試介面</td><td>是的</td></tr>
<tr><td><strong>VS程式碼</strong></td><td>具有 FHIR 扩展的编辑器</td><td>是的</td></tr>
<tr><td><strong>Node.js</strong></td><td>運行 SUSHI（FHIR 速記編譯器）</td><td>推薦</td></tr>
<tr><td><strong>爪哇 17+</strong></td><td>HAPI FHIR 用戶端程式庫</td><td>選項</td></tr>
</tbody>
</table>

<h2 id="2-cai-dat-hapi-fhir-server"><strong>2.使用Docker安装HAPI FHIR服务器</strong></h2>

<p><strong>哈皮FHIR</strong> 是最流行的开源 FHIR 服务器，用 Java 编写。让它运行的最快方法是使用 Docker。</p>

<h3 id="docker-compose"><strong>步驟1：建立docker-compose.yml文件</strong></h3>

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

<h3 id="chay-server"><strong>第 2 步：啟動伺服器</strong></h3>

<pre><code class="language-bash"># Tạo thư mục dự án
mkdir fhir-lab &amp;&amp; cd fhir-lab

# Tạo docker-compose.yml (nội dung ở trên)

# Khởi chạy
docker compose up -d

# Kiểm tra log
docker compose logs -f hapi-fhir
</code></pre>

<p>等待大約30-60秒，伺服器將準備就緒 <strong>http://localhost:8080</strong>.</p>

<h3 id="kiem-tra-server"><strong>第三步：检查服务器</strong></h3>

<pre><code class="language-bash"># Lấy CapabilityStatement
curl -s http://localhost:8080/fhir/metadata | jq '.fhirVersion'
# Kết quả: "5.0.0"

# Kiểm tra resource types được hỗ trợ
curl -s http://localhost:8080/fhir/metadata | jq '.rest[0].resource | length'
# Kết quả: 157 (hoặc gần đó)
</code></pre>

<h3 id="hapi-web-ui"><strong>HAPI FHIR 網頁使用者介面</strong></h3>

<p>訪問 <strong>http://localhost:8080</strong> 进入 HAPI FHIR Web 测试 UI — 一个 Web 界面，允许您执行所有 FHIR 操作而无需编写代码。</p>

<h2 id="3-fhir-test-servers"><strong>3. 公共FHIR測試伺服器</strong></h2>

<p>除了本地服务器之外，还可以使用公共服务器进行测试：</p>

<table>
<thead>
<tr><th>伺服器</th><th>網址</th><th>版本</th><th>註解</th></tr>
</thead>
<tbody>
<tr><td>HAPI FHIR R5</td><td>https://hapi.fhir.org/baseR5</td><td>R5</td><td>Public, 免費，定期重置</td></tr>
<tr><td>HAPI FHIR R4</td><td>https://hapi.fhir.org/baseR4</td><td>R4</td><td>Public, 免費</td></tr>
<tr><td>火力伺服器</td><td>https://server.fire.ly</td><td>R4</td><td>Sandbox 免費</td></tr>
<tr><td>智慧健康資訊技術</td><td>https://launch.smarthealthit.org</td><td>R4</td><td>SMART 在 FHIR 沙箱上</td></tr>
</tbody>
</table>

<p><strong>注意：</strong> 不要将真实数据发布到公共服务器。仅使用测试/合成数据。</p>

<h2 id="4-postman-setup"><strong>4. 为 FHIR 配置 Postman</strong></h2>

<h3 id="tao-collection"><strong>第 1 步：建立集合</strong></h3>

<p>在 Postman 中使用变量创建集合“FHIR Lab”：</p>

<ul>
<li><p><code>基本網址</code> = <code>http://localhost:8080/fhir</code></p></li>
</ul>

<h3 id="cac-request-co-ban"><strong>第 2 步：创建基本请求</strong></h3>

<p><strong>1.CapabilityStatement（取得元資料）</strong></p>
<pre><code>GET {{baseUrl}}/metadata
Accept: application/fhir+json
</code></pre>

<p><strong>2. 创建患者（POST）</strong></p>
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

<p><strong>3. 讀取患者 (GET)</strong></p>
<pre><code>GET {{baseUrl}}/Patient/{{patientId}}
Accept: application/fhir+json
</code></pre>

<p><strong>4. 搜尋患者 (GET)</strong></p>
<pre><code>GET {{baseUrl}}/Patient?family=Nguyen&amp;gender=male
Accept: application/fhir+json
</code></pre>

<p><strong>5. 更新病患 (PUT)</strong></p>
<pre><code>PUT {{baseUrl}}/Patient/{{patientId}}
Content-Type: application/fhir+json
Accept: application/fhir+json
</code></pre>

<h2 id="5-vscode-extensions"><strong>5. FHIR 的 VS 代碼擴展</strong></h2>

<p>安裝有用的擴充功能：</p>

<h3 id="fhir-tools"><strong>FHIR 工具（建議）</strong></h3>
<ul>
<li><p><strong>FHIR 簡寫</strong> (SUSHI/HL7) — FSH 的語法反白顯示</p></li>
<li><p><strong>休息客戶端</strong> (Huachao Mao) — 直接从 VS Code 发送 HTTP 请求</p></li>
<li><p><strong>JSON 路徑查找器</strong> — 導航大型 JSON</p></li>
</ul>

<h3 id="rest-client-demo"><strong>在 VS Code 中使用 REST 客户端</strong></h3>

<p>建立文件 <code>fhir-test.http</code>：</p>

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

<p>单击每个要发送的请求上方的“发送请求”。</p>

<h2 id="6-fhir-shorthand-sushi"><strong>6. FHIR 簡寫（FSH）和 SUSHI</strong></h2>

<p><strong>FHIR 簡寫 (FSH)</strong> 是一種簡潔地編寫設定檔、擴充、值集的規範語言。 <strong>壽司</strong> 是一個將FSH編譯成FHIR資源的編譯器。</p>

<h3 id="cai-dat-sushi"><strong>安裝壽司</strong></h3>

<pre><code class="language-bash"># Cài Node.js (nếu chưa có)
# macOS
brew install node

# Cài SUSHI globally
npm install -g fsh-sushi

# Kiểm tra
sushi --version
</code></pre>

<h3 id="vd-fsh"><strong>簡單的 FSH 範例</strong></h3>

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

<p>FSH 將在第 13 課（摘要）和第 20 課（實施指南）中廣泛使用。</p>

<h2 id="7-thuc-hanh-crud"><strong>7.實作：首先CRUD操作</strong></h2>

<p>現在，我們來練習 HAPI FHIR Server 的基本操作。</p>

<h3 id="tao-patient"><strong>7.1.創建患者（創建）</strong></h3>

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

<p>伺服器回 <code>201 已建立</code> 帶標題 <code>位置：病人/{id}/_history/1</code>。</p>

<h3 id="doc-patient"><strong>7.2.閱讀患者（閱讀）</strong></h3>

<pre><code class="language-bash"># Thay {id} bằng id thực tế được trả về
curl -s http://localhost:8080/fhir/Patient/{id} | jq '.name[0]'
</code></pre>

<h3 id="tim-kiem-patient"><strong>7.3.搜尋患者 (SEARCH)</strong></h3>

<pre><code class="language-bash"># Tìm theo họ
curl -s "http://localhost:8080/fhir/Patient?family=Nguyen" | jq '.total'

# Tìm theo giới tính
curl -s "http://localhost:8080/fhir/Patient?gender=male" | jq '.entry | length'

# Tìm theo identifier (số CCCD)
curl -s "http://localhost:8080/fhir/Patient?identifier=http://fhir.vn/sid/cccd|001085012345" | jq '.entry[0].resource.name'
</code></pre>

<h3 id="update-patient"><strong>7.4.更新病人（更新）</strong></h3>

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

<h3 id="xoa-patient"><strong>7.5。刪除患者（DELETE）</strong></h3>

<pre><code class="language-bash">curl -X DELETE http://localhost:8080/fhir/Patient/{id}
# Trả về 200 OK hoặc 204 No Content
</code></pre>

<h3 id="lich-su-patient"><strong>7.6。查看歷史記錄（HISTORY）</strong></h3>

<pre><code class="language-bash"># Lịch sử một resource cụ thể
curl -s http://localhost:8080/fhir/Patient/{id}/_history | jq '.entry | length'

# Lịch sử toàn bộ Patient type
curl -s "http://localhost:8080/fhir/Patient/_history?_count=5" | jq '.entry[].request.method'
</code></pre>

<h2 id="8-tao-du-lieu-test"><strong>8.建立批次測試數據</strong></h2>

<p>要獲得豐富的實踐數據，請使用 <strong>辛西亞</strong> — 創建綜合病患資料的工具：</p>

<pre><code class="language-bash"># Cài Synthea (cần Java 11+)
git clone https://github.com/synthetichealth/synthea.git
cd synthea

# Tạo 10 bệnh nhân
./run_synthea -p 10 --exporter.fhir.export=true

# Output sẽ nằm trong output/fhir/
ls output/fhir/
</code></pre>

<p>輸出檔是FHIR Bundle（交易），可以直接POST到伺服器：</p>

<pre><code class="language-bash"># Upload một bundle lên server
curl -X POST http://localhost:8080/fhir \
  -H "Content-Type: application/fhir+json" \
  -d @output/fhir/hospitalInformation1234.json
</code></pre>

<h2 id="9-cau-truc-du-an"><strong>9. 推薦的項目結構</strong></h2>

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

<h2 id="10-tom-tat"><strong>10. 總結</strong></h2>

<p>在這篇文章中，我們有：</p>

<ul>
<li><p>安裝 <strong>HAPI FHIR 伺服器</strong> 使用 Docker（連接埠 8080）</p></li>
<li><p>知道 <strong>FHIR 測試伺服器</strong> 公共 (hapi.fhir.org)</p></li>
<li><p>配置 <strong>郵差</strong> 和 <strong>VS 代碼 REST 用戶端</strong> 對於FHIR</p></li>
<li><p>安裝 <strong>壽司</strong> （FHIR 速記編譯器）</p></li>
<li><p>練習 <strong>增刪改查操作</strong>：建立、讀取、搜尋、更新、刪除、歷史記錄</p></li>
<li><p>使用 <strong>辛西亞</strong> 建立綜合測試數據</p></li>
</ul>

<p>下一篇文章我們將開始深入探討 <strong>FHIR 資源</strong> — 從病人、從業人員、組織和行政資源開始。</p>
