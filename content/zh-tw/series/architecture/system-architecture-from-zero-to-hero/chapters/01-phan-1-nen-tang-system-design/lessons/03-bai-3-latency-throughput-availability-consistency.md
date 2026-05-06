---
id: 019d8a21-c103-7001-d001-e1f2a3b4c503
title: 第 3 課：延遲與吞吐量以及可用性與一致性
slug: bai-3-latency-vs-throughput-availability-vs-consistency
description: >-
  延遲、吞吐量以及它們之間的關係。 CAP 定理（一致性、可用性、分區容錯性）。 CP 與 AP
  系統。一致性模式（強、最終、弱）。可用性模式（故障轉移、複製）。數量上的可用性（99.9%、99.99%）。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 3
section_title: 第 1 部分：系統設計基礎
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ 建築 — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：延遲與吞吐量</tspan>
      <tspan x="60" dy="42">可用性與一致性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：系統設計基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

在系統設計中，每個決定都是**權衡**。您需要掌握兩個最重要的權衡：
- **延遲與吞吐量：** 1 個請求的速度與處理多個請求的速度相比
- **可用性與一致性：** 始終回應與始終正確

---

## 1. 延遲與吞吐量

### 1.1 定義

```
Latency:     Thời gian để hoàn thành 1 action (ms)
             → "Bao lâu để nhận response?"

Throughput:  Số actions hoàn thành trong 1 đơn vị thời gian (RPS)
             → "Bao nhiêu requests/giây?"
```

### 1.2 類比：高速公路

```
Latency = Thời gian 1 xe đi từ A → B
  → Phụ thuộc: tốc độ xe, khoảng cách, số trạm dừng

Throughput = Số xe đến B mỗi giờ
  → Phụ thuộc: số làn đường, latency, mật độ xe
```

### 1.3 關係

當系統過載時，延遲和吞吐量通常是**相反的**：

```
Load thấp:    Latency thấp ✓   Throughput thấp
Load vừa:     Latency thấp ✓   Throughput cao ✓   ← Sweet spot
Load cao:     Latency tăng ✗   Throughput đạt max
Quá tải:      Latency rất cao  Throughput giảm ✗   ← Thrashing
```

### 1.4 最佳化延遲

|工程|減少延遲 |
|--------|---------------------|
| **快取** |避免重新計算/查詢 |
| **CDN** |將內容放置在使用者附近 |
| **連線池** |避免建立新的連線 |
| **非同步處理** |先回傳回應，後處理 |
| **資料局部性** |將資料放置在計算附近 |
| **索引** |查詢更快 |

### 1.5 最佳化吞吐量

|工程|吞吐量增加 |
|--------|------------------------|
| **水平縮放** |新增伺服器 |
| **批次** |收集多個操作|
| **並行處理** |並行處理 |
| **負載平衡** |均勻分佈負載 |
| **基於佇列** |吸收流量高峰|

---

## 2.CAP定理

### 2.1 三個屬性

CAP 定理指出，在分散式系統中，您只能保證 3 個屬性中的 2 個：

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

|屬性|意義|
|------------|---------|
| **一致性** |每次讀取都會收到最新的資料或錯誤 |
| **可用性** |每個請求都會收到回應（不保證最新）|
| **分區容差** |即使網路被分割，系統仍然運作|

### 2.2 為什麼選擇？

在實踐中，**網路分割區總是可能的**（P 是必需的），因此您實際上可以在以下之間進行選擇：

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

### 2.3 實際例子

**場景：銀行轉帳**

```
User A chuyển 1M VNĐ cho User B

CP System (Ngân hàng chọn cách này):
  Network partition → "Giao dịch tạm thời không khả dụng"
  → Tốt hơn là trừ tiền A nhưng chưa cộng tiền B

AP System (Không phù hợp):
  Network partition → Vẫn xử lý giao dịch
  → Rủi ro: Tiền bị trùng lặp hoặc mất
```

**場景：Facebook 新聞推送**

```
AP System (Facebook chọn cách này):
  Network partition → Hiển thị feed cũ hơn 1-2 giây
  → Chấp nhận được, user không nhận ra

CP System (Không phù hợp):
  Network partition → "Service unavailable"
  → 2 tỷ users không xem được feed → thảm họa
```

---

## 3. 一致性模式

### 3.1 強一致性

```
Write → Tất cả replicas đồng bộ → Rồi mới return success

Client → Write(x=5) → Master ─── Sync ──► Replica 1 (x=5) ✓
                              └── Sync ──► Replica 2 (x=5) ✓
                              └── Return success

Bất kỳ Read nào sau đó đều trả về x=5
```

**用例：** 銀行、庫存、預訂系統
**權衡：**更高的延遲（必須等待所有副本）

### 3.2 最終一致性

```
Write → Return success ngay → Replicas sẽ đồng bộ sau

Client → Write(x=5) → Master (x=5) → Return success ngay
                              │
                     Async ───┼──► Replica 1 (x=5)  (sau 10ms)
                              └──► Replica 2 (x=5)  (sau 50ms)

Read ngay sau write: có thể trả về x=3 (giá trị cũ)
Read sau 50ms: x=5 (đã đồng bộ)
```

**用例：** 社群媒體、DNS、電子郵件、購物車
**權衡：**可以短暫讀取舊數據

### 3.3 弱一致性

```
Write → Không đảm bảo read sẽ thấy write

Ví dụ: Video call
  Khi mất kết nối 3 giây, bạn KHÔNG nghe lại
  những gì đã nói trong 3 giây đó
```

**用例：** VoIP、視訊聊天、即時遊戲、直播

### 3.4 比較

|圖案|延遲 |資料新鮮度|使用案例|
|--------|---------|------------|---------|
| **強** |曹 |永遠最新 |銀行、預訂|
| **最終** |低|終於要最新了 |社群媒體、分析 |
| **弱** |非常低|資料可能會遺失| VoIP、遊戲|

---

## 4. 可用性模式

### 4.1 故障轉移

#### 主動-被動（主從）

```
Normal:
  Client → Active Server (xử lý traffic)
           Passive Server (standby, nhận heartbeat)

Failover:
  Active Server ✗ (crash)
  Passive Server → Trở thành Active
  Client → New Active Server
```

- **恢復時間：** 熱備用 = 秒，冷備用 = 分鐘
- **缺點：** 被動伺服器空閒（浪費資源）

#### 主動-主動（主-主）

```
Normal:
  Client ──► Active Server 1 (xử lý 50% traffic)
         └─► Active Server 2 (xử lý 50% traffic)

Failover:
  Server 1 ✗ (crash)
  Server 2 → Xử lý 100% traffic
```

- **優點：** 更好地利用資源
- **缺點：**比較複雜，需要處理資料衝突

### 4.2 複製

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

## 5. 數量上的可用性

### 5.1 常用SLA表

|可用性 |停機時間/年 |停機時間/月 |每週停機時間 |
|------------|-------------|----------------|------------||
| 99%（兩個 9）| 3.65 天 | 7.31 小時 | 1.68 小時 |
| 99.9%（三 9）| 8.77 小時 | 43.83 分鐘 | 10.08 分鐘 |
| 99.99%（四個 9）| 52.6 分鐘 | 4.38 分鐘 | 1.01 分鐘 |
| 99.999%（五個 9）| 5.26 分鐘 | 26.3 秒 | 6.05 秒 |

### 5.2 計算系統可用性

**序列組件（兩者都需要工作）：**

```
Availability(total) = Availability(A) × Availability(B)

Ví dụ: Web Server (99.9%) → Database (99.9%)
Total = 99.9% × 99.9% = 99.8%
```

**並行組件（只需一項操作）：**

```
Availability(total) = 1 - (1 - Av(A)) × (1 - Av(B))

Ví dụ: Server 1 (99.9%) || Server 2 (99.9%)
Total = 1 - (0.001 × 0.001) = 99.9999%
```

### 5.3 高可用性設計

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

## 6.SLI、SLO、SLA

### 6.1 定義

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

### 6.2 實際例子

```
AWS S3 SLA:
  99.9% availability → Credit 10%
  99.0% availability → Credit 25%
  < 99.0%            → Credit 100%
```

---

## 7. 總結

|概念 |重點|
|--------|------------|
|延遲 | 1 個請求的處理時間，目標 < 100-200ms |
|吞吐量|每秒請求數，以水平縮放比例 |
| CAP定理|選擇CP（一致性）或AP（可用性） |
|一致性|強→最終→弱（權衡延遲）|
|可用性 |以「9」為單位測量，冗餘度增加 |
| SLA/SLO/SLI |承諾 → 目標 → 指標 |

---

## 練習

1. **CAP分析：** 機票預訂管理系統應該選擇CP還是AP？解釋每個選擇的原因和後果。

2. **可用性計算：** 系統包括：LB（99.99%）→3台並行App Server（每台伺服器99.9%）→2台並行DB伺服器（每台DB 99.95%）。計算總體可用性。

3. **一致性模式：** 對於電子商務系統，確定適當的一致性模式：(a) 庫存盤點，(b) 產品評論，(c) 用戶個人資料圖片，(d) 支付交易。
