---
id: 019c9618-0007-7000-8000-c1147ba22e10
title: 'LESSON 8: NAMESPACES'
slug: bai-8-namespaces
description: Organize and separate resources with Namespaces in Kubernetes. Resource quotas, LimitRanges, Network Policies per namespace. Best practices for multi-tenancy and team isolation.
duration_minutes: 60
is_free: false
video_url: null
sort_order: 8
section_title: 'Module 2: Basic Kubernetes Objects'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-959" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-959)"/>

  <!-- Decorations -->
  <g>
    <circle cx="704" cy="242" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="808" cy="226" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="912" cy="210" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="1016" cy="194" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="620" cy="178" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="242" x2="1100" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="272" x2="1050" y2="342" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1024.0429399400243,173.5 1024.0429399400243,210.5 992,229 959.9570600599758,210.5 959.9570600599758,173.5 992,155" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Lesson 8</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 8: NAMESPACES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 2: Basic Kubernetes Objects</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Lesson Objective</h2><p>Understand Namespaces as a resource partitioning mechanism in a Kubernetes cluster. How to set Resource Quotas and LimitRanges to control resources per namespace. Best practices for multi-tenancy.</p>

<h2>1. What is Namespace?</h2>
<p>Namespace provides <strong>name scope (scope)</strong> for Kubernetes resources. Two Deployments named <code>nginx</code> can exist in two different Namespaces without conflict.</p>
<p>Namespace allowed:</p>
<ul>
  <li><strong>Isolation</strong>: separate environments (dev, staging, production) or teams (team-a, team-b)</li>
  <li><strong>Resource quotas</strong>: resource limits per namespace</li>
  <li><strong>RBAC scoping</strong>: permissions per namespace</li>
  <li><strong>Network policies</strong>: control traffic between namespaces</li>
</ul>

<h2>2. Default Namespaces</h2>
<ul>
  <li><strong>default</strong>: default namespace when not specified</li>
  <li><strong>kube-system</strong>: components of the Kubernetes control plane (CoreDNS, kube-proxy, metrics-server)</li>
  <li><strong>kube-public</strong>: readable by all users, even unauthenticated. Contains cluster info</li>
  <li><strong>kube-node-lease</strong>: Node heartbeat leases — improve performance of node failure detection</li>
</ul>
<pre><code class="language-bash">kubectl get namespaces
# hoặc
kubectl get ns
</code></pre>

<h2>3. Create and Manage Namespaces</h2>
<pre><code class="language-bash"># Tạo namespace
kubectl create namespace production
kubectl create namespace staging
kubectl create namespace team-a

# Tạo bằng YAML
kubectl apply -f - &lt;&lt;EOF
apiVersion: v1
kind: Namespace
metadata:
  name: production
  labels:
    environment: production
    team: platform
EOF

# Xóa namespace (xóa cả tất cả resources bên trong!)
kubectl delete namespace staging
</code></pre>

<h2>4. Working with Namespaces</h2>
<pre><code class="language-bash"># Chỉ định namespace với -n flag
kubectl get pods -n production
kubectl get all -n kube-system

# Xem resources ở tất cả namespaces
kubectl get pods --all-namespaces
kubectl get pods -A

# Đặt default namespace cho kubectl context
kubectl config set-context --current --namespace=production
# Sau đó không cần -n production nữa

# Dùng kubens (cài krew + kubens plugin)
kubens production
</code></pre><h2>5. Resource Quotas</h2>
<p>ResourceQuota limits the total resources allowed in a namespace.</p>
<pre><code class="language-yaml">apiVersion: v1
kind: ResourceQuota
metadata:
  name: team-a-quota
  namespace: team-a
spec:
  hard:
    # Compute resources
    requests.cpu: "4"          # tổng CPU requests không vượt 4 cores
    requests.memory: 8Gi       # tổng memory requests không vượt 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi
    # Object count
    pods: "20"                 # tối đa 20 pods
    services: "10"
    persistentvolumeclaims: "5"
    # Storage
    requests.storage: 100Gi
</code></pre>
<pre><code class="language-bash"># Xem quota usage
kubectl describe resourcequota team-a-quota -n team-a

# Output:
# Name: team-a-quota
# Namespace: team-a
# Resource              Used  Hard
# --------              ----  ----
# limits.cpu            2     8
# limits.memory         4Gi   16Gi
# pods                  8     20
</code></pre>

<h2>6. LimitRanges</h2>
<p>LimitRange sets default requests/limits and min/max per container in namespace. If the container does not declare resources, LimitRange automatically applies default.</p>
<pre><code class="language-yaml">apiVersion: v1
kind: LimitRange
metadata:
  name: default-limits
  namespace: team-a
spec:
  limits:
  - type: Container
    default:              # default limits nếu không khai báo
      cpu: "500m"
      memory: "256Mi"
    defaultRequest:       # default requests nếu không khai báo
      cpu: "100m"
      memory: "128Mi"
    min:                  # container phải request ít nhất
      cpu: "50m"
      memory: "64Mi"
    max:                  # container không được vượt
      cpu: "2"
      memory: "2Gi"
  - type: PersistentVolumeClaim
    max:
      storage: 10Gi
</code></pre>

<h2>7. RBAC per Namespace</h2>
<pre><code class="language-yaml"># Role chỉ có quyền trong namespace "team-a"
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: developer
  namespace: team-a
rules:
- apiGroups: ["apps"]
  resources: ["deployments", "replicasets"]
  verbs: ["get", "list", "create", "update", "patch"]
- apiGroups: [""]
  resources: ["pods", "services", "configmaps"]
  verbs: ["get", "list", "watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: developer-binding
  namespace: team-a
subjects:
- kind: User
  name: john
roleRef:
  kind: Role
  name: developer
  apiGroup: rbac.authorization.k8s.io
</code></pre>

<h2>8. Cross-namespace Communication</h2>
<pre><code class="language-bash"># Service trong namespace khác
curl http://backend-service.production.svc.cluster.local

# Với NetworkPolicy, bạn có thể chặn/cho phép cross-namespace traffic
</code></pre>

<h2>9. Namespace Scope vs Cluster Scope</h2>
<p>Not all resources have namespace:</p>
<ul>
  <li><strong>Namespaced</strong>: Pods, Deployments, Services, ConfigMaps, Secrets, PVCs, Roles, RoleBindings</li>
  <li><strong>Cluster-scoped</strong>: Nodes, PersistentVolumes, ClusterRoles, ClusterRoleBindings, Namespaces, StorageClasses</li>
</ul>
<pre><code class="language-bash"># Xem loại resources có namespace hay không
kubectl api-resources --namespaced=true
kubectl api-resources --namespaced=false
</code></pre>

<h2>10. Best Practices Multi-tenancy</h2>
<ul>
  <li><strong>A namespace per team and environment</strong>: <code>team-a-prod</code>, <code>team-a-staging__HTMLTAG_156___, <code>team-b-prod</code></li>
  <li><strong>Always set ResourceQuota</strong>: prevents one team from taking up all cluster resources</li>
  <li><strong>Use LimitRange</strong>: ensure containers always have resource limits</li>
  <li><strong>ConsistencyLabels</strong>: <code>team</code>, <code>environment</code>, <code>app</code></li>
  <li><strong>Hierarchical Namespaces Controller (HNC)</strong>: organize namespaces in a tree, inherit policies from parent</li>
</ul>
<pre><code class="language-bash"># Cài HNC
kubectl apply -f https://github.com/kubernetes-sigs/hierarchical-namespaces/releases/download/v1.1.0/default.yaml

# Tạo namespace hierarchy
kubectl hns create team-a-prod -n team-a
# Policies trong "team-a" tự động propagate xuống "team-a-prod"
</code></pre>

<h2>Summary</h2>
<ul>
  <li>Namespace = name scope and isolation for resources</li>
  <li>4 default namespaces: default, kube-system, kube-public, kube-node-lease</li>
  <li>ResourceQuota: limit total resources per namespace__HTMLTAG_191___
  <li>LimitRange: default and min/max per container__HTMLTAG_193___
  <li>Best practice: namespace per team per environment + ResourceQuota + LimitRange</li>
</ul>