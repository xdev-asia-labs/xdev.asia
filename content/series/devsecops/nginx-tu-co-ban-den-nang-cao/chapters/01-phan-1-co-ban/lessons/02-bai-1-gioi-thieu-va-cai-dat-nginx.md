---
id: 019c9617-fc73-72b9-a544-1f2848905ead
title: 'Bài 1: Giới thiệu và Cài đặt Nginx'
slug: bai-1-gioi-thieu-va-cai-dat-nginx
description: >-
  Bài học giới thiệu Nginx với kiến trúc event-driven, hướng dẫn cài đặt trên
  Ubuntu/CentOS/macOS/Windows, cấu trúc thư mục và các lệnh quản lý cơ bản như
  start, stop, reload. Bạn sẽ hiểu sự khác biệt Nginx vs Apache và
  troubleshooting các lỗi thường gặp.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Cơ bản"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx từ Cơ bản đến Nâng cao
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9501" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9501)"/>

  <!-- Decorations -->
  <g>
    <circle cx="862" cy="176" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="624" cy="138" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="886" cy="100" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="648" cy="62" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="284" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="176" x2="1100" y2="256" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="206" x2="1050" y2="276" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.8467875173176,210.5 1052.8467875173176,241.5 1026,257 999.1532124826824,241.5 999.1532124826824,210.5 1026,195" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Bài 1</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 1: Giới thiệu và Cài đặt Nginx</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Cơ bản</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-nginx-l%C3%A0-g%C3%AC"><strong>1. Nginx là gì?</strong></h2><p>Nginx (phát âm là "engine-x") là một web server mã nguồn mở, mạnh mẽ và hiệu suất cao, được phát triển bởi Igor Sysoev vào năm 2004. Ban đầu được tạo ra để giải quyết vấn đề C10K (xử lý 10,000 kết nối đồng thời), Nginx đã nhanh chóng trở thành một trong những web server phổ biến nhất thế giới.</p><p>Nginx không chỉ là web server mà còn có thể hoạt động như:</p><ul><li><strong>Reverse proxy server</strong></li><li><strong>Load balancer</strong></li><li><strong>HTTP cache</strong></li><li><strong>Mail proxy server</strong></li><li><strong>API Gateway</strong></li></ul><h3 id="ki%E1%BA%BFn-tr%C3%BAc-event-driven-v%C3%A0-non-blocking-io"><strong>Kiến trúc Event-driven và Non-blocking I/O</strong></h3><p>Điểm mạnh lớn nhất của Nginx nằm ở kiến trúc của nó. Khác với mô hình truyền thống, Nginx sử dụng kiến trúc <strong>event-driven</strong> và <strong>non-blocking I/O</strong> (asynchronous).</p><p><strong>Cách hoạt động:</strong></p><ol><li><strong>Master Process</strong>: Một tiến trình chính đọc và đánh giá cấu hình, quản lý worker processes</li><li><strong>Worker Processes</strong>: Nhiều tiến trình worker xử lý các kết nối thực tế</li><li><strong>Event Loop</strong>: Mỗi worker process sử dụng event loop để xử lý hàng nghìn kết nối đồng thời</li></ol><p><strong>Non-blocking I/O</strong> có nghĩa là:</p><ul><li>Khi một worker process đang chờ I/O (đọc file, database query, network request), nó không bị "block" mà có thể xử lý các request khác</li><li>Một worker process có thể xử lý hàng nghìn kết nối cùng lúc</li><li>Tiết kiệm tài nguyên CPU và RAM đáng kể</li></ul><p><strong>Ví dụ minh họa:</strong></p><pre><code>Apache (Blocking):
Request 1 → Thread 1 → Đợi đọc file (blocked) → Hoàn thành
Request 2 → Thread 2 → Đợi đọc file (blocked) → Hoàn thành
Request 3 → Thread 3 → Đợi đọc file (blocked) → Hoàn thành
→ Cần 3 threads cho 3 requests

Nginx (Non-blocking):
Request 1 → Worker → Đợi I/O → Xử lý Request 2 → Xử lý Request 3 → Request 1 xong
Request 2 → Cùng Worker
Request 3 → Cùng Worker
→ Chỉ cần 1 worker cho 3 requests
</code></pre><hr><h2 id="2-so-s%C3%A1nh-nginx-vs-apache"><strong>2. So sánh Nginx vs Apache</strong></h2>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Tiêu chí</th>
<th>Nginx</th>
<th>Apache</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Kiến trúc</strong></td>
<td>Event-driven, asynchronous</td>
<td>Process/Thread-based</td>
</tr>
<tr>
<td><strong>Xử lý kết nối</strong></td>
<td>Một worker xử lý nhiều kết nối</td>
<td>Một thread/process cho mỗi kết nối</td>
</tr>
<tr>
<td><strong>Bộ nhớ</strong></td>
<td>Rất thấp, ổn định</td>
<td>Tăng theo số kết nối</td>
</tr>
<tr>
<td><strong>Static content</strong></td>
<td>Cực kỳ nhanh</td>
<td>Nhanh nhưng chậm hơn Nginx</td>
</tr>
<tr>
<td><strong>Dynamic content</strong></td>
<td>Cần kết hợp với backend (PHP-FPM)</td>
<td>Có thể xử lý trực tiếp (mod_php)</td>
</tr>
<tr>
<td><strong>Cấu hình</strong></td>
<td>Tập trung, file-based</td>
<td>Phân tán (.htaccess)</td>
</tr>
<tr>
<td><strong>Module</strong></td>
<td>Modules phải compile sẵn</td>
<td>Dynamic loading modules</td>
</tr>
<tr>
<td><strong>Rewrite rules</strong></td>
<td>Khác biệt, đơn giản hơn</td>
<td>Mạnh mẽ với .htaccess</td>
</tr>
<tr>
<td><strong>Phù hợp cho</strong></td>
<td>High traffic, static content, reverse proxy</td>
<td>Shared hosting, dynamic content processing</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->
<p><strong>Khi nào dùng Nginx:</strong></p><ul><li>Serving static files (HTML, CSS, JS, images)</li><li>Reverse proxy cho application servers</li><li>Load balancing</li><li>High concurrency (nhiều kết nối đồng thời)</li><li>Cần performance cao với tài nguyên hạn chế</li></ul><p><strong>Khi nào dùng Apache:</strong></p><ul><li>Shared hosting environment</li><li>Cần .htaccess flexibility</li><li>Nhiều dynamic modules</li><li>Legacy applications phụ thuộc vào Apache-specific features</li></ul><p><strong>Xu hướng hiện tại:</strong> Nhiều hệ thống sử dụng kết hợp: Nginx làm reverse proxy phía trước, Apache xử lý dynamic content phía sau.</p><hr><h2 id="3-c%C3%A0i-%C4%91%E1%BA%B7t-nginx"><strong>3. Cài đặt Nginx</strong></h2><h3 id="31-c%C3%A0i-%C4%91%E1%BA%B7t-tr%C3%AAn-ubuntudebian"><strong>3.1. Cài đặt trên Ubuntu/Debian</strong></h3><p><strong>Cách 1: Cài từ repository mặc định (đơn giản nhất)</strong></p><pre><code class="language-bash"># Update package list
sudo apt update

# Cài đặt Nginx
sudo apt install nginx -y

# Kiểm tra version
nginx -v

# Kiểm tra trạng thái
sudo systemctl status nginx
</code></pre><p><strong>Cách 2: Cài từ official Nginx repository (version mới nhất)</strong></p><pre><code class="language-bash"># Cài đặt prerequisites
sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring

# Import official nginx signing key
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg &gt;/dev/null

# Setup repository
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list

# Update và cài đặt
sudo apt update
sudo apt install nginx -y
</code></pre><h3 id="32-c%C3%A0i-%C4%91%E1%BA%B7t-tr%C3%AAn-centosrhel"><strong>3.2. Cài đặt trên CentOS/RHEL</strong></h3><p><strong>Cách 1: Từ EPEL repository</strong></p><pre><code class="language-bash"># CentOS 7
sudo yum install epel-release -y
sudo yum install nginx -y

# CentOS 8 / Rocky Linux / AlmaLinux
sudo dnf install nginx -y

# Khởi động và enable
sudo systemctl start nginx
sudo systemctl enable nginx

# Mở firewall
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
</code></pre><p><strong>Cách 2: Từ official Nginx repository</strong></p><pre><code class="language-bash"># Tạo file repo
sudo tee /etc/yum.repos.d/nginx.repo &lt;&lt;EOF
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/\$releasever/\$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
EOF

# Cài đặt
sudo yum install nginx -y
</code></pre><h3 id="33-c%C3%A0i-%C4%91%E1%BA%B7t-tr%C3%AAn-macos"><strong>3.3. Cài đặt trên macOS</strong></h3><p><strong>Sử dụng Homebrew:</strong></p><pre><code class="language-bash"># Cài đặt Homebrew (nếu chưa có)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Cài Nginx
brew install nginx

# Khởi động Nginx
brew services start nginx

# Hoặc chạy foreground
nginx

# Kiểm tra
nginx -v
</code></pre><p><strong>Đường dẫn trên macOS:</strong></p><ul><li>Config: <code>/usr/local/etc/nginx/nginx.conf</code></li><li>Document root: <code>/usr/local/var/www</code></li><li>Logs: <code>/usr/local/var/log/nginx</code></li></ul><h3 id="34-c%C3%A0i-%C4%91%E1%BA%B7t-tr%C3%AAn-windows"><strong>3.4. Cài đặt trên Windows</strong></h3><p><strong>Bước 1: Download</strong></p><ul><li>Truy cập: http://nginx.org/en/download.html</li><li>Download phiên bản Windows (nginx-x.x.x.zip)</li></ul><p><strong>Bước 2: Giải nén và chạy</strong></p><pre><code class="language-cmd"># Giải nén vào C:\nginx

# Mở Command Prompt với quyền Administrator
cd C:\nginx

# Khởi động Nginx
start nginx

# Hoặc
nginx.exe
</code></pre><p><strong>Quản lý Nginx trên Windows:</strong></p><pre><code class="language-cmd"># Kiểm tra version
nginx -v

# Test cấu hình
nginx -t

# Stop
nginx -s stop

# Reload
nginx -s reload

# Quit gracefully
nginx -s quit
</code></pre><p><strong>Lưu ý:</strong> Trên Windows, Nginx không ổn định bằng trên Linux và không nên dùng cho production.</p><hr><h2 id="4-c%E1%BA%A5u-tr%C3%BAc-th%C6%B0-m%E1%BB%A5c-v%C3%A0-file-c%E1%BA%A5u-h%C3%ACnh-c%C6%A1-b%E1%BA%A3n"><strong>4. Cấu trúc thư mục và file cấu hình cơ bản</strong></h2><h3 id="41-c%E1%BA%A5u-tr%C3%BAc-th%C6%B0-m%E1%BB%A5c-tr%C3%AAn-ubuntudebian"><strong>4.1. Cấu trúc thư mục trên Ubuntu/Debian</strong></h3><pre><code>/etc/nginx/
├── nginx.conf                 # File cấu hình chính
├── mime.types                 # Định nghĩa MIME types
├── fastcgi_params            # FastCGI parameters
├── proxy_params              # Proxy parameters
├── sites-available/          # Các cấu hình site có sẵn
│   └── default              # Virtual host mặc định
├── sites-enabled/            # Symlinks đến sites đang active
│   └── default -&gt; ../sites-available/default
├── conf.d/                   # Additional configurations
├── modules-available/        # Modules có sẵn
└── modules-enabled/          # Modules đang enabled

/var/log/nginx/
├── access.log                # Access logs
└── error.log                 # Error logs

/var/www/html/                # Document root mặc định
└── index.nginx-debian.html

/usr/share/nginx/html/        # Alternative document root
</code></pre><h3 id="42-c%E1%BA%A5u-tr%C3%BAc-tr%C3%AAn-centosrhel"><strong>4.2. Cấu trúc trên CentOS/RHEL</strong></h3><pre><code>/etc/nginx/
├── nginx.conf                # File cấu hình chính
├── mime.types
├── fastcgi_params
├── conf.d/                   # Virtual host configs
│   └── default.conf
└── default.d/

/var/log/nginx/
├── access.log
└── error.log

/usr/share/nginx/html/        # Document root
└── index.html
</code></pre><h3 id="43-file-c%E1%BA%A5u-h%C3%ACnh-nginxconf-c%C6%A1-b%E1%BA%A3n"><strong>4.3. File cấu hình nginx.conf cơ bản</strong></h3><pre><code class="language-nginx"># User chạy Nginx
user www-data;

# Số worker processes (thường = số CPU cores)
worker_processes auto;

# PID file
pid /run/nginx.pid;

# Load dynamic modules
include /etc/nginx/modules-enabled/*.conf;

events {
    # Số kết nối tối đa mỗi worker
    worker_connections 768;
    
    # Phương thức event (epoll cho Linux)
    use epoll;
}

http {
    ##
    # Basic Settings
    ##
    sendfile on;
    tcp_nopush on;
    types_hash_max_size 2048;
    
    # MIME types
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    ##
    # Logging Settings
    ##
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    ##
    # Gzip Settings
    ##
    gzip on;
    gzip_disable "msie6";

    ##
    # Virtual Host Configs
    ##
    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
</code></pre><h3 id="44-file-virtual-host-m%E1%BA%ABu"><strong>4.4. File Virtual Host mẫu</strong></h3><pre><code class="language-nginx">server {
    # Port lắng nghe
    listen 80;
    listen [::]:80;

    # Domain name
    server_name example.com www.example.com;

    # Document root
    root /var/www/example.com;
    index index.html index.htm;

    # Access và error logs
    access_log /var/log/nginx/example.com.access.log;
    error_log /var/log/nginx/example.com.error.log;

    # Location block
    location / {
        try_files $uri $uri/ =404;
    }

    # Deny access to .htaccess
    location ~ /\.ht {
        deny all;
    }
}
</code></pre><hr><h2 id="5-kh%E1%BB%9Fi-%C4%91%E1%BB%99ng-d%E1%BB%ABng-reload-nginx"><strong>5. Khởi động, dừng, reload Nginx</strong></h2><h3 id="51-qu%E1%BA%A3n-l%C3%BD-v%E1%BB%9Bi-systemctl-linux"><strong>5.1. Quản lý với systemctl (Linux)</strong></h3><pre><code class="language-bash"># Khởi động Nginx
sudo systemctl start nginx

# Dừng Nginx
sudo systemctl stop nginx

# Restart Nginx
sudo systemctl restart nginx

# Reload cấu hình (không downtime)
sudo systemctl reload nginx

# Kiểm tra trạng thái
sudo systemctl status nginx

# Enable auto-start khi boot
sudo systemctl enable nginx

# Disable auto-start
sudo systemctl disable nginx
</code></pre><h3 id="52-qu%E1%BA%A3n-l%C3%BD-v%E1%BB%9Bi-nginx-command"><strong>5.2. Quản lý với nginx command</strong></h3><pre><code class="language-bash"># Kiểm tra cấu hình (rất quan trọng trước khi reload)
sudo nginx -t

# Test và show config
sudo nginx -T

# Reload cấu hình
sudo nginx -s reload

# Stop gracefully (chờ requests hiện tại hoàn thành)
sudo nginx -s quit

# Stop ngay lập tức
sudo nginx -s stop

# Reopen log files (sau log rotation)
sudo nginx -s reopen

# Xem version và compile options
nginx -V
</code></pre><h3 id="53-s%E1%BB%B1-kh%C3%A1c-bi%E1%BB%87t-gi%E1%BB%AFa-reload-restart-stop"><strong>5.3. Sự khác biệt giữa reload, restart, stop</strong></h3><p><strong>reload:</strong></p><ul><li>Không downtime</li><li>Nginx đọc lại cấu hình</li><li>Worker processes cũ xử lý xong request hiện tại rồi tắt</li><li>Worker processes mới được tạo với cấu hình mới</li><li><strong>Dùng khi:</strong> Thay đổi cấu hình, thêm/sửa virtual hosts</li></ul><pre><code class="language-bash">sudo nginx -s reload
# hoặc
sudo systemctl reload nginx
</code></pre><p><strong>restart:</strong></p><ul><li>Có downtime (ngắn)</li><li>Stop hoàn toàn rồi start lại</li><li>Tất cả connections bị đứt</li><li><strong>Dùng khi:</strong> Cài đặt module mới, thay đổi lớn</li></ul><pre><code class="language-bash">sudo systemctl restart nginx
</code></pre><p><strong>stop vs quit:</strong></p><pre><code class="language-bash"># Stop ngay (kill connections)
sudo nginx -s stop

# Quit gracefully (chờ requests hoàn thành)
sudo nginx -s quit
</code></pre><h3 id="54-ki%E1%BB%83m-tra-nginx-%C4%91ang-ch%E1%BA%A1y"><strong>5.4. Kiểm tra Nginx đang chạy</strong></h3><pre><code class="language-bash"># Kiểm tra process
ps aux | grep nginx

# Kiểm tra port đang listen
sudo netstat -tulpn | grep nginx
# hoặc
sudo ss -tulpn | grep nginx

# Kiểm tra version
nginx -v

# Test truy cập
curl http://localhost
# hoặc
curl -I http://localhost
</code></pre><h3 id="55-troubleshooting-c%C6%A1-b%E1%BA%A3n"><strong>5.5. Troubleshooting cơ bản</strong></h3><p><strong>Lỗi: nginx.conf test failed</strong></p><pre><code class="language-bash"># Kiểm tra chi tiết lỗi
sudo nginx -t

# Xem error log
sudo tail -f /var/log/nginx/error.log
</code></pre><p><strong>Lỗi: Port 80 already in use</strong></p><pre><code class="language-bash"># Xem process nào đang dùng port 80
sudo lsof -i :80
# hoặc
sudo netstat -tulpn | grep :80

# Kill process nếu cần
sudo kill -9 &lt;PID&gt;
</code></pre><p><strong>Lỗi: Permission denied</strong></p><pre><code class="language-bash"># Kiểm tra user trong nginx.conf
grep user /etc/nginx/nginx.conf

# Kiểm tra quyền thư mục
ls -la /var/www/html

# Fix ownership
sudo chown -R www-data:www-data /var/www/html
</code></pre><p><strong>Không truy cập được qua browser:</strong></p><pre><code class="language-bash"># Kiểm tra firewall (Ubuntu/Debian)
sudo ufw status
sudo ufw allow 'Nginx Full'

# Kiểm tra firewall (CentOS)
sudo firewall-cmd --list-all
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload

# Kiểm tra SELinux (CentOS)
sudo getenforce
sudo setenforce 0  # Tạm thời disable để test
</code></pre><hr><h2 id="6-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>6. Bài tập thực hành</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-c%C3%A0i-%C4%91%E1%BA%B7t-v%C3%A0-verify"><strong>Bài tập 1: Cài đặt và verify</strong></h3><ol><li>Cài đặt Nginx trên hệ điều hành của bạn</li><li>Kiểm tra version và trạng thái</li><li>Truy cập http://localhost và xem trang welcome mặc định</li><li>Tìm và xem file log access.log</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-l%C3%A0m-quen-v%E1%BB%9Bi-commands"><strong>Bài tập 2: Làm quen với commands</strong></h3><ol><li>Test cấu hình: <code>nginx -t</code></li><li>Reload Nginx</li><li>Stop và start lại Nginx</li><li>Kiểm tra processes đang chạy</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-3-t%C3%ACm-hi%E1%BB%83u-c%E1%BA%A5u-tr%C3%BAc"><strong>Bài tập 3: Tìm hiểu cấu trúc</strong></h3><ol><li>Mở file nginx.conf và đọc các directive</li><li>Tìm document root trong virtual host mặc định</li><li>Tạo file HTML đơn giản trong document root</li><li>Truy cập file qua browser</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-s%E1%BB%ADa-l%E1%BB%97i-c%E1%BB%91-%C3%BD"><strong>Bài tập 4: Sửa lỗi cố ý</strong></h3><ol><li>Thêm dòng sai cú pháp vào nginx.conf</li><li>Chạy <code>nginx -t</code> để xem lỗi</li><li>Sửa lỗi và test lại</li></ol><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>Tổng kết</strong></h2><p>Trong bài này, bạn đã học:</p><ul><li>✅ Nginx là gì và kiến trúc event-driven</li><li>✅ So sánh Nginx vs Apache</li><li>✅ Cài đặt Nginx trên nhiều hệ điều hành</li><li>✅ Cấu trúc thư mục và file cấu hình</li><li>✅ Các lệnh quản lý Nginx cơ bản</li></ul><p><strong>Bài tiếp theo:</strong> Chúng ta sẽ đi sâu vào cấu hình Nginx, tìm hiểu về context, directive, virtual hosts và serving static files.</p>
