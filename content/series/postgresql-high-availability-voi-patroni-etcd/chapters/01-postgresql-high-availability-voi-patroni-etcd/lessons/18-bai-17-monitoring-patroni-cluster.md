---
id: 019c9617-fb94-7137-99fe-08685ac4ab93
title: 'Bài 17: Monitoring Patroni Cluster'
slug: bai-17-monitoring-patroni-cluster
description: >-
  Setup monitoring stack với Prometheus + Grafana, sử dụng postgres_exporter,
  cấu hình alerting rules cho cluster HA.
duration_minutes: 175
is_free: true
video_url: null
sort_order: 17
section_title: PostgreSQL High Availability với Patroni & etcd
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---
<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Hiểu các metrics quan trọng của PostgreSQL HA cluster</li><li>Setup Prometheus + Grafana để monitor</li><li>Cấu hình postgres_exporter và patroni_exporter</li><li>Tạo dashboards và alerting rules</li><li>Monitor etcd cluster health</li><li>Implement best practices cho observability</li></ul><h2 id="1-why-monitoring-matters">1. Why Monitoring Matters</h2><h3 id="11-monitoring-goals">1.1. Monitoring goals</h3><p><strong>Visibility</strong>:</p><pre><code class="language-text">✅ Know cluster health in real-time
✅ Detect issues before users notice
✅ Track performance trends
✅ Capacity planning data
✅ Audit trail for incidents
</code></pre><p><strong>Key questions to answer</strong>:</p><pre><code class="language-text">- Is the cluster healthy?
- Is replication working?
- What's the lag?
- Is there any failover?
- Are connections saturated?
- What's the query performance?
- Is etcd healthy?
- Are backups running?
</code></pre><h3 id="12-the-four-golden-signals">1.2. The four golden signals</h3><p><strong>Latency</strong>: How long requests take?</p><pre><code class="language-sql">-- Query execution time
SELECT query, mean_exec_time, calls 
FROM pg_stat_statements 
ORDER BY mean_exec_time DESC 
LIMIT 10;
</code></pre><p><strong>Traffic</strong>: How many requests?</p><pre><code class="language-sql">-- Connection count
SELECT count(*) FROM pg_stat_activity;

-- Transactions per second
SELECT xact_commit + xact_rollback AS tps 
FROM pg_stat_database 
WHERE datname = 'mydb';
</code></pre><p><strong>Errors</strong>: What's failing?</p><pre><code class="language-sql">-- Failed queries
SELECT query, calls, errors 
FROM pg_stat_statements 
WHERE errors &gt; 0;
</code></pre><p><strong>Saturation</strong>: How full are resources?</p><pre><code class="language-sql">-- Connection usage
SELECT count(*), max_connections 
FROM pg_stat_activity, 
     (SELECT setting::int AS max_connections FROM pg_settings WHERE name = 'max_connections') s;
</code></pre><h2 id="2-metrics-to-monitor">2. Metrics to Monitor</h2><h3 id="21-cluster-level-metrics">2.1. Cluster-level metrics</h3><h4 id="cluster-health">Cluster health</h4><pre><code class="language-text">✅ Number of nodes up/down
✅ Current leader
✅ Failover count
✅ Timeline number
✅ Cluster configuration version
</code></pre><h4 id="replication-health">Replication health</h4><pre><code class="language-text">✅ Replication lag (bytes and time)
✅ WAL sender/receiver status
✅ Sync vs async replica count
✅ Replication slot usage
✅ WAL segment generation rate
</code></pre><h3 id="22-postgresql-metrics">2.2. PostgreSQL metrics</h3><h4 id="connection-metrics">Connection metrics</h4><pre><code class="language-sql">-- Active connections by state
SELECT state, count(*) 
FROM pg_stat_activity 
GROUP BY state;

-- state              | count
-- -------------------+-------
-- active             |    15
-- idle               |    50
-- idle in transaction|     2
</code></pre><h4 id="database-size-and-growth">Database size and growth</h4><pre><code class="language-sql">-- Database sizes
SELECT datname, 
       pg_size_pretty(pg_database_size(datname)) AS size
FROM pg_database
ORDER BY pg_database_size(datname) DESC;

-- Growth rate (need historical data)
SELECT now(), 
       pg_database_size('mydb') AS size_bytes;
</code></pre><h4 id="transaction-rate">Transaction rate</h4><pre><code class="language-sql">-- Transactions per second
SELECT datname,
       xact_commit + xact_rollback AS total_xacts,
       xact_commit,
       xact_rollback
FROM pg_stat_database
WHERE datname = 'mydb';
</code></pre><h4 id="cache-hit-ratio">Cache hit ratio</h4><pre><code class="language-sql">-- Buffer cache hit ratio (should be &gt; 95%)
SELECT 
  sum(heap_blks_read) AS heap_read,
  sum(heap_blks_hit) AS heap_hit,
  sum(heap_blks_hit) / nullif(sum(heap_blks_hit) + sum(heap_blks_read), 0) * 100 AS cache_hit_ratio
FROM pg_statio_user_tables;
</code></pre><h4 id="index-usage">Index usage</h4><pre><code class="language-sql">-- Tables with missing indexes (high seq scans)
SELECT schemaname, tablename, seq_scan, seq_tup_read,
       idx_scan, seq_tup_read / nullif(seq_scan, 0) AS avg_seq_tup
FROM pg_stat_user_tables
WHERE seq_scan &gt; 0
ORDER BY seq_tup_read DESC
LIMIT 10;
</code></pre><h4 id="vacuum-and-autovacuum">Vacuum and autovacuum</h4><pre><code class="language-sql">-- Last vacuum/analyze
SELECT schemaname, tablename,
       last_vacuum,
       last_autovacuum,
       last_analyze,
       last_autoanalyze,
       n_dead_tup
FROM pg_stat_user_tables
ORDER BY n_dead_tup DESC;
</code></pre><h4 id="locks">Locks</h4><pre><code class="language-sql">-- Current locks
SELECT locktype, relation::regclass, mode, granted
FROM pg_locks
WHERE NOT granted;  -- Waiting locks
</code></pre><h4 id="long-running-queries">Long-running queries</h4><pre><code class="language-sql">-- Queries running &gt; 5 minutes
SELECT pid, 
       now() - query_start AS duration,
       state,
       query
FROM pg_stat_activity
WHERE state = 'active'
  AND now() - query_start &gt; interval '5 minutes'
ORDER BY duration DESC;
</code></pre><h3 id="23-patroni-metrics">2.3. Patroni metrics</h3><p><strong>Via REST API</strong>&nbsp;(<code>http://node:8008/metrics</code>):</p><pre><code class="language-text"># Patroni metrics
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
</code></pre><h3 id="24-etcd-metrics">2.4. etcd metrics</h3><p><strong>Via etcd metrics endpoint</strong>&nbsp;(<code>http://node:2379/metrics</code>):</p><pre><code class="language-text"># etcd health
etcd_server_has_leader 1
etcd_server_is_leader 0
etcd_server_leader_changes_seen_total 2

# Performance
etcd_disk_backend_commit_duration_seconds_bucket
etcd_network_peer_round_trip_time_seconds_bucket

# Cluster size
etcd_cluster_version{cluster_version="3.5"}
etcd_server_id{server_id="node1"}
</code></pre><h3 id="25-system-metrics">2.5. System metrics</h3><pre><code class="language-bash"># CPU usage
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
</code></pre><h2 id="3-prometheus-setup">3. Prometheus Setup</h2><h3 id="31-install-prometheus">3.1. Install Prometheus</h3><pre><code class="language-bash"># Download
cd /tmp
wget https://github.com/prometheus/prometheus/releases/download/v2.48.0/prometheus-2.48.0.linux-amd64.tar.gz
tar -xzf prometheus-2.48.0.linux-amd64.tar.gz
sudo mv prometheus-2.48.0.linux-amd64 /opt/prometheus

# Create user
sudo useradd --no-create-home --shell /bin/false prometheus

# Create directories
sudo mkdir -p /etc/prometheus /var/lib/prometheus
sudo chown prometheus:prometheus /var/lib/prometheus
</code></pre><h3 id="32-configure-prometheus">3.2. Configure Prometheus</h3><pre><code class="language-yaml"># /etc/prometheus/prometheus.yml
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
</code></pre><h3 id="33-create-systemd-service">3.3. Create systemd service</h3><pre><code class="language-bash"># /etc/systemd/system/prometheus.service
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
</code></pre><h2 id="4-exporters-setup">4. Exporters Setup</h2><h3 id="41-postgresexporter">4.1. postgres_exporter</h3><pre><code class="language-bash"># Install on each PostgreSQL node
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
</code></pre><p><strong>Custom queries</strong>&nbsp;(optional):</p><pre><code class="language-yaml"># /etc/postgres_exporter/queries.yml
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
</code></pre><p><strong>Systemd service</strong>:</p><pre><code class="language-bash"># /etc/systemd/system/postgres_exporter.service
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
</code></pre><h3 id="42-nodeexporter">4.2. node_exporter</h3><pre><code class="language-bash"># Install on each node
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
</code></pre><h3 id="43-patroni-metrics-endpoint">4.3. Patroni metrics endpoint</h3><p><strong>Already built-in!</strong>&nbsp;Patroni exposes metrics at:</p><pre><code class="language-bash"># Check Patroni metrics
curl http://localhost:8008/metrics

# Sample output:
# patroni_postgres_running 1
# patroni_postmaster_start_time 1732531200
# patroni_timeline 3
# patroni_cluster_unlocked 0
# patroni_is_leader 1
</code></pre><h2 id="5-grafana-setup">5. Grafana Setup</h2><h3 id="51-install-grafana">5.1. Install Grafana</h3><pre><code class="language-bash"># Add repository
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
</code></pre><h3 id="52-add-prometheus-data-source">5.2. Add Prometheus data source</h3><pre><code class="language-text">1. Login to Grafana (http://localhost:3000)
2. Go to Configuration → Data Sources
3. Click "Add data source"
4. Select "Prometheus"
5. URL: http://localhost:9090
6. Click "Save &amp; Test"
</code></pre><h3 id="53-import-dashboards">5.3. Import dashboards</h3><p><strong>PostgreSQL dashboard</strong>:</p><pre><code class="language-text">1. Go to Dashboards → Import
2. Enter dashboard ID: 9628 (PostgreSQL Database)
3. Select Prometheus data source
4. Click Import
</code></pre><p><strong>Patroni dashboard</strong>&nbsp;(custom):</p><pre><code class="language-json">{
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
</code></pre><p><strong>etcd dashboard</strong>:</p><pre><code class="language-text">Dashboard ID: 3070 (etcd by Prometheus)
</code></pre><p><strong>Node exporter dashboard</strong>:</p><pre><code class="language-text">Dashboard ID: 1860 (Node Exporter Full)
</code></pre><h2 id="6-alerting-rules">6. Alerting Rules</h2><h3 id="61-postgresql-alerts">6.1. PostgreSQL alerts</h3><pre><code class="language-yaml"># /etc/prometheus/alerts/postgresql.yml
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
</code></pre><h3 id="62-patroni-alerts">6.2. Patroni alerts</h3><pre><code class="language-yaml"># /etc/prometheus/alerts/patroni.yml
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
</code></pre><h3 id="63-etcd-alerts">6.3. etcd alerts</h3><pre><code class="language-yaml"># /etc/prometheus/alerts/etcd.yml
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
</code></pre><h2 id="7-alertmanager-setup">7. Alertmanager Setup</h2><h3 id="71-install-alertmanager">7.1. Install Alertmanager</h3><pre><code class="language-bash"># Download
cd /tmp
wget https://github.com/prometheus/alertmanager/releases/download/v0.26.0/alertmanager-0.26.0.linux-amd64.tar.gz
tar -xzf alertmanager-0.26.0.linux-amd64.tar.gz
sudo mv alertmanager-0.26.0.linux-amd64 /opt/alertmanager

# Create user
sudo useradd --no-create-home --shell /bin/false alertmanager

# Create directories
sudo mkdir -p /etc/alertmanager /var/lib/alertmanager
sudo chown alertmanager:alertmanager /var/lib/alertmanager
</code></pre><h3 id="72-configure-alertmanager">7.2. Configure Alertmanager</h3><pre><code class="language-yaml"># /etc/alertmanager/alertmanager.yml
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
</code></pre><h3 id="73-start-alertmanager">7.3. Start Alertmanager</h3><pre><code class="language-bash"># Systemd service
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
</code></pre><h2 id="8-best-practices">8. Best Practices</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>Monitor proactively</strong>&nbsp;- Don't wait for users to report issues</li><li><strong>Set meaningful thresholds</strong>&nbsp;- Based on your workload</li><li><strong>Test alerts</strong>&nbsp;- Ensure notifications work</li><li><strong>Document runbooks</strong>&nbsp;- Link alerts to resolution steps</li><li><strong>Keep metrics retention</strong>&nbsp;- 30 days minimum, 1 year recommended</li><li><strong>Use labels wisely</strong>&nbsp;- For filtering and grouping</li><li><strong>Monitor the monitors</strong>&nbsp;- Alert if Prometheus/Grafana down</li><li><strong>Regular dashboard reviews</strong>&nbsp;- Update as needs change</li><li><strong>Track SLOs/SLIs</strong>&nbsp;- Define and measure service levels</li><li><strong>Correlate metrics</strong>&nbsp;- CPU + disk + query time together</li></ol><h3 id="%E2%9D%8C-dont">❌ DON'T</h3><ol><li><strong>Don't over-alert</strong>&nbsp;- Alert fatigue is real</li><li><strong>Don't ignore warnings</strong>&nbsp;- They become criticals</li><li><strong>Don't forget to update</strong>&nbsp;- Dashboards and alerts evolve</li><li><strong>Don't expose metrics publicly</strong>&nbsp;- Security risk</li><li><strong>Don't rely on single monitoring</strong>&nbsp;- Have backups</li><li><strong>Don't collect everything</strong>&nbsp;- Focus on what matters</li><li><strong>Don't ignore baselines</strong>&nbsp;- Know your normal</li><li><strong>Don't skip testing</strong>&nbsp;- Test failover detection</li></ol><h2 id="9-lab-exercises">9. Lab Exercises</h2><h3 id="lab-1-setup-monitoring-stack">Lab 1: Setup monitoring stack</h3><p><strong>Tasks</strong>: 1. Install Prometheus on monitoring server 2. Install postgres_exporter on all nodes 3. Install node_exporter on all nodes 4. Configure scrape targets 5. Verify metrics collection 6. Install Grafana 7. Add Prometheus data source 8. Import PostgreSQL dashboard</p><h3 id="lab-2-create-custom-dashboard">Lab 2: Create custom dashboard</h3><p><strong>Tasks</strong>: 1. Create new dashboard in Grafana 2. Add panel for replication lag 3. Add panel for connection count 4. Add panel for TPS 5. Add panel for cache hit ratio 6. Create variables for node selection 7. Save and share dashboard</p><h3 id="lab-3-configure-alerting">Lab 3: Configure alerting</h3><p><strong>Tasks</strong>: 1. Install Alertmanager 2. Create alert rules for PostgreSQL 3. Create alert rules for Patroni 4. Configure Slack notifications 5. Test alerts by triggering conditions 6. Verify notification delivery</p><h3 id="lab-4-simulate-and-monitor-failover">Lab 4: Simulate and monitor failover</h3><p><strong>Tasks</strong>: 1. Open Grafana dashboard 2. Stop primary node 3. Watch metrics during failover 4. Verify alerts triggered 5. Document timeline 6. Calculate downtime from metrics</p><h2 id="10-t%E1%BB%95ng-k%E1%BA%BFt">10. Tổng kết</h2><h3 id="key-metrics-summary">Key Metrics Summary</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Category</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Metric</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Threshold</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">Replication</td><td style="padding: 5px 10px;">Lag bytes</td><td style="padding: 5px 10px;">&lt; 10MB</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Replication</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Lag time</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">&lt; 10s</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Connections</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Usage %</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">&lt; 80%</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Cache</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Hit ratio</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">&gt; 95%</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Queries</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Long-running</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">&lt; 1 hour</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Disk</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Usage %</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">&lt; 85%</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">CPU</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Usage %</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">&lt; 80% sustained</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="monitoring-stack">Monitoring Stack</h3><pre><code class="language-text">Prometheus: Metrics collection and storage
├─ postgres_exporter: PostgreSQL metrics
├─ node_exporter: System metrics
├─ Patroni: HA cluster metrics (built-in)
└─ etcd: DCS metrics (built-in)

Grafana: Visualization and dashboards

Alertmanager: Alert routing and notifications
</code></pre><h3 id="next-steps">Next Steps</h3><p>Bài 18 sẽ cover&nbsp;<strong>Performance Tuning</strong>:</p><ul><li>PostgreSQL configuration optimization</li><li>Connection pooling with PgBouncer</li><li>Load balancing with HAProxy</li><li>Query optimization techniques</li><li>Read replica scaling strategies</li></ul>
