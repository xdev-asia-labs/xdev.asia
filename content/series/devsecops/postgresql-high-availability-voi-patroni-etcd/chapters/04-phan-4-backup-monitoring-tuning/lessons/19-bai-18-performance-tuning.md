---
id: 019c9617-fb98-7319-877d-16408c323ce3
title: 'Bài 18: Performance Tuning'
slug: bai-18-performance-tuning
description: >-
  Tối ưu PostgreSQL configuration, triển khai connection pooling (PgBouncer),
  load balancing (HAProxy) và scaling read replicas.
duration_minutes: 130
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 4: Backup, Monitoring & Tuning"
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---
<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Optimize PostgreSQL configuration cho HA cluster</li><li>Setup connection pooling với PgBouncer</li><li>Implement load balancing với HAProxy</li><li>Scale reads với multiple replicas</li><li>Tune queries và indexes</li><li>Monitor và troubleshoot performance issues</li></ul><h2 id="1-postgresql-configuration-tuning">1. PostgreSQL Configuration Tuning</h2><h3 id="11-memory-settings">1.1. Memory settings</h3><h4 id="sharedbuffers">shared_buffers</h4><pre><code class="language-sql">-- Recommended: 25% of total RAM
-- Example for 16GB RAM server:
ALTER SYSTEM SET shared_buffers = '4GB';

-- Check current:
SHOW shared_buffers;
</code></pre><h4 id="effectivecachesize">effective_cache_size</h4><pre><code class="language-sql">-- Recommended: 50-75% of total RAM
-- Tells planner how much memory available for caching
ALTER SYSTEM SET effective_cache_size = '12GB';
</code></pre><h4 id="workmem">work_mem</h4><pre><code class="language-sql">-- Per-operation memory (sorting, hashing)
-- Careful: per query per operation!
-- Example: 10 concurrent queries × 5 operations = 50 × work_mem
ALTER SYSTEM SET work_mem = '64MB';

-- For specific query:
SET work_mem = '256MB';
SELECT ...;
</code></pre><h4 id="maintenanceworkmem">maintenance_work_mem</h4><pre><code class="language-sql">-- For VACUUM, CREATE INDEX, ALTER TABLE
ALTER SYSTEM SET maintenance_work_mem = '1GB';
</code></pre><h3 id="12-checkpoint-tuning">1.2. Checkpoint tuning</h3><pre><code class="language-sql">-- How often to checkpoint (time-based)
ALTER SYSTEM SET checkpoint_timeout = '15min';  -- Default: 5min

-- Maximum size of WAL between checkpoints
ALTER SYSTEM SET max_wal_size = '4GB';  -- Default: 1GB
ALTER SYSTEM SET min_wal_size = '1GB';

-- Spread checkpoint I/O over time (0.5 = 50% of checkpoint_timeout)
ALTER SYSTEM SET checkpoint_completion_target = 0.9;

-- Warn if checkpoints happen too frequently
ALTER SYSTEM SET checkpoint_warning = '5min';
</code></pre><h3 id="13-wal-settings">1.3. WAL settings</h3><pre><code class="language-sql">-- WAL buffers (auto-tuned to 1/32 of shared_buffers, max 16MB)
ALTER SYSTEM SET wal_buffers = '16MB';

-- WAL writer delay
ALTER SYSTEM SET wal_writer_delay = '200ms';  -- Default: 200ms

-- Commit delay (group commit optimization)
ALTER SYSTEM SET commit_delay = 0;  -- Microseconds, 0 = disabled
ALTER SYSTEM SET commit_siblings = 5;  -- Minimum concurrent transactions
</code></pre><h3 id="14-query-planner">1.4. Query planner</h3><pre><code class="language-sql">-- Random page cost (lower for SSD)
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
</code></pre><h3 id="15-connection-settings">1.5. Connection settings</h3><pre><code class="language-sql">-- Maximum connections (balance with work_mem)
ALTER SYSTEM SET max_connections = 200;

-- Superuser reserved connections
ALTER SYSTEM SET superuser_reserved_connections = 5;

-- Statement timeout (prevent runaway queries)
ALTER SYSTEM SET statement_timeout = '30min';

-- Lock timeout
ALTER SYSTEM SET lock_timeout = '10s';

-- Idle in transaction timeout
ALTER SYSTEM SET idle_in_transaction_session_timeout = '5min';
</code></pre><h3 id="16-autovacuum-tuning">1.6. Autovacuum tuning</h3><pre><code class="language-sql">-- Enable autovacuum
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
</code></pre><h3 id="17-logging-for-performance">1.7. Logging for performance</h3><pre><code class="language-sql">-- Log slow queries
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
</code></pre><h3 id="18-apply-configuration">1.8. Apply configuration</h3><pre><code class="language-sql">-- Reload configuration (no restart needed for most)
SELECT pg_reload_conf();

-- Check what requires restart:
SELECT name, setting, pending_restart 
FROM pg_settings 
WHERE pending_restart = true;

-- Restart if needed:
</code></pre><pre><code class="language-bash">sudo systemctl restart patroni
</code></pre><h2 id="2-connection-pooling-with-pgbouncer">2. Connection Pooling with PgBouncer</h2><h3 id="21-why-connection-pooling">2.1. Why connection pooling?</h3><p><strong>Problem without pooling</strong>:</p><pre><code class="language-text">Application: 1000 concurrent users
Each user: 1 PostgreSQL connection
PostgreSQL: 1000 connections = HIGH overhead

Each connection = ~10MB RAM + fork overhead
1000 connections = ~10GB RAM wasted!
</code></pre><p><strong>Solution with PgBouncer</strong>:</p><pre><code class="language-text">Application: 1000 concurrent users → PgBouncer
PgBouncer: Pool of 50 connections → PostgreSQL
PostgreSQL: 50 connections = LOW overhead

50 connections = ~500MB RAM ✅
</code></pre><h3 id="22-install-pgbouncer">2.2. Install PgBouncer</h3><pre><code class="language-bash"># Install
sudo apt-get install -y pgbouncer

# Create config directory
sudo mkdir -p /etc/pgbouncer

# Create log directory
sudo mkdir -p /var/log/pgbouncer
sudo chown postgres:postgres /var/log/pgbouncer
</code></pre><h3 id="23-configure-pgbouncer">2.3. Configure PgBouncer</h3><pre><code class="language-ini"># /etc/pgbouncer/pgbouncer.ini
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
</code></pre><p><strong>Pool modes explained</strong>:</p><pre><code class="language-text">session mode:
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
</code></pre><h3 id="24-user-authentication">2.4. User authentication</h3><pre><code class="language-bash"># Create userlist
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
</code></pre><h3 id="25-start-pgbouncer">2.5. Start PgBouncer</h3><pre><code class="language-bash"># Edit systemd service
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
</code></pre><h3 id="26-test-connection">2.6. Test connection</h3><pre><code class="language-bash"># Connect through PgBouncer
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
</code></pre><h3 id="27-application-configuration">2.7. Application configuration</h3><pre><code class="language-python"># Python example
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
</code></pre><h3 id="28-monitor-pgbouncer">2.8. Monitor PgBouncer</h3><pre><code class="language-bash"># Admin console
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
</code></pre><h2 id="3-load-balancing-with-haproxy">3. Load Balancing with HAProxy</h2><h3 id="31-haproxy-architecture">3.1. HAProxy architecture</h3><pre><code class="language-text">Application Servers
     ↓
   HAProxy (VIP: 10.0.1.100:5432)
     ↓
     ├─→ node1 (Primary - Write) :5432
     ├─→ node2 (Replica - Read)  :5432
     └─→ node3 (Replica - Read)  :5432

Write traffic → Primary only
Read traffic → Round-robin across replicas
</code></pre><h3 id="32-install-haproxy">3.2. Install HAProxy</h3><pre><code class="language-bash">sudo apt-get install -y haproxy

# Verify version
haproxy -v
</code></pre><h3 id="33-configure-haproxy">3.3. Configure HAProxy</h3><pre><code class="language-bash"># /etc/haproxy/haproxy.cfg
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
</code></pre><p><strong>Configuration explained</strong>:</p><pre><code class="language-text">Port 5000: Write traffic → Primary node
  - Health check: Patroni REST API port 8008
  - If primary fails, backup (replica) can take over
  - Backup = only used if primary down

Port 5001: Read traffic → Replicas (round-robin)
  - Health check: /replica endpoint
  - Primary as backup (if all replicas down)
  - Load balanced across healthy replicas

Port 7000: HAProxy stats page
</code></pre><h3 id="34-patroni-rest-api-endpoints-for-health-checks">3.4. Patroni REST API endpoints for health checks</h3><pre><code class="language-bash"># Check if node is leader
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
</code></pre><h3 id="35-start-haproxy">3.5. Start HAProxy</h3><pre><code class="language-bash"># Test configuration
sudo haproxy -c -f /etc/haproxy/haproxy.cfg

# Start
sudo systemctl restart haproxy
sudo systemctl enable haproxy

# Check status
sudo systemctl status haproxy

# View logs
sudo journalctl -u haproxy -f
</code></pre><h3 id="36-test-load-balancing">3.6. Test load balancing</h3><pre><code class="language-bash"># Test write endpoint (should connect to primary)
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
</code></pre><h3 id="37-application-usage">3.7. Application usage</h3><pre><code class="language-python"># Application code with read/write split

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
</code></pre><h3 id="38-monitor-haproxy">3.8. Monitor HAProxy</h3><pre><code class="language-bash"># Access stats page
# http://haproxy-host:7000/

# Shows:
# - Backend status (UP/DOWN)
# - Current connections
# - Requests per second
# - Health check results
# - Traffic distribution
</code></pre><h2 id="4-read-scaling-strategies">4. Read Scaling Strategies</h2><h3 id="41-add-more-read-replicas">4.1. Add more read replicas</h3><pre><code class="language-bash"># Add 4th node as read replica
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
</code></pre><h3 id="42-cascading-replication">4.2. Cascading replication</h3><pre><code class="language-yaml"># For geographically distributed replicas
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
</code></pre><h3 id="43-application-level-read-routing">4.3. Application-level read routing</h3><pre><code class="language-python"># Smart routing based on query type

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
</code></pre><h3 id="44-monitoring-read-distribution">4.4. Monitoring read distribution</h3><pre><code class="language-sql">-- On each replica, check query load
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
</code></pre><h2 id="5-query-optimization">5. Query Optimization</h2><h3 id="51-enable-pgstatstatements">5.1. Enable pg_stat_statements</h3><pre><code class="language-sql">-- Add to postgresql.conf
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
</code></pre><h3 id="52-identify-slow-queries">5.2. Identify slow queries</h3><pre><code class="language-sql">-- Currently running slow queries
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
</code></pre><h3 id="53-explain-analyze">5.3. EXPLAIN ANALYZE</h3><pre><code class="language-sql">-- Analyze query execution plan
EXPLAIN ANALYZE
SELECT u.*, o.order_date
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE u.created_at &gt; '2024-01-01';

-- Look for:
-- ❌ Sequential Scan (should be Index Scan)
-- ❌ High cost
-- ❌ High actual time
-- ❌ Rows mismatch (estimated vs actual)
</code></pre><h3 id="54-create-indexes">5.4. Create indexes</h3><pre><code class="language-sql">-- Index for WHERE clause
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
</code></pre><h3 id="55-index-maintenance">5.5. Index maintenance</h3><pre><code class="language-sql">-- Find unused indexes
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
</code></pre><h2 id="6-best-practices">6. Best Practices</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>Start with conservative settings</strong>&nbsp;- Tune incrementally</li><li><strong>Monitor before and after</strong>&nbsp;- Measure impact of changes</li><li><strong>Use connection pooling</strong>&nbsp;- Essential for web applications</li><li><strong>Separate read and write traffic</strong>&nbsp;- Scale reads independently</li><li><strong>Create appropriate indexes</strong>&nbsp;- Based on query patterns</li><li><strong>Regular VACUUM</strong>&nbsp;- Keep table statistics updated</li><li><strong>Use EXPLAIN ANALYZE</strong>&nbsp;- Understand query execution</li><li><strong>Set statement_timeout</strong>&nbsp;- Prevent runaway queries</li><li><strong>Monitor pool saturation</strong>&nbsp;- Scale PgBouncer if needed</li><li><strong>Test configuration changes</strong>&nbsp;- In staging first</li></ol><h3 id="%E2%9D%8C-dont">❌ DON'T</h3><ol><li><strong>Don't over-allocate work_mem</strong>&nbsp;- Multiply by max connections!</li><li><strong>Don't create too many indexes</strong>&nbsp;- Slow down writes</li><li><strong>Don't ignore autovacuum</strong>&nbsp;- Will cause bloat</li><li><strong>Don't skip connection pooling</strong>&nbsp;- Connection overhead hurts</li><li><strong>Don't use session pooling</strong>&nbsp;- Transaction mode better</li><li><strong>Don't forget to analyze</strong>&nbsp;- Stale statistics = bad plans</li><li><strong>Don't tune blindly</strong>&nbsp;- Understand what you're changing</li><li><strong>Don't set shared_buffers too high</strong>&nbsp;- &gt;25% RAM wasteful</li></ol><h2 id="7-lab-exercises">7. Lab Exercises</h2><h3 id="lab-1-postgresql-tuning">Lab 1: PostgreSQL tuning</h3><p><strong>Tasks</strong>:</p><ol><li>Benchmark current performance with pgbench</li><li>Tune memory settings (shared_buffers, work_mem)</li><li>Tune checkpoint settings</li><li>Re-run pgbench and compare results</li><li>Document improvements</li></ol><h3 id="lab-2-setup-pgbouncer">Lab 2: Setup PgBouncer</h3><p><strong>Tasks</strong>:</p><ol><li>Install PgBouncer on primary node</li><li>Configure transaction pooling</li><li>Update application to use PgBouncer</li><li>Monitor connection counts (before/after)</li><li>Load test and measure improvement</li></ol><h3 id="lab-3-haproxy-load-balancing">Lab 3: HAProxy load balancing</h3><p><strong>Tasks</strong>:</p><ol><li>Install and configure HAProxy</li><li>Setup write and read endpoints</li><li>Test routing (write→primary, read→replicas)</li><li>Simulate failover, verify HAProxy adapts</li><li>Monitor traffic distribution</li></ol><h3 id="lab-4-query-optimization">Lab 4: Query optimization</h3><p><strong>Tasks</strong>:</p><ol><li>Enable pg_stat_statements</li><li>Run sample workload</li><li>Identify top 10 slowest queries</li><li>Use EXPLAIN ANALYZE to understand plans</li><li>Create indexes to optimize</li><li>Measure improvement</li></ol><h2 id="8-t%E1%BB%95ng-k%E1%BA%BFt">8. Tổng kết</h2><h3 id="performance-tuning-checklist">Performance Tuning Checklist</h3><ul><li>&nbsp;Tune shared_buffers (25% RAM)</li><li>&nbsp;Set effective_cache_size (50-75% RAM)</li><li>&nbsp;Adjust work_mem carefully</li><li>&nbsp;Optimize checkpoints</li><li>&nbsp;Lower random_page_cost for SSD</li><li>&nbsp;Enable pg_stat_statements</li><li>&nbsp;Setup PgBouncer connection pooling</li><li>&nbsp;Configure HAProxy load balancing</li><li>&nbsp;Create indexes based on queries</li><li>&nbsp;Monitor and iterate</li></ul><h3 id="key-concepts">Key Concepts</h3><p>✅&nbsp;<strong>Connection Pooling</strong>&nbsp;- Reduces connection overhead dramatically</p><p>✅&nbsp;<strong>Load Balancing</strong>&nbsp;- Distributes read traffic across replicas</p><p>✅&nbsp;<strong>Read Scaling</strong>&nbsp;- Add replicas to handle read load</p><p>✅&nbsp;<strong>Query Optimization</strong>&nbsp;- Indexes + EXPLAIN ANALYZE</p><p>✅&nbsp;<strong>Configuration Tuning</strong>&nbsp;- Balance memory, I/O, and CPU</p><h3 id="next-steps">Next Steps</h3><p>Bài 19 sẽ cover&nbsp;<strong>Logging và Troubleshooting</strong>:</p><ul><li>PostgreSQL log analysis</li><li>Patroni log interpretation</li><li>etcd troubleshooting</li><li>Common issues and solutions</li><li>Debug techniques and tool</li></ul>
