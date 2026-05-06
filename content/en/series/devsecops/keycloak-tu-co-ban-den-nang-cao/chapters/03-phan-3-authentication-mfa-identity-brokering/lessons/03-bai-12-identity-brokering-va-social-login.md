---
id: 019d8b30-b112-7001-c001-e0c5f8100112
title: 'Lesson 12: Identity Brokering and Social Login'
slug: bai-12-identity-brokering-va-social-login
description: Identity Provider concept, Social Login configuration (Google, Facebook, GitHub, Apple, Microsoft), OpenID Connect Identity Providers, SAML Identity Providers, OAuth v2 providers, Kubernetes Identity Providers. First Login Flow, Account Linking, Identity Provider Mappers, Sync Mode (import, force, legacy), client-suggested IdP (kc_idp_hint) and IdP logout flow.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 12
section_title: 'Part 3: Authentication, MFA and Identity Brokering'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak from Basic to Advanced
  slug: keycloak-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8909" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8909)"/>

  <!-- Decorations -->
  <g>
    <circle cx="943" cy="239" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="786" cy="222" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="629" cy="205" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="972" cy="188" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="815" cy="171" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="89" x2="1100" y2="169" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="119" x2="1050" y2="189" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.1051177665154,167 1027.1051177665154,211 989,233 950.8948822334847,211 950.8948822334847,167 989,145" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Lesson 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 12: Identity Brokering and Social Login</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Authentication, MFA and Identity Brokering</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-identity-brokering-concept"><strong>1. Identity Brokering — Concept</strong></h2>

<p>Identity Brokering allows Keycloak to act as <strong>authentication broker</strong> between the application and external Identity Providers (IdPs). Instead of each application integrating with its own Google, Facebook, SAML IdP, they all connect via Keycloak.</p>

<pre><code>┌──────────┐     ┌──────────────┐     ┌──────────────────┐
│  My App  │ ──→ │   Keycloak   │ ──→ │  External IdP    │
│          │ ←── │  (Broker)    │ ←── │  (Google, SAML)  │
└──────────┘     └──────────────┘     └──────────────────┘

Flow:
1. User truy cập My App → redirect đến Keycloak
2. User chọn "Login with Google" trên Keycloak login page
3. Keycloak redirect đến Google OAuth2
4. User xác thực tại Google → redirect về Keycloak
5. Keycloak nhận identity, tạo/link user, issue token
6. User redirect về My App với Keycloak token</code></pre>

<p><strong>Benefits:</strong></p>
<ul>
<li><strong>Centralized</strong>: Configure IdP once at Keycloak, all apps can use it</li>
<li><strong>Protocol bridging</strong>: App uses OIDC, external IdP uses SAML → Keycloak bridge</li>
<li><strong>User management</strong>: Keycloak centrally manages, including users from external IdP</li>
<li><strong>Account linking</strong>: Link multiple external identities to 1 Keycloak account</li>
</ul>

<h2 id="2-cau-hinh-social-login"><strong>2. Configure Social Login</strong></h2>

<h3 id="21-general-idp-settings"><strong>2.1 General Identity Provider Settings</strong></h3>

<p>When adding any IdP, common settings include:</p>

<table>
<thead>
<tr><th>Setting</th><th>Description</th><th>Value</th></tr>
</thead>
<tbody>
<tr><td><strong>Alias</strong></td><td>Unique Identifier for IdP in Keycloak</td><td><code>google</code>, <code>facebook</code></td></tr>
<tr><td><strong>Display Name</strong></td><td>Name displayed on login page</td><td><code>Google</code>, <code>Log in with Facebook</code></td></tr>
<tr><td><strong>Enabled</strong></td><td>Enable/disable IdP</td><td><code>On</code></td></tr>
<tr><td><strong>Hide on Login Page</strong></td><td>Hide from login page (only use via kc_idp_hint)</td><td><code>Off</code></td></tr>
<tr><td><strong>Store Tokens</strong></td><td>Save access token from external IdP</td><td><code>Off</code> (turn on if need to call external API)</td></tr>
<tr><td><strong>Stored Tokens Readable</strong></td><td>User can read stored tokens</td><td><code>Off</code></td></tr>
<tr><td><strong>Trust Email</strong></td><td>Trust email from IdP (no need to verify again)</td><td><code>On</code> for Google/Microsoft</td></tr>
<tr><td><strong>Account Linking Only</strong></td><td>Only used to link accounts, not allowed to create new</td><td><code>Off</code></td></tr>
<tr><td><strong>First Login Flow</strong></td><td>Flow handles first login</td><td><code>First Broker Login</code></td></tr>
<tr><td><strong>Post Login Flow</strong></td><td>Flow runs after each login via IdP</td><td><code>None</code></td></tr>
<tr><td><strong>Sync Mode</strong></td><td>Sync user attributes</td><td><code>import</code>, <code>force</code>, or <code>legacy</code></td></tr>
</tbody>
</table>

<h3 id="22-google-oauth2"><strong>2.2 Google OAuth2</strong></h3>

<p><strong>Step 1: Create OAuth2 Credentials at Google</strong></p>

<ol>
<li>Go to <strong>Google Cloud Console → APIs & Services → Credentials</strong></li>
<li>Click <strong>"Create Credentials → OAuth Client ID"</strong></li>
<li>Application type: <strong>Web application</strong></li>
<li>Name: <code>Keycloak Login</code></li>
<li>Authorized redirect URIs: <code>https://keycloak.example.com/realms/myrealm/broker/google/endpoint</code></li>
<li>Copy <strong>Client ID</strong> and <strong>Client Secret</strong></li>
</ol>

<p><strong>Step 2: Configure in Keycloak</strong></p>

<ol>
<li>Go to <strong>Identity Providers → Add provider → Google</strong></li>
<li>Enter:
    <ul>
    <li><strong>Client ID</strong>: <code>123456789.apps.googleusercontent.com</code></li>
    <li><strong>Client Secret</strong>: <code>GOCSPX-xxxxxxxxxxxx</code></li>
    <li><strong>Default Scopes</strong>: <code>openid profile email</code></li>
<li><strong>Trust Email</strong>: <code>On</code> — Google has verified email</li>
    <li><strong>Sync Mode</strong>: <code>import</code></li>
    </ul>
</li>
<li>Save</li>
</ol>

<p><strong>Redirect URI format:</strong></p>
<pre><code>https://{keycloak-host}/realms/{realm}/broker/{alias}/endpoint</code></pre>

<h3 id="23-facebook"><strong>2.3 Facebook</strong></h3>

<p><strong>Bước 1: Tạo Facebook App</strong></p>

<ol>
<li>Truy cập <strong>Meta for Developers → My Apps → Create App</strong></li>
<li>App type: <strong>Consumer</strong> hoặc <strong>Business</strong></li>
<li>Thêm product <strong>"Facebook Login"</strong></li>
<li>Settings:
    <ul>
    <li>Valid OAuth Redirect URIs: <code>https://keycloak.example.com/realms/myrealm/broker/facebook/endpoint</code></li>
    </ul>
</li>
<li>Copy <strong>App ID</strong> và <strong>App Secret</strong></li>
</ol>

<p><strong>Bước 2: Cấu hình trong Keycloak</strong></p>

<ol>
<li>Vào <strong>Identity Providers → Add provider → Facebook</strong></li>
<li>Nhập:
    <ul>
    <li><strong>Client ID</strong>: App ID</li>
    <li><strong>Client Secret</strong>: App Secret</li>
    <li><strong>Default Scopes</strong>: <code>email public_profile</code></li>
    <li><strong>Trust Email</strong>: <code>Off</code> — Facebook cho phép email chưa verify</li>
    </ul>
</li>
</ol>

<h3 id="24-github"><strong>2.4 GitHub</strong></h3>

<p><strong>Bước 1: Tạo GitHub OAuth App</strong></p>

<ol>
<li>Truy cập <strong>GitHub → Settings → Developer Settings → OAuth Apps → New</strong></li>
<li>Application name: <code>Keycloak Login</code></li>
<li>Homepage URL: <code>https://myapp.example.com</code></li>
<li>Authorization callback URL: <code>https://keycloak.example.com/realms/myrealm/broker/github/endpoint</code></li>
<li>Copy <strong>Client ID</strong> và generate <strong>Client Secret</strong></li>
</ol>

<p><strong>Bước 2: Cấu hình trong Keycloak</strong></p>

<ol>
<li>Vào <strong>Identity Providers → Add provider → GitHub</strong></li>
<li>Nhập:
    <ul>
    <li><strong>Client ID</strong>: GitHub Client ID</li>
    <li><strong>Client Secret</strong>: GitHub Client Secret</li>
    <li><strong>Default Scopes</strong>: <code>user:email read:org</code> (thêm <code>read:org</code> nếu cần org info)</li>
    </ul>
</li>
</ol>

<h3 id="25-apple"><strong>2.5 Apple Sign In</strong></h3>

<p><strong>Bước 1: Cấu hình tại Apple Developer</strong></p>

<ol>
<li>Truy cập <strong>Apple Developer → Certificates, Identifiers & Profiles</strong></li>
<li>Tạo <strong>App ID</strong> với Sign In with Apple capability</li>
<li>Tạo <strong>Services ID</strong>:
    <ul>
    <li>Identifier: <code>com.example.keycloak.login</code></li>
    <li>Return URLs: <code>https://keycloak.example.com/realms/myrealm/broker/apple/endpoint</code></li>
    </ul>
</li>
<li>Tạo <strong>Key</strong> cho Sign In with Apple → download <code>.p8</code> file</li>
</ol>

<p><strong>Bước 2: Cấu hình trong Keycloak</strong></p>

<ol>
<li>Vào <strong>Identity Providers → Add provider → Apple</strong></li>
<li>Nhập:
    <ul>
    <li><strong>Client ID</strong>: Services ID (com.example.keycloak.login)</li>
    <li><strong>Client Secret</strong>: Generated JWT từ .p8 key</li>
    <li><strong>Default Scopes</strong>: <code>name email</code></li>
    <li><strong>Trust Email</strong>: <code>On</code></li>
    </ul>
</li>
</ol>

<blockquote>
<p>⚠️ <strong>Lưu ý Apple</strong>: Apple yêu cầu Client Secret là JWT signed với .p8 key, và JWT này hết hạn sau 6 tháng. Bạn cần refresh Client Secret định kỳ hoặc sử dụng script tự động.</p>
</blockquote>

<h3 id="26-microsoft"><strong>2.6 Microsoft (Azure AD / Entra ID)</strong></h3>

<p><strong>Bước 1: Đăng ký App trong Azure</strong></p>

<ol>
<li>Truy cập <strong>Azure Portal → Microsoft Entra ID → App registrations → New</strong></li>
<li>Name: <code>Keycloak SSO</code></li>
<li>Supported account types: chọn phù hợp
    <ul>
    <li><code>Accounts in this organizational directory only</code> — Single tenant</li>
    <li><code>Accounts in any organizational directory</code> — Multi-tenant</li>
    <li><code>Accounts in any organizational directory and personal</code> — Bao gồm cả @outlook.com</li>
    </ul>
</li>
<li>Redirect URI: <code>Web</code> → <code>https://keycloak.example.com/realms/myrealm/broker/microsoft/endpoint</code></li>
<li>Vào <strong>Certificates & secrets → New client secret</strong> → copy value</li>
</ol>

<p><strong>Bước 2: Cấu hình trong Keycloak</strong></p>

<ol>
<li>Vào <strong>Identity Providers → Add provider → Microsoft</strong></li>
<li>Nhập:
    <ul>
    <li><strong>Client ID</strong>: Application (client) ID</li>
    <li><strong>Client Secret</strong>: Client secret value</li>
    <li><strong>Default Scopes</strong>: <code>openid profile email</code></li>
    <li><strong>Trust Email</strong>: <code>On</code></li>
    <li><strong>Tenant</strong>: Nhập Tenant ID cho single-tenant, hoặc <code>common</code> cho multi-tenant</li>
    </ul>
</li>
</ol>

<h2 id="3-openid-connect-identity-providers"><strong>3. OpenID Connect Identity Providers</strong></h2>

<p>Ngoài social providers có sẵn, Keycloak hỗ trợ kết nối với <strong>bất kỳ OIDC provider</strong> nào.</p>

<h3 id="31-oidc-v1-provider"><strong>3.1 Thêm OpenID Connect v1.0 Provider</strong></h3>

<ol>
<li>Vào <strong>Identity Providers → Add provider → OpenID Connect v1.0</strong></li>
<li>Cấu hình:
    <ul>
    <li><strong>Alias</strong>: <code>corporate-sso</code></li>
    <li><strong>Display Name</strong>: <code>Corporate SSO</code></li>
    <li><strong>Discovery Endpoint</strong>: <code>https://sso.corp.example.com/.well-known/openid-configuration</code></li>
    <li>Hoặc nhập manual:
        <ul>
        <li><strong>Authorization URL</strong>: <code>https://sso.corp.example.com/authorize</code></li>
        <li><strong>Token URL</strong>: <code>https://sso.corp.example.com/token</code></li>
        <li><strong>User Info URL</strong>: <code>https://sso.corp.example.com/userinfo</code></li>
        <li><strong>JWKS URL</strong>: <code>https://sso.corp.example.com/jwks</code></li>
        </ul>
    </li>
    <li><strong>Client ID</strong>: ID đã đăng ký tại external IdP</li>
    <li><strong>Client Secret</strong>: Secret tương ứng</li>
    <li><strong>Client Authentication</strong>: <code>Client secret sent as post</code> hoặc <code>Client secret sent as basic auth</code></li>
    </ul>
</li>
</ol>

<p><strong>Discovery Endpoint</strong> cho phép Keycloak tự động fetch tất cả URLs và capabilities của external IdP.</p>

<h3 id="32-oidc-keycloak-to-keycloak"><strong>3.2 Keycloak-to-Keycloak Identity Brokering</strong></h3>

<p>Kết nối 2 Keycloak instances:</p>

<pre><code class="language-text"># Keycloak A (IdP) — Realm: company-a
Discovery: https://keycloak-a.example.com/realms/company-a/.well-known/openid-configuration

# Keycloak B (Broker) — Realm: main
# Thêm OIDC IdP với:
# - Discovery Endpoint: https://keycloak-a.example.com/realms/company-a/.well-known/openid-configuration
# - Client ID: registered in company-a realm
# - Client Secret: from company-a client

# Tại Keycloak A, tạo client cho Keycloak B:
# - Client ID: keycloak-b-broker
# - Valid Redirect URIs: https://keycloak-b.example.com/realms/main/broker/company-a/endpoint
# - Client Authentication: On
# - Standard Flow: Enabled</code></pre>

<h2 id="4-saml-identity-providers"><strong>4. SAML 2.0 Identity Providers</strong></h2>

<h3 id="41-them-saml-idp"><strong>4.1 Add SAML IdP</strong></h3>

<ol>
<li>Go to <strong>Identity Providers → Add provider → SAML v2.0</strong></li>
<li>Configuration:
    <ul>
    <li><strong>Alias</strong>: <code>corporate-saml</code></li>
<li><strong>Import from URL</strong>: Import metadata URL of external SAML IdP
        <pre><code>https://saml-idp.example.com/metadata</code></pre>
    </li>
    <li>Hoặc <strong>Import from file</strong>: Upload XML metadata file</li>
    <li>Hoặc nhập manual:
        <ul>
        <li><strong>Single Sign-On Service URL</strong>: <code>https://saml-idp.example.com/sso</code></li>
        <li><strong>Single Logout Service URL</strong>: <code>https://saml-idp.example.com/slo</code></li>
        <li><strong>NameID Policy Format</strong>: <code>Email</code> hoặc <code>Persistent</code></li>
        <li><strong>Want AuthnRequests Signed</strong>: <code>On</code></li>
        <li><strong>Want Assertions Signed</strong>: <code>On</code></li>
        <li><strong>Want Assertions Encrypted</strong>: <code>Off</code></li>
        <li><strong>Validate Signature</strong>: <code>On</code></li>
        <li><strong>Validating X509 Certificates</strong>: Paste IdP signing certificate</li>
        </ul>
    </li>
    </ul>
</li>
</ol>

<h3 id="42-keycloak-saml-sp-metadata"><strong>4.2 Keycloak SAML SP Metadata</strong></h3>

<p>External SAML IdP cần metadata của Keycloak (acting as Service Provider):</p>

<pre><code class="language-bash"># Keycloak SP Descriptor URL
https://keycloak.example.com/realms/myrealm/broker/corporate-saml/endpoint/descriptor

# Đây là XML metadata chứa:
# - EntityID
# - AssertionConsumerService URL
# - SingleLogoutService URL
# - Keycloak signing certificate</code></pre>

<h2 id="5-oauth-v2-identity-providers"><strong>5. OAuth v2 Identity Providers</strong></h2>

<p>For providers that only support OAuth 2.0 (no OIDC):</p>

<ol>
<li>Go to <strong>Identity Providers → Add provider → OAuth v2.0</strong></li>
<li>Configuration:
    <ul>
    <li><strong>Authorization URL</strong>: OAuth2 authorize endpoint</li>
    <li><strong>Token URL</strong>: OAuth2 token endpoint</li>
<li><strong>User Info URL</strong>: Endpoint returns user info (if any)</li>
    <li><strong>Client ID / Client Secret</strong></li>
<li><strong>User Info JSON Path</strong>: JSONPath to extract user attributes
        <pre><code># Ví dụ: nếu user info response là { "data": { "id": 123, "username": "john" } }
# Username JSONPath: $.data.username
# Email JSONPath: $.data.email</code></pre>
    </li>
    </ul>
</li>
</ol>

<h2 id="6-kubernetes-identity-providers"><strong>6. Kubernetes Identity Providers</strong></h2>

<p>Keycloak can act as an IdP for Kubernetes, and vice versa can receive identity from Kubernetes.</p>

<h3 id="61-keycloak-verified-email-domain-idp"><strong>6.1 Kubernetes OpenID Connect Provider</strong></h3>

<pre><code class="language-yaml"># Kubernetes API server config — sử dụng Keycloak làm IdP
apiVersion: v1
kind: Config
clusters:
- cluster:
    server: https://k8s-api.example.com
    certificate-authority: /etc/kubernetes/pki/ca.crt
  name: my-cluster
users:
- name: oidc-user
  user:
    exec:
      apiVersion: client.authentication.k8s.io/v1beta1
      command: kubectl
      args:
        - oidc-login
        - get-token
        - --oidc-issuer-url=https://keycloak.example.com/realms/myrealm
        - --oidc-client-id=kubernetes
        - --oidc-extra-scope=groups</code></pre>

<pre><code class="language-bash"># kube-apiserver flags cho OIDC authentication
--oidc-issuer-url=https://keycloak.example.com/realms/myrealm
--oidc-client-id=kubernetes
--oidc-username-claim=preferred_username
--oidc-groups-claim=groups
--oidc-ca-file=/etc/kubernetes/pki/keycloak-ca.crt</code></pre>

<h2 id="7-first-login-flow"><strong>7. First Login Flow</strong></h2>

<p>First Login Flow handles <strong>the first time</strong> user logs in via external IdP. This flow decides:</p>
<ul>
<li>Can I create a new user in Keycloak?</li>
<li>Is there a link to the current user?</li>
<li>Is there a request to review/update profile?</li>
</ul>

<h3 id="71-default-first-broker-login-flow"><strong>7.1 Default First Broker Login Flow</strong></h3>

<pre><code>First Broker Login Flow (mặc định)
├── Review Profile (Required)                    → Hiển thị profile để user review
│   └── Config: Update Profile on First Login = missing
└── User Creation or Linking (Required)           → Sub-flow
    ├── Create User If Unique (Alternative)       → Tạo user nếu email/username chưa tồn tại
    └── Handle Existing Account (Alternative)     → Sub-flow xử lý account đã tồn tại
        ├── Confirm Link Existing Account (Required) → Hỏi user có muốn link?
        └── Verification (Alternative)            → Sub-flow verify ownership
            ├── Verify Existing Account by Email (Alternative) → Gửi email verify
            └── Verify Existing Account by Re-authentication (Alternative) → Nhập password</code></pre>

<h3 id="72-cach-hoat-dong"><strong>7.2 Detailed operation</strong></h3>

<p><strong>Scenario 1: Completely new user</strong></p>
<ol>
<li>User logs in via Google for the first time</li>
<li><strong>Review Profile</strong>: Display profile (email, name) from Google for user to confirm</li>
<li><strong>Create User If Unique</strong>: Email does not exist → create new Keycloak user</li>
<li>Link Google identity with Keycloak user</li>
<li>Successful login</li>
</ol>

<p><strong>Scenario 2: Email already exists in Keycloak</strong></p>
<ol>
<li>User logged in via GitHub, email <code>john@example.com</code></li>
<li><strong>Create User If Unique</strong>: Email already exists → fail → switch to alternative</li>
<li><strong>Confirm Link Existing Account</strong>: Ask "Account john@example.com already exists. Do you want the link?"</li>
<li><strong>Verify ownership</strong>: User verify by email OR enter Keycloak password</li>
<li>Link GitHub identity with existing Keycloak user</li>
</ol>

<h3 id="73-custom-first-login-flow"><strong>7.3 Custom First Login Flow</strong></h3>

<p>For example: Auto-link account by email <strong>no need to verify</strong> (only used when trusting external IdP):</p>

<pre><code>Auto-link First Login Flow
├── Create User If Unique (Alternative)
└── Automatically Set Existing User (Alternative)   ← Tự link, không hỏi user</code></pre>

<blockquote>
<p>⚠️ <strong>Security warning</strong>: <code>Automatically Set Existing User</code> should only be used if you <strong>fully trust</strong> external IdP. If the IdP allows you to freely set emails, attackers can take over accounts by registering for other people's emails.</p>
</blockquote>

<h2 id="8-account-linking"><strong>8. Account Linking</strong></h2>

<p>Account Linking allows users to link multiple external identities into one Keycloak account.</p>

<h3 id="81-linking-qua-account-console"><strong>8.1 Linking qua Account Console</strong></h3>

<p>Users can link/unlink themselves in Account Console:</p>
<pre><code>https://keycloak.example.com/realms/myrealm/account/#/security/linked-accounts</code></pre>

<h3 id="82-linking-qua-aia"><strong>8.2 Linking qua Application Initiated Action (AIA)</strong></h3>

<pre><code class="language-bash"># Trigger account linking từ application
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid&
  kc_action=oidc-link&
  kc_action_parameter=google</code></pre>

<h3 id="83-linking-qua-admin-api"><strong>8.3 Linking qua Admin REST API</strong></h3>

<pre><code class="language-bash"># Xem federated identities của user
curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/federated-identity" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq

# Response
[
  {
    "identityProvider": "google",
    "userId": "google-user-id-123",
    "userName": "john@gmail.com"
  }
]

# Thêm federated identity cho user
curl -X POST \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/federated-identity/github" \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "identityProvider": "github",
    "userId": "github-user-id-456",
    "userName": "johndoe"
  }'

# Xóa federated identity
curl -X DELETE \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/federated-identity/github" \
  -H "Authorization: Bearer $ADMIN_TOKEN"</code></pre>

<h2 id="9-identity-provider-mappers"><strong>9. Identity Provider Mappers</strong></h2>

<p>IdP Mappers allow <strong>transform and map</strong> attributes from external IdP to Keycloak user attributes, roles, or groups.</p>

<h3 id="91-mapper-types"><strong>9.1 Mapper Types</strong></h3>

<table>
<thead>
<tr><th>Mapper</th><th>Description</th><th>Example</th></tr>
</thead>
<tbody>
<tr><td><strong>Attribute Importer</strong></td><td>Import attribute from IdP claim to Keycloak user attribute</td><td>IdP <code>picture</code> → Keycloak <code>avatar_url</code></td></tr>
<tr><td><strong>Hardcoded Role</strong></td><td>Assign a fixed role to all users from IdP</td><td>All Google users → role <code>external-user</code></td></tr>
<tr><td><strong>Hardcoded Group</strong></td><td>Assign fixed group</td><td>All GitHub users → group <code>/external/github</code></td></tr>
<tr><td><strong>Username Template Importer</strong></td><td>Create username from template</td><td><code>${ALIAS}.${CLAIM.preferred_username}</code></td></tr>
<tr><td><strong>External Role to Role</strong></td><td>Map external IdP role sang Keycloak role</td><td>SAML role <code>admin</code> → Keycloak role <code>realm-admin</code></td></tr>
<tr><td><strong>Hardcoded Attribute</strong></td><td>Set fixed attribute for users from IdP</td><td><code>source=google</code> for all Google users</td></tr>
<tr><td><strong>SAML Attribute to Role</strong></td><td>Map SAML assertion attribute sang Keycloak role</td><td>SAML <code>department=IT</code> → role <code>it-team</code></td></tr>
<tr><td><strong>Advanced Claim to Role</strong></td><td>Map complex claim (JSON path, regex) to role</td><td>Claim <code>groups</code> contains <code>"admins"</code> → role <code>admin</code></td></tr>
</tbody>
</table>

<h3 id="92-cau-hinh-mappers"><strong>9.2 Mappers Configuration</strong></h3>

<p><strong>Example 1: Attribute Importer — Import avatar from Google</strong></p>

<ol>
<li>Go to <strong>Identity Providers → Google → Mappers → Add mapper</strong></li>
<li>Configuration:
    <ul>
    <li><strong>Name</strong>: <code>Import Avatar URL</code></li>
    <li><strong>Mapper Type</strong>: <code>Attribute Importer</code></li>
<li><strong>Claim</strong>: <code>picture</code> (claim name from Google)</li>
    <li><strong>User Attribute Name</strong>: <code>avatar_url</code> (Keycloak user attribute)</li>
    <li><strong>Sync Mode Override</strong>: <code>inherit</code></li>
    </ul>
</li>
</ol>

<p><strong>Example 2: Hardcoded Role — Assign role to external users</strong></p>

<ol>
<li>Go to <strong>Identity Providers → GitHub → Mappers → Add mapper</strong></li>
<li>Configuration:
    <ul>
    <li><strong>Name</strong>: <code>Assign External User Role</code></li>
    <li><strong>Mapper Type</strong>: <code>Hardcoded Role</code></li>
    <li><strong>Role</strong>: <code>external-user</code></li>
    </ul>
</li>
</ol>

<p><strong>Example 3: Username Template — Prefix username with IdP alias</strong></p>

<ol>
<li>Configuration:
    <ul>
    <li><strong>Mapper Type</strong>: <code>Username Template Importer</code></li>
    <li><strong>Template</strong>: <code>${ALIAS}.${CLAIM.preferred_username}</code></li>
    <li><strong>Target</strong>: <code>LOCAL</code></li>
    </ul>
</li>
<li>Result: user from Google will have username = <code>google.john.doe</code></li>
</ol>

<p><strong>Example 4: External Role to Role — Map SAML roles</strong></p>

<ol>
<li>Configuration:
    <ul>
    <li><strong>Mapper Type</strong>: <code>External Role to Role</code></li>
<li><strong>External Role</strong>: <code>admin</code> (role name from external SAML IdP)</li>
    <li><strong>Role</strong>: <code>realm-admin</code> (Keycloak role)</li>
    </ul>
</li>
</ol>

<h2 id="10-sync-modes"><strong>10. Sync Modes</strong></h2>

<p>Sync Mode controls <strong>how Keycloak synchronizes information</strong> from external IdP each time a user logs in.</p>

<table>
<thead>
<tr><th>Mode</th><th>First Login</th><th>Subsequent Logins</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td><strong>import</strong></td><td>Import attributes from IdP</td><td>Do not update — keep data Keycloak</td><td>User can edit profile in Keycloak</td></tr>
<tr><td><strong>force</strong></td><td>Import attributes from IdP</td><td>Always overwrite with new data from IdP</td><td>IdP is the source of absolute truth</td></tr>
<tr><td><strong>legacy</strong></td><td>Import attributes from IdP</td><td>Update if attribute is empty, keep if existing</td><td>Backwards compatible, merge data</td></tr>
</tbody>
</table>

<p><strong>Configure Sync Mode:</strong></p>
<ul>
<li><strong>At IdP level</strong>: Applies to all mappers of that IdP</li>
<li><strong>At Mapper level</strong> (Sync Mode Override): Override sync mode for specific mapper</li>
</ul>

<pre><code class="language-text"># Ví dụ: Google IdP với sync mode = import
# Mapper "Import Avatar" với Sync Mode Override = force

# Kết quả:
# - Email, name: import 1 lần, user có thể sửa trong Keycloak
# - Avatar URL: luôn cập nhật từ Google (force)</code></pre>

<h2 id="11-client-suggested-idp"><strong>11. Client-suggested IdP (kc_idp_hint)</strong></h2>

<p><code>kc_idp_hint</code> allows the <strong> application to automatically redirect</strong> users to a specific external IdP, bypassing the Keycloak login page.</p>

<h3 id="111-su-dung-kc-idp-hint"><strong>11.1 Use kc_idp_hint</strong></h3>

<pre><code class="language-bash"># Redirect trực tiếp đến Google login
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid&
  kc_idp_hint=google

# Redirect trực tiếp đến SAML IdP
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid&
  kc_idp_hint=corporate-saml</code></pre>

<p><strong>JavaScript integration:</strong></p>

<pre><code class="language-javascript">// keycloak-js adapter
const keycloak = new Keycloak({
  url: 'https://keycloak.example.com',
  realm: 'myrealm',
  clientId: 'my-app'
});

// Đăng nhập qua Google
function loginWithGoogle() {
  keycloak.login({
    idpHint: 'google'
  });
}

// Đăng nhập qua corporate SAML
function loginWithCorporate() {
  keycloak.login({
    idpHint: 'corporate-saml'
  });
}</code></pre>

<h3 id="112-identity-provider-redirector"><strong>11.2 Identity Provider Redirector trong Browser Flow</strong></h3>

<p><code>Identity Provider Redirector</code> dalam Browser Flow automatically handles <code>kc_idp_hint</code>:</p>

<ul>
<li>If request has <code>kc_idp_hint=google</code> → immediately redirect to Google</li>
<li>If there is no hint → continue normal flow (display login page)</li>
</ul>

<p><strong>Default IdP</strong>: You can set default IdP for Identity Provider Redirector — when there is no hint, automatically redirect to the default IdP:</p>
<ol>
<li>Click ⚙️ next to <code>Identity Provider Redirector</code></li>
<li>Enter <strong>Default Identity Provider</strong>: <code>google</code></li>
</ol>

<h2 id="12-identity-broker-logout"><strong>12. Identity Broker Logout</strong></h2>

<p>When the user logs out from Keycloak, you can configure <strong>propagate logout</strong> to external IdP.</p>

<h3 id="121-backchannel-logout"><strong>12.1 Backchannel Logout</strong></h3>

<p>Keycloak supports <strong>backchannel logout</strong> with external OIDC IdP:</p>

<ol>
<li>Trong OIDC IdP configuration, enable <strong>Backchannel Logout</strong></li>
<li>External IdP must support backchannel logout endpoint</li>
<li>When user logs out from Keycloak → Keycloak sends logout request to external IdP</li>
</ol>

<p>For SAML IdP, logout propagation is handled via the <strong>SAML Single Logout (SLO)</strong> protocol automatically.</p>

<h2 id="13-multiple-instances"><strong>13. Multiple Instances of Same Social Broker</strong></h2>

<p>Keycloak allows adding <strong>multiple instances</strong> of the same social provider, each with a different alias:</p>

<pre><code class="language-text"># Ví dụ: 2 Google IdPs cho 2 Google Workspace domains
Identity Providers:
  - Alias: google-corp        → Google Workspace domain corp.example.com
  - Alias: google-partner     → Google Workspace domain partner.example.com

# Mỗi instance có Client ID / Client Secret riêng
# registered tại Google Cloud Console khác nhau</code></pre>

<p><strong>Cách thêm:</strong></p>
<ol>
<li>Add OIDC v1.0 provider (do not use the built-in Google provider for the 2nd instance)</li>
<li>Alias: <code>google-partner</code></li>
<li>Discovery Endpoint: <code>https://accounts.google.com/.well-known/openid-configuration</code></li>
<li>Client ID / Secret: separate credentials for the 2nd instance</li>
</ol>

<h2 id="14-hien-an-idps-trong-account-console"><strong>14. Show/Hide IdPs in Account Console</strong></h2>

<p>Controls which IdP users can see and link/unlink in Account Console:</p>

<ul>
<li><strong>Show on Login page</strong>: Unchecked <code>Hide on Login Page</code></li>
<li><strong>Hide from Login page</strong>: Tick <code>Hide on Login Page</code> — still available via <code>kc_idp_hint</code></li>
<li><strong>Show in Account Console</strong>: Default IdP shows in Linked Accounts</li>
<li><strong>Account Linking Only</strong>: IdP only appears in Account Console, not on Login page</li>
</ul>

<h2 id="15-tom-tat"><strong>15. Summary</strong></h2>

<table>
<thead>
<tr><th>Concept</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><strong>Identity Brokering</strong></td><td>Keycloak mediates between apps and external IdPs</td></tr>
<tr><td><strong>Social Login</strong></td><td>Google, Facebook, GitHub, Apple, Microsoft</td></tr>
<tr><td><strong>OIDC/SAML/OAuth2 IdP</strong></td><td>Connect any IdP according to protocol standards</td></tr>
<tr><td><strong>First Login Flow</strong></td><td>First processing: create new user or existing link</td></tr>
<tr><td><strong>Account Linking</strong></td><td>Linking multiple external identities to 1 Keycloak account</td></tr>
<tr><td><strong>IdP Mappers</strong></td><td>Transform attributes: Attribute Importer, Hardcoded Role/Group, Username Template</td></tr>
<tr><td><strong>Sync Modes</strong></td><td>import (once), force (always overwrite), legacy (merge)</td></tr>
<tr><td><strong>kc_idp_hint</strong></td><td>Skip login page, redirect straight to specific IdP</td></tr>
<tr><td><strong>Broker Logout</strong></td><td>Propagate logout to external IdP (backchannel/SLO)</td></tr>
</tbody>
</table>
