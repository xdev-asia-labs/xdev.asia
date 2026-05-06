---
id: 019e4a33-d421-7b20-c001-b1c2d3e4f521
title: 第 21 課：測試微前端 — 組件、視覺與集成
slug: bai-21-testing-micro-frontend-component-visual-integration
description: 微前端的測試策略。元件測試（React 測試庫）。視覺回歸測驗（Chromatic、Percy）。跨 MFE 整合測試。故事書互動測驗。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 21
section_title: 第 7 部分：測試全端微服務和微前端
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: 微服務與微前端系統設計－從基礎到生產
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2751" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2751)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1025" cy="245" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="950" cy="230" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="215" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="800" cy="200" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="185" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="75" x2="1100" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="105" x2="1050" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1000.9807621135332,160 1000.9807621135332,190 975,205 949.0192378864668,190 949.0192378864668,160 975,145" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ 建築 — 第 21 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 21 課：測試微前端 —</tspan>
      <tspan x="60" dy="42">組件、視覺和集成</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微服務與微前端系統設計－從基礎到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：測試全端微服務和微前端</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

與常規 SPA 測試相比，測試微前端面臨額外的挑戰：每個 MFE 需要測試**隔離**（獨立）和**整合**（在 Shell 應用程式中）。本文為這兩種場景建構了測試策略。

---

## 1. 微前端的測試級別

```
┌─────────────────────────────────────┐
│ E2E Tests (Playwright/Cypress)      │  Full app, all MFEs loaded
│ Critical user flows across MFEs     │
├─────────────────────────────────────┤
│ Integration Tests                   │  MFE loaded in Shell
│ Cross-MFE communication, routing    │
├─────────────────────────────────────┤
│ Visual Regression Tests             │  Screenshot comparison
│ Chromatic / Percy / Playwright      │
├─────────────────────────────────────┤
│ Component Tests (RTL)               │  Individual components
│ Each MFE tested in isolation        │
├─────────────────────────────────────┤
│ Unit Tests (Jest/Vitest)            │  Hooks, utils, business logic
│ Pure functions, state management    │
└─────────────────────────────────────┘
```

---

## 2.元件測試（React測試庫）

```jsx
// ProductCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  const product = {
    id: '1', name: 'Laptop', price: 999, image: '/laptop.jpg'
  };
  
  it('renders product info', () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('$999')).toBeInTheDocument();
  });
  
  it('dispatches add-to-cart event', () => {
    const spy = jest.fn();
    window.addEventListener('cart:item-added', spy);
    
    render(<ProductCard product={product} />);
    fireEvent.click(screen.getByRole('button', { name: /add to cart/i }));
    
    expect(spy).toHaveBeenCalled();
    window.removeEventListener('cart:item-added', spy);
  });
});
```

---

## 3.視覺迴歸測試

### 3.1 故事書+半音階

```jsx
// Button.stories.tsx
export const AllVariants = () => (
  <div>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="danger">Danger</Button>
    <Button disabled>Disabled</Button>
  </div>
);
```

彩色工作流程：
```
1. Push code → CI runs Storybook build
2. Chromatic captures screenshots
3. Compare with baseline
4. Visual diff review → Approve/Reject
```

### 3.2 劇作家視覺

```javascript
test('product list matches snapshot', async ({ page }) => {
  await page.goto('/products');
  await expect(page).toHaveScreenshot('product-list.png', {
    maxDiffPixelRatio: 0.01,
  });
});
```

---

## 4. 整合測試（Shell 中的 MFE）

```javascript
// Test Product MFE loaded in Shell context
describe('Product MFE Integration', () => {
  it('loads product list in shell', async ({ page }) => {
    await page.goto('/products');
    
    // Verify MFE loaded successfully
    await expect(page.getByTestId('product-list')).toBeVisible();
    
    // Verify routing works
    await page.click('[data-testid="product-card"]');
    await expect(page).toHaveURL(/\/products\/\d+/);
  });
  
  it('add to cart updates cart badge in shell header', async ({ page }) => {
    await page.goto('/products');
    
    // Click add to cart (Product MFE)
    await page.click('[data-testid="add-to-cart"]');
    
    // Verify cart badge updated (Shell Header)
    await expect(page.getByTestId('cart-badge')).toHaveText('1');
  });
});
```

---

## 5. 每個 MFE 的測試策略

|測試類型|當 |工具| CI階段|
|------------|---------|--------|----------|
| **單位** |每次提交 |開玩笑/維斯特 |預先合併 |
| **組件** |每次提交 |左轉 |預合併 |
| **視覺** |每一次公關 |半音 |公關審查 |
| **整合** |每日/每周 |剧作家 |合并后|
| **端到端** |每日 |劇作家 |分期|

---

## 6. 最佳實踐

```
✅ Test MFE standalone (without Shell) → fast feedback
✅ Test MFE in Shell → integration correctness
✅ Visual regression cho Design System → catch UI drift
✅ Test cross-MFE events → verify contracts
✅ Mock API calls in component tests → deterministic

❌ Don't test implementation details
❌ Don't test remote MFE code from another MFE's test suite
❌ Don't rely on E2E for all coverage → too slow
```

---

## 總結

- **組件測試**：每個 MFE 測試均使用 RTL 獨立進行
- **視覺回歸**：故事書 + Chromatic catch UI 更改
- **整合測試**：Shell 中的 MFE、跨 MFE 通信
- **E2E**：僅關鍵流程，在分段上運行
- 測試 MFE 之間的**事件**（合約）

---

**下一篇文章：** [第 22 課：契約測試 — Pact 和 API 相容性](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-22-contract-testing-pact-api-compatibility)
