---
id: 019d8b30-b106-7001-c001-e0c5f8100106
title: 'Lesson 6: OpenID Connect Clients - Configuration from A to Z'
slug: bai-6-openid-connect-clients-cau-hinh-tu-a-den-z
description: Learn in detail about OIDC client types (public, confidential, bearer-only), create and configure clients via Admin Console, OIDC auth flows (Authorization Code, Implicit, Client Credentials, Device Authorization, CIBA), set up PKCE, CIBA policy and practical integration with React and Spring Boot.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 2: SSO Protocols - OpenID Connect and SAML'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak from Basic to Advanced
  slug: keycloak-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8643" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8643)"/>

  <!-- Decorations -->
  <g>
    <circle cx="968" cy="254" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="836" cy="242" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="704" cy="230" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1072" cy="218" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="940" cy="206" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="114" x2="1100" y2="194" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="144" x2="1050" y2="214" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1039.1147367097487,199.5 1039.1147367097487,228.5 1014,243 988.8852632902513,228.5 988.8852632902513,199.5 1014,185" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 6: OpenID Connect Clients - Configuration</tspan>
<tspan x="60" dy="42">from A to Z</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: SSO Protocols - OpenID Connect and SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tong-quan-openid-connect"><strong>1. Overview of OpenID Connect in Keycloak</strong></h2>

<p>OpenID Connect (OIDC) is an authentication protocol built on the OAuth 2.0 platform. Keycloak fully supports the OIDC specification and expands many features for enterprises. In this article, we will dive into creating, configuring, and integrating OIDC clients.</p>

<h3 id="oidc-endpoints"><strong>OIDC Endpoints trong Keycloak</strong></h3>
<p>Keycloak provides OIDC standard endpoints. You can get all endpoint information via <strong>Well-Known Configuration</strong>:</p>

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
<p>Client has the ability to secure client secrets — usually server-side applications.</p>
<ul>
<li><p><strong>Features</strong>: Has client secret or private key, authentication when calling token endpoint</p></li>
<li><p><strong>Use cases</strong>: Server-side web apps (Spring Boot, Django, .NET), Backend APIs, Service-to-service communication</p></li>
<li><p><strong>Auth flow</strong>: Authorization Code, Client Credentials, or both</p></li>
<li><p><strong>Configuration</strong>: <code>Client authentication</code> = ON</p></li>
</ul>

<pre><code>// Ví dụ: Spring Boot backend app — dùng Confidential Client
Client ID: my-backend-api
Client authentication: ON
Client secret: auto-generated hoặc custom
Valid redirect URIs: http://localhost:8081/login/oauth2/code/keycloak</code></pre>

<h3 id="bearer-only-client"><strong>2.3 Bearer-only Client (Legacy)</strong></h3>
<p>Client only receives and validates bearer tokens — does not initiate login flow.</p>
<ul>
<li><p><strong>Features</strong>: No redirect URI, only validate incoming tokens</p></li>
<li><p><strong>Use cases</strong>: Pure API services, Microservices only accept authenticated requests</p></li>
<li><p><strong>Note</strong>: In Keycloak 25+, bearer-only has been <strong>deprecated</strong>. Instead, create a confidential client and only enable <code>Service accounts roles</code></p></li>
</ul>

<table>
<thead>
<tr><th>Characteristic</th><th>Public</th><th>Confidential</th><th>Bearer-only (deprecated)</th></tr>
</thead>
<tbody>
<tr><td>Client authentication</td><td>OFF</td><td>ON</td><td>N/A</td></tr>
<tr><td>Client secret</td><td>No</td><td>Yes</td><td>No</td></tr>
<tr><td>Can initialize login</td><td>Yes</td><td>Yes</td><td>No</td></tr>
<tr><td>Redirect URI</td><td>Required</td><td>Required</td><td>None</td></tr>
<tr><td>PKCE</td><td>Required</td><td>Optional</td><td>N/A</td></tr>
<tr><td>Use main case</td><td>SPA, Mobile</td><td>Server app</td><td>Pure API</td></tr>
</tbody>
</table>

<h2 id="3-tao-oidc-client"><strong>3. Create OIDC Client via Admin Console</strong></h2>

<h3 id="buoc-tao-client"><strong>3.1 Steps to create Client</strong></h3>
<ol>
<li><p>Access <strong>Admin Console</strong> → select realm → <strong>Clients</strong> → <strong>Create client</strong></p></li>
<li><p><strong>General Settings</strong>:</p>
<ul>
<li><strong>Client type</strong>: OpenID Connect</li>
<li><strong>Client ID</strong>: <code>my-app</code> (unique identifier)</li>
<li><strong>Name</strong>: My Application (display name)</li>
<li><strong>Description</strong>: Client description</li>
<li><strong>Always display in UI</strong>: OFF</li>
</ul>
</li>
<li><p><strong>Capability config</strong>:</p>
<ul>
<li><strong>Client authentication</strong>: ON (confidential) or OFF (public)</li>
<li><strong>Authorization</strong>: ON if fine-grained authorization</li> is needed
<li><strong>Authentication flow</strong>: select appropriate flows</li>
</ul>
</li>
<li><p><strong>Login settings</strong>:</p>
<ul>
<li>Root URL, Home URL, Valid redirect URIs, Valid post logout redirect URIs, Web origins</li>
</ul>
</li>
</ol>

<h3 id="tao-client-bang-admin-cli"><strong>3.2 Create Client using Admin CLI</strong></h3>
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

<h3 id="tao-client-bang-rest-api"><strong>3.3 Create Client using Admin REST API</strong></h3>
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

<h2 id="4-client-settings-chi-tiet"><strong>4. Client Settings details</strong></h2>

<h3 id="general-settings"><strong>4.1 General Settings</strong></h3>
<table>
<thead>
<tr><th>Setting</th><th>Description</th><th>Note</th></tr>
</thead>
<tbody>
<tr><td>Client ID</td><td>Unique identifier for client</td><td>Cannot be changed after creation</td></tr>
<tr><td>Name</td><td>Display name</td><td>Support localization key: <code>${my-client-name}</code></td></tr>
<tr><td>Description</td><td>Client description</td><td></td></tr>
<tr><td>Always displayed in UI</td><td>Always displayed on Account Console</td><td>Used for internal tools</td></tr>
</tbody>
</table>

<h3 id="access-settings"><strong>4.2 Access Settings</strong></h3>
<table>
<thead>
<tr><th>Setting</th><th>Description</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td>Root URL</td><td>Root URL, prepend to relative URLs</td><td><code>http://localhost:3000</code></td></tr>
<tr><td>Home URL</td><td>Default URL when redirecting to client</td><td><code>/dashboard</code></td></tr>
<tr><td>Valid redirect URIs</td><td>List of valid redirect URIs (wildcard *)</td><td><code>http://localhost:3000/*</code></td></tr>
<tr><td>Valid post logout redirect URIs</td><td>Valid post logout URIs</td><td><code>+</code> (inherit redirect URIs)</td></tr>
<tr><td>Web origins</td><td>CORS allowed origins</td><td><code>+</code> (inherits redirect URIs)</td></tr>
<tr><td>Admin URL</td><td>URL cho backchannel operations</td><td>URL backend (logout, policy enforcement)</td></tr>
</tbody>
</table>

<p><strong>Security note for redirect URIs:</strong></p>
<ul>
<li><p><strong>NEVER</strong> uses the wildcard <code>*</code> as a redirect URI in production — this is a vulnerability <strong>Open Redirect</strong></p></li>
<li><p>Declare <strong>correctly</strong> necessary redirect URIs</p></li>
<li><p>Use HTTPS in production</p></li>
<li><p>Avoid using localhost in production redirect URIs</p></li>
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
<tr><th>Setting</th><th>Description</th><th>When to turn on</th></tr>
</thead>
<tbody>
<tr><td>Client authentication</td><td>ON = confidential, OFF = public</td><td>ON cho server apps</td></tr>
<tr><td>Authorization</td><td>Fine-grained authorization (UMA)</td><td>When resource-based permissions are needed</td></tr>
<tr><td>Standard flow</td><td>Authorization Code Flow</td><td>Most use cases</td></tr>
<tr><td>Direct access grants</td><td>Resource Owner Password Credentials</td><td>Legacy apps (not recommended)</td></tr>
<tr><td>Implicit flow</td><td>Implicit Grant (deprecated)</td><td>Not recommended</td></tr>
<tr><td>Service accounts roles</td><td>Client Credentials Grant</td><td>Machine-to-machine auth</td></tr>
<tr><td>OAuth 2.0 Device Authorization Grant</td><td>Device Code Flow</td><td>Smart TV, CLI tools</td></tr>
<tr><td>OIDC CIBA Grant</td><td>Client-Initiated Backchannel Auth</td><td>Banking, telecom</td></tr>
</tbody>
</table>

<h3 id="login-settings"><strong>4.4 Login Settings</strong></h3>
<table>
<thead>
<tr><th>Setting</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>Login theme</td><td>Theme for this client's login page</td></tr>
<tr><td>Consent required</td><td>Show consent screen to user</td></tr>
<tr><td>Display client on screen</td><td>Display client name on consent screen</td></tr>
<tr><td>Client consent screen text</td><td>Custom text for consent</td></tr>
</tbody>
</table>

<h3 id="logout-settings"><strong>4.5 Logout Settings</strong></h3>
<table>
<thead>
<tr><th>Setting</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>Front channel logout</td><td>Logout qua browser redirect (OpenID Connect Front-Channel Logout)</td></tr>
<tr><td>Backchannel logout URL</td><td>URL receives backchannel logout requests from Keycloak</td></tr>
<tr><td>Backchannel logout session required</td><td>Include session ID in logout token</td></tr>
<tr><td>Backchannel logout revoke offline sessions</td><td>Revoke offline sessions when logout</td></tr>
</tbody>
</table>

<pre><code># Ví dụ Backchannel Logout URL cho Spring Boot
Backchannel logout URL: http://localhost:8081/logout/connect/back-channel/keycloak

# Ví dụ Front Channel Logout URL
Front channel logout URL: http://localhost:3000/logout-callback</code></pre>

<h2 id="5-oidc-auth-flows"><strong>5. OIDC Authentication Flows details</strong></h2>

<h3 id="authorization-code-flow"><strong>5.1 Authorization Code Flow</strong></h3>
<p>This is the flow most recommended by <strong></strong> for most use cases. The user is redirected to the Keycloak login page. After successful authentication, Keycloak returns an authorization code, the client exchanges the code for tokens.</p>

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
<p>PKCE (Proof Key for Code Exchange, RFC 7636) protects Authorization Code Flow from authorization code interception attack. <strong>Required for Public Clients</strong> and <strong>recommended for all clients</strong>.</p>

<p><strong>How it works:</strong></p>
<ol>
<li><p>Client creates <code>code_verifier</code> (random string 43-128 characters)</p></li>
<li><p>Client calculates <code>code_challenge</code> = Base64URL(SHA256(<code>code_verifier</code>))</p></li>
<li><p>Send <code>code_challenge</code> in authorization request</p></li>
<li><p>Send <code>code_verifier</code> in token request — Keycloak verify by hashing and comparing</p></li>
</ol>

<p><strong>PKCE configuration in Keycloak:</strong></p>
<p>Go to client → tab <strong>Advanced</strong> → <strong>Advanced Settings</strong>:</p>
<table>
<thead>
<tr><th>Setting</th><th>Value</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>Proof Key for Code Exchange Code Challenge Method</td><td>S256</td><td>Mandatory PKCE with SHA-256 (recommended)</td></tr>
<tr><td></td><td>plain</td><td>PKCE with plain text (not secure)</td></tr>
<tr><td></td><td>(empty)</td><td>Optional PKCE</td></tr>
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
<p><strong> SHOULD NOT be used.</strong> OAuth 2.0 Security Best Current Practice (RFC 9700) recommends not using Implicit Flow because tokens are returned via URL fragments, easily stolen via browser history or referrer header.</p>

<p><strong>Replace:</strong> Use Authorization Code Flow + PKCE for all clients, including SPAs.</p>

<p>If forced to support legacy systems:</p>
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
<p>For <strong>machine-to-machine authentication</strong> — no user interaction. The client authenticates itself with its own credentials.</p>

<p><strong>Use cases:</strong></p>
<ul>
<li><p>Microservice calls microservice</p></li>
<li><p>Backend batch jobs</p></li>
<li><p>Scheduled tasks needs API access</p></li>
<li><p>CI/CD pipelines</p></li>
</ul>

<p><strong>Configuration:</strong></p>
<ol>
<li><p>Create <strong>Confidential Client</strong> (<code>Client authentication</code> = ON)</p></li>
<li><p>Enable <strong>Service accounts roles</strong> in Capability Config</p></li>
<li><p>Assign roles to service account: Client → <strong>Service account roles</strong> tab</p></li>
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
<p>For devices with limited input — Smart TV, IoT devices, CLI tools. User authenticates on another device (phone, laptop) with code.</p>

<p><strong>Configuration:</strong></p>
<ol>
<li><p>Client → Capability Config → enable <strong>OAuth 2.0 Device Authorization Grant</strong></p></li>
<li><p>Realm Settings → configure <strong>OAuth Device Code</strong> lifespan (default 600 seconds)</p></li>
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
<p>CIBA allows the client to initiate authentication without <strong>redirecting the user via browser</strong>. Instead, Keycloak sends authentication requests to users via other channels (push notification, SMS, email).</p>

<p><strong>Use cases:</strong></p>
<ul>
<li><p><strong>Banking</strong>: Point-of-sale authenticates payment via mobile app</p></li>
<li><p><strong>Telecom</strong>: SIM-based authentication</p></li>
<li><p><strong>Call centers</strong>: Agent to authenticate customer via phone</p></li>
</ul>

<p><strong>CIBA configuration:</strong></p>
<ol>
<li><p>Client → Capability Config → enable <strong>OIDC CIBA Grant</strong></p></li>
<li><p>Realm Settings → Authentication → tab <strong>CIBA Policy</strong>:</p></li>
</ol>

<table>
<thead>
<tr><th>Setting</th><th>Description</th><th>Default value</th></tr>
</thead>
<tbody>
<tr><td>Backchannel Token Delivery Mode</td><td>poll, ping, or push</td><td>poll</td></tr>
<tr><td>Expires In</td><td>Authentication request expiration time</td><td>120 seconds</td></tr>
<tr><td>Interval</td><td>Interval between polling requests</td><td>5 seconds</td></tr>
<tr><td>Authentication Requested User Hint</td><td>User hint type: login_hint, login_hint_token, id_token_hint</td><td>login_hint</td></tr>
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
<p>Default Keycloak uses <code>CIBALoginUserResolver</code> internally. To send actual push notifications, you need to implement SPI custom:</p>
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

<h2 id="6-tich-hop-react"><strong>6. Integrating OIDC Client with React (SPA)</strong></h2>

<h3 id="keycloak-js-adapter"><strong>6.1 Using keycloak-js adapter</strong></h3>
<p>Keycloak provides an official JavaScript adapter for SPAs:</p>

<pre><code># Cài đặt
npm install keycloak-js</code></pre>

<p><strong>Configure Keycloak client for React:</strong></p>
<pre><code>Client ID: my-react-app
Client authentication: OFF (public client)
Valid redirect URIs: http://localhost:3000/*
Valid post logout redirect URIs: http://localhost:3000/*
Web origins: http://localhost:3000
PKCE Code Challenge Method: S256</code></pre>

<p><strong>Initialize Keycloak in React:</strong></p>
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

<h3 id="react-oidc-context"><strong>6.2 Use react-oidc-context (replaces keycloak-js)</strong></h3>
<p>Another option is to use the <code>react-oidc-context</code> library based on <code>oidc-client-ts</code> — which does not depend on the Keycloak-specific adapter:</p>

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

<h2 id="7-tich-hop-spring-boot"><strong>7. Integrating OIDC Client with Spring Boot</strong></h2>

<h3 id="spring-boot-oauth2-resource-server"><strong>7.1 Spring Boot OAuth2 Resource Server</strong></h3>
<p>Configure Spring Boot as <strong>Resource Server</strong> — validate JWT tokens from Keycloak:</p>

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
<p>Configure Spring Boot as <strong>OAuth2 Client</strong> — server-side login flow:</p>

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
<p>Advanced configurations in the client's <strong>Advanced</strong> tab:</p>

<table>
<thead>
<tr><th>Setting</th><th>Description</th><th>Recommended value</th></tr>
</thead>
<tbody>
<tr><td>Access Token Lifespan</td><td>Override realm-level token lifespan for this client</td><td>Leave blank = use realm level</td></tr>
<tr><td>Client Session Idle</td><td>Override client session idle timeout</td><td>Leave blank = use realm level</td></tr>
<tr><td>Client Session Max</td><td>Override client session max lifespan</td><td>Leave blank = use realm level</td></tr>
<tr><td>Client Offline Session Idle</td><td>Override offline session idle timeout</td><td>Leave blank = use realm level</td></tr>
<tr><td>Client Offline Session Max</td><td>Override offline session max lifespan</td><td>Leave blank = use realm level</td></tr>
<tr><td>PKCE Code Challenge Method</td><td>Required PKCE method</td><td>S256</td></tr>
<tr><td>Pushed Authorization Request Required</td><td>Required PAR (RFC 9126)</td><td>ON for high-security apps</td></tr>
<tr><td>ACR to LoA Mapping</td><td>Map ACR values ​​→ Level of Assurance</td><td>Configuration for step-up auth</td></tr>
</tbody>
</table>

<h3 id="credentials-tab"><strong>8.2 Tab Credentials (Confidential Clients)</strong></h3>
<p>Manage client credentials:</p>
<ul>
<li><p><strong>Client Authenticator</strong>: Client ID and Secret (default), Signed JWT (client_secret_jwt), Signed JWT with Private Key (private_key_jwt), X.509 Certificate</p></li>
<li><p><strong>Client Secret</strong>: Regenerate if compromised</p></li>
<li><p><strong>Registration access token</strong>: Used for Dynamic Client Registration</p></li>
</ul>

<h3 id="service-account-tab"><strong>8.3 Tab Service Account Roles</strong></h3>
<p>Assign roles to service account (Client Credentials flow):</p>
<ol>
<li><p>Open client → tab <strong>Service account roles</strong></p></li>
<li><p>Click <strong>Assign role</strong></p></li>
<li><p>Select realm roles or client roles to assign</p></li>
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

<h2 id="9-thuc-hanh"><strong>9. Practice exercises</strong></h2>

<h3 id="lab-1"><strong>Lab 1: Creating Public Client for React SPA</strong></h3>
<ol>
<li><p>Create client <code>react-spa-lab</code> with <code>Client authentication</code> = OFF</p></li>
<li><p>Configuration: Valid redirect URIs = <code>http://localhost:3000/*</code>, Web origins = <code>http://localhost:3000</code></p></li>
<li><p>Enable PKCE: Advanced → PKCE Code Challenge Method = <code>S256</code></p></li>
<li><p>Create React app, install <code>keycloak-js</code>, integrate login/logout</p></li>
<li><p>Verify token trong browser DevTools → Application → Network tab</p></li>
</ol>

<h3 id="lab-2"><strong>Lab 2: Creating Confidential Client for Spring Boot API</strong></h3>
<ol>
<li><p>Create client <code>spring-api-lab</code> with <code>Client authentication</code> = ON</p></li>
<li><p>Enable <code>Service accounts roles</code></p></li>
<li><p>Assign role <code>admin</code> to service account</p></li>
<li><p>Create Spring Boot project with <code>spring-boot-starter-oauth2-resource-server</code></p></li>
<li><p>Implement endpoint <code>/api/me</code> returns user information from JWT</p></li>
<li><p>Test with <code>curl</code> send Bearer token</p></li>
</ol>

<h3 id="lab-3"><strong>Lab 3: Client Credentials Flow</strong></h3>
<ol>
<li><p>Create client <code>batch-worker</code> only Client Credentials flow</p></li>
<li><p>Get tokens via <code>curl</code></p></li>
<li><p>Call API endpoint with newly retrieved token</p></li>
<li><p>Check token contents via <a href="__P0__">jwt.io</a> (for development only)</p></li>
</ol>

<h3 id="lab-4"><strong>Lab 4: Device Authorization Flow</strong></h3>
<ol>
<li><p>Create public client <code>cli-tool</code> with Device Authorization Grant enabled</p></li>
<li><p>Use <code>curl</code> to simulate device flow:</p>
<ul>
<li>Request device code</li>
<li>Open verification URI on browser, enter user code</li>
<li>Poll cho token</li>
</ul>
</li>
<li><p>Verify token received</p></li>
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
