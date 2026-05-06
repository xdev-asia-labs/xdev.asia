---
id: 019e1a00-aa01-7001-c001-k8sha000304
title: 'LESSON 14: CEPHFS — SHARED FILESYSTEM FOR READWRITEMANY'
slug: bai-14-cephfs-shared-filesystem-cho-readwritemany
description: Create CephFilesystem, StorageClass for CephFS (ReadWriteMany), deploy MDS, test shared storage between multiple pods, quotas and subvolumes.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 14
section_title: 'Part 3: Distributed Storage — Rook-Ceph'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Deploy Microservices On-Premises with Kubernetes HA
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3224" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3224)"/>

  <!-- Decorations -->
  <g>
    <circle cx="776" cy="58" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="952" cy="154" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="628" cy="250" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="804" cy="86" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="980" cy="182" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="198" x2="1100" y2="278" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="228" x2="1050" y2="298" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1026.5788383248864,181.5 1026.5788383248864,214.5 998,231 969.4211616751136,214.5 969.4211616751135,181.5 998,165" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — Lesson 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 14: CEPHFS — SHARED FILESYSTEM FOR</tspan>
      <tspan x="60" dy="42">READWRITEMANY</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises with Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Distributed Storage — Rook-Ceph</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 LESSON OBJECTIVE__HTMLTAG_68___
<p>After completing this lesson, you will:</p>
<ul>
<li>✅ Create CephFilesystem and MetadataServer (MDS)</li>
<li>✅ Create StorageClass for CephFS with ReadWriteMany</li>
<li>✅ Mount CephFS from multiple pods at the same time__HTMLTAG_77___
<li>✅ Configure quotas and subvolumeGroups</li>
<li>✅ Compare RBD vs CephFS use cases</li>
</ul>

<hr>

<h2 id="phan-1-cephfs-vs-rbd">PART 1: CEPHFS vs RBD — WHEN TO USE WHAT?</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Criteria</th>
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
<td>1 single pod</td>
<td>Multiple pods at the same time</td>
</tr>
<tr>
<td>Use case</td>
<td>Database, single app</td>
<td>Shared content, logs, media</td>
</tr>
<tr>
<td>Performance</td>
<td>High (block-level)</td>
<td>Good (POSIX overhead)</td>
</tr>
<tr>
<td>Need MDS?</td>
<td>No</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-tao-cephfilesystem">PART 2: CREATE CEPHFILESYSTEM</h2>

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
</code></pre><pre><code class="language-bash">kubectl apply -f ceph-filesystem.yaml

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

<h3 id="22-storageclass-cephfs">2.2. StorageClass for CephFS</h3>
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

<h2 id="phan-3-readwritemany">PART 3: TEST READWRITEMANY</h2>

<h3 id="31-tao-rwx-pvc">3.1. Create RWX PVC</h3>
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

<h3 id="32-nhieu-pods-cung-mount">3.2. Multiple pods with same mount</h3>
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

<h2 id="phan-4-quotas">PART 4: QUOTAS AND SUBVOLUMES__HTMLTAG_158___

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
<li><strong>CephFS</strong> for ReadWriteMany — multiple pods read/write the same volume</li>
<li><strong>MDS (Metadata Server)</strong> manage filesystem metadata</li>
<li><strong>activeStandby: true</strong> ensure MDS HA</li>
<li><strong>Use case RWX</strong>: shared content, logs, media, AI training data</li>
<li><strong>RBD for databases, CephFS for shared files</strong></li>
</ol>

<hr>

<h2 id="bai-tap">🎯 EXERCISES__HTMLTAG_188___

<h3 id="bt1">Exercise 1: RWX Lab</h3>
<ul>
<li>Create CephFilesystem, StorageClass, PVC (RWX)</li>
<li>Deploy 3 writer pods + 1 reader pod__HTMLTAG_195___
<li>Verify all pods read/write same volume__HTMLTAG_197___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>In <strong>Lesson 15: Ceph Monitoring, Tuning and Troubleshooting</strong>, we will monitor Ceph performance, tuning parameters, and handle common issues.</p>