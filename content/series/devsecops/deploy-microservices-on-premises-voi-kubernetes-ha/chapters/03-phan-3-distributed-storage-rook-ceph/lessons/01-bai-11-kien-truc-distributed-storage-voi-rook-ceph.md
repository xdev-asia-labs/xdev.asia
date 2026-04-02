---
id: 019e1a00-aa01-7001-c001-k8sha000301
title: 'BÀI 11: KIẾN TRÚC DISTRIBUTED STORAGE VỚI ROOK-CEPH'
slug: bai-11-kien-truc-distributed-storage-voi-rook-ceph
description: >-
  Tổng quan Ceph architecture (RADOS, OSD, MON, MDS, MGR),
  tại sao chọn Rook-Ceph cho K8s, so sánh storage solutions,
  planning capacity và network cho Ceph cluster.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 11
section_title: 'Phần 3: Distributed Storage — Rook-Ceph'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Hiểu kiến trúc Ceph: RADOS, OSD, MON, MDS, MGR</li>
<li>✅ Hiểu CRUSH algorithm và data placement</li>
<li>✅ So sánh Rook-Ceph vs Longhorn vs OpenEBS vs local-path</li>
<li>✅ Planning hardware và network cho Ceph cluster</li>
<li>✅ Hiểu 3 loại storage: Block (RBD), Filesystem (CephFS), Object (RGW)</li>
</ul>

<hr>

<h2 id="phan-1-ceph-architecture">PHẦN 1: CEPH ARCHITECTURE OVERVIEW</h2>

<h3 id="11-cac-thanh-phan-ceph">1.1. Các thành phần Ceph</h3>
<pre><code>
CEPH ARCHITECTURE:
┌─────────────────────────────────────────────────────────────┐
│                      CLIENT ACCESS                          │
│  ┌──────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   RBD    │  │   CephFS     │  │    RADOS Gateway     │  │
│  │  (Block) │  │ (Filesystem) │  │  (Object/S3-compat)  │  │
│  └────┬─────┘  └──────┬───────┘  └──────────┬───────────┘  │
│       │               │                     │               │
│  ─────┴───────────────┴─────────────────────┴────────────  │
│                        LIBRADOS                             │
│  ──────────────────────────────────────────────────────────  │
│                        RADOS LAYER                          │
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐      │
│  │  MON    │  │  MGR    │  │  MDS    │  │  OSD    │      │
│  │ Monitor │  │ Manager │  │Metadata │  │ Object  │      │
│  │(3 nodes)│  │(2 nodes)│  │ Server  │  │ Storage │      │
│  │         │  │         │  │(CephFS) │  │ Daemon  │      │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘      │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                    CRUSH MAP                        │    │
│  │  (Data placement algorithm — no lookup table!)      │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
</code></pre>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Component</th>
<th>Vai trò</th>
<th>Min HA</th>
</tr>
</thead>
<tbody>
<tr>
<td>MON (Monitor)</td>
<td>Cluster map, quorum, authentication</td>
<td>3 (odd number)</td>
</tr>
<tr>
<td>MGR (Manager)</td>
<td>Metrics, dashboard, orchestration</td>
<td>2 (active-standby)</td>
</tr>
<tr>
<td>OSD (Object Storage Daemon)</td>
<td>Lưu trữ data thực tế, replication</td>
<td>3+ (1 per disk)</td>
</tr>
<tr>
<td>MDS (Metadata Server)</td>
<td>Metadata cho CephFS (chỉ cần khi dùng CephFS)</td>
<td>2 (active-standby)</td>
</tr>
<tr>
<td>RGW (RADOS Gateway)</td>
<td>S3/Swift API cho object storage</td>
<td>2+ (behind LB)</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="12-crush-algorithm">1.2. CRUSH Algorithm</h3>
<pre><code>
CRUSH (Controlled Replication Under Scalable Hashing):

Client muốn lưu trữ Object "photo.jpg":
1. Object → Pool → PG (Placement Group)
   hash("photo.jpg") mod num_PGs → PG 3.1a
   
2. PG → OSD set (CRUSH map quyết định):
   CRUSH(PG 3.1a) → [osd.5, osd.12, osd.8]
   
3. Data được replicate tới 3 OSDs:
   
   ┌────────┐     ┌────────┐     ┌────────┐
   │ osd.5  │     │ osd.12 │     │ osd.8  │
   │ PRIMARY│     │ REPLICA│     │ REPLICA│
   │worker1 │     │worker2 │     │worker3 │
   └────────┘     └────────┘     └────────┘
   
✅ Không cần lookup table → Scale tới exabytes
✅ Failure domain aware (rack, host, datacenter)
✅ Client tính toán trực tiếp vị trí data
</code></pre>

<hr>

<h2 id="phan-2-rook-la-gi">PHẦN 2: ROOK — CEPH OPERATOR CHO KUBERNETES</h2>

<h3 id="21-rook-architecture">2.1. Rook Architecture</h3>
<pre><code>
Rook = Kubernetes Operator cho Ceph

┌──────────────────────────────────────────────────────┐
│  Kubernetes Cluster                                   │
│                                                       │
│  ┌──────────────────────────────────────────────┐     │
│  │  Rook Operator (Deployment)                   │     │
│  │  - Watches CephCluster CRD                    │     │
│  │  - Manages Ceph daemons as K8s pods           │     │
│  │  - Auto-healing, scaling                      │     │
│  └──────────────────────────────────────────────┘     │
│                                                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────┐    │
│  │ ceph-mon Pod │  │ ceph-mgr Pod │  │ ceph-osd │    │
│  │ (3 replicas) │  │ (2 replicas) │  │ Pods     │    │
│  │              │  │ + Dashboard  │  │ (per disk)│    │
│  └──────────────┘  └──────────────┘  └──────────┘    │
│                                                       │
│  CRDs:                                                │
│  - CephCluster        (cluster definition)            │
│  - CephBlockPool      (RBD pool)                     │
│  - CephFilesystem     (CephFS)                       │
│  - CephObjectStore    (RGW/S3)                       │
│  - CephBlockPoolRados (RADOS namespace)              │
└──────────────────────────────────────────────────────┘
</code></pre>

<h3 id="22-so-sanh-storage">2.2. So sánh Storage Solutions</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tiêu chí</th>
<th>Rook-Ceph</th>
<th>Longhorn</th>
<th>OpenEBS</th>
<th>local-path</th>
</tr>
</thead>
<tbody>
<tr>
<td>Block storage</td>
<td>✅ RBD</td>
<td>✅</td>
<td>✅</td>
<td>❌</td>
</tr>
<tr>
<td>Filesystem (RWX)</td>
<td>✅ CephFS</td>
<td>❌ (NFS hack)</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>Object (S3)</td>
<td>✅ RGW</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>Replication</td>
<td>3-way</td>
<td>3-way</td>
<td>3-way</td>
<td>❌</td>
</tr>
<tr>
<td>Performance</td>
<td>Xuất sắc</td>
<td>Tốt</td>
<td>Tốt</td>
<td>Best (local)</td>
</tr>
<tr>
<td>Complexity</td>
<td>Cao</td>
<td>Thấp</td>
<td>Trung bình</td>
<td>Rất thấp</td>
</tr>
<tr>
<td>Min nodes</td>
<td>3</td>
<td>3</td>
<td>3</td>
<td>1</td>
</tr>
<tr>
<td>CNCF</td>
<td>Graduated</td>
<td>Incubating</td>
<td>Sandbox</td>
<td>-</td>
</tr>
<tr>
<td>Best for</td>
<td>Production</td>
<td>Small clusters</td>
<td>Dev/test</td>
<td>Single node</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>👉 <strong>Chọn Rook-Ceph</strong> cho production on-premises: unified storage (Block + FS + Object), proven at scale, CNCF Graduated.</p>

<hr>

<h2 id="phan-3-planning-ceph">PHẦN 3: PLANNING HARDWARE CHO CEPH</h2>

<h3 id="31-osd-node-sizing">3.1. OSD Node Sizing</h3>
<pre><code>
Mỗi OSD = 1 disk (HDD hoặc SSD)

Per-OSD resource requirements:
┌──────────────────────────────────────┐
│  CPU: 1-2 cores per OSD             │
│  RAM: 5GB per OSD (bluestore)       │
│  NVMe: WAL + DB (optional)          │
│  Network: 10Gbps recommended        │
└──────────────────────────────────────┘

Ví dụ: worker1 có 4 data SSDs (mỗi SSD = 1 OSD):
→ 4 OSDs × 5GB = 20GB RAM cho Ceph
→ 4 OSDs × 2 cores = 8 CPU cores cho Ceph
→ Tổng worker1: 8 cores + 20GB cho Ceph + workload riêng
</code></pre>

<h3 id="32-capacity-planning">3.2. Capacity Planning</h3>
<pre><code class="language-bash"># Ceph usable capacity formula:
# Usable = Raw Capacity × (1 / Replication Factor) × Pool Utilization Target

# Ví dụ:
# 3 workers × 4 SSDs × 500GB = 6,000 GB Raw
# Replication Factor = 3 (data replicate 3 bản)
# Usable = 6,000 / 3 = 2,000 GB
# ⚠️ Ceph khuyến nghị KHÔNG vượt 85% → 2,000 × 0.85 = 1,700 GB usable

# Cho lab (mỗi worker 1 SSD 100GB):
# 3 × 100GB = 300GB Raw → 100GB usable → 85GB safe
</code></pre>

<h3 id="33-network-planning">3.3. Network Planning</h3>
<pre><code>
Ceph sử dụng 2 networks (đã thiết kế ở Bài 2):

┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   OSD Node 1 │     │   OSD Node 2 │     │   OSD Node 3 │
│              │     │              │     │              │
│  Public Net  │◄───►│  Public Net  │◄───►│  Public Net  │
│  10.10.20.x  │     │  10.10.20.x  │     │  10.10.20.x  │
│  (client I/O)│     │              │     │              │
│              │     │              │     │              │
│  Cluster Net │◄───►│  Cluster Net │◄───►│  Cluster Net │
│  10.10.30.x  │     │  10.10.30.x  │     │  10.10.30.x  │
│  (replication)│     │              │     │              │
└──────────────┘     └──────────────┘     └──────────────┘

Public Network:  Client → OSD (read/write)
Cluster Network: OSD ↔ OSD (replication, recovery, scrubbing)

⚠️ Cluster network: 10Gbps minimum để recovery không impact client I/O
</code></pre>

<hr>

<h2 id="phan-4-storage-types">PHẦN 4: 3 LOẠI STORAGE</h2>

<h3 id="41-block-rbd">4.1. Block Storage (RBD)</h3>
<pre><code>
RBD (RADOS Block Device):
┌──────────┐     ┌──────────────────┐     ┌──────────────────┐
│  Pod     │────►│  PVC             │────►│  Ceph RBD Volume │
│          │     │  ReadWriteOnce   │     │  (thin provisioned)│
│          │     │  (1 pod duy nhất)│     │                   │
└──────────┘     └──────────────────┘     └──────────────────┘

Use cases:
✅ Database (PostgreSQL, MySQL)
✅ Stateful applications
✅ High IOPS workloads
⚠️ ReadWriteOnce — chỉ 1 pod mount cùng lúc
</code></pre>

<h3 id="42-filesystem-cephfs">4.2. Filesystem Storage (CephFS)</h3>
<pre><code>
CephFS:
┌──────────┐     ┌──────────────────┐     ┌──────────────────┐
│  Pod 1   │────►│                  │     │                   │
│  Pod 2   │────►│  PVC             │────►│  CephFS Volume   │
│  Pod 3   │────►│  ReadWriteMany   │     │  (POSIX filesystem)│
│          │     │  (nhiều pod)     │     │                   │
└──────────┘     └──────────────────┘     └──────────────────┘

Use cases:
✅ Shared file storage (nhiều pods cùng đọc/ghi)
✅ Content management, media files
✅ AI/ML training data
</code></pre>

<h3 id="43-object-rgw">4.3. Object Storage (RGW)</h3>
<pre><code>
RADOS Gateway (S3-compatible):
┌──────────┐     ┌──────────────────┐     ┌──────────────────┐
│  App     │────►│  S3 API          │────►│  Ceph Object     │
│          │     │  s3://bucket/key │     │  Store (RGW)     │
│          │     │  PUT/GET/DELETE  │     │                   │
└──────────┘     └──────────────────┘     └──────────────────┘

Use cases:
✅ Backup storage
✅ Log archives
✅ Thay thế MinIO/AWS S3
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Ceph</strong> = unified storage: Block + Filesystem + Object trong 1 cluster</li>
<li><strong>CRUSH algorithm</strong>: tính toán vị trí data không cần lookup table → scale vô hạn</li>
<li><strong>Rook Operator</strong>: quản lý Ceph lifecycle trên K8s bằng CRDs</li>
<li><strong>5GB RAM per OSD</strong>: plan memory cẩn thận cho storage nodes</li>
<li><strong>2 networks</strong>: Public (client) + Cluster (replication) để tách traffic</li>
<li><strong>Replication 3x</strong>: Raw capacity / 3 = usable capacity</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Capacity Planning</h3>
<ul>
<li>Tính usable capacity cho: 5 nodes × 6 SSDs × 1TB, replication=3</li>
<li>Tính RAM cần thiết cho Ceph (mỗi OSD 5GB)</li>
<li>Vẽ network topology cho Ceph cluster</li>
</ul>

<h3 id="bt2">Bài tập 2: Chuẩn bị disks</h3>
<ul>
<li>Xác định disk chưa sử dụng trên worker nodes: <code>lsblk</code></li>
<li>Verify disk không có partition: <code>wipefs -a /dev/sdX</code></li>
<li>Chuẩn bị sẵn disk cho Bài 12</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 12: Cài đặt Rook-Ceph Operator và CephCluster</strong>, chúng ta sẽ deploy Rook Operator và tạo CephCluster trên K8s.</p>
