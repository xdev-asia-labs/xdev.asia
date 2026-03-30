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
