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
