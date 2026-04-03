---
id: 019e4a33-d417-7b20-c001-b1c2d3e4f517
title: "Bài 17: BFF Pattern — Backend for Frontend"
slug: bai-17-bff-pattern-backend-for-frontend
description: >-
  BFF Pattern: mỗi frontend có backend riêng. Tại sao BFF phù hợp với Micro Frontend. Thiết kế BFF cho Web vs Mobile. BFF aggregation layer. Tránh BFF trở thành monolith.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 17
section_title: "Phần 6: API Gateway & BFF Layer"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Backend for Frontend (BFF) là pattern đặt một **backend layer riêng** cho mỗi frontend client. BFF aggregates data từ nhiều microservices, transform thành format phù hợp cho frontend cụ thể.


![BFF Pattern — Backend for Frontend riêng biệt cho mỗi client](/storage/uploads/2026/04/mfe-ms-diagram-bai17-bff-pattern.png)

---

## 1. Tại sao cần BFF?

### 1.1 Vấn đề không có BFF

```
❌ Mỗi MFE gọi trực tiếp nhiều microservices:

Product MFE ──► Product Service
            ──► Review Service
            ──► Inventory Service
            ──► Pricing Service

→ 4 API calls cho 1 product page
→ Frontend phải aggregate data
→ Over-fetching (mỗi API trả về nhiều hơn cần)
→ Latency: waterfall requests
```

### 1.2 Với BFF

```
✅ BFF aggregates cho frontend:

Product MFE ──► Web BFF ──► Product Service
                        ──► Review Service
                        ──► Inventory Service

→ 1 API call cho 1 product page
→ BFF aggregate và transform data
→ Frontend nhận đúng data cần
→ Parallel calls tại BFF layer
```

---

## 2. BFF Architecture

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  Web App    │  │ Mobile App  │  │  Admin App  │
│  (MFE)     │  │  (React     │  │  (MFE)      │
│            │  │   Native)   │  │             │
└──────┬──────┘  └──────┬──────┘  └──────┬──────┘
       │                │                │
       ▼                ▼                ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   Web BFF    │ │  Mobile BFF  │ │  Admin BFF   │
│  (Node.js)   │ │  (Node.js)   │ │  (Node.js)   │
│  Full data   │ │  Compact data│ │  All CRUD    │
└──────┬───────┘ └──────┬───────┘ └──────┬───────┘
       │                │                │
       └────────────────┼────────────────┘
                        ▼
              ┌─────────────────┐
              │  Microservices  │
              │  (gRPC / REST)  │
              └─────────────────┘
```

---

## 3. BFF Design Principles

### 3.1 One BFF per Frontend Type

| Frontend | BFF | Optimized for |
|----------|-----|---------------|
| Web (Desktop) | Web BFF | Full data, rich UI |
| Mobile | Mobile BFF | Compact data, bandwidth |
| Admin Panel | Admin BFF | CRUD operations |
| Third-party | Public API (not BFF) | Stable, versioned |

### 3.2 BFF Responsibilities

```
BFF SHOULD:
✅ Aggregate data từ multiple services
✅ Transform data cho frontend format
✅ Handle authentication (validate tokens)
✅ Caching (Redis) cho frequently accessed data
✅ Rate limiting per client

BFF SHOULD NOT:
❌ Contain business logic (belongs to services)
❌ Have its own database (stateless!)
❌ Become a "smart proxy" monolith
❌ Be shared across different frontends
```

---

## 4. BFF Implementation (Node.js/Fastify)

```javascript
// Web BFF - Product Page Aggregation
app.get('/api/bff/product/:id', async (req, reply) => {
  const { id } = req.params;
  
  // Parallel calls to microservices
  const [product, reviews, inventory] = await Promise.all([
    productService.getProduct(id),
    reviewService.getReviews(id, { limit: 5 }),
    inventoryService.getStock(id),
  ]);
  
  // Transform for web frontend
  return {
    ...product,
    rating: reviews.averageRating,
    topReviews: reviews.items.slice(0, 3),
    inStock: inventory.quantity > 0,
    stockLevel: inventory.quantity > 10 ? 'high' : 'low',
  };
});
```

---

## 5. BFF vs API Gateway

| Feature | API Gateway | BFF |
|---------|------------|-----|
| **Purpose** | Cross-cutting concerns | Frontend-specific aggregation |
| **Logic** | Routing, auth, rate limit | Data transformation |
| **Per client** | One for all | One per frontend type |
| **Maintained by** | Platform team | Frontend team |

**Trong practice, dùng cả hai:**
```
Frontend → API Gateway → BFF → Microservices
           (routing,      (aggregation,
            auth,          transformation)
            rate limit)
```

---

## Tóm tắt

- **BFF = backend riêng cho mỗi frontend type**
- Aggregates data, transforms format, reduces frontend complexity
- **Stateless**, không chứa business logic
- One BFF per frontend type (Web, Mobile, Admin)
- Thường kết hợp với API Gateway

---

**Bài tiếp theo:** [Bài 18: API Gateway — Kong, APISIX & Envoy](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-18-api-gateway-kong-apisix-envoy-thuc-chien)
