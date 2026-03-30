---
id: 019c9617-fc97-7289-8a4f-a98913e0d06b
title: 'Bài 11: Nginx với Application Stack trong NGINX'
slug: bai-11-nginx-voi-application-stack-tr0
description: >-
  Bài học về tích hợp Nginx với Application Stack - PHP-FPM configuration cho
  WordPress/Laravel, Nginx + Node.js với PM2, Python applications
  (uWSGI/Gunicorn), Ruby on Rails với Puma, Docker containers, WebSocket
  proxying và gRPC. 
duration_minutes: 185
is_free: true
video_url: null
sort_order: 11
section_title: "Phần 4: Application Stack & Monitoring"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx từ Cơ bản đến Nâng cao
  slug: nginx-tu-co-ban-den-nang-cao
---
<h2 id="1-php-fpm-configuration"><strong>1. PHP-FPM Configuration</strong></h2><p>PHP-FPM (FastCGI Process Manager) là cách tốt nhất để chạy PHP với Nginx.</p><h3 id="11-install-php-fpm"><strong>1.1. Install PHP-FPM</strong></h3><p><strong>Ubuntu/Debian:</strong></p><pre><code class="language-bash"># Update packages
sudo apt update

# Install PHP-FPM và extensions
sudo apt install php8.1-fpm php8.1-mysql php8.1-mbstring php8.1-xml php8.1-curl php8.1-zip php8.1-gd

# Check service
sudo systemctl status php8.1-fpm

# Socket location: /var/run/php/php8.1-fpm.sock
</code></pre><p><strong>CentOS/RHEL:</strong></p><pre><code class="language-bash"># Install EPEL and Remi repository
sudo yum install epel-release
sudo yum install https://rpms.remirepo.net/enterprise/remi-release-8.rpm

# Enable PHP 8.1
sudo yum module reset php
sudo yum module enable php:remi-8.1

# Install PHP-FPM
sudo yum install php php-fpm php-mysqlnd php-mbstring php-xml

# Start service
sudo systemctl start php-fpm
sudo systemctl enable php-fpm
</code></pre><h3 id="12-basic-nginx-php-fpm-configuration"><strong>1.2. Basic Nginx + PHP-FPM Configuration</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    index index.php index.html;
    
    # Logging
    access_log /var/log/nginx/example.com.access.log;
    error_log /var/log/nginx/example.com.error.log;
    
    # PHP-FPM configuration
    location ~ \.php$ {
        # Security: Check if file exists
        try_files $uri =404;
        
        # FastCGI parameters
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        
        # Include standard FastCGI params
        include fastcgi_params;
        
        # Additional params
        fastcgi_param PATH_INFO $fastcgi_path_info;
        fastcgi_param PATH_TRANSLATED $document_root$fastcgi_path_info;
        fastcgi_param QUERY_STRING $query_string;
        fastcgi_param REQUEST_METHOD $request_method;
        fastcgi_param CONTENT_TYPE $content_type;
        fastcgi_param CONTENT_LENGTH $content_length;
        
        # Timeouts
        fastcgi_connect_timeout 60s;
        fastcgi_send_timeout 180s;
        fastcgi_read_timeout 180s;
        
        # Buffering
        fastcgi_buffer_size 128k;
        fastcgi_buffers 256 16k;
        fastcgi_busy_buffers_size 256k;
        fastcgi_temp_file_write_size 256k;
    }
    
    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    # Static files
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
}
</code></pre><h3 id="13-wordpress-configuration"><strong>1.3. WordPress Configuration</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    listen [::]:80;
    server_name blog.example.com;
    root /var/www/wordpress;
    index index.php;
    
    # Logging
    access_log /var/log/nginx/wordpress.access.log;
    error_log /var/log/nginx/wordpress.error.log;
    
    # Max upload size
    client_max_body_size 64M;
    
    # WordPress permalinks
    location / {
        try_files $uri $uri/ /index.php?$args;
    }
    
    # PHP processing
    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
        
        # WordPress-specific
        fastcgi_intercept_errors on;
        fastcgi_buffer_size 128k;
        fastcgi_buffers 4 256k;
        fastcgi_busy_buffers_size 256k;
        
        fastcgi_read_timeout 300s;
    }
    
    # Deny access to sensitive files
    location ~ /\.(ht|git|svn) {
        deny all;
    }
    
    location = /wp-config.php {
        deny all;
    }
    
    location = /xmlrpc.php {
        deny all;
    }
    
    # Cache static files
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # WordPress uploads
    location ~* ^/wp-content/uploads/.*\.(php|php3|php4|php5|phtml)$ {
        deny all;
    }
}
</code></pre><h3 id="14-laravel-configuration"><strong>1.4. Laravel Configuration</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    listen [::]:80;
    server_name app.example.com;
    root /var/www/laravel/public;
    index index.php;
    
    # Logging
    access_log /var/log/nginx/laravel.access.log;
    error_log /var/log/nginx/laravel.error.log;
    
    # Max upload size
    client_max_body_size 100M;
    
    # Add security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    
    # Laravel routing
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
    
    # PHP processing
    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
        
        # Laravel optimizations
        fastcgi_buffer_size 32k;
        fastcgi_buffers 8 16k;
        
        fastcgi_read_timeout 300s;
        fastcgi_connect_timeout 60s;
        fastcgi_send_timeout 180s;
        
        # Hide PHP version
        fastcgi_hide_header X-Powered-By;
    }
    
    # Deny access to sensitive files
    location ~ /\.(?!well-known).* {
        deny all;
    }
    
    location ~ /\.env {
        deny all;
    }
    
    # Disable execution in storage
    location ~* ^/storage/.*\.(php|php3|php4|php5|phtml)$ {
        deny all;
    }
    
    # Cache static assets
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
}
</code></pre><h3 id="15-php-fpm-pool-configuration"><strong>1.5. PHP-FPM Pool Configuration</strong></h3><pre><code class="language-bash"># Edit PHP-FPM pool config
sudo nano /etc/php/8.1/fpm/pool.d/www.conf
</code></pre><pre><code class="language-ini">[www]
user = nginx
group = nginx

# Socket or TCP
listen = /var/run/php/php8.1-fpm.sock
; listen = 127.0.0.1:9000

# Socket permissions
listen.owner = nginx
listen.group = nginx
listen.mode = 0660

# Process manager
pm = dynamic
pm.max_children = 50
pm.start_servers = 5
pm.min_spare_servers = 5
pm.max_spare_servers = 35
pm.max_requests = 500

# Status page
pm.status_path = /status

# Ping page
ping.path = /ping

# Process priority
; process.priority = -19

# Timeouts
request_terminate_timeout = 300s
request_slowlog_timeout = 10s
slowlog = /var/log/php-fpm/slow.log

# Environment variables
env[HOSTNAME] = $HOSTNAME
env[PATH] = /usr/local/bin:/usr/bin:/bin
env[TMP] = /tmp
env[TMPDIR] = /tmp
env[TEMP] = /tmp

# PHP ini settings
php_admin_value[error_log] = /var/log/php-fpm/www-error.log
php_admin_flag[log_errors] = on
php_value[session.save_handler] = files
php_value[session.save_path] = /var/lib/php/sessions
php_value[upload_max_filesize] = 100M
php_value[post_max_size] = 100M
php_value[memory_limit] = 256M
php_value[max_execution_time] = 300
</code></pre><p><strong>Restart PHP-FPM:</strong></p><pre><code class="language-bash">sudo systemctl restart php8.1-fpm
</code></pre><h3 id="16-multiple-php-versions"><strong>1.6. Multiple PHP Versions</strong></h3><pre><code class="language-nginx"># Install multiple PHP versions
sudo apt install php7.4-fpm php8.0-fpm php8.1-fpm php8.2-fpm

# Configure different sites with different PHP versions

# Site 1 - PHP 7.4
server {
    listen 80;
    server_name legacy.example.com;
    root /var/www/legacy;
    
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}

# Site 2 - PHP 8.1
server {
    listen 80;
    server_name app.example.com;
    root /var/www/app;
    
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}

# Site 3 - PHP 8.2
server {
    listen 80;
    server_name new.example.com;
    root /var/www/new;
    
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}
</code></pre><hr><h2 id="2-nginx-nodejs"><strong>2. Nginx + Node.js</strong></h2><h3 id="21-basic-nodejs-application"><strong>2.1. Basic Node.js Application</strong></h3><p><strong>Create simple Node.js app:</strong></p><pre><code class="language-javascript">// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =&gt; {
    res.json({ message: 'Hello from Node.js!' });
});

app.get('/api/users', (req, res) =&gt; {
    res.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ]);
});

app.listen(port, '127.0.0.1', () =&gt; {
    console.log(`Server running on port ${port}`);
});
</code></pre><p><strong>Install dependencies:</strong></p><pre><code class="language-bash">npm init -y
npm install express
</code></pre><p><strong>Run application:</strong></p><pre><code class="language-bash">node app.js
</code></pre><h3 id="22-nginx-reverse-proxy-for-nodejs"><strong>2.2. Nginx Reverse Proxy for Node.js</strong></h3><pre><code class="language-nginx">upstream nodejs_backend {
    # Single instance
    server 127.0.0.1:3000;
    
    # Or multiple instances (PM2 cluster mode)
    # server 127.0.0.1:3000;
    # server 127.0.0.1:3001;
    # server 127.0.0.1:3002;
    # server 127.0.0.1:3003;
    
    keepalive 64;
}

server {
    listen 80;
    listen [::]:80;
    server_name api.example.com;
    
    # Logging
    access_log /var/log/nginx/nodejs.access.log;
    error_log /var/log/nginx/nodejs.error.log;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Proxy to Node.js
    location / {
        proxy_pass http://nodejs_backend;
        
        # HTTP version and connection
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        
        # Headers
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Port $server_port;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        # Buffering
        proxy_buffering on;
        proxy_buffer_size 4k;
        proxy_buffers 8 4k;
    }
    
    # Health check endpoint
    location /health {
        proxy_pass http://nodejs_backend/health;
        access_log off;
    }
    
    # Static files (if served by Node.js)
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        proxy_pass http://nodejs_backend;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
</code></pre><h3 id="23-pm2-process-manager"><strong>2.3. PM2 Process Manager</strong></h3><p><strong>Install PM2:</strong></p><pre><code class="language-bash">npm install -g pm2
</code></pre><p><strong>Start application with PM2:</strong></p><pre><code class="language-bash"># Start single instance
pm2 start app.js --name "api"

# Start with cluster mode (multiple instances)
pm2 start app.js -i max --name "api"

# Or use ecosystem file
pm2 start ecosystem.config.js
</code></pre><p><strong>Ecosystem configuration:</strong></p><pre><code class="language-javascript">// ecosystem.config.js
module.exports = {
    apps: [{
        name: 'api',
        script: './app.js',
        instances: 4,
        exec_mode: 'cluster',
        env: {
            NODE_ENV: 'production',
            PORT: 3000
        },
        max_memory_restart: '500M',
        error_file: './logs/err.log',
        out_file: './logs/out.log',
        log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
        merge_logs: true
    }]
};
</code></pre><p><strong>Nginx với PM2 cluster:</strong></p><pre><code class="language-nginx">upstream nodejs_cluster {
    least_conn;
    
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
    server 127.0.0.1:3003;
    
    keepalive 64;
}

server {
    listen 80;
    server_name api.example.com;
    
    location / {
        proxy_pass http://nodejs_cluster;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
</code></pre><p><strong>PM2 commands:</strong></p><pre><code class="language-bash"># List processes
pm2 list

# Monitor
pm2 monit

# Logs
pm2 logs

# Restart
pm2 restart api

# Stop
pm2 stop api

# Delete
pm2 delete api

# Save configuration
pm2 save

# Startup script
pm2 startup
</code></pre><h3 id="24-nextjs-application"><strong>2.4. Next.js Application</strong></h3><pre><code class="language-nginx">upstream nextjs {
    server 127.0.0.1:3000;
    keepalive 64;
}

server {
    listen 80;
    server_name app.example.com;
    
    # Logging
    access_log /var/log/nginx/nextjs.access.log;
    error_log /var/log/nginx/nextjs.error.log;
    
    # Gzip compression
    gzip on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;
    
    location / {
        proxy_pass http://nextjs;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Next.js static files
    location /_next/static/ {
        proxy_pass http://nextjs;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Next.js images
    location /_next/image {
        proxy_pass http://nextjs;
        proxy_cache_valid 200 1h;
    }
}
</code></pre><hr><h2 id="3-python-applications-uwsgigunicorn"><strong>3. Python Applications (uWSGI/Gunicorn)</strong></h2><h3 id="31-flask-application"><strong>3.1. Flask Application</strong></h3><p><strong>Create Flask app:</strong></p><pre><code class="language-python"># app.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({'message': 'Hello from Flask!'})

@app.route('/api/users')
def users():
    return jsonify([
        {'id': 1, 'name': 'Alice'},
        {'id': 2, 'name': 'Bob'}
    ])

if __name__ == '__main__':
    app.run(debug=False)
</code></pre><p><strong>Install dependencies:</strong></p><pre><code class="language-bash">pip install flask gunicorn
</code></pre><h3 id="32-gunicorn-configuration"><strong>3.2. Gunicorn Configuration</strong></h3><p><strong>Run with Gunicorn:</strong></p><pre><code class="language-bash"># Basic
gunicorn app:app

# With options
gunicorn --bind 127.0.0.1:8000 --workers 4 --timeout 60 app:app

# With config file
gunicorn -c gunicorn_config.py app:app
</code></pre><p><strong>Gunicorn config file:</strong></p><pre><code class="language-python"># gunicorn_config.py
import multiprocessing

# Server socket
bind = '127.0.0.1:8000'
backlog = 2048

# Worker processes
workers = multiprocessing.cpu_count() * 2 + 1
worker_class = 'sync'
worker_connections = 1000
timeout = 60
keepalive = 2

# Logging
accesslog = '/var/log/gunicorn/access.log'
errorlog = '/var/log/gunicorn/error.log'
loglevel = 'info'

# Process naming
proc_name = 'flask_app'

# Server mechanics
daemon = False
pidfile = '/var/run/gunicorn.pid'
umask = 0
user = None
group = None
tmp_upload_dir = None

# SSL
keyfile = None
certfile = None
</code></pre><h3 id="33-nginx-gunicorn"><strong>3.3. Nginx + Gunicorn</strong></h3><pre><code class="language-nginx">upstream flask_app {
    # Single worker
    server 127.0.0.1:8000;
    
    # Or multiple workers
    # server 127.0.0.1:8000;
    # server 127.0.0.1:8001;
    # server 127.0.0.1:8002;
    
    keepalive 32;
}

server {
    listen 80;
    listen [::]:80;
    server_name flask.example.com;
    
    # Logging
    access_log /var/log/nginx/flask.access.log;
    error_log /var/log/nginx/flask.error.log;
    
    # Max body size
    client_max_body_size 50M;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Proxy to Flask
    location / {
        proxy_pass http://flask_app;
        
        # Headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # HTTP version for keepalive
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        # Buffering
        proxy_buffering on;
        proxy_buffer_size 8k;
        proxy_buffers 8 8k;
    }
    
    # Static files (if served separately)
    location /static/ {
        alias /var/www/flask/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Favicon
    location = /favicon.ico {
        access_log off;
        log_not_found off;
    }
}
</code></pre><h3 id="34-systemd-service-for-gunicorn"><strong>3.4. Systemd Service for Gunicorn</strong></h3><pre><code class="language-ini"># /etc/systemd/system/gunicorn.service
[Unit]
Description=Gunicorn instance for Flask application
After=network.target

[Service]
Type=notify
User=www-data
Group=www-data
WorkingDirectory=/var/www/flask
Environment="PATH=/var/www/flask/venv/bin"
ExecStart=/var/www/flask/venv/bin/gunicorn \
    --config /var/www/flask/gunicorn_config.py \
    --bind 127.0.0.1:8000 \
    app:app
ExecReload=/bin/kill -s HUP $MAINPID
KillMode=mixed
TimeoutStopSec=5
PrivateTmp=true
Restart=always

[Install]
WantedBy=multi-user.target
</code></pre><p><strong>Start service:</strong></p><pre><code class="language-bash">sudo systemctl daemon-reload
sudo systemctl start gunicorn
sudo systemctl enable gunicorn
sudo systemctl status gunicorn
</code></pre><h3 id="35-django-application"><strong>3.5. Django Application</strong></h3><p><strong>Nginx + Gunicorn for Django:</strong></p><pre><code class="language-nginx">upstream django_app {
    server unix:/var/www/django/gunicorn.sock fail_timeout=0;
}

server {
    listen 80;
    listen [::]:80;
    server_name django.example.com;
    
    # Logging
    access_log /var/log/nginx/django.access.log;
    error_log /var/log/nginx/django.error.log;
    
    # Max body size
    client_max_body_size 100M;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    
    # Static files
    location /static/ {
        alias /var/www/django/staticfiles/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Media files
    location /media/ {
        alias /var/www/django/media/;
        expires 1y;
        add_header Cache-Control "public";
    }
    
    # Proxy to Django
    location / {
        proxy_pass http://django_app;
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        proxy_redirect off;
        proxy_buffering off;
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
}
</code></pre><p><strong>Gunicorn systemd service for Django:</strong></p><pre><code class="language-ini"># /etc/systemd/system/gunicorn-django.service
[Unit]
Description=Gunicorn daemon for Django project
After=network.target

[Service]
Type=notify
User=www-data
Group=www-data
WorkingDirectory=/var/www/django
Environment="PATH=/var/www/django/venv/bin"
ExecStart=/var/www/django/venv/bin/gunicorn \
    --workers 4 \
    --bind unix:/var/www/django/gunicorn.sock \
    --timeout 60 \
    --access-logfile /var/log/gunicorn/access.log \
    --error-logfile /var/log/gunicorn/error.log \
    myproject.wsgi:application

ExecReload=/bin/kill -s HUP $MAINPID
KillMode=mixed
TimeoutStopSec=5
PrivateTmp=true
Restart=always

[Install]
WantedBy=multi-user.target
</code></pre><hr><h2 id="4-ruby-on-rails-v%E1%BB%9Bi-puma"><strong>4. Ruby on Rails với Puma</strong></h2><h3 id="41-puma-configuration"><strong>4.1. Puma Configuration</strong></h3><p><strong>Puma config file:</strong></p><pre><code class="language-ruby"># config/puma.rb
threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
threads threads_count, threads_count

port ENV.fetch("PORT") { 3000 }

environment ENV.fetch("RAILS_ENV") { "production" }

# Use socket
bind "unix:///var/www/rails/tmp/sockets/puma.sock"

# Or use TCP
# bind "tcp://127.0.0.1:3000"

workers ENV.fetch("WEB_CONCURRENCY") { 2 }

preload_app!

on_worker_boot do
  ActiveRecord::Base.establish_connection
end

plugin :tmp_restart
</code></pre><h3 id="42-nginx-puma"><strong>4.2. Nginx + Puma</strong></h3><pre><code class="language-nginx">upstream rails_app {
    server unix:/var/www/rails/tmp/sockets/puma.sock fail_timeout=0;
}

server {
    listen 80;
    listen [::]:80;
    server_name rails.example.com;
    root /var/www/rails/public;
    
    # Logging
    access_log /var/log/nginx/rails.access.log;
    error_log /var/log/nginx/rails.error.log;
    
    # Max body size
    client_max_body_size 100M;
    
    # Try static files first
    try_files $uri/index.html $uri @rails_app;
    
    # Proxy to Rails
    location @rails_app {
        proxy_pass http://rails_app;
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        proxy_redirect off;
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # Static assets
    location ~* ^/assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }
    
    # Cable (ActionCable for WebSockets)
    location /cable {
        proxy_pass http://rails_app;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    
    # Error pages
    error_page 500 502 503 504 /500.html;
    location = /500.html {
        root /var/www/rails/public;
    }
}
</code></pre><h3 id="43-systemd-service-for-puma"><strong>4.3. Systemd Service for Puma</strong></h3><pre><code class="language-ini"># /etc/systemd/system/puma.service
[Unit]
Description=Puma HTTP Server for Rails
After=network.target

[Service]
Type=notify
User=deploy
Group=deploy
WorkingDirectory=/var/www/rails
Environment="RAILS_ENV=production"
Environment="PATH=/var/www/rails/.rbenv/shims:/usr/local/bin:/usr/bin:/bin"

ExecStart=/var/www/rails/.rbenv/shims/bundle exec puma -C /var/www/rails/config/puma.rb
ExecReload=/bin/kill -USR1 $MAINPID

Restart=always
RestartSec=1

StandardOutput=append:/var/log/puma/stdout.log
StandardError=append:/var/log/puma/stderr.log

[Install]
WantedBy=multi-user.target
</code></pre><hr><h2 id="5-docker-containers"><strong>5. Docker Containers</strong></h2><h3 id="51-nginx-as-reverse-proxy-for-docker-containers"><strong>5.1. Nginx as Reverse Proxy for Docker Containers</strong></h3><p><strong>Docker Compose example:</strong></p><pre><code class="language-yaml"># docker-compose.yml
version: '3.8'

services:
  # Node.js app
  nodejs-app:
    build: ./nodejs
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
  
  # Python app
  python-app:
    build: ./python
    ports:
      - "8000:8000"
    environment:
      - FLASK_ENV=production
    restart: always
  
  # Nginx reverse proxy
  nginx:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/sites:/etc/nginx/sites-enabled:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - nodejs-app
      - python-app
    restart: always
</code></pre><p><strong>Nginx configuration for Docker:</strong></p><pre><code class="language-nginx"># nginx/sites/default.conf
upstream nodejs {
    server nodejs-app:3000;
}

upstream python {
    server python-app:8000;
}

server {
    listen 80;
    server_name example.com;
    
    # Node.js app
    location /api/node/ {
        proxy_pass http://nodejs/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    
    # Python app
    location /api/python/ {
        proxy_pass http://python/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
</code></pre><h3 id="52-docker-network-configuration"><strong>5.2. Docker Network Configuration</strong></h3><pre><code class="language-yaml"># docker-compose.yml with custom network
version: '3.8'

networks:
  app-network:
    driver: bridge

services:
  backend:
    image: myapp:latest
    networks:
      - app-network
    expose:
      - "8080"
  
  nginx:
    image: nginx:latest
    ports:
      - "80:80"
    networks:
      - app-network
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
</code></pre><p><strong>Nginx config:</strong></p><pre><code class="language-nginx">upstream backend {
    server backend:8080;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><hr><h2 id="6-websocket-proxying"><strong>6. WebSocket Proxying</strong></h2><h3 id="61-websocket-configuration"><strong>6.1. WebSocket Configuration</strong></h3><pre><code class="language-nginx">upstream websocket_backend {
    server 127.0.0.1:3000;
    keepalive 64;
}

server {
    listen 80;
    server_name ws.example.com;
    
    # WebSocket location
    location /ws {
        proxy_pass http://websocket_backend;
        
        # WebSocket specific headers
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        
        # Standard headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Timeouts (important for WebSockets)
        proxy_read_timeout 3600s;
        proxy_send_timeout 3600s;
        
        # Disable buffering
        proxy_buffering off;
    }
}
</code></pre><h3 id="62-socketio-configuration"><strong>6.2. Socket.IO Configuration</strong></h3><pre><code class="language-nginx">upstream socketio {
    ip_hash;  # Important for sticky sessions
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}

server {
    listen 80;
    server_name socketio.example.com;
    
    location / {
        proxy_pass http://socketio;
        
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
        
        proxy_buffering off;
        proxy_cache_bypass $http_upgrade;
    }
}
</code></pre><h3 id="63-complete-websocket-example"><strong>6.3. Complete WebSocket Example</strong></h3><pre><code class="language-nginx">map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}

upstream ws_backend {
    server 127.0.0.1:8080;
    server 127.0.0.1:8081;
    server 127.0.0.1:8082;
}

server {
    listen 443 ssl http2;
    server_name ws.example.com;
    
    ssl_certificate /etc/letsencrypt/live/ws.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ws.example.com/privkey.pem;
    
    # Regular HTTP traffic
    location / {
        proxy_pass http://ws_backend;
        
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # WebSocket traffic
    location /socket {
        proxy_pass http://ws_backend;
        
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        
        proxy_read_timeout 86400;
        proxy_send_timeout 86400;
        proxy_buffering off;
    }
}
</code></pre><hr><h2 id="7-grpc-proxying"><strong>7. gRPC Proxying</strong></h2><h3 id="71-grpc-configuration"><strong>7.1. gRPC Configuration</strong></h3><pre><code class="language-nginx">upstream grpc_backend {
    server 127.0.0.1:50051;
    server 127.0.0.1:50052;
}

server {
    listen 443 ssl http2;
    server_name grpc.example.com;
    
    ssl_certificate /etc/letsencrypt/live/grpc.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/grpc.example.com/privkey.pem;
    
    # gRPC location
    location / {
        grpc_pass grpc://grpc_backend;
        
        # Error handling
        error_page 502 = /error502grpc;
    }
    
    location = /error502grpc {
        internal;
        default_type application/grpc;
        add_header grpc-status 14;
        add_header content-length 0;
        return 204;
    }
}
</code></pre><h3 id="72-grpc-with-ssl"><strong>7.2. gRPC with SSL</strong></h3><pre><code class="language-nginx">upstream grpc_ssl_backend {
    server 127.0.0.1:50051;
}

server {
    listen 443 ssl http2;
    server_name grpc.example.com;
    
    ssl_certificate /etc/nginx/ssl/server.crt;
    ssl_certificate_key /etc/nginx/ssl/server.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    
    location / {
        grpc_pass grpcs://grpc_ssl_backend;
        
        grpc_ssl_certificate /etc/nginx/ssl/client.crt;
        grpc_ssl_certificate_key /etc/nginx/ssl/client.key;
        grpc_ssl_trusted_certificate /etc/nginx/ssl/ca.crt;
        
        grpc_set_header Host $host;
        grpc_set_header X-Real-IP $remote_addr;
    }
}
</code></pre><hr><h2 id="8-complete-production-setup"><strong>8. Complete Production Setup</strong></h2><h3 id="81-multi-application-environment"><strong>8.1. Multi-Application Environment</strong></h3><pre><code class="language-nginx"># /etc/nginx/nginx.conf
http {
    # Upstreams
    
    # PHP-FPM for WordPress
    upstream php_wordpress {
        server unix:/var/run/php/php8.1-fpm.sock;
    }
    
    # Node.js API
    upstream nodejs_api {
        least_conn;
        server 127.0.0.1:3000;
        server 127.0.0.1:3001;
        server 127.0.0.1:3002;
        keepalive 64;
    }
    
    # Python Flask
    upstream python_app {
        server unix:/var/www/flask/gunicorn.sock;
    }
    
    # Rails application
    upstream rails_app {
        server unix:/var/www/rails/tmp/sockets/puma.sock;
    }
    
    # WebSocket server
    upstream websocket {
        ip_hash;
        server 127.0.0.1:8080;
        server 127.0.0.1:8081;
    }
    
    # Include site configs
    include /etc/nginx/sites-enabled/*;
}
</code></pre><p><strong>WordPress site:</strong></p><pre><code class="language-nginx"># /etc/nginx/sites-available/wordpress.conf
server {
    listen 443 ssl http2;
    server_name blog.example.com;
    root /var/www/wordpress;
    index index.php;
    
    ssl_certificate /etc/letsencrypt/live/blog.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/blog.example.com/privkey.pem;
    
    location / {
        try_files $uri $uri/ /index.php?$args;
    }
    
    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_pass php_wordpress;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}
</code></pre><p><strong>Node.js API:</strong></p><pre><code class="language-nginx"># /etc/nginx/sites-available/api.conf
server {
    listen 443 ssl http2;
    server_name api.example.com;
    
    ssl_certificate /etc/letsencrypt/live/api.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.example.com/privkey.pem;
    
    location / {
        proxy_pass http://nodejs_api;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
</code></pre><p><strong>Python app:</strong></p><pre><code class="language-nginx"># /etc/nginx/sites-available/python.conf
server {
    listen 443 ssl http2;
    server_name app.example.com;
    
    ssl_certificate /etc/letsencrypt/live/app.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/app.example.com/privkey.pem;
    
    location / {
        proxy_pass http://python_app;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    
    location /static/ {
        alias /var/www/flask/static/;
        expires 1y;
    }
}
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>Tổng kết</strong></h2><p>Trong bài này, bạn đã học:</p><ul><li>✅ PHP-FPM configuration cho WordPress/Laravel</li><li>✅ Nginx + Node.js với PM2</li><li>✅ Python applications với Gunicorn/uWSGI</li><li>✅ Ruby on Rails với Puma</li><li>✅ Docker container integration</li><li>✅ WebSocket proxying</li><li>✅ gRPC proxying</li><li>✅ Multi-application production setup</li></ul><p><strong>Key takeaways:</strong></p><ul><li>Use appropriate process managers (PHP-FPM, PM2, Gunicorn, Puma)</li><li>Configure proper timeouts và buffering</li><li>Enable keepalive connections</li><li>Use Unix sockets khi possible (faster than TCP)</li><li>Implement health checks</li><li>Monitor application performance</li></ul><p><strong>Bài tiếp theo:</strong> Monitoring và Logging - access logs analysis, error tracking, Prometheus integration, ELK stack, real-time monitoring, alerting và dashboard creation để maintain healthy production environments.</p>
