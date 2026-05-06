---
id: 019e4a33-d421-7b20-c001-b1c2d3e4f521
title: 'レッスン 21: マイクロ フロントエンドのテスト — コンポーネント、ビジュアル、統合'
slug: bai-21-testing-micro-frontend-component-visual-integration
description: >-
  マイクロフロントエンドのテスト戦略。コンポーネントのテスト (React テスト ライブラリ)。視覚回帰テスト (Chromatic、Percy)。クロス
  MFE 統合テスト。ストーリーブックのインタラクション テスト。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 21
section_title: 'パート 7: フルスタック マイクロサービスとマイクロ フロントエンドのテスト'
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: マイクロサービスとマイクロ フロントエンドのシステム設計 — 基本から運用まで
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ アーキテクチャ — レッスン 21</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 21: マイクロ フロントエンドのテスト —</tspan>
      <tspan x="60" dy="42">コンポーネント、ビジュアル、統合</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">マイクロサービスとマイクロ フロントエンドのシステム設計 — 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: フルスタック マイクロサービスとマイクロ フロントエンドのテスト</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

マイクロ フロントエンドのテストには、通常の SPA テストと比較して追加の課題があります。各 MFE は、**分離** (スタンドアロン) および **統合** (シェル アプリ内) をテストする必要があります。この記事では、両方のシナリオのテスト戦略を構築します。

---

## 1. マイクロフロントエンドのテストレベル

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

## 2. コンポーネントのテスト (React テスト ライブラリ)

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

## 3. 視覚的な回帰テスト

### 3.1 ストーリーブック + クロマチック

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

クロマチックワークフロー:
```
1. Push code → CI runs Storybook build
2. Chromatic captures screenshots
3. Compare with baseline
4. Visual diff review → Approve/Reject
```

### 3.2 劇作家のビジュアル

```javascript
test('product list matches snapshot', async ({ page }) => {
  await page.goto('/products');
  await expect(page).toHaveScreenshot('product-list.png', {
    maxDiffPixelRatio: 0.01,
  });
});
```

---

## 4. 統合テスト (シェル内の MFE)

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

## 5. MFE ごとのテスト戦略

|テストの種類 |いつ |ツール | CIステージ |
|----------|----------|----------|----------|
| **ユニット** |すべてのコミット |ジェスト/ヴィテスト |マージ前 |
| **コンポーネント** |すべてのコミット | RTL |マージ前 |
| **ビジュアル** |あらゆるPR |クロマチック | PRレビュー |
| **統合** |毎日/毎週 |劇作家 |マージ後 |
| **E2E** |毎日 |劇作家 |ステージング |

---

## 6. ベストプラクティス

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

## 概要

- **コンポーネント テスト**: RTL を使用したスタンドアロンの各 MFE テスト
- **ビジュアル回帰**: ストーリーブック + クロマティック キャッチ UI の変更
- **統合テスト**: シェル内の MFE、クロス MFE 通信
- **E2E**: クリティカル フローのみ、ステージングで実行
- MFE 間の **イベント** (コントラクト) をテストする

---

**次の記事:** [レッスン 22: 契約のテスト — Pact と API の互換性](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-22-contract-testing-pact-api-compatibility)
