---
id: 019d8a21-c105-7001-d001-e1f2a3b4c505
title: 'Lesson 5: Load Balancer - Intelligent load distribution'
slug: bai-5-load-balancer-phan-phoi-tai-thong-minh
description: >-
  What is Load Balancer and why is it needed? Layer 4 vs Layer 7 Load Balancing.
  Algorithms: Round Robin, Least Connections, IP Hash, Weighted. Reverse Proxy
  vs Load Balancer. Health Checks. Active-Active vs Active-Passive. Hands-on
  with HAProxy and Nginx.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 'Part 2: Infrastructure Components'
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 'System Architecture: From Zero to Hero'
  slug: system-architecture-from-zero-to-hero
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1194" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1194)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1066" cy="288" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1032" cy="114" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="998" cy="200" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="964" cy="286" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="112" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="168" x2="1100" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="198" x2="1050" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="955.2390923627308,96.5 955.2390923627308,139.5 918,161 880.7609076372692,139.5 880.7609076372692,96.50000000000001 918,75" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ Architecture — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 5: Load Balancer - Smooth load distribution</tspan>
      <tspan x="60" dy="42">Minh</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">System Architecture: From Zero to Hero</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Infrastructure Components</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

## Introduction

When the system has more than one server, you need **Load Balancer** — the component that distributes traffic to the servers. This is the most important building block in high-availability architecture.

---

## 1. What is Load Balancer?

### 1.1 Problem

```
Không có Load Balancer:
  1M users ──────► 1 Server (quá tải → crash!)

Có Load Balancer:
  1M users ──► Load Balancer ──► Server 1 (333K users)
                              ──► Server 2 (333K users)
                              ──► Server 3 (333K users)
```

### 1.2 Benefits

| Benefits | Description |
|--------|--------|
| **Distribute load** | Divide traffic equally between servers |
| **High availability** | Server fails → traffic moves to another server |
| **SSL termination** | Decrypt HTTPS at LB, backend uses HTTP |
| **Health checks** | Automatically eliminate unhealthy servers |
| **Session persistence** | Send the same user to the same server |
| **DDoS mitigation** | Absorb and filter malicious traffic |

---

## 2. Layer 4 vs Layer 7 Load Balancing

### 2.1 Layer 4 (Transport Layer)

```
Client ──► LB (nhìn IP + Port) ──► Backend Server

LB quyết định dựa trên:
  - Source IP/Port
  - Destination IP/Port
  - TCP/UDP protocol

KHÔNG nhìn vào nội dung request (URL, headers, cookies)
```

**Advantages:** Fast (no content parsing), simple
**Disadvantages:** Cannot route based on URL/content

### 2.2 Layer 7 (Application Layer)

```
Client ──► LB (nhìn URL, headers, cookies) ──► Backend Server

LB quyết định dựa trên:
  - URL path: /api/* → API servers, /static/* → CDN
  - Host header: api.xdev.asia → API, web.xdev.asia → Web
  - Cookie/Session: user_type=premium → Premium servers
  - HTTP method: GET → Read servers, POST → Write servers
```

**Advantages:** Smart routing, content-based decisions
**Disadvantages:** Slower than L4 (must parse request), more complicated

### 2.3 When to use what?

```
Layer 4: TCP/UDP load balancing, database connections, gaming
Layer 7: HTTP-based services, microservices routing, A/B testing
```

---

## 3. Load Balancing Algorithm

### 3.1 Round Robin

```
Request 1 → Server A
Request 2 → Server B
Request 3 → Server C
Request 4 → Server A  (lặp lại)
```

**Advantages:** Simple, evenly distributed
**Disadvantages:** Does not take into account different server capacities

### 3.2 Weighted Round Robin

```
Server A (weight=5): Nhận 5 requests
Server B (weight=3): Nhận 3 requests
Server C (weight=2): Nhận 2 requests
→ 10 requests = A:5, B:3, C:2
```

### 3.3 Least Connections

```
Server A: 10 active connections
Server B: 5 active connections   ← Request mới đến đây
Server C: 8 active connections
```

**Best for:** Long-lived connections (WebSocket, database connections)

### 3.4 IP Hash

```
hash(client_ip) % num_servers = target_server

Client 1.2.3.4 → hash → Server A (luôn luôn)
Client 5.6.7.8 → hash → Server B (luôn luôn)
```

**Best for:** Session persistence (no sticky session config required)

### 3.5 Least Response Time

```
Server A: avg response 50ms
Server B: avg response 80ms
Server C: avg response 30ms  ← Request mới đến đây
```

### 3.6 Compare

| Algorithm | Best for | Disadvantages |
|-----------|---------|-----------|
| Round Robin | Equal servers | Ignores server load |
| Weighted RR | Different capacities | Static weights |
| Least Conn | Long-lived connections | Overhead tracking |
| IP Hash | Session persistence | Uneven distribution |
| Least Response | Optimize latency | Overhead measuring |

---

## 4. Health Checks

### 4.1 Passive Health Checks

```
LB monitor responses từ backend:
  Server A: 200 OK → Healthy ✓
  Server A: 200 OK → Healthy ✓
  Server A: 502 Bad Gateway → Strike 1
  Server A: Connection timeout → Strike 2
  Server A: Connection refused → Strike 3 → UNHEALTHY ✗

→ Loại Server A khỏi pool
→ Kiểm tra lại sau 30 giây
```

### 4.2 Active Health Checks

```
LB gửi health check request định kỳ:

Every 10s: GET /health → Server A
           Response: { "status": "ok", "db": "ok", "redis": "ok" }
           → Healthy ✓

Every 10s: GET /health → Server B
           Response: { "status": "degraded", "db": "slow" }
           → Unhealthy ✗ → Loại khỏi pool
```

### 4.3 Health Check Endpoint Example

```python
# Flask health check endpoint
@app.route('/health')
def health_check():
    checks = {
        'database': check_database(),
        'redis': check_redis(),
        'disk_space': check_disk_space(),
    }

    all_healthy = all(checks.values())
    status_code = 200 if all_healthy else 503

    return jsonify({
        'status': 'healthy' if all_healthy else 'unhealthy',
        'checks': checks,
        'timestamp': datetime.utcnow().isoformat()
    }), status_code
```

---

## 5. Load Balancer Deployment Patterns

### 5.1 Single LB (Basic)

```
Client ──► LB ──► Server 1
               ──► Server 2
               ──► Server 3

⚠️ LB là Single Point of Failure
```

### 5.2 Active-Passive LB

```
Client ──► Active LB ──► Server 1
           (VIP)      ──► Server 2
                       ──► Server 3
           Passive LB (standby)
           │ heartbeat │

Nếu Active LB fail:
  Passive LB lên nhận VIP → trở thành Active
```

### 5.3 Active-Active LB

```
             ┌──► Active LB 1 ──► Server 1, 2, 3
DNS ────────►│
             └──► Active LB 2 ──► Server 1, 2, 3

Cả 2 LB đều xử lý traffic
```

---

## 6. Reverse Proxy vs Load Balancer

| Features | Reverse Proxy | Load Balancer |
|--------|--------------|---------------|
| **Main function** | Protect backend servers | Load distribution |
| **Number of backends** | There can be only 1 | Usually >= 2 |
| **SSL termination** | ✓ | ✓ |
| **Caching** | ✓ | Limitations |
| **Compression** | ✓ | Limitations |
| **Security** | WAF, rate limiting | Basic |

> In practice, Nginx and HAProxy play **both roles** at the same time.

---

## 7. Hands-on: Nginx Load Balancer

```nginx
# /etc/nginx/conf.d/loadbalancer.conf

upstream backend_servers {
    # Thuật toán: Least Connections
    least_conn;

    server 10.0.1.1:8080 weight=5;
    server 10.0.1.2:8080 weight=3;
    server 10.0.1.3:8080 weight=2;

    # Backup server (chỉ dùng khi tất cả fail)
    server 10.0.1.4:8080 backup;
}

server {
    listen 80;
    server_name api.xdev.asia;

    location / {
        proxy_pass http://backend_servers;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Health check
        proxy_connect_timeout 5s;
        proxy_read_timeout 30s;
        proxy_next_upstream error timeout http_502 http_503;
    }

    # Health endpoint cho LB
    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
}
```

---

## 8. Cloud Load Balancers

| Cloud Provider | L4 LB | L7 LB | Global LB |
|-----------|-------|-------|-----------|
| **AWS** | NLB | ALB | Global Accelerator |
| **GCP** | TCP/UDP LB | HTTP(S) LB | Cloud CDN |
| **Azure** | Azure LB | App Gateway | Front Door |

---

## Summary

| Concepts | Key Takeaway |
|--------|-------------|
| Load Balancer | Distribute traffic, increase availability |
| L4 vs L7 | L4 is fast, L7 is smart |
| Algorithm | Simple Round Robin, Least Conn for long connections |
| Health Checks | Active + Passive, automatic error server type |
| HA Setup | Active-Passive or Active-Active LB |

---

## Exercises

1. **Config Nginx:** Write Nginx config for 4 backend servers, using weighted round robin, 2 servers weight=3, 2 servers weight=1. Add health check.

2. **Architecture:** Design load balancing for applications with: API servers (fast processing), WebSocket servers (long connections), static files. Choose L4/L7 and algorithm for each.

3. **HA Design:** Currently the system has 1 Nginx LB, 3 app servers. Redesign so there is no single point of failure.
