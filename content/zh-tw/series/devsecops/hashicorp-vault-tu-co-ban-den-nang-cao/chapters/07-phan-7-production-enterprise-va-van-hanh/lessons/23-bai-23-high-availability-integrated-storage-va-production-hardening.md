---
id: 019d8b30-b223-7001-c002-e0c5f8200123
title: 第 23 課：高可用性、整合式儲存與生產強化
slug: bai-23-high-availability-integrated-storage-va-production-hardening
description: Raft 整合儲存深入研究、Autopilot、HA 架構模式、效能備用、唯讀副本概念、TLS 端對端、生產強化檢查表、作業系統調優 cho Vault。
duration_minutes: 220
is_free: true
video_url: null
sort_order: 23
section_title: 第七部分：生產、企業與營運
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-4273" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-4273）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="1048" cy="174" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="996" cy="222" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="944" cy="270" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="892" cy="58" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="840" cy="106" r="32" fill="#fbbf24" opacity="0.05"/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <圓cx =“778”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <圓cx =“806”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“834”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <圓cx =“862”cy =“80”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <圓cx =“890”cy =“80”r =“1.5”填滿=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#fbbf24”不透明度=“0.15”/>
    <line x1 =“600”y1 =“154”x2 =“1100”y2 =“234”筆畫=“#fbbf24”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“184”x2 =“1050”y2 =“254”筆觸=“#fbbf24”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「929.1147367097487,89.5 929.1147367097487,118.5 904,133 878.8852632902513,118.5 878.8852632902513,89.50000000000001 904,75" 填滿 = "無" 描邊 = "#fbbf24" 描邊寬度 = "1" 不透明度 = "0.12"/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#fbbf24”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#fbbf24”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — 第 23 課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 23 課：高可用性、整合</tspan>
<tspan x="60" dy="42">儲存與生產增強</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：生產、企業和營運</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-raft-integrated-storage-deep-dive"><strong>1. Raft 整合式儲存深入探究</strong></h2>

<p>從 Vault 1.4+ 開始，<strong>整合式儲存 (Raft)</strong> 是建議的儲存後端。它消除了對 Consul 等外部儲存的依賴，簡化了架構和操作。 </p>

<h3 id="kien-truc-raft"><strong>Raft 共識架構</strong></h3>

<預><代碼>┌────────────────────────────────────────────────────────┐
│ Vault HA集群 │
│ │
│ ┌────────────┐ ┌──────────────┐ ┌────────────┐ │
│ │ 節點 1 │ │ 節點 2 │ │ 節點 3 │ │
│ │ （領導者） │ │ （追隨者） │ │ （追隨者） │ │
│ │ ┌──────────┐ │ │ ┌────────┐ │ │ ┌──────────┐ │ │
│ │ │ 筏板 │ │ │ │ 筏板 │ │ │ │ 筏板 │ │ │
│ │ │ 記錄 │◄├──├─▶│ 記錄 │◄├──├─▶│ 記錄 │ │ │
│ │ └──────────┘ │ │ └────────┘ │ │ └──────────┘ │ │
│ │ ┌──────────┐ │ │ ┌────────┐ │ │ ┌──────────┐ │ │
│ │ │ BoltDB │ │ │ │ BoltDB │ │ │ │ BoltDB │ │ │
│ │ └──────────┘ │ │ └────────┘ │ │ └──────────┘ │ │
│ └──────────────┘ └──────────────┘ └──────────────┘ │
└──────────────────────────────────────────────────────────────┘
</code></pre>

<h3 id="cau-hinh-raft"><strong>Raft 儲存配置</strong></h3>

<pre><code class="language-hcl">#Vault-config.hcl
存放“筏”{
  路徑=“/opt/vault/data”
  node_id = “庫節點-1”

  重試加入{
    Leader_api_addr = "https://vault-node-2.company.com:8200"
    Leader_ca_cert_file = "/opt/vault/tls/ca.pem"
    Leader_client_cert_file = "/opt/vault/tls/client.pem"
    Leader_client_key_file = “/opt/vault/tls/client-key.pem”
  }

  重試加入{
    Leader_api_addr = "https://vault-node-3.company.com:8200"
    Leader_ca_cert_file = "/opt/vault/tls/ca.pem"
    Leader_client_cert_file = "/opt/vault/tls/client.pem"
    Leader_client_key_file = “/opt/vault/tls/client-key.pem”
  }# 效能調整
  Performance_multiplier = 1 # 針對快速網路進行最佳化（預設值：5）
}

偵聽器“tcp”{
  地址 =“0.0.0.0:8200”
  群集位址 = "0.0.0.0:8201"
  tls_cert_file = “/opt/vault/tls/server.pem”
  tls_key_file = “/opt/vault/tls/server-key.pem”
  tls_client_ca_file = “/opt/vault/tls/ca.pem”
}

cluster_addr = “https://vault-node-1.company.com:8201"
api_addr = “https://vault-node-1.company.com:8200"

密封“awskms”{
  區域 =“ap-東南-1”
  kms_key_id = "別名/vault-unseal"
}
</code></pre>

<h3 id="autopilot"><strong>Autopilot — 自動叢集管理</strong></h3>

<pre><code class="language-bash"># Xem Autopilot 狀態
vault operator raft autopilot state

#Cấu hình 自動駕駛儀
vault operator raft autopilot set-config \
  -cleanup-dead-servers=true \
  -dead-server-last-contact-threshold=24h \
  -最小法定人數=3 \
  -伺服器穩定時間=10s

# 快照 tự động（企業）
vault operator raft autopilot snapshot-config set \
  -間隔=1小時\
  -保留=72 \
  -path-prefix =“筏/快照”
</code></pre>

<h3 id="raft-snapshots"><strong>手動快照</strong></h3>

<pre><code class="language-bash"># Tạo 快照
vault operator raft snapshot save /backup/vault-$(date +%Y%m%d%H%M).snap

# 復原快照
vault operator raft snapshot restore /backup/vault-20250101.snap

# 列出對等點
vault operator raft list-peers

# 刪除失效的對等點
vault operator raft remove-peer vault-node-4
</code></pre>

<h2 id="2-ha-architecture-patterns"><strong>2. HA架構模式</strong></h2>

<h3 id="3-node-cluster"><strong>3 節點群集（標準）</strong></h3>

<表>
<標題>
<tr><th>特徵</th><th>值</th></tr>
</標題>
<正文>
<tr><td>節點號</td><td>3</td></tr>
<tr><td>容錯</td><td>1個節點故障</td></tr>
<tr><td>法定人數</td><td>2</td></tr>
<tr><td>適合</td><td>分期、中小型生產</td></tr>
</tbody>
</表>

<h3 id="5-node-cluster"><strong>5 節點叢集（企業/大型）</strong></h3>

<表>
<標題>
<tr><th>特徵</th><th>值</th></tr>
</標題>
<正文>
<tr><td>節點編號</td><td>5</td></tr>
<tr><td>容錯</td><td>2個節點故障</td></tr>
<tr><td>法定人數</td><td>3</td></tr>
<tr><td>適合</td><td>大生產、多AZ</td></tr>
</tbody>
</表>

<h3 id="multi-az"><strong>多可用區域部署</strong></h3>

<前><程式碼>
區域：ap-southeast-1
┌──────────────┐ ┐────────────────┐ ┌──────────────┐
│ AZ-1 │ │ AZ-2 │ │ AZ-3 │
│ │ │ │ │ │
│ ┌────────┐ │ │ ┌──────────┐ │ │ ┌────────┐ │
│ │ Vault-1 │ │ │ │ Vault-2 │ │ │ │ Vault-3 │ │
│ │ (領導者) │ │ │ │(追隨者) │ │ │ (追隨者) │
│ └────────┘ │ │ └──────────┘ │ │ └──────────┘ │
│ │ │ │ │ │
│ ┌────────┐ │ │ │ │ ┌──────────┐ │
│ │ LB │ │ │ ┌──────────┐ │ │ │ LB │ │
│ └──────────┘ │ │ │ LB │ │ │ └──────────┘ │
│ │ │ └──────────┘ │ │ │
└────────────────┘ └────────────────┘ └────────────────┘
         ▲ ▲ ▲
         └──────────────────┴──────────────────┘
                        網路負載平衡/DNS
</code></pre>

<h2 id="3-tls-end-to-end"><strong>3. TLS 端對端</strong></h2>

<h3 id="tao-certificates"><strong>使用 Vault PKI 建立憑證</strong></h3><pre><code class="language-bash"># 根 CA
vault secrets enable -path=pki-root pki
vault secrets tune -max-lease-ttl=87600h pki-root
vault write pki-root/root/generate/internal \
  common_name="公司根 CA" \
  生存時間=87600小時

# 中間 CA cho Vault 集群
vault secrets enable -path=pki-vault pki
vault secrets tune -max-lease-ttl=43800h pki-vault

vault write pki-vault/intermediate/generate/internal \
  common_name="Vault 中間 CA" \
  | jq -r '.data.csr' >Vault-intermediate.csr

vault write pki-root/root/sign-intermediate \
  csr=@vault-intermediate.csr \
  ttl=43800h \
  | jq -r '.data.certificate' >Vault-intermediate.pem

vault write pki-vault/intermediate/set-signed \
  證書=@vault-intermediate.pem

# Tạo 角色 cho Vault 伺服器憑證
vault write pki-vault/roles/vault-server \
  allowed_domains="vault.company.com,company.internal" \
  allowed_subdomains=true \
  最大生存時間=8760h

# 頒發證書
vault write pki-vault/issue/vault-server \
  common_name="vault-node-1.company.internal" \
  alt_names="vault.company.com" \
  ip_sans="10.0.1.10" \
  生存時間=720小時
</code></pre>

<h2 id="4-生產-硬化"><strong>4。生產強化清單</strong></h2>

<h3 id="os-config"><strong>作業系統層級調整</strong></h3>

<pre><code class="language-bash"># /etc/sysctl.d/99-vault.conf
net.core.somaxconn = 65535
net.ipv4.tcp_max_syn_backlog = 65535
net.ipv4.ip_local_port_range = 1024 65535
net.ipv4.tcp_tw_reuse = 1
vm.swappiness = 0
vm.dirty_ratio = 10

# 申請
sysctl--系統
</code></pre>

<pre><code class="language-bash"># 檔案描述子限制
# /etc/security/limits.d/vault.conf
vault soft nofile 65536
vault hard nofile 65536
vault soft nproc 65536
vault hard nproc 65536
</code></pre>

<h3 id="systemd-hardening"><strong>Systemd 服務強化</strong></h3>

<pre><code class="language-ini"># /etc/systemd/system/vault.service
[單位]
描述=HashiCorp Vault
文檔=https://www.vaultproject.io/docs
需要=網路在線.target
After=網路在線.target
ConditionFileNotEmpty=/etc/vault.d/vault.hcl

[服務]
類型=通知
使用者=保管庫
組=庫
ExecStart=/usr/bin/vault 伺服器-config=/etc/vault.d/vault.hcl
ExecReload=/bin/kill --signal HUP $MAINPID
KillMode=進程
KillSignal=SIGINT
重新啟動=失敗時
重啟秒=5
超時停止秒=30
限制NOFILE=65536
LimitMEMLOCK=無窮大

# 安全加固
保護系統=完整
保護首頁=true
PrivateTmp=true
私人設備=true
無新權限=true
CapabilityBoundingSet=CAP_IPC_LOCK CAP_NET_BIND_SERVICE
環境能力=CAP_IPC_LOCK

[安裝]
WantedBy=多用戶.target
</code></pre>

<h3 id="vault-config-hardening"><strong>Vault 配置強化</strong></h3>

<pre><code class="language-hcl"># ProductionVault.hcl
使用者介面=真
停用_mlock = false
log_level = “警告”

# 停用未使用的功能
raw_storage_endpoint = false

偵聽器“tcp”{
  地址 =“0.0.0.0:8200”
  群集位址 = "0.0.0.0:8201"
  tls_cert_file = “/opt/vault/tls/server.pem”
  tls_key_file = “/opt/vault/tls/server-key.pem”
  tls_client_ca_file = “/opt/vault/tls/ca.pem”
  tls_min_version =“tls13”
  tls_require_and_verify_client_cert = false

  # 遙測
  遙測{
    未經身份驗證的指標存取 = false
  }
}

# 審核設備 — BẮT BUỘC trong 生產
# Cấu hình sau khi 透過 CLI 解封
</code></pre>

<h3 id="hardening-checklist"><strong>常規清單</strong></h3><表>
<標題>
<tr><th>#</th><th>項目</th><th>狀態</th></tr>
</標題>
<正文>
<tr><td>1</td><td>TLS 端對端（API + 集群）</td><td>☐</td></tr>
<tr><td>2</td><td>自動解封（KMS / HSM）</td><td>☐</td></tr>
<tr><td>3</td><td>審核設備已啟用</td><td>☐</td></tr>
<tr><td>4</td><td>初始根令牌已撤銷</td><td>☐</td></tr>
<tr><td>5</td><td>mlock 已啟用（disable_mlock = false）</td><td>☐</td></tr>
<tr><td>6</td><td>檔案描述子限制增加</td><td>☐</td></tr>
<tr><td>7</td><td>交換已停用或交換性 = 0</td><td>☐</td></tr>
<tr><td>8</td><td>專用機器/虛擬機器</td><td>☐</td></tr>
<tr><td>9</td><td>防火牆 — 僅開放 8200、8201</td><td>☐</td></tr>
<tr><td>10</td><td>網路分段</td><td>☐</td></tr>
<tr><td>11</td><td>自動備份計畫</td><td>☐</td></tr>
<tr><td>12</td><td>監控和警報</td><td>☐</td></tr>
<tr><td>13</td><td>已配置日誌輪換</td><td> ☐</td></tr>
<tr><td>14</td><td>最低權限策略</td><td>☐</td></tr>
</tbody>
</表>

<h2 id="5-tong-ket"><strong>5。摘要</strong></h2>

<ul>
<li><p><strong>Raft 整合式儲存</strong> — 內建 HA 存儲，無需 Consul</p></li>
<li><p><strong>Autopilot</strong> - 自動管理叢集成員資格、清除失效伺服器</p></li>
<li><p><strong>多可用區</strong> - 跨可用區分佈節點以實現容錯</p></li>
<li><p><strong>TLS 端對端</strong> - 生產環境中必需</p></li>
<li><p><strong>強化</strong> - 作業系統調整、systemd 安全、mlock、防火牆、審核</p></li>
</ul>
