---
id: 019d8b30-b109-7001-c001-e0c5f8100109
title: 'Bài 9: Client Policies và Advanced Client Configuration'
slug: bai-9-client-policies-va-advanced-client-configuration
description: >-
  Client Policies architecture (Profiles, Conditions, Executors), FAPI 2.0
  Security Profile, Client Secret Rotation, Service Accounts, Audience Support,
  Confidential Client Credentials (Client ID/Secret, Signed JWT, X.509),
  Standard Token Exchange, JWT Authorization Grant (RFC 7523), và cấu hình cho
  MCP Servers.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 2: SSO Protocols - OpenID Connect và SAML"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
---
<h2 id="1-client-policies"><strong>1. Client Policies</strong></h2>

<p>Client Policies là framework cho phép <strong>enforce security requirements</strong> lên clients một cách tự động. Thay vì phải kiểm tra thủ công cấu hình từng client, bạn định nghĩa policies để Keycloak tự động validate và enforce.</p>

<h3 id="tai-sao-can-client-policies"><strong>1.1 Tại sao cần Client Policies?</strong></h3>
<ul>
<li><p><strong>Consistency</strong>: Đảm bảo tất cả clients tuân thủ cùng security standards</p></li>
<li><p><strong>Automation</strong>: Tự động reject requests không tuân thủ</p></li>
<li><p><strong>Compliance</strong>: Enforce industry standards (FAPI, PSD2, Open Banking)</p></li>
<li><p><strong>Governance</strong>: Kiểm soát client registration và configuration</p></li>
</ul>

<h3 id="architecture"><strong>1.2 Architecture: Profiles, Conditions, Executors</strong></h3>
<p>Client Policies gồm 3 thành phần chính:</p>

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
<tr><th>Thành phần</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td><strong>Profile</strong></td><td>Tập hợp các Executors — định nghĩa "enforce cái gì"</td><td><code>fapi-2-security-profile</code></td></tr>
<tr><td><strong>Condition</strong></td><td>Điều kiện xác định client nào bị ảnh hưởng — "enforce cho ai"</td><td>Clients có role <code>fapi-client</code></td></tr>
<tr><td><strong>Executor</strong></td><td>Logic enforcement cụ thể — "enforce như thế nào"</td><td>Bắt buộc PKCE S256</td></tr>
</tbody>
</table>

<h3 id="tao-client-profile"><strong>1.3 Tạo Client Profile</strong></h3>
<ol>
<li><p>Vào <strong>Realm Settings</strong> → <strong>Client Policies</strong> → tab <strong>Profiles</strong></p></li>
<li><p>Click <strong>Create client profile</strong></p></li>
<li><p>Nhập <strong>Name</strong> và <strong>Description</strong></p></li>
<li><p>Click <strong>Save</strong> → mở profile → click <strong>Add executor</strong></p></li>
</ol>

<h3 id="executors"><strong>1.4 Executors có sẵn</strong></h3>

<table>
<thead>
<tr><th>Executor</th><th>Mô tả</th><th>Tham số</th></tr>
</thead>
<tbody>
<tr><td><strong>Secure Client Authenticator</strong></td><td>Bắt buộc phương thức authentication cụ thể</td><td>Allowed authenticators: client-secret, client-jwt, client-x509</td></tr>
<tr><td><strong>PKCE Enforcer</strong></td><td>Bắt buộc PKCE</td><td>Augment: ON (tự thêm nếu client thiếu)</td></tr>
<tr><td><strong>Secure Signing Algorithm</strong></td><td>Chỉ cho phép algorithms an toàn</td><td>Default: RS256, ES256, PS256</td></tr>
<tr><td><strong>Secure Signing Algorithm for Signed JWT</strong></td><td>Algorithm cho client JWT auth</td><td>PS256, ES256 (không cho phép RS256)</td></tr>
<tr><td><strong>Holder-of-Key Enforcer</strong></td><td>Bắt buộc token binding (mTLS hoặc DPoP)</td><td>Auto-configure: ON</td></tr>
<tr><td><strong>DPoP Proof Verifier</strong></td><td>Bắt buộc DPoP proof trong token requests</td><td></td></tr>
<tr><td><strong>Confidential Client Enforcer</strong></td><td>Chỉ cho phép confidential clients</td><td></td></tr>
<tr><td><strong>Consent Required</strong></td><td>Bắt buộc consent screen</td><td></td></tr>
<tr><td><strong>Full Scope Disabled</strong></td><td>Tắt full scope mapping</td><td></td></tr>
<tr><td><strong>Reject Implicit Grant</strong></td><td>Không cho phép implicit flow</td><td></td></tr>
<tr><td><strong>Reject Resource Owner Password Credentials Grant</strong></td><td>Không cho phép ROPC</td><td></td></tr>
<tr><td><strong>Secure Redirect URIs Enforcer</strong></td><td>Validate redirect URIs</td><td>Require HTTPS, không wildcard</td></tr>
<tr><td><strong>Secure Request Object</strong></td><td>Bắt buộc JAR (JWT-Secured Authorization Request)</td><td></td></tr>
<tr><td><strong>Secure Response Type</strong></td><td>Chỉ cho phép response types an toàn</td><td>Allowed: code (không token, id_token)</td></tr>
<tr><td><strong>Secure Session Enforcer</strong></td><td>Enforce session settings</td><td></td></tr>
</tbody>
</table>

<h3 id="tao-condition"><strong>1.5 Conditions có sẵn</strong></h3>

<table>
<thead>
<tr><th>Condition</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td><strong>Any Client</strong></td><td>Áp dụng cho tất cả clients</td><td>Global security policy</td></tr>
<tr><td><strong>Client Access Type</strong></td><td>Dựa trên client type (public/confidential)</td><td>Enforce PKCE cho tất cả public clients</td></tr>
<tr><td><strong>Client Roles</strong></td><td>Client có role cụ thể</td><td>Clients có role <code>fapi-compliant</code></td></tr>
<tr><td><strong>Client Scopes</strong></td><td>Client sử dụng scope cụ thể</td><td>Clients request scope <code>payment</code></td></tr>
<tr><td><strong>Client Update Source Groups</strong></td><td>Dựa trên nguồn tạo/update client</td><td>Clients tạo qua Dynamic Registration</td></tr>
<tr><td><strong>Client Update Context</strong></td><td>Context khi client được update</td><td>Authorization request, Token request</td></tr>
</tbody>
</table>

<h3 id="tao-policy"><strong>1.6 Tạo Client Policy</strong></h3>
<ol>
<li><p>Vào <strong>Realm Settings</strong> → <strong>Client Policies</strong> → tab <strong>Policies</strong></p></li>
<li><p>Click <strong>Create client policy</strong></p></li>
<li><p>Nhập <strong>Name</strong> và <strong>Description</strong></p></li>
<li><p>Thêm <strong>Conditions</strong> (xác định client nào bị ảnh hưởng)</p></li>
<li><p>Thêm <strong>Client Profiles</strong> (profile nào apply)</p></li>
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

<h3 id="vi-du-policy-thuc-te"><strong>1.7 Ví dụ Policy thực tế</strong></h3>

<p><strong>Policy 1: Baseline Security cho tất cả clients</strong></p>
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

<p>FAPI (Financial-grade API) là bộ tiêu chuẩn bảo mật cao do OpenID Foundation phát triển, được sử dụng rộng rãi trong <strong>Open Banking</strong>, <strong>Payment Services Directive 2 (PSD2)</strong>, và các ứng dụng tài chính.</p>

<h3 id="fapi-2-baseline"><strong>2.1 FAPI 2.0 Baseline Profile</strong></h3>
<p>Keycloak cung cấp sẵn built-in profiles cho FAPI 2.0:</p>

<table>
<thead>
<tr><th>Yêu cầu</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>Authorization Code Flow only</td><td>Không cho phép implicit, ROPC</td></tr>
<tr><td>PKCE (S256)</td><td>Bắt buộc cho tất cả clients</td></tr>
<tr><td>Confidential Client</td><td>Bắt buộc client authentication</td></tr>
<tr><td>Secure Signing Algorithms</td><td>PS256, ES256 (không RS256)</td></tr>
<tr><td>Sender-constrained tokens</td><td>DPoP hoặc mTLS token binding</td></tr>
<tr><td>Redirect URI exact match</td><td>Không wildcard</td></tr>
<tr><td>HTTPS required</td><td>Cho tất cả endpoints</td></tr>
</tbody>
</table>

<h3 id="fapi-2-advanced"><strong>2.2 FAPI 2.0 Advanced Profile (Message Signing)</strong></h3>
<p>Ngoài baseline, Advanced Profile thêm:</p>
<ul>
<li><p><strong>PAR (Pushed Authorization Requests)</strong> — RFC 9126: gửi authorization request qua backchannel trước khi redirect</p></li>
<li><p><strong>JAR (JWT-Secured Authorization Request)</strong> — RFC 9101: authorization parameters được ký trong JWT</p></li>
<li><p><strong>JARM (JWT-Secured Authorization Response Mode)</strong>: authorization response được ký trong JWT</p></li>
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

<h3 id="enable-fapi-2"><strong>2.3 Bật FAPI 2.0 trong Keycloak</strong></h3>
<ol>
<li><p>Vào <strong>Realm Settings</strong> → <strong>Client Policies</strong> → tab <strong>Profiles</strong></p></li>
<li><p>Keycloak cung cấp sẵn <strong>Global Profiles</strong>:</p>
<ul>
<li><code>fapi-2-security-profile</code></li>
<li><code>fapi-2-message-signing-profile</code></li>
</ul>
</li>
<li><p>Tạo Policy sử dụng profile tương ứng</p></li>
<li><p>Gán Condition để chọn clients cần compliance</p></li>
</ol>

<pre><code># Ví dụ: Enforce FAPI 2.0 cho clients có scope "fapi"
Policy: fapi-2-enforcement
  Conditions:
    - Client Scopes: fapi
  Profiles:
    - fapi-2-security-profile     # Built-in global profile
    - fapi-2-message-signing-profile  # Thêm nếu cần message signing</code></pre>

<h2 id="3-client-secret-rotation"><strong>3. Client Secret Rotation</strong></h2>

<p>Client Secret Rotation cho phép thay đổi client secret <strong>không gây downtime</strong> — secret cũ vẫn hoạt động trong một khoảng thời gian chuyển tiếp.</p>

<h3 id="cau-hinh-secret-rotation"><strong>3.1 Cấu hình Client Secret Rotation</strong></h3>
<p>Sử dụng <strong>Client Policy</strong> với executor <strong>Secret Rotation</strong>:</p>

<pre><code># Tạo Profile với Secret Rotation executor
Profile: secret-rotation-profile
  Executors:
    - Secret Rotation
        Secret Expiration: 2592000        # 30 ngày (tính bằng giây)
        Rotated Secret Expiration: 604800  # Grace period: 7 ngày
        Remain Expiration: 604800          # Thời gian cảnh báo trước khi hết hạn</code></pre>

<p><strong>Cách hoạt động:</strong></p>
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

<h3 id="trien-khai-secret-rotation"><strong>3.2 Triển khai Secret Rotation</strong></h3>
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

<p>Khi bật <strong>Service accounts roles</strong> cho confidential client, Keycloak tạo một <strong>service account user</strong> đặc biệt cho client đó. User này đại diện cho client trong các machine-to-machine operations.</p>

<h3 id="service-account-user"><strong>4.1 Service Account User</strong></h3>
<pre><code># Service account user naming convention
Username: service-account-{client-id}
# Ví dụ: service-account-my-backend-service

# Service account user có các đặc điểm:
# - Không có password (authenticate bằng client credentials)
# - Có thể gán realm roles và client roles
# - Có thể thêm user attributes
# - Xuất hiện trong Users list (với filter service accounts)</code></pre>

<h3 id="gan-roles"><strong>4.2 Gán Roles cho Service Account</strong></h3>
<ol>
<li><p>Mở client → tab <strong>Service account roles</strong></p></li>
<li><p>Click <strong>Assign role</strong></p></li>
<li><p>Chọn realm roles hoặc filter by clients để gán client roles</p></li>
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
<li><p><strong>Least privilege</strong>: Chỉ gán roles cần thiết cho mỗi service</p></li>
<li><p><strong>Separate clients</strong>: Tạo client riêng cho mỗi microservice, không dùng chung</p></li>
<li><p><strong>Audit</strong>: Enable events logging để track service account activities</p></li>
<li><p><strong>Short token lifespan</strong>: Access token cho service accounts nên ngắn (1-5 phút)</p></li>
<li><p><strong>Rotate credentials</strong>: Sử dụng Client Secret Rotation hoặc certificate-based auth</p></li>
</ul>

<h2 id="5-audience-support"><strong>5. Audience Support</strong></h2>

<p>Audience (<code>aud</code> claim) xác định <strong>resource server nào</strong> access token được dự định sử dụng. Đây là cơ chế bảo mật quan trọng để ngăn token được sử dụng ở service không mong muốn.</p>

<h3 id="audience-problem"><strong>5.1 Vấn đề</strong></h3>
<pre><code># Mặc định, access token chỉ có aud = client-id đã request
{
  "aud": "my-frontend-app",     // ← chỉ có client đã request
  "azp": "my-frontend-app"
}

# Resource Server (my-api-service) verify token:
# → aud không chứa "my-api-service"
# → REJECT! (nếu resource server validate audience)</code></pre>

<h3 id="audience-mapper"><strong>5.2 Giải pháp: Audience Protocol Mapper</strong></h3>
<p>Thêm <strong>Audience Mapper</strong> vào client hoặc client scope để thêm resource server vào <code>aud</code>:</p>

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
<p>Keycloak có built-in <strong>Audience Resolve</strong> mapper (trong default scope <code>roles</code>) — tự động thêm <code>aud</code> cho clients mà user có client roles:</p>

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
<p>Phương thức đơn giản nhất — client gửi ID và secret trong request:</p>

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
<p>Client tạo và ký JWT bằng private key, gửi đến Keycloak. Keycloak verify bằng public key/certificate đã đăng ký.</p>

<p><strong>Cấu hình trong Keycloak:</strong></p>
<ol>
<li><p>Client → tab <strong>Credentials</strong> → <strong>Client Authenticator</strong>: <code>Signed JWT</code></p></li>
<li><p>Upload client certificate hoặc JWKS URL</p></li>
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
<p>Client xác thực bằng client TLS certificate (Mutual TLS — mTLS). Đây là phương thức bảo mật nhất.</p>

<p><strong>Cấu hình:</strong></p>
<ol>
<li><p>Client → tab <strong>Credentials</strong> → <strong>Client Authenticator</strong>: <code>X.509 Certificate</code></p></li>
<li><p>Nhập <strong>Subject DN</strong> hoặc pattern cho certificate matching</p></li>
<li><p>Cấu hình Keycloak server enable mTLS endpoint</p></li>
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

<p><strong>Kết hợp mTLS với certificate-bound tokens:</strong></p>
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

<p>Token Exchange cho phép một service <strong>exchange token</strong> để nhận token mới với quyền hạn hoặc audience khác.</p>

<h3 id="token-exchange-use-cases"><strong>7.1 Use Cases</strong></h3>
<ul>
<li><p><strong>Delegation</strong>: Service A muốn gọi Service B "nhân danh" user — exchange access token lấy token mới với audience = Service B</p></li>
<li><p><strong>Impersonation</strong>: Admin muốn hoạt động như user khác</p></li>
<li><p><strong>Token type conversion</strong>: Exchange access token lấy SAML assertion (hoặc ngược lại)</p></li>
</ul>

<h3 id="enable-token-exchange"><strong>7.2 Cấu hình Token Exchange</strong></h3>
<p>Token Exchange trong Keycloak là <strong>preview feature</strong> — cần enable:</p>

<pre><code># Bật feature
bin/kc.sh start-dev --features=token-exchange

# Docker
docker run -e KC_FEATURES=token-exchange quay.io/keycloak/keycloak:26.2.4 start-dev</code></pre>

<p><strong>Cấu hình permissions:</strong></p>
<ol>
<li><p>Mở <strong>target client</strong> (client mà bạn muốn exchange token sang) → tab <strong>Permissions</strong></p></li>
<li><p>Bật <strong>Permissions Enabled</strong></p></li>
<li><p>Click <strong>token-exchange</strong> permission → cấu hình policy cho phép source client exchange</p></li>
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
<tr><th>Mode</th><th>Mô tả</th><th>Token claims</th></tr>
</thead>
<tbody>
<tr><td><strong>Delegation</strong></td><td>Service B biết rằng Service A đang hành động nhân danh user</td><td><code>act.sub</code> = Service A, <code>sub</code> = user</td></tr>
<tr><td><strong>Impersonation</strong></td><td>Service B không biết — token giống hệt user trực tiếp request</td><td><code>sub</code> = user (không có <code>act</code>)</td></tr>
</tbody>
</table>

<h2 id="8-jwt-authorization-grant"><strong>8. JWT Authorization Grant (RFC 7523)</strong></h2>

<p>Cho phép client sử dụng một <strong>JWT assertion được cấp bởi trusted issuer</strong> để lấy access token mà không cần user interaction.</p>

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

<h3 id="cau-hinh-jwt-grant"><strong>8.2 Cấu hình JWT Grant</strong></h3>
<ol>
<li><p>Realm Settings → <strong>Keys</strong> → thêm external issuer's signing key</p></li>
<li><p>Hoặc cấu hình <strong>Identity Provider</strong> cho external issuer</p></li>
<li><p>Client phải có <strong>Service accounts roles</strong> enabled</p></li>
</ol>

<h2 id="9-cau-hinh-cho-mcp-servers"><strong>9. Cấu hình Keycloak cho MCP Servers</strong></h2>

<p>Model Context Protocol (MCP) servers sử dụng OAuth 2.0 để xác thực clients. Keycloak có thể đóng vai trò <strong>Authorization Server</strong> cho MCP ecosystem.</p>

<h3 id="mcp-oauth-flow"><strong>9.1 MCP OAuth 2.0 Flow</strong></h3>
<p>MCP specification yêu cầu OAuth 2.0 cho server-to-server và client-to-server authentication:</p>

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

<h3 id="mcp-client-config"><strong>9.2 Tạo Client cho MCP Host</strong></h3>
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

<h3 id="mcp-server-client"><strong>9.3 Tạo Client cho MCP Server (Resource Server)</strong></h3>
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

<h3 id="mcp-scopes"><strong>9.4 Tạo Scopes cho MCP Operations</strong></h3>
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
<p>Khi MCP Host cần gọi nhiều MCP servers khác nhau, sử dụng Token Exchange để lấy token cho từng server:</p>

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

<h2 id="10-thuc-hanh"><strong>10. Bài tập thực hành</strong></h2>

<h3 id="lab-1"><strong>Lab 1: Client Policies — Baseline Security</strong></h3>
<ol>
<li><p>Tạo Client Profile <code>baseline-security</code> với executors: Reject Implicit Grant, PKCE Enforcer, Secure Signing Algorithm</p></li>
<li><p>Tạo Client Policy <code>enforce-baseline</code> với condition <code>Any Client</code></p></li>
<li><p>Test: Tạo client mới và thử request token không có PKCE → bị reject</p></li>
<li><p>Test: Thử bật Implicit flow → bị reject</p></li>
</ol>

<h3 id="lab-2"><strong>Lab 2: FAPI 2.0 Compliance</strong></h3>
<ol>
<li><p>Tạo Client Profile sử dụng built-in FAPI 2.0 Security Profile</p></li>
<li><p>Tạo Policy chỉ áp dụng cho clients có role <code>fapi-client</code></p></li>
<li><p>Tạo confidential client với Signed JWT authentication</p></li>
<li><p>Test authorization flow đầy đủ với PAR + PKCE + DPoP</p></li>
</ol>

<h3 id="lab-3"><strong>Lab 3: Client Secret Rotation</strong></h3>
<ol>
<li><p>Cấu hình Secret Rotation executor (expiration: 60 giây, grace: 30 giây cho testing)</p></li>
<li><p>Tạo confidential client → ghi nhận secret A</p></li>
<li><p>Chờ 60 giây → regenerate secret → ghi nhận secret B</p></li>
<li><p>Verify: Secret A vẫn hoạt động trong grace period (30 giây)</p></li>
<li><p>Verify: Sau grace period, chỉ secret B hoạt động</p></li>
</ol>

<h3 id="lab-4"><strong>Lab 4: Service Account + Token Exchange</strong></h3>
<ol>
<li><p>Tạo 3 clients: <code>frontend-app</code> (public), <code>api-gateway</code> (confidential + service account), <code>payment-service</code> (confidential)</p></li>
<li><p>User đăng nhập qua <code>frontend-app</code> → nhận access token</p></li>
<li><p><code>api-gateway</code> nhận token từ frontend, exchange lấy token mới cho <code>payment-service</code></p></li>
<li><p>Verify: Token mới có <code>aud: payment-service</code> và <code>act.sub: api-gateway</code></p></li>
</ol>

<h3 id="lab-5"><strong>Lab 5: MCP Server Configuration</strong></h3>
<ol>
<li><p>Tạo realm <code>mcp-demo</code></p></li>
<li><p>Tạo clients: <code>mcp-host</code> (confidential), <code>mcp-tools-server</code> (confidential)</p></li>
<li><p>Tạo client scopes: <code>mcp:tools:read</code>, <code>mcp:tools:execute</code></p></li>
<li><p>Cấu hình Audience Mapper cho <code>mcp-host</code> → audience = <code>mcp-tools-server</code></p></li>
<li><p>Lấy token với Client Credentials flow</p></li>
<li><p>Verify token contents: audience, scopes, permissions</p></li>
<li><p>Simulate MCP Server validate token bằng JWKS endpoint</p></li>
</ol>

<h3 id="lab-6"><strong>Lab 6: Signed JWT Client Authentication</strong></h3>
<ol>
<li><p>Generate RSA key pair (<code>openssl</code>)</p></li>
<li><p>Tạo confidential client với authenticator = <code>Signed JWT</code></p></li>
<li><p>Upload certificate vào Keycloak</p></li>
<li><p>Viết script tạo và ký client_assertion JWT</p></li>
<li><p>Request token với <code>client_assertion</code> thay vì <code>client_secret</code></p></li>
<li><p>Verify token nhận được</p></li>
</ol>
