---
id: 019e4a33-d421-7b20-c001-b1c2d3e4f521
title: 'Lesson 21: Testing Micro Frontend — Component, Visual & Integration'
slug: bai-21-testing-micro-frontend-component-visual-integration
description: >-
  Testing strategy for Micro Frontend. Component testing (React Testing
  Library). Visual regression testing (Chromatic, Percy). Cross-MFE integration
  testing. Storybook interaction tests.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 21
section_title: 'Part 7: Testing Full-Stack Microservices & Micro Frontend'
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: Microservices & Micro Frontend system design — From basics to Production
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: en
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🏗️ Architecture — Lesson 21</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 21: Testing Micro Frontend —</tspan>
      <tspan x="60" dy="42">Components, Visual & Integration</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Microservices & Micro Frontend system design — From basics to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 7: Testing Full-Stack Microservices & Micro Frontend</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Testing Micro Frontend has additional challenges compared to regular SPA testing: each MFE needs to test **isolated** (standalone) and **integrated** (in Shell App). This article builds a testing strategy for both scenarios.

---

## 1. Testing Levels for Micro Frontend

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

## 2. Component Testing (React Testing Library)

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

## 3. Visual Regression Testing

### 3.1 Storybook + Chromatic

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

Chromatic workflow:
```
1. Push code → CI runs Storybook build
2. Chromatic captures screenshots
3. Compare with baseline
4. Visual diff review → Approve/Reject
```

### 3.2 Playwright Visual

```javascript
test('product list matches snapshot', async ({ page }) => {
  await page.goto('/products');
  await expect(page).toHaveScreenshot('product-list.png', {
    maxDiffPixelRatio: 0.01,
  });
});
```

---

## 4. Integration Testing (MFE in Shell)

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

## 5. Testing Strategy per MFE

| Test Type | When | Tools | CI Stage |
|-----------|-------|-------|----------|
| **Unit** | Every commit | Jest/Vitest | Pre-merge |
| **Component** | Every commit | RTL | Pre-merge |
| **Visual** | Every PR | Chromatic | PR review |
| **Integration** | Daily/Weekly | Playwright | Post-merge |
| **E2E** | Daily | Playwright | Staging |

---

## 6. Best Practices

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

## Summary

- **Component tests**: each MFE test standalone with RTL
- **Visual regression**: Storybook + Chromatic catch UI changes
- **Integration tests**: MFE in Shell, cross-MFE communication
- **E2E**: critical flows only, running on staging
- Test **events** (contracts) between MFEs

---

**Next article:** [Lesson 22: Contract Testing — Pact & API Compatibility](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-22-contract-testing-pact-api-compatibility)
