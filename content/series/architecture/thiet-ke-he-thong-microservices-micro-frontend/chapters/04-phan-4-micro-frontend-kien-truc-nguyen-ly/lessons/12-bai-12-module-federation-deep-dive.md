---
id: 019e4a33-d412-7b20-c001-b1c2d3e4f512
title: "Bài 12: Webpack Module Federation & Vite — Deep Dive"
slug: bai-12-webpack-module-federation-vite-federation-deep-dive
description: >-
  Hands-on với Module Federation từ zero. Cấu hình Host/Remote apps. Shared dependencies management. Vite Federation plugin. Error boundaries và fallback strategies.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 4: Micro Frontend — Kiến trúc & Nguyên lý"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Module Federation là tính năng game-changing của Webpack 5, cho phép nhiều builds chia sẻ code tại **runtime**. Bài này hands-on cấu hình từ zero.

---

## 1. Khái niệm cốt lõi

| Concept | Mô tả |
|---------|-------|
| **Host** | App load remote modules (Shell App) |
| **Remote** | App expose modules cho host (MFE) |
| **Shared** | Dependencies chia sẻ giữa host & remote |
| **remoteEntry.js** | Manifest file chứa thông tin về remote modules |

```
┌─────────────────────────────┐
│ Browser                     │
│  Shell App (Host)           │
│  ┌─────────────────────┐    │
│  │ import('product/    │────────► remoteEntry.js (CDN)
│  │   ProductList')     │    │     → chunk-abc.js
│  └─────────────────────┘    │
│  Shared: React 18.2.0       │
│  (loaded ONCE)              │
└─────────────────────────────┘
```

---

## 2. Cấu hình Host (Shell App)

```javascript
// webpack.config.js (Shell App)
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        product: 'product@https://product.cdn.com/remoteEntry.js',
        cart: 'cart@https://cart.cdn.com/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
      },
    }),
  ],
};
```

---

## 3. Cấu hình Remote (Product MFE)

```javascript
// webpack.config.js (Product MFE)
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'product',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/components/ProductList',
        './ProductDetail': './src/components/ProductDetail',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
      },
    }),
  ],
};
```

---

## 4. Sử dụng trong Host

```jsx
import React, { Suspense } from 'react';

const ProductList = React.lazy(() => import('product/ProductList'));
const MiniCart = React.lazy(() => import('cart/MiniCart'));

function App() {
  return (
    <div>
      <Header />
      <MFEErrorBoundary>
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductList />
        </Suspense>
      </MFEErrorBoundary>
      <Footer />
    </div>
  );
}
```

---

## 5. Error Boundary cho Remote MFE

```jsx
class MFEErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return <div>MFE unavailable. <button onClick={() => 
        this.setState({ hasError: false })}>Retry</button></div>;
    }
    return this.props.children;
  }
}
```

---

## 6. Shared Dependencies Management

```javascript
shared: {
  react: {
    singleton: true,         // Chỉ load 1 version
    requiredVersion: '^18.2.0',
    eager: false,            // Lazy load (recommended)
    strictVersion: false,    // Cho phép minor version khác
  },
}
```

Version conflict resolution:
```
Host: react@18.2.0
Remote A: react@18.2.0  → Dùng shared (Host's version)
Remote B: react@18.3.0  → singleton → dùng 18.2.0 (warning)
Remote C: react@17.0.0  → strictVersion=true → ERROR
```

---

## 7. Vite Module Federation

```javascript
// vite.config.js (Remote)
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'product',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/components/ProductList',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
```

---

## Tóm tắt

- Module Federation = **runtime code sharing** giữa independent builds
- **Host** load **Remote** modules qua `remoteEntry.js`
- **Shared dependencies**: singleton mode tránh duplicate React
- **Error Boundary** bắt buộc cho production
- **Vite** hỗ trợ qua plugin, syntax tương tự

---

**Bài tiếp theo:** [Bài 13: Shell Application — Routing, Layout & Orchestration](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-13-shell-application-routing-layout-orchestration)
