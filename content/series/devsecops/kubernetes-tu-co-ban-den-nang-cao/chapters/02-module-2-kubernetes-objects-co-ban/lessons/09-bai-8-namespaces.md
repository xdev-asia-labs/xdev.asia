---
id: 019c9618-0007-7000-8000-c1147ba22e10
title: 'BÀI 8: NAMESPACES'
slug: bai-8-namespaces
description: >-
  Tổ chức và phân tách resources với Namespaces trong Kubernetes. Resource quotas,
  LimitRanges, Network Policies per namespace. Best practices cho multi-tenancy và
  team isolation.
duration_minutes: 60
is_free: false
video_url: null
sort_order: 8
section_title: 'Module 2: Kubernetes Objects Cơ bản'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Hiểu Namespaces là cơ chế phân vùng tài nguyên trong Kubernetes cluster. Cách đặt Resource Quotas và LimitRanges để kiểm soát tài nguyên per namespace. Best practices cho multi-tenancy.</p>

<h2>1. Namespace là gì?</h2>
<p>Namespace cung cấp <strong>phạm vi tên (scope)</strong> cho Kubernetes resources. Hai Deployments tên <code>nginx</code> có thể tồn tại trong hai Namespaces khác nhau mà không conflict.</p>
<p>Namespace cho phép:</p>
<ul>
  <li><strong>Isolation</strong>: phân tách môi trường (dev, staging, production) hoặc teams (team-a, team-b)</li>
  <li><strong>Resource quotas</strong>: giới hạn tài nguyên per namespace</li>
  <li><strong>RBAC scoping</strong>: phân quyền per namespace</li>
  <li><strong>Network policies</strong>: kiểm soát traffic giữa namespaces</li>
</ul>

<h2>2. Default Namespaces</h2>
<ul>
  <li><strong>default</strong>: namespace mặc định khi không chỉ định</li>
  <li><strong>kube-system</strong>: components của Kubernetes control plane (CoreDNS, kube-proxy, metrics-server)</li>
  <li><strong>kube-public</strong>: readable bởi tất cả users, kể cả unauthenticated. Chứa cluster info</li>
  <li><strong>kube-node-lease</strong>: Node heartbeat leases — cải thiện performance của node failure detection</li>
</ul>
<pre><code class="language-bash">kubectl get namespaces
# hoặc
kubectl get ns
</code></pre>

<h2>3. Tạo và Quản lý Namespaces</h2>
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

<h2>4. Làm việc với Namespaces</h2>
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
</code></pre>

<h2>5. Resource Quotas</h2>
<p>ResourceQuota giới hạn tổng tài nguyên được phép dùng trong một namespace.</p>
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
<p>LimitRange đặt default requests/limits và min/max per container trong namespace. Nếu container không khai báo resources, LimitRange tự động áp dụng default.</p>
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
<p>Không phải mọi resource đều có namespace:</p>
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
  <li><strong>Một namespace per team và environment</strong>: <code>team-a-prod</code>, <code>team-a-staging</code>, <code>team-b-prod</code></li>
  <li><strong>Luôn đặt ResourceQuota</strong>: ngăn một team chiếm hết tài nguyên cluster</li>
  <li><strong>Dùng LimitRange</strong>: đảm bảo containers luôn có resource limits</li>
  <li><strong>Labels nhất quán</strong>: <code>team</code>, <code>environment</code>, <code>app</code></li>
  <li><strong>Hierarchical Namespaces Controller (HNC)</strong>: tổ chức namespaces theo cây, inherit policies từ parent</li>
</ul>
<pre><code class="language-bash"># Cài HNC
kubectl apply -f https://github.com/kubernetes-sigs/hierarchical-namespaces/releases/download/v1.1.0/default.yaml

# Tạo namespace hierarchy
kubectl hns create team-a-prod -n team-a
# Policies trong "team-a" tự động propagate xuống "team-a-prod"
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>Namespace = phạm vi tên và isolation cho resources</li>
  <li>4 default namespaces: default, kube-system, kube-public, kube-node-lease</li>
  <li>ResourceQuota: giới hạn tổng tài nguyên per namespace</li>
  <li>LimitRange: default và min/max per container</li>
  <li>Best practice: namespace per team per environment + ResourceQuota + LimitRange</li>
</ul>
