---
id: 019c9617-fc93-731a-b1d3-207da4a72b80
title: 'Lesson 10: Rewrite and Redirects in NGINX'
slug: bai-10-rewrite-va-redirects-trong-nginx
description: >-
  A lesson on Rewrite and Redirects in Nginx — rewrite rules with regex, return vs rewrite directive, location matching patterns (exact, prefix, regex), try_files directive, and conditional redirects. Guide to URL manipulation, SEO-friendly redirects, and best practices for production environments.
duration_minutes: 175
is_free: true
video_url: null
sort_order: 10
section_title: "Part 3: Security & Performance"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx from Basics to Advanced
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1930" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1930)"/>

  <!-- Decorations -->
  <g>
    <circle cx="865" cy="85" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="630" cy="190" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="895" cy="35" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="660" cy="140" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="925" cy="245" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="95" x2="1100" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="125" x2="1050" y2="195" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1070.9807621135333,230 1070.9807621135333,260 1045,275 1019.0192378864668,260 1019.0192378864668,230 1045,215" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Lesson 10</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 10: Rewrite and Redirects in NGINX</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx from Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 3: Security &amp; Performance</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-rewrite-rules-v%E1%BB%9Bi-regex"><strong>1. Rewrite Rules with Regex</strong></h2><p>Rewrite rules cho phép modify URLs trước khi xử lý requests.</p><h3 id="11-c%C3%BA-ph%C3%A1p-rewrite"><strong>1.1. Cú pháp Rewrite</strong></h3><pre><code class="language-nginx">rewrite regex replacement [flag];

# regex: Regular expression pattern to match
# replacement: New URL
# flag: Optional flag (break, last, redirect, permanent)
</code></pre><p><strong>Flags:</strong></p><ul><li><code>break</code> - Stop processing, use rewritten URI</li><li><code>last</code> - Stop processing rewrite rules, re-search locations</li><li><code>redirect</code> - Return 302 temporary redirect</li><li><code>permanent</code> - Return 301 permanent redirect</li></ul><h3 id="12-basic-rewrite-examples"><strong>1.2. Basic Rewrite Examples</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # Simple rewrite
    rewrite ^/old-page$ /new-page permanent;
    
    # Rewrite with regex capture
    rewrite ^/user/(.*)$ /profile/$1 permanent;
    
    # Multiple captures
    rewrite ^/post/([0-9]+)/([a-z]+)$ /article/$2/$1 permanent;
    
    location / {
        root /var/www/html;
    }
}
</code></pre><p><strong>Example với captures:</strong></p><pre><code class="language-nginx">server {
    # /product/123 → /item.php?id=123
    rewrite ^/product/([0-9]+)$ /item.php?id=$1 last;
    
    # /category/electronics/page/5 → /cat.php?name=electronics&amp;page=5
    rewrite ^/category/([^/]+)/page/([0-9]+)$ /cat.php?name=$1&amp;page=$2 last;
    
    # /blog/2024/12/my-post → /blog.php?year=2024&amp;month=12&amp;slug=my-post
    rewrite ^/blog/([0-9]{4})/([0-9]{2})/(.+)$ /blog.php?year=$1&amp;month=$2&amp;slug=$3 last;
}
</code></pre><h3 id="13-rewrite-flags"><strong>1.3. Rewrite Flags</strong></h3><p><strong>break flag:</strong></p><pre><code class="language-nginx">location /api/ {
    # Rewrite và dừng processing
    rewrite ^/api/v1/(.*)$ /v1/$1 break;
    
    # Continue với rewritten URI
    proxy_pass http://backend;
}

# Request: /api/v1/users
# Rewritten: /v1/users
# Proxied to: http://backend/v1/users
</code></pre><p><strong>last flag:</strong></p><pre><code class="language-nginx">server {
    # Rewrite và re-search locations
    rewrite ^/old/(.*)$ /new/$1 last;
    
    location /new/ {
        # This location will be matched after rewrite
        root /var/www/html;
    }
}

# Request: /old/page
# Rewritten: /new/page
# Re-search locations, matches /new/
</code></pre><p><strong>redirect flag (302):</strong></p><pre><code class="language-nginx">server {
    # Temporary redirect
    rewrite ^/temp/(.*)$ /permanent/$1 redirect;
}

# Returns HTTP 302 Found
# Browser redirects to new URL
</code></pre><p><strong>permanent flag (301):</strong></p><pre><code class="language-nginx">server {
    # Permanent redirect (SEO-friendly)
    rewrite ^/old-site/(.*)$ https://newsite.com/$1 permanent;
}

# Returns HTTP 301 Moved Permanently
# Search engines update their index
</code></pre><h3 id="14-regex-patterns"><strong>1.4. Regex Patterns</strong></h3><p><strong>Common patterns:</strong></p><pre><code class="language-nginx">server {
    # Match digits
    rewrite ^/product/([0-9]+)$ /item/$1 last;
    
    # Match letters
    rewrite ^/user/([a-z]+)$ /profile/$1 last;
    
    # Match alphanumeric
    rewrite ^/page/([a-zA-Z0-9]+)$ /content/$1 last;
    
    # Match anything except slash
    rewrite ^/category/([^/]+)$ /cat/$1 last;
    
    # Match with specific length
    rewrite ^/code/([0-9]{6})$ /verify/$1 last;
    
    # Optional parts
    rewrite ^/blog/([0-9]+)(/.*)?$ /post/$1$2 last;
    
    # Case-insensitive (use ~* in location)
    location ~* ^/PAGE/(.*)$ {
        rewrite ^ /page/$1 permanent;
    }
}
</code></pre><p><strong>Special characters:</strong></p><pre><code class="language-nginx"># Escape special chars: . * + ? [ ] ^ $ ( ) { } | \

# Match literal dot
rewrite ^/file\.txt$ /document.txt last;

# Match query string (use $args)
rewrite ^/search$ /search.php?$args last;

# Preserve query string
rewrite ^/old$ /new permanent;  # Automatically preserves ?param=value
</code></pre><h3 id="15-multiple-rewrites"><strong>1.5. Multiple Rewrites</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # Sequential rewrites
    rewrite ^/products/(.*)$ /items/$1 last;
    
    # This won't execute because of 'last' flag above
    rewrite ^/items/(.*)$ /products/$1 last;
    
    location /items/ {
        root /var/www/html;
    }
}
</code></pre><p><strong>Correct way for chained rewrites:</strong></p><pre><code class="language-nginx">server {
    # First rewrite
    location /old/ {
        rewrite ^/old/(.*)$ /temp/$1 last;
    }
    
    # Second rewrite
    location /temp/ {
        rewrite ^/temp/(.*)$ /new/$1 last;
    }
    
    # Final location
    location /new/ {
        root /var/www/html;
    }
}
</code></pre><h3 id="16-conditional-rewrites"><strong>1.6. Conditional Rewrites</strong></h3><pre><code class="language-nginx">server {
    # Rewrite based on conditions
    
    # If not HTTPS, redirect
    if ($scheme != "https") {
        rewrite ^ https://$host$request_uri permanent;
    }
    
    # If mobile user agent
    if ($http_user_agent ~* (mobile|android|iphone)) {
        rewrite ^/$ /mobile/ last;
    }
    
    # If specific referer
    if ($http_referer ~* google.com) {
        rewrite ^/landing$ /landing-google last;
    }
    
    # Multiple conditions
    set $redirect 0;
    if ($scheme != "https") {
        set $redirect 1;
    }
    if ($host !~* ^www\.) {
        set $redirect "${redirect}1";
    }
    if ($redirect = "11") {
        rewrite ^ https://www.$host$request_uri permanent;
    }
}
</code></pre><hr><h2 id="2-return-vs-rewrite-directive"><strong>2. Return vs Rewrite Directive</strong></h2><h3 id="21-return-directive"><strong>2.1. Return Directive</strong></h3><p>Return is faster and more efficient than rewrite for simple redirects.</p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # Simple return
    location /old-page {
        return 301 /new-page;
    }
    
    # Return with variable
    location /redirect {
        return 301 https://example.com$request_uri;
    }
    
    # Return with custom response
    location /api/health {
        return 200 "OK\n";
    }
    
    # Return JSON
    location /api/status {
        default_type application/json;
        return 200 '{"status":"ok","timestamp":"$time_iso8601"}';
    }
}
</code></pre><h3 id="22-return-status-codes"><strong>2.2. Return Status Codes</strong></h3><pre><code class="language-nginx">server {
    # 301 - Permanent redirect (SEO)
    location /old {
        return 301 /new;
    }
    
    # 302 - Temporary redirect
    location /temp {
        return 302 /temporary-location;
    }
    
    # 307 - Temporary redirect (preserves method)
    location /preserve {
        return 307 /new-location;
    }
    
    # 308 - Permanent redirect (preserves method)
    location /permanent-preserve {
        return 308 /new-permanent;
    }
    
    # 200 - Success
    location /ok {
        return 200 "Success";
    }
    
    # 204 - No Content
    location /nocontent {
        return 204;
    }
    
    # 400 - Bad Request
    location /bad {
        return 400 "Bad Request";
    }
    
    # 403 - Forbidden
    location /forbidden {
        return 403 "Access Denied";
    }
    
    # 404 - Not Found
    location /notfound {
        return 404 "Not Found";
    }
    
    # 500 - Internal Server Error
    location /error {
        return 500 "Internal Server Error";
    }
    
    # 503 - Service Unavailable
    location /maintenance {
        return 503 "Under Maintenance";
    }
}
</code></pre><h3 id="23-return-vs-rewrite-performance"><strong>2.3. Return vs Rewrite Performance</strong></h3><pre><code class="language-nginx"># GOOD - Fast, efficient
location /old-page {
    return 301 /new-page;
}

# SLOWER - Regex processing overhead
location /old-page {
    rewrite ^/old-page$ /new-page permanent;
}

# GOOD - Simple return for redirects
if ($host != "www.example.com") {
    return 301 https://www.example.com$request_uri;
}

# SLOWER - Regex rewrite
if ($host != "www.example.com") {
    rewrite ^ https://www.example.com$request_uri permanent;
}
</code></pre><h3 id="24-when-to-use-each"><strong>2.4. When to Use Each</strong></h3><p><strong>Use return when:</strong></p><ul><li>Simple redirects</li><li>No regex needed</li><li>Better performance required</li><li>Returning custom content</li></ul><p><strong>Use rewrite when:</strong></p><ul><li>Need regex capture groups</li><li>Complex URL transformations</li><li>Need to preserve parts of URL</li><li>Using flags (break, last)</li></ul><p><strong>Examples:</strong></p><pre><code class="language-nginx">server {
    # Use return - simple redirect
    location = /about {
        return 301 /about-us;
    }
    
    # Use rewrite - need regex captures
    location /product/ {
        rewrite ^/product/([0-9]+)$ /item.php?id=$1 last;
    }
    
    # Use return - redirect to external URL
    location /blog {
        return 301 https://blog.example.com;
    }
    
    # Use rewrite - transform URL structure
    location /old-api/ {
        rewrite ^/old-api/v1/(.*)$ /api/v2/$1 break;
        proxy_pass http://backend;
    }
}
</code></pre><hr><h2 id="3-location-matching"><strong>3. Location Matching</strong></h2><p>Location matching xác định cách Nginx xử lý different URL patterns.</p><h3 id="31-location-modifiers"><strong>3.1. Location Modifiers</strong></h3><pre><code class="language-nginx"># No modifier - Prefix match
location /images/ {
    # Matches: /images/*, /images/photo.jpg
}

# = - Exact match (highest priority)
location = /about {
    # Matches: /about only
    # NOT: /about/, /about?page=1
}

# ^~ - Prefix match, stop regex checking
location ^~ /static/ {
    # Matches: /static/*
    # Stops checking regex locations
}

# ~ - Case-sensitive regex
location ~ \.php$ {
    # Matches: .php files (case-sensitive)
    # Matches: file.php, script.PHP (no)
}

# ~* - Case-insensitive regex
location ~* \.(jpg|png|gif)$ {
    # Matches: .jpg, .JPG, .Jpg (all cases)
}
</code></pre><h3 id="32-location-priority-order"><strong>3.2. Location Priority Order</strong></h3><p>Priority (highest to lowest):</p><ol><li>Exact match <code>=</code></li><li>Prefix match with <code>^~</code></li><li>Regular expression <code>~</code> or <code>~*</code> (first match wins)</li><li>Prefix match (longest match wins)</li></ol><p><strong>Example:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    
    # Priority 1 - Exact match
    location = /test {
        return 200 "Exact match: /test\n";
    }
    
    # Priority 2 - Prefix (stop regex)
    location ^~ /test {
        return 200 "Prefix ^~: /test*\n";
    }
    
    # Priority 3 - Regex
    location ~* ^/test {
        return 200 "Regex ~*: /test*\n";
    }
    
    # Priority 4 - Prefix
    location /test {
        return 200 "Prefix: /test*\n";
    }
    
    # Default
    location / {
        return 200 "Default: /\n";
    }
}
</code></pre><p><strong>Test results:</strong></p><pre><code class="language-bash">curl http://localhost/test
# → "Exact match: /test"

curl http://localhost/test123
# → "Prefix ^~: /test*" (if ^~ exists)
# → "Regex ~*: /test*" (if no ^~)

curl http://localhost/other
# → "Default: /"
</code></pre><h3 id="33-prefix-matching"><strong>3.3. Prefix Matching</strong></h3><pre><code class="language-nginx">server {
    # Longest prefix wins
    location /api/ {
        return 200 "API root\n";
    }
    
    location /api/v1/ {
        return 200 "API v1\n";
    }
    
    location /api/v2/ {
        return 200 "API v2\n";
    }
}

# /api/test → "API root"
# /api/v1/users → "API v1"
# /api/v2/products → "API v2"
</code></pre><h3 id="34-regex-matching"><strong>3.4. Regex Matching</strong></h3><pre><code class="language-nginx">server {
    # Case-sensitive regex
    location ~ ^/API/ {
        return 200 "Uppercase API\n";
    }
    
    # Case-insensitive regex
    location ~* ^/api/ {
        return 200 "Any case API\n";
    }
    
    # File extension regex
    location ~ \.(jpg|png|gif)$ {
        return 200 "Image file\n";
    }
    
    # Complex regex
    location ~ ^/blog/([0-9]{4})/([0-9]{2})/(.+)$ {
        return 200 "Blog post: $1-$2-$3\n";
    }
}
</code></pre><h3 id="35-nested-locations"><strong>3.5. Nested Locations</strong></h3><pre><code class="language-nginx">server {
    location /api/ {
        # Outer location
        
        # Nested location
        location ~ \.json$ {
            # Matches: /api/*.json
            return 200 "JSON API\n";
        }
        
        location ~ \.xml$ {
            # Matches: /api/*.xml
            return 200 "XML API\n";
        }
        
        # Default for /api/
        return 200 "API default\n";
    }
}
</code></pre><h3 id="36-named-locations"><strong>3.6. Named Locations</strong></h3><pre><code class="language-nginx">server {
    location / {
        try_files $uri $uri/ @backend;
    }
    
    # Named location (cannot be accessed directly)
    location @backend {
        proxy_pass http://backend_server;
    }
    
    # Another example
    error_page 404 = @notfound;
    
    location @notfound {
        return 404 "Custom 404 page\n";
    }
}
</code></pre><h3 id="37-complete-location-example"><strong>3.7. Complete Location Example</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    
    # Exact match - homepage
    location = / {
        index index.html;
    }
    
    # Exact match - specific file
    location = /favicon.ico {
        log_not_found off;
        access_log off;
    }
    
    # Prefix match with stop regex
    location ^~ /static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Regex - PHP files
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
    
    # Regex - Image files
    location ~* \.(jpg|jpeg|png|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public";
    }
    
    # Prefix match - API
    location /api/ {
        proxy_pass http://api_backend/;
    }
    
    # Default location
    location / {
        try_files $uri $uri/ =404;
    }
    
    # Deny hidden files
    location ~ /\. {
        deny all;
    }
}
</code></pre><hr><h2 id="4-tryfiles-directive"><strong>4. Try_files Directive</strong></h2><p>Try_files checks for files in order and uses the first one found.</p><h3 id="41-basic-tryfiles"><strong>4.1. Basic Try_files</strong></h3><pre><code class="language-nginx">location / {
    # Try file, then directory, then 404
    try_files $uri $uri/ =404;
}

# Request: /page
# Tries:
# 1. /page (file)
# 2. /page/ (directory with index)
# 3. Returns 404
</code></pre><h3 id="42-tryfiles-v%E1%BB%9Bi-fallback"><strong>4.2. Try_files với Fallback</strong></h3><pre><code class="language-nginx"># Single Page Application (SPA)
location / {
    try_files $uri $uri/ /index.html;
}

# Request: /about
# Tries:
# 1. /about (file)
# 2. /about/ (directory)
# 3. /index.html (fallback)

# WordPress/PHP applications
location / {
    try_files $uri $uri/ /index.php?$args;
}
</code></pre><h3 id="43-tryfiles-v%E1%BB%9Bi-named-location"><strong>4.3. Try_files với Named Location</strong></h3><pre><code class="language-nginx">location / {
    try_files $uri $uri/ @backend;
}

location @backend {
    proxy_pass http://backend_server;
}

# Request: /api/users
# Tries:
# 1. /api/users (file)
# 2. /api/users/ (directory)
# 3. @backend (proxy to backend)
</code></pre><h3 id="44-multiple-fallbacks"><strong>4.4. Multiple Fallbacks</strong></h3><pre><code class="language-nginx">location / {
    # Try multiple files
    try_files $uri $uri/index.html $uri.html @backend;
}

location @backend {
    proxy_pass http://backend;
}

# Request: /page
# Tries:
# 1. /page
# 2. /page/index.html
# 3. /page.html
# 4. @backend
</code></pre><h3 id="45-tryfiles-with-custom-response"><strong>4.5. Try_files with Custom Response</strong></h3><pre><code class="language-nginx">location / {
    try_files $uri $uri/ /404.html =404;
}

# Or return custom content
location / {
    try_files $uri $uri/ =404;
    
    error_page 404 = @notfound;
}

location @notfound {
    return 404 "File not found\n";
}
</code></pre><h3 id="46-tryfiles-patterns"><strong>4.6. Try_files Patterns</strong></h3><p><strong>Static site:</strong></p><pre><code class="language-nginx">location / {
    root /var/www/html;
    try_files $uri $uri/ =404;
}
</code></pre><p><strong>React/Vue/Angular SPA:</strong></p><pre><code class="language-nginx">location / {
    root /var/www/app;
    try_files $uri $uri/ /index.html;
}
</code></pre><p><strong>WordPress:</strong></p><pre><code class="language-nginx">location / {
    try_files $uri $uri/ /index.php?$args;
}

location ~ \.php$ {
    fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
    include fastcgi_params;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
}
</code></pre><p><strong>API with fallback:</strong></p><pre><code class="language-nginx">location /api/ {
    # Try cached response, then proxy
    try_files /cache$uri @api;
}

location @api {
    proxy_pass http://api_backend;
}
</code></pre><p><strong>Multiple static directories:</strong></p><pre><code class="language-nginx">location /assets/ {
    # Try multiple roots
    try_files /public$uri /static$uri =404;
}
</code></pre><hr><h2 id="5-conditional-redirects"><strong>5. Conditional Redirects</strong></h2><h3 id="51-if-directive"><strong>5.1. If Directive</strong></h3><pre><code class="language-nginx"># IMPORTANT: If is evil in Nginx (use sparingly)
# Prefer map, return, or rewrite when possible

server {
    # Redirect non-www to www
    if ($host !~* ^www\.) {
        return 301 https://www.$host$request_uri;
    }
    
    # Redirect HTTP to HTTPS
    if ($scheme = http) {
        return 301 https://$host$request_uri;
    }
    
    # Redirect based on user agent
    if ($http_user_agent ~* (mobile|android|iphone)) {
        return 302 /mobile;
    }
    
    # Redirect old domain
    if ($host = old.example.com) {
        return 301 https://new.example.com$request_uri;
    }
}
</code></pre><h3 id="52-map-based-redirects"><strong>5.2. Map-based Redirects</strong></h3><pre><code class="language-nginx">http {
    # Map for redirects (better than if)
    map $request_uri $redirect_uri {
        /old-page    /new-page;
        /old-about   /about-us;
        /old-contact /contact;
        default      "";
    }
    
    server {
        if ($redirect_uri != "") {
            return 301 $redirect_uri;
        }
    }
}
</code></pre><h3 id="53-geo-based-redirects"><strong>5.3. Geo-based Redirects</strong></h3><pre><code class="language-nginx">http {
    geo $country {
        default US;
        192.0.2.0/24 UK;
        198.51.100.0/24 JP;
    }
    
    map $country $redirect_domain {
        US example.com;
        UK uk.example.com;
        JP jp.example.com;
    }
    
    server {
        listen 80;
        
        if ($host != $redirect_domain) {
            return 302 https://$redirect_domain$request_uri;
        }
    }
}
</code></pre><h3 id="54-time-based-redirects"><strong>5.4. Time-based Redirects</strong></h3><pre><code class="language-nginx">http {
    map $time_iso8601 $maintenance {
        default 0;
        # Maintenance window: 2024-12-03 02:00 to 04:00
        ~^2024-12-03T0[2-3] 1;
    }
    
    server {
        if ($maintenance) {
            return 503;
        }
        
        error_page 503 /maintenance.html;
        location = /maintenance.html {
            root /var/www/errors;
        }
    }
}
</code></pre><h3 id="55-argument-based-redirects"><strong>5.5. Argument-based Redirects</strong></h3><pre><code class="language-nginx">server {
    # Redirect based on query parameter
    if ($arg_lang = "fr") {
        return 302 /fr$request_uri;
    }
    
    if ($arg_lang = "es") {
        return 302 /es$request_uri;
    }
    
    # Redirect if parameter missing
    if ($arg_id = "") {
        return 400 "ID parameter required";
    }
}
</code></pre><h3 id="56-complex-conditions"><strong>5.6. Complex Conditions</strong></h3><pre><code class="language-nginx">server {
    # Multiple conditions (AND logic)
    set $redirect 0;
    
    if ($scheme = http) {
        set $redirect "${redirect}1";
    }
    
    if ($host !~* ^www\.) {
        set $redirect "${redirect}1";
    }
    
    if ($redirect = "11") {
        return 301 https://www.$host$request_uri;
    }
}
</code></pre><hr><h2 id="6-real-world-examples"><strong>6. Real-world Examples</strong></h2><h3 id="61-seo-friendly-redirects"><strong>6.1. SEO-friendly Redirects</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    # HTTP to HTTPS (301 permanent)
    return 301 https://example.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name www.example.com;
    
    # www to non-www (301 permanent)
    return 301 https://example.com$request_uri;
}

server {
    listen 443 ssl http2;
    server_name example.com;
    
    # Old URLs to new structure
    rewrite ^/blog/([0-9]+)/([0-9]+)/(.+)$ /articles/$1-$2-$3 permanent;
    
    # Product URLs
    rewrite ^/product-([0-9]+)\.html$ /products/$1 permanent;
    
    # Category URLs
    rewrite ^/cat-([a-z-]+)$ /category/$1 permanent;
    
    location / {
        root /var/www/html;
        try_files $uri $uri/ =404;
    }
}
</code></pre><h3 id="62-migration-from-old-site"><strong>6.2. Migration from Old Site</strong></h3><pre><code class="language-nginx">http {
    # Bulk redirects using map
    map $request_uri $new_uri {
        /old-about.html      /about;
        /old-contact.html    /contact;
        /products.html       /shop;
        /blog/post1.html     /blog/post-1;
        /blog/post2.html     /blog/post-2;
        # ... hundreds more
        default              "";
    }
    
    server {
        listen 443 ssl http2;
        server_name example.com;
        
        # Apply bulk redirects
        if ($new_uri != "") {
            return 301 $new_uri;
        }
        
        # Pattern-based redirects
        rewrite ^/news/([0-9]+)$ /articles/$1 permanent;
        rewrite ^/downloads/(.+)\.zip$ /files/$1 permanent;
        
        location / {
            root /var/www/html;
            try_files $uri $uri/ =404;
        }
    }
}
</code></pre><h3 id="63-api-versioning"><strong>6.3. API Versioning</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name api.example.com;
    
    # Redirect v1 to v2
    location /v1/ {
        rewrite ^/v1/(.*)$ /v2/$1 permanent;
    }
    
    # Current API version
    location /v2/ {
        proxy_pass http://api_backend/;
    }
    
    # Default to latest version
    location / {
        rewrite ^/(.*)$ /v2/$1 last;
    }
}
</code></pre><h3 id="64-multi-language-sites"><strong>6.4. Multi-language Sites</strong></h3><pre><code class="language-nginx">http {
    # Detect language from Accept-Language
    map $http_accept_language $lang {
        default en;
        ~*^fr fr;
        ~*^es es;
        ~*^de de;
    }
    
    server {
        listen 80;
        server_name example.com;
        
        # Redirect to language-specific subdomain
        location = / {
            return 302 https://$lang.example.com;
        }
        
        # Or redirect to language path
        # location = / {
        #     return 302 /$lang/;
        # }
    }
    
    server {
        listen 80;
        server_name en.example.com;
        root /var/www/en;
    }
    
    server {
        listen 80;
        server_name fr.example.com;
        root /var/www/fr;
    }
}
</code></pre><h3 id="65-mobile-redirect"><strong>6.5. Mobile Redirect</strong></h3><pre><code class="language-nginx">http {
    # Detect mobile devices
    map $http_user_agent $is_mobile {
        default 0;
        ~*mobile 1;
        ~*android 1;
        ~*iphone 1;
        ~*ipad 1;
    }
    
    server {
        listen 80;
        server_name example.com;
        
        # Redirect mobile users
        if ($is_mobile) {
            return 302 https://m.example.com$request_uri;
        }
        
        location / {
            root /var/www/html;
        }
    }
    
    server {
        listen 80;
        server_name m.example.com;
        root /var/www/mobile;
    }
}
</code></pre><h3 id="66-maintenance-mode"><strong>6.6. Maintenance Mode</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    
    # Enable maintenance mode
    set $maintenance off;
    
    # Whitelist admin IPs
    if ($remote_addr ~ "^(192\.168\.1\.|10\.0\.0\.)") {
        set $maintenance off;
    }
    
    # Check if maintenance file exists
    if (-f /var/www/maintenance.flag) {
        set $maintenance on;
    }
    
    if ($maintenance = on) {
        return 503;
    }
    
    error_page 503 @maintenance;
    
    location @maintenance {
        rewrite ^(.*)$ /maintenance.html break;
    }
    
    location / {
        try_files $uri $uri/ =404;
    }
}
</code></pre><h3 id="67-ab-testing"><strong>6.7. A/B Testing</strong></h3><pre><code class="language-nginx">http {
    # Split traffic 50/50
    split_clients "${remote_addr}${http_user_agent}" $variant {
        50% "a";
        *   "b";
    }
    
    server {
        listen 80;
        server_name example.com;
        
        location / {
            if ($variant = "a") {
                rewrite ^ /variant-a last;
            }
            
            if ($variant = "b") {
                rewrite ^ /variant-b last;
            }
        }
        
        location /variant-a {
            root /var/www/test-a;
        }
        
        location /variant-b {
            root /var/www/test-b;
        }
    }
}
</code></pre><hr><h2 id="7-troubleshooting"><strong>7. Troubleshooting</strong></h2><h3 id="71-rewrite-loop-detection"><strong>7.1. Rewrite Loop Detection</strong></h3><pre><code class="language-nginx"># BAD - Creates infinite loop
location / {
    rewrite ^(.*)$ /index.php last;
}

location /index.php {
    rewrite ^(.*)$ / last;
}

# Request: /page
# Rewrite: /index.php
# Rewrite: /
# Rewrite: /index.php
# ... infinite loop (Nginx stops after 10 cycles)
</code></pre><p><strong>Fix:</strong></p><pre><code class="language-nginx"># GOOD - Use break or proper conditions
location / {
    try_files $uri $uri/ /index.php?$args;
}

location ~ \.php$ {
    fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
    include fastcgi_params;
}
</code></pre><h3 id="72-debug-rewrites"><strong>7.2. Debug Rewrites</strong></h3><pre><code class="language-nginx"># Enable rewrite log
error_log /var/log/nginx/error.log notice;
rewrite_log on;

server {
    location / {
        rewrite ^/test/(.*)$ /result/$1 last;
        return 200 "Original URI: $uri\n";
    }
}

# Check logs:
# tail -f /var/log/nginx/error.log
</code></pre><h3 id="73-test-redirects"><strong>7.3. Test Redirects</strong></h3><pre><code class="language-bash"># Test with curl
curl -I http://example.com/old-page

# Follow redirects
curl -L http://example.com/old-page

# Verbose output
curl -v http://example.com/old-page

# Check redirect chain
curl -IL http://example.com/old-page
</code></pre><h3 id="74-common-issues"><strong>7.4. Common Issues</strong></h3><p><strong>Issue 1: Query string not preserved</strong></p><pre><code class="language-nginx"># BAD - Loses query string
rewrite ^/old$ /new;

# GOOD - Preserves query string automatically
rewrite ^/old$ /new permanent;

# Or explicitly:
rewrite ^/old$ /new?$args permanent;
</code></pre><p><strong>Issue 2: Wrong flag causes issues</strong></p><pre><code class="language-nginx"># BAD - Uses 'last' in if
if ($host = old.com) {
    rewrite ^ https://new.com$request_uri last;
}

# GOOD - Use return or permanent
if ($host = old.com) {
    return 301 https://new.com$request_uri;
}
</code></pre><p><strong>Issue 3: Regex not matching</strong></p><pre><code class="language-nginx"># BAD - Missing anchors
rewrite /old /new permanent;
# Matches: /old, /cold, /folder/old

# GOOD - Use anchors
rewrite ^/old$ /new permanent;
# Matches: /old only

# Or use exact location
location = /old {
    return 301 /new;
}
</code></pre><hr><h2 id="8-best-practices"><strong>8. Best Practices</strong></h2><h3 id="81-prefer-return-over-rewrite"><strong>8.1. Prefer return over rewrite</strong></h3><pre><code class="language-nginx"># GOOD - Fast and clear
location /old {
    return 301 /new;
}

# AVOID - Slower, less clear
location /old {
    rewrite ^/old$ /new permanent;
}
</code></pre><h3 id="82-use-exact-matches-when-possible"><strong>8.2. Use exact matches when possible</strong></h3><pre><code class="language-nginx"># GOOD - Fastest matching
location = /about {
    return 301 /about-us;
}

# SLOWER - Regex overhead
location ~ ^/about$ {
    return 301 /about-us;
}
</code></pre><h3 id="83-avoid-if-when-possible"><strong>8.3. Avoid if when possible</strong></h3><pre><code class="language-nginx"># BAD - Using if
if ($request_uri ~ ^/old) {
    rewrite ^ /new permanent;
}

# GOOD - Use location
location ^~ /old {
    rewrite ^/old(.*)$ /new$1 permanent;
}

# BETTER - Use return
location /old {
    return 301 /new;
}
</code></pre><h3 id="84-use-map-for-bulk-redirects"><strong>8.4. Use map for bulk redirects</strong></h3><pre><code class="language-nginx"># GOOD - Efficient for many redirects
http {
    map $request_uri $redirect_uri {
        /page1 /new1;
        /page2 /new2;
        /page3 /new3;
        # ... hundreds more
    }
    
    server {
        if ($redirect_uri != "") {
            return 301 $redirect_uri;
        }
    }
}

# BAD - Many individual rewrites
server {
    rewrite ^/page1$ /new1 permanent;
    rewrite ^/page2$ /new2 permanent;
    rewrite ^/page3$ /new3 permanent;
    # ... hundreds more
}
</code></pre><h3 id="85-document-complex-rewrites"><strong>8.5. Document complex rewrites</strong></h3><pre><code class="language-nginx">server {
    # Redirect old blog structure to new
    # Old: /blog/2024/12/post-title
    # New: /articles/2024-12-post-title
    rewrite ^/blog/([0-9]{4})/([0-9]{2})/(.+)$ /articles/$1-$2-$3 permanent;
    
    # Redirect product IDs
    # Old: /product-123.html
    # New: /shop/products/123
    rewrite ^/product-([0-9]+)\.html$ /shop/products/$1 permanent;
}
</code></pre><h3 id="86-test-thoroughly"><strong>8.6. Test thoroughly</strong></h3><pre><code class="language-bash"># Create test script
#!/bin/bash

echo "Testing redirects..."

# Test 1: Old to new
curl -IL http://example.com/old-page | grep "301\|Location"

# Test 2: HTTP to HTTPS
curl -IL http://example.com | grep "301\|Location"

# Test 3: www to non-www
curl -IL https://www.example.com | grep "301\|Location"

echo "Tests complete!"
</code></pre><hr><h2 id="9-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>9. Practice Exercises</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-basic-redirects"><strong>Exercise 1: Basic Redirects</strong></h3><ol><li>Create redirect từ /old-about đến /about-us</li><li>Implement HTTP to HTTPS redirect</li><li>Redirect www to non-www</li><li>Test với curl</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-regex-rewrites"><strong>Exercise 2: Regex Rewrites</strong></h3><ol><li>Rewrite /product/123 → /item/123</li><li>Rewrite /blog/2024/12/post → /articles/2024-12-post</li><li>Preserve query strings</li><li>Test với curl</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-3-location-matching"><strong>Exercise 3: Location Matching</strong></h3><ol><li>Setup exact match cho /</li><li>Setup prefix match cho /api/</li><li>Setup regex match cho image files</li><li>Test priority order</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-tryfiles"><strong>Exercise 4: Try_files</strong></h3><ol><li>Setup SPA với try_files fallback</li><li>Configure WordPress-style try_files</li><li>Add custom 404 page</li><li>Test với various URLs</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-bulk-redirects"><strong>Exercise 5: Bulk Redirects</strong></h3><ol><li>Create map với 10+ redirects</li><li>Implement map-based redirect logic</li><li>Test all redirects</li><li>Measure performance vs individual rewrites</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-6-complex-scenario"><strong>Exercise 6: Complex Scenario</strong></h3><ol><li>Migrate old site structure to new</li><li>Implement mobile detection</li><li>Add maintenance mode</li><li>Setup proper error pages</li><li>Test thoroughly</li></ol><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>Summary</strong></h2><p>In this lesson, you learned:</p><ul><li>✅ Rewrite rules với regex và flags</li><li>✅ Return vs rewrite performance</li><li>✅ Location matching patterns và priority</li><li>✅ Try_files directive và use cases</li><li>✅ Conditional redirects</li><li>✅ Real-world redirect scenarios</li><li>✅ Troubleshooting và best practices</li></ul><p><strong>Key takeaways:</strong></p><ul><li>Prefer <code>return</code> over <code>rewrite</code> for simple redirects</li><li>Use exact matches when possible</li><li>Avoid <code>if</code> directive when alternatives exist</li><li>Use <code>map</code> for bulk redirects</li><li>Test redirects thoroughly</li><li>Document complex rewrite rules</li></ul><p><strong>Next lesson:</strong> Nginx với Application Stack - PHP-FPM configuration, Nginx + Node.js, Python (uWSGI/Gunicorn), Docker containers và WebSocket proxying để integrate Nginx với various backend technologies.</p>
