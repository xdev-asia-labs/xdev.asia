---
id: 019c9617-fc76-72eb-85f7-2f2ec6724934
title: '第2課：Nginx 基本設定'
slug: bai-2-cau-hinh-co-ban-nginx
description: >-
  學習 Nginx 設定，包含 nginx.conf 語法、context（http/server/location）、基本 directive。
  指導建立虛擬主機、提供靜態檔案、index 檔案、autoindex 和自訂錯誤頁面。
  包含實際範例和正式環境最佳實踐。
duration_minutes: 155
is_free: true
video_url: null
sort_order: 2
section_title: "第1部：基礎"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx 從入門到進階
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
  <rect x="80" y="50" width="128" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第2課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第2課：Nginx 基本設定</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx 從入門到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第1部：基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-c%C3%BA-ph%C3%A1p-file-c%E1%BA%A5u-h%C3%ACnh-nginxconf"><strong>1. nginx.conf 設定檔語法</strong></h2><p><code>nginx.conf</code> 是 Nginx 的核心，定義了整個 Web 伺服器的運作方式。理解設定語法是掌握 Nginx 的第一步。</p><h3 id="11-c%E1%BA%A5u-tr%C3%BAc-c%C6%A1-b%E1%BA%A3n"><strong>1.1. 基本結構</strong></h3><pre><code class="language-nginx"># 簡單 directive (simple directive)
worker_processes 4;

# 區塊 directive (block directive)
events {
    worker_connections 1024;
}

# 巢狀區塊 (nested blocks)
http {
    server {
        location / {
            root /var/www/html;
        }
    }
}
</code></pre><h3 id="12-quy-t%E1%BA%AFc-c%C3%BA-ph%C3%A1p"><strong>1.2. 語法規則</strong></h3><p><strong>1. Directive：</strong></p><ul><li>每個 directive 以分號 <code>;</code> 結尾</li><li>Directive 可以是 simple（單行）或 block（含 <code>{}</code>）</li><li>大小寫敏感：<code>Root</code> 與 <code>root</code> 不同</li></ul><pre><code class="language-nginx"># 正確
worker_processes 2;

# 錯誤 - 缺少分號
worker_processes 2

# 錯誤 - 大小寫錯誤
Worker_Processes 2;
</code></pre><p><strong>2. 註解：</strong></p><pre><code class="language-nginx"># 這是單行註解
worker_processes 4;  # 行尾註解

# Nginx 沒有多行註解
# 每行都必須使用 #
</code></pre><p><strong>3. 引入檔案：</strong></p><pre><code class="language-nginx"># 引入其他檔案
include /etc/nginx/mime.types;

# 使用萬用字元引入多個檔案
include /etc/nginx/conf.d/*.conf;
include /etc/nginx/sites-enabled/*;
</code></pre><p><strong>4. 變數：</strong></p><pre><code class="language-nginx"># Nginx 有許多內建變數
# 以 $ 開頭
$remote_addr    # 用戶端 IP
$request_uri    # 請求的 URI
$host          # 主機名稱

# 使用範例
location / {
    return 200 "Your IP: $remote_addr\n";
}
</code></pre><p><strong>5. 字串值：</strong></p><pre><code class="language-nginx"># 簡單值不需要引號
root /var/www/html;

# 含有空格或特殊字元時需要引號
error_log "/var/log/nginx/error.log" warn;
add_header X-Custom-Header "Hello World";

# 可使用單引號或雙引號
root '/var/www/html';
root "/var/www/html";
</code></pre><h3 id="13-units-v%C3%A0-sizes"><strong>1.3. 單位與大小</strong></h3><pre><code class="language-nginx"># 時間單位
client_body_timeout 60s;      # 秒（預設）
client_body_timeout 60;       # 也是秒
client_body_timeout 60m;      # 分鐘
client_body_timeout 1h;       # 小時
client_body_timeout 1d;       # 天

# 大小單位
client_max_body_size 10m;     # 百萬位元組（megabytes）
client_max_body_size 10M;     # 也是 megabytes
client_max_body_size 1g;      # gigabytes
client_max_body_size 1024k;   # kilobytes
client_max_body_size 1048576; # bytes（無單位）
</code></pre><h3 id="14-measurement-units"><strong>1.4. 測量單位</strong></h3><pre><code class="language-nginx"># 無單位 = bytes
client_max_body_size 1048576;  # 1MB

# k/K = kilobytes
client_max_body_size 1024k;

# m/M = megabytes
client_max_body_size 1m;

# g/G = gigabytes (Nginx 0.7.0+)
client_max_body_size 1g;
</code></pre><hr><h2 id="2-context-v%C3%A0-directive"><strong>2. Context 與 Directive</strong></h2><p>Nginx 使用 context 系統按層級整理設定。每個 context 定義了 directive 的適用範圍。</p><h3 id="21-c%C3%A1c-context-ch%C3%ADnh"><strong>2.1. 主要 Context</strong></h3><pre><code class="language-nginx"># MAIN CONTEXT（全域）
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
    # 適用於所有 HTTP 流量
    
    # SERVER CONTEXT
    server {
        # 適用於特定虛擬主機
        
        # LOCATION CONTEXT
        location / {
            # 適用於特定 URL 模式
        }
    }
}

# STREAM CONTEXT（TCP/UDP 用）
stream {
    server {
        listen 3306;
    }
}

# MAIL CONTEXT（郵件代理用）
mail {
    server {
        listen 25;
    }
}
</code></pre><h3 id="22-http-contextc%E1%BA%A5u-h%C3%ACnh-to%C3%A0n-c%E1%BB%A5c"><strong>2.2. HTTP Context — 全域設定</strong></h3><pre><code class="language-nginx">http {
    # MIME 類型
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # 記錄
    log_format main '$remote_addr - $remote_user [$time_local] '
                    '"$request" $status $body_bytes_sent '
                    '"$http_referer" "$http_user_agent"';
    
    access_log /var/log/nginx/access.log main;
    error_log /var/log/nginx/error.log warn;

    # 效能
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    # Gzip 壓縮
    gzip on;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript;

    # 安全性標頭
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # 引入 server block
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
</code></pre><h3 id="23-server-contextvirtual-host"><strong>2.3. Server Context — 虛擬主機</strong></h3><pre><code class="language-nginx">http {
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

    # 預設伺服器（catch-all）
    server {
        listen 80 default_server;
        server_name _;
        return 444;  # 關閉連線
    }
}
</code></pre><h3 id="24-location-contexturl-matching"><strong>2.4. Location Context — URL 比對</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;

    # 完全比對
    location = /about {
        # 僅比對 /about
    }

    # 前綴比對
    location /images/ {
        # 比對 /images/*、/images/photo.jpg 等
    }

    # 正規表示式比對（大小寫敏感）
    location ~ \.(jpg|png|gif)$ {
        # 比對以 .jpg、.png、.gif 結尾的檔案
    }

    # 正規表示式比對（大小寫不敏感）
    location ~* \.(jpg|png|gif)$ {
        # 比對 JPG、jpg、JpG 等
    }

    # 前綴比對（停止正規表示式檢查）
    location ^~ /api/ {
        # 比對 /api/* 並停止正規表示式檢查
    }

    # 預設 location
    location / {
        # 其他都不符合時比對所有請求
    }
}
</code></pre><h3 id="25-priority-c%E1%BB%A7a-location-matching"><strong>2.5. Location 比對優先順序</strong></h3><p>Nginx 依優先順序處理 location：</p><ol><li><strong><code>=</code></strong> - 完全比對（最高）</li><li><strong><code>^~</code></strong> - 前綴比對（停止正規表示式）</li><li><strong><code>~</code> 或 <code>~*</code></strong> - 正規表示式比對（依檔案中出現順序）</li><li><strong>無修飾符</strong> - 前綴比對（最低）</li></ol><p><strong>說明範例：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;

    # 優先度1 - 完全比對
    location = /test {
        return 200 "Exact match: /test\n";
    }

    # 優先度2 - 前綴（停止正規表示式）
    location ^~ /test {
        return 200 "Prefix match (^~): /test*\n";
    }

    # 優先度3 - 正規表示式（大小寫不敏感）
    location ~* ^/test {
        return 200 "Regex match (~*): /test*\n";
    }

    # 優先度4 - 前綴比對
    location /test {
        return 200 "Prefix match: /test*\n";
    }

    # 預設
    location / {
        return 200 "Default location\n";
    }
}
</code></pre><p><strong>測試結果：</strong></p><pre><code class="language-bash">curl http://example.com/test
# → "Exact match: /test"

curl http://example.com/test123
# → "Prefix match (^~): /test*"（因為 ^~ 停止了正規表示式）

# 若移除 ^~ location：
curl http://example.com/test123
# → "Regex match (~*): /test*"
</code></pre><hr><h2 id="3-c%E1%BA%A5u-h%C3%ACnh-virtual-host-server-blocks"><strong>3. 設定虛擬主機（Server Blocks）</strong></h2><p>虛擬主機讓單一 Nginx 伺服器能服務多個網站和網域。</p><h3 id="31-t%E1%BA%A1o-virtual-host-%C4%91%E1%BA%A7u-ti%C3%AAn"><strong>3.1. 建立第一個虛擬主機</strong></h3><p><strong>步驟1：建立網站目錄</strong></p><pre><code class="language-bash"># 建立文件根目錄
sudo mkdir -p /var/www/mysite.com/html

# 建立日誌目錄
sudo mkdir -p /var/www/mysite.com/logs

# 設定擁有者
sudo chown -R $USER:$USER /var/www/mysite.com
sudo chmod -R 755 /var/www/mysite.com
</code></pre><p><strong>步驟2：建立範例 HTML 檔案</strong></p><pre><code class="language-bash">cat &gt; /var/www/mysite.com/html/index.html &lt;&lt; 'EOF'
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
</code></pre><p><strong>步驟3：建立虛擬主機設定檔</strong></p><pre><code class="language-bash"># Ubuntu/Debian
sudo nano /etc/nginx/sites-available/mysite.com

# CentOS/RHEL
sudo nano /etc/nginx/conf.d/mysite.com.conf
</code></pre><p><strong>設定檔內容：</strong></p><pre><code class="language-nginx">server {
    # 埠號與伺服器名稱
    listen 80;
    listen [::]:80;
    server_name mysite.com www.mysite.com;

    # 文件根目錄
    root /var/www/mysite.com/html;
    index index.html index.htm;

    # 日誌
    access_log /var/www/mysite.com/logs/access.log;
    error_log /var/www/mysite.com/logs/error.log;

    # 主要 location
    location / {
        try_files $uri $uri/ =404;
    }

    # 錯誤頁面
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
    
    location = /404.html {
        internal;
    }
    
    location = /50x.html {
        internal;
    }

    # 拒絕存取隱藏檔案
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
</code></pre><p><strong>步驟4：啟用虛擬主機（Ubuntu/Debian）</strong></p><pre><code class="language-bash"># 建立符號連結
sudo ln -s /etc/nginx/sites-available/mysite.com /etc/nginx/sites-enabled/

# 檢查設定
sudo nginx -t

# 重新載入 Nginx
sudo systemctl reload nginx
</code></pre><p><strong>步驟5：設定 DNS 或 hosts 檔案</strong></p><pre><code class="language-bash"># 新增至 /etc/hosts（本機測試用）
sudo nano /etc/hosts

# 新增以下行：
127.0.0.1  mysite.com www.mysite.com
</code></pre><p><strong>步驟6：測試</strong></p><pre><code class="language-bash">curl http://mysite.com
# 或開啟瀏覽器：http://mysite.com
</code></pre><h3 id="32-virtual-host-v%E1%BB%9Bi-nhi%E1%BB%81u-domains"><strong>3.2. 多網域的虛擬主機</strong></h3><pre><code class="language-nginx"># 設定1：同一內容對應多個網域
server {
    listen 80;
    server_name mysite.com www.mysite.com example.com www.example.com;
    root /var/www/mysite.com/html;
    index index.html;
}

# 設定2：子網域
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

# 設定3：萬用字元子網域
server {
    listen 80;
    server_name *.mysite.com;
    root /var/www/subdomains/$host;
    
    # $host 將包含 subdomain.mysite.com
}

# 設定4：正規表示式伺服器名稱
server {
    listen 80;
    server_name ~^(www\.)?(?&lt;domain&gt;.+)$;
    root /var/www/$domain;
}
</code></pre><h3 id="33-default-server-catch-all"><strong>3.3. 預設伺服器（Catch-all）</strong></h3><pre><code class="language-nginx"># 預設伺服器處理不符合的請求
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;  # 底線 = 不在乎伺服器名稱
    
    # 選項1：回傳 444（關閉連線）
    return 444;
    
    # 選項2：回傳 403 Forbidden
    # return 403;
    
    # 選項3：重新導向到主站
    # return 301 https://mainsite.com$request_uri;
    
    # 選項4：顯示維護頁面
    # root /var/www/default;
    # index maintenance.html;
}
</code></pre><h3 id="34-listen-directives-n%C3%A2ng-cao"><strong>3.4. 進階 Listen Directive</strong></h3><pre><code class="language-nginx">server {
    # IPv4
    listen 80;
    
    # IPv6
    listen [::]:80;
    
    # 特定 IP
    listen 192.168.1.100:80;
    
    # 不同埠號
    listen 8080;
    
    # 預設伺服器
    listen 80 default_server;
    
    # SSL
    listen 443 ssl;
    listen [::]:443 ssl;
    
    # HTTP/2
    listen 443 ssl http2;
    
    # 多個選項
    listen 80 default_server reuseport;
}
</code></pre><hr><h2 id="4-serving-static-files"><strong>4. 提供靜態檔案</strong></h2><p>Nginx 擅長提供靜態內容（HTML、CSS、JS、圖片）。</p><h3 id="41-c%E1%BA%A5u-h%C3%ACnh-c%C6%A1-b%E1%BA%A3n"><strong>4.1. 基本設定</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name static.example.com;
    
    # 文件根目錄
    root /var/www/static;
    
    # Index 檔案
    index index.html index.htm;
    
    # 主要 location
    location / {
        try_files $uri $uri/ =404;
    }
}
</code></pre><p><strong>目錄結構：</strong></p><pre><code>/var/www/static/
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
</code></pre><p><strong>處理的請求：</strong></p><pre><code>http://static.example.com/              → /var/www/static/index.html
http://static.example.com/css/style.css → /var/www/static/css/style.css
http://static.example.com/images/logo.png → /var/www/static/images/logo.png
</code></pre><h3 id="42-root-vs-alias"><strong>4.2. Root 與 Alias</strong></h3><p><strong>Root directive：</strong></p><pre><code class="language-nginx">location /images/ {
    root /var/www/static;
}
# 請求：/images/photo.jpg
# 檔案路徑：/var/www/static/images/photo.jpg
# （root + location 路徑）
</code></pre><p><strong>Alias directive：</strong></p><pre><code class="language-nginx">location /images/ {
    alias /var/www/photos/;
}
# 請求：/images/photo.jpg
# 檔案路徑：/var/www/photos/photo.jpg
# （alias 取代 location 路徑）
</code></pre><p><strong>詳細範例：</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # 使用 root
    location /static/ {
        root /var/www;
    }
    # /static/style.css → /var/www/static/style.css
    
    # 使用 alias
    location /assets/ {
        alias /var/www/static/;
    }
    # /assets/style.css → /var/www/static/style.css
    
    # 完整路徑的 alias
    location = /favicon.ico {
        alias /var/www/icons/favicon.ico;
    }
}
</code></pre><p><strong>注意：</strong>使用 alias 時，若 alias 以 <code>/</code> 結尾，則 location 路徑也必須以 <code>/</code> 結尾。</p><h3 id="43-tryfiles-directive"><strong>4.3. Try_files Directive</strong></h3><pre><code class="language-nginx"># 語法
try_files file ... uri;
try_files file ... =code;

# 範例1：依序檢查檔案、資料夾，否則回傳 404
location / {
    try_files $uri $uri/ =404;
}

# 範例2：退回至 index.html（SPA 用）
location / {
    try_files $uri $uri/ /index.html;
}

# 範例3：檢查多個檔案
location / {
    try_files $uri $uri/index.html $uri.html =404;
}

# 範例4：退回至後端
location / {
    try_files $uri $uri/ @backend;
}

location @backend {
    proxy_pass http://localhost:3000;
}
</code></pre><h3 id="44-c%E1%BA%A5u-h%C3%ACnh-cho-t%E1%BB%ABng-lo%E1%BA%A1i-file"><strong>4.4. 各類型檔案的設定</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name cdn.example.com;
    root /var/www/cdn;

    # HTML 檔案
    location ~ \.html$ {
        add_header Cache-Control "public, max-age=3600";
    }

    # CSS 與 JavaScript
    location ~ \.(css|js)$ {
        add_header Cache-Control "public, max-age=31536000";
        access_log off;
    }

    # 圖片
    location ~ \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        add_header Cache-Control "public, max-age=31536000";
        access_log off;
        expires 1y;
    }

    # 字型
    location ~ \.(woff|woff2|ttf|otf|eot)$ {
        add_header Cache-Control "public, max-age=31536000";
        add_header Access-Control-Allow-Origin "*";
        access_log off;
    }

    # 影片
    location ~ \.(mp4|webm|ogg)$ {
        add_header Cache-Control "public, max-age=31536000";
        mp4;  # 啟用 MP4 串流
        access_log off;
    }

    # 下載
    location /downloads/ {
        add_header Content-Disposition "attachment";
    }
}
</code></pre><h3 id="45-security-cho-static-files"><strong>4.5. 靜態檔案的安全性</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    root /var/www/html;

    # 拒絕存取隱藏檔案
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }

    # 拒絕存取備份檔案
    location ~ ~$ {
        deny all;
        access_log off;
        log_not_found off;
    }

    # 拒絕存取設定檔案
    location ~ \.(conf|config|yml|yaml|ini)$ {
        deny all;
    }

    # 保護敏感目錄
    location ~ ^/(\.git|\.svn|\.env) {
        deny all;
    }
}
</code></pre><hr><h2 id="5-c%E1%BA%A5u-h%C3%ACnh-index-files-v%C3%A0-autoindex"><strong>5. 設定 Index 檔案與 Autoindex</strong></h2><h3 id="51-index-directive"><strong>5.1. Index Directive</strong></h3><pre><code class="language-nginx"># 語法
index file ...;

# 範例1：預設 index
server {
    listen 80;
    root /var/www/html;
    index index.html index.htm;
}

# 範例2：多個 index 檔案（依順序）
server {
    listen 80;
    root /var/www/html;
    index index.php index.html index.htm default.html;
}

# 範例3：各 location 使用不同 index 檔案
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
</code></pre><h3 id="52-autoindex-directory-listing"><strong>5.2. Autoindex（目錄清單）</strong></h3><pre><code class="language-nginx"># 啟用 autoindex
server {
    listen 80;
    server_name files.example.com;
    root /var/www/files;
    
    location / {
        autoindex on;
    }
}

# Autoindex 詳細設定
location /downloads/ {
    autoindex on;                    # 啟用目錄清單
    autoindex_exact_size off;        # 以 KB、MB 顯示大小而非 bytes
    autoindex_localtime on;          # 顯示本地時間而非 GMT
    autoindex_format html;           # 格式：html、xml、json、jsonp
}

# JSON 格式範例
location /api/files/ {
    autoindex on;
    autoindex_format json;
}
</code></pre><p><strong>Autoindex 輸出：</strong></p><pre><code>Index of /downloads/

../
file1.pdf                          23-Nov-2024 10:30      2.5M
file2.zip                          22-Nov-2024 15:45      15M
folder/                            20-Nov-2024 09:00      -
</code></pre><h3 id="53-custom-autoindex-styling"><strong>5.3. 自訂 Autoindex 樣式</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    root /var/www/files;
    
    location / {
        autoindex on;
        autoindex_exact_size off;
        autoindex_localtime on;
        
        # 新增自訂頁首/頁尾
        add_before_body /autoindex/header.html;
        add_after_body /autoindex/footer.html;
    }
    
    location /autoindex/ {
        internal;
        alias /var/www/autoindex/;
    }
}
</code></pre><p><strong>header.html 檔案：</strong></p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
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
</code></pre><p><strong>footer.html 檔案：</strong></p><pre><code class="language-html">    &lt;hr&gt;
    &lt;p&gt;© 2024 My Company&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><hr><h2 id="6-error-pages-t%C3%B9y-ch%E1%BB%89nh"><strong>6. 自訂錯誤頁面</strong></h2><h3 id="61-c%E1%BA%A5u-h%C3%ACnh-c%C6%A1-b%E1%BA%A3n"><strong>6.1. 基本設定</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;

    # 自訂錯誤頁面
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;

    # 錯誤頁面的 location
    location = /404.html {
        internal;  # 僅供內部存取
    }

    location = /50x.html {
        internal;
    }
}
</code></pre><h3 id="62-error-pages-chi-ti%E1%BA%BFt"><strong>6.2. 詳細的錯誤頁面</strong></h3><p><strong>建立 404.html 檔案：</strong></p><pre><code class="language-bash">cat &gt; /var/www/html/404.html &lt;&lt; 'EOF'
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
</code></pre><p><strong>建立 50x.html 檔案：</strong></p><pre><code class="language-bash">cat &gt; /var/www/html/50x.html &lt;&lt; 'EOF'
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
</code></pre><h3 id="63-error-pages-n%C3%A2ng-cao"><strong>6.3. 進階錯誤頁面</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;

    # 各 location 的錯誤頁面
    location / {
        error_page 404 /errors/404.html;
    }

    location /api/ {
        error_page 404 /errors/api-404.json;
        error_page 500 /errors/api-500.json;
    }

    # 含自訂訊息的錯誤頁面
    location /special/ {
        error_page 404 =200 /custom-404.html;
        # =200 覆寫狀態碼
    }

    # 重新導向至外部錯誤頁面
    location /old-site/ {
        error_page 404 = @external_error;
    }

    location @external_error {
        return 302 https://example.com/error-handler;
    }

    # 含變數的錯誤頁面
    location /dynamic/ {
        error_page 404 /404.html?page=$uri;
    }

    # 錯誤用的具名 location
    error_page 404 = @notfound;
    
    location @notfound {
        return 404 "Custom 404 message\n";
    }
}
</code></pre><h3 id="64-error-log-v%E1%BB%9Bi-format"><strong>6.4. 含格式的錯誤記錄</strong></h3><pre><code class="language-nginx">http {
    # 定義自訂錯誤記錄格式
    log_format error_log '[$time_local] $status $request '
                         'Client: $remote_addr '
                         'Server: $server_name';

    server {
        listen 80;
        server_name example.com;
        
        # 使用自訂格式
        error_log /var/log/nginx/example.error.log error_log;
        
        # 不同的日誌層級
        error_log /var/log/nginx/debug.log debug;
    }
}
</code></pre><hr><h2 id="7-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>7. 實作練習</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-t%E1%BA%A1o-virtual-host"><strong>練習1：建立虛擬主機</strong></h3><ol><li>為 <code>mysite.local</code> 建立虛擬主機</li><li>文件根目錄：<code>/var/www/mysite</code></li><li>建立包含任意內容的 index.html</li><li>新增至 /etc/hosts 並測試</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-static-file-server"><strong>練習2：靜態檔案伺服器</strong></h3><ol><li>建立目錄結構：</li></ol><pre><code>/var/www/static/
├── index.html
├── css/style.css
├── js/app.js
└── images/logo.png
</code></pre><ol start="2"><li>設定 Nginx 提供這些檔案</li><li>為各類型檔案設定不同的快取標頭</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-3-directory-listing"><strong>練習3：目錄清單</strong></h3><ol><li>為 <code>files.local</code> 建立虛擬主機</li><li>啟用 autoindex</li><li>自訂格式與樣式</li><li>用多個檔案測試</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-custom-error-pages"><strong>練習4：自訂錯誤頁面</strong></h3><ol><li>建立自訂 404 和 500 頁面</li><li>套用至虛擬主機</li><li>存取不存在的 URL 進行測試</li><li>測試 500 錯誤（可用 <code>return 500</code> 模擬）</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-multiple-virtual-hosts"><strong>練習5：多個虛擬主機</strong></h3><ol><li>建立 3 個虛擬主機：<ul><li><code>site1.local</code> → <code>/var/www/site1</code></li><li><code>site2.local</code> → <code>/var/www/site2</code></li><li><code>blog.site1.local</code> → <code>/var/www/blog</code></li></ul></li><li>每個網站有不同的內容</li><li>設定並測試全部</li></ol><hr><h2 id="8-troubleshooting-th%C6%B0%E1%BB%9Dng-g%E1%BA%B7p"><strong>8. 常見問題排解</strong></h2><h3 id="l%E1%BB%97i-1-403-forbidden"><strong>錯誤1：403 Forbidden</strong></h3><pre><code class="language-bash"># 原因：權限
ls -la /var/www/html

# 修正：設定正確的擁有者
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

# 原因：SELinux（CentOS）
sudo setenforce 0
</code></pre><h3 id="l%E1%BB%97i-2-404-not-found"><strong>錯誤2：404 Not Found</strong></h3><pre><code class="language-nginx"># 檢查 root directive
location / {
    root /var/www/html;  # 這個路徑正確嗎？
    index index.html;    # 這個檔案存在嗎？
}

# 用 curl 檢查
curl -I http://example.com
</code></pre><h3 id="l%E1%BB%97i-3-c%E1%BA%A5u-h%C3%ACnh-kh%C3%B4ng-reload"><strong>錯誤3：設定未重新載入</strong></h3><pre><code class="language-bash"># 先測試設定
sudo nginx -t

# 若 OK 則重新載入
sudo systemctl reload nginx

# 查看錯誤記錄
sudo tail -f /var/log/nginx/error.log
</code></pre><h3 id="l%E1%BB%97i-4-server-name-kh%C3%B4ng-work"><strong>錯誤4：伺服器名稱無效</strong></h3><pre><code class="language-bash"># 檢查 DNS/hosts
cat /etc/hosts

# 檢查 server_name directive
grep server_name /etc/nginx/sites-available/*

# 清除瀏覽器快取
# 或用 curl 測試
curl -H "Host: mysite.com" http://localhost
</code></pre><hr><h2 id="9-best-practices"><strong>9. 最佳實踐</strong></h2><ol><li><strong>整理設定檔案：</strong></li></ol><pre><code>/etc/nginx/
├── nginx.conf（主要設定）
├── conf.d/（全域設定）
└── sites-available/（個別網站）
</code></pre><ol start="2"><li><strong>明確的註解：</strong></li></ol><pre><code class="language-nginx"># 封鎖垃圾機器人
if ($http_user_agent ~* (bot|crawler|spider)) {
    return 403;
}
</code></pre><ol start="3"><li><strong>使用 include：</strong></li></ol><pre><code class="language-nginx">http {
    include /etc/nginx/mime.types;
    include /etc/nginx/conf.d/*.conf;
}
</code></pre><ol start="4"><li><strong>重新載入前先測試：</strong></li></ol><pre><code class="language-bash">sudo nginx -t &amp;&amp; sudo systemctl reload nginx
</code></pre><ol start="5"><li><strong>備份設定：</strong></li></ol><pre><code class="language-bash">sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>總結</strong></h2><p>在本課中，您學到了：</p><ul><li>✅ nginx.conf 語法與結構</li><li>✅ Nginx 的 context 與 directive</li><li>✅ 建立與管理虛擬主機</li><li>✅ 高效提供靜態檔案</li><li>✅ 設定 index 檔案與 autoindex</li><li>✅ 自訂錯誤頁面</li></ul><p><strong>下一課：</strong>我們將探討記錄與監控——如何追蹤和分析 Nginx 伺服器的流量。</p>
