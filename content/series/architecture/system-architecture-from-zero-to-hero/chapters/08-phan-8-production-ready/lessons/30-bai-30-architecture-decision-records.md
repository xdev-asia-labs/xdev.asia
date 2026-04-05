---
id: 019d8a21-c110-7001-d001-e1f2a3b4c530
title: "Bài 30: Architecture Decision Records & Production Checklist"
slug: bai-30-architecture-decision-records-production-checklist
description: >-
  Architecture Decision Records (ADR): format, khi nào viết,
  ví dụ thực tế. Production readiness checklist. System Design
  Interview framework tổng hợp. Career path cho System Architect.
  Resources and next steps.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 30
section_title: "Phần 8: Production-Ready Architecture"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7890" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7890)"/>

  <!-- Decorations -->
  <g>
    <circle cx="933" cy="129" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="766" cy="162" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1099" cy="195" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="932" cy="228" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="765" cy="261" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="59" x2="1100" y2="139" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="89" x2="1050" y2="159" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="938.444863728671,92 938.444863728671,126 909,143 879.555136271329,126 879.555136271329,92.00000000000001 909,75" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ Kiến trúc — Bài 30</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 30: Architecture Decision Records &amp;</tspan>
      <tspan x="60" dy="42">Production Checklist</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 8: Production-Ready Architecture</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Bài cuối cùng — tổng hợp mọi thứ đã học thành công cụ thực tế: **Architecture Decision Records** để document quyết định, **Production Checklist** để đảm bảo hệ thống sẵn sàng, và **System Design Framework** cho phỏng vấn.

---

## 1. Architecture Decision Records (ADR)

### 1.1 Tại sao cần ADR?

```
6 tháng sau:
  Developer mới: "Tại sao chúng ta dùng MongoDB thay vì PostgreSQL?"
  Team: "Hmm... không ai nhớ."

  Với ADR:
  → Đọc ADR-005: "Chọn MongoDB vì product catalog cần flexible schema,
     variants có attributes khác nhau. PostgreSQL JSONB cũng được xem xét
     nhưng MongoDB có better query performance cho nested documents."

ADR = Document GHI LẠI quyết định kiến trúc quan trọng
  - Context: Tại sao phải quyết định?
  - Decision: Quyết định gì?
  - Consequences: Hậu quả là gì?
```

### 1.2 ADR Template

```markdown
# ADR-001: Chọn Message Queue

## Status
Accepted (2024-01-15)

## Context
Hệ thống cần async processing cho: email notifications,
order processing, analytics events. Hiện tại tất cả
synchronous, gây latency 2-3 giây cho checkout.

## Decision Drivers
- Throughput: 10K messages/s peak
- Ordering: Per-partition ordering needed
- Retention: Need message replay (audit)
- Team expertise: Team có kinh nghiệm Kafka

## Options Considered
1. RabbitMQ: Mature, easy setup, good routing
2. Apache Kafka: High throughput, retention, replay
3. AWS SQS: Managed, simple, no operations

## Decision
Chọn Apache Kafka.

## Rationale
- Throughput requirement (10K/s) → Kafka excels
- Message retention + replay → Audit compliance
- Team already has Kafka experience
- Event-driven architecture direction → Kafka fits

## Consequences
### Positive
- Message replay for debugging/audit
- High throughput headroom
- Foundation for event-driven architecture

### Negative
- Operational complexity (ZooKeeper/KRaft cluster)
- Higher learning curve for new team members
- Need monitoring setup (Kafka lag, consumer groups)

### Risks
- Kafka cluster management overhead → Mitigate: Use managed Kafka (MSK/Confluent)

## References
- Bài 13: Message Queues & Task Queues
- RFC-2024-003: Async Processing Architecture
```

### 1.3 Khi nào viết ADR?

```
✅ Viết ADR khi:
  - Chọn technology/framework mới
  - Thay đổi architecture pattern
  - Quyết định ảnh hưởng nhiều teams
  - Trade-off rõ ràng (security vs performance)
  - Quyết định khó đảo ngược

❌ KHÔNG cần ADR khi:
  - Naming convention (dùng coding standards)
  - Library minor version
  - Implementation details (code review đủ)
  - Temporary solutions (dùng TODO/RFC)
```

---

## 2. Production Readiness Checklist

### 2.1 Infrastructure

```
□ Auto-scaling configured (min/max/target)
□ Multi-AZ deployment
□ Load balancer health checks
□ Database replicas + failover tested
□ Backup strategy verified (test restore!)
□ CDN for static assets
□ DNS with TTL configured
□ SSL/TLS certificates (auto-renew)
□ Secret management (Vault/KMS, not env vars)
□ Infrastructure as Code (Terraform/Pulumi)
```

### 2.2 Application

```
□ Health check endpoints (/healthz, /readyz)
□ Graceful shutdown (drain connections)
□ Connection pooling (database, HTTP)
□ Timeouts on ALL external calls
□ Circuit breakers for downstream services
□ Retry with exponential backoff
□ Rate limiting configured
□ Input validation (all endpoints)
□ Error handling (no stack traces in production)
□ Feature flags for risky deployments
```

### 2.3 Observability

```
□ Metrics: RED (Rate, Error, Duration) per service
□ Logging: Structured, centralized (ELK/Loki)
□ Tracing: Distributed tracing (OpenTelemetry)
□ Dashboards: Service overview, business metrics
□ Alerts: P1/P2 alerts with runbooks
□ On-call rotation configured
□ Status page for external communication
□ SLO defined and monitored
```

### 2.4 Security

```
□ Authentication + Authorization
□ HTTPS everywhere, HSTS headers
□ WAF configured
□ Dependency vulnerability scanning
□ Container image scanning
□ Secrets rotation policy
□ Audit logging for sensitive operations
□ Penetration testing done
□ Data encryption at rest and in transit
□ CORS, CSP headers configured
```

### 2.5 Reliability

```
□ Chaos experiments run in staging
□ Disaster Recovery plan documented
□ DR failover tested
□ Runbooks for common incidents
□ Post-incident review process
□ Capacity planning for next 6 months
□ Load testing done (normal + peak)
□ Database migration strategy (zero-downtime)
□ Rollback plan for every deployment
□ Data consistency checks automated
```

### 2.6 CI/CD

```
□ Automated tests (unit, integration, e2e)
□ Code coverage > 80%
□ Linting + formatting enforced
□ Container build pipeline
□ Staging environment mirrors production
□ Blue-green or canary deployment
□ Automated rollback on failure
□ Database migration in pipeline
□ Security scanning in pipeline
□ Performance regression tests
```

---

## 3. System Design Interview Framework

### 3.1 The 4-Step Framework (45 minutes)

```
Step 1: Requirements Clarification (5 min)
  - Functional requirements (features)
  - Non-functional requirements (QPS, latency, availability)
  - Scale estimation (users, data, bandwidth)
  - Constraints (existing systems, compliance)

Step 2: High-Level Design (10 min)
  - Draw main components
  - Show data flow
  - Identify key services
  - API design (endpoints, request/response)

Step 3: Deep Dive (20 min)
  - Database schema + choice justification
  - Scaling strategy (sharding, caching)
  - Algorithm design (matching, ranking)
  - Handle edge cases (race conditions, failures)

Step 4: Wrap Up (10 min)
  - Bottleneck identification
  - Scaling discussion (10x, 100x)
  - Monitoring + alerting approach
  - Trade-offs recap
```

### 3.2 Estimation Cheat Sheet

```
Numbers Everyone Should Know:
  L1 cache reference:     0.5 ns
  L2 cache reference:     7 ns
  Memory reference:       100 ns
  SSD random read:        150 μs
  HDD random read:        10 ms
  Network round trip:     500 μs (same DC)
  Network round trip:     150 ms (cross-continent)

Storage:
  1 char = 1 byte (ASCII) / 2-4 bytes (UTF-8)
  1 UUID = 36 bytes (string) / 16 bytes (binary)
  1 timestamp = 8 bytes
  Average tweet = 140 bytes
  Average URL = 100 bytes
  Average image = 300KB
  Average video (1 min) = 50MB

Scale:
  1M seconds ≈ 12 days
  1B seconds ≈ 32 years
  QPS → 86,400 = requests per day (÷86,400 = QPS)
  2^10 = 1K, 2^20 = 1M, 2^30 = 1G, 2^40 = 1T
```

---

## 4. Recap: 30 Bài Học

```
Foundation (1-4):
  System Design overview, performance, scalability,
  CAP theorem, networking

Infrastructure (5-8):
  Load balancer, CDN, caching, API gateway

Database (9-12):
  SQL vs NoSQL, replication, sharding, storage patterns

Async (13-15):
  Message queues, event-driven, stream processing

Architecture (16-19):
  Microservices, service communication, DDD, serverless

Reliability (20-23):
  HA, DR, security, observability

Case Studies (24-29):
  URL shortener, chat, news feed, video streaming,
  ride-sharing, e-commerce

Production (30):
  ADR, production checklist, interview framework
```

---

## 5. Learning Resources

```
Books:
  📚 "Designing Data-Intensive Applications" - Martin Kleppmann
  📚 "System Design Interview" - Alex Xu (Vol 1 & 2)
  📚 "Building Microservices" - Sam Newman
  📚 "Domain-Driven Design" - Eric Evans
  📚 "Site Reliability Engineering" - Google

Online:
  🌐 system-design-primer (GitHub)
  🌐 ByteByteGo (Alex Xu)
  🌐 roadmap.sh/system-design
  🌐 highscalability.com

Practice:
  💻 Design 1 system per week
  💻 Write ADRs for your current projects
  💻 Read engineering blogs: Netflix, Uber, Shopify
  💻 Contribute to open-source infra projects
```

---

## 6. Career Path

```
Junior Developer
  → Understand single-server apps
  → Learn database fundamentals

Mid-Level Developer
  → Design multi-server systems
  → Implement caching, queues
  → Operational experience

Senior Developer
  → Lead architecture decisions
  → Write ADRs
  → Mentor on system design

Staff/Principal Engineer
  → Cross-team architecture
  → Define tech strategy
  → Influence org-wide patterns

System Architect
  → Enterprise architecture
  → Vendor evaluation
  → Multi-year technology roadmap
```

---

## Lời kết

Bạn đã hoàn thành "System Architecture: From Zero to Hero" — 30 bài, 80 giờ học. Kiến trúc hệ thống không phải chỉ là lý thuyết; hãy áp dụng vào dự án thực tế. Viết ADR cho project tiếp theo, review production checklist, và tiếp tục học mỗi ngày.

**"The best architecture is the one that solves the problem simply."**
