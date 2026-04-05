---
id: 019e1a00-aa01-7001-c001-k8sha000102
title: 'BÀI 2: LẬP KẾ HOẠCH PHẦN CỨNG VÀ NETWORK TOPOLOGY'
slug: bai-2-lap-ke-hoach-phan-cung-va-network-topology
description: >-
  Tính toán CPU/RAM/Disk cho control plane, worker nodes, storage nodes.
  Thiết kế network topology: management network, cluster network, storage
  network, external network. VLAN, bonding, MTU sizing cho production.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'Phần 1: Nền tảng & Thiết kế Hạ tầng On-Premises'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4678" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4678)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1069" cy="217" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1038" cy="106" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1007" cy="255" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="976" cy="144" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="945" cy="33" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="87" x2="1100" y2="167" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="117" x2="1050" y2="187" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="973.3730669589464,116 973.3730669589464,158 937,179 900.6269330410536,158 900.6269330410536,116.00000000000001 937,95" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Bài 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 2: LẬP KẾ HOẠCH PHẦN CỨNG VÀ NETWORK</tspan>
      <tspan x="60" dy="42">TOPOLOGY</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Nền tảng &amp; Thiết kế Hạ tầng On-Premises</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Tính toán được sizing chính xác cho từng loại node (Control Plane, Worker, Storage)</li>
<li>✅ Thiết kế được network topology production-grade với VLAN separation</li>
<li>✅ Cấu hình được NIC bonding cho HA networking</li>
<li>✅ Hiểu và chọn được MTU phù hợp cho từng network segment</li>
<li>✅ Lập được bảng kế hoạch phần cứng hoàn chỉnh cho dự án thực tế</li>
</ul>

<hr>

<h2 id="phan-1-sizing-control-plane-nodes">PHẦN 1: SIZING CONTROL PLANE NODES</h2>

<h3 id="11-thanh-phan-chay-tren-control-plane">1.1. Các thành phần chạy trên Control Plane</h3>

<pre><code>
Control Plane Node
├── kube-apiserver           ─── API endpoint, xử lý tất cả requests
├── etcd                     ─── Distributed KV store (cluster state)
├── kube-scheduler           ─── Pod scheduling decisions
├── kube-controller-manager  ─── Reconciliation loops
├── cloud-controller-manager ─── (Không dùng cho on-prem)
├── kubelet                  ─── Node agent
├── containerd               ─── Container runtime
└── Cilium agent            ─── CNI networking
</code></pre>

<h3 id="12-tinh-toan-resources-cho-control-plane">1.2. Tính toán Resources cho Control Plane</h3>

<h4 id="etcd-la-thanh-phan-critical-nhat">etcd là thành phần critical nhất</h4>
<p>etcd performance phụ thuộc chủ yếu vào disk I/O. Đây là sizing guidelines từ etcd documentation:</p>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Cluster Size</th>
<th>Nodes</th>
<th>Pods</th>
<th>etcd CPU</th>
<th>etcd RAM</th>
<th>etcd Disk</th>
<th>Disk Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>Small</td>
<td>&lt; 10</td>
<td>&lt; 500</td>
<td>2 cores</td>
<td>4GB</td>
<td>50GB</td>
<td>SSD</td>
</tr>
<tr>
<td>Medium</td>
<td>10-50</td>
<td>500-5000</td>
<td>4 cores</td>
<td>8GB</td>
<td>100GB</td>
<td>NVMe SSD</td>
</tr>
<tr>
<td>Large</td>
<td>50-100</td>
<td>5000+</td>
<td>8 cores</td>
<td>16GB</td>
<td>200GB</td>
<td>NVMe SSD</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>⚠️ <strong>Critical:</strong> etcd yêu cầu disk latency p99 < 10ms. Dùng NVMe SSD chuyên dụng cho etcd.</p>

<h4 id="kube-apiserver-sizing">kube-apiserver sizing</h4>
<pre><code class="language-text">
# Tính toán dựa trên số lượng requests/giây
API Server resources = f(number_of_nodes, number_of_pods, number_of_controllers)

Baseline (10 nodes, 500 pods):
  CPU: 2 cores
  RAM: 4GB

Scaling rule:
  +1 CPU per 1000 pods
  +2GB RAM per 1000 pods
  +1 CPU per 20 nodes
</code></pre>

<h4 id="tong-hop-control-plane-node">Tổng hợp Control Plane Node Sizing</h4>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Component</th>
<th>CPU Request</th>
<th>CPU Limit</th>
<th>RAM Request</th>
<th>RAM Limit</th>
</tr>
</thead>
<tbody>
<tr>
<td>kube-apiserver</td>
<td>250m</td>
<td>2000m</td>
<td>512Mi</td>
<td>4Gi</td>
</tr>
<tr>
<td>etcd</td>
<td>500m</td>
<td>4000m</td>
<td>1Gi</td>
<td>8Gi</td>
</tr>
<tr>
<td>kube-scheduler</td>
<td>100m</td>
<td>500m</td>
<td>128Mi</td>
<td>512Mi</td>
</tr>
<tr>
<td>kube-controller-manager</td>
<td>200m</td>
<td>1000m</td>
<td>256Mi</td>
<td>1Gi</td>
</tr>
<tr>
<td>kubelet + containerd</td>
<td>200m</td>
<td>500m</td>
<td>256Mi</td>
<td>1Gi</td>
</tr>
<tr>
<td>Cilium agent</td>
<td>100m</td>
<td>500m</td>
<td>256Mi</td>
<td>1Gi</td>
</tr>
<tr>
<td>OS overhead</td>
<td>500m</td>
<td>-</td>
<td>1Gi</td>
<td>-</td>
</tr>
<tr>
<td><strong>TỔNG</strong></td>
<td><strong>~2 cores</strong></td>
<td><strong>~8 cores</strong></td>
<td><strong>~3.5Gi</strong></td>
<td><strong>~16Gi</strong></td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>💡 <strong>Recommendation cho Production:</strong></p>
<pre><code class="language-text">
Control Plane Node (mỗi node):
  CPU:  8 cores (headroom cho burst)
  RAM:  16GB (minimum) - 32GB (recommended)
  Disk: 100GB NVMe SSD (OS + etcd)
        → etcd nên trên partition/disk riêng nếu có thể
  NIC:  2× 10GbE (bonding) hoặc 1× 25GbE
</code></pre>

<hr>

<h2 id="phan-2-sizing-worker-nodes">PHẦN 2: SIZING WORKER NODES</h2>

<h3 id="21-tinh-toan-tu-workload">2.1. Tính toán từ Workload Requirements</h3>

<p>Công thức tính Worker nodes:</p>
<pre><code class="language-text">
Total Worker Resources = Σ (all pod requests) + System Reserved + Buffer

Ví dụ với hệ thống 20 microservices:
┌──────────────────────────────────────────────────────────────┐
│ Microservices (20 services × 2 replicas × avg 500m/1Gi):    │
│   CPU:  20 × 2 × 500m = 20,000m = 20 cores                 │
│   RAM:  20 × 2 × 1Gi  = 40Gi                                │
│                                                                │
│ Databases (PostgreSQL 3 nodes, Redis 3, RabbitMQ 3, Kafka 3):│
│   CPU:  12 × 2000m = 24,000m = 24 cores                     │
│   RAM:  12 × 4Gi   = 48Gi                                    │
│                                                                │
│ Observability (Prometheus×2, Grafana, Loki, Tempo, Alloy):   │
│   CPU:  ~8 cores                                              │
│   RAM:  ~24Gi                                                 │
│                                                                │
│ Platform (ArgoCD, Vault, Istio, cert-manager, Kyverno):      │
│   CPU:  ~6 cores                                              │
│   RAM:  ~16Gi                                                 │
│                                                                │
│ System Reserved per node (kubelet, containerd, Cilium, OS):  │
│   CPU:  ~1.5 cores × N nodes                                 │
│   RAM:  ~2Gi × N nodes                                        │
│                                                                │
│ TỔNG REQUEST:                                                  │
│   CPU:  ~58 cores + (1.5 × N)                                │
│   RAM:  ~128Gi + (2 × N)                                      │
└──────────────────────────────────────────────────────────────┘

Buffer (30% headroom cho HA + burst):
   CPU: 58 × 1.3 = ~76 cores
   RAM: 128 × 1.3 = ~167Gi

Sizing calculation:
   Nếu mỗi worker: 16 cores, 64GB RAM
   Số workers = max(76/16, 167/64) = max(4.75, 2.6) = 5 workers

💡 Khuyến nghị: 5-6 worker nodes × (16 cores, 64GB RAM)
   → Cho phép mất 1 node mà workloads vẫn schedulable
</code></pre>

<h3 id="22-sizing-guidelines-theo-quy-mo">2.2. Sizing Guidelines theo Quy mô</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Quy mô</th>
<th>Services</th>
<th>Workers</th>
<th>CPU/node</th>
<th>RAM/node</th>
<th>Disk/node</th>
</tr>
</thead>
<tbody>
<tr>
<td>Small (Lab)</td>
<td>5-10</td>
<td>3</td>
<td>8 cores</td>
<td>32GB</td>
<td>200GB SSD</td>
</tr>
<tr>
<td>Medium</td>
<td>10-30</td>
<td>5-8</td>
<td>16 cores</td>
<td>64GB</td>
<td>500GB NVMe</td>
</tr>
<tr>
<td>Large</td>
<td>30-100</td>
<td>10-20</td>
<td>32 cores</td>
<td>128GB</td>
<td>1TB NVMe</td>
</tr>
<tr>
<td>XLarge</td>
<td>100+</td>
<td>20+</td>
<td>64 cores</td>
<td>256GB</td>
<td>2TB NVMe</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="23-system-reserved-resources">2.3. System Reserved Resources</h3>
<p>Kubernetes cần reserve resources cho system components trên mỗi node:</p>

<pre><code class="language-yaml"># /var/lib/kubelet/config.yaml
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
systemReserved:
  cpu: "500m"
  memory: "1Gi"
  ephemeral-storage: "10Gi"
kubeReserved:
  cpu: "500m"
  memory: "1Gi"
  ephemeral-storage: "5Gi"
evictionHard:
  memory.available: "500Mi"
  nodefs.available: "10%"
  imagefs.available: "15%"
</code></pre>

<pre><code class="language-text">
Allocatable = Total - systemReserved - kubeReserved - evictionThreshold

Ví dụ: Worker node 16 cores, 64GB RAM:
  CPU allocatable:  16000m - 500m - 500m = 15000m
  RAM allocatable:  64Gi - 1Gi - 1Gi - 500Mi = 61.5Gi
</code></pre>

<hr>

<h2 id="phan-3-sizing-storage-nodes">PHẦN 3: SIZING STORAGE NODES (CEPH)</h2>

<h3 id="31-ceph-components-tren-storage-nodes">3.1. Ceph Components trên Storage Nodes</h3>
<pre><code>
Storage Node
├── Ceph OSD daemon (1 per disk)    ─── Object Storage Daemon
│   ├── BlueStore (direct disk I/O)
│   └── WAL + DB on SSD (nếu dùng HDD)
├── Ceph MON (trên 3 nodes)         ─── Cluster monitor
├── Ceph MGR (trên 2 nodes)         ─── Manager, dashboard
└── kubelet + containerd + Cilium   ─── K8s agent
</code></pre>

<h3 id="32-tinh-toan-storage-capacity">3.2. Tính toán Storage Capacity</h3>
<pre><code class="language-text">
Usable Capacity = Raw Capacity / Replication Factor × Utilization Target

Ví dụ:
  3 nodes × 4 disks × 2TB = 24TB raw
  Replication factor = 3 (data replicated 3 lần)
  Utilization target = 75% (để headroom cho recovery)
  
  Usable = 24TB / 3 × 0.75 = 6TB usable
  
Phân bổ:
  PostgreSQL data:     500GB (× 3 replicas nguồn PG)
  Kafka log retention: 500GB
  Loki logs:           1TB
  Thanos metrics:      500GB
  Velero backups:      1TB
  Application data:    500GB
  Buffer:              2TB
  ─────────────────────────────
  TỔNG:               ~6TB ❯ Khớp 6TB usable
</code></pre>

<h3 id="33-sizing-ceph-osd-nodes">3.3. Sizing Ceph OSD Nodes</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Component</th>
<th>Sizing Rule</th>
<th>Ví dụ (4 OSDs/node)</th>
</tr>
</thead>
<tbody>
<tr>
<td>CPU per OSD</td>
<td>1 core per OSD (min)</td>
<td>4 cores cho OSDs</td>
</tr>
<tr>
<td>RAM per OSD</td>
<td>5GB per OSD (BlueStore default)</td>
<td>20GB cho OSDs</td>
</tr>
<tr>
<td>Ceph MON RAM</td>
<td>~2-4GB</td>
<td>4GB</td>
</tr>
<tr>
<td>System + K8s</td>
<td>~4GB RAM, 2 cores</td>
<td>4GB, 2 cores</td>
</tr>
<tr>
<td><strong>TỔNG per node</strong></td>
<td></td>
<td><strong>6 cores, 28GB RAM</strong></td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>💡 <strong>Recommendation:</strong></p>
<pre><code class="language-text">
Storage Node (dedicated hoặc converged với worker):
  CPU:  8 cores
  RAM:  32-64GB (phụ thuộc số OSD)
  Disk: 1× 500GB NVMe (OS)
        4× 2TB NVMe (Ceph OSD)
  NIC:  2× 25GbE (1 cluster + 1 public network)
</code></pre>

<p>⚠️ <strong>Quyết định quan trọng:</strong> Dedicated storage nodes vs Converged (worker + storage)?</p>
<pre><code class="language-text">
Dedicated Storage Nodes:
  ✅ Isolation: Storage I/O không ảnh hưởng workloads
  ✅ Independent scaling
  ❌ Thêm servers

Converged (Worker + Storage cùng node):
  ✅ Ít servers, tận dụng hardware
  ❌ Noisy neighbor: Ceph I/O có thể ảnh hưởng pods
  ❌ Node failure mất cả compute + storage

→ Production: Dedicated storage nodes
→ Lab/Small: Converged OK
</code></pre>

<hr>

<h2 id="phan-4-network-topology-design">PHẦN 4: NETWORK TOPOLOGY DESIGN</h2>

<h3 id="41-4-networks-cho-production">4.1. 4 Networks cho Production</h3>

<pre><code>
┌─────────────────────────────────────────────────────────────────┐
│                    NETWORK TOPOLOGY                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌── VLAN 10: Management Network (192.168.10.0/24) ──────────┐│
│  │  SSH access, monitoring, IPMI/iDRAC/iLO                    ││
│  │  MTU: 1500                                                  ││
│  │  NIC: eth0 (hoặc bond0 member)                             ││
│  └────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ┌── VLAN 20: Cluster Network (10.10.20.0/24) ───────────────┐│
│  │  K8s API, Pod-to-Pod traffic, Service communication        ││
│  │  MTU: 9000 (Jumbo Frames)                                   ││
│  │  NIC: bond0 (eth1 + eth2 LACP)                             ││
│  └────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ┌── VLAN 30: Storage Network (10.10.30.0/24) ───────────────┐│
│  │  Ceph cluster traffic (OSD replication, recovery)          ││
│  │  MTU: 9000 (Jumbo Frames)                                   ││
│  │  NIC: bond1 (eth3 + eth4 LACP) - Dedicated 25GbE          ││
│  └────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ┌── VLAN 40: External Network (10.10.40.0/24) ──────────────┐│
│  │  User traffic, Ingress, MetalLB VIPs                       ││
│  │  MTU: 1500                                                  ││
│  │  NIC: bond0 (shared với Cluster, VLAN tagged)              ││
│  └────────────────────────────────────────────────────────────┘│
│                                                                 │
│  Firewall/Router: Giữa External ↔ Internal networks           │
│  DNS: Internal DNS cho *.k8s.local                             │
└─────────────────────────────────────────────────────────────────┘
</code></pre>

<h3 id="42-ip-planning">4.2. IP Planning chi tiết</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Node</th>
<th>Management (VLAN 10)</th>
<th>Cluster (VLAN 20)</th>
<th>Storage (VLAN 30)</th>
<th>Role</th>
</tr>
</thead>
<tbody>
<tr>
<td>lb1</td>
<td>192.168.10.9</td>
<td>10.10.20.9</td>
<td>-</td>
<td>HAProxy/keepalived primary</td>
</tr>
<tr>
<td>lb2</td>
<td>192.168.10.10</td>
<td>10.10.20.10</td>
<td>-</td>
<td>HAProxy/keepalived backup</td>
</tr>
<tr>
<td>VIP</td>
<td>-</td>
<td>10.10.20.100</td>
<td>-</td>
<td>K8s API Server VIP</td>
</tr>
<tr>
<td>master1</td>
<td>192.168.10.11</td>
<td>10.10.20.11</td>
<td>-</td>
<td>Control Plane 1</td>
</tr>
<tr>
<td>master2</td>
<td>192.168.10.12</td>
<td>10.10.20.12</td>
<td>-</td>
<td>Control Plane 2</td>
</tr>
<tr>
<td>master3</td>
<td>192.168.10.13</td>
<td>10.10.20.13</td>
<td>-</td>
<td>Control Plane 3</td>
</tr>
<tr>
<td>worker1</td>
<td>192.168.10.21</td>
<td>10.10.20.21</td>
<td>-</td>
<td>Worker Node 1</td>
</tr>
<tr>
<td>worker2</td>
<td>192.168.10.22</td>
<td>10.10.20.22</td>
<td>-</td>
<td>Worker Node 2</td>
</tr>
<tr>
<td>worker3</td>
<td>192.168.10.23</td>
<td>10.10.20.23</td>
<td>-</td>
<td>Worker Node 3</td>
</tr>
<tr>
<td>storage1</td>
<td>192.168.10.31</td>
<td>10.10.20.31</td>
<td>10.10.30.31</td>
<td>Ceph OSD Node 1</td>
</tr>
<tr>
<td>storage2</td>
<td>192.168.10.32</td>
<td>10.10.20.32</td>
<td>10.10.30.32</td>
<td>Ceph OSD Node 2</td>
</tr>
<tr>
<td>storage3</td>
<td>192.168.10.33</td>
<td>10.10.20.33</td>
<td>10.10.30.33</td>
<td>Ceph OSD Node 3</td>
</tr>
<tr>
<td>MetalLB Pool</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>10.10.40.200-250</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="43-nic-bonding-configuration">4.3. NIC Bonding Configuration</h3>
<p>NIC bonding (LACP) cung cấp link redundancy và bandwidth aggregation:</p>

<pre><code class="language-yaml"># /etc/netplan/01-bonding.yaml (Ubuntu 24.04)
network:
  version: 2
  renderer: networkd
  
  ethernets:
    eth0:
      dhcp4: false
    eth1:
      dhcp4: false
    eth2:
      dhcp4: false
    eth3:
      dhcp4: false
    eth4:
      dhcp4: false

  bonds:
    bond0:
      interfaces: [eth1, eth2]
      parameters:
        mode: 802.3ad         # LACP
        lacp-rate: fast
        mii-monitor-interval: 100
        transmit-hash-policy: layer3+4
      mtu: 9000

    bond1:
      interfaces: [eth3, eth4]
      parameters:
        mode: 802.3ad
        lacp-rate: fast
        mii-monitor-interval: 100
        transmit-hash-policy: layer3+4
      mtu: 9000

  vlans:
    bond0.20:
      id: 20
      link: bond0
      mtu: 9000
      addresses:
        - 10.10.20.21/24
      routes:
        - to: 10.244.0.0/16     # Pod CIDR
          via: 10.10.20.1
        - to: 10.96.0.0/12      # Service CIDR
          via: 10.10.20.1

    bond0.40:
      id: 40
      link: bond0
      addresses:
        - 10.10.40.21/24
      routes:
        - to: default
          via: 10.10.40.1

    bond1.30:
      id: 30
      link: bond1
      mtu: 9000
      addresses:
        - 10.10.30.21/24
</code></pre>

<pre><code class="language-bash"># Apply cấu hình
sudo netplan apply

# Verify bonding
cat /proc/net/bonding/bond0
# Output:
# Bonding Mode: IEEE 802.3ad Dynamic link aggregation
# MII Status: up
# Slave Interface: eth1 → MII Status: up
# Slave Interface: eth2 → MII Status: up

# Verify VLAN
ip -d link show bond0.20

# Test MTU
ping -M do -s 8972 10.10.20.11  # 8972 + 28 = 9000 MTU
</code></pre>

<h3 id="44-mtu-sizing">4.4. MTU Sizing</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Network</th>
<th>MTU</th>
<th>Lý do</th>
</tr>
</thead>
<tbody>
<tr>
<td>Management</td>
<td>1500</td>
<td>Standard, tương thích mọi device</td>
</tr>
<tr>
<td>Cluster (K8s)</td>
<td>9000</td>
<td>Jumbo frames giảm CPU overhead, tăng throughput</td>
</tr>
<tr>
<td>Storage (Ceph)</td>
<td>9000</td>
<td>Critical cho Ceph OSD replication performance</td>
</tr>
<tr>
<td>External</td>
<td>1500</td>
<td>Standard cho internet-facing traffic</td>
</tr>
<tr>
<td>Pod Network (Cilium)</td>
<td>8950</td>
<td>MTU underlay (9000) - VXLAN overhead (50)</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>⚠️ <strong>Jumbo Frames requirement:</strong> Tất cả switch ports trên path phải support và enable MTU 9000. Kiểm tra với switch admin trước khi deploy.</p>

<hr>

<h2 id="phan-5-switch-va-firewall">PHẦN 5: SWITCH VÀ FIREWALL REQUIREMENTS</h2>

<h3 id="51-switch-requirements">5.1. Switch Requirements</h3>
<pre><code class="language-text">
Top-of-Rack (ToR) Switch Requirements:
  ├── L2/L3 capable
  ├── VLAN support (802.1Q)
  ├── LACP support (802.3ad)
  ├── Jumbo frames (MTU 9000)
  ├── Spanning Tree (RSTP/MSTP)
  └── Port count: 24-48 × 10/25GbE + 4-8 uplinks

Recommended Models (by budget):
  Budget:     Arista 7010T, Dell S3048-ON
  Mid-range:  Arista 7050SX, Cisco Nexus 93180YC
  Enterprise: Arista 7280R, Cisco Nexus 9336C
</code></pre>

<h3 id="52-firewall-rules">5.2. Firewall Rules giữa Networks</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Source</th>
<th>Destination</th>
<th>Port</th>
<th>Protocol</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td>Management</td>
<td>All nodes</td>
<td>22</td>
<td>TCP</td>
<td>SSH</td>
</tr>
<tr>
<td>External</td>
<td>Worker/LB</td>
<td>80, 443</td>
<td>TCP</td>
<td>HTTP/HTTPS Ingress</td>
</tr>
<tr>
<td>External</td>
<td>Master VIP</td>
<td>6443</td>
<td>TCP</td>
<td>K8s API (nếu cần external)</td>
</tr>
<tr>
<td>Cluster</td>
<td>Cluster</td>
<td>6443</td>
<td>TCP</td>
<td>K8s API Server</td>
</tr>
<tr>
<td>Cluster</td>
<td>Cluster</td>
<td>2379-2380</td>
<td>TCP</td>
<td>etcd peer &amp; client</td>
</tr>
<tr>
<td>Cluster</td>
<td>Cluster</td>
<td>10250</td>
<td>TCP</td>
<td>kubelet API</td>
</tr>
<tr>
<td>Cluster</td>
<td>Cluster</td>
<td>10259</td>
<td>TCP</td>
<td>kube-scheduler</td>
</tr>
<tr>
<td>Cluster</td>
<td>Cluster</td>
<td>10257</td>
<td>TCP</td>
<td>kube-controller-manager</td>
</tr>
<tr>
<td>Cluster</td>
<td>Cluster</td>
<td>30000-32767</td>
<td>TCP</td>
<td>NodePort range</td>
</tr>
<tr>
<td>Cluster</td>
<td>Cluster</td>
<td>4240, 4244</td>
<td>TCP</td>
<td>Cilium health, Hubble</td>
</tr>
<tr>
<td>Cluster</td>
<td>Cluster</td>
<td>8472</td>
<td>UDP</td>
<td>Cilium VXLAN</td>
</tr>
<tr>
<td>Storage</td>
<td>Storage</td>
<td>6789</td>
<td>TCP</td>
<td>Ceph MON</td>
</tr>
<tr>
<td>Storage</td>
<td>Storage</td>
<td>6800-7300</td>
<td>TCP</td>
<td>Ceph OSD</td>
</tr>
<tr>
<td>Cluster</td>
<td>Storage</td>
<td>6789,6800-7300</td>
<td>TCP</td>
<td>Ceph client access</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-6-disk-layout">PHẦN 6: DISK LAYOUT VÀ PARTITIONING</h2>

<h3 id="61-control-plane-disk">6.1. Control Plane Disk Layout</h3>
<pre><code class="language-text">
Disk: 1× 500GB NVMe SSD
├── /boot/efi     200MB   (EFI System Partition)
├── /boot         1GB     (kernel, initramfs)
├── /             50GB    (OS root)
├── /var/lib/etcd 100GB   (etcd data - SEPARATE partition!)
├── /var/lib/containerd 100GB (container images, layers)
├── /var/log      50GB    (system logs)
└── (remaining)   ~200GB  (buffer)

LVM recommended cho flexibility:
  VG: vg-system → LV: lv-root, lv-etcd, lv-containerd, lv-log
</code></pre>

<h3 id="62-worker-node-disk">6.2. Worker Node Disk Layout</h3>
<pre><code class="language-text">
Disk: 1× 500GB NVMe SSD (OS)
├── /boot/efi     200MB
├── /boot         1GB
├── /             50GB
├── /var/lib/containerd 200GB (container images!)
├── /var/log      50GB
└── (remaining)   ~200GB

+ Raw disks cho Ceph OSD (nếu converged mode):
  /dev/sdb → Ceph OSD 0
  /dev/sdc → Ceph OSD 1
  (KHÔNG partition, KHÔNG format — Rook sẽ manage)
</code></pre>

<h3 id="63-storage-node-disk">6.3. Storage Node Disk Layout</h3>
<pre><code class="language-text">
Disk 1: 500GB NVMe (OS)
├── / (OS root)
├── /var/lib/containerd
└── /var/log

Disk 2-5: 4× 2TB NVMe (Ceph OSD)
  /dev/nvme1n1 → Ceph OSD 0  (RAW - không format)
  /dev/nvme2n1 → Ceph OSD 1  (RAW)
  /dev/nvme3n1 → Ceph OSD 2  (RAW)
  /dev/nvme4n1 → Ceph OSD 3  (RAW)

⚠️ QUAN TRỌNG: KHÔNG tạo partition hay filesystem trên Ceph disks.
   Rook-Ceph sẽ sử dụng trực tiếp raw block devices.
</code></pre>

<hr>

<h2 id="phan-7-bill-of-materials">PHẦN 7: BILL OF MATERIALS (BOM)</h2>

<h3 id="71-bom-cho-production-medium">7.1. BOM cho Production (Medium - 20 microservices)</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>#</th>
<th>Component</th>
<th>Qty</th>
<th>Specs</th>
<th>Role</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Server (Control Plane)</td>
<td>3</td>
<td>8C/32GB/500GB NVMe, 2×10GbE</td>
<td>K8s masters</td>
</tr>
<tr>
<td>2</td>
<td>Server (Worker)</td>
<td>5</td>
<td>16C/64GB/500GB NVMe, 2×25GbE</td>
<td>Workload nodes</td>
</tr>
<tr>
<td>3</td>
<td>Server (Storage)</td>
<td>3</td>
<td>8C/64GB/500GB NVMe + 4×2TB NVMe, 2×25GbE</td>
<td>Ceph OSD</td>
</tr>
<tr>
<td>4</td>
<td>Server (LB)</td>
<td>2</td>
<td>4C/8GB/100GB SSD, 2×10GbE</td>
<td>HAProxy/keepalived</td>
</tr>
<tr>
<td>5</td>
<td>ToR Switch</td>
<td>2</td>
<td>48×25GbE + 8×100GbE uplink</td>
<td>Network</td>
</tr>
<tr>
<td>6</td>
<td>UPS</td>
<td>2</td>
<td>3kVA online double-conversion</td>
<td>Power protection</td>
</tr>
<tr>
<td>7</td>
<td>PDU</td>
<td>2</td>
<td>Managed, dual feed</td>
<td>Power distribution</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p><strong>Tổng:</strong> 13 servers + 2 switches + power infrastructure</p>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Control Plane</strong> cần NVMe SSD cho etcd, 8+ cores, 16-32GB RAM mỗi node</li>
<li><strong>Worker sizing</strong> tính từ tổng pod requests + 30% buffer + system reserved</li>
<li><strong>Ceph storage</strong> cần 5GB RAM per OSD, raw disks không format</li>
<li><strong>4 networks riêng biệt</strong> bằng VLAN: Management, Cluster, Storage, External</li>
<li><strong>NIC bonding</strong> (LACP) cho link redundancy, Jumbo Frames 9000 cho cluster/storage</li>
<li><strong>Disk layout:</strong> etcd cần partition riêng, Ceph cần raw block devices</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Tính toán Sizing</h3>
<p>Cho hệ thống gồm:</p>
<ul>
<li>30 microservices, mỗi service 2 replicas, avg 1 CPU/2GB RAM</li>
<li>PostgreSQL 3 nodes (4 CPU/8GB RAM each)</li>
<li>Kafka 3 brokers (4 CPU/8GB RAM each)</li>
<li>Full observability stack</li>
<li>Data retention: 90 ngày logs, 1 năm metrics</li>
</ul>
<p>Tính: Số worker nodes, storage nodes, tổng disk capacity cần thiết.</p>

<h3 id="bt2">Bài tập 2: Network Design</h3>
<p>Vẽ network topology diagram chi tiết cho hệ thống trên, bao gồm:</p>
<ul>
<li>VLAN assignment cho từng network segment</li>
<li>IP planning table cho tất cả nodes</li>
<li>NIC bonding topology</li>
<li>Firewall rules matrix</li>
</ul>

<h3 id="bt3">Bài tập 3: Lab Setup</h3>
<ul>
<li>Sử dụng Vagrantfile từ Bài 1, thêm NIC cho storage network</li>
<li>Cấu hình VLAN trên VMs (nếu hypervisor support)</li>
<li>Test connectivity: ping, iperf3 between all networks</li>
<li>Verify MTU 9000 hoạt động trên cluster network</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 3: Chuẩn bị Linux OS và System Tuning</strong>, chúng ta sẽ cấu hình kernel parameters, tắt swap, setup NTP, SSH hardening và chuẩn bị tất cả nodes trước khi cài Kubernetes.</p>
