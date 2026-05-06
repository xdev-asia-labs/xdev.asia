---
id: 019e4a33-d405-7b20-c001-b1c2d3e4f505
title: 第 5 堂課：API 設計大師班 — REST、GraphQL 與 gRPC
slug: bai-5-api-design-masterclass-rest-graphql-grpc
description: >-
  REST、GraphQL 和 gRPC 的詳細比較：用例、效能、權衡。 RESTful API 最佳實務、GraphQL 架構設計、具有 Protocol
  Buffers 的 gRPC。 API 版本控制策略和向後相容性。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：設計微服務後端
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: 微服務與微前端系統設計－從基礎到生產
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ 建築 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 堂課：API 設計大師班 — REST、</tspan>
      <tspan x="60" dy="42">GraphQL 和 gRPC</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微服務與微前端系統設計－從基礎到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：設計微服務後端</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

API 是服務之間以及後端和前端之間的**合約**。選擇正確的API風格和良好的設計決定了微服務架構的成敗。本文深入探討了 3 種最受歡迎的 API 樣式，並說明如何為每個用例選擇正確的 API 樣式。

---

## 1. REST API — 預設選擇

### 1.1 RESTful 最佳實踐

**基於資源的 URL：**
```
GET    /api/v1/products              → List products
GET    /api/v1/products/{id}         → Get product
POST   /api/v1/products              → Create product
PUT    /api/v1/products/{id}         → Update product
PATCH  /api/v1/products/{id}         → Partial update
DELETE /api/v1/products/{id}         → Delete product
GET    /api/v1/products/{id}/reviews → Nested resource
```

**分頁（基於遊標）：**
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

**標準錯誤回應：**
```json
{
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "Product with id '123' not found",
    "details": []
  }
}
```

### 1.2 API 版本控制策略

|戰略|範例|優點 |缺點 |
|----------|---------|--------|--------|
|網址路徑| `/api/v1/products` |明確、易於路由 |網址更改 |
|標題 | `Accept: application/vnd.api.v2+json` |乾淨的網址 |隱藏|
|查詢參數 | `/api/products?version=2` |簡單|凌亂|

**推薦：** URL 路徑版本控制 — 簡單、清晰、易於在 API 閘道上路由。

### 1.3 何時使用 REST
- 第三方公共API
- 簡單的CRUD操作
- 關鍵快取（HTTP 本機快取）
- 熟悉的團隊，成熟的工具

---

## 2. GraphQL－靈活的查詢

### 2.1 為什麼微前端要用 GraphQL？

每個微前端都需要來自同一服務的**不同的資料**：
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

→ GraphQL 解決了**過度獲取**（REST 返回太多）和**不足獲取**（REST 需要調用許多端點）的問題。

### 2.2 模式設計最佳實踐

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

### 2.3 何時使用 GraphQL
- 前端需要資料取得的靈活性
- 多個前端客戶端需要不同的數據
- BFF層或API網關聚合
- 複雜的嵌套資料關係

---

## 3. gRPC — 高效能內部

### 3.1 協定緩衝區

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

### 3.2 gRPC 優勢
- **~比 JSON 序列化（二進位格式）快 10 倍**
- **HTTP/2**：多重化、標頭壓縮
- **強型別**：產生的程式碼，編譯時檢查
- **雙向流**：即時資料流

### 3.3 何時使用 gRPC
- **服務到服務**通訊（僅限內部）
- 高吞吐量、低延遲要求
- 串流資料（即時更新、日誌）
- 多語言：Go、Java、Python、Node.js 的程式碼生成

---

## 4.決策矩陣

|標準|休息 | GraphQL | gRPC |
|----------|--------|---------|--------|
| **主要用途** |外部 API、CRUD |前端查詢 |服務到服務|
| **性能** |好 |好 |優|
| **快取** | HTTP 原生 |複雜（持久查詢）|手冊|
| **學習曲線** |低|中|高|
| **前端友善** |是的 |非常|否（需要代理）|
| **串流媒體** | SSE/WebSocket |訂閱 |本地 |
| **工具** |優|好 |成長|
| **瀏覽器支援** |本地 |本地 |需要 gRPC-Web |

### 4.1 電商平台建議

```
Client → Shell/MFE:     GraphQL (flexible, typed)
MFE → BFF/Gateway:      REST hoặc GraphQL
Gateway → Services:      REST (simple CRUD) + gRPC (high-perf)
Service → Service:       gRPC (internal) + Events (async)
```

---

## 總結

- **REST**：外部API和簡單CRUD的預設選擇
- **GraphQL**：非常適合微前端 - 減少過度/不足的獲取
- **gRPC**：服務到服務之王 — 快速、類型化、串流媒體
- 實務上：**使用所有 3 種方法的組合**來實現正確的用例

---

**下一篇文章：** [第 6 課：服務間通訊 — 同步、非同步與事件驅動](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-6-inter-service-communication-sync-async-event-driven)
