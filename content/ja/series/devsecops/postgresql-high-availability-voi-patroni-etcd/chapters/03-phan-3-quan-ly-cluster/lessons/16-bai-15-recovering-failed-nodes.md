---
id: 019c9617-fb8e-711e-a241-91e33cbbe469
title: 'レッスン 15: 障害が発生したノードの回復'
slug: bai-15-recovering-failed-nodes
description: pg_rewind メカニズムを使用して、障害が発生したプライマリをクラスターに再結合し、必要に応じてバックアップからレプリカを再構築します。
duration_minutes: 210
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 3: クラスター管理'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8221" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8221)"/>

  <!-- Decorations -->
  <g>
    <circle cx="658" cy="244" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="716" cy="142" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="774" cy="40" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="832" cy="198" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="890" cy="96" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="84" x2="1100" y2="164" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="114" x2="1050" y2="184" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="967.7749907475932,114.5 967.7749907475932,153.5 934,173 900.2250092524068,153.5 900.2250092524068,114.50000000000001 934,95" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: 障害が発生したノードの回復</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Patroni と PostgreSQL の高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: クラスター管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標</h2><p>このレッスンの後、次のことを行います:</p><ul><li>フェールオーバー後に古いプライマリに再参加_</li><li>pg_rewind を使用してデータを再同期</li><li>レプリカを再構築するpg_basebackup_</li><li>タイムラインの相違を処理</li><li>スプリット ブレイン シナリオから回復_</li><li>Patroni で回復を自動化</li></ul><h2 id="1-node-recovery-overview">1。ノード回復の概要</h2><h3 id="11-recovery-scenarios">1.1。回復シナリオ_</h3><p><strong>いつノードを回復する必要がありますか?</strong></p><h4 id="scenario-1-old-primary-sau-failover">シナリオ 1: フェールオーバー後の古いプライマリ_</h4><pre><code class="language-text">Before:
  node1 (primary) → FAILS
  node2 (replica) → promoted to primary

After:
  node1: Needs rejoin as replica
  node2: Current primary
</code></pre><h4 id="scenario-2-replica-disconnected">シナリオ 2: レプリカ切断済み</h4><pre><code class="language-text">Before:
  node3 (replica) → Network partition / Crash

After:
  node3: Needs to catch up with primary
</code></pre><h4 id="scenario-3-hardware-replacement">シナリオ 3: ハードウェアの交換</h4><pre><code class="language-text">Before:
  node2: Disk failure

After:
  node2: New disk, needs full rebuild
</code></pre><h4 id="scenario-4-timeline-divergence">シナリオ 4: タイムラインの相違</h4><pre><code class="language-text">Before:
  node1 accepted writes AFTER losing leader lock

After:
  node1: Diverged timeline, conflicts with cluster
</code></pre><h3 id="12-recovery-methods">1.2。回復方法_</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">方法</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">いつ使用する</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">時間</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">データ損失_</th></tr></thead><tbody><tr><td style="padding: 5px 10px;"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">自動再参加</strong></td><td style="padding: 5px 10px;">ノードがクリーンアップされましたシャットダウン</td><td style="padding: 5px 10px;">~10s</td><td style="padding: 5px 10px;">なし</td></tr>_ <tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">pg_rewind</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">タイムライン分岐</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">~1～5分</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">なし</td>___HTMLTAG_139_ __<tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">pg_basebackup_</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">主要破損 / 完全な再構築_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">~30分+</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">なし_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">手動回復</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">複雑なスプリットブレインシナリオ</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">さまざま</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">可能</td></tr></tbody></table>
<!--kg-card-end: html-->
<h2 id="2-auto-rejoin-patroni-default">2.自動再参加 (Patroni のデフォルト)</h2><h3 id="21-how-auto-rejoin-works">2.1。自動再参加の仕組み_</h3><p><strong>ノードがオンラインに戻ったとき</strong>:</p><pre><code class="language-text">1. Patroni starts
2. Checks DCS for cluster state
3. Finds current leader (e.g., node2)
4. Compares local timeline with cluster timeline
5. If compatible → auto-rejoin as replica
6. If diverged → need pg_rewind or reinit
</code></pre><h3 id="22-example-clean-rejoin">2.2。例: クリーンな再結合</h3><p><strong>Setup</strong>:</p><pre><code class="language-bash"># Current cluster state
patronictl list postgres

# + Cluster: postgres ----+----+-----------+
# | Member | Host        | Role    | State   | TL | Lag in MB |
# +--------+-------------+---------+---------+----+-----------+
# | node1  | 10.0.1.11   | Leader  | running |  2 |           |
# | node2  | 10.0.1.12   | Replica | running |  2 |         0 |
# | node3  | 10.0.1.13   | Replica | running |  2 |         0 |
# +--------+-------------+---------+---------+----+-----------+
</code></pre><p><strong>ノード 3 をシミュレートする失敗</strong>:</p><pre><code class="language-bash"># On node3: Stop Patroni cleanly
sudo systemctl stop patroni

# Cluster now:
# | node1  | 10.0.1.11   | Leader  | running |  2 |           |
# | node2  | 10.0.1.12   | Replica | running |  2 |         0 |
# | node3  | 10.0.1.13   | -       | stopped |  - |           | ← Down
</code></pre><p><strong>回復</strong>:_</p><pre><code class="language-bash"># On node3: Start Patroni
sudo systemctl start patroni

# Watch logs
sudo journalctl -u patroni -f
</code></pre><p><strong>ログ出力_</strong>:</p><pre><code class="language-text">2024-11-25 10:00:00 INFO: Starting Patroni...
2024-11-25 10:00:01 INFO: Connected to DCS (etcd)
2024-11-25 10:00:02 INFO: Cluster timeline: 2, local timeline: 2 ✅
2024-11-25 10:00:03 INFO: Current leader: node1
2024-11-25 10:00:04 INFO: Rejoining as replica
2024-11-25 10:00:05 INFO: Starting PostgreSQL in recovery mode
2024-11-25 10:00:08 INFO: Replication started, streaming from node1
2024-11-25 10:00:10 INFO: Successfully rejoined cluster ✅
</code></pre><p><strong>検証___HT MLTAG_195___:</p><pre><code class="language-bash">patronictl list postgres

# + Cluster: postgres ----+----+-----------+
# | Member | Host        | Role    | State   | TL | Lag in MB |
# +--------+-------------+---------+---------+----+-----------+
# | node1  | 10.0.1.11   | Leader  | running |  2 |           |
# | node2  | 10.0.1.12   | Replica | running |  2 |         0 |
# | node3  | 10.0.1.13   | Replica | running |  2 |         0 | ← Rejoined!
# +--------+-------------+---------+---------+----+-----------+
</code></pre><p><strong>時間</strong>: ~10 秒✅</p><h3 id="23-configuration-for-auto-rejoin">2.3。自動再参加の構成</h3><pre><code class="language-yaml"># In patroni.yml
postgresql:
  use_pg_rewind: true  # Enable automatic pg_rewind if needed
  remove_data_directory_on_rewind_failure: false  # Safety
  remove_data_directory_on_diverged_timelines: false  # Safety

# Patroni will attempt:
# 1. Auto-rejoin (if timelines match)
# 2. pg_rewind (if timeline diverged but recoverable)
# 3. Full reinit (if pg_rewind fails and auto-reinit enabled)
</code></pre><h2 id="3-using-pgrewind">3。 pg_rewind</h2><h3 id="31-what-is-pgrewind">3.1 を使用します。 pg_rewind とは何ですか?</h3><p><strong>pg_rewind</strong>&nbsp;= 現在のタイムラインから<strong>分岐</strong>&nbsp;の PostgreSQL インスタンスを再同期するツール。</p><p><strong>いつ必要</strong>:</p><pre><code class="language-text">Scenario: Old primary received writes AFTER failover

Timeline:
  T+0: node1 (primary), node2 (replica)
  T+1: Network partition
  T+2: node2 promoted (timeline: 1 → 2)
  T+3: node1 still thinks it's primary, accepts writes (timeline: 1)
  T+4: Network restored
  T+5: Conflict! node1 timeline=1, cluster timeline=2

Solution: pg_rewind node1 to match node2's timeline
</code></pre><p><strong>仕組み</strong>:</p><pre><code class="language-text">1. Find common ancestor (last shared WAL position)
2. Replay WAL from new primary
3. Overwrite conflicting blocks
4. Node rejoins as replica on new timeline
</code></pre><h3 id="32-prerequisites-for-pgrewind">3.2。 pg_rewind</h3><p><strong>要件</strong>:</p><pre><code class="language-yaml"># In patroni.yml → postgresql.parameters
wal_log_hints: 'on'  # Required! (or use full_page_writes)

# Or use data checksums (set during initdb):
# initdb --data-checksums

# Also ensure:
max_wal_senders: 10  # For replication
wal_level: replica   # For replication
</code></pre><p>__ _HTMLTAG_228___その理由<code>wal_log_hints</code>?</strong></p><pre><code class="language-text">Without wal_log_hints:
  pg_rewind cannot determine which blocks changed
  → Cannot resync
  → Must use full rebuild (pg_basebackup)

With wal_log_hints:
  PostgreSQL tracks all block changes
  → pg_rewind can identify divergence
  → Fast resync ✅

Trade-off: ~1-2% write performance overhead
</code></pre><h3 id="33-manual-pgrewind">3.3。手動 pg_rewind_</h3><p><strong>シナリオ</strong>: ノード 1 (古いプライマリ) はフェイルオーバー後に再同期する必要があります。</p><p><strong>ステップ 1: PostgreSQL を停止するnode1_</strong></p><pre><code class="language-bash"># On node1
sudo systemctl stop patroni
sudo systemctl stop postgresql
</code></pre><p><strong>ステップ 2: pg_rewind の実行_</strong></p><pre><code class="language-bash"># On node1: Rewind to match node2 (current primary)
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
</code></pre><p><strong>ステップ 3: 作成standby.signal_</strong></p><pre><code class="language-bash"># On node1: Mark as standby
sudo -u postgres touch /var/lib/postgresql/18/data/standby.signal
</code></pre><p><strong>ステップ 4:primary_conninfo を更新</strong></p><pre><code class="language-bash"># On node1: Point to new primary (node2)
sudo -u postgres tee /var/lib/postgresql/18/data/postgresql.auto.conf &lt;&lt;EOF
primary_conninfo = 'host=10.0.1.12 port=5432 user=replicator password=replica_password'
EOF
</code></pre><p><strong>ステップ 5:開始PostgreSQL_</strong></p><pre><code class="language-bash"># On node1
sudo systemctl start patroni

# Patroni will start PostgreSQL in recovery mode
</code></pre><p><strong>ステップ 6: 確認_</strong></p><pre><code class="language-bash">patronictl list postgres

# node1 should now be a Replica following node2 ✅
</code></pre><p><strong>時間</strong>: ~1 ～ 5 分 (相違に応じて)サイズ)_</p><h3 id="34-automatic-pgrewind-patroni">3.4。自動 pg_rewind (Patroni)</h3><p><strong>有効にするpatroni.yml_</strong>:</p><pre><code class="language-yaml"># Patroni will automatically run pg_rewind if needed
postgresql:
  use_pg_rewind: true
  
  parameters:
    wal_log_hints: 'on'  # Required!
</code></pre><p><strong>動作</strong>:</p><pre><code class="language-text">When node rejoins after failover:
  1. Patroni detects timeline divergence
  2. Automatically runs pg_rewind
  3. Restarts PostgreSQL as replica
  4. Node rejoins cluster

No manual intervention needed! ✅
</code></pre><p><strong>例ログ_</strong>:</p><pre><code class="language-text">2024-11-25 10:05:00 INFO: Local timeline 1, cluster timeline 2
2024-11-25 10:05:01 WARNING: Timeline divergence detected
2024-11-25 10:05:02 INFO: use_pg_rewind enabled, attempting rewind...
2024-11-25 10:05:03 INFO: Running pg_rewind...
2024-11-25 10:05:45 INFO: pg_rewind completed successfully
2024-11-25 10:05:46 INFO: Starting PostgreSQL as replica
2024-11-25 10:05:50 INFO: Rejoined cluster ✅
</code></pre><h2 id="4-full-rebuild-with-pgbasebackup">4。 pg_basebackup</h2><h3 id="41-when-to-use-pgbasebackup">4.1 を使用して完全に再構築します。 pg_basebackup を使用する場合</h3><p><strong>ユースケース</strong>:</p><ol><li><strong>pg_rewind 失敗_</strong>&nbsp;- データも分岐_</li><li><strong>破損が検出されました</strong>&nbsp;- データの整合性の問題_</li><li><strong>メジャーバージョンアップグレード</strong>&nbsp;- 異なる PostgreSQLバージョン_</li><li><strong>新しいノード_</strong>&nbsp;- クラスターに新しいレプリカを追加</li><li><strong>ディスクを交換</strong>&nbsp;- 空のデータディレクトリ_</li><li><strong>偏執的な安全性</strong>&nbsp;- クリーンな状態を保証したい</li></ol><p><strong>トレードオフ</strong>: 速度は遅くなりますが (大規模な DB の場合は約 30 分～2 時間)、保証されています</p><h3 id="42-manual-pgbasebackup">4.2。手動 pg_basebackup</h3><p><strong>ステップ 1: ノードの停止とクリーン</strong></p><pre><code class="language-bash"># On node to rebuild (e.g., node3)
sudo systemctl stop patroni
sudo systemctl stop postgresql

# Remove old data directory
sudo rm -rf /var/lib/postgresql/18/data/*
</code></pre><p><strong>ステップ 2: ベース バックアップの取得プライマリ_</strong></p><pre><code class="language-bash"># On node3: Backup from current primary (node2)
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
</code></pre><p><strong>出力</strong>:_</p><pre><code class="language-text">Password: [enter replicator password]
pg_basebackup: initiating base backup, waiting for checkpoint to complete
pg_basebackup: checkpoint completed
pg_basebackup: write-ahead log start point: 0/4000000 on timeline 2
pg_basebackup: starting background WAL receiver
24567/24567 kB (100%), 1/1 tablespace
pg_basebackup: write-ahead log end point: 0/4000168
pg_basebackup: syncing data to disk ...
pg_basebackup: base backup completed
</code></pre><p><strong>ステップ 3: 構成の確認</strong></p><pre><code class="language-bash"># On node3: Check standby.signal created
ls /var/lib/postgresql/18/data/standby.signal

# Check primary_conninfo
cat /var/lib/postgresql/18/data/postgresql.auto.conf | grep primary_conninfo
</code></pre><p><strong>ステップ 4: ノードの開始</strong></p><pre><code class="language-bash"># On node3
sudo systemctl start patroni

# Node will rejoin as replica
</code></pre><p><strong>ステップ 5: _</strong></p><pre><code class="language-bash">patronictl list postgres

# node3 should be streaming from primary ✅
</code></pre><p><strong>_Time</strong>: ~30分～2時間(データベースのサイズによって異なります)_</p><h3 id="43-patroni-automatic-reinit">4.3を確認します。 Patroni の自動再初期化</h3><p><strong>有効にする自動再初期化</strong>:</p><pre><code class="language-yaml"># In patroni.yml
postgresql:
  use_pg_rewind: true
  
  # If pg_rewind fails, auto-reinit
  remove_data_directory_on_rewind_failure: true
  remove_data_directory_on_diverged_timelines: true

# WARNING: Data directory will be DELETED and recreated
# Only enable if you trust automation!
</code></pre><p><strong>動作</strong>:</p><pre><code class="language-text">When node rejoins:
  1. Try auto-rejoin → FAILED (diverged)
  2. Try pg_rewind → FAILED (corruption)
  3. Automatically remove data directory
  4. Run pg_basebackup from current primary
  5. Rejoin as replica

Fully automated! But destructive! ⚠️
</code></pre><h3 id="44-patroni-reinit-command">4.4。 Patroni 再初期化コマンド_</h3><p><strong>手動トリガー</strong>:</p><pre><code class="language-bash"># Force reinit on node3
patronictl reinit postgres node3

# Patroni will:
# 1. Stop PostgreSQL on node3
# 2. Remove data directory
# 3. Run pg_basebackup from leader
# 4. Start as replica

# Prompt:
# Are you sure you want to reinitialize members node3? [y/N]: y
</code></pre><p><strong>Monitor進行状況_</strong>:</p><pre><code class="language-bash"># On node3: Watch logs
sudo journalctl -u patroni -f

# Expected:
# INFO: Removing data directory...
# INFO: Running pg_basebackup...
# INFO: Backup completed (24 GB in 15 minutes)
# INFO: Starting PostgreSQL...
# INFO: Rejoined cluster ✅
</code></pre><h2 id="5-timeline-divergence-resolution">5。タイムラインの相違の解決</h2><h3 id="51-understanding-timelines">5.1。タイムラインについて</h3><p><strong>タイムライン</strong>&nbsp;= 履歴ブランチカウンター</p><pre><code class="language-text">Initial:
  Timeline 1 (all nodes)

After first failover:
  Old primary: Timeline 1
  New primary: Timeline 2 ← Incremented

After second failover:
  Timeline 3 ← Incremented again
</code></pre><p><strong>タイムラインを使用する理由存在</strong>:</p><pre><code class="language-text">Prevent data conflict:
  If two nodes both think they're primary,
  they write on different timelines.
  → Conflict detected
  → Manual intervention required
</code></pre><h3 id="52-detecting-timeline-divergence">5.2。タイムラインの相違の検出</h3><p><strong>ローカル タイムラインを確認</strong>:</p><pre><code class="language-bash"># On any node
sudo -u postgres psql -c "
  SELECT timeline_id 
  FROM pg_control_checkpoint();
"

# Example:
# timeline_id
# ------------
#           2
</code></pre><p><strong>クラスターを確認タイムライン_</strong>:</p><pre><code class="language-bash"># Via Patroni
patronictl list postgres | head -2

# + Cluster: postgres (7001234567890123456) ----+----+-----------+
#                                               ↑ Timeline in cluster ID

# Or via REST API
curl -s http://10.0.1.12:8008/patroni | jq '.timeline'
# Output: 2
</code></pre><p><strong>比較</strong>:_</p><pre><code class="language-bash"># If node timeline ≠ cluster timeline
# → Node needs pg_rewind or reinit
</code></pre><h3 id="53-scenario-timeline-divergence-after-split-brain">5.3。シナリオ: スプリット ブレイン後のタイムラインの分岐_</h3><p><strong>セットアップ_</strong>:_</p><pre><code class="language-text">T+0: 3-node cluster, node1 = primary (timeline 2)
T+1: Network partition splits node1 from node2/node3
T+2: node1 thinks it's still primary (timeline 2)
T+3: node2/node3 elect node2 as primary (timeline 3)
T+4: Both node1 and node2 accept writes!
  - node1: timeline 2, accepting writes ❌
  - node2: timeline 3, accepting writes ✅
  - Split-brain! ⚠️
T+5: Network restored
T+6: Conflict detected
</code></pre><p><strong>解決__ _HTMLTAG_403___:</p><pre><code class="language-bash"># Step 1: Verify which timeline is "correct"
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
</code></pre><p><strong>予防</strong>:_</p><pre><code class="language-yaml"># Configure Patroni to prevent split-brain
bootstrap:
  dcs:
    # Primary loses leader lock → immediately demote
    ttl: 30
    retry_timeout: 10
    
  postgresql:
    parameters:
      # Prevent writes if not sure about leadership
      synchronous_commit: 'remote_apply'  # Requires sync replica
</code></pre><h2 id="6-split-brain-prevention-and-recovery">6。スプリット ブレインの予防と回復</h2><h3 id="61-how-patroni-prevents-split-brain">6.1。 Patroni によるスプリット ブレインの防止方法</h3><p><strong>メカニズム: DCS リーダー ロック</strong></p><pre><code class="language-text">Primary MUST hold leader lock in DCS:

If primary loses DCS connection:
  1. Cannot renew leader lock
  2. TTL expires (e.g., 30 seconds)
  3. Primary DEMOTES itself (becomes read-only)
  4. Replicas detect no leader
  5. Election begins

Key: Primary NEVER operates without DCS lock ✅
</code></pre><p><strong>コード フロー(疑似)</strong>:</p><pre><code class="language-python">while True:
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
</code></pre><h3 id="62-fencing-mechanisms">6.2。フェンシングメカニズム_</h3><p><strong>PostgreSQL レベルのフェンシング</strong>:</p><pre><code class="language-sql">-- When demoted, set read-only
ALTER SYSTEM SET default_transaction_read_only = 'on';
SELECT pg_reload_conf();

-- All new transactions will fail:
-- ERROR: cannot execute INSERT in a read-only transaction
</code></pre><p><strong>OS レベルのフェンシング(上級)</strong>:</p><pre><code class="language-bash"># STONITH (Shoot The Other Node In The Head)
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
</code></pre><h3 id="63-scenario-recover-from-split-brain">6.3。シナリオ: スプリット ブレインからの回復_</h3><p><strong>検出</strong>:_</p><pre><code class="language-bash"># Symptoms:
# - Multiple nodes claim to be primary
# - Patroni shows errors
# - Applications seeing inconsistent data

# Check cluster state
patronictl list postgres

# If you see multiple "Leader" or conflicts:
# SPLIT-BRAIN DETECTED! ⚠️
</code></pre><p><strong>回復ステップ_</strong>:</p><pre><code class="language-bash"># Step 1: STOP ALL NODES immediately
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
</code></pre><h2 id="7-monitoring-node-recovery">7。ノード回復のモニタリング_</h2><h3 id="71-key-metrics">7.1。主要な指標_</h3><pre><code class="language-sql">-- Replication status
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
</code></pre><h3 id="72-patroni-rest-api-monitoring">7.2。 Patroni REST API モニタリング</h3><pre><code class="language-bash"># Check node status
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
</code></pre><h3 id="73-alerting-on-recovery-issues">7.3。回復の問題に関する警告</h3><pre><code class="language-yaml"># Prometheus alert
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
</code></pre><h2 id="8-best-practices">8。ベスト プラクティス</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>wal_log_hints を有効にする</strong>&nbsp;- pg_rewind に必須</li><li><strong>回復を定期的にテスト</strong>&nbsp;- 毎月の訓練</li><li><strong>タイムラインを監視</strong>&nbsp;- アラート分岐</li><li><strong>バックアップを用意してください</strong>&nbsp;- 危険な操作の前に</li><li><strong>手順を文書化__HTMLTAG_472___&nbsp;-ランブック_</li><li><strong>Patroni 自動回復を使用</strong>&nbsp;- 手動による介入を軽減_</li><li><strong>回復後に検証</strong>&nbsp;- テストレプリケーション、クエリ</li><li><strong>DCS を健全に保つ</strong>&nbsp;- etcd クラスターが重要</li><li><strong>すべてをログに記録</strong>&nbsp;- 監査証跡インシデント_</li><li><strong>スプリットブレインリカバリの練習</strong>&nbsp;- 必要ないことを願っていますが、準備はしておいてください</li></ol><h3 id="%E2%9D%8C-dont">❌しないでください_</h3><ol><li><strong>wal_log_hints をスキップしないでください</strong>&nbsp;- pg_rewind は失敗します_</li><li><strong>_自動回復を想定しないでください動作_</strong>&nbsp;- テストしてください!</li><li><strong>タイムラインを無視しないでください</strong>&nbsp;- 重大な問題_</li><li><strong>回復中は手動で昇格しないでください</strong>&nbsp;- Patroni ハンドル_</li><li><strong>バックアップせずにデータを削除しないでください</strong>&nbsp;- 分岐したデータが重要である可能性があります</li><li><strong>スプリットブレイン クラスターを実行しないでください</strong>&nbsp;- 修正すぐに</li><li><strong>コールバックを忘れない</strong>&nbsp;- フェンシング防止スプリットブレイン_</li><li><strong>再初期化を過度に自動化しない</strong>&nbsp;- リスクデータ損失_</li></ol><h2 id="9-lab-exercises">9。ラボ演習</h2><h3 id="lab-1-auto-rejoin-after-clean-shutdown">ラボ 1: クリーン シャットダウン後の自動再参加</h3><p><strong>タスク</strong>:</p><ol><li>1 つのレプリカを停止します:&nbsp;<code>sudo systemctl stop patroni</code></li><li>プライマリを変更</li><li>レプリカを開始:&nbsp;<code>sudo systemctl start patroni_</code></li><li>自動再参加と遅延を確認するキャッチアップ</li><li>回復の時間を計る_</li></ol><h3 id="lab-2-pgrewind-after-simulated-failover">ラボ 2: シミュレーション後の pg_rewindフェイルオーバー</h3><p><strong>タスク</strong>:</p><ol><li>現在のプライマリを記録</li><li>プライマリを手動で停止:&nbsp;<code>sudo systemctl stop patroni_</code></li><li>フェールオーバーが完了するまで待ちます</li><li>古いプライマリを開始します (自動巻き戻されるはずです)</li><li>古いプライマリがレプリカとして再結合していることを確認します_</li><li>タイムラインを確認します増分_</li></ol><h3 id="lab-3-full-rebuild-with-pgbasebackup">ラボ 3: pg_basebackup を使用した完全な再構築_</h3><p><strong>タスク</strong>:</p><ol><li>レプリカの停止_</li><li>データ ディレクトリの削除:&nbsp;<code>sudo rm -rf /var/lib/postgresql/18/data/*</code></li><li>プライマリから pg_basebackup を手動で実行_</li><li>レプリケーションを開始_</li><li>レプリケーションが復元されたことを確認</li><li>_リビルドを測定する時間</li></ol><h3 id="lab-4-patroni-reinit-command">ラボ 4: Patroni 再初期化コマンド</h3><p><strong>タスク</strong>:</p><ol><li>使用<code>patronictl postgres ノード 3 を再起動</code></li><li>プロセス中のログを監視_</li><li>自動再構築を確認_</li><li>時間と手動 pg_basebackup の比較</li></ol><h3 id="lab-5-timeline-divergence-simulation">ラボ 5: タイムライン分岐シミュレーション</h3><p><strong>タスク</strong>:</p><ol><li>ネットワークパーティション(iptables)の作成</li><li>フェイルオーバーを待機_</li><li>_手動で昇格古いプライマリ (強制スプリット ブレイン)</li><li>両方の「プライマリ」に異なるデータを書き込む</li><li>ネットワークを復元_</li><li>競合検出を監視</li><li>リカバリを実践する手順</li></ol><h2 id="10-troubleshooting">10。トラブルシューティング</h2><h3 id="issue-pgrewind-fails">問題: pg_rewind が失敗する</h3><p><strong>エラー</strong>:&nbsp;<code>pg_rewind: 致命的: 共通のものが見つかりませんでした祖先</code></p><p><strong>原因</strong>: wal_log_hints が有効になっていない、またはデータが多すぎる</p><p><strong>解決策</strong>:</p><pre><code class="language-bash"># Check wal_log_hints
sudo -u postgres psql -c "SHOW wal_log_hints;"

# If off, enable:
sudo -u postgres psql -c "ALTER SYSTEM SET wal_log_hints = on;"
sudo systemctl restart postgresql

# If still fails, use pg_basebackup instead
patronictl reinit postgres node1
</code></pre><h3 id="issue-replica-stuck-in-recovery">問題: レプリカがリカバリ中に停止</h3><p><strong>症状</strong>_: レプリカが表示される「実行中」だが遅延が大きい。</p><p><strong>診断</strong>:</p><pre><code class="language-bash"># Check replication status
sudo -u postgres psql -h 10.0.1.11 -c "
  SELECT * FROM pg_stat_replication;
"

# Check replica logs
sudo journalctl -u postgresql -n 100
</code></pre><p><strong>一般的な原因</strong>:</p><ul><li>_WAL受信機のクラッシュ</li><li>ネットワークの問題_</li><li>レプリカのディスクがいっぱい</li><li>アーカイブの復元エラー_</li></ul><p><strong>解決策</strong>:</p><pre><code class="language-bash"># Restart replication
sudo systemctl restart patroni

# If persists, reinit
patronictl reinit postgres node3
</code></pre><h3 id="issue-cannot-connect-after-recovery">問題:リカバリ_</h3><p><strong>エラー</strong>:&nbsp;<code>FATAL: データベース システムが起動中</code></p><p><strong>原因</strong>: PostgreSQL がまだ再生中WAL.</p><p><strong>解決策</strong>: 回復が完了するまで待つか、ログでエラーを確認してください。</p><pre><code class="language-bash"># Check recovery progress
sudo -u postgres psql -h 10.0.1.13 -c "
  SELECT pg_is_in_recovery(),
         pg_last_wal_receive_lsn(),
         pg_last_wal_replay_lsn();
"
</code></pre><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11。概要</h2><h3 id="recovery-methods-summary">回復方法の概要</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">方法</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">速度</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">データ損失</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">ユースケース</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">_自動再参加</td><td style="padding: 5px 10px;">最速</td><td style="padding: 5px 10px;">なし</td><td style="padding: 5px 10px;">クリーンなシャットダウン/再起動</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">pg_rewind___HTMLTAG_7 32___<td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">高速_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">なし</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">タイムライン相違</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">pg_basebackup</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">_遅い</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">なし</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">破損、重大発散</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">手動回復</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">変動</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">可能</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">スプリットブレイン、複雑問題_</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="key-concepts">重要な概念</h3><p>✅&nbsp;<strong>自動再参加</strong>&nbsp;- Patroni はクリーン リカバリを処理します自動的に_</p><p>✅&nbsp;<strong>pg_rewind</strong>&nbsp;- タイムラインの分岐後に再同期します (必須wal_log_hints)</p><p>✅&nbsp;<strong>pg_basebackup</strong>&nbsp;- プライマリからの完全な再構築 (遅いが、安全)</p><p>✅&nbsp;<strong>タイムライン</strong>&nbsp;- 履歴ブランチ、増分オンフェイルオーバー</p><p>✅&nbsp;<strong>スプリットブレイン</strong>&nbsp;- 複数のプライマリ (DCS リーダー ロックにより防止)</p><h3 id="recovery-checklist">リカバリチェックリスト_</h3><ul><li>&nbsp;ノード障害が検出されました</li><li>&nbsp;必要な回復方法を決定_</li><li>&nbsp;分岐したデータをバックアップする任意)</li><li>&nbsp;リカバリの実行 (自動または手動)</li><li>&nbsp;タイムラインがクラスタと一致することを確認</li><li>&nbsp;レプリケーションストリーミングを確認</li><li>&nbsp;読み取り/書き込みをテストする操作</li><li>&nbsp;レプリケーションラグの確認</li><li>&nbsp;監視/ドキュメントの更新</li></ul><h3 id="next-steps">次のステップ</h3><p>レッスン 16 では、表紙&nbsp;<strong>バックアップとポイントインタイムリカバリ</strong>:</p><ul><li>pg_basebackup戦略</li><li>WALアーカイブ構成_</li><li>ポイントインタイムリカバリ(PITR)手順_</li><li>バックアップの自動化とスケジュール</li><li>災害復旧計画</li></ul>