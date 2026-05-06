---
id: 019c9617-fbab-73c4-8dbe-d7e05b7e381a
title: 'レッスン 24: アップグレード戦略'
slug: bai-24-upgrade-strategies
description: PostgreSQL メジャー バージョン、Patroni バージョン、ゼロ ダウンタイム アップグレード手法、ロールバック手順、ラボの PG 17 から 18 へのアップグレード。
duration_minutes: 145
is_free: true
video_url: null
sort_order: 24
section_title: 'パート 5: セキュリティと機能強化'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3080" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3080)"/>

  <!-- Decorations -->
  <g>
    <circle cx="866" cy="148" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="632" cy="274" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="898" cy="140" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="664" cy="266" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="132" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="168" x2="1100" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="198" x2="1050" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.2390923627308,146.5 1005.2390923627308,189.5 968,211 930.7609076372692,189.5 930.7609076372692,146.5 968,125" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — レッスン 24</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 24: アップグレード戦略__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Patroni と PostgreSQL の高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: セキュリティと上級_</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標</h2><p>このレッスンの後、次のことを行います:_</p><ul><li>PostgreSQL メジャー バージョンのアップグレードを計画および実行_</li><li>ダウンタイムなしで Patroni をアップグレード</li><li>インプレースで pg_upgrade を使用するアップグレード</li><li>アップグレード用の論理レプリケーションを実装</li><li>失敗したアップグレードを安全にロールバック</li></ul><h2 id="1-upgrade-planning">1。アップグレード計画</h2><h3 id="11-pre-upgrade-checklist">1.1。アップグレード前チェックリスト</h3><pre><code class="language-text">☐ Review PostgreSQL release notes
☐ Check extension compatibility
☐ Test upgrade in staging environment
☐ Backup all data (full + WAL archive)
☐ Document current versions
☐ Schedule maintenance window
☐ Notify stakeholders
☐ Prepare rollback plan
☐ Verify disk space (need 2x current data size)
☐ Check for deprecated features in new version
☐ Update monitoring/alerting
☐ Prepare downtime communication
</code></pre><h3 id="12-version-compatibility-matrix">1.2。バージョン互換性マトリックス</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">From → To</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">方法</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">ダウンタイム</th>___HTMLTAG_97 ___リスク</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">17 → 18</td><td style="padding: 5px 10px;">pg_upgrade</td><td style="padding: 5px 10px;">分___HTMLTAG _108___<td style="padding: 5px 10px;">低</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">15 → 18</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">pg_upgrade</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">分___HTMLTAG_ 118___<td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">中</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">12 → 18</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">論理的レプリケーション</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">なし</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">中</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">9.6 → 18</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ダンプ/復元</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">時間</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">高</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="13-document-current-state">1.3.現在の状態</h3><pre><code class="language-bash"># PostgreSQL version
psql -c "SELECT version();"

# Installed extensions
psql -c "\dx"

# Database sizes
psql -c "SELECT datname, pg_size_pretty(pg_database_size(datname)) FROM pg_database;"

# Patroni version
patronictl version

# etcd version
etcdctl version
</code></pre><h2 id="2-postgresql-minor-version-upgrade">2 を文書化します。 PostgreSQL マイナー バージョン アップグレード</h2><h3 id="21-minor-upgrade-process-eg-180-%E2%86%92-181">2.1。マイナー アップグレード プロセス (例: 18.0 → 18.1)</h3><pre><code class="language-bash"># Minor upgrades are easy - just update packages

# On each node (one at a time):

# 1. Update packages
sudo apt-get update
sudo apt-get install --only-upgrade postgresql-18

# 2. Restart Patroni (will restart PostgreSQL)
sudo systemctl restart patroni

# 3. Verify new version
psql -c "SELECT version();"

# Patroni handles failover automatically during restart
</code></pre><h3 id="22-rolling-minor-upgrade">2.2。ローリング マイナー アップグレード_</h3><pre><code class="language-bash"># Upgrade replicas first
for node in node2 node3; do
  echo "Upgrading $node..."
  ssh $node "sudo apt-get update &amp;&amp; sudo apt-get install -y --only-upgrade postgresql-18"
  ssh $node "sudo systemctl restart patroni"
  sleep 30  # Wait for replica to catch up
done

# Switchover to upgraded replica
patronictl switchover postgres-cluster --leader node1 --candidate node2

# Upgrade old leader (now replica)
ssh node1 "sudo apt-get update &amp;&amp; sudo apt-get install -y --only-upgrade postgresql-18"
ssh node1 "sudo systemctl restart patroni"
</code></pre><h2 id="3-postgresql-major-version-upgrade-with-pgupgrade">3。 pg_upgrade</h2><h3 id="31-architecture">3.1 による PostgreSQL メジャー バージョン アップグレード。アーキテクチャ_</h3><pre><code class="language-text">Before (PostgreSQL 17):
  node1 (17, Leader)
  node2 (17, Replica)
  node3 (17, Replica)

During upgrade:
  node1 (17, Leader) ← Still serving traffic
  node2 (18, NEW) ← Upgrading
  node3 (17, Replica)

After upgrade:
  node1 (18, Leader) ← Upgraded
  node2 (18, Replica)
  node3 (18, Replica)
</code></pre><h3 id="32-install-new-postgresql-version">3.2。新しい PostgreSQL バージョン</h3><pre><code class="language-bash"># Install PostgreSQL 18 alongside 17
sudo apt-get install -y postgresql-18 postgresql-18-contrib

# Both versions now installed:
# /usr/lib/postgresql/17/
# /usr/lib/postgresql/18/
</code></pre><h3 id="33-prepare-for-upgrade-node2first-replica">3.3 をインストールします。アップグレードの準備をします (ノード 2 - 最初のレプリカ)</h3><pre><code class="language-bash"># 1. Stop Patroni on node2
sudo systemctl stop patroni

# 2. Create new data directory for v18
sudo mkdir -p /var/lib/postgresql/18/data
sudo chown postgres:postgres /var/lib/postgresql/18/data

# 3. Initialize new cluster
sudo -u postgres /usr/lib/postgresql/18/bin/initdb \
  -D /var/lib/postgresql/18/data \
  --encoding=UTF8 \
  --data-checksums

# 4. Run pg_upgrade
sudo -u postgres /usr/lib/postgresql/18/bin/pg_upgrade \
  --old-datadir=/var/lib/postgresql/17/data \
  --new-datadir=/var/lib/postgresql/18/data \
  --old-bindir=/usr/lib/postgresql/17/bin \
  --new-bindir=/usr/lib/postgresql/18/bin \
  --check  # Dry run first!

# If check passes, run actual upgrade:
sudo -u postgres /usr/lib/postgresql/18/bin/pg_upgrade \
  --old-datadir=/var/lib/postgresql/17/data \
  --new-datadir=/var/lib/postgresql/18/data \
  --old-bindir=/usr/lib/postgresql/17/bin \
  --new-bindir=/usr/lib/postgresql/18/bin \
  --link  # Use hard links (faster)

# Expected output:
# Performing Consistency Checks
# -----------------------------
# ...
# Upgrade Complete
# ----------------
</code></pre><h3 id="34-update-patroni-configuration-for-v18">3.4。 v18</h3><pre><code class="language-yaml"># /etc/patroni/patroni.yml
postgresql:
  bin_dir: /usr/lib/postgresql/18/bin  # Changed from 17
  data_dir: /var/lib/postgresql/18/data  # Changed from 17
  # ... rest of config
</code></pre><pre><code class="language-bash"># Start Patroni with new version
sudo systemctl start patroni

# Verify node2 is now running v18
psql -h node2 -U postgres -c "SELECT version();"
</code></pre><h3 id="35-upgrade-remaining-nodes">3.5 の Patroni 設定を更新します。残りのノード_</h3><pre><code class="language-bash"># Repeat process for node3
ssh node3 "sudo systemctl stop patroni"
ssh node3 "# ... same pg_upgrade steps ..."
ssh node3 "sudo systemctl start patroni"

# Finally, upgrade node1 (current leader)
# Switchover to node2 first
patronictl switchover postgres-cluster --leader node1 --candidate node2

# Now upgrade node1
ssh node1 "sudo systemctl stop patroni"
ssh node1 "# ... same pg_upgrade steps ..."
ssh node1 "sudo systemctl start patroni"

# All nodes now on v18!
patronictl list
</code></pre><h3 id="36-post-upgrade-tasks">3.6 をアップグレードします。アップグレード後のタスク_</h3><pre><code class="language-bash"># Run generated optimize scripts
sudo -u postgres ./analyze_new_cluster.sh
sudo -u postgres ./reindex_hash.sh  # If upgrading from &lt; 10

# Update extensions
psql -c "ALTER EXTENSION pg_stat_statements UPDATE;"

# Vacuum analyze all databases
vacuumdb --all --analyze-in-stages

# Remove old cluster (after verifying everything works!)
# sudo -u postgres ./delete_old_cluster.sh
</code></pre><h2 id="4-zero-downtime-upgrade-with-logical-replication">4。論理レプリケーションによるダウンタイムゼロのアップグレード_</h2><h3 id="41-architecture">4.1。アーキテクチャ_</h3><pre><code class="language-text">Production (v17):
  node1 (v17, Leader) ← Serving traffic
    ↓ Logical replication
New cluster (v18):
  node4 (v18, Leader) ← Receiving changes
  node5 (v18, Replica)
  
After cutover:
  Application → node4 (v18) ← New primary
</code></pre><h3 id="42-setup-new-v18-cluster">4.2。新しい v18 クラスター_</h3><pre><code class="language-bash"># Install PostgreSQL 18 on new servers
# Setup Patroni cluster (node4, node5, node6)
# See previous lessons for installation

# Verify new cluster
patronictl -c /etc/patroni/patroni-v18.yml list
</code></pre><h3 id="43-create-publication-on-v17-source">4.3 をセットアップします。 v17 (ソース)</h3><pre><code class="language-sql">-- On node1 (v17 leader)
CREATE PUBLICATION pg17_to_pg18 FOR ALL TABLES;

-- Or specific tables:
-- CREATE PUBLICATION pg17_to_pg18 FOR TABLE users, orders, products;

-- Verify
SELECT * FROM pg_publication;
</code></pre><h3 id="44-create-subscription-on-v18-target">4.4 でパブリケーションを作成します。 v18 (ターゲット)</h3><pre><code class="language-sql">-- On node4 (v18 leader)
CREATE SUBSCRIPTION pg18_from_pg17
CONNECTION 'host=node1 port=5432 dbname=myapp user=replicator password=rep_pass'
PUBLICATION pg17_to_pg18
WITH (copy_data = true, create_slot = true);

-- Monitor initial sync
SELECT * FROM pg_stat_subscription;

-- Wait for initial data copy to complete
-- subname     | pg18_from_pg17
-- received_lsn | 0/3000000
-- ...
</code></pre><h3 id="45-monitor-replication-lag">4.5 でサブスクリプションを作成します。レプリケーションの遅延_</h3><pre><code class="language-sql">-- On v17 (source)
SELECT slot_name, active, restart_lsn, confirmed_flush_lsn
FROM pg_replication_slots
WHERE slot_name LIKE '%pg18%';

-- On v18 (target)
SELECT subname, 
       received_lsn, 
       latest_end_lsn,
       pg_size_pretty(pg_wal_lsn_diff(latest_end_lsn, received_lsn)) AS lag
FROM pg_stat_subscription;
</code></pre><h3 id="46-cutover-procedure">4.6を監視します。カットオーバー手順_</h3><pre><code class="language-bash"># 1. Stop writes to v17 (put app in maintenance mode)
# Or set database to read-only:
psql -h node1 -U postgres -c "ALTER SYSTEM SET default_transaction_read_only = on;"
psql -h node1 -U postgres -c "SELECT pg_reload_conf();"

# 2. Wait for replication to catch up
psql -h node4 -U postgres -c "SELECT pg_size_pretty(pg_wal_lsn_diff(latest_end_lsn, received_lsn)) FROM pg_stat_subscription;"
# Should be 0 bytes

# 3. Disable subscription on v18
psql -h node4 -U postgres -c "ALTER SUBSCRIPTION pg18_from_pg17 DISABLE;"

# 4. Drop subscription (optional, after confirming everything works)
# psql -h node4 -U postgres -c "DROP SUBSCRIPTION pg18_from_pg17;"

# 5. Update application connection strings to point to node4

# 6. Enable writes on v18
psql -h node4 -U postgres -c "ALTER SYSTEM SET default_transaction_read_only = off;"
psql -h node4 -U postgres -c "SELECT pg_reload_conf();"

# 7. Verify application works on v18

# 8. Keep v17 cluster running for rollback (1-2 weeks)
</code></pre><h2 id="5-patroni-version-upgrade">5。 Patroni バージョン アップグレード</h2><h3 id="51-check-compatibility">5.1。互換性を確認してください_</h3><pre><code class="language-bash"># Check current Patroni version
patronictl version

# Check PostgreSQL compatibility
# Patroni 3.2.0+ supports PostgreSQL 18
# See: https://github.com/zalando/patroni/releases
</code></pre><h3 id="52-upgrade-patroni-python-package">5.2。 Patroni のアップグレード (Python パッケージ)</h3><pre><code class="language-bash"># On each node:

# 1. Upgrade via pip
sudo pip3 install --upgrade patroni[etcd]

# Or specific version:
# sudo pip3 install patroni[etcd]==3.2.2

# 2. Verify new version
patronictl version

# 3. Restart Patroni service
sudo systemctl restart patroni

# No downtime - Patroni handles failover automatically
</code></pre><h3 id="53-rolling-patroni-upgrade">5.3。ローリング パトローニのアップグレード_</h3><pre><code class="language-bash"># Upgrade replicas first
for node in node2 node3; do
  echo "Upgrading Patroni on $node..."
  ssh $node "sudo pip3 install --upgrade patroni[etcd]"
  ssh $node "sudo systemctl restart patroni"
  sleep 10
done

# Switchover to upgraded replica
patronictl switchover postgres-cluster --leader node1 --candidate node2

# Upgrade old leader
ssh node1 "sudo pip3 install --upgrade patroni[etcd]"
ssh node1 "sudo systemctl restart patroni"
</code></pre><h2 id="6-etcd-upgrade">6。 etcd のアップグレード_</h2><h3 id="61-etcd-minor-upgrade">6.1。 etcd のマイナー アップグレード</h3><pre><code class="language-bash"># On each etcd node:
sudo systemctl stop etcd
sudo apt-get update
sudo apt-get install --only-upgrade etcd
sudo systemctl start etcd

# Verify cluster health
etcdctl endpoint health
</code></pre><h3 id="62-etcd-major-upgrade-eg-34-%E2%86%92-35">6.2。 etcd メジャー アップグレード (例: 3.4 → 3.5)</h3><pre><code class="language-bash"># Follow official etcd upgrade guide
# https://etcd.io/docs/latest/upgrades/

# Key steps:
# 1. Backup etcd data
etcdctl snapshot save backup.db

# 2. Upgrade one member at a time
# 3. Verify cluster health after each upgrade
# 4. Update Patroni to use new etcd API version
</code></pre><h2 id="7-rollback-strategies">7。ロールバック戦略</h2><h3 id="71-rollback-pgupgrade">7.1。 pg_upgrade</h3><pre><code class="language-bash"># Before deleting old cluster, you can rollback

# 1. Stop Patroni
sudo systemctl stop patroni

# 2. Restore old configuration
# /etc/patroni/patroni.yml
postgresql:
  bin_dir: /usr/lib/postgresql/17/bin  # Back to 17
  data_dir: /var/lib/postgresql/17/data

# 3. Start Patroni
sudo systemctl start patroni

# Old cluster resumes operation
</code></pre><h3 id="72-rollback-logical-replication">7.2 をロールバックします。論理レプリケーションをロールバック</h3><pre><code class="language-bash"># If cutover to v18 fails, rollback to v17

# 1. Stop application

# 2. Set v17 to read-write
psql -h node1 -U postgres -c "ALTER SYSTEM SET default_transaction_read_only = off;"
psql -h node1 -U postgres -c "SELECT pg_reload_conf();"

# 3. Update application connection strings to v17

# 4. Resume normal operations

# Note: Any writes to v18 during cutover will be LOST!
# Consider setting up reverse replication v18 → v17 if needed
</code></pre><h3 id="73-rollback-patroni-upgrade">7.3。 Patroni のアップグレード</h3><pre><code class="language-bash"># Downgrade Patroni if upgrade causes issues

sudo pip3 install patroni[etcd]==3.1.2  # Previous version
sudo systemctl restart patroni
</code></pre><h2 id="8-testing-upgrades">8 をロールバックします。アップグレードのテスト_</h2><h3 id="81-staging-environment-test">8.1。ステージング環境テスト</h3><pre><code class="language-bash"># 1. Clone production to staging
pg_basebackup -h prod-leader -D /var/lib/postgresql/staging -X stream

# 2. Perform upgrade in staging
# ... follow upgrade procedures ...

# 3. Run application tests
# ... smoke tests, integration tests ...

# 4. Benchmark performance
pgbench -i -s 100 myapp
pgbench -c 10 -j 2 -t 1000 myapp

# 5. Document issues and timings
</code></pre><h3 id="82-upgrade-rehearsal">8.2。アップグレードのリハーサル</h3><pre><code class="language-bash"># Practice upgrade multiple times
# Time each step
# Identify bottlenecks
# Refine procedures

# Example timing log:
# Step 1: Stop Patroni - 5 seconds
# Step 2: pg_upgrade --check - 30 seconds
# Step 3: pg_upgrade - 10 minutes
# Step 4: Start Patroni - 15 seconds
# Step 5: Replication catchup - 2 minutes
# Total: ~13 minutes
</code></pre><h2 id="9-best-practices">9。ベスト プラクティス</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>最初にステージングでテスト</strong>&nbsp;- 複数回</li><li><strong>バックアップすべて_</strong>&nbsp;- 完全バックアップ + WAL アーカイブ_</li><li><strong>pg_upgrade --check</strong>&nbsp;- 問題を早期に発見</li><li><strong>文書化手順</strong>&nbsp;-ステップバイステップのランブック_</li><li><strong>メンテナンス期間のスケジュール</strong>&nbsp;- オフピーク時間_</li><li><strong>注意深く監視</strong>&nbsp;- メンテナンス中およびメンテナンス後アップグレード</li><li><strong>古いバージョンを保持</strong>&nbsp;- 1～2 週間削除しないでください</li><li><strong>論理レプリケーションを使用</strong>&nbsp;-ゼロダウンタイム</li><li><strong>拡張機能のアップグレード</strong>&nbsp;- PostgreSQL アップグレード後</li><li><strong>真空分析</strong>&nbsp;- メジャー後アップグレード</li></ol><h3 id="%E2%9D%8C-dont">❌ 禁止</h3><ol><li><strong>バックアップをスキップしない</strong>&nbsp;- 重要なセーフティネット</li><li><strong>すべてをアップグレードしないでください一度に</strong>&nbsp;- ローリングアップグレード</li><li><strong>古いクラスターをすぐに削除しないでください</strong>&nbsp;- ロールバックのために保持_</li><li><strong>リリースを無視しないでくださいメモ_</strong>&nbsp;- 重大な変更</li><li><strong>テストをスキップしないでください</strong>&nbsp;- ステージングは不可欠_</li><li><strong>ピーク時間帯にはアップグレードしないでください</strong>&nbsp;- メンテナンスを計画してくださいウィンドウ_</li><li><strong>拡張機能を忘れないでください_</strong>&nbsp;- 更新が必要な場合があります</li></ol><h2 id="10-lab-exercises">10。ラボ演習</h2><h3 id="lab-1-minor-version-upgrade">ラボ 1: マイナー バージョン アップグレード</h3><p><strong>タスク</strong>:</p><ol><li>現在の PostgreSQL バージョンを確認する</li><li>パッケージを更新するレプリカ_</li><li>レプリカで Patroni を再起動_</li><li>アップグレードされたレプリカに切り替え_</li><li>古いリーダーをアップグレード</li></ol><h3 id="lab-2-major-version-upgrade-with-pgupgrade">ラボ 2: pg_upgrade によるメジャー バージョン アップグレード</h3><p><strong>タスク</strong>:</p><ol><li>すべてに PostgreSQL 18 をインストールするノード_</li><li>pg_upgrade を実行 -- レプリカでチェック</li><li>レプリカで pg_upgrade を実行</li><li>Patroni 構成を更新</li><li>ローリングを完了アップグレード</li></ol><h3 id="lab-3-zero-downtime-upgrade-with-logical-replication">ラボ 3: 論理レプリケーションによるダウンタイムゼロのアップグレード</h3><p><strong>タスク</strong>:</p><ol><li>新しい v18 をセットアップするクラスター_</li><li>v17 でパブリケーションを作成_</li><li>v18 でサブスクリプションを作成</li><li>レプリケーションラグを監視_</li><li>カットオーバーを実行_</li><li>アプリケーションを確認機能</li></ol><h3 id="lab-4-rollback-procedure">ラボ 4: ロールバック手順</h3><p><strong>タスク</strong>:</p><ol><li>失敗したアップグレードのシミュレーション</li><li>停止すべてのノードで Patroni_</li><li>古い構成を復元</li><li>古いクラスターを再起動_</li><li>ロールバックが成功したことを確認_</li></ol><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11。概要____HTMLTAG_364__HTMLTAG_365___アップグレード方法の比較</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">方法</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">ダウンタイム_ __HTMLTAG_374___<th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">複雑さ</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">リスク</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">使用ケース_</th></tr></thead><tbody><tr><td style="padding: 5px 10px;">pg_upgrade</td>__ _HTMLTAG_387___分</td><td style="padding: 5px 10px;">低</td><td style="padding: 5px 10px;">低_</td><td style="padding: 5px 10px;">マイナーバージョンのジャンプ</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">論理的レプリケーション</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">なし</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">高</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">中</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ゼロダウンタイム必須</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">ダンプ/復元</td>___HTMLTAG_411__ _時間</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">低</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">低</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">古代バージョン_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">pg_upgrade --link</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">秒</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Medium</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">_同じサーバーアップグレード</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="typical-timeline">一般的なタイムライン___HTMLTAG_436__CODEBLOCK_27___<h3 id="upgrade-checklist">アップグレード チェックリスト_</h3><pre><code class="language-text">Pre-upgrade:
☐ Full backup completed
☐ Staging test successful
☐ Release notes reviewed
☐ Maintenance window scheduled
☐ Rollback plan documented
☐ Stakeholders notified

During upgrade:
☐ Backups verified
☐ pg_upgrade --check passed
☐ Upgrade completed
☐ Replication working
☐ Application connectivity verified

Post-upgrade:
☐ Extensions updated
☐ Vacuum analyze completed
☐ Performance validated
☐ Monitoring updated
☐ Documentation updated
</code></pre><h3 id="next-steps">次のステップ_</h3><p>レッスン 25 では<strong>実際のケースについて説明します研究_</strong>:</p><ul><li>運用アーキテクチャの例</li><li>_1000 クエリ/秒以上に拡張</li><li>コストの最適化テクニック_</li><li>失敗から学んだ教訓</li><li>業界固有の実装</li></ul>