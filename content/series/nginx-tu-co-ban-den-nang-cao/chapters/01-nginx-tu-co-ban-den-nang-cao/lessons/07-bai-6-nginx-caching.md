---
id: 019c9617-fc84-72f3-8493-62103d1a8b50
title: 'Bài 6: NGINX CACHING'
slug: bai-6-nginx-caching
description: >-
  Bài học về Caching trong Nginx - browser caching với expires và Cache-Control
  headers, proxy caching, FastCGI caching cho PHP, cache keys và zones. Hướng
  dẫn cache purging, bypass strategies và optimization techniques. Bao gồm
  examples thực tế để tăng performance và giảm load.
duration_minutes: 235
is_free: true
video_url: null
sort_order: 6
section_title: Nginx từ Cơ bản đến Nâng cao
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx từ Cơ bản đến Nâng cao
  slug: nginx-tu-co-ban-den-nang-cao
---
<h2 id="tags"><strong>TAGS</strong></h2><p><code>#Nginx</code> <code>#Caching</code> <code>#ProxyCache</code> <code>#FastCGI</code> <code>#BrowserCache</code> <code>#CacheControl</code> <code>#Expires</code> <code>#Performance</code> <code>#Optimization</code> <code>#CDN</code> <code>#CachePurging</code> <code>#CacheBypass</code> <code>#WebPerformance</code> <code>#StaticContent</code> <code>#DynamicContent</code> <code>#Tutorial</code> <code>#Production</code> <code>#BestPractices</code> <code>#DevOps</code> <code>#Infrastructure</code></p><hr><h2 id="1-browser-caching-v%E1%BB%9Bi-expires-v%C3%A0-cache-control-headers"><strong>1. Browser Caching với Expires và Cache-Control Headers</strong></h2><p>Browser caching lưu trữ files tại client browser, giảm số requests đến server và tăng tốc độ load.</p><h3 id="11-expires-header"><strong>1.1. Expires Header</strong></h3><p>Expires header chỉ định thời điểm cụ thể khi cache hết hạn.</p><p><strong>Cú pháp cơ bản:</strong></p><pre><code class="language-nginx">location ~* \.(jpg|jpeg|png|gif|ico)$ {
    expires 30d;  # Cache 30 ngày
}
</code></pre><p><strong>Các giá trị expires:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    
    # Images - cache lâu
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        expires 1y;  # 1 năm
        add_header Cache-Control "public, immutable";
    }
    
    # CSS và JavaScript - cache trung bình
    location ~* \.(css|js)$ {
        expires 1M;  # 1 tháng
        add_header Cache-Control "public";
    }
    
    # HTML - cache ngắn hoặc no-cache
    location ~* \.html$ {
        expires 1h;  # 1 giờ
        add_header Cache-Control "public, must-revalidate";
    }
    
    # API responses - không cache
    location /api/ {
        expires -1;  # Không cache
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
}
</code></pre><p><strong>Time units:</strong></p><pre><code class="language-nginx">expires 1s;    # 1 second
expires 5m;    # 5 minutes
expires 2h;    # 2 hours
expires 7d;    # 7 days
expires 3M;    # 3 months (30 days)
expires 1y;    # 1 year

expires -1;    # Không cache (Cache-Control: no-cache)
expires epoch; # Expires: Thu, 01 Jan 1970 00:00:01 GMT
expires max;   # Expires: Thu, 31 Dec 2037 23:55:55 GMT
expires off;   # Không set Expires header
</code></pre><p><strong>Ví dụ chi tiết:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name cdn.example.com;
    root /var/www/cdn;
    
    # Versioned assets - cache vĩnh viễn
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf)$ {
        # Chỉ áp dụng cho files có version trong tên
        # vd: style.v1.2.3.css, app.20240101.js
        if ($uri ~ "\.v[0-9]+\.|\.v?\d{8,}\.") {
            expires max;
            add_header Cache-Control "public, immutable";
        }
        
        # Files không có version
        expires 1M;
        add_header Cache-Control "public";
    }
    
    # Videos - cache lâu nhưng có thể revalidate
    location ~* \.(mp4|webm|ogg|avi)$ {
        expires 6M;
        add_header Cache-Control "public, max-age=15552000";
    }
    
    # Documents - cache ngắn
    location ~* \.(pdf|doc|docx|xls|xlsx)$ {
        expires 1d;
        add_header Cache-Control "public, max-age=86400";
    }
}
</code></pre><h3 id="12-cache-control-header"><strong>1.2. Cache-Control Header</strong></h3><p>Cache-Control là modern alternative cho Expires, flexible hơn.</p><p><strong>Cache-Control directives:</strong></p><pre><code class="language-nginx"># public: Có thể cache bởi browser và intermediate caches
add_header Cache-Control "public";

# private: Chỉ browser cache, không cache ở proxies
add_header Cache-Control "private";

# no-cache: Phải revalidate trước khi dùng cache
add_header Cache-Control "no-cache";

# no-store: Không cache gì cả
add_header Cache-Control "no-store";

# max-age: Cache duration (seconds)
add_header Cache-Control "public, max-age=31536000";

# s-maxage: Max-age cho shared caches (CDN, proxies)
add_header Cache-Control "public, max-age=3600, s-maxage=86400";

# must-revalidate: Phải revalidate khi stale
add_header Cache-Control "public, max-age=3600, must-revalidate";

# immutable: Content không bao giờ thay đổi
add_header Cache-Control "public, max-age=31536000, immutable";

# no-transform: Không cho phép transform content
add_header Cache-Control "public, no-transform";
</code></pre><p><strong>Combining directives:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # Static assets với versioning - immutable
    location ~* /static/.*\.(css|js)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    # Images - public, long cache
    location ~* \.(jpg|png|gif|svg)$ {
        expires 6M;
        add_header Cache-Control "public, max-age=15552000";
    }
    
    # HTML - cache ngắn với revalidation
    location ~* \.html$ {
        expires 10m;
        add_header Cache-Control "public, max-age=600, must-revalidate";
    }
    
    # User-specific content - private
    location /dashboard/ {
        add_header Cache-Control "private, max-age=300";
    }
    
    # Sensitive data - no cache
    location /account/ {
        add_header Cache-Control "private, no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
    }
}
</code></pre><h3 id="13-conditional-caching"><strong>1.3. Conditional Caching</strong></h3><pre><code class="language-nginx">map $sent_http_content_type $expires {
    default                    off;
    text/html                  1h;
    text/css                   1M;
    application/javascript     1M;
    ~image/                    1y;
    application/pdf            7d;
    ~font/                     1y;
}

server {
    listen 80;
    server_name example.com;
    
    expires $expires;
    
    # Override cho specific paths
    location /news/ {
        expires 5m;
        add_header Cache-Control "public, max-age=300";
    }
}
</code></pre><p><strong>Cache dựa trên file extension:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    root /var/www/html;
    
    # Map file extensions to cache duration
    location / {
        if ($request_uri ~* "\.(jpg|jpeg|png|gif|ico)$") {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
        
        if ($request_uri ~* "\.(css|js)$") {
            expires 1M;
            add_header Cache-Control "public";
        }
        
        if ($request_uri ~* "\.html$") {
            expires 1h;
            add_header Cache-Control "public, must-revalidate";
        }
        
        try_files $uri $uri/ =404;
    }
}
</code></pre><h3 id="14-etag-v%C3%A0-last-modified"><strong>1.4. ETag và Last-Modified</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # Enable ETag
    etag on;
    
    # Enable Last-Modified header
    if_modified_since before;
    
    location / {
        root /var/www/html;
        
        # Browser sẽ gửi If-None-Match (ETag) hoặc If-Modified-Since
        # Nginx trả về 304 Not Modified nếu file không thay đổi
    }
}
</code></pre><p><strong>Example với conditional requests:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name api.example.com;
    
    location /api/data {
        proxy_pass http://backend;
        
        # Pass conditional headers to backend
        proxy_set_header If-Modified-Since $http_if_modified_since;
        proxy_set_header If-None-Match $http_if_none_match;
        
        # Backend returns 304 if not modified
        # Nginx forwards 304 to client
    }
}
</code></pre><hr><h2 id="2-proxy-caching-c%C6%A1-b%E1%BA%A3n"><strong>2. Proxy Caching Cơ bản</strong></h2><p>Proxy caching lưu trữ responses từ backend servers, giảm load và response time.</p><h3 id="21-c%E1%BA%A5u-h%C3%ACnh-proxy-cache-zone"><strong>2.1. Cấu hình Proxy Cache Zone</strong></h3><pre><code class="language-nginx"># Define cache path và settings (trong http context)
http {
    proxy_cache_path /var/cache/nginx/proxy
                     levels=1:2
                     keys_zone=my_cache:10m
                     max_size=1g
                     inactive=60m
                     use_temp_path=off;
    
    server {
        listen 80;
        server_name example.com;
        
        location / {
            proxy_pass http://backend;
            
            # Enable caching
            proxy_cache my_cache;
            
            # Cache durations
            proxy_cache_valid 200 302 10m;
            proxy_cache_valid 404 1m;
            proxy_cache_valid any 5m;
            
            # Add cache status header
            add_header X-Cache-Status $upstream_cache_status;
        }
    }
}
</code></pre><p><strong>Giải thích parameters:</strong></p><pre><code class="language-nginx">proxy_cache_path /var/cache/nginx/proxy    # Đường dẫn lưu cache
    levels=1:2                              # Cấu trúc thư mục (tối ưu I/O)
    keys_zone=my_cache:10m                  # Tên zone và size của shared memory
    max_size=1g                             # Max cache size trên disk
    inactive=60m                            # Xóa cache không dùng sau 60 phút
    use_temp_path=off;                      # Ghi trực tiếp vào cache path
</code></pre><p><strong>Levels explained:</strong></p><pre><code>levels=1:2 tạo structure:
/var/cache/nginx/proxy/
├── a/
│   ├── 3c/
│   │   └── abc123...def
│   └── 7f/
└── b/
    └── 2d/

First level: 1 character (a, b, c...)
Second level: 2 characters (3c, 7f, 2d...)
</code></pre><h3 id="22-cache-status-values"><strong>2.2. Cache Status Values</strong></h3><pre><code class="language-nginx">$upstream_cache_status có thể là:

- MISS       : Request không có trong cache, fetched từ backend
- HIT        : Request served từ cache
- EXPIRED    : Cache entry expired, fetched từ backend
- STALE      : Serving stale content (nếu configured)
- UPDATING   : Cache đang update từ backend
- REVALIDATED: Cache revalidated với backend (304)
- BYPASS     : Cache bị bypass (theo config)
</code></pre><p><strong>Logging cache status:</strong></p><pre><code class="language-nginx">http {
    log_format cache_log '$remote_addr - [$time_local] '
                         '"$request" $status '
                         'Cache: $upstream_cache_status '
                         'Time: $upstream_response_time';
    
    server {
        listen 80;
        access_log /var/log/nginx/cache.log cache_log;
        
        location / {
            proxy_pass http://backend;
            proxy_cache my_cache;
            
            add_header X-Cache-Status $upstream_cache_status always;
        }
    }
}
</code></pre><h3 id="23-cache-key"><strong>2.3. Cache Key</strong></h3><p>Cache key xác định uniqueness của cached items.</p><p><strong>Default cache key:</strong></p><pre><code class="language-nginx">proxy_cache_key $scheme$proxy_host$request_uri;

# Example:
# http://example.com/page?id=1
# Key: httpexample.com/page?id=1
</code></pre><p><strong>Custom cache keys:</strong></p><pre><code class="language-nginx">location / {
    proxy_pass http://backend;
    proxy_cache my_cache;
    
    # Include request method
    proxy_cache_key "$scheme$request_method$host$request_uri";
    
    # Include specific headers
    # proxy_cache_key "$scheme$host$request_uri$http_accept_language";
    
    # Include cookies
    # proxy_cache_key "$scheme$host$request_uri$cookie_session";
}
</code></pre><p><strong>Example với user-specific caching:</strong></p><pre><code class="language-nginx">map $cookie_user_id $cache_user {
    default $cookie_user_id;
    "" "anonymous";
}

server {
    location /api/ {
        proxy_pass http://backend;
        proxy_cache user_cache;
        
        # Different cache per user
        proxy_cache_key "$scheme$host$request_uri$cache_user";
    }
}
</code></pre><h3 id="24-cache-methods-v%C3%A0-conditions"><strong>2.4. Cache Methods và Conditions</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # Chỉ cache GET và HEAD methods
        proxy_cache_methods GET HEAD;
        
        # Cache durations dựa trên status code
        proxy_cache_valid 200 301 302 10m;
        proxy_cache_valid 404 1m;
        proxy_cache_valid any 5m;
        
        # Minimum số requests trước khi cache
        proxy_cache_min_uses 3;
        
        # Cache kể cả khi backend error
        proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;
        
        # Lock để tránh cache stampede
        proxy_cache_lock on;
        proxy_cache_lock_timeout 5s;
        proxy_cache_lock_age 5s;
    }
}
</code></pre><p><strong>proxy_cache_use_stale explained:</strong></p><pre><code class="language-nginx">proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;

# Serve stale cache khi:
# - error: Lỗi kết nối đến backend
# - timeout: Backend timeout
# - updating: Cache đang được update (tránh stampede)
# - http_500/502/503/504: Backend trả về error codes
</code></pre><h3 id="25-complete-proxy-cache-example"><strong>2.5. Complete Proxy Cache Example</strong></h3><pre><code class="language-nginx">http {
    # Define multiple cache zones
    proxy_cache_path /var/cache/nginx/static
                     levels=1:2
                     keys_zone=static_cache:10m
                     max_size=500m
                     inactive=60m
                     use_temp_path=off;
    
    proxy_cache_path /var/cache/nginx/api
                     levels=1:2
                     keys_zone=api_cache:10m
                     max_size=200m
                     inactive=10m
                     use_temp_path=off;
    
    upstream backend {
        server backend1.example.com:8080;
        server backend2.example.com:8080;
    }
    
    server {
        listen 80;
        server_name example.com;
        
        # Static content cache
        location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
            proxy_pass http://backend;
            proxy_cache static_cache;
            
            proxy_cache_valid 200 30d;
            proxy_cache_valid 404 1h;
            
            proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;
            proxy_cache_lock on;
            
            expires 30d;
            add_header Cache-Control "public, immutable";
            add_header X-Cache-Status $upstream_cache_status;
        }
        
        # API cache
        location /api/ {
            proxy_pass http://backend;
            proxy_cache api_cache;
            
            proxy_cache_valid 200 5m;
            proxy_cache_valid 404 1m;
            
            proxy_cache_key "$scheme$request_method$host$request_uri$http_authorization";
            proxy_cache_methods GET HEAD;
            proxy_cache_min_uses 2;
            
            proxy_cache_use_stale error timeout updating;
            proxy_cache_lock on;
            
            add_header X-Cache-Status $upstream_cache_status;
        }
        
        # No cache for user-specific content
        location /account/ {
            proxy_pass http://backend;
            proxy_cache off;
            proxy_no_cache 1;
            proxy_cache_bypass 1;
        }
    }
}
</code></pre><hr><h2 id="3-fastcgi-caching"><strong>3. FastCGI Caching</strong></h2><p>FastCGI caching dùng cho dynamic content như PHP applications.</p><h3 id="31-fastcgi-cache-configuration"><strong>3.1. FastCGI Cache Configuration</strong></h3><pre><code class="language-nginx">http {
    # Define FastCGI cache zone
    fastcgi_cache_path /var/cache/nginx/fastcgi
                       levels=1:2
                       keys_zone=php_cache:10m
                       max_size=500m
                       inactive=60m
                       use_temp_path=off;
    
    # Cache key
    fastcgi_cache_key "$scheme$request_method$host$request_uri";
    
    server {
        listen 80;
        server_name example.com;
        root /var/www/html;
        index index.php index.html;
        
        location ~ \.php$ {
            fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
            fastcgi_index index.php;
            include fastcgi_params;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            
            # Enable FastCGI cache
            fastcgi_cache php_cache;
            
            # Cache valid durations
            fastcgi_cache_valid 200 60m;
            fastcgi_cache_valid 404 10m;
            
            # Cache use stale
            fastcgi_cache_use_stale error timeout updating invalid_header http_500;
            
            # Cache locking
            fastcgi_cache_lock on;
            fastcgi_cache_lock_timeout 5s;
            
            # Minimum uses before caching
            fastcgi_cache_min_uses 2;
            
            # Add cache status header
            add_header X-FastCGI-Cache $upstream_cache_status;
        }
    }
}
</code></pre><h3 id="32-wordpress-v%E1%BB%9Bi-fastcgi-cache"><strong>3.2. WordPress với FastCGI Cache</strong></h3><pre><code class="language-nginx">http {
    fastcgi_cache_path /var/cache/nginx/wordpress
                       levels=1:2
                       keys_zone=wordpress:100m
                       max_size=1g
                       inactive=60m
                       use_temp_path=off;
    
    fastcgi_cache_key "$scheme$request_method$host$request_uri";
    
    server {
        listen 80;
        server_name blog.example.com;
        root /var/www/wordpress;
        index index.php;
        
        # Set cache bypass conditions
        set $skip_cache 0;
        
        # POST requests và URLs với query strings
        if ($request_method = POST) {
            set $skip_cache 1;
        }
        
        if ($query_string != "") {
            set $skip_cache 1;
        }
        
        # Don't cache URIs containing the following segments
        if ($request_uri ~* "/wp-admin/|/xmlrpc.php|wp-.*.php|/feed/|index.php|sitemap(_index)?.xml") {
            set $skip_cache 1;
        }
        
        # Don't cache logged in users or recent commenters
        if ($http_cookie ~* "comment_author|wordpress_[a-f0-9]+|wp-postpass|wordpress_logged_in") {
            set $skip_cache 1;
        }
        
        location / {
            try_files $uri $uri/ /index.php?$args;
        }
        
        location ~ \.php$ {
            try_files $uri =404;
            
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
            fastcgi_index index.php;
            include fastcgi_params;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            fastcgi_param PATH_INFO $fastcgi_path_info;
            
            # FastCGI cache settings
            fastcgi_cache wordpress;
            fastcgi_cache_valid 200 60m;
            fastcgi_cache_valid 404 10m;
            
            fastcgi_cache_bypass $skip_cache;
            fastcgi_no_cache $skip_cache;
            
            fastcgi_cache_use_stale error timeout updating invalid_header http_500 http_503;
            fastcgi_cache_lock on;
            
            # Headers
            add_header X-FastCGI-Cache $upstream_cache_status;
            add_header Cache-Control "public, max-age=3600";
        }
        
        # Cache static files
        location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
            expires 30d;
            add_header Cache-Control "public, immutable";
            access_log off;
        }
        
        # Deny access to hidden files
        location ~ /\. {
            deny all;
            access_log off;
            log_not_found off;
        }
    }
}
</code></pre><h3 id="33-drupal-v%E1%BB%9Bi-fastcgi-cache"><strong>3.3. Drupal với FastCGI Cache</strong></h3><pre><code class="language-nginx">http {
    fastcgi_cache_path /var/cache/nginx/drupal
                       levels=1:2
                       keys_zone=drupal:100m
                       max_size=2g
                       inactive=60m
                       use_temp_path=off;
    
    server {
        listen 80;
        server_name drupal.example.com;
        root /var/www/drupal;
        
        # Cache bypass conditions
        set $skip_cache 0;
        
        if ($request_method = POST) {
            set $skip_cache 1;
        }
        
        if ($query_string != "") {
            set $skip_cache 1;
        }
        
        if ($request_uri ~* "^/(admin|user|cart|checkout)/") {
            set $skip_cache 1;
        }
        
        if ($http_cookie ~* "SESS") {
            set $skip_cache 1;
        }
        
        location / {
            try_files $uri /index.php?$query_string;
        }
        
        location ~ '\.php$|^/update.php' {
            fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
            fastcgi_split_path_info ^(.+?\.php)(|/.*)$;
            include fastcgi_params;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            
            fastcgi_cache drupal;
            fastcgi_cache_valid 200 301 302 5m;
            fastcgi_cache_valid 404 1m;
            
            fastcgi_cache_bypass $skip_cache;
            fastcgi_no_cache $skip_cache;
            
            fastcgi_cache_use_stale error timeout updating invalid_header http_500;
            fastcgi_cache_lock on;
            
            add_header X-FastCGI-Cache $upstream_cache_status;
        }
        
        location ~ ^/sites/.*/files/styles/ {
            try_files $uri @rewrite;
            expires 30d;
            add_header Cache-Control "public, immutable";
        }
    }
}
</code></pre><h3 id="34-custom-php-application-v%E1%BB%9Bi-cache"><strong>3.4. Custom PHP Application với Cache</strong></h3><pre><code class="language-nginx">http {
    fastcgi_cache_path /var/cache/nginx/app
                       levels=1:2
                       keys_zone=app_cache:50m
                       max_size=1g
                       inactive=30m
                       use_temp_path=off;
    
    # Custom cache key with user context
    map $http_cookie $user_context {
        default "anonymous";
        ~*user_id=(?&lt;uid&gt;[^;]+) $uid;
    }
    
    server {
        listen 80;
        server_name app.example.com;
        root /var/www/app/public;
        
        # Cache bypass cho authenticated users
        set $skip_cache 0;
        
        if ($http_cookie ~* "logged_in") {
            set $skip_cache 1;
        }
        
        if ($request_uri ~* "/(api|admin)/") {
            set $skip_cache 1;
        }
        
        location ~ \.php$ {
            fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
            include fastcgi_params;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            
            # Custom cache key
            fastcgi_cache_key "$scheme$request_method$host$request_uri$user_context";
            
            fastcgi_cache app_cache;
            fastcgi_cache_valid 200 10m;
            fastcgi_cache_valid 404 1m;
            
            fastcgi_cache_bypass $skip_cache;
            fastcgi_no_cache $skip_cache;
            
            fastcgi_cache_use_stale error timeout updating;
            fastcgi_cache_lock on;
            fastcgi_cache_min_uses 3;
            
            # Custom headers
            add_header X-Cache-Status $upstream_cache_status;
            add_header X-Cache-Key "$scheme$request_method$host$request_uri$user_context";
        }
    }
}
</code></pre><hr><h2 id="4-cache-keys-v%C3%A0-cache-zones"><strong>4. Cache Keys và Cache Zones</strong></h2><h3 id="41-cache-zones-configuration"><strong>4.1. Cache Zones Configuration</strong></h3><pre><code class="language-nginx">http {
    # Static content cache - large, long-lived
    proxy_cache_path /var/cache/nginx/static
                     levels=1:2
                     keys_zone=static:100m
                     max_size=5g
                     inactive=7d
                     use_temp_path=off;
    
    # API cache - smaller, short-lived
    proxy_cache_path /var/cache/nginx/api
                     levels=1:2
                     keys_zone=api:50m
                     max_size=1g
                     inactive=1h
                     use_temp_path=off;
    
    # User-specific cache
    proxy_cache_path /var/cache/nginx/user
                     levels=1:2
                     keys_zone=user:50m
                     max_size=2g
                     inactive=30m
                     use_temp_path=off;
    
    # HTML pages cache
    proxy_cache_path /var/cache/nginx/pages
                     levels=1:2
                     keys_zone=pages:20m
                     max_size=500m
                     inactive=2h
                     use_temp_path=off;
}
</code></pre><p><strong>Zone size calculation:</strong></p><pre><code>keys_zone size stores cache metadata:
- 1MB ≈ 8000 keys
- 10MB ≈ 80,000 keys
- 100MB ≈ 800,000 keys

Max cache size stores actual content:
- Set based on available disk space
- Monitor /var/cache/nginx disk usage
</code></pre><h3 id="42-advanced-cache-keys"><strong>4.2. Advanced Cache Keys</strong></h3><p><strong>Cache by device type:</strong></p><pre><code class="language-nginx">map $http_user_agent $device {
    default desktop;
    ~*mobile mobile;
    ~*tablet tablet;
}

server {
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # Different cache per device
        proxy_cache_key "$scheme$host$request_uri$device";
        
        add_header X-Device $device;
        add_header X-Cache-Status $upstream_cache_status;
    }
}
</code></pre><p><strong>Cache by accept headers:</strong></p><pre><code class="language-nginx">map $http_accept $content_type_key {
    default "html";
    ~*application/json "json";
    ~*application/xml "xml";
}

server {
    location /api/ {
        proxy_pass http://backend;
        proxy_cache api_cache;
        
        # Different cache per content type
        proxy_cache_key "$scheme$host$request_uri$content_type_key";
    }
}
</code></pre><p><strong>Cache by language:</strong></p><pre><code class="language-nginx">map $http_accept_language $lang {
    default en;
    ~*^vi vi;
    ~*^ja ja;
    ~*^zh zh;
}

server {
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # Different cache per language
        proxy_cache_key "$scheme$host$request_uri$lang";
        
        add_header Content-Language $lang;
    }
}
</code></pre><p><strong>Cache by geo location:</strong></p><pre><code class="language-nginx">geo $country {
    default US;
    192.168.1.0/24 VN;
    10.0.0.0/8 JP;
}

server {
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # Different cache per country
        proxy_cache_key "$scheme$host$request_uri$country";
    }
}
</code></pre><p><strong>Complex cache key:</strong></p><pre><code class="language-nginx">map $http_cookie $user_segment {
    default "guest";
    ~*premium=1 "premium";
    ~*vip=1 "vip";
}

server {
    location /api/ {
        proxy_pass http://backend;
        proxy_cache api_cache;
        
        # Cache key combining multiple factors
        proxy_cache_key "$scheme$host$request_uri$user_segment$device$lang";
        
        add_header X-Cache-Key-Components "segment:$user_segment|device:$device|lang:$lang";
    }
}
</code></pre><h3 id="43-cache-hierarchy"><strong>4.3. Cache Hierarchy</strong></h3><pre><code class="language-nginx">http {
    # L1 Cache - Memory (small, fast)
    proxy_cache_path /dev/shm/nginx
                     levels=1
                     keys_zone=l1_cache:10m
                     max_size=100m
                     inactive=5m
                     use_temp_path=off;
    
    # L2 Cache - SSD (medium, fast)
    proxy_cache_path /var/cache/nginx/l2
                     levels=1:2
                     keys_zone=l2_cache:50m
                     max_size=5g
                     inactive=1h
                     use_temp_path=off;
    
    # L3 Cache - HDD (large, slower)
    proxy_cache_path /mnt/cache/nginx/l3
                     levels=1:2
                     keys_zone=l3_cache:100m
                     max_size=50g
                     inactive=7d
                     use_temp_path=off;
    
    server {
        location /api/hot/ {
            # Frequently accessed - L1 cache
            proxy_pass http://backend;
            proxy_cache l1_cache;
            proxy_cache_valid 200 5m;
        }
        
        location /api/warm/ {
            # Moderately accessed - L2 cache
            proxy_pass http://backend;
            proxy_cache l2_cache;
            proxy_cache_valid 200 1h;
        }
        
        location /api/cold/ {
            # Rarely accessed - L3 cache
            proxy_pass http://backend;
            proxy_cache l3_cache;
            proxy_cache_valid 200 1d;
        }
    }
}
</code></pre><hr><h2 id="5-cache-purging-v%C3%A0-bypass"><strong>5. Cache Purging và Bypass</strong></h2><h3 id="51-cache-bypass"><strong>5.1. Cache Bypass</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    
    # Bypass cache với special header
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # Bypass if X-No-Cache header present
        proxy_cache_bypass $http_x_no_cache;
        
        # Or bypass with cookie
        proxy_cache_bypass $cookie_nocache;
        
        # Or bypass with argument
        proxy_cache_bypass $arg_nocache;
    }
}
</code></pre><p><strong>Multiple bypass conditions:</strong></p><pre><code class="language-nginx">server {
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # Set bypass conditions
        set $cache_bypass 0;
        
        # Bypass for specific cookies
        if ($http_cookie ~* "admin_logged_in") {
            set $cache_bypass 1;
        }
        
        # Bypass for specific URLs
        if ($request_uri ~* "^/(admin|dashboard)/") {
            set $cache_bypass 1;
        }
        
        # Bypass for POST requests
        if ($request_method = POST) {
            set $cache_bypass 1;
        }
        
        # Apply bypass
        proxy_cache_bypass $cache_bypass;
        proxy_no_cache $cache_bypass;
    }
}
</code></pre><p><strong>Bypass với query parameter:</strong></p><pre><code class="language-nginx">server {
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # ?nocache=1 → bypass cache
        proxy_cache_bypass $arg_nocache;
        
        # ?refresh=1 → refresh cache
        proxy_cache_bypass $arg_refresh;
        
        add_header X-Cache-Bypass $arg_nocache;
    }
}

# Usage:
# Normal: http://example.com/page
# Bypass: http://example.com/page?nocache=1
# Refresh: http://example.com/page?refresh=1
</code></pre><h3 id="52-cache-purging-nginx-plus-third-party-module"><strong>5.2. Cache Purging (Nginx Plus / Third-party module)</strong></h3><p><strong>Nginx Plus purge:</strong></p><pre><code class="language-nginx"># Nginx Plus only
map $request_method $purge_method {
    PURGE 1;
    default 0;
}

server {
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        proxy_cache_purge $purge_method;
    }
}

# Usage:
# curl -X PURGE http://example.com/page
</code></pre><p><strong>Cache purge với open source module:</strong></p><pre><code class="language-bash"># Install ngx_cache_purge module
# Ubuntu/Debian
sudo apt install libnginx-mod-http-cache-purge

# CentOS - compile from source
</code></pre><pre><code class="language-nginx">http {
    proxy_cache_path /var/cache/nginx/proxy
                     levels=1:2
                     keys_zone=my_cache:10m;
    
    server {
        listen 80;
        
        location / {
            proxy_pass http://backend;
            proxy_cache my_cache;
            proxy_cache_key "$scheme$host$request_uri";
        }
        
        # Purge location
        location ~ /purge(/.*) {
            allow 127.0.0.1;
            allow 10.0.0.0/8;
            deny all;
            
            proxy_cache_purge my_cache "$scheme$host$1";
        }
    }
}

# Usage:
# curl http://example.com/purge/page-to-clear
</code></pre><p><strong>Manual cache purging:</strong></p><pre><code class="language-bash">#!/bin/bash
# purge_cache.sh - Manual cache purge script

CACHE_DIR="/var/cache/nginx"
CACHE_ZONE="my_cache"

# Purge all cache
purge_all() {
    echo "Purging all cache..."
    sudo rm -rf ${CACHE_DIR}/${CACHE_ZONE}/*
    echo "Cache purged!"
}

# Purge specific URL
purge_url() {
    local url=$1
    local cache_key=$(echo -n "$url" | md5sum | awk '{print $1}')
    local cache_path=$(find ${CACHE_DIR}/${CACHE_ZONE} -name "*${cache_key}*")
    
    if [ -n "$cache_path" ]; then
        echo "Purging cache for: $url"
        sudo rm -f $cache_path
        echo "Purged: $cache_path"
    else
        echo "No cache found for: $url"
    fi
}

# Purge by pattern
purge_pattern() {
    local pattern=$1
    echo "Purging cache matching: $pattern"
    sudo find ${CACHE_DIR}/${CACHE_ZONE} -type f -name "*${pattern}*" -delete
    echo "Done!"
}

case "$1" in
    all)
        purge_all
        ;;
    url)
        purge_url "$2"
        ;;
    pattern)
        purge_pattern "$2"
        ;;
    *)
        echo "Usage: $0 {all|url &lt;url&gt;|pattern &lt;pattern&gt;}"
        exit 1
        ;;
esac
</code></pre><p><strong>Cache warmup script:</strong></p><pre><code class="language-bash">#!/bin/bash
# cache_warmup.sh - Warm up cache

URLS=(
    "http://example.com/"
    "http://example.com/products"
    "http://example.com/about"
    "http://example.com/contact"
)

echo "Starting cache warmup..."

for url in "${URLS[@]}"; do
    echo "Warming up: $url"
    curl -s -o /dev/null -w "Status: %{http_code}, Time: %{time_total}s\n" "$url"
    sleep 0.5
done

echo "Cache warmup complete!"
</code></pre><h3 id="53-selective-cache-invalidation"><strong>5.3. Selective Cache Invalidation</strong></h3><pre><code class="language-nginx"># API để invalidate cache
server {
    listen 80;
    server_name example.com;
    
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        proxy_cache_valid 200 10m;
    }
    
    # Cache invalidation endpoint
    location /api/cache/invalidate {
        allow 127.0.0.1;
        allow 10.0.0.0/8;
        deny all;
        
        content_by_lua_block {
            local pattern = ngx.var.arg_pattern
            if pattern then
                -- Invalidate cache matching pattern
                -- Implementation depends on cache module
                ngx.say("Cache invalidated for pattern: ", pattern)
            else
                ngx.say("Pattern required")
            end
        }
    }
}

# Usage:
# curl "http://example.com/api/cache/invalidate?pattern=/products/*"
</code></pre><hr><h2 id="6-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>6. Bài tập Thực hành</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-browser-caching"><strong>Bài tập 1: Browser Caching</strong></h3><ol><li>Setup static file server</li><li>Configure expires headers:<ul><li>Images: 1 year</li><li>CSS/JS: 1 month</li><li>HTML: 1 hour</li></ul></li><li>Test với browser DevTools (Network tab)</li><li>Verify cache headers</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-proxy-cache"><strong>Bài tập 2: Proxy Cache</strong></h3><ol><li>Setup backend server (Node.js/Python)</li><li>Configure Nginx proxy cache</li><li>Generate traffic và monitor cache hits/misses</li><li>Check cache files in <code>/var/cache/nginx</code></li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-3-fastcgi-cache-cho-wordpress"><strong>Bài tập 3: FastCGI Cache cho WordPress</strong></h3><ol><li>Install WordPress</li><li>Configure FastCGI cache</li><li>Test cache bypass cho:<ul><li>Logged-in users</li><li>Admin pages</li><li>POST requests</li></ul></li><li>Measure performance improvement</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-custom-cache-keys"><strong>Bài tập 4: Custom Cache Keys</strong></h3><ol><li>Setup cache với custom key (include device type)</li><li>Test từ mobile và desktop</li><li>Verify different cached versions</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-cache-purging"><strong>Bài tập 5: Cache Purging</strong></h3><ol><li>Setup proxy cache</li><li>Create purge endpoint</li><li>Test cache purge:<ul><li>Manual purge script</li><li>API endpoint</li></ul></li><li>Verify cache cleared</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-6-cache-performance-testing"><strong>Bài tập 6: Cache Performance Testing</strong></h3><ol><li>Setup với và không có cache</li><li>Use Apache Bench để benchmark:</li></ol><pre><code class="language-bash"># Without cache
ab -n 1000 -c 10 http://example.com/

# With cache
ab -n 1000 -c 10 http://example.com/
</code></pre><ol start="3"><li>Compare results</li></ol><hr><h2 id="7-troubleshooting"><strong>7. Troubleshooting</strong></h2><h3 id="71-cache-not-working"><strong>7.1. Cache Not Working</strong></h3><p><strong>Problem:</strong> X-Cache-Status always shows MISS</p><p><strong>Diagnosis:</strong></p><pre><code class="language-bash"># Check cache directory permissions
ls -la /var/cache/nginx/

# Check cache config
sudo nginx -T | grep cache

# Check if cache zone defined
sudo nginx -T | grep keys_zone

# Monitor cache files being created
watch -n 1 'ls -lh /var/cache/nginx/proxy/'
</code></pre><p><strong>Solutions:</strong></p><pre><code class="language-nginx"># Ensure proper permissions
sudo chown -R nginx:nginx /var/cache/nginx/
sudo chmod -R 755 /var/cache/nginx/

# Verify cache zone
http {
    proxy_cache_path /var/cache/nginx/proxy
                     levels=1:2
                     keys_zone=my_cache:10m;
    
    server {
        location / {
            proxy_pass http://backend;
            proxy_cache my_cache;  # Must match keys_zone name
            proxy_cache_valid 200 10m;
        }
    }
}
</code></pre><h3 id="72-cache-taking-too-much-disk-space"><strong>7.2. Cache Taking Too Much Disk Space</strong></h3><p><strong>Problem:</strong> /var/cache/nginx fills up disk</p><p><strong>Diagnosis:</strong></p><pre><code class="language-bash"># Check cache size
du -sh /var/cache/nginx/*

# Find largest cache files
find /var/cache/nginx -type f -exec du -h {} + | sort -rh | head -20
</code></pre><p><strong>Solutions:</strong></p><pre><code class="language-nginx"># Set max_size
proxy_cache_path /var/cache/nginx/proxy
                 levels=1:2
                 keys_zone=my_cache:10m
                 max_size=1g          # Limit to 1GB
                 inactive=60m;         # Purge inactive files

# Or use tmpfs (RAM disk)
# Add to /etc/fstab:
# tmpfs /var/cache/nginx tmpfs defaults,size=512M 0 0
</code></pre><h3 id="73-stale-content-being-served"><strong>7.3. Stale Content Being Served</strong></h3><p><strong>Problem:</strong> Old content được serve dù đã update</p><p><strong>Solutions:</strong></p><pre><code class="language-nginx"># Clear cache manually
sudo rm -rf /var/cache/nginx/proxy/*
sudo systemctl reload nginx

# Or implement cache versioning
location / {
    proxy_pass http://backend;
    proxy_cache my_cache;
    
    # Add version to cache key
    proxy_cache_key "$scheme$host$request_uri$arg_v";
}

# Usage: http://example.com/page?v=2
</code></pre><h3 id="74-cache-stampede"><strong>7.4. Cache Stampede</strong></h3><p><strong>Problem:</strong> Nhiều requests cùng lúc khi cache expires</p><p><strong>Solutions:</strong></p><pre><code class="language-nginx">location / {
    proxy_pass http://backend;
    proxy_cache my_cache;
    
    # Enable cache locking
    proxy_cache_lock on;
    proxy_cache_lock_timeout 5s;
    proxy_cache_lock_age 5s;
    
    # Use stale while updating
    proxy_cache_use_stale updating;
}
</code></pre><h3 id="75-different-content-for-same-url"><strong>7.5. Different Content for Same URL</strong></h3><p><strong>Problem:</strong> User A sees User B's content</p><p><strong>Solutions:</strong></p><pre><code class="language-nginx"># Include user identifier in cache key
location / {
    proxy_pass http://backend;
    proxy_cache my_cache;
    
    # Different cache per user
    proxy_cache_key "$scheme$host$request_uri$cookie_user_id";
    
    # Or bypass cache for authenticated users
    set $skip_cache 0;
    if ($http_cookie ~* "logged_in") {
        set $skip_cache 1;
    }
    proxy_cache_bypass $skip_cache;
}
</code></pre><hr><h2 id="8-best-practices"><strong>8. Best Practices</strong></h2><h3 id="81-cache-strategy"><strong>8.1. Cache Strategy</strong></h3><pre><code class="language-nginx"># Tiered caching strategy
http {
    # Hot content - short TTL, small size
    proxy_cache_path /dev/shm/nginx/hot
                     keys_zone=hot:10m
                     max_size=100m
                     inactive=5m;
    
    # Warm content - medium TTL, medium size
    proxy_cache_path /var/cache/nginx/warm
                     keys_zone=warm:50m
                     max_size=5g
                     inactive=1h;
    
    # Cold content - long TTL, large size
    proxy_cache_path /mnt/cache/nginx/cold
                     keys_zone=cold:100m
                     max_size=50g
                     inactive=7d;
    
    server {
        # Frequently changing content
        location /api/live/ {
            proxy_cache hot;
            proxy_cache_valid 1m;
        }
        
        # Normal content
        location / {
            proxy_cache warm;
            proxy_cache_valid 10m;
        }
        
        # Static assets
        location /static/ {
            proxy_cache cold;
            proxy_cache_valid 1y;
        }
    }
}
</code></pre><h3 id="82-monitoring"><strong>8.2. Monitoring</strong></h3><pre><code class="language-nginx"># Detailed cache logging
log_format cache_detail '$remote_addr - [$time_local] '
                       '"$request" $status $body_bytes_sent '
                       '"$http_referer" "$http_user_agent" '
                       'cache:$upstream_cache_status '
                       'rt:$request_time '
                       'urt:$upstream_response_time '
                       'cache_key:"$scheme$host$request_uri"';

server {
    access_log /var/log/nginx/cache.log cache_detail;
    
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        add_header X-Cache-Status $upstream_cache_status always;
        add_header X-Cache-Date $upstream_http_date;
    }
}
</code></pre><p><strong>Cache statistics script:</strong></p><pre><code class="language-bash">#!/bin/bash
# cache_stats.sh

LOG_FILE="/var/log/nginx/cache.log"

echo "Cache Statistics"
echo "================"

echo "Total requests: $(wc -l &lt; $LOG_FILE)"

echo -e "\nCache status distribution:"
awk '{print $NF}' $LOG_FILE | grep "cache:" | cut -d: -f2 | sort | uniq -c | sort -rn

echo -e "\nHit rate:"
TOTAL=$(grep "cache:" $LOG_FILE | wc -l)
HITS=$(grep "cache:HIT" $LOG_FILE | wc -l)
MISS=$(grep "cache:MISS" $LOG_FILE | wc -l)

if [ $TOTAL -gt 0 ]; then
    HIT_RATE=$(echo "scale=2; ($HITS * 100) / $TOTAL" | bc)
    echo "Hit rate: ${HIT_RATE}%"
    echo "Hits: $HITS"
    echo "Misses: $MISS"
fi
</code></pre><h3 id="83-security"><strong>8.3. Security</strong></h3><pre><code class="language-nginx"># Prevent cache poisoning
server {
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # Không cache responses với Set-Cookie
        proxy_ignore_headers Set-Cookie;
        proxy_hide_header Set-Cookie;
        
        # Normalize cache key (remove tracking params)
        if ($args ~* ^(.*)&amp;?(utm_[^&amp;]+)(.*)$) {
            set $args $1$3;
        }
        
        proxy_cache_key "$scheme$host$request_uri$args";
    }
}
</code></pre><h3 id="84-performance"><strong>8.4. Performance</strong></h3><pre><code class="language-nginx"># Optimize cache performance
http {
    proxy_cache_path /var/cache/nginx
                     levels=1:2              # Distribute files
                     keys_zone=cache:100m
                     max_size=10g
                     inactive=60m
                     use_temp_path=off       # Write directly to cache
                     loader_threshold=300    # Load cache metadata gradually
                     loader_files=200
                     loader_sleeps=50ms;
    
    server {
        location / {
            proxy_pass http://backend;
            proxy_cache cache;
            
            # Buffer settings
            proxy_buffering on;
            proxy_buffer_size 16k;
            proxy_buffers 16 16k;
            
            # Cache locking
            proxy_cache_lock on;
            proxy_cache_lock_timeout 5s;
            
            # Background update
            proxy_cache_background_update on;
            proxy_cache_use_stale updating;
        }
    }
}
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>Tổng kết</strong></h2><p>Trong bài này, bạn đã học:</p><ul><li>✅ Browser caching với expires và Cache-Control headers</li><li>✅ Proxy caching cho static và dynamic content</li><li>✅ FastCGI caching cho PHP applications</li><li>✅ Cache keys, zones và custom strategies</li><li>✅ Cache purging và bypass techniques</li><li>✅ Performance optimization và best practices</li></ul><p><strong>Bài tiếp theo:</strong> Chúng ta sẽ tìm hiểu về SSL/TLS và HTTPS - cách setup SSL certificates, HTTP to HTTPS redirect, SSL protocols, HSTS và HTTP/2 configuration.</p>
