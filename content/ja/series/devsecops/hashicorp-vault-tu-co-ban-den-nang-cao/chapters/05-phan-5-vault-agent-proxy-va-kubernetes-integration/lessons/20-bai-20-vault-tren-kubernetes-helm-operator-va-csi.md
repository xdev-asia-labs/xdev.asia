---
id: 019d8b30-b220-7001-c002-e0c5f8200120
title: 'レッスン 20: Kubernetes 上の Vault - ヘルム、オペレーター、および CSI'
slug: bai-20-vault-tren-kubernetes-helm-operator-va-csi
description: Helm チャート、Vault Secrets Operator (VSO)、Vault CSI Provider、Vault Agent Injector を使用して、Kubernetes に Vault をデプロイします。 VSO、CSI、エージェント インジェクターを比較します。
duration_minutes: 220
is_free: true
video_url: null
sort_order: 20
section_title: 'パート 5: Vault Agent、プロキシ、および Kubernetes の統合'
course:
  id: 019d8b30-b200-7001-c002-e0c5f8200001
  title: HashiCorp Vault の基本から上級まで
  slug: hashicorp-vault-tu-co-ban-den-nang-cao
locale: ja
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
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 D​​evSecOps — レッスン 20</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">レッスン 20: Kubernetes 上の Vault - Helm、</tspan>
<tspan x="60" dy="42">オペレーターとCSI</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HashiCorp Vault の基本から上級まで</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: Vault Agent、プロキシ、および Kubernetes の統合</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-deploy-vault-k8s"><strong>1。 Helm</strong></h2> を使用して Kubernetes に Vault をデプロイする

<h3 id="cac-mode-deploy"><strong>展開モード</strong></h3>

<table>
<thead>
<tr><th>モード</th><th>説明</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td><strong>Dev</strong></td><td>Single pod, in-memory storage</td><td>Development, testing</td></tr>
<tr><td><strong>Standalone</strong></td><td>Single pod, persistent storage</td><td>Small deployments</td></tr>
<tr><td><strong>HA</strong></td><td>Multi-pod, Integrated Storage (Raft)</td><td>Production</td></tr>
<tr><td><strong>外部</strong></td><td>Vault は K8 の外部で実行され、Agent Injector のみを展開します</td><td>外部 Vault サーバー</td></tr>
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

<h3 id="init-unseal"><strong>初期化とシール解除</strong></h3>

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

<p><strong>VSO</strong> は公式の Kubernetes オペレーターであり、Vault から Kubernetes Secret にシークレットを自動的に同期します。これは、Kubernetes ネイティブのシークレット管理の <strong> 推奨</strong> メソッドです。</p>

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

<h3 id="su-dung-secret"><strong>ポッドで使用</strong></h3>

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

<p>Vault CSI プロバイダーは、<strong>Secrets Store CSI Driver</strong> を使用して、Kubernetes シークレットを作成せずに、シークレットを Pod ボリュームに直接マウントします。</p>

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

<p>Agent Injector は、<strong>Kubernetes Mutating Webhook</strong> を使用して、アノテーションを使用して Vault Agent サイドカーを Pod に自動的に挿入します。</p>

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

<h2 id="5-so-sanh"><strong>5。 VSO、CSI、エージェント インジェクターの比較</strong></h2>

<table>
<thead>
<tr><th>基準</th><th>VSO</th><th>CSIプロバイダー</th><th>エージェントインジェクター</th></tr>
</thead>
<tbody>
<tr><td>Mechanism</td><td>Operator + CRDs</td><td>CSI Driver</td><td>Mutating Webhook</td></tr>
<tr><td>K8s シークレット</td><td>K8s シークレットの作成</td><td>オプションの同期</td><td>No</td></tr>
<tr><td>動的シークレット</td><td>✅ (VaultDynamicSecret)</td><td>制限</td><td>✅(テンプレート)</td></tr>
<tr><td>PKI 証明書</td><td>✅ (VaultPKIScret)</td><td>制限</td><td>✅ (テンプレート)</td></tr>
<tr><td>自動回転</td><td>✅ (リフレッシュ後)</td><td>個別構成</td><td>✅ (サイドカー)</td></tr>
<tr><td>サイドカーが必要</td><td>No</td><td>No</td><td>Yes</td></tr>
<tr><td>リソース オーバーヘッド</td><td>Low (一般オペレーター)</td><td>Low</td><td>High (1 サイドカー/ポッド)</td></tr>
<tr><td>Recommendation</td><td>✅ Recommended</td><td>OK cho simple</td><td>Legacy</td></tr>
</tbody>
</table>

<h2 id="6-best-practices-k8s"><strong>6. Best Practices cho Kubernetes</strong></h2>

<ul>
<li><p>新規導入の優先度 <strong>VSO</strong> — ネイティブ K8s エクスペリエンス、オーバーヘッドの削減</p></li>
<li><p>ワークロードごとに<strong>専用のServiceAccount</strong>を使用</p></li>
<li><p>本番環境向けに Cloud KMS で <strong>Auto-unseal</strong> を有効にする</p></li>
<li><p>Vault ポッド (非ルート、読み取り専用ファイルシステム) の <strong>Pod セキュリティ</strong> を構成します</p></li>
<li><p><strong>NetworkPolicy</strong> を使用して Vault</p></li> へのアクセスを制限します
<li><p>永続ボリューム</p></li> の代わりに <strong>emptyDir (メモリバックアップ)</strong> にシークレットをマウントします。
</ul>

<h2 id="7-tong-ket"><strong>7。概要</strong></h2>

<ul>
<li><p><strong>Helm chart</strong> — K8s</p></li> に統合ストレージを備えた Vault HA を展開する
<li><p><strong>VSO</strong> — 推奨、CRD ベース、シークレットを K8s シークレットに自動的に同期</p></li>
<li><p><strong>CSI Provider</strong> — シークレットを Pod ボリュームに直接マウント</p></li>
<li><p><strong>Agent Injector</strong> — legacy, sidecar-based, annotation-driven</p></li>
</ul>

<p>次のセクションでは、Vault と実際のアプリケーション (Spring Boot、Node.js、Terraform、Ansible、CI/CD パイプライン) の統合に焦点を当てます。</p>
