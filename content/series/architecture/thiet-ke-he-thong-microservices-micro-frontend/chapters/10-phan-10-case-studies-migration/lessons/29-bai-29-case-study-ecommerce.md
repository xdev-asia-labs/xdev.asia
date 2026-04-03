---
id: 019e4a33-d429-7b20-c001-b1c2d3e4f529
title: "Bài 29: Case Study — E-Commerce Platform triển khai thực tế"
slug: bai-29-case-study-e-commerce-platform-trien-khai-thuc-te
description: >-
  Áp dụng toàn bộ kiến thức vào Case Study E-Commerce thực tế. Architecture decision records. Service design từ DDD. Micro Frontend decomposition. Infrastructure setup. Deployment pipeline. Monitoring dashboard. Lessons learned.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 29
section_title: "Phần 10: Case Studies & Migration Guide"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Bài này tổng hợp tất cả kiến thức từ 28 bài trước, áp dụng vào **E-Commerce Platform thực tế**. Từ architecture decision → implementation → deployment → monitoring.

---

## 1. System Requirements

### 1.1 Business Requirements

```
ShopX E-Commerce Platform:
├── Product catalog: 100K+ products
├── Users: 500K registered, 50K DAU
├── Orders: 5K orders/day, peak 500 orders/hour
├── Teams: 5 feature teams + 1 platform team
├── SLA: 99.9% uptime, p95 < 500ms
└── Growth: 3x yearly
```

### 1.2 Architecture Decision Records (ADR)

```
ADR-001: Microservices Architecture
- Status: Accepted
- Context: Monolith đã quá lớn (500K LOC), 5 teams conflict
- Decision: Decompose thành Microservices theo DDD
- Consequences: Distributed complexity, cần invest vào infra

ADR-002: Micro Frontend with Module Federation
- Status: Accepted
- Context: Frontend monolith (React, 300+ components)
- Decision: Module Federation, 1 MFE per team
- Consequences: Shared UI library cần, performance budget enforce

ADR-003: Event-Driven Architecture (Kafka)
- Status: Accepted
- Context: Cần loose coupling, event replay, audit trail
- Decision: Apache Kafka cho domain events
- Consequences: Eventual consistency, team cần learn async patterns
```

---

## 2. Service Design (DDD-based)

```
Bounded Contexts → Services:

┌─────────────────────────────────────────────────┐
│ Core Domain                                     │
│ ├── Product Service (Catalog, Search, Review)   │
│ │   DB: PostgreSQL + Elasticsearch              │
│ │   Team: Product Team (4 devs)                │
│ │                                               │
│ └── Order Service (Checkout, Tracking, History) │
│     DB: PostgreSQL (Event Sourcing)             │
│     Team: Order Team (4 devs)                  │
├─────────────────────────────────────────────────┤
│ Supporting Domain                               │
│ ├── User Service (Auth, Profile, Address)       │
│ │   DB: PostgreSQL                              │
│ ├── Cart Service (Cart, Wishlist)               │
│ │   DB: Redis                                   │
│ ├── Inventory Service (Stock, Warehouse)        │
│ │   DB: PostgreSQL                              │
│ └── Notification Service (Email, Push, SMS)     │
│     DB: PostgreSQL                              │
├─────────────────────────────────────────────────┤
│ Generic Domain                                  │
│ ├── Payment Service → Stripe/VNPay integration  │
│ └── Auth → Keycloak (off-the-shelf)            │
└─────────────────────────────────────────────────┘
```

---

## 3. Micro Frontend Decomposition

```
Shell App (Platform Team):
├── Global Header, Footer, Sidebar
├── Routing orchestration
├── Auth integration (Keycloak)
└── Design System (@shopx/ui)

Product MFE (Product Team):
├── Product List / Grid
├── Product Detail
├── Search & Filters
├── Reviews
└── Route: /products/*

Cart MFE (Cart Team):
├── Cart Page
├── Mini Cart (header widget)
├── Wishlist
└── Route: /cart/*, globally: MiniCart component

Order MFE (Order Team):
├── Checkout flow
├── Order History
├── Order Tracking
└── Route: /orders/*, /checkout/*

Account MFE (User Team):
├── Profile, Addresses
├── Payment Methods
├── Preferences
└── Route: /account/*
```

---

## 4. Infrastructure Architecture

```
AWS Architecture:

┌─────────────────────────────────────────────┐
│ CloudFront CDN                              │
│ (MFE static assets, caching)               │
├─────────────────────────────────────────────┤
│ ALB (Application Load Balancer)             │
├─────────────────────────────────────────────┤
│ EKS Cluster (Kubernetes)                    │
│                                             │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│ │ Kong    │ │ Web BFF │ │ Services│       │
│ │ Gateway │→│ (Node)  │→│ (pods)  │       │
│ └─────────┘ └─────────┘ └─────────┘       │
│                                             │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│ │ Kafka   │ │ Redis    │ │ OTEL    │       │
│ │ (MSK)   │ │(Elasti-  │ │Collector│       │
│ │         │ │ Cache)   │ │         │       │
│ └─────────┘ └─────────┘ └─────────┘       │
├─────────────────────────────────────────────┤
│ RDS PostgreSQL (Multi-AZ)                  │
│ ElastiCache Redis                          │
│ Amazon MSK (Kafka)                         │
│ Amazon Elasticsearch                       │
└─────────────────────────────────────────────┘
```

---

## 5. Key Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Frontend framework | React + Module Federation | Team expertise, MFE support |
| Backend runtime | Node.js (Fastify) | Same language as FE, fast I/O |
| API style | GraphQL (BFF) + gRPC (internal) | Flexible queries + fast internal |
| Database | PostgreSQL + Redis + ES | Polyglot, proven, scalable |
| Message broker | Apache Kafka | Event sourcing, replay, durability |
| Auth | Keycloak | Open-source, OIDC, RBAC |
| CI/CD | GitHub Actions + ArgoCD | GitOps, K8s native |
| Monitoring | Grafana + Prometheus + Loki + Tempo | Full observability stack |
| Deployment | Canary (Argo Rollouts) | Progressive, auto-analysis |

---

## 6. Lessons Learned

```
1. Start with 3-4 services, not 15
   → Quá nhiều services ban đầu = quá nhiều complexity

2. Design System trước khi build MFE
   → UX inconsistency rất khó fix sau

3. Contract Testing saves production
   → Đầu tư vào Pact sớm, ROI rất cao

4. Observability từ Day 1
   → Không phải "thêm sau được" — cần tracing từ đầu

5. Feature Flags cho mọi feature mới
   → Decouple deploy from release

6. Event Sourcing chỉ cho Order Service
   → CQRS cho Product (search), CRUD cho User/Cart
   → Đừng over-engineer

7. Mono-repo (Turborepo) cho giai đoạn đầu
   → Cross-cutting changes dễ, shared code seamless
   → Evaluate multi-repo khi team > 50
```

---

## Tóm tắt

Case study này chứng minh kiến trúc có thể **practical** và **production-ready** khi áp dụng đúng patterns cho đúng use case. Không phải mọi service đều cần Event Sourcing, không phải mọi frontend đều cần Micro Frontend.

---

**Bài tiếp theo:** [Bài 30: Migration Guide — Từ Monolith đến Microservices + Micro Frontend](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-30-migration-guide-tu-monolith-den-microservices-micro-frontend)
