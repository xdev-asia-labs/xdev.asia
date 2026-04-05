---
id: 019d8b30-b215-7001-c002-e0c5f8200115
title: 'Bài 15: Identity Secrets Engine, Entities và MFA'
slug: bai-15-identity-secrets-engine-entities-va-mfa
description: >-
  Identity Secrets Engine, Entities và Aliases, Entity policies, Internal Groups
  vs External Groups, Group aliases, Identity Tokens (OIDC provider),
  MFA — TOTP, Duo, Okta, PingID, MFA TOTP self-enrollment (1.21).
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 3: Auth Methods - Xác thực và Ủy quyền"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7946" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7946)"/>

  <!-- Decorations -->
  <g>
    <circle cx="906" cy="48" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="712" cy="54" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1018" cy="60" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="824" cy="66" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="72" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="188" x2="1100" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="218" x2="1050" y2="288" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.2390923627308,116.5 975.2390923627308,159.5 938,181 900.7609076372692,159.5 900.7609076372692,116.50000000000001 938,95" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — Bài 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 15: Identity Secrets Engine, Entities</tspan>
      <tspan x="60" dy="42">và MFA</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Auth Methods - Xác thực và Ủy quyền</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-identity-secrets-engine"><strong>1. Identity Secrets Engine</strong></h2>

<p><strong>Identity Secrets Engine</strong> là thành phần nội bộ của Vault, tự động được enable và không thể disable. Nó quản lý <strong>identity</strong> — kết hợp nhiều auth method identities thành một view thống nhất.</p>

<h3 id="van-de-can-giai-quyet"><strong>Vấn đề cần giải quyết</strong></h3>

<p>Một user có thể xác thực qua nhiều auth methods khác nhau:</p>
<ul>
<li><p>Login bằng LDAP khi dùng CLI</p></li>
<li><p>Login bằng OIDC khi dùng Web UI</p></li>
<li><p>Service account của user dùng AppRole</p></li>
</ul>

<p>Vault cần cách để nhận biết đây là <strong>cùng một người</strong> và áp dụng policies nhất quán.</p>

<h3 id="kien-truc-identity"><strong>Kiến trúc Identity</strong></h3>

<pre><code>┌─────────────────────────────────────────────────┐
│                   Entity                        │
│  (Đại diện cho 1 người/machine duy nhất)       │
│                                                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │ Alias 1 │  │ Alias 2 │  │ Alias 3 │        │
│  │ (LDAP)  │  │ (OIDC)  │  │(AppRole)│        │
│  └─────────┘  └─────────┘  └─────────┘        │
│                                                 │
│  Policies: [team-lead, dev-admin]              │
│  Metadata: {team: platform, level: senior}      │
│                                                 │
│  Groups: [platform-team, all-engineers]         │
└─────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-entities-va-aliases"><strong>2. Entities và Aliases</strong></h2>

<h3 id="tao-entity"><strong>Tạo Entity</strong></h3>

<pre><code class="language-bash"># Tạo entity thủ công
vault write identity/entity \
  name="john-doe" \
  policies="team-lead" \
  metadata='{"team": "platform", "employee_id": "EMP001", "email": "john@company.com"}'

# Đọc entity
vault read identity/entity/name/john-doe

# Liệt kê entities
vault list identity/entity/name
</code></pre>

<h3 id="tao-alias"><strong>Tạo Aliases</strong></h3>

<pre><code class="language-bash"># Lấy mount accessor cho auth methods
vault auth list -format=json | jq -r '."ldap/".accessor'
# auth_ldap_abc123

vault auth list -format=json | jq -r '."oidc/".accessor'
# auth_oidc_def456

# Tạo alias cho LDAP
vault write identity/entity-alias \
  name="john.doe" \
  canonical_id="&lt;entity-id&gt;" \
  mount_accessor="auth_ldap_abc123"

# Tạo alias cho OIDC
vault write identity/entity-alias \
  name="john.doe@company.com" \
  canonical_id="&lt;entity-id&gt;" \
  mount_accessor="auth_oidc_def456"
</code></pre>

<p>Bây giờ khi john.doe login bằng LDAP hoặc OIDC, Vault nhận biết đây là cùng entity và áp dụng entity policies + group policies.</p>

<h3 id="entity-metadata"><strong>Entity Metadata trong Policies</strong></h3>

<pre><code class="language-hcl"># Policy template sử dụng entity metadata
path "secret/data/teams/{{identity.entity.metadata.team}}/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}

# Dựa trên entity name
path "secret/data/users/{{identity.entity.name}}/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}
</code></pre>

<h2 id="3-groups"><strong>3. Groups</strong></h2>

<h3 id="internal-groups"><strong>Internal Groups</strong></h3>

<p>Internal groups được quản lý hoàn toàn bên trong Vault:</p>

<pre><code class="language-bash"># Tạo internal group
vault write identity/group \
  name="platform-team" \
  type="internal" \
  policies="platform-admin,kv-platform" \
  member_entity_ids="entity-id-1,entity-id-2,entity-id-3" \
  metadata='{"department": "engineering", "cost_center": "CC001"}'

# Thêm member vào group
vault write identity/group/name/platform-team \
  member_entity_ids="entity-id-1,entity-id-2,entity-id-3,entity-id-4"

# Nested groups (sub-groups)
vault write identity/group \
  name="all-engineers" \
  type="internal" \
  policies="engineer-base" \
  member_group_ids="&lt;platform-team-id&gt;,&lt;backend-team-id&gt;,&lt;frontend-team-id&gt;"
</code></pre>

<h3 id="external-groups"><strong>External Groups</strong></h3>

<p>External groups map từ LDAP/OIDC groups vào Vault policies:</p>

<pre><code class="language-bash"># Tạo external group
vault write identity/group \
  name="ldap-devops" \
  type="external" \
  policies="devops-admin,kv-devops"

# Map đến LDAP group via group alias
vault write identity/group-alias \
  name="CN=DevOps,OU=Groups,DC=company,DC=com" \
  mount_accessor="auth_ldap_abc123" \
  canonical_id="&lt;external-group-id&gt;"

# Map đến OIDC group
vault write identity/group-alias \
  name="devops" \
  mount_accessor="auth_oidc_def456" \
  canonical_id="&lt;external-group-id&gt;"
</code></pre>

<h2 id="4-identity-tokens"><strong>4. Identity Tokens (OIDC Provider)</strong></h2>

<p>Vault có thể hoạt động như một <strong>OIDC Provider</strong> — phát hành OIDC tokens dựa trên identity entity:</p>

<pre><code class="language-bash"># Tạo assignment (ai được phát token)
vault write identity/oidc/assignment/dev-team \
  entity_ids="entity-id-1,entity-id-2" \
  group_ids="group-id-1"

# Tạo key cho signing
vault write identity/oidc/key/app-key \
  algorithm="RS256" \
  allowed_client_ids="*" \
  rotation_period="24h"

# Tạo OIDC client
vault write identity/oidc/client/my-webapp \
  redirect_uris="https://myapp.company.com/callback" \
  assignments="dev-team" \
  key="app-key" \
  id_token_ttl="30m" \
  access_token_ttl="1h"

# Tạo OIDC provider
vault write identity/oidc/provider/company \
  issuer="https://vault.company.com" \
  allowed_client_ids="&lt;client-id&gt;" \
  scopes_supported="openid,email,profile,groups"
</code></pre>

<h2 id="5-multi-factor-authentication"><strong>5. Multi-Factor Authentication (MFA)</strong></h2>

<p>Vault hỗ trợ MFA để thêm lớp xác thực thứ hai. Có hai loại MFA:</p>

<table>
<thead>
<tr><th>Loại</th><th>Mô tả</th><th>Khi nào yêu cầu</th></tr>
</thead>
<tbody>
<tr><td><strong>Login MFA</strong></td><td>Yêu cầu MFA khi login</td><td>Mọi login request</td></tr>
<tr><td><strong>Step-up MFA</strong></td><td>Yêu cầu MFA cho operations nhạy cảm</td><td>Specific paths/operations</td></tr>
</tbody>
</table>

<h3 id="totp-mfa"><strong>TOTP MFA</strong></h3>

<pre><code class="language-bash"># Tạo TOTP MFA method
vault write identity/mfa/method/totp \
  method_name="company-totp" \
  issuer="VaultCompany" \
  period=30 \
  key_size=20 \
  digits=6 \
  algorithm="SHA1" \
  qr_size=200

# Lấy MFA method ID
vault read identity/mfa/method/totp

# Tạo Login MFA enforcement
vault write identity/mfa/login-enforcement/require-totp \
  mfa_method_ids="&lt;totp-method-id&gt;" \
  auth_method_types="userpass,ldap" \
  identity_group_ids="&lt;admin-group-id&gt;"
</code></pre>

<h3 id="totp-self-enrollment"><strong>MFA TOTP Self-enrollment (Vault 1.21)</strong></h3>

<p>Tính năng mới trong Vault 1.21 cho phép users tự đăng ký MFA TOTP:</p>

<pre><code class="language-bash"># Admin: enable self-enrollment
vault write identity/mfa/method/totp \
  method_name="self-totp" \
  issuer="CompanyVault" \
  allow_self_enrollment=true

# User: login rồi enroll TOTP
# 1. Login
vault login -method=userpass username=john.doe

# 2. Generate TOTP secret (trả về QR code URL)
vault write identity/mfa/method/totp/admin-generate \
  method_id="&lt;totp-method-id&gt;" \
  entity_id="&lt;my-entity-id&gt;"

# 3. Quét QR code bằng app (Google Authenticator, Authy)
# 4. Login lần tiếp theo sẽ yêu cầu TOTP code
</code></pre>

<h3 id="duo-mfa"><strong>Duo MFA</strong></h3>

<pre><code class="language-bash"># Cấu hình Duo MFA
vault write identity/mfa/method/duo \
  method_name="company-duo" \
  secret_key="&lt;duo-secret-key&gt;" \
  integration_key="&lt;duo-integration-key&gt;" \
  api_hostname="api-xxxxxxxx.duosecurity.com" \
  push_info="Vault Login"

# Enforcement cho admin group
vault write identity/mfa/login-enforcement/admin-duo \
  mfa_method_ids="&lt;duo-method-id&gt;" \
  identity_group_ids="&lt;admin-group-id&gt;"
</code></pre>

<h2 id="6-mfa-login-flow"><strong>6. MFA Login Flow</strong></h2>

<pre><code>┌──────────┐   1. Login            ┌──────────────┐
│   User   │ ────────────────────▶ │    Vault     │
│          │                       │              │
│          │   2. MFA Required     │              │
│          │      (request_id)     │              │
│          │ ◀──────────────────── │              │
│          │                       │              │
│          │   3. Submit MFA code  │              │
│          │      + request_id     │              │
│          │ ────────────────────▶ │              │
│          │                       │              │
│          │   4. Vault Token      │              │
│          │ ◀──────────────────── │              │
└──────────┘                       └──────────────┘
</code></pre>

<pre><code class="language-bash"># Step 1: Login (trả về mfa_request_id nếu MFA required)
vault login -method=userpass username=john.doe
# Enter MFA code for method "company-totp":

# Step 2: Enter TOTP code
# 123456

# API flow
# Login → nhận mfa_request_id
curl -s --request POST \
  --data '{"password": "p@ss"}' \
  ${VAULT_ADDR}/v1/auth/userpass/login/john.doe

# Validate MFA
curl -s --request POST \
  --data '{
    "mfa_request_id": "...",
    "mfa_payload": {
      "&lt;totp-method-id&gt;": ["123456"]
    }
  }' \
  ${VAULT_ADDR}/v1/sys/mfa/validate
</code></pre>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><p><strong>Identity Engine</strong> — kết hợp nhiều auth identities thành một entity duy nhất</p></li>
<li><p><strong>Entities + Aliases</strong> — map users across LDAP, OIDC, AppRole</p></li>
<li><p><strong>Groups</strong> — Internal (Vault-managed) và External (LDAP/OIDC groups)</p></li>
<li><p><strong>Identity Tokens</strong> — Vault như OIDC Provider</p></li>
<li><p><strong>MFA</strong> — TOTP, Duo, Login MFA và Step-up MFA</p></li>
<li><p><strong>TOTP Self-enrollment</strong> (1.21) — users tự đăng ký MFA</p></li>
</ul>

<p>Phần tiếp theo sẽ đi vào Secrets Engines nâng cao — SSH, TOTP, Transform, KMIP và Custom Plugins.</p>
