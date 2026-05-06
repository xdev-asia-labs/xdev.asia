---
id: 019d8b30-b203-7001-c002-e0c5f8200103
title: 第 3 課：Vault CLI、API 和 Web UI
slug: bai-3-vault-cli-api-va-web-ui
description: >-
  熟悉 Vault CLI（Vault
  讀取、寫入、列出、刪除、kv、驗證、機密、政策、運算子）、環境變數（VAULT_ADDR、VAULT_TOKEN、VAULT_NAMESPACE）、Vault
  HTTP RESTful API、cURL 和 SDK 客戶端（GoNode、Python、Java、jsjs）。 Vault Web UI
  概述、透過介面導航和管理機密。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 第 1 部分：HashiCorp Vault 平台
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-8461" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-8461）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="1065" cy="85" r="28" fill="#fb923c" opacity="0.1"/>
    <圓cx =“1030”cy =“190”r =“23”填入=“#fb923c”不透明度=“0.05”/>
    <circle cx="995" cy="35" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="960" cy="140" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="925" cy="245" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1 =“600”y1 =“195”x2 =“1100”y2 =“275”筆畫=“#fb923c”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“225”x2 =“1050”y2 =“295”筆畫=“#fb923c”筆觸寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「1070.9807621135333,230 1070.9807621135333,260 1045,275 1019.0192378864668,260 1019.01968,01968,20196 1045,215”填滿=“無”描邊=“#fb923c”描邊寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#fb923c”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#fb923c”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 3 課</text>

  <!-- 標題 -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 3 課：Vault CLI、API 與 Web UI</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：HashiCorp Vault 平台</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-vault-cli"><strong>1. Vault CLI 概述</strong></h2>
<p>Vault CLI 是用於與 Vault 伺服器互動的主要命令列工具。 CLI 使用與其他所有客戶端相同的 HTTP API，以確保一致性。 </p>

<h3 id="environment-variables"><strong>需要環境變數</strong></h3>
<pre><code class="language-bash"># Vault 伺服器
匯出 VAULT_ADDR='https://vault.example.com:8200'

# 代幣 xác thực
導出 VAULT_TOKEN='hvs.xxxxx'

# 命名空間（企業）
導出 VAULT_NAMESPACE='admin/team-a'

# 跳過 TLS 驗證 (chỉ dev)
導出 VAULT_SKIP_VERIFY=true

# CA憑證
導出 VAULT_CACERT='/path/to/ca.pem'
</code></pre>

<h3 id="cli-commands"><strong>基本 CLI 指令</strong></h3>
<pre><code class="language-bash"># Kiểm tra trạng thái
vault status

# 登入với các auth方法
vault login                           # Token-based
vault login -method=userpass username=admin
vault login -method=oidc

# KV操作
vault kv put secret/myapp password="s3cr3t"
vault kv get secret/myapp
vault kv get -field=password secret/myapp
vault kv list secret/
vault kv delete secret/myapp

# 秘密引擎管理
vault secrets enable -path=kv kv-v2
vault secrets list
vault secrets disable kv/

# 認證方法管理
vault auth enable userpass
vault auth list
vault auth disable userpass/

# 策略管理
vault policy write my-policy policy.hcl
vault policy read my-policy
vault policy list
vault policy delete my-policy

# 操作員命令
vault operator seal
vault operator unseal
vault operator raft list-peers
vault operator raft snapshot save backup.snap
</code></pre>

<h2 id="2-vault-http-api"><strong>2. Vault HTTP API</strong></h2>
<p>Vault 提供完整的 RESTful API。所有操作都可以透過API執行：</p>

<pre><code class="language-bash"># 秘密
curl -s \
  --header "X-Vault-Token: hvs.xxxxx" \
  https://vault.example.com:8200/v1/secret/data/myapp |傑克

#吉的秘密
curl -s \
  --header "X-Vault-Token: hvs.xxxxx" \
  --請求貼文\
  --data '{"資料": {"密碼": "s3cr3t", "使用者名稱": "admin"}}' \
  https://vault.example.com:8200/v1/secret/data/myapp

# Liệt kê 秘密
curl -s \
  --header "X-Vault-Token: hvs.xxxxx" \
  --請求清單\
  https://vault.example.com:8200/v1/secret/metadata/ |傑克

# 健康檢查
curl -s https://vault.example.com:8200/v1/sys/health | jq
</code></pre>

<h2 id="3-sdk-clients"><strong>3. SDK客戶端</strong></h2>

<h3 id="python"><strong>Python（暖通空調）</strong></h3>
<pre><code class="language-python">導入暖通空調

客戶端 = hvac.Client(url='https://vault.example.com:8200', token='hvs.xxxxx')

# 秘密
秘密 = client.secrets.kv.v2.read_secret_version(path='myapp')
print(秘密['資料']['資料']['密碼'])#吉的秘密
client.secrets.kv.v2.create_or_update_secret(
    路徑='myapp',
    秘密=字典（密碼='新密碼'，使用者名稱='管理員'）
）
</code></pre>

<h3 id="go"><strong>去</strong></h3>
<pre><code class="language-go">導入 (
    “github.com/hashicorp/vault-client-go”
）

客戶端, _ :=Vault.New(
    vault.WithAddress("https://vault.example.com:8200"),
）
client.SetToken("hvs.xxxxx")

秘密, _ := client.Secrets.KvV2Read(ctx, "myapp",
    vault.WithMountPath("secret"))
</code></pre>

<h2 id="4-web-ui"><strong>4.保險箱網頁使用者介面</strong></h2>
<p>Vault Web UI 提供了由配置中的 <code>ui = true</code> 啟用的視覺化介面。訪問 <code>https://vault.example.com:8200/ui</code>.</p>

<p>網路使用者介面支援：</p>
<ul>
<li><p>管理機密引擎和機密</p></li>
<li><p>管理身分驗證方法</p></li>
<li><p>政策管理</p></li>
<li><p>Xem 審核日誌</p></li>
<li><p>客戶計數儀表板 (1.21)</p></li>
<li><p>秘密恢復（1.21）</p></li>
</ul>

<h2 id="5-tong-ket"><strong>5。摘要</strong></h2>
<p>Vault 提供三種主要的互動方式：CLI、HTTP API 和 Web UI。 CLI 適用於開發和腳本編寫，API 適用於應用程式集成，Web UI 適用於管理員。下一篇文章將深入探討密封/解封和自動解封機制。 </p>
