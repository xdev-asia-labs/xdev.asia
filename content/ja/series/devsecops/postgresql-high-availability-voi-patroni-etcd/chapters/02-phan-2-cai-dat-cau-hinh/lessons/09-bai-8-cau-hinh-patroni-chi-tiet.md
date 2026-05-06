---
id: 019c9617-fb77-71c7-a375-ddb3553fc7a4
title: 'レッスン 8: Patroni の詳細な構成'
slug: bai-8-cau-hinh-patroni-chi-tiet
description: patroni.yml ファイルの各セクション (ブートストラップ、PostgreSQL パラメータ、認証、タグ、クラスターの制約) を詳しく分析します。
duration_minutes: 155
is_free: true
video_url: null
sort_order: 8
section_title: 'パート 2: インストールと構成'
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: Patroni と etcd による PostgreSQL の高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9470" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9470)"/>

  <!-- Decorations -->
  <g>
    <circle cx="817" cy="241" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1034" cy="138" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="751" cy="35" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="968" cy="192" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="685" cy="89" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="191" x2="1100" y2="271" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="221" x2="1050" y2="291" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="963.5166604983954,128 963.5166604983954,154 941,167 918.4833395016046,154 918.4833395016046,128 941,115" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: Patroni の詳細な構成</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Patroni と PostgreSQL の高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 2: インストールと構成</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標</h2><p>このレッスンを終えると、次のことができるようになります:</p><ul><li>ファイルの各セクションを詳しく理解する&nbsp;<code>patroni.yml</code></li><li>ブートストラップを構成するオプション</li><li>HA 用の PostgreSQL パラメーターの調整</li><li>認証とセキュリティの構成</li><li>タグと制約の使用</li><li>タイミング パラメーターの最適化</li></ul><h2 id="1-t%E1%BB%95ng-quan-v%E1%BB%81-patroni-configuration">1。 Patroni 構成の概要_</h2><h3 id="11-configuration-layers">1.1。構成レイヤー</h3><p>Patroni には多くの構成レイヤーがあります:</p><pre><code class="language-text">┌─────────────────────────────────────┐
│   1. Command line arguments         │ (Highest priority)
│      patroni --config-file=...      │
├─────────────────────────────────────┤
│   2. Environment variables          │
│      PATRONI_SCOPE=postgres         │
├─────────────────────────────────────┤
│   3. Configuration file             │
│      /etc/patroni/patroni.yml       │
├─────────────────────────────────────┤
│   4. DCS (Dynamic configuration)    │
│      Stored in etcd                 │
└─────────────────────────────────────┘
        ↓
   Merged configuration
</code></pre><p><strong>優先順位</strong>: コマンド ライン > ;環境＞設定ファイル > DCS</p><h3 id="12-static-vs-dynamic-configuration">1.2。静的構成と動的構成</h3><p><strong>静的構成</strong>(<code>patroni.yml</code>):</p><ul><li>ノード固有の設定 (名前、アドレス)</li><li>etcd 接続情報</li><li>データ ディレクトリ、bin ディレクトリ</li><li>変更を適用するには再起動が必要</li></ul><p><strong>動的構成_</strong>&nbsp;(DCS 内):</p><ul><li>PostgreSQL パラメーター</li><li>ブートストラップ設定_</li><li>_TTL、loop_wait、 retry_timeout</li><li>ランタイムを更新できます:&nbsp;<code>patronictl edit-config</code></li></ul><h2 id="2-section-scope-v%C3%A0-namespace">2。セクション: スコープと名前空間</h2><h3 id="21-scope-cluster-name">2.1。スコープ (クラスター名)_</h3><pre><code class="language-yaml">scope: postgres
</code></pre><p><strong>Scope</strong>&nbsp;は、DCS 内のクラスターの一意の名前です。</p><p><strong>Italy意味</strong>:</p><ul><li>同じクラスタ内のすべてのノードは同じでなければなりません&nbsp;<code>スコープ_</code></li><li>接頭辞が付いている DCS キースコープ:<code>/service/postgres/...</code></li><li>同じ etcd クラスター上で複数のクラスターを許可_</li></ul><p><strong>Best実践_</strong>:</p><pre><code class="language-yaml"># Development
scope: postgres-dev

# Staging
scope: postgres-staging

# Production
scope: postgres-prod

# Multi-tenant
scope: customer1-postgres
scope: customer2-postgres
</code></pre><h3 id="22-namespace">2.2。名前空間</h3><pre><code class="language-yaml">namespace: /service/
</code></pre><p><strong>名前空間</strong>&nbsp;は、DCS のすべてのキーのプレフィックスです。</p><p><strong>完全な DCS キー構造</strong>:</p><pre><code>/service/postgres/leader
/service/postgres/members/node1
/service/postgres/config
</code></pre><p><strong>複数のクラスターの例</strong>:</p><pre><code>/service/postgres-prod/leader
/service/postgres-staging/leader
/application/myapp-db/leader
</code></pre><h2 id="3-section-node-information">3。セクション: ノード情報_</h2><h3 id="31-node-name">3.1。ノード名_</h3><pre><code class="language-yaml">name: node1
</code></pre><p><strong>要件</strong>:_</p><ul><li>クラスター内で一意_</li><li>ブートストラップ後の定数</li><li>ホスト名または FQDN を使用します</li></ul><p><strong>例: c発明</strong>:</p><pre><code class="language-yaml"># Simple
name: node1
name: node2
name: node3

# With datacenter
name: dc1-node1
name: dc2-node1

# With role hint (not recommended)
name: pg-primary-01   # ❌ Role changes
name: pg-db-01        # ✅ Better
</code></pre><h3 id="32-host-information">3.2。ホスト情報</h3><pre><code class="language-yaml"># Optional: Override hostname
host: 10.0.1.11
</code></pre><p>Patroni はホスト名を自動的に検出しますが、必要に応じて上書きできます。</p><h2 id="4-section-rest-api">4。セクション: REST API</h2><h3 id="41-basic-configuration">4.1。基本構成</h3><pre><code class="language-yaml">restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.11:8008
</code></pre><p><strong>パラメータ</strong>:</p><ul><li><code>listen</code>: バインド用のインターフェイスとポート (0.0.0.0 = すべてインターフェース)_</li><li><code>connect_address</code>: 他のノードが接続に使用するアドレス_</li></ul><h3 id="42-authentication">4.2。認証_</h3><pre><code class="language-yaml">restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.11:8008
  authentication:
    username: admin
    password: secret_password
</code></pre><p><strong>認証はどのような場合に必要ですか?</strong>:</p><ul><li>REST API 公開インターネット</li><li>コンプライアンス要件_</li><li>マルチテナント環境</li></ul><p><strong>curl と併用</strong>:</p><pre><code class="language-bash">curl -u admin:secret_password http://10.0.1.11:8008/
</code></pre><h3 id="43-ssltls">4.3。 SSL/TLS_</h3><pre><code class="language-yaml">restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.11:8008
  certfile: /etc/patroni/ssl/server.crt
  keyfile: /etc/patroni/ssl/server.key
  cafile: /etc/patroni/ssl/ca.crt
  verify_client: required  # none, optional, required
</code></pre><p><strong>自己署名証明書の生成</strong>:</p><pre><code class="language-bash"># CA
openssl genrsa -out ca.key 4096
openssl req -new -x509 -days 3650 -key ca.key -out ca.crt

# Server certificate
openssl genrsa -out server.key 4096
openssl req -new -key server.key -out server.csr
openssl x509 -req -days 365 -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt
</code></pre><h3 id="44-rest-api-endpoints">4.4。 REST API エンドポイント_</h3><p><strong>ヘルスチェックエンドポイント</strong>:</p><pre><code class="language-bash"># General health
GET /health
# Returns: 200 if healthy, 503 if not

# Primary check
GET /primary
GET /master  # deprecated
# Returns: 200 if primary, 503 if not

# Replica check
GET /replica
# Returns: 200 if replica, 503 if primary or unhealthy

# Read-only check (replica or sync standby)
GET /read-only
# Returns: 200 if can serve reads

# Synchronous standby check
GET /synchronous
GET /sync
# Returns: 200 if synchronous standby
</code></pre><p><strong>管理エンドポイント_</strong>:</p><pre><code class="language-bash"># Restart PostgreSQL
POST /restart

# Reload configuration
POST /reload

# Reinitialize
POST /reinitialize
</code></pre><h2 id="5-section-bootstrap">5。セクション: ブートストラップ_</h2><h3 id="51-dcs-settings">5.1。 DCS 設定_</h3><pre><code class="language-yaml">bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    maximum_lag_on_syncnode: 1048576
    synchronous_mode: false
    synchronous_mode_strict: false
</code></pre><p><strong>TTL (Time To Live)</strong>:</p><pre><code class="language-yaml">ttl: 30  # seconds
</code></pre><ul><li>リーダー ロックの有効期限</li><li>リーダーが TTL で更新されない場合→ ロックの有効期限が切れます_</li><li><strong>トレードオフ</strong>:<ul><li><li>_ 低 TTL (10 秒): 高速フェイルオーバーですが、誤ったリスク陽性_</li><li>高 TTL (60 秒): より安定していますが、時間がかかります。ダウンタイム_</li></ul></li><li><strong>推奨__HTMLTAG_272___: 30秒_</li></ul><p><strong>loop_wait</strong>:</p><pre><code class="language-yaml">loop_wait: 10  # seconds
</code></pre><ul><li>ヘルスチェックの間隔</li><li>リーダーがロックを更新する_<code>loop_wait</code>&nbsp;秒</li><li><strong>推奨</strong>: 10 秒 (1/3) TTL)_</li></ul><p><strong>retry_timeout</strong>:_</p><pre><code class="language-yaml">retry_timeout: 10  # seconds
</code></pre><ul><li>DCS 操作のタイムアウト</li><li>DCS がタイムアウト以内に応答しない場合は → 検討してください失敗</li><li><strong>推奨</strong>: 10秒_</li></ul><p><strong>フェイルオーバー時の最大ラグ</strong>:</p><pre><code class="language-yaml">maximum_lag_on_failover: 1048576  # bytes (1MB)
</code></pre><ul><li>プロモーションの対象となる最大レプリケーション ラグ</li><li>ラグのあるレプリカ>閾値は賢明だろうg がプライマリとして選択されます</li><li><strong>0 = 制限なし</strong>(任意のレプリカを昇格可能)</li><li><strong>推奨</strong>: データ損失ゼロの場合は 1MB設定</li></ul><p><strong>synchronous_mode___HTMLTAG_325__ _:</p><pre><code class="language-yaml">synchronous_mode: false
synchronous_mode_strict: false
</code></pre><ul><li><code>_false</code>: 非同期レプリケーション(デフォルト)</li><li><code>true</code>: 同期レプリケーションを有効にする_</li><li><code>synchronous_mode_strict</code>: 厳密同期モード (同期しない場合は書き込みなし)スタンバイ)</li></ul><h3 id="52-postgresql-bootstrap-parameters">5.2。 PostgreSQL ブートストラップ パラメーター</h3><pre><code class="language-yaml">bootstrap:
  dcs:
    postgresql:
      use_pg_rewind: true
      use_slots: true
      parameters:
        # Replication
        wal_level: replica
        hot_standby: "on"
        wal_keep_size: "1GB"
        max_wal_senders: 10
        max_replication_slots: 10
        wal_log_hints: "on"
        
        # Archiving (optional)
        archive_mode: "on"
        archive_timeout: 300
        archive_command: "cp %p /var/lib/postgresql/18/archive/%f"
        
        # Performance
        shared_buffers: "2GB"
        effective_cache_size: "6GB"
        maintenance_work_mem: "512MB"
        checkpoint_completion_target: 0.9
        wal_buffers: "16MB"
        default_statistics_target: 100
        random_page_cost: 1.1
        effective_io_concurrency: 200
        work_mem: "16MB"
        min_wal_size: "1GB"
        max_wal_size: "4GB"
        max_worker_processes: 4
        max_parallel_workers_per_gather: 2
        max_parallel_workers: 4
        max_parallel_maintenance_workers: 2
</code></pre><p><strong>use_pg_rewind</strong>:_</p><pre><code class="language-yaml">use_pg_rewind: true
</code></pre><ul><li>自動リカバリを有効にするpg_rewind</li><li>クラスター再参加時の迅速なリカバリ</li><li><strong>必須</strong>:&nbsp;<code>wal_log_hints = on</code>&nbsp;データチェックサム</li></ul><p><strong>use_slots</strong>:___HTMLTAG_362__CODEBLOCK_24___<ul><li>動的レプリケーションスロットを自分で作成_</li><li>レプリカ時の WAL 削除の防止ラグ_</li><li><strong>_推奨</strong>: true</li></ul><h3 id="53-initdb-options">5.3。 initdb オプション</h3><pre><code class="language-yaml">bootstrap:
  initdb:
    - encoding: UTF8
    - locale: en_US.UTF-8
    - data-checksums
    - auth-host: scram-sha-256
    - auth-local: peer
</code></pre><p><strong>共通オプション</strong>:</p><ul><li><code>encoding</code>: 文字エンコーディング (UTF8)推奨)_</li><li><code>locale</code>: システム ロケール</li><li><code>data-checksums</code>: ページ チェックサムを有効にする (検出)破損)</li><li><code>auth-host</code>: ホスト接続のデフォルトの認証方法_</li><li><code>auth-local</code>: ローカルのデフォルトの認証方法接続_</li></ul><p><strong>注</strong>:&nbsp;<code>initdb</code>&nbsp;ブートストラップ クラスターがヘッドの時間に達した場合にのみ実行されます。</p><h3 id="54-pghba-configuration">5.4。 pg_hba 構成</h3><pre><code class="language-yaml">bootstrap:
  pg_hba:
    # Local connections
    - local all all peer
    - local all all md5
    
    # Localhost
    - host all all 127.0.0.1/32 scram-sha-256
    - host all all ::1/128 scram-sha-256
    
    # Replication connections
    - host replication replicator 10.0.1.11/32 scram-sha-256
    - host replication replicator 10.0.1.12/32 scram-sha-256
    - host replication replicator 10.0.1.13/32 scram-sha-256
    
    # Application connections
    - host all all 10.0.1.0/24 scram-sha-256
    
    # Allow from specific app servers
    - host myapp myapp_user 10.0.2.0/24 scram-sha-256
</code></pre><p><strong>ベスト プラクティス</strong>:</p><ul><li>✅ <code>scram-sha-256</code>&nbsp;(最も安全)</li><li>✅ 特定の IP アドレス/サブネット</li><li>✅ 目的ごとにユーザーを分離</li><li>❌ <code>trust</code>&nbsp;メソッド</li><li>❌<code>0.0.0.0/0</code> を避けてください。必須_</li></ul><h3 id="55-bootstrap-users">5.5。靴のタスク</li><li><strong>application</strong>: アプリケーション データベース ユーザー</li><li><strong>monitoring</strong>: Prometheus エクスポータ、 etc_</li><li><strong>replication</strong>: Patroni_</li></ul><h3 id="56-post-bootstrap-scripts">5.6 によってすでに処理されています。ブートストラップ後スクリプト</h3><pre><code class="language-yaml">bootstrap:
  post_bootstrap: /etc/patroni/scripts/post_bootstrap.sh
  post_init: /etc/patroni/scripts/post_init.sh
</code></pre><p><strong>post_bootstrap</strong>: ブートストラップ クラスタの後に実行 (プライマリのみ)&nbsp;<strong>post_init</strong>: 初期化後に実行データベース</p><p><strong>スクリプト例</strong>&nbsp;(<code>/etc/patroni/scripts/post_bootstrap.sh</code>):</p><pre><code class="language-bash">#!/bin/bash
# Create extensions
psql -U postgres -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements;"
psql -U postgres -c "CREATE EXTENSION IF NOT EXISTS pg_trgm;"

# Create databases
psql -U postgres -c "CREATE DATABASE myapp;"

# Grant permissions
psql -U postgres -d myapp -c "GRANT ALL ON SCHEMA public TO myapp;"
</code></pre><h2 id="6-section-postgresql">6。セクション: PostgreSQL</h2><h3 id="61-connection-settings">6.1。接続設定</h3><pre><code class="language-yaml">postgresql:
  listen: 0.0.0.0:5432
  connect_address: 10.0.1.11:5432
  proxy_address: 10.0.1.100:5432  # Optional: VIP address
</code></pre><p><strong>listen</strong>: リッスンする PostgreSQL のインターフェース<strong>connect_address</strong>: レプリケーション用のアドレス接続<strong>proxy_address</strong>: 仮想 IP (HAProxy、pgBouncer)</p><h3 id="62-data-and-binary-directories">6.2。データおよびバイナリ ディレクトリ_</h3><pre><code class="language-yaml">postgresql:
  data_dir: /var/lib/postgresql/18/data
  bin_dir: /usr/lib/postgresql/18/bin
  config_dir: /etc/postgresql/18/main  # Optional
  pgpass: /var/lib/postgresql/.pgpass  # Optional
</code></pre><p><strong>Note</strong>:</p><ul><li><code>data_dir</code>: 保存データベースfiles</li><li><code>bin_dir</code>: PostgreSQL バイナリ (psql、pg_ctl など) を保存する場所</li><li><code>config_dir</code>: 構成ファイルが他の場所にある場合data_dir_</li></ul><h3 id="63-authentication">6.3.認証_</h3><pre><code class="language-yaml">postgresql:
  authentication:
    replication:
      username: replicator
      password: replicator_password
    
    superuser:
      username: postgres
      password: postgres_password
    
    rewind:
      username: rewind_user
      password: rewind_password
</code></pre><p><strong>replication</strong>: ストリーミング レプリケーションのユーザー<strong>superuser</strong>: 管理に使用する Patroni PostgreSQL&nbsp;<strong>rewind</strong>: pg_rewind のユーザー (オプション、スーパーユーザーを使用可能)</p><p><strong>セキュリティのベストプラクティス</strong>: パスワードを環境変数またはシークレットに保存するマネージャー。_</p><h3 id="64-runtime-parameters">6.4。ランタイムパラメータ_</h3><pre><code class="language-yaml">postgresql:
  parameters:
    # Connection
    max_connections: 200
    superuser_reserved_connections: 3
    
    # Memory
    shared_buffers: "4GB"              # 25% of RAM
    effective_cache_size: "12GB"       # 50-75% of RAM
    maintenance_work_mem: "1GB"
    work_mem: "20MB"
    
    # WAL
    wal_buffers: "16MB"
    min_wal_size: "2GB"
    max_wal_size: "8GB"
    wal_compression: "on"
    
    # Checkpoints
    checkpoint_timeout: "15min"
    checkpoint_completion_target: 0.9
    
    # Query planning
    default_statistics_target: 100
    random_page_cost: 1.1              # SSD
    effective_io_concurrency: 200      # SSD
    
    # Parallel query
    max_worker_processes: 8
    max_parallel_workers_per_gather: 4
    max_parallel_workers: 8
    max_parallel_maintenance_workers: 4
    
    # Logging
    log_line_prefix: "%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h "
    log_checkpoints: "on"
    log_connections: "on"
    log_disconnections: "on"
    log_lock_waits: "on"
    log_temp_files: 0
    log_autovacuum_min_duration: 0
    
    # Auto-vacuum
    autovacuum: "on"
    autovacuum_max_workers: 3
    autovacuum_naptime: "10s"
    
    # Locale
    lc_messages: "en_US.UTF-8"
    lc_monetary: "en_US.UTF-8"
    lc_numeric: "en_US.UTF-8"
    lc_time: "en_US.UTF-8"
    
    # Extensions
    shared_preload_libraries: "pg_stat_statements"
</code></pre><p><strong>メモリサイジングガイド</strong>:</p><pre><code>Total RAM: 16GB

shared_buffers: 4GB (25%)
effective_cache_size: 12GB (75%)
maintenance_work_mem: 1GB
work_mem: 20MB × max_connections = 4GB max
</code></pre><h3 id="65-additional-pghba-entries">6.5。追加の pg_hba エントリ</h3><pre><code class="language-yaml">postgresql:
  pg_hba:
    # Additional entries beyond bootstrap
    - hostssl all all 10.0.3.0/24 scram-sha-256
    - host replication replicator 10.0.4.0/24 scram-sha-256
</code></pre><p>_<code>bootstrap.pg_hba</code>.</p><h3 id="66-callback-scripts">6.6 のエントリと結合します。コールバック スクリプト_</h3><pre><code class="language-yaml">postgresql:
  callbacks:
    on_reload: /etc/patroni/scripts/on_reload.sh
    on_restart: /etc/patroni/scripts/on_restart.sh
    on_role_change: /etc/patroni/scripts/on_role_change.sh
    on_start: /etc/patroni/scripts/on_start.sh
    on_stop: /etc/patroni/scripts/on_stop.sh
</code></pre><p><strong>on_role_change の例</strong>:</p><pre><code class="language-bash">#!/bin/bash
# /etc/patroni/scripts/on_role_change.sh

ROLE=$1  # 'master' or 'replica'
CLUSTER=$2
LEADER=$3

if [ "$ROLE" = "master" ]; then
    echo "$(date): Promoted to PRIMARY" &gt;&gt; /var/log/patroni/role_changes.log
    
    # Update HAProxy
    curl -X POST http://haproxy:9999/update
    
    # Send notification
    curl -X POST https://slack.webhook.url \
      -d "{\"text\": \"PostgreSQL node promoted to PRIMARY\"}"
else
    echo "$(date): Demoted to REPLICA" &gt;&gt; /var/log/patroni/role_changes.log
fi
</code></pre><h3 id="67-custom-configuration-files">6.7。カスタム構成ファイル</h3><pre><code class="language-yaml">postgresql:
  custom_conf: /etc/postgresql/18/main/custom.conf
</code></pre><p>カスタム構成を含めるファイル.</p><p><strong>例</strong>&nbsp;(<code>custom.conf</code>):</p><pre><code class="language-conf"># Custom settings
statement_timeout = 30000
idle_in_transaction_session_timeout = 60000
</code></pre><h3 id="68-remove-data-directory-on-failover">6.8。フェールオーバー時にデータ ディレクトリを削除</h3><pre><code class="language-yaml">postgresql:
  remove_data_directory_on_rewind_failure: true
  remove_data_directory_on_diverged_timelines: true
</code></pre><p><strong>注意</strong>: 回復が失敗した場合はデータ ディレクトリを削除します。</p><h2 id="7-section-tags">7。セクション: タグ</h2><h3 id="71-failover-tags">7.1。フェイルオーバー タグ</h3><pre><code class="language-yaml">tags:
  nofailover: false
  noloadbalance: false
  clonefrom: false
  nosync: false
</code></pre><p><strong>_フェイルオーバーなし_</strong>:_</p><pre><code class="language-yaml">nofailover: false  # Node có thể become primary
nofailover: true   # Node KHÔNG BAO GIỜ become primary
</code></pre><p><strong>ユースケース</strong>: レプリカはレポートにのみ使用されます。 Analytics._</p><p><strong>noloadbalance</strong>:</p><pre><code class="language-yaml">noloadbalance: false  # Node có thể serve read queries
noloadbalance: true   # Node KHÔNG serve read queries
</code></pre><p><strong>ユースケース</strong>: ノードはメンテナンス中か、問題。</p><p><strong>clonefrom</strong>:</p><pre><code class="language-yaml">clonefrom: false  # Node có thể làm source cho basebackup
clonefrom: true   # Node ưu tiên làm source
</code></pre><p><strong>ユースケース</strong>: 指定されたバックアップノード。</p><p><strong>nosync</strong>:</p><pre><code class="language-yaml">nosync: false  # Node có thể become synchronous standby
nosync: true   # Node KHÔNG become synchronous standby
</code></pre><p><strong>ユースケース</strong>: データセンターでの非同期レプリケーションその他。</p><h3 id="72-custom-tags">7.2。カスタムタグ</h3><pre><code class="language-yaml">tags:
  datacenter: dc1
  environment: production
  application: myapp
  version: v1.0.0
  rack: rack1
  zone: us-east-1a
</code></pre><p><strong>ユースケース</strong>:</p><ul><li>監視とラベル付け</li><li>カスタムフェイルオーバーロジック</li><li>地理的ルーティング</li><li>_マルチテナント識別_</li></ul><h3 id="73-priority-tag">7.3。優先タグ_</h3><pre><code class="language-yaml">tags:
  nofailover: false
  # Higher number = higher priority for promotion
  failover_priority: 100
</code></pre><p><strong>クラスターの例</strong>:_</p><pre><code>node1: failover_priority: 100  ← Preferred primary
node2: failover_priority: 50
node3: failover_priority: 10   ← Last resort
</code></pre><h2 id="8-section-watchdog">8。セクション: ウォッチドッグ</h2><h3 id="81-basic-watchdog-configuration">8.1。基本的なウォッチドッグ構成</h3><pre><code class="language-yaml">watchdog:
  mode: required     # off, automatic, required
  device: /dev/watchdog
  safety_margin: 5
</code></pre><p><strong>モード</strong>:</p><ul><li><code>off</code>: 無効にするwatchdog</li><li><code>automatic</code>: 利用可能な場合は使用</li><li><code>required</code>: ウォッチドッグが利用できない場合は失敗</li></ul><h3 id="82-hardware-watchdog">8.2。ハードウェア ウォッチドッグ</h3><p><strong>ウォッチドッグの可用性を確認</strong>:</p><pre><code class="language-bash">ls -l /dev/watchdog
# crw------- 1 root root 10, 130 ... /dev/watchdog
</code></pre><p><strong>ウォッチドッグをロードmodule</strong>:</p><pre><code class="language-bash"># Load softdog module
sudo modprobe softdog

# Make persistent
echo "softdog" | sudo tee -a /etc/modules

# Verify
lsmod | grep dog
# softdog   ...
</code></pre><p><strong>postgres ユーザーへのアクセスを許可_</strong>:_</p><pre><code class="language-bash"># Create udev rule
sudo tee /etc/udev/rules.d/60-watchdog.rules &lt;&lt; EOF
KERNEL=="watchdog", OWNER="postgres", GROUP="postgres", MODE="0660"
EOF

# Reload udev
sudo udevadm control --reload-rules
sudo udevadm trigger
</code></pre><h3 id="83-why-use-watchdog">8.3。ウォッチドッグを使用する理由_</h3><p><strong>スプリット ブレイン防止</strong>:</p><ul><li>Patroni はハングしますが、PostgreSQL は依然としてハングします run</li><li>ネットワークの問題: Patroni は DCS を失いますが、ノード生きている_</li><li>ウォッチドッグがノードを再起動 → プライマリゾンビを阻止_</li></ul><p><strong>フロー</strong>:_</p><pre><code>1. Patroni healthy → Kicks watchdog every 10s
2. Patroni hangs/loses DCS → Stops kicking
3. Watchdog timeout (safety_margin) → Reboot node
4. Node reboots → No zombie primary
</code></pre><h2 id="9-section-synchronous-replication">9。セクション: 同期レプリケーション</h2><h3 id="91-enable-synchronous-mode">9.1。同期モードを有効にする</h3><pre><code class="language-yaml">bootstrap:
  dcs:
    synchronous_mode: true
    synchronous_mode_strict: false
    synchronous_node_count: 1
</code></pre><p><strong>synchronous_mode</strong>: 同期レプリケーションを有効にする<strong>synchronous_mode_strict</strong>: プライマリは同期なしの書き込みを拒否しますスタンバイ<strong>synchronous_node_count</strong>: 同期スタンバイの数 (≥1)</p><h3 id="92-synchronous-mode-variants">9.2。同期モードのバリアント_</h3><p><strong>非同期 (デフォルト)</strong>:</p><pre><code class="language-yaml">synchronous_mode: false
</code></pre><ul><li>高速書き込み</li><li>プライマリに障害が発生した場合はデータ損失の危険性</li></ul><p><strong>同期_</strong>:</p><pre><code class="language-yaml">synchronous_mode: true
synchronous_mode_strict: false
</code></pre><ul><li>スタンバイを 1 回待ちます確認_</li><li>スタンバイがない場合は非同期に低下</li></ul><p><strong>厳密な同期</strong>:</p><pre><code class="language-yaml">synchronous_mode: true
synchronous_mode_strict: true
</code></pre><ul><li>REFUSE は同期なしで書き込みますスタンバイ_</li><li>データ損失ゼロ保証_</li><li>_リスク可用性への影響</li></ul><h3 id="93-multiple-synchronous-standbys">9.3。複数の同期スタンバイ</h3><pre><code class="language-yaml">bootstrap:
  dcs:
    synchronous_mode: true
    synchronous_node_count: 2  # Wait for 2 standbys
</code></pre><p>PostgreSQL 18 は、</p><pre><code class="language-sql">synchronous_standby_names = 'FIRST 2 (node2, node3, node4)'
-- or
synchronous_standby_names = 'ANY 2 (node2, node3, node4)'
</code></pre><h2 id="10-complete-configuration-example">10 をサポートします。完全な構成例</h2><h3 id="101-production-grade-patroniyml">10.1。製品グレードの patroni.yml</h3><pre><code class="language-yaml">scope: postgres-prod
namespace: /service/
name: node1

restapi:
  listen: 0.0.0.0:8008
  connect_address: 10.0.1.11:8008
  authentication:
    username: admin
    password: ${PATRONI_RESTAPI_PASSWORD}
  certfile: /etc/patroni/ssl/server.crt
  keyfile: /etc/patroni/ssl/server.key

etcd:
  hosts: 10.0.1.11:2379,10.0.1.12:2379,10.0.1.13:2379

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    maximum_lag_on_syncnode: 1048576
    synchronous_mode: true
    synchronous_mode_strict: false
    
    postgresql:
      use_pg_rewind: true
      use_slots: true
      
      parameters:
        # Replication
        wal_level: replica
        hot_standby: "on"
        wal_keep_size: "2GB"
        max_wal_senders: 10
        max_replication_slots: 10
        wal_log_hints: "on"
        
        # Performance
        max_connections: 200
        shared_buffers: "4GB"
        effective_cache_size: "12GB"
        maintenance_work_mem: "1GB"
        work_mem: "20MB"
        wal_buffers: "16MB"
        checkpoint_completion_target: 0.9
        
        # Logging
        logging_collector: "on"
        log_directory: "log"
        log_filename: "postgresql-%Y-%m-%d_%H%M%S.log"
        log_line_prefix: "%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h "
        log_checkpoints: "on"
        log_connections: "on"
        log_disconnections: "on"
        log_min_duration_statement: 1000
        
        # Extensions
        shared_preload_libraries: "pg_stat_statements"
  
  initdb:
    - encoding: UTF8
    - locale: en_US.UTF-8
    - data-checksums
  
  pg_hba:
    - local all all peer
    - host replication replicator 10.0.1.11/32 scram-sha-256
    - host replication replicator 10.0.1.12/32 scram-sha-256
    - host replication replicator 10.0.1.13/32 scram-sha-256
    - host all all 10.0.1.0/24 scram-sha-256
    - hostssl all all 0.0.0.0/0 scram-sha-256
  
  users:
    admin:
      password: ${ADMIN_PASSWORD}
      options:
        - createrole
        - createdb

postgresql:
  listen: 0.0.0.0:5432
  connect_address: 10.0.1.11:5432
  data_dir: /var/lib/postgresql/18/data
  bin_dir: /usr/lib/postgresql/18/bin
  
  authentication:
    replication:
      username: replicator
      password: ${REPLICATION_PASSWORD}
    superuser:
      username: postgres
      password: ${POSTGRES_PASSWORD}
  
  parameters:
    unix_socket_directories: "/var/run/postgresql"
  
  callbacks:
    on_role_change: /etc/patroni/scripts/on_role_change.sh
    on_start: /etc/patroni/scripts/on_start.sh
    on_stop: /etc/patroni/scripts/on_stop.sh

tags:
  nofailover: false
  noloadbalance: false
  clonefrom: false
  nosync: false
  datacenter: dc1
  environment: production
  failover_priority: 100

watchdog:
  mode: automatic
  device: /dev/watchdog
  safety_margin: 5
</code></pre><h3 id="102-environment-variables">10.2。環境変数_</h3><pre><code class="language-bash"># /etc/patroni/patroni.env
export PATRONI_RESTAPI_PASSWORD="secure_api_password"
export ADMIN_PASSWORD="secure_admin_password"
export REPLICATION_PASSWORD="secure_replication_password"
export POSTGRES_PASSWORD="secure_postgres_password"
</code></pre><p><strong>systemd にロード</strong>:</p><pre><code class="language-ini">[Service]
EnvironmentFile=/etc/patroni/patroni.env
</code></pre><h2 id="11-t%E1%BB%95ng-k%E1%BA%BFt">11。概要</h2><h3 id="key-takeaways">重要なポイント</h3><p>✅&nbsp;<strong>_構成レイヤー</strong>: コマンド ライン >環境 >設定ファイル > DCS</p><p>✅&nbsp;<strong>静的構成</strong>: ノード固有、再起動が必要</p><p>✅&nbsp;<strong>動的構成</strong>: クラスター全体、更新via&nbsp;<code>patronictl edit-config</code></p><p>✅&nbsp;<strong>Bootstrap</strong>: 1 回限りの初期化設定_</p><p>✅&nbsp;<strong>タグ</strong>: フェイルオーバー動作とノードの役割を制御</p><p>✅&nbsp;<strong>同期レプリケーション</strong>: 耐久性とノードの役割のバランス可用性_</p><h3 id="best-practices-checklist">ベスト プラクティス チェックリスト</h3><ul><li>&nbsp;環境変数を使用するパスワード</li><li>&nbsp;<code>use_pg_rewind</code>&nbsp;<code>wal_log_hints を有効にする: on</code></li><li>&nbsp;適切に設定&nbsp;<code>ttl</code>、&nbsp;<code>loop_wait</code>、&nbsp;<code>retry_timeo ut</code></li><li>&nbsp;<code>maximum_lag_on_failover</code>&nbsp;ゼロデータ用に構成するloss</li><li>&nbsp;initdb で<code>data-checksums</code>&nbsp;を使用</li><li>&nbsp;通知用のコールバック スクリプトを設定</li><li>&nbsp;設定スプリット ブレイン防止のウォッチドッグ</li><li>&nbsp;使用<code>scram-sha-256</code>&nbsp;認証</li><li>&nbsp;カスタム タグとその文書化意味_</li><li>&nbsp;構成ファイルの定期バックアップ</li></ul><h3 id="chu%E1%BA%A9n-b%E1%BB%8B-cho-b%C3%A0i-9">レッスン 9 の準備_</h3><p>レッスン 9 では、標準構成で初めてクラスターをブートストラップします。取得:_</p><ul><li>S3 つのノードで Patroni をタルト</li><li>クラスター形成を確認</li><li>基本操作をテスト_</li><li>一般的な問題のトラブルシューティング_</li></ul>