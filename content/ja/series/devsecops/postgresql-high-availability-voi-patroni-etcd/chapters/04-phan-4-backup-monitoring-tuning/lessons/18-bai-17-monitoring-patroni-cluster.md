---
id: 019c9617-fb94-7137-99fe-08685ac4ab93
title: 'レッスン 17: Patroni クラスターの監視'
slug: bai-17-monitoring-patroni-cluster
description: Prometheus + Grafana を使用して監視スタックをセットアップし、postgres_exporter を使用し、HA クラスターのアラート ルールを構成します。
duration_minutes: 175
is_free: true
video_url: null
sort_order: 17
section_title: 'パート 4: バックアップ、モニタリング、チューニング'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8943" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8943)"/>

  <!-- Decorations -->
  <g>
    <circle cx="905" cy="185" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="710" cy="150" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1015" cy="115" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="820" cy="80" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="625" cy="45" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="115" x2="1100" y2="195" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="145" x2="1050" y2="215" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="940.9807621135332,100 940.9807621135332,130 915,145 889.0192378864668,130 889.0192378864668,100.00000000000001 915,85" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 17</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: Patroni クラスターの監視</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Patroni と PostgreSQL の高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: バックアップ、監視、およびチューニング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標</h2><p>このレッスンを終えると、</p><ul><li>PostgreSQL HA クラスターの重要なメトリクスを理解する_</li><li>監視する Prometheus + Grafana をセットアップ</li><li>構成するpostgres_exporter と patroni_exporter</li><li>ダッシュボードとアラート ルールを作成</li><li>_etcd クラスターの健全性を監視_</li><li>可観測性のためのベスト プラクティスを実装</li></ul><h2 id="1-why-monitoring-matters">1。監視が重要な理由</h2><h3 id="11-monitoring-goals">1.1.モニタリング目標_</h3><p><strong>可視性</strong>:</p><pre><code class="language-text">✅ Know cluster health in real-time
✅ Detect issues before users notice
✅ Track performance trends
✅ Capacity planning data
✅ Audit trail for incidents
</code></pre><p><strong>回答すべき重要な質問</strong>:</p><pre><code class="language-text">- Is the cluster healthy?
- Is replication working?
- What's the lag?
- Is there any failover?
- Are connections saturated?
- What's the query performance?
- Is etcd healthy?
- Are backups running?
</code></pre><h3 id="12-the-four-golden-signals">1.2。 4 つのゴールデン シグナル_</h3><p><strong>Latency</strong>: リクエストにはどのくらい時間がかかりますか?</p><pre><code class="language-sql">-- Query execution time
SELECT query, mean_exec_time, calls 
FROM pg_stat_statements 
ORDER BY mean_exec_time DESC 
LIMIT 10;
</code></pre><p><strong>Traffic</strong>: リクエストの数はどれくらいですか?リクエスト?</p><pre><code class="language-sql">-- Connection count
SELECT count(*) FROM pg_stat_activity;

-- Transactions per second
SELECT xact_commit + xact_rollback AS tps 
FROM pg_stat_database 
WHERE datname = 'mydb';
</code></pre><p><strong>エラー</strong>: 何が失敗していますか?</p><pre><code class="language-sql">-- Failed queries
SELECT query, calls, errors 
FROM pg_stat_statements 
WHERE errors &gt; 0;
</code></pre><p><strong>彩度</strong>: どれくらい埋まっていますか?リソース?_</p><pre><code class="language-sql">-- Connection usage
SELECT count(*), max_connections 
FROM pg_stat_activity, 
     (SELECT setting::int AS max_connections FROM pg_settings WHERE name = 'max_connections') s;
</code></pre><h2 id="2-metrics-to-monitor">2。監視する指標</h2><h3 id="21-cluster-level-metrics">2.1。クラスターレベルのメトリック_</h3><h4 id="cluster-health">クラスターの健全性_</h4><pre><code class="language-text">✅ Number of nodes up/down
✅ Current leader
✅ Failover count
✅ Timeline number
✅ Cluster configuration version
</code></pre><h4 id="replication-health">レプリケーションの健全性_</h4><pre><code class="language-text">✅ Replication lag (bytes and time)
✅ WAL sender/receiver status
✅ Sync vs async replica count
✅ Replication slot usage
✅ WAL segment generation rate
</code></pre><h3 id="22-postgresql-metrics">2.2。 PostgreSQL メトリクス_</h3><h4 id="connection-metrics">接続メトリクス_</h4><pre><code class="language-sql">-- Active connections by state
SELECT state, count(*) 
FROM pg_stat_activity 
GROUP BY state;

-- state              | count
-- -------------------+-------
-- active             |    15
-- idle               |    50
-- idle in transaction|     2
</code></pre><h4 id="database-size-and-growth">データベースのサイズと増加_</h4><pre><code class="language-sql">-- Database sizes
SELECT datname, 
       pg_size_pretty(pg_database_size(datname)) AS size
FROM pg_database
ORDER BY pg_database_size(datname) DESC;

-- Growth rate (need historical data)
SELECT now(), 
       pg_database_size('mydb') AS size_bytes;
</code></pre><h4 id="transaction-rate">トランザクション率</h4><pre><code class="language-sql">-- Transactions per second
SELECT datname,
       xact_commit + xact_rollback AS total_xacts,
       xact_commit,
       xact_rollback
FROM pg_stat_database
WHERE datname = 'mydb';
</code></pre><h4 id="cache-hit-ratio">キャッシュ ヒット比率</h4><pre><code class="language-sql">-- Buffer cache hit ratio (should be &gt; 95%)
SELECT 
  sum(heap_blks_read) AS heap_read,
  sum(heap_blks_hit) AS heap_hit,
  sum(heap_blks_hit) / nullif(sum(heap_blks_hit) + sum(heap_blks_read), 0) * 100 AS cache_hit_ratio
FROM pg_statio_user_tables;
</code></pre><h4 id="index-usage">インデックスの使用</h4><pre><code class="language-sql">-- Tables with missing indexes (high seq scans)
SELECT schemaname, tablename, seq_scan, seq_tup_read,
       idx_scan, seq_tup_read / nullif(seq_scan, 0) AS avg_seq_tup
FROM pg_stat_user_tables
WHERE seq_scan &gt; 0
ORDER BY seq_tup_read DESC
LIMIT 10;
</code></pre><h4 id="vacuum-and-autovacuum">バキュームとautovacuum_</h4><pre><code class="language-sql">-- Last vacuum/analyze
SELECT schemaname, tablename,
       last_vacuum,
       last_autovacuum,
       last_analyze,
       last_autoanalyze,
       n_dead_tup
FROM pg_stat_user_tables
ORDER BY n_dead_tup DESC;
</code></pre><h4 id="locks">ロック_</h4><pre><code class="language-sql">-- Current locks
SELECT locktype, relation::regclass, mode, granted
FROM pg_locks
WHERE NOT granted;  -- Waiting locks
</code></pre><h4 id="long-running-queries">長時間実行クエリ_</h4><pre><code class="language-sql">-- Queries running &gt; 5 minutes
SELECT pid, 
       now() - query_start AS duration,
       state,
       query
FROM pg_stat_activity
WHERE state = 'active'
  AND now() - query_start &gt; interval '5 minutes'
ORDER BY duration DESC;
</code></pre><h3 id="23-patroni-metrics">2.3。 Patroni メトリクス_</h3><p><strong>REST API 経由</strong>&nbsp;(<code>http://node:8008/metrics</code>):</p><pre><code class="language-text"># Patroni metrics
patroni_patroni_info{scope="postgres",version="3.2.0"}
patroni_postgres_running{scope="postgres"} 1
patroni_postmaster_start_time{scope="postgres"} 1732531200
patroni_timeline{scope="postgres"} 3
patroni_cluster_unlocked{scope="postgres"} 0

# Replication metrics
patroni_replication_lag_bytes{application_name="node2"} 0
patroni_xlog_location{scope="postgres"} 100663296
patroni_xlog_replayed_location{scope="postgres"} 100663296
patroni_is_leader{scope="postgres"} 1
</code></pre><h3 id="24-etcd-metrics">2.4。 etcd メトリクス_</h3><p><strong>etcd メトリクス エンドポイント経由</strong>&nbsp;(<code>http://node:2379/metrics</code>):</p><pre><code class="language-text"># etcd health
etcd_server_has_leader 1
etcd_server_is_leader 0
etcd_server_leader_changes_seen_total 2

# Performance
etcd_disk_backend_commit_duration_seconds_bucket
etcd_network_peer_round_trip_time_seconds_bucket

# Cluster size
etcd_cluster_version{cluster_version="3.5"}
etcd_server_id{server_id="node1"}
</code></pre><h3 id="25-system-metrics">2.5。システムメトリクス_</h3><pre><code class="language-bash"># CPU usage
top
htop

# Memory
free -h

# Disk I/O
iostat -x 1

# Disk space
df -h

# Network
netstat -s
ss -s
</code></pre><h2 id="3-prometheus-setup">3。プロメテウスのセットアップ_</h2><h3 id="31-install-prometheus">3.1。 Prometheus_</h3><pre><code class="language-bash"># Download
cd /tmp
wget https://github.com/prometheus/prometheus/releases/download/v2.48.0/prometheus-2.48.0.linux-amd64.tar.gz
tar -xzf prometheus-2.48.0.linux-amd64.tar.gz
sudo mv prometheus-2.48.0.linux-amd64 /opt/prometheus

# Create user
sudo useradd --no-create-home --shell /bin/false prometheus

# Create directories
sudo mkdir -p /etc/prometheus /var/lib/prometheus
sudo chown prometheus:prometheus /var/lib/prometheus
</code></pre><h3 id="32-configure-prometheus">3.2 をインストールします。 Prometheus</h3><pre><code class="language-yaml"># /etc/prometheus/prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s
  external_labels:
    cluster: 'postgres-ha'
    environment: 'production'

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
            - localhost:9093

# Load rules
rule_files:
  - "alerts/*.yml"

# Scrape configurations
scrape_configs:
  # Prometheus itself
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  # PostgreSQL (via postgres_exporter)
  - job_name: 'postgresql'
    static_configs:
      - targets:
          - 10.0.1.11:9187  # node1
          - 10.0.1.12:9187  # node2
          - 10.0.1.13:9187  # node3
    relabel_configs:
      - source_labels: [__address__]
        regex: '([^:]+):.*'
        target_label: instance

  # Patroni (via REST API)
  - job_name: 'patroni'
    static_configs:
      - targets:
          - 10.0.1.11:8008
          - 10.0.1.12:8008
          - 10.0.1.13:8008
    metrics_path: /metrics

  # etcd
  - job_name: 'etcd'
    static_configs:
      - targets:
          - 10.0.1.11:2379
          - 10.0.1.12:2379
          - 10.0.1.13:2379
    scheme: http

  # Node exporter (system metrics)
  - job_name: 'node'
    static_configs:
      - targets:
          - 10.0.1.11:9100
          - 10.0.1.12:9100
          - 10.0.1.13:9100
</code></pre><h3 id="33-create-systemd-service">3.3 を構成します。 systemd サービス</h3><pre><code class="language-bash"># /etc/systemd/system/prometheus.service
sudo tee /etc/systemd/system/prometheus.service &lt;&lt;EOF
[Unit]
Description=Prometheus
Wants=network-online.target
After=network-online.target

[Service]
User=prometheus
Group=prometheus
Type=simple
ExecStart=/opt/prometheus/prometheus \\
  --config.file=/etc/prometheus/prometheus.yml \\
  --storage.tsdb.path=/var/lib/prometheus/ \\
  --storage.tsdb.retention.time=30d \\
  --web.console.templates=/opt/prometheus/consoles \\
  --web.console.libraries=/opt/prometheus/console_libraries

Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

# Set permissions
sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml

# Start
sudo systemctl daemon-reload
sudo systemctl start prometheus
sudo systemctl enable prometheus

# Verify
sudo systemctl status prometheus
curl http://localhost:9090/metrics
</code></pre><h2 id="4-exporters-setup">4 を作成します。エクスポーターのセットアップ_</h2><h3 id="41-postgresexporter">4.1。 postgres_exporter</h3><pre><code class="language-bash"># Install on each PostgreSQL node
cd /tmp
wget https://github.com/prometheus-community/postgres_exporter/releases/download/v0.15.0/postgres_exporter-0.15.0.linux-amd64.tar.gz
tar -xzf postgres_exporter-0.15.0.linux-amd64.tar.gz
sudo mv postgres_exporter-0.15.0.linux-amd64/postgres_exporter /usr/local/bin/

# Create monitoring user in PostgreSQL
sudo -u postgres psql -c "
CREATE USER postgres_exporter WITH PASSWORD 'exporter_password';
GRANT pg_monitor TO postgres_exporter;
"

# Create connection file
sudo tee /etc/postgres_exporter.env &lt;&lt;EOF
DATA_SOURCE_NAME=postgresql://postgres_exporter:exporter_password@localhost:5432/postgres?sslmode=disable
EOF

sudo chmod 600 /etc/postgres_exporter.env
</code></pre><p><strong>カスタムクエリ</strong>&nbsp;(オプション):</p><pre><code class="language-yaml"># /etc/postgres_exporter/queries.yml
pg_replication:
  query: |
    SELECT 
      application_name,
      client_addr,
      state,
      COALESCE(pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn), 0) AS lag_bytes,
      EXTRACT(EPOCH FROM replay_lag) AS replay_lag_seconds
    FROM pg_stat_replication
  metrics:
    - application_name:
        usage: "LABEL"
        description: "Application name"
    - client_addr:
        usage: "LABEL"
        description: "Client address"
    - state:
        usage: "LABEL"
        description: "Replication state"
    - lag_bytes:
        usage: "GAUGE"
        description: "Replication lag in bytes"
    - replay_lag_seconds:
        usage: "GAUGE"
        description: "Replay lag in seconds"
</code></pre><p><strong>Systemdサービス_</strong>:</p><pre><code class="language-bash"># /etc/systemd/system/postgres_exporter.service
sudo tee /etc/systemd/system/postgres_exporter.service &lt;&lt;EOF
[Unit]
Description=Prometheus PostgreSQL Exporter
After=network.target

[Service]
Type=simple
User=postgres
EnvironmentFile=/etc/postgres_exporter.env
ExecStart=/usr/local/bin/postgres_exporter \\
  --web.listen-address=:9187 \\
  --extend.query-path=/etc/postgres_exporter/queries.yml

Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

# Start
sudo systemctl daemon-reload
sudo systemctl start postgres_exporter
sudo systemctl enable postgres_exporter

# Verify
curl http://localhost:9187/metrics | grep pg_
</code></pre><h3 id="42-nodeexporter">4.2。 node_exporter</h3><pre><code class="language-bash"># Install on each node
cd /tmp
wget https://github.com/prometheus/node_exporter/releases/download/v1.7.0/node_exporter-1.7.0.linux-amd64.tar.gz
tar -xzf node_exporter-1.7.0.linux-amd64.tar.gz
sudo mv node_exporter-1.7.0.linux-amd64/node_exporter /usr/local/bin/

# Systemd service
sudo tee /etc/systemd/system/node_exporter.service &lt;&lt;EOF
[Unit]
Description=Prometheus Node Exporter
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/node_exporter \\
  --web.listen-address=:9100

Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

# Start
sudo systemctl daemon-reload
sudo systemctl start node_exporter
sudo systemctl enable node_exporter

# Verify
curl http://localhost:9100/metrics | head -20
</code></pre><h3 id="43-patroni-metrics-endpoint">4.3。 Patroni メトリクス エンドポイント</h3><p><strong>すでに組み込まれています!</strong>&nbsp;Patroni は_</p><pre><code class="language-bash"># Check Patroni metrics
curl http://localhost:8008/metrics

# Sample output:
# patroni_postgres_running 1
# patroni_postmaster_start_time 1732531200
# patroni_timeline 3
# patroni_cluster_unlocked 0
# patroni_is_leader 1
</code></pre><h2 id="5-grafana-setup">5 でメトリクスを公開しています。 Grafana のセットアップ_</h2><h3 id="51-install-grafana">5.1。 Grafana_</h3><pre><code class="language-bash"># Add repository
sudo apt-get install -y software-properties-common
sudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -

# Install
sudo apt-get update
sudo apt-get install -y grafana

# Start
sudo systemctl start grafana-server
sudo systemctl enable grafana-server

# Access: http://your-server:3000
# Default credentials: admin / admin
</code></pre><h3 id="52-add-prometheus-data-source">5.2 をインストールします。 Prometheus データ ソース</h3><pre><code class="language-text">1. Login to Grafana (http://localhost:3000)
2. Go to Configuration → Data Sources
3. Click "Add data source"
4. Select "Prometheus"
5. URL: http://localhost:9090
6. Click "Save &amp; Test"
</code></pre><h3 id="53-import-dashboards">5.3 を追加します。ダッシュボードのインポート_</h3><p><strong>PostgreSQL ダッシュボード</strong>:</p><pre><code class="language-text">1. Go to Dashboards → Import
2. Enter dashboard ID: 9628 (PostgreSQL Database)
3. Select Prometheus data source
4. Click Import
</code></pre><p><strong>Patroniダッシュボード</strong>&nbsp;(カスタム):</p><pre><code class="language-json">{
  "dashboard": {
    "title": "Patroni Cluster Overview",
    "panels": [
      {
        "title": "Cluster Status",
        "targets": [
          {
            "expr": "patroni_postgres_running"
          }
        ]
      },
      {
        "title": "Leader",
        "targets": [
          {
            "expr": "patroni_is_leader"
          }
        ]
      },
      {
        "title": "Timeline",
        "targets": [
          {
            "expr": "patroni_timeline"
          }
        ]
      },
      {
        "title": "Replication Lag",
        "targets": [
          {
            "expr": "patroni_replication_lag_bytes"
          }
        ]
      }
    ]
  }
}
</code></pre><p><strong>etcd ダッシュボード</strong>:</p><pre><code class="language-text">Dashboard ID: 3070 (etcd by Prometheus)
</code></pre><p><strong>ノード エクスポーターダッシュボード</strong>:</p><pre><code class="language-text">Dashboard ID: 1860 (Node Exporter Full)
</code></pre><h2 id="6-alerting-rules">6。アラート ルール</h2><h3 id="61-postgresql-alerts">6.1。 PostgreSQL アラート_</h3><pre><code class="language-yaml"># /etc/prometheus/alerts/postgresql.yml
groups:
  - name: postgresql
    interval: 30s
    rules:
      # PostgreSQL down
      - alert: PostgreSQLDown
        expr: pg_up == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "PostgreSQL instance {{ $labels.instance }} is down"
          description: "PostgreSQL on {{ $labels.instance }} has been down for more than 1 minute"

      # High replication lag
      - alert: PostgreSQLReplicationLag
        expr: pg_replication_lag_bytes &gt; 104857600  # 100MB
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High replication lag on {{ $labels.instance }}"
          description: "Replication lag is {{ $value }} bytes (&gt;100MB)"

      # Too many connections
      - alert: PostgreSQLTooManyConnections
        expr: |
          sum(pg_stat_activity_count) by (instance) / 
          pg_settings_max_connections * 100 &gt; 80
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Too many connections on {{ $labels.instance }}"
          description: "Connection usage is {{ $value }}% (&gt;80%)"

      # Replication slot lag
      - alert: PostgreSQLReplicationSlotLag
        expr: pg_replication_slots_lag_bytes &gt; 1073741824  # 1GB
        for: 10m
        labels:
          severity: warning
        annotations:
          summary: "Replication slot {{ $labels.slot_name }} lag high"
          description: "Slot lag is {{ $value }} bytes (&gt;1GB)"

      # Long-running queries
      - alert: PostgreSQLLongRunningQueries
        expr: pg_stat_activity_max_tx_duration &gt; 3600  # 1 hour
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Long-running query on {{ $labels.instance }}"
          description: "Query running for {{ $value }} seconds (&gt;1h)"

      # Dead tuples
      - alert: PostgreSQLDeadTuples
        expr: pg_stat_user_tables_n_dead_tup &gt; 10000
        for: 30m
        labels:
          severity: warning
        annotations:
          summary: "High dead tuples on table {{ $labels.table }}"
          description: "Table has {{ $value }} dead tuples"

      # Cache hit ratio low
      - alert: PostgreSQLCacheHitRatio
        expr: |
          sum(pg_stat_database_blks_hit) / 
          nullif(sum(pg_stat_database_blks_hit + pg_stat_database_blks_read), 0) * 100 &lt; 95
        for: 15m
        labels:
          severity: warning
        annotations:
          summary: "Low cache hit ratio on {{ $labels.instance }}"
          description: "Cache hit ratio is {{ $value }}% (&lt;95%)"
</code></pre><h3 id="62-patroni-alerts">6.2。 Patroni アラート_</h3><pre><code class="language-yaml"># /etc/prometheus/alerts/patroni.yml
groups:
  - name: patroni
    interval: 30s
    rules:
      # Patroni down
      - alert: PatroniDown
        expr: up{job="patroni"} == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Patroni on {{ $labels.instance }} is down"

      # No leader
      - alert: PatroniNoLeader
        expr: sum(patroni_is_leader) == 0
        for: 30s
        labels:
          severity: critical
        annotations:
          summary: "Patroni cluster has no leader"
          description: "No node is acting as leader in the cluster"

      # Multiple leaders (split-brain)
      - alert: PatroniMultipleLeaders
        expr: sum(patroni_is_leader) &gt; 1
        for: 10s
        labels:
          severity: critical
        annotations:
          summary: "Multiple Patroni leaders detected (split-brain)"
          description: "{{ $value }} nodes claim to be leader"

      # Timeline mismatch
      - alert: PatroniTimelineMismatch
        expr: count(count by (timeline) (patroni_timeline)) &gt; 1
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Patroni timeline mismatch"
          description: "Nodes are on different timelines"

      # Failover detected
      - alert: PatroniFailover
        expr: increase(patroni_timeline[5m]) &gt; 0
        labels:
          severity: warning
        annotations:
          summary: "Patroni failover detected"
          description: "Timeline changed, indicating a failover occurred"

      # Cluster unlocked
      - alert: PatroniClusterUnlocked
        expr: patroni_cluster_unlocked == 1
        for: 30s
        labels:
          severity: warning
        annotations:
          summary: "Patroni cluster is unlocked"
</code></pre><h3 id="63-etcd-alerts">6.3。 etcd アラート_</h3><pre><code class="language-yaml"># /etc/prometheus/alerts/etcd.yml
groups:
  - name: etcd
    interval: 30s
    rules:
      # etcd down
      - alert: EtcdDown
        expr: up{job="etcd"} == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "etcd node {{ $labels.instance }} is down"

      # No leader
      - alert: EtcdNoLeader
        expr: etcd_server_has_leader == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "etcd cluster has no leader"

      # High leader changes
      - alert: EtcdFrequentLeaderChanges
        expr: increase(etcd_server_leader_changes_seen_total[1h]) &gt; 3
        labels:
          severity: warning
        annotations:
          summary: "etcd frequent leader changes"
          description: "{{ $value }} leader changes in last hour"

      # High commit latency
      - alert: EtcdHighCommitLatency
        expr: |
          histogram_quantile(0.99, 
            rate(etcd_disk_backend_commit_duration_seconds_bucket[5m])
          ) &gt; 0.25
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "etcd high commit latency"
          description: "99th percentile commit latency is {{ $value }}s"
</code></pre><h2 id="7-alertmanager-setup">7。アラートマネージャーのセットアップ</h2><h3 id="71-install-alertmanager">7.1。 Alertmanager</h3><pre><code class="language-bash"># Download
cd /tmp
wget https://github.com/prometheus/alertmanager/releases/download/v0.26.0/alertmanager-0.26.0.linux-amd64.tar.gz
tar -xzf alertmanager-0.26.0.linux-amd64.tar.gz
sudo mv alertmanager-0.26.0.linux-amd64 /opt/alertmanager

# Create user
sudo useradd --no-create-home --shell /bin/false alertmanager

# Create directories
sudo mkdir -p /etc/alertmanager /var/lib/alertmanager
sudo chown alertmanager:alertmanager /var/lib/alertmanager
</code></pre><h3 id="72-configure-alertmanager">7.2 をインストールします。 Alertmanager</h3><pre><code class="language-yaml"># /etc/alertmanager/alertmanager.yml
global:
  resolve_timeout: 5m
  slack_api_url: 'https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK'

route:
  group_by: ['alertname', 'cluster', 'service']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 12h
  receiver: 'default'
  routes:
    - match:
        severity: critical
      receiver: 'critical'
    - match:
        severity: warning
      receiver: 'warning'

receivers:
  - name: 'default'
    slack_configs:
      - channel: '#alerts'
        title: 'PostgreSQL HA Alert'
        text: '{{ range .Alerts }}{{ .Annotations.description }}{{ end }}'

  - name: 'critical'
    slack_configs:
      - channel: '#alerts-critical'
        title: '🚨 CRITICAL: {{ .GroupLabels.alertname }}'
        text: '{{ range .Alerts }}{{ .Annotations.description }}{{ end }}'
    email_configs:
      - to: 'oncall@example.com'
        from: 'alerts@example.com'
        smarthost: 'smtp.example.com:587'
        auth_username: 'alerts@example.com'
        auth_password: 'password'

  - name: 'warning'
    slack_configs:
      - channel: '#alerts'
        title: '⚠️  Warning: {{ .GroupLabels.alertname }}'
        text: '{{ range .Alerts }}{{ .Annotations.description }}{{ end }}'

inhibit_rules:
  - source_match:
      severity: 'critical'
    target_match:
      severity: 'warning'
    equal: ['alertname', 'instance']
</code></pre><h3 id="73-start-alertmanager">7.3 を構成します。 Alertmanager</h3><pre><code class="language-bash"># Systemd service
sudo tee /etc/systemd/system/alertmanager.service &lt;&lt;EOF
[Unit]
Description=Prometheus Alertmanager
After=network.target

[Service]
User=alertmanager
Group=alertmanager
Type=simple
ExecStart=/opt/alertmanager/alertmanager \\
  --config.file=/etc/alertmanager/alertmanager.yml \\
  --storage.path=/var/lib/alertmanager/ \\
  --web.listen-address=:9093

Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

# Start
sudo systemctl daemon-reload
sudo systemctl start alertmanager
sudo systemctl enable alertmanager

# Access: http://localhost:9093
</code></pre><h2 id="8-best-practices">8 を開始します。ベスト プラクティス</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>積極的に監視</strong>&nbsp;- ユーザーが問題を報告するのを待たない</li><li><strong>意味のある設定をするしきい値_</strong>&nbsp;- ワークロードに基づく</li><li><strong>アラートのテスト</strong>&nbsp;- 通知が機能することを確認</li><li><strong>ランブックを文書化</strong>&nbsp;- アラートを次のリンクにリンクします解決手順_</li><li><strong>指標の保持</strong>&nbsp;- 最低 30 日、推奨 1 年</li><li><strong>ラベルを賢く使用</strong>&nbsp;- フィルタリングとグループ化_</li><li><strong>モニターを監視</strong>&nbsp;- Prometheus/Grafana がダウンした場合に警告</li><li><strong>定期的なダッシュボードのレビュー</strong>&nbsp;- 必要に応じて更新変更_</li><li><strong>SLO/SLI の追跡</strong>&nbsp;- サービス レベルの定義と測定</li><li><strong>メトリクスの関連付け</strong>&nbsp;- CPU + ディスク + クエリ時間一緒に</li></ol><h3 id="%E2%9D%8C-dont">❌ しないでください</h3><ol><li><strong>過度に警戒しないでください</strong>&nbsp;- 警戒疲労は実際_</li><li><strong>警告を無視しないでください</strong>&nbsp;- 警告は重要になります_</li><li><strong>忘れずに更新してください</strong>&nbsp;- ダッシュボードとアラート進化</li><li><strong>指標を公に公開しない</strong>&nbsp;- セキュリティリスク</li><li><strong>単一のモニタリングに依存しない</strong>&nbsp;-バックアップ</li><li><strong>すべてを収集しない</strong>&nbsp;- 焦点を当てる重要なのは</li><li><strong>ベースラインを無視しない</strong>&nbsp;- 通常の状態を知る_</li><li><strong>テストをスキップしない</strong>&nbsp;- テストフェイルオーバー検出</li></ol><h2 id="9-lab-exercises">9。ラボ演習</h2><h3 id="lab-1-setup-monitoring-stack">ラボ 1: モニタリング スタックのセットアップ</h3><p><strong>タスク</strong>: 1. モニタリング サーバーに Prometheus をインストールする 2. すべてのノードに postgres_exporter をインストールする 3. すべてのノードに node_exporter をインストールする 4. スクレイピング ターゲットを構成する5. メトリクスの収集を確認する 6. Grafana をインストールする 7. Prometheus データ ソースを追加する 8. PostgreSQL ダッシュボードをインポート_</p><h3 id="lab-2-create-custom-dashboard">ラボ 2: カスタム ダッシュボードを作成_</h3><p><strong>タスク_</strong>: 1. Grafana で新しいダッシュボードを作成する 2. レプリケーション ラグ用のパネルを追加する3. 接続数のパネルを追加 4. TPS のパネルを追加 5. キャッシュ ヒット率のパネルを追加 6. ノード選択の変数を作成 7. ダッシュボードの保存と共有</p><h3 id="lab-3-configure-alerting">ラボ 3: アラートの構成</h3><p><strong>タスク</strong>: 1. アラートマネージャーのインストール2. PostgreSQL のアラート ルールを作成する 3. Patroni のアラート ルールを作成する 4. Slack 通知を構成する 5. 条件をトリガーしてアラートをテストする 6. 通知配信を確認する</p><h3 id="lab-4-simulate-and-monitor-failover">ラボ 4: フェールオーバーをシミュレートおよび監視する</h3><p><strong>タスク</strong>: 1. 開くGrafana ダッシュボード 2. プライマリ ノードを停止します。 3. フェールオーバー中にメトリクスを監視します。 4. トリガーされたアラートを確認します。 5. タイムラインを文書化します。 6. メトリクスからダウンタイムを計算します</p><h2 id="10-t%E1%BB%95ng-k%E1%BA%BFt">10。概要</h2><h3 id="key-metrics-summary">主要指標の概要</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_カテゴリ_</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_指標_</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Thre shold</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">_レプリケーション_</td><td style="padding: 5px 10px;">ラグバイト</td><td style="padding: 5px 10px;">&lt; 10MB</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">レプリケーション</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ラグタイム_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">&lt; 10 代</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">接続</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">使用率 %</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">&lt; 80%</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">キャッシュ</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ヒット率</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">&gt; 95%</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">クエリ_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">長時間実行</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">&lt; 1 時間</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ディスク</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">使用率 %</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">&lt; 85%</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">CPU</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">使用率 %</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">&lt; 80% 持続_</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="monitoring-stack">スタックの監視</h3><pre><code class="language-text">Prometheus: Metrics collection and storage
├─ postgres_exporter: PostgreSQL metrics
├─ node_exporter: System metrics
├─ Patroni: HA cluster metrics (built-in)
└─ etcd: DCS metrics (built-in)

Grafana: Visualization and dashboards

Alertmanager: Alert routing and notifications
</code></pre><h3 id="next-steps">次のステップ___HTMLTAG_412__HTMLTAG_413___レッスン 18 では、<strong>パフォーマンス チューニング</strong>:</p><ul>___HT について説明します。MLTAG_418___PostgreSQL 構成_</li></li><li>PgBouncer による接続プーリング</li><li>HAProxy による負荷分散</li><li>クエリ最適化技術</li><li>リードレプリカのスケーリング戦略_</li></ul>