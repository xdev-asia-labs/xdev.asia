---
id: 019c9617-fb7a-7138-be78-f6d8b1653656
title: 'Bài 9: Bootstrap PostgreSQL Cluster'
slug: bai-9-bootstrap-postgresql-cluster
description: ' Khởi động Patroni lần đầu, theo dõi quá trình bootstrap tự động, kiểm tra status với patronictl và troubleshooting các vấn đề thường gặp.'
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 2: Cài đặt & Cấu hình"
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL High Availability với Patroni & etcd
  slug: postgresql-high-availability-voi-patroni-etcd
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3343" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3343)"/>

  <!-- Decorations -->
  <g>
    <circle cx="623" cy="99" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="646" cy="122" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="669" cy="145" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="692" cy="168" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="191" r="32" fill="#c084fc" opacity="0.1"/>
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
    <polygon points="1017.1051177665153,157 1017.1051177665153,201 979,223 940.8948822334847,201 940.8948822334847,157 979,135" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — Bài 9</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 9: Bootstrap PostgreSQL Cluster</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL High Availability với Patroni &amp; etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 2: Cài đặt &amp; Cấu hình</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="m%E1%BB%A5c-ti%C3%AAu">Mục tiêu</h2><p>Sau bài học này, bạn sẽ:</p><ul><li>Hiểu quá trình bootstrap Patroni cluster</li><li>Khởi động Patroni lần đầu trên 3 nodes</li><li>Kiểm tra cluster status với patronictl</li><li>Verify replication đang hoạt động</li><li>Troubleshoot các issues thường gặp</li><li>Test basic failover</li></ul><h2 id="1-pre-bootstrap-checklist">1. Pre-Bootstrap Checklist</h2><h3 id="11-verify-prerequisites">1.1. Verify prerequisites</h3><p>Trước khi start Patroni, verify tất cả components đã sẵn sàng:</p><pre><code class="language-bash"># ✅ etcd cluster healthy
etcdctl endpoint health --cluster
# All endpoints should be healthy

# ✅ PostgreSQL installed nhưng NOT running
systemctl status postgresql
# Should be: inactive (dead)

# ✅ Patroni installed
patroni --version
# Should show: patroni 3.2.0+

# ✅ Config file exists và valid
sudo -u postgres cat /etc/patroni/patroni.yml
python3 -c "import yaml; yaml.safe_load(open('/etc/patroni/patroni.yml'))"

# ✅ Data directory exists với permissions đúng
ls -ld /var/lib/postgresql/18/data
# Owner: postgres:postgres, Permissions: drwx------

# ✅ Firewall rules
sudo ufw status | grep -E "(5432|8008)"
# Ports 5432, 8008 should be allowed
</code></pre><h3 id="12-network-connectivity-test">1.2. Network connectivity test</h3><p>Verify connectivity giữa các nodes:</p><pre><code class="language-bash"># Test PostgreSQL port
nc -zv 10.0.1.11 5432
nc -zv 10.0.1.12 5432
nc -zv 10.0.1.13 5432

# Test Patroni REST API port
nc -zv 10.0.1.11 8008
nc -zv 10.0.1.12 8008
nc -zv 10.0.1.13 8008

# Test etcd port
nc -zv 10.0.1.11 2379
nc -zv 10.0.1.12 2379
nc -zv 10.0.1.13 2379
</code></pre><h3 id="13-clean-data-directories">1.3. Clean data directories</h3><p>Nếu data directory không empty, xóa để fresh start:</p><pre><code class="language-bash"># CẢNH BÁO: Chỉ làm khi bootstrap lần đầu
sudo systemctl stop patroni
sudo rm -rf /var/lib/postgresql/18/data/*
sudo chown postgres:postgres /var/lib/postgresql/18/data
</code></pre><h2 id="2-understanding-bootstrap-process">2. Understanding Bootstrap Process</h2><h3 id="21-bootstrap-flow">2.1. Bootstrap flow</h3><pre><code class="language-text">Step 1: Start Patroni trên Node 1
   ↓
Node 1 checks DCS: No cluster exists
   ↓
Node 1 acquires initialize key
   ↓
Node 1 runs pg_initdb
   ↓
Node 1 starts PostgreSQL as PRIMARY
   ↓
Node 1 creates replication user
   ↓
Node 1 stores cluster config in DCS
   ↓
Node 1 acquires leader lock

Step 2: Start Patroni trên Node 2
   ↓
Node 2 checks DCS: Cluster exists
   ↓
Node 2 sees Node 1 is leader
   ↓
Node 2 runs pg_basebackup from Node 1
   ↓
Node 2 starts PostgreSQL as REPLICA
   ↓
Node 2 connects to Node 1 for replication

Step 3: Start Patroni trên Node 3
   ↓
Node 3 checks DCS: Cluster exists
   ↓
Node 3 sees Node 1 is leader
   ↓
Node 3 runs pg_basebackup from Node 1
   ↓
Node 3 starts PostgreSQL as REPLICA
   ↓
Node 3 connects to Node 1 for replication

Final State:
┌─────────┐         ┌─────────┐         ┌─────────┐
│ Node 1  │────────→│ Node 2  │         │ Node 3  │
│ PRIMARY │         │ REPLICA │←────────│ REPLICA │
└─────────┘         └─────────┘         └─────────┘
   Leader              Streaming           Streaming
</code></pre><h3 id="22-race-condition-prevention">2.2. Race condition prevention</h3><p>Patroni sử dụng DCS để prevent multiple nodes từ initializing cluster:</p><pre><code class="language-yaml"># In etcd
/service/postgres/initialize: "node1"  # First node acquires this
/service/postgres/leader: {...}        # Leader lock
</code></pre><p><strong>Nếu 2 nodes start simultaneously</strong>:</p><ul><li>Node nhanh hơn acquires&nbsp;<code>/initialize</code>&nbsp;key</li><li>Node kia thấy key đã tồn tại → waits và clones from leader</li></ul><h2 id="3-bootstrap-clusterstep-by-step">3. Bootstrap Cluster - Step by Step</h2><h3 id="31-start-patroni-tr%C3%AAn-node-1">3.1. Start Patroni trên Node 1</h3><p><strong>Terminal trên Node 1</strong>:</p><pre><code class="language-bash"># Start Patroni service
sudo systemctl start patroni

# Watch logs
sudo journalctl -u patroni -f
</code></pre><p><strong>Expected logs</strong>:</p><pre><code class="language-text">INFO: No initialize key found in DCS
INFO: Trying to bootstrap a new cluster
INFO: Acquiring initialize key
INFO: Initializing a new cluster
INFO: Running initdb: /usr/lib/postgresql/18/bin/initdb ...
INFO: postmaster pid: 12345
INFO: PostgreSQL started
INFO: Running post_bootstrap script
INFO: Creating replication user
INFO: Lock owner: node1; I am node1
INFO: Leader election acquired
INFO: I am the leader with the lock
</code></pre><p><strong>Verify Node 1</strong>:</p><pre><code class="language-bash"># Check Patroni status
sudo systemctl status patroni
# Should be: active (running)

# Check PostgreSQL is running
ps aux | grep postgres
# Should see multiple postgres processes

# Check if it's PRIMARY
sudo -u postgres psql -c "SELECT pg_is_in_recovery();"
# pg_is_in_recovery
# ------------------
#  f                  ← false = PRIMARY
</code></pre><h3 id="32-verify-trong-etcd">3.2. Verify trong etcd</h3><pre><code class="language-bash"># Check leader key
etcdctl get /service/postgres/leader --print-value-only | jq

# Output:
# {
#   "role": "master",
#   "state": "running",
#   "conn_url": "postgres://10.0.1.11:5432/postgres",
#   "api_url": "http://10.0.1.11:8008/patroni",
#   "xlog_location": 50331648,
#   "timeline": 1
# }

# Check members
etcdctl get /service/postgres/members/ --prefix
# Should show node1
</code></pre><h3 id="33-start-patroni-tr%C3%AAn-node-2">3.3. Start Patroni trên Node 2</h3><p><strong>Terminal trên Node 2</strong>:</p><pre><code class="language-bash"># Start Patroni
sudo systemctl start patroni

# Watch logs
sudo journalctl -u patroni -f
</code></pre><p><strong>Expected logs</strong>:</p><pre><code class="language-text">INFO: Cluster already initialized
INFO: Found leader: node1
INFO: Trying to clone from leader
INFO: Running: pg_basebackup -D /var/lib/postgresql/18/data ...
INFO: Basebackup completed
INFO: Starting PostgreSQL
INFO: postmaster pid: 12346
INFO: Configuring standby mode
INFO: Following new leader: node1
INFO: Replication established
</code></pre><p><strong>Verify Node 2</strong>:</p><pre><code class="language-bash"># Check if it's REPLICA
sudo -u postgres psql -c "SELECT pg_is_in_recovery();"
# pg_is_in_recovery
# ------------------
#  t                  ← true = REPLICA

# Check replication status
sudo -u postgres psql -c "SELECT * FROM pg_stat_wal_receiver;" -x
</code></pre><h3 id="34-start-patroni-tr%C3%AAn-node-3">3.4. Start Patroni trên Node 3</h3><p><strong>Terminal trên Node 3</strong>:</p><pre><code class="language-bash"># Start Patroni
sudo systemctl start patroni

# Watch logs
sudo journalctl -u patroni -f
</code></pre><p><strong>Expected logs</strong>: Tương tự Node 2.</p><p><strong>Verify Node 3</strong>:</p><pre><code class="language-bash"># Check replica status
sudo -u postgres psql -c "SELECT pg_is_in_recovery();"
# Should return: t (true)
</code></pre><h2 id="4-verify-cluster-status">4. Verify Cluster Status</h2><h3 id="41-using-patronictl">4.1. Using patronictl</h3><pre><code class="language-bash"># List cluster members
patronictl -c /etc/patroni/patroni.yml list

# Output:
# + Cluster: postgres (7001234567890123456) ----+----+-----------+
# | Member | Host          | Role    | State   | TL | Lag in MB |
# +--------+---------------+---------+---------+----+-----------+
# | node1  | 10.0.1.11:5432| Leader  | running |  1 |           |
# | node2  | 10.0.1.12:5432| Replica | running |  1 |         0 |
# | node3  | 10.0.1.13:5432| Replica | running |  1 |         0 |
# +--------+---------------+---------+---------+----+-----------+
</code></pre><p><strong>Column meanings</strong>:</p><ul><li><strong>Member</strong>: Node name</li><li><strong>Host</strong>: Connection address</li><li><strong>Role</strong>: Leader (primary) or Replica</li><li><strong>State</strong>: running, streaming, in archive recovery</li><li><strong>TL</strong>: Timeline (should be same for all)</li><li><strong>Lag in MB</strong>: Replication lag</li></ul><h3 id="42-check-topology">4.2. Check topology</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml topology postgres

# Output shows replication tree
</code></pre><h3 id="43-using-rest-api">4.3. Using REST API</h3><pre><code class="language-bash"># Check node1 (primary)
curl -s http://10.0.1.11:8008/ | jq

# Output:
# {
#   "state": "running",
#   "postmaster_start_time": "2024-11-24 10:30:15.123+00",
#   "role": "master",
#   "server_version": 180000,
#   "cluster_unlocked": false,
#   "xlog": {
#     "location": 50331648
#   },
#   "timeline": 1,
#   "database_system_identifier": "7001234567890123456"
# }

# Check node2 (replica)
curl -s http://10.0.1.12:8008/ | jq

# Check node3 (replica)
curl -s http://10.0.1.13:8008/ | jq
</code></pre><h3 id="44-check-replication-from-postgresql">4.4. Check replication from PostgreSQL</h3><p><strong>On primary (node1)</strong>:</p><pre><code class="language-bash">sudo -u postgres psql -c "SELECT * FROM pg_stat_replication;" -x
</code></pre><p>Output:</p><pre><code class="language-text">-[ RECORD 1 ]----+------------------------------
pid              | 12350
usesysid         | 16384
usename          | replicator
application_name | node2
client_addr      | 10.0.1.12
client_hostname  | 
client_port      | 45678
backend_start    | 2024-11-24 10:31:00.123+00
backend_xmin     | 
state            | streaming
sent_lsn         | 0/3000000
write_lsn        | 0/3000000
flush_lsn        | 0/3000000
replay_lsn       | 0/3000000
write_lag        | 
flush_lag        | 
replay_lag       | 
sync_state       | async
sync_priority    | 0
reply_time       | 2024-11-24 10:35:00.456+00

-[ RECORD 2 ]----+------------------------------
pid              | 12351
usesysid         | 16384
usename          | replicator
application_name | node3
...
</code></pre><p><strong>On replicas (node2, node3)</strong>:</p><pre><code class="language-bash">sudo -u postgres psql -c "SELECT status, received_lsn, latest_end_lsn FROM pg_stat_wal_receiver;" -x
</code></pre><h3 id="45-verify-replication-lag">4.5. Verify replication lag</h3><pre><code class="language-bash"># On primary
sudo -u postgres psql -c "
SELECT 
  application_name,
  client_addr,
  state,
  pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) AS lag_bytes,
  replay_lag
FROM pg_stat_replication;
"

# Output:
# application_name | client_addr | state     | lag_bytes | replay_lag
# -----------------+-------------+-----------+-----------+------------
# node2            | 10.0.1.12   | streaming |         0 | 
# node3            | 10.0.1.13   | streaming |         0 | 
</code></pre><h2 id="5-test-basic-operations">5. Test Basic Operations</h2><h3 id="51-create-test-database-and-table">5.1. Create test database and table</h3><p><strong>On primary (connect to any node, patronictl will route to primary)</strong>:</p><pre><code class="language-bash"># Create database
sudo -u postgres psql -h 10.0.1.11 -c "CREATE DATABASE testdb;"

# Create table with data
sudo -u postgres psql -h 10.0.1.11 -d testdb &lt;&lt; EOF
CREATE TABLE test_table (
  id SERIAL PRIMARY KEY,
  data TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO test_table (data) 
SELECT 'Test data ' || i 
FROM generate_series(1, 1000) AS i;
EOF
</code></pre><h3 id="52-verify-replication">5.2. Verify replication</h3><p><strong>On replica (node2 or node3)</strong>:</p><pre><code class="language-bash"># Check data replicated
sudo -u postgres psql -h 10.0.1.12 -d testdb -c "SELECT COUNT(*) FROM test_table;"
# Should return: 1000

# Try to write (should fail on replica)
sudo -u postgres psql -h 10.0.1.12 -d testdb -c "INSERT INTO test_table (data) VALUES ('test');"
# ERROR:  cannot execute INSERT in a read-only transaction
</code></pre><h3 id="53-test-continuous-replication">5.3. Test continuous replication</h3><p><strong>Terminal 1 (primary - node1)</strong>:</p><pre><code class="language-bash"># Insert data continuously
while true; do
  sudo -u postgres psql -h 10.0.1.11 -d testdb -c \
    "INSERT INTO test_table (data) VALUES ('Data at ' || NOW());"
  sleep 1
done
</code></pre><p><strong>Terminal 2 (replica - node2)</strong>:</p><pre><code class="language-bash"># Watch count increase
watch -n 1 "sudo -u postgres psql -h 10.0.1.12 -d testdb -t -c 'SELECT COUNT(*) FROM test_table;'"
</code></pre><p>Data should increase every second → Replication working!</p><h2 id="6-common-bootstrap-issues">6. Common Bootstrap Issues</h2><h3 id="61-issue-patroni-wont-start">6.1. Issue: Patroni won't start</h3><p><strong>Symptoms</strong>:</p><pre><code class="language-bash">sudo systemctl status patroni
# Failed to start
</code></pre><p><strong>Check logs</strong>:</p><pre><code class="language-bash">sudo journalctl -u patroni -n 50 --no-pager
</code></pre><p><strong>Common causes &amp; solutions</strong>:</p><h4 id="a-config-file-syntax-error">A. Config file syntax error</h4><pre><code class="language-text">ERROR: Error parsing config file
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Validate YAML
python3 -c "import yaml; yaml.safe_load(open('/etc/patroni/patroni.yml'))"

# Common issues:
# - Mixed tabs and spaces (use spaces only)
# - Incorrect indentation
# - Missing quotes around special characters
</code></pre><h4 id="b-cannot-connect-to-etcd">B. Cannot connect to etcd</h4><pre><code class="language-text">ERROR: Failed to connect to etcd
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Check etcd is running
etcdctl endpoint health

# Check etcd endpoints in patroni.yml
grep "hosts:" /etc/patroni/patroni.yml

# Test connectivity
curl http://10.0.1.11:2379/version
</code></pre><h4 id="c-permission-denied-on-data-directory">C. Permission denied on data directory</h4><pre><code class="language-text">ERROR: data directory has wrong ownership
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash">sudo chown -R postgres:postgres /var/lib/postgresql/18/data
sudo chmod 700 /var/lib/postgresql/18/data
</code></pre><h4 id="d-port-already-in-use">D. Port already in use</h4><pre><code class="language-text">ERROR: could not bind IPv4 address "0.0.0.0": Address already in use
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Check what's using port 5432
sudo lsof -i :5432

# Stop PostgreSQL if running
sudo systemctl stop postgresql

# Kill process if needed
sudo pkill -9 postgres
</code></pre><h3 id="62-issue-cluster-wont-initialize">6.2. Issue: Cluster won't initialize</h3><p><strong>Symptoms</strong>: Patroni starts nhưng không initialize cluster.</p><p><strong>Check logs</strong>:</p><pre><code class="language-bash">sudo journalctl -u patroni -f
</code></pre><p><strong>Common causes</strong>:</p><h4 id="a-data-directory-not-empty">A. Data directory not empty</h4><pre><code class="language-text">INFO: Data directory is not empty
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Backup old data if needed
sudo mv /var/lib/postgresql/18/data /var/lib/postgresql/18/data.bak

# Create fresh directory
sudo mkdir -p /var/lib/postgresql/18/data
sudo chown postgres:postgres /var/lib/postgresql/18/data
sudo chmod 700 /var/lib/postgresql/18/data

# Restart Patroni
sudo systemctl restart patroni
</code></pre><h4 id="b-initialize-key-stuck-in-etcd">B. Initialize key stuck in etcd</h4><pre><code class="language-text">INFO: Another node is initializing
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Check initialize key
etcdctl get /service/postgres/initialize

# If stuck, delete it
etcdctl del /service/postgres/initialize

# Restart Patroni
sudo systemctl restart patroni
</code></pre><h3 id="63-issue-replica-cannot-clone-from-primary">6.3. Issue: Replica cannot clone from primary</h3><p><strong>Symptoms</strong>: Node 2 hoặc 3 không thể basebackup.</p><p><strong>Check logs</strong>:</p><pre><code class="language-bash">sudo journalctl -u patroni -n 100 | grep -i basebackup
</code></pre><p><strong>Common causes</strong>:</p><h4 id="a-network-connectivity">A. Network connectivity</h4><pre><code class="language-text">ERROR: could not connect to server
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Test connectivity
telnet 10.0.1.11 5432

# Check firewall
sudo ufw status
sudo ufw allow from 10.0.1.0/24 to any port 5432
</code></pre><h4 id="b-authentication-failed">B. Authentication failed</h4><pre><code class="language-text">ERROR: FATAL: password authentication failed for user "replicator"
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Verify replication user exists on primary
sudo -u postgres psql -h 10.0.1.11 -c "\du replicator"

# Check pg_hba.conf allows replication
sudo -u postgres psql -h 10.0.1.11 -c "SHOW hba_file;"
# Then check the file

# Verify password matches in patroni.yml
grep -A2 "replication:" /etc/patroni/patroni.yml
</code></pre><h4 id="c-insufficient-space">C. Insufficient space</h4><pre><code class="language-text">ERROR: No space left on device
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Check disk space
df -h /var/lib/postgresql

# Clean up if needed
sudo du -sh /var/lib/postgresql/* | sort -h
</code></pre><h3 id="64-issue-nodes-have-different-timelines">6.4. Issue: Nodes have different timelines</h3><p><strong>Symptoms</strong>:</p><pre><code class="language-bash">patronictl list
# node1: TL=1
# node2: TL=2  ← Different!
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Reinitialize diverged node
patronictl reinit postgres node2

# Or manually
sudo systemctl stop patroni
sudo rm -rf /var/lib/postgresql/18/data/*
sudo systemctl start patroni
</code></pre><h2 id="7-enable-auto-start-on-boot">7. Enable Auto-start on Boot</h2><pre><code class="language-bash"># Enable Patroni service
sudo systemctl enable patroni

# Verify
systemctl is-enabled patroni
# Output: enabled

# Test reboot (optional)
sudo reboot

# After reboot, check cluster
patronictl list
</code></pre><h2 id="8-basic-cluster-management">8. Basic Cluster Management</h2><h3 id="81-restart-a-node">8.1. Restart a node</h3><pre><code class="language-bash"># Graceful restart
patronictl restart postgres node2

# Force restart
patronictl restart postgres node2 --force
</code></pre><h3 id="82-reload-configuration">8.2. Reload configuration</h3><pre><code class="language-bash"># Reload Patroni config (non-PostgreSQL settings)
sudo systemctl reload patroni

# Reload PostgreSQL config
patronictl reload postgres node1
</code></pre><h3 id="83-pauseresume-auto-failover">8.3. Pause/Resume auto-failover</h3><pre><code class="language-bash"># Pause (disable auto-failover)
patronictl pause postgres

# Resume (enable auto-failover)
patronictl resume postgres
</code></pre><h3 id="84-show-configuration">8.4. Show configuration</h3><pre><code class="language-bash"># Show current DCS configuration
patronictl show-config postgres
</code></pre><h2 id="9-test-automatic-failover-optional">9. Test Automatic Failover (Optional)</h2><p><strong>CẢNH BÁO</strong>: Chỉ test trong môi trường non-production!</p><h3 id="91-simulate-primary-failure">9.1. Simulate primary failure</h3><pre><code class="language-bash"># On node1 (current primary)
sudo systemctl stop patroni

# Or kill PostgreSQL
sudo pkill -9 postgres
</code></pre><h3 id="92-watch-cluster-failover">9.2. Watch cluster failover</h3><pre><code class="language-bash"># On node2 hoặc node3
watch -n 1 "patronictl list"

# Timeline:
# T+0s: node1 is Leader
# T+10s: node1 not responding
# T+30s: Leader lock expires
# T+35s: node2 or node3 becomes Leader
# T+40s: Cluster operational with new Leader
</code></pre><h3 id="93-verify-new-primary">9.3. Verify new primary</h3><pre><code class="language-bash">patronictl list

# New output:
# + Cluster: postgres ----+----+-----------+
# | Member | Host    | Role    | State   | TL | Lag in MB |
# +--------+---------+---------+---------+----+-----------+
# | node1  | 10.0.1.11| Replica | stopped |  1 |           |
# | node2  | 10.0.1.12| Leader  | running |  2 |           |  ← New primary
# | node3  | 10.0.1.13| Replica | running |  2 |         0 |
# +--------+---------+---------+---------+----+-----------+
</code></pre><p><strong>Note</strong>: Timeline increased from 1 → 2 (indicates failover occurred).</p><h3 id="94-rejoin-old-primary">9.4. Rejoin old primary</h3><pre><code class="language-bash"># Start node1 again
sudo systemctl start patroni

# Patroni auto-rewinds và rejoins as replica
patronictl list

# Output:
# | node1  | 10.0.1.11| Replica | running |  2 |         0 |  ← Rejoined
# | node2  | 10.0.1.12| Leader  | running |  2 |           |
# | node3  | 10.0.1.13| Replica | running |  2 |         0 |
</code></pre><h2 id="10-lab-exercise">10. Lab Exercise</h2><h3 id="lab-1-bootstrap-v%C3%A0-verify">Lab 1: Bootstrap và verify</h3><p><strong>Tasks</strong>: 1. ✅ Start Patroni trên 3 nodes theo thứ tự 2. ✅ Verify cluster với&nbsp;<code>patronictl list</code>&nbsp;3. ✅ Check replication status 4. ✅ Create test database và verify data replicates</p><h3 id="lab-2-test-replication-lag">Lab 2: Test replication lag</h3><p><strong>Tasks</strong>: 1. Insert 10,000 rows vào primary 2. Measure replication lag trên replicas 3. Monitor pg_stat_replication</p><h3 id="lab-3-simulate-node-failure">Lab 3: Simulate node failure</h3><p><strong>Tasks</strong>: 1. Stop primary node 2. Watch automatic failover 3. Verify new primary elected 4. Rejoin old primary 5. Verify all nodes healthy</p><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11. Tổng kết</h2><h3 id="key-takeaways">Key Takeaways</h3><p>✅&nbsp;<strong>Bootstrap</strong>: First node initializes, others clone</p><p>✅&nbsp;<strong>Leader election</strong>: Automatic, DCS-based</p><p>✅&nbsp;<strong>Replication</strong>: Automatic setup via pg_basebackup</p><p>✅&nbsp;<strong>patronictl</strong>: Primary management tool</p><p>✅&nbsp;<strong>Monitoring</strong>: Check via patronictl, REST API, pg_stat_replication</p><p>✅&nbsp;<strong>Failover</strong>: Automatic khi primary fails</p><h3 id="checklist-sau-bootstrap">Checklist sau Bootstrap</h3><ul><li>&nbsp;All 3 nodes showing in&nbsp;<code>patronictl list</code></li><li>&nbsp;1 Leader, 2 Replicas</li><li>&nbsp;All nodes same Timeline</li><li>&nbsp;Replication lag = 0 MB</li><li>&nbsp;Test data replicates to all nodes</li><li>&nbsp;REST API responding on all nodes</li><li>&nbsp;Patroni enabled for auto-start</li><li>&nbsp;etcd cluster healthy</li></ul><h3 id="architecture-hi%E1%BB%87n-t%E1%BA%A1i">Architecture hiện tại</h3><pre><code class="language-text">✅ 3 VMs prepared (Bài 4)
✅ PostgreSQL 18 installed (Bài 5)
✅ etcd cluster running (Bài 6)
✅ Patroni installed (Bài 7)
✅ Patroni configured (Bài 8)
✅ Cluster bootstrapped (Bài 9)

Next: Advanced replication management
</code></pre><h3 id="chu%E1%BA%A9n-b%E1%BB%8B-cho-b%C3%A0i-10">Chuẩn bị cho Bài 10</h3><p>Bài 10 sẽ đi sâu vào Replication Management:</p><ul><li>Synchronous vs Asynchronous replication</li><li>Configure sync mode</li><li>Monitor replication lag</li><li>Handle replication issues</li></ul>
