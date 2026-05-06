---
id: 019c9617-fc76-72eb-85f7-2f2ec6724934
title: 'Lesson 2: Basic Nginx Configuration'
slug: bai-2-cau-hinh-co-ban-nginx
description: >-
  A lesson on Nginx configuration with nginx.conf syntax, contexts
  (http/server/location), and basic directives. Guide to creating virtual hosts,
  serving static files, index files, autoindex, and custom error pages. Includes
  practical examples and production best practices.
duration_minutes: 155
is_free: true
video_url: null
sort_order: 2
section_title: "Part 1: Basics"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx from Basics to Advanced
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4663" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4663)"/>

  <!-- Decorations -->
  <g>
    <circle cx="653" cy="49" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="706" cy="142" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="759" cy="235" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="812" cy="68" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="865" cy="161" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="219" x2="1100" y2="299" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="249" x2="1050" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="948.444863728671,102 948.444863728671,136 919,153 889.555136271329,136 889.555136271329,102.00000000000001 919,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="148" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Lesson 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 2: Basic Nginx Configuration</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx from Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Basics</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-c%C3%BA-ph%C3%A1p-file-c%E1%BA%A5u-h%C3%ACnh-nginxconf"><strong>1. nginx.conf Configuration File Syntax</strong></h2><p>The <code>nginx.conf</code> file is the heart of Nginx, defining the entire behavior of the web server. Understanding the configuration syntax is the first step to mastering Nginx.</p><h3 id="11-c%E1%BA%A5u-tr%C3%BAc-c%C6%A1-b%E1%BA%A3n"><strong>1.1. Basic Structure</strong></h3><pre><code class="language-nginx"># Directive đơn giản (simple directive)
worker_processes 4;

# Directive block (block directive)
events {
    worker_connections 1024;
}

# Block lồng nhau (nested blocks)
http {
    server {
        location / {
            root /var/www/html;
        }
    }
}
</code></pre><h3 id="12-quy-t%E1%BA%AFc-c%C3%BA-ph%C3%A1p"><strong>1.2. Syntax Rules</strong></h3><p><strong>1. Directives:</strong></p><ul><li>Each directive ends with a semicolon <code>;</code></li><li>Directives can be simple (one line) or block (with <code>{}</code>)</li><li>Case-sensitive: <code>Root</code> differs from <code>root</code></li></ul><pre><code class="language-nginx"># Correct
worker_processes 2;

# Wrong - missing semicolon
worker_processes 2

# Wrong - incorrect case
Worker_Processes 2;
</code></pre><p><strong>2. Comments:</strong></p><pre><code class="language-nginx"># This is a single-line comment
worker_processes 4;  # End-of-line comment

# No multi-line comments in Nginx
# Must use # for each line
</code></pre><p><strong>3. Include files:</strong></p><pre><code class="language-nginx"># Include another file
include /etc/nginx/mime.types;

# Include multiple files with wildcard
include /etc/nginx/conf.d/*.conf;
include /etc/nginx/sites-enabled/*;
</code></pre><p><strong>4. Variables:</strong></p><pre><code class="language-nginx"># Nginx has many built-in variables
# Start with $
$remote_addr    # Client IP
$request_uri    # Requested URI
$host          # Hostname

# Usage example
location / {
    return 200 "Your IP: $remote_addr\n";
}
</code></pre><p><strong>5. String values:</strong></p><pre><code class="language-nginx"># No quotes needed for simple values
root /var/www/html;

# Quotes required if there are spaces or special characters
error_log "/var/log/nginx/error.log" warn;
add_header X-Custom-Header "Hello World";

# Can use single or double quotes
root '/var/www/html';
root "/var/www/html";
</code></pre><h3 id="13-units-v%C3%A0-sizes"><strong>1.3. Units and Sizes</strong></h3><pre><code class="language-nginx"># Time units
client_body_timeout 60s;      # seconds (default)
client_body_timeout 60;       # also seconds
client_body_timeout 60m;      # minutes
client_body_timeout 1h;       # hours
client_body_timeout 1d;       # days

# Size units
client_max_body_size 10m;     # megabytes
client_max_body_size 10M;     # also megabytes
client_max_body_size 1g;      # gigabytes
client_max_body_size 1024k;   # kilobytes
client_max_body_size 1048576; # bytes (no unit)
</code></pre><h3 id="14-measurement-units"><strong>1.4. Measurement units</strong></h3><pre><code class="language-nginx"># No unit = bytes
client_max_body_size 1048576;  # 1MB

# k/K = kilobytes
client_max_body_size 1024k;

# m/M = megabytes
client_max_body_size 1m;

# g/G = gigabytes (Nginx 0.7.0+)
client_max_body_size 1g;
</code></pre><hr><h2 id="2-context-v%C3%A0-directive"><strong>2. Contexts and Directives</strong></h2><p>Nginx uses a context system to organize configuration by level. Each context defines the scope of applicable directives.</p><h3 id="21-c%C3%A1c-context-ch%C3%ADnh"><strong>2.1. Main Contexts</strong></h3><pre><code class="language-nginx"># MAIN CONTEXT (global)
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /var/run/nginx.pid;

# EVENTS CONTEXT
events {
    worker_connections 1024;
    use epoll;
}

# HTTP CONTEXT
http {
    # Applies to all HTTP traffic
    
    # SERVER CONTEXT
    server {
        # Applies to a specific virtual host
        
        # LOCATION CONTEXT
        location / {
            # Applies to a specific URL pattern
        }
    }
}

# STREAM CONTEXT (for TCP/UDP)
stream {
    server {
        listen 3306;
    }
}

# MAIL CONTEXT (for mail proxy)
mail {
    server {
        listen 25;
    }
}
</code></pre><h3 id="22-http-contextc%E1%BA%A5u-h%C3%ACnh-to%C3%A0n-c%E1%BB%A5c"><strong>2.2. HTTP Context - Global Configuration</strong></h3><pre><code class="language-nginx">http {
    # MIME types
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Logging
    log_format main '$remote_addr - $remote_user [$time_local] '
                    '"$request" $status $body_bytes_sent '
                    '"$http_referer" "$http_user_agent"';
    
    access_log /var/log/nginx/access.log main;
    error_log /var/log/nginx/error.log warn;

    # Performance
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Include server blocks
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
</code></pre><h3 id="23-server-contextvirtual-host"><strong>2.3. Server Context - Virtual Host</strong></h3><pre><code class="language-nginx">http {
    # Server block 1
    server {
        listen 80;
        server_name example.com www.example.com;
        root /var/www/example.com;
        
        access_log /var/log/nginx/example.com.access.log;
        error_log /var/log/nginx/example.com.error.log;
    }

    # Server block 2
    server {
        listen 80;
        server_name blog.example.com;
        root /var/www/blog;
    }

    # Default server (catch-all)
    server {
        listen 80 default_server;
        server_name _;
        return 444;  # Close connection
    }
}
</code></pre><h3 id="24-location-contexturl-matching"><strong>2.4. Location Context - URL Matching</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;

    # Exact match
    location = /about {
        # Matches only /about
    }

    # Prefix match
    location /images/ {
        # Matches /images/*, /images/photo.jpg, etc.
    }

    # Regex match (case-sensitive)
    location ~ \.(jpg|png|gif)$ {
        # Matches files ending with .jpg, .png, .gif
    }

    # Regex match (case-insensitive)
    location ~* \.(jpg|png|gif)$ {
        # Matches JPG, jpg, JpG, etc.
    }

    # Prefix match (stop regex checking)
    location ^~ /api/ {
        # Matches /api/* and stops regex checking
    }

    # Default location
    location / {
        # Matches everything if no other match
    }
}
</code></pre><h3 id="25-priority-c%E1%BB%A7a-location-matching"><strong>2.5. Location Matching Priority</strong></h3><p>Nginx processes locations in priority order:</p><ol><li><strong><code>=</code></strong> - Exact match (highest)</li><li><strong><code>^~</code></strong> - Prefix match (stop regex)</li><li><strong><code>~</code> or <code>~*</code></strong> - Regex match (in order of appearance in file)</li><li><strong>No modifier</strong> - Prefix match (lowest)</li></ol><p><strong>Illustrative example:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    # Priority 1 - Exact match
    location = /test {
        return 200 "Exact match: /test\n";
    }

    # Priority 2 - Prefix (stop regex)
    location ^~ /test {
        return 200 "Prefix match (^~): /test*\n";
    }

    # Priority 3 - Regex (case-insensitive)
    location ~* ^/test {
        return 200 "Regex match (~*): /test*\n";
    }

    # Priority 4 - Prefix match
    location /test {
        return 200 "Prefix match: /test*\n";
    }

    # Default
    location / {
        return 200 "Default location\n";
    }
}
</code></pre><p><strong>Test results:</strong></p><pre><code class="language-bash">curl http://example.com/test
# → "Exact match: /test"

curl http://example.com/test123
# → "Prefix match (^~): /test*" (because ^~ stops regex)

# If removing the ^~ location:
curl http://example.com/test123
# → "Regex match (~*): /test*"
</code></pre><hr><h2 id="3-c%E1%BA%A5u-h%C3%ACnh-virtual-host-server-blocks"><strong>3. Configuring Virtual Hosts (Server Blocks)</strong></h2><p>Virtual hosts allow a single Nginx server to serve multiple websites and domains.</p><h3 id="31-t%E1%BA%A1o-virtual-host-%C4%91%E1%BA%A7u-ti%C3%AAn"><strong>3.1. Creating Your First Virtual Host</strong></h3><p><strong>Step 1: Create the website directory</strong></p><pre><code class="language-bash"># Create document root
sudo mkdir -p /var/www/mysite.com/html

# Create logs directory
sudo mkdir -p /var/www/mysite.com/logs

# Set ownership
sudo chown -R $USER:$USER /var/www/mysite.com
sudo chmod -R 755 /var/www/mysite.com
</code></pre><p><strong>Step 2: Create a sample HTML file</strong></p><pre><code class="language-bash">cat &gt; /var/www/mysite.com/html/index.html &lt;&lt; 'EOF'
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Welcome to mysite.com&lt;/title&gt;
    &lt;style&gt;
        body { font-family: Arial, sans-serif; margin: 50px; }
        h1 { color: #00539C; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to mysite.com!&lt;/h1&gt;
    &lt;p&gt;This is my first Nginx virtual host.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
EOF
</code></pre><p><strong>Step 3: Create the virtual host configuration file</strong></p><pre><code class="language-bash"># Ubuntu/Debian
sudo nano /etc/nginx/sites-available/mysite.com

# CentOS/RHEL
sudo nano /etc/nginx/conf.d/mysite.com.conf
</code></pre><p><strong>Configuration file contents:</strong></p><pre><code class="language-nginx">server {
    # Port and server name
    listen 80;
    listen [::]:80;
    server_name mysite.com www.mysite.com;

    # Document root
    root /var/www/mysite.com/html;
    index index.html index.htm;

    # Logs
    access_log /var/www/mysite.com/logs/access.log;
    error_log /var/www/mysite.com/logs/error.log;

    # Main location
    location / {
        try_files $uri $uri/ =404;
    }

    # Error pages
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    
    location = /404.html {
        internal;
    }
    
    location = /50x.html {
        internal;
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
</code></pre><p><strong>Step 4: Enable the virtual host (Ubuntu/Debian)</strong></p><pre><code class="language-bash"># Create symlink
sudo ln -s /etc/nginx/sites-available/mysite.com /etc/nginx/sites-enabled/

# Check configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
</code></pre><p><strong>Step 5: Configure DNS or hosts file</strong></p><pre><code class="language-bash"># Add to /etc/hosts (for local testing)
sudo nano /etc/hosts

# Add the line:
127.0.0.1  mysite.com www.mysite.com
</code></pre><p><strong>Step 6: Test</strong></p><pre><code class="language-bash">curl http://mysite.com
# or open browser: http://mysite.com
</code></pre><h3 id="32-virtual-host-v%E1%BB%9Bi-nhi%E1%BB%81u-domains"><strong>3.2. Virtual Host with Multiple Domains</strong></h3><pre><code class="language-nginx"># Config 1: Multiple domains for the same content
server {
    listen 80;
    server_name mysite.com www.mysite.com example.com www.example.com;
    root /var/www/mysite.com/html;
    index index.html;
}

# Config 2: Subdomain
server {
    listen 80;
    server_name blog.mysite.com;
    root /var/www/blog;
    index index.html;
}

server {
    listen 80;
    server_name shop.mysite.com;
    root /var/www/shop;
    index index.html;
}

# Config 3: Wildcard subdomain
server {
    listen 80;
    server_name *.mysite.com;
    root /var/www/subdomains/$host;
    
    # $host will contain subdomain.mysite.com
}

# Config 4: Regex server name
server {
    listen 80;
    server_name ~^(www\.)?(?&lt;domain&gt;.+)$;
    root /var/www/$domain;
}
</code></pre><h3 id="33-default-server-catch-all"><strong>3.3. Default Server (Catch-all)</strong></h3><pre><code class="language-nginx"># Default server to handle unmatched requests
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;  # Underscore = don't care about server name
    
    # Option 1: Return 444 (close connection)
    return 444;
    
    # Option 2: Return 403 Forbidden
    # return 403;
    
    # Option 3: Redirect to main site
    # return 301 https://mainsite.com$request_uri;
    
    # Option 4: Show maintenance page
    # root /var/www/default;
    # index maintenance.html;
}
</code></pre><h3 id="34-listen-directives-n%C3%A2ng-cao"><strong>3.4. Advanced Listen Directives</strong></h3><pre><code class="language-nginx">server {
    # IPv4
    listen 80;
    
    # IPv6
    listen [::]:80;
    
    # Specific IP
    listen 192.168.1.100:80;
    
    # Different port
    listen 8080;
    
    # Default server
    listen 80 default_server;
    
    # SSL
    listen 443 ssl;
    listen [::]:443 ssl;
    
    # HTTP/2
    listen 443 ssl http2;
    
    # Multiple options
    listen 80 default_server reuseport;
}
</code></pre><hr><h2 id="4-serving-static-files"><strong>4. Serving Static Files</strong></h2><p>Nginx excels at serving static content (HTML, CSS, JS, images).</p><h3 id="41-c%E1%BA%A5u-h%C3%ACnh-c%C6%A1-b%E1%BA%A3n"><strong>4.1. Basic Configuration</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name static.example.com;
    
    # Document root
    root /var/www/static;
    
    # Index files
    index index.html index.htm;
    
    # Main location
    location / {
        try_files $uri $uri/ =404;
    }
}
</code></pre><p><strong>Directory structure:</strong></p><pre><code>/var/www/static/
├── index.html
├── css/
│   ├── style.css
│   └── bootstrap.css
├── js/
│   ├── app.js
│   └── jquery.js
└── images/
    ├── logo.png
    └── background.jpg
</code></pre><p><strong>Requests handled:</strong></p><pre><code>http://static.example.com/              → /var/www/static/index.html
http://static.example.com/css/style.css → /var/www/static/css/style.css
http://static.example.com/images/logo.png → /var/www/static/images/logo.png
</code></pre><h3 id="42-root-vs-alias"><strong>4.2. Root vs Alias</strong></h3><p><strong>Root directive:</strong></p><pre><code class="language-nginx">location /images/ {
    root /var/www/static;
}
# Request: /images/photo.jpg
# File path: /var/www/static/images/photo.jpg
# (root + location path)
</code></pre><p><strong>Alias directive:</strong></p><pre><code class="language-nginx">location /images/ {
    alias /var/www/photos/;
}
# Request: /images/photo.jpg
# File path: /var/www/photos/photo.jpg
# (alias replaces location path)
</code></pre><p><strong>Detailed example:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # Using root
    location /static/ {
        root /var/www;
    }
    # /static/style.css → /var/www/static/style.css
    
    # Using alias
    location /assets/ {
        alias /var/www/static/;
    }
    # /assets/style.css → /var/www/static/style.css
    
    # Alias for exact path
    location = /favicon.ico {
        alias /var/www/icons/favicon.ico;
    }
}
</code></pre><p><strong>Note:</strong> When using alias, the location path must end with <code>/</code> if alias also ends with <code>/</code>.</p><h3 id="43-tryfiles-directive"><strong>4.3. Try_files Directive</strong></h3><pre><code class="language-nginx"># Syntax
try_files file ... uri;
try_files file ... =code;

# Example 1: Check file, folder, then 404
location / {
    try_files $uri $uri/ =404;
}

# Example 2: Fallback to index.html (SPA)
location / {
    try_files $uri $uri/ /index.html;
}

# Example 3: Check multiple files
location / {
    try_files $uri $uri/index.html $uri.html =404;
}

# Example 4: Fallback to backend
location / {
    try_files $uri $uri/ @backend;
}

location @backend {
    proxy_pass http://localhost:3000;
}
</code></pre><h3 id="44-c%E1%BA%A5u-h%C3%ACnh-cho-t%E1%BB%ABng-lo%E1%BA%A1i-file"><strong>4.4. Configuration per File Type</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name cdn.example.com;
    root /var/www/cdn;

    # HTML files
    location ~ \.html$ {
        add_header Cache-Control "public, max-age=3600";
    }

    # CSS and JavaScript
    location ~ \.(css|js)$ {
        add_header Cache-Control "public, max-age=31536000";
        access_log off;
    }

    # Images
    location ~ \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        add_header Cache-Control "public, max-age=31536000";
        access_log off;
        expires 1y;
    }

    # Fonts
    location ~ \.(woff|woff2|ttf|otf|eot)$ {
        add_header Cache-Control "public, max-age=31536000";
        add_header Access-Control-Allow-Origin "*";
        access_log off;
    }

    # Videos
    location ~ \.(mp4|webm|ogg)$ {
        add_header Cache-Control "public, max-age=31536000";
        mp4;  # Enable MP4 streaming
        access_log off;
    }

    # Downloads
    location /downloads/ {
        add_header Content-Disposition "attachment";
    }
}
</code></pre><h3 id="45-security-cho-static-files"><strong>4.5. Security for Static Files</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    root /var/www/html;

    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    # Deny access to backup files
    location ~ ~$ {
        deny all;
        access_log off;
        log_not_found off;
    }

    # Deny access to config files
    location ~ \.(conf|config|yml|yaml|ini)$ {
        deny all;
    }

    # Protect sensitive directories
    location ~ ^/(\.git|\.svn|\.env) {
        deny all;
    }
}
</code></pre><hr><h2 id="5-c%E1%BA%A5u-h%C3%ACnh-index-files-v%C3%A0-autoindex"><strong>5. Configuring Index Files and Autoindex</strong></h2><h3 id="51-index-directive"><strong>5.1. Index Directive</strong></h3><pre><code class="language-nginx"># Syntax
index file ...;

# Example 1: Default index
server {
    listen 80;
    root /var/www/html;
    index index.html index.htm;
}

# Example 2: Multiple index files (in order)
server {
    listen 80;
    root /var/www/html;
    index index.php index.html index.htm default.html;
}

# Example 3: Different index files per location
server {
    listen 80;
    root /var/www/html;
    
    location / {
        index index.html;
    }
    
    location /blog/ {
        index index.php;
    }
    
    location /docs/ {
        index readme.md index.html;
    }
}
</code></pre><h3 id="52-autoindex-directory-listing"><strong>5.2. Autoindex (Directory Listing)</strong></h3><pre><code class="language-nginx"># Enable autoindex
server {
    listen 80;
    server_name files.example.com;
    root /var/www/files;
    
    location / {
        autoindex on;
    }
}

# Detailed autoindex configuration
location /downloads/ {
    autoindex on;                    # Enable directory listing
    autoindex_exact_size off;        # Show size in KB, MB instead of bytes
    autoindex_localtime on;          # Show local time instead of GMT
    autoindex_format html;           # Format: html, xml, json, jsonp
}

# Example with JSON format
location /api/files/ {
    autoindex on;
    autoindex_format json;
}
</code></pre><p><strong>Autoindex output:</strong></p><pre><code>Index of /downloads/

../
file1.pdf                          23-Nov-2024 10:30      2.5M
file2.zip                          22-Nov-2024 15:45      15M
folder/                            20-Nov-2024 09:00      -
</code></pre><h3 id="53-custom-autoindex-styling"><strong>5.3. Custom Autoindex Styling</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    root /var/www/files;
    
    location / {
        autoindex on;
        autoindex_exact_size off;
        autoindex_localtime on;
        
        # Add custom header/footer
        add_before_body /autoindex/header.html;
        add_after_body /autoindex/footer.html;
    }
    
    location /autoindex/ {
        internal;
        alias /var/www/autoindex/;
    }
}
</code></pre><p><strong>header.html file:</strong></p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;File Directory&lt;/title&gt;
    &lt;style&gt;
        body { font-family: Arial; margin: 20px; }
        h1 { color: #333; }
        a { color: #0066cc; text-decoration: none; }
        a:hover { text-decoration: underline; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;File Directory&lt;/h1&gt;
    &lt;hr&gt;
</code></pre><p><strong>footer.html file:</strong></p><pre><code class="language-html">    &lt;hr&gt;
    &lt;p&gt;© 2024 My Company&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><hr><h2 id="6-error-pages-t%C3%B9y-ch%E1%BB%89nh"><strong>6. Custom Error Pages</strong></h2><h3 id="61-c%E1%BA%A5u-h%C3%ACnh-c%C6%A1-b%E1%BA%A3n"><strong>6.1. Basic Configuration</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;

    # Custom error pages
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;

    # Location for error pages
    location = /404.html {
        internal;  # Only accessible internally
    }

    location = /50x.html {
        internal;
    }
}
</code></pre><h3 id="62-error-pages-chi-ti%E1%BA%BFt"><strong>6.2. Detailed Error Pages</strong></h3><p><strong>Create 404.html file:</strong></p><pre><code class="language-bash">cat &gt; /var/www/html/404.html &lt;&lt; 'EOF'
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;404 - Page Not Found&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: #f5f5f5;
        }
        h1 { font-size: 72px; color: #e74c3c; }
        p { font-size: 24px; color: #555; }
        a { color: #3498db; text-decoration: none; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;404&lt;/h1&gt;
    &lt;p&gt;Oops! Page not found.&lt;/p&gt;
    &lt;p&gt;&lt;a href="/"&gt;← Go back home&lt;/a&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
EOF
</code></pre><p><strong>Create 50x.html file:</strong></p><pre><code class="language-bash">cat &gt; /var/www/html/50x.html &lt;&lt; 'EOF'
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;500 - Server Error&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: #f5f5f5;
        }
        h1 { font-size: 72px; color: #e67e22; }
        p { font-size: 24px; color: #555; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;500&lt;/h1&gt;
    &lt;p&gt;Internal Server Error&lt;/p&gt;
    &lt;p&gt;We're working on it!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
EOF
</code></pre><h3 id="63-error-pages-n%C3%A2ng-cao"><strong>6.3. Advanced Error Pages</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;

    # Error pages per location
    location / {
        error_page 404 /errors/404.html;
    }

    location /api/ {
        error_page 404 /errors/api-404.json;
        error_page 500 /errors/api-500.json;
    }

    # Error page with custom message
    location /special/ {
        error_page 404 =200 /custom-404.html;
        # =200 overrides the status code
    }

    # Redirect to external error page
    location /old-site/ {
        error_page 404 = @external_error;
    }

    location @external_error {
        return 302 https://example.com/error-handler;
    }

    # Error page with variable
    location /dynamic/ {
        error_page 404 /404.html?page=$uri;
    }

    # Named location for errors
    error_page 404 = @notfound;
    
    location @notfound {
        return 404 "Custom 404 message\n";
    }
}
</code></pre><h3 id="64-error-log-v%E1%BB%9Bi-format"><strong>6.4. Error Log with Format</strong></h3><pre><code class="language-nginx">http {
    # Define custom error log format
    log_format error_log '[$time_local] $status $request '
                         'Client: $remote_addr '
                         'Server: $server_name';

    server {
        listen 80;
        server_name example.com;
        
        # Use custom format
        error_log /var/log/nginx/example.error.log error_log;
        
        # Different log level
        error_log /var/log/nginx/debug.log debug;
    }
}
</code></pre><hr><h2 id="7-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>7. Practice Exercises</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-t%E1%BA%A1o-virtual-host"><strong>Exercise 1: Create a Virtual Host</strong></h3><ol><li>Create a virtual host for <code>mysite.local</code></li><li>Document root: <code>/var/www/mysite</code></li><li>Create an index.html file with any content</li><li>Add to /etc/hosts and test</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-static-file-server"><strong>Exercise 2: Static File Server</strong></h3><ol><li>Create the directory structure:</li></ol><pre><code>/var/www/static/
├── index.html
├── css/style.css
├── js/app.js
└── images/logo.png
</code></pre><ol start="2"><li>Configure Nginx to serve these files</li><li>Set different cache headers for each file type</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-3-directory-listing"><strong>Exercise 3: Directory Listing</strong></h3><ol><li>Create a virtual host for <code>files.local</code></li><li>Enable autoindex</li><li>Customize the format and styling</li><li>Test with multiple files</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-custom-error-pages"><strong>Exercise 4: Custom Error Pages</strong></h3><ol><li>Create custom 404 and 500 pages</li><li>Apply to a virtual host</li><li>Test by accessing a non-existent URL</li><li>Test a 500 error (can fake with <code>return 500</code>)</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-multiple-virtual-hosts"><strong>Exercise 5: Multiple Virtual Hosts</strong></h3><ol><li>Create 3 virtual hosts:<ul><li><code>site1.local</code> → <code>/var/www/site1</code></li><li><code>site2.local</code> → <code>/var/www/site2</code></li><li><code>blog.site1.local</code> → <code>/var/www/blog</code></li></ul></li><li>Each site has different content</li><li>Configure and test all of them</li></ol><hr><h2 id="8-troubleshooting-th%C6%B0%E1%BB%9Dng-g%E1%BA%B7p"><strong>8. Common Troubleshooting</strong></h2><h3 id="l%E1%BB%97i-1-403-forbidden"><strong>Error 1: 403 Forbidden</strong></h3><pre><code class="language-bash"># Cause: Permission
ls -la /var/www/html

# Fix: Set correct ownership
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

# Cause: SELinux (CentOS)
sudo setenforce 0
</code></pre><h3 id="l%E1%BB%97i-2-404-not-found"><strong>Error 2: 404 Not Found</strong></h3><pre><code class="language-nginx"># Check root directive
location / {
    root /var/www/html;  # Is this path correct?
    index index.html;    # Does this file exist?
}

# Check with curl
curl -I http://example.com
</code></pre><h3 id="l%E1%BB%97i-3-c%E1%BA%A5u-h%C3%ACnh-kh%C3%B4ng-reload"><strong>Error 3: Configuration Not Reloading</strong></h3><pre><code class="language-bash"># Test config first
sudo nginx -t

# If OK, reload
sudo systemctl reload nginx

# Check error log
sudo tail -f /var/log/nginx/error.log
</code></pre><h3 id="l%E1%BB%97i-4-server-name-kh%C3%B4ng-work"><strong>Error 4: Server Name Not Working</strong></h3><pre><code class="language-bash"># Check DNS/hosts
cat /etc/hosts

# Check server_name directive
grep server_name /etc/nginx/sites-available/*

# Clear browser cache
# Or test with curl
curl -H "Host: mysite.com" http://localhost
</code></pre><hr><h2 id="9-best-practices"><strong>9. Best Practices</strong></h2><ol><li><strong>Organize configuration files:</strong></li></ol><pre><code>/etc/nginx/
├── nginx.conf (main config)
├── conf.d/ (global configs)
└── sites-available/ (individual sites)
</code></pre><ol start="2"><li><strong>Clear comments:</strong></li></ol><pre><code class="language-nginx"># Block spam bots
if ($http_user_agent ~* (bot|crawler|spider)) {
    return 403;
}
</code></pre><ol start="3"><li><strong>Use includes:</strong></li></ol><pre><code class="language-nginx">http {
    include /etc/nginx/mime.types;
    include /etc/nginx/conf.d/*.conf;
}
</code></pre><ol start="4"><li><strong>Test before reloading:</strong></li></ol><pre><code class="language-bash">sudo nginx -t &amp;&amp; sudo systemctl reload nginx
</code></pre><ol start="5"><li><strong>Backup configs:</strong></li></ol><pre><code class="language-bash">sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>Summary</strong></h2><p>In this lesson, you learned:</p><ul><li>✅ nginx.conf syntax and structure</li><li>✅ Contexts and directives in Nginx</li><li>✅ Creating and managing virtual hosts</li><li>✅ Serving static files efficiently</li><li>✅ Configuring index files and autoindex</li><li>✅ Customizing error pages</li></ul><p><strong>Next lesson:</strong> We will explore Logging and Monitoring — how to track and analyze traffic on your Nginx server.</p>
