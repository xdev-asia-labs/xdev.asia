---
id: 019c9618-0609-7000-8000-c1147ba22e16
title: 'BÀI 41: RESOURCE MANAGEMENT VÀ QOS'
slug: bai-41-resource-management-va-qos
description: >-
  Resource management trong Kubernetes: ResourceQuota, LimitRange, Quality of Service classes,
  In-Place Pod Resource Updates (K8s 1.35), VPA, Overcommit strategy, MemoryManager, CPU pinning.
duration_minutes: 80
is_free: false
video_url: null
sort_order: 41
section_title: 'Module 9: Cluster Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Hiểu cách quản lý resources trong Kubernetes cluster: Requests/Limits, QoS classes, ResourceQuota, LimitRange, In-Place Updates (K8s 1.35 GA), và Vertical Pod Autoscaler.</p>

<h2>1. Requests và Limits</h2>
<pre><code class="language-yaml">spec:
  containers:
  - name: app
    resources:
      requests:          # scheduler dùng để chọn node
        cpu: "250m"      # 250 millicores = 0.25 CPU
        memory: "256Mi"
      limits:            # container không được vượt quá
        cpu: "1"         # 1 CPU core
        memory: "512Mi"
        # K8s 1.34+: GPU request qua DRA
        # nvidia.com/gpu: "1"  ← cách cũ (device plugin)
</code></pre>
<p><strong>Quan trọng</strong>: CPU limit → throttling (không kill), Memory limit → OOMKilled (kill process).</p>

<h2>2. Quality of Service (QoS) Classes</h2>
<pre><code class="language-bash"># Kubernetes assign QoS class tự động dựa trên resources:

# Guaranteed (best): requests == limits cho tất cả containers
# → Pods được evict cuối cùng khi node pressure

# Burstable: requests < limits hoặc không set limits
# → Evict trước Guaranteed khi node bị OOM

# BestEffort: không set requests/limits
# → Evict đầu tiên khi node bị OOM

kubectl get pod my-pod -o jsonpath='{.status.qosClass}'
# Guaranteed / Burstable / BestEffort
</code></pre>
<pre><code class="language-yaml"># Guaranteed QoS example
spec:
  containers:
  - name: app
    resources:
      requests:
        cpu: "500m"
        memory: "512Mi"
      limits:
        cpu: "500m"    # requests == limits
        memory: "512Mi"
</code></pre>

<h2>3. In-Place Pod Resource Updates — K8s 1.35 GA</h2>
<p>Tính năng mới nhất: thay đổi CPU/Memory resources mà không cần restart pod!</p>
<pre><code class="language-bash"># Feature gate đã GA trong K8s 1.35 — mặc định enabled

# Xem current resources
kubectl get pod my-pod -o jsonpath='{.spec.containers[0].resources}'

# Resize CPU/Memory không cần restart
kubectl patch pod my-pod --subresource=resize --patch '
{
  "spec": {
    "containers": [
      {
        "name": "app",
        "resources": {
          "requests": {"cpu": "500m", "memory": "512Mi"},
          "limits": {"cpu": "1", "memory": "1Gi"}
        }
      }
    ]
  }
}'

# Xem resize status
kubectl describe pod my-pod | grep -A5 "Resize"
# Conditions:
#   Type     Status
#   Resize   InProgress / Deferred / Infeasible

# Khi nào cần restart (ResizePolicy):
# CPU: không cần restart (default)
# Memory: có thể cần restart tùy OS
</code></pre>
<pre><code class="language-yaml"># Định nghĩa resizePolicy trong Pod spec
spec:
  containers:
  - name: app
    resizePolicy:
    - resourceName: cpu
      restartPolicy: NotRequired   # resize không restart
    - resourceName: memory
      restartPolicy: RestartContainer  # resize cần restart container
</code></pre>

<h2>4. ResourceQuota</h2>
<pre><code class="language-yaml">apiVersion: v1
kind: ResourceQuota
metadata:
  name: production-quota
  namespace: production
spec:
  hard:
    # Compute resources
    requests.cpu: "20"        # tổng CPU requests trong namespace
    requests.memory: 40Gi
    limits.cpu: "40"
    limits.memory: 80Gi

    # Object count
    pods: "100"
    services: "20"
    services.nodeports: "0"   # không cho NodePort
    persistentvolumeclaims: "20"
    secrets: "50"
    configmaps: "50"

    # Storage
    requests.storage: "500Gi"
    gold.storageclass.storage.k8s.io/requests.storage: "100Gi"
</code></pre>
<pre><code class="language-bash"># Xem quota usage
kubectl describe resourcequota -n production
# Name:              production-quota
# Namespace:         production
# Resource           Used   Hard
# --------           ----   ----
# limits.cpu         2500m  40
# limits.memory      5Gi    80Gi
# pods               12     100

# Xem quota detail
kubectl get resourcequota -n production -o yaml
</code></pre>

<h2>5. LimitRange</h2>
<pre><code class="language-yaml"># LimitRange: set default requests/limits cho pods trong namespace
apiVersion: v1
kind: LimitRange
metadata:
  name: default-limits
  namespace: production
spec:
  limits:
  - type: Container
    default:             # default limits nếu không set
      cpu: "500m"
      memory: "256Mi"
    defaultRequest:      # default requests nếu không set
      cpu: "100m"
      memory: "128Mi"
    max:                 # container không được vượt
      cpu: "4"
      memory: "4Gi"
    min:                 # container phải có ít nhất
      cpu: "50m"
      memory: "64Mi"
  - type: PersistentVolumeClaim
    max:
      storage: "10Gi"
    min:
      storage: "1Gi"
</code></pre>

<h2>6. Vertical Pod Autoscaler (VPA)</h2>
<pre><code class="language-bash"># Cài VPA
kubectl apply -f https://github.com/kubernetes/autoscaler/raw/master/vertical-pod-autoscaler/hack/vpa-up.sh

# VPA tự động suggest/set resources phù hợp dựa trên actual usage
</code></pre>
<pre><code class="language-yaml">apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: my-app-vpa
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  updatePolicy:
    updateMode: Auto    # Auto / Off (chỉ recommend) / Initial (chỉ khi pod tạo mới)
  resourcePolicy:
    containerPolicies:
    - containerName: app
      minAllowed:
        cpu: "50m"
        memory: "64Mi"
      maxAllowed:
        cpu: "4"
        memory: "4Gi"
      controlledResources: ["cpu", "memory"]
</code></pre>
<pre><code class="language-bash"># Xem VPA recommendations
kubectl describe vpa my-app-vpa
# Recommendation:
#   Container Recommendations:
#     Container Name: app
#     Lower Bound:    cpu: 50m, memory: 128Mi
#     Target:         cpu: 250m, memory: 256Mi    ← VPA suggest dùng cái này
#     Upper Bound:    cpu: 1, memory: 1Gi
</code></pre>

<h2>7. CPU Manager và Topology Manager</h2>
<pre><code class="language-bash"># CPU Manager (kubelet feature): pin CPU cores cho critical workloads
# Enable trong kubelet config:
cat &lt;&lt;EOF &gt;&gt; /var/lib/kubelet/config.yaml
cpuManagerPolicy: static    # default: none
cpuManagerReconcilePeriod: 10s
EOF

# Topology Manager: đảm bảo CPU + Memory + GPU aligned trên NUMA node
# Quan trọng cho latency-sensitive workloads (telco, HPC, ML)
cat &lt;&lt;EOF &gt;&gt; /var/lib/kubelet/config.yaml
topologyManagerPolicy: best-effort   # none/best-effort/restricted/single-numa-node
topologyManagerScope: pod
EOF

# Pod phải có Guaranteed QoS để được CPU pinning
# requests.cpu phải là integer (không phải millicores)
</code></pre>

<h2>8. Priority và Preemption</h2>
<pre><code class="language-yaml"># PriorityClass: pods quan trọng có thể preempt pods khác
apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: high-priority
value: 1000000       # số càng cao càng ưu tiên
preemptionPolicy: PreemptLowerPriority
globalDefault: false
description: "Critical production workloads"
---
# Built-in priority classes:
# system-cluster-critical: 2000000000 (kube-dns, Cilium)
# system-node-critical: 2000001000 (kubelet, kube-proxy)
</code></pre>
<pre><code class="language-yaml"># Dùng PriorityClass trong Pod
spec:
  priorityClassName: high-priority
  containers:
  - name: app
    ...
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>Requests/Limits: requests cho scheduling, limits cho enforcement</li>
  <li>QoS: Guaranteed > Burstable > BestEffort — quyết định thứ tự eviction</li>
  <li>In-Place Updates (K8s 1.35 GA): resize CPU/Memory không cần restart</li>
  <li>ResourceQuota: giới hạn total resources per namespace</li>
  <li>LimitRange: default và max/min per container</li>
  <li>VPA: tự động suggest/set resources phù hợp</li>
  <li>CPU Manager: pin cores cho Guaranteed pods — giảm latency</li>
</ul>
