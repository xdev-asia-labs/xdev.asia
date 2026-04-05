---
id: 019e4a33-d420-7b20-c001-b1c2d3e4f520
title: "Bài 20: Testing Microservices — Unit, Integration & E2E"
slug: bai-20-testing-microservices-unit-integration-e2e
description: >-
  Testing Pyramid cho Microservices. Unit test với mocks/stubs. Integration test với Testcontainers. E2E test strategies. Service virtualization. Testing in production (canary, feature flags).
duration_minutes: 90
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 7: Testing Full-Stack Microservices & Micro Frontend"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9953" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9953)"/>

  <!-- Decorations -->
  <g>
    <circle cx="958" cy="224" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="816" cy="202" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="674" cy="180" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1032" cy="158" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="890" cy="136" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="184" x2="1100" y2="264" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="214" x2="1050" y2="284" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1067.7749907475932,214.5 1067.7749907475932,253.5 1034,273 1000.2250092524068,253.5 1000.2250092524068,214.5 1034,195" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ Kiến trúc — Bài 20</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 20: Testing Microservices — Unit,</tspan>
      <tspan x="60" dy="42">Integration &amp; E2E</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Thiết kế hệ thống Microservices &amp; Micro Frontend — Từ cơ bản đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 7: Testing Full-Stack Microservices &amp; Micro Frontend</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Giới thiệu

Testing microservices khó hơn monolith vì dependencies phân tán. Bài này xây dựng testing strategy toàn diện: từ unit test isolated cho đến E2E test across services.

---

## 1. Testing Pyramid cho Microservices

```
                    ┌─────┐
                    │ E2E │  Ít test, chậm, expensive
                    │Tests│  (5-10 critical flows)
                   ┌┴─────┴┐
                   │Contract│  Verify API contracts
                   │ Tests  │  between services
                  ┌┴───────┴┐
                  │Integration│  Service + DB + deps
                  │  Tests   │  (Testcontainers)
                 ┌┴─────────┴┐
                 │  Unit Tests │  Fast, isolated
                 │  (70-80%)   │  Business logic
                 └─────────────┘
```

---

## 2. Unit Tests

Test business logic **isolated** từ database, network, external services:

```javascript
// Order Service - business logic
describe('OrderService', () => {
  it('should calculate total with discount', () => {
    const items = [
      { productId: '1', price: 100, quantity: 2 },
      { productId: '2', price: 50, quantity: 1 },
    ];
    const discount = { type: 'percentage', value: 10 };
    
    const total = calculateOrderTotal(items, discount);
    
    expect(total).toBe(225); // (200 + 50) * 0.9
  });
  
  it('should reject order with empty items', () => {
    expect(() => createOrder([])).toThrow('Order must have items');
  });
});
```

### Mock External Services

```javascript
// Mock Product Service call
const mockProductService = {
  getProduct: jest.fn().mockResolvedValue({
    id: '1', name: 'Laptop', price: 999, inStock: true
  }),
};

describe('OrderService.placeOrder', () => {
  it('should validate product exists', async () => {
    const order = await placeOrder(
      { productId: '1', qty: 1 },
      { productService: mockProductService }
    );
    expect(mockProductService.getProduct).toHaveBeenCalledWith('1');
    expect(order.status).toBe('PENDING');
  });
});
```

---

## 3. Integration Tests (Testcontainers)

Test service với **real database & dependencies**:

```javascript
// Jest + Testcontainers
import { PostgreSqlContainer } from '@testcontainers/postgresql';

describe('OrderRepository (Integration)', () => {
  let container;
  let db;
  
  beforeAll(async () => {
    container = await new PostgreSqlContainer()
      .withDatabase('test_orders')
      .start();
    db = await connectDB(container.getConnectionUri());
    await runMigrations(db);
  });
  
  afterAll(async () => {
    await container.stop();
  });
  
  it('should save and retrieve order', async () => {
    const order = await orderRepo.create({
      userId: 'user-1',
      items: [{ productId: 'p1', qty: 2, price: 100 }],
    });
    
    const found = await orderRepo.findById(order.id);
    expect(found.userId).toBe('user-1');
    expect(found.items).toHaveLength(1);
    expect(found.total).toBe(200);
  });
});
```

---

## 4. Component Tests (Service-level)

Test entire service in isolation (real HTTP, real DB, mocked external services):

```javascript
describe('Product Service (Component Test)', () => {
  let app;
  let dbContainer;
  
  beforeAll(async () => {
    dbContainer = await new PostgreSqlContainer().start();
    app = await createApp({
      dbUrl: dbContainer.getConnectionUri(),
      inventoryService: mockInventoryService,
    });
  });
  
  it('GET /api/products returns product list', async () => {
    const res = await request(app)
      .get('/api/products')
      .expect(200);
    
    expect(res.body.data).toBeInstanceOf(Array);
  });
  
  it('POST /api/products requires auth', async () => {
    await request(app)
      .post('/api/products')
      .send({ name: 'Test' })
      .expect(401);
  });
});
```

---

## 5. E2E Tests (Critical Flows Only)

```javascript
// E2E: Complete order flow
describe('Order Flow E2E', () => {
  it('user can browse, add to cart, and place order', async () => {
    // 1. Browse products
    const products = await api.get('/api/products');
    expect(products.status).toBe(200);
    
    // 2. Add to cart
    const cartRes = await api.post('/api/cart/items', {
      productId: products.body.data[0].id,
      quantity: 1,
    });
    expect(cartRes.status).toBe(201);
    
    // 3. Place order
    const orderRes = await api.post('/api/orders', {
      cartId: cartRes.body.cartId,
      shippingAddress: { /* ... */ },
    });
    expect(orderRes.status).toBe(201);
    expect(orderRes.body.status).toBe('PENDING');
  });
});
```

---

## 6. Testing Best Practices

| Practice | Mô tả |
|----------|-------|
| **Test Pyramid** | 70% unit, 20% integration, 10% E2E |
| **Testcontainers** | Real DB thay vì mocks cho integration tests |
| **Parallel tests** | Mỗi test có DB container riêng |
| **Test data builders** | Factory functions cho test fixtures |
| **CI pipeline** | Unit → Integration → E2E (fail fast) |
| **Feature flags** | Test in production safely |

---

## Tóm tắt

- **Unit tests**: fast, isolated, test business logic (70-80%)
- **Integration tests**: Testcontainers cho real DB testing
- **Component tests**: whole service, mocked external deps
- **E2E tests**: critical business flows only (5-10 scenarios)
- **Contract tests**: verify API contracts (xem Bài 22)

---

**Bài tiếp theo:** [Bài 21: Testing Micro Frontend — Component, Visual & Integration](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-21-testing-micro-frontend-component-visual-integration)
