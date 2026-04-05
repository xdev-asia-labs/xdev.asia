---
id: 019d8b30-b220-7001-c002-e0c5f8200120
title: 'Bài 20: Vault trên Kubernetes - Helm, Operator và CSI'
slug: bai-20-vault-tren-kubernetes-helm-operator-va-csi
description: >-
  Deploy Vault trên Kubernetes bằng Helm chart, Vault Secrets Operator (VSO),
  Vault CSI Provider, Vault Agent Injector.
  So sánh VSO vs CSI vs Agent Injector.
duration_minutes: 220
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 5: Vault Agent, Proxy và Kubernetes Integration"
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault từ Cơ bản đến Nâng cao
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6026" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6026)"/>

  <!-- Decorations -->
  <g>
    <circle cx="781" cy="273" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="962" cy="94" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="643" cy="175" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="824" cy="256" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="1005" cy="77" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="163" x2="1100" y2="243" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="193" x2="1050" y2="263" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1045.9089653438086,194 1045.9089653438086,232 1013,251 980.0910346561914,232 980.0910346561914,194 1013,175" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Bài 20</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 20: Vault trên Kubernetes - Helm,</tspan>
      <tspan x="60" dy="42">Operator và CSI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Vault Agent, Proxy và Kubernetes Integration</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-deploy-vault-k8s"><strong>1. Deploy Vault trên Kubernetes bằng Helm</strong></h2>

<h3 id="cac-mode-deploy"><strong>Các mode deploy</strong></h3>

<table>
<thead>
<tr><th>Mode</th><th>Mô tả</th><th>Use case</th></tr>
</thead>
<tbody>
<tr><td><strong>Dev</strong></td><td>Single pod, in-memory storage</td><td>Development, testing</td></tr>
<tr><td><strong>Standalone</strong></td><td>Single pod, persistent storage</td><td>Small deployments</td></tr>
<tr><td><strong>HA</strong></td><td>Multi-pod, Integrated Storage (Raft)</td><td>Production</td></tr>
<tr><td><strong>External</strong></td><td>Vault chạy ngoài K8s, chỉ deploy Agent Injector</td><td>External Vault server</td></tr>
</tbody>
</table>

<h3 id="helm-install-ha"><strong>Helm Install (HA Mode)</strong></h3>

<pre><code class="language-bash"># Add Helm repo
helm repo add hashicorp https://helm.releases.hashicorp.com
helm repo update

# Install Vault HA với Integrated Storage
helm install vault hashicorp/vault \
  --namespace vault \
  --create-namespace \
  --set server.ha.enabled=true \
  --set server.ha.replicas=3 \
  --set server.ha.raft.enabled=true \
  --set server.dataStorage.size=10Gi \
  --set server.resources.requests.memory=256Mi \
  --set server.resources.requests.cpu=250m \
  --set server.resources.limits.memory=512Mi \
  --set server.resources.limits.cpu=500m \
  --set ui.enabled=true \
  --set ui.serviceType=ClusterIP
</code></pre>

<h3 id="custom-values"><strong>Custom Values</strong></h3>

<pre><code class="language-yaml"># values-production.yaml
server:
  ha:
    enabled: true
    replicas: 3
    raft:
      enabled: true
      config: |
        ui = true

        listener "tcp" {
          tls_disable = 0
          address = "[::]:8200"
          cluster_address = "[::]:8201"
          tls_cert_file = "/vault/userconfig/vault-tls/tls.crt"
          tls_key_file  = "/vault/userconfig/vault-tls/tls.key"
        }

        storage "raft" {
          path = "/vault/data"
          retry_join {
            leader_api_addr = "https://vault-0.vault-internal:8200"
            leader_ca_cert_file = "/vault/userconfig/vault-tls/ca.crt"
          }
          retry_join {
            leader_api_addr = "https://vault-1.vault-internal:8200"
            leader_ca_cert_file = "/vault/userconfig/vault-tls/ca.crt"
          }
          retry_join {
            leader_api_addr = "https://vault-2.vault-internal:8200"
            leader_ca_cert_file = "/vault/userconfig/vault-tls/ca.crt"
          }
        }

        service_registration "kubernetes" {}

  dataStorage:
    size: 20Gi
    storageClass: gp3

  extraVolumes:
    - type: secret
      name: vault-tls

  resources:
    requests:
      memory: 512Mi
      cpu: 500m
    limits:
      memory: 1Gi
      cpu: 1000m

  ingress:
    enabled: true
    hosts:
      - host: vault.company.com

ui:
  enabled: true

injector:
  enabled: true
  replicas: 2
</code></pre>

<pre><code class="language-bash"># Install với custom values
helm install vault hashicorp/vault \
  --namespace vault \
  --create-namespace \
  -f values-production.yaml
</code></pre>

<h3 id="init-unseal"><strong>Init và Unseal</strong></h3>

<pre><code class="language-bash"># Init trên vault-0
kubectl exec -n vault vault-0 -- vault operator init \
  -key-shares=5 \
  -key-threshold=3 \
  -format=json > vault-init.json

# Unseal vault-0
kubectl exec -n vault vault-0 -- vault operator unseal &lt;key-1&gt;
kubectl exec -n vault vault-0 -- vault operator unseal &lt;key-2&gt;
kubectl exec -n vault vault-0 -- vault operator unseal &lt;key-3&gt;

# Join vault-1 và vault-2 vào Raft cluster
kubectl exec -n vault vault-1 -- vault operator raft join \
  https://vault-0.vault-internal:8200

kubectl exec -n vault vault-2 -- vault operator raft join \
  https://vault-0.vault-internal:8200

# Unseal vault-1 và vault-2
kubectl exec -n vault vault-1 -- vault operator unseal &lt;key-1&gt;
# ... (repeat for each node)
</code></pre>

<h2 id="2-vault-secrets-operator"><strong>2. Vault Secrets Operator (VSO)</strong></h2>

<p><strong>VSO</strong> là Kubernetes operator chính thức, tự động sync secrets từ Vault vào Kubernetes Secrets. Đây là phương pháp <strong>recommended</strong> cho Kubernetes-native secret management.</p>

<h3 id="install-vso"><strong>Install VSO</strong></h3>

<pre><code class="language-bash">helm install vault-secrets-operator hashicorp/vault-secrets-operator \
  --namespace vault-secrets-operator-system \
  --create-namespace
</code></pre>

<h3 id="vso-custom-resources"><strong>Custom Resources</strong></h3>

<pre><code class="language-yaml"># 1. VaultConnection — kết nối đến Vault server
apiVersion: secrets.hashicorp.com/v1beta1
kind: VaultConnection
metadata:
  name: vault-connection
  namespace: app
spec:
  address: https://vault.company.com:8200
  skipTLSVerify: false
  caCertSecretRef: vault-ca-cert

---
# 2. VaultAuth — xác thực với Vault
apiVersion: secrets.hashicorp.com/v1beta1
kind: VaultAuth
metadata:
  name: vault-auth
  namespace: app
spec:
  vaultConnectionRef: vault-connection
  method: kubernetes
  mount: kubernetes
  kubernetes:
    role: webapp
    serviceAccount: webapp-sa

---
# 3. VaultStaticSecret — sync KV secret
apiVersion: secrets.hashicorp.com/v1beta1
kind: VaultStaticSecret
metadata:
  name: app-db-secret
  namespace: app
spec:
  vaultAuthRef: vault-auth
  mount: secret
  type: kv-v2
  path: production/db
  refreshAfter: 60s
  destination:
    name: app-db-credentials
    create: true
    labels:
      app: webapp
    transformation:
      excludeRaw: true
      templates:
        connection-string:
          text: "postgresql://{{ .Secrets.username }}:{{ .Secrets.password }}@{{ .Secrets.host }}:5432/{{ .Secrets.database }}"

---
# 4. VaultDynamicSecret — dynamic database credentials
apiVersion: secrets.hashicorp.com/v1beta1
kind: VaultDynamicSecret
metadata:
  name: app-dynamic-db
  namespace: app
spec:
  vaultAuthRef: vault-auth
  mount: database
  path: creds/app-role
  renewalPercent: 67
  destination:
    name: app-dynamic-db-credentials
    create: true

---
# 5. VaultPKISecret — auto-issue certificates
apiVersion: secrets.hashicorp.com/v1beta1
kind: VaultPKISecret
metadata:
  name: app-tls-cert
  namespace: app
spec:
  vaultAuthRef: vault-auth
  mount: pki
  role: app-cert
  commonName: app.company.com
  altNames:
    - app.internal.company.com
  ttl: 24h
  expiryOffset: 1h
  destination:
    name: app-tls
    create: true
</code></pre>

<h3 id="su-dung-secret"><strong>Sử dụng trong Pod</strong></h3>

<pre><code class="language-yaml">apiVersion: apps/v1
kind: Deployment
metadata:
  name: webapp
  namespace: app
spec:
  template:
    spec:
      serviceAccountName: webapp-sa
      containers:
        - name: webapp
          image: myapp:latest
          envFrom:
            - secretRef:
                name: app-db-credentials
          volumeMounts:
            - name: tls
              mountPath: /etc/tls
              readOnly: true
      volumes:
        - name: tls
          secret:
            secretName: app-tls
</code></pre>

<h2 id="3-vault-csi-provider"><strong>3. Vault CSI Provider</strong></h2>

<p>Vault CSI Provider sử dụng <strong>Secrets Store CSI Driver</strong> để mount secrets trực tiếp vào Pod volumes, không tạo Kubernetes Secrets.</p>

<pre><code class="language-yaml"># SecretProviderClass
apiVersion: secrets-store.csi.x-k8s.io/v1
kind: SecretProviderClass
metadata:
  name: vault-db-creds
  namespace: app
spec:
  provider: vault
  parameters:
    vaultAddress: "https://vault.company.com:8200"
    roleName: "webapp"
    objects: |
      - objectName: "db-username"
        secretPath: "secret/data/production/db"
        secretKey: "username"
      - objectName: "db-password"
        secretPath: "secret/data/production/db"
        secretKey: "password"
  # Optionally sync to K8s Secret
  secretObjects:
    - secretName: app-db-synced
      type: Opaque
      data:
        - objectName: db-username
          key: username
        - objectName: db-password
          key: password

---
# Pod sử dụng CSI volume
apiVersion: v1
kind: Pod
metadata:
  name: webapp
spec:
  serviceAccountName: webapp-sa
  containers:
    - name: webapp
      image: myapp:latest
      volumeMounts:
        - name: secrets
          mountPath: /mnt/secrets
          readOnly: true
  volumes:
    - name: secrets
      csi:
        driver: secrets-store.csi.k8s.io
        readOnly: true
        volumeAttributes:
          secretProviderClass: vault-db-creds
</code></pre>

<h2 id="4-vault-agent-injector"><strong>4. Vault Agent Injector</strong></h2>

<p>Agent Injector sử dụng <strong>Kubernetes Mutating Webhook</strong> để tự động inject Vault Agent sidecar vào Pods bằng annotations.</p>

<pre><code class="language-yaml">apiVersion: apps/v1
kind: Deployment
metadata:
  name: webapp
spec:
  template:
    metadata:
      annotations:
        vault.hashicorp.com/agent-inject: "true"
        vault.hashicorp.com/role: "webapp"
        vault.hashicorp.com/agent-inject-secret-db.txt: "secret/data/production/db"
        vault.hashicorp.com/agent-inject-template-db.txt: |
          {{- with secret "secret/data/production/db" -}}
          DB_HOST={{ .Data.data.host }}
          DB_USER={{ .Data.data.username }}
          DB_PASS={{ .Data.data.password }}
          {{- end }}
    spec:
      serviceAccountName: webapp-sa
      containers:
        - name: webapp
          image: myapp:latest
          # Secrets available at /vault/secrets/db.txt
</code></pre>

<h2 id="5-so-sanh"><strong>5. So sánh VSO vs CSI vs Agent Injector</strong></h2>

<table>
<thead>
<tr><th>Tiêu chí</th><th>VSO</th><th>CSI Provider</th><th>Agent Injector</th></tr>
</thead>
<tbody>
<tr><td>Mechanism</td><td>Operator + CRDs</td><td>CSI Driver</td><td>Mutating Webhook</td></tr>
<tr><td>K8s Secrets</td><td>Tạo K8s Secrets</td><td>Optional sync</td><td>Không</td></tr>
<tr><td>Dynamic secrets</td><td>✅ (VaultDynamicSecret)</td><td>Hạn chế</td><td>✅ (templates)</td></tr>
<tr><td>PKI certificates</td><td>✅ (VaultPKISecret)</td><td>Hạn chế</td><td>✅ (templates)</td></tr>
<tr><td>Auto-rotation</td><td>✅ (refreshAfter)</td><td>Cấu hình riêng</td><td>✅ (sidecar)</td></tr>
<tr><td>Sidecar required</td><td>Không</td><td>Không</td><td>Có</td></tr>
<tr><td>Resource overhead</td><td>Thấp (operator chung)</td><td>Thấp</td><td>Cao (1 sidecar/pod)</td></tr>
<tr><td>Recommendation</td><td>✅ Recommended</td><td>OK cho simple</td><td>Legacy</td></tr>
</tbody>
</table>

<h2 id="6-best-practices-k8s"><strong>6. Best Practices cho Kubernetes</strong></h2>

<ul>
<li><p>Ưu tiên <strong>VSO</strong> cho deployments mới — native K8s experience, ít overhead</p></li>
<li><p>Sử dụng <strong>dedicated ServiceAccount</strong> cho mỗi workload</p></li>
<li><p>Enable <strong>Auto-unseal</strong> với Cloud KMS cho production</p></li>
<li><p>Cấu hình <strong>Pod Security</strong> cho Vault pods (non-root, read-only filesystem)</p></li>
<li><p>Sử dụng <strong>NetworkPolicy</strong> để restrict access đến Vault</p></li>
<li><p>Mount secrets vào <strong>emptyDir (memory-backed)</strong> thay vì persistent volume</p></li>
</ul>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>

<ul>
<li><p><strong>Helm chart</strong> — deploy Vault HA với Integrated Storage trên K8s</p></li>
<li><p><strong>VSO</strong> — recommended, CRD-based, tự động sync secrets vào K8s Secrets</p></li>
<li><p><strong>CSI Provider</strong> — mount secrets trực tiếp vào Pod volumes</p></li>
<li><p><strong>Agent Injector</strong> — legacy, sidecar-based, annotation-driven</p></li>
</ul>

<p>Phần tiếp theo sẽ tập trung vào tích hợp Vault với các ứng dụng thực tế — Spring Boot, Node.js, Terraform, Ansible và CI/CD pipelines.</p>
