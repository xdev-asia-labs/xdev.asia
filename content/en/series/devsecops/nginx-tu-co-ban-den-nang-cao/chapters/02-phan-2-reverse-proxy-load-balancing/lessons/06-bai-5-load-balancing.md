---
id: 019c9617-fc80-726d-b246-cc3af34c1a8b
title: 'Lesson 5: Load Balancing'
slug: bai-5-load-balancing
description: >-
  A lesson on Load Balancing in Nginx — algorithms (round-robin, least_conn,
  ip_hash, hash), detailed upstream configuration, backup servers, weights,
  sticky sessions, and health checks. Guide to setting up a load balancer for
  high-availability and performance optimization with real-world examples.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 5
section_title: "Part 2: Reverse Proxy & Load Balancing"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx from Basics to Advanced
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-155" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-155)"/>

  <!-- Decorations -->
  <g>
    <circle cx="689" cy="217" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="778" cy="106" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="867" cy="255" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="956" cy="144" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="33" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="247" x2="1100" y2="327" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="277" x2="1050" y2="347" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="983.3730669589464,126 983.3730669589464,168 947,189 910.6269330410536,168 910.6269330410536,126.00000000000001 947,105" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="148" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Lesson 5</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 5: Load Balancing</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx from Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Reverse Proxy &amp; Load Balancing</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-c%C3%A1c-thu%E1%BA%ADt-to%C3%A1n-load-balancing"><strong>1. Load Balancing Algorithms</strong></h2><p>Load balancing is a technique for distributing traffic across multiple servers to optimize resource usage, increase throughput, reduce latency, and ensure high availability.</p><h3 id="11-round-robin-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh"><strong>1.1. Round-Robin (Default)</strong></h3><p>Round-robin distributes requests sequentially to each server in rotation.</p><p><strong>Configuration:</strong></p><pre><code class="language-nginx">upstream backend {
    # Round-robin is the default, no declaration needed
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    server_name example.com;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><p><strong>How it works:</strong></p><pre><code>Request 1 → backend1
Request 2 → backend2
Request 3 → backend3
Request 4 → backend1 (repeats)
Request 5 → backend2
Request 6 → backend3
...
</code></pre><p><strong>Advantages:</strong></p><ul><li>Simple, easy to implement</li><li>Distributes requests evenly</li><li>No state/session tracking required</li></ul><p><strong>Disadvantages:</strong></p><ul><li>Does not account for current server load</li><li>Not suitable if servers have different capacities</li><li>Does not maintain session affinity</li></ul><p><strong>Use cases:</strong></p><ul><li>Stateless applications</li><li>Servers with identical configuration</li><li>Simple load distribution</li></ul><p><strong>Detailed example:</strong></p><pre><code class="language-nginx">upstream web_backend {
    server web1.example.com:8080;
    server web2.example.com:8080;
    server web3.example.com:8080;
    server web4.example.com:8080;
}

server {
    listen 80;
    server_name www.example.com;
    
    access_log /var/log/nginx/loadbalancer.log;
    
    location / {
        proxy_pass http://web_backend;
        
        # Standard headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Add backend server info to response header
        add_header X-Upstream-Server $upstream_addr always;
    }
}
</code></pre><h3 id="12-least-connections-leastconn"><strong>1.2. Least Connections (least_conn)</strong></h3><p>Least connections routes requests to the server with the fewest active connections.</p><p><strong>Configuration:</strong></p><pre><code class="language-nginx">upstream backend {
    least_conn;  # Enable least connections algorithm
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><p><strong>How it works:</strong></p><pre><code>Initial state:
backend1: 0 connections
backend2: 0 connections
backend3: 0 connections

Request 1 → backend1 (0 connections) → backend1: 1 connection
Request 2 → backend2 (0 connections) → backend2: 1 connection
Request 3 → backend3 (0 connections) → backend3: 1 connection

backend1 finishes → backend1: 0 connections
Request 4 → backend1 (0 connections, least)

backend2 still processing: 1 connection
backend3 still processing: 1 connection
Request 5 → backend1 (0 connections, still least)
</code></pre><p><strong>Advantages:</strong></p><ul><li>Better load distribution when requests have varying processing times</li><li>Automatically adjusts for busy/idle servers</li><li>Good for long-lived connections</li></ul><p><strong>Disadvantages:</strong></p><ul><li>Higher overhead than round-robin (must track connections)</li><li>Does not maintain session affinity</li></ul><p><strong>Use cases:</strong></p><ul><li>Applications with variable request processing time</li><li>Long-lived connections (streaming, downloads)</li><li>Servers with different capacities</li></ul><p><strong>Example with monitoring:</strong></p><pre><code class="language-nginx">upstream api_backend {
    least_conn;
    
    # Server configurations
    server api1.example.com:3000 max_fails=3 fail_timeout=30s;
    server api2.example.com:3000 max_fails=3 fail_timeout=30s;
    server api3.example.com:3000 max_fails=3 fail_timeout=30s;
    
    # Keep connections alive
    keepalive 32;
    keepalive_timeout 60s;
}

server {
    listen 80;
    server_name api.example.com;
    
    location / {
        proxy_pass http://api_backend;
        
        # HTTP 1.1 for keepalive
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        # Headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        
        # Add connection count header (for debugging)
        add_header X-Upstream-Connections $upstream_response_length;
    }
}
</code></pre><h3 id="13-ip-hash-iphash"><strong>1.3. IP Hash (ip_hash)</strong></h3><p>IP hash routes requests from the same client IP to the same server (sticky sessions).</p><p><strong>Configuration:</strong></p><pre><code class="language-nginx">upstream backend {
    ip_hash;  # Enable IP-based sticky sessions
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><p><strong>How it works:</strong></p><pre><code>Client IP: 192.168.1.100
Hash(192.168.1.100) → backend2
→ All requests from 192.168.1.100 go to backend2

Client IP: 192.168.1.101
Hash(192.168.1.101) → backend1
→ All requests from 192.168.1.101 go to backend1

Client IP: 192.168.1.102
Hash(192.168.1.102) → backend3
→ All requests from 192.168.1.102 go to backend3
</code></pre><p><strong>Advantages:</strong></p><ul><li>Session affinity (same client → same server)</li><li>No need for shared session storage</li><li>Simple and efficient</li></ul><p><strong>Disadvantages:</strong></p><ul><li>Uneven distribution with few clients</li><li>Does not work well behind NAT/proxy</li><li>Server down → sessions lost</li></ul><p><strong>Use cases:</strong></p><ul><li>Session-based applications</li><li>Applications that need to maintain state</li><li>Shopping carts, user sessions</li></ul><p><strong>Important notes on ip_hash:</strong></p><pre><code class="language-nginx">upstream backend {
    ip_hash;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
    
    # DO NOT use weight with ip_hash
    # server backend1.example.com weight=3;  # ← Wrong!
    
    # CAN use backup
    server backend4.example.com backup;
    
    # CAN mark down
    server backend5.example.com down;
}
</code></pre><p><strong>Example with session-based app:</strong></p><pre><code class="language-nginx">upstream session_backend {
    ip_hash;
    
    server session1.example.com:8080 max_fails=2 fail_timeout=30s;
    server session2.example.com:8080 max_fails=2 fail_timeout=30s;
    server session3.example.com:8080 max_fails=2 fail_timeout=30s;
}

server {
    listen 80;
    server_name app.example.com;
    
    location / {
        proxy_pass http://session_backend;
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        
        # Cookie-based backup (if IP hash fails)
        proxy_set_header Cookie $http_cookie;
        
        # Session timeout
        proxy_read_timeout 3600s;
        proxy_send_timeout 3600s;
    }
}
</code></pre><h3 id="14-generic-hash-hash"><strong>1.4. Generic Hash (hash)</strong></h3><p>Generic hash allows hashing based on any variable.</p><p><strong>Basic configuration:</strong></p><pre><code class="language-nginx">upstream backend {
    hash $request_uri consistent;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

# Same URI → Same server
# /api/users → always backend2
# /api/products → always backend1
</code></pre><p><strong>Hash based on different variables:</strong></p><pre><code class="language-nginx"># 1. Hash by URI (cache-friendly)
upstream cache_backend {
    hash $request_uri consistent;
    
    server cache1.example.com;
    server cache2.example.com;
    server cache3.example.com;
}

# 2. Hash by cookie
upstream cookie_backend {
    hash $cookie_sessionid consistent;
    
    server app1.example.com;
    server app2.example.com;
}

# 3. Hash by custom header
upstream custom_backend {
    hash $http_x_tenant_id consistent;
    
    server tenant1.example.com;
    server tenant2.example.com;
}

# 4. Hash by query parameter
upstream param_backend {
    hash $arg_user_id consistent;
    
    server user1.example.com;
    server user2.example.com;
}
</code></pre><p><strong>Consistent hashing:</strong></p><pre><code class="language-nginx">upstream backend {
    # consistent = minimize redistribution when server added/removed
    hash $request_uri consistent;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

# Without consistent:
# Add/remove server → rehash all keys

# With consistent:
# Add/remove server → only a portion of keys are rehashed
</code></pre><p><strong>Advantages:</strong></p><ul><li>Flexible (hash by any variable)</li><li>Consistent hashing reduces cache invalidation</li><li>Good for caching strategy</li></ul><p><strong>Disadvantages:</strong></p><ul><li>More complex than other methods</li><li>Need to understand distribution of hash key</li></ul><p><strong>Use cases:</strong></p><ul><li>Caching layers (CDN, proxy cache)</li><li>Multi-tenant applications</li><li>Sharding strategy</li></ul><p><strong>Example with caching:</strong></p><pre><code class="language-nginx">upstream cache_servers {
    hash $request_uri consistent;
    
    server cache1.example.com:6379;
    server cache2.example.com:6379;
    server cache3.example.com:6379;
    server cache4.example.com:6379;
}

server {
    listen 80;
    server_name cdn.example.com;
    
    location /images/ {
        proxy_pass http://cache_servers;
        
        # Caching headers
        proxy_cache_valid 200 1d;
        add_header X-Cache-Status $upstream_cache_status;
        add_header X-Cache-Server $upstream_addr;
    }
}
</code></pre><h3 id="15-random"><strong>1.5. Random</strong></h3><p>The Random method selects a server randomly (with optional weights).</p><p><strong>Configuration:</strong></p><pre><code class="language-nginx">upstream backend {
    random;  # or: random two least_conn;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}
</code></pre><p><strong>Random with least_conn:</strong></p><pre><code class="language-nginx">upstream backend {
    # Pick 2 random servers, then select the one with least connections
    random two least_conn;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
    server backend4.example.com;
}
</code></pre><p><strong>Advantages:</strong></p><ul><li>Simple</li><li>Good distribution with many servers</li><li>Low overhead</li></ul><p><strong>Disadvantages:</strong></p><ul><li>Not predictable</li><li>Does not maintain session affinity</li></ul><p><strong>Use cases:</strong></p><ul><li>Large server pools</li><li>Stateless applications</li><li>When predictability is not required</li></ul><hr><h2 id="2-c%E1%BA%A5u-h%C3%ACnh-upstream-blocks-chi-ti%E1%BA%BFt"><strong>2. Detailed Upstream Block Configuration</strong></h2><h3 id="21-basic-upstream-configuration"><strong>2.1. Basic Upstream Configuration</strong></h3><pre><code class="language-nginx">upstream backend {
    server backend1.example.com:8080;
    server backend2.example.com:8080;
    server backend3.example.com:8080;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><h3 id="22-server-v%E1%BB%9Bi-multiple-ports"><strong>2.2. Server with Multiple Ports</strong></h3><pre><code class="language-nginx">upstream multi_port_backend {
    server backend.example.com:8080;
    server backend.example.com:8081;
    server backend.example.com:8082;
}
</code></pre><h3 id="23-unix-socket-connections"><strong>2.3. Unix Socket Connections</strong></h3><pre><code class="language-nginx">upstream socket_backend {
    server unix:/var/run/app1.sock;
    server unix:/var/run/app2.sock;
    server unix:/var/run/app3.sock;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://socket_backend;
    }
}
</code></pre><h3 id="24-ipv6-support"><strong>2.4. IPv6 Support</strong></h3><pre><code class="language-nginx">upstream ipv6_backend {
    server [2001:db8::1]:8080;
    server [2001:db8::2]:8080;
    server [2001:db8::3]:8080;
}
</code></pre><h3 id="25-mixed-configuration"><strong>2.5. Mixed Configuration</strong></h3><pre><code class="language-nginx">upstream mixed_backend {
    # TCP servers
    server backend1.example.com:8080;
    server 192.168.1.100:8080;
    
    # Unix sockets
    server unix:/var/run/app.sock;
    
    # IPv6
    server [2001:db8::1]:8080;
}
</code></pre><h3 id="26-upstream-zone-nginx-plus-shared-memory"><strong>2.6. Upstream Zone (Nginx Plus / Shared Memory)</strong></h3><pre><code class="language-nginx">upstream backend {
    zone backend_zone 64k;  # Shared memory zone
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

# Zone enables:
# - Dynamic reconfiguration
# - Shared statistics
# - Runtime modifications
</code></pre><hr><h2 id="3-backup-servers-v%C3%A0-weight"><strong>3. Backup Servers and Weights</strong></h2><h3 id="31-weight-tr%E1%BB%8Dng-s%E1%BB%91"><strong>3.1. Weight</strong></h3><p>Weight determines the proportion of requests each server receives.</p><p><strong>Basic configuration:</strong></p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com weight=3;  # 60% traffic
    server backend2.example.com weight=1;  # 20% traffic
    server backend3.example.com weight=1;  # 20% traffic
}

# Total weight = 3 + 1 + 1 = 5
# backend1: 3/5 = 60%
# backend2: 1/5 = 20%
# backend3: 1/5 = 20%
</code></pre><p><strong>Use case 1: Different server capacities</strong></p><pre><code class="language-nginx">upstream capacity_backend {
    # Large server - handle 50% traffic
    server large.example.com weight=5;
    
    # Medium servers - 25% each
    server medium1.example.com weight=2.5;
    server medium2.example.com weight=2.5;
}
</code></pre><p><strong>Use case 2: Canary deployment</strong></p><pre><code class="language-nginx">upstream canary_backend {
    # Production servers - 90% traffic
    server prod1.example.com weight=45;
    server prod2.example.com weight=45;
    
    # Canary server - 10% traffic
    server canary.example.com weight=10;
}

server {
    listen 80;
    server_name app.example.com;
    
    location / {
        proxy_pass http://canary_backend;
        
        # Log which server handled request
        add_header X-Upstream-Server $upstream_addr always;
    }
}
</code></pre><p><strong>Use case 3: Blue-green deployment</strong></p><pre><code class="language-nginx">upstream bluegreen_backend {
    # Blue (current) - 100% initially
    server blue.example.com weight=10;
    
    # Green (new) - 0% initially
    server green.example.com weight=0;
}

# Gradual migration:
# Step 1: weight=10 / weight=0  (100% blue)
# Step 2: weight=9  / weight=1  (90% blue, 10% green)
# Step 3: weight=5  / weight=5  (50% each)
# Step 4: weight=1  / weight=9  (10% blue, 90% green)
# Step 5: weight=0  / weight=10 (100% green)
</code></pre><p><strong>Weight with least_conn:</strong></p><pre><code class="language-nginx">upstream weighted_leastconn {
    least_conn;
    
    # Weights affect probability, not strict ratio
    server backend1.example.com weight=3;
    server backend2.example.com weight=1;
}

# Server with higher weight is preferred,
# but least_conn is still considered
</code></pre><p><strong>IMPORTANT: Weight does not work with ip_hash</strong></p><pre><code class="language-nginx">upstream bad_config {
    ip_hash;
    
    # Weight is ignored with ip_hash!
    server backend1.example.com weight=3;  # ← No effect!
    server backend2.example.com weight=1;
}
</code></pre><h3 id="32-backup-servers"><strong>3.2. Backup Servers</strong></h3><p>Backup servers only receive traffic when all primary servers are down.</p><p><strong>Basic configuration:</strong></p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
    
    # Backup servers
    server backup1.example.com backup;
    server backup2.example.com backup;
}
</code></pre><p><strong>How it works:</strong></p><pre><code>Normal operation:
- backend1, backend2, backend3 handle traffic
- backup1, backup2 idle

backend1 fails:
- backend2, backend3 handle traffic
- backup1, backup2 still idle

backend2 fails:
- backend3 handles all traffic alone
- backup1, backup2 still idle

backend3 fails:
- ALL primary servers down
- backup1, backup2 now handle traffic

backend1 recovers:
- Traffic returns to backend1
- backup1, backup2 go idle again
</code></pre><p><strong>Example with maintenance mode:</strong></p><pre><code class="language-nginx">upstream maintenance_backend {
    server prod1.example.com max_fails=3 fail_timeout=30s;
    server prod2.example.com max_fails=3 fail_timeout=30s;
    server prod3.example.com max_fails=3 fail_timeout=30s;
    
    # Maintenance page server
    server maintenance.example.com:8080 backup;
}

server {
    listen 80;
    server_name app.example.com;
    
    location / {
        proxy_pass http://maintenance_backend;
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
</code></pre><p><strong>Backup with weight:</strong></p><pre><code class="language-nginx">upstream weighted_backup {
    server primary1.example.com weight=3;
    server primary2.example.com weight=2;
    
    # Backup servers also have weights
    server backup1.example.com weight=2 backup;
    server backup2.example.com weight=1 backup;
}

# When primaries are down:
# backup1 receives 2/3 of traffic
# backup2 receives 1/3 of traffic
</code></pre><h3 id="33-combined-weight-v%C3%A0-backup"><strong>3.3. Combined Weight and Backup</strong></h3><p><strong>Scenario: Production + Staging + Emergency</strong></p><pre><code class="language-nginx">upstream prod_staging_emergency {
    # Production servers - main traffic
    server prod1.example.com weight=5 max_fails=3 fail_timeout=30s;
    server prod2.example.com weight=5 max_fails=3 fail_timeout=30s;
    
    # Staging server - backup (testing purpose)
    server staging.example.com weight=2 backup max_fails=5;
    
    # Emergency static server - last resort
    server emergency.example.com backup;
}
</code></pre><hr><h2 id="4-sticky-sessions"><strong>4. Sticky Sessions</strong></h2><p>Sticky sessions ensure that requests from the same client are routed to the same server.</p><h3 id="41-ip-hash-method-built-in"><strong>4.1. IP Hash Method (Built-in)</strong></h3><pre><code class="language-nginx">upstream backend {
    ip_hash;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}
</code></pre><p><strong>Limitations of ip_hash:</strong></p><ul><li>Does not work well behind NAT</li><li>Uneven distribution</li><li>Not flexible</li></ul><h3 id="42-hash-v%E1%BB%9Bi-cookie-better"><strong>4.2. Hash with Cookie (Better)</strong></h3><pre><code class="language-nginx">upstream backend {
    hash $cookie_sessionid consistent;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        
        # Pass cookies
        proxy_set_header Cookie $http_cookie;
    }
}
</code></pre><h3 id="43-sticky-cookie-nginx-plus"><strong>4.3. Sticky Cookie (Nginx Plus)</strong></h3><pre><code class="language-nginx"># Nginx Plus only
upstream backend {
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
    
    sticky cookie srv_id expires=1h domain=.example.com path=/;
}
</code></pre><h3 id="44-custom-session-management"><strong>4.4. Custom Session Management</strong></h3><p><strong>Backend creates session cookie:</strong></p><pre><code class="language-javascript">// Node.js example
app.use((req, res, next) =&gt; {
    if (!req.cookies.server_id) {
        // Set cookie with server identifier
        res.cookie('server_id', process.env.SERVER_ID, {
            maxAge: 3600000,
            httpOnly: true
        });
    }
    next();
});
</code></pre><p><strong>Nginx routing based on cookie:</strong></p><pre><code class="language-nginx">map $cookie_server_id $backend_server {
    "server1" "backend1.example.com:8080";
    "server2" "backend2.example.com:8080";
    "server3" "backend3.example.com:8080";
    default   "backend1.example.com:8080";
}

server {
    listen 80;
    
    location / {
        proxy_pass http://$backend_server;
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Cookie $http_cookie;
    }
}
</code></pre><h3 id="45-session-affinity-v%E1%BB%9Bi-header"><strong>4.5. Session Affinity with Header</strong></h3><pre><code class="language-nginx">upstream backend {
    hash $http_x_session_id consistent;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        
        # Pass session header
        proxy_set_header X-Session-ID $http_x_session_id;
    }
}
</code></pre><hr><h2 id="5-active-health-checks"><strong>5. Active Health Checks</strong></h2><h3 id="51-passive-health-checks-open-source"><strong>5.1. Passive Health Checks (Open Source)</strong></h3><pre><code class="language-nginx">upstream backend {
    server backend1.example.com max_fails=3 fail_timeout=30s;
    server backend2.example.com max_fails=3 fail_timeout=30s;
    server backend3.example.com max_fails=3 fail_timeout=30s;
}

# max_fails=3: Mark down after 3 failures
# fail_timeout=30s: Retry after 30 seconds
</code></pre><p><strong>Detailed parameters:</strong></p><pre><code class="language-nginx">upstream detailed_health {
    server backend1.example.com
        max_fails=5          # Number of failures before marking down
        fail_timeout=60s     # Wait time before retrying
        max_conns=1000;      # Max concurrent connections
    
    server backend2.example.com
        max_fails=3
        fail_timeout=30s;
    
    server backend3.example.com backup;
}
</code></pre><h3 id="52-health-check-endpoint"><strong>5.2. Health Check Endpoint</strong></h3><p><strong>Backend health endpoint (Node.js):</strong></p><pre><code class="language-javascript">const express = require('express');
const app = express();

app.get('/health', (req, res) =&gt; {
    // Check database
    const dbOk = checkDatabase();
    
    // Check memory
    const memUsage = process.memoryUsage();
    const memOk = memUsage.heapUsed &lt; 500 * 1024 * 1024; // &lt; 500MB
    
    // Check dependencies
    const depsOk = checkDependencies();
    
    if (dbOk &amp;&amp; memOk &amp;&amp; depsOk) {
        res.status(200).json({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            memory: memUsage
        });
    } else {
        res.status(503).json({
            status: 'unhealthy',
            database: dbOk,
            memory: memOk,
            dependencies: depsOk
        });
    }
});

app.listen(3000);
</code></pre><p><strong>Nginx health check routing:</strong></p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com:3000 max_fails=3 fail_timeout=30s;
    server backend2.example.com:3000 max_fails=3 fail_timeout=30s;
    server backend3.example.com:3000 max_fails=3 fail_timeout=30s;
}

server {
    listen 80;
    server_name example.com;
    
    # Public traffic
    location / {
        proxy_pass http://backend;
    }
    
    # Health check endpoint (internal only)
    location /health {
        access_log off;
        proxy_pass http://backend/health;
        
        allow 127.0.0.1;
        allow 10.0.0.0/8;
        deny all;
    }
}
</code></pre><h3 id="53-active-health-checks-nginx-plus"><strong>5.3. Active Health Checks (Nginx Plus)</strong></h3><pre><code class="language-nginx"># Nginx Plus only
upstream backend {
    zone backend_zone 64k;
    
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        
        health_check interval=5s
                     fails=3
                     passes=2
                     uri=/health
                     match=health_ok;
    }
}

# Define health check criteria
match health_ok {
    status 200;
    header Content-Type = application/json;
    body ~ "healthy";
}
</code></pre><h3 id="54-external-health-check-script"><strong>5.4. External Health Check Script</strong></h3><p><strong>Monitoring script (Python):</strong></p><pre><code class="language-python">#!/usr/bin/env python3
# health_monitor.py

import requests
import time
import subprocess
from datetime import datetime

BACKENDS = [
    'http://backend1.example.com:3000/health',
    'http://backend2.example.com:3000/health',
    'http://backend3.example.com:3000/health',
]

CHECK_INTERVAL = 10  # seconds
UNHEALTHY_THRESHOLD = 3

backend_fail_counts = {url: 0 for url in BACKENDS}

def check_health(url):
    try:
        response = requests.get(url, timeout=5)
        if response.status_code == 200:
            data = response.json()
            return data.get('status') == 'healthy'
        return False
    except Exception as e:
        print(f"Error checking {url}: {e}")
        return False

def mark_server_down(url):
    server_name = url.split('//')[1].split(':')[0]
    print(f"Marking {server_name} as DOWN")

def mark_server_up(url):
    server_name = url.split('//')[1].split(':')[0]
    print(f"Marking {server_name} as UP")

def main():
    while True:
        for url in BACKENDS:
            healthy = check_health(url)
            
            if healthy:
                if backend_fail_counts[url] &gt; 0:
                    print(f"{datetime.now()} - {url} recovered")
                    mark_server_up(url)
                backend_fail_counts[url] = 0
            else:
                backend_fail_counts[url] += 1
                print(f"{datetime.now()} - {url} unhealthy "
                      f"({backend_fail_counts[url]} consecutive fails)")
                
                if backend_fail_counts[url] &gt;= UNHEALTHY_THRESHOLD:
                    mark_server_down(url)
        
        time.sleep(CHECK_INTERVAL)

if __name__ == '__main__':
    main()
</code></pre><p><strong>Run as systemd service:</strong></p><pre><code class="language-ini"># /etc/systemd/system/health-monitor.service
[Unit]
Description=Nginx Backend Health Monitor
After=network.target

[Service]
Type=simple
User=nginx
ExecStart=/usr/local/bin/health_monitor.py
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
</code></pre><pre><code class="language-bash">sudo systemctl enable health-monitor
sudo systemctl start health-monitor
sudo systemctl status health-monitor
</code></pre><hr><h2 id="6-v%C3%AD-d%E1%BB%A5-th%E1%BB%B1c-t%E1%BA%BF"><strong>6. Real-world Examples</strong></h2><h3 id="61-high-traffic-web-application"><strong>6.1. High-Traffic Web Application</strong></h3><pre><code class="language-nginx">upstream web_app {
    least_conn;
    
    # Primary servers with weights based on capacity
    server app1.example.com:8080 weight=5 max_fails=3 fail_timeout=30s max_conns=1000;
    server app2.example.com:8080 weight=5 max_fails=3 fail_timeout=30s max_conns=1000;
    server app3.example.com:8080 weight=3 max_fails=3 fail_timeout=30s max_conns=800;
    
    # Backup server
    server backup.example.com:8080 backup;
    
    # Keepalive connections
    keepalive 128;
    keepalive_timeout 90s;
    keepalive_requests 1000;
}

server {
    listen 80;
    listen [::]:80;
    server_name www.example.com;
    
    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.example.com;
    
    # SSL configuration
    ssl_certificate /etc/ssl/certs/example.com.crt;
    ssl_certificate_key /etc/ssl/private/example.com.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # Logging
    access_log /var/log/nginx/webapp.access.log;
    error_log /var/log/nginx/webapp.error.log;
    
    # Client limits
    client_max_body_size 10M;
    client_body_timeout 60s;
    
    location / {
        proxy_pass http://web_app;
        
        # HTTP version for keepalive
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        # Standard headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port $server_port;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        # Buffering
        proxy_buffering on;
        proxy_buffer_size 8k;
        proxy_buffers 16 8k;
        proxy_busy_buffers_size 16k;
        
        # Add backend info
        add_header X-Upstream-Server $upstream_addr always;
        add_header X-Upstream-Status $upstream_status always;
        add_header X-Upstream-Response-Time $upstream_response_time always;
    }
    
    # Static files
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        root /var/www/static;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # Health check
    location /health {
        access_log off;
        proxy_pass http://web_app/health;
        allow 127.0.0.1;
        allow 10.0.0.0/8;
        deny all;
    }
}
</code></pre><h3 id="62-api-gateway-v%E1%BB%9Bi-microservices"><strong>6.2. API Gateway with Microservices</strong></h3><pre><code class="language-nginx"># User Service
upstream user_service {
    least_conn;
    server user1.internal:8001 max_fails=2 fail_timeout=20s;
    server user2.internal:8001 max_fails=2 fail_timeout=20s;
    server user3.internal:8001 max_fails=2 fail_timeout=20s;
    keepalive 32;
}

# Product Service
upstream product_service {
    least_conn;
    server product1.internal:8002 max_fails=2 fail_timeout=20s;
    server product2.internal:8002 max_fails=2 fail_timeout=20s;
    keepalive 32;
}

# Order Service
upstream order_service {
    ip_hash;  # Sticky sessions for order processing
    server order1.internal:8003 max_fails=2 fail_timeout=20s;
    server order2.internal:8003 max_fails=2 fail_timeout=20s;
    keepalive 32;
}

# Payment Service (critical - more redundancy)
upstream payment_service {
    least_conn;
    server payment1.internal:8004 weight=3 max_fails=1 fail_timeout=10s;
    server payment2.internal:8004 weight=3 max_fails=1 fail_timeout=10s;
    server payment3.internal:8004 weight=2 max_fails=1 fail_timeout=10s;
    server payment_backup.internal:8004 backup;
    keepalive 64;
}

# Rate limiting zones
limit_req_zone $binary_remote_addr zone=api_limit:10m rate=100r/s;
limit_req_zone $binary_remote_addr zone=payment_limit:10m rate=10r/s;

server {
    listen 443 ssl http2;
    server_name api.example.com;
    
    # SSL config
    ssl_certificate /etc/ssl/certs/api.example.com.crt;
    ssl_certificate_key /etc/ssl/private/api.example.com.key;
    
    # Logging with JSON format
    log_format api_log escape=json '{'
        '"time":"$time_iso8601",'
        '"remote_addr":"$remote_addr",'
        '"request":"$request",'
        '"status":$status,'
        '"service":"$upstream_addr",'
        '"response_time":$upstream_response_time,'
        '"request_time":$request_time'
    '}';
    
    access_log /var/log/nginx/api.access.log api_log;
    
    # Default headers for all services
    proxy_http_version 1.1;
    proxy_set_header Connection "";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Request-ID $request_id;
    
    # User Service
    location /api/v1/users {
        limit_req zone=api_limit burst=50 nodelay;
        proxy_pass http://user_service;
        proxy_read_timeout 30s;
    }
    
    # Product Service
    location /api/v1/products {
        limit_req zone=api_limit burst=50 nodelay;
        proxy_pass http://product_service;
        proxy_read_timeout 30s;
    }
    
    # Order Service
    location /api/v1/orders {
        limit_req zone=api_limit burst=30 nodelay;
        proxy_pass http://order_service;
        proxy_read_timeout 60s;
    }
    
    # Payment Service (stricter limits)
    location /api/v1/payments {
        limit_req zone=payment_limit burst=5 nodelay;
        proxy_pass http://payment_service;
        proxy_read_timeout 90s;
        proxy_connect_timeout 10s;
    }
    
    # Health checks
    location /health/users {
        access_log off;
        proxy_pass http://user_service/health;
        allow 10.0.0.0/8;
        deny all;
    }
    
    location /health/products {
        access_log off;
        proxy_pass http://product_service/health;
        allow 10.0.0.0/8;
        deny all;
    }
    
    location /health/orders {
        access_log off;
        proxy_pass http://order_service/health;
        allow 10.0.0.0/8;
        deny all;
    }
    
    location /health/payments {
        access_log off;
        proxy_pass http://payment_service/health;
        allow 10.0.0.0/8;
        deny all;
    }
}
</code></pre><h3 id="63-e-commerce-platform-v%E1%BB%9Bi-session-management"><strong>6.3. E-commerce Platform with Session Management</strong></h3><pre><code class="language-nginx"># Frontend servers (stateless)
upstream frontend {
    least_conn;
    server frontend1.example.com:3000 weight=5;
    server frontend2.example.com:3000 weight=5;
    server frontend3.example.com:3000 weight=3;
    keepalive 64;
}

# Backend API (sticky sessions for cart)
upstream backend_api {
    ip_hash;
    server api1.example.com:4000 max_fails=2 fail_timeout=30s;
    server api2.example.com:4000 max_fails=2 fail_timeout=30s;
    server api3.example.com:4000 max_fails=2 fail_timeout=30s;
    keepalive 32;
}

# Checkout service (critical path)
upstream checkout {
    least_conn;
    server checkout1.example.com:5000 weight=3 max_fails=1 fail_timeout=10s;
    server checkout2.example.com:5000 weight=3 max_fails=1 fail_timeout=10s;
    server checkout_backup.example.com:5000 backup;
    keepalive 16;
}

server {
    listen 443 ssl http2;
    server_name shop.example.com;
    
    # SSL
    ssl_certificate /etc/ssl/certs/shop.example.com.crt;
    ssl_certificate_key /etc/ssl/private/shop.example.com.key;
    
    # Frontend (React/Vue/Angular)
    location / {
        proxy_pass http://frontend;
        
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
    }
    
    # API endpoints with session affinity
    location /api/ {
        proxy_pass http://backend_api/;
        
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        
        # Pass cookies for session
        proxy_set_header Cookie $http_cookie;
        
        # Timeouts
        proxy_read_timeout 60s;
    }
    
    # Checkout (critical path)
    location /api/checkout/ {
        proxy_pass http://checkout/;
        
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Cookie $http_cookie;
        
        # Longer timeouts for payment processing
        proxy_read_timeout 120s;
        proxy_connect_timeout 10s;
        
        # Disable buffering for real-time updates
        proxy_buffering off;
    }
    
    # Static assets
    location /static/ {
        alias /var/www/shop/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
}
</code></pre><hr><h2 id="7-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>7. Practice Exercises</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-basic-load-balancing"><strong>Exercise 1: Basic Load Balancing</strong></h3><ol><li>Run 3 instances of an application on ports 3000, 3001, 3002</li><li>Configure Nginx with round-robin load balancing</li><li>Generate traffic and verify distribution (check logs)</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-weighted-load-balancing"><strong>Exercise 2: Weighted Load Balancing</strong></h3><ol><li>Set up 3 backend servers with weights: 5, 3, 2</li><li>Generate 100 requests</li><li>Count requests per server and verify ratio (~50%, ~30%, ~20%)</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-3-sticky-sessions"><strong>Exercise 3: Sticky Sessions</strong></h3><ol><li>Set up ip_hash load balancing</li><li>Make multiple requests from the same client</li><li>Verify all requests reach the same backend</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-backup-servers"><strong>Exercise 4: Backup Servers</strong></h3><ol><li>Configure 2 primary servers and 1 backup</li><li>Stop both primary servers</li><li>Verify traffic switches to backup</li><li>Start primaries again and verify traffic returns</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-health-checks"><strong>Exercise 5: Health Checks</strong></h3><ol><li>Set up backends with max_fails=2 fail_timeout=30s</li><li>Configure /health endpoint</li><li>Simulate backend failure (stop service)</li><li>Monitor logs and verify failover</li><li>Restart service and verify recovery</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-6-canary-deployment"><strong>Exercise 6: Canary Deployment</strong></h3><ol><li>Set up production servers (weight=45 each)</li><li>Add canary server (weight=10)</li><li>Verify 10% traffic goes to canary</li><li>Gradually increase canary weight</li><li>Complete migration to canary</li></ol><hr><h2 id="8-troubleshooting"><strong>8. Troubleshooting</strong></h2><h3 id="81-uneven-distribution"><strong>8.1. Uneven Distribution</strong></h3><p><strong>Problem:</strong></p><pre><code>Server 1: 1000 requests
Server 2: 500 requests
Server 3: 300 requests
</code></pre><p><strong>Diagnosis:</strong></p><pre><code class="language-bash"># Check weights
grep -A10 "upstream" /etc/nginx/nginx.conf

# Check if using ip_hash with few clients
# Check server health/performance
</code></pre><p><strong>Solutions:</strong></p><pre><code class="language-nginx"># Use least_conn instead of round-robin
upstream backend {
    least_conn;
    server backend1.example.com;
    server backend2.example.com;
    server backend3.example.com;
}

# Or adjust weights
upstream backend {
    server backend1.example.com weight=1;
    server backend2.example.com weight=2;
    server backend3.example.com weight=3;
}
</code></pre><h3 id="82-sticky-sessions-not-working"><strong>8.2. Sticky Sessions Not Working</strong></h3><p><strong>Problem:</strong></p><pre><code>Client requests hitting different servers
</code></pre><p><strong>Diagnosis:</strong></p><pre><code class="language-bash"># Check if behind load balancer/proxy
# Check X-Forwarded-For header
# Verify cookie/hash configuration
</code></pre><p><strong>Solutions:</strong></p><pre><code class="language-nginx"># Use hash with cookie instead of ip_hash
upstream backend {
    hash $cookie_sessionid consistent;
    server backend1.example.com;
    server backend2.example.com;
}

# Or use custom header
upstream backend {
    hash $http_x_session_id consistent;
    server backend1.example.com;
    server backend2.example.com;
}
</code></pre><h3 id="83-health-check-not-detecting-failures"><strong>8.3. Health Check Not Detecting Failures</strong></h3><p><strong>Problem:</strong></p><pre><code>Server down but still receiving traffic
</code></pre><p><strong>Diagnosis:</strong></p><pre><code class="language-bash"># Check max_fails and fail_timeout
# Test health endpoint manually
curl http://backend1.example.com/health

# Check Nginx error log
sudo tail -f /var/log/nginx/error.log
</code></pre><p><strong>Solutions:</strong></p><pre><code class="language-nginx"># Lower thresholds
upstream backend {
    server backend1.example.com max_fails=2 fail_timeout=10s;
    server backend2.example.com max_fails=2 fail_timeout=10s;
}

# Implement proper health check endpoint
# Use external monitoring script
</code></pre><h3 id="84-backend-timeout-issues"><strong>8.4. Backend Timeout Issues</strong></h3><p><strong>Problem:</strong></p><pre><code>504 Gateway Timeout errors
</code></pre><p><strong>Diagnosis:</strong></p><pre><code class="language-bash"># Check backend processing time
# Check network connectivity
# Review Nginx timeouts
</code></pre><p><strong>Solutions:</strong></p><pre><code class="language-nginx">location / {
    proxy_pass http://backend;
    
    # Increase timeouts
    proxy_connect_timeout 60s;
    proxy_send_timeout 60s;
    proxy_read_timeout 120s;
    
    # Or disable timeout for specific endpoints
    proxy_read_timeout 300s;
}
</code></pre><h3 id="85-connection-pool-exhaustion"><strong>8.5. Connection Pool Exhaustion</strong></h3><p><strong>Problem:</strong></p><pre><code>Too many connections to backend
502 errors during high load
</code></pre><p><strong>Solutions:</strong></p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com max_conns=1000;
    server backend2.example.com max_conns=1000;
    
    # Enable keepalive
    keepalive 128;
    keepalive_timeout 75s;
    keepalive_requests 1000;
}

server {
    location / {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
    }
}
</code></pre><hr><h2 id="9-best-practices"><strong>9. Best Practices</strong></h2><h3 id="91-configuration"><strong>9.1. Configuration</strong></h3><pre><code class="language-nginx"># 1. Use descriptive upstream names
upstream user_api_backend {  # Good
    # ...
}

upstream backend {  # Not descriptive
    # ...
}

# 2. Document your configuration
upstream payment_service {
    # Using least_conn for variable processing time
    # Strict health checks for critical path
    least_conn;
    
    server payment1.internal:8080 weight=3 max_fails=1 fail_timeout=10s;
    server payment2.internal:8080 weight=3 max_fails=1 fail_timeout=10s;
    server payment_backup.internal:8080 backup;
    
    keepalive 32;
}

# 3. Separate concerns
# Production config
include /etc/nginx/conf.d/upstreams/*.conf;
include /etc/nginx/conf.d/servers/*.conf;

# 4. Use variables for repeated values
geo $backend_pool {
    default production;
    10.0.1.0/24 staging;
}

map $backend_pool $upstream {
    production "prod_backend";
    staging "staging_backend";
}
</code></pre><h3 id="92-performance"><strong>9.2. Performance</strong></h3><pre><code class="language-nginx">upstream optimized_backend {
    # 1. Use least_conn for better distribution
    least_conn;
    
    # 2. Enable keepalive
    keepalive 128;
    keepalive_timeout 75s;
    keepalive_requests 1000;
    
    # 3. Set appropriate max_conns
    server backend1.example.com max_conns=1000;
    server backend2.example.com max_conns=1000;
}

server {
    location / {
        proxy_pass http://optimized_backend;
        
        # 4. Use HTTP/1.1 with keepalive
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        # 5. Enable buffering
        proxy_buffering on;
        proxy_buffer_size 8k;
        proxy_buffers 16 8k;
    }
}
</code></pre><h3 id="93-monitoring"><strong>9.3. Monitoring</strong></h3><pre><code class="language-nginx"># 1. Log upstream info
log_format upstream_log '$remote_addr - [$time_local] '
    '"$request" $status '
    'upstream: $upstream_addr '
    'response_time: $upstream_response_time '
    'connect_time: $upstream_connect_time';

access_log /var/log/nginx/upstream.log upstream_log;

# 2. Add debug headers (non-production)
add_header X-Upstream-Server $upstream_addr always;
add_header X-Upstream-Status $upstream_status always;
add_header X-Upstream-Response-Time $upstream_response_time always;

# 3. Enable stub_status
server {
    listen 8080;
    location /nginx_status {
        stub_status;
        allow 127.0.0.1;
        deny all;
    }
}

# 4. Implement health check endpoints
location /health/upstream {
    access_log off;
    proxy_pass http://backend/health;
    allow 10.0.0.0/8;
    deny all;
}
</code></pre><h3 id="94-security"><strong>9.4. Security</strong></h3><pre><code class="language-nginx"># 1. Limit max connections per server
upstream backend {
    server backend1.example.com max_conns=1000;
}

# 2. Set timeouts
proxy_connect_timeout 10s;
proxy_send_timeout 60s;
proxy_read_timeout 60s;

# 3. Hide upstream errors
proxy_intercept_errors on;
error_page 502 503 504 /50x.html;

# 4. Rate limiting
limit_req_zone $binary_remote_addr zone=backend_limit:10m rate=100r/s;

location / {
    limit_req zone=backend_limit burst=50 nodelay;
    proxy_pass http://backend;
}
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>Summary</strong></h2><p>In this lesson, you learned:</p><ul><li>✅ Load balancing algorithms (round-robin, least_conn, ip_hash, hash, random)</li><li>✅ Detailed upstream block configuration</li><li>✅ Backup servers and weight distribution</li><li>✅ Sticky session strategies</li><li>✅ Active and passive health checks</li><li>✅ Real-world examples and best practices</li></ul><p><strong>Next lesson:</strong> We will explore Caching — how to cache static content, API responses, and optimize performance with proxy caching.</p>
