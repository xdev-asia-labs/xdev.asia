---
id: 019c9617-fba1-7128-b313-6412f33f40cf
title: 'Bài 21: Multi-datacenter Setup'
slug: bai-21-multi-datacenter-setup
description: ' Chiến lược replication cross-DC, asynchronous cascading replication, disaster recovery planning và geographic load balancing.'
duration_minutes: 135
is_free: true
video_url: null
sort_order: 21
section_title: PostgreSQL High Availability với Patroni & etcd
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---
<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Design cross-datacenter replication architecture</li><li>Implement cascading replication topology</li><li>Handle network latency and failures</li><li>Configure disaster recovery for multiple sites</li><li>Load balance across geographic locations</li></ul><h2 id="1-multi-dc-architecture-patterns">1. Multi-DC Architecture Patterns</h2><h3 id="11-active-passive-dr-standby">1.1. Active-Passive (DR standby)</h3><pre><code class="language-text">Primary DC (Active):
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
</code></pre><h3 id="12-active-active-multi-master">1.2. Active-Active (Multi-master)</h3><pre><code class="language-text">DC1 (Active):
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
</code></pre><h3 id="13-hub-and-spoke-cascading">1.3. Hub-and-Spoke (Cascading)</h3><pre><code class="language-text">Primary DC (Hub):
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
</code></pre><h2 id="2-cascading-replication-setup">2. Cascading Replication Setup</h2><h3 id="21-architecture">2.1. Architecture</h3><pre><code class="language-text">DC1 (us-east):
  ├─ pg-us-east-1 (Leader) - 10.1.1.11
  ├─ pg-us-east-2 (Replica) - 10.1.1.12
  └─ pg-us-east-3 (Cascade) - 10.1.1.13
        ↓ WAN replication
DC2 (us-west):
  └─ pg-us-west-1 (Replica) - 10.2.1.11
      ├─ Receives from pg-us-east-3
      └─ pg-us-west-2 (Replica) - 10.2.1.12
</code></pre><h3 id="22-configure-cascading-node-dc1">2.2. Configure cascading node (DC1)</h3><pre><code class="language-yaml"># /etc/patroni/patroni.yml on pg-us-east-3 (cascade node)
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
</code></pre><h3 id="23-configure-downstream-replica-dc2">2.3. Configure downstream replica (DC2)</h3><pre><code class="language-yaml"># /etc/patroni/patroni.yml on pg-us-west-1
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
</code></pre><h3 id="24-create-replication-slot-on-cascade-node">2.4. Create replication slot on cascade node</h3><pre><code class="language-bash"># On pg-us-east-3 (cascade node)
sudo -u postgres psql -c "
  SELECT pg_create_physical_replication_slot('pg_us_west_1_slot');
"
</code></pre><h3 id="25-start-dc2-replica">2.5. Start DC2 replica</h3><pre><code class="language-bash"># On pg-us-west-1
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
</code></pre><h2 id="3-network-latency-handling">3. Network Latency Handling</h2><h3 id="31-measure-inter-dc-latency">3.1. Measure inter-DC latency</h3><pre><code class="language-bash"># Ping test
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
</code></pre><h3 id="32-optimize-for-high-latency">3.2. Optimize for high latency</h3><pre><code class="language-sql">-- Increase timeouts for WAN
ALTER SYSTEM SET wal_sender_timeout = '120s';  -- Default 60s
ALTER SYSTEM SET wal_receiver_timeout = '120s';
ALTER SYSTEM SET wal_retrieve_retry_interval = '10s';

-- TCP keepalive settings
ALTER SYSTEM SET tcp_keepalives_idle = 60;
ALTER SYSTEM SET tcp_keepalives_interval = 10;
ALTER SYSTEM SET tcp_keepalives_count = 6;

-- Reload
SELECT pg_reload_conf();
</code></pre><h3 id="33-use-wal-compression">3.3. Use WAL compression</h3><pre><code class="language-sql">-- Enable WAL compression (PostgreSQL 14+)
ALTER SYSTEM SET wal_compression = on;

-- Can reduce WAN traffic by 50-70%
SELECT pg_reload_conf();
</code></pre><h3 id="34-limit-replication-bandwidth">3.4. Limit replication bandwidth</h3><pre><code class="language-yaml"># In patroni.yml
bootstrap:
  method: basebackup
  basebackup:
    max-rate: '50M'  # Limit to 50 MB/s to avoid saturating WAN
    checkpoint: 'fast'
</code></pre><h2 id="4-disaster-recovery-scenarios">4. Disaster Recovery Scenarios</h2><h3 id="41-dc1-total-failure">4.1. DC1 total failure</h3><pre><code class="language-bash"># Promote DC2 to primary
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
</code></pre><h3 id="42-dc1-recovery-after-failure">4.2. DC1 recovery after failure</h3><pre><code class="language-bash"># When DC1 comes back online, reintegrate it

# Option 1: Make DC1 follow DC2 (temporary)
# Edit patroni.yml on DC1 nodes to add standby_cluster pointing to DC2

# Option 2: Failback to DC1
# Wait for DC2 to be fully synchronized
# Perform planned switchover back to DC1

patronictl switchover postgres-cluster-dc2 \
  --leader pg-us-west-1 \
  --candidate pg-us-east-1 \
  --scheduled 'now'
</code></pre><h3 id="43-split-brain-prevention">4.3. Split-brain prevention</h3><pre><code class="language-yaml"># Use etcd/consul in both DCs
# Each DC has its own etcd cluster
# Use etcd discovery URL for cross-DC awareness

etcd:
  hosts:
    - 10.1.1.11:2379  # DC1
    - 10.1.1.12:2379
    - 10.2.1.11:2379  # DC2
    - 10.2.1.12:2379
</code></pre><p><strong>Note</strong>: For true split-brain prevention, consider:</p><ol><li><strong>Odd number of sites</strong>&nbsp;(3+ DCs) with witness node</li><li><strong>Fencing mechanisms</strong>&nbsp;(STONITH)</li><li><strong>Quorum-based decisions</strong></li></ol><h2 id="5-geographic-load-balancing">5. Geographic Load Balancing</h2><h3 id="51-haproxy-with-geo-awareness">5.1. HAProxy with geo-awareness</h3><pre><code class="language-text">Architecture:

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
</code></pre><h3 id="52-dns-based-routing">5.2. DNS-based routing</h3><pre><code class="language-bash"># Use DNS with geo-location
# GeoDNS service (Route53, Cloudflare, etc.)

# US-East users resolve to:
postgres.example.com → 10.1.1.100 (HAProxy-DC1)

# US-West users resolve to:
postgres.example.com → 10.2.1.100 (HAProxy-DC2)

# Configure health checks to failover on DC failure
</code></pre><h3 id="53-application-level-routing">5.3. Application-level routing</h3><pre><code class="language-python"># Python example with psycopg2
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
</code></pre><h2 id="6-cross-dc-monitoring">6. Cross-DC Monitoring</h2><h3 id="61-monitor-replication-lag">6.1. Monitor replication lag</h3><pre><code class="language-sql">-- On cascade node (DC1)
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
</code></pre><h3 id="62-prometheus-exporters">6.2. Prometheus exporters</h3><pre><code class="language-yaml"># prometheus.yml
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
</code></pre><h3 id="63-alert-rules-for-cross-dc">6.3. Alert rules for cross-DC</h3><pre><code class="language-yaml"># /etc/prometheus/alerts/multi-dc.yml
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
</code></pre><h2 id="7-backup-strategy-for-multi-dc">7. Backup Strategy for Multi-DC</h2><h3 id="71-per-dc-backups">7.1. Per-DC backups</h3><pre><code class="language-bash"># DC1 backup
pgbackrest --stanza=main --type=full backup

# DC2 backup (can use DC1's backup repo over WAN)
pgbackrest --stanza=main --type=diff backup --repo1-host=10.1.1.11
</code></pre><h3 id="72-geo-replicated-backup-storage">7.2. Geo-replicated backup storage</h3><pre><code class="language-yaml"># pgbackrest.conf
[global]
repo1-type=s3
repo1-s3-bucket=my-postgres-backups-us-east
repo1-s3-region=us-east-1
repo1-s3-endpoint=s3.amazonaws.com

# S3 cross-region replication enabled:
# us-east-1 → us-west-2
</code></pre><h3 id="73-backup-verification">7.3. Backup verification</h3><pre><code class="language-bash"># Restore test in DR site
pgbackrest --stanza=main \
  --type=time \
  --target="2024-11-25 10:00:00" \
  restore \
  --repo1-host=backup-server \
  --pg1-path=/var/lib/postgresql/18/restore_test
</code></pre><h2 id="8-best-practices">8. Best Practices</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>Use cascading replication</strong>&nbsp;- Reduces load on primary</li><li><strong>Separate etcd clusters</strong>&nbsp;- Per-DC for independence</li><li><strong>Monitor replication lag</strong>&nbsp;- Alert on high lag</li><li><strong>Test failover regularly</strong>&nbsp;- Quarterly DR drills</li><li><strong>Use replication slots</strong>&nbsp;- Prevent WAL deletion</li><li><strong>Compress WAL</strong>&nbsp;- Reduce WAN bandwidth</li><li><strong>Limit base backup rate</strong>&nbsp;- Avoid WAN saturation</li><li><strong>Implement geo-routing</strong>&nbsp;- Reduce latency for users</li><li><strong>Document topology</strong>&nbsp;- Clear architecture diagrams</li><li><strong>Automate failover</strong>&nbsp;- But with human approval for DR</li></ol><h3 id="%E2%9D%8C-dont">❌ DON'T</h3><ol><li><strong>Don't use sync replication cross-DC</strong>&nbsp;- Too slow</li><li><strong>Don't share etcd across WAN</strong>&nbsp;- Split-brain risk</li><li><strong>Don't ignore network latency</strong>&nbsp;- Tune timeouts</li><li><strong>Don't forget about WAL retention</strong>&nbsp;- Use slots</li><li><strong>Don't skip DR testing</strong>&nbsp;- Must validate regularly</li><li><strong>Don't use single DC for backups</strong>&nbsp;- Geo-replicate</li><li><strong>Don't over-complicate</strong>&nbsp;- Start simple, add complexity as needed</li></ol><h2 id="9-lab-exercises">9. Lab Exercises</h2><h3 id="lab-1-setup-cascading-replication">Lab 1: Setup cascading replication</h3><p><strong>Tasks</strong>:</p><ol><li>Configure cascade node in DC1</li><li>Setup downstream replica in DC2</li><li>Create replication slot</li><li>Verify replication lag</li><li>Monitor with Prometheus</li></ol><h3 id="lab-2-test-dr-failover">Lab 2: Test DR failover</h3><p><strong>Tasks</strong>:</p><ol><li>Simulate DC1 failure (stop all nodes)</li><li>Promote DC2 to primary</li><li>Verify application connectivity</li><li>Document RTO/RPO</li><li>Plan failback procedure</li></ol><h3 id="lab-3-geo-aware-load-balancing">Lab 3: Geo-aware load balancing</h3><p><strong>Tasks</strong>:</p><ol><li>Setup HAProxy in each DC</li><li>Configure geo-based routing</li><li>Test read/write routing</li><li>Measure latency improvement</li><li>Implement health checks</li></ol><h3 id="lab-4-cross-dc-monitoring">Lab 4: Cross-DC monitoring</h3><p><strong>Tasks</strong>:</p><ol><li>Configure Prometheus multi-DC scraping</li><li>Create Grafana dashboard with DC labels</li><li>Setup alert rules for cross-DC lag</li><li>Test alerting on simulated failure</li><li>Document runbook for alerts</li></ol><h2 id="10-advanced-topics">10. Advanced Topics</h2><h3 id="101-three-datacenter-setup">10.1. Three-datacenter setup</h3><pre><code class="language-text">DC1 (us-east):
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
</code></pre><h3 id="102-active-active-with-logical-replication">10.2. Active-active with logical replication</h3><pre><code class="language-sql">-- DC1 publication
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
</code></pre><h3 id="103-quorum-based-commit">10.3. Quorum-based commit</h3><pre><code class="language-yaml"># For strong consistency across DCs
postgresql:
  parameters:
    synchronous_standby_names: 'ANY 2 (pg-us-east-2, pg-us-west-1, pg-eu-central-1)'
    synchronous_commit: 'remote_apply'

# Requires 2 of 3 DCs to acknowledge commit
# Provides strong durability but higher latency
</code></pre><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11. Tổng kết</h2><h3 id="multi-dc-strategies">Multi-DC Strategies</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Pattern</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">RPO</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">RTO</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Complexity</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Cost</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">Active-Passive (DR)</td><td style="padding: 5px 10px;">Minutes</td><td style="padding: 5px 10px;">Minutes</td><td style="padding: 5px 10px;">Low</td><td style="padding: 5px 10px;">Low</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Cascading Replicas</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Seconds</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Seconds</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Active-Active</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Near-zero</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Near-zero</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">High</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">High</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Hub-and-Spoke</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Seconds</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Minutes</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="key-metrics">Key Metrics</h3><pre><code class="language-text">Replication Lag: &lt; 50 MB for WAN
Network Latency: &lt; 100 ms acceptable
Throughput: 50-100 MB/s typical for WAN
RPO Target: &lt; 5 minutes
RTO Target: &lt; 15 minutes
</code></pre><h3 id="checklist">Checklist</h3><pre><code class="language-text">☐ Cascading replication configured
☐ Separate etcd per DC
☐ Replication slots created
☐ WAL compression enabled
☐ Timeouts tuned for WAN
☐ Geo-aware load balancing
☐ Cross-DC monitoring
☐ DR failover tested
☐ Backup geo-replication
☐ Documentation complete
</code></pre><h3 id="next-steps">Next Steps</h3><p>Bài 22 sẽ cover&nbsp;<strong>Patroni on Kubernetes</strong>:</p><ul><li>StatefulSets configuration</li><li>Patroni Kubernetes operator</li><li>PersistentVolumes setup</li><li>Helm charts usage</li><li>K8s-specific considerations</li></ul>
