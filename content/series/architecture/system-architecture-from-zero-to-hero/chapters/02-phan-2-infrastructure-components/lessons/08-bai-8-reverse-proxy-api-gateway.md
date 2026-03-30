---
id: 019d8a21-c108-7001-d001-e1f2a3b4c508
title: "Bài 8: Reverse Proxy và API Gateway"
slug: bai-8-reverse-proxy-va-api-gateway
description: >-
  Reverse Proxy: SSL Termination, Compression, Security. API Gateway
  Pattern: routing, authentication, rate limiting, throttling.
  So sánh Nginx, Envoy, Kong, AWS API Gateway. Service Mesh concepts
  (Istio, Linkerd). BFF (Backend for Frontend) pattern.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 2: Các Thành Phần Hạ Tầng (Infrastructure Components)"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Reverse Proxy và API Gateway là hai thành phần đứng giữa client và backend servers. Chúng cung cấp security, routing, và cross-cutting concerns mà mọi hệ thống production đều cần.

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

### 1.2 Chức năng chính

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

### 2.2 Chức năng API Gateway

| Chức năng | Mô tả |
|----------|--------|
| **Request Routing** | Route /users/* → User Service, /orders/* → Order Service |
| **Authentication** | Verify JWT token, API key validation |
| **Authorization** | Check permissions, RBAC |
| **Rate Limiting** | 100 requests/phút per API key |
| **Request/Response Transform** | Thay đổi format, thêm/xóa headers |
| **Circuit Breaker** | Ngắt requests nếu service down |
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

### 3.1 Vấn đề

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

Mỗi BFF tối ưu response cho client cụ thể.

---

## 4. Service Mesh

### 4.1 Service Mesh là gì?

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

| Feature | Istio | Linkerd |
|---------|-------|---------|
| **Proxy** | Envoy | linkerd2-proxy (Rust) |
| **Complexity** | Cao | Thấp |
| **Performance** | Moderate | Tốt hơn |
| **Features** | Rất nhiều | Focused |
| **Best for** | Enterprise, complex needs | Simple service mesh |

---

## 5. So sánh API Gateway Solutions

| Solution | Type | Best for |
|----------|------|---------|
| **Nginx** | Reverse Proxy + LB | Simple routing, static files |
| **Kong** | Full API Gateway | Plugin ecosystem, multi-cloud |
| **Envoy** | L7 Proxy | Service mesh, gRPC |
| **AWS API Gateway** | Managed | AWS ecosystem, serverless |
| **Traefik** | Cloud-native | Kubernetes, auto-discovery |
| **APISIX** | API Gateway | Performance, Lua plugins |

---

## 6. Hands-on: API Gateway với Nginx

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

## Tổng kết

| Component | Role | When to use |
|-----------|------|------------|
| Reverse Proxy | SSL, caching, security | Always in production |
| API Gateway | Routing, auth, rate limiting | Microservices architecture |
| BFF | Optimize per client type | Multiple client types |
| Service Mesh | Cross-cutting concerns | Large microservices (50+ services) |

---

## Bài tập

1. **API Gateway Design:** Thiết kế API Gateway cho ứng dụng e-commerce với 5 backend services. Xác định routing rules, rate limits, và authentication strategy.

2. **BFF vs Single API:** Hệ thống có Mobile App, Web App, và Smart TV App. Mỗi platform cần data khác nhau. Thiết kế BFF architecture với data mapping cho mỗi platform.

3. **Rate Limiting:** Implement Token Bucket algorithm bằng pseudocode. Bucket size = 100, refill rate = 10 tokens/giây.
