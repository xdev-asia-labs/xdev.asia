---
id: 019e4a33-d413-7b20-c001-b1c2d3e4f513
title: "Bài 13: Shell Application — Routing, Layout & Orchestration"
slug: bai-13-shell-application-routing-layout-orchestration
description: >-
  Thiết kế Shell Application: Global Layout, Routing orchestration, Authentication integration, Version management, Performance budget.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 5: Xây dựng Micro Frontend thực tế"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Shell Application (Container App) là **bộ não điều phối** toàn bộ Micro Frontend. Nó quyết định layout, routing, authentication, và cách các MFE giao tiếp với nhau.

---

## 1. Trách nhiệm của Shell Application

```
Shell Application:
├── Layout Management (Header, Footer, Sidebar)
├── Routing Orchestration (top-level routes → MFE)
├── Authentication (Login/Logout, token management)
├── Shared Services (Event Bus, Error Boundary)
└── Performance (Lazy loading, prefetching)
```

---

## 2. Routing Architecture

### 2.1 Route Ownership

Mỗi MFE own routes của mình, Shell chỉ delegate:

```jsx
function ShellRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/*" element={
        <MFELoader name="product" module="./ProductRoutes" />
      } />
      <Route path="/cart/*" element={
        <MFELoader name="cart" module="./CartRoutes" />
      } />
      <Route path="/orders/*" element={
        <MFELoader name="order" module="./OrderRoutes" />
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

### 2.2 MFE Internal Routes

```jsx
// Product MFE - own routes
function ProductRoutes() {
  return (
    <Routes>
      <Route index element={<ProductList />} />
      <Route path=":id" element={<ProductDetail />} />
      <Route path="category/:slug" element={<CategoryPage />} />
    </Routes>
  );
}
```

---

## 3. Layout Architecture

```
┌─────────────────────────────────────────────┐
│ Shell App                                   │
│ ┌─────────────────────────────────────────┐ │
│ │ Header (Shell-owned)                    │ │
│ │ Logo │ Nav │ Search │ Cart │ User │     │ │
│ ├─────┬───────────────────────────────────┤ │
│ │Side │  ┌─────────────────────────────┐  │ │
│ │bar  │  │  MFE Content Area           │  │ │
│ │     │  │  (dynamic, loaded by route) │  │ │
│ │     │  └─────────────────────────────┘  │ │
│ ├─────┴───────────────────────────────────┤ │
│ │ Footer (Shell-owned)                    │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

Shell quản lý: Header, Footer, Sidebar, Loading, Error boundaries
MFE quản lý: Content area, Internal routing, Local state

---

## 4. Authentication Integration

```
Shell handles login → broadcasts auth state to MFEs:

Shell App ──login──► Keycloak (OIDC)
Shell App ◄──tokens── Keycloak
Shell App ═══broadcast══► MFE A (useAuth())
Shell App ═══broadcast══► MFE B (useAuth())
```

```jsx
function Shell() {
  const auth = useKeycloakAuth();
  return (
    <AuthContext.Provider value={auth}>
      <Header user={auth.user} />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </AuthContext.Provider>
  );
}
```

---

## 5. Performance Strategies

### 5.1 Lazy Loading + Prefetch

```jsx
function NavLink({ to, mfeName, children }) {
  const handleMouseEnter = () => {
    import(/* webpackPrefetch: true */ `${mfeName}/Routes`);
  };
  return <Link to={to} onMouseEnter={handleMouseEnter}>{children}</Link>;
}
```

### 5.2 Performance Budget

```
Per MFE limits:
├── JavaScript: max 250KB gzipped
├── CSS: max 50KB gzipped
├── First Contentful Paint: < 1.5s
├── Time to Interactive: < 3s
└── Lighthouse Score: > 80
```

---

## Tóm tắt

- Shell = **orchestrator** — owns layout, routing, auth
- Mỗi MFE own **content area** và **internal routes**
- Auth handled bởi Shell, broadcast cho MFEs
- Shell phải **thin** — không chứa business logic

---

**Bài tiếp theo:** [Bài 14: Cross-MFE State Management & Communication](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-14-cross-mfe-state-management-communication)
