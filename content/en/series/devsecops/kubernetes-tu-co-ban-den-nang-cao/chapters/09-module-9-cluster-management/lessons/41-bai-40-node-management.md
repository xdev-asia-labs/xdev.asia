---
id: 019c9618-0608-7000-8000-c1147ba22e16
title: 'LESSON 40: NODE MANAGEMENT'
slug: bai-40-node-management
description: 'Node management in Kubernetes: node lifecycle, cordoning, draining, taints and tolerations, node affinity, topology spread constraints, node problem detector, graceful node shutdown.'
duration_minutes: 70
is_free: false
video_url: null
sort_order: 40
section_title: 'Module 9: Cluster Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-204" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-204)"/>

  <!-- Decorations -->
  <g>
    <circle cx="600" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="50" x2="1100" y2="130" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="80" x2="1050" y2="150" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="921.650635094611,87.5 921.650635094611,112.5 900,125 878.349364905389,112.5 878.349364905389,87.5 900,75" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — Lesson 40</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 40: NODE MANAGEMENT</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 9: Cluster Management</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Lesson Objective</h2><p>Understand how to manage node lifecycle in production: maintenance, taints/tolerations, node affinity, topology spread, and automatically detect node problems.</p>

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

<h2>2. Cordon and Drain</h2>
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

<h2>3. Taints and Tolerations</h2>
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
<p>Distribute pods evenly across zones/nodes to increase availability:</p>
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

<h2>8. Node Auto-Provisioning with Karpenter</h2>
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

<h2>Summary</h2>
<ul>
  <li>Cordon + Drain: standard process for node maintenance</li>
  <li>Taints/Tolerations: controls workload placement (dedicated nodes)</li>
  <li>Node Affinity: binding instance type, arch, zone</li>
  <li>Topology Spread Constraints: ensure pods are evenly distributed across zones/nodes</li>
  <li>Node Problem Detector: detect node-level issues automatically__HTMLTAG_99___
  <li>Karpenter: smarter auto-provisioning than Cluster Autoscaler</li>
</ul>