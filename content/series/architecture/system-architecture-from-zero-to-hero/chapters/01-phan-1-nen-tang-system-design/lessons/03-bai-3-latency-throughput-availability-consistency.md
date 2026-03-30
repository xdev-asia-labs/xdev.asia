---
id: 019d8a21-c103-7001-d001-e1f2a3b4c503
title: "Bài 3: Latency vs Throughput và Availability vs Consistency"
slug: bai-3-latency-vs-throughput-availability-vs-consistency
description: >-
  Latency, Throughput và mối quan hệ giữa chúng. CAP Theorem
  (Consistency, Availability, Partition Tolerance). CP vs AP systems.
  Consistency Patterns (Strong, Eventual, Weak). Availability Patterns
  (Failover, Replication). Availability in numbers (99.9%, 99.99%).
duration_minutes: 150
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Nền Tảng System Design"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Trong system design, mọi quyết định đều là **trade-off**. Hai trade-off quan trọng nhất mà bạn cần nắm vững:
- **Latency vs Throughput:** Nhanh cho 1 request vs xử lý nhiều requests
- **Availability vs Consistency:** Luôn phản hồi vs luôn đúng

---

## 1. Latency vs Throughput

### 1.1 Định nghĩa

```
Latency:     Thời gian để hoàn thành 1 action (ms)
             → "Bao lâu để nhận response?"

Throughput:  Số actions hoàn thành trong 1 đơn vị thời gian (RPS)
             → "Bao nhiêu requests/giây?"
```

### 1.2 Analogy: Đường cao tốc

```
Latency = Thời gian 1 xe đi từ A → B
  → Phụ thuộc: tốc độ xe, khoảng cách, số trạm dừng

Throughput = Số xe đến B mỗi giờ
  → Phụ thuộc: số làn đường, latency, mật độ xe
```

### 1.3 Mối quan hệ

Latency và Throughput thường **ngược nhau** khi hệ thống quá tải:

```
Load thấp:    Latency thấp ✓   Throughput thấp
Load vừa:     Latency thấp ✓   Throughput cao ✓   ← Sweet spot
Load cao:     Latency tăng ✗   Throughput đạt max
Quá tải:      Latency rất cao  Throughput giảm ✗   ← Thrashing
```

### 1.4 Tối ưu Latency

| Kỹ thuật | Giảm latency bằng cách |
|---------|----------------------|
| **Caching** | Tránh tính toán/query lại |
| **CDN** | Đặt content gần user |
| **Connection pooling** | Tránh tạo connection mới |
| **Async processing** | Trả response trước, xử lý sau |
| **Data locality** | Đặt data gần compute |
| **Indexing** | Query nhanh hơn |

### 1.5 Tối ưu Throughput

| Kỹ thuật | Tăng throughput bằng cách |
|---------|------------------------|
| **Horizontal scaling** | Thêm servers |
| **Batching** | Gom nhiều operations |
| **Parallel processing** | Xử lý đồng thời |
| **Load balancing** | Phân phối đều tải |
| **Queue-based** | Absorb traffic spikes |

---

## 2. CAP Theorem

### 2.1 Ba thuộc tính

CAP Theorem nói rằng trong một hệ thống phân tán, bạn chỉ có thể đảm bảo **2 trong 3** thuộc tính:

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

| Thuộc tính | Ý nghĩa |
|-----------|---------|
| **Consistency** | Mọi read nhận được data mới nhất hoặc error |
| **Availability** | Mọi request nhận được response (không guarantee mới nhất) |
| **Partition Tolerance** | Hệ thống vẫn hoạt động dù network bị chia cắt |

### 2.2 Tại sao phải chọn?

Trong thực tế, **network partition luôn có thể xảy ra** (P là bắt buộc), nên bạn thực sự chọn giữa:

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

### 2.3 Ví dụ thực tế

**Scenario: Chuyển tiền ngân hàng**

```
User A chuyển 1M VNĐ cho User B

CP System (Ngân hàng chọn cách này):
  Network partition → "Giao dịch tạm thời không khả dụng"
  → Tốt hơn là trừ tiền A nhưng chưa cộng tiền B

AP System (Không phù hợp):
  Network partition → Vẫn xử lý giao dịch
  → Rủi ro: Tiền bị trùng lặp hoặc mất
```

**Scenario: Facebook News Feed**

```
AP System (Facebook chọn cách này):
  Network partition → Hiển thị feed cũ hơn 1-2 giây
  → Chấp nhận được, user không nhận ra

CP System (Không phù hợp):
  Network partition → "Service unavailable"
  → 2 tỷ users không xem được feed → thảm họa
```

---

## 3. Consistency Patterns

### 3.1 Strong Consistency

```
Write → Tất cả replicas đồng bộ → Rồi mới return success

Client → Write(x=5) → Master ─── Sync ──► Replica 1 (x=5) ✓
                              └── Sync ──► Replica 2 (x=5) ✓
                              └── Return success

Bất kỳ Read nào sau đó đều trả về x=5
```

**Use cases:** Banking, Inventory, Booking systems
**Trade-off:** Latency cao hơn (phải đợi tất cả replicas)

### 3.2 Eventual Consistency

```
Write → Return success ngay → Replicas sẽ đồng bộ sau

Client → Write(x=5) → Master (x=5) → Return success ngay
                              │
                     Async ───┼──► Replica 1 (x=5)  (sau 10ms)
                              └──► Replica 2 (x=5)  (sau 50ms)

Read ngay sau write: có thể trả về x=3 (giá trị cũ)
Read sau 50ms: x=5 (đã đồng bộ)
```

**Use cases:** Social media, DNS, Email, Shopping cart
**Trade-off:** Có thể đọc data cũ trong thời gian ngắn

### 3.3 Weak Consistency

```
Write → Không đảm bảo read sẽ thấy write

Ví dụ: Video call
  Khi mất kết nối 3 giây, bạn KHÔNG nghe lại
  những gì đã nói trong 3 giây đó
```

**Use cases:** VoIP, Video chat, Real-time gaming, Live streaming

### 3.4 So sánh

| Pattern | Latency | Data Freshness | Use Case |
|---------|---------|---------------|----------|
| **Strong** | Cao | Luôn mới nhất | Banking, Booking |
| **Eventual** | Thấp | Cuối cùng sẽ mới nhất | Social media, Analytics |
| **Weak** | Rất thấp | Có thể mất data | VoIP, Gaming |

---

## 4. Availability Patterns

### 4.1 Failover

#### Active-Passive (Master-Slave)

```
Normal:
  Client → Active Server (xử lý traffic)
           Passive Server (standby, nhận heartbeat)

Failover:
  Active Server ✗ (crash)
  Passive Server → Trở thành Active
  Client → New Active Server
```

- **Recovery time:** Hot standby = seconds, Cold standby = minutes
- **Nhược điểm:** Passive server idle (lãng phí resource)

#### Active-Active (Master-Master)

```
Normal:
  Client ──► Active Server 1 (xử lý 50% traffic)
         └─► Active Server 2 (xử lý 50% traffic)

Failover:
  Server 1 ✗ (crash)
  Server 2 → Xử lý 100% traffic
```

- **Ưu điểm:** Tận dụng resource tốt hơn
- **Nhược điểm:** Phức tạp hơn, cần xử lý data conflict

### 4.2 Replication

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

## 5. Availability in Numbers

### 5.1 Bảng SLA phổ biến

| Availability | Downtime/năm | Downtime/tháng | Downtime/tuần |
|-------------|-------------|---------------|--------------|
| 99% (two 9s) | 3.65 ngày | 7.31 giờ | 1.68 giờ |
| 99.9% (three 9s) | 8.77 giờ | 43.83 phút | 10.08 phút |
| 99.99% (four 9s) | 52.6 phút | 4.38 phút | 1.01 phút |
| 99.999% (five 9s) | 5.26 phút | 26.3 giây | 6.05 giây |

### 5.2 Tính Availability của hệ thống

**Components nối tiếp (cả hai cần hoạt động):**

```
Availability(total) = Availability(A) × Availability(B)

Ví dụ: Web Server (99.9%) → Database (99.9%)
Total = 99.9% × 99.9% = 99.8%
```

**Components song song (chỉ cần một hoạt động):**

```
Availability(total) = 1 - (1 - Av(A)) × (1 - Av(B))

Ví dụ: Server 1 (99.9%) || Server 2 (99.9%)
Total = 1 - (0.001 × 0.001) = 99.9999%
```

### 5.3 Thiết kế cho High Availability

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

## 6. SLI, SLO, SLA

### 6.1 Định nghĩa

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

### 6.2 Ví dụ thực tế

```
AWS S3 SLA:
  99.9% availability → Credit 10%
  99.0% availability → Credit 25%
  < 99.0%            → Credit 100%
```

---

## 7. Tổng kết

| Concept | Key Points |
|---------|-----------|
| Latency | Thời gian xử lý 1 request, target < 100-200ms |
| Throughput | Số requests/giây, scale bằng horizontal scaling |
| CAP Theorem | Chọn CP (consistency) hoặc AP (availability) |
| Consistency | Strong → Eventual → Weak (trade-off latency) |
| Availability | Đo bằng "9s", tăng bằng redundancy |
| SLA/SLO/SLI | Cam kết → Mục tiêu → Metric |

---

## Bài tập

1. **CAP Analysis:** Hệ thống quản lý đặt vé máy bay nên chọn CP hay AP? Giải thích tại sao và consequences của mỗi lựa chọn.

2. **Availability Calculation:** Hệ thống gồm: LB (99.99%) → 3 App Servers song song (mỗi server 99.9%) → 2 DB servers song song (mỗi DB 99.95%). Tính overall availability.

3. **Consistency Pattern:** Cho hệ thống e-commerce, xác định consistency pattern phù hợp cho: (a) Inventory count, (b) Product reviews, (c) User profile picture, (d) Payment transaction.
