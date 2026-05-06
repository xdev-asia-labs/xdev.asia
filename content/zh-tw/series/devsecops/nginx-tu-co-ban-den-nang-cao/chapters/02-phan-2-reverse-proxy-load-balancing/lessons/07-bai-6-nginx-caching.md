---
id: 019c9617-fc84-72f3-8493-62103d1a8b50
title: '第6課：Nginx 快取'
slug: bai-6-nginx-caching
description: >-
  Nginx 快取課程 — 瀏覽器快取（Expires 和 Cache-Control 標頭）、
  代理快取、PHP 的 FastCGI 快取、快取鍵與快取區。
  快取清除、繞過策略和最佳化技術指南。
  含改善效能和降低負載的實際應用範例。
duration_minutes: 235
is_free: true
video_url: null
sort_order: 6
section_title: "第2部分：反向代理與負載均衡"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx 從基礎到進階
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-caching" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="340" rx="12" fill="url(#bg-caching)"/>
  <g>
    <circle cx="730" cy="40" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="860" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="990" cy="220" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="140" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="240" x2="1100" y2="320" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="270" x2="1050" y2="340" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1020.3108891324554,172.5 1020.3108891324554,207.5 990,225 959.6891108675446,207.5 959.6891108675446,172.5 990,155" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第6課</text>
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第6課：Nginx 快取</tspan>
  </text>
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx 從基礎到進階</text>
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第2部分：反向代理與負載均衡</text>
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="tags"><strong>標籤</strong></h2><p><code>#Nginx</code> <code>#Caching</code> <code>#ProxyCache</code> <code>#FastCGI</code> <code>#BrowserCache</code> <code>#CacheControl</code> <code>#Expires</code> <code>#Performance</code> <code>#Optimization</code> <code>#CDN</code> <code>#CachePurging</code> <code>#CacheBypass</code> <code>#WebPerformance</code> <code>#StaticContent</code> <code>#DynamicContent</code> <code>#Tutorial</code> <code>#Production</code> <code>#BestPractices</code> <code>#DevOps</code> <code>#Infrastructure</code></p><hr><h2 id="1-browser-caching"><strong>1. 使用 Expires 與 Cache-Control 標頭的瀏覽器快取</strong></h2><p>瀏覽器快取將檔案儲存在客戶端瀏覽器，減少對伺服器的請求次數並加快載入速度。</p><h3 id="11-expires-header"><strong>1.1. Expires 標頭</strong></h3><p>Expires 標頭指定快取過期的具體時間點。</p><p><strong>基本語法：</strong></p><pre><code class="language-nginx">location ~* \.(jpg|jpeg|png|gif|ico)$ {
    expires 30d;  # 快取 30 天
}
</code></pre><p><strong>Expires 值範例：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    
    # 圖片 - 長期快取
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        expires 1y;  # 1 年
        add_header Cache-Control "public, immutable";
    }
    
    # CSS 和 JavaScript - 中期快取
    location ~* \.(css|js)$ {
        expires 1M;  # 1 個月
        add_header Cache-Control "public";
    }
    
    # HTML - 短期快取或不快取
    location ~* \.html$ {
        expires 1h;  # 1 小時
        add_header Cache-Control "public, must-revalidate";
    }
    
    # API 回應 - 不快取
    location /api/ {
        expires -1;  # 不快取
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
}
</code></pre><p><strong>時間單位：</strong></p><pre><code class="language-nginx">expires 1s;    # 1 秒
expires 5m;    # 5 分鐘
expires 2h;    # 2 小時
expires 7d;    # 7 天
expires 3M;    # 3 個月（30 天）
expires 1y;    # 1 年

expires -1;    # 不快取（Cache-Control: no-cache）
expires epoch; # Expires: Thu, 01 Jan 1970 00:00:01 GMT
expires max;   # Expires: Thu, 31 Dec 2037 23:55:55 GMT
expires off;   # 不設定 Expires 標頭
</code></pre><h3 id="12-cache-control-header"><strong>1.2. Cache-Control 標頭</strong></h3><p>Cache-Control 是 Expires 的現代替代方案，更靈活。</p><p><strong>Cache-Control 指令：</strong></p><pre><code class="language-nginx"># public: 可被瀏覽器和中間快取快取
add_header Cache-Control "public";

# private: 僅瀏覽器快取，代理不快取
add_header Cache-Control "private";

# no-cache: 使用快取前必須重新驗證
add_header Cache-Control "no-cache";

# no-store: 不儲存任何快取
add_header Cache-Control "no-store";

# max-age: 快取期間（秒）
add_header Cache-Control "public, max-age=31536000";

# s-maxage: 共享快取（CDN、代理）的 max-age
add_header Cache-Control "public, max-age=3600, s-maxage=86400";

# must-revalidate: 過期後必須重新驗證
add_header Cache-Control "public, max-age=3600, must-revalidate";

# immutable: 內容永不改變
add_header Cache-Control "public, max-age=31536000, immutable";

# no-transform: 不允許內容轉換
add_header Cache-Control "public, no-transform";
</code></pre><p><strong>組合指令：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # 有版本控制的靜態資源 - 不可變
    location ~* /static/.*\.(css|js)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    # 圖片 - 公開，長期快取
    location ~* \.(jpg|png|gif|svg)$ {
        expires 6M;
        add_header Cache-Control "public, max-age=15552000";
    }
    
    # HTML - 帶重新驗證的短期快取
    location ~* \.html$ {
        expires 10m;
        add_header Cache-Control "public, max-age=600, must-revalidate";
    }
    
    # 使用者特定內容 - 私有
    location /dashboard/ {
        add_header Cache-Control "private, max-age=300";
    }
    
    # 敏感資料 - 不快取
    location /account/ {
        add_header Cache-Control "private, no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
    }
}
</code></pre><h3 id="13-conditional-caching"><strong>1.3. 條件式快取</strong></h3><pre><code class="language-nginx">map $sent_http_content_type $expires {
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
    
    # 特定路徑覆寫
    location /news/ {
        expires 5m;
        add_header Cache-Control "public, max-age=300";
    }
}
</code></pre><h3 id="14-etag"><strong>1.4. ETag 與 Last-Modified</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # 啟用 ETag
    etag on;
    
    # 啟用 Last-Modified 標頭
    if_modified_since before;
    
    location / {
        root /var/www/html;
        # 瀏覽器將發送 If-None-Match（ETag）或 If-Modified-Since
        # 若檔案未更改，Nginx 返回 304 Not Modified
    }
}
</code></pre><hr><h2 id="2-proxy-caching"><strong>2. 代理快取基礎</strong></h2><p>代理快取儲存後端伺服器的回應，減少負載和回應時間。</p><h3 id="21-proxy-cache-zone"><strong>2.1. 代理快取區設定</strong></h3><pre><code class="language-nginx"># 定義快取路徑和設定（在 http 上下文中）
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
            
            # 啟用快取
            proxy_cache my_cache;
            
            # 快取有效期間
            proxy_cache_valid 200 302 10m;
            proxy_cache_valid 404 1m;
            proxy_cache_valid any 5m;
            
            # 新增快取狀態標頭
            add_header X-Cache-Status $upstream_cache_status;
        }
    }
}
</code></pre><p><strong>參數說明：</strong></p><pre><code class="language-nginx">proxy_cache_path /var/cache/nginx/proxy    # 快取儲存路徑
    levels=1:2                              # 目錄結構（最佳化 I/O）
    keys_zone=my_cache:10m                  # 區域名稱與共享記憶體大小
    max_size=1g                             # 磁碟上的最大快取大小
    inactive=60m                            # 60 分鐘未使用後刪除快取
    use_temp_path=off;                      # 直接寫入快取路徑
</code></pre><h3 id="22-cache-status"><strong>2.2. 快取狀態值</strong></h3><pre><code class="language-nginx">$upstream_cache_status 可能的值：

- MISS       : 快取中無此請求，從後端取得
- HIT        : 從快取提供請求
- EXPIRED    : 快取條目已過期，從後端取得
- STALE      : 提供過期內容（若已設定）
- UPDATING   : 快取正從後端更新中
- REVALIDATED: 快取已與後端重新驗證（304）
- BYPASS     : 快取已繞過（依設定）
</code></pre><h3 id="23-cache-key"><strong>2.3. 快取鍵</strong></h3><p>快取鍵決定快取項目的唯一性。</p><p><strong>預設快取鍵：</strong></p><pre><code class="language-nginx">proxy_cache_key $scheme$proxy_host$request_uri;

# 範例：
# http://example.com/page?id=1
# 鍵值：httpexample.com/page?id=1
</code></pre><p><strong>自訂快取鍵：</strong></p><pre><code class="language-nginx">location / {
    proxy_pass http://backend;
    proxy_cache my_cache;
    
    # 包含請求方法
    proxy_cache_key "$scheme$request_method$host$request_uri";
    
    # 包含特定標頭
    # proxy_cache_key "$scheme$host$request_uri$http_accept_language";
    
    # 包含 Cookie
    # proxy_cache_key "$scheme$host$request_uri$cookie_session";
}
</code></pre><h3 id="24-cache-methods"><strong>2.4. 快取方法與條件</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # 僅快取 GET 和 HEAD 方法
        proxy_cache_methods GET HEAD;
        
        # 依狀態碼設定快取有效期間
        proxy_cache_valid 200 301 302 10m;
        proxy_cache_valid 404 1m;
        proxy_cache_valid any 5m;
        
        # 快取前的最少請求次數
        proxy_cache_min_uses 3;
        
        # 後端錯誤時提供過期快取
        proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;
        
        # 防止快取雪崩的鎖定機制
        proxy_cache_lock on;
        proxy_cache_lock_timeout 5s;
        proxy_cache_lock_age 5s;
    }
}
</code></pre><h3 id="25-complete-example"><strong>2.5. 完整代理快取範例</strong></h3><pre><code class="language-nginx">http {
    # 定義多個快取區
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
        
        # 靜態內容快取
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
        
        # API 快取
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
        
        # 使用者特定內容不快取
        location /account/ {
            proxy_pass http://backend;
            proxy_cache off;
            proxy_no_cache 1;
            proxy_cache_bypass 1;
        }
    }
}
</code></pre><hr><h2 id="3-fastcgi-caching"><strong>3. FastCGI 快取</strong></h2><p>FastCGI 快取用於 PHP 應用程式等動態內容。</p><h3 id="31-fastcgi-config"><strong>3.1. FastCGI 快取設定</strong></h3><pre><code class="language-nginx">http {
    # 定義 FastCGI 快取區
    fastcgi_cache_path /var/cache/nginx/fastcgi
                       levels=1:2
                       keys_zone=php_cache:10m
                       max_size=500m
                       inactive=60m
                       use_temp_path=off;
    
    # 快取鍵
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
            
            # 啟用 FastCGI 快取
            fastcgi_cache php_cache;
            
            # 快取有效期間
            fastcgi_cache_valid 200 60m;
            fastcgi_cache_valid 404 10m;
            
            # 提供過期快取的條件
            fastcgi_cache_use_stale error timeout updating invalid_header http_500;
            
            # 快取鎖定
            fastcgi_cache_lock on;
            fastcgi_cache_lock_timeout 5s;
            
            # 快取前的最少使用次數
            fastcgi_cache_min_uses 2;
            
            # 新增快取狀態標頭
            add_header X-FastCGI-Cache $upstream_cache_status;
        }
    }
}
</code></pre><h3 id="32-wordpress-fastcgi"><strong>3.2. WordPress 與 FastCGI 快取</strong></h3><pre><code class="language-nginx">http {
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
        
        # 設定快取繞過條件
        set $skip_cache 0;
        
        # POST 請求和含查詢字串的 URL
        if ($request_method = POST) {
            set $skip_cache 1;
        }
        
        if ($query_string != "") {
            set $skip_cache 1;
        }
        
        # 不快取包含以下路徑的 URI
        if ($request_uri ~* "/wp-admin/|/xmlrpc.php|wp-.*.php|/feed/|index.php|sitemap(_index)?.xml") {
            set $skip_cache 1;
        }
        
        # 不快取已登入使用者或最近留言者
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
            
            fastcgi_cache wordpress;
            fastcgi_cache_valid 200 60m;
            fastcgi_cache_valid 404 10m;
            
            fastcgi_cache_bypass $skip_cache;
            fastcgi_no_cache $skip_cache;
            
            fastcgi_cache_use_stale error timeout updating invalid_header http_500 http_503;
            fastcgi_cache_lock on;
            
            add_header X-FastCGI-Cache $upstream_cache_status;
            add_header Cache-Control "public, max-age=3600";
        }
        
        # 靜態檔案快取
        location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
            expires 30d;
            add_header Cache-Control "public, immutable";
            access_log off;
        }
    }
}
</code></pre><hr><h2 id="4-cache-keys-zones"><strong>4. 快取鍵與快取區</strong></h2><h3 id="41-cache-zones"><strong>4.1. 快取區設定</strong></h3><pre><code class="language-nginx">http {
    # 靜態內容快取 - 大容量，長期
    proxy_cache_path /var/cache/nginx/static
                     levels=1:2
                     keys_zone=static:100m
                     max_size=5g
                     inactive=7d
                     use_temp_path=off;
    
    # API 快取 - 小容量，短期
    proxy_cache_path /var/cache/nginx/api
                     levels=1:2
                     keys_zone=api:50m
                     max_size=1g
                     inactive=1h
                     use_temp_path=off;
    
    # 使用者特定快取
    proxy_cache_path /var/cache/nginx/user
                     levels=1:2
                     keys_zone=user:50m
                     max_size=2g
                     inactive=30m
                     use_temp_path=off;
}
</code></pre><p><strong>區域大小計算：</strong></p><pre><code>keys_zone 大小儲存快取元資料：
- 1MB ≈ 8,000 個鍵值
- 10MB ≈ 80,000 個鍵值
- 100MB ≈ 800,000 個鍵值

max_size 儲存實際內容：
- 依可用磁碟空間設定
- 監控 /var/cache/nginx 的磁碟使用量
</code></pre><h3 id="42-advanced-cache-keys"><strong>4.2. 進階快取鍵</strong></h3><p><strong>依裝置類型快取：</strong></p><pre><code class="language-nginx">map $http_user_agent $device {
    default desktop;
    ~*mobile mobile;
    ~*tablet tablet;
}

server {
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # 不同裝置使用不同快取
        proxy_cache_key "$scheme$host$request_uri$device";
        
        add_header X-Device $device;
        add_header X-Cache-Status $upstream_cache_status;
    }
}
</code></pre><p><strong>依語言快取：</strong></p><pre><code class="language-nginx">map $http_accept_language $lang {
    default en;
    ~*^vi vi;
    ~*^ja ja;
    ~*^zh zh;
}

server {
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # 不同語言使用不同快取
        proxy_cache_key "$scheme$host$request_uri$lang";
        
        add_header Content-Language $lang;
    }
}
</code></pre><p><strong>複合快取鍵：</strong></p><pre><code class="language-nginx">map $http_cookie $user_segment {
    default "guest";
    ~*premium=1 "premium";
    ~*vip=1 "vip";
}

server {
    location /api/ {
        proxy_pass http://backend;
        proxy_cache api_cache;
        
        # 結合多個因素的快取鍵
        proxy_cache_key "$scheme$host$request_uri$user_segment$device$lang";
        
        add_header X-Cache-Key-Components "segment:$user_segment|device:$device|lang:$lang";
    }
}
</code></pre><h3 id="43-cache-hierarchy"><strong>4.3. 快取階層</strong></h3><pre><code class="language-nginx">http {
    # L1 快取 - 記憶體（小容量，高速）
    proxy_cache_path /dev/shm/nginx
                     levels=1
                     keys_zone=l1_cache:10m
                     max_size=100m
                     inactive=5m
                     use_temp_path=off;
    
    # L2 快取 - SSD（中容量，高速）
    proxy_cache_path /var/cache/nginx/l2
                     levels=1:2
                     keys_zone=l2_cache:50m
                     max_size=5g
                     inactive=1h
                     use_temp_path=off;
    
    # L3 快取 - HDD（大容量，較慢）
    proxy_cache_path /mnt/cache/nginx/l3
                     levels=1:2
                     keys_zone=l3_cache:100m
                     max_size=50g
                     inactive=7d
                     use_temp_path=off;
    
    server {
        location /api/hot/ {
            proxy_pass http://backend;
            proxy_cache l1_cache;
            proxy_cache_valid 200 5m;
        }
        
        location /api/warm/ {
            proxy_pass http://backend;
            proxy_cache l2_cache;
            proxy_cache_valid 200 1h;
        }
        
        location /api/cold/ {
            proxy_pass http://backend;
            proxy_cache l3_cache;
            proxy_cache_valid 200 1d;
        }
    }
}
</code></pre><hr><h2 id="5-cache-purging-bypass"><strong>5. 快取清除與繞過</strong></h2><h3 id="51-cache-bypass"><strong>5.1. 快取繞過</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        # 使用特殊標頭繞過快取
        proxy_cache_bypass $http_x_no_cache;
        
        # 或使用 Cookie 繞過
        proxy_cache_bypass $cookie_nocache;
        
        # 或使用查詢參數繞過
        proxy_cache_bypass $arg_nocache;
    }
}
</code></pre><p><strong>多個繞過條件：</strong></p><pre><code class="language-nginx">server {
    location / {
        proxy_pass http://backend;
        proxy_cache my_cache;
        
        set $cache_bypass 0;
        
        # 特定 Cookie 時繞過
        if ($http_cookie ~* "admin_logged_in") {
            set $cache_bypass 1;
        }
        
        # 特定 URL 時繞過
        if ($request_uri ~* "^/(admin|dashboard)/") {
            set $cache_bypass 1;
        }
        
        # POST 請求時繞過
        if ($request_method = POST) {
            set $cache_bypass 1;
        }
        
        proxy_cache_bypass $cache_bypass;
        proxy_no_cache $cache_bypass;
    }
}
</code></pre><h3 id="52-cache-purge"><strong>5.2. 快取清除（手動腳本）</strong></h3><pre><code class="language-bash">#!/bin/bash
# purge_cache.sh - 手動快取清除腳本

CACHE_DIR="/var/cache/nginx"
CACHE_ZONE="my_cache"

# 清除所有快取
purge_all() {
    echo "正在清除所有快取..."
    sudo rm -rf ${CACHE_DIR}/${CACHE_ZONE}/*
    echo "快取已清除！"
}

# 清除特定 URL 的快取
purge_url() {
    local url=$1
    local cache_key=$(echo -n "$url" | md5sum | awk '{print $1}')
    local cache_path=$(find ${CACHE_DIR}/${CACHE_ZONE} -name "*${cache_key}*")
    
    if [ -n "$cache_path" ]; then
        echo "正在清除快取：$url"
        sudo rm -f $cache_path
        echo "已清除：$cache_path"
    else
        echo "找不到快取：$url"
    fi
}

case "$1" in
    all)
        purge_all
        ;;
    url)
        purge_url "$2"
        ;;
    *)
        echo "用法：$0 {all|url <url>}"
        exit 1
        ;;
esac
</code></pre><p><strong>快取預熱腳本：</strong></p><pre><code class="language-bash">#!/bin/bash
# cache_warmup.sh - 快取預熱

URLS=(
    "http://example.com/"
    "http://example.com/products"
    "http://example.com/about"
    "http://example.com/contact"
)

echo "開始快取預熱..."

for url in "${URLS[@]}"; do
    echo "預熱中：$url"
    curl -s -o /dev/null -w "狀態：%{http_code}，時間：%{time_total}秒\n" "$url"
    sleep 0.5
done

echo "快取預熱完成！"
</code></pre><hr><h2 id="6-practice-exercises"><strong>6. 練習題</strong></h2><h3 id="exercise-1"><strong>練習1：瀏覽器快取</strong></h3><ol><li>建立靜態檔案伺服器</li><li>設定 Expires 標頭：<ul><li>圖片：1 年</li><li>CSS/JS：1 個月</li><li>HTML：1 小時</li></ul></li><li>使用瀏覽器 DevTools（網路分頁）進行測試</li><li>確認快取標頭</li></ol><h3 id="exercise-2"><strong>練習2：代理快取</strong></h3><ol><li>建立後端伺服器（Node.js/Python）</li><li>設定 Nginx 代理快取</li><li>產生流量並監控快取命中/未命中</li><li>檢查 <code>/var/cache/nginx</code> 中的快取檔案</li></ol><h3 id="exercise-3"><strong>練習3：WordPress 的 FastCGI 快取</strong></h3><ol><li>安裝 WordPress</li><li>設定 FastCGI 快取</li><li>測試以下情況的快取繞過：<ul><li>已登入使用者</li><li>管理員頁面</li><li>POST 請求</li></ul></li><li>測量效能改善</li></ol><h3 id="exercise-4"><strong>練習4：自訂快取鍵</strong></h3><ol><li>設定帶有自訂鍵（含裝置類型）的快取</li><li>從行動裝置和桌機進行測試</li><li>驗證不同的快取版本</li></ol><h3 id="exercise-5"><strong>練習5：快取效能測試</strong></h3><ol><li>分別建立有快取和無快取的環境</li><li>使用 Apache Bench 進行基準測試：</li></ol><pre><code class="language-bash"># 無快取
ab -n 1000 -c 10 http://example.com/

# 有快取
ab -n 1000 -c 10 http://example.com/
</code></pre><ol start="3"><li>比較結果</li></ol><hr><h2 id="7-troubleshooting"><strong>7. 故障排除</strong></h2><h3 id="71-cache-not-working"><strong>7.1. 快取無法運作</strong></h3><p><strong>問題：</strong> X-Cache-Status 始終顯示 MISS</p><p><strong>診斷：</strong></p><pre><code class="language-bash"># 檢查快取目錄權限
ls -la /var/cache/nginx/

# 檢查快取設定
sudo nginx -T | grep cache

# 確認快取區是否已定義
sudo nginx -T | grep keys_zone

# 監控快取檔案建立情況
watch -n 1 'ls -lh /var/cache/nginx/proxy/'
</code></pre><p><strong>解決方案：</strong></p><pre><code class="language-nginx"># 設定適當的權限
sudo chown -R nginx:nginx /var/cache/nginx/
sudo chmod -R 755 /var/cache/nginx/

# 確認快取區設定
http {
    proxy_cache_path /var/cache/nginx/proxy
                     levels=1:2
                     keys_zone=my_cache:10m;
    
    server {
        location / {
            proxy_pass http://backend;
            proxy_cache my_cache;  # 必須與 keys_zone 名稱一致
            proxy_cache_valid 200 10m;
        }
    }
}
</code></pre><h3 id="72-disk-space"><strong>7.2. 快取佔用過多磁碟空間</strong></h3><p><strong>解決方案：</strong></p><pre><code class="language-nginx"># 設定 max_size
proxy_cache_path /var/cache/nginx/proxy
                 levels=1:2
                 keys_zone=my_cache:10m
                 max_size=1g          # 限制為 1GB
                 inactive=60m;         # 清除非活躍檔案

# 或使用 tmpfs（RAM 磁碟）
# 新增至 /etc/fstab：
# tmpfs /var/cache/nginx tmpfs defaults,size=512M 0 0
</code></pre><h3 id="73-stale-content"><strong>7.3. 提供了過期內容</strong></h3><p><strong>解決方案：</strong></p><pre><code class="language-nginx"># 手動清除快取
sudo rm -rf /var/cache/nginx/proxy/*
sudo systemctl reload nginx

# 或實作快取版本控制
location / {
    proxy_pass http://backend;
    proxy_cache my_cache;
    
    # 在快取鍵中加入版本號
    proxy_cache_key "$scheme$host$request_uri$http_x_app_version";
}
</code></pre><hr><h2 id="summary"><strong>總結</strong></h2><p>本課學到了：</p><ul><li>✅ 使用 Expires 與 Cache-Control 標頭的瀏覽器快取</li><li>✅ 代理快取設定（快取區、鍵值、有效期間）</li><li>✅ PHP/WordPress 的 FastCGI 快取</li><li>✅ 進階快取鍵策略（依裝置、語言、使用者區段）</li><li>✅ 快取繞過和清除方法</li><li>✅ 快取效能故障排除</li></ul><p><strong>下一課：</strong> SSL/TLS — 如何使用 Let's Encrypt 設定 HTTPS、實作安全通訊與 HSTS。</p>
