---
id: 019e4a33-d416-7b20-c001-b1c2d3e4f516
title: 'Lesson 16: Authentication & Authorization — SSO for Micro Frontend'
slug: bai-16-authentication-authorization-sso-cho-micro-frontend
description: >-
  SSO architecture for Micro Frontend. Keycloak integration. OAuth2/OIDC flow.
  Token management. RBAC. Token sharing between Shell and MFEs.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 16
section_title: 'Part 5: Building a practical Micro Frontend'
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: Microservices & Micro Frontend system design — From basics to Production
  slug: thiet-ke-he-thong-microservices-micro-frontend
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7061" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7061)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1068" cy="154" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1036" cy="282" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="1004" cy="150" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="972" cy="278" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="940" cy="146" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="114" x2="1100" y2="194" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="144" x2="1050" y2="214" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="939.1147367097487,99.5 939.1147367097487,128.5 914,143 888.8852632902513,128.5 888.8852632902513,99.50000000000001 914,85" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🏗️ Architecture — Lesson 16</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 16: Authentication & Authorization —</tspan>
      <tspan x="60" dy="42">SSO for Micro Frontend</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Microservices & Micro Frontend system design — From basics to Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Building a practical Micro Frontend</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Authentication in Micro Frontend is more complicated than regular SPA: Shell App handles login, but all MFEs need an access token. This article designs SSO architecture with Keycloak.

---

## 1. SSO Architecture

```
┌──────────┐   1. Login    ┌──────────┐
│  Shell   │──────────────►│ Keycloak │
│  App     │◄──────────────│  (OIDC)  │
│          │   2. Tokens   └──────────┘
│          │
│ 3. Store tokens (memory)
│ 4. Broadcast auth state
│          │
│  ┌───────┴───────┐
│  ▼               ▼
│ MFE A          MFE B
│ (useAuth)      (useAuth)
│  │               │
│  ▼               ▼
│ API calls with Bearer token
└─────────────────────────
```

### OIDC Authorization Code Flow + PKCE

```
1. User clicks Login → Shell redirects to Keycloak
2. User authenticates → Keycloak redirects back with auth code
3. Shell exchanges auth code for tokens (PKCE)
4. Tokens: Access (5 min), Refresh (30 min), ID Token
5. Shell stores in memory (NOT localStorage!)
6. Shell broadcasts auth state to MFEs
```

---

## 2. Token Management

### 2.1 Storage Security

```
❌ localStorage / sessionStorage: XSS vulnerable
✅ Memory (JS variable): Cleared on refresh + silent renew
✅ HTTP-only Cookie: For BFF pattern (server-side)
```

### 2.2 Token Sharing

```jsx
// Option 1: React Context (same React via Module Federation)
<AuthContext.Provider value={auth}>
  <MFEContainer />
</AuthContext.Provider>

// Option 2: Events (framework agnostic)
window.dispatchEvent(new CustomEvent('auth:token-updated', {
  detail: { accessToken, user, roles }
}));
```

### 2.3 Silent Renewal

```javascript
useEffect(() => {
  const interval = setInterval(async () => {
    const newTokens = await keycloak.refresh(refreshToken);
    broadcastToken(newTokens.accessToken);
  }, 4 * 60 * 1000); // Refresh 1 min before expiry
  return () => clearInterval(interval);
}, [refreshToken]);
```

---

## 3. Authorization — RBAC

```
Keycloak Roles:
├── admin       → Full access
├── manager     → Order + Product management
├── editor      → Product editing only
├── customer    → Shopping, order history
└── guest       → Browse products only
```

### Frontend Authorization

```jsx
// Shell: route-level guard
<Route path="/admin/*" element={
  <RequireRole role="admin"><AdminMFE /></RequireRole>
} />

// MFE: feature-level guard
{hasRole('editor') && <EditButton />}
{hasRole('admin') && <DeleteButton />}
```

### Backend Authorization (API Gateway)

```yaml
routes:
  - path: /api/products
    methods: [POST, PUT, DELETE]
    plugins:
      jwt-auth: {}
      rbac: { required_roles: ["editor", "admin"] }
```

> **Important:** Frontend auth is UX only — **backend must always validate**.

---

## 4. Security Best Practices

| Practice | Description |
|----------|-------|
| Tokens in memory | Do not save access tokens in localStorage |
| HTTP-only cookies | For BFF pattern |
| PKCE | Required for SPA |
| Short-lived tokens | Access: 5 min, Refresh: 30 min |
| Token rotation | New refresh token every time refresh |
| CORS strict | Only accept known origins |
| CSP headers | Prevent XSS |

---

## Summary

- **Shell own authentication** — login, logout, token management
- **MFEs receive tokens** via Context or Events
- **Tokens in memory** + silent refresh
- **RBAC**: route-level + feature-level + API-level
- **Backend always validates**

---

**Next article:** [Lesson 17: BFF Pattern — Backend for Frontend](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-17-bff-pattern-backend-for-frontend)
