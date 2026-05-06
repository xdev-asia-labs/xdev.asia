---
id: 019c9617-fc7a-7342-b6bc-7d30a93ee48e
title: 'Lesson 3: Nginx Logging and Monitoring'
slug: bai-3-logging-va-monitoring-nginx
description: >-
  A lesson on Nginx logging and monitoring with access log, error log, custom
  log formats, and log rotation. Guide to analyzing logs, troubleshooting, using
  logrotate, and basic metrics to track server performance. Includes practical
  examples and best practices.
duration_minutes: 160
is_free: true
video_url: null
sort_order: 3
section_title: "Part 1: Basics"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx from Basics to Advanced
  slug: nginx-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8834" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8834)"/>

  <!-- Decorations -->
  <g>
    <circle cx="692" cy="126" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="784" cy="158" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="876" cy="190" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="968" cy="222" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="254" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="166" x2="1100" y2="246" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="196" x2="1050" y2="266" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1051.507041555162,195.5 1051.507041555162,236.5 1016,257 980.492958444838,236.5 980.492958444838,195.5 1016,175" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="148" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Lesson 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 3: Nginx Logging and Monitoring</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Nginx from Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 1: Basics</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-access-log-v%C3%A0-error-log"><strong>1. Access Log and Error Log</strong></h2><p>Nginx has two main log types to monitor server activity: Access log (records all requests) and Error log (records errors and warnings).</p><h3 id="11-access-log"><strong>1.1. Access Log</strong></h3><p>Access log records every request to the server, including information about the client, request, response status, and processing time.</p><p><strong>Default location:</strong></p><pre><code class="language-bash"># Ubuntu/Debian
/var/log/nginx/access.log

# CentOS/RHEL
/var/log/nginx/access.log

# macOS (Homebrew)
/usr/local/var/log/nginx/access.log
</code></pre><p><strong>Basic configuration:</strong></p><pre><code class="language-nginx">http {
    # Access log for the entire HTTP context
    access_log /var/log/nginx/access.log;
    
    server {
        listen 80;
        server_name example.com;
        
        # Separate access log for virtual host
        access_log /var/log/nginx/example.com.access.log;
        
        location / {
            root /var/www/html;
        }
        
        # Disable access log for a specific location
        location /health-check {
            access_log off;
            return 200 "OK\n";
        }
    }
}
</code></pre><p><strong>Default format (combined):</strong></p><pre><code>192.168.1.100 - - [03/Dec/2024:10:30:45 +0700] "GET /index.html HTTP/1.1" 200 1234 "https://google.com" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
</code></pre><p><strong>Field explanations:</strong></p><ul><li><code>192.168.1.100</code> - Client IP address</li><li><code>-</code> - Remote user (usually <code>-</code> if no authentication)</li><li><code>-</code> - Authenticated user</li><li><code>[03/Dec/2024:10:30:45 +0700]</code> - Timestamp</li><li><code>"GET /index.html HTTP/1.1"</code> - Request method, URI, and HTTP version</li><li><code>200</code> - HTTP status code</li><li><code>1234</code> - Response body size (bytes)</li><li><code>"https://google.com"</code> - Referer</li><li><code>"Mozilla/5.0..."</code> - User Agent</li></ul><h3 id="12-error-log"><strong>1.2. Error Log</strong></h3><p>Error log records errors, warnings, and debug information from Nginx.</p><p><strong>Default location:</strong></p><pre><code class="language-bash">/var/log/nginx/error.log
</code></pre><p><strong>Log levels (from least to most verbose):</strong></p><ol><li><code>emerg</code> - Emergency: system unusable</li><li><code>alert</code> - Alert: action must be taken immediately</li><li><code>crit</code> - Critical conditions</li><li><code>error</code> - Error conditions</li><li><code>warn</code> - Warning conditions</li><li><code>notice</code> - Normal but significant</li><li><code>info</code> - Informational</li><li><code>debug</code> - Debug messages</li></ol><p><strong>Configuration:</strong></p><pre><code class="language-nginx"># Global error log
error_log /var/log/nginx/error.log warn;

http {
    # HTTP-level error log
    error_log /var/log/nginx/http-error.log error;
    
    server {
        listen 80;
        server_name example.com;
        
        # Server-level error log
        error_log /var/log/nginx/example.com.error.log error;
        
        # Debug log for troubleshooting
        error_log /var/log/nginx/debug.log debug;
    }
}
</code></pre><p><strong>Example error log entries:</strong></p><pre><code>2024/12/03 10:30:45 [error] 1234#1234: *1 open() "/var/www/html/notfound.html" failed (2: No such file or directory), client: 192.168.1.100, server: example.com, request: "GET /notfound.html HTTP/1.1", host: "example.com"

2024/12/03 10:31:20 [warn] 1234#1234: *2 upstream server temporarily disabled while connecting to upstream, client: 192.168.1.101, server: api.example.com, request: "GET /api/users HTTP/1.1", upstream: "http://192.168.1.200:3000/api/users"

2024/12/03 10:32:05 [crit] 1234#1234: malloc() 8192 bytes failed (12: Cannot allocate memory)
</code></pre><h3 id="13-xem-v%C3%A0-theo-d%C3%B5i-logs-real-time"><strong>1.3. Viewing and Monitoring Logs in Real-time</strong></h3><pre><code class="language-bash"># View access log
sudo tail -f /var/log/nginx/access.log

# View error log
sudo tail -f /var/log/nginx/error.log

# View last 100 lines
sudo tail -n 100 /var/log/nginx/access.log

# View both logs simultaneously
sudo tail -f /var/log/nginx/access.log /var/log/nginx/error.log

# Filter logs
sudo tail -f /var/log/nginx/access.log | grep "404"
sudo tail -f /var/log/nginx/access.log | grep "192.168.1.100"

# View logs with less (scrollable)
sudo less +F /var/log/nginx/access.log
</code></pre><h3 id="14-ph%C3%A2n-t%C3%ADch-logs-c%C6%A1-b%E1%BA%A3n"><strong>1.4. Basic Log Analysis</strong></h3><p><strong>Count total requests:</strong></p><pre><code class="language-bash"># Total requests
wc -l /var/log/nginx/access.log

# Requests in the past hour
sudo awk -v date="$(date -d '1 hour ago' '+%d/%b/%Y:%H')" '$4 &gt; "["date' /var/log/nginx/access.log | wc -l
</code></pre><p><strong>Top 10 IPs:</strong></p><pre><code class="language-bash">sudo awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -10
</code></pre><p><strong>Top 10 most accessed URLs:</strong></p><pre><code class="language-bash">sudo awk '{print $7}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -10
</code></pre><p><strong>HTTP status code counts:</strong></p><pre><code class="language-bash">sudo awk '{print $9}' /var/log/nginx/access.log | sort | uniq -c | sort -rn
</code></pre><p><strong>Top User Agents:</strong></p><pre><code class="language-bash">sudo awk -F'"' '{print $6}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -10
</code></pre><p><strong>Requests per hour:</strong></p><pre><code class="language-bash">sudo awk '{print $4}' /var/log/nginx/access.log | cut -d: -f1-2 | sort | uniq -c
</code></pre><hr><h2 id="2-%C4%91%E1%BB%8Bnh-d%E1%BA%A1ng-log-t%C3%B9y-ch%E1%BB%89nh"><strong>2. Custom Log Formats</strong></h2><p>Nginx allows you to create custom log formats to collect exactly the information you need.</p><h3 id="21-log-format-c%C6%A1-b%E1%BA%A3n"><strong>2.1. Basic Log Format</strong></h3><p><strong>Define format:</strong></p><pre><code class="language-nginx">http {
    # Default format (combined)
    log_format combined '$remote_addr - $remote_user [$time_local] '
                        '"$request" $status $body_bytes_sent '
                        '"$http_referer" "$http_user_agent"';
    
    # Simpler format
    log_format simple '$remote_addr - $request - $status';
    
    # Detailed format
    log_format detailed '$remote_addr - $remote_user [$time_local] '
                        '"$request" $status $body_bytes_sent '
                        '"$http_referer" "$http_user_agent" '
                        'rt=$request_time uct="$upstream_connect_time" '
                        'uht="$upstream_header_time" urt="$upstream_response_time"';
    
    server {
        listen 80;
        
        # Use custom format
        access_log /var/log/nginx/access.log detailed;
    }
}
</code></pre><h3 id="22-c%C3%A1c-bi%E1%BA%BFn-th%C6%B0%E1%BB%9Dng-d%C3%B9ng-trong-log-format"><strong>2.2. Common Variables in Log Formats</strong></h3><p><strong>Client information:</strong></p><pre><code class="language-nginx">$remote_addr          # Client IP
$remote_user          # HTTP authenticated user
$http_x_forwarded_for # Real IP if behind proxy/CDN
</code></pre><p><strong>Request information:</strong></p><pre><code class="language-nginx">$time_local           # Local time
$time_iso8601         # ISO 8601 time
$request              # Full request line
$request_method       # GET, POST, etc.
$request_uri          # Request URI with arguments
$uri                  # Current URI
$args                 # Query string arguments
$query_string         # Same as $args
$scheme               # http or https
$server_protocol      # HTTP/1.1, HTTP/2.0
$host                 # Host header
$server_name          # Server name
</code></pre><p><strong>Response information:</strong></p><pre><code class="language-nginx">$status               # HTTP status code
$body_bytes_sent      # Response body size
$bytes_sent           # Total bytes sent (headers + body)
$request_length       # Request length (including headers)
</code></pre><p><strong>Timing information:</strong></p><pre><code class="language-nginx">$request_time         # Request processing time (seconds)
$upstream_response_time    # Backend response time
$upstream_connect_time     # Time to connect to upstream
$upstream_header_time      # Time to receive upstream headers
</code></pre><p><strong>Upstream information:</strong></p><pre><code class="language-nginx">$upstream_addr             # Upstream server address
$upstream_status           # Upstream response status
$upstream_cache_status     # Cache status (HIT, MISS, etc.)
</code></pre><p><strong>Headers:</strong></p><pre><code class="language-nginx">$http_user_agent      # User-Agent header
$http_referer         # Referer header
$http_cookie          # Cookie header
$http_&lt;header_name&gt;   # Any HTTP header (lowercase with underscores)
</code></pre><h3 id="23-v%C3%AD-d%E1%BB%A5-log-formats-th%E1%BB%B1c-t%E1%BA%BF"><strong>2.3. Real-world Log Format Examples</strong></h3><p><strong>Performance monitoring format:</strong></p><pre><code class="language-nginx">log_format performance '$remote_addr - [$time_local] "$request" '
                       '$status $body_bytes_sent '
                       'rt=$request_time '
                       'uct=$upstream_connect_time '
                       'uht=$upstream_header_time '
                       'urt=$upstream_response_time';

server {
    listen 80;
    access_log /var/log/nginx/performance.log performance;
}
</code></pre><p><strong>Output:</strong></p><pre><code>192.168.1.100 - [03/Dec/2024:10:30:45 +0700] "GET /api/users HTTP/1.1" 200 1234 rt=0.125 uct=0.005 uht=0.050 urt=0.120
</code></pre><p><strong>JSON format (easy to parse):</strong></p><pre><code class="language-nginx">log_format json_combined escape=json
    '{'
        '"time_local":"$time_local",'
        '"remote_addr":"$remote_addr",'
        '"request":"$request",'
        '"status":$status,'
        '"body_bytes_sent":$body_bytes_sent,'
        '"request_time":$request_time,'
        '"http_referer":"$http_referer",'
        '"http_user_agent":"$http_user_agent"'
    '}';

server {
    listen 80;
    access_log /var/log/nginx/access.json json_combined;
}
</code></pre><p><strong>Output:</strong></p><pre><code class="language-json">{"time_local":"03/Dec/2024:10:30:45 +0700","remote_addr":"192.168.1.100","request":"GET /index.html HTTP/1.1","status":200,"body_bytes_sent":1234,"request_time":0.005,"http_referer":"https://google.com","http_user_agent":"Mozilla/5.0"}
</code></pre><p><strong>Security monitoring format:</strong></p><pre><code class="language-nginx">log_format security '$remote_addr - [$time_local] '
                    '"$request" $status '
                    '"$http_user_agent" '
                    '"$http_x_forwarded_for" '
                    'host=$host '
                    'args=$args';

server {
    listen 80;
    access_log /var/log/nginx/security.log security;
}
</code></pre><p><strong>CDN/Proxy format:</strong></p><pre><code class="language-nginx">log_format cdn '$http_x_forwarded_for - $remote_addr - $remote_user [$time_local] '
               '"$request" $status $body_bytes_sent '
               '"$http_referer" "$http_user_agent" '
               'cache=$upstream_cache_status';

server {
    listen 80;
    access_log /var/log/nginx/cdn.log cdn;
}
</code></pre><h3 id="24-conditional-logging"><strong>2.4. Conditional Logging</strong></h3><p><strong>Log only when condition is met:</strong></p><pre><code class="language-nginx">http {
    # Define map to check conditions
    map $status $loggable {
        ~^[23]  0;  # Don't log 2xx and 3xx
        default 1;  # Log everything else
    }
    
    server {
        listen 80;
        
        # Only log if $loggable = 1
        access_log /var/log/nginx/errors-only.log combined if=$loggable;
    }
}
</code></pre><p><strong>Don't log static files:</strong></p><pre><code class="language-nginx">map $request_uri $log_static {
    ~*\.(jpg|jpeg|png|gif|ico|css|js)$ 0;
    default 1;
}

server {
    listen 80;
    access_log /var/log/nginx/access.log combined if=$log_static;
}
</code></pre><p><strong>Don't log health checks:</strong></p><pre><code class="language-nginx">map $request_uri $log_health {
    ~^/health$ 0;
    ~^/ping$ 0;
    default 1;
}

server {
    listen 80;
    access_log /var/log/nginx/access.log combined if=$log_health;
}
</code></pre><p><strong>Don't log bots:</strong></p><pre><code class="language-nginx">map $http_user_agent $log_bots {
    ~*bot 0;
    ~*crawler 0;
    ~*spider 0;
    default 1;
}

server {
    listen 80;
    access_log /var/log/nginx/access.log combined if=$log_bots;
}
</code></pre><h3 id="25-multiple-access-logs"><strong>2.5. Multiple Access Logs</strong></h3><pre><code class="language-nginx">server {
    listen 80;
    server_name example.com;
    
    # Log all requests
    access_log /var/log/nginx/all.log combined;
    
    # Log errors only
    access_log /var/log/nginx/errors.log combined if=$loggable;
    
    # Performance log
    access_log /var/log/nginx/performance.log performance;
    
    # JSON log for processing
    access_log /var/log/nginx/json.log json_combined;
}
</code></pre><hr><h2 id="3-log-rotation-v%E1%BB%9Bi-logrotate"><strong>3. Log Rotation with Logrotate</strong></h2><p>Log files can grow very quickly. Log rotation helps manage disk space by automatically compressing and deleting old logs.</p><h3 id="31-logrotate-c%C6%A1-b%E1%BA%A3n"><strong>3.1. Basic Logrotate</strong></h3><p><strong>Default configuration file:</strong></p><pre><code class="language-bash"># Ubuntu/Debian
/etc/logrotate.d/nginx

# CentOS/RHEL
/etc/logrotate.d/nginx
</code></pre><p><strong>Default contents:</strong></p><pre><code class="language-bash">/var/log/nginx/*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    sharedscripts
    postrotate
        if [ -f /var/run/nginx.pid ]; then
            kill -USR1 `cat /var/run/nginx.pid`
        fi
    endscript
}
</code></pre><p><strong>Directive explanations:</strong></p><ul><li><code>daily</code> - Rotate every day</li><li><code>missingok</code> - Don't error if log file doesn't exist</li><li><code>rotate 14</code> - Keep 14 backup copies</li><li><code>compress</code> - Compress old logs with gzip</li><li><code>delaycompress</code> - Wait until next rotation to compress</li><li><code>notifempty</code> - Don't rotate if file is empty</li><li><code>create 0640 www-data adm</code> - Create new file with permissions</li><li><code>sharedscripts</code> - Run postrotate script once for all logs</li><li><code>postrotate/endscript</code> - Script run after rotation</li></ul><h3 id="32-custom-logrotate-configuration"><strong>3.2. Custom Logrotate Configuration</strong></h3><p><strong>Rotate hourly (for high-traffic sites):</strong></p><pre><code class="language-bash">sudo nano /etc/logrotate.d/nginx-hourly

# Contents:
/var/log/nginx/high-traffic.log {
    hourly
    rotate 168          # 7 days * 24 hours
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    dateext
    dateformat -%Y%m%d-%H
    sharedscripts
    postrotate
        if [ -f /var/run/nginx.pid ]; then
            kill -USR1 `cat /var/run/nginx.pid`
        fi
    endscript
}
</code></pre><p><strong>Rotate by size:</strong></p><pre><code class="language-bash">/var/log/nginx/*.log {
    size 100M           # Rotate when reaching 100MB
    rotate 10
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    sharedscripts
    postrotate
        if [ -f /var/run/nginx.pid ]; then
            kill -USR1 `cat /var/run/nginx.pid`
        fi
    endscript
}
</code></pre><p><strong>Rotate with custom naming:</strong></p><pre><code class="language-bash">/var/log/nginx/*.log {
    daily
    rotate 30
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    dateext
    dateformat -.%Y-%m-%d
    extension .log
    sharedscripts
    postrotate
        if [ -f /var/run/nginx.pid ]; then
            kill -USR1 `cat /var/run/nginx.pid`
        fi
    endscript
}

# Output: access.log-2024-12-03.log.gz
</code></pre><p><strong>Separate rotation for each log:</strong></p><pre><code class="language-bash"># Performance logs - keep longer
/var/log/nginx/performance.log {
    daily
    rotate 90           # 3 months
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
}

# Error logs - keep very long
/var/log/nginx/error.log {
    weekly
    rotate 52           # 1 year
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
}

# Access logs - rotate quickly
/var/log/nginx/access.log {
    daily
    rotate 7            # 1 week
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
}
</code></pre><h3 id="33-test-v%C3%A0-force-rotation"><strong>3.3. Test and Force Rotation</strong></h3><pre><code class="language-bash"># Test configuration (dry run)
sudo logrotate -d /etc/logrotate.d/nginx

# Force rotation (execute immediately)
sudo logrotate -f /etc/logrotate.d/nginx

# Check status
sudo cat /var/lib/logrotate/status

# Manual rotation (without logrotate)
sudo mv /var/log/nginx/access.log /var/log/nginx/access.log.1
sudo nginx -s reopen
sudo gzip /var/log/nginx/access.log.1
</code></pre><h3 id="34-troubleshooting-logrotate"><strong>3.4. Troubleshooting Logrotate</strong></h3><p><strong>Check if logrotate is running:</strong></p><pre><code class="language-bash"># Check cron job
ls -la /etc/cron.daily/logrotate

# Check logrotate status
sudo cat /var/lib/logrotate/status | grep nginx

# Run logrotate manually with verbose
sudo logrotate -v /etc/logrotate.d/nginx
</code></pre><p><strong>Common errors:</strong></p><pre><code class="language-bash"># Error: Permission denied
# Fix: Check ownership
ls -la /var/log/nginx/
sudo chown www-data:adm /var/log/nginx/*.log

# Error: Nginx not reopening logs
# Fix: Check PID file
ls -la /var/run/nginx.pid
sudo systemctl restart nginx

# Error: Logs not being compressed
# Fix: Check gzip installed
which gzip
sudo apt install gzip
</code></pre><hr><h2 id="4-c%C3%A1c-metrics-c%C6%A1-b%E1%BA%A3n-%C4%91%E1%BB%83-theo-d%C3%B5i"><strong>4. Basic Metrics for Monitoring</strong></h2><h3 id="41-requests-per-second-rps"><strong>4.1. Requests per Second (RPS)</strong></h3><p><strong>Script to calculate RPS:</strong></p><pre><code class="language-bash">#!/bin/bash
# rps.sh - Calculate requests per second

LOG_FILE="/var/log/nginx/access.log"
INTERVAL=60  # seconds

while true; do
    START_COUNT=$(wc -l &lt; "$LOG_FILE")
    sleep $INTERVAL
    END_COUNT=$(wc -l &lt; "$LOG_FILE")
    
    REQUESTS=$((END_COUNT - START_COUNT))
    RPS=$(echo "scale=2; $REQUESTS / $INTERVAL" | bc)
    
    echo "$(date '+%Y-%m-%d %H:%M:%S') - RPS: $RPS"
done
</code></pre><p><strong>Run script:</strong></p><pre><code class="language-bash">chmod +x rps.sh
./rps.sh
</code></pre><h3 id="42-response-time-analysis"><strong>4.2. Response Time Analysis</strong></h3><p><strong>Script to analyze response times:</strong></p><pre><code class="language-bash">#!/bin/bash
# response_time.sh - Analyze response times

LOG_FILE="/var/log/nginx/access.log"

echo "Response Time Statistics:"
echo "========================"

# Extract request_time (assuming it's logged)
awk '{print $NF}' "$LOG_FILE" | \
    awk '{
        sum += $1;
        count++;
        if ($1 &gt; max) max = $1;
        if (min == 0 || $1 &lt; min) min = $1;
    }
    END {
        print "Average: " sum/count " seconds";
        print "Min: " min " seconds";
        print "Max: " max " seconds";
    }'
</code></pre><h3 id="43-status-code-distribution"><strong>4.3. Status Code Distribution</strong></h3><pre><code class="language-bash">#!/bin/bash
# status_codes.sh - Count HTTP status codes

LOG_FILE="/var/log/nginx/access.log"

echo "HTTP Status Code Distribution:"
echo "=============================="

awk '{print $9}' "$LOG_FILE" | sort | uniq -c | sort -rn | \
while read count code; do
    percentage=$(echo "scale=2; ($count * 100) / $(wc -l &lt; $LOG_FILE)" | bc)
    printf "%3s: %6d requests (%5.2f%%)\n" "$code" "$count" "$percentage"
done
</code></pre><h3 id="44-traffic-by-hour"><strong>4.4. Traffic by Hour</strong></h3><pre><code class="language-bash">#!/bin/bash
# traffic_by_hour.sh - Analyze traffic by hour

LOG_FILE="/var/log/nginx/access.log"

echo "Traffic by Hour:"
echo "================"

awk '{print $4}' "$LOG_FILE" | cut -d: -f2 | sort | uniq -c | \
while read count hour; do
    printf "Hour %02d: %6d requests\n" "$hour" "$count"
done
</code></pre><h3 id="45-top-clients-ip-addresses"><strong>4.5. Top Clients (IP Addresses)</strong></h3><pre><code class="language-bash">#!/bin/bash
# top_clients.sh - Find top clients by requests

LOG_FILE="/var/log/nginx/access.log"
TOP_N=10

echo "Top $TOP_N Clients:"
echo "=================="

awk '{print $1}' "$LOG_FILE" | sort | uniq -c | sort -rn | head -n $TOP_N | \
while read count ip; do
    printf "%15s: %6d requests\n" "$ip" "$count"
done
</code></pre><h3 id="46-bandwidth-usage"><strong>4.6. Bandwidth Usage</strong></h3><pre><code class="language-bash">#!/bin/bash
# bandwidth.sh - Calculate bandwidth usage

LOG_FILE="/var/log/nginx/access.log"

echo "Bandwidth Statistics:"
echo "===================="

# Assuming $body_bytes_sent is in position 10
awk '{sum += $10} END {
    gb = sum / 1024 / 1024 / 1024;
    mb = sum / 1024 / 1024;
    kb = sum / 1024;
    printf "Total: %.2f GB (%.2f MB, %.2f KB)\n", gb, mb, kb;
}' "$LOG_FILE"
</code></pre><h3 id="47-real-time-dashboard-script"><strong>4.7. Real-time Dashboard Script</strong></h3><pre><code class="language-bash">#!/bin/bash
# dashboard.sh - Real-time Nginx monitoring dashboard

LOG_FILE="/var/log/nginx/access.log"

while true; do
    clear
    echo "==================================="
    echo "   NGINX MONITORING DASHBOARD"
    echo "==================================="
    echo "Time: $(date '+%Y-%m-%d %H:%M:%S')"
    echo

    # Total requests
    TOTAL=$(wc -l &lt; "$LOG_FILE")
    echo "Total Requests: $TOTAL"
    echo

    # Last minute requests
    LAST_MINUTE=$(tail -n 1000 "$LOG_FILE" | wc -l)
    echo "Last ~1000 requests"
    echo

    # Status codes (last 1000)
    echo "Status Codes (recent):"
    tail -n 1000 "$LOG_FILE" | awk '{print $9}' | sort | uniq -c | sort -rn
    echo

    # Top 5 IPs (recent)
    echo "Top 5 IPs (recent):"
    tail -n 1000 "$LOG_FILE" | awk '{print $1}' | sort | uniq -c | sort -rn | head -5
    echo

    # Top 5 URLs (recent)
    echo "Top 5 URLs (recent):"
    tail -n 1000 "$LOG_FILE" | awk '{print $7}' | sort | uniq -c | sort -rn | head -5
    
    sleep 5
done
</code></pre><p><strong>Run dashboard:</strong></p><pre><code class="language-bash">chmod +x dashboard.sh
./dashboard.sh
</code></pre><h3 id="48-g%E1%BB%ADi-alerts-khi-c%C3%B3-v%E1%BA%A5n-%C4%91%E1%BB%81"><strong>4.8. Sending Alerts When Issues Occur</strong></h3><pre><code class="language-bash">#!/bin/bash
# alert.sh - Send alert when error rate is high

LOG_FILE="/var/log/nginx/access.log"
ERROR_THRESHOLD=10  # % of 5xx errors
EMAIL="admin@example.com"

# Count last 100 requests
TOTAL=$(tail -n 100 "$LOG_FILE" | wc -l)
ERRORS=$(tail -n 100 "$LOG_FILE" | awk '{print $9}' | grep "^5" | wc -l)

ERROR_RATE=$(echo "scale=2; ($ERRORS * 100) / $TOTAL" | bc)

if (( $(echo "$ERROR_RATE &gt; $ERROR_THRESHOLD" | bc -l) )); then
    MESSAGE="ALERT: High error rate detected! $ERROR_RATE% of requests are 5xx errors"
    echo "$MESSAGE" | mail -s "Nginx Alert" "$EMAIL"
    echo "$MESSAGE"
fi
</code></pre><h3 id="49-integration-v%E1%BB%9Bi-monitoring-tools"><strong>4.9. Integration with Monitoring Tools</strong></h3><p><strong>Export metrics for Prometheus:</strong></p><pre><code class="language-bash"># Install nginx-prometheus-exporter
wget https://github.com/nginxinc/nginx-prometheus-exporter/releases/download/v0.11.0/nginx-prometheus-exporter_0.11.0_linux_amd64.tar.gz
tar xzf nginx-prometheus-exporter_0.11.0_linux_amd64.tar.gz
sudo mv nginx-prometheus-exporter /usr/local/bin/

# Run exporter
nginx-prometheus-exporter -nginx.scrape-uri=http://localhost:8080/stub_status
</code></pre><p><strong>Configure Nginx stub_status:</strong></p><pre><code class="language-nginx">server {
    listen 8080;
    server_name localhost;
    
    location /stub_status {
        stub_status;
        access_log off;
        allow 127.0.0.1;
        deny all;
    }
}
</code></pre><hr><h2 id="5-b%C3%A0i-t%E1%BA%ADp-th%E1%BB%B1c-h%C3%A0nh"><strong>5. Practice Exercises</strong></h2><h3 id="b%C3%A0i-t%E1%BA%ADp-1-custom-log-format"><strong>Exercise 1: Custom Log Format</strong></h3><ol><li>Create a custom log format named <code>timing</code> that includes:<ul><li>Remote address</li><li>Request</li><li>Status</li><li>Request time</li><li>Upstream response time</li></ul></li><li>Apply this format to a virtual host</li><li>Generate traffic and view logs</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-2-json-logging"><strong>Exercise 2: JSON Logging</strong></h3><ol><li>Create a JSON log format</li><li>Configure Nginx to log in JSON</li><li>Parse JSON logs with <code>jq</code>:</li></ol><pre><code class="language-bash">cat /var/log/nginx/access.json | jq '.status'
cat /var/log/nginx/access.json | jq 'select(.status &gt;= 400)'
</code></pre><h3 id="b%C3%A0i-t%E1%BA%ADp-3-log-rotation"><strong>Exercise 3: Log Rotation</strong></h3><ol><li>Create a custom logrotate config that rotates at 10MB</li><li>Test with <code>logrotate -d</code></li><li>Force rotation and verify</li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-4-traffic-analysis"><strong>Exercise 4: Traffic Analysis</strong></h3><ol><li>Generate 1000 requests with <code>ab</code>:</li></ol><pre><code class="language-bash">ab -n 1000 -c 10 http://localhost/
</code></pre><ol start="2"><li>Analyze logs to find:<ul><li>Total requests</li><li>Average response time</li><li>Status code distribution</li><li>Top URLs</li></ul></li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-5-real-time-monitoring"><strong>Exercise 5: Real-time Monitoring</strong></h3><ol><li>Set up the dashboard script</li><li>Modify it to add:<ul><li>Error rate (%)</li><li>Bandwidth usage</li><li>Slowest requests</li></ul></li></ol><h3 id="b%C3%A0i-t%E1%BA%ADp-6-conditional-logging"><strong>Exercise 6: Conditional Logging</strong></h3><ol><li>Configure to not log:<ul><li>Static files (.css, .js, .jpg, .png)</li><li>Health check endpoint (/health)</li><li>Bot traffic</li></ul></li><li>Verify that these requests don't appear in logs</li></ol><hr><h2 id="6-troubleshooting-v%E1%BB%9Bi-logs"><strong>6. Troubleshooting with Logs</strong></h2><h3 id="61-debug-404-errors"><strong>6.1. Debug 404 Errors</strong></h3><pre><code class="language-bash"># Find all 404s
grep " 404 " /var/log/nginx/access.log

# Top URLs causing 404
grep " 404 " /var/log/nginx/access.log | awk '{print $7}' | sort | uniq -c | sort -rn | head -10

# 404s from a specific IP
grep "192.168.1.100" /var/log/nginx/access.log | grep " 404 "
</code></pre><h3 id="62-debug-500-errors"><strong>6.2. Debug 500 Errors</strong></h3><pre><code class="language-bash"># Find 5xx errors
grep " 50[0-9] " /var/log/nginx/access.log

# Check error log for details
sudo tail -100 /var/log/nginx/error.log | grep "error"

# 5xx errors over time
grep " 50[0-9] " /var/log/nginx/access.log | awk '{print $4}' | cut -d: -f1-2 | uniq -c
</code></pre><h3 id="63-debug-slow-requests"><strong>6.3. Debug Slow Requests</strong></h3><pre><code class="language-bash"># Find requests &gt; 1 second (assuming request_time is logged)
awk '$NF &gt; 1.0' /var/log/nginx/access.log

# Top 10 slowest requests
awk '{print $NF, $7}' /var/log/nginx/access.log | sort -rn | head -10
</code></pre><h3 id="64-debug-high-traffic"><strong>6.4. Debug High Traffic</strong></h3><pre><code class="language-bash"># Requests per minute
awk '{print $4}' /var/log/nginx/access.log | cut -d: -f1-3 | uniq -c

# Identify traffic spikes
awk '{print $4}' /var/log/nginx/access.log | cut -d: -f1-3 | uniq -c | awk '$1 &gt; 1000'
</code></pre><h3 id="65-debug-security-issues"><strong>6.5. Debug Security Issues</strong></h3><pre><code class="language-bash"># Find SQL injection attempts
grep -i "select.*from\|union.*select" /var/log/nginx/access.log

# Find path traversal attempts
grep "\.\." /var/log/nginx/access.log

# Suspicious user agents
grep -i "sqlmap\|nikto\|nmap" /var/log/nginx/access.log
</code></pre><hr><h2 id="7-best-practices"><strong>7. Best Practices</strong></h2><h3 id="71-log-management"><strong>7.1. Log Management</strong></h3><ol><li><strong>Separate logs per virtual host:</strong></li></ol><pre><code class="language-nginx">server {
    server_name site1.com;
    access_log /var/log/nginx/site1.access.log;
    error_log /var/log/nginx/site1.error.log;
}
</code></pre><ol start="2"><li><strong>Use appropriate log levels:</strong></li></ol><pre><code class="language-nginx"># Production: error or warn
error_log /var/log/nginx/error.log warn;

# Development: info or debug
error_log /var/log/nginx/error.log debug;
</code></pre><ol start="3"><li><strong>Don't log excessively:</strong></li></ol><pre><code class="language-nginx"># Disable for static files
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    access_log off;
}

# Disable for health checks
location /health {
    access_log off;
    return 200;
}
</code></pre><h3 id="72-performance"><strong>7.2. Performance</strong></h3><ol><li><strong>Buffer logs:</strong></li></ol><pre><code class="language-nginx">access_log /var/log/nginx/access.log combined buffer=32k;
</code></pre><ol start="2"><li><strong>Async logging (Nginx 1.7.11+):</strong></li></ol><pre><code class="language-nginx">access_log /var/log/nginx/access.log combined buffer=32k flush=5s;
</code></pre><h3 id="73-security"><strong>7.3. Security</strong></h3><ol><li><strong>Protect log files:</strong></li></ol><pre><code class="language-bash">sudo chmod 640 /var/log/nginx/*.log
sudo chown www-data:adm /var/log/nginx/*.log
</code></pre><ol start="2"><li><strong>Rotate regularly:</strong></li></ol><pre><code class="language-bash"># Daily rotation for high-traffic sites
# Weekly for low-traffic sites
</code></pre><ol start="3"><li><strong>Monitor and alert:</strong></li></ol><pre><code class="language-bash"># Set up monitoring for error rates
# Alert on abnormal spikes
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>Summary</strong></h2><p>In this lesson, you learned:</p><ul><li>✅ Access log and error log</li><li>✅ Custom log formats and variables</li><li>✅ Log rotation with logrotate</li><li>✅ Log analysis and metrics</li><li>✅ Troubleshooting with logs</li><li>✅ Best practices for logging</li></ul><p><strong>Next lesson:</strong> We will explore Reverse Proxy — how to use Nginx as a reverse proxy for backend applications.</p>
