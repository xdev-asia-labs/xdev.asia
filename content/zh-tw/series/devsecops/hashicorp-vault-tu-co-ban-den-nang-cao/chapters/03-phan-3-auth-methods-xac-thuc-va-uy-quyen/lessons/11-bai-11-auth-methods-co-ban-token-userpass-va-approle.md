---
id: 019d8b30-b211-7001-c002-e0c5f8200111
title: 第 11 課：基本驗證方法 - 令牌、使用者密碼和 AppRole
slug: bai-11-auth-methods-co-ban-token-userpass-va-approle
description: >-
  驗證方法概述、令牌驗證方法（根令牌、建立令牌）、使用者密碼驗證方法（CRUD 使用者、密碼原則）、AppRole
  驗證方法（RoleID、SecretID、CIDR 綁定、secret_id_num_uses）、回應包裝 cho SecretID、AppRole
  最佳實務 cho CI/CD 管道。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 11
section_title: 第 3 部分：身份驗證方法 - 身份驗證和授權
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-6200" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-6200）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="795" cy="55" r="18" fill="#fb923c" opacity="0.1"/>
    <圓cx =“990”cy =“150”r =“23”填入=“#fb923c”不透明度=“0.05”/>
    <circle cx="685" cy="245" r="28" fill="#fb923c" opacity="0.1"/>
    <圓cx =“880”cy =“80”r =“33”填滿=“#fb923c”不透明度=“0.05”/>
    <circle cx="1075" cy="175" r="8" fill="#fb923c" opacity="0.1"/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“778”cy =“80”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“778”cy =“136”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“778”cy =“164”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“806”cy =“80”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“834”cy =“80”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“834”cy =“136”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“834”cy =“164”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“862”cy =“80”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“862”cy =“136”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“862”cy =“164”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#fb923c”不透明度=“0.15”/>
    <line x1 =“600”y1 =“185”x2 =“1100”y2 =“265”筆畫=“#fb923c”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“215”x2 =“1050”y2 =“285”筆畫=“#fb923c”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「969.6410161513776,115 969.6410161513776,155 935,175 900.3589838486224,155 900.358983589862486224,155 900.35898383862,01848. 935,95”填充=“無”筆畫=“#fb923c”筆畫寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#fb923c”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#fb923c”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 11 堂課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 11 課：基本驗證方法 - 令牌，</tspan>
<tspan x="60" dy="42">使用者密碼與應用程式角色</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：驗證方法 - 驗證與授權</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-auth-methods-overview"><strong>1.驗證方法概述</strong></h2>

<p><strong>驗證方法</strong>是 Vault 用於對客戶端進行身份驗證的機制 - 在允許存取機密之前確定「您是誰」。每個身份驗證方法都在單獨的路徑中啟用，並在成功身份驗證後返回<strong>Vault 令牌</strong>。 </p>

<h3 id="quy-trinh-xac-thuc"><strong>驗證過程</strong></h3>

<pre><code>┌──────────┐ 1. 登入請求 ┌──────────────┐
│ 用戶端 │ ────────────────────▶ │ 認證方式 │
│ │ │ (應用角色, │
│ │ 4. Vault 令牌 │ LDAP、K8s) │
│ │ ◀──────────────────── │ │
└──────────┘ └────────┬────────┘
                                             │
                                    2. 驗證身份
                                             │
                                    3. 映射到政策
                                             ▼
                                     ┌────────────┐
                                     │ 身分 │
                                     │ + 政策 │
                                     └────────────┘
</code></pre>

<h3 id="cac-loai-auth-methods"><strong>驗證方法類型</strong></h3>

<表>
<標題>
<tr><th>群組</th><th>身份驗證方法</th><th>物件</th></tr>
</標題>
<正文>
<tr><td>內建</td><td>令牌</td><td>所有客戶端</td></tr>
<tr><td>人類</td><td>使用者密碼、LDAP、OIDC</td><td>操作員、開發人員</td></tr>
<tr><td>機器</td><td>AppRole、JWT</td><td>CI/CD、應用程式</td></tr>
<tr><td>雲</td><td>AWS、Azure、GCP</td><td>雲工作負載</td></tr>
<tr><td>平台</td><td>Kubernetes、SPIFFE</td><td>容器工作負載</td></tr>
</tbody>
</表>

<h3 id="enable-auth-method"><strong>啟用驗證方法</strong></h3>

<pre><code class="language-bash"># 啟用 auth 方法 tại 預設路徑
vault auth enable userpass

# 啟用自訂路徑
vault auth enable -path=company-ldap ldap

# 使用 auth 方法啟用
vault auth list# 禁用身份驗證方法 (cẩn thận - xóa toàn bộ data)
vault auth disable userpass
</code></pre>

<h2 id="2-token-auth-method"><strong>2. Token認證方式</strong></h2>

<p>令牌驗證方法是唯一<strong>始終啟用的身份驗證方法</strong>且無法停用。所有其他身份驗證方法最終都會傳回 Vault 令牌。 Token是Vault的核心認證機制。 </p>

<h3 id="token-types"><strong>令牌類型</strong></h3>

<表>
<標題>
<tr><th>類型</th><th>儲存</th><th>可更新</th><th>子代幣</th><th>用例</th></tr>
</標題>
<正文>
<tr><td><strong>服務令牌</strong></td><td>是（儲存中）</td><td>是</td><td>是</td><td>長期操作</td></tr>
<tr><td><strong>批量令牌</strong></td><td>否</td><td>否</td><td>否</td><td>高容量、短暫</td></tr>
</tbody>
</表>

<h3 id="tao-token"><strong>建立令牌</strong></h3>

<pre><code class="language-bash"># Tạo token với 預設策略
vault token create

# Tạo 代幣 với 政策 cụ thể
vault token create \
  -policy =“應用程式只讀”\
  -policy="db-creds" \
  -ttl=1h \
  -顯示名稱=“應用程式服務”

# Tạo 孤兒代幣（không có 父代）
vault token create -orphan \
  -policy=「監控」\
  -ttl=24小時

# Tạo 批量令牌
vault token create \
  -類型=批次\
  -policy =“應用程式只讀”\
  -ttl=30m

# Tạo 週期性令牌 (không bao giờ expire nếu renew đúng hạn)
vault token create \
  -policy="長期運行服務" \
  -週期=24小時
</code></pre>

<h3 id="root-tokens"><strong>根令牌</strong></h3>

<p>根令牌可以存取整個保管庫。僅應在緊急情況下使用：</p>

<pre><code class="language-bash"># Tạo 根令牌 mới（cần 仲裁解封密鑰）
vault operator generate-root -init
vault operator generate-root \
  -隨機數字=“...”\
  -otp=“...”

# 撤銷根令牌 sau khi dùng xong
vault token revoke &lt;root-token&gt;
</code></pre>

<p><strong>最佳實務：</strong>不要儲存根令牌。需要時創建，使用後立即撤銷。 </p>

<h3 id="token-roles"><strong>令牌角色</strong></h3>

<pre><code class="language-bash"># Tạo 令牌角色 cho CI/CD
vault write auth/token/roles/ci-cd \
  allowed_policies="ci-deploy,ci-readonly" \
  disallowed_policies =“管理員，根”\
  孤兒=真\
  可再生=真\
  token_period=1h \
  token_type=服務\
  token_bound_cidrs="10.0.0.0/8"

# Tạo 代幣 từ 角色
vault token create -role=ci-cd
</code></pre>

<h3 id="token-accessors"><strong>令牌存取器</strong></h3>

<p>令牌存取器允許在不知道令牌值的情況下進行令牌管理：</p>

<pre><code class="language-bash"># 尋找令牌 bằng 存取器
vault token lookup -accessor &lt;accessor&gt;

# 撤銷令牌 bằng 存取器
vault token revoke -accessor &lt;accessor&gt;

# 標記存取器
vault list auth/token/accessors
</code></pre>

<h2 id="3-userpass-auth-method"><strong>3.使用者密碼驗證方法</strong></h2>

<p><strong>Userpass</strong> 是人類使用者最簡單的驗證方法 - 使用使用者名稱和密碼進行驗證。適合小型環境或測試。 </p>

<h3 id="enable-va-cau-hinh-userpass"><strong>啟用並設定</strong></h3>

<pre><code class="language-bash"># 啟用使用者密碼
vault auth enable userpass

# Tạo 用戶 với 政策
vault write auth/userpass/users/john.doe \
  密碼=“s3cur3P@ssw0rd”\
  策略=“dev-readonly，dev-kv”\
  token_ttl=8h \
  token_max_ttl=24小時# Tạo 用戶 với CIDR 綁定
vault write auth/userpass/users/admin.user \
  密碼=“adm1nP@ss”\
  保單=“管理員”\
  token_ttl=2h \
  token_bound_cidrs="10.10.0.0/16,192.168.1.0/24"

# Liệt kê 用戶
vault list auth/userpass/users

# Đọc thông 錫用戶
vault read auth/userpass/users/john.doe
</code></pre>

<h3 id="login-userpass"><strong>登入</strong></h3>

<pre><code class="language-bash"># 透過 CLI 登入
vault login -method=userpass \
  使用者名稱=john.doe \
  密碼=“s3cur3P@ssw0rd”

# 使用 API 登入
curl -s --request POST \
  --data '{"密碼": "s3cur3P@ssw0rd"}' \
  ${VAULT_ADDR}/v1/auth/userpass/login/john.doe | ${VAULT_ADDR}/v1/auth/userpass/login/john.doe | jq .
</code></pre>

<h3 id="password-policies"><strong>密碼原則</strong></h3>

<p>Vault 1.5+ 支援密碼原則以強制密碼複雜度：</p>

<pre><code class="language-bash"># Tạo 密碼原則
vault write sys/policies/password/strong-password policy=-&lt;&lt;EOF
長度=20
規則“字符集”{
  字符集 =“abcdefghijklmnopqrstuvwxyz”
  最小字元數 = 2
}
規則“字符集”{
  字符集 =“ABCDEFGHIJKLMNOPQRSTUVWXYZ”
  最小字元數 = 2
}
規則“字符集”{
  字符集=“0123456789”
  最小字元數 = 2
}
規則“字符集”{
  字元集 = "!@#$%^&*()-_=+[]{}|;:,.<>?"
  最小字元數 = 2
}
EOF

# Sinh 密碼 theo 策略
vault read sys/policies/password/strong-password/generate

# 設定密碼原則 cho userpass
vault write auth/userpass/users/secure.user \
  密碼=“$（保管庫讀取-欄位=密碼sys /政策/密碼/強密碼/產生）”\
  政策=“開發唯讀”
</code></pre>

<h3 id="cap-nhat-va-xoa-user"><strong>更新與刪除使用者</strong></h3>

<pre><code class="language-bash"># Cập nhật 密碼
vault write auth/userpass/users/john.doe \
  密碼=“n3wP@ssw0rd！”

# Cập nhật 政策（không thay đổi 密碼）
vault write auth/userpass/users/john.doe/policies \
  策略 =“dev-readonly、dev-kv、staging-deploy”

# Xóa 用戶
vault delete auth/userpass/users/john.doe
</code></pre>

<h2 id="4-approle-auth-method"><strong>4. AppRole驗證方法</strong></h2>

<p><strong>AppRole</strong> 是為<strong>機器對機器驗證</strong>設計的驗證方法。這是應用程式和 CI/CD 管道使用 Vault 進行身份驗證的最常見方法。 </p>

<h3 id="khai-niem-approle"><strong>Khái niệm cốt lõi</strong></h3>

<預><代號>┌──────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ 應用角色登入 │
│ │
│ RoleID（公共識別碼） │
│ + SecretID (私人憑證) │
│ = Vault 令牌（具有指定的策略） │
│ │
│ Tương tự: 使用者名稱 + 密碼 = 會話令牌 │
└──────────────────────────────────────────────────────────┘
</code></pre>

<表>
<標題>
<tr><th>元素</th><th>描述</th><th>相似</th></tr>
</標題>
<正文>
<tr><td><strong>角色ID</strong></td><td>角色公共識別碼</td><td>使用者名稱</td></tr>
<tr><td><strong>SecretID</strong></td><td>秘密憑證，短期</td><td>密碼</td></tr>
</tbody>
</表>

<h3 id="enable-va-tao-role"><strong>啟用並建立角色</strong></h3>

<pre><code class="language-bash"># 啟用 AppRole
vault auth enable approle

# Tạo 角色 cho Web 應用程式
vault write auth/approle/role/webapp \
  token_policies =“webapp-policy，db-readonly”\
  token_ttl=1h \
  token_max_ttl=4h \
  Secret_id_ttl=30m \
  Secret_id_num_uses=1 \
  token_num_uses=0 \
  bind_secret_id=true# 在 CI/CD 管道中發揮作用
vault write auth/approle/role/cicd-pipeline \
  token_policies="cicd-deploy" \
  token_ttl=30m \
  token_max_ttl=1h \
  Secret_id_ttl=10m \
  Secret_id_num_uses=1 \
  token_num_uses=10 \
  bind_secret_id=true \
  Secret_id_bound_cidrs="10.0.0.0/8" \
  token_bound_cidrs="10.0.0.0/8"
</code></pre>

<h3 id="approle-parameters"><strong>重要參數</strong></h3>

<表>
<標題>
<tr><th>參數</th><th>描述</th><th>建議</th></tr>
</標題>
<正文>
<tr><td><code>secret_id_ttl</code></td><td>SecretID的TTL</td><td>越短越好（5-30m）</td></tr>
<tr><td><code>secret_id_num_uses</code></td><td>SecretID使用次數</td><td>1（一次性使用）</td></tr>
<tr><td><code>token_ttl</code></td><td>Token預設TTL</td><td>足以運行</td></tr>
<tr><td><code>token_max_ttl</code></td><td>最大 TTL（包括續訂）</td><td>合理限制</td></tr>
<tr><td><code>token_num_uses</code></td><td>令牌使用次數</td><td>0 = 無限制</td></tr>
<tr><td><code>secret_id_bound_cidrs</code></td><td>CIDR允許使用SecretID</td><td>透過網路限制</td></tr>
<tr><td><code>token_bound_cidrs</code></td><td>CIDR允許使用令牌</td><td>透過網路限制</td></tr>
</tbody>
</表>

<h3 id="login-approle"><strong>登入流程</strong></h3>

<pre><code class="language-bash"># Bước 1: Lấy RoleID（thường được 烘焙 vào 配置/影像）
vault read auth/approle/role/webapp/role-id
# 角色_id db02de05-fa39-4855-059b-67f86261c393

# Bước 2：Sinh SecretID（thường do Trusted Orchestrator Sinh）
vault write -f auth/approle/role/webapp/secret-id
#secret_id 6a174c20-f6de-a53c-74d2-6018fcceff64
#secret_id_accessor c454f7e5-996e-7230-6074-6ef26b7bcf86

# Bước 3：登入
vault write auth/approle/login \
  role_id="db02de05-fa39-4855-059b-67f86261c393" \
  Secret_id =“6a174c20-f6de-a53c-74d2-6018fcceff64”
</code></pre>

<h3 id="response-wrapping"><strong>回應包裝 cho SecretID</strong></h3>

<p>回應包裝是一種重要的安全機制－SecretID被「包裝」在短期包裝令牌中。只有目標應用程式可以解包：</p>

<pre><code class="language-bash"># Sinh SecretID với 回應包裝 (TTL 120 giây)
vault write -wrap-ttl=120s -f auth/approle/role/webapp/secret-id

# 回應 chứawrapping_token thay vìsecret_id trực tiếp
#wrapping_token：hvs.CAES...
# 包裝訪問器：...
#wrapping_token_ttl：2m
#wrapping_token_creation_time: ...

# 應用程式解開包裝並使用 SecretID
vault unwrap hvs.CAES...
#secret_id 6a174c20-f6de-a53c-74d2-6018fcceff64

# Nếu ai đó đã unwrap trước → lỗi (phát hiện MITM)
vault unwrap hvs.CAES...
# 錯誤：包裝令牌無效或不存在
</code></pre>

<h3 id="phat-hien-tan-cong"><strong>攻擊偵測</strong></h3>

<p>如果包裝令牌在應用程式之前被攻擊者解開：</p>
<ul>
<li><p>應用程式在解開包裝時將收到錯誤 → <strong>立即發出警報</strong></p></li>
<li><p>檢查審核日誌以尋找攻擊者的來源IP</p></li>
<li><p>撤銷角色並重新頒發憑證</p></li>
</ul>

<h2 id="5-approle-cicd"><strong>5. AppRole 最佳實務 cho CI/CD</strong></h2>

<h3 id="github-actions"><strong>GitHub 操作</strong></h3><pre><code class="language-yaml"># .github/workflows/deploy.yml
名稱：使用 Vault 進行部署
於：
  推：
    分支：[主要]

職位：
  部署：
    運行：ubuntu-latest
    步驟：
      - 使用：actions/checkout@v4

      - 姓名：從 Vault 匯入機密
        使用：hashicorp/vault-action@v3
        與：
          網址：https://vault.company.com
          方法：應用程式
          角色ID：${{secrets.VAULT_ROLE_ID}}
          秘密ID：${{秘密.VAULT_SECRET_ID}}
          秘密： |
            秘密/資料/生產/資料庫使用者名稱| DB_使用者名稱;
            秘密/資料/生產/資料庫密碼 |資料庫密碼；
            秘密/資料/生產/api 金鑰 | API_KEY

      - 名稱：部署應用程式
        運行： |
          echo“正在使用秘密進行部署...”
          ./部署.sh
        環境：
          DB_USERNAME：${{ env.DB_USERNAME }}
          DB_PASSWORD: ${{ env.DB_PASSWORD }}
</code></pre>

<h3 id="gitlab-ci"><strong>GitLab CI</strong></h3>

<pre><code class="language-yaml"># .gitlab-ci.yml
階段：
  - 部署

部署生產：
  階段：部署
  圖片：hashicorp/vault：1.21
  變數：
    VAULT_ADDR：「https://vault.company.com"
  腳本：
    - |
      # 登入 AppRole
      VAULT_TOKEN=$(vault write -field=token auth/approle/login \
        role_id="${VAULT_ROLE_ID}" \
        Secret_id="${VAULT_SECRET_ID}")
      匯出 VAULT_TOKEN

      #Lấy的秘密
      DB_PASSWORD=$(vault kv get -field=密碼秘密/生產/db)
      匯出資料庫密碼

      # 部署
      ./部署.sh
  僅：
    - 主要
</code></pre>

<h3 id="jenkins"><strong>Jenkins 管道</strong></h3>

<pre><code class="language-groovy">// Jenkinsfile
管道{
    代理任何

    環境{
        VAULT_ADDR = 'https://vault.company.com'
    }

    階段{
        階段（'獲取秘密'）{
            步驟{
                withVault(
                    配置：[
                        保險庫網址：“${VAULT_ADDR}”，
                        VaultCredentialId：'vault-approle'
                    ],
                    金庫秘密：[
                        [
                            路徑：'秘密/生產/資料庫'，
                            秘密值：[
                                [envVar: 'DB_USER',VaultKey: '使用者名稱'],
                                [envVar：'DB_PASS'，vaultKey：'密碼']
                            ]
                        ]
                    ]
                ）{
                    sh './deploy.sh'
                }
            }
        }
    }
}
</code></pre>

<h2 id="6-approle-deployment-pattern"><strong>6. AppRole部署模式</strong></h2>

<h3 id="trusted-orchestrator"><strong>可信任協調器模式</strong></h3><前><代碼>┌────────────┐ ┌──────────────┐
│ Terraform/ │ 1.Sinh SecretID │ Vault │
│ Ansible │ ────────────────▶│ │
│ (編曲)│◀──────────────────│ │
│ │ 2. 包裝代幣 │ │
└──────┬────────┘ └──────────────┘
       │
       │ 3. 交付包裝好的代幣
       ▼
┌────────────┐ ┐──────────────┐
│ 應用 │ 4. 拆封 → │ Vault │
│ │ 秘密ID │ │
│ │ 5. 登入 │ │
│ │ (角色ID + │ │
│ │ SecretID) │ │
│ │ 6. Vault 代幣 │ │
└──────────────┘ └──────────────┘
</code></pre>

<ol>
<li><p><strong>RoleID</strong> 已融入 AMI/Docker 映像或設定管理</p></li>
<li><p><strong>SecretID</strong> 由可信任編排器（Terraform、Ansible、CI/CD）產生</p></li>
<li><p>為了安全起見，SecretID 作為<strong>包裝令牌</strong>提供</p></li>
<li><p>應用程式解包以取得 SecretID，然後使用 RoleID + SecretID 登入</p></li>
</ol>

<h3 id="pull-vs-push"><strong>拉取與推播模型</strong></h3>

<表>
<標題>
<tr><th>模型</th><th>運作方式</th><th>優點</th><th>缺點</th></tr>
</標題>
<正文>
<tr><td><strong>拉取</strong></td><td>應用程式自行登入Vault，取得機密</td><td>應用控制生命週期</td><td>應用程式需要了解Vault</td></tr>
<tr><td><strong>推送</strong></td><td>Orchestrator 將機密注入應用程式</td><td>應用程式不需要知道 Vault</td><td>env/file 中的機密</td></tr>
</tbody>
</表>

<h2 id="7-bao-mat-auth-methods"><strong>7.安全認證方法</strong></h2>

<h3 id="common-mistakes"><strong>常見錯誤</strong></h3>

<ul>
<li><p>❌在應用程式中使用根令牌</p></li>
<li><p>❌ SecretID TTL 太長或無限使用</p></li>
<li><p>❌不要為AppRole設定CIDR綁定</p></li>
<li><p>❌硬編碼 RoleID + SecretID 原始碼</p></li>
<li><p>❌使用使用者密碼進行機器驗證</p></li>
</ul>

<h3 id="best-practices-tong-hop"><strong>最佳實務總結</strong></h3>

<ul>
<li><p>✅ SecretID：<code>num_uses=1</code>，<code>ttl=5m-30m</code></p></li>
<li><p>✅ 始終對 SecretID 使用回應包裝</p></li>
<li><p>✅ 設定 <code>secret_id_bound_cidrs</code> 和 <code>token_bound_cidrs</code></p></li>
<li><p>✅ 每個應用程式/服務都有自己的角色</p></li>
<li><p>✅ 使用後撤銷根令牌</p></li>
<li><p>✅ 啟用審核日誌記錄以追蹤所有驗證</p></li>
</ul>

<h2 id="8-tong-ket"><strong>8。摘要</strong></h2>

<p>在本文中，我們學習了 Vault 的 3 種最基本的身份驗證方法：</p>

<ul>
<li><p><strong>Token Auth</strong> — 平台認證方法，每個認證方法都會產生令牌</p></li>
<li><p><strong>使用者密碼驗證</strong> - 對於人類使用者來說很簡單，支援密碼策略</p></li>
<li><p><strong>AppRole Auth</strong> — 機器驗證標準，支援 CI/CD 工作流程</p></li>
</ul><p>有回應包裝的 AppRole 是 CI/CD 管道最推薦的模式。在下一篇文章中，我們將了解 LDAP、OIDC 和 JWT 身份驗證方法 - 用於人和機器身份的企業身份驗證方法。 </p>
