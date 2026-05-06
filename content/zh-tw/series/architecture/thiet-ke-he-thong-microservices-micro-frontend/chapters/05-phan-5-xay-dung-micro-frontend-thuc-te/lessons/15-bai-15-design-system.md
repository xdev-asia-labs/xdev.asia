---
id: 019e4a33-d415-7b20-c001-b1c2d3e4f515
title: 第 15 課：設計系統和共享 UI — 保持 UX 一致
slug: bai-15-design-system-shared-ui-giu-ux-nhat-quan
description: 建構微前端設計系統。共用元件庫（Storybook）。 CSS 策略：CSS 模組、Tailwind。使用 CSS 變數進行主題化。版本控制策略。
duration_minutes: 75
is_free: true
video_url: null
sort_order: 15
section_title: 第 5 部分：建構實用的微前端
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: 微服務與微前端系統設計－從基礎到生產
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🏗️ 建築 — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：設計系統和共享 UI — 維護 UX</tspan>
      <tspan x="60" dy="42">一致的</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">微服務與微前端系統設計－從基礎到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：建構實用的微前端</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

當每個團隊建立自己的 MFE 時，使用者體驗很容易**支離破碎**。 Design System 是保持 MFE 之間使用者體驗一致性的唯一解決方案。

---

## 1.設計系統架構

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

## 2.微前端的 CSS 策略

### 2.1 CSS衝突問題

```
MFE A: .btn { background: blue; }
MFE B: .btn { background: red; }
→ CSS cascade conflict!
```

### 2.2 解決方案

|戰略|隔離| DX |性能|
|----------|------------|-----|------------|
| **CSS 模組** | ✅ 範圍 |好 |最佳|
| **順風 CSS** | ✅ 實用至上 |太棒了|好 |
| **CSS-in-JS** | ✅ 運行時 |好 |好的 |
| **影子 DOM** | ✅ 硬邊界 |複雜|好的 |

**推薦：** **Tailwind CSS** — 無衝突、一致的實用程式類別。

### 2.3 用於主題化的 CSS 變數

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

MFE 會根據主題自動使用 CSS 變數 →：
```jsx
<button style={{ background: 'var(--color-primary)' }}>Click</button>
```

---

## 3.共享元件庫

```
@company/ui/
├── src/Button/, Input/, Modal/
├── package.json
└── tailwind.config.js (shared config)
```

透過模組聯盟共享分發：
```javascript
shared: {
  '@company/ui': { singleton: true, requiredVersion: '^3.0.0' },
}
```

---

## 4. 故事書 — 生活文檔

```jsx
export default { title: 'Components/Button', component: Button };
export const Primary = { args: { variant: 'primary', children: 'Click me' } };
export const Disabled = { args: { disabled: true, children: 'Disabled' } };
```

為所有團隊部署 Storybook → 單一事實來源。

---

## 5. 版本控制策略

- **語意版本控制**：主要 = 破壞，次要 = 功能，補丁 = 修復
- **金絲雀版本**：推出前在 1 MFE 上進行測試
- **向後相容**：刪除之前棄用

---

## 總結

- **微前端需要設計系統**
- **CSS 變數** 用於主題 — 深色模式、品牌
- **推薦 Tailwind CSS** — 無衝突
- **故事書** = 活生生的文獻

---

**下一篇文章：** [第 16 課：身份驗證與授權 — 微前端的 SSO](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-16-authentication-authorization-sso-cho-micro-frontend)
