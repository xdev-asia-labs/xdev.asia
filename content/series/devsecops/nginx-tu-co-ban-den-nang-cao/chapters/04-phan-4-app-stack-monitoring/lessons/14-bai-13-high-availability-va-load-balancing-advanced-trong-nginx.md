---
id: 019c9617-fc9f-72bf-b136-257c1d6f0807
title: 'Bài 13: High Availability và Load Balancing Advanced trong NGINX'
slug: bai-13-high-availability-va-load-balancing-advanced-trong-nginx
description: >-
  Health checks (active/passive), session persistence, sticky sessions, failover
  strategies, Keepalived for virtual IPs, active-active và active-passive
  architectures, database load balancing, geographic distribution, disaster
  recovery planning và testing HA setups.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Application Stack & Monitoring"
course:
  id: 019c9617-fc27-73c5-b664-a1902ec9ac00
  title: Nginx từ Cơ bản đến Nâng cao
  slug: nginx-tu-co-ban-den-nang-cao
---
<h2 id="1-high-availability-concepts"><strong>1. High Availability Concepts</strong></h2><h3 id="11-ha-architecture-overview"><strong>1.1. HA Architecture Overview</strong></h3><pre><code>High Availability Setup:

┌─────────────────┐
│   Load Balancer │
│    (Virtual IP) │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼───┐ ┌───▼───┐
│ LB-1  │ │ LB-2  │  (Active-Active with Keepalived)
│Primary│ │Backup │
└───┬───┘ └───┬───┘
    │         │
    └────┬────┘
         │
    ┌────┴─────────┬─────────┐
    │              │         │
┌───▼───┐     ┌───▼───┐ ┌───▼───┐
│ Web-1 │     │ Web-2 │ │ Web-3 │  (Backend servers)
└───────┘     └───────┘ └───────┘
</code></pre><p><strong>Key components:</strong></p><ul><li>Multiple load balancers (redundancy)</li><li>Virtual IP (VIP) with failover</li><li>Health checks</li><li>Session persistence</li><li>Multiple backend servers</li><li>Automatic failover</li></ul><h3 id="12-availability-calculations"><strong>1.2. Availability Calculations</strong></h3><pre><code>Availability = (Total Time - Downtime) / Total Time × 100%

Uptime Targets:
- 99% (Two nines): 3.65 days downtime/year
- 99.9% (Three nines): 8.76 hours downtime/year
- 99.99% (Four nines): 52.56 minutes downtime/year
- 99.999% (Five nines): 5.26 minutes downtime/year

Example with redundancy:
Single server: 99% availability
Two servers: 1 - (0.01 × 0.01) = 99.99% availability
Three servers: 1 - (0.01 × 0.01 × 0.01) = 99.9999% availability
</code></pre><h3 id="13-types-of-ha-setups"><strong>1.3. Types of HA Setups</strong></h3><p><strong>Active-Passive:</strong></p><pre><code>┌────────┐     ┌────────┐
│ Active │────▶│Passive │
│   LB   │     │   LB   │
└────────┘     └────────┘
     │              │
     │         (Standby)
     │
   Serves
   Traffic
</code></pre><p><strong>Active-Active:</strong></p><pre><code>┌────────┐     ┌────────┐
│ Active │     │ Active │
│  LB-1  │     │  LB-2  │
└───┬────┘     └───┬────┘
    │              │
    └──────┬───────┘
           │
    Both serve traffic
</code></pre><hr><h2 id="2-advanced-health-checks"><strong>2. Advanced Health Checks</strong></h2><h3 id="21-passive-health-checks"><strong>2.1. Passive Health Checks</strong></h3><p>Passive health checks monitor actual traffic to detect failures.</p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com:8080 max_fails=3 fail_timeout=30s;
    server backend2.example.com:8080 max_fails=3 fail_timeout=30s;
    server backend3.example.com:8080 max_fails=3 fail_timeout=30s;
    
    # max_fails: Number of failed attempts before marking down
    # fail_timeout: Time to mark server as down
}

server {
    listen 80;
    server_name example.com;
    
    location / {
        proxy_pass http://backend;
        proxy_next_upstream error timeout invalid_header http_500 http_502 http_503;
        proxy_connect_timeout 2s;
        proxy_read_timeout 10s;
    }
}
</code></pre><p><strong>Detailed configuration:</strong></p><pre><code class="language-nginx">upstream app_backend {
    # Backend servers with health check params
    server 10.0.0.10:8080 max_fails=3 fail_timeout=30s weight=5;
    server 10.0.0.11:8080 max_fails=3 fail_timeout=30s weight=5;
    server 10.0.0.12:8080 max_fails=2 fail_timeout=20s weight=3 backup;
    
    # Keepalive connections
    keepalive 32;
    keepalive_timeout 60s;
    keepalive_requests 100;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://app_backend;
        
        # Define what constitutes a failure
        proxy_next_upstream error timeout invalid_header 
                           http_500 http_502 http_503 http_504;
        
        # Retry settings
        proxy_next_upstream_tries 3;
        proxy_next_upstream_timeout 10s;
        
        # Connection settings
        proxy_connect_timeout 5s;
        proxy_send_timeout 10s;
        proxy_read_timeout 10s;
        
        # Headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
</code></pre><h3 id="22-active-health-checks-nginx-plus"><strong>2.2. Active Health Checks (Nginx Plus)</strong></h3><pre><code class="language-nginx"># Nginx Plus only
upstream backend {
    zone backend 64k;
    
    server backend1.example.com:8080;
    server backend2.example.com:8080;
    server backend3.example.com:8080;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        
        # Active health check
        health_check interval=5s 
                    fails=3 
                    passes=2 
                    uri=/health 
                    match=health_check;
    }
}

# Define what a healthy response looks like
match health_check {
    status 200;
    header Content-Type = "application/json";
    body ~ "\"status\":\"ok\"";
}
</code></pre><h3 id="23-custom-health-check-scripts"><strong>2.3. Custom Health Check Scripts</strong></h3><p><strong>External health check script:</strong></p><pre><code class="language-bash">#!/bin/bash
# health_check.sh

BACKEND_SERVERS=(
    "10.0.0.10:8080"
    "10.0.0.11:8080"
    "10.0.0.12:8080"
)

HEALTH_ENDPOINT="/health"
NGINX_UPSTREAM_CONF="/etc/nginx/conf.d/upstream.conf"
TEMP_CONF="/tmp/upstream.conf.tmp"

check_backend() {
    local server=$1
    local url="http://${server}${HEALTH_ENDPOINT}"
    
    # Check with timeout
    if curl -sf --max-time 3 "$url" &gt; /dev/null; then
        return 0  # Healthy
    else
        return 1  # Unhealthy
    fi
}

update_upstream_config() {
    echo "upstream backend {" &gt; $TEMP_CONF
    
    for server in "${BACKEND_SERVERS[@]}"; do
        if check_backend "$server"; then
            echo "    server $server;" &gt;&gt; $TEMP_CONF
            echo "✓ $server is healthy"
        else
            echo "    server $server down;" &gt;&gt; $TEMP_CONF
            echo "✗ $server is down"
        fi
    done
    
    echo "}" &gt;&gt; $TEMP_CONF
    
    # Compare and reload if changed
    if ! cmp -s "$TEMP_CONF" "$NGINX_UPSTREAM_CONF"; then
        mv $TEMP_CONF $NGINX_UPSTREAM_CONF
        nginx -t &amp;&amp; nginx -s reload
        echo "Nginx configuration updated and reloaded"
    fi
}

# Run health check
update_upstream_config
</code></pre><p><strong>Systemd timer for health checks:</strong></p><pre><code class="language-ini"># /etc/systemd/system/nginx-health-check.service
[Unit]
Description=Nginx Backend Health Check

[Service]
Type=oneshot
ExecStart=/usr/local/bin/health_check.sh
</code></pre><pre><code class="language-ini"># /etc/systemd/system/nginx-health-check.timer
[Unit]
Description=Run Nginx health check every 30 seconds

[Timer]
OnBootSec=30s
OnUnitActiveSec=30s

[Install]
WantedBy=timers.target
</code></pre><p><strong>Enable timer:</strong></p><pre><code class="language-bash">sudo systemctl daemon-reload
sudo systemctl start nginx-health-check.timer
sudo systemctl enable nginx-health-check.timer
</code></pre><h3 id="24-application-level-health-checks"><strong>2.4. Application-Level Health Checks</strong></h3><p><strong>Node.js health endpoint:</strong></p><pre><code class="language-javascript">// health.js
const express = require('express');
const app = express();

// Health check endpoint
app.get('/health', async (req, res) =&gt; {
    const health = {
        status: 'ok',
        timestamp: Date.now(),
        uptime: process.uptime(),
        checks: {}
    };
    
    try {
        // Database check
        await checkDatabase();
        health.checks.database = 'ok';
        
        // Redis check
        await checkRedis();
        health.checks.redis = 'ok';
        
        // Memory check
        const memUsage = process.memoryUsage();
        if (memUsage.heapUsed / memUsage.heapTotal &gt; 0.9) {
            throw new Error('High memory usage');
        }
        health.checks.memory = 'ok';
        
        res.status(200).json(health);
    } catch (error) {
        health.status = 'error';
        health.error = error.message;
        res.status(503).json(health);
    }
});

async function checkDatabase() {
    // Database connection check
    // throw error if unhealthy
}

async function checkRedis() {
    // Redis connection check
    // throw error if unhealthy
}

app.listen(8080);
</code></pre><p><strong>Python/Flask health endpoint:</strong></p><pre><code class="language-python"># app.py
from flask import Flask, jsonify
import psycopg2
import redis
import time

app = Flask(__name__)

@app.route('/health')
def health_check():
    health = {
        'status': 'ok',
        'timestamp': int(time.time()),
        'checks': {}
    }
    
    try:
        # Database check
        check_database()
        health['checks']['database'] = 'ok'
        
        # Redis check
        check_redis()
        health['checks']['redis'] = 'ok'
        
        return jsonify(health), 200
        
    except Exception as e:
        health['status'] = 'error'
        health['error'] = str(e)
        return jsonify(health), 503

def check_database():
    conn = psycopg2.connect(
        host="localhost",
        database="mydb",
        user="user",
        password="pass"
    )
    conn.close()

def check_redis():
    r = redis.Redis(host='localhost', port=6379)
    r.ping()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
</code></pre><hr><h2 id="3-session-persistence-sticky-sessions"><strong>3. Session Persistence / Sticky Sessions</strong></h2><h3 id="31-ip-hash"><strong>3.1. IP Hash</strong></h3><pre><code class="language-nginx">upstream backend {
    ip_hash;  # Route based on client IP
    
    server backend1.example.com:8080;
    server backend2.example.com:8080;
    server backend3.example.com:8080;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
    }
}

# Pros: Simple, works without cookies
# Cons: Issues with proxies, NAT, mobile users
</code></pre><h3 id="32-cookie-based-sticky-sessions"><strong>3.2. Cookie-based Sticky Sessions</strong></h3><p><strong>Nginx Plus:</strong></p><pre><code class="language-nginx">upstream backend {
    server backend1.example.com:8080;
    server backend2.example.com:8080;
    server backend3.example.com:8080;
    
    sticky cookie srv_id expires=1h domain=.example.com path=/;
}
</code></pre><p><strong>Open source alternative with hash:</strong></p><pre><code class="language-nginx">map $cookie_route $backend_server {
    ~*server1 backend1.example.com:8080;
    ~*server2 backend2.example.com:8080;
    ~*server3 backend3.example.com:8080;
    default backend1.example.com:8080;
}

upstream backend {
    server backend1.example.com:8080;
    server backend2.example.com:8080;
    server backend3.example.com:8080;
}

server {
    listen 80;
    
    location / {
        # Generate sticky cookie if not present
        if ($cookie_route = "") {
            add_header Set-Cookie "route=server${remote_addr}hash; Path=/; HttpOnly";
        }
        
        proxy_pass http://backend;
    }
}
</code></pre><h3 id="33-hash-based-load-balancing"><strong>3.3. Hash-based Load Balancing</strong></h3><p><strong>URI hash:</strong></p><pre><code class="language-nginx">upstream backend {
    hash $request_uri consistent;
    
    server backend1.example.com:8080;
    server backend2.example.com:8080;
    server backend3.example.com:8080;
}

# Same URL always goes to same server
# Good for caching
</code></pre><p><strong>Custom hash key:</strong></p><pre><code class="language-nginx">map $cookie_user_id $hash_key {
    default $remote_addr;
    ~.+ $cookie_user_id;
}

upstream backend {
    hash $hash_key consistent;
    
    server backend1.example.com:8080;
    server backend2.example.com:8080;
    server backend3.example.com:8080;
}

# Hash by user ID if available, otherwise by IP
</code></pre><h3 id="34-session-replication-alternative"><strong>3.4. Session Replication Alternative</strong></h3><p>Instead of sticky sessions, use session replication.</p><p><strong>Redis for session storage:</strong></p><pre><code class="language-nginx">upstream backend {
    # No sticky sessions needed
    least_conn;
    
    server backend1.example.com:8080;
    server backend2.example.com:8080;
    server backend3.example.com:8080;
}

# Application stores sessions in Redis
# All backends can access same session data
</code></pre><p><strong>Application-side (Node.js example):</strong></p><pre><code class="language-javascript">const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');

const redisClient = redis.createClient({
    host: 'redis.example.com',
    port: 6379
});

app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: 'your-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true,
        httpOnly: true,
        maxAge: 3600000
    }
}));
</code></pre><hr><h2 id="4-keepalived-for-high-availability"><strong>4. Keepalived for High Availability</strong></h2><h3 id="41-keepalived-setup"><strong>4.1. Keepalived Setup</strong></h3><p><strong>Install Keepalived:</strong></p><pre><code class="language-bash"># Ubuntu/Debian
sudo apt install keepalived

# CentOS/RHEL
sudo yum install keepalived
</code></pre><p><strong>Network topology:</strong></p><pre><code>Virtual IP: 192.168.1.100

Master:  192.168.1.10 (Priority: 100)
Backup:  192.168.1.11 (Priority: 90)

Clients connect to VIP (192.168.1.100)
Master handles traffic
Backup takes over if master fails
</code></pre><h3 id="42-master-configuration"><strong>4.2. Master Configuration</strong></h3><pre><code class="language-bash"># /etc/keepalived/keepalived.conf (Master)
global_defs {
    router_id nginx_master
    script_user root
    enable_script_security
}

vrrp_script check_nginx {
    script "/usr/local/bin/check_nginx.sh"
    interval 2
    weight 2
    fall 2
    rise 2
}

vrrp_instance VI_1 {
    state MASTER
    interface eth0
    virtual_router_id 51
    priority 100
    advert_int 1
    
    authentication {
        auth_type PASS
        auth_pass your_secret_password
    }
    
    virtual_ipaddress {
        192.168.1.100/24
    }
    
    track_script {
        check_nginx
    }
    
    notify_master "/usr/local/bin/notify_master.sh"
    notify_backup "/usr/local/bin/notify_backup.sh"
    notify_fault "/usr/local/bin/notify_fault.sh"
}
</code></pre><h3 id="43-backup-configuration"><strong>4.3. Backup Configuration</strong></h3><pre><code class="language-bash"># /etc/keepalived/keepalived.conf (Backup)
global_defs {
    router_id nginx_backup
    script_user root
    enable_script_security
}

vrrp_script check_nginx {
    script "/usr/local/bin/check_nginx.sh"
    interval 2
    weight 2
    fall 2
    rise 2
}

vrrp_instance VI_1 {
    state BACKUP
    interface eth0
    virtual_router_id 51
    priority 90
    advert_int 1
    
    authentication {
        auth_type PASS
        auth_pass your_secret_password
    }
    
    virtual_ipaddress {
        192.168.1.100/24
    }
    
    track_script {
        check_nginx
    }
    
    notify_master "/usr/local/bin/notify_master.sh"
    notify_backup "/usr/local/bin/notify_backup.sh"
    notify_fault "/usr/local/bin/notify_fault.sh"
}
</code></pre><h3 id="44-health-check-script"><strong>4.4. Health Check Script</strong></h3><pre><code class="language-bash">#!/bin/bash
# /usr/local/bin/check_nginx.sh

# Check if Nginx is running
if systemctl is-active --quiet nginx; then
    # Check if Nginx responds
    if curl -sf http://localhost/health &gt; /dev/null 2&gt;&amp;1; then
        exit 0  # Healthy
    fi
fi

exit 1  # Unhealthy
</code></pre><p><strong>Make executable:</strong></p><pre><code class="language-bash">sudo chmod +x /usr/local/bin/check_nginx.sh
</code></pre><h3 id="45-notification-scripts"><strong>4.5. Notification Scripts</strong></h3><pre><code class="language-bash">#!/bin/bash
# /usr/local/bin/notify_master.sh

HOSTNAME=$(hostname)
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

echo "$TIMESTAMP: $HOSTNAME became MASTER" &gt;&gt; /var/log/keepalived-state.log

# Send alert
curl -X POST https://hooks.slack.com/services/YOUR/WEBHOOK/URL \
    -H 'Content-Type: application/json' \
    -d "{\"text\":\"🟢 $HOSTNAME is now MASTER\"}"
</code></pre><pre><code class="language-bash">#!/bin/bash
# /usr/local/bin/notify_backup.sh

HOSTNAME=$(hostname)
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

echo "$TIMESTAMP: $HOSTNAME became BACKUP" &gt;&gt; /var/log/keepalived-state.log

curl -X POST https://hooks.slack.com/services/YOUR/WEBHOOK/URL \
    -H 'Content-Type: application/json' \
    -d "{\"text\":\"🟡 $HOSTNAME is now BACKUP\"}"
</code></pre><pre><code class="language-bash">#!/bin/bash
# /usr/local/bin/notify_fault.sh

HOSTNAME=$(hostname)
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

echo "$TIMESTAMP: $HOSTNAME entered FAULT state" &gt;&gt; /var/log/keepalived-state.log

curl -X POST https://hooks.slack.com/services/YOUR/WEBHOOK/URL \
    -H 'Content-Type: application/json' \
    -d "{\"text\":\"🔴 $HOSTNAME in FAULT state\"}"
</code></pre><p><strong>Make executable:</strong></p><pre><code class="language-bash">sudo chmod +x /usr/local/bin/notify_*.sh
</code></pre><h3 id="46-start-keepalived"><strong>4.6. Start Keepalived</strong></h3><pre><code class="language-bash"># Start on both master and backup
sudo systemctl start keepalived
sudo systemctl enable keepalived

# Check status
sudo systemctl status keepalived

# View logs
sudo journalctl -u keepalived -f

# Check VIP
ip addr show eth0
</code></pre><h3 id="47-test-failover"><strong>4.7. Test Failover</strong></h3><pre><code class="language-bash"># On master, stop Nginx
sudo systemctl stop nginx

# VIP should move to backup within seconds
# Check on backup:
ip addr show eth0 | grep 192.168.1.100

# Restart Nginx on master
sudo systemctl start nginx

# VIP should return to master
</code></pre><hr><h2 id="5-complete-ha-setup"><strong>5. Complete HA Setup</strong></h2><h3 id="51-multi-tier-ha-architecture"><strong>5.1. Multi-tier HA Architecture</strong></h3><pre><code>                    Internet
                       │
                       ▼
              ┌─────────────────┐
              │   DNS (GeoDNS)  │
              │   Round-robin   │
              └────────┬─────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
┌────────────────┐           ┌────────────────┐
│  Data Center 1 │           │  Data Center 2 │
└────────┬───────┘           └────────┬───────┘
         │                            │
    ┌────┴────┐                  ┌────┴────┐
    ▼         ▼                  ▼         ▼
┌───────┐ ┌───────┐          ┌───────┐ ┌───────┐
│ LB-1  │ │ LB-2  │          │ LB-3  │ │ LB-4  │
│Master │ │Backup │          │Master │ │Backup │
└───┬───┘ └───┬───┘          └───┬───┘ └───┬───┘
    │         │                  │         │
    │  VIP1   │                  │  VIP2   │
    └────┬────┘                  └────┬────┘
         │                            │
    ┌────┴────┬─────┐          ┌──────┴────┬─────┐
    ▼         ▼     ▼          ▼           ▼     ▼
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│Web-1  │ │Web-2  │ │Web-3  │ │Web-4  │ │Web-5  │ │Web-6  │
└───────┘ └───────┘ └───────┘ └───────┘ └───────┘ └───────┘
</code></pre><h3 id="52-load-balancer-configuration"><strong>5.2. Load Balancer Configuration</strong></h3><p><strong>LB-1 (Master) configuration:</strong></p><pre><code class="language-nginx"># /etc/nginx/nginx.conf
user nginx;
worker_processes auto;
worker_rlimit_nofile 65535;

events {
    worker_connections 4096;
    use epoll;
    multi_accept on;
}

http {
    # Upstream definitions
    upstream web_backend {
        least_conn;
        
        # Data Center 1 servers
        server 10.0.1.10:80 max_fails=3 fail_timeout=30s weight=5;
        server 10.0.1.11:80 max_fails=3 fail_timeout=30s weight=5;
        server 10.0.1.12:80 max_fails=3 fail_timeout=30s weight=5;
        
        # Keepalive
        keepalive 64;
        keepalive_timeout 60s;
        keepalive_requests 1000;
    }
    
    upstream api_backend {
        least_conn;
        
        server 10.0.2.10:8080 max_fails=3 fail_timeout=30s;
        server 10.0.2.11:8080 max_fails=3 fail_timeout=30s;
        server 10.0.2.12:8080 max_fails=3 fail_timeout=30s;
        
        keepalive 32;
    }
    
    # Health check endpoint
    server {
        listen 80;
        server_name localhost;
        
        location /health {
            access_log off;
            return 200 "healthy\n";
            add_header Content-Type text/plain;
        }
    }
    
    # Main site
    server {
        listen 80;
        listen [::]:80;
        server_name example.com;
        
        # Redirect to HTTPS
        return 301 https://$server_name$request_uri;
    }
    
    server {
        listen 443 ssl http2;
        listen [::]:443 ssl http2;
        server_name example.com;
        
        # SSL
        ssl_certificate /etc/nginx/ssl/cert.pem;
        ssl_certificate_key /etc/nginx/ssl/key.pem;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_session_cache shared:SSL:10m;
        
        # Logging
        access_log /var/log/nginx/access.log;
        error_log /var/log/nginx/error.log;
        
        # Web traffic
        location / {
            proxy_pass http://web_backend;
            
            proxy_http_version 1.1;
            proxy_set_header Connection "";
            
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            
            proxy_next_upstream error timeout invalid_header http_500 http_502 http_503;
            proxy_next_upstream_tries 3;
            proxy_next_upstream_timeout 10s;
            
            proxy_connect_timeout 5s;
            proxy_send_timeout 10s;
            proxy_read_timeout 10s;
        }
        
        # API traffic
        location /api/ {
            proxy_pass http://api_backend/;
            
            proxy_http_version 1.1;
            proxy_set_header Connection "";
            
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            
            proxy_next_upstream error timeout http_502 http_503;
        }
    }
}
</code></pre><h3 id="53-configuration-sync"><strong>5.3. Configuration Sync</strong></h3><p><strong>Rsync script to sync configs:</strong></p><pre><code class="language-bash">#!/bin/bash
# sync_config.sh

PRIMARY="lb-1.example.com"
BACKUP="lb-2.example.com"
CONFIG_DIR="/etc/nginx"

if [ "$(hostname)" == "$PRIMARY" ]; then
    # Sync from primary to backup
    rsync -avz --delete \
        --exclude 'logs/*' \
        --exclude '*.log' \
        $CONFIG_DIR/ \
        root@$BACKUP:$CONFIG_DIR/
    
    # Test config on backup
    ssh root@$BACKUP "nginx -t &amp;&amp; systemctl reload nginx"
    
    echo "Configuration synced to backup"
else
    echo "Run this script on primary only"
fi
</code></pre><p><strong>Automated sync with inotify:</strong></p><pre><code class="language-bash">#!/bin/bash
# watch_and_sync.sh

CONFIG_DIR="/etc/nginx"
BACKUP="lb-2.example.com"

inotifywait -m -r -e modify,create,delete $CONFIG_DIR | while read path action file; do
    echo "Change detected: $path$file ($action)"
    
    # Sync to backup
    rsync -avz --delete \
        --exclude 'logs/*' \
        $CONFIG_DIR/ \
        root@$BACKUP:$CONFIG_DIR/
    
    # Test and reload on backup
    ssh root@$BACKUP "nginx -t &amp;&amp; systemctl reload nginx"
done
</code></pre><hr><h2 id="6-database-load-balancing"><strong>6. Database Load Balancing</strong></h2><h3 id="61-mysqlpostgresql-read-replicas"><strong>6.1. MySQL/PostgreSQL Read Replicas</strong></h3><pre><code class="language-nginx"># Master for writes
upstream db_master {
    server db-master.example.com:3306 max_fails=2 fail_timeout=10s;
}

# Slaves for reads
upstream db_slaves {
    least_conn;
    
    server db-slave1.example.com:3306 max_fails=3 fail_timeout=30s weight=5;
    server db-slave2.example.com:3306 max_fails=3 fail_timeout=30s weight=5;
    server db-slave3.example.com:3306 max_fails=3 fail_timeout=30s weight=3;
    
    keepalive 16;
}

# Stream block for TCP proxying
stream {
    # Write traffic to master
    server {
        listen 3306;
        proxy_pass db_master;
        proxy_connect_timeout 1s;
    }
    
    # Read traffic to slaves
    server {
        listen 3307;
        proxy_pass db_slaves;
        proxy_connect_timeout 1s;
    }
}

# Application connects to:
# localhost:3306 for writes
# localhost:3307 for reads
</code></pre><h3 id="62-mongodb-replica-set"><strong>6.2. MongoDB Replica Set</strong></h3><pre><code class="language-nginx">stream {
    upstream mongodb {
        # MongoDB replica set members
        server mongo1.example.com:27017 max_fails=2 fail_timeout=30s;
        server mongo2.example.com:27017 max_fails=2 fail_timeout=30s;
        server mongo3.example.com:27017 max_fails=2 fail_timeout=30s;
    }
    
    server {
        listen 27017;
        proxy_pass mongodb;
        proxy_connect_timeout 2s;
        proxy_timeout 10m;
    }
}
</code></pre><h3 id="63-redis-cluster"><strong>6.3. Redis Cluster</strong></h3><pre><code class="language-nginx">stream {
    upstream redis_cluster {
        # Redis nodes
        server redis1.example.com:6379;
        server redis2.example.com:6379;
        server redis3.example.com:6379;
        
        # Hash by client IP for consistency
        hash $remote_addr consistent;
    }
    
    server {
        listen 6379;
        proxy_pass redis_cluster;
        proxy_connect_timeout 1s;
        proxy_timeout 3s;
    }
}
</code></pre><hr><h2 id="7-geographic-load-balancing"><strong>7. Geographic Load Balancing</strong></h2><h3 id="71-geodns-setup"><strong>7.1. GeoDNS Setup</strong></h3><p><strong>Multiple data centers:</strong></p><pre><code>US West:  us-west.example.com  (IP: 203.0.113.10)
US East:  us-east.example.com  (IP: 203.0.113.20)
EU:       eu.example.com       (IP: 203.0.113.30)
Asia:     asia.example.com     (IP: 203.0.113.40)
</code></pre><p><strong>DNS configuration (Route53 example):</strong></p><pre><code class="language-json">{
  "Type": "A",
  "Name": "example.com",
  "GeoLocation": {
    "ContinentCode": "NA",
    "CountryCode": "US",
    "SubdivisionCode": "CA"
  },
  "SetIdentifier": "US-West",
  "ResourceRecords": [
    {
      "Value": "203.0.113.10"
    }
  ],
  "TTL": 60,
  "HealthCheckId": "health-check-us-west"
}
</code></pre><h3 id="72-nginx-geo-module"><strong>7.2. Nginx Geo Module</strong></h3><pre><code class="language-nginx">http {
    # Map client location to nearest datacenter
    geo $nearest_dc {
        default us-east;
        
        # US West
        include geoip/us-west.conf;
        
        # EU
        include geoip/eu.conf;
        
        # Asia
        include geoip/asia.conf;
    }
    
    # Define upstreams per region
    upstream us-west {
        server web1.us-west.example.com:80;
        server web2.us-west.example.com:80;
    }
    
    upstream us-east {
        server web1.us-east.example.com:80;
        server web2.us-east.example.com:80;
    }
    
    upstream eu {
        server web1.eu.example.com:80;
        server web2.eu.example.com:80;
    }
    
    upstream asia {
        server web1.asia.example.com:80;
        server web2.asia.example.com:80;
    }
    
    server {
        listen 80;
        
        location / {
            # Route to nearest datacenter
            proxy_pass http://$nearest_dc;
        }
    }
}
</code></pre><h3 id="73-geoip2-module"><strong>7.3. GeoIP2 Module</strong></h3><pre><code class="language-nginx">http {
    geoip2 /usr/share/GeoIP/GeoLite2-Country.mmdb {
        $geoip2_data_country_code country iso_code;
        $geoip2_data_country_name country names en;
    }
    
    # Map country to datacenter
    map $geoip2_data_country_code $datacenter {
        default us-east;
        
        # North America
        US us-west;
        CA us-west;
        MX us-east;
        
        # Europe
        GB eu;
        DE eu;
        FR eu;
        IT eu;
        ES eu;
        
        # Asia
        CN asia;
        JP asia;
        KR asia;
        IN asia;
    }
    
    server {
        location / {
            proxy_pass http://$datacenter;
            
            # Add headers for debugging
            add_header X-Country-Code $geoip2_data_country_code;
            add_header X-Datacenter $datacenter;
        }
    }
}
</code></pre><hr><h2 id="8-disaster-recovery"><strong>8. Disaster Recovery</strong></h2><h3 id="81-backup-strategy"><strong>8.1. Backup Strategy</strong></h3><pre><code class="language-bash">#!/bin/bash
# backup_nginx_config.sh

BACKUP_DIR="/backup/nginx"
DATE=$(date +%Y%m%d-%H%M%S)
RETENTION_DAYS=30

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup Nginx configuration
tar -czf $BACKUP_DIR/nginx-config-$DATE.tar.gz /etc/nginx

# Backup SSL certificates
tar -czf $BACKUP_DIR/nginx-ssl-$DATE.tar.gz /etc/letsencrypt

# Backup to remote location
rsync -avz $BACKUP_DIR/ backup-server:/backups/nginx/

# Delete old backups
find $BACKUP_DIR -name "*.tar.gz" -mtime +$RETENTION_DAYS -delete

echo "Backup completed: $DATE"
</code></pre><p><strong>Automated backup with cron:</strong></p><pre><code class="language-bash"># /etc/cron.d/nginx-backup
0 2 * * * root /usr/local/bin/backup_nginx_config.sh &gt;&gt; /var/log/nginx-backup.log 2&gt;&amp;1
</code></pre><h3 id="82-disaster-recovery-plan"><strong>8.2. Disaster Recovery Plan</strong></h3><p><strong>Recovery procedure:</strong></p><pre><code class="language-bash">#!/bin/bash
# restore_nginx.sh

BACKUP_FILE=$1

if [ -z "$BACKUP_FILE" ]; then
    echo "Usage: $0 &lt;backup_file&gt;"
    exit 1
fi

# Stop Nginx
systemctl stop nginx

# Backup current config
mv /etc/nginx /etc/nginx.old

# Restore from backup
tar -xzf $BACKUP_FILE -C /

# Test configuration
nginx -t

if [ $? -eq 0 ]; then
    # Start Nginx
    systemctl start nginx
    echo "Restoration successful"
else
    # Rollback
    rm -rf /etc/nginx
    mv /etc/nginx.old /etc/nginx
    systemctl start nginx
    echo "Restoration failed, rolled back"
    exit 1
fi
</code></pre><h3 id="83-failover-testing"><strong>8.3. Failover Testing</strong></h3><pre><code class="language-bash">#!/bin/bash
# test_failover.sh

VIP="192.168.1.100"
MASTER="192.168.1.10"
BACKUP="192.168.1.11"

echo "Starting failover test..."

# 1. Check initial state
echo "Checking VIP location..."
ssh root@$MASTER "ip addr | grep $VIP" &amp;&amp; echo "✓ VIP on master"

# 2. Stop Nginx on master
echo "Stopping Nginx on master..."
ssh root@$MASTER "systemctl stop nginx"

# Wait for failover
sleep 5

# 3. Check VIP moved to backup
echo "Checking VIP failover..."
ssh root@$BACKUP "ip addr | grep $VIP" &amp;&amp; echo "✓ VIP moved to backup"

# 4. Test connectivity
echo "Testing connectivity..."
curl -I http://$VIP &amp;&amp; echo "✓ Site accessible"

# 5. Restore master
echo "Restoring master..."
ssh root@$MASTER "systemctl start nginx"

# Wait for failback
sleep 5

# 6. Check VIP returned
echo "Checking VIP failback..."
ssh root@$MASTER "ip addr | grep $VIP" &amp;&amp; echo "✓ VIP returned to master"

echo "Failover test complete"
</code></pre><h3 id="84-recovery-time-objective-rto"><strong>8.4. Recovery Time Objective (RTO)</strong></h3><p><strong>Measure downtime:</strong></p><pre><code class="language-bash">#!/bin/bash
# measure_rto.sh

TARGET="http://192.168.1.100"
LOG_FILE="/var/log/rto-test.log"

START_TIME=$(date +%s)

# Trigger failure
echo "$(date): Starting RTO test" &gt;&gt; $LOG_FILE
ssh root@192.168.1.10 "systemctl stop nginx"

# Monitor until service restored
DOWNTIME=0
while true; do
    if curl -sf $TARGET &gt; /dev/null 2&gt;&amp;1; then
        END_TIME=$(date +%s)
        DOWNTIME=$((END_TIME - START_TIME))
        echo "$(date): Service restored after ${DOWNTIME}s" &gt;&gt; $LOG_FILE
        break
    fi
    sleep 1
done

# Restore
ssh root@192.168.1.10 "systemctl start nginx"

echo "RTO: ${DOWNTIME} seconds"
</code></pre><hr><h2 id="9-testing-ha-setup"><strong>9. Testing HA Setup</strong></h2><h3 id="91-load-testing-with-failover"><strong>9.1. Load Testing with Failover</strong></h3><pre><code class="language-bash">#!/bin/bash
# load_test_ha.sh

VIP="http://192.168.1.100"
DURATION=300  # 5 minutes

# Start load test in background
echo "Starting load test..."
wrk -t4 -c100 -d${DURATION}s $VIP &gt; /tmp/wrk-results.txt &amp;
WRK_PID=$!

# Wait 60 seconds
sleep 60

# Trigger failover during load test
echo "Triggering failover..."
ssh root@192.168.1.10 "systemctl stop nginx"

# Wait for test to complete
wait $WRK_PID

# Analyze results
echo "Load test complete"
cat /tmp/wrk-results.txt

# Count errors
ERRORS=$(grep "Socket errors" /tmp/wrk-results.txt)
echo "Errors during failover: $ERRORS"

# Restore
ssh root@192.168.1.10 "systemctl start nginx"
</code></pre><h3 id="92-chaos-engineering"><strong>9.2. Chaos Engineering</strong></h3><pre><code class="language-bash">#!/bin/bash
# chaos_test.sh

SERVERS=(
    "192.168.1.10"
    "192.168.1.11"
    "10.0.1.10"
    "10.0.1.11"
    "10.0.1.12"
)

# Randomly kill services
while true; do
    # Random server
    SERVER=${SERVERS[$RANDOM % ${#SERVERS[@]}]}
    
    # Random action
    ACTIONS=("stop nginx" "network disconnect" "high cpu" "high memory")
    ACTION=${ACTIONS[$RANDOM % ${#ACTIONS[@]}]}
    
    echo "$(date): Testing $ACTION on $SERVER"
    
    case $ACTION in
        "stop nginx")
            ssh root@$SERVER "systemctl stop nginx"
            sleep 30
            ssh root@$SERVER "systemctl start nginx"
            ;;
        "network disconnect")
            ssh root@$SERVER "iptables -A INPUT -j DROP"
            sleep 30
            ssh root@$SERVER "iptables -F"
            ;;
        "high cpu")
            ssh root@$SERVER "stress-ng --cpu 4 --timeout 30s" &amp;
            ;;
        "high memory")
            ssh root@$SERVER "stress-ng --vm 2 --vm-bytes 1G --timeout 30s" &amp;
            ;;
    esac
    
    # Wait before next chaos
    sleep 60
done
</code></pre><h3 id="93-automated-ha-tests"><strong>9.3. Automated HA Tests</strong></h3><pre><code class="language-bash">#!/bin/bash
# ha_test_suite.sh

run_test() {
    local test_name=$1
    local test_command=$2
    
    echo "Running: $test_name"
    
    if eval $test_command; then
        echo "✓ PASS: $test_name"
        return 0
    else
        echo "✗ FAIL: $test_name"
        return 1
    fi
}

# Test 1: VIP reachable
run_test "VIP Reachability" "ping -c 3 192.168.1.100"

# Test 2: Service responds
run_test "HTTP Response" "curl -sf http://192.168.1.100/health"

# Test 3: Failover time &lt; 5s
run_test "Failover Time" "./measure_rto.sh | grep -q 'RTO: [0-4] seconds'"

# Test 4: All backends healthy
run_test "Backend Health" "curl -sf http://192.168.1.100/health | grep -q 'healthy'"

# Test 5: Session persistence
run_test "Session Persistence" "./test_session_persistence.sh"

# Test 6: Load distribution
run_test "Load Distribution" "./test_load_distribution.sh"

echo "HA test suite complete"
</code></pre><hr><h2 id="10-monitoring-ha-setup"><strong>10. Monitoring HA Setup</strong></h2><h3 id="101-ha-monitoring-dashboard"><strong>10.1. HA Monitoring Dashboard</strong></h3><pre><code class="language-python">#!/usr/bin/env python3
# ha_monitor.py

import requests
import time
from datetime import datetime

SERVERS = [
    {'name': 'LB-1', 'ip': '192.168.1.10', 'role': 'master'},
    {'name': 'LB-2', 'ip': '192.168.1.11', 'role': 'backup'},
    {'name': 'Web-1', 'ip': '10.0.1.10', 'role': 'backend'},
    {'name': 'Web-2', 'ip': '10.0.1.11', 'role': 'backend'},
    {'name': 'Web-3', 'ip': '10.0.1.12', 'role': 'backend'},
]

VIP = '192.168.1.100'

def check_server(server):
    try:
        response = requests.get(
            f"http://{server['ip']}/health",
            timeout=2
        )
        return response.status_code == 200
    except:
        return False

def check_vip():
    try:
        response = requests.get(f"http://{VIP}/health", timeout=2)
        return response.status_code == 200
    except:
        return False

def display_status():
    print("\033[2J\033[H")  # Clear screen
    print("=" * 60)
    print("HA Monitoring Dashboard")
    print("=" * 60)
    print(f"Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print()
    
    # Check VIP
    vip_status = "✓ UP" if check_vip() else "✗ DOWN"
    print(f"Virtual IP ({VIP}): {vip_status}")
    print()
    
    # Check all servers
    print("Server Status:")
    print("-" * 60)
    for server in SERVERS:
        status = "✓ UP" if check_server(server) else "✗ DOWN"
        print(f"{server['name']:10} {server['ip']:15} {server['role']:10} {status}")
    print()

def main():
    while True:
        display_status()
        time.sleep(5)

if __name__ == '__main__':
    main()
</code></pre><h3 id="102-alerting-for-ha-events"><strong>10.2. Alerting for HA Events</strong></h3><pre><code class="language-bash">#!/bin/bash
# ha_alert.sh

WEBHOOK_URL="https://hooks.slack.com/services/YOUR/WEBHOOK/URL"

send_alert() {
    local message=$1
    local severity=$2
    
    local emoji="ℹ️"
    case $severity in
        critical) emoji="🔴" ;;
        warning) emoji="🟡" ;;
        info) emoji="🟢" ;;
    esac
    
    curl -X POST $WEBHOOK_URL \
        -H 'Content-Type: application/json' \
        -d "{\"text\":\"$emoji HA Alert: $message\"}"
}

# Monitor VIP
VIP="192.168.1.100"
PREVIOUS_STATE="unknown"

while true; do
    if ping -c 1 -W 1 $VIP &gt; /dev/null 2&gt;&amp;1; then
        CURRENT_STATE="up"
        if [ "$PREVIOUS_STATE" == "down" ]; then
            send_alert "VIP $VIP is now UP" "info"
        fi
    else
        CURRENT_STATE="down"
        if [ "$PREVIOUS_STATE" == "up" ]; then
            send_alert "VIP $VIP is DOWN!" "critical"
        fi
    fi
    
    PREVIOUS_STATE=$CURRENT_STATE
    sleep 5
done
</code></pre><hr><h2 id="t%E1%BB%95ng-k%E1%BA%BFt"><strong>Tổng kết</strong></h2><p>Trong bài này, bạn đã học:</p><ul><li>✅ HA concepts và architecture</li><li>✅ Advanced health checks (passive/active)</li><li>✅ Session persistence strategies</li><li>✅ Keepalived for virtual IPs và failover</li><li>✅ Complete HA setup với multiple tiers</li><li>✅ Database load balancing</li><li>✅ Geographic load balancing</li><li>✅ Disaster recovery planning</li><li>✅ HA testing và chaos engineering</li><li>✅ Monitoring HA infrastructure</li></ul><p><strong>Key takeaways:</strong></p><ul><li>Redundancy at every layer</li><li>Automatic failover với Keepalived</li><li>Health checks critical for reliability</li><li>Session persistence for stateful apps</li><li>Geographic distribution for global apps</li><li>Regular testing of failover scenarios</li><li>Comprehensive monitoring và alerting</li><li>Documented DR procedures</li></ul><p><strong>HA Checklist:</strong></p><ul><li>✅ Multiple load balancers with Keepalived</li><li>✅ Virtual IP configured</li><li>✅ Health checks implemented</li><li>✅ Session persistence configured</li><li>✅ Multiple backend servers</li><li>✅ Database replication setup</li><li>✅ Configuration sync automated</li><li>✅ Monitoring và alerting active</li><li>✅ DR plan documented và tested</li><li>✅ Regular failover testing</li></ul><p><strong>Production readiness:</strong></p><ul><li>RTO (Recovery Time Objective): &lt; 5 seconds</li><li>RPO (Recovery Point Objective): Near-zero for stateless apps</li><li>Availability target: 99.99% (four nines)</li><li>Regular chaos engineering tests</li><li>Automated incident response</li></ul><p><strong>Bài tiếp theo:</strong> Microservices và Service Mesh - service discovery, API Gateway patterns, rate limiting per service, circuit breakers, distributed tracing, Consul/Istio integration để manage complex microservices architectures.</p>
