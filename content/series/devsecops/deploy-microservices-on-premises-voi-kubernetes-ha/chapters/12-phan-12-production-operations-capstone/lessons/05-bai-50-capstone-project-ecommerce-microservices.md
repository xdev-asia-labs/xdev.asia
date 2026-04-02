---
id: 019e1a00-aa01-7001-c001-k8sha001205
title: 'BÀI 50: CAPSTONE PROJECT — E-COMMERCE MICROSERVICES PLATFORM'
slug: bai-50-capstone-project-ecommerce-microservices
description: >-
  Capstone project tổng hợp: thiết kế, deploy và vận hành
  hệ thống e-commerce microservices hoàn chỉnh trên K8s HA on-premises,
  áp dụng toàn bộ kiến thức từ 49 bài trước.
duration_minutes: 480
is_free: true
video_url: null
sort_order: 50
section_title: 'Phần 12: Production Operations & Capstone Project'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Thiết kế kiến trúc e-commerce microservices</li>
<li>✅ Deploy toàn bộ platform trên K8s HA on-premises</li>
<li>✅ Áp dụng tất cả best practices từ 49 bài trước</li>
<li>✅ Production-ready: security, observability, DR</li>
<li>✅ Performance testing và go-live</li>
</ul>

<hr>

<h2 id="phan-1-architecture">PHẦN 1: SYSTEM ARCHITECTURE</h2>

<pre><code>
E-Commerce Microservices Architecture:

                    ┌─────────────────┐
                    │   Istio Gateway  │
                    │   (TLS + CORS)   │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
        ┌─────▼─────┐ ┌─────▼─────┐ ┌──────▼────┐
        │   User    │ │  Product  │ │   Order   │
        │  Service  │ │  Service  │ │  Service  │
        └─────┬─────┘ └─────┬─────┘ └─────┬────┘
              │              │              │
              │         ┌────▼────┐    ┌────▼──────┐
              │         │Inventory│    │  Payment  │
              │         │ Service │    │  Service  │
              │         └─────────┘    └────┬──────┘
              │                             │
         ┌────▼────────────────────────┐    │
         │     Notification Service    │◄───┘
         │  (email, SMS, push)         │
         └─────────────────────────────┘

Data Stores:
┌──────────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐
│ PostgreSQL   │ │  Redis   │ │ RabbitMQ │ │ Kafka  │
│ (HA Cluster) │ │(Sentinel)│ │(Quorum Q)│ │(Events)│
└──────────────┘ └──────────┘ └──────────┘ └────────┘

Platform:
┌──────────────────────────────────────────────────────┐
│  K8s HA (3 masters + 4 workers)                      │
│  Rook-Ceph (distributed storage)                     │
│  Istio (service mesh + mTLS)                         │
│  ArgoCD (GitOps deployment)                          │
│  Prometheus + Loki + Tempo (observability)            │
│  Kyverno + Falco (security)                          │
│  Velero (backup/DR)                                  │
└──────────────────────────────────────────────────────┘
</code></pre>

<hr>

<h2 id="phan-2-services">PHẦN 2: MICROSERVICES DESIGN</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>Service</th><th>Language</th><th>Database</th><th>Async Events</th></tr>
</thead>
<tbody>
<tr><td>User Service</td><td>Go</td><td>PostgreSQL (users DB)</td><td>user.created, user.updated</td></tr>
<tr><td>Product Service</td><td>Go</td><td>PostgreSQL (products DB)</td><td>product.updated</td></tr>
<tr><td>Inventory Service</td><td>Go</td><td>PostgreSQL (inventory DB)</td><td>stock.reserved, stock.released</td></tr>
<tr><td>Order Service</td><td>Go</td><td>PostgreSQL (orders DB)</td><td>order.created, order.completed</td></tr>
<tr><td>Payment Service</td><td>Go</td><td>PostgreSQL (payments DB)</td><td>payment.processed, payment.failed</td></tr>
<tr><td>Notification Service</td><td>Node.js</td><td>Redis (queue)</td><td>Consumes order/payment events</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<pre><code class="language-yaml"># GitOps repo structure:
ecommerce-gitops/
├── apps/
│   ├── user-service/
│   │   ├── base/
│   │   │   ├── deployment.yaml
│   │   │   ├── service.yaml
│   │   │   ├── hpa.yaml
│   │   │   ├── pdb.yaml
│   │   │   └── kustomization.yaml
│   │   └── overlays/
│   │       ├── staging/
│   │       └── production/
│   ├── product-service/
│   ├── order-service/
│   ├── payment-service/
│   ├── inventory-service/
│   └── notification-service/
├── infrastructure/
│   ├── namespaces/
│   ├── networking/
│   │   ├── istio-gateway.yaml
│   │   ├── virtualservices.yaml
│   │   └── network-policies.yaml
│   ├── databases/
│   │   ├── postgresql-cluster.yaml
│   │   ├── redis-sentinel.yaml
│   │   ├── rabbitmq-cluster.yaml
│   │   └── kafka-cluster.yaml
│   └── observability/
│       ├── servicemonitors.yaml
│       ├── prometheusrules.yaml
│       └── grafana-dashboards.yaml
├── argocd/
│   ├── applicationset.yaml
│   └── appproject.yaml
└── helmfile.yaml
</code></pre>

<hr>

<h2 id="phan-3-deployment">PHẦN 3: DEPLOYMENT STEPS</h2>

<pre><code class="language-bash"># Step 1: Prepare infrastructure (Bài 1-4)
# ✅ 7 nodes provisioned, OS hardened, HAProxy + keepalived

# Step 2: K8s HA cluster (Bài 5-10)
# ✅ 3 master + 4 worker, Cilium CNI, MetalLB, etcd backup

# Step 3: Storage (Bài 11-15)
# ✅ Rook-Ceph cluster, StorageClasses (block + filesystem)

# Step 4: Databases (Bài 16-23)
# ✅ PostgreSQL HA, Redis Sentinel, RabbitMQ cluster, Kafka

# Step 5: Service Mesh (Bài 24-27)
# ✅ Istio + Gateway, mTLS, AuthorizationPolicy

# Step 6: GitOps (Bài 28-31)
# ✅ ArgoCD, Helm charts, Vault secrets, CI/CD pipeline

# Step 7: Observability (Bài 32-35)
# ✅ Prometheus, Loki, Tempo, Grafana, SLO alerts

# Step 8: Security (Bài 36-39)
# ✅ RBAC, Kyverno, Falco, Harbor

# Step 9: Deploy services
kubectl apply -f argocd/applicationset.yaml
# ArgoCD auto-deploys all services from GitOps repo
</code></pre>

<pre><code class="language-yaml"># ArgoCD ApplicationSet (deploy all services):
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: ecommerce-services
  namespace: argocd
spec:
  generators:
    - git:
        repoURL: https://github.com/company/ecommerce-gitops
        revision: main
        directories:
          - path: apps/*
  template:
    metadata:
      name: '{{path.basename}}'
    spec:
      project: ecommerce
      source:
        repoURL: https://github.com/company/ecommerce-gitops
        targetRevision: main
        path: '{{path}}/overlays/production'
      destination:
        server: https://kubernetes.default.svc
        namespace: production
      syncPolicy:
        automated:
          prune: true
          selfHeal: true
        syncOptions:
          - CreateNamespace=true
</code></pre>

<hr>

<h2 id="phan-4-testing">PHẦN 4: TESTING & VALIDATION</h2>

<pre><code class="language-bash"># Integration test flow:
# 1. Create user → 2. Get products → 3. Place order
#    → 4. Check inventory reserved → 5. Process payment
#    → 6. Verify notification sent

# Load test:
k6 run ecommerce-load-test.js
# Target: 500 orders/min, P99 < 1s, errors < 0.1%

# Chaos test:
# Round 1: Kill order-service pod (verify auto-recovery)
# Round 2: Simulate payment timeout (verify retry + DLQ)
# Round 3: Database failover (verify < 5s downtime)
# Round 4: Node failure (verify pod rescheduling)

# Security validation:
# - Kyverno: deploy privileged pod → blocked ✅
# - Falco: kubectl exec → alert fired ✅
# - Harbor: push image with critical CVE → scan detected ✅
# - NetworkPolicy: cross-namespace access → blocked ✅
</code></pre>

<hr>

<h2 id="phan-5-checklist">PHẦN 5: CAPSTONE EVALUATION CHECKLIST</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>#</th><th>Requirement</th><th>Points</th><th>Status</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>K8s HA cluster (3 masters, 4 workers)</td><td>10</td><td>☐</td></tr>
<tr><td>2</td><td>Rook-Ceph distributed storage</td><td>10</td><td>☐</td></tr>
<tr><td>3</td><td>PostgreSQL HA + automated backup</td><td>10</td><td>☐</td></tr>
<tr><td>4</td><td>Message queues (RabbitMQ/Kafka)</td><td>5</td><td>☐</td></tr>
<tr><td>5</td><td>Redis caching layer</td><td>5</td><td>☐</td></tr>
<tr><td>6</td><td>Istio service mesh + mTLS</td><td>10</td><td>☐</td></tr>
<tr><td>7</td><td>ArgoCD GitOps deployment</td><td>10</td><td>☐</td></tr>
<tr><td>8</td><td>CI/CD pipeline (build + scan + sign)</td><td>5</td><td>☐</td></tr>
<tr><td>9</td><td>Prometheus + Grafana monitoring</td><td>5</td><td>☐</td></tr>
<tr><td>10</td><td>Loki centralized logging</td><td>5</td><td>☐</td></tr>
<tr><td>11</td><td>Tempo distributed tracing</td><td>5</td><td>☐</td></tr>
<tr><td>12</td><td>SLO/Error budget alerts</td><td>5</td><td>☐</td></tr>
<tr><td>13</td><td>Security (RBAC + Kyverno + Falco)</td><td>5</td><td>☐</td></tr>
<tr><td>14</td><td>Velero backup + DR tested</td><td>5</td><td>☐</td></tr>
<tr><td>15</td><td>Load test passing (500 orders/min)</td><td>5</td><td>☐</td></tr>
<tr><td></td><td><strong>Total</strong></td><td><strong>100</strong></td><td></td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Capstone</strong>: Tích hợp tất cả 49 bài trước vào 1 hệ thống thực tế</li>
<li><strong>GitOps</strong>: Toàn bộ infrastructure + apps as code</li>
<li><strong>Production-ready</strong>: Security, observability, reliability, DR</li>
<li><strong>Testing</strong>: Integration + load + chaos + security validation</li>
<li><strong>Operations</strong>: SLO monitoring, incident response, capacity planning</li>
</ol>

<hr>

<h2 id="ket-thuc">🎓 KẾT THÚC KHÓA HỌC</h2>

<p>Chúc mừng bạn đã hoàn thành <strong>50 bài học</strong> của khóa "Deploy Microservices On-Premises với Kubernetes HA"!</p>

<p>Bạn đã nắm vững:</p>
<ul>
<li>☑️ Infrastructure planning & Linux system tuning</li>
<li>☑️ Kubernetes HA cluster setup & operations</li>
<li>☑️ Distributed storage (Rook-Ceph)</li>
<li>☑️ Database HA (PostgreSQL, Redis, RabbitMQ, Kafka)</li>
<li>☑️ Service Mesh (Istio) & API Gateway</li>
<li>☑️ GitOps (ArgoCD) & CI/CD & Secrets Management</li>
<li>☑️ Full observability stack (Prometheus, Loki, Tempo, Grafana)</li>
<li>☑️ Security hardening (RBAC, Kyverno, Falco, Harbor)</li>
<li>☑️ Deployment patterns & Auto-scaling</li>
<li>☑️ Disaster Recovery & Chaos Engineering</li>
<li>☑️ Production operations & Troubleshooting</li>
</ul>

<p><strong>Keep learning, keep building! 🚀</strong></p>
