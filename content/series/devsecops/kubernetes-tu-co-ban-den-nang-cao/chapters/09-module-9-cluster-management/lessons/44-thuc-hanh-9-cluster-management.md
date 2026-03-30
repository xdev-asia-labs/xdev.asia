---
id: 019c9618-060b-7000-8000-c1147ba22e16
title: 'BÀI 43: THỰC HÀNH — CLUSTER MANAGEMENT'
slug: thuc-hanh-9-cluster-management
description: >-
  Bài thực hành Module 9: Nâng cấp Kubernetes cluster, etcd backup/restore, node drain/maintenance,
  ResourceQuota, LimitRange, VPA, In-Place Pod Resize, Velero backup.
duration_minutes: 180
is_free: false
video_url: null
sort_order: 43
section_title: 'Module 9: Cluster Management'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2>🎯 Mục tiêu bài thực hành</h2>
<ul>
  <li>Drain node và thực hiện node maintenance</li>
  <li>Backup và restore etcd</li>
  <li>Cấu hình ResourceQuota và LimitRange</li>
  <li>Test In-Place Pod Resource resize</li>
  <li>Cài và test VPA recommendations</li>
  <li>Backup cluster với Velero</li>
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

<h2>Lab 2: etcd Backup và Restore</h2>
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

<h2>Lab 3: ResourceQuota và LimitRange</h2>
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

<h2>Lab 6: Velero Backup</h2>
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

<h2>Tổng kết</h2>
<ul>
  <li>✅ Node drain/cordon/uncordon: maintenance workflow chuẩn</li>
  <li>✅ etcd backup: snapshot và verify</li>
  <li>✅ ResourceQuota: giới hạn resources per namespace</li>
  <li>✅ LimitRange: default resources cho pods</li>
  <li>✅ In-Place Resize: thay đổi CPU/Memory không restart pod</li>
  <li>✅ VPA: tự động recommend resources phù hợp</li>
  <li>✅ Velero: backup và restore namespace-level</li>
</ul>
