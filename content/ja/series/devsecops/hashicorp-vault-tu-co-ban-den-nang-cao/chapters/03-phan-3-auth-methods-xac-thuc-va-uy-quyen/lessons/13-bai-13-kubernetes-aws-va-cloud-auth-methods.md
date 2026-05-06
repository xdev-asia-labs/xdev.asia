---
id: 019d8b30-b213-7001-c002-e0c5f8200113
title: 'レッスン 13: Kubernetes、AWS、およびクラウドの認証方法'
slug: bai-13-kubernetes-aws-va-cloud-auth-methods
description: Kubernetes 認証方法 (サービス アカウント トークン レビュー、バインドされた名前空間、バインドされたサービス アカウント)、AWS 認証方法 (IAM 認証、EC2 認証、クロスアカウント)、Azure 認証方法、GCP 認証方法、SPIFFE 認証方法 (1.21 の新機能)、ワークロード ID のベスト プラクティス。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 3: 認証方法 - 認証と認可'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault の基本から上級まで
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-95" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-95)"/>

  <!-- Decorations -->
  <g>
    <circle cx="972" cy="106" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="844" cy="218" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="716" cy="70" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="1088" cy="182" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="960" cy="34" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="106" x2="1100" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="136" x2="1050" y2="206" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="991.507041555162,135.5 991.507041555162,176.5 956,197 920.492958444838,176.5 920.492958444838,135.5 956,115" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 D​​evSecOps — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">レッスン 13: Kubernetes、AWS、クラウド認証</tspan>
      <tspan x="60" dy="42">Methods</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault の基本から上級まで</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 認証方法 - 認証と認可</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-kubernetes-auth-method"><strong>1. Kubernetes Auth Method</strong></h2>

<p><strong>Kubernetes 認証メソッド</strong> を使用すると、Kubernetes 上のポッドが Kubernetes サービス アカウント トークンを使用して Vault に対して認証できるようになります。これは、Kubernetes 上で実行されるワークロードにとって最も自然な認証方法であり、個別のシークレットを管理する必要はありません。</p>

<h3 id="kien-truc-k8s-auth"><strong>アーキテクチャ</strong></h3>

<pre><code>┌───────────────────┐                    ┌──────────────┐
│   Pod             │  1. Login với SA   │    Vault     │
│   (ServiceAccount)│     JWT token      │  K8s Auth    │
│                   │ ─────────────────▶ │              │
│                   │                    │              │
│                   │  4. Vault Token    │              │
│                   │ ◀───────────────── │              │
└───────────────────┘                    └──────┬───────┘
                                                │
                                       2. TokenReview API
                                          (verify SA token)
                                                │
                                                ▼
                                         ┌──────────────┐
                                         │  Kubernetes  │
                                         │  API Server  │
                                         └──────────────┘
</code></pre>

<h3 id="enable-k8s-auth"><strong>有効化および構成</strong></h3>

<pre><code class="language-bash"># Enable Kubernetes auth
vault auth enable kubernetes

# Cấu hình — Vault chạy trong Kubernetes
vault write auth/kubernetes/config \
  kubernetes_host="https://kubernetes.default.svc:443"

# Cấu hình — Vault chạy ngoài Kubernetes
vault write auth/kubernetes/config \
  kubernetes_host="https://k8s-api.company.com:6443" \
  kubernetes_ca_cert=@/etc/vault/k8s-ca.pem \
  token_reviewer_jwt=@/etc/vault/k8s-reviewer-token
</code></pre>

<h3 id="tao-role-k8s"><strong>役割の作成</strong></h3>

<pre><code class="language-bash"># Role cho namespace cụ thể
vault write auth/kubernetes/role/webapp \
  bound_service_account_names="webapp-sa" \
  bound_service_account_namespaces="production" \
  token_policies="webapp-policy,db-readonly" \
  token_ttl=1h \
  token_max_ttl=4h

# Role cho nhiều namespaces
vault write auth/kubernetes/role/monitoring \
  bound_service_account_names="prometheus-sa,grafana-sa" \
  bound_service_account_namespaces="monitoring,observability" \
  token_policies="monitoring-readonly" \
  token_ttl=30m

# Role với wildcard (tất cả service accounts trong namespace)
vault write auth/kubernetes/role/dev-all \
  bound_service_account_names="*" \
  bound_service_account_namespaces="development" \
  token_policies="dev-readonly" \
  token_ttl=30m

# Alias name source
vault write auth/kubernetes/role/webapp \
  bound_service_account_names="webapp-sa" \
  bound_service_account_namespaces="production" \
  token_policies="webapp-policy" \
  alias_name_source="serviceaccount_name"
</code></pre>

<h3 id="login-tu-pod"><strong>Pod からログイン</strong></h3>

<pre><code class="language-bash"># Service Account token tự động mount tại Pod
SA_TOKEN=$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)

# Login
curl -s --request POST \
  --data "{\"jwt\": \"${SA_TOKEN}\", \"role\": \"webapp\"}" \
  ${VAULT_ADDR}/v1/auth/kubernetes/login | jq .

# Hoặc dùng Vault CLI
vault write auth/kubernetes/login \
  role=webapp \
  jwt=@/var/run/secrets/kubernetes.io/serviceaccount/token
</code></pre>

<h3 id="kubernetes-rbac"><strong>Kubernetes RBAC cho Vault</strong></h3>

<pre><code class="language-yaml"># Vault cần ClusterRole để verify SA tokens
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: vault-token-reviewer
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:auth-delegator
subjects:
  - kind: ServiceAccount
    name: vault
    namespace: vault
</code></pre>

<h2 id="2-aws-auth-method"><strong>2. AWS Auth Method</strong></h2>

<p><strong>AWS 認証メソッド</strong> を使用すると、EC2 インスタンスと Lambda 関数が AWS IAM または EC2 メタデータを使用して Vault に対して認証できるようになります。シークレットを手動で管理する必要はありません。</p>

<h3 id="hai-loai-aws-auth"><strong>2 種類の AWS Auth</strong></h3>

<table>
<thead>
<tr><th>タイプ</th><th>認証方法</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td><strong>IAM Auth</strong></td><td>Sign STS GetCallerIdentity</td><td>EC2、Lambda、ECS、EKS、任意の AWS ワークロード</td></tr>
<tr><td><strong>EC2 Auth</strong></td><td>EC2 インスタンス メタデータ (PKCS7 ドキュメント)</td><td>EC2 インスタンスのみ</td></tr>
</tbody>
</table>

<h3 id="cau-hinh-aws-iam-auth"><strong>AWS IAM Auth</strong></h3>

<pre><code class="language-bash"># Enable AWS auth
vault auth enable aws

# Cấu hình AWS credentials cho Vault
vault write auth/aws/config/client \
  access_key="AKIAIOSFODNN7EXAMPLE" \
  secret_key="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" \
  iam_server_id_header_value="vault.company.com"

# Tạo IAM role
vault write auth/aws/role/webapp \
  auth_type=iam \
  bound_iam_principal_arn="arn:aws:iam::123456789012:role/webapp-role" \
  token_policies="webapp-policy" \
  token_ttl=1h \
  token_max_ttl=4h

# Role cho nhiều IAM principals
vault write auth/aws/role/services \
  auth_type=iam \
  bound_iam_principal_arn='["arn:aws:iam::123456789012:role/service-a","arn:aws:iam::123456789012:role/service-b"]' \
  token_policies="services-policy"

# Cross-account (từ AWS account khác)
vault write auth/aws/config/sts/987654321098 \
  sts_role="arn:aws:iam::123456789012:role/vault-sts-assume"

vault write auth/aws/role/cross-account \
  auth_type=iam \
  bound_iam_principal_arn="arn:aws:iam::987654321098:role/external-app" \
  token_policies="cross-account-readonly"
</code></pre>

<h3 id="login-aws"><strong>AWS ワークロードからログイン</strong></h3>

<pre><code class="language-bash"># Từ EC2/Lambda/ECS — CLI
vault login -method=aws role=webapp

# API call
vault write auth/aws/login \
  role=webapp \
  iam_http_request_method="POST" \
  iam_request_url="$(echo -n 'https://sts.amazonaws.com/' | base64)" \
  iam_request_body="$(echo -n 'Action=GetCallerIdentity&Version=2011-06-15' | base64)" \
  iam_request_headers="..."
</code></pre>

<h2 id="3-azure-auth-method"><strong>3. Azure Auth Method</strong></h2>

<pre><code class="language-bash"># Enable Azure auth
vault auth enable azure

# Cấu hình
vault write auth/azure/config \
  tenant_id="&lt;tenant-id&gt;" \
  resource="https://management.azure.com/" \
  client_id="&lt;vault-app-id&gt;" \
  client_secret="&lt;vault-app-secret&gt;"

# Tạo role cho VM với Managed Identity
vault write auth/azure/role/webapp \
  bound_subscription_ids="&lt;subscription-id&gt;" \
  bound_resource_groups="production-rg" \
  bound_service_principal_ids="&lt;managed-identity-principal-id&gt;" \
  token_policies="webapp-policy" \
  token_ttl=1h
</code></pre>

<h2 id="4-gcp-auth-method"><strong>4. GCP Auth Method</strong></h2>

<pre><code class="language-bash"># Enable GCP auth
vault auth enable gcp

# Cấu hình
vault write auth/gcp/config \
  credentials=@/etc/vault/gcp-credentials.json

# IAM auth (Service Account)
vault write auth/gcp/role/webapp \
  type="iam" \
  bound_service_accounts="webapp-sa@project-id.iam.gserviceaccount.com" \
  token_policies="webapp-policy" \
  token_ttl=1h

# GCE auth (Compute Engine instances)
vault write auth/gcp/role/gce-instances \
  type="gce" \
  bound_projects="my-project" \
  bound_zones="asia-southeast1-a,asia-southeast1-b" \
  bound_labels="env:production,team:platform" \
  token_policies="gce-policy"
</code></pre>

<h2 id="5-spiffe-auth-method"><strong>5. SPIFFE Auth Method (Vault 1.21)</strong></h2>

<p><strong>SPIFFE (Secure Production Identity Framework forEveryone)</strong> 認証方法は Vault 1.21 の新機能であり、SPIFFE SVID (SPIFFE Verifiable Identity Document) を使用してワークロードを認証できるようになります。</p>

<h3 id="spiffe-concept"><strong>SPIFFE Concepts</strong></h3>

<table>
<thead>
<tr><th>用語</th><th>説明</th></tr>
</thead>
<tbody>
<tr><td><strong>SPIFFE ID</strong></td><td>URI (形式: <code>spiffe://trust-domain/workload-identifier</code></td></tr>)
<tr><td><strong>SVID</strong></td><td>身元を証明する文書 (X.509 証明書または JWT)</td></tr>
<tr><td><strong>SPIRE</strong></td><td>SPIFFE ランタイム環境 — 最も一般的な実装</td></tr>
<tr><td><strong>信頼ドメイン</strong></td><td>信頼のドメイン (例: <code>company.com</code>)</td></tr>
</tbody>
</table>

<pre><code class="language-bash"># Enable SPIFFE auth (Vault 1.21+)
vault auth enable spiffe

# Cấu hình trust domain
vault write auth/spiffe/config \
  spiffe_trust_domain="company.com" \
  spiffe_trust_bundle=@/etc/vault/spire-root-ca.pem

# Tạo role
vault write auth/spiffe/role/webapp \
  bound_spiffe_ids="spiffe://company.com/ns/production/sa/webapp" \
  token_policies="webapp-policy" \
  token_ttl=1h

# Wildcard matching
vault write auth/spiffe/role/production-all \
  bound_spiffe_id_patterns="spiffe://company.com/ns/production/*" \
  token_policies="production-readonly"
</code></pre>

<h2 id="6-workload-identity-best-practices"><strong>6. Workload Identity Best Practices</strong></h2>

<h3 id="chon-auth-method-phu-hop"><strong>適切な認証方法を選択してください</strong></h3>

<table>
<thead>
<tr><th>プラットフォーム</th><th>認証方法</th><th>注</th></tr>
</thead>
<tbody>
<tr><td>Kubernetes</td><td>Kubernetes Auth</td><td>K8s ワークロードに最も自然</td></tr>
<tr><td>AWS EC2/Lambda/ECS</td><td>AWS IAM Auth</td><td>Preferred over EC2 auth</td></tr>
<tr><td>Azure VM/関数</td><td>Azure 認証</td><td>マネージド ID の使用</td></tr>
<tr><td>GCP GCE/GKE/関数</td><td>GCP 認証</td><td>IAM または GCE タイプ</td></tr>
<tr><td>Multi-platform/SPIRE</td><td>SPIFFE Auth</td><td>Platform-agnostic identity</td></tr>
<tr><td>CI/CD (GitHub/GitLab)</td><td>JWT Auth</td><td>CI プラットフォームからの OIDC トークン</td></tr>
<tr><td>Legacy/On-prem apps</td><td>AppRole</td><td>Fallback cho non-cloud workloads</td></tr>
</tbody>
</table>

<h3 id="least-privilege"><strong>Least Privilege</strong></h3>

<ul>
<li><p>各サービス/ワークロードには独自の役割があります。共有役割はありません</p></li>
<li><p>厳密なバインディング: 特定のサービス アカウント、名前空間、プロジェクト</p></li>
<li><p>可能な限り短いトークン TTL</p></li>
<li><p>特定のパスに応じた詳細なポリシー</p></li>
</ul>

<h3 id="multi-cluster"><strong>Multi-cluster Kubernetes</strong></h3>

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

<h2 id="7-tong-ket"><strong>7。概要</strong></h2>

<ul>
<li><p><strong>Kubernetes Auth</strong> — K8s ワークロードの標準、サービス アカウント トークン</p></li> を使用
<li><p><strong>AWS IAM Auth</strong> — すべての AWS ワークロードに推奨され、静的認証情報は必要ありません</p></li>
<li><p><strong>Azure/GCP Auth</strong> — Azure マネージド ID および GCP サービス アカウントについても同様</p></li>
<li><p><strong>SPIFFE Auth</strong> (1.21) — プラットフォームに依存しない、マルチクラウド/ハイブリッド互換</p></li>
</ul>

<p>次の記事では、Vault ポリシー、つまり ACL、Sentinel、RBAC を使用した詳細なアクセス制御メカニズムについて詳しく説明します。</p>
