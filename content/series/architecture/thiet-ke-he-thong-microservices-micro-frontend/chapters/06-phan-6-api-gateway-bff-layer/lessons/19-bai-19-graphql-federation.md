---
id: 019e4a33-d419-7b20-c001-b1c2d3e4f519
title: "Bài 19: GraphQL Federation — Unified API cho Micro Frontend"
slug: bai-19-graphql-federation-unified-api-cho-micro-frontend
description: >-
  Apollo Federation: Supergraph, Subgraphs, Router. Mỗi microservice expose GraphQL subgraph. Router compose thành unified API. Schema stitching vs Federation. Performance considerations.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 6: API Gateway & BFF Layer"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

GraphQL Federation cho phép mỗi microservice expose một **subgraph**, và Router tự động compose thành **unified supergraph**. Frontend chỉ cần 1 endpoint để query data từ mọi service.

---

## 1. Vấn đề: Multiple GraphQL Endpoints

```
❌ Mỗi service có GraphQL endpoint riêng:
Frontend → product.api.com/graphql (Product schema)
Frontend → user.api.com/graphql (User schema)
Frontend → order.api.com/graphql (Order schema)

→ Frontend phải biết endpoint nào chứa data gì
→ Không thể query cross-service trong 1 request
→ Ví dụ: Order + Product + User = 3 requests
```

---

## 2. GraphQL Federation Architecture

```
✅ Unified Supergraph:

┌─────────────┐
│   Frontend  │
│  1 endpoint │
└──────┬──────┘
       │
       ▼
┌──────────────────────┐
│   Apollo Router      │
│   (Supergraph)       │
│   gateway.api.com    │
└──┬────────┬────────┬─┘
   │        │        │
   ▼        ▼        ▼
┌──────┐ ┌──────┐ ┌──────┐
│Product│ │ User │ │Order │
│Subgra│ │Subgra│ │Subgra│
│  ph  │ │  ph  │ │  ph  │
└──────┘ └──────┘ └──────┘

1 query → Router splits → Subgraphs → Router merges → 1 response
```

---

## 3. Subgraph Definition

### 3.1 Product Subgraph

```graphql
# Product Service subgraph
type Product @key(fields: "id") {
  id: ID!
  name: String!
  price: Float!
  description: String
  category: Category!
}

type Category {
  id: ID!
  name: String!
}

type Query {
  product(id: ID!): Product
  products(limit: Int, offset: Int): [Product!]!
}
```

### 3.2 Review Subgraph (extends Product)

```graphql
# Review Service subgraph — extends Product
type Product @key(fields: "id") {
  id: ID!
  reviews: [Review!]!
  averageRating: Float
}

type Review {
  id: ID!
  rating: Int!
  comment: String
  author: User!
}

type Query {
  reviews(productId: ID!): [Review!]!
}
```

### 3.3 Federated Query

```graphql
# Frontend query — Router handles cross-service resolution
query ProductPage($id: ID!) {
  product(id: $id) {
    id              # → Product Subgraph
    name            # → Product Subgraph
    price           # → Product Subgraph
    reviews {       # → Review Subgraph
      rating
      comment
      author {      # → User Subgraph
        name
        avatar
      }
    }
    averageRating   # → Review Subgraph
  }
}
```

Router tự động:
1. Query Product Subgraph → lấy product data
2. Query Review Subgraph → lấy reviews (dùng product.id)
3. Query User Subgraph → lấy author info (dùng review.author.id)
4. Merge tất cả → trả về 1 response

---

## 4. Schema Stitching vs Federation

| | **Schema Stitching** | **Federation** |
|---|---|---|
| Ownership | Gateway owns schema | Services own schema |
| Coupling | High (gateway biết về services) | Low (services tự declare) |
| Scalability | Gateway bottleneck | Distributed |
| Evolution | Hard (central change) | Easy (service-level) |
| **Verdict** | ❌ Legacy | ✅ Recommended |

---

## 5. Performance Considerations

### 5.1 Query Plan Optimization

```
Router tạo query plan tối ưu:
─ Parallel: Product + User subgraphs (independent)
─ Sequential: Reviews → after Product (needs product.id)
```

### 5.2 Dataloader Pattern

```javascript
// Trong Review Subgraph, batch user lookups
const userLoader = new DataLoader(async (userIds) => {
  const users = await userService.getUsers(userIds);
  return userIds.map(id => users.find(u => u.id === id));
});

// Resolve author field
Review: {
  author: (review) => userLoader.load(review.authorId)
}
```

### 5.3 Caching

```
Persisted Queries: Client gửi query hash thay vì full query
Automatic Persisted Queries (APQ): Router cache query plans
CDN caching: @cacheControl directive
```

---

## 6. Khi nào dùng Federation?

```
✅ Dùng khi:
- Nhiều microservices cần unified GraphQL API
- Frontend teams muốn 1 endpoint
- Complex, nested data relationships
- Multiple frontend clients

❌ Không cần khi:
- Chỉ có 1-2 services (đơn giản quá)
- REST đã đủ tốt
- Team chưa quen GraphQL
- Performance-critical (thêm latency qua Router)
```

---

## Tóm tắt

- **Federation** = mỗi service own subgraph, Router compose supergraph
- `@key` directive cho entity reference across subgraphs
- Router tự động **split, resolve, merge** queries
- **DataLoader** pattern tránh N+1 problem
- Dùng khi cần **unified GraphQL API** cho nhiều services

---

**Bài tiếp theo:** [Bài 20: Testing Microservices — Unit, Integration & E2E](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-20-testing-microservices-unit-integration-e2e)
