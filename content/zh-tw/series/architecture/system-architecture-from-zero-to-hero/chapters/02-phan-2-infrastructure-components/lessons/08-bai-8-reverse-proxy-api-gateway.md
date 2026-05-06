---
id: 019d8a21-c108-7001-d001-e1f2a3b4c508
title: 第 8 課：反向代理和 API 網關
slug: bai-8-reverse-proxy-va-api-gateway
description: >-
  反向代理：SSL 終止、壓縮、安全。 API閘道模式：路由、驗證、速率限制、節流。比較 Nginx、Envoy、Kong、AWS API
  閘道。服務網格概念（Istio、Linkerd）。 BFF（前端後端）模式。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 第 2 部分：基礎設施組件
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ 建築 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：反向代理和 API 網關</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：基礎設施組件</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

反向代理和 API 網關是位於客戶端和後端伺服器之間的兩個元件。它們提供每個生產系統所需的安全性、路由和橫切關注點。

---

## 1. 反向代理

### 1.1 正向代理與反向代理

```
Forward Proxy (đại diện cho client):
  Client ──► Proxy ──► Internet ──► Server
  Ví dụ: VPN, Corporate proxy

Reverse Proxy (đại diện cho server):
  Client ──► Internet ──► Reverse Proxy ──► Backend Servers
  Ví dụ: Nginx, HAProxy, Cloudflare
```

### 1.2 主要功能

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

## 2.API網關

### 2.1 API閘道模式

```
                    ┌─────────────────┐
  Mobile App ──────►│                 │──► User Service
  Web App ─────────►│   API Gateway   │──► Order Service
  Partner API ─────►│                 │──► Payment Service
  IoT Device ─────►│                 │──► Notification Service
                    └─────────────────┘
```

### 2.2 API閘道功能

|功能|描述 |
|----------|--------|
| **請求路由** |路線 /users/* → 使用者服務，/orders/* → 訂單服務 |
| **身份驗證** |驗證 JWT 令牌、API 金鑰驗證 |
| **授權** |檢查權限、RBAC |
| **速率限制** |每個 API 金鑰 100 個請求/分鐘 |
| **請求/回應轉換** |更改格式、新增/刪除標題 |
| **斷路器** |如果服務關閉則停止請求 |
| **記錄與監控** |訪問日誌、指標、追蹤 |
| **API 版本控制** | /v1/用戶，/v2/用戶 |

### 2.3 速率限制演算法

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

## 3.BFF（前端後端）

### 3.1 問題

```
Mobile App cần:  { name, avatar }     ← Ít data, bandwidth thấp
Web App cần:     { name, avatar, posts, friends, settings }  ← Đầy đủ
Admin Panel cần: { name, email, role, audit_log, permissions } ← Khác

Nếu dùng chung 1 API:
  → Mobile nhận thừa data (waste bandwidth)
  → Web phải gọi nhiều APIs (nhiều roundtrips)
```

### 3.2 BFF解決方案

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

每個 BFF 都會優化特定客戶的回應。

---

## 4. 服務網格

### 4.1 什麼是服務網格？

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

### 4.2 Istio 與 Linkerd

|特點|伊斯蒂奧 |連結器 |
|--------|--------|--------|
| **代理** |特使 | linkerd2-代理 (Rust) |
| **複雜性** |曹 |低|
| **性能** |中等|更好 |
| **特點** |很多|專注|
| **最適合** |企業，複雜需求|簡單的服務網格 |

---

## 5. 比較 API 閘道解決方案

|解決方案 |類型 |最適合 |
|----------|--------|--------|
| **Nginx** |反向代理+LB |簡單路由、靜態檔案|
| **孔** |完整的API網關|插件生態系統，多雲 |
| **特使** | L7 代理 |服務網格、gRPC |
| **AWS API 閘道** |管理 | AWS 生態系統，無伺服器 |
| **Traefik** |雲端原生 | Kubernetes，自動發現 |
| **APISIX** | API閘道|效能、Lua 外掛程式 |

---

## 6. 實作：使用 Nginx 的 API 網關

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

## 總結

|組件|角色 |何時使用 |
|------------|---------|-------------|
|反向代理| SSL、缓存、安全 |一直在生产|
| API网关|路由、身份验证、速率限制 |微服务架构|
|最好的朋友|根据客户类型进行优化 |多种客户类型 |
|服务网格|跨领域关注点 |大型微服务（50+ 服务）|

---

## 練習

1. **API网关设计：** 为具有5个后端服务的电子商务应用程序设计API网关。定义路由规则、速率限制和身份验证策略。

2. **BFF 与单一 API：** 系统有移动应用程序、Web 应用程序和智能电视应用程序。每個平台需要不同的數據。为每个平台设计具有数据映射的 BFF 架构。

3. **速率限制：** 用伪代码实现令牌桶算法。桶大小 = 100，填充率 = 10 个令牌/秒。
