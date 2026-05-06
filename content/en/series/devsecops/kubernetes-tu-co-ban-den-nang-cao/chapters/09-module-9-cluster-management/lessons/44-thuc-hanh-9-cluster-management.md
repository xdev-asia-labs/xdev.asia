---
id: 019c9618-060b-7000-8000-c1147ba22e16
title: 'LESSON 43: PRACTICE — CLUSTER MANAGEMENT'
slug: thuc-hanh-9-cluster-management
description: 'Module 9 practice: Upgrade Kubernetes cluster, etcd backup/restore, node drain/maintenance, ResourceQuota, LimitRange, VPA, In-Place Pod Resize, Velero backup.'
duration_minutes: 180
is_free: false
video_url: null
sort_order: 43
section_title: 'Module 9: Cluster Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6085" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6085)"/>

  <!-- Decorations -->
  <g>
    <circle cx="883" cy="199" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="666" cy="82" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="949" cy="225" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="732" cy="108" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="1015" cy="251" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="209" x2="1100" y2="289" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="239" x2="1050" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.1051177665154,187 1047.1051177665154,231 1009,253 970.8948822334847,231 970.8948822334847,187 1009,165" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Lesson 43</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 43: PRACTICE — CLUSTER MANAGEMENT</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 9: Cluster Management</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 Practice objective</h2>
<ul>
  <li>Drain node and perform maintenance node__HTMLTAG_69___
  <li>Backup and restore etcd</li>
  <li>Configure ResourceQuota and LimitRange</li>
  <li>Test In-Place Pod Resource resize</li>
  <li>Install and test VPA recommendations__HTMLTAG_77___
  <li>Backup cluster with Velero</li>
</ul>

<h2>Lab 1: Node Maintenance</h2>
<pre><code class="language-bash">kubectl create namespace lab9

# Deploy test app
kubectl create deployment stress-app --image=polinux/stress -n lab9 --replicas=4
kubectl set resources deployment/stress-app -n lab9 \
  --requests=cpu=100m,memory=128Mi \
  --limits=cpu=200m,memory=256Mi

# Xem pods phân bổ trên nodes
kubectl get pods -n lab9 -o wide

# Chọn 1 node để maintenance
NODE=$(kubectl get pods -n lab9 -o wide | awk 'NR==2{print $7}')
echo "Draining node: $NODE"

# Cordon trước
kubectl cordon $NODE
kubectl get nodes   # SchedulingDisabled

# Drain (move pods sang node khác)
kubectl drain $NODE --ignore-daemonsets --delete-emptydir-data

# Verify pods moved
kubectl get pods -n lab9 -o wide   # tất cả pods trên nodes khác

# Simulate maintenance done, uncordon
kubectl uncordon $NODE
kubectl get nodes   # Ready

# Scale lên để pods schedule lại trên node vừa uncordon
kubectl scale deployment stress-app -n lab9 --replicas=8
kubectl get pods -n lab9 -o wide
</code></pre>

<h2>Lab 2: etcd Backup and Restore__HTMLTAG_84___
<pre><code class="language-bash"># Chỉ thực hiện trên control plane node (kind cluster dùng local setup)

# Dùng kind cluster với control plane accessible
# Lấy etcd pod
kubectl get pods -n kube-system -l component=etcd

# Exec vào etcd pod để backup
ETCD_POD=$(kubectl get pod -n kube-system -l component=etcd -o name | head -1)
kubectl exec -n kube-system $ETCD_POD -- sh -c \
  "ETCDCTL_API=3 etcdctl snapshot save /tmp/etcd-backup.db \
   --endpoints=https://127.0.0.1:2379 \
   --cacert=/etc/kubernetes/pki/etcd/ca.crt \
   --cert=/etc/kubernetes/pki/etcd/server.crt \
   --key=/etc/kubernetes/pki/etcd/server.key"

# Copy backup ra
kubectl cp kube-system/$ETCD_POD:/tmp/etcd-backup.db ./etcd-backup.db

# Verify backup
ETCDCTL_API=3 etcdctl snapshot status ./etcd-backup.db --write-out=table
# +-----------+----------+------------+------------+
# |   HASH    | REVISION | TOTAL KEYS | TOTAL SIZE |
# +-----------+----------+------------+------------+
# | xxxxxxxx  |     5000 |       1500 |     5.2 MB |
# +-----------+----------+------------+------------+

# Simulate disaster (xóa namespace)
kubectl delete namespace lab9

# Verify xóa thành công
kubectl get namespace lab9   # Error: not found

# Restore etcd (trên control plane, replace etcd data)
# LƯU Ý: Trong thực tế, cần stop etcd, restore, restart
# Với kubeadm cluster:
# 1. Backup /var/lib/etcd
# 2. etcdctl snapshot restore backup.db --data-dir=/var/lib/etcd-new
# 3. Update etcd pod manifest để dùng data dir mới
# 4. Restart etcd

echo "etcd restore process requires control plane access"
echo "Trong lab, tạo lại namespace để simulate recovery"
kubectl create namespace lab9
</code></pre>

<h2>Lab 3: ResourceQuota and LimitRange__HTMLTAG_86___
<pre><code class="language-bash"># Tạo ResourceQuota
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: ResourceQuota
metadata:
  name: lab9-quota
  namespace: lab9
spec:
  hard:
    requests.cpu: "2"
    requests.memory: 2Gi
    limits.cpu: "4"
    limits.memory: 4Gi
    pods: "10"
    persistentvolumeclaims: "5"
EOF

# Tạo LimitRange
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: LimitRange
metadata:
  name: lab9-limits
  namespace: lab9
spec:
  limits:
  - type: Container
    default:
      cpu: "200m"
      memory: "128Mi"
    defaultRequest:
      cpu: "100m"
      memory: "64Mi"
    max:
      cpu: "1"
      memory: "512Mi"
    min:
      cpu: "50m"
      memory: "32Mi"
EOF

# Test: Deploy pod không có resources (sẽ dùng LimitRange defaults)
kubectl run no-resources --image=nginx:1.27 -n lab9
kubectl describe pod no-resources -n lab9 | grep -A10 "Limits"
# Limits:
#   cpu:     200m
#   memory:  128Mi
# Requests:
#   cpu:     100m
#   memory:  64Mi

# Xem quota usage
kubectl describe resourcequota lab9-quota -n lab9

# Test quota enforcement: cố tạo pod vượt quota
kubectl run big-pod --image=nginx:1.27 -n lab9 \
  --requests=cpu=3,memory=3Gi --limits=cpu=3,memory=3Gi
# Error: forbidden: exceeded quota: lab9-quota

# Cleanup test pods
kubectl delete pod no-resources big-pod -n lab9 --ignore-not-found
</code></pre>

<h2>Lab 4: In-Place Pod Resource Resize</h2>
<pre><code class="language-bash"># Tạo pod với resources cụ thể
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
  name: resize-test
  namespace: lab9
spec:
  containers:
  - name: app
    image: nginx:1.27
    resources:
      requests:
        cpu: "100m"
        memory: "128Mi"
      limits:
        cpu: "200m"
        memory: "256Mi"
    resizePolicy:
    - resourceName: cpu
      restartPolicy: NotRequired
    - resourceName: memory
      restartPolicy: NotRequired
EOF

# Xem resources hiện tại
kubectl get pod resize-test -n lab9 -o jsonpath='{.spec.containers[0].resources}' | jq

# Resize CPU và Memory (K8s 1.35+ GA)
kubectl patch pod resize-test -n lab9 --subresource=resize --patch '{
  "spec": {
    "containers": [{
      "name": "app",
      "resources": {
        "requests": {"cpu": "200m", "memory": "256Mi"},
        "limits": {"cpu": "500m", "memory": "512Mi"}
      }
    }]
  }
}'

# Xem resize status
kubectl describe pod resize-test -n lab9 | grep -A3 "Resize\|resources"

# Pod không restart — verify
kubectl get pod resize-test -n lab9
# RESTARTS: 0
</code></pre>

<h2>Lab 5: VPA Recommendations</h2>
<pre><code class="language-bash"># Deploy app để VPA monitor
kubectl create deployment vpa-test --image=nginx:1.27 -n lab9 --replicas=2
kubectl set resources deployment/vpa-test -n lab9 \
  --requests=cpu=100m,memory=64Mi --limits=cpu=200m,memory=128Mi

# Cài VPA components (nếu chưa có)
# kubectl apply -f https://github.com/kubernetes/autoscaler/.../vpa-up.sh

# Tạo VPA object (mode: Off = chỉ recommend, không auto-apply)
cat &lt;&lt;EOF | kubectl apply -f -
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: vpa-test
  namespace: lab9
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: vpa-test
  updatePolicy:
    updateMode: "Off"   # chỉ recommend
  resourcePolicy:
    containerPolicies:
    - containerName: nginx
      minAllowed:
        cpu: 50m
        memory: 32Mi
      maxAllowed:
        cpu: 1
        memory: 512Mi
EOF

# Sau vài phút, xem recommendations
kubectl describe vpa vpa-test -n lab9
# Recommendation:
#   Container Recommendations:
#     Container Name:  nginx
#     Lower Bound:     cpu: 50m, memory: 32Mi
#     Target:          cpu: 100m, memory: 96Mi
#     Upper Bound:     cpu: 200m, memory: 256Mi
</code></pre>

<h2>Lab 6: Velero Backup__HTMLTAG_92___
<pre><code class="language-bash"># Setup Velero với MinIO (local S3-compatible storage)
# Deploy MinIO
kubectl apply -f - &lt;&lt;EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: minio
  namespace: velero
spec:
  replicas: 1
  selector:
    matchLabels:
      app: minio
  template:
    metadata:
      labels:
        app: minio
    spec:
      containers:
      - name: minio
        image: minio/minio:latest
        args: [server, /storage]
        env:
        - name: MINIO_ROOT_USER
          value: minio
        - name: MINIO_ROOT_PASSWORD
          value: minio123
        ports:
        - containerPort: 9000
EOF

kubectl expose deployment minio -n velero --port=9000

# Cài Velero với MinIO backend
velero install \
  --provider aws \
  --plugins velero/velero-plugin-for-aws:latest \
  --bucket velero \
  --secret-file ./credentials-velero \
  --backup-location-config \
    region=minio,s3ForcePathStyle="true",s3Url=http://minio.velero:9000 \
  --use-node-agent

# Tạo test data
kubectl create namespace backup-test
kubectl run nginx --image=nginx:1.27 -n backup-test
kubectl create configmap app-config --from-literal=key=value -n backup-test

# Backup namespace
velero backup create lab9-backup \
  --include-namespaces backup-test

velero backup describe lab9-backup
# Phase: Completed

# Simulate disaster
kubectl delete namespace backup-test

# Restore
velero restore create --from-backup lab9-backup
velero restore describe &lt;restore-name&gt;

# Verify
kubectl get all -n backup-test
kubectl get configmap -n backup-test
</code></pre>

<h2>Cleanup</h2>
<pre><code class="language-bash">kubectl delete namespace lab9
kubectl delete namespace backup-test
kubectl delete namespace velero
</code></pre>

<h2>Summary__HTMLTAG_96___
<ul>
  <li>✅ Node drain/cordon/uncordon: standard maintenance workflow</li>
  <li>✅ etcd backup: snapshot and verify</li>
  <li>✅ ResourceQuota: limit resources per namespace__HTMLTAG_103___
  <li>✅ LimitRange: default resources for pods</li>
  <li>✅ In-Place Resize: changing CPU/Memory does not restart pod</li>
  <li>✅ VPA: automatically recommend suitable resources</li>
  <li>✅ Velero: backup and restore namespace-level__HTMLTAG_111___
</ul>