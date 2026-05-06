---
id: 019d8b30-b109-7001-c001-e0c5f8100109
title: 'Lesson 9: Client Policies and Advanced Client Configuration'
slug: bai-9-client-policies-va-advanced-client-configuration
description: Client Policies architecture (Profiles, Conditions, Executors), FAPI 2.0 Security Profile, Client Secret Rotation, Service Accounts, Audience Support, Confidential Client Credentials (Client ID/Secret, Signed JWT, X.509), Standard Token Exchange, JWT Authorization Grant (RFC 7523), and configuration for MCP Servers.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 'Part 2: SSO Protocols - OpenID Connect and SAML'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak from Basic to Advanced
  slug: keycloak-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-99" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-99)"/>

  <!-- Decorations -->
  <g>
    <circle cx="849" cy="37" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1098" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="847" cy="215" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="1096" cy="44" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="845" cy="133" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="227" x2="1100" y2="307" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="257" x2="1050" y2="327" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="963.3730669589464,106 963.3730669589464,148 927,169 890.6269330410536,148 890.6269330410536,106.00000000000001 927,85" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Lesson 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 9: Client Policies and Advanced Client</tspan>
      <tspan x="60" dy="42">Configuration</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: SSO Protocols - OpenID Connect and SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-client-policies"><strong>1. Client Policies</strong></h2>

<p>Client Policies is a framework that allows <strong>enforce security requirements</strong> on clients automatically. Instead of having to manually check each client's configuration, you define policies so that Keycloak automatically validates and enforces.</p>

<h3 id="tai-sao-can-client-policies"><strong>1.1 Why do we need Client Policies?</strong></h3>
<ul>
<li><p><strong>Consistency</strong>: Ensures all clients comply with the same security standards</p></li>
<li><p><strong>Automation</strong>: Automatically reject non-compliant requests</p></li>
<li><p><strong>Compliance</strong>: Enforce industry standards (FAPI, PSD2, Open Banking)</p></li>
<li><p><strong>Governance</strong>: Control client registration and configuration</p></li>
</ul>

<h3 id="architecture"><strong>1.2 Architecture: Profiles, Conditions, Executors</strong></h3>
<p>Client Policies includes 3 main components:</p>

<pre><code>┌─────────────────────────────────────────────────┐
│                  Client Policy                   │
│                                                   │
│  ┌──────────────┐     ┌──────────────────────┐   │
│  │  Conditions   │     │      Profiles        │   │
│  │ (Khi nào?)    │────>│   (Áp dụng gì?)      │   │
│  │               │     │                      │   │
│  │ • Client Role │     │  ┌────────────────┐  │   │
│  │ • Client Scope│     │  │   Executors    │  │   │
│  │ • Any Client  │     │  │ (Làm gì?)      │  │   │
│  │ • Client      │     │  │                │  │   │
│  │   Access Type │     │  │ • PKCE Enforcer│  │   │
│  │ • Client      │     │  │ • Secure Alg   │  │   │
│  │   Update      │     │  │ • DPoP Verify  │  │   │
│  │   Source      │     │  │ • ...          │  │   │
│  └──────────────┘     │  └────────────────┘  │   │
│                        └──────────────────────┘   │
└─────────────────────────────────────────────────┘</code></pre>

<table>
<thead>
<tr><th>Element</th><th>Description</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td><strong>Profile</strong></td><td>Set of Executors — defines "enforce what"</td><td><code>fapi-2-security-profile</code></td></tr>
<tr><td><strong>Condition</strong></td><td>Condition determines which clients are affected — "enforce for whom"</td><td>Clients with role <code>fapi-client</code></td></tr>
<tr><td><strong>Executor</strong></td><td>Specific enforcement logic — "how to enforce"</td><td>Mandatory PKCE S256</td></tr>
</tbody>
</table>

<h3 id="tao-client-profile"><strong>1.3 Create Client Profile</strong></h3>
<ol>
<li><p>Go to <strong>Realm Settings</strong> → <strong>Client Policies</strong> → tab <strong>Profiles</strong></p></li>
<li><p>Click <strong>Create client profile</strong></p></li>
<li><p>Enter <strong>Name</strong> and <strong>Description</strong></p></li>
<li><p>Click <strong>Save</strong> → open profile → click <strong>Add executor</strong></p></li>
</ol>

<h3 id="executors"><strong>1.4 Available Executors</strong></h3>

<table>
<thead>
<tr><th>Executor</th><th>Description</th><th>Parameter</th></tr>
</thead>
<tbody>
<tr><td><strong>Secure Client Authenticator</strong></td><td>Requires specific authentication method</td><td>Allowed authenticators: client-secret, client-jwt, client-x509</td></tr>
<tr><td><strong>PKCE Enforcer</strong></td><td>Required PKCE</td><td>Augment: ON (added automatically if client lacks)</td></tr>
<tr><td><strong>Secure Signing Algorithm</strong></td><td>Only allow secure algorithms</td><td>Default: RS256, ES256, PS256</td></tr>
<tr><td><strong>Secure Signing Algorithm for Signed JWT</strong></td><td>Algorithm for client JWT auth</td><td>PS256, ES256 (RS256 not allowed)</td></tr>
<tr><td><strong>Holder-of-Key Enforcer</strong></td><td>Required token binding (mTLS or DPoP)</td><td>Auto-configure: ON</td></tr>
<tr><td><strong>DPoP Proof Verifier</strong></td><td>Required DPoP proof in token requests</td><td></td></tr>
<tr><td><strong>Confidential Client Enforcer</strong></td><td>Only allow confidential clients</td><td></td></tr>
<tr><td><strong>Consent Required</strong></td><td>Consent screen required</td><td></td></tr>
<tr><td><strong>Full Scope Disabled</strong></td><td>Disable full scope mapping</td><td></td></tr>
<tr><td><strong>Reject Implicit Grant</strong></td><td>Do not allow implicit flow</td><td></td></tr>
<tr><td><strong>Reject Resource Owner Password Credentials Grant</strong></td><td>Disallow ROPC</td><td></td></tr>
<tr><td><strong>Secure Redirect URIs Enforcer</strong></td><td>Validate redirect URIs</td><td>Require HTTPS, no wildcard</td></tr>
<tr><td><strong>Secure Request Object</strong></td><td>Required JAR (JWT-Secured Authorization Request)</td><td></td></tr>
<tr><td><strong>Secure Response Type</strong></td><td>Only secure response types allowed</td><td>Allowed: code (no token, id_token)</td></tr>
<tr><td><strong>Secure Session Enforcer</strong></td><td>Enforce session settings</td><td></td></tr>
</tbody>
</table>

<h3 id="tao-condition"><strong>1.5 Conditions available</strong></h3>

<table>
<thead>
<tr><th>Condition</th><th>Description</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td><strong>Any Client</strong></td><td>Applies to all clients</td><td>Global security policy</td></tr>
<tr><td><strong>Client Access Type</strong></td><td>Based on client type (public/confidential)</td><td>Enforce PKCE for all public clients</td></tr>
<tr><td><strong>Client Roles</strong></td><td>Clients with specific roles</td><td>Clients with roles <code>fapi-compliant</code></td></tr>
<tr><td><strong>Client Scopes</strong></td><td>Client uses specific scope</td><td>Clients request scope <code>payment</code></td></tr>
<tr><td><strong>Client Update Source Groups</strong></td><td>Based on source create/update client</td><td>Clients created via Dynamic Registration</td></tr>
<tr><td><strong>Client Update Context</strong></td><td>Context when client is updated</td><td>Authorization request, Token request</td></tr>
</tbody>
</table>

<h3 id="tao-policy"><strong>1.6 Create Client Policy</strong></h3>
<ol>
<li><p>Go to <strong>Realm Settings</strong> → <strong>Client Policies</strong> → tab <strong>Policies</strong></p></li>
<li><p>Click <strong>Create client policy</strong></p></li>
<li><p>Enter <strong>Name</strong> and <strong>Description</strong></p></li>
<li><p>Add <strong>Conditions</strong> (identify which clients are affected)</p></li>
<li><p>Add <strong>Client Profiles</strong> (which profile applies)</p></li>
</ol>

<pre><code># Ví dụ: Tạo policy enforce PKCE cho tất cả public clients
Profile: pkce-required-profile
  Executors:
    - PKCE Enforcer
        Augment: ON (auto-add PKCE nếu client không gửi)

Policy: enforce-pkce-for-public
  Conditions:
    - Client Access Type: public
  Profiles:
    - pkce-required-profile</code></pre>

<h3 id="vi-du-policy-thuc-te"><strong>1.7 Practical Policy Example</strong></h3>

<p><strong>Policy 1: Baseline Security for all clients</strong></p>
<pre><code>Profile: baseline-security
  Executors:
    - Reject Implicit Grant
    - Reject Resource Owner Password Credentials Grant
    - PKCE Enforcer (S256)
    - Secure Signing Algorithm (RS256, ES256, PS256)

Policy: baseline-all-clients
  Conditions:
    - Any Client
  Profiles:
    - baseline-security</code></pre>

<p><strong>Policy 2: High-Security cho Financial APIs</strong></p>
<pre><code>Profile: financial-api-profile
  Executors:
    - Confidential Client Enforcer
    - Holder-of-Key Enforcer (mTLS hoặc DPoP)
    - Secure Client Authenticator (private_key_jwt, client-x509)
    - Secure Request Object Required
    - Consent Required
    - Secure Redirect URIs Enforcer (HTTPS only)

Policy: financial-api-policy
  Conditions:
    - Client Scopes: fapi-scope
  Profiles:
    - financial-api-profile</code></pre>

<h2 id="2-fapi-security-profile"><strong>2. FAPI 2.0 Security Profile</strong></h2>

<p>FAPI (Financial-grade API) is a set of high security standards developed by the OpenID Foundation, widely used in <strong>Open Banking</strong>, <strong>Payment Services Directive 2 (PSD2)</strong>, and financial applications.</p>

<h3 id="fapi-2-baseline"><strong>2.1 FAPI 2.0 Baseline Profile</strong></h3>
<p>Keycloak provides built-in profiles for FAPI 2.0:</p>

<table>
<thead>
<tr><th>Request</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>Authorization Code Flow only</td><td>Implicit not allowed, ROPC</td></tr>
<tr><td>PKCE (S256)</td><td>Required for all clients</td></tr>
<tr><td>Confidential Client</td><td>Required client authentication</td></tr>
<tr><td>Secure Signing Algorithms</td><td>PS256, ES256 (no RS256)</td></tr>
<tr><td>Sender-constrained tokens</td><td>DPoP or mTLS token binding</td></tr>
<tr><td>Redirect URI exact match</td><td>No wildcard</td></tr>
<tr><td>HTTPS required</td><td>For all endpoints</td></tr>
</tbody>
</table>

<h3 id="fapi-2-advanced"><strong>2.2 FAPI 2.0 Advanced Profile (Message Signing)</strong></h3>
<p>In addition to baseline, Advanced Profile adds:</p>
<ul>
<li><p><strong>PAR (Pushed Authorization Requests)</strong> — RFC 9126: send authorization request via backchannel before redirect</p></li>
<li><p><strong>JAR (JWT-Secured Authorization Request)</strong> — RFC 9101: authorization parameters signed in JWT</p></li>
<li><p><strong>JARM (JWT-Secured Authorization Response Mode)</strong>: authorization response signed in JWT</p></li>
</ul>

<pre><code># PAR request — gửi authorization params qua backchannel
POST /realms/my-realm/protocol/openid-connect/ext/par/request
Content-Type: application/x-www-form-urlencoded
Authorization: Basic base64(client_id:client_secret)

response_type=code&
client_id=my-fapi-client&
redirect_uri=https://myapp.com/callback&
scope=openid payments&
state=random-state&
code_challenge=code_challenge_value&
code_challenge_method=S256

# Response
{
  "request_uri": "urn:ietf:params:oauth:request_uri:abc123",
  "expires_in": 60
}

# Authorization request chỉ chứa request_uri
GET /realms/my-realm/protocol/openid-connect/auth?
  client_id=my-fapi-client&
  request_uri=urn:ietf:params:oauth:request_uri:abc123</code></pre>

<h3 id="enable-fapi-2"><strong>2.3 Enable FAPI 2.0 in Keycloak</strong></h3>
<ol>
<li><p>Go to <strong>Realm Settings</strong> → <strong>Client Policies</strong> → tab <strong>Profiles</strong></p></li>
<li><p>Keycloak provides <strong>Global Profiles</strong>:</p>
<ul>
<li><code>fapi-2-security-profile</code></li>
<li><code>fapi-2-message-signing-profile</code></li>
</ul>
</li>
<li><p>Create Policy using corresponding profile</p></li>
<li><p>Assign Condition to select clients needing compliance</p></li>
</ol>

<pre><code># Ví dụ: Enforce FAPI 2.0 cho clients có scope "fapi"
Policy: fapi-2-enforcement
  Conditions:
    - Client Scopes: fapi
  Profiles:
    - fapi-2-security-profile     # Built-in global profile
    - fapi-2-message-signing-profile  # Thêm nếu cần message signing</code></pre>

<h2 id="3-client-secret-rotation"><strong>3. Client Secret Rotation</strong></h2>

<p>Client Secret Rotation allows changing the client secret <strong>does not cause downtime</strong> — the old secret remains active during a transition period.</p>

<h3 id="cau-hinh-secret-rotation"><strong>3.1 Configure Client Secret Rotation</strong></h3>
<p>Use <strong>Client Policy</strong> with executor <strong>Secret Rotation</strong>:</p>

<pre><code># Tạo Profile với Secret Rotation executor
Profile: secret-rotation-profile
  Executors:
    - Secret Rotation
        Secret Expiration: 2592000        # 30 ngày (tính bằng giây)
        Rotated Secret Expiration: 604800  # Grace period: 7 ngày
        Remain Expiration: 604800          # Thời gian cảnh báo trước khi hết hạn</code></pre>

<p><strong>How it works:</strong></p>
<pre><code>Timeline:
┌──────────────────────────────────────────────────────────┐
│ Ngày 0         Ngày 23        Ngày 30          Ngày 37  │
│   │               │              │                │     │
│   ▼               ▼              ▼                ▼     │
│ Secret A      Cảnh báo      Secret B           Secret A │
│ created       sắp hết hạn   created + active   hết hạn  │
│                              Secret A vẫn       hoàn toàn│
│                              hoạt động                   │
│                              (grace period)              │
└──────────────────────────────────────────────────────────┘

Khoảng grace period (Ngày 30-37):
- Secret B: active (primary)
- Secret A: vẫn valid (rotated secret, grace)
→ Ứng dụng có 7 ngày để chuyển sang Secret B</code></pre>

<h3 id="trien-khai-secret-rotation"><strong>3.2 Deploy Secret Rotation</strong></h3>
<pre><code># 1. Lấy current secret
CURRENT_SECRET=$(curl -s -X GET \
  "$KC_URL/admin/realms/my-realm/clients/$CLIENT_UUID/client-secret" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq -r '.value')

# 2. Rotate secret — regenerate new secret
curl -s -X POST \
  "$KC_URL/admin/realms/my-realm/clients/$CLIENT_UUID/client-secret" \
  -H "Authorization: Bearer $ADMIN_TOKEN"

# 3. Lấy new secret
NEW_SECRET=$(curl -s -X GET \
  "$KC_URL/admin/realms/my-realm/clients/$CLIENT_UUID/client-secret" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq -r '.value')

# 4. Update ứng dụng với new secret
# Trong grace period, cả current và new secret đều hoạt động</code></pre>

<h2 id="4-service-accounts"><strong>4. Service Accounts</strong></h2>

<p>When <strong>Service accounts roles</strong> is enabled for a confidential client, Keycloak creates a special <strong>service account user</strong> for that client. This user represents the client in machine-to-machine operations.</p>

<h3 id="service-account-user"><strong>4.1 Service Account User</strong></h3>
<pre><code># Service account user naming convention
Username: service-account-{client-id}
# Ví dụ: service-account-my-backend-service

# Service account user có các đặc điểm:
# - Không có password (authenticate bằng client credentials)
# - Có thể gán realm roles và client roles
# - Có thể thêm user attributes
# - Xuất hiện trong Users list (với filter service accounts)</code></pre>

<h3 id="gan-roles"><strong>4.2 Assign Roles to Service Account</strong></h3>
<ol>
<li><p>Open client → tab <strong>Service account roles</strong></p></li>
<li><p>Click <strong>Assign role</strong></p></li>
<li><p>Select realm roles or filter by clients to assign client roles</p></li>
</ol>

<pre><code># Admin CLI: Gán roles
# Gán realm role
bin/kcadm.sh add-roles -r my-realm \
  --uusername service-account-my-backend-service \
  --rolename realm-admin

# Gán client role từ client khác
bin/kcadm.sh add-roles -r my-realm \
  --uusername service-account-my-backend-service \
  --cclientid realm-management \
  --rolename manage-users

# REST API: Gán role
# Lấy service account user
SA_USER=$(curl -s -X GET \
  "$KC_URL/admin/realms/my-realm/clients/$CLIENT_UUID/service-account-user" \
  -H "Authorization: Bearer $ADMIN_TOKEN")

SA_USER_ID=$(echo $SA_USER | jq -r '.id')

# Gán realm role
ROLE_ID=$(curl -s -X GET \
  "$KC_URL/admin/realms/my-realm/roles/admin" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq -r '.id')

curl -s -X POST \
  "$KC_URL/admin/realms/my-realm/users/$SA_USER_ID/role-mappings/realm" \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '[{"id":"'$ROLE_ID'","name":"admin"}]'</code></pre>

<h3 id="service-account-best-practices"><strong>4.3 Best Practices cho Service Accounts</strong></h3>
<ul>
<li><p><strong>Least privilege</strong>: Only assign necessary roles to each service</p></li>
<li><p><strong>Separate clients</strong>: Create separate clients for each microservice, do not share them</p></li>
<li><p><strong>Audit</strong>: Enable events logging to track service account activities</p></li>
<li><p><strong>Short token lifespan</strong>: Access token for service accounts should be short (1-5 minutes)</p></li>
<li><p><strong>Rotate credentials</strong>: Use Client Secret Rotation or certificate-based auth</p></li>
</ul>

<h2 id="5-audience-support"><strong>5. Audience Support</strong></h2>

<p>Audience (<code>aud</code> claim) determines which <strong>resource server</strong> access token is intended to be used. This is an important security mechanism to prevent tokens from being used in unwanted services.</p>

<h3 id="audience-problem"><strong>5.1 Problem</strong></h3>
<pre><code># Mặc định, access token chỉ có aud = client-id đã request
{
  "aud": "my-frontend-app",     // ← chỉ có client đã request
  "azp": "my-frontend-app"
}

# Resource Server (my-api-service) verify token:
# → aud không chứa "my-api-service"
# → REJECT! (nếu resource server validate audience)</code></pre>

<h3 id="audience-mapper"><strong>5.2 Solution: Audience Protocol Mapper</strong></h3>
<p>Add <strong>Audience Mapper</strong> to the client or client scope to add the resource server to <code>aud</code>:</p>

<pre><code># Cách 1: Thêm Audience Mapper trực tiếp vào client
Client: my-frontend-app → Client scopes → Dedicated scope → Add mapper
  Mapper Type: Audience
  Name: api-audience
  Included Client Audience: my-api-service
  Included Custom Audience: (trống)
  Add to ID token: OFF
  Add to access token: ON

# Cách 2: Tạo Client Scope chứa Audience Mapper
Client Scope: api-access
  Mapper: Audience → my-api-service
  Gán scope cho frontend client

# Kết quả trong access token:
{
  "aud": ["my-frontend-app", "my-api-service"],
  "azp": "my-frontend-app"
}</code></pre>

<h3 id="audience-resolve"><strong>5.3 Audience Resolve Mapper</strong></h3>
<p>Keycloak has built-in <strong>Audience Resolve</strong> mapper (in default scope <code>roles</code>) — automatically adds <code>aud</code> for clients that have client roles:</p>

<pre><code># Nếu user có role "app-admin" của client "my-api-service"
# → Audience Resolve tự động thêm "my-api-service" vào aud
{
  "aud": ["my-frontend-app", "my-api-service"],
  "resource_access": {
    "my-api-service": {
      "roles": ["app-admin"]
    }
  }
}</code></pre>

<h2 id="6-confidential-client-credentials"><strong>6. Confidential Client Credentials</strong></h2>

<h3 id="client-id-secret"><strong>6.1 Client ID and Secret</strong></h3>
<p>Simple method — client sends ID and secret in request:</p>

<pre><code># Cách 1: Form parameter
POST /token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
client_id=my-client&
client_secret=my-secret

# Cách 2: HTTP Basic Authentication
POST /token
Content-Type: application/x-www-form-urlencoded
Authorization: Basic base64(client_id:client_secret)

grant_type=client_credentials</code></pre>

<h3 id="signed-jwt"><strong>6.2 Signed JWT (private_key_jwt)</strong></h3>
<p>Client creates and signs JWT with private key, sends to Keycloak. Keycloak verify with registered public key/certificate.</p>

<p><strong>Configuration in Keycloak:</strong></p>
<ol>
<li><p>Client → tab <strong>Credentials</strong> → <strong>Client Authenticator</strong>: <code>Signed JWT</code></p></li>
<li><p>Upload client certificate or JWKS URL</p></li>
</ol>

<pre><code># Tạo key pair cho client
openssl genrsa -out client-private.pem 2048
openssl req -new -x509 -key client-private.pem -out client-cert.pem -days 365

# Upload client-cert.pem vào Keycloak client Credentials tab

# Token request với client_assertion
POST /realms/my-realm/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
client_id=my-client&
client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer&
client_assertion=eyJhbGciOiJSUzI1NiIs...</code></pre>

<p><strong>Client Assertion JWT structure:</strong></p>
<pre><code>{
  "iss": "my-client",                    // Client ID
  "sub": "my-client",                    // Client ID
  "aud": "http://localhost:8080/realms/my-realm",  // Token endpoint
  "iat": 1711800000,
  "exp": 1711800060,                     // Short-lived (60s)
  "jti": "unique-jwt-id"                 // Unique ID
}</code></pre>

<h3 id="x509-mtls"><strong>6.3 X.509 Certificate / Mutual TLS</strong></h3>
<p>Client authenticates with a client TLS certificate (Mutual TLS — mTLS). This is the most secure method.</p>

<p><strong>Configuration:</strong></p>
<ol>
<li><p>Client → tab <strong>Credentials</strong> → <strong>Client Authenticator</strong>: <code>X.509 Certificate</code></p></li>
<li><p>Enter <strong>Subject DN</strong> or pattern for certificate matching</p></li>
<li><p>Configure Keycloak server enable mTLS endpoint</p></li>
</ol>

<pre><code># Keycloak mTLS configuration (quarkus)
# conf/keycloak.conf hoặc environment variables
KC_HTTPS_CLIENT_AUTH=request
KC_HTTPS_KEY_STORE_FILE=/opt/keycloak/certs/server-keystore.p12
KC_HTTPS_TRUST_STORE_FILE=/opt/keycloak/certs/truststore.p12

# Client gọi token endpoint với client certificate
curl -s -X POST \
  "https://localhost:8443/realms/my-realm/protocol/openid-connect/token" \
  --cert client-cert.pem \
  --key client-private.pem \
  -d "grant_type=client_credentials" \
  -d "client_id=my-mtls-client"</code></pre>

<p><strong>Combining mTLS with certificate-bound tokens:</strong></p>
<pre><code># Access token chứa certificate thumbprint
{
  "cnf": {
    "x5t#S256": "sha256-thumbprint-of-client-certificate"
  }
}

# Resource server verify:
# 1. Client gửi request với TLS client certificate
# 2. Resource server extract certificate thumbprint
# 3. So sánh với cnf.x5t#S256 trong access token
# → Nếu match → token hợp lệ + bound to correct client</code></pre>

<h2 id="7-token-exchange"><strong>7. Standard Token Exchange (RFC 8693)</strong></h2>

<p>Token Exchange allows a service <strong>exchange token</strong> to receive new tokens with different permissions or audiences.</p>

<h3 id="token-exchange-use-cases"><strong>7.1 Use Cases</strong></h3>
<ul>
<li><p><strong>Delegation</strong>: Service A wants to call Service B "on behalf of" the user — exchange access token to get a new token with audience = Service B</p></li>
<li><p><strong>Impersonation</strong>: Admin wants to act as another user</p></li>
<li><p><strong>Token type conversion</strong>: Exchange access token for SAML assertion (or vice versa)</p></li>
</ul>

<h3 id="enable-token-exchange"><strong>7.2 Token Exchange Configuration</strong></h3>
<p>Token Exchange in Keycloak is <strong>preview feature</strong> — needs to be enabled:</p>

<pre><code># Bật feature
bin/kc.sh start-dev --features=token-exchange

# Docker
docker run -e KC_FEATURES=token-exchange quay.io/keycloak/keycloak:26.2.4 start-dev</code></pre>

<p><strong>Configure permissions:</strong></p>
<ol>
<li><p>Open <strong>target client</strong> (the client you want to exchange tokens to) → tab <strong>Permissions</strong></p></li>
<li><p>Enable <strong>Permissions Enabled</strong></p></li>
<li><p>Click <strong>token-exchange</strong> permission → configure policy to allow source client exchange</p></li>
</ol>

<pre><code># Token Exchange request
POST /realms/my-realm/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:token-exchange&
subject_token=USER_ACCESS_TOKEN&
subject_token_type=urn:ietf:params:oauth:token-type:access_token&
requested_token_type=urn:ietf:params:oauth:token-type:access_token&
audience=target-service&
client_id=source-service&
client_secret=SOURCE_SECRET

# Response — token mới cho target-service
{
  "access_token": "new-token-for-target-service",
  "token_type": "Bearer",
  "expires_in": 300,
  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token"
}</code></pre>

<h3 id="delegation-vs-impersonation"><strong>7.3 Delegation vs Impersonation</strong></h3>
<table>
<thead>
<tr><th>Mode</th><th>Description</th><th>Token claims</th></tr>
</thead>
<tbody>
<tr><td><strong>Delegation</strong></td><td>Service B knows that Service A is acting on behalf of user</td><td><code>act.sub</code> = Service A, <code>sub</code> = user</td></tr>
<tr><td><strong>Impersonation</strong></td><td>Service B unknown — identical token to direct user request</td><td><code>sub</code> = user (without <code>act</code>)</td></tr>
</tbody>
</table>

<h2 id="8-jwt-authorization-grant"><strong>8. JWT Authorization Grant (RFC 7523)</strong></h2>

<p>Allows clients to use a <strong>JWT assertion issued by trusted issuer</strong> to obtain an access token without user interaction.</p>

<h3 id="jwt-grant-flow"><strong>8.1 Flow</strong></h3>
<pre><code># External issuer (ví dụ: Azure AD, Google) cấp JWT cho client
# Client gửi JWT đến Keycloak để exchange lấy Keycloak access token

POST /realms/my-realm/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&
assertion=eyJhbGciOiJSUzI1NiIs...&  # JWT from external issuer
client_id=my-client&
client_secret=my-secret&
scope=openid</code></pre>

<h3 id="cau-hinh-jwt-grant"><strong>8.2 Configure JWT Grant</strong></h3>
<ol>
<li><p>Realm Settings → <strong>Keys</strong> → add external issuer's signing key</p></li>
<li><p>Or configure <strong>Identity Provider</strong> for external issuer</p></li>
<li><p>Client must have <strong>Service accounts</strong> enabled</p></li>
</ol>

<h2 id="9-cau-hinh-cho-mcp-servers"><strong>9. Configure Keycloak for MCP Servers</strong></h2>

<p>Model Context Protocol (MCP) servers use OAuth 2.0 to authenticate clients. Keycloak can serve as <strong>Authorization Server</strong> for the MCP ecosystem.</p>

<h3 id="mcp-oauth-flow"><strong>9.1 MCP OAuth 2.0 Flow</strong></h3>
<p>MCP specification requires OAuth 2.0 for server-to-server and client-to-server authentication:</p>

<pre><code>┌──────────┐     ┌──────────┐     ┌──────────┐
│ MCP Host │     │ Keycloak │     │MCP Server│
│ (Client) │     │  (AuthZ) │     │(Resource)│
└────┬─────┘     └────┬─────┘     └────┬─────┘
     │                │                │
     │ 1. Request     │                │
     │    auth info    │                │
     │───────────────────────────────>│
     │ 2. Return      │                │
     │    auth metadata│                │
     │<──────────────────────────────│
     │                │                │
     │ 3. Authorization Code Flow     │
     │    (hoặc Client Credentials)   │
     │───────────────>│                │
     │ 4. Tokens      │                │
     │<───────────────│                │
     │                │                │
     │ 5. API call with access token  │
     │───────────────────────────────>│
     │ 6. MCP Server validates token  │
     │    via Keycloak JWKS/Introspect│
     │<──────────────────────────────│</code></pre>

<h3 id="mcp-client-config"><strong>9.2 Create Client for MCP Host</strong></h3>
<pre><code># MCP Host client — ứng dụng AI/LLM kết nối tới MCP servers
Client ID: mcp-host-app
Client type: OpenID Connect
Client authentication: ON (confidential)

Capability Config:
  Standard flow: ON          # Cho interactive MCP sessions
  Service accounts roles: ON # Cho automated MCP operations

Access Settings:
  Valid redirect URIs: http://localhost:3001/callback
  Web origins: http://localhost:3001

Advanced:
  PKCE Code Challenge Method: S256
  Access Token Lifespan: 300   # 5 phút</code></pre>

<h3 id="mcp-server-client"><strong>9.3 Create Client for MCP Server (Resource Server)</strong></h3>
<pre><code># MCP Server client — validate incoming tokens
Client ID: mcp-tool-server
Client type: OpenID Connect
Client authentication: ON (confidential)

Capability Config:
  Standard flow: OFF
  Service accounts roles: ON    # Nếu MCP server cần gọi Keycloak APIs

# MCP Server cấu hình JWT validation
# Sử dụng Keycloak JWKS endpoint để verify access tokens
JWKS_URI: http://localhost:8080/realms/my-realm/protocol/openid-connect/certs
ISSUER: http://localhost:8080/realms/my-realm</code></pre>

<h3 id="mcp-scopes"><strong>9.4 Create Scopes for MCP Operations</strong></h3>
<pre><code># Tạo Client Scopes cho MCP permissions
Client Scope: mcp:tools:read
  Type: Optional
  Description: Read access to MCP tools
  Protocol Mapper: Hardcoded claim
    Token Claim Name: mcp_permissions
    Claim Value: ["tools:read"]

Client Scope: mcp:tools:execute
  Type: Optional
  Description: Execute MCP tools
  Protocol Mapper: Hardcoded claim
    Token Claim Name: mcp_permissions
    Claim Value: ["tools:execute"]

Client Scope: mcp:resources:read
  Type: Optional
  Description: Read MCP resources
  Protocol Mapper: Hardcoded claim
    Token Claim Name: mcp_permissions
    Claim Value: ["resources:read"]

# Gán scopes cho MCP Host client
Client: mcp-host-app
  Default scopes: mcp:tools:read, mcp:resources:read
  Optional scopes: mcp:tools:execute</code></pre>

<h3 id="mcp-audience"><strong>9.5 Audience Mapper cho MCP</strong></h3>
<pre><code># MCP Host client cần access token với audience = MCP Server
Client: mcp-host-app → Client scopes → Dedicated scope → Add mapper
  Mapper Type: Audience
  Name: mcp-server-audience
  Included Client Audience: mcp-tool-server
  Add to access token: ON

# Access token kết quả:
{
  "iss": "http://localhost:8080/realms/my-realm",
  "sub": "user-or-service-account-id",
  "aud": ["mcp-host-app", "mcp-tool-server"],
  "azp": "mcp-host-app",
  "scope": "openid mcp:tools:read mcp:resources:read",
  "mcp_permissions": ["tools:read", "resources:read"]
}</code></pre>

<h3 id="mcp-token-exchange"><strong>9.6 Token Exchange cho MCP Multi-Server</strong></h3>
<p>When MCP Host needs to call many different MCP servers, use Token Exchange to get tokens for each server:</p>

<pre><code># MCP Host có access token cho mcp-tool-server-1
# Cần access mcp-tool-server-2

POST /realms/my-realm/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:token-exchange&
subject_token=CURRENT_ACCESS_TOKEN&
subject_token_type=urn:ietf:params:oauth:token-type:access_token&
audience=mcp-tool-server-2&
client_id=mcp-host-app&
client_secret=HOST_SECRET&
scope=mcp:tools:execute</code></pre>

<h3 id="mcp-security-policy"><strong>9.7 Client Policy cho MCP</strong></h3>
<pre><code># Enforce security cho tất cả MCP clients
Profile: mcp-security-profile
  Executors:
    - PKCE Enforcer (S256)
    - Confidential Client Enforcer
    - Secure Signing Algorithm (RS256, ES256)
    - Reject Implicit Grant
    - Reject Resource Owner Password Credentials Grant
    - Holder-of-Key Enforcer  # DPoP cho high-security MCP operations

Policy: mcp-clients-policy
  Conditions:
    - Client Scopes: mcp:tools:read   # Áp dụng cho clients request MCP scopes
  Profiles:
    - mcp-security-profile</code></pre>

<h2 id="10-thuc-hanh"><strong>10. Practice exercises</strong></h2>

<h3 id="lab-1"><strong>Lab 1: Client Policies — Baseline Security</strong></h3>
<ol>
<li><p>Create Client Profile <code>baseline-security</code> with executors: Reject Implicit Grant, PKCE Enforcer, Secure Signing Algorithm</p></li>
<li><p>Create Client Policy <code>enforce-baseline</code> with condition <code>Any Client</code></p></li>
<li><p>Test: Create new client and try to request token without PKCE → rejected</p></li>
<li><p>Test: Try turning on Implicit flow → rejected</p></li>
</ol>

<h3 id="lab-2"><strong>Lab 2: FAPI 2.0 Compliance</strong></h3>
<ol>
<li><p>Create Client Profile using built-in FAPI 2.0 Security Profile</p></li>
<li><p>Create a Policy that only applies to clients with the role <code>fapi-client</code></p></li>
<li><p>Create confidential client with Signed JWT authentication</p></li>
<li><p>Test full authorization flow with PAR + PKCE + DPoP</p></li>
</ol>

<h3 id="lab-3"><strong>Lab 3: Client Secret Rotation</strong></h3>
<ol>
<li><p>Configure Secret Rotation executor (expiration: 60 seconds, grace: 30 seconds for testing)</p></li>
<li><p>Create confidential client → record secret A</p></li>
<li><p>Wait 60 seconds → regenerate secret → record secret B</p></li>
<li><p>Verify: Secret A remains active during the grace period (30 seconds)</p></li>
<li><p>Verify: After grace period, only secret B is active</p></li>
</ol>

<h3 id="lab-4"><strong>Lab 4: Service Account + Token Exchange</strong></h3>
<ol>
<li><p>Create 3 clients: <code>frontend-app</code> (public), <code>api-gateway</code> (confidential + service account), <code>payment-service</code> (confidential)</p></li>
<li><p>User logs in via <code>frontend-app</code> → receives access token</p></li>
<li><p><code>api-gateway</code> receives tokens from frontend, exchanges new tokens for <code>payment-service</code></p></li>
<li><p>Verify: New token has <code>aud: payment-service</code> and <code>act.sub: api-gateway</code></p></li>
</ol>

<h3 id="lab-5"><strong>Lab 5: MCP Server Configuration</strong></h3>
<ol>
<li><p>Create realm <code>mcp-demo</code></p></li>
<li><p>Create clients: <code>mcp-host</code> (confidential), <code>mcp-tools-server</code> (confidential)</p></li>
<li><p>Create client scopes: <code>mcp:tools:read</code>, <code>mcp:tools:execute</code></p></li>
<li><p>Configure Audience Mapper for <code>mcp-host</code> → audience = <code>mcp-tools-server</code></p></li>
<li><p>Get tokens with Client Credentials flow</p></li>
<li><p>Verify token contents: audience, scopes, permissions</p></li>
<li><p>Simulate MCP Server validate token using JWKS endpoint</p></li>
</ol>

<h3 id="lab-6"><strong>Lab 6: Signed JWT Client Authentication</strong></h3>
<ol>
<li><p>Generate RSA key pair (<code>openssl</code>)</p></li>
<li><p>Create confidential client with authenticator = <code>Signed JWT</code></p></li>
<li><p>Upload certificate to Keycloak</p></li>
<li><p>Write script to create and sign client_assertion JWT</p></li>
<li><p>Request token with <code>client_assertion</code> instead of <code>client_secret</code></p></li>
<li><p>Verify token received</p></li>
</ol>
