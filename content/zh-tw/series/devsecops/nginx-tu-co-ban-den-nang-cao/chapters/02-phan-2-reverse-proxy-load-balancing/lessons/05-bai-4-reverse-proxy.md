---
id: 019c9617-fc7d-736e-82ed-b2436e5de5d4
title: '第4課：反向代理'
slug: bai-4-reverse-proxy
description: >-
  本課程介紹 Nginx 中的反向代理——概念、proxy_pass 設定、代理標頭、上游伺服器與健康檢查。
  指導如何將 Nginx 設定為 Node.js、Python、PHP 等後端應用程式的反向代理。
  包含最佳實踐與疑難排解。
duration_minutes: 185
is_free: true
video_url: null
sort_order: 4
section_title: "第2部分：反向代理與負載均衡"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx 從基礎到進階
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8792" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8792)"/>

  <!-- Decorations -->
  <g>
    <circle cx="697" cy="41" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="794" cy="218" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="891" cy="135" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="988" cy="52" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="1085" cy="229" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="131" x2="1100" y2="211" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="161" x2="1050" y2="231" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1053.5166604983954,218 1053.5166604983954,244 1031,257 1008.4833395016046,244 1008.4833395016046,218 1031,205" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="148" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — 第4課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第4課：反向代理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx 從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第2部分：反向代理與負載均衡</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-kh%C3%A1i-ni%E1%BB%87m-reverse-proxy"><strong>1. 反向代理的概念</strong></h2><h3 id="11-reverse-proxy-l%C3%A0-g%C3%AC"><strong>1.1. 什麼是反向代理？</strong></h3><p><strong>反向代理</strong>是位於客戶端與後端伺服器之間的伺服器，負責接收客戶端的請求，將其轉發給後端伺服器，再將回應回傳給客戶端。</p><p><strong>差異說明：</strong></p><pre><code>正向代理（客戶端側）：
Client → Forward Proxy → Internet → Server
（隱藏客戶端）

反向代理（伺服器側）：
Client → Reverse Proxy → Backend Server
（隱藏伺服器）
</code></pre><p><strong>示意圖：</strong></p><pre><code>┌─────────┐         ┌──────────────┐         ┌──────────────┐
│         │         │              │         │              │
│ Client  │────────▶│    Nginx     │────────▶│   Backend    │
│         │         │ Reverse Proxy│         │   Server     │
│         │◀────────│              │◀────────│              │
└─────────┘         └──────────────┘         └──────────────┘
</code></pre><h3 id="12-t%E1%BA%A1i-sao-d%C3%B9ng-reverse-proxy"><strong>1.2. 為何使用反向代理？</strong></h3><p><strong>1. 負載均衡：</strong></p><ul><li>將流量分散到多個後端伺服器</li><li>提升處理能力與可靠性</li></ul><p><strong>2. SSL/TLS 終止：</strong></p><ul><li>Nginx 處理 SSL 加密/解密</li><li>後端伺服器無需處理 HTTPS</li></ul><p><strong>3. 快取：</strong></p><ul><li>快取靜態內容與 API 回應</li><li>降低後端伺服器負載</li></ul><p><strong>4. 安全性：</strong></p><ul><li>隱藏後端伺服器基礎架構</li><li>保護層（速率限制、防火牆）</li><li>集中式驗證</li></ul><p><strong>5. 壓縮：</strong></p><ul><li>對回應進行 Gzip 壓縮</li><li>減少頻寬使用量</li></ul><p><strong>6. 靜態檔案服務：</strong></p><ul><li>Nginx 直接提供靜態檔案</li><li>後端僅處理動態內容</li></ul><p><strong>7. 多個後端：</strong></p><ul><li>將請求路由到不同應用程式</li><li>微服務架構</li></ul><h3 id="13-use-cases-ph%E1%BB%95-bi%E1%BA%BFn"><strong>1.3. 常見應用場景</strong></h3><pre><code>1. 單頁應用程式（SPA）：
   /          → React/Vue/Angular app
   /api/*     → 後端 API 伺服器

2. 微服務：
   /users/*   → 使用者服務
   /orders/*  → 訂單服務
   /payments/* → 付款服務

3. 多個應用程式：
   site.com       → 主網站
   blog.site.com  → WordPress 部落格
   api.site.com   → API 伺服器

4. 舊版 + 新版：
   /old/*     → 舊版 PHP 應用程式
   /new/*     → 新版 Node.js 應用程式
</code></pre><hr><h2 id="2-c%E1%BA%A5u-h%C3%ACnh-proxypass-c%C6%A1-b%E1%BA%A3n"><strong>2. 基本 proxy_pass 設定</strong></h2><h3 id="21-c%C3%BA-ph%C3%A1p-proxypass"><strong>2.1. proxy_pass 語法</strong></h3><pre><code class="language-nginx">location /path/ {
    proxy_pass http://backend_server;
}
</code></pre><p><strong>簡單範例：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    location / {
        # 將所有請求轉發到後端
        proxy_pass http://localhost:3000;
    }
}
</code></pre><h3 id="22-proxypass-v%E1%BB%9Bi-uri"><strong>2.2. proxy_pass 與 URI</strong></h3><p><strong>方式1：無尾部斜線</strong></p><pre><code class="language-nginx">location /api {
    proxy_pass http://localhost:3000;
}

# 請求：/api/users
# 代理至：http://localhost:3000/api/users
# （保留 /api 前綴）
</code></pre><p><strong>方式2：有尾部斜線</strong></p><pre><code class="language-nginx">location /api/ {
    proxy_pass http://localhost:3000/;
}

# 請求：/api/users
# 代理至：http://localhost:3000/users
# （移除 /api 前綴）
</code></pre><p><strong>方式3：指定特定路徑</strong></p><pre><code class="language-nginx">location /api/ {
    proxy_pass http://localhost:3000/v1/;
}

# 請求：/api/users
# 代理至：http://localhost:3000/v1/users
# （以 /v1 取代 /api）
</code></pre><p><strong>詳細範例：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    # 代理根路徑
    location / {
        proxy_pass http://localhost:3000;
    }

    # 代理 API（移除 /api 前綴）
    location /api/ {
        proxy_pass http://localhost:4000/;
    }

    # 代理 admin（保留 /admin 前綴）
    location /admin {
        proxy_pass http://localhost:5000;
    }

    # 精確比對代理
    location = /health {
        proxy_pass http://localhost:3000/healthcheck;
    }
}
</code></pre><h3 id="23-proxy-multiple-backends"><strong>2.3. 多後端代理</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    # 前端 SPA
    location / {
        root /var/www/html;
        try_files $uri $uri/ /index.html;
    }

    # API 後端
    location /api/ {
        proxy_pass http://localhost:3000/;
    }

    # 驗證服務
    location /auth/ {
        proxy_pass http://localhost:4000/;
    }

    # WebSocket 伺服器
    location /ws/ {
        proxy_pass http://localhost:5000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # 靜態資源（CDN）
    location /static/ {
        proxy_pass http://cdn.example.com/;
    }
}
</code></pre><h3 id="24-proxy-v%E1%BB%9Bi-variables"><strong>2.4. 使用變數的代理</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    # 根據子網域代理
    location / {
        proxy_pass http://$http_host$request_uri;
    }

    # 使用自訂變數的代理
    set $backend "localhost:3000";
    location /api/ {
        proxy_pass http://$backend/;
    }

    # 條件代理
    location /dynamic/ {
        if ($arg_version = "v2") {
            proxy_pass http://localhost:4000/;
        }
        proxy_pass http://localhost:3000/;
    }
}
</code></pre><h3 id="25-proxy-timeouts"><strong>2.5. 代理逾時設定</strong></h3><pre><code class="language-nginx">location /api/ {
    proxy_pass http://localhost:3000/;
    
    # 逾時設定
    proxy_connect_timeout 60s;      # 連線到上游的逾時
    proxy_send_timeout 60s;         # 發送請求的逾時
    proxy_read_timeout 60s;         # 讀取回應的逾時
    
    # 緩衝區設定
    proxy_buffering on;
    proxy_buffer_size 4k;
    proxy_buffers 8 4k;
    proxy_busy_buffers_size 8k;
}
</code></pre><hr><h2 id="3-proxy-headers"><strong>3. 代理標頭</strong></h2><p>標頭對於讓後端伺服器了解原始請求資訊非常重要。</p><h3 id="31-essential-proxy-headers"><strong>3.1. 必要的代理標頭</strong></h3><pre><code class="language-nginx">location / {
    proxy_pass http://localhost:3000;
    
    # Host 標頭
    proxy_set_header Host $host;
    
    # 客戶端真實 IP
    proxy_set_header X-Real-IP $remote_addr;
    
    # 代理鏈
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
    # 協定（http/https）
    proxy_set_header X-Forwarded-Proto $scheme;
    
    # 原始主機
    proxy_set_header X-Forwarded-Host $host;
    
    # 連接埠
    proxy_set_header X-Forwarded-Port $server_port;
}
</code></pre><h3 id="32-header-explanations"><strong>3.2. 標頭說明</strong></h3><p><strong>Host：</strong></p><pre><code class="language-nginx">proxy_set_header Host $host;

# $host = 請求中的網域名稱
# 範例：example.com
# 後端收到：Host: example.com
</code></pre><p><strong>X-Real-IP：</strong></p><pre><code class="language-nginx">proxy_set_header X-Real-IP $remote_addr;

# $remote_addr = 直接連線到 Nginx 的客戶端 IP
# 範例：192.168.1.100
# 後端收到：X-Real-IP: 192.168.1.100
</code></pre><p><strong>X-Forwarded-For：</strong></p><pre><code class="language-nginx">proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

# 將客戶端 IP 附加到現有的 X-Forwarded-For 標頭
# 範例：
# 請求1：Client → Nginx → Backend
# X-Forwarded-For: 192.168.1.100

# 請求2：Client → CDN → Nginx → Backend
# X-Forwarded-For: 192.168.1.100, 10.0.0.50

# $proxy_add_x_forwarded_for 保留代理鏈
</code></pre><p><strong>X-Forwarded-Proto：</strong></p><pre><code class="language-nginx">proxy_set_header X-Forwarded-Proto $scheme;

# $scheme = http 或 https
# 後端可知道原始請求是 HTTP 還是 HTTPS
# 對重新導向邏輯很重要
</code></pre><h3 id="33-complete-header-configuration"><strong>3.3. 完整標頭設定</strong></h3><pre><code class="language-nginx">http {
    # 定義標頭範本
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-Port $server_port;
    
    server {
        listen 80;
        server_name example.com;
        
        location / {
            proxy_pass http://localhost:3000;
            # 繼承 http context 的標頭
        }
    }
}
</code></pre><h3 id="34-custom-headers"><strong>3.4. 自訂標頭</strong></h3><pre><code class="language-nginx">location /api/ {
    proxy_pass http://localhost:3000/;
    
    # 標準標頭
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    
    # 自訂標頭
    proxy_set_header X-Request-ID $request_id;
    proxy_set_header X-Server-Name $hostname;
    proxy_set_header X-Forwarded-User $remote_user;
    
    # 移除標頭
    proxy_set_header Authorization "";  # 移除驗證標頭
    
    # 新增自訂值
    proxy_set_header X-API-Version "v1";
    proxy_set_header X-Environment "production";
}
</code></pre><h3 id="35-headers-cho-websocket"><strong>3.5. WebSocket 標頭</strong></h3><pre><code class="language-nginx">location /ws/ {
    proxy_pass http://localhost:3000/;
    
    # WebSocket 專用標頭
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    
    # 標準標頭
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
    # WebSocket 逾時
    proxy_read_timeout 3600s;
    proxy_send_timeout 3600s;
}
</code></pre><h3 id="36-preserve-original-headers"><strong>3.6. 保留原始標頭</strong></h3><pre><code class="language-nginx">location / {
    proxy_pass http://localhost:3000;
    
    # 傳遞所有原始標頭
    proxy_pass_request_headers on;
    
    # 特定標頭
    proxy_set_header Accept-Encoding $http_accept_encoding;
    proxy_set_header Accept-Language $http_accept_language;
    proxy_set_header Cookie $http_cookie;
    proxy_set_header Referer $http_referer;
    proxy_set_header User-Agent $http_user_agent;
}
</code></pre><h3 id="37-security-headers"><strong>3.7. 安全標頭</strong></h3><pre><code class="language-nginx">location / {
    proxy_pass http://localhost:3000;
    
    # 標準代理標頭
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
    # 隱藏 Nginx 版本
    proxy_hide_header X-Powered-By;
    proxy_hide_header Server;
    
    # 新增安全標頭
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
</code></pre><hr><h2 id="4-upstream-servers-v%C3%A0-load-balancing"><strong>4. 上游伺服器與負載均衡</strong></h2><h3 id="41-upstream-block-c%C6%A1-b%E1%BA%A3n"><strong>4.1. 基本 Upstream 區塊</strong></h3><pre><code class="language-nginx"># 定義 upstream
upstream backend {
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

server {
    listen 80;
    server_name example.com;
    
    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
</code></pre><h3 id="42-load-balancing-methods"><strong>4.2. 負載均衡方法</strong></h3><p><strong>1. 輪詢（預設）：</strong></p><pre><code class="language-nginx">upstream backend {
    # 輪詢：依序分配給每台伺服器
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# 請求1 → 3000
# 請求2 → 3001
# 請求3 → 3002
# 請求4 → 3000（循環）
</code></pre><p><strong>2. 最少連線：</strong></p><pre><code class="language-nginx">upstream backend {
    least_conn;  # 連線數最少的伺服器
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# 適合長連線
# 均勻分散負載
</code></pre><p><strong>3. IP 雜湊（黏性會話）：</strong></p><pre><code class="language-nginx">upstream backend {
    ip_hash;  # 相同客戶端 → 相同伺服器
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# 客戶端 192.168.1.100 → 始終路由到伺服器 3000
# 客戶端 192.168.1.101 → 始終路由到伺服器 3001
# 適合基於 Session 的應用程式
</code></pre><p><strong>4. 通用雜湊：</strong></p><pre><code class="language-nginx">upstream backend {
    hash $request_uri consistent;  # 按 URI 雜湊
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# 相同 URI → 相同伺服器
# 適合快取
</code></pre><p><strong>5. 隨機：</strong></p><pre><code class="language-nginx">upstream backend {
    random;  # 隨機選擇伺服器
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}
</code></pre><h3 id="43-server-weights"><strong>4.3. 伺服器權重</strong></h3><pre><code class="language-nginx">upstream backend {
    # 權重較高的伺服器接收更多請求
    server localhost:3000 weight=3;  # 60% 流量
    server localhost:3001 weight=1;  # 20% 流量
    server localhost:3002 weight=1;  # 20% 流量
}

# 總權重 = 5
# 伺服器 3000：3/5 = 60%
# 伺服器 3001：1/5 = 20%
# 伺服器 3002：1/5 = 20%
</code></pre><p><strong>權重使用場景：</strong></p><pre><code class="language-nginx">upstream backend {
    # 正式環境伺服器
    server prod1.example.com weight=5;
    server prod2.example.com weight=5;
    
    # 金絲雀部署 - 10% 流量
    server canary.example.com weight=1;
}
</code></pre><h3 id="44-backup-servers"><strong>4.4. 備援伺服器</strong></h3><pre><code class="language-nginx">upstream backend {
    server localhost:3000;
    server localhost:3001;
    server localhost:3002 backup;  # 僅在主要伺服器故障時使用
}

# 3002 只有在 3000 和 3001 都無法使用時才接收流量
</code></pre><h3 id="45-server-parameters"><strong>4.5. 伺服器參數</strong></h3><pre><code class="language-nginx">upstream backend {
    server localhost:3000 weight=5 max_fails=3 fail_timeout=30s;
    server localhost:3001 weight=5 max_fails=3 fail_timeout=30s;
    server localhost:3002 backup;
    server localhost:3003 down;  # 暫時停用
}

# 參數說明：
# weight=N         - 權重（預設 1）
# max_fails=N      - 標記為故障前的失敗次數（預設 1）
# fail_timeout=T   - 逾時持續時間（預設 10s）
# backup           - 備援伺服器
# down             - 暫時停用
</code></pre><h3 id="46-advanced-upstream-configuration"><strong>4.6. 進階 Upstream 設定</strong></h3><pre><code class="language-nginx">upstream backend {
    least_conn;  # 負載均衡方法
    
    # 伺服器設定
    server srv1.example.com:8080 weight=3 max_fails=2 fail_timeout=30s;
    server srv2.example.com:8080 weight=3 max_fails=2 fail_timeout=30s;
    server srv3.example.com:8080 weight=2 max_fails=2 fail_timeout=30s;
    server srv4.example.com:8080 backup;
    
    # 保持連線
    keepalive 32;  # 保持 32 個閒置連線到上游
    keepalive_timeout 60s;
    keepalive_requests 100;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        
        # 保持連線所需的 HTTP 版本
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        # 標準標頭
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
</code></pre><h3 id="47-multiple-upstreams"><strong>4.7. 多個 Upstream</strong></h3><pre><code class="language-nginx"># API 後端
upstream api_backend {
    least_conn;
    server api1.example.com:3000;
    server api2.example.com:3000;
    server api3.example.com:3000;
}

# 驗證服務
upstream auth_backend {
    server auth1.example.com:4000;
    server auth2.example.com:4000;
}

# WebSocket 服務
upstream websocket_backend {
    ip_hash;  # WebSocket 的黏性會話
    server ws1.example.com:5000;
    server ws2.example.com:5000;
}

server {
    listen 80;
    server_name example.com;
    
    location /api/ {
        proxy_pass http://api_backend/;
    }
    
    location /auth/ {
        proxy_pass http://auth_backend/;
    }
    
    location /ws/ {
        proxy_pass http://websocket_backend/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
</code></pre><hr><h2 id="5-health-checks-c%C6%A1-b%E1%BA%A3n"><strong>5. 基本健康檢查</strong></h2><h3 id="51-passive-health-checks"><strong>5.1. 被動健康檢查</strong></h3><p>Nginx 根據伺服器的回應自動偵測故障的伺服器。</p><pre><code class="language-nginx">upstream backend {
    server localhost:3000 max_fails=3 fail_timeout=30s;
    server localhost:3001 max_fails=3 fail_timeout=30s;
    server localhost:3002 max_fails=3 fail_timeout=30s;
}

# max_fails=3：連續失敗 3 次後
# fail_timeout=30s：伺服器標記為停機 30 秒
# 30 秒後，Nginx 重試該伺服器
</code></pre><p><strong>運作方式：</strong></p><pre><code>1. 請求發送到 localhost:3000
2. 伺服器返回 502、503、504 或逾時 → 失敗次數 = 1
3. 下一個請求傳到 3000
4. 伺服器再次失敗 → 失敗次數 = 2
5. 下一個請求傳到 3000
6. 伺服器第三次失敗 → 失敗次數 = 3 → 伺服器標記為停機
7. 流量路由到 3001 和 3002
8. 30 秒後，Nginx 重試 3000
9. 若 3000 正常回應 → 失敗次數重置，伺服器上線
</code></pre><h3 id="52-active-health-checks-nginx-plus"><strong>5.2. 主動健康檢查（Nginx Plus）</strong></h3><p>Nginx Plus 支援主動健康檢查（開源版本不支援）。</p><pre><code class="language-nginx"># 僅 Nginx Plus
upstream backend {
    zone backend 64k;
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        health_check interval=5s fails=3 passes=2 uri=/health;
    }
}

# interval=5s：每 5 秒檢查一次
# fails=3：失敗 3 次後標記為停機
# passes=2：成功 2 次後標記為上線
# uri=/health：要檢查的端點
</code></pre><h3 id="53-custom-health-check-endpoint"><strong>5.3. 自訂健康檢查端點</strong></h3><p><strong>後端實作（Node.js 範例）：</strong></p><pre><code class="language-javascript">// health.js
const express = require('express');
const app = express();

app.get('/health', (req, res) =&gt; {
    // 檢查資料庫連線
    // 檢查相依服務
    // 檢查記憶體使用量等
    
    const health = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage()
    };
    
    res.status(200).json(health);
});

app.listen(3000);
</code></pre><p><strong>Nginx 設定：</strong></p><pre><code class="language-nginx">upstream backend {
    server localhost:3000 max_fails=3 fail_timeout=30s;
    server localhost:3001 max_fails=3 fail_timeout=30s;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
    
    # 健康檢查端點（非公開）
    location /health {
        access_log off;
        proxy_pass http://backend;
        
        # 僅允許本機存取
        allow 127.0.0.1;
        deny all;
    }
}
</code></pre><h3 id="54-external-health-checks"><strong>5.4. 外部健康檢查</strong></h3><p>使用外部腳本監控並更新上游設定。</p><p><strong>監控腳本：</strong></p><pre><code class="language-bash">#!/bin/bash
# health_check.sh

UPSTREAM_SERVERS=(
    "localhost:3000"
    "localhost:3001"
    "localhost:3002"
)

HEALTH_ENDPOINT="/health"

for server in "${UPSTREAM_SERVERS[@]}"; do
    response=$(curl -s -o /dev/null -w "%{http_code}" "http://$server$HEALTH_ENDPOINT")
    
    if [ "$response" = "200" ]; then
        echo "$(date) - $server 正常"
    else
        echo "$(date) - $server 停機（HTTP $response）"
        # 發送警報
        # 更新 upstream 設定
        # 重新載入 Nginx
    fi
done
</code></pre><p><strong>Crontab：</strong></p><pre><code class="language-bash"># 每分鐘執行健康檢查
* * * * * /usr/local/bin/health_check.sh &gt;&gt; /var/log/health_check.log 2&gt;&amp;1
</code></pre><h3 id="55-monitoring-v%E1%BB%9Bi-stub-status"><strong>5.5. 使用 Stub Status 監控</strong></h3><pre><code class="language-nginx">server {
    listen 8080;
    server_name localhost;
    
    location /nginx_status {
        stub_status;
        access_log off;
        allow 127.0.0.1;
        deny all;
    }
}
</code></pre><p><strong>查看狀態：</strong></p><pre><code class="language-bash">curl http://localhost:8080/nginx_status

# 輸出：
# Active connections: 291
# server accepts handled requests
#  16630948 16630948 31070465
# Reading: 6 Writing: 179 Waiting: 106
</code></pre><h3 id="56-health-check-v%E1%BB%9Bi-scripts"><strong>5.6. 使用腳本進行健康檢查</strong></h3><p><strong>Python 健康檢查：</strong></p><pre><code class="language-python">#!/usr/bin/env python3
# health_monitor.py

import requests
import time
import smtplib
from email.message import EmailMessage

BACKENDS = [
    'http://localhost:3000/health',
    'http://localhost:3001/health',
    'http://localhost:3002/health',
]

def check_health(url):
    try:
        response = requests.get(url, timeout=5)
        return response.status_code == 200
    except:
        return False

def send_alert(backend, status):
    msg = EmailMessage()
    msg['Subject'] = f'後端警報：{backend}'
    msg['From'] = 'monitor@example.com'
    msg['To'] = 'admin@example.com'
    msg.set_content(f'後端 {backend} 狀態：{status}')
    
    with smtplib.SMTP('localhost') as s:
        s.send_message(msg)

def main():
    while True:
        for backend in BACKENDS:
            if not check_health(backend):
                print(f'{backend} 停機')
                send_alert(backend, '停機')
            else:
                print(f'{backend} 正常')
        
        time.sleep(60)  # 每分鐘檢查一次

if __name__ == '__main__':
    main()
</code></pre><hr><h2 id="6-v%C3%AD-d%E1%BB%A5-th%E1%BB%B1c-t%E1%BA%BF"><strong>6. 實際應用範例</strong></h2><h3 id="61-nodejs-application"><strong>6.1. Node.js 應用程式</strong></h3><p><strong>後端（app.js）：</strong></p><pre><code class="language-javascript">const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =&gt; {
    res.json({
        message: 'Hello from Node.js',
        server: `localhost:${PORT}`,
        headers: req.headers
    });
});

app.get('/api/users', (req, res) =&gt; {
    res.json([
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' }
    ]);
});

app.get('/health', (req, res) =&gt; {
    res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () =&gt; {
    console.log(`Server running on port ${PORT}`);
});
</code></pre><p><strong>Nginx 設定：</strong></p><pre><code class="language-nginx">upstream nodejs_backend {
    least_conn;
    server localhost:3000 max_fails=3 fail_timeout=30s;
    server localhost:3001 max_fails=3 fail_timeout=30s;
    server localhost:3002 max_fails=3 fail_timeout=30s;
    keepalive 32;
}

server {
    listen 80;
    server_name api.example.com;
    
    access_log /var/log/nginx/nodejs.access.log;
    error_log /var/log/nginx/nodejs.error.log;
    
    location / {
        proxy_pass http://nodejs_backend;
        
        # HTTP 版本
        proxy_http_version 1.1;
        
        # 標頭
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Connection "";
        
        # 逾時
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        # 緩衝
        proxy_buffering on;
        proxy_buffer_size 4k;
        proxy_buffers 8 4k;
    }
    
    location /health {
        access_log off;
        proxy_pass http://nodejs_backend/health;
    }
}
</code></pre><h3 id="62-python-flaskdjango-application"><strong>6.2. Python Flask/Django 應用程式</strong></h3><p><strong>後端（app.py）：</strong></p><pre><code class="language-python">from flask import Flask, jsonify, request
import os

app = Flask(__name__)
PORT = int(os.environ.get('PORT', 5000))

@app.route('/')
def home():
    return jsonify({
        'message': 'Hello from Python',
        'server': f'localhost:{PORT}',
        'headers': dict(request.headers)
    })

@app.route('/api/data')
def get_data():
    return jsonify([
        {'id': 1, 'value': 'Data 1'},
        {'id': 2, 'value': 'Data 2'}
    ])

@app.route('/health')
def health():
    return jsonify({'status': 'ok'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT)
</code></pre><p><strong>Nginx 設定：</strong></p><pre><code class="language-nginx">upstream python_backend {
    server localhost:5000;
    server localhost:5001;
    server localhost:5002;
}

server {
    listen 80;
    server_name python.example.com;
    
    client_max_body_size 10M;
    
    location / {
        proxy_pass http://python_backend;
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Python 應用程式可能較慢
        proxy_read_timeout 300s;
        proxy_connect_timeout 300s;
        proxy_send_timeout 300s;
    }
}
</code></pre><h3 id="63-php-application-v%E1%BB%9Bi-php-fpm"><strong>6.3. PHP 應用程式與 PHP-FPM</strong></h3><p><strong>Nginx 設定：</strong></p><pre><code class="language-nginx">upstream php_backend {
    server unix:/var/run/php/php8.1-fpm.sock;
    # 或
    # server localhost:9000;
}

server {
    listen 80;
    server_name php.example.com;
    root /var/www/php;
    index index.php index.html;
    
    location / {
        try_files $uri $uri/ /index.php?$args;
    }
    
    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_pass php_backend;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        
        # 標頭
        fastcgi_param HTTP_X_REAL_IP $remote_addr;
        fastcgi_param HTTP_X_FORWARDED_FOR $proxy_add_x_forwarded_for;
        fastcgi_param HTTP_X_FORWARDED_PROTO $scheme;
    }
    
    location ~ /\.ht {
        deny all;
    }
}
</code></pre><h3 id="64-microservices-architecture"><strong>6.4. 微服務架構</strong></h3><pre><code class="language-nginx"># 使用者服務
upstream user_service {
    server user1.internal:8001;
    server user2.internal:8001;
}

# 訂單服務
upstream order_service {
    server order1.internal:8002;
    server order2.internal:8002;
}

# 付款服務
upstream payment_service {
    server payment1.internal:8003;
    server payment2.internal:8003;
}

# 產品服務
upstream product_service {
    server product1.internal:8004;
    server product2.internal:8004;
}

server {
    listen 80;
    server_name api.example.com;
    
    # 共用標頭
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Request-ID $request_id;
    
    location /api/users/ {
        proxy_pass http://user_service/;
    }
    
    location /api/orders/ {
        proxy_pass http://order_service/;
    }
    
    location /api/payments/ {
        proxy_pass http://payment_service/;
    }
    
    location /api/products/ {
        proxy_pass http://product_service/;
    }
}
</code></pre><hr><h2 id="7-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>7. 練習題</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-basic-reverse-proxy"><strong>練習1：基本反向代理</strong></h3><ol><li>建立一個簡單的 Node.js/Python 伺服器，監聽連接埠 3000</li><li>將 Nginx 設定為反向代理</li><li>測試並確認標頭是否正確傳遞</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-multiple-backends"><strong>練習2：多個後端</strong></h3><ol><li>在連接埠 3000、3001、3002 上各執行一個應用程式實例</li><li>設定採用輪詢的 upstream</li><li>測試負載均衡（查看日誌以確認請求分配情況）</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-3-sticky-sessions"><strong>練習3：黏性會話</strong></h3><ol><li>設定採用 ip_hash 的 upstream</li><li>測試相同客戶端是否始終連到同一後端</li><li>與輪詢進行比較</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-health-checks"><strong>練習4：健康檢查</strong></h3><ol><li>使用 max_fails 和 fail_timeout 設定被動健康檢查</li><li>停止一個後端伺服器</li><li>確認 Nginx 自動將流量路由到健康的伺服器</li><li>重新啟動伺服器並確認流量恢復正常</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-microservices"><strong>練習5：微服務</strong></h3><ol><li>建立 2-3 個簡單的 API（可使用模擬）</li><li>設定 Nginx 根據 URL 路徑路由請求：<ul><li><code>/api/users</code> → 使用者服務</li><li><code>/api/products</code> → 產品服務</li></ul></li><li>測試路由</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-6-websocket-proxy"><strong>練習6：WebSocket 代理</strong></h3><ol><li>建立一個簡單的 WebSocket 伺服器</li><li>將 Nginx 設定為 WebSocket 代理</li><li>測試連線與訊息傳遞</li></ol><hr><h2 id="8-troubleshooting"><strong>8. 疑難排解</strong></h2><h3 id="81-common-issues"><strong>8.1. 常見問題</strong></h3><p><strong>1. 502 Bad Gateway：</strong></p><pre><code class="language-bash"># 原因：後端未執行或無法連線
# 檢查後端
curl http://localhost:3000

# 查看 Nginx 錯誤日誌
sudo tail -f /var/log/nginx/error.log

# 檢查防火牆
sudo ufw status
</code></pre><p><strong>2. 504 Gateway Timeout：</strong></p><pre><code class="language-nginx"># 原因：後端回應時間過長
# 修正：增加逾時時間

location / {
    proxy_pass http://backend;
    proxy_read_timeout 300s;
    proxy_connect_timeout 300s;
}
</code></pre><p><strong>3. 標頭未傳遞：</strong></p><pre><code class="language-bash"># 在後端驗證標頭
# 記錄請求標頭

# Nginx 設定
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
</code></pre><p><strong>4. 大型上傳失敗：</strong></p><pre><code class="language-nginx"># 增加 client_max_body_size
http {
    client_max_body_size 100M;
}
</code></pre><p><strong>5. WebSocket 連線失敗：</strong></p><pre><code class="language-nginx"># 必須有 Upgrade 標頭
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
</code></pre><h3 id="82-debug-commands"><strong>8.2. 除錯指令</strong></h3><pre><code class="language-bash"># 測試上游連線
curl -v http://localhost:3000

# 檢查 Nginx 設定
sudo nginx -t

# 重新載入 Nginx
sudo systemctl reload nginx

# 即時監看錯誤日誌
sudo tail -f /var/log/nginx/error.log

# 查看上游狀態（需啟用 stub_status）
curl http://localhost/nginx_status

# 使用特定標頭測試
curl -H "Host: example.com" http://localhost

# 測試代理標頭
curl -H "X-Forwarded-For: 1.2.3.4" http://localhost
</code></pre><hr><h2 id="9-best-practices"><strong>9. 最佳實踐</strong></h2><h3 id="91-configuration"><strong>9.1. 設定</strong></h3><ol><li><strong>使用 upstream 區塊：</strong></li></ol><pre><code class="language-nginx"># 推薦
upstream backend {
    server localhost:3000;
}

# 不推薦（無故障轉移或負載均衡）
location / {
    proxy_pass http://localhost:3000;
}
</code></pre><ol start="2"><li><strong>設定適當的逾時：</strong></li></ol><pre><code class="language-nginx">proxy_connect_timeout 60s;
proxy_send_timeout 60s;
proxy_read_timeout 60s;
</code></pre><ol start="3"><li><strong>啟用 keepalive：</strong></li></ol><pre><code class="language-nginx">upstream backend {
    server localhost:3000;
    keepalive 32;
}

location / {
    proxy_http_version 1.1;
    proxy_set_header Connection "";
}
</code></pre><ol start="4"><li><strong>使用健康檢查：</strong></li></ol><pre><code class="language-nginx">server localhost:3000 max_fails=3 fail_timeout=30s;
</code></pre><h3 id="92-security"><strong>9.2. 安全性</strong></h3><ol><li><strong>不暴露內部架構：</strong></li></ol><pre><code class="language-nginx">proxy_hide_header X-Powered-By;
</code></pre><ol start="2"><li><strong>限制請求大小：</strong></li></ol><pre><code class="language-nginx">client_max_body_size 10M;
</code></pre><ol start="3"><li><strong>速率限制：</strong></li></ol><pre><code class="language-nginx">limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

location /api/ {
    limit_req zone=api burst=20;
}
</code></pre><h3 id="93-performance"><strong>9.3. 效能</strong></h3><ol><li><strong>緩衝區設定：</strong></li></ol><pre><code class="language-nginx">proxy_buffering on;
proxy_buffer_size 4k;
proxy_buffers 8 4k;
</code></pre><ol start="2"><li><strong>快取：</strong></li></ol><pre><code class="language-nginx">proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m;

location / {
    proxy_cache my_cache;
    proxy_cache_valid 200 10m;
}
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>總結</strong></h2><p>在本課中，您學到了：</p><ul><li>✅ 反向代理的概念與使用場景</li><li>✅ proxy_pass 設定與路由</li><li>✅ 代理標頭與 X-Forwarded 標頭</li><li>✅ 上游伺服器與負載均衡</li><li>✅ 健康檢查與監控</li><li>✅ Node.js、Python 和 PHP 的實際應用範例</li></ul><p><strong>下一課：</strong>我們將深入探討負載均衡——演算法、策略與進階設定。</p>
