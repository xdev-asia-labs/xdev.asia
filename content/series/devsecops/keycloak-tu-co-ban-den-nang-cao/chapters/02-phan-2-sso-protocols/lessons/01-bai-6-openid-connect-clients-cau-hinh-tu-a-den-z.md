---
id: 019d8b30-b106-7001-c001-e0c5f8100106
title: 'Bài 6: OpenID Connect Clients - Cấu hình từ A đến Z'
slug: bai-6-openid-connect-clients-cau-hinh-tu-a-den-z
description: >-
  Tìm hiểu chi tiết về OIDC client types (public, confidential, bearer-only),
  tạo và cấu hình clients qua Admin Console, các OIDC auth flows (Authorization
  Code, Implicit, Client Credentials, Device Authorization, CIBA), thiết lập
  PKCE, CIBA policy và tích hợp thực tế với React và Spring Boot.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: SSO Protocols - OpenID Connect và SAML"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
---
<h2 id="1-tong-quan-openid-connect"><strong>1. Tổng quan OpenID Connect trong Keycloak</strong></h2>

<p>OpenID Connect (OIDC) là giao thức xác thực được xây dựng trên nền tảng OAuth 2.0. Keycloak hỗ trợ đầy đủ OIDC specification và mở rộng nhiều tính năng dành cho enterprise. Trong bài này, chúng ta sẽ đi sâu vào việc tạo, cấu hình và tích hợp OIDC clients.</p>

<h3 id="oidc-endpoints"><strong>OIDC Endpoints trong Keycloak</strong></h3>
<p>Keycloak cung cấp các endpoints chuẩn OIDC. Bạn có thể lấy toàn bộ thông tin endpoints qua <strong>Well-Known Configuration</strong>:</p>

<pre><code>GET https://&lt;keycloak-host&gt;/realms/&lt;realm-name&gt;/.well-known/openid-configuration</code></pre>

<p>Các endpoints quan trọng:</p>
<table>
<thead>
<tr><th>Endpoint</th><th>URL Pattern</th><th>Mục đích</th></tr>
</thead>
<tbody>
<tr><td>Authorization</td><td><code>/realms/{realm}/protocol/openid-connect/auth</code></td><td>Khởi tạo authentication flow</td></tr>
<tr><td>Token</td><td><code>/realms/{realm}/protocol/openid-connect/token</code></td><td>Lấy/refresh tokens</td></tr>
<tr><td>UserInfo</td><td><code>/realms/{realm}/protocol/openid-connect/userinfo</code></td><td>Lấy thông tin user</td></tr>
<tr><td>Logout</td><td><code>/realms/{realm}/protocol/openid-connect/logout</code></td><td>Đăng xuất (RP-Initiated Logout)</td></tr>
<tr><td>Token Introspection</td><td><code>/realms/{realm}/protocol/openid-connect/token/introspect</code></td><td>Kiểm tra token validity</td></tr>
<tr><td>Token Revocation</td><td><code>/realms/{realm}/protocol/openid-connect/revoke</code></td><td>Thu hồi token</td></tr>
<tr><td>JWKS</td><td><code>/realms/{realm}/protocol/openid-connect/certs</code></td><td>Public keys cho JWT verification</td></tr>
<tr><td>Device Authorization</td><td><code>/realms/{realm}/protocol/openid-connect/auth/device</code></td><td>Device Authorization Grant</td></tr>
</tbody>
</table>

<h2 id="2-oidc-client-types"><strong>2. OIDC Client Types</strong></h2>

<p>Keycloak hỗ trợ ba loại client chính, mỗi loại phù hợp với kiến trúc ứng dụng khác nhau:</p>

<h3 id="public-client"><strong>2.1 Public Client</strong></h3>
<p>Client không thể bảo mật client secret — thường là ứng dụng chạy hoàn toàn trên browser hoặc mobile device.</p>
<ul>
<li><p><strong>Đặc điểm</strong>: Không có client secret, xác thực qua redirect URI</p></li>
<li><p><strong>Use cases</strong>: Single Page Applications (React, Angular, Vue), Mobile apps, Desktop apps</p></li>
<li><p><strong>Auth flow</strong>: Authorization Code + PKCE (bắt buộc)</p></li>
<li><p><strong>Cấu hình</strong>: <code>Client authentication</code> = OFF</p></li>
</ul>

<pre><code>// Ví dụ: SPA không có backend — PHẢI dùng Public Client + PKCE
// Client KHÔNG lưu trữ secret, chỉ dùng code_verifier/code_challenge
Client ID: my-spa-app
Client authentication: OFF
Valid redirect URIs: http://localhost:3000/*
Web origins: http://localhost:3000</code></pre>

<h3 id="confidential-client"><strong>2.2 Confidential Client</strong></h3>
<p>Client có khả năng bảo mật client secret — thường là server-side applications.</p>
<ul>
<li><p><strong>Đặc điểm</strong>: Có client secret hoặc private key, xác thực khi gọi token endpoint</p></li>
<li><p><strong>Use cases</strong>: Server-side web apps (Spring Boot, Django, .NET), Backend APIs, Service-to-service communication</p></li>
<li><p><strong>Auth flow</strong>: Authorization Code, Client Credentials, hoặc cả hai</p></li>
<li><p><strong>Cấu hình</strong>: <code>Client authentication</code> = ON</p></li>
</ul>

<pre><code>// Ví dụ: Spring Boot backend app — dùng Confidential Client
Client ID: my-backend-api
Client authentication: ON
Client secret: auto-generated hoặc custom
Valid redirect URIs: http://localhost:8081/login/oauth2/code/keycloak</code></pre>

<h3 id="bearer-only-client"><strong>2.3 Bearer-only Client (Legacy)</strong></h3>
<p>Client chỉ nhận và validate bearer tokens — không khởi tạo login flow.</p>
<ul>
<li><p><strong>Đặc điểm</strong>: Không có redirect URI, chỉ validate incoming tokens</p></li>
<li><p><strong>Use cases</strong>: Pure API services, Microservices chỉ nhận requests đã xác thực</p></li>
<li><p><strong>Lưu ý</strong>: Trong Keycloak 25+, bearer-only đã bị <strong>deprecated</strong>. Thay vào đó, tạo confidential client và chỉ bật <code>Service accounts roles</code></p></li>
</ul>

<table>
<thead>
<tr><th>Đặc điểm</th><th>Public</th><th>Confidential</th><th>Bearer-only (deprecated)</th></tr>
</thead>
<tbody>
<tr><td>Client authentication</td><td>OFF</td><td>ON</td><td>N/A</td></tr>
<tr><td>Client secret</td><td>Không</td><td>Có</td><td>Không</td></tr>
<tr><td>Có thể khởi tạo login</td><td>Có</td><td>Có</td><td>Không</td></tr>
<tr><td>Redirect URI</td><td>Bắt buộc</td><td>Bắt buộc</td><td>Không</td></tr>
<tr><td>PKCE</td><td>Bắt buộc</td><td>Tùy chọn</td><td>N/A</td></tr>
<tr><td>Use case chính</td><td>SPA, Mobile</td><td>Server app</td><td>Pure API</td></tr>
</tbody>
</table>

<h2 id="3-tao-oidc-client"><strong>3. Tạo OIDC Client qua Admin Console</strong></h2>

<h3 id="buoc-tao-client"><strong>3.1 Các bước tạo Client</strong></h3>
<ol>
<li><p>Truy cập <strong>Admin Console</strong> → chọn realm → <strong>Clients</strong> → <strong>Create client</strong></p></li>
<li><p><strong>General Settings</strong>:</p>
<ul>
<li><strong>Client type</strong>: OpenID Connect</li>
<li><strong>Client ID</strong>: <code>my-app</code> (unique identifier)</li>
<li><strong>Name</strong>: My Application (tên hiển thị)</li>
<li><strong>Description</strong>: Mô tả client</li>
<li><strong>Always display in UI</strong>: OFF</li>
</ul>
</li>
<li><p><strong>Capability config</strong>:</p>
<ul>
<li><strong>Client authentication</strong>: ON (confidential) hoặc OFF (public)</li>
<li><strong>Authorization</strong>: ON nếu cần fine-grained authorization</li>
<li><strong>Authentication flow</strong>: chọn các flows phù hợp</li>
</ul>
</li>
<li><p><strong>Login settings</strong>:</p>
<ul>
<li>Root URL, Home URL, Valid redirect URIs, Valid post logout redirect URIs, Web origins</li>
</ul>
</li>
</ol>

<h3 id="tao-client-bang-admin-cli"><strong>3.2 Tạo Client bằng Admin CLI</strong></h3>
<pre><code># Đăng nhập Admin CLI
bin/kcadm.sh config credentials \
  --server http://localhost:8080 \
  --realm master \
  --user admin \
  --password admin

# Tạo confidential client
bin/kcadm.sh create clients -r my-company \
  -s clientId=my-backend-app \
  -s name="My Backend Application" \
  -s enabled=true \
  -s protocol=openid-connect \
  -s publicClient=false \
  -s 'redirectUris=["http://localhost:8081/*"]' \
  -s 'webOrigins=["http://localhost:8081"]' \
  -s serviceAccountsEnabled=true \
  -s directAccessGrantsEnabled=false

# Tạo public client
bin/kcadm.sh create clients -r my-company \
  -s clientId=my-spa-app \
  -s name="My SPA Application" \
  -s enabled=true \
  -s protocol=openid-connect \
  -s publicClient=true \
  -s 'redirectUris=["http://localhost:3000/*"]' \
  -s 'webOrigins=["http://localhost:3000"]' \
  -s directAccessGrantsEnabled=false</code></pre>

<h3 id="tao-client-bang-rest-api"><strong>3.3 Tạo Client bằng Admin REST API</strong></h3>
<pre><code># Lấy access token
ACCESS_TOKEN=$(curl -s -X POST \
  "http://localhost:8080/realms/master/protocol/openid-connect/token" \
  -d "client_id=admin-cli" \
  -d "username=admin" \
  -d "password=admin" \
  -d "grant_type=password" | jq -r '.access_token')

# Tạo client
curl -s -X POST \
  "http://localhost:8080/admin/realms/my-company/clients" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "clientId": "my-backend-app",
    "name": "My Backend Application",
    "enabled": true,
    "protocol": "openid-connect",
    "publicClient": false,
    "redirectUris": ["http://localhost:8081/*"],
    "webOrigins": ["http://localhost:8081"],
    "serviceAccountsEnabled": true,
    "directAccessGrantsEnabled": false,
    "attributes": {
      "pkce.code.challenge.method": "S256"
    }
  }'</code></pre>

<h2 id="4-client-settings-chi-tiet"><strong>4. Client Settings chi tiết</strong></h2>

<h3 id="general-settings"><strong>4.1 General Settings</strong></h3>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Ghi chú</th></tr>
</thead>
<tbody>
<tr><td>Client ID</td><td>Unique identifier cho client</td><td>Không thể thay đổi sau khi tạo</td></tr>
<tr><td>Name</td><td>Tên hiển thị</td><td>Hỗ trợ localization key: <code>${my-client-name}</code></td></tr>
<tr><td>Description</td><td>Mô tả client</td><td></td></tr>
<tr><td>Always display in UI</td><td>Luôn hiển thị trên Account Console</td><td>Dùng cho internal tools</td></tr>
</tbody>
</table>

<h3 id="access-settings"><strong>4.2 Access Settings</strong></h3>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td>Root URL</td><td>URL gốc, prepend vào relative URLs</td><td><code>http://localhost:3000</code></td></tr>
<tr><td>Home URL</td><td>URL mặc định khi redirect về client</td><td><code>/dashboard</code></td></tr>
<tr><td>Valid redirect URIs</td><td>Danh sách redirect URIs hợp lệ (wildcard *)</td><td><code>http://localhost:3000/*</code></td></tr>
<tr><td>Valid post logout redirect URIs</td><td>URIs hợp lệ sau logout</td><td><code>+</code> (kế thừa redirect URIs)</td></tr>
<tr><td>Web origins</td><td>CORS allowed origins</td><td><code>+</code> (kế thừa redirect URIs)</td></tr>
<tr><td>Admin URL</td><td>URL cho backchannel operations</td><td>URL backend (logout, policy enforcement)</td></tr>
</tbody>
</table>

<p><strong>Lưu ý bảo mật cho redirect URIs:</strong></p>
<ul>
<li><p><strong>KHÔNG BAO GIỜ</strong> sử dụng wildcard <code>*</code> làm redirect URI trong production — đây là lỗ hổng <strong>Open Redirect</strong></p></li>
<li><p>Khai báo <strong>chính xác</strong> các redirect URIs cần thiết</p></li>
<li><p>Sử dụng HTTPS trong production</p></li>
<li><p>Tránh sử dụng localhost trong production redirect URIs</p></li>
</ul>

<pre><code># ❌ KHÔNG NÊN — quá rộng, dễ bị Open Redirect attack
Valid redirect URIs: *

# ❌ KHÔNG NÊN — wildcard domain
Valid redirect URIs: https://*.example.com/*

# ✅ NÊN — khai báo chính xác
Valid redirect URIs:
  https://myapp.example.com/callback
  https://myapp.example.com/silent-renew</code></pre>

<h3 id="capability-config"><strong>4.3 Capability Config</strong></h3>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Khi nào bật</th></tr>
</thead>
<tbody>
<tr><td>Client authentication</td><td>ON = confidential, OFF = public</td><td>ON cho server apps</td></tr>
<tr><td>Authorization</td><td>Fine-grained authorization (UMA)</td><td>Khi cần resource-based permissions</td></tr>
<tr><td>Standard flow</td><td>Authorization Code Flow</td><td>Hầu hết use cases</td></tr>
<tr><td>Direct access grants</td><td>Resource Owner Password Credentials</td><td>Legacy apps (không khuyến nghị)</td></tr>
<tr><td>Implicit flow</td><td>Implicit Grant (deprecated)</td><td>Không nên dùng</td></tr>
<tr><td>Service accounts roles</td><td>Client Credentials Grant</td><td>Machine-to-machine auth</td></tr>
<tr><td>OAuth 2.0 Device Authorization Grant</td><td>Device Code Flow</td><td>Smart TV, CLI tools</td></tr>
<tr><td>OIDC CIBA Grant</td><td>Client-Initiated Backchannel Auth</td><td>Banking, telecom</td></tr>
</tbody>
</table>

<h3 id="login-settings"><strong>4.4 Login Settings</strong></h3>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>Login theme</td><td>Theme cho trang đăng nhập của client này</td></tr>
<tr><td>Consent required</td><td>Hiển thị consent screen cho user</td></tr>
<tr><td>Display client on screen</td><td>Hiển thị tên client trên consent screen</td></tr>
<tr><td>Client consent screen text</td><td>Text tùy chỉnh cho consent</td></tr>
</tbody>
</table>

<h3 id="logout-settings"><strong>4.5 Logout Settings</strong></h3>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>Front channel logout</td><td>Logout qua browser redirect (OpenID Connect Front-Channel Logout)</td></tr>
<tr><td>Backchannel logout URL</td><td>URL nhận backchannel logout requests từ Keycloak</td></tr>
<tr><td>Backchannel logout session required</td><td>Bao gồm session ID trong logout token</td></tr>
<tr><td>Backchannel logout revoke offline sessions</td><td>Thu hồi offline sessions khi logout</td></tr>
</tbody>
</table>

<pre><code># Ví dụ Backchannel Logout URL cho Spring Boot
Backchannel logout URL: http://localhost:8081/logout/connect/back-channel/keycloak

# Ví dụ Front Channel Logout URL
Front channel logout URL: http://localhost:3000/logout-callback</code></pre>

<h2 id="5-oidc-auth-flows"><strong>5. OIDC Authentication Flows chi tiết</strong></h2>

<h3 id="authorization-code-flow"><strong>5.1 Authorization Code Flow</strong></h3>
<p>Đây là flow được <strong>khuyến nghị nhất</strong> cho hầu hết use cases. User được redirect đến Keycloak login page, sau khi xác thực thành công, Keycloak trả về authorization code, client đổi code lấy tokens.</p>

<pre><code>┌──────────┐     ┌──────────┐     ┌──────────┐
│  User    │     │  Client  │     │ Keycloak │
│ (Browser)│     │  (App)   │     │  (IdP)   │
└────┬─────┘     └────┬─────┘     └────┬─────┘
     │  1. Click Login│                │
     │───────────────>│                │
     │                │ 2. Redirect    │
     │<───────────────│  /auth?        │
     │                │  response_type │
     │                │  =code&        │
     │                │  client_id=... │
     │ 3. Login page  │                │
     │───────────────────────────────>│
     │ 4. Enter credentials           │
     │───────────────────────────────>│
     │ 5. Redirect with code          │
     │<──────────────────────────────│
     │───────────────>│                │
     │                │ 6. Exchange    │
     │                │    code for    │
     │                │    tokens      │
     │                │───────────────>│
     │                │ 7. Tokens      │
     │                │<──────────────│
     │ 8. Authenticated│               │
     │<───────────────│                │</code></pre>

<p><strong>Request Authorization Code:</strong></p>
<pre><code>GET /realms/my-company/protocol/openid-connect/auth?
  response_type=code&
  client_id=my-app&
  redirect_uri=http://localhost:3000/callback&
  scope=openid profile email&
  state=random-state-value&
  nonce=random-nonce-value</code></pre>

<p><strong>Exchange Code for Tokens:</strong></p>
<pre><code>POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
code=AUTH_CODE_FROM_CALLBACK&
client_id=my-app&
client_secret=CLIENT_SECRET&
redirect_uri=http://localhost:3000/callback</code></pre>

<p><strong>Response:</strong></p>
<pre><code>{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "expires_in": 300,
  "refresh_expires_in": 1800,
  "refresh_token": "eyJhbGciOiJIUzUxMiIs...",
  "token_type": "Bearer",
  "id_token": "eyJhbGciOiJSUzI1NiIs...",
  "not-before-policy": 0,
  "session_state": "a-session-id",
  "scope": "openid profile email"
}</code></pre>

<h3 id="authorization-code-with-pkce"><strong>5.2 Authorization Code Flow + PKCE</strong></h3>
<p>PKCE (Proof Key for Code Exchange, RFC 7636) bảo vệ Authorization Code Flow khỏi authorization code interception attack. <strong>Bắt buộc sử dụng cho Public Clients</strong> và <strong>khuyến nghị cho tất cả clients</strong>.</p>

<p><strong>Cách hoạt động:</strong></p>
<ol>
<li><p>Client tạo <code>code_verifier</code> (random string 43-128 ký tự)</p></li>
<li><p>Client tính <code>code_challenge</code> = Base64URL(SHA256(<code>code_verifier</code>))</p></li>
<li><p>Gửi <code>code_challenge</code> trong authorization request</p></li>
<li><p>Gửi <code>code_verifier</code> trong token request — Keycloak verify bằng cách hash và so sánh</p></li>
</ol>

<p><strong>Cấu hình PKCE trong Keycloak:</strong></p>
<p>Vào client → tab <strong>Advanced</strong> → <strong>Advanced Settings</strong>:</p>
<table>
<thead>
<tr><th>Setting</th><th>Giá trị</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>Proof Key for Code Exchange Code Challenge Method</td><td>S256</td><td>Bắt buộc PKCE với SHA-256 (khuyến nghị)</td></tr>
<tr><td></td><td>plain</td><td>PKCE với plain text (không an toàn)</td></tr>
<tr><td></td><td>(empty)</td><td>Không bắt buộc PKCE</td></tr>
</tbody>
</table>

<p><strong>PKCE flow:</strong></p>
<pre><code># 1. Tạo code_verifier (client-side)
code_verifier="dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"

# 2. Tạo code_challenge = Base64URL(SHA256(code_verifier))
code_challenge="E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM"

# 3. Authorization request với code_challenge
GET /realms/my-company/protocol/openid-connect/auth?
  response_type=code&
  client_id=my-spa-app&
  redirect_uri=http://localhost:3000/callback&
  scope=openid profile email&
  state=random-state&
  code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM&
  code_challenge_method=S256

# 4. Token request với code_verifier
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
code=AUTH_CODE&
client_id=my-spa-app&
redirect_uri=http://localhost:3000/callback&
code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk</code></pre>

<h3 id="implicit-flow"><strong>5.3 Implicit Flow (Deprecated)</strong></h3>
<p><strong>KHÔNG NÊN sử dụng.</strong> OAuth 2.0 Security Best Current Practice (RFC 9700) khuyến nghị không dùng Implicit Flow vì tokens được trả về qua URL fragment, dễ bị đánh cắp qua browser history hoặc referrer header.</p>

<p><strong>Thay thế:</strong> Sử dụng Authorization Code Flow + PKCE cho tất cả clients, kể cả SPAs.</p>

<p>Nếu buộc phải hỗ trợ legacy systems:</p>
<pre><code># Bật Implicit Flow trong client settings
Capability Config → Implicit flow: ON

# Request (trả về token trực tiếp)
GET /realms/my-company/protocol/openid-connect/auth?
  response_type=id_token token&
  client_id=legacy-app&
  redirect_uri=http://localhost:3000/callback&
  scope=openid profile&
  state=random-state&
  nonce=random-nonce</code></pre>

<h3 id="client-credentials-flow"><strong>5.4 Client Credentials Flow</strong></h3>
<p>Dành cho <strong>machine-to-machine authentication</strong> — không có user interaction. Client tự xác thực bằng credentials của chính nó.</p>

<p><strong>Use cases:</strong></p>
<ul>
<li><p>Microservice gọi microservice</p></li>
<li><p>Backend batch jobs</p></li>
<li><p>Scheduled tasks cần truy cập API</p></li>
<li><p>CI/CD pipelines</p></li>
</ul>

<p><strong>Cấu hình:</strong></p>
<ol>
<li><p>Tạo <strong>Confidential Client</strong> (<code>Client authentication</code> = ON)</p></li>
<li><p>Bật <strong>Service accounts roles</strong> trong Capability Config</p></li>
<li><p>Gán roles cho service account: Client → <strong>Service account roles</strong> tab</p></li>
</ol>

<pre><code># Request token
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
client_id=my-service&
client_secret=MY_CLIENT_SECRET&
scope=openid

# Response
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "expires_in": 300,
  "token_type": "Bearer",
  "not-before-policy": 0,
  "scope": "openid profile email"
}
# Lưu ý: KHÔNG có refresh_token và id_token trong Client Credentials flow</code></pre>

<h3 id="device-authorization-grant"><strong>5.5 Device Authorization Grant (RFC 8628)</strong></h3>
<p>Dành cho thiết bị có hạn chế về input — Smart TV, IoT devices, CLI tools. User xác thực trên thiết bị khác (phone, laptop) bằng mã code.</p>

<p><strong>Cấu hình:</strong></p>
<ol>
<li><p>Client → Capability Config → bật <strong>OAuth 2.0 Device Authorization Grant</strong></p></li>
<li><p>Realm Settings → cấu hình <strong>OAuth Device Code</strong> lifespan (mặc định 600 giây)</p></li>
</ol>

<pre><code># Bước 1: Device request — lấy device code và user code
POST /realms/my-company/protocol/openid-connect/auth/device
Content-Type: application/x-www-form-urlencoded

client_id=my-tv-app

# Response
{
  "device_code": "GmRhmhcxhwAzkoEqiMEg_DnyEysNkuNhszIySk9eS",
  "user_code": "WDJB-MJHT",
  "verification_uri": "http://localhost:8080/realms/my-company/device",
  "verification_uri_complete": "http://localhost:8080/realms/my-company/device?user_code=WDJB-MJHT",
  "expires_in": 600,
  "interval": 5
}

# Bước 2: Hiển thị user_code và verification_uri trên TV/device
# User truy cập verification_uri trên phone/laptop, nhập user_code, đăng nhập

# Bước 3: Device polling — kiểm tra xem user đã xác thực chưa
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:device_code&
client_id=my-tv-app&
device_code=GmRhmhcxhwAzkoEqiMEg_DnyEysNkuNhszIySk9eS

# Response khi user chưa xác thực
{
  "error": "authorization_pending",
  "error_description": "The authorization request is still pending"
}

# Response khi user đã xác thực — nhận tokens
{
  "access_token": "eyJhbGciOi...",
  "refresh_token": "eyJhbGciOi...",
  "id_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "expires_in": 300
}</code></pre>

<h3 id="ciba-flow"><strong>5.6 CIBA — Client-Initiated Backchannel Authentication (OIDC CIBA)</strong></h3>
<p>CIBA cho phép client khởi tạo authentication mà <strong>không cần redirect user qua browser</strong>. Thay vào đó, Keycloak gửi authentication request đến user qua channel khác (push notification, SMS, email).</p>

<p><strong>Use cases:</strong></p>
<ul>
<li><p><strong>Banking</strong>: Point-of-sale xác thực thanh toán qua mobile app</p></li>
<li><p><strong>Telecom</strong>: Xác thực SIM-based authentication</p></li>
<li><p><strong>Call centers</strong>: Agent xác thực customer qua phone</p></li>
</ul>

<p><strong>Cấu hình CIBA:</strong></p>
<ol>
<li><p>Client → Capability Config → bật <strong>OIDC CIBA Grant</strong></p></li>
<li><p>Realm Settings → Authentication → tab <strong>CIBA Policy</strong>:</p></li>
</ol>

<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Giá trị mặc định</th></tr>
</thead>
<tbody>
<tr><td>Backchannel Token Delivery Mode</td><td>poll, ping, hoặc push</td><td>poll</td></tr>
<tr><td>Expires In</td><td>Thời gian hết hạn authentication request</td><td>120 giây</td></tr>
<tr><td>Interval</td><td>Khoảng cách giữa các polling requests</td><td>5 giây</td></tr>
<tr><td>Authentication Requested User Hint</td><td>Loại user hint: login_hint, login_hint_token, id_token_hint</td><td>login_hint</td></tr>
</tbody>
</table>

<pre><code># CIBA authentication request
POST /realms/my-company/protocol/openid-connect/ext/ciba/auth
Content-Type: application/x-www-form-urlencoded

client_id=my-pos-app&
client_secret=CLIENT_SECRET&
scope=openid&
login_hint=user@example.com&
binding_message=Xac+nhan+thanh+toan+500k

# Response
{
  "auth_req_id": "eyJhbGciOiJSUzI1NiIs...",
  "expires_in": 120,
  "interval": 5
}

# Polling for token (giống Device Auth)
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=urn:openid:params:grant-type:ciba&
client_id=my-pos-app&
client_secret=CLIENT_SECRET&
auth_req_id=eyJhbGciOiJSUzI1NiIs...</code></pre>

<p><strong>Custom CIBA Authentication Channel Provider:</strong></p>
<p>Mặc định Keycloak sử dụng <code>CIBALoginUserResolver</code> nội bộ. Để gửi push notification thực tế, bạn cần implement SPI custom:</p>
<pre><code>// Implement interface CIBAAuthenticationChannelProvider
public class MyCIBAChannelProvider implements CIBAAuthenticationChannelProvider {

    @Override
    public void requestAuthentication(
        CIBALoginUserResolver.CIBALoginUser user,
        AuthenticationChannelRequest request) {
        // Gửi push notification đến user's device
        // binding_message: "Xác nhận thanh toán 500k"
        pushNotificationService.send(
            user.getDeviceToken(),
            request.getBindingMessage(),
            request.getAuthResultUrl()
        );
    }

    @Override
    public boolean verifyAuthentication(String authResultId) {
        // Verify kết quả từ user's device
        return authResultStore.isApproved(authResultId);
    }
}</code></pre>

<h2 id="6-tich-hop-react"><strong>6. Tích hợp OIDC Client với React (SPA)</strong></h2>

<h3 id="keycloak-js-adapter"><strong>6.1 Sử dụng keycloak-js adapter</strong></h3>
<p>Keycloak cung cấp JavaScript adapter chính thức cho SPAs:</p>

<pre><code># Cài đặt
npm install keycloak-js</code></pre>

<p><strong>Cấu hình Keycloak client cho React:</strong></p>
<pre><code>Client ID: my-react-app
Client authentication: OFF (public client)
Valid redirect URIs: http://localhost:3000/*
Valid post logout redirect URIs: http://localhost:3000/*
Web origins: http://localhost:3000
PKCE Code Challenge Method: S256</code></pre>

<p><strong>Khởi tạo Keycloak trong React:</strong></p>
<pre><code>// src/keycloak.ts
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "my-company",
  clientId: "my-react-app",
});

export default keycloak;</code></pre>

<pre><code>// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import keycloak from "./keycloak";

keycloak
  .init({
    onLoad: "login-required", // hoặc 'check-sso'
    pkceMethod: "S256",
    checkLoginIframe: false, // tắt cho production tránh cookie issues
    silentCheckSsoRedirectUri:
      window.location.origin + "/silent-check-sso.html",
  })
  .then((authenticated) => {
    if (authenticated) {
      console.log("User is authenticated");
      console.log("Token:", keycloak.token);
      console.log("User info:", keycloak.tokenParsed);

      // Auto-refresh token trước khi hết hạn
      setInterval(() => {
        keycloak
          .updateToken(70) // refresh nếu token hết hạn trong 70 giây
          .then((refreshed) => {
            if (refreshed) {
              console.log("Token was refreshed");
            }
          })
          .catch(() => {
            console.error("Failed to refresh token");
            keycloak.login(); // redirect về login nếu refresh thất bại
          });
      }, 60000);

      ReactDOM.createRoot(
        document.getElementById("root") as HTMLElement
      ).render(
        &lt;React.StrictMode&gt;
          &lt;App keycloak={keycloak} /&gt;
        &lt;/React.StrictMode&gt;
      );
    } else {
      console.warn("Not authenticated");
      keycloak.login();
    }
  })
  .catch((error) => {
    console.error("Keycloak init failed:", error);
  });</code></pre>

<pre><code>// src/App.tsx
import Keycloak from "keycloak-js";

interface AppProps {
  keycloak: Keycloak;
}

function App({ keycloak }: AppProps) {
  const handleLogout = () => {
    keycloak.logout({
      redirectUri: window.location.origin,
    });
  };

  const callApi = async () => {
    // Tự động gắn Bearer token vào API calls
    const response = await fetch("http://localhost:8081/api/data", {
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    &lt;div&gt;
      &lt;h1&gt;Welcome, {keycloak.tokenParsed?.preferred_username}&lt;/h1&gt;
      &lt;p&gt;Email: {keycloak.tokenParsed?.email}&lt;/p&gt;
      &lt;p&gt;Roles: {keycloak.tokenParsed?.realm_access?.roles?.join(", ")}&lt;/p&gt;
      &lt;button onClick={callApi}&gt;Call API&lt;/button&gt;
      &lt;button onClick={handleLogout}&gt;Logout&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>

<h3 id="react-oidc-context"><strong>6.2 Sử dụng react-oidc-context (thay thế keycloak-js)</strong></h3>
<p>Một lựa chọn khác là sử dụng thư viện <code>react-oidc-context</code> dựa trên <code>oidc-client-ts</code> — không phụ thuộc vào Keycloak-specific adapter:</p>

<pre><code>npm install react-oidc-context oidc-client-ts</code></pre>

<pre><code>// src/main.tsx
import { AuthProvider } from "react-oidc-context";

const oidcConfig = {
  authority: "http://localhost:8080/realms/my-company",
  client_id: "my-react-app",
  redirect_uri: "http://localhost:3000/callback",
  post_logout_redirect_uri: "http://localhost:3000",
  scope: "openid profile email",
  automaticSilentRenew: true,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  &lt;AuthProvider {...oidcConfig}&gt;
    &lt;App /&gt;
  &lt;/AuthProvider&gt;
);</code></pre>

<pre><code>// src/App.tsx
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  if (auth.isLoading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (auth.error) return &lt;div&gt;Error: {auth.error.message}&lt;/div&gt;;

  if (!auth.isAuthenticated) {
    return &lt;button onClick={() =&gt; auth.signinRedirect()}&gt;Login&lt;/button&gt;;
  }

  return (
    &lt;div&gt;
      &lt;p&gt;Welcome, {auth.user?.profile.preferred_username}&lt;/p&gt;
      &lt;button onClick={() =&gt; auth.removeUser()}&gt;Logout&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>

<h2 id="7-tich-hop-spring-boot"><strong>7. Tích hợp OIDC Client với Spring Boot</strong></h2>

<h3 id="spring-boot-oauth2-resource-server"><strong>7.1 Spring Boot OAuth2 Resource Server</strong></h3>
<p>Cấu hình Spring Boot làm <strong>Resource Server</strong> — validate JWT tokens từ Keycloak:</p>

<pre><code>&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-oauth2-resource-server&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>

<pre><code># application.yml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: http://localhost:8080/realms/my-company
          jwk-set-uri: http://localhost:8080/realms/my-company/protocol/openid-connect/certs</code></pre>

<pre><code>// SecurityConfig.java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("admin")
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(jwt -> jwt
                    .jwtAuthenticationConverter(jwtAuthenticationConverter())
                )
            );
        return http.build();
    }

    // Custom converter để map Keycloak realm_access.roles → Spring Security authorities
    @Bean
    public JwtAuthenticationConverter jwtAuthenticationConverter() {
        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
        converter.setJwtGrantedAuthoritiesConverter(jwt -> {
            List&lt;GrantedAuthority&gt; authorities = new ArrayList&lt;&gt;();

            // Extract realm roles
            Map&lt;String, Object&gt; realmAccess = jwt.getClaimAsMap("realm_access");
            if (realmAccess != null) {
                List&lt;String&gt; roles = (List&lt;String&gt;) realmAccess.get("roles");
                if (roles != null) {
                    roles.forEach(role ->
                        authorities.add(new SimpleGrantedAuthority("ROLE_" + role))
                    );
                }
            }

            // Extract client roles
            Map&lt;String, Object&gt; resourceAccess = jwt.getClaimAsMap("resource_access");
            if (resourceAccess != null) {
                Map&lt;String, Object&gt; clientAccess =
                    (Map&lt;String, Object&gt;) resourceAccess.get("my-backend-app");
                if (clientAccess != null) {
                    List&lt;String&gt; clientRoles = (List&lt;String&gt;) clientAccess.get("roles");
                    if (clientRoles != null) {
                        clientRoles.forEach(role ->
                            authorities.add(new SimpleGrantedAuthority("ROLE_" + role))
                        );
                    }
                }
            }

            return authorities;
        });
        return converter;
    }
}</code></pre>

<h3 id="spring-boot-oauth2-client"><strong>7.2 Spring Boot OAuth2 Client (Server-side login)</strong></h3>
<p>Cấu hình Spring Boot làm <strong>OAuth2 Client</strong> — server-side login flow:</p>

<pre><code>&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-oauth2-client&lt;/artifactId&gt;
&lt;/dependency&gt;</code></pre>

<pre><code># application.yml
spring:
  security:
    oauth2:
      client:
        registration:
          keycloak:
            client-id: my-backend-app
            client-secret: ${KEYCLOAK_CLIENT_SECRET}
            scope: openid,profile,email
            authorization-grant-type: authorization_code
            redirect-uri: "{baseUrl}/login/oauth2/code/keycloak"
        provider:
          keycloak:
            issuer-uri: http://localhost:8080/realms/my-company
            user-name-attribute: preferred_username</code></pre>

<p><strong>Keycloak client settings cho Spring Boot OAuth2 Client:</strong></p>
<pre><code>Client ID: my-backend-app
Client authentication: ON (confidential)
Valid redirect URIs: http://localhost:8081/login/oauth2/code/keycloak
Backchannel logout URL: http://localhost:8081/logout/connect/back-channel/keycloak
Web origins: http://localhost:8081</code></pre>

<h2 id="8-advanced-client-settings"><strong>8. Advanced Client Settings</strong></h2>

<h3 id="advanced-tab"><strong>8.1 Tab Advanced</strong></h3>
<p>Các cấu hình nâng cao trong tab <strong>Advanced</strong> của client:</p>

<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Giá trị khuyến nghị</th></tr>
</thead>
<tbody>
<tr><td>Access Token Lifespan</td><td>Override realm-level token lifespan cho client này</td><td>Để trống = dùng realm level</td></tr>
<tr><td>Client Session Idle</td><td>Override client session idle timeout</td><td>Để trống = dùng realm level</td></tr>
<tr><td>Client Session Max</td><td>Override client session max lifespan</td><td>Để trống = dùng realm level</td></tr>
<tr><td>Client Offline Session Idle</td><td>Override offline session idle timeout</td><td>Để trống = dùng realm level</td></tr>
<tr><td>Client Offline Session Max</td><td>Override offline session max lifespan</td><td>Để trống = dùng realm level</td></tr>
<tr><td>PKCE Code Challenge Method</td><td>Bắt buộc PKCE method</td><td>S256</td></tr>
<tr><td>Pushed Authorization Request Required</td><td>Bắt buộc PAR (RFC 9126)</td><td>ON cho high-security apps</td></tr>
<tr><td>ACR to LoA Mapping</td><td>Map ACR values → Level of Assurance</td><td>Cấu hình cho step-up auth</td></tr>
</tbody>
</table>

<h3 id="credentials-tab"><strong>8.2 Tab Credentials (Confidential Clients)</strong></h3>
<p>Quản lý client credentials:</p>
<ul>
<li><p><strong>Client Authenticator</strong>: Client ID and Secret (mặc định), Signed JWT (client_secret_jwt), Signed JWT with Private Key (private_key_jwt), X.509 Certificate</p></li>
<li><p><strong>Client Secret</strong>: Regenerate nếu bị compromised</p></li>
<li><p><strong>Registration access token</strong>: Dùng cho Dynamic Client Registration</p></li>
</ul>

<h3 id="service-account-tab"><strong>8.3 Tab Service Account Roles</strong></h3>
<p>Gán roles cho service account (Client Credentials flow):</p>
<ol>
<li><p>Mở client → tab <strong>Service account roles</strong></p></li>
<li><p>Click <strong>Assign role</strong></p></li>
<li><p>Chọn realm roles hoặc client roles cần gán</p></li>
</ol>

<pre><code># Ví dụ gán role bằng Admin CLI
# Lấy service account user ID
SERVICE_ACCOUNT_ID=$(bin/kcadm.sh get clients/$CLIENT_UUID/service-account-user \
  -r my-company --fields id --format csv --noquotes)

# Gán realm role
bin/kcadm.sh add-roles -r my-company \
  --uusername service-account-my-service \
  --rolename admin

# Gán client role
bin/kcadm.sh add-roles -r my-company \
  --uusername service-account-my-service \
  --cclientid target-client \
  --rolename manage-users</code></pre>

<h2 id="9-thuc-hanh"><strong>9. Bài tập thực hành</strong></h2>

<h3 id="lab-1"><strong>Lab 1: Tạo Public Client cho React SPA</strong></h3>
<ol>
<li><p>Tạo client <code>react-spa-lab</code> với <code>Client authentication</code> = OFF</p></li>
<li><p>Cấu hình: Valid redirect URIs = <code>http://localhost:3000/*</code>, Web origins = <code>http://localhost:3000</code></p></li>
<li><p>Bật PKCE: Advanced → PKCE Code Challenge Method = <code>S256</code></p></li>
<li><p>Tạo React app, cài <code>keycloak-js</code>, tích hợp login/logout</p></li>
<li><p>Verify token trong browser DevTools → Application → Network tab</p></li>
</ol>

<h3 id="lab-2"><strong>Lab 2: Tạo Confidential Client cho Spring Boot API</strong></h3>
<ol>
<li><p>Tạo client <code>spring-api-lab</code> với <code>Client authentication</code> = ON</p></li>
<li><p>Bật <code>Service accounts roles</code></p></li>
<li><p>Gán role <code>admin</code> cho service account</p></li>
<li><p>Tạo Spring Boot project với <code>spring-boot-starter-oauth2-resource-server</code></p></li>
<li><p>Implement endpoint <code>/api/me</code> trả về thông tin user từ JWT</p></li>
<li><p>Test với <code>curl</code> gửi Bearer token</p></li>
</ol>

<h3 id="lab-3"><strong>Lab 3: Client Credentials Flow</strong></h3>
<ol>
<li><p>Tạo client <code>batch-worker</code> chỉ có Client Credentials flow</p></li>
<li><p>Lấy token qua <code>curl</code></p></li>
<li><p>Gọi API endpoint với token vừa lấy</p></li>
<li><p>Kiểm tra token contents qua <a href="https://jwt.io">jwt.io</a> (chỉ dùng cho development)</p></li>
</ol>

<h3 id="lab-4"><strong>Lab 4: Device Authorization Flow</strong></h3>
<ol>
<li><p>Tạo public client <code>cli-tool</code> với Device Authorization Grant enabled</p></li>
<li><p>Sử dụng <code>curl</code> để simulate device flow:</p>
<ul>
<li>Request device code</li>
<li>Mở verification URI trên browser, nhập user code</li>
<li>Poll cho token</li>
</ul>
</li>
<li><p>Verify token nhận được</p></li>
</ol>

<pre><code># Script test Device Authorization Flow
#!/bin/bash
REALM=my-company
CLIENT_ID=cli-tool
KC_URL=http://localhost:8080

# Bước 1: Request device code
RESPONSE=$(curl -s -X POST \
  "$KC_URL/realms/$REALM/protocol/openid-connect/auth/device" \
  -d "client_id=$CLIENT_ID")

DEVICE_CODE=$(echo $RESPONSE | jq -r '.device_code')
USER_CODE=$(echo $RESPONSE | jq -r '.user_code')
VERIFY_URI=$(echo $RESPONSE | jq -r '.verification_uri_complete')
INTERVAL=$(echo $RESPONSE | jq -r '.interval')

echo "========================================"
echo "Mở URL sau trên browser:"
echo "$VERIFY_URI"
echo "Hoặc truy cập: $(echo $RESPONSE | jq -r '.verification_uri')"
echo "Nhập code: $USER_CODE"
echo "========================================"

# Bước 2: Polling for token
while true; do
  sleep $INTERVAL
  TOKEN_RESPONSE=$(curl -s -X POST \
    "$KC_URL/realms/$REALM/protocol/openid-connect/token" \
    -d "grant_type=urn:ietf:params:oauth:grant-type:device_code" \
    -d "client_id=$CLIENT_ID" \
    -d "device_code=$DEVICE_CODE")

  ERROR=$(echo $TOKEN_RESPONSE | jq -r '.error // empty')
  if [ -z "$ERROR" ]; then
    echo "Xác thực thành công!"
    echo "Access Token: $(echo $TOKEN_RESPONSE | jq -r '.access_token' | head -c 50)..."
    break
  elif [ "$ERROR" = "authorization_pending" ]; then
    echo "Đang chờ user xác thực..."
  elif [ "$ERROR" = "slow_down" ]; then
    INTERVAL=$((INTERVAL + 5))
    echo "Slow down, tăng interval lên ${INTERVAL}s"
  else
    echo "Error: $ERROR"
    break
  fi
done</code></pre>
