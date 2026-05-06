---
id: 019c9617-fca6-7277-8b61-c480821e8bcb
title: 'Lesson 15: Production Best Practices and Advanced Topics in NGINX'
slug: bai-15-production-best-practices-va-advanced-topics-trong-nginx
description: >-
  A comprehensive lesson on Production Best Practices — configuration management, deployment strategies, troubleshooting guide, performance optimization, security hardening, cost optimization, disaster recovery, compliance (PCI-DSS, HIPAA, GDPR), multi-cloud strategies, and a production readiness checklist.
duration_minutes: 235
is_free: true
video_url: null
sort_order: 15
section_title: "Part 5: Production & Advanced"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx from Basics to Advanced
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2539" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2539)"/>

  <!-- Decorations -->
  <g>
    <circle cx="645" cy="225" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="690" cy="30" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="735" cy="95" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="780" cy="160" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="825" cy="225" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="235" x2="1100" y2="315" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="265" x2="1050" y2="335" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1010.9807621135332,170 1010.9807621135332,200 985,215 959.0192378864668,200 959.0192378864668,170 985,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — Lesson 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 15: Production Best Practices và</tspan>
      <tspan x="60" dy="42">Advanced Topics trong NGINX</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx from Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 5: Production &amp; Advanced</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-configuration-management"><strong>1. Configuration Management</strong></h2><h3 id="11-configuration-structure"><strong>1.1. Configuration Structure</strong></h3><pre><code class="language-bash">/etc/nginx/
├── nginx.conf                 # Main configuration
├── mime.types                 # MIME types
├── fastcgi_params            # FastCGI parameters
├── proxy_params              # Proxy parameters
├── snippets/                 # Reusable configuration snippets
│   ├── ssl-params.conf
│   ├── security-headers.conf
│   ├── proxy-common.conf
│   └── fastcgi-common.conf
├── conf.d/                   # Global configurations
│   ├── upstreams/
│   │   ├── api-services.conf
│   │   ├── web-services.conf
│   │   └── db-services.conf
│   ├── maps/
│   │   ├── geo-routing.conf
│   │   └── device-detection.conf
│   └── cache/
│       └── cache-zones.conf
├── sites-available/          # Site configurations
│   ├── example.com.conf
│   ├── api.example.com.conf
│   └── admin.example.com.conf
├── sites-enabled/            # Enabled sites (symlinks)
│   ├── example.com.conf -&gt; ../sites-available/example.com.conf
│   └── api.example.com.conf -&gt; ../sites-available/api.example.com.conf
├── ssl/                      # SSL certificates
│   ├── certs/
│   ├── private/
│   └── dhparam.pem
├── includes/                 # Include files
│   ├── rate-limits.conf
│   ├── blacklist.conf
│   └── whitelist.conf
└── modules-enabled/          # Dynamic modules
    └── ngx_http_geoip_module.so
</code></pre><h3 id="12-modular-configuration"><strong>1.2. Modular Configuration</strong></h3><p><strong>Main configuration:</strong></p><pre><code class="language-nginx"># /etc/nginx/nginx.conf
user nginx;
worker_processes auto;
worker_rlimit_nofile 65535;

error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

# Load dynamic modules
include /etc/nginx/modules-enabled/*.conf;

events {
    worker_connections 4096;
    use epoll;
    multi_accept on;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    
    # Logging
    include /etc/nginx/conf.d/logging.conf;
    
    # Performance
    include /etc/nginx/conf.d/performance.conf;
    
    # Security
    include /etc/nginx/conf.d/security.conf;
    
    # Rate limiting
    include /etc/nginx/conf.d/rate-limiting.conf;
    
    # Upstreams
    include /etc/nginx/conf.d/upstreams/*.conf;
    
    # Cache zones
    include /etc/nginx/conf.d/cache/*.conf;
    
    # Maps
    include /etc/nginx/conf.d/maps/*.conf;
    
    # Sites
    include /etc/nginx/sites-enabled/*;
}

# Stream (TCP/UDP proxy)
stream {
    include /etc/nginx/conf.d/stream/*.conf;
}
</code></pre><p><strong>Reusable snippets:</strong></p><pre><code class="language-nginx"># /etc/nginx/snippets/ssl-params.conf
ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers off;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;
ssl_session_tickets off;
ssl_stapling on;
ssl_stapling_verify on;
</code></pre><pre><code class="language-nginx"># /etc/nginx/snippets/security-headers.conf
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" always;
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
</code></pre><pre><code class="language-nginx"># /etc/nginx/snippets/proxy-common.conf
proxy_http_version 1.1;
proxy_set_header Connection "";
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_set_header X-Request-ID $request_id;

proxy_connect_timeout 5s;
proxy_send_timeout 10s;
proxy_read_timeout 30s;

proxy_buffering on;
proxy_buffer_size 8k;
proxy_buffers 16 8k;
proxy_busy_buffers_size 16k;
</code></pre><h3 id="13-version-control"><strong>1.3. Version Control</strong></h3><pre><code class="language-bash"># Initialize Git repository
cd /etc/nginx
git init

# Add .gitignore
cat &gt; .gitignore &lt;&lt; EOF
*.log
ssl/private/*.key
ssl/private/*.pem
.htpasswd
*.tmp
*.bak
EOF

# Add files
git add .
git commit -m "Initial Nginx configuration"

# Create backup branch
git branch backup-$(date +%Y%m%d)

# Before making changes
git checkout -b feature/new-rate-limits

# After testing
git checkout main
git merge feature/new-rate-limits
git tag -a v1.0.0 -m "Production release 1.0.0"
</code></pre><p><strong>Automated backup script:</strong></p><pre><code class="language-bash">#!/bin/bash
# /usr/local/bin/nginx-config-backup.sh

BACKUP_DIR="/backup/nginx"
DATE=$(date +%Y%m%d-%H%M%S)
REMOTE_BACKUP="backup-server:/backups/nginx"

# Create backup
mkdir -p $BACKUP_DIR

# Backup configuration
tar -czf $BACKUP_DIR/nginx-config-$DATE.tar.gz \
    --exclude='*.log' \
    --exclude='ssl/private' \
    /etc/nginx

# Backup to Git
cd /etc/nginx
git add -A
git commit -m "Automated backup $DATE" || true

# Sync to remote
rsync -avz $BACKUP_DIR/ $REMOTE_BACKUP/

# Keep only last 30 days
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete

echo "Backup completed: $DATE"
</code></pre><h3 id="14-configuration-testing"><strong>1.4. Configuration Testing</strong></h3><pre><code class="language-bash">#!/bin/bash
# /usr/local/bin/nginx-config-test.sh

echo "Testing Nginx configuration..."

# Test syntax
if nginx -t 2&gt;&amp;1 | tee /tmp/nginx-test.log; then
    echo "✓ Configuration syntax is valid"
else
    echo "✗ Configuration syntax error"
    cat /tmp/nginx-test.log
    exit 1
fi

# Test specific configurations
echo ""
echo "Running additional tests..."

# Check for duplicate server names
DUPLICATES=$(nginx -T 2&gt;/dev/null | grep "server_name" | sort | uniq -d)
if [ ! -z "$DUPLICATES" ]; then
    echo "✗ Warning: Duplicate server names found:"
    echo "$DUPLICATES"
fi

# Check for weak SSL protocols
if nginx -T 2&gt;/dev/null | grep -q "ssl_protocols.*TLSv1\s"; then
    echo "✗ Warning: Weak SSL protocols (TLSv1) detected"
fi

# Check if rate limiting is configured
if nginx -T 2&gt;/dev/null | grep -q "limit_req_zone"; then
    echo "✓ Rate limiting configured"
else
    echo "⚠ Warning: No rate limiting configured"
fi

# Check if security headers are present
if nginx -T 2&gt;/dev/null | grep -q "X-Frame-Options"; then
    echo "✓ Security headers configured"
else
    echo "⚠ Warning: Security headers not configured"
fi

echo ""
echo "Configuration test complete"
</code></pre><hr><h2 id="2-deployment-strategies"><strong>2. Deployment Strategies</strong></h2><h3 id="21-zero-downtime-deployment"><strong>2.1. Zero-Downtime Deployment</strong></h3><pre><code class="language-bash">#!/bin/bash
# /usr/local/bin/nginx-deploy.sh

set -e

BACKUP_DIR="/backup/nginx/deployments"
DATE=$(date +%Y%m%d-%H%M%S)

echo "Starting Nginx deployment - $DATE"

# Step 1: Backup current configuration
echo "Step 1: Backing up current configuration..."
mkdir -p $BACKUP_DIR
cp -r /etc/nginx $BACKUP_DIR/nginx-$DATE

# Step 2: Copy new configuration
echo "Step 2: Deploying new configuration..."
# rsync -av /path/to/new/config/ /etc/nginx/

# Step 3: Test configuration
echo "Step 3: Testing configuration..."
if ! nginx -t; then
    echo "✗ Configuration test failed. Rolling back..."
    rm -rf /etc/nginx
    cp -r $BACKUP_DIR/nginx-$DATE /etc/nginx
    exit 1
fi

# Step 4: Reload Nginx (zero downtime)
echo "Step 4: Reloading Nginx..."
nginx -s reload

# Step 5: Health check
echo "Step 5: Running health checks..."
sleep 2

for i in {1..5}; do
    if curl -sf http://localhost/health &gt; /dev/null; then
        echo "✓ Health check passed (attempt $i)"
        break
    else
        if [ $i -eq 5 ]; then
            echo "✗ Health checks failed. Rolling back..."
            rm -rf /etc/nginx
            cp -r $BACKUP_DIR/nginx-$DATE /etc/nginx
            nginx -s reload
            exit 1
        fi
        sleep 2
    fi
done

echo "✓ Deployment successful - $DATE"

# Cleanup old backups (keep last 10)
ls -t $BACKUP_DIR | tail -n +11 | xargs -I {} rm -rf $BACKUP_DIR/{}
</code></pre><h3 id="22-blue-green-deployment-script"><strong>2.2. Blue-Green Deployment Script</strong></h3><pre><code class="language-bash">#!/bin/bash
# /usr/local/bin/nginx-bluegreen.sh

CURRENT_ENV=$(cat /etc/nginx/conf.d/active-env.conf | grep -oP 'upstream \K\w+')
HEALTH_ENDPOINT="http://localhost/health"

if [ "$CURRENT_ENV" == "blue" ]; then
    NEW_ENV="green"
else
    NEW_ENV="blue"
fi

echo "Current environment: $CURRENT_ENV"
echo "Switching to: $NEW_ENV"

# Run smoke tests on new environment
echo "Running smoke tests on $NEW_ENV..."
if ! ./smoke-tests.sh $NEW_ENV; then
    echo "✗ Smoke tests failed. Aborting deployment."
    exit 1
fi

# Update configuration
echo "Updating configuration to $NEW_ENV..."
cat &gt; /etc/nginx/conf.d/active-env.conf &lt;&lt; EOF
upstream active_backend {
    server ${NEW_ENV}-1:8080;
    server ${NEW_ENV}-2:8080;
}
EOF

# Test configuration
if ! nginx -t; then
    echo "✗ Configuration test failed. Reverting..."
    cat &gt; /etc/nginx/conf.d/active-env.conf &lt;&lt; EOF
upstream active_backend {
    server ${CURRENT_ENV}-1:8080;
    server ${CURRENT_ENV}-2:8080;
}
EOF
    exit 1
fi

# Reload Nginx
nginx -s reload

# Verify health
sleep 2
if curl -sf $HEALTH_ENDPOINT; then
    echo "✓ Successfully switched to $NEW_ENV"
else
    echo "✗ Health check failed. Rolling back..."
    cat &gt; /etc/nginx/conf.d/active-env.conf &lt;&lt; EOF
upstream active_backend {
    server ${CURRENT_ENV}-1:8080;
    server ${CURRENT_ENV}-2:8080;
}
EOF
    nginx -s reload
    exit 1
fi
</code></pre><h3 id="23-canary-deployment-automation"><strong>2.3. Canary Deployment Automation</strong></h3><pre><code class="language-bash">#!/bin/bash
# /usr/local/bin/nginx-canary.sh

CANARY_PERCENTAGE=${1:-10}
MONITOR_DURATION=${2:-300}  # 5 minutes

echo "Starting canary deployment with $CANARY_PERCENTAGE% traffic"

# Update canary percentage
sed -i "s/split_clients.*{/split_clients \"\${remote_addr}\" \$version {\n    ${CANARY_PERCENTAGE}% \"canary\";/" /etc/nginx/conf.d/canary.conf

# Reload Nginx
nginx -s reload

# Monitor for errors
echo "Monitoring canary deployment for $MONITOR_DURATION seconds..."
START_TIME=$(date +%s)
ERROR_THRESHOLD=5

while [ $(($(date +%s) - START_TIME)) -lt $MONITOR_DURATION ]; do
    # Check error rate
    ERROR_RATE=$(tail -100 /var/log/nginx/access.log | grep "canary" | grep -c " 5[0-9][0-9] ")
    
    if [ $ERROR_RATE -gt $ERROR_THRESHOLD ]; then
        echo "✗ High error rate detected ($ERROR_RATE errors). Rolling back canary..."
        sed -i "s/split_clients.*{/split_clients \"\${remote_addr}\" \$version {\n    0% \"canary\";/" /etc/nginx/conf.d/canary.conf
        nginx -s reload
        exit 1
    fi
    
    echo "Canary health: $ERROR_RATE errors (threshold: $ERROR_THRESHOLD)"
    sleep 30
done

echo "✓ Canary deployment successful. Increasing to 100%..."
sed -i "s/split_clients.*{/split_clients \"\${remote_addr}\" \$version {\n    100% \"canary\";/" /etc/nginx/conf.d/canary.conf
nginx -s reload
</code></pre><h3 id="24-rollback-procedure"><strong>2.4. Rollback Procedure</strong></h3><pre><code class="language-bash">#!/bin/bash
# /usr/local/bin/nginx-rollback.sh

BACKUP_DIR="/backup/nginx/deployments"

echo "Available backups:"
ls -lt $BACKUP_DIR | tail -n +2 | nl

read -p "Enter backup number to restore: " BACKUP_NUM

BACKUP_PATH=$(ls -t $BACKUP_DIR | sed -n "${BACKUP_NUM}p")

if [ -z "$BACKUP_PATH" ]; then
    echo "Invalid backup number"
    exit 1
fi

echo "Rolling back to: $BACKUP_PATH"
read -p "Are you sure? (yes/no): " CONFIRM

if [ "$CONFIRM" != "yes" ]; then
    echo "Rollback cancelled"
    exit 0
fi

# Stop Nginx
systemctl stop nginx

# Backup current (failed) configuration
FAILED_BACKUP="/backup/nginx/failed-$(date +%Y%m%d-%H%M%S)"
mv /etc/nginx $FAILED_BACKUP

# Restore backup
cp -r $BACKUP_DIR/$BACKUP_PATH /etc/nginx

# Test configuration
if nginx -t; then
    # Start Nginx
    systemctl start nginx
    
    # Verify
    if systemctl is-active --quiet nginx; then
        echo "✓ Rollback successful"
        echo "Failed configuration saved to: $FAILED_BACKUP"
    else
        echo "✗ Nginx failed to start after rollback"
        exit 1
    fi
else
    echo "✗ Backup configuration is invalid"
    exit 1
fi
</code></pre><hr><h2 id="3-comprehensive-troubleshooting-guide"><strong>3. Comprehensive Troubleshooting Guide</strong></h2><h3 id="31-common-issues-and-solutions"><strong>3.1. Common Issues and Solutions</strong></h3><p><strong>Issue 1: 502 Bad Gateway</strong></p><pre><code class="language-bash"># Diagnosis script
#!/bin/bash
echo "Diagnosing 502 Bad Gateway errors..."

# Check if backend is running
echo "1. Checking backend services..."
for port in 8080 8081 8082; do
    if netstat -tuln | grep -q ":$port "; then
        echo "✓ Service on port $port is running"
    else
        echo "✗ No service on port $port"
    fi
done

# Check Nginx error log
echo -e "\n2. Recent 502 errors:"
tail -50 /var/log/nginx/error.log | grep "502"

# Check upstream configuration
echo -e "\n3. Upstream configuration:"
nginx -T | grep -A5 "upstream"

# Test backend connectivity
echo -e "\n4. Testing backend connectivity:"
for backend in backend1:8080 backend2:8080; do
    if curl -sf http://$backend/health; then
        echo "✓ $backend is reachable"
    else
        echo "✗ $backend is not reachable"
    fi
done

# Check system resources
echo -e "\n5. System resources:"
echo "Memory: $(free -h | grep Mem | awk '{print $3 "/" $2}')"
echo "CPU: $(top -bn1 | grep "Cpu(s)" | awk '{print $2}')%"
echo "Open files: $(lsof | wc -l)"
</code></pre><p><strong>Solutions:</strong></p><pre><code class="language-nginx"># Fix 1: Increase timeouts
location / {
    proxy_pass http://backend;
    proxy_connect_timeout 10s;
    proxy_send_timeout 60s;
    proxy_read_timeout 60s;
}

# Fix 2: Add backup server
upstream backend {
    server backend1:8080 max_fails=3 fail_timeout=30s;
    server backend2:8080 max_fails=3 fail_timeout=30s;
    server backup-server:8080 backup;
}

# Fix 3: Use socket instead of TCP
upstream backend {
    server unix:/var/run/app.sock;
}
</code></pre><p><strong>Issue 2: High Memory Usage</strong></p><pre><code class="language-bash">#!/bin/bash
# diagnose-memory.sh

echo "Nginx Memory Diagnosis"
echo "====================="

# Total memory used by Nginx
NGINX_MEM=$(ps aux | grep nginx | awk '{sum+=$6} END {print sum/1024}')
echo "Total Nginx memory: ${NGINX_MEM}MB"

# Memory per worker
echo -e "\nMemory per worker:"
ps aux | grep "nginx: worker" | awk '{print $2, $6/1024 "MB"}'

# Check buffer sizes
echo -e "\nBuffer configuration:"
nginx -T | grep -E "buffer_size|buffers"

# Check cache size
echo -e "\nCache usage:"
du -sh /var/cache/nginx/*

# Recommendations
echo -e "\nRecommendations:"
if (( $(echo "$NGINX_MEM &gt; 1000" | bc -l) )); then
    echo "⚠ High memory usage detected"
    echo "  - Reduce worker_connections"
    echo "  - Decrease buffer sizes"
    echo "  - Limit cache size"
fi
</code></pre><p><strong>Solutions:</strong></p><pre><code class="language-nginx"># Reduce buffer sizes
http {
    client_body_buffer_size 64k;  # Was: 128k
    proxy_buffers 8 4k;            # Was: 16 8k
    
    # Limit cache
    proxy_cache_path /var/cache/nginx 
                     levels=1:2 
                     keys_zone=cache:10m 
                     max_size=500m         # Was: 2g
                     inactive=30m;
}
</code></pre><p><strong>Issue 3: Slow Response Times</strong></p><pre><code class="language-bash">#!/bin/bash
# diagnose-performance.sh

echo "Performance Diagnosis"
echo "===================="

# Average response time
echo "Average response time (last 1000 requests):"
tail -1000 /var/log/nginx/access.log | awk '{print $NF}' | awk '{sum+=$1; count++} END {print sum/count "s"}'

# Slow requests (&gt; 5s)
echo -e "\nSlow requests (&gt;5s):"
tail -1000 /var/log/nginx/access.log | awk '$NF &gt; 5 {print $0}' | head -10

# Upstream response times
echo -e "\nUpstream response times:"
tail -1000 /var/log/nginx/access.log | grep -oP 'upstream_response_time=\K[^ ]+' | awk '{sum+=$1; count++} END {print sum/count "s"}'

# Check for bottlenecks
echo -e "\nPotential bottlenecks:"

# Connection count
CONNECTIONS=$(netstat -an | grep :80 | wc -l)
echo "Active connections: $CONNECTIONS"

# Worker processes
WORKERS=$(ps aux | grep "nginx: worker" | wc -l)
echo "Worker processes: $WORKERS"

# CPU usage
CPU=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}')
echo "CPU usage: $CPU%"
</code></pre><p><strong>Solutions:</strong></p><pre><code class="language-nginx"># Enable caching
location / {
    proxy_pass http://backend;
    
    proxy_cache my_cache;
    proxy_cache_valid 200 10m;
    proxy_cache_use_stale error timeout updating;
    add_header X-Cache-Status $upstream_cache_status;
}

# Enable keepalive
upstream backend {
    server backend1:8080;
    server backend2:8080;
    keepalive 64;
}

location / {
    proxy_pass http://backend;
    proxy_http_version 1.1;
    proxy_set_header Connection "";
}

# Increase worker processes
worker_processes auto;  # Or specific number based on CPU cores
</code></pre><h3 id="32-debugging-tools"><strong>3.2. Debugging Tools</strong></h3><p><strong>Real-time log monitoring:</strong></p><pre><code class="language-bash">#!/bin/bash
# nginx-monitor.sh

# Color codes
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m'

echo "Monitoring Nginx logs... (Ctrl+C to stop)"

tail -f /var/log/nginx/access.log | while read line; do
    STATUS=$(echo $line | awk '{print $9}')
    
    case $STATUS in
        2*)
            echo -e "${GREEN}$line${NC}"
            ;;
        3*)
            echo -e "$line"
            ;;
        4*)
            echo -e "${YELLOW}$line${NC}"
            ;;
        5*)
            echo -e "${RED}$line${NC}"
            ;;
        *)
            echo "$line"
            ;;
    esac
done
</code></pre><p><strong>Request analyzer:</strong></p><pre><code class="language-bash">#!/bin/bash
# analyze-requests.sh

LOG_FILE="/var/log/nginx/access.log"
LINES=${1:-1000}

echo "Analyzing last $LINES requests..."
echo "================================"

# Top URLs
echo -e "\nTop 10 URLs:"
tail -$LINES $LOG_FILE | awk '{print $7}' | sort | uniq -c | sort -rn | head -10

# Status code distribution
echo -e "\nStatus Code Distribution:"
tail -$LINES $LOG_FILE | awk '{print $9}' | sort | uniq -c | sort -rn

# Top IPs
echo -e "\nTop 10 IP Addresses:"
tail -$LINES $LOG_FILE | awk '{print $1}' | sort | uniq -c | sort -rn | head -10

# Average response time
echo -e "\nAverage Response Time:"
tail -$LINES $LOG_FILE | awk '{print $NF}' | awk '{sum+=$1; count++} END {print sum/count "s"}'

# Requests per second
echo -e "\nRequests per Second:"
tail -$LINES $LOG_FILE | awk '{print $4}' | cut -d: -f1-3 | uniq -c | awk '{sum+=$1; count++} END {print sum/count " req/s"}'

# Top User Agents
echo -e "\nTop 5 User Agents:"
tail -$LINES $LOG_FILE | awk -F'"' '{print $6}' | sort | uniq -c | sort -rn | head -5
</code></pre><h3 id="33-performance-testing"><strong>3.3. Performance Testing</strong></h3><pre><code class="language-bash">#!/bin/bash
# performance-test.sh

URL=${1:-"http://localhost"}
DURATION=${2:-60}
CONCURRENCY=${3:-100}

echo "Performance Test"
echo "================"
echo "URL: $URL"
echo "Duration: ${DURATION}s"
echo "Concurrency: $CONCURRENCY"
echo ""

# Test 1: Apache Bench
echo "Test 1: Apache Bench"
ab -t $DURATION -c $CONCURRENCY -k $URL/ | grep -E "Requests per second|Time per request|Transfer rate"

echo ""

# Test 2: wrk
echo "Test 2: wrk (if available)"
if command -v wrk &amp;&gt; /dev/null; then
    wrk -t4 -c$CONCURRENCY -d${DURATION}s $URL/
else
    echo "wrk not installed"
fi

echo ""

# Test 3: Siege
echo "Test 3: Siege (if available)"
if command -v siege &amp;&gt; /dev/null; then
    siege -c $CONCURRENCY -t ${DURATION}s $URL
else
    echo "siege not installed"
fi
</code></pre><hr><h2 id="4-security-hardening"><strong>4. Security Hardening</strong></h2><h3 id="41-complete-security-configuration"><strong>4.1. Complete Security Configuration</strong></h3><pre><code class="language-nginx"># /etc/nginx/conf.d/security.conf

# Hide server version
server_tokens off;
more_clear_headers Server;

# Limit request size
client_max_body_size 10M;
client_body_buffer_size 128k;
client_header_buffer_size 1k;
large_client_header_buffers 4 8k;

# Timeouts
client_body_timeout 12s;
client_header_timeout 12s;
send_timeout 10s;
keepalive_timeout 30s;

# Rate limiting
limit_req_zone $binary_remote_addr zone=general:10m rate=10r/s;
limit_req_zone $binary_remote_addr zone=login:10m rate=5r/m;
limit_conn_zone $binary_remote_addr zone=addr:10m;

# Block bad bots
map $http_user_agent $bad_bot {
    default 0;
    ~*malicious 1;
    ~*scraper 1;
    ~*bot 1;
}

# Block suspicious URIs
map $request_uri $suspicious_uri {
    default 0;
    ~*\.\./\.\. 1;
    ~*\.(bash|git|svn|env) 1;
    ~*\.(php|asp|jsp)\. 1;
}

# SSL/TLS configuration
ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers off;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;
ssl_session_tickets off;

# Security headers template
map $sent_http_content_type $security_headers {
    default "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
}
</code></pre><h3 id="42-waf-rules"><strong>4.2. WAF Rules</strong></h3><pre><code class="language-nginx"># /etc/nginx/conf.d/waf-rules.conf

# SQL Injection
map $args $sql_injection {
    default 0;
    ~*union.*select 1;
    ~*concat.*\( 1;
    ~*load_file 1;
}

# XSS Detection
map $args $xss_attack {
    default 0;
    ~*&lt;script 1;
    ~*javascript: 1;
    ~*onerror= 1;
}

# Path Traversal
map $request_uri $path_traversal {
    default 0;
    ~*\.\./\.\. 1;
    ~*etc/passwd 1;
}

# Server block with WAF
server {
    listen 80;
    
    # Block attacks
    if ($sql_injection) {
        return 403 "SQL Injection detected";
    }
    
    if ($xss_attack) {
        return 403 "XSS Attack detected";
    }
    
    if ($path_traversal) {
        return 403 "Path Traversal detected";
    }
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><h3 id="43-ddos-protection"><strong>4.3. DDoS Protection</strong></h3><pre><code class="language-nginx"># /etc/nginx/conf.d/ddos-protection.conf

# Connection limits
limit_conn_zone $binary_remote_addr zone=conn_limit_per_ip:10m;
limit_conn_zone $server_name zone=conn_limit_per_server:10m;

# Request rate limits
limit_req_zone $binary_remote_addr zone=req_limit_per_ip:10m rate=10r/s;

# Slow request protection
client_body_timeout 10s;
client_header_timeout 10s;
send_timeout 10s;

# Small buffer to prevent slowloris
client_body_buffer_size 1k;
client_header_buffer_size 1k;
large_client_header_buffers 2 1k;

server {
    listen 80;
    
    # Apply limits
    limit_conn conn_limit_per_ip 10;
    limit_conn conn_limit_per_server 1000;
    limit_req zone=req_limit_per_ip burst=20 nodelay;
    
    location / {
        proxy_pass http://backend;
    }
}
</code></pre><h3 id="44-security-monitoring"><strong>4.4. Security Monitoring</strong></h3><pre><code class="language-bash">#!/bin/bash
# security-monitor.sh

LOG_FILE="/var/log/nginx/access.log"
ALERT_EMAIL="security@example.com"
WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK"

# Monitor for attacks
tail -f $LOG_FILE | while read line; do
    # SQL Injection
    if echo "$line" | grep -qE "union.*select|concat\("; then
        echo "[ALERT] SQL Injection attempt: $line"
        echo "SQL Injection attempt detected" | mail -s "Security Alert" $ALERT_EMAIL
        curl -X POST $WEBHOOK_URL -d "{\"text\":\"🔴 SQL Injection attempt detected\"}"
    fi
    
    # XSS
    if echo "$line" | grep -qE "&lt;script|javascript:"; then
        echo "[ALERT] XSS attempt: $line"
    fi
    
    # Directory traversal
    if echo "$line" | grep -qE "\.\./\.\."; then
        echo "[ALERT] Directory traversal attempt: $line"
    fi
    
    # High rate from single IP
    IP=$(echo "$line" | awk '{print $1}')
    COUNT=$(grep "$IP" $LOG_FILE | wc -l)
    if [ $COUNT -gt 1000 ]; then
        echo "[ALERT] High request rate from $IP: $COUNT requests"
    fi
done
</code></pre><hr><h2 id="5-cost-optimization"><strong>5. Cost Optimization</strong></h2><h3 id="51-bandwidth-optimization"><strong>5.1. Bandwidth Optimization</strong></h3><pre><code class="language-nginx"># Compression
http {
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript 
               application/json application/javascript application/xml+rss 
               image/svg+xml;
    gzip_min_length 1000;
    
    # Brotli (if available)
    brotli on;
    brotli_comp_level 6;
    brotli_types text/plain text/css text/xml text/javascript 
                 application/json application/javascript;
}

# Aggressive caching
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    access_log off;
}

# Remove unnecessary headers
more_clear_headers Server;
more_clear_headers X-Powered-By;
</code></pre><h3 id="52-resource-optimization"><strong>5.2. Resource Optimization</strong></h3><pre><code class="language-nginx"># Optimize worker configuration
worker_processes auto;
worker_rlimit_nofile 65535;

events {
    worker_connections 2048;  # Don't over-provision
    use epoll;
    multi_accept on;
}

http {
    # Connection pooling
    keepalive_timeout 30s;     # Not too long
    keepalive_requests 100;
    
    # Upstream keepalive
    upstream backend {
        server backend1:8080;
        keepalive 32;           # Reasonable size
    }
    
    # Efficient file serving
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    
    # File cache
    open_file_cache max=1000 inactive=20s;
    open_file_cache_valid 30s;
    open_file_cache_min_uses 2;
}
</code></pre><h3 id="53-cost-monitoring"><strong>5.3. Cost Monitoring</strong></h3><pre><code class="language-bash">#!/bin/bash
# cost-report.sh

echo "Nginx Cost Report"
echo "================="

# Bandwidth usage
echo -e "\n1. Bandwidth Usage (last 24 hours):"
BYTES=$(awk '{sum+=$10} END {print sum}' /var/log/nginx/access.log)
GB=$(echo "scale=2; $BYTES / 1024 / 1024 / 1024" | bc)
echo "Total: ${GB}GB"

# Request count
echo -e "\n2. Request Count:"
REQUESTS=$(wc -l &lt; /var/log/nginx/access.log)
echo "Total requests: $REQUESTS"

# Cache hit rate
echo -e "\n3. Cache Performance:"
HITS=$(grep "HIT" /var/log/nginx/access.log | wc -l)
TOTAL=$(wc -l &lt; /var/log/nginx/access.log)
HIT_RATE=$(echo "scale=2; ($HITS * 100) / $TOTAL" | bc)
echo "Cache hit rate: ${HIT_RATE}%"

# Compression savings
echo -e "\n4. Compression Savings:"
UNCOMPRESSED=$(awk '{sum+=$10} END {print sum}' /var/log/nginx/access.log)
# Estimate 70% compression
COMPRESSED=$(echo "scale=2; $UNCOMPRESSED * 0.3" | bc)
SAVINGS=$(echo "scale=2; ($UNCOMPRESSED - $COMPRESSED) / 1024 / 1024 / 1024" | bc)
echo "Estimated savings: ${SAVINGS}GB"

# Recommendations
echo -e "\n5. Cost Optimization Recommendations:"
if (( $(echo "$HIT_RATE &lt; 80" | bc -l) )); then
    echo "⚠ Cache hit rate is low. Increase cache size."
fi

if ! nginx -T | grep -q "gzip on"; then
    echo "⚠ Gzip compression is disabled. Enable it to save bandwidth."
fi
</code></pre><hr><h2 id="6-compliance-pci-dss-hipaa-gdpr"><strong>6. Compliance (PCI-DSS, HIPAA, GDPR)</strong></h2><h3 id="61-pci-dss-configuration"><strong>6.1. PCI-DSS Configuration</strong></h3><pre><code class="language-nginx"># PCI-DSS compliant configuration

http {
    # Strong SSL/TLS only
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305';
    ssl_prefer_server_ciphers on;
    
    # Logging for compliance
    log_format pci_compliant '$remote_addr - $remote_user [$time_local] '
                             '"$request" $status $body_bytes_sent '
                             '"$http_referer" "$http_user_agent" '
                             'ssl_protocol=$ssl_protocol ssl_cipher=$ssl_cipher '
                             'request_id=$request_id';
    
    access_log /var/log/nginx/pci-access.log pci_compliant;
    
    server {
        listen 443 ssl http2;
        
        # No weak ciphers
        ssl_ciphers HIGH:!aNULL:!MD5:!3DES;
        
        # Certificate pinning (optional)
        add_header Public-Key-Pins 'pin-sha256="base64+primary=="; pin-sha256="base64+backup=="; max-age=5184000; includeSubDomains';
        
        # Security headers
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
        add_header X-Frame-Options "DENY" always;
        add_header X-Content-Type-Options "nosniff" always;
        
        # No credit card data in URLs
        if ($request_uri ~* (card|cc|cvv|pan)=) {
            return 400 "Sensitive data in URL not allowed";
        }
        
        location / {
            proxy_pass http://backend;
            
            # Don't log sensitive data
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            
            # Secure headers
            proxy_hide_header X-Powered-By;
        }
    }
}
</code></pre><h3 id="62-hipaa-configuration"><strong>6.2. HIPAA Configuration</strong></h3><pre><code class="language-nginx"># HIPAA compliant configuration

http {
    # Encryption required
    ssl_protocols TLSv1.2 TLSv1.3;
    
    # Detailed audit logging
    log_format hipaa '$remote_addr - $remote_user [$time_local] '
                    '"$request" $status $body_bytes_sent '
                    'request_id=$request_id '
                    'user_agent="$http_user_agent" '
                    'ssl_protocol=$ssl_protocol';
    
    access_log /var/log/nginx/hipaa-access.log hipaa;
    
    # Retain logs for 6 years (HIPAA requirement)
    # Configure in logrotate
    
    server {
        listen 443 ssl http2;
        
        # Strong encryption
        ssl_ciphers ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
        
        # Require client certificates (mutual TLS)
        ssl_client_certificate /etc/nginx/ssl/ca.crt;
        ssl_verify_client optional;
        
        # Access control
        if ($ssl_client_verify != SUCCESS) {
            return 403 "Client certificate required";
        }
        
        # Session timeout (HIPAA requires automatic logout)
        add_header Set-Cookie "session_timeout=1800; Secure; HttpOnly";
        
        location /api/patient-data {
            # Strict access controls
            limit_except GET POST {
                deny all;
            }
            
            # Audit all access
            access_log /var/log/nginx/phi-access.log hipaa;
            
            proxy_pass http://backend;
        }
    }
}
</code></pre><h3 id="63-gdpr-configuration"><strong>6.3. GDPR Configuration</strong></h3><pre><code class="language-nginx"># GDPR compliant configuration

http {
    # IP anonymization
    map $remote_addr $anonymized_ip {
        ~(?P&lt;ip&gt;\d+\.\d+\.\d+)\.\d+ $ip.0;
        ~(?P&lt;ip&gt;[^:]+:[^:]+): $ip::;
        default 0.0.0.0;
    }
    
    # GDPR-compliant logging
    log_format gdpr '$anonymized_ip - [$time_local] '
                   '"$request" $status $body_bytes_sent '
                   'request_id=$request_id';
    
    access_log /var/log/nginx/gdpr-access.log gdpr;
    
    # Cookie consent tracking
    map $http_cookie $cookie_consent {
        default 0;
        ~*cookie_consent=accepted 1;
    }
    
    server {
        listen 443 ssl http2;
        
        # Data subject rights endpoint
        location /api/gdpr/data-request {
            # Handle GDPR data requests
            limit_req zone=gdpr_requests burst=5;
            
            proxy_pass http://backend/gdpr/request;
        }
        
        # Tracking only with consent
        location /analytics {
            if ($cookie_consent = 0) {
                return 403 "Cookie consent required";
            }
            
            proxy_pass http://analytics_backend;
        }
        
        # Data retention policy
        location /api/ {
            # Add header about data retention
            add_header X-Data-Retention "30 days" always;
            
            proxy_pass http://backend;
        }
    }
}
</code></pre><hr><h2 id="7-production-readiness-checklist"><strong>7. Production Readiness Checklist</strong></h2><h3 id="71-pre-deployment-checklist"><strong>7.1. Pre-deployment Checklist</strong></h3><pre><code class="language-markdown"># Nginx Production Readiness Checklist

## Configuration
- [ ] Configuration tested with `nginx -t`
- [ ] No syntax errors
- [ ] Modular configuration structure
- [ ] Configuration in version control
- [ ] Backups automated

## Performance
- [ ] Worker processes optimized (auto or based on CPU cores)
- [ ] Worker connections configured (typically 2048-4096)
- [ ] Keepalive enabled for upstreams
- [ ] Gzip compression enabled
- [ ] Static file caching configured
- [ ] Proxy caching configured where appropriate
- [ ] sendfile and tcp_nopush enabled
- [ ] Open file cache configured

## Security
- [ ] SSL/TLS configured (TLS 1.2+ only)
- [ ] Strong ciphers configured
- [ ] HSTS enabled
- [ ] Security headers configured (X-Frame-Options, CSP, etc.)
- [ ] Rate limiting implemented
- [ ] DDoS protection configured
- [ ] Server tokens hidden
- [ ] Access controls (IP whitelist/blacklist)
- [ ] WAF rules implemented (if needed)
- [ ] Regular security updates scheduled

## High Availability
- [ ] Multiple upstream servers configured
- [ ] Health checks implemented
- [ ] Failover tested
- [ ] Load balancing configured
- [ ] Session persistence (if needed)
- [ ] Keepalived configured (if using VIP)
- [ ] Disaster recovery plan documented

## Monitoring &amp; Logging
- [ ] Access logs configured
- [ ] Error logs configured
- [ ] Log rotation configured
- [ ] Monitoring system integrated (Prometheus/Grafana)
- [ ] Alerting configured
- [ ] Health check endpoints
- [ ] Metrics exported
- [ ] Log aggregation (ELK/CloudWatch)

## Documentation
- [ ] Architecture diagram created
- [ ] Configuration documented
- [ ] Deployment procedure documented
- [ ] Rollback procedure documented
- [ ] Troubleshooting guide created
- [ ] On-call runbook prepared

## Testing
- [ ] Load testing performed
- [ ] Failover testing completed
- [ ] Security testing done
- [ ] Smoke tests automated
- [ ] Performance benchmarks documented

## Compliance
- [ ] Compliance requirements identified (PCI-DSS/HIPAA/GDPR)
- [ ] Audit logging enabled
- [ ] Data retention policy implemented
- [ ] Access controls documented
- [ ] Compliance audit scheduled
</code></pre><h3 id="72-health-check-script"><strong>7.2. Health Check Script</strong></h3><pre><code class="language-bash">#!/bin/bash
# production-healthcheck.sh

REPORT_FILE="/tmp/nginx-health-$(date +%Y%m%d).txt"

{
    echo "Nginx Production Health Check"
    echo "=============================="
    echo "Date: $(date)"
    echo ""
    
    # 1. Service Status
    echo "1. Service Status"
    if systemctl is-active --quiet nginx; then
        echo "✓ Nginx is running"
    else
        echo "✗ Nginx is NOT running"
    fi
    echo ""
    
    # 2. Configuration Test
    echo "2. Configuration Test"
    if nginx -t 2&gt;&amp;1; then
        echo "✓ Configuration is valid"
    else
        echo "✗ Configuration has errors"
    fi
    echo ""
    
    # 3. SSL Certificate Expiry
    echo "3. SSL Certificate Status"
    for cert in /etc/letsencrypt/live/*/fullchain.pem; do
        DOMAIN=$(echo $cert | cut -d/ -f5)
        EXPIRY=$(openssl x509 -enddate -noout -in $cert | cut -d= -f2)
        DAYS=$(( ($(date -d "$EXPIRY" +%s) - $(date +%s)) / 86400 ))
        
        if [ $DAYS -lt 30 ]; then
            echo "⚠ $DOMAIN expires in $DAYS days"
        else
            echo "✓ $DOMAIN valid for $DAYS days"
        fi
    done
    echo ""
    
    # 4. Resource Usage
    echo "4. Resource Usage"
    echo "Memory: $(free -h | grep Mem | awk '{print $3 "/" $2}')"
    echo "CPU: $(top -bn1 | grep "Cpu(s)" | awk '{print $2}')%"
    echo "Disk: $(df -h / | tail -1 | awk '{print $5}')"
    echo ""
    
    # 5. Connection Stats
    echo "5. Connection Stats"
    CONNECTIONS=$(netstat -an | grep :80 | wc -l)
    echo "Active connections: $CONNECTIONS"
    echo ""
    
    # 6. Error Rate
    echo "6. Error Rate (last hour)"
    TOTAL=$(grep "$(date -d '1 hour ago' '+%d/%b/%Y:%H')" /var/log/nginx/access.log | wc -l)
    ERRORS=$(grep "$(date -d '1 hour ago' '+%d/%b/%Y:%H')" /var/log/nginx/access.log | grep " 5[0-9][0-9] " | wc -l)
    if [ $TOTAL -gt 0 ]; then
        ERROR_RATE=$(echo "scale=2; ($ERRORS * 100) / $TOTAL" | bc)
        echo "Error rate: ${ERROR_RATE}%"
        
        if (( $(echo "$ERROR_RATE &gt; 1" | bc -l) )); then
            echo "⚠ High error rate"
        else
            echo "✓ Error rate normal"
        fi
    fi
    echo ""
    
    # 7. Upstream Health
    echo "7. Upstream Health"
    nginx -T 2&gt;/dev/null | grep "server.*:.*;" | while read line; do
        SERVER=$(echo $line | awk '{print $2}' | tr -d ';')
        if curl -sf --max-time 2 http://$SERVER/health &gt; /dev/null; then
            echo "✓ $SERVER is healthy"
        else
            echo "✗ $SERVER is unhealthy"
        fi
    done
    echo ""
    
    # 8. Log Files
    echo "8. Log File Status"
    for log in /var/log/nginx/*.log; do
        SIZE=$(du -h $log | awk '{print $1}')
        echo "$(basename $log): $SIZE"
    done
    echo ""
    
    # 9. Security
    echo "9. Security Check"
    if nginx -T 2&gt;/dev/null | grep -q "ssl_protocols.*TLSv1.3"; then
        echo "✓ TLS 1.3 enabled"
    else
        echo "⚠ TLS 1.3 not enabled"
    fi
    
    if nginx -T 2&gt;/dev/null | grep -q "limit_req_zone"; then
        echo "✓ Rate limiting configured"
    else
        echo "⚠ Rate limiting not configured"
    fi
    echo ""
    
    # 10. Overall Status
    echo "10. Overall Status"
    if systemctl is-active --quiet nginx &amp;&amp; nginx -t 2&gt;&amp;1 &gt; /dev/null; then
        echo "✓ System is healthy"
        exit 0
    else
        echo "✗ System has issues"
        exit 1
    fi
    
} | tee $REPORT_FILE

# Send report
mail -s "Nginx Health Report" admin@example.com &lt; $REPORT_FILE
</code></pre><hr><h2 id="8-documentation-templates"><strong>8. Documentation Templates</strong></h2><h3 id="81-architecture-documentation"><strong>8.1. Architecture Documentation</strong></h3><pre><code class="language-markdown"># Nginx Architecture Documentation

## Overview
Brief description of the architecture and purpose.

## Infrastructure

### Load Balancers
- **Primary LB**: 192.168.1.10 (lb-1.example.com)
- **Backup LB**: 192.168.1.11 (lb-2.example.com)
- **Virtual IP**: 192.168.1.100

### Backend Servers
- **Web-1**: 10.0.1.10 (web-1.internal)
- **Web-2**: 10.0.1.11 (web-2.internal)
- **Web-3**: 10.0.1.12 (web-3.internal)

### Databases
- **Primary DB**: db-master.internal:3306
- **Read Replica 1**: db-slave1.internal:3306
- **Read Replica 2**: db-slave2.internal:3306

## Network Diagram
</code></pre><p>[Internet] ↓ [Firewall] ↓ [LB-1 / LB-2] (VIP: 192.168.1.100) ↓ [Web-1 | Web-2 | Web-3] ↓ [DB Master / Read Replicas]</p><pre><code>
## Configuration Files
- Main config: `/etc/nginx/nginx.conf`
- Site configs: `/etc/nginx/sites-enabled/`
- Upstreams: `/etc/nginx/conf.d/upstreams/`

## SSL Certificates
- Provider: Let's Encrypt
- Renewal: Automated via certbot
- Expiry notifications: security@example.com

## Monitoring
- Tool: Prometheus + Grafana
- Alerts: Slack #ops-alerts
- Dashboards: https://grafana.example.com

## Backup &amp; Recovery
- Configuration backup: Daily at 02:00 UTC
- Backup location: /backup/nginx and backup-server:/backups
- RTO: &lt; 5 minutes
- RPO: &lt; 1 hour

## Contacts
- On-call: oncall@example.com
- DevOps Team: devops@example.com
- Security Team: security@example.com
</code></pre><h3 id="82-runbook-template"><strong>8.2. Runbook Template</strong></h3><pre><code class="language-markdown"># Nginx Operations Runbook

## Common Operations

### Deploy New Configuration
```bash
# 1. Backup current config
./nginx-config-backup.sh

# 2. Update configuration files
rsync -av /path/to/new/config/ /etc/nginx/

# 3. Test configuration
nginx -t

# 4. Reload Nginx
nginx -s reload

# 5. Verify
curl -I http://localhost/health
</code></pre><h3 id="rollback-deployment">Rollback Deployment</h3><pre><code class="language-bash">./nginx-rollback.sh
</code></pre><h3 id="check-service-status">Check Service Status</h3><pre><code class="language-bash">systemctl status nginx
curl http://localhost/health
</code></pre><h3 id="view-logs">View Logs</h3><pre><code class="language-bash"># Access logs
tail -f /var/log/nginx/access.log

# Error logs
tail -f /var/log/nginx/error.log

# Analyze logs
./analyze-requests.sh 1000
</code></pre><h2 id="troubleshooting">Troubleshooting</h2><h3 id="issue-502-bad-gateway">Issue: 502 Bad Gateway</h3><p><strong>Symptoms</strong>: Users receive 502 errors <strong>Diagnosis</strong>:</p><pre><code class="language-bash"># Check backend health
curl http://backend:8080/health

# Check error logs
tail -50 /var/log/nginx/error.log | grep 502
</code></pre><p><strong>Resolution</strong>:</p><ol><li>Verify backend services are running</li><li>Check upstream configuration</li><li>Increase timeouts if needed</li><li>Restart backend services if necessary</li></ol><h3 id="issue-high-cpu-usage">Issue: High CPU Usage</h3><p><strong>Symptoms</strong>: CPU usage &gt; 80% <strong>Diagnosis</strong>:</p><pre><code class="language-bash">top -bn1 | grep nginx
./diagnose-performance.sh
</code></pre><p><strong>Resolution</strong>:</p><ol><li>Check for inefficient regex in configuration</li><li>Reduce worker_connections if too high</li><li>Enable caching to reduce backend load</li><li>Scale horizontally if needed</li></ol><h3 id="issue-ssl-certificate-expired">Issue: SSL Certificate Expired</h3><p><strong>Symptoms</strong>: SSL warnings in browser <strong>Diagnosis</strong>:</p><pre><code class="language-bash">openssl x509 -enddate -noout -in /etc/letsencrypt/live/example.com/fullchain.pem
</code></pre><p><strong>Resolution</strong>:</p><pre><code class="language-bash">certbot renew --force-renewal
systemctl reload nginx
</code></pre><h2 id="emergency-procedures">Emergency Procedures</h2><h3 id="complete-service-outage">Complete Service Outage</h3><ol><li>Check if Nginx is running: <code>systemctl status nginx</code></li><li>Attempt restart: <code>systemctl restart nginx</code></li><li>If fails, check configuration: <code>nginx -t</code></li><li>Restore from backup if config corrupted</li><li>Failover to backup LB if necessary</li><li>Notify stakeholders</li></ol><h3 id="ddos-attack">DDoS Attack</h3><ol><li>Identify attack pattern in logs</li><li>Block offending IPs: <code>./block-ip.sh &lt;IP&gt;</code></li><li>Enable stricter rate limits</li><li>Contact ISP for upstream filtering</li><li>Enable DDoS protection service (Cloudflare)</li></ol><h2 id="maintenance-windows">Maintenance Windows</h2><ul><li>Standard maintenance: Sundays 02:00-04:00 UTC</li><li>Emergency maintenance: As needed with approval</li></ul><h2 id="escalation">Escalation</h2><ol><li>On-call engineer (PagerDuty)</li><li>DevOps Lead</li><li>VP Engineering</li></ol><pre><code>
---

## **Tổng kết Khóa học**

Chúc mừng! Bạn đã hoàn thành toàn bộ 15 bài học comprehensive về Nginx! 🎉

### **Nội dung đã học:**

**Phần Foundation (Bài 1-5):**
- ✅ Giới thiệu và cài đặt Nginx
- ✅ Cấu hình cơ bản
- ✅ Logging và monitoring
- ✅ Reverse proxy
- ✅ Load balancing

**Phần Intermediate (Bài 6-10):**
- ✅ Caching strategies
- ✅ SSL/TLS và HTTPS
- ✅ Performance tuning
- ✅ Security hardening
- ✅ Rewrite và redirects

**Phần Advanced (Bài 11-15):**
- ✅ Application stack integration
- ✅ Monitoring và logging advanced
- ✅ High availability
- ✅ Microservices và service mesh
- ✅ Production best practices

### **Bạn có thể:**

1. **Deploy production-ready Nginx servers**
2. **Implement high-availability architectures**
3. **Optimize performance và security**
4. **Troubleshoot complex issues**
5. **Manage microservices architectures**
6. **Meet compliance requirements**
7. **Monitor và maintain systems effectively**

### **Next Steps:**

1. **Practice**: Deploy Nginx trong lab environment
2. **Experiment**: Test các configurations khác nhau
3. **Read**: Official Nginx documentation
4. **Contribute**: Share knowledge với community
5. **Certify**: Consider Nginx certifications
6. **Advance**: Explore Nginx Plus features

### **Resources:**

- **Official Docs**: https://nginx.org/en/docs/
- **Community**: https://forum.nginx.org/
- **GitHub**: https://github.com/nginx/nginx
- **Blog**: https://www.nginx.com/blog/

Chúc bạn thành công trong việc deploy và manage Nginx! 🚀
</code></pre>
