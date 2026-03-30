---
id: 019c9618-0608-7000-8000-c1147ba22e16
title: 'BÀI 40: NODE MANAGEMENT'
slug: bai-40-node-management
description: >-
  Node management trong Kubernetes: node lifecycle, cordoning, draining, taints và tolerations,
  node affinity, topology spread constraints, node problem detector, graceful node shutdown.
duration_minutes: 70
is_free: false
video_url: null
sort_order: 40
section_title: 'Module 9: Cluster Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài học</h2><p>Hiểu cách quản lý node lifecycle trong production: maintenance, taints/tolerations, node affinity, topology spread, và tự động phát hiện node problems.</p>

<h2>1. Node Lifecycle</h2>
<pre><code class="language-bash"># Xem tất cả nodes và status
kubectl get nodes -o wide
kubectl describe node worker-1

# Node conditions
kubectl get node worker-1 -o jsonpath='{.status.conditions}' | jq
# Ready, MemoryPressure, DiskPressure, PIDPressure, NetworkUnavailable

# Xem node resources
kubectl top nodes
kubectl describe node worker-1 | grep -A5 "Allocated resources"
</code></pre>

<h2>2. Cordon và Drain</h2>
<pre><code class="language-bash"># Cordon: node ngừng nhận pods mới (pods đang chạy không bị ảnh hưởng)
kubectl cordon worker-1
kubectl get node worker-1
# STATUS: Ready,SchedulingDisabled

# Drain: chuyển pods sang nodes khác (cho maintenance)
kubectl drain worker-1 \
  --ignore-daemonsets \        # bỏ qua DaemonSet pods
  --delete-emptydir-data \     # xóa emptyDir data
  --grace-period=60 \          # grace period cho pod termination
  --timeout=300s               # timeout tổng

# Sau maintenance, uncordon để node nhận pods trở lại
kubectl uncordon worker-1

# Force drain nếu có pods không evict được
kubectl drain worker-1 --force --ignore-daemonsets --delete-emptydir-data
</code></pre>

<h2>3. Taints và Tolerations</h2>
<pre><code class="language-bash"># Taint nodes
kubectl taint nodes gpu-node-1 dedicated=gpu:NoSchedule
kubectl taint nodes spot-node-1 cloud.google.com/gke-spot=true:NoSchedule
kubectl taint nodes maintenance-node lifecycle=draining:NoExecute  # evict ngay cả pods đang chạy

# Remove taint
kubectl taint nodes gpu-node-1 dedicated=gpu:NoSchedule-   # dấu - ở cuối = remove

# Xem taints
kubectl describe node gpu-node-1 | grep Taints
</code></pre>
<pre><code class="language-yaml"># Toleration trong Pod/Deployment
spec:
  tolerations:
  # Match exact taint
  - key: dedicated
    operator: Equal
    value: gpu
    effect: NoSchedule
  # Match any taint với key này
  - key: cloud.google.com/gke-spot
    operator: Exists
    effect: NoSchedule
  # Tolerate NoExecute với thời gian giới hạn
  - key: node.kubernetes.io/not-ready
    operator: Exists
    effect: NoExecute
    tolerationSeconds: 300    # pod ở lại 300s trước khi bị evict
</code></pre>

<h2>4. Node Affinity</h2>
<pre><code class="language-yaml">spec:
  affinity:
    nodeAffinity:
      # Bắt buộc: pod chỉ schedule trên nodes này
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: kubernetes.io/arch
            operator: In
            values: ["amd64", "arm64"]
          - key: node.kubernetes.io/instance-type
            operator: In
            values: ["c5.2xlarge", "c5.4xlarge"]
      # Preferred: ưu tiên schedule trên nodes này (không bắt buộc)
      preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 100
        preference:
          matchExpressions:
          - key: topology.kubernetes.io/zone
            operator: In
            values: ["ap-southeast-1a"]
</code></pre>

<h2>5. Topology Spread Constraints</h2>
<p>Phân bổ pods đều trên zones/nodes để tăng availability:</p>
<pre><code class="language-yaml">spec:
  topologySpreadConstraints:
  # Spread đều trên zones
  - maxSkew: 1               # chênh lệch tối đa giữa các zones
    topologyKey: topology.kubernetes.io/zone
    whenUnsatisfiable: DoNotSchedule   # hoặc ScheduleAnyway
    labelSelector:
      matchLabels:
        app: my-app
  # Spread đều trên nodes
  - maxSkew: 2
    topologyKey: kubernetes.io/hostname
    whenUnsatisfiable: ScheduleAnyway
    labelSelector:
      matchLabels:
        app: my-app
</code></pre>

<h2>6. Node Problem Detector</h2>
<pre><code class="language-bash"># Cài Node Problem Detector (phát hiện node-level issues)
kubectl apply -f https://raw.githubusercontent.com/kubernetes/node-problem-detector/master/deployment/node-problem-detector.yaml

# NPD detect:
# - Kernel deadlock (unregister_netdevice hung)
# - OOM events
# - disk I/O errors
# - Container runtime errors

# Xem node conditions do NPD thêm vào
kubectl describe node worker-1 | grep -A20 "Conditions"
# KernelDeadlock: False
# ReadonlyFilesystem: False
# FrequentKubeletRestart: False
# FrequentDockerRestart: False

# NPD tích hợp với cluster autoscaler để thay thế bad nodes tự động
</code></pre>

<h2>7. Graceful Node Shutdown</h2>
<pre><code class="language-bash"># K8s 1.21+: kubelet biết khi node shutdown và gracefully terminate pods
# Cấu hình trong /var/lib/kubelet/config.yaml

cat &lt;&lt;EOF &gt;&gt; /var/lib/kubelet/config.yaml
shutdownGracePeriod: 60s              # tổng thời gian cho shutdown
shutdownGracePeriodCriticalPods: 10s  # thời gian cho critical pods
EOF

# K8s 1.29+: Non-graceful node shutdown handling
# Nếu node crash mà không shutdown gracefully, admin có thể manually trigger taint
kubectl taint node [crashed-node] node.kubernetes.io/out-of-service=nodeshutdown:NoExecute

# Pods với PersistentVolumeClaims sẽ bị force-deleted và rescheduled
# Sau khi node recover:
kubectl taint node [crashed-node] node.kubernetes.io/out-of-service-
</code></pre>

<h2>8. Node Auto-Provisioning với Karpenter</h2>
<pre><code class="language-yaml"># Karpenter (thay Cluster Autoscaler) — chọn instance type phù hợp workload
# NodePool: define node provisioning rules
apiVersion: karpenter.sh/v1
kind: NodePool
metadata:
  name: general
spec:
  template:
    metadata:
      labels:
        nodepool: general
    spec:
      nodeClassRef:
        apiVersion: karpenter.k8s.aws/v1
        kind: EC2NodeClass
        name: default
      requirements:
      - key: karpenter.sh/capacity-type
        operator: In
        values: ["on-demand", "spot"]
      - key: kubernetes.io/arch
        operator: In
        values: ["amd64", "arm64"]
      - key: karpenter.k8s.aws/instance-category
        operator: In
        values: ["c", "m", "r"]    # compute, memory, general
      - key: karpenter.k8s.aws/instance-generation
        operator: Gt
        values: ["3"]
  disruption:
    consolidationPolicy: WhenEmptyOrUnderutilized
    consolidateAfter: 30s    # remove empty nodes sau 30s
  limits:
    cpu: "1000"              # max CPU trong pool
    memory: 4000Gi
</code></pre>

<h2>Tóm tắt</h2>
<ul>
  <li>Cordon + Drain: quy trình chuẩn cho node maintenance</li>
  <li>Taints/Tolerations: điều khiển workload placement (dedicated nodes)</li>
  <li>Node Affinity: ràng buộc instance type, arch, zone</li>
  <li>Topology Spread Constraints: đảm bảo pods phân bổ đều trên zones/nodes</li>
  <li>Node Problem Detector: phát hiện node-level issues tự động</li>
  <li>Karpenter: auto-provisioning thông minh hơn Cluster Autoscaler</li>
</ul>
