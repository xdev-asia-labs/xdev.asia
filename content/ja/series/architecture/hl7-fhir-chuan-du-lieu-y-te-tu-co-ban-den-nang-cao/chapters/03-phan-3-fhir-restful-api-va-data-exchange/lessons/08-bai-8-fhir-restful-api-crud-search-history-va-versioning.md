---
id: 019e0a10-a301-7001-d001-f1a7f8000301
title: 'レッスン 8: FHIR RESTful API - CRUD、検索、履歴、およびバージョニング'
slug: bai-8-fhir-restful-api-crud-search-history-va-versioning
description: >-
  REST インタラクションの詳細: 作成 (POST)、読み取り (GET)、更新 (PUT)、パッチ (PATCH)、削除
  (DELETE)、vread、履歴。コンテンツ ネゴシエーション
  (JSON/XML)、ETag、If-Match、条件付き操作、CapabilityStatement。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 3: FHIR RESTful API とデータ交換'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ アーキテクチャ — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: FHIR RESTful API - CRUD、検索、</tspan>
      <tspan x="60" dy="42">歴史とバージョン管理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: FHIR RESTful API とデータ交換</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-fhir-restful-api-overview"><strong>1. FHIR RESTful API の概要</strong></h2>

<p>FHIR の用途 <strong>RESTful API</strong> 主な対話パラダイムとして。各リソース タイプには、HTTP 標準に従って、独自のエンドポイントがあります。</p>

<h3 id="base-url"><strong>ベース URL</strong></h3>

<pre><code>https://fhir-server.example.com/fhir/r5
        ├── base URL ──────────────────┘
        
GET [base]/Patient/123           → Đọc Patient có id=123
POST [base]/Patient              → Tạo Patient mới
PUT [base]/Patient/123           → Cập nhật Patient 123
DELETE [base]/Patient/123        → Xóa Patient 123
</code></pre>

<h3 id="interactions-summary"><strong>インタラクションの概要</strong></h3>

<table>
<thead>
<tr><th>インタラクション</th><th>HTTPメソッド</th><th>URL</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td>読む</td><td>ゲット</td><td>[ベース]/[タイプ]/[ID]</td><td>リソースを読む</td></tr>
<tr><td>ヴレッド</td><td>ゲット</td><td>[ベース]/[タイプ]/[id]/_history/[vid]</td><td>特定のバージョンを読む</td></tr>
<tr><td>更新します。アップデート</td><td>置く</td><td>[ベース]/[タイプ]/[ID]</td><td>リソースを更新する</td></tr>
<tr><td>パッチ。パッチ</td><td>パッチ</td><td>[ベース]/[タイプ]/[ID]</td><td>部分更新</td></tr>
<tr><td>削除する</td><td>削除</td><td>[ベース]/[タイプ]/[ID]</td><td>リソースの削除</td></tr>
<tr><td>作成する</td><td>投稿</td><td>[ベース]/[タイプ]</td><td>新しいリソースを作成する</td></tr>
<tr><td>検索します。検索</td><td>取得/投稿</td><td>[ベース]/[タイプ]?params</td><td>検索</td></tr>
<tr><td>歴史。歴史</td><td>ゲット</td><td>[ベース]/[タイプ]/[id]/_history</td><td>歴史の変遷</td></tr>
<tr><td>能力</td><td>ゲット</td><td>[ベース]/メタデータ</td><td>能力に関する声明</td></tr>
</tbody>
</table>

<h2 id="2-create"><strong>2.作成(POST)</strong></h2>

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

<h3 id="conditional-create"><strong>条件付き作成</strong></h3>

<pre><code class="language-http">POST /fhir/r5/Patient HTTP/1.1
If-None-Exist: identifier=http://hospital.vn/mrn|MRN12345

{...}
</code></pre>

<p>条件に一致する患者がいない場合にのみ作成 → 重複を避ける。</p>

<h2 id="3-read"><strong>3. 読み取り(GET)</strong></h2>

<pre><code class="language-http">GET /fhir/r5/Patient/patient-001 HTTP/1.1
Accept: application/fhir+json
</code></pre>

<h3 id="vread"><strong>バージョン読み取り (vread)</strong></h3>

<pre><code class="language-http">GET /fhir/r5/Patient/patient-001/_history/3 HTTP/1.1
</code></pre>

<h3 id="content-negotiation"><strong>コンテンツのネゴシエーション</strong></h3>

<table>
<thead>
<tr><th>ヘッダーを受け入れる</th><th>フォーマット</th></tr>
</thead>
<tbody>
<tr><td>アプリケーション/fhir+json</td><td>JSON (推奨)</td></tr>
<tr><td>アプリケーション/fhir+xml</td><td>XML</td></tr>
<tr><td>または、_format パラメータを使用します</td><td>?_format=json</td></tr>
</tbody>
</table>

<h2 id="4-update"><strong>4.更新(PUT)</strong></h2>

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

<p><code>If-Match: W/「3」</code> → 楽観的ロック。現在のバージョンが 3 の場合のみ更新してください。変更されている場合 → 409 競合。</p>

<h3 id="conditional-update"><strong>条件付き更新</strong></h3>

<pre><code class="language-http">PUT /fhir/r5/Patient?identifier=http://hospital.vn/mrn|MRN12345 HTTP/1.1

{...resource body...}
</code></pre>

<h2 id="5-patch"><strong>5.パッチ(PATCH)</strong></h2>

<h3 id="json-patch"><strong>JSON パッチ (RFC 6902)</strong></h3>

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

<h3 id="fhirpath-patch"><strong>FHIRPath パッチ</strong></h3>

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

<h2 id="6-delete"><strong>6. 削除（DELETE）</strong></h2>

<pre><code class="language-http">DELETE /fhir/r5/Patient/patient-001 HTTP/1.1
</code></pre>

<p>FHIR サーバーは多くの場合、 <strong>論理削除</strong> 物理的に削除するのではなく、（削除済みとしてマークし、履歴に保持します）。</p>

<h2 id="7-history"><strong>7. 歴史</strong></h2>

<pre><code class="language-http"># History của một resource
GET /fhir/r5/Patient/patient-001/_history

# History của tất cả Patient
GET /fhir/r5/Patient/_history

# History toàn server
GET /fhir/r5/_history

# Với parameters
GET /fhir/r5/Patient/patient-001/_history?_count=10&_since=2025-01-01T00:00:00Z
</code></pre>

<p>応答はバンドルタイプを返します <code>歴史。歴史</code> すべてのバージョンが含まれています。</p>

<h2 id="8-search-co-ban"><strong>8. 基本的な検索</strong></h2>

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

<h3 id="search-response"><strong>検索応答 (バンドル検索セット)</strong></h3>

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

<h2 id="9-capabilitystatement"><strong>9. 能力に関する声明</strong></h2>

<pre><code class="language-http">GET /fhir/r5/metadata HTTP/1.1
Accept: application/fhir+json
</code></pre>

<p><strong>能力に関する声明</strong> (旧名: Conformance) では、FHIR サーバーの機能、つまりサポートされるリソース タイプ、インタラクション、および検索パラメーターについて説明します。</p>

<h2 id="10-http-status-codes"><strong>10. FHIR の HTTP ステータス コード</strong></h2>

<table>
<thead>
<tr><th>ステータス</th><th>意味</th></tr>
</thead>
<tbody>
<tr><td>200 OK</td><td>読み取り/検索/更新が正常に完了しました</td></tr>
<tr><td>201 件が作成されました</td><td>正常に作成されました</td></tr>
<tr><td>204 コンテンツがありません</td><td>正常に削除されました</td></tr>
<tr><td>304 未変更</td><td>条件付き読み取り、変更なし</td></tr>
<tr><td>400 件の不正なリクエスト</td><td>リクエストは無効です</td></tr>
<tr><td>401 不正</td><td>認証されていません</td></tr>
<tr><td>403 禁止</td><td>権利なし</td></tr>
<tr><td>404 見つかりません</td><td>リソースが存在しません</td></tr>
<tr><td>409 紛争</td><td>バージョンの競合 (If-Match)</td></tr>
<tr><td>410 ゴーン</td><td>リソースが削除されました</td></tr>
<tr><td>412 前提条件が失敗しました</td><td>条件付き操作が失敗しました</td></tr>
<tr><td>422 処理できないエンティティ</td><td>検証に失敗しました (OperationOutcome)</td></tr>
</tbody>
</table>

<h2 id="11-tong-ket"><strong>11. まとめ</strong></h2>

<ul>
<li><p>FHIR RESTful API は HTTP 標準に準拠しています。 <strong>ポスト/取得/プット/パッチ/削除</strong></p></li>
<li><p><strong>バージョン管理</strong> — 更新ごとに新しいバージョンが作成され、vread と履歴を介してアクセスされます</p></li>
<li><p><strong>条件付き操作</strong> — 同時実行制御のための If-Match、If-None-Exist</p></li>
<li><p><strong>検索</strong> — 多くのパラメータ タイプ、AND/OR の組み合わせによる高い柔軟性</p></li>
<li><p><strong>能力に関する声明</strong> — 自己記述型サーバー機能 (機械可読)</p></li>
</ul>
