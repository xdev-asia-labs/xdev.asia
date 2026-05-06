---
id: 019d8b30-b219-7001-c002-e0c5f8200119
title: 第 19 課：Vault 代理和 Vault 代理
slug: bai-19-vault-agent-va-vault-proxy
description: Vault Agent 概述、自動驗證、範本渲染、檔案接收器、代理快取、Vault 代理、API 代理模式。比較代理與代理的部署模式。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 19
section_title: 第 5 部分：Vault 代理、代理和 Kubernetes 集成
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-1558" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-1558）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="818" cy="264" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1036" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="754" cy="160" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="972" cy="238" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="690" cy="56" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1 =“600”y1 =“64”x2 =“1100”y2 =“144”筆畫=“#fbbf24”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“94”x2 =“1050”y2 =“164”筆觸=“#fbbf24”筆觸寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「997.7749907475932,144.5 997.7749907475932,183.5 964,203 930.2250092524068,183.5930. 964,125”填充=“無”筆畫=“#fbbf24”筆畫寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#fbbf24”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#fbbf24”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — 第 19 課</text>

  <!-- 標題 -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 19 課：Vault 代理人與 Vault 代理人</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：Vault 代理程式、代理程式和 Kubernetes 整合</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-vault-agent-overview"><strong>1. Vault 代理人概述</strong></h2>

<p><strong>Vault Agent</strong> 是一個守護程序用戶端，與應用程式一起運行，自動處理身份驗證、令牌更新和秘密檢索。代理解決了“秘密零”問題 - 應用程式不需要知道如何使用 Vault 進行身份驗證。 </p>

<h3 id="chuc-nang-agent"><strong>主要功能</strong></h3>

<ul>
<li><p><strong>自動驗證</strong> — 自動驗證與更新令牌</p></li>
<li><p><strong>範本渲染</strong> - 將機密渲染到設定檔</p></li>
<li><p><strong>快取</strong> - 快取回應以減少 Vault 伺服器上的負載</p></li>
<li><p><strong>API 代理</strong> - 應用程式呼叫代理程式而不是直接呼叫 Vault</p></li>
</ul>

<h3 id="kien-truc-agent"><strong>架構</strong></h3>

<前><代碼>┌────────────────────────────────────────────────┐
│ 應用主機 │
│ │
│ ┌──────────┐ ┐────────────────┐ │
│ │ 應用程式 │ 讀取檔案 │ Vault Agent │ │
│ │ │ ◀──────────── │ │ │
│ │ │ （呈現 │ 自動驗證 │ │
│ │ │ 範本） │ 範本 │ │
│ │ │ │ 快取 │ │
│ └──────────┘ └────────┬────────┘ │
│ │ │
└──────────────────────────────────────┼──────────┘
                                       │
                              保險庫 API (HTTPS)
                                       │
                                       ▼
                               ┌────────────┐
                               │ 保管庫伺服器 │
                               └────────────┘
</code></pre>

<h2 id="2-auto-auth"><strong>2.自動驗證</strong></h2>

<p>自動驗證會自動使用 Vault 進行驗證並更新令牌。支援所有身份驗證方法：</p>

<pre><code class="language-hcl">#Vault-agent.hcl

vault {
  位址 = "https://vault.company.com:8200"
  tls_skip_verify = false
}自動驗證{
  方法“kubernetes”{
    mount_path =“auth/kubernetes”
    配置={
      角色=“網頁應用程式”
    }
  }

  # Lưu token vào 文件
  接收器「檔案」{
    配置={
      路徑 =“/tmp/vault-token”
      模式=0640
    }
  }

  # Lưu token vào file khác (wrapped)
  接收器「檔案」{
    包裹_TTL =“5m”
    配置={
      路徑 =“/tmp/vault-token-wrapped”
    }
  }
}
</code></pre>

<h3 id="auto-auth-approle"><strong>使用 AppRole 自動驗證</strong></h3>

<pre><code class="language-hcl">auto_auth {
  方法“approle”{
    mount_path =“auth/approle”
    配置={
      role_id_file_path = "/etc/vault/角色 ID"
      Secret_id_file_path =“/etc/vault/secret-id”
      刪除_secret_id_file_after_reading = true
    }
  }

  接收器「檔案」{
    配置={
      路徑 =“/tmp/vault-token”
    }
  }
}
</code></pre>

<h3 id="auto-auth-aws"><strong>使用 AWS IAM 自動驗證</strong></h3>

<pre><code class="language-hcl">auto_auth {
  方法“aws”{
    mount_path =“auth/aws”
    配置={
      類型=“iam”
      角色=“網頁應用程式”
      header_value =“vault.company.com”
    }
  }

  接收器「檔案」{
    配置={
      路徑 =“/tmp/vault-token”
    }
  }
}
</code></pre>

<h2 id="3-template-rendering"><strong>3.範本渲染</strong></h2>

<p>Vault Agent 使用<strong>Consul Template 語法</strong>將機密呈現到設定檔。當秘密發生變化時，模板會自動重新渲染。 </p>

<h3 id="cau-hinh-template"><strong>範本配置</strong></h3>

<pre><code class="language-hcl">#Vault-agent.hcl (tiếp)

模板{
  來源=“/etc/vault/templates/app.conf.tpl”
  目的地=“/etc/app/app.conf”
  燙髮 = 0640
  command = "systemctl reload app" # Chạy sau khi 渲染
  error_on_missing_key = true
}

模板{
  來源=“/etc/vault/templates/db.env.tpl”
  目的地=“/etc/app/db.env”
  燙髮 = 0600
}

# 內聯模板（không cần 檔案 tpl）
模板{
  內容 = "{{ 有秘密 \"secret/data/app/config\" }}DB_HOST={{ .Data.data.host }}{{ end }}"
  目的地=“/etc/app/db-host”
}
</code></pre>

<h3 id="template-syntax"><strong>範本語法</strong></h3>

<pre><code class="language-text"># /etc/vault/templates/app.conf.tpl

# KV v2 秘密
{{ 帶有秘密「秘密/資料/生產/資料庫」}}
DB_HOST={{ .Data.data.host }}
DB_PORT={{ .Data.data.port }}
DB_NAME={{ .Data.data.database }}
DB_USER={{ .Data.data.使用者名稱 }}
DB_PASS={{ .Data.data.password }}
{{結束}}

# 動態資料庫憑證
{{ 帶有秘密「database/creds/app-role」}}
DB_DYNAMIC_USER={{ .Data.使用者名稱 }}
DB_DYNAMIC_PASS={{ .Data.password }}
# 租約：{{ .LeaseID }} ({{ .LeaseDuration }}s)
{{結束}}

# PKI 證書
{{ 帶有秘密“pki/issue/app-cert”“common_name=app.company.com”“ttl=24h”}}
{{.Data.憑證}}
{{ .Data.private_key }}
{{結束}}

# 有條件的
{{ 帶有秘密「秘密/資料/生產/功能標誌」}}
{{ 如果.Data.data.enable_cache }}
CACHE_ENABLED=true
CACHE_TTL={{ .Data.data.cache_ttl }}
{{其他}}
CACHE_ENABLED=假
{{結束}}
{{結束}}
</code></pre>

<h3 id="env-template"><strong>環境變數範本</strong></h3><pre><code class="language-text"># /etc/vault/templates/db.env.tpl
{{ 帶有秘密「秘密/資料/生產/資料庫」-}}
導出 DB_HOST="{{ .Data.data.host }}"
導出 DB_PORT="{{ .Data.data.port }}"
導出 DB_USER="{{ .Data.data.使用者名稱 }}"
導出 DB_PASS="{{ .Data.data.password }}"
{{-結束}}
</code></pre>

<h2 id="4-agent-caching"><strong>4.代理快取</strong></h2>

<pre><code class="language-hcl"># 快取配置
緩存{
  use_auto_auth_token = true

  堅持{
    類型=“kubernetes”
    路徑 =“/vault/代理快取”
  }
}

偵聽器“tcp”{
  地址 =“127.0.0.1:8100”
  tls_disable = true
}
</code></pre>

<p>應用程式呼叫代理程式 (localhost:8100)，而不是直接呼叫 Vault 伺服器。代理程式快取回應並自動處理身份驗證。 </p>

<h2 id="5-vault-proxy"><strong>5.保險庫代理</strong></h2>

<p><strong>Vault Proxy</strong>（Vault 1.14+）是 Vault Agent 的簡化版本，專注於<strong>API 代理程式和快取</strong>，無需模板渲染。 </p>

<pre><code class="language-hcl">#Vault-proxy.hcl

vault {
  位址 = "https://vault.company.com:8200"
}

自動驗證{
  方法“kubernetes”{
    mount_path =“auth/kubernetes”
    配置={
      角色=“網頁應用程式”
    }
  }
}

api_代理{
  use_auto_auth_token = “強制”
}

緩存{
  use_auto_auth_token = true

  堅持{
    類型=“kubernetes”
    路徑 =“/vault/代理快取”
  }
}

偵聽器“tcp”{
  地址 =“127.0.0.1:8100”
  tls_disable = true
}
</code></pre>

<h3 id="static-secret-caching"><strong>靜態秘密快取</strong></h3>

<pre><code class="language-hcl"># 快取靜態機密 (KV v2)
緩存{
  use_auto_auth_token = true

  堅持{
    類型=“kubernetes”
    路徑 =“/vault/代理快取”
  }

  # 靜態秘密快取 (mới)
  static_secret_token_wait = "5s"
}
</code></pre>

<h2 id="6-agent-vs-proxy"><strong>6.代理與代理人－何時使用哪一個？ </strong></h2>

<表>
<標題>
<tr><th>功能</th><th>Vault代理</th><th>Vault代理</th></tr>
</標題>
<正文>
<tr><td>自動驗證</td><td>✅</td><td>✅</td></tr>
<tr><td>模板渲染</td><td>✅</td><td>❌</td></tr>
<tr><td>API代理</td><td>✅</td><td>✅</td></tr>
<tr><td>快取</td><td>✅</td><td>✅</td></tr>
<tr><td>流程主管</td><td>✅</td><td>❌</td></tr>
<tr><td>佔地面積</td><td>較大</td><td>較小</td></tr>
<tr><td>用例</td><td>需要渲染檔案</td><td>只需要代理API</td></tr>
</tbody>
</表>

<ul>
<li><p><strong>代理</strong>：當應用程式從檔案（設定檔、環境檔案）讀取機密時</p></li>
<li><p><strong>代理</strong>：應用直接呼叫Vault API時，需要快取和自動驗證</p></li>
</ul>

<h2 id="7-deployment-patterns"><strong>7.部署模式</strong></h2>

<h3 id="systemd"><strong>Systemd 服務</strong></h3>

<pre><code class="language-ini"># /etc/systemd/system/vault-agent.service
[單位]
描述=Vault 代理
需要=網路在線.target
After=網路在線.target

[服務]
使用者=保管庫
組=庫
ExecStart=/usr/bin/vault 代理-config=/etc/vault/agent.hcl
ExecReload=/bin/kill -HUP $MAINPID
KillSignal=SIGTERM
重新啟動=失敗時
重啟秒=5
限制NOFILE=65536

[安裝]
WantedBy=多用戶.target
</code></pre><h3 id="docker-sidecar"><strong>Docker Sidecar</strong></h3>

<pre><code class="language-yaml"># docker-compose.yml
服務：
  vault-agent:
    圖片：hashicorp/vault：1.21
    指令：vault代理-config=/vault/config/agent.hcl
    卷：
      - ./agent.hcl:/vault/config/agent.hcl:ro
      - ./模板:/vault/模板:ro
      - 共享秘密：/vault/secrets
    重新啟動：除非停止

  網路應用程式：
    圖：myapp：最新
    卷：
      - 共享秘密：/etc/app/secrets:ro
    取決於：
      - 保險庫代理

卷：
  共享秘密：
</code></pre>

<h3 id="k8s-init-container"><strong>Kubernetes 初始化容器</strong></h3>

<pre><code class="language-yaml">api版本：v1
種類: 豆莢
元數據：
  名稱： 網路應用程式
規格：
  初始化容器：
    - 名稱：vault-agent-init
      圖片：hashicorp/vault：1.21
      指令：[“vault”，“agent”，“-config=/vault/config/agent.hcl”，“-exit-after-auth”]
      體積安裝：
        - 姓名：vault-config
          掛載路徑：/vault/config
        - 名稱：金庫秘密
          掛載路徑：/vault/secrets
  容器：
    - 名稱：網頁應用程式
      圖：myapp：最新
      體積安裝：
        - 名稱：金庫秘密
          掛載路徑：/etc/app/secrets
          只讀：真
  卷：
    - 姓名：vault-config
      配置映射：
        姓名：vault-agent-config
    - name: vault-secrets
      空目錄：
        媒體：記憶體
</code></pre>

<h2 id="8-tong-ket"><strong>8。摘要</strong></h2>

<ul>
<li><p><strong>Vault Agent</strong> — 全功能守護程式：自動驗證、範本、快取、API 代理程式</p></li>
<li><p><strong>Vault 代理</strong> - 輕量級代理：自動驗證、快取、API 代理（無範本）</p></li>
<li><p><strong>自動驗證</strong> - 自動驗證和更新令牌，解析 Secret Zero</p></li>
<li><p><strong>範本</strong> - 將機密渲染到設定檔中，機密變更時會自動重新渲染</p></li>
<li><p><strong>部署模式</strong> - systemd、Docker sidecar、K8s init/sidecar 容器</p></li>
</ul>

<p>下一篇文章將深入探討 Kubernetes 上的 Vault — Helm 圖表、Vault Secrets Operator、CSI 提供者和代理注入器。 </p>
