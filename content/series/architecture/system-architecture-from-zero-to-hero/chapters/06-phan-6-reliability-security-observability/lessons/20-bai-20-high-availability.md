---
id: 019d8a21-c110-7001-d001-e1f2a3b4c520
title: "Bài 20: High Availability & Fault Tolerance"
slug: bai-20-high-availability-fault-tolerance
description: >-
  Availability metrics (nines). Redundancy patterns: Active-Active,
  Active-Passive. Failover strategies. Health checks & heartbeats.
  Chaos Engineering principles. Graceful degradation. Designing
  for failure mindset.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 6: Reliability, Security & Observability"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

"Everything fails, all the time." — Werner Vogels, CTO Amazon. High Availability (HA) không phải về việc ngăn failures — mà là về việc hệ thống **tiếp tục hoạt động** khi failures xảy ra.

---

## 1. Availability Metrics

### 1.1 The Nines

```
Availability   Downtime/year   Downtime/month   Downtime/week
99%            3.65 days       7.31 hours       1.68 hours
99.9%          8.77 hours      43.8 minutes     10.1 minutes
99.95%         4.38 hours      21.9 minutes     5.04 minutes
99.99%         52.6 minutes    4.38 minutes     1.01 minutes
99.999%        5.26 minutes    26.3 seconds     6.05 seconds

Availability = Uptime / (Uptime + Downtime)
MTBF = Mean Time Between Failures
MTTR = Mean Time To Recover
Availability = MTBF / (MTBF + MTTR)

Tăng MTBF → Ít failures hơn (khó)
Giảm MTTR → Recovery nhanh hơn (dễ hơn!)
```

### 1.2 Availability của hệ thống phức tạp

```
Sequential (cả 2 phải up):
  A(99.9%) ──► B(99.9%)
  System = 99.9% × 99.9% = 99.8%

  Thêm components → Availability GIẢM!

Parallel (1 trong 2 up là đủ):
  A(99.9%) ──┐
             ├──► System
  B(99.9%) ──┘
  System = 1 - (0.1% × 0.1%) = 99.9999%

  Thêm redundancy → Availability TĂNG!
```

---

## 2. Redundancy Patterns

### 2.1 Active-Passive (Failover)

```
Normal:
  Traffic ──► Active Server (processing) 
              Passive Server (standby, syncing data)

Failover:
  Traffic ──► Active Server ✗ (down!)
              Passive Server → Promoted to Active
  Traffic ──► New Active Server (was passive)

Types:
  Hot Standby:  Passive chạy sẵn, failover nhanh (<30s)
  Warm Standby: Passive chạy nhưng không sync real-time
  Cold Standby: Passive tắt, bật lên khi cần (phút-giờ)
```

### 2.2 Active-Active

```
Traffic ──► Load Balancer
            ├──► Server A (processing)
            └──► Server B (processing)

Cả 2 servers đều nhận traffic
Nếu A down → B nhận 100% traffic
Không cần failover (tự động)
Tốt hơn Active-Passive nhưng phức tạp hơn
  - Session management
  - Data consistency
  - Split-brain problem
```

### 2.3 Multi-Level Redundancy

```
┌──────────────────────────────────────────┐
│ Region: Vietnam                          │
│                                          │
│ AZ-1               AZ-2                 │
│ ┌────────────┐     ┌────────────┐       │
│ │ LB (active)│     │ LB (active)│       │
│ ├────────────┤     ├────────────┤       │
│ │ App × 3    │     │ App × 3    │       │
│ ├────────────┤     ├────────────┤       │
│ │ DB Primary │←───►│ DB Replica │       │
│ └────────────┘     └────────────┘       │
└──────────────────────────────────────────┘

Redundancy levels:
  Process: Multiple app instances
  Server:  Multiple AZs (Availability Zones)
  Region:  Multi-region (cho global services)
```

---

## 3. Health Checks

```
Types:
  1. Liveness:  "App còn sống không?"
     GET /healthz → 200 OK
     Fail → Restart container

  2. Readiness: "App sẵn sàng nhận traffic?"
     GET /readyz → 200 OK (DB connected, cache warm)
     Fail → Remove from load balancer

  3. Deep health check:
     GET /health/detailed
     {
       "status": "healthy",
       "checks": {
         "database": { "status": "up", "latency": "5ms" },
         "redis":    { "status": "up", "latency": "1ms" },
         "disk":     { "status": "up", "free": "50GB" },
         "memory":   { "status": "warning", "used": "85%" }
       }
     }

Health Check Cascade:
  Tránh: Service A health check gọi Service B
  → Service B slow → Service A "unhealthy" → Cascading!
  Correct: Health check chỉ check LOCAL resources
```

---

## 4. Graceful Degradation

```
Khi một component fail, hệ thống vẫn hoạt động
với reduced functionality

Ví dụ: E-commerce
  Normal:
    Product page: title + description + reviews + recommendations
  
  Review Service down:
    Product page: title + description + "Reviews temporarily unavailable"
  
  Recommendation Service down:
    Product page: title + description + reviews + "Popular products" (static)
  
  Search Service down:
    Homepage: Categories navigation + "Search coming back soon"

Patterns:
  1. Feature flags: Disable features instantly
  2. Fallback values: Default/cached responses
  3. Read-only mode: Disable writes, serve reads
  4. Static content: Serve cached HTML khi backend down
```

---

## 5. Chaos Engineering

### 5.1 Principles

```
"Inject failures INTENTIONALLY to discover weaknesses
 BEFORE they surprise you in production"

Steps:
  1. Define "steady state" (normal behavior)
  2. Hypothesize: "System survives X failure"
  3. Inject failure (kill server, add latency, corrupt data)
  4. Observe: Did system behave as expected?
  5. Fix: Address discovered weaknesses

Tools:
  - Chaos Monkey (Netflix): Kill random instances
  - Litmus Chaos: K8s chaos engineering
  - Gremlin: Enterprise chaos platform
  - Toxiproxy: Simulate network conditions
```

### 5.2 Chaos Experiments

```
Experiment 1: Kill an instance
  Action: Terminate 1 of 3 app servers
  Expected: LB routes to remaining 2, no user impact
  Verify: Error rate unchanged, latency < 2x

Experiment 2: Network partition
  Action: Block traffic between App and Database
  Expected: Circuit breaker opens, cached responses served
  Verify: Graceful error message, no crash

Experiment 3: Dependency slow
  Action: Add 5s latency to Payment Service
  Expected: Timeout after 3s, show "Try again later"
  Verify: Other features unaffected (bulkhead)

Experiment 4: Disk full
  Action: Fill disk to 100%
  Expected: Alert triggered, log rotation kicks in
  Verify: App doesn't crash, monitoring shows disk alert
```

---

## 6. Design for Failure Checklist

```
□ Mọi external call có timeout
□ Circuit breakers cho downstream services
□ Retry với exponential backoff + jitter
□ Health check endpoints (liveness + readiness)
□ Graceful shutdown (drain connections)
□ Graceful degradation (fallbacks)
□ Data replication (ít nhất 2 copies)
□ Multi-AZ deployment
□ Auto-scaling configured
□ Runbooks cho common failures
□ Chaos experiments scheduled
□ Monitoring + alerting configured
□ Backup + restore tested regularly
```

---

## Tổng kết

| Strategy | MTBF Impact | MTTR Impact | Complexity |
|----------|-------------|-------------|-----------|
| Redundancy | Neutral | ⬇️ Fast failover | Medium |
| Health checks | ⬆️ Early detection | ⬇️ Auto-recovery | Low |
| Graceful degradation | Neutral | ⬇️ Partial service | Medium |
| Chaos Engineering | ⬆️ Find weaknesses | ⬇️ Better runbooks | High |
| Auto-scaling | ⬆️ Handle spikes | Neutral | Medium |

---

## Bài tập

1. **Availability Calculation:** System gồm: LB (99.99%) → 3 App Servers (99.9% mỗi cái, active-active) → DB Primary (99.95%) + DB Replica (99.95%, hot standby). Tính overall availability.

2. **Failover Design:** PostgreSQL cluster: 1 Primary + 2 Replicas. Primary crash. Viết detailed failover procedure: detection, promotion, reconnection, verification.

3. **Chaos Plan:** Thiết kế 5 chaos experiments cho hệ thống e-commerce (API, Database, Redis, S3, Payment Gateway). Cho mỗi experiment: action, hypothesis, expected behavior, rollback plan.
