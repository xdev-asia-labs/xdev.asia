---
id: 019d8a21-c105-7001-d001-e1f2a3b4c505
title: "Bài 5: Load Balancer - Phân phối tải thông minh"
slug: bai-5-load-balancer-phan-phoi-tai-thong-minh
description: >-
  Load Balancer là gì và tại sao cần thiết. Layer 4 vs Layer 7 Load
  Balancing. Các thuật toán: Round Robin, Least Connections, IP Hash,
  Weighted. Reverse Proxy vs Load Balancer. Health Checks. Active-Active
  vs Active-Passive. Hands-on với HAProxy và Nginx.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Các Thành Phần Hạ Tầng (Infrastructure Components)"
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: "System Architecture: From Zero to Hero"
  slug: system-architecture-from-zero-to-hero
---

## Giới thiệu

Khi hệ thống có nhiều hơn một server, bạn cần **Load Balancer** — thành phần phân phối traffic đến các servers. Đây là building block quan trọng nhất trong kiến trúc high-availability.

---

## 1. Load Balancer là gì?

### 1.1 Vấn đề

```
Không có Load Balancer:
  1M users ──────► 1 Server (quá tải → crash!)

Có Load Balancer:
  1M users ──► Load Balancer ──► Server 1 (333K users)
                              ──► Server 2 (333K users)
                              ──► Server 3 (333K users)
```

### 1.2 Lợi ích

| Lợi ích | Mô tả |
|---------|--------|
| **Distribute load** | Chia đều traffic cho servers |
| **High availability** | Server fail → traffic chuyển sang server khác |
| **SSL termination** | Decrypt HTTPS tại LB, backend dùng HTTP |
| **Health checks** | Tự động loại server unhealthy |
| **Session persistence** | Gửi cùng user về cùng server |
| **DDoS mitigation** | Absorb và filter malicious traffic |

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

**Ưu điểm:** Nhanh (không parse nội dung), đơn giản
**Nhược điểm:** Không thể route dựa trên URL/content

### 2.2 Layer 7 (Application Layer)

```
Client ──► LB (nhìn URL, headers, cookies) ──► Backend Server

LB quyết định dựa trên:
  - URL path: /api/* → API servers, /static/* → CDN
  - Host header: api.xdev.asia → API, web.xdev.asia → Web
  - Cookie/Session: user_type=premium → Premium servers
  - HTTP method: GET → Read servers, POST → Write servers
```

**Ưu điểm:** Routing thông minh, content-based decisions
**Nhược điểm:** Chậm hơn L4 (phải parse request), phức tạp hơn

### 2.3 Khi nào dùng gì?

```
Layer 4: TCP/UDP load balancing, database connections, gaming
Layer 7: HTTP-based services, microservices routing, A/B testing
```

---

## 3. Thuật toán Load Balancing

### 3.1 Round Robin

```
Request 1 → Server A
Request 2 → Server B
Request 3 → Server C
Request 4 → Server A  (lặp lại)
```

**Ưu điểm:** Đơn giản, phân phối đều
**Nhược điểm:** Không tính đến server capacity khác nhau

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

**Best for:** Session persistence (không cần sticky session config)

### 3.5 Least Response Time

```
Server A: avg response 50ms
Server B: avg response 80ms
Server C: avg response 30ms  ← Request mới đến đây
```

### 3.6 So sánh

| Algorithm | Best for | Nhược điểm |
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

| Feature | Reverse Proxy | Load Balancer |
|---------|--------------|---------------|
| **Chức năng chính** | Bảo vệ backend servers | Phân phối tải |
| **Số backend** | Có thể chỉ 1 | Thường >= 2 |
| **SSL termination** | ✓ | ✓ |
| **Caching** | ✓ | Hạn chế |
| **Compression** | ✓ | Hạn chế |
| **Security** | WAF, rate limiting | Basic |

> Trong thực tế, Nginx và HAProxy đóng **cả hai vai trò** cùng lúc.

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
|---------------|-------|-------|-----------|
| **AWS** | NLB | ALB | Global Accelerator |
| **GCP** | TCP/UDP LB | HTTP(S) LB | Cloud CDN |
| **Azure** | Azure LB | App Gateway | Front Door |

---

## Tổng kết

| Concept | Key Takeaway |
|---------|-------------|
| Load Balancer | Phân phối traffic, tăng availability |
| L4 vs L7 | L4 nhanh, L7 thông minh |
| Algorithm | Round Robin đơn giản, Least Conn cho long connections |
| Health Checks | Active + Passive, loại server lỗi tự động |
| HA Setup | Active-Passive hoặc Active-Active LB |

---

## Bài tập

1. **Config Nginx:** Viết Nginx config cho 4 backend servers, sử dụng weighted round robin, 2 servers weight=3, 2 servers weight=1. Thêm health check.

2. **Architecture:** Thiết kế load balancing cho ứng dụng có: API servers (xử lý nhanh), WebSocket servers (long connections), static files. Chọn L4/L7 và algorithm cho mỗi loại.

3. **HA Design:** Hiện tại hệ thống có 1 Nginx LB, 3 app servers. Thiết kế lại để không có single point of failure.
