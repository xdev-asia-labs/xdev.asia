---
id: 019d8b30-b123-7001-c001-e0c5f8100123
title: 'レッスン 23: プロダクションとパフォーマンスのチューニングの導入'
slug: bai-23-trien-khai-production-va-performance-tuning
description: 運用環境のベスト デプロイメント プラクティス、データベースの選択 (PostgreSQL 推奨)、接続プールのチューニング (Agroal)、Quarkus スレッド プールの構成、JVM チューニング (ヒープ、GC、コンテナ対応設定)、--最適化されたビルド、ホスト名構成 (hostname-v2)、プロキシ ヘッダー (PROXY プロトコル、X-Forwarded-*)、HTTP/2 サポート、キャッシュ チューニング (Infinispan ローカル キャッシュ)、Gatling による負荷テスト、および運用チェックリスト完了しました。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 23
section_title: 'パート 7: 本番環境、HA、および Kubernetes'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1555" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1555)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1090" cy="120" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1080" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1070" cy="180" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1060" cy="210" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="240" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="120" x2="1100" y2="200" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="150" x2="1050" y2="220" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1000.3108891324554,152.5 1000.3108891324554,187.5 970,205 939.6891108675446,187.5 939.6891108675446,152.5 970,135" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 23</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 23: 本番環境と</tspan>
      <tspan x="60" dy="42">パフォーマンスチューニング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: 本番環境、HA、および Kubernetes</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-production-deployment-checklist"><strong>1. 実稼働環境への導入チェックリスト</strong></h2>

<p>Keycloakを実稼働環境にデプロイするには、データベース、ネットワーキング、JVM、キャッシュ、セキュリティを慎重に構成する必要があります。この記事では、データベースの選択から負荷テストまでの包括的なガイダンスを提供します。</p>

<pre><code class="language-text">┌─────────────────────────────────────────────────────────────┐
│                  Production Checklist                       │
├─────────────────────────────────────────────────────────────┤
│  ✅ Database: PostgreSQL + Connection Pool tuning           │
│  ✅ Build: kc.sh build --optimized                          │
│  ✅ Hostname: hostname-v2 provider configured               │
│  ✅ Proxy: X-Forwarded-* / PROXY protocol                   │
│  ✅ TLS: Certificates configured                            │
│  ✅ JVM: Heap, GC, container-aware settings                 │
│  ✅ Caching: Infinispan local caches tuned                  │
│  ✅ Metrics: /metrics endpoint enabled                      │
│  ✅ Health: /health/ready, /health/live enabled              │
│  ✅ Load Test: Gatling benchmark passed                     │
└─────────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-database-selection-va-configuration"><strong>2. データベースの選択と構成</strong></h2>

<h3 id="21-database-support-matrix"><strong>2.1 データベースサポートマトリックス</strong></h3>

<table>
<thead>
<tr><th>データベース</th><th>ベンダーフラグ</th><th>推奨</th><th>注記</th></tr>
</thead>
<tbody>
<tr><td>PostgreSQL</td><td><code>ポストグレ</code></td><td>✅ はい</td><td>Keycloakチームによって最もテストされた最高のパフォーマンス</td></tr>
<tr><td>MySQL</td><td><code>mysql</code></td><td>⚠️ わかりました</td><td>InnoDB、utf8mb4 文字セットが必要</td></tr>
<tr><td>マリアDB</td><td><code>マリアドブ</code></td><td>⚠️ わかりました</td><td>MySQLに似ている</td></tr>
<tr><td>オラクル</td><td><code>オラクル</code></td><td>⚠️ わかりました</td><td>エンタープライズライセンスが必要です</td></tr>
<tr><td>Microsoft SQLサーバー</td><td><code>mssql</code></td><td>⚠️ わかりました</td><td>Windows環境</td></tr>
<tr><td>H2 (埋め込み)</td><td><code>開発ファイル</code>/<code>開発メモリ</code></td><td>❌ いいえ</td><td>開発用途のみ</td></tr>
</tbody>
</table>

<h3 id="22-postgresql-configuration"><strong>2.2 PostgreSQLの構成</strong></h3>

<pre><code class="language-bash"># Cấu hình database cơ bản
bin/kc.sh start \
  --db=postgres \
  --db-url="jdbc:postgresql://db-host:5432/keycloak" \
  --db-username=keycloak \
  --db-password=secure_password_here \
  --db-schema=public
</code></pre>

<p>環境変数を使用する場合 (コンテナーに推奨):</p>

<pre><code class="language-bash"># Environment variables cho database
export KC_DB=postgres
export KC_DB_URL="jdbc:postgresql://db-host:5432/keycloak"
export KC_DB_USERNAME=keycloak
export KC_DB_PASSWORD=secure_password_here
export KC_DB_SCHEMA=public

# JDBC URL với advanced parameters
export KC_DB_URL="jdbc:postgresql://db-host:5432/keycloak?ssl=true&sslmode=verify-full&sslrootcert=/certs/ca.crt"
</code></pre>

<h3 id="23-connection-pool-tuning-agroal"><strong>2.3 接続プールのチューニング (Agroal)</strong></h3>

<p>キークロークの使用<strong>アグロル</strong>接続プール (Quarkus のデフォルト)。接続プールのチューニングは、パフォーマンスに影響を与える重要な要素です。</p>

<pre><code class="language-bash"># Connection pool configuration
bin/kc.sh start \
  --db=postgres \
  --db-url="jdbc:postgresql://db-host:5432/keycloak" \
  --db-username=keycloak \
  --db-password=secure_password_here \
  --db-pool-initial-size=25 \
  --db-pool-min-size=25 \
  --db-pool-max-size=100
</code></pre>

<table>
<thead>
<tr><th>パラメータ</th><th>デフォルト</th><th>プロダクション推奨</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><code>--db-プールの初期サイズ</code></td><td>0</td><td>25</td><td>最初に初期化された接続の数</td></tr>
<tr><td><code>--db-プールの最小サイズ</code></td><td>0</td><td>25</td><td>維持される接続の最小数</td></tr>
<tr><td><code>--db-プールの最大サイズ</code></td><td>100</td><td>50～100</td><td>最大接続数</td></tr>
</tbody>
</table>

<p><strong>接続プールのサイジングの原則:</strong></p>

<pre><code class="language-text">Tổng connections = Số Keycloak instances × db-pool-max-size

Ví dụ: 3 instances × 100 max = 300 connections
→ PostgreSQL max_connections ≥ 300 + buffer (20%)
→ Đặt max_connections = 360
</code></pre>

<p>サーバー側の PostgreSQL 構成 (<code>postgresql.conf</code>):</p>

<pre><code class="language-ini"># postgresql.conf - tối ưu cho Keycloak
max_connections = 400
shared_buffers = 2GB
effective_cache_size = 6GB
work_mem = 16MB
maintenance_work_mem = 512MB

# Connection timeout
idle_in_transaction_session_timeout = 30000  # 30 seconds
statement_timeout = 60000                     # 60 seconds

# WAL configuration
wal_level = replica
max_wal_senders = 5
wal_keep_size = 1GB
</code></pre>

<h2 id="3-build-optimization"><strong>3. ビルドの最適化</strong></h2>

<h3 id="31-build-vs-start-phases"><strong>3.1 構築フェーズと開始フェーズ</strong></h3>

<p>Keycloak には 2 つのフェーズがあります。<strong>建てる</strong>(構成をカプセル化) および<strong>始める</strong>(サーバーを実行します)。本番環境では常に使用します<code>--最適化された</code>2 つのフェーズを分離し、スタートアップを大幅に高速化します。</p>

<pre><code class="language-text">┌──────────────────────────────────────────────────────────────┐
│              Keycloak Build & Start Phases                   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Phase 1: BUILD (chạy 1 lần, hoặc khi config thay đổi)     │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ kc.sh build                                           │  │
│  │ - Parse configuration                                 │  │
│  │ - Install providers/extensions                        │  │
│  │ - Quarkus augmentation (ahead-of-time optimization)   │  │
│  │ - Persist build options                               │  │
│  └────────────────────────────────────────────────────────┘  │
│                           ↓                                  │
│  Phase 2: START (mỗi lần khởi động)                         │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ kc.sh start --optimized                               │  │
│  │ - Skip build phase → Fast startup                     │  │
│  │ - Use pre-built configuration                         │  │
│  │ - Apply runtime-only options                          │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
</code></pre>

<pre><code class="language-bash"># Build phase - chạy khi build Docker image
bin/kc.sh build \
  --db=postgres \
  --features=token-exchange,admin-fine-grained-authz \
  --health-enabled=true \
  --metrics-enabled=true \
  --http-relative-path=/auth

# Start phase - chạy khi container start
bin/kc.sh start --optimized \
  --db-url="jdbc:postgresql://db-host:5432/keycloak" \
  --db-username=keycloak \
  --db-password=secure_password_here \
  --hostname=auth.example.com \
  --https-certificate-file=/certs/tls.crt \
  --https-certificate-key-file=/certs/tls.key
</code></pre>

<h3 id="32-production-dockerfile"><strong>3.2 本番環境の Dockerfile</strong></h3>

<pre><code class="language-dockerfile"># Multi-stage Dockerfile cho Keycloak Production
FROM quay.io/keycloak/keycloak:26.0 AS builder

# Build phase - pre-build configuration
ENV KC_DB=postgres
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true
ENV KC_FEATURES=token-exchange,admin-fine-grained-authz
ENV KC_HTTP_RELATIVE_PATH=/auth

# Thêm custom providers nếu có
# COPY --chown=keycloak:keycloak my-provider.jar /opt/keycloak/providers/

# Thêm custom themes nếu có
# COPY --chown=keycloak:keycloak my-theme/ /opt/keycloak/themes/my-theme/

RUN /opt/keycloak/bin/kc.sh build

# Runtime stage
FROM quay.io/keycloak/keycloak:26.0

COPY --from=builder /opt/keycloak/ /opt/keycloak/

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
CMD ["start", "--optimized"]
</code></pre>

<h2 id="4-hostname-configuration"><strong>4. ホスト名の設定</strong></h2>

<h3 id="41-hostname-v2-provider"><strong>4.1 ホスト名 v2 プロバイダー</strong></h3>

<p>キークロークの使用<strong>ホスト名-v2</strong>プロバイダー (Keycloak 25 以降のデフォルト) を使用して、すべてのエンドポイント (フロントエンド、バックエンド、管理) の URL を定義します。</p>

<pre><code class="language-bash"># Hostname configuration cơ bản
bin/kc.sh start --optimized \
  --hostname=auth.example.com \
  --hostname-admin=admin-auth.example.com
</code></pre>

<table>
<thead>
<tr><th>パラメータ</th><th>説明する</th><th>例えば</th></tr>
</thead>
<tbody>
<tr><td><code>--ホスト名</code></td><td>フロントエンド URL のホスト名 (ログイン ページ、既知のエンドポイント)</td><td><code>auth.example.com</code></td></tr>
<tr><td><code>--ホスト名-管理者</code></td><td>管理コンソール用の別のホスト名 (フロントエンドと異なる場合)。設定なし = 共有<code>--ホスト名</code></td><td><code>admin-auth.internal.com</code></td></tr>
<tr><td><code>--ホスト名-strict</code></td><td>構成されたホスト名へのリクエストのみを許可します。デフォルト：<code>真実</code></td><td><code>真実</code></td></tr>
<tr><td><code>--ホスト名-バックチャネル-動的</code></td><td>バックエンド URL は、固定ホスト名の代わりに要求ホスト名を使用します。デフォルト：<code>間違い</code></td><td><code>間違い</code></td></tr>
</tbody>
</table>

<h3 id="42-hostname-scenarios"><strong>4.2 ホスト名のシナリオ</strong></h3>

<pre><code class="language-bash"># Scenario 1: Single domain cho tất cả
bin/kc.sh start --optimized \
  --hostname=auth.example.com

# Scenario 2: Tách Admin Console ra domain riêng (khuyến nghị production)
bin/kc.sh start --optimized \
  --hostname=auth.example.com \
  --hostname-admin=admin-auth.internal.example.com

# Scenario 3: Edge proxy determine hostname từ request
bin/kc.sh start --optimized \
  --hostname-strict=false \
  --proxy-headers=xforwarded

# Scenario 4: Backchannel dynamic (backend-to-backend dùng internal URL)
bin/kc.sh start --optimized \
  --hostname=auth.example.com \
  --hostname-backchannel-dynamic=true
</code></pre>

<h2 id="5-proxy-configuration"><strong>5. プロキシ設定</strong></h2>

<h3 id="51-proxy-headers"><strong>5.1 プロキシヘッダー</strong></h3>

<p>Keycloakがリバースプロキシ（Nginx、HAProxy、AWS ALBなど）の背後にある場合、Keycloakが正しいクライアントIP、プロトコル、およびホスト名を受信できるようにプロキシヘッダーを設定する必要があります。</p>

<pre><code class="language-bash"># Option 1: X-Forwarded-* headers (phổ biến nhất)
bin/kc.sh start --optimized \
  --proxy-headers=xforwarded

# Option 2: RFC 7239 Forwarded header
bin/kc.sh start --optimized \
  --proxy-headers=forwarded
</code></pre>

<table>
<thead>
<tr><th>ヘッダ</th><th>目的</th><th>フラグ</th></tr>
</thead>
<tbody>
<tr><td><code>X-Forwarded-For</code></td><td>クライアントIPアドレス</td><td><code>xforwarded</code></td></tr>
<tr><td><code>X-Forwarded-Proto</code></td><td>独自プロトコル（http/https）</td><td><code>xforwarded</code></td></tr>
<tr><td><code>X 転送ホスト</code></td><td>元のホスト名</td><td><code>xforwarded</code></td></tr>
<tr><td><code>X 転送ポート</code></td><td>元のポート</td><td><code>xforwarded</code></td></tr>
<tr><td><code>転送されました</code></td><td>RFC 7239 結合ヘッダー</td><td><code>転送されました</code></td></tr>
</tbody>
</table>

<h3 id="52-nginx-reverse-proxy-config"><strong>5.2 Nginx リバースプロキシ構成</strong></h3>

<pre><code class="language-nginx"># /etc/nginx/conf.d/keycloak.conf
upstream keycloak_backend {
    server keycloak-1:8443;
    server keycloak-2:8443;
    # Sticky session based on KEYCLOAK_SESSION cookie
    sticky cookie KEYCLOAK_ROUTE expires=1h domain=.example.com httponly secure;
}

server {
    listen 443 ssl http2;
    server_name auth.example.com;

    ssl_certificate     /etc/nginx/certs/tls.crt;
    ssl_certificate_key /etc/nginx/certs/tls.key;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options SAMEORIGIN;

    # Buffer sizes cho Keycloak (tokens có thể lớn)
    proxy_buffer_size        128k;
    proxy_buffers            4 256k;
    proxy_busy_buffers_size  256k;
    large_client_header_buffers 4 16k;

    location / {
        proxy_pass https://keycloak_backend;

        # X-Forwarded headers
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_set_header X-Forwarded-Host   $host;
        proxy_set_header X-Forwarded-Port   $server_port;

        # WebSocket support (cho Admin Console)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
    }
}
</code></pre>

<h3 id="53-http2-support"><strong>5.3 HTTP/2 のサポート</strong></h3>

<pre><code class="language-bash"># Enable HTTP/2 (default đã enabled khi dùng HTTPS)
bin/kc.sh start --optimized \
  --hostname=auth.example.com \
  --https-certificate-file=/certs/tls.crt \
  --https-certificate-key-file=/certs/tls.key \
  --http-enabled=false

# Nếu cần HTTP/2 cleartext (h2c) cho internal communication
bin/kc.sh start --optimized \
  --hostname=auth.example.com \
  --http-enabled=true \
  --http-port=8080
</code></pre>

<h2 id="6-jvm-tuning"><strong>6. JVMのチューニング</strong></h2>

<h3 id="61-heap-configuration"><strong>6.1 ヒープ構成</strong></h3>

<p>Keycloak は Quarkus/JVM 上で実行されるため、JVM のチューニングはパフォーマンスと安定性に直接影響します。</p>

<pre><code class="language-bash"># JVM Heap - sử dụng JAVA_OPTS_KC_HEAP (Keycloak 25+)
export JAVA_OPTS_KC_HEAP="-XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=70.0"

# Hoặc set fixed heap size
export JAVA_OPTS_KC_HEAP="-Xms512m -Xmx2g"
</code></pre>

<h3 id="62-garbage-collector-selection"><strong>6.2 ガベージ コレクターの選択</strong></h3>

<pre><code class="language-bash"># Option 1: G1GC (recommended cho heap ≤ 4GB)
export JAVA_OPTS_APPEND="-XX:+UseG1GC \
  -XX:MaxGCPauseMillis=200 \
  -XX:G1HeapRegionSize=16m \
  -XX:+ParallelRefProcEnabled \
  -XX:+UseStringDeduplication"

# Option 2: ZGC (recommended cho heap > 4GB, low-latency)
export JAVA_OPTS_APPEND="-XX:+UseZGC \
  -XX:+ZGenerational \
  -XX:ConcGCThreads=2"

# Option 3: Shenandoah GC (alternative low-latency)
export JAVA_OPTS_APPEND="-XX:+UseShenandoahGC \
  -XX:ShenandoahGCHeuristics=compact"
</code></pre>

<table>
<thead>
<tr><th>GCアルゴリズム</th><th>最適な用途</th><th>ヒープサイズ</th><th>一時停止時間</th></tr>
</thead>
<tbody>
<tr><td>G1GC</td><td>汎用、バランスの取れたスループット/レイテンシー</td><td>≤ 4GB</td><td>~200ms</td></tr>
<tr><td>ZGC</td><td>低レイテンシー、大規模ヒープ</td><td>> 4ギガバイト</td><td><; 1ms</td></tr>
<tr><td>シェナンドー</td><td>低遅延、同時実行</td><td>> 2GB</td><td><; 10ミリ秒</td></tr>
</tbody>
</table>

<h3 id="63-container-aware-jvm-settings"><strong>6.3 コンテナ対応の JVM 設定</strong></h3>

<pre><code class="language-bash"># Container-aware JVM settings (Docker/Kubernetes)
export JAVA_OPTS_APPEND=" \
  -XX:+UseContainerSupport \
  -XX:MaxRAMPercentage=70.0 \
  -XX:InitialRAMPercentage=50.0 \
  -XX:MinRAMPercentage=50.0 \
  -XX:ActiveProcessorCount=2 \
  -XX:+UseG1GC \
  -XX:MaxGCPauseMillis=200 \
  -Djava.net.preferIPv4Stack=true \
  -Djava.awt.headless=true \
  -Dfile.encoding=UTF-8"
</code></pre>

<h3 id="64-complete-jvm-configuration"><strong>6.4 完全な JVM 構成</strong></h3>

<pre><code class="language-bash"># Production JVM configuration hoàn chỉnh
export JAVA_OPTS_KC_HEAP="-XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=70.0"

export JAVA_OPTS_APPEND=" \
  -XX:+UseG1GC \
  -XX:MaxGCPauseMillis=200 \
  -XX:G1HeapRegionSize=16m \
  -XX:+ParallelRefProcEnabled \
  -XX:+UseStringDeduplication \
  -XX:+UseContainerSupport \
  -XX:ActiveProcessorCount=2 \
  -XX:MetaspaceSize=256m \
  -XX:MaxMetaspaceSize=512m \
  -Djava.net.preferIPv4Stack=true \
  -Djava.awt.headless=true \
  -Dfile.encoding=UTF-8 \
  -XX:+ExitOnOutOfMemoryError \
  -XX:+HeapDumpOnOutOfMemoryError \
  -XX:HeapDumpPath=/opt/keycloak/dumps/"
</code></pre>

<h2 id="7-quarkus-thread-pool-va-vertx"><strong>7. Quarkus スレッド プールと Vert.x</strong></h2>

<p>Keycloak は Quarkus (Vert.x イベント ループ + ワーカー スレッド プール) 上で実行されます。このパターンを理解すると、正しいチューニングに役立ちます。</p>

<pre><code class="language-text">┌───────────────────────────────────────────────────────┐
│                  Keycloak / Quarkus                    │
│                                                       │
│  ┌─────────────────────────────────────────────────┐  │
│  │          Vert.x Event Loop Threads              │  │
│  │  (IO_THREADS = 2 × CPU cores, default)          │  │
│  │  - Accept connections                           │  │
│  │  - Parse HTTP requests                          │  │
│  │  - Non-blocking operations                      │  │
│  └──────────────┬──────────────────────────────────┘  │
│                  │ delegate blocking work              │
│  ┌──────────────▼──────────────────────────────────┐  │
│  │          Worker Thread Pool                     │  │
│  │  (WORKER_THREADS = 8 × CPU cores, default)      │  │
│  │  - Database queries                             │  │
│  │  - LDAP calls                                   │  │
│  │  - Token signing/validation                     │  │
│  │  - Template rendering                           │  │
│  └─────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────┘
</code></pre>

<pre><code class="language-bash"># Quarkus thread pool configuration (qua Java system properties)
export JAVA_OPTS_APPEND=" \
  -Dquarkus.thread-pool.max-threads=200 \
  -Dquarkus.thread-pool.queue-size=1000 \
  -Dquarkus.thread-pool.growth-resistance=0.1 \
  -Dquarkus.vertx.event-loops-pool-size=4"
</code></pre>

<table>
<thead>
<tr><th>パラメータ</th><th>デフォルト</th><th>説明する</th></tr>
</thead>
<tbody>
<tr><td><code>quarkus.thread-pool.max-threads</code></td><td>200 (または 8 × CPU 最大)</td><td>最大ワーカースレッド</td></tr>
<tr><td><code>quarkus.thread-pool.queue-size</code></td><td>無限の</td><td>すべてのスレッドがビジー状態のときのキュー サイズ</td></tr>
<tr><td><code>quarkus.thread-pool.growth-resistance</code></td><td>0</td><td>0 ～ 1、スレッド プールの抵抗が増加します</td></tr>
<tr><td><code>quarkus.vertx.event-loops-pool-size</code></td><td>2 × CPU</td><td>Vert.x イベント ループ スレッド</td></tr>
</tbody>
</table>

<h2 id="8-infinispan-local-cache-tuning"><strong>8. Infinispan ローカル キャッシュのチューニング</strong></h2>

<h3 id="81-keycloak-cache-architecture"><strong>8.1 Keycloakキャッシュアーキテクチャ</strong></h3>

<p>Keycloakは、Infinispanローカルキャッシュを使用してメタデータ（レルム、ユーザー、キーなど）をキャッシュし、データベースクエリを削減します。キャッシュ サイズと寿命の調整はパフォーマンスに大きく影響します。</p>

<pre><code class="language-text">┌─────────────────────────────────────────────────────────────┐
│                 Infinispan Local Caches                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │    realms     │  │    users     │  │  authorization   │  │
│  │  (realm cfg)  │  │ (user data)  │  │ (permissions)    │  │
│  │  max: 10000   │  │  max: 10000  │  │  max: 10000      │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
│                                                             │
│  ┌──────────────┐  ┌──────────────────────────────────────┐ │
│  │    keys       │  │        Revision Caches               │ │
│  │  (crypto)     │  │  (realmRevisions, userRevisions,     │ │
│  │  max: 1000    │  │   authorizationRevisions)            │ │
│  └──────────────┘  └──────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
</code></pre>

<h3 id="82-custom-cache-configuration"><strong>8.2 カスタムキャッシュ構成</strong></h3>

<p>ファイルの作成<code>キャッシュ-ispn.xml</code>カスタム：</p>

<pre><code class="language-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;infinispan
    xmlns="urn:infinispan:config:15.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:infinispan:config:15.0
        https://infinispan.org/schemas/infinispan-config-15.0.xsd"&gt;

    &lt;cache-container name="keycloak"&gt;
        &lt;!-- Realm cache - cache metadata realm --&gt;
        &lt;local-cache name="realms"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="20000"/&gt;
        &lt;/local-cache&gt;

        &lt;!-- User cache - cache user data --&gt;
        &lt;local-cache name="users"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="20000"/&gt;
        &lt;/local-cache&gt;

        &lt;!-- Authorization cache --&gt;
        &lt;local-cache name="authorization"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="20000"/&gt;
        &lt;/local-cache&gt;

        &lt;!-- Keys cache - signing/encryption keys --&gt;
        &lt;local-cache name="keys"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="5000"/&gt;
            &lt;expiration max-idle="3600000"/&gt; &lt;!-- 1 hour --&gt;
        &lt;/local-cache&gt;

        &lt;!-- Revision caches - invalidation tracking --&gt;
        &lt;local-cache name="realmRevisions"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="40000"/&gt;
        &lt;/local-cache&gt;

        &lt;local-cache name="userRevisions"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="40000"/&gt;
        &lt;/local-cache&gt;

        &lt;local-cache name="authorizationRevisions"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="40000"/&gt;
        &lt;/local-cache&gt;
    &lt;/cache-container&gt;
&lt;/infinispan&gt;
</code></pre>

<pre><code class="language-bash"># Sử dụng custom cache config
bin/kc.sh build --cache=ispn --cache-config-file=cache-ispn.xml
bin/kc.sh start --optimized
</code></pre>

<h2 id="9-metrics-va-health-checks"><strong>9. メトリクスとヘルスチェック</strong></h2>

<h3 id="91-metrics-endpoint"><strong>9.1 メトリックエンドポイント</strong></h3>

<pre><code class="language-bash"># Enable metrics (cần set khi build)
bin/kc.sh build --metrics-enabled=true
bin/kc.sh start --optimized
</code></pre>

<p>メトリクスエンドポイント:<code>https://auth.example.com/metrics</code> (プロメテウス形式)</p>

<pre><code class="language-text"># Ví dụ metrics output
# HELP keycloak_logins_total Total successful logins
# TYPE keycloak_logins_total counter
keycloak_logins_total{realm="my-realm",provider="keycloak",client_id="my-app"} 1523

# HELP keycloak_failed_login_attempts_total Total failed login attempts
# TYPE keycloak_failed_login_attempts_total counter
keycloak_failed_login_attempts_total{realm="my-realm",provider="keycloak",client_id="my-app",error="invalid_user_credentials"} 42

# HELP vendor_memoryPool_usage_max_bytes Peak JVM memory pool usage
# TYPE vendor_memoryPool_usage_max_bytes gauge
vendor_memoryPool_usage_max_bytes{name="G1 Old Gen"} 524288000

# HELP vendor_cpu_processCpuLoad JVM Process CPU load
# TYPE vendor_cpu_processCpuLoad gauge
vendor_cpu_processCpuLoad 0.15
</code></pre>

<h3 id="92-health-check-endpoints"><strong>9.2 ヘルスチェックエンドポイント</strong></h3>

<pre><code class="language-bash"># Enable health checks (cần set khi build)
bin/kc.sh build --health-enabled=true
</code></pre>

<table>
<thead>
<tr><th>終点</th><th>目的</th><th>Kubernetes プローブ</th></tr>
</thead>
<tbody>
<tr><td><code>/健康/準備完了</code></td><td>準備状況 - トラフィックを受信する準備ができているか</td><td>レディネスプローブ</td></tr>
<tr><td><code>/健康/ライブ</code></td><td>Liveness - プロセスはまだアクティブです</td><td>ライブネスプローブ</td></tr>
<tr><td><code>/健康/開始しました</code></td><td>スタートアップ - 起動が完了しました</td><td>スタートアッププローブ</td></tr>
<tr><td><code>/健康</code></td><td>総合的な健康状態</td><td>—</td></tr>
</tbody>
</table>

<pre><code class="language-json">// GET /health/ready - Response khi healthy
{
  "status": "UP",
  "checks": [
    {
      "name": "Keycloak database connections health check",
      "status": "UP"
    }
  ]
}

// GET /health/ready - Response khi unhealthy
{
  "status": "DOWN",
  "checks": [
    {
      "name": "Keycloak database connections health check",
      "status": "DOWN",
      "data": {
        "message": "Unable to connect to database"
      }
    }
  ]
}
</code></pre>

<h2 id="10-load-testing-voi-gatling"><strong>10. ガトリングによる負荷テスト</strong></h2>

<h3 id="101-keycloak-benchmark-project"><strong>10.1 Keycloakベンチマークプロジェクト</strong></h3>

<p>Keycloak は、Gatling フレームワークに基づいた公式ベンチマーク プロジェクトを提供します。</p>

<pre><code class="language-bash"># Clone Keycloak benchmark
git clone https://github.com/keycloak/keycloak-benchmark.git
cd keycloak-benchmark

# Build benchmark
mvn clean install -DskipTests

# Run token endpoint benchmark
cd benchmark
mvn gatling:test \
  -Dgatling.simulationClass=keycloak.scenario.authentication.ClientSecret \
  -Dkeycloak.server.url=https://auth.example.com \
  -Drealm=benchmark-realm \
  -DclientId=benchmark-client \
  -DclientSecret=benchmark-secret \
  -DusersPerSec=50 \
  -DrampUpPeriod=30 \
  -DwarmUpPeriod=60 \
  -DmeasurementPeriod=180
</code></pre>

<h3 id="102-custom-gatling-simulation"><strong>10.2 カスタムガトリングシミュレーション</strong></h3>

<pre><code class="language-scala">// KeycloakLoadTest.scala
package keycloak.benchmark

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class KeycloakTokenEndpointSimulation extends Simulation {

  val keycloakUrl = System.getProperty("keycloak.url", "https://auth.example.com")
  val realm = System.getProperty("realm", "my-realm")
  val clientId = System.getProperty("clientId", "benchmark-client")
  val clientSecret = System.getProperty("clientSecret", "benchmark-secret")

  val httpProtocol = http
    .baseUrl(keycloakUrl)
    .acceptHeader("application/json")
    .contentTypeHeader("application/x-www-form-urlencoded")
    .disableFollowRedirect

  // Scenario 1: Client Credentials Grant (service-to-service)
  val clientCredentialsScenario = scenario("Client Credentials Flow")
    .exec(
      http("Token Request - Client Credentials")
        .post(s"/realms/$realm/protocol/openid-connect/token")
        .formParam("grant_type", "client_credentials")
        .formParam("client_id", clientId)
        .formParam("client_secret", clientSecret)
        .check(status.is(200))
        .check(jsonPath("$.access_token").exists)
        .check(responseTimeInMillis.lte(500))
    )

  // Scenario 2: Resource Owner Password Grant (user login)
  val passwordGrantScenario = scenario("Resource Owner Password Flow")
    .exec(
      http("Token Request - Password Grant")
        .post(s"/realms/$realm/protocol/openid-connect/token")
        .formParam("grant_type", "password")
        .formParam("client_id", clientId)
        .formParam("client_secret", clientSecret)
        .formParam("username", "test-user")
        .formParam("password", "test-password")
        .check(status.is(200))
        .check(jsonPath("$.access_token").saveAs("accessToken"))
    )
    .pause(1.second)
    .exec(
      http("Token Introspection")
        .post(s"/realms/$realm/protocol/openid-connect/token/introspect")
        .formParam("token", "${accessToken}")
        .formParam("client_id", clientId)
        .formParam("client_secret", clientSecret)
        .check(status.is(200))
        .check(jsonPath("$.active").is("true"))
    )

  // Scenario 3: UserInfo endpoint
  val userInfoScenario = scenario("UserInfo Flow")
    .exec(
      http("Get Token")
        .post(s"/realms/$realm/protocol/openid-connect/token")
        .formParam("grant_type", "password")
        .formParam("client_id", clientId)
        .formParam("client_secret", clientSecret)
        .formParam("username", "test-user")
        .formParam("password", "test-password")
        .check(status.is(200))
        .check(jsonPath("$.access_token").saveAs("accessToken"))
    )
    .exec(
      http("UserInfo")
        .get(s"/realms/$realm/protocol/openid-connect/userinfo")
        .header("Authorization", "Bearer ${accessToken}")
        .check(status.is(200))
    )

  setUp(
    clientCredentialsScenario.inject(
      rampUsersPerSec(1).to(100).during(60.seconds),  // Ramp up
      constantUsersPerSec(100).during(180.seconds),     // Sustained load
      rampUsersPerSec(100).to(1).during(30.seconds)    // Ramp down
    ),
    passwordGrantScenario.inject(
      rampUsersPerSec(1).to(50).during(60.seconds),
      constantUsersPerSec(50).during(180.seconds),
      rampUsersPerSec(50).to(1).during(30.seconds)
    )
  ).protocols(httpProtocol)
    .assertions(
      global.responseTime.percentile3.lt(500),  // p95 < 500ms
      global.responseTime.percentile4.lt(1000), // p99 < 1000ms
      global.successfulRequests.percent.gt(99)  // > 99% success rate
    )
}
</code></pre>

<h2 id="11-production-checklist-summary"><strong>11. 生産チェックリストの概要</strong></h2>

<table>
<thead>
<tr><th>カテゴリ</th><th>アイテム</th><th>状態</th></tr>
</thead>
<tbody>
<tr><td><strong>データベース</strong></td><td>接続プールが調整された PostgreSQL</td><td>☐</td></tr>
<tr><td><strong>データベース</strong></td><td>データベースの自動バックアップ (pg_dump / pg_basebackup)</td><td>☐</td></tr>
<tr><td><strong>データベース</strong></td><td>データベースのレプリケーションが構成されている</td><td>☐</td></tr>
<tr><td><strong>建てる</strong></td><td><code>kc.sh ビルド</code> + <code>開始 --最適化済み</code></td><td>☐</td></tr>
<tr><td><strong>建てる</strong></td><td>多段階の Dockerfile</td><td>☐</td></tr>
<tr><td><strong>ホスト名</strong></td><td><code>--ホスト名</code>構成済み (ホスト名-v2)</td><td>☐</td></tr>
<tr><td><strong>ホスト名</strong></td><td><code>--ホスト名-管理者</code>別のドメインに設定する</td><td>☐</td></tr>
<tr><td><strong>TLS</strong></td><td>有効な TLS 証明書 (Let's Encrypt / CA 署名付き)</td><td>☐</td></tr>
<tr><td><strong>TLS</strong></td><td>TLS 1.2+ を適用、弱い暗号は無効化</td><td>☐</td></tr>
<tr><td><strong>プロキシ</strong></td><td><code>--プロキシヘッダー</code>正しく設定されている</td><td>☐</td></tr>
<tr><td><strong>JVM</strong></td><td>ヒープ サイズ (コンテナー メモリの 50 ～ 70%)</td><td>☐</td></tr>
<tr><td><strong>JVM</strong></td><td>選択された GC アルゴリズム (G1GC/ZGC)</td><td>☐</td></tr>
<tr><td><strong>JVM</strong></td><td>コンテナ対応フラグが有効になっています</td><td>☐</td></tr>
<tr><td><strong>JVM</strong></td><td><code>-XX:+ExitOnOutOfMemoryError</code>セット</td><td>☐</td></tr>
<tr><td><strong>キャッシュ</strong></td><td>Infinispan ローカル キャッシュの調整</td><td>☐</td></tr>
<tr><td><strong>可観測性</strong></td><td>メトリクスエンドポイントが有効になっています (<code>/メトリクス</code>)</td><td>☐</td></tr>
<tr><td><strong>可観測性</strong></td><td>ヘルスチェックが有効になっています (<code>/健康/*</code>)</td><td>☐</td></tr>
<tr><td><strong>可観測性</strong></td><td>ログの構成 (JSON 形式、ログ レベル)</td><td>☐</td></tr>
<tr><td><strong>安全</strong></td><td>別のドメイン/ネットワーク上の管理コンソール</td><td>☐</td></tr>
<tr><td><strong>安全</strong></td><td>デフォルトの管理者の資格情報が変更されました</td><td>☐</td></tr>
<tr><td><strong>安全</strong></td><td>ブルートフォース保護が有効になっています</td><td>☐</td></tr>
<tr><td><strong>安全</strong></td><td>CORS が正しく構成されている</td><td>☐</td></tr>
<tr><td><strong>負荷テスト</strong></td><td>ガトリング ベンチマークに合格 (p95 < 500ms)</td><td>☐</td></tr>
<tr><td><strong>負荷テスト</strong></td><td>容量計画の文書化</td><td>☐</td></tr>
<tr><td><strong>バックアップ</strong></td><td>レルムエクスポートの自動化</td><td>☐</td></tr>
<tr><td><strong>バックアップ</strong></td><td>災害復旧計画のテスト済み</td><td>☐</td></tr>
</tbody>
</table>

<pre><code class="language-bash"># Complete production start command
bin/kc.sh start --optimized \
  --db=postgres \
  --db-url="jdbc:postgresql://db-host:5432/keycloak?ssl=true" \
  --db-username=keycloak \
  --db-password="${KC_DB_PASSWORD}" \
  --db-pool-initial-size=25 \
  --db-pool-min-size=25 \
  --db-pool-max-size=100 \
  --hostname=auth.example.com \
  --hostname-admin=admin-auth.internal.example.com \
  --hostname-strict=true \
  --proxy-headers=xforwarded \
  --https-certificate-file=/certs/tls.crt \
  --https-certificate-key-file=/certs/tls.key \
  --http-enabled=false \
  --health-enabled=true \
  --metrics-enabled=true \
  --log=console \
  --log-level=info \
  --log-console-output=json
</code></pre>

<pre><code class="language-bash"># Docker Compose cho production
# docker-compose.production.yml
</code></pre>

<pre><code class="language-yaml">version: "3.9"

services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: keycloak
      POSTGRES_USER: keycloak
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    volumes:
      - pgdata:/var/lib/postgresql/data
      - ./postgresql.conf:/etc/postgresql/postgresql.conf
    command: postgres -c config_file=/etc/postgresql/postgresql.conf
    secrets:
      - db_password
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U keycloak"]
      interval: 10s
      timeout: 5s
      retries: 5
    deploy:
      resources:
        limits:
          cpus: "2.0"
          memory: 4G

  keycloak:
    image: my-registry/keycloak-production:26.0
    build:
      context: .
      dockerfile: Dockerfile.keycloak
    environment:
      KC_DB_URL: jdbc:postgresql://postgres:5432/keycloak
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD_FILE: /run/secrets/db_password
      KC_DB_POOL_INITIAL_SIZE: "25"
      KC_DB_POOL_MIN_SIZE: "25"
      KC_DB_POOL_MAX_SIZE: "100"
      KC_HOSTNAME: auth.example.com
      KC_HOSTNAME_ADMIN: admin-auth.internal.example.com
      KC_PROXY_HEADERS: xforwarded
      KC_HTTPS_CERTIFICATE_FILE: /certs/tls.crt
      KC_HTTPS_CERTIFICATE_KEY_FILE: /certs/tls.key
      KC_HTTP_ENABLED: "false"
      KC_LOG: console
      KC_LOG_LEVEL: info
      KC_LOG_CONSOLE_OUTPUT: json
      JAVA_OPTS_KC_HEAP: "-XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=70.0"
      JAVA_OPTS_APPEND: >-
        -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:+UseContainerSupport
        -XX:+ExitOnOutOfMemoryError -Djava.net.preferIPv4Stack=true
    volumes:
      - ./certs:/certs:ro
    secrets:
      - db_password
    ports:
      - "8443:8443"
    depends_on:
      postgres:
        condition: service_healthy
    healthcheck:
      test: ["CMD-SHELL", "curl -sf https://localhost:8443/health/ready || exit 1"]
      interval: 15s
      timeout: 5s
      retries: 5
      start_period: 120s
    deploy:
      resources:
        limits:
          cpus: "2.0"
          memory: 2G

volumes:
  pgdata:

secrets:
  db_password:
    file: ./secrets/db_password.txt
</code></pre>
