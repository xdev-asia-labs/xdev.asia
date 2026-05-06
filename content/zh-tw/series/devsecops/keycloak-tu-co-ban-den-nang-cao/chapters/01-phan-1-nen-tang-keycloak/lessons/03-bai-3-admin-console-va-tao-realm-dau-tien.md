---
id: 019d8b30-b103-7001-c001-e0c5f8100103
title: 第 3 課：管理控制台和建立第一個領域
slug: bai-3-admin-console-va-tao-realm-dau-tien
description: 熟悉管理控制台、建立第一個管理員使用者、建立和設定領域、領域設定（常規、登入、電子郵件、主題、在地化、金鑰、安全防禦）、管理 CLI (kcadm.sh) 和基本管理 REST API。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 第 1 部分：Keycloak 平台
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-388" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-388)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1001" cy="213" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="902" cy="274" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="803" cy="75" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="704" cy="136" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="605" cy="197" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="223" x2="1100" y2="303" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="253" x2="1050" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.9089653438086,154 1005.9089653438086,192 973,211 940.0910346561914,192 940.0910346561914,154 973,135" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：管理控制台和建立第一個領域</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">鑰匙斗篷從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Keycloak 平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-truy-cap-admin-console"><strong>1. 存取管理控制台</strong></h2>

<p>安裝Keycloak（單機或Docker）後，即可存取<strong>管理控制台</strong>— 整個 Keycloak 系統的集中管理介面。</p>

<h3 id="url-truy-cap"><strong>造訪網址</strong></h3>
<p>預設情況下，管理控制台位於：</p>
<pre><code>http://localhost:8080/admin</code></pre>

<p>如果您使用具有不同連接埠對映的 Docker 執行 Keycloak：</p>
<pre><code>http://localhost:&lt;PORT&gt;/admin</code></pre>

<h3 id="tao-admin-user-dau-tien"><strong>建立第一個管理員用戶</strong></h3>
<p>當你第一次造訪Keycloak時，你需要創建一個<strong>初始管理員用戶</strong>登入管理控制台。有兩種方法：</p>

<p><strong>方法一：透過環境變數（建議用於Docker/Production）</strong></p>
<pre><code>docker run -d --name keycloak \
  -e KC_BOOTSTRAP_ADMIN_USERNAME=admin \
  -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin \
  -p 8080:8080 \
  quay.io/keycloak/keycloak:26.2.4 start-dev</code></pre>

<p><strong>方法2：透過歡迎頁面（僅從本地主機造訪時）</strong></p>
<p>使用權<code>http://localhost:8080</code>，您將看到管理員使用者建立表單。輸入使用者名稱和密碼，然後按一下<strong>創造</strong>.</p>

<p><strong>方法3：透過命令列</strong></p>
<pre><code># Standalone
export KC_BOOTSTRAP_ADMIN_USERNAME=admin
export KC_BOOTSTRAP_ADMIN_PASSWORD=admin
bin/kc.sh start-dev</code></pre>

<h3 id="giao-dien-admin-console"><strong>管理控制台介面</strong></h3>
<p>登入後，您將看到管理控制台介面，其主要元件如下：</p>
<ul>
<li><p><strong>領域選擇器</strong>（左上角）— 選擇您正在管理的領域</p></li>
<li><p><strong>左側邊欄</strong>— 主導航選單：用戶端、用戶端範圍、領域角色、使用者、群組、會話、事件、領域設定、身份驗證、身分提供者、使用者聯合</p></li>
<li><p><strong>主要內容區</strong>— 顯示所選項目的詳細內容</p></li>
<li><p><strong>用戶下拉選單</strong>(右上角) — 管理管理員帳戶，退出</p></li>
</ul>

<h2 id="2-tao-realm-dau-tien"><strong>2.建立第一個Realm</strong></h2>

<h3 id="master-realm-va-custom-realm"><strong>主域與自訂域</strong></h3>
<p>安裝Keycloak時，領域有一個名稱<strong>掌握。掌握</strong>預製的。主域是一個特殊的域，用來管理其他域—<strong>主領域不應用於應用程式</strong>.</p>

<p>最佳實踐：</p>
<ul>
<li><p>使用<strong>大師境界</strong>僅超級管理員可以管理Keycloak系統</p></li>
<li><p>創造<strong>自訂領域</strong>特定於每個組織、專案或環境</p></li>
<li><p>命名realm的含義是：<code>我的公司開發</code>, <code>mycompany 分期</code>, <code>我的公司產品</code></p></li>
</ul>

<h3 id="tao-realm-qua-admin-console"><strong>透過管理控制台創建領域</strong></h3>
<ol>
<li><p>點選<strong>領域選擇器</strong>（左上角的下拉式選單，顯示“master”）</p></li>
<li><p>點選<strong>創建領域</strong></p></li>
<li><p>輸入資訊：</p>
<ul>
<li><strong>領域名稱</strong>: <code>我的公司</code>（僅含小寫字母、數字、連字號）</li>
<li><strong>啟用</strong>： 在</li>
</ul>
</li>
<li><p>點選<strong>創造</strong></p></li>
</ol>

<h3 id="tao-realm-tu-json"><strong>從 JSON 檔案建立 Realm</strong></h3>
<p>您可以從 JSON 檔案匯入領域 - 對於在環境之間複製配置很有用：</p>
<pre><code>{
  "realm": "my-company",
  "enabled": true,
  "displayName": "My Company",
  "displayNameHtml": "&lt;strong&gt;My Company&lt;/strong&gt;",
  "sslRequired": "external",
  "registrationAllowed": false,
  "loginWithEmailAllowed": true,
  "duplicateEmailsAllowed": false,
  "resetPasswordAllowed": true,
  "editUsernameAllowed": false,
  "bruteForceProtected": true,
  "permanentLockout": false,
  "maxFailureWaitSeconds": 900,
  "minimumQuickLoginWaitSeconds": 60,
  "waitIncrementSeconds": 60,
  "quickLoginCheckMilliSeconds": 1000,
  "maxDeltaTimeSeconds": 43200,
  "failureFactor": 5,
  "defaultSignatureAlgorithm": "RS256",
  "accessTokenLifespan": 300,
  "ssoSessionIdleTimeout": 1800,
  "ssoSessionMaxLifespan": 36000
}</code></pre>

<p>透過管理控制台匯入：建立領域時，按一下<strong>瀏覽</strong>選擇 JSON 檔案。</p>

<h2 id="3-realm-settings"><strong>3.領域設置詳細信息</strong></h2>

<p>創建realm後，訪問<strong>領域設定</strong>從側邊欄了解詳細配置。</p>

<h3 id="general-tab"><strong>3.1 常規選項卡</strong></h3>
<table>
<thead>
<tr><th>環境</th><th>描述</th><th>建議值</th></tr>
</thead>
<tbody>
<tr><td>顯示名稱</td><td>登入頁面顯示的名稱</td><td>公司/專案名稱</td></tr>
<tr><td>HTML 顯示名稱</td><td>HTML 對顯示名稱的支持</td><td>標誌+名稱</td></tr>
<tr><td>前端網址</td><td>用戶端用於連​​線的 URL</td><td>https://auth.mycompany.com</td></tr>
<tr><td>需要 SSL</td><td>請求需要 SSL</td><td><code>外部的</code>（開發）/<code>全部</code>（產品）</td></tr>
<tr><td>用戶管理的訪問</td><td>允許使用者管理資源 (UMA)</td><td>關閉（除非需要 UMA）</td></tr>
<tr><td>ACR 到 LoA 映射</td><td>映射身份驗證上下文類別參考</td><td>需要升級身份驗證時進行配置</td></tr>
</tbody>
</table>

<h3 id="login-tab"><strong>3.2 登入選項卡</strong></h3>
<p>配置登入頁面的行為：</p>
<table>
<thead>
<tr><th>環境</th><th>描述</th><th>預設</th></tr>
</thead>
<tbody>
<tr><td>用戶註冊</td><td>允許新帳戶註冊</td><td>離開</td></tr>
<tr><td>忘記密碼</td><td>顯示連結“忘記密碼”</td><td>離開</td></tr>
<tr><td>記住帳號</td><td>複選框“記住登入”</td><td>離開</td></tr>
<tr><td>電子郵件作為使用者名稱</td><td>使用電子郵件作為使用者名稱</td><td>離開</td></tr>
<tr><td>使用電子郵件登入</td><td>允許透過電子郵件登入</td><td>在</td></tr>
<tr><td>重複的電子郵件</td><td>允許重複的電子郵件</td><td>離開</td></tr>
<tr><td>驗證電子郵件</td><td>需要電子郵件驗證</td><td>離開</td></tr>
<tr><td>編輯使用者名稱</td><td>允許更改使用者名稱</td><td>離開</td></tr>
</tbody>
</table>

<p><strong>生產建議：</strong></p>
<pre><code>User registration: OFF (hoặc ON với reCAPTCHA)
Forgot password: ON
Remember me: ON
Email as username: Tùy yêu cầu
Login with email: ON
Verify email: ON
Edit username: OFF</code></pre>

<h3 id="email-tab"><strong>3.3 電子郵件選項卡</strong></h3>
<p>設定 SMTP 伺服器發送電子郵件（驗證、密碼重設、通知）：</p>
<table>
<thead>
<tr><th>環境</th><th>描述</th></tr>
</thead>
<tbody>
<tr><td>從</td><td>發送電子郵件地址（例如noreply@mycompany.com）</td></tr>
<tr><td>來自顯示名稱</td><td>電子郵件中顯示的姓名</td></tr>
<tr><td>大聲回覆</td><td>回覆地址（例如 support@mycompany.com）</td></tr>
<tr><td>主持人</td><td>SMTP 伺服器主機名</td></tr>
<tr><td>港口</td><td>SMTP 連接埠（STARTTLS 為 587，SSL 為 465）</td></tr>
<tr><td>加密</td><td>啟用 SSL 或 STARTTLS</td></tr>
<tr><td>驗證</td><td>SMTP 的使用者名稱和密碼</td></tr>
</tbody>
</table>

<p>Gmail SMTP 的設定範例：</p>
<pre><code>Host: smtp.gmail.com
Port: 587
From: noreply@mycompany.com
Enable StartTLS: ON
Authentication: ON
Username: your-email@gmail.com
Password: app-specific-password</code></pre>

<h3 id="themes-tab"><strong>3.4 主題選項卡</strong></h3>
<p>自訂不同頁面的外觀：</p>
<ul>
<li><p><strong>登入主題</strong>— 登入、註冊、密碼重設頁面</p></li>
<li><p><strong>帳戶主題</strong>— 使用者的帳戶管理頁面</p></li>
<li><p><strong>管理控制台主題</strong>— 管理控制台介面</p></li>
<li><p><strong>電子郵件主題</strong>— 電子郵件模板</p></li>
</ul>

<p>Keycloak提供主題<code>鑰匙斗篷</code>（預設）和<code>鑰匙斗篷.v2</code>（帳戶控制台 v3，基於 React）。您可以建立自訂主題 - 這將在下一篇文章中介紹。</p>

<h3 id="localization-tab"><strong>3.5 本地化選項卡</strong></h3>
<p>登入、帳戶、電子郵件頁面的多語言支援：</p>
<ol>
<li><p>打開<strong>國際化</strong>： 在</p></li>
<li><p>選擇<strong>支援的語言環境</strong>：en、vi、ja、zh-CN、...</p></li>
<li><p>選擇<strong>預設區域設定</strong>: vi (預設越南語介面)</p></li>
<li><p>如果需要，為每個區域設定自訂訊息包</p></li>
</ol>

<h3 id="keys-tab"><strong>3.6 選項卡鍵</strong></h3>
<p>管理領域的加密金鑰－用於簽署和加密令牌：</p>
<ul>
<li><p><strong>活動鍵</strong>- 密鑰用於簽署令牌</p></li>
<li><p><strong>被動按鍵</strong>— 舊金鑰仍用於驗證先前簽署的令牌</p></li>
<li><p><strong>停用按鍵</strong>— 鑰匙不再使用</p></li>
</ul>

<p>預設密鑰提供者：</p>
<table>
<thead>
<tr><th>提供者</th><th>演算法</th><th>目的</th></tr>
</thead>
<tbody>
<tr><td>rsa 產生的</td><td>RS256</td><td>簽署 JWT 令牌</td></tr>
<tr><td>RSA-enc-生成</td><td>RSA-OAEP</td><td>加密令牌</td></tr>
<tr><td>hmac 產生的</td><td>HS512</td><td>HMAC 簽名</td></tr>
<tr><td>aes 產生的</td><td>AES</td><td>對稱加密</td></tr>
<tr><td>ecdsa 產生的</td><td>ES256</td><td>橢圓曲線簽名</td></tr>
</tbody>
</table>

<p><strong>密鑰輪換：</strong>新增新的金鑰提供者→新金鑰變成主動→舊金鑰變成被動→一段時間後停用舊金鑰。</p>

<h3 id="tokens-tab"><strong>3.7 代幣選項卡</strong></h3>
<p>配置令牌的生命週期和行為：</p>
<table>
<thead>
<tr><th>環境</th><th>描述</th><th>建議值</th></tr>
</thead>
<tbody>
<tr><td>預設簽名演算法</td><td>JWT 簽章演算法</td><td>RS256</td></tr>
<tr><td>撤銷刷新令牌</td><td>使用後撤銷刷新令牌</td><td>開（生產）</td></tr>
<tr><td>SSO 會話空閒</td><td>最大會話空閒時間</td><td>30分鐘</td></tr>
<tr><td>SSO 最大會話數</td><td>最大會話時間</td><td>10點</td></tr>
<tr><td>訪問令牌的有效期</td><td>訪問令牌的生命週期</td><td>5分鐘</td></tr>
<tr><td>客戶端登入逾時</td><td>登入流程最長時間</td><td>5分鐘</td></tr>
</tbody>
</table>

<h3 id="security-defenses-tab"><strong>3.8 安全防禦選項卡</strong></h3>
<p>領域的安全配置：</p>

<p><strong>標題：</strong></p>
<table>
<thead>
<tr><th>標頭</th><th>預設值</th><th>描述</th></tr>
</thead>
<tbody>
<tr><td>X 框架選項</td><td>同源</td><td>防點擊劫持</td></tr>
<tr><td>內容安全策略</td><td>框架-src'自我'； ...</td><td>CSP頭</td></tr>
<tr><td>X-內容類型選項</td><td>不聞</td><td>防止 MIME 嗅探</td></tr>
<tr><td>X-XSS-保護</td><td>1;模式=區塊</td><td>XSS過濾器</td></tr>
<tr><td>嚴格的運輸安全</td><td>最大年齡=31536000</td><td>需要 HTTPS</td></tr>
<tr><td>推薦人政策</td><td>無推薦人</td><td>控制 Referrer 標頭</td></tr>
</tbody>
</table>

<p><strong>暴力檢測：</strong></p>
<ul>
<li><p><strong>啟用</strong>：ON（開啟防暴力破解）</p></li>
<li><p><strong>永久停工</strong>：關閉（到時間後自動解鎖）</p></li>
<li><p><strong>最大登入失敗次數</strong>：5（5次登入失敗後將被鎖定）</p></li>
<li><p><strong>等待增量</strong>：60秒（等待時間逐漸增加）</p></li>
<li><p><strong>最長等待時間</strong>：900秒（最長等待時間15分鐘）</p></li>
<li><p><strong>快速登入檢查</strong>：1000毫秒（偵測到登入速度太快）</p></li>
</ul>

<h2 id="4-admin-cli"><strong>4. 管理 CLI (kcadm.sh)</strong></h2>

<p>鑰匙斗篷提供<strong>管理CLI</strong> (<code>kcadm.sh</code>) — 無需存取管理控制台即可管理 Keycloak 的命令列工具。</p>

<h3 id="cau-hinh-credentials"><strong>4.1 配置憑證</strong></h3>
<p>在使用Admin CLI之前，您需要登入：</p>
<pre><code># Đăng nhập vào Keycloak server
bin/kcadm.sh config credentials \
  --server http://localhost:8080 \
  --realm master \
  --user admin \
  --password admin

# Với Docker
docker exec -it keycloak /opt/keycloak/bin/kcadm.sh config credentials \
  --server http://localhost:8080 \
  --realm master \
  --user admin \
  --password admin</code></pre>

<p><strong>安全說明：</strong>在生產、使用<code>- 客戶</code>和<code>- 秘密</code>而不是直接在命令列上輸入使用者名稱/密碼。</p>

<h3 id="quan-ly-realm-voi-cli"><strong>4.2 使用 CLI 進行領域管理</strong></h3>

<p><strong>創建新領域：</strong></p>
<pre><code># Tạo realm cơ bản
bin/kcadm.sh create realms \
  -s realm=my-company \
  -s enabled=true \
  -s displayName="My Company"

# Tạo realm với nhiều cấu hình
bin/kcadm.sh create realms \
  -s realm=my-company \
  -s enabled=true \
  -s displayName="My Company" \
  -s registrationAllowed=false \
  -s loginWithEmailAllowed=true \
  -s resetPasswordAllowed=true \
  -s sslRequired=external \
  -s bruteForceProtected=true</code></pre>

<p><strong>查看領域列表：</strong></p>
<pre><code># Lấy tất cả realms
bin/kcadm.sh get realms --fields realm,enabled,displayName

# Output:
# [ {
#   "realm" : "master",
#   "displayName" : "Keycloak",
#   "enabled" : true
# }, {
#   "realm" : "my-company",
#   "displayName" : "My Company",
#   "enabled" : true
# } ]</code></pre>

<p><strong>查看領域詳細資訊：</strong></p>
<pre><code>bin/kcadm.sh get realms/my-company</code></pre>

<p><strong>領域更新：</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s displayName="My Company Production" \
  -s sslRequired=all \
  -s bruteForceProtected=true \
  -s failureFactor=5</code></pre>

<p><strong>刪除領域：</strong></p>
<pre><code>bin/kcadm.sh delete realms/my-company</code></pre>

<h3 id="cau-hinh-realm-settings-voi-cli"><strong>4.3 使用 CLI 配置領域設置</strong></h3>

<p><strong>配置登入設定：</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s registrationAllowed=true \
  -s resetPasswordAllowed=true \
  -s rememberMe=true \
  -s verifyEmail=true \
  -s loginWithEmailAllowed=true \
  -s duplicateEmailsAllowed=false</code></pre>

<p><strong>配置令牌設定：</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s accessTokenLifespan=300 \
  -s ssoSessionIdleTimeout=1800 \
  -s ssoSessionMaxLifespan=36000 \
  -s revokeRefreshToken=true \
  -s refreshTokenMaxReuse=0</code></pre>

<p><strong>配置 SMTP 電子郵件：</strong></p>
<pre><code>bin/kcadm.sh update realms/my-company \
  -s 'smtpServer={"host":"smtp.gmail.com","port":"587","from":"noreply@mycompany.com","fromDisplayName":"My Company","starttls":"true","auth":"true","user":"your-email@gmail.com","password":"app-password"}'</code></pre>

<p><strong>導出領域配置：</strong></p>
<pre><code># Export realm sang file JSON
bin/kcadm.sh get realms/my-company &gt; my-company-realm.json</code></pre>

<h2 id="5-admin-rest-api"><strong>5. 管理 REST API</strong></h2>

<p>鑰匙斗篷提供<strong>管理 REST API</strong>透過 HTTP 請求實現全面管理 - 非常適合自動化、CI/CD 以及與其他系統的整合。</p>

<h3 id="lay-access-token"><strong>5.1 取得訪問令牌</strong></h3>
<p>在呼叫 API 之前，您需要從 master 領域取得存取權杖：</p>
<pre><code># Lấy access token bằng admin credentials
ACCESS_TOKEN=$(curl -s -X POST \
  "http://localhost:8080/realms/master/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=admin" \
  -d "password=admin" \
  -d "grant_type=password" \
  -d "client_id=admin-cli" | jq -r '.access_token')

echo $ACCESS_TOKEN</code></pre>

<h3 id="quan-ly-realm-voi-api"><strong>5.2 使用 API 進行領域管理</strong></h3>

<p><strong>取得領域列表：</strong></p>
<pre><code>curl -s -X GET \
  "http://localhost:8080/admin/realms" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" | jq '.[].realm'</code></pre>

<p><strong>創建新領域：</strong></p>
<pre><code>curl -s -X POST \
  "http://localhost:8080/admin/realms" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "realm": "my-company",
    "enabled": true,
    "displayName": "My Company",
    "sslRequired": "external",
    "registrationAllowed": false,
    "loginWithEmailAllowed": true,
    "resetPasswordAllowed": true,
    "bruteForceProtected": true,
    "failureFactor": 5
  }'</code></pre>

<p><strong>取得領域詳細資訊：</strong></p>
<pre><code>curl -s -X GET \
  "http://localhost:8080/admin/realms/my-company" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq .</code></pre>

<p><strong>領域更新：</strong></p>
<pre><code>curl -s -X PUT \
  "http://localhost:8080/admin/realms/my-company" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "displayName": "My Company Updated",
    "sslRequired": "all"
  }'</code></pre>

<p><strong>刪除領域：</strong></p>
<pre><code>curl -s -X DELETE \
  "http://localhost:8080/admin/realms/my-company" \
  -H "Authorization: Bearer $ACCESS_TOKEN"</code></pre>

<h3 id="api-endpoints-quan-trong"><strong>5.3 重要的API端點</strong></h3>
<table>
<thead>
<tr><th>端點</th><th>方法</th><th>描述</th></tr>
</thead>
<tbody>
<tr><td>/管理/領域</td><td>得到</td><td>領域列表</td></tr>
<tr><td>/管理/領域</td><td>郵政</td><td>創造新境界</td></tr>
<tr><td>/管理/領域/{領域}</td><td>得到</td><td>領域詳細信息</td></tr>
<tr><td>/管理/領域/{領域}</td><td>放</td><td>更新領域</td></tr>
<tr><td>/管理/領域/{領域}</td><td>刪除</td><td>刪除領域</td></tr>
<tr><td>/管理/領域/{領域}/用戶</td><td>得到</td><td>使用者列表</td></tr>
<tr><td>/管理/領域/{領域}/用戶</td><td>郵政</td><td>創建用戶</td></tr>
<tr><td>/管理/領域/{領域}/客戶端</td><td>得到</td><td>客戶名單</td></tr>
<tr><td>/管理/領域/{領域}/角色</td><td>得到</td><td>領域角色列表</td></tr>
<tr><td>/管理/領域/{領域}/群組</td><td>得到</td><td>團體名單</td></tr>
<tr><td>/管理/領域/{領域}/事件</td><td>得到</td><td>事件日誌</td></tr>
</tbody>
</table>

<h3 id="postman-collection"><strong>5.4 使用郵差</strong></h3>
<p>Keycloak 為管理 REST API 提供 OpenAPI 規格。您可以匯入 Postman 或 Swagger UI 以輕鬆探索和測試 API：</p>
<pre><code># OpenAPI spec URL
http://localhost:8080/admin/realms/{realm}/.well-known/openid-configuration</code></pre>

<h2 id="6-thuc-hanh"><strong>6.練習練習</strong></h2>

<p>做以下練習來鞏固您的知識：</p>

<ol>
<li><p><strong>創建領域“dev-company”</strong>透過管理控制台進行設定：</p>
<ul>
<li>顯示名稱：“開發公司”</li>
<li>使用電子郵件登入：開</li>
<li>用戶註冊：開</li>
<li>忘記密碼：開</li>
<li>驗證電子郵件：開</li>
<li>記住我：開</li>
</ul>
</li>
<li><p><strong>配置暴力偵測</strong>對於新創建的領域：</p>
<ul>
<li>最多登入失敗次數：3</li>
<li>等待增量：120 秒</li>
<li>最長等待時間：600 秒</li>
</ul>
</li>
<li><p><strong>使用 kcadm.sh</strong>建立具有類似配置的領域“staging-company”</p></li>
<li><p><strong>使用管理 REST API</strong>(curl) 建立領域「test-company」並透過取得領域清單進行驗證</p></li>
<li><p><strong>出口</strong>將領域“dev-company”轉換為 JSON 並使用不同的名稱重新導入</p></li>
</ol>

<h2 id="7-tong-ket"><strong>七、總結</strong></h2>

<p>在本課中，您學習了：</p>
<ul>
<li><p>如何存取和使用<strong>管理控制台</strong></p></li>
<li><p>創造<strong>管理員用戶</strong>首先透過多種方法</p></li>
<li><p>建立並配置<strong>領域</strong>— Keycloak 中的主要管理單元</p></li>
<li><p>了解<strong>領域設定</strong>重要：常規、登入、電子郵件、主題、本地化、金鑰、令牌、安全防禦</p></li>
<li><p>使用<strong>管理CLI</strong>(kcadm.sh) 用於透過命令列進行管理</p></li>
<li><p>使用<strong>管理 REST API</strong>自動化管理</p></li>
</ul>

<p>下一篇文章將提供詳細說明<strong>管理使用者、群組和使用者設定檔</strong>在鑰匙斗篷裡。</p>
