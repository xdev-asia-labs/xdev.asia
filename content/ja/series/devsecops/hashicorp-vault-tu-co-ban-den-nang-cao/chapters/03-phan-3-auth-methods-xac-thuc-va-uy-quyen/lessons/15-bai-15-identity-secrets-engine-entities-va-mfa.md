---
id: 019d8b30-b215-7001-c002-e0c5f8200115
title: 'レッスン 15: ID シークレット エンジン、エンティティ、および MFA'
slug: bai-15-identity-secrets-engine-entities-va-mfa
description: ID シークレット エンジン、エンティティとエイリアス、エンティティ ポリシー、内部グループと外部グループ、グループ エイリアス、アイデンティティ トークン (OIDC プロバイダー)、MFA — TOTP、Duo、Okta、PingID、MFA TOTP 自己登録 (1.21)。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 3: 認証方法 - 認証と認可'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault の基本から上級まで
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: ja
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
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 D​​evSecOps — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">レッスン 15: ID シークレット エンジン、エンティティ</tspan>
<tspan x="60" dy="42"> および MFA</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault の基本から上級まで</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 認証方法 - 認証と認可</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-identity-secrets-engine"><strong>1. Identity Secrets Engine</strong></h2>

<p><strong>Identity Secrets Engine</strong> は Vault の内部コンポーネントであり、自動的に有効になり、無効にすることはできません。 <strong>identity</strong> を管理し、複数の認証方法 ID を統合ビューに結合します。</p>

<h3 id="van-de-can-giai-quyet"><strong>解決すべき問題</strong></h3>

<p>ユーザーはさまざまな認証方法で認証できます:</p>
<ul>
<li><p>CLI</p></li> を使用する場合は LDAP でログインします
<li><p>Web UI を使用する場合は OIDC でログイン</p></li>
<li><p>AppRole</p></li> を使用するユーザーのサービス アカウント
</ul>

<p>Vault には、これが <strong>同じ人物</strong> であることを認識し、ポリシーを一貫して適用する方法が必要です。</p>

<h3 id="kien-truc-identity"><strong>アイデンティティ アーキテクチャ</strong></h3>

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

<h2 id="2-entities-va-aliases"><strong>2。エンティティとエイリアス</strong></h2>

<h3 id="tao-entity"><strong>エンティティの作成</strong></h3>

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

<h3 id="tao-alias"><strong>エイリアスの作成</strong></h3>

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

<p>これで、john.doe が LDAP または OIDC を使用してログインすると、Vault はこれを同じエンティティとして認識し、エンティティ ポリシーとグループ ポリシーを適用します。</p>

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

<p>内部グループは Vault 内で完全に管理されます:</p>

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

<p>外部グループは LDAP/OIDC グループから Vault ポリシーにマップします:</p>

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

<p>Vault は <strong>OIDC プロバイダー</strong> として機能し、アイデンティティ エンティティ:</p> に基づいて OIDC トークンを発行します。

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

<p>Vault は、認証の 2 番目の層を追加する MFA をサポートしています。 MFA には 2 つのタイプがあります:</p>

<table>
<thead>
<tr><th>タイプ</th><th>説明</th><th>必要な場合</th></tr>
</thead>
<tbody>
<tr><td><strong>ログインMFA</strong></td><td>ログイン時のMFAリクエスト</td><td>すべてのログインリクエスト</td></tr>
<tr><td><strong>ステップアップ MFA</strong></td><td>機密性の高い操作の MFA リクエスト</td><td>特定のパス/操作</td></tr>
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

<p>Vault 1.21 の新機能により、ユーザーは MFA TOTP に自己登録できます:</p>

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

<h2 id="7-tong-ket"><strong>7。概要</strong></h2>

<ul>
<li><p><strong>Identity Engine</strong> — 複数の認証 ID を単一のエンティティに結合</p></li>
<li><p><strong>Entities + Aliases</strong> — map users across LDAP, OIDC, AppRole</p></li>
<li><p><strong>Groups</strong> — 内部 (Vault 管理) および外部 (LDAP/OIDC グループ)</p></li>
<li><p><strong>ID トークン</strong> — OIDC プロバイダーとしてのボールト</p></li>
<li><p><strong>MFA</strong> — TOTP、Duo、ログイン MFA、およびステップアップ MFA</p></li>
<li><p><strong>TOTP 自己登録</strong> (1.21) — ユーザーは MFA</p></li> を自己登録します
</ul>

<p>次のセクションでは、高度なシークレット エンジン (SSH、TOTP、変換、KMIP、カスタム プラグイン) について説明します。</p>
