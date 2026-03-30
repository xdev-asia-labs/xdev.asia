---
id: 019d8a21-c101-7001-d001-e1f2a3b4c501
title: "Bài 1: System Design là gì? - Tổng quan và Roadmap"
slug: bai-1-system-design-la-gi-tong-quan-va-roadmap
description: >-
  Giới thiệu System Design, tại sao cần thiết kế hệ thống, cách tiếp
  cận một bài toán system design (requirements → high-level design →
  deep dive → bottlenecks). So sánh Monolith vs Distributed Systems.
  Roadmap học tập và các tài nguyên cần thiết.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Nền Tảng System Design"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Bạn có thể viết một ứng dụng CRUD đơn giản trong vài giờ. Nhưng khi ứng dụng đó cần phục vụ **hàng triệu người dùng**, xử lý **hàng nghìn requests/giây**, và đảm bảo **99.99% uptime** — đó là lúc bạn cần **System Design**.

System Design không chỉ là kiến thức cho phỏng vấn. Đó là kỹ năng cốt lõi giúp bạn:

- Xây dựng hệ thống có thể scale
- Đưa ra quyết định kiến trúc đúng đắn
- Tránh những sai lầm tốn kém (refactor toàn bộ hệ thống)
- Giao tiếp hiệu quả với team về technical decisions

---

## 1. System Design là gì?

### 1.1 Định nghĩa

**System Design** là quá trình xác định kiến trúc, các thành phần (components), modules, interfaces và dữ liệu (data) cho một hệ thống phần mềm nhằm thỏa mãn các yêu cầu cụ thể.

```
System Design = Architecture + Components + Data Flow + Trade-offs
```

### 1.2 Tại sao System Design quan trọng?

| Giai đoạn | Không có System Design | Có System Design |
|-----------|----------------------|-----------------|
| **Prototype** | Nhanh, đơn giản | Có kế hoạch rõ ràng |
| **100 users** | Chạy tốt | Chạy tốt |
| **10K users** | Bắt đầu chậm | Vẫn ổn định |
| **1M users** | Sập hệ thống, phải rewrite | Scale theo kế hoạch |
| **Chi phí** | Rewrite = 10x chi phí ban đầu | Incremental improvement |

### 1.3 System Design vs Coding

```
Coding:          "Làm sao để implement feature X?"
System Design:   "Làm sao để feature X hoạt động với 10M users,
                  99.99% uptime, <100ms latency?"
```

---

## 2. Cách tiếp cận bài toán System Design

### 2.1 Framework 4 bước

Khi đối mặt với bất kỳ bài toán system design nào, hãy sử dụng framework sau:

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

### 2.2 Ví dụ: Thiết kế hệ thống đọc tin tức

**Step 1 - Requirements:**
- FR: User xem danh sách bài viết, đọc chi tiết, tìm kiếm, bình luận
- NFR: 10M DAU, <200ms latency, 99.9% availability
- Constraints: Read-heavy (100:1 read/write ratio)

**Step 2 - High-Level Design:**

```
Users → CDN → Load Balancer → Web Servers → Cache → Database
                    │
                    └→ Search Service (Elasticsearch)
```

**Step 3 - Deep Dive:**
- Database: PostgreSQL cho articles, Redis cho cache
- Search: Elasticsearch với full-text index
- CDN: Cache static assets + rendered HTML

**Step 4 - Bottlenecks:**
- Database read bottleneck → Add read replicas
- Hot articles → Aggressive caching với TTL
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

**Ưu điểm:**
- Đơn giản để phát triển ban đầu
- Dễ deploy (1 artifact)
- Dễ debug (single process)
- Không có network latency giữa components

**Nhược điểm:**
- Khó scale từng phần riêng lẻ
- Một lỗi nhỏ có thể crash toàn bộ hệ thống
- Deploy chậm khi codebase lớn
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

**Ưu điểm:**
- Scale từng service độc lập
- Fault isolation (1 service fail ≠ cả hệ thống fail)
- Team autonomy (mỗi team owns 1 service)
- Technology diversity

**Nhược điểm:**
- Phức tạp hơn nhiều
- Network latency giữa services
- Data consistency challenges
- Operational overhead (monitoring, debugging)

### 3.3 Khi nào chọn gì?

| Tiêu chí | Monolith | Distributed |
|----------|----------|-------------|
| **Team size** | < 10 developers | > 10 developers |
| **Traffic** | < 10K RPS | > 10K RPS |
| **Giai đoạn** | MVP, Startup early | Growth, Scale |
| **Complexity** | Moderate | High |
| **Deploy frequency** | Weekly/Monthly | Daily/Hourly |

> **Lời khuyên:** Hầu hết các hệ thống nên bắt đầu với Monolith, sau đó tách ra distributed khi cần. Đừng over-engineer từ đầu!

---

## 4. Các khái niệm cốt lõi cần nắm

### 4.1 Bản đồ System Design

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

### 4.2 Roadmap học tập

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

## 5. Back-of-the-Envelope Calculations

Một kỹ năng quan trọng trong System Design là ước tính nhanh (estimation):

### 5.1 Powers of Two

| Power | Exact Value | Approx | Bytes |
|-------|-------------|--------|-------|
| 10 | 1,024 | 1 Thousand | 1 KB |
| 20 | 1,048,576 | 1 Million | 1 MB |
| 30 | 1,073,741,824 | 1 Billion | 1 GB |
| 40 | 1,099,511,627,776 | 1 Trillion | 1 TB |

### 5.2 Latency Numbers Every Programmer Should Know

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

### 5.3 Ví dụ: Ước tính storage cho Twitter

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

## 6. Tổng kết

| Chủ đề | Key Takeaway |
|--------|-------------|
| System Design | Thiết kế hệ thống thỏa mãn requirements ở quy mô lớn |
| Framework | Requirements → High-Level → Deep Dive → Bottlenecks |
| Monolith | Bắt đầu với monolith, tách ra khi cần |
| Distributed | Phức tạp hơn nhưng cho phép scale |
| Estimation | Luôn ước tính trước khi thiết kế |

---

## Bài tập

1. **Estimation Practice:** Ước tính storage cần thiết cho YouTube trong 1 năm (500M DAU, 5M videos upload/ngày, trung bình 50MB/video sau transcoding)

2. **Monolith vs Distributed:** Bạn đang xây dựng một ứng dụng booking khách sạn cho thị trường Việt Nam (5M users). Bạn sẽ chọn Monolith hay Distributed? Giải thích lý do.

3. **System Design Framework:** Áp dụng framework 4 bước để phác thảo thiết kế cho hệ thống **quản lý đặt bàn nhà hàng** (50K nhà hàng, 1M users).
