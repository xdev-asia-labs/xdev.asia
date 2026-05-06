---
id: 019d8a21-c110-7001-d001-e1f2a3b4c517
title: 'Lesson 17: Service Communication Patterns'
slug: bai-17-service-communication-patterns
description: >-
  Synchronous: REST, gRPC, GraphQL detailed comparison. Asynchronous:
  Message-based, Event-based. Service Mesh (Istio, Linkerd). Circuit Breaker,
  Retry, Timeout patterns. API versioning strategies.
duration_minutes: 150
is_free: false
video_url: null
sort_order: 17
section_title: 'Part 5: Architectural Patterns'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'System Architecture: From Zero to Hero'
  slug: system-architecture-from-zero-to-hero
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6798" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6798)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1062" cy="96" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="1024" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="986" cy="140" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="948" cy="162" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="184" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="176" x2="1100" y2="256" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="206" x2="1050" y2="276" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.8467875173176,210.5 1052.8467875173176,241.5 1026,257 999.1532124826824,241.5 999.1532124826824,210.5 1026,195" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🏗️ Architecture — Lesson 17</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 17: Service Communication Patterns</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Architectural Patterns</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

In microservices, services need to communicate with each other. Choosing the wrong communication pattern can lead to cascading failures, high latency, and tight coupling. This article analyzes all the popular patterns.

---

## 1. Synchronous Communication

### 1.1 REST

```
GET /api/users/123 HTTP/1.1
Host: user-service
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "name": "Duy Tran",
  "email": "duy@example.com"
}

Ưu điểm:
  ✅ Simple, human-readable
  ✅ Widely supported
  ✅ HTTP caching
  ✅ Dễ debug (curl, Postman)

Nhược điểm:
  ❌ Over-fetching / Under-fetching
  ❌ Multiple round trips (N+1)
  ❌ Text-based → larger payload
```

### 1.2 gRPC

```
// Proto definition
service UserService {
  rpc GetUser(GetUserRequest) returns (User);
  rpc ListUsers(ListUsersRequest) returns (stream User);
}

message User {
  int64 id = 1;
  string name = 2;
  string email = 3;
}

Ưu điểm:
  ✅ Binary (Protobuf) → nhỏ hơn, nhanh hơn
  ✅ HTTP/2 → multiplexing, streaming
  ✅ Strongly typed (code generation)
  ✅ Bi-directional streaming

Nhược điểm:
  ❌ Không human-readable
  ❌ Browser support hạn chế (cần grpc-web)
  ❌ Khó debug hơn REST
```

### 1.3 GraphQL

```graphql
# Client quyết định lấy fields nào
query {
  user(id: 123) {
    name
    orders(last: 5) {
      id
      total
      items {
        product { name }
      }
    }
  }
}

# 1 request lấy đúng data cần thiết
# Không over-fetching, không under-fetching

Ưu điểm:
  ✅ Client-driven queries
  ✅ Single endpoint
  ✅ Strongly typed schema
  ✅ Introspection

Nhược điểm:
  ❌ Complexity (resolver, dataloader)
  ❌ Caching khó hơn REST
  ❌ N+1 queries ở backend
  ❌ Security (query depth attacks)
```

### 1.4 Compare

| Features | REST | gRPC | GraphQL |
|--------|-------|--------|--------|
| Protocols | HTTP/1.1+ | HTTP/2 | HTTP |
| Format | JSON | Protobuf | JSON |
| Type safety | Weak | Strong | Strong |
| Streaming | No (SSE) | Yes | Subscriptions |
| Browser | Yes | Limited | Yes |
| Best for | Public APIs | Service↔Service | Frontend↔Backend |
| Performance | Medium | High | Medium |

---

## 2. Asynchronous Communication

### 2.1 Message-Based (Point-to-Point)

```
Order Service ──message──► Queue ──► Payment Service

  Tight contract: Order Service biết Payment Service sẽ xử lý
  1 message → 1 consumer
  Use case: Task distribution
```

### 2.2 Event-Based (Pub/Sub)

```
Order Service ──event──► Topic
                            │
                  ┌─────────┼─────────┐
                  ▼         ▼         ▼
              Payment   Inventory   Email

  Loose coupling: Order Service KHÔNG biết ai subscribe
  1 event → N consumers
  Use case: Notifications, data sync
```

### 2.3 Request-Reply (Async)

```
Order Service ──► Request Queue ──► Payment Service
                                        │
Order Service ◄── Reply Queue ◄─────────┘

  Correlation ID để match request ↔ reply
  Async nhưng vẫn request-response semantic
```

---

## 3. Resilience Patterns

### 3.1 Circuit Breaker

```
States:
  CLOSED (normal):
    Requests đi qua bình thường
    Đếm failures

  OPEN (tripped):
    Failures > threshold → OPEN
    Requests bị reject ngay (fail fast)
    Không gọi downstream service

  HALF-OPEN (testing):
    After timeout → cho 1 request thử
    Success → CLOSED
    Fail → OPEN lại

  ┌────────┐  failure > 5  ┌────────┐
  │ CLOSED │──────────────►│  OPEN  │
  │        │◄──────────────│        │
  └────────┘  success      └───┬────┘
                               │ timeout
                         ┌─────▼─────┐
                         │ HALF-OPEN │
                         └───────────┘
```

### 3.2 Retry with Exponential Backoff

```
Attempt 1: Fail → Wait 1s
Attempt 2: Fail → Wait 2s
Attempt 3: Fail → Wait 4s
Attempt 4: Fail → Wait 8s + jitter
Attempt 5: Fail → Give up, return error

Jitter: Random delay thêm vào
  Tránh "thundering herd" khi nhiều clients retry cùng lúc

Retry Budget:
  Max 20% requests là retries
  Tránh retry storm amplification
```

### 3.3 Timeout Strategy

```
Cascading timeout:

  Client ──(timeout: 5s)──► API Gateway
  API Gateway ──(timeout: 3s)──► Order Service
  Order Service ──(timeout: 1s)──► Payment Service

  Rule: Outer timeout > Inner timeout
  Tránh: Client đã timeout nhưng backend vẫn xử lý
```

### 3.4 Bulkhead

```
Vấn đề: 1 slow service chiếm hết threads → toàn bộ app chậm

Giải pháp: Isolate resource pools

  ┌─────────────────────────────────────┐
  │ Application                         │
  │                                     │
  │ ┌─────────────┐ ┌─────────────┐    │
  │ │ Thread Pool │ │ Thread Pool │    │
  │ │ Service A   │ │ Service B   │    │
  │ │ (10 threads)│ │ (10 threads)│    │
  │ └─────────────┘ └─────────────┘    │
  │                                     │
  │ Service A chậm → Pool A hết        │
  │ Service B vẫn hoạt động bình thường │
  └─────────────────────────────────────┘
```

---

## 4. Service Mesh

### 4.1 Sidecar Pattern

```
Không có Service Mesh:
  Service A ──(retry, circuit breaker, mTLS, tracing)──► Service B
  Logic phức tạp TRONG code mỗi service

Có Service Mesh:
  ┌──────────────────┐         ┌──────────────────┐
  │ Pod A            │         │ Pod B            │
  │ ┌──────────────┐ │         │ ┌──────────────┐ │
  │ │ Service A    │ │         │ │ Service B    │ │
  │ │ (business    │ │         │ │ (business    │ │
  │ │  logic only) │ │         │ │  logic only) │ │
  │ └──────┬───────┘ │         │ └──────▲───────┘ │
  │        │         │         │        │         │
  │ ┌──────▼───────┐ │         │ ┌──────┴───────┐ │
  │ │ Sidecar Proxy│◄├─────────├►│ Sidecar Proxy│ │
  │ │ (Envoy)      │ │  mTLS   │ │ (Envoy)      │ │
  │ │ retry,circuit│ │         │ │ retry,circuit│ │
  │ │ trace,metrics│ │         │ │ trace,metrics│ │
  │ └──────────────┘ │         │ └──────────────┘ │
  └──────────────────┘         └──────────────────┘

  Control Plane (Istio/Linkerd):
    Config policies, certificates, routing rules
```

---

## 5. API Versioning

```
1. URL versioning:
   /api/v1/users    → Version 1
   /api/v2/users    → Version 2
   Simple, explicit

2. Header versioning:
   Accept: application/vnd.myapp.v2+json
   Clean URLs

3. Query parameter:
   /api/users?version=2
   Easy to test

4. No versioning (evolution):
   Thêm fields mới (backward compatible)
   Deprecate old fields (nhưng không remove)
   GraphQL style
```

---

## Summary

| Pattern | When to Use |
|--------|-------------|
| REST | Public APIs, simple CRUD |
| gRPC | Service ↔ Service, performance critical |
| GraphQL | Complex frontend queries |
| Async/Events | Loose coupling, eventual consistency |
| Circuit Breaker | Protect against cascading failures |
| Service Mesh | Many services, complex networking |

---

## Exercises

1. **Protocol Choice:** Microservices: API Gateway → User Service, Order Service → Inventory Service, Frontend → BFF. Select REST/gRPC/GraphQL for each pair. Explain.

2. **Circuit Breaker Config:** Payment Service has SLA 99.9% (43 minutes downtime/month). Design circuit breaker config: failure threshold, timeout, half-open requests, recovery time.

3. **Resilience Design:** Service A calls Service B (critical), Service C (optional). Design retry + timeout + fallback strategy for each dependency.
