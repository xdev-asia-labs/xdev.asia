---
id: 019c9617-fba1-7128-b313-6412f33f40cf
title: 'レッスン 21: マルチデータセンターのセットアップ'
slug: bai-21-multi-datacenter-setup
description: DC 間レプリケーション戦略、非同期カスケード レプリケーション、災害計画復旧、地理的負荷分散。
duration_minutes: 135
is_free: true
video_url: null
sort_order: 21
section_title: 'パート 5: セキュリティと機能強化'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4136" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4136)"/>

  <!-- Decorations -->
  <g>
    <circle cx="922" cy="96" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="744" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1066" cy="140" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="888" cy="162" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="710" cy="184" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="156" x2="1100" y2="236" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="186" x2="1050" y2="256" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="982.8467875173176,140.5 982.8467875173176,171.5 956,187 929.1532124826824,171.5 929.1532124826824,140.5 956,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — レッスン 21</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 21: マルチデータセンターのセットアップ__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Patroni と PostgreSQL の高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: セキュリティと上級_</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目的_</h2><p>このレッスンの後、次のことを行います:</p><ul><li>データセンター間レプリケーション アーキテクチャを設計_</li><li>カスケード レプリケーション トポロジを実装</li><li>ネットワーク遅延と障害</li><li>複数のサイトのディザスタリカバリを構成_</li><li>複数の場所にまたがる地理的な負荷分散_</li></ul><h2 id="1-multi-dc-architecture-patterns">1。マルチ DC アーキテクチャ パターン_</h2><h3 id="11-active-passive-dr-standby">1.1。アクティブ/パッシブ (DR スタンバイ)</h3><pre><code class="language-text">Primary DC (Active):
  ├─ node1 (Leader)
  ├─ node2 (Replica)
  └─ node3 (Replica)
    ↓ Async replication
DR DC (Passive):
  ├─ node4 (Standby)
  └─ node5 (Standby)

Use case: Disaster recovery
RPO: Minutes to hours
RTO: Minutes to hours
Cost: Lower (minimal resources in DR)
</code></pre><h3 id="12-active-active-multi-master">1.2。アクティブ-アクティブ (マルチマスター)</h3><pre><code class="language-text">DC1 (Active):
  ├─ node1 (Leader)
  └─ node2 (Replica)
    ↕ Bi-directional logical replication
DC2 (Active):
  ├─ node3 (Leader)
  └─ node4 (Replica)

Use case: Global applications with regional traffic
RPO: Near-zero
RTO: Near-zero
Cost: Higher (full resources in both DCs)
Note: Requires conflict resolution
</code></pre><h3 id="13-hub-and-spoke-cascading">1.3。ハブアンドスポーク (カスケード)</h3><pre><code class="language-text">Primary DC (Hub):
  └─ node1 (Leader)
      ├─ node2 (Replica) ← DC1 local
      ├─ node3 (Cascade) → DC2
      └─ node4 (Cascade) → DC3

DC2 (Spoke):
  └─ node3 (receives from node3-cascade)
      └─ node5 (Replica) ← DC2 local

DC3 (Spoke):
  └─ node4 (receives from node4-cascade)
      └─ node6 (Replica) ← DC3 local

Use case: Multiple regional read replicas
RPO: Seconds to minutes
Cost: Medium
</code></pre><h2 id="2-cascading-replication-setup">2。カスケード レプリケーションのセットアップ</h2><h3 id="21-architecture">2.1。アーキテクチャ_</h3><pre><code class="language-text">DC1 (us-east):
  ├─ pg-us-east-1 (Leader) - 10.1.1.11
  ├─ pg-us-east-2 (Replica) - 10.1.1.12
  └─ pg-us-east-3 (Cascade) - 10.1.1.13
        ↓ WAN replication
DC2 (us-west):
  └─ pg-us-west-1 (Replica) - 10.2.1.11
      ├─ Receives from pg-us-east-3
      └─ pg-us-west-2 (Replica) - 10.2.1.12
</code></pre><h3 id="22-configure-cascading-node-dc1">2.2。カスケード ノード (DC1)</h3><pre><code class="language-yaml"># /etc/patroni/patroni.yml on pg-us-east-3 (cascade node)
scope: postgres-cluster
name: pg-us-east-3

restapi:
  listen: 10.1.1.13:8008
  connect_address: 10.1.1.13:8008

etcd:
  hosts: 10.1.1.11:2379,10.1.1.12:2379,10.1.1.13:2379

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576

postgresql:
  listen: 0.0.0.0:5432
  connect_address: 10.1.1.13:5432
  data_dir: /var/lib/postgresql/18/data
  bin_dir: /usr/lib/postgresql/18/bin

  authentication:
    replication:
      username: replicator
      password: rep_password
    superuser:
      username: postgres
      password: postgres_password

  parameters:
    # Enable cascading replication
    hot_standby: on
    wal_level: replica
    max_wal_senders: 10  # Extra slots for downstream replicas
    max_replication_slots: 10
    hot_standby_feedback: on
    
    # Performance tuning for WAN
    wal_sender_timeout: 60s
    wal_receiver_timeout: 60s

  # Allow downstream replicas to connect
  pg_hba:
    - host replication replicator 10.2.1.0/24 scram-sha-256  # DC2 subnet

tags:
  nofailover: false
  noloadbalance: false
  clonefrom: true  # Can be used as clone source
  nosync: false
</code></pre><h3 id="23-configure-downstream-replica-dc2">2.3 を構成します。ダウンストリーム レプリカ (DC2)</h3><pre><code class="language-yaml"># /etc/patroni/patroni.yml on pg-us-west-1
scope: postgres-cluster-dc2  # Different scope!
name: pg-us-west-1

restapi:
  listen: 10.2.1.11:8008
  connect_address: 10.2.1.11:8008

etcd:
  # Separate etcd cluster for DC2
  hosts: 10.2.1.11:2379,10.2.1.12:2379,10.2.1.13:2379

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    standby_cluster:
      # Point to DC1 cascade node
      host: 10.1.1.13  # pg-us-east-3
      port: 5432
      primary_slot_name: pg_us_west_1_slot
      create_replica_methods:
        - basebackup

  method: basebackup
  basebackup:
    max-rate: '100M'
    checkpoint: 'fast'
    waldir: /var/lib/postgresql/18/data/pg_wal

postgresql:
  listen: 0.0.0.0:5432
  connect_address: 10.2.1.11:5432
  data_dir: /var/lib/postgresql/18/data
  bin_dir: /usr/lib/postgresql/18/bin

  authentication:
    replication:
      username: replicator
      password: rep_password
    superuser:
      username: postgres
      password: postgres_password

  parameters:
    hot_standby: on
    wal_level: replica
    max_wal_senders: 5
    max_replication_slots: 5
    hot_standby_feedback: on
    
    # WAN-optimized settings
    wal_sender_timeout: 120s  # Higher for WAN
    wal_receiver_timeout: 120s
    wal_retrieve_retry_interval: 10s

  pg_hba:
    - host replication replicator 10.2.1.0/24 scram-sha-256
    - host all all 10.2.1.0/24 scram-sha-256

tags:
  nofailover: false  # Can become leader in DC2
  noloadbalance: false
  clonefrom: false
</code></pre><h3 id="24-create-replication-slot-on-cascade-node">2.4 を構成します。カスケード ノード</h3><pre><code class="language-bash"># On pg-us-east-3 (cascade node)
sudo -u postgres psql -c "
  SELECT pg_create_physical_replication_slot('pg_us_west_1_slot');
"
</code></pre><h3 id="25-start-dc2-replica">2.5 にレプリケーション スロットを作成します。 DC2 レプリカ_</h3><pre><code class="language-bash"># On pg-us-west-1
sudo systemctl start patroni
sudo systemctl status patroni

# Check replication status
patronictl -c /etc/patroni/patroni.yml list

# Verify it's receiving from cascade node
sudo -u postgres psql -c "
  SELECT client_addr, state, sync_state, 
         pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) AS lag_bytes
  FROM pg_stat_replication;
"
</code></pre><h2 id="3-network-latency-handling">3 を開始します。ネットワーク遅延の処理_</h2><h3 id="31-measure-inter-dc-latency">3.1。 DC 間のレイテンシ</h3><pre><code class="language-bash"># Ping test
ping -c 10 10.2.1.11

# TCP latency test
nc -vz 10.2.1.11 5432

# PostgreSQL connection latency
psql "host=10.2.1.11 user=postgres" -c "SELECT now();"

# iPerf bandwidth test
# On DC2:
iperf3 -s
# On DC1:
iperf3 -c 10.2.1.11 -t 30
</code></pre><h3 id="32-optimize-for-high-latency">3.2 を測定します。高遅延</h3><pre><code class="language-sql">-- Increase timeouts for WAN
ALTER SYSTEM SET wal_sender_timeout = '120s';  -- Default 60s
ALTER SYSTEM SET wal_receiver_timeout = '120s';
ALTER SYSTEM SET wal_retrieve_retry_interval = '10s';

-- TCP keepalive settings
ALTER SYSTEM SET tcp_keepalives_idle = 60;
ALTER SYSTEM SET tcp_keepalives_interval = 10;
ALTER SYSTEM SET tcp_keepalives_count = 6;

-- Reload
SELECT pg_reload_conf();
</code></pre><h3 id="33-use-wal-compression">3.3 を最適化します。 WAL 圧縮</h3><pre><code class="language-sql">-- Enable WAL compression (PostgreSQL 14+)
ALTER SYSTEM SET wal_compression = on;

-- Can reduce WAN traffic by 50-70%
SELECT pg_reload_conf();
</code></pre><h3 id="34-limit-replication-bandwidth">3.4 を使用します。レプリケーション帯域幅を制限</h3><pre><code class="language-yaml"># In patroni.yml
bootstrap:
  method: basebackup
  basebackup:
    max-rate: '50M'  # Limit to 50 MB/s to avoid saturating WAN
    checkpoint: 'fast'
</code></pre><h2 id="4-disaster-recovery-scenarios">4。災害復旧シナリオ</h2><h3 id="41-dc1-total-failure">4.1。 DC1 の完全な失敗_</h3><pre><code class="language-bash"># Promote DC2 to primary
# On pg-us-west-1

# Remove standby_cluster config
patronictl edit-config postgres-cluster-dc2 -s scope -p standby_cluster --force

# Promote to leader
patronictl failover postgres-cluster-dc2 --leader pg-us-west-1 --force

# Verify
patronictl -c /etc/patroni/patroni.yml list
# + Cluster: postgres-cluster-dc2 ----+------------+----+-----------+
# | Member         | Host       | Role   | State     | Lag in MB |
# +----------------+------------+--------+-----------+-----------+
# | pg-us-west-1   | 10.2.1.11  | Leader | running   |         0 |
# | pg-us-west-2   | 10.2.1.12  | Replica| streaming |         0 |
# +----------------+------------+--------+-----------+-----------+
</code></pre><h3 id="42-dc1-recovery-after-failure">4.2。障害後の DC1 の回復_</h3><pre><code class="language-bash"># When DC1 comes back online, reintegrate it

# Option 1: Make DC1 follow DC2 (temporary)
# Edit patroni.yml on DC1 nodes to add standby_cluster pointing to DC2

# Option 2: Failback to DC1
# Wait for DC2 to be fully synchronized
# Perform planned switchover back to DC1

patronictl switchover postgres-cluster-dc2 \
  --leader pg-us-west-1 \
  --candidate pg-us-east-1 \
  --scheduled 'now'
</code></pre><h3 id="43-split-brain-prevention">4.3。スプリット ブレイン防止_</h3><pre><code class="language-yaml"># Use etcd/consul in both DCs
# Each DC has its own etcd cluster
# Use etcd discovery URL for cross-DC awareness

etcd:
  hosts:
    - 10.1.1.11:2379  # DC1
    - 10.1.1.12:2379
    - 10.2.1.11:2379  # DC2
    - 10.2.1.12:2379
</code></pre><p><strong>注</strong>: 真のスプリット ブレイン防止については、次の点を考慮してください:_</p><ol><li><strong>奇数のサイト</strong>(3+ DC)監視ノード_</li><li><strong>フェンシングメカニズム</strong>&nbsp;(STONITH)</li><li><strong>クォーラムベースの決定</strong></li></ol><h2 id="5-geographic-load-balancing">5。地理的負荷分散</h2><h3 id="51-haproxy-with-geo-awareness">5.1。地理認識を備えた HAProxy_</h3><pre><code class="language-text">Architecture:

Users (us-east) → HAProxy-DC1 → PG-DC1 (primary)
Users (us-west) → HAProxy-DC2 → PG-DC2 (replica) - read-only
                             ↳ PG-DC1 (primary) - writes
</code></pre><pre><code class="language-bash"># /etc/haproxy/haproxy.cfg on HAProxy-DC1 (us-east)
frontend postgres_front
  bind *:5432
  mode tcp
  default_backend postgres_master

backend postgres_master
  mode tcp
  option tcp-check
  tcp-check connect
  tcp-check send-binary 00000008  # SSLRequest
  tcp-check expect binary 4e       # 'N' (no SSL)
  server pg-us-east-1 10.1.1.11:5432 check inter 3000
  server pg-us-east-2 10.1.1.12:5432 check inter 3000 backup
</code></pre><pre><code class="language-bash"># /etc/haproxy/haproxy.cfg on HAProxy-DC2 (us-west)
frontend postgres_front_read
  bind *:5432
  mode tcp
  default_backend postgres_replicas

frontend postgres_front_write
  bind *:5433
  mode tcp
  default_backend postgres_master_remote

backend postgres_replicas
  # Local read replicas
  mode tcp
  balance roundrobin
  option tcp-check
  server pg-us-west-1 10.2.1.11:5432 check inter 3000
  server pg-us-west-2 10.2.1.12:5432 check inter 3000

backend postgres_master_remote
  # Write to primary in DC1
  mode tcp
  option tcp-check
  server pg-us-east-1 10.1.1.11:5432 check inter 3000
  server pg-us-east-2 10.1.1.12:5432 check inter 3000 backup
</code></pre><h3 id="52-dns-based-routing">5.2。 DNS ベースのルーティング</h3><pre><code class="language-bash"># Use DNS with geo-location
# GeoDNS service (Route53, Cloudflare, etc.)

# US-East users resolve to:
postgres.example.com → 10.1.1.100 (HAProxy-DC1)

# US-West users resolve to:
postgres.example.com → 10.2.1.100 (HAProxy-DC2)

# Configure health checks to failover on DC failure
</code></pre><h3 id="53-application-level-routing">5.3。アプリケーションレベルのルーティング</h3><pre><code class="language-python"># Python example with psycopg2
import psycopg2
import requests

def get_postgres_endpoint():
    """Get optimal PostgreSQL endpoint based on geo-location"""
    # Check latency to each DC
    latencies = {}
    for dc, host in [('dc1', '10.1.1.11'), ('dc2', '10.2.1.11')]:
        try:
            start = time.time()
            conn = psycopg2.connect(
                host=host, user='app', password='pass',
                dbname='mydb', connect_timeout=3
            )
            conn.close()
            latencies[dc] = time.time() - start
        except:
            latencies[dc] = float('inf')
    
    # Return DC with lowest latency
    best_dc = min(latencies, key=latencies.get)
    return '10.1.1.11' if best_dc == 'dc1' else '10.2.1.11'

# Use it
conn = psycopg2.connect(
    host=get_postgres_endpoint(),
    user='app', password='pass', dbname='mydb'
)
</code></pre><h2 id="6-cross-dc-monitoring">6。 DC 間モニタリング</h2><h3 id="61-monitor-replication-lag">6.1。レプリケーションの遅延を監視します_</h3><pre><code class="language-sql">-- On cascade node (DC1)
SELECT client_addr, application_name,
       state, sync_state,
       pg_wal_lsn_diff(pg_current_wal_lsn(), sent_lsn) AS sending_lag,
       pg_wal_lsn_diff(sent_lsn, write_lsn) AS write_lag,
       pg_wal_lsn_diff(write_lsn, flush_lsn) AS flush_lag,
       pg_wal_lsn_diff(flush_lsn, replay_lsn) AS replay_lag
FROM pg_stat_replication
WHERE application_name LIKE '%west%';
</code></pre><pre><code class="language-bash"># Expected replication lag for cross-DC:
# - Low latency WAN (&lt; 10ms): 0-10 MB lag
# - Medium latency WAN (10-50ms): 10-50 MB lag
# - High latency WAN (&gt; 50ms): 50-200 MB lag
</code></pre><h3 id="62-prometheus-exporters">6.2。 Prometheus エクスポーター_</h3><pre><code class="language-yaml"># prometheus.yml
scrape_configs:
  - job_name: 'postgres-dc1'
    static_configs:
      - targets:
          - '10.1.1.11:9187'
          - '10.1.1.12:9187'
          - '10.1.1.13:9187'
    labels:
      datacenter: 'us-east'
  
  - job_name: 'postgres-dc2'
    static_configs:
      - targets:
          - '10.2.1.11:9187'
          - '10.2.1.12:9187'
    labels:
      datacenter: 'us-west'
</code></pre><h3 id="63-alert-rules-for-cross-dc">6.3。クロス DC_</h3><pre><code class="language-yaml"># /etc/prometheus/alerts/multi-dc.yml
groups:
  - name: multi-dc
    rules:
      - alert: CrossDCReplicationLag
        expr: |
          pg_replication_lag{datacenter="us-west"} &gt; 100 * 1024 * 1024
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High replication lag to DC2"
          description: "Replication lag to {{ $labels.instance }} is {{ $value | humanize }}B"
      
      - alert: CrossDCReplicationBroken
        expr: |
          pg_replication_status{datacenter="us-west"} == 0
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "Replication to DC2 is broken"
      
      - alert: CrossDCLatency
        expr: |
          probe_duration_seconds{job="blackbox-dc2"} &gt; 0.1
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High network latency to DC2"
</code></pre><h2 id="7-backup-strategy-for-multi-dc">7 のアラート ルール。マルチ DC のバックアップ戦略</h2><h3 id="71-per-dc-backups">7.1。 DC ごとのバックアップ_</h3><pre><code class="language-bash"># DC1 backup
pgbackrest --stanza=main --type=full backup

# DC2 backup (can use DC1's backup repo over WAN)
pgbackrest --stanza=main --type=diff backup --repo1-host=10.1.1.11
</code></pre><h3 id="72-geo-replicated-backup-storage">7.2。 Geo レプリケートされたバックアップ ストレージ</h3><pre><code class="language-yaml"># pgbackrest.conf
[global]
repo1-type=s3
repo1-s3-bucket=my-postgres-backups-us-east
repo1-s3-region=us-east-1
repo1-s3-endpoint=s3.amazonaws.com

# S3 cross-region replication enabled:
# us-east-1 → us-west-2
</code></pre><h3 id="73-backup-verification">7.3。バックアップの検証_</h3><pre><code class="language-bash"># Restore test in DR site
pgbackrest --stanza=main \
  --type=time \
  --target="2024-11-25 10:00:00" \
  restore \
  --repo1-host=backup-server \
  --pg1-path=/var/lib/postgresql/18/restore_test
</code></pre><h2 id="8-best-practices">8。ベスト プラクティス</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>私たちカスケード レプリケーション</strong>&nbsp;- プライマリの負荷を軽減</li><li><strong>分離された etcd クラスター</strong>&nbsp;- DC ごとに独立性を確保</li><li><strong>レプリケーションを監視ラグ</strong>&nbsp;- ラグが大きい場合のアラート_</li><li><strong>フェールオーバーを定期的にテストする</strong>&nbsp;- 四半期ごとの DR ドリル</li><li><strong>レプリケーションを使用するスロット</strong>&nbsp;- WAL の削除を防止_</li><li><strong>WAL を圧縮</strong>&nbsp;- WAN 帯域幅を削減</li><li><strong>ベース バックアップを制限するrate_</strong>&nbsp;- WAN の飽和を回避</li><li><strong>地理ルーティングを実装</strong>&nbsp;- ユーザーの遅延を削減</li><li><strong>ドキュメントトポロジー</strong>&nbsp;- 明確なアーキテクチャ図_</li><li><strong>フェイルオーバーの自動化</strong>&nbsp;- ただし、人間による DR</li></ol><h3 id="%E2%9D%8C-dont">❌禁止</h3><ol><li><strong>DC 間の同期レプリケーションを使用しない</strong>&nbsp;- 遅すぎる</li><li><strong>WAN 経由で etcd を共有しない</strong>&nbsp;- スプリットブレインリスク_</li><li><strong>ネットワーク遅延を無視しない</strong>&nbsp;- タイムアウトを調整</li><li><strong>WAL 保持を忘れないでください</strong>&nbsp;- 使用スロット_</li><li><strong>DR テストをスキップしないでください</strong>&nbsp;- 定期的に検証する必要があります</li><li><strong>バックアップに単一の DC を使用しないでください</strong>&nbsp;-地理レプリケート_</li><li><strong>複雑になりすぎない</strong>&nbsp;- まずはシンプルにして、必要に応じて複雑さを加えてください</li></ol><h2 id="9-lab-exercises">9。ラボ演習</h2><h3 id="lab-1-setup-cascading-replication">ラボ 1: カスケード レプリケーションのセットアップ</h3><p><strong>タスク</strong>:</p><ol><li>でカスケード ノードを構成するDC1_</li><li>DC2 でのダウンストリーム レプリカのセットアップ</li><li>レプリケーション スロットの作成_</li><li>レプリケーション ラグの確認</li><li>監視Prometheus_</li></ol><h3 id="lab-2-test-dr-failover">ラボ 2: DR フェイルオーバーのテスト</h3><p><strong>タスク</strong>:</p><ol><li>DC1 障害のシミュレーション (すべて停止)ノード)</li><li>DC2 をプライマリに昇格</li><li>アプリケーションの接続を確認</li><li>RTO/RPO を文書化_</li><li>フェイルバック手順を計画</li></ol><h3 id="lab-3-geo-aware-load-balancing">ラボ3: 地域認識負荷分散</h3><p><strong>タスク</strong>:</p><ol><li>各 DC での HAProxy のセットアップ</li><li>地域ベースの構成ルーティング</li><li>読み取り/書き込みルーティングのテスト</li><li>レイテンシー改善の測定</li><li>heaの実装l 番目のチェック_</li></ol><h3 id="lab-4-cross-dc-monitoring">実習 4: クロス DC モニタリング</h3><p><strong>_タスク</strong>:</p><ol><li>Prometheus マルチ DC の構成スクレイピング_</li><li>DC ラベルを使用した Grafana ダッシュボードの作成_</li><li>DC 間ラグのアラート ルールのセットアップ</li><li>シミュレートされた障害に関するアラートのテスト_</li><li>次の Runbook をドキュメント化するアラート_</li></ol><h2 id="10-advanced-topics">10。高度なトピック_</h2><h3 id="101-three-datacenter-setup">10.1。 3 つのデータセンターのセットアップ_</h3><pre><code class="language-text">DC1 (us-east):
  └─ pg1 (Leader)
      ├─ pg2 (Replica)
      └─ pg3 (Cascade) → DC2

DC2 (us-west):
  └─ pg4 (Replica from pg3)
      ├─ pg5 (Replica)
      └─ pg6 (Cascade) → DC3

DC3 (eu-central):
  └─ pg7 (Replica from pg6)
      └─ pg8 (Replica)

Use case: Global application with regional reads
</code></pre><h3 id="102-active-active-with-logical-replication">10.2。論理レプリケーションによるアクティブ/アクティブ</h3><pre><code class="language-sql">-- DC1 publication
CREATE PUBLICATION dc1_pub FOR ALL TABLES;

-- DC2 subscription
CREATE SUBSCRIPTION dc2_sub
CONNECTION 'host=10.1.1.11 dbname=mydb user=replicator'
PUBLICATION dc1_pub
WITH (copy_data = true);

-- DC2 publication (for bi-directional)
CREATE PUBLICATION dc2_pub FOR ALL TABLES;

-- DC1 subscription
CREATE SUBSCRIPTION dc1_sub
CONNECTION 'host=10.2.1.11 dbname=mydb user=replicator'
PUBLICATION dc2_pub
WITH (copy_data = false);  -- Already have data

-- Conflict resolution required!
-- See: https://www.postgresql.org/docs/current/logical-replication-conflicts.html
</code></pre><h3 id="103-quorum-based-commit">10.3。クォーラムベースのコミット_</h3><pre><code class="language-yaml"># For strong consistency across DCs
postgresql:
  parameters:
    synchronous_standby_names: 'ANY 2 (pg-us-east-2, pg-us-west-1, pg-eu-central-1)'
    synchronous_commit: 'remote_apply'

# Requires 2 of 3 DCs to acknowledge commit
# Provides strong durability but higher latency
</code></pre><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11。概要_</h2><h3 id="multi-dc-strategies">マルチ DC 戦略</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_パターン</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_RPO</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">RTO</th>___HTML TAG_335___複雑さ_</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">コスト</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">アクティブ/パッシブ(DR)</td><td style="padding: 5px 10px;">分</td><td style="padding: 5px 10px;">分</td>___HTMLTAG_349_ __低</td><td style="padding: 5px 10px;">低</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">カスケードレプリカ</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">秒</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">秒</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">中</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">中___HTMLTAG_ 364___</tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">アクティブ-アクティブ</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ニアゼロ</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ニアゼロ</td>___HTMLT AG_373___高</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">高</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">_ハブアンドスポーク</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">_秒___HTML AG_382___<td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">分</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">中</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">_中</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="key-metrics">主要な指標_</h3><pre><code class="language-text">Replication Lag: &lt; 50 MB for WAN
Network Latency: &lt; 100 ms acceptable
Throughput: 50-100 MB/s typical for WAN
RPO Target: &lt; 5 minutes
RTO Target: &lt; 15 minutes
</code></pre><h3 id="checklist">チェックリスト</h3><pre><code class="language-text">☐ Cascading replication configured
☐ Separate etcd per DC
☐ Replication slots created
☐ WAL compression enabled
☐ Timeouts tuned for WAN
☐ Geo-aware load balancing
☐ Cross-DC monitoring
☐ DR failover tested
☐ Backup geo-replication
☐ Documentation complete
</code></pre><h3 id="next-steps">次のステップ_</h3><p>レッスン 22 では、<strong>Patroni について説明します。 Kubernetes</strong>:</p><ul><li>StatefulSet 構成</li><li>Patroni Kubernetes オペレーター</li><li>Persistent Volumes セットアップ</li><li>Helm チャート使用法_</li><li>K8s 固有の考慮事項_</li></ul>