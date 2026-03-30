---
id: 019c9617-fc7d-736e-82ed-b2436e5de5d4
title: 'Bài 4: Reverse Proxy'
slug: bai-4-reverse-proxy
description: >-
  Bài học về Reverse Proxy trong Nginx - khái niệm, cấu hình proxy_pass, proxy
  headers, upstream servers và health checks. Hướng dẫn setup Nginx làm reverse
  proxy cho backend applications như Node.js, Python, PHP. Bao gồm best
  practices và troubleshooting.
duration_minutes: 185
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: Reverse Proxy & Load Balancing"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx từ Cơ bản đến Nâng cao
  slug: nginx-tu-co-ban-den-nang-cao
---
<h2 id="1-kh%C3%A1i-ni%E1%BB%87m-reverse-proxy"><strong>1. Khái niệm Reverse Proxy</strong></h2><h3 id="11-reverse-proxy-l%C3%A0-g%C3%AC"><strong>1.1. Reverse Proxy là gì?</strong></h3><p><strong>Reverse proxy</strong> là một server đứng giữa clients và backend servers, nhận requests từ clients và forward đến backend servers, sau đó trả response về cho clients.</p><p><strong>Sự khác biệt:</strong></p><pre><code>Forward Proxy (Client-side):
Client → Forward Proxy → Internet → Server
(Ẩn danh client)

Reverse Proxy (Server-side):
Client → Reverse Proxy → Backend Server
(Ẩn danh server)
</code></pre><p><strong>Minh họa:</strong></p><pre><code>┌─────────┐         ┌──────────────┐         ┌──────────────┐
│         │         │              │         │              │
│ Client  │────────▶│    Nginx     │────────▶│   Backend    │
│         │         │ Reverse Proxy│         │   Server     │
│         │◀────────│              │◀────────│              │
└─────────┘         └──────────────┘         └──────────────┘
</code></pre><h3 id="12-t%E1%BA%A1i-sao-d%C3%B9ng-reverse-proxy"><strong>1.2. Tại sao dùng Reverse Proxy?</strong></h3><p><strong>1. Load Balancing:</strong></p><ul><li>Phân phối traffic đến nhiều backend servers</li><li>Tăng khả năng xử lý và độ tin cậy</li></ul><p><strong>2. SSL/TLS Termination:</strong></p><ul><li>Nginx xử lý SSL encryption/decryption</li><li>Backend servers không cần lo về HTTPS</li></ul><p><strong>3. Caching:</strong></p><ul><li>Cache static content và API responses</li><li>Giảm tải cho backend servers</li></ul><p><strong>4. Security:</strong></p><ul><li>Ẩn backend server infrastructure</li><li>Protection layer (rate limiting, firewall)</li><li>Centralized authentication</li></ul><p><strong>5. Compression:</strong></p><ul><li>Gzip compression cho responses</li><li>Giảm bandwidth usage</li></ul><p><strong>6. Static File Serving:</strong></p><ul><li>Nginx serve static files trực tiếp</li><li>Backend chỉ xử lý dynamic content</li></ul><p><strong>7. Multiple Backends:</strong></p><ul><li>Route requests đến different applications</li><li>Microservices architecture</li></ul><h3 id="13-use-cases-ph%E1%BB%95-bi%E1%BA%BFn"><strong>1.3. Use Cases phổ biến</strong></h3><pre><code>1. Single Page Applications (SPA):
   /          → React/Vue/Angular app
   /api/*     → Backend API server

2. Microservices:
   /users/*   → User service
   /orders/*  → Order service
   /payments/* → Payment service

3. Multiple Applications:
   site.com       → Main website
   blog.site.com  → WordPress blog
   api.site.com   → API server

4. Legacy + New:
   /old/*     → Legacy PHP application
   /new/*     → New Node.js application
</code></pre><hr><h2 id="2-c%E1%BA%A5u-h%C3%ACnh-proxypass-c%C6%A1-b%E1%BA%A3n"><strong>2. Cấu hình proxy_pass Cơ bản</strong></h2><h3 id="21-c%C3%BA-ph%C3%A1p-proxypass"><strong>2.1. Cú pháp proxy_pass</strong></h3><pre><code class="language-nginx">location /path/ {
    proxy_pass http://backend_server;
}
</code></pre><p><strong>Ví dụ đơn giản:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    location / {
        # Forward tất cả requests đến backend
        proxy_pass http://localhost:3000;
    }
}
</code></pre><h3 id="22-proxypass-v%E1%BB%9Bi-uri"><strong>2.2. Proxy_pass với URI</strong></h3><p><strong>Cách 1: Không có trailing slash</strong></p><pre><code class="language-nginx">location /api {
    proxy_pass http://localhost:3000;
}

# Request: /api/users
# Proxied to: http://localhost:3000/api/users
# (giữ nguyên /api)
</code></pre><p><strong>Cách 2: Có trailing slash</strong></p><pre><code class="language-nginx">location /api/ {
    proxy_pass http://localhost:3000/;
}

# Request: /api/users
# Proxied to: http://localhost:3000/users
# (bỏ /api)
</code></pre><p><strong>Cách 3: Với path cụ thể</strong></p><pre><code class="language-nginx">location /api/ {
    proxy_pass http://localhost:3000/v1/;
}

# Request: /api/users
# Proxied to: http://localhost:3000/v1/users
# (thay /api bằng /v1)
</code></pre><p><strong>Ví dụ chi tiết:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    # Proxy root
    location / {
        proxy_pass http://localhost:3000;
    }

    # Proxy API (bỏ /api prefix)
    location /api/ {
        proxy_pass http://localhost:4000/;
    }

    # Proxy admin (giữ /admin prefix)
    location /admin {
        proxy_pass http://localhost:5000;
    }

    # Proxy với exact match
    location = /health {
        proxy_pass http://localhost:3000/healthcheck;
    }
}
</code></pre><h3 id="23-proxy-multiple-backends"><strong>2.3. Proxy Multiple Backends</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    # Frontend SPA
    location / {
        root /var/www/html;
        try_files $uri $uri/ /index.html;
    }

    # API Backend
    location /api/ {
        proxy_pass http://localhost:3000/;
    }

    # Auth Service
    location /auth/ {
        proxy_pass http://localhost:4000/;
    }

    # WebSocket Server
    location /ws/ {
        proxy_pass http://localhost:5000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # Static Assets (CDN)
    location /static/ {
        proxy_pass http://cdn.example.com/;
    }
}
</code></pre><h3 id="24-proxy-v%E1%BB%9Bi-variables"><strong>2.4. Proxy với Variables</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    # Proxy dựa trên subdomain
    location / {
        proxy_pass http://$http_host$request_uri;
    }

    # Proxy với custom variable
    set $backend "localhost:3000";
    location /api/ {
        proxy_pass http://$backend/;
    }

    # Conditional proxy
    location /dynamic/ {
        if ($arg_version = "v2") {
            proxy_pass http://localhost:4000/;
        }
        proxy_pass http://localhost:3000/;
    }
}
</code></pre><h3 id="25-proxy-timeouts"><strong>2.5. Proxy Timeouts</strong></h3><pre><code class="language-nginx">location /api/ {
    proxy_pass http://localhost:3000/;
    
    # Timeout settings
    proxy_connect_timeout 60s;      # Timeout kết nối đến upstream
    proxy_send_timeout 60s;         # Timeout gửi request
    proxy_read_timeout 60s;         # Timeout đọc response
    
    # Buffer settings
    proxy_buffering on;
    proxy_buffer_size 4k;
    proxy_buffers 8 4k;
    proxy_busy_buffers_size 8k;
}
</code></pre><hr><h2 id="3-proxy-headers"><strong>3. Proxy Headers</strong></h2><p>Headers rất quan trọng để backend server biết thông tin về original request.</p><h3 id="31-essential-proxy-headers"><strong>3.1. Essential Proxy Headers</strong></h3><pre><code class="language-nginx">location / {
    proxy_pass http://localhost:3000;
    
    # Host header
    proxy_set_header Host $host;
    
    # Real IP của client
    proxy_set_header X-Real-IP $remote_addr;
    
    # Chain của proxies
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
    # Protocol (http/https)
    proxy_set_header X-Forwarded-Proto $scheme;
    
    # Original host
    proxy_set_header X-Forwarded-Host $host;
    
    # Port
    proxy_set_header X-Forwarded-Port $server_port;
}
</code></pre><h3 id="32-header-explanations"><strong>3.2. Header Explanations</strong></h3><p><strong>Host:</strong></p><pre><code class="language-nginx">proxy_set_header Host $host;

# $host = domain name từ request
# Ví dụ: example.com
# Backend nhận được: Host: example.com
</code></pre><p><strong>X-Real-IP:</strong></p><pre><code class="language-nginx">proxy_set_header X-Real-IP $remote_addr;

# $remote_addr = IP của client kết nối trực tiếp đến Nginx
# Ví dụ: 192.168.1.100
# Backend nhận được: X-Real-IP: 192.168.1.100
</code></pre><p><strong>X-Forwarded-For:</strong></p><pre><code class="language-nginx">proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

# Append client IP vào existing X-Forwarded-For header
# Ví dụ:
# Request 1: Client → Nginx → Backend
# X-Forwarded-For: 192.168.1.100

# Request 2: Client → CDN → Nginx → Backend
# X-Forwarded-For: 192.168.1.100, 10.0.0.50

# $proxy_add_x_forwarded_for giữ lại chain of proxies
</code></pre><p><strong>X-Forwarded-Proto:</strong></p><pre><code class="language-nginx">proxy_set_header X-Forwarded-Proto $scheme;

# $scheme = http hoặc https
# Backend biết original request là HTTP hay HTTPS
# Quan trọng cho redirect logic
</code></pre><h3 id="33-complete-header-configuration"><strong>3.3. Complete Header Configuration</strong></h3><pre><code class="language-nginx">http {
    # Define header template
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
            # Headers được inherit từ http context
        }
    }
}
</code></pre><h3 id="34-custom-headers"><strong>3.4. Custom Headers</strong></h3><pre><code class="language-nginx">location /api/ {
    proxy_pass http://localhost:3000/;
    
    # Standard headers
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    
    # Custom headers
    proxy_set_header X-Request-ID $request_id;
    proxy_set_header X-Server-Name $hostname;
    proxy_set_header X-Forwarded-User $remote_user;
    
    # Remove headers
    proxy_set_header Authorization "";  # Remove auth header
    
    # Add custom value
    proxy_set_header X-API-Version "v1";
    proxy_set_header X-Environment "production";
}
</code></pre><h3 id="35-headers-cho-websocket"><strong>3.5. Headers cho WebSocket</strong></h3><pre><code class="language-nginx">location /ws/ {
    proxy_pass http://localhost:3000/;
    
    # WebSocket specific headers
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    
    # Standard headers
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
    # WebSocket timeouts
    proxy_read_timeout 3600s;
    proxy_send_timeout 3600s;
}
</code></pre><h3 id="36-preserve-original-headers"><strong>3.6. Preserve Original Headers</strong></h3><pre><code class="language-nginx">location / {
    proxy_pass http://localhost:3000;
    
    # Pass all original headers
    proxy_pass_request_headers on;
    
    # Specific headers
    proxy_set_header Accept-Encoding $http_accept_encoding;
    proxy_set_header Accept-Language $http_accept_language;
    proxy_set_header Cookie $http_cookie;
    proxy_set_header Referer $http_referer;
    proxy_set_header User-Agent $http_user_agent;
}
</code></pre><h3 id="37-security-headers"><strong>3.7. Security Headers</strong></h3><pre><code class="language-nginx">location / {
    proxy_pass http://localhost:3000;
    
    # Standard proxy headers
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
    # Hide Nginx version
    proxy_hide_header X-Powered-By;
    proxy_hide_header Server;
    
    # Add security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
</code></pre><hr><h2 id="4-upstream-servers-v%C3%A0-load-balancing"><strong>4. Upstream Servers và Load Balancing</strong></h2><h3 id="41-upstream-block-c%C6%A1-b%E1%BA%A3n"><strong>4.1. Upstream Block cơ bản</strong></h3><pre><code class="language-nginx"># Define upstream
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
</code></pre><h3 id="42-load-balancing-methods"><strong>4.2. Load Balancing Methods</strong></h3><p><strong>1. Round Robin (mặc định):</strong></p><pre><code class="language-nginx">upstream backend {
    # Round-robin: lần lượt từng server
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# Request 1 → 3000
# Request 2 → 3001
# Request 3 → 3002
# Request 4 → 3000 (lặp lại)
</code></pre><p><strong>2. Least Connections:</strong></p><pre><code class="language-nginx">upstream backend {
    least_conn;  # Server với ít connections nhất
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# Tốt cho long-lived connections
# Phân phối đều load
</code></pre><p><strong>3. IP Hash (Sticky Sessions):</strong></p><pre><code class="language-nginx">upstream backend {
    ip_hash;  # Same client → same server
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# Client 192.168.1.100 → luôn đến server 3000
# Client 192.168.1.101 → luôn đến server 3001
# Tốt cho session-based applications
</code></pre><p><strong>4. Hash (Generic):</strong></p><pre><code class="language-nginx">upstream backend {
    hash $request_uri consistent;  # Hash theo URI
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# Same URI → same server
# Tốt cho caching
</code></pre><p><strong>5. Random:</strong></p><pre><code class="language-nginx">upstream backend {
    random;  # Random server
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# Random distribution
</code></pre><h3 id="43-server-weights"><strong>4.3. Server Weights</strong></h3><pre><code class="language-nginx">upstream backend {
    # Server với weight cao nhận nhiều requests hơn
    server localhost:3000 weight=3;  # 60% traffic
    server localhost:3001 weight=1;  # 20% traffic
    server localhost:3002 weight=1;  # 20% traffic
}

# Tổng weight = 5
# Server 3000: 3/5 = 60%
# Server 3001: 1/5 = 20%
# Server 3002: 1/5 = 20%
</code></pre><p><strong>Use case cho weights:</strong></p><pre><code class="language-nginx">upstream backend {
    # Production servers
    server prod1.example.com weight=5;
    server prod2.example.com weight=5;
    
    # Canary deployment - 10% traffic
    server canary.example.com weight=1;
}
</code></pre><h3 id="44-backup-servers"><strong>4.4. Backup Servers</strong></h3><pre><code class="language-nginx">upstream backend {
    server localhost:3000;
    server localhost:3001;
    server localhost:3002 backup;  # Chỉ dùng khi primary servers down
}

# 3002 chỉ nhận traffic khi 3000 và 3001 đều unavailable
</code></pre><h3 id="45-server-parameters"><strong>4.5. Server Parameters</strong></h3><pre><code class="language-nginx">upstream backend {
    server localhost:3000 weight=5 max_fails=3 fail_timeout=30s;
    server localhost:3001 weight=5 max_fails=3 fail_timeout=30s;
    server localhost:3002 backup;
    server localhost:3003 down;  # Temporarily disabled
}

# Parameters:
# weight=N         - Trọng số (mặc định 1)
# max_fails=N      - Số lần fail trước khi mark down (mặc định 1)
# fail_timeout=T   - Thời gian timeout (mặc định 10s)
# backup           - Backup server
# down             - Tạm thời disable
</code></pre><h3 id="46-advanced-upstream-configuration"><strong>4.6. Advanced Upstream Configuration</strong></h3><pre><code class="language-nginx">upstream backend {
    least_conn;  # Load balancing method
    
    # Server configuration
    server srv1.example.com:8080 weight=3 max_fails=2 fail_timeout=30s;
    server srv2.example.com:8080 weight=3 max_fails=2 fail_timeout=30s;
    server srv3.example.com:8080 weight=2 max_fails=2 fail_timeout=30s;
    server srv4.example.com:8080 backup;
    
    # Keepalive connections
    keepalive 32;  # Giữ 32 idle connections đến upstream
    keepalive_timeout 60s;
    keepalive_requests 100;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        
        # HTTP version cho keepalive
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        # Standard headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
</code></pre><h3 id="47-multiple-upstreams"><strong>4.7. Multiple Upstreams</strong></h3><pre><code class="language-nginx"># API Backend
upstream api_backend {
    least_conn;
    server api1.example.com:3000;
    server api2.example.com:3000;
    server api3.example.com:3000;
}

# Auth Service
upstream auth_backend {
    server auth1.example.com:4000;
    server auth2.example.com:4000;
}

# WebSocket Service
upstream websocket_backend {
    ip_hash;  # Sticky sessions cho WebSocket
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
</code></pre><hr><h2 id="5-health-checks-c%C6%A1-b%E1%BA%A3n"><strong>5. Health Checks Cơ bản</strong></h2><h3 id="51-passive-health-checks"><strong>5.1. Passive Health Checks</strong></h3><p>Nginx tự động phát hiện failed servers dựa trên responses.</p><pre><code class="language-nginx">upstream backend {
    server localhost:3000 max_fails=3 fail_timeout=30s;
    server localhost:3001 max_fails=3 fail_timeout=30s;
    server localhost:3002 max_fails=3 fail_timeout=30s;
}

# max_fails=3: Sau 3 lần fail liên tiếp
# fail_timeout=30s: Server bị mark down trong 30 giây
# Sau 30s, Nginx thử lại server
</code></pre><p><strong>Chi tiết hoạt động:</strong></p><pre><code>1. Request đến server localhost:3000
2. Server trả về 502, 503, 504 hoặc timeout → fail count = 1
3. Request tiếp theo đến 3000
4. Server fail lần nữa → fail count = 2
5. Request tiếp theo đến 3000
6. Server fail lần 3 → fail count = 3 → Server marked DOWN
7. Traffic được route đến 3001 và 3002
8. Sau 30 giây, Nginx thử lại 3000
9. Nếu 3000 response OK → fail count reset, server UP
</code></pre><h3 id="52-active-health-checks-nginx-plus"><strong>5.2. Active Health Checks (Nginx Plus)</strong></h3><p>Nginx Plus hỗ trợ active health checks (không có trong open source).</p><pre><code class="language-nginx"># Nginx Plus only
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

# interval=5s: Check mỗi 5 giây
# fails=3: Mark down sau 3 lần fail
# passes=2: Mark up sau 2 lần success
# uri=/health: Endpoint để check
</code></pre><h3 id="53-custom-health-check-endpoint"><strong>5.3. Custom Health Check Endpoint</strong></h3><p><strong>Backend implementation (Node.js example):</strong></p><pre><code class="language-javascript">// health.js
const express = require('express');
const app = express();

app.get('/health', (req, res) =&gt; {
    // Check database connection
    // Check dependencies
    // Check memory usage, etc.
    
    const health = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage()
    };
    
    res.status(200).json(health);
});

app.listen(3000);
</code></pre><p><strong>Nginx configuration:</strong></p><pre><code class="language-nginx">upstream backend {
    server localhost:3000 max_fails=3 fail_timeout=30s;
    server localhost:3001 max_fails=3 fail_timeout=30s;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
    
    # Health check endpoint (không public)
    location /health {
        access_log off;
        proxy_pass http://backend;
        
        # Chỉ allow từ localhost
        allow 127.0.0.1;
        deny all;
    }
}
</code></pre><h3 id="54-external-health-checks"><strong>5.4. External Health Checks</strong></h3><p>Sử dụng external script để monitor và update upstream.</p><p><strong>Monitor script:</strong></p><pre><code class="language-bash">#!/bin/bash
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
        echo "$(date) - $server is healthy"
    else
        echo "$(date) - $server is down (HTTP $response)"
        # Send alert
        # Update upstream config
        # Reload Nginx
    fi
done
</code></pre><p><strong>Crontab:</strong></p><pre><code class="language-bash"># Run health check every minute
* * * * * /usr/local/bin/health_check.sh &gt;&gt; /var/log/health_check.log 2&gt;&amp;1
</code></pre><h3 id="55-monitoring-v%E1%BB%9Bi-stub-status"><strong>5.5. Monitoring với Stub Status</strong></h3><pre><code class="language-nginx">server {
    listen 8080;
    server_name localhost;
    
    location /nginx_status {
        stub_status;
        access_log off;
        allow 127.0.0.1;
        deny all;
    }
}
</code></pre><p><strong>Check status:</strong></p><pre><code class="language-bash">curl http://localhost:8080/nginx_status

# Output:
# Active connections: 291
# server accepts handled requests
#  16630948 16630948 31070465
# Reading: 6 Writing: 179 Waiting: 106
</code></pre><h3 id="56-health-check-v%E1%BB%9Bi-scripts"><strong>5.6. Health Check với Scripts</strong></h3><p><strong>Python health check:</strong></p><pre><code class="language-python">#!/usr/bin/env python3
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
    msg['Subject'] = f'Backend Alert: {backend}'
    msg['From'] = 'monitor@example.com'
    msg['To'] = 'admin@example.com'
    msg.set_content(f'Backend {backend} is {status}')
    
    with smtplib.SMTP('localhost') as s:
        s.send_message(msg)

def main():
    while True:
        for backend in BACKENDS:
            if not check_health(backend):
                print(f'{backend} is DOWN')
                send_alert(backend, 'DOWN')
            else:
                print(f'{backend} is UP')
        
        time.sleep(60)  # Check every minute

if __name__ == '__main__':
    main()
</code></pre><hr><h2 id="6-v%C3%AD-d%E1%BB%A5-th%E1%BB%B1c-t%E1%BA%BF"><strong>6. Ví dụ Thực tế</strong></h2><h3 id="61-nodejs-application"><strong>6.1. Node.js Application</strong></h3><p><strong>Backend (app.js):</strong></p><pre><code class="language-javascript">const express = require('express');
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
</code></pre><p><strong>Nginx configuration:</strong></p><pre><code class="language-nginx">upstream nodejs_backend {
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
        
        # HTTP version
        proxy_http_version 1.1;
        
        # Headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Connection "";
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        # Buffering
        proxy_buffering on;
        proxy_buffer_size 4k;
        proxy_buffers 8 4k;
    }
    
    location /health {
        access_log off;
        proxy_pass http://nodejs_backend/health;
    }
}
</code></pre><h3 id="62-python-flaskdjango-application"><strong>6.2. Python Flask/Django Application</strong></h3><p><strong>Backend (app.py):</strong></p><pre><code class="language-python">from flask import Flask, jsonify, request
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
</code></pre><p><strong>Nginx configuration:</strong></p><pre><code class="language-nginx">upstream python_backend {
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
        
        # Python apps có thể slow
        proxy_read_timeout 300s;
        proxy_connect_timeout 300s;
        proxy_send_timeout 300s;
    }
}
</code></pre><h3 id="63-php-application-v%E1%BB%9Bi-php-fpm"><strong>6.3. PHP Application với PHP-FPM</strong></h3><p><strong>Nginx configuration:</strong></p><pre><code class="language-nginx">upstream php_backend {
    server unix:/var/run/php/php8.1-fpm.sock;
    # hoặc
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
        
        # Headers
        fastcgi_param HTTP_X_REAL_IP $remote_addr;
        fastcgi_param HTTP_X_FORWARDED_FOR $proxy_add_x_forwarded_for;
        fastcgi_param HTTP_X_FORWARDED_PROTO $scheme;
    }
    
    location ~ /\.ht {
        deny all;
    }
}
</code></pre><h3 id="64-microservices-architecture"><strong>6.4. Microservices Architecture</strong></h3><pre><code class="language-nginx"># User Service
upstream user_service {
    server user1.internal:8001;
    server user2.internal:8001;
}

# Order Service
upstream order_service {
    server order1.internal:8002;
    server order2.internal:8002;
}

# Payment Service
upstream payment_service {
    server payment1.internal:8003;
    server payment2.internal:8003;
}

# Product Service
upstream product_service {
    server product1.internal:8004;
    server product2.internal:8004;
}

server {
    listen 80;
    server_name api.example.com;
    
    # Shared headers
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
</code></pre><hr><h2 id="7-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>7. Bài tập Thực hành</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-basic-reverse-proxy"><strong>Bài tập 1: Basic Reverse Proxy</strong></h3><ol><li>Tạo simple Node.js/Python server trên port 3000</li><li>Configure Nginx làm reverse proxy</li><li>Test và verify headers được pass correctly</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-multiple-backends"><strong>Bài tập 2: Multiple Backends</strong></h3><ol><li>Chạy 3 instances của application trên ports 3000, 3001, 3002</li><li>Setup upstream với round-robin</li><li>Test load balancing (check logs để xem requests được distribute)</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-3-sticky-sessions"><strong>Bài tập 3: Sticky Sessions</strong></h3><ol><li>Setup upstream với ip_hash</li><li>Test rằng same client luôn đến same backend</li><li>Compare với round-robin</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-health-checks"><strong>Bài tập 4: Health Checks</strong></h3><ol><li>Configure passive health checks với max_fails và fail_timeout</li><li>Stop một backend server</li><li>Verify Nginx automatically routes traffic đến healthy servers</li><li>Start server lại và verify traffic returns</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-microservices"><strong>Bài tập 5: Microservices</strong></h3><ol><li>Tạo 2-3 simple APIs (có thể là mock)</li><li>Setup Nginx route requests based on URL path:<ul><li><code>/api/users</code> → User service</li><li><code>/api/products</code> → Product service</li></ul></li><li>Test routing</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-6-websocket-proxy"><strong>Bài tập 6: WebSocket Proxy</strong></h3><ol><li>Tạo simple WebSocket server</li><li>Configure Nginx làm WebSocket proxy</li><li>Test connection và message passing</li></ol><hr><h2 id="8-troubleshooting"><strong>8. Troubleshooting</strong></h2><h3 id="81-common-issues"><strong>8.1. Common Issues</strong></h3><p><strong>1. 502 Bad Gateway:</strong></p><pre><code class="language-bash"># Nguyên nhân: Backend không running hoặc không reachable
# Check backend
curl http://localhost:3000

# Check Nginx error log
sudo tail -f /var/log/nginx/error.log

# Check firewall
sudo ufw status
</code></pre><p><strong>2. 504 Gateway Timeout:</strong></p><pre><code class="language-nginx"># Nguyên nhân: Backend xử lý quá lâu
# Fix: Tăng timeout

location / {
    proxy_pass http://backend;
    proxy_read_timeout 300s;
    proxy_connect_timeout 300s;
}
</code></pre><p><strong>3. Headers không được pass:</strong></p><pre><code class="language-bash"># Verify headers tại backend
# Log request headers

# Nginx config
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
</code></pre><p><strong>4. Large uploads fail:</strong></p><pre><code class="language-nginx"># Tăng client_max_body_size
http {
    client_max_body_size 100M;
}
</code></pre><p><strong>5. WebSocket connection fails:</strong></p><pre><code class="language-nginx"># Cần upgrade headers
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
</code></pre><h3 id="82-debug-commands"><strong>8.2. Debug Commands</strong></h3><pre><code class="language-bash"># Test upstream connectivity
curl -v http://localhost:3000

# Check Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Watch error log real-time
sudo tail -f /var/log/nginx/error.log

# Check upstream status (if stub_status enabled)
curl http://localhost/nginx_status

# Test with specific headers
curl -H "Host: example.com" http://localhost

# Test proxy headers
curl -H "X-Forwarded-For: 1.2.3.4" http://localhost
</code></pre><hr><h2 id="9-best-practices"><strong>9. Best Practices</strong></h2><h3 id="91-configuration"><strong>9.1. Configuration</strong></h3><ol><li><strong>Use upstream blocks:</strong></li></ol><pre><code class="language-nginx"># Good
upstream backend {
    server localhost:3000;
}

# Not recommended
location / {
    proxy_pass http://localhost:3000;
}
</code></pre><ol start="2"><li><strong>Set appropriate timeouts:</strong></li></ol><pre><code class="language-nginx">proxy_connect_timeout 60s;
proxy_send_timeout 60s;
proxy_read_timeout 60s;
</code></pre><ol start="3"><li><strong>Enable keepalive:</strong></li></ol><pre><code class="language-nginx">upstream backend {
    server localhost:3000;
    keepalive 32;
}

location / {
    proxy_http_version 1.1;
    proxy_set_header Connection "";
}
</code></pre><ol start="4"><li><strong>Use health checks:</strong></li></ol><pre><code class="language-nginx">server localhost:3000 max_fails=3 fail_timeout=30s;
</code></pre><h3 id="92-security"><strong>9.2. Security</strong></h3><ol><li><strong>Không expose internal structure:</strong></li></ol><pre><code class="language-nginx">proxy_hide_header X-Powered-By;
</code></pre><ol start="2"><li><strong>Limit request size:</strong></li></ol><pre><code class="language-nginx">client_max_body_size 10M;
</code></pre><ol start="3"><li><strong>Rate limiting:</strong></li></ol><pre><code class="language-nginx">limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

location /api/ {
    limit_req zone=api burst=20;
}
</code></pre><h3 id="93-performance"><strong>9.3. Performance</strong></h3><ol><li><strong>Buffer configuration:</strong></li></ol><pre><code class="language-nginx">proxy_buffering on;
proxy_buffer_size 4k;
proxy_buffers 8 4k;
</code></pre><ol start="2"><li><strong>Caching:</strong></li></ol><pre><code class="language-nginx">proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m;

location / {
    proxy_cache my_cache;
    proxy_cache_valid 200 10m;
}
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>Tổng kết</strong></h2><p>Trong bài này, bạn đã học:</p><ul><li>✅ Khái niệm và use cases của reverse proxy</li><li>✅ Cấu hình proxy_pass và routing</li><li>✅ Proxy headers và X-Forwarded headers</li><li>✅ Upstream servers và load balancing</li><li>✅ Health checks và monitoring</li><li>✅ Real-world examples với Node.js, Python, PHP</li></ul><p><strong>Bài tiếp theo:</strong> Chúng ta sẽ đi sâu vào Load Balancing - các thuật toán, strategies và advanced configurations.</p>
