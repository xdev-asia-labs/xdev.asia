---
id: 019e4a33-d422-7b20-c001-b1c2d3e4f522
title: 第 22 課：契約測試 — Pact 和 API 相容性
slug: bai-22-contract-testing-pact-api-compatibility
description: 使用 Pact 進行消費者驅動的合約測試。為什麼契約測試對微服務很重要。提供者驗證。契約經紀人。架構演進和向後相容性。整合到 CI/CD 管道中。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 22
section_title: 第 7 部分：測試全端微服務和微前端
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: 微服務與微前端系統設計－從基礎到生產
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🏗️ 建築 — 第 22 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 22 課：契約測驗 — Pact 和 API</tspan>
      <tspan x="60" dy="42">相容性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微服務與微前端系統設計－從基礎到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：測試全端微服務和微前端</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

當20個服務相互通訊時，如何確保更改服務A中的API不會破壞服務B？ **合約測試**解決了這個問題，而無需同時運行所有服務。

---

## 1. 問題：API 重大更改

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

## 2. 消費者驅動的合約測試

### 2.1 概念

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

### 2.2 流程

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

## 3. 協定實施

### 3.1 消費端（訂單服務）

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

### 3.2 提供者驗證（產品服務）

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

## 4. CI/CD 集成

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

### 4.1 可以部署嗎

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

## 5. 模式演化最佳實踐

|更改類型 |打破？ |戰略|
|------------|------------|----------|
|新增欄位 |沒有 |只需新增（消費者忽略未知）|
|刪除欄位 | **是** |棄用 → 驗證沒有消費者使用 → 刪除 |
|重新命名欄位 | **是** |新增新的→遷移消費者→刪除舊的|
|更改類型 | **是** |新欄位→遷移→刪除舊欄位|
|新增端點 |沒有 |只需新增 |
|刪除端點 | **是** |合約測試擷取使用情況 |

---

## 總結

- **合約測試** = 驗證服務之間的 API 合約
- **消費者驅動**：消費者定義期望，提供者驗證
- **Pact**：業界標準工具，支援多種語言
- **Pact Broker**：中央登錄 + can-i-deploy 安全檢查
- **CI/CD**：在每個 PR 上運行，如果合約被破壞則阻止部署
- 在整合測試之前捕獲重大變更**

---

**下一篇文章：** [第 23 課：Mono-Repo 與 Multi-Repo — 原始碼組織](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-23-mono-repo-vs-multi-repo-source-code-organization)
