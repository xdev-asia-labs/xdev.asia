---
id: 019d8b30-b212-7001-c002-e0c5f8200112
title: 'Bài 12: LDAP, OIDC và JWT Auth Methods'
slug: bai-12-ldap-oidc-va-jwt-auth-methods
description: >-
  LDAP Auth Method (cấu hình LDAP/Active Directory, group mapping, policies),
  OIDC Auth Method (cấu hình với Keycloak, Azure AD, Okta, Google), JWT Auth
  Method (cho CI/CD — GitHub Actions OIDC, GitLab CI JWT), Bound claims,
  Claim mappings, allowed_redirect_uris.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 3: Auth Methods - Xác thực và Ủy quyền"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<h2 id="1-ldap-auth-method"><strong>1. LDAP Auth Method</strong></h2>

<p><strong>LDAP Auth Method</strong> cho phép Vault xác thực users bằng LDAP directory (Active Directory, OpenLDAP, FreeIPA). Đây là phương pháp phổ biến nhất trong enterprise để xác thực human users vì hầu hết tổ chức đã có sẵn LDAP/AD infrastructure.</p>

<h3 id="kien-truc-ldap"><strong>Kiến trúc</strong></h3>

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

<h3 id="cau-hinh-ldap-active-directory"><strong>Cấu hình với Active Directory</strong></h3>

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

<h3 id="cau-hinh-openldap"><strong>Cấu hình với OpenLDAP</strong></h3>

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

<h3 id="login-ldap"><strong>Login với LDAP</strong></h3>

<pre><code class="language-bash"># CLI login
vault login -method=ldap username=john.doe
# Password (will be hidden): ****

# API login
curl -s --request POST \
  --data '{"password": "userPassword"}' \
  ${VAULT_ADDR}/v1/auth/ldap/login/john.doe | jq .
</code></pre>

<h2 id="2-oidc-auth-method"><strong>2. OIDC Auth Method</strong></h2>

<p><strong>OIDC (OpenID Connect) Auth Method</strong> cho phép Vault xác thực qua các Identity Providers hỗ trợ OIDC — Keycloak, Azure AD (Entra ID), Okta, Google Workspace, Auth0. Đây là phương pháp hiện đại nhất cho human authentication vì hỗ trợ SSO, MFA, và browser-based login.</p>

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

<h3 id="cau-hinh-oidc-keycloak"><strong>Cấu hình với Keycloak</strong></h3>

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

<h3 id="cau-hinh-oidc-azure-ad"><strong>Cấu hình với Azure AD (Entra ID)</strong></h3>

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

<h3 id="login-oidc"><strong>Login với OIDC</strong></h3>

<pre><code class="language-bash"># Browser-based login (mở browser tự động)
vault login -method=oidc role=default

# Chỉ định port cho callback
vault login -method=oidc port=8250 role=default

# Qua Vault UI: chọn OIDC → Sign in → redirect đến IdP
</code></pre>

<h2 id="3-jwt-auth-method"><strong>3. JWT Auth Method</strong></h2>

<p><strong>JWT Auth Method</strong> xác thực bằng JSON Web Tokens. Khác với OIDC (browser-based), JWT auth phù hợp cho <strong>machine authentication</strong> khi client đã có sẵn JWT token — đặc biệt cho CI/CD pipelines.</p>

<h3 id="jwt-vs-oidc"><strong>JWT vs OIDC Auth</strong></h3>

<table>
<thead>
<tr><th>Tiêu chí</th><th>JWT Auth</th><th>OIDC Auth</th></tr>
</thead>
<tbody>
<tr><td>Login flow</td><td>Client gửi JWT trực tiếp</td><td>Browser-based redirect</td></tr>
<tr><td>Đối tượng</td><td>Machines, CI/CD</td><td>Human users</td></tr>
<tr><td>Token source</td><td>Client đã có JWT</td><td>Vault lấy từ IdP</td></tr>
<tr><td>MFA support</td><td>Không</td><td>Có (qua IdP)</td></tr>
</tbody>
</table>

<h3 id="github-actions-oidc"><strong>GitHub Actions OIDC → Vault JWT Auth</strong></h3>

<p>GitHub Actions cung cấp OIDC tokens cho mỗi workflow run, cho phép xác thực với Vault mà không cần lưu secrets:</p>

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

<h2 id="4-bound-claims"><strong>4. Bound Claims và Claim Mappings</strong></h2>

<h3 id="bound-claims-detail"><strong>Bound Claims</strong></h3>

<p>Bound claims giới hạn JWT tokens nào được phép login vào một role:</p>

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

<p>Claim mappings map JWT claims vào Vault identity metadata:</p>

<pre><code class="language-bash">vault write auth/oidc/role/mapped-role \
  claim_mappings='{"email": "email", "department": "dept", "employee_id": "emp_id"}'

# Metadata available in policies:
# {{identity.entity.aliases.&lt;mount_accessor&gt;.metadata.email}}
# {{identity.entity.aliases.&lt;mount_accessor&gt;.metadata.dept}}
</code></pre>

<h2 id="5-best-practices"><strong>5. Best Practices</strong></h2>

<h3 id="ldap-best-practices"><strong>LDAP</strong></h3>
<ul>
<li><p>Luôn sử dụng LDAPS (port 636) hoặc StartTLS</p></li>
<li><p>Service account cho Vault bind nên có quyền read-only</p></li>
<li><p>Map groups thay vì individual users để dễ quản lý</p></li>
<li><p>Test cấu hình LDAP filter kỹ trước khi áp dụng production</p></li>
</ul>

<h3 id="oidc-best-practices"><strong>OIDC</strong></h3>
<ul>
<li><p>Giới hạn <code>allowed_redirect_uris</code> chỉ cho Vault URL thực tế</p></li>
<li><p>Sử dụng <code>bound_claims</code> để restrict access theo department/role</p></li>
<li><p>Enable MFA tại IdP (Keycloak, Azure AD)</p></li>
<li><p>Rotate <code>oidc_client_secret</code> định kỳ</p></li>
</ul>

<h3 id="jwt-best-practices"><strong>JWT</strong></h3>
<ul>
<li><p>Ưu tiên OIDC tokens từ CI/CD thay vì static secrets (AppRole)</p></li>
<li><p>Bound claims nên càng specific càng tốt (repo, branch, environment)</p></li>
<li><p>Token TTL ngắn (5-15 phút) cho CI/CD</p></li>
<li><p>Sử dụng <code>bound_audiences</code> để prevent token misuse</p></li>
</ul>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<ul>
<li><p><strong>LDAP Auth</strong> — lựa chọn enterprise cho human users, tận dụng AD/LDAP infrastructure sẵn có</p></li>
<li><p><strong>OIDC Auth</strong> — hiện đại nhất cho human users, SSO, MFA, browser-based login</p></li>
<li><p><strong>JWT Auth</strong> — lý tưởng cho CI/CD (GitHub Actions OIDC, GitLab CI JWT), không cần lưu static secrets</p></li>
</ul>

<p>Bài tiếp theo sẽ tập trung vào Kubernetes, AWS và Cloud Auth Methods — xác thực dựa trên workload identity.</p>
