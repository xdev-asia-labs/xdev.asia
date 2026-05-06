---
id: 019c9617-fb98-7319-877d-16408c323ce3
title: 'レッスン 18: パフォーマンスのチューニング'
slug: bai-18-performance-tuning
description: PostgreSQL 構成を最適化し、接続プーリング (PgBouncer)、負荷分散 (HAProxy)、およびリードレプリカのスケーリングを実装します。
duration_minutes: 130
is_free: true
video_url: null
sort_order: 18
section_title: 'パート 4: バックアップ、モニタリング、チューニング'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7034" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7034)"/>

  <!-- Decorations -->
  <g>
    <circle cx="739" cy="267" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="878" cy="86" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1017" cy="165" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="656" cy="244" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="795" cy="63" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="197" x2="1100" y2="277" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="227" x2="1050" y2="297" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="974.712812921102,131 974.712812921102,163 947,179 919.287187078898,163 919.287187078898,131 947,115" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — レッスン 18</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 18: パフォーマンス チューニング__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Patroni と PostgreSQL の高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: バックアップ、監視、およびチューニング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目的_</h2><p>このレッスンの後、次のことを行います:_</p><ul><li>HA クラスター用に PostgreSQL 構成を最適化_</li><li>PgBouncer を使用して接続プーリングをセットアップ</li><li>ロード バランシングを実装するHAProxy</li><li>複数のレプリカによる読み取りのスケール_</li><li>クエリとインデックスの調整_</li><li>パフォーマンスの問題の監視とトラブルシューティング</li></ul><h2 id="1-postgresql-configuration-tuning">1。 PostgreSQL 構成のチューニング</h2><h3 id="11-memory-settings">1.1。メモリ設定_</h3><h4 id="sharedbuffers">shared_buffers</h4><pre><code class="language-sql">-- Recommended: 25% of total RAM
-- Example for 16GB RAM server:
ALTER SYSTEM SET shared_buffers = '4GB';

-- Check current:
SHOW shared_buffers;
</code></pre><h4 id="effectivecachesize">Effective_cache_size</h4>___CODEBLOCK _1___<h4 id="workmem">work_mem</h4><pre><code class="language-sql">-- Per-operation memory (sorting, hashing)
-- Careful: per query per operation!
-- Example: 10 concurrent queries × 5 operations = 50 × work_mem
ALTER SYSTEM SET work_mem = '64MB';

-- For specific query:
SET work_mem = '256MB';
SELECT ...;
</code></pre><h4 id="maintenanceworkmem">maintenance_work_mem</h4><pre><code class="language-sql">-- For VACUUM, CREATE INDEX, ALTER TABLE
ALTER SYSTEM SET maintenance_work_mem = '1GB';
</code></pre><h3 id="12-checkpoint-tuning">1.2。チェックポイントの調整_</h3><pre><code class="language-sql">-- How often to checkpoint (time-based)
ALTER SYSTEM SET checkpoint_timeout = '15min';  -- Default: 5min

-- Maximum size of WAL between checkpoints
ALTER SYSTEM SET max_wal_size = '4GB';  -- Default: 1GB
ALTER SYSTEM SET min_wal_size = '1GB';

-- Spread checkpoint I/O over time (0.5 = 50% of checkpoint_timeout)
ALTER SYSTEM SET checkpoint_completion_target = 0.9;

-- Warn if checkpoints happen too frequently
ALTER SYSTEM SET checkpoint_warning = '5min';
</code></pre><h3 id="13-wal-settings">1.3。 WAL 設定_</h3><pre><code class="language-sql">-- WAL buffers (auto-tuned to 1/32 of shared_buffers, max 16MB)
ALTER SYSTEM SET wal_buffers = '16MB';

-- WAL writer delay
ALTER SYSTEM SET wal_writer_delay = '200ms';  -- Default: 200ms

-- Commit delay (group commit optimization)
ALTER SYSTEM SET commit_delay = 0;  -- Microseconds, 0 = disabled
ALTER SYSTEM SET commit_siblings = 5;  -- Minimum concurrent transactions
</code></pre><h3 id="14-query-planner">1.4。クエリ プランナー</h3><pre><code class="language-sql">-- Random page cost (lower for SSD)
ALTER SYSTEM SET random_page_cost = 1.1;  -- Default: 4.0 (HDD)

-- Enable parallel query
ALTER SYSTEM SET max_parallel_workers_per_gather = 4;
ALTER SYSTEM SET max_parallel_workers = 8;
ALTER SYSTEM SET parallel_tuple_cost = 0.1;
ALTER SYSTEM SET parallel_setup_cost = 1000;

-- Join optimization
ALTER SYSTEM SET enable_hashjoin = on;
ALTER SYSTEM SET enable_mergejoin = on;
ALTER SYSTEM SET enable_nestloop = on;
</code></pre><h3 id="15-connection-settings">1.5。接続設定</h3><pre><code class="language-sql">-- Maximum connections (balance with work_mem)
ALTER SYSTEM SET max_connections = 200;

-- Superuser reserved connections
ALTER SYSTEM SET superuser_reserved_connections = 5;

-- Statement timeout (prevent runaway queries)
ALTER SYSTEM SET statement_timeout = '30min';

-- Lock timeout
ALTER SYSTEM SET lock_timeout = '10s';

-- Idle in transaction timeout
ALTER SYSTEM SET idle_in_transaction_session_timeout = '5min';
</code></pre><h3 id="16-autovacuum-tuning">1.6。自動バキューム調整</h3><pre><code class="language-sql">-- Enable autovacuum
ALTER SYSTEM SET autovacuum = on;

-- Number of autovacuum workers
ALTER SYSTEM SET autovacuum_max_workers = 4;

-- Delay between runs
ALTER SYSTEM SET autovacuum_naptime = '1min';

-- Vacuum threshold
ALTER SYSTEM SET autovacuum_vacuum_threshold = 50;
ALTER SYSTEM SET autovacuum_vacuum_scale_factor = 0.1;  -- 10% of table

-- Analyze threshold
ALTER SYSTEM SET autovacuum_analyze_threshold = 50;
ALTER SYSTEM SET autovacuum_analyze_scale_factor = 0.05;  -- 5% of table

-- Vacuum cost delay (throttling)
ALTER SYSTEM SET autovacuum_vacuum_cost_delay = '2ms';
ALTER SYSTEM SET autovacuum_vacuum_cost_limit = 400;
</code></pre><h3 id="17-logging-for-performance">1.7。パフォーマンスのログ</h3><pre><code class="language-sql">-- Log slow queries
ALTER SYSTEM SET log_min_duration_statement = '1000';  -- 1 second

-- Log checkpoints (monitoring)
ALTER SYSTEM SET log_checkpoints = on;

-- Log connections/disconnections
ALTER SYSTEM SET log_connections = off;
ALTER SYSTEM SET log_disconnections = off;

-- Log lock waits
ALTER SYSTEM SET log_lock_waits = on;
ALTER SYSTEM SET deadlock_timeout = '1s';

-- Log temp files
ALTER SYSTEM SET log_temp_files = 10485760;  -- 10MB
</code></pre><h3 id="18-apply-configuration">1.8。構成</h3><pre><code class="language-sql">-- Reload configuration (no restart needed for most)
SELECT pg_reload_conf();

-- Check what requires restart:
SELECT name, setting, pending_restart 
FROM pg_settings 
WHERE pending_restart = true;

-- Restart if needed:
</code></pre><pre><code class="language-bash">sudo systemctl restart patroni
</code></pre><h2 id="2-connection-pooling-with-pgbouncer">2を適用します。 PgBouncer</h2><h3 id="21-why-connection-pooling">2.1 による接続プーリング。接続プーリングを行う理由_</h3><p><strong>プーリングなしの問題</strong>:</p><pre><code class="language-text">Application: 1000 concurrent users
Each user: 1 PostgreSQL connection
PostgreSQL: 1000 connections = HIGH overhead

Each connection = ~10MB RAM + fork overhead
1000 connections = ~10GB RAM wasted!
</code></pre><p><strong>を使用した解決策PgBouncer</strong>:</p><pre><code class="language-text">Application: 1000 concurrent users → PgBouncer
PgBouncer: Pool of 50 connections → PostgreSQL
PostgreSQL: 50 connections = LOW overhead

50 connections = ~500MB RAM ✅
</code></pre><h3 id="22-install-pgbouncer">2.2。 PgBouncer_</h3><pre><code class="language-bash"># Install
sudo apt-get install -y pgbouncer

# Create config directory
sudo mkdir -p /etc/pgbouncer

# Create log directory
sudo mkdir -p /var/log/pgbouncer
sudo chown postgres:postgres /var/log/pgbouncer
</code></pre><h3 id="23-configure-pgbouncer">2.3 をインストールします。 PgBouncer_</h3><pre><code class="language-ini"># /etc/pgbouncer/pgbouncer.ini
[databases]
myapp = host=localhost port=5432 dbname=myapp
postgres = host=localhost port=5432 dbname=postgres

[pgbouncer]
# Listen address
listen_addr = *
listen_port = 6432

# Authentication
auth_type = md5
auth_file = /etc/pgbouncer/userlist.txt

# Admin
admin_users = postgres
stats_users = monitoring

# Pool settings
pool_mode = transaction  # session | transaction | statement
max_client_conn = 1000
default_pool_size = 25
min_pool_size = 10
reserve_pool_size = 5
reserve_pool_timeout = 3

# Connection limits per user/database
max_db_connections = 50
max_user_connections = 50

# Timeouts
server_idle_timeout = 600
server_lifetime = 3600
server_connect_timeout = 15
query_timeout = 0
query_wait_timeout = 120

# Logging
log_connections = 1
log_disconnections = 1
log_pooler_errors = 1
logfile = /var/log/pgbouncer/pgbouncer.log

# Additional
ignore_startup_parameters = extra_float_digits
</code></pre><p><strong>プール モードの説明</strong>:</p><pre><code class="language-text">session mode:
  - Connection assigned to client for entire session
  - Most compatible
  - Least efficient pooling

transaction mode: ✅ RECOMMENDED
  - Connection returned to pool after transaction
  - Good balance of compatibility and efficiency
  - Some features don't work (temp tables, prepared statements)

statement mode:
  - Connection returned after each statement
  - Most efficient
  - Least compatible (no multi-statement transactions)
</code></pre><h3 id="24-user-authentication">2.4 を構成します。ユーザー認証</h3><pre><code class="language-bash"># Create userlist
sudo tee /etc/pgbouncer/userlist.txt &lt;&lt;EOF
"app_user" "md5hashed_password"
"postgres" "md5hashed_password"
EOF

# Generate MD5 hash:
echo -n "passwordusername" | md5sum
# Example: "app_user" "md5abc123..."

# Or use PostgreSQL to generate:
sudo -u postgres psql -c "SELECT 'md5' || md5('password' || 'app_user');"

sudo chmod 600 /etc/pgbouncer/userlist.txt
sudo chown postgres:postgres /etc/pgbouncer/userlist.txt
</code></pre><h3 id="25-start-pgbouncer">2.5。 PgBouncer</h3><pre><code class="language-bash"># Edit systemd service
sudo tee /etc/systemd/system/pgbouncer.service &lt;&lt;EOF
[Unit]
Description=PgBouncer connection pooler
After=network.target

[Service]
Type=forking
User=postgres
ExecStart=/usr/sbin/pgbouncer -d /etc/pgbouncer/pgbouncer.ini
ExecReload=/bin/kill -HUP \$MAINPID
KillSignal=SIGINT
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF

# Start
sudo systemctl daemon-reload
sudo systemctl start pgbouncer
sudo systemctl enable pgbouncer

# Verify
sudo systemctl status pgbouncer
</code></pre><h3 id="26-test-connection">2.6 を起動します。接続をテスト</h3><pre><code class="language-bash"># Connect through PgBouncer
psql -h localhost -p 6432 -U app_user -d myapp

# Check PgBouncer stats
psql -h localhost -p 6432 -U postgres pgbouncer -c "SHOW POOLS;"

# database  | user     | cl_active | cl_waiting | sv_active | sv_idle | sv_used
# ----------+----------+-----------+------------+-----------+---------+---------
# myapp     | app_user |        10 |          0 |         5 |       5 |       0
# postgres  | postgres |         0 |          0 |         0 |       2 |       0

# cl_active: Active client connections
# sv_active: Active server connections
# sv_idle: Idle server connections in pool
</code></pre><h3 id="27-application-configuration">2.7。アプリケーション構成</h3><pre><code class="language-python"># Python example
import psycopg2

# OLD: Direct connection
# conn = psycopg2.connect(
#     host="10.0.1.11",
#     port=5432,
#     database="myapp",
#     user="app_user",
#     password="password"
# )

# NEW: Through PgBouncer ✅
conn = psycopg2.connect(
    host="10.0.1.11",  # PgBouncer host
    port=6432,          # PgBouncer port (not 5432!)
    database="myapp",
    user="app_user",
    password="password"
)
</code></pre><h3 id="28-monitor-pgbouncer">2.8。 PgBouncer_</h3><pre><code class="language-bash"># Admin console
psql -h localhost -p 6432 -U postgres pgbouncer

# Useful commands:
SHOW POOLS;
SHOW DATABASES;
SHOW CLIENTS;
SHOW SERVERS;
SHOW STATS;
SHOW CONFIG;

# Reload config without restart
RELOAD;

# Pause all connections
PAUSE;

# Resume
RESUME;
</code></pre><h2 id="3-load-balancing-with-haproxy">3 を監視します。 HAProxy</h2><h3 id="31-haproxy-architecture">3.1 による負荷分散。 HAProxy アーキテクチャ</h3><pre><code class="language-text">Application Servers
     ↓
   HAProxy (VIP: 10.0.1.100:5432)
     ↓
     ├─→ node1 (Primary - Write) :5432
     ├─→ node2 (Replica - Read)  :5432
     └─→ node3 (Replica - Read)  :5432

Write traffic → Primary only
Read traffic → Round-robin across replicas
</code></pre><h3 id="32-install-haproxy">3.2。 HAProxy</h3><pre><code class="language-bash">sudo apt-get install -y haproxy

# Verify version
haproxy -v
</code></pre><h3 id="33-configure-haproxy">3.3 をインストールします。 HAProxy を構成します</h3><pre><code class="language-bash"># /etc/haproxy/haproxy.cfg
sudo tee /etc/haproxy/haproxy.cfg &lt;&lt;'EOF'
global
    log /dev/log local0
    log /dev/log local1 notice
    chroot /var/lib/haproxy
    stats socket /run/haproxy/admin.sock mode 660 level admin
    stats timeout 30s
    user haproxy
    group haproxy
    daemon

defaults
    log     global
    mode    tcp
    option  tcplog
    option  dontlognull
    timeout connect 5000
    timeout client  50000
    timeout server  50000

# Stats page
listen stats
    mode http
    bind *:7000
    stats enable
    stats uri /
    stats refresh 10s
    stats admin if TRUE

# Frontend for write (primary)
frontend postgres_write
    bind *:5000
    mode tcp
    default_backend postgres_primary

# Backend for primary (writes)
backend postgres_primary
    mode tcp
    option httpchk
    http-check expect status 200
    default-server inter 3s fall 3 rise 2 on-marked-down shutdown-sessions
    server node1 10.0.1.11:5432 check port 8008 check-ssl verify none
    server node2 10.0.1.12:5432 check port 8008 check-ssl verify none backup
    server node3 10.0.1.13:5432 check port 8008 check-ssl verify none backup

# Frontend for read (replicas)
frontend postgres_read
    bind *:5001
    mode tcp
    default_backend postgres_replicas

# Backend for replicas (reads)
backend postgres_replicas
    mode tcp
    balance roundrobin
    option httpchk
    http-check expect status 200
    http-check send meth GET uri /replica
    default-server inter 3s fall 3 rise 2
    server node2 10.0.1.12:5432 check port 8008 check-ssl verify none
    server node3 10.0.1.13:5432 check port 8008 check-ssl verify none
    server node1 10.0.1.11:5432 check port 8008 check-ssl verify none backup
EOF
</code></pre><p><strong>構成の説明</strong>:</p><pre><code class="language-text">Port 5000: Write traffic → Primary node
  - Health check: Patroni REST API port 8008
  - If primary fails, backup (replica) can take over
  - Backup = only used if primary down

Port 5001: Read traffic → Replicas (round-robin)
  - Health check: /replica endpoint
  - Primary as backup (if all replicas down)
  - Load balanced across healthy replicas

Port 7000: HAProxy stats page
</code></pre><h3 id="34-patroni-rest-api-endpoints-for-health-checks">3.4。ヘルスチェック用の Patroni REST API エンドポイント_</h3><pre><code class="language-bash"># Check if node is leader
curl http://10.0.1.11:8008/leader
# Returns 200 if leader, 503 if not

# Check if node is replica
curl http://10.0.1.12:8008/replica
# Returns 200 if replica, 503 if not

# Check if node is running (any role)
curl http://10.0.1.11:8008/health
# Returns 200 if running

# Master endpoint (redirects to current leader)
curl http://10.0.1.11:8008/master
</code></pre><h3 id="35-start-haproxy">3.5。 HAProxy</h3><pre><code class="language-bash"># Test configuration
sudo haproxy -c -f /etc/haproxy/haproxy.cfg

# Start
sudo systemctl restart haproxy
sudo systemctl enable haproxy

# Check status
sudo systemctl status haproxy

# View logs
sudo journalctl -u haproxy -f
</code></pre><h3 id="36-test-load-balancing">3.6 を開始します。負荷分散</h3><pre><code class="language-bash"># Test write endpoint (should connect to primary)
psql -h localhost -p 5000 -U app_user -d myapp -c "SELECT pg_is_in_recovery();"
# pg_is_in_recovery
# ------------------
#  f                 ← false = PRIMARY ✅

# Test read endpoint (should connect to replica)
psql -h localhost -p 5001 -U app_user -d myapp -c "SELECT pg_is_in_recovery();"
# pg_is_in_recovery
# ------------------
#  t                 ← true = REPLICA ✅

# Multiple reads should round-robin:
for i in {1..10}; do
  psql -h localhost -p 5001 -U app_user -d myapp -c "SELECT inet_server_addr();" -t
done
# Should see different IPs rotating
</code></pre><h3 id="37-application-usage">3.7 をテストします。アプリケーションの使用法</h3><pre><code class="language-python"># Application code with read/write split

# Write connection (primary only)
write_conn = psycopg2.connect(
    host="haproxy-host",
    port=5000,  # Write port
    database="myapp",
    user="app_user"
)

# Read connection (replicas)
read_conn = psycopg2.connect(
    host="haproxy-host",
    port=5001,  # Read port
    database="myapp",
    user="app_user"
)

# Writes
write_conn.cursor().execute("INSERT INTO users ...")
write_conn.commit()

# Reads (load balanced)
cursor = read_conn.cursor()
cursor.execute("SELECT * FROM users WHERE ...")
results = cursor.fetchall()
</code></pre><h3 id="38-monitor-haproxy">3.8。 HAProxy</h3><pre><code class="language-bash"># Access stats page
# http://haproxy-host:7000/

# Shows:
# - Backend status (UP/DOWN)
# - Current connections
# - Requests per second
# - Health check results
# - Traffic distribution
</code></pre><h2 id="4-read-scaling-strategies">4 を監視します。スケーリング戦略</h2><h3 id="41-add-more-read-replicas">4.1 を参照してください。リードレプリカをさらに追加</h3><pre><code class="language-bash"># Add 4th node as read replica
# On node4:

# Install PostgreSQL + Patroni (same as before)
# Configure patroni.yml with tags:

tags:
  nofailover: true  # Don't promote to primary
  noloadbalance: false  # Include in load balancing
  priority: 0  # Lowest priority

# Start Patroni
sudo systemctl start patroni

# Verify joined cluster
patronictl list postgres
</code></pre><pre><code class="language-text">Before (3 nodes):
Write: 100% → Primary
Read:  50% → Replica1, 50% → Replica2

After (4 nodes):
Write: 100% → Primary
Read:  33% → Replica1, 33% → Replica2, 33% → Replica3 ✅
</code></pre><h3 id="42-cascading-replication">4.2。カスケード レプリケーション</h3><pre><code class="language-yaml"># For geographically distributed replicas
# node4 (remote datacenter) replicates from node2 instead of primary

# In node4's patroni.yml:
bootstrap:
  dcs:
    postgresql:
      parameters:
        primary_conninfo: 'host=node2 port=5432 user=replicator...'
</code></pre><pre><code class="language-text">Topology:
Primary (node1)
  ↓
  ├─→ Replica (node2)
  │     ↓
  │     └─→ Replica (node4 - cascading) ← Reduces load on primary
  └─→ Replica (node3)
</code></pre><h3 id="43-application-level-read-routing">4.3。応用イオンレベルの読み取りルーティング</h3><pre><code class="language-python"># Smart routing based on query type

class DatabaseRouter:
    def __init__(self):
        self.write_pool = create_pool(host='haproxy', port=5000)
        self.read_pool = create_pool(host='haproxy', port=5001)
    
    def execute(self, query):
        # Parse query to determine read vs write
        if query.upper().startswith(('SELECT', 'WITH')):
            return self.read_pool.execute(query)
        else:
            return self.write_pool.execute(query)
</code></pre><h3 id="44-monitoring-read-distribution">4.4。読み取り分布のモニタリング_</h3><pre><code class="language-sql">-- On each replica, check query load
SELECT count(*) 
FROM pg_stat_activity 
WHERE state = 'active';

-- Track queries per replica
SELECT pg_stat_statements.query,
       calls,
       total_exec_time,
       mean_exec_time
FROM pg_stat_statements
ORDER BY calls DESC
LIMIT 20;
</code></pre><h2 id="5-query-optimization">5。クエリの最適化_</h2><h3 id="51-enable-pgstatstatements">5.1。 pg_stat_statements_</h3><pre><code class="language-sql">-- Add to postgresql.conf
ALTER SYSTEM SET shared_preload_libraries = 'pg_stat_statements';

-- Restart required
</code></pre><pre><code class="language-bash">sudo systemctl restart patroni
</code></pre><pre><code class="language-sql">-- Create extension
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- View top queries by time
SELECT query,
       calls,
       total_exec_time,
       mean_exec_time,
       max_exec_time
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 20;
</code></pre><h3 id="52-identify-slow-queries">5.2 を有効にします。遅いクエリを特定します_</h3><pre><code class="language-sql">-- Currently running slow queries
SELECT pid,
       now() - query_start AS duration,
       state,
       wait_event,
       query
FROM pg_stat_activity
WHERE state = 'active'
  AND now() - query_start &gt; interval '10 seconds'
ORDER BY duration DESC;

-- Queries with high mean time
SELECT query,
       calls,
       mean_exec_time / 1000 AS mean_time_seconds,
       (total_exec_time / 1000 / 3600) AS total_hours
FROM pg_stat_statements
WHERE mean_exec_time &gt; 1000  -- &gt; 1 second
ORDER BY mean_exec_time DESC
LIMIT 20;
</code></pre><h3 id="53-explain-analyze">5.3。分析</h3>___コードブロック_41___<h3 id="54-create-indexes">5.4の説明。インデックスを作成します_</h3><pre><code class="language-sql">-- Index for WHERE clause
CREATE INDEX CONCURRENTLY idx_users_created_at 
ON users(created_at);

-- Index for JOIN
CREATE INDEX CONCURRENTLY idx_orders_user_id 
ON orders(user_id);

-- Composite index
CREATE INDEX CONCURRENTLY idx_orders_user_date 
ON orders(user_id, order_date);

-- Partial index (for filtered queries)
CREATE INDEX CONCURRENTLY idx_active_users 
ON users(created_at) 
WHERE status = 'active';

-- CONCURRENTLY = no table lock ✅
</code></pre><h3 id="55-index-maintenance">5.5。インデックスのメンテナンス</h3><pre><code class="language-sql">-- Find unused indexes
SELECT schemaname, tablename, indexname, idx_scan
FROM pg_stat_user_indexes
WHERE idx_scan = 0
  AND indexname NOT LIKE '%_pkey'
ORDER BY pg_relation_size(indexrelid) DESC;

-- Find duplicate indexes
SELECT pg_size_pretty(SUM(pg_relation_size(idx))::BIGINT) AS size,
       (array_agg(idx))[1] AS idx1,
       (array_agg(idx))[2] AS idx2
FROM (
    SELECT indexrelid::regclass AS idx,
           indrelid,
           (indcollation, indclass, indkey, indexprs, indpred) AS key
    FROM pg_index
) sub
GROUP BY indrelid, key
HAVING COUNT(*) &gt; 1
ORDER BY SUM(pg_relation_size(idx)) DESC;

-- Rebuild bloated indexes
REINDEX INDEX CONCURRENTLY idx_name;
</code></pre><h2 id="6-best-practices">6。ベスト プラクティス</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>保守的な設定から開始</strong>&nbsp;- 段階的に調整</li><li><strong>事前に監視するafter_</strong>&nbsp;- 変更の影響を測定_</li><li><strong>接続プーリングを使用</strong>&nbsp;- Web アプリケーションに必須</li><li><strong>読み取りと書き込みを分離トラフィック_</strong>&nbsp;- 読み取りを個別にスケール_</li><li><strong>適切なインデックスを作成</strong>&nbsp;- クエリパターンに基づいて</li><li><strong>通常のVACUUM</strong>&nbsp;-テーブル統計を最新の状態に保つ</li><li><strong>EXPLAIN ANALYZEを使用</strong>&nbsp;- クエリの実行を理解する</li><li><strong>statement_timeoutを設定</strong>&nbsp;- 暴走を防ぐクエリ_</li><li><strong>プールの飽和状態を監視</strong>&nbsp;- 必要に応じて PgBouncer をスケール</li><li><strong>テスト構成の変更</strong>&nbsp;- ステージング中first</li></ol><h3 id="%E2%9D%8C-dont">❌ 禁止</h3><ol><li><strong>work_mem</strong>&nbsp;- 最大値を乗算します接続!_</li><li><strong>インデックスを作成しすぎない_</strong>&nbsp;- 書き込み速度を下げる_</li><li><strong>自動バキュームを無視しない</strong>&nbsp;-肥大化_</li><li><strong>接続プーリングをスキップしない</strong>&nbsp;- 接続オーバーヘッドが問題になる</li><li><strong>セッションプーリングを使用しない_</strong>&nbsp;- トランザクションモードより良い_</li><li><strong>分析を忘れない</strong>&nbsp;- 古い統計 = 悪い計画</li><li><strong>盲目的に調整しない</strong>&nbsp;- 自分の現状を理解する変更_</li><li><strong>shared_buffers を高く設定しすぎないでください</strong>&nbsp;- 25% 以上の RAM が無駄になります</li></ol><h2 id="7-lab-exercises">7。ラボ演習</h2><h3 id="lab-1-postgresql-tuning">ラボ 1: PostgreSQL のチューニング</h3><p><strong>タスク</strong>:</p><ol><li>現在のパフォーマンスをベンチマークするpgbench</li><li>メモリ設定の調整 (shared_buffers、work_mem)</li><li>チェックポイント設定の調整</li><li>pgbench と c を再実行します結果の比較_</li><li>ドキュメントの改善</li></ol><h3 id="lab-2-setup-pgbouncer">ラボ 2: セットアップPgBouncer</h3><p><strong>タスク</strong>:</p><ol><li>プライマリ ノードへの PgBouncer のインストール</li><li>トランザクションの構成プーリング</li><li>PgBouncer を使用するようにアプリケーションを更新</li><li>接続数の監視 (前/後)</li><li>負荷テストと改善の測定</li></ol><h3 id="lab-3-haproxy-load-balancing">ラボ 3: HAProxy 負荷バランス</h3><p><strong>タスク</strong>:</p><ol><li>HAProxyのインストールと構成_</li><li>書き込みおよび読み取りエンドポイントのセットアップ</li><li>テストルーティング (書き込み→プライマリ、読み取り→レプリカ)</li><li>フェイルオーバーのシミュレーション、HAProxy の適応の確認_</li><li>トラフィック分散の監視</li></ol><h3 id="lab-4-query-optimization">ラボ 4: クエリ最適化_</h3><p><strong>タスク</strong>:</p><ol><li>pg_stat_statements を有効にする</li><li>サンプル ワークロードを実行</li><li>トップを特定最も遅い 10 のクエリ_</li><li>EXPLAIN ANALYZE を使用して計画を理解</li><li>最適化するためのインデックスを作成</li><li>改善を測定</li></ol><h2 id="8-t%E1%BB%95ng-k%E1%BA%BFt">8。概要_</h2><h3 id="performance-tuning-checklist">パフォーマンス調整チェックリスト</h3><ul><li>&nbsp;shared_buffers を調整します (25% RAM)</li><li>&nbsp;effect_cache_size を設定します (50 ～ 75%) RAM)</li><li>&nbsp;work_mem を慎重に調整</li><li>&nbsp;チェックポイントを最適化</li><li>&nbsp;SSD の Random_page_cost を下げる</li><li>&nbsp;有効にするpg_stat_statements</li><li>&nbsp;PgBouncer 接続プーリングのセットアップ</li><li>&nbsp;HAProxy ロード バランシングの構成</li><li>&nbsp;に基づいてインデックスを作成クエリ_</li><li>&nbsp;監視と反復_</li></ul><h3 id="key-concepts">重要な概念</h3><p>✅&nbsp;<strong>接続プール</strong>&nbsp;- 接続を削減します大幅なオーバーヘッド</p><p>✅&nbsp;<strong>ロードバランシング</strong>&nbsp;- レプリカ間で読み取りトラフィックを分散</p><p>✅&nbsp;<strong>Readスケーリング</strong>&nbsp;- 読み取り負荷を処理するためのレプリカの追加</p><p>✅&nbsp;<strong>クエリの最適化</strong>&nbsp;- インデックス + EXPLAIN分析</p><p>✅&nbsp;<strong>構成のチューニング</strong>&nbsp;- メモリ、I/O、CPU のバランス</p><h3 id="next-steps">次のステップ</h3><p>レッスン 19 では、カバー&nbsp;<strong>ログとトラブルシューティング</strong>:</p><ul><li>PostgreSQL ログ分析</li><li>Patroni ログ解釈_</li><li>etcd のトラブル撮影_</li><li>一般的な問題と解決策</li><li>デバッグ手法とツール_</li></ul>