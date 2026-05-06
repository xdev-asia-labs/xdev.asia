---
id: 019d8b30-b115-7001-c001-e0c5f8100115
title: 'レッスン 15: 認可サービス - 詳細な認可'
slug: bai-15-authorization-services-phan-quyen-chi-tiet
description: '認可サービスの詳細: リソース サーバー、リソース、スコープ、アクセス許可、ポリシー (ロールベース、ユーザーベース、グループベース、クライアントベース、時間ベース、JavaScript、集約)。 UMA 2.0 サポート、Permission API、Policy Enforcer、プッシュされたクレーム、リソース属性、クレーム情報ポイント、評価 API、および Spring Boot / Node.js アプリケーションへの認可の統合。'
duration_minutes: 240
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 4: ユーザー フェデレーション、組織、および認可'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8946" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8946)"/>

  <!-- Decorations -->
  <g>
    <circle cx="789" cy="77" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="978" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="667" cy="195" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="856" cy="124" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="53" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="147" x2="1100" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="177" x2="1050" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1083.3730669589463,226 1083.3730669589463,268 1047,289 1010.6269330410536,268 1010.6269330410536,226 1047,205" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: 認可サービス - 部門</tspan>
      <tspan x="60" dy="42">詳細な権限</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: ユーザー フェデレーション、組織、および認可</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-authorization-services-tong-quan"><strong>1. 認可サービス — 概要</strong></h2>

<p>Keycloak認可サービスは機能を提供します<strong>きめ細かい認可</strong>により、ロールのみに依存するのではなく、リソースおよびスコープ レベルでのアクセス制御が可能になります。このシステムは規格に準拠しています<strong>UMA 2.0</strong>(ユーザー管理アクセス) をサポートし、複数のポリシー タイプをサポートします。</p>

<h3 id="11-cac-khai-niem-chinh"><strong>1.1 主な概念</strong></h3>

<table>
<thead>
<tr><th>コンセプト</th><th>説明する</th><th>例えば</th></tr>
</thead>
<tbody>
<tr><td><strong>リソースサーバー</strong></td><td>アプリケーションはリソースを保護する必要があります (Keycloak クライアントです)</td><td>バックエンドAPIサーバー</td></tr>
<tr><td><strong>リソース</strong></td><td>保護が必要なオブジェクト</td><td>ドキュメント、API エンドポイント、ページ</td></tr>
<tr><td><strong>範囲</strong></td><td>リソースに対して実行できるアクション</td><td><code>ビュー。ビュー</code>, <code>編集</code>, <code>消去</code>, <code>公開</code></td></tr>
<tr><td><strong>許可</strong></td><td>リソース/スコープとポリシーを組み合わせる</td><td>「文書を閲覧できるのは誰ですか?」</td></tr>
<tr><td><strong>ポリシー</strong></td><td>アクセスを許可するには条件を満たす必要があります</td><td>「ユーザーは「編集者」の役割を持っている必要があります。」</td></tr>
</tbody>
</table>

<h3 id="12-authorization-flow"><strong>1.2 認可フロー</strong></h3>

<pre><code class="language-text">Client Request → Resource Server → Keycloak Authorization
                                        │
                    ┌───────────────────┘
                    ▼
              Find Matching Permission
                    │
                    ▼
              Evaluate Associated Policies
                    │
              ┌─────┼─────┐
              ▼     ▼     ▼
           Policy Policy Policy
           (Role) (Time) (Group)
              │     │     │
              └─────┼─────┘
                    ▼
              Decision Strategy
              (Unanimous/Affirmative/Consensus)
                    │
              ┌─────┴─────┐
              ▼           ▼
           PERMIT       DENY</code></pre>

<h2 id="2-bat-authorization-services"><strong>2. 認証サービスをオンにする</strong></h2>

<p>認可サービスが有効になっているのは、<strong>クライアントレベル</strong>(レルムではありません):</p>

<h3 id="21-qua-admin-console"><strong>2.1 管理コンソール経由</strong></h3>

<pre><code class="language-text">Clients → my-app → Settings:
  Client authentication: ON
  Authorization: ON
  → Save</code></pre>

<h3 id="22-qua-kcadm"><strong>2.2 kcadm.sh 経由</strong></h3>

<pre><code class="language-bash"># Bật authorization trên client
kcadm.sh update clients/${CLIENT_ID} -r my-realm \
  -s authorizationServicesEnabled=true \
  -s serviceAccountsEnabled=true</code></pre>

<p>有効にしたら、タブ<strong>認可</strong>クライアント設定には、設定、リソース、スコープ、ポリシー、権限、評価のサブタブが表示されます。</p>

<h2 id="3-resources"><strong>3. リソース</strong></h2>

<p>リソースが表す<strong>保護される対象</strong>。各リソースには、URI、タイプ、スコープ、属性を含めることができます。</p>

<h3 id="31-tao-resources"><strong>3.1 リソースの作成</strong></h3>

<pre><code class="language-bash"># Tạo resource qua REST API
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/resource" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Document Resource",
    "type": "document",
    "uris": ["/api/documents/*"],
    "ownerManagedAccess": false,
    "scopes": [
      { "name": "view" },
      { "name": "edit" },
      { "name": "delete" },
      { "name": "publish" }
    ],
    "attributes": {
      "department": ["engineering"],
      "sensitivity": ["internal"]
    }
  }'

# Tạo thêm resource cho specific item
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/resource" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin Panel",
    "type": "page",
    "uris": ["/admin", "/admin/*"],
    "scopes": [
      { "name": "access" }
    ]
  }'</code></pre>

<h3 id="32-resource-attributes"><strong>3.2 リソースの属性</strong></h3>

<p>属性を使用すると、ポリシーで使用できるメタデータをリソースに追加できます。</p>

<pre><code class="language-json">{
  "name": "Project X Files",
  "type": "project-files",
  "attributes": {
    "project_id": ["project-x"],
    "classification": ["confidential"],
    "allowed_regions": ["vietnam", "singapore"]
  }
}</code></pre>

<h2 id="4-scopes"><strong>4. スコープ</strong></h2>

<p>スコープの定義<strong>アクション</strong>リソースに対して実行できます。</p>

<pre><code class="language-bash"># Tạo scopes
for scope in view edit delete publish manage; do
  curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/scope" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}" \
    -H "Content-Type: application/json" \
    -d "{\"name\": \"$scope\"}"
done</code></pre>

<p>一般的なスコープ パターン:</p>

<table>
<thead>
<tr><th>パターン</th><th>スコープ</th></tr>
</thead>
<tbody>
<tr><td><strong>クラッド</strong></td><td><code>作成する</code>, <code>読む</code>, <code>アップデート。アップデート</code>, <code>消去</code></td></tr>
<tr><td><strong>コンテンツ管理</strong></td><td><code>ビュー。ビュー</code>, <code>編集</code>, <code>公開</code>, <code>アーカイブ</code></td></tr>
<tr><td><strong>APIアクセス</strong></td><td><code>読む</code>, <code>書く。書く</code>, <code>管理者。管理者</code></td></tr>
<tr><td><strong>ファイル操作</strong></td><td><code>ダウンロード</code>, <code>アップロード</code>, <code>共有</code>, <code>消去</code></td></tr>
</tbody>
</table>

<h2 id="5-policies"><strong>5. ポリシー</strong></h2>

<p>ポリシーは<strong>状態</strong>アクセスを許可するか拒否するかを決定します。 Keycloakはさまざまなタイプのポリシーをサポートしています。</p>

<h3 id="51-role-based-policy"><strong>5.1 役割ベースのポリシー</strong></h3>

<pre><code class="language-bash"># Tạo role-based policy
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/policy/role" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Editor Role Policy",
    "description": "User phải có role editor",
    "logic": "POSITIVE",
    "roles": [
      {
        "id": "'${EDITOR_ROLE_ID}'",
        "required": true
      }
    ]
  }'</code></pre>

<h3 id="52-user-based-policy"><strong>5.2 ユーザーベースのポリシー</strong></h3>

<pre><code class="language-json">{
  "name": "Specific Users Policy",
  "description": "Chỉ cho phép users cụ thể",
  "type": "user",
  "logic": "POSITIVE",
  "users": ["user-id-1", "user-id-2"]
}</code></pre>

<h3 id="53-group-based-policy"><strong>5.3 グループベースのポリシー</strong></h3>

<pre><code class="language-json">{
  "name": "Engineering Group Policy",
  "description": "Members của group Engineering",
  "type": "group",
  "logic": "POSITIVE",
  "groups": [
    {
      "id": "group-uuid",
      "path": "/Engineering",
      "extendChildren": true
    }
  ],
  "groupsClaim": "groups"
}</code></pre>

<h3 id="54-client-based-policy"><strong>5.4 クライアントベースのポリシー</strong></h3>

<pre><code class="language-json">{
  "name": "Trusted Client Policy",
  "description": "Chỉ cho phép từ trusted clients",
  "type": "client",
  "logic": "POSITIVE",
  "clients": ["trusted-frontend", "mobile-app"]
}</code></pre>

<h3 id="55-time-based-policy"><strong>5.5 時間ベースのポリシー</strong></h3>

<pre><code class="language-json">{
  "name": "Business Hours Policy",
  "description": "Chỉ cho phép trong giờ làm việc",
  "type": "time",
  "logic": "POSITIVE",
  "notBefore": "2025-01-01 00:00:00",
  "notOnOrAfter": "2030-12-31 23:59:59",
  "dayMonth": null,
  "dayMonthEnd": null,
  "month": null,
  "monthEnd": null,
  "year": null,
  "yearEnd": null,
  "hour": 8,
  "hourEnd": 18,
  "minute": 0,
  "minuteEnd": 0
}</code></pre>

<h3 id="56-javascript-policy"><strong>5.6 JavaScript ポリシー</strong></h3>

<p><strong>注記：</strong>JavaScript ポリシーを有効にする必要があります<code>--features=スクリプト</code>またはJARをアップロードします。</p>

<pre><code class="language-javascript">// Script-based policy (upload dưới dạng JAR provider)
// Filename: my-policy.js
var context = $evaluation.getContext();
var identity = context.getIdentity();
var attributes = identity.getAttributes();

// Kiểm tra custom attribute
var department = attributes.getValue('department');
if (department && department.asString(0) === 'engineering') {
    $evaluation.grant();
} else {
    $evaluation.deny();
}</code></pre>

<p>JavaScript ポリシーを JAR としてデプロイします。</p>

<pre><code class="language-bash"># Tạo cấu trúc thư mục
mkdir -p META-INF/keycloak-scripts/

# Tạo file descriptor
cat &gt; META-INF/keycloak-scripts/keycloak-scripts.json &lt;&lt; 'EOF'
{
  "policies": [
    {
      "name": "Engineering Department Policy",
      "fileName": "engineering-policy.js",
      "description": "Allow only engineering department"
    }
  ]
}
EOF

# Package JAR
jar cf my-policies.jar META-INF/ engineering-policy.js

# Deploy
cp my-policies.jar /opt/keycloak/providers/
/opt/keycloak/bin/kc.sh build</code></pre>

<h3 id="57-aggregated-policy"><strong>5.7 集約ポリシー</strong></h3>

<p>意思決定戦略を使用して、複数のポリシーを 1 つのポリシーに結合します。</p>

<pre><code class="language-json">{
  "name": "Full Access Policy",
  "description": "Kết hợp Role + Group + Time policies",
  "type": "aggregate",
  "logic": "POSITIVE",
  "decisionStrategy": "UNANIMOUS",
  "policies": [
    "Editor Role Policy",
    "Engineering Group Policy",
    "Business Hours Policy"
  ]
}</code></pre>

<h2 id="6-decision-strategies"><strong>6. 意思決定戦略</strong></h2>

<table>
<thead>
<tr><th>戦略</th><th>説明する</th><th>いつ使用するか</th></tr>
</thead>
<tbody>
<tr><td><strong>全会一致</strong></td><td>すべてのポリシーは許可する必要があります</td><td>厳密 — すべての条件が満たされる必要があります</td></tr>
<tr><td><strong>肯定</strong></td><td>少なくとも 1 つの許可ポリシー</td><td>柔軟性 - 必要な条件は 1 つだけです</td></tr>
<tr><td><strong>コンセンサス</strong></td><td>許可番号 > 拒否番号</td><td>投票 - 多数決で決定</td></tr>
</tbody>
</table>

<h2 id="7-permissions"><strong>7. 権限</strong></h2>

<p>結合された権限<strong>ポリシーを含むリソース/スコープ</strong>認可ルールを作成します。</p>

<h3 id="71-resource-based-permission"><strong>7.1 リソースベースの権限</strong></h3>

<pre><code class="language-bash"># Tạo resource-based permission
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/permission/resource" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Document Access Permission",
    "description": "Ai có thể truy cập documents",
    "type": "resource",
    "logic": "POSITIVE",
    "decisionStrategy": "UNANIMOUS",
    "resources": ["Document Resource"],
    "policies": ["Editor Role Policy", "Business Hours Policy"]
  }'</code></pre>

<h3 id="72-scope-based-permission"><strong>7.2 スコープベースの権限</strong></h3>

<pre><code class="language-bash"># Tạo scope-based permission
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/permission/scope" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Document Delete Permission",
    "description": "Chỉ admin mới được xóa documents",
    "type": "scope",
    "logic": "POSITIVE",
    "decisionStrategy": "UNANIMOUS",
    "resources": ["Document Resource"],
    "scopes": ["delete"],
    "policies": ["Admin Role Policy"]
  }'

# Permission cho publish scope
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/permission/scope" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Document Publish Permission",
    "description": "Editor và Admin được publish",
    "type": "scope",
    "logic": "POSITIVE",
    "decisionStrategy": "AFFIRMATIVE",
    "resources": ["Document Resource"],
    "scopes": ["publish"],
    "policies": ["Editor Role Policy", "Admin Role Policy"]
  }'</code></pre>

<h2 id="8-uma-20"><strong>8. UMA 2.0</strong></h2>

<p>ユーザー管理アクセス (UMA) 2.0 が有効になっています<strong>リソース所有者がアクセス権を管理する</strong>彼らのリソースに。ユーザーは、管理者の介入なしに他のユーザーとリソースを共有できます。</p>

<h3 id="81-bat-uma"><strong>8.1 UMA を有効にする</strong></h3>

<pre><code class="language-text">Clients → my-app → Authorization → Settings:
  Resource server settings:
    Policy Enforcement Mode: ENFORCING
    Decision Strategy: UNANIMOUS

Resources:
  Resource → Owner Managed Access: ON</code></pre>

<h3 id="82-uma-grant-flow"><strong>8.2 UMA 助成金の流れ</strong></h3>

<pre><code class="language-bash"># 1. Client gọi Resource Server → bị deny → nhận permission ticket
# Response 401 với header:
# WWW-Authenticate: UMA realm="my-realm",
#   as_uri="http://localhost:8080/realms/my-realm",
#   ticket="permission-ticket-value"

# 2. Client exchange permission ticket lấy RPT (Requesting Party Token)
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket" \
  -d "ticket=permission-ticket-value" \
  -d "client_id=my-app" \
  -d "client_secret=my-secret"

# Response chứa RPT (access token with authorization data)
{
  "access_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "authorization": {
    "permissions": [
      {
        "rsid": "resource-uuid",
        "rsname": "Document Resource",
        "scopes": ["view", "edit"]
      }
    ]
  }
}</code></pre>

<h2 id="9-permission-api"><strong>9. 許可API</strong></h2>

<p>API で許可される権限<strong>プログラムで権限をチェックする</strong>UMA フローなし:</p>

<pre><code class="language-bash"># Kiểm tra quyền truy cập cho user hiện tại
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket" \
  -d "audience=my-app" \
  -d "permission=Document Resource#view" \
  -d "response_mode=decision" \
  -d "client_id=my-frontend" \
  -d "subject_token=${USER_ACCESS_TOKEN}"

# Response:
# { "result": true }  → PERMIT
# { "result": false } → DENY

# Kiểm tra nhiều permissions cùng lúc
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket" \
  -d "audience=my-app" \
  -d "permission=Document Resource#view" \
  -d "permission=Document Resource#edit" \
  -d "permission=Admin Panel#access" \
  -d "response_mode=permissions" \
  -d "client_id=my-frontend" \
  -d "subject_token=${USER_ACCESS_TOKEN}"</code></pre>

<h2 id="10-pushed-claims"><strong>10. プッシュされたクレーム</strong></h2>

<p>プッシュされたクレームによりクライアントは許可されます<strong>追加のコンテキスト情報を送信する</strong>承認をリクエストする場合、ポリシーが意思決定を行うためのより多くのデータを取得できるようになります。</p>

<pre><code class="language-bash"># Request với pushed claims
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket" \
  -d "audience=my-app" \
  -d "permission=Document Resource#edit" \
  -d 'claim_token={"ip_address":["10.0.0.5"],"device_type":["desktop"],"risk_score":["low"]}' \
  -d "claim_token_format=urn:ietf:params:oauth:token-type:jwt" \
  -d "client_id=my-frontend" \
  -d "subject_token=${USER_ACCESS_TOKEN}"</code></pre>

<h2 id="11-claim-information-points"><strong>11. 請求情報ポイント</strong></h2>

<p>請求情報ポイントの許可<strong>多くの情報源から請求を自動的に収集します</strong>(HTTP リクエスト、外部サービス) ポリシーで使用するには:</p>

<pre><code class="language-json">{
  "name": "http-claim-info",
  "claimInformationPoint": {
    "claims": {
      "ip_address": "{request.remoteAddr}",
      "http_method": "{request.method}",
      "request_uri": "{request.relativePath}",
      "user_agent": "{request.headers[user-agent]}"
    }
  }
}</code></pre>

<h2 id="12-evaluation-api"><strong>12. 評価API</strong></h2>

<p>Keycloak管理コンソールが提供される<strong>評価ツール</strong>導入する前に権限をテストします。</p>

<h3 id="121-su-dung-evaluation-tool"><strong>12.1 評価ツールの使用</strong></h3>

<pre><code class="language-text">Clients → my-app → Authorization → Evaluate:
1. Identity Information:
   - User: chọn user cần test
   - Roles: chọn roles (hoặc tự động từ user)
2. Resources:
   - Thêm resources cần evaluate
3. Contextual Information:
   - Pushed Claims (JSON)
4. Click "Evaluate"

Results:
  ┌─────────────────────────────┬────────┐
  │ Permission                  │ Result │
  ├─────────────────────────────┼────────┤
  │ Document Access Permission  │ PERMIT │
  │ Document Delete Permission  │ DENY   │
  │ Admin Panel Permission      │ DENY   │
  └─────────────────────────────┴────────┘</code></pre>

<h3 id="122-evaluation-qua-api"><strong>12.2 APIによる評価</strong></h3>

<pre><code class="language-bash"># Evaluate permissions cho user cụ thể
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/policy/evaluate" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user-uuid",
    "roleIds": [],
    "resources": [
      {
        "name": "Document Resource",
        "scopes": ["view", "edit", "delete"]
      }
    ],
    "context": {
      "attributes": {
        "ip_address": ["10.0.0.5"]
      }
    },
    "entitlements": false
  }'</code></pre>

<h2 id="13-policy-enforcer"><strong>13. ポリシー執行者</strong></h2>

<p>ポリシー・エンフォーサは、<strong>Javaライブラリ</strong>アプリケーションに統合して、認可ポリシーを自動的に適用します。</p>

<h3 id="131-spring-boot-integration"><strong>13.1 Spring Boot の統合</strong></h3>

<pre><code class="language-xml">&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.keycloak&lt;/groupId&gt;
    &lt;artifactId&gt;keycloak-authz-client&lt;/artifactId&gt;
    &lt;version&gt;26.0.0&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.keycloak&lt;/groupId&gt;
    &lt;artifactId&gt;keycloak-policy-enforcer&lt;/artifactId&gt;
    &lt;version&gt;26.0.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

<pre><code class="language-java">// AuthorizationConfig.java
import org.keycloak.authorization.client.AuthzClient;
import org.keycloak.authorization.client.Configuration;
import org.keycloak.representations.idm.authorization.*;

@Configuration
public class AuthorizationConfig {

    @Bean
    public AuthzClient authzClient() {
        // Load từ keycloak.json hoặc cấu hình programmatically
        return AuthzClient.create();
    }
}

// DocumentService.java
@Service
public class DocumentService {

    private final AuthzClient authzClient;

    public DocumentService(AuthzClient authzClient) {
        this.authzClient = authzClient;
    }

    public boolean canUserEditDocument(String userId, String documentId) {
        AuthorizationRequest request = new AuthorizationRequest();
        request.addPermission("Document Resource", "edit");

        try {
            AuthorizationResponse response = authzClient
                .authorization(userId)
                .authorize(request);
            // Nếu thành công → user có quyền
            return response.getToken() != null;
        } catch (AuthorizationDeniedException e) {
            return false;
        }
    }
}

// DocumentController.java
@RestController
@RequestMapping("/api/documents")
public class DocumentController {

    private final DocumentService documentService;

    @PutMapping("/{id}")
    public ResponseEntity&lt;?&gt; updateDocument(
            @PathVariable String id,
            @RequestBody DocumentDTO dto,
            @AuthenticationPrincipal Jwt jwt) {

        if (!documentService.canUserEditDocument(jwt.getSubject(), id)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(Map.of("error", "You don't have permission to edit this document"));
        }

        // Proceed with update
        return ResponseEntity.ok(documentService.update(id, dto));
    }
}</code></pre>

<h3 id="132-keycloak-json-configuration"><strong>13.2 keycloak.json の構成</strong></h3>

<pre><code class="language-json">{
  "realm": "my-realm",
  "auth-server-url": "http://localhost:8080",
  "resource": "my-app",
  "credentials": {
    "secret": "client-secret-here"
  },
  "policy-enforcer": {
    "enforcement-mode": "ENFORCING",
    "paths": [
      {
        "path": "/api/documents/*",
        "methods": [
          {
            "method": "GET",
            "scopes": ["view"]
          },
          {
            "method": "PUT",
            "scopes": ["edit"]
          },
          {
            "method": "DELETE",
            "scopes": ["delete"]
          }
        ]
      },
      {
        "path": "/admin/*",
        "enforcement-mode": "ENFORCING"
      },
      {
        "path": "/public/*",
        "enforcement-mode": "DISABLED"
      }
    ]
  }
}</code></pre>

<h3 id="133-nodejs-integration"><strong>13.3 Node.js の統合</strong></h3>

<pre><code class="language-typescript">// authorization.ts
import axios from 'axios';

interface PermissionResult {
  rsid: string;
  rsname: string;
  scopes: string[];
}

class KeycloakAuthzClient {
  private readonly baseUrl: string;
  private readonly realm: string;
  private readonly clientId: string;
  private readonly clientSecret: string;

  constructor(config: {
    baseUrl: string;
    realm: string;
    clientId: string;
    clientSecret: string;
  }) {
    this.baseUrl = config.baseUrl;
    this.realm = config.realm;
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
  }

  async checkPermission(
    userToken: string,
    resource: string,
    scope: string
  ): Promise&lt;boolean&gt; {
    try {
      const response = await axios.post(
        `${this.baseUrl}/realms/${this.realm}/protocol/openid-connect/token`,
        new URLSearchParams({
          grant_type: 'urn:ietf:params:oauth:grant-type:uma-ticket',
          audience: this.clientId,
          permission: `${resource}#${scope}`,
          response_mode: 'decision',
          subject_token: userToken,
        }),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          auth: {
            username: this.clientId,
            password: this.clientSecret,
          },
        }
      );
      return response.data.result === true;
    } catch {
      return false;
    }
  }

  async getPermissions(userToken: string): Promise&lt;PermissionResult[]&gt; {
    const response = await axios.post(
      `${this.baseUrl}/realms/${this.realm}/protocol/openid-connect/token`,
      new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:uma-ticket',
        audience: this.clientId,
        response_mode: 'permissions',
        subject_token: userToken,
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        auth: {
          username: this.clientId,
          password: this.clientSecret,
        },
      }
    );
    return response.data;
  }
}

// Express middleware
import { Request, Response, NextFunction } from 'express';

const authzClient = new KeycloakAuthzClient({
  baseUrl: 'http://localhost:8080',
  realm: 'my-realm',
  clientId: 'my-app',
  clientSecret: 'secret',
});

function enforcePermission(resource: string, scope: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const allowed = await authzClient.checkPermission(token, resource, scope);
    if (!allowed) {
      return res.status(403).json({
        error: `Permission denied: ${resource}#${scope}`,
      });
    }
    next();
  };
}

// Usage
app.get('/api/documents',
  enforcePermission('Document Resource', 'view'),
  documentsController.list
);

app.put('/api/documents/:id',
  enforcePermission('Document Resource', 'edit'),
  documentsController.update
);

app.delete('/api/documents/:id',
  enforcePermission('Document Resource', 'delete'),
  documentsController.delete
);</code></pre>

<h2 id="14-kcadm-quan-ly-authorization"><strong>14. kcadm.sh — 認可管理</strong></h2>

<pre><code class="language-bash"># List resources
kcadm.sh get clients/${CLIENT_ID}/authz/resource-server/resource -r my-realm

# List policies
kcadm.sh get clients/${CLIENT_ID}/authz/resource-server/policy -r my-realm

# List permissions
kcadm.sh get clients/${CLIENT_ID}/authz/resource-server/permission -r my-realm

# List scopes
kcadm.sh get clients/${CLIENT_ID}/authz/resource-server/scope -r my-realm

# Export authorization settings
kcadm.sh get clients/${CLIENT_ID}/authz/resource-server -r my-realm &gt; authz-export.json

# Import authorization settings
kcadm.sh create clients/${CLIENT_ID}/authz/resource-server \
  -r my-realm -f authz-import.json</code></pre>

<h2 id="15-best-practices"><strong>15. ベストプラクティス</strong></h2>

<ul>
<li><strong>粗粒度から開始→細粒度へ</strong>— 最初にロールベースを使用し、必要に応じてリソースベースを追加します</li>
<li><strong>リソースタイプを使用する</strong>— 個別のリソースごとに権限を作成するのではなく、同じタイプのリソースをグループ化します。</li>
<li><strong>評価APIを使用したテスト</strong>— 運用環境にデプロイする前に、常に権限をテストしてください</li>
<li><strong>意思決定戦略に注意する</strong> — <code>全会一致</code>より安全ですが、より制限的です<code>肯定的</code></li>
<li><strong>JavaScript ポリシーを制限する</strong>— 組み込みポリシーの種類を優先し、本当に必要な場合にのみ JavaScript を使用します</li>
<li><strong>権限評価パフォーマンスを監視する</strong>— ネストされたポリシーが多すぎると速度が低下する可能性があります</li>
<li><strong>認可設定のエクスポート/インポート</strong>— kcadm.sh を使用して認証設定のバージョンを管理します</li>
<li><strong>ビジネスロジックから権限チェックを分離する</strong>— ミドルウェア/インターセプターレベルで強制します</li>
</ul>
