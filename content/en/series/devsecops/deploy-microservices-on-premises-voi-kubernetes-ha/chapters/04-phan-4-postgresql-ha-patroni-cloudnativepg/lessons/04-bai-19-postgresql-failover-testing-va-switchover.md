---
id: 019e1a00-aa01-7001-c001-k8sha000404
title: 'LESSON 19: POSTGRESQL FAILOVER TESTING AND SWITCHOVER'
slug: bai-19-postgresql-failover-testing-va-switchover
description: Test automatic failover on primary down, planned switchover, fencing mechanisms, monitoring replication lag, and application connection handling.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 19
section_title: 'Part 4: PostgreSQL HA with Patroni & CloudNativePG'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Deploy Microservices On-Premises with Kubernetes HA
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: en
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-503" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-503)"/>

  <!-- Decorations -->
  <g>
    <circle cx="723" cy="179" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="846" cy="142" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="969" cy="105" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1092" cy="68" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="31" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="129" x2="1100" y2="209" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="159" x2="1050" y2="229" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="967.1051177665153,107 967.1051177665153,151 929,173 890.8948822334847,151 890.8948822334847,107.00000000000001 929,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Lesson 19</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">LESSON 19: POSTGRESQL FAILOVER TESTING AND</tspan>
      <tspan x="60" dy="42">SWITCHOVER</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Deploy Microservices On-Premises with Kubernetes HA</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 4: PostgreSQL HA with Patroni &amp; CloudNativePG</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 LESSON OBJECTIVE__HTMLTAG_68___
<ul>
<li>✅ Test automatic failover when primary pod is killed__HTMLTAG_71___
<li>✅ Planned switchover (maintenance window)</li>
<li>✅ Monitor replication lag</li>
<li>✅ Application connection handling during failover</li>
<li>✅ Fencing and split-brain prevention</li>
</ul>

<hr>

<h2 id="phan-1-automatic-failover">PART 1: AUTOMATIC FAILOVER</h2>

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

<h2 id="phan-2-planned-switchover">PART 2: PLANNED SWITCHOVER</h2>

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

<h2 id="phan-3-replication-lag">PART 3: MONITORING REPLICATION LAG</h2>

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

<h2 id="phan-4-app-connection">PART 4: APPLICATION CONNECTION HANDLING</h2>

<h3 id="41-connection-failover">4.1. Handling failover in applications</h3>
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

<h2 id="phan-5-fencing">PART 5: FENCING AND SPLIT-BRAIN PREVENTION</h2>

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

<hr><h2 id="key-takeaways">💡 KEY TAKEAWAYS</h2>
<ol>
<li><strong>Automatic failover</strong>: ~10-15 seconds, operator detects + promotes</li>
<li><strong>Planned switchover</strong>: zero data loss, <code>kubectl cnpg promote</code></li>
<li><strong>Replication lag monitoring</strong>: pg_stat_replication, Prometheus metrics</li>
<li><strong>Application</strong>: Use service names, retry logic, target_session_attrs</li>
<li><strong>Fencing</strong>: K8s Lease prevents split-brain</li>
<li><strong>PgBouncer</strong> hides failover from applications (transparent reconnect)</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 EXERCISES</h2>

<h3 id="bt1">Exercise 1: Failover Lab</h3>
<ul>
<li>Kill primary pod, measure failover time</li>
<li>Verify data consistency after failover</li>
<li>Planned switchover to specific standby</li>
</ul>

<h3 id="bt2">Exercise 2: App Connection Test</h3>
<ul>
<li>Deploy simple app connecting to PG via PgBouncer</li>
<li>Trigger failover while app is writing</li>
<li>Verify app recovers automatically</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 NEXT POST</h2>
<p>In <strong>Lesson 20: PostgreSQL Monitoring, Tuning and Day-2 Operations</strong>, we will setup detailed monitoring and tuning for production.</p>