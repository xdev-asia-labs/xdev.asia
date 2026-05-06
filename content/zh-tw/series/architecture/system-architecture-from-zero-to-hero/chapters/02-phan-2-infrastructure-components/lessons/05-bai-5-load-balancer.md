---
id: 019d8a21-c105-7001-d001-e1f2a3b4c505
title: 第 5 課：負載平衡器 - 智慧負載分配
slug: bai-5-load-balancer-phan-phoi-tai-thong-minh
description: >-
  什麼是負載平衡器以及為什麼需要它？第 4 層與第 7 層負載平衡。演算法：循環、最少連線、IP
  哈希、加權。反向代理與負載平衡器。健康檢查。主動-主動與主動-被動。親身實踐 HAProxy 和 Nginx。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：基礎設施組件
course:
  id: 019d8a21-c100-7001-d001-e1f2a3b4c5d6
  title: 系統架構：從零到英雄
  slug: system-architecture-from-zero-to-hero
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🏗️ 建築 — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：負載平衡器 - 平滑負載分配</tspan>
      <tspan x="60" dy="42">明</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">系統架構：從零到英雄</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：基礎設施組件</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

## 簡介

當系統有多於一台伺服器時，您需要**負載平衡器**－將流量分配到伺服器的元件。這是高可用性架構中最重要的建置區塊。

---

## 1.什麼是負載平衡器？

### 1.1 問題

```
Không có Load Balancer:
  1M users ──────► 1 Server (quá tải → crash!)

Có Load Balancer:
  1M users ──► Load Balancer ──► Server 1 (333K users)
                              ──► Server 2 (333K users)
                              ──► Server 3 (333K users)
```

### 1.2 好處

|好處 |描述 |
|--------|--------|
| **分配負載** |在伺服器之間平均分配流量 |
| **高可用性** |伺服器故障 → 流量轉移到另一台伺服器 |
| **SSL 終止** | LB 解密 HTTPS，後端使用 HTTP |
| **健康檢查** |自動消除不健康伺服器|
| **會話持續性** |將相同使用者傳送到同一伺服器|
| **DDoS 緩解** |吸收並過濾惡意流量 |

---

## 2. 第 4 層與第 7 層負載平衡

### 2.1 第 4 層（傳輸層）

```
Client ──► LB (nhìn IP + Port) ──► Backend Server

LB quyết định dựa trên:
  - Source IP/Port
  - Destination IP/Port
  - TCP/UDP protocol

KHÔNG nhìn vào nội dung request (URL, headers, cookies)
```

**優點：** 快速（無內容解析）、簡單
**缺點：**無法依照URL/內容進行路由

### 2.2 第 7 層（應用層）

```
Client ──► LB (nhìn URL, headers, cookies) ──► Backend Server

LB quyết định dựa trên:
  - URL path: /api/* → API servers, /static/* → CDN
  - Host header: api.xdev.asia → API, web.xdev.asia → Web
  - Cookie/Session: user_type=premium → Premium servers
  - HTTP method: GET → Read servers, POST → Write servers
```

**優點：** 智慧路由，內容為基礎的決策
**缺點：**比L4慢（必須解析請求），更複雜

### 2.3 什麼時候使用什麼？

```
Layer 4: TCP/UDP load balancing, database connections, gaming
Layer 7: HTTP-based services, microservices routing, A/B testing
```

---

## 3.負載平衡演算法

### 3.1 循環賽

```
Request 1 → Server A
Request 2 → Server B
Request 3 → Server C
Request 4 → Server A  (lặp lại)
```

**優點：**簡單，分佈均勻
**缺點：** 沒有考慮不同伺服器容量

### 3.2 加權循環賽

```
Server A (weight=5): Nhận 5 requests
Server B (weight=3): Nhận 3 requests
Server C (weight=2): Nhận 2 requests
→ 10 requests = A:5, B:3, C:2
```

### 3.3 最少連線數

```
Server A: 10 active connections
Server B: 5 active connections   ← Request mới đến đây
Server C: 8 active connections
```

**最適合：** 長期連線（WebSocket、資料庫連線）

### 3.4 IP 哈希

```
hash(client_ip) % num_servers = target_server

Client 1.2.3.4 → hash → Server A (luôn luôn)
Client 5.6.7.8 → hash → Server B (luôn luôn)
```

**最適合：** 會話持久性（不需要黏性會話配置）

### 3.5 最短回應時間

```
Server A: avg response 50ms
Server B: avg response 80ms
Server C: avg response 30ms  ← Request mới đến đây
```

### 3.6 比較

|演算法|最適合 |缺點 |
|------------|---------|------------|
|循環賽 |平等的伺服器|忽略伺服器負載 |
|加權RR |不同容量|靜態重量|
|至少康乃狄克州 |長期連線 |開銷追蹤 |
| IP 哈希 |會話保持 |分佈不均 |
|最小回應 |優化延遲 |架空測量|

---

## 4. 健康檢查

### 4.1 被動健康檢查

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

### 4.2 主動健康檢查

```
LB gửi health check request định kỳ:

Every 10s: GET /health → Server A
           Response: { "status": "ok", "db": "ok", "redis": "ok" }
           → Healthy ✓

Every 10s: GET /health → Server B
           Response: { "status": "degraded", "db": "slow" }
           → Unhealthy ✗ → Loại khỏi pool
```

### 4.3 健康檢查端點範例

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

## 5. 負載平衡器部署模式

### 5.1 單LB（基本）

```
Client ──► LB ──► Server 1
               ──► Server 2
               ──► Server 3

⚠️ LB là Single Point of Failure
```

### 5.2 主動-被動負載平衡

```
Client ──► Active LB ──► Server 1
           (VIP)      ──► Server 2
                       ──► Server 3
           Passive LB (standby)
           │ heartbeat │

Nếu Active LB fail:
  Passive LB lên nhận VIP → trở thành Active
```

### 5.3 雙活負載平衡

```
             ┌──► Active LB 1 ──► Server 1, 2, 3
DNS ────────►│
             └──► Active LB 2 ──► Server 1, 2, 3

Cả 2 LB đều xử lý traffic
```

---

## 6. 反向代理與負載平衡器

|特性|反向代理|負載平衡器|
|--------|--------------|----------------|
| **主要功能** |保護後端伺服器 |負載分佈|
| **後端數量** |只能有 1 |通常>= 2 |
| **SSL 終止** | ✓ | ✓ |
| **快取** | ✓ |限制 |
| **壓縮** | ✓ |限制 |
| **安全** | WAF、限速|基本 |

> 在實踐中，Nginx 和 HAProxy 同時扮演**兩個角色**。

---

## 7. 實作：Nginx 負載平衡器

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

## 8. 云负载均衡器

|雲端提供者| L4 LB | L7 LB |全球LB |
|------------|---------|--------|------------|
| **AWS** |國家圖書館 | ALB |全球加速器 |
| **GCP** | TCP/UDP LB | HTTP(S) 負載平衡 |雲端CDN |
| **天藍色** | Azure LB |應用閘道 |前門 |

---

## 總結

|概念 |重點 |
|--------|-------------|
|負載平衡器|分配流量，提高可用性 |
| L4 與 L7 | L4 快，L7 智能 |
|演算法|長連結的簡單循環法、最少康恩 |
|健康檢查 |主動+被動，自動出錯伺服器類型|
| HA 設定 |主動-被動或主動-主動負載平衡|

---

## 練習

1. **配置Nginx：** 為4台後端伺服器編寫Nginx配置，使用加權循環，2台伺服器權重=3，2台伺服器權重=1。添加健康检查。

2. **架構：** 為應用程式設計負載平衡：API 伺服器（快速處理）、WebSocket 伺服器（長連線）、靜態檔案。為每個選擇 L4/L7 和演算法。

3. **HA設計：** 目前系統有1個Nginx LB，3個應用伺服器。重新設計，確保不存在單點故障。
