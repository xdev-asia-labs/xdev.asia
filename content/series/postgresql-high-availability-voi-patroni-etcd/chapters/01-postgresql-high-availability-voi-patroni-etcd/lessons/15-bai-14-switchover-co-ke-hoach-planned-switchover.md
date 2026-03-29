---
id: 019c9617-fb8b-7187-aede-cf5e97de1cd3
title: 'Bài 14: Switchover có kế hoạch (Planned Switchover)'
slug: bai-14-switchover-co-ke-hoach-planned-switchover
description: >-
  Phân biệt planned switchover và failover, khi nào cần switchover,
  zero-downtime maintenance và thực hành switchover an toàn.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 14
section_title: PostgreSQL High Availability với Patroni & etcd
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---
<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Phân biệt switchover vs failover</li><li>Thực hiện planned switchover an toàn</li><li>Hiểu graceful vs immediate switchover</li><li>Minimize downtime trong maintenance</li><li>Automate switchover cho rolling updates</li><li>Handle switchover trong production</li></ul><h2 id="1-switchover-overview">1. Switchover Overview</h2><h3 id="11-switchover-l%C3%A0-g%C3%AC">1.1. Switchover là gì?</h3><p><strong>Switchover</strong>&nbsp;=&nbsp;<strong>Có kế hoạch</strong>&nbsp;promote một replica lên làm primary.</p><p><strong>So sánh với Failover</strong>:</p>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Aspect</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Failover</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Switchover</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">Trigger</strong></td><td style="padding: 5px 10px;">Primary failure (unplanned)</td><td style="padding: 5px 10px;">Manual/scheduled (planned)</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">Downtime</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">30-60 seconds</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">0-10 seconds</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">Data loss</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Possible (if async)</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Zero (controlled)</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">Control</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Automatic</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Manual/scripted</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">Timing</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Unpredictable</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Scheduled</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="12-khi-n%C3%A0o-c%E1%BA%A7n-switchover">1.2. Khi nào cần switchover?</h3><p><strong>Common scenarios</strong>:</p><h4 id="a-hardware-maintenance">A. Hardware maintenance</h4><pre><code class="language-text">Scenario: Need to replace failing disk on primary server
  → Switchover to replica
  → Perform maintenance on old primary
  → Keep as replica or switchover back
</code></pre><h4 id="b-software-upgrades">B. Software upgrades</h4><pre><code class="language-text">Scenario: OS kernel update requires reboot
  → Switchover to replica
  → Update &amp; reboot old primary
  → Verify, then switchover back (optional)
</code></pre><h4 id="c-database-migration">C. Database migration</h4><pre><code class="language-text">Scenario: Move database to larger server
  → Add new server as replica
  → Switchover to new server
  → Remove old server
</code></pre><h4 id="d-datacenter-migration">D. Datacenter migration</h4><pre><code class="language-text">Scenario: Move from DC1 to DC2
  → Setup replicas in DC2
  → Switchover primary to DC2
  → Decommission DC1 nodes
</code></pre><h4 id="e-testing">E. Testing</h4><pre><code class="language-text">Scenario: Test HA readiness before production
  → Perform switchover in staging
  → Validate application behavior
  → Measure downtime
</code></pre><h3 id="13-switchover-benefits">1.3. Switchover Benefits</h3><p>✅&nbsp;<strong>Zero data loss</strong>&nbsp;- All transactions committed before switch</p><p>✅&nbsp;<strong>Controlled timing</strong>&nbsp;- During maintenance window</p><p>✅&nbsp;<strong>Lower risk</strong>&nbsp;- Coordinated, tested process</p><p>✅&nbsp;<strong>Minimal downtime</strong>&nbsp;- 0-10 seconds vs 30-60 for failover</p><p>✅&nbsp;<strong>Reversible</strong>&nbsp;- Can switchover back if issues</p><h2 id="2-types-of-switchover">2. Types of Switchover</h2><h3 id="21-graceful-switchover-default">2.1. Graceful Switchover (Default)</h3><p><strong>Process</strong>:</p><pre><code class="language-text">1. Verify cluster healthy
2. Wait for replication lag = 0
3. Stop new connections to old primary
4. Wait for active transactions to complete
5. Promote new primary
6. Reconfigure old primary as replica

Downtime: ~5-10 seconds ✅
Data loss: None ✅
</code></pre><p><strong>Command</strong>:</p><pre><code class="language-bash">patronictl switchover postgres
</code></pre><h3 id="22-immediate-switchover">2.2. Immediate Switchover</h3><p><strong>Process</strong>:</p><pre><code class="language-text">1. Immediately promote replica
2. Kill active connections on old primary
3. Demote old primary (force if needed)

Downtime: ~2-5 seconds ✅
Data loss: Possible if transactions in-flight ⚠️
</code></pre><p><strong>Command</strong>:</p><pre><code class="language-bash">patronictl switchover postgres --force
</code></pre><h3 id="23-scheduled-switchover">2.3. Scheduled Switchover</h3><p><strong>Process</strong>:</p><pre><code class="language-text">1. Schedule switchover at specific time
2. Patroni waits until scheduled time
3. Performs graceful switchover automatically

Downtime: ~5-10 seconds ✅
Automation: Full ✅
</code></pre><p><strong>Command</strong>:</p><pre><code class="language-bash">patronictl switchover postgres --scheduled 2024-11-25T02:00:00
</code></pre><h2 id="3-switchover-prerequisites">3. Switchover Prerequisites</h2><h3 id="31-cluster-health-check">3.1. Cluster health check</h3><pre><code class="language-bash"># 1. Verify all nodes running
patronictl list postgres

# Expected:
# + Cluster: postgres (7001234567890123456) ----+----+-----------+
# | Member | Host          | Role    | State   | TL | Lag in MB |
# +--------+---------------+---------+---------+----+-----------+
# | node1  | 10.0.1.11:5432| Leader  | running |  2 |           |
# | node2  | 10.0.1.12:5432| Replica | running |  2 |         0 | ✅
# | node3  | 10.0.1.13:5432| Replica | running |  2 |         0 | ✅
# +--------+---------------+---------+---------+----+-----------+

# All nodes must be:
# - State: running ✅
# - Lag: 0 or very low ✅
# - Same timeline ✅
</code></pre><h3 id="32-replication-lag-check">3.2. Replication lag check</h3><pre><code class="language-bash"># Check lag on all replicas
sudo -u postgres psql -h 10.0.1.11 -c "
SELECT application_name,
       client_addr,
       state,
       pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) AS lag_bytes,
       replay_lag
FROM pg_stat_replication
ORDER BY lag_bytes DESC;
"

# Desired:
# application_name | client_addr | state     | lag_bytes | replay_lag
# -----------------+-------------+-----------+-----------+------------
# node2            | 10.0.1.12   | streaming |         0 | 00:00:00   ✅
# node3            | 10.0.1.13   | streaming |         0 | 00:00:00   ✅
</code></pre><h3 id="33-target-candidate-check">3.3. Target candidate check</h3><pre><code class="language-bash"># Check if target has nofailover tag
patronictl show-config postgres | grep -A10 "tags:"

# Target node should have:
tags:
  nofailover: false  # ✅ Can be promoted
  priority: 100      # Higher = preferred

# NOT:
tags:
  nofailover: true   # ❌ Cannot be promoted
</code></pre><h3 id="34-connection-availability">3.4. Connection availability</h3><pre><code class="language-bash"># Test connection to target
psql -h 10.0.1.12 -U postgres -c "SELECT 1;"

# Test application user
psql -h 10.0.1.12 -U app_user -d myapp -c "SELECT 1;"
</code></pre><h2 id="4-performing-switchover">4. Performing Switchover</h2><h3 id="41-interactive-switchover-recommended">4.1. Interactive Switchover (Recommended)</h3><p><strong>Step-by-step</strong>:</p><pre><code class="language-bash"># 1. Initiate switchover
patronictl switchover postgres

# Patroni prompts:
</code></pre><pre><code class="language-text">Master [node1]:  ← Current primary (press Enter to accept)
Candidate ['node2', 'node3'] []:  ← Type target, e.g., "node2"
When should the switchover take place (e.g. 2024-11-25T10:00 )  [now]:  ← Press Enter for immediate
Are you sure you want to switchover cluster postgres, demoting current master node1? [y/N]: y
</code></pre><p><strong>Output</strong>:</p><pre><code class="language-text">2024-11-25 10:30:00.123 UTC [INFO]: Switching over from node1 to node2
2024-11-25 10:30:02.456 UTC [INFO]: Waiting for replica node2 to catch up...
2024-11-25 10:30:02.789 UTC [INFO]: Replica node2 lag: 0 bytes ✅
2024-11-25 10:30:03.012 UTC [INFO]: Promoting node2...
2024-11-25 10:30:05.234 UTC [INFO]: node2 promoted successfully
2024-11-25 10:30:06.567 UTC [INFO]: Demoting node1...
2024-11-25 10:30:08.890 UTC [INFO]: node1 reconfigured as replica
2024-11-25 10:30:10.123 UTC [INFO]: Switchover completed ✅

Total time: 10 seconds
</code></pre><h3 id="42-non-interactive-switchover">4.2. Non-interactive Switchover</h3><p><strong>Direct command</strong>:</p><pre><code class="language-bash"># Specify master and candidate explicitly
patronictl switchover postgres \
  --master node1 \
  --candidate node2 \
  --force

# --force: Skip confirmation prompt
</code></pre><h3 id="43-scheduled-switchover">4.3. Scheduled Switchover</h3><p><strong>Schedule for maintenance window</strong>:</p><pre><code class="language-bash"># Schedule switchover at 2 AM
patronictl switchover postgres \
  --master node1 \
  --candidate node2 \
  --scheduled "2024-11-25T02:00:00"

# Patroni will automatically execute at scheduled time
</code></pre><p><strong>Verify scheduled switchover</strong>:</p><pre><code class="language-bash"># Check pending actions
curl -s http://10.0.1.11:8008/patroni | jq '.scheduled_switchover'

# Output:
# {
#   "at": "2024-11-25T02:00:00+00:00",
#   "from": "node1",
#   "to": "node2"
# }
</code></pre><p><strong>Cancel scheduled switchover</strong>:</p><pre><code class="language-bash"># If plans change
patronictl flush postgres switchover
</code></pre><h3 id="44-switchover-with-rest-api">4.4. Switchover with REST API</h3><p><strong>Trigger via API</strong>:</p><pre><code class="language-bash"># POST to current leader
curl -X POST http://10.0.1.11:8008/switchover \
  -H "Content-Type: application/json" \
  -d '{
    "leader": "node1",
    "candidate": "node2"
  }'

# Response:
# {
#   "status": "ok",
#   "message": "Switchover scheduled"
# }
</code></pre><h2 id="5-switchover-timeline">5. Switchover Timeline</h2><h3 id="51-detailed-flow">5.1. Detailed flow</h3><pre><code class="language-text">T+0s: INITIATE SWITCHOVER
  Command: patronictl switchover postgres --master node1 --candidate node2

T+0.5s: PRE-CHECKS
  ✓ node1 is current leader
  ✓ node2 is healthy replica
  ✓ node2 replication lag: 0 bytes
  ✓ node2 timeline matches: 2

T+1s: PREPARE OLD PRIMARY (node1)
  - Checkpoint: CHECKPOINT;
  - Flush WAL
  - Set session_replication_role = 'replica' (prevent writes soon)

T+2s: WAIT FOR LAG = 0
  - Monitor: pg_stat_replication.replay_lag
  - node2 lag: 0 bytes ✅
  - All WAL replayed

T+3s: PAUSE OLD PRIMARY
  - Set: pg_catalog.pg_pause_wal_replay() on replicas (not needed, they're already replaying)
  - Actually: Just ensure all WAL consumed

T+4s: DEMOTE OLD PRIMARY (node1)
  - Remove leader lock from DCS
  - Stop accepting new connections (pg_ctl reload with max_connections=0)
  - Wait for active transactions (timeout: 30s default)

T+5s: PROMOTE NEW PRIMARY (node2)
  - Acquire leader lock in DCS
  - Execute: SELECT pg_promote();
  - Timeline: 2 → 3
  - Run callbacks: on_role_change, post_promote

T+7s: VERIFY NEW PRIMARY
  - pg_is_in_recovery() → false ✅
  - Accepting connections
  - Timeline = 3

T+8s: RECONFIGURE OLD PRIMARY (node1)
  - Update primary_conninfo → node2:5432
  - Update recovery.signal
  - Restart PostgreSQL in recovery mode
  - Timeline: 2 → 3

T+10s: REPLICATION RESTORED
  - node1 now streaming from node2
  - node3 updated to stream from node2
  - All replicas timeline = 3

T+10s: SWITCHOVER COMPLETE ✅
  Primary: node2 (was replica)
  Replica: node1 (was primary)
  Replica: node3

Total downtime: ~5-10 seconds
Data loss: None ✅
</code></pre><h3 id="52-what-happens-to-active-connections">5.2. What happens to active connections?</h3><p><strong>During switchover</strong>:</p><pre><code class="language-text">Client connections to old primary (node1):

Option A: Graceful (default)
  - New connections: REJECTED
  - Active queries: ALLOWED TO COMPLETE (timeout: 30s)
  - Idle connections: TERMINATED after queries done

Option B: Force (--force)
  - All connections: TERMINATED IMMEDIATELY
  - Active queries: ROLLBACK
  - Faster but risky ⚠️
</code></pre><p><strong>Application behavior</strong>:</p><pre><code class="language-python"># Well-written application with retry logic
import psycopg2

def execute_query():
    retries = 3
    for i in range(retries):
        try:
            conn = psycopg2.connect("host=10.0.1.11 ...")
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM users;")
            return cursor.fetchall()
        except psycopg2.OperationalError as e:
            if i &lt; retries - 1:
                time.sleep(1)  # Wait and retry
                continue
            raise
</code></pre><h2 id="6-verification-after-switchover">6. Verification After Switchover</h2><h3 id="61-cluster-status">6.1. Cluster status</h3><pre><code class="language-bash">patronictl list postgres

# Expected:
# + Cluster: postgres (7001234567890123456) ----+----+-----------+
# | Member | Host          | Role    | State   | TL | Lag in MB |
# +--------+---------------+---------+---------+----+-----------+
# | node1  | 10.0.1.11:5432| Replica | running |  3 |         0 | ← Was Leader
# | node2  | 10.0.1.12:5432| Leader  | running |  3 |           | ← Was Replica
# | node3  | 10.0.1.13:5432| Replica | running |  3 |         0 |
# +--------+---------------+---------+---------+----+-----------+

# Check:
# ✅ node2 is now Leader
# ✅ Timeline changed: 2 → 3
# ✅ All nodes running
# ✅ Replication lag = 0
</code></pre><h3 id="62-replication-status">6.2. Replication status</h3><pre><code class="language-bash"># On new primary (node2)
sudo -u postgres psql -h 10.0.1.12 -c "
SELECT application_name, client_addr, state, sync_state
FROM pg_stat_replication;
"

# Expected:
# application_name | client_addr | state     | sync_state
# -----------------+-------------+-----------+------------
# node1            | 10.0.1.11   | streaming | async
# node3            | 10.0.1.13   | streaming | async

# Both replicas should be streaming from node2 ✅
</code></pre><h3 id="63-write-test">6.3. Write test</h3><pre><code class="language-bash"># Insert on new primary
sudo -u postgres psql -h 10.0.1.12 -d testdb -c "
INSERT INTO test_table (data, created_at) 
VALUES ('After switchover', NOW())
RETURNING *;
"

# Verify on replicas
sudo -u postgres psql -h 10.0.1.11 -d testdb -c "
SELECT * FROM test_table ORDER BY created_at DESC LIMIT 1;
"

sudo -u postgres psql -h 10.0.1.13 -d testdb -c "
SELECT * FROM test_table ORDER BY created_at DESC LIMIT 1;
"

# Should see the new row on both replicas ✅
</code></pre><h3 id="64-timeline-verification">6.4. Timeline verification</h3><pre><code class="language-bash"># Check timeline on all nodes
for node in 10.0.1.11 10.0.1.12 10.0.1.13; do
  echo "=== $node ==="
  sudo -u postgres psql -h $node -c "
    SELECT timeline_id, pg_is_in_recovery() AS is_replica
    FROM pg_control_checkpoint();
  "
done

# All should report:
# timeline_id | is_replica
# ------------+------------
#           3 | t/f
</code></pre><h2 id="7-switchover-best-practices">7. Switchover Best Practices</h2><h3 id="71-pre-switchover-checklist">7.1. Pre-switchover checklist</h3><pre><code class="language-bash">#!/bin/bash
# pre-switchover-check.sh

echo "=== Pre-Switchover Checks ==="

# 1. Cluster health
echo "1. Checking cluster health..."
patronictl list postgres | grep -q "running" || { echo "❌ Not all nodes running"; exit 1; }
echo "✅ All nodes running"

# 2. Replication lag
echo "2. Checking replication lag..."
lag=$(sudo -u postgres psql -h 10.0.1.11 -t -c "
  SELECT COALESCE(MAX(pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn)), 0)
  FROM pg_stat_replication;
")
if [ "$lag" -gt 1048576 ]; then  # 1MB
  echo "❌ Lag too high: $lag bytes"
  exit 1
fi
echo "✅ Lag acceptable: $lag bytes"

# 3. Target candidate available
echo "3. Checking target candidate..."
patronictl list postgres | grep node2 | grep -q "running" || { echo "❌ node2 not available"; exit 1; }
echo "✅ Target candidate available"

# 4. No scheduled maintenance
echo "4. Checking scheduled actions..."
curl -s http://10.0.1.11:8008/patroni | jq -e '.scheduled_switchover == null' &gt; /dev/null || {
  echo "⚠️  Another switchover already scheduled"
}

echo ""
echo "✅ All pre-checks passed. Safe to proceed."
</code></pre><h3 id="72-minimize-downtime-strategies">7.2. Minimize downtime strategies</h3><h4 id="a-connection-pooler">A. Connection pooler</h4><pre><code class="language-text">Use PgBouncer/HAProxy between app and database:

App → PgBouncer → Primary
              ↓
            Replicas

During switchover:
1. PgBouncer detects primary change
2. Reconnects to new primary automatically
3. Application sees minimal disruption
</code></pre><h4 id="b-read-replica-routing">B. Read-replica routing</h4><pre><code class="language-text">Route read queries to replicas during switchover:

- Write queries: Wait for new primary
- Read queries: Continue on replicas (may be slightly stale)

Result: Partial availability during switchover
</code></pre><h4 id="c-application-level-retry">C. Application-level retry</h4><pre><code class="language-python"># Implement exponential backoff
def execute_with_retry(query, max_retries=3):
    for i in range(max_retries):
        try:
            return execute_query(query)
        except OperationalError:
            if i == max_retries - 1:
                raise
            time.sleep(2 ** i)  # 1s, 2s, 4s
</code></pre><h3 id="73-communication-plan">7.3. Communication plan</h3><p><strong>Before switchover</strong>:</p><pre><code class="language-text">T-24h: Announce maintenance window
  - Email: ops@, dev@, stakeholders
  - Slack: #incidents, #ops
  - Status page: Update with scheduled maintenance

T-1h: Reminder notification
  - Final checks
  - Confirm go/no-go

T-5min: Begin maintenance
  - Start switchover
  - Monitor dashboards
</code></pre><p><strong>During switchover</strong>:</p><pre><code class="language-text">- Real-time updates in ops channel
- Monitor metrics (latency, error rate)
- Have rollback plan ready
</code></pre><p><strong>After switchover</strong>:</p><pre><code class="language-text">- Verify all systems operational
- Post-switchover validation
- Update documentation
- Send completion notification
</code></pre><h2 id="8-troubleshooting-switchover">8. Troubleshooting Switchover</h2><h3 id="81-issue-switchover-command-hangs">8.1. Issue: Switchover command hangs</h3><p><strong>Symptoms</strong>:&nbsp;<code>patronictl switchover</code>&nbsp;never completes.</p><p><strong>Diagnosis</strong>:</p><pre><code class="language-bash"># Check what Patroni is waiting for
sudo journalctl -u patroni -f

# Common causes:

# A. High replication lag
sudo -u postgres psql -h 10.0.1.11 -c "
  SELECT application_name, 
         pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) AS lag_bytes
  FROM pg_stat_replication;
"
# If lag &gt; 0, Patroni waits for lag = 0

# B. Active long-running queries
sudo -u postgres psql -h 10.0.1.11 -c "
  SELECT pid, usename, state, query_start, query
  FROM pg_stat_activity
  WHERE state = 'active' AND query_start &lt; now() - interval '5 minutes';
"
# Kill blocking queries:
# SELECT pg_terminate_backend(pid);
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Option 1: Wait for lag to catch up (recommended)
# Option 2: Use --force to skip wait (risk data loss)
# Option 3: Cancel and reschedule
Ctrl+C  # Cancel current switchover attempt
</code></pre><h3 id="82-issue-candidate-not-eligible">8.2. Issue: Candidate not eligible</h3><p><strong>Symptoms</strong>: Error "candidate is not eligible".</p><p><strong>Diagnosis</strong>:</p><pre><code class="language-bash"># Check nofailover tag
patronictl show-config postgres | grep -A5 "node2:"

# If output shows:
# node2:
#   tags:
#     nofailover: true  ← Problem!
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Remove nofailover tag
patronictl edit-config postgres

# Edit:
tags:
  nofailover: false  # Change to false

# Restart Patroni on node2
sudo systemctl restart patroni
</code></pre><h3 id="83-issue-old-primary-wont-demote">8.3. Issue: Old primary won't demote</h3><p><strong>Symptoms</strong>: Switchover fails, old primary still leader.</p><p><strong>Diagnosis</strong>:</p><pre><code class="language-bash"># Check Patroni logs on old primary
sudo journalctl -u patroni -n 100 | grep -i "demote\|error"

# Possible causes:
# - PostgreSQL won't stop
# - Active transactions won't terminate
# - File permission issues
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Force demote via REST API
curl -X POST http://10.0.1.11:8008/restart

# Or manually:
sudo -u postgres psql -h 10.0.1.11 -c "
  SELECT pg_terminate_backend(pid)
  FROM pg_stat_activity
  WHERE pid != pg_backend_pid();
"

sudo systemctl restart patroni
</code></pre><h3 id="84-issue-replication-broken-after-switchover">8.4. Issue: Replication broken after switchover</h3><p><strong>Symptoms</strong>: Old primary not replicating from new primary.</p><p><strong>Diagnosis</strong>:</p><pre><code class="language-bash"># Check replication status
patronictl list postgres

# If node1 shows "stopped" or "streaming: False"

# Check logs
sudo journalctl -u patroni -u postgresql -n 100
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash"># A. Restart Patroni (usually auto-fixes)
sudo systemctl restart patroni

# B. Manual reinit if needed
patronictl reinit postgres node1

# Patroni will:
# 1. Stop PostgreSQL on node1
# 2. Remove data directory
# 3. pg_basebackup from node2
# 4. Start as replica
</code></pre><h2 id="9-switchover-automation">9. Switchover Automation</h2><h3 id="91-scripted-switchover">9.1. Scripted switchover</h3><pre><code class="language-bash">#!/bin/bash
# automated-switchover.sh

set -e

CLUSTER="postgres"
OLD_PRIMARY="node1"
NEW_PRIMARY="node2"

echo "=== Starting Automated Switchover ==="
echo "From: $OLD_PRIMARY → To: $NEW_PRIMARY"

# Pre-checks
echo "Running pre-checks..."
./pre-switchover-check.sh || exit 1

# Perform switchover
echo "Executing switchover..."
patronictl switchover $CLUSTER \
  --master $OLD_PRIMARY \
  --candidate $NEW_PRIMARY \
  --force

# Wait for completion
echo "Waiting for switchover to complete..."
sleep 15

# Post-checks
echo "Running post-checks..."
new_leader=$(patronictl list $CLUSTER | grep Leader | awk '{print $2}')
if [ "$new_leader" == "$NEW_PRIMARY" ]; then
  echo "✅ Switchover successful!"
  echo "New leader: $new_leader"
else
  echo "❌ Switchover failed!"
  echo "Current leader: $new_leader"
  exit 1
fi

# Verify replication
echo "Verifying replication..."
patronictl list $CLUSTER

echo "=== Switchover Complete ==="
</code></pre><h3 id="92-ansible-playbook">9.2. Ansible playbook</h3><pre><code class="language-yaml"># switchover.yml
---
- name: Perform Patroni switchover
  hosts: localhost
  gather_facts: no
  vars:
    cluster_name: postgres
    old_primary: node1
    new_primary: node2
  
  tasks:
    - name: Pre-check cluster health
      command: patronictl list {{ cluster_name }}
      register: cluster_status
      changed_when: false
    
    - name: Verify all nodes running
      assert:
        that:
          - "'running' in cluster_status.stdout"
        fail_msg: "Not all nodes are running"
    
    - name: Execute switchover
      command: &gt;
        patronictl switchover {{ cluster_name }}
        --master {{ old_primary }}
        --candidate {{ new_primary }}
        --force
      register: switchover_result
    
    - name: Wait for switchover completion
      pause:
        seconds: 15
    
    - name: Verify new leader
      command: patronictl list {{ cluster_name }}
      register: final_status
      changed_when: false
    
    - name: Display result
      debug:
        msg: "{{ final_status.stdout_lines }}"
    
    - name: Verify leadership
      assert:
        that:
          - "'{{ new_primary }}' in final_status.stdout"
          - "'Leader' in final_status.stdout"
        fail_msg: "Switchover failed"
        success_msg: "Switchover successful"
</code></pre><p><strong>Run</strong>:</p><pre><code class="language-bash">ansible-playbook switchover.yml
</code></pre><h3 id="93-cicd-integration">9.3. CI/CD integration</h3><pre><code class="language-yaml"># .github/workflows/db-maintenance.yml
name: Database Maintenance Switchover

on:
  schedule:
    - cron: '0 2 * * 0'  # Every Sunday at 2 AM
  workflow_dispatch:  # Manual trigger

jobs:
  switchover:
    runs-on: self-hosted
    steps:
      - name: Notify start
        run: |
          curl -X POST ${{ secrets.SLACK_WEBHOOK }} \
            -d '{"text": "Starting scheduled database switchover"}'
      
      - name: Pre-checks
        run: ./scripts/pre-switchover-check.sh
      
      - name: Execute switchover
        run: |
          patronictl switchover postgres \
            --master node1 \
            --candidate node2 \
            --force
      
      - name: Verify
        run: ./scripts/post-switchover-verify.sh
      
      - name: Notify completion
        if: always()
        run: |
          curl -X POST ${{ secrets.SLACK_WEBHOOK }} \
            -d '{"text": "Switchover completed: ${{ job.status }}"}'
</code></pre><h2 id="10-rolling-updates-with-switchover">10. Rolling Updates with Switchover</h2><h3 id="101-update-strategy">10.1. Update strategy</h3><p><strong>Scenario</strong>: Update PostgreSQL from 17 → 18.</p><p><strong>Steps</strong>:</p><pre><code class="language-text">1. Update replica node3 (least critical)
   - Stop Patroni
   - Upgrade PostgreSQL
   - Start Patroni
   - Verify replication

2. Update replica node2
   - Stop Patroni
   - Upgrade PostgreSQL
   - Start Patroni
   - Verify replication

3. Switchover to node2 (now updated)
   - patronictl switchover --master node1 --candidate node2

4. Update old primary node1
   - Stop Patroni
   - Upgrade PostgreSQL
   - Start Patroni (now replica)
   - Verify replication

5. Optionally switchover back to node1
   - patronictl switchover --master node2 --candidate node1

Result: Zero-downtime upgrade ✅
</code></pre><h3 id="102-kernel-update-example">10.2. Kernel update example</h3><pre><code class="language-bash">#!/bin/bash
# rolling-kernel-update.sh

NODES=("node1" "node2" "node3")
PRIMARY=$(patronictl list postgres | grep Leader | awk '{print $2}')

echo "Current primary: $PRIMARY"

# Update replicas first
for node in "${NODES[@]}"; do
  if [ "$node" == "$PRIMARY" ]; then
    continue  # Skip primary for now
  fi
  
  echo "=== Updating $node ==="
  ssh $node 'sudo yum update -y kernel &amp;&amp; sudo reboot'
  
  echo "Waiting for $node to come back..."
  sleep 60
  
  # Wait for node to rejoin
  until patronictl list postgres | grep $node | grep -q "running"; do
    echo "Waiting for $node..."
    sleep 10
  done
  
  echo "✅ $node updated and rejoined"
done

# Now switchover from primary
NEW_PRIMARY=${NODES[1]}  # Pick a replica
if [ "$NEW_PRIMARY" == "$PRIMARY" ]; then
  NEW_PRIMARY=${NODES[2]}
fi

echo "=== Switching over from $PRIMARY to $NEW_PRIMARY ==="
patronictl switchover postgres \
  --master $PRIMARY \
  --candidate $NEW_PRIMARY \
  --force

sleep 15

# Update old primary
echo "=== Updating $PRIMARY ==="
ssh $PRIMARY 'sudo yum update -y kernel &amp;&amp; sudo reboot'

echo "Waiting for $PRIMARY to rejoin as replica..."
sleep 60

until patronictl list postgres | grep $PRIMARY | grep -q "running"; do
  echo "Waiting for $PRIMARY..."
  sleep 10
done

echo "✅ All nodes updated!"
patronictl list postgres
</code></pre><h2 id="11-lab-exercises">11. Lab Exercises</h2><h3 id="lab-1-basic-switchover">Lab 1: Basic switchover</h3><p><strong>Tasks</strong>:</p><ol><li>Check current primary:&nbsp;<code>patronictl list</code></li><li>Perform switchover:&nbsp;<code>patronictl switchover postgres</code></li><li>Measure downtime with continuous query loop</li><li>Verify new topology</li><li>Document observations</li></ol><h3 id="lab-2-scheduled-switchover">Lab 2: Scheduled switchover</h3><p><strong>Tasks</strong>:</p><ol><li>Schedule switchover for 2 minutes from now</li><li>Monitor logs during wait period</li><li>Observe automatic execution</li><li>Cancel a scheduled switchover (repeat and test cancel)</li></ol><h3 id="lab-3-forced-vs-graceful">Lab 3: Forced vs graceful</h3><p><strong>Tasks</strong>:</p><ol><li>Create long-running query:&nbsp;<code>SELECT pg_sleep(300);</code></li><li>Attempt graceful switchover (observe wait)</li><li>Cancel and retry with --force</li><li>Compare behavior and downtime</li></ol><h3 id="lab-4-rolling-update-simulation">Lab 4: Rolling update simulation</h3><p><strong>Tasks</strong>:</p><ol><li>Start with 3-node cluster</li><li>"Update" node3 (simulate by restarting)</li><li>"Update" node2</li><li>Switchover to node2</li><li>"Update" node1</li><li>Verify all nodes operational</li></ol><h3 id="lab-5-switchover-under-load">Lab 5: Switchover under load</h3><p><strong>Tasks</strong>:</p><ol><li>Start pgbench:&nbsp;<code>pgbench -c 10 -T 300</code></li><li>During load, perform switchover</li><li>Analyze pgbench output for errors</li><li>Calculate success rate</li><li>Test with connection pooler (PgBouncer)</li></ol><h2 id="12-t%E1%BB%95ng-k%E1%BA%BFt">12. Tổng kết</h2><h3 id="key-concepts">Key Concepts</h3><p>✅&nbsp;<strong>Switchover</strong>&nbsp;= Planned, controlled role change</p><p>✅&nbsp;<strong>Graceful</strong>&nbsp;= Wait for transactions (slower, safer)</p><p>✅&nbsp;<strong>Immediate</strong>&nbsp;= Force termination (faster, riskier)</p><p>✅&nbsp;<strong>Scheduled</strong>&nbsp;= Automated at specific time</p><p>✅&nbsp;<strong>Zero downtime</strong>&nbsp;= Achievable with proper architecture</p><h3 id="switchover-vs-failover">Switchover vs Failover</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Aspect</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Switchover</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Failover</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">Planning</td><td style="padding: 5px 10px;">Scheduled</td><td style="padding: 5px 10px;">Unplanned</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Control</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Manual</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Automatic</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Downtime</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">0-10s</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">30-60s</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Data loss</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">None</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Possible</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Reversible</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Yes</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">No</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="best-practices">Best Practices</h3><ul><li>✅ Test in staging first</li><li>✅ Schedule during low-traffic windows</li><li>✅ Use graceful mode (default)</li><li>✅ Verify lag = 0 before switchover</li><li>✅ Monitor during process</li><li>✅ Have rollback plan</li><li>✅ Communicate with stakeholders</li><li>✅ Document procedure</li></ul><h3 id="next-steps">Next Steps</h3><p>Bài 15 sẽ cover&nbsp;<strong>Recovering Failed Nodes</strong>:</p><ul><li>Rejoin old primary after failover</li><li>pg_rewind usage and scenarios</li><li>Full rebuild with pg_basebackup</li><li>Timeline divergence resolution</li><li>Split-brain recovery</li></ul>
