---
id: 019d8a21-c110-7001-d001-e1f2a3b4c528
title: 'レッスン 28: ケーススタディ - ライドシェアリングプラットフォームの設計'
slug: bai-28-case-study-thiet-ke-ride-sharing-platform
description: >-
  Grab/Uber のデザイン。位置追跡と地理空間インデックス作成。リアルタイムのドライバーマッチング。急騰価格設定。
  ETAの計算。旅行のライフサイクル管理。地理空間データベース (PostGIS、H3、Geohash)。
duration_minutes: 160
is_free: false
video_url: null
sort_order: 28
section_title: 'パート 7: システム設計のケーススタディ'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'システムアーキテクチャ: ゼロからヒーローへ'
  slug: system-architecture-from-zero-to-hero
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ アーキテクチャ — レッスン 28</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 28: ケーススタディ - ライドシェアリングの設計</tspan>
      <tspan x="60" dy="42">プラットフォーム</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">システムアーキテクチャ: ゼロからヒーローへ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: システム設計のケーススタディ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

ライドシェアリング プラットフォームには、リアルタイムの位置追跡、地理空間クエリ、動的マッチング、価格設定アルゴリズム、高可用性要件など、多くの課題が組み合わされています。これはシステム設計面接のゴールドスタンダードです。

---

## 1. 要件と見積もり

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

## 2. アーキテクチャの概要

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

## 3. 位置追跡

### 3.1 ドライバーの場所の更新

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

### 3.2 地理空間インデックス作成

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

## 4. マッチングアルゴリズム

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

## 5. 旅行のライフサイクル

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

## 6. 急騰価格

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

## 7. ETA の計算

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

## 概要

|コンポーネント |テクノロジー |選択理由 |
|----------|-----------|--------------|
|所在地ストア | Redis + 地理空間 |高速 R/W、内蔵地理情報 |
|トリップデータ |ポストグレSQL | ACID、リレーショナル |
|マッチング |カスタムアルゴリズム |低遅延、ドメイン固有 |
|リアルタイム |ウェブソケット |ドライバー/ライダーの追跡 |
|価格 |インメモリ計算 |リアルタイムサージ |
|ルーティング | OSRM/グラフホッパー |オープンソースのルーティング エンジン |
|分析 |カフカ → クリックハウス |ストリーミング分析 |

---

## 演習

1. **マッチングの最適化:** ピーク時: 50,000 の配車リクエスト、10,000 の利用可能なドライバー。 5 秒以内に 50,000 件の一致するリクエストを処理します。バッチマッチングアルゴリズムを設計します。

2. **位置精度:** GPS 精度 ±10m。交差点での運転手、一方通行の道路が 2 つあります。ドライバーがどのパス上にあるかを判断する方法 (マップ マッチング)?

3. **乗車予定:** 「明日の朝 7:00 の乗車を予約してください」。事前予約システムの設計: いつドライバーをマッチングするか?ライダーへの保証は？
