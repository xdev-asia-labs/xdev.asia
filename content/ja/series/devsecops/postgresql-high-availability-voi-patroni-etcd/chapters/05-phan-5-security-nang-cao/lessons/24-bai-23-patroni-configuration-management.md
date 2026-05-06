---
id: 019c9617-fba8-7143-940f-93cdbbdcd4a1
title: 'レッスン 23: Patroni 構成管理'
slug: bai-23-patroni-configuration-management
description: 動的な構成変更、DCS ベースの構成では、patronictl edit-config を使用し、ダウンタイムなしで構成を更新します。
duration_minutes: 110
is_free: true
video_url: null
sort_order: 23
section_title: 'パート 5: セキュリティと機能強化'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8608" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8608)"/>

  <!-- Decorations -->
  <g>
    <circle cx="883" cy="219" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="666" cy="282" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="949" cy="85" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="732" cy="148" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="1015" cy="211" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="109" x2="1100" y2="189" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="139" x2="1050" y2="209" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.1051177665154,187 1047.1051177665154,231 1009,253 970.8948822334847,231 970.8948822334847,187 1009,165" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 23</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 23: Patroni 構成管理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Patroni と PostgreSQL の高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 5: セキュリティと上級_</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標</h2><p>このレッスンを終えると、次のことができるようになります:</p><ul><li>Patroni 構成を動的に管理する</li><li>patronictl edit-config を使用する</li><li>DCS ストアを理解する構成_</li><li>ダウンタイムゼロの構成変更の実行</li><li>構成の検証とロールバック_</li></ul><h2 id="1-configuration-layers">1。構成レイヤー_</h2><h3 id="11-configuration-hierarchy">1.1。構成階層</h3><pre><code class="language-text">Priority (highest to lowest):
1. PostgreSQL parameters in postgresql.conf (overrides all)
2. DCS configuration (patronictl edit-config)
3. Patroni YAML file (/etc/patroni/patroni.yml)
4. PostgreSQL defaults

Typical workflow:
- Bootstrap config → patroni.yml
- Runtime changes → DCS (patronictl edit-config)
- Local overrides → postgresql.conf (rare, not recommended)
</code></pre><h3 id="12-configuration-scope">1.2。構成範囲_</h3><pre><code class="language-yaml"># Bootstrap config (patroni.yml) - initial setup only
bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    postgresql:
      parameters:
        max_connections: 100
        shared_buffers: 256MB

# Runtime config (DCS) - can be changed anytime
# Stored in etcd/consul/k8s and applied to all nodes
</code></pre><h2 id="2-view-current-configuration">2。現在の構成を表示</h2><h3 id="21-show-dcs-configuration">2.1。 DCS 構成を表示</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml show-config

# Output:
# loop_wait: 10
# maximum_lag_on_failover: 1048576
# postgresql:
#   parameters:
#     archive_command: 'test ! -f /var/lib/postgresql/wal_archive/%f &amp;&amp; cp %p /var/lib/postgresql/wal_archive/%f'
#     archive_mode: 'on'
#     hot_standby: 'on'
#     max_connections: 100
#     max_replication_slots: 10
#     max_wal_senders: 10
#     shared_buffers: 256MB
#     wal_level: replica
#   use_pg_rewind: true
#   use_slots: true
# retry_timeout: 10
# ttl: 30
</code></pre><h3 id="22-get-specific-parameter">2.2。特定のパラメータ</h3><pre><code class="language-bash"># Query etcd directly
export ETCDCTL_API=3
etcdctl get /service/postgres-cluster/config --print-value-only | jq .

# Or use patronictl
patronictl -c /etc/patroni/patroni.yml show-config | grep max_connections
</code></pre><h3 id="23-compare-with-local-config">2.3を取得します。ローカル構成</h3><pre><code class="language-bash"># Show differences
diff &lt;(patronictl -c /etc/patroni/patroni.yml show-config) \
     &lt;(grep -A 100 "^bootstrap:" /etc/patroni/patroni.yml)
</code></pre><h2 id="3-dynamic-configuration-changes">3 と比較します。動的な構成の変更</h2><h3 id="31-edit-configuration-interactively">3.1。構成を対話的に編集</h3><pre><code class="language-bash"># Open editor with current config
patronictl -c /etc/patroni/patroni.yml edit-config

# This opens in $EDITOR (vim/nano)
# Example changes:
</code></pre><pre><code class="language-yaml"># Before:
postgresql:
  parameters:
    max_connections: 100
    shared_buffers: 256MB

# After:
postgresql:
  parameters:
    max_connections: 200  # Changed
    shared_buffers: 512MB  # Changed
    work_mem: 8MB  # Added
</code></pre><pre><code class="language-bash"># Save and exit
# Patroni will prompt:
# Apply these changes? [y/N]: y
# --- 
# +++ 
# @@ -5,7 +5,8 @@
#  postgresql:
#    parameters:
# -    max_connections: 100
# -    shared_buffers: 256MB
# +    max_connections: 200
# +    shared_buffers: 512MB
# +    work_mem: 8MB
# 
# Configuration changed
</code></pre><h3 id="32-automatic-vs-manual-restart">3.2。自動再起動と手動再起動</h3><pre><code class="language-text">PostgreSQL parameters fall into 3 categories:

1. Dynamic (no restart):
   - work_mem, maintenance_work_mem
   - effective_cache_size
   - random_page_cost
   - Apply immediately with pg_reload_conf()

2. Reload required (SIGHUP):
   - max_connections (if increasing)
   - shared_buffers
   - Patroni will reload automatically

3. Restart required:
   - max_connections (if decreasing)
   - shared_buffers (decreasing)
   - wal_level, max_wal_senders
   - Patroni will restart replicas, then switchover and restart leader
</code></pre><h3 id="33-check-pending-restart">3.3。保留中の再起動を確認</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml list

# + Cluster: postgres-cluster (7329123456789012345) ---+----+-----------+
# | Member | Host       | Role    | State   | TL | Lag in MB | Pending restart |
# +--------+------------+---------+---------+----+-----------+-----------------+
# | node1  | 10.0.1.11  | Leader  | running |  5 |           | *               |
# | node2  | 10.0.1.12  | Replica | running |  5 |         0 | *               |
# | node3  | 10.0.1.13  | Replica | running |  5 |         0 | *               |
# +--------+------------+---------+---------+----+-----------+-----------------+
#
# * = Pending restart required
</code></pre><h3 id="34-trigger-restart">3.4。再起動をトリガー</h3><pre><code class="language-bash"># Restart specific node
patronictl -c /etc/patroni/patroni.yml restart postgres-cluster node2

# Restart all nodes (one by one)
patronictl -c /etc/patroni/patroni.yml restart postgres-cluster

# Force restart (even if no pending changes)
patronictl -c /etc/patroni/patroni.yml restart postgres-cluster node1 --force
</code></pre><h2 id="4-configuration-templates">4。構成テンプレート_</h2><h3 id="41-set-configuration-via-command-line">4.1。コマンドライン_</h3><pre><code class="language-bash"># Patch configuration
patronictl -c /etc/patroni/patroni.yml edit-config --apply - &lt;&lt;EOF
postgresql:
  parameters:
    max_connections: 300
    shared_buffers: 1GB
EOF

# Or use --set flag (if supported)
# patronictl edit-config --set postgresql.parameters.max_connections=300
</code></pre><h3 id="42-save-and-restore-configs">4.2を使用して構成を設定します。構成を保存して復元_</h3><pre><code class="language-bash"># Export current config
patronictl -c /etc/patroni/patroni.yml show-config &gt; config-backup-$(date +%Y%m%d).yml

# Restore config
patronictl -c /etc/patroni/patroni.yml edit-config --apply config-backup-20241125.yml
</code></pre><h3 id="43-version-control">4.3。バージョン管理</h3><pre><code class="language-bash"># Track config changes in git
mkdir -p /opt/patroni/configs
cd /opt/patroni/configs
git init

# Save config
patronictl -c /etc/patroni/patroni.yml show-config &gt; current-config.yml
git add current-config.yml
git commit -m "Increased max_connections to 300"

# View history
git log --oneline
# abc123 Increased max_connections to 300
# def456 Added work_mem parameter
# ghi789 Initial configuration
</code></pre><h2 id="5-common-configuration-tasks">5。一般的な構成タスク</h2><h3 id="51-increase-maxconnections">5.1。 max_connections_</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml edit-config
</code></pre><pre><code class="language-yaml">postgresql:
  parameters:
    max_connections: 200  # Change from 100
    
    # May also need to increase:
    shared_buffers: 512MB  # ~25% of RAM
    max_wal_senders: 15    # max_connections / 10
    max_replication_slots: 15
</code></pre><p><strong>注</strong>: 制限内で増加する場合は再起動が必要です。</p><h3 id="52-enable-query-logging">5.2。クエリ ログを有効にする</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml edit-config
</code></pre><pre><code class="language-yaml">postgresql:
  parameters:
    log_statement: 'all'  # or 'ddl', 'mod', 'none'
    log_duration: 'on'
    log_min_duration_statement: 1000  # Log queries &gt; 1s
</code></pre><p><strong>注</strong>: 再起動は必要ありません (動的パラメーター)。_</p><h3 id="53-adjust-memory-settings">5.3。メモリ設定を調整</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml edit-config
</code></pre><pre><code class="language-yaml">postgresql:
  parameters:
    shared_buffers: 512MB          # Requires restart
    effective_cache_size: 2GB      # Dynamic
    work_mem: 8MB                  # Dynamic
    maintenance_work_mem: 128MB    # Dynamic
</code></pre><h3 id="54-tune-checkpoint-behavior">5.4。チェックポイントの動作を調整します_</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml edit-config
</code></pre><pre><code class="language-yaml">postgresql:
  parameters:
    checkpoint_timeout: 15min
    checkpoint_completion_target: 0.9
    max_wal_size: 4GB
    min_wal_size: 1GB
</code></pre><p><strong>注</strong>: 動的またはリロード、再起動は必要ありません。</p><h3 id="55-enable-pgstatstatements">5.5。 pg_stat_statements_</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml edit-config
</code></pre><pre><code class="language-yaml">postgresql:
  parameters:
    shared_preload_libraries: 'pg_stat_statements'  # Requires restart!
    pg_stat_statements.track: 'all'
    pg_stat_statements.max: 10000
</code></pre><pre><code class="language-bash"># After restart, create extension
sudo -u postgres psql -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements;"
</code></pre><h2 id="6-validation-and-testing">6 を有効にします。検証とテスト</h2><h3 id="61-check-parameter-values">6.1。パラメータ値_</h3><pre><code class="language-sql">-- Current settings
SELECT name, setting, unit, context, source
FROM pg_settings
WHERE name IN ('max_connections', 'shared_buffers', 'work_mem');

-- Pending reload
SELECT name, setting, pending_restart
FROM pg_settings
WHERE pending_restart = true;
</code></pre><h3 id="62-validate-configuration">6.2 を確認します。構成</h3><pre><code class="language-bash"># PostgreSQL validation
sudo -u postgres /usr/lib/postgresql/18/bin/postgres \
  -D /var/lib/postgresql/18/data \
  -C max_connections

# Check for errors
sudo journalctl -u patroni -n 100 --no-pager
</code></pre><h3 id="63-test-configuration-change">6.3を検証します。構成の変更</h3><pre><code class="language-bash"># 1. Change config
patronictl -c /etc/patroni/patroni.yml edit-config --apply test-config.yml

# 2. Monitor logs
tail -f /var/lib/postgresql/18/data/log/postgresql-*.log

# 3. Check cluster status
watch -n 1 'patronictl -c /etc/patroni/patroni.yml list'

# 4. Verify parameter
psql -h 10.0.1.11 -U postgres -c "SHOW max_connections;"
</code></pre><h2 id="7-rollback-procedures">7をテストします。ロールバック手順_</h2><h3 id="71-immediate-rollback">7.1。即時ロールバック</h3><pre><code class="language-bash"># Restore from backup
patronictl -c /etc/patroni/patroni.yml edit-config --apply config-backup-20241125.yml

# Verify
patronictl -c /etc/patroni/patroni.yml show-config

# Restart if needed
patronictl -c /etc/patroni/patroni.yml restart postgres-cluster
</code></pre><h3 id="72-emergency-recovery">7.2。緊急復旧_</h3><pre><code class="language-bash"># If DCS is corrupted, reset from local config
# 1. Stop Patroni on all nodes
sudo systemctl stop patroni

# 2. Edit patroni.yml directly
sudo vi /etc/patroni/patroni.yml

# 3. Reinitialize DCS config (on leader only)
patronictl -c /etc/patroni/patroni.yml reinit postgres-cluster node1 --force

# 4. Start Patroni on all nodes
sudo systemctl start patroni
</code></pre><h2 id="8-advanced-configuration">8。詳細構成</h2><h3 id="81-per-database-parameters">8.1。データベースごとのパラメータ_</h3><pre><code class="language-sql">-- Set parameter for specific database
ALTER DATABASE myapp SET work_mem = '16MB';

-- Per-user settings
ALTER USER app_user SET statement_timeout = '30s';
</code></pre><p><strong>注</strong>: これらはクラスタ全体の設定をオーバーライドします。</p><h3 id="82-conditional-configuration">8.2。条件付き構成_</h3><pre><code class="language-yaml"># In patroni.yml (local config)
postgresql:
  parameters:
    # Leader-only settings
    synchronous_standby_names: 'node2,node3'
    
  # pg_hba.conf can differ per node
  pg_hba:
    - host replication replicator 10.0.1.0/24 scram-sha-256
    - host all all 10.0.1.0/24 scram-sha-256
</code></pre><h3 id="83-custom-callbacks">8.3。カスタム コールバック__HTMLTAG_162___<pre><code class="language-yaml"># In patroni.yml
postgresql:
  callbacks:
    on_reload: /usr/local/bin/patroni-reload-hook.sh
    on_restart: /usr/local/bin/patroni-restart-hook.sh
    on_role_change: /usr/local/bin/patroni-role-change-hook.sh
</code></pre><pre><code class="language-bash">#!/bin/bash
# /usr/local/bin/patroni-reload-hook.sh
echo "$(date): PostgreSQL reloaded" &gt;&gt; /var/log/patroni-hooks.log

# Send notification
curl -X POST https://hooks.slack.com/... \
  -d '{"text": "PostgreSQL config reloaded on '$(hostname)'"}'
</code></pre><h2 id="9-configuration-best-practices">9。構成のベスト プラクティス_</h2><h3 id="%E2%9C%85-do">✅ DO</h3><ol><li><strong>_ランタイム変更に DCS を使用</strong>&nbsp;- クラスター全体で一貫性</li><li><strong>バージョン管理configs_</strong>&nbsp;- git の変更を追跡_</li><li><strong>最初にステージングでテスト</strong>&nbsp;- 運用前に検証</li><li><strong>ドキュメントの変更</strong>&nbsp;-なぜ、何を、いつ_</li><li><strong>変更前のバックアップ</strong>&nbsp;- 簡単なロールバック</li><li><strong>変更後の監視</strong>&nbsp;-問題_</li><li><strong>再起動のスケジュール</strong>&nbsp;- メンテナンス期間中</li><li><strong>patronictl edit-config を使用</strong>&nbsp;- 手動ではありません etcd変更</li><li><strong>パラメータを検証</strong>&nbsp;- pg_settings を確認</li><li><strong>定期的に確認</strong>&nbsp;- 四半期ごとの構成監査_</li></ol><h3 id="%E2%9D%8C-dont">❌ 禁止</h3><ol><li><strong>postgresql.conf を編集しないでください</strong>&nbsp;- patronictl を使用してください代わりに_</li><li><strong>etcd を直接変更しない</strong>&nbsp;- Patroni ツールを使用</li><li><strong>バックアップをスキップしない</strong>&nbsp;- 必ず保存する前に変更_</li><li><strong>未テストの変更を適用しない</strong>&nbsp;- まずテスト</li><li><strong>保留中の再起動を無視しない</strong>&nbsp;- 適用されない場合があります正しく</li><li><strong>wal_level をわずかに変更しないでください</strong>&nbsp;- 完全な再起動が必要</li><li><strong>レプリカを忘れないでください</strong>&nbsp;- 変更が適用されますクラスター全体_</li></ol><h2 id="10-configuration-monitoring">10。構成の監視_</h2><h3 id="101-track-configuration-drift">10.1。構成ドリフト_</h3><pre><code class="language-bash"># Check if all nodes have same config
for node in node1 node2 node3; do
  echo "=== $node ==="
  ssh $node "sudo -u postgres psql -Atc \"SELECT name, setting FROM pg_settings WHERE name = 'max_connections'\""
done
</code></pre><h3 id="102-alert-on-config-changes">10.2を追跡します。構成変更に関するアラート</h3><pre><code class="language-yaml"># Prometheus alert
groups:
  - name: patroni-config
    rules:
      - alert: PatroniConfigChanged
        expr: changes(patroni_config_last_modified[5m]) &gt; 0
        labels:
          severity: info
        annotations:
          summary: "Patroni configuration changed"
      
      - alert: PostgreSQLPendingRestart
        expr: patroni_pending_restart == 1
        for: 1h
        labels:
          severity: warning
        annotations:
          summary: "PostgreSQL pending restart for {{ $labels.instance }}"
</code></pre><h3 id="103-audit-log-for-config-changes">10.3。構成変更の監査ログ</h3><pre><code class="language-bash"># Enable auditd for /etc/patroni/
sudo auditctl -w /etc/patroni/ -p wa -k patroni-config

# View audit logs
sudo ausearch -k patroni-config

# Or use journalctl for Patroni service
sudo journalctl -u patroni --since "1 hour ago" | grep "config"
</code></pre><h2 id="11-lab-exercises">11。ラボ演習</h2><h3 id="lab-1-dynamic-configuration-change">ラボ 1: 動的な構成変更</h3><p><strong>タスク</strong>:</p><ol><li>現在の構成を表示_</li><li>構成を編集して増やすmax_connections_</li><li>_再起動せずに変更を適用</li><li>新しい設定を確認_</li><li>構成のバックアップを保存</li></ol><h3 id="lab-2-configuration-requiring-restart">実習 2: 構成が必要再起動_</h3><p><strong>タスク</strong>:</p><ol><li>shared_buffers パラメータの変更_</li><li>保留中の再起動フラグを確認</li><li>ローリングを実行する再起動_</li><li>適用された変更を確認</li><li>pg_settings クエリでテスト_</li></ol><h3 id="lab-3-rollback-configuration">_ラボ 3: ロールバック構成_</h3><p><strong>タスク</strong>:</p><ol><li>現在の構成をバックアップ</li><li>意図的に悪い変更を加える</li><li>クラスターを観察する動作_</li><li>バックアップへのロールバック</li><li>ドキュメントの回復手順</li></ol><h3 id="lab-4-configuration-automation">ラボ 4: 構成自動化</h3><p><strong>タスク</strong>:</p><ol><li>構成を適用するシェルスクリプトの作成</li><li>検証チェックの実装</li><li>追加バックアップ/ロールバック ロジック_</li><li>クラスター上のテスト スクリプト_</li><li>スケジュールされた変更のために cron に追加_</li></ol><h2 id="12-t%E1%BB%95ng-k%E1%BA%BFt">12。概要_</h2><h3 id="configuration-management-flow">構成管理フロー</h3><pre><code class="language-text">1. Backup current config
   ↓
2. Edit configuration (patronictl edit-config)
   ↓
3. Validate changes
   ↓
4. Apply to DCS
   ↓
5. Patroni propagates to all nodes
   ↓
6. Reload or restart as needed
   ↓
7. Verify changes applied
   ↓
8. Monitor cluster health
</code></pre><h3 id="key-commands">主要コマンド_</h3><pre><code class="language-bash"># View config
patronictl show-config

# Edit config
patronictl edit-config

# Backup config
patronictl show-config &gt; backup.yml

# Restore config
patronictl edit-config --apply backup.yml

# Check pending restart
patronictl list

# Restart node
patronictl restart postgres-cluster node1
</code></pre><h3 id="parameter-types">パラメータのタイプ</h3>
<!--kg-card-begin: html-->
<table class="sc-jTzLTM pLVjq" style="font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe WPC&quot;, &quot;Segoe UI&quot;, Ubuntu, &quot;Droid Sans&quot;, sans-serif; overflow-wrap: break-word; font-size: 14px; line-height: 1.6; border-collapse: collapse; color: rgb(212, 212, 212); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(30, 30, 30); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><thead><tr><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">タイプ</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">アクション</th><th style="text-align: left; border-bottom: 1px solid rgba(255, 255, 255, 0.69); padding: 5px 10px; border-top-color: rgba(255, 255, 255, 0.69); border-right-color: rgba(255, 255, 255, 0.69); border-left-color: rgba(255, 255, 255, 0.69);">例__HTMLTAG_340______ HTMLTAG_341___</thead><tbody><tr><td style="padding: 5px 10px;">動的</td><td style="padding: 5px 10px;">即時</td><td style="padding: 5px 10px;">work_mem、 effect_cache_size_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Reload</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">SIGHUP</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">max_connections (up)、 log_statement_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">再起動</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">完全再起動_</td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">_shared_buffers (down)、wal_level</td></tr></tbody></table>_
<!--kg-card-end: html-->
<h3 id="next-steps">_次のステップ___HTMLTAG_372__HTMLTAG_373___レッスン 24 では<strong>アップグレード戦略</strong>:</p><ul><li>PostgreSQL メジャー バージョン アップグレード</li><li>Patroni について説明します。バージョンアップグレード</li><li>ゼロダウンタイムアップグレード手順</li><li>ロールバック戦略</li><li>テストと検証</li></ul>