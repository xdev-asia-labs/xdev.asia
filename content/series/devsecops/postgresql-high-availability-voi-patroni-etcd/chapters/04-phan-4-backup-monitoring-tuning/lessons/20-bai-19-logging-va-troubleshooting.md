---
id: 019c9617-fb9b-734d-b723-e97053646091
title: 'Bài 19: Logging và Troubleshooting'
slug: bai-19-logging-va-troubleshooting
description: >-
  Phân tích PostgreSQL logs, Patroni logs, etcd logs, giải quyết common issues
  và các kỹ thuật debug hiệu quả.
duration_minutes: 130
is_free: true
video_url: null
sort_order: 19
section_title: "Phần 4: Backup, Monitoring & Tuning"
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5696" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5696)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1024" cy="102" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="948" cy="126" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="872" cy="150" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="796" cy="174" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="720" cy="198" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="202" x2="1100" y2="282" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="232" x2="1050" y2="302" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="934.0429399400242,83.5 934.0429399400242,120.5 902,139 869.9570600599758,120.5 869.9570600599758,83.50000000000001 902,65" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — Bài 19</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 19: Logging và Troubleshooting</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL High Availability với Patroni &amp; etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Backup, Monitoring &amp; Tuning</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h1 id="b%C3%A0i-19-logging-v%C3%A0-troubleshooting">Bài 19: Logging và Troubleshooting</h1><h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Hiểu và phân tích PostgreSQL logs</li><li>Debug Patroni issues qua logs</li><li>Troubleshoot etcd cluster problems</li><li>Identify và fix common HA issues</li><li>Use debugging tools effectively</li><li>Build troubleshooting runbooks</li></ul><h2 id="1-postgresql-logging">1. PostgreSQL Logging</h2><h3 id="11-configure-logging">1.1. Configure logging</h3><pre><code class="language-sql">-- Essential logging settings
ALTER SYSTEM SET logging_collector = on;
ALTER SYSTEM SET log_directory = 'log';
ALTER SYSTEM SET log_filename = 'postgresql-%Y-%m-%d_%H%M%S.log';
ALTER SYSTEM SET log_rotation_age = '1d';
ALTER SYSTEM SET log_rotation_size = '100MB';

-- What to log
ALTER SYSTEM SET log_min_duration_statement = '1000';  -- Slow queries (&gt;1s)
ALTER SYSTEM SET log_checkpoints = on;
ALTER SYSTEM SET log_connections = off;  -- Too verbose in production
ALTER SYSTEM SET log_disconnections = off;
ALTER SYSTEM SET log_lock_waits = on;
ALTER SYSTEM SET log_temp_files = 0;  -- Log all temp file usage
ALTER SYSTEM SET log_autovacuum_min_duration = '1s';

-- Log line format
ALTER SYSTEM SET log_line_prefix = '%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h ';
ALTER SYSTEM SET log_statement = 'none';  -- 'none', 'ddl', 'mod', 'all'
ALTER SYSTEM SET log_duration = off;

-- Error detail
ALTER SYSTEM SET log_error_verbosity = 'default';  -- 'terse', 'default', 'verbose'

-- Reload
SELECT pg_reload_conf();
</code></pre><h3 id="12-log-file-location">1.2. Log file location</h3><pre><code class="language-bash"># Default location
/var/lib/postgresql/18/data/log/

# Or configured location
sudo -u postgres psql -c "SHOW log_directory;"
sudo -u postgres psql -c "SHOW data_directory;"

# View logs
sudo tail -f /var/lib/postgresql/18/data/log/postgresql-*.log

# Or via journalctl
sudo journalctl -u postgresql -f
</code></pre><h3 id="13-common-log-patterns">1.3. Common log patterns</h3><h4 id="connection-issues">Connection issues</h4><pre><code class="language-text">LOG: connection received: host=10.0.1.50 port=54321
FATAL: password authentication failed for user "app_user"
DETAIL: Connection matched pg_hba.conf line 95: "host all all 0.0.0.0/0 md5"

→ Solution: Check password, pg_hba.conf configuration
</code></pre><h4 id="slow-queries">Slow queries</h4><pre><code class="language-text">LOG: duration: 5432.123 ms  statement: SELECT * FROM large_table WHERE ...

→ Solution: Analyze query, add indexes, optimize
</code></pre><h4 id="deadlocks">Deadlocks</h4><pre><code class="language-text">ERROR: deadlock detected
DETAIL: Process 12345 waits for ShareLock on transaction 67890; blocked by process 12346.
Process 12346 waits for ShareLock on transaction 67891; blocked by process 12345.
HINT: See server log for query details.

→ Solution: Review transaction order, add proper locking
</code></pre><h4 id="checkpoint-warnings">Checkpoint warnings</h4><pre><code class="language-text">LOG: checkpoints are occurring too frequently (24 seconds apart)
HINT: Consider increasing the configuration parameter "max_wal_size".

→ Solution: Increase max_wal_size
</code></pre><h4 id="replication-lag">Replication lag</h4><pre><code class="language-text">WARNING: could not send data to WAL receiver; retrying
DETAIL: Connection to replica timed out

→ Solution: Check network, replica health
</code></pre><h4 id="out-of-disk-space">Out of disk space</h4><pre><code class="language-text">FATAL: could not write to file "base/16384/12345": No space left on device

→ Solution: Free up disk space, increase storage
</code></pre><h3 id="14-analyze-logs-with-pgbadger">1.4. Analyze logs with pgBadger</h3><pre><code class="language-bash"># Install pgBadger
sudo apt-get install -y pgbadger

# Or from source
wget https://github.com/darold/pgbadger/archive/v12.2.tar.gz
tar -xzf v12.2.tar.gz
cd pgbadger-12.2
perl Makefile.PL
make &amp;&amp; sudo make install

# Generate report
pgbadger /var/lib/postgresql/18/data/log/postgresql-*.log \
  -o /tmp/pgbadger-report.html

# Open in browser
# file:///tmp/pgbadger-report.html

# Report includes:
# - Top slow queries
# - Connection statistics
# - Lock analysis
# - Checkpoint activity
# - Temporary file usage
</code></pre><h2 id="2-patroni-logging">2. Patroni Logging</h2><h3 id="21-patroni-log-levels">2.1. Patroni log levels</h3><pre><code class="language-yaml"># In patroni.yml
log:
  level: INFO  # DEBUG, INFO, WARNING, ERROR, CRITICAL
  format: '%(asctime)s %(levelname)s: %(message)s'
  dateformat: '%Y-%m-%d %H:%M:%S'
  max_queue_size: 1000
  dir: /var/log/patroni
  file_num: 10
  file_size: 25000000  # 25MB
</code></pre><h3 id="22-view-patroni-logs">2.2. View Patroni logs</h3><pre><code class="language-bash"># Via journalctl (if systemd service)
sudo journalctl -u patroni -f

# Show last 100 lines
sudo journalctl -u patroni -n 100

# Show logs since specific time
sudo journalctl -u patroni --since "1 hour ago"
sudo journalctl -u patroni --since "2024-11-25 10:00:00"

# Search for specific keywords
sudo journalctl -u patroni | grep -i "error\|warning\|fail"

# Export to file
sudo journalctl -u patroni --since today &gt; /tmp/patroni-today.log
</code></pre><h3 id="23-common-patroni-log-patterns">2.3. Common Patroni log patterns</h3><h4 id="successful-bootstrap">Successful bootstrap</h4><pre><code class="language-text">2024-11-25 10:00:00 INFO: Selected new etcd server http://10.0.1.11:2379
2024-11-25 10:00:01 INFO: No PostgreSQL configuration items changed, nothing to reload.
2024-11-25 10:00:02 INFO: Lock owner: None; I am node1
2024-11-25 10:00:03 INFO: trying to bootstrap a new cluster
2024-11-25 10:00:05 INFO: Running custom bootstrap script: /usr/lib/postgresql/18/bin/initdb
2024-11-25 10:00:15 INFO: postmaster pid=12345
2024-11-25 10:00:16 INFO: initialized a new cluster
2024-11-25 10:00:17 INFO: acquired session lock as a leader ✅
</code></pre><h4 id="failed-to-acquire-lock-replica">Failed to acquire lock (replica)</h4><pre><code class="language-text">2024-11-25 10:05:00 INFO: Lock owner: node1; I am node2
2024-11-25 10:05:01 INFO: does not have lock
2024-11-25 10:05:02 INFO: starting as a secondary
2024-11-25 10:05:05 INFO: replica has been created using basebackup
</code></pre><h4 id="failover-detected">Failover detected</h4><pre><code class="language-text">2024-11-25 11:30:00 WARNING: Request failed to node1:8008: connection refused
2024-11-25 11:30:10 INFO: promoted self to leader by acquiring session lock ✅
2024-11-25 11:30:11 INFO: cleared rewind state after becoming the leader
2024-11-25 11:30:12 INFO: running post_promote script
</code></pre><h4 id="dcs-connection-issues">DCS connection issues</h4><pre><code class="language-text">2024-11-25 12:00:00 ERROR: Failed to get list of machines from etcd
2024-11-25 12:00:01 WARNING: Could not activate Linux watchdog device: No such file or directory
2024-11-25 12:00:02 ERROR: watching on etcd failed
2024-11-25 12:00:03 INFO: trying to connect to etcd server http://10.0.1.11:2379

→ Solution: Check etcd cluster health
</code></pre><h4 id="pgrewind-execution">pg_rewind execution</h4><pre><code class="language-text">2024-11-25 13:00:00 INFO: running pg_rewind from node2
2024-11-25 13:00:05 INFO: pg_rewind: servers diverged at WAL position 0/5000000 on timeline 2
2024-11-25 13:00:10 INFO: pg_rewind: rewinding from last common checkpoint at 0/4000000
2024-11-25 13:00:45 INFO: pg_rewind: Done!
2024-11-25 13:00:46 INFO: starting PostgreSQL
</code></pre><h4 id="configuration-reload">Configuration reload</h4><pre><code class="language-text">2024-11-25 14:00:00 INFO: Reloading PostgreSQL configuration.
2024-11-25 14:00:01 INFO: Reload configuration: max_connections changed from 100 to 200
2024-11-25 14:00:02 INFO: PostgreSQL configuration reload succeeded
</code></pre><h3 id="24-enable-debug-logging">2.4. Enable DEBUG logging</h3><pre><code class="language-bash"># Temporarily enable debug logging
sudo -u postgres patronictl edit-config postgres

# Add:
log:
  level: DEBUG

# Or set via environment variable
sudo systemctl edit patroni

# Add:
[Service]
Environment="PATRONI_LOGLEVEL=DEBUG"

sudo systemctl daemon-reload
sudo systemctl restart patroni

# Warning: DEBUG is VERY verbose!
# Use only for troubleshooting, then disable
</code></pre><h2 id="3-etcd-logging">3. etcd Logging</h2><h3 id="31-view-etcd-logs">3.1. View etcd logs</h3><pre><code class="language-bash"># Via journalctl
sudo journalctl -u etcd -f

# Last 100 entries
sudo journalctl -u etcd -n 100

# Errors only
sudo journalctl -u etcd -p err

# Specific time range
sudo journalctl -u etcd --since "10:00" --until "11:00"
</code></pre><h3 id="32-etcd-log-levels">3.2. etcd log levels</h3><pre><code class="language-bash"># Configure in etcd service file
# /etc/systemd/system/etcd.service

ExecStart=/usr/local/bin/etcd \
  --log-level info \  # debug, info, warn, error, panic, fatal
  --logger zap \
  --log-outputs stderr
</code></pre><h3 id="33-common-etcd-log-patterns">3.3. Common etcd log patterns</h3><h4 id="cluster-healthy">Cluster healthy</h4><pre><code class="language-text">2024-11-25 10:00:00 INFO: raft.node: elected leader at term 5
2024-11-25 10:00:01 INFO: rafthttp: established a TCP streaming connection with peer node2
2024-11-25 10:00:02 INFO: etcdserver: published member info to cluster
</code></pre><h4 id="leader-election">Leader election</h4><pre><code class="language-text">2024-11-25 11:00:00 WARN: rafthttp: lost TCP streaming connection with peer node1
2024-11-25 11:00:01 INFO: raft.node: node3 elected leader at term 6
2024-11-25 11:00:02 INFO: rafthttp: peer node1 became active
</code></pre><h4 id="network-partition">Network partition</h4><pre><code class="language-text">2024-11-25 12:00:00 WARN: rafthttp: health check for peer node2 could not connect: dial tcp: i/o timeout
2024-11-25 12:00:05 ERROR: rafthttp: failed to read from node2 on stream: EOF
2024-11-25 12:00:10 WARN: etcdserver: failed to reach quorum
</code></pre><h4 id="slow-operations">Slow operations</h4><pre><code class="language-text">2024-11-25 13:00:00 WARN: etcdserver: apply request took too long [1.234s] expected less than [100ms]
2024-11-25 13:00:01 WARN: etcdserver: read-only range request took too long to execute [523ms]

→ Solution: Check disk I/O, CPU load
</code></pre><h3 id="34-etcd-debugging">3.4. etcd debugging</h3><pre><code class="language-bash"># Check cluster health
etcdctl endpoint health --cluster

# Check cluster status
etcdctl endpoint status --cluster --write-out=table

# Check member list
etcdctl member list --write-out=table

# Check alarms
etcdctl alarm list

# Compact history (if too large)
etcdctl compact $(etcdctl endpoint status --write-out="json" | jq -r '.[0].Status.header.revision')

# Defrag
etcdctl defrag --cluster
</code></pre><h2 id="4-common-issues-and-solutions">4. Common Issues and Solutions</h2><h3 id="41-issue-patroni-wont-start">4.1. Issue: Patroni won't start</h3><p><strong>Symptoms</strong>:&nbsp;<code>systemctl status patroni</code>&nbsp;shows failed</p><p><strong>Diagnosis</strong>:</p><pre><code class="language-bash"># Check logs
sudo journalctl -u patroni -n 50

# Common causes:

# 1. Configuration error
# Error: "yaml.scanner.ScannerError: mapping values are not allowed here"
→ Fix YAML syntax in patroni.yml

# 2. PostgreSQL already running
# Error: "postmaster.pid already exists"
sudo systemctl stop postgresql
rm /var/lib/postgresql/18/data/postmaster.pid

# 3. DCS not reachable
# Error: "Failed to get list of machines from etcd"
→ Check etcd status: systemctl status etcd

# 4. Permission denied
# Error: "could not open file postgresql.conf: Permission denied"
sudo chown -R postgres:postgres /var/lib/postgresql/18/data
</code></pre><h3 id="42-issue-no-leader-in-cluster">4.2. Issue: No leader in cluster</h3><p><strong>Symptoms</strong>:&nbsp;<code>patronictl list</code>&nbsp;shows no Leader</p><p><strong>Diagnosis</strong>:</p><pre><code class="language-bash"># Check all Patroni instances
for node in node1 node2 node3; do
  echo "=== $node ==="
  ssh $node "sudo systemctl status patroni"
done

# Check DCS
etcdctl endpoint health --cluster

# Check logs for election issues
sudo journalctl -u patroni | grep -i "leader\|election"

# Common causes:

# 1. DCS has no quorum
→ Ensure at least 2 of 3 etcd nodes running

# 2. All nodes tagged nofailover
→ Check tags in patroni.yml or DCS

# 3. synchronous_mode_strict with no sync replica
→ Disable strict mode or fix replication
</code></pre><h3 id="43-issue-high-replication-lag">4.3. Issue: High replication lag</h3><p><strong>Symptoms</strong>: Replica lag &gt; 100MB</p><p><strong>Diagnosis</strong>:</p><pre><code class="language-sql">-- Check lag
SELECT application_name,
       pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) AS lag_bytes,
       replay_lag
FROM pg_stat_replication;

-- Check replica activity
SELECT * FROM pg_stat_activity WHERE wait_event IS NOT NULL;

-- Common causes:

-- 1. Long-running queries on replica
SELECT pid, query_start, state, query
FROM pg_stat_activity
WHERE state = 'active' AND now() - query_start &gt; interval '5 min';
-- Kill if needed: SELECT pg_terminate_backend(pid);

-- 2. Network bandwidth
-- Check with iftop or netstat

-- 3. Disk I/O on replica
-- Check with iostat -x 1

-- 4. max_wal_senders limit
SHOW max_wal_senders;  -- Increase if needed

-- 5. wal_keep_size too small
SHOW wal_keep_size;  -- Increase to prevent WAL deletion
</code></pre><h3 id="44-issue-split-brain-detected">4.4. Issue: Split-brain detected</h3><p><strong>Symptoms</strong>: Multiple nodes claim to be leader</p><p><strong>Diagnosis</strong>:</p><pre><code class="language-bash"># Check cluster status
patronictl list postgres

# Check each node's view
for node in node1 node2 node3; do
  echo "=== $node ==="
  curl -s http://$node:8008/patroni | jq '.role'
done

# CRITICAL: Stop all Patroni immediately if split-brain confirmed
for node in node1 node2 node3; do
  ssh $node "sudo systemctl stop patroni"
done

# Recovery procedure: See Bài 15
</code></pre><h3 id="45-issue-failover-not-happening">4.5. Issue: Failover not happening</h3><p><strong>Symptoms</strong>: Primary down but no promotion</p><p><strong>Diagnosis</strong>:</p><pre><code class="language-bash"># Check Patroni status
patronictl list postgres

# Check logs
sudo journalctl -u patroni | grep -i "failover\|promote"

# Common causes:

# 1. All replicas have nofailover tag
patronictl show-config postgres | grep nofailover

# 2. Replication lag too high
patronictl show-config postgres | grep maximum_lag_on_failover

# 3. DCS connection lost on all replicas
etcdctl endpoint health --cluster

# 4. synchronous_mode_strict enabled with no sync replica
patronictl show-config postgres | grep synchronous_mode
</code></pre><h3 id="46-issue-cannot-connect-to-postgresql">4.6. Issue: Cannot connect to PostgreSQL</h3><p><strong>Symptoms</strong>: Connection refused or timeout</p><p><strong>Diagnosis</strong>:</p><pre><code class="language-bash"># 1. Check PostgreSQL running
sudo systemctl status postgresql
ps aux | grep postgres

# 2. Check listening port
sudo netstat -tuln | grep 5432
sudo ss -tuln | grep 5432

# 3. Test connection locally
psql -h localhost -U postgres -c "SELECT 1"

# 4. Check pg_hba.conf
sudo cat /var/lib/postgresql/18/data/pg_hba.conf | grep -v "^#"

# 5. Check postgresql.conf
sudo -u postgres psql -c "SHOW listen_addresses;"
sudo -u postgres psql -c "SHOW port;"

# 6. Check firewall
sudo iptables -L -n | grep 5432
sudo ufw status

# 7. Test from remote
telnet 10.0.1.11 5432
nc -zv 10.0.1.11 5432
</code></pre><h3 id="47-issue-pgrewind-failed">4.7. Issue: pg_rewind failed</h3><p><strong>Symptoms</strong>: Node cannot rejoin after failover</p><p><strong>Error</strong>:&nbsp;<code>pg_rewind: error: could not find common ancestor</code></p><p><strong>Diagnosis</strong>:</p><pre><code class="language-bash"># Check logs
sudo journalctl -u patroni | grep pg_rewind

# Common causes:

# 1. wal_log_hints not enabled
sudo -u postgres psql -c "SHOW wal_log_hints;"
# If off, enable and restart

# 2. Timeline too diverged
# Solution: Full reinit
patronictl reinit postgres node1

# 3. Data directory corrupt
# Solution: Remove and rebuild
sudo systemctl stop patroni
sudo rm -rf /var/lib/postgresql/18/data
sudo systemctl start patroni  # Patroni will rebuild
</code></pre><h2 id="5-debugging-tools">5. Debugging Tools</h2><h3 id="51-patronictl-commands">5.1. patronictl commands</h3><pre><code class="language-bash"># List cluster
patronictl list postgres

# Show configuration
patronictl show-config postgres

# Edit configuration
patronictl edit-config postgres

# Restart node
patronictl restart postgres node1

# Reinitialize node
patronictl reinit postgres node1

# Reload configuration
patronictl reload postgres node1

# Pause/resume cluster
patronictl pause postgres
patronictl resume postgres

# History
patronictl history postgres
</code></pre><h3 id="52-etcdctl-commands">5.2. etcdctl commands</h3><pre><code class="language-bash"># Cluster health
etcdctl endpoint health --cluster

# Cluster status
etcdctl endpoint status --cluster --write-out=table

# Member list
etcdctl member list --write-out=table

# Get Patroni data
etcdctl get /service/postgres/ --prefix --keys-only
etcdctl get /service/postgres/leader

# Watch for changes
etcdctl watch /service/postgres/ --prefix

# Delete key (dangerous!)
etcdctl del /service/postgres/leader  # Force re-election
</code></pre><h3 id="53-postgresql-diagnostic-queries">5.3. PostgreSQL diagnostic queries</h3><pre><code class="language-sql">-- Current activity
SELECT * FROM pg_stat_activity WHERE state != 'idle';

-- Blocking queries
SELECT blocked_locks.pid AS blocked_pid,
       blocked_activity.usename AS blocked_user,
       blocking_locks.pid AS blocking_pid,
       blocking_activity.usename AS blocking_user,
       blocked_activity.query AS blocked_statement,
       blocking_activity.query AS current_statement_in_blocking_process
FROM pg_catalog.pg_locks blocked_locks
JOIN pg_catalog.pg_stat_activity blocked_activity ON blocked_activity.pid = blocked_locks.pid
JOIN pg_catalog.pg_locks blocking_locks 
    ON blocking_locks.locktype = blocked_locks.locktype
    AND blocking_locks.database IS NOT DISTINCT FROM blocked_locks.database
    AND blocking_locks.relation IS NOT DISTINCT FROM blocked_locks.relation
    AND blocking_locks.page IS NOT DISTINCT FROM blocked_locks.page
    AND blocking_locks.tuple IS NOT DISTINCT FROM blocked_locks.tuple
    AND blocking_locks.virtualxid IS NOT DISTINCT FROM blocked_locks.virtualxid
    AND blocking_locks.transactionid IS NOT DISTINCT FROM blocked_locks.transactionid
    AND blocking_locks.classid IS NOT DISTINCT FROM blocked_locks.classid
    AND blocking_locks.objid IS NOT DISTINCT FROM blocked_locks.objid
    AND blocking_locks.objsubid IS NOT DISTINCT FROM blocked_locks.objsubid
    AND blocking_locks.pid != blocked_locks.pid
JOIN pg_catalog.pg_stat_activity blocking_activity ON blocking_activity.pid = blocking_locks.pid
WHERE NOT blocked_locks.granted;

-- Replication status
SELECT * FROM pg_stat_replication;

-- WAL status
SELECT * FROM pg_stat_wal_receiver;

-- Database size
SELECT datname, pg_size_pretty(pg_database_size(datname))
FROM pg_database
ORDER BY pg_database_size(datname) DESC;

-- Table bloat
SELECT schemaname, tablename, 
       pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS total_size,
       n_dead_tup
FROM pg_stat_user_tables
ORDER BY n_dead_tup DESC
LIMIT 20;
</code></pre><h3 id="54-system-diagnostic-commands">5.4. System diagnostic commands</h3><pre><code class="language-bash"># CPU usage
top -bn1 | head -20
htop

# Memory
free -h
ps aux --sort=-%mem | head -20

# Disk I/O
iostat -x 1 10
iotop

# Disk space
df -h
du -sh /var/lib/postgresql/18/data/*

# Network connections
netstat -tuln | grep 5432
ss -tuln | grep 5432

# Network traffic
iftop -i eth0
nethogs

# Check for OOM kills
dmesg | grep -i "out of memory"
journalctl -k | grep -i "killed process"
</code></pre><h2 id="6-troubleshooting-runbook">6. Troubleshooting Runbook</h2><h3 id="61-primary-node-down">6.1. Primary node down</h3><pre><code class="language-bash"># 1. Verify primary is down
patronictl list postgres

# 2. Check if automatic failover occurred
# Timeline should increment, new leader elected

# 3. If no failover, check why:
# - DCS healthy?
etcdctl endpoint health --cluster

# - Replicas eligible?
patronictl show-config postgres | grep nofailover

# - Replication lag acceptable?
patronictl show-config postgres | grep maximum_lag_on_failover

# 4. Check old primary logs
sudo journalctl -u patroni -n 200 | grep -i "error\|fatal"

# 5. Attempt manual intervention if needed
patronictl failover postgres --candidate node2
</code></pre><h3 id="62-replica-not-replicating">6.2. Replica not replicating</h3><pre><code class="language-bash"># 1. Check replica status
patronictl list postgres

# 2. On replica, check replication status
sudo -u postgres psql -c "SELECT * FROM pg_stat_wal_receiver;"

# 3. Check if timeline matches
sudo -u postgres psql -c "SELECT timeline_id FROM pg_control_checkpoint();"

# 4. Check primary for replication slot
sudo -u postgres psql -h primary -c "SELECT * FROM pg_replication_slots;"

# 5. Check network connectivity
ping primary
telnet primary 5432

# 6. Restart replication
sudo systemctl restart patroni

# 7. If still failing, reinitialize
patronictl reinit postgres replica-node
</code></pre><h3 id="63-etcd-cluster-unhealthy">6.3. etcd cluster unhealthy</h3><pre><code class="language-bash"># 1. Check cluster health
etcdctl endpoint health --cluster

# 2. Check cluster status
etcdctl endpoint status --cluster --write-out=table

# 3. Check logs
sudo journalctl -u etcd -n 100

# 4. If quorum lost (&lt; 2 of 3 healthy):
# - Fix or restart unhealthy members
sudo systemctl restart etcd

# 5. If member corrupt:
# - Remove and re-add member
etcdctl member remove &lt;member-id&gt;
etcdctl member add node3 --peer-urls=http://10.0.1.13:2380
# Then restart etcd on node3

# 6. Last resort: Rebuild etcd cluster
# (Requires stopping all services)
</code></pre><h2 id="7-best-practices">7. Best Practices</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>Enable appropriate logging</strong>&nbsp;- Balance detail vs volume</li><li><strong>Centralize logs</strong>&nbsp;- Use ELK/Grafana Loki</li><li><strong>Set up alerts</strong>&nbsp;- Proactive notification</li><li><strong>Regular log review</strong>&nbsp;- Weekly analysis</li><li><strong>Document issues</strong>&nbsp;- Build knowledge base</li><li><strong>Test scenarios</strong>&nbsp;- Practice troubleshooting</li><li><strong>Keep runbooks updated</strong>&nbsp;- Living documents</li><li><strong>Monitor disk space</strong>&nbsp;- Logs can fill disk</li></ol><h3 id="%E2%9D%8C-dont">❌ DON'T</h3><ol><li><strong>Don't enable DEBUG in production</strong>&nbsp;- Too verbose</li><li><strong>Don't ignore warnings</strong>&nbsp;- They become errors</li><li><strong>Don't delete logs immediately</strong>&nbsp;- Keep for analysis</li><li><strong>Don't skip log rotation</strong>&nbsp;- Prevent disk full</li><li><strong>Don't troubleshoot blind</strong>&nbsp;- Check logs first</li><li><strong>Don't make changes without logs</strong>&nbsp;- Document actions</li></ol><h2 id="8-lab-exercises">8. Lab Exercises</h2><h3 id="lab-1-log-analysis">Lab 1: Log analysis</h3><p><strong>Tasks</strong>: 1. Configure PostgreSQL slow query logging 2. Generate workload with slow queries 3. Analyze logs with pgBadger 4. Identify top issues 5. Document findings</p><h3 id="lab-2-simulate-and-debug-failover">Lab 2: Simulate and debug failover</h3><p><strong>Tasks</strong>: 1. Stop primary node 2. Monitor Patroni logs during failover 3. Trace timeline of events 4. Calculate downtime from logs 5. Create timeline diagram</p><h3 id="lab-3-debug-replication-lag">Lab 3: Debug replication lag</h3><p><strong>Tasks</strong>: 1. Simulate high write load on primary 2. Observe lag increase on replica 3. Use diagnostic queries to identify cause 4. Fix the issue 5. Verify lag reduced</p><h3 id="lab-4-troubleshoot-connection-issues">Lab 4: Troubleshoot connection issues</h3><p><strong>Tasks</strong>: 1. Misconfigure pg_hba.conf 2. Attempt connections (will fail) 3. Use logs to identify issue 4. Fix configuration 5. Verify connections work</p><h2 id="9-t%E1%BB%95ng-k%E1%BA%BFt">9. Tổng kết</h2><h3 id="key-logging-locations">Key Logging Locations</h3><pre><code class="language-text">PostgreSQL: /var/lib/postgresql/18/data/log/
Patroni: journalctl -u patroni
etcd: journalctl -u etcd
System: /var/log/syslog, dmesg
</code></pre><h3 id="essential-diagnostic-commands">Essential Diagnostic Commands</h3><pre><code class="language-bash"># Cluster status
patronictl list postgres

# PostgreSQL connection
psql -h localhost -U postgres

# Replication status
SELECT * FROM pg_stat_replication;

# etcd health
etcdctl endpoint health --cluster

# Logs
sudo journalctl -u patroni -f
sudo journalctl -u etcd -f
</code></pre><h3 id="troubleshooting-workflow">Troubleshooting Workflow</h3><ol><li><strong>Identify</strong>&nbsp;- What's the symptom?</li><li><strong>Isolate</strong>&nbsp;- Which component is failing?</li><li><strong>Investigate</strong>&nbsp;- Check logs, metrics</li><li><strong>Diagnose</strong>&nbsp;- What's the root cause?</li><li><strong>Fix</strong>&nbsp;- Apply solution</li><li><strong>Verify</strong>&nbsp;- Confirm resolution</li><li><strong>Document</strong>&nbsp;- Record for future</li></ol><h3 id="next-steps">Next Steps</h3><p>Bài 20 sẽ cover&nbsp;<strong>Security Best Practices</strong>:</p><ul><li>SSL/TLS encryption</li><li>Authentication methods</li><li>Network security</li><li>Encryption at rest</li><li>Audit logging</li><li>Security hardening</li></ul>
