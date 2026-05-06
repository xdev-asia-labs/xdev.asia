---
id: 019d8a21-c108-7001-d001-e1f2a3b4c508
title: 'Lesson 8: Reverse Proxy and API Gateway'
slug: bai-8-reverse-proxy-va-api-gateway
description: >-
  Reverse Proxy: SSL Termination, Compression, Security. API Gateway Pattern:
  routing, authentication, rate limiting, throttling. Compare Nginx, Envoy,
  Kong, AWS API Gateway. Service Mesh concepts (Istio, Linkerd). BFF (Backend
  for Frontend) pattern.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 'Part 2: Infrastructure Components'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'System Architecture: From Zero to Hero'
  slug: system-architecture-from-zero-to-hero
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3035" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3035)"/>

  <!-- Decorations -->
  <g>
    <circle cx="733" cy="229" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="866" cy="122" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="999" cy="275" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="632" cy="168" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="765" cy="61" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="59" x2="1100" y2="139" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="89" x2="1050" y2="159" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="988.444863728671,142 988.444863728671,176 959,193 929.555136271329,176 929.555136271329,142 959,125" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ Architecture — Lesson 8</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 8: Reverse Proxy and API Gateway</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Infrastructure Components</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

Reverse Proxy and API Gateway are two components that stand between the client and backend servers. They provide security, routing, and cross-cutting concerns that every production system needs.

---

## 1. Reverse Proxy

### 1.1 Forward Proxy vs Reverse Proxy

```
Forward Proxy (đại diện cho client):
  Client ──► Proxy ──► Internet ──► Server
  Ví dụ: VPN, Corporate proxy

Reverse Proxy (đại diện cho server):
  Client ──► Internet ──► Reverse Proxy ──► Backend Servers
  Ví dụ: Nginx, HAProxy, Cloudflare
```

### 1.2 Main functions

```
┌──────────────────────────────────────────────┐
│              Reverse Proxy                    │
│  ┌──────────────────────────────────────┐    │
│  │ SSL/TLS Termination                   │    │
│  │ → HTTPS decrypt tại proxy             │    │
│  │ → Backend dùng HTTP (nhanh hơn)       │    │
│  ├──────────────────────────────────────┤    │
│  │ Compression (gzip, brotli)            │    │
│  │ → Nén response trước khi gửi client   │    │
│  ├──────────────────────────────────────┤    │
│  │ Static File Serving                   │    │
│  │ → Serve HTML, CSS, JS, images         │    │
│  ├──────────────────────────────────────┤    │
│  │ Caching                               │    │
│  │ → Cache responses, giảm backend load  │    │
│  ├──────────────────────────────────────┤    │
│  │ Security                              │    │
│  │ → Hide backend topology               │    │
│  │ → Rate limiting, IP blocking, WAF     │    │
│  └──────────────────────────────────────┘    │
└──────────────────────────────────────────────┘
```

---

## 2. API Gateway

### 2.1 API Gateway Pattern

```
                    ┌─────────────────┐
  Mobile App ──────►│                 │──► User Service
  Web App ─────────►│   API Gateway   │──► Order Service
  Partner API ─────►│                 │──► Payment Service
  IoT Device ─────►│                 │──► Notification Service
                    └─────────────────┘
```

### 2.2 API Gateway function

| Function | Description |
|----------|--------|
| **Request Routing** | Route /users/* → User Service, /orders/* → Order Service |
| **Authentication** | Verify JWT token, API key validation |
| **Authorization** | Check permissions, RBAC |
| **Rate Limiting** | 100 requests/minute per API key |
| **Request/Response Transform** | Change format, add/remove headers |
| **Circuit Breaker** | Stop requests if service is down |
| **Logging & Monitoring** | Access logs, metrics, tracing |
| **API Versioning** | /v1/users, /v2/users |

### 2.3 Rate Limiting Algorithms

```
Token Bucket:
  Bucket chứa N tokens, refill rate = R tokens/giây
  Mỗi request lấy 1 token
  Hết tokens → 429 Too Many Requests

  Ví dụ: 100 tokens, refill 10/s
  T=0:  100 tokens
  T=0:  Burst 100 requests → 0 tokens
  T=1:  10 tokens refilled
  T=10: 100 tokens lại

Sliding Window:
  Đếm requests trong window N giây gần nhất
  Mỗi request mới: count++ nếu count < limit
  → Chính xác hơn Token Bucket
```

---

## 3. BFF (Backend for Frontend)

### 3.1 Problem

```
Mobile App cần:  { name, avatar }     ← Ít data, bandwidth thấp
Web App cần:     { name, avatar, posts, friends, settings }  ← Đầy đủ
Admin Panel cần: { name, email, role, audit_log, permissions } ← Khác

Nếu dùng chung 1 API:
  → Mobile nhận thừa data (waste bandwidth)
  → Web phải gọi nhiều APIs (nhiều roundtrips)
```

### 3.2 BFF Solution

```
         ┌────────────┐
Mobile ──►│ Mobile BFF │──► User Service
         └────────────┘──► Post Service
         ┌────────────┐
Web ─────►│  Web BFF   │──► User Service
         └────────────┘──► Post Service
                        ──► Friend Service
         ┌────────────┐
Admin ───►│ Admin BFF  │──► User Service
         └────────────┘──► Audit Service
```

Each BFF optimizes the response for a specific client.

---

## 4. Service Mesh

### 4.1 What is Service Mesh?

```
Không có Service Mesh:
  Service A ──► Service B
  Mỗi service phải tự implement:
  retry, timeout, circuit breaker, mTLS, tracing, metrics

Có Service Mesh:
  Service A ──► Sidecar Proxy A ──► Sidecar Proxy B ──► Service B
  Sidecar proxy xử lý tất cả cross-cutting concerns

┌─────────────────┐       ┌─────────────────┐
│  Pod A          │       │  Pod B          │
│ ┌─────┐ ┌────┐ │       │ ┌────┐ ┌─────┐ │
│ │App A│ │Envoy│◄├───────├►│Envoy│ │App B│ │
│ └─────┘ └────┘ │       │ └────┘ └─────┘ │
└─────────────────┘       └─────────────────┘
```

### 4.2 Istio vs Linkerd

| Features | Istio | Linkerd |
|--------|-------|--------|
| **Proxy** | Envoy | linkerd2-proxy (Rust) |
| **Complexity** | Cao | Low |
| **Performance** | Moderate | Better |
| **Features** | A lot | Focused |
| **Best for** | Enterprise, complex needs | Simple service mesh |

---

## 5. Compare API Gateway Solutions

| Solution | Type | Best for |
|----------|-------|-------|
| **Nginx** | Reverse Proxy + LB | Simple routing, static files |
| **Kong** | Full API Gateway | Plugin ecosystem, multi-cloud |
| **Envoy** | L7 Proxy | Service mesh, gRPC |
| **AWS API Gateway** | Managed | AWS ecosystem, serverless |
| **Traefik** | Cloud-native | Kubernetes, auto-discovery |
| **APISIX** | API Gateway | Performance, Lua plugins |

---

## 6. Hands-on: API Gateway with Nginx

```nginx
# API Gateway configuration

# Rate limiting
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

# Upstream services
upstream user_service {
    server 10.0.1.1:8001;
    server 10.0.1.2:8001;
}

upstream order_service {
    server 10.0.2.1:8002;
    server 10.0.2.2:8002;
}

server {
    listen 443 ssl http2;
    server_name api.xdev.asia;

    # SSL Termination
    ssl_certificate /etc/ssl/certs/api.crt;
    ssl_certificate_key /etc/ssl/private/api.key;

    # Compression
    gzip on;
    gzip_types application/json;

    # API Routing
    location /api/v1/users {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://user_service;
        proxy_set_header Authorization $http_authorization;
    }

    location /api/v1/orders {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://order_service;
        proxy_set_header Authorization $http_authorization;
    }

    # Health check
    location /health {
        return 200 '{"status":"ok"}';
        add_header Content-Type application/json;
    }
}
```

---

## Summary

| Components | Role | When to use |
|-----------|-------|-------------|
| Reverse Proxy | SSL, caching, security | Always in production |
| API Gateway | Routing, auth, rate limiting | Microservices architecture |
| BFF | Optimize per client type | Multiple client types |
| Service Mesh | Cross-cutting concerns | Large microservices (50+ services) |

---

## Exercises

1. **API Gateway Design:** Design API Gateway for e-commerce application with 5 backend services. Define routing rules, rate limits, and authentication strategy.

2. **BFF vs Single API:** The system has Mobile App, Web App, and Smart TV App. Each platform needs different data. Design BFF architecture with data mapping for each platform.

3. **Rate Limiting:** Implement Token Bucket algorithm with pseudocode. Bucket size = 100, refill rate = 10 tokens/second.
