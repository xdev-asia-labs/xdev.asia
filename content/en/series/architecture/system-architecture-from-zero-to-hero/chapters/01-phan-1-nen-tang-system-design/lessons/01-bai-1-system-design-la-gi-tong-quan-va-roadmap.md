---
id: 019d8a21-c101-7001-d001-e1f2a3b4c501
title: 'Lesson 1: What is System Design? - Overview and Roadmap'
slug: bai-1-system-design-la-gi-tong-quan-va-roadmap
description: >-
  Introducing System Design, why system design is needed, how to approach a
  system design problem (requirements → high-level design → deep dive →
  bottlenecks). Compare Monolith vs Distributed Systems. Learning roadmap and
  necessary resources.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 'Part 1: System Design Foundation'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'System Architecture: From Zero to Hero'
  slug: system-architecture-from-zero-to-hero
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1060" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1060)"/>

  <!-- Decorations -->
  <g>
    <circle cx="740" cy="210" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1020" cy="70" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="660" cy="130" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="170" x2="1100" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="200" x2="1050" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="991.650635094611,157.5 991.650635094611,182.5 970,195 948.349364905389,182.5 948.349364905389,157.5 970,145" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ Architecture — Lesson 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 1: What is System Design? - Overview and</tspan>
      <tspan x="60" dy="42">Roadmap</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: System Design Foundation</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

You can write a simple CRUD application in a few hours. But when that application needs to serve **millions of users**, handle **thousands of requests/second**, and ensure **99.99% uptime** — that's when you need **System Design**.

System Design is not just knowledge for interviews. It's a core skill that helps you:

- Build scalable systems
- Make the right architectural decisions
- Avoid costly mistakes (refactor the entire system)
- Communicate effectively with the team about technical decisions

---

## 1. What is System Design?

### 1.1 Definition

**System Design** is the process of determining the architecture, components, modules, interfaces and data for a software system to satisfy specific requirements.

```
System Design = Architecture + Components + Data Flow + Trade-offs
```

### 1.2 Why is System Design important?

| Phase | No System Design | Yes System Design |
|-----------|---------------------|-----------------|
| **Prototype** | Fast, simple | Have a clear plan |
| **100 users** | Runs well | Runs well |
| **10K users** | Slow start | Still stable |
| **1M users** | System crash, had to rewrite | Scale according to plan |
| **Cost** | Rewrite = 10x initial cost | Incremental improvements |

### 1.3 System Design vs Coding

```
Coding:          "Làm sao để implement feature X?"
System Design:   "Làm sao để feature X hoạt động với 10M users,
                  99.99% uptime, <100ms latency?"
```

---

## 2. How to approach the System Design problem

### 2.1 Framework 4 steps

When faced with any system design problem, use the following framework:

```
┌─────────────────────────────────────────────────────┐
│  Step 1: Requirements & Constraints                  │
│  ┌─────────────────────────────────────────────┐    │
│  │ Functional Requirements (FR)                 │    │
│  │ Non-functional Requirements (NFR)            │    │
│  │ Constraints & Assumptions                    │    │
│  └─────────────────────────────────────────────┘    │
│                      ▼                               │
│  Step 2: High-Level Design                           │
│  ┌─────────────────────────────────────────────┐    │
│  │ Main components & connections                │    │
│  │ Data flow diagrams                           │    │
│  │ API design (endpoints)                       │    │
│  └─────────────────────────────────────────────┘    │
│                      ▼                               │
│  Step 3: Deep Dive into Core Components              │
│  ┌─────────────────────────────────────────────┐    │
│  │ Database schema                              │    │
│  │ Algorithm choices                            │    │
│  │ Data structures                              │    │
│  └─────────────────────────────────────────────┘    │
│                      ▼                               │
│  Step 4: Identify & Resolve Bottlenecks              │
│  ┌─────────────────────────────────────────────┐    │
│  │ Single points of failure                     │    │
│  │ Scaling strategies                           │    │
│  │ Monitoring & alerting                        │    │
│  └─────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

### 2.2 Example: Designing a news reading system

**Step 1 - Requirements:**
- FR: User views article list, reads details, searches, comments
- NFR: 10M DAYS, <200ms latency, 99.9% availability
- Constraints: Read-heavy (100:1 read/write ratio)

**Step 2 - High-Level Design:**

```
Users → CDN → Load Balancer → Web Servers → Cache → Database
                    │
                    └→ Search Service (Elasticsearch)
```

**Step 3 - Deep Dive:**
- Database: PostgreSQL cho articles, Redis cho cache
- Search: Elasticsearch with full-text index
- CDN: Cache static assets + rendered HTML

**Step 4 - Bottlenecks:**
- Database read bottleneck → Add read replicas
- Hot articles → Aggressive caching with TTL
- Search latency → Elasticsearch cluster scaling

---

## 3. Monolith vs Distributed Systems

### 3.1 Monolithic Architecture

```
┌─────────────────────────────────────┐
│         Monolithic Application       │
│  ┌─────┬─────┬─────┬─────┬──────┐  │
│  │ UI  │User │Order│Pay  │Search│  │
│  │Layer│ Svc │ Svc │ Svc │ Svc  │  │
│  └─────┴─────┴─────┴─────┴──────┘  │
│  ┌─────────────────────────────┐    │
│  │      Shared Database         │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

**Advantage:**
- Simple to initially develop
- Easy to deploy (1 artifact)
- Easy to debug (single process)
- No network latency between components

**Disadvantages:**
- Difficult to scale each individual part
- A small error can crash the entire system
- Deploy is slow when the codebase is large
- Technology lock-in (1 language/framework)

### 3.2 Distributed Systems

```
┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
│ User   │  │ Order  │  │Payment │  │ Search │
│Service │  │Service │  │Service │  │Service │
│  DB    │  │  DB    │  │  DB    │  │  DB    │
└───┬────┘  └───┬────┘  └───┬────┘  └───┬────┘
    │           │           │           │
    └───────────┴─────┬─────┴───────────┘
                      │
              Message Queue / API Gateway
```

**Advantage:**
- Scale each service independently
- Fault isolation (1 service failure ≠ whole system failure)
- Team autonomy (each team owns 1 service)
- Technology diversity

**Disadvantages:**
- Much more complicated
- Network latency between services
- Data consistency challenges
- Operational overhead (monitoring, debugging)

### 3.3 When to choose what?

| Criteria | Monolith | Distributed |
|----------|----------|-------------|
| **Team size** | < 10 developers | > 10 developers |
| **Traffic** | < 10K RPS | > 10K RPS |
| **Phase** | MVP, Startup early | Growth, Scale |
| **Complexity** | Moderate | High |
| **Deploy frequency** | Weekly/Monthly | Daily/Hourly |

> **Advice:** Most systems should start with Monolith, then branch out to distributed as needed. Don't over-engineer from the beginning!

---

## 4. Core concepts to grasp

### 4.1 System Design Map

```
                    System Design
                         │
    ┌────────────────────┼────────────────────┐
    │                    │                    │
Fundamentals        Components           Patterns
    │                    │                    │
├─ Scalability      ├─ Load Balancer    ├─ Microservices
├─ Availability     ├─ CDN              ├─ Event-Driven
├─ Consistency      ├─ Cache            ├─ CQRS
├─ Latency          ├─ Database         ├─ Saga
├─ Throughput       ├─ Message Queue    ├─ Circuit Breaker
├─ CAP Theorem      ├─ API Gateway      ├─ DDD
└─ Networking       ├─ Reverse Proxy    └─ Serverless
                    └─ Search Engine
```

### 4.2 Learning Roadmap

```
Tháng 1-2: Fundamentals
  ├─ Scalability, Availability, Consistency
  ├─ CAP Theorem
  └─ Networking basics

Tháng 3-4: Infrastructure Components
  ├─ Load Balancer, CDN, Cache
  ├─ Database (SQL, NoSQL, Sharding)
  └─ Message Queues

Tháng 5-6: Architectural Patterns
  ├─ Microservices, Event-Driven
  ├─ CQRS, Saga, DDD
  └─ Serverless

Tháng 7-8: Case Studies & Practice
  ├─ Design URL Shortener
  ├─ Design Chat System
  ├─ Design News Feed
  └─ Design Video Streaming
```

---

## 5. Back-of-the-Envelope Calculations

An important skill in System Design is rapid estimation:

### 5.1 Powers of Two

| Power | Exact Value | Approx | Bytes |
|-------|-------------|--------|-------|
| 10 | 1,024 | 1 Thousand | 1 KB |
| 20 | 1,048,576 | 1 Million | 1MB |
| 30 | 1,073,741,824 | 1 Billion | 1GB |
| 40 | 1,099,511,627,776 | 1 Trillion | 1 TB |

### 5.2 Latency Numbers Every Programmer Should Know

```
L1 cache reference:                    0.5 ns
L2 cache reference:                      7 ns
Main memory reference:                 100 ns
SSD random read:                   150,000 ns  =  150 μs
HDD seek:                      10,000,000 ns  =   10 ms
Send 1 MB over 1 Gbps network: 10,000,000 ns  =   10 ms
Read 1 MB from SSD:             1,000,000 ns  =    1 ms
Read 1 MB from HDD:            30,000,000 ns  =   30 ms
Roundtrip same datacenter:        500,000 ns  =  500 μs
Roundtrip CA → Netherlands:   150,000,000 ns  =  150 ms
```

### 5.3 Example: Storage estimates for Twitter

```
Giả sử:
- 500M users, 200M DAU
- Mỗi user tweet 2 lần/ngày
- Mỗi tweet: 140 chars * 2 bytes = 280 bytes
- 10% tweets có media (ảnh 200KB trung bình)

Tweets/ngày: 200M * 2 = 400M tweets
Text storage/ngày: 400M * 280B = 112 GB/ngày
Media storage/ngày: 40M * 200KB = 8 TB/ngày

Storage/năm: (112GB + 8TB) * 365 ≈ 3 PB/năm
```

---

## 6. Summary

| Topics | Key Takeaway |
|--------|-------------|
| System Design | Design systems that satisfy requirements on a large scale |
| Frameworks | Requirements → High-Level → Deep Dive → Bottlenecks |
| Monolith | Start with monolith, separate as needed |
| Distributed | More complicated but allows scaling |
| Estimation | Always estimate before designing |

---

## Exercises

1. **Estimation Practice:** Estimated storage needed for YouTube in 1 year (500M DAU, 5M videos uploaded/day, average 50MB/video after transcoding)

2. **Monolith vs Distributed:** You are building a hotel booking application for the Vietnamese market (5M users). Will you choose Monolith or Distributed? Explain why.

3. **System Design Framework:** Apply a 4-step framework to sketch the design for the **restaurant reservation management system** (50K restaurants, 1M users).
