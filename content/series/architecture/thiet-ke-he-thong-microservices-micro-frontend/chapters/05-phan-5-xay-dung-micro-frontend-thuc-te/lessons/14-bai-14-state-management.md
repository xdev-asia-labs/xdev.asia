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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3064" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3064)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1073" cy="69" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="1046" cy="82" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1019" cy="95" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="992" cy="108" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="965" cy="121" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="79" x2="1100" y2="159" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="109" x2="1050" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1008.444863728671,162 1008.444863728671,196 979,213 949.555136271329,196 949.555136271329,162 979,145" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ Kiến trúc — Bài 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 14: Cross-MFE State Management &amp;</tspan>
      <tspan x="60" dy="42">Communication</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Thiết kế hệ thống Microservices &amp; Micro Frontend — Từ cơ bản đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Xây dựng Micro Frontend thực tế</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

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
