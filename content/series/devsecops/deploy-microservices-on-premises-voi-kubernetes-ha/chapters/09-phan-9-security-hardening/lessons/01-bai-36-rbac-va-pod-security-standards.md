---
id: 019e1a00-aa01-7001-c001-k8sha000901
title: 'BÀI 36: RBAC & POD SECURITY STANDARDS'
slug: bai-36-rbac-va-pod-security-standards
description: >-
  Kubernetes RBAC chi tiết, Pod Security Standards (PSS),
  ServiceAccount best practices, least-privilege access,
  audit logging, và security hardening cho cluster.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 36
section_title: 'Phần 9: Security Hardening'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-103" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-103)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1025" cy="65" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="950" cy="250" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="175" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="800" cy="100" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="285" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="75" x2="1100" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="105" x2="1050" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="950.9807621135332,110 950.9807621135332,140 925,155 899.0192378864668,140 899.0192378864668,110.00000000000001 925,95" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Bài 36</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 36: RBAC &amp; POD SECURITY STANDARDS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 9: Security Hardening</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Kubernetes RBAC (Role, ClusterRole, Binding)</li>
<li>✅ Pod Security Standards (Privileged, Baseline, Restricted)</li>
<li>✅ ServiceAccount best practices</li>
<li>✅ Audit logging configuration</li>
<li>✅ Security hardening checklist</li>
</ul>

<hr>

<h2 id="phan-1-rbac">PHẦN 1: KUBERNETES RBAC</h2>

<pre><code>
RBAC Model:

User/ServiceAccount
        │
        ▼
┌──────────────┐     ┌──────────────────┐
│ RoleBinding  │────►│      Role        │
│(namespace)   │     │  (namespace)     │
│              │     │  - get pods      │
│              │     │  - list services │
└──────────────┘     └──────────────────┘

┌──────────────────┐  ┌──────────────────┐
│ClusterRoleBinding│─►│   ClusterRole    │
│ (cluster-wide)   │  │  (cluster-wide)  │
│                  │  │  - get nodes     │
│                  │  │  - list PVs      │
└──────────────────┘  └──────────────────┘
</code></pre>

<pre><code class="language-yaml"># Role for app namespace (least privilege):
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: app-developer
  namespace: default
rules:
  - apiGroups: [""]
    resources: ["pods", "services", "configmaps"]
    verbs: ["get", "list", "watch"]
  - apiGroups: ["apps"]
    resources: ["deployments"]
    verbs: ["get", "list", "watch", "update", "patch"]
  - apiGroups: [""]
    resources: ["pods/log"]
    verbs: ["get"]
  # Explicitly deny secrets access (not listed)

---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: developer-binding
  namespace: default
subjects:
  - kind: User
    name: dev@company.com
    apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: app-developer
  apiGroup: rbac.authorization.k8s.io
</code></pre>

<pre><code class="language-yaml"># ClusterRole for read-only monitoring:
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: monitoring-reader
rules:
  - apiGroups: [""]
    resources: ["pods", "nodes", "services", "endpoints"]
    verbs: ["get", "list", "watch"]
  - apiGroups: ["metrics.k8s.io"]
    resources: ["pods", "nodes"]
    verbs: ["get", "list"]
  - nonResourceURLs: ["/metrics"]
    verbs: ["get"]
</code></pre>

<hr>

<h2 id="phan-2-serviceaccount">PHẦN 2: SERVICEACCOUNT BEST PRACTICES</h2>

<pre><code class="language-yaml"># Dedicated ServiceAccount per workload:
apiVersion: v1
kind: ServiceAccount
metadata:
  name: order-service
  namespace: default
automountServiceAccountToken: false  # Disable auto-mount

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  template:
    spec:
      serviceAccountName: order-service
      automountServiceAccountToken: false  # Double ensure
      containers:
        - name: app
          image: registry.local/order-service:v1.0
          securityContext:
            allowPrivilegeEscalation: false
            runAsNonRoot: true
            runAsUser: 1000
            readOnlyRootFilesystem: true
            capabilities:
              drop: ["ALL"]
</code></pre>

<hr>

<h2 id="phan-3-pss">PHẦN 3: POD SECURITY STANDARDS</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Level</th><th>Description</th><th>Use Case</th></tr>
</thead>
<tbody>
<tr><td>Privileged</td><td>No restrictions</td><td>System-level (CNI, storage drivers)</td></tr>
<tr><td>Baseline</td><td>Prevent known privilege escalation</td><td>Default for most workloads</td></tr>
<tr><td>Restricted</td><td>Hardened, all best practices</td><td>Sensitive workloads</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<pre><code class="language-yaml"># Apply PSS via namespace labels:
apiVersion: v1
kind: Namespace
metadata:
  name: production
  labels:
    # Enforce restricted:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/enforce-version: latest
    # Warn on baseline violations:
    pod-security.kubernetes.io/warn: restricted
    pod-security.kubernetes.io/audit: restricted

---
# Namespace for system workloads:
apiVersion: v1
kind: Namespace
metadata:
  name: kube-system
  labels:
    pod-security.kubernetes.io/enforce: privileged
</code></pre>

<pre><code class="language-yaml"># Pod that complies with Restricted:
apiVersion: v1
kind: Pod
metadata:
  name: secure-app
  namespace: production
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    fsGroup: 1000
    seccompProfile:
      type: RuntimeDefault
  containers:
    - name: app
      image: registry.local/app:v1
      securityContext:
        allowPrivilegeEscalation: false
        readOnlyRootFilesystem: true
        capabilities:
          drop: ["ALL"]
      resources:
        requests:
          cpu: 100m
          memory: 128Mi
        limits:
          cpu: 500m
          memory: 256Mi
</code></pre>

<hr>

<h2 id="phan-4-audit">PHẦN 4: AUDIT LOGGING</h2>

<pre><code class="language-yaml"># /etc/kubernetes/audit-policy.yaml:
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
  # Log all auth failures:
  - level: Metadata
    omitStages: ["RequestReceived"]
    users: ["system:anonymous"]

  # Log secret access:
  - level: RequestResponse
    resources:
      - group: ""
        resources: ["secrets"]
    verbs: ["get", "list", "watch", "create", "update", "delete"]

  # Log RBAC changes:
  - level: RequestResponse
    resources:
      - group: "rbac.authorization.k8s.io"
        resources: ["roles", "rolebindings", "clusterroles", "clusterrolebindings"]

  # Log pod exec/attach:
  - level: RequestResponse
    resources:
      - group: ""
        resources: ["pods/exec", "pods/attach"]

  # Default: metadata only
  - level: Metadata
    omitStages: ["RequestReceived"]
</code></pre>

<pre><code class="language-bash"># Enable in kube-apiserver:
# /etc/kubernetes/manifests/kube-apiserver.yaml
# Add flags:
#   --audit-policy-file=/etc/kubernetes/audit-policy.yaml
#   --audit-log-path=/var/log/kubernetes/audit.log
#   --audit-log-maxage=30
#   --audit-log-maxbackup=10
#   --audit-log-maxsize=100

# Forward audit logs to Loki:
# Configure Promtail to scrape /var/log/kubernetes/audit.log
</code></pre>

<hr>

<h2 id="phan-5-hardening">PHẦN 5: SECURITY HARDENING CHECKLIST</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>#</th><th>Item</th><th>Status</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>RBAC enabled, no cluster-admin for apps</td><td>☐</td></tr>
<tr><td>2</td><td>Pod Security Standards enforced</td><td>☐</td></tr>
<tr><td>3</td><td>ServiceAccount token auto-mount disabled</td><td>☐</td></tr>
<tr><td>4</td><td>Network Policies deny-all default</td><td>☐</td></tr>
<tr><td>5</td><td>Audit logging enabled</td><td>☐</td></tr>
<tr><td>6</td><td>etcd encryption at rest</td><td>☐</td></tr>
<tr><td>7</td><td>API server on private network only</td><td>☐</td></tr>
<tr><td>8</td><td>Kubelet authn/authz enabled</td><td>☐</td></tr>
<tr><td>9</td><td>Container images signed/scanned</td><td>☐</td></tr>
<tr><td>10</td><td>Secrets in Vault (not plain K8s secrets)</td><td>☐</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>RBAC</strong>: Least privilege — only grant needed verbs/resources</li>
<li><strong>ServiceAccount</strong>: Per-workload, disable token auto-mount</li>
<li><strong>PSS</strong>: Enforce Restricted for production namespaces</li>
<li><strong>Audit</strong>: Log secret access, RBAC changes, pod exec</li>
<li><strong>SecurityContext</strong>: runAsNonRoot, drop ALL capabilities, readOnlyRootFilesystem</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: RBAC Setup</h3>
<ul>
<li>Create developer/ops Roles with different permissions</li>
<li>Test access with kubectl --as=developer</li>
<li>Enable audit logging, verify secret access is logged</li>
</ul>

<h3 id="bt2">Bài tập 2: Pod Security</h3>
<ul>
<li>Label namespace with restricted PSS</li>
<li>Deploy a privileged pod → verify rejection</li>
<li>Fix pod to comply with restricted level</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 37: Kyverno Policy Engine</strong>, chúng ta sẽ implement policy-as-code cho cluster.</p>
