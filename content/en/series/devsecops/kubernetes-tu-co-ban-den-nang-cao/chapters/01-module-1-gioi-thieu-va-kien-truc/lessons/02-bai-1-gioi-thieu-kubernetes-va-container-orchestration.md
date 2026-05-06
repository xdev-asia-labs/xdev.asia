---
id: 019c9617-fc21-7282-8fc3-c1147ba22e10
title: 'LESSON 1: INTRODUCTION TO KUBERNETES AND CONTAINER ORCHESTRATION'
slug: bai-1-gioi-thieu-kubernetes-va-container-orchestration
description: The first lesson introduces Container Orchestration and Kubernetes - the foundation for understanding why K8s has become the industry standard. Learn the history, basic architecture, and comparisons with similar technologies.
duration_minutes: 160
is_free: true
video_url: null
sort_order: 1
section_title: 'Module 1: Introduction & Kubernetes Architecture'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'KUBERNETES: FROM BASIC TO ADVANCED'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6562" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6562)"/>

  <!-- Decorations -->
  <g>
    <circle cx="680" cy="250" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="840" cy="50" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="920" cy="210" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="90" x2="1100" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="120" x2="1050" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="961.650635094611,127.5 961.650635094611,152.5 940,165 918.349364905389,152.5 918.349364905389,127.5 940,115" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 1: INTRODUCTION TO KUBERNETES AND CONTAINER</tspan>
      <tspan x="60" dy="42">ORCHESTRATION</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: FROM BASIC TO ADVANCED</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Module 1: Introduction &amp; Kubernetes Architecture</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="%F0%9F%8E%AF-m%E1%BB%A5c-ti%C3%AAu-b%C3%A0i-h%E1%BB%8Dc">🎯 LESSON OBJECTIVE_</h2><p>After completing this lesson, you will:</p><ul><li>✅ Understand what Container Orchestration is and why it is needed_</li><li>✅ Understand the role and The importance of Kubernetes</li><li>✅ Compare Kubernetes with other tools</li><li>✅ Understand the overall architecture of Kubernetes</li><li>✅ Know about the Kubernetes ecosystem and its community co</li></ul><h3 id="ph%E1%BA%A7n-1-container-orchestration-l%C3%A0-g%C3%AC">PART 1: WHAT IS CONTAINER ORCHESTRATION?</h3><h4 id="11-v%E1%BA%A5n-%C4%91%E1%BB%81-v%E1%BB%9Bi-containers-khi-scale">1.1. Problem with Containers when Scale</h4><p>Imagine you have a simple web application running in a Docker container:</p><pre><code class="language-bash">docker run -d -p 8080:80 my-web-app
</code></pre><p><strong>Everything worked fine... until when:</strong></p><p>❌ <strong>Problem 1: Traffic suddenly increases</strong></p><ul><li>1 container is not enough to handle__HTMLTAG_99___<li>_Need to scale up 10, 20, 100 containers_</li><li>How to distribute traffic?</li></ul><p>❌ <strong>Problem 2: Container is broken crash</strong></p><ul><li>Who will detect and restart?</li><li>How to ensure 99.9% uptime?</li></ul><p>❌ <strong>Problem 3: Multiple servers</strong></p><ul><li>How to deploy containers to multiple servers?</li><li>How to manage resources (CPU, RAM) effectively result?</li></ul><p>❌ <strong>Problem 4: Update application</strong></p><ul><li>How to roll update downtime?</li><li>Rollback if there is an error?</li></ul><p>❌ <strong>Issue 5: Service Discovery</strong></p><ul><li>Containers with dynamic IP</li><li>How do services find and call each other?</li></ul><p>❌ <strong>Issue 6: Configuration Management</strong></p><ul><li>Managing secrets, configs for hundreds of containers_</li><li>Other dev, staging, production environments each</li></ul><h4 id="12-container-orchestration-l%C3%A0-gi%E1%BA%A3i-ph%C3%A1p">1.2. Container Orchestration is the solution</h4><p><strong>Container Orchestration</strong> is the automation of deployment, management, scaling, and networking of containers.</p><p><strong>Orchestrator does What:</strong></p><pre><code>┌─────────────────────────────────────────────────────────┐
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
</code></pre><h4 id="13-v%C3%AD-d%E1%BB%A5-th%E1%BB%B1c-t%E1%BA%BF">1.3. Real life example_</h4><p><strong>Before Orchestration:</strong></p><pre><code class="language-bash"># Trên server 1
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
</code></pre><p><strong>With Container Orchestration:</strong></p><pre><code class="language-yaml"># Khai báo mong muốn
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
</code></pre><p>AutomaticOrchestrator:</p><ul><li>Deploy 5 containers to different servers_</li><li>_Monitor and restart if crash</li><li>Load balance traffic</li><li>_Scale when needed</li></ul><hr><h3 id="ph%E1%BA%A7n-2-t%E1%BA%A1i-sao-c%E1%BA%A7n-kubernetes">PART 2: WHY NEED KUBERNETES?</h3><h4 id="21-b%E1%BB%91i-c%E1%BA%A3nh-ra-%C4%91%E1%BB%9Di">2.1. Background</h4><p><strong>Google's Borg (2003-2015)</strong></p><ul><li>Google runs billions of containers every day week</li><li>Borg: internal system to manage containers</li><li>15+ years of experience operating large-scale systems</li></ul><p><strong>Kubernetes was born (2014)_</strong></p><ul><li>Google open-source Kubernetes (K8s)_</li><li>Based on experience from Borg and Omega_</li><li>Designed for cloud-native applications</li><li>Donate for CNCF (Cloud Native Computing Foundation)</li></ul><h4 id="22-t%E1%BA%A1i-sao-kubernetes-th%E1%BA%AFng-th%E1%BA%BF">2.2. Why does Kubernetes prevail?</h4><p><strong>1. Production-Proven</strong></p><pre><code>Google → 15+ năm kinh nghiệm
         ↓
      Kubernetes → Battle-tested tại Google
         ↓
    Cộng đồng → Hàng nghìn companies đóng góp
</code></pre><p><strong>2. Vendor Agnostic</strong></p><ul><li>Runs everywhere: on-premise, cloud, hybrid_</li><li>Not locked-in with 1 cloud provider_</li><li>Portable between AWS, GCP, Azure, bare metal_</li></ul><p><strong>3. Extensible and Flexible</strong></p><ul><li>Plugin architecture_</li><li>Custom Resource Definitions (CRDs)</li><li>Operator pattern</li><li>Rich ecosystem</li></ul><p><strong>4. Large Community_</strong></p><ul><li>100,000+ contributors</li><li>Millions of users</li><li>Mature tooling and documentation</li><li>Active development</li></ul><p><strong>5. Industry Standard</strong></p><pre><code>CNCF Graduated Project
    ↓
Được tích hợp bởi:
- AWS (EKS)
- Google (GKE)
- Azure (AKS)
- IBM (IKS)
- DigitalOcean
- và nhiều vendor khác
</code></pre><h4 id="23-con-s%E1%BB%91-%E1%BA%A5n-t%C6%B0%E1%BB%A3ng">2.3. Impressive number</h4><p>📊 <strong>Kubernetes Adoption (2024)</strong></p><ul><li>96% of organizations are using or reviewing K8s</li><li>5.6 million developers use K8s</li><li>Top 2 most wanted platform (Stack Overflow)</li><li>89% of containers run on K8s</li></ul><p>🚀 <strong>Use Cases</strong></p><ul><li>Microservices architecture</li><li>CI/CD pipelines</li><li>Machine Learning workloads</li><li>Big Data processing_</li><li>Hybrid/Multi-cloud deployments_</li></ul><hr><h3 id="ph%E1%BA%A7n-3-so-s%C3%A1nh-kubernetes-v%E1%BB%9Bi-c%C3%A1c-c%C3%B4ng-c%E1%BB%A5-kh%C3%A1c">PART 3: COMPARING KUBERNETES WITH OTHER TOOLS_</h3><h4 id="31-kubernetes-vs-docker-swarm">3.1. Kubernetes vs Docker Swarm</h4>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Criteria__HTMLTAG_310___
<th>Kubernetes</th>
<th>Docker Swarm</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Complexity</strong></td>
<td>High, many concepts__HTMLTAG_324___
<td>Simple, easy to learn</td>
</tr>
<tr>
<td><strong>Setup</strong></td>
<td>More complex</td>
<td>Very simple__HTMLTAG_336___
</tr>
<tr>
<td><strong>Scalability</strong></td>
<td>Very good (1000+ nodes)</td>
<td>Good (100+ nodes)</td>
</tr>
<tr>
<td><strong>Ecosystem</strong></td>
<td>Very wide</td>
<td>Restrictions</td>
</tr>
<tr>
<td><strong>Auto-scaling</strong></td>
<td>Native HPA, VPA</td>
<td>Limited</td>
</tr>
<tr>
<td><strong>Load Balancing_</strong></td>
<td>Advanced (Ingress)</td>
<td>Basic</td>
</tr>
<tr>
<td><strong>Community</strong></td>
<td>Huge</td>
<td>Much smaller</td>
</tr>
<tr>
<td><strong>Enterprise Support</strong></td>
<td>All cloud providers</td>
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
<td>Yes (but rarely used)</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
<p><strong>Conclusion:</strong> Docker Swarm is easier but K8s is more powerful and is the industry standard.</p><h4 id="32-kubernetes-vs-apache-mesos">3.2. Kubernetes vs Apache Mesos</h4>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Criteria</th>
<th>Kubernetes</th>
<th>Apache Mesos</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Focus</strong></td>
<td>Container orchestration__HTMLTAG_446___
<td>General purpose cluster manager</td>
</tr>
<tr>
<td><strong>Architecture</strong></td>
<td>Monolithic</td>
<td>Two-level (Mesos + Marathon)</td>
</tr>
<tr>
<td><strong>Adoption</strong></td>
<td>Very high</td>
<td>Average</td>
</tr>
<tr>
<td><strong>Use Cases</strong></td>
<td>Containers,microservices</td>
<td>Containers, Big Data, analytics</td>
</tr>
<tr>
<td><strong>Complexity</strong></td>
<td>High</td>
<td>Very high</td>
</tr>
<tr>
<td><strong>Container Support</strong></td>
<td>Native</td>
<td>Via Marathon/DC/OS</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
<p><strong>Conclusion:</strong> Mesos is more flexible but more complex. K8s focuses on containers.</p><h4 id="33-kubernetes-vs-nomad">3.3. Kubernetes vs Nomad</h4>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Criteria</th>
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
<p><strong>Conclusion:</strong>Nomad is simpler and has more diverse workloads, but the ecosystem is smaller.</p><h4 id="34-khi-n%C3%A0o-d%C3%B9ng-g%C3%AC">3.4. When to use what?</h4><p><strong>Choose Kubernetes when:</strong></p><ul><li>✅ Important production workloads_</li><li>✅ Need to scale large (100+ services)</li><li>✅ Team with DevOps experience</li><li>✅ Need rich ecosystem</li><li>✅ Multi-cloud strategy</li></ul><p><strong>Choose Docker Swarm when:</strong></p><ul><li>✅ Small team, single project simple</li><li>✅ Need to deploy quickly</li><li>✅ Familiar with Docker CLI</li><li>✅ No need to scale too much large</li></ul><p><strong>Choose Nomad when:</strong></p><ul><li>✅ Diverse Workloads (not just containers)</li><li>✅ Used HashiCorp stack</li><li>✅ Need simplicity</li><li>✅ Edge computing_</li></ul><hr><h3 id="ph%E1%BA%A7n-4-ki%E1%BA%BFn-tr%C3%BAc-kubernetes-t%E1%BB%95ng-quan">PART 4: KUBERNETES ARCHITECTURE OVERVIEW_</h3><h4 id="41-kubernetes-cluster">4.1. Kubernetes Cluster</h4><pre><code>┌────────────────────────────────────────────────────────────┐
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
</code></pre><h4 id="42-control-plane-components-master">4.2. Control Plane Components (Master)</h4><p><strong>1. API Server</strong> 🚪</p><ul><li>Kubernetes' "Gateway"_</li><li>Handle all REST requests_</li><li>Authentication &amp; Authorization_</li><li>Validate and process requests</li><li>Frontend for etcd_</li></ul><pre><code>kubectl → API Server → etcd
  ↑          ↓
  └──── Response
</code></pre><p><strong>2. etcd</strong> 💾</p><ul><li>Key-value database</li><li>Storing the entire cluster state_</li><li>Source of truth</li><li>Highly available (HA setup)</li><li>Only API Server talks to etcd_</li></ul><p><strong>3. Scheduler</strong> 📅</p><ul><li>Decide which Node the Pod runs on</li><li>Consider: resources, constraints, affinity_</li><li>Do not deploy (kubelet) do)</li></ul><pre><code>Flow:
1. User tạo Pod
2. Scheduler xem Pods chưa assign
3. Chọn Node tốt nhất
4. Update Pod spec với nodeName
</code></pre><p><strong>4. Controller Manager</strong> 🎮</p><ul><li>Run multiple controllers_</li><li>_Monitor cluster state_</li><li>Make changes to achieve desired state</li></ul><p><strong>Important controllers:</strong></p><ul><li><strong>Node Controller</strong>: Monitor nodes health</li><li><strong>Replication Controller</strong>: Make sure Pods number is correct</li><li><strong>Endpoints Controller</strong>: Populate Endpoints objects</li><li><strong>ServiceAccount Controller</strong>: Create default ServiceAccounts_</li></ul><h4 id="43-worker-node-components">4.3. Worker Node Components</h4><p><strong>1. kubelet</strong> 👷_</p><ul><li>Agent runs on each node_</li><li>Get Pod specs from API Server_</li><li>Ensure containers are running run_</li><li>Report node/pod status to API Server</li><li>_Execute liveness/readiness probes_</li></ul><p><strong>2. kube-proxy_</strong> 🔀_</p><ul><li>Network proxy per node_</li><li>Maintain network rules_</li><li>Implement Kubernetes Service abstraction</li><li>Load balancing for Services</li><li>Modes: iptables, IPVS, userspace_</li></ul><p><strong>3. Container Runtime</strong> 🐳</p><ul><li>Software running containers</li><li>_Implement Kubernetes CRI (Container Runtime Interface)</li><li>Popular:<ul><li>containerd (recommended)</li><li>CRI-O</li><li>Docker (deprecated in K8s 1.24+)</li></ul></li></ul><h4 id="44-add-ons-optional-but-important">4.4. Add-ons (Optional but Important)</h4><p><strong>DNS</strong> (CoreDNS)</p><ul><li>Service discovery</li><li>Resolve service names to IPs</li><li>Each Service has a DNS name</li></ul><p><strong>Dashboard</strong></p><ul><li>Web UI to cluster management_</li><li>Visualize resources</li></ul><p><strong>Monitoring_</strong> (Metrics Server)_</p><ul><li>Collect resource metrics</li><li>CPU, Memory usage_</li><li>Enable HPA (Horizontal Pod Autoscaler)</li></ul><p><strong>Logging</strong></p><ul><li>EFK Stack (Elasticsearch, Fluentd, Kibana)</li><li>Centralized logging</li></ul><hr><h3 id="ph%E1%BA%A7n-5-kubernetes-ecosystem">PART 5: KUBERNETES ECOSYSTEM</h3><h4 id="51-cncf-landscape">5.1. CNCF Landscape</h4><p>Kubernetes is part of the CNCF ecosystem:</p><pre><code>┌─────────────────────────────────────────────┐
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
</code></pre><h4 id="52-core-tools">5.2. Core Tools</h4><p><strong>Package Management</strong></p><ul><li><strong>Helm</strong>: Package manager for K8s</li><li><strong>Kustomize</strong>: Configuration management</li></ul><p><strong>GitOps</strong></p><ul><li><strong>ArgoCD_</strong>: Declarative GitOps CD</li><li><strong>Flux</strong>: GitOps toolkit_</li></ul><p><strong>Service Mesh</strong></p><ul><li><strong>Istio</strong>: Complete service mesh_</li><li><strong>_Linkerd</strong>: Simple, lightweight</li></ul><p><strong>Monitoring &amp; Observability_</strong></p><ul><li><strong>Prometheus_</strong>: Metrics collection</li><li><strong>Grafana</strong>: Visualization</li><li><strong>Jaeger</strong>: Distributed tracing</li></ul><p><strong>Security</strong></p><ul><li><strong>Falco_</strong>: Runtime security</li><li><strong>OPA</strong>: Policy engine</li><li><strong>Trivy</strong>: Vulnerability scanner</li></ul><h4 id="53-managed-kubernetes-services">5.3. Managed Kubernetes Services</h4><p><strong>Major Cloud Providers:</strong></p><ul><li><strong>_AWS</strong>: EKS (Elastic Kubernetes Service)</li><li><strong>Google Cloud</strong>: GKE (Google Kubernetes Engine)</li><li><strong>Azure</strong>: AKS (Azure Kubernetes Service)</li><li><strong>IBM Cloud</strong>: IKS</li><li><strong>DigitalOcean</strong>: DOKS</li><li><strong>Linode</strong>: LKE</li></ul><p><strong>Loi Useful:_</strong></p><ul><li>Control plane managed</li><li>Automatic upgrades_</li><li>Integrated with cloud services</li><li>Easy setup_</li><li>Cost: only paid worker nodes_</li></ul><hr><h3 id="ph%E1%BA%A7n-6-kubernetes-concepts-quan-tr%E1%BB%8Dng">PART 6: KUBERNETES CONCEPTS OFFICER REPORT</h3><h4 id="61-declarative-vs-imperative">6.1. Declarative vs Imperative</h4><p><strong>Imperative (Old way):</strong></p><pre><code class="language-bash"># Nói K8s phải làm GÌ và NHƯ THẾ NÀO
kubectl run nginx --image=nginx
kubectl expose deployment nginx --port=80
kubectl scale deployment nginx --replicas=3
</code></pre><p><strong>Declarative (How K8s):</strong></p><pre><code class="language-yaml"># Nói K8s muốn KẾT QUẢ gì
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
</code></pre><p><strong>Why Declarative is better:</strong></p><ul><li>✅ Infrastructure as Code</li><li>✅ Version control friendly</li><li>✅ Idempotent (run multiple times = same result)</li><li>✅ Self-healing</li><li>✅ Easy rollback</li></ul><h4 id="62-desired-state-vs-current-state">6.2. Desired State vs Current State</h4><pre><code>┌──────────────────────────────────────────────┐
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
</code></pre><p><strong>Controllers persistent:</strong></p><ol><li>Watch current state</li><li>Compare with desired state</li><li>Take actions to match</li><li>Repeat (reconciliation loop)</li></ol><h4 id="63-labels-v%C3%A0-selectors">6.3. Labels and Selectors</h4><p><strong>Labels</strong> = Key-value pairs to organize objects_</p><pre><code class="language-yaml">metadata:
  labels:
    app: nginx
    tier: frontend
    environment: production
    version: v1.0
</code></pre><p><strong>Selectors_</strong> = Query to find objects_</p><pre><code class="language-yaml">selector:
  matchLabels:
    app: nginx
    tier: frontend
</code></pre><p><strong>Use cases:</strong></p><ul><li>Services find Pods</li><li>Deployments manage Pods_</li><li>NetworkPolicies apply rules</li><li>Queries and filtering</li></ul><hr><h3 id="ph%E1%BA%A7n-7-kubernetes-in-actionv%C3%AD-d%E1%BB%A5-th%E1%BB%B1c-t%E1%BA%BF">PART 7: KUBERNETES IN ACTION - REAL EXAMPLES TE</h3><h4 id="scenario-e-commerce-website">Scenario: E-commerce Website</h4><p><strong>Requirements:</strong></p><ul><li>Frontend: React app (3 replicas)</li><li>Backend API: Node.js (5 replicas, auto-scale)</li><li>Database: PostgreSQL (1 instance, persistent)</li><li>Cache: Redis (3 replicas)</li><li>High availability</li><li>Zero-downtime updates</li><li>Auto-scaling based on traffic_</li></ul><p><strong>Kubernetes solves this Which:</strong></p><pre><code class="language-yaml"># Frontend Deployment
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
</code></pre><p><strong>Kubernetes automatic:</strong></p><ul><li>✅ Deploy 3 frontend + 5 backend + 1 DB</li><li>✅ Distribute across nodes</li><li>✅ Restart if crash</li><li>✅ Scale backend from 5→20 when traffic increase</li><li>✅ Load balance requests</li><li>✅ Persistent data for database</li><li>✅ Rolling update no downtime_</li></ul><hr><h2 id="%F0%9F%92%A1-key-takeaways">💡 KEY TAKEAWAYS_</h2><h3 id="%C4%91i%E1%BB%83m-quan-tr%E1%BB%8Dng-c%E1%BA%A7n-nh%E1%BB%9B">Important points to take remember:</h3><ol><li><strong>Container Orchestration solves the problem of scaling and managing containers_</strong><ul><li>Auto-scaling, self-healing, load balancing</li><li>Service discovery, rolling updates</li></ul></li><li><strong>Kubernetes is industry standard</strong><ul><li>Production-proven from Google</li><li>Largest community</li><li>Vendor agnostic</li></ul></li><li><strong>K8s Architecture has 2 main parts:_</strong><ul><li>_Control Plane: API Server, etcd, Scheduler, Controllers</li><li>Worker Nodes: kubelet, kube-proxy, Container Runtime</li></ul></li><li><strong>Declarative &gt; Imperative</strong><ul><li>Declares desired state</li><li>K8s automatically reconcile</li></ul></li><li><strong>Rich Ecosystem_</strong><ul><li>CNCF landscape</li><li>Tools for every need</li><li>Managed services available</li></ul></li></ol><hr><hr><h2 id="%F0%9F%8E%AF-b%C3%A0i-t%E1%BA%ADp">🎯 EXERCISE_</h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-research-v%C3%A0-so-s%C3%A1nh">Exercise 1: Research and Compare compare</h3><p>Learn and write a detailed comparison (200-300 words) between:_</p><ul><li>_Kubernetes</li><li>_Docker Swarm</li><li>Amazon ECS</li></ul><p>Focus on: ease of use, scalability, ecosystem, cost.</p><h3 id="b%C3%A0i-t%E1%BA%ADp-2-mindmap">Exercise 2: Mindmap</h3><p>Draw a mindmap (can use tool or hand) about:</p><ul><li>Kubernetes Architecture</li><li>Includes all components</li><li>Describe the role of each component</li></ul><h3 id="b%C3%A0i-t%E1%BA%ADp-3-use-case-analysis">Exercise 3: Use Case Analysis_</h3><p>Choose an application you are working on or know:</p><ul><li>Describe current architecture_</li><li>Draw a diagram if deployed to K8s</li><li>List of benefits and challenge</li></ul><h3 id="b%C3%A0i-t%E1%BA%ADp-4-video-learning">Exercise 4: Video Learning</h3><p>Watch the videos "Kubernetes in 100 seconds" and "Kubernetes Explained in 15 minutes"</p><ul><li>Summary of 5 main points</li><li>Note points you don't understand to learn more more_</li></ul><hr><h2 id="%F0%9F%93%96-t%C3%A0i-li%E1%BB%87u-tham-kh%E1%BA%A3o">📖 REFERENCES_</h2><h3 id="b%C3%A0i-vi%E1%BA%BFt">Articles write_</h3><ul><li><a href="https://kubernetes.io/docs/concepts/">Kubernetes Official Docs - Concepts_</a></li><li><a href="https://www.cncf.io/projects/kubernetes/">_CNCF Kubernetes Overview</a></li><li><a href="https://www.cncf.io/phippy/">The Illustrated Children's Guide to Kubernetes_</a></li></ul><h3 id="videos">Videos_</h3><ul><li><a href="https://www.youtube.com/watch?v=PH-2FfFD2PU">Kubernetes in 5 minutes</a></li><li><a href="https://www.youtube.com/watch?v=PziYflu8cB8">Kubernetes explained in 100 seconds_</a></li></ul><h3 id="interactive">Interactive_</h3><ul><li><a href="https://labs.play-with-k8s.com/">Play with Kubernetes_</a></li><li><a href="https://www.katacoda.com/courses/kubernetes">Katacoda Kubernetes Scenarios_</a></li></ul><hr><h2 id="%E2%8F%AD%EF%B8%8F-b%C3%A0i-ti%E1%BA%BFp-theo">⏭️ POST NEXT_</h2><p><strong>Lesson 2: Installing and Configuring Kubernetes</strong></p><p>In the next lesson, we will:</p><ul><li>Install Minikube and kubectl</li><li>Start the first cluster_</li><li>Explore Kubernetes dashboard_</li><li>Run basic kubectl commands_</li><li>Understanding kubeconfig_</li></ul><p><strong>Standard device:</strong></p><ul><li>Computer with at least 4GB RAM_</li><li>Install Docker_</li><li>Install VirtualBox or VMware</li></ul>