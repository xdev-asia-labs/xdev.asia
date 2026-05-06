---
id: 019d8b30-b213-7001-c002-e0c5f8200113
title: 第 13 課：Kubernetes、AWS 和雲端驗證方法
slug: bai-13-kubernetes-aws-va-cloud-auth-methods
description: >-
  Kubernetes 驗證方法（服務帳戶令牌審核、綁定命名空間、綁定服務帳戶）、AWS 身份驗證方法（IAM 驗證、EC2 驗證、跨帳戶）、Azure
  驗證方法、GCP 驗證方法、SPIFFE 驗證方法（1.21 中新增）、工作負載驗證方法、GCP 驗證方法、SPIFFE 身份驗證方法（1.21
  中新增）、工作負載身份負載。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 13
section_title: 第 3 部分：身份驗證方法 - 身份驗證和授權
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault 從基礎到高級
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="最大寬度：100%;高度：自動；邊框半徑：12px；邊距底部：1.5rem;">
  <定義>
    <線性漸變 id="bg-95" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </線性漸層>
  </defs>

  <!-- 背景 -->
  <矩形寬度=“1200”高度=“340”rx=“12”填滿=“url（#bg-95）”/>

  <!-- 裝飾品 -->
  <g>
    <circle cx="972" cy="106" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="844" cy="218" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="716" cy="70" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="1088" cy="182" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="960" cy="34" r="14" fill="#f87171" opacity="0.05"/>
    <圓cx =“750”cy =“80”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“750”cy =“108”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“750”cy =“136”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“750”cy =“164”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <圓cx =“778”cy =“108”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <圓cx =“806”cy =“80”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“806”cy =“108”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“806”cy =“136”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“806”cy =“164”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“834”cy =“80”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“834”cy =“108”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <圓cx =“834”cy =“164”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <圓cx =“862”cy =“108”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <圓cx =“862”cy =“164”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“890”cy =“80”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“890”cy =“108”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“890”cy =“136”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <圓cx =“890”cy =“164”r =“1.5”填入=“#f87171”不透明度=“0.15”/>
    <line x1 =“600”y1 =“106”x2 =“1100”y2 =“186”筆畫=“#f87171”筆畫寬度=“0.5”不透明度=“0.1”/>
    <line x1 =“650”y1 =“136”x2 =“1050”y2 =“206”筆畫=“#f87171”筆觸寬度=“0.5”不透明度=“0.08”/>
    <多邊形點=「991.507041555162,135.5 991.507041555162,176.5 956,197 920.492958444838,176.5 920.492958,583958,583958,1395. 956,115”填滿=“無”描邊=“#f87171”描邊寬度=“1”不透明度=“0.12”/>
  </g>

  <!-- 重音欄 -->
  <矩形x =“60”y =“50”寬度=“4”高度=“60”rx =“2”填滿=“#f87171”/><!-- 類別徽章 -->
  <矩形x =“80”y =“50”寬度=“121”高度=“28”rx =“14”填滿=“#f87171”不透明度=“0.15”/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 13 堂課</text>

  <!-- 標題 -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">第 13 課：Kubernetes、AWS 與雲端驗證</tspan>
      <tspan x="60" dy="42">方法</tspan>
  </文字>

  <!-- 系列字幕 -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault 從基礎到進階</text>

  <!-- 部分 -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：驗證方法 - 驗證與授權</text>

  <!-- xDev 浮水印 -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-kubernetes-auth-method"><strong>1. Kubernetes 認證方法</strong></h2>

<p><strong>Kubernetes 驗證方法</strong>允許 Kubernetes 上的 Pod 使用 Kubernetes 服務帳戶令牌向 Vault 進行驗證。對於在 Kubernetes 上運行的工作負載來說，這是最自然的身份驗證方法 - 無需管理單獨的機密。 </p>

<h3 id="kien-truc-k8s-auth"><strong>架構</strong></h3>

<前><代碼>┌────────────────┐ ┌──────────────┐
│ Pod │ 1. 登入 với SA │ Vault │
│ (ServiceAccount)│ JWT 令牌 │ K8s Auth │
│ │ ────────────────▶ │ │
│ │ │ │
│ │ 4. Vault 代幣 │ │
│ │ ◀──────────────── │ │
└────────────────────┘ └──────┬────────┘
                                                │
                                       2. TokenReview API
                                          （驗證 SA 令牌）
                                                │
                                                ▼
                                         ┌────────────┐
                                         │ 庫伯內特斯 │
                                         │ API伺服器 │
                                         └────────────┘
</code></pre>

<h3 id="enable-k8s-auth"><strong>啟用並設定</strong></h3>

<pre><code class="language-bash"># 啟用 Kubernetes 驗證
vault auth enable kubernetes

# Cấu hình — Vault chạy trong Kubernetes
vault write auth/kubernetes/config \
  kubernetes_host =“https://kubernetes.default.svc:443"

# Cấu hình — Vault chạy ngoài Kubernetes
vault write auth/kubernetes/config \
  kubernetes_host="https://k8s-api.company.com:6443" \
  kubernetes_ca_cert=@/etc/vault/k8s-ca.pem \
  token_reviewer_jwt=@/etc/vault/k8s-reviewer-token
</code></pre>

<h3 id="tao-role-k8s"><strong>創造角色</strong></h3><pre><code class="language-bash"># 角色 cho 命名空間 cụ thể
vault write auth/kubernetes/role/webapp \
  bound_service_account_names="webapp-sa" \
  bound_service_account_namespaces =「生產」\
  token_policies =“webapp-policy，db-readonly”\
  token_ttl=1h \
  token_max_ttl=4小時

# 角色 cho nhiều 命名空間
vault write auth/kubernetes/role/monitoring \
  bound_service_account_names =「普羅米修斯-sa，grafana-sa」\
  bound_service_account_namespaces="監控、可觀察性" \
  token_policies =「監控唯讀」\
  token_ttl=30m

# 角色 với 通配符（tất cả 命名空間中的服務帳戶）
vault write auth/kubernetes/role/dev-all \
  bound_service_account_names =“*”\
  bound_service_account_namespaces =「開發」\
  token_policies="dev-readonly" \
  token_ttl=30m

# 別名來源
vault write auth/kubernetes/role/webapp \
  bound_service_account_names="webapp-sa" \
  bound_service_account_namespaces =「生產」\
  token_policies="webapp-policy" \
  alias_name_source="serviceaccount_name"
</code></pre>

<h3 id="login-tu-pod"><strong>從 Pod 登入</strong></h3>

<pre><code class="language-bash"># Service Account token tự động mount tại Pod
SA_TOKEN=$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)

# 登入
curl -s --request POST \
  --data "{\"jwt\": \"${SA_TOKEN}\", \"角色\": \"webapp\"}" \
  ${VAULT_ADDR}/v1/auth/kubernetes/login | ${VAULT_ADDR}/v1/auth/kubernetes/login | jq .

# Hoặc dùng Vault CLI
vault write auth/kubernetes/login \
  角色=webapp \
  jwt=@/var/run/secrets/kubernetes.io/serviceaccount/token
</code></pre>

<h3 id="kubernetes-rbac"><strong>Kubernetes RBAC cho Vault</strong></h3>

<pre><code class="language-yaml"># Vault cần ClusterRole để 驗證 SA 令牌
api版本：rbac.authorization.k8s.io/v1
種類：ClusterRoleBinding
元數據：
  名稱：vault-token-reviewer
角色參考：
  apiGroup：rbac.authorization.k8s.io
  種類：集群角色
  名稱：系統：授權委託者
科目：
  - 類型：服務帳戶
    名稱：金庫
    命名空間：保險庫
</code></pre>

<h2 id="2-aws-auth-method"><strong>2. AWS 驗證方法</strong></h2>

<p><strong>AWS Auth 方法</strong>允許 EC2 執行個體和 Lambda 函數使用 AWS IAM 或 EC2 元資料向 Vault 進行驗證 — 無需手動管理機密。 </p>

<h3 id="hai-loai-aws-auth"><strong>兩種類型的 AWS 驗證</strong></h3>

<表>
<標題>
<tr><th>類型</th><th>身份驗證方法</th><th>用例</th></tr>
</標題>
<正文>
<tr><td><strong>IAM 驗證</strong></td><td>簽署 STS GetCallerIdentity</td><td>EC2、Lambda、ECS、EKS、任何 AWS 工作負載</td></tr>
<tr><td><strong>EC2 驗證</strong></td><td>EC2 實例元資料（PKCS7 文件）</td><td>僅限 EC2 執行個體</td></tr>
</tbody>
</表>

<h3 id="cau-hinh-aws-iam-auth"><strong>AWS IAM 驗證</strong></h3>

<pre><code class="language-bash"># 啟用 AWS 驗證
vault auth enable aws

# Cấu hình AWS 憑證 cho Vault
vault write auth/aws/config/client \
  access_key="AKIAIOSFODNN7EXAMPLE" \
  Secret_key="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" \
  iam_server_id_header_value="vault.company.com"

# Tạo IAM 角色
vault write auth/aws/role/webapp \
  auth_type=iam \
  bound_iam_principal_arn="arn:aws:iam::123456789012:角色/webapp-角色" \
  token_policies="webapp-policy" \
  token_ttl=1h \
  token_max_ttl=4小時# 角色 cho nhiều IAM 主體
vault write auth/aws/role/services \
  auth_type=iam \
  bound_iam_principal_arn='["arn:aws:iam::123456789012:角色/服務-a","arn:aws:iam::123456789012:角色/服務-b"]' \
  token_policies =“服務策略”

# 跨帳戶（即 AWS 帳戶）
vault write auth/aws/config/sts/987654321098 \
  sts_role="arn:aws:iam::123456789012:角色/vault-sts-assume"

vault write auth/aws/role/cross-account \
  auth_type=iam \
  bound_iam_principal_arn="arn:aws:iam::987654321098:角色/外部應用程式" \
  token_policies="跨帳戶只讀"
</code></pre>

<h3 id="login-aws"><strong>從 AWS 工作負載登入</strong></h3>

<pre><code class="language-bash"># Từ EC2/Lambda/ECS — CLI
vault login -method=aws role=webapp

# API調用
vault write auth/aws/login \
  角色=webapp \
  iam_http_request_method="POST" \
  iam_request_url="$(echo -n 'https://sts.amazonaws.com/' | base64)" \
  iam_request_body="$(echo -n 'Action=GetCallerIdentity&Version=2011-06-15' | base64)" \
  iam_request_headers =“...”
</code></pre>

<h2 id="3-azure-auth-method"><strong>3. Azure 驗證方法</strong></h2>

<pre><code class="language-bash"># 啟用 Azure 驗證
vault auth enable azure

#Cấu hình
vault write auth/azure/config \
  tenant_id =“<租戶id>”\
  资源=“https://management.azure.com/" \
  client_id="<vault-app-id>" \
  client_secret="<vault-app-secret>"

# Tạo 角色 cho VM với Managed Identity
vault write auth/azure/role/webapp \
  bound_subscription_ids="<訂閱 ID>" \
  bound_resource_groups=“生產-rg”\
  bound_service_principal_ids="<託管身分主體 ID>" \
  token_policies="webapp-policy" \
  token_ttl=1h
</code></pre>

<h2 id="4-gcp-auth-method"><strong>4. GCP驗證方法</strong></h2>

<pre><code class="language-bash"># 啟用 GCP 驗證
vault auth enable gcp

#Cấu hình
vault write auth/gcp/config \
  憑證=@/etc/vault/gcp-credentials.json

# IAM 身份驗證（服務帳戶）
vault write auth/gcp/role/webapp \
  類型=“iam”\
  bound_service_accounts =“webapp-sa@project-id.iam.gserviceaccount.com”\
  token_policies="webapp-policy" \
  token_ttl=1h

# GCE 身份驗證（計算引擎實例）
vault write auth/gcp/role/gce-instances \
  類型=“gce”\
  bound_projects =「我的專案」\
  bound_zones="asia-southeast1-a,asia-southeast1-b" \
  bound_labels =「環境：生產，團隊：平台」\
  token_policies="gce-policy"
</code></pre>

<h2 id="5-spiffe-auth-method"><strong>5. SPIFFE 驗證方法（Vault 1.21）</strong></h2>

<p><strong>SPIFFE（適用於所有人的安全生產身分框架）</strong>驗證方法是 Vault 1.21 中的一項新功能，允許工作負載使用 SPIFFE SVID（SPIFFE 可驗證身分識別文件）進行驗證。 </p>

<h3 id="spiffe-concept"><strong>SPIFFE 概念</strong></h3>

<表>
<標題>
<tr><th>術語</th><th>描述</th></tr>
</標題>
<正文>
<tr><td><strong>SPIFFE ID</strong></td><td><code>spiffe://trust-domain/workload-identifier</code></td></tr> 形式的 URI
<tr><td><strong>SVID</strong></td><td>證明身分的文件（X.509 憑證或 JWT）</td></tr>
<tr><td><strong>SPIRE</strong></td><td>SPIFFE 運行時環境 - 最流行的實現</td></tr>
<tr><td><strong>信任網域</strong></td><td>信任網域（例如：<code>company.com</code>）</td></tr>
</tbody>
</表>

<pre><code class="language-bash"># 啟用 SPIFFE 驗證（Vault 1.21+）
vault auth enable spiffe# Cấu hình 信任域
vault write auth/spiffe/config \
  spiffe_trust_domain =“company.com”\
  spiffe_trust_bundle=@/etc/vault/spire-root-ca.pem

#陶角色
vault write auth/spiffe/role/webapp \
  bound_spiffe_ids=“spiffe://company.com/ns/product/sa/webapp”\
  token_policies="webapp-policy" \
  token_ttl=1h

# 通配符匹配
vault write auth/spiffe/role/production-all \
  bound_spiffe_id_patterns="spiffe://company.com/ns/product/*" \
  token_policies =“生產唯讀”
</code></pre>

<h2 id="6-workload-identity-best-practices"><strong>6.工作負載身分最佳實務</strong></h2>

<h3 id="chon-auth-method-phu-hop"><strong>選擇適當的驗證方法</strong></h3>

<表>
<標題>
<tr><th>平台</th><th>認證方式</th><th>備註</th></tr>
</標題>
<正文>
<tr><td>Kubernetes</td><td>Kubernetes Auth</td><td>最適合 K8s 工作負載</td></tr>
<tr><td>AWS EC2/Lambda/ECS</td><td>AWS IAM 身份驗證</td><td>優先於 EC2 身份驗證</td></tr>
<tr><td>Azure VM/功能</td><td>Azure Auth</td><td>使用託管身分</td></tr>
<tr><td>GCP GCE/GKE/函數</td><td>GCP Auth</td><td>IAM 或 GCE 類型</td></tr>
<tr><td>多平台/SPIRE</td><td>SPIFFE Auth</td><td>與平台無關的身份</td></tr>
<tr><td>CI/CD (GitHub/GitLab)</td><td>JWT Auth</td><td>來自 CI 平台的 OIDC 令牌</td></tr>
<tr><td>舊版/本地應用</td><td>AppRole</td><td>後備 cho 非雲端工作負載</td></tr>
</tbody>
</表>

<h3 id="least-privilege"><strong>最小權限</strong></h3>

<ul>
<li><p>每個服務/工作負載都有自己的角色 - 沒有共用角色</p></li>
<li><p>緊密綁定：特定服務帳戶、命名空間、項目</p></li>
<li><p>最短的令牌 TTL</p></li>
<li><p>根據特定路徑制定細化策略</p></li>
</ul>

<h3 id="multi-cluster"><strong>多集群 Kubernetes</strong></h3>

<pre><code class="language-bash"># Mount riêng cho mỗi cluster
vault auth enable -path=k8s-prod kubernetes
vault auth enable -path=k8s-staging kubernetes

# Cấu hình riêng biệt
vault write auth/k8s-prod/config \
  kubernetes_host="https://prod-k8s-api:6443" \
  kubernetes_ca_cert=@/etc/vault/prod-ca.pem

vault write auth/k8s-staging/config \
  kubernetes_host="https://staging-k8s-api:6443" \
  kubernetes_ca_cert=@/etc/vault/staging-ca.pem
</code></pre>

<h2 id="7-tong-ket"><strong>7.摘要</strong></h2>

<ul>
<li><p><strong>Kubernetes Auth</strong> - K8s 工作負載的標準，使用服務帳號令牌</p></li>
<li><p><strong>AWS IAM Auth</strong> - 所有 AWS 工作負載的首選，無需靜態憑證</p></li>
<li><p><strong>Azure/GCP Auth</strong> - Azure 託管身分和 GCP 服務帳戶相同</p></li>
<li><p><strong>SPIFFE Auth</strong> (1.21) — 平台無關、多雲/混合相容</p></li>
</ul>

<p>下一篇文章將深入探討 Vault 策略 - 使用 ACL、Sentinel 和 RBAC 的詳細存取控制機制。 </p>
