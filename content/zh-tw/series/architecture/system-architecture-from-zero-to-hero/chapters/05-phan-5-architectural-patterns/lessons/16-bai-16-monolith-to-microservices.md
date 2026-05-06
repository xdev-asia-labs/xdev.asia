---
id: 019d8a21-c110-7001-d001-e1f2a3b4c516
title: 第 16 課：從整體到微服務
slug: bai-16-monolith-to-microservices
description: >-
  整體架構的優點和缺點。微服務原則：單一職責、有界脈絡。絞殺者無花果圖案。服務分解策略。何時應該使用微服務，何時不應該使用微服務。單體應用 → 模組化單體應用
  → 微服務。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 16
section_title: 第 5 部分：架構模式
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ 建築 — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：從整體到微服務</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：架構模式</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

「微服務」是軟體架構中最熱門的流行詞。但從微服務開始往往是個錯誤。本文分析何時使用哪種架構，以及如何安全遷移。

---

## 1.整體架構

### 1.1 什麼是單體架構？

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

### 1.2 優點和缺點

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

## 2. 模組化整體架構

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

## 3.微服務架構

### 3.1 原則

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

### 3.2 架構

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

## 4. 何時不使用微服務

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

## 5. 遷移：絞殺者無花果圖案

### 5.1 概念

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

### 5.2 步驟

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

## 6. 服務分解策略

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

## 對比總結

|標準|巨石|模組化整體|微服務|
|----------|----------|------------|---------------|
|複雜性 |低|中|高|
|部署|簡單|簡單|複雜|
|縮放 |垂直|垂直|水平/服務 |
|技術多樣性 |單疊|單疊 |多語言 |
|團隊規模| 1-15 | 1-15 5-30 | 20+ |
|資料一致性 |酸性|酸性|最終|
|推薦入手| ✅ | ✅✅ | ❌ |

---

## 練習

1. **架構決策：** 金融科技新創公司，6 名開發人員團隊，MVP 需要在 3 個月內交付。功能：用戶身份驗證、錢包、交易、KYC。選擇整體式、模組化整體式還是微服務？解釋。

2. **Strangler Fig 計劃：** Monolith 電子商務（15 名開發人員）具有模組：身份驗證、用戶、產品、訂單、付款、庫存、通知、分析。寫遷移計畫：首先要提取哪個服務，為什麼？

3. **有界上下文：** 「產品」一詞在目錄（名稱、描述、圖像）、庫存（庫存、倉庫）、定價（成本、折扣、利潤）中具有不同的意義。繪製有界上下文圖。
