---
id: 019d8a21-c110-7001-d001-e1f2a3b4c521
title: "Bài 21: Disaster Recovery & Multi-Region Architecture"
slug: bai-21-disaster-recovery-multi-region-architecture
description: >-
  RPO & RTO concepts. DR strategies: Backup & Restore, Pilot
  Light, Warm Standby, Multi-Site Active-Active. Multi-region
  data replication challenges. Global load balancing. DR testing
  và runbooks.
duration_minutes: 150
is_free: false
video_url: null
sort_order: 21
section_title: "Phần 6: Reliability, Security & Observability"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Khi toàn bộ data center gặp sự cố (mất điện, thiên tai, network outage), High Availability trong 1 region không đủ. **Disaster Recovery (DR)** đảm bảo hệ thống có thể recover từ catastrophic failures.

---

## 1. RPO & RTO

```
RPO (Recovery Point Objective):
  "Mất tối đa bao nhiêu data có thể chấp nhận?"
  
  RPO = 1 giờ → Backup mỗi giờ → Mất tối đa 1 giờ data
  RPO = 0     → Synchronous replication → Không mất data

RTO (Recovery Time Objective):
  "Hệ thống phải recovery trong bao lâu?"
  
  RTO = 4 giờ  → Có 4 giờ để khôi phục
  RTO = 0      → Instant failover (Active-Active)

Timeline:
  ◄──── RPO ────►           ◄──── RTO ────►
  Last backup    Disaster    Start         Recovered
      │              │       Recovery          │
  ────┼──────────────┼───────┼─────────────────┼────
      ▲              ▲       ▲                 ▲
   Data preserved  Data lost  Downtime      Back online
```

---

## 2. DR Strategies

### 2.1 Backup & Restore

```
┌──────────────┐         ┌──────────────┐
│ Primary      │ backup  │ S3/GCS       │
│ Region       │────────►│ (cold store) │
│ (running)    │         └──────┬───────┘
└──────────────┘                │ restore
                          ┌─────▼────────┐
                          │ DR Region    │
                          │ (provisioned │
                          │  on demand)  │
                          └──────────────┘

RPO: Hours (last backup)
RTO: Hours (provision + restore)
Cost: $ (chỉ trả storage)
Use case: Non-critical systems, dev/staging
```

### 2.2 Pilot Light

```
┌──────────────┐         ┌──────────────┐
│ Primary      │ replica │ DR Region    │
│ Region       │────────►│              │
│ App servers  │         │ DB Replica   │ ← chạy sẵn
│ DB Primary   │         │ (no app)     │
│ Cache        │         │              │
└──────────────┘         └──────────────┘

Disaster → Scale up DR:
  1. Promote DB replica → Primary
  2. Launch app servers (AMI/container)
  3. Update DNS → DR region

RPO: Minutes (async replication)
RTO: 10-30 minutes
Cost: $$ (DB replica running)
```

### 2.3 Warm Standby

```
┌──────────────┐         ┌──────────────┐
│ Primary      │ replica │ DR Region    │
│ Region       │────────►│              │
│ App × 10     │         │ App × 2      │ ← scaled down
│ DB Primary   │         │ DB Replica   │
│ Cache        │         │ Cache        │
└──────────────┘         └──────────────┘

Disaster → Scale up DR:
  1. Scale app 2 → 10
  2. Promote DB
  3. Switch traffic

RPO: Seconds-minutes
RTO: Minutes
Cost: $$$ (minimal infra running)
```

### 2.4 Multi-Site Active-Active

```
┌──────────────┐         ┌──────────────┐
│ Region A     │◄───────►│ Region B     │
│ App × 10     │  sync   │ App × 10     │
│ DB Primary   │         │ DB Primary   │
│ Full traffic │         │ Full traffic │
└──────────────┘         └──────────────┘
       ▲                        ▲
       └────── Global LB ──────┘
              (GeoDNS/Anycast)

RPO: 0 (synchronous) hoặc seconds (async)
RTO: 0 (automatic failover)
Cost: $$$$ (2x infrastructure)
Use case: Mission-critical, global services
```

### 2.5 So sánh

| Strategy | RPO | RTO | Cost | Complexity |
|----------|-----|-----|------|-----------|
| Backup & Restore | Hours | Hours | $ | Low |
| Pilot Light | Minutes | 10-30 min | $$ | Medium |
| Warm Standby | Seconds | Minutes | $$$ | High |
| Active-Active | ~0 | ~0 | $$$$ | Very High |

---

## 3. Multi-Region Data Challenges

### 3.1 Data Replication

```
Synchronous:
  Region A write → Wait for Region B confirm → Return
  ✅ Strong consistency (RPO=0)
  ❌ Latency tăng (cross-region: 50-200ms)
  ❌ Region B down → Region A blocked

Asynchronous:
  Region A write → Return immediately
  Region A → replicate to Region B (background)
  ✅ Nhanh, Region B down không ảnh hưởng
  ❌ Replication lag → Data inconsistency
  ❌ RPO > 0 (có thể mất data)

Conflict Resolution (Active-Active):
  Region A: UPDATE user SET name='Alice'
  Region B: UPDATE user SET name='Bob'  (cùng lúc)
  → Conflict! Giải quyết bằng:
    - Last-Writer-Wins (LWW)
    - Application-level merge
    - CRDTs
```

### 3.2 Global Load Balancing

```
GeoDNS:
  User ở Vietnam → DNS trả IP Region Asia
  User ở US → DNS trả IP Region US

  user.example.com
    ├── Vietnam user → 10.0.1.1 (Asia region)
    ├── US user → 10.0.2.1 (US region)
    └── EU user → 10.0.3.1 (EU region)

Anycast:
  Cùng 1 IP, nhiều locations
  BGP routing → nearest location
  Dùng cho CDN, DNS servers

Latency-based:
  AWS Route 53: Route to region có latency thấp nhất
  Health check: Nếu region down → route sang region khác
```

---

## 4. DR Testing

```
1. Tabletop Exercise (hàng quý):
   Team ngồi lại, giả lập scenario trên giấy
   "Database chính bị corrupt, phải làm gì?"
   Lên plan, identify gaps

2. Failover Test (hàng quý-năm):
   Thực sự failover sang DR region
   Verify data integrity
   Measure actual RTO

3. Chaos Day (hàng tháng):
   Inject failures vào production
   Kill processes, add latency
   Netflix "Chaos Monkey" style

4. Backup Restore Test (hàng tháng):
   Restore backup to new environment
   Verify data completeness
   Measure restore time
```

---

## 5. DR Runbook Template

```
# Runbook: Database Failover

## Trigger Conditions
- Primary DB unreachable > 5 minutes
- Data corruption detected
- Region-level outage declared

## Pre-Checks
□ Verify primary is actually down (not network issue)
□ Check replica lag (pg_stat_replication)
□ Notify on-call team lead

## Failover Steps
1. Stop writes to primary (if accessible)
2. Verify replica is caught up
3. Promote replica: SELECT pg_promote()
4. Update connection strings (DNS/config)
5. Verify app connects to new primary
6. Monitor error rates for 15 minutes

## Post-Failover
□ Notify stakeholders
□ Update status page
□ Create incident ticket
□ Plan for original primary recovery
□ Post-mortem within 48 hours

## Rollback Plan
If failover fails:
1. Restore from latest backup
2. Point apps to restored DB
3. Accept data loss from RPO gap
```

---

## Tổng kết

| Decision | Factors |
|----------|---------|
| RPO choice | Data criticality, compliance, cost |
| RTO choice | Business impact per minute of downtime |
| DR strategy | Budget, RPO/RTO requirements |
| Regions | User locations, compliance, latency |
| Testing | Frequency phù hợp với criticality |

---

## Bài tập

1. **DR Strategy Selection:** Fintech app: transactions, user balances, compliance reports. Downtime > 30 phút = regulatory violation. RPO = 0, RTO < 5 phút. Budget: $50K/tháng cho DR. Chọn DR strategy nào?

2. **Multi-Region Design:** Social media app cho Southeast Asia. Users ở VN (60%), Indonesia (20%), Philippines (10%), others (10%). Thiết kế multi-region architecture. Data nào replicate, data nào shard theo region?

3. **DR Runbook:** Viết DR runbook chi tiết cho scenario: AWS ap-southeast-1 (Singapore) hoàn toàn unavailable. Hệ thống gồm: EKS cluster, RDS PostgreSQL, ElastiCache Redis, S3. DR site: ap-northeast-1 (Tokyo).
