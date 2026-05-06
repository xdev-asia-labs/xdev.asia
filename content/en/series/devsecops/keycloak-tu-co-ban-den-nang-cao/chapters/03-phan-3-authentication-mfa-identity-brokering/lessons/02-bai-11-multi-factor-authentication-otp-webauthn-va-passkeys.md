---
id: 019d8b30-b111-7001-c001-e0c5f8100111
title: 'Lesson 11: Multi-Factor Authentication - OTP, WebAuthn and Passkeys'
slug: bai-11-multi-factor-authentication-otp-webauthn-va-passkeys
description: Configure Two-Factor Authentication with TOTP/HOTP (Google Authenticator, FreeOTP), OTP Policy settings, Recovery Codes. WebAuthn setup (FIDO2 security keys), WebAuthn Passwordless Policy. Passkeys integration (conditional and modal UI), Passkeys registration via AIA, Kerberos authentication and X.509 client certificate authentication.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 11
section_title: 'Part 3: Authentication, MFA and Identity Brokering'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak from Basic to Advanced
  slug: keycloak-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2380" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2380)"/>

  <!-- Decorations -->
  <g>
    <circle cx="945" cy="65" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="790" cy="250" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="635" cy="175" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="980" cy="100" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="825" cy="285" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="135" x2="1100" y2="215" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="165" x2="1050" y2="235" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1010.9807621135332,170 1010.9807621135332,200 985,215 959.0192378864668,200 959.0192378864668,170 985,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 11: Multi-Factor Authentication - OTP,</tspan>
<tspan x="60" dy="42">WebAuthn and Passkeys</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Authentication, MFA and Identity Brokering</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-otp-authentication"><strong>1. OTP Authentication — TOTP and HOTP</strong></h2>

<p>OTP (One-Time Password) is the most popular MFA method. Keycloak supports two types:</p>

<table>
<thead>
<tr><th>Type</th><th>Description</th><th>Algorithm</th></tr>
</thead>
<tbody>
<tr><td><strong>TOTP</strong> (Time-based)</td><td>OTP code changes over time (every 30s)</td><td>RFC 6238</td></tr>
<tr><td><strong>HOTP</strong> (HMAC-based)</td><td>OTP code changes according to counter</td><td>RFC 4226</td></tr>
</tbody>
</table>

<p><strong>TOTP is recommended</strong> for more security — the code expires over time. HOTP is only used when the device does not support accurate clocks.</p>

<h3 id="11-otp-policy"><strong>1.1 OTP Policy Configuration</strong></h3>

<p>Configure OTP Policy at <strong>Authentication → Policies → OTP Policy</strong>:</p>

<table>
<thead>
<tr><th>Setting</th><th>Description</th><th>Default value</th><th>Recommended</th></tr>
</thead>
<tbody>
<tr><td><strong>OTP Type</strong></td><td>TOTP or HOTP</td><td><code>totp</code></td><td><code>totp</code></td></tr>
<tr><td><strong>OTP Hash Algorithm</strong></td><td>Hash Algorithm</td><td><code>SHA1</code></td><td><code>SHA256</code> or <code>SHA512</code></td></tr>
<tr><td><strong>Number of Digits</strong></td><td>Number of OTP digits</td><td><code>6</code></td><td><code>6</code> (best compatible)</td></tr>
<tr><td><strong>Look Ahead Window</strong></td><td>Number of acceptable pre/post codes</td><td><code>1</code></td><td><code>1</code> — increased if the user is prone to time lag</td></tr>
<tr><td><strong>OTP Token Period</strong></td><td>Time to live per token (seconds) — only TOTP</td><td><code>30</code></td><td><code>30</code></td></tr>
<tr><td><strong>Initial Counter</strong></td><td>Initial Counter — only HOTP</td><td><code>0</code></td><td><code>0</code></td></tr>
<tr><td><strong>Supported Applications</strong></td><td>Apps shown in setup instructions</td><td>FreeOTP, Google Authenticator</td><td>Add more apps if needed</td></tr>
</tbody>
</table>

<h3 id="12-setup-google-authenticator"><strong>1.2 Setup OTP with Google Authenticator / FreeOTP</strong></h3>

<p><strong>Step 1: Turn on OTP in Authentication Flow</strong></p>

<p>By default, Browser Flow has <code>Browser - Conditional OTP</code> sub-flow. OTP is only required when the user has set up OTP credential. To <strong>force</strong> all users must set up OTP:</p>

<ol>
<li>Go to <strong>Authentication → Required Actions</strong></li>
<li>Find <strong>Configure OTP</strong></li>
<li>On <strong>Default Action</strong>: On — all new users must set up OTP</li>
<li>Or turn on <strong>Required</strong> in column "Set as default action" to enforce for existing users</li>
</ol>

<p><strong>Step 2: User registers OTP</strong></p>

<p>When user logs in for the first time (or after admin turns on Required Action):</p>

<ol>
<li>Keycloak displays page <strong>"Mobile Authenticator Setup"</strong></li>
<li>User opens Google Authenticator or FreeOTP</li> app
<li>Scan QR code or enter manual key</li>
<li>Enter the confirmation OTP code from app</li>
<li>OTP credential saved for user</li>
</ol>

<p><strong>Step 3: Authenticate OTP</strong></p>

<p>From the next login, after entering username/password, the user must enter the OTP code from the app.</p>

<h3 id="13-quan-ly-otp-credentials"><strong>1.3 Manage OTP Credentials</strong></h3>

<pre><code class="language-bash"># Admin xem OTP credentials của user
curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/credentials" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | \
  jq '.[] | select(.type=="otp")'

# Admin xóa OTP credential (force user setup lại)
curl -X DELETE \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/credentials/$CREDENTIAL_ID" \
  -H "Authorization: Bearer $ADMIN_TOKEN"

# Admin trigger Required Action cho user cụ thể
curl -X PUT \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID" \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "requiredActions": ["CONFIGURE_TOTP"]
  }'</code></pre>

<h2 id="2-recovery-codes"><strong>2. Recovery Codes</strong></h2>

<p>Recovery Codes allow users to restore access when losing their OTP device.</p>

<h3 id="21-bat-recovery-codes"><strong>2.1 Enable Recovery Codes</strong></h3>

<ol>
<li>Go to <strong>Authentication → Required Actions</strong></li>
<li>Find <strong>Recovery Authentication Codes</strong> (if not, need to register)</li>
<li>Enable <strong>Default Action</strong> or <strong>Enabled</strong></li>
</ol>

<p><strong>Enforce Recovery Codes sau OTP setup:</strong></p>

<p>To force users to create recovery codes immediately after setting up OTP, configure Required Actions in the following order:</p>

<ol>
<li><code>CONFIGURE_TOTP</code> — Setup OTP first</li>
<li><code>CONFIGURE_RECOVERY_AUTHN_CODES</code> — Generate recovery codes after</li>
</ol>

<h3 id="22-su-dung-recovery-codes"><strong>2.2 Using Recovery Codes</strong></h3>

<p>When user loses device OTP:</p>

<ol>
<li>At the OTP input screen, click <strong>"Try another way"</strong></li>
<li>Select <strong>"Recovery Code"</strong></li>
<li>Enter one of the saved recovery codes</li>
<li>Each code can only be used <strong> once</strong></li>
<li>After using all the codes, need to regenerate</li>
</ol>

<h2 id="3-webauthn-fido2"><strong>3. WebAuthn (FIDO2) — Security Keys</strong></h2>

<p>WebAuthn allows authentication using <strong>hardware security keys</strong> (YubiKey, Google Titan) or <strong>platform authenticators</strong> (Touch ID, Windows Hello).</p>

<h3 id="31-setup-webauthn"><strong>3.1 Setup WebAuthn trong Browser Flow</strong></h3>

<p><strong>Step 1: Add WebAuthn to Authentication Flow</strong></p>

<ol>
<li>Duplicate Browser Flow → <code>Browser with WebAuthn</code></li>
<li>In the Forms sub-flow, add <code>WebAuthn Authenticator</code></li>
<li>Flow structure:
<pre><code>Browser with WebAuthn
├── Cookie (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    └── WebAuthn MFA (Conditional)
        ├── Condition - User Configured (Required)
        └── WebAuthn Authenticator (Required)</code></pre>
</li>
<li>Bind flow: <strong>Authentication → Bindings → Browser Flow = Browser with WebAuthn</strong></li>
</ol>

<p><strong>Step 2: Turn on Required Action</strong></p>

<ol>
<li>Go to <strong>Authentication → Required Actions</strong></li>
<li>Find <strong>WebAuthn Register</strong> → enable <strong>Default Action</strong></li>
<li>New users will be asked to register security key</li>
</ol>

<h3 id="32-webauthn-policy"><strong>3.2 WebAuthn Policy Configuration</strong></h3>

<p>Configure at <strong>Authentication → Policies → WebAuthn Policy</strong>:</p>

<table>
<thead>
<tr><th>Setting</th><th>Description</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td><strong>Relying Party Entity Name</strong></td><td>Display name for user</td><td><code>Keycloak</code> or company name</td></tr>
<tr><td><strong>Signature Algorithms</strong></td><td>Signature Algorithm</td><td><code>ES256</code> (recommended), <code>RS256</code></td></tr>
<tr><td><strong>Relying Party ID</strong></td><td>Keycloak's domain</td><td><code>keycloak.example.com</code> (or leave blank = auto)</td></tr>
<tr><td><strong>Atestation Conveyance Preference</strong></td><td>Attestation request from key</td><td><code>not specified</code> or <code>direct</code></td></tr>
<tr><td><strong>Authenticator Attachment</strong></td><td>Authenticator type</td><td><code>not specified</code> (accepts both USB key and platform)</td></tr>
<tr><td><strong>Require Resident Key</strong></td><td>Key must be stored on device</td><td><code>not specified</code></td></tr>
<tr><td><strong>User Verification Requirement</strong></td><td>Requires user authentication on device</td><td><code>not specified</code> or <code>required</code></td></tr>
<tr><td><strong>Create Timeout</strong></td><td>Timeout when registering key (seconds)</td><td><code>0</code> (no timeout)</td></tr>
<tr><td><strong>Avoid Same Authenticator Register</strong></td><td>Do not allow registering the same key twice</td><td><code>Off</code></td></tr>
<tr><td><strong>Acceptable AAGUIDs</strong></td><td>Whitelist security key models</td><td>Leave blank = accept all</td></tr>
</tbody>
</table>

<h3 id="33-quan-ly-webauthn-credentials"><strong>3.3 Managing WebAuthn Credentials</strong></h3>

<pre><code class="language-bash"># Xem WebAuthn credentials của user
curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/credentials" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | \
  jq '.[] | select(.type=="webauthn")'

# Response
{
  "id": "credential-uuid",
  "type": "webauthn",
  "userLabel": "YubiKey 5",
  "createdDate": 1711900000000,
  "credentialData": "{\"aaguid\":\"...\",\"credentialPublicKey\":\"...\"}"
}</code></pre>

<p>Users can also manage security keys themselves in <strong>Account Console</strong> at <code>/realms/myrealm/account/#/security/webauthn</code>.</p>

<h2 id="4-passkeys"><strong>4. Passkeys</strong></h2>

<p>Passkeys is the next evolution of WebAuthn — allowing <strong>passwordless login</strong> (passwordless) using fingerprint, face recognition, or device PIN.</p>

<h3 id="41-passkeys-vs-webauthn"><strong>4.1 Passkeys vs Traditional WebAuthn</strong></h3>

<table>
<thead>
<tr><th>Features</th><th>WebAuthn (MFA)</th><th>Passkeys (Passwordless)</th></tr>
</thead>
<tbody>
<tr><td><strong>Purpose</strong></td><td>MFA — add step after password</td><td>Complete password replacement</td></tr>
<tr><td><strong>Authenticator</strong></td><td><code>WebAuthn Authenticator</code></td><td><code>WebAuthn Passwordless Authenticator</code></td></tr>
<tr><td><strong>Policy</strong></td><td>WebAuthn Policy</td><td>WebAuthn Passwordless Policy</td></tr>
<tr><td><strong>Required Action</strong></td><td>WebAuthn Register</td><td>WebAuthn Register Passwordless</td></tr>
<tr><td><strong>Resident Key</strong></td><td>Optional</td><td>Discoverable credential</td></tr>
<tr><td><strong>User Verification</strong></td><td>Optional</td><td>Required (biometrics/PIN)</td></tr>
</tbody>
</table>

<h3 id="42-enable-passkeys"><strong>4.2 Enable Passkeys</strong></h3>

<p><strong>Step 1: Configure WebAuthn Passwordless Policy</strong></p>

<ol>
<li>Go to <strong>Authentication → Policies → WebAuthn Passwordless Policy</strong></li>
<li>Configuration:
    <ul>
    <li><strong>Relying Party Entity Name</strong>: <code>My Company</code></li>
    <li><strong>Signature Algorithms</strong>: <code>ES256</code></li>
    <li><strong>User Verification Requirement</strong>: <code>required</code></li>
<li><strong>Require Resident Key</strong>: <code>Yes</code> — required for Passkeys</li>
    </ul>
</li>
</ol>

<p><strong>Step 2: Create Passwordless Browser Flow</strong></p>

<pre><code>Passwordless Browser Flow
├── Cookie (Alternative)
└── Passwordless Login (Alternative)
    ├── WebAuthn Passwordless Authenticator (Alternative)  → Đăng nhập bằng Passkey
    └── Username Password Fallback (Alternative)           → Sub-flow fallback
        ├── Username Password Form (Required)
        └── Conditional OTP (Conditional)
            ├── Condition - User Configured (Required)
            └── OTP Form (Required)</code></pre>

<p><strong>Step 3: Turn on Required Action</strong></p>

<ol>
<li>Go to <strong>Authentication → Required Actions</strong></li>
<li>On <strong>WebAuthn Register Passwordless</strong> → Default Action: On</li>
</ol>

<h3 id="43-passkey-ui-modes"><strong>4.3 Passkey UI Modes — Conditional and Modal</strong></h3>

<p><strong>Conditional UI (Autofill):</strong></p>
<p>Passkey is automatically suggested in the username field — users just need to select and authenticate using biometrics. This is the smoothest experience.</p>

<p>To enable Conditional UI, put <code>WebAuthn Passwordless Authenticator</code> first in the flow with requirement <code>Alternative</code>.</p>

<p><strong>Modal UI:</strong></p>
<p>Browser displays a dialog asking for Passkey authentication. User must interact with the dialog. Used when you want to make the UX explicit.</p>

<h3 id="44-dang-ky-passkey-qua-aia"><strong>4.4 Register Passkey via AIA (Application Initiated Action)</strong></h3>

<p>Users can register for Passkey at any time via AIA link:</p>

<pre><code class="language-bash"># AIA URL để trigger Passkey registration
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid&
  kc_action=webauthn-register-passwordless</code></pre>

<p><strong>Skip if exists:</strong> If you want to skip registration when the user already has Passkey:</p>

<pre><code class="language-bash"># Thêm parameter skip_if_exists
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid&
  kc_action=webauthn-register-passwordless&
  kc_action_parameter=skip_if_exists</code></pre>

<p><strong>JavaScript integration:</strong></p>

<pre><code class="language-javascript">// Sử dụng keycloak-js adapter
const keycloak = new Keycloak({
  url: 'https://keycloak.example.com',
  realm: 'myrealm',
  clientId: 'my-app'
});

// Trigger Passkey registration
function registerPasskey() {
  keycloak.login({
    action: 'webauthn-register-passwordless'
  });
}

// Button trong UI
document.getElementById('registerPasskeyBtn')
  .addEventListener('click', registerPasskey);</code></pre>

<h2 id="5-kerberos-authentication"><strong>5. Kerberos Authentication</strong></h2>

<p>Kerberos enables <strong>Single Sign-On automatically</strong> for users logged in to the domain (Windows AD, MIT Kerberos). User does not need to enter credentials — browser automatically sends Kerberos ticket.</p>

<h3 id="51-kerberos-server-setup"><strong>5.1 Kerberos Server Setup</strong></h3>

<p>Request:</p>
<ul>
<li>KDC (Key Distribution Center) is running — Active Directory or MIT Kerberos</li>
<li>SPN (Service Principal Number) cho Keycloak service</li>
<li>Keytab file cho Keycloak</li>
</ul>

<pre><code class="language-bash"># Tạo SPN và keytab cho Keycloak (MIT Kerberos)
kadmin -q "addprinc -randkey HTTP/keycloak.example.com@EXAMPLE.COM"
kadmin -q "ktadd -k /etc/keycloak/keycloak.keytab HTTP/keycloak.example.com@EXAMPLE.COM"

# Đặt permission
chmod 600 /etc/keycloak/keycloak.keytab
chown keycloak:keycloak /etc/keycloak/keycloak.keytab</code></pre>

<h3 id="52-keycloak-kerberos-config"><strong>5.2 Configure Keycloak for Kerberos</strong></h3>

<p><strong>Option 1: Kerberos User Storage Provider</strong></p>

<ol>
<li>Go to <strong>User Federation → Add provider → Kerberos</strong></li>
<li>Configuration:
    <ul>
    <li><strong>Kerberos Realm</strong>: <code>EXAMPLE.COM</code></li>
    <li><strong>Server Principal</strong>: <code>HTTP/keycloak.example.com@EXAMPLE.COM</code></li>
    <li><strong>Key Tab</strong>: <code>/etc/keycloak/keycloak.keytab</code></li>
    <li><strong>Allow Kerberos Authentication</strong>: On</li>
    <li><strong>Use Kerberos For Password Authentication</strong>: On</li>
    <li><strong>Update First Login</strong>: On</li>
    </ul>
</li>
</ol>

<p><strong>Option 2: LDAP + Kerberos (Active Directory)</strong></p>

<ol>
<li>Go to <strong>User Federation → Add provider → LDAP</strong></li>
<li>Configure LDAP connection for AD</li>
<li>Enable <strong>Allow Kerberos Authentication</strong></li>
<li>Enter Kerberos Realm, Server Principal, Key Tab</li>
</ol>

<h3 id="53-bat-kerberos-trong-browser-flow"><strong>5.3 Enable Kerberos in Browser Flow</strong></h3>

<ol>
<li>Go to <strong>Authentication → Flows → Browser</strong> (or custom flow)</li>
<li>Find <strong>Kerberos</strong> execution</li>
<li>Change requirement from <code>Disabled</code> to <code>Alternative</code></li>
</ol>

<pre><code>Browser Flow (Kerberos enabled)
├── Cookie (Alternative)
├── Kerberos (Alternative)                    ← BẬT lên
├── Identity Provider Redirector (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    └── Browser - Conditional OTP (Conditional)
        ├── Condition - User Configured (Required)
        └── OTP Form (Required)</code></pre>

<h3 id="54-cross-realm-trust"><strong>5.4 Cross-realm Trust</strong></h3>

<p>Allow users from one Kerberos realm to trust another realm:</p>

<pre><code class="language-ini"># /etc/krb5.conf trên Keycloak server
[libdefaults]
    default_realm = CORP.EXAMPLE.COM
    dns_lookup_realm = false
    dns_lookup_kdc = false

[realms]
    CORP.EXAMPLE.COM = {
        kdc = dc1.corp.example.com
        admin_server = dc1.corp.example.com
    }
    PARTNER.EXAMPLE.COM = {
        kdc = kdc.partner.example.com
    }

[capaths]
    PARTNER.EXAMPLE.COM = {
        CORP.EXAMPLE.COM = .
    }</code></pre>

<h2 id="6-x509-client-certificate"><strong>6. X.509 Client Certificate Authentication</strong></h2>

<p>X.509 allows authentication using <strong>client certificate</strong> — common in enterprise, government, or mTLS environments.</p>

<h3 id="61-them-x509-vao-browser-flow"><strong>6.1 Add X.509 to Browser Flow</strong></h3>

<ol>
<li>Duplicate Browser Flow → <code>Browser with X.509</code></li>
<li>Add <code>X509/Validate Username Form</code> to flow</li>
</ol>

<pre><code>Browser with X.509
├── Cookie (Alternative)
├── X509/Validate Username Form (Alternative)  ← Thêm mới
├── Identity Provider Redirector (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    └── Browser - Conditional OTP (Conditional)
        ├── Condition - User Configured (Required)
        └── OTP Form (Required)</code></pre>

<h3 id="62-x509-configuration"><strong>6.2 X.509 Authenticator Configuration</strong></h3>

<p>Click ⚙️ next to <code>X509/Validate Username Form</code>:</p>

<table>
<thead>
<tr><th>Setting</th><th>Description</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td><strong>User Identity Source</strong></td><td>Field in certificate to identify user</td><td><code>Subject's Common Name</code>, <code>Subject's e-mail</code></td></tr>
<tr><td><strong>Mapping Source to User Attribute</strong></td><td>Map identity source sang user attribute</td><td><code>Username or Email</code></td></tr>
<tr><td><strong>A regular expression</strong></td><td>Regex extract identity from cert field</td><td><code>CN=(.*?)(?:,\|$)</code></td></tr>
<tr><td><strong>CRL Checking Enabled</strong></td><td>Checking Certificate Revocation List</td><td><code>On</code></td></tr>
<tr><td><strong>CRL Distribution Point</strong></td><td>URL or path to CRL</td><td><code>ldap://ca.example.com/CN=...</code></td></tr>
<tr><td><strong>OCSP Checking Enabled</strong></td><td>Checking Online Certificate Status Protocol</td><td><code>On</code></td></tr>
<tr><td><strong>OCSP Responder URI</strong></td><td>OCSP responder URL</td><td><code>http://ocsp.example.com</code></td></tr>
<tr><td><strong>Certificate Key Usage</strong></td><td>Key usage required</td><td><code>digitalSignature</code></td></tr>
<tr><td><strong>Certificate Extended Key Usage</strong></td><td>Extended key usage</td><td><code>clientAuth</code></td></tr>
<tr><td><strong>Certificate Policy Validation Mode</strong></td><td>Validate certificate policies</td><td><code>Not Specified</code></td></tr>
</tbody>
</table>

<h3 id="63-certificate-mapping-strategies"><strong>6.3 Certificate Mapping Strategies</strong></h3>

<p>There are many ways to map certificate to Keycloak user:</p>

<pre><code class="language-text"># 1. Subject's Common Name → Username
# Certificate: CN=john.doe, OU=Engineering, O=Example Corp
# → username: john.doe

# 2. Subject's e-mail → Email
# Certificate: emailAddress=john@example.com
# → email: john@example.com

# 3. Serial Number → User Attribute
# Certificate: Serial=1A2B3C4D
# → user attribute "x509_serial" = "1A2B3C4D"

# 4. SHA-256 Certificate Thumbprint → User Attribute
# Certificate SHA-256: ab:cd:ef:12:34:...
# → user attribute "x509_thumbprint" = "ab:cd:ef:12:34:..."

# 5. Subject's DN với regex
# Certificate: CN=john.doe, OU=Engineering, O=Example Corp, C=VN
# Regex: CN=(.*?)(?:,|$)
# → Extracted: john.doe</code></pre>

<h3 id="64-crl-va-ocsp"><strong>6.4 CRL and OCSP Checking</strong></h3>

<p>To ensure certificates have not been revoked:</p>

<p><strong>CRL (Certificate Revocation List):</strong></p>
<ul>
<li>Keycloak downloads and caches CRL from configured URI</li>
<li>Check if the serial number of the client cert is in the CRL</li>
<li>If CRL not available and <code>CRL Checking Enabled=On</code> → authentication fail</li>
</ul>

<p><strong>OCSP (Online Certificate Status Protocol):</strong></p>
<ul>
<li>Real-time check certificate status</li>
<li>Keycloak sends request to OCSP Responder</li>
<li>Faster than CRL for individual checks</li>
<li>Disadvantages: depends on OCSP server availability</li>
</ul>

<pre><code class="language-bash"># Test OCSP check
openssl ocsp \
  -issuer ca.pem \
  -cert client.pem \
  -url http://ocsp.example.com \
  -resp_text

# Test certificate info
openssl x509 -in client.pem -noout -subject -serial -fingerprint -sha256</code></pre>

<h3 id="65-keycloak-mtls-setup"><strong>6.5 Keycloak mTLS Setup</strong></h3>

<p>For Keycloak to receive client certificates, you need to configure a reverse proxy or Keycloak directly:</p>

<pre><code class="language-yaml"># Docker Compose — Keycloak với mTLS qua nginx
services:
  nginx:
    image: nginx:latest
    ports:
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
      - ./certs/server.crt:/etc/nginx/certs/server.crt
      - ./certs/server.key:/etc/nginx/certs/server.key
      - ./certs/ca.crt:/etc/nginx/certs/ca.crt
    depends_on:
      - keycloak

  keycloak:
    image: quay.io/keycloak/keycloak:26.0
    command: start --proxy-headers xforwarded
    environment:
      KC_HOSTNAME: keycloak.example.com
      KC_HTTP_ENABLED: "true"
      KC_PROXY_HEADERS: xforwarded
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: admin</code></pre>

<pre><code class="language-nginx"># nginx.conf — Forward client certificate
server {
    listen 443 ssl;
    server_name keycloak.example.com;

    ssl_certificate /etc/nginx/certs/server.crt;
    ssl_certificate_key /etc/nginx/certs/server.key;
    ssl_client_certificate /etc/nginx/certs/ca.crt;
    ssl_verify_client optional;

    location / {
        proxy_pass http://keycloak:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port 443;
        
        # Forward client certificate
        proxy_set_header ssl-client-cert $ssl_client_escaped_cert;
    }
}</code></pre>

<h2 id="7-so-sanh-phuong-thuc-mfa"><strong>7. Compare MFA</strong></h2> methods

<table>
<thead>
<tr><th>Method</th><th>Security</th><th>UX</th><th>Phishing-resistant</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td><strong>TOTP/HOTP</strong></td><td>Average</td><td>Good</td><td>No</td><td>Popular, easy to deploy</td></tr>
<tr><td><strong>WebAuthn (MFA)</strong></td><td>High</td><td>Good</td><td>Yes</td><td>Enterprise, compliance</td></tr>
<tr><td><strong>Passkeys</strong></td><td>Very High</td><td>Excellent</td><td>Yes</td><td>Consumer + Enterprise</td></tr>
<tr><td><strong>Kerberos</strong></td><td>High</td><td>Excellent (transparent)</td><td>Yes (domain)</td><td>Enterprise, Windows domain</td></tr>
<tr><td><strong>X.509 Certificate</strong></td><td>Very High</td><td>Transparent</td><td>Yes</td><td>Government, military, banking</td></tr>
</tbody>
</table>

<h2 id="8-tom-tat"><strong>8. Summary</strong></h2>

<table>
<thead>
<tr><th>Concept</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><strong>OTP Policy</strong></td><td>TOTP/HOTP config — algorithm, digits, period, look ahead</td></tr>
<tr><td><strong>Recovery Codes</strong></td><td>Backup codes when OTP device is lost</td></tr>
<tr><td><strong>WebAuthn</strong></td><td>FIDO2 security keys — phishing-resistant MFA</td></tr>
<tr><td><strong>Passkeys</strong></td><td>Passwordless authentication — discoverable credentials + biometrics</td></tr>
<tr><td><strong>Kerberos</strong></td><td>Transparent SSO cho domain users</td></tr>
<tr><td><strong>X.509</strong></td><td>Client certificate authentication — mTLS</td></tr>
<tr><td><strong>CRL/OCSP</strong></td><td>Certificate revocation checking</td></tr>
</tbody>
</table>
