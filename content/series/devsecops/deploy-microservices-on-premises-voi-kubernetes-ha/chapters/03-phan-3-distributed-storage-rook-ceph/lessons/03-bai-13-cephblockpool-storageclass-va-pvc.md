---
id: 019e1a00-aa01-7001-c001-k8sha000303
title: 'BÀI 13: CEPHBLOCKPOOL, STORAGECLASS VÀ PVC'
slug: bai-13-cephblockpool-storageclass-va-pvc
description: >-
  Tạo CephBlockPool với replication, StorageClass cho dynamic
  provisioning, PersistentVolumeClaim, test với StatefulSet,
  snapshot và clone volumes.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 'Phần 3: Distributed Storage — Rook-Ceph'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7760" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7760)"/>

  <!-- Decorations -->
  <g>
    <circle cx="859" cy="207" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="618" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="877" cy="65" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="636" cy="124" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="895" cy="183" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="157" x2="1100" y2="237" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="187" x2="1050" y2="257" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1034.712812921102,191 1034.712812921102,223 1007,239 979.287187078898,223 979.287187078898,191 1007,175" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Bài 13</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 13: CEPHBLOCKPOOL, STORAGECLASS VÀ PVC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Distributed Storage — Rook-Ceph</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Tạo CephBlockPool với replication factor 3</li>
<li>✅ Tạo StorageClass cho dynamic PV provisioning</li>
<li>✅ Tạo PVC và mount vào Pod/StatefulSet</li>
<li>✅ Volume snapshot và restore</li>
<li>✅ Volume cloning</li>
</ul>

<hr>

<h2 id="phan-1-ceph-block-pool">PHẦN 1: CEPH BLOCK POOL</h2>

<h3 id="11-tao-block-pool">1.1. Tạo CephBlockPool</h3>
<pre><code class="language-yaml"># ceph-block-pool.yaml:
apiVersion: ceph.rook.io/v1
kind: CephBlockPool
metadata:
  name: replicapool
  namespace: rook-ceph
spec:
  failureDomain: host              # Replicate across different hosts
  replicated:
    size: 3                         # 3 copies
    requireSafeReplicaSize: true    # Không cho write nếu < 3 replicas
  parameters:
    compression_mode: aggressive    # zstd compression
    target_size_ratio: "0.8"        # Pool chiếm tối đa 80% cluster
  mirroring:
    enabled: false
</code></pre>

<pre><code class="language-bash">kubectl apply -f ceph-block-pool.yaml

# Verify pool:
kubectl -n rook-ceph exec deploy/rook-ceph-tools -- ceph osd pool ls detail
# pool 1 'replicapool' replicated size 3 min_size 2 ...
</code></pre>

<h3 id="12-storage-class">1.2. StorageClass cho RBD</h3>
<pre><code class="language-yaml"># ceph-block-sc.yaml:
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: ceph-block
  annotations:
    storageclass.kubernetes.io/is-default-class: "true"   # Default StorageClass
provisioner: rook-ceph.rbd.csi.ceph.com
parameters:
  clusterID: rook-ceph
  pool: replicapool
  imageFormat: "2"
  imageFeatures: layering,fast-diff,object-map,deep-flatten,exclusive-lock
  
  csi.storage.k8s.io/provisioner-secret-name: rook-csi-rbd-provisioner
  csi.storage.k8s.io/provisioner-secret-namespace: rook-ceph
  csi.storage.k8s.io/controller-expand-secret-name: rook-csi-rbd-provisioner
  csi.storage.k8s.io/controller-expand-secret-namespace: rook-ceph
  csi.storage.k8s.io/node-stage-secret-name: rook-csi-rbd-node
  csi.storage.k8s.io/node-stage-secret-namespace: rook-ceph
  csi.storage.k8s.io/fstype: ext4

reclaimPolicy: Delete                   # PV bị xóa khi PVC bị xóa
allowVolumeExpansion: true              # Cho phép resize PVC
volumeBindingMode: Immediate
</code></pre>

<pre><code class="language-bash">kubectl apply -f ceph-block-sc.yaml

# Verify:
kubectl get storageclass
# NAME                   PROVISIONER                       RECLAIMPOLICY   VOLUMEBINDINGMODE
# ceph-block (default)   rook-ceph.rbd.csi.ceph.com        Delete          Immediate
</code></pre>

<hr>

<h2 id="phan-2-pvc-va-pods">PHẦN 2: PVC VÀ PODS</h2>

<h3 id="21-tao-pvc">2.1. Tạo PVC</h3>
<pre><code class="language-yaml"># test-pvc.yaml:
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: test-pvc
  namespace: default
spec:
  accessModes:
    - ReadWriteOnce               # RBD chỉ hỗ trợ RWO
  storageClassName: ceph-block
  resources:
    requests:
      storage: 5Gi
</code></pre>

<pre><code class="language-bash">kubectl apply -f test-pvc.yaml

# Verify PVC Bound:
kubectl get pvc test-pvc
# NAME       STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS
# test-pvc   Bound    pvc-xxxxx-xxxxx-xxxxx-xxxxx-xxxxxxxxxxxx   5Gi        RWO            ceph-block

# Verify PV tạo tự động:
kubectl get pv
# NAME                                       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM
# pvc-xxxxx-xxxxx-xxxxx-xxxxx-xxxxxxxxxxxx   5Gi        RWO            Delete           Bound    default/test-pvc

# Verify RBD image trên Ceph:
kubectl -n rook-ceph exec deploy/rook-ceph-tools -- rbd ls replicapool
# csi-vol-xxxxx-xxxxx-xxxxx-xxxxx-xxxxxxxxxxxx
</code></pre>

<h3 id="22-mount-vao-pod">2.2. Mount PVC vào Pod</h3>
<pre><code class="language-yaml"># test-pod.yaml:
apiVersion: v1
kind: Pod
metadata:
  name: test-storage
  namespace: default
spec:
  containers:
    - name: test
      image: busybox
      command: ["sh", "-c", "while true; do date >> /data/log.txt; sleep 5; done"]
      volumeMounts:
        - name: data
          mountPath: /data
  volumes:
    - name: data
      persistentVolumeClaim:
        claimName: test-pvc
</code></pre>

<pre><code class="language-bash">kubectl apply -f test-pod.yaml

# Verify data persistence:
kubectl exec test-storage -- cat /data/log.txt
# Mon Apr  2 07:00:05 UTC 2025
# Mon Apr  2 07:00:10 UTC 2025
# ...

# Delete pod:
kubectl delete pod test-storage

# Recreate pod → data vẫn còn:
kubectl apply -f test-pod.yaml
kubectl exec test-storage -- cat /data/log.txt
# Data cũ vẫn có! ✅ Persistent storage works
</code></pre>

<h3 id="23-statefulset">2.3. StatefulSet với volumeClaimTemplates</h3>
<pre><code class="language-yaml"># statefulset-test.yaml:
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
  namespace: default
spec:
  serviceName: "web"
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: nginx
          image: nginx:alpine
          volumeMounts:
            - name: data
              mountPath: /usr/share/nginx/html
  volumeClaimTemplates:
    - metadata:
        name: data
      spec:
        accessModes: ["ReadWriteOnce"]
        storageClassName: ceph-block
        resources:
          requests:
            storage: 2Gi
</code></pre>

<pre><code class="language-bash">kubectl apply -f statefulset-test.yaml

# Mỗi replica có PVC riêng:
kubectl get pvc
# NAME        STATUS   VOLUME    CAPACITY   STORAGECLASS
# data-web-0  Bound    pvc-xxx   2Gi        ceph-block
# data-web-1  Bound    pvc-yyy   2Gi        ceph-block
# data-web-2  Bound    pvc-zzz   2Gi        ceph-block
</code></pre>

<hr>

<h2 id="phan-3-volume-expansion">PHẦN 3: VOLUME EXPANSION</h2>

<pre><code class="language-bash"># Resize PVC (allowVolumeExpansion: true):
kubectl patch pvc test-pvc -p '{"spec": {"resources": {"requests": {"storage": "10Gi"}}}}'

# Verify:
kubectl get pvc test-pvc
# NAME       STATUS   VOLUME    CAPACITY   STORAGECLASS
# test-pvc   Bound    pvc-xxx   10Gi       ceph-block
# ↑ Đã resize từ 5Gi → 10Gi ✅

# ⚠️ Chỉ có thể EXPAND, không thể SHRINK
</code></pre>

<hr>

<h2 id="phan-4-volume-snapshot">PHẦN 4: VOLUME SNAPSHOT</h2>

<h3 id="41-snapshot-class">4.1. VolumeSnapshotClass</h3>
<pre><code class="language-yaml"># ceph-snapshot-class.yaml:
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshotClass
metadata:
  name: ceph-block-snapshot
driver: rook-ceph.rbd.csi.ceph.com
deletionPolicy: Delete
parameters:
  clusterID: rook-ceph
  csi.storage.k8s.io/snapshotter-secret-name: rook-csi-rbd-provisioner
  csi.storage.k8s.io/snapshotter-secret-namespace: rook-ceph
</code></pre>

<h3 id="42-tao-snapshot">4.2. Tạo Snapshot</h3>
<pre><code class="language-yaml"># snapshot.yaml:
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  name: test-pvc-snapshot
  namespace: default
spec:
  volumeSnapshotClassName: ceph-block-snapshot
  source:
    persistentVolumeClaimName: test-pvc
</code></pre>

<pre><code class="language-bash">kubectl apply -f snapshot.yaml

# Verify:
kubectl get volumesnapshot
# NAME                READYTOUSE   SOURCEPVC   RESTORESIZE   AGE
# test-pvc-snapshot   true         test-pvc    10Gi          30s
</code></pre>

<h3 id="43-restore-tu-snapshot">4.3. Restore từ Snapshot</h3>
<pre><code class="language-yaml"># restore-pvc.yaml:
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: restored-pvc
  namespace: default
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: ceph-block
  resources:
    requests:
      storage: 10Gi
  dataSource:
    name: test-pvc-snapshot
    kind: VolumeSnapshot
    apiGroup: snapshot.storage.k8s.io
</code></pre>

<pre><code class="language-bash">kubectl apply -f restore-pvc.yaml

# Verify restored PVC has data:
kubectl run restore-test --image=busybox \
  --overrides='{"spec":{"containers":[{"name":"test","image":"busybox","command":["cat","/data/log.txt"],"volumeMounts":[{"name":"data","mountPath":"/data"}]}],"volumes":[{"name":"data","persistentVolumeClaim":{"claimName":"restored-pvc"}}]}}' \
  --restart=Never
kubectl logs restore-test
# Data from snapshot! ✅
</code></pre>

<hr>

<h2 id="phan-5-volume-cloning">PHẦN 5: VOLUME CLONING</h2>

<pre><code class="language-yaml"># clone-pvc.yaml:
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: cloned-pvc
  namespace: default
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: ceph-block
  resources:
    requests:
      storage: 10Gi
  dataSource:
    name: test-pvc                  # Source PVC
    kind: PersistentVolumeClaim
</code></pre>

<pre><code class="language-bash">kubectl apply -f clone-pvc.yaml

# Clone tạo copy-on-write duplicate nhanh chóng
kubectl get pvc cloned-pvc
# STATUS: Bound ✅
</code></pre>

<hr>

<h2 id="phan-6-ceph-monitor">PHẦN 6: MONITORING STORAGE</h2>

<pre><code class="language-bash"># Ceph cluster capacity:
kubectl -n rook-ceph exec deploy/rook-ceph-tools -- ceph df
# --- RAW STORAGE ---
# CLASS    SIZE      AVAIL     USED      RAW USED   %RAW USED
# ssd      300 GiB   285 GiB   5.0 GiB   15 GiB     5.0
#
# --- POOLS ---
# POOL           ID   PGS   STORED    OBJECTS   USED      %USED
# replicapool    1    32    1.5 GiB   400       4.5 GiB   1.5

# OSD utilization:
kubectl -n rook-ceph exec deploy/rook-ceph-tools -- ceph osd df
# ID  CLASS  WEIGHT   REWEIGHT  SIZE     RAW USE  DATA     OMAP  META   AVAIL    %USE
# 0   ssd    0.09769  1.00000   100 GiB  5.0 GiB  1.5 GiB  0 B  48 MiB  95 GiB  5.0
# 1   ssd    0.09769  1.00000   100 GiB  5.0 GiB  1.5 GiB  0 B  48 MiB  95 GiB  5.0
# 2   ssd    0.09769  1.00000   100 GiB  5.0 GiB  1.5 GiB  0 B  48 MiB  95 GiB  5.0

# Cleanup test resources:
kubectl delete statefulset web
kubectl delete pod test-storage restore-test
kubectl delete pvc test-pvc restored-pvc cloned-pvc data-web-0 data-web-1 data-web-2
kubectl delete volumesnapshot test-pvc-snapshot
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>CephBlockPool</strong> với replicated.size=3 đảm bảo data an toàn</li>
<li><strong>StorageClass</strong> cho dynamic provisioning — PVC automatically creates PV</li>
<li><strong>allowVolumeExpansion</strong> cho phép resize PVC mà không cần recreate</li>
<li><strong>VolumeSnapshot</strong> tạo point-in-time backup nhanh (copy-on-write)</li>
<li><strong>Volume cloning</strong> hữu ích cho dev/test environments</li>
<li><strong>StatefulSet + volumeClaimTemplates</strong> = mỗi replica có PVC riêng</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Block Storage Lab</h3>
<ul>
<li>Tạo CephBlockPool, StorageClass</li>
<li>Tạo PVC 5Gi, mount vào pod, ghi data</li>
<li>Delete pod, recreate, verify data persist</li>
<li>Resize PVC lên 10Gi</li>
</ul>

<h3 id="bt2">Bài tập 2: Snapshot & Clone</h3>
<ul>
<li>Tạo VolumeSnapshot từ PVC</li>
<li>Restore PVC từ snapshot, verify data</li>
<li>Clone PVC, verify data identical</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 14: CephFS — Shared Filesystem cho ReadWriteMany</strong>, chúng ta sẽ cấu hình CephFS cho workloads cần nhiều pod chia sẻ cùng filesystem.</p>
