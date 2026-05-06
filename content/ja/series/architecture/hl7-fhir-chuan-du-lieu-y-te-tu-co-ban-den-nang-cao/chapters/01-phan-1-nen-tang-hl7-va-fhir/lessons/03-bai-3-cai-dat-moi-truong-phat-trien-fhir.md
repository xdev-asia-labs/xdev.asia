---
id: 019e0a10-a103-7001-d001-f1a7f8000103
title: 'レッスン 3: FHIR 開発環境をインストールする'
slug: bai-3-cai-dat-moi-truong-phat-trien-fhir
description: >-
  HAPI FHIR サーバー (Docker)、パブリック FHIR テスト サーバー、FHIR 用 Postman Collection、FHIR
  Shorthand (FSH) および SUSHI、FHIR 用の VS Code 拡張機能をインストールし、最初の CRUD 操作をテストします。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'パート 1: HL7 と FHIR プラットフォーム'
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基本から高度な医療データ標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ アーキテクチャ — レッスン 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 3: FHIR 開発環境をインストールする</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基本から高度な医療データ標準</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: HL7 と FHIR プラットフォーム</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tong-quan-cong-cu"><strong>1. 必要なツールの概要</strong></h2>

<p>FHIR を効果的に実践するには、次のツールを準備する必要があります。</p>

<table>
<thead>
<tr><th>ツール</th><th>目的</th><th>必須ですか?</th></tr>
</thead>
<tbody>
<tr><td><strong>HAPI FHIR サーバー</strong></td><td>練習用のローカル FHIR サーバー</td><td>はい</td></tr>
<tr><td><strong>ドッカー</strong></td><td>HAPI FHIR サーバーを実行する</td><td>はい</td></tr>
<tr><td><strong>郵便配達員/ブルーノ</strong></td><td>テストAPI</td><td>はい</td></tr>
<tr><td><strong>VSコード</strong></td><td>FHIR 拡張機能を備えたエディター</td><td>はい</td></tr>
<tr><td><strong>Node.js</strong></td><td>SUSHI (FHIR 短縮コンパイラ) を実行します。</td><td>おすすめ</td></tr>
<tr><td><strong>Java 17+</strong></td><td>HAPI FHIR クライアント ライブラリ</td><td>オプション</td></tr>
</tbody>
</table>

<h2 id="2-cai-dat-hapi-fhir-server"><strong>2. Docker を使用して HAPI FHIR サーバーをインストールする</strong></h2>

<p><strong>ハピ・フィル</strong> は、Java で書かれた最も人気のあるオープン ソース FHIR サーバーです。これを実行する最も速い方法は、Docker を使用することです。</p>

<h3 id="docker-compose"><strong>ステップ 1: docker-compose.yml ファイルを作成する</strong></h3>

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

<h3 id="chay-server"><strong>ステップ 2: サーバーを起動する</strong></h3>

<pre><code class="language-bash"># Tạo thư mục dự án
mkdir fhir-lab &amp;&amp; cd fhir-lab

# Tạo docker-compose.yml (nội dung ở trên)

# Khởi chạy
docker compose up -d

# Kiểm tra log
docker compose logs -f hapi-fhir
</code></pre>

<p>30 ～ 60 秒ほど待ちます。サーバーの準備が整います。 <strong>http://localhost:8080</strong>.</p>

<h3 id="kiem-tra-server"><strong>ステップ 3: サーバーを確認する</strong></h3>

<pre><code class="language-bash"># Lấy CapabilityStatement
curl -s http://localhost:8080/fhir/metadata | jq '.fhirVersion'
# Kết quả: "5.0.0"

# Kiểm tra resource types được hỗ trợ
curl -s http://localhost:8080/fhir/metadata | jq '.rest[0].resource | length'
# Kết quả: 157 (hoặc gần đó)
</code></pre>

<h3 id="hapi-web-ui"><strong>HAPI FHIR Web UI</strong></h3>

<p>アクセス <strong>http://localhost:8080</strong> HAPI FHIR Web テスト UI にアクセスします。これは、コードを記述せずにすべての FHIR 操作を実行できる Web インターフェイスです。</p>

<h2 id="3-fhir-test-servers"><strong>3. パブリック FHIR テスト サーバー</strong></h2>

<p>ローカル サーバーに加えて、パブリック サーバーを使用して以下をテストできます。</p>

<table>
<thead>
<tr><th>サーバー</th><th>URL</th><th>バージョン</th><th>注意事項</th></tr>
</thead>
<tbody>
<tr><td>ハピ FHIR R5</td><td>https://hapi.fhir.org/baseR5</td><td>R5</td><td>Public, 無料、定期的にリセット</td></tr>
<tr><td>ハピ FHIR R4</td><td>https://hapi.fhir.org/baseR4</td><td>R4</td><td>Public, 無料</td></tr>
<tr><td>Firelyサーバー</td><td>https://server.fire.ly</td><td>R4</td><td>Sandbox 無料</td></tr>
<tr><td>スマートヘルスIT</td><td>https://launch.smarthealthit.org</td><td>R4</td><td>SMART FHIR サンドボックス上</td></tr>
</tbody>
</table>

<p><strong>注:</strong> 実際のデータを公開サーバーに投稿しないでください。テスト/合成データのみを使用してください。</p>

<h2 id="4-postman-setup"><strong>4. FHIR 用に Postman を構成する</strong></h2>

<h3 id="tao-collection"><strong>ステップ 1: コレクションを作成する</strong></h3>

<p>Postman で次の変数を使用してコレクション「FHIR Lab」を作成します。</p>

<ul>
<li><p><code>ベースURL</code> = <code>http://localhost:8080/fhir</code></p></li>
</ul>

<h3 id="cac-request-co-ban"><strong>ステップ 2: 基本的なリクエストを作成する</strong></h3>

<p><strong>1. CapabilityStatement (メタデータの取得)</strong></p>
<pre><code>GET {{baseUrl}}/metadata
Accept: application/fhir+json
</code></pre>

<p><strong>2. 患者の作成 (POST)</strong></p>
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

<p><strong>3. 患者の読み取り (GET)</strong></p>
<pre><code>GET {{baseUrl}}/Patient/{{patientId}}
Accept: application/fhir+json
</code></pre>

<p><strong>4. 患者の検索(GET)</strong></p>
<pre><code>GET {{baseUrl}}/Patient?family=Nguyen&amp;gender=male
Accept: application/fhir+json
</code></pre>

<p><strong>5. 患者の更新 (PUT)</strong></p>
<pre><code>PUT {{baseUrl}}/Patient/{{patientId}}
Content-Type: application/fhir+json
Accept: application/fhir+json
</code></pre>

<h2 id="5-vscode-extensions"><strong>5. FHIR 用の VS コード拡張機能</strong></h2>

<p>便利な拡張機能をインストールします。</p>

<h3 id="fhir-tools"><strong>FHIR ツール (推奨)</strong></h3>
<ul>
<li><p><strong>FHIR 略記法</strong> (SUSHI/HL7) — FSH の構文ハイライト</p></li>
<li><p><strong>RESTクライアント</strong> (Huachao Mao) — VS Code から HTTP リクエストを直接送信します</p></li>
<li><p><strong>JSON パス ファインダー</strong> — 大規模な JSON をナビゲートする</p></li>
</ul>

<h3 id="rest-client-demo"><strong>VS Code での REST クライアントの使用</strong></h3>

<p>ファイルの作成 <code>fhir-test.http</code>:</p>

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

<p>各リクエストの上にある「リクエストを送信」をクリックして送信します。</p>

<h2 id="6-fhir-shorthand-sushi"><strong>6. FHIR 略記法 (FSH) と SUSHI</strong></h2>

<p><strong>FHIR 略記法 (FSH)</strong> プロファイル、拡張機能、バリューセットを簡潔に記述するための仕様言語です。 <strong>寿司</strong> FSH を FHIR リソースにコンパイルするコンパイラです。</p>

<h3 id="cai-dat-sushi"><strong>SUSHIをインストールする</strong></h3>

<pre><code class="language-bash"># Cài Node.js (nếu chưa có)
# macOS
brew install node

# Cài SUSHI globally
npm install -g fsh-sushi

# Kiểm tra
sushi --version
</code></pre>

<h3 id="vd-fsh"><strong>簡単な FSH の例</strong></h3>

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

<p>FSH は、レッスン 13 (プロファイル) とレッスン 20 (実装ガイド) で広範囲に使用されます。</p>

<h2 id="7-thuc-hanh-crud"><strong>7. 実践: 最初の CRUD 操作</strong></h2>

<p>それでは、HAPI FHIR サーバーの基本的な操作を練習してみましょう。</p>

<h3 id="tao-patient"><strong>7.1.患者の作成 (CREATE)</strong></h3>

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

<p>サーバーが戻ります <code>201 件が作成されました</code> ヘッダー付き <code>場所: 患者/{id}/_history/1</code>。</p>

<h3 id="doc-patient"><strong>7.2.患者の読み取り (READ)</strong></h3>

<pre><code class="language-bash"># Thay {id} bằng id thực tế được trả về
curl -s http://localhost:8080/fhir/Patient/{id} | jq '.name[0]'
</code></pre>

<h3 id="tim-kiem-patient"><strong>7.3.患者の検索 (SEARCH)</strong></h3>

<pre><code class="language-bash"># Tìm theo họ
curl -s "http://localhost:8080/fhir/Patient?family=Nguyen" | jq '.total'

# Tìm theo giới tính
curl -s "http://localhost:8080/fhir/Patient?gender=male" | jq '.entry | length'

# Tìm theo identifier (số CCCD)
curl -s "http://localhost:8080/fhir/Patient?identifier=http://fhir.vn/sid/cccd|001085012345" | jq '.entry[0].resource.name'
</code></pre>

<h3 id="update-patient"><strong>7.4.患者の更新 (UPDATE)</strong></h3>

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

<h3 id="xoa-patient"><strong>7.5。患者の削除 (DELETE)</strong></h3>

<pre><code class="language-bash">curl -X DELETE http://localhost:8080/fhir/Patient/{id}
# Trả về 200 OK hoặc 204 No Content
</code></pre>

<h3 id="lich-su-patient"><strong>7.6.履歴を見る（HISTORY）</strong></h3>

<pre><code class="language-bash"># Lịch sử một resource cụ thể
curl -s http://localhost:8080/fhir/Patient/{id}/_history | jq '.entry | length'

# Lịch sử toàn bộ Patient type
curl -s "http://localhost:8080/fhir/Patient/_history?_count=5" | jq '.entry[].request.method'
</code></pre>

<h2 id="8-tao-du-lieu-test"><strong>8. バッチテストデータの作成</strong></h2>

<p>豊富な実践データを得るには、次を使用します。 <strong>シンテア</strong> — 合成患者データを作成するツール:</p>

<pre><code class="language-bash"># Cài Synthea (cần Java 11+)
git clone https://github.com/synthetichealth/synthea.git
cd synthea

# Tạo 10 bệnh nhân
./run_synthea -p 10 --exporter.fhir.export=true

# Output sẽ nằm trong output/fhir/
ls output/fhir/
</code></pre>

<p>出力ファイルは FHIR バンドル (トランザクション) であり、サーバーに直接 POST できます。</p>

<pre><code class="language-bash"># Upload một bundle lên server
curl -X POST http://localhost:8080/fhir \
  -H "Content-Type: application/fhir+json" \
  -d @output/fhir/hospitalInformation1234.json
</code></pre>

<h2 id="9-cau-truc-du-an"><strong>9. 推奨されるプロジェクト構造</strong></h2>

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

<h2 id="10-tom-tat"><strong>10. まとめ</strong></h2>

<p>この記事では、次の内容を説明します。</p>

<ul>
<li><p>インストール <strong>HAPI FHIR サーバー</strong> Docker (ポート 8080) を使用する</p></li>
<li><p>を知る <strong>FHIR テストサーバー</strong> パブリック (hapi.fhir.org)</p></li>
<li><p>構成 <strong>郵便屋さん</strong> そして <strong>VS コード REST クライアント</strong> FHIR用</p></li>
<li><p>インストール <strong>寿司</strong> (FHIR 短縮コンパイラ)</p></li>
<li><p>練習する <strong>CRUD操作</strong>: 作成、読み取り、検索、更新、削除、履歴</p></li>
<li><p>使用する <strong>シンテア</strong> 合成テストデータを作成する</p></li>
</ul>

<p>次の記事ではさらに深く掘り下げていきます <strong>FHIR リソース</strong> — 患者、医師、組織、管理リソースから始めます。</p>
