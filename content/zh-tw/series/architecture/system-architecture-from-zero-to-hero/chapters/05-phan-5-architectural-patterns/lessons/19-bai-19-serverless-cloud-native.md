---
id: 019d8a21-c110-7001-d001-e1f2a3b4c519
title: 第 19 課：無伺服器和雲端原生架構
slug: bai-19-serverless-cloud-native-architecture
description: >-
  雲端原生原則（12 因素應用程式）。無伺服器運算：FaaS（Lambda、雲端函數）。容器編排概述。無伺服器模式：API 閘道 +
  Lambda、事件驅動。冷啟動、供應商鎖定以及何時使用無伺服器。
duration_minutes: 140
is_free: false
video_url: null
sort_order: 19
section_title: 第 5 部分：架構模式
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2583" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2583)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1010" cy="40" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="920" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="830" cy="220" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="80" x2="1100" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="110" x2="1050" y2="180" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="960.3108891324554,112.5 960.3108891324554,147.5 930,165 899.6891108675446,147.5 899.6891108675446,112.50000000000001 930,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ 建築 — 第 19 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 19 課：無伺服器和雲端原生</tspan>
      <tspan x="60" dy="42">大樓</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：架構模式</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

雲端改變了我們設計系統的方式。從購買實體伺服器開始，我們現在可以運行程式碼而無需管理基礎架構。本文探討了雲端原生原則和無伺服器架構。

---

## 1. 12 要素應用程式

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

## 2. 無伺服器運算

### 2.1 FaaS（函數即服務）

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

### 2.2 執行模型

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

## 3. 無伺服器模式

### 3.1 API閘道+Lambda

```
Client ──► API Gateway ──► Lambda ──► DynamoDB
                │
                ├──► /users  → UserFunction
                ├──► /orders → OrderFunction
                └──► /search → SearchFunction

Ưu điểm: Auto-scale, pay per request
Nhược điểm: Cold start, 15m timeout limit
```

### 3.2 事件驅動的無伺服器

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

### 3.3 無伺服器 Web 應用程式

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

## 4. 容器編排

### 4.1 Kubernetes 概述

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

### 4.2 無伺服器、容器、虛擬機

|特性|虛擬機器 |貨櫃 |無伺服器|
|--------|-----|------------|------------|
|新創公司|分鐘 |秒|毫秒* |
|縮放 |手動/自動|汽車（K8s）|即時 |
|管理|完整版（作業系統+應用程式）|應用程式 + 運行時 |僅程式碼 |
|成本模型|每小時 |每小時 |每次呼叫|
|最大運行時間|無限|無限| 15 分鐘 |
|狀態|有狀態 |有狀態 |無國籍|
|供應商鎖 |低|低|高|

---

## 5. 何時使用無伺服器？

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

## 6. 緩解供應商鎖定

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

## 總結

|方法|最適合 |權衡|
|----------|----------|------------|
|雲端虛擬機 |傳統，有狀態|完全控制，高操作 |
|容器+K8s |微服務|靈活、複雜的操作 |
|無伺服器 FaaS |事件驅動、可變負載 |簡單，供應商鎖定|
|無伺服器容器 |混合工作負載 |平衡控制/簡單 |

---

## 練習

1. **架構選擇：** 新創SaaS：團隊3，API + Web儀表板，初始1K用戶，成長不確定。比較：無伺服器（Lambda + DynamoDB）與容器（ECS/K8s + PostgreSQL）。選擇哪一個？

2. **12 因素審核：** 審查您目前（或想像的）申請。檢查 12 個因素，列出哪些因素違規以及如何解決。

3. **遷移計畫：** Monolith Spring Boot 應用程式（10 個端點、PostgreSQL、Redis、cron 作業）。編寫向無伺服器遷移的計劃。哪個端點適合 Lambda？哪一個應該容納容器？
