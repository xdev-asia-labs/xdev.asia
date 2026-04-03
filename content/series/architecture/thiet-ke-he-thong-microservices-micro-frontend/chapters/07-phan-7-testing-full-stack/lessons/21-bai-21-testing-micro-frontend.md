---
id: 019e4a33-d421-7b20-c001-b1c2d3e4f521
title: "Bài 21: Testing Micro Frontend — Component, Visual & Integration"
slug: bai-21-testing-micro-frontend-component-visual-integration
description: >-
  Testing strategy cho Micro Frontend. Component testing (React Testing Library). Visual regression testing (Chromatic, Percy). Cross-MFE integration testing. Storybook interaction tests.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 21
section_title: "Phần 7: Testing Full-Stack Microservices & Micro Frontend"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Testing Micro Frontend có thêm thách thức so với testing SPA thông thường: mỗi MFE cần test **isolated** (standalone) và **integrated** (trong Shell App). Bài này xây dựng testing strategy cho cả hai scenarios.

---

## 1. Testing Levels cho Micro Frontend

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

| Test Type | When | Tool | CI Stage |
|-----------|------|------|----------|
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

## Tóm tắt

- **Component tests**: mỗi MFE test standalone với RTL
- **Visual regression**: Storybook + Chromatic catch UI changes
- **Integration tests**: MFE in Shell, cross-MFE communication
- **E2E**: critical flows chỉ, chạy trên staging
- Test **events** (contracts) giữa MFEs

---

**Bài tiếp theo:** [Bài 22: Contract Testing — Pact & API Compatibility](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-22-contract-testing-pact-api-compatibility)
