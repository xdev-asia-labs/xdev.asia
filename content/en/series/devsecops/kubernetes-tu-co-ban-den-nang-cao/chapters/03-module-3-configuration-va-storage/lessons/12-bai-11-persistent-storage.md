---
id: 019c9618-0102-7000-8000-c1147ba22e11
title: 'LESSON 11: PERSISTENT STORAGE AND CSI'
slug: bai-11-persistent-storage-va-csi
description: Manage storage with PersistentVolumes, PersistentVolumeClaims, StorageClasses. CSI drivers must replace in-tree plugins (removed K8s 1.31). Dynamic provisioning, volume snapshots, new VolumeAttributesClass (K8s 1.29+).
duration_minutes: 90
is_free: false
video_url: null
sort_order: 11
section_title: 'Module 3: Configuration & Storage'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1172" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1172)"/>

  <!-- Decorations -->
  <g>
    <circle cx="721" cy="73" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="842" cy="174" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="963" cy="275" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1084" cy="116" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="705" cy="217" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="183" x2="1100" y2="263" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="213" x2="1050" y2="283" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1015.9089653438086,164 1015.9089653438086,202 983,221 950.0910346561914,202 950.0910346561914,164 983,145" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Lesson 11</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 11: PERSISTENT STORAGE AND CSI</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 3: Configuration &amp; Storage</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>Persistent Storage and CSI in Kubernetes__HTMLTAG_66___

<p>Containers are ephemeral — when a container restarts or Pod is rescheduled on another node, all data inside is lost. This is a serious problem with stateful workloads like databases, message queues, and file storage. Kubernetes solves this problem with a rich storage system, and from Kubernetes 1.30-1.31, in-tree storage plugins have been completely removed, replaced by <strong>Container Storage Interface (CSI)</strong> standardized drivers.</p>

<h2>Storage Lifecycle: From Ephemeral to Persistent__HTMLTAG_72___

<h3>emptyDir: Ephemeral Storage</h3>

<p><code>emptyDir</code> creates an empty directory when the Pod is created and persists for the life of the Pod. When the Pod is deleted, the data is completely lost. Suitable for caches, temporary files, sharing data between containers in the same Pod.</p>

<pre><code class="language-yaml">apiVersion: v1
kind: Pod
metadata:
  name: shared-storage-pod
spec:
  containers:
  - name: writer
    image: busybox
    command: ["/bin/sh", "-c"]
    args: ["while true; do date >> /shared/log.txt; sleep 1; done"]
    volumeMounts:
    - name: shared-data
      mountPath: /shared
  - name: reader
    image: busybox
    command: ["/bin/sh", "-c"]
    args: ["tail -f /shared/log.txt"]
    volumeMounts:
    - name: shared-data
      mountPath: /shared
  volumes:
  - name: shared-data
    emptyDir:
      sizeLimit: 500Mi  # Giới hạn kích thước
      medium: Memory    # Lưu trong RAM (tmpfs) - nhanh hơn nhưng dùng memory</code></pre>

<h3>hostPath: Node-Local Storage</h3>

<p><code>hostPath</code> mounts a path on the host node to the container. The data exists when the container restarts but is lost when the Pod is scheduled to another node. <strong>Should not be used in production</strong> unless there is a special reason (system daemons, monitoring agents).</p>

<pre><code class="language-yaml">apiVersion: v1
kind: Pod
metadata:
  name: host-path-pod
spec:
  containers:
  - name: app
    image: nginx:1.27
    volumeMounts:
    - name: host-volume
      mountPath: /data
  volumes:
  - name: host-volume
    hostPath:
      path: /data/myapp
      type: DirectoryOrCreate  # Tạo directory nếu chưa tồn tại</code></pre>

<h2>PersistentVolume and PersistentVolumeClaim</h2>

<h3>Core Concepts</h3>

<p>Kubernetes separates <em>providing storage</em> (admin) and <em>using storage</em> (developer) through two abstractions:</p><ul>
  <li><strong>PersistentVolume (PV)</strong>: Cluster-level storage resource created by admin or dynamically provisioned. Represents a piece of actual storage (NFS share, cloud disk, etc.)</li>
  <li><strong>PersistentVolumeClaim (PVC)</strong>: User request for storage. Developers just need to declare "I need 10Gi of storage with ReadWriteOnce" without knowing where the storage is.</li>
</ul>

<h3>PersistentVolume Definition</h3>

<pre><code class="language-yaml">apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-database-001
  labels:
    type: ssd
    environment: production
spec:
  capacity:
    storage: 100Gi
  volumeMode: Filesystem  # hoặc Block
  accessModes:
  - ReadWriteOnce  # Chỉ một node mount được tại một thời điểm
  persistentVolumeReclaimPolicy: Retain  # Giữ lại data sau khi PVC released
  storageClassName: premium-ssd
  # CSI volume source (thay vì in-tree)
  csi:
    driver: ebs.csi.aws.com
    volumeHandle: vol-0a1b2c3d4e5f67890
    fsType: ext4
    volumeAttributes:
      storage.kubernetes.io/csiProvisionerIdentity: "1234567890"</code></pre>

<h3>PersistentVolumeClaim</h3>

<pre><code class="language-yaml">apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: database-storage
  namespace: production
spec:
  accessModes:
  - ReadWriteOnce
  volumeMode: Filesystem
  resources:
    requests:
      storage: 50Gi
  storageClassName: premium-ssd
  # Selector để bind với specific PV (optional)
  selector:
    matchLabels:
      type: ssd
      environment: production</code></pre>

<pre><code class="language-bash"># Xem trạng thái PVC
kubectl get pvc -n production

# Output:
# NAME               STATUS   VOLUME              CAPACITY   ACCESS MODES   STORAGECLASS   AGE
# database-storage   Bound    pv-database-001     100Gi      RWO            premium-ssd    5m</code></pre>

<h3>Using PVC in Pod</h3>

<pre><code class="language-yaml">apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgres
  namespace: production
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:16
        env:
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: postgres-secret
              key: password
        - name: PGDATA
          value: /var/lib/postgresql/data/pgdata
        volumeMounts:
        - name: postgres-storage
          mountPath: /var/lib/postgresql/data
      volumes:
      - name: postgres-storage
        persistentVolumeClaim:
          claimName: database-storage</code></pre>

<h2>Access Modes</h2>

<p>Kubernetes defines 4 access modes, showing how volumes can be mounted:</p>

<ul>
  <li><strong>ReadWriteOnce (RWO)</strong>: A node that can mount read-write. Most common with block storage (EBS, GCE PD). From K8s 1.22+, RWO allows multiple Pods on the SAME read-write node.</li>
  <li><strong>ReadOnlyMany (ROX)</strong>: Multiple nodes can mount read-only at the same time. Matches shared config/data.</li>
  <li><strong>ReadWriteMany (RWX)</strong>: Many nodes mount read-write. Requires network filesystem such as NFS, CephFS, Azure Files. Important: block storage (EBS, GCE PD) does NOT support RWX.</li>
  <li><strong>ReadWriteOncePod (RWOP)</strong>: Only a single Pod in the entire cluster can mount. Stronger than RWO — ensures exclusive access at Pod level, not just node level. Requires CSI driver support.</li>
</ul>

<h2>StorageClass: Dynamic Provisioning</h2>

<h3>Why StorageClass?</h3>

<p>Instead of admins having to create PVs manually, StorageClass allows <strong>dynamic provisioning</strong> — Kubernetes automatically creates PVs when there is a PVC request. Admin only needs to define storage "class" (eg: ssd-fast, hdd-cheap, nfs-shared).</p>

<pre><code class="language-yaml"># StorageClass với AWS EBS CSI Driver
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: ebs-gp3
  annotations:
    storageclass.kubernetes.io/is-default-class: "true"
provisioner: ebs.csi.aws.com
parameters:
  type: gp3
  iops: "3000"
  throughput: "125"
  encrypted: "true"
  kmsKeyId: arn:aws:kms:ap-southeast-1:123456789012:key/mrk-abc123
volumeBindingMode: WaitForFirstConsumer  # Đợi Pod được schedule trước khi tạo volume
reclaimPolicy: Delete  # Xóa PV khi PVC bị xóa
allowVolumeExpansion: true  # Cho phép resize PVC
---
# StorageClass cho Longhorn
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: longhorn-replicated
provisioner: driver.longhorn.io
parameters:
  numberOfReplicas: "3"
  staleReplicaTimeout: "2880"
  fromBackup: ""
  fsType: "ext4"
volumeBindingMode: Immediate
reclaimPolicy: Delete
allowVolumeExpansion: true</code></pre>

<h3>Reclaim Policy</h3>

<ul>
  <li><strong>Delete</strong>: PV and underlying storage are deleted when PVC is deleted. Default with dynamic provisioning. Suitable for ephemeral workloads.</li>
  <li><strong>Retain</strong>: The PV is retained (Released state) when the PVC is deleted. Admin must reclaim manually. Suitable for production databases that need data protection.</li>
  <li><strong>Recycle</strong>: Deprecated, not recommended.</li>
</ul>

<h2>CSI: Container Storage Interface</h2>

<h3>Why Was In-Tree Plugins Removed?</h3>

<p>Previously, Kubernetes had many in-tree storage plugins compiled directly into the core Kubernetes binary (aws-ebs, gce-pd, azure-disk, cephfs, nfs...). This creates many problems:</p><ul>
  <li>Bug in storage plugin can crash entire kube-apiserver/kubelet</li>
  <li>Release cycle of storage drivers tied to Kubernetes release</li>
  <li>Difficult to maintain when the number of plugins increases</li>
  <li>Storage vendors cannot ship fixes independently</li>
</ul>

<p><strong>CSI (Container Storage Interface)</strong> solves all of these problems by standardizing the interface between Kubernetes and storage providers. Drivers run as separate Pods, can be updated independently.</p>

<h3>Timeline Remove In-Tree Plugins__HTMLTAG_180___

<ul>
  <li><strong>K8s 1.26-1.28</strong>: Many in-tree plugins deprecated</li>
  <li><strong>K8s 1.29</strong>: In-tree NFS and many plugins converted to deprecated, CSI required</li>
  <li><strong>K8s 1.30</strong>: In-tree NFS plugin removed</li>
  <li><strong>K8s 1.31</strong>: In-tree CephFS, Ceph RBD plugins completely removed__HTMLTAG_197___
  <li><strong>K8s 1.32+</strong>: Continue removing the remaining in-tree plugins</li>
</ul>

<h3>Popular CSI Drivers</h3>

<h4>Cloud Providers</h4>

<pre><code class="language-bash"># AWS EBS CSI Driver
helm repo add aws-ebs-csi-driver https://kubernetes-sigs.github.io/aws-ebs-csi-driver
helm upgrade --install aws-ebs-csi-driver \
  aws-ebs-csi-driver/aws-ebs-csi-driver \
  --namespace kube-system \
  --set enableVolumeResizing=true \
  --set enableVolumeSnapshot=true

# GCP Filestore CSI Driver
kubectl apply -k "github.com/kubernetes-sigs/gcp-filestore-csi-driver/deploy/kubernetes/overlays/stable"</code></pre>

<h4>Longhorn: Open Source Distributed Storage__HTMLTAG_208___

<pre><code class="language-bash"># Kiểm tra prerequisites
curl -sfL https://raw.githubusercontent.com/longhorn/longhorn/v1.7.0/scripts/environment_check.sh | bash

# Cài Longhorn qua Helm
helm repo add longhorn https://charts.longhorn.io
helm repo update

helm install longhorn longhorn/longhorn \
  --namespace longhorn-system \
  --create-namespace \
  --version 1.7.0 \
  --set defaultSettings.defaultReplicaCount=3 \
  --set defaultSettings.storageMinimalAvailablePercentage=15 \
  --set defaultSettings.storageOverProvisioningPercentage=200

# Verify
kubectl get pods -n longhorn-system
kubectl get storageclass</code></pre>

<pre><code class="language-yaml"># Longhorn StorageClass
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: longhorn-fast
  annotations:
    storageclass.kubernetes.io/is-default-class: "false"
provisioner: driver.longhorn.io
parameters:
  numberOfReplicas: "3"
  staleReplicaTimeout: "30"
  fromBackup: ""
  fsType: ext4
  dataLocality: "best-effort"  # Prefer local replica
  diskSelector: "ssd"          # Hanya gunakan SSD disks
allowVolumeExpansion: true
reclaimPolicy: Delete
volumeBindingMode: WaitForFirstConsumer</code></pre>

<h4>Rook/Ceph: Enterprise Storage</h4>

<pre><code class="language-bash"># Cài Rook Ceph Operator
kubectl apply -f https://raw.githubusercontent.com/rook/rook/v1.15.0/deploy/examples/crds.yaml
kubectl apply -f https://raw.githubusercontent.com/rook/rook/v1.15.0/deploy/examples/common.yaml
kubectl apply -f https://raw.githubusercontent.com/rook/rook/v1.15.0/deploy/examples/operator.yaml

# Tạo Ceph cluster
kubectl apply -f https://raw.githubusercontent.com/rook/rook/v1.15.0/deploy/examples/cluster.yaml

# Verify
kubectl get CephCluster -n rook-ceph</code></pre>

<h2>Volume Snapshots</h2>

<h3>Concept__HTMLTAG_214___

<p>Volume Snapshots is a GA feature from K8s 1.20 that allows creating point-in-time snapshots of PVCs. Requires CSI driver that supports snapshot capability and snapshot controller installed.</p>

<h3>Install Snapshot Controller</h3>

<pre><code class="language-bash"># Cài snapshot CRDs và controller
kubectl apply -f https://raw.githubusercontent.com/kubernetes-csi/external-snapshotter/v8.0.0/client/config/crd/snapshot.storage.k8s.io_volumesnapshotclasses.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes-csi/external-snapshotter/v8.0.0/client/config/crd/snapshot.storage.k8s.io_volumesnapshotcontents.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes-csi/external-snapshotter/v8.0.0/client/config/crd/snapshot.storage.k8s.io_volumesnapshots.yaml

kubectl apply -f https://raw.githubusercontent.com/kubernetes-csi/external-snapshotter/v8.0.0/deploy/kubernetes/snapshot-controller/rbac-snapshot-controller.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes-csi/external-snapshotter/v8.0.0/deploy/kubernetes/snapshot-controller/setup-snapshot-controller.yaml</code></pre>

<h3>VolumeSnapshotClass</h3>

<pre><code class="language-yaml">apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshotClass
metadata:
  name: csi-aws-vsc
  annotations:
    snapshot.storage.kubernetes.io/is-default-class: "true"
driver: ebs.csi.aws.com
deletionPolicy: Delete  # hoặc Retain
parameters:
  tagSpecification_1: "key=Name,value=k8s-snapshot"
  tagSpecification_2: "key=Environment,value=production"</code></pre>

<h3>Create VolumeSnapshot</h3>

<pre><code class="language-yaml">apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  name: postgres-snapshot-20260330
  namespace: production
  labels:
    backup-type: daily
    date: "2026-03-30"
spec:
  volumeSnapshotClassName: csi-aws-vsc
  source:
    persistentVolumeClaimName: database-storage  # PVC cần snapshot</code></pre>

<pre><code class="language-bash"># Xem trạng thái snapshot
kubectl get volumesnapshot -n production
kubectl describe volumesnapshot postgres-snapshot-20260330 -n production

# Output:
# Name:         postgres-snapshot-20260330
# Namespace:    production
# Status:
#   Bound Volume Snapshot Content Name: snapcontent-abc123
#   Creation Time: 2026-03-30T10:00:00Z
#   Ready To Use: true
#   Restore Size: 50Gi</code></pre>

<h3>Restore from Snapshot</h3>

<pre><code class="language-yaml"># Tạo PVC mới từ snapshot
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: postgres-restored-20260330
  namespace: production
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 50Gi
  storageClassName: ebs-gp3
  dataSource:
    name: postgres-snapshot-20260330
    kind: VolumeSnapshot
    apiGroup: snapshot.storage.k8s.io</code></pre>

<pre><code class="language-bash"># Verify restored PVC
kubectl get pvc postgres-restored-20260330 -n production

# Deploy postgres với PVC được restored
kubectl patch deployment postgres -n production \
  --patch '{"spec":{"template":{"spec":{"volumes":[{"name":"postgres-storage","persistentVolumeClaim":{"claimName":"postgres-restored-20260330"}}]}}}}'</code></pre>

<h2>VolumeAttributesClass (K8s 1.29+)</h2>

<h3>The Problem With The Old Approach</h3>

<p>Previously, if you wanted to change the IOPS or throughput of a volume (for example, from gp3 3000 IOPS to 10000 IOPS), you had to delete the PVC, create a new StorageClass, and create a new PVC — a complicated and downtime-inducing process.</p>

<p><strong>VolumeAttributesClass (VAC)</strong> is a new API (Beta K8s 1.31) that allows changing mutable volume attributes such as IOPS and throughput without removing the PVC.</p>

<pre><code class="language-yaml"># Định nghĩa VolumeAttributesClass
apiVersion: storage.k8s.io/v1beta1
kind: VolumeAttributesClass
metadata:
  name: silver
driverName: ebs.csi.aws.com
parameters:
  type: gp3
  iops: "3000"
  throughput: "125"
---
apiVersion: storage.k8s.io/v1beta1
kind: VolumeAttributesClass
metadata:
  name: gold
driverName: ebs.csi.aws.com
parameters:
  type: gp3
  iops: "10000"
  throughput: "500"</code></pre>

<pre><code class="language-yaml"># PVC ban đầu với silver class
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: database-storage
  namespace: production
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 100Gi
  storageClassName: ebs-gp3
  volumeAttributesClassName: silver  # Bắt đầu với silver</code></pre>

<pre><code class="language-bash"># Nâng cấp lên gold (tăng IOPS) không cần xóa PVC
kubectl patch pvc database-storage -n production \
  --patch '{"spec":{"volumeAttributesClassName":"gold"}}'

# Kiểm tra trạng thái modify
kubectl describe pvc database-storage -n production
# Events:
#   Normal ModifyVolumeComplete: Volume attributes successfully modified</code></pre>

<h2>Summary</h2>

<p>Storage in Kubernetes has matured significantly with CSI being a mandatory platform since K8s 1.30-1.31. Points to remember:</p><ul>
  <li><strong>emptyDir</strong> for ephemeral shared storage in Pod, <strong>PVC/PV</strong> for persistent data__HTMLTAG_245___
  <li><strong>CSI required</strong>: no longer in-tree plugins from K8s 1.30+, must migrate to CSI drivers</li>
  <li><strong>StorageClass</strong> with dynamic provisioning is the standard way — admin defines the class, developer just needs to claim</li>
  <li><strong>Longhorn</strong> is a good choice for on-premise clusters with distributed replicated storage</li>
  <li><strong>Volume Snapshots</strong> allows point-in-time backup/restore, requires CSI driver and snapshot controller</li>
  <li><strong>VolumeAttributesClass</strong> (K8s 1.29+ Beta) allows changing IOPS/throughput without clearing PVC</li>
  <li>Always use <code>WaitForFirstConsumer</code> binding mode with cloud volumes to avoid cross-AZ attachment issues</li>
</ul>