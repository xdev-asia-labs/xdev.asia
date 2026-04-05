---
id: 019c9617-fc8c-725d-b2ab-e1f1adb3175b
title: 'Bài 8: Performance Tuning NGINX'
slug: bai-8-performance-tuning-trong-ngi
description: >-
  Bài học về Performance Tuning trong Nginx - tối ưu worker processes và
  connections, keepalive, buffers, timeouts, gzip compression, sendfile,
  tcp_nopush/nodelay, open file cache. Hướng dẫn monitoring, benchmarking và
  best practices để maximize performance cho high-traffic production
  environments.
duration_minutes: 220
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 3: Security & Performance"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx từ Cơ bản đến Nâng cao
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8674" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8674)"/>

  <!-- Decorations -->
  <g>
    <circle cx="794" cy="92" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="988" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="682" cy="220" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="876" cy="154" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="88" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="212" x2="1100" y2="292" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="242" x2="1050" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1035.38268590218,198.5 1035.38268590218,225.5 1012,239 988.6173140978201,225.5 988.6173140978201,198.5 1012,185" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Bài 8</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 8: Performance Tuning NGINX</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Security &amp; Performance</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-worker-processes-v%C3%A0-worker-connections"><strong>1. Worker Processes và Worker Connections</strong></h2><h3 id="11-worker-processes"><strong>1.1. Worker Processes</strong></h3><p>Worker processes là các processes xử lý actual connections và requests.</p><p><strong>Cấu hình cơ bản:</strong></p><pre><code class="language-nginx"># nginx.conf

# Set số worker processes
worker_processes auto;  # Recommended: tự động detect CPU cores

# Or manual:
# worker_processes 4;   # 4 worker processes
# worker_processes 8;   # 8 worker processes

events {
    worker_connections 1024;
}

http {
    # ...
}
</code></pre><p><strong>Worker processes explained:</strong></p><pre><code>Master Process
├── Worker Process 1 → Handles connections
├── Worker Process 2 → Handles connections
├── Worker Process 3 → Handles connections
└── Worker Process 4 → Handles connections

Best practice:
worker_processes = số CPU cores
</code></pre><p><strong>Check CPU cores:</strong></p><pre><code class="language-bash"># Linux
nproc
# Or
lscpu | grep "^CPU(s):"
# Or
cat /proc/cpuinfo | grep processor | wc -l

# macOS
sysctl -n hw.ncpu
</code></pre><p><strong>Example configurations:</strong></p><pre><code class="language-nginx"># Server với 4 CPU cores
worker_processes 4;

# Server với 8 CPU cores
worker_processes 8;

# Auto-detect (recommended)
worker_processes auto;
</code></pre><h3 id="12-worker-connections"><strong>1.2. Worker Connections</strong></h3><p>Worker connections xác định số connections mỗi worker có thể handle.</p><pre><code class="language-nginx">events {
    # Connections per worker
    worker_connections 1024;  # Default
    
    # Or higher for high-traffic sites
    # worker_connections 2048;
    # worker_connections 4096;
}

# Total connections = worker_processes × worker_connections
# Example: 4 workers × 1024 connections = 4,096 total connections
</code></pre><p><strong>Calculate total capacity:</strong></p><pre><code>Total connections = worker_processes × worker_connections

Examples:
- 4 workers × 1024 = 4,096 connections
- 8 workers × 2048 = 16,384 connections
- 16 workers × 4096 = 65,536 connections
</code></pre><p><strong>Practical example:</strong></p><pre><code class="language-nginx"># High-traffic configuration
worker_processes auto;  # 8 cores = 8 workers

events {
    worker_connections 4096;
    # Total: 8 × 4096 = 32,768 connections
    
    # Use epoll on Linux (efficient event method)
    use epoll;
    
    # Accept multiple connections at once
    multi_accept on;
}
</code></pre><h3 id="13-event-methods"><strong>1.3. Event Methods</strong></h3><pre><code class="language-nginx">events {
    # Linux - epoll (recommended)
    use epoll;
    
    # FreeBSD - kqueue
    # use kqueue;
    
    # macOS - kqueue
    # use kqueue;
    
    # Windows - không cần specify
}
</code></pre><p><strong>Event method comparison:</strong></p><pre><code>Linux:
- epoll: Efficient, scalable (recommended)
- poll: Basic, less efficient
- select: Oldest, least efficient

BSD/macOS:
- kqueue: Most efficient

Windows:
- Uses IOCP automatically
</code></pre><h3 id="14-multi-accept"><strong>1.4. Multi Accept</strong></h3><pre><code class="language-nginx">events {
    worker_connections 4096;
    
    # Accept multiple connections at once
    multi_accept on;  # Default: off
}

# on: Worker accepts all new connections at once
# off: Worker accepts one connection at a time

# Recommendation: Enable for high-traffic sites
</code></pre><h3 id="15-system-limits"><strong>1.5. System Limits</strong></h3><p><strong>Check system limits:</strong></p><pre><code class="language-bash"># Current limits
ulimit -n

# System-wide limit
cat /proc/sys/fs/file-max

# Per-user limit
cat /etc/security/limits.conf
</code></pre><p><strong>Increase limits:</strong></p><pre><code class="language-bash"># Temporary (current session)
ulimit -n 65536

# Permanent - edit /etc/security/limits.conf
sudo nano /etc/security/limits.conf

# Add:
nginx soft nofile 65536
nginx hard nofile 65536
* soft nofile 65536
* hard nofile 65536
</code></pre><p><strong>System-wide file limit:</strong></p><pre><code class="language-bash"># Edit /etc/sysctl.conf
sudo nano /etc/sysctl.conf

# Add:
fs.file-max = 2097152

# Apply changes
sudo sysctl -p
</code></pre><p><strong>Nginx systemd service limits:</strong></p><pre><code class="language-bash"># Edit systemd service
sudo systemctl edit nginx

# Add:
[Service]
LimitNOFILE=65536

# Reload systemd
sudo systemctl daemon-reload
sudo systemctl restart nginx
</code></pre><h3 id="16-complete-worker-configuration"><strong>1.6. Complete Worker Configuration</strong></h3><pre><code class="language-nginx"># Main context
user nginx;
worker_processes auto;
worker_rlimit_nofile 65535;  # Max open files per worker
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

# Worker priority (nice value: -20 to 19, lower = higher priority)
# worker_priority -10;  # Higher priority (use with caution)

# CPU affinity (bind workers to specific cores)
# worker_cpu_affinity auto;

events {
    worker_connections 4096;
    use epoll;
    multi_accept on;
}

http {
    # HTTP configuration...
}
</code></pre><hr><h2 id="2-keepalive-connections"><strong>2. Keepalive Connections</strong></h2><p>Keepalive connections giữ connections mở để reuse, giảm overhead của establishing new connections.</p><h3 id="21-client-keepalive"><strong>2.1. Client Keepalive</strong></h3><pre><code class="language-nginx">http {
    # Keepalive timeout (seconds)
    keepalive_timeout 65;  # Default: 75s
    
    # Max requests per connection
    keepalive_requests 100;  # Default: 100
    
    # Disable keepalive cho specific browsers (legacy)
    # keepalive_disable msie6;
    
    server {
        listen 80;
        # Inherits keepalive settings
    }
}
</code></pre><p><strong>Keepalive timeout values:</strong></p><pre><code class="language-nginx"># Short timeout (conserve resources)
keepalive_timeout 30;

# Medium timeout (balanced)
keepalive_timeout 65;

# Long timeout (persistent connections)
keepalive_timeout 120;

# Disable keepalive
keepalive_timeout 0;
</code></pre><p><strong>Keepalive requests:</strong></p><pre><code class="language-nginx"># Allow 100 requests per connection
keepalive_requests 100;

# Higher value for API servers
keepalive_requests 1000;

# Lower value to force connection refresh
keepalive_requests 50;
</code></pre><h3 id="22-upstream-keepalive"><strong>2.2. Upstream Keepalive</strong></h3><p>Keepalive connections to backend servers.</p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com:8080;
    server backend2.example.com:8080;
    
    # Keep 32 idle connections to upstream
    keepalive 32;
    
    # Keepalive timeout
    keepalive_timeout 60s;
    
    # Max requests per connection
    keepalive_requests 100;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        
        # Required for upstream keepalive
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}
</code></pre><p><strong>Upstream keepalive sizing:</strong></p><pre><code class="language-nginx"># Small pool (low traffic)
keepalive 8;

# Medium pool (moderate traffic)
keepalive 32;

# Large pool (high traffic)
keepalive 128;

# Very large pool (very high traffic)
keepalive 256;

# Calculation:
# keepalive = (peak requests per second) / (requests per connection)
# Example: 1000 rps / 100 req/conn = 10 connections needed
</code></pre><h3 id="23-complete-keepalive-configuration"><strong>2.3. Complete Keepalive Configuration</strong></h3><pre><code class="language-nginx">http {
    # Client keepalive
    keepalive_timeout 65;
    keepalive_requests 100;
    
    # Upstream with keepalive
    upstream api_backend {
        server api1.example.com:8080;
        server api2.example.com:8080;
        server api3.example.com:8080;
        
        keepalive 64;
        keepalive_timeout 60s;
        keepalive_requests 1000;
    }
    
    server {
        listen 80;
        server_name example.com;
        
        location /api/ {
            proxy_pass http://api_backend/;
            
            # Enable upstream keepalive
            proxy_http_version 1.1;
            proxy_set_header Connection "";
            
            # Headers
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
}
</code></pre><hr><h2 id="3-buffer-v%C3%A0-timeout-optimization"><strong>3. Buffer và Timeout Optimization</strong></h2><h3 id="31-client-buffers"><strong>3.1. Client Buffers</strong></h3><pre><code class="language-nginx">http {
    # Client body buffer
    client_body_buffer_size 128k;  # Default: 8k|16k
    client_max_body_size 20M;      # Default: 1m
    
    # Client header buffer
    client_header_buffer_size 1k;  # Default: 1k
    large_client_header_buffers 4 8k;  # Default: 4 8k
    
    # Client body in temp file
    client_body_temp_path /var/cache/nginx/client_temp 1 2;
}
</code></pre><p><strong>Buffer sizes explained:</strong></p><pre><code class="language-nginx"># Small files/requests
client_body_buffer_size 16k;
client_max_body_size 1M;

# Medium files/requests (recommended)
client_body_buffer_size 128k;
client_max_body_size 20M;

# Large files/uploads
client_body_buffer_size 256k;
client_max_body_size 100M;

# Very large files (video uploads)
client_body_buffer_size 512k;
client_max_body_size 1G;
</code></pre><h3 id="32-proxy-buffers"><strong>3.2. Proxy Buffers</strong></h3><pre><code class="language-nginx">http {
    server {
        location / {
            proxy_pass http://backend;
            
            # Enable buffering
            proxy_buffering on;  # Default: on
            
            # Buffer size for response headers
            proxy_buffer_size 4k;  # Default: 4k|8k
            
            # Number and size of buffers for response body
            proxy_buffers 8 4k;  # Default: 8 4k|8k
            
            # Max size of buffers busy sending to client
            proxy_busy_buffers_size 8k;  # Default: 8k|16k
            
            # Max size of data buffered from upstream
            proxy_max_temp_file_size 1024m;  # Default: 1024m
            
            # Size of chunks when writing to temp file
            proxy_temp_file_write_size 8k;  # Default: 8k|16k
        }
    }
}
</code></pre><p><strong>Buffer sizing recommendations:</strong></p><pre><code class="language-nginx"># Small responses (API, JSON)
proxy_buffer_size 4k;
proxy_buffers 8 4k;
proxy_busy_buffers_size 8k;

# Medium responses (HTML pages)
proxy_buffer_size 8k;
proxy_buffers 16 8k;
proxy_busy_buffers_size 16k;

# Large responses (images, files)
proxy_buffer_size 16k;
proxy_buffers 32 16k;
proxy_busy_buffers_size 32k;

# Disable buffering for streaming
proxy_buffering off;
</code></pre><h3 id="33-fastcgi-buffers"><strong>3.3. FastCGI Buffers</strong></h3><pre><code class="language-nginx">http {
    server {
        location ~ \.php$ {
            fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
            
            # FastCGI buffering
            fastcgi_buffering on;
            
            # Buffer size for headers
            fastcgi_buffer_size 16k;  # Default: 4k|8k
            
            # Number and size of buffers
            fastcgi_buffers 16 16k;  # Default: 8 4k|8k
            
            # Busy buffers
            fastcgi_busy_buffers_size 32k;
            
            # Temp file settings
            fastcgi_max_temp_file_size 1024m;
            fastcgi_temp_file_write_size 16k;
        }
    }
}
</code></pre><h3 id="34-timeouts"><strong>3.4. Timeouts</strong></h3><pre><code class="language-nginx">http {
    # Client timeouts
    client_body_timeout 12s;     # Default: 60s
    client_header_timeout 12s;   # Default: 60s
    send_timeout 10s;            # Default: 60s
    
    # Keepalive timeout
    keepalive_timeout 65s;       # Default: 75s
    
    server {
        location / {
            proxy_pass http://backend;
            
            # Proxy timeouts
            proxy_connect_timeout 60s;   # Default: 60s
            proxy_send_timeout 60s;      # Default: 60s
            proxy_read_timeout 60s;      # Default: 60s
        }
        
        location ~ \.php$ {
            fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
            
            # FastCGI timeouts
            fastcgi_connect_timeout 60s;
            fastcgi_send_timeout 60s;
            fastcgi_read_timeout 60s;
        }
    }
}
</code></pre><p><strong>Timeout recommendations:</strong></p><pre><code class="language-nginx"># Fast API (quick responses)
proxy_connect_timeout 5s;
proxy_send_timeout 10s;
proxy_read_timeout 10s;

# Normal web application
proxy_connect_timeout 60s;
proxy_send_timeout 60s;
proxy_read_timeout 60s;

# Long-running processes
proxy_connect_timeout 10s;
proxy_send_timeout 300s;
proxy_read_timeout 300s;

# File uploads
client_body_timeout 300s;
proxy_read_timeout 300s;
</code></pre><h3 id="35-complete-buffer-configuration"><strong>3.5. Complete Buffer Configuration</strong></h3><pre><code class="language-nginx">http {
    # Client settings
    client_body_buffer_size 128k;
    client_max_body_size 20M;
    client_header_buffer_size 1k;
    large_client_header_buffers 4 8k;
    client_body_timeout 60s;
    client_header_timeout 60s;
    send_timeout 60s;
    
    # Keepalive
    keepalive_timeout 65s;
    keepalive_requests 100;
    
    # Upstream with optimized buffers
    upstream backend {
        server backend1.example.com:8080;
        server backend2.example.com:8080;
        keepalive 32;
    }
    
    server {
        listen 80;
        server_name example.com;
        
        location / {
            proxy_pass http://backend;
            
            # HTTP version for keepalive
            proxy_http_version 1.1;
            proxy_set_header Connection "";
            
            # Buffering
            proxy_buffering on;
            proxy_buffer_size 8k;
            proxy_buffers 16 8k;
            proxy_busy_buffers_size 16k;
            
            # Timeouts
            proxy_connect_timeout 60s;
            proxy_send_timeout 60s;
            proxy_read_timeout 60s;
            
            # Headers
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
        
        # PHP with optimized buffers
        location ~ \.php$ {
            fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
            include fastcgi_params;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            
            fastcgi_buffering on;
            fastcgi_buffer_size 16k;
            fastcgi_buffers 16 16k;
            fastcgi_busy_buffers_size 32k;
            
            fastcgi_connect_timeout 60s;
            fastcgi_send_timeout 180s;
            fastcgi_read_timeout 180s;
        }
    }
}
</code></pre><hr><h2 id="4-gzip-compression"><strong>4. Gzip Compression</strong></h2><p>Gzip compression giảm bandwidth usage và tăng tốc độ page load.</p><h3 id="41-basic-gzip-configuration"><strong>4.1. Basic Gzip Configuration</strong></h3><pre><code class="language-nginx">http {
    # Enable gzip
    gzip on;
    
    # Compression level (1-9, 6 is recommended balance)
    gzip_comp_level 6;
    
    # Minimum file size to compress
    gzip_min_length 1000;  # bytes
    
    # Compress for all clients
    gzip_proxied any;
    
    # Add Vary: Accept-Encoding header
    gzip_vary on;
    
    # Disable for IE6
    gzip_disable "msie6";
}
</code></pre><h3 id="42-gzip-types"><strong>4.2. Gzip Types</strong></h3><pre><code class="language-nginx">http {
    gzip on;
    gzip_comp_level 6;
    
    # Specify MIME types to compress
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml
        application/xml+rss
        application/xhtml+xml
        application/x-font-ttf
        application/x-font-opentype
        application/vnd.ms-fontobject
        image/svg+xml
        image/x-icon
        application/rss+xml
        application/atom+xml;
    
    # text/html is always compressed by default
}
</code></pre><p><strong>IMPORTANT:</strong> Không compress images đã compressed (jpg, png, gif):</p><pre><code class="language-nginx"># DON'T compress these (already compressed)
# image/jpeg
# image/png
# image/gif
# video/mp4
# application/zip
</code></pre><h3 id="43-compression-levels"><strong>4.3. Compression Levels</strong></h3><pre><code class="language-nginx"># Level 1 - Fastest, least compression
gzip_comp_level 1;

# Level 4 - Good balance (fast)
gzip_comp_level 4;

# Level 6 - Recommended balance
gzip_comp_level 6;

# Level 9 - Maximum compression (slowest, high CPU)
gzip_comp_level 9;

# Benchmark:
# Level 1: ~70% compression, very fast
# Level 6: ~80% compression, balanced
# Level 9: ~82% compression, slow (not worth it)
</code></pre><h3 id="44-gzip-buffers"><strong>4.4. Gzip Buffers</strong></h3><pre><code class="language-nginx">http {
    gzip on;
    
    # Buffers for compression
    gzip_buffers 16 8k;  # 16 buffers of 8k each
    
    # HTTP version (1.1 for proxied content)
    gzip_http_version 1.1;
}
</code></pre><h3 id="45-complete-gzip-configuration"><strong>4.5. Complete Gzip Configuration</strong></h3><pre><code class="language-nginx">http {
    # Gzip settings
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_min_length 1000;
    gzip_disable "msie6";
    gzip_http_version 1.1;
    gzip_buffers 16 8k;
    
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        text/x-component
        application/json
        application/javascript
        application/x-javascript
        application/xml
        application/xml+rss
        application/xhtml+xml
        application/rss+xml
        application/atom+xml
        application/vnd.ms-fontobject
        application/x-font-ttf
        application/x-font-opentype
        font/truetype
        font/opentype
        image/svg+xml
        image/x-icon;
    
    server {
        listen 80;
        server_name example.com;
        
        location / {
            root /var/www/html;
        }
        
        # Static files already compressed - don't compress
        location ~* \.(jpg|jpeg|png|gif|ico|mp4|pdf|zip)$ {
            gzip off;
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
</code></pre><h3 id="46-pre-compressed-files-gzipstatic"><strong>4.6. Pre-compressed Files (gzip_static)</strong></h3><pre><code class="language-nginx"># Serve pre-compressed .gz files if available
http {
    server {
        listen 80;
        root /var/www/html;
        
        location / {
            # Try .gz file first, then original
            gzip_static on;  # Requires ngx_http_gzip_static_module
        }
    }
}

# Pre-compress files:
# gzip -k file.css    # Creates file.css.gz
# gzip -k file.js     # Creates file.js.gz
</code></pre><p><strong>Build script để pre-compress:</strong></p><pre><code class="language-bash">#!/bin/bash
# precompress.sh - Pre-compress static assets

WWW_DIR="/var/www/html"

find "$WWW_DIR" -type f \( -name '*.css' -o -name '*.js' -o -name '*.html' -o -name '*.xml' \) -exec gzip -k -9 {} \;

echo "Pre-compression complete!"
</code></pre><hr><h2 id="5-sendfile-v%C3%A0-tcpnopush"><strong>5. Sendfile và tcp_nopush</strong></h2><h3 id="51-sendfile"><strong>5.1. Sendfile</strong></h3><p>Sendfile cho phép Nginx gửi files trực tiếp từ disk đến network socket mà không copy qua user space.</p><pre><code class="language-nginx">http {
    # Enable sendfile (highly recommended)
    sendfile on;
    
    # Or disable (testing/debugging)
    # sendfile off;
}
</code></pre><p><strong>How sendfile works:</strong></p><pre><code>Without sendfile:
Disk → Kernel → User Space (Nginx) → Kernel → Network
(2 context switches, data copied twice)

With sendfile:
Disk → Kernel → Network
(Direct transfer, no extra copies)
</code></pre><h3 id="52-tcpnopush"><strong>5.2. tcp_nopush</strong></h3><p>tcp_nopush sends HTTP response headers và file content trong cùng packet.</p><pre><code class="language-nginx">http {
    sendfile on;
    tcp_nopush on;  # Use with sendfile
    
    # tcp_nopush works only when sendfile is on
}
</code></pre><p><strong>tcp_nopush benefits:</strong></p><pre><code>Without tcp_nopush:
Packet 1: HTTP headers
Packet 2: File chunk 1
Packet 3: File chunk 2
...

With tcp_nopush:
Packet 1: HTTP headers + File chunk 1
Packet 2: File chunk 2
...
(Fewer packets, better efficiency)
</code></pre><h3 id="53-tcpnodelay"><strong>5.3. tcp_nodelay</strong></h3><p>tcp_nodelay disables Nagle's algorithm (good for keepalive connections).</p><pre><code class="language-nginx">http {
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;  # Enable for keepalive
    
    keepalive_timeout 65;
}
</code></pre><p><strong>When to use:</strong></p><pre><code class="language-nginx"># Static files - use tcp_nopush
location /static/ {
    sendfile on;
    tcp_nopush on;
}

# Dynamic content / API - use tcp_nodelay
location /api/ {
    tcp_nodelay on;
    proxy_pass http://backend;
}

# Both for general use (recommended)
http {
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
}
</code></pre><h3 id="54-complete-sendfile-configuration"><strong>5.4. Complete Sendfile Configuration</strong></h3><pre><code class="language-nginx">http {
    # File transfer optimization
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    
    # Sendfile max chunk
    sendfile_max_chunk 512k;  # Default: 0 (unlimited)
    
    server {
        listen 80;
        server_name example.com;
        
        # Static files
        location /static/ {
            root /var/www;
            
            # Optimize for static files
            sendfile on;
            tcp_nopush on;
            
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
        
        # Dynamic content
        location / {
            proxy_pass http://backend;
            
            # Optimize for dynamic content
            tcp_nodelay on;
        }
    }
}
</code></pre><hr><h2 id="6-open-file-cache"><strong>6. Open File Cache</strong></h2><p>Open file cache lưu file descriptors và metadata, giảm số lần open/close files.</p><h3 id="61-basic-open-file-cache"><strong>6.1. Basic Open File Cache</strong></h3><pre><code class="language-nginx">http {
    # Enable open file cache
    open_file_cache max=10000 inactive=60s;
    
    # Validate cache every 30s
    open_file_cache_valid 30s;
    
    # Minimum uses before caching
    open_file_cache_min_uses 2;
    
    # Cache errors (file not found)
    open_file_cache_errors on;
}
</code></pre><h3 id="62-cache-parameters"><strong>6.2. Cache Parameters</strong></h3><pre><code class="language-nginx">http {
    # max=N: Maximum cached entries
    # inactive=T: Remove entry if not accessed for T time
    open_file_cache max=10000 inactive=60s;
    
    # Revalidate cache every 30s
    open_file_cache_valid 30s;
    
    # Cache entry after 2 uses
    open_file_cache_min_uses 2;
    
    # Cache file not found errors
    open_file_cache_errors on;
}
</code></pre><p><strong>Parameter explanation:</strong></p><pre><code class="language-nginx"># Small cache (low traffic)
open_file_cache max=1000 inactive=30s;
open_file_cache_valid 30s;
open_file_cache_min_uses 2;

# Medium cache (moderate traffic)
open_file_cache max=10000 inactive=60s;
open_file_cache_valid 60s;
open_file_cache_min_uses 2;

# Large cache (high traffic)
open_file_cache max=50000 inactive=120s;
open_file_cache_valid 60s;
open_file_cache_min_uses 1;
</code></pre><h3 id="63-what-gets-cached"><strong>6.3. What Gets Cached?</strong></h3><pre><code>Open file cache stores:
- File descriptors (handles)
- File sizes
- Modification times
- Directory existence
- File lookup errors (not found)

Does NOT cache:
- File content (use proxy_cache for that)
</code></pre><h3 id="64-complete-open-file-cache-configuration"><strong>6.4. Complete Open File Cache Configuration</strong></h3><pre><code class="language-nginx">http {
    # Open file cache
    open_file_cache max=10000 inactive=60s;
    open_file_cache_valid 30s;
    open_file_cache_min_uses 2;
    open_file_cache_errors on;
    
    server {
        listen 80;
        server_name example.com;
        root /var/www/html;
        
        # Static files benefit most from open file cache
        location /static/ {
            # Inherits open_file_cache from http
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
        
        location / {
            try_files $uri $uri/ =404;
        }
    }
}
</code></pre><hr><h2 id="7-complete-performance-configuration"><strong>7. Complete Performance Configuration</strong></h2><h3 id="71-optimal-nginxconf"><strong>7.1. Optimal nginx.conf</strong></h3><pre><code class="language-nginx"># /etc/nginx/nginx.conf

user nginx;
worker_processes auto;
worker_rlimit_nofile 65535;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 4096;
    use epoll;
    multi_accept on;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    
    # Logging
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
    
    access_log /var/log/nginx/access.log main;
    
    # Basic settings
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    server_tokens off;
    
    # Timeouts
    client_body_timeout 12s;
    client_header_timeout 12s;
    send_timeout 10s;
    keepalive_timeout 65s;
    keepalive_requests 100;
    
    # Buffer sizes
    client_body_buffer_size 128k;
    client_max_body_size 20M;
    client_header_buffer_size 1k;
    large_client_header_buffers 4 8k;
    
    # Open file cache
    open_file_cache max=10000 inactive=60s;
    open_file_cache_valid 30s;
    open_file_cache_min_uses 2;
    open_file_cache_errors on;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_min_length 1000;
    gzip_disable "msie6";
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml
        application/xml+rss
        font/truetype
        font/opentype
        image/svg+xml;
    
    # Rate limiting zones
    limit_req_zone $binary_remote_addr zone=general:10m rate=10r/s;
    limit_conn_zone $binary_remote_addr zone=addr:10m;
    
    # Include configs
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
</code></pre><h3 id="72-optimized-site-configuration"><strong>7.2. Optimized Site Configuration</strong></h3><pre><code class="language-nginx"># /etc/nginx/sites-available/example.com

# Upstream with keepalive
upstream backend {
    least_conn;
    
    server backend1.example.com:8080 max_fails=3 fail_timeout=30s;
    server backend2.example.com:8080 max_fails=3 fail_timeout=30s;
    server backend3.example.com:8080 max_fails=3 fail_timeout=30s;
    
    keepalive 64;
    keepalive_timeout 60s;
    keepalive_requests 1000;
}

server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    return 301 https://example.com$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    root /var/www/example.com/public;
    index index.html index.htm;
    
    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_stapling on;
    ssl_stapling_verify on;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    
    # Rate limiting
    limit_req zone=general burst=20 nodelay;
    limit_conn addr 10;
    
    # Main location
    location / {
        try_files $uri $uri/ =404;
    }
    
    # API backend with optimized settings
    location /api/ {
        proxy_pass http://backend/;
        
        # HTTP version
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        # Headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Buffering
        proxy_buffering on;
        proxy_buffer_size 8k;
        proxy_buffers 16 8k;
        proxy_busy_buffers_size 16k;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        # Caching
        proxy_cache api_cache;
        proxy_cache_valid 200 5m;
        proxy_cache_use_stale error timeout updating;
        proxy_cache_lock on;
        
        add_header X-Cache-Status $upstream_cache_status;
    }
    
    # Static assets - highly optimized
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
        
        # Open file cache helps here
        sendfile on;
        tcp_nopush on;
    }
    
    location ~* \.(css|js)$ {
        expires 1M;
        add_header Cache-Control "public";
        access_log off;
        
        sendfile on;
        tcp_nopush on;
        gzip_static on;  # If pre-compressed files exist
    }
    
    location ~* \.(woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public";
        add_header Access-Control-Allow-Origin "*";
        access_log off;
    }
    
    # Deny hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
</code></pre><hr><h2 id="8-monitoring-v%C3%A0-benchmarking"><strong>8. Monitoring và Benchmarking</strong></h2><h3 id="81-nginx-status-module"><strong>8.1. Nginx Status Module</strong></h3><pre><code class="language-nginx">server {
    listen 8080;
    server_name localhost;
    
    location /nginx_status {
        stub_status;
        access_log off;
        allow 127.0.0.1;
        allow 10.0.0.0/8;
        deny all;
    }
}
</code></pre><p><strong>Check status:</strong></p><pre><code class="language-bash">curl http://localhost:8080/nginx_status

# Output:
# Active connections: 291
# server accepts handled requests
#  16630948 16630948 31070465
# Reading: 6 Writing: 179 Waiting: 106
</code></pre><p><strong>Explanation:</strong></p><ul><li>Active connections: Current open connections</li><li>server accepts: Total accepted connections</li><li>handled: Total handled connections</li><li>requests: Total requests</li><li>Reading: Reading request headers</li><li>Writing: Writing response to clients</li><li>Waiting: Keep-alive connections (idle)</li></ul><h3 id="82-benchmarking-tools"><strong>8.2. Benchmarking Tools</strong></h3><p><strong>Apache Bench (ab):</strong></p><pre><code class="language-bash"># Simple benchmark
ab -n 1000 -c 10 http://example.com/

# With keepalive
ab -n 1000 -c 10 -k http://example.com/

# POST request
ab -n 1000 -c 10 -p data.json -T application/json http://example.com/api/

# Parameters:
# -n: Total requests
# -c: Concurrent requests
# -k: Enable keepalive
# -p: POST data file
# -T: Content-Type header
</code></pre><p><strong>wrk (Modern alternative):</strong></p><pre><code class="language-bash"># Install wrk
sudo apt install wrk

# Basic benchmark
wrk -t4 -c100 -d30s http://example.com/

# With custom script
wrk -t4 -c100 -d30s -s post.lua http://example.com/api/

# Parameters:
# -t: Threads
# -c: Connections
# -d: Duration
# -s: Lua script
</code></pre><p><strong>siege:</strong></p><pre><code class="language-bash"># Install siege
sudo apt install siege

# Benchmark
siege -c 10 -t 30s http://example.com/

# From URL file
siege -c 10 -t 30s -f urls.txt

# Parameters:
# -c: Concurrent users
# -t: Duration
# -f: URL file
</code></pre><h3 id="83-performance-metrics"><strong>8.3. Performance Metrics</strong></h3><p><strong>Monitor script:</strong></p><pre><code class="language-bash">#!/bin/bash
# monitor_nginx.sh

while true; do
    clear
    echo "==================================="
    echo "Nginx Performance Monitor"
    echo "==================================="
    echo "Time: $(date)"
    echo ""
    
    # Nginx status
    echo "Nginx Status:"
    curl -s http://localhost:8080/nginx_status
    echo ""
    
    # Worker processes
    echo "Worker Processes:"
    ps aux | grep nginx | grep -v grep
    echo ""
    
    # Memory usage
    echo "Memory Usage:"
    ps aux | grep nginx | awk '{sum+=$6} END {print "Total: " sum/1024 " MB"}'
    echo ""
    
    # Open files
    echo "Open Files:"
    lsof -i :80 | wc -l
    echo ""
    
    # Connections
    echo "TCP Connections:"
    netstat -an | grep :80 | wc -l
    echo ""
    
    sleep 5
done
</code></pre><h3 id="84-system-level-monitoring"><strong>8.4. System-level Monitoring</strong></h3><pre><code class="language-bash"># CPU usage
top -b -n 1 | grep nginx

# Memory usage
ps aux | grep nginx

# Network connections
netstat -an | grep :80 | wc -l

# Open files per process
lsof -p $(pgrep nginx | head -1) | wc -l

# System load
uptime

# Disk I/O
iostat -x 1

# Network I/O
iftop
</code></pre><h3 id="85-log-analysis"><strong>8.5. Log Analysis</strong></h3><p><strong>Parse access log for metrics:</strong></p><pre><code class="language-bash">#!/bin/bash
# analyze_logs.sh

LOG_FILE="/var/log/nginx/access.log"

echo "Nginx Log Analysis"
echo "=================="

# Total requests
echo "Total requests: $(wc -l &lt; $LOG_FILE)"

# Requests per second (last minute)
echo "Requests/sec (last minute):"
awk -v date="$(date -d '1 minute ago' '+%d/%b/%Y:%H:%M')" \
    '$4 &gt; "["date' $LOG_FILE | wc -l

# Top 10 URLs
echo -e "\nTop 10 URLs:"
awk '{print $7}' $LOG_FILE | sort | uniq -c | sort -rn | head -10

# Top 10 IPs
echo -e "\nTop 10 IPs:"
awk '{print $1}' $LOG_FILE | sort | uniq -c | sort -rn | head -10

# Status code distribution
echo -e "\nStatus Codes:"
awk '{print $9}' $LOG_FILE | sort | uniq -c | sort -rn

# Average response time (if logged)
echo -e "\nAverage Response Time:"
awk '{print $NF}' $LOG_FILE | \
    awk '{sum+=$1; count++} END {print sum/count " seconds"}'
</code></pre><hr><h2 id="9-troubleshooting-performance-issues"><strong>9. Troubleshooting Performance Issues</strong></h2><h3 id="91-high-cpu-usage"><strong>9.1. High CPU Usage</strong></h3><p><strong>Diagnosis:</strong></p><pre><code class="language-bash"># Check worker CPU
top -b -n 1 | grep nginx

# Check processes
ps aux | grep nginx | grep -v grep

# Detailed CPU per worker
pidstat -p $(pgrep nginx | tr '\n' ',') 1
</code></pre><p><strong>Common causes:</strong></p><ol><li>Too many workers</li><li>High compression level</li><li>Complex regex/rewrite rules</li><li>SSL/TLS overhead</li></ol><p><strong>Solutions:</strong></p><pre><code class="language-nginx"># Reduce workers if too many
worker_processes auto;  # Instead of manual high number

# Lower compression level
gzip_comp_level 4;  # Instead of 9

# Optimize regex
location ~ \.php$ {  # Simple regex
    # Instead of: location ~* ^/([a-z]+)/([0-9]+)\.php$
}

# SSL session cache
ssl_session_cache shared:SSL:10m;
</code></pre><h3 id="92-high-memory-usage"><strong>9.2. High Memory Usage</strong></h3><p><strong>Diagnosis:</strong></p><pre><code class="language-bash"># Memory per process
ps aux | grep nginx

# Total memory
ps aux | grep nginx | awk '{sum+=$6} END {print sum/1024 " MB"}'

# Check buffers
sudo nginx -T | grep buffer
</code></pre><p><strong>Solutions:</strong></p><pre><code class="language-nginx"># Reduce buffer sizes
client_body_buffer_size 128k;  # Instead of 1M
proxy_buffers 8 4k;  # Instead of 32 16k

# Reduce workers if needed
worker_processes 4;  # Instead of auto on 32-core machine

# Limit connections per worker
worker_connections 2048;  # Instead of 10000
</code></pre><h3 id="93-too-many-open-files"><strong>9.3. Too Many Open Files</strong></h3><p><strong>Diagnosis:</strong></p><pre><code class="language-bash"># Check limit
ulimit -n

# Check usage
lsof -p $(pgrep nginx | head -1) | wc -l

# Check system limit
cat /proc/sys/fs/file-max
</code></pre><p><strong>Solutions:</strong></p><pre><code class="language-bash"># Increase limits
sudo nano /etc/security/limits.conf
# Add:
nginx soft nofile 65536
nginx hard nofile 65536

# Nginx config
worker_rlimit_nofile 65535;
</code></pre><h3 id="94-slow-response-times"><strong>9.4. Slow Response Times</strong></h3><p><strong>Diagnosis:</strong></p><pre><code class="language-bash"># Check upstream response times
tail -f /var/log/nginx/access.log | grep -oP 'upstream_response_time=\K[^ ]+'

# Test backend directly
time curl http://backend:8080/

# Check network
ping backend
traceroute backend
</code></pre><p><strong>Solutions:</strong></p><pre><code class="language-nginx"># Increase timeouts if backend is slow
proxy_read_timeout 180s;
proxy_connect_timeout 10s;

# Enable caching
proxy_cache my_cache;
proxy_cache_valid 200 10m;

# Use stale content
proxy_cache_use_stale error timeout updating;
</code></pre><h3 id="95-connection-refused-errors"><strong>9.5. Connection Refused Errors</strong></h3><p><strong>Diagnosis:</strong></p><pre><code class="language-bash"># Check worker connections
curl http://localhost:8080/nginx_status

# Check limits
ulimit -n

# Check backend connectivity
telnet backend 8080
</code></pre><p><strong>Solutions:</strong></p><pre><code class="language-nginx"># Increase worker connections
events {
    worker_connections 4096;  # Increase from 1024
}

# Increase system limits
# See "Too Many Open Files" section

# Add more workers
worker_processes auto;
</code></pre><hr><h2 id="10-best-practices-summary"><strong>10. Best Practices Summary</strong></h2><h3 id="101-worker-configuration"><strong>10.1. Worker Configuration</strong></h3><pre><code class="language-nginx"># Optimal settings
worker_processes auto;
worker_rlimit_nofile 65535;

events {
    worker_connections 4096;
    use epoll;
    multi_accept on;
}
</code></pre><h3 id="102-keepalive"><strong>10.2. Keepalive</strong></h3><pre><code class="language-nginx"># Client keepalive
keepalive_timeout 65s;
keepalive_requests 100;

# Upstream keepalive
upstream backend {
    server backend1:8080;
    keepalive 64;
}

# Enable in proxy
proxy_http_version 1.1;
proxy_set_header Connection "";
</code></pre><h3 id="103-buffers-and-timeouts"><strong>10.3. Buffers and Timeouts</strong></h3><pre><code class="language-nginx"># Reasonable defaults
client_body_buffer_size 128k;
client_max_body_size 20M;

proxy_buffering on;
proxy_buffer_size 8k;
proxy_buffers 16 8k;

proxy_connect_timeout 60s;
proxy_read_timeout 60s;
</code></pre><h3 id="104-compression"><strong>10.4. Compression</strong></h3><pre><code class="language-nginx">gzip on;
gzip_vary on;
gzip_comp_level 6;
gzip_min_length 1000;
gzip_types text/plain text/css application/json application/javascript;
</code></pre><h3 id="105-file-operations"><strong>10.5. File Operations</strong></h3><pre><code class="language-nginx">sendfile on;
tcp_nopush on;
tcp_nodelay on;

open_file_cache max=10000 inactive=60s;
open_file_cache_valid 30s;
open_file_cache_min_uses 2;
</code></pre><h3 id="106-monitoring"><strong>10.6. Monitoring</strong></h3><pre><code class="language-nginx"># Enable stub_status
server {
    listen 8080;
    location /nginx_status {
        stub_status;
        allow 127.0.0.1;
        deny all;
    }
}

# Regular monitoring
# - CPU and memory usage
# - Connection counts
# - Response times
# - Error rates
</code></pre><hr><h2 id="11-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>11. Bài tập Thực hành</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-worker-optimization"><strong>Bài tập 1: Worker Optimization</strong></h3><ol><li>Check số CPU cores trên server</li><li>Configure worker_processes và worker_connections</li><li>Benchmark before và after</li><li>Compare results</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-buffer-tuning"><strong>Bài tập 2: Buffer Tuning</strong></h3><ol><li>Setup backend application</li><li>Test với default buffers</li><li>Optimize buffer sizes</li><li>Measure performance improvement</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-3-compression-testing"><strong>Bài tập 3: Compression Testing</strong></h3><ol><li>Disable gzip</li><li>Benchmark response size và time</li><li>Enable gzip với level 6</li><li>Compare compression ratio và speed</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-keepalive-impact"><strong>Bài tập 4: Keepalive Impact</strong></h3><ol><li>Test với keepalive off</li><li>Enable keepalive</li><li>Add upstream keepalive</li><li>Benchmark connection overhead</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-complete-optimization"><strong>Bài tập 5: Complete Optimization</strong></h3><ol><li>Start with default Nginx config</li><li>Apply all optimizations từ bài học</li><li>Run comprehensive benchmarks</li><li>Document performance gains</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-6-load-testing"><strong>Bài tập 6: Load Testing</strong></h3><ol><li>Setup test environment</li><li>Use ab hoặc wrk để load test</li><li>Monitor system resources</li><li>Identify bottlenecks</li><li>Apply optimizations</li><li>Re-test</li></ol><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>Tổng kết</strong></h2><p>Trong bài này, bạn đã học:</p><ul><li>✅ Worker processes và connections optimization</li><li>✅ Keepalive connections configuration</li><li>✅ Buffer và timeout tuning</li><li>✅ Gzip compression setup</li><li>✅ Sendfile, tcp_nopush, tcp_nodelay</li><li>✅ Open file cache configuration</li><li>✅ Performance monitoring và benchmarking</li><li>✅ Troubleshooting common issues</li></ul><p><strong>Performance gains có thể đạt được:</strong></p><ul><li>2-5x throughput increase với proper worker config</li><li>20-50% bandwidth reduction với gzip</li><li>30-70% faster file serving với sendfile + cache</li><li>Significant latency reduction với keepalive</li></ul><p><strong>Bài tiếp theo:</strong> Chúng ta sẽ tìm hiểu về Security - rate limiting, IP blocking, authentication, WAF integration, DDoS protection và secure headers để bảo vệ Nginx server trong production environment.</p>
