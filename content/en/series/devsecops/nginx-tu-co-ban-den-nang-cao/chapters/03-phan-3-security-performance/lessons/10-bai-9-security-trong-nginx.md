---
id: 019c9617-fc8f-72fb-b702-75e393b003ba
title: 'Lesson 9: Security in NGINX'
slug: bai-9-security-trong-nginx
description: >-
  A lesson on Security in Nginx — rate limiting with limit_req/limit_conn, IP blocking, basic authentication, ModSecurity WAF integration, DDoS protection, and secure headers (CSP, X-Frame-Options, CORS). Guide to protecting your server from attacks, best practices, and security hardening for production.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 9
section_title: "Part 3: Security & Performance"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx from Basics to Advanced
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2834" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2834)"/>

  <!-- Decorations -->
  <g>
    <circle cx="637" cy="241" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="674" cy="138" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="711" cy="35" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="748" cy="192" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="89" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="51" x2="1100" y2="131" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="81" x2="1050" y2="151" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1023.5166604983954,188 1023.5166604983954,214 1001,227 978.4833395016046,214 978.4833395016046,188 1001,175" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — Lesson 9</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 9: Security in NGINX</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx from Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Security &amp; Performance</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-rate-limiting-v%E1%BB%9Bi-limitreq-v%C3%A0-limitconn"><strong>1. Rate Limiting with limit_req and limit_conn</strong></h2><p>Rate limiting protects the server from abuse, brute-force attacks, and DDoS by limiting the number of requests from a single client.</p><h3 id="11-rate-limiting-basics-limitreq"><strong>1.1. Rate Limiting Basics (limit_req)</strong></h3><pre><code class="language-nginx">http {
    # Define rate limit zone
    # $binary_remote_addr: Client IP address (binary format, saves memory)
    # zone=mylimit:10m: Zone name "mylimit", 10MB memory (~160,000 IPs)
    # rate=10r/s: 10 requests per second
    limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;
    
    server {
        listen 80;
        server_name example.com;
        
        location / {
            # Apply rate limit
            limit_req zone=mylimit;
            
            proxy_pass http://backend;
        }
    }
}
</code></pre><p><strong>Rate values:</strong></p><pre><code class="language-nginx"># Per second
limit_req_zone $binary_remote_addr zone=persec:10m rate=1r/s;   # 1 req/sec
limit_req_zone $binary_remote_addr zone=persec:10m rate=10r/s;  # 10 req/sec
limit_req_zone $binary_remote_addr zone=persec:10m rate=100r/s; # 100 req/sec

# Per minute
limit_req_zone $binary_remote_addr zone=permin:10m rate=30r/m;  # 30 req/min
limit_req_zone $binary_remote_addr zone=permin:10m rate=120r/m; # 120 req/min

# Very restrictive (login pages)
limit_req_zone $binary_remote_addr zone=login:10m rate=5r/m;    # 5 req/min
</code></pre><h3 id="12-burst-v%C3%A0-nodelay"><strong>1.2. Burst và Nodelay</strong></h3><pre><code class="language-nginx">http {
    limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;
    
    server {
        location / {
            # Allow burst of 20 requests
            limit_req zone=mylimit burst=20;
            
            # Without nodelay: excess requests delayed
            # With nodelay: excess requests processed immediately
            # limit_req zone=mylimit burst=20 nodelay;
            
            proxy_pass http://backend;
        }
    }
}
</code></pre><p><strong>Burst explained:</strong></p><pre><code>rate=10r/s burst=20

Request pattern:
Time 0s: 30 requests arrive simultaneously

Without burst:
- Request 1-10: Processed immediately
- Request 11-30: Rejected (503 error)

With burst=20:
- Request 1-10: Processed immediately
- Request 11-20: Queued (delayed)
- Request 21-30: Rejected

With burst=20 nodelay:
- Request 1-30: All processed immediately
- Client "borrows" from future quota
- Next 20 seconds: Client blocked (paying back debt)
</code></pre><h3 id="13-multiple-rate-limit-zones"><strong>1.3. Multiple Rate Limit Zones</strong></h3><pre><code class="language-nginx">http {
    # General API rate limit
    limit_req_zone $binary_remote_addr zone=api:10m rate=100r/s;
    
    # Login rate limit (strict)
    limit_req_zone $binary_remote_addr zone=login:10m rate=5r/m;
    
    # Search rate limit
    limit_req_zone $binary_remote_addr zone=search:10m rate=10r/s;
    
    # Download rate limit
    limit_req_zone $binary_remote_addr zone=download:10m rate=2r/s;
    
    server {
        listen 80;
        server_name example.com;
        
        # General pages
        location / {
            limit_req zone=api burst=50 nodelay;
            proxy_pass http://backend;
        }
        
        # Login endpoint (very strict)
        location /api/login {
            limit_req zone=login burst=3 nodelay;
            proxy_pass http://backend;
        }
        
        # Search endpoint
        location /api/search {
            limit_req zone=search burst=20 nodelay;
            proxy_pass http://backend;
        }
        
        # Download files
        location /downloads/ {
            limit_req zone=download burst=5;
            root /var/www/downloads;
        }
    }
}
</code></pre><h3 id="14-connection-limiting-limitconn"><strong>1.4. Connection Limiting (limit_conn)</strong></h3><pre><code class="language-nginx">http {
    # Limit concurrent connections per IP
    limit_conn_zone $binary_remote_addr zone=addr:10m;
    
    # Limit concurrent connections per server
    limit_conn_zone $server_name zone=perserver:10m;
    
    server {
        listen 80;
        server_name example.com;
        
        # Max 10 concurrent connections per IP
        limit_conn addr 10;
        
        # Max 1000 concurrent connections to this server
        limit_conn perserver 1000;
        
        location /downloads/ {
            # Stricter limit for downloads
            limit_conn addr 2;
            root /var/www/downloads;
        }
    }
}
</code></pre><h3 id="15-custom-rate-limit-keys"><strong>1.5. Custom Rate Limit Keys</strong></h3><pre><code class="language-nginx">http {
    # Rate limit by API key
    limit_req_zone $http_x_api_key zone=apikey:10m rate=1000r/s;
    
    # Rate limit by cookie (user-based)
    limit_req_zone $cookie_user_id zone=userid:10m rate=50r/s;
    
    # Rate limit by URI
    limit_req_zone $request_uri zone=uri:10m rate=10r/s;
    
    # Combined key (IP + User-Agent)
    map $binary_remote_addr$http_user_agent $limit_key {
        default $binary_remote_addr$http_user_agent;
    }
    limit_req_zone $limit_key zone=combined:10m rate=20r/s;
    
    server {
        location /api/ {
            # Apply appropriate limit
            limit_req zone=apikey burst=100 nodelay;
            proxy_pass http://backend;
        }
    }
}
</code></pre><h3 id="16-rate-limit-status-codes"><strong>1.6. Rate Limit Status Codes</strong></h3><pre><code class="language-nginx">http {
    limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;
    
    # Custom status code for rate limit
    limit_req_status 429;  # Default: 503
    
    server {
        location / {
            limit_req zone=mylimit burst=20 nodelay;
            
            # Custom error page
            error_page 429 /rate_limit.html;
            
            proxy_pass http://backend;
        }
        
        location = /rate_limit.html {
            internal;
            root /var/www/errors;
        }
    }
}
</code></pre><h3 id="17-bypass-rate-limiting"><strong>1.7. Bypass Rate Limiting</strong></h3><pre><code class="language-nginx">http {
    # Whitelist certain IPs
    geo $limit {
        default 1;
        10.0.0.0/8 0;       # Internal network
        192.168.1.100 0;    # Admin IP
    }
    
    map $limit $limit_key {
        0 "";
        1 $binary_remote_addr;
    }
    
    limit_req_zone $limit_key zone=mylimit:10m rate=10r/s;
    
    server {
        location / {
            limit_req zone=mylimit burst=20 nodelay;
            proxy_pass http://backend;
        }
    }
}
</code></pre><h3 id="18-complete-rate-limiting-example"><strong>1.8. Complete Rate Limiting Example</strong></h3><pre><code class="language-nginx">http {
    # Define multiple zones for different purposes
    
    # General API - moderate limit
    limit_req_zone $binary_remote_addr zone=api:10m rate=100r/s;
    
    # Authentication - very strict
    limit_req_zone $binary_remote_addr zone=auth:10m rate=5r/m;
    
    # Search - medium limit
    limit_req_zone $binary_remote_addr zone=search:10m rate=10r/s;
    
    # File uploads - strict
    limit_req_zone $binary_remote_addr zone=upload:10m rate=2r/m;
    
    # Connection limits
    limit_conn_zone $binary_remote_addr zone=addr:10m;
    limit_conn_zone $server_name zone=perserver:10m;
    
    # Custom status code
    limit_req_status 429;
    limit_conn_status 429;
    
    # Log rate limit events
    limit_req_log_level warn;
    
    server {
        listen 443 ssl http2;
        server_name api.example.com;
        
        # Global connection limit
        limit_conn addr 20;
        limit_conn perserver 10000;
        
        # General API endpoints
        location /api/ {
            limit_req zone=api burst=200 nodelay;
            
            proxy_pass http://backend;
            proxy_set_header X-Real-IP $remote_addr;
        }
        
        # Authentication endpoints (strict)
        location ~ ^/api/(login|register|reset-password) {
            limit_req zone=auth burst=3;
            
            proxy_pass http://backend;
        }
        
        # Search endpoint
        location /api/search {
            limit_req zone=search burst=30 nodelay;
            
            proxy_pass http://backend;
        }
        
        # File upload (very strict)
        location /api/upload {
            limit_req zone=upload burst=1;
            limit_conn addr 1;
            
            client_max_body_size 100M;
            proxy_pass http://backend;
        }
        
        # Rate limit error page
        error_page 429 /429.html;
        location = /429.html {
            internal;
            default_type application/json;
            return 429 '{"error":"Too many requests","retry_after":"60"}';
        }
    }
}
</code></pre><hr><h2 id="2-ch%E1%BA%B7n-ip-v%E1%BB%9Bi-denyallow"><strong>2. Chặn IP với deny/allow</strong></h2><h3 id="21-basic-ip-blocking"><strong>2.1. Basic IP Blocking</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # Block specific IP
    deny 192.168.1.100;
    
    # Block IP range
    deny 192.168.1.0/24;
    
    # Block specific IPs
    deny 10.0.0.5;
    deny 10.0.0.10;
    
    # Allow all others
    allow all;
    
    location / {
        root /var/www/html;
    }
}
</code></pre><h3 id="22-whitelist-approach"><strong>2.2. Whitelist Approach</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name admin.example.com;
    
    # Allow specific IPs only
    allow 192.168.1.100;
    allow 10.0.0.0/8;
    allow 2001:db8::/32;  # IPv6
    
    # Deny everyone else
    deny all;
    
    location / {
        root /var/www/admin;
    }
}
</code></pre><h3 id="23-location-specific-blocking"><strong>2.3. Location-specific Blocking</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # Public access
    location / {
        root /var/www/html;
    }
    
    # Admin area - restricted
    location /admin/ {
        allow 192.168.1.0/24;
        allow 10.0.0.100;
        deny all;
        
        proxy_pass http://admin_backend;
    }
    
    # API - whitelist only
    location /api/ {
        allow 203.0.113.0/24;
        deny all;
        
        proxy_pass http://api_backend;
    }
}
</code></pre><h3 id="24-geo-based-blocking"><strong>2.4. Geo-based Blocking</strong></h3><pre><code class="language-nginx">http {
    # Define geo blocks
    geo $allowed_country {
        default no;
        
        # US IP ranges
        192.0.2.0/24 yes;
        198.51.100.0/24 yes;
        
        # EU IP ranges
        203.0.113.0/24 yes;
    }
    
    server {
        listen 80;
        server_name example.com;
        
        if ($allowed_country = no) {
            return 403 "Access denied from your location";
        }
        
        location / {
            root /var/www/html;
        }
    }
}
</code></pre><h3 id="25-block-bad-bots"><strong>2.5. Block Bad Bots</strong></h3><pre><code class="language-nginx">http {
    # Define bad bots
    map $http_user_agent $bad_bot {
        default 0;
        ~*malicious 1;
        ~*scrapy 1;
        ~*crawler 1;
        ~*spider 1;
        ~*bot 1;
        ~*curl 1;
        ~*wget 1;
    }
    
    server {
        listen 80;
        server_name example.com;
        
        if ($bad_bot) {
            return 403 "Forbidden";
        }
        
        location / {
            root /var/www/html;
        }
    }
}
</code></pre><h3 id="26-dynamic-ip-blocking"><strong>2.6. Dynamic IP Blocking</strong></h3><p><strong>Create blocklist file:</strong></p><pre><code class="language-bash"># /etc/nginx/blockips.conf
deny 192.168.1.50;
deny 10.0.0.25;
deny 203.0.113.100;
</code></pre><p><strong>Include in Nginx:</strong></p><pre><code class="language-nginx">http {
    # Include blocklist
    include /etc/nginx/blockips.conf;
    
    server {
        listen 80;
        server_name example.com;
        
        location / {
            root /var/www/html;
        }
    }
}
</code></pre><p><strong>Script để block IP:</strong></p><pre><code class="language-bash">#!/bin/bash
# block_ip.sh

IP=$1
BLOCKLIST="/etc/nginx/blockips.conf"

if [ -z "$IP" ]; then
    echo "Usage: $0 &lt;IP_ADDRESS&gt;"
    exit 1
fi

# Add IP to blocklist
echo "deny $IP;" &gt;&gt; $BLOCKLIST

# Reload Nginx
nginx -t &amp;&amp; systemctl reload nginx

echo "Blocked IP: $IP"
</code></pre><h3 id="27-fail2ban-integration"><strong>2.7. Fail2Ban Integration</strong></h3><p><strong>Install Fail2Ban:</strong></p><pre><code class="language-bash">sudo apt install fail2ban
</code></pre><p><strong>Configure Fail2Ban for Nginx:</strong></p><pre><code class="language-bash"># /etc/fail2ban/jail.local
[nginx-http-auth]
enabled = true
port = http,https
filter = nginx-http-auth
logpath = /var/log/nginx/error.log
maxretry = 3
bantime = 3600

[nginx-limit-req]
enabled = true
port = http,https
filter = nginx-limit-req
logpath = /var/log/nginx/error.log
maxretry = 10
bantime = 3600

[nginx-badbots]
enabled = true
port = http,https
filter = nginx-badbots
logpath = /var/log/nginx/access.log
maxretry = 2
bantime = 86400
</code></pre><p><strong>Create filter:</strong></p><pre><code class="language-bash"># /etc/fail2ban/filter.d/nginx-limit-req.conf
[Definition]
failregex = limiting requests, excess: .* by zone .*, client: &lt;HOST&gt;
ignoreregex =
</code></pre><p><strong>Restart Fail2Ban:</strong></p><pre><code class="language-bash">sudo systemctl restart fail2ban
sudo fail2ban-client status nginx-limit-req
</code></pre><hr><h2 id="3-basic-authentication"><strong>3. Basic Authentication</strong></h2><h3 id="31-setup-basic-auth"><strong>3.1. Setup Basic Auth</strong></h3><p><strong>Create password file:</strong></p><pre><code class="language-bash"># Install htpasswd utility
sudo apt install apache2-utils

# Create user
sudo htpasswd -c /etc/nginx/.htpasswd admin

# Add more users
sudo htpasswd /etc/nginx/.htpasswd user2

# Set permissions
sudo chmod 644 /etc/nginx/.htpasswd
</code></pre><p><strong>Configure Nginx:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    location /admin/ {
        # Enable basic auth
        auth_basic "Restricted Area";
        auth_basic_user_file /etc/nginx/.htpasswd;
        
        root /var/www/admin;
    }
}
</code></pre><h3 id="32-location-specific-auth"><strong>3.2. Location-specific Auth</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # Public area
    location / {
        root /var/www/html;
    }
    
    # Protected admin area
    location /admin/ {
        auth_basic "Admin Area";
        auth_basic_user_file /etc/nginx/.htpasswd;
        root /var/www/admin;
    }
    
    # Protected API
    location /api/ {
        auth_basic "API Access";
        auth_basic_user_file /etc/nginx/.htpasswd_api;
        proxy_pass http://backend;
    }
}
</code></pre><h3 id="33-conditional-authentication"><strong>3.3. Conditional Authentication</strong></h3><pre><code class="language-nginx">http {
    # Whitelist IPs that don't need auth
    geo $authentication {
        default "Restricted";
        192.168.1.0/24 "off";
        10.0.0.0/8 "off";
    }
    
    server {
        listen 80;
        
        location /admin/ {
            auth_basic $authentication;
            auth_basic_user_file /etc/nginx/.htpasswd;
            
            root /var/www/admin;
        }
    }
}
</code></pre><h3 id="34-multiple-auth-methods"><strong>3.4. Multiple Auth Methods</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    location /admin/ {
        # Require IP whitelist AND password
        satisfy all;
        
        # IP whitelist
        allow 192.168.1.0/24;
        deny all;
        
        # Basic auth
        auth_basic "Admin Area";
        auth_basic_user_file /etc/nginx/.htpasswd;
        
        root /var/www/admin;
    }
    
    location /staff/ {
        # Require IP whitelist OR password
        satisfy any;
        
        allow 192.168.1.0/24;
        deny all;
        
        auth_basic "Staff Area";
        auth_basic_user_file /etc/nginx/.htpasswd;
        
        root /var/www/staff;
    }
}
</code></pre><h3 id="35-jwt-authentication"><strong>3.5. JWT Authentication</strong></h3><pre><code class="language-nginx">http {
    # Verify JWT token
    map $http_authorization $jwt_valid {
        default 0;
        ~*^Bearer\s+([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*) 1;
    }
    
    server {
        listen 80;
        
        location /api/ {
            if ($jwt_valid = 0) {
                return 401 '{"error":"Invalid or missing token"}';
            }
            
            # Forward token to backend for validation
            proxy_pass http://backend;
            proxy_set_header Authorization $http_authorization;
        }
    }
}
</code></pre><hr><h2 id="4-modsecurity-waf-integration"><strong>4. ModSecurity WAF Integration</strong></h2><p>ModSecurity là Web Application Firewall (WAF) bảo vệ khỏi common attacks.</p><h3 id="41-install-modsecurity"><strong>4.1. Install ModSecurity</strong></h3><pre><code class="language-bash"># Ubuntu/Debian
sudo apt update
sudo apt install libmodsecurity3 libmodsecurity-dev

# Clone connector
cd /opt
sudo git clone https://github.com/SpiderLabs/ModSecurity-nginx.git

# Get Nginx version
nginx -v

# Download Nginx source (same version)
cd /opt
wget http://nginx.org/download/nginx-1.24.0.tar.gz
tar -xzf nginx-1.24.0.tar.gz
cd nginx-1.24.0

# Compile with ModSecurity module
./configure --add-dynamic-module=/opt/ModSecurity-nginx
make modules

# Copy module
sudo cp objs/ngx_http_modsecurity_module.so /etc/nginx/modules/

# Load module in nginx.conf
sudo nano /etc/nginx/nginx.conf
# Add at top:
load_module modules/ngx_http_modsecurity_module.so;
</code></pre><h3 id="42-configure-modsecurity"><strong>4.2. Configure ModSecurity</strong></h3><pre><code class="language-bash"># Create config directory
sudo mkdir /etc/nginx/modsec
cd /etc/nginx/modsec

# Download OWASP Core Rule Set
sudo git clone https://github.com/coreruleset/coreruleset.git

# Copy config files
sudo cp /opt/ModSecurity/modsecurity.conf-recommended modsecurity.conf
sudo cp /opt/ModSecurity/unicode.mapping .

# Edit config
sudo nano modsecurity.conf

# Change:
SecRuleEngine On  # Enable rules
SecAuditLog /var/log/modsec_audit.log
</code></pre><h3 id="43-enable-in-nginx"><strong>4.3. Enable in Nginx</strong></h3><pre><code class="language-nginx">http {
    # Load ModSecurity module
    load_module modules/ngx_http_modsecurity_module.so;
    
    server {
        listen 80;
        server_name example.com;
        
        # Enable ModSecurity
        modsecurity on;
        modsecurity_rules_file /etc/nginx/modsec/modsecurity.conf;
        
        location / {
            proxy_pass http://backend;
        }
    }
}
</code></pre><h3 id="44-owasp-core-rule-set"><strong>4.4. OWASP Core Rule Set</strong></h3><pre><code class="language-bash"># Main config file
sudo nano /etc/nginx/modsec/main.conf

# Add:
Include /etc/nginx/modsec/modsecurity.conf
Include /etc/nginx/modsec/coreruleset/crs-setup.conf
Include /etc/nginx/modsec/coreruleset/rules/*.conf
</code></pre><p><strong>Update Nginx config:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    modsecurity on;
    modsecurity_rules_file /etc/nginx/modsec/main.conf;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><h3 id="45-custom-modsecurity-rules"><strong>4.5. Custom ModSecurity Rules</strong></h3><pre><code class="language-bash"># /etc/nginx/modsec/custom_rules.conf

# Block SQL injection attempts
SecRule ARGS "@detectSQLi" \
    "id:1001,phase:2,deny,status:403,msg:'SQL Injection Detected'"

# Block XSS attempts
SecRule ARGS "@detectXSS" \
    "id:1002,phase:2,deny,status:403,msg:'XSS Detected'"

# Block file upload exploits
SecRule FILES "@rx \.(?:php|exe|sh)$" \
    "id:1003,phase:2,deny,status:403,msg:'Dangerous file upload'"

# Rate limiting per IP
SecRule IP:REQUEST_COUNT "@gt 100" \
    "id:1004,phase:1,deny,status:429,msg:'Rate limit exceeded'"
</code></pre><hr><h2 id="5-ch%E1%BB%91ng-ddos-c%C6%A1-b%E1%BA%A3n"><strong>5. Chống DDoS Cơ bản</strong></h2><h3 id="51-connection-limits"><strong>5.1. Connection Limits</strong></h3><pre><code class="language-nginx">http {
    # Limit connections per IP
    limit_conn_zone $binary_remote_addr zone=addr:10m;
    
    # Limit request rate
    limit_req_zone $binary_remote_addr zone=req:10m rate=10r/s;
    
    server {
        listen 80;
        server_name example.com;
        
        # Apply limits
        limit_conn addr 10;
        limit_req zone=req burst=20 nodelay;
        
        location / {
            proxy_pass http://backend;
        }
    }
}
</code></pre><h3 id="52-timeout-protection"><strong>5.2. Timeout Protection</strong></h3><pre><code class="language-nginx">http {
    # Short timeouts to free resources quickly
    client_body_timeout 10s;
    client_header_timeout 10s;
    send_timeout 10s;
    
    # Limit request body size
    client_max_body_size 1M;
    
    server {
        listen 80;
        
        location / {
            proxy_pass http://backend;
            
            # Backend timeouts
            proxy_connect_timeout 5s;
            proxy_send_timeout 10s;
            proxy_read_timeout 10s;
        }
    }
}
</code></pre><h3 id="53-block-attack-patterns"><strong>5.3. Block Attack Patterns</strong></h3><pre><code class="language-nginx">http {
    # Block bad methods
    map $request_method $bad_method {
        default 0;
        ~*^(TRACE|DELETE|PUT) 1;
    }
    
    # Block suspicious URIs
    map $request_uri $bad_uri {
        default 0;
        ~*\.\./\.\. 1;  # Directory traversal
        ~*\.(bash|git|svn|env|log) 1;
        ~*\.(php|asp|aspx|jsp)\. 1;  # Double extensions
    }
    
    # Block bad referers
    map $http_referer $bad_referer {
        default 0;
        ~*porn 1;
        ~*casino 1;
        ~*viagra 1;
    }
    
    server {
        listen 80;
        
        if ($bad_method) {
            return 405;
        }
        
        if ($bad_uri) {
            return 403;
        }
        
        if ($bad_referer) {
            return 403;
        }
        
        location / {
            proxy_pass http://backend;
        }
    }
}
</code></pre><h3 id="54-syn-flood-protection"><strong>5.4. SYN Flood Protection</strong></h3><pre><code class="language-bash"># System-level protection
sudo nano /etc/sysctl.conf

# Add:
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_syn_backlog = 2048
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_syn_retries = 2

# Apply
sudo sysctl -p
</code></pre><h3 id="55-slowloris-protection"><strong>5.5. Slowloris Protection</strong></h3><pre><code class="language-nginx">http {
    # Protect against slowloris
    client_body_timeout 10s;
    client_header_timeout 10s;
    send_timeout 10s;
    
    # Limit header size
    large_client_header_buffers 2 1k;
    
    # Request body limits
    client_body_buffer_size 1k;
    client_max_body_size 1M;
    
    server {
        listen 80;
        
        location / {
            proxy_pass http://backend;
        }
    }
}
</code></pre><h3 id="56-complete-ddos-protection"><strong>5.6. Complete DDoS Protection</strong></h3><pre><code class="language-nginx">http {
    # Connection limits
    limit_conn_zone $binary_remote_addr zone=addr:10m;
    limit_conn_zone $server_name zone=perserver:10m;
    
    # Rate limits
    limit_req_zone $binary_remote_addr zone=general:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=strict:10m rate=1r/s;
    
    # Timeouts
    client_body_timeout 10s;
    client_header_timeout 10s;
    send_timeout 10s;
    keepalive_timeout 30s;
    
    # Size limits
    client_body_buffer_size 1k;
    client_max_body_size 1M;
    client_header_buffer_size 1k;
    large_client_header_buffers 2 1k;
    
    # Bad patterns
    map $request_method $bad_method {
        default 0;
        ~*^(TRACE|DELETE|PUT|PATCH) 1;
    }
    
    map $http_user_agent $bad_bot {
        default 0;
        "" 1;  # Empty user agent
        ~*bot 1;
        ~*crawler 1;
        ~*spider 1;
    }
    
    server {
        listen 80;
        server_name example.com;
        
        # Connection limits
        limit_conn addr 20;
        limit_conn perserver 10000;
        
        # Rate limits
        limit_req zone=general burst=50 nodelay;
        
        # Block bad requests
        if ($bad_method) {
            return 405;
        }
        
        if ($bad_bot) {
            return 403;
        }
        
        # General content
        location / {
            proxy_pass http://backend;
            
            proxy_connect_timeout 5s;
            proxy_send_timeout 10s;
            proxy_read_timeout 10s;
        }
        
        # Sensitive endpoints (stricter)
        location /api/admin/ {
            limit_req zone=strict burst=5;
            limit_conn addr 5;
            
            allow 192.168.1.0/24;
            deny all;
            
            proxy_pass http://backend;
        }
    }
}
</code></pre><hr><h2 id="6-secure-headers"><strong>6. Secure Headers</strong></h2><h3 id="61-x-frame-options"><strong>6.1. X-Frame-Options</strong></h3><p>Prevents clickjacking attacks.</p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    # Prevent framing (clickjacking)
    add_header X-Frame-Options "SAMEORIGIN" always;
    
    # Or completely deny framing:
    # add_header X-Frame-Options "DENY" always;
    
    # Or allow specific origin:
    # add_header X-Frame-Options "ALLOW-FROM https://trusted.com" always;
}
</code></pre><h3 id="62-x-content-type-options"><strong>6.2. X-Content-Type-Options</strong></h3><p>Prevents MIME-type sniffing.</p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    
    # Prevent MIME sniffing
    add_header X-Content-Type-Options "nosniff" always;
}
</code></pre><h3 id="63-x-xss-protection"><strong>6.3. X-XSS-Protection</strong></h3><p>Enables browser XSS filter.</p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    
    # Enable XSS filter
    add_header X-XSS-Protection "1; mode=block" always;
}
</code></pre><h3 id="64-referrer-policy"><strong>6.4. Referrer-Policy</strong></h3><p>Controls referrer information.</p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    
    # Referrer policy
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    
    # Options:
    # no-referrer - Never send referrer
    # no-referrer-when-downgrade - Send on HTTPS-&gt;HTTPS, not HTTPS-&gt;HTTP
    # origin - Send only origin
    # origin-when-cross-origin - Full URL for same origin, origin for cross-origin
    # same-origin - Send only for same origin
    # strict-origin - Send origin for HTTPS-&gt;HTTPS
    # strict-origin-when-cross-origin - Recommended
    # unsafe-url - Always send full URL
}
</code></pre><h3 id="65-content-security-policy-csp"><strong>6.5. Content-Security-Policy (CSP)</strong></h3><p>Powerful defense against XSS and injection attacks.</p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name example.com;
    
    # Basic CSP
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.example.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.example.com; frame-ancestors 'self';" always;
}
</code></pre><p><strong>CSP directives explained:</strong></p><pre><code class="language-nginx"># Strict CSP (most secure)
add_header Content-Security-Policy "
    default-src 'self';
    script-src 'self';
    style-src 'self';
    img-src 'self';
    font-src 'self';
    connect-src 'self';
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
" always;

# Moderate CSP (allows CDNs)
add_header Content-Security-Policy "
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://code.jquery.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://api.example.com;
    frame-ancestors 'self';
" always;

# Report-only mode (testing)
add_header Content-Security-Policy-Report-Only "
    default-src 'self';
    report-uri /csp-report;
" always;
</code></pre><h3 id="66-permissions-policy"><strong>6.6. Permissions-Policy</strong></h3><p>Controls browser features.</p><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    
    # Permissions policy (formerly Feature-Policy)
    add_header Permissions-Policy "
        geolocation=(self),
        microphone=(),
        camera=(),
        payment=(),
        usb=(),
        magnetometer=(),
        gyroscope=(),
        accelerometer=()
    " always;
}
</code></pre><h3 id="67-cors-headers"><strong>6.7. CORS Headers</strong></h3><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    server_name api.example.com;
    
    location /api/ {
        # CORS headers
        add_header Access-Control-Allow-Origin "https://app.example.com" always;
        add_header Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS" always;
        add_header Access-Control-Allow-Headers "Authorization, Content-Type, X-Requested-With" always;
        add_header Access-Control-Allow-Credentials "true" always;
        add_header Access-Control-Max-Age "3600" always;
        
        # Handle preflight OPTIONS requests
        if ($request_method = OPTIONS) {
            return 204;
        }
        
        proxy_pass http://backend;
    }
}
</code></pre><p><strong>Wildcard CORS (use with caution):</strong></p><pre><code class="language-nginx">location /api/ {
    add_header Access-Control-Allow-Origin "*" always;
    add_header Access-Control-Allow-Methods "GET, POST, OPTIONS" always;
    add_header Access-Control-Allow-Headers "Content-Type" always;
    
    if ($request_method = OPTIONS) {
        return 204;
    }
    
    proxy_pass http://backend;
}
</code></pre><h3 id="68-complete-security-headers"><strong>6.8. Complete Security Headers</strong></h3><pre><code class="language-nginx">server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    add_header Content-Security-Policy "
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        img-src 'self' data: https:;
        font-src 'self' https://fonts.gstatic.com;
        connect-src 'self' https://api.example.com;
        frame-ancestors 'self';
        base-uri 'self';
        form-action 'self';
    " always;
    
    add_header Permissions-Policy "
        geolocation=(self),
        microphone=(),
        camera=(),
        payment=(),
        usb=()
    " always;
    
    # Hide Nginx version
    server_tokens off;
    
    # Additional security
    more_clear_headers Server;
    more_clear_headers X-Powered-By;
    
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
</code></pre><hr><h2 id="7-complete-security-configuration"><strong>7. Complete Security Configuration</strong></h2><h3 id="71-production-ready-security-setup"><strong>7.1. Production-Ready Security Setup</strong></h3><pre><code class="language-nginx"># /etc/nginx/nginx.conf

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
    
    # Hide version
    server_tokens off;
    more_clear_headers Server;
    
    # Rate limiting zones
    limit_req_zone $binary_remote_addr zone=general:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=login:10m rate=5r/m;
    limit_req_zone $binary_remote_addr zone=api:10m rate=100r/s;
    
    # Connection limiting
    limit_conn_zone $binary_remote_addr zone=addr:10m;
    limit_conn_zone $server_name zone=perserver:10m;
    
    # Status codes
    limit_req_status 429;
    limit_conn_status 429;
    
    # IP blocklist
    include /etc/nginx/blockips.conf;
    
    # Bad bot blocking
    map $http_user_agent $bad_bot {
        default 0;
        "" 1;
        ~*bot 1;
        ~*crawler 1;
        ~*scraper 1;
    }
    
    # Bad methods
    map $request_method $bad_method {
        default 0;
        ~*^(TRACE|DELETE|PUT) 1;
    }
    
    # Timeouts
    client_body_timeout 12s;
    client_header_timeout 12s;
    send_timeout 10s;
    keepalive_timeout 65s;
    
    # Size limits
    client_body_buffer_size 128k;
    client_max_body_size 10M;
    client_header_buffer_size 1k;
    large_client_header_buffers 4 8k;
    
    # Logging
    log_format security '$remote_addr - $remote_user [$time_local] '
                       '"$request" $status $body_bytes_sent '
                       '"$http_referer" "$http_user_agent" '
                       'rt=$request_time uct=$upstream_connect_time '
                       'uht=$upstream_header_time urt=$upstream_response_time';
    
    access_log /var/log/nginx/access.log security;
    
    # Include configs
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
</code></pre><h3 id="72-secure-site-configuration"><strong>7.2. Secure Site Configuration</strong></h3><pre><code class="language-nginx"># /etc/nginx/sites-available/example.com

# Upstream
upstream backend {
    least_conn;
    server backend1:8080 max_fails=3 fail_timeout=30s;
    server backend2:8080 max_fails=3 fail_timeout=30s;
    keepalive 32;
}

# HTTP -&gt; HTTPS redirect
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    # Block bad bots
    if ($bad_bot) {
        return 403;
    }
    
    # Block bad methods
    if ($bad_method) {
        return 405;
    }
    
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    location / {
        return 301 https://example.com$request_uri;
    }
}

# Main HTTPS server
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    root /var/www/html;
    index index.html;
    
    # SSL
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_session_cache shared:SSL:10m;
    ssl_stapling on;
    ssl_stapling_verify on;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" always;
    
    # Connection limits
    limit_conn addr 20;
    limit_conn perserver 10000;
    
    # Rate limiting
    limit_req zone=general burst=50 nodelay;
    
    # Block bad requests
    if ($bad_bot) {
        return 403;
    }
    
    if ($bad_method) {
        return 405;
    }
    
    # Main location
    location / {
        try_files $uri $uri/ =404;
    }
    
    # API endpoints
    location /api/ {
        limit_req zone=api burst=200 nodelay;
        
        proxy_pass http://backend/;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Login endpoint (strict rate limit)
    location /api/login {
        limit_req zone=login burst=3;
        
        proxy_pass http://backend/api/login;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
    }
    
    # Admin area (IP whitelist + auth)
    location /admin/ {
        satisfy all;
        
        allow 192.168.1.0/24;
        allow 10.0.0.100;
        deny all;
        
        auth_basic "Admin Area";
        auth_basic_user_file /etc/nginx/.htpasswd;
        
        proxy_pass http://backend/admin/;
    }
    
    # Static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # Deny hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    # Error pages
    error_page 403 /403.html;
    error_page 404 /404.html;
    error_page 429 /429.html;
    error_page 500 502 503 504 /50x.html;
}
</code></pre><hr><h2 id="8-security-testing-v%C3%A0-monitoring"><strong>8. Security Testing và Monitoring</strong></h2><h3 id="81-security-scanners"><strong>8.1. Security Scanners</strong></h3><pre><code class="language-bash"># Nikto vulnerability scanner
nikto -h https://example.com

# OWASP ZAP
zap-cli quick-scan https://example.com

# SSL Labs test
# Visit: https://www.ssllabs.com/ssltest/

# Security Headers test
# Visit: https://securityheaders.com
</code></pre><h3 id="82-monitor-attacks"><strong>8.2. Monitor Attacks</strong></h3><pre><code class="language-bash">#!/bin/bash
# monitor_attacks.sh

LOG_FILE="/var/log/nginx/access.log"
ERROR_LOG="/var/log/nginx/error.log"

echo "Security Monitoring"
echo "=================="

# Failed login attempts
echo "Failed Login Attempts:"
grep "/api/login" $LOG_FILE | grep -c " 401 "

# Rate limit hits
echo "Rate Limit Hits:"
grep "limiting requests" $ERROR_LOG | wc -l

# Blocked IPs
echo "Blocked IPs:"
grep " 403 " $LOG_FILE | awk '{print $1}' | sort | uniq -c | sort -rn | head -10

# Suspicious URLs
echo "Suspicious URLs:"
grep -E "\.\./|\.php\.|\.env|\.git" $LOG_FILE | wc -l

# Top 403 URLs
echo "Top 403 URLs:"
grep " 403 " $LOG_FILE | awk '{print $7}' | sort | uniq -c | sort -rn | head -10
</code></pre><h3 id="83-real-time-alerts"><strong>8.3. Real-time Alerts</strong></h3><pre><code class="language-bash">#!/bin/bash
# security_alert.sh

THRESHOLD=100
EMAIL="admin@example.com"

# Check rate limit hits
RATE_LIMIT_HITS=$(grep "limiting requests" /var/log/nginx/error.log | wc -l)

if [ $RATE_LIMIT_HITS -gt $THRESHOLD ]; then
    echo "ALERT: $RATE_LIMIT_HITS rate limit hits detected" | mail -s "Security Alert" $EMAIL
fi

# Check for SQL injection attempts
SQL_ATTEMPTS=$(grep -E "union.*select|concat\(|load_file" /var/log/nginx/access.log | wc -l)

if [ $SQL_ATTEMPTS -gt 0 ]; then
    echo "ALERT: $SQL_ATTEMPTS SQL injection attempts detected" | mail -s "SQL Injection Alert" $EMAIL
fi
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>Summary</strong></h2><p>In this lesson, you learned:</p><ul><li>✅ Rate limiting với limit_req và limit_conn</li><li>✅ IP blocking và whitelisting</li><li>✅ Basic authentication và JWT</li><li>✅ ModSecurity WAF integration</li><li>✅ DDoS protection techniques</li><li>✅ Secure headers (CSP, X-Frame-Options, CORS)</li><li>✅ Security testing và monitoring</li></ul><p><strong>Security checklist:</strong></p><ul><li>✅ Rate limiting enabled</li><li>✅ IP blocklist configured</li><li>✅ Authentication on sensitive areas</li><li>✅ All security headers present</li><li>✅ SSL/TLS properly configured</li><li>✅ Fail2Ban integrated</li><li>✅ Regular security audits</li><li>✅ Monitoring và alerting active</li></ul><p><strong>Next lesson:</strong> Rewrite và Redirects - regex patterns, return vs rewrite directives, location matching, try_files và conditional redirects để quản lý URL routing effectively.</p>
