---
id: 019c9617-fc21-7282-8fc3-c1147ba22e10
title: 'BÀI 1: GIỚI THIỆU KUBERNETES VÀ CONTAINER ORCHESTRATION'
slug: bai-1-gioi-thieu-kubernetes-va-container-orchestration
description: >-
  Bài học đầu tiên giới thiệu về Container Orchestration và Kubernetes - nền
  tảng để hiểu tại sao K8s trở thành tiêu chuẩn công nghiệp. Tìm hiểu lịch sử,
  kiến trúc cơ bản, và so sánh với các công nghệ tương tự.
duration_minutes: 160
is_free: true
video_url: null
sort_order: 1
section_title: 'Module 1: Giới thiệu & Kiến trúc Kubernetes'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: TỪ CƠ BẢN ĐẾN NÂNG CAO'
  slug: kubernetes-tu-co-ban-den-nang-cao
---
<h2 id="%F0%9F%8E%AF-m%E1%BB%A5c-ti%C3%AAu-b%C3%A0i-h%E1%BB%8Dc">🎯 MỤC TIÊU BÀI HỌC</h2><p>Sau khi hoàn thành bài học này, bạn sẽ:</p><ul><li>✅ Hiểu được Container Orchestration là gì và tại sao cần nó</li><li>✅ Nắm được vai trò và tầm quan trọng của Kubernetes</li><li>✅ So sánh được Kubernetes với các công cụ khác</li><li>✅ Hiểu kiến trúc tổng quan của Kubernetes</li><li>✅ Biết về Kubernetes ecosystem và cộng đồng</li></ul><h3 id="ph%E1%BA%A7n-1-container-orchestration-l%C3%A0-g%C3%AC">PHẦN 1: CONTAINER ORCHESTRATION LÀ GÌ?</h3><h4 id="11-v%E1%BA%A5n-%C4%91%E1%BB%81-v%E1%BB%9Bi-containers-khi-scale">1.1. Vấn đề với Containers khi Scale</h4><p>Hãy tưởng tượng bạn có một ứng dụng web đơn giản chạy trong Docker container:</p><pre><code class="language-bash">docker run -d -p 8080:80 my-web-app
</code></pre><p><strong>Mọi thứ hoạt động tốt... cho đến khi:</strong></p><p>❌ <strong>Vấn đề 1: Traffic tăng đột biến</strong></p><ul><li>1 container không đủ xử lý</li><li>Cần scale lên 10, 20, 100 containers</li><li>Làm thế nào để phân phối traffic?</li></ul><p>❌ <strong>Vấn đề 2: Container bị crash</strong></p><ul><li>Ai sẽ phát hiện và restart?</li><li>Làm sao đảm bảo uptime 99.9%?</li></ul><p>❌ <strong>Vấn đề 3: Nhiều servers</strong></p><ul><li>Làm sao deploy containers lên nhiều máy chủ?</li><li>Làm sao quản lý tài nguyên (CPU, RAM) hiệu quả?</li></ul><p>❌ <strong>Vấn đề 4: Update ứng dụng</strong></p><ul><li>Làm sao rolling update không downtime?</li><li>Rollback nếu có lỗi?</li></ul><p>❌ <strong>Vấn đề 5: Service Discovery</strong></p><ul><li>Containers có IP động</li><li>Làm sao các services tìm và gọi nhau?</li></ul><p>❌ <strong>Vấn đề 6: Configuration Management</strong></p><ul><li>Quản lý secrets, configs cho hàng trăm containers</li><li>Môi trường dev, staging, production khác nhau</li></ul><h4 id="12-container-orchestration-l%C3%A0-gi%E1%BA%A3i-ph%C3%A1p">1.2. Container Orchestration là giải pháp</h4><p><strong>Container Orchestration</strong> là việc tự động hóa deployment, management, scaling, và networking của containers.</p><p><strong>Orchestrator làm gì:</strong></p><pre><code>┌─────────────────────────────────────────────────────────┐
│         CONTAINER ORCHESTRATION PLATFORM                │
├─────────────────────────────────────────────────────────┤
│  ✓ Scheduling         - Chọn node phù hợp cho container│
│  ✓ Scaling            - Auto scale up/down              │
│  ✓ Self-healing       - Restart containers failed       │
│  ✓ Load Balancing     - Phân phối traffic đều          │
│  ✓ Service Discovery  - Tìm và kết nối services        │
│  ✓ Rolling Updates    - Update không downtime           │
│  ✓ Rollback           - Quay lại version cũ             │
│  ✓ Secret Management  - Quản lý credentials an toàn    │
│  ✓ Resource Management- Tối ưu CPU, RAM, Storage        │
└─────────────────────────────────────────────────────────┘
</code></pre><h4 id="13-v%C3%AD-d%E1%BB%A5-th%E1%BB%B1c-t%E1%BA%BF">1.3. Ví dụ thực tế</h4><p><strong>Trước khi có Orchestration:</strong></p><pre><code class="language-bash"># Trên server 1
ssh server1
docker run -d app:v1
docker run -d app:v1
docker run -d app:v1

# Trên server 2
ssh server2
docker run -d app:v1
docker run -d app:v1

# Manual monitoring
while true; do
  docker ps | grep app
  # Nếu container die -&gt; manual restart
done
</code></pre><p><strong>Với Container Orchestration:</strong></p><pre><code class="language-yaml"># Khai báo mong muốn
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 5  # Muốn 5 containers
  template:
    spec:
      containers:
      - name: app
        image: app:v1
</code></pre><p>Orchestrator tự động:</p><ul><li>Deploy 5 containers lên các servers khác nhau</li><li>Monitor và restart nếu crash</li><li>Load balance traffic</li><li>Scale khi cần</li></ul><hr><h3 id="ph%E1%BA%A7n-2-t%E1%BA%A1i-sao-c%E1%BA%A7n-kubernetes">PHẦN 2: TẠI SAO CẦN KUBERNETES?</h3><h4 id="21-b%E1%BB%91i-c%E1%BA%A3nh-ra-%C4%91%E1%BB%9Di">2.1. Bối cảnh ra đời</h4><p><strong>Google's Borg (2003-2015)</strong></p><ul><li>Google chạy hàng tỷ containers mỗi tuần</li><li>Borg: hệ thống internal để quản lý containers</li><li>Kinh nghiệm 15+ năm vận hành large-scale systems</li></ul><p><strong>Kubernetes ra đời (2014)</strong></p><ul><li>Google open-source Kubernetes (K8s)</li><li>Dựa trên kinh nghiệm từ Borg và Omega</li><li>Được thiết kế cho cloud-native applications</li><li>Donate cho CNCF (Cloud Native Computing Foundation)</li></ul><h4 id="22-t%E1%BA%A1i-sao-kubernetes-th%E1%BA%AFng-th%E1%BA%BF">2.2. Tại sao Kubernetes thắng thế?</h4><p><strong>1. Production-Proven</strong></p><pre><code>Google → 15+ năm kinh nghiệm
         ↓
      Kubernetes → Battle-tested tại Google
         ↓
    Cộng đồng → Hàng nghìn companies đóng góp
</code></pre><p><strong>2. Vendor Agnostic</strong></p><ul><li>Chạy được ở mọi nơi: on-premise, cloud, hybrid</li><li>Không bị lock-in với 1 cloud provider</li><li>Portable giữa AWS, GCP, Azure, bare metal</li></ul><p><strong>3. Extensible và Flexible</strong></p><ul><li>Plugin architecture</li><li>Custom Resource Definitions (CRDs)</li><li>Operator pattern</li><li>Rich ecosystem</li></ul><p><strong>4. Large Community</strong></p><ul><li>100,000+ contributors</li><li>Hàng triệu users</li><li>Mature tooling và documentation</li><li>Active development</li></ul><p><strong>5. Industry Standard</strong></p><pre><code>CNCF Graduated Project
    ↓
Được tích hợp bởi:
- AWS (EKS)
- Google (GKE)
- Azure (AKS)
- IBM (IKS)
- DigitalOcean
- và nhiều vendor khác
</code></pre><h4 id="23-con-s%E1%BB%91-%E1%BA%A5n-t%C6%B0%E1%BB%A3ng">2.3. Con số ấn tượng</h4><p>📊 <strong>Kubernetes Adoption (2024)</strong></p><ul><li>96% organizations đang dùng hoặc đánh giá K8s</li><li>5.6 triệu developers sử dụng K8s</li><li>Top 2 most wanted platform (Stack Overflow)</li><li>89% containers chạy trên K8s</li></ul><p>🚀 <strong>Use Cases</strong></p><ul><li>Microservices architecture</li><li>CI/CD pipelines</li><li>Machine Learning workloads</li><li>Big Data processing</li><li>Hybrid/Multi-cloud deployments</li></ul><hr><h3 id="ph%E1%BA%A7n-3-so-s%C3%A1nh-kubernetes-v%E1%BB%9Bi-c%C3%A1c-c%C3%B4ng-c%E1%BB%A5-kh%C3%A1c">PHẦN 3: SO SÁNH KUBERNETES VỚI CÁC CÔNG CỤ KHÁC</h3><h4 id="31-kubernetes-vs-docker-swarm">3.1. Kubernetes vs Docker Swarm</h4>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tiêu chí</th>
<th>Kubernetes</th>
<th>Docker Swarm</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Độ phức tạp</strong></td>
<td>Cao, nhiều concepts</td>
<td>Đơn giản, dễ học</td>
</tr>
<tr>
<td><strong>Setup</strong></td>
<td>Phức tạp hơn</td>
<td>Rất đơn giản</td>
</tr>
<tr>
<td><strong>Scalability</strong></td>
<td>Rất tốt (1000+ nodes)</td>
<td>Tốt (100+ nodes)</td>
</tr>
<tr>
<td><strong>Ecosystem</strong></td>
<td>Rất rộng</td>
<td>Hạn chế</td>
</tr>
<tr>
<td><strong>Auto-scaling</strong></td>
<td>Native HPA, VPA</td>
<td>Limited</td>
</tr>
<tr>
<td><strong>Load Balancing</strong></td>
<td>Advanced (Ingress)</td>
<td>Basic</td>
</tr>
<tr>
<td><strong>Community</strong></td>
<td>Rất lớn</td>
<td>Nhỏ hơn nhiều</td>
</tr>
<tr>
<td><strong>Enterprise Support</strong></td>
<td>Tất cả cloud providers</td>
<td>Limited</td>
</tr>
<tr>
<td><strong>Learning Curve</strong></td>
<td>Steep</td>
<td>Gentle</td>
</tr>
<tr>
<td><strong>Production Ready</strong></td>
<td>Yes</td>
<td>Yes (nhưng ít dùng)</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
<p><strong>Kết luận:</strong> Docker Swarm dễ hơn nhưng K8s mạnh hơn và là industry standard.</p><h4 id="32-kubernetes-vs-apache-mesos">3.2. Kubernetes vs Apache Mesos</h4>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tiêu chí</th>
<th>Kubernetes</th>
<th>Apache Mesos</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Focus</strong></td>
<td>Container orchestration</td>
<td>General purpose cluster manager</td>
</tr>
<tr>
<td><strong>Architecture</strong></td>
<td>Monolithic</td>
<td>Two-level (Mesos + Marathon)</td>
</tr>
<tr>
<td><strong>Adoption</strong></td>
<td>Rất cao</td>
<td>Trung bình</td>
</tr>
<tr>
<td><strong>Use Cases</strong></td>
<td>Containers, microservices</td>
<td>Containers, Big Data, analytics</td>
</tr>
<tr>
<td><strong>Complexity</strong></td>
<td>Cao</td>
<td>Rất cao</td>
</tr>
<tr>
<td><strong>Container Support</strong></td>
<td>Native</td>
<td>Via Marathon/DC/OS</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
<p><strong>Kết luận:</strong> Mesos linh hoạt hơn nhưng phức tạp hơn. K8s tập trung vào containers.</p><h4 id="33-kubernetes-vs-nomad">3.3. Kubernetes vs Nomad</h4>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tiêu chí</th>
<th>Kubernetes</th>
<th>HashiCorp Nomad</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Simplicity</strong></td>
<td>Complex</td>
<td>Simple</td>
</tr>
<tr>
<td><strong>Workload Types</strong></td>
<td>Containers</td>
<td>Containers, VMs, binaries</td>
</tr>
<tr>
<td><strong>Ecosystem</strong></td>
<td>Huge</td>
<td>Growing</td>
</tr>
<tr>
<td><strong>Multi-cloud</strong></td>
<td>Excellent</td>
<td>Excellent</td>
</tr>
<tr>
<td><strong>Adoption</strong></td>
<td>Very high</td>
<td>Moderate</td>
</tr>
<tr>
<td><strong>HashiCorp Integration</strong></td>
<td>Limited</td>
<td>Native (Vault, Consul)</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
<p><strong>Kết luận:</strong> Nomad đơn giản hơn và đa dạng workloads, nhưng ecosystem nhỏ hơn.</p><h4 id="34-khi-n%C3%A0o-d%C3%B9ng-g%C3%AC">3.4. Khi nào dùng gì?</h4><p><strong>Chọn Kubernetes khi:</strong></p><ul><li>✅ Production workloads quan trọng</li><li>✅ Cần scale lớn (100+ services)</li><li>✅ Team có kinh nghiệm DevOps</li><li>✅ Cần ecosystem phong phú</li><li>✅ Multi-cloud strategy</li></ul><p><strong>Chọn Docker Swarm khi:</strong></p><ul><li>✅ Team nhỏ, dự án đơn giản</li><li>✅ Cần deploy nhanh</li><li>✅ Đã quen với Docker CLI</li><li>✅ Không cần scale quá lớn</li></ul><p><strong>Chọn Nomad khi:</strong></p><ul><li>✅ Workloads đa dạng (không chỉ containers)</li><li>✅ Đã dùng HashiCorp stack</li><li>✅ Cần simplicity</li><li>✅ Edge computing</li></ul><hr><h3 id="ph%E1%BA%A7n-4-ki%E1%BA%BFn-tr%C3%BAc-kubernetes-t%E1%BB%95ng-quan">PHẦN 4: KIẾN TRÚC KUBERNETES TỔNG QUAN</h3><h4 id="41-kubernetes-cluster">4.1. Kubernetes Cluster</h4><pre><code>┌────────────────────────────────────────────────────────────┐
│                    KUBERNETES CLUSTER                      │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ┌──────────────────────┐      ┌────────────────────────┐│
│  │   CONTROL PLANE      │      │      WORKER NODES      ││
│  │   (Master Nodes)     │      │                        ││
│  │                      │      │  ┌──────────────────┐  ││
│  │  ┌────────────────┐ │      │  │  Node 1          │  ││
│  │  │  API Server    │ │◄────►│  │  - kubelet       │  ││
│  │  └────────────────┘ │      │  │  - kube-proxy    │  ││
│  │                      │      │  │  - Container     │  ││
│  │  ┌────────────────┐ │      │  │    Runtime       │  ││
│  │  │  etcd          │ │      │  │  - Pods          │  ││
│  │  │  (Database)    │ │      │  └──────────────────┘  ││
│  │  └────────────────┘ │      │                        ││
│  │                      │      │  ┌──────────────────┐  ││
│  │  ┌────────────────┐ │      │  │  Node 2          │  ││
│  │  │  Scheduler     │ │      │  │  - kubelet       │  ││
│  │  └────────────────┘ │      │  │  - kube-proxy    │  ││
│  │                      │      │  │  - Container     │  ││
│  │  ┌────────────────┐ │      │  │    Runtime       │  ││
│  │  │  Controller    │ │      │  │  - Pods          │  ││
│  │  │  Manager       │ │      │  └──────────────────┘  ││
│  │  └────────────────┘ │      │                        ││
│  └──────────────────────┘      │  ┌──────────────────┐  ││
│                                 │  │  Node N          │  ││
│                                 │  │  ...             │  ││
│                                 │  └──────────────────┘  ││
│                                 └────────────────────────┘│
└────────────────────────────────────────────────────────────┘
</code></pre><h4 id="42-control-plane-components-master">4.2. Control Plane Components (Master)</h4><p><strong>1. API Server</strong> 🚪</p><ul><li>"Cổng vào" của Kubernetes</li><li>Xử lý tất cả REST requests</li><li>Authentication &amp; Authorization</li><li>Validate và process requests</li><li>Frontend cho etcd</li></ul><pre><code>kubectl → API Server → etcd
  ↑          ↓
  └──── Response
</code></pre><p><strong>2. etcd</strong> 💾</p><ul><li>Key-value database</li><li>Lưu trữ toàn bộ cluster state</li><li>Source of truth</li><li>Highly available (HA setup)</li><li>Only API Server talks to etcd</li></ul><p><strong>3. Scheduler</strong> 📅</p><ul><li>Quyết định Pod chạy trên Node nào</li><li>Xem xét: resources, constraints, affinity</li><li>Không thực hiện deploy (kubelet làm)</li></ul><pre><code>Flow:
1. User tạo Pod
2. Scheduler xem Pods chưa assign
3. Chọn Node tốt nhất
4. Update Pod spec với nodeName
</code></pre><p><strong>4. Controller Manager</strong> 🎮</p><ul><li>Chạy nhiều controllers</li><li>Monitor cluster state</li><li>Thực hiện changes để đạt desired state</li></ul><p><strong>Các controllers quan trọng:</strong></p><ul><li><strong>Node Controller</strong>: Monitor nodes health</li><li><strong>Replication Controller</strong>: Đảm bảo số Pods đúng</li><li><strong>Endpoints Controller</strong>: Populate Endpoints objects</li><li><strong>ServiceAccount Controller</strong>: Tạo default ServiceAccounts</li></ul><h4 id="43-worker-node-components">4.3. Worker Node Components</h4><p><strong>1. kubelet</strong> 👷</p><ul><li>Agent chạy trên mỗi node</li><li>Nhận Pod specs từ API Server</li><li>Đảm bảo containers đang chạy</li><li>Report node/pod status về API Server</li><li>Execute liveness/readiness probes</li></ul><p><strong>2. kube-proxy</strong> 🔀</p><ul><li>Network proxy trên mỗi node</li><li>Maintain network rules</li><li>Implement Kubernetes Service abstraction</li><li>Load balancing cho Services</li><li>Modes: iptables, IPVS, userspace</li></ul><p><strong>3. Container Runtime</strong> 🐳</p><ul><li>Software chạy containers</li><li>Implement Kubernetes CRI (Container Runtime Interface)</li><li>Phổ biến:<ul><li>containerd (recommended)</li><li>CRI-O</li><li>Docker (deprecated in K8s 1.24+)</li></ul></li></ul><h4 id="44-add-ons-optional-but-important">4.4. Add-ons (Optional but Important)</h4><p><strong>DNS</strong> (CoreDNS)</p><ul><li>Service discovery</li><li>Resolve service names to IPs</li><li>Mỗi Service có DNS name</li></ul><p><strong>Dashboard</strong></p><ul><li>Web UI để quản lý cluster</li><li>Visualize resources</li></ul><p><strong>Monitoring</strong> (Metrics Server)</p><ul><li>Collect resource metrics</li><li>CPU, Memory usage</li><li>Enable HPA (Horizontal Pod Autoscaler)</li></ul><p><strong>Logging</strong></p><ul><li>EFK Stack (Elasticsearch, Fluentd, Kibana)</li><li>Centralized logging</li></ul><hr><h3 id="ph%E1%BA%A7n-5-kubernetes-ecosystem">PHẦN 5: KUBERNETES ECOSYSTEM</h3><h4 id="51-cncf-landscape">5.1. CNCF Landscape</h4><p>Kubernetes là một phần của CNCF ecosystem:</p><pre><code>┌─────────────────────────────────────────────┐
│         CNCF CLOUD NATIVE LANDSCAPE         │
├─────────────────────────────────────────────┤
│  Container Orchestration                    │
│  └─ Kubernetes ⭐                           │
│                                             │
│  Container Runtime                          │
│  └─ containerd, CRI-O                      │
│                                             │
│  Service Mesh                               │
│  └─ Istio, Linkerd, Consul                 │
│                                             │
│  Monitoring                                 │
│  └─ Prometheus, Grafana                    │
│                                             │
│  Logging                                    │
│  └─ Fluentd, Loki                          │
│                                             │
│  CI/CD                                      │
│  └─ Argo, Flux, Tekton                     │
│                                             │
│  Security                                   │
│  └─ Falco, OPA, Trivy                      │
└─────────────────────────────────────────────┘
</code></pre><h4 id="52-core-tools">5.2. Core Tools</h4><p><strong>Package Management</strong></p><ul><li><strong>Helm</strong>: Package manager for K8s</li><li><strong>Kustomize</strong>: Configuration management</li></ul><p><strong>GitOps</strong></p><ul><li><strong>ArgoCD</strong>: Declarative GitOps CD</li><li><strong>Flux</strong>: GitOps toolkit</li></ul><p><strong>Service Mesh</strong></p><ul><li><strong>Istio</strong>: Complete service mesh</li><li><strong>Linkerd</strong>: Simple, lightweight</li></ul><p><strong>Monitoring &amp; Observability</strong></p><ul><li><strong>Prometheus</strong>: Metrics collection</li><li><strong>Grafana</strong>: Visualization</li><li><strong>Jaeger</strong>: Distributed tracing</li></ul><p><strong>Security</strong></p><ul><li><strong>Falco</strong>: Runtime security</li><li><strong>OPA</strong>: Policy engine</li><li><strong>Trivy</strong>: Vulnerability scanner</li></ul><h4 id="53-managed-kubernetes-services">5.3. Managed Kubernetes Services</h4><p><strong>Major Cloud Providers:</strong></p><ul><li><strong>AWS</strong>: EKS (Elastic Kubernetes Service)</li><li><strong>Google Cloud</strong>: GKE (Google Kubernetes Engine)</li><li><strong>Azure</strong>: AKS (Azure Kubernetes Service)</li><li><strong>IBM Cloud</strong>: IKS</li><li><strong>DigitalOcean</strong>: DOKS</li><li><strong>Linode</strong>: LKE</li></ul><p><strong>Lợi ích:</strong></p><ul><li>Control plane được managed</li><li>Automatic upgrades</li><li>Integrated với cloud services</li><li>Easy setup</li><li>Cost: chỉ trả tiền worker nodes</li></ul><hr><h3 id="ph%E1%BA%A7n-6-kubernetes-concepts-quan-tr%E1%BB%8Dng">PHẦN 6: KUBERNETES CONCEPTS QUAN TRỌNG</h3><h4 id="61-declarative-vs-imperative">6.1. Declarative vs Imperative</h4><p><strong>Imperative (Cách cũ):</strong></p><pre><code class="language-bash"># Nói K8s phải làm GÌ và NHƯ THẾ NÀO
kubectl run nginx --image=nginx
kubectl expose deployment nginx --port=80
kubectl scale deployment nginx --replicas=3
</code></pre><p><strong>Declarative (Cách K8s):</strong></p><pre><code class="language-yaml"># Nói K8s muốn KẾT QUẢ gì
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: nginx
        image: nginx
---
apiVersion: v1
kind: Service
metadata:
  name: nginx
spec:
  ports:
  - port: 80
</code></pre><pre><code class="language-bash">kubectl apply -f nginx.yaml
</code></pre><p><strong>Tại sao Declarative tốt hơn:</strong></p><ul><li>✅ Infrastructure as Code</li><li>✅ Version control friendly</li><li>✅ Idempotent (chạy nhiều lần = kết quả giống nhau)</li><li>✅ Self-healing</li><li>✅ Easy rollback</li></ul><h4 id="62-desired-state-vs-current-state">6.2. Desired State vs Current State</h4><pre><code>┌──────────────────────────────────────────────┐
│  KUBERNETES RECONCILIATION LOOP              │
├──────────────────────────────────────────────┤
│                                              │
│  ┌────────────────┐      ┌────────────────┐│
│  │ DESIRED STATE  │      │ CURRENT STATE  ││
│  │                │      │                ││
│  │ replicas: 3    │  VS  │ replicas: 2    ││
│  │ image: v2      │      │ image: v1      ││
│  └────────────────┘      └────────────────┘│
│          │                       │          │
│          └───────────┬───────────┘          │
│                      ↓                      │
│            ┌──────────────────┐             │
│            │   CONTROLLER     │             │
│            │   Takes Action   │             │
│            └──────────────────┘             │
│                      ↓                      │
│            ┌──────────────────┐             │
│            │  Start 1 Pod     │             │
│            │  Update 2 Pods   │             │
│            └──────────────────┘             │
└──────────────────────────────────────────────┘
</code></pre><p><strong>Controllers liên tục:</strong></p><ol><li>Watch current state</li><li>Compare với desired state</li><li>Take actions để match</li><li>Repeat (reconciliation loop)</li></ol><h4 id="63-labels-v%C3%A0-selectors">6.3. Labels và Selectors</h4><p><strong>Labels</strong> = Key-value pairs để organize objects</p><pre><code class="language-yaml">metadata:
  labels:
    app: nginx
    tier: frontend
    environment: production
    version: v1.0
</code></pre><p><strong>Selectors</strong> = Query để tìm objects</p><pre><code class="language-yaml">selector:
  matchLabels:
    app: nginx
    tier: frontend
</code></pre><p><strong>Use cases:</strong></p><ul><li>Services tìm Pods</li><li>Deployments quản lý Pods</li><li>NetworkPolicies áp dụng rules</li><li>Queries và filtering</li></ul><hr><h3 id="ph%E1%BA%A7n-7-kubernetes-in-actionv%C3%AD-d%E1%BB%A5-th%E1%BB%B1c-t%E1%BA%BF">PHẦN 7: KUBERNETES IN ACTION - VÍ DỤ THỰC TẾ</h3><h4 id="scenario-e-commerce-website">Scenario: E-commerce Website</h4><p><strong>Requirements:</strong></p><ul><li>Frontend: React app (3 replicas)</li><li>Backend API: Node.js (5 replicas, auto-scale)</li><li>Database: PostgreSQL (1 instance, persistent)</li><li>Cache: Redis (3 replicas)</li><li>High availability</li><li>Zero-downtime updates</li><li>Auto-scaling based on traffic</li></ul><p><strong>Kubernetes giải quyết như thế nào:</strong></p><pre><code class="language-yaml"># Frontend Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
spec:
  replicas: 3
  selector:
    matchLabels:
      app: frontend
  template:
    metadata:
      labels:
        app: frontend
    spec:
      containers:
      - name: react-app
        image: myapp/frontend:v1.0
        ports:
        - containerPort: 3000
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "200m"

---
# Backend API with Auto-scaling
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend
spec:
  replicas: 5
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
      - name: api
        image: myapp/backend:v1.0
        ports:
        - containerPort: 8080

---
# Auto-scaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: backend-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: backend
  minReplicas: 5
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70

---
# Database with Persistent Storage
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: postgres
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
        image: postgres:14
        ports:
        - containerPort: 5432
        volumeMounts:
        - name: postgres-storage
          mountPath: /var/lib/postgresql/data
  volumeClaimTemplates:
  - metadata:
      name: postgres-storage
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 20Gi

---
# Load Balancer Service
apiVersion: v1
kind: Service
metadata:
  name: frontend-lb
spec:
  type: LoadBalancer
  selector:
    app: frontend
  ports:
  - port: 80
    targetPort: 3000
</code></pre><p><strong>Kubernetes tự động:</strong></p><ul><li>✅ Deploy 3 frontend + 5 backend + 1 DB</li><li>✅ Distribute across nodes</li><li>✅ Restart nếu crash</li><li>✅ Scale backend từ 5→20 khi traffic tăng</li><li>✅ Load balance requests</li><li>✅ Persistent data cho database</li><li>✅ Rolling update không downtime</li></ul><hr><h2 id="%F0%9F%92%A1-key-takeaways">💡 KEY TAKEAWAYS</h2><h3 id="%C4%91i%E1%BB%83m-quan-tr%E1%BB%8Dng-c%E1%BA%A7n-nh%E1%BB%9B">Điểm quan trọng cần nhớ:</h3><ol><li><strong>Container Orchestration giải quyết vấn đề scale và manage containers</strong><ul><li>Auto-scaling, self-healing, load balancing</li><li>Service discovery, rolling updates</li></ul></li><li><strong>Kubernetes là industry standard</strong><ul><li>Production-proven từ Google</li><li>Largest community</li><li>Vendor agnostic</li></ul></li><li><strong>K8s Architecture có 2 phần chính:</strong><ul><li>Control Plane: API Server, etcd, Scheduler, Controllers</li><li>Worker Nodes: kubelet, kube-proxy, Container Runtime</li></ul></li><li><strong>Declarative &gt; Imperative</strong><ul><li>Khai báo desired state</li><li>K8s tự động reconcile</li></ul></li><li><strong>Rich Ecosystem</strong><ul><li>CNCF landscape</li><li>Tools cho mọi needs</li><li>Managed services available</li></ul></li></ol><hr><hr><h2 id="%F0%9F%8E%AF-b%C3%A0i-t%E1%BA%ADp">🎯 BÀI TẬP</h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-research-v%C3%A0-so-s%C3%A1nh">Bài tập 1: Research và So sánh</h3><p>Tìm hiểu và viết so sánh chi tiết (200-300 từ) giữa:</p><ul><li>Kubernetes</li><li>Docker Swarm</li><li>Amazon ECS</li></ul><p>Tập trung vào: ease of use, scalability, ecosystem, cost.</p><h3 id="b%C3%A0i-t%E1%BA%ADp-2-mindmap">Bài tập 2: Mindmap</h3><p>Vẽ mindmap (có thể dùng tool hoặc tay) về:</p><ul><li>Kubernetes Architecture</li><li>Bao gồm tất cả components</li><li>Mô tả vai trò mỗi component</li></ul><h3 id="b%C3%A0i-t%E1%BA%ADp-3-use-case-analysis">Bài tập 3: Use Case Analysis</h3><p>Chọn 1 application bạn đang làm việc hoặc biết:</p><ul><li>Mô tả architecture hiện tại</li><li>Vẽ diagram nếu deploy lên K8s</li><li>List benefits và challenges</li></ul><h3 id="b%C3%A0i-t%E1%BA%ADp-4-video-learning">Bài tập 4: Video Learning</h3><p>Xem video "Kubernetes in 100 seconds" và "Kubernetes Explained in 15 minutes"</p><ul><li>Tóm tắt 5 điểm chính</li><li>Note những điểm chưa hiểu để tìm hiểu thêm</li></ul><hr><h2 id="%F0%9F%93%96-t%C3%A0i-li%E1%BB%87u-tham-kh%E1%BA%A3o">📖 TÀI LIỆU THAM KHẢO</h2><h3 id="b%C3%A0i-vi%E1%BA%BFt">Bài viết</h3><ul><li><a href="https://kubernetes.io/docs/concepts/">Kubernetes Official Docs - Concepts</a></li><li><a href="https://www.cncf.io/projects/kubernetes/">CNCF Kubernetes Overview</a></li><li><a href="https://www.cncf.io/phippy/">The Illustrated Children's Guide to Kubernetes</a></li></ul><h3 id="videos">Videos</h3><ul><li><a href="https://www.youtube.com/watch?v=PH-2FfFD2PU">Kubernetes in 5 minutes</a></li><li><a href="https://www.youtube.com/watch?v=PziYflu8cB8">Kubernetes explained in 100 seconds</a></li></ul><h3 id="interactive">Interactive</h3><ul><li><a href="https://labs.play-with-k8s.com/">Play with Kubernetes</a></li><li><a href="https://www.katacoda.com/courses/kubernetes">Katacoda Kubernetes Scenarios</a></li></ul><hr><h2 id="%E2%8F%AD%EF%B8%8F-b%C3%A0i-ti%E1%BA%BFp-theo">⏭️ BÀI TIẾP THEO</h2><p><strong>Bài 2: Cài đặt và Cấu hình Kubernetes</strong></p><p>Trong bài tiếp theo, chúng ta sẽ:</p><ul><li>Cài đặt Minikube và kubectl</li><li>Khởi động cluster đầu tiên</li><li>Explore Kubernetes dashboard</li><li>Chạy các lệnh kubectl cơ bản</li><li>Hiểu về kubeconfig</li></ul><p><strong>Chuẩn bị:</strong></p><ul><li>Máy tính với ít nhất 4GB RAM</li><li>Cài đặt Docker</li><li>Cài đặt VirtualBox hoặc VMware</li></ul>
