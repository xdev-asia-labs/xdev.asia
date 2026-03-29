---
id: 019c9617-fb8e-711e-a241-91e33cbbe469
title: 'Bài 15: Recovering failed nodes'
slug: bai-15-recovering-failed-nodes
description: >-
  Rejoin failed primary vào cluster, sử dụng pg_rewind mechanism và rebuild
  replica từ backup khi cần thiết.
duration_minutes: 210
is_free: true
video_url: null
sort_order: 15
section_title: PostgreSQL High Availability với Patroni & etcd
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---
<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Rejoin old primary sau khi failover</li><li>Sử dụng pg_rewind để sync lại data</li><li>Rebuild replica với pg_basebackup</li><li>Xử lý timeline divergence</li><li>Recover từ split-brain scenarios</li><li>Automate recovery với Patroni</li></ul><h2 id="1-node-recovery-overview">1. Node Recovery Overview</h2><h3 id="11-recovery-scenarios">1.1. Recovery Scenarios</h3><p><strong>Khi nào cần recover node?</strong></p><h4 id="scenario-1-old-primary-sau-failover">Scenario 1: Old primary sau failover</h4><pre><code class="language-text">Before:
  node1 (primary) → FAILS
  node2 (replica) → promoted to primary

After:
  node1: Needs rejoin as replica
  node2: Current primary
</code></pre><h4 id="scenario-2-replica-disconnected">Scenario 2: Replica disconnected</h4><pre><code class="language-text">Before:
  node3 (replica) → Network partition / Crash

After:
  node3: Needs to catch up with primary
</code></pre><h4 id="scenario-3-hardware-replacement">Scenario 3: Hardware replacement</h4><pre><code class="language-text">Before:
  node2: Disk failure

After:
  node2: New disk, needs full rebuild
</code></pre><h4 id="scenario-4-timeline-divergence">Scenario 4: Timeline divergence</h4><pre><code class="language-text">Before:
  node1 accepted writes AFTER losing leader lock

After:
  node1: Diverged timeline, conflicts with cluster
</code></pre><h3 id="12-recovery-methods">1.2. Recovery Methods</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Method</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">When to use</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Time</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Data loss</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">Auto-rejoin</strong></td><td style="padding: 5px 10px;">Node was clean shutdown</td><td style="padding: 5px 10px;">~10s</td><td style="padding: 5px 10px;">None</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">pg_rewind</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Timeline divergence</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">~1-5min</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">None</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">pg_basebackup</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Major corruption / Full rebuild</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">~30min+</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">None</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">Manual recovery</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Complex split-brain scenarios</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Varies</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Possible</td></tr></tbody></table>
<!--kg-card-end: html-->
<h2 id="2-auto-rejoin-patroni-default">2. Auto-Rejoin (Patroni Default)</h2><h3 id="21-how-auto-rejoin-works">2.1. How auto-rejoin works</h3><p><strong>When node comes back online</strong>:</p><pre><code class="language-text">1. Patroni starts
2. Checks DCS for cluster state
3. Finds current leader (e.g., node2)
4. Compares local timeline with cluster timeline
5. If compatible → auto-rejoin as replica
6. If diverged → need pg_rewind or reinit
</code></pre><h3 id="22-example-clean-rejoin">2.2. Example: Clean rejoin</h3><p><strong>Setup</strong>:</p><pre><code class="language-bash"># Current cluster state
patronictl list postgres

# + Cluster: postgres ----+----+-----------+
# | Member | Host        | Role    | State   | TL | Lag in MB |
# +--------+-------------+---------+---------+----+-----------+
# | node1  | 10.0.1.11   | Leader  | running |  2 |           |
# | node2  | 10.0.1.12   | Replica | running |  2 |         0 |
# | node3  | 10.0.1.13   | Replica | running |  2 |         0 |
# +--------+-------------+---------+---------+----+-----------+
</code></pre><p><strong>Simulate node3 failure</strong>:</p><pre><code class="language-bash"># On node3: Stop Patroni cleanly
sudo systemctl stop patroni

# Cluster now:
# | node1  | 10.0.1.11   | Leader  | running |  2 |           |
# | node2  | 10.0.1.12   | Replica | running |  2 |         0 |
# | node3  | 10.0.1.13   | -       | stopped |  - |           | ← Down
</code></pre><p><strong>Recovery</strong>:</p><pre><code class="language-bash"># On node3: Start Patroni
sudo systemctl start patroni

# Watch logs
sudo journalctl -u patroni -f
</code></pre><p><strong>Log output</strong>:</p><pre><code class="language-text">2024-11-25 10:00:00 INFO: Starting Patroni...
2024-11-25 10:00:01 INFO: Connected to DCS (etcd)
2024-11-25 10:00:02 INFO: Cluster timeline: 2, local timeline: 2 ✅
2024-11-25 10:00:03 INFO: Current leader: node1
2024-11-25 10:00:04 INFO: Rejoining as replica
2024-11-25 10:00:05 INFO: Starting PostgreSQL in recovery mode
2024-11-25 10:00:08 INFO: Replication started, streaming from node1
2024-11-25 10:00:10 INFO: Successfully rejoined cluster ✅
</code></pre><p><strong>Verify</strong>:</p><pre><code class="language-bash">patronictl list postgres

# + Cluster: postgres ----+----+-----------+
# | Member | Host        | Role    | State   | TL | Lag in MB |
# +--------+-------------+---------+---------+----+-----------+
# | node1  | 10.0.1.11   | Leader  | running |  2 |           |
# | node2  | 10.0.1.12   | Replica | running |  2 |         0 |
# | node3  | 10.0.1.13   | Replica | running |  2 |         0 | ← Rejoined!
# +--------+-------------+---------+---------+----+-----------+
</code></pre><p><strong>Time</strong>: ~10 seconds ✅</p><h3 id="23-configuration-for-auto-rejoin">2.3. Configuration for auto-rejoin</h3><pre><code class="language-yaml"># In patroni.yml
postgresql:
  use_pg_rewind: true  # Enable automatic pg_rewind if needed
  remove_data_directory_on_rewind_failure: false  # Safety
  remove_data_directory_on_diverged_timelines: false  # Safety

# Patroni will attempt:
# 1. Auto-rejoin (if timelines match)
# 2. pg_rewind (if timeline diverged but recoverable)
# 3. Full reinit (if pg_rewind fails and auto-reinit enabled)
</code></pre><h2 id="3-using-pgrewind">3. Using pg_rewind</h2><h3 id="31-what-is-pgrewind">3.1. What is pg_rewind?</h3><p><strong>pg_rewind</strong>&nbsp;= Tool to resync a PostgreSQL instance that&nbsp;<strong>diverged</strong>&nbsp;from the current timeline.</p><p><strong>When needed</strong>:</p><pre><code class="language-text">Scenario: Old primary received writes AFTER failover

Timeline:
  T+0: node1 (primary), node2 (replica)
  T+1: Network partition
  T+2: node2 promoted (timeline: 1 → 2)
  T+3: node1 still thinks it's primary, accepts writes (timeline: 1)
  T+4: Network restored
  T+5: Conflict! node1 timeline=1, cluster timeline=2

Solution: pg_rewind node1 to match node2's timeline
</code></pre><p><strong>How it works</strong>:</p><pre><code class="language-text">1. Find common ancestor (last shared WAL position)
2. Replay WAL from new primary
3. Overwrite conflicting blocks
4. Node rejoins as replica on new timeline
</code></pre><h3 id="32-prerequisites-for-pgrewind">3.2. Prerequisites for pg_rewind</h3><p><strong>Requirements</strong>:</p><pre><code class="language-yaml"># In patroni.yml → postgresql.parameters
wal_log_hints: 'on'  # Required! (or use full_page_writes)

# Or use data checksums (set during initdb):
# initdb --data-checksums

# Also ensure:
max_wal_senders: 10  # For replication
wal_level: replica   # For replication
</code></pre><p><strong>Why&nbsp;<code>wal_log_hints</code>?</strong></p><pre><code class="language-text">Without wal_log_hints:
  pg_rewind cannot determine which blocks changed
  → Cannot resync
  → Must use full rebuild (pg_basebackup)

With wal_log_hints:
  PostgreSQL tracks all block changes
  → pg_rewind can identify divergence
  → Fast resync ✅

Trade-off: ~1-2% write performance overhead
</code></pre><h3 id="33-manual-pgrewind">3.3. Manual pg_rewind</h3><p><strong>Scenario</strong>: node1 (old primary) needs resync after failover.</p><p><strong>Step 1: Stop PostgreSQL on node1</strong></p><pre><code class="language-bash"># On node1
sudo systemctl stop patroni
sudo systemctl stop postgresql
</code></pre><p><strong>Step 2: Run pg_rewind</strong></p><pre><code class="language-bash"># On node1: Rewind to match node2 (current primary)
sudo -u postgres pg_rewind \
  --target-pgdata=/var/lib/postgresql/18/data \
  --source-server="host=10.0.1.12 port=5432 user=replicator dbname=postgres" \
  --progress \
  --debug

# Output:
# connected to server
# servers diverged at WAL location 0/3000000 on timeline 1
# rewinding from last common checkpoint at 0/2000000 on timeline 1
# reading source file list
# reading target file list
# reading WAL in target
# need to copy 124 MB (total source directory size is 2048 MB)
# creating backup label and updating control file
# syncing target data directory
# Done!
</code></pre><p><strong>Step 3: Create standby.signal</strong></p><pre><code class="language-bash"># On node1: Mark as standby
sudo -u postgres touch /var/lib/postgresql/18/data/standby.signal
</code></pre><p><strong>Step 4: Update primary_conninfo</strong></p><pre><code class="language-bash"># On node1: Point to new primary (node2)
sudo -u postgres tee /var/lib/postgresql/18/data/postgresql.auto.conf &lt;&lt;EOF
primary_conninfo = 'host=10.0.1.12 port=5432 user=replicator password=replica_password'
EOF
</code></pre><p><strong>Step 5: Start PostgreSQL</strong></p><pre><code class="language-bash"># On node1
sudo systemctl start patroni

# Patroni will start PostgreSQL in recovery mode
</code></pre><p><strong>Step 6: Verify</strong></p><pre><code class="language-bash">patronictl list postgres

# node1 should now be a Replica following node2 ✅
</code></pre><p><strong>Time</strong>: ~1-5 minutes (depends on divergence size)</p><h3 id="34-automatic-pgrewind-patroni">3.4. Automatic pg_rewind (Patroni)</h3><p><strong>Enable in patroni.yml</strong>:</p><pre><code class="language-yaml"># Patroni will automatically run pg_rewind if needed
postgresql:
  use_pg_rewind: true
  
  parameters:
    wal_log_hints: 'on'  # Required!
</code></pre><p><strong>Behavior</strong>:</p><pre><code class="language-text">When node rejoins after failover:
  1. Patroni detects timeline divergence
  2. Automatically runs pg_rewind
  3. Restarts PostgreSQL as replica
  4. Node rejoins cluster

No manual intervention needed! ✅
</code></pre><p><strong>Example log</strong>:</p><pre><code class="language-text">2024-11-25 10:05:00 INFO: Local timeline 1, cluster timeline 2
2024-11-25 10:05:01 WARNING: Timeline divergence detected
2024-11-25 10:05:02 INFO: use_pg_rewind enabled, attempting rewind...
2024-11-25 10:05:03 INFO: Running pg_rewind...
2024-11-25 10:05:45 INFO: pg_rewind completed successfully
2024-11-25 10:05:46 INFO: Starting PostgreSQL as replica
2024-11-25 10:05:50 INFO: Rejoined cluster ✅
</code></pre><h2 id="4-full-rebuild-with-pgbasebackup">4. Full Rebuild with pg_basebackup</h2><h3 id="41-when-to-use-pgbasebackup">4.1. When to use pg_basebackup</h3><p><strong>Use cases</strong>:</p><ol><li><strong>pg_rewind failed</strong>&nbsp;- Data too diverged</li><li><strong>Corruption detected</strong>&nbsp;- Data integrity issues</li><li><strong>Major version upgrade</strong>&nbsp;- Different PostgreSQL versions</li><li><strong>New node</strong>&nbsp;- Adding fresh replica to cluster</li><li><strong>Disk replaced</strong>&nbsp;- Empty data directory</li><li><strong>Paranoid safety</strong>&nbsp;- Want guaranteed clean state</li></ol><p><strong>Trade-off</strong>: Slower (~30min-2hrs for large DB) but guaranteed clean.</p><h3 id="42-manual-pgbasebackup">4.2. Manual pg_basebackup</h3><p><strong>Step 1: Stop and clean node</strong></p><pre><code class="language-bash"># On node to rebuild (e.g., node3)
sudo systemctl stop patroni
sudo systemctl stop postgresql

# Remove old data directory
sudo rm -rf /var/lib/postgresql/18/data/*
</code></pre><p><strong>Step 2: Take base backup from primary</strong></p><pre><code class="language-bash"># On node3: Backup from current primary (node2)
sudo -u postgres pg_basebackup \
  -h 10.0.1.12 \
  -p 5432 \
  -U replicator \
  -D /var/lib/postgresql/18/data \
  -Fp \
  -Xs \
  -P \
  -R

# Flags:
# -h: Host (primary)
# -U: Replication user
# -D: Target data directory
# -Fp: Plain format (not tar)
# -Xs: Stream WAL during backup
# -P: Show progress
# -R: Create standby.signal and replication config
</code></pre><p><strong>Output</strong>:</p><pre><code class="language-text">Password: [enter replicator password]
pg_basebackup: initiating base backup, waiting for checkpoint to complete
pg_basebackup: checkpoint completed
pg_basebackup: write-ahead log start point: 0/4000000 on timeline 2
pg_basebackup: starting background WAL receiver
24567/24567 kB (100%), 1/1 tablespace
pg_basebackup: write-ahead log end point: 0/4000168
pg_basebackup: syncing data to disk ...
pg_basebackup: base backup completed
</code></pre><p><strong>Step 3: Verify configuration</strong></p><pre><code class="language-bash"># On node3: Check standby.signal created
ls /var/lib/postgresql/18/data/standby.signal

# Check primary_conninfo
cat /var/lib/postgresql/18/data/postgresql.auto.conf | grep primary_conninfo
</code></pre><p><strong>Step 4: Start node</strong></p><pre><code class="language-bash"># On node3
sudo systemctl start patroni

# Node will rejoin as replica
</code></pre><p><strong>Step 5: Verify</strong></p><pre><code class="language-bash">patronictl list postgres

# node3 should be streaming from primary ✅
</code></pre><p><strong>Time</strong>: ~30min-2hrs (depends on database size)</p><h3 id="43-patroni-automatic-reinit">4.3. Patroni automatic reinit</h3><p><strong>Enable auto-reinit</strong>:</p><pre><code class="language-yaml"># In patroni.yml
postgresql:
  use_pg_rewind: true
  
  # If pg_rewind fails, auto-reinit
  remove_data_directory_on_rewind_failure: true
  remove_data_directory_on_diverged_timelines: true

# WARNING: Data directory will be DELETED and recreated
# Only enable if you trust automation!
</code></pre><p><strong>Behavior</strong>:</p><pre><code class="language-text">When node rejoins:
  1. Try auto-rejoin → FAILED (diverged)
  2. Try pg_rewind → FAILED (corruption)
  3. Automatically remove data directory
  4. Run pg_basebackup from current primary
  5. Rejoin as replica

Fully automated! But destructive! ⚠️
</code></pre><h3 id="44-patroni-reinit-command">4.4. Patroni reinit command</h3><p><strong>Manual trigger</strong>:</p><pre><code class="language-bash"># Force reinit on node3
patronictl reinit postgres node3

# Patroni will:
# 1. Stop PostgreSQL on node3
# 2. Remove data directory
# 3. Run pg_basebackup from leader
# 4. Start as replica

# Prompt:
# Are you sure you want to reinitialize members node3? [y/N]: y
</code></pre><p><strong>Monitor progress</strong>:</p><pre><code class="language-bash"># On node3: Watch logs
sudo journalctl -u patroni -f

# Expected:
# INFO: Removing data directory...
# INFO: Running pg_basebackup...
# INFO: Backup completed (24 GB in 15 minutes)
# INFO: Starting PostgreSQL...
# INFO: Rejoined cluster ✅
</code></pre><h2 id="5-timeline-divergence-resolution">5. Timeline Divergence Resolution</h2><h3 id="51-understanding-timelines">5.1. Understanding timelines</h3><p><strong>Timeline</strong>&nbsp;= History branch counter</p><pre><code class="language-text">Initial:
  Timeline 1 (all nodes)

After first failover:
  Old primary: Timeline 1
  New primary: Timeline 2 ← Incremented

After second failover:
  Timeline 3 ← Incremented again
</code></pre><p><strong>Why timelines exist</strong>:</p><pre><code class="language-text">Prevent data conflict:
  If two nodes both think they're primary,
  they write on different timelines.
  → Conflict detected
  → Manual intervention required
</code></pre><h3 id="52-detecting-timeline-divergence">5.2. Detecting timeline divergence</h3><p><strong>Check local timeline</strong>:</p><pre><code class="language-bash"># On any node
sudo -u postgres psql -c "
  SELECT timeline_id 
  FROM pg_control_checkpoint();
"

# Example:
# timeline_id
# ------------
#           2
</code></pre><p><strong>Check cluster timeline</strong>:</p><pre><code class="language-bash"># Via Patroni
patronictl list postgres | head -2

# + Cluster: postgres (7001234567890123456) ----+----+-----------+
#                                               ↑ Timeline in cluster ID

# Or via REST API
curl -s http://10.0.1.12:8008/patroni | jq '.timeline'
# Output: 2
</code></pre><p><strong>Compare</strong>:</p><pre><code class="language-bash"># If node timeline ≠ cluster timeline
# → Node needs pg_rewind or reinit
</code></pre><h3 id="53-scenario-timeline-divergence-after-split-brain">5.3. Scenario: Timeline divergence after split-brain</h3><p><strong>Setup</strong>:</p><pre><code class="language-text">T+0: 3-node cluster, node1 = primary (timeline 2)
T+1: Network partition splits node1 from node2/node3
T+2: node1 thinks it's still primary (timeline 2)
T+3: node2/node3 elect node2 as primary (timeline 3)
T+4: Both node1 and node2 accept writes!
  - node1: timeline 2, accepting writes ❌
  - node2: timeline 3, accepting writes ✅
  - Split-brain! ⚠️
T+5: Network restored
T+6: Conflict detected
</code></pre><p><strong>Resolution</strong>:</p><pre><code class="language-bash"># Step 1: Verify which timeline is "correct"
patronictl list postgres

# + Cluster: postgres ----+----+-----------+
# | Member | Host        | Role    | State   | TL | Lag in MB |
# +--------+-------------+---------+---------+----+-----------+
# | node1  | 10.0.1.11   | -       | stopped |  2 |           | ← WRONG timeline
# | node2  | 10.0.1.12   | Leader  | running |  3 |           | ← CORRECT
# | node3  | 10.0.1.13   | Replica | running |  3 |         0 |
# +--------+-------------+---------+---------+----+-----------+

# Step 2: Save diverged data from node1 (if needed)
sudo -u postgres pg_dumpall -h 10.0.1.11 &gt; /backup/node1-diverged-data.sql

# Step 3: Rewind node1 to match timeline 3
# If pg_rewind works:
patronictl reinit postgres node1

# If pg_rewind fails (likely due to significant divergence):
# Manual pg_basebackup required
sudo systemctl stop patroni  # On node1
sudo rm -rf /var/lib/postgresql/18/data/*
sudo -u postgres pg_basebackup -h 10.0.1.12 -D /var/lib/postgresql/18/data -U replicator -R -P
sudo systemctl start patroni

# Step 4: Manually reconcile diverged data (if important)
# Review /backup/node1-diverged-data.sql
# Manually merge important transactions into node2
</code></pre><p><strong>Prevention</strong>:</p><pre><code class="language-yaml"># Configure Patroni to prevent split-brain
bootstrap:
  dcs:
    # Primary loses leader lock → immediately demote
    ttl: 30
    retry_timeout: 10
    
  postgresql:
    parameters:
      # Prevent writes if not sure about leadership
      synchronous_commit: 'remote_apply'  # Requires sync replica
</code></pre><h2 id="6-split-brain-prevention-and-recovery">6. Split-Brain Prevention and Recovery</h2><h3 id="61-how-patroni-prevents-split-brain">6.1. How Patroni prevents split-brain</h3><p><strong>Mechanism: DCS Leader Lock</strong></p><pre><code class="language-text">Primary MUST hold leader lock in DCS:

If primary loses DCS connection:
  1. Cannot renew leader lock
  2. TTL expires (e.g., 30 seconds)
  3. Primary DEMOTES itself (becomes read-only)
  4. Replicas detect no leader
  5. Election begins

Key: Primary NEVER operates without DCS lock ✅
</code></pre><p><strong>Code flow (pseudo)</strong>:</p><pre><code class="language-python">while True:
    if is_leader:
        if can_renew_leader_lock():
            # Still leader, continue
            accept_writes()
        else:
            # Lost DCS connection!
            log.error("Lost leader lock, DEMOTING!")
            demote_to_replica()
            reject_writes()
    
    sleep(loop_wait)
</code></pre><h3 id="62-fencing-mechanisms">6.2. Fencing mechanisms</h3><p><strong>PostgreSQL-level fencing</strong>:</p><pre><code class="language-sql">-- When demoted, set read-only
ALTER SYSTEM SET default_transaction_read_only = 'on';
SELECT pg_reload_conf();

-- All new transactions will fail:
-- ERROR: cannot execute INSERT in a read-only transaction
</code></pre><p><strong>OS-level fencing (advanced)</strong>:</p><pre><code class="language-bash"># STONITH (Shoot The Other Node In The Head)
# Via callbacks in patroni.yml

callbacks:
  on_start: /var/lib/postgresql/callbacks/on_start.sh
  on_stop: /var/lib/postgresql/callbacks/on_stop.sh
  on_role_change: /var/lib/postgresql/callbacks/on_role_change.sh

# on_role_change.sh example:
#!/bin/bash
ROLE=$1  # "master" or "replica"

if [ "$ROLE" == "replica" ]; then
  # Lost leadership, ensure NO writes possible
  sudo iptables -A INPUT -p tcp --dport 5432 -j REJECT
  # Block incoming connections to PostgreSQL
fi

if [ "$ROLE" == "master" ]; then
  # Gained leadership, allow writes
  sudo iptables -D INPUT -p tcp --dport 5432 -j REJECT
fi
</code></pre><h3 id="63-scenario-recover-from-split-brain">6.3. Scenario: Recover from split-brain</h3><p><strong>Detection</strong>:</p><pre><code class="language-bash"># Symptoms:
# - Multiple nodes claim to be primary
# - Patroni shows errors
# - Applications seeing inconsistent data

# Check cluster state
patronictl list postgres

# If you see multiple "Leader" or conflicts:
# SPLIT-BRAIN DETECTED! ⚠️
</code></pre><p><strong>Recovery steps</strong>:</p><pre><code class="language-bash"># Step 1: STOP ALL NODES immediately
for node in node1 node2 node3; do
  ssh $node "sudo systemctl stop patroni"
done

# Step 2: Determine "source of truth"
# Usually: Node with most recent data / highest timeline
for node in node1 node2 node3; do
  echo "=== $node ==="
  ssh $node "sudo -u postgres psql -c \"
    SELECT timeline_id, pg_last_wal_receive_lsn()
    FROM pg_control_checkpoint();
  \""
done

# Step 3: Choose winner (e.g., node2 has highest timeline)
WINNER="node2"

# Step 4: Backup diverged data from losers
ssh node1 "sudo -u postgres pg_dumpall &gt; /backup/node1-diverged.sql"
ssh node3 "sudo -u postgres pg_dumpall &gt; /backup/node3-diverged.sql"

# Step 5: Wipe losers and rebuild from winner
for node in node1 node3; do
  ssh $node "sudo rm -rf /var/lib/postgresql/18/data/*"
  ssh $node "sudo -u postgres pg_basebackup \
    -h $WINNER \
    -D /var/lib/postgresql/18/data \
    -U replicator -R -P"
done

# Step 6: Clear DCS state (fresh start)
etcdctl del --prefix /service/postgres/

# Step 7: Start winner first
ssh $WINNER "sudo systemctl start patroni"

# Wait for winner to become leader
sleep 10

# Step 8: Start other nodes
ssh node1 "sudo systemctl start patroni"
ssh node3 "sudo systemctl start patroni"

# Step 9: Verify cluster
patronictl list postgres

# Should show:
# node2: Leader
# node1: Replica (following node2)
# node3: Replica (following node2)
# All same timeline ✅

# Step 10: Reconcile diverged data manually
# Review /backup/*-diverged.sql files
# Merge critical transactions if needed
</code></pre><h2 id="7-monitoring-node-recovery">7. Monitoring Node Recovery</h2><h3 id="71-key-metrics">7.1. Key metrics</h3><pre><code class="language-sql">-- Replication status
SELECT application_name, 
       state,
       pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) AS lag_bytes,
       replay_lag,
       sync_state
FROM pg_stat_replication;

-- Timeline check
SELECT timeline_id FROM pg_control_checkpoint();

-- Recovery status (on replica)
SELECT pg_is_in_recovery(),
       pg_last_wal_receive_lsn(),
       pg_last_wal_replay_lsn(),
       pg_wal_lsn_diff(pg_last_wal_receive_lsn(), pg_last_wal_replay_lsn()) AS replay_lag_bytes;
</code></pre><h3 id="72-patroni-rest-api-monitoring">7.2. Patroni REST API monitoring</h3><pre><code class="language-bash"># Check node status
curl -s http://10.0.1.11:8008/patroni | jq

# Key fields:
# {
#   "state": "running",
#   "role": "replica",
#   "timeline": 3,
#   "replication": [
#     {
#       "usename": "replicator",
#       "application_name": "node1",
#       "state": "streaming",
#       "sync_state": "async",
#       "replay_lsn": "0/5000000"
#     }
#   ]
# }
</code></pre><h3 id="73-alerting-on-recovery-issues">7.3. Alerting on recovery issues</h3><pre><code class="language-yaml"># Prometheus alert
groups:
  - name: node_recovery
    rules:
      - alert: PatroniNodeDown
        expr: up{job="patroni"} == 0
        for: 1m
        labels:
          severity: warning
        annotations:
          summary: "Patroni node {{ $labels.instance }} is down"
      
      - alert: PatroniTimelineMismatch
        expr: |
          count by (cluster) (patroni_timeline) 
          != 
          count by (cluster, timeline) (patroni_timeline)
        labels:
          severity: critical
        annotations:
          summary: "Timeline mismatch detected - possible split-brain"
      
      - alert: PatroniReplicationLagHigh
        expr: patroni_replication_lag_bytes &gt; 104857600  # 100MB
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Replication lag &gt; 100MB on {{ $labels.instance }}"
</code></pre><h2 id="8-best-practices">8. Best Practices</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>Enable wal_log_hints</strong>&nbsp;- Required for pg_rewind</li><li><strong>Test recovery regularly</strong>&nbsp;- Monthly drills</li><li><strong>Monitor timelines</strong>&nbsp;- Alert on divergence</li><li><strong>Have backups</strong>&nbsp;- Before risky operations</li><li><strong>Document procedures</strong>&nbsp;- Recovery runbooks</li><li><strong>Use Patroni auto-recovery</strong>&nbsp;- Less manual intervention</li><li><strong>Verify after recovery</strong>&nbsp;- Test replication, queries</li><li><strong>Keep DCS healthy</strong>&nbsp;- etcd cluster critical</li><li><strong>Log everything</strong>&nbsp;- Audit trail for incidents</li><li><strong>Practice split-brain recovery</strong>&nbsp;- Hope never needed, but be ready</li></ol><h3 id="%E2%9D%8C-dont">❌ DON'T</h3><ol><li><strong>Don't skip wal_log_hints</strong>&nbsp;- pg_rewind will fail</li><li><strong>Don't assume auto-recovery works</strong>&nbsp;- Test it!</li><li><strong>Don't ignore timeline mismatches</strong>&nbsp;- Critical issue</li><li><strong>Don't manually promote during recovery</strong>&nbsp;- Let Patroni handle</li><li><strong>Don't delete data without backup</strong>&nbsp;- Diverged data may be important</li><li><strong>Don't run split-brain clusters</strong>&nbsp;- Fix immediately</li><li><strong>Don't forget callbacks</strong>&nbsp;- Fencing prevents split-brain</li><li><strong>Don't over-automate reinit</strong>&nbsp;- Risk data loss</li></ol><h2 id="9-lab-exercises">9. Lab Exercises</h2><h3 id="lab-1-auto-rejoin-after-clean-shutdown">Lab 1: Auto-rejoin after clean shutdown</h3><p><strong>Tasks</strong>:</p><ol><li>Stop one replica:&nbsp;<code>sudo systemctl stop patroni</code></li><li>Make changes on primary</li><li>Start replica:&nbsp;<code>sudo systemctl start patroni</code></li><li>Verify auto-rejoin and lag catch-up</li><li>Time the recovery</li></ol><h3 id="lab-2-pgrewind-after-simulated-failover">Lab 2: pg_rewind after simulated failover</h3><p><strong>Tasks</strong>:</p><ol><li>Record current primary</li><li>Manually stop primary:&nbsp;<code>sudo systemctl stop patroni</code></li><li>Wait for failover to complete</li><li>Start old primary (should auto-rewind)</li><li>Verify old primary rejoined as replica</li><li>Check timeline increment</li></ol><h3 id="lab-3-full-rebuild-with-pgbasebackup">Lab 3: Full rebuild with pg_basebackup</h3><p><strong>Tasks</strong>:</p><ol><li>Stop a replica</li><li>Delete data directory:&nbsp;<code>sudo rm -rf /var/lib/postgresql/18/data/*</code></li><li>Manually run pg_basebackup from primary</li><li>Start replica</li><li>Verify replication restored</li><li>Measure rebuild time</li></ol><h3 id="lab-4-patroni-reinit-command">Lab 4: Patroni reinit command</h3><p><strong>Tasks</strong>:</p><ol><li>Use&nbsp;<code>patronictl reinit postgres node3</code></li><li>Monitor logs during process</li><li>Verify automated rebuild</li><li>Compare time vs manual pg_basebackup</li></ol><h3 id="lab-5-timeline-divergence-simulation">Lab 5: Timeline divergence simulation</h3><p><strong>Tasks</strong>:</p><ol><li>Create network partition (iptables)</li><li>Wait for failover</li><li>Manually promote old primary (force split-brain)</li><li>Write different data to both "primaries"</li><li>Restore network</li><li>Observe conflict detection</li><li>Practice recovery procedure</li></ol><h2 id="10-troubleshooting">10. Troubleshooting</h2><h3 id="issue-pgrewind-fails">Issue: pg_rewind fails</h3><p><strong>Error</strong>:&nbsp;<code>pg_rewind: fatal: could not find common ancestor</code></p><p><strong>Cause</strong>: wal_log_hints not enabled or data too diverged.</p><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Check wal_log_hints
sudo -u postgres psql -c "SHOW wal_log_hints;"

# If off, enable:
sudo -u postgres psql -c "ALTER SYSTEM SET wal_log_hints = on;"
sudo systemctl restart postgresql

# If still fails, use pg_basebackup instead
patronictl reinit postgres node1
</code></pre><h3 id="issue-replica-stuck-in-recovery">Issue: Replica stuck in recovery</h3><p><strong>Symptoms</strong>: Replica shows "running" but high lag.</p><p><strong>Diagnosis</strong>:</p><pre><code class="language-bash"># Check replication status
sudo -u postgres psql -h 10.0.1.11 -c "
  SELECT * FROM pg_stat_replication;
"

# Check replica logs
sudo journalctl -u postgresql -n 100
</code></pre><p><strong>Common causes</strong>:</p><ul><li>WAL receiver crashed</li><li>Network issues</li><li>Disk full on replica</li><li>Archive restore errors</li></ul><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Restart replication
sudo systemctl restart patroni

# If persists, reinit
patronictl reinit postgres node3
</code></pre><h3 id="issue-cannot-connect-after-recovery">Issue: Cannot connect after recovery</h3><p><strong>Error</strong>:&nbsp;<code>FATAL: the database system is starting up</code></p><p><strong>Cause</strong>: PostgreSQL still replaying WAL.</p><p><strong>Solution</strong>: Wait for recovery to complete, or check logs for errors.</p><pre><code class="language-bash"># Check recovery progress
sudo -u postgres psql -h 10.0.1.13 -c "
  SELECT pg_is_in_recovery(),
         pg_last_wal_receive_lsn(),
         pg_last_wal_replay_lsn();
"
</code></pre><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11. Tổng kết</h2><h3 id="recovery-methods-summary">Recovery Methods Summary</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Method</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Speed</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Data Loss</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">Use Case</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">Auto-rejoin</td><td style="padding: 5px 10px;">Fastest</td><td style="padding: 5px 10px;">None</td><td style="padding: 5px 10px;">Clean shutdown/restart</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">pg_rewind</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Fast</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">None</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Timeline divergence</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">pg_basebackup</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Slow</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">None</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Corruption, major divergence</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Manual recovery</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Varies</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Possible</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Split-brain, complex issues</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="key-concepts">Key Concepts</h3><p>✅&nbsp;<strong>Auto-rejoin</strong>&nbsp;- Patroni handles clean recovery automatically</p><p>✅&nbsp;<strong>pg_rewind</strong>&nbsp;- Resync after timeline divergence (requires wal_log_hints)</p><p>✅&nbsp;<strong>pg_basebackup</strong>&nbsp;- Full rebuild from primary (slow but safe)</p><p>✅&nbsp;<strong>Timeline</strong>&nbsp;- History branch, increments on failover</p><p>✅&nbsp;<strong>Split-brain</strong>&nbsp;- Multiple primaries (prevented by DCS leader lock)</p><h3 id="recovery-checklist">Recovery Checklist</h3><ul><li>&nbsp;Node failure detected</li><li>&nbsp;Determine recovery method needed</li><li>&nbsp;Backup diverged data (if any)</li><li>&nbsp;Execute recovery (auto or manual)</li><li>&nbsp;Verify timeline matches cluster</li><li>&nbsp;Verify replication streaming</li><li>&nbsp;Test read/write operations</li><li>&nbsp;Check replication lag</li><li>&nbsp;Update monitoring/documentation</li></ul><h3 id="next-steps">Next Steps</h3><p>Bài 16 sẽ cover&nbsp;<strong>Backup và Point-in-Time Recovery</strong>:</p><ul><li>pg_basebackup strategies</li><li>WAL archiving configuration</li><li>Point-in-Time Recovery (PITR) procedures</li><li>Backup automation and scheduling</li><li>Disaster recovery planning</li></ul>
