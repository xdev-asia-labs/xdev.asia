---
id: 019e4a33-d411-7b20-c001-b1c2d3e4f511
title: "Bài 11: Micro Frontend Integration Strategies — Build-time vs Run-time"
slug: bai-11-micro-frontend-integration-strategies-build-time-vs-run-time
description: >-
  7 chiến lược compose Micro Frontend: iframe, Web Components, Build-time integration, JavaScript bundles, Module Federation, Server-Side Includes, Edge-Side Includes. So sánh chi tiết và chọn đúng approach.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: Micro Frontend — Kiến trúc & Nguyên lý"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Có nhiều cách để compose Micro Frontend applications. Mỗi approach có trade-offs riêng. Bài này deep-dive vào từng strategy và giúp bạn chọn đúng.


![4 chiến lược Integration Micro Frontend](/storage/uploads/2026/04/mfe-ms-diagram-bai11-mfe-integration.png)

---

## 1. Build-time Integration (NPM Packages)

Mỗi MFE publish dưới dạng npm package, host app import tại build-time:

```
host-app/package.json:
  "@company/product-mfe": "^2.1.0"
  "@company/cart-mfe": "^1.3.0"
```

**Ưu điểm:** Simple, type-safe, tree-shakeable
**Nhược điểm:** Phải rebuild + redeploy host app khi MFE update
**Verdict:** ❌ Không phải "thật sự" Micro Frontend — không có independent deployment

---

## 2. Run-time Integration

### 2.1 iframe

```html
<iframe src="https://product.example.com/embed" />
```

**Ưu điểm:** Perfect isolation, simple
**Nhược điểm:** No shared styles, hard to communicate, SEO terrible, poor performance
**Use case:** Legacy app embedding, sandboxed widgets

### 2.2 Web Components

```html
<product-catalog data-category="electronics"></product-catalog>
<script src="https://product.cdn.com/product-catalog.js"></script>
```

**Ưu điểm:** Framework agnostic, Shadow DOM isolation, browser standard
**Nhược điểm:** SSR phức tạp, React wrappers needed, Shadow DOM styling tricky

### 2.3 JavaScript Integration (Dynamic Script Loading)

```javascript
function loadMicroFrontend(name, containerId) {
  const script = document.createElement('script');
  script.src = `https://${name}.cdn.com/bundle.js`;
  script.onload = () => {
    window[`render_${name}`](document.getElementById(containerId));
  };
  document.body.appendChild(script);
}
```

**Ưu điểm:** Simple, flexible, framework agnostic
**Nhược điểm:** No dependency sharing, large bundles

### 2.4 Module Federation (Webpack 5) ⭐

```
┌─────────────────────────────┐
│        Shell App (Host)     │
│                             │
│  import('product/Catalog')  │──► Product MFE (Remote)
│  import('cart/MiniCart')     │──► Cart MFE (Remote)
│                             │
│  Shared: React, React-DOM   │
│  (loaded once, shared)      │
└─────────────────────────────┘
```

**Ưu điểm:** Runtime integration, shared dependencies, lazy loading, TypeScript
**Nhược điểm:** Webpack-specific, learning curve
**Verdict:** ⭐ **Recommended** cho hầu hết use cases.

---

## 3. Server-Side Approaches

### 3.1 Server-Side Includes (SSI)

```html
<!--# include virtual="/fragments/product?id=123" -->
```

### 3.2 Edge-Side Includes (ESI)

```html
<esi:include src="https://product.service/fragment/header" />
```

**Use case:** Content-heavy pages, khi SEO và TTFB quan trọng.

---

## 4. Decision Matrix

| Strategy | Independence | Performance | Complexity | Best For |
|----------|-------------|-------------|-----------|----------|
| NPM Package | ❌ Low | ✅ Best | Low | Shared libraries |
| iframe | ✅ High | ❌ Poor | Low | Legacy embed |
| Web Components | ✅ High | ✅ Good | Medium | Multi-framework |
| JS Integration | ✅ High | ⚠️ OK | Medium | Simple cases |
| **Module Federation** | **✅ High** | **✅ Good** | **Medium** | **Most projects** |
| SSI/ESI | ✅ High | ✅ Great TTFB | High | Content sites |

---

## Tóm tắt

- **Build-time** (npm): đơn giản nhưng không có independent deployment
- **Module Federation**: best balance cho cùng framework — ⭐ recommended
- **Web Components**: best cho multi-framework
- **SSI/ESI**: best cho server-rendered content sites

---

**Bài tiếp theo:** [Bài 12: Webpack Module Federation & Vite — Deep Dive](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-12-webpack-module-federation-vite-federation-deep-dive)
