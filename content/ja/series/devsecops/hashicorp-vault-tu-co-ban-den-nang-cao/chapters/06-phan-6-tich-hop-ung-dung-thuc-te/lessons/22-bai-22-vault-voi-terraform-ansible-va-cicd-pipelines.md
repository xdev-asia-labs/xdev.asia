---
id: 019d8b30-b222-7001-c002-e0c5f8200122
title: 'レッスン 22: Terraform、Ansible、CI/CD パイプラインを使用した Vault'
slug: bai-22-vault-voi-terraform-ansible-va-cicd-pipelines
description: Terraform Vault Provider, Ansible Vault lookup, CI/CD integration, GitHub Actions OIDC, GitLab CI JWT, Jenkins, ArgoCD Vault Plugin, External Secrets Operator.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 22
section_title: 'パート 6: 実際のアプリケーションの統合'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault の基本から上級まで
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9593" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9593)"/>

  <!-- Decorations -->
  <g>
    <circle cx="899" cy="167" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="698" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="997" cy="85" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="796" cy="44" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="1095" cy="263" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="77" x2="1100" y2="157" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="107" x2="1050" y2="177" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1004.712812921102,161 1004.712812921102,193 977,209 949.287187078898,193 949.287187078898,161 977,145" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 D​​evSecOps — レッスン 22</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">レッスン 22: Terraform、Ansible、</tspan> を使用した Vault
      <tspan x="60" dy="42">CI/CD Pipelines</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault の基本から上級まで</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: 実用的なアプリケーションの統合</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-terraform-vault-provider"><strong>1. Terraform Vault Provider</strong></h2>

<p><strong>Terraform Vault Provider</strong> により、コードとしての Vault 構成管理が可能になります。シークレット エンジン、認証方法、ポリシー、エンティティ、グループはすべて Git でバージョン管理されます。</p>

<h3 id="cau-hinh-provider"><strong>プロバイダー構成</strong></h3>

<pre><code class="language-hcl"># providers.tf
terraform {
  required_providers {
    vault = {
      source  = "hashicorp/vault"
      version = "~> 4.0"
    }
  }
}

provider "vault" {
  address = "https://vault.company.com:8200"
  # Auth qua VAULT_TOKEN env var hoặc:
  # auth_login {
  #   path = "auth/approle/login"
  #   parameters = {
  #     role_id   = var.vault_role_id
  #     secret_id = var.vault_secret_id
  #   }
  # }
}
</code></pre>

<h3 id="quan-ly-secrets-engines"><strong>シークレット エンジンの管理</strong></h3>

<pre><code class="language-hcl"># secrets-engines.tf

# KV v2
resource "vault_mount" "kv" {
  path        = "secret"
  type        = "kv-v2"
  description = "KV v2 secrets engine"
  options = {
    version = "2"
    max_versions = 10
  }
}

# Database secrets engine
resource "vault_mount" "database" {
  path = "database"
  type = "database"
}

resource "vault_database_secret_backend_connection" "postgres" {
  backend       = vault_mount.database.path
  name          = "production-postgres"
  allowed_roles = ["app-role", "readonly-role"]

  postgresql {
    connection_url = "postgresql://{{username}}:{{password}}@db.company.com:5432/production"
    username       = var.db_admin_user
    password       = var.db_admin_password
  }
}

resource "vault_database_secret_backend_role" "app_role" {
  backend             = vault_mount.database.path
  name                = "app-role"
  db_name             = vault_database_secret_backend_connection.postgres.name
  default_ttl         = 3600
  max_ttl             = 14400
  creation_statements = [
    "CREATE ROLE \"{{name}}\" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}';",
    "GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO \"{{name}}\";",
  ]
  revocation_statements = [
    "REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM \"{{name}}\";",
    "DROP ROLE IF EXISTS \"{{name}}\";",
  ]
}

# PKI
resource "vault_mount" "pki" {
  path                  = "pki"
  type                  = "pki"
  max_lease_ttl_seconds = 315360000  # 10 years
}

resource "vault_pki_secret_backend_root_cert" "root" {
  backend     = vault_mount.pki.path
  type        = "internal"
  common_name = "Company Root CA"
  ttl         = "315360000"
}
</code></pre>

<h3 id="quan-ly-auth-methods"><strong>認証方法の管理</strong></h3>

<pre><code class="language-hcl"># auth.tf

# Kubernetes auth
resource "vault_auth_backend" "kubernetes" {
  type = "kubernetes"
  path = "kubernetes"
}

resource "vault_kubernetes_auth_backend_config" "config" {
  backend            = vault_auth_backend.kubernetes.path
  kubernetes_host    = "https://kubernetes.default.svc:443"
}

resource "vault_kubernetes_auth_backend_role" "webapp" {
  backend                          = vault_auth_backend.kubernetes.path
  role_name                        = "webapp"
  bound_service_account_names      = ["webapp-sa"]
  bound_service_account_namespaces = ["production"]
  token_policies                   = ["webapp-policy"]
  token_ttl                        = 3600
}

# AppRole
resource "vault_auth_backend" "approle" {
  type = "approle"
}

resource "vault_approle_auth_backend_role" "cicd" {
  backend        = vault_auth_backend.approle.path
  role_name      = "cicd-pipeline"
  token_policies = ["cicd-deploy"]
  token_ttl      = 1800
  secret_id_ttl  = 600
  secret_id_num_uses = 1
}
</code></pre>

<h3 id="quan-ly-policies"><strong>ポリシー管理</strong></h3>

<pre><code class="language-hcl"># policies.tf

resource "vault_policy" "webapp" {
  name   = "webapp-policy"
  policy = file("policies/webapp.hcl")
}

resource "vault_policy" "cicd" {
  name = "cicd-deploy"
  policy = &lt;&lt;EOT
path "secret/data/production/*" {
  capabilities = ["read"]
}
path "database/creds/app-role" {
  capabilities = ["read"]
}
EOT
}
</code></pre>

<h3 id="doc-secrets-tu-vault"><strong>Terraform の Vault からシークレットを読み取る</strong></h3>

<pre><code class="language-hcl"># Đọc secret để dùng trong Terraform resources
data "vault_kv_secret_v2" "db_creds" {
  mount = "secret"
  name  = "production/db"
}

resource "aws_db_instance" "production" {
  engine   = "postgres"
  username = data.vault_kv_secret_v2.db_creds.data["username"]
  password = data.vault_kv_secret_v2.db_creds.data["password"]
  # ... other config
}
</code></pre>

<h2 id="2-ansible-vault-integration"><strong>2。 Vault</strong></h2> を使用した Ansible

<h3 id="ansible-lookup-plugin"><strong>Lookup Plugin</strong></h3>

<pre><code class="language-yaml"># playbook.yml
- name: Deploy application
  hosts: webservers
  vars:
    db_password: "{{ lookup('hashi_vault', 'secret/data/production/db:password') }}"
    api_key: "{{ lookup('hashi_vault', 'secret/data/production/api:key') }}"

  tasks:
    - name: Configure application
      template:
        src: app.conf.j2
        dest: /etc/app/app.conf
        mode: '0640'
      vars:
        db_host: "{{ lookup('hashi_vault', 'secret/data/production/db:host') }}"

    - name: Get dynamic database credentials
      set_fact:
        db_creds: "{{ lookup('hashi_vault', 'database/creds/deploy-role') }}"

    - name: Run database migration
      command: ./migrate.sh
      environment:
        DB_USER: "{{ db_creds.username }}"
        DB_PASS: "{{ db_creds.password }}"
</code></pre>

<h3 id="ansible-modules"><strong>Ansible Collection</strong></h3>

<pre><code class="language-bash"># Install collection
ansible-galaxy collection install community.hashi_vault
</code></pre>

<pre><code class="language-yaml">- name: Read KV secret
  community.hashi_vault.vault_kv2_get:
    url: https://vault.company.com:8200
    engine_mount_point: secret
    path: production/db
    auth_method: approle
    role_id: "{{ vault_role_id }}"
    secret_id: "{{ vault_secret_id }}"
  register: db_secret

- name: Write KV secret
  community.hashi_vault.vault_kv2_write:
    url: https://vault.company.com:8200
    engine_mount_point: secret
    path: production/app/deploy-info
    data:
      version: "{{ app_version }}"
      deployed_by: "{{ ansible_user_id }}"
      deployed_at: "{{ ansible_date_time.iso8601 }}"
</code></pre>

<h2 id="3-cicd-integration"><strong>3. CI/CD Integration</strong></h2>

<h3 id="github-actions-oidc"><strong>GitHub Actions (OIDC — Recommended)</strong></h3>

<pre><code class="language-yaml"># .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

permissions:
  id-token: write
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Get secrets from Vault
        uses: hashicorp/vault-action@v3
        with:
          url: https://vault.company.com:8200
          method: jwt
          path: github-actions
          role: my-app
          jwtGithubAudience: https://github.com/my-org
          exportEnv: true
          secrets: |
            secret/data/production/db username | DB_USER ;
            secret/data/production/db password | DB_PASS ;
            secret/data/production/registry token | REGISTRY_TOKEN

      - name: Build and push
        run: |
          echo "$REGISTRY_TOKEN" | docker login -u _token --password-stdin registry.company.com
          docker build -t registry.company.com/myapp:${{ github.sha }} .
          docker push registry.company.com/myapp:${{ github.sha }}
</code></pre>

<h3 id="argocd-vault-plugin"><strong>ArgoCD Vault Plugin</strong></h3>

<pre><code class="language-yaml"># ArgoCD Application manifest
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: webapp
spec:
  source:
    repoURL: https://github.com/company/webapp
    path: k8s
    plugin:
      name: argocd-vault-plugin
      env:
        - name: AVP_TYPE
          value: vault
        - name: AVP_AUTH_TYPE
          value: k8s
        - name: VAULT_ADDR
          value: https://vault.company.com:8200
        - name: AVP_K8S_ROLE
          value: argocd
</code></pre>

<pre><code class="language-yaml"># k8s/secret.yaml (template)
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
  annotations:
    avp.kubernetes.io/path: "secret/data/production/webapp"
type: Opaque
stringData:
  DB_PASSWORD: &lt;password&gt;
  API_KEY: &lt;api_key&gt;
</code></pre>

<h3 id="external-secrets-operator"><strong>External Secrets Operator</strong></h3>

<pre><code class="language-yaml"># ClusterSecretStore
apiVersion: external-secrets.io/v1beta1
kind: ClusterSecretStore
metadata:
  name: vault-store
spec:
  provider:
    vault:
      server: "https://vault.company.com:8200"
      path: "secret"
      version: "v2"
      auth:
        kubernetes:
          mountPath: "kubernetes"
          role: "external-secrets"
          serviceAccountRef:
            name: external-secrets-sa

---
# ExternalSecret
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: app-db-secret
  namespace: production
spec:
  refreshInterval: 1m
  secretStoreRef:
    kind: ClusterSecretStore
    name: vault-store
  target:
    name: app-db-credentials
    creationPolicy: Owner
  data:
    - secretKey: username
      remoteRef:
        key: production/db
        property: username
    - secretKey: password
      remoteRef:
        key: production/db
        property: password
</code></pre>

<h2 id="4-gitops-workflow"><strong>4. Vault trong GitOps Workflow</strong></h2>

<pre><code>┌─────────────┐   Push config    ┌──────────────┐
│  Developer  │ ───────────────▶ │     Git      │
│             │                  │  (manifests  │
└─────────────┘                  │   + secret   │
                                 │   placeholders│
                                 └──────┬───────┘
                                        │
                                   ArgoCD / Flux
                                        │
                                        ▼
                                 ┌──────────────┐
                                 │  AVP / ESO   │
                                 │  (resolve    │
                                 │   secrets)   │
                                 └──────┬───────┘
                                        │
                           Fetch secrets │
                                        ▼
                                 ┌──────────────┐
                                 │    Vault     │
                                 │              │
                                 └──────────────┘
</code></pre>

<h2 id="5-tong-ket"><strong>5。概要</strong></h2>

<ul>
<li><p><strong>Terraform Vault Provider</strong> — Vault 構成をコードとして、すべての Vault セットアップを管理</p></li>
<li><p><strong>Ansible</strong> — 運用ワークフローのプラグインとコレクションを検索</p></li>
<li><p><strong>GitHub Actions</strong> — OIDC-based (no static secrets), vault-action</p></li>
<li><p><strong>ArgoCD Vault Plugin</strong> — resolve secret placeholders trong GitOps</p></li>
<li><p><strong>外部シークレット オペレーター</strong> — Vault</p></li> からの Kubernetes ネイティブ同期
</ul>

<p>最後のセクションでは、運用とエンタープライズ — HA、統合ストレージ、レプリケーション、ネームスペース、モニタリング、トラブルシューティングについて説明します。</p>
