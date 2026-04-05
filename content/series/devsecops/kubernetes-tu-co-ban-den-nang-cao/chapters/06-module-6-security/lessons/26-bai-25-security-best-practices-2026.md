---
id: 019c9618-0403-7000-8000-c1147ba22e14
title: 'BÀI 25: SECURITY BEST PRACTICES KUBERNETES 2026'
slug: bai-25-security-best-practices-kubernetes-2026
description: >-
  SecurityContext (non-root, read-only filesystem, drop capabilities), supply chain security
  với Cosign/Sigstore, SBOM, secrets encryption at rest, network isolation best practices.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 25
section_title: 'Module 6: Security'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7028" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7028)"/>

  <!-- Decorations -->
  <g>
    <circle cx="841" cy="93" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="1082" cy="114" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="823" cy="135" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1064" cy="156" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="177" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="243" x2="1100" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="273" x2="1050" y2="343" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1075.9089653438086,224 1075.9089653438086,262 1043,281 1010.0910346561914,262 1010.0910346561914,224 1043,205" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Bài 25</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 25: SECURITY BEST PRACTICES KUBERNETES</tspan>
      <tspan x="60" dy="42">2026</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 6: Security</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Mục tiêu bài học</h2><p>Nắm vững các security best practices cho Kubernetes 2026: SecurityContext hardening, supply chain security với Cosign, SBOM generation, và secrets management an toàn.</p>

<h2>1. SecurityContext — Container Hardening</h2>
<p>SecurityContext định nghĩa security settings cho Pod hoặc container. Áp dụng defense-in-depth:</p>
<pre><code class="language-yaml">apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      # Pod-level security context
      securityContext:
        runAsNonRoot: true          # không chạy với root user
        runAsUser: 1000             # UID cụ thể
        runAsGroup: 3000            # GID cụ thể
        fsGroup: 2000               # group owner của mounted volumes
        fsGroupChangePolicy: OnRootMismatch  # hiệu quả hơn Always
        seccompProfile:
          type: RuntimeDefault      # syscall filtering mặc định của container runtime
        supplementalGroups: [4000]  # additional groups
      containers:
      - name: app
        image: myapp:1.2.3          # không dùng :latest
        # Container-level security context (override pod level)
        securityContext:
          allowPrivilegeEscalation: false   # không cho phép setuid/setgid
          readOnlyRootFilesystem: true      # filesystem read-only
          capabilities:
            drop: ["ALL"]           # drop tất cả Linux capabilities
            add: ["NET_BIND_SERVICE"]  # chỉ add nếu thực sự cần
</code></pre>
<p><strong>readOnlyRootFilesystem</strong>: nếu app cần ghi file, dùng <code>emptyDir</code> volume:</p>
<pre><code class="language-yaml">containers:
- name: app
  securityContext:
    readOnlyRootFilesystem: true
  volumeMounts:
  - name: tmp
    mountPath: /tmp
  - name: cache
    mountPath: /var/cache/nginx
volumes:
- name: tmp
  emptyDir: {}
- name: cache
  emptyDir: {}
</code></pre>

<h2>2. Supply Chain Security — Cosign/Sigstore</h2>
<p>Xác minh rằng container images được build và ký bởi nguồn đáng tin cậy.</p>

<h3>2.1 Ký Image với Cosign</h3>
<pre><code class="language-bash"># Cài cosign
brew install cosign
# hoặc
curl -O -L "https://github.com/sigstore/cosign/releases/latest/download/cosign-linux-amd64"
sudo mv cosign-linux-amd64 /usr/local/bin/cosign
chmod +x /usr/local/bin/cosign

# Keyless signing (dùng OIDC identity — không cần quản lý keys)
# Chỉ hoạt động trong CI/CD environment có OIDC token
COSIGN_EXPERIMENTAL=1 cosign sign myregistry.io/myapp:v1.2.3

# Key-based signing
cosign generate-key-pair  # tạo cosign.key và cosign.pub
cosign sign --key cosign.key myregistry.io/myapp:v1.2.3

# Verify image
cosign verify --key cosign.pub myregistry.io/myapp:v1.2.3
</code></pre>

<h3>2.2 Sigstore Policy Controller</h3>
<pre><code class="language-bash"># Cài Policy Controller để enforce image signing
helm repo add sigstore https://sigstore.github.io/helm-charts
helm install policy-controller sigstore/policy-controller \
  --namespace cosign-system \
  --create-namespace
</code></pre>
<pre><code class="language-yaml"># ClusterImagePolicy: yêu cầu image phải được ký
apiVersion: policy.sigstore.dev/v1beta1
kind: ClusterImagePolicy
metadata:
  name: require-signed-images
spec:
  images:
  - glob: "myregistry.io/**"     # áp dụng cho images từ registry của bạn
  authorities:
  - key:
      secretRef:
        name: cosign-public-key
        namespace: cosign-system
</code></pre>

<h2>3. SBOM — Software Bill of Materials</h2>
<p>SBOM liệt kê tất cả packages và dependencies trong container image, giúp theo dõi vulnerabilities.</p>
<pre><code class="language-bash"># Tạo SBOM với Syft
curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh

# Generate SBOM cho image
syft myapp:v1.2.3 -o spdx-json &gt; sbom.json

# Scan vulnerabilities với Grype
curl -sSfL https://raw.githubusercontent.com/anchore/grype/main/install.sh | sh

grype myapp:v1.2.3                    # scan image trực tiếp
grype sbom:sbom.json                  # scan từ SBOM file
grype myapp:v1.2.3 --fail-on critical  # fail nếu có critical vulnerabilities
</code></pre>

<h2>4. Secrets Management Best Practices</h2>

<h3>4.1 Secrets Encryption at Rest</h3>
<pre><code class="language-yaml"># /etc/kubernetes/encryption-config.yaml
apiVersion: apiserver.config.k8s.io/v1
kind: EncryptionConfiguration
resources:
- resources:
  - secrets
  providers:
  - aescbc:
      keys:
      - name: key1
        secret: &lt;base64-encoded-32-byte-key&gt;
  - identity: {}   # fallback: plaintext (cho secrets chưa encrypt)
</code></pre>
<pre><code class="language-bash"># Bật trong kube-apiserver
kube-apiserver \
  --encryption-provider-config=/etc/kubernetes/encryption-config.yaml

# Verify encryption
kubectl get secret mysecret -n production -o yaml
# data.password phải là opaque ciphertext

# Encrypt tất cả existing secrets
kubectl get secrets --all-namespaces -o json | kubectl replace -f -
</code></pre>

<h3>4.2 External Secrets Management</h3>
<p>Thay vì lưu secrets trong Kubernetes etcd, dùng External Secrets Operator để sync từ:</p>
<ul>
  <li>AWS Secrets Manager</li>
  <li>HashiCorp Vault</li>
  <li>GCP Secret Manager</li>
  <li>Azure Key Vault</li>
</ul>
<pre><code class="language-yaml"># ExternalSecret: định nghĩa secret cần sync
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: db-credentials
  namespace: production
spec:
  refreshInterval: 1h    # sync mỗi 1 giờ
  secretStoreRef:
    name: aws-secret-store
    kind: ClusterSecretStore
  target:
    name: db-credentials   # tên Kubernetes Secret sẽ được tạo
  data:
  - secretKey: POSTGRES_PASSWORD
    remoteRef:
      key: production/database
      property: password
  - secretKey: POSTGRES_USER
    remoteRef:
      key: production/database
      property: username
</code></pre>

<h2>5. Image Security Best Practices</h2>
<pre><code class="language-yaml"># Chỉ pull từ private registry đã được quét
spec:
  containers:
  - name: app
    image: myregistry.io/myapp:v1.2.3  # không dùng Docker Hub trực tiếp
    imagePullPolicy: Always             # luôn verify với registry

  imagePullSecrets:
  - name: registry-credentials

# Sử dụng digest thay tag để immutable reference
# image: myregistry.io/myapp@sha256:abc123...
</code></pre>

<h2>6. Network Security</h2>
<pre><code class="language-yaml"># Default deny + allow specific
# 1. Default deny all
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
  namespace: production
spec:
  podSelector: {}
  policyTypes: [Ingress, Egress]
---
# 2. Allow DNS
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-dns
  namespace: production
spec:
  podSelector: {}
  policyTypes: [Egress]
  egress:
  - to:
    - namespaceSelector:
        matchLabels:
          kubernetes.io/metadata.name: kube-system
    ports:
    - protocol: UDP
      port: 53
</code></pre>

<h2>7. Audit Logging</h2>
<pre><code class="language-yaml"># Audit policy
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
- level: RequestResponse     # log request + response body
  resources:
  - group: ""
    resources: ["secrets"]  # log mọi thao tác với Secrets
- level: Request             # log request body
  resources:
  - group: "apps"
    resources: ["deployments"]
  verbs: ["create", "update", "delete"]
- level: Metadata            # log metadata only (no body)
  omitStages: [RequestReceived]
</code></pre>

<h2>Tóm tắt — Security Checklist 2026</h2>
<ul>
  <li>✅ SecurityContext: non-root, readOnlyRootFilesystem, drop ALL caps, seccomp RuntimeDefault</li>
  <li>✅ Pod Security Admission: Restricted mode cho production namespaces</li>
  <li>✅ Ký images với Cosign, enforce với Policy Controller</li>
  <li>✅ Generate SBOM, scan với Grype</li>
  <li>✅ Secrets encryption at rest hoặc External Secrets Operator</li>
  <li>✅ Network Policies: default-deny</li>
  <li>✅ RBAC: least privilege ServiceAccounts</li>
  <li>✅ Audit logging cho Secrets và critical resources</li>
  <li>✅ Specific image tags (không dùng :latest), pull từ private registry</li>
</ul>
