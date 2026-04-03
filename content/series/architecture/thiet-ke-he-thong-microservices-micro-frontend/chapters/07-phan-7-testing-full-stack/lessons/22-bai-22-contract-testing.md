---
id: 019e4a33-d422-7b20-c001-b1c2d3e4f522
title: "Bài 22: Contract Testing — Pact & API Compatibility"
slug: bai-22-contract-testing-pact-api-compatibility
description: >-
  Consumer-Driven Contract Testing với Pact. Tại sao contract testing quan trọng cho Microservices. Provider verification. Pact Broker. Schema evolution & backward compatibility. Integration vào CI/CD pipeline.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 22
section_title: "Phần 7: Testing Full-Stack Microservices & Micro Frontend"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Khi 20 services giao tiếp với nhau, làm sao đảm bảo thay đổi API ở service A không break service B? **Contract Testing** giải quyết vấn đề này mà không cần chạy tất cả services cùng lúc.

---

## 1. Vấn đề: API Breaking Changes

```
Service A (Consumer) gọi Service B (Provider):

Service B thay đổi response:
Before: { "price": 999 }         ← number
After:  { "price": "999.00" }    ← string!

→ Service A parse Price as number → crash!
→ Integration test phát hiện? Chỉ nếu chạy cả A + B cùng lúc
→ E2E test? Chậm, flaky, expensive
→ Contract test? ✅ Phát hiện sớm, CI tốc độ cao
```

---

## 2. Consumer-Driven Contract Testing

### 2.1 Concept

```
Consumer (Order Service):
"Tôi expect response từ Product Service có format:
 { id: string, name: string, price: number }"
→ Ghi thành Pact (contract file)

Provider (Product Service):
"Để tôi verify rằng API của tôi satisfy contract này"
→ Run Pact verification against real API

Nếu fail → Provider biết thay đổi sẽ break Consumer
→ Fix API hoặc coordinate migration
```

### 2.2 Flow

```
┌──────────────┐  1. Generate    ┌──────────────┐
│   Consumer   │────Pact File───►│  Pact Broker │
│ (Order Svc)  │    (contract)   │  (central    │
└──────────────┘                 │   registry)  │
                                 └──────┬───────┘
                                        │
                                 2. Verify│
                                        ▼
                                 ┌──────────────┐
                                 │   Provider   │
                                 │ (Product Svc)│
                                 └──────────────┘
```

---

## 3. Pact Implementation

### 3.1 Consumer Side (Order Service)

```javascript
// order-service/tests/pact/product.consumer.test.js
const { PactV3 } = require('@pact-foundation/pact');

describe('Product Service Contract', () => {
  const provider = new PactV3({
    consumer: 'OrderService',
    provider: 'ProductService',
  });
  
  it('get product by id', async () => {
    // Define expected interaction
    provider
      .given('product 123 exists')
      .uponReceiving('a request for product 123')
      .withRequest({
        method: 'GET',
        path: '/api/products/123',
      })
      .willRespondWith({
        status: 200,
        body: {
          id: '123',
          name: like('Laptop'),
          price: like(999),
          inStock: like(true),
        },
      });
    
    // Execute test against Pact mock
    await provider.executeTest(async (mockService) => {
      const product = await fetchProduct(mockService.url, '123');
      expect(product.id).toBe('123');
      expect(typeof product.price).toBe('number');
    });
  });
});
```

### 3.2 Provider Verification (Product Service)

```javascript
// product-service/tests/pact/provider.verify.test.js
const { Verifier } = require('@pact-foundation/pact');

describe('Pact Verification', () => {
  it('validates OrderService contract', async () => {
    const verifier = new Verifier({
      providerBaseUrl: 'http://localhost:8080',
      pactBrokerUrl: 'https://pact-broker.company.com',
      provider: 'ProductService',
      providerVersion: process.env.GIT_SHA,
      publishVerificationResult: true,
      stateHandlers: {
        'product 123 exists': async () => {
          await seedDB({ id: '123', name: 'Laptop', price: 999 });
        },
      },
    });
    
    await verifier.verifyProvider();
  });
});
```

---

## 4. CI/CD Integration

```yaml
# Consumer CI (Order Service)
consumer-contract-test:
  steps:
    - run: npm test -- --testPathPattern=pact
    - run: npx pact-broker publish pacts/ 
        --consumer-app-version=$GIT_SHA
        --branch=$BRANCH

# Provider CI (Product Service)  
provider-contract-verify:
  steps:
    - run: npm run pact:verify
    # can-i-deploy check before deploymentt
    - run: npx pact-broker can-i-deploy
        --pacticipant=ProductService
        --version=$GIT_SHA
        --to-environment=production
```

### 4.1 Can-I-Deploy

```
Before deploying Product Service v2.1:

$ pact-broker can-i-deploy \
    --pacticipant ProductService \
    --version 2.1 \
    --to production

✅ OrderService (1.5) → ProductService (2.1): VERIFIED
✅ CartService (2.0) → ProductService (2.1): VERIFIED
Result: Safe to deploy!
```

---

## 5. Schema Evolution Best Practices

| Change Type | Breaking? | Strategy |
|------------|-----------|----------|
| Add field | No | Just add (consumers ignore unknown) |
| Remove field | **YES** | Deprecate → verify no consumers use → remove |
| Rename field | **YES** | Add new → migrate consumers → remove old |
| Change type | **YES** | New field → migrate → remove old |
| Add endpoint | No | Just add |
| Remove endpoint | **YES** | Contract test catches usage |

---

## Tóm tắt

- **Contract Testing** = verify API contracts between services
- **Consumer-Driven**: consumer defines expectations, provider verifies
- **Pact**: industry standard tool, supports many languages
- **Pact Broker**: central registry + can-i-deploy safety check
- **CI/CD**: run on every PR, block deploy if contracts broken
- Catches breaking changes **before integration testing**

---

**Bài tiếp theo:** [Bài 23: Mono-Repo vs Multi-Repo — Source Code Organization](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-23-mono-repo-vs-multi-repo-source-code-organization)
