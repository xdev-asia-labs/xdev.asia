---
id: 019d8b30-b110-7001-c001-e0c5f8100110
title: 'Lesson 10: Authentication Flows - Customize authentication flows'
slug: bai-10-authentication-flows-tuy-chinh-luong-xac-thuc
description: Understand Authentication Flows in Keycloak, Browser Flow, Direct Grant Flow, Registration Flow, Reset Credentials Flow, First Broker Login Flow. Create custom flows, add executions and sub-flows, conditional authenticators (Condition - sub-flow executed, Condition - client scope), Step-up Authentication, ACR to Level of Authentication (LoA) mapping and session limits.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 10
section_title: 'Part 3: Authentication, MFA and Identity Brokering'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak from Basic to Advanced
  slug: keycloak-tu-co-ban-den-nang-cao
locale: en
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
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Lesson 10</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 10: Authentication Flows - Customization</tspan>
<tspan x="60" dy="42">authentication flow</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Authentication, MFA and Identity Brokering</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-authentication-flows-tong-quan"><strong>1. Authentication Flows — Overview</strong></h2>

<p>Authentication Flow in Keycloak is the <strong>sequence of authentication steps</strong> that a user must go through when logging in, registering, or performing security actions. Each flow consists of ordered <strong>executions</strong> (authenticators) and can be nested via <strong>sub-flows</strong>.</p>

<p>To view and manage flows, go to <strong>Admin Console → Authentication → Flows</strong>.</p>

<h3 id="11-built-in-flows"><strong>1.1 Built-in Authentication Flows</strong></h3>

<p>Keycloak provides default flows:</p>

<table>
<thead>
<tr><th>Flow</th><th>Description</th><th>When is triggered</th></tr>
</thead>
<tbody>
<tr><td><strong>Browser Flow</strong></td><td>Browser login flow</td><td>User accessing application for the first time or session expired</td></tr>
<tr><td><strong>Direct Grant Flow</strong></td><td>Direct authentication with username/password (Resource Owner Password)</td><td>API call with grant_type=password</td></tr>
<tr><td><strong>Registration Flow</strong></td><td>New account registration flow</td><td>User clicks "Register" on login page</td></tr>
<tr><td><strong>Reset Credentials Flow</strong></td><td>Reset password flow</td><td>User click "Forgot Password"</td></tr>
<tr><td><strong>First Broker Login Flow</strong></td><td>Flow for handling first login via Identity Provider</td><td>User logging in via social login for the first time</td></tr>
<tr><td><strong>Docker Authentication Flow</strong></td><td>Authentication for Docker registry</td><td>Docker client pull/push images</td></tr>
<tr><td><strong>HTTP Challenge Flow</strong></td><td>Authentication via HTTP headers</td><td>Non-browser clients (Kerberos, X.509)</td></tr>
</tbody>
</table>

<h3 id="12-flow-types"><strong>1.2 Flow Types</strong></h3>

<p>Each flow can contain the following types of elements:</p>

<table>
<thead>
<tr><th>Type</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><strong>Authenticator</strong></td><td>A specific authentication step (for example, Username Password Form)</td></tr>
<tr><td><strong>Sub-flow</strong></td><td>Sub-flow contains multiple authenticators — allowing for complex logic</td></tr>
<tr><td><strong>Form</strong></td><td>Displays a form for the user to enter information (username, password, OTP...)</td></tr>
</tbody>
</table>

<h2 id="2-browser-flow-chi-tiet"><strong>2. Browser Flow — Details</strong></h2>

The default <p>Browser Flow has the following structure:</p>

<pre><code>Browser Flow
├── Cookie (Alternative)              → Kiểm tra SSO session cookie
├── Kerberos (Disabled)               → Xác thực Kerberos (tắt mặc định)
├── Identity Provider Redirector (Alternative) → Redirect đến IdP nếu có
└── Forms (Alternative)               → Sub-flow xử lý form login
    ├── Username Password Form (Required) → Nhập username + password
    └── Browser - Conditional OTP (Conditional) → Sub-flow OTP
        ├── Condition - User Configured (Required) → Kiểm tra user đã setup OTP
        └── OTP Form (Required)           → Nhập mã OTP</code></pre>

<p><strong>How it works:</strong></p>

<ol>
<li><strong>Cookie</strong>: If the user already has a valid session cookie → skip all, login successfully</li>
<li><strong>Kerberos</strong>: Disabled by default — if enabled, try Kerberos ticket</li>
<li><strong>Identity Provider Redirector</strong>: If there is <code>kc_idp_hint</code> → redirect to that IdP</li>
<li><strong>Forms</strong>: Display login form
    <ul>
<li>Requires username + password</li>
<li>If the user has configured OTP → request to enter OTP code</li>
    </ul>
</li>
</ol>

<h3 id="21-execution-requirements"><strong>2.1 Execution Requirements</strong></h3>

<p>Each execution in the flow has a <strong>requirement</strong> that defines the behavior:</p>

<table>
<thead>
<tr><th>Requirement</th><th>Description</th><th>When to use</th></tr>
</thead>
<tbody>
<tr><td><strong>Required</strong></td><td>Required and successful</td><td>Username/Password, OTP when configured</td></tr>
<tr><td><strong>Alternative</strong></td><td>One of the alternatives succeeds enough</td><td>Cookies OR Forms — just 1 pass</td></tr>
<tr><td><strong>Conditional</strong></td><td>Sub-flow only executes when the condition is true</td><td>Conditional OTP — only request OTP if user has setup</td></tr>
<tr><td><strong>Disabled</strong></td><td>Skip completely</td><td>Disable a step without deleting</td></tr>
</tbody>
</table>

<p><strong>Important rule:</strong></p>
<ul>
<li>If all executions in the flow are <strong>Alternative</strong> → only need <strong>1 pass</strong></li>
<li>If there is at least 1 <strong>Required</strong> → all Required must pass, Alternative is ignored</li>
<li><strong>Conditional</strong> is often used with sub-flow: the first step is the condition checker, the following steps are authenticators</li>
</ul>

<h2 id="3-tao-custom-authentication-flow"><strong>3. Create Custom Authentication Flow</strong></h2>

<p>Built-in flows cannot be edited directly. You need <strong>duplicate</strong> then customize.</p>

<h3 id="31-duplicate-va-chinh-sua"><strong>3.1 Duplicate and Edit</strong></h3>

<ol>
<li>Go to <strong>Authentication → Flows</strong></li>
<li>Select the flow you want to copy, for example <code>Browser</code></li>
<li>Click <strong>Action → Duplicate</strong></li>
<li>New name: <code>My Custom Browser Flow</code></li>
<li>The new flow will appear with all executions identical to the original</li>
</ol>

<h3 id="32-them-execution"><strong>3.2 Add Execution</strong></h3>

<p>After duplicating, you can add/delete/reorder executions:</p>

<ol>
<li>Trong custom flow, click <strong>"Add step"</strong></li>
<li>Select authenticator from the list:
    <ul>
<li><code>Username Password Form</code> — Username + password entry form</li>
<li><code>OTP Form</code> — OTP input form code</li>
<li><code>Cookie</code> — Check session cookie</li>
<li><code>Identity Provider Redirector</code> — Redirect to external IdP</li>
<li><code>Deny Access</code> — Deny access</li>
<li><code>Allow Access</code> — Allow access</li>
<li><code>Username Form</code> — Enter only username (separate password)</li>
<li><code>Password Form</code> — Enter only password</li>
<li><code>WebAuthn Authenticator</code> — Authenticate with security key</li>
<li><code>WebAuthn Passwordless Authenticator</code> — Passwordless Authentication</li>
    </ul>
</li>
<li>Set appropriate requirements (Required, Alternative, Conditional, Disabled)</li>
</ol>

<h3 id="33-them-sub-flow"><strong>3.3 Add Sub-flow</strong></h3>

<p>Sub-flow allows grouping multiple executions, creating more complex logic:</p>

<pre><code>My Custom Browser Flow
├── Cookie (Alternative)
├── Identity Provider Redirector (Alternative)
└── My Login Forms (Alternative)              ← Sub-flow
    ├── Username Password Form (Required)
    └── MFA Sub-flow (Conditional)            ← Sub-flow lồng nhau
        ├── Condition - User Configured (Required)
        ├── OTP Form (Alternative)            ← Cho chọn OTP...
        └── WebAuthn Authenticator (Alternative) ← ...hoặc Security Key</code></pre>

<p><strong>How to add sub-flow:</strong></p>
<ol>
<li>Click <strong>"Add sub-flow"</strong></li>
<li>Name, for example: <code>MFA Sub-flow</code></li>
<li>Set requirement: <code>Conditional</code></li>
<li>Add executions to sub-flow</li>
</ol>

<h2 id="4-conditional-authenticators"><strong>4. Conditional Authenticators</strong></h2>

<p>Conditional authenticators allow <strong> to check the condition</strong> before executing the sub-flow. If the condition is not met → the entire sub-flow is skipped.</p>

<h3 id="41-cac-condition-co-san"><strong>4.1 Available Conditions</strong></h3>

<table>
<thead>
<tr><th>Condition</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><strong>Condition - User Configured</strong></td><td>User has configured the corresponding credential (OTP, WebAuthn...)</td></tr>
<tr><td><strong>Condition - User Role</strong></td><td>User has a specific role</td></tr>
<tr><td><strong>Condition - User Attribute</strong></td><td>User has a specific attribute with the desired value</td></tr>
<tr><td><strong>Condition - Client Scope</strong></td><td>Request that contains the specific scope (e.g. <code>acr_values</code>)</td></tr>
<tr><td><strong>Condition - Sub-flow Executed</strong></td><td>The previous sub-flow was executed successfully</td></tr>
</tbody>
</table>

<h3 id="42-vi-du-conditional-otp-theo-role"><strong>4.2 Example: Conditional OTP according to Role</strong></h3>

<p>Request OTP only for users with role <code>admin</code>:</p>

<pre><code>My Custom Browser Flow
├── Cookie (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    └── Admin OTP Sub-flow (Conditional)
        ├── Condition - User Role (Required)    → Config: role = "admin"
        └── OTP Form (Required)</code></pre>

<p><strong>Configuration Condition - User Role:</strong></p>
<ol>
<li>Add <code>Condition - User Role</code> to sub-flow</li>
<li>Click the ⚙️ (Settings) icon next to condition</li>
<li>Enter:
    <ul>
    <li><strong>Alias</strong>: <code>Check Admin Role</code></li>
<li><strong>User role</strong>: <code>admin</code> (or <code>realm-management.manage-users</code> for client role)</li>
<li><strong>Negate output</strong>: <code>Off</code> (On if you want to apply to users who do NOT have roles)</li>
    </ul>
</li>
</ol>

<h3 id="43-condition-client-scope"><strong>4.3 Condition - Client Scope</strong></h3>

<p>Requires MFA when client requests special scope:</p>

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

<h2 id="5-step-up-authentication-va-loa"><strong>5. Step-up Authentication and Level of Authentication (LoA)</strong></h2>

<p>Step-up Authentication allows requiring <strong>a higher level of authentication</strong> for sensitive actions, without forcing the user to completely re-authenticate.</p>

<h3 id="51-acr-va-loa-mapping"><strong>5.1 ACR and Speaker Mapping</strong></h3>

<p><strong>ACR (Authentication Context Class Reference)</strong> is a claim in the ID Token indicating <strong>authentication level</strong> has been performed. Keycloak map ACR values ​​to <strong>Level of Authentication (LoA)</strong> — an integer.</p>

<p><strong>ACR to Speaker mapping configuration:</strong></p>
<ol>
<li>Go to <strong>Authentication → Flows</strong></li>
<li>Open the flow in use (eg: Browser Flow)</li>
<li>Each sub-flow can be assigned a <strong>LoA level</strong></li>
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

<p>Client claims specific LoA via <code>acr_values</code> or <code>claims</code> parameter:</p>

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

<p><strong>Results in Token ID:</strong></p>

<pre><code>{
  "acr": "gold",
  "sub": "user-123",
  "iss": "https://keycloak.example.com/realms/myrealm",
  ...
}</code></pre>

<h3 id="53-loa-trong-token"><strong>5.3 Check the LoA in the application</strong></h3>

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

<p>Direct Grant Flow processes <code>grant_type=password</code> — direct authentication without going through the browser:</p>

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
<p>⚠️ <strong>Note</strong>: Direct Grant (Resource Owner Password Credentials) is not recommended in production. Authorization Code Flow + PKCE should be used instead.</p>
</blockquote>

<h2 id="7-registration-flow"><strong>7. Registration Flow</strong></h2>

<p>Registration Flow controls the new account registration process:</p>

<pre><code>Registration Flow (mặc định)
└── Registration Form (Required)
    ├── Registration User Profile (Required)  → Nhập thông tin profile
    ├── Password Validation (Required)        → Nhập + confirm password
    └── Recaptcha (Disabled)                  → reCAPTCHA (tắt mặc định)</code></pre>

<h3 id="71-bat-registration"><strong>7.1 Enable Registration</strong></h3>

<ol>
<li>Go to <strong>Realm Settings → Login</strong></li>
<li>On <strong>User registration</strong>: On</li>
<li>Optional: Turn on <strong>Email as username</strong> so users can use email as username</li>
</ol>

<h3 id="72-custom-registration-flow"><strong>7.2 Custom Registration Flow</strong></h3>

<pre><code>My Registration Flow
└── Registration Form (Required)
    ├── Registration User Profile (Required)
    ├── Password Validation (Required)
    ├── Recaptcha (Required)                → Bật reCAPTCHA
    └── Terms and Conditions (Required)     → Yêu cầu đồng ý điều khoản</code></pre>

<p><strong>ReCAPTCHA configuration:</strong></p>
<ol>
<li>Sign up for Google reCAPTCHA v3 at <a href="__P0__">https://www.google.com/recaptcha/admin</a></li>
<li>In the flow, click ⚙️ next to <code>Recaptcha</code></li>
<li>Enter:
    <ul>
    <li><strong>Recaptcha Site Key</strong>: <code>your-site-key</code></li>
    <li><strong>Recaptcha Secret</strong>: <code>your-secret-key</code></li>
<li><strong>Use Recaptcha.net</strong>: On (if needed for China)</li>
    </ul>
</li>
</ol>

<h2 id="8-reset-credentials-flow"><strong>8. Reset Credentials Flow</strong></h2>

<p>Flow handles password reset:</p>

<pre><code>Reset Credentials Flow (mặc định)
├── Choose User (Required)                → User nhập username/email
├── Send Reset Email (Required)           → Gửi email reset link
├── Reset Password (Required)             → Form nhập mật khẩu mới
└── Reset - Conditional OTP (Conditional) → OTP nếu đã cấu hình
    ├── Condition - User Configured (Required)
    └── Reset OTP (Required)</code></pre>

<h2 id="9-session-limits"><strong>9. Session Limits</strong></h2>

<p>Keycloak allows limiting the number of concurrent sessions per user.</p>

<h3 id="91-cau-hinh-session-limits"><strong>9.1 Configuring Session Limits in Authentication Flow</strong></h3>

<p>Add <code>User Session Limits</code> authenticator to flow:</p>

<pre><code>My Custom Browser Flow
├── Cookie (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    ├── Browser - Conditional OTP (Conditional)
    │   ├── Condition - User Configured (Required)
    │   └── OTP Form (Required)
    └── User Session Limits (Required)</code></pre>

<p><strong>Configure User Session Limits:</strong></p>
<ol>
<li>Click ⚙️ next to <code>User Session Limits</code></li>
<li>Configuration:
    <ul>
<li><strong>Max Realm Sessions</strong>: Total maximum number of sessions in the realm (eg: <code>3</code>)</li>
<li><strong>Max Client Sessions</strong>: Maximum number of sessions for 1 client (for example: <code>1</code>)</li>
    <li><strong>Behavior when limit reached</strong>:
        <ul>
<li><code>Deny new session</code> — Deny new login</li>
<li><code>Terminate oldest session</code> — Terminate oldest session</li>
        </ul>
    </li>
<li><strong>Error message</strong>: Custom message when denied (eg: <code>"You have reached your login session limit"</code>)</li>
    </ul>
</li>
</ol>

<h2 id="10-bind-flow-vao-realm-va-client"><strong>10. Bind Flow to Realm and Client</strong></h2>

<h3 id="101-bind-flow-cho-realm"><strong>10.1 Bind Flow cho Realm</strong></h3>

<p>After creating the custom flow, bind it as the default flow for realm:</p>

<ol>
<li>Go to <strong>Authentication → Flows</strong></li>
<li>Click tab <strong>"Bindings"</strong> (or <strong>Required Actions</strong>) </li>
<li>Select flow for each binding:
    <ul>
    <li><strong>Browser Flow</strong>: <code>My Custom Browser Flow</code></li>
    <li><strong>Direct Grant Flow</strong>: <code>Direct Grant</code></li>
    <li><strong>Registration Flow</strong>: <code>My Registration Flow</code></li>
    <li><strong>Reset Credentials Flow</strong>: <code>Reset Credentials</code></li>
    </ul>
</li>
</ol>

<h3 id="102-bind-flow-cho-client"><strong>10.2 Bind Flow for specific Client</strong></h3>

<p>You can override realm flow for each client:</p>

<ol>
<li>Go to <strong>Clients → select client</strong></li>
<li>Tab <strong>"Advanced"</strong></li>
<li>Section <strong>"Authentication Flow Overrides"</strong>:
    <ul>
<li><strong>Browser Flow</strong>: Select a flow other than realm default</li>
<li><strong>Direct Grant Flow</strong>: Select another flow</li>
    </ul>
</li>
</ol>

<h2 id="11-dynamic-flow-selection-voi-client-policies"><strong>11. Dynamic Flow Selection with Client Policies</strong></h2>

<p>From Keycloak 25+, you can use <strong>Client Policies</strong> to automatically select authentication flow based on client properties.</p>

<h3 id="111-tao-client-policy"><strong>11.1 Create Client Policy for Flow Selection</strong></h3>

<ol>
<li>Go to <strong>Realm Settings → Client Policies → Policies</strong></li>
<li>Create new policy: <code>Secure Clients MFA Policy</code></li>
<li>Add <strong>Condition</strong>:
    <ul>
    <li>Type: <code>client-scopes</code></li>
    <li>Scopes: <code>["mfa-required"]</code></li>
    </ul>
</li>
<li>Add <strong>Profile</strong> (from Client Profiles):
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

<p>Authentication flows are included in realm export:</p>

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

<h2 id="13-tom-tat"><strong>13. Summary</strong></h2>

<table>
<thead>
<tr><th>Concept</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><strong>Authentication Flow</strong></td><td>Authentication step sequence — can be nested via sub-flows</td></tr>
<tr><td><strong>Execution Requirements</strong></td><td>Required, Alternative, Conditional, Disabled</td></tr>
<tr><td><strong>Conditional Authenticators</strong></td><td>Check conditions before executing sub-flow</td></tr>
<tr><td><strong>Step-up Authentication</strong></td><td>Requires higher LoA for sensitive action</td></tr>
<tr><td><strong>ACR to LoA Mapping</strong></td><td>Map ACR values sang numeric levels</td></tr>
<tr><td><strong>Session Limits</strong></td><td>Concurrent sessions limits per user</td></tr>
<tr><td><strong>Flow Binding</strong></td><td>Bind flows at realm level or per-client override</td></tr>
</tbody>
</table>
