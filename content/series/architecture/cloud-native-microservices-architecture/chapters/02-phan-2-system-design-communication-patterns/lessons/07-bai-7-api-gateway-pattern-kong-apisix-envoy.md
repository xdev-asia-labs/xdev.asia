---
id: 019d8a22-c307-7a10-b001-a1b2c3d4e507
title: "Bài 7: API Gateway Pattern — Kong, APISIX & Envoy"
slug: bai-7-api-gateway-pattern-kong-apisix-envoy
description: >-
  API Gateway là gì, chức năng (routing, auth, rate limiting, protocol translation),
  so sánh Kong vs APISIX vs Envoy vs Traefik, Backend for Frontend (BFF) pattern,
  cấu hình API Gateway trên Kubernetes.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 7
section_title: "Phần 2: Microservices Design & Communication Patterns"
course:
  id: 019d8a22-c300-7a10-b001-a1b2c3d4e5f7
  title: "Cloud Native Microservices Architecture"
  slug: cloud-native-microservices-architecture
---

![Bài 7: API Gateway Pattern — Kong, APISIX & Envoy](/storage/uploads/2026/03/cn-bai-7-diagram.png)

## Giới thiệu

Khi hệ thống có 10, 50, hay 100 microservices, client không thể gọi trực tiếp từng service. API Gateway đóng vai trò **entry point duy nhất**, xử lý cross-cutting concerns tập trung.

---

## 1. Tại sao cần API Gateway?

### 1.1 Vấn đề khi không có Gateway

```
❌ Client gọi trực tiếp:
Mobile App ──▶ Order Service (https://order.internal:8080)
           ──▶ Payment Service (https://payment.internal:8081)
           ──▶ User Service (https://user.internal:8082)
           ──▶ Catalog Service (https://catalog.internal:8083)

Vấn đề:
├── Client cần biết địa chỉ từng service
├── Mỗi service tự implement auth, rate limit, CORS
├── Thay đổi service address → update client
├── Không có single point để monitor traffic
└── Security: expose internal services ra internet
```

### 1.2 Giải pháp API Gateway

```
✅ Single entry point:
Mobile App ──▶ API Gateway (https://api.example.com)
                   │
                   ├──▶ /orders   → Order Service
                   ├──▶ /payments → Payment Service
                   ├──▶ /users    → User Service
                   └──▶ /products → Catalog Service

Gateway xử lý tập trung:
├── Authentication (JWT validation)
├── Rate Limiting
├── Request Routing
├── Protocol Translation
├── Response Caching
├── Logging & Metrics
└── CORS, Compression
```

---

## 2. Chức năng chi tiết

### 2.1 Request Routing

```yaml
# Kong declarative config
services:
  - name: order-service
    url: http://order-service.services-prod:8080
    routes:
      - name: order-routes
        paths:
          - /api/v1/orders
        methods:
          - GET
          - POST
        strip_path: false

  - name: payment-service
    url: http://payment-service.services-prod:8080
    routes:
      - name: payment-routes
        paths:
          - /api/v1/payments
```

### 2.2 Authentication

```
Client ──Bearer Token──▶ API Gateway
                              │
                         JWT Validation:
                         ├── Verify signature (RS256/ES256)
                         ├── Check expiration
                         ├── Validate issuer
                         └── Extract claims (user_id, roles, tenant_id)
                              │
                         Forward headers:
                         X-User-ID: usr-042
                         X-Roles: admin,editor
                         X-Tenant-ID: tenant-001
                              │
                              ▼
                         Downstream Service
                         (trust gateway headers)
```

### 2.3 Rate Limiting

```
Rate Limiting Strategies:

Per User:
  user-A: 100 requests / minute
  user-B: 100 requests / minute

Per API:
  GET /orders:  1000 requests / minute
  POST /orders: 100 requests / minute

Per Service Plan:
  Free tier:  60 requests / minute
  Pro tier:   600 requests / minute
  Enterprise: 6000 requests / minute

Response khi exceed:
  HTTP 429 Too Many Requests
  Retry-After: 30
  X-RateLimit-Limit: 100
  X-RateLimit-Remaining: 0
  X-RateLimit-Reset: 1711872000
```

### 2.4 Protocol Translation

```
Browser (REST/JSON) ──▶ API Gateway ──▶ gRPC Service
                              │
                     Translate:
                     - JSON → Protobuf
                     - HTTP/1.1 → HTTP/2
                     - REST method → gRPC method

WebSocket ──▶ API Gateway ──▶ Streaming Service
GraphQL   ──▶ API Gateway ──▶ REST Services (aggregation)
```

---

## 3. So sánh Gateway Solutions

| Feature | Kong | APISIX | Envoy | Traefik |
|---------|------|--------|-------|---------|
| **Core** | Nginx + Lua | Nginx + Lua | C++ | Go |
| **Config Store** | PostgreSQL | etcd | xDS API | File / K8s |
| **Plugin System** | Lua/Go/JS | Lua/Java/Go/WASM | C++/WASM | Go middleware |
| **Performance** | Cao | Rất cao | Rất cao | Cao |
| **K8s Native** | Kong Ingress Controller | APISIX Ingress | Envoy Gateway | Traefik Ingress |
| **Service Mesh** | Kong Mesh | — | Istio Data Plane | Traefik Mesh |
| **Admin UI** | Kong Manager (Enterprise) | Dashboard (Free) | — | Dashboard |
| **Learning Curve** | Trung bình | Trung bình | Cao | Thấp |
| **Best For** | Enterprise, plugin-rich | High performance | Service mesh | K8s auto-discovery |

### 3.1 Khuyến nghị

```
Startup / Small team:
  → Traefik (auto-discovery, Let's Encrypt built-in)

Medium / High performance:
  → APISIX (etcd-backed, hot reload, dashboard free)

Enterprise / Plugin-rich:
  → Kong (mature ecosystem, enterprise support)

Service Mesh integration:
  → Envoy (Istio data plane, xDS API)

AWS ecosystem:
  → AWS API Gateway + ALB
```

---

## 4. Backend for Frontend (BFF) Pattern

Khi các client types (Web, Mobile, IoT) cần **API khác nhau**:

```
┌──────────┐   ┌──────────────┐
│   Web    │──▶│  Web BFF     │──┐
│  Browser │   │ (REST, rich) │  │
└──────────┘   └──────────────┘  │
                                  │
┌──────────┐   ┌──────────────┐  │    ┌──────────────┐
│  Mobile  │──▶│ Mobile BFF   │──┼───▶│  Backend     │
│   App    │   │ (compact)    │  │    │  Services    │
└──────────┘   └──────────────┘  │    └──────────────┘
                                  │
┌──────────┐   ┌──────────────┐  │
│   IoT    │──▶│  IoT BFF     │──┘
│ Devices  │   │ (minimal)    │
└──────────┘   └──────────────┘

Web BFF: Trả full data, rich response
Mobile BFF: Response compact, ít fields, optimized bandwidth
IoT BFF: Minimal payload, binary protocol
```

---

## 5. Deployment trên Kubernetes

### 5.1 Kong Ingress Controller

```yaml
# Cài đặt Kong qua Helm
# helm install kong kong/ingress -n gateway --create-namespace

apiVersion: configuration.konghq.com/v1
kind: KongPlugin
metadata:
  name: rate-limiting
config:
  minute: 100
  policy: redis
  redis_host: redis.platform
plugin: rate-limiting

---
apiVersion: configuration.konghq.com/v1
kind: KongPlugin
metadata:
  name: jwt-auth
plugin: jwt

---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress
  annotations:
    konghq.com/plugins: rate-limiting, jwt-auth
    konghq.com/strip-path: "false"
spec:
  ingressClassName: kong
  tls:
    - hosts:
        - api.example.com
      secretName: api-tls
  rules:
    - host: api.example.com
      http:
        paths:
          - path: /api/v1/orders
            pathType: Prefix
            backend:
              service:
                name: order-service
                port:
                  number: 8080
          - path: /api/v1/payments
            pathType: Prefix
            backend:
              service:
                name: payment-service
                port:
                  number: 8080
```

---

## 6. API Gateway Anti-patterns

```
❌ Business logic trong Gateway
   → Gateway chỉ xử lý cross-cutting concerns
   → Business logic thuộc về downstream services

❌ Gateway là single point of failure
   → Deploy multiple replicas + load balancer
   → Health check + auto-restart

❌ Quá nhiều aggregation trong Gateway
   → Dùng BFF pattern thay vì biến Gateway thành "God Service"

❌ Không có fallback khi downstream down
   → Implement circuit breaker tại Gateway layer
   → Trả cached response hoặc degraded response
```

---

## 7. Tổng kết

| Concept | Key Point |
|---------|-----------|
| API Gateway | Single entry point, xử lý cross-cutting concerns tập trung |
| Routing | Route requests đến đúng downstream service |
| Auth | JWT validation tập trung, forward claims via headers |
| Rate Limiting | Bảo vệ backend services khỏi traffic spike |
| BFF | Mỗi client type có gateway riêng, optimized |
| Anti-patterns | Không đặt business logic trong gateway |

> **Bài tiếp theo**: Database per Service & Polyglot Persistence — Cách quản lý dữ liệu trong kiến trúc microservices.
