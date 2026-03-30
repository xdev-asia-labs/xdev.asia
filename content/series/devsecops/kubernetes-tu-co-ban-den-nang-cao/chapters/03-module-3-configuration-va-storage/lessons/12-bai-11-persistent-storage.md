---
id: 019c9618-0102-7000-8000-c1147ba22e11
title: 'BÀI 11: PERSISTENT STORAGE VÀ CSI'
slug: bai-11-persistent-storage-va-csi
description: >-
  Quản lý storage với PersistentVolumes, PersistentVolumeClaims, StorageClasses. CSI drivers bắt buộc thay in-tree plugins (đã xóa K8s 1.31). Dynamic provisioning, volume snapshots, VolumeAttributesClass mới (K8s 1.29+).
duration_minutes: 90
is_free: false
video_url: null
sort_order: 11
section_title: 'Module 3: Configuration & Storage'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---

<h2>Persistent Storage và CSI trong Kubernetes</h2>

<p>Containers mang tính ephemeral — khi một container restart hay Pod được schedule lại trên node khác, tất cả dữ liệu bên trong bị mất. Đây là vấn đề nghiêm trọng với stateful workloads như databases, message queues, và file storage. Kubernetes giải quyết vấn đề này với một hệ thống storage phong phú, và từ Kubernetes 1.30-1.31, in-tree storage plugins đã bị loại bỏ hoàn toàn, thay thế bởi <strong>Container Storage Interface (CSI)</strong> standardized drivers.</p>

<h2>Vòng Đời Storage: Từ Ephemeral Đến Persistent</h2>

<h3>emptyDir: Ephemeral Storage</h3>

<p><code>emptyDir</code> tạo một thư mục trống khi Pod được tạo và tồn tại suốt vòng đời của Pod. Khi Pod bị xóa, dữ liệu mất hoàn toàn. Phù hợp cho cache, temporary files, sharing data giữa containers trong cùng Pod.</p>

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

<p><code>hostPath</code> mount một path trên node host vào container. Dữ liệu tồn tại khi container restart nhưng mất khi Pod được schedule sang node khác. <strong>Không nên dùng trong production</strong> trừ khi có lý do đặc biệt (system daemons, monitoring agents).</p>

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

<h2>PersistentVolume và PersistentVolumeClaim</h2>

<h3>Khái Niệm Cốt Lõi</h3>

<p>Kubernetes tách biệt việc <em>cung cấp storage</em> (admin) và <em>sử dụng storage</em> (developer) qua hai abstraction:</p>

<ul>
  <li><strong>PersistentVolume (PV)</strong>: Cluster-level storage resource do admin tạo hoặc dynamically provisioned. Đại diện cho một piece of storage thực tế (NFS share, cloud disk, etc.)</li>
  <li><strong>PersistentVolumeClaim (PVC)</strong>: User request for storage. Developer chỉ cần khai báo "tôi cần 10Gi storage với ReadWriteOnce" mà không cần biết storage ở đâu.</li>
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

<h3>Sử Dụng PVC trong Pod</h3>

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

<p>Kubernetes định nghĩa 4 access modes, cho biết cách volume có thể được mount:</p>

<ul>
  <li><strong>ReadWriteOnce (RWO)</strong>: Một node có thể mount read-write. Phổ biến nhất với block storage (EBS, GCE PD). Từ K8s 1.22+, RWO cho phép nhiều Pods trên CÙNG node đọc-ghi.</li>
  <li><strong>ReadOnlyMany (ROX)</strong>: Nhiều nodes có thể mount read-only cùng lúc. Phù hợp với shared config/data.</li>
  <li><strong>ReadWriteMany (RWX)</strong>: Nhiều nodes mount read-write. Yêu cầu network filesystem như NFS, CephFS, Azure Files. Quan trọng: block storage (EBS, GCE PD) KHÔNG hỗ trợ RWX.</li>
  <li><strong>ReadWriteOncePod (RWOP)</strong>: Chỉ một Pod duy nhất trên toàn cluster có thể mount. Mạnh hơn RWO — đảm bảo exclusive access ở Pod level, không chỉ node level. Yêu cầu CSI driver hỗ trợ.</li>
</ul>

<h2>StorageClass: Dynamic Provisioning</h2>

<h3>Tại Sao Cần StorageClass?</h3>

<p>Thay vì admin phải tạo PV thủ công, StorageClass cho phép <strong>dynamic provisioning</strong> — Kubernetes tự động tạo PV khi có PVC request. Admin chỉ cần định nghĩa "class" storage (ví dụ: ssd-fast, hdd-cheap, nfs-shared).</p>

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
  <li><strong>Delete</strong>: PV và underlying storage bị xóa khi PVC xóa. Mặc định với dynamic provisioning. Phù hợp với ephemeral workloads.</li>
  <li><strong>Retain</strong>: PV được giữ lại (trạng thái Released) khi PVC xóa. Admin phải manually reclaim. Phù hợp với production databases cần bảo vệ dữ liệu.</li>
  <li><strong>Recycle</strong>: Deprecated, không nên dùng.</li>
</ul>

<h2>CSI: Container Storage Interface</h2>

<h3>Tại Sao In-Tree Plugins Bị Loại Bỏ?</h3>

<p>Trước đây, Kubernetes có nhiều in-tree storage plugins được compile trực tiếp vào core Kubernetes binary (aws-ebs, gce-pd, azure-disk, cephfs, nfs...). Điều này tạo ra nhiều vấn đề:</p>

<ul>
  <li>Bug trong storage plugin có thể crash toàn bộ kube-apiserver/kubelet</li>
  <li>Release cycle của storage drivers bị gắn với Kubernetes release</li>
  <li>Khó maintain khi số lượng plugins tăng</li>
  <li>Storage vendors không thể ship fixes độc lập</li>
</ul>

<p><strong>CSI (Container Storage Interface)</strong> giải quyết tất cả vấn đề này bằng cách standardize interface giữa Kubernetes và storage providers. Drivers chạy như separate Pods, có thể update độc lập.</p>

<h3>Timeline Loại Bỏ In-Tree Plugins</h3>

<ul>
  <li><strong>K8s 1.26-1.28</strong>: Nhiều in-tree plugins deprecated</li>
  <li><strong>K8s 1.29</strong>: In-tree NFS và nhiều plugins chuyển thành deprecated, CSI bắt buộc</li>
  <li><strong>K8s 1.30</strong>: In-tree NFS plugin bị xóa</li>
  <li><strong>K8s 1.31</strong>: In-tree CephFS, Ceph RBD plugins bị xóa hoàn toàn</li>
  <li><strong>K8s 1.32+</strong>: Tiếp tục loại bỏ các in-tree plugins còn lại</li>
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

<h4>Longhorn: Open Source Distributed Storage</h4>

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

<h3>Khái Niệm</h3>

<p>Volume Snapshots là tính năng GA từ K8s 1.20, cho phép tạo point-in-time snapshot của PVC. Cần CSI driver hỗ trợ snapshot capability và snapshot controller được cài.</p>

<h3>Cài Snapshot Controller</h3>

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

<h3>Tạo VolumeSnapshot</h3>

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

<h3>Restore từ Snapshot</h3>

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

<h3>Vấn Đề Với Cách Tiếp Cận Cũ</h3>

<p>Trước đây, nếu muốn thay đổi IOPS hoặc throughput của một volume (ví dụ từ gp3 3000 IOPS lên 10000 IOPS), bạn phải xóa PVC, tạo StorageClass mới, và tạo PVC mới — một quy trình phức tạp và gây downtime.</p>

<p><strong>VolumeAttributesClass (VAC)</strong> là API mới (Beta K8s 1.31) cho phép thay đổi các mutable volume attributes như IOPS và throughput mà không cần xóa PVC.</p>

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

<h2>Tổng Kết</h2>

<p>Storage trong Kubernetes đã trưởng thành đáng kể với CSI là nền tảng bắt buộc từ K8s 1.30-1.31. Những điểm cần ghi nhớ:</p>

<ul>
  <li><strong>emptyDir</strong> cho ephemeral shared storage trong Pod, <strong>PVC/PV</strong> cho persistent data</li>
  <li><strong>CSI bắt buộc</strong>: không còn in-tree plugins từ K8s 1.30+, phải migrate sang CSI drivers</li>
  <li><strong>StorageClass</strong> với dynamic provisioning là cách tiêu chuẩn — admin định nghĩa class, developer chỉ cần claim</li>
  <li><strong>Longhorn</strong> là lựa chọn tốt cho on-premise clusters với distributed replicated storage</li>
  <li><strong>Volume Snapshots</strong> cho phép backup/restore point-in-time, cần CSI driver và snapshot controller</li>
  <li><strong>VolumeAttributesClass</strong> (K8s 1.29+ Beta) cho phép thay đổi IOPS/throughput không cần xóa PVC</li>
  <li>Luôn sử dụng <code>WaitForFirstConsumer</code> binding mode với cloud volumes để tránh cross-AZ attachment issues</li>
</ul>
