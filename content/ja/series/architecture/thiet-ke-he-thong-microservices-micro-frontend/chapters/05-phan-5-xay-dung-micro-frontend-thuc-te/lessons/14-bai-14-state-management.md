---
id: 019e4a33-d414-7b20-c001-b1c2d3e4f514
title: 'レッスン 14: MFE 間の状態管理とコミュニケーション'
slug: bai-14-cross-mfe-state-management-communication
description: >-
  Micro Frontend の状態管理パターン。カスタム イベント、イベント バス、URL ベースの状態、ブラウザ
  ストレージ。グローバル状態の共有は避けてください。 React Context、CustomEvent を使用した実践的なパターン。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 5: 実用的なマイクロ フロントエンドの構築'
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: マイクロサービスとマイクロ フロントエンドのシステム設計 — 基本から運用まで
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ アーキテクチャ — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: MFE 間の状態管理と</tspan>
      <tspan x="60" dy="42">コミュニケーション</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">マイクロサービスとマイクロ フロントエンドのシステム設計 — 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: 実用的なマイクロ フロントエンドの構築</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

クロス MFE 通信は、Micro Frontend の最大の課題です。各 MFE は、共有メモリを使用せずに、独自のランタイムで実行されます。この記事では、安全な通信パターンを紹介します。

---

## 1. 黄金律

> MFE は **疎結合**である必要があります。共有状態ではなく、コントラクトを介して通信します。

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

## 2. コミュニケーションパターン

### 2.1 カスタム イベント (ブラウザネイティブ)

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

### 2.2 イベントバス (カスタム)

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

### 2.3 URL ベースの状態

```
/products?category=electronics&sort=price
→ URL là "shared state" tự nhiên: bookmarkable, shareable, no coupling
```

### 2.4 ブラウザのストレージ

```javascript
// Shared preferences via localStorage
localStorage.setItem('user:preferences', JSON.stringify({
  currency: 'VND', language: 'vi', theme: 'dark'
}));
```

---

## 3. 国家所有規則

|状態 |オーナー | MFE がアクセスする方法 |
|------|------|-----|
| **認証状態** |シェル |コンテキスト / イベント |
| **カートのアイテム** |カートMFE |イベント |
| **製品データ** |製品MFE |共有されていません |
| **ユーザー設定** |シェル |ローカルストレージ + イベント |
| **URL パラメータ** |シェル (ルーター) | URL |
| **UI テーマ** |シェル | CSS 変数 |

---

## 4. コントラクトファーストのコミュニケーション

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

## 5. ベストプラクティス

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

## 概要

- **カスタム イベント** — シンプル、ブラウザネイティブ
- **イベント バス** — 型付き、テスト可能
- **URL** — ナビゲーション状態に最適
- **localStorage** — ユーザー設定
- ルール: **各 MFE は独自の状態を管理**、イベントを介して通信します

---

**次の記事:** [レッスン 15: デザイン システムと共有 UI — UX の一貫性を保つ](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-15-design-system-shared-ui-giu-ux-nhat-quan)
