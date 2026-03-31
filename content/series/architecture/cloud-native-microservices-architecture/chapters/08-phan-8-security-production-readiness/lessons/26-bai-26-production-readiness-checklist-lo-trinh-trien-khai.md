---
id: 019d8a22-c326-7a10-b001-a1b2c3d4e526
title: "Bài 26: Production Readiness Checklist & Lộ trình triển khai"
slug: bai-26-production-readiness-checklist-lo-trinh-trien-khai
description: >-
  Architecture decision checklist, technology stack khuyến nghị,
  lộ trình triển khai 4 phases (Foundation → Core Platform → Advanced → Optimization),
  capacity planning, cost optimization, runbook template và disaster recovery planning.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 26
section_title: "Phần 8: Security & Production Readiness"
course:
  id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
  title: "Cloud Native Microservices Architecture"
  slug: cloud-native-microservices-architecture
---

![Bài 26: Production Readiness Checklist & Lộ trình triển khai](/storage/uploads/2026/03/cn-bai-26-diagram.png)

## Giới thiệu

Chuẩn bị production không phải là bước cuối cùng — đó là tiêu chí phải đạt từ ngày đầu. Bài cuối của khóa học tổng hợp toàn bộ kiến thức thành checklist thực tế, technology stack khuyến nghị, và lộ trình 4 giai đoạn để triển khai hệ thống microservices từ zero đến production.

---

## 1. Architecture Decision Checklist

### 1.1 Khi nào nên dùng Microservices?

```
✅ Phù hợp với Microservices khi:
□ Team > 20 người, chia thành nhiều team nhỏ (2-pizza rule)
□ Cần scale độc lập từng phần (payment cần scale nhiều hơn catalog)
□ Các domain có tốc độ thay đổi khác nhau (checkout vs reporting)
□ Cần polyglot technology (ML service = Python, core = Java)
□ Traffic peak asymmetric (flash sale chỉ ảnh hưởng order service)

❌ Không nên dùng Microservices khi:
□ Team < 10 người — overhead > benefit
□ Domain chưa rõ ràng — microservices đòi hỏi stable boundaries
□ Không có DevOps maturity — không có CI/CD, monitoring, container platform
□ Startup phase — premature optimization, YAGNI
□ Simple CRUD app — monolith đơn giản hơn nhiều
```

### 1.2 Service Decomposition Decision

```
Domain → Bounded Context → Service

Câu hỏi trước khi tách service:
1. Service có thể deploy độc lập không?
2. Service có team riêng maintain không?
3. Có cần scale độc lập không?
4. Domain boundary có rõ ràng không?
5. Data coupling có low không?

Nếu ≥ 4 câu YES → tách service là hợp lý
Nếu < 3 câu YES → giữ trong monolith hoặc module
```

---

## 2. Technology Stack Khuyến Nghị

### 2.1 Core Platform

```
┌─────────────────────────────────────────────────────────────┐
│                    Recommended Stack 2024                    │
├──────────────────────┬──────────────────────────────────────┤
│ Container Runtime    │ containerd (không dùng Docker)        │
│ Orchestration        │ Kubernetes (EKS/GKE/AKS hoặc k3s)    │
│ Service Mesh         │ Istio (lớn) / Cilium (nhỏ/đơn giản)  │
│ API Gateway          │ Kong / Traefik / Nginx                │
│ Service Registry     │ Kubernetes DNS + Endpoints           │
├──────────────────────┼──────────────────────────────────────┤
│ Message Broker       │ Apache Kafka (high throughput)        │
│                      │ NATS JetStream (lightweight)          │
├──────────────────────┼──────────────────────────────────────┤
│ Observability        │ Prometheus + Grafana (metrics)        │
│                      │ Grafana Loki (logs)                   │
│                      │ Tempo / Jaeger (traces)               │
│                      │ OpenTelemetry (instrumentation)       │
├──────────────────────┼──────────────────────────────────────┤
│ Storage              │ PostgreSQL (relational)               │
│                      │ MongoDB (document)                    │
│                      │ Redis (cache/session)                 │
│                      │ Elasticsearch (search)                │
├──────────────────────┼──────────────────────────────────────┤
│ CI/CD                │ GitHub Actions / GitLab CI            │
│ GitOps               │ ArgoCD                                │
│ Secrets              │ HashiCorp Vault                       │
│ Registry             │ Harbor                                │
└──────────────────────┴──────────────────────────────────────┘
```

### 2.2 Language/Framework Khuyến Nghị

```
Backend Services:
- Java/Kotlin + Spring Boot 3.x  → enterprise, mature ecosystem
- Go                              → performance-critical, CLI tools
- Node.js/TypeScript              → BFF, real-time, high I/O
- Python                          → ML services, data processing

Frontend/BFF:
- Next.js (React)                 → SSR + BFF pattern
- GraphQL (Apollo/gqlgen)         → flexible API aggregation

Database:
- PostgreSQL 16+                  → default choice for relational
- Redis 7+                        → cache, pub/sub, streams
- Kafka 3.x                       → event streaming, CDC
```

---

## 3. Lộ trình Triển Khai 4 Phases

### Phase 1: Foundation (Tháng 1–2)

```
Mục tiêu: Core infrastructure, CI/CD, observability cơ bản

INFRA:
□ Kubernetes cluster (managed: EKS/GKE/AKS hoặc self-managed: k3s)
□ Container registry (Harbor hoặc ECR/GCR/ACR)
□ DNS và Load Balancer (cert-manager cho TLS)
□ Namespace strategy (dev / staging / prod)

CI/CD:
□ Git repository structure (monorepo vs polyrepo — quyết định sớm)
□ GitHub Actions / GitLab CI pipelines
□ Docker build + push pipeline
□ ArgoCD install + app-of-apps pattern

OBSERVABILITY:
□ Prometheus + Grafana (Kube Prometheus Stack)
□ Grafana Loki (log aggregation)
□ Basic alerting rules (CPU, memory, pod restarts)

BASELINE METRICS:
□ DORA metrics tracking (deploy frequency, lead time, MTTR, change failure rate)

DELIVERABLE: Có thể deploy hello-world service trong < 5 phút
```

### Phase 2: Core Platform (Tháng 3–5)

```
Mục tiêu: Service communication, data management, security cơ bản

SERVICES:
□ API Gateway (Kong/Traefik)
□ Service-to-service communication pattern (REST/gRPC/events)
□ Message broker (Kafka hoặc NATS)
□ Service discovery (Kubernetes DNS)

DATA:
□ Database per service (mỗi service có DB riêng)
□ Data migration strategy (Flyway / Liquibase)
□ Read replicas cho read-heavy services
□ Redis caching layer

SECURITY:
□ mTLS giữa services (Istio / Cilium) hoặc manual gRPC TLS
□ OAuth2 + JWT authentication (Keycloak)
□ Network Policies
□ Pod Security Standards (baseline)
□ Vault cho secrets management

RESILIENCE:
□ Circuit breaker (Resilience4j)
□ Retry với exponential backoff
□ Resource limits trên tất cả containers
□ Readiness + Liveness + Startup probes

DELIVERABLE: Core business services deploy thành công, auth hoạt động
```

### Phase 3: Advanced (Tháng 6–9)

```
Mục tiêu: Distributed systems patterns, advanced observability, reliability

PATTERNS:
□ Saga pattern cho distributed transactions
□ Event Sourcing cho audit-critical services
□ CQRS (nếu read/write model khác nhau)
□ Outbox pattern cho reliable event publishing

OBSERVABILITY (nâng cao):
□ Distributed tracing (OpenTelemetry + Tempo/Jaeger)
□ Custom Grafana dashboards (RED method per service)
□ SLI/SLO definitions và error budget alerts
□ Synthetic monitoring (Blackbox Exporter)

DEPLOYMENT:
□ Canary deployments (Argo Rollouts)
□ Feature flags (Unleash / LaunchDarkly)
□ Blue/Green cho stateful services

SECURITY (nâng cao):
□ Dynamic secrets (Vault DB secrets)
□ Container image signing (Cosign)
□ Vulnerability scanning tích hợp CI (Trivy)
□ Falco runtime security

CHAOS:
□ Chaos Engineering baseline (LitmusChaos)
□ Quarterly Game Days

DELIVERABLE: SLOs defined cho tất cả core services, chaos testing hoạt động
```

### Phase 4: Optimization (Tháng 10+)

```
Mục tiêu: Performance, cost optimization, advanced automation

PERFORMANCE:
□ Profiling services (async profiler / pprof)
□ Database query optimization (slow query log, indexes)
□ Caching strategy tinh chỉnh (cache hit rates > 80%)
□ Connection pool tuning

AUTO-SCALING:
□ HPA cho tất cả services (CPU + custom metrics)
□ VPA recommendations (resource right-sizing)
□ KEDA cho event-driven autoscaling (Kafka lag)
□ Cluster Autoscaler / Karpenter

COST:
□ Spot instances cho non-critical workloads
□ Namespace resource quotas
□ Idle resource cleanup (K8s Goldilocks)
□ Cost allocation by service / team

MULTI-CLUSTER (nếu cần):
□ Multi-region deployment
□ Global load balancing
□ Cross-region replication

DELIVERABLE: Infrastructure cost giảm ≥ 20%, SLO maintained ≥ 99.9%
```

---

## 4. Capacity Planning

### 4.1 Sizing Services

```
Rule of thumb cho JVM services:
- Memory request: heap_max * 1.5 + 200Mi (JVM overhead)
  Ví dụ: heap 512Mi → request 968Mi ≈ 1Gi
- CPU request: throughput / 1000 * 2 (2ms per req avg)
  Ví dụ: 500 RPS → CPU request: 1.0 cores

Go services:
- Memory: 50–200Mi (much lower than JVM)
- CPU: throughput / 2000 (faster per req)

Node.js:
- Memory: 256–512Mi
- CPU: throughput / 1500
```

### 4.2 Load Testing Baseline

```bash
# k6 load test baseline trước production
cat <<EOF > load-test.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 100 },   // Ramp up
    { duration: '5m', target: 100 },   // Steady state
    { duration: '2m', target: 500 },   // Spike test
    { duration: '5m', target: 500 },   // Hold spike
    { duration: '2m', target: 0 },     // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],  // 95th percentile < 500ms
    http_req_failed: ['rate<0.01'],    // Error rate < 1%
  },
};

export default () => {
  const r = http.get('https://api.example.com/orders');
  check(r, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
};
EOF

k6 run load-test.js
```

---

## 5. Runbook Template

Mỗi service phải có runbook. Template tối thiểu:

```markdown
# Runbook: Order Service

## Service Overview
- Owner: Order Team
- PagerDuty: order-service
- Dashboard: https://grafana/d/order-service
- Source: https://github.com/company/order-service

## SLO
- Availability: 99.9% (43.8 min downtime/month)
- Latency: P99 < 500ms

## Common Incidents

### High Error Rate
**Alert**: `OrderServiceErrorRate > 5%`
**Procedure**:
1. `kubectl logs -n prod -l app=order-service --tail=100`
2. Kiểm tra database connection: `kubectl exec -it postgres-0 -- psql -U orders -c "SELECT count(*) FROM pg_stat_activity"`
3. Nếu DB connection pool exhausted: `kubectl rollout restart deploy/order-service`
4. Nếu vẫn fail: activate circuit breaker manually, alert on-call

### High Latency
**Alert**: `OrderServiceP99Latency > 2s`
**Procedure**:
1. Mở trace dashboard, filter by slow spans
2. Kiểm tra slow queries: `kubectl exec postgres-0 -- psql -c "SELECT * FROM pg_stat_statements ORDER BY total_time DESC LIMIT 10"`
3. Kiểm tra Kafka consumer lag: `kafka-consumer-groups.sh --describe --group order-consumer`

### Pod CrashLoopBackOff
**Procedure**:
1. `kubectl describe pod <pod> -n prod`
2. `kubectl logs <pod> -n prod --previous`
3. Nếu OOMKilled: tăng memory limit hoặc profile memory leak
4. Nếu config error: kiểm tra ConfigMap/Secret đúng chưa

## Rollback Procedure
```bash
# Rollback ArgoCD application về revision trước
argocd app rollback order-service --revision PREVIOUS_SYNC_ID

# Hoặc rollback Helm release
helm rollback order-service -n prod 0   # 0 = previous revision
\```

## Escalation
- L1 (0–15 min): On-call engineer
- L2 (15–30 min): Engineer lead
- L3 (30+ min): CTO notification
```

---

## 6. Disaster Recovery Planning

### 6.1 RTO/RPO Targets

```
Tier 1 — Payment, Authentication:
  RTO: 1 hour    (phục hồi trong 1 giờ)
  RPO: 15 phút   (mất tối đa 15 phút data)
  → Multi-AZ, database replication, automated failover

Tier 2 — Order, Inventory:
  RTO: 4 giờ
  RPO: 1 giờ
  → DB backup mỗi giờ, manual failover procedure

Tier 3 — Reporting, Analytics:
  RTO: 24 giờ
  RPO: 24 giờ
  → Daily backup là đủ
```

### 6.2 DR Checklist

```
Backup:
□ Database backup tự động (Velero cho PVC, pg_dump cho PostgreSQL)
□ Backup retention theo tier (Tier 1: 30 ngày, Tier 2: 7 ngày, Tier 3: 3 ngày)
□ Backup restore test mỗi tháng (automated DR drill)
□ Cross-region backup storage

Application State:
□ Stateless services (state trong database/cache — easy to restore)
□ Kafka topics replicated across brokers
□ Redis sentinel / cluster mode cho high availability

Infrastructure:
□ Infrastructure as Code (Terraform / Pulumi) — rebuilt từ code
□ GitOps state (ArgoCD) — redeploy từ Git
□ Secrets backed up trong Vault (HA mode)

Recovery Drills:
□ DR drill quarterly: simulate AZ failure
□ Data restore test monthly: restore từ backup vào staging
□ Chaos day biannual: full DR walkthrough
```

---

## 7. DORA Metrics & Team Health

### 7.1 Theo dõi DORA Metrics

```
Elite Performance (mục tiêu):
- Deploy Frequency:      Multiple deploys/day
- Lead Time for Change:  < 1 giờ (code merged → production)
- MTTR:                  < 1 giờ
- Change Failure Rate:   < 5%

Đo lường:
- Deploy Frequency: count(ArgoCD sync) per day
- Lead Time: git tag timestamp → ArgoCD sync timestamp
- MTTR: PagerDuty alert triggered → resolved
- Change Failure Rate: rollbacks / total deploys
```

---

## 8. Kiến trúc Tổng Thể — Final View

```
                         Internet
                            │
                    [CloudFlare WAF]
                            │
                    [Global Load Balancer]
                            │
              ┌─────────────┴─────────────┐
              │                           │
         [Region A]                  [Region B]
              │
    [Kubernetes Cluster]
              │
    ┌─────────┴─────────────────────┐
    │      Ingress / API Gateway     │
    │  (Kong + cert-manager + TLS)   │
    └─────────┬──────────────────────┘
              │
    ┌─────────┴──────────────┐
    │   Service Mesh (Istio)  │
    │   mTLS between all pods │
    └─────────┬──────────────┘
              │
    ┌─────────┴────────────────────────────┐
    │              Core Services           │
    │                                      │
    │  [Auth]  [Order]  [Payment] [Catalog]│
    │     └────────┬──────────┘            │
    │             [Kafka]                  │
    └─────────┬─────────────────┬──────────┘
              │                 │
    ┌─────────┴───┐    ┌────────┴───────┐
    │  Data Layer  │    │  Platform      │
    │  PostgreSQL  │    │  Vault         │
    │  Redis       │    │  ArgoCD        │
    │  Elasticsearch   │  Harbor         │
    └─────────────┘    │  Prometheus     │
                       │  Grafana/Loki   │
                       └────────────────┘
```

---

## 9. Tổng Kết Khóa Học

Bạn đã hoàn thành **Cloud Native Microservices Architecture** — từ lý thuyết đến production-ready implementation:

| Phần | Chủ đề | Key Takeaway |
|------|--------|-------------|
| 1 | Cloud Native Foundations | 12-factor app, containers, Kubernetes basics |
| 2 | Design & Communication | Domain-Driven Design, REST/gRPC/Events |
| 3 | Data Management | Database per service, Saga, CQRS, Event Sourcing |
| 4 | Service Mesh | Istio, mTLS, traffic management |
| 5 | Observability | Prometheus, Grafana, Loki, OpenTelemetry |
| 6 | Resiliency | Circuit Breaker, Bulkhead, Rate Limit, Chaos |
| 7 | CI/CD & Deployment | GitOps, ArgoCD, Canary, Blue/Green |
| 8 | Security & Production | JWT, Vault, Container Security, Runbook |

**Tiếp theo của bạn**:
1. Chọn một service để convert từ monolith → microservices
2. Setup Kubernetes cluster (k3s local hoặc managed cloud)
3. Implement CI/CD pipeline và observability stack
4. Áp dụng từng pattern một — đừng big bang migration
5. Đo DORA metrics — cải thiện lặp đi lặp lại

> Microservices không phải là đích đến — đó là phương tiện để team của bạn deliver value nhanh hơn, an toàn hơn, và bền vững hơn.
