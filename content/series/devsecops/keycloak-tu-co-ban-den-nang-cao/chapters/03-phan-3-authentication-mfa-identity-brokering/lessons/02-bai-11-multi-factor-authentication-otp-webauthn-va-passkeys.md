---
id: 019d8b30-b111-7001-c001-e0c5f8100111
title: 'Bài 11: Multi-Factor Authentication - OTP, WebAuthn và Passkeys'
slug: bai-11-multi-factor-authentication-otp-webauthn-va-passkeys
description: >-
  Cấu hình Two-Factor Authentication với TOTP/HOTP (Google Authenticator,
  FreeOTP), OTP Policy settings, Recovery Codes. WebAuthn setup
  (FIDO2 security keys), WebAuthn Passwordless Policy. Passkeys integration
  (conditional và modal UI), đăng ký Passkeys qua AIA, Kerberos
  authentication và X.509 client certificate authentication.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Authentication, MFA và Identity Brokering"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
---
<h2 id="1-otp-authentication"><strong>1. OTP Authentication — TOTP và HOTP</strong></h2>

<p>OTP (One-Time Password) là phương thức MFA phổ biến nhất. Keycloak hỗ trợ hai loại:</p>

<table>
<thead>
<tr><th>Loại</th><th>Mô tả</th><th>Thuật toán</th></tr>
</thead>
<tbody>
<tr><td><strong>TOTP</strong> (Time-based)</td><td>Mã OTP thay đổi theo thời gian (mỗi 30s)</td><td>RFC 6238</td></tr>
<tr><td><strong>HOTP</strong> (HMAC-based)</td><td>Mã OTP thay đổi theo counter</td><td>RFC 4226</td></tr>
</tbody>
</table>

<p><strong>TOTP được khuyến khích</strong> vì bảo mật hơn — mã tự hết hạn theo thời gian. HOTP chỉ dùng khi thiết bị không hỗ trợ đồng hồ chính xác.</p>

<h3 id="11-otp-policy"><strong>1.1 OTP Policy Configuration</strong></h3>

<p>Cấu hình OTP Policy tại <strong>Authentication → Policies → OTP Policy</strong>:</p>

<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Giá trị mặc định</th><th>Khuyến nghị</th></tr>
</thead>
<tbody>
<tr><td><strong>OTP Type</strong></td><td>TOTP hoặc HOTP</td><td><code>totp</code></td><td><code>totp</code></td></tr>
<tr><td><strong>OTP Hash Algorithm</strong></td><td>Thuật toán hash</td><td><code>SHA1</code></td><td><code>SHA256</code> hoặc <code>SHA512</code></td></tr>
<tr><td><strong>Number of Digits</strong></td><td>Số chữ số OTP</td><td><code>6</code></td><td><code>6</code> (tương thích tốt nhất)</td></tr>
<tr><td><strong>Look Ahead Window</strong></td><td>Số mã trước/sau được chấp nhận</td><td><code>1</code></td><td><code>1</code> — tăng nếu user hay bị lệch time</td></tr>
<tr><td><strong>OTP Token Period</strong></td><td>Thời gian sống mỗi mã (giây) — chỉ TOTP</td><td><code>30</code></td><td><code>30</code></td></tr>
<tr><td><strong>Initial Counter</strong></td><td>Counter khởi đầu — chỉ HOTP</td><td><code>0</code></td><td><code>0</code></td></tr>
<tr><td><strong>Supported Applications</strong></td><td>Apps hiển thị trong hướng dẫn setup</td><td>FreeOTP, Google Authenticator</td><td>Thêm các app khác nếu cần</td></tr>
</tbody>
</table>

<h3 id="12-setup-google-authenticator"><strong>1.2 Setup OTP với Google Authenticator / FreeOTP</strong></h3>

<p><strong>Bước 1: Bật OTP trong Authentication Flow</strong></p>

<p>Mặc định, Browser Flow đã có <code>Browser - Conditional OTP</code> sub-flow. OTP chỉ yêu cầu khi user đã setup OTP credential. Để <strong>bắt buộc</strong> tất cả users phải setup OTP:</p>

<ol>
<li>Vào <strong>Authentication → Required Actions</strong></li>
<li>Tìm <strong>Configure OTP</strong></li>
<li>Bật <strong>Default Action</strong>: On — tất cả users mới phải setup OTP</li>
<li>Hoặc bật <strong>Required</strong> ở column "Set as default action" để enforce cho existing users</li>
</ol>

<p><strong>Bước 2: User đăng ký OTP</strong></p>

<p>Khi user đăng nhập lần đầu (hoặc sau khi admin bật Required Action):</p>

<ol>
<li>Keycloak hiển thị trang <strong>"Mobile Authenticator Setup"</strong></li>
<li>User mở app Google Authenticator hoặc FreeOTP</li>
<li>Scan QR code hoặc nhập manual key</li>
<li>Nhập mã OTP xác nhận từ app</li>
<li>OTP credential được lưu cho user</li>
</ol>

<p><strong>Bước 3: Xác thực OTP</strong></p>

<p>Từ lần đăng nhập tiếp theo, sau khi nhập username/password, user phải nhập mã OTP từ app.</p>

<h3 id="13-quan-ly-otp-credentials"><strong>1.3 Quản lý OTP Credentials</strong></h3>

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

<p>Recovery Codes cho phép user khôi phục truy cập khi mất thiết bị OTP.</p>

<h3 id="21-bat-recovery-codes"><strong>2.1 Bật Recovery Codes</strong></h3>

<ol>
<li>Vào <strong>Authentication → Required Actions</strong></li>
<li>Tìm <strong>Recovery Authentication Codes</strong> (nếu chưa có, cần register)</li>
<li>Bật <strong>Default Action</strong> hoặc <strong>Enabled</strong></li>
</ol>

<p><strong>Enforce Recovery Codes sau OTP setup:</strong></p>

<p>Để bắt buộc user tạo recovery codes ngay sau khi setup OTP, cấu hình Required Actions theo thứ tự:</p>

<ol>
<li><code>CONFIGURE_TOTP</code> — Setup OTP trước</li>
<li><code>CONFIGURE_RECOVERY_AUTHN_CODES</code> — Tạo recovery codes sau</li>
</ol>

<h3 id="22-su-dung-recovery-codes"><strong>2.2 Sử dụng Recovery Codes</strong></h3>

<p>Khi user mất thiết bị OTP:</p>

<ol>
<li>Tại màn hình nhập OTP, click <strong>"Try another way"</strong></li>
<li>Chọn <strong>"Recovery Code"</strong></li>
<li>Nhập 1 trong các recovery codes đã lưu</li>
<li>Mỗi code chỉ dùng được <strong>1 lần</strong></li>
<li>Sau khi dùng hết codes, cần generate lại</li>
</ol>

<h2 id="3-webauthn-fido2"><strong>3. WebAuthn (FIDO2) — Security Keys</strong></h2>

<p>WebAuthn cho phép xác thực bằng <strong>hardware security keys</strong> (YubiKey, Google Titan) hoặc <strong>platform authenticators</strong> (Touch ID, Windows Hello).</p>

<h3 id="31-setup-webauthn"><strong>3.1 Setup WebAuthn trong Browser Flow</strong></h3>

<p><strong>Bước 1: Thêm WebAuthn vào Authentication Flow</strong></p>

<ol>
<li>Duplicate Browser Flow → <code>Browser with WebAuthn</code></li>
<li>Trong sub-flow Forms, thêm <code>WebAuthn Authenticator</code></li>
<li>Cấu trúc flow:
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

<p><strong>Bước 2: Bật Required Action</strong></p>

<ol>
<li>Vào <strong>Authentication → Required Actions</strong></li>
<li>Tìm <strong>WebAuthn Register</strong> → bật <strong>Default Action</strong></li>
<li>Users mới sẽ được yêu cầu đăng ký security key</li>
</ol>

<h3 id="32-webauthn-policy"><strong>3.2 WebAuthn Policy Configuration</strong></h3>

<p>Cấu hình tại <strong>Authentication → Policies → WebAuthn Policy</strong>:</p>

<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Giá trị</th></tr>
</thead>
<tbody>
<tr><td><strong>Relying Party Entity Name</strong></td><td>Tên hiển thị cho user</td><td><code>Keycloak</code> hoặc tên công ty</td></tr>
<tr><td><strong>Signature Algorithms</strong></td><td>Thuật toán chữ ký</td><td><code>ES256</code> (khuyến nghị), <code>RS256</code></td></tr>
<tr><td><strong>Relying Party ID</strong></td><td>Domain của Keycloak</td><td><code>keycloak.example.com</code> (hoặc để trống = auto)</td></tr>
<tr><td><strong>Attestation Conveyance Preference</strong></td><td>Yêu cầu attestation từ key</td><td><code>not specified</code> hoặc <code>direct</code></td></tr>
<tr><td><strong>Authenticator Attachment</strong></td><td>Loại authenticator</td><td><code>not specified</code> (chấp nhận cả USB key và platform)</td></tr>
<tr><td><strong>Require Resident Key</strong></td><td>Key phải lưu trên device</td><td><code>not specified</code></td></tr>
<tr><td><strong>User Verification Requirement</strong></td><td>Yêu cầu xác thực user trên device</td><td><code>not specified</code> hoặc <code>required</code></td></tr>
<tr><td><strong>Create Timeout</strong></td><td>Timeout khi đăng ký key (giây)</td><td><code>0</code> (không timeout)</td></tr>
<tr><td><strong>Avoid Same Authenticator Register</strong></td><td>Không cho đăng ký cùng key 2 lần</td><td><code>Off</code></td></tr>
<tr><td><strong>Acceptable AAGUIDs</strong></td><td>Whitelist security key models</td><td>Để trống = chấp nhận tất cả</td></tr>
</tbody>
</table>

<h3 id="33-quan-ly-webauthn-credentials"><strong>3.3 Quản lý WebAuthn Credentials</strong></h3>

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

<p>User cũng có thể tự quản lý security keys trong <strong>Account Console</strong> tại <code>/realms/myrealm/account/#/security/webauthn</code>.</p>

<h2 id="4-passkeys"><strong>4. Passkeys</strong></h2>

<p>Passkeys là phát triển tiếp theo của WebAuthn — cho phép <strong>đăng nhập không mật khẩu</strong> (passwordless) bằng fingerprint, face recognition, hoặc device PIN.</p>

<h3 id="41-passkeys-vs-webauthn"><strong>4.1 Passkeys vs WebAuthn truyền thống</strong></h3>

<table>
<thead>
<tr><th>Tính năng</th><th>WebAuthn (MFA)</th><th>Passkeys (Passwordless)</th></tr>
</thead>
<tbody>
<tr><td><strong>Mục đích</strong></td><td>MFA — thêm bước sau password</td><td>Thay thế password hoàn toàn</td></tr>
<tr><td><strong>Authenticator</strong></td><td><code>WebAuthn Authenticator</code></td><td><code>WebAuthn Passwordless Authenticator</code></td></tr>
<tr><td><strong>Policy</strong></td><td>WebAuthn Policy</td><td>WebAuthn Passwordless Policy</td></tr>
<tr><td><strong>Required Action</strong></td><td>WebAuthn Register</td><td>WebAuthn Register Passwordless</td></tr>
<tr><td><strong>Resident Key</strong></td><td>Không bắt buộc</td><td>Bắt buộc (discoverable credential)</td></tr>
<tr><td><strong>User Verification</strong></td><td>Tuỳ chọn</td><td>Required (biometrics/PIN)</td></tr>
</tbody>
</table>

<h3 id="42-enable-passkeys"><strong>4.2 Bật Passkeys</strong></h3>

<p><strong>Bước 1: Cấu hình WebAuthn Passwordless Policy</strong></p>

<ol>
<li>Vào <strong>Authentication → Policies → WebAuthn Passwordless Policy</strong></li>
<li>Cấu hình:
    <ul>
    <li><strong>Relying Party Entity Name</strong>: <code>My Company</code></li>
    <li><strong>Signature Algorithms</strong>: <code>ES256</code></li>
    <li><strong>User Verification Requirement</strong>: <code>required</code></li>
    <li><strong>Require Resident Key</strong>: <code>Yes</code> — bắt buộc cho Passkeys</li>
    </ul>
</li>
</ol>

<p><strong>Bước 2: Tạo Passwordless Browser Flow</strong></p>

<pre><code>Passwordless Browser Flow
├── Cookie (Alternative)
└── Passwordless Login (Alternative)
    ├── WebAuthn Passwordless Authenticator (Alternative)  → Đăng nhập bằng Passkey
    └── Username Password Fallback (Alternative)           → Sub-flow fallback
        ├── Username Password Form (Required)
        └── Conditional OTP (Conditional)
            ├── Condition - User Configured (Required)
            └── OTP Form (Required)</code></pre>

<p><strong>Bước 3: Bật Required Action</strong></p>

<ol>
<li>Vào <strong>Authentication → Required Actions</strong></li>
<li>Bật <strong>WebAuthn Register Passwordless</strong> → Default Action: On</li>
</ol>

<h3 id="43-passkey-ui-modes"><strong>4.3 Passkey UI Modes — Conditional và Modal</strong></h3>

<p><strong>Conditional UI (Autofill):</strong></p>
<p>Passkey gợi ý tự động trong trường username — user chỉ cần chọn và xác thực bằng biometrics. Đây là trải nghiệm mượt nhất.</p>

<p>Để bật Conditional UI, đặt <code>WebAuthn Passwordless Authenticator</code> ở vị trí đầu tiên trong flow với requirement <code>Alternative</code>.</p>

<p><strong>Modal UI:</strong></p>
<p>Browser hiển thị dialog yêu cầu xác thực bằng Passkey. User phải tương tác với dialog. Dùng khi muốn explicit UX.</p>

<h3 id="44-dang-ky-passkey-qua-aia"><strong>4.4 Đăng ký Passkey qua AIA (Application Initiated Action)</strong></h3>

<p>User có thể đăng ký Passkey bất kỳ lúc nào qua AIA link:</p>

<pre><code class="language-bash"># AIA URL để trigger Passkey registration
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid&
  kc_action=webauthn-register-passwordless</code></pre>

<p><strong>Skip if exists:</strong> Nếu muốn skip registration khi user đã có Passkey:</p>

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

<p>Kerberos cho phép <strong>Single Sign-On tự động</strong> cho users đã đăng nhập vào domain (Windows AD, MIT Kerberos). User không cần nhập credentials — browser tự gửi Kerberos ticket.</p>

<h3 id="51-kerberos-server-setup"><strong>5.1 Kerberos Server Setup</strong></h3>

<p>Yêu cầu:</p>
<ul>
<li>KDC (Key Distribution Center) đang chạy — Active Directory hoặc MIT Kerberos</li>
<li>SPN (Service Principal Number) cho Keycloak service</li>
<li>Keytab file cho Keycloak</li>
</ul>

<pre><code class="language-bash"># Tạo SPN và keytab cho Keycloak (MIT Kerberos)
kadmin -q "addprinc -randkey HTTP/keycloak.example.com@EXAMPLE.COM"
kadmin -q "ktadd -k /etc/keycloak/keycloak.keytab HTTP/keycloak.example.com@EXAMPLE.COM"

# Đặt permission
chmod 600 /etc/keycloak/keycloak.keytab
chown keycloak:keycloak /etc/keycloak/keycloak.keytab</code></pre>

<h3 id="52-keycloak-kerberos-config"><strong>5.2 Cấu hình Keycloak cho Kerberos</strong></h3>

<p><strong>Option 1: Kerberos User Storage Provider</strong></p>

<ol>
<li>Vào <strong>User Federation → Add provider → Kerberos</strong></li>
<li>Cấu hình:
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
<li>Vào <strong>User Federation → Add provider → LDAP</strong></li>
<li>Cấu hình LDAP connection cho AD</li>
<li>Bật mục <strong>Allow Kerberos Authentication</strong></li>
<li>Nhập Kerberos Realm, Server Principal, Key Tab</li>
</ol>

<h3 id="53-bat-kerberos-trong-browser-flow"><strong>5.3 Bật Kerberos trong Browser Flow</strong></h3>

<ol>
<li>Vào <strong>Authentication → Flows → Browser</strong> (hoặc custom flow)</li>
<li>Tìm <strong>Kerberos</strong> execution</li>
<li>Đổi requirement từ <code>Disabled</code> sang <code>Alternative</code></li>
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

<p>Cho phép users từ một Kerberos realm tin tưởng realm khác:</p>

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

<p>X.509 cho phép xác thực bằng <strong>client certificate</strong> — phổ biến trong môi trường enterprise, government, hoặc mTLS.</p>

<h3 id="61-them-x509-vao-browser-flow"><strong>6.1 Thêm X.509 vào Browser Flow</strong></h3>

<ol>
<li>Duplicate Browser Flow → <code>Browser with X.509</code></li>
<li>Thêm <code>X509/Validate Username Form</code> vào flow</li>
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

<h3 id="62-x509-configuration"><strong>6.2 Cấu hình X.509 Authenticator</strong></h3>

<p>Click ⚙️ bên cạnh <code>X509/Validate Username Form</code>:</p>

<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td><strong>User Identity Source</strong></td><td>Trường trong certificate để identify user</td><td><code>Subject's Common Name</code>, <code>Subject's e-mail</code></td></tr>
<tr><td><strong>Mapping Source to User Attribute</strong></td><td>Map identity source sang user attribute</td><td><code>Username or Email</code></td></tr>
<tr><td><strong>A regular expression</strong></td><td>Regex extract identity từ cert field</td><td><code>CN=(.*?)(?:,\|$)</code></td></tr>
<tr><td><strong>CRL Checking Enabled</strong></td><td>Kiểm tra Certificate Revocation List</td><td><code>On</code></td></tr>
<tr><td><strong>CRL Distribution Point</strong></td><td>URL hoặc path đến CRL</td><td><code>ldap://ca.example.com/CN=...</code></td></tr>
<tr><td><strong>OCSP Checking Enabled</strong></td><td>Kiểm tra Online Certificate Status Protocol</td><td><code>On</code></td></tr>
<tr><td><strong>OCSP Responder URI</strong></td><td>OCSP responder URL</td><td><code>http://ocsp.example.com</code></td></tr>
<tr><td><strong>Certificate Key Usage</strong></td><td>Key usage bắt buộc</td><td><code>digitalSignature</code></td></tr>
<tr><td><strong>Certificate Extended Key Usage</strong></td><td>Extended key usage</td><td><code>clientAuth</code></td></tr>
<tr><td><strong>Certificate Policy Validation Mode</strong></td><td>Validate certificate policies</td><td><code>Not Specified</code></td></tr>
</tbody>
</table>

<h3 id="63-certificate-mapping-strategies"><strong>6.3 Certificate Mapping Strategies</strong></h3>

<p>Có nhiều cách map certificate sang Keycloak user:</p>

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

<h3 id="64-crl-va-ocsp"><strong>6.4 CRL và OCSP Checking</strong></h3>

<p>Để đảm bảo certificates chưa bị thu hồi (revoked):</p>

<p><strong>CRL (Certificate Revocation List):</strong></p>
<ul>
<li>Keycloak download và cache CRL từ configured URI</li>
<li>Kiểm tra serial number của client cert có trong CRL không</li>
<li>Nếu CRL không available và <code>CRL Checking Enabled=On</code> → xác thực fail</li>
</ul>

<p><strong>OCSP (Online Certificate Status Protocol):</strong></p>
<ul>
<li>Real-time check trạng thái certificate</li>
<li>Keycloak gửi request đến OCSP Responder</li>
<li>Nhanh hơn CRL cho individual checks</li>
<li>Nhược điểm: phụ thuộc OCSP server availability</li>
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

<p>Để Keycloak nhận client certificates, cần cấu hình reverse proxy hoặc Keycloak trực tiếp:</p>

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

<h2 id="7-so-sanh-phuong-thuc-mfa"><strong>7. So sánh các phương thức MFA</strong></h2>

<table>
<thead>
<tr><th>Phương thức</th><th>Bảo mật</th><th>UX</th><th>Phishing-resistant</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td><strong>TOTP/HOTP</strong></td><td>Trung bình</td><td>Tốt</td><td>Không</td><td>Phổ biến, dễ deploy</td></tr>
<tr><td><strong>WebAuthn (MFA)</strong></td><td>Cao</td><td>Tốt</td><td>Có</td><td>Enterprise, compliance</td></tr>
<tr><td><strong>Passkeys</strong></td><td>Rất cao</td><td>Xuất sắc</td><td>Có</td><td>Consumer + Enterprise</td></tr>
<tr><td><strong>Kerberos</strong></td><td>Cao</td><td>Xuất sắc (transparent)</td><td>Có (domain)</td><td>Enterprise, Windows domain</td></tr>
<tr><td><strong>X.509 Certificate</strong></td><td>Rất cao</td><td>Transparent</td><td>Có</td><td>Government, military, banking</td></tr>
</tbody>
</table>

<h2 id="8-tom-tat"><strong>8. Tóm tắt</strong></h2>

<table>
<thead>
<tr><th>Khái niệm</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td><strong>OTP Policy</strong></td><td>TOTP/HOTP config — algorithm, digits, period, look ahead</td></tr>
<tr><td><strong>Recovery Codes</strong></td><td>Backup codes khi mất thiết bị OTP</td></tr>
<tr><td><strong>WebAuthn</strong></td><td>FIDO2 security keys — phishing-resistant MFA</td></tr>
<tr><td><strong>Passkeys</strong></td><td>Passwordless authentication — discoverable credentials + biometrics</td></tr>
<tr><td><strong>Kerberos</strong></td><td>Transparent SSO cho domain users</td></tr>
<tr><td><strong>X.509</strong></td><td>Client certificate authentication — mTLS</td></tr>
<tr><td><strong>CRL/OCSP</strong></td><td>Certificate revocation checking</td></tr>
</tbody>
</table>
