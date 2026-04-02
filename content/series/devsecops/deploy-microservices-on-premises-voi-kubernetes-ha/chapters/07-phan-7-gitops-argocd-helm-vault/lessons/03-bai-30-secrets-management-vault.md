---
id: 019e1a00-aa01-7001-c001-k8sha000703
title: 'BÀI 30: SECRETS MANAGEMENT VỚI HASHICORP VAULT'
slug: bai-30-secrets-management-voi-hashicorp-vault
description: >-
  Deploy HashiCorp Vault HA trên Kubernetes, KV secrets engine,
  Kubernetes auth, dynamic database credentials,
  External Secrets Operator, và secrets rotation.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 30
section_title: 'Phần 7: GitOps với ArgoCD, Helm & Vault'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Deploy Vault HA cluster trên Kubernetes</li>
<li>✅ KV Secrets Engine v2</li>
<li>✅ Kubernetes Auth Method</li>
<li>✅ Dynamic Database Credentials</li>
<li>✅ External Secrets Operator (ESO) integration</li>
<li>✅ Secret rotation strategy</li>
</ul>

<hr>

<h2 id="phan-1-vault-architecture">PHẦN 1: VAULT ARCHITECTURE</h2>

<pre><code>
HashiCorp Vault HA on Kubernetes:

┌─────────────────────────────────────────────────┐
│              Vault HA Cluster                    │
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │ Vault-0  │  │ Vault-1  │  │ Vault-2  │      │
│  │ (Active) │  │(Standby) │  │(Standby) │      │
│  │          │  │          │  │          │      │
│  │  Seal/   │  │  Seal/   │  │  Seal/   │      │
│  │  Unseal  │  │  Unseal  │  │  Unseal  │      │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘      │
│       │              │              │            │
│  ┌────▼──────────────▼──────────────▼──────┐    │
│  │        Raft Integrated Storage           │    │
│  │        (replicated across pods)          │    │
│  └──────────────────────────────────────────┘    │
└──────────────────────────────────────────────────┘
          │
          ▼
┌──────────────────┐      ┌──────────────────┐
│ K8s Auth Method  │      │ External Secrets │
│ (ServiceAccount) │      │ Operator (ESO)   │
└──────────────────┘      └──────────────────┘
          │                         │
          ▼                         ▼
┌──────────────────┐      ┌──────────────────┐
│ Application Pod  │      │ K8s Secret       │
│ (inject secrets) │      │ (synced from     │
│                  │      │  Vault)          │
└──────────────────┘      └──────────────────┘
</code></pre>

<hr>

<h2 id="phan-2-install">PHẦN 2: CÀI ĐẶT VAULT HA</h2>

<pre><code class="language-bash"># Add HashiCorp Helm repo:
helm repo add hashicorp https://helm.releases.hashicorp.com
helm repo update

# Install Vault:
helm install vault hashicorp/vault \
  --namespace vault \
  --create-namespace \
  -f vault-values.yaml
</code></pre>

<pre><code class="language-yaml"># vault-values.yaml:
server:
  ha:
    enabled: true
    replicas: 3
    raft:
      enabled: true
      config: |
        ui = true
        
        listener "tcp" {
          tls_disable = 1
          address = "[::]:8200"
          cluster_address = "[::]:8201"
        }
        
        storage "raft" {
          path = "/vault/data"
          
          retry_join {
            leader_api_addr = "http://vault-0.vault-internal:8200"
          }
          retry_join {
            leader_api_addr = "http://vault-1.vault-internal:8200"
          }
          retry_join {
            leader_api_addr = "http://vault-2.vault-internal:8200"
          }
        }
        
        service_registration "kubernetes" {}

  resources:
    requests:
      cpu: 250m
      memory: 256Mi
    limits:
      cpu: "1"
      memory: 1Gi

  dataStorage:
    enabled: true
    size: 10Gi
    storageClass: ceph-block

  auditStorage:
    enabled: true
    size: 10Gi
    storageClass: ceph-block

ui:
  enabled: true
  serviceType: ClusterIP

injector:
  enabled: true
  resources:
    requests:
      cpu: 50m
      memory: 64Mi
</code></pre>

<pre><code class="language-bash"># Initialize Vault:
kubectl -n vault exec vault-0 -- vault operator init \
  -key-shares=5 \
  -key-threshold=3 \
  -format=json > vault-init.json

# ⚠️ CRITICAL: Store vault-init.json securely!
# Contains unseal keys and root token

# Unseal each Vault pod (need 3 of 5 keys):
for i in 0 1 2; do
  kubectl -n vault exec vault-$i -- vault operator unseal $(jq -r '.unseal_keys_b64[0]' vault-init.json)
  kubectl -n vault exec vault-$i -- vault operator unseal $(jq -r '.unseal_keys_b64[1]' vault-init.json)
  kubectl -n vault exec vault-$i -- vault operator unseal $(jq -r '.unseal_keys_b64[2]' vault-init.json)
done

# Join raft cluster:
kubectl -n vault exec vault-1 -- vault operator raft join http://vault-0.vault-internal:8200
kubectl -n vault exec vault-2 -- vault operator raft join http://vault-0.vault-internal:8200

# Verify:
kubectl -n vault exec vault-0 -- vault status
# Sealed: false
# HA Mode: active

kubectl -n vault exec vault-0 -- vault operator raft list-peers
</code></pre>

<hr>

<h2 id="phan-3-kv-secrets">PHẦN 3: KV SECRETS ENGINE</h2>

<pre><code class="language-bash"># Login with root token:
export VAULT_TOKEN=$(jq -r '.root_token' vault-init.json)

# Enable KV v2:
kubectl -n vault exec vault-0 -- vault secrets enable -path=secret kv-v2

# Store secrets:
kubectl -n vault exec vault-0 -- vault kv put secret/production/order-service \
  DATABASE_URL="postgresql://appuser:secret@production-pg-rw.database:5432/appdb" \
  RABBITMQ_URL="amqp://order:secret@production-rmq.messaging:5672/orders" \
  REDIS_URL="redis://:secret@redis-sentinel.caching:26379" \
  JWT_SECRET="$(openssl rand -base64 32)" \
  API_KEY="$(openssl rand -hex 32)"

# Read secrets:
kubectl -n vault exec vault-0 -- vault kv get secret/production/order-service

# Version history:
kubectl -n vault exec vault-0 -- vault kv metadata get secret/production/order-service
</code></pre>

<hr>

<h2 id="phan-4-k8s-auth">PHẦN 4: KUBERNETES AUTH METHOD</h2>

<pre><code class="language-bash"># Enable K8s auth:
kubectl -n vault exec vault-0 -- vault auth enable kubernetes

# Configure K8s auth:
kubectl -n vault exec vault-0 -- vault write auth/kubernetes/config \
  kubernetes_host="https://kubernetes.default.svc:443"

# Create policy:
kubectl -n vault exec vault-0 -- vault policy write order-service - <<EOF
path "secret/data/production/order-service" {
  capabilities = ["read"]
}
path "secret/data/production/shared/*" {
  capabilities = ["read"]
}
EOF

# Create role:
kubectl -n vault exec vault-0 -- vault write auth/kubernetes/role/order-service \
  bound_service_account_names=order-service \
  bound_service_account_namespaces=default \
  policies=order-service \
  ttl=1h
</code></pre>

<hr>

<h2 id="phan-5-eso">PHẦN 5: EXTERNAL SECRETS OPERATOR (ESO)</h2>

<pre><code class="language-bash"># Install External Secrets Operator:
helm repo add external-secrets https://charts.external-secrets.io
helm repo update

helm install external-secrets external-secrets/external-secrets \
  --namespace external-secrets \
  --create-namespace
</code></pre>

<pre><code class="language-yaml"># ClusterSecretStore (Vault backend):
apiVersion: external-secrets.io/v1beta1
kind: ClusterSecretStore
metadata:
  name: vault-backend
spec:
  provider:
    vault:
      server: "http://vault.vault:8200"
      path: "secret"
      version: "v2"
      auth:
        kubernetes:
          mountPath: "kubernetes"
          role: "external-secrets"
          serviceAccountRef:
            name: "external-secrets"
            namespace: "external-secrets"
---
# ExternalSecret (sync Vault → K8s Secret):
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: order-service-secrets
  namespace: default
spec:
  refreshInterval: 5m
  secretStoreRef:
    name: vault-backend
    kind: ClusterSecretStore
  target:
    name: order-service-secrets
    creationPolicy: Owner
  data:
    - secretKey: DATABASE_URL
      remoteRef:
        key: production/order-service
        property: DATABASE_URL
    - secretKey: RABBITMQ_URL
      remoteRef:
        key: production/order-service
        property: RABBITMQ_URL
    - secretKey: JWT_SECRET
      remoteRef:
        key: production/order-service
        property: JWT_SECRET
</code></pre>

<pre><code class="language-yaml"># Application sử dụng synced secret:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  template:
    spec:
      containers:
        - name: order-service
          envFrom:
            - secretRef:
                name: order-service-secrets  # ← Synced from Vault
</code></pre>

<hr>

<h2 id="phan-6-dynamic-creds">PHẦN 6: DYNAMIC DATABASE CREDENTIALS</h2>

<pre><code class="language-bash"># Enable database secrets engine:
kubectl -n vault exec vault-0 -- vault secrets enable database

# Configure PostgreSQL connection:
kubectl -n vault exec vault-0 -- vault write database/config/production-pg \
  plugin_name=postgresql-database-plugin \
  allowed_roles="order-service-db" \
  connection_url="postgresql://{{username}}:{{password}}@production-pg-rw.database:5432/appdb?sslmode=require" \
  username="vault_admin" \
  password="vault_admin_password"

# Create role (generates temp credentials):
kubectl -n vault exec vault-0 -- vault write database/roles/order-service-db \
  db_name=production-pg \
  creation_statements="CREATE ROLE \"{{name}}\" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}'; \
    GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO \"{{name}}\";" \
  revocation_statements="REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM \"{{name}}\"; DROP ROLE IF EXISTS \"{{name}}\";" \
  default_ttl="1h" \
  max_ttl="24h"

# Generate dynamic credentials:
kubectl -n vault exec vault-0 -- vault read database/creds/order-service-db
# username: v-k8s-order-ser-xxxxx
# password: A1B2C3-random-generated
# ttl: 1h
# → Auto-revoked after 1h! ✅
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Vault HA</strong>: 3-node Raft cluster, auto-failover</li>
<li><strong>KV v2</strong>: Versioned secrets, rollback capability</li>
<li><strong>K8s Auth</strong>: ServiceAccount-based, per-service policies</li>
<li><strong>ESO</strong>: Vault → K8s Secret sync, GitOps-friendly</li>
<li><strong>Dynamic credentials</strong>: Auto-generated, auto-revoked DB passwords</li>
<li><strong>Never commit secrets to Git</strong>: Use Vault + ESO</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Vault + ESO Setup</h3>
<ul>
<li>Deploy Vault HA, initialize, unseal</li>
<li>Store secrets for 3 microservices</li>
<li>Deploy ESO, sync secrets to K8s</li>
</ul>

<h3 id="bt2">Bài tập 2: Dynamic DB Credentials</h3>
<ul>
<li>Enable database secrets engine</li>
<li>Configure dynamic PostgreSQL role</li>
<li>App uses dynamic credentials, verify rotation</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 31: CI/CD Pipeline — Build, Test, Deploy với GitOps</strong>, chúng ta sẽ xây dựng complete CI/CD pipeline integrate ArgoCD.</p>
