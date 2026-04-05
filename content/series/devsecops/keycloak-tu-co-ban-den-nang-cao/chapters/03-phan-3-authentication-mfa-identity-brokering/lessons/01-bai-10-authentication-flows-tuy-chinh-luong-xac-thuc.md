---
id: 019d8b30-b110-7001-c001-e0c5f8100110
title: 'Bài 10: Authentication Flows - Tùy chỉnh luồng xác thực'
slug: bai-10-authentication-flows-tuy-chinh-luong-xac-thuc
description: >-
  Hiểu Authentication Flows trong Keycloak, Browser Flow, Direct Grant Flow,
  Registration Flow, Reset Credentials Flow, First Broker Login Flow.
  Tạo custom flows, thêm executions và sub-flows, conditional authenticators
  (Condition - sub-flow executed, Condition - client scope), Step-up
  Authentication, ACR to Level of Authentication (LoA) mapping
  và session limits.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 10
section_title: "Phần 3: Authentication, MFA và Identity Brokering"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9250" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9250)"/>

  <!-- Decorations -->
  <g>
    <circle cx="645" cy="185" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="690" cy="150" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="735" cy="115" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="780" cy="80" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="825" cy="45" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="235" x2="1100" y2="315" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="265" x2="1050" y2="335" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1010.9807621135332,170 1010.9807621135332,200 985,215 959.0192378864668,200 959.0192378864668,170 985,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Bài 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 10: Authentication Flows - Tùy chỉnh</tspan>
      <tspan x="60" dy="42">luồng xác thực</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Authentication, MFA và Identity Brokering</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-authentication-flows-tong-quan"><strong>1. Authentication Flows — Tổng quan</strong></h2>

<p>Authentication Flow trong Keycloak là <strong>chuỗi các bước xác thực</strong> mà user phải trải qua khi đăng nhập, đăng ký, hoặc thực hiện các hành động bảo mật. Mỗi flow bao gồm các <strong>executions</strong> (authenticators) được sắp xếp theo thứ tự và có thể lồng nhau qua <strong>sub-flows</strong>.</p>

<p>Để xem và quản lý flows, vào <strong>Admin Console → Authentication → Flows</strong>.</p>

<h3 id="11-built-in-flows"><strong>1.1 Built-in Authentication Flows</strong></h3>

<p>Keycloak cung cấp sẵn các flows mặc định:</p>

<table>
<thead>
<tr><th>Flow</th><th>Mô tả</th><th>Khi nào được trigger</th></tr>
</thead>
<tbody>
<tr><td><strong>Browser Flow</strong></td><td>Luồng đăng nhập qua browser</td><td>User truy cập ứng dụng lần đầu hoặc session hết hạn</td></tr>
<tr><td><strong>Direct Grant Flow</strong></td><td>Xác thực trực tiếp bằng username/password (Resource Owner Password)</td><td>API call với grant_type=password</td></tr>
<tr><td><strong>Registration Flow</strong></td><td>Luồng đăng ký tài khoản mới</td><td>User click "Register" trên login page</td></tr>
<tr><td><strong>Reset Credentials Flow</strong></td><td>Luồng đặt lại mật khẩu</td><td>User click "Forgot Password"</td></tr>
<tr><td><strong>First Broker Login Flow</strong></td><td>Luồng xử lý lần đầu đăng nhập qua Identity Provider</td><td>User đăng nhập qua social login lần đầu</td></tr>
<tr><td><strong>Docker Authentication Flow</strong></td><td>Xác thực cho Docker registry</td><td>Docker client pull/push images</td></tr>
<tr><td><strong>HTTP Challenge Flow</strong></td><td>Xác thực qua HTTP headers</td><td>Non-browser clients (Kerberos, X.509)</td></tr>
</tbody>
</table>

<h3 id="12-flow-types"><strong>1.2 Flow Types</strong></h3>

<p>Mỗi flow có thể chứa các loại phần tử sau:</p>

<table>
<thead>
<tr><th>Type</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td><strong>Authenticator</strong></td><td>Một bước xác thực cụ thể (ví dụ: Username Password Form)</td></tr>
<tr><td><strong>Sub-flow</strong></td><td>Flow con chứa nhiều authenticators — cho phép tạo logic phức tạp</td></tr>
<tr><td><strong>Form</strong></td><td>Hiển thị form cho user nhập thông tin (username, password, OTP...)</td></tr>
</tbody>
</table>

<h2 id="2-browser-flow-chi-tiet"><strong>2. Browser Flow — Chi tiết</strong></h2>

<p>Browser Flow mặc định có cấu trúc như sau:</p>

<pre><code>Browser Flow
├── Cookie (Alternative)              → Kiểm tra SSO session cookie
├── Kerberos (Disabled)               → Xác thực Kerberos (tắt mặc định)
├── Identity Provider Redirector (Alternative) → Redirect đến IdP nếu có
└── Forms (Alternative)               → Sub-flow xử lý form login
    ├── Username Password Form (Required) → Nhập username + password
    └── Browser - Conditional OTP (Conditional) → Sub-flow OTP
        ├── Condition - User Configured (Required) → Kiểm tra user đã setup OTP
        └── OTP Form (Required)           → Nhập mã OTP</code></pre>

<p><strong>Cách hoạt động:</strong></p>

<ol>
<li><strong>Cookie</strong>: Nếu user đã có session cookie hợp lệ → skip toàn bộ, đăng nhập thành công</li>
<li><strong>Kerberos</strong>: Disabled mặc định — nếu enabled sẽ thử Kerberos ticket</li>
<li><strong>Identity Provider Redirector</strong>: Nếu có <code>kc_idp_hint</code> → redirect đến IdP đó</li>
<li><strong>Forms</strong>: Hiển thị login form
    <ul>
    <li>Yêu cầu username + password</li>
    <li>Nếu user đã cấu hình OTP → yêu cầu nhập OTP code</li>
    </ul>
</li>
</ol>

<h3 id="21-execution-requirements"><strong>2.1 Execution Requirements</strong></h3>

<p>Mỗi execution trong flow có một <strong>requirement</strong> xác định hành vi:</p>

<table>
<thead>
<tr><th>Requirement</th><th>Mô tả</th><th>Khi nào sử dụng</th></tr>
</thead>
<tbody>
<tr><td><strong>Required</strong></td><td>Bắt buộc phải thực hiện và thành công</td><td>Username/Password, OTP khi đã cấu hình</td></tr>
<tr><td><strong>Alternative</strong></td><td>Một trong các alternatives thành công là đủ</td><td>Cookie HOẶC Forms — chỉ cần 1 pass</td></tr>
<tr><td><strong>Conditional</strong></td><td>Sub-flow chỉ thực thi khi điều kiện đúng</td><td>Conditional OTP — chỉ yêu cầu OTP nếu user đã setup</td></tr>
<tr><td><strong>Disabled</strong></td><td>Bỏ qua hoàn toàn</td><td>Tạm tắt một bước mà không xóa</td></tr>
</tbody>
</table>

<p><strong>Quy tắc quan trọng:</strong></p>
<ul>
<li>Nếu tất cả executions trong flow là <strong>Alternative</strong> → chỉ cần <strong>1 cái pass</strong></li>
<li>Nếu có ít nhất 1 <strong>Required</strong> → tất cả Required phải pass, Alternative bị bỏ qua</li>
<li><strong>Conditional</strong> thường dùng với sub-flow: bước đầu tiên là condition checker, các bước sau là authenticators</li>
</ul>

<h2 id="3-tao-custom-authentication-flow"><strong>3. Tạo Custom Authentication Flow</strong></h2>

<p>Built-in flows không thể chỉnh sửa trực tiếp. Bạn cần <strong>duplicate</strong> rồi customise.</p>

<h3 id="31-duplicate-va-chinh-sua"><strong>3.1 Duplicate và Chỉnh sửa</strong></h3>

<ol>
<li>Vào <strong>Authentication → Flows</strong></li>
<li>Chọn flow muốn copy, ví dụ <code>Browser</code></li>
<li>Click <strong>Action → Duplicate</strong></li>
<li>Đặt tên mới: <code>My Custom Browser Flow</code></li>
<li>Flow mới sẽ xuất hiện với toàn bộ executions giống bản gốc</li>
</ol>

<h3 id="32-them-execution"><strong>3.2 Thêm Execution</strong></h3>

<p>Sau khi duplicate, bạn có thể thêm/xóa/sắp xếp lại executions:</p>

<ol>
<li>Trong custom flow, click <strong>"Add step"</strong></li>
<li>Chọn authenticator từ danh sách:
    <ul>
    <li><code>Username Password Form</code> — Form nhập username + password</li>
    <li><code>OTP Form</code> — Form nhập OTP code</li>
    <li><code>Cookie</code> — Kiểm tra session cookie</li>
    <li><code>Identity Provider Redirector</code> — Redirect đến external IdP</li>
    <li><code>Deny Access</code> — Từ chối truy cập</li>
    <li><code>Allow Access</code> — Cho phép truy cập</li>
    <li><code>Username Form</code> — Chỉ nhập username (tách riêng password)</li>
    <li><code>Password Form</code> — Chỉ nhập password</li>
    <li><code>WebAuthn Authenticator</code> — Xác thực bằng security key</li>
    <li><code>WebAuthn Passwordless Authenticator</code> — Xác thực không mật khẩu</li>
    </ul>
</li>
<li>Đặt requirement phù hợp (Required, Alternative, Conditional, Disabled)</li>
</ol>

<h3 id="33-them-sub-flow"><strong>3.3 Thêm Sub-flow</strong></h3>

<p>Sub-flow cho phép nhóm nhiều executions lại, tạo logic phức tạp hơn:</p>

<pre><code>My Custom Browser Flow
├── Cookie (Alternative)
├── Identity Provider Redirector (Alternative)
└── My Login Forms (Alternative)              ← Sub-flow
    ├── Username Password Form (Required)
    └── MFA Sub-flow (Conditional)            ← Sub-flow lồng nhau
        ├── Condition - User Configured (Required)
        ├── OTP Form (Alternative)            ← Cho chọn OTP...
        └── WebAuthn Authenticator (Alternative) ← ...hoặc Security Key</code></pre>

<p><strong>Cách thêm sub-flow:</strong></p>
<ol>
<li>Click <strong>"Add sub-flow"</strong></li>
<li>Đặt tên, ví dụ: <code>MFA Sub-flow</code></li>
<li>Set requirement: <code>Conditional</code></li>
<li>Thêm executions vào sub-flow</li>
</ol>

<h2 id="4-conditional-authenticators"><strong>4. Conditional Authenticators</strong></h2>

<p>Conditional authenticators cho phép <strong>kiểm tra điều kiện</strong> trước khi thực thi sub-flow. Nếu điều kiện không thoả → toàn bộ sub-flow bị bỏ qua.</p>

<h3 id="41-cac-condition-co-san"><strong>4.1 Các Condition có sẵn</strong></h3>

<table>
<thead>
<tr><th>Condition</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td><strong>Condition - User Configured</strong></td><td>User đã cấu hình credential tương ứng (OTP, WebAuthn...)</td></tr>
<tr><td><strong>Condition - User Role</strong></td><td>User có role cụ thể</td></tr>
<tr><td><strong>Condition - User Attribute</strong></td><td>User có attribute cụ thể với giá trị mong muốn</td></tr>
<tr><td><strong>Condition - Client Scope</strong></td><td>Request có chứa scope cụ thể (ví dụ: <code>acr_values</code>)</td></tr>
<tr><td><strong>Condition - Sub-flow Executed</strong></td><td>Sub-flow trước đó đã được thực thi thành công</td></tr>
</tbody>
</table>

<h3 id="42-vi-du-conditional-otp-theo-role"><strong>4.2 Ví dụ: Conditional OTP theo Role</strong></h3>

<p>Yêu cầu OTP chỉ cho users có role <code>admin</code>:</p>

<pre><code>My Custom Browser Flow
├── Cookie (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    └── Admin OTP Sub-flow (Conditional)
        ├── Condition - User Role (Required)    → Config: role = "admin"
        └── OTP Form (Required)</code></pre>

<p><strong>Cấu hình Condition - User Role:</strong></p>
<ol>
<li>Thêm <code>Condition - User Role</code> vào sub-flow</li>
<li>Click biểu tượng ⚙️ (Settings) bên cạnh condition</li>
<li>Nhập:
    <ul>
    <li><strong>Alias</strong>: <code>Check Admin Role</code></li>
    <li><strong>User role</strong>: <code>admin</code> (hoặc <code>realm-management.manage-users</code> cho client role)</li>
    <li><strong>Negate output</strong>: <code>Off</code> (On nếu muốn áp dụng cho user KHÔNG có role)</li>
    </ul>
</li>
</ol>

<h3 id="43-condition-client-scope"><strong>4.3 Condition - Client Scope</strong></h3>

<p>Yêu cầu MFA khi client request scope đặc biệt:</p>

<pre><code># Authorization request yêu cầu MFA
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  scope=openid profile mfa-required&
  response_type=code&
  redirect_uri=https://myapp.example.com/callback</code></pre>

<pre><code>My Custom Browser Flow
├── Cookie (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    └── MFA When Requested (Conditional)
        ├── Condition - Client Scope (Required)  → Config: scope = "mfa-required"
        └── OTP Form (Required)</code></pre>

<h2 id="5-step-up-authentication-va-loa"><strong>5. Step-up Authentication và Level of Authentication (LoA)</strong></h2>

<p>Step-up Authentication cho phép yêu cầu <strong>mức xác thực cao hơn</strong> cho các hành động nhạy cảm, mà không bắt user xác thực lại hoàn toàn.</p>

<h3 id="51-acr-va-loa-mapping"><strong>5.1 ACR và LoA Mapping</strong></h3>

<p><strong>ACR (Authentication Context Class Reference)</strong> là claim trong ID Token cho biết <strong>mức độ xác thực</strong> đã được thực hiện. Keycloak map ACR values sang <strong>Level of Authentication (LoA)</strong> — một số nguyên.</p>

<p><strong>Cấu hình ACR to LoA mapping:</strong></p>
<ol>
<li>Vào <strong>Authentication → Flows</strong></li>
<li>Mở flow đang sử dụng (ví dụ: Browser Flow)</li>
<li>Mỗi sub-flow có thể gán một <strong>LoA level</strong></li>
</ol>

<pre><code>My Step-up Browser Flow
├── Cookie (Alternative)                          → LoA: không set
└── Login Forms (Alternative)
    ├── Username Password Form (Required)         → LoA Level 1
    └── Step-up MFA (Conditional)
        ├── Condition - Level of Authentication (Required)
        └── OTP Sub-flow (Conditional)            → LoA Level 2
            ├── Condition - User Configured (Required)
            └── OTP Form (Required)</code></pre>

<p><strong>Default LoA mapping (Authentication → Flows → gear icon):</strong></p>

<pre><code># Trong Realm Settings → General → ACR to LoA Mapping:
# Hoặc cấu hình trong flow
{
  "acr_to_loa_mapping": {
    "urn:keycloak:loa:1": 1,    // Password only
    "urn:keycloak:loa:2": 2,    // Password + OTP
    "urn:keycloak:loa:3": 3,    // Password + Security Key
    "gold": 2,                   // Custom ACR value
    "platinum": 3                // Custom ACR value
  }
}</code></pre>

<h3 id="52-request-step-up"><strong>5.2 Request Step-up Authentication</strong></h3>

<p>Client yêu cầu LoA cụ thể qua <code>acr_values</code> hoặc <code>claims</code> parameter:</p>

<pre><code># Sử dụng acr_values (voluntary — không bắt buộc)
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  scope=openid&
  acr_values=gold&
  response_type=code&
  redirect_uri=https://myapp.example.com/callback

# Sử dụng claims parameter (essential — bắt buộc LoA)
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  scope=openid&
  claims={"id_token":{"acr":{"essential":true,"values":["gold"]}}}&
  response_type=code&
  redirect_uri=https://myapp.example.com/callback</code></pre>

<p><strong>Kết quả trong ID Token:</strong></p>

<pre><code>{
  "acr": "gold",
  "sub": "user-123",
  "iss": "https://keycloak.example.com/realms/myrealm",
  ...
}</code></pre>

<h3 id="53-loa-trong-token"><strong>5.3 Kiểm tra LoA trong ứng dụng</strong></h3>

<pre><code class="language-java">// Spring Security — kiểm tra ACR level
@GetMapping("/sensitive-action")
public ResponseEntity&lt;?&gt; sensitiveAction(
        @AuthenticationPrincipal OidcUser user) {
    
    String acr = user.getIdToken().getClaimAsString("acr");
    
    if (!"gold".equals(acr)) {
        // Redirect user để step-up authentication
        String stepUpUrl = keycloakBaseUrl + 
            "/realms/myrealm/protocol/openid-connect/auth" +
            "?client_id=my-app" +
            "&scope=openid" +
            "&acr_values=gold" + 
            "&prompt=login" +
            "&response_type=code" +
            "&redirect_uri=" + redirectUri;
        
        return ResponseEntity.status(302)
            .header("Location", stepUpUrl)
            .build();
    }
    
    return ResponseEntity.ok("Sensitive data here");
}</code></pre>

<h2 id="6-direct-grant-flow"><strong>6. Direct Grant Flow</strong></h2>

<p>Direct Grant Flow xử lý <code>grant_type=password</code> — xác thực trực tiếp không qua browser:</p>

<pre><code>Direct Grant Flow (mặc định)
├── Username Validation (Required)    → Kiểm tra username tồn tại
├── Password (Required)               → Verify password
└── Direct Grant - Conditional OTP (Conditional)
    ├── Condition - User Configured (Required)
    └── OTP (Required)</code></pre>

<pre><code class="language-bash"># Ví dụ: Direct Grant request
curl -X POST \
  https://keycloak.example.com/realms/myrealm/protocol/openid-connect/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=password' \
  -d 'client_id=my-backend' \
  -d 'client_secret=my-secret' \
  -d 'username=user@example.com' \
  -d 'password=user-password' \
  -d 'totp=123456'    # Nếu user đã setup OTP</code></pre>

<blockquote>
<p>⚠️ <strong>Lưu ý</strong>: Direct Grant (Resource Owner Password Credentials) không được khuyến khích trong production. Nên sử dụng Authorization Code Flow + PKCE thay thế.</p>
</blockquote>

<h2 id="7-registration-flow"><strong>7. Registration Flow</strong></h2>

<p>Registration Flow kiểm soát quá trình đăng ký tài khoản mới:</p>

<pre><code>Registration Flow (mặc định)
└── Registration Form (Required)
    ├── Registration User Profile (Required)  → Nhập thông tin profile
    ├── Password Validation (Required)        → Nhập + confirm password
    └── Recaptcha (Disabled)                  → reCAPTCHA (tắt mặc định)</code></pre>

<h3 id="71-bat-registration"><strong>7.1 Bật Registration</strong></h3>

<ol>
<li>Vào <strong>Realm Settings → Login</strong></li>
<li>Bật <strong>User registration</strong>: On</li>
<li>Tuỳ chọn: Bật <strong>Email as username</strong> để user dùng email làm username</li>
</ol>

<h3 id="72-custom-registration-flow"><strong>7.2 Custom Registration Flow</strong></h3>

<pre><code>My Registration Flow
└── Registration Form (Required)
    ├── Registration User Profile (Required)
    ├── Password Validation (Required)
    ├── Recaptcha (Required)                → Bật reCAPTCHA
    └── Terms and Conditions (Required)     → Yêu cầu đồng ý điều khoản</code></pre>

<p><strong>Cấu hình reCAPTCHA:</strong></p>
<ol>
<li>Đăng ký Google reCAPTCHA v3 tại <a href="https://www.google.com/recaptcha/admin">https://www.google.com/recaptcha/admin</a></li>
<li>Trong flow, click ⚙️ bên cạnh <code>Recaptcha</code></li>
<li>Nhập:
    <ul>
    <li><strong>Recaptcha Site Key</strong>: <code>your-site-key</code></li>
    <li><strong>Recaptcha Secret</strong>: <code>your-secret-key</code></li>
    <li><strong>Use Recaptcha.net</strong>: On (nếu cần cho China)</li>
    </ul>
</li>
</ol>

<h2 id="8-reset-credentials-flow"><strong>8. Reset Credentials Flow</strong></h2>

<p>Flow xử lý quá trình đặt lại mật khẩu:</p>

<pre><code>Reset Credentials Flow (mặc định)
├── Choose User (Required)                → User nhập username/email
├── Send Reset Email (Required)           → Gửi email reset link
├── Reset Password (Required)             → Form nhập mật khẩu mới
└── Reset - Conditional OTP (Conditional) → OTP nếu đã cấu hình
    ├── Condition - User Configured (Required)
    └── Reset OTP (Required)</code></pre>

<h2 id="9-session-limits"><strong>9. Session Limits</strong></h2>

<p>Keycloak cho phép giới hạn số lượng sessions đồng thời mỗi user.</p>

<h3 id="91-cau-hinh-session-limits"><strong>9.1 Cấu hình Session Limits trong Authentication Flow</strong></h3>

<p>Thêm <code>User Session Limits</code> authenticator vào flow:</p>

<pre><code>My Custom Browser Flow
├── Cookie (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    ├── Browser - Conditional OTP (Conditional)
    │   ├── Condition - User Configured (Required)
    │   └── OTP Form (Required)
    └── User Session Limits (Required)</code></pre>

<p><strong>Cấu hình User Session Limits:</strong></p>
<ol>
<li>Click ⚙️ bên cạnh <code>User Session Limits</code></li>
<li>Cấu hình:
    <ul>
    <li><strong>Max Realm Sessions</strong>: Tổng số sessions tối đa trong realm (ví dụ: <code>3</code>)</li>
    <li><strong>Max Client Sessions</strong>: Số sessions tối đa cho 1 client (ví dụ: <code>1</code>)</li>
    <li><strong>Behavior when limit reached</strong>:
        <ul>
        <li><code>Deny new session</code> — Từ chối đăng nhập mới</li>
        <li><code>Terminate oldest session</code> — Đá session cũ nhất</li>
        </ul>
    </li>
    <li><strong>Error message</strong>: Custom message khi bị deny (ví dụ: <code>"Bạn đã đạt giới hạn phiên đăng nhập"</code>)</li>
    </ul>
</li>
</ol>

<h2 id="10-bind-flow-vao-realm-va-client"><strong>10. Bind Flow vào Realm và Client</strong></h2>

<h3 id="101-bind-flow-cho-realm"><strong>10.1 Bind Flow cho Realm</strong></h3>

<p>Sau khi tạo custom flow, bind nó làm flow mặc định cho realm:</p>

<ol>
<li>Vào <strong>Authentication → Flows</strong></li>
<li>Click tab <strong>"Bindings"</strong> (hoặc <strong>Required Actions</strong>) </li>
<li>Chọn flow cho từng binding:
    <ul>
    <li><strong>Browser Flow</strong>: <code>My Custom Browser Flow</code></li>
    <li><strong>Direct Grant Flow</strong>: <code>Direct Grant</code></li>
    <li><strong>Registration Flow</strong>: <code>My Registration Flow</code></li>
    <li><strong>Reset Credentials Flow</strong>: <code>Reset Credentials</code></li>
    </ul>
</li>
</ol>

<h3 id="102-bind-flow-cho-client"><strong>10.2 Bind Flow cho Client cụ thể</strong></h3>

<p>Bạn có thể override realm flow cho từng client:</p>

<ol>
<li>Vào <strong>Clients → chọn client</strong></li>
<li>Tab <strong>"Advanced"</strong></li>
<li>Mục <strong>"Authentication Flow Overrides"</strong>:
    <ul>
    <li><strong>Browser Flow</strong>: Chọn flow khác realm default</li>
    <li><strong>Direct Grant Flow</strong>: Chọn flow khác</li>
    </ul>
</li>
</ol>

<h2 id="11-dynamic-flow-selection-voi-client-policies"><strong>11. Dynamic Flow Selection với Client Policies</strong></h2>

<p>Từ Keycloak 25+, bạn có thể sử dụng <strong>Client Policies</strong> để tự động chọn authentication flow dựa trên client properties.</p>

<h3 id="111-tao-client-policy"><strong>11.1 Tạo Client Policy cho Flow Selection</strong></h3>

<ol>
<li>Vào <strong>Realm Settings → Client Policies → Policies</strong></li>
<li>Tạo policy mới: <code>Secure Clients MFA Policy</code></li>
<li>Thêm <strong>Condition</strong>:
    <ul>
    <li>Type: <code>client-scopes</code></li>
    <li>Scopes: <code>["mfa-required"]</code></li>
    </ul>
</li>
<li>Thêm <strong>Profile</strong> (từ Client Profiles):
    <ul>
    <li>Profile executor: override browser flow</li>
    </ul>
</li>
</ol>

<pre><code class="language-json">// Client Policy — ví dụ export JSON
{
  "policies": [
    {
      "name": "Secure Clients MFA Policy",
      "description": "Enforce MFA for clients with mfa-required scope",
      "enabled": true,
      "conditions": [
        {
          "condition": "client-scopes",
          "configuration": {
            "scopes": ["mfa-required"],
            "type": "DEFAULT"
          }
        }
      ],
      "profiles": ["mfa-enforced-profile"]
    }
  ]
}</code></pre>

<h2 id="12-export-import-flows"><strong>12. Export/Import Authentication Flows</strong></h2>

<p>Authentication flows được bao gồm trong realm export:</p>

<pre><code class="language-bash"># Export realm bao gồm flows
/opt/keycloak/bin/kc.sh export \
  --dir /opt/keycloak/data/export \
  --realm myrealm

# Trong file realm-export.json, flows nằm ở:
# "authenticationFlows": [...]
# "authenticationExecutions": [...]</code></pre>

<p><strong>Partial import via Admin REST API:</strong></p>

<pre><code class="language-bash"># Lấy danh sách flows
curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/authentication/flows" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq '.[].alias'

# Export 1 flow cụ thể
FLOW_ID=$(curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/authentication/flows" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | \
  jq -r '.[] | select(.alias=="My Custom Browser Flow") | .id')

curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/authentication/flows/$FLOW_ID/executions" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq .</code></pre>

<h2 id="13-tom-tat"><strong>13. Tóm tắt</strong></h2>

<table>
<thead>
<tr><th>Khái niệm</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td><strong>Authentication Flow</strong></td><td>Chuỗi bước xác thực — có thể lồng nhau qua sub-flows</td></tr>
<tr><td><strong>Execution Requirements</strong></td><td>Required, Alternative, Conditional, Disabled</td></tr>
<tr><td><strong>Conditional Authenticators</strong></td><td>Kiểm tra điều kiện trước khi thực thi sub-flow</td></tr>
<tr><td><strong>Step-up Authentication</strong></td><td>Yêu cầu LoA cao hơn cho hành động nhạy cảm</td></tr>
<tr><td><strong>ACR to LoA Mapping</strong></td><td>Map ACR values sang numeric levels</td></tr>
<tr><td><strong>Session Limits</strong></td><td>Giới hạn concurrent sessions per user</td></tr>
<tr><td><strong>Flow Binding</strong></td><td>Bind flows ở realm level hoặc per-client override</td></tr>
</tbody>
</table>
