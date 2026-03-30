---
id: 019d8a21-c110-7001-d001-e1f2a3b4c528
title: "Bài 28: Case Study - Thiết kế Ride-Sharing Platform"
slug: bai-28-case-study-thiet-ke-ride-sharing-platform
description: >-
  Thiết kế Grab/Uber. Location tracking & geospatial indexing.
  Real-time driver matching. Surge pricing. ETA calculation.
  Trip lifecycle management. Geospatial databases (PostGIS,
  H3, Geohash).
duration_minutes: 160
is_free: false
video_url: null
sort_order: 28
section_title: "Phần 7: System Design Case Studies"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Ride-sharing platform kết hợp nhiều challenges: real-time location tracking, geospatial queries, dynamic matching, pricing algorithms, và high availability requirements. Đây là gold standard cho system design interview.

---

## 1. Requirements & Estimation

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

## 2. Architecture Overview

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

## 3. Location Tracking

### 3.1 Driver Location Updates

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

### 3.2 Geospatial Indexing

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

## 4. Matching Algorithm

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

## 5. Trip Lifecycle

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

## 6. Surge Pricing

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

## 7. ETA Calculation

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

## Tổng kết

| Component | Technology | Choice Reason |
|-----------|-----------|--------------|
| Location store | Redis + Geospatial | Fast R/W, built-in geo |
| Trip data | PostgreSQL | ACID, relational |
| Matching | Custom algorithm | Low latency, domain-specific |
| Real-time | WebSocket | Driver/Rider tracking |
| Pricing | In-memory calculation | Real-time surge |
| Routing | OSRM / GraphHopper | Open-source routing engine |
| Analytics | Kafka → ClickHouse | Streaming analytics |

---

## Bài tập

1. **Matching Optimization:** Peak hour: 50K ride requests, 10K available drivers. Xử lý 50K matching requests trong < 5 giây. Thiết kế batch matching algorithm.

2. **Location Accuracy:** GPS accuracy ±10m. Driver ở giao lộ, 2 đường 1 chiều. Làm sao xác định driver đang ở đường nào (map matching)?

3. **Scheduled Rides:** "Đặt xe cho 7:00 sáng mai". Thiết kế pre-booking system: khi nào match driver? Guarantees cho rider?
