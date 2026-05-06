---
id: 019d8b30-b218-7001-c002-e0c5f8200118
title: 第 18 課：KMIP、Consul、Nomad Secrets 引擎和自訂插件
slug: bai-18-kmip-consul-nomad-secrets-engines-va-custom-plugins
description: >-
  KMIP Secrets Engine、Consul Secrets Engine、Nomad Secrets Engine、Vault 外掛程式系統 —
  架構、目錄、使用 Go 開發自訂外掛程式。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 18
section_title: 第 4 部分：進階秘密引擎
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-43" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-43）”/>

  <!-- 裝飾品 -->
  <g>
    <圓cx =“894”cy =“252”r =“22”填入=“#f472b6”不透明度=“0.07”/>
    <circle cx="688" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="982" cy="140" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="776" cy="214" r="28" fill="#f472b6" opacity="0.13"/>
    <圓cx =“1070”cy =“288”r =“20”填入=“#f472b6”不透明度=“0.05”/>
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
    <line x1 =“600”y1 =“112”x2 =“1100”y2 =“192”筆畫=“#f472b6”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“142”x2 =“1050”y2 =“212”筆畫=“#f472b6”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「1035.38268590218,198.5 1035.38268590218,225.5 1012,239 988.6173140978201,225.5 98.61738.61738. 1012,185”填入=“無”描邊=“#f472b6”描邊寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#f472b6”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#f472b6”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 18 堂課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 18 課：KMIP、領事、遊牧秘密</tspan>
<tspan x="60" dy="42">引擎與自訂外掛程式</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階機密引擎</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-kmip-secrets-engine"><strong>1. KMIP 秘密引擎（企業）</strong></h2>

<p><strong>KMIP（金鑰管理互通協定）</strong>是用於加密金鑰管理的 OASIS 標準協定。 KMIP Secrets Engine 允許 Vault 充當<strong>KMIP 伺服器</strong>，為支援 KMIP 的資料庫、儲存系統和應用程式提供金鑰管理。 </p>

<h3 id="use-cases-kmip"><strong>用例</strong></h3>

<ul>
<li><p><strong>MongoDB Enterprise</strong> — 使用 KMIP 進行靜態加密</p></li>
<li><p><strong>MySQL Enterprise</strong> — TDE（透明資料加密）</p></li>
<li><p><strong>VMware vSphere</strong> — 虛擬機器加密</p></li>
<li><p><strong>NetApp</strong> — 儲存加密</p></li>
</ul>

<h3 id="setup-kmip"><strong>設定 KMIP</strong></h3>

<pre><code class="language-bash"># 啟用 KMIP
vault secrets enable kmip

#Cấu hình KMIP 監聽器
vault write kmip/config \
  Listen_addrs =“0.0.0.0:5696”\
  tls_ca_key_type="ec" \
  tls_ca_key_bits=256 \
  default_tls_client_key_type="ec" \
  default_tls_client_key_bits=256

# Tạo 範圍（邏輯分離）
vault write -f kmip/scope/mongodb

# Tạo 角色範圍大
vault write kmip/scope/mongodb/role/admin \
  操作_啟動=真\
  操作_建立=真\
  操作_銷毀=真\
  operation_discover_versions=true \
  操作_get=true \
  操作_定位=真\
  操作重設密鑰=true

# Sinh 用戶端憑證 cho MongoDB
vault write -format=json kmip/scope/mongodb/role/admin/credential/generate \
  格式=pem > mongodb-kmip-creds.json

# 提取憑證和密鑰
貓 mongodb-kmip-creds.json | jq -r '.data.certificate' > client.pem
貓 mongodb-kmip-creds.json | jq -r '.data.private_key' >> client.pem
貓 mongodb-kmip-creds.json | jq -r '.data.ca_chain[]' > ca.pem
</code></pre>

<h3 id="mongodb-kmip"><strong>有 KMIP Vault 的 MongoDB</strong></h3>

<pre><code class="language-yaml"># mongod.conf
安全：
  啟用加密： true
  公里普：
    伺服器名稱：vault.company.com
    埠：5696
    用戶端憑證檔案：/etc/mongodb/client.pem
    伺服器CA檔：/etc/mongodb/ca.pem
    keyStatePollingSeconds：60
</code></pre>

<h2 id="2-consul-secrets-engine"><strong>2.領事秘密引擎</strong></h2><p><strong>Consul Secrets Engine</strong>產生<strong>動態Consul ACL令牌</strong>，允許應用程式使用短期憑證存取Consul服務網格和KV儲存。 </p>

<pre><code class="language-bash"># 啟用 Consul 秘密引擎
vault secrets enable consul

# Cấu hình kết nối 領事
vault write consul/config/access \
  地址=“consul.company.com:8500”\
  令牌=“<領事管理令牌>”

#陶角色
vault write consul/roles/app-readonly \
  策略=“應用程式只讀策略”\
  生存時間=1小時\
  最大生存時間=4小時

# 領事政策 (tạo trước trên Consul)
# 應用程式唯讀策略：
# key_prefix "app/" { 策略 = "讀取" }
# service_prefix "" { 策略 = "讀取" }

# Sinh 動態 Consul 令牌
vault read consul/creds/app-readonly
# 令牌：2f76e8b4-a3d0-...
# 租約持續時間：1小時

# 令牌 tự động 撤銷 khi hết 租賃
</code></pre>

<h2 id="3-nomad-secrets-engine"><strong>3.游牧秘密引擎</strong></h2>

<p><strong>Nomad Secrets Engine</strong> sinh <strong>動態 Nomad ACL 令牌</strong>。 </p>

<pre><code class="language-bash"># 啟用 Nomad 秘密引擎
vault secrets enable nomad

#Cấu hình
vault write nomad/config/access \
  位址=“https://nomad.company.com:4646" \
  令牌=“<游牧管理令牌>”

#陶角色
vault write nomad/role/deploy \
  策略=“部署策略”\
  類型=“客戶端”\
  TTL=30m

# Sinh Nomad 代幣
vault read nomad/creds/deploy
# 秘密 ID：5e1c1a...
# accessor_id: 3d2b...
</code></pre>

<h2 id="4-vault-plugin-system"><strong>4. Vault插件系統</strong></h2>

<p>Vault 具有基於插件的架構 - 所有秘密引擎和身份驗證方法都是插件。您可以使用 Go 開發自訂外掛程式。 </p>

<h3 id="plugin-architecture"><strong>外掛架構</strong></h3>

<前><代碼>┌────────────────────────────────────────────────┐
│ 保管庫伺服器 │
│ │
│ ┌────────────┐ ┐──────────────┐ │
│ │ 內建 │ │ 外部 │ │
│ │ 插件 │ │ 插件 │ │
│ │ (kv, 運輸, │ │ (定制, │ │
│ │ pki, aws) │ │ 社區) │ │
│ └────────────┘ └──────┬────────┘ │
│ │ │
│ 基於 Unix Socket 的 gRPC │
│（相互驗證）│
│ │ │
│ ┌──────┴────────┐ │
│ │ 外掛程式二進位 │ │
│ │ （單獨 │ │
│ │ 過程） │ │
│ └──────────────┘ │
└──────────────────────────────────────────────────┘
</code></pre>

<h3 id="plugin-catalog"><strong>外掛目錄</strong></h3>

<pre><code class="language-bash"># Liệt kê 內建插件
vault plugin list

# Liệt kê chỉ 秘密插件
vault plugin list secret

# 授權插件
vault plugin list auth

# Đăng ký 自訂插件
vault plugin register -sha256="$(sha256sum vault-plugin-myengine | cut -d' ' -f1)" \
  秘密庫-插件-myengine

# 啟用自訂插件
vault secrets enable -path=myengine vault-plugin-myengine
</code></pre>

<h3 id="developing-custom-plugin"><strong>開發自訂秘密引擎</strong></h3>

<pre><code class="language-go">// main.go
包主導入（
    “作業系統”
    “github.com/hashicorp/go-hclog”
    “github.com/hashicorp/vault/api”
    “github.com/hashicorp/vault/sdk/framework”
    “github.com/hashicorp/vault/sdk/邏輯”
    “github.com/hashicorp/vault/sdk/plugin”
）

函數主() {
    apiClientMeta := &api.PluginAPIClientMeta{}
    標誌 := apiClientMeta.FlagSet()
    flags.Parse(os.Args[1:])

    tlsConfig := apiClientMeta.GetTLSConfig()
    tlsProviderFunc := api.VaultPluginTLSProvider(tlsConfig)

    錯誤 := 插件.ServeMultiplex(&插件.ServeOpts{
        BackendFactoryFunc：工廠，
        TLSProviderFunc：tlsProviderFunc，
    })
    如果錯誤！ = nil {
        記錄器 := hclog.New(&hclog.LoggerOptions{})
        logger.Error("插件關閉", "錯誤", err)
        os.退出(1)
    }
}

func Factory(ctx context.Context, conf *邏輯.BackendConfig) (邏輯.Backend, 錯誤) {
    b := &後端{}
    b.Backend = &framework.Backend{
        幫助：“我的自訂秘密引擎”，
        BackendType: 邏輯.TypeLogical,
        路徑：[]*framework.Path{
            b.pathCreds(),
            b.pathConfig(),
        },
        秘密：[]*framework.Secret{
            b.secretCreds(),
        },
    }
    if err := b.Setup(ctx, conf);錯誤！ =零{
        回傳零，錯誤
    }
    返回b，無
}

類型後端結構體{
    *框架.後端
}
</code></pre>

<h3 id="plugin- Multiplexing"><strong>外掛程式多重化</strong></h3>

<p>外掛程式多重化（Vault 1.12+）允許一個外掛程式為多個安裝提供服務，從而減少資源使用：</p>

<pre><code class="language-go">// 使用plugin.ServeMultiplex thay vì plugin.Serve
錯誤 := 插件.ServeMultiplex(&插件.ServeOpts{
    BackendFactoryFunc：工廠，
    TLSProviderFunc：tlsProviderFunc，
})
</code></pre>

<h3 id="versioned-plugins"><strong>版本化外掛</strong></h3>

<pre><code class="language-bash"># Đăng ký 外掛程式版本 mới
vault plugin register \
  -sha256=“...”\
  -版本=“v2.0.0”\
  秘密庫-插件-myengine

# Liệt kê 版本
vault plugin info secret vault-plugin-myengine

# 腳位安裝 đến 版本 cụ thể
vault secrets tune -plugin-version="v2.0.0" myengine/

# 重新載入外掛程式（零停機）
vault plugin reload -plugin vault-plugin-myengine
</code></pre>

<h2 id="5-community-plugins"><strong>5.著名的社群外掛</strong></h2>

<表>
<標題>
<tr><th>外掛程式</th><th>描述</th></tr>
</標題>
<正文>
<tr><td>vault-plugin-secrets-github</td><td>動態 GitHub 令牌</td></tr>
<tr><td>vault-plugin-secrets-kafka</td><td>Kafka 憑證</td></tr>
<tr><td>vault-plugin-secrets-artifactory</td><td>JFrog Artifactory 代幣</td></tr>
<tr><td>vault-plugin-auth-kerberos</td><td>Kerberos/SPNEGO 驗證</td></tr>
<tr><td>vault-plugin-secrets-openldap</td><td>OpenLDAP 憑證</td></tr>
</tbody>
</表>

<h2 id="6-tong-ket"><strong>6。摘要</strong></h2>

<ul>
<li><p><strong>KMIP</strong> — 標準金鑰管理、MongoDB/MySQL/VMware 整合</p></li>
<li><p><strong>Consul/Nomad Engines</strong> — HashiCorp 生態系的動態 ACL 代幣</p></li>
<li><p><strong>外掛系統</strong> - 可擴充架構，使用 Go 的自訂外掛程式</p></li>
<li><p><strong>外掛程式多重化</strong> - 透過多重安裝提高效能</p></li>
</ul><p>下一節將探討 Vault Agent、Vault Proxy 和 Kubernetes 整合 - 如何自動傳遞機密機密給應用程式。 </p>
