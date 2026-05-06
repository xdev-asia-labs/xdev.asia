---
id: 019d8b30-b103-7001-c001-e0c5f8100103
title: 'Lesson 3: Admin Console and creating the first Realm'
slug: bai-3-admin-console-va-tao-realm-dau-tien
description: Get acquainted with the Admin Console, create the first admin user, create and configure Realm, Realm Settings (General, Login, Email, Themes, Localization, Keys, Security Defenses), Admin CLI (kcadm.sh) and basic Admin REST API.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 1: Keycloak Platform'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak from Basic to Advanced
  slug: keycloak-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-388" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-388)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1001" cy="213" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="902" cy="274" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="803" cy="75" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="704" cy="136" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="605" cy="197" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="223" x2="1100" y2="303" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="253" x2="1050" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.9089653438086,154 1005.9089653438086,192 973,211 940.0910346561914,192 940.0910346561914,154 973,135" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 3: Admin Console and creating the first Realm</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Keycloak Platform</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-truy-cap-admin-console"><strong>1. Access Admin Console</strong></h2>

<p>After installing Keycloak (standalone or Docker), you can access <strong>Admin Console</strong> — the centralized administration interface for the entire Keycloak system.</p>

<h3 id="url-truy-cap"><strong>Access URL</strong></h3>
<p>By default, Admin Console is located at:</p>
<pre><code>http://localhost:8080/admin</code></pre>

<p>Nếu bạn chạy Keycloak bằng Docker với port mapping khác:</p>
<pre><code>http://localhost:&lt;PORT&gt;/admin</code></pre>

<h3 id="tao-admin-user-dau-tien"><strong>Tạo Admin User đầu tiên</strong></h3>
<p>Khi lần đầu truy cập Keycloak, bạn cần tạo <strong>initial admin user</strong> để đăng nhập vào Admin Console. Có hai cách:</p>

<p><strong>Cách 1: Qua biến môi trường (khuyến nghị cho Docker/Production)</strong></p>
<pre><code>docker run -d --name keycloak \
  -e KC_BOOTSTRAP_ADMIN_USERNAME=admin \
  -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin \
  -p 8080:8080 \
  quay.io/keycloak/keycloak:26.2.4 start-dev</code></pre>

<p><strong>Method 2: Via welcome page (only when accessing from localhost)</strong></p>
<p>Visit <code>http://localhost:8080</code>, and you will see the admin user creation form. Enter username and password, then click <strong>Create</strong>.</p>

<p><strong>Method 3: Via command line</strong></p>
<pre><code># Standalone
export KC_BOOTSTRAP_ADMIN_USERNAME=admin
export KC_BOOTSTRAP_ADMIN_PASSWORD=admin
bin/kc.sh start-dev</code></pre>

<h3 id="giao-dien-admin-console"><strong>Admin Console interface</strong></h3>
<p>After logging in, you will see the Admin Console interface with the main components:</p>
<ul>
<li><p><strong>Realm selector</strong> (upper left corner) — select the currently managed realm</p></li>
<li><p><strong>Left sidebar</strong> — main navigation menu: Clients, Client scopes, Realm roles, Users, Groups, Sessions, Events, Realm settings, Authentication, Identity providers, User federation</p></li>
<li><p><strong>Main content area</strong> — displays detailed content of the selected item</p></li>
<li><p><strong>User dropdown</strong> (upper right corner) — admin account management, sign out</p></li>
</ul>

<h2 id="2-tao-realm-dau-tien"><strong>2. Create first Realm</strong></h2>

<h3 id="master-realm-va-custom-realm"><strong>Master Realm vs Custom Realm</strong></h3>
<p>When installing Keycloak, a realm named <strong>master</strong> is created. Master realm is a special realm used to manage other realms — <strong>should not use master realm for application</strong>.</p>

<p>Best practices:</p>
<ul>
<li><p>Use <strong>master realm</strong> only for super admin to manage Keycloak system</p></li>
<li><p>Create a separate <strong>custom realm</strong> for each organization, project, or environment</p></li>
<li><p>Give a meaningful realm name: <code>mycompany-dev</code>, <code>mycompany-staging</code>, <code>mycompany-prod</code></p></li>
</ul>

<h3 id="tao-realm-qua-admin-console"><strong>Create Realm via Admin Console</strong></h3>
<ol>
<li><p>Click on <strong>realm selector</strong> (dropdown in the upper left corner, showing "master")</p></li>
<li><p>Click <strong>Create realm</strong></p></li>
<li><p>Enter information:</p>
<ul>
<li><strong>Realm name</strong>: <code>my-company</code> (contains only lowercase, numbers, hyphens)</li>
<li><strong>Enabled</strong>: ON</li>
</ul>
</li>
<li><p>Click <strong>Create</strong></p></li>
</ol>

<h3 id="tao-realm-tu-json"><strong>Create Realm from JSON file</strong></h3>
<p>You can import realm from a JSON file — useful for replicating configuration between environments:</p>
<pre><code>{
  "realm": "my-company",
  "enabled": true,
  "displayName": "My Company",
  "displayNameHtml": "&lt;strong&gt;My Company&lt;/strong&gt;",
  "sslRequired": "external",
  "registrationAllowed": false,
  "loginWithEmailAllowed": true,
  "duplicateEmailsAllowed": false,
  "resetPasswordAllowed": true,
  "editUsernameAllowed": false,
  "bruteForceProtected": true,
  "permanentLockout": false,
  "maxFailureWaitSeconds": 900,
  "minimumQuickLoginWaitSeconds": 60,
  "waitIncrementSeconds": 60,
  "quickLoginCheckMilliSeconds": 1000,
  "maxDeltaTimeSeconds": 43200,
  "failureFactor": 5,
  "defaultSignatureAlgorithm": "RS256",
  "accessTokenLifespan": 300,
  "ssoSessionIdleTimeout": 1800,
  "ssoSessionMaxLifespan": 36000
}</code></pre>

<p>Import via Admin Console: when creating realm, click <strong>Browse</strong> to select JSON file.</p>

<h2 id="3-realm-settings"><strong>3. Realm Settings details</strong></h2>

<p>After creating the realm, access <strong>Realm settings</strong> from the sidebar for detailed configuration.</p>

<h3 id="general-tab"><strong>3.1 Tab General</strong></h3>
<table>
<thead>
<tr><th>Setting</th><th>Description</th><th>Recommended value</th></tr>
</thead>
<tbody>
<tr><td>Display name</td><td>Name displayed on login page</td><td>Company/project name</td></tr>
<tr><td>HTML display name</td><td>HTML support for display name</td><td>Logo + name</td></tr>
<tr><td>Frontend URL</td><td>The URL the client uses to connect</td><td>https://auth.mycompany.com</td></tr>
<tr><td>Require SSL</td><td>Require SSL for requests</td><td><code>external</code> (dev) / <code>all</code> (prod)</td></tr>
<tr><td>User-managed access</td><td>Allow users to manage resources (UMA)</td><td>OFF (unless UMA is needed)</td></tr>
<tr><td>ACR to LoA mapping</td><td>Mapping Authentication Context Class Reference</td><td>Configure when step-up auth is needed</td></tr>
</tbody>
</table>

<h3 id="login-tab"><strong>3.2 Tab Login</strong></h3>
<p>Configure the behavior of the login page:</p>
<table>
<thead>
<tr><th>Setting</th><th>Description</th><th>Default</th></tr>
</thead>
<tbody>
<tr><td>User registration</td><td>Allow new account registration</td><td>OFF</td></tr>
<tr><td>Forgot password</td><td>Show link "Forgot password"</td><td>OFF</td></tr>
<tr><td>Remember me</td><td>Checkbox "Remember me"</td><td>OFF</td></tr>
<tr><td>Email as username</td><td>Use email as username</td><td>OFF</td></tr>
<tr><td>Login with email</td><td>Allow login with email</td><td>ON</td></tr>
<tr><td>Duplicate emails</td><td>Allow duplicate emails</td><td>OFF</td></tr>
<tr><td>Verify email</td><td>Required email verification</td><td>OFF</td></tr>
<tr><td>Edit username</td><td>Allow to change username</td><td>OFF</td></tr>
</tbody>
</table>

<p><strong>Recommended for production:</strong></p>
<pre><code>User registration: OFF (hoặc ON với reCAPTCHA)
Forgot password: ON
Remember me: ON
Email as username: Tùy yêu cầu
Login with email: ON
Verify email: ON
Edit username: OFF</code></pre>

<h3 id="email-tab"><strong>3.3 Tab Email</strong></h3>
<p>Configure SMTP server to send email (verification, reset password, notifications):</p>
<table>
<thead>
<tr><th>Setting</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>From</td><td>Outgoing email address (e.g. noreply@mycompany.com)</td></tr>
<tr><td>From display name</td><td>Email display name</td></tr>
<tr><td>Reply to</td><td>Reply address (eg support@mycompany.com)</td></tr>
<tr><td>Host</td><td>SMTP server hostname</td></tr>
<tr><td>Port</td><td>SMTP port (587 cho STARTTLS, 465 cho SSL)</td></tr>
<tr><td>Encryption</td><td>Enable SSL or STARTTLS</td></tr>
<tr><td>Authentication</td><td>Username and password for SMTP</td></tr>
</tbody>
</table>

<p>Configuration example with Gmail SMTP:</p>
<pre><code>Host: smtp.gmail.com
Port: 587
From: noreply@mycompany.com
Enable StartTLS: ON
Authentication: ON
Username: your-email@gmail.com
Password: app-specific-password</code></pre>

<h3 id="themes-tab"><strong>3.4 Tab Themes</strong></h3>
<p>Customize interface for different pages:</p>
<ul>
<li><p><strong>Login theme</strong> — login, registration, password reset page</p></li>
<li><p><strong>Account theme</strong> — account management page for users</p></li>
<li><p><strong>Admin console theme</strong> — Admin Console theme</p></li>
<li><p><strong>Email theme</strong> — template cho emails</p></li>
</ul>

<p>Keycloak provides the theme <code>keycloak</code> (default) and <code>keycloak.v2</code> (Account Console v3, React-based). You can create custom themes — which will be discussed in the next article.</p>

<h3 id="localization-tab"><strong>3.5 Tab Localization</strong></h3>
<p>Multilingual support for login, account, email pages:</p>
<ol>
<li><p>Turn on <strong>Internationalization</strong>: ON</p></li>
<li><p>Select <strong>Supported locales</strong>: en, vi, ja, zh-CN,...</p></li>
<li><p>Select <strong>Default locale</strong>: vi (for default Vietnamese interface)</p></li>
<li><p>Customize message bundles for each locale if needed</p></li>
</ol>

<h3 id="keys-tab"><strong>3.6 Tab Keys</strong></h3>
<p>Manage cryptographic keys for realm — used to sign and encrypt tokens:</p>
<ul>
<li><p><strong>Active keys</strong> — keys being used to sign tokens</p></li>
<li><p><strong>Passive keys</strong> — old keys still used to verify previously signed tokens</p></li>
<li><p><strong>Disabled keys</strong> — keys are no longer in use</p></li>
</ul>

<p>Default key providers:</p>
<table>
<thead>
<tr><th>Provider</th><th>Algorithm</th><th>Purpose</th></tr>
</thead>
<tbody>
<tr><td>rsa-generated</td><td>RS256</td><td>Sign JWT tokens</td></tr>
<tr><td>rsa-enc-generated</td><td>RSA-OAEP</td><td>Encrypt tokens</td></tr>
<tr><td>hmac-generated</td><td>HS512</td><td>HMAC signing</td></tr>
<tr><td>aes-generated</td><td>AES</td><td>Symmetric encryption</td></tr>
<tr><td>ecdsa-generated</td><td>ES256</td><td>Elliptic curve signing</td></tr>
</tbody>
</table>

<p><strong>Key rotation:</strong> Add new key provider → new key becomes active → old key turns passive → after a while, disable old key.</p>

<h3 id="tokens-tab"><strong>3.7 Tab Tokens</strong></h3>
<p>Configure lifetime and behavior of tokens:</p>
<table>
<thead>
<tr><th>Setting</th><th>Description</th><th>Recommended value</th></tr>
</thead>
<tbody>
<tr><td>Default Signature Algorithm</td><td>JWT Signature Algorithm</td><td>RS256</td></tr>
<tr><td>Revoke Refresh Token</td><td>Revoke refresh token after use</td><td>ON (production)</td></tr>
<tr><td>SSO Session Idle</td><td>Maximum session idle time</td><td>30 minutes</td></tr>
<tr><td>SSO Session Max</td><td>Max session time</td><td>10 hours</td></tr>
<tr><td>Access Token Lifespan</td><td>Access Token Lifespan</td><td>5 minutes</td></tr>
<tr><td>Client login timeout</td><td>Maximum time for login flow</td><td>5 minutes</td></tr>
</tbody>
</table>

<h3 id="security-defenses-tab"><strong>3.8 Tab Security Defenses</strong></h3>
<p>Security configuration for realm:</p>

<p><strong>Headers:</strong></p>
<table>
<thead>
<tr><th>Header</th><th>Default value</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>X-Frame-Options</td><td>SAMEORIGIN</td><td>Anti-clickjacking</td></tr>
<tr><td>Content-Security-Policy</td><td>frame-src 'self'; ...</td><td>CSP header</td></tr>
<tr><td>X-Content-Type-Options</td><td>nosniff</td><td>Anti-MIME sniffing</td></tr>
<tr><td>X-XSS-Protection</td><td>1; mode=block</td><td>XSS filter</td></tr>
<tr><td>Strict-Transport-Security</td><td>max-age=31536000</td><td>HTTPS Required</td></tr>
<tr><td>Referrer-Policy</td><td>no-referrer</td><td>Referrer header control</td></tr>
</tbody>
</table>

<p><strong>Brute Force Detection:</strong></p>
<ul>
<li><p><strong>Enabled</strong>: ON (turn on anti-brute force)</p></li>
<li><p><strong>Permanent lockout</strong>: OFF (automatically unlocks after time)</p></li>
<li><p><strong>Max login failures</strong>: 5 (after 5 failed login attempts will be locked)</p></li>
<li><p><strong>Wait increment</strong>: 60 seconds (incremental waiting time)</p></li>
<li><p><strong>Max wait</strong>: 900 seconds (maximum waiting time 15 minutes)</p></li>
<li><p><strong>Quick login check</strong>: 1000 ms (detected login too fast)</p></li>
</ul>

<h2 id="4-admin-cli"><strong>4. Admin CLI (kcadm.sh)</strong></h2>

<p>Keycloak provides <strong>Admin CLI</strong> (<code>kcadm.sh</code>) — a command-line tool to administer Keycloak without accessing the Admin Console.</p>

<h3 id="cau-hinh-credentials"><strong>4.1 Configure Credentials</strong></h3>
<p>Before using Admin CLI, you need to log in:</p>
<pre><code># Đăng nhập vào Keycloak server
bin/kcadm.sh config credentials \
  --server http://localhost:8080 \
  --realm master \
  --user admin \
  --password admin

# Với Docker
docker exec -it keycloak /opt/keycloak/bin/kcadm.sh config credentials \
  --server http://localhost:8080 \
  --realm master \
  --user admin \
  --password admin</code></pre>

<p><strong>Security note:</strong> In production, use <code>--client</code> and <code>--secret</code> instead of username/password directly on the command line.</p>

<h3 id="quan-ly-realm-voi-cli"><strong>4.2 Realm Management with CLI</strong></h3>

<p><strong>Create new realm:</strong></p>
<pre><code># Tạo realm cơ bản
bin/kcadm.sh create realms \
  -s realm=my-company \
  -s enabled=true \
  -s displayName="My Company"

# Tạo realm với nhiều cấu hình
bin/kcadm.sh create realms \
  -s realm=my-company \
  -s enabled=true \
  -s displayName="My Company" \
  -s registrationAllowed=false \
  -s loginWithEmailAllowed=true \
  -s resetPasswordAllowed=true \
  -s sslRequired=external \
  -s bruteForceProtected=true</code></pre>

<p><strong>See list of realms:</strong></p>
<pre><code># Lấy tất cả realms
bin/kcadm.sh get realms --fields realm,enabled,displayName

# Output:
# [ {
#   "realm" : "master",
#   "displayName" : "Keycloak",
#   "enabled" : true
# }, {
#   "realm" : "my-company",
#   "displayName" : "My Company",
#   "enabled" : true
# } ]</code></pre>

<p><strong>View details realm:</strong></p>
<pre><code>bin/kcadm.sh get realms/my-company</code></pre>

<p><strong>Cập nhật realm:</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s displayName="My Company Production" \
  -s sslRequired=all \
  -s bruteForceProtected=true \
  -s failureFactor=5</code></pre>

<p><strong>Delete realm:</strong></p>
<pre><code>bin/kcadm.sh delete realms/my-company</code></pre>

<h3 id="cau-hinh-realm-settings-voi-cli"><strong>4.3 Cấu hình Realm Settings với CLI</strong></h3>

<p><strong>Cấu hình Login settings:</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s registrationAllowed=true \
  -s resetPasswordAllowed=true \
  -s rememberMe=true \
  -s verifyEmail=true \
  -s loginWithEmailAllowed=true \
  -s duplicateEmailsAllowed=false</code></pre>

<p><strong>Token settings:</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s accessTokenLifespan=300 \
  -s ssoSessionIdleTimeout=1800 \
  -s ssoSessionMaxLifespan=36000 \
  -s revokeRefreshToken=true \
  -s refreshTokenMaxReuse=0</code></pre>

<p><strong>Configure SMTP Email:</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s 'smtpServer={"host":"smtp.gmail.com","port":"587","from":"noreply@mycompany.com","fromDisplayName":"My Company","starttls":"true","auth":"true","user":"your-email@gmail.com","password":"app-password"}'</code></pre>

<p><strong>Export realm configuration:</strong></p>
<pre><code># Export realm sang file JSON
bin/kcadm.sh get realms/my-company &gt; my-company-realm.json</code></pre>

<h2 id="5-admin-rest-api"><strong>5. Admin REST API</strong></h2>

<p>Keycloak provides <strong>Admin REST API</strong> allowing full administration via HTTP requests — great for automation, CI/CD, and integration with other systems.</p>

<h3 id="lay-access-token"><strong>5.1 Get Access Token</strong></h3>
<p>Before calling the API, need to get access token from master realm:</p>
<pre><code># Lấy access token bằng admin credentials
ACCESS_TOKEN=$(curl -s -X POST \
  "http://localhost:8080/realms/master/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=admin" \
  -d "password=admin" \
  -d "grant_type=password" \
  -d "client_id=admin-cli" | jq -r '.access_token')

echo $ACCESS_TOKEN</code></pre>

<h3 id="quan-ly-realm-voi-api"><strong>5.2 Realm Management with API</strong></h3>

<p><strong>Get list of realms:</strong></p>
<pre><code>curl -s -X GET \
  "http://localhost:8080/admin/realms" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" | jq '.[].realm'</code></pre>

<p><strong>Create new realm:</strong></p>
<pre><code>curl -s -X POST \
  "http://localhost:8080/admin/realms" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "realm": "my-company",
    "enabled": true,
    "displayName": "My Company",
    "sslRequired": "external",
    "registrationAllowed": false,
    "loginWithEmailAllowed": true,
    "resetPasswordAllowed": true,
    "bruteForceProtected": true,
    "failureFactor": 5
  }'</code></pre>

<p><strong>Get realm details:</strong></p>
<pre><code>curl -s -X GET \
  "http://localhost:8080/admin/realms/my-company" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .</code></pre>

<p><strong>Update realm:</strong></p>
<pre><code>curl -s -X PUT \
  "http://localhost:8080/admin/realms/my-company" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "displayName": "My Company Updated",
    "sslRequired": "all"
  }'</code></pre>

<p><strong>Delete realm:</strong></p>
<pre><code>curl -s -X DELETE \
  "http://localhost:8080/admin/realms/my-company" \
  -H "Authorization: Bearer $ACCESS_TOKEN"</code></pre>

<h3 id="api-endpoints-quan-trong"><strong>5.3 Important API Endpoints</strong></h3>
<table>
<thead>
<tr><th>Endpoint</th><th>Method</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>/admin/realms</td><td>GET</td><td>Realms List</td></tr>
<tr><td>/admin/realms</td><td>POST</td><td>Create new realm</td></tr>
<tr><td>/admin/realms/{realm}</td><td>GET</td><td>Details realm</td></tr>
<tr><td>/admin/realms/{realm}</td><td>PUT</td><td>Update realm</td></tr>
<tr><td>/admin/realms/{realm}</td><td>DELETE</td><td>Delete realm</td></tr>
<tr><td>/admin/realms/{realm}/users</td><td>GET</td><td>List of users</td></tr>
<tr><td>/admin/realms/{realm}/users</td><td>POST</td><td>Create user</td></tr>
<tr><td>/admin/realms/{realm}/clients</td><td>GET</td><td>List of clients</td></tr>
<tr><td>/admin/realms/{realm}/roles</td><td>GET</td><td>List of realm roles</td></tr>
<tr><td>/admin/realms/{realm}/groups</td><td>GET</td><td>List of groups</td></tr>
<tr><td>/admin/realms/{realm}/events</td><td>GET</td><td>Events log</td></tr>
</tbody>
</table>

<h3 id="postman-collection"><strong>5.4 Using Postman</strong></h3>
<p>Keycloak provides OpenAPI spec for Admin REST API. You can import into Postman or Swagger UI to easily explore and test the API:</p>
<pre><code># OpenAPI spec URL
http://localhost:8080/admin/realms/{realm}/.well-known/openid-configuration</code></pre>

<h2 id="6-thuc-hanh"><strong>6. Practice exercises</strong></h2>

<p>Do the following exercises to consolidate knowledge:</p>

<ol>
<li><p><strong>Create realm "dev-company"</strong> via Admin Console with settings:</p>
<ul>
<li>Display name: "Dev Company"</li>
<li>Login with email: ON</li>
<li>User registration: ON</li>
<li>Forgot password: ON</li>
<li>Verify email: ON</li>
<li>Remember me: ON</li>
</ul>
</li>
<li><p><strong>Configure Brute Force Detection</strong> for the newly created realm:</p>
<ul>
<li>Max login failures: 3</li>
<li>Wait increment: 120 seconds</li>
<li>Max wait: 600 seconds</li>
</ul>
</li>
<li><p><strong>Use kcadm.sh</strong> to create realm "staging-company" with similar configuration</p></li>
<li><p><strong>Use Admin REST API</strong> (curl) to create realm "test-company" and verify by getting list of realms</p></li>
<li><p><strong>Export</strong> realm "dev-company" to JSON and re-import with a different name</p></li>
</ol>

<h2 id="7-tong-ket"><strong>7. Summary</strong></h2>

<p>In this lesson, you learned:</p>
<ul>
<li><p>How to access and use <strong>Admin Console</strong></p></li>
<li><p>Create the first <strong>admin user</strong> through multiple methods</p></li>
<li><p>Create and configure <strong>Realm</strong> — key management unit in Keycloak</p></li>
<li><p>Understand important <strong>Realm Settings</strong>: General, Login, Email, Themes, Localization, Keys, Tokens, Security Defenses</p></li>
<li><p>Use <strong>Admin CLI</strong> (kcadm.sh) to administer via command line</p></li>
<li><p>Use <strong>Admin REST API</strong> to automate administration</p></li>
</ul>

<p>The next article will provide detailed instructions on <strong>managing Users, Groups and User Profile</strong> in Keycloak.</p>
