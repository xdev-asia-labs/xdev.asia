---
id: 019f0b20-a701-7001-e001-f2b8f9000701
title: 'Bài 22: Infrastructure & DevOps — Kubernetes, CI/CD & Multi-region'
slug: bai-22-infrastructure-devops-kubernetes
description: >-
  Production infrastructure cho Fashion POD — Kubernetes cluster design,
  CI/CD GitOps, multi-region deployment, secrets management,
  IaC và cost optimization.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 22
section_title: "Phần 7: Operations, Security & Scale"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
---

<h2 id="1-cluster-design"><strong>1. Kubernetes Cluster Design</strong></h2>

<pre><code class="language-text">Cluster
  ├─ Node Pool: General apps (API, web)
  ├─ Node Pool: Workers (rendering, queues)
  ├─ Node Pool: GPU (AI inference)
  └─ Node Pool: Data plane add-ons
</code></pre>

<ul>
<li>Namespace tách theo domain: `core`, `ai`, `ops`, `data`</li>
<li>HPA theo CPU/RAM/queue depth</li>
<li>PodDisruptionBudget cho services critical</li>
</ul>

<h2 id="2-cicd-gitops"><strong>2. CI/CD + GitOps</strong></h2>

<pre><code class="language-text">Git push
  -> CI (test/lint/build/security scan)
  -> Build image + SBOM
  -> Push registry
  -> Update manifest repo
  -> ArgoCD sync to cluster
  -> Progressive rollout (canary)
</code></pre>

<pre><code class="language-typescript">// Example deployment strategy
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 25%
    maxUnavailable: 0
</code></pre>

<h2 id="3-secrets-iac"><strong>3. Secrets & IaC</strong></h2>

<ul>
<li>Secrets: Vault/External Secrets Operator</li>
<li>IaC: Terraform modules cho network, cluster, DB, CDN</li>
<li>Policy as code: OPA/Gatekeeper</li>
</ul>

<h2 id="4-multi-region"><strong>4. Multi-region Deployment</strong></h2>

<table>
<thead>
<tr><th>Region</th><th>Vai trò</th></tr>
</thead>
<tbody>
<tr><td>US</td><td>Primary traffic + AI inference</td></tr>
<tr><td>EU</td><td>Data residency + low latency EU</td></tr>
<tr><td>APAC</td><td>Regional storefront + async workers</td></tr>
</tbody>
</table>

<pre><code class="language-text">Routing: Geo DNS + health checks
Data: primary region + read replicas + async replication
Failover: RTO < 30 min, RPO < 5 min
</code></pre>

<h2 id="5-cost-optimization"><strong>5. Cost Optimization</strong></h2>

<ul>
<li>Spot instances cho batch workers</li>
<li>Scale-to-zero với jobs không liên tục</li>
<li>Reserved capacity cho workload ổn định</li>
<li>Image optimization + CDN offload để giảm egress</li>
</ul>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>

<ul>
<li><p><strong>Cluster phân tầng</strong> giúp tối ưu hiệu năng và chi phí</p></li>
<li><p><strong>GitOps</strong> tăng tính kiểm soát và khả năng rollback</p></li>
<li><p><strong>Multi-region</strong> là yêu cầu quan trọng khi mở rộng toàn cầu</p></li>
<li><p><strong>Cost optimization</strong> cần thiết kế ngay từ đầu</p></li>
</ul>
