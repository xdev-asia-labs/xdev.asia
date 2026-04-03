---
id: 019e4a33-d414-7b20-c001-b1c2d3e4f514
title: "Bài 14: Cross-MFE State Management & Communication"
slug: bai-14-cross-mfe-state-management-communication
description: >-
  State management patterns cho Micro Frontend. Custom Events, Event Bus, URL-based state, Browser Storage. Tránh shared global state. Practical patterns với React Context, CustomEvent.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 5: Xây dựng Micro Frontend thực tế"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Cross-MFE communication là thách thức lớn nhất của Micro Frontend. Mỗi MFE chạy trong runtime riêng, không chia sẻ memory. Bài này giới thiệu các patterns giao tiếp an toàn.

---

## 1. Nguyên tắc vàng

> MFEs nên **loose coupled** — communicate qua contracts, không shared state.

```
❌ Shared Global State:
window.globalStore = { cart: { items: [...] } }
→ Coupling nightmare, race conditions

✅ Event-based Communication:
MFE A publishes: "cart:item-added" { productId, qty }
MFE B subscribes: update cart badge
→ Loosely coupled, observable
```

---

## 2. Communication Patterns

### 2.1 Custom Events (Browser Native)

```javascript
// Product MFE - Publish
window.dispatchEvent(new CustomEvent('cart:item-added', {
  detail: { productId: '123', name: 'Laptop', price: 999 }
}));

// Cart MFE - Subscribe
useEffect(() => {
  const handler = (e) => {
    setCartItems(prev => [...prev, e.detail]);
  };
  window.addEventListener('cart:item-added', handler);
  return () => window.removeEventListener('cart:item-added', handler);
}, []);
```

### 2.2 Event Bus (Custom)

```typescript
class EventBus {
  private handlers: Map<string, Set<Function>> = new Map();
  
  on<T>(event: string, handler: (payload: T) => void) {
    if (!this.handlers.has(event)) this.handlers.set(event, new Set());
    this.handlers.get(event)!.add(handler);
    return () => this.handlers.get(event)?.delete(handler);
  }
  
  emit<T>(event: string, payload: T) {
    this.handlers.get(event)?.forEach(h => h(payload));
  }
}

export const eventBus = new EventBus();
```

### 2.3 URL-based State

```
/products?category=electronics&sort=price
→ URL là "shared state" tự nhiên: bookmarkable, shareable, no coupling
```

### 2.4 Browser Storage

```javascript
// Shared preferences via localStorage
localStorage.setItem('user:preferences', JSON.stringify({
  currency: 'VND', language: 'vi', theme: 'dark'
}));
```

---

## 3. State Ownership Rules

| State | Owner | How MFEs Access |
|-------|-------|----------------|
| **Auth state** | Shell | Context / Events |
| **Cart items** | Cart MFE | Events |
| **Product data** | Product MFE | Not shared |
| **User prefs** | Shell | localStorage + Events |
| **URL params** | Shell (Router) | URL |
| **UI theme** | Shell | CSS Variables |

---

## 4. Contract-first Communication

```typescript
// shared-types/events.ts
interface CartItemAddedEvent {
  type: 'cart:item-added';
  payload: { productId: string; name: string; price: number; quantity: number; };
}

interface CartUpdatedEvent {
  type: 'cart:updated';
  payload: { itemCount: number; total: number; };
}
```

---

## 5. Best Practices

```
Mỗi MFE nên:
✅ Fetch dữ liệu riêng (own API calls)
✅ Manage state riêng (local state)
✅ Render independently
✅ Graceful degradation

Mỗi MFE KHÔNG nên:
❌ Import components từ MFE khác
❌ Access DOM của MFE khác
❌ Share runtime state qua window/global
❌ Assume MFE khác đã loaded
```

---

## Tóm tắt

- **Custom Events** — simplest, browser native
- **Event Bus** — typed, testable
- **URL** — best for navigation state
- **localStorage** — user preferences
- Rule: **Mỗi MFE manage state riêng**, communicate qua events

---

**Bài tiếp theo:** [Bài 15: Design System & Shared UI — Giữ UX nhất quán](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-15-design-system-shared-ui-giu-ux-nhat-quan)
