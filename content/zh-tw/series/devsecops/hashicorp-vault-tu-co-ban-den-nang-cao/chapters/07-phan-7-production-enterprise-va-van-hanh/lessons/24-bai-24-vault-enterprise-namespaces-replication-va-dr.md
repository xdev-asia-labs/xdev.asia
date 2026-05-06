---
id: 019d8b30-b224-7001-c002-e0c5f8200124
title: 第 24 課：Vault Enterprise — 命名空間、複製與災難復原
slug: bai-24-vault-enterprise-namespaces-replication-va-dr
description: Vault Enterprise 功能：命名空間選擇多租用戶、效能複製、災難復原複製、控制群組、MFA 實作、許可證管理。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 24
section_title: 第七部分：生產、企業與營運
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-9275" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-9275）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="1093" cy="129" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="1086" cy="162" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1079" cy="195" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1072" cy="228" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="1065" cy="261" r="32" fill="#c084fc" opacity="0.1"/>
    <圓cx =“750”cy =“80”r =“1.5”填滿=“#c084fc”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“778”cy =“80”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“778”cy =“136”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“778”cy =“164”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“806”cy =“80”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“834”cy =“80”r =“1.5”填滿=“#c084fc”不透明度=“0.15”/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“834”cy =“136”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“834”cy =“164”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“862”cy =“80”r =“1.5”填滿=“#c084fc”不透明度=“0.15”/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“862”cy =“136”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“862”cy =“164”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“890”cy =“80”r =“1.5”填滿=“#c084fc”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#c084fc”不透明度=“0.15”/>
    <line x1 =“600”y1 =“239”x2 =“1100”y2 =“319”筆畫=“#c084fc”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“269”x2 =“1050”y2 =“339”筆畫=“#c084fc”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「1018.444863728671,172 1018.444863728671,206 989,223 959.555136271329,206 959.5551362712 989,155”填滿=“無”描邊=“#c084fc”描邊寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#c084fc”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#c084fc”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 24 堂課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 24 課：Vault Enterprise — 命名空間，</tspan>
<tspan x="60" dy="42">複製與災難復原</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：生產、企業和營運</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-vault-enterprise-overview"><strong>1. Vault 企業概述</strong></h2>

<p><strong>Vault Enterprise</strong> 為大型組織增加了企業級功能。這些功能不包含在 OSS 版本中。 </p>

<表>
<標題>
<tr><th>功能</th><th>描述</th><th>層級</th></tr>
</標題>
<正文>
<tr><td>命名空間</td><td>多租戶隔離</td><td>標準+</td></tr>
<tr><td>效能複製</td><td>跨區域唯讀副本</td><td>標準+</td></tr>
<tr><td>容災複製</td><td>容災備集群</td><td>標準+</td></tr>
<tr><td>控制組</td><td>多人審批工作流程</td><td>治理</td></tr>
<tr><td>哨兵策略</td><td>策略即程式碼框架</td><td>治理</td></tr>
<tr><td>熵增強</td><td>外部熵源</td><td>標準+</td></tr>
<tr><td>密封包裝</td><td>符合 FIPS 140-2 標準</td><td>標準+</td></tr>
<tr><td>轉換 SE</td><td>保留格式加密</td><td>ADP</td></tr>
</tbody>
</表>

<h2 id="2-namespaces"><strong>2.命名空間 - 多租用戶</strong></h2>

<p>命名空間在同一叢集內建立<strong>隔離的 Vault 實例</strong>。每個命名空間都有自己的身份驗證方法、秘密引擎、策略、令牌。 </p>

<h3 id="namespace-hierarchy"><strong>命名空間層次結構</strong></h3>

<前><程式碼>
根 (/)
├── 團隊平台/
│ ├── 秘密引擎：kv、pki、資料庫
│ ├── 認證方法：kubernetes、approle
│ └── 策略：管理、部署
├── 團隊後端/
│ ├── 開發/
│ │ └── 秘密引擎：kv
│ ├── 分期/
│ │ └── 秘密引擎：kv、資料庫
│ └── 生產/
│ └── 秘密引擎：kv、資料庫、pki
└── 團隊前端/
    └── 秘密引擎：kv
</code></pre>

<h3 id="quan-ly-namespaces"><strong>管理命名空間</strong></h3>

<pre><code class="language-bash"># Tạo 命名空間
vault namespace create team-platform
vault namespace create team-backend
vault namespace create -namespace=team-backend dev
vault namespace create -namespace=team-backend staging
vault namespace create -namespace=team-backend production

# 列出命名空間
vault namespace list
vault namespace list -namespace=team-backend# Thao tác trong 命名空間
匯出 VAULT_NAMESPACE=團隊後端/生產

vault secrets enable -path=secret kv-v2
vault secrets enable database
vault auth enable kubernetes

# Hoặc dùng 旗幟
vault kv put -namespace=team-backend/production \
  秘密/api-key值=“prod-secret-123”
</code></pre>

<h3 id="namespace-policies"><strong>命名空間中的策略</strong></h3>

<pre><code class="language-hcl"># 團隊管理策略 — quản lý 命名空間 của 團隊
路徑「團隊後端/*」{
  功能 = [「建立」、「讀取」、「更新」、「刪除」、「清單」、「sudo」]
}

# 策略 cho 開發者 — chỉ đọc trong dev 命名空間
路徑「團隊後端/dev/secret/data/*」{
  能力= [“讀取”，“列表”]
}

# 跨命名空間存取（根命名空間策略）
路徑「團隊後端/生產/資料庫/creds/readonly」{
  能力= [“讀”]
}
</code></pre>

<h2 id="3-performance-replication"><strong>3.效能複製</strong></h2>

<p>效能複製允許將<strong>唯讀副本</strong>放置在多個區域中，從而減少讀取操作延遲。 </p>

<前><程式碼>
┌──────────────────────────────────────────────────────┐
│ 建築學 │
│ │
│ 地區：新加坡 地區：東京 │
│ ┌──────────────┐ ┌──────────────────┐ │
│ │ 主群集 │ ────▶│ 次群集 │ │
│ │ │ 同步 │ （效能） │ │
│ │ ┌────┐ ┌────┐ │ │ ┌────┐ ┌────┐ │ │
│ │ │ N1 │ │ N2 │ │ │ │ N1 │ │ N2 │ │ │
│ │ └────┘ └────┘ │ │ └────┘ └────┘ │ │
│ │ ┌────┐ │ │ ┌────┐ │ │
│ │ │ N3 │ │ │ │ N3 │ │ │
│ │ └────┘ │ │ └────┘ │ │
│ └────────────────┘ └──────────────────┘ │
│ 讀+寫 只讀 │
│（tất cả操作）（寫入→轉送主）│
└──────────────────────────────────────────────────────┘
</code></pre>

<h3 id="setup-perf-replication"><strong>效能複製設定</strong></h3>

<pre><code class="language-bash"># 主集群
vault write -f sys/replication/performance/primary/enable

# Tạo 二級代幣
vault write sys/replication/performance/primary/secondary-token \
  id=「東京國中」\
  ttl=“30m”
# → Trả vềwrapping_token

# 輔助集群
vault write sys/replication/performance/secondary/enable \
  令牌=“<包裝令牌>”
# 輔助設備重新啟動並與主設備同步

#Kiểm tra trạng thai
vault read sys/replication/performance/status
</code></pre>

<h3 id="perf-replication-behavior"><strong>行為</strong></h3>

<表>
<標題>
<tr><th>操作</th><th>主要</th><th>輔助</th></tr>
</標題>
<正文>
<tr><td>讀取機密</td><td>✅本地</td><td>✅本地</td></tr>
<tr><td>寫入機密</td><td>✅本地</td><td>↗️轉發到主</td></tr>
<tr><td>Auth/Token</td><td>✅ 本地</td><td>✅ 本地（本地令牌）</td></tr>
<tr><td>策略</td><td>✅ 管理</td><td>❌從主同步</td></tr>
<tr><td>身份驗證方法</td><td>✅管理</td><td>✅本地身份驗證方法</td></tr>
</tbody>
</表>

<h2 id="4-dr-replication"><strong>4.災難復原複製</strong></h2>

<p>災難復原複製建立一個<strong>熱備用叢集</strong>，準備在主叢集發生故障時進行升級。 </p>

<h3 id="setup-dr"><strong>設定災難復原</strong></h3><pre><code class="language-bash"># 主集群
vault write -f sys/replication/dr/primary/enable

# Tạo DR 二級代幣
vault write sys/replication/dr/primary/secondary-token \
  id=“新加坡博士2”

# DR SECONDARY 集群
vault write sys/replication/dr/secondary/enable \
  令牌=“<包裝令牌>”

# DR 輔助 sẽ ở trạng tái 備用
# Tất cả 請求 bị 拒絕 (503)
</code></pre>

<h3 id="dr-failover"><strong>災難復原故障轉移</strong></h3>

<pre><code class="language-bash"># Trước 故障轉移 — tạo DR 操作令牌 trên PRIMARY
vault operator generate-root -dr-token -init
vault operator generate-root -dr-token \
  -nonce="<nonce>" "<unseal-key>"

# Khi 初級下降 — 促進 DR 次級
vault write sys/replication/dr/secondary/promote \
  dr_operation_token="<dr-操作令牌>"

# DR 次要 trở thành 主要 mới
# Cập nhật DNS/LB trỏ tới cluster mới
</code></pre>

<h2 id="5-control-groups"><strong>5。控制組（治理）</strong></h2>

<p>控制組在執行操作之前需要<strong>多人批准</strong> - 多人批准。 </p>

<pre><code class="language-hcl"># 控制組策略
路徑「秘密/資料/生產/主密鑰」{
  能力= [“讀”]
  控制組{
    因素「批准者」{
      受控能力= [“讀取”]
      身份{
        group_names = [「安全團隊」]
        批准 = 2
      }
    }
    ttl = "4h" # Thời gian chờ 批准
    最大生存時間=“8小時”
  }
}
</code></pre>

<pre><code class="language-bash"># 使用者 yêu cầu 秘密 → nhận 包裝令牌 thay vì 秘密
vault kv get secret/production/master-key
# → Trả vềwrapping_token（訪問器）

# 審核者授權請求
vault write sys/control-group/authorize \
  accessor="<來自請求者的訪客>"

# Sau khi đủ 批准，用戶解開 để lấy 秘密
vault unwrap "<wrapping_token>"
</code></pre>

<h2 id="6-許可證管理"><strong>6。許可證管理</strong></h2>

<pre><code class="language-bash"># Kiểm tra 許可證
vault license get
vault license inspect /path/to/license.hclic

# Vault 1.8+ — 載入許可證
# 文件許可證 tại một trong:
# 1. VAULT_LICENSE 環境變量
# 2. VAULT_LICENSE_PATH 環境變量
# 3./etc/vault.d/vault.hclic
</code></pre>

<h2 id="7-tong-ket"><strong>7.摘要</strong></h2>

<ul>
<li><p><strong>命名空間</strong> - 多租戶，每個團隊/環境管理自己的保管庫</p></li>
<li><p><strong>效能複製</strong> - 跨區域讀取，減少延遲</p></li>
<li><p><strong>災難復原複製</strong> — 熱備用、快速故障轉移 khi 主資料庫關閉</p></li>
<li><p><strong>控制組</strong> - 針對敏感操作的多人核准</p></li>
<li><p><strong>Sentinel</strong>－策略即程式碼，比ACL更複雜的邏輯</p></li>
</ul>
