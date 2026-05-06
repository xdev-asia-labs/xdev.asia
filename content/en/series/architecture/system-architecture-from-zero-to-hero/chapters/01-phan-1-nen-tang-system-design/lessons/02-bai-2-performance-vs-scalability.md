---
id: 019d8a21-c102-7001-d001-e1f2a3b4c502
title: 'Lesson 2: Performance vs Scalability - Vertical & Horizontal Scaling'
slug: bai-2-performance-vs-scalability-vertical-horizontal-scaling
description: >-
  Distinguish between Performance and Scalability. Vertical Scaling (Scale Up)
  vs Horizontal Scaling (Scale Out). Stateless vs Stateful architecture. When to
  choose which scaling strategy? Back-of-the-envelope calculations and basic
  capacity planning.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 'Part 1: System Design Foundation'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'System Architecture: From Zero to Hero'
  slug: system-architecture-from-zero-to-hero
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5045" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5045)"/>

  <!-- Decorations -->
  <g>
    <circle cx="774" cy="112" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="948" cy="226" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="622" cy="80" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="796" cy="194" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="48" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="152" x2="1100" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="182" x2="1050" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="925.3826859021799,88.5 925.3826859021799,115.5 902,129 878.6173140978201,115.5 878.6173140978201,88.5 902,75" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ Architecture — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 2: Performance vs Scalability -</tspan>
      <tspan x="60" dy="42">Vertical & Horizontal Scaling</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: System Design Foundation</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

When the system starts to slow down, you are faced with two questions:
- **Performance:** How to make the system faster for a user?
- **Scalability:** How can the system serve more users?

These two concepts are related but different. Understanding the difference is the first step to effective system design.

---

## 1. Performance vs Scalability

### 1.1 Definition

```
Performance Problem:   Hệ thống chậm cho 1 user
Scalability Problem:   Hệ thống nhanh cho 1 user, nhưng chậm khi nhiều users
```

| Features | Performance | Scalability |
|----------|-------------|-------------|
| **Measured by** | Response time, throughput | Increased load handling capacity |
| **Example** | API returns in 50ms | From 100 → 100K RPS |
| **Solution** | Optimize code, algorithm | Add resources, distribute load |
| **When will it be fixed** | Always optimized | When the load exceeds the capacity |

### 1.2 Practical example

```
Scenario: API lấy danh sách sản phẩm

Performance Issue:
  - 1 user request → 5 giây (do query N+1, không có index)
  - Fix: Tối ưu query, thêm database index → 50ms

Scalability Issue:
  - 1 user → 50ms ✓
  - 1000 users cùng lúc → 3 giây (server quá tải)
  - Fix: Thêm servers, caching, load balancer
```

---

## 2. Vertical Scaling (Scale Up)

### 2.1 Concepts

Vertical Scaling is to increase the power of **a single server**: add CPU, RAM, SSD, network bandwidth.

```
Trước:                          Sau:
┌──────────────┐               ┌──────────────────┐
│   Server     │               │     Server       │
│  4 CPU       │    Scale Up   │  32 CPU          │
│  8 GB RAM    │  ──────────►  │  128 GB RAM      │
│  256 GB SSD  │               │  2 TB NVMe SSD   │
└──────────────┘               └──────────────────┘
```

### 2.2 Advantages and disadvantages

| Advantages | Disadvantages |
|--------|-----------|
| Simple, no need to change code | There is a physical limit (hardware limit) |
| No network latency | Single Point of Failure |
| Simple data consistency | Costs increase exponentially |
| No need for distributed coordination | Downtime when upgrading |

### 2.3 Vertical Scaling Cost (e.g. AWS EC2)

```
t3.micro    (2 vCPU, 1GB):    ~$8/tháng
t3.xlarge   (4 vCPU, 16GB):   ~$120/tháng      (15x giá, 16x RAM)
r5.4xlarge  (16 vCPU, 128GB): ~$730/tháng      (91x giá, 128x RAM)
r5.24xlarge (96 vCPU, 768GB): ~$4,400/tháng    (550x giá, 768x RAM)
```

> Costs increase **much faster** than performance gains. This is why vertical scaling has practical limits.

---

## 3. Horizontal Scaling (Scale Out)

### 3.1 Concepts

Horizontal Scaling is adding **more servers** to share the load.

```
Trước:                     Sau:
                          ┌──────────────┐
                          │  Load        │
                          │  Balancer    │
                          └──────┬───────┘
                      ┌──────────┼──────────┐
┌──────────┐         ┌──┴──┐  ┌──┴──┐  ┌──┴──┐
│  Server  │  ────►  │ S1  │  │ S2  │  │ S3  │
│  (1 máy) │         │     │  │     │  │     │
└──────────┘         └─────┘  └─────┘  └─────┘
```

### 3.2 Advantages and disadvantages

| Advantages | Disadvantages |
|--------|-----------|
| Almost unlimited scaling | Much more complicated |
| No single point of failure | Need load balancer |
| Cost increases linearly | Data consistency challenges |
| Scalable on-demand | Need stateless design |

### 3.3 Horizontal Scaling Costs

```
1  x t3.xlarge:  $120/tháng   → 1x capacity
4  x t3.xlarge:  $480/tháng   → ~4x capacity
10 x t3.xlarge:  $1,200/tháng → ~10x capacity
```

> Cost increases **linearly** with capacity — much more efficient than vertical scaling.

---

## 4. Stateless vs Stateful Architecture

### 4.1 Why is it important?

For horizontal scaling to work, servers must be **stateless** — not storing user state on the server.

### 4.2 Stateful Server (Anti-pattern for scaling)

```
┌──────────┐     Request 1     ┌──────────┐
│  User A  │ ──────────────►   │ Server 1 │  ← Session: {userId: A, cart: [...]}
└──────────┘                   └──────────┘

                Request 2
User A ──────────────────────► Server 2   ← Không có session của User A!
                                            → ERROR: "Please login again"
```

**Problem:** If the next request goes to another server, the session is lost.

### 4.3 Stateless Server (Best practice)

```
┌──────────┐                    ┌──────────┐
│  User A  │  Request + Token   │ Server 1 │
└──────────┘ ──────────────►    └──────────┘ ──► Shared Session Store
                                                  (Redis / Database)
             Request + Token    ┌──────────┐        │
             ──────────────►    │ Server 2 │ ──────►│
                                └──────────┘
```

**Solution:** Save session to **shared store** (Redis, database), server only handles logic.

### 4.4 Ways to handle state

| Method | Description | Advantages | Disadvantages |
|-------------|-------|--------|-----------|
| **Sticky Sessions** | LB sends the user to the same server | Simple | Server failure = lost session |
| **Session Store (Redis)** | Save sessions in Redis | Fast, scalable | Add component |
| **JWT Token** | State in token | No need for server store | Token size is large, difficult to revoke |
| **Database** | Save session in DB | Persistent | Slower than Redis |

---

## 5. Capacity Planning

### 5.1 Procedures

```
1. Xác định metrics hiện tại
   └─ QPS, storage, bandwidth

2. Dự đoán growth
   └─ User growth rate, feature expansion

3. Tính capacity cần thiết
   └─ Servers, storage, bandwidth

4. Thêm headroom (20-30%)
   └─ Buffer cho traffic spike
```

### 5.2 Example: Capacity Planning for E-commerce

```
Dữ kiện:
  - 1M DAU (Daily Active Users)
  - Peak traffic: 3x average
  - Average session: 10 pages, 2 API calls/page
  - Target response time: < 200ms

Tính toán:
  Average QPS = 1M * 20 requests / 86,400s ≈ 230 QPS
  Peak QPS = 230 * 3 = 690 QPS

  Nếu 1 server xử lý 200 QPS:
  Servers cần = 690 / 200 = 3.45 → 4 servers
  + Headroom 30%: 4 * 1.3 = 5.2 → 6 servers

  Tối thiểu: 6 application servers + 1 load balancer
```

---

## 6. Scaling Database

### 6.1 Read Scaling

```
                    ┌────────────┐
       Writes ────► │   Master   │
                    │  Database  │
                    └──────┬─────┘
                    Replication
               ┌───────────┼───────────┐
          ┌────┴────┐ ┌────┴────┐ ┌────┴────┐
Reads ──► │ Replica │ │ Replica │ │ Replica │
          │   1     │ │   2     │ │   3     │
          └─────────┘ └─────────┘ └─────────┘
```

### 6.2 Write Scaling

```
       ┌──────────────────────────────┐
       │        Shard Router          │
       └──────┬───────┬───────┬───────┘
         ┌────┴──┐ ┌──┴───┐ ┌┴──────┐
         │Shard 1│ │Shard 2│ │Shard 3│
         │ A-H   │ │ I-P   │ │ Q-Z   │
         └───────┘ └───────┘ └───────┘
```

---

## 7. Real-world Scaling Examples

### 7.1 Netflix

```
Phase 1 (2007): Monolith + Oracle Database
Phase 2 (2008-2012): Migration to AWS + Microservices
Phase 3 (2012+): 
  - 700+ microservices
  - Horizontal scaling trên AWS
  - Custom load balancing (Zuul)
  - Cache layer (EVCache)
  - 200M+ subscribers globally
```

### 7.2 Instagram

```
2010: 2 servers (1 app + 1 database)
2011: Scale to 14M users
  - 3 Nginx load balancers
  - 25 Django app servers
  - 12 PostgreSQL servers (sharded)
  - 6 Redis servers
  - 4 Memcached servers
2012: Facebook acquisition, 100M+ users
  - Continued horizontal scaling on Facebook infra
```

---

## 8. Summary

| Concepts | Key Takeaway |
|--------|-------------|
| Performance | Optimized for 1 user (code, algorithm, cache) |
| Scalability | Handling many users (more resources) |
| Vertical Scaling | Upgrading the configuration of 1 machine - simple but limited |
| Horizontal Scaling | Add more machines - complex but almost unlimited |
| Stateless | Prerequisites for horizontal scaling |
| Capacity Planning | Always calculate before scaling |

> **Rule of thumb:** Start simple (vertical), plan for horizontal. Don't scale before you need to, but design so you can scale when you need to.

---

## Exercises

1. **Capacity Planning:** You are building a food delivery app for 500K DAU. Each user averages 5 orders/week, each order generates 10 API calls. Calculate Peak QPS and number of servers needed (each server handles 300 QPS).

2. **Stateless Design:** The current system stores the shopping cart in a session on the server. Redesign to be stateless, support horizontal scaling.

3. **Scaling Decision:** A SaaS platform with 50K users, average response time 800ms (target < 200ms). Current server: 4 vCPU, 16GB RAM, CPU usage 85%. Should you vertical scale or horizontal scale? Explain.
