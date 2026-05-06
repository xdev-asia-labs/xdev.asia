---
id: 019c9617-fc9a-73e8-840b-6265cc856d6b
title: '第12課：NGINX 監控與日誌記錄'
slug: bai-12-monitoring-va-logging-trong-nginx
description: >-
  關於 NGINX 監控與日誌記錄的課程——存取日誌分析、自訂日誌格式、使用 logrotate 進行日誌輪替、即時監控工具、Prometheus + Grafana 整合、ELK Stack（Elasticsearch、Logstash、Kibana）、告警系統、效能指標及疑難排解。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 12
section_title: "第4部分：應用程式堆疊與監控"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx 從入門到進階
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-976" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-976)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1071" cy="203" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="1042" cy="174" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1013" cy="145" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="984" cy="116" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="955" cy="87" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="133" x2="1100" y2="213" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="163" x2="1050" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.2487113059642,219 1057.2487113059642,247 1033,261 1008.7512886940357,247 1008.7512886940357,219 1033,205" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第12課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第12課：NGINX 監控與日誌記錄</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx 從入門到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第4部分：應用程式堆疊與監控</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-access-logs-v%C3%A0-error-logs"><strong>1. Access Logs và Error Logs</strong></h2><h3 id="11-default-log-configuration"><strong>1.1. Default Log Configuration</strong></h3><pre><code class="language-nginx">http {
    # Default log format
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
    
    # Access log
    access_log /var/log/nginx/access.log main;
    
    # Error log with level
    error_log /var/log/nginx/error.log warn;
    
    server {
        listen 80;
        server_name example.com;
        
        # Server-specific logs
        access_log /var/log/nginx/example.com.access.log main;
        error_log /var/log/nginx/example.com.error.log;
        
        location / {
            root /var/www/html;
        }
        
        # Disable logging for specific location
        location /health {
            access_log off;
            return 200 "OK\n";
        }
        
        # Location-specific log
        location /api/ {
            access_log /var/log/nginx/api.access.log main;
            proxy_pass http://backend;
        }
    }
}
</code></pre><h3 id="12-error-log-levels"><strong>1.2. Error Log Levels</strong></h3><pre><code class="language-nginx"># Error log levels (highest to lowest severity)
error_log /var/log/nginx/error.log emerg;   # System is unusable
error_log /var/log/nginx/error.log alert;   # Action must be taken immediately
error_log /var/log/nginx/error.log crit;    # Critical conditions
error_log /var/log/nginx/error.log error;   # Error conditions (default)
error_log /var/log/nginx/error.log warn;    # Warning conditions
error_log /var/log/nginx/error.log notice;  # Normal but significant
error_log /var/log/nginx/error.log info;    # Informational messages
error_log /var/log/nginx/error.log debug;   # Debug messages

# Recommended for production
error_log /var/log/nginx/error.log warn;

# For debugging
error_log /var/log/nginx/error.log debug;
</code></pre><h3 id="13-custom-log-formats"><strong>1.3. Custom Log Formats</strong></h3><p><strong>Detailed log format:</strong></p><pre><code class="language-nginx">http {
    log_format detailed '$remote_addr - $remote_user [$time_local] '
                       '"$request" $status $body_bytes_sent '
                       '"$http_referer" "$http_user_agent" '
                       'rt=$request_time uct="$upstream_connect_time" '
                       'uht="$upstream_header_time" urt="$upstream_response_time"';
    
    access_log /var/log/nginx/access.log detailed;
}
</code></pre><p><strong>JSON log format:</strong></p><pre><code class="language-nginx">http {
    log_format json_combined escape=json
    '{'
        '"time_local":"$time_local",'
        '"remote_addr":"$remote_addr",'
        '"remote_user":"$remote_user",'
        '"request":"$request",'
        '"status": "$status",'
        '"body_bytes_sent":"$body_bytes_sent",'
        '"request_time":"$request_time",'
        '"http_referrer":"$http_referer",'
        '"http_user_agent":"$http_user_agent",'
        '"http_x_forwarded_for":"$http_x_forwarded_for",'
        '"upstream_addr":"$upstream_addr",'
        '"upstream_status":"$upstream_status",'
        '"upstream_response_time":"$upstream_response_time",'
        '"upstream_connect_time":"$upstream_connect_time",'
        '"upstream_header_time":"$upstream_header_time"'
    '}';
    
    access_log /var/log/nginx/access.log json_combined;
}
</code></pre><p><strong>Cache status log:</strong></p><pre><code class="language-nginx">http {
    log_format cache_status '$remote_addr - [$time_local] "$request" '
                           '$status $body_bytes_sent '
                           '"$http_referer" "$http_user_agent" '
                           'cache_status=$upstream_cache_status '
                           'response_time=$request_time';
    
    access_log /var/log/nginx/cache.log cache_status;
}
</code></pre><p><strong>Performance tracking log:</strong></p><pre><code class="language-nginx">http {
    log_format performance '$time_iso8601 $remote_addr '
                          '"$request" $status $body_bytes_sent '
                          'rt=$request_time '
                          'ua="$upstream_addr" '
                          'us=$upstream_status '
                          'ut=$upstream_response_time '
                          'ul="$upstream_response_length" '
                          'cs=$upstream_cache_status';
    
    access_log /var/log/nginx/performance.log performance;
}
</code></pre><p><strong>Security log:</strong></p><pre><code class="language-nginx">http {
    log_format security '$remote_addr [$time_local] '
                       '"$request" $status '
                       'user_agent="$http_user_agent" '
                       'referer="$http_referer" '
                       'forwarded_for="$http_x_forwarded_for" '
                       'host="$host"';
    
    # Log only suspicious requests
    map $status $loggable {
        ~^[23] 0;
        default 1;
    }
    
    access_log /var/log/nginx/security.log security if=$loggable;
}
</code></pre><h3 id="14-conditional-logging"><strong>1.4. Conditional Logging</strong></h3><pre><code class="language-nginx">http {
    # Don't log successful health checks
    map $request_uri $loggable_request {
        ~^/health$ 0;
        ~^/ping$ 0;
        default 1;
    }
    
    # Don't log static files
    map $request_uri $loggable_static {
        ~*\.(jpg|jpeg|png|gif|ico|css|js)$ 0;
        default 1;
    }
    
    # Combine conditions
    map "$loggable_request:$loggable_static" $final_loggable {
        "0:0" 0;
        "0:1" 0;
        "1:0" 0;
        default 1;
    }
    
    server {
        listen 80;
        
        access_log /var/log/nginx/access.log combined if=$final_loggable;
        
        # Or per-location
        location /api/ {
            access_log /var/log/nginx/api.log combined;
            proxy_pass http://backend;
        }
        
        location /static/ {
            access_log off;
            root /var/www;
        }
    }
}
</code></pre><h3 id="15-log-variables"><strong>1.5. Log Variables</strong></h3><p><strong>Available variables:</strong></p><pre><code class="language-nginx"># Client information
$remote_addr          # Client IP address
$remote_user          # Client username (HTTP auth)
$remote_port          # Client port

# Request information
$request              # Full request line
$request_method       # GET, POST, etc.
$request_uri          # Full URI with arguments
$uri                  # URI without arguments
$args                 # Query string
$scheme               # http or https
$server_protocol      # HTTP version (HTTP/1.1, HTTP/2.0)

# Response information
$status               # Response status code
$body_bytes_sent      # Bytes sent to client
$bytes_sent           # Total bytes sent (including headers)

# Timing information
$request_time         # Total request processing time
$upstream_response_time    # Backend response time
$upstream_connect_time     # Time to connect to backend
$upstream_header_time      # Time to receive headers from backend

# Upstream information
$upstream_addr        # Backend server address
$upstream_status      # Backend response status
$upstream_cache_status     # Cache status (HIT, MISS, etc.)

# Headers
$http_referer         # Referer header
$http_user_agent      # User-Agent header
$http_x_forwarded_for # X-Forwarded-For header

# Time
$time_local           # Local time
$time_iso8601         # ISO 8601 format
$msec                 # Unix timestamp with milliseconds
</code></pre><hr><h2 id="2-log-rotation"><strong>2. Log Rotation</strong></h2><h3 id="21-logrotate-configuration"><strong>2.1. Logrotate Configuration</strong></h3><pre><code class="language-bash"># /etc/logrotate.d/nginx
/var/log/nginx/*.log {
    daily                    # Rotate daily
    missingok               # Don't error if log is missing
    rotate 14               # Keep 14 days of logs
    compress                # Compress rotated logs
    delaycompress          # Compress after one rotation
    notifempty             # Don't rotate if empty
    create 0640 nginx adm  # Create new file with permissions
    sharedscripts          # Run postrotate once for all logs
    postrotate
        if [ -f /var/run/nginx.pid ]; then
            kill -USR1 `cat /var/run/nginx.pid`
        fi
    endscript
}
</code></pre><p><strong>Weekly rotation:</strong></p><pre><code class="language-bash"># /etc/logrotate.d/nginx-weekly
/var/log/nginx/access.log
/var/log/nginx/error.log {
    weekly
    rotate 52
    compress
    delaycompress
    notifempty
    create 0640 nginx adm
    sharedscripts
    postrotate
        [ -f /var/run/nginx.pid ] &amp;&amp; kill -USR1 `cat /var/run/nginx.pid`
    endscript
}
</code></pre><p><strong>Size-based rotation:</strong></p><pre><code class="language-bash"># /etc/logrotate.d/nginx-size
/var/log/nginx/*.log {
    size 100M           # Rotate when file reaches 100MB
    rotate 10           # Keep 10 rotated files
    compress
    delaycompress
    notifempty
    create 0640 nginx adm
    sharedscripts
    postrotate
        [ -f /var/run/nginx.pid ] &amp;&amp; kill -USR1 `cat /var/run/nginx.pid`
    endscript
}
</code></pre><p><strong>Test logrotate:</strong></p><pre><code class="language-bash"># Test configuration
sudo logrotate -d /etc/logrotate.d/nginx

# Force rotation
sudo logrotate -f /etc/logrotate.d/nginx

# Check status
cat /var/lib/logrotate/status
</code></pre><h3 id="22-manual-log-rotation-script"><strong>2.2. Manual Log Rotation Script</strong></h3><pre><code class="language-bash">#!/bin/bash
# rotate_nginx_logs.sh

LOG_DIR="/var/log/nginx"
BACKUP_DIR="/var/log/nginx/archive"
DAYS_TO_KEEP=30

# Create backup directory
mkdir -p $BACKUP_DIR

# Get current date
DATE=$(date +%Y%m%d-%H%M%S)

# Rotate logs
for log in access.log error.log; do
    if [ -f "$LOG_DIR/$log" ]; then
        # Move log file
        mv "$LOG_DIR/$log" "$BACKUP_DIR/${log%.*}-$DATE.log"
        
        # Compress
        gzip "$BACKUP_DIR/${log%.*}-$DATE.log"
        
        # Create new empty log
        touch "$LOG_DIR/$log"
        chmod 640 "$LOG_DIR/$log"
        chown nginx:adm "$LOG_DIR/$log"
    fi
done

# Reload Nginx
nginx -s reopen

# Delete old logs
find $BACKUP_DIR -name "*.gz" -mtime +$DAYS_TO_KEEP -delete

echo "Log rotation complete: $DATE"
</code></pre><p><strong>Cron job:</strong></p><pre><code class="language-bash"># /etc/cron.d/nginx-logrotate
0 0 * * * root /usr/local/bin/rotate_nginx_logs.sh &gt;&gt; /var/log/nginx-rotation.log 2&gt;&amp;1
</code></pre><hr><h2 id="3-log-analysis-tools"><strong>3. Log Analysis Tools</strong></h2><h3 id="31-goaccess-real-time-web-log-analyzer"><strong>3.1. GoAccess (Real-time Web Log Analyzer)</strong></h3><p><strong>Install GoAccess:</strong></p><pre><code class="language-bash"># Ubuntu/Debian
sudo apt install goaccess

# CentOS/RHEL
sudo yum install goaccess

# macOS
brew install goaccess
</code></pre><p><strong>Analyze logs:</strong></p><pre><code class="language-bash"># Real-time terminal dashboard
sudo goaccess /var/log/nginx/access.log -c

# Generate HTML report
sudo goaccess /var/log/nginx/access.log -o /var/www/html/report.html --log-format=COMBINED

# Real-time HTML dashboard
sudo goaccess /var/log/nginx/access.log -o /var/www/html/report.html --log-format=COMBINED --real-time-html

# With custom log format
sudo goaccess /var/log/nginx/access.log --log-format='%h %^[%d:%t %^] "%r" %s %b "%R" "%u"' --date-format=%d/%b/%Y --time-format=%H:%M:%S
</code></pre><p><strong>GoAccess configuration:</strong></p><pre><code class="language-bash"># /etc/goaccess/goaccess.conf

# Log format
log-format %h %^[%d:%t %^] "%r" %s %b "%R" "%u"
date-format %d/%b/%Y
time-format %H:%M:%S

# UI options
color-scheme 1
hl-header true

# Output options
html-prefs {"theme":"bright","perPage":10}
html-report-title "Nginx Statistics"

# Enable/disable panels
enable-panel VISITORS
enable-panel REQUESTS
enable-panel REQUESTS_STATIC
enable-panel NOT_FOUND
enable-panel HOSTS
enable-panel OS
enable-panel BROWSERS
enable-panel STATUS_CODES
enable-panel REFERRING_SITES
enable-panel KEYPHRASES
enable-panel GEO_LOCATION
</code></pre><h3 id="32-awk-scripts-for-log-analysis"><strong>3.2. AWK Scripts for Log Analysis</strong></h3><p><strong>Requests per second:</strong></p><pre><code class="language-bash">#!/bin/bash
# requests_per_second.sh

awk '{print $4}' /var/log/nginx/access.log | \
    cut -d: -f1-3 | \
    uniq -c | \
    awk '{print $2, $1}' | \
    sort
</code></pre><p><strong>Top 10 IP addresses:</strong></p><pre><code class="language-bash">#!/bin/bash
# top_ips.sh

awk '{print $1}' /var/log/nginx/access.log | \
    sort | \
    uniq -c | \
    sort -rn | \
    head -10
</code></pre><p><strong>Top 10 URLs:</strong></p><pre><code class="language-bash">#!/bin/bash
# top_urls.sh

awk '{print $7}' /var/log/nginx/access.log | \
    sort | \
    uniq -c | \
    sort -rn | \
    head -10
</code></pre><p><strong>Status code distribution:</strong></p><pre><code class="language-bash">#!/bin/bash
# status_codes.sh

awk '{print $9}' /var/log/nginx/access.log | \
    sort | \
    uniq -c | \
    sort -rn
</code></pre><p><strong>Average response time:</strong></p><pre><code class="language-bash">#!/bin/bash
# avg_response_time.sh

# Assuming response time is logged
awk '{sum+=$NF; count++} END {print "Average:", sum/count "s"}' /var/log/nginx/access.log
</code></pre><p><strong>Requests by hour:</strong></p><pre><code class="language-bash">#!/bin/bash
# requests_by_hour.sh

awk '{print $4}' /var/log/nginx/access.log | \
    cut -d: -f2 | \
    sort -n | \
    uniq -c
</code></pre><p><strong>404 errors:</strong></p><pre><code class="language-bash">#!/bin/bash
# 404_errors.sh

awk '$9 == "404" {print $7}' /var/log/nginx/access.log | \
    sort | \
    uniq -c | \
    sort -rn | \
    head -20
</code></pre><p><strong>Bandwidth by IP:</strong></p><pre><code class="language-bash">#!/bin/bash
# bandwidth_by_ip.sh

awk '{ip[$1]+=$10} END {for (i in ip) print i, ip[i]/1024/1024 "MB"}' /var/log/nginx/access.log | \
    sort -k2 -rn | \
    head -10
</code></pre><h3 id="33-complete-log-analysis-script"><strong>3.3. Complete Log Analysis Script</strong></h3><pre><code class="language-bash">#!/bin/bash
# analyze_nginx_logs.sh

LOG_FILE="/var/log/nginx/access.log"
OUTPUT_DIR="/var/www/reports"
DATE=$(date +%Y-%m-%d)

mkdir -p $OUTPUT_DIR

echo "Nginx Log Analysis - $DATE" &gt; $OUTPUT_DIR/report-$DATE.txt
echo "=====================================" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt
echo "" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt

# Total requests
echo "Total Requests:" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt
wc -l &lt; $LOG_FILE &gt;&gt; $OUTPUT_DIR/report-$DATE.txt
echo "" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt

# Top 10 IPs
echo "Top 10 IP Addresses:" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt
awk '{print $1}' $LOG_FILE | sort | uniq -c | sort -rn | head -10 &gt;&gt; $OUTPUT_DIR/report-$DATE.txt
echo "" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt

# Top 10 URLs
echo "Top 10 URLs:" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt
awk '{print $7}' $LOG_FILE | sort | uniq -c | sort -rn | head -10 &gt;&gt; $OUTPUT_DIR/report-$DATE.txt
echo "" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt

# Status codes
echo "Status Code Distribution:" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt
awk '{print $9}' $LOG_FILE | sort | uniq -c | sort -rn &gt;&gt; $OUTPUT_DIR/report-$DATE.txt
echo "" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt

# Top user agents
echo "Top 10 User Agents:" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt
awk -F'"' '{print $6}' $LOG_FILE | sort | uniq -c | sort -rn | head -10 &gt;&gt; $OUTPUT_DIR/report-$DATE.txt
echo "" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt

# Requests by hour
echo "Requests by Hour:" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt
awk '{print $4}' $LOG_FILE | cut -d: -f2 | sort -n | uniq -c &gt;&gt; $OUTPUT_DIR/report-$DATE.txt
echo "" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt

# Top 404 errors
echo "Top 404 Errors:" &gt;&gt; $OUTPUT_DIR/report-$DATE.txt
awk '$9 == "404" {print $7}' $LOG_FILE | sort | uniq -c | sort -rn | head -10 &gt;&gt; $OUTPUT_DIR/report-$DATE.txt

echo "Report generated: $OUTPUT_DIR/report-$DATE.txt"
</code></pre><hr><h2 id="4-prometheus-grafana-integration"><strong>4. Prometheus + Grafana Integration</strong></h2><h3 id="41-nginx-prometheus-exporter"><strong>4.1. Nginx Prometheus Exporter</strong></h3><p><strong>Install nginx-prometheus-exporter:</strong></p><pre><code class="language-bash"># Download latest release
wget https://github.com/nginxinc/nginx-prometheus-exporter/releases/download/v0.11.0/nginx-prometheus-exporter_0.11.0_linux_amd64.tar.gz

# Extract
tar -xzf nginx-prometheus-exporter_0.11.0_linux_amd64.tar.gz

# Move to bin
sudo mv nginx-prometheus-exporter /usr/local/bin/

# Create systemd service
sudo nano /etc/systemd/system/nginx-exporter.service
</code></pre><p><strong>Systemd service:</strong></p><pre><code class="language-ini">[Unit]
Description=Nginx Prometheus Exporter
After=network.target

[Service]
Type=simple
User=nginx-exporter
Group=nginx-exporter
ExecStart=/usr/local/bin/nginx-prometheus-exporter \
    -nginx.scrape-uri=http://localhost:8080/stub_status \
    -web.listen-address=:9113

Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
</code></pre><p><strong>Enable stub_status in Nginx:</strong></p><pre><code class="language-nginx">server {
    listen 8080;
    server_name localhost;
    
    location /stub_status {
        stub_status;
        access_log off;
        allow 127.0.0.1;
        deny all;
    }
}
</code></pre><p><strong>Start exporter:</strong></p><pre><code class="language-bash">sudo systemctl daemon-reload
sudo systemctl start nginx-exporter
sudo systemctl enable nginx-exporter

# Check status
sudo systemctl status nginx-exporter

# Test metrics endpoint
curl http://localhost:9113/metrics
</code></pre><h3 id="42-prometheus-configuration"><strong>4.2. Prometheus Configuration</strong></h3><pre><code class="language-yaml"># /etc/prometheus/prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'nginx'
    static_configs:
      - targets: ['localhost:9113']
        labels:
          instance: 'nginx-server-1'
          environment: 'production'
  
  - job_name: 'node'
    static_configs:
      - targets: ['localhost:9100']
        labels:
          instance: 'nginx-server-1'
</code></pre><h3 id="43-vts-module-advanced-metrics"><strong>4.3. VTS Module (Advanced Metrics)</strong></h3><p><strong>Install Nginx with VTS module:</strong></p><pre><code class="language-bash"># Clone VTS module
git clone https://github.com/vozlt/nginx-module-vts.git

# Download Nginx source
wget http://nginx.org/download/nginx-1.24.0.tar.gz
tar -xzf nginx-1.24.0.tar.gz
cd nginx-1.24.0

# Configure with VTS module
./configure --add-module=../nginx-module-vts \
    --prefix=/etc/nginx \
    --sbin-path=/usr/sbin/nginx \
    --conf-path=/etc/nginx/nginx.conf

# Compile and install
make
sudo make install
</code></pre><p><strong>Configure VTS:</strong></p><pre><code class="language-nginx">http {
    vhost_traffic_status_zone;
    
    server {
        listen 80;
        
        location /status {
            vhost_traffic_status_display;
            vhost_traffic_status_display_format html;
            access_log off;
            allow 127.0.0.1;
            deny all;
        }
    }
}
</code></pre><h3 id="44-grafana-dashboard"><strong>4.4. Grafana Dashboard</strong></h3><p><strong>Install Grafana:</strong></p><pre><code class="language-bash"># Ubuntu/Debian
sudo apt install -y software-properties-common
sudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -
sudo apt update
sudo apt install grafana

# Start Grafana
sudo systemctl start grafana-server
sudo systemctl enable grafana-server
</code></pre><p><strong>Access Grafana:</strong></p><ul><li>URL: http://localhost:3000</li><li>Default login: admin/admin</li></ul><p><strong>Import Nginx dashboard:</strong></p><ol><li>Go to Dashboards → Import</li><li>Enter dashboard ID: 12708 (Nginx Prometheus Exporter)</li><li>Select Prometheus datasource</li><li>Import</li></ol><p><strong>Custom Grafana dashboard queries:</strong></p><pre><code class="language-promql"># Request rate
rate(nginx_http_requests_total[5m])

# Error rate
rate(nginx_http_requests_total{status=~"5.."}[5m])

# Average response time
rate(nginx_http_request_duration_seconds_sum[5m]) / 
rate(nginx_http_request_duration_seconds_count[5m])

# Active connections
nginx_connections_active

# Request rate by status code
sum(rate(nginx_http_requests_total[5m])) by (status)

# Bandwidth
rate(nginx_http_request_bytes_total[5m])
</code></pre><hr><h2 id="5-elk-stack-integration"><strong>5. ELK Stack Integration</strong></h2><h3 id="51-elasticsearch-installation"><strong>5.1. Elasticsearch Installation</strong></h3><pre><code class="language-bash"># Import Elasticsearch GPG key
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -

# Add repository
echo "deb https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-8.x.list

# Install Elasticsearch
sudo apt update
sudo apt install elasticsearch

# Configure
sudo nano /etc/elasticsearch/elasticsearch.yml
</code></pre><p><strong>Elasticsearch configuration:</strong></p><pre><code class="language-yaml"># /etc/elasticsearch/elasticsearch.yml
cluster.name: nginx-logs
node.name: node-1
path.data: /var/lib/elasticsearch
path.logs: /var/log/elasticsearch
network.host: localhost
http.port: 9200
discovery.type: single-node

# Security
xpack.security.enabled: false
</code></pre><p><strong>Start Elasticsearch:</strong></p><pre><code class="language-bash">sudo systemctl start elasticsearch
sudo systemctl enable elasticsearch

# Test
curl http://localhost:9200
</code></pre><h3 id="52-logstash-configuration"><strong>5.2. Logstash Configuration</strong></h3><p><strong>Install Logstash:</strong></p><pre><code class="language-bash">sudo apt install logstash
</code></pre><p><strong>Logstash pipeline:</strong></p><pre><code class="language-ruby"># /etc/logstash/conf.d/nginx.conf
input {
  file {
    path =&gt; "/var/log/nginx/access.log"
    start_position =&gt; "beginning"
    type =&gt; "nginx-access"
  }
  
  file {
    path =&gt; "/var/log/nginx/error.log"
    start_position =&gt; "beginning"
    type =&gt; "nginx-error"
  }
}

filter {
  if [type] == "nginx-access" {
    grok {
      match =&gt; {
        "message" =&gt; '%{IPORHOST:remote_addr} - %{DATA:remote_user} \[%{HTTPDATE:time_local}\] "%{WORD:request_method} %{DATA:request_path} HTTP/%{NUMBER:http_version}" %{NUMBER:status} %{NUMBER:body_bytes_sent} "%{DATA:http_referer}" "%{DATA:http_user_agent}"'
      }
    }
    
    date {
      match =&gt; [ "time_local", "dd/MMM/yyyy:HH:mm:ss Z" ]
      target =&gt; "@timestamp"
    }
    
    geoip {
      source =&gt; "remote_addr"
    }
    
    mutate {
      convert =&gt; {
        "status" =&gt; "integer"
        "body_bytes_sent" =&gt; "integer"
      }
    }
  }
  
  if [type] == "nginx-error" {
    grok {
      match =&gt; {
        "message" =&gt; "(?&lt;timestamp&gt;%{YEAR}[./-]%{MONTHNUM}[./-]%{MONTHDAY}[- ]%{TIME}) \[%{LOGLEVEL:severity}\] %{POSINT:pid}#%{NUMBER:threadid}\: \*%{NUMBER:connectionid} %{GREEDYDATA:errormessage}"
      }
    }
  }
}

output {
  elasticsearch {
    hosts =&gt; ["localhost:9200"]
    index =&gt; "nginx-logs-%{+YYYY.MM.dd}"
  }
  
  # Debug output
  # stdout { codec =&gt; rubydebug }
}
</code></pre><p><strong>Start Logstash:</strong></p><pre><code class="language-bash">sudo systemctl start logstash
sudo systemctl enable logstash

# Test configuration
sudo -u logstash /usr/share/logstash/bin/logstash --path.settings /etc/logstash -t
</code></pre><h3 id="53-kibana-installation"><strong>5.3. Kibana Installation</strong></h3><pre><code class="language-bash"># Install Kibana
sudo apt install kibana

# Configure
sudo nano /etc/kibana/kibana.yml
</code></pre><p><strong>Kibana configuration:</strong></p><pre><code class="language-yaml"># /etc/kibana/kibana.yml
server.port: 5601
server.host: "localhost"
elasticsearch.hosts: ["http://localhost:9200"]
</code></pre><p><strong>Start Kibana:</strong></p><pre><code class="language-bash">sudo systemctl start kibana
sudo systemctl enable kibana

# Access at: http://localhost:5601
</code></pre><p><strong>Configure Nginx reverse proxy for Kibana:</strong></p><pre><code class="language-nginx">server {
    listen 80;
    server_name kibana.example.com;
    
    location / {
        proxy_pass http://localhost:5601;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
</code></pre><h3 id="54-kibana-visualizations"><strong>5.4. Kibana Visualizations</strong></h3><p><strong>Create index pattern:</strong></p><ol><li>Management → Index Patterns</li><li>Create index pattern: <code>nginx-logs-*</code></li><li>Select time field: <code>@timestamp</code></li></ol><p><strong>Sample visualizations:</strong></p><ol><li><strong>Request Rate Over Time</strong><ul><li>Type: Line chart</li><li>Y-axis: Count</li><li>X-axis: Date Histogram (@timestamp)</li></ul></li><li><strong>Status Code Distribution</strong><ul><li>Type: Pie chart</li><li>Slice by: status.keyword</li></ul></li><li><strong>Top 10 URLs</strong><ul><li>Type: Data table</li><li>Metrics: Count</li><li>Buckets: request_path.keyword</li></ul></li><li><strong>Geographic Distribution</strong><ul><li>Type: Coordinate map</li><li>Geohash: geoip.location</li></ul></li><li><strong>Error Rate</strong><ul><li>Type: Metric</li><li>Aggregation: Count</li><li>Filter: status &gt;= 400</li></ul></li></ol><h3 id="55-filebeat-alternative"><strong>5.5. Filebeat Alternative</strong></h3><pre><code class="language-bash"># Install Filebeat
sudo apt install filebeat

# Configure
sudo nano /etc/filebeat/filebeat.yml
</code></pre><p><strong>Filebeat configuration:</strong></p><pre><code class="language-yaml"># /etc/filebeat/filebeat.yml
filebeat.inputs:
- type: log
  enabled: true
  paths:
    - /var/log/nginx/access.log
  fields:
    log_type: nginx-access
  
- type: log
  enabled: true
  paths:
    - /var/log/nginx/error.log
  fields:
    log_type: nginx-error

filebeat.config.modules:
  path: ${path.config}/modules.d/*.yml
  reload.enabled: false

setup.template.settings:
  index.number_of_shards: 1

output.elasticsearch:
  hosts: ["localhost:9200"]
  index: "filebeat-nginx-%{+yyyy.MM.dd}"

setup.kibana:
  host: "localhost:5601"

processors:
  - add_host_metadata: ~
  - add_cloud_metadata: ~
</code></pre><p><strong>Enable Nginx module:</strong></p><pre><code class="language-bash">sudo filebeat modules enable nginx

# Configure module
sudo nano /etc/filebeat/modules.d/nginx.yml
</code></pre><pre><code class="language-yaml"># /etc/filebeat/modules.d/nginx.yml
- module: nginx
  access:
    enabled: true
    var.paths: ["/var/log/nginx/access.log"]
  
  error:
    enabled: true
    var.paths: ["/var/log/nginx/error.log"]
</code></pre><p><strong>Start Filebeat:</strong></p><pre><code class="language-bash"># Setup
sudo filebeat setup -e

# Start
sudo systemctl start filebeat
sudo systemctl enable filebeat
</code></pre><hr><h2 id="6-alerting-systems"><strong>6. Alerting Systems</strong></h2><h3 id="61-prometheus-alertmanager"><strong>6.1. Prometheus Alertmanager</strong></h3><p><strong>Install Alertmanager:</strong></p><pre><code class="language-bash">wget https://github.com/prometheus/alertmanager/releases/download/v0.26.0/alertmanager-0.26.0.linux-amd64.tar.gz
tar -xzf alertmanager-0.26.0.linux-amd64.tar.gz
sudo mv alertmanager-0.26.0.linux-amd64/alertmanager /usr/local/bin/
sudo mv alertmanager-0.26.0.linux-amd64/amtool /usr/local/bin/
</code></pre><p><strong>Alertmanager configuration:</strong></p><pre><code class="language-yaml"># /etc/alertmanager/alertmanager.yml
global:
  resolve_timeout: 5m
  smtp_smarthost: 'smtp.gmail.com:587'
  smtp_from: 'alerts@example.com'
  smtp_auth_username: 'alerts@example.com'
  smtp_auth_password: 'your-password'

route:
  group_by: ['alertname', 'cluster']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 12h
  receiver: 'email-notifications'

receivers:
  - name: 'email-notifications'
    email_configs:
      - to: 'admin@example.com'
        headers:
          Subject: 'Nginx Alert: {{ .GroupLabels.alertname }}'
  
  - name: 'slack-notifications'
    slack_configs:
      - api_url: 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL'
        channel: '#alerts'
        title: 'Nginx Alert'
        text: '{{ range .Alerts }}{{ .Annotations.description }}{{ end }}'

inhibit_rules:
  - source_match:
      severity: 'critical'
    target_match:
      severity: 'warning'
    equal: ['alertname', 'instance']
</code></pre><p><strong>Prometheus alert rules:</strong></p><pre><code class="language-yaml"># /etc/prometheus/rules/nginx_alerts.yml
groups:
  - name: nginx
    interval: 30s
    rules:
      # High error rate
      - alert: NginxHighErrorRate
        expr: rate(nginx_http_requests_total{status=~"5.."}[5m]) &gt; 10
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "High error rate on {{ $labels.instance }}"
          description: "Error rate is {{ $value }} errors/sec"
      
      # High response time
      - alert: NginxHighResponseTime
        expr: nginx_http_request_duration_seconds{quantile="0.99"} &gt; 5
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High response time on {{ $labels.instance }}"
          description: "99th percentile response time is {{ $value }}s"
      
      # Nginx down
      - alert: NginxDown
        expr: up{job="nginx"} == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Nginx is down on {{ $labels.instance }}"
          description: "Nginx exporter is not responding"
      
      # High connection count
      - alert: NginxHighConnections
        expr: nginx_connections_active &gt; 1000
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High connection count on {{ $labels.instance }}"
          description: "Active connections: {{ $value }}"
      
      # Low request rate (possible issue)
      - alert: NginxLowRequestRate
        expr: rate(nginx_http_requests_total[5m]) &lt; 1
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "Low request rate on {{ $labels.instance }}"
          description: "Request rate is {{ $value }} req/sec"
</code></pre><h3 id="62-email-alerts-script"><strong>6.2. Email Alerts Script</strong></h3><pre><code class="language-bash">#!/bin/bash
# nginx_alert.sh

THRESHOLD_ERROR_RATE=100
THRESHOLD_RESPONSE_TIME=5
EMAIL="admin@example.com"
LOG_FILE="/var/log/nginx/access.log"

# Check error rate
ERROR_COUNT=$(grep -c " 5[0-9][0-9] " $LOG_FILE)

if [ $ERROR_COUNT -gt $THRESHOLD_ERROR_RATE ]; then
    echo "ALERT: High error rate detected: $ERROR_COUNT errors" | \
        mail -s "Nginx Alert: High Error Rate" $EMAIL
fi

# Check response time (if logged)
AVG_RESPONSE_TIME=$(awk '{sum+=$NF; count++} END {print sum/count}' $LOG_FILE)

if (( $(echo "$AVG_RESPONSE_TIME &gt; $THRESHOLD_RESPONSE_TIME" | bc -l) )); then
    echo "ALERT: High response time: ${AVG_RESPONSE_TIME}s" | \
        mail -s "Nginx Alert: High Response Time" $EMAIL
fi
</code></pre><h3 id="63-slack-webhook-integration"><strong>6.3. Slack Webhook Integration</strong></h3><pre><code class="language-bash">#!/bin/bash
# slack_alert.sh

WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"
LOG_FILE="/var/log/nginx/error.log"

# Check for errors
ERROR_COUNT=$(wc -l &lt; $LOG_FILE)

if [ $ERROR_COUNT -gt 100 ]; then
    MESSAGE="⚠️ Nginx Alert: $ERROR_COUNT errors detected!"
    
    curl -X POST $WEBHOOK_URL \
        -H 'Content-Type: application/json' \
        -d "{\"text\":\"$MESSAGE\"}"
fi
</code></pre><h3 id="64-automated-response-script"><strong>6.4. Automated Response Script</strong></h3><pre><code class="language-bash">#!/bin/bash
# auto_response.sh

LOG_FILE="/var/log/nginx/error.log"
THRESHOLD=100

# Count recent errors (last 5 minutes)
ERROR_COUNT=$(find /var/log/nginx -name "error.log" -mmin -5 -exec wc -l {} \; | awk '{sum+=$1} END {print sum}')

if [ $ERROR_COUNT -gt $THRESHOLD ]; then
    echo "High error rate detected: $ERROR_COUNT errors"
    
    # Reload Nginx
    echo "Reloading Nginx..."
    systemctl reload nginx
    
    # Send alert
    echo "High error rate triggered Nginx reload: $ERROR_COUNT errors" | \
        mail -s "Nginx Auto-Response" admin@example.com
    
    # Log action
    echo "$(date): Auto-reload triggered due to $ERROR_COUNT errors" &gt;&gt; /var/log/nginx-auto-response.log
fi
</code></pre><hr><h2 id="7-real-time-monitoring-dashboard"><strong>7. Real-time Monitoring Dashboard</strong></h2><h3 id="71-custom-html-dashboard"><strong>7.1. Custom HTML Dashboard</strong></h3><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Nginx Real-time Monitor&lt;/title&gt;
    &lt;meta http-equiv="refresh" content="5"&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .metric {
            background: white;
            padding: 20px;
            margin: 10px 0;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .metric h2 {
            margin: 0 0 10px 0;
            color: #333;
        }
        .value {
            font-size: 32px;
            font-weight: bold;
            color: #007bff;
        }
        .alert {
            background: #ff4444;
            color: white;
        }
        .warning {
            background: #ffaa00;
            color: white;
        }
        .ok {
            background: #00c851;
            color: white;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="container"&gt;
        &lt;h1&gt;Nginx Real-time Monitor&lt;/h1&gt;
        
        &lt;?php
        // Read Nginx stats
        $stats = file_get_contents('http://localhost:8080/stub_status');
        
        preg_match('/Active connections: (\d+)/', $stats, $active);
        preg_match('/(\d+)\s+(\d+)\s+(\d+)/', $stats, $totals);
        preg_match('/Reading: (\d+) Writing: (\d+) Waiting: (\d+)/', $stats, $current);
        
        $activeConnections = $active[1];
        $accepts = $totals[1];
        $handled = $totals[2];
        $requests = $totals[3];
        $reading = $current[1];
        $writing = $current[2];
        $waiting = $current[3];
        
        // Determine status
        $status = 'ok';
        if ($activeConnections &gt; 1000) $status = 'alert';
        elseif ($activeConnections &gt; 500) $status = 'warning';
        ?&gt;
        
        &lt;div class="metric &lt;?php echo $status; ?&gt;"&gt;
            &lt;h2&gt;Active Connections&lt;/h2&gt;
            &lt;div class="value"&gt;&lt;?php echo $activeConnections; ?&gt;&lt;/div&gt;
        &lt;/div&gt;
        
        &lt;div class="metric"&gt;
            &lt;h2&gt;Total Requests&lt;/h2&gt;
            &lt;div class="value"&gt;&lt;?php echo number_format($requests); ?&gt;&lt;/div&gt;
        &lt;/div&gt;
        
        &lt;div class="metric"&gt;
            &lt;h2&gt;Connection Details&lt;/h2&gt;
            &lt;p&gt;Reading: &lt;?php echo $reading; ?&gt;&lt;/p&gt;
            &lt;p&gt;Writing: &lt;?php echo $writing; ?&gt;&lt;/p&gt;
            &lt;p&gt;Waiting: &lt;?php echo $waiting; ?&gt;&lt;/p&gt;
        &lt;/div&gt;
        
        &lt;div class="metric"&gt;
            &lt;h2&gt;Server Stats&lt;/h2&gt;
            &lt;p&gt;Accepts: &lt;?php echo number_format($accepts); ?&gt;&lt;/p&gt;
            &lt;p&gt;Handled: &lt;?php echo number_format($handled); ?&gt;&lt;/p&gt;
            &lt;p&gt;Requests per connection: &lt;?php echo round($requests/$handled, 2); ?&gt;&lt;/p&gt;
        &lt;/div&gt;
        
        &lt;p&gt;&lt;small&gt;Last updated: &lt;?php echo date('Y-m-d H:i:s'); ?&gt;&lt;/small&gt;&lt;/p&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><h3 id="72-python-real-time-monitor"><strong>7.2. Python Real-time Monitor</strong></h3><pre><code class="language-python">#!/usr/bin/env python3
# nginx_monitor.py

import requests
import time
import re
from datetime import datetime

def get_nginx_stats():
    """Fetch Nginx stub_status"""
    try:
        response = requests.get('http://localhost:8080/stub_status')
        return response.text
    except Exception as e:
        print(f"Error fetching stats: {e}")
        return None

def parse_stats(stats):
    """Parse stub_status output"""
    if not stats:
        return None
    
    active = re.search(r'Active connections: (\d+)', stats)
    totals = re.search(r'(\d+)\s+(\d+)\s+(\d+)', stats)
    current = re.search(r'Reading: (\d+) Writing: (\d+) Waiting: (\d+)', stats)
    
    return {
        'active_connections': int(active.group(1)),
        'accepts': int(totals.group(1)),
        'handled': int(totals.group(2)),
        'requests': int(totals.group(3)),
        'reading': int(current.group(1)),
        'writing': int(current.group(2)),
        'waiting': int(current.group(3)),
        'timestamp': datetime.now()
    }

def display_stats(stats):
    """Display stats in terminal"""
    print("\033[2J\033[H")  # Clear screen
    print("=" * 50)
    print("Nginx Real-time Monitor")
    print("=" * 50)
    print(f"Time: {stats['timestamp'].strftime('%Y-%m-%d %H:%M:%S')}")
    print()
    print(f"Active Connections: {stats['active_connections']}")
    print(f"Total Requests: {stats['requests']:,}")
    print()
    print(f"Reading: {stats['reading']}")
    print(f"Writing: {stats['writing']}")
    print(f"Waiting: {stats['waiting']}")
    print()
    print(f"Accepts: {stats['accepts']:,}")
    print(f"Handled: {stats['handled']:,}")
    print(f"Requests/Connection: {stats['requests']/stats['handled']:.2f}")
    print()
    
    # Alerts
    if stats['active_connections'] &gt; 1000:
        print("⚠️  ALERT: High connection count!")
    elif stats['active_connections'] &gt; 500:
        print("⚠️  WARNING: Elevated connection count")
    else:
        print("✓ Status: OK")

def main():
    print("Starting Nginx monitor...")
    print("Press Ctrl+C to exit")
    time.sleep(2)
    
    try:
        while True:
            stats_text = get_nginx_stats()
            stats = parse_stats(stats_text)
            
            if stats:
                display_stats(stats)
            
            time.sleep(5)
    except KeyboardInterrupt:
        print("\nMonitor stopped")

if __name__ == '__main__':
    main()
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>總結</strong></h2><p>本課所學內容：</p><ul><li>✅ Access logs và error logs configuration</li><li>✅ Custom log formats (JSON, detailed, performance)</li><li>✅ Log rotation với logrotate</li><li>✅ Log analysis tools (GoAccess, AWK scripts)</li><li>✅ Prometheus + Grafana monitoring</li><li>✅ ELK Stack integration (Elasticsearch, Logstash, Kibana)</li><li>✅ Alerting systems (Alertmanager, email, Slack)</li><li>✅ Real-time dashboards</li><li>✅ Performance metrics và troubleshooting</li></ul><p><strong>重要要點：</strong></p><ul><li>Use structured logging (JSON) for better analysis</li><li>Implement log rotation to manage disk space</li><li>Set up real-time monitoring for quick issue detection</li><li>Create dashboards for visualization</li><li>Configure alerts for critical issues</li><li>Automate log analysis with scripts</li><li>Integrate with centralized logging systems</li></ul><p><strong>Monitoring checklist:</strong></p><ul><li>✅ Access and error logs configured</li><li>✅ Log rotation enabled</li><li>✅ Prometheus exporter running</li><li>✅ Grafana dashboards created</li><li>✅ Alerting rules configured</li><li>✅ ELK stack (optional) integrated</li><li>✅ Regular log analysis scheduled</li><li>✅ Backup and retention policies defined</li></ul><p><strong>下一課：</strong> 高可用性與進階負載平衡 - Nginx Plus features, health checks, session persistence, active-active setups, failover strategies, và disaster recovery để đảm bảo uptime tối đa trong production environments.</p>
