---
id: 019d8b30-b212-7001-c002-e0c5f8200112
title: 第 12 課：LDAP、OIDC 和 JWT 驗證方法
slug: bai-12-ldap-oidc-va-jwt-auth-methods
description: >-
  LDAP 驗證方法（LDAP/Active Directory、群組對映、策略的設定）、OIDC 驗證方法（使用 Keycloak、Azure
  AD、Okta、Google 進行設定）、JWT 驗證方法（適用於 CI/CD — GitHub Actions OIDC、GitLab CI
  JWT）、綁定聲明、宣告聲明、allowedred_red_reds）、綁定聲明、聲明、allowed_red_reds。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 12
section_title: 第 3 部分：身份驗證方法 - 身份驗證和授權
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-1754" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-1754）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="610" cy="140" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="630" cy="40" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="250" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#38bdf8”不透明度=“0.15”/>
    <line x1 =“600”y1 =“80”x2 =“1100”y2 =“160”筆畫=“#38bdf8”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“110”x2 =“1050”y2 =“180”筆觸=“＃38bdf8”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「1010.3108891324554,162.5 1010.3108891324554,197.5 980,215 949.6891108675446,197.5 49.689419. 980,145" 填滿 = "無" 描邊 = "#38bdf8" 描邊寬度 = "1" 不透明度 = "0.12"/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“＃38bdf8”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“＃38bdf8”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 12 堂課</text>

  <!-- 標題 -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 12 課：LDAP、OIDC 與 JWT 驗證方法</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：驗證方法 - 驗證與授權</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ldap-auth-method"><strong>1. LDAP驗證方法</strong></h2>

<p><strong>LDAP 驗證方法</strong>允許 Vault 使用 LDAP 目錄（Active Directory、OpenLDAP、FreeIPA）對使用者進行驗證。這是企業中對人類使用者進行身份驗證的最常用方法，因為大多數組織已經部署了 LDAP/AD 基礎架構。 </p>

<h3 id="kien-truc-ldap"><strong>架構</strong></h3>

<pre><code>┌──────────┐ 1. 登入 ┌────────────┐
│ 使用者 │ ──────────────────▶ │ 保險庫 │
│ │ │ LDAP 驗證 │
│ │ 4. Vault 代幣 │ │
│ │ ◀────────────────── │ │
└──────────┘ └──────┬────────┘
                                         │
                                2.LDAP綁定（驗證密碼）
                                3. 搜尋群組
                                         │
                                         ▼
                                  ┌────────────┐
                                  │ LDAP 伺服器 │
                                  │ (AD/LDAP) │
                                  └────────────┘
</code></pre>

<h3 id="cau-hinh-ldap-active-directory"><strong>設定 Active Directory</strong></h3>

<pre><code class="language-bash"># 啟用 LDAP 驗證
vault auth enable ldap

#Cấu hình kết nối Active Directory
vault write auth/ldap/config \
  url =“ldaps://ad.company.com:636”\
  userdn =“OU =用戶，DC =公司，DC = com”\
  userattr="sAMAccountName" \
  groupdn =“OU =群組，DC =公司，DC = com”\
  組屬性=“cn”\
  groupfilter="(&(objectClass=group)(成員:1.2.840.113556.1.4.1941:={{.UserDN}}))" \
  binddn =“CN = vault-svc，OU = ServiceAccounts，DC =公司，DC = com”\
  綁定通行證=“VaultServiceP@ss”\
  starttls=假 \
  insecure_tls=假 \
  證書=@/etc/vault/ldap-ca.pem \
  token_ttl=8h \
  token_max_ttl=24小時
</code></pre>

<h3 id="cau-hinh-openldap"><strong>使用 OpenLDAP 設定</strong></h3><pre><code class="language-bash">vault 寫入 auth/ldap/config \
  url =“ldaps://ldap.company.com:636”\
  userdn =“ou =人員，dc =公司，dc = com”\
  使用者屬性=“uid”\
  groupdn =“ou =群組，dc =公司，dc = com”\
  組屬性=“cn”\
  groupfilter="(|(memberUid={{.Username}})(member={{.UserDN}}))" \
  binddn =“cn=vault，ou=服務，dc=公司，dc=com”\
  綁定通行證=“LdapBindP@ss”\
  證書=@/etc/vault/ldap-ca.pem
</code></pre>

<h3 id="group-policy-mapping"><strong>群組 → 策略映射</strong></h3>

<pre><code class="language-bash"># 對映 LDAP 群組「DevOps」→ Vault 策略
vault write auth/ldap/groups/DevOps \
  政策=“devops-admin，kv-devops，pki-問題”

# 映射 LDAP 群組「開發人員」→ Vault 策略
vault write auth/ldap/groups/Developers \
  策略=“dev-readonly，kv-dev”

# 映射 LDAP 群組「DBA」→ Vault 策略
vault write auth/ldap/groups/DBA \
  政策=“資料庫管理，資料庫旋轉”

# 映射特定使用者→附加策略
vault write auth/ldap/users/john.doe \
  政策=「團隊領導額外」\
  groups =“DevOps，開發人員”

# Liệt kê 團體
vault list auth/ldap/groups
</code></pre>

<h3 id="login-ldap"><strong>使用 LDAP 登入</strong></h3>

<pre><code class="language-bash"># CLI 登入
vault login -method=ldap username=john.doe
# 密碼（將會隱藏）：****

# 介面登入
curl -s --request POST \
  --data '{"密碼": "使用者密碼"}' \
  ${VAULT_ADDR}/v1/auth/ldap/login/john.doe | ${VAULT_ADDR}/v1/auth/ldap/login/john.doe | jq .
</code></pre>

<h2 id="2-oidc-auth-method"><strong>2. OIDC認證方式</strong></h2>

<p><strong>OIDC (OpenID Connect) 驗證方法</strong>允許保險箱透過支援 OIDC 的身份提供者進行驗證 - Keycloak、Azure AD (Entra ID)、Okta、Google Workspace、Auth0。這是最現代的人工身份驗證方法，因為它支援 SSO、MFA 和基於瀏覽器的登入。 </p>

<h3 id="oidc-flow"><strong>OIDC 驗證流程</strong></h3>

<pre><code>┌──────────┐ 1.金庫登入 ┌────────────┐
│ 使用者 │ ────────────────────▶ │ 保險庫 │
│（瀏覽器）│ │ OIDC 驗證 │
│ │ 2. 重新導向至 IdP │ │
│ │ ◀──────────────────── │ │
│ │ └────────────┘
│ │ 3. 在 IdP 登入
│ │ ──────────────────▶ ┌──────────────┐
│ │ │ 鑰匙斗篷/ │
│ │ 4. 授權碼 │ Azure AD │
│ │ ◀──────────────────── │ │
│ │ └────────────┘
│ │ 5. 授權碼 → Vault
│ │ ──────────────────▶ ┌──────────────┐
│ │ │ 金庫 │
│ │ 6. 兌換碼 │ │
│ │ 代幣 │ │
│ │ 7. Vault 代幣 │ │
│ │ ◀──────────────────── │ │
└──────────┘ └──────────────┘
</code></pre>

<h3 id="cau-hinh-oidc-keycloak"><strong>使用 Keycloak 配置</strong></h3>

<pre><code class="language-bash"># 啟用 OIDC 驗證
vault auth enable oidc

# Cấu hình OIDC với Keycloak
vault write auth/oidc/config \
  oidc_discovery_url="https://keycloak.company.com/realms/company" \
  oidc_client_id="金庫" \
  oidc_client_secret="vault-client-secret" \
  預設角色=“預設”# Tạo OIDC 角色
vault write auth/oidc/role/default \
  bound_audiences =「金庫」\
  allowed_redirect_uris="https://vault.company.com/ui/vault/auth/oidc/oidc/callback" \
  allowed_redirect_uris="http://localhost:8250/oidc/callback" \
  user_claim =「首選使用者名稱」\
  groups_claim =「群組」\
  token_policies=“預設”\
  token_ttl=8h \
  token_max_ttl=24h \
  oidc_scopes="openid、個人資料、電子郵件、群組"

# Tạo 角色 cho admin với 綁定聲明
vault write auth/oidc/role/admin \
  bound_audiences =「金庫」\
  allowed_redirect_uris="https://vault.company.com/ui/vault/auth/oidc/oidc/callback" \
  allowed_redirect_uris="http://localhost:8250/oidc/callback" \
  user_claim =「首選使用者名稱」\
  groups_claim =「群組」\
  bound_claims='{“部門”：“IT”，“角色”：“管理員”}' \
  Claim_mappings='{"電子郵件": "電子郵件", "部門": "部門"}' \
  token_policies="admin,kv-admin" \
  token_ttl=4h \
  token_max_ttl=8h
</code></pre>

<h3 id="cau-hinh-oidc-azure-ad"><strong>使用 Azure AD (Entra ID) 設定</strong></h3>

<pre><code class="language-bash">vault 寫入 auth/oidc/config \
  oidc_discovery_url="https://login.microsoftonline.com/&lt;tenant-id&gt;/v2.0" \
  oidc_client_id="<應用程式 ID>" \
  oidc_client_secret="<客戶端秘密>" \
  default_role =“天藍色預設”

vault write auth/oidc/role/azure-default \
  bound_audiences="<應用程式 ID>" \
  allowed_redirect_uris="https://vault.company.com/ui/vault/auth/oidc/oidc/callback" \
  allowed_redirect_uris="http://localhost:8250/oidc/callback" \
  user_claim="電子郵件" \
  groups_claim =「群組」\
  token_policies=“預設”\
  oidc_scopes="openid、個人資料、電子郵件"
</code></pre>

<h3 id="login-oidc"><strong>使用 OIDC 登入</strong></h3>

<pre><code class="language-bash"># 以瀏覽器為基礎的登入（mở browser tự động）
vault login -method=oidc role=default

# Chỉ định 端口 cho 回調
vault login -method=oidc port=8250 role=default

# Qua Vault UI：chọn OIDC → 登入 → 重定向 đến IdP
</code></pre>

<h2 id="3-jwt-auth-method"><strong>3. JWT認證方法</strong></h2>

<p><strong>JWT 驗證方法</strong>使用 JSON Web 令牌進行驗證。與 OIDC（基於瀏覽器）不同，當用戶端已有 JWT 令牌時，JWT 驗證適用於<strong>機器身份驗證</strong> - 特別是對於 CI/CD 管道。 </p>

<h3 id="jwt-vs-oidc"><strong>JWT 與 OIDC 驗證</strong></h3>

<表>
<標題>
<tr><th>條件</th><th>JWT 驗證</th><th>OIDC 驗證</th></tr>
</標題>
<正文>
<tr><td>登入流程</td><td>客戶端直接傳送JWT</td><td>基於瀏覽器重新導向</td></tr>
<tr><td>物件</td><td>機器、CI/CD</td><td>人類使用者</td></tr>
<tr><td>令牌來源</td><td>客戶端已擁有 JWT</td><td>從 IdP 取得的 Vault</td></tr>
<tr><td>MFA 支援</td><td>否</td><td>是（透過 IdP）</td></tr>
</tbody>
</表>

<h3 id="github-actions-oidc"><strong>GitHub 操作 OIDC → Vault JWT 驗證</strong></h3>

<p>GitHub Actions 為每個工作流程運行提供 OIDC 令牌，允許在不保存機密的情況下對 Vault 進行身份驗證：</p>

<pre><code class="language-bash"># 啟用 JWT auth cho GitHub Actions
vault auth enable -path=github-actions jwt

# Cấu hình JWT auth với GitHub OIDC 提供者
vault write auth/github-actions/config \
  oidc_discovery_url="https://token.actions.githubusercontent.com" \
  bound_issuer =“https://token.actions.githubusercontent.com"

# Tạo 角色 cho 儲存庫 cụ thể
vault write auth/github-actions/role/my-app \
  角色類型=“jwt”\
  bound_audiences =“https://github.com/my-org" \
  bound_claims_type="glob" \
  bound_claims='{"repository": "my-org/my-app", "ref": "refs/heads/main"}' \
  user_claim =「儲存庫」\
  token_policies =「我的應用程式部署」\
  token_ttl=10m \
  token_max_ttl=30m# Tạo 角色 cho toàn bộ 組織
vault write auth/github-actions/role/org-readonly \
  角色類型=“jwt”\
  bound_audiences =“https://github.com/my-org" \
  bound_claims_type="glob" \
  bound_claims='{"repository": "my-org/*"}' \
  user_claim =「儲存庫」\
  token_policies="org-readonly" \
  token_ttl=5m
</code></pre>

<h3 id="github-actions-workflow"><strong>GitHub Actions 工作流程</strong></h3>

<pre><code class="language-yaml"># .github/workflows/deploy.yml
名稱：使用 Vault OIDC 進行部署
於：
  推：
    分支：[主要]

權限：
  id-token: write # 所需的 cho OIDC 令牌
  內容： 閱讀

職位：
  部署：
    運行：ubuntu-latest
    步驟：
      - 使用：actions/checkout@v4

      - 名稱：向 Vault 進行身份驗證
        使用：hashicorp/vault-action@v3
        與：
          網址：https://vault.company.com
          方法：jwt
          路徑：github-actions
          角色：我的應用程式
          jwtGithubAudience：https://github.com/my-org
          秘密： |
            秘密/資料/生產/資料庫使用者名稱|資料庫使用者；
            秘密/資料/生產/資料庫密碼 |資料庫密碼

      - 名稱：部署
        運行：./deploy.sh
</code></pre>

<h3 id="gitlab-ci-jwt"><strong>GitLab CI JWT 驗證</strong></h3>

<pre><code class="language-bash"># 啟用 JWT auth cho GitLab CI
vault auth enable -path=gitlab-ci jwt

#Cấu hình
vault write auth/gitlab-ci/config \
  jwks_url="https://gitlab.company.com/-/jwks" \
  bound_issuer =“https://gitlab.company.com"

#陶角色
vault write auth/gitlab-ci/role/deploy \
  角色類型=“jwt”\
  bound_claims='{"project_id": "42", "ref_protected": "true"}' \
  user_claim =「專案路徑」\
  token_policies="gitlab-deploy" \
  token_ttl=10m
</code></pre>

<pre><code class="language-yaml"># .gitlab-ci.yml
部署：
  階段：部署
  id_令牌：
    VAULT_ID_TOKEN：
      音訊：https://vault.company.com
  腳本：
    - |
      VAULT_TOKEN=$(vault write-field=token auth/gitlab-ci/login \
        角色=部署\
        jwt="${VAULT_ID_TOKEN}")
      匯出 VAULT_TOKEN
      DB_PASS=$(vault kv get-field=密碼秘密/生產/db)
      ./部署.sh
</code></pre>

<h2 id="4-bound-claims"><strong>4.綁定宣告與宣告映射</strong></h2>

<h3 id="bound-claims-detail"><strong>綁定宣告</strong></h3>

<p>綁定宣告限制允許哪些 JWT 令牌登入角色：</p>

<pre><code class="language-bash"># 完全匹配
vault write auth/jwt/role/strict-role \
  bound_claims='{"部門": "工程", "團隊": "平台"}'

# 全域模式匹配
vault write auth/jwt/role/glob-role \
  bound_claims_type="glob" \
  bound_claims='{"repository": "my-org/*", "ref": "refs/heads/main"}'

# 多個值（或邏輯）
vault write auth/jwt/role/multi-role \
  bound_claims='{"group": ["devops", "sre", "platform"]}'
</code></pre>

<h3 id="claim-mappings-detail"><strong>宣告映射</strong></h3>

<p>宣告會對應將 JWT 宣告對應到 Vault 身分識別元資料：</p>

<pre><code class="language-bash">vault 寫入 auth/oidc/role/mapped-role \
  Claim_mappings='{"email": "email", "department": "dept", "employee_id": "emp_id"}'

# 策略中可用的元資料：
# {{identity.entity.aliases.<mount_accessor>.metadata.email}}
# {{identity.entity.aliases.<mount_accessor>.metadata.dept}}
</code></pre>

<h2 id="5-best-practices"><strong>5。最佳實務</strong></h2><h3 id="ldap-best-practices"><strong>LDAP</strong></h3>
<ul>
<li><p>始終使用 LDAPS（連接埠 636）或 StartTLS</p></li>
<li><p>Vault 綁定的服務帳戶應具有唯讀權限</p></li>
<li><p>映射群組而不是單一使用者以方便管理</p></li>
<li><p>在應用生產之前仔細測試 LDAP 過濾器配置</p></li>
</ul>

<h3 id="oidc-best-practices"><strong>OIDC</strong></h3>
<ul>
<li><p>將 <code>allowed_redirect_uris</code> 限制為僅保險箱實際網址</p></li>
<li><p>使用<code>bound_claims</code>按部門/角色限制存取</p></li>
<li><p>在 IdP 處啟用 MFA（Keycloak、Azure AD）</p></li>
<li><p>定期輪替 <code>oidc_client_secret</code></p></li>
</ul>

<h3 id="jwt-best-practices"><strong>智威湯遜</strong></h3>
<ul>
<li><p>偏好 CI/CD 中的 OIDC 令牌，而不是靜態機密 (AppRole)</p></li>
<li><p>綁定聲明應盡可能具體（儲存庫、分支、環境）</p></li>
<li><p>CI/CD 的令牌短 TTL（5-15 分鐘）</p></li>
<li><p>使用 <code>bound_audiences</code> 防止令牌濫用</p></li>
</ul>

<h2 id="6-tong-ket"><strong>6。摘要</strong></h2>

<ul>
<li><p><strong>LDAP Auth</strong> - 人類使用者的企業選擇，利用現有的 AD/LDAP 基礎設施</p></li>
<li><p><strong>OIDC Auth</strong> — 人類使用者最先進的技術、SSO、MFA、基於瀏覽器的登入</p></li>
<li><p><strong>JWT Auth</strong> - 非常適合 CI/CD（GitHub Actions OIDC、GitLab CI JWT），無需保存靜態機密</p></li>
</ul>

<p>下一篇文章將重點放在 Kubernetes、AWS 和雲端身份驗證方法 - 基於工作負載身份的身份驗證。 </p>
