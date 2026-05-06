---
id: 019c9617-fb7a-7138-be78-f6d8b1653656
title: 'レッスン 9: PostgreSQL クラスターのブートストラップ'
slug: bai-9-bootstrap-postgresql-cluster
description: Patroni を初めて起動し、自動ブートストラップ プロセスを監視し、patronictl でステータスを確認し、一般的な問題のトラブルシューティングを行います。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 2: インストールと構成'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: PostgreSQL クラスターのブートストラップ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Patroni と PostgreSQL の高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: インストールと構成</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標_</h2><p>このレッスンの後、次のことを学びます:</p><ul><li>Patroni クラスターのブートストラップ プロセスを理解する_</li><li>3 ノードで初めて Patroni を起動_</li><li>クラスターのステータスを確認するpatronictl</li><li>レプリケーションがアクティブであることを確認__HTMLTAG_77___<li>一般的な問題のトラブルシューティング__HTMLTAG_79___<li>基本的なフェールオーバーをテスト</li></ul><h2 id="1-pre-bootstrap-checklist">1。ブートストラップ前チェックリスト</h2><h3 id="11-verify-prerequisites">1.1。前提条件の確認</h3><p>Patroni を開始する前に、すべてのコンポーネントの準備ができていることを確認してください:</p><pre><code class="language-bash"># ✅ etcd cluster healthy
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
</code></pre><h3 id="12-network-connectivity-test">1.2。ネットワーク接続テスト</h3><p>ノード間の接続を確認します:</p><pre><code class="language-bash"># Test PostgreSQL port
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
</code></pre><h3 id="13-clean-data-directories">1.3。データ ディレクトリをクリーンアップ</h3><p>データ ディレクトリが空でない場合は、削除して最初からやり直します:</p><pre><code class="language-bash"># CẢNH BÁO: Chỉ làm khi bootstrap lần đầu
sudo systemctl stop patroni
sudo rm -rf /var/lib/postgresql/18/data/*
sudo chown postgres:postgres /var/lib/postgresql/18/data
</code></pre><h2 id="2-understanding-bootstrap-process">2。ブートストラップ プロセスを理解する_</h2><h3 id="21-bootstrap-flow">2.1。ブートストラップ フロー</h3><pre><code class="language-text">Step 1: Start Patroni trên Node 1
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
</code></pre><h3 id="22-race-condition-prevention">2.2。競合状態の防止</h3><p>Patroni は DCS を使用して、複数のノードがクラスターを初期化するのを防ぎます:</p><pre><code class="language-yaml"># In etcd
/service/postgres/initialize: "node1"  # First node acquires this
/service/postgres/leader: {...}        # Leader lock
</code></pre><p><strong>2 つのノードが同時に開始する場合</strong>:</p><ul><li>高速ノード<code>/initialize</code>&nbsp;key</li><li>を取得します。他のノードはキーがすでに存在することを確認します。→待機して、リーダー</li></ul><h2 id="3-bootstrap-clusterstep-by-step">3からクローンを作成します。ブートストラップ クラスター - ステップバイステップ</h2><h3 id="31-start-patroni-tr%C3%AAn-node-1">3.1。ノード 1 で Patroni を開始</h3><p><strong>ノード 1 のターミナル</strong>:</p><pre><code class="language-bash"># Start Patroni service
sudo systemctl start patroni

# Watch logs
sudo journalctl -u patroni -f
</code></pre><p><strong>予想通りログ</strong>:</p><pre><code class="language-text">INFO: No initialize key found in DCS
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
</code></pre><p><strong>ノード 1 を確認</strong>:___HTMLTAG_132__CODEBLOCK_7___<h3 id="32-verify-trong-etcd">3.2。 etcd_</h3><pre><code class="language-bash"># Check leader key
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
</code></pre><h3 id="33-start-patroni-tr%C3%AAn-node-2">3.3 で確認します。ノード 2 で Patroni を開始</h3><p><strong>ノード 2 でターミナル</strong>:</p><pre><code class="language-bash"># Start Patroni
sudo systemctl start patroni

# Watch logs
sudo journalctl -u patroni -f
</code></pre><p><strong>予想通りログ</strong>:</p><pre><code class="language-text">INFO: Cluster already initialized
INFO: Found leader: node1
INFO: Trying to clone from leader
INFO: Running: pg_basebackup -D /var/lib/postgresql/18/data ...
INFO: Basebackup completed
INFO: Starting PostgreSQL
INFO: postmaster pid: 12346
INFO: Configuring standby mode
INFO: Following new leader: node1
INFO: Replication established
</code></pre><p><strong>ノード 2 を確認</strong>:</p><pre><code class="language-bash"># Check if it's REPLICA
sudo -u postgres psql -c "SELECT pg_is_in_recovery();"
# pg_is_in_recovery
# ------------------
#  t                  ← true = REPLICA

# Check replication status
sudo -u postgres psql -c "SELECT * FROM pg_stat_wal_receiver;" -x
</code></pre><h3 id="34-start-patroni-tr%C3%AAn-node-3">3.4。ノード 3 で Patroni を開始</h3><p><strong>ノード 3 のターミナル</strong>:</p><pre><code class="language-bash"># Start Patroni
sudo systemctl start patroni

# Watch logs
sudo journalctl -u patroni -f
</code></pre><p><strong>予想されるログ</strong>: ノードに類似2._</p><p><strong>ノード 3</strong>:</p><pre><code class="language-bash"># Check replica status
sudo -u postgres psql -c "SELECT pg_is_in_recovery();"
# Should return: t (true)
</code></pre><h2 id="4-verify-cluster-status">4 を確認します。クラスターのステータス</h2><h3 id="41-using-patronictl">4.1 を確認します。 patronictl の使用_</h3><pre><code class="language-bash"># List cluster members
patronictl -c /etc/patroni/patroni.yml list

# Output:
# + Cluster: postgres (7001234567890123456) ----+----+-----------+
# | Member | Host          | Role    | State   | TL | Lag in MB |
# +--------+---------------+---------+---------+----+-----------+
# | node1  | 10.0.1.11:5432| Leader  | running |  1 |           |
# | node2  | 10.0.1.12:5432| Replica | running |  1 |         0 |
# | node3  | 10.0.1.13:5432| Replica | running |  1 |         0 |
# +--------+---------------+---------+---------+----+-----------+
</code></pre><p><strong>列の意味</strong>:</p><ul><li><strong>メンバー</strong>: ノード名前_</li><li><strong>ホスト</strong>: 接続アドレス</li><li><strong>役割</strong>: リーダー (プライマリ) またはレプリカ_</li><li><strong>状態</strong>: 実行中、ストリーミング、アーカイブ回復中</li><li><strong>TL</strong>: タイムライン (すべて同じである必要があります)</li><li><strong>MB のラグ</strong>: レプリケーションラグ_</li></ul><h3 id="42-check-topology">4.2。トポロジを確認</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml topology postgres

# Output shows replication tree
</code></pre><h3 id="43-using-rest-api">4.3。 REST API</h3><pre><code class="language-bash"># Check node1 (primary)
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
</code></pre><h3 id="44-check-replication-from-postgresql">4.4 の使用。 PostgreSQL からのレプリケーションを確認_</h3><p><strong>プライマリ (ノード 1) 上</strong>:</p><pre><code class="language-bash">sudo -u postgres psql -c "SELECT * FROM pg_stat_replication;" -x
</code></pre><p>出力:</p><pre><code class="language-text">-[ RECORD 1 ]----+------------------------------
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
</code></pre><p><strong>レプリカ上 (ノード 2、ノード3)</strong>:</p><pre><code class="language-bash">sudo -u postgres psql -c "SELECT status, received_lsn, latest_end_lsn FROM pg_stat_wal_receiver;" -x
</code></pre><h3 id="45-verify-replication-lag">4.5。レプリケーション ラグ</h3><pre><code class="language-bash"># On primary
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
</code></pre><h2 id="5-test-basic-operations">5 を確認します。基本操作</h2><h3 id="51-create-test-database-and-table">5.1 をテストします。テスト データベースとテーブルを作成します</h3><p><strong>プライマリで (任意のノードに接続すると、patronictl はプライマリにルーティングします)</strong>:</p><pre><code class="language-bash"># Create database
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
</code></pre><h3 id="52-verify-replication">5.2。レプリケーションを確認します</h3><p><strong>レプリケーション時 (ノード 2 またはノード 3)</strong>:</p><pre><code class="language-bash"># Check data replicated
sudo -u postgres psql -h 10.0.1.12 -d testdb -c "SELECT COUNT(*) FROM test_table;"
# Should return: 1000

# Try to write (should fail on replica)
sudo -u postgres psql -h 10.0.1.12 -d testdb -c "INSERT INTO test_table (data) VALUES ('test');"
# ERROR:  cannot execute INSERT in a read-only transaction
</code></pre><h3 id="53-test-continuous-replication">5.3。継続的レプリケーションのテスト</h3><p><strong>ターミナル 1 (プライマリ - ノード 1)</strong>:</p><pre><code class="language-bash"># Insert data continuously
while true; do
  sudo -u postgres psql -h 10.0.1.11 -d testdb -c \
    "INSERT INTO test_table (data) VALUES ('Data at ' || NOW());"
  sleep 1
done
</code></pre><p><strong>ターミナル 2 (レプリカ -ノード 2)</strong>:</p><pre><code class="language-bash"># Watch count increase
watch -n 1 "sudo -u postgres psql -h 10.0.1.12 -d testdb -t -c 'SELECT COUNT(*) FROM test_table;'"
</code></pre><p>データは毎秒増加するはずです → レプリケーションは動作しています!</p><h2 id="6-common-bootstrap-issues">6。ブートストラップの一般的な問題_</h2><h3 id="61-issue-patroni-wont-start">6.1。問題: Patroni が起動しない</h3><p><strong>症状</strong>:</p><pre><code class="language-bash">sudo systemctl status patroni
# Failed to start
</code></pre><p><strong>確認してくださいログ_</strong>:_</p><pre><code class="language-bash">sudo journalctl -u patroni -n 50 --no-pager
</code></pre><p><strong>一般的な原因と問題ソリューション_</strong>:</p><h4 id="a-config-file-syntax-error">A。構成ファイルの構文エラー</h4><pre><code class="language-text">ERROR: Error parsing config file
</code></pre><p><strong>解決策</strong>:</p><pre><code class="language-bash"># Validate YAML
python3 -c "import yaml; yaml.safe_load(open('/etc/patroni/patroni.yml'))"

# Common issues:
# - Mixed tabs and spaces (use spaces only)
# - Incorrect indentation
# - Missing quotes around special characters
</code></pre><h4 id="b-cannot-connect-to-etcd">B。 etcd</h4><pre><code class="language-text">ERROR: Failed to connect to etcd
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash"># Check etcd is running
etcdctl endpoint health

# Check etcd endpoints in patroni.yml
grep "hosts:" /etc/patroni/patroni.yml

# Test connectivity
curl http://10.0.1.11:2379/version
</code></pre><h4 id="c-permission-denied-on-data-directory">C に接続できません。データ ディレクトリ_</h4><pre><code class="language-text">ERROR: data directory has wrong ownership
</code></pre><p><strong>Solution</strong>:</p><pre><code class="language-bash">sudo chown -R postgres:postgres /var/lib/postgresql/18/data
sudo chmod 700 /var/lib/postgresql/18/data
</code></pre><h4 id="d-port-already-in-use">D。ポートはすでに使用されています</h4><pre><code class="language-text">ERROR: could not bind IPv4 address "0.0.0.0": Address already in use
</code></pre><p><strong>解決策</strong>:_</p><pre><code class="language-bash"># Check what's using port 5432
sudo lsof -i :5432

# Stop PostgreSQL if running
sudo systemctl stop postgresql

# Kill process if needed
sudo pkill -9 postgres
</code></pre><h3 id="62-issue-cluster-wont-initialize">6.2。問題: クラスターが初期化されません</h3><p><strong>症状</strong>: Patroni は起動しますが、クラスターが初期化されません。</p><p><strong>Checkログ</strong>:</p><pre><code class="language-bash">sudo journalctl -u patroni -f
</code></pre><p><strong>一般的な原因</strong>:</p><h4 id="a-data-directory-not-empty">A。データ ディレクトリが空ではありません_</h4><pre><code class="language-text">INFO: Data directory is not empty
</code></pre><p><strong>解決策</strong>:_</p><pre><code class="language-bash"># Backup old data if needed
sudo mv /var/lib/postgresql/18/data /var/lib/postgresql/18/data.bak

# Create fresh directory
sudo mkdir -p /var/lib/postgresql/18/data
sudo chown postgres:postgres /var/lib/postgresql/18/data
sudo chmod 700 /var/lib/postgresql/18/data

# Restart Patroni
sudo systemctl restart patroni
</code></pre><h4 id="b-initialize-key-stuck-in-etcd">B。 etcd</h4><pre><code class="language-text">INFO: Another node is initializing
</code></pre><p><strong>Solutio でスタックしたキーを初期化しますn</strong>:</p><pre><code class="language-bash"># Check initialize key
etcdctl get /service/postgres/initialize

# If stuck, delete it
etcdctl del /service/postgres/initialize

# Restart Patroni
sudo systemctl restart patroni
</code></pre><h3 id="63-issue-replica-cannot-clone-from-primary">6.3。問題: レプリカがプライマリからクローンを作成できない</h3><p><strong>症状</strong>: ノード 2 または 3 がベースバックアップを作成できません。</p><p><strong>Checkログ</strong>:</p><pre><code class="language-bash">sudo journalctl -u patroni -n 100 | grep -i basebackup
</code></pre><p><strong>一般的な原因</strong>:</p><h4 id="a-network-connectivity">A。ネットワーク接続_</h4><pre><code class="language-text">ERROR: could not connect to server
</code></pre><p><strong>ソリューション</strong>:_</p><pre><code class="language-bash"># Test connectivity
telnet 10.0.1.11 5432

# Check firewall
sudo ufw status
sudo ufw allow from 10.0.1.0/24 to any port 5432
</code></pre><h4 id="b-authentication-failed">B。認証に失敗しました</h4><pre><code class="language-text">ERROR: FATAL: password authentication failed for user "replicator"
</code></pre><p><strong>解決策</strong>:_</p><pre><code class="language-bash"># Verify replication user exists on primary
sudo -u postgres psql -h 10.0.1.11 -c "\du replicator"

# Check pg_hba.conf allows replication
sudo -u postgres psql -h 10.0.1.11 -c "SHOW hba_file;"
# Then check the file

# Verify password matches in patroni.yml
grep -A2 "replication:" /etc/patroni/patroni.yml
</code></pre><h4 id="c-insufficient-space">C。スペースが不十分です_</h4><pre><code class="language-text">ERROR: No space left on device
</code></pre><p><strong>解決策</strong>:_</p><pre><code class="language-bash"># Check disk space
df -h /var/lib/postgresql

# Clean up if needed
sudo du -sh /var/lib/postgresql/* | sort -h
</code></pre><h3 id="64-issue-nodes-have-different-timelines">6.4。問題: ノードのタイムラインが異なります</h3><p><strong>症状</strong>:</p>___CODEBLOCK_4 7___<p><strong>解決策</strong>:</p><pre><code class="language-bash"># Reinitialize diverged node
patronictl reinit postgres node2

# Or manually
sudo systemctl stop patroni
sudo rm -rf /var/lib/postgresql/18/data/*
sudo systemctl start patroni
</code></pre><h2 id="7-enable-auto-start-on-boot">7。ブート</h2><pre><code class="language-bash"># Enable Patroni service
sudo systemctl enable patroni

# Verify
systemctl is-enabled patroni
# Output: enabled

# Test reboot (optional)
sudo reboot

# After reboot, check cluster
patronictl list
</code></pre><h2 id="8-basic-cluster-management">8 時の自動起動を有効にします。基本的なクラスター管理_</h2><h3 id="81-restart-a-node">8.1。ノード</h3><pre><code class="language-bash"># Graceful restart
patronictl restart postgres node2

# Force restart
patronictl restart postgres node2 --force
</code></pre><h3 id="82-reload-configuration">8.2を再起動します。構成_</h3><pre><code class="language-bash"># Reload Patroni config (non-PostgreSQL settings)
sudo systemctl reload patroni

# Reload PostgreSQL config
patronictl reload postgres node1
</code></pre><h3 id="83-pauseresume-auto-failover">8.3をリロードします。自動フェイルオーバーの一時停止/再開_</h3><pre><code class="language-bash"># Pause (disable auto-failover)
patronictl pause postgres

# Resume (enable auto-failover)
patronictl resume postgres
</code></pre><h3 id="84-show-configuration">8.4。構成_</h3><pre><code class="language-bash"># Show current DCS configuration
patronictl show-config postgres
</code></pre><h2 id="9-test-automatic-failover-optional">9を表示します。自動フェイルオーバーのテスト (オプション)</h2><p><strong>警告</strong>: 非運用環境でのみテストしてください!</p><h3 id="91-simulate-primary-failure">9.1。一次障害_</h3><pre><code class="language-bash"># On node1 (current primary)
sudo systemctl stop patroni

# Or kill PostgreSQL
sudo pkill -9 postgres
</code></pre><h3 id="92-watch-cluster-failover">9.2 をシミュレートします。クラスターのフェイルオーバー</h3><pre><code class="language-bash"># On node2 hoặc node3
watch -n 1 "patronictl list"

# Timeline:
# T+0s: node1 is Leader
# T+10s: node1 not responding
# T+30s: Leader lock expires
# T+35s: node2 or node3 becomes Leader
# T+40s: Cluster operational with new Leader
</code></pre><h3 id="93-verify-new-primary">9.3 を監視します。新しいプライマリ</h3><pre><code class="language-bash">patronictl list

# New output:
# + Cluster: postgres ----+----+-----------+
# | Member | Host    | Role    | State   | TL | Lag in MB |
# +--------+---------+---------+---------+----+-----------+
# | node1  | 10.0.1.11| Replica | stopped |  1 |           |
# | node2  | 10.0.1.12| Leader  | running |  2 |           |  ← New primary
# | node3  | 10.0.1.13| Replica | running |  2 |         0 |
# +--------+---------+---------+---------+----+-----------+
</code></pre><p><strong>注</strong>: タイムラインが 1 → 2 に増加しました (フェールオーバーが発生したことを示します)。</p><h3 id="94-rejoin-old-primary">9.4。古いプライマリ</h3><pre><code class="language-bash"># Start node1 again
sudo systemctl start patroni

# Patroni auto-rewinds và rejoins as replica
patronictl list

# Output:
# | node1  | 10.0.1.11| Replica | running |  2 |         0 |  ← Rejoined
# | node2  | 10.0.1.12| Leader  | running |  2 |           |
# | node3  | 10.0.1.13| Replica | running |  2 |         0 |
</code></pre><h2 id="10-lab-exercise">10に再参加します。ラボ演習_</h2><h3 id="lab-1-bootstrap-v%C3%A0-verify">ラボ 1: ブートストラップと検証</h3><p><strong>タスク</strong>: 1. ✅ 3 つのノードで Patroni を順番に起動します。 2. ✅<code>patronictl でクラスタを検証します。リスト_</code>&nbsp;3. ✅ レプリケーション ステータスを確認する 4. ✅ テスト データベースを作成し、データのレプリカを確認する_</p><h3 id="lab-2-test-replication-lag">ラボ 2: レプリケーション ラグをテスト</h3><p><strong>タスク</strong>: 1. プライマリに 10,000 行を挿入します。 2. レプリカのレプリケーション ラグを測定します。 3. 監視します。 pg_stat_replication_</p><h3 id="lab-3-simulate-node-failure">ラボ 3: ノード障害のシミュレーション</h3><p><strong>タスク_</strong>: 1. プライマリ ノードを停止する 2. 自動フェイルオーバーを監視する 3. 新しいプライマリが適応していることを確認する 4. 古いプライマリに再参加する 5. すべてのノードを確認する健康_</p><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11.概要</h2><h3 id="key-takeaways">重要なポイント</h3><p>✅&nbsp;<strong>ブートストラップ</strong>: 最初のノードの初期化、その他クローン</p><p>✅&nbsp;<strong>リーダー選出</strong>: 自動、DCS ベース</p><p>✅&nbsp;<strong>レプリケーション</strong>: pg_basebackup による自動セットアップ__HTMLTAG_416___<p>✅&nbsp;<strong>patronictl</strong>: プライマリ管理ツール</p><p>✅&nbsp;<strong>モニタリング</strong>: patronictl、REST API、pg_stat_replication 経由でチェック</p><p>✅&nbsp;<strong>フェイルオーバー</strong>_: 自動プライマリが失敗した場合</p><h3 id="checklist-sau-bootstrap">後でチェックリストを作成ブートストラップ</h3><ul><li>&nbsp;<code>patronictl リスト</code>HTMLTAG_434___</li><li>&nbsp;1 リーダー、2 に表示される 3 つのノードすべてレプリカ</li><li>&nbsp;すべてのノードが同じタイムライン</li><li>&nbsp;レプリケーションラグ = 0 MB_</li><li>&nbsp;テストデータがすべてのノードに複製</li><li>&nbsp;REST API が応答中すべてのノード_</li><li>&nbsp;Patroni の自動起動が有効</li><li>&nbsp;etcd クラスターが正常</li></ul><h3 id="architecture-hi%E1%BB%87n-t%E1%BA%A1i">現在のアーキテクチャ_</h3><pre><code class="language-text">✅ 3 VMs prepared (Bài 4)
✅ PostgreSQL 18 installed (Bài 5)
✅ etcd cluster running (Bài 6)
✅ Patroni installed (Bài 7)
✅ Patroni configured (Bài 8)
✅ Cluster bootstrapped (Bài 9)

Next: Advanced replication management
</code></pre><h3 id="chu%E1%BA%A9n-b%E1%BB%8B-cho-b%C3%A0i-10">レッスンの準備10_</h3><p>レッスン 10 では、レプリケーション管理について詳しく説明します:</p><ul><li>同期レプリケーションと非同期レプリケーション</li><li>同期モードの構成</li><li>レプリケーションの監視ラグ_</li><li>_レプリケーションの問題の処理</li></ul>