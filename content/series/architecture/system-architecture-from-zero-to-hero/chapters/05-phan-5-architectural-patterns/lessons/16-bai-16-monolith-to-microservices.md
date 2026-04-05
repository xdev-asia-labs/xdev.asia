---
id: 019d8a21-c110-7001-d001-e1f2a3b4c516
title: "Bài 16: Monolith to Microservices"
slug: bai-16-monolith-to-microservices
description: >-
  Monolith architecture ưu nhược điểm. Microservices principles:
  Single Responsibility, Bounded Context. Strangler Fig pattern.
  Service decomposition strategies. Khi nào nên và KHÔNG nên
  dùng Microservices. Monolith → Modular Monolith → Microservices.
duration_minutes: 160
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 5: Architectural Patterns"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6259" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6259)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1096" cy="198" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1092" cy="254" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1088" cy="50" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1084" cy="106" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1080" cy="162" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="158" x2="1100" y2="238" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="188" x2="1050" y2="258" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="986.5788383248864,141.5 986.5788383248864,174.5 958,191 929.4211616751136,174.5 929.4211616751135,141.5 958,125" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ Kiến trúc — Bài 16</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 16: Monolith to Microservices</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Architectural Patterns</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

"Microservices" là buzzword được hype nhất trong kiến trúc phần mềm. Nhưng bắt đầu với microservices thường là sai lầm. Bài này phân tích khi nào nên dùng kiến trúc nào, và cách migrate an toàn.

---

## 1. Monolith Architecture

### 1.1 Monolith là gì?

```
┌─────────────────────────────────────────┐
│            Monolith Application         │
│                                          │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐│
│  │  User    │ │  Order   │ │ Payment  ││
│  │  Module  │ │  Module  │ │  Module  ││
│  └────┬─────┘ └────┬─────┘ └────┬─────┘│
│       │            │            │       │
│  ┌────▼────────────▼────────────▼─────┐ │
│  │         Shared Database            │ │
│  └────────────────────────────────────┘ │
│                                          │
│  1 deployable unit                      │
│  1 process                              │
│  1 database                              │
└─────────────────────────────────────────┘
```

### 1.2 Ưu nhược điểm

```
Ưu điểm:
  ✅ Simple development & debugging
  ✅ Simple testing (1 app)
  ✅ Simple deployment (1 artifact)
  ✅ No network overhead (function calls)
  ✅ ACID transactions dễ dàng
  ✅ Phù hợp team nhỏ (< 10 devs)

Nhược điểm:
  ❌ Code base lớn → khó hiểu
  ❌ Build/deploy chậm
  ❌ Scale phải scale TOÀN BỘ app
  ❌ Technology lock-in (1 language/framework)
  ❌ 1 module crash → toàn bộ app crash
  ❌ Team lớn → merge conflicts, coordination overhead
```

---

## 2. Modular Monolith

```
┌─────────────────────────────────────────────┐
│           Modular Monolith                   │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  User    │  │  Order   │  │ Payment  │  │
│  │  Module  │  │  Module  │  │  Module  │  │
│  │          │  │          │  │          │  │
│  │ Public   │  │ Public   │  │ Public   │  │
│  │ API only │  │ API only │  │ API only │  │
│  │          │  │          │  │          │  │
│  │ Private  │  │ Private  │  │ Private  │  │
│  │ DB schema│  │ DB schema│  │ DB schema│  │
│  └──────────┘  └──────────┘  └──────────┘  │
│                                              │
│  1 deployable, nhưng modules tách biệt      │
│  Module giao tiếp qua PUBLIC interfaces     │
│  Không shared database tables               │
└─────────────────────────────────────────────┘

→ 80% benefits của Microservices
→ 20% complexity
→ Best starting point cho hầu hết projects
```

---

## 3. Microservices Architecture

### 3.1 Principles

```
1. Single Responsibility:
   Mỗi service làm 1 việc, làm tốt

2. Bounded Context (DDD):
   Mỗi service sở hữu domain riêng
   e.g., "Order" trong Order Service ≠ "Order" trong Shipping

3. Independently Deployable:
   Deploy service A mà không ảnh hưởng service B

4. Decentralized Data Management:
   Mỗi service có database riêng
   KHÔNG shared database!

5. Design for Failure:
   Assume services WILL fail
   Circuit breakers, retries, fallbacks

6. Smart Endpoints, Dumb Pipes:
   Logic trong services, không trong message bus
```

### 3.2 Architecture

```
                          API Gateway
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
        ┌──────────┐   ┌──────────┐   ┌──────────┐
        │  User    │   │  Order   │   │ Payment  │
        │  Service │   │  Service │   │  Service │
        │          │   │          │   │          │
        │ REST API │   │ REST API │   │ gRPC API │
        │          │   │          │   │          │
        │ Own DB   │   │ Own DB   │   │ Own DB   │
        │(Postgres)│   │(MongoDB) │   │(Postgres)│
        └──────────┘   └──────────┘   └──────────┘
              │               │               │
              └───────────────┼───────────────┘
                              │
                         Message Bus
                        (Kafka/RabbitMQ)
```

---

## 4. Khi nào KHÔNG nên Microservices

```
❌ Team < 10 developers
❌ Startup giai đoạn đầu (chưa rõ domain boundaries)
❌ Simple CRUD application
❌ Không có DevOps maturity (CI/CD, monitoring, container)
❌ Team chưa có kinh nghiệm distributed systems
❌ Tight deadline, cần ship nhanh

Microservices Tax:
  - Network latency giữa services
  - Distributed transactions (phức tạp!)
  - Service discovery, load balancing
  - Distributed tracing, centralized logging
  - Container orchestration (K8s)
  - Data consistency challenges
  - Testing complexity (integration tests)
  
  → Nếu team < 5 người, chi phí này > lợi ích
```

---

## 5. Migration: Strangler Fig Pattern

### 5.1 Concept

```
Giống cây sung bóp nghẹt (strangler fig):
  Cây mới mọc BỌC QUANH cây cũ
  Dần dần thay thế
  Cây cũ chết, cây mới đứng vững

Phase 1: Monolith + New Service
  ┌──────────────────────┐
  │  API Gateway/Proxy   │
  └──────┬───────────────┘
         │
    ┌────▼────┐    ┌──────────┐
    │Monolith │    │ New User │
    │(all)    │    │ Service  │
    └─────────┘    └──────────┘
  
  /api/users → New Service
  /api/*     → Monolith

Phase 2: More Services
  ┌──────────────────────┐
  │  API Gateway/Proxy   │
  └──────┬───────────────┘
         │
    ┌────▼────┐  ┌──────────┐  ┌──────────┐
    │Monolith │  │ User     │  │ Order    │
    │(shrink) │  │ Service  │  │ Service  │
    └─────────┘  └──────────┘  └──────────┘

Phase 3: Monolith eliminated
  ┌──────────────────────┐
  │  API Gateway         │
  └──────┬───────────────┘
         │
  ┌──────▼──┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
  │ User   │ │ Order   │ │Payment  │ │Inventory│
  │Service │ │ Service │ │Service  │ │Service  │
  └────────┘ └─────────┘ └─────────┘ └─────────┘
```

### 5.2 Steps

```
1. Identify Boundaries:
   DDD → Bounded Contexts → Service boundaries
   Tìm module ÍT coupling nhất → Extract trước

2. Build Proxy:
   Đặt API Gateway/Proxy trước Monolith
   Route traffic theo path

3. Extract Service:
   a) Copy code sang service mới
   b) Tạo database riêng
   c) Migrate data
   d) Route traffic → new service
   e) Remove old code từ monolith

4. Repeat:
   Extract tiếp service khác
   Monolith thu nhỏ dần
```

---

## 6. Service Decomposition Strategies

```
1. By Business Capability:
   Marketing → Marketing Service
   Sales → Sales Service
   Fulfillment → Fulfillment Service

2. By Subdomain (DDD):
   Core domain → Core services (in-house)
   Supporting domain → Supporting services
   Generic domain → Buy/SaaS (auth, email, payment)

3. By Data Ownership:
   User data → User Service
   Product data → Catalog Service
   Order data → Order Service

4. By Team:
   Team A owns Service A
   Team B owns Service B
   Conway's Law: System mirrors org structure
```

---

## So sánh tổng hợp

| Tiêu chí | Monolith | Modular Monolith | Microservices |
|----------|----------|------------------|---------------|
| Complexity | Low | Medium | High |
| Deployment | Simple | Simple | Complex |
| Scaling | Vertical | Vertical | Horizontal/service |
| Tech diversity | Single stack | Single stack | Polyglot |
| Team size | 1-15 | 5-30 | 20+ |
| Data consistency | ACID | ACID | Eventual |
| Recommended start | ✅ | ✅✅ | ❌ |

---

## Bài tập

1. **Architecture Decision:** Startup fintech, team 6 developers, MVP cần ship trong 3 tháng. Features: user auth, wallet, transactions, KYC. Chọn Monolith, Modular Monolith, hay Microservices? Giải thích.

2. **Strangler Fig Plan:** Monolith e-commerce (15 devs) có modules: Auth, User, Product, Order, Payment, Inventory, Notification, Analytics. Viết migration plan: extract service nào trước, tại sao?

3. **Bounded Context:** Từ "Product" có nghĩa khác nhau trong Catalog (name, description, images), Inventory (stock, warehouse), Pricing (cost, discount, margin). Vẽ bounded context map.
