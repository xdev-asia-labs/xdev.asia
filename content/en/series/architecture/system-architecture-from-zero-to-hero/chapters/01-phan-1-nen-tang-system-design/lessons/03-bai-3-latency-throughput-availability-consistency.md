---
id: 019d8a21-c103-7001-d001-e1f2a3b4c503
title: 'Lesson 3: Latency vs Throughput and Availability vs Consistency'
slug: bai-3-latency-vs-throughput-availability-vs-consistency
description: >-
  Latency, Throughput and the relationship between them. CAP Theorem
  (Consistency, Availability, Partition Tolerance). CP vs AP systems.
  Consistency Patterns (Strong, Eventual, Weak). Availability Patterns
  (Failover, Replication). Availability in numbers (99.9%, 99.99%).
duration_minutes: 150
is_free: true
video_url: null
sort_order: 3
section_title: 'Part 1: System Design Foundation'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'System Architecture: From Zero to Hero'
  slug: system-architecture-from-zero-to-hero
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8564" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8564)"/>

  <!-- Decorations -->
  <g>
    <circle cx="961" cy="93" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="822" cy="114" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="683" cy="135" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1044" cy="156" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="177" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="103" x2="1100" y2="183" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="133" x2="1050" y2="203" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.9089653438086,134 985.9089653438086,172 953,191 920.0910346561914,172 920.0910346561914,134 953,115" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ Architecture — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Latency vs Throughput and</tspan>
      <tspan x="60" dy="42">Availability vs Consistency</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: System Design Foundation</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

In system design, every decision is a **trade-off**. The two most important trade-offs that you need to master:
- **Latency vs Throughput:** Fast for 1 request vs handling many requests
- **Availability vs Consistency:** Always responsive vs always right

---

## 1. Latency vs Throughput

### 1.1 Definition

```
Latency:     Thời gian để hoàn thành 1 action (ms)
             → "Bao lâu để nhận response?"

Throughput:  Số actions hoàn thành trong 1 đơn vị thời gian (RPS)
             → "Bao nhiêu requests/giây?"
```

### 1.2 Analogy: Highway

```
Latency = Thời gian 1 xe đi từ A → B
  → Phụ thuộc: tốc độ xe, khoảng cách, số trạm dừng

Throughput = Số xe đến B mỗi giờ
  → Phụ thuộc: số làn đường, latency, mật độ xe
```

### 1.3 Relationships

Latency and Throughput are often **opposite** when the system is overloaded:

```
Load thấp:    Latency thấp ✓   Throughput thấp
Load vừa:     Latency thấp ✓   Throughput cao ✓   ← Sweet spot
Load cao:     Latency tăng ✗   Throughput đạt max
Quá tải:      Latency rất cao  Throughput giảm ✗   ← Thrashing
```

### 1.4 Optimize Latency

| Engineering | Reduce latency by |
|--------|---------------------|
| **Caching** | Avoid recalculating/querying |
| **CDN** | Place content near user |
| **Connection pooling** | Avoid creating new connections |
| **Async processing** | Return response first, process later |
| **Data locality** | Place data near compute |
| **Indexing** | Query faster |

### 1.5 Optimize Throughput

| Engineering | Increase throughput by |
|--------|------------------------|
| **Horizontal scaling** | Add servers |
| **Batching** | Collect multiple operations |
| **Parallel processing** | Concurrent processing |
| **Load balancing** | Evenly distributes load |
| **Queue-based** | Absorb traffic spikes |

---

## 2. CAP Theorem

### 2.1 Three properties

CAP Theorem says that in a distributed system you can only guarantee **2 out of 3** properties:

```
         Consistency (C)
              ╱ ╲
             ╱   ╲
            ╱     ╲
           ╱  Chọn  ╲
          ╱   2 / 3   ╲
         ╱             ╲
Availability (A) ──── Partition Tolerance (P)
```

| Attributes | Meaning |
|-----------|---------|
| **Consistency** | Every read receives the latest data or error |
| **Availability** | Every request receives a response (no latest guarantee) |
| **Partition Tolerance** | The system still operates even though the network is divided |

### 2.2 Why choose?

In practice, **network partition is always possible** (P is required), so you really choose between:

```
CP System (Consistency + Partition Tolerance):
  → Khi network partition xảy ra, từ chối request thay vì trả data cũ
  → Ví dụ: Banking system, Inventory system
  → Tools: MongoDB (default), HBase, Redis

AP System (Availability + Partition Tolerance):
  → Khi network partition xảy ra, trả data có thể cũ nhưng luôn phản hồi
  → Ví dụ: Social media feed, DNS, Shopping cart
  → Tools: Cassandra, DynamoDB, CouchDB
```

### 2.3 Practical example

**Scenario: Bank money transfer**

```
User A chuyển 1M VNĐ cho User B

CP System (Ngân hàng chọn cách này):
  Network partition → "Giao dịch tạm thời không khả dụng"
  → Tốt hơn là trừ tiền A nhưng chưa cộng tiền B

AP System (Không phù hợp):
  Network partition → Vẫn xử lý giao dịch
  → Rủi ro: Tiền bị trùng lặp hoặc mất
```

**Scenario: Facebook News Feed**

```
AP System (Facebook chọn cách này):
  Network partition → Hiển thị feed cũ hơn 1-2 giây
  → Chấp nhận được, user không nhận ra

CP System (Không phù hợp):
  Network partition → "Service unavailable"
  → 2 tỷ users không xem được feed → thảm họa
```

---

## 3. Consistency Patterns

### 3.1 Strong Consistency

```
Write → Tất cả replicas đồng bộ → Rồi mới return success

Client → Write(x=5) → Master ─── Sync ──► Replica 1 (x=5) ✓
                              └── Sync ──► Replica 2 (x=5) ✓
                              └── Return success

Bất kỳ Read nào sau đó đều trả về x=5
```

**Use cases:** Banking, Inventory, Booking systems
**Trade-off:** Higher Latency (must wait for all replicas)

### 3.2 Eventual Consistency

```
Write → Return success ngay → Replicas sẽ đồng bộ sau

Client → Write(x=5) → Master (x=5) → Return success ngay
                              │
                     Async ───┼──► Replica 1 (x=5)  (sau 10ms)
                              └──► Replica 2 (x=5)  (sau 50ms)

Read ngay sau write: có thể trả về x=3 (giá trị cũ)
Read sau 50ms: x=5 (đã đồng bộ)
```

**Use cases:** Social media, DNS, Email, Shopping cart
**Trade-off:** Can read old data for a short time

### 3.3 Weak Consistency

```
Write → Không đảm bảo read sẽ thấy write

Ví dụ: Video call
  Khi mất kết nối 3 giây, bạn KHÔNG nghe lại
  những gì đã nói trong 3 giây đó
```

**Use cases:** VoIP, Video chat, Real-time gaming, Live streaming

### 3.4 Compare

| Pattern | Latency | Data Freshness | Use Case |
|--------|---------|-----------|----------|
| **Strong** | Cao | Always newest | Banking, Booking |
| **Eventual** | Low | Finally will be newest | Social media, Analytics |
| **Weak** | Very low | Data may be lost | VoIP, Gaming |

---

## 4. Availability Patterns

### 4.1 Failover

#### Active-Passive (Master-Slave)

```
Normal:
  Client → Active Server (xử lý traffic)
           Passive Server (standby, nhận heartbeat)

Failover:
  Active Server ✗ (crash)
  Passive Server → Trở thành Active
  Client → New Active Server
```

- **Recovery time:** Hot standby = seconds, Cold standby = minutes
- **Disadvantages:** Passive server idle (waste of resources)

#### Active-Active (Master-Master)

```
Normal:
  Client ──► Active Server 1 (xử lý 50% traffic)
         └─► Active Server 2 (xử lý 50% traffic)

Failover:
  Server 1 ✗ (crash)
  Server 2 → Xử lý 100% traffic
```

- **Advantages:** Make better use of resources
- **Disadvantages:** More complicated, need to handle data conflicts

### 4.2 Replication

```
Master-Slave Replication:
  Master ──write──► Slave 1 (read)
         └─write──► Slave 2 (read)
         └─write──► Slave 3 (read)

Master-Master Replication:
  Master 1 ◄──sync──► Master 2
  (read/write)         (read/write)
```

---

## 5. Availability in Numbers

### 5.1 Common SLA table

| Availability | Downtime/year | Downtime/month | Downtime/week |
|-------------|-------------|---------------|--------------|
| 99% (two 9s) | 3.65 days | 7.31 hours | 1.68 hours |
| 99.9% (three 9s) | 8.77 hours | 43.83 minutes | 10.08 minutes |
| 99.99% (four 9s) | 52.6 minutes | 4.38 minutes | 1.01 minutes |
| 99.999% (five 9s) | 5.26 minutes | 26.3 seconds | 6.05 seconds |

### 5.2 Calculate System Availability

**Serial components (both need to work):**

```
Availability(total) = Availability(A) × Availability(B)

Ví dụ: Web Server (99.9%) → Database (99.9%)
Total = 99.9% × 99.9% = 99.8%
```

**Parallel components (only one operation needed):**

```
Availability(total) = 1 - (1 - Av(A)) × (1 - Av(B))

Ví dụ: Server 1 (99.9%) || Server 2 (99.9%)
Total = 1 - (0.001 × 0.001) = 99.9999%
```

### 5.3 Design for High Availability

```
Low HA:     Client → Server → Database
            Availability ≈ 99.9% × 99.9% = 99.8%

High HA:    Client → LB → Server 1 ──► DB Master
                        → Server 2 ──► DB Replica
            LB: 99.99%
            Servers: 1-(1-0.999)² = 99.9999%
            DB: 1-(1-0.999)² = 99.9999%
            Total ≈ 99.99%
```

---

## 6. SLI, SLO, SLA

### 6.1 Definition

```
SLI (Service Level Indicator):
  → Metric đo lường: latency p99, error rate, uptime
  → "Hiện tại response time p99 là 180ms"

SLO (Service Level Objective):
  → Mục tiêu internal team đặt ra
  → "Response time p99 phải < 200ms"

SLA (Service Level Agreement):
  → Hợp đồng với khách hàng
  → "Nếu uptime < 99.9%, hoàn tiền 10%"
```

### 6.2 Practical example

```
AWS S3 SLA:
  99.9% availability → Credit 10%
  99.0% availability → Credit 25%
  < 99.0%            → Credit 100%
```

---

## 7. Summary

| Concepts | Key Points |
|--------|-----------|
| Latency | Processing time for 1 request, target < 100-200ms |
| Throughput | Number of requests/second, scaled by horizontal scaling |
| CAP Theorem | Select CP (consistency) or AP (availability) |
| Consistency | Strong → Eventual → Weak (trade-off latency) |
| Availability | Measured in "9s", increased in redundancy |
| SLA/SLO/SLI | Commitment → Goal → Metric |

---

## Exercises

1. **CAP Analysis:** Should the airline ticket booking management system choose CP or AP? Explain why and the consequences of each choice.

2. **Availability Calculation:** The system includes: LB (99.99%) → 3 parallel App Servers (each server 99.9%) → 2 parallel DB servers (each DB 99.95%). Calculate overall availability.

3. **Consistency Pattern:** For e-commerce system, determine the appropriate consistency pattern for: (a) Inventory count, (b) Product reviews, (c) User profile picture, (d) Payment transaction.
