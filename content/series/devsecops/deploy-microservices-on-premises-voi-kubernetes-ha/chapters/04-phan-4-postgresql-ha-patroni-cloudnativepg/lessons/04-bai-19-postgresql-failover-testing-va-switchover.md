---
id: 019e1a00-aa01-7001-c001-k8sha000404
title: 'BÀI 19: POSTGRESQL FAILOVER TESTING VÀ SWITCHOVER'
slug: bai-19-postgresql-failover-testing-va-switchover
description: >-
  Test automatic failover khi primary down, planned switchover,
  fencing mechanisms, monitoring replication lag,
  và application connection handling.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 19
section_title: 'Phần 4: PostgreSQL HA với Patroni & CloudNativePG'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 'Deploy Microservices On-Premises với Kubernetes HA'
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
---

<h2 id="muc-tieu-bai-hoc">🎯 MỤC TIÊU BÀI HỌC</h2>
<ul>
<li>✅ Test automatic failover khi primary pod bị kill</li>
<li>✅ Planned switchover (maintenance window)</li>
<li>✅ Monitor replication lag</li>
<li>✅ Application connection handling during failover</li>
<li>✅ Fencing và split-brain prevention</li>
</ul>

<hr>

<h2 id="phan-1-automatic-failover">PHẦN 1: AUTOMATIC FAILOVER</h2>

<h3 id="11-test-failover">1.1. Test: Kill Primary Pod</h3>
<pre><code class="language-bash"># Current state:
kubectl cnpg status production-pg -n database
# Primary: production-pg-1

# Kill primary pod:
kubectl -n database delete pod production-pg-1

# Watch failover (real-time):
kubectl -n database get pods -w
# production-pg-1    1/1     Terminating   0     1h
# production-pg-2    1/1     Running       0     1h   ← Promoted to Primary!
# production-pg-3    1/1     Running       0     1h
# production-pg-1    0/1     Pending       0     0s   ← Recreating as Standby

# Verify new primary:
kubectl cnpg status production-pg -n database
# Primary instance: production-pg-2  ← New primary!

# Check services updated:
kubectl -n database get endpoints production-pg-rw
# ENDPOINTS
# 10.244.2.5:5432  ← production-pg-2 IP

# ⏱️ Failover time: ~5-15 seconds
</code></pre>

<h3 id="12-failover-timeline">1.2. Failover Timeline</h3>
<pre><code>
Timeline:
T+0s:   Primary pod deleted
T+1s:   K8s detects pod termination
T+3s:   Operator detects primary failure
T+5s:   Operator selects standby with highest LSN
T+8s:   Standby promoted to primary (pg_promote)
T+10s:  Service rw endpoint updated
T+12s:  Other standbys repoint to new primary
T+15s:  Old primary restarts as standby

Total downtime: ~10-15 seconds (write unavailability)
Read queries: ~0s downtime (ro service still serves)
</code></pre>

<hr>

<h2 id="phan-2-planned-switchover">PHẦN 2: PLANNED SWITCHOVER</h2>

<h3 id="21-switchover-command">2.1. Planned Switchover (zero data loss)</h3>
<pre><code class="language-bash"># Switchover = planned promotion (graceful)
# Use case: maintenance, node drain, rebalancing

# Install cnpg kubectl plugin:
curl -sSfL https://github.com/cloudnative-pg/cloudnative-pg/releases/latest/download/kubectl-cnpg_linux_x86_64.tar.gz | \
  tar xz -C /usr/local/bin

# Planned switchover tới pg-3:
kubectl cnpg promote production-pg production-pg-3 -n database

# Monitor:
kubectl cnpg status production-pg -n database
# Primary instance: production-pg-3  ← Switched!

# Switchover process:
# 1. Operator stops writes on current primary
# 2. Wait for all standbys to catch up (WAL replay)
# 3. Promote target standby → Primary
# 4. Demote old primary → Standby
# 5. Update services
# → Zero data loss! ✅
</code></pre>

<hr>

<h2 id="phan-3-replication-lag">PHẦN 3: MONITORING REPLICATION LAG</h2>

<pre><code class="language-bash"># Check replication lag on Primary:
kubectl -n database exec production-pg-3 -- psql -U postgres -c \
  "SELECT 
    client_addr,
    application_name,
    state,
    sync_state,
    sent_lsn,
    write_lsn,
    flush_lsn,
    replay_lsn,
    pg_wal_lsn_diff(sent_lsn, replay_lsn) AS replay_lag_bytes,
    write_lag,
    flush_lag,
    replay_lag
  FROM pg_stat_replication;"

# Output:
# client_addr  | application_name | state     | replay_lag_bytes | replay_lag
# 10.244.1.5   | production-pg-1  | streaming | 0                | 00:00:00.001
# 10.244.2.5   | production-pg-2  | streaming | 0                | 00:00:00.001

# ✅ replay_lag_bytes = 0 → fully caught up
# ⚠️ replay_lag_bytes > 0 → replication delay
</code></pre>

<h3 id="31-prometheus-alerts">3.1. Alerting on Replication Lag</h3>
<pre><code class="language-yaml"># pg-alerts.yaml:
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: postgresql-alerts
  namespace: database
spec:
  groups:
    - name: postgresql
      rules:
        - alert: PostgreSQLReplicationLag
          expr: cnpg_pg_replication_streaming_replics < 2
          for: 5m
          labels:
            severity: warning
          annotations:
            summary: "PostgreSQL replication lag detected"

        - alert: PostgreSQLDown
          expr: cnpg_collector_up == 0
          for: 1m
          labels:
            severity: critical
          annotations:
            summary: "PostgreSQL instance down"
</code></pre>

<hr>

<h2 id="phan-4-app-connection">PHẦN 4: APPLICATION CONNECTION HANDLING</h2>

<h3 id="41-connection-failover">4.1. Xử lý failover trong ứng dụng</h3>
<pre><code class="language-yaml"># Application deployment sử dụng service names:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  namespace: default
spec:
  template:
    spec:
      containers:
        - name: app
          env:
            # Write connection (via PgBouncer):
            - name: DATABASE_URL
              value: "postgresql://appuser:$(PG_PASSWORD)@production-pg-pooler-rw.database:5432/appdb?sslmode=require"
            # Read connection:
            - name: DATABASE_READ_URL
              value: "postgresql://appuser:$(PG_PASSWORD)@production-pg-pooler-ro.database:5432/appdb?sslmode=require"
            - name: PG_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: pg-app-secret
                  key: password
</code></pre>

<pre><code class="language-python"># Python app connection handling:
import psycopg2
from psycopg2 import OperationalError
import time

def get_connection(retries=3, delay=2):
    """Retry connection on failover"""
    for attempt in range(retries):
        try:
            conn = psycopg2.connect(
                host="production-pg-pooler-rw.database",
                port=5432,
                dbname="appdb",
                user="appuser",
                password=os.environ["PG_PASSWORD"],
                connect_timeout=5,
                # Auto-reconnect params:
                target_session_attrs="read-write"
            )
            return conn
        except OperationalError as e:
            if attempt < retries - 1:
                time.sleep(delay)
            else:
                raise
</code></pre>

<hr>

<h2 id="phan-5-fencing">PHẦN 5: FENCING VÀ SPLIT-BRAIN PREVENTION</h2>

<pre><code>
Split-brain scenario:
┌──────────┐     Network     ┌──────────┐
│ pg-1     │◄──── SPLIT ────►│ pg-2     │
│ PRIMARY  │     partition    │ PRIMARY? │  ⚠️ TWO PRIMARIES!
└──────────┘                  └──────────┘

CloudNativePG prevention:
1. K8s Lease-based fencing:
   - Primary phải maintain K8s Lease
   - Nếu không renew → tự demote
   
2. Pod deletion fencing:
   - Old primary pod bị delete khi new primary promoted
   - K8s ensures only 1 primary at a time
   
3. pg_rewind:
   - Khi old primary restart → pg_rewind tự fix timeline
   - Join lại cluster as standby
</code></pre>

<hr>

<h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Automatic failover</strong>: ~10-15 seconds, operator detects + promotes</li>
<li><strong>Planned switchover</strong>: zero data loss, <code>kubectl cnpg promote</code></li>
<li><strong>Replication lag monitoring</strong>: pg_stat_replication, Prometheus metrics</li>
<li><strong>Application</strong>: Dùng service names, retry logic, target_session_attrs</li>
<li><strong>Fencing</strong>: K8s Lease prevents split-brain</li>
<li><strong>PgBouncer</strong> hides failover from applications (transparent reconnect)</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 BÀI TẬP</h2>

<h3 id="bt1">Bài tập 1: Failover Lab</h3>
<ul>
<li>Kill primary pod, measure failover time</li>
<li>Verify data consistency after failover</li>
<li>Planned switchover to specific standby</li>
</ul>

<h3 id="bt2">Bài tập 2: App Connection Test</h3>
<ul>
<li>Deploy simple app connecting to PG via PgBouncer</li>
<li>Trigger failover while app is writing</li>
<li>Verify app recovers automatically</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 BÀI TIẾP THEO</h2>
<p>Trong <strong>Bài 20: PostgreSQL Monitoring, Tuning và Day-2 Operations</strong>, chúng ta sẽ setup monitoring chi tiết và tuning cho production.</p>
