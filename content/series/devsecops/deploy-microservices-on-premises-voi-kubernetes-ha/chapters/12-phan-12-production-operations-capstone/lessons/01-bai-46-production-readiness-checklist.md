---
id: 019e1a00-aa01-7001-c001-k8sha001201
title: 'BÀI 46: PRODUCTION READINESS CHECKLIST'
slug: bai-46-production-readiness-checklist
description: >-
  Production readiness review toàn diện: infrastructure,
  security, observability, reliability, performance,
  compliance checklist, và go-live planning.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 46
section_title: 'Phần 12: Production Operations & Capstone Project'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6526" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6526)"/>

  <!-- Decorations -->
  <g>
    <circle cx="889" cy="237" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="678" cy="46" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="967" cy="115" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="756" cy="184" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="253" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="147" x2="1100" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="177" x2="1050" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1033.3730669589463,176 1033.3730669589463,218 997,239 960.6269330410536,218 960.6269330410536,176 997,155" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Bài 46</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 46: PRODUCTION READINESS CHECKLIST</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 12: Production Operations &amp; Capstone Project</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Production readiness review framework</li>
<li>✅ Infrastructure checklist</li>
<li>✅ Security hardening checklist</li>
<li>✅ Observability & reliability checklist</li>
<li>✅ Go-live planning và change management</li>
</ul>

<hr>

<h2 id="phan-1-infrastructure">PHẦN 1: INFRASTRUCTURE CHECKLIST</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>#</th><th>Category</th><th>Item</th><th>Status</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>K8s Cluster</td><td>3+ control plane nodes (HA)</td><td>☐</td></tr>
<tr><td>2</td><td>K8s Cluster</td><td>3+ worker nodes (anti-affinity)</td><td>☐</td></tr>
<tr><td>3</td><td>K8s Cluster</td><td>etcd backup scheduled (hourly)</td><td>☐</td></tr>
<tr><td>4</td><td>K8s Cluster</td><td>Kubernetes version current (N-1)</td><td>☐</td></tr>
<tr><td>5</td><td>Networking</td><td>CNI installed (Cilium) + NetworkPolicies</td><td>☐</td></tr>
<tr><td>6</td><td>Networking</td><td>MetalLB LoadBalancer configured</td><td>☐</td></tr>
<tr><td>7</td><td>Networking</td><td>Istio service mesh + mTLS</td><td>☐</td></tr>
<tr><td>8</td><td>Storage</td><td>Rook-Ceph cluster healthy (3+ OSDs)</td><td>☐</td></tr>
<tr><td>9</td><td>Storage</td><td>StorageClass default set</td><td>☐</td></tr>
<tr><td>10</td><td>Storage</td><td>VolumeSnapshot class configured</td><td>☐</td></tr>
<tr><td>11</td><td>Database</td><td>PostgreSQL HA (3 replicas, sync replication)</td><td>☐</td></tr>
<tr><td>12</td><td>Database</td><td>Automated backup + PITR tested</td><td>☐</td></tr>
<tr><td>13</td><td>Database</td><td>Connection pooling (PgBouncer)</td><td>☐</td></tr>
<tr><td>14</td><td>MQ</td><td>RabbitMQ/Kafka cluster HA</td><td>☐</td></tr>
<tr><td>15</td><td>Cache</td><td>Redis Sentinel/Cluster HA</td><td>☐</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-security">PHẦN 2: SECURITY CHECKLIST</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>#</th><th>Item</th><th>Status</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>RBAC: No cluster-admin for applications</td><td>☐</td></tr>
<tr><td>2</td><td>Pod Security Standards: Restricted enforced</td><td>☐</td></tr>
<tr><td>3</td><td>ServiceAccount: Auto-mount disabled</td><td>☐</td></tr>
<tr><td>4</td><td>Secrets: Stored in Vault (not plain K8s secrets)</td><td>☐</td></tr>
<tr><td>5</td><td>Network Policies: Default deny-all per namespace</td><td>☐</td></tr>
<tr><td>6</td><td>Kyverno: Validation policies enforced</td><td>☐</td></tr>
<tr><td>7</td><td>Falco: Runtime security monitoring active</td><td>☐</td></tr>
<tr><td>8</td><td>Harbor: Images scanned, no critical CVEs</td><td>☐</td></tr>
<tr><td>9</td><td>Image signing: cosign verification enabled</td><td>☐</td></tr>
<tr><td>10</td><td>Audit logging: Enabled, forwarded to Loki</td><td>☐</td></tr>
<tr><td>11</td><td>etcd encryption at rest enabled</td><td>☐</td></tr>
<tr><td>12</td><td>TLS everywhere (Istio mTLS + ingress TLS)</td><td>☐</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-3-observability">PHẦN 3: OBSERVABILITY CHECKLIST</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>#</th><th>Item</th><th>Status</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Prometheus: Metrics collection for all services</td><td>☐</td></tr>
<tr><td>2</td><td>Loki: Centralized logging with structured JSON</td><td>☐</td></tr>
<tr><td>3</td><td>Tempo: Distributed tracing with OTel</td><td>☐</td></tr>
<tr><td>4</td><td>Grafana: 3-level dashboards (platform → service → request)</td><td>☐</td></tr>
<tr><td>5</td><td>Correlation: Trace-Log-Metric linking configured</td><td>☐</td></tr>
<tr><td>6</td><td>SLOs defined: Availability + Latency per service</td><td>☐</td></tr>
<tr><td>7</td><td>Alerting: Multi-burn-rate SLO alerts</td><td>☐</td></tr>
<tr><td>8</td><td>Alert routing: Critical → PagerDuty, Warning → Slack</td><td>☐</td></tr>
<tr><td>9</td><td>On-call rotation configured</td><td>☐</td></tr>
<tr><td>10</td><td>Runbooks linked to alerts</td><td>☐</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-4-reliability">PHẦN 4: RELIABILITY CHECKLIST</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>#</th><th>Item</th><th>Status</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>HPA configured for stateless services</td><td>☐</td></tr>
<tr><td>2</td><td>PodDisruptionBudget for all critical workloads</td><td>☐</td></tr>
<tr><td>3</td><td>Liveness + readiness probes on all containers</td><td>☐</td></tr>
<tr><td>4</td><td>Resource requests + limits set on all pods</td><td>☐</td></tr>
<tr><td>5</td><td>Pod anti-affinity: spread across nodes</td><td>☐</td></tr>
<tr><td>6</td><td>Circuit breaker configured (Istio DestinationRule)</td><td>☐</td></tr>
<tr><td>7</td><td>Retry + timeout policies in VirtualService</td><td>☐</td></tr>
<tr><td>8</td><td>Velero backup tested (restore verified)</td><td>☐</td></tr>
<tr><td>9</td><td>DR runbook documented + tested</td><td>☐</td></tr>
<tr><td>10</td><td>Chaos engineering: GameDay completed</td><td>☐</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-5-go-live">PHẦN 5: GO-LIVE PLANNING</h2>

<pre><code>
Go-Live Timeline:

T-2 weeks: Feature freeze, final testing
T-1 week:  Performance testing, DR drill, security scan
T-3 days:  Staging deployment with production data clone
T-1 day:   Final review meeting, rollback plan confirmed
T-0:       Go-live (off-peak hours)

Go-Live Day:
 08:00  Pre-checks (all systems green)
 09:00  DNS cutover / traffic shift
 09:30  Smoke tests
 10:00  Gradual traffic ramp (10% → 25% → 50% → 100%)
 12:00  Full traffic
 18:00  Post-launch review
 
Rollback Plan:
 - DNS revert to old infrastructure
 - Estimated rollback time: 5 minutes
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Checklist</strong>: Systematic review prevents "forgot to configure X"</li>
<li><strong>Categories</strong>: Infrastructure, Security, Observability, Reliability</li>
<li><strong>Go-live</strong>: Gradual traffic ramp, always have rollback plan</li>
<li><strong>Review</strong>: Peer review checklist before production</li>
<li><strong>Living document</strong>: Update checklist after each incident</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Readiness Review</h3>
<ul>
<li>Run through all checklists for your cluster</li>
<li>Document gaps and create remediation plan</li>
<li>Perform peer review with teammate</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 47: Day-2 Operations & Maintenance</strong>, chúng ta sẽ học vận hành production hàng ngày.</p>
