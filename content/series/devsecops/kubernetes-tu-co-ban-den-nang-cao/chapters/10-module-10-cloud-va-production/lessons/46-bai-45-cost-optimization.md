---
id: 019c9618-060d-7000-8000-c1147ba22e16
title: 'BÀI 45: COST OPTIMIZATION TRÊN KUBERNETES'
slug: bai-45-cost-optimization-kubernetes
description: >-
  Cost optimization Kubernetes 2026: Spot/Preemptible nodes, Karpenter consolidation, right-sizing
  với VPA, Kubecost, namespace budgets, idle resource cleanup, multi-tenant cost allocation.
duration_minutes: 75
is_free: false
video_url: null
sort_order: 45
section_title: 'Module 10: Cloud & Production'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6114" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6114)"/>

  <!-- Decorations -->
  <g>
    <circle cx="751" cy="183" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="902" cy="234" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1053" cy="285" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="704" cy="76" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="127" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="73" x2="1100" y2="153" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="103" x2="1050" y2="173" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.2487113059642,209 1047.2487113059642,237 1023,251 998.7512886940357,237 998.7512886940357,209 1023,195" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Bài 45</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 45: COST OPTIMIZATION TRÊN KUBERNETES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 10: Cloud &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Mục tiêu bài học</h2><p>Hiểu và áp dụng các chiến lược tối ưu chi phí Kubernetes trong cloud: Spot instances, right-sizing, node consolidation, và cost visibility tools.</p>

<h2>1. Tại sao K8s thường tốn kém hơn mong đợi?</h2>
<ul>
  <li><strong>Over-provisioning</strong>: requests/limits set quá cao so với actual usage</li>
  <li><strong>Idle nodes</strong>: nodes không được sử dụng hiệu quả (utilization &lt; 30%)</li>
  <li><strong>Kube-system overhead</strong>: daemonsets (Cilium, logging agents) chiếm resource</li>
  <li><strong>PVs không dùng</strong>: PersistentVolumes của environments đã xóa vẫn tính tiền</li>
  <li><strong>Load balancers</strong>: mỗi LoadBalancer Service = 1 cloud LB ($18-30/tháng)</li>
  <li><strong>Data transfer</strong>: cross-AZ traffic giữa pods tốn tiền</li>
</ul>

<h2>2. Spot/Preemptible Instances</h2>
<pre><code class="language-yaml"># Karpenter NodePool với spot instances
apiVersion: karpenter.sh/v1
kind: NodePool
metadata:
  name: spot-workers
spec:
  template:
    spec:
      nodeClassRef:
        apiVersion: karpenter.k8s.aws/v1
        kind: EC2NodeClass
        name: default
      requirements:
      - key: karpenter.sh/capacity-type
        operator: In
        values: ["spot"]          # chỉ dùng spot
      - key: karpenter.k8s.aws/instance-category
        operator: In
        values: ["c", "m", "r"]  # diversify instance families
      - key: karpenter.k8s.aws/instance-generation
        operator: Gt
        values: ["3"]
  disruption:
    budgets:
    - nodes: 20%    # tối đa 20% nodes bị replace cùng lúc
</code></pre>
<pre><code class="language-yaml"># Workloads chịu được spot interruption cần:
# 1. Toleration spot taint
# 2. PodDisruptionBudget
# 3. Graceful shutdown (terminationGracePeriodSeconds)

spec:
  tolerations:
  - key: karpenter.sh/capacity-type
    value: spot
    effect: NoSchedule

  terminationGracePeriodSeconds: 60   # handle SIGTERM trước khi spot terminate
</code></pre>

<h2>3. Karpenter Node Consolidation</h2>
<pre><code class="language-yaml"># Karpenter tự động consolidate: dồn pods vào ít nodes hơn
apiVersion: karpenter.sh/v1
kind: NodePool
metadata:
  name: general
spec:
  disruption:
    consolidationPolicy: WhenEmptyOrUnderutilized
    consolidateAfter: 1m    # remove sau 1 phút nếu underutilized
    # budgets: giới hạn số nodes bị disrupt cùng lúc
    budgets:
    - nodes: "10%"           # tối đa 10% nodes trong 1 lần
    - nodes: "0"             # không consolidate trong giờ cao điểm
      schedule: "0 8 * * 1-5"   # cron: 8am-5pm weekdays
      duration: 9h
</code></pre>
<pre><code class="language-bash"># Xem consolidation hoạt động
kubectl get nodes -w
# Nodes được terminate tự động khi utilization thấp

# Thống kê Karpenter
kubectl get nodeclaims
kubectl get nodepools -o wide

# Force consolidation
kubectl annotate nodepool general karpenter.sh/do-not-consolidate=false
</code></pre>

<h2>4. Right-sizing với VPA và Goldilocks</h2>
<pre><code class="language-bash"># Goldilocks: dashboard show VPA recommendations cho tất cả deployments
helm repo add fairwinds-stable https://charts.fairwinds.com/stable
helm install goldilocks fairwinds-stable/goldilocks \
  --namespace goldilocks \
  --create-namespace

# Enable namespace để Goldilocks monitor
kubectl label namespace production goldilocks.fairwinds.com/enabled=true

# Port-forward Goldilocks dashboard
kubectl port-forward -n goldilocks svc/goldilocks-dashboard 8080:80

# Dashboard hiện thị:
# - Current requests/limits
# - Recommended requests/limits
# - Potential savings
</code></pre>

<h2>5. Kubecost — Cost Visibility</h2>
<pre><code class="language-bash"># Cài Kubecost
helm repo add kubecost https://kubecost.github.io/cost-analyzer/
helm install kubecost kubecost/cost-analyzer \
  --namespace kubecost \
  --create-namespace \
  --set kubecostToken=xxx \    # free tier available
  --set prometheus.enabled=true

# Port-forward Kubecost UI
kubectl port-forward -n kubecost svc/kubecost-cost-analyzer 9090 &
echo "Kubecost: http://localhost:9090"

# Kubecost phân tích:
# - Cost per namespace, deployment, pod
# - Efficiency score (requests vs actual usage)
# - Idle resource cost
# - Recommendations
</code></pre>
<pre><code class="language-bash"># Kubecost API: lấy cost data programmatically
curl "http://localhost:9090/model/allocation?window=7d&aggregate=namespace" | jq

# Output:
# {
#   "production": {
#     "cpuCost": 45.20,
#     "memoryCost": 12.80,
#     "pvCost": 5.60,
#     "networkCost": 2.10,
#     "totalCost": 65.70
#   }
# }
</code></pre>

<h2>6. Giảm Load Balancer Costs</h2>
<pre><code class="language-bash"># Thay nhiều LoadBalancer Services bằng 1 Ingress Controller
# Trước: mỗi service có 1 LB
kubectl get services --all-namespaces | grep LoadBalancer
# production   service-a    LoadBalancer   $18/month
# production   service-b    LoadBalancer   $18/month
# staging      service-c    LoadBalancer   $18/month

# Sau: 1 Gateway/Ingress cho tất cả
# Gateway API: 1 Gateway → nhiều HTTPRoutes
# Ingress: 1 nginx-ingress-controller → nhiều Ingresses

# Internal services: dùng ClusterIP (không có LB)
# Chỉ dùng LoadBalancer cho edge services cần external access
</code></pre>

<h2>7. PersistentVolume Cleanup</h2>
<pre><code class="language-bash"># Tìm PVs không được bind (Released hoặc Available)
kubectl get pv | grep -E "Released|Available"

# Tìm PVCs không được dùng (không có pod nào dùng)
kubectl get pvc -A | grep -v Running

# Script: xóa PVCs không dùng trong namespaces đã xóa
kubectl get pv | grep Released | awk '{print $1}' | while read pv; do
  kubectl delete pv $pv
done

# Dùng reclaimPolicy: Delete (default cho EBS/GCE PD)
# Khi PVC xóa → PV tự động xóa → không tốn tiền
# reclaimPolicy: Retain → PV còn lại (cần manual delete)
</code></pre>

<h2>8. Optimize Cross-AZ Traffic</h2>
<pre><code class="language-yaml"># Topology Aware Routing: ưu tiên route traffic trong cùng AZ
apiVersion: v1
kind: Service
metadata:
  name: my-service
  annotations:
    service.kubernetes.io/topology-mode: "Auto"   # K8s 1.27+
spec:
  type: ClusterIP
  ports:
  - port: 80
  selector:
    app: my-app
</code></pre>
<pre><code class="language-bash"># Topology Spread: đảm bảo replicas phân bổ đều trên AZ
# Kết hợp với Topology Aware Routing:
# → Requests được serve bởi pod cùng AZ với client
# → Giảm cross-AZ data transfer costs

# Verify topology-aware routing
kubectl describe endpoints my-service
# Hints được thêm vào EndpointSlice
kubectl get endpointslice -l kubernetes.io/service-name=my-service -o yaml | grep hints
</code></pre>

<h2>9. Cost Optimization Summary</h2>
<pre><code class="language-bash">Strategy                  Savings Potential    Complexity
──────────────────────────────────────────────────────
Spot instances            50-80%              Medium
Right-sizing (VPA)        20-40%              Low
Node consolidation        15-30%              Low (Karpenter)
Reduce LoadBalancers      $18/LB/month        Low
Delete idle PVs           Varies              Low
Cross-AZ optimization     5-15%              Medium
Reserved instances        30-60%              Low (commit upfront)
ARM64/Graviton nodes      20-30% vs x86      Medium
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>Spot instances: 50-80% savings cho fault-tolerant workloads</li>
  <li>Karpenter consolidation: tự động dồn pods, xóa nodes idle</li>
  <li>Goldilocks + VPA: right-size resources dựa trên actual usage</li>
  <li>Kubecost: visibility vào cost per team/namespace/deployment</li>
  <li>1 Gateway thay nhiều LoadBalancers: tiết kiệm đáng kể</li>
  <li>Topology Aware Routing: giảm cross-AZ traffic costs</li>
</ul>
