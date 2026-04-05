---
id: 019e4a33-d405-7b20-c001-b1c2d3e4f505
title: "Bài 5: API Design Masterclass — REST, GraphQL & gRPC"
slug: bai-5-api-design-masterclass-rest-graphql-grpc
description: >-
  So sánh chi tiết REST vs GraphQL vs gRPC: use cases, performance, trade-offs. RESTful API best practices, GraphQL schema design, gRPC với Protocol Buffers. API versioning strategies và backward compatibility.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Thiết kế Microservices Backend"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8640" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8640)"/>

  <!-- Decorations -->
  <g>
    <circle cx="623" cy="279" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="646" cy="102" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="669" cy="185" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="692" cy="268" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="91" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="229" x2="1100" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="259" x2="1050" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1067.1051177665154,207 1067.1051177665154,251 1029,273 990.8948822334847,251 990.8948822334847,207 1029,185" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ Kiến trúc — Bài 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 5: API Design Masterclass — REST,</tspan>
      <tspan x="60" dy="42">GraphQL &amp; gRPC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Thiết kế hệ thống Microservices &amp; Micro Frontend — Từ cơ bản đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Thiết kế Microservices Backend</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

API là **hợp đồng** giữa các services và giữa backend với frontend. Chọn đúng API style và thiết kế tốt quyết định sự thành bại của kiến trúc microservices. Bài này deep-dive 3 API styles phổ biến nhất và hướng dẫn chọn đúng cho từng use case.

---

## 1. REST API — The Default Choice

### 1.1 RESTful Best Practices

**Resource-based URLs:**
```
GET    /api/v1/products              → List products
GET    /api/v1/products/{id}         → Get product
POST   /api/v1/products              → Create product
PUT    /api/v1/products/{id}         → Update product
PATCH  /api/v1/products/{id}         → Partial update
DELETE /api/v1/products/{id}         → Delete product
GET    /api/v1/products/{id}/reviews → Nested resource
```

**Pagination (cursor-based):**
```json
{
  "data": [...],
  "pagination": {
    "next_cursor": "eyJpZCI6MTAwfQ==",
    "has_more": true,
    "total": 1500
  }
}
```

**Error Response chuẩn:**
```json
{
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "Product with id '123' not found",
    "details": []
  }
}
```

### 1.2 API Versioning Strategies

| Strategy | Example | Pros | Cons |
|----------|---------|------|------|
| URL Path | `/api/v1/products` | Explicit, easy to route | URL changes |
| Header | `Accept: application/vnd.api.v2+json` | Clean URLs | Hidden |
| Query Param | `/api/products?version=2` | Simple | Messy |

**Khuyến nghị:** URL Path versioning — đơn giản, rõ ràng, dễ route tại API Gateway.

### 1.3 Khi nào dùng REST
- Public API cho third-party
- CRUD operations đơn giản
- Caching quan trọng (HTTP native caching)
- Team quen thuộc, tooling mature

---

## 2. GraphQL — Flexible Queries

### 2.1 Tại sao GraphQL cho Micro Frontend?

Mỗi Micro Frontend cần **data khác nhau** từ cùng service:
```graphql
# Product MFE (cần đầy đủ thông tin)
query ProductDetail {
  product(id: "123") {
    id, name, description, price
    images { url, alt }
    reviews { rating, comment, user { name } }
    relatedProducts { id, name, price }
  }
}

# Cart MFE (chỉ cần tên + giá)
query CartItem {
  product(id: "123") {
    id, name, price, thumbnail
  }
}
```

→ GraphQL giải quyết **over-fetching** (REST trả về quá nhiều) và **under-fetching** (REST cần gọi nhiều endpoints).

### 2.2 Schema Design Best Practices

```graphql
type Product {
  id: ID!
  name: String!
  slug: String!
  price: Money!
  images: [Image!]!
  category: Category!
  reviews(first: Int, after: String): ReviewConnection!
}

type Money {
  amount: Float!
  currency: Currency!
}

type ReviewConnection {
  edges: [ReviewEdge!]!
  pageInfo: PageInfo!
}
```

### 2.3 Khi nào dùng GraphQL
- Frontend cần flexibility trong data fetching
- Multiple frontend clients cần data khác nhau
- BFF layer hoặc API Gateway aggregation
- Complex, nested data relationships

---

## 3. gRPC — High Performance Internal

### 3.1 Protocol Buffers

```protobuf
// product.proto
syntax = "proto3";

service ProductService {
  rpc GetProduct(GetProductRequest) returns (Product);
  rpc ListProducts(ListProductsRequest) returns (stream Product);
  rpc CreateProduct(CreateProductRequest) returns (Product);
}

message Product {
  string id = 1;
  string name = 2;
  double price = 3;
  repeated string image_urls = 4;
}

message GetProductRequest {
  string id = 1;
}
```

### 3.2 gRPC Advantages
- **~10x faster** than JSON serialization (binary format)
- **HTTP/2**: multiplexing, header compression
- **Strong typing**: generated code, compile-time checks
- **Bi-directional streaming**: real-time data flows

### 3.3 Khi nào dùng gRPC
- **Service-to-service** communication (internal only)
- High throughput, low latency requirements
- Streaming data (real-time updates, logs)
- Polyglot: code generation cho Go, Java, Python, Node.js

---

## 4. Decision Matrix

| Criteria | REST | GraphQL | gRPC |
|----------|------|---------|------|
| **Primary use** | External API, CRUD | Frontend queries | Service-to-service |
| **Performance** | Good | Good | Excellent |
| **Caching** | HTTP native | Complex (persisted queries) | Manual |
| **Learning curve** | Low | Medium | High |
| **Frontend friendly** | Yes | Very | No (need proxy) |
| **Streaming** | SSE/WebSocket | Subscriptions | Native |
| **Tooling** | Excellent | Good | Growing |
| **Browser support** | Native | Native | Needs gRPC-Web |

### 4.1 Khuyến nghị cho E-Commerce Platform

```
Client → Shell/MFE:     GraphQL (flexible, typed)
MFE → BFF/Gateway:      REST hoặc GraphQL
Gateway → Services:      REST (simple CRUD) + gRPC (high-perf)
Service → Service:       gRPC (internal) + Events (async)
```

---

## Tóm tắt

- **REST**: default choice cho external API và simple CRUD
- **GraphQL**: tuyệt vời cho Micro Frontend — giảm over/under-fetching
- **gRPC**: king of service-to-service — fast, typed, streaming
- Trong thực tế: **dùng kết hợp cả 3** cho đúng use case

---

**Bài tiếp theo:** [Bài 6: Inter-service Communication — Sync, Async & Event-Driven](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-6-inter-service-communication-sync-async-event-driven)
