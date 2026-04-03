---
id: 019e4a33-d416-7b20-c001-b1c2d3e4f516
title: "Bài 16: Authentication & Authorization — SSO cho Micro Frontend"
slug: bai-16-authentication-authorization-sso-cho-micro-frontend
description: >-
  SSO architecture cho Micro Frontend. Keycloak integration. OAuth2/OIDC flow. Token management. RBAC. Token sharing giữa Shell và MFEs.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 16
section_title: "Phần 5: Xây dựng Micro Frontend thực tế"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Authentication trong Micro Frontend phức tạp hơn SPA thông thường: Shell App handle login, nhưng tất cả MFEs cần access token. Bài này thiết kế SSO architecture với Keycloak.

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

> **Quan trọng:** Frontend auth chỉ UX — **backend phải luôn validate**.

---

## 4. Security Best Practices

| Practice | Mô tả |
|----------|-------|
| Token in memory | Không lưu access token trong localStorage |
| HTTP-only cookies | Cho BFF pattern |
| PKCE | Bắt buộc cho SPA |
| Short-lived tokens | Access: 5 min, Refresh: 30 min |
| Token rotation | New refresh token mỗi lần refresh |
| CORS strict | Chỉ accept known origins |
| CSP headers | Prevent XSS |

---

## Tóm tắt

- **Shell own authentication** — login, logout, token management
- **MFEs nhận token** qua Context hoặc Events
- **Tokens in memory** + silent refresh
- **RBAC**: route-level + feature-level + API-level
- **Backend always validates**

---

**Bài tiếp theo:** [Bài 17: BFF Pattern — Backend for Frontend](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-17-bff-pattern-backend-for-frontend)
