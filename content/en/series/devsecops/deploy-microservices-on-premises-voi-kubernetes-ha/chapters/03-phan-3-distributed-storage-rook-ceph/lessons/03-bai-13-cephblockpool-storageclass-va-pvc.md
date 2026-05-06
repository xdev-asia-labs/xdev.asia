---
id: 019e1a00-aa01-7001-c001-k8sha000303
title: 'LESSON 13: CEPHBLOCKPOOL, STORAGECLASS AND PVC'
slug: bai-13-cephblockpool-storageclass-va-pvc
description: Create CephBlockPool with replication, StorageClass for dynamic provisioning, PersistentVolumeClaim, test with StatefulSet, snapshot and clone volumes.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 'Part 3: Distributed Storage — Rook-Ceph'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Deploy Microservices On-Premises with Kubernetes HA
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Lesson 13</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 13: CEPHBLOCKPOOL, STORAGECLASS AND PVC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises with Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Distributed Storage — Rook-Ceph</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 LESSON OBJECTIVE__HTMLTAG_66___
<p>After completing this lesson, you will:</p>
<ul>
<li>✅ Create CephBlockPool with replication factor 3</li>
<li>✅ Create StorageClass for dynamic PV provisioning</li>
<li>✅ Create PVC and mount it in Pod/StatefulSet</li>
<li>✅ Volume snapshot and restore</li>
<li>✅ Volume cloning</li>
</ul>

<hr>

<h2 id="phan-1-ceph-block-pool">PART 1: CEPH BLOCK POOL</h2>

<h3 id="11-tao-block-pool">1.1. Create CephBlockPool</h3>
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

<h3 id="12-storage-class">1.2. StorageClass for RBD</h3>
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

<h2 id="phan-2-pvc-va-pods">PART 2: PVC AND PODS</h2>

<h3 id="21-tao-pvc">2.1. Create PVC</h3>
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

<h3 id="22-mount-vao-pod">2.2. Mount PVC to Pod</h3>
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

<h3 id="23-statefulset">2.3. StatefulSet with volumeClaimTemplates</h3>
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

<h2 id="phan-3-volume-expansion">PART 3: VOLUME EXPANSION</h2>

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

<h2 id="phan-4-volume-snapshot">PART 4: VOLUME SNAPSHOT</h2>

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

<h3 id="42-tao-snapshot">4.2. Create Snapshot</h3>
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

<h3 id="43-restore-tu-snapshot">4.3. Restore from Snapshot</h3>
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

<h2 id="phan-5-volume-cloning">PART 5: VOLUME CLONING</h2>

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

<h2 id="phan-6-ceph-monitor">PART 6: MONITORING STORAGE</h2>

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

<hr><h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>CephBlockPool</strong> with replicated.size=3 ensures data safety</li>
<li><strong>StorageClass</strong> for dynamic provisioning — PVC automatically creates PV</li>
<li><strong>allowVolumeExpansion</strong> allows PVC to be resized without recreating</li>
<li><strong>VolumeSnapshot</strong> creates quick point-in-time backup (copy-on-write)</li>
<li><strong>Volume cloning</strong> useful for dev/test environments</li>
<li><strong>StatefulSet + volumeClaimTemplates</strong> = each replica has its own PVC</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 EXERCISES__HTMLTAG_146___

<h3 id="bt1">Exercise 1: Block Storage Lab</h3>
<ul>
<li>Create CephBlockPool, StorageClass</li>
<li>Create a 5Gi PVC, mount it in pod, write data</li>
<li>Delete pod, recreate, verify data persist</li>
<li>Resize PVC to 10Gi</li>
</ul>

<h3 id="bt2">Exercise 2: Snapshot & Clone</h3>
<ul>
<li>Create VolumeSnapshot from PVC</li>
<li>Restore PVC from snapshot, verify data__HTMLTAG_165___
<li>Clone PVC, verify data identical__HTMLTAG_167___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>In <strong>Lesson 14: CephFS — Shared Filesystem for ReadWriteMany</strong>, we will configure CephFS for workloads that need multiple pods to share the same filesystem.</p>