---
id: 019d8a21-c110-7001-d001-e1f2a3b4c528
title: 第 28 課：案例研究 - 乘車共享平台的設計
slug: bai-28-case-study-thiet-ke-ride-sharing-platform
description: >-
  Grab/Uber
  設計。位置追蹤和地理空間索引。即時駕駛員匹配。峰時定價。預計到達時間計算。行程生命週期管理。地理空間資料庫（PostGIS、H3、Geohash）。
duration_minutes: 160
is_free: false
video_url: null
sort_order: 28
section_title: 第 7 部分：系統設計案例研究
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5299" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5299)"/>

  <!-- Decorations -->
  <g>
    <circle cx="800" cy="230" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="190" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="170" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="150" x2="1100" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="180" x2="1050" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1021.650635094611,187.5 1021.650635094611,212.5 1000,225 978.349364905389,212.5 978.349364905389,187.5 1000,175" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ 建築 — 第 28 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 28 課：案例研究 - 乘車共享設計</tspan>
      <tspan x="60" dy="42">平台</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：系統設計案例研究</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

乘車共享平檯面臨許多挑戰：即時位置追蹤、地理空間查詢、動態匹配、定價演算法和高可用性要求。這是系統設計面試的黃金標準。

---

## 1. 要求與估算

```
Functional:
  - Rider requests ride (pickup, destination)
  - Match rider with nearby driver
  - Real-time tracking (driver location)
  - ETA calculation
  - Dynamic pricing (surge)
  - Payment processing
  - Trip history, receipts
  - Rating system

Estimation (Grab-scale in Vietnam):
  Active riders: 5M/day
  Active drivers: 500K/day
  Trips/day: 10M
  Driver location update: every 3 seconds
  
  Location updates QPS:
    500K drivers × (1/3s) = 167K updates/s

  Trip QPS:
    10M trips / 86400 ≈ 116 trips/s (peak: 500/s)

  Storage:
    Location: 167K × 86400 × 50 bytes ≈ 700GB/day
    → Keep 7 days hot = 5TB
```

---

## 2. 架構概述

```
┌──────────────────────────────────────────────────────┐
│                                                       │
│  Rider App            Driver App                      │
│     │                    │                            │
│  ┌──▼────────────────────▼──┐                        │
│  │     API Gateway          │                        │
│  └──┬──────────┬────────┬───┘                        │
│     │          │        │                            │
│  ┌──▼───┐  ┌──▼─────┐ ┌▼──────────┐                │
│  │Trip  │  │Location│ │ Matching  │                │
│  │Svc   │  │Service │ │ Service   │                │
│  └──┬───┘  └──┬─────┘ └┬──────────┘                │
│     │         │        │                            │
│  ┌──▼───┐  ┌──▼─────┐ ┌▼──────────┐                │
│  │Trip  │  │Location│ │ Pricing   │                │
│  │DB    │  │Store   │ │ Service   │                │
│  │(PG)  │  │(Redis) │ │           │                │
│  └──────┘  └────────┘ └───────────┘                │
│     │                                               │
│  ┌──▼───────┐  ┌───────────┐  ┌──────────────┐     │
│  │Payment  │  │Notification│  │ Analytics    │     │
│  │Service  │  │Service     │  │ (Kafka→DW)   │     │
│  └─────────┘  └───────────┘  └──────────────┘     │
│                                                       │
└──────────────────────────────────────────────────────┘
```

---

## 3. 位置追踪

### 3.1 驅動程式位置更新

```
Driver app gửi location mỗi 3 giây:

  { "driver_id": "D123",
    "lat": 10.7769, "lng": 106.7009,
    "timestamp": 1705312200,
    "heading": 45,
    "speed": 30 }

Storage: Redis (in-memory, fast update/query)
  Key: driver:D123:location
  Value: { lat, lng, timestamp, status }
  TTL: 60 seconds (auto remove inactive drivers)

Update flow:
  Driver App → API Gateway → Location Service → Redis
  (167K writes/s → Redis handles easily)
```

### 3.2 地理空間索引

```
Vấn đề: "Tìm tất cả drivers trong bán kính 3km"
  Scan 500K drivers? Quá chậm!

Giải pháp 1: Geohash
  Chia bản đồ thành grid cells
  
  Geohash "w3gvk1" = 1 ô nhỏ (precision 6 = ~1.2km×0.6km)
  
  ┌──────┬──────┬──────┐
  │w3gvk0│w3gvk1│w3gvk2│
  ├──────┼──────┼──────┤
  │w3gvj8│w3gvj9│w3gvjb│
  ├──────┼──────┼──────┤
  │w3gvj2│w3gvj3│w3gvj6│
  └──────┴──────┴──────┘
  
  "Drivers gần rider" = Drivers trong cùng cell + adjacent cells
  Redis: GEOADD drivers D123 106.7009 10.7769
         GEORADIUS drivers 106.7009 10.7769 3 km

Giải pháp 2: H3 (Uber's hexagonal grid)
  Hexagonal cells → uniform distance from center
  Resolution 9 ≈ 100m edge → good for matching
  Better than square grid (no corner issues)
```

---

## 4. 匹配演算法

```
Rider requests ride:

Step 1: Find nearby available drivers
  Query Redis: GEORADIUS rider_location 3km
  Filter: status = "available", vehicle_type matches
  Result: [D1 (0.5km), D2 (1.2km), D3 (2.8km)]

Step 2: Rank drivers
  Score = f(distance, rating, acceptance_rate, ETA)
  
  D1: distance=0.5km, rating=4.8, ETA=3min → Score: 95
  D2: distance=1.2km, rating=4.9, ETA=5min → Score: 88
  D3: distance=2.8km, rating=4.5, ETA=8min → Score: 70

Step 3: Send ride request
  → D1 (highest score): "New ride request!"
  → D1 has 15 seconds to accept
  → If decline/timeout → Send to D2
  → If D2 decline → Send to D3
  → If all decline → Expand radius → Retry

Step 4: Match confirmed
  → Update D1 status: "available" → "on_trip"
  → Send rider: "Driver found! ETA 3 minutes"
  → Start trip tracking
```

---

## 5. 行程生命週期

```
States:
  REQUESTED → MATCHED → DRIVER_ARRIVING → IN_PROGRESS → COMPLETED
                                                       → CANCELLED

  ┌──────────┐  match   ┌─────────┐  arrive  ┌───────────┐
  │REQUESTED │─────────►│ MATCHED │─────────►│DRIVER     │
  └────┬─────┘          └────┬────┘          │ARRIVING   │
       │                     │               └─────┬─────┘
       │ timeout             │ cancel               │ pickup
       ▼                     ▼                     ▼
  ┌──────────┐          ┌─────────┐          ┌───────────┐
  │NO_DRIVER │          │CANCELLED│          │IN_PROGRESS│
  └──────────┘          └─────────┘          └─────┬─────┘
                                                    │ arrive
                                              ┌─────▼─────┐
                                              │COMPLETED   │
                                              │→ Payment   │
                                              │→ Rating    │
                                              └───────────┘
```

---

## 6. 峰時定價

```
Khi demand > supply trong 1 khu vực:

  Supply:  5 available drivers in area
  Demand:  20 ride requests in area
  Ratio:   20/5 = 4x → Surge multiplier: 2.5x

Algorithm:
  1. Divide city into zones (H3 cells)
  2. Count requests per zone per 5 minutes
  3. Count available drivers per zone
  4. Calculate supply/demand ratio
  5. Apply surge multiplier

  demand_ratio = requests / available_drivers
  
  if demand_ratio > 3:   surge = 2.5x
  if demand_ratio > 2:   surge = 2.0x
  if demand_ratio > 1.5: surge = 1.5x
  if demand_ratio > 1.2: surge = 1.2x
  else:                  surge = 1.0x

  Base fare: 30,000 VND
  Surge 2.0x: 60,000 VND

Update frequency: Every 2-5 minutes per zone
Display: Show surge zones on map (heatmap)
```

---

## 7.預計到達時間計算

```
Simple: Distance / Average speed
  → Inaccurate (traffic, road conditions)

Better: Graph-based routing
  Road network = Weighted graph
  Edges = Road segments (weight = time)
  Dijkstra / A* algorithm → Shortest path

  ┌───A───3min───B───5min───C───┐
  │                              │
  2min                         4min
  │                              │
  └───D───1min───E───2min───F───┘
  
  A→F: A→D→E→F = 5min (best)
       A→B→C→F = 12min

Real-time adjustment:
  Historical data: "Road X at 8am = 20min"
  Real-time:       "Road X now = 35min (jam)"
  → Update edge weights with live traffic
  → Recalculate ETA every 30 seconds during trip

ML-based ETA (Uber/Grab):
  Features: distance, time of day, weather, events, road type
  Model: Gradient Boosted Trees → Predict travel time
  Accuracy: ±2 minutes for 90% of trips
```

---

## 總結

|組件|技術 |選擇理由 |
|------------|------------|--------------|
|地點商店| Redis + 地理空間 |快速讀/寫，內建地理 |
|行程資料| PostgreSQL | ACID，關係 |
|匹配|自訂演算法 |低延遲、特定領域 |
|即時 | WebSockets |駕駛員/乘客追蹤 |
|定價|記憶體運算 |即時激增 |
|路由| OSRM/GraphHopper |開源路由引擎|
|分析|卡夫卡 → ClickHouse |串流分析 |

---

## 練習

1. **配對優化：** 尖峰時段：5萬次乘車請求，1萬名可用司機。在 5 秒內處理 50K 匹配請求。設計批量匹配演算法。

2. **定位精度：** GPS精度±10m。司機在交叉路口，2 條單向街道。如何確定駕駛者所在的路徑（地圖匹配）？

3. **預定乘車：**「預訂明天早上 7:00 的乘車」。預約系統設計：什麼時候要配對司機？為騎手提供保障？
