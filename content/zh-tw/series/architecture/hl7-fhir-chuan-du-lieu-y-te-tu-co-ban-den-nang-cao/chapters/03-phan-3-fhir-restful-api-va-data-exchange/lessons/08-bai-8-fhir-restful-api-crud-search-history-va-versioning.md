---
id: 019e0a10-a301-7001-d001-f1a7f8000301
title: 第 8 課：FHIR RESTful API - CRUD、搜尋、歷史記錄和版本控制
slug: bai-8-fhir-restful-api-crud-search-history-va-versioning
description: >-
  REST 互動的詳細資訊：建立 (POST)、讀取 (GET)、更新 (PUT)、修補 (PATCH)、刪除
  (DELETE)、vread、歷史記錄。內容協商 (JSON/XML)、ETag、If-Match、條件操作、CapabilityStatement。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 第 3 部分：FHIR RESTful API 和資料交換
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ 建築 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：FHIR RESTful API - CRUD、搜尋、</tspan>
      <tspan x="60" dy="42">歷史和版本控制</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：FHIR RESTful API 和資料交換</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-fhir-restful-api-overview"><strong>1.FHIR RESTful API 概述</strong></h2>

<p>FHIR 用途 <strong>RESTful API</strong> 作為主要的互動範式。每個資源類型都有自己的端點，遵循 HTTP 標準。</p>

<h3 id="base-url"><strong>基本網址</strong></h3>

<pre><code>https://fhir-server.example.com/fhir/r5
        ├── base URL ──────────────────┘
        
GET [base]/Patient/123           → Đọc Patient có id=123
POST [base]/Patient              → Tạo Patient mới
PUT [base]/Patient/123           → Cập nhật Patient 123
DELETE [base]/Patient/123        → Xóa Patient 123
</code></pre>

<h3 id="interactions-summary"><strong>互動概述</strong></h3>

<table>
<thead>
<tr><th>互動</th><th>HTTP方法</th><th>網址</th><th>描述</th></tr>
</thead>
<tbody>
<tr><td>讀</td><td>獲取</td><td>[基礎]/[類型]/[id]</td><td>閱讀資源</td></tr>
<tr><td>讀取</td><td>獲取</td><td>[基礎]/[類型]/[id]/_history/[vid]</td><td>閱讀具體版本</td></tr>
<tr><td>更新。更新</td><td>放置</td><td>[基礎]/[類型]/[id]</td><td>更新資源</td></tr>
<tr><td>補丁。補丁</td><td>補丁</td><td>[基礎]/[類型]/[id]</td><td>部分更新</td></tr>
<tr><td>刪除</td><td>刪除</td><td>[基礎]/[類型]/[id]</td><td>刪除資源</td></tr>
<tr><td>創造</td><td>後處理</td><td>[基礎]/[類型]</td><td>建立新資源</td></tr>
<tr><td>搜尋。搜尋</td><td>獲取/發布</td><td>[基數]/[型]?參數</td><td>搜尋</td></tr>
<tr><td>歷史。歷史</td><td>獲取</td><td>[基礎]/[類型]/[id]/_歷史記錄</td><td>歷史變遷</td></tr>
<tr><td>能力</td><td>獲取</td><td>[基礎]/元數據</td><td>能力聲明</td></tr>
</tbody>
</table>

<h2 id="2-create"><strong>2. 創建（發布）</strong></h2>

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

<h3 id="conditional-create"><strong>條件創建</strong></h3>

<pre><code class="language-http">POST /fhir/r5/Patient HTTP/1.1
If-None-Exist: identifier=http://hospital.vn/mrn|MRN12345

{...}
</code></pre>

<p>僅在沒有符合條件的患者時才建立 → 避免重複。</p>

<h2 id="3-read"><strong>3. 讀取（取得）</strong></h2>

<pre><code class="language-http">GET /fhir/r5/Patient/patient-001 HTTP/1.1
Accept: application/fhir+json
</code></pre>

<h3 id="vread"><strong>版本讀取（vread）</strong></h3>

<pre><code class="language-http">GET /fhir/r5/Patient/patient-001/_history/3 HTTP/1.1
</code></pre>

<h3 id="content-negotiation"><strong>內容協商</strong></h3>

<table>
<thead>
<tr><th>接受標頭</th><th>格式</th></tr>
</thead>
<tbody>
<tr><td>應用程式/fhir+json</td><td>JSON（推薦）</td></tr>
<tr><td>應用程式/fhir+xml</td><td>XML</td></tr>
<tr><td>或使用 _format 參數</td><td>?_format=json</td></tr>
</tbody>
</table>

<h2 id="4-update"><strong>4. 更新（放置）</strong></h2>

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

<p><code>如果匹配：W/“3”</code> → 樂觀鎖定。僅噹噹前版本為 3 時才更新。如果已更改 → 409 衝突。</p>

<h3 id="conditional-update"><strong>有條件更新</strong></h3>

<pre><code class="language-http">PUT /fhir/r5/Patient?identifier=http://hospital.vn/mrn|MRN12345 HTTP/1.1

{...resource body...}
</code></pre>

<h2 id="5-patch"><strong>5.補丁（PATCH）</strong></h2>

<h3 id="json-patch"><strong>JSON 補丁（RFC 6902）</strong></h3>

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

<h3 id="fhirpath-patch"><strong>FHIR路徑補丁</strong></h3>

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

<h2 id="6-delete"><strong>6. 刪除（DELETE）</strong></h2>

<pre><code class="language-http">DELETE /fhir/r5/Patient/patient-001 HTTP/1.1
</code></pre>

<p>FHIR 伺服器通常實現 <strong>邏輯刪除</strong> （標記已刪除，保留在歷史記錄中）而不是實體刪除。</p>

<h2 id="7-history"><strong>7. 歷史</strong></h2>

<pre><code class="language-http"># History của một resource
GET /fhir/r5/Patient/patient-001/_history

# History của tất cả Patient
GET /fhir/r5/Patient/_history

# History toàn server
GET /fhir/r5/_history

# Với parameters
GET /fhir/r5/Patient/patient-001/_history?_count=10&_since=2025-01-01T00:00:00Z
</code></pre>

<p>回應返回Bundle類型 <code>歷史。歷史</code> 包含所有版本。</p>

<h2 id="8-search-co-ban"><strong>8. 基本搜索</strong></h2>

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

<h3 id="search-response"><strong>搜尋回應（捆綁搜尋集）</strong></h3>

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

<h2 id="9-capabilitystatement"><strong>9. 能力聲明</strong></h2>

<pre><code class="language-http">GET /fhir/r5/metadata HTTP/1.1
Accept: application/fhir+json
</code></pre>

<p><strong>能力聲明</strong> （舊名稱：一致性）描述了 FHIR 伺服器的功能：它支援哪些資源類型、互動和搜尋參數。</p>

<h2 id="10-http-status-codes"><strong>10. FHIR 中的 HTTP 狀態碼</strong></h2>

<table>
<thead>
<tr><th>狀態</th><th>意義</th></tr>
</thead>
<tbody>
<tr><td>200 好</td><td>讀取/搜尋/更新成功</td></tr>
<tr><td>201 已建立</td><td>創建成功</td></tr>
<tr><td>204 沒有內容</td><td>刪除成功</td></tr>
<tr><td>304 未修改</td><td>有條件讀取，不改變</td></tr>
<tr><td>400 錯誤請求</td><td>請求無效</td></tr>
<tr><td>401 未經授權</td><td>未經驗證</td></tr>
<tr><td>403 禁忌</td><td>無權利</td></tr>
<tr><td>404 未找到</td><td>資源不存在</td></tr>
<tr><td>409 衝突</td><td>版本衝突（If-Match）</td></tr>
<tr><td>410 走了</td><td>資源已刪除</td></tr>
<tr><td>第412章 前提條件失敗</td><td>條件操作失敗</td></tr>
<tr><td>422 無法處理的實體</td><td>驗證失敗（操作結果）</td></tr>
</tbody>
</table>

<h2 id="11-tong-ket"><strong>11. 總結</strong></h2>

<ul>
<li><p>FHIR RESTful API 符合 HTTP 標準： <strong>發布/獲取/放置/修補/刪除</strong></p></li>
<li><p><strong>版本控制</strong> — 每次更新都會建立一個新版本，可透過 vread 和歷史記錄存取</p></li>
<li><p><strong>條件運算</strong> — If-Match、If-None-Exist 用於並發控制</p></li>
<li><p><strong>搜尋</strong> — 具有多種參數類型、AND/OR 組合的高靈活性</p></li>
<li><p><strong>能力聲明</strong> - 自描述伺服器功能（機器可讀）</p></li>
</ul>
