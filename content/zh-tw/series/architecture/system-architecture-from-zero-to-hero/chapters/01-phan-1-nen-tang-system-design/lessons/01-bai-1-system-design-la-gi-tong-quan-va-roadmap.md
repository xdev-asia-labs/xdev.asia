---
id: 019d8a21-c101-7001-d001-e1f2a3b4c501
title: 第一課：什麼是系統設計？ - 概述和路線圖
slug: bai-1-system-design-la-gi-tong-quan-va-roadmap
description: 介紹系統設計，為什麼需要係統設計，如何解決系統設計問題（需求→高層設計→深入研究→瓶頸）。比較整體系統與分散式系統。學習路線圖和必要的資源。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：系統設計基礎
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ 建築 — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第一課：什麼是系統設計？ - 概述和</tspan>
      <tspan x="60" dy="42">路線圖</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：系統設計基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

您可以在幾個小時內編寫一個簡單的 CRUD 應用程式。但是，當該應用程式需要服務**數百萬用戶**，每秒處理**數千個請求**，並確保**99.99% 的正常運行時間**時 - 這就是您需要**系統設計**的時候。

系統設計不僅僅是面試的知識。這是一項核心技能，可以幫助您：

- 建構可擴展的系統
- 做出正確的架構決策
- 避免代價高昂的錯誤（重建整個系統）
- 與團隊就技術決策進行有效溝通

---

## 1.什麼是系統設計？

### 1.1 定義

**系統設計**是確定軟體系統的架構、組件、模組、介面和資料以滿足特定要求的過程。

```
System Design = Architecture + Components + Data Flow + Trade-offs
```

### 1.2 為什麼系統設計很重要？

|相|沒有系統設計|是的系統設計|
|------------------------|--------------------------------|-----------------|
| **原型** |快速、簡單 |有一個清晰的計劃|
| **100 位使用者** |運作良好 |運作良好 |
| **10K 用戶** |慢啟動|依然穩定|
| **100 萬用戶** |系統崩潰，不得不重寫|按計劃規模|
| **成本** |重寫 = 10x 初始成本 |漸進式改善 |

### 1.3 系統設計與編碼

```
Coding:          "Làm sao để implement feature X?"
System Design:   "Làm sao để feature X hoạt động với 10M users,
                  99.99% uptime, <100ms latency?"
```

---

## 2. 如何解決系統設計問題

### 2.1 框架 4步

當遇到任何系統設計問題時，請使用以下框架：

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

### 2.2 範例：設計新聞閱讀系統

**第 1 步 - 要求：**
- FR：使用者查看文章清單、閱讀詳細資訊、搜尋、評論
- NFR：1000 萬天， <200ms latency, 99.9% availability
- Constraints: Read-heavy (100:1 read/write ratio)

**Step 2 - High-Level Design:**

```
Users → CDN → Load Balancer → Web Servers → Cache → Database
                    │
                    └→ Search Service (Elasticsearch)
```

**Step 3 - Deep Dive:**
- Database: PostgreSQL cho articles, Redis cho cache
- 搜尋：帶有全文索引的Elasticsearch
- CDN: Cache static assets + rendered HTML

**Step 4 - Bottlenecks:**
- Database read bottleneck → Add read replicas
- 熱門文章 → 使用 TTL 進行主動緩存
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

**優勢：**
- 初始開發簡單
- 易於部署（1 個工件）
- 易於調試（單進程）
- 元件之間沒有網路延遲

**缺點：**
- 很難縮放每個單獨的部分
- 一個小錯誤可能會導致整個系統崩潰
- 當程式碼庫很大時部署很慢
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

**優勢：**
- 獨立擴展每項服務
- 故障隔離（1個服務故障≠整個系統故障）
- 團隊自治（每個團隊擁有 1 項服務）
- Technology diversity

**缺點：**
- 更複雜
- 服務之間的網路延遲
- Data consistency challenges
- Operational overhead (monitoring, debugging)

### 3.3 什麼時候選擇什麼？

|標準|巨石|分散式 |
|----------|----------|-------------|
| **Team size** | < 10 developers | > 10 名開發人員 |
| **交通** | < 10K RPS | > 10K RPS |
| **階段** | MVP，早期啟動 |成長、規模|
| **複雜性** |中|高|
| **部署頻率** |每週/每月 |每日/每小時 |

> **建議：** 大多數系統應該從 Monolith 開始，然後根據需要擴展到分散式。不要從一開始就過度設計！

---

## 4. 需要掌握的核心概念

### 4.1 系統設計圖

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

### 4.2 學習路線圖

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

## 5. 粗略計算

系統設計的一項重要技能是快速估算：

### 5.1 二的冪

|電源|確切值 |大約|位元組 |
|--------|-------------|--------|--------|
| 10 | 10 1,024 | 1,024 1000 | 1000 1 KB |
| 20 | 1,048,576 | 1,048,576 100 萬 | 1MB |
| 30| 1,073,741,824 | 10 億 | 1GB |
| 40| 1,099,511,627,776 | 1兆| 1TB |

### 5.2 每個程式設計師都應該知道的延遲數字

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

### 5.3 範例：Twitter 的儲存估算

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

## 6. 總結

|主題 |要點 |
|--------|-------------|
|系統設計|設計符合大規模需求的系統 |
|框架|需求→進階→深入研究→瓶頸|
|巨石|從整體開始，根據需要進行分離 |
|分散式 |更複雜但允許縮放 |
|估計|設計前一定要進行評估|

---

## 練習

1. **估價實務：** 預計 YouTube 1 年內所需儲存空間（500M DAU，每天上傳 500 萬個視頻，轉碼後平均 50MB/視頻）

2. **整體式 vs 分散式：** 您正在為越南市場（500 萬用戶）建立飯店預訂應用程式。您會選擇整體式還是分散式？解釋一下為什麼。

3. **系統設計架構：** 應用 4 步驟架構來草擬 **餐廳預約管理系統** 的設計（5 萬家餐廳，100 萬用戶）。
