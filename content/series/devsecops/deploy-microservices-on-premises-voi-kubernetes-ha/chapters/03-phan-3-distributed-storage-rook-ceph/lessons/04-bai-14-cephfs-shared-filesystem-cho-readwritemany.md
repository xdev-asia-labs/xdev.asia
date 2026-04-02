---
id: 019e1a00-aa01-7001-c001-k8sha000304
title: 'BÀI 14: CEPHFS — SHARED FILESYSTEM CHO READWRITEMANY'
slug: bai-14-cephfs-shared-filesystem-cho-readwritemany
description: >-
  Tạo CephFilesystem, StorageClass cho CephFS (ReadWriteMany),
  deploy MDS, test shared storage giữa nhiều pods, quotas
  và subvolumes.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 14
section_title: 'Phần 3: Distributed Storage — Rook-Ceph'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Tạo CephFilesystem và MetadataServer (MDS)</li>
<li>✅ Tạo StorageClass cho CephFS với ReadWriteMany</li>
<li>✅ Mount CephFS từ nhiều pods đồng thời</li>
<li>✅ Cấu hình quotas và subvolumeGroups</li>
<li>✅ So sánh RBD vs CephFS use cases</li>
</ul>

<hr>

<h2 id="phan-1-cephfs-vs-rbd">PHẦN 1: CEPHFS vs RBD — KHI NÀO DÙNG GÌ?</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tiêu chí</th>
<th>RBD (Block)</th>
<th>CephFS (Filesystem)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Access Mode</td>
<td>ReadWriteOnce (RWO)</td>
<td>ReadWriteMany (RWX)</td>
</tr>
<tr>
<td>Mount style</td>
<td>1 pod duy nhất</td>
<td>Nhiều pods đồng thời</td>
</tr>
<tr>
<td>Use case</td>
<td>Database, single app</td>
<td>Shared content, logs, media</td>
</tr>
<tr>
<td>Performance</td>
<td>Cao (block-level)</td>
<td>Tốt (POSIX overhead)</td>
</tr>
<tr>
<td>Cần MDS?</td>
<td>Không</td>
<td>Có</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-tao-cephfilesystem">PHẦN 2: TẠO CEPHFILESYSTEM</h2>

<h3 id="21-cephfilesystem-crd">2.1. CephFilesystem CRD</h3>
<pre><code class="language-yaml"># ceph-filesystem.yaml:
apiVersion: ceph.rook.io/v1
kind: CephFilesystem
metadata:
  name: cephfs
  namespace: rook-ceph
spec:
  metadataPool:
    replicated:
      size: 3
  dataPools:
    - name: data0
      failureDomain: host
      replicated:
        size: 3
  preserveFilesystemOnDelete: true
  metadataServer:
    activeCount: 1                     # 1 active MDS
    activeStandby: true                # 1 standby MDS
    resources:
      requests:
        cpu: "500m"
        memory: "1Gi"
      limits:
        memory: "4Gi"
</code></pre>

<pre><code class="language-bash">kubectl apply -f ceph-filesystem.yaml

# Verify MDS pods:
kubectl -n rook-ceph get pods -l app=rook-ceph-mds
# NAME                                      READY   STATUS    RESTARTS   AGE
# rook-ceph-mds-cephfs-a-xxxxx-xxxxx        2/2     Running   0          60s
# rook-ceph-mds-cephfs-b-xxxxx-xxxxx        2/2     Running   0          60s

# Verify CephFS:
kubectl -n rook-ceph exec deploy/rook-ceph-tools -- ceph fs ls
# name: cephfs, metadata pool: cephfs-metadata, data pools: [cephfs-data0]

kubectl -n rook-ceph exec deploy/rook-ceph-tools -- ceph fs status
# cephfs - 0 clients
# ======
# RANK   STATE            MDS              ACTIVITY     DNS    INOS   DIRS   CAPS
#  0     active           cephfs-a         Reqs:    0     10     13     12      0
#        STANDBY          cephfs-b
</code></pre>

<h3 id="22-storageclass-cephfs">2.2. StorageClass cho CephFS</h3>
<pre><code class="language-yaml"># ceph-fs-sc.yaml:
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: ceph-filesystem
provisioner: rook-ceph.cephfs.csi.ceph.com
parameters:
  clusterID: rook-ceph
  fsName: cephfs
  pool: cephfs-data0
  
  csi.storage.k8s.io/provisioner-secret-name: rook-csi-cephfs-provisioner
  csi.storage.k8s.io/provisioner-secret-namespace: rook-ceph
  csi.storage.k8s.io/controller-expand-secret-name: rook-csi-cephfs-provisioner
  csi.storage.k8s.io/controller-expand-secret-namespace: rook-ceph
  csi.storage.k8s.io/node-stage-secret-name: rook-csi-cephfs-node
  csi.storage.k8s.io/node-stage-secret-namespace: rook-ceph

reclaimPolicy: Delete
allowVolumeExpansion: true
</code></pre>

<pre><code class="language-bash">kubectl apply -f ceph-fs-sc.yaml

kubectl get storageclass
# NAME                   PROVISIONER                           RECLAIMPOLICY   VOLUMEBINDINGMODE
# ceph-block (default)   rook-ceph.rbd.csi.ceph.com            Delete          Immediate
# ceph-filesystem        rook-ceph.cephfs.csi.ceph.com          Delete          Immediate
</code></pre>

<hr>

<h2 id="phan-3-readwritemany">PHẦN 3: TEST READWRITEMANY</h2>

<h3 id="31-tao-rwx-pvc">3.1. Tạo RWX PVC</h3>
<pre><code class="language-yaml"># shared-pvc.yaml:
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: shared-data
  namespace: default
spec:
  accessModes:
    - ReadWriteMany                  # ← RWX mode!
  storageClassName: ceph-filesystem
  resources:
    requests:
      storage: 5Gi
</code></pre>

<h3 id="32-nhieu-pods-cung-mount">3.2. Nhiều pods cùng mount</h3>
<pre><code class="language-yaml"># shared-deployment.yaml:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: writer
  namespace: default
spec:
  replicas: 3
  selector:
    matchLabels:
      app: writer
  template:
    metadata:
      labels:
        app: writer
    spec:
      containers:
        - name: writer
          image: busybox
          command:
            - sh
            - -c
            - |
              while true; do
                echo "$(hostname) - $(date)" >> /shared/log.txt
                sleep 5
              done
          volumeMounts:
            - name: shared
              mountPath: /shared
      volumes:
        - name: shared
          persistentVolumeClaim:
            claimName: shared-data

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: reader
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      app: reader
  template:
    metadata:
      labels:
        app: reader
    spec:
      containers:
        - name: reader
          image: busybox
          command:
            - sh
            - -c
            - "while true; do tail -5 /shared/log.txt; sleep 10; done"
          volumeMounts:
            - name: shared
              mountPath: /shared
      volumes:
        - name: shared
          persistentVolumeClaim:
            claimName: shared-data
</code></pre>

<pre><code class="language-bash">kubectl apply -f shared-pvc.yaml -f shared-deployment.yaml

# Verify 4 pods đều mount cùng volume:
kubectl get pods -l 'app in (writer,reader)'
# NAME                      READY   STATUS    RESTARTS   AGE
# writer-xxxxx-xxxxx        1/1     Running   0          30s
# writer-xxxxx-xxxxx        1/1     Running   0          30s
# writer-xxxxx-xxxxx        1/1     Running   0          30s
# reader-xxxxx-xxxxx        1/1     Running   0          30s

# Check reader sees all writers:
kubectl logs -l app=reader --tail=10
# writer-xxxxx-xxxxx - Mon Apr  2 07:00:05 UTC 2025
# writer-xxxxx-xxxxx - Mon Apr  2 07:00:05 UTC 2025
# writer-xxxxx-xxxxx - Mon Apr  2 07:00:05 UTC 2025
# ← 3 writer pods đều ghi vào cùng file! ✅
</code></pre>

<hr>

<h2 id="phan-4-quotas">PHẦN 4: QUOTAS VÀ SUBVOLUMES</h2>

<pre><code class="language-bash"># CephFS quotas (set via Ceph toolbox):
kubectl -n rook-ceph exec deploy/rook-ceph-tools -- bash

# Set quota trên directory:
# setfattr -n ceph.quota.max_bytes -v $((10*1024*1024*1024)) /mnt/cephfs/subdir
# setfattr -n ceph.quota.max_files -v 100000 /mnt/cephfs/subdir

# CSI driver tự set quota dựa trên PVC size
# → PVC 5Gi sẽ tự giới hạn 5GiB trên CephFS subvolume
</code></pre>

<h3 id="41-cleanup">4.1. Cleanup</h3>
<pre><code class="language-bash">kubectl delete deployment writer reader
kubectl delete pvc shared-data
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>CephFS</strong> cho ReadWriteMany — nhiều pods cùng đọc/ghi 1 volume</li>
<li><strong>MDS (Metadata Server)</strong> quản lý filesystem metadata</li>
<li><strong>activeStandby: true</strong> đảm bảo MDS HA</li>
<li><strong>Use case RWX</strong>: shared content, logs, media, AI training data</li>
<li><strong>RBD cho databases, CephFS cho shared files</strong></li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: RWX Lab</h3>
<ul>
<li>Tạo CephFilesystem, StorageClass, PVC (RWX)</li>
<li>Deploy 3 writer pods + 1 reader pod</li>
<li>Verify tất cả pods đọc/ghi cùng volume</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 15: Ceph Monitoring, Tuning và Troubleshooting</strong>, chúng ta sẽ monitor Ceph performance, tuning parameters, và xử lý common issues.</p>
