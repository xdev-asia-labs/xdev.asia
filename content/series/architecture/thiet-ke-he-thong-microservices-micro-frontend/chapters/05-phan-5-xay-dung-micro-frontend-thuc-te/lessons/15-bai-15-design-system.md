---
id: 019e4a33-d415-7b20-c001-b1c2d3e4f515
title: "Bài 15: Design System & Shared UI — Giữ UX nhất quán"
slug: bai-15-design-system-shared-ui-giu-ux-nhat-quan
description: >-
  Xây dựng Design System cho Micro Frontend. Shared component library (Storybook). CSS strategies: CSS Modules, Tailwind. Theming với CSS Variables. Versioning strategy.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 5: Xây dựng Micro Frontend thực tế"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Khi mỗi team build MFE riêng, UX dễ bị **phân mảnh**. Design System là giải pháp duy nhất để giữ UX consistency across MFEs.

---

## 1. Design System Architecture

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

## 2. CSS Strategy cho Micro Frontend

### 2.1 Vấn đề CSS Conflicts

```
MFE A: .btn { background: blue; }
MFE B: .btn { background: red; }
→ CSS cascade conflict!
```

### 2.2 Solutions

| Strategy | Isolation | DX | Performance |
|----------|-----------|-----|-------------|
| **CSS Modules** | ✅ Scoped | Good | Best |
| **Tailwind CSS** | ✅ Utility-first | Great | Good |
| **CSS-in-JS** | ✅ Runtime | Good | OK |
| **Shadow DOM** | ✅ Hard boundary | Complex | OK |

**Khuyến nghị:** **Tailwind CSS** — utility classes không conflict, consistent.

### 2.3 CSS Variables cho Theming

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

MFE dùng CSS Variables → tự động theo theme:
```jsx
<button style={{ background: 'var(--color-primary)' }}>Click</button>
```

---

## 3. Shared Component Library

```
@company/ui/
├── src/Button/, Input/, Modal/
├── package.json
└── tailwind.config.js (shared config)
```

Distribution qua Module Federation shared:
```javascript
shared: {
  '@company/ui': { singleton: true, requiredVersion: '^3.0.0' },
}
```

---

## 4. Storybook — Living Documentation

```jsx
export default { title: 'Components/Button', component: Button };
export const Primary = { args: { variant: 'primary', children: 'Click me' } };
export const Disabled = { args: { disabled: true, children: 'Disabled' } };
```

Deploy Storybook → single source of truth cho tất cả teams.

---

## 5. Versioning Strategy

- **Semantic Versioning**: Major = breaking, Minor = feature, Patch = fix
- **Canary releases**: test trên 1 MFE trước khi rollout
- **Backwards compatible**: deprecate trước khi remove

---

## Tóm tắt

- **Design System là bắt buộc** cho Micro Frontend
- **CSS Variables** cho theming — dark mode, branding
- **Tailwind CSS** recommended — no conflicts
- **Storybook** = living documentation

---

**Bài tiếp theo:** [Bài 16: Authentication & Authorization — SSO cho Micro Frontend](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-16-authentication-authorization-sso-cho-micro-frontend)
