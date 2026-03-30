---
id: 019d8b30-b119-7001-c001-e0c5f8100119
title: 'Bài 19: Bảo mật nâng cao và Vault Integration'
slug: bai-19-bao-mat-nang-cao-va-vault-integration
description: >-
  Security hardening Keycloak, Content Security Policy headers, brute-force
  detection configuration, password policies (chi tiết từng policy), session
  management (Session Limits, Idle/Max timeout), CORS configuration,
  clickjacking protection, HTTPS/TLS best practices, certificate management,
  Vault integration (HashiCorp Vault, Kubernetes Secrets, file-based),
  rotating credentials, Admin Console access restrictions.
duration_minutes: 220
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 5: Themes, Events, Security và Vault"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
---

<h2 id="1-security-hardening-checklist"><strong>1. Security Hardening Checklist</strong></h2>

<p>Trước khi đưa Keycloak lên production, cần thực hiện đầy đủ các biện pháp hardening sau:</p>

<table>
<thead>
<tr><th>#</th><th>Hạng mục</th><th>Mức độ</th><th>Trạng thái</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>HTTPS/TLS enforcement</td><td>Critical</td><td>☐</td></tr>
<tr><td>2</td><td>Đổi Admin credentials mặc định</td><td>Critical</td><td>☐</td></tr>
<tr><td>3</td><td>Brute-force detection</td><td>High</td><td>☐</td></tr>
<tr><td>4</td><td>Password policies</td><td>High</td><td>☐</td></tr>
<tr><td>5</td><td>Session timeouts</td><td>High</td><td>☐</td></tr>
<tr><td>6</td><td>CSP headers</td><td>High</td><td>☐</td></tr>
<tr><td>7</td><td>Clickjacking protection</td><td>High</td><td>☐</td></tr>
<tr><td>8</td><td>CORS configuration</td><td>Medium</td><td>☐</td></tr>
<tr><td>9</td><td>Vault integration cho secrets</td><td>High</td><td>☐</td></tr>
<tr><td>10</td><td>Admin Console access restriction</td><td>High</td><td>☐</td></tr>
<tr><td>11</td><td>Disable unused features/endpoints</td><td>Medium</td><td>☐</td></tr>
<tr><td>12</td><td>Database encryption at rest</td><td>High</td><td>☐</td></tr>
<tr><td>13</td><td>Token security (short-lived)</td><td>High</td><td>☐</td></tr>
<tr><td>14</td><td>Audit logging enabled</td><td>High</td><td>☐</td></tr>
</tbody>
</table>

<h2 id="2-content-security-policy-headers"><strong>2. Content Security Policy (CSP) Headers</strong></h2>

<p>CSP headers bảo vệ chống XSS attacks bằng cách kiểm soát resources nào được phép load trên page.</p>

<h3 id="21-cau-hinh-csp-trong-keycloak"><strong>2.1 Cấu hình CSP trong Keycloak</strong></h3>

<p>Keycloak cấu hình CSP thông qua <strong>Realm Settings → Security Defenses</strong>:</p>

<pre><code class="language-text"># Headers tab → Content-Security-Policy
frame-src 'self'; frame-ancestors 'self'; object-src 'none';

# Nâng cao: restrict thêm script-src, style-src
frame-src 'self'; frame-ancestors 'self'; object-src 'none'; \
script-src 'self' 'unsafe-inline'; \
style-src 'self' 'unsafe-inline';
</code></pre>

<h3 id="22-cau-hinh-qua-rest-api"><strong>2.2 Cấu hình qua REST API</strong></h3>

<pre><code class="language-bash"># Cập nhật Security Headers cho realm
curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "browserSecurityHeaders": {
        "contentSecurityPolicy": "frame-src '\''self'\''; frame-ancestors '\''self'\''; object-src '\''none'\'';",
        "contentSecurityPolicyReportOnly": "",
        "xContentTypeOptions": "nosniff",
        "xRobotsTag": "none",
        "xFrameOptions": "SAMEORIGIN",
        "strictTransportSecurity": "max-age=31536000; includeSubDomains",
        "xXSSProtection": "1; mode=block",
        "referrerPolicy": "no-referrer"
    }
  }'
</code></pre>

<h3 id="23-cac-header-bao-mat-quan-trong"><strong>2.3 Các header bảo mật quan trọng</strong></h3>

<table>
<thead>
<tr><th>Header</th><th>Giá trị khuyên dùng</th><th>Mục đích</th></tr>
</thead>
<tbody>
<tr><td><code>X-Frame-Options</code></td><td><code>SAMEORIGIN</code></td><td>Chống clickjacking</td></tr>
<tr><td><code>X-Content-Type-Options</code></td><td><code>nosniff</code></td><td>Chống MIME type sniffing</td></tr>
<tr><td><code>X-XSS-Protection</code></td><td><code>1; mode=block</code></td><td>Bật XSS filter trình duyệt</td></tr>
<tr><td><code>Strict-Transport-Security</code></td><td><code>max-age=31536000; includeSubDomains</code></td><td>Force HTTPS (HSTS)</td></tr>
<tr><td><code>Referrer-Policy</code></td><td><code>no-referrer</code></td><td>Không gửi referrer header</td></tr>
<tr><td><code>Content-Security-Policy</code></td><td>Restrict frame-src, object-src</td><td>Chống XSS, data injection</td></tr>
</tbody>
</table>

<h2 id="3-brute-force-detection"><strong>3. Brute-force Detection</strong></h2>

<p>Keycloak tích hợp sẵn cơ chế chống brute-force cho login attempts.</p>

<h3 id="31-cau-hinh-brute-force"><strong>3.1 Cấu hình Brute-force</strong></h3>

<p>Vào <strong>Realm Settings → Security Defenses → Brute Force Detection</strong>:</p>

<pre><code class="language-text"># Bật/tắt
Enabled: ON

# Lockout settings
Permanent Lockout: OFF                  # Có khóa vĩnh viễn không
Max Login Failures: 5                   # Số lần thất bại tối đa trước khi lock
Wait Increment (seconds): 60            # Thời gian chờ tăng dần mỗi lần fail tiếp
Max Wait (seconds): 900                 # Thời gian chờ tối đa (15 phút)
Quick Login Check (milliseconds): 1000  # Khoảng thời gian giữa 2 lần login nhanh
Minimum Quick Login Wait: 60            # Chờ tối thiểu khi quick login detected
Failure Reset Time (seconds): 43200     # Reset failure counter sau 12 giờ
</code></pre>

<h3 id="32-cau-hinh-qua-rest-api"><strong>3.2 Cấu hình qua REST API</strong></h3>

<pre><code class="language-bash">curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "bruteForceProtected": true,
    "permanentLockout": false,
    "maxFailureWaitSeconds": 900,
    "minimumQuickLoginWaitSeconds": 60,
    "waitIncrementSeconds": 60,
    "quickLoginCheckMilliSeconds": 1000,
    "maxDeltaTimeSeconds": 43200,
    "failureFactor": 5
  }'
</code></pre>

<h3 id="33-cach-hoat-dong-brute-force"><strong>3.3 Cách hoạt động Brute-force Detection</strong></h3>

<pre><code class="language-text">Lần fail thứ 1: Không lockout
Lần fail thứ 2: Không lockout
Lần fail thứ 3: Không lockout
Lần fail thứ 4: Không lockout
Lần fail thứ 5: Lockout 60 giây (waitIncrementSeconds)
Lần fail thứ 6: Lockout 120 giây (60 * 2)
Lần fail thứ 7: Lockout 240 giây (60 * 4)
...tiếp tục tăng...
Max lockout: 900 giây (15 phút)

Sau 12 giờ không fail: Reset counter về 0
</code></pre>

<h3 id="34-unlock-user"><strong>3.4 Unlock User bị khóa</strong></h3>

<pre><code class="language-bash"># Kiểm tra trạng thái brute-force cho user
curl -s "http://localhost:8080/admin/realms/my-realm/attack-detection/brute-force/users/$USER_ID" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .

# Response mẫu:
# {
#   "numFailures": 6,
#   "disabled": true,
#   "lastIPFailure": "192.168.1.100",
#   "lastFailure": 1710489045000
# }

# Unlock user cụ thể
curl -X DELETE "http://localhost:8080/admin/realms/my-realm/attack-detection/brute-force/users/$USER_ID" \
  -H "Authorization: Bearer $ACCESS_TOKEN"

# Unlock tất cả users
curl -X DELETE "http://localhost:8080/admin/realms/my-realm/attack-detection/brute-force/users" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
</code></pre>

<h2 id="4-password-policies"><strong>4. Password Policies</strong></h2>

<p>Keycloak hỗ trợ nhiều password policies để đảm bảo mật khẩu mạnh.</p>

<h3 id="41-cau-hinh-password-policies"><strong>4.1 Cấu hình Password Policies</strong></h3>

<p>Vào <strong>Authentication → Policies → Password Policy</strong> và thêm các policies:</p>

<table>
<thead>
<tr><th>Policy</th><th>Mô tả</th><th>Giá trị mẫu</th></tr>
</thead>
<tbody>
<tr><td><code>length</code></td><td>Độ dài tối thiểu</td><td><code>12</code></td></tr>
<tr><td><code>maxLength</code></td><td>Độ dài tối đa</td><td><code>128</code></td></tr>
<tr><td><code>digits</code></td><td>Số ký tự số tối thiểu</td><td><code>1</code></td></tr>
<tr><td><code>lowerCase</code></td><td>Số ký tự thường tối thiểu</td><td><code>1</code></td></tr>
<tr><td><code>upperCase</code></td><td>Số ký tự hoa tối thiểu</td><td><code>1</code></td></tr>
<tr><td><code>specialChars</code></td><td>Số ký tự đặc biệt tối thiểu</td><td><code>1</code></td></tr>
<tr><td><code>notUsername</code></td><td>Mật khẩu không được trùng username</td><td>(no value)</td></tr>
<tr><td><code>notEmail</code></td><td>Mật khẩu không được trùng email</td><td>(no value)</td></tr>
<tr><td><code>passwordHistory</code></td><td>Không dùng lại N mật khẩu gần nhất</td><td><code>5</code></td></tr>
<tr><td><code>hashAlgorithm</code></td><td>Thuật toán hash password</td><td><code>pbkdf2-sha512</code></td></tr>
<tr><td><code>hashIterations</code></td><td>Số vòng lặp hash</td><td><code>210000</code></td></tr>
<tr><td><code>forceExpiredPasswordChange</code></td><td>Buộc đổi MK sau N ngày</td><td><code>90</code></td></tr>
<tr><td><code>regulxExpression</code></td><td>Regex pattern tùy chỉnh</td><td><code>^(?!.*(.)\1{2}).*$</code></td></tr>
</tbody>
</table>

<h3 id="42-cau-hinh-qua-rest-api"><strong>4.2 Cấu hình qua REST API</strong></h3>

<pre><code class="language-bash"># Set password policies cho realm
curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "passwordPolicy": "length(12) and digits(1) and lowerCase(1) and upperCase(1) and specialChars(1) and notUsername and notEmail and passwordHistory(5) and hashAlgorithm(pbkdf2-sha512) and hashIterations(210000) and forceExpiredPasswordChange(90) and maxLength(128)"
  }'
</code></pre>

<h3 id="43-hash-algorithm-recommendations"><strong>4.3 Hash Algorithm Recommendations</strong></h3>

<table>
<thead>
<tr><th>Algorithm</th><th>Iterations (khuyên dùng)</th><th>Ghi chú</th></tr>
</thead>
<tbody>
<tr><td><code>pbkdf2-sha256</code></td><td>600,000</td><td>OWASP 2023 recommendation</td></tr>
<tr><td><code>pbkdf2-sha512</code></td><td>210,000</td><td>OWASP 2023 recommendation</td></tr>
<tr><td><code>argon2</code></td><td>N/A (Keycloak 24+)</td><td>Memory-hard, recommended cho new deployments</td></tr>
</tbody>
</table>

<pre><code class="language-bash"># Sử dụng Argon2 (Keycloak 24+)
# passwordPolicy: hashAlgorithm(argon2)
curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "passwordPolicy": "length(12) and digits(1) and lowerCase(1) and upperCase(1) and specialChars(1) and hashAlgorithm(argon2)"
  }'
</code></pre>

<h2 id="5-session-management"><strong>5. Session Management</strong></h2>

<p>Quản lý session chặt chẽ là yếu tố quan trọng cho bảo mật.</p>

<h3 id="51-session-timeouts"><strong>5.1 Session Timeouts</strong></h3>

<p>Cấu hình tại <strong>Realm Settings → Sessions</strong>:</p>

<table>
<thead>
<tr><th>Setting</th><th>Mô tả</th><th>Khuyên dùng</th></tr>
</thead>
<tbody>
<tr><td><strong>SSO Session Idle</strong></td><td>Thời gian idle tối đa cho SSO session</td><td>30 phút</td></tr>
<tr><td><strong>SSO Session Max</strong></td><td>Thời gian tối đa cho SSO session (bất kể activity)</td><td>10 giờ</td></tr>
<tr><td><strong>SSO Session Idle Remember Me</strong></td><td>Idle timeout khi "Remember Me" enabled</td><td>7 ngày</td></tr>
<tr><td><strong>SSO Session Max Remember Me</strong></td><td>Max lifetime khi "Remember Me" enabled</td><td>30 ngày</td></tr>
<tr><td><strong>Client Session Idle</strong></td><td>Idle timeout cho client-specific session</td><td>15 phút</td></tr>
<tr><td><strong>Client Session Max</strong></td><td>Max lifetime cho client-specific session</td><td>8 giờ</td></tr>
<tr><td><strong>Offline Session Idle</strong></td><td>Idle timeout cho offline tokens</td><td>30 ngày</td></tr>
<tr><td><strong>Offline Session Max</strong></td><td>Max limited lifetime cho offline sessions</td><td>60 ngày</td></tr>
</tbody>
</table>

<h3 id="52-cau-hinh-sessions-chi-tiet"><strong>5.2 Cấu hình Sessions chi tiết</strong></h3>

<pre><code class="language-bash"># Cấu hình session timeouts
curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "ssoSessionIdleTimeout": 1800,
    "ssoSessionMaxLifespan": 36000,
    "ssoSessionIdleTimeoutRememberMe": 604800,
    "ssoSessionMaxLifespanRememberMe": 2592000,
    "clientSessionIdleTimeout": 900,
    "clientSessionMaxLifespan": 28800,
    "offlineSessionIdleTimeout": 2592000,
    "offlineSessionMaxLifespan": 5184000,
    "offlineSessionMaxLifespanEnabled": true
  }'
</code></pre>

<h3 id="53-session-limits"><strong>5.3 Session Limits</strong></h3>

<p>Giới hạn số session đồng thời cho mỗi user:</p>

<pre><code class="language-text"># Authentication → Flows → Browser Flow
# Thêm step "User Session Limits"

Session Limits Configuration:
- Max concurrent sessions per user: 3
- Behavior on breach: "Terminate oldest session"

# Hoặc cấu hình qua Authentication Flow:
# 1. Copy "Browser" flow
# 2. Thêm execution "User Session Count Limiter"  
# 3. Cấu hình max sessions
</code></pre>

<h3 id="54-kiem-tra-va-revoke-sessions"><strong>5.4 Kiểm tra và Revoke Sessions</strong></h3>

<pre><code class="language-bash"># List sessions của user
curl -s "http://localhost:8080/admin/realms/my-realm/users/$USER_ID/sessions" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .

# Response mẫu:
# [
#   {
#     "id": "session-id",
#     "username": "john",
#     "userId": "user-uuid",
#     "ipAddress": "192.168.1.100",
#     "start": 1710489045,
#     "lastAccess": 1710492645,
#     "clients": { "client-uuid": "my-app" }
#   }
# ]

# Revoke session cụ thể
curl -X DELETE "http://localhost:8080/admin/realms/my-realm/sessions/$SESSION_ID" \
  -H "Authorization: Bearer $ACCESS_TOKEN"

# Logout tất cả sessions của user
curl -X POST "http://localhost:8080/admin/realms/my-realm/users/$USER_ID/logout" \
  -H "Authorization: Bearer $ACCESS_TOKEN"

# Logout tất cả sessions trong realm
curl -X POST "http://localhost:8080/admin/realms/my-realm/logout-all" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
</code></pre>

<h2 id="6-cors-configuration"><strong>6. CORS Configuration</strong></h2>

<p>CORS (Cross-Origin Resource Sharing) được cấu hình <strong>per client</strong> trong Keycloak.</p>

<h3 id="61-cau-hinh-cors-cho-client"><strong>6.1 Cấu hình CORS cho Client</strong></h3>

<pre><code class="language-text"># Client Settings → Web Origins

# Cho phép specific origins
https://myapp.com
https://admin.myapp.com

# Cho phép tất cả redirect URIs (sử dụng "+")
+

# KHÔNG sử dụng "*" trong production
# "*" cho phép tất cả origins — nguy hiểm!
</code></pre>

<pre><code class="language-bash"># Cấu hình CORS qua REST API
curl -X PUT "http://localhost:8080/admin/realms/my-realm/clients/$CLIENT_UUID" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "webOrigins": [
        "https://myapp.com",
        "https://admin.myapp.com"
    ]
  }'
</code></pre>

<h3 id="62-cors-best-practices"><strong>6.2 CORS Best Practices</strong></h3>

<ul>
<li><strong>Luôn chỉ định origins cụ thể</strong> — Không dùng wildcard <code>*</code></li>
<li><strong>Sử dụng <code>+</code></strong> — Tự động derive origins từ Valid Redirect URIs</li>
<li><strong>Tách client</strong> — Mỗi frontend app nên có client riêng với CORS config riêng</li>
<li><strong>Test kỹ</strong> — Kiểm tra CORS response headers với browser DevTools</li>
</ul>

<h2 id="7-clickjacking-protection"><strong>7. Clickjacking Protection</strong></h2>

<p>Clickjacking attack nhúng Keycloak login page vào iframe để đánh cắp credentials.</p>

<h3 id="71-cau-hinh-x-frame-options"><strong>7.1 Cấu hình X-Frame-Options</strong></h3>

<pre><code class="language-text"># Realm Settings → Security Defenses → Headers

X-Frame-Options: SAMEORIGIN
# - DENY: Không cho phép iframe dưới bất kỳ điều kiện nào
# - SAMEORIGIN: Chỉ cho phép iframe từ cùng origin
# - ALLOW-FROM uri: (deprecated, dùng CSP frame-ancestors thay thế)
</code></pre>

<h3 id="72-csp-frame-ancestors"><strong>7.2 CSP frame-ancestors (ưu tiên hơn)</strong></h3>

<pre><code class="language-text"># Content-Security-Policy header
frame-ancestors 'self';

# Cho phép specific parent origins
frame-ancestors 'self' https://portal.mycompany.com;
</code></pre>

<h2 id="8-https-tls-enforcement"><strong>8. HTTPS/TLS Enforcement</strong></h2>

<h3 id="81-cau-hinh-hostname-va-tls"><strong>8.1 Cấu hình Hostname và TLS</strong></h3>

<pre><code class="language-bash"># Production: Strict HTTPS
bin/kc.sh start \
  --hostname=auth.mycompany.com \
  --hostname-strict=true \
  --https-certificate-file=/etc/certs/tls.crt \
  --https-certificate-key-file=/etc/certs/tls.key \
  --https-port=8443 \
  --http-enabled=false
</code></pre>

<h3 id="82-tls-voi-reverse-proxy"><strong>8.2 TLS với Reverse Proxy (phổ biến)</strong></h3>

<pre><code class="language-bash"># Khi sử dụng reverse proxy (Nginx, HAProxy) terminate TLS
bin/kc.sh start \
  --hostname=auth.mycompany.com \
  --hostname-strict=true \
  --proxy-headers=xforwarded \
  --http-enabled=true \
  --http-port=8080
</code></pre>

<pre><code class="language-nginx"># Nginx reverse proxy configuration
server {
    listen 443 ssl http2;
    server_name auth.mycompany.com;

    ssl_certificate /etc/ssl/certs/auth.mycompany.com.crt;
    ssl_certificate_key /etc/ssl/private/auth.mycompany.com.key;

    # Strong TLS configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # HSTS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    location / {
        proxy_pass http://keycloak:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port $server_port;

        # WebSocket support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # Timeouts
        proxy_read_timeout 90s;
        proxy_send_timeout 90s;
    }
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name auth.mycompany.com;
    return 301 https://$host$request_uri;
}
</code></pre>

<h3 id="83-mutual-tls-mtls"><strong>8.3 Mutual TLS (mTLS)</strong></h3>

<pre><code class="language-bash"># Bật mTLS cho client authentication
bin/kc.sh start \
  --https-certificate-file=/etc/certs/tls.crt \
  --https-certificate-key-file=/etc/certs/tls.key \
  --https-trust-store-file=/etc/certs/truststore.jks \
  --https-trust-store-password=changeit \
  --https-client-auth=request

# --https-client-auth options:
# none: không yêu cầu client cert
# request: yêu cầu nhưng không bắt buộc
# required: bắt buộc client cert
</code></pre>

<h3 id="84-certificate-management"><strong>8.4 Certificate Management</strong></h3>

<pre><code class="language-bash"># Sử dụng cert-manager trong Kubernetes
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: keycloak-tls
  namespace: keycloak
spec:
  secretName: keycloak-tls-secret
  issuerRef:
    name: letsencrypt-prod
    kind: ClusterIssuer
  dnsNames:
    - auth.mycompany.com
  renewBefore: 720h  # Renew 30 ngày trước khi hết hạn
</code></pre>

<pre><code class="language-yaml"># Kubernetes Deployment sử dụng TLS secret
apiVersion: apps/v1
kind: Deployment
metadata:
  name: keycloak
spec:
  template:
    spec:
      containers:
        - name: keycloak
          image: quay.io/keycloak/keycloak:26.1
          args:
            - start
            - --hostname=auth.mycompany.com
            - --https-certificate-file=/etc/certs/tls.crt
            - --https-certificate-key-file=/etc/certs/tls.key
          volumeMounts:
            - name: tls-certs
              mountPath: /etc/certs
              readOnly: true
      volumes:
        - name: tls-certs
          secret:
            secretName: keycloak-tls-secret
</code></pre>

<h2 id="9-vault-integration"><strong>9. Vault Integration</strong></h2>

<p>Keycloak hỗ trợ lưu trữ secrets (LDAP bind password, SMTP password, client secrets) trong external vault thay vì plaintext trong database.</p>

<h3 id="91-hashicorp-vault-integration"><strong>9.1 HashiCorp Vault Integration</strong></h3>

<pre><code class="language-bash"># Cấu hình Keycloak sử dụng HashiCorp Vault
bin/kc.sh start \
  --vault=hashicorp \
  --vault-hashicorp-paths=/secret/data/keycloak \
  --vault-hashicorp-address=https://vault.mycompany.com:8200 \
  --vault-hashicorp-auth-method=token \
  --vault-hashicorp-token=$VAULT_TOKEN

# Hoặc sử dụng AppRole authentication
bin/kc.sh start \
  --vault=hashicorp \
  --vault-hashicorp-paths=/secret/data/keycloak \
  --vault-hashicorp-address=https://vault.mycompany.com:8200 \
  --vault-hashicorp-auth-method=approle \
  --vault-hashicorp-approle-role-id=$ROLE_ID \
  --vault-hashicorp-approle-secret-id=$SECRET_ID
</code></pre>

<h3 id="92-luu-secrets-trong-hashicorp-vault"><strong>9.2 Lưu Secrets trong HashiCorp Vault</strong></h3>

<pre><code class="language-bash"># Cấu hình Vault KV secrets engine
vault secrets enable -path=secret kv-v2

# Lưu LDAP bind password
vault kv put secret/keycloak/my-realm \
  ldap_bind_credential="LdapS3cur3P@ss!" \
  smtp_password="SmtpP@ssw0rd!" \
  my-client-secret="Cl13ntS3cr3t!"

# Cấu trúc path trong Vault:
# secret/data/keycloak/{realm-name}/{key}
</code></pre>

<h3 id="93-su-dung-vault-reference-trong-keycloak"><strong>9.3 Sử dụng Vault Reference trong Keycloak</strong></h3>

<p>Trong Keycloak, sử dụng cú pháp <code>${vault.key}</code> thay vì plaintext:</p>

<pre><code class="language-text"># LDAP User Federation
Bind Credential: ${vault.ldap_bind_credential}

# SMTP Settings
Password: ${vault.smtp_password}

# Client Secret
Client Secret: ${vault.my-client-secret}
</code></pre>

<h3 id="94-kubernetes-secrets-vault"><strong>9.4 Kubernetes/OpenShift Secrets Vault</strong></h3>

<pre><code class="language-bash"># Sử dụng Kubernetes Secrets làm vault
bin/kc.sh start \
  --vault=file \
  --vault-dir=/mnt/secrets
</code></pre>

<pre><code class="language-yaml"># Kubernetes Secret
apiVersion: v1
kind: Secret
metadata:
  name: keycloak-vault
  namespace: keycloak
type: Opaque
stringData:
  # Format: {realm-name}_{key}
  my-realm_ldap_bind_credential: "LdapS3cur3P@ss!"
  my-realm_smtp_password: "SmtpP@ssw0rd!"
  my-realm_my-client-secret: "Cl13ntS3cr3t!"
</code></pre>

<pre><code class="language-yaml"># Mount Secret vào Keycloak Pod
apiVersion: apps/v1
kind: Deployment
metadata:
  name: keycloak
spec:
  template:
    spec:
      containers:
        - name: keycloak
          args:
            - start
            - --vault=file
            - --vault-dir=/mnt/secrets
          volumeMounts:
            - name: vault-secrets
              mountPath: /mnt/secrets
              readOnly: true
      volumes:
        - name: vault-secrets
          secret:
            secretName: keycloak-vault
</code></pre>

<h3 id="95-file-based-vault-dev"><strong>9.5 File-based Vault (Development)</strong></h3>

<pre><code class="language-bash"># Tạo vault files cho development
mkdir -p /opt/keycloak/vault/my-realm

# Mỗi file chứa một secret (filename = key)
echo -n "LdapS3cur3P@ss!" > /opt/keycloak/vault/my-realm/ldap_bind_credential
echo -n "SmtpP@ssw0rd!" > /opt/keycloak/vault/my-realm/smtp_password

# Cấu hình Keycloak
bin/kc.sh start-dev \
  --vault=file \
  --vault-dir=/opt/keycloak/vault
</code></pre>

<h3 id="96-rotating-credentials"><strong>9.6 Rotating Credentials</strong></h3>

<pre><code class="language-bash"># HashiCorp Vault: Rotate LDAP password
# 1. Update secret trong Vault
vault kv put secret/keycloak/my-realm \
  ldap_bind_credential="NewLdapP@ss2026!"

# 2. Keycloak sẽ tự động lấy secret mới
# (Vault SPI cache TTL = 0 by default, mỗi lần cần sẽ fetch lại)

# Kubernetes Secrets: Update secret
kubectl create secret generic keycloak-vault \
  --from-literal=my-realm_ldap_bind_credential="NewLdapP@ss2026!" \
  --dry-run=client -o yaml | kubectl apply -f -

# Rolling restart Keycloak để pickup new secrets
kubectl rollout restart deployment/keycloak -n keycloak
</code></pre>

<h2 id="10-admin-console-access-restrictions"><strong>10. Admin Console Access Restrictions</strong></h2>

<h3 id="101-dedicated-admin-realm"><strong>10.1 Dedicated Admin Realm</strong></h3>

<p>Sử dụng <strong>master realm</strong> chỉ cho admin, không tạo user/client business:</p>

<pre><code class="language-text">Best Practice:
- Master realm: Chỉ chứa admin users
- Business realms: Chứa application users/clients
- Không cho phép self-registration trên master realm
- MFA bắt buộc cho admin accounts
</code></pre>

<h3 id="102-ip-whitelist-cho-admin-console"><strong>10.2 IP Whitelist cho Admin Console</strong></h3>

<pre><code class="language-nginx"># Nginx: Restrict Admin Console access
location /admin/ {
    # Chỉ cho phép IP nội bộ
    allow 10.0.0.0/8;
    allow 172.16.0.0/12;
    allow 192.168.0.0/16;
    deny all;

    proxy_pass http://keycloak:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}

# Block admin REST API từ external
location /admin/realms/ {
    allow 10.0.0.0/8;
    deny all;

    proxy_pass http://keycloak:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
</code></pre>

<h3 id="103-kubernetes-network-policy"><strong>10.3 Kubernetes Network Policy</strong></h3>

<pre><code class="language-yaml"># NetworkPolicy: Restrict Admin API access
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: keycloak-admin-restrict
  namespace: keycloak
spec:
  podSelector:
    matchLabels:
      app: keycloak
  policyTypes:
    - Ingress
  ingress:
    # Allow user-facing traffic from ingress controller
    - from:
        - namespaceSelector:
            matchLabels:
              name: ingress-nginx
      ports:
        - port: 8080
    # Allow admin traffic only from management namespace
    - from:
        - namespaceSelector:
            matchLabels:
              name: management
      ports:
        - port: 8080
</code></pre>

<h2 id="11-token-security"><strong>11. Token Security</strong></h2>

<h3 id="111-short-lived-tokens"><strong>11.1 Short-lived Tokens</strong></h3>

<pre><code class="language-bash"># Cấu hình token lifespans
curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "accessTokenLifespan": 300,
    "accessTokenLifespanForImplicitFlow": 900,
    "actionTokenGeneratedByUserLifespan": 300,
    "actionTokenGeneratedByAdminLifespan": 43200
  }'

# Per-client token lifespan override
curl -X PUT "http://localhost:8080/admin/realms/my-realm/clients/$CLIENT_UUID" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "attributes": {
        "access.token.lifespan": "180",
        "client.session.idle.timeout": "600",
        "client.session.max.lifespan": "3600"
    }
  }'
</code></pre>

<h3 id="112-token-introspection"><strong>11.2 Token Introspection</strong></h3>

<pre><code class="language-bash"># Introspect token (kiểm tra validity)
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token/introspect" \
  -d "client_id=my-resource-server" \
  -d "client_secret=$CLIENT_SECRET" \
  -d "token=$ACCESS_TOKEN"

# Response
# {
#   "active": true,
#   "sub": "user-uuid",
#   "aud": "my-app",
#   "exp": 1710492645,
#   "iat": 1710489045,
#   "realm_access": { "roles": ["user"] },
#   "scope": "openid profile email"
# }
</code></pre>

<h3 id="113-token-revocation"><strong>11.3 Token Revocation</strong></h3>

<pre><code class="language-bash"># Revoke refresh token
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/revoke" \
  -d "client_id=my-app" \
  -d "client_secret=$CLIENT_SECRET" \
  -d "token=$REFRESH_TOKEN" \
  -d "token_type_hint=refresh_token"

# Revoke access token
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/revoke" \
  -d "client_id=my-app" \
  -d "client_secret=$CLIENT_SECRET" \
  -d "token=$ACCESS_TOKEN" \
  -d "token_type_hint=access_token"
</code></pre>

<h2 id="12-production-deployment-hardened"><strong>12. Production Deployment — Hardened</strong></h2>

<pre><code class="language-yaml"># docker-compose.production.yml - Hardened Keycloak
services:
  keycloak:
    image: quay.io/keycloak/keycloak:26.1
    command:
      - start
      - --hostname=auth.mycompany.com
      - --hostname-strict=true
      - --proxy-headers=xforwarded
      - --http-enabled=true
      - --metrics-enabled=true
      - --health-enabled=true
      - --vault=file
      - --vault-dir=/mnt/secrets
      - --log=console
      - --log-console-output=json
    environment:
      KC_DB: postgres
      KC_DB_URL: jdbc:postgresql://postgres:5432/keycloak
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD_FILE: /run/secrets/db_password
      KC_CACHE: ispn
      KC_CACHE_STACK: kubernetes
    volumes:
      - ./secrets:/mnt/secrets:ro
    secrets:
      - db_password
    deploy:
      replicas: 2
      resources:
        limits:
          memory: 1G
          cpus: '1.0'
        reservations:
          memory: 512M
          cpus: '0.5'
    healthcheck:
      test: ["CMD-SHELL", "exec 3<>/dev/tcp/localhost/9000 && echo -e 'GET /health/ready HTTP/1.1\r\nHost: localhost\r\n\r\n' >&3 && cat <&3 | grep -q '\"status\":\"UP\"'"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s

secrets:
  db_password:
    file: ./secrets/db_password
</code></pre>

<h2 id="13-best-practices-tong-hop"><strong>13. Best Practices Tổng hợp</strong></h2>

<ul>
<li><strong>HTTPS everywhere</strong> — Không bao giờ deploy Keycloak production không có TLS. Sử dụng HSTS headers.</li>
<li><strong>Secrets in Vault</strong> — Không lưu credentials plaintext trong DB. Sử dụng HashiCorp Vault hoặc Kubernetes Secrets.</li>
<li><strong>Strong password policies</strong> — Minimum 12 characters, sử dụng Argon2 hoặc PBKDF2-SHA512 với iterations cao.</li>
<li><strong>Session limits</strong> — Giới hạn số sessions đồng thời. Set idle/max timeouts phù hợp.</li>
<li><strong>Admin access restricted</strong> — IP whitelist cho Admin Console. MFA bắt buộc cho admin accounts.</li>
<li><strong>Short-lived tokens</strong> — Access token 5 phút, refresh token rotation enabled.</li>
<li><strong>Brute-force protection</strong> — Bật và cấu hình phù hợp. Monitor login failure rates.</li>
<li><strong>Regular security audit</strong> — Review Keycloak configuration định kỳ. Update lên phiên bản mới nhất.</li>
<li><strong>Separate admin realm</strong> — Sử dụng master realm chỉ cho admin. Không mix admin và business users.</li>
<li><strong>Monitor and alert</strong> — Kết hợp event logging (Bài 18) với security monitoring cho detection và response.</li>
</ul>
