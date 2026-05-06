---
id: 019d8b30-b220-7001-c002-e0c5f8200120
title: 第 20 課：Kubernetes 上的 Vault - Helm、Operator 和 CSI
slug: bai-20-vault-tren-kubernetes-helm-operator-va-csi
description: >-
  使用 Helm Chart、Vault Secrets Operator (VSO)、Vault CSI Provider、Vault Agent
  Injector 在 Kubernetes 上部署 Vault。比較 VSO、CSI 和代理注入器。
duration_minutes: 220
is_free: true
video_url: null
sort_order: 20
section_title: 第 5 部分：Vault 代理、代理和 Kubernetes 集成
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-6026" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-6026）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="781" cy="273" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="962" cy="94" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="643" cy="175" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="824" cy="256" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="1005" cy="77" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#34d399”不透明度=“0.15”/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1 =“600”y1 =“163”x2 =“1100”y2 =“243”筆觸=“＃34d399”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“193”x2 =“1050”y2 =“263”筆觸=“＃34d399”筆畫寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=“1045.9089653438086,194 1045.9089653438086,232 1013,251 980.0910346561914,232 980.091034,191034 1013,175”填充=“無”筆畫=“#34d399”筆畫寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#34d399”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“＃34d399”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 20 堂課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 20 課：Kubernetes 上的 Vault - Helm，</tspan>
<tspan x="60" dy="42">營運商和 CSI</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：Vault 代理程式、代理程式和 Kubernetes 整合</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-deploy-vault-k8s"><strong>1.使用 Helm 在 Kubernetes 上部署 Vault</strong></h2>

<h3 id="cac-mode-deploy"><strong>部署模式</strong></h3>

<表>
<標題>
<tr><th>模式</th><th>描述</th><th>用例</th></tr>
</標題>
<正文>
<tr><td><strong>開發</strong></td><td>單一 Pod，記憶體儲存</td><td>開發、測試</td></tr>
<tr><td><strong>獨立</strong></td><td>單一 Pod，持久儲存</td><td>小型部署</td></tr>
<tr><td><strong>HA</strong></td><td>多 Pod、整合式儲存（Raft）</td><td>生產</td></tr>
<tr><td><strong>外部</strong></td><td>Vault在K8s之外運行，僅部署代理注入器</td><td>外部Vault伺服器</td></tr>
</tbody>
</表>

<h3 id="helm-install-ha"><strong>Helm 安裝（HA 模式）</strong></h3>

<pre><code class="language-bash"># 新增 Helm 儲存庫
helm repo add hashicorp https://helm.releases.hashicorp.com
helm repo update

# 安裝 Vault HA với 整合存儲
helm install vault hashicorp/vault \
  --命名空間庫\
  --建立命名空間\
  --set server.ha.enabled=true \
  --set server.ha.replicas=3 \
  --set server.ha.raft.enabled=true \
  --set server.dataStorage.size=10Gi \
  --set server.resources.requests.memory=256Mi \
  --set server.resources.requests.cpu=250m \
  --set server.resources.limits.memory=512Mi \
  --set server.resources.limits.cpu=500m \
  --set ui.enabled=true \
  --set ui.serviceType=叢集IP
</code></pre>

<h3 id="custom-values"><strong>自訂值</strong></h3>

<pre><code class="language-yaml">#values-product.yaml
伺服器：
  哈：
    啟用：真
    副本：3
    筏：
      啟用：真
      配置： |
        使用者介面=真

        偵聽器“tcp”{
          tls_禁用 = 0
          位址 =“[::]:8200”
          cluster_address =“[::]:8201”
          tls_cert_file =“/vault/userconfig/vault-tls/tls.crt”
          tls_key_file = “/vault/userconfig/vault-tls/tls.key”
        }存放“筏”{
          路徑 =“/vault/數據”
          重試加入{
            Leader_api_addr = "https://vault-0.vault-internal:8200"
            Leader_ca_cert_file = "/vault/userconfig/vault-tls/ca.crt"
          }
          重試加入{
            Leader_api_addr = "https://vault-1.vault-internal:8200"
            Leader_ca_cert_file = "/vault/userconfig/vault-tls/ca.crt"
          }
          重試加入{
            Leader_api_addr = "https://vault-2.vault-internal:8200"
            Leader_ca_cert_file = "/vault/userconfig/vault-tls/ca.crt"
          }
        }

        service_registration“kubernetes”{}

  資料儲存：
    尺寸：20Gi
    儲存類別：gp3

  額外卷數：
    - 類型：秘密
      名稱：vault-tls

  資源：
    要求：
      內存：512Mi
      中央處理器：500m
    限制：
      記憶體：1Gi
      中央處理器：1000m

  入口：
    啟用：真
    主持人：
      - 主機：vault.company.com

使用者介面：
  啟用：真

注射器：
  啟用：真
  副本：2
</code></pre>

<pre><code class="language-bash"># 安裝 với 自訂值
helm install vault hashicorp/vault \
  --命名空間庫\
  --建立命名空間\
  -f 值-生產.yaml
</code></pre>

<h3 id="init-unseal"><strong>初始化和解封</strong></h3>

<pre><code class="language-bash"># Init trênVault-0
kubectl exec -n vault vault-0 -- vault operator init \
  -密鑰份額=5 \
  -鍵閾值=3 \
  -format=json >Vault-init.json

# 解封Vault-0
kubectl exec -n vault vault-0 -- vault operator unseal &lt;key-1&gt;
kubectl exec -n vault vault-0 -- vault operator unseal &lt;key-2&gt;
kubectl exec -n vault vault-0 -- vault operator unseal &lt;key-3&gt;

# 加入Vault-1、Vault-2、Raft集群
kubectl exec -n vault vault-1 -- vault operator raft join \
  https://vault-0.vault-internal:8200

kubectl exec -n vault vault-2 -- vault operator raft join \
  https://vault-0.vault-internal:8200

# 解封Vault-1和Vault-2
kubectl exec -n vault vault-1 -- vault operator unseal &lt;key-1&gt;
# ...（對每個節點重複）
</code></pre>

<h2 id="2-vault-secrets-operator"><strong>2. Vault Secrets Operator (VSO)</strong></h2>

<p><strong>VSO</strong> 是官方 Kubernetes 營運商，自動將 Vault 中的機密同步到 Kubernetes Secrets。這是 Kubernetes 原生秘密管理的<strong>推薦</strong>方法。 </p>

<h3 id="install-vso"><strong>安裝 VSO</strong></h3>

<pre><code class="language-bash">helm 安裝vault-secrets-operator hashicorp/vault-secrets-operator \
  --命名空間vault-secrets-operator-system \
  --建立命名空間
</code></pre>

<h3 id="vso-custom-resources"><strong>自訂資源</strong></h3>

<pre><code class="language-yaml"># 1. VaultConnection — kết nối đến Vault 伺服器
api版本：secrets.hashicorp.com/v1beta1
種類：VaultConnection
元數據：
  名稱： 保險庫連接
  命名空間：應用程式
規格：
  地址：https://vault.company.com:8200
  跳過TLS驗證：假
  caCertSecretRef：vault-ca-cert

---
# 2. VaultAuth — xác thực với Vault
api版本：secrets.hashicorp.com/v1beta1
種類：VaultAuth
元數據：
  名稱：vault-auth
  命名空間：應用程式
規格：
  VaultConnectionRef：保管庫連接
  方法：kubernetes
  掛載：kubernetes
  庫伯內特：
    角色：網頁應用程式
    服務帳號：webapp-sa---
# 3. VaultStaticSecret — 同步 KV 秘密
api版本：secrets.hashicorp.com/v1beta1
種類：VaultStaticSecret
元數據：
  名稱：應用程式資料庫秘密
  命名空間：應用程式
規格：
  VaultAuthRef：vault-auth
  坐騎：秘密
  類型：kv-v2
  路徑：生產/資料庫
  刷新後：60s
  目的地：
    名稱：應用程式資料庫憑證
    創作：真實
    標籤：
      應用程式：網頁應用程式
    轉變：
      排除原始： true
      模板：
        連接字串：
          文字：“postgresql://{{ .Secrets.username }}:{{ .Secrets.password }}@{{ .Secrets.host }}:5432/{{ .Secrets.database }}”

---
# 4. VaultDynamicSecret — 動態資料庫憑證
api版本：secrets.hashicorp.com/v1beta1
種類：VaultDynamicSecret
元數據：
  名稱：應用程式動態資料庫
  命名空間：應用程式
規格：
  VaultAuthRef：vault-auth
  掛載：資料庫
  路徑：信用/應用程式角色
  更新百分比：67
  目的地：
    名稱：應用程式動態資料庫憑證
    創作：真實

---
# 5. VaultPKISecret — 自動頒發證書
api版本：secrets.hashicorp.com/v1beta1
種類：VaultPKISecret
元數據：
  名稱：app-tls-cert
  命名空間：應用程式
規格：
  VaultAuthRef：vault-auth
  安裝：pki
  角色：應用程式憑證
  學名：app.company.com
  替代名稱：
    - app.internal.company.com
  存活時間：24 小時
  到期偏移：1小時
  目的地：
    名稱：app-tls
    創作：真實
</code></pre>

<h3 id="su-dung-secret"><strong>在 Pod 中使用</strong></h3>

<pre><code class="language-yaml">api版本：apps/v1
種類：部署
元數據：
  名稱： 網路應用程式
  命名空間：應用程式
規格：
  模板：
    規格：
      服務帳號名稱：webapp-sa
      容器：
        - 名稱：網頁應用程式
          圖：myapp：最新
          環境來自：
            - 秘密參考：
                名稱：應用程式資料庫憑證
          體積安裝：
            - 名稱：tls
              掛載路徑：/etc/tls
              只讀：真
      卷：
        - 名稱：tls
          秘密：
            秘密名稱：app-tls
</code></pre>

<h2 id="3-vault-csi-provider"><strong>3. Vault CSI 供應商</strong></h2>

<p>Vault CSI 提供者使用<strong>Secrets Store CSI Driver</strong>將機密直接裝載到 Pod 磁碟區中，而無需建立 Kubernetes Secret。 </p>

<pre><code class="language-yaml"># SecretProviderClass
api版本：secrets-store.csi.x-k8s.io/v1
類型：SecretProviderClass
元數據：
  名稱：vault-db-creds
  命名空間：應用程式
規格：
  提供者：金庫
  參數：
    保管庫位址：「https://vault.company.com:8200"
    角色名稱：“webapp”
    對象： |
      - 物件名稱：“資料庫使用者名稱”
        秘密路徑：“秘密/數據/生產/資料庫”
        秘鑰：“用戶名”
      - 物件名稱：“資料庫密碼”
        秘密路徑：“秘密/數據/生產/資料庫”
        秘鑰：“密碼”
  # 可選擇同步到 K8s Secret
  秘密對象：
    - 秘密名稱：應用程式資料庫同步
      類型: 不透明
      數據：
        - 物件名稱：資料庫使用者名稱
          關鍵：用戶名
        - 物件名稱：資料庫密碼
          密鑰：密碼---
# Pod 儲存 CSI 卷
api版本：v1
種類: 豆莢
元數據：
  名稱： 網路應用程式
規格：
  服務帳號名稱：webapp-sa
  容器：
    - 名稱：網頁應用程式
      圖：myapp：最新
      體積安裝：
        - 名稱：秘密
          掛載路徑：/mnt/secrets
          只讀：真
  卷：
    - 名稱：秘密
      CSI：
        驅動程式：secrets-store.csi.k8s.io
        只讀：真
        體積屬性：
          SecretProviderClass：vault-db-creds
</code></pre>

<h2 id="4-vault-agent-injector"><strong>4. Vault 代理注入器</strong></h2>

<p>Agent Injector 使用 <strong>Kubernetes Mutating Webhook</strong> 透過註解自動將 Vault Agent sidecar 注入到 Pod 中。 </p>

<pre><code class="language-yaml">api版本：apps/v1
種類：部署
元數據：
  名稱： 網路應用程式
規格：
  模板：
    元數據：
      註：
        vault.hashicorp.com/agent-inject: "true"
        vault.hashicorp.com/role: "webapp"
        vault.hashicorp.com/agent-inject-secret-db.txt: "secret/data/production/db"
        vault.hashicorp.com/agent-inject-template-db.txt: |
          {{- 帶有秘密「秘密/資料/生產/資料庫」-}}
          DB_HOST={{ .Data.data.host }}
          DB_USER={{ .Data.data.使用者名稱 }}
          DB_PASS={{ .Data.data.password }}
          {{-結束}}
    規格：
      服務帳號名稱：webapp-sa
      容器：
        - 名稱：網頁應用程式
          圖：myapp：最新
          # 機密可在 /vault/secrets/db.txt 取得
</code></pre>

<h2 id="5-so-sanh"><strong>5。比較 VSO、CSI 與代理注入器</strong></h2>

<表>
<標題>
<tr><th>條件</th><th>VSO</th><th>CSI 提供者</th><th>代理注入器</th></tr>
</標題>
<正文>
<tr><td>機制</td><td>操作符 + CRD</td><td>CSI 驅動程式</td><td>變異 Webhook</td></tr>
<tr><td>K8s Secret</td><td>建立 K8s Secret</td><td>可選同步</td><td>否</td></tr>
<tr><td>動態機密</td><td>✅（VaultDynamicSecret）</td><td>限制</td><td>✅（模板）</td></tr>
<tr><td>PKI 憑證</td><td>✅ (VaultPKISecret)</td><td>限制</td><td>✅（範本）</td></tr>
<tr><td>自動旋轉</td><td>✅（refreshAfter）</td><td>單獨配置</td><td>✅（sidecar）</td></tr>
<tr><td>需要 Sidecar</td><td>否</td><td>否</td><td>是</td></tr>
<tr><td>資源開銷</td><td>低（一般操作員）</td><td>低</td><td>高（1個sidecar/pod）</td></tr>
<tr><td>推薦</td><td>✅推薦</td><td>OK cho simple</td><td>舊版</td></tr>
</tbody>
</表>

<h2 id="6-best-practices-k8s"><strong>6。 Kubernetes 最佳實務</strong></h2>

<ul>
<li><p>新部署優先考慮<strong>VSO</strong> - 原生 K8s 體驗，更少的開銷</p></li>
<li><p>為每個工作負載使用<strong>專用 ServiceAccount</strong></p></li>
<li><p>使用 Cloud KMS 啟用<strong>自動解封</strong></p></li>
<li><p>為 Vault Pod（非 root、唯讀檔案系統）設定<strong>Pod 安全性</strong></p></li>
<li><p>使用<strong>NetworkPolicy</strong>限制對保險箱的存取</p></li>
<li><p>將機密裝載到<strong>emptyDir（記憶體支援）</strong>而不是持久性磁碟區</p></li>
</ul>

<h2 id="7-tong-ket"><strong>7.摘要</strong></h2><ul>
<li><p><strong>Helm 圖表</strong> - 在 K8s 上部署具有整合儲存的 Vault HA</p></li>
<li><p><strong>VSO</strong> — 推薦，基於 CRD，自動將 Secret 同步到 K8s Secret</p></li>
<li><p><strong>CSI Provider</strong> — 將機密直接裝載到 Pod 磁碟區</p></li>
<li><p><strong>代理注入器</strong> - 遺留、基於 sidecar、註釋驅動</p></li>
</ul>

<p>下一節將重點放在 Vault 與實際應用程式的整合 — Spring Boot、Node.js、Terraform、Ansible 和 CI/CD 管道。 </p>
