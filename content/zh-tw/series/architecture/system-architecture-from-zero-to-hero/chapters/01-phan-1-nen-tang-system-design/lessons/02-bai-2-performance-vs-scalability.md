---
id: 019d8a21-c102-7001-d001-e1f2a3b4c502
title: 第 2 課：效能與可擴展性 - 垂直和水平擴展
slug: bai-2-performance-vs-scalability-vertical-horizontal-scaling
description: 區分效能和可擴展性。垂直擴展（縱向擴展）與水平擴展（橫向擴展）。無狀態與有狀態架構。何時選擇哪種擴充策略？粗略計算和基本容量規劃。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：系統設計基礎
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ 建築 — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：效能與可擴充性 -</tspan>
      <tspan x="60" dy="42">垂直和水平縮放</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：系統設計基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

當系統開始變慢時，您面臨兩個問題：
- **效能：** 如何讓系統對使用者來說更快？
- **可擴展性：**系統如何服務更多的使用者？

這兩個概念相關但又不同。了解差異是有效系統設計的第一步。

---

## 1. 效能與可擴充性

### 1.1 定義

```
Performance Problem:   Hệ thống chậm cho 1 user
Scalability Problem:   Hệ thống nhanh cho 1 user, nhưng chậm khi nhiều users
```

|特點|效能|可擴充性|
|----------|-------------|-------------|
| **測量者** |回應時間、吞吐量 |增加負載處理能力 |
| **範例** | API 在 50 毫秒內回傳 |從 100 → 100K RPS |
| **解決方案** |最佳化程式碼、演算法 |新增資源，分配負載 |
| **何時修復** |總是優化 |當負載超過容量時 |

### 1.2 實際例子

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

## 2. 垂直縮放（Scale Up）

### 2.1 概念

垂直擴展是為了增加**單一伺服器**的能力：增加CPU、RAM、SSD、網路頻寬。

```
Trước:                          Sau:
┌──────────────┐               ┌──────────────────┐
│   Server     │               │     Server       │
│  4 CPU       │    Scale Up   │  32 CPU          │
│  8 GB RAM    │  ──────────►  │  128 GB RAM      │
│  256 GB SSD  │               │  2 TB NVMe SSD   │
└──────────────┘               └──────────────────┘
```

### 2.2 優點和缺點

|優勢 |缺點 |
|--------|------------|
|簡單，無需改程式碼 |有實體限制（硬體限制） |
|無網路延遲 |單點故障|
|簡單的數據一致性 |成本呈指數級增長|
|無需分散式協調 |升級時停機|

### 2.3 垂直擴展成本（例如 AWS EC2）

```
t3.micro    (2 vCPU, 1GB):    ~$8/tháng
t3.xlarge   (4 vCPU, 16GB):   ~$120/tháng      (15x giá, 16x RAM)
r5.4xlarge  (16 vCPU, 128GB): ~$730/tháng      (91x giá, 128x RAM)
r5.24xlarge (96 vCPU, 768GB): ~$4,400/tháng    (550x giá, 768x RAM)
```

> 成本成長**快於效能提升**。這就是垂直縮放具有實際限制的原因。

---

## 3. 水平擴展（Scale Out）

### 3.1 概念

水平擴展正在添加**更多伺服器**來分擔負載。

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

### 3.2 優點和缺點

|優勢 |缺點 |
|--------|------------|
|幾乎無限的縮放 |更複雜|
|無單點故障|需要負載平衡器 |
|成本線性增加 |資料一致性挑戰|
|可按需擴充|需要無狀態設計 |

### 3.3 橫向擴展成本

```
1  x t3.xlarge:  $120/tháng   → 1x capacity
4  x t3.xlarge:  $480/tháng   → ~4x capacity
10 x t3.xlarge:  $1,200/tháng → ~10x capacity
```

> 成本隨容量**線性**增加－比垂直擴展效率更高。

---

## 4. 無狀態與有狀態架構

### 4.1 為什麼它很重要？

為了使水平擴展發揮作用，伺服器必須是**無狀態**——不在伺服器上儲存使用者狀態。

### 4.2 有狀態伺服器（擴充的反模式）

```
┌──────────┐     Request 1     ┌──────────┐
│  User A  │ ──────────────►   │ Server 1 │  ← Session: {userId: A, cart: [...]}
└──────────┘                   └──────────┘

                Request 2
User A ──────────────────────► Server 2   ← Không có session của User A!
                                            → ERROR: "Please login again"
```

**問題：** 如果下一個請求轉到另一台伺服器，會話就會遺失。

### 4.3 無狀態伺服器（最佳實務）

```
┌──────────┐                    ┌──────────┐
│  User A  │  Request + Token   │ Server 1 │
└──────────┘ ──────────────►    └──────────┘ ──► Shared Session Store
                                                  (Redis / Database)
             Request + Token    ┌──────────┐        │
             ──────────────►    │ Server 2 │ ──────►│
                                └──────────┘
```

**解決方案：**將會話儲存到**共用儲存**（Redis、資料庫），伺服器僅處理邏輯。

### 4.4 處理狀態的方法

|方法|描述 |優點 |缺點 |
|------------|--------|--------|-----------|
| **黏性會話** | LB將使用者傳送到同一台伺服器 |簡單|伺服器故障=會話遺失|
| **會話儲存（Redis）** |在 Redis 中儲存會話 |快速、可擴充|新增元件 |
| **智威湯遜令牌** |代幣狀態 |無需伺服器儲存 | Token規模大，撤銷難 |
| **資料庫** |將會話保存在資料庫中 |堅持不懈|比 Redis 慢 |

---

## 5. 容量規劃

### 5.1 程序

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

### 5.2 範例：電子商務容量規劃

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

## 6. 擴充資料庫

### 6.1 讀取縮放

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

### 6.2 寫入縮放

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

## 7. 現實世界的延伸範例

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

## 8. 總結

|概念 |重點 |
|--------|-------------|
|效能|針對 1 個使用者進行了最佳化（程式碼、演算法、快取）|
|可擴展性|處理許多用戶（更多資源）|
|垂直擴充 |升級1台機器的配置-簡單但有限|
|水平縮放|增加更多機器 - 複雜但幾乎無限 |
|無國籍|水平擴展的先決條件 |
|容量規劃|始終在縮放之前進行計算 |

> **經驗法則：** 從簡單開始（垂直），規劃水平。不要在需要之前進行擴展，而是進行設計，以便您可以在需要時進行擴展。

---

## 練習

1. **容量規劃：** 您正在建立一個每日活躍用戶數為 50 萬的送餐應用程式。每位使用者平均每週 5 個訂單，每個訂單產生 10 個 API 呼叫。計算峰值 QPS 和所需伺服器數量（每台伺服器處理 300 QPS）。

2. **無狀態設計：** 目前系統將購物車儲存在伺服器上的會話中。重新設計為無狀態，支援水平擴展。

3. **擴充決策：** 擁有 5 萬用戶的 SaaS 平台，平均回應時間 800 毫秒（目標 < 200 毫秒）。目前伺服器：4 個 vCPU，16GB RAM，CPU 使用率 85%。應該垂直縮放還是水平縮放？解釋。
