---
id: 019e1a00-aa01-7001-c001-k8sha000302
title: 'BÀI 12: CÀI ĐẶT ROOK-CEPH OPERATOR VÀ CEPHCLUSTER'
slug: bai-12-cai-dat-rook-ceph-operator-va-cephcluster
description: >-
  Deploy Rook Operator bằng Helm, tạo CephCluster CRD trên 3
  worker nodes, verify MON/MGR/OSD pods, Ceph Dashboard,
  và troubleshooting common Ceph issues.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 12
section_title: 'Phần 3: Distributed Storage — Rook-Ceph'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3887" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3887)"/>

  <!-- Decorations -->
  <g>
    <circle cx="971" cy="243" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="842" cy="54" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="713" cy="125" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1084" cy="196" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="955" cy="267" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="233" x2="1100" y2="313" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="263" x2="1050" y2="333" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1007.2487113059643,169 1007.2487113059643,197 983,211 958.7512886940357,197 958.7512886940357,169 983,155" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Bài 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 12: CÀI ĐẶT ROOK-CEPH OPERATOR VÀ</tspan>
      <tspan x="60" dy="42">CEPHCLUSTER</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Distributed Storage — Rook-Ceph</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Deploy Rook Operator bằng Helm</li>
<li>✅ Tạo CephCluster CRD với 3 nodes</li>
<li>✅ Verify MON, MGR, OSD pods hoạt động</li>
<li>✅ Truy cập Ceph Dashboard</li>
<li>✅ Troubleshoot common Ceph deployment issues</li>
</ul>

<hr>

<h2 id="phan-1-prerequisites">PHẦN 1: PREREQUISITES</h2>

<h3 id="11-verify-disks">1.1. Verify disks trên worker nodes</h3>
<pre><code class="language-bash"># SSH vào MỖI worker node, kiểm tra disks:
lsblk -f
# NAME    FSTYPE FSVER LABEL UUID                                 MOUNTPOINTS
# sda                                                               
# ├─sda1  ext4   1.0         xxxx-xxxx                            /
# └─sda2  swap   1           xxxx-xxxx
# sdb                                    ← DISK TRỐNG cho Ceph OSD
# sdc                                    ← DISK TRỐNG cho Ceph OSD (nếu có)

# ⚠️ Disk cho Ceph PHẢI:
# - Không có filesystem, partition, hoặc LVM
# - Raw disk (unformatted)

# Xóa metadata cũ (nếu cần):
# ⚠️ SẼ XÓA TOÀN BỘ DATA TRÊN DISK
# wipefs -a /dev/sdb
# sgdisk --zap-all /dev/sdb
# dd if=/dev/zero of=/dev/sdb bs=1M count=100

# Load module RBD (trên MỖI node):
modprobe rbd
echo "rbd" >> /etc/modules-load.d/ceph.conf
</code></pre>

<h3 id="12-lvm2-package">1.2. Cài LVM2 (required by Ceph)</h3>
<pre><code class="language-bash"># Trên MỖI worker node:
apt-get install -y lvm2
</code></pre>

<hr>

<h2 id="phan-2-install-rook-operator">PHẦN 2: INSTALL ROOK OPERATOR</h2>

<h3 id="21-helm-install">2.1. Helm Install</h3>
<pre><code class="language-bash"># Add Rook Helm repo:
helm repo add rook-release https://charts.rook.io/release
helm repo update

# Install Rook Operator:
helm install rook-ceph rook-release/rook-ceph \
  --namespace rook-ceph \
  --create-namespace \
  --version v1.15.5 \
  --set csi.enableRbdDriver=true \
  --set csi.enableCephfsDriver=true \
  --set monitoring.enabled=true

# Verify operator running:
kubectl -n rook-ceph get pods
# NAME                                  READY   STATUS    RESTARTS   AGE
# rook-ceph-operator-xxxxx-xxxxx        1/1     Running   0          60s
</code></pre>

<hr>

<h2 id="phan-3-create-cephcluster">PHẦN 3: TẠO CEPHCLUSTER</h2>

<h3 id="31-cephcluster-crd">3.1. CephCluster CRD</h3>
<pre><code class="language-yaml"># ceph-cluster.yaml:
apiVersion: ceph.rook.io/v1
kind: CephCluster
metadata:
  name: rook-ceph
  namespace: rook-ceph
spec:
  cephVersion:
    image: quay.io/ceph/ceph:v19.2.0
    allowUnsupported: false
  dataDirHostPath: /var/lib/rook
  
  mon:
    count: 3                        # 3 MON cho HA
    allowMultiplePerNode: false     # Mỗi node 1 MON
  
  mgr:
    count: 2                        # 2 MGR (active-standby)
    allowMultiplePerNode: false
    modules:
      - name: dashboard
        enabled: true
      - name: prometheus
        enabled: true
      - name: pg_autoscaler
        enabled: true
  
  dashboard:
    enabled: true
    ssl: true
  
  monitoring:
    enabled: true                   # Prometheus metrics
  
  network:
    connections:
      encryption:
        enabled: false              # Enable nếu cần encryption in-transit
      compression:
        enabled: false
  
  crashCollector:
    disable: false
  
  cleanupPolicy:
    confirmation: ""                # Đặt "yes-really-destroy-data" để cleanup
  
  storage:
    useAllNodes: false              # Không tự dùng tất cả nodes
    useAllDevices: false            # Không tự dùng tất cả disks
    nodes:
      - name: worker1
        devices:
          - name: sdb               # Disk cho OSD trên worker1
      - name: worker2
        devices:
          - name: sdb               # Disk cho OSD trên worker2
      - name: worker3
        devices:
          - name: sdb               # Disk cho OSD trên worker3
  
  placement:
    mon:
      nodeAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          nodeSelectorTerms:
            - matchExpressions:
                - key: node-role.kubernetes.io/worker
                  operator: Exists
      tolerations: []
    osd:
      nodeAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          nodeSelectorTerms:
            - matchExpressions:
                - key: storage-node
                  operator: In
                  values:
                    - "true"
  
  resources:
    mon:
      requests:
        cpu: "500m"
        memory: "1Gi"
      limits:
        memory: "2Gi"
    mgr:
      requests:
        cpu: "500m"
        memory: "512Mi"
      limits:
        memory: "1Gi"
    osd:
      requests:
        cpu: "1"
        memory: "4Gi"
      limits:
        memory: "6Gi"
</code></pre>

<pre><code class="language-bash">kubectl apply -f ceph-cluster.yaml

# Monitor deployment progress:
kubectl -n rook-ceph get pods -w
# Đợi ~5-10 phút cho tất cả pods sẵn sàng
</code></pre>

<h3 id="32-verify-deployment">3.2. Verify Deployment</h3>
<pre><code class="language-bash"># Kiểm tra tất cả Ceph pods:
kubectl -n rook-ceph get pods -o wide
# NAME                                               READY   STATUS      RESTARTS   AGE     NODE
# csi-cephfsplugin-xxxxx                             2/2     Running     0          5m      worker1
# csi-cephfsplugin-xxxxx                             2/2     Running     0          5m      worker2
# csi-cephfsplugin-xxxxx                             2/2     Running     0          5m      worker3
# csi-cephfsplugin-provisioner-xxxxx-xxxxx           5/5     Running     0          5m      worker1
# csi-cephfsplugin-provisioner-xxxxx-xxxxx           5/5     Running     0          5m      worker2
# csi-rbdplugin-xxxxx                                2/2     Running     0          5m      worker1
# csi-rbdplugin-xxxxx                                2/2     Running     0          5m      worker2
# csi-rbdplugin-xxxxx                                2/2     Running     0          5m      worker3
# csi-rbdplugin-provisioner-xxxxx-xxxxx              5/5     Running     0          5m      worker1
# csi-rbdplugin-provisioner-xxxxx-xxxxx              5/5     Running     0          5m      worker2
# rook-ceph-mgr-a-xxxxx-xxxxx                        3/3     Running     0          3m      worker1
# rook-ceph-mgr-b-xxxxx-xxxxx                        3/3     Running     0          3m      worker2
# rook-ceph-mon-a-xxxxx-xxxxx                        2/2     Running     0          4m      worker1
# rook-ceph-mon-b-xxxxx-xxxxx                        2/2     Running     0          4m      worker2
# rook-ceph-mon-c-xxxxx-xxxxx                        2/2     Running     0          4m      worker3
# rook-ceph-operator-xxxxx-xxxxx                     1/1     Running     0          10m     worker1
# rook-ceph-osd-0-xxxxx-xxxxx                        2/2     Running     0          2m      worker1
# rook-ceph-osd-1-xxxxx-xxxxx                        2/2     Running     0          2m      worker2
# rook-ceph-osd-2-xxxxx-xxxxx                        2/2     Running     0          2m      worker3

# Verify Ceph status:
kubectl -n rook-ceph exec deploy/rook-ceph-tools -- ceph status
#   cluster:
#     id:     xxxxx-xxxxx-xxxxx-xxxxx
#     health: HEALTH_OK
#
#   services:
#     mon: 3 daemons, quorum a,b,c
#     mgr: a(active), standbys: b
#     osd: 3 osds: 3 up, 3 in
#
#   data:
#     pools:   0 pools, 0 pgs
#     objects: 0 objects, 0 B
#     usage:   3.0 GiB used, 297 GiB / 300 GiB avail
</code></pre>

<h3 id="33-deploy-toolbox">3.3. Deploy Ceph Toolbox</h3>
<pre><code class="language-yaml"># ceph-toolbox.yaml:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: rook-ceph-tools
  namespace: rook-ceph
spec:
  replicas: 1
  selector:
    matchLabels:
      app: rook-ceph-tools
  template:
    metadata:
      labels:
        app: rook-ceph-tools
    spec:
      containers:
        - name: rook-ceph-tools
          image: quay.io/ceph/ceph:v19.2.0
          command: ["/bin/bash", "-c", "sleep infinity"]
          env:
            - name: ROOK_CEPH_USERNAME
              valueFrom:
                secretKeyRef:
                  name: rook-ceph-mon
                  key: ceph-username
            - name: ROOK_CEPH_SECRET
              valueFrom:
                secretKeyRef:
                  name: rook-ceph-mon
                  key: ceph-secret
          volumeMounts:
            - name: ceph-config
              mountPath: /etc/ceph
            - name: mon-endpoint-volume
              mountPath: /etc/rook
      volumes:
        - name: ceph-config
          configMap:
            name: rook-ceph-mon-endpoints
            items:
              - key: data
                path: mon-endpoints
        - name: mon-endpoint-volume
          configMap:
            name: rook-ceph-mon-endpoints
</code></pre>

<pre><code class="language-bash">kubectl apply -f ceph-toolbox.yaml

# Sử dụng toolbox:
kubectl -n rook-ceph exec -it deploy/rook-ceph-tools -- bash
# Inside toolbox:
ceph status
ceph osd status
ceph osd tree
ceph df
rados df
</code></pre>

<hr>

<h2 id="phan-4-ceph-dashboard">PHẦN 4: CEPH DASHBOARD</h2>

<h3 id="41-get-dashboard-credentials">4.1. Get Dashboard Credentials</h3>
<pre><code class="language-bash"># Lấy password admin:
kubectl -n rook-ceph get secret rook-ceph-dashboard-password \
  -o jsonpath="{['data']['password']}" | base64 -d && echo
# Output: PaSsWoRd123

# Expose dashboard (port-forward cho test):
kubectl -n rook-ceph port-forward svc/rook-ceph-mgr-dashboard 8443:8443
# Mở browser: https://localhost:8443
# Username: admin
# Password: (từ command trên)

# Hoặc tạo Ingress (sẽ học ở Bài 24):
</code></pre>

<hr>

<h2 id="phan-5-troubleshooting">PHẦN 5: TROUBLESHOOTING</h2>

<h3 id="51-ceph-health-warnings">5.1. Ceph Health Warnings</h3>
<pre><code class="language-bash"># HEALTH_WARN: OSD count 0 < osd_pool_default_size 3
# → OSDs chưa được tạo, kiểm tra disk availability

# HEALTH_WARN: no active mgr
# → MGR pod chưa ready, kiểm tra logs:
kubectl -n rook-ceph logs deploy/rook-ceph-mgr-a

# HEALTH_WARN: Reduced data availability
# → Không đủ OSDs cho replication, kiểm tra:
kubectl -n rook-ceph exec deploy/rook-ceph-tools -- ceph osd tree

# OSD pod không start:
kubectl -n rook-ceph logs rook-ceph-osd-prepare-worker1-xxxxx
# Check: disk đã có data? → wipefs -a /dev/sdb
</code></pre>

<h3 id="52-operator-logs">5.2. Operator Logs</h3>
<pre><code class="language-bash"># Rook Operator logs (chi tiết nhất):
kubectl -n rook-ceph logs deploy/rook-ceph-operator --tail=100

# Filter error messages:
kubectl -n rook-ceph logs deploy/rook-ceph-operator | grep -i error
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Rook Operator</strong> quản lý toàn bộ Ceph lifecycle trên K8s</li>
<li><strong>CephCluster CRD</strong> định nghĩa cluster: nodes, devices, replicas, resources</li>
<li><strong>Disks phải clean</strong> (no partition, no filesystem) để Rook OSD prepare thành công</li>
<li><strong>3 MON + 2 MGR + 3 OSD</strong> là minimum cho HA production</li>
<li><strong>Toolbox pod</strong> cho direct ceph CLI access</li>
<li><strong>Dashboard</strong> web UI cho monitoring và management</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Deploy Ceph cluster</h3>
<ul>
<li>Verify disks trên worker nodes</li>
<li>Install Rook Operator bằng Helm</li>
<li>Create CephCluster, đợi HEALTH_OK</li>
</ul>

<h3 id="bt2">Bài tập 2: Explore Ceph</h3>
<ul>
<li>Deploy toolbox, chạy ceph status, ceph osd tree, ceph df</li>
<li>Truy cập Dashboard, explore UI</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 13: CephBlockPool, StorageClass và PVC</strong>, chúng ta sẽ tạo block storage pool và provisioning PersistentVolumes.</p>
