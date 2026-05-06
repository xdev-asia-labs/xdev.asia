---
id: 019e4a33-d415-7b20-c001-b1c2d3e4f515
title: 'レッスン 15: デザイン システムと共有 UI — UX の一貫性を保つ'
slug: bai-15-design-system-shared-ui-giu-ux-nhat-quan
description: >-
  マイクロフロントエンドの設計システムを構築します。共有コンポーネント ライブラリ (Storybook)。 CSS 戦略: CSS
  モジュール、Tailwind。 CSS 変数を使用したテーマ設定。バージョン管理戦略。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 5: 実用的なマイクロ フロントエンドの構築'
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: マイクロサービスとマイクロ フロントエンドのシステム設計 — 基本から運用まで
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-882" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-882)"/>

  <!-- Decorations -->
  <g>
    <circle cx="809" cy="97" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1018" cy="206" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="727" cy="55" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="936" cy="164" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="645" cy="273" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="107" x2="1100" y2="187" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="137" x2="1050" y2="207" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="993.3730669589464,136 993.3730669589464,178 957,199 920.6269330410536,178 920.6269330410536,136 957,115" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ アーキテクチャ — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: システムと共有 UI の設計 — UX の維持</tspan>
      <tspan x="60" dy="42">一貫した</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">マイクロサービスとマイクロ フロントエンドのシステム設計 — 基本から運用まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: 実用的なマイクロ フロントエンドの構築</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## はじめに

各チームが独自の MFE を構築すると、UX は簡単に **断片化** します。 Design System は、MFE 全体で UX の一貫性を保つ唯一のソリューションです。

---

## 1. システムアーキテクチャの設計

```
Design System:
├── Design Tokens (CSS Variables)
│   ├── Colors, Typography, Spacing
│   └── Shadows, Border radius
├── Core Components (@company/ui)
│   ├── Button, Input, Select, Modal
│   ├── Table, Pagination, Toast
│   └── Layout: Grid, Stack, Container
├── Patterns (Form, Navigation, Data display)
└── Documentation (Storybook)
```

---

## 2. マイクロフロントエンドの CSS 戦略

### 2.1 CSS の競合の問題

```
MFE A: .btn { background: blue; }
MFE B: .btn { background: red; }
→ CSS cascade conflict!
```

### 2.2 解決策

|戦略 |隔離 | DX |パフォーマンス |
|----------|-----------|-----|---------------|
| **CSS モジュール** | ✅ スコープ付き |良い |ベスト |
| **Tailwind CSS** | ✅ 実用性第一 |すばらしい |良い |
| **JS 内の CSS** | ✅ ランタイム |良い | OK |
| **シャドウ DOM** | ✅ 厳しい境界線 |複雑な | OK |

**推奨:** **Tailwind CSS** — 競合のない、一貫したユーティリティ クラス。

### 2.3 テーマ用の CSS 変数

```css
:root {
  --color-primary: #2563eb;
  --color-error: #dc2626;
  --color-background: #ffffff;
  --color-text: #1f2937;
  --font-family: 'Inter', sans-serif;
  --radius-md: 0.375rem;
}

[data-theme="dark"] {
  --color-background: #111827;
  --color-text: #f9fafb;
}
```

MFE は CSS 変数を使用します → テーマに従って自動的に:
```jsx
<button style={{ background: 'var(--color-primary)' }}>Click</button>
```

---

## 3. 共有コンポーネント ライブラリ

```
@company/ui/
├── src/Button/, Input/, Modal/
├── package.json
└── tailwind.config.js (shared config)
```

共有モジュールフェデレーションによる配布:
```javascript
shared: {
  '@company/ui': { singleton: true, requiredVersion: '^3.0.0' },
}
```

---

## 4. ストーリーブック — 生きたドキュメント

```jsx
export default { title: 'Components/Button', component: Button };
export const Primary = { args: { variant: 'primary', children: 'Click me' } };
export const Disabled = { args: { disabled: true, children: 'Disabled' } };
```

Storybook を展開し、すべてのチームに単一の信頼できる情報源を提供します。

---

## 5. バージョン管理戦略

- **セマンティック バージョニング**: メジャー = 破壊、マイナー = 機能、パッチ = 修正
- **カナリア リリース**: 展開前に 1 つの MFE でテスト
- **下位互換性**: 削除する前に非推奨にします

---

## 概要

- **マイクロ フロントエンドにはデザイン システムが必要です**
- テーマ用の **CSS 変数** — ダーク モード、ブランディング
- **Tailwind CSS** 推奨 — 競合なし
- **ストーリーブック** = 生きたドキュメント

---

**次の記事:** [レッスン 16: 認証と認可 — マイクロ フロントエンドの SSO](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-16-authentication-authorization-sso-cho-micro-frontend)
