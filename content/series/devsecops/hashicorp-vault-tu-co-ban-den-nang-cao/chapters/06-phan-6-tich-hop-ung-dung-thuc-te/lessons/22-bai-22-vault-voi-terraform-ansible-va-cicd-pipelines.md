---
id: 019d8b30-b222-7001-c002-e0c5f8200122
title: 'Bài 22: Vault với Terraform, Ansible và CI/CD Pipelines'
slug: bai-22-vault-voi-terraform-ansible-va-cicd-pipelines
description: >-
  Terraform Vault Provider, Ansible Vault lookup, CI/CD integration,
  GitHub Actions OIDC, GitLab CI JWT, Jenkins, ArgoCD Vault Plugin,
  External Secrets Operator.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 22
section_title: "Phần 6: Tích hợp ứng dụng thực tế"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<h2 id="1-terraform-vault-provider"><strong>1. Terraform Vault Provider</strong></h2>

<p><strong>Terraform Vault Provider</strong> cho phép quản lý cấu hình Vault as Code — secrets engines, auth methods, policies, entities, groups, tất cả đều có thể version-controlled trong Git.</p>

<h3 id="cau-hinh-provider"><strong>Cấu hình Provider</strong></h3>

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

<h3 id="quan-ly-secrets-engines"><strong>Quản lý Secrets Engines</strong></h3>

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

<h3 id="quan-ly-auth-methods"><strong>Quản lý Auth Methods</strong></h3>

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

<h3 id="quan-ly-policies"><strong>Quản lý Policies</strong></h3>

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

<h3 id="doc-secrets-tu-vault"><strong>Đọc secrets từ Vault trong Terraform</strong></h3>

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

<h2 id="2-ansible-vault-integration"><strong>2. Ansible với Vault</strong></h2>

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

<h2 id="5-tong-ket"><strong>5. Tổng kết</strong></h2>

<ul>
<li><p><strong>Terraform Vault Provider</strong> — Vault configuration as code, quản lý toàn bộ Vault setup</p></li>
<li><p><strong>Ansible</strong> — lookup plugin và collection cho operational workflows</p></li>
<li><p><strong>GitHub Actions</strong> — OIDC-based (no static secrets), vault-action</p></li>
<li><p><strong>ArgoCD Vault Plugin</strong> — resolve secret placeholders trong GitOps</p></li>
<li><p><strong>External Secrets Operator</strong> — Kubernetes-native sync từ Vault</p></li>
</ul>

<p>Phần cuối cùng sẽ đi vào Production & Enterprise — HA, Integrated Storage, Replication, Namespaces, Monitoring và Troubleshooting.</p>
