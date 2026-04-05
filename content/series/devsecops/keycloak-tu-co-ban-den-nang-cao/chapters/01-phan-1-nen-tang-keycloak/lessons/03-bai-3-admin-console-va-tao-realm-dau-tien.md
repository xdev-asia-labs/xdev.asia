---
id: 019d8b30-b103-7001-c001-e0c5f8100103
title: 'Bài 3: Admin Console và tạo Realm đầu tiên'
slug: bai-3-admin-console-va-tao-realm-dau-tien
description: >-
  Làm quen Admin Console, tạo admin user đầu tiên, tạo và cấu hình Realm,
  Realm Settings (General, Login, Email, Themes, Localization, Keys, Security
  Defenses), Admin CLI (kcadm.sh) và Admin REST API cơ bản.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Nền tảng Keycloak"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Bài 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 3: Admin Console và tạo Realm đầu tiên</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng Keycloak</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-truy-cap-admin-console"><strong>1. Truy cập Admin Console</strong></h2>

<p>Sau khi cài đặt Keycloak (standalone hoặc Docker), bạn có thể truy cập <strong>Admin Console</strong> — giao diện quản trị tập trung cho toàn bộ hệ thống Keycloak.</p>

<h3 id="url-truy-cap"><strong>URL truy cập</strong></h3>
<p>Mặc định, Admin Console có tại:</p>
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

<p><strong>Cách 2: Qua welcome page (chỉ khi truy cập từ localhost)</strong></p>
<p>Truy cập <code>http://localhost:8080</code>, bạn sẽ thấy form tạo admin user. Nhập username và password, sau đó click <strong>Create</strong>.</p>

<p><strong>Cách 3: Qua command line</strong></p>
<pre><code># Standalone
export KC_BOOTSTRAP_ADMIN_USERNAME=admin
export KC_BOOTSTRAP_ADMIN_PASSWORD=admin
bin/kc.sh start-dev</code></pre>

<h3 id="giao-dien-admin-console"><strong>Giao diện Admin Console</strong></h3>
<p>Sau khi đăng nhập, bạn sẽ thấy giao diện Admin Console với các thành phần chính:</p>
<ul>
<li><p><strong>Realm selector</strong> (góc trái trên) — chọn realm đang quản lý</p></li>
<li><p><strong>Left sidebar</strong> — menu điều hướng chính: Clients, Client scopes, Realm roles, Users, Groups, Sessions, Events, Realm settings, Authentication, Identity providers, User federation</p></li>
<li><p><strong>Main content area</strong> — hiển thị nội dung chi tiết của mục được chọn</p></li>
<li><p><strong>User dropdown</strong> (góc phải trên) — quản lý tài khoản admin, sign out</p></li>
</ul>

<h2 id="2-tao-realm-dau-tien"><strong>2. Tạo Realm đầu tiên</strong></h2>

<h3 id="master-realm-va-custom-realm"><strong>Master Realm vs Custom Realm</strong></h3>
<p>Khi cài đặt Keycloak, một realm có tên <strong>master</strong> được tạo sẵn. Master realm là realm đặc biệt dùng để quản lý các realm khác — <strong>không nên sử dụng master realm cho ứng dụng</strong>.</p>

<p>Best practices:</p>
<ul>
<li><p>Sử dụng <strong>master realm</strong> chỉ cho super admin quản lý hệ thống Keycloak</p></li>
<li><p>Tạo <strong>custom realm</strong> riêng cho mỗi tổ chức, dự án, hoặc môi trường</p></li>
<li><p>Đặt tên realm có ý nghĩa: <code>mycompany-dev</code>, <code>mycompany-staging</code>, <code>mycompany-prod</code></p></li>
</ul>

<h3 id="tao-realm-qua-admin-console"><strong>Tạo Realm qua Admin Console</strong></h3>
<ol>
<li><p>Click vào <strong>realm selector</strong> (dropdown góc trái trên, đang hiển thị "master")</p></li>
<li><p>Click <strong>Create realm</strong></p></li>
<li><p>Nhập thông tin:</p>
<ul>
<li><strong>Realm name</strong>: <code>my-company</code> (chỉ chứa lowercase, numbers, hyphens)</li>
<li><strong>Enabled</strong>: ON</li>
</ul>
</li>
<li><p>Click <strong>Create</strong></p></li>
</ol>

<h3 id="tao-realm-tu-json"><strong>Tạo Realm từ JSON file</strong></h3>
<p>Bạn có thể import realm từ file JSON — hữu ích cho việc tái tạo cấu hình giữa các môi trường:</p>
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

<p>Import qua Admin Console: khi tạo realm, click <strong>Browse</strong> để chọn file JSON.</p>

<h2 id="3-realm-settings"><strong>3. Realm Settings chi tiết</strong></h2>

<p>Sau khi tạo realm, truy cập <strong>Realm settings</strong> từ sidebar để cấu hình chi tiết.</p>

<h3 id="general-tab"><strong>3.1 Tab General</strong></h3>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Giá trị khuyến nghị</th></tr>
</thead>
<tbody>
<tr><td>Display name</td><td>Tên hiển thị trên login page</td><td>Tên công ty/dự án</td></tr>
<tr><td>HTML display name</td><td>Hỗ trợ HTML cho tên hiển thị</td><td>Logo + tên</td></tr>
<tr><td>Frontend URL</td><td>URL mà client sử dụng để kết nối</td><td>https://auth.mycompany.com</td></tr>
<tr><td>Require SSL</td><td>Yêu cầu SSL cho requests</td><td><code>external</code> (dev) / <code>all</code> (prod)</td></tr>
<tr><td>User-managed access</td><td>Cho phép users quản lý resources (UMA)</td><td>OFF (trừ khi cần UMA)</td></tr>
<tr><td>ACR to LoA mapping</td><td>Mapping Authentication Context Class Reference</td><td>Cấu hình khi cần step-up auth</td></tr>
</tbody>
</table>

<h3 id="login-tab"><strong>3.2 Tab Login</strong></h3>
<p>Cấu hình behavior của trang đăng nhập:</p>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Mặc định</th></tr>
</thead>
<tbody>
<tr><td>User registration</td><td>Cho phép đăng ký tài khoản mới</td><td>OFF</td></tr>
<tr><td>Forgot password</td><td>Hiển thị link "Quên mật khẩu"</td><td>OFF</td></tr>
<tr><td>Remember me</td><td>Checkbox "Ghi nhớ đăng nhập"</td><td>OFF</td></tr>
<tr><td>Email as username</td><td>Dùng email làm username</td><td>OFF</td></tr>
<tr><td>Login with email</td><td>Cho phép đăng nhập bằng email</td><td>ON</td></tr>
<tr><td>Duplicate emails</td><td>Cho phép trùng email</td><td>OFF</td></tr>
<tr><td>Verify email</td><td>Bắt buộc xác thực email</td><td>OFF</td></tr>
<tr><td>Edit username</td><td>Cho phép thay đổi username</td><td>OFF</td></tr>
</tbody>
</table>

<p><strong>Khuyến nghị cho production:</strong></p>
<pre><code>User registration: OFF (hoặc ON với reCAPTCHA)
Forgot password: ON
Remember me: ON
Email as username: Tùy yêu cầu
Login with email: ON
Verify email: ON
Edit username: OFF</code></pre>

<h3 id="email-tab"><strong>3.3 Tab Email</strong></h3>
<p>Cấu hình SMTP server để gửi email (verification, reset password, notifications):</p>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>From</td><td>Địa chỉ email gửi đi (ví dụ: noreply@mycompany.com)</td></tr>
<tr><td>From display name</td><td>Tên hiển thị trong email</td></tr>
<tr><td>Reply to</td><td>Địa chỉ reply (ví dụ: support@mycompany.com)</td></tr>
<tr><td>Host</td><td>SMTP server hostname</td></tr>
<tr><td>Port</td><td>SMTP port (587 cho STARTTLS, 465 cho SSL)</td></tr>
<tr><td>Encryption</td><td>Bật SSL hoặc STARTTLS</td></tr>
<tr><td>Authentication</td><td>Username và password cho SMTP</td></tr>
</tbody>
</table>

<p>Ví dụ cấu hình với Gmail SMTP:</p>
<pre><code>Host: smtp.gmail.com
Port: 587
From: noreply@mycompany.com
Enable StartTLS: ON
Authentication: ON
Username: your-email@gmail.com
Password: app-specific-password</code></pre>

<h3 id="themes-tab"><strong>3.4 Tab Themes</strong></h3>
<p>Tùy chỉnh giao diện cho các trang khác nhau:</p>
<ul>
<li><p><strong>Login theme</strong> — trang đăng nhập, đăng ký, reset password</p></li>
<li><p><strong>Account theme</strong> — trang quản lý tài khoản cho users</p></li>
<li><p><strong>Admin console theme</strong> — giao diện Admin Console</p></li>
<li><p><strong>Email theme</strong> — template cho emails</p></li>
</ul>

<p>Keycloak cung cấp theme <code>keycloak</code> (mặc định) và <code>keycloak.v2</code> (Account Console v3, React-based). Bạn có thể tạo custom themes — sẽ được đề cập trong bài sau.</p>

<h3 id="localization-tab"><strong>3.5 Tab Localization</strong></h3>
<p>Hỗ trợ đa ngôn ngữ cho các trang login, account, email:</p>
<ol>
<li><p>Bật <strong>Internationalization</strong>: ON</p></li>
<li><p>Chọn <strong>Supported locales</strong>: en, vi, ja, zh-CN,...</p></li>
<li><p>Chọn <strong>Default locale</strong>: vi (cho giao diện tiếng Việt mặc định)</p></li>
<li><p>Tùy chỉnh message bundles cho từng locale nếu cần</p></li>
</ol>

<h3 id="keys-tab"><strong>3.6 Tab Keys</strong></h3>
<p>Quản lý cryptographic keys cho realm — dùng để ký và mã hóa tokens:</p>
<ul>
<li><p><strong>Active keys</strong> — keys đang được sử dụng để ký tokens</p></li>
<li><p><strong>Passive keys</strong> — keys cũ vẫn dùng để verify tokens đã ký trước đó</p></li>
<li><p><strong>Disabled keys</strong> — keys không còn sử dụng</p></li>
</ul>

<p>Các key providers mặc định:</p>
<table>
<thead>
<tr><th>Provider</th><th>Algorithm</th><th>Mục đích</th></tr>
</thead>
<tbody>
<tr><td>rsa-generated</td><td>RS256</td><td>Ký JWT tokens</td></tr>
<tr><td>rsa-enc-generated</td><td>RSA-OAEP</td><td>Mã hóa tokens</td></tr>
<tr><td>hmac-generated</td><td>HS512</td><td>HMAC signing</td></tr>
<tr><td>aes-generated</td><td>AES</td><td>Symmetric encryption</td></tr>
<tr><td>ecdsa-generated</td><td>ES256</td><td>Elliptic curve signing</td></tr>
</tbody>
</table>

<p><strong>Key rotation:</strong> Thêm key provider mới → key mới trở thành active → key cũ chuyển sang passive → sau một thời gian, disable key cũ.</p>

<h3 id="tokens-tab"><strong>3.7 Tab Tokens</strong></h3>
<p>Cấu hình thời gian sống và behavior của tokens:</p>
<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Giá trị khuyến nghị</th></tr>
</thead>
<tbody>
<tr><td>Default Signature Algorithm</td><td>Algorithm ký JWT</td><td>RS256</td></tr>
<tr><td>Revoke Refresh Token</td><td>Thu hồi refresh token sau khi sử dụng</td><td>ON (production)</td></tr>
<tr><td>SSO Session Idle</td><td>Thời gian session idle tối đa</td><td>30 phút</td></tr>
<tr><td>SSO Session Max</td><td>Thời gian session tối đa</td><td>10 giờ</td></tr>
<tr><td>Access Token Lifespan</td><td>Thời gian sống của access token</td><td>5 phút</td></tr>
<tr><td>Client login timeout</td><td>Thời gian tối đa cho login flow</td><td>5 phút</td></tr>
</tbody>
</table>

<h3 id="security-defenses-tab"><strong>3.8 Tab Security Defenses</strong></h3>
<p>Cấu hình bảo mật cho realm:</p>

<p><strong>Headers:</strong></p>
<table>
<thead>
<tr><th>Header</th><th>Giá trị mặc định</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>X-Frame-Options</td><td>SAMEORIGIN</td><td>Chống clickjacking</td></tr>
<tr><td>Content-Security-Policy</td><td>frame-src 'self'; ...</td><td>CSP header</td></tr>
<tr><td>X-Content-Type-Options</td><td>nosniff</td><td>Chống MIME sniffing</td></tr>
<tr><td>X-XSS-Protection</td><td>1; mode=block</td><td>XSS filter</td></tr>
<tr><td>Strict-Transport-Security</td><td>max-age=31536000</td><td>Bắt buộc HTTPS</td></tr>
<tr><td>Referrer-Policy</td><td>no-referrer</td><td>Kiểm soát Referrer header</td></tr>
</tbody>
</table>

<p><strong>Brute Force Detection:</strong></p>
<ul>
<li><p><strong>Enabled</strong>: ON (bật chống brute force)</p></li>
<li><p><strong>Permanent lockout</strong>: OFF (tự động unlock sau thời gian)</p></li>
<li><p><strong>Max login failures</strong>: 5 (sau 5 lần đăng nhập thất bại sẽ bị lock)</p></li>
<li><p><strong>Wait increment</strong>: 60 seconds (thời gian chờ tăng dần)</p></li>
<li><p><strong>Max wait</strong>: 900 seconds (thời gian chờ tối đa 15 phút)</p></li>
<li><p><strong>Quick login check</strong>: 1000 ms (phát hiện login quá nhanh)</p></li>
</ul>

<h2 id="4-admin-cli"><strong>4. Admin CLI (kcadm.sh)</strong></h2>

<p>Keycloak cung cấp <strong>Admin CLI</strong> (<code>kcadm.sh</code>) — công cụ command-line để quản trị Keycloak mà không cần truy cập Admin Console.</p>

<h3 id="cau-hinh-credentials"><strong>4.1 Cấu hình Credentials</strong></h3>
<p>Trước khi sử dụng Admin CLI, cần đăng nhập:</p>
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

<p><strong>Lưu ý bảo mật:</strong> Trong production, sử dụng <code>--client</code> và <code>--secret</code> thay vì username/password trực tiếp trên command line.</p>

<h3 id="quan-ly-realm-voi-cli"><strong>4.2 Quản lý Realm với CLI</strong></h3>

<p><strong>Tạo realm mới:</strong></p>
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

<p><strong>Xem danh sách realms:</strong></p>
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

<p><strong>Xem chi tiết realm:</strong></p>
<pre><code>bin/kcadm.sh get realms/my-company</code></pre>

<p><strong>Cập nhật realm:</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s displayName="My Company Production" \
  -s sslRequired=all \
  -s bruteForceProtected=true \
  -s failureFactor=5</code></pre>

<p><strong>Xóa realm:</strong></p>
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

<p><strong>Cấu hình Token settings:</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s accessTokenLifespan=300 \
  -s ssoSessionIdleTimeout=1800 \
  -s ssoSessionMaxLifespan=36000 \
  -s revokeRefreshToken=true \
  -s refreshTokenMaxReuse=0</code></pre>

<p><strong>Cấu hình SMTP Email:</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s 'smtpServer={"host":"smtp.gmail.com","port":"587","from":"noreply@mycompany.com","fromDisplayName":"My Company","starttls":"true","auth":"true","user":"your-email@gmail.com","password":"app-password"}'</code></pre>

<p><strong>Export realm configuration:</strong></p>
<pre><code># Export realm sang file JSON
bin/kcadm.sh get realms/my-company &gt; my-company-realm.json</code></pre>

<h2 id="5-admin-rest-api"><strong>5. Admin REST API</strong></h2>

<p>Keycloak cung cấp <strong>Admin REST API</strong> cho phép quản trị hoàn toàn qua HTTP requests — phù hợp cho automation, CI/CD, và tích hợp với các hệ thống khác.</p>

<h3 id="lay-access-token"><strong>5.1 Lấy Access Token</strong></h3>
<p>Trước khi gọi API, cần lấy access token từ master realm:</p>
<pre><code># Lấy access token bằng admin credentials
ACCESS_TOKEN=$(curl -s -X POST \
  "http://localhost:8080/realms/master/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=admin" \
  -d "password=admin" \
  -d "grant_type=password" \
  -d "client_id=admin-cli" | jq -r '.access_token')

echo $ACCESS_TOKEN</code></pre>

<h3 id="quan-ly-realm-voi-api"><strong>5.2 Quản lý Realm với API</strong></h3>

<p><strong>Lấy danh sách realms:</strong></p>
<pre><code>curl -s -X GET \
  "http://localhost:8080/admin/realms" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" | jq '.[].realm'</code></pre>

<p><strong>Tạo realm mới:</strong></p>
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

<p><strong>Lấy chi tiết realm:</strong></p>
<pre><code>curl -s -X GET \
  "http://localhost:8080/admin/realms/my-company" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .</code></pre>

<p><strong>Cập nhật realm:</strong></p>
<pre><code>curl -s -X PUT \
  "http://localhost:8080/admin/realms/my-company" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "displayName": "My Company Updated",
    "sslRequired": "all"
  }'</code></pre>

<p><strong>Xóa realm:</strong></p>
<pre><code>curl -s -X DELETE \
  "http://localhost:8080/admin/realms/my-company" \
  -H "Authorization: Bearer $ACCESS_TOKEN"</code></pre>

<h3 id="api-endpoints-quan-trong"><strong>5.3 Các API Endpoints quan trọng</strong></h3>
<table>
<thead>
<tr><th>Endpoint</th><th>Method</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td>/admin/realms</td><td>GET</td><td>Danh sách realms</td></tr>
<tr><td>/admin/realms</td><td>POST</td><td>Tạo realm mới</td></tr>
<tr><td>/admin/realms/{realm}</td><td>GET</td><td>Chi tiết realm</td></tr>
<tr><td>/admin/realms/{realm}</td><td>PUT</td><td>Cập nhật realm</td></tr>
<tr><td>/admin/realms/{realm}</td><td>DELETE</td><td>Xóa realm</td></tr>
<tr><td>/admin/realms/{realm}/users</td><td>GET</td><td>Danh sách users</td></tr>
<tr><td>/admin/realms/{realm}/users</td><td>POST</td><td>Tạo user</td></tr>
<tr><td>/admin/realms/{realm}/clients</td><td>GET</td><td>Danh sách clients</td></tr>
<tr><td>/admin/realms/{realm}/roles</td><td>GET</td><td>Danh sách realm roles</td></tr>
<tr><td>/admin/realms/{realm}/groups</td><td>GET</td><td>Danh sách groups</td></tr>
<tr><td>/admin/realms/{realm}/events</td><td>GET</td><td>Events log</td></tr>
</tbody>
</table>

<h3 id="postman-collection"><strong>5.4 Sử dụng Postman</strong></h3>
<p>Keycloak cung cấp OpenAPI spec cho Admin REST API. Bạn có thể import vào Postman hoặc Swagger UI để dễ dàng khám phá và test API:</p>
<pre><code># OpenAPI spec URL
http://localhost:8080/admin/realms/{realm}/.well-known/openid-configuration</code></pre>

<h2 id="6-thuc-hanh"><strong>6. Bài tập thực hành</strong></h2>

<p>Thực hiện các bài tập sau để củng cố kiến thức:</p>

<ol>
<li><p><strong>Tạo realm "dev-company"</strong> qua Admin Console với các settings:</p>
<ul>
<li>Display name: "Dev Company"</li>
<li>Login with email: ON</li>
<li>User registration: ON</li>
<li>Forgot password: ON</li>
<li>Verify email: ON</li>
<li>Remember me: ON</li>
</ul>
</li>
<li><p><strong>Cấu hình Brute Force Detection</strong> cho realm vừa tạo:</p>
<ul>
<li>Max login failures: 3</li>
<li>Wait increment: 120 seconds</li>
<li>Max wait: 600 seconds</li>
</ul>
</li>
<li><p><strong>Sử dụng kcadm.sh</strong> để tạo realm "staging-company" với cấu hình tương tự</p></li>
<li><p><strong>Sử dụng Admin REST API</strong> (curl) để tạo realm "test-company" và verify bằng cách lấy danh sách realms</p></li>
<li><p><strong>Export</strong> realm "dev-company" sang JSON và import lại với tên khác</p></li>
</ol>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<p>Trong bài này, bạn đã học:</p>
<ul>
<li><p>Cách truy cập và sử dụng <strong>Admin Console</strong></p></li>
<li><p>Tạo <strong>admin user</strong> đầu tiên qua nhiều phương thức</p></li>
<li><p>Tạo và cấu hình <strong>Realm</strong> — đơn vị quản lý chính trong Keycloak</p></li>
<li><p>Hiểu các <strong>Realm Settings</strong> quan trọng: General, Login, Email, Themes, Localization, Keys, Tokens, Security Defenses</p></li>
<li><p>Sử dụng <strong>Admin CLI</strong> (kcadm.sh) để quản trị qua command line</p></li>
<li><p>Sử dụng <strong>Admin REST API</strong> để tự động hóa quản trị</p></li>
</ul>

<p>Bài tiếp theo sẽ hướng dẫn chi tiết về <strong>quản lý Users, Groups và User Profile</strong> trong Keycloak.</p>
