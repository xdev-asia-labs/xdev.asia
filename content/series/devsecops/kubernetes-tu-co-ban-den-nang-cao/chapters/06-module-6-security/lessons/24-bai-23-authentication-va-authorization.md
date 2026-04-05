---
id: 019c9618-0401-7000-8000-c1147ba22e14
title: 'BÀI 23: AUTHENTICATION VÀ AUTHORIZATION'
slug: bai-23-authentication-va-authorization
description: >-
  Authentication, ServiceAccounts, RBAC trong Kubernetes. Pod Security Standards (PSS) và Pod
  Security Admission (PSA) thay thế PodSecurityPolicy (đã xóa K8s 1.25). Admission Controllers.
duration_minutes: 90
is_free: false
video_url: null
sort_order: 23
section_title: 'Module 6: Security'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3461" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3461)"/>

  <!-- Decorations -->
  <g>
    <circle cx="955" cy="155" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="810" cy="110" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="665" cy="65" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1020" cy="280" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="235" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="165" x2="1100" y2="245" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="195" x2="1050" y2="265" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="999.6410161513776,145 999.6410161513776,185 965,205 930.3589838486224,185 930.3589838486224,145 965,125" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Bài 23</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 23: AUTHENTICATION VÀ AUTHORIZATION</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 6: Security</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Mục tiêu bài học</h2><p>Hiểu authentication và authorization trong Kubernetes, cách dùng RBAC để phân quyền, Pod Security Standards thay thế PodSecurityPolicy (đã xóa K8s 1.25), và các Admission Controllers quan trọng.</p>

<h2>1. Authentication trong Kubernetes</h2>
<p>Kubernetes không có user management built-in. Thay vào đó, kube-apiserver hỗ trợ nhiều authentication methods:</p>
<ul>
  <li><strong>X.509 Client Certificates</strong>: kubeconfig dùng client cert, phổ biến nhất</li>
  <li><strong>Bearer Tokens</strong>: ServiceAccount tokens, OIDC tokens</li>
  <li><strong>OIDC (OpenID Connect)</strong>: tích hợp với Dex, Keycloak, Auth0, Google, Azure AD</li>
  <li><strong>Webhook</strong>: delegate authentication đến external service</li>
</ul>

<h2>2. Users vs ServiceAccounts</h2>
<ul>
  <li><strong>Users</strong>: human identities — không có resource trong Kubernetes, managed externally (certs, OIDC)</li>
  <li><strong>ServiceAccounts</strong>: machine identities — Kubernetes resource, dùng cho Pods</li>
</ul>
<pre><code class="language-bash"># Tạo ServiceAccount
kubectl create serviceaccount my-app-sa -n production

# Xem ServiceAccount
kubectl get serviceaccounts -n production
kubectl describe serviceaccount my-app-sa -n production
</code></pre>
<pre><code class="language-yaml"># Pod dùng ServiceAccount
apiVersion: v1
kind: Pod
spec:
  serviceAccountName: my-app-sa
  # Token tự động mounted tại /var/run/secrets/kubernetes.io/serviceaccount/token
</code></pre>
<p><strong>Projected Service Account Tokens</strong> (K8s 1.22+): tokens ngắn hạn, tự động rotate, bounded audience — an toàn hơn nhiều so với long-lived tokens cũ.</p>

<h2>3. RBAC — Role-Based Access Control</h2>

<h3>3.1 Roles và ClusterRoles</h3>
<pre><code class="language-yaml"># Role: chỉ áp dụng trong 1 namespace
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
  namespace: production
rules:
- apiGroups: [""]           # "" = core API group
  resources: ["pods"]
  verbs: ["get", "watch", "list"]
- apiGroups: ["apps"]
  resources: ["deployments"]
  verbs: ["get", "list", "create", "update", "patch", "delete"]
---
# ClusterRole: áp dụng trên toàn cluster
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: node-reader
rules:
- apiGroups: [""]
  resources: ["nodes"]
  verbs: ["get", "list", "watch"]
</code></pre>

<h3>3.2 RoleBindings và ClusterRoleBindings</h3>
<pre><code class="language-yaml"># Bind role cho ServiceAccount
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods-binding
  namespace: production
subjects:
- kind: ServiceAccount
  name: my-app-sa
  namespace: production
- kind: User           # bind cho human user
  name: jane
  apiGroup: rbac.authorization.k8s.io
- kind: Group
  name: developers
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
</code></pre>
<pre><code class="language-bash"># Test permissions
kubectl auth can-i get pods --as=jane -n production
kubectl auth can-i delete deployments --as=system:serviceaccount:production:my-app-sa

# Xem permissions của current user
kubectl auth can-i --list
</code></pre>

<h3>3.3 Least Privilege Principle</h3>
<pre><code class="language-yaml"># CI/CD ServiceAccount: chỉ cần deploy, không cần đọc secrets
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: cicd-deployer
  namespace: production
rules:
- apiGroups: ["apps"]
  resources: ["deployments"]
  verbs: ["get", "list", "create", "update", "patch"]
  resourceNames: ["my-app"]  # giới hạn chỉ deployment cụ thể
- apiGroups: [""]
  resources: ["services", "configmaps"]
  verbs: ["get", "list"]
</code></pre>

<h2>4. Pod Security Standards (PSS) — Thay PodSecurityPolicy</h2>
<p><strong>PodSecurityPolicy (PSP) đã bị xóa hoàn toàn trong K8s 1.25.</strong> Thay thế là Pod Security Standards:</p>

<h3>4.1 Ba levels bảo mật</h3>
<ul>
  <li><strong>Privileged</strong>: không có restrictions. Chỉ dùng cho system components, cluster-wide controllers</li>
  <li><strong>Baseline</strong>: ngăn các escalation phổ biến. Phù hợp cho hầu hết applications. Chặn: privileged containers, hostPath, hostNetwork, hostPID</li>
  <li><strong>Restricted</strong>: hardened security. Yêu cầu: non-root user, non-root group, drop ALL capabilities, seccompProfile RuntimeDefault/Localhost, no hostPath</li>
</ul>

<h3>4.2 Pod Security Admission (PSA)</h3>
<pre><code class="language-bash"># Áp dụng PSA bằng namespace labels
kubectl label namespace production \
  pod-security.kubernetes.io/enforce=restricted \        # enforce: reject violating pods
  pod-security.kubernetes.io/warn=restricted \           # warn: allow nhưng warning
  pod-security.kubernetes.io/audit=restricted            # audit: log violations

# Kiểm tra
kubectl get namespace production --show-labels
</code></pre>
<pre><code class="language-yaml"># Pod tuân thủ Restricted level
apiVersion: v1
kind: Pod
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000
    seccompProfile:
      type: RuntimeDefault
  containers:
  - name: app
    image: myapp:v1
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      capabilities:
        drop: ["ALL"]
</code></pre>

<h2>5. Admission Controllers</h2>
<p>Admission controllers intercept requests đến API server sau authentication/authorization. Có 2 loại:</p>
<ul>
  <li><strong>Mutating</strong>: thay đổi object (ví dụ: inject sidecar, set default values)</li>
  <li><strong>Validating</strong>: chỉ approve/deny (ví dụ: PSA, ResourceQuota)</li>
</ul>
<pre><code class="language-bash"># Xem admission plugins được enable
kube-apiserver --help | grep enable-admission-plugins

# Default plugins quan trọng:
# - NamespaceLifecycle: ngăn tạo resource trong namespace đang terminating
# - ResourceQuota: enforce quotas
# - LimitRanger: áp dụng LimitRange defaults
# - PodSecurity: Pod Security Admission
# - ServiceAccount: auto-inject token mount
</code></pre>

<h2>6. Webhook Admission</h2>
<pre><code class="language-yaml"># ValidatingWebhookConfiguration: gọi external service để validate
apiVersion: admissionregistration.k8s.io/v1
kind: ValidatingWebhookConfiguration
metadata:
  name: my-validator
webhooks:
- name: validate.example.com
  clientConfig:
    service:
      name: my-validator-service
      namespace: system
      path: /validate
  rules:
  - apiGroups: ["apps"]
    apiVersions: ["v1"]
    operations: ["CREATE", "UPDATE"]
    resources: ["deployments"]
  admissionReviewVersions: ["v1"]
  sideEffects: None
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>Kubernetes không có user management — dùng X.509 certs, OIDC</li>
  <li>ServiceAccounts: machine identities, projected tokens (short-lived)</li>
  <li>RBAC: Role/ClusterRole + RoleBinding/ClusterRoleBinding</li>
  <li>Least privilege: chỉ cấp quyền tối thiểu cần thiết</li>
  <li>PSP đã xóa K8s 1.25 → dùng Pod Security Standards (PSA)</li>
  <li>PSA levels: Privileged, Baseline (khuyến nghị default), Restricted (production)</li>
</ul>
