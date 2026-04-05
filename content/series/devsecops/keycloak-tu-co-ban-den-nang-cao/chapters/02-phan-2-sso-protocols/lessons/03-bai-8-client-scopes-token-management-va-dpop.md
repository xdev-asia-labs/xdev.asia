---
id: 019d8b30-b108-7001-c001-e0c5f8100108
title: 'Bài 8: Client Scopes, Token Management và DPoP'
slug: bai-8-client-scopes-token-management-va-dpop
description: >-
  Client Scopes (default và optional), scope parameters, consent settings, realm
  default scopes, evaluating scopes, quản lý Access/ID/Refresh Token lifecycle,
  session và token timeouts, offline access, token revocation, lightweight access
  tokens, DPoP (RFC 9449), và Client Policies cho token security.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 2: SSO Protocols - OpenID Connect và SAML"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2449" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2449)"/>

  <!-- Decorations -->
  <g>
    <circle cx="817" cy="61" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1034" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="751" cy="255" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="968" cy="92" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="685" cy="189" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="191" x2="1100" y2="271" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="221" x2="1050" y2="291" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1013.5166604983954,178 1013.5166604983954,204 991,217 968.4833395016046,204 968.4833395016046,178 991,165" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — Bài 8</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 8: Client Scopes, Token Management và</tspan>
      <tspan x="60" dy="42">DPoP</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: SSO Protocols - OpenID Connect và SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-client-scopes"><strong>1. Client Scopes</strong></h2>

<p>Client Scopes là cơ chế quản lý <strong>nhóm protocol mappers và roles</strong> có thể được chia sẻ giữa nhiều clients. Thay vì thêm mappers vào từng client riêng lẻ, bạn tạo Client Scope và gán cho các clients cần.</p>

<h3 id="default-vs-optional"><strong>1.1 Default Scopes vs Optional Scopes</strong></h3>
<table>
<thead>
<tr><th>Loại</th><th>Mô tả</th><th>Khi nào claims được thêm vào token</th></tr>
</thead>
<tbody>
<tr><td><strong>Default Client Scopes</strong></td><td>Tự động áp dụng cho mọi token request</td><td>Luôn luôn — không cần request explicit</td></tr>
<tr><td><strong>Optional Client Scopes</strong></td><td>Chỉ áp dụng khi client request explicit trong <code>scope</code> parameter</td><td>Chỉ khi client gửi <code>scope=scope_name</code></td></tr>
</tbody>
</table>

<p><strong>Ví dụ:</strong></p>
<pre><code># Default scopes — luôn có trong token
# profile, email, roles, web-origins, acr → tự động áp dụng

# Optional scopes — chỉ khi request
# address, phone, offline_access, microprofile-jwt

# Authorization request với optional scope
GET /auth?response_type=code&
  client_id=my-app&
  scope=openid profile email phone address offline_access&
  redirect_uri=...</code></pre>

<h3 id="built-in-scopes"><strong>1.2 Built-in Client Scopes</strong></h3>
<p>Keycloak cung cấp sẵn các client scopes theo chuẩn OIDC:</p>

<table>
<thead>
<tr><th>Scope</th><th>Loại</th><th>Claims được thêm</th></tr>
</thead>
<tbody>
<tr><td><code>openid</code></td><td>Default</td><td>sub, iss, aud, exp, iat, auth_time, nonce, acr, session_state</td></tr>
<tr><td><code>profile</code></td><td>Default</td><td>name, family_name, given_name, preferred_username, gender, birthdate, locale, updated_at</td></tr>
<tr><td><code>email</code></td><td>Default</td><td>email, email_verified</td></tr>
<tr><td><code>roles</code></td><td>Default</td><td>realm_access.roles, resource_access.{client}.roles</td></tr>
<tr><td><code>web-origins</code></td><td>Default</td><td>allowed-origins (CORS)</td></tr>
<tr><td><code>acr</code></td><td>Default</td><td>acr (Authentication Context Class Reference)</td></tr>
<tr><td><code>address</code></td><td>Optional</td><td>address (formatted, street_address, locality, region, postal_code, country)</td></tr>
<tr><td><code>phone</code></td><td>Optional</td><td>phone_number, phone_number_verified</td></tr>
<tr><td><code>offline_access</code></td><td>Optional</td><td>Cho phép lấy offline refresh token</td></tr>
<tr><td><code>microprofile-jwt</code></td><td>Optional</td><td>upn, groups (MicroProfile JWT spec)</td></tr>
</tbody>
</table>

<h3 id="tao-client-scope"><strong>1.3 Tạo Client Scope mới</strong></h3>
<ol>
<li><p>Vào <strong>Client scopes</strong> → <strong>Create client scope</strong></p></li>
<li><p>Nhập thông tin:</p>
<ul>
<li><strong>Name</strong>: <code>my-custom-scope</code></li>
<li><strong>Description</strong>: Mô tả scope</li>
<li><strong>Type</strong>: Default / Optional / None</li>
<li><strong>Display on consent screen</strong>: ON nếu muốn hiển thị cho user</li>
<li><strong>Consent screen text</strong>: Text hiển thị trên consent screen</li>
<li><strong>Include in token scope</strong>: ON để scope name xuất hiện trong <code>scope</code> claim của token</li>
<li><strong>GUI order</strong>: Thứ tự hiển thị trên consent screen</li>
</ul>
</li>
<li><p>Thêm <strong>Protocol Mappers</strong> vào scope</p></li>
<li><p>Thêm <strong>Scope</strong> (role scope mappings) nếu cần giới hạn roles</p></li>
</ol>

<pre><code># Ví dụ: Tạo scope "billing" chứa billing-related claims
Name: billing
Type: Optional
Display on consent screen: ON
Consent screen text: "Access your billing information"
Include in token scope: ON

# Thêm Protocol Mappers:
# 1. User Attribute Mapper: billing_plan → billing_plan claim
# 2. User Attribute Mapper: billing_email → billing_email claim
# 3. Hardcoded Claim: billing_api_version → "v2"</code></pre>

<h3 id="gan-scope-cho-client"><strong>1.4 Gán Client Scope cho Client</strong></h3>
<ol>
<li><p>Mở client → tab <strong>Client scopes</strong></p></li>
<li><p>Click <strong>Add client scope</strong></p></li>
<li><p>Chọn scope và gán là <strong>Default</strong> hoặc <strong>Optional</strong></p></li>
</ol>

<pre><code># Gán scope bằng Admin CLI
# Lấy client UUID
CLIENT_UUID=$(bin/kcadm.sh get clients -r my-company \
  -q clientId=my-app --fields id --format csv --noquotes)

# Lấy client scope UUID
SCOPE_UUID=$(bin/kcadm.sh get client-scopes -r my-company \
  -q name=billing --fields id --format csv --noquotes)

# Gán default scope
bin/kcadm.sh update clients/$CLIENT_UUID/default-client-scopes/$SCOPE_UUID \
  -r my-company

# Gán optional scope
bin/kcadm.sh update clients/$CLIENT_UUID/optional-client-scopes/$SCOPE_UUID \
  -r my-company</code></pre>

<h3 id="realm-default-scopes"><strong>1.5 Realm Default Client Scopes</strong></h3>
<p>Realm Default Client Scopes tự động được gán cho <strong>mọi client mới</strong> khi tạo:</p>
<ol>
<li><p>Vào <strong>Client scopes</strong> → xem danh sách</p></li>
<li><p>Scopes có <strong>Assigned type</strong> = Default hoặc Optional ở realm level sẽ tự động gán cho clients mới</p></li>
</ol>

<p>Cấu hình qua Admin CLI:</p>
<pre><code># Thêm scope vào realm default scopes
bin/kcadm.sh update realms/my-company/default-default-client-scopes/$SCOPE_UUID

# Thêm scope vào realm optional scopes
bin/kcadm.sh update realms/my-company/default-optional-client-scopes/$SCOPE_UUID</code></pre>

<h3 id="consent-settings"><strong>1.6 Consent Settings</strong></h3>
<p>Khi client có <strong>Consent required</strong> = ON, user phải đồng ý (consent) cho từng scope trước khi client nhận tokens:</p>

<ul>
<li><p>Mỗi Client Scope có thể cấu hình <strong>Display on consent screen</strong> và <strong>Consent screen text</strong></p></li>
<li><p>User có thể revoke consent trong <strong>Account Console</strong> → Applications</p></li>
<li><p>Consent entries được lưu per user per client</p></li>
</ul>

<pre><code># Consent screen hiển thị:
# ┌────────────────────────────────────────────┐
# │  My Application muốn:                      │
# │                                             │
# │  ☑ Access your profile information          │   ← scope: profile
# │  ☑ Access your email address                │   ← scope: email
# │  ☐ Access your billing information          │   ← scope: billing (optional)
# │  ☐ Access your phone number                 │   ← scope: phone (optional)
# │                                             │
# │  [Accept]  [Cancel]                         │
# └────────────────────────────────────────────┘</code></pre>

<h3 id="evaluate-scopes"><strong>1.7 Evaluating Scopes (Scope Evaluation)</strong></h3>
<p>Admin Console cung cấp tool để preview token contents dựa trên scopes:</p>
<ol>
<li><p>Mở client → tab <strong>Client scopes</strong> → <strong>Evaluate</strong></p></li>
<li><p>Nhập: <strong>User</strong> (chọn user test), <strong>Scope parameter</strong> (optional scopes)</p></li>
<li><p>Click <strong>Evaluate</strong> để xem:</p>
<ul>
<li><strong>Effective protocol mappers</strong>: Mappers sẽ được áp dụng</li>
<li><strong>Effective role scope mappings</strong>: Roles có trong token</li>
<li><strong>Generated access token</strong>: Preview JSON của access token</li>
<li><strong>Generated ID token</strong>: Preview JSON của ID token</li>
<li><strong>Generated user info</strong>: Preview JSON của userinfo response</li>
</ul>
</li>
</ol>

<p>Đây là công cụ rất hữu ích để <strong>debug token contents</strong> mà không cần thực sự request token.</p>

<h2 id="2-token-management"><strong>2. Token Management</strong></h2>

<h3 id="access-token"><strong>2.1 Access Token</strong></h3>
<p>Access token là JWT chứa authorization information — xác định <strong>user nào</strong> có quyền truy cập <strong>resource nào</strong>.</p>

<p><strong>Cấu trúc Access Token:</strong></p>
<pre><code>{
  "exp": 1711800300,         // Expiration time
  "iat": 1711800000,         // Issued at
  "auth_time": 1711799900,   // Authentication time
  "jti": "token-id",         // JWT ID (unique)
  "iss": "http://localhost:8080/realms/my-company",  // Issuer
  "aud": ["my-app", "account"],                      // Audience
  "sub": "user-uuid",        // Subject (user ID)
  "typ": "Bearer",           // Token type
  "azp": "my-app",           // Authorized party (client ID)
  "session_state": "session-id",
  "acr": "1",                // Authentication Context Class Reference
  "scope": "openid profile email",
  "sid": "session-id",       // Session ID
  "email_verified": true,
  "name": "John Doe",
  "preferred_username": "john",
  "given_name": "John",
  "family_name": "Doe",
  "email": "john@example.com",
  "realm_access": {
    "roles": ["default-roles-my-company", "admin"]
  },
  "resource_access": {
    "my-app": {
      "roles": ["app-admin"]
    },
    "account": {
      "roles": ["manage-account"]
    }
  }
}</code></pre>

<h3 id="id-token"><strong>2.2 ID Token</strong></h3>
<p>ID Token chứa identity information — xác nhận user <strong>là ai</strong>. Chỉ dành cho client (Relying Party), KHÔNG gửi đến resource server.</p>

<pre><code>{
  "exp": 1711800300,
  "iat": 1711800000,
  "auth_time": 1711799900,
  "jti": "id-token-id",
  "iss": "http://localhost:8080/realms/my-company",
  "aud": "my-app",           // Audience = client ID
  "sub": "user-uuid",
  "typ": "ID",
  "azp": "my-app",
  "nonce": "nonce-value",    // Phải match với authorization request
  "session_state": "session-id",
  "at_hash": "access-token-hash",  // Hash of access token
  "acr": "1",
  "sid": "session-id",
  "email_verified": true,
  "name": "John Doe",
  "preferred_username": "john",
  "email": "john@example.com"
}</code></pre>

<h3 id="refresh-token"><strong>2.3 Refresh Token</strong></h3>
<p>Refresh token dùng để lấy access token mới mà không cần user đăng nhập lại. Refresh token có lifespan dài hơn access token.</p>

<pre><code># Refresh access token
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token&
refresh_token=REFRESH_TOKEN&
client_id=my-app&
client_secret=CLIENT_SECRET

# Response — access token mới
{
  "access_token": "new-access-token",
  "expires_in": 300,
  "refresh_expires_in": 1800,
  "refresh_token": "new-refresh-token",   // Refresh token mới (rotation)
  "token_type": "Bearer"
}</code></pre>

<h3 id="token-timeouts"><strong>2.4 Session và Token Timeouts</strong></h3>
<p>Cấu hình trong <strong>Realm Settings</strong> → <strong>Tokens</strong> tab và <strong>Sessions</strong> tab:</p>

<p><strong>Token Lifespans:</strong></p>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Giá trị khuyến nghị</th></tr>
</thead>
<tbody>
<tr><td>Access Token Lifespan</td><td>Thời gian sống access token</td><td>5 phút (production)</td></tr>
<tr><td>Client login timeout</td><td>Thời gian tối đa hoàn thành login flow</td><td>5 phút</td></tr>
<tr><td>Login timeout</td><td>Thời gian tối đa trên login page</td><td>30 phút</td></tr>
<tr><td>Login action timeout</td><td>Thời gian cho required actions (verify email,...)</td><td>5 phút</td></tr>
<tr><td>User-Initiated Action Lifespan</td><td>Thời gian cho user-initiated actions</td><td>5 phút</td></tr>
<tr><td>Default Admin-Initiated Action Lifespan</td><td>Thời gian cho admin-initiated actions (reset password link)</td><td>12 giờ</td></tr>
</tbody>
</table>

<p><strong>Session Lifespans:</strong></p>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Giá trị khuyến nghị</th></tr>
</thead>
<tbody>
<tr><td>SSO Session Idle</td><td>Session hết hạn sau khoảng thời gian không hoạt động</td><td>30 phút</td></tr>
<tr><td>SSO Session Max</td><td>Session hết hạn tuyệt đối (bất kể hoạt động)</td><td>10 giờ</td></tr>
<tr><td>SSO Session Idle Remember Me</td><td>Session idle khi "Remember Me" ON</td><td>30 ngày</td></tr>
<tr><td>SSO Session Max Remember Me</td><td>Session max khi "Remember Me" ON</td><td>30 ngày</td></tr>
<tr><td>Client Session Idle</td><td>Client session idle (ảnh hưởng refresh token)</td><td>Kế thừa SSO Session Idle</td></tr>
<tr><td>Client Session Max</td><td>Client session max (ảnh hưởng refresh token)</td><td>Kế thừa SSO Session Max</td></tr>
</tbody>
</table>

<p><strong>Mối quan hệ giữa sessions và tokens:</strong></p>
<pre><code># Refresh token expiration = MIN(Client Session Idle, Client Session Max)
# Nếu Client Session = 0 → dùng SSO Session values

# Ví dụ:
# SSO Session Idle = 30 phút
# SSO Session Max = 10 giờ
# Access Token Lifespan = 5 phút
# Client Session Idle = 0 (kế thừa SSO)
# Client Session Max = 0 (kế thừa SSO)

# → Access token sống 5 phút
# → Refresh token sống tối đa 30 phút (idle) hoặc 10 giờ (max)
# → Nếu user hoạt động liên tục, session kéo dài đến SSO Session Max</code></pre>

<p><strong>Override ở Client level:</strong></p>
<p>Mỗi client có thể override realm-level token settings trong tab <strong>Advanced</strong>:</p>
<pre><code>Client → Advanced → Advanced Settings:
  Access Token Lifespan: 60        # Override: 1 phút cho high-security API
  Client Session Idle: 900         # Override: 15 phút idle
  Client Session Max: 3600         # Override: 1 giờ max</code></pre>

<h3 id="refresh-token-rotation"><strong>2.5 Revoke Refresh Token (Rotation)</strong></h3>
<p>Khi bật <strong>Revoke Refresh Token</strong>, mỗi lần sử dụng refresh token để lấy access token mới, refresh token cũ bị thu hồi và phát hành refresh token mới.</p>

<pre><code># Realm Settings → Tokens tab
Revoke Refresh Token: ON
Refresh Token Max Reuse: 0        # Refresh token chỉ dùng 1 lần
                                    # > 0: cho phép reuse N lần (cho network retry)</code></pre>

<p><strong>Tại sao cần Refresh Token Rotation?</strong></p>
<ul>
<li><p>Nếu refresh token bị đánh cắp, attacker chỉ có thể dùng 1 lần</p></li>
<li><p>Legitimate client dùng cùng refresh token → cả hai đều bị invalidate → phát hiện token theft</p></li>
<li><p>Đây là <strong>best practice được khuyến nghị</strong> trong OAuth 2.0 Security BCP</p></li>
</ul>

<h2 id="3-offline-access"><strong>3. Offline Access</strong></h2>

<p>Offline tokens cho phép client <strong>truy cập resources ngay cả khi user không online</strong> (không có browser session). Offline tokens có lifespan rất dài và survive qua server restart.</p>

<h3 id="cau-hinh-offline"><strong>3.1 Cấu hình Offline Access</strong></h3>
<ol>
<li><p>Đảm bảo scope <code>offline_access</code> được gán cho client (optional scope)</p></li>
<li><p>Client request token với <code>scope=offline_access</code></p></li>
<li><p>Cấu hình offline session timeouts trong Realm Settings → Sessions tab:</p></li>
</ol>

<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Giá trị khuyến nghị</th></tr>
</thead>
<tbody>
<tr><td>Offline Session Idle</td><td>Offline session hết hạn sau idle</td><td>30 ngày</td></tr>
<tr><td>Offline Session Max Limited</td><td>Bật giới hạn max lifetime</td><td>ON</td></tr>
<tr><td>Offline Session Max</td><td>Offline session max lifetime</td><td>60 ngày</td></tr>
</tbody>
</table>

<pre><code># Request offline token
GET /auth?response_type=code&
  client_id=my-app&
  scope=openid offline_access&
  redirect_uri=...

# Token response — refresh_token là offline token
{
  "access_token": "...",
  "expires_in": 300,
  "refresh_expires_in": 0,          // 0 = offline token (không expire theo session)
  "refresh_token": "offline-token",
  "token_type": "Bearer",
  "scope": "openid offline_access"
}

# Sử dụng offline token để refresh
POST /token
grant_type=refresh_token&
refresh_token=offline-token&
client_id=my-app&
client_secret=CLIENT_SECRET</code></pre>

<h3 id="quan-ly-offline-sessions"><strong>3.2 Quản lý Offline Sessions</strong></h3>
<ul>
<li><p>Admin Console → <strong>Sessions</strong> → tab <strong>Offline Sessions</strong>: xem tất cả offline sessions</p></li>
<li><p>User Account Console → <strong>Sessions</strong>: user có thể xem và revoke offline sessions</p></li>
<li><p>Admin REST API: revoke offline sessions programmatically</p></li>
</ul>

<pre><code># Revoke offline session cho user cụ thể
DELETE /admin/realms/my-company/users/{user-id}/consents/{client-id}

# Revoke tất cả sessions (bao gồm offline) cho user
POST /admin/realms/my-company/users/{user-id}/logout</code></pre>

<h2 id="4-token-revocation"><strong>4. Token Revocation</strong></h2>

<h3 id="revoke-token-endpoint"><strong>4.1 Token Revocation Endpoint (RFC 7009)</strong></h3>
<p>Keycloak hỗ trợ Token Revocation endpoint cho phép client thu hồi access token hoặc refresh token:</p>

<pre><code># Revoke refresh token
POST /realms/my-company/protocol/openid-connect/revoke
Content-Type: application/x-www-form-urlencoded

token=REFRESH_TOKEN&
token_type_hint=refresh_token&
client_id=my-app&
client_secret=CLIENT_SECRET

# Revoke access token
POST /realms/my-company/protocol/openid-connect/revoke
Content-Type: application/x-www-form-urlencoded

token=ACCESS_TOKEN&
token_type_hint=access_token&
client_id=my-app&
client_secret=CLIENT_SECRET</code></pre>

<p><strong>Lưu ý:</strong></p>
<ul>
<li><p>Revoke refresh token → invalidate cả refresh token và associated SSO session (tùy cấu hình)</p></li>
<li><p>Revoke access token → với JWT-based tokens, revocation chỉ effective mà resource server thực hiện token introspection hoặc sử dụng Token Revocation Events</p></li>
</ul>

<h3 id="not-before-policy"><strong>4.2 Not-Before Policy</strong></h3>
<p>Thu hồi tất cả tokens issued trước một thời điểm:</p>

<pre><code># Set not-before timestamp — tất cả tokens issued trước thời điểm này bị invalidate
PUT /admin/realms/my-company
{
  "notBefore": 1711800000   // Unix timestamp
}

# Hoặc qua Admin Console:
# Realm Settings → Sessions → "Set to now" → "Push"
# "Push" gửi not-before policy đến tất cả clients có Admin URL</code></pre>

<h3 id="token-introspection"><strong>4.3 Token Introspection (RFC 7662)</strong></h3>
<p>Resource server sử dụng Token Introspection để xác minh token validity và lấy claims:</p>

<pre><code># Introspect token
POST /realms/my-company/protocol/openid-connect/token/introspect
Content-Type: application/x-www-form-urlencoded

token=ACCESS_TOKEN&
client_id=my-resource-server&
client_secret=RESOURCE_SERVER_SECRET

# Response — token hợp lệ
{
  "active": true,
  "sub": "user-uuid",
  "email": "user@example.com",
  "realm_access": { "roles": ["admin"] },
  "client_id": "my-app",
  "token_type": "Bearer",
  "exp": 1711800300,
  "iat": 1711800000,
  "scope": "openid profile email"
}

# Response — token không hợp lệ
{
  "active": false
}</code></pre>

<p><strong>Khi nào dùng Token Introspection vs JWT Verification:</strong></p>
<table>
<thead>
<tr><th>Phương pháp</th><th>Ưu điểm</th><th>Nhược điểm</th></tr>
</thead>
<tbody>
<tr><td>JWT Verification (local)</td><td>Nhanh, không cần gọi Keycloak</td><td>Không real-time, revocation delay</td></tr>
<tr><td>Token Introspection (remote)</td><td>Real-time status, full claims</td><td>Network latency, dependency on Keycloak</td></tr>
</tbody>
</table>

<h2 id="5-dpop"><strong>5. DPoP — Demonstration of Proof-of-Possession (RFC 9449)</strong></h2>

<p>DPoP giải quyết vấn đề <strong>Bearer Token theft</strong> — nếu access token bị đánh cắp, attacker có thể sử dụng ở bất kỳ đâu vì không có binding giữa token và client.</p>

<h3 id="dpop-overview"><strong>5.1 DPoP hoạt động thế nào?</strong></h3>
<p>DPoP ràng buộc token với một <strong>asymmetric key pair cụ thể</strong> do client sở hữu. Client phải chứng minh quyền sở hữu private key mỗi khi sử dụng token.</p>

<pre><code>┌──────────┐                     ┌──────────┐
│  Client  │                     │ Keycloak │
└────┬─────┘                     └────┬─────┘
     │                                │
     │  1. Generate key pair          │
     │     (public + private key)     │
     │                                │
     │  2. Token request +            │
     │     DPoP Proof (signed with    │
     │     private key)               │
     │───────────────────────────────>│
     │                                │
     │  3. DPoP-bound access token    │
     │     (contains cnf.jkt claim)   │
     │<──────────────────────────────│
     │                                │
     │                          ┌──────────┐
     │                          │ Resource │
     │                          │  Server  │
     │                          └────┬─────┘
     │  4. API request +             │
     │     DPoP-bound token +        │
     │     DPoP Proof (new, signed   │
     │     with same private key)    │
     │──────────────────────────────>│
     │                               │
     │  5. Verify: token.cnf.jkt     │
     │     matches DPoP proof's      │
     │     public key                │
     │  6. Response                  │
     │<─────────────────────────────│</code></pre>

<h3 id="dpop-proof-structure"><strong>5.2 DPoP Proof JWT Structure</strong></h3>
<pre><code>// DPoP Proof Header
{
  "typ": "dpop+jwt",
  "alg": "ES256",
  "jwk": {
    "kty": "EC",
    "crv": "P-256",
    "x": "base64url-encoded-x",
    "y": "base64url-encoded-y"
  }
}

// DPoP Proof Payload
{
  "jti": "unique-proof-id",           // Unique ID, ngăn replay attacks
  "htm": "POST",                       // HTTP method
  "htu": "https://keycloak/token",     // HTTP URI (token endpoint)
  "iat": 1711800000,                   // Issued at
  "ath": "access-token-hash"           // Hash of access token (khi gọi resource server)
}</code></pre>

<h3 id="dpop-keycloak"><strong>5.3 Cấu hình DPoP trong Keycloak</strong></h3>
<p>DPoP được enforce thông qua <strong>Client Policies</strong>:</p>

<ol>
<li><p>Tạo <strong>Client Profile</strong>:</p>
<ul>
<li>Realm Settings → Client Policies → Profiles tab → Create</li>
<li>Name: <code>dpop-profile</code></li>
<li>Add Executor: <strong>DPoP Proof Verification</strong></li>
</ul>
</li>
<li><p>Tạo <strong>Client Policy</strong>:</p>
<ul>
<li>Policies tab → Create</li>
<li>Name: <code>dpop-policy</code></li>
<li>Add Condition: <strong>Client Access Type</strong> hoặc <strong>Any Client</strong></li>
<li>Associate Profile: <code>dpop-profile</code></li>
</ul>
</li>
</ol>

<pre><code># Token request với DPoP
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded
DPoP: eyJ0eXAiOiJkcG9wK2p3dCIsImFsZyI6IkVTMjU2IiwiandrIjp7Imt0eSI6Ik...

grant_type=authorization_code&
code=AUTH_CODE&
client_id=my-app&
redirect_uri=http://localhost:3000/callback

# Response — DPoP-bound token
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "token_type": "DPoP",              // Token type = "DPoP" thay vì "Bearer"
  "expires_in": 300
}

# Access token chứa confirmation claim
{
  "cnf": {
    "jkt": "thumbprint-of-client-public-key"   // JWK Thumbprint
  }
}

# Gọi Resource Server với DPoP token
GET /api/resource
Authorization: DPoP eyJhbGciOiJSUzI1NiIs...
DPoP: eyJ0eXAiOiJkcG9wK2p3dCIs...          # DPoP proof mới (htm=GET, htu=API URL)</code></pre>

<h3 id="dpop-nonce"><strong>5.4 DPoP Nonce</strong></h3>
<p>Keycloak hỗ trợ server-issued DPoP nonce để tăng cường bảo mật chống replay attacks:</p>

<pre><code># Server response header khi DPoP nonce required
HTTP/1.1 401 Unauthorized
DPoP-Nonce: server-generated-nonce

# Client PHẢI include nonce trong DPoP proof tiếp theo
{
  "typ": "dpop+jwt",
  "alg": "ES256",
  "jwk": { ... }
}
{
  "jti": "new-unique-id",
  "htm": "POST",
  "htu": "https://keycloak/token",
  "iat": 1711800001,
  "nonce": "server-generated-nonce"    // Server-issued nonce
}</code></pre>

<h3 id="dpop-implementation"><strong>5.5 DPoP Implementation Example (JavaScript)</strong></h3>
<pre><code>// Tạo DPoP key pair
const keyPair = await crypto.subtle.generateKey(
  { name: "ECDSA", namedCurve: "P-256" },
  true,
  ["sign", "verify"]
);

// Export public key cho DPoP proof
const publicKey = await crypto.subtle.exportKey("jwk", keyPair.publicKey);

// Tạo DPoP proof JWT
function createDPoPProof(method, url, accessToken = null, nonce = null) {
  const header = {
    typ: "dpop+jwt",
    alg: "ES256",
    jwk: {
      kty: publicKey.kty,
      crv: publicKey.crv,
      x: publicKey.x,
      y: publicKey.y,
    },
  };

  const payload = {
    jti: crypto.randomUUID(),
    htm: method,
    htu: url,
    iat: Math.floor(Date.now() / 1000),
  };

  // Thêm access token hash khi gọi resource server
  if (accessToken) {
    const encoder = new TextEncoder();
    const data = encoder.encode(accessToken);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    payload.ath = base64url(hashBuffer);
  }

  // Thêm nonce nếu server yêu cầu
  if (nonce) {
    payload.nonce = nonce;
  }

  return signJWT(header, payload, keyPair.privateKey);
}

// Sử dụng
const dpopProof = await createDPoPProof(
  "POST",
  "http://localhost:8080/realms/my-company/protocol/openid-connect/token"
);

const tokenResponse = await fetch(tokenEndpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    DPoP: dpopProof,
  },
  body: "grant_type=authorization_code&code=AUTH_CODE&...",
});</code></pre>

<h2 id="6-client-policies-token"><strong>6. Client Policies cho Token Security</strong></h2>

<p>Client Policies cho phép enforce các security requirements liên quan đến tokens:</p>

<h3 id="token-related-executors"><strong>6.1 Token-related Executors</strong></h3>
<table>
<thead>
<tr><th>Executor</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>DPoP Proof Verification</td><td>Bắt buộc DPoP cho token requests</td></tr>
<tr><td>Holder-of-key Enforcer</td><td>Bắt buộc token binding (MTLS hoặc DPoP)</td></tr>
<tr><td>Secure Signing Algorithm</td><td>Chỉ cho phép algorithms an toàn (RS256, ES256,...)</td></tr>
<tr><td>PKCE Enforcer</td><td>Bắt buộc PKCE cho authorization code flow</td></tr>
<tr><td>Confidential Client Enforcer</td><td>Bắt buộc client authentication</td></tr>
<tr><td>Secure Response Type</td><td>Chỉ cho phép response types an toàn</td></tr>
<tr><td>Reject Implicit Grant</td><td>Không cho phép implicit grant</td></tr>
</tbody>
</table>

<pre><code># Ví dụ: Policy enforce DPoP + PKCE + Secure Algorithm
Profile: high-security-profile
  Executors:
    - DPoP Proof Verification
    - PKCE Enforcer (S256 only)
    - Secure Signing Algorithm (RS256, ES256)
    - Reject Implicit Grant
    - Confidential Client Enforcer

Policy: high-security-policy
  Conditions:
    - Client Role: has role "high-security"
  Profiles:
    - high-security-profile</code></pre>

<h2 id="7-thuc-hanh"><strong>7. Bài tập thực hành</strong></h2>

<h3 id="lab-1"><strong>Lab 1: Client Scopes</strong></h3>
<ol>
<li><p>Tạo Client Scope <code>organization</code> với mappers: org_id, org_name, org_role</p></li>
<li><p>Gán scope cho client trước tiên là Default, sau đó đổi sang Optional</p></li>
<li><p>Test: Request token không có scope parameter → không có org claims</p></li>
<li><p>Test: Request token với <code>scope=openid organization</code> → có org claims</p></li>
<li><p>Sử dụng <strong>Evaluate</strong> tool để preview token</p></li>
</ol>

<h3 id="lab-2"><strong>Lab 2: Token Lifecycle</strong></h3>
<ol>
<li><p>Cấu hình Access Token Lifespan = 1 phút</p></li>
<li><p>Bật Revoke Refresh Token, Refresh Token Max Reuse = 0</p></li>
<li><p>Lấy token → chờ 1 phút → gọi API → nhận 401</p></li>
<li><p>Refresh token → nhận token mới → gọi API → thành công</p></li>
<li><p>Thử dùng refresh token cũ → nhận error (đã bị revoke)</p></li>
</ol>

<h3 id="lab-3"><strong>Lab 3: Offline Access</strong></h3>
<ol>
<li><p>Gán scope <code>offline_access</code> cho client</p></li>
<li><p>Lấy token với <code>scope=openid offline_access</code></p></li>
<li><p>Kiểm tra <code>refresh_expires_in</code> = 0 (offline token)</p></li>
<li><p>Restart Keycloak → sử dụng offline token để refresh → vẫn hoạt động</p></li>
<li><p>Xem offline sessions trong Admin Console</p></li>
</ol>

<h3 id="lab-4"><strong>Lab 4: DPoP</strong></h3>
<ol>
<li><p>Tạo Client Policy enforce DPoP cho client <code>dpop-client</code></p></li>
<li><p>Generate key pair, tạo DPoP proof JWT</p></li>
<li><p>Request token với DPoP header → nhận DPoP-bound token</p></li>
<li><p>Gọi Resource Server với token nhưng <strong>không có</strong> DPoP proof → resource server reject</p></li>
<li><p>Gọi Resource Server với token <strong>và</strong> DPoP proof → thành công</p></li>
</ol>

<h3 id="lab-5"><strong>Lab 5: Token Revocation</strong></h3>
<ol>
<li><p>Lấy access token và refresh token</p></li>
<li><p>Revoke refresh token qua revocation endpoint</p></li>
<li><p>Thử refresh → nhận error</p></li>
<li><p>Set Not-Before policy qua Admin Console → Push</p></li>
<li><p>Thử dùng access token cũ → token introspection trả về <code>active=false</code></p></li>
</ol>
