---
id: 019d8a21-c102-7001-d001-e1f2a3b4c502
title: "Bài 2: Performance vs Scalability - Vertical & Horizontal Scaling"
slug: bai-2-performance-vs-scalability-vertical-horizontal-scaling
description: >-
  Phân biệt Performance và Scalability. Vertical Scaling (Scale Up)
  vs Horizontal Scaling (Scale Out). Stateless vs Stateful architecture.
  Khi nào chọn scaling strategy nào. Back-of-the-envelope calculations
  và capacity planning cơ bản.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Nền Tảng System Design"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Khi hệ thống bắt đầu chậm dần, bạn đứng trước hai câu hỏi:
- **Performance:** Làm sao để hệ thống nhanh hơn cho một user?
- **Scalability:** Làm sao để hệ thống phục vụ được nhiều users hơn?

Hai khái niệm này liên quan nhưng khác nhau. Hiểu rõ sự khác biệt là bước đầu tiên để thiết kế hệ thống hiệu quả.

---

## 1. Performance vs Scalability

### 1.1 Định nghĩa

```
Performance Problem:   Hệ thống chậm cho 1 user
Scalability Problem:   Hệ thống nhanh cho 1 user, nhưng chậm khi nhiều users
```

| Đặc điểm | Performance | Scalability |
|----------|-------------|-------------|
| **Đo bằng** | Response time, throughput | Khả năng xử lý tải tăng |
| **Ví dụ** | API trả về trong 50ms | Từ 100 → 100K RPS |
| **Giải pháp** | Optimize code, algorithm | Add resources, distribute load |
| **Khi nào fix** | Luôn luôn tối ưu | Khi lượng tải vượt capacity |

### 1.2 Ví dụ thực tế

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

## 2. Vertical Scaling (Scale Up)

### 2.1 Khái niệm

Vertical Scaling là tăng cường sức mạnh của **một máy chủ duy nhất**: thêm CPU, RAM, SSD, network bandwidth.

```
Trước:                          Sau:
┌──────────────┐               ┌──────────────────┐
│   Server     │               │     Server       │
│  4 CPU       │    Scale Up   │  32 CPU          │
│  8 GB RAM    │  ──────────►  │  128 GB RAM      │
│  256 GB SSD  │               │  2 TB NVMe SSD   │
└──────────────┘               └──────────────────┘
```

### 2.2 Ưu và nhược điểm

| Ưu điểm | Nhược điểm |
|---------|-----------|
| Đơn giản, không cần thay đổi code | Có giới hạn vật lý (hardware limit) |
| Không có network latency | Single Point of Failure |
| Data consistency đơn giản | Chi phí tăng exponentially |
| Không cần distributed coordination | Downtime khi upgrade |

### 2.3 Chi phí Vertical Scaling (ví dụ AWS EC2)

```
t3.micro    (2 vCPU, 1GB):    ~$8/tháng
t3.xlarge   (4 vCPU, 16GB):   ~$120/tháng      (15x giá, 16x RAM)
r5.4xlarge  (16 vCPU, 128GB): ~$730/tháng      (91x giá, 128x RAM)
r5.24xlarge (96 vCPU, 768GB): ~$4,400/tháng    (550x giá, 768x RAM)
```

> Chi phí tăng **nhanh hơn nhiều** so với hiệu năng thu được. Đây là lý do vertical scaling có giới hạn thực tế.

---

## 3. Horizontal Scaling (Scale Out)

### 3.1 Khái niệm

Horizontal Scaling là thêm **nhiều máy chủ** để chia sẻ tải.

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

### 3.2 Ưu và nhược điểm

| Ưu điểm | Nhược điểm |
|---------|-----------|
| Gần như không giới hạn scaling | Phức tạp hơn nhiều |
| No single point of failure | Cần load balancer |
| Chi phí tăng tuyến tính | Data consistency challenges |
| Có thể scale on-demand | Cần stateless design |

### 3.3 Chi phí Horizontal Scaling

```
1  x t3.xlarge:  $120/tháng   → 1x capacity
4  x t3.xlarge:  $480/tháng   → ~4x capacity
10 x t3.xlarge:  $1,200/tháng → ~10x capacity
```

> Chi phí tăng **tuyến tính** với capacity — hiệu quả hơn nhiều so với vertical scaling.

---

## 4. Stateless vs Stateful Architecture

### 4.1 Tại sao quan trọng?

Để horizontal scaling hoạt động, servers phải là **stateless** — không lưu state của user trên server.

### 4.2 Stateful Server (Anti-pattern cho scaling)

```
┌──────────┐     Request 1     ┌──────────┐
│  User A  │ ──────────────►   │ Server 1 │  ← Session: {userId: A, cart: [...]}
└──────────┘                   └──────────┘

                Request 2
User A ──────────────────────► Server 2   ← Không có session của User A!
                                            → ERROR: "Please login again"
```

**Vấn đề:** Nếu request tiếp theo đến server khác, session bị mất.

### 4.3 Stateless Server (Best practice)

```
┌──────────┐                    ┌──────────┐
│  User A  │  Request + Token   │ Server 1 │
└──────────┘ ──────────────►    └──────────┘ ──► Shared Session Store
                                                  (Redis / Database)
             Request + Token    ┌──────────┐        │
             ──────────────►    │ Server 2 │ ──────►│
                                └──────────┘
```

**Giải pháp:** Lưu session vào **shared store** (Redis, database), server chỉ xử lý logic.

### 4.4 Các cách xử lý state

| Phương pháp | Mô tả | Ưu điểm | Nhược điểm |
|------------|-------|---------|-----------|
| **Sticky Sessions** | LB gửi user về cùng server | Đơn giản | Server fail = mất session |
| **Session Store (Redis)** | Lưu session trong Redis | Nhanh, scalable | Thêm component |
| **JWT Token** | State trong token | Không cần server store | Token size lớn, khó revoke |
| **Database** | Lưu session trong DB | Persistent | Chậm hơn Redis |

---

## 5. Capacity Planning

### 5.1 Quy trình

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

### 5.2 Ví dụ: Capacity Planning cho E-commerce

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

## 6. Scaling Database

### 6.1 Read Scaling

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

### 6.2 Write Scaling

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

## 7. Real-world Scaling Examples

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

## 8. Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| Performance | Tối ưu cho 1 user (code, algorithm, cache) |
| Scalability | Xử lý nhiều users (more resources) |
| Vertical Scaling | Nâng cấu hình 1 máy - đơn giản nhưng có giới hạn |
| Horizontal Scaling | Thêm nhiều máy - phức tạp nhưng gần như unlimited |
| Stateless | Điều kiện tiên quyết cho horizontal scaling |
| Capacity Planning | Luôn tính toán trước khi scale |

> **Rule of thumb:** Start simple (vertical), plan for horizontal. Đừng scale trước khi cần, nhưng hãy thiết kế để có thể scale khi cần.

---

## Bài tập

1. **Capacity Planning:** Bạn đang xây dựng ứng dụng giao đồ ăn cho 500K DAU. Mỗi user trung bình 5 đơn hàng/tuần, mỗi đơn hàng tạo 10 API calls. Tính Peak QPS và số servers cần thiết (mỗi server xử lý 300 QPS).

2. **Stateless Design:** Hệ thống hiện tại lưu shopping cart trong session trên server. Hãy thiết kế lại để stateless, hỗ trợ horizontal scaling.

3. **Scaling Decision:** Một SaaS platform có 50K users, response time trung bình 800ms (target < 200ms). Server hiện tại: 4 vCPU, 16GB RAM, CPU usage 85%. Bạn nên vertical scale hay horizontal scale? Giải thích.
