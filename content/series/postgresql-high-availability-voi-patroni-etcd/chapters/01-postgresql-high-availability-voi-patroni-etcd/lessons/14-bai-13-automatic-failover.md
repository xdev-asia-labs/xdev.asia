---
id: 019c9617-fb87-7086-95fc-6fd978990d86
title: 'Bài 13: Automatic Failover'
slug: bai-13-automatic-failover
description: >-
  Tìm hiểu cơ chế phát hiện lỗi, quá trình leader election, failover timeline và
  thực hành mô phỏng primary node failure.
duration_minutes: 160
is_free: true
video_url: null
sort_order: 13
section_title: PostgreSQL High Availability với Patroni & etcd
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---
<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Hiểu cơ chế phát hiện lỗi trong Patroni</li><li>Nắm rõ leader election process</li><li>Theo dõi failover timeline chi tiết</li><li>Test automatic failover trong nhiều scenarios</li><li>Troubleshoot failover issues</li><li>Optimize failover speed</li></ul><h2 id="1-automatic-failover-overview">1. Automatic Failover Overview</h2><h3 id="11-failover-l%C3%A0-g%C3%AC">1.1. Failover là gì?</h3><p><strong>Automatic Failover</strong>&nbsp;= Quá trình&nbsp;<strong>tự động</strong>&nbsp;promote một replica lên làm primary khi primary hiện tại&nbsp;<strong>fails</strong>.</p><p><strong>Đặc điểm</strong>:</p><ul><li>⚡&nbsp;<strong>Tự động</strong>: Không cần can thiệp manual</li><li>🚨&nbsp;<strong>Unplanned</strong>: Xảy ra do sự cố</li><li>⏱️&nbsp;<strong>Fast</strong>: 30-60 giây (configurable)</li><li>🎯&nbsp;<strong>Goal</strong>: Minimize downtime</li></ul><p><strong>Khi nào xảy ra failover?</strong></p><ul><li>Primary server crashes</li><li>PostgreSQL process dies</li><li>Network partition</li><li>Hardware failure</li><li>DCS connection lost</li><li>Disk full</li></ul><h3 id="12-failover-vs-replication">1.2. Failover vs Replication</h3><pre><code class="language-text">WITHOUT Patroni (Manual Failover):
1. Primary fails
2. DBA gets paged
3. DBA investigates (10-30 mins)
4. DBA manually promotes replica
5. DBA updates application config
6. Service restored
Total downtime: 30+ minutes ❌

WITH Patroni (Automatic Failover):
1. Primary fails
2. Patroni detects (10 seconds)
3. Patroni promotes best replica (20 seconds)
4. Service restored automatically
Total downtime: 30-60 seconds ✅
</code></pre><h2 id="2-failure-detection-mechanism">2. Failure Detection Mechanism</h2><h3 id="21-health-check-loop">2.1. Health Check Loop</h3><p><strong>Patroni health check components</strong>:</p><pre><code class="language-python"># Pseudo-code of Patroni's main loop
while True:
    # 1. Check PostgreSQL health
    if not check_postgresql_running():
        log.error("PostgreSQL is down!")
        handle_postgres_failure()
    
    # 2. Check DCS connectivity
    if not can_connect_to_dcs():
        log.error("Lost DCS connection!")
        demote_if_leader()
    
    # 3. Update status in DCS
    update_member_status_in_dcs()
    
    # 4. Check leader lock (if I'm leader)
    if is_leader:
        renew_leader_lock()
    
    # 5. Sleep until next check
    sleep(loop_wait)  # Default: 10 seconds
</code></pre><h3 id="22-postgresql-health-checks">2.2. PostgreSQL Health Checks</h3><p><strong>Patroni performs multiple checks</strong>:</p><h4 id="a-process-check">A. Process check</h4><pre><code class="language-bash"># Check if postgres process exists
ps aux | grep postgres

# Check if accepting connections
pg_isready -h localhost -p 5432
</code></pre><h4 id="b-connection-check">B. Connection check</h4><pre><code class="language-python"># Try to connect to PostgreSQL
try:
    conn = psycopg2.connect("host=localhost port=5432 dbname=postgres")
    conn.close()
except:
    # Connection failed!
    mark_unhealthy()
</code></pre><h4 id="c-replication-check-on-replicas">C. Replication check (on replicas)</h4><pre><code class="language-sql">-- Check if replication is active
SELECT status, received_lsn, replay_lsn 
FROM pg_stat_wal_receiver;

-- If no data or status != 'streaming' → Problem!
</code></pre><h4 id="d-timeline-check">D. Timeline check</h4><pre><code class="language-sql">-- Ensure timeline matches cluster
SELECT timeline_id FROM pg_control_checkpoint();
</code></pre><h3 id="23-dcs-connectivity-check">2.3. DCS Connectivity Check</h3><p><strong>Why DCS connectivity matters</strong>:</p><pre><code class="language-text">If node loses DCS connection:
- Cannot renew leader lock
- Cannot read cluster state
- MUST demote to avoid split-brain

Even if PostgreSQL is healthy!
</code></pre><p><strong>DCS check example</strong>:</p><pre><code class="language-bash"># Check etcd health
etcdctl endpoint health

# Try to read/write
etcdctl get /service/postgres/leader
etcdctl put /service/postgres/members/node1 "healthy"
</code></pre><h3 id="24-leader-lock-ttl">2.4. Leader Lock TTL</h3><p><strong>TTL (Time-To-Live) mechanism</strong>:</p><pre><code class="language-yaml"># In patroni.yml
bootstrap:
  dcs:
    ttl: 30  # Leader lock expires after 30 seconds
    loop_wait: 10  # Check every 10 seconds
</code></pre><p><strong>Timeline</strong>:</p><pre><code class="language-text">T+0s:  Leader acquires lock (TTL=30s)
T+10s: Leader renews lock (TTL extended to T+40s)
T+20s: Leader renews lock (TTL extended to T+50s)
T+30s: Leader tries to renew but FAILS (crashed)
T+40s: Lock expires in DCS
T+41s: Replicas detect no leader
T+42s: Replica election begins
T+45s: New leader elected

Total detection time: ~35-40 seconds
</code></pre><h2 id="3-leader-election-process">3. Leader Election Process</h2><h3 id="31-election-trigger">3.1. Election Trigger</h3><p><strong>Leader election starts when</strong>:</p><pre><code class="language-text">Condition 1: Leader lock expired in DCS
  /service/postgres/leader → key not found

Condition 2: No active leader for &gt; loop_wait
  All replicas see: no leader heartbeat

Condition 3: Explicit failover
  patronictl failover command
</code></pre><h3 id="32-candidate-selection-criteria">3.2. Candidate Selection Criteria</h3><p><strong>Patroni selects best replica based on</strong>:</p><h4 id="priority-1-replication-state">Priority 1: Replication State</h4><pre><code class="language-sql">-- Prefer streaming over archive recovery
SELECT state FROM pg_stat_wal_receiver;

streaming &gt; in archive recovery &gt; stopped
</code></pre><h4 id="priority-2-replication-lag">Priority 2: Replication Lag</h4><pre><code class="language-sql">-- Replica with lowest lag wins
SELECT pg_wal_lsn_diff(pg_last_wal_receive_lsn(), pg_last_wal_replay_lsn()) AS lag_bytes;

-- Example:
-- node2: lag = 0 bytes      ← BEST
-- node3: lag = 1048576 bytes (1MB)
</code></pre><h4 id="priority-3-timeline">Priority 3: Timeline</h4><pre><code class="language-sql">-- Higher timeline = more recent
SELECT timeline_id FROM pg_control_checkpoint();

-- node2: timeline = 3  ← BEST
-- node3: timeline = 2
</code></pre><h4 id="priority-4-tags">Priority 4: Tags</h4><pre><code class="language-yaml"># In patroni.yml
tags:
  nofailover: false  # true = never promote this node
  noloadbalance: false
  priority: 100  # Higher = preferred (0-999)
</code></pre><p><strong>Example</strong>:</p><pre><code class="language-yaml"># node2 - Preferred candidate
tags:
  nofailover: false
  priority: 200

# node3 - Lower priority
tags:
  nofailover: false
  priority: 100

# node4 - Never promote
tags:
  nofailover: true
</code></pre><h4 id="priority-5-synchronous-state">Priority 5: Synchronous State</h4><pre><code class="language-sql">-- Synchronous replica preferred over async
SELECT sync_state FROM pg_stat_replication;

sync &gt; potential &gt; async
</code></pre><h3 id="33-race-condition-and-lock-acquisition">3.3. Race Condition and Lock Acquisition</h3><p><strong>Multiple replicas compete</strong>:</p><pre><code class="language-text">Scenario: Primary fails, 2 replicas compete

T+0s: node2 and node3 both detect no leader
T+0.1s: Both try to acquire lock simultaneously

In etcd (atomic operation):
  node2 tries: PUT /service/postgres/leader "node2" if_not_exists
  node3 tries: PUT /service/postgres/leader "node3" if_not_exists

Result: Only ONE succeeds (etcd atomic guarantee)
  node2: SUCCESS → becomes leader
  node3: FAILED → remains replica
</code></pre><p><strong>DCS guarantees</strong>:</p><ul><li><strong>Atomicity</strong>: Only one node gets the lock</li><li><strong>Consistency</strong>: All nodes see same leader</li><li><strong>Isolation</strong>: No split-brain possible</li></ul><h3 id="34-promotion-process">3.4. Promotion Process</h3><p><strong>Winner node executes</strong>:</p><pre><code class="language-text">Step 1: Acquire leader lock in DCS
  etcdctl put /service/postgres/leader '{"node": "node2", ...}'

Step 2: Run pre_promote callback (if configured)
  /var/lib/postgresql/callbacks/pre_promote.sh

Step 3: Promote PostgreSQL
  Method A: pg_ctl promote -D /var/lib/postgresql/18/data
  Method B: SELECT pg_promote();
  Method C: Create trigger file (old method)

Step 4: Wait for promotion complete
  Check: SELECT pg_is_in_recovery();
  Should return: false (not in recovery = primary)

Step 5: Update timeline
  Timeline increments: 1 → 2

Step 6: Run post_promote callback
  Update DNS, load balancer, send notifications

Step 7: Run on_role_change callback
  /var/lib/postgresql/callbacks/on_role_change.sh master

Step 8: Update DCS with new primary info
  xlog_location, timeline, conn_url

Step 9: Start accepting writes
  PostgreSQL now in read-write mode
</code></pre><h2 id="4-failover-timeline-detailed">4. Failover Timeline Detailed</h2><h3 id="41-complete-failover-flow">4.1. Complete Failover Flow</h3><pre><code class="language-text">Timeline of Automatic Failover

T+0s: NORMAL OPERATION
  Primary (node1): Healthy, serving requests
  Replica (node2): Streaming from node1, lag=0
  Replica (node3): Streaming from node1, lag=0

T+1s: PRIMARY FAILS
  node1: PostgreSQL crashes / server dies
  node2: Still streaming (buffered data)
  node3: Still streaming (buffered data)

T+5s: REPLICATION BROKEN
  node2: WAL receiver error "connection lost"
  node3: WAL receiver error "connection lost"
  node1: Still holds leader lock (TTL not expired yet)

T+10s: HEALTH CHECK CYCLE 1
  node2: Check replication → FAILED, wait...
  node3: Check replication → FAILED, wait...
  node1: Cannot renew lock (crashed)

T+20s: HEALTH CHECK CYCLE 2
  node2: Still cannot connect to node1
  node3: Still cannot connect to node1

T+30s: LEADER LOCK EXPIRES
  DCS: /service/postgres/leader TTL expired → key deleted
  node2: Detects no leader key
  node3: Detects no leader key

T+31s: CANDIDATE ELECTION BEGINS
  node2: Check eligibility → YES (lag=0, priority=100)
  node3: Check eligibility → YES (lag=1MB, priority=100)

T+32s: RACE FOR LOCK
  node2: PUT /service/postgres/leader "node2" → SUCCESS
  node3: PUT /service/postgres/leader "node3" → FAILED

T+33s: NODE2 PROMOTES
  node2: Run pre_promote callback
  node2: pg_promote() executed
  node2: Timeline: 1 → 2

T+35s: PROMOTION COMPLETE
  node2: pg_is_in_recovery() → false
  node2: Now accepting writes
  node2: Run post_promote &amp; on_role_change callbacks

T+36s: NODE3 RECONFIGURES
  node3: Detects new leader = node2
  node3: Update primary_conninfo → node2:5432
  node3: Restart WAL receiver

T+38s: REPLICATION RESTORED
  node3: Connected to node2
  node3: Streaming at timeline 2

T+40s: CLUSTER OPERATIONAL
  Primary: node2 (was replica)
  Replica: node3 (following node2)
  Failed: node1 (needs manual intervention)

Total Downtime: ~35-40 seconds ✅
</code></pre><h3 id="42-factors-affecting-failover-speed">4.2. Factors Affecting Failover Speed</h3><p><strong>Configuration parameters</strong>:</p><pre><code class="language-yaml"># Fast failover configuration
bootstrap:
  dcs:
    ttl: 20  # Faster detection (default: 30)
    loop_wait: 5  # More frequent checks (default: 10)
    retry_timeout: 5  # Quick retries (default: 10)
</code></pre><p><strong>Trade-offs</strong>:</p>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Parameter</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Lower Value</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Higher Value</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">TTL</strong></td><td style="padding: 5px 10px;">Faster failover</td><td style="padding: 5px 10px;">More stable</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">More false positives</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Slower failover</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">loop_wait</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Faster detection</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Less DCS traffic</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">More CPU/network</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Slower reaction</td></tr></tbody></table>
<!--kg-card-end: html-->
<p><strong>Typical configurations</strong>:</p><pre><code class="language-yaml"># Conservative (stable, slower)
ttl: 30
loop_wait: 10
→ Failover: ~40-50s

# Balanced (recommended)
ttl: 20
loop_wait: 10
→ Failover: ~30-40s

# Aggressive (fast, sensitive)
ttl: 15
loop_wait: 5
→ Failover: ~20-30s
</code></pre><h2 id="5-testing-automatic-failover">5. Testing Automatic Failover</h2><h3 id="51-test-scenario-1-postgresql-process-kill">5.1. Test Scenario 1: PostgreSQL Process Kill</h3><p><strong>Simulate PostgreSQL crash</strong>:</p><pre><code class="language-bash"># On current primary (node1)
sudo -u postgres psql -c "SELECT pg_backend_pid();"
# Returns: 12345

sudo kill -9 12345  # Kill PostgreSQL

# Or kill all postgres processes
sudo pkill -9 postgres
</code></pre><p><strong>Monitor failover</strong>:</p><pre><code class="language-bash"># Terminal 1: Watch cluster status
watch -n 1 "patronictl list postgres"

# Terminal 2: Monitor logs
sudo journalctl -u patroni -f

# Terminal 3: Test connectivity
while true; do
  psql -h 10.0.1.11 -U app_user -d myapp -c "SELECT 1;" 2&gt;&amp;1 | grep -q "ERROR" &amp;&amp; echo "$(date): DOWN" || echo "$(date): UP"
  sleep 1
done
</code></pre><p><strong>Expected timeline</strong>:</p><pre><code class="language-text">00:00 - Cluster healthy
00:01 - Kill postgres on node1
00:02-00:30 - Patroni detecting failure
00:31 - node2 elected as new primary
00:35 - Cluster operational (node2 = primary)
00:36+ - Connections working again
</code></pre><h3 id="52-test-scenario-2-network-partition">5.2. Test Scenario 2: Network Partition</h3><p><strong>Simulate network partition</strong>:</p><pre><code class="language-bash"># On primary node, block traffic to other nodes
sudo iptables -A INPUT -s 10.0.1.12 -j DROP
sudo iptables -A INPUT -s 10.0.1.13 -j DROP
sudo iptables -A OUTPUT -d 10.0.1.12 -j DROP
sudo iptables -A OUTPUT -d 10.0.1.13 -j DROP

# Or block etcd access specifically
sudo iptables -A OUTPUT -p tcp --dport 2379 -j DROP
</code></pre><p><strong>Observe</strong>:</p><pre><code class="language-bash"># On node1 (isolated)
patronictl list postgres
# Will show errors / cannot connect to cluster

# On node2/node3
patronictl list postgres
# Will show node1 as unavailable
# After TTL: node2 or node3 becomes leader
</code></pre><p><strong>Recovery</strong>:</p><pre><code class="language-bash"># Restore network on node1
sudo iptables -F

# node1 should automatically rejoin as replica
patronictl list postgres
</code></pre><h3 id="53-test-scenario-3-server-reboot">5.3. Test Scenario 3: Server Reboot</h3><p><strong>Simulate server crash</strong>:</p><pre><code class="language-bash"># On primary node
sudo reboot

# Or immediate crash
echo c | sudo tee /proc/sysrq-trigger
</code></pre><p><strong>Expected behavior</strong>: Same as Scenario 1, but node completely unavailable.</p><h3 id="54-test-scenario-4-disk-full">5.4. Test Scenario 4: Disk Full</h3><p><strong>Simulate disk full</strong>:</p><pre><code class="language-bash"># Fill up disk on primary
dd if=/dev/zero of=/var/lib/postgresql/bigfile bs=1M count=10000

# PostgreSQL will fail when cannot write WAL
</code></pre><p><strong>Patroni will detect</strong>&nbsp;PostgreSQL unhealthy → trigger failover.</p><h3 id="55-test-scenario-5-dcs-failure">5.5. Test Scenario 5: DCS Failure</h3><p><strong>Stop etcd on all nodes</strong>:</p><pre><code class="language-bash"># On all 3 etcd nodes
sudo systemctl stop etcd
</code></pre><p><strong>Expected behavior</strong>:</p><pre><code class="language-text">- All Patroni nodes lose DCS connection
- Current primary DEMOTES (safety mechanism)
- Cluster enters "read-only" state
- NO failover possible (no DCS consensus)

Recovery:
- Restart etcd cluster
- Patroni auto-recovers
- Leader election happens
</code></pre><h2 id="6-verify-failover-success">6. Verify Failover Success</h2><h3 id="61-check-cluster-status">6.1. Check cluster status</h3><pre><code class="language-bash"># List cluster members
patronictl list postgres

# Expected after failover:
# + Cluster: postgres (7001234567890123456) ----+----+-----------+
# | Member | Host          | Role    | State   | TL | Lag in MB |
# +--------+---------------+---------+---------+----+-----------+
# | node1  | 10.0.1.11:5432| Replica | stopped |  1 |           | ← Old primary
# | node2  | 10.0.1.12:5432| Leader  | running |  2 |           | ← NEW primary
# | node3  | 10.0.1.13:5432| Replica | running |  2 |         0 |
# +--------+---------------+---------+---------+----+-----------+

# Note timeline changed: 1 → 2
</code></pre><h3 id="62-verify-new-primary">6.2. Verify new primary</h3><pre><code class="language-bash"># Check primary role
sudo -u postgres psql -h 10.0.1.12 -c "SELECT pg_is_in_recovery();"
# pg_is_in_recovery
# ------------------
#  f                  ← false = PRIMARY

# Check timeline
sudo -u postgres psql -h 10.0.1.12 -c "SELECT timeline_id FROM pg_control_checkpoint();"
# timeline_id
# ------------
#           2

# Check replication from new primary
sudo -u postgres psql -h 10.0.1.12 -c "SELECT * FROM pg_stat_replication;"
# Should show node3 replicating from node2
</code></pre><h3 id="63-test-write-operations">6.3. Test write operations</h3><pre><code class="language-bash"># Insert data on new primary
sudo -u postgres psql -h 10.0.1.12 -d testdb -c "
INSERT INTO test_table (data) VALUES ('After failover at ' || NOW());
"

# Verify on replica
sudo -u postgres psql -h 10.0.1.13 -d testdb -c "
SELECT * FROM test_table ORDER BY id DESC LIMIT 5;
"
# Should see new data replicated
</code></pre><h3 id="64-check-failover-history">6.4. Check failover history</h3><pre><code class="language-bash"># View history via REST API
curl -s http://10.0.1.12:8008/history | jq

# Output:
# [
#   [1, 67108864, "no recovery target specified", "2024-11-25T10:00:00+00:00"],
#   [2, 134217728, "no recovery target specified", "2024-11-25T11:30:15+00:00"]
# ]
#   ↑ Timeline 2 = Failover event

# Check Patroni logs
sudo journalctl -u patroni --since "30 minutes ago" | grep -i "promote\|failover\|leader"
</code></pre><h2 id="7-troubleshooting-failover-issues">7. Troubleshooting Failover Issues</h2><h3 id="71-issue-failover-not-happening">7.1. Issue: Failover not happening</h3><p><strong>Symptoms</strong>: Primary down but no promotion.</p><p><strong>Possible causes</strong>:</p><h4 id="a-all-replicas-tagged-nofailover">A. All replicas tagged nofailover</h4><pre><code class="language-bash"># Check tags
patronictl show-config postgres | grep -A5 "tags:"

# If all replicas have nofailover: true
# Solution: Remove tag from at least one replica
patronictl edit-config postgres
# Set: nofailover: false
</code></pre><h4 id="b-replication-lag-too-high">B. Replication lag too high</h4><pre><code class="language-bash"># Check maximum_lag_on_failover
patronictl show-config postgres | grep maximum_lag_on_failover

# If replica lag &gt; threshold, won't promote
# Solution: Increase threshold or wait for lag to decrease
patronictl edit-config postgres
# Set: maximum_lag_on_failover: 10485760  # 10MB
</code></pre><h4 id="c-no-quorum-in-dcs">C. No quorum in DCS</h4><pre><code class="language-bash"># Check etcd health
etcdctl endpoint health --cluster

# If etcd cluster has no quorum (&lt; 2 of 3 healthy)
# Solution: Fix etcd cluster first
sudo systemctl restart etcd
</code></pre><h4 id="d-synchronousmodestrict-enabled">D. synchronous_mode_strict enabled</h4><pre><code class="language-yaml"># If enabled and no sync replica available
synchronous_mode: true
synchronous_mode_strict: true  # ← Problem!

# Primary cannot be demoted, replicas cannot be promoted
# Solution: Disable strict mode
patronictl edit-config postgres
# Set: synchronous_mode_strict: false
</code></pre><h3 id="72-issue-multiple-failovers-flapping">7.2. Issue: Multiple failovers (flapping)</h3><p><strong>Symptoms</strong>: Cluster keeps failing over repeatedly.</p><p><strong>Possible causes</strong>:</p><h4 id="a-network-instability">A. Network instability</h4><pre><code class="language-bash"># Check network between nodes
ping -c 100 10.0.1.12
# High packet loss → false failovers

# Solution: Fix network or increase TTL
patronictl edit-config postgres
# Set: ttl: 40  # More tolerant
</code></pre><h4 id="b-ttl-too-aggressive">B. TTL too aggressive</h4><pre><code class="language-yaml"># ttl: 10  ← Too low!
# Every small network blip causes failover

# Solution: Increase TTL
ttl: 30  # More stable
</code></pre><h4 id="c-resource-exhaustion">C. Resource exhaustion</h4><pre><code class="language-bash"># Check CPU/Memory on nodes
top
free -h

# If resources exhausted, health checks timeout
# Solution: Scale up resources or reduce load
</code></pre><h3 id="73-issue-slow-failover">7.3. Issue: Slow failover</h3><p><strong>Symptoms</strong>: Takes &gt;60 seconds to failover.</p><p><strong>Diagnosis</strong>:</p><pre><code class="language-bash"># Check TTL and loop_wait
patronictl show-config postgres | grep -E "ttl|loop_wait"

# Calculate minimum failover time:
# Minimum = TTL + (loop_wait × 2) + promotion_time
# Example: 30 + (10 × 2) + 5 = 55 seconds
</code></pre><p><strong>Optimization</strong>:</p><pre><code class="language-yaml"># Reduce TTL and loop_wait
bootstrap:
  dcs:
    ttl: 20  # Was 30
    loop_wait: 5  # Was 10

# Expected failover: ~30-35 seconds
</code></pre><h3 id="74-issue-data-loss-after-failover">7.4. Issue: Data loss after failover</h3><p><strong>Symptoms</strong>: Some recent transactions missing.</p><p><strong>Cause</strong>: Asynchronous replication + replica lag.</p><p><strong>Verification</strong>:</p><pre><code class="language-bash"># Check replication mode
patronictl show-config postgres | grep synchronous_mode

# Check lag before failover
# (check logs for lag_in_mb at failover time)
sudo journalctl -u patroni | grep "lag_in_mb"
</code></pre><p><strong>Prevention</strong>:</p><pre><code class="language-yaml"># Enable synchronous replication
bootstrap:
  dcs:
    synchronous_mode: true
    synchronous_mode_strict: false  # Allow degradation
    
    postgresql:
      parameters:
        synchronous_commit: 'on'
</code></pre><h2 id="8-metrics-and-monitoring">8. Metrics and Monitoring</h2><h3 id="81-key-failover-metrics">8.1. Key failover metrics</h3><pre><code class="language-sql">-- Time since last failover
SELECT timeline_id, 
       pg_postmaster_start_time(),
       now() - pg_postmaster_start_time() AS uptime
FROM pg_control_checkpoint();

-- Replication lag (pre-failover indicator)
SELECT application_name,
       pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) AS lag_bytes,
       replay_lag
FROM pg_stat_replication;

-- Failed connection attempts (indicator of downtime)
SELECT datname, numbackends, xact_commit, xact_rollback
FROM pg_stat_database;
</code></pre><h3 id="82-alerting-rules">8.2. Alerting rules</h3><p><strong>Prometheus alert examples</strong>:</p><pre><code class="language-yaml">groups:
  - name: patroni_failover
    rules:
      - alert: PatroniFailoverDetected
        expr: increase(patroni_timeline[5m]) &gt; 0
        labels:
          severity: warning
        annotations:
          summary: "Patroni failover detected"
          description: "Timeline changed, indicating failover"
      
      - alert: PatroniNoLeader
        expr: count(patroni_patroni_info{role="master"}) == 0
        for: 30s
        labels:
          severity: critical
        annotations:
          summary: "No Patroni leader"
          description: "Cluster has no primary"
      
      - alert: PatroniHighReplicationLag
        expr: patroni_replication_lag_bytes &gt; 10485760  # 10MB
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: "High replication lag"
          description: "Replica lag &gt; 10MB, risk of data loss on failover"
</code></pre><h2 id="9-best-practices">9. Best Practices</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>Test failover regularly</strong>&nbsp;- Monthly in staging, quarterly in production</li><li><strong>Monitor replication lag</strong>&nbsp;- Alert if lag &gt; 1MB</li><li><strong>Use synchronous replication</strong>&nbsp;for zero data loss</li><li><strong>Set synchronous_mode_strict: false</strong>&nbsp;- Allow degradation</li><li><strong>Configure proper TTL</strong>&nbsp;- Balance speed vs stability (20-30s)</li><li><strong>Have &gt;= 2 replicas</strong>&nbsp;- Allow failover even if one replica down</li><li><strong>Monitor DCS health</strong>&nbsp;- etcd cluster must be healthy</li><li><strong>Document runbooks</strong>&nbsp;- Procedures for manual intervention</li><li><strong>Log failover events</strong>&nbsp;- Track patterns and issues</li><li><strong>Capacity planning</strong>&nbsp;- Replicas should handle primary load</li></ol><h3 id="%E2%9D%8C-dont">❌ DON'T</h3><ol><li><strong>Don't use single replica</strong>&nbsp;- No failover option</li><li><strong>Don't ignore lag</strong>&nbsp;- High lag = data loss risk</li><li><strong>Don't set TTL too low</strong>&nbsp;(&lt;15s) - False positives</li><li><strong>Don't skip testing</strong>&nbsp;- Untested failover = downtime risk</li><li><strong>Don't manually promote</strong>&nbsp;during automatic failover - Let Patroni handle it</li><li><strong>Don't forget about old primary</strong>&nbsp;- Needs rejoin/rebuild</li><li><strong>Don't run without monitoring</strong>&nbsp;- Must know when failover happens</li><li><strong>Don't overload DCS</strong>&nbsp;- Separate etcd cluster recommended</li></ol><h2 id="10-lab-exercises">10. Lab Exercises</h2><h3 id="lab-1-basic-failover-test">Lab 1: Basic failover test</h3><p><strong>Tasks</strong>: 1. Record baseline:&nbsp;<code>patronictl list</code>&nbsp;2. Stop primary:&nbsp;<code>sudo systemctl stop patroni</code>&nbsp;3. Time the failover with&nbsp;<code>watch -n 1 patronictl list</code>&nbsp;4. Document downtime duration 5. Verify new primary accepts writes 6. Restart old primary and verify rejoin</p><h3 id="lab-2-network-partition-test">Lab 2: Network partition test</h3><p><strong>Tasks</strong>: 1. Use iptables to partition primary from cluster 2. Observe DCS behavior 3. Verify only one primary exists after partition 4. Restore network and verify automatic recovery</p><h3 id="lab-3-optimize-failover-speed">Lab 3: Optimize failover speed</h3><p><strong>Tasks</strong>: 1. Baseline test with default settings (TTL=30) 2. Reduce TTL to 20, test again 3. Reduce to 15, test again 4. Compare failover times 5. Evaluate trade-offs (speed vs false positives)</p><h3 id="lab-4-failover-under-load">Lab 4: Failover under load</h3><p><strong>Tasks</strong>: 1. Generate load with pgbench:&nbsp;<code>pgbench -c 10 -T 300</code>&nbsp;2. During load, stop primary 3. Count connection errors in pgbench output 4. Calculate availability percentage 5. Document user impact</p><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11. Tổng kết</h2><h3 id="key-concepts">Key Concepts</h3><p>✅&nbsp;<strong>Automatic Failover</strong>&nbsp;= Self-healing without manual intervention</p><p>✅&nbsp;<strong>Detection</strong>&nbsp;= Health checks + DCS connectivity + TTL expiration</p><p>✅&nbsp;<strong>Election</strong>&nbsp;= Best replica based on lag, timeline, tags</p><p>✅&nbsp;<strong>Promotion</strong>&nbsp;= pg_promote() + timeline increment + role change</p><p>✅&nbsp;<strong>Timeline</strong>&nbsp;= Failover counter, prevents divergence</p><p>✅&nbsp;<strong>TTL</strong>&nbsp;= Trade-off between speed and stability</p><h3 id="failover-checklist">Failover Checklist</h3><ul><li>&nbsp;Primary failure detected</li><li>&nbsp;Leader lock expired in DCS</li><li>&nbsp;Best replica identified</li><li>&nbsp;Leader lock acquired</li><li>&nbsp;PostgreSQL promoted successfully</li><li>&nbsp;Timeline incremented</li><li>&nbsp;Callbacks executed</li><li>&nbsp;Other replicas reconfigured</li><li>&nbsp;Replication restored</li><li>&nbsp;Cluster operational</li></ul><h3 id="next-steps">Next Steps</h3><p>Bài 14 sẽ cover&nbsp;<strong>Switchover có kế hoạch</strong>:</p><ul><li>Planned maintenance scenarios</li><li>Zero-downtime switchover process</li><li>Graceful vs immediate switchover</li><li>Best practices for planned failove</li></ul>
