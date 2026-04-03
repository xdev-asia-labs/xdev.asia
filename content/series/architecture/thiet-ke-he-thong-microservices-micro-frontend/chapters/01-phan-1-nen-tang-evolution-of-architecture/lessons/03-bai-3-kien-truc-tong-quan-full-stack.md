---
id: 019e4a33-d403-7b20-c001-b1c2d3e4f503
title: "Bài 3: Kiến trúc tổng quan Full-Stack — Microservices + Micro Frontend + BFF"
slug: bai-3-kien-truc-tong-quan-full-stack-microservices-micro-frontend-bff
description: >-
  Blueprint kiến trúc toàn diện: Frontend (Micro Frontend Shell + Remote Apps), BFF Layer, API Gateway, Backend Microservices, Message Broker, Database per Service. Luồng request end-to-end và các điểm tích hợp chính.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Nền tảng — Evolution of Architecture"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Sau khi hiểu lộ trình tiến hóa kiến trúc và DDD, bài này vẽ ra **blueprint tổng quan** cho hệ thống Full-Stack Microservices + Micro Frontend — bản đồ kiến trúc mà chúng ta sẽ đi sâu vào từng phần trong suốt series.

---

## 1. Architecture Overview

### 1.1 Full-Stack Architecture Blueprint

```
┌─────────────────────────────────────────────────────┐
│                    CLIENTS                          │
│            (Browser, Mobile, IoT)                   │
└──────────────────────┬──────────────────────────────┘
                       │
┌──────────────────────┴──────────────────────────────┐
│              CDN (Static Assets)                    │
│         CloudFront / CloudFlare / Vercel            │
└──────────────────────┬──────────────────────────────┘
                       │
┌──────────────────────┴──────────────────────────────┐
│           MICRO FRONTEND LAYER                      │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────────┐  │
│  │Shell │ │Produc│ │ Cart │ │Order │ │ Account  │  │
│  │ App  │ │ MFE  │ │ MFE  │ │ MFE  │ │   MFE    │  │
│  └──┬───┘ └──┬───┘ └──┬───┘ └──┬───┘ └────┬─────┘  │
└─────┼────────┼────────┼────────┼──────────┼─────────┘
      └────────┴────────┴────────┴──────────┘
                       │
┌──────────────────────┴──────────────────────────────┐
│              BFF LAYER (Optional)                   │
│        Backend for Frontend Aggregation             │
└──────────────────────┬──────────────────────────────┘
                       │
┌──────────────────────┴──────────────────────────────┐
│              API GATEWAY                            │
│     (Kong / APISIX / Envoy Gateway)                 │
│  Auth │ Rate Limit │ Routing │ Load Balance         │
└──┬────────┬────────────┬────────────┬───────────────┘
   │        │            │            │
┌──┴──┐ ┌───┴───┐  ┌────┴────┐  ┌────┴────┐
│User │ │Product│  │  Cart   │  │  Order  │
│ µS  │ │  µS   │  │   µS    │  │   µS    │
│     │ │       │  │         │  │         │
│┌───┐│ │┌────┐ │  │ ┌─────┐ │  │ ┌─────┐ │
││PG ││ ││PG  │ │  │ │Redis│ │  │ │ PG  │ │
│└───┘│ │└────┘ │  │ └─────┘ │  │ └─────┘ │
└─────┘ └───────┘  └─────────┘  └────┬────┘
                                     │
┌────────────────────────────────────┴────────────────┐
│              MESSAGE BROKER                         │
│         (Kafka / RabbitMQ / NATS)                   │
│    Events: OrderPlaced, PaymentConfirmed, etc.      │
└─────────────────────────────────────────────────────┘
```

---

## 2. Các Layer chính

### 2.1 Micro Frontend Layer

Shell Application (Container) điều phối các Remote Micro Frontend applications. Mỗi MFE là một ứng dụng độc lập, được build và deploy riêng biệt.

**Trách nhiệm Shell App:**
- Layout chung (Header, Footer, Sidebar)
- Routing & Navigation
- Authentication state
- Error boundaries

### 2.2 BFF Layer

Backend for Frontend aggregates data từ nhiều microservices, transform thành format phù hợp cho từng micro frontend. Đặc biệt hữu ích khi:
- Frontend cần data từ nhiều services trong 1 request
- Mobile vs Web cần data format khác nhau
- Cần caching layer riêng cho frontend

### 2.3 API Gateway

Entry point cho tất cả API calls. Xử lý cross-cutting concerns:
- **Authentication/Authorization**: Verify JWT tokens
- **Rate Limiting**: Bảo vệ backend khỏi abuse
- **Request Routing**: Route đến đúng service
- **Load Balancing**: Phân phối traffic
- **SSL Termination**: Xử lý HTTPS

### 2.4 Microservices Layer

Mỗi microservice own một Bounded Context, có database riêng, deploy độc lập. Giao tiếp qua REST/gRPC (sync) hoặc Message Broker (async).

### 2.5 Message Broker / Event Bus

Backbone cho async communication giữa các services. Đảm bảo loose coupling và event-driven data flow.

---

## 3. Request Flow End-to-End

```
User clicks "Add to Cart" trên Product MFE:

1. Product MFE → Shell App (event: addToCart)
2. Shell App → API Gateway (POST /api/cart/items)
3. API Gateway → Auth check → Route đến Cart Service
4. Cart Service → Validate product (call Product Service via gRPC)
5. Cart Service → Save to Redis
6. Cart Service → Publish event "ItemAddedToCart" lên Kafka
7. Response → API Gateway → Shell App
8. Shell App → Cart MFE (update cart badge via custom event)
9. Recommendation Service (async) → Listen event → Update recommendations
```

---

## 4. Technology Stack Overview

| Layer | Technology | Why |
|-------|-----------|-----|
| Micro Frontend | React + Module Federation | Mature ecosystem, large community |
| Shell App | React + React Router | SPA routing, lazy loading |
| Design System | Tailwind CSS + Storybook | Consistent UI, component library |
| BFF | Node.js (Fastify) | Same language as frontend, fast I/O |
| API Gateway | Kong / APISIX | Plugin ecosystem, high performance |
| Microservices | Node.js / Go | Node cho CRUD, Go cho high-perf |
| Message Broker | Apache Kafka | Durability, replayability, high throughput |
| Databases | PostgreSQL, Redis, Elasticsearch | Polyglot persistence |
| Auth | Keycloak | Open-source, full OAuth2/OIDC |
| CI/CD | GitHub Actions + ArgoCD | GitOps, Kubernetes-native |
| Observability | OpenTelemetry + Grafana Stack | Vendor-neutral, full-stack tracing |

---

## Tóm tắt

Bài này cung cấp **bản đồ kiến trúc** tổng quan cho toàn series. Mỗi layer sẽ được đi sâu trong các phần tiếp theo. Hiểu big picture giúp bạn không bị lạc khi đi vào chi tiết từng component.

---

**Bài tiếp theo:** [Bài 4: Service Decomposition — Bounded Context & Service Boundaries](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-4-service-decomposition-bounded-context-service-boundaries)
