---
id: 019d8a21-c110-7001-d001-e1f2a3b4c519
title: 'Lesson 19: Serverless & Cloud-Native Architecture'
slug: bai-19-serverless-cloud-native-architecture
description: >-
  Cloud-Native principles (12-Factor App). Serverless computing: FaaS (Lambda,
  Cloud Functions). Container orchestration overview. Serverless patterns: API
  Gateway + Lambda, Event-driven. Cold start, vendor lock-in, and when to use
  Serverless.
duration_minutes: 140
is_free: false
video_url: null
sort_order: 19
section_title: 'Part 5: Architectural Patterns'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'System Architecture: From Zero to Hero'
  slug: system-architecture-from-zero-to-hero
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🏗️ Architecture — Lesson 19</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 19: Serverless & Cloud-Native</tspan>
      <tspan x="60" dy="42">Architecture</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Architectural Patterns</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Cloud has changed the way we design systems. From purchasing a physical server, we can now run code without needing to manage infrastructure. This article explores Cloud-Native principles and Serverless architecture.

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

| Features | VM | Containers | Serverless |
|--------|-----|-----------|-----------|
| Startups | Minutes | Seconds | Milliseconds* |
| Scaling | Manual/Auto | Auto (K8s) | Instant |
| Management | Full (OS+App) | App + Runtime | Code only |
| Cost model | Per hour | Per hour | Per invocation |
| Max runtime | Unlimited | Unlimited | 15 minutes |
| State | Stateful | Stateful | Stateless |
| Vendor lock | Low | Low | High |

---

## 5. When to use Serverless?

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

## Summary

| Approach | Best For | Trade-off |
|----------|----------|-----------|
| Cloud VMs | Legacy, stateful | Full control, high ops |
| Containers + K8s | Microservices | Flexible, complex ops |
| Serverless FaaS | Event-driven, variable load | Simple, vendor lock |
| Serverless Containers | Mixed workloads | Balance control/simplicity |

---

## Exercises

1. **Architecture Choice:** Startup SaaS: team 3, API + web dashboard, initial 1K users, growth uncertain. Comparison: Serverless (Lambda + DynamoDB) vs Containers (ECS/K8s + PostgreSQL). Which one to choose?

2. **12-Factor Audit:** Review your current (or imagined) application. Check 12 factors, list which factors are in violation and how to fix them.

3. **Migration Plan:** Monolith Spring Boot app (10 endpoints, PostgreSQL, Redis, cron jobs). Write a migration plan to serverless. Which endpoint is suitable for Lambda? Which one should hold the container?
