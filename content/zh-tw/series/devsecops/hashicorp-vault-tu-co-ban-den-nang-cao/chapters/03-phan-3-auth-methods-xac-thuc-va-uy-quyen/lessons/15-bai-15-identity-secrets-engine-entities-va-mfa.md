---
id: 019d8b30-b215-7001-c002-e0c5f8200115
title: 'Lesson 15: Identity Secrets Engine, Entities and MFA'
slug: bai-15-identity-secrets-engine-entities-va-mfa
description: >-
  身分秘密引擎、實體和別名、實體策略、內部群組與外部群組、群組別名、身分識別令牌（OIDC 提供者）、MFA —
  TOTP、Duo、Okta、PingID、MFA TOTP 自行註冊 (1.21)。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 15
section_title: 第 3 部分：身份驗證方法 - 身份驗證和授權
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-7946" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-7946）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="906" cy="48" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="712" cy="54" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1018" cy="60" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="824" cy="66" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="72" r="26" fill="#2dd4bf" opacity="0.05"/>
    <圓cx =“750”cy =“80”r =“1.5”填滿=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <圓cx =“778”cy =“164”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“806”cy =“80”r =“1.5”填滿=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <圓cx =“862”cy =“80”r =“1.5”填滿=“#2dd4bf”不透明度=“0.15”/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <圓cx =“862”cy =“164”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“890”cy =“80”r =“1.5”填滿=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#2dd4bf”不透明度=“0.15”/>
    <line x1 =“600”y1 =“188”x2 =“1100”y2 =“268”筆畫=“#2dd4bf”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“218”x2 =“1050”y2 =“288”筆觸=“#2dd4bf”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「975.2390923627308,116.5 975.2390923627308,159.5 938,181 900.7609076372692,159.5 900.7609076372692,116.50000000000001 938,95" 填滿 = "無" 描邊 = "#2dd4bf" 描邊寬度 = "1" 不透明度 = "0.12"/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#2dd4bf”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#2dd4bf”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — 第 15 堂課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 15 課：身分秘密引擎，實體</tspan>
<tspan x="60" dy="42">和 MFA</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：驗證方法 - 驗證與授權</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-identity-secrets-engine"><strong>1.身分秘密引擎</strong></h2>

<p><strong>身分秘密引擎</strong>是 Vault 的內部元件，自動啟用且無法停用。它管理<strong>身份</strong> - 將多個身份驗證方法身份組合到一個統一的視圖中。 </p>

<h3 id="van-de-can-giai-quyet"><strong>待解決的問題</strong></h3>

<p>使用者可以透過多種不同的身份驗證方法進行身份驗證：</p>
<ul>
<li><p>使用 CLI 時透過 LDAP 登入</p></li>
<li><p>使用 Web UI 時使用 OIDC 登入</p></li>
<li><p>使用AppRole的使用者服務帳號</p></li>
</ul>

<p>保險櫃需要一種方法來識別這是<strong>同一個人</strong>並一致地應用策略。 </p>

<h3 id="kien-truc-identity"><strong>身分架構</strong></h3>

<前><代碼>┌────────────────────────────────────────────────┐
│ 實體 │
│ (Đại diện cho 1 người/machine duy nhất) │
│ │
│ ┌────────┐ ┌──────────┐ ┌────────┐ │
│ │ 別名 1 │ │ 別名 2 │ │ 別名 3 │ │
│ │ (LDAP) │ │ (OIDC) │ │(AppRole) │
│ └──────────┘ └──────────┘ └────────┘ │
│ │
│ 政策：[團隊領導，開發管理員] │
│ 元資料：{團隊：平台，等級：進階} │
│ │
│ 團體：[平台團隊，全工程師] │
└──────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-entities-va-aliases"><strong>2.實體與別名</strong></h2>

<h3 id="tao-entity"><strong>建立實體</strong></h3>

<pre><code class="language-bash"># Tạo 實體 thủ công
vault write identity/entity \
  名稱=“約翰多伊”\
  政策=「團隊領導」\
  元資料='{“團隊”：“平台”，“employee_id”：“EMP001”，“電子郵件”：“john@company.com”}'

# 實體
vault read identity/entity/name/john-doe

# Liệt kê 實體
vault list identity/entity/name
</code></pre>

<h3 id="tao-alias"><strong>建立別名</strong></h3><pre><code class="language-bash"># Lấy mount 存取器 cho auth 方法
vault auth list -format=json | jq -r '."ldap/".accessor'
# auth_ldap_abc123

vault auth list -format=json | jq -r '."oidc/".accessor'
# auth_oidc_def456

# Tạo 別名 cho LDAP
vault write identity/entity-alias \
  名稱=“約翰·多伊”\
  canonical_id="<實體 ID>" \
  mount_accessor =“auth_ldap_abc123”

# Tạo 別名 cho OIDC
vault write identity/entity-alias \
  名稱=“john.doe@company.com”\
  canonical_id="<實體 ID>" \
  mount_accessor =“auth_oidc_def456”
</code></pre>

<p>現在，當 john.doe 使用 LDAP 或 OIDC 登入時，Vault 會將其識別為相同實體並應用實體策略 + 群組策略。 </p>

<h3 id="entity-metadata"><strong>策略中的實體元資料</strong></h3>

<pre><code class="language-hcl"># 策略範本用於實體元數據
路徑「秘密/資料/團隊/{{identity.entity.metadata.team}}/*」{
  功能 = [「建立」、「讀取」、「更新」、「刪除」、「清單」]
}

# Dựa trên 實體名稱
路徑「秘密/資料/使用者/{{identity.entity.name}}/*」{
  功能 = [「建立」、「讀取」、「更新」、「刪除」、「清單」]
}
</code></pre>

<h2 id="3-groups"><strong>3.群組</strong></h2>

<h3 id="internal-groups"><strong>內部群組</strong></h3>

<p>內部群組在 Vault 內完全管理：</p>

<pre><code class="language-bash"># Tạo 內部組
vault write identity/group \
  名稱=“平台團隊”\
  類型=“內部”\
  策略 =“平台管理，kv 平台”\
  member_entity_ids =「實體ID-1，實體ID-2，實體ID-3」\
  元資料='{“部門”：“工程”，“cost_center”：“CC001”}'

# 他們是團體成員
vault write identity/group/name/platform-team \
  member_entity_ids =“實體ID-1，實體ID-2，實體ID-3，實體ID-4”

# 嵌套群組（子群組）
vault write identity/group \
  名稱=“所有工程師”\
  類型=“內部”\
  政策=“工程師基地”\
  member_group_ids="<平台團隊 ID>,<後端團隊 ID>,<前端團隊 ID>"
</code></pre>

<h3 id="external-groups"><strong>外部群組</strong></h3>

<p>外部群組從 LDAP/OIDC 群組對應到保險箱策略：</p>

<pre><code class="language-bash"># Tạo 外部群組
vault write identity/group \
  名稱=“ldap-devops”\
  類型=“外部”\
  政策=“devops-admin，kv-devops”

# 透過組別別名映射 đến LDAP 群組
vault write identity/group-alias \
  name="CN=DevOps,OU=組,DC=公司,DC=com" \
  mount_accessor =“auth_ldap_abc123”\
  canonical_id="<外部組 ID>"

# 圖 đến OIDC 集團
vault write identity/group-alias \
  名稱=“devops”\
  mount_accessor =“auth_oidc_def456”\
  canonical_id="<外部組 ID>"
</code></pre>

<h2 id="4-identity-tokens"><strong>4.身分識別令牌（OIDC 提供者）</strong></h2>

<p>Vault 可以充當 <strong>OIDC 提供者</strong> - 根據身分實體發行 OIDC 代幣：</p>

<pre><code class="language-bash"># Tạo 賦值（ai được phát 標記）
vault write identity/oidc/assignment/dev-team \
  Entity_ids=“實體ID-1，實體ID-2”\
  group_ids =“群組ID-1”

# Tạo key cho 簽名
vault write identity/oidc/key/app-key \
  演算法=“RS256”\
  allowed_client_ids =“*”\
  旋轉週期=“24小時”

# Tạo OIDC 用戶端
vault write identity/oidc/client/my-webapp \
  redirect_uris="https://myapp.company.com/callback" \
  分配=“開發團隊”\
  鍵=“應用程式鍵”\
  id_token_ttl =“30m”\
  access_token_ttl =“1小時”

# Tạo OIDC 提供者
vault write identity/oidc/provider/company \
  發行人=“https://vault.company.com" \
  allowed_client_ids="<客戶端 ID>" \
  scopes_supported="openid、電子郵件、個人資料、群組"
</code></pre><h2 id="5-multi-factor-authentication"><strong>5.多重驗證（MFA）</strong></h2>

<p>Vault 支援 MFA 新增第二層身份驗證。 MFA 有兩種類型：</p>

<表>
<標題>
<tr><th>類型</th><th>描述</th><th>需要時</th></tr>
</標題>
<正文>
<tr><td><strong>登入 MFA</strong></td><td>登入時的 MFA 請求</td><td>所有登入請求</td></tr>
<tr><td><strong>升級 MFA</strong></td><td>針對敏感操作的 MFA 請求</td><td>特定路徑/操作</td></tr>
</tbody>
</表>

<h3 id="totp-mfa"><strong>TOTP MFA</strong></h3>

<pre><code class="language-bash"># Tạo TOTP MFA 方法
vault write identity/mfa/method/totp \
  method_name="company-totp" \
  發行者=“VaultCompany”\
  週期=30 \
  鍵大小=20 \
  數字=6 \
  算法=“SHA1”\
  qr_大小=200

# Lấy MFA 方法 ID
vault read identity/mfa/method/totp

# Tạo 登入 MFA 強制執行
vault write identity/mfa/login-enforcement/require-totp \
  mfa_method_ids="<totp-method-id>" \
  auth_method_types =“使用者密碼，ldap”\
  Identity_group_ids="<管理員群組 ID>"
</code></pre>

<h3 id="totp-self-enrollment"><strong>MFA TOTP 自行註冊（Vault 1.21）</strong></h3>

<p>Vault 1.21 中的新功能可讓使用者自行註冊 MFA TOTP：</p>

<pre><code class="language-bash"># 管理員：啟用自助註冊
vault write identity/mfa/method/totp \
  method_name="self-totp" \
  發行者=“CompanyVault”\
  允許_self_enrollment = true

# 使用者：登入 rồi 註冊 TOTP
# 1. 登入
vault login -method=userpass username=john.doe

# 2. 產生 TOTP 秘密（trả về QR 碼 URL）
vault write identity/mfa/method/totp/admin-generate \
  method_id="<totp-method-id>" \
  Entity_id="<我的實體ID>"

# 3.Quét QR code bằng app (Google Authenticator, Authy)
# 4. 登入 lần tiếp theo sẽ yêu cầu TOTP 代碼
</code></pre>

<h3 id="duo-mfa"><strong>Duo MFA</strong></h3>

<pre><code class="language-bash"># Cấu hình Duo MFA
vault write identity/mfa/method/duo \
  method_name="company-duo" \
  Secret_key="<雙組秘密金鑰>" \
  integration_key="<duo-integration-key>" \
  api_hostname="api-xxxxxxxx.duosecurity.com" \
  Push_info="保管庫登入"

# 執行cho管理群組
vault write identity/mfa/login-enforcement/admin-duo \
  mfa_method_ids="<duo-method-id>" \
  Identity_group_ids="<管理員群組 ID>"
</code></pre>

<h2 id="6-mfa-login-flow"><strong>6. MFA 登入流程</strong></h2>

<pre><code>┌──────────┐ 1. 登入 ┌────────────┐
│ 使用者 │ ──────────────────▶ │ 保險庫 │
│ │ │ │
│ │ 2. 需要MFA │ │
│ │ (request_id) │ │
│ │ ◀──────────────────── │ │
│ │ │ │
│ │ 3.提交MFA代碼 │ │
│ │ + request_id │ │
│ │ ──────────────────▶ │ │
│ │ │ │
│ │ 4. Vault 代幣 │ │
│ │ ◀──────────────────── │ │
└──────────┘ └──────────────┘
</code></pre>

<pre><code class="language-bash"># 步驟 1：登入（trả về mfa_request_id nếu MFA required）
vault login -method=userpass username=john.doe
# 輸入方法「company-totp」的 MFA 代碼：

# 第 2 步：輸入 TOTP 代碼
#123456# API流程
# 登入 → nhận mfa_request_id
curl -s --request POST \
  --data '{"密碼": "p@ss"}' \
  ${VAULT_ADDR}/v1/auth/userpass/login/john.doe

# 驗證 MFA
curl -s --request POST \
  --數據'{
    "mfa_request_id": "...",
    “mfa_payload”：{
      “<totp-method-id>”：[“123456”]
    }
  }' \
  ${VAULT_ADDR}/v1/sys/mfa/validate
</code></pre>

<h2 id="7-tong-ket"><strong>7.摘要</strong></h2>

<ul>
<li><p><strong>身分引擎</strong> - 將多個身分驗證身分合併到一個實體中</p></li>
<li><p><strong>實體 + 別名</strong> - 跨 LDAP、OIDC、AppRole 映射使用者</p></li>
<li><p><strong>群組</strong> - 內部（保管庫管理）與外部（LDAP/OIDC 組）</p></li>
<li><p><strong>身分令牌</strong> - 作為 OIDC 提供者的 Vault</p></li>
<li><p><strong>MFA</strong> — TOTP、Duo、登入 MFA 和升級 MFA</p></li>
<li><p><strong>TOTP 自行註冊</strong> (1.21) — 使用者自行註冊 MFA</p></li>
</ul>

<p>下一節將介紹進階 Secrets 引擎 - SSH、TOTP、Transform、KMIP 和自訂外掛程式。 </p>
