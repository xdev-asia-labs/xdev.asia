---
id: 019c9617-fb87-7086-95fc-6fd978990d86
title: 'レッスン 13: 自動フェイルオーバー'
slug: bai-13-automatic-failover
description: エラー検出メカニズム、リーダー選出プロセス、フェイルオーバー タイムラインを学び、プライマリ ノード障害のシミュレーションを練習します。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 3: クラスター管理'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6466" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6466)"/>

  <!-- Decorations -->
  <g>
    <circle cx="768" cy="234" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="936" cy="42" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="604" cy="110" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="772" cy="178" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="940" cy="246" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="214" x2="1100" y2="294" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="244" x2="1050" y2="314" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="989.1147367097487,149.5 989.1147367097487,178.5 964,193 938.8852632902513,178.5 938.8852632902513,149.5 964,135" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: 自動フェイルオーバー</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Patroni と PostgreSQL の高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: クラスター管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目的_</h2><p>このレッスンを終えると、次のことができるようになります:_</p><ul><li>Patroni のエラー検出メカニズムを理解する_</li><li>リーダー選出プロセスを理解する</li><li>フェールオーバー タイムラインを追跡する詳細_</li><li>多くのシナリオで自動フェイルオーバーをテスト</li><li>フェイルオーバーの問題のトラブルシューティング</li><li>フェイルオーバー速度の最適化</li></ul><h2 id="1-automatic-failover-overview">1。自動フェイルオーバーの概要</h2><h3 id="11-failover-l%C3%A0-g%C3%AC">1.1。フェイルオーバーとは何ですか?</h3><p><strong>自動フェイルオーバー</strong>&nbsp;= プロセス&nbsp;<strong>自動</strong>&nbsp;プライマリが表示されたときにレプリカをプライマリに昇格させます<strong>失敗</strong>.</p><p><strong>特別なポイント</strong>:</p><ul><li>⚡&nbsp;<strong>自動</strong>_: 介入は必要ありません手動_</li><li>🚨&nbsp;<strong>計画外</strong>: 試行</li><li>⏱️&nbsp;<strong>高速</strong>: 30 ～ 60 秒(構成可能)_</li><li>🎯&nbsp;<strong>目標</strong>: ダウンタイムを最小限に抑える_</li></ul><p><strong>いつ発生するかフェイルオーバーしますか?</strong></p><ul><li>プライマリ サーバーがクラッシュ</li><li>PostgreSQL プロセスが停止_</li><li>ネットワーク パーティション</li><li>ハードウェア失敗</li><li>DCS 接続が失われました</li><li>ディスクがいっぱい</li></ul><h3 id="12-failover-vs-replication">1.2。フェイルオーバーとレプリケーション</h3><pre><code class="language-text">WITHOUT Patroni (Manual Failover):
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
</code></pre><h2 id="2-failure-detection-mechanism">2。障害検出メカニズム</h2><h3 id="21-health-check-loop">2.1。ヘルス チェック ループ</h3><p><strong>Patroni ヘルス チェック コンポーネント</strong>:</p><pre><code class="language-python"># Pseudo-code of Patroni's main loop
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
</code></pre><h3 id="22-postgresql-health-checks">2.2。 PostgreSQL ヘルスチェック_</h3><p><strong>Patroni は複数のチェックを実行</strong>:</p><h4 id="a-process-check">A。プロセスチェック</h4><pre><code class="language-bash"># Check if postgres process exists
ps aux | grep postgres

# Check if accepting connections
pg_isready -h localhost -p 5432
</code></pre><h4 id="b-connection-check">B。接続チェック</h4><pre><code class="language-python"># Try to connect to PostgreSQL
try:
    conn = psycopg2.connect("host=localhost port=5432 dbname=postgres")
    conn.close()
except:
    # Connection failed!
    mark_unhealthy()
</code></pre><h4 id="c-replication-check-on-replicas">C。レプリケーション チェック (レプリカ上)</h4><pre><code class="language-sql">-- Check if replication is active
SELECT status, received_lsn, replay_lsn 
FROM pg_stat_wal_receiver;

-- If no data or status != 'streaming' → Problem!
</code></pre><h4 id="d-timeline-check">D。タイムラインチェック_</h4><pre><code class="language-sql">-- Ensure timeline matches cluster
SELECT timeline_id FROM pg_control_checkpoint();
</code></pre><h3 id="23-dcs-connectivity-check">2.3。 DCS 接続チェック</h3><p><strong>DCS 接続が重要な理由</strong>:</p><pre><code class="language-text">If node loses DCS connection:
- Cannot renew leader lock
- Cannot read cluster state
- MUST demote to avoid split-brain

Even if PostgreSQL is healthy!
</code></pre><p><strong>DCS チェック例</strong>:_</p><pre><code class="language-bash"># Check etcd health
etcdctl endpoint health

# Try to read/write
etcdctl get /service/postgres/leader
etcdctl put /service/postgres/members/node1 "healthy"
</code></pre><h3 id="24-leader-lock-ttl">2.4。リーダー ロック TTL</h3><p><strong>TTL (存続時間)メカニズム_</strong>:</p><pre><code class="language-yaml"># In patroni.yml
bootstrap:
  dcs:
    ttl: 30  # Leader lock expires after 30 seconds
    loop_wait: 10  # Check every 10 seconds
</code></pre><p><strong>タイムライン</strong>:_</p><pre><code class="language-text">T+0s:  Leader acquires lock (TTL=30s)
T+10s: Leader renews lock (TTL extended to T+40s)
T+20s: Leader renews lock (TTL extended to T+50s)
T+30s: Leader tries to renew but FAILS (crashed)
T+40s: Lock expires in DCS
T+41s: Replicas detect no leader
T+42s: Replica election begins
T+45s: New leader elected

Total detection time: ~35-40 seconds
</code></pre><h2 id="3-leader-election-process">3。リーダー選出プロセス</h2><h3 id="31-election-trigger">3.1。選挙トリガー_</h3><p><strong>リーダー選挙は</strong>:</p><pre><code class="language-text">Condition 1: Leader lock expired in DCS
  /service/postgres/leader → key not found

Condition 2: No active leader for &gt; loop_wait
  All replicas see: no leader heartbeat

Condition 3: Explicit failover
  patronictl failover command
</code></pre><h3 id="32-candidate-selection-criteria">3.2のときに開始されます。候補者の選択基準</h3><p><strong>パトローニが選択するのはst レプリカに基づく</strong>:</p><h4 id="priority-1-replication-state">優先度 1: レプリケーション状態</h4><pre><code class="language-sql">-- Prefer streaming over archive recovery
SELECT state FROM pg_stat_wal_receiver;

streaming &gt; in archive recovery &gt; stopped
</code></pre><h4 id="priority-2-replication-lag">優先度 2: レプリケーションの遅延</h4><pre><code class="language-sql">-- Replica with lowest lag wins
SELECT pg_wal_lsn_diff(pg_last_wal_receive_lsn(), pg_last_wal_replay_lsn()) AS lag_bytes;

-- Example:
-- node2: lag = 0 bytes      ← BEST
-- node3: lag = 1048576 bytes (1MB)
</code></pre><h4 id="priority-3-timeline">優先度 3:タイムライン</h4><pre><code class="language-sql">-- Higher timeline = more recent
SELECT timeline_id FROM pg_control_checkpoint();

-- node2: timeline = 3  ← BEST
-- node3: timeline = 2
</code></pre><h4 id="priority-4-tags">優先度 4: タグ_</h4><pre><code class="language-yaml"># In patroni.yml
tags:
  nofailover: false  # true = never promote this node
  noloadbalance: false
  priority: 100  # Higher = preferred (0-999)
</code></pre><p><strong>例</strong>:_</p>CODEBLOCK_15___<h4 id="priority-5-synchronous-state">優先度 5: 同期状態_</h4><pre><code class="language-sql">-- Synchronous replica preferred over async
SELECT sync_state FROM pg_stat_replication;

sync &gt; potential &gt; async
</code></pre><h3 id="33-race-condition-and-lock-acquisition">3.3。競合状態とロックの取得</h3><p><strong>複数のレプリカが競合</strong>:</p><pre><code class="language-text">Scenario: Primary fails, 2 replicas compete

T+0s: node2 and node3 both detect no leader
T+0.1s: Both try to acquire lock simultaneously

In etcd (atomic operation):
  node2 tries: PUT /service/postgres/leader "node2" if_not_exists
  node3 tries: PUT /service/postgres/leader "node3" if_not_exists

Result: Only ONE succeeds (etcd atomic guarantee)
  node2: SUCCESS → becomes leader
  node3: FAILED → remains replica
</code></pre><p><strong>DCS保証</strong>:</p><ul><li><strong>原子性</strong>: 1 つのノードのみがロックを取得</li><li><strong>一貫性</strong>: すべてのノードが同じように見えるリーダー</li><li><strong>孤立</strong>: スプリットブレインは不可能</li></ul><h3 id="34-promotion-process">3.4。プロモーション プロセス_</h3><p><strong>勝者ノードが実行</strong>:</p><pre><code class="language-text">Step 1: Acquire leader lock in DCS
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
</code></pre><h2 id="4-failover-timeline-detailed">4。フェイルオーバー タイムラインの詳細</h2><h3 id="41-complete-failover-flow">4.1。完全なフェイルオーバー フロー</h3><pre><code class="language-text">Timeline of Automatic Failover

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
</code></pre><h3 id="42-factors-affecting-failover-speed">4.2。フェイルオーバー速度に影響する要因</h3><p><strong>構成パラメータ</strong>:___HTMLTAG_246__CODEBLOCK_20___<p><strong>トレードオフ</strong>:</p>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">パラメータ_</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_下限値</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">上限値_</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">_TTL_</strong></td><td style="padding: 5px 10px;">高速フェイルオーバー</td><td style="padding: 5px 10px;">詳細安定</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">誤検知が増加_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">遅いフェイルオーバー_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">_loop_wait</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">_高速検出_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">DCS の削減トラフィック_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">CPU/ネットワークの増加_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">反応が遅い</td></tr></tbody></table>
<!--kg-card-end: html-->
<p><strong>_一般的な構成</strong>:</p><pre><code class="language-yaml"># Conservative (stable, slower)
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
</code></pre><h2 id="5-testing-automatic-failover">5。自動フェイルオーバーのテスト</h2><h3 id="51-test-scenario-1-postgresql-process-kill">5.1。テスト シナリオ 1: PostgreSQL プロセスの強制終了</h3><p><strong>PostgreSQL のクラッシュをシミュレート</strong>:_</p><pre><code class="language-bash"># On current primary (node1)
sudo -u postgres psql -c "SELECT pg_backend_pid();"
# Returns: 12345

sudo kill -9 12345  # Kill PostgreSQL

# Or kill all postgres processes
sudo pkill -9 postgres
</code></pre><p><strong>_Monitorフェイルオーバー</strong>:</p><pre><code class="language-bash"># Terminal 1: Watch cluster status
watch -n 1 "patronictl list postgres"

# Terminal 2: Monitor logs
sudo journalctl -u patroni -f

# Terminal 3: Test connectivity
while true; do
  psql -h 10.0.1.11 -U app_user -d myapp -c "SELECT 1;" 2&gt;&amp;1 | grep -q "ERROR" &amp;&amp; echo "$(date): DOWN" || echo "$(date): UP"
  sleep 1
done
</code></pre><p><strong>予想されるタイムライン</strong>:</p><pre><code class="language-text">00:00 - Cluster healthy
00:01 - Kill postgres on node1
00:02-00:30 - Patroni detecting failure
00:31 - node2 elected as new primary
00:35 - Cluster operational (node2 = primary)
00:36+ - Connections working again
</code></pre><h3 id="52-test-scenario-2-network-partition">5.2。テスト シナリオ 2: ネットワーク パーティション</h3><p><strong>ネットワーク パーティションのシミュレーション</strong>:</p><pre><code class="language-bash"># On primary node, block traffic to other nodes
sudo iptables -A INPUT -s 10.0.1.12 -j DROP
sudo iptables -A INPUT -s 10.0.1.13 -j DROP
sudo iptables -A OUTPUT -d 10.0.1.12 -j DROP
sudo iptables -A OUTPUT -d 10.0.1.13 -j DROP

# Or block etcd access specifically
sudo iptables -A OUTPUT -p tcp --dport 2379 -j DROP
</code></pre><p><strong>観察</strong>:</p>___CODEBLOCK_26__ _<p><strong>リカバリ</strong>:</p><pre><code class="language-bash"># Restore network on node1
sudo iptables -F

# node1 should automatically rejoin as replica
patronictl list postgres
</code></pre><h3 id="53-test-scenario-3-server-reboot">5.3。テスト シナリオ 3: サーバーの再起動</h3><p><strong>サーバーのクラッシュをシミュレート</strong>:</p><pre><code class="language-bash"># On primary node
sudo reboot

# Or immediate crash
echo c | sudo tee /proc/sysrq-trigger
</code></pre><p><strong>予想される動作</strong>: シナリオ 1 と同じですが、完全にノード化されます。利用できません。</p><h3 id="54-test-scenario-4-disk-full">5.4。テスト シナリオ 4: ディスク フル</h3><p><strong>ディスク フルをシミュレート</strong>:</p><pre><code class="language-bash"># Fill up disk on primary
dd if=/dev/zero of=/var/lib/postgresql/bigfile bs=1M count=10000

# PostgreSQL will fail when cannot write WAL
</code></pre><p><strong>Patroni が検出</strong>&nbsp;PostgreSQL の異常 → トリガーフェイルオーバー。</p><h3 id="55-test-scenario-5-dcs-failure">5.5。テスト シナリオ 5: DCS の失敗</h3><p><strong>すべてのノードで etcd を停止</strong>:</p><pre><code class="language-bash"># On all 3 etcd nodes
sudo systemctl stop etcd
</code></pre><p><strong>予想通り動作_</strong>:</p><pre><code class="language-text">- All Patroni nodes lose DCS connection
- Current primary DEMOTES (safety mechanism)
- Cluster enters "read-only" state
- NO failover possible (no DCS consensus)

Recovery:
- Restart etcd cluster
- Patroni auto-recovers
- Leader election happens
</code></pre><h2 id="6-verify-failover-success">6。フェイルオーバーの成功を確認</h2><h3 id="61-check-cluster-status">6.1。クラスターのステータス</h3><pre><code class="language-bash"># List cluster members
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
</code></pre><h3 id="62-verify-new-primary">6.2 を確認します。新しいプライマリ</h3><pre><code class="language-bash"># Check primary role
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
</code></pre><h3 id="63-test-write-operations">6.3 を確認します。書き込み操作をテストします_</h3><pre><code class="language-bash"># Insert data on new primary
sudo -u postgres psql -h 10.0.1.12 -d testdb -c "
INSERT INTO test_table (data) VALUES ('After failover at ' || NOW());
"

# Verify on replica
sudo -u postgres psql -h 10.0.1.13 -d testdb -c "
SELECT * FROM test_table ORDER BY id DESC LIMIT 5;
"
# Should see new data replicated
</code></pre><h3 id="64-check-failover-history">6.4。フェールオーバー履歴</h3><pre><code class="language-bash"># View history via REST API
curl -s http://10.0.1.12:8008/history | jq

# Output:
# [
#   [1, 67108864, "no recovery target specified", "2024-11-25T10:00:00+00:00"],
#   [2, 134217728, "no recovery target specified", "2024-11-25T11:30:15+00:00"]
# ]
#   ↑ Timeline 2 = Failover event

# Check Patroni logs
sudo journalctl -u patroni --since "30 minutes ago" | grep -i "promote\|failover\|leader"
</code></pre><h2 id="7-troubleshooting-failover-issues">7 を確認します。フェイルオーバーの問題のトラブルシューティング</h2><h3 id="71-issue-failover-not-happening">7.1。問題: フェイルオーバーが発生しない</h3><p><strong>症状</strong>: プライマリがダウンしているが昇格なし。</p><p><strong>考えられる原因</strong>:</p><h4 id="a-all-replicas-tagged-nofailover">A。すべてのレプリカは nofailover</h4><pre><code class="language-bash"># Check tags
patronictl show-config postgres | grep -A5 "tags:"

# If all replicas have nofailover: true
# Solution: Remove tag from at least one replica
patronictl edit-config postgres
# Set: nofailover: false
</code></pre><h4 id="b-replication-lag-too-high">B とタグ付けされています。レプリケーションの遅延が大きすぎます</h4><pre><code class="language-bash"># Check maximum_lag_on_failover
patronictl show-config postgres | grep maximum_lag_on_failover

# If replica lag &gt; threshold, won't promote
# Solution: Increase threshold or wait for lag to decrease
patronictl edit-config postgres
# Set: maximum_lag_on_failover: 10485760  # 10MB
</code></pre><h4 id="c-no-quorum-in-dcs">C。 DCS_</h4><pre><code class="language-bash"># Check etcd health
etcdctl endpoint health --cluster

# If etcd cluster has no quorum (&lt; 2 of 3 healthy)
# Solution: Fix etcd cluster first
sudo systemctl restart etcd
</code></pre><h4 id="d-synchronousmodestrict-enabled">D にクォーラムがありません。 synchronous_mode_strict が有効</h4><pre><code class="language-yaml"># If enabled and no sync replica available
synchronous_mode: true
synchronous_mode_strict: true  # ← Problem!

# Primary cannot be demoted, replicas cannot be promoted
# Solution: Disable strict mode
patronictl edit-config postgres
# Set: synchronous_mode_strict: false
</code></pre><h3 id="72-issue-multiple-failovers-flapping">7.2。問題: 複数のフェイルオーバー (フラッピング)</h3><p><strong>症状</strong>: クラスターが繰り返しフェイルオーバーを繰り返します。</p><p><strong>考えられる原因</strong>:</p><h4 id="a-network-instability">A。ネットワークが不安定</h4><pre><code class="language-bash"># Check network between nodes
ping -c 100 10.0.1.12
# High packet loss → false failovers

# Solution: Fix network or increase TTL
patronictl edit-config postgres
# Set: ttl: 40  # More tolerant
</code></pre><h4 id="b-ttl-too-aggressive">B。 TTL が攻撃的すぎます_</h4><pre><code class="language-yaml"># ttl: 10  ← Too low!
# Every small network blip causes failover

# Solution: Increase TTL
ttl: 30  # More stable
</code></pre><h4 id="c-resource-exhaustion">C。リソースの枯渇_</h4><pre><code class="language-bash"># Check CPU/Memory on nodes
top
free -h

# If resources exhausted, health checks timeout
# Solution: Scale up resources or reduce load
</code></pre><h3 id="73-issue-slow-failover">7.3。問題: フェールオーバーが遅い</h3><p><strong>症状</strong>: フェールオーバーに 60 秒以上かかります。</p><p><strong>診断</strong>:</p>___CODEBLOCK_43__ _<p><strong>最適化</strong>:</p><pre><code class="language-yaml"># Reduce TTL and loop_wait
bootstrap:
  dcs:
    ttl: 20  # Was 30
    loop_wait: 5  # Was 10

# Expected failover: ~30-35 seconds
</code></pre><h3 id="74-issue-data-loss-after-failover">7.4。問題: フェイルオーバー後のデータ損失</h3><p><strong>症状</strong>: 最近のトランザクションがいくつか欠落しています。</p><p><strong>原因</strong>: 非同期レプリケーション + レプリケーションラグ。</p><p><strong>検証</strong>:</p>___CODEBLOCK_45 ___<p><strong>予防</strong>:</p><pre><code class="language-yaml"># Enable synchronous replication
bootstrap:
  dcs:
    synchronous_mode: true
    synchronous_mode_strict: false  # Allow degradation
    
    postgresql:
      parameters:
        synchronous_commit: 'on'
</code></pre><h2 id="8-metrics-and-monitoring">8。メトリクスとモニタリング</h2><h3 id="81-key-failover-metrics">8.1。主要なフェールオーバー メトリック_</h3><pre><code class="language-sql">-- Time since last failover
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
</code></pre><h3 id="82-alerting-rules">8.2。アラート ルール</h3><p><strong>Prometheus アラートの例</strong>:</p><pre><code class="language-yaml">groups:
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
</code></pre><h2 id="9-best-practices">9。ベスト プラクティス</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>フェイルオーバーを定期的にテストする</strong>&nbsp;- ステージングでは毎月、運用環境では四半期に一度</li><li><strong>レプリケーションを監視するlag</strong>&nbsp;- ラグが > の場合に警告します。 1MB</li><li><strong>同期レプリケーションを使用</strong>&nbsp;データ損失ゼロ_</li><li><strong>synchronous_mode_strict を設定: false</strong>&nbsp;- 許可劣化_</li><li><strong>適切な TTL を構成_</strong>&nbsp;- 速度と安定性のバランスを取る (20 ～ 30 秒)_</li><li><strong>レプリカが 2 つ以上ある</strong>&nbsp;- レプリカが 1 つであってもフェイルオーバーを許可するレプリカのダウン</li><li><strong>DCS の正常性を監視</strong>&nbsp;- etcd クラスターが正常である必要があります</li><li><strong>ランブックを文書化</strong>&nbsp;- 手動の手順介入_</li><li><strong>フェイルオーバー イベントのログ</strong>&nbsp;- パターンと問題の追跡</li><li><strong>容量計画</strong>&nbsp;- レプリカはプライマリを処理する必要がありますロード_</li></ol><h3 id="%E2%9D%8C-dont">❌ しないでください</h3><ol><li><strong>単一レプリカを使用しない</strong>&nbsp;- フェイルオーバーオプションなし</li><li><strong>無視しないでくださいラグ</strong>&nbsp;- ラグが大きい = データ損失のリスク</li><li><strong>TTL を低く設定しすぎないでください</strong>&nbsp;(<15 秒) - 誤検知</li><li><strong>スキップしないでくださいtesting_</strong>&nbsp;- テストされていないフェイルオーバー = ダウンタイムのリスク</li><li><strong>自動フェイルオーバー中は</strong>&nbsp;を手動で昇格させないでください - Patroni に処理させます</li><li><strong>古いものを忘れないでくださいプライマリ_</strong>&nbsp;- 再結合/再構築が必要</li><li><strong>監視せずに実行しない</strong>&nbsp;- フェイルオーバーがいつ発生するかを把握する必要がある</li><li><strong>過負荷にしないでくださいDCS_</strong>&nbsp;- 個別の etcd クラスターを推奨_</li></ol><h2 id="10-lab-exercises">10。ラボ演習</h2><h3 id="lab-1-basic-failover-test">ラボ 1: 基本フェイルオーバー テスト</h3><p><strong>タスク</strong>: 1. ベースラインを記録します:&nbsp;<code>patronictl list</code>&nbsp;2.プライマリを停止します:&nbsp;<code>sudo systemctl stop patroni</code>&nbsp;3. <code>watch -n 1 patronictl list</code>&nbsp;4 を使用してフェイルオーバーの時間を計測します。ダウンタイムの期間を文書化する 5. 新しいプライマリが書き込みを受け入れることを確認する 6. 古いプライマリを再起動し、再参加を確認する_</p><h3 id="lab-2-network-partition-test">ラボ 2: ネットワーク パーティション テスト</h3><p><strong>タスク</strong>: 1. iptables を使用してクラスター パーティションからプライマリに接続する2. DCS の動作を観察します。 3. パーティションの後にプライマリが 1 つだけ存在することを確認します。 4. ネットワークを復元し、自動回復を確認します</p><h3 id="lab-3-optimize-failover-speed">ラボ 3: フェールオーバー速度の最適化_</h3><p><strong>タスク</strong>: 1. デフォルト設定 (TTL=30) でのベースライン テスト 2. 削減TTL を 20 に、再度テストします。 3. 15 に減らし、再度テストします。 4. フェイルオーバー時間を比較します。 5. トレードオフを評価します (速度と誤検知)</p><h3 id="lab-4-failover-under-load">ラボ 4: 負荷時のフェイルオーバー</h3><p><strong>タスク</strong>: 1. 次のコマンドで負荷を生成します。 pgbench:&nbsp;<code>pgbench -c 10 -T 300</code>&nbsp;2.ロード中にプライマリを停止します。 3. pgbench 出力で接続エラーをカウントします。 4. 可用性の割合を計算します。 5. ユーザーへの影響を文書化します</p><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11。概要</h2><h3 id="key-concepts">重要な概念</h3><p>✅&nbsp;<strong>自動フェイルオーバー</strong>&nbsp;= 手動なしの自己修復介入_</p><p>✅&nbsp;<strong>検出</strong>&nbsp;= ヘルスチェック + DCS 接続 + TTL有効期限</p><p>✅&nbsp;<strong>選出</strong>&nbsp;= ラグ、タイムライン、タグに基づく最適なレプリカ</p><p>✅&nbsp;<strong>プロモーション</strong>&nbsp;= pg_promote() + タイムラインの増分 + ロールの変更</p><p>✅&nbsp;<strong>Timeline</strong>&nbsp;= フェイルオーバーカウンター、防止発散</p><p>✅&nbsp;<strong>TTL</strong>&nbsp;= 速度と安定性の間のトレードオフ</p><h3 id="failover-checklist">フェイルオーバーチェックリスト</h3><ul><li>&nbsp;主な失敗検出</li><li>&nbsp;DCS でリーダー ロックの有効期限が切れました</li><li>&nbsp;最良のレプリカが特定されました</li><li>&nbsp;リーダー ロックを取得</li><li>&nbsp;PostgreSQL が昇格されました正常に</li><li>&nbsp;タイムラインが増加しました_</li><li>&nbsp;コールバックが実行されました_</li><li>&nbsp;他のレプリカが再構成されました_</li><li>&nbsp;レプリケーション復元済み</li><li>&nbsp;クラスタ運用可能</li></ul><h3 id="next-steps">次のステップ</h3><p>レッスン 14 で説明します&nbsp;<strong>切り替え計画中計画済み</strong>:</p><ul><li>計画されたメンテナンス シナリオ</li><li>ゼロダウンタイムのスイッチオーバー プロセス_</li><li>スムーズなスイッチオーバーと即時スイッチオーバー</li><li>計画されたメンテナンスのベスト プラクティスフェイルオーバー_</li></ul>