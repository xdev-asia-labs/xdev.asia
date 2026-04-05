---
id: 019d8b30-b211-7001-c002-e0c5f8200111
title: 'Bài 11: Auth Methods cơ bản - Token, Userpass và AppRole'
slug: bai-11-auth-methods-co-ban-token-userpass-va-approle
description: >-
  Auth Methods overview, Token Auth Method (root tokens, create tokens),
  Userpass Auth Method (CRUD users, password policies), AppRole Auth Method
  (RoleID, SecretID, CIDR binding, secret_id_num_uses), response wrapping
  cho SecretID, AppRole best practices cho CI/CD pipelines.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 3: Auth Methods - Xác thực và Ủy quyền"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6200" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6200)"/>

  <!-- Decorations -->
  <g>
    <circle cx="795" cy="55" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="990" cy="150" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="685" cy="245" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="880" cy="80" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="175" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="185" x2="1100" y2="265" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="215" x2="1050" y2="285" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="969.6410161513776,115 969.6410161513776,155 935,175 900.3589838486224,155 900.3589838486224,115.00000000000001 935,95" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Bài 11</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 11: Auth Methods cơ bản - Token,</tspan>
      <tspan x="60" dy="42">Userpass và AppRole</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Auth Methods - Xác thực và Ủy quyền</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-auth-methods-overview"><strong>1. Auth Methods Overview</strong></h2>

<p><strong>Auth Methods</strong> là cơ chế Vault sử dụng để xác thực (authenticate) clients — xác định "bạn là ai" trước khi cho phép truy cập secrets. Mỗi auth method được enable tại một path riêng và trả về một <strong>Vault token</strong> sau khi xác thực thành công.</p>

<h3 id="quy-trinh-xac-thuc"><strong>Quy trình xác thực</strong></h3>

<pre><code>┌──────────┐   1. Login request      ┌───────────────┐
│  Client  │ ──────────────────────▶ │  Auth Method  │
│          │                         │  (AppRole,    │
│          │   4. Vault Token        │   LDAP, K8s)  │
│          │ ◀────────────────────── │               │
└──────────┘                         └───────┬───────┘
                                             │
                                    2. Verify identity
                                             │
                                    3. Map to policies
                                             ▼
                                     ┌──────────────┐
                                     │   Identity   │
                                     │   + Policies │
                                     └──────────────┘
</code></pre>

<h3 id="cac-loai-auth-methods"><strong>Các loại Auth Methods</strong></h3>

<table>
<thead>
<tr><th>Nhóm</th><th>Auth Method</th><th>Đối tượng</th></tr>
</thead>
<tbody>
<tr><td>Built-in</td><td>Token</td><td>Mọi client</td></tr>
<tr><td>Human</td><td>Userpass, LDAP, OIDC</td><td>Operators, developers</td></tr>
<tr><td>Machine</td><td>AppRole, JWT</td><td>CI/CD, applications</td></tr>
<tr><td>Cloud</td><td>AWS, Azure, GCP</td><td>Cloud workloads</td></tr>
<tr><td>Platform</td><td>Kubernetes, SPIFFE</td><td>Container workloads</td></tr>
</tbody>
</table>

<h3 id="enable-auth-method"><strong>Enable Auth Method</strong></h3>

<pre><code class="language-bash"># Enable auth method tại default path
vault auth enable userpass

# Enable tại custom path
vault auth enable -path=company-ldap ldap

# Liệt kê auth methods đã enable
vault auth list

# Disable auth method (cẩn thận - xóa toàn bộ data)
vault auth disable userpass
</code></pre>

<h2 id="2-token-auth-method"><strong>2. Token Auth Method</strong></h2>

<p>Token Auth Method là auth method <strong>duy nhất luôn được enable</strong> và không thể disable. Mọi auth method khác cuối cùng đều trả về một Vault token. Token là cơ chế xác thực cốt lõi của Vault.</p>

<h3 id="token-types"><strong>Token Types</strong></h3>

<table>
<thead>
<tr><th>Loại</th><th>Stored</th><th>Renewable</th><th>Child tokens</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td><strong>Service Token</strong></td><td>Có (trong storage)</td><td>Có</td><td>Có</td><td>Long-lived operations</td></tr>
<tr><td><strong>Batch Token</strong></td><td>Không</td><td>Không</td><td>Không</td><td>High-volume, ephemeral</td></tr>
</tbody>
</table>

<h3 id="tao-token"><strong>Tạo tokens</strong></h3>

<pre><code class="language-bash"># Tạo token với default policy
vault token create

# Tạo token với policies cụ thể
vault token create \
  -policy="app-readonly" \
  -policy="db-creds" \
  -ttl=1h \
  -display-name="app-service"

# Tạo orphan token (không có parent)
vault token create -orphan \
  -policy="monitoring" \
  -ttl=24h

# Tạo batch token
vault token create \
  -type=batch \
  -policy="app-readonly" \
  -ttl=30m

# Tạo periodic token (không bao giờ expire nếu renew đúng hạn)
vault token create \
  -policy="long-running-service" \
  -period=24h
</code></pre>

<h3 id="root-tokens"><strong>Root Tokens</strong></h3>

<p>Root token có quyền truy cập toàn bộ Vault. Chỉ nên sử dụng trong các trường hợp khẩn cấp:</p>

<pre><code class="language-bash"># Tạo root token mới (cần quorum unseal keys)
vault operator generate-root -init
vault operator generate-root \
  -nonce="..." \
  -otp="..."

# Revoke root token sau khi dùng xong
vault token revoke &lt;root-token&gt;
</code></pre>

<p><strong>Best practice:</strong> Không lưu trữ root token. Tạo khi cần, dùng xong thì revoke ngay.</p>

<h3 id="token-roles"><strong>Token Roles</strong></h3>

<pre><code class="language-bash"># Tạo token role cho CI/CD
vault write auth/token/roles/ci-cd \
  allowed_policies="ci-deploy,ci-readonly" \
  disallowed_policies="admin,root" \
  orphan=true \
  renewable=true \
  token_period=1h \
  token_type=service \
  token_bound_cidrs="10.0.0.0/8"

# Tạo token từ role
vault token create -role=ci-cd
</code></pre>

<h3 id="token-accessors"><strong>Token Accessors</strong></h3>

<p>Token accessor cho phép quản lý token mà không cần biết giá trị token:</p>

<pre><code class="language-bash"># Lookup token bằng accessor
vault token lookup -accessor &lt;accessor&gt;

# Revoke token bằng accessor
vault token revoke -accessor &lt;accessor&gt;

# Liệt kê tất cả token accessors
vault list auth/token/accessors
</code></pre>

<h2 id="3-userpass-auth-method"><strong>3. Userpass Auth Method</strong></h2>

<p><strong>Userpass</strong> là auth method đơn giản nhất cho human users — xác thực bằng username và password. Phù hợp cho môi trường nhỏ hoặc testing.</p>

<h3 id="enable-va-cau-hinh-userpass"><strong>Enable và cấu hình</strong></h3>

<pre><code class="language-bash"># Enable userpass
vault auth enable userpass

# Tạo user với policies
vault write auth/userpass/users/john.doe \
  password="s3cur3P@ssw0rd" \
  policies="dev-readonly,dev-kv" \
  token_ttl=8h \
  token_max_ttl=24h

# Tạo user với CIDR binding
vault write auth/userpass/users/admin.user \
  password="adm1nP@ss" \
  policies="admin" \
  token_ttl=2h \
  token_bound_cidrs="10.10.0.0/16,192.168.1.0/24"

# Liệt kê users
vault list auth/userpass/users

# Đọc thông tin user
vault read auth/userpass/users/john.doe
</code></pre>

<h3 id="login-userpass"><strong>Login</strong></h3>

<pre><code class="language-bash"># Login qua CLI
vault login -method=userpass \
  username=john.doe \
  password="s3cur3P@ssw0rd"

# Login qua API
curl -s --request POST \
  --data '{"password": "s3cur3P@ssw0rd"}' \
  ${VAULT_ADDR}/v1/auth/userpass/login/john.doe | jq .
</code></pre>

<h3 id="password-policies"><strong>Password Policies</strong></h3>

<p>Vault 1.5+ hỗ trợ password policies để enforce password complexity:</p>

<pre><code class="language-bash"># Tạo password policy
vault write sys/policies/password/strong-password policy=-&lt;&lt;EOF
length=20
rule "charset" {
  charset = "abcdefghijklmnopqrstuvwxyz"
  min-chars = 2
}
rule "charset" {
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  min-chars = 2
}
rule "charset" {
  charset = "0123456789"
  min-chars = 2
}
rule "charset" {
  charset = "!@#$%^&*()-_=+[]{}|;:,.<>?"
  min-chars = 2
}
EOF

# Sinh password theo policy
vault read sys/policies/password/strong-password/generate

# Áp dụng password policy cho userpass
vault write auth/userpass/users/secure.user \
  password="$(vault read -field=password sys/policies/password/strong-password/generate)" \
  policies="dev-readonly"
</code></pre>

<h3 id="cap-nhat-va-xoa-user"><strong>Cập nhật và xóa user</strong></h3>

<pre><code class="language-bash"># Cập nhật password
vault write auth/userpass/users/john.doe \
  password="n3wP@ssw0rd!"

# Cập nhật policies (không thay đổi password)
vault write auth/userpass/users/john.doe/policies \
  policies="dev-readonly,dev-kv,staging-deploy"

# Xóa user
vault delete auth/userpass/users/john.doe
</code></pre>

<h2 id="4-approle-auth-method"><strong>4. AppRole Auth Method</strong></h2>

<p><strong>AppRole</strong> là auth method được thiết kế cho <strong>machine-to-machine authentication</strong>. Đây là phương pháp phổ biến nhất để ứng dụng và CI/CD pipelines xác thực với Vault.</p>

<h3 id="khai-niem-approle"><strong>Khái niệm cốt lõi</strong></h3>

<pre><code>┌─────────────────────────────────────────────────────────┐
│                     AppRole Login                       │
│                                                         │
│   RoleID (public identifier)                            │
│   + SecretID (private credential)                       │
│   = Vault Token (with assigned policies)                │
│                                                         │
│   Tương tự: username + password = session token         │
└─────────────────────────────────────────────────────────┘
</code></pre>

<table>
<thead>
<tr><th>Thành phần</th><th>Mô tả</th><th>Tương tự</th></tr>
</thead>
<tbody>
<tr><td><strong>RoleID</strong></td><td>Identifier công khai của role</td><td>Username</td></tr>
<tr><td><strong>SecretID</strong></td><td>Credential bí mật, ngắn hạn</td><td>Password</td></tr>
</tbody>
</table>

<h3 id="enable-va-tao-role"><strong>Enable và tạo Role</strong></h3>

<pre><code class="language-bash"># Enable AppRole
vault auth enable approle

# Tạo role cho web application
vault write auth/approle/role/webapp \
  token_policies="webapp-policy,db-readonly" \
  token_ttl=1h \
  token_max_ttl=4h \
  secret_id_ttl=30m \
  secret_id_num_uses=1 \
  token_num_uses=0 \
  bind_secret_id=true

# Tạo role cho CI/CD pipeline
vault write auth/approle/role/cicd-pipeline \
  token_policies="cicd-deploy" \
  token_ttl=30m \
  token_max_ttl=1h \
  secret_id_ttl=10m \
  secret_id_num_uses=1 \
  token_num_uses=10 \
  bind_secret_id=true \
  secret_id_bound_cidrs="10.0.0.0/8" \
  token_bound_cidrs="10.0.0.0/8"
</code></pre>

<h3 id="approle-parameters"><strong>Các parameters quan trọng</strong></h3>

<table>
<thead>
<tr><th>Parameter</th><th>Mô tả</th><th>Recommendation</th></tr>
</thead>
<tbody>
<tr><td><code>secret_id_ttl</code></td><td>TTL của SecretID</td><td>Càng ngắn càng tốt (5-30m)</td></tr>
<tr><td><code>secret_id_num_uses</code></td><td>Số lần sử dụng SecretID</td><td>1 (one-time use)</td></tr>
<tr><td><code>token_ttl</code></td><td>TTL mặc định của token</td><td>Đủ cho operation</td></tr>
<tr><td><code>token_max_ttl</code></td><td>TTL tối đa (kể cả renew)</td><td>Giới hạn hợp lý</td></tr>
<tr><td><code>token_num_uses</code></td><td>Số lần token được sử dụng</td><td>0 = unlimited</td></tr>
<tr><td><code>secret_id_bound_cidrs</code></td><td>CIDR cho phép dùng SecretID</td><td>Restrict theo network</td></tr>
<tr><td><code>token_bound_cidrs</code></td><td>CIDR cho phép dùng token</td><td>Restrict theo network</td></tr>
</tbody>
</table>

<h3 id="login-approle"><strong>Quy trình Login</strong></h3>

<pre><code class="language-bash"># Bước 1: Lấy RoleID (thường được bake vào config/image)
vault read auth/approle/role/webapp/role-id
# role_id    db02de05-fa39-4855-059b-67f86261c393

# Bước 2: Sinh SecretID (thường do trusted orchestrator sinh)
vault write -f auth/approle/role/webapp/secret-id
# secret_id           6a174c20-f6de-a53c-74d2-6018fcceff64
# secret_id_accessor  c454f7e5-996e-7230-6074-6ef26b7bcf86

# Bước 3: Login
vault write auth/approle/login \
  role_id="db02de05-fa39-4855-059b-67f86261c393" \
  secret_id="6a174c20-f6de-a53c-74d2-6018fcceff64"
</code></pre>

<h3 id="response-wrapping"><strong>Response Wrapping cho SecretID</strong></h3>

<p>Response wrapping là cơ chế bảo mật quan trọng — SecretID được "gói" trong một wrapping token ngắn hạn. Chỉ application đích mới có thể unwrap:</p>

<pre><code class="language-bash"># Sinh SecretID với response wrapping (TTL 120 giây)
vault write -wrap-ttl=120s -f auth/approle/role/webapp/secret-id

# Response chứa wrapping_token thay vì secret_id trực tiếp
# wrapping_token:           hvs.CAES...
# wrapping_accessor:        ...
# wrapping_token_ttl:       2m
# wrapping_token_creation_time: ...

# Application unwrap để lấy SecretID thật
vault unwrap hvs.CAES...
# secret_id    6a174c20-f6de-a53c-74d2-6018fcceff64

# Nếu ai đó đã unwrap trước → lỗi (phát hiện MITM)
vault unwrap hvs.CAES...
# Error: wrapping token is not valid or does not exist
</code></pre>

<h3 id="phat-hien-tan-cong"><strong>Phát hiện tấn công</strong></h3>

<p>Nếu wrapping token bị unwrap bởi attacker trước application:</p>
<ul>
<li><p>Application sẽ nhận lỗi khi unwrap → <strong>alert ngay lập tức</strong></p></li>
<li><p>Kiểm tra audit log để tìm source IP của attacker</p></li>
<li><p>Revoke role và re-issue credentials</p></li>
</ul>

<h2 id="5-approle-cicd"><strong>5. AppRole Best Practices cho CI/CD</strong></h2>

<h3 id="github-actions"><strong>GitHub Actions</strong></h3>

<pre><code class="language-yaml"># .github/workflows/deploy.yml
name: Deploy with Vault
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Import Secrets from Vault
        uses: hashicorp/vault-action@v3
        with:
          url: https://vault.company.com
          method: approle
          roleId: ${{ secrets.VAULT_ROLE_ID }}
          secretId: ${{ secrets.VAULT_SECRET_ID }}
          secrets: |
            secret/data/production/db username | DB_USERNAME ;
            secret/data/production/db password | DB_PASSWORD ;
            secret/data/production/api key | API_KEY

      - name: Deploy application
        run: |
          echo "Deploying with secrets..."
          ./deploy.sh
        env:
          DB_USERNAME: ${{ env.DB_USERNAME }}
          DB_PASSWORD: ${{ env.DB_PASSWORD }}
</code></pre>

<h3 id="gitlab-ci"><strong>GitLab CI</strong></h3>

<pre><code class="language-yaml"># .gitlab-ci.yml
stages:
  - deploy

deploy-production:
  stage: deploy
  image: hashicorp/vault:1.21
  variables:
    VAULT_ADDR: "https://vault.company.com"
  script:
    - |
      # Login với AppRole
      VAULT_TOKEN=$(vault write -field=token auth/approle/login \
        role_id="${VAULT_ROLE_ID}" \
        secret_id="${VAULT_SECRET_ID}")
      export VAULT_TOKEN

      # Lấy secrets
      DB_PASSWORD=$(vault kv get -field=password secret/production/db)
      export DB_PASSWORD

      # Deploy
      ./deploy.sh
  only:
    - main
</code></pre>

<h3 id="jenkins"><strong>Jenkins Pipeline</strong></h3>

<pre><code class="language-groovy">// Jenkinsfile
pipeline {
    agent any

    environment {
        VAULT_ADDR = 'https://vault.company.com'
    }

    stages {
        stage('Get Secrets') {
            steps {
                withVault(
                    configuration: [
                        vaultUrl: "${VAULT_ADDR}",
                        vaultCredentialId: 'vault-approle'
                    ],
                    vaultSecrets: [
                        [
                            path: 'secret/production/db',
                            secretValues: [
                                [envVar: 'DB_USER', vaultKey: 'username'],
                                [envVar: 'DB_PASS', vaultKey: 'password']
                            ]
                        ]
                    ]
                ) {
                    sh './deploy.sh'
                }
            }
        }
    }
}
</code></pre>

<h2 id="6-approle-deployment-pattern"><strong>6. AppRole Deployment Pattern</strong></h2>

<h3 id="trusted-orchestrator"><strong>Trusted Orchestrator Pattern</strong></h3>

<pre><code>┌──────────────┐                    ┌──────────────┐
│  Terraform/  │  1. Sinh SecretID  │    Vault     │
│  Ansible     │ ──────────────────▶│              │
│ (Orchestrator)│◀──────────────────│              │
│              │  2. Wrapped token  │              │
└──────┬───────┘                    └──────────────┘
       │
       │ 3. Deliver wrapped token
       ▼
┌──────────────┐                    ┌──────────────┐
│  Application │  4. Unwrap →       │    Vault     │
│              │     SecretID       │              │
│              │  5. Login          │              │
│              │     (RoleID +      │              │
│              │      SecretID)     │              │
│              │  6. Vault Token    │              │
└──────────────┘                    └──────────────┘
</code></pre>

<ol>
<li><p><strong>RoleID</strong> được bake vào AMI/Docker image hoặc config management</p></li>
<li><p><strong>SecretID</strong> được sinh bởi trusted orchestrator (Terraform, Ansible, CI/CD)</p></li>
<li><p>SecretID được deliver dưới dạng <strong>wrapped token</strong> cho bảo mật</p></li>
<li><p>Application unwrap để lấy SecretID, rồi login với RoleID + SecretID</p></li>
</ol>

<h3 id="pull-vs-push"><strong>Pull vs Push model</strong></h3>

<table>
<thead>
<tr><th>Model</th><th>Cách hoạt động</th><th>Ưu điểm</th><th>Nhược điểm</th></tr>
</thead>
<tbody>
<tr><td><strong>Pull</strong></td><td>App tự login Vault, lấy secrets</td><td>App kiểm soát lifecycle</td><td>App cần biết Vault</td></tr>
<tr><td><strong>Push</strong></td><td>Orchestrator inject secrets vào app</td><td>App không cần biết Vault</td><td>Secrets trong env/file</td></tr>
</tbody>
</table>

<h2 id="7-bao-mat-auth-methods"><strong>7. Bảo mật Auth Methods</strong></h2>

<h3 id="common-mistakes"><strong>Sai lầm thường gặp</strong></h3>

<ul>
<li><p>❌ Sử dụng root token trong application</p></li>
<li><p>❌ SecretID có TTL quá dài hoặc unlimited uses</p></li>
<li><p>❌ Không set CIDR binding cho AppRole</p></li>
<li><p>❌ Hardcode RoleID + SecretID trong source code</p></li>
<li><p>❌ Dùng userpass cho machine authentication</p></li>
</ul>

<h3 id="best-practices-tong-hop"><strong>Best practices tổng hợp</strong></h3>

<ul>
<li><p>✅ SecretID: <code>num_uses=1</code>, <code>ttl=5m-30m</code></p></li>
<li><p>✅ Luôn sử dụng response wrapping cho SecretID</p></li>
<li><p>✅ Set <code>secret_id_bound_cidrs</code> và <code>token_bound_cidrs</code></p></li>
<li><p>✅ Mỗi ứng dụng/service có role riêng</p></li>
<li><p>✅ Revoke root token sau khi sử dụng</p></li>
<li><p>✅ Enable audit logging để track mọi authentication</p></li>
</ul>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<p>Trong bài này, chúng ta đã tìm hiểu 3 auth methods cơ bản nhất của Vault:</p>

<ul>
<li><p><strong>Token Auth</strong> — auth method nền tảng, mọi auth method đều tạo token</p></li>
<li><p><strong>Userpass Auth</strong> — đơn giản cho human users, hỗ trợ password policies</p></li>
<li><p><strong>AppRole Auth</strong> — tiêu chuẩn cho machine authentication, hỗ trợ CI/CD workflows</p></li>
</ul>

<p>AppRole với response wrapping là pattern được khuyến nghị nhất cho CI/CD pipelines. Trong bài tiếp theo, chúng ta sẽ tìm hiểu LDAP, OIDC và JWT Auth Methods — các phương pháp xác thực enterprise cho cả human và machine identities.</p>
