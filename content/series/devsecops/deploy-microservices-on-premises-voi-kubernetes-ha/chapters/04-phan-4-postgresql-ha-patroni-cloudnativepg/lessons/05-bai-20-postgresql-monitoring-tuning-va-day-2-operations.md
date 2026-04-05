---
id: 019e1a00-aa01-7001-c001-k8sha000405
title: 'BÀI 20: POSTGRESQL MONITORING, TUNING VÀ DAY-2 OPERATIONS'
slug: bai-20-postgresql-monitoring-tuning-va-day-2-operations
description: >-
  Setup pg_stat_statements, Prometheus metrics, Grafana dashboards,
  vacuum tuning, connection pooling optimization, và Day-2 operations
  cho PostgreSQL HA trên Kubernetes.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 20
section_title: 'Phần 4: PostgreSQL HA với Patroni & CloudNativePG'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7944" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7944)"/>

  <!-- Decorations -->
  <g>
    <circle cx="662" cy="136" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="724" cy="258" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="786" cy="120" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="848" cy="242" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="910" cy="104" r="14" fill="#f87171" opacity="0.05"/>
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — Bài 20</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">BÀI 20: POSTGRESQL MONITORING, TUNING VÀ</tspan>
      <tspan x="60" dy="42">DAY-2 OPERATIONS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises với Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: PostgreSQL HA với Patroni &amp; CloudNativePG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Setup pg_stat_statements cho query analysis</li>
<li>✅ Deploy Prometheus monitoring cho PostgreSQL</li>
<li>✅ Build Grafana dashboards cho PG metrics</li>
<li>✅ Vacuum tuning và autovacuum configuration</li>
<li>✅ Connection pooling optimization với PgBouncer</li>
<li>✅ Day-2 operations: scaling, minor upgrade, major upgrade</li>
</ul>

<hr>

<h2 id="phan-1-pg-stat-statements">PHẦN 1: pg_stat_statements — QUERY ANALYSIS</h2>

<h3 id="11-enable">1.1. Kích hoạt pg_stat_statements</h3>
<pre><code class="language-yaml"># Đã enable trong Cluster CRD (Bài 17):
# postgresql:
#   shared_preload_libraries:
#     - "pg_stat_statements"
#   pg_stat_statements.max: "10000"
#   pg_stat_statements.track: "all"

# Verify:
kubectl -n database exec production-pg-1 -- psql -U postgres -d appdb -c \
  "CREATE EXTENSION IF NOT EXISTS pg_stat_statements;"

kubectl -n database exec production-pg-1 -- psql -U postgres -d appdb -c \
  "SHOW shared_preload_libraries;"
# shared_preload_libraries
# pg_stat_statements
</code></pre>

<h3 id="12-top-queries">1.2. Top Slow Queries</h3>
<pre><code class="language-sql">-- Top 10 queries by total time:
SELECT 
  queryid,
  LEFT(query, 80) AS query_preview,
  calls,
  round(total_exec_time::numeric, 2) AS total_time_ms,
  round(mean_exec_time::numeric, 2) AS mean_time_ms,
  round((100.0 * total_exec_time / 
    NULLIF(sum(total_exec_time) OVER(), 0))::numeric, 2) AS pct_total,
  rows
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 10;

-- Top I/O intensive queries:
SELECT 
  LEFT(query, 80),
  calls,
  shared_blks_read + shared_blks_hit AS total_blocks,
  round(100.0 * shared_blks_hit / 
    NULLIF(shared_blks_read + shared_blks_hit, 0), 2) AS cache_hit_pct
FROM pg_stat_statements
ORDER BY shared_blks_read DESC
LIMIT 10;

-- Reset stats (periodic):
SELECT pg_stat_statements_reset();
</code></pre>

<hr>

<h2 id="phan-2-prometheus">PHẦN 2: PROMETHEUS MONITORING</h2>

<h3 id="21-metrics">2.1. CloudNativePG Built-in Metrics</h3>
<pre><code class="language-yaml"># CloudNativePG tự expose metrics tại :9187/metrics
# Metrics chính:

# cnpg_backends_total — Số connections hiện tại
# cnpg_backends_waiting_total — Connections đang wait
# cnpg_pg_database_size_bytes — Database size
# cnpg_pg_stat_replication_lag — Replication lag bytes
# cnpg_pg_postmaster_start_time — PG start time
# cnpg_collector_up — Collector health
# cnpg_pg_stat_user_tables_n_dead_tup — Dead tuples (vacuum)
# cnpg_pg_stat_bgwriter_buffers_checkpoint — Checkpoint rate
</code></pre>

<h3 id="22-podmonitor">2.2. PodMonitor cho Prometheus</h3>
<pre><code class="language-yaml">apiVersion: monitoring.coreos.com/v1
kind: PodMonitor
metadata:
  name: postgresql-monitor
  namespace: database
spec:
  selector:
    matchLabels:
      cnpg.io/cluster: production-pg
  podMetricsEndpoints:
    - port: metrics
      interval: 15s
      path: /metrics
</code></pre>

<h3 id="23-custom-queries">2.3. Custom Metrics Queries</h3>
<pre><code class="language-yaml"># Trong Cluster CRD thêm monitoring config:
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: production-pg
spec:
  monitoring:
    enablePodMonitor: true
    customQueriesConfigMap:
      - name: pg-custom-queries
        key: queries.yaml
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: pg-custom-queries
  namespace: database
data:
  queries.yaml: |
    pg_stat_statements:
      query: |
        SELECT
          queryid,
          calls,
          total_exec_time / 1000 as total_time_seconds,
          mean_exec_time / 1000 as mean_time_seconds,
          rows
        FROM pg_stat_statements
        WHERE userid = (SELECT usesysid FROM pg_user WHERE usename = current_user)
        ORDER BY total_exec_time DESC
        LIMIT 20
      metrics:
        - queryid:
            usage: "LABEL"
        - calls:
            usage: "COUNTER"
        - total_time_seconds:
            usage: "COUNTER"
        - mean_time_seconds:
            usage: "GAUGE"
        - rows:
            usage: "COUNTER"

    pg_database_size:
      query: |
        SELECT datname, pg_database_size(datname) as size_bytes
        FROM pg_database WHERE datname NOT IN ('template0','template1')
      metrics:
        - datname:
            usage: "LABEL"
        - size_bytes:
            usage: "GAUGE"

    pg_locks:
      query: |
        SELECT mode, count(*) as count
        FROM pg_locks GROUP BY mode
      metrics:
        - mode:
            usage: "LABEL"
        - count:
            usage: "GAUGE"
</code></pre>

<hr>

<h2 id="phan-3-grafana">PHẦN 3: GRAFANA DASHBOARDS</h2>

<h3 id="31-dashboard-import">3.1. Import Dashboard</h3>
<pre><code class="language-yaml"># CloudNativePG official dashboard:
# Grafana ID: 20417
# URL: https://grafana.com/grafana/dashboards/20417

# ConfigMap for auto-provisioning:
apiVersion: v1
kind: ConfigMap
metadata:
  name: grafana-dashboard-cnpg
  namespace: monitoring
  labels:
    grafana_dashboard: "true"
data:
  cnpg-dashboard.json: |
    {
      "annotations": { "list": [] },
      "title": "CloudNativePG",
      "uid": "cnpg-overview",
      "panels": [
        {
          "title": "Database Size",
          "type": "stat",
          "targets": [{
            "expr": "cnpg_pg_database_size_bytes{datname=\"appdb\"}"
          }]
        },
        {
          "title": "Active Connections",
          "type": "timeseries",
          "targets": [{
            "expr": "cnpg_backends_total{datname=\"appdb\"}"
          }]
        },
        {
          "title": "Replication Lag",
          "type": "timeseries",
          "targets": [{
            "expr": "cnpg_pg_replication_lag{namespace=\"database\"}"
          }]
        },
        {
          "title": "Transactions/sec",
          "type": "timeseries",
          "targets": [{
            "expr": "rate(cnpg_pg_stat_database_xact_commit{datname=\"appdb\"}[5m])"
          }]
        },
        {
          "title": "Dead Tuples (needs VACUUM)",
          "type": "timeseries",
          "targets": [{
            "expr": "cnpg_pg_stat_user_tables_n_dead_tup{namespace=\"database\"}"
          }]
        }
      ]
    }
</code></pre>

<hr>

<h2 id="phan-4-vacuum-tuning">PHẦN 4: VACUUM TUNING</h2>

<h3 id="41-autovacuum">4.1. Autovacuum Configuration</h3>
<pre><code class="language-yaml"># Trong Cluster CRD postgresql parameters:
postgresql:
  parameters:
    # Autovacuum settings:
    autovacuum: "on"
    autovacuum_max_workers: "4"           # Default: 3
    autovacuum_naptime: "30s"             # Check frequency
    autovacuum_vacuum_threshold: "50"     # Min rows changed
    autovacuum_vacuum_scale_factor: "0.05" # 5% of table (default 20%)
    autovacuum_analyze_threshold: "50"
    autovacuum_analyze_scale_factor: "0.025"
    autovacuum_vacuum_cost_delay: "2ms"   # I/O throttle
    autovacuum_vacuum_cost_limit: "400"   # More aggressive

    # Prevent transaction ID wraparound:
    autovacuum_freeze_max_age: "200000000"
</code></pre>

<h3 id="42-manual-vacuum">4.2. Manual VACUUM cho bảng lớn</h3>
<pre><code class="language-bash"># Check tables cần vacuum:
kubectl -n database exec production-pg-1 -- psql -U postgres -d appdb -c \
  "SELECT 
    schemaname || '.' || relname AS table,
    n_live_tup,
    n_dead_tup,
    round(100.0 * n_dead_tup / NULLIF(n_live_tup + n_dead_tup, 0), 2) AS dead_pct,
    last_autovacuum,
    last_autoanalyze
  FROM pg_stat_user_tables
  ORDER BY n_dead_tup DESC
  LIMIT 10;"

# Manual vacuum (non-blocking):
kubectl -n database exec production-pg-1 -- psql -U postgres -d appdb -c \
  "VACUUM (VERBOSE, ANALYZE) large_table;"

# For heavily bloated tables → VACUUM FULL (requires lock):
# ⚠️ Only during maintenance window!
kubectl -n database exec production-pg-1 -- psql -U postgres -d appdb -c \
  "VACUUM FULL large_table;"
</code></pre>

<hr>

<h2 id="phan-5-pgbouncer-tuning">PHẦN 5: PGBOUNCER TUNING</h2>

<pre><code class="language-yaml"># Pooler CRD optimization:
apiVersion: postgresql.cnpg.io/v1
kind: Pooler
metadata:
  name: production-pg-pooler-rw
  namespace: database
spec:
  cluster:
    name: production-pg
  instances: 2                    # 2 PgBouncer pods (HA)
  type: rw
  pgbouncer:
    poolMode: transaction         # Best cho microservices
    parameters:
      default_pool_size: "25"     # Per user/db pair
      max_client_conn: "200"      # Total client connections
      reserve_pool_size: "5"      # Overflow pool
      reserve_pool_timeout: "3"   # Seconds before using reserve
      server_idle_timeout: "300"  # Close idle server conns
      query_wait_timeout: "60"    # Max wait for server conn
      log_connections: "1"
      log_disconnections: "1"
      stats_period: "30"
</code></pre>

<hr>

<h2 id="phan-6-day2">PHẦN 6: DAY-2 OPERATIONS</h2>

<h3 id="61-scaling">6.1. Scale Replicas</h3>
<pre><code class="language-bash"># Add replica (3 → 5):
kubectl -n database patch cluster production-pg --type merge \
  -p '{"spec":{"instances": 5}}'

# Verify:
kubectl cnpg status production-pg -n database
# Instances: 5
# Ready: 5/5

# Scale down (5 → 3):
kubectl -n database patch cluster production-pg --type merge \
  -p '{"spec":{"instances": 3}}'
</code></pre>

<h3 id="62-minor-upgrade">6.2. Minor Version Upgrade (e.g., 16.3 → 16.4)</h3>
<pre><code class="language-bash"># Update image tag:
kubectl -n database patch cluster production-pg --type merge \
  -p '{"spec":{"imageName":"ghcr.io/cloudnative-pg/postgresql:16.4"}}'

# CloudNativePG performs rolling update:
# 1. Upgrade standby pods first (one by one)
# 2. Switchover primary → upgraded standby
# 3. Upgrade old primary
# → Zero downtime! ✅

# Watch progress:
kubectl -n database get pods -w
</code></pre>

<h3 id="63-major-upgrade">6.3. Major Version Upgrade (e.g., 16 → 17)</h3>
<pre><code class="language-bash"># Major upgrade requires pg_upgrade or logical replication
# Strategy: Create new cluster + switchover

# Step 1: Create PG 17 cluster:
# (copy Cluster CRD, change image to PG 17)

# Step 2: Setup logical replication:
kubectl -n database exec production-pg-1 -- psql -U postgres -d appdb -c \
  "CREATE PUBLICATION app_pub FOR ALL TABLES;"

# Step 3: On new cluster, create subscription:
kubectl -n database exec production-pg17-1 -- psql -U postgres -d appdb -c \
  "CREATE SUBSCRIPTION app_sub
   CONNECTION 'host=production-pg-rw.database port=5432 dbname=appdb user=postgres'
   PUBLICATION app_pub;"

# Step 4: Wait for sync, then switch app DNS
# Step 5: Drop old cluster
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>pg_stat_statements</strong>: Essential cho query performance analysis</li>
<li><strong>Prometheus + Grafana</strong>: Real-time monitoring, alerting on lag/connections</li>
<li><strong>Vacuum tuning</strong>: Giảm scale_factor cho bảng lớn (5% thay vì 20%)</li>
<li><strong>PgBouncer</strong>: transaction pooling, tune default_pool_size theo workload</li>
<li><strong>Minor upgrade</strong>: Rolling update zero-downtime</li>
<li><strong>Major upgrade</strong>: Logical replication strategy</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Performance Baseline</h3>
<ul>
<li>Enable pg_stat_statements</li>
<li>Run pgbench workload</li>
<li>Identify top 5 slow queries</li>
<li>Setup Grafana dashboard</li>
</ul>

<h3 id="bt2">Bài tập 2: Vacuum Lab</h3>
<ul>
<li>Create table, INSERT 1M rows, DELETE 500K</li>
<li>Observe dead tuples, trigger VACUUM</li>
<li>Compare autovacuum vs manual VACUUM timing</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 21: RabbitMQ HA Cluster trên Kubernetes</strong>, chúng ta sẽ deploy message queue HA cho microservices communication.</p>
