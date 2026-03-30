---
id: 019d8a21-c110-7001-d001-e1f2a3b4c519
title: "Bài 19: Serverless & Cloud-Native Architecture"
slug: bai-19-serverless-cloud-native-architecture
description: >-
  Cloud-Native principles (12-Factor App). Serverless computing:
  FaaS (Lambda, Cloud Functions). Container orchestration overview.
  Serverless patterns: API Gateway + Lambda, Event-driven.
  Cold start, vendor lock-in, và khi nào nên dùng Serverless.
duration_minutes: 140
is_free: false
video_url: null
sort_order: 19
section_title: "Phần 5: Architectural Patterns"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Cloud đã thay đổi cách chúng ta thiết kế hệ thống. Từ việc mua server vật lý, giờ đây ta có thể chạy code mà không cần quản lý infrastructure. Bài này khám phá Cloud-Native principles và Serverless architecture.

---

## 1. 12-Factor App

```
12 nguyên tắc thiết kế ứng dụng Cloud-Native:

 1. Codebase:    1 repo, nhiều deploys (staging, prod)
 2. Dependencies: Khai báo rõ ràng (package.json, requirements.txt)
 3. Config:      Lưu trong environment variables (không hardcode)
 4. Backing:     Database, cache, queue là attached resources
 5. Build/Release/Run: Tách biệt 3 stages
 6. Processes:   Stateless processes (không lưu state in-memory)
 7. Port binding: Self-contained, export via port
 8. Concurrency: Scale out bằng processes
 9. Disposability: Fast startup, graceful shutdown
10. Dev/Prod parity: Giữ dev, staging, prod giống nhau
11. Logs:        Treat logs as event streams (stdout)
12. Admin:       One-off admin tasks cũng là code
```

---

## 2. Serverless Computing

### 2.1 FaaS (Function as a Service)

```
Traditional Server:
  ┌──────────────────────────┐
  │ Server (24/7 running)    │
  │ OS, Runtime, App         │
  │ Bạn quản lý TẤT CẢ      │
  │ Trả tiền 24/7            │
  └──────────────────────────┘

Container (CaaS):
  ┌──────────────────────────┐
  │ Container (on demand)    │
  │ Runtime, App             │
  │ Cloud quản lý OS, Infra  │
  │ Trả tiền khi container chạy │
  └──────────────────────────┘

Serverless (FaaS):
  ┌──────────────────────────┐
  │ Function (on invocation) │
  │ Chỉ viết code            │
  │ Cloud quản lý EVERYTHING │
  │ Trả tiền per invocation  │
  │ Auto scale 0 → ∞         │
  └──────────────────────────┘
```

### 2.2 Execution Model

```
Request 1: → Cold Start (init container) → Execute → Return
Request 2: → Warm (reuse container)       → Execute → Return
Request 3: → Warm (reuse container)       → Execute → Return
... (idle 15 min) ...
Request 4: → Cold Start (new container)   → Execute → Return

Cold Start Timeline:
  ├── Download code (100-500ms)
  ├── Init runtime (50-200ms)
  ├── Init dependencies (100-2000ms)
  ├── Execute function (varies)
  └── Total cold start: 500ms - 5s

Mitigation:
  - Provisioned concurrency (keep warm)
  - Smaller packages (fewer dependencies)
  - Choose fast runtimes (Go, Rust > Java, .NET)
```

---

## 3. Serverless Patterns

### 3.1 API Gateway + Lambda

```
Client ──► API Gateway ──► Lambda ──► DynamoDB
                │
                ├──► /users  → UserFunction
                ├──► /orders → OrderFunction
                └──► /search → SearchFunction

Ưu điểm: Auto-scale, pay per request
Nhược điểm: Cold start, 15m timeout limit
```

### 3.2 Event-Driven Serverless

```
┌──────────┐     ┌────────┐     ┌──────────┐
│ S3       │────►│ Lambda │────►│ DynamoDB │
│ Upload   │     │ Process│     │ Metadata │
└──────────┘     │ image  │     └──────────┘
                 └────┬───┘
                      │
                 ┌────▼───┐
                 │ S3     │
                 │ Thumb  │
                 └────────┘

Events trigger functions:
  - S3: File uploaded → Lambda resize
  - SQS: Message → Lambda process
  - DynamoDB Streams: Record change → Lambda sync
  - CloudWatch: Schedule → Lambda cron job
  - API Gateway: HTTP request → Lambda handler
```

### 3.3 Serverless Web App

```
┌──────────────────────────────────────────────────┐
│                                                    │
│  CloudFront (CDN)                                 │
│       │                                            │
│  ┌────▼────┐                                      │
│  │ S3      │ ← Static files (React/Vue SPA)       │
│  │ Bucket  │                                       │
│  └─────────┘                                       │
│                                                    │
│  API Gateway → Lambda Functions                    │
│       │           │                                │
│       │      ┌────▼─────┐  ┌──────────┐           │
│       │      │ DynamoDB │  │ Cognito  │           │
│       │      │ (data)   │  │ (auth)   │           │
│       │      └──────────┘  └──────────┘           │
│       │                                            │
│  ┌────▼─────┐                                     │
│  │ SQS      │ → Lambda (background)               │
│  └──────────┘                                       │
└──────────────────────────────────────────────────┘

Chi phí (100K requests/tháng):
  Lambda: ~$0.20
  API Gateway: ~$3.50
  DynamoDB: ~$1.00
  S3 + CloudFront: ~$1.00
  Total: ~$6/tháng (vs EC2 ~$20+/tháng)
```

---

## 4. Container Orchestration

### 4.1 Kubernetes Overview

```
┌─────────────────────────────────────────────────┐
│ Kubernetes Cluster                               │
│                                                   │
│ Control Plane:                                    │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│ │API Server│ │Scheduler │ │Controller│          │
│ │          │ │          │ │Manager   │          │
│ └──────────┘ └──────────┘ └──────────┘          │
│                                                   │
│ Worker Nodes:                                     │
│ ┌────────────────────────────────────────┐        │
│ │ Node 1                                 │        │
│ │ ┌──────────┐ ┌──────────┐ ┌────────┐ │        │
│ │ │Pod: App-1│ │Pod: App-2│ │Pod: DB │ │        │
│ │ └──────────┘ └──────────┘ └────────┘ │        │
│ └────────────────────────────────────────┘        │
│ ┌────────────────────────────────────────┐        │
│ │ Node 2                                 │        │
│ │ ┌──────────┐ ┌──────────┐             │        │
│ │ │Pod: App-3│ │Pod: Cache│             │        │
│ │ └──────────┘ └──────────┘             │        │
│ └────────────────────────────────────────┘        │
└─────────────────────────────────────────────────┘

K8s quản lý: Scheduling, Scaling, Self-healing,
Rolling updates, Service discovery, Load balancing
```

### 4.2 Serverless vs Containers vs VMs

| Feature | VM | Container | Serverless |
|---------|-----|-----------|-----------|
| Startup | Minutes | Seconds | Milliseconds* |
| Scaling | Manual/Auto | Auto (K8s) | Instant |
| Management | Full (OS+App) | App + Runtime | Code only |
| Cost model | Per hour | Per hour | Per invocation |
| Max runtime | Unlimited | Unlimited | 15 minutes |
| State | Stateful | Stateful | Stateless |
| Vendor lock | Low | Low | High |

---

## 5. Khi nào dùng Serverless?

```
✅ Dùng khi:
  - Event-driven workloads (file processing, webhooks)
  - Sporadic traffic (low/unpredictable)
  - Rapid prototyping
  - Scheduled tasks (cron jobs)
  - Chatbots, IoT backends
  - APIs with low-medium traffic

❌ KHÔNG dùng khi:
  - Consistent high traffic (vì cost cao hơn containers)
  - Long-running processes (> 15 minutes)
  - Need WebSocket/persistent connections
  - Heavy computation (ML training)
  - Latency-sensitive (cold start vấn đề)
  - Complex stateful workflows
```

---

## 6. Vendor Lock-in Mitigation

```
Vấn đề: AWS Lambda code khó chạy trên GCP/Azure

Mitigation:
  1. Serverless Framework / SAM / CDK:
     Abstract cloud-specific config

  2. Hexagonal Architecture:
     Business logic tách biệt handlers

     // Handler (cloud-specific)
     export const handler = async (event) => {
       return await orderService.createOrder(
         parseRequest(event)  // adapter
       );
     };

     // Business logic (portable)
     class OrderService {
       async createOrder(data) { ... }
     }

  3. Multi-cloud tools:
     Knative (serverless on K8s)
     OpenFaaS (self-hosted FaaS)
```

---

## Tổng kết

| Approach | Best For | Trade-off |
|----------|----------|-----------|
| Cloud VMs | Legacy, stateful | Full control, high ops |
| Containers + K8s | Microservices | Flexible, complex ops |
| Serverless FaaS | Event-driven, variable load | Simple, vendor lock |
| Serverless Containers | Mixed workloads | Balance control/simplicity |

---

## Bài tập

1. **Architecture Choice:** Startup SaaS: team 3, API + web dashboard, 1K users ban đầu, growth uncertain. So sánh: Serverless (Lambda + DynamoDB) vs Container (ECS/K8s + PostgreSQL). Chọn cái nào?

2. **12-Factor Audit:** Review ứng dụng hiện tại của bạn (hoặc tưởng tượng). Kiểm tra 12 factors, liệt kê factors nào vi phạm và cách fix.

3. **Migration Plan:** Monolith Spring Boot app (10 endpoints, PostgreSQL, Redis, cron jobs). Viết kế hoạch migrate sang serverless. Endpoint nào phù hợp Lambda? Cái nào nên giữ container?
