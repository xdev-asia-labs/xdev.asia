---
id: 019d8b30-b212-7001-c002-e0c5f8200112
title: 'レッスン 12: LDAP、OIDC、および JWT 認証方法'
slug: bai-12-ldap-oidc-va-jwt-auth-methods
description: LDAP 認証方法 (LDAP/Active Directory の構成、グループ マッピング、ポリシー)、OIDC 認証方法 (Keycloak、Azure AD、Okta、Google による構成)、JWT 認証方法 (CI/CD 用 — GitHub Actions OIDC、GitLab CI JWT)、バインドされたクレーム、クレーム マッピング、allowed_redirect_uris。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 12
section_title: 'パート 3: 認証方法 - 認証と認可'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault の基本から上級まで
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1754" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1754)"/>

  <!-- Decorations -->
  <g>
    <circle cx="610" cy="140" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="630" cy="40" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="250" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="80" x2="1100" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="110" x2="1050" y2="180" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1010.3108891324554,162.5 1010.3108891324554,197.5 980,215 949.6891108675446,197.5 949.6891108675446,162.5 980,145" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 D​​evSecOps — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">レッスン 12: LDAP、OIDC、および JWT 認証方法</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault の基本から上級まで</text>

  <!-- Section -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 認証方法 - 認証と認可</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ldap-auth-method"><strong>1. LDAP Auth Method</strong></h2>

<p><strong>LDAP 認証方法</strong> を使用すると、Vault が LDAP ディレクトリ (Active Directory、OpenLDAP、FreeIPA) を使用してユーザーを認証できるようになります。ほとんどの組織ではすでに LDAP/AD インフラストラクチャが導入されているため、これは企業で人間のユーザーを認証する最も一般的な方法です。</p>

<h3 id="kien-truc-ldap"><strong>アーキテクチャ</strong></h3>

<pre><code>┌──────────┐   1. Login           ┌──────────────┐
│   User   │ ───────────────────▶ │    Vault     │
│          │                      │  LDAP Auth   │
│          │   4. Vault Token     │              │
│          │ ◀─────────────────── │              │
└──────────┘                      └──────┬───────┘
                                         │
                                2. LDAP Bind (verify password)
                                3. Search groups
                                         │
                                         ▼
                                  ┌──────────────┐
                                  │  LDAP Server │
                                  │  (AD / LDAP) │
                                  └──────────────┘
</code></pre>

<h3 id="cau-hinh-ldap-active-directory"><strong>Active Directory で構成</strong></h3>

<pre><code class="language-bash"># Enable LDAP auth
vault auth enable ldap

# Cấu hình kết nối Active Directory
vault write auth/ldap/config \
  url="ldaps://ad.company.com:636" \
  userdn="OU=Users,DC=company,DC=com" \
  userattr="sAMAccountName" \
  groupdn="OU=Groups,DC=company,DC=com" \
  groupattr="cn" \
  groupfilter="(&(objectClass=group)(member:1.2.840.113556.1.4.1941:={{.UserDN}}))" \
  binddn="CN=vault-svc,OU=ServiceAccounts,DC=company,DC=com" \
  bindpass="VaultServiceP@ss" \
  starttls=false \
  insecure_tls=false \
  certificate=@/etc/vault/ldap-ca.pem \
  token_ttl=8h \
  token_max_ttl=24h
</code></pre>

<h3 id="cau-hinh-openldap"><strong>OpenLDAP による構成</strong></h3>

<pre><code class="language-bash">vault write auth/ldap/config \
  url="ldaps://ldap.company.com:636" \
  userdn="ou=people,dc=company,dc=com" \
  userattr="uid" \
  groupdn="ou=groups,dc=company,dc=com" \
  groupattr="cn" \
  groupfilter="(|(memberUid={{.Username}})(member={{.UserDN}}))" \
  binddn="cn=vault,ou=services,dc=company,dc=com" \
  bindpass="LdapBindP@ss" \
  certificate=@/etc/vault/ldap-ca.pem
</code></pre>

<h3 id="group-policy-mapping"><strong>Group → Policy Mapping</strong></h3>

<pre><code class="language-bash"># Map LDAP group "DevOps" → Vault policies
vault write auth/ldap/groups/DevOps \
  policies="devops-admin,kv-devops,pki-issue"

# Map LDAP group "Developers" → Vault policies
vault write auth/ldap/groups/Developers \
  policies="dev-readonly,kv-dev"

# Map LDAP group "DBA" → Vault policies
vault write auth/ldap/groups/DBA \
  policies="db-admin,db-rotate"

# Map specific user → additional policies
vault write auth/ldap/users/john.doe \
  policies="team-lead-extra" \
  groups="DevOps,Developers"

# Liệt kê groups
vault list auth/ldap/groups
</code></pre>

<h3 id="login-ldap"><strong>LDAP でログイン</strong></h3>

<pre><code class="language-bash"># CLI login
vault login -method=ldap username=john.doe
# Password (will be hidden): ****

# API login
curl -s --request POST \
  --data '{"password": "userPassword"}' \
  ${VAULT_ADDR}/v1/auth/ldap/login/john.doe | jq .
</code></pre>

<h2 id="2-oidc-auth-method"><strong>2. OIDC Auth Method</strong></h2>

<p><strong>OIDC (OpenID Connect) 認証メソッド</strong> を使用すると、OIDC をサポートする ID プロバイダー (Keycloak、Azure AD (Entra ID)、Okta、Google Workspace、Auth0) 経由で Vault を認証できます。これは、SSO、MFA、ブラウザベースのログインをサポートしているため、人間認証の最も最新の方法です。</p>

<h3 id="oidc-flow"><strong>OIDC Authentication Flow</strong></h3>

<pre><code>┌──────────┐   1. vault login       ┌──────────────┐
│   User   │ ─────────────────────▶ │    Vault     │
│ (Browser)│                        │  OIDC Auth   │
│          │   2. Redirect to IdP   │              │
│          │ ◀───────────────────── │              │
│          │                        └──────────────┘
│          │   3. Login at IdP
│          │ ─────────────────────▶ ┌──────────────┐
│          │                        │  Keycloak/   │
│          │   4. Auth code         │  Azure AD    │
│          │ ◀───────────────────── │              │
│          │                        └──────────────┘
│          │   5. Auth code → Vault
│          │ ─────────────────────▶ ┌──────────────┐
│          │                        │    Vault     │
│          │   6. Exchange code     │              │
│          │      for tokens        │              │
│          │   7. Vault Token       │              │
│          │ ◀───────────────────── │              │
└──────────┘                        └──────────────┘
</code></pre>

<h3 id="cau-hinh-oidc-keycloak"><strong>Keycloak で構成</strong></h3>

<pre><code class="language-bash"># Enable OIDC auth
vault auth enable oidc

# Cấu hình OIDC với Keycloak
vault write auth/oidc/config \
  oidc_discovery_url="https://keycloak.company.com/realms/company" \
  oidc_client_id="vault" \
  oidc_client_secret="vault-client-secret" \
  default_role="default"

# Tạo OIDC role
vault write auth/oidc/role/default \
  bound_audiences="vault" \
  allowed_redirect_uris="https://vault.company.com/ui/vault/auth/oidc/oidc/callback" \
  allowed_redirect_uris="http://localhost:8250/oidc/callback" \
  user_claim="preferred_username" \
  groups_claim="groups" \
  token_policies="default" \
  token_ttl=8h \
  token_max_ttl=24h \
  oidc_scopes="openid,profile,email,groups"

# Tạo role cho admin với bound claims
vault write auth/oidc/role/admin \
  bound_audiences="vault" \
  allowed_redirect_uris="https://vault.company.com/ui/vault/auth/oidc/oidc/callback" \
  allowed_redirect_uris="http://localhost:8250/oidc/callback" \
  user_claim="preferred_username" \
  groups_claim="groups" \
  bound_claims='{"department": "IT", "role": "admin"}' \
  claim_mappings='{"email": "email", "department": "department"}' \
  token_policies="admin,kv-admin" \
  token_ttl=4h \
  token_max_ttl=8h
</code></pre>

<h3 id="cau-hinh-oidc-azure-ad"><strong>Azure AD で構成する (Entra ID)</strong></h3>

<pre><code class="language-bash">vault write auth/oidc/config \
  oidc_discovery_url="https://login.microsoftonline.com/&lt;tenant-id&gt;/v2.0" \
  oidc_client_id="&lt;application-id&gt;" \
  oidc_client_secret="&lt;client-secret&gt;" \
  default_role="azure-default"

vault write auth/oidc/role/azure-default \
  bound_audiences="&lt;application-id&gt;" \
  allowed_redirect_uris="https://vault.company.com/ui/vault/auth/oidc/oidc/callback" \
  allowed_redirect_uris="http://localhost:8250/oidc/callback" \
  user_claim="email" \
  groups_claim="groups" \
  token_policies="default" \
  oidc_scopes="openid,profile,email"
</code></pre>

<h3 id="login-oidc"><strong>OIDC でログイン</strong></h3>

<pre><code class="language-bash"># Browser-based login (mở browser tự động)
vault login -method=oidc role=default

# Chỉ định port cho callback
vault login -method=oidc port=8250 role=default

# Qua Vault UI: chọn OIDC → Sign in → redirect đến IdP
</code></pre>

<h2 id="3-jwt-auth-method"><strong>3. JWT Auth Method</strong></h2>

<p><strong>JWT 認証メソッド</strong> は、JSON Web トークンを使用して認証します。 OIDC (ブラウザベース) とは異なり、JWT 認証は、クライアントがすでに JWT トークンを持っている場合、特に CI/CD パイプラインの場合、<strong>マシン認証</strong> に適しています。</p>

<h3 id="jwt-vs-oidc"><strong>JWT vs OIDC Auth</strong></h3>

<table>
<thead>
<tr><th>基準</th><th>JWT認証</th><th>OIDC認証</th></tr>
</thead>
<tbody>
<tr><td>ログイン フロー</td><td>クライアントは JWT を直接送信</td><td>ブラウザ リダイレクト ベース</td></tr>
<tr><td>オブジェクト</td><td>マシン、CI/CD</td><td>人間のユーザー</td></tr>
<tr><td>トークン ソース</td><td>クライアントには、IdP</td></tr> から取得された JWT</td><td>Vault がすでにあります
<tr><td>MFA サポート</td><td>いいえ</td><td>はい (IdP 経由)</td></tr>
</tbody>
</table>

<h3 id="github-actions-oidc"><strong>GitHub Actions OIDC → Vault JWT Auth</strong></h3>

<p>GitHub アクションは、ワークフロー実行ごとに OIDC トークンを提供し、シークレットを保存せずに Vault への認証を可能にします:</p>

<pre><code class="language-bash"># Enable JWT auth cho GitHub Actions
vault auth enable -path=github-actions jwt

# Cấu hình JWT auth với GitHub OIDC Provider
vault write auth/github-actions/config \
  oidc_discovery_url="https://token.actions.githubusercontent.com" \
  bound_issuer="https://token.actions.githubusercontent.com"

# Tạo role cho repository cụ thể
vault write auth/github-actions/role/my-app \
  role_type="jwt" \
  bound_audiences="https://github.com/my-org" \
  bound_claims_type="glob" \
  bound_claims='{"repository": "my-org/my-app", "ref": "refs/heads/main"}' \
  user_claim="repository" \
  token_policies="my-app-deploy" \
  token_ttl=10m \
  token_max_ttl=30m

# Tạo role cho toàn bộ organization
vault write auth/github-actions/role/org-readonly \
  role_type="jwt" \
  bound_audiences="https://github.com/my-org" \
  bound_claims_type="glob" \
  bound_claims='{"repository": "my-org/*"}' \
  user_claim="repository" \
  token_policies="org-readonly" \
  token_ttl=5m
</code></pre>

<h3 id="github-actions-workflow"><strong>GitHub Actions Workflow</strong></h3>

<pre><code class="language-yaml"># .github/workflows/deploy.yml
name: Deploy with Vault OIDC
on:
  push:
    branches: [main]

permissions:
  id-token: write   # Required cho OIDC token
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Authenticate to Vault
        uses: hashicorp/vault-action@v3
        with:
          url: https://vault.company.com
          method: jwt
          path: github-actions
          role: my-app
          jwtGithubAudience: https://github.com/my-org
          secrets: |
            secret/data/production/db username | DB_USER ;
            secret/data/production/db password | DB_PASS

      - name: Deploy
        run: ./deploy.sh
</code></pre>

<h3 id="gitlab-ci-jwt"><strong>GitLab CI JWT Auth</strong></h3>

<pre><code class="language-bash"># Enable JWT auth cho GitLab CI
vault auth enable -path=gitlab-ci jwt

# Cấu hình
vault write auth/gitlab-ci/config \
  jwks_url="https://gitlab.company.com/-/jwks" \
  bound_issuer="https://gitlab.company.com"

# Tạo role
vault write auth/gitlab-ci/role/deploy \
  role_type="jwt" \
  bound_claims='{"project_id": "42", "ref_protected": "true"}' \
  user_claim="project_path" \
  token_policies="gitlab-deploy" \
  token_ttl=10m
</code></pre>

<pre><code class="language-yaml"># .gitlab-ci.yml
deploy:
  stage: deploy
  id_tokens:
    VAULT_ID_TOKEN:
      aud: https://vault.company.com
  script:
    - |
      VAULT_TOKEN=$(vault write -field=token auth/gitlab-ci/login \
        role=deploy \
        jwt="${VAULT_ID_TOKEN}")
      export VAULT_TOKEN
      DB_PASS=$(vault kv get -field=password secret/production/db)
      ./deploy.sh
</code></pre>

<h2 id="4-bound-claims"><strong>4。バインドされたクレームとクレームのマッピング</strong></h2>

<h3 id="bound-claims-detail"><strong>Bound Claims</strong></h3>

<p>Bound クレームは、ロールへのログインを許可される JWT トークンを制限します:</p>

<pre><code class="language-bash"># Exact match
vault write auth/jwt/role/strict-role \
  bound_claims='{"department": "engineering", "team": "platform"}'

# Glob pattern matching
vault write auth/jwt/role/glob-role \
  bound_claims_type="glob" \
  bound_claims='{"repository": "my-org/*", "ref": "refs/heads/main"}'

# Multiple values (OR logic)
vault write auth/jwt/role/multi-role \
  bound_claims='{"group": ["devops", "sre", "platform"]}'
</code></pre>

<h3 id="claim-mappings-detail"><strong>Claim Mappings</strong></h3>

<p>クレーム マッピングは、JWT クレームを Vault ID メタデータにマッピングします:</p>

<pre><code class="language-bash">vault write auth/oidc/role/mapped-role \
  claim_mappings='{"email": "email", "department": "dept", "employee_id": "emp_id"}'

# Metadata available in policies:
# {{identity.entity.aliases.&lt;mount_accessor&gt;.metadata.email}}
# {{identity.entity.aliases.&lt;mount_accessor&gt;.metadata.dept}}
</code></pre>

<h2 id="5-best-practices"><strong>5. Best Practices</strong></h2>

<h3 id="ldap-best-practices"><strong>LDAP</strong></h3>
<ul>
<li><p>常に LDAPS (ポート 636) または StartTLS</p></li> を使用します
<li><p>Vault バインドのサービス アカウントには読み取り専用権限が必要です</p></li>
<li><p>管理を容易にするために個々のユーザーではなくグループをマップします</p></li>
<li><p>本番環境を適用する前に、LDAP フィルター構成を慎重にテストしてください</p></li>
</ul>

<h3 id="oidc-best-practices"><strong>OIDC</strong></h3>
<ul>
<li><p><code>allowed_redirect_uris</code> を Vault の実際の URL のみに制限</p></li>
<li><p><code>bound_claims__P​​3__ を使用して、部門/役割ごとにアクセスを制限します</p></li>
<li><p>IdP で MFA を有効にする (Keycloak、Azure AD)</p></li>
<li><p><code>oidc_client_secret</code> を定期的に回転させる</p></li>
</ul>

<h3 id="jwt-best-practices"><strong>JWT</strong></h3>
<ul>
<li><p>静的シークレットの代わりに CI/CD からの OIDC トークンを優先します (AppRole)</p></li>
<li><p>バインドされたクレームはできる限り具体的である必要があります (リポジトリ、ブランチ、環境)</p></li>
<li><p>CI/CD のトークン短い TTL (5 ～ 15 分)</p></li>
<li><p>トークンの誤用を防ぐために<code>bound_audiences</code>を使用してください</p></li>
</ul>

<h2 id="6-tong-ket"><strong>6。概要</strong></h2>

<ul>
<li><p><strong>LDAP Auth</strong> — 既存の AD/LDAP インフラストラクチャを活用した、人間ユーザー向けのエンタープライズ選択</p></li>
<li><p><strong>OIDC Auth</strong> — 人間ユーザー向けの最先端、SSO、MFA、ブラウザベースのログイン</p></li>
<li><p><strong>JWT Auth</strong> — CI/CD (GitHub Actions OIDC、GitLab CI JWT) に最適、静的シークレットを保存する必要はありません</p></li>
</ul>

<p>次の記事では、Kubernetes、AWS、およびクラウドの認証方法、つまりワークロード ID に基づく認証に焦点を当てます。</p>
