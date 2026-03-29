---
id: 019c9617-fc76-72eb-85f7-2f2ec6724934
title: 'Bài 2: Cấu hình Cơ bản Nginx'
slug: bai-2-cau-hinh-co-ban-nginx
description: >-
  Bài học về cấu hình Nginx với cú pháp nginx.conf, context
  (http/server/location), directive cơ bản. Hướng dẫn tạo virtual hosts, serving
  static files, index files, autoindex và custom error pages. Bao gồm ví dụ thực
  tế và best practices cho production.
duration_minutes: 155
is_free: true
video_url: null
sort_order: 2
section_title: Nginx từ Cơ bản đến Nâng cao
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx từ Cơ bản đến Nâng cao
  slug: nginx-tu-co-ban-den-nang-cao
---
<h2 id="1-c%C3%BA-ph%C3%A1p-file-c%E1%BA%A5u-h%C3%ACnh-nginxconf"><strong>1. Cú pháp file cấu hình nginx.conf</strong></h2><p>File <code>nginx.conf</code> là trái tim của Nginx, nơi định nghĩa toàn bộ cách hoạt động của web server. Hiểu rõ cú pháp cấu hình là bước đầu tiên để làm chủ Nginx.</p><h3 id="11-c%E1%BA%A5u-tr%C3%BAc-c%C6%A1-b%E1%BA%A3n"><strong>1.1. Cấu trúc cơ bản</strong></h3><pre><code class="language-nginx"># Directive đơn giản (simple directive)
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
</code></pre><h3 id="12-quy-t%E1%BA%AFc-c%C3%BA-ph%C3%A1p"><strong>1.2. Quy tắc cú pháp</strong></h3><p><strong>1. Directives:</strong></p><ul><li>Mỗi directive kết thúc bằng dấu chấm phẩy <code>;</code></li><li>Directives có thể là simple (một dòng) hoặc block (có dấu <code>{}</code>)</li><li>Case-sensitive: <code>Root</code> khác với <code>root</code></li></ul><pre><code class="language-nginx"># Đúng
worker_processes 2;

# Sai - thiếu dấu chấm phẩy
worker_processes 2

# Sai - case sai
Worker_Processes 2;
</code></pre><p><strong>2. Comments:</strong></p><pre><code class="language-nginx"># Đây là comment một dòng
worker_processes 4;  # Comment cuối dòng

# Không có comment nhiều dòng trong Nginx
# Phải dùng # cho mỗi dòng
</code></pre><p><strong>3. Include files:</strong></p><pre><code class="language-nginx"># Include file khác
include /etc/nginx/mime.types;

# Include nhiều files với wildcard
include /etc/nginx/conf.d/*.conf;
include /etc/nginx/sites-enabled/*;
</code></pre><p><strong>4. Variables:</strong></p><pre><code class="language-nginx"># Nginx có nhiều biến built-in
# Bắt đầu bằng $
$remote_addr    # IP của client
$request_uri    # URI được request
$host          # Hostname

# Ví dụ sử dụng
location / {
    return 200 "Your IP: $remote_addr\n";
}
</code></pre><p><strong>5. String values:</strong></p><pre><code class="language-nginx"># Không cần quotes cho giá trị đơn giản
root /var/www/html;

# Cần quotes nếu có space hoặc ký tự đặc biệt
error_log "/var/log/nginx/error.log" warn;
add_header X-Custom-Header "Hello World";

# Có thể dùng single hoặc double quotes
root '/var/www/html';
root "/var/www/html";
</code></pre><h3 id="13-units-v%C3%A0-sizes"><strong>1.3. Units và sizes</strong></h3><pre><code class="language-nginx"># Time units
client_body_timeout 60s;      # seconds (mặc định)
client_body_timeout 60;       # cũng là seconds
client_body_timeout 60m;      # minutes
client_body_timeout 1h;       # hours
client_body_timeout 1d;       # days

# Size units
client_max_body_size 10m;     # megabytes
client_max_body_size 10M;     # cũng là megabytes
client_max_body_size 1g;      # gigabytes
client_max_body_size 1024k;   # kilobytes
client_max_body_size 1048576; # bytes (không có unit)
</code></pre><h3 id="14-measurement-units"><strong>1.4. Measurement units</strong></h3><pre><code class="language-nginx"># Không có unit = bytes
client_max_body_size 1048576;  # 1MB

# k/K = kilobytes
client_max_body_size 1024k;

# m/M = megabytes
client_max_body_size 1m;

# g/G = gigabytes (Nginx 0.7.0+)
client_max_body_size 1g;
</code></pre><hr><h2 id="2-context-v%C3%A0-directive"><strong>2. Context và Directive</strong></h2><p>Nginx sử dụng hệ thống context (ngữ cảnh) để tổ chức cấu hình theo cấp độ. Mỗi context định nghĩa phạm vi áp dụng của các directives.</p><h3 id="21-c%C3%A1c-context-ch%C3%ADnh"><strong>2.1. Các Context chính</strong></h3><pre><code class="language-nginx"># MAIN CONTEXT (global)
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
    # Áp dụng cho tất cả HTTP traffic
    
    # SERVER CONTEXT
    server {
        # Áp dụng cho một virtual host cụ thể
        
        # LOCATION CONTEXT
        location / {
            # Áp dụng cho một URL pattern cụ thể
        }
    }
}

# STREAM CONTEXT (cho TCP/UDP)
stream {
    server {
        listen 3306;
    }
}

# MAIL CONTEXT (cho mail proxy)
mail {
    server {
        listen 25;
    }
}
</code></pre><h3 id="22-http-contextc%E1%BA%A5u-h%C3%ACnh-to%C3%A0n-c%E1%BB%A5c"><strong>2.2. HTTP Context - Cấu hình toàn cục</strong></h3><pre><code class="language-nginx">http {
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
        # Chỉ match đúng /about
    }

    # Prefix match
    location /images/ {
        # Match /images/*, /images/photo.jpg, etc.
    }

    # Regex match (case-sensitive)
    location ~ \.(jpg|png|gif)$ {
        # Match file kết thúc bằng .jpg, .png, .gif
    }

    # Regex match (case-insensitive)
    location ~* \.(jpg|png|gif)$ {
        # Match JPG, jpg, JpG, etc.
    }

    # Prefix match (stop regex checking)
    location ^~ /api/ {
        # Match /api/* và không check regex
    }

    # Default location
    location / {
        # Match tất cả nếu không có match nào khác
    }
}
</code></pre><h3 id="25-priority-c%E1%BB%A7a-location-matching"><strong>2.5. Priority của Location Matching</strong></h3><p>Nginx xử lý location theo thứ tự ưu tiên:</p><ol><li><strong><code>=</code></strong> - Exact match (cao nhất)</li><li><strong><code>^~</code></strong> - Prefix match (stop regex)</li><li><strong><code>~</code> hoặc <code>~*</code></strong> - Regex match (theo thứ tự xuất hiện trong file)</li><li><strong>No modifier</strong> - Prefix match (thấp nhất)</li></ol><p><strong>Ví dụ minh họa:</strong></p><pre><code class="language-nginx">server {
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
</code></pre><p><strong>Test kết quả:</strong></p><pre><code class="language-bash">curl http://example.com/test
# → "Exact match: /test"

curl http://example.com/test123
# → "Prefix match (^~): /test*" (vì ^~ stop regex)

# Nếu xóa ^~ location:
curl http://example.com/test123
# → "Regex match (~*): /test*"
</code></pre><hr><h2 id="3-c%E1%BA%A5u-h%C3%ACnh-virtual-host-server-blocks"><strong>3. Cấu hình Virtual Host (Server Blocks)</strong></h2><p>Virtual hosts cho phép một Nginx server phục vụ nhiều websites/domains khác nhau.</p><h3 id="31-t%E1%BA%A1o-virtual-host-%C4%91%E1%BA%A7u-ti%C3%AAn"><strong>3.1. Tạo Virtual Host đầu tiên</strong></h3><p><strong>Bước 1: Tạo thư mục cho website</strong></p><pre><code class="language-bash"># Tạo document root
sudo mkdir -p /var/www/mysite.com/html

# Tạo thư mục logs
sudo mkdir -p /var/www/mysite.com/logs

# Set ownership
sudo chown -R $USER:$USER /var/www/mysite.com
sudo chmod -R 755 /var/www/mysite.com
</code></pre><p><strong>Bước 2: Tạo file HTML mẫu</strong></p><pre><code class="language-bash">cat &gt; /var/www/mysite.com/html/index.html &lt;&lt; 'EOF'
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
</code></pre><p><strong>Bước 3: Tạo file cấu hình virtual host</strong></p><pre><code class="language-bash"># Ubuntu/Debian
sudo nano /etc/nginx/sites-available/mysite.com

# CentOS/RHEL
sudo nano /etc/nginx/conf.d/mysite.com.conf
</code></pre><p><strong>Nội dung file cấu hình:</strong></p><pre><code class="language-nginx">server {
    # Port và server name
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
</code></pre><p><strong>Bước 4: Enable virtual host (Ubuntu/Debian)</strong></p><pre><code class="language-bash"># Tạo symlink
sudo ln -s /etc/nginx/sites-available/mysite.com /etc/nginx/sites-enabled/

# Kiểm tra cấu hình
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
</code></pre><p><strong>Bước 5: Cấu hình DNS hoặc hosts file</strong></p><pre><code class="language-bash"># Thêm vào /etc/hosts (cho local testing)
sudo nano /etc/hosts

# Thêm dòng:
127.0.0.1  mysite.com www.mysite.com
</code></pre><p><strong>Bước 6: Test</strong></p><pre><code class="language-bash">curl http://mysite.com
# hoặc mở browser: http://mysite.com
</code></pre><h3 id="32-virtual-host-v%E1%BB%9Bi-nhi%E1%BB%81u-domains"><strong>3.2. Virtual Host với nhiều domains</strong></h3><pre><code class="language-nginx"># Cấu hình 1: Nhiều domains cho cùng nội dung
server {
    listen 80;
    server_name mysite.com www.mysite.com example.com www.example.com;
    root /var/www/mysite.com/html;
    index index.html;
}

# Cấu hình 2: Subdomain
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

# Cấu hình 3: Wildcard subdomain
server {
    listen 80;
    server_name *.mysite.com;
    root /var/www/subdomains/$host;
    
    # $host sẽ chứa subdomain.mysite.com
}

# Cấu hình 4: Regex server name
server {
    listen 80;
    server_name ~^(www\.)?(?&lt;domain&gt;.+)$;
    root /var/www/$domain;
}
</code></pre><h3 id="33-default-server-catch-all"><strong>3.3. Default Server (Catch-all)</strong></h3><pre><code class="language-nginx"># Default server để handle requests không match
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;  # Underscore = không quan tâm server name
    
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
</code></pre><h3 id="34-listen-directives-n%C3%A2ng-cao"><strong>3.4. Listen directives nâng cao</strong></h3><pre><code class="language-nginx">server {
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
</code></pre><hr><h2 id="4-serving-static-files"><strong>4. Serving Static Files</strong></h2><p>Nginx rất xuất sắc trong việc phục vụ static content (HTML, CSS, JS, images).</p><h3 id="41-c%E1%BA%A5u-h%C3%ACnh-c%C6%A1-b%E1%BA%A3n"><strong>4.1. Cấu hình cơ bản</strong></h3><pre><code class="language-nginx">server {
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
</code></pre><p><strong>Cấu trúc thư mục:</strong></p><pre><code>/var/www/static/
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
</code></pre><p><strong>Requests được handle:</strong></p><pre><code>http://static.example.com/              → /var/www/static/index.html
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
# (alias thay thế location path)
</code></pre><p><strong>Ví dụ chi tiết:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # Sử dụng root
    location /static/ {
        root /var/www;
    }
    # /static/style.css → /var/www/static/style.css
    
    # Sử dụng alias
    location /assets/ {
        alias /var/www/static/;
    }
    # /assets/style.css → /var/www/static/style.css
    
    # Alias cho exact path
    location = /favicon.ico {
        alias /var/www/icons/favicon.ico;
    }
}
</code></pre><p><strong>Lưu ý:</strong> Khi dùng alias, location path phải kết thúc bằng <code>/</code> nếu alias cũng kết thúc bằng <code>/</code>.</p><h3 id="43-tryfiles-directive"><strong>4.3. Try_files directive</strong></h3><pre><code class="language-nginx"># Cú pháp
try_files file ... uri;
try_files file ... =code;

# Ví dụ 1: Check file, folder, rồi 404
location / {
    try_files $uri $uri/ =404;
}

# Ví dụ 2: Fallback to index.html (SPA)
location / {
    try_files $uri $uri/ /index.html;
}

# Ví dụ 3: Check multiple files
location / {
    try_files $uri $uri/index.html $uri.html =404;
}

# Ví dụ 4: Fallback to backend
location / {
    try_files $uri $uri/ @backend;
}

location @backend {
    proxy_pass http://localhost:3000;
}
</code></pre><h3 id="44-c%E1%BA%A5u-h%C3%ACnh-cho-t%E1%BB%ABng-lo%E1%BA%A1i-file"><strong>4.4. Cấu hình cho từng loại file</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name cdn.example.com;
    root /var/www/cdn;

    # HTML files
    location ~ \.html$ {
        add_header Cache-Control "public, max-age=3600";
    }

    # CSS và JavaScript
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
</code></pre><h3 id="45-security-cho-static-files"><strong>4.5. Security cho static files</strong></h3><pre><code class="language-nginx">server {
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
</code></pre><hr><h2 id="5-c%E1%BA%A5u-h%C3%ACnh-index-files-v%C3%A0-autoindex"><strong>5. Cấu hình Index Files và Autoindex</strong></h2><h3 id="51-index-directive"><strong>5.1. Index directive</strong></h3><pre><code class="language-nginx"># Cú pháp
index file ...;

# Ví dụ 1: Default index
server {
    listen 80;
    root /var/www/html;
    index index.html index.htm;
}

# Ví dụ 2: Nhiều index files (theo thứ tự)
server {
    listen 80;
    root /var/www/html;
    index index.php index.html index.htm default.html;
}

# Ví dụ 3: Index khác nhau cho từng location
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
</code></pre><h3 id="52-autoindex-directory-listing"><strong>5.2. Autoindex (Directory Listing)</strong></h3><pre><code class="language-nginx"># Bật autoindex
server {
    listen 80;
    server_name files.example.com;
    root /var/www/files;
    
    location / {
        autoindex on;
    }
}

# Cấu hình autoindex chi tiết
location /downloads/ {
    autoindex on;                    # Bật directory listing
    autoindex_exact_size off;        # Hiển thị size dạng KB, MB thay vì bytes
    autoindex_localtime on;          # Hiển thị local time thay vì GMT
    autoindex_format html;           # Format: html, xml, json, jsonp
}

# Ví dụ với format JSON
location /api/files/ {
    autoindex on;
    autoindex_format json;
}
</code></pre><p><strong>Output autoindex:</strong></p><pre><code>Index of /downloads/

../
file1.pdf                          23-Nov-2024 10:30      2.5M
file2.zip                          22-Nov-2024 15:45      15M
folder/                            20-Nov-2024 09:00      -
</code></pre><h3 id="53-custom-autoindex-styling"><strong>5.3. Custom autoindex styling</strong></h3><pre><code class="language-nginx">server {
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
</code></pre><p><strong>File header.html:</strong></p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
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
</code></pre><p><strong>File footer.html:</strong></p><pre><code class="language-html">    &lt;hr&gt;
    &lt;p&gt;© 2024 My Company&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><hr><h2 id="6-error-pages-t%C3%B9y-ch%E1%BB%89nh"><strong>6. Error Pages Tùy chỉnh</strong></h2><h3 id="61-c%E1%BA%A5u-h%C3%ACnh-c%C6%A1-b%E1%BA%A3n"><strong>6.1. Cấu hình cơ bản</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;

    # Custom error pages
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;

    # Location cho error pages
    location = /404.html {
        internal;  # Chỉ accessible internally
    }

    location = /50x.html {
        internal;
    }
}
</code></pre><h3 id="62-error-pages-chi-ti%E1%BA%BFt"><strong>6.2. Error pages chi tiết</strong></h3><p><strong>Tạo file 404.html:</strong></p><pre><code class="language-bash">cat &gt; /var/www/html/404.html &lt;&lt; 'EOF'
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
</code></pre><p><strong>Tạo file 50x.html:</strong></p><pre><code class="language-bash">cat &gt; /var/www/html/50x.html &lt;&lt; 'EOF'
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
</code></pre><h3 id="63-error-pages-n%C3%A2ng-cao"><strong>6.3. Error pages nâng cao</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;

    # Error pages cho từng location
    location / {
        error_page 404 /errors/404.html;
    }

    location /api/ {
        error_page 404 /errors/api-404.json;
        error_page 500 /errors/api-500.json;
    }

    # Error page với custom message
    location /special/ {
        error_page 404 =200 /custom-404.html;
        # =200 override status code
    }

    # Redirect to external error page
    location /old-site/ {
        error_page 404 = @external_error;
    }

    location @external_error {
        return 302 https://example.com/error-handler;
    }

    # Error page với variable
    location /dynamic/ {
        error_page 404 /404.html?page=$uri;
    }

    # Named location cho errors
    error_page 404 = @notfound;
    
    location @notfound {
        return 404 "Custom 404 message\n";
    }
}
</code></pre><h3 id="64-error-log-v%E1%BB%9Bi-format"><strong>6.4. Error log với format</strong></h3><pre><code class="language-nginx">http {
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
</code></pre><hr><h2 id="7-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>7. Bài tập thực hành</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-t%E1%BA%A1o-virtual-host"><strong>Bài tập 1: Tạo Virtual Host</strong></h3><ol><li>Tạo virtual host cho <code>mysite.local</code></li><li>Document root: <code>/var/www/mysite</code></li><li>Tạo file index.html với nội dung tùy ý</li><li>Thêm vào /etc/hosts và test</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-static-file-server"><strong>Bài tập 2: Static File Server</strong></h3><ol><li>Tạo cấu trúc thư mục:</li></ol><pre><code>/var/www/static/
├── index.html
├── css/style.css
├── js/app.js
└── images/logo.png
</code></pre><ol start="2"><li>Cấu hình Nginx serve các file này</li><li>Set cache headers khác nhau cho từng loại file</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-3-directory-listing"><strong>Bài tập 3: Directory Listing</strong></h3><ol><li>Tạo virtual host cho <code>files.local</code></li><li>Bật autoindex</li><li>Tùy chỉnh format và styling</li><li>Test với nhiều files</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-custom-error-pages"><strong>Bài tập 4: Custom Error Pages</strong></h3><ol><li>Tạo custom 404 và 500 pages</li><li>Apply cho một virtual host</li><li>Test bằng cách truy cập URL không tồn tại</li><li>Test 500 error (có thể fake bằng return 500)</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-multiple-virtual-hosts"><strong>Bài tập 5: Multiple Virtual Hosts</strong></h3><ol><li>Tạo 3 virtual hosts:<ul><li><code>site1.local</code> → <code>/var/www/site1</code></li><li><code>site2.local</code> → <code>/var/www/site2</code></li><li><code>blog.site1.local</code> → <code>/var/www/blog</code></li></ul></li><li>Mỗi site có content khác nhau</li><li>Configure và test tất cả</li></ol><hr><h2 id="8-troubleshooting-th%C6%B0%E1%BB%9Dng-g%E1%BA%B7p"><strong>8. Troubleshooting thường gặp</strong></h2><h3 id="l%E1%BB%97i-1-403-forbidden"><strong>Lỗi 1: 403 Forbidden</strong></h3><pre><code class="language-bash"># Nguyên nhân: Permission
ls -la /var/www/html

# Fix: Set đúng ownership
sudo chown -R www-data:www-data /var/www/html
sudo chmod -R 755 /var/www/html

# Nguyên nhân: SELinux (CentOS)
sudo setenforce 0
</code></pre><h3 id="l%E1%BB%97i-2-404-not-found"><strong>Lỗi 2: 404 Not Found</strong></h3><pre><code class="language-nginx"># Check root directive
location / {
    root /var/www/html;  # Đường dẫn đúng chưa?
    index index.html;    # File có tồn tại không?
}

# Check với curl
curl -I http://example.com
</code></pre><h3 id="l%E1%BB%97i-3-c%E1%BA%A5u-h%C3%ACnh-kh%C3%B4ng-reload"><strong>Lỗi 3: Cấu hình không reload</strong></h3><pre><code class="language-bash"># Test config trước
sudo nginx -t

# Nếu OK thì reload
sudo systemctl reload nginx

# Check error log
sudo tail -f /var/log/nginx/error.log
</code></pre><h3 id="l%E1%BB%97i-4-server-name-kh%C3%B4ng-work"><strong>Lỗi 4: Server name không work</strong></h3><pre><code class="language-bash"># Check DNS/hosts
cat /etc/hosts

# Check server_name directive
grep server_name /etc/nginx/sites-available/*

# Clear browser cache
# Hoặc test với curl
curl -H "Host: mysite.com" http://localhost
</code></pre><hr><h2 id="9-best-practices"><strong>9. Best Practices</strong></h2><ol><li><strong>Tổ chức file cấu hình:</strong></li></ol><pre><code>/etc/nginx/
├── nginx.conf (main config)
├── conf.d/ (global configs)
└── sites-available/ (individual sites)
</code></pre><ol start="2"><li><strong>Comment rõ ràng:</strong></li></ol><pre><code class="language-nginx"># Block spam bots
if ($http_user_agent ~* (bot|crawler|spider)) {
    return 403;
}
</code></pre><ol start="3"><li><strong>Sử dụng include:</strong></li></ol><pre><code class="language-nginx">http {
    include /etc/nginx/mime.types;
    include /etc/nginx/conf.d/*.conf;
}
</code></pre><ol start="4"><li><strong>Test trước khi reload:</strong></li></ol><pre><code class="language-bash">sudo nginx -t &amp;&amp; sudo systemctl reload nginx
</code></pre><ol start="5"><li><strong>Backup configs:</strong></li></ol><pre><code class="language-bash">sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>Tổng kết</strong></h2><p>Trong bài này, bạn đã học:</p><ul><li>✅ Cú pháp và cấu trúc nginx.conf</li><li>✅ Context và directive trong Nginx</li><li>✅ Tạo và quản lý virtual hosts</li><li>✅ Serving static files hiệu quả</li><li>✅ Cấu hình index files và autoindex</li><li>✅ Tùy chỉnh error pages</li></ul><p><strong>Bài tiếp theo:</strong> Chúng ta sẽ tìm hiểu về Logging và Monitoring - cách theo dõi và phân tích traffic trên Nginx server.</p>
