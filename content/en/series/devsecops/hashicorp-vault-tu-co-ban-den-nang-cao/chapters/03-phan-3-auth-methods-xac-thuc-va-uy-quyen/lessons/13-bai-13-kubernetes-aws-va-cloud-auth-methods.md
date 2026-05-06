---
id: 019d8b30-b213-7001-c002-e0c5f8200113
title: 'Lesson 13: Kubernetes, AWS and Cloud Auth Methods'
slug: bai-13-kubernetes-aws-va-cloud-auth-methods
description: Kubernetes Auth Method (Service Account token review, bound namespaces, bound service accounts), AWS Auth Method (IAM auth, EC2 auth, cross-account), Azure Auth Method, GCP Auth Method, SPIFFE Auth Method (new in 1.21), best practices for workload identity.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 13
section_title: 'Part 3: Auth Methods - Authentication and Authorization'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault from Basic to Advanced
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: en
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
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Lesson 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 13: Kubernetes, AWS and Cloud Auth</tspan>
      <tspan x="60" dy="42">Methods</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Auth Methods - Authentication and Authorization</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-kubernetes-auth-method"><strong>1. Kubernetes Auth Method</strong></h2>

<p><strong>Kubernetes Auth Method</strong> allows Pods on Kubernetes to authenticate to Vault using Kubernetes Service Account tokens. This is the most natural authentication method for workloads running on Kubernetes — no need to manage separate secrets.</p>

<h3 id="kien-truc-k8s-auth"><strong>Architecture</strong></h3>

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

<h3 id="enable-k8s-auth"><strong>Enable and configure</strong></h3>

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

<h3 id="tao-role-k8s"><strong>Create roles</strong></h3>

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

<h3 id="login-tu-pod"><strong>Login from Pod</strong></h3>

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

<p><strong>AWS Auth Method</strong> allows EC2 instances and Lambda functions to authenticate to Vault using AWS IAM or EC2 metadata — no need to manually manage secrets.</p>

<h3 id="hai-loai-aws-auth"><strong>Two types of AWS Auth</strong></h3>

<table>
<thead>
<tr><th>Type</th><th>Authentication method</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td><strong>IAM Auth</strong></td><td>Sign STS GetCallerIdentity</td><td>EC2, Lambda, ECS, EKS, any AWS workload</td></tr>
<tr><td><strong>EC2 Auth</strong></td><td>EC2 instance metadata (PKCS7 document)</td><td>EC2 instances only</td></tr>
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

<h3 id="login-aws"><strong>Login from AWS workload</strong></h3>

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

<p><strong>SPIFFE (Secure Production Identity Framework for Everyone)</strong> Auth Method is a new feature in Vault 1.21, allowing workloads to authenticate using SPIFFE SVID (SPIFFE Verifiable Identity Document).</p>

<h3 id="spiffe-concept"><strong>SPIFFE Concepts</strong></h3>

<table>
<thead>
<tr><th>Term</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td><strong>SPIFFE ID</strong></td><td>URI of the form <code>spiffe://trust-domain/workload-identifier</code></td></tr>
<tr><td><strong>SVID</strong></td><td>Document proving identity (X.509 cert or JWT)</td></tr>
<tr><td><strong>SPIRE</strong></td><td>SPIFFE Runtime Environment — most popular implementation</td></tr>
<tr><td><strong>Trust Domain</strong></td><td>Domain of trust (for example: <code>company.com</code>)</td></tr>
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

<h3 id="chon-auth-method-phu-hop"><strong>Choose the appropriate Auth Method</strong></h3>

<table>
<thead>
<tr><th>Platform</th><th>Auth Method</th><th>Note</th></tr>
</thead>
<tbody>
<tr><td>Kubernetes</td><td>Kubernetes Auth</td><td>Most natural for K8s workloads</td></tr>
<tr><td>AWS EC2/Lambda/ECS</td><td>AWS IAM Auth</td><td>Preferred over EC2 auth</td></tr>
<tr><td>Azure VMs/Functions</td><td>Azure Auth</td><td>Use Managed Identity</td></tr>
<tr><td>GCP GCE/GKE/Functions</td><td>GCP Auth</td><td>IAM or GCE type</td></tr>
<tr><td>Multi-platform/SPIRE</td><td>SPIFFE Auth</td><td>Platform-agnostic identity</td></tr>
<tr><td>CI/CD (GitHub/GitLab)</td><td>JWT Auth</td><td>OIDC tokens from CI platform</td></tr>
<tr><td>Legacy/On-prem apps</td><td>AppRole</td><td>Fallback cho non-cloud workloads</td></tr>
</tbody>
</table>

<h3 id="least-privilege"><strong>Least Privilege</strong></h3>

<ul>
<li><p>Each service/workload has its own role — no shared roles</p></li>
<li><p>Tight binding: specific service account, namespace, project</p></li>
<li><p>Shortest possible Token TTL</p></li>
<li><p>Policies granular according to specific path</p></li>
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

<h2 id="7-tong-ket"><strong>7. Summary</strong></h2>

<ul>
<li><p><strong>Kubernetes Auth</strong> — standard for K8s workloads, uses Service Account token</p></li>
<li><p><strong>AWS IAM Auth</strong> — preferred for all AWS workloads, no static credentials needed</p></li>
<li><p><strong>Azure/GCP Auth</strong> — same for Azure Managed Identity and GCP Service Accounts</p></li>
<li><p><strong>SPIFFE Auth</strong> (1.21) — platform-agnostic, multi-cloud/hybrid compatible</p></li>
</ul>

<p>The next article will delve into Vault Policies — detailed access control mechanisms with ACLs, Sentinel and RBAC.</p>
