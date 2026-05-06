---
id: 019c9617-fb8b-7187-aede-cf5e97de1cd3
title: 'レッスン 14: 計画的な切り替え'
slug: bai-14-switchover-co-ke-hoach-planned-switchover
description: 計画的なスイッチオーバーとフェイルオーバーの区別、スイッチオーバーのタイミング、ダウンタイムゼロのメンテナンス、および安全なスイッチオーバーの実践。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 3: クラスター管理'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9837" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9837)"/>

  <!-- Decorations -->
  <g>
    <circle cx="639" cy="167" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="678" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="717" cy="85" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="756" cy="44" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="795" cy="263" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="97" x2="1100" y2="177" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="127" x2="1050" y2="197" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1074.712812921102,231 1074.712812921102,263 1047,279 1019.287187078898,263 1019.287187078898,231 1047,215" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: 計画的な切り替え (計画</tspan>)
      <tspan x="60" dy="42">切り替え)</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Patroni と PostgreSQL の高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: クラスター管理__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標</h2><p>このレッスンの後、次のことを学習します:</p><ul><li>スイッチオーバーとフェイルオーバーを区別する_</li><li>計画されたスイッチオーバーを完全に安全に実装する</li><li>グレースフルと即時を理解するスイッチオーバー</li><li>メンテナンス時のダウンタイムを最小限に抑える</li><li>ローリングアップデートのためのスイッチオーバーを自動化</li><li>運用環境でのスイッチオーバーを処理</li></ul><h2 id="1-switchover-overview">1。切り替えの概要</h2><h3 id="11-switchover-l%C3%A0-g%C3%AC">1.1。スイッチオーバーとは何ですか?</h3><p><strong>スイッチオーバー</strong>&nbsp;=&nbsp;<strong>計画</strong>&nbsp;レプリカをプライマリにプロモートします。</p><p><strong>比較フェイルオーバー</strong>:</p>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">アスペクト</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_フェイルオーバー</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_スイッチオーバー___HTMLTAG_1 08___</tr></thead><tbody><tr><td style="padding: 5px 10px;"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">_トリガー</strong></td><td style="padding: 5px 10px;">主な障害 (計画外)</td><td style="padding: 5px 10px;">手動/スケジュール済み(予定)</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">ダウンタイム</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">30-60秒</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">0-10秒_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">データ損失</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">可能(非同期の場合)</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ゼロ(制御)</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">コントロール___HTMLTAG_145_ __</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">自動_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">手動/スクリプト</td>___HTMLTA G_151___<tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><strong class="sc-jzJRlG fjmzee" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word;">タイミング</strong></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">非発令可能_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">_予定</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="12-khi-n%C3%A0o-c%E1%BA%A7n-switchover">1.2.いつ切り替える必要がありますか?_</h3><p><strong>一般的なシナリオ</strong>:</p><h4 id="a-hardware-maintenance">A。ハードウェアのメンテナンス_</h4><pre><code class="language-text">Scenario: Need to replace failing disk on primary server
  → Switchover to replica
  → Perform maintenance on old primary
  → Keep as replica or switchover back
</code></pre><h4 id="b-software-upgrades">B。ソフトウェアのアップグレード_</h4><pre><code class="language-text">Scenario: OS kernel update requires reboot
  → Switchover to replica
  → Update &amp; reboot old primary
  → Verify, then switchover back (optional)
</code></pre><h4 id="c-database-migration">C。データベースの移行_</h4><pre><code class="language-text">Scenario: Move database to larger server
  → Add new server as replica
  → Switchover to new server
  → Remove old server
</code></pre><h4 id="d-datacenter-migration">D。データセンターの移行</h4><pre><code class="language-text">Scenario: Move from DC1 to DC2
  → Setup replicas in DC2
  → Switchover primary to DC2
  → Decommission DC1 nodes
</code></pre><h4 id="e-testing">E。 </h4><pre><code class="language-text">Scenario: Test HA readiness before production
  → Perform switchover in staging
  → Validate application behavior
  → Measure downtime
</code></pre><h3 id="13-switchover-benefits">1.3をテストしています。切り替えのメリット</h3><p>✅&nbsp;<strong>データ損失ゼロ</strong>&nbsp;- 切り替え前にコミットされたすべてのトランザクション</p><p>✅&nbsp;<strong>制御済みタイミング_</strong>&nbsp;- メンテナンス期間中</p><p>✅&nbsp;<strong>リスクが低い</strong>&nbsp;- 調整されテストされたプロセス</p><p>✅&nbsp;<strong>最小限ダウンタイム</strong>&nbsp;- フェイルオーバーの場合は 0 ～ 10 秒、30 ～ 60 秒</p><p>✅&nbsp;<strong>リバーシブル</strong>&nbsp;- 問題が発生した場合は元に戻すことができます</p><h2 id="2-types-of-switchover">2。スイッチオーバーのタイプ</h2><h3 id="21-graceful-switchover-default">2.1。グレースフル スイッチオーバー (デフォルト)</h3><p><strong>プロセス</strong>:</p>___CODEBLOCK_5 ___<p><strong>コマンド</strong>:</p><pre><code class="language-bash">patronictl switchover postgres
</code></pre><h3 id="22-immediate-switchover">2.2。即時切り替え</h3><p><strong>プロセス</strong>:</p>___CODEBLOCK_7 ___<p><strong>コマンド</strong>:</p><pre><code class="language-bash">patronictl switchover postgres --force
</code></pre><h3 id="23-scheduled-switchover">2.3。スケジュールされたスイッチオーバー</h3><p><strong>プロセス</strong>:</p>___CODEBLOCK_ 9___<p><strong>コマンド</strong>:</p><pre><code class="language-bash">patronictl switchover postgres --scheduled 2024-11-25T02:00:00
</code></pre><h2 id="3-switchover-prerequisites">3。切り替えの前提条件</h2><h3 id="31-cluster-health-check">3.1。クラスターのヘルスチェック</h3><pre><code class="language-bash"># 1. Verify all nodes running
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
</code></pre><h3 id="32-replication-lag-check">3.2。レプリケーションラグチェック</h3><pre><code class="language-bash"># Check lag on all replicas
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
</code></pre><h3 id="33-target-candidate-check">3.3。ターゲット候補チェック_</h3><pre><code class="language-bash"># Check if target has nofailover tag
patronictl show-config postgres | grep -A10 "tags:"

# Target node should have:
tags:
  nofailover: false  # ✅ Can be promoted
  priority: 100      # Higher = preferred

# NOT:
tags:
  nofailover: true   # ❌ Cannot be promoted
</code></pre><h3 id="34-connection-availability">3.4。接続の可用性</h3><pre><code class="language-bash"># Test connection to target
psql -h 10.0.1.12 -U postgres -c "SELECT 1;"

# Test application user
psql -h 10.0.1.12 -U app_user -d myapp -c "SELECT 1;"
</code></pre><h2 id="4-performing-switchover">4。スイッチオーバーの実行</h2><h3 id="41-interactive-switchover-recommended">4.1。対話型スイッチオーバー (推奨)</h3><p><strong>ステップバイステップ</strong>:</p><pre><code class="language-bash"># 1. Initiate switchover
patronictl switchover postgres

# Patroni prompts:
</code></pre>_ __CODEBLOCK_16___<p><strong>出力</strong>:</p><pre><code class="language-text">2024-11-25 10:30:00.123 UTC [INFO]: Switching over from node1 to node2
2024-11-25 10:30:02.456 UTC [INFO]: Waiting for replica node2 to catch up...
2024-11-25 10:30:02.789 UTC [INFO]: Replica node2 lag: 0 bytes ✅
2024-11-25 10:30:03.012 UTC [INFO]: Promoting node2...
2024-11-25 10:30:05.234 UTC [INFO]: node2 promoted successfully
2024-11-25 10:30:06.567 UTC [INFO]: Demoting node1...
2024-11-25 10:30:08.890 UTC [INFO]: node1 reconfigured as replica
2024-11-25 10:30:10.123 UTC [INFO]: Switchover completed ✅

Total time: 10 seconds
</code></pre><h3 id="42-non-interactive-switchover">4.2。非対話型スイッチオーバー</h3><p><strong>直接コマンド</strong>:</p><pre><code class="language-bash"># Specify master and candidate explicitly
patronictl switchover postgres \
  --master node1 \
  --candidate node2 \
  --force

# --force: Skip confirmation prompt
</code></pre><h3 id="43-scheduled-switchover">4.3。スケジュールされたスイッチオーバー</h3><p><strong>メンテナンス期間のスケジュール</strong>:</p><pre><code class="language-bash"># Schedule switchover at 2 AM
patronictl switchover postgres \
  --master node1 \
  --candidate node2 \
  --scheduled "2024-11-25T02:00:00"

# Patroni will automatically execute at scheduled time
</code></pre><p><strong>スケジュールを確認スイッチオーバー_</strong>:___HTMLTAG_272__CODEBLOCK_20___<p><strong>スケジュールされたスイッチオーバーをキャンセル</strong>:___HTMLTAG_276__CODEBLOCK_21___<h3 id="44-switchover-with-rest-api">4.4。 REST API による切り替え_</h3><p><strong>API 経由のトリガー</strong>:</p><pre><code class="language-bash"># POST to current leader
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
</code></pre><h2 id="5-switchover-timeline">5。切り替えタイムライン_</h2><h3 id="51-detailed-flow">5.1。詳細なフロー_</h3><pre><code class="language-text">T+0s: INITIATE SWITCHOVER
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
</code></pre><h3 id="52-what-happens-to-active-connections">5.2。アクティブな接続はどうなりますか?_</h3><p><strong>切り替え中</strong>:</p><pre><code class="language-text">Client connections to old primary (node1):

Option A: Graceful (default)
  - New connections: REJECTED
  - Active queries: ALLOWED TO COMPLETE (timeout: 30s)
  - Idle connections: TERMINATED after queries done

Option B: Force (--force)
  - All connections: TERMINATED IMMEDIATELY
  - Active queries: ROLLBACK
  - Faster but risky ⚠️
</code></pre><p><strong>アプリケーションの動作</strong>:</p><pre><code class="language-python"># Well-written application with retry logic
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
</code></pre><h2 id="6-verification-after-switchover">6。切り替え後の検証</h2><h3 id="61-cluster-status">6.1。クラスターのステータス_</h3><pre><code class="language-bash">patronictl list postgres

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
</code></pre><h3 id="62-replication-status">6.2。レプリケーションステータス</h3><pre><code class="language-bash"># On new primary (node2)
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
</code></pre><h3 id="63-write-test">6.3。テスト_</h3><pre><code class="language-bash"># Insert on new primary
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
</code></pre><h3 id="64-timeline-verification">6.4を書き込みます。タイムラインの確認</h3><pre><code class="language-bash"># Check timeline on all nodes
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
</code></pre><h2 id="7-switchover-best-practices">7。切り替えのベスト プラクティス_</h2><h3 id="71-pre-switchover-checklist">7.1。切り替え前チェックリスト</h3><pre><code class="language-bash">#!/bin/bash
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
</code></pre><h3 id="72-minimize-downtime-strategies">7.2。ダウンタイムを最小限に抑える戦略_</h3><h4 id="a-connection-pooler">A。接続プーラー</h4><pre><code class="language-text">Use PgBouncer/HAProxy between app and database:

App → PgBouncer → Primary
              ↓
            Replicas

During switchover:
1. PgBouncer detects primary change
2. Reconnects to new primary automatically
3. Application sees minimal disruption
</code></pre><h4 id="b-read-replica-routing">B。リードレプリカのルーティング</h4><pre><code class="language-text">Route read queries to replicas during switchover:

- Write queries: Wait for new primary
- Read queries: Continue on replicas (may be slightly stale)

Result: Partial availability during switchover
</code></pre><h4 id="c-application-level-retry">C。アプリケーションレベルの再試行_</h4><pre><code class="language-python"># Implement exponential backoff
def execute_with_retry(query, max_retries=3):
    for i in range(max_retries):
        try:
            return execute_query(query)
        except OperationalError:
            if i == max_retries - 1:
                raise
            time.sleep(2 ** i)  # 1s, 2s, 4s
</code></pre><h3 id="73-communication-plan">7.3。コミュニケーション プラン_</h3><p><strong>切り替え前上</strong>:</p><pre><code class="language-text">T-24h: Announce maintenance window
  - Email: ops@, dev@, stakeholders
  - Slack: #incidents, #ops
  - Status page: Update with scheduled maintenance

T-1h: Reminder notification
  - Final checks
  - Confirm go/no-go

T-5min: Begin maintenance
  - Start switchover
  - Monitor dashboards
</code></pre><p><strong>切り替え中</strong>:</p><pre><code class="language-text">- Real-time updates in ops channel
- Monitor metrics (latency, error rate)
- Have rollback plan ready
</code></pre><p><strong>後切り替え_</strong>:_</p><pre><code class="language-text">- Verify all systems operational
- Post-switchover validation
- Update documentation
- Send completion notification
</code></pre><h2 id="8-troubleshooting-switchover">8。スイッチオーバーのトラブルシューティング</h2><h3 id="81-issue-switchover-command-hangs">8.1。問題: スイッチオーバー コマンドがハングします</h3><p><strong>症状</strong>:&nbsp;<code>patronictl スイッチオーバー</code>&nbsp; _</p><p><strong>診断</strong>:___HTMLTAG_346__CODEBLOCK_3 7___<p><strong>解決策</strong>:</p><pre><code class="language-bash"># Option 1: Wait for lag to catch up (recommended)
# Option 2: Use --force to skip wait (risk data loss)
# Option 3: Cancel and reschedule
Ctrl+C  # Cancel current switchover attempt
</code></pre><h3 id="82-issue-candidate-not-eligible">8.2。問題: 候補者は資格がありません</h3><p><strong>症状</strong>: エラー「候補者は資格がありません」</p><p><strong>診断</strong>:</p>___CODEBLOCK_3 9___<p><strong>解決策</strong>:</p><pre><code class="language-bash"># Remove nofailover tag
patronictl edit-config postgres

# Edit:
tags:
  nofailover: false  # Change to false

# Restart Patroni on node2
sudo systemctl restart patroni
</code></pre><h3 id="83-issue-old-primary-wont-demote">8.3。問題: 古いプライマリが降格しない</h3><p><strong>症状</strong>: 切り替えが失敗し、古いプライマリが引き続きリーダーになります。</p><p><strong>診断</strong>:___HTMLTAG_374__CODEBLOCK_41_ __<p><strong>解決策</strong>:</p><pre><code class="language-bash"># Force demote via REST API
curl -X POST http://10.0.1.11:8008/restart

# Or manually:
sudo -u postgres psql -h 10.0.1.11 -c "
  SELECT pg_terminate_backend(pid)
  FROM pg_stat_activity
  WHERE pid != pg_backend_pid();
"

sudo systemctl restart patroni
</code></pre><h3 id="84-issue-replication-broken-after-switchover">8.4。問題: スイッチオーバー後にレプリケーションが中断されました</h3><p><strong>症状</strong>: 古いプライマリが新しいプライマリからレプリケートされません。</p><p><strong>診断</strong>:___HTMLTAG_388__CODEBLOCK_4 3___<p><strong>解決策</strong>:</p><pre><code class="language-bash"># A. Restart Patroni (usually auto-fixes)
sudo systemctl restart patroni

# B. Manual reinit if needed
patronictl reinit postgres node1

# Patroni will:
# 1. Stop PostgreSQL on node1
# 2. Remove data directory
# 3. pg_basebackup from node2
# 4. Start as replica
</code></pre><h2 id="9-switchover-automation">9。スイッチオーバーの自動化</h2><h3 id="91-scripted-switchover">9.1。スクリプトによるスイッチオーバー</h3><pre><code class="language-bash">#!/bin/bash
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
</code></pre><h3 id="92-ansible-playbook">9.2。 Ansible プレイブック_</h3><pre><code class="language-yaml"># switchover.yml
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
</code></pre><p><strong>実行</strong>:_</p><pre><code class="language-bash">ansible-playbook switchover.yml
</code></pre><h3 id="93-cicd-integration">9.3。 CI/CD 統合</h3><pre><code class="language-yaml"># .github/workflows/db-maintenance.yml
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
</code></pre><h2 id="10-rolling-updates-with-switchover">10。スイッチオーバーによるローリング アップデート</h2><h3 id="101-update-strategy">10.1。更新戦略</h3><p><strong>シナリオ</strong>: PostgreSQL を 17 から更新 → 18.</p><p><strong>手順</strong>:</p><pre><code class="language-text">1. Update replica node3 (least critical)
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
</code></pre><h3 id="102-kernel-update-example">10.2。カーネル更新例_</h3><pre><code class="language-bash">#!/bin/bash
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
</code></pre><h2 id="11-lab-exercises">11。ラボ演習_</h2><h3 id="lab-1-basic-switchover">ラボ 1: 基本的な切り替え</h3><p><strong>タスク</strong>:</p><ol><li>現在のプライマリを確認する:&nbsp;<code>patronictl list_</code></li><li>スイッチオーバーの実行:&nbsp;<code>patronictl switchover postgres_</code></li><li>連続クエリ ループでダウンタイムを測定</li><li>新規確認トポロジ</li><li>文書の観察</li></ol><h3 id="lab-2-scheduled-switchover">ラボ 2: スケジュールされた切り替え</h3><p><strong>タスク</strong>:</p><ol><li>スケジュール2の切り替え今から数分_</li><li>待機期間中のログの監視</li><li>自動実行の観察</li><li>スケジュールされたスイッチオーバーのキャンセル (繰り返しおよびテストキャンセル)</li></ol><h3 id="lab-3-forced-vs-graceful">ラボ 3: 強制 vsグレースフル</h3><p><strong>タスク</strong>:</p><ol><li>長時間実行クエリの作成:&nbsp;<code>SELECT pg_sleep(300);</code></li><li>正常なスイッチオーバーを試行 (待機を観察)</li><li>--force を使用してキャンセルして再試行_</li><li>_動作とダウンタイム</li></ol><h3 id="lab-4-rolling-update-simulation">ラボ 4: ローリングアップデートのシミュレーション</h3><p><strong>タスク</strong>:</p><ol><li>3 ノードから開始クラスター_</li><li>「更新」ノード 3 (再起動によるシミュレート)</li><li>「更新」ノード 2</li><li>ノード 2 に切り替え_</li><li>「更新」ノード 1_</li><li>_すべてのノードを確認運用</li></ol><h3 id="lab-5-switchover-under-load">ラボ 5: 負荷時のスイッチオーバー</h3><p><strong>タスク</strong>:</p><ol><li>開始pgbench:&nbsp;<code>pgbench -c 10 -T 300</code></li><li>ロード中にスイッチオーバーを実行</li><li>pgbench 出力のエラーを分析____HTMLTAG_511__HTMLTAG_512___成功の計算レート_</li><li>接続プーラー (PgBouncer) を使用したテスト</li></ol><h2 id="12-t%E1%BB%95ng-k%E1%BA%BFt">12。概要</h2><h3 id="key-concepts">主要な概念</h3><p>✅&nbsp;<strong>スイッチオーバー</strong>&nbsp;= 計画された制御された役割Change_</p><p>✅&nbsp;<strong>Graceful</strong>&nbsp;= トランザクションを待機します (遅い、より安全)</p><p>✅&nbsp;<strong>即時</strong>&nbsp;= 強制終了 (高速、リスクが高い)</p><p>✅&nbsp;<strong>スケジュール済み</strong>&nbsp;= 特定の時間に自動化</p><p>✅&nbsp;<strong>ダウンタイムゼロ</strong>&nbsp;=適切なアーキテクチャで実現可能</p><h3 id="switchover-vs-failover">スイッチオーバーとフェイルオーバー</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_アスペクト_</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_スイッチオーバー</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">_フェイルオーバー</th>___HTMLT AG_553___</thead><tbody><tr><td style="padding: 5px 10px;">計画中</td><td style="padding: 5px 10px;">予定</td><td style="padding: 5px 10px;">計画外___HTMLTAG_562 ___</tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">コントロール</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">手動_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">_自動</td></tr>___HTML TAG_572___<td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ダウンタイム</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">0-10代</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">30-60代</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">データ損失</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">なし</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">可能</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">リバーシブル</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">はい</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">いいえ</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="best-practices">ベスト プラクティス</h3><ul><li>✅ 最初にステージングでテスト</li><li>✅ トラフィックの少ないウィンドウでスケジュールを設定_</li><li>✅ グレースフル モードを使用する(デフォルト)</li><li>✅ 切り替え前にラグ = 0 を確認</li><li>✅ プロセス中の監視</li><li>✅ ロールバック計画がある</li><li>✅ と通信する関係者_</li><li>✅ 文書化手順</li></ul><h3 id="next-steps">次のステップ_</h3><p>レッスン 15 では<strong>リカバリの失敗について説明しますノード_</strong>:</p><ul><li>フェイルオーバー後に古いプライマリに再参加</li><li>_pg_rewind の使用法とシナリオ_</li><li>_pg_basebackup による完全な再構築</li><li>_タイムライン相違解決_</li><li>スプリットブレイン回復</li></ul>