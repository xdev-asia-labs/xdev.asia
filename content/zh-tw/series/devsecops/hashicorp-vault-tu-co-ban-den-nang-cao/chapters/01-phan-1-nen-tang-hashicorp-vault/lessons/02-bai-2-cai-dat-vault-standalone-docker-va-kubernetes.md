---
id: 019d8b30-b202-7001-c002-e0c5f8200102
title: 第 2 課：安裝 Vault - 獨立版、Docker 和 Kubernetes
slug: bai-2-cai-dat-vault-standalone-docker-va-kubernetes
description: >-
  在 Linux (Ubuntu/CentOS)、macOS、Docker Compose 和 Kubernetes Helm 圖表上安裝 Vault
  1.21.x 的說明。設定儲存後端（整合式儲存、檔案、Consul）、偵聽器（TCP、TLS），在開發伺服器與生產模式下執行 Vault。 Vault
  初始化（Vault 操作員初始化）、密封/解封工作流程和根令牌管理。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：HashiCorp Vault 平台
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-7622" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-7622）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="1034" cy="192" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="968" cy="246" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="902" cy="40" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="836" cy="94" r="18" fill="#f472b6" opacity="0.13"/>
    <圓cx =“770”cy =“148”r =“20”填入=“#f472b6”不透明度=“0.05”/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“778”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <圓cx =“806”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“834”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“862”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#f472b6”不透明度=“0.15”/>
    <line x1 =“600”y1 =“232”x2 =“1100”y2 =“312”筆畫=“#f472b6”筆觸寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“262”x2 =“1050”y2 =“332”筆畫=“#f472b6”筆觸寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「955.3826859021799,118.5 955.3826859021799,145.5 932,159 908.6173140978201,145.5 18. 932,105”填滿=“無”描邊=“#f472b6”描邊寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#f472b6”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#f472b6”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 2 課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 2 課：安裝 Vault - 獨立版、Docker</tspan>
<tspan x="60" dy="42">和 Kubernetes</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：HashiCorp Vault 平台</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-cai-dat-vault-tren-linux"><strong>1.在 Linux 安裝 Vault</strong></h2>

<h3 id="ubuntu-debian"><strong>Ubuntu/Debian</strong></h3>
<pre><code class="language-bash"># Thêm HashiCorp GPG 金鑰
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg

# 他們的儲存庫
echo "deb [arch=$(dpkg --print-architecture) 簽署者=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/sourcecorp.list.

# Cài đặt Vault
sudo apt update && sudo apt install Vault

# Xác nhận cài đặt
vault version
# Vault v1.21.x
</code></pre>

<h3 id="centos-rhel"><strong>CentOS/RHEL</strong></h3>
<pre><code class="language-bash"># Thêm 儲存庫
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo

# Cài đặt Vault
sudo yum 安裝保管庫

vault version
</code></pre>

<h3 id="macos"><strong>macOS</strong></h3>
<pre><code class="language-bash"># Sử dụng Homebrew
釀造水龍頭哈希公司
釀造安裝 hashcorp/tap/vault

vault version
</code></pre>

<h2 id="2-dev-server"><strong>2.執行 Vault 開發伺服器</strong></h2>
<p>Dev Server 為開發模式，所有資料都儲存在記憶體中，TLS 停用，自動解封：</p>

<pre><code class="language-bash"># Khởi chạy 開發伺服器
vault server -dev

# 輸出如下：
# 解封密鑰：...
# 根令牌：hvs.xxxxx

# Trong終端khác，匯出環境變量
匯出 VAULT_ADDR='http://127.0.0.1:8200'
導出 VAULT_TOKEN='hvs.xxxxx'

#Kiểm tra trạng thai
vault status
</code></pre>

<div style="background: #fff3cd; border-left: 4pxsolid #ffc107; padding: 1rem; margin: 1rem 0; border-radius: 4px;">
<p><strong>⚠️警告：</strong>開發伺服器永遠不應該用於生產。重啟時資料遺失，無TLS，直接使用根令牌。 </p>
</div>

<h2 id="3-生產配置"><strong>3.配置生產</strong></h2>

<h3 id="vault-config"><strong>保險箱設定檔 (vault.hcl)</strong></h3>
<pre><code class="language-hcl"># /etc/vault.d/vault.hcl# 儲存後端-整合式儲存（Raft）
存放“筏”{
  路徑=“/opt/vault/data”
  node_id = “庫節點-1”
}

# 監聽器 - TCP với TLS
偵聽器“tcp”{
  地址 =“0.0.0.0:8200”
  tls_cert_file =“/opt/vault/tls/vault-cert.pem”
  tls_key_file = “/opt/vault/tls/vault-key.pem”
}

# 介面位址
api_addr = “https://vault.example.com:8200"
cluster_addr = “https://vault.example.com:8201"

# 使用者介面
使用者介面=真

# 停用 mlock（建議使用 cho 容器）
停用_mlock = true

# 遙測
遙測{
  prometheus_retention_time = "30s"
  禁用主機名稱 = true
}
</code></pre>

<h3 id="systemd-service"><strong>系統服務</strong></h3>
<pre><code class="language-ini"># /etc/systemd/system/vault.service
[單位]
描述=HashiCorp Vault
文檔=https://developer.hashicorp.com/vault/docs
需要=網路在線.target
After=網路在線.target
ConditionFileNotEmpty=/etc/vault.d/vault.hcl

[服務]
使用者=保管庫
組=庫
保護系統=完整
ProtectHome=唯讀
PrivateTmp=是
私人設備=是
SecureBits=保持上限
環境能力=CAP_IPC_LOCK
沒有新權限=是
ExecStart=/usr/bin/vault 伺服器-config=/etc/vault.d/vault.hcl
ExecReload=/bin/kill --signal HUP $MAINPID
KillMode=進程
KillSignal=SIGINT
重新啟動=失敗時
重啟秒=5
超時停止秒=30
限制NOFILE=65536
LimitMEMLOCK=無窮大

[安裝]
WantedBy=多用戶.target
</code></pre>

<h2 id="4-docker-compose"><strong>4.使用 Docker Compose 的 Vault</strong></h2>

<pre><code class="language-yaml"># docker-compose.yml
服務：
  vault:
    圖片：hashicorp/vault：1.21
    容器名稱：保管庫
    重新啟動：除非停止
    連接埠：
      - “8200:8200”
    環境：
      VAULT_ADDR：「http://0.0.0.0:8200"
      VAULT_API_ADDR：「http://0.0.0.0:8200"
    卷：
      - 保險庫數據：/保險庫/數據
      - ./config:/vault/config
    上限加：
      -IPC_鎖定
    指令：vault server -config=/vault/config/vault.hcl

卷：
  vault-data:
</code></pre>

<h2 id="5-khoi-tao-vault"><strong>5。初始化 Vault（操作員初始化）</strong></h2>

<pre><code class="language-bash"># Khởi tạo Vault lần đầu
vault operator init

# 輸出：
# 解封密鑰1：xxx
# 解封密鑰2：xxx
# 解封密鑰3：xxx
# 解封密鑰4：xxx
# 解封密鑰5：xxx
# 初始根令牌：hvs.xxxxx

# 解封金庫（cần 3 trong 5 個鑰匙 mặc định）
vault operator unseal &lt;key-1&gt;
vault operator unseal &lt;key-2&gt;
vault operator unseal &lt;key-3&gt;

# 自訂密鑰共享 và 閾值
vault operator init -key-shares=3 -key-threshold=2

#Kiểm tra trạng thai
vault status
# 密封：假
# HA 已啟用：true
</code></pre>

<h2 id="6-kubernetes-helm"><strong>6.使用 Helm 在 Kubernetes 上部署 Vault</strong></h2>

<pre><code class="language-bash"># Thêm Helm 儲存庫
helm repo add hashicorp https://helm.releases.hashicorp.com
helm repo update

# Cài đặt Vault 獨立版
helm install vault hashicorp/vault \
  --set "server.dev.enabled=false" \
  --set "server.ha.enabled=true" \
  --set "server.ha.replicas=3" \
  --設定“server.ha.raft.enabled=true”

# 在 Kubernetes 中使用 Vault
kubectl exec vault-0 -- vault operator init
kubectl exec vault-0 -- vault operator unseal &lt;key&gt;
</code></pre><h2 id="7-tong-ket"><strong>7.摘要</strong></h2>
<p>在本文中，您學習如何在各種平台上安裝 Vault，從裸機 Linux 到 Docker 和 Kubernetes。重要的一點是了解開發伺服器（僅測試）和生產模式（需要 TLS、持久性儲存、正確的初始化/解封）之間的差異。下一篇文章將深入探討 Vault CLI、API 和 Web UI。 </p>
