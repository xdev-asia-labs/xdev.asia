---
id: 019e1a00-aa01-7001-c001-k8sha000101
title: 'BÀI 1: TỔNG QUAN KIẾN TRÚC MICROSERVICES ON-PREMISES'
slug: bai-1-tong-quan-kien-truc-microservices-on-premises
description: >-
  So sánh on-premises vs cloud vs hybrid, các thành phần cốt lõi của
  một hệ thống microservices production (K8s, DB HA, Storage, Messaging,
  Observability, Security), lộ trình học tập và lab environment setup.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 'Phần 1: Nền tảng & Thiết kế Hạ tầng On-Premises'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<p>Sau khi hoàn thành bài học này, bạn sẽ:</p>
<ul>
<li>✅ Hiểu sự khác biệt giữa triển khai on-premises, cloud và hybrid cho microservices</li>
<li>✅ Nắm được tổng quan kiến trúc và tất cả thành phần cốt lõi của hệ thống production</li>
<li>✅ Hiểu lý do chọn từng công nghệ trong stack (Kubernetes, Ceph, Patroni, Istio, ArgoCD...)</li>
<li>✅ Thiết lập được lab environment cho toàn bộ khóa học</li>
<li>✅ Nắm được lộ trình 50 bài học và mối liên kết giữa các phần</li>
</ul>

<hr>

<h2 id="phan-1-tai-sao-on-premises">PHẦN 1: TẠI SAO ON-PREMISES CHO MICROSERVICES?</h2>

<h3 id="11-boi-canh-thuc-te">1.1. Bối cảnh thực tế</h3>
<p>Trong thời đại cloud-native, nhiều tổ chức vẫn chọn triển khai on-premises vì:</p>

<p><strong>📊 Thống kê thực tế (2025-2026):</strong></p>
<ul>
<li>~60% enterprise workloads vẫn chạy on-premises hoặc hybrid (Gartner)</li>
<li>Cloud cost tăng 30-40% mỗi năm khi scale → "cloud repatriation" trend</li>
<li>Các ngành regulated (tài chính, y tế, chính phủ) yêu cầu data sovereignty</li>
<li>Latency-sensitive applications cần proximity với users/devices</li>
</ul>

<h3 id="12-so-sanh-on-prem-vs-cloud-vs-hybrid">1.2. So sánh On-Premises vs Cloud vs Hybrid</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tiêu chí</th>
<th>On-Premises</th>
<th>Public Cloud</th>
<th>Hybrid</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Chi phí ban đầu (CapEx)</strong></td>
<td>Cao (mua phần cứng)</td>
<td>Thấp (pay-as-you-go)</td>
<td>Trung bình</td>
</tr>
<tr>
<td><strong>Chi phí dài hạn (OpEx)</strong></td>
<td>Thấp hơn khi scale</td>
<td>Cao và khó dự đoán</td>
<td>Tùy workload</td>
</tr>
<tr>
<td><strong>Data Sovereignty</strong></td>
<td>✅ Toàn quyền kiểm soát</td>
<td>⚠️ Phụ thuộc region</td>
<td>✅ Phần lớn on-prem</td>
</tr>
<tr>
<td><strong>Latency</strong></td>
<td>✅ Thấp nhất</td>
<td>Phụ thuộc region</td>
<td>Tốt cho edge cases</td>
</tr>
<tr>
<td><strong>Customization</strong></td>
<td>✅ Không giới hạn</td>
<td>Giới hạn bởi provider</td>
<td>Linh hoạt</td>
</tr>
<tr>
<td><strong>Ops Complexity</strong></td>
<td>❌ Cao (tự quản lý)</td>
<td>✅ Thấp (managed)</td>
<td>Cao nhất</td>
</tr>
<tr>
<td><strong>Scaling Speed</strong></td>
<td>❌ Chậm (mua hardware)</td>
<td>✅ Phút (auto-scale)</td>
<td>Linh hoạt</td>
</tr>
<tr>
<td><strong>Compliance</strong></td>
<td>✅ Dễ đáp ứng nhất</td>
<td>Cần shared responsibility</td>
<td>Tốt</td>
</tr>
<tr>
<td><strong>Vendor Lock-in</strong></td>
<td>✅ Không</td>
<td>❌ Cao (AWS/GCP/Azure)</td>
<td>Trung bình</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="13-khi-nao-chon-on-premises">1.3. Khi nào nên chọn On-Premises?</h3>
<p><strong>✅ Nên chọn On-Premises khi:</strong></p>
<ul>
<li>Workloads ổn định, predictable (không burst lên xuống liên tục)</li>
<li>Yêu cầu compliance cao (HIPAA, PCI-DSS, GDPR data residency)</li>
<li>Đã có đầu tư hạ tầng (data center, servers, networking)</li>
<li>Chi phí cloud monthly vượt threshold (~$50K-100K+/tháng)</li>
<li>Team DevOps/SRE có kinh nghiệm vận hành</li>
<li>Cần ultra-low latency (< 1ms giữa services)</li>
</ul>

<p><strong>❌ Không nên chọn On-Premises khi:</strong></p>
<ul>
<li>Startup early-stage cần speed to market</li>
<li>Workloads bursty, khó dự đoán</li>
<li>Team < 5 người, không có infra engineer</li>
<li>PoC/MVP cần deploy nhanh</li>
</ul>

<hr>

<h2 id="phan-2-kien-truc-tong-the">PHẦN 2: KIẾN TRÚC TỔNG THỂ HỆ THỐNG</h2>

<h3 id="21-so-do-kien-truc">2.1. Sơ đồ kiến trúc tổng thể</h3>

<pre><code>
┌─────────────────────────────────────────────────────────────────────────────┐
│                        PRODUCTION ON-PREMISES STACK                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─── EXTERNAL ACCESS ───────────────────────────────────────────────────┐ │
│  │  Users → DNS → MetalLB VIP → NGINX Ingress → Istio Gateway          │ │
│  │  + cert-manager (TLS/HTTPS)                                           │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  ┌─── KUBERNETES HA CLUSTER (3 Control Plane + N Workers) ───────────────┐ │
│  │                                                                         │ │
│  │  ┌── Service Mesh (Istio) ──────────────────────────────────────────┐ │ │
│  │  │  mTLS │ Traffic Management │ Circuit Breaker │ Canary Deploy     │ │ │
│  │  └──────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                         │ │
│  │  ┌── Microservices ─────────┐  ┌── Data Layer ──────────────────┐   │ │
│  │  │  API Gateway             │  │  PostgreSQL HA (CloudNativePG) │   │ │
│  │  │  Auth Service            │  │  + PgBouncer + pgBackRest      │   │ │
│  │  │  User Service            │  │                                 │   │ │
│  │  │  Order Service           │  │  Redis HA (Sentinel/Cluster)   │   │ │
│  │  │  Payment Service         │  │                                 │   │ │
│  │  │  Notification Service    │  │  RabbitMQ HA (Quorum Queues)   │   │ │
│  │  │  ...                     │  │  Kafka (Strimzi KRaft mode)    │   │ │
│  │  └──────────────────────────┘  └─────────────────────────────────┘   │ │
│  │                                                                         │ │
│  │  ┌── GitOps & Secrets ──────┐  ┌── Observability ───────────────┐   │ │
│  │  │  ArgoCD HA               │  │  Prometheus HA + Thanos        │   │ │
│  │  │  Helm Charts             │  │  Grafana HA                    │   │ │
│  │  │  Vault HA + ESO          │  │  Loki + Alloy (Logs)           │   │ │
│  │  │  Kyverno Policies        │  │  Tempo + OTEL (Traces)         │   │ │
│  │  └──────────────────────────┘  └─────────────────────────────────┘   │ │
│  │                                                                         │ │
│  │  ┌── Security ──────────────┐  ┌── Storage ─────────────────────┐   │ │
│  │  │  RBAC + OIDC (Keycloak)  │  │  Rook-Ceph Cluster            │   │ │
│  │  │  Falco Runtime Security  │  │  ├─ RBD (Block → Databases)   │   │ │
│  │  │  Trivy + Harbor Registry │  │  ├─ CephFS (Shared → Apps)    │   │ │
│  │  │  NetworkPolicy (Cilium)  │  │  └─ RGW/S3 (Object → Backup) │   │ │
│  │  └──────────────────────────┘  └─────────────────────────────────┘   │ │
│  │                                                                         │ │
│  │  ┌── Infrastructure ────────────────────────────────────────────────┐ │ │
│  │  │  Cilium CNI (eBPF) │ MetalLB │ CoreDNS │ etcd HA               │ │ │
│  │  │  keepalived + HAProxy (API Server VIP)                           │ │ │
│  │  └──────────────────────────────────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  ┌─── Physical Layer ─────────────────────────────────────────────────────┐ │
│  │  3× Control Plane Nodes │ 3-5× Worker Nodes │ 3× Storage Nodes       │ │
│  │  Network: Mgmt + Cluster + Storage + External VLANs                   │ │
│  │  OS: Ubuntu 24.04 LTS / RHEL 9                                        │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
</code></pre>

<h3 id="22-cac-thanh-phan-cot-loi">2.2. Các thành phần cốt lõi và vai trò</h3>

<h4 id="layer-1-infrastructure">Layer 1: Infrastructure Foundation</h4>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Thành phần</th>
<th>Công nghệ</th>
<th>Vai trò</th>
<th>Bài học</th>
</tr>
</thead>
<tbody>
<tr>
<td>Container Runtime</td>
<td>containerd 2.x</td>
<td>Chạy containers theo CRI standard</td>
<td>Bài 5</td>
</tr>
<tr>
<td>K8s Orchestration</td>
<td>kubeadm (K8s 1.31+)</td>
<td>HA control plane, scheduling, self-healing</td>
<td>Bài 5-7</td>
</tr>
<tr>
<td>CNI Networking</td>
<td>Cilium (eBPF)</td>
<td>Pod networking, NetworkPolicy, Hubble observability</td>
<td>Bài 8</td>
</tr>
<tr>
<td>Load Balancer</td>
<td>MetalLB</td>
<td>Cấp External IP cho Services trên bare-metal</td>
<td>Bài 9</td>
</tr>
<tr>
<td>API Server HA</td>
<td>keepalived + HAProxy</td>
<td>Virtual IP cho K8s API endpoint</td>
<td>Bài 4</td>
</tr>
<tr>
<td>Cluster State</td>
<td>etcd (3 nodes)</td>
<td>Distributed key-value store cho K8s</td>
<td>Bài 10</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h4 id="layer-2-storage">Layer 2: Distributed Storage</h4>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Thành phần</th>
<th>Công nghệ</th>
<th>Vai trò</th>
<th>Bài học</th>
</tr>
</thead>
<tbody>
<tr>
<td>Storage Orchestrator</td>
<td>Rook Operator</td>
<td>Quản lý Ceph lifecycle trên K8s</td>
<td>Bài 11-12</td>
</tr>
<tr>
<td>Block Storage</td>
<td>Ceph RBD</td>
<td>PV cho databases (PostgreSQL, etcd)</td>
<td>Bài 13</td>
</tr>
<tr>
<td>Shared Storage</td>
<td>CephFS</td>
<td>ReadWriteMany cho microservices</td>
<td>Bài 14</td>
</tr>
<tr>
<td>Object Storage</td>
<td>Ceph RGW (S3)</td>
<td>Backup, Loki logs, Thanos metrics</td>
<td>Bài 15</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h4 id="layer-3-data">Layer 3: Data Layer</h4>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Thành phần</th>
<th>Công nghệ</th>
<th>Vai trò</th>
<th>Bài học</th>
</tr>
</thead>
<tbody>
<tr>
<td>Primary Database</td>
<td>PostgreSQL HA (CloudNativePG)</td>
<td>ACID transactions, relational data</td>
<td>Bài 16-17</td>
</tr>
<tr>
<td>Connection Pool</td>
<td>PgBouncer</td>
<td>Connection pooling, reduce DB load</td>
<td>Bài 18</td>
</tr>
<tr>
<td>DB Backup</td>
<td>pgBackRest</td>
<td>Full/incremental backup, PITR</td>
<td>Bài 19</td>
</tr>
<tr>
<td>Message Queue</td>
<td>RabbitMQ HA</td>
<td>Async messaging, task queues</td>
<td>Bài 21</td>
</tr>
<tr>
<td>Event Streaming</td>
<td>Kafka (Strimzi)</td>
<td>Event sourcing, log aggregation</td>
<td>Bài 22</td>
</tr>
<tr>
<td>Cache</td>
<td>Redis HA</td>
<td>Caching, session store, rate limiting</td>
<td>Bài 23</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h4 id="layer-4-networking">Layer 4: Service Mesh & Networking</h4>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Thành phần</th>
<th>Công nghệ</th>
<th>Vai trò</th>
<th>Bài học</th>
</tr>
</thead>
<tbody>
<tr>
<td>Service Mesh</td>
<td>Istio</td>
<td>mTLS, traffic management, observability</td>
<td>Bài 24-25</td>
</tr>
<tr>
<td>Ingress Controller</td>
<td>NGINX Ingress</td>
<td>HTTP/HTTPS routing vào cluster</td>
<td>Bài 26</td>
</tr>
<tr>
<td>TLS Automation</td>
<td>cert-manager</td>
<td>Auto-issue/renew certificates</td>
<td>Bài 26</td>
</tr>
<tr>
<td>Gateway API</td>
<td>Istio + Gateway API</td>
<td>Next-gen ingress, canary routing</td>
<td>Bài 27</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h4 id="layer-5-platform">Layer 5: Platform Operations</h4>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Thành phần</th>
<th>Công nghệ</th>
<th>Vai trò</th>
<th>Bài học</th>
</tr>
</thead>
<tbody>
<tr>
<td>GitOps</td>
<td>ArgoCD HA</td>
<td>Declarative deployment from Git</td>
<td>Bài 28, 30</td>
</tr>
<tr>
<td>Packaging</td>
<td>Helm</td>
<td>K8s manifest templating</td>
<td>Bài 29</td>
</tr>
<tr>
<td>Secrets</td>
<td>Vault HA + ESO</td>
<td>Centralized secrets management</td>
<td>Bài 31</td>
</tr>
<tr>
<td>Metrics</td>
<td>Prometheus HA + Thanos</td>
<td>Metrics collection, long-term storage</td>
<td>Bài 32</td>
</tr>
<tr>
<td>Dashboards</td>
<td>Grafana HA</td>
<td>Visualization, alerting</td>
<td>Bài 33</td>
</tr>
<tr>
<td>Logs</td>
<td>Loki + Alloy</td>
<td>Centralized log aggregation</td>
<td>Bài 34</td>
</tr>
<tr>
<td>Traces</td>
<td>Tempo + OpenTelemetry</td>
<td>Distributed tracing</td>
<td>Bài 35</td>
</tr>
<tr>
<td>Policy</td>
<td>Kyverno</td>
<td>Admission control, policy-as-code</td>
<td>Bài 37</td>
</tr>
<tr>
<td>Runtime Security</td>
<td>Falco</td>
<td>Threat detection</td>
<td>Bài 38</td>
</tr>
<tr>
<td>Image Security</td>
<td>Trivy + Harbor</td>
<td>Vulnerability scanning, private registry</td>
<td>Bài 39</td>
</tr>
<tr>
<td>Backup</td>
<td>Velero</td>
<td>Cluster backup/restore</td>
<td>Bài 44</td>
</tr>
<tr>
<td>Chaos Testing</td>
<td>Chaos Mesh</td>
<td>Resilience validation</td>
<td>Bài 45</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-3-tai-sao-chon-tung-cong-nghe">PHẦN 3: TẠI SAO CHỌN TỪNG CÔNG NGHỆ?</h2>

<h3 id="31-kubernetes-kubeadm-vs-managed">3.1. Kubernetes (kubeadm) — Tại sao không dùng managed K8s?</h3>
<p>On-premises không có EKS/GKE/AKS. Các lựa chọn:</p>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tool</th>
<th>Ưu điểm</th>
<th>Nhược điểm</th>
<th>Phù hợp</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>kubeadm</strong></td>
<td>Official K8s tool, flexible, production-grade</td>
<td>Manual setup, cần hiểu sâu</td>
<td>✅ Production</td>
</tr>
<tr>
<td>k3s</td>
<td>Nhẹ, dễ cài</td>
<td>Bỏ features, dùng SQLite thay etcd</td>
<td>Edge/IoT</td>
</tr>
<tr>
<td>RKE2</td>
<td>FIPS compliant, Rancher integration</td>
<td>Vendor-specific</td>
<td>Rancher users</td>
</tr>
<tr>
<td>Kubespray</td>
<td>Ansible-based, reproducible</td>
<td>Slow, Ansible complexity</td>
<td>Large clusters</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>👉 <strong>Chọn kubeadm</strong> vì: official tool, production-grade, giúp hiểu K8s internals sâu nhất.</p>

<h3 id="32-cilium-vs-calico-vs-flannel">3.2. Cilium CNI — Tại sao không Calico hay Flannel?</h3>
<pre><code>
Flannel:  Đơn giản → Không có NetworkPolicy → ❌ Production
Calico:   Tốt → iptables-based → Performance overhead khi scale
Cilium:   eBPF-based → Kernel-level networking → ✅ Best performance
          + Hubble observability + kube-proxy replacement
          + CNCF Graduated project (2024)
</code></pre>

<h3 id="33-rook-ceph-vs-longhorn-vs-nfs">3.3. Rook-Ceph — Tại sao không Longhorn hay NFS?</h3>
<pre><code>
NFS:      Single point of failure, no replication → ❌ HA
Longhorn: Đơn giản, tốt cho small clusters → Không có Object Storage
Rook-Ceph: Block + Shared + Object storage trong 1 platform
           Enterprise-grade, CNCF Graduated
           Performance tốt cho databases + S3 cho backup/logs
           → ✅ All-in-one storage solution
</code></pre>

<h3 id="34-istio-vs-linkerd">3.4. Istio — Tại sao không Linkerd?</h3>
<pre><code>
Linkerd: Nhẹ hơn, dễ hơn → Ít features (không Gateway API, limited traffic mgmt)
Istio:   Feature-rich → mTLS, traffic mirroring, canary, circuit breaker
         Gateway API support, Kiali observability
         Industry standard cho enterprise → ✅ Production choice
</code></pre>

<hr>

<h2 id="phan-4-lab-environment-setup">PHẦN 4: THIẾT LẬP LAB ENVIRONMENT</h2>

<h3 id="41-minimum-hardware-cho-lab">4.1. Minimum Hardware cho Lab</h3>
<p>Bạn cần tối thiểu các resources sau để thực hành toàn bộ khóa học:</p>

<h4 id="option-a-vms-khuyen-nghi">Option A: VMs trên máy host mạnh (Khuyến nghị)</h4>
<pre><code class="language-text">Host Machine: 64GB RAM, 16 cores, 500GB SSD

VM Layout:
┌─────────────────────────────────────────────────────────┐
│  master1: 4 vCPU, 8GB RAM, 50GB disk (Control Plane 1) │
│  master2: 4 vCPU, 8GB RAM, 50GB disk (Control Plane 2) │
│  master3: 4 vCPU, 8GB RAM, 50GB disk (Control Plane 3) │
│  worker1: 4 vCPU, 8GB RAM, 50GB disk + 100GB raw disk  │
│  worker2: 4 vCPU, 8GB RAM, 50GB disk + 100GB raw disk  │
│  worker3: 4 vCPU, 8GB RAM, 50GB disk + 100GB raw disk  │
│  lb:      2 vCPU, 2GB RAM, 20GB disk (HAProxy/keepalived)│
└─────────────────────────────────────────────────────────┘
Total: ~26 vCPU, 58GB RAM, 520GB disk
</code></pre>

<h4 id="option-b-cloud-vms">Option B: Cloud VMs (AWS/GCP/Hetzner)</h4>
<pre><code class="language-text">7 VMs tương đương cấu hình bên trên
Estimated cost: ~$200-400/tháng (Hetzner rẻ nhất)
Khuyến nghị: Hetzner Dedicated hoặc Proxmox VE
</code></pre>

<h4 id="option-c-bare-metal-production">Option C: Bare-metal (Production-like)</h4>
<pre><code class="language-text">3× Dell PowerEdge R640 hoặc tương đương:
  - 2× 16-core Xeon, 128GB RAM, 2× 480GB SSD (OS) + 4× 2TB NVMe (Ceph)
  - 4× 25GbE NICs (bonding)
</code></pre>

<h3 id="42-network-layout-cho-lab">4.2. Network Layout cho Lab</h3>
<pre><code class="language-text">
Network Topology:
┌────────────────────────────────────────────────────────────┐
│  Management Network: 192.168.1.0/24                        │
│  ├─ master1: 192.168.1.11                                  │
│  ├─ master2: 192.168.1.12                                  │
│  ├─ master3: 192.168.1.13                                  │
│  ├─ worker1: 192.168.1.21                                  │
│  ├─ worker2: 192.168.1.22                                  │
│  ├─ worker3: 192.168.1.23                                  │
│  ├─ lb:      192.168.1.10                                  │
│  └─ VIP:     192.168.1.100 (K8s API Server)                │
│                                                              │
│  Pod Network:     10.244.0.0/16 (Cilium)                   │
│  Service Network: 10.96.0.0/12  (ClusterIP)                │
│  MetalLB Pool:    192.168.1.200-192.168.1.250              │
└────────────────────────────────────────────────────────────┘
</code></pre>

<h3 id="43-tao-vms-voi-vagrant">4.3. Tạo VMs nhanh với Vagrant (Optional)</h3>
<pre><code class="language-ruby"># Vagrantfile
Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/noble64"  # Ubuntu 24.04

  # Load Balancer
  config.vm.define "lb" do |lb|
    lb.vm.hostname = "lb"
    lb.vm.network "private_network", ip: "192.168.1.10"
    lb.vm.provider "virtualbox" do |v|
      v.memory = 2048
      v.cpus = 2
    end
  end

  # Control Plane nodes
  (1..3).each do |i|
    config.vm.define "master#{i}" do |master|
      master.vm.hostname = "master#{i}"
      master.vm.network "private_network", ip: "192.168.1.#{10 + i}"
      master.vm.provider "virtualbox" do |v|
        v.memory = 8192
        v.cpus = 4
      end
    end
  end

  # Worker nodes
  (1..3).each do |i|
    config.vm.define "worker#{i}" do |worker|
      worker.vm.hostname = "worker#{i}"
      worker.vm.network "private_network", ip: "192.168.1.#{20 + i}"
      worker.vm.provider "virtualbox" do |v|
        v.memory = 8192
        v.cpus = 4
        # Raw disk cho Ceph OSD
        unless File.exist?("ceph-osd-worker#{i}.vdi")
          v.customize ['createmedium', 'disk',
            '--filename', "ceph-osd-worker#{i}.vdi",
            '--size', 102400]
        end
        v.customize ['storageattach', :id,
          '--storagectl', 'SCSI',
          '--port', 2,
          '--type', 'hdd',
          '--medium', "ceph-osd-worker#{i}.vdi"]
      end
    end
  end
end
</code></pre>

<pre><code class="language-bash"># Khởi tạo toàn bộ lab
vagrant up

# SSH vào master1
vagrant ssh master1

# Kiểm tra connectivity
for i in 10 11 12 13 21 22 23; do
  ping -c 1 192.168.1.$i
done
</code></pre>

<h3 id="44-cau-hinh-ssh-keys">4.4. Cấu hình SSH Keys cho tất cả nodes</h3>
<pre><code class="language-bash"># Trên máy workstation/jump host
ssh-keygen -t ed25519 -C "k8s-lab-admin" -f ~/.ssh/k8s-lab

# Copy public key sang tất cả nodes
for host in lb master{1..3} worker{1..3}; do
  ssh-copy-id -i ~/.ssh/k8s-lab.pub user@${host}
done

# Tạo SSH config cho tiện
cat >> ~/.ssh/config << 'EOF'
Host lb
  HostName 192.168.1.10
  User root

Host master1
  HostName 192.168.1.11
  User root

Host master2
  HostName 192.168.1.12
  User root

Host master3
  HostName 192.168.1.13
  User root

Host worker1
  HostName 192.168.1.21
  User root

Host worker2
  HostName 192.168.1.22
  User root

Host worker3
  HostName 192.168.1.23
  User root

Host master* worker* lb
  IdentityFile ~/.ssh/k8s-lab
  StrictHostKeyChecking no
EOF
</code></pre>

<hr>

<h2 id="phan-5-lo-trinh-hoc-tap">PHẦN 5: LỘ TRÌNH HỌC TẬP 50 BÀI</h2>

<h3 id="51-dependency-graph">5.1. Dependency Graph giữa các phần</h3>
<pre><code>
Phase 1: Foundation (Bài 1-4)     ─── Chuẩn bị hạ tầng cơ bản
    │
    ▼
Phase 2: K8s HA (Bài 5-10)       ─── Dựng Kubernetes HA cluster
    │
    ├──────────────┬──────────────┐
    ▼              ▼              ▼
Phase 3:       Phase 5:       Phase 6:
Rook-Ceph      MQ HA          Istio
(Bài 11-15)    (Bài 21-23)    (Bài 24-27)
    │              │              │
    ▼              │              │
Phase 4:           │              │
PostgreSQL HA      │              │
(Bài 16-20)        │              │
    │              │              │
    └──────────────┴──────────────┘
                   │
                   ▼
    Phase 7: GitOps (Bài 28-31)    ─── ArgoCD + Helm + Vault
                   │
            ┌──────┴──────┐
            ▼             ▼
    Phase 8:          Phase 9:
    Observability     Security
    (Bài 32-35)       (Bài 36-39)
            │             │
            └──────┬──────┘
                   ▼
    Phase 10: Deployment Patterns (Bài 40-43)
                   │
                   ▼
    Phase 11: DR & Chaos (Bài 44-45)
                   │
                   ▼
    Phase 12: Operations + Capstone (Bài 46-50)
</code></pre>

<h3 id="52-thoi-gian-du-kien">5.2. Thời gian dự kiến</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Phần</th>
<th>Số bài</th>
<th>Giờ</th>
<th>Timeline (2h/ngày)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Phần 1: Foundation</td>
<td>4</td>
<td>~8h</td>
<td>Tuần 1</td>
</tr>
<tr>
<td>Phần 2: K8s HA</td>
<td>6</td>
<td>~14h</td>
<td>Tuần 2-3</td>
</tr>
<tr>
<td>Phần 3: Rook-Ceph</td>
<td>5</td>
<td>~11h</td>
<td>Tuần 3-4</td>
</tr>
<tr>
<td>Phần 4: PostgreSQL</td>
<td>5</td>
<td>~12h</td>
<td>Tuần 5-6</td>
</tr>
<tr>
<td>Phần 5: MQ HA</td>
<td>3</td>
<td>~8h</td>
<td>Tuần 6-7</td>
</tr>
<tr>
<td>Phần 6: Istio</td>
<td>4</td>
<td>~10h</td>
<td>Tuần 7-8</td>
</tr>
<tr>
<td>Phần 7: GitOps</td>
<td>4</td>
<td>~11h</td>
<td>Tuần 9-10</td>
</tr>
<tr>
<td>Phần 8: Observability</td>
<td>4</td>
<td>~10h</td>
<td>Tuần 10-11</td>
</tr>
<tr>
<td>Phần 9: Security</td>
<td>4</td>
<td>~10h</td>
<td>Tuần 12-13</td>
</tr>
<tr>
<td>Phần 10: Deployment</td>
<td>4</td>
<td>~9h</td>
<td>Tuần 13-14</td>
</tr>
<tr>
<td>Phần 11: DR</td>
<td>2</td>
<td>~5h</td>
<td>Tuần 15</td>
</tr>
<tr>
<td>Phần 12: Operations</td>
<td>5</td>
<td>~15h</td>
<td>Tuần 15-18</td>
</tr>
<tr>
<td><strong>TỔNG</strong></td>
<td><strong>50</strong></td>
<td><strong>~123h</strong></td>
<td><strong>~18 tuần</strong></td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-6-conventions-va-quy-uoc">PHẦN 6: CONVENTIONS VÀ QUY ƯỚC TRONG KHÓA HỌC</h2>

<h3 id="61-naming-conventions">6.1. Naming Conventions</h3>
<pre><code class="language-bash"># Namespace naming
production:     prod-&lt;service-name&gt;     # prod-user-service
staging:        stg-&lt;service-name&gt;
infrastructure: infra-&lt;component&gt;       # infra-monitoring, infra-storage
platform:       platform-&lt;component&gt;    # platform-argocd, platform-vault

# Helm release naming
&lt;component&gt;-&lt;environment&gt;              # postgresql-prod, redis-stg

# Label standards
app.kubernetes.io/name: &lt;service-name&gt;
app.kubernetes.io/version: &lt;version&gt;
app.kubernetes.io/component: &lt;component&gt;
app.kubernetes.io/part-of: &lt;system-name&gt;
app.kubernetes.io/managed-by: helm
</code></pre>

<h3 id="62-ky-hieu-trong-bai-hoc">6.2. Ký hiệu trong bài học</h3>
<ul>
<li>💡 <strong>Tip:</strong> Mẹo hữu ích, best practice</li>
<li>⚠️ <strong>Warning:</strong> Cẩn thận, có thể gây lỗi</li>
<li>❌ <strong>Danger:</strong> Tuyệt đối không làm trong production</li>
<li>📋 <strong>Checklist:</strong> Danh sách cần kiểm tra</li>
<li>🔬 <strong>Deep Dive:</strong> Giải thích chi tiết kỹ thuật</li>
<li>🛠️ <strong>Lab:</strong> Bài thực hành</li>
</ul>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>On-premises microservices</strong> phù hợp cho tổ chức cần data sovereignty, predictable cost, và ultra-low latency</li>
<li><strong>Kubernetes HA</strong> là nền tảng orchestration, kết hợp với hệ sinh thái CNCF tools tạo thành production platform</li>
<li><strong>Stack đầy đủ</strong> gồm 6 layers: Infrastructure → Storage → Data → Networking → Platform → Security</li>
<li><strong>Mỗi công nghệ được chọn</strong> dựa trên tiêu chí: production-grade, CNCF backed, community active</li>
<li><strong>Lab environment</strong> cần tối thiểu 7 VMs (3 masters + 3 workers + 1 LB) với ~58GB RAM tổng</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Đánh giá yêu cầu hạ tầng</h3>
<p>Cho kịch bản: Công ty fintech cần triển khai 20 microservices, xử lý 10,000 requests/giây, lưu trữ 500GB data, yêu cầu PCI-DSS compliance.</p>
<ul>
<li>Tính toán số nodes cần thiết (control plane, workers, storage)</li>
<li>Ước tính tổng CPU, RAM, Storage</li>
<li>Vẽ network topology diagram</li>
<li>Liệt kê các components cần thiết từ stack trên</li>
</ul>

<h3 id="bt2">Bài tập 2: Setup Lab Environment</h3>
<ul>
<li>Tạo 7 VMs theo Option A hoặc Option B</li>
<li>Cấu hình networking giữa các VMs</li>
<li>Setup SSH key-based authentication</li>
<li>Verify ping connectivity giữa tất cả nodes</li>
<li>Ghi chép IP và hostname của từng VM</li>
</ul>

<h3 id="bt3">Bài tập 3: So sánh công nghệ</h3>
<p>Nghiên cứu và so sánh chi tiết 2 cặp công nghệ:</p>
<ul>
<li>Cilium vs Calico: Performance benchmarks, features, community</li>
<li>Rook-Ceph vs Longhorn: Scalability, features, operational complexity</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 2: Lập kế hoạch phần cứng và Network Topology</strong>, chúng ta sẽ đi sâu vào việc tính toán sizing chi tiết cho CPU/RAM/Disk, thiết kế network topology với VLAN, bonding, và MTU cho production environment.</p>
