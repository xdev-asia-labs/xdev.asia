---
id: 019e4a33-d422-7b20-c001-b1c2d3e4f522
title: 'Lesson 22: Contract Testing — Pact & API Compatibility'
slug: bai-22-contract-testing-pact-api-compatibility
description: >-
  Consumer-Driven Contract Testing with Pact. Why contract testing is important
  for Microservices. Provider verification. Pact Broker. Schema evolution &
  backward compatibility. Integration into CI/CD pipeline.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 22
section_title: 'Part 7: Testing Full-Stack Microservices & Micro Frontend'
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: Microservices & Micro Frontend system design — From basics to Production
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5709" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5709)"/>

  <!-- Decorations -->
  <g>
    <circle cx="884" cy="282" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="668" cy="106" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="952" cy="190" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="736" cy="274" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="98" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="82" x2="1100" y2="162" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="112" x2="1050" y2="182" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1064.0429399400243,213.5 1064.0429399400243,250.5 1032,269 999.9570600599758,250.5 999.9570600599758,213.5 1032,195" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ Architecture — Lesson 22</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 22: Contract Testing — Pact & API</tspan>
      <tspan x="60" dy="42">Compatibility</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Microservices & Micro Frontend system design — From basics to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 7: Testing Full-Stack Microservices & Micro Frontend</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

When 20 services communicate with each other, how to ensure that changing the API in service A does not break service B? **Contract Testing** solves this problem without running all services at the same time.

---

## 1. Problem: API Breaking Changes

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

### 2.1 Concepts

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
|-----------|-----------|----------|
| Add field | No | Just add (consumers ignore unknown) |
| Remove fields | **YES** | Deprecate → verify no consumers use → remove |
| Rename field | **YES** | Add new → migrate consumers → remove old |
| Change type | **YES** | New field → migrate → remove old |
| Add endpoint | No | Just add |
| Remove endpoint | **YES** | Contract test catches usage |

---

## Summary

- **Contract Testing** = verify API contracts between services
- **Consumer-Driven**: consumer defines expectations, provider verifies
- **Pact**: industry standard tool, supports many languages
- **Pact Broker**: central registry + can-i-deploy safety check
- **CI/CD**: run on every PR, block deploy if contracts broken
- Catches breaking changes **before integration testing**

---

**Next article:** [Lesson 23: Mono-Repo vs Multi-Repo — Source Code Organization](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-23-mono-repo-vs-multi-repo-source-code-organization)
