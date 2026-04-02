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
