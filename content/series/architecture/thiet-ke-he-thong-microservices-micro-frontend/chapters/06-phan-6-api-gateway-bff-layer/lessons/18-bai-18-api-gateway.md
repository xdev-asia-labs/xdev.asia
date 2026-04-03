---
id: 019e4a33-d418-7b20-c001-b1c2d3e4f518
title: "Bài 18: API Gateway — Kong, APISIX & Envoy thực chiến"
slug: bai-18-api-gateway-kong-apisix-envoy-thuc-chien
description: >-
  API Gateway: tại sao cần, chức năng chính. So sánh Kong vs APISIX vs Envoy Gateway vs AWS API Gateway. Cấu hình authentication, rate limiting, routing, load balancing. Declarative configuration & GitOps.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 6: API Gateway & BFF Layer"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

API Gateway là **entry point duy nhất** cho tất cả API calls từ frontend. Nó xử lý cross-cutting concerns: authentication, rate limiting, routing, monitoring — giúp microservices tập trung vào business logic.

---

## 1. Tại sao cần API Gateway?

### 1.1 Không có Gateway

```
❌ Client gọi trực tiếp services:

Frontend ──► User Service    (port 8001)
         ──► Product Service (port 8002)
         ──► Order Service   (port 8003)
         ──► Cart Service    (port 8004)

Vấn đề:
- Frontend phải biết địa chỉ từng service
- Mỗi service tự implement auth, rate limit, CORS
- Không có single point for monitoring/logging
- Service addresses thay đổi → frontend phải update
```

### 1.2 Với API Gateway

```
✅ Single entry point:

Frontend ──► API Gateway (/api/*) ──► User Service
                                  ──► Product Service
                                  ──► Order Service

API Gateway handles:
├── Authentication (JWT verification)
├── Rate Limiting (100 req/min per user)
├── Routing (path-based → service)
├── Load Balancing (round-robin)
├── SSL Termination
├── CORS
├── Request/Response transformation
└── Monitoring & Logging
```

---

## 2. So sánh API Gateways

| Feature | **Kong** | **APISIX** | **Envoy Gateway** | **AWS API GW** |
|---------|---------|-----------|-------------------|---------------|
| **Core** | Nginx/OpenResty | Nginx/etcd | Envoy Proxy | Managed |
| **Performance** | High | Very High | Very High | High |
| **Plugins** | 100+ | 80+ | Via filters | AWS native |
| **K8s native** | Kong Ingress | APISIX Ingress | K8s Gateway API | N/A |
| **Config** | DB/Declarative | etcd/YAML | K8s CRDs | Console/CF |
| **Dashboard** | Kong Manager | Apache Dashboard | N/A | Console |
| **Cost** | Open-source | Open-source | Open-source | Pay per request |
| **Best for** | General | High-perf, China | K8s native | AWS ecosystem |

---

## 3. Kong Configuration

### 3.1 Declarative Config (kong.yml)

```yaml
_format_version: "3.0"

services:
  - name: product-service
    url: http://product-svc:8080
    routes:
      - name: product-routes
        paths:
          - /api/v1/products
        strip_path: false
    plugins:
      - name: jwt
      - name: rate-limiting
        config:
          minute: 100
          policy: redis
          redis_host: redis
      - name: cors
        config:
          origins: ["https://app.example.com"]
          methods: ["GET", "POST", "PUT", "DELETE"]

  - name: order-service
    url: http://order-svc:8080
    routes:
      - name: order-routes
        paths:
          - /api/v1/orders
    plugins:
      - name: jwt
      - name: rate-limiting
        config:
          minute: 50
```

### 3.2 Key Plugins

| Plugin | Purpose |
|--------|---------|
| `jwt` | Verify JWT tokens |
| `rate-limiting` | Rate limit per consumer |
| `cors` | CORS headers |
| `request-transformer` | Modify request headers/body |
| `response-transformer` | Modify response |
| `prometheus` | Metrics endpoint |
| `file-log` / `tcp-log` | Logging |
| `ip-restriction` | Whitelist/Blacklist IPs |

---

## 4. APISIX Configuration

```yaml
routes:
  - uri: /api/v1/products/*
    upstream:
      type: roundrobin
      nodes:
        "product-svc:8080": 1
    plugins:
      jwt-auth:
        key: "product-key"
      limit-req:
        rate: 100
        burst: 50
        key_type: "var"
        key: "consumer_name"

  - uri: /api/v1/orders/*
    upstream:
      nodes:
        "order-svc:8080": 1
    plugins:
      jwt-auth: {}
```

---

## 5. Gateway Patterns

### 5.1 Path-based Routing

```
/api/v1/products/*  → Product Service
/api/v1/orders/*    → Order Service
/api/v1/users/*     → User Service
/api/v1/cart/*      → Cart Service
```

### 5.2 Header-based Routing

```
X-API-Version: v2 → v2 service
X-Client-Type: mobile → mobile-optimized service
```

### 5.3 Canary Routing

```
95% traffic → Product Service v1 (stable)
5% traffic  → Product Service v2 (canary)
```

---

## 6. GitOps cho API Gateway

```
Repository:
├── gateway/
│   ├── kong.yml (declarative config)
│   ├── plugins/
│   └── consumers/
└── .github/workflows/
    └── deploy-gateway.yml

CI/CD:
1. PR: change gateway config
2. Review: team review routing/auth changes
3. Merge: auto-apply via deck sync (Kong)
4. Monitor: check metrics after deploy
```

---

## Tóm tắt

- API Gateway = **single entry point** cho mọi API calls
- Xử lý cross-cutting: auth, rate limiting, routing, monitoring
- **Kong**: general purpose, mature, plugin-rich
- **APISIX**: high performance, dynamic plugins via etcd
- **Envoy Gateway**: K8s Gateway API native
- **GitOps**: declarative config, version controlled

---

**Bài tiếp theo:** [Bài 19: GraphQL Federation — Unified API cho Micro Frontend](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-19-graphql-federation-unified-api-cho-micro-frontend)
