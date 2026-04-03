---
id: 019e4a33-d423-7b20-c001-b1c2d3e4f523
title: "Bài 23: Mono-Repo vs Multi-Repo — Source Code Organization"
slug: bai-23-mono-repo-vs-multi-repo-source-code-organization
description: >-
  So sánh Mono-Repo vs Multi-Repo cho Microservices + Micro Frontend. Turborepo, Nx workspace setup. Shared packages management. Code ownership (CODEOWNERS). Dependency management strategies.
duration_minutes: 75
is_free: true
video_url: null
sort_order: 23
section_title: "Phần 8: CI/CD & Deployment Strategies"
course:
  id: 019e4a33-d400-7b20-c001-b1c2d3e4f5a8
  title: "Thiết kế hệ thống Microservices & Micro Frontend — Từ cơ bản đến Production"
  slug: thiet-ke-he-thong-microservices-micro-frontend
---

## Giới thiệu

Cách tổ chức source code quyết định developer experience, CI/CD complexity, và team collaboration. Bài này so sánh Mono-Repo vs Multi-Repo và hướng dẫn chọn phù hợp.

---

## 1. Multi-Repo

### 1.1 Mô hình

```
github.com/company/
├── product-service/       (repo riêng)
├── order-service/         (repo riêng)
├── cart-service/          (repo riêng)
├── product-mfe/           (repo riêng)
├── cart-mfe/              (repo riêng)
├── shell-app/             (repo riêng)
├── shared-ui/             (repo riêng, npm package)
└── shared-types/          (repo riêng, npm package)
```

### 1.2 Ưu & Nhược điểm

| Ưu điểm | Nhược điểm |
|---------|-----------|
| Clear ownership | Shared code khó manage (npm publish) |
| Independent CI/CD | Cross-repo changes phức tạp |
| Smaller repos = fast clone | Dependency version drift |
| Fine-grained access control | Consistency khó enforce |

---

## 2. Mono-Repo

### 2.1 Mô hình

```
github.com/company/platform/
├── apps/
│   ├── shell-app/
│   ├── product-mfe/
│   ├── cart-mfe/
│   └── order-mfe/
├── services/
│   ├── product-service/
│   ├── order-service/
│   └── cart-service/
├── packages/
│   ├── shared-ui/
│   ├── shared-types/
│   └── eslint-config/
├── turbo.json / nx.json
└── package.json (workspace root)
```

### 2.2 Ưu & Nhược điểm

| Ưu điểm | Nhược điểm |
|---------|-----------|
| Shared code dễ dàng (internal packages) | Repo lớn → clone chậm |
| Atomic cross-package changes | CI complexity (affected detection) |
| Consistent tooling & configs | Access control coarse-grained |
| Refactoring dễ | Build time long (cần caching) |

---

## 3. Decision Matrix

| Factor | Multi-Repo | Mono-Repo |
|--------|-----------|-----------|
| **Team size** | 50+ devs, nhiều team | < 50 devs, few teams |
| **Shared code** | Ít shared | Nhiều shared packages |
| **Deploy independence** | ✅ Tự nhiên | ✅ Với affected detection |
| **Cross-cutting changes** | ❌ Multiple PRs | ✅ Single PR |
| **CI/CD** | Simple per repo | Complex nhưng powerful |
| **Onboarding** | Dễ (1 service/repo) | Medium (big repo) |

---

## 4. Mono-Repo Tools

### 4.1 Turborepo

```json
// turbo.json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "test": {
      "dependsOn": ["build"]
    },
    "lint": {}
  }
}
```

```bash
# Build chỉ affected packages
turbo build --filter=...[origin/main]

# Build product-mfe và dependencies
turbo build --filter=product-mfe...
```

### 4.2 Nx

```bash
# Affected commands (chỉ build/test code thay đổi)
nx affected --target=build --base=main
nx affected --target=test --base=main

# Dependency graph
nx graph
```

### 4.3 Key Features

| Feature | Turborepo | Nx |
|---------|-----------|-----|
| **Affected detection** | ✅ Git-based | ✅ Dependency graph |
| **Remote caching** | ✅ Vercel | ✅ Nx Cloud |
| **Task orchestration** | ✅ Pipeline | ✅ Task graph |
| **Code generation** | ❌ | ✅ Generators |
| **Plugin ecosystem** | Limited | Rich (React, Node, etc.) |

---

## 5. Code Ownership (CODEOWNERS)

```
# .github/CODEOWNERS
apps/product-mfe/    @team-product
apps/cart-mfe/       @team-cart
services/product-*/  @team-product
services/order-*/    @team-order
packages/shared-ui/  @team-platform
packages/shared-*/   @team-platform
turbo.json           @team-platform
```

→ PR tự động assign reviewers based on changed files.

---

## 6. Khuyến nghị

```
E-Commerce Platform (series này):

Mono-Repo (Turborepo):
├── apps/           (Shell + MFEs)
├── services/       (Microservices)
├── packages/       (shared-ui, shared-types, eslint-config)
└── infra/          (Terraform, K8s manifests)

Lý do:
- Nhiều shared code (UI, types, configs)
- Cross-cutting changes thường xuyên
- Lợi ích từ affected detection & remote caching
- Team size < 50 devs
```

---

## Tóm tắt

- **Multi-Repo**: clear ownership, simple CI, nhưng shared code khó
- **Mono-Repo**: shared code dễ, atomic changes, cần tooling (Turborepo/Nx)
- Dùng **Turborepo/Nx** cho affected detection + remote caching
- **CODEOWNERS** cho code ownership trong mono-repo

---

**Bài tiếp theo:** [Bài 24: CI/CD Pipeline cho Microservices & Micro Frontend](/series/thiet-ke-he-thong-microservices-micro-frontend/bai-24-cicd-pipeline-cho-microservices-micro-frontend)
