---
id: 019c9617-fc7d-736e-82ed-b2436e5de5d4
title: 'Lesson 4: Reverse Proxy'
slug: bai-4-reverse-proxy
description: >-
  A lesson on Reverse Proxy in Nginx — concepts, proxy_pass configuration, proxy
  headers, upstream servers, and health checks. Guide to setting up Nginx as a
  reverse proxy for backend applications like Node.js, Python, and PHP. Includes
  best practices and troubleshooting.
duration_minutes: 185
is_free: true
video_url: null
sort_order: 4
section_title: "Part 2: Reverse Proxy & Load Balancing"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx from Basics to Advanced
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — Lesson 4</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 4: Reverse Proxy</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx from Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Reverse Proxy &amp; Load Balancing</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-kh%C3%A1i-ni%E1%BB%87m-reverse-proxy"><strong>1. Reverse Proxy Concepts</strong></h2><h3 id="11-reverse-proxy-l%C3%A0-g%C3%AC"><strong>1.1. What is a Reverse Proxy?</strong></h3><p>A <strong>reverse proxy</strong> is a server that sits between clients and backend servers. It receives requests from clients, forwards them to backend servers, and returns the response to the client.</p><p><strong>The difference:</strong></p><pre><code>Forward Proxy (Client-side):
Client → Forward Proxy → Internet → Server
(Hides the client)

Reverse Proxy (Server-side):
Client → Reverse Proxy → Backend Server
(Hides the server)
</code></pre><p><strong>Illustration:</strong></p><pre><code>┌─────────┐         ┌──────────────┐         ┌──────────────┐
│         │         │              │         │              │
│ Client  │────────▶│    Nginx     │────────▶│   Backend    │
│         │         │ Reverse Proxy│         │   Server     │
│         │◀────────│              │◀────────│              │
└─────────┘         └──────────────┘         └──────────────┘
</code></pre><h3 id="12-t%E1%BA%A1i-sao-d%C3%B9ng-reverse-proxy"><strong>1.2. Why Use a Reverse Proxy?</strong></h3><p><strong>1. Load Balancing:</strong></p><ul><li>Distribute traffic across multiple backend servers</li><li>Increase throughput and reliability</li></ul><p><strong>2. SSL/TLS Termination:</strong></p><ul><li>Nginx handles SSL encryption/decryption</li><li>Backend servers don't need to worry about HTTPS</li></ul><p><strong>3. Caching:</strong></p><ul><li>Cache static content and API responses</li><li>Reduce load on backend servers</li></ul><p><strong>4. Security:</strong></p><ul><li>Hide backend server infrastructure</li><li>Protection layer (rate limiting, firewall)</li><li>Centralized authentication</li></ul><p><strong>5. Compression:</strong></p><ul><li>Gzip compression for responses</li><li>Reduce bandwidth usage</li></ul><p><strong>6. Static File Serving:</strong></p><ul><li>Nginx serves static files directly</li><li>Backend only handles dynamic content</li></ul><p><strong>7. Multiple Backends:</strong></p><ul><li>Route requests to different applications</li><li>Microservices architecture</li></ul><h3 id="13-use-cases-ph%E1%BB%95-bi%E1%BA%BFn"><strong>1.3. Common Use Cases</strong></h3><pre><code>1. Single Page Applications (SPA):
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
</code></pre><hr><h2 id="2-c%E1%BA%A5u-h%C3%ACnh-proxypass-c%C6%A1-b%E1%BA%A3n"><strong>2. Basic proxy_pass Configuration</strong></h2><h3 id="21-c%C3%BA-ph%C3%A1p-proxypass"><strong>2.1. proxy_pass Syntax</strong></h3><pre><code class="language-nginx">location /path/ {
    proxy_pass http://backend_server;
}
</code></pre><p><strong>Simple example:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    location / {
        # Forward all requests to backend
        proxy_pass http://localhost:3000;
    }
}
</code></pre><h3 id="22-proxypass-v%E1%BB%9Bi-uri"><strong>2.2. proxy_pass with URI</strong></h3><p><strong>Method 1: No trailing slash</strong></p><pre><code class="language-nginx">location /api {
    proxy_pass http://localhost:3000;
}

# Request: /api/users
# Proxied to: http://localhost:3000/api/users
# (keeps /api prefix)
</code></pre><p><strong>Method 2: With trailing slash</strong></p><pre><code class="language-nginx">location /api/ {
    proxy_pass http://localhost:3000/;
}

# Request: /api/users
# Proxied to: http://localhost:3000/users
# (strips /api prefix)
</code></pre><p><strong>Method 3: With specific path</strong></p><pre><code class="language-nginx">location /api/ {
    proxy_pass http://localhost:3000/v1/;
}

# Request: /api/users
# Proxied to: http://localhost:3000/v1/users
# (replaces /api with /v1)
</code></pre><p><strong>Detailed example:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    # Proxy root
    location / {
        proxy_pass http://localhost:3000;
    }

    # Proxy API (strip /api prefix)
    location /api/ {
        proxy_pass http://localhost:4000/;
    }

    # Proxy admin (keep /admin prefix)
    location /admin {
        proxy_pass http://localhost:5000;
    }

    # Proxy with exact match
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
</code></pre><h3 id="24-proxy-v%E1%BB%9Bi-variables"><strong>2.4. Proxy with Variables</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    # Proxy based on subdomain
    location / {
        proxy_pass http://$http_host$request_uri;
    }

    # Proxy with custom variable
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
    proxy_connect_timeout 60s;      # Timeout connecting to upstream
    proxy_send_timeout 60s;         # Timeout sending request
    proxy_read_timeout 60s;         # Timeout reading response
    
    # Buffer settings
    proxy_buffering on;
    proxy_buffer_size 4k;
    proxy_buffers 8 4k;
    proxy_busy_buffers_size 8k;
}
</code></pre><hr><h2 id="3-proxy-headers"><strong>3. Proxy Headers</strong></h2><p>Headers are essential so backend servers know information about the original request.</p><h3 id="31-essential-proxy-headers"><strong>3.1. Essential Proxy Headers</strong></h3><pre><code class="language-nginx">location / {
    proxy_pass http://localhost:3000;
    
    # Host header
    proxy_set_header Host $host;
    
    # Real client IP
    proxy_set_header X-Real-IP $remote_addr;
    
    # Chain of proxies
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    
    # Protocol (http/https)
    proxy_set_header X-Forwarded-Proto $scheme;
    
    # Original host
    proxy_set_header X-Forwarded-Host $host;
    
    # Port
    proxy_set_header X-Forwarded-Port $server_port;
}
</code></pre><h3 id="32-header-explanations"><strong>3.2. Header Explanations</strong></h3><p><strong>Host:</strong></p><pre><code class="language-nginx">proxy_set_header Host $host;

# $host = domain name from request
# Example: example.com
# Backend receives: Host: example.com
</code></pre><p><strong>X-Real-IP:</strong></p><pre><code class="language-nginx">proxy_set_header X-Real-IP $remote_addr;

# $remote_addr = IP of the client connecting directly to Nginx
# Example: 192.168.1.100
# Backend receives: X-Real-IP: 192.168.1.100
</code></pre><p><strong>X-Forwarded-For:</strong></p><pre><code class="language-nginx">proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

# Appends client IP to any existing X-Forwarded-For header
# Example:
# Request 1: Client → Nginx → Backend
# X-Forwarded-For: 192.168.1.100

# Request 2: Client → CDN → Nginx → Backend
# X-Forwarded-For: 192.168.1.100, 10.0.0.50

# $proxy_add_x_forwarded_for preserves the chain of proxies
</code></pre><p><strong>X-Forwarded-Proto:</strong></p><pre><code class="language-nginx">proxy_set_header X-Forwarded-Proto $scheme;

# $scheme = http or https
# Backend knows whether original request was HTTP or HTTPS
# Important for redirect logic
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
            # Headers inherited from http context
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
    
    # Add custom values
    proxy_set_header X-API-Version "v1";
    proxy_set_header X-Environment "production";
}
</code></pre><h3 id="35-headers-cho-websocket"><strong>3.5. Headers for WebSocket</strong></h3><pre><code class="language-nginx">location /ws/ {
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
</code></pre><hr><h2 id="4-upstream-servers-v%C3%A0-load-balancing"><strong>4. Upstream Servers and Load Balancing</strong></h2><h3 id="41-upstream-block-c%C6%A1-b%E1%BA%A3n"><strong>4.1. Basic Upstream Block</strong></h3><pre><code class="language-nginx"># Define upstream
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
</code></pre><h3 id="42-load-balancing-methods"><strong>4.2. Load Balancing Methods</strong></h3><p><strong>1. Round Robin (default):</strong></p><pre><code class="language-nginx">upstream backend {
    # Round-robin: each server in turn
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# Request 1 → 3000
# Request 2 → 3001
# Request 3 → 3002
# Request 4 → 3000 (repeats)
</code></pre><p><strong>2. Least Connections:</strong></p><pre><code class="language-nginx">upstream backend {
    least_conn;  # Server with fewest connections
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# Good for long-lived connections
# Distributes load evenly
</code></pre><p><strong>3. IP Hash (Sticky Sessions):</strong></p><pre><code class="language-nginx">upstream backend {
    ip_hash;  # Same client → same server
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# Client 192.168.1.100 → always routes to server 3000
# Client 192.168.1.101 → always routes to server 3001
# Good for session-based applications
</code></pre><p><strong>4. Hash (Generic):</strong></p><pre><code class="language-nginx">upstream backend {
    hash $request_uri consistent;  # Hash by URI
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}

# Same URI → same server
# Good for caching
</code></pre><p><strong>5. Random:</strong></p><pre><code class="language-nginx">upstream backend {
    random;  # Random server
    
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}
</code></pre><h3 id="43-server-weights"><strong>4.3. Server Weights</strong></h3><pre><code class="language-nginx">upstream backend {
    # Servers with higher weight receive more requests
    server localhost:3000 weight=3;  # 60% traffic
    server localhost:3001 weight=1;  # 20% traffic
    server localhost:3002 weight=1;  # 20% traffic
}

# Total weight = 5
# Server 3000: 3/5 = 60%
# Server 3001: 1/5 = 20%
# Server 3002: 1/5 = 20%
</code></pre><p><strong>Use case for weights:</strong></p><pre><code class="language-nginx">upstream backend {
    # Production servers
    server prod1.example.com weight=5;
    server prod2.example.com weight=5;
    
    # Canary deployment - 10% traffic
    server canary.example.com weight=1;
}
</code></pre><h3 id="44-backup-servers"><strong>4.4. Backup Servers</strong></h3><pre><code class="language-nginx">upstream backend {
    server localhost:3000;
    server localhost:3001;
    server localhost:3002 backup;  # Only used when primary servers are down
}

# 3002 only receives traffic when 3000 and 3001 are both unavailable
</code></pre><h3 id="45-server-parameters"><strong>4.5. Server Parameters</strong></h3><pre><code class="language-nginx">upstream backend {
    server localhost:3000 weight=5 max_fails=3 fail_timeout=30s;
    server localhost:3001 weight=5 max_fails=3 fail_timeout=30s;
    server localhost:3002 backup;
    server localhost:3003 down;  # Temporarily disabled
}

# Parameters:
# weight=N         - Weight (default 1)
# max_fails=N      - Number of failures before marking down (default 1)
# fail_timeout=T   - Timeout duration (default 10s)
# backup           - Backup server
# down             - Temporarily disabled
</code></pre><h3 id="46-advanced-upstream-configuration"><strong>4.6. Advanced Upstream Configuration</strong></h3><pre><code class="language-nginx">upstream backend {
    least_conn;  # Load balancing method
    
    # Server configuration
    server srv1.example.com:8080 weight=3 max_fails=2 fail_timeout=30s;
    server srv2.example.com:8080 weight=3 max_fails=2 fail_timeout=30s;
    server srv3.example.com:8080 weight=2 max_fails=2 fail_timeout=30s;
    server srv4.example.com:8080 backup;
    
    # Keepalive connections
    keepalive 32;  # Keep 32 idle connections to upstream
    keepalive_timeout 60s;
    keepalive_requests 100;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        
        # HTTP version for keepalive
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
    ip_hash;  # Sticky sessions for WebSocket
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
</code></pre><hr><h2 id="5-health-checks-c%C6%A1-b%E1%BA%A3n"><strong>5. Basic Health Checks</strong></h2><h3 id="51-passive-health-checks"><strong>5.1. Passive Health Checks</strong></h3><p>Nginx automatically detects failed servers based on their responses.</p><pre><code class="language-nginx">upstream backend {
    server localhost:3000 max_fails=3 fail_timeout=30s;
    server localhost:3001 max_fails=3 fail_timeout=30s;
    server localhost:3002 max_fails=3 fail_timeout=30s;
}

# max_fails=3: After 3 consecutive failures
# fail_timeout=30s: Server is marked down for 30 seconds
# After 30s, Nginx retries the server
</code></pre><p><strong>How it works:</strong></p><pre><code>1. Request sent to localhost:3000
2. Server returns 502, 503, 504 or times out → fail count = 1
3. Next request goes to 3000
4. Server fails again → fail count = 2
5. Next request goes to 3000
6. Server fails third time → fail count = 3 → Server marked DOWN
7. Traffic is routed to 3001 and 3002
8. After 30 seconds, Nginx retries 3000
9. If 3000 responds OK → fail count resets, server UP
</code></pre><h3 id="52-active-health-checks-nginx-plus"><strong>5.2. Active Health Checks (Nginx Plus)</strong></h3><p>Nginx Plus supports active health checks (not available in the open-source version).</p><pre><code class="language-nginx"># Nginx Plus only
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

# interval=5s: Check every 5 seconds
# fails=3: Mark down after 3 failures
# passes=2: Mark up after 2 successes
# uri=/health: Endpoint to check
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
    
    # Health check endpoint (not public)
    location /health {
        access_log off;
        proxy_pass http://backend;
        
        # Only allow from localhost
        allow 127.0.0.1;
        deny all;
    }
}
</code></pre><h3 id="54-external-health-checks"><strong>5.4. External Health Checks</strong></h3><p>Use an external script to monitor and update upstreams.</p><p><strong>Monitor script:</strong></p><pre><code class="language-bash">#!/bin/bash
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
</code></pre><h3 id="55-monitoring-v%E1%BB%9Bi-stub-status"><strong>5.5. Monitoring with Stub Status</strong></h3><pre><code class="language-nginx">server {
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
</code></pre><h3 id="56-health-check-v%E1%BB%9Bi-scripts"><strong>5.6. Health Check with Scripts</strong></h3><p><strong>Python health check:</strong></p><pre><code class="language-python">#!/usr/bin/env python3
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
</code></pre><hr><h2 id="6-v%C3%AD-d%E1%BB%A5-th%E1%BB%B1c-t%E1%BA%BF"><strong>6. Real-world Examples</strong></h2><h3 id="61-nodejs-application"><strong>6.1. Node.js Application</strong></h3><p><strong>Backend (app.js):</strong></p><pre><code class="language-javascript">const express = require('express');
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
        
        # Python apps can be slow
        proxy_read_timeout 300s;
        proxy_connect_timeout 300s;
        proxy_send_timeout 300s;
    }
}
</code></pre><h3 id="63-php-application-v%E1%BB%9Bi-php-fpm"><strong>6.3. PHP Application with PHP-FPM</strong></h3><p><strong>Nginx configuration:</strong></p><pre><code class="language-nginx">upstream php_backend {
    server unix:/var/run/php/php8.1-fpm.sock;
    # or
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
</code></pre><hr><h2 id="7-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>7. Practice Exercises</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-basic-reverse-proxy"><strong>Exercise 1: Basic Reverse Proxy</strong></h3><ol><li>Create a simple Node.js/Python server on port 3000</li><li>Configure Nginx as a reverse proxy</li><li>Test and verify that headers are passed correctly</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-multiple-backends"><strong>Exercise 2: Multiple Backends</strong></h3><ol><li>Run 3 instances of an application on ports 3000, 3001, 3002</li><li>Set up an upstream with round-robin</li><li>Test load balancing (check logs to see how requests are distributed)</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-3-sticky-sessions"><strong>Exercise 3: Sticky Sessions</strong></h3><ol><li>Set up an upstream with ip_hash</li><li>Test that the same client always reaches the same backend</li><li>Compare with round-robin</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-health-checks"><strong>Exercise 4: Health Checks</strong></h3><ol><li>Configure passive health checks with max_fails and fail_timeout</li><li>Stop one backend server</li><li>Verify Nginx automatically routes traffic to healthy servers</li><li>Start the server again and verify traffic returns</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-microservices"><strong>Exercise 5: Microservices</strong></h3><ol><li>Create 2-3 simple APIs (can be mocks)</li><li>Set up Nginx to route requests based on URL path:<ul><li><code>/api/users</code> → User service</li><li><code>/api/products</code> → Product service</li></ul></li><li>Test routing</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-6-websocket-proxy"><strong>Exercise 6: WebSocket Proxy</strong></h3><ol><li>Create a simple WebSocket server</li><li>Configure Nginx as a WebSocket proxy</li><li>Test the connection and message passing</li></ol><hr><h2 id="8-troubleshooting"><strong>8. Troubleshooting</strong></h2><h3 id="81-common-issues"><strong>8.1. Common Issues</strong></h3><p><strong>1. 502 Bad Gateway:</strong></p><pre><code class="language-bash"># Cause: Backend is not running or not reachable
# Check backend
curl http://localhost:3000

# Check Nginx error log
sudo tail -f /var/log/nginx/error.log

# Check firewall
sudo ufw status
</code></pre><p><strong>2. 504 Gateway Timeout:</strong></p><pre><code class="language-nginx"># Cause: Backend takes too long to respond
# Fix: Increase timeout

location / {
    proxy_pass http://backend;
    proxy_read_timeout 300s;
    proxy_connect_timeout 300s;
}
</code></pre><p><strong>3. Headers not being passed:</strong></p><pre><code class="language-bash"># Verify headers at backend
# Log request headers

# Nginx config
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
</code></pre><p><strong>4. Large uploads fail:</strong></p><pre><code class="language-nginx"># Increase client_max_body_size
http {
    client_max_body_size 100M;
}
</code></pre><p><strong>5. WebSocket connection fails:</strong></p><pre><code class="language-nginx"># Upgrade headers are required
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
</code></pre><h3 id="82-debug-commands"><strong>8.2. Debug Commands</strong></h3><pre><code class="language-bash"># Test upstream connectivity
curl -v http://localhost:3000

# Check Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Watch error log in real-time
sudo tail -f /var/log/nginx/error.log

# Check upstream status (if stub_status is enabled)
curl http://localhost/nginx_status

# Test with specific headers
curl -H "Host: example.com" http://localhost

# Test proxy headers
curl -H "X-Forwarded-For: 1.2.3.4" http://localhost
</code></pre><hr><h2 id="9-best-practices"><strong>9. Best Practices</strong></h2><h3 id="91-configuration"><strong>9.1. Configuration</strong></h3><ol><li><strong>Use upstream blocks:</strong></li></ol><pre><code class="language-nginx"># Good
upstream backend {
    server localhost:3000;
}

# Not recommended (no failover or load balancing)
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
</code></pre><h3 id="92-security"><strong>9.2. Security</strong></h3><ol><li><strong>Don't expose internal structure:</strong></li></ol><pre><code class="language-nginx">proxy_hide_header X-Powered-By;
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
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>Summary</strong></h2><p>In this lesson, you learned:</p><ul><li>✅ Reverse proxy concepts and use cases</li><li>✅ proxy_pass configuration and routing</li><li>✅ Proxy headers and X-Forwarded headers</li><li>✅ Upstream servers and load balancing</li><li>✅ Health checks and monitoring</li><li>✅ Real-world examples with Node.js, Python, and PHP</li></ul><p><strong>Next lesson:</strong> We will dive deeper into Load Balancing — algorithms, strategies, and advanced configurations.</p>
