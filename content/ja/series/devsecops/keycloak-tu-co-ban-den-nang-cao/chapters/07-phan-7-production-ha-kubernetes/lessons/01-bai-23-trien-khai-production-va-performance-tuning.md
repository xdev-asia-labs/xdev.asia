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
      <tspan x="60" dy="0">レッスン 23: 本番環境のデプロイと</tspan>
      <tspan x="60" dy="42">パフォーマンス チューニング</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: 実稼働、HA、および Kubernetes</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-production-deployment-checklist"><strong>1.本番展開チェックリスト</strong></h2>

<p>Keycloakを本番環境にデプロイするには、データベース、ネットワーク、JVM、キャッシュ、セキュリティを慎重に構成する必要があります。この記事では、データベースの選択から負荷テストまでの包括的なガイダンスを提供します。</p>

___プレコード_0___

<h2 id="2-database-selection-va-configuration"><strong>2.データベースの選択と構成_</strong></h2>

<h3 id="21-database-support-matrix"><strong>2.1 データベース サポート マトリックス</strong></h3><table>
<thead>
<tr><th>データベース</th><th>ベンダーフラグ</th><th>推奨_</th><th>メモ_</th></tr>
</thead>
<tbody>
<tr><td>PostgreSQL</td><td><code>postgres</code></td><td>✅ はい</td><td>最もテストされた Keycloak チームによって承認された最高のパフォーマンス</td></tr>
<tr><td>MySQL_</td><td><code>mysql</code></td><td>⚠️ OK</td><td>InnoDB、utf8mb4 が必要文字セット</td></tr>
<tr><td>MariaDB</td><td><code>_mariadb</code></td><td>⚠️ OK</td><td>MySQL に類似</td></tr>
<tr><td>_Oracle_</td><td><code>_oracle</code></td><td>⚠️ OK</td><td>エンタープライズライセンスが必要</td></tr>
<tr><td>_Microsoft SQL Server</td><td><code>mssql_</code></td><td>⚠️ OK</td><td>Windows 環境</td></tr>
<tr><td>H2 (埋め込み)</td><td><code>dev-file</code>/<code>dev-mem</code></td><td>❌いいえ_</td><td>開発専用</td></tr>
</tbody>
</table>

<h3 id="22-postgresql-configuration"><strong>2.2 PostgreSQL 構成</strong></h3>

___プレコード_1___

<p>環境変数あり (コンテナーに推奨):</p>

___プレコード_2___

<h3 id="23-connection-pool-tuning-agroal"><strong>2.3 接続プールのチューニング (Agroal)</strong></h3>

<p>Keycloak は <strong>Agroal</strong> 接続プールを使用します (Quarkus のデフォルト)。接続プールのチューニングはパフォーマンスに影響を与える重要な要素です:</p>

___プレコード_3___

<table>
<thead>
<tr><th>パラメータ_</th><th>デフォルト_</th><th>本番推奨</th><th>説明_</th></tr>
</thead>
<tbody>
<tr><td><code>--db-pool-initial-size</code></td><td>0</td><td>25</td><td>初期接続数</td></tr>
<tr><td><code>--db-pool-min-size</code></td><td>0</td><td>25</td><td>維持される最小接続数</td></tr>
<tr><td><code>--db-pool-max-size</code>___HTMLTAG_22 7___<td>100</td><td>50–100</td><td>最大数接続_</td></tr>
</tbody>
</table><p><strong>接続プールのサイズ設定の原則:</strong></p>

___プレコード_4___

<p>サーバー側 PostgreSQL 構成 (<code>postgresql.conf</code>):</p>

___プレコード_5___

<h2 id="3-build-optimization"><strong>3.ビルドの最適化_</strong></h2>

<h3 id="31-build-vs-start-phases"><strong>3.1 構築フェーズと開始フェーズ</strong></h3>

<p>Keycloak には、__HTMLTAG_254___build</strong> (パッケージ化構成) と <strong>start</strong> (サーバーの実行) の 2 つのフェーズがあります。運用環境では、常に <code>--optimized</code> を使用して 2 つのフェーズを分離し、起動を大幅に高速化します。</p>

___プレコード_6___

___プレコード_7___

<h3 id="32-production-dockerfile"><strong>_3.2 運用 Dockerfile</strong></h3>

___プレコード_8___

<h2 id="4-hostname-configuration"><strong>4.ホスト名の構成</strong></h2>

<h3 id="41-hostname-v2-provider"><strong>4.1 ホスト名 v2 プロバイダ</strong></h3>

<p>Keycloak は <strong>hostname-v2</strong> プロバイダー (Keycloak 25 以降のデフォルト) を使用して、すべてのエンドポイント (フロントエンド、バックエンド、管理) の URL を定義します:</p>

___プレコード_9___

<table>
<thead>
<tr><th>パラメータ</th><th>説明</th><th>例_</th></tr>
</thead>
<tbody>
<tr><td><code>--hostname</code></td><td>フロントエンド URL のホスト名 (ログイン ページ、よく知られている)エンドポイント)</td><td><code>auth.example.com</code></td></tr>
<tr><td><code>--hostname-admin</code></td><td>管理コンソールの特別なホスト名 (フロントエンドと異なる場合)。設定なし = 共有 <code>--ホスト名</code></td><td><code>admin-auth.internal.com</code></td></tr>
<tr><td><code>--hostname-strict</code></td><td>構成されたホスト名へのリクエストのみを許可します。デフォルト: <code>true</code></td><td><code>_true</code></td></tr>
<tr><td><code>--hostname-backchannel-dynamic</code></td><td>バックエンド URL は、固定ホスト名の代わりにリクエスト ホスト名を使用します。デフォルト: <code>false</code></td><td><code>false</code></td></tr>
</tbody>
</table>

<h3 id="42-hostname-scenarios"><strong>4.2 ホスト名のシナリオ</strong></h3>

___プレコード_10___

<h2 id="5-proxy-configuration"><strong>5.プロキシ構成_</strong></h2>

<h3 id="51-proxy-headers"><strong>5.1 プロキシ ヘッダー</strong></h3>

<p>Keycloak がリバース プロキシ (Nginx、HAProxy、AWS ALB...) の背後にある場合、Keycloak が正しいクライアント IP、プロトコル、ホスト名を受信できるようにプロキシ ヘッダーを設定する必要があります:</p>

___プレコード_11___<table>
<thead>
<tr><th>ヘッダー_</th><th>目的_</th><th>フラグ_</th></tr>
</thead>
<tbody>
<tr><td><code>X-Forwarded-For</code></td><td>クライアントIPアドレス</td><td><code>xforwarded</code></td></tr>
<tr><td><code>X-Forwarded-Proto</code></td><td>元のプロトコル (http/https)</td><td><code>xforwarded</code></td></tr>
<tr><td><code>X-転送ホスト</code></td><td>元のホスト名</td><td><code>xforwarded</code></td></tr>
<tr><td><code>X-Forwarded-Port</code></td><td>元のポート</td><td><code>xforwarded</code></td></tr>
<tr><td><code>Forwarded</code></td><td>RFC 7239結合ヘッダ</td><td><code>forwarded</code></td></tr>
</tbody>
</table>

<h3 id="52-nginx-reverse-proxy-config"><strong>5.2 Nginx リバース プロキシ構成</strong></h3>

___プレコード_12___

<h3 id="53-http2-support"><strong>5.3 HTTP/2 サポート</strong></h3>

___プレコード_13___

<h2 id="6-jvm-tuning"><strong>6. JVM チューニング_</strong></h2>

<h3 id="61-heap-configuration"><strong>_6.1 ヒープ構成</strong></h3>

<p>Keycloak は Quarkus/JVM 上で実行されるため、JVM のチューニングはパフォーマンスと安定性に直接影響します:</p>

___プレコード_14___

<h3 id="62-garbage-collector-selection"><strong>_6.2 ガベージ コレクターの選択</strong></h3>

___プレコード_15___

<table>
<thead>
<tr><th>GC アルゴリズム</th><th>最適</th><th>ヒープ サイズ</th><th>一時停止時間</th></tr>
</thead>
<tbody>
<tr><td>G1GC</td><td>汎用、バランスの取れたスループット/レイテンシ</td><td>≤ 4GB</td><td>~200ms</td></tr>
<tr><td>ZGC</td><td>低遅延、大規模ヒープ</td><td>&gt; 4GB</td><td>&lt; 1ms</td></tr>
<tr><td>シェナンドー</td><td>低遅延、同時</td><td>&gt; 2GB</td><td>&lt; 10 ミリ秒</td></tr>
</tbody>
</table>

<h3 id="63-container-aware-jvm-settings"><strong>_6.3 コンテナ対応 JVM 設定</strong></h3>

___プレコード_16___

<h3 id="64-complete-jvm-configuration"><strong>6.4 完全な JVM 構成</strong></h3>

___プレコード_17___<h2 id="7-quarkus-thread-pool-va-vertx"><strong>_7. Quarkus スレッド プールと Vert.x</strong></h2>

<p>_Keycloak は Quarkus (Vert.x イベント ループ + ワーカー スレッド プール) 上で実行されます。このパターンを理解すると、正しいチューニングに役立ちます:</p>

___プレコード_18___

___プレコード_19___

<table>
<thead>
<tr><th>パラメータ</th><th>デフォルト</th><th>説明_</th></tr>
</thead>
<tbody>
<tr><td>___HTMLTAG_529__quarkus.thread-pool.max-threads_</code></td><td>200 (または 8 × CPU 最大)</td><td>最大ワーカー スレッド</td></tr>
<tr><td>___HTMLTAG_539__quarkus.thread-pool.queue-size_</code></td><td>unbounded</td><td>すべてのスレッドがビジー状態のときのキュー サイズ</td></tr>
<tr><td><code>quarkus.thread-pool.growth-resistance_</code></td><td>0</td><td>0–1、スレッド プールの成長抵抗</td></tr>
<tr><td><code>quarkus.vertx.event-loops-pool-size</code></td><td>2 × CPU</td><td>Vert.x イベント ループ スレッド</td></tr>
</tbody>
</table>

<h2 id="8-infinispan-local-cache-tuning"><strong>8. Infinispan ローカル キャッシュのチューニング</strong></h2>

<h3 id="81-keycloak-cache-architecture"><strong>8.1 Keycloakキャッシュアーキテクチャ</strong></h3>

<p>Keycloak は、Infinispan ローカル キャッシュを使用してメタデータ (レルム、ユーザー、キーなど) をキャッシュし、データベース クエリを削減します。キャッシュ サイズと寿命の調整はパフォーマンスに大きく影響します:</p>

___プレコード_20___

<h3 id="82-custom-cache-configuration"><strong>_8.2 カスタム キャッシュ構成</strong></h3>

<p>カスタム <code>cache-ispn.xml</code> ファイルを作成します:</p>

___プレコード_21___

___プレコード_22___

<h2 id="9-metrics-va-health-checks"><strong>9.メトリクスとヘルスチェック_</strong></h2>

<h3 id="91-metrics-endpoint"><strong>_9.1 メトリクスエンドポイント</strong></h3>

___プレコード_23___

<p>メトリクス エンドポイント: <code>https://auth.example.com/metrics</code> (Prometheus 形式)</p>

___プレコード_24___

<h3 id="92-health-check-endpoints"><strong>_9.2 ヘルスチェックエンドポイント</strong></h3>

___プレコード_25___<table>
<thead>
<tr><th>エンドポイント_</th><th>目的_</th><th>Kubernetesプローブ</th></tr>
</thead>
<tbody>
<tr><td><code>/health/ready</code></td><td>Readiness - トラフィックを受信する準備ができています</td><td>readinessProbe</td></tr>
<tr><td><code>/health/live</code></td><td>Liveness - プロセスはライブでアクティブです</td><td>livenessProbe</td></tr>
<tr><td><code>/健康/開始</code></td><td>スタートアップ - 開始完了</td><td>startupProbe</td></tr>
<tr><td><code>/健康</code></td><td>複合健康状態_</td><td></td></tr>
</tbody>
</table>

___プレコード_26___

<h2 id="10-load-testing-voi-gatling"><strong>10. Gatling による負荷テスト</strong></h2>

<h3 id="101-keycloak-benchmark-project"><strong>10.1 Keycloak Benchmark Project</strong></h3>

<p>_Keycloak は、Gatling フレームワークに基づいた公式ベンチマーク プロジェクトを提供します:</p>

___プレコード_27___

<h3 id="102-custom-gatling-simulation"><strong>_10.2 カスタム ガトリング シミュレーション</strong></h3>

___プレコード_28___

<h2 id="11-production-checklist-summary"><strong>11.制作チェックリストの概要_</strong></h2><table>
<thead>
<tr><th>_カテゴリ</th><th>アイテム_</th><th>ステータス_</th></tr>
</thead>
<tbody>
<tr><td><strong>データベース</strong></td><td>_接続プールを調整したPostgreSQL</td><td>☐</td></tr>
<tr><td><strong>データベース</strong></td><td>データベース自動バックアップ (pg_dump / pg_basebackup)</td><td>☐</td></tr>
<tr><td><strong>データベース</strong></td><td>データベース レプリケーションが構成されました</td><td>☐</td></tr>
<tr><td><strong>Build</strong></td><td><code>kc.sh build</code> + <code>start --最適化</code></td><td>☐</td></tr>
<tr><td><strong>Build</strong></td><td>_多段階 Dockerfile_</td><td>☐</td></tr>
<tr><td><strong>ホスト名</strong></td><td><code>--ホスト名_</code> 構成済み (ホスト名-v2)</td><td>☐</td></tr>
<tr><td><strong>ホスト名</strong></td><td><code>_--hostname-admin_</code> 別のドメインに設定</td><td>☐</td></tr>_
<tr><td><strong>TLS</strong></td><td>有効な TLS 証明書 (Let's Encrypt / CA 署名)</td><td>☐</td></tr>
<tr><td><strong>TLS</strong></td><td>TLS 1.2+ 有効、弱い暗号は無効</td><td>☐</td></tr>
<tr><td><strong>プロキシ</strong></td><td><code>--プロキシ ヘッダー_</code> 正しく構成</td><td>☐</td></tr>
<tr><td><strong>JVM</strong></td><td>ヒープ サイズ (コンテナ メモリの 50 ～ 70%)</td><td>☐</td></tr>
<tr><td><strong>JVM</strong></td><td>GC アルゴリズムが選択されました (G1GC/ZGC)</td><td>☐</td></tr>
<tr><td><strong>JVM</strong></td><td>_コンテナ対応フラグの有効化</td><td>☐</td></tr>
<tr><td><strong>JVM</strong></td><td><code>-XX:+ExitOnOutOfMemoryError</code> set_</td><td>☐</td></tr>
<tr><td><strong>キャッシュ</strong></td><td>Infinispan ローカル キャッシュの調整</td><td>☐</td></tr>
<tr><td><strong>可観測性</strong></td><td>メトリクスエンドポイントが有効になりました(<code>/メトリクス</code>)</td><td>☐</td></tr>
<tr><td><strong>可観測性</strong></td><td>ヘルスチェックが有効になりました(<code>/健康/*</code>)</td><td>☐</td></tr>
<tr><td><strong>可観測性</strong></td><td>ログ設定 (JSON 形式、ログレベル)</td><td>☐</td></tr>
<tr><td><strong>セキュリティ</strong></td><td>別のドメイン/ネットワーク上の管理コンソール</td><td>☐</td></tr>
<tr><td><strong>セキュリティ</strong></td><td>デフォルトの管理者資格情報が変更されました</td><td>☐</td></tr>
<tr><td><strong>セキュリティ</strong></td><td>_ブルートフォース保護有効_</td><td>☐</td></tr>
<tr><td><strong>セキュリティ</strong></td><td>CORS が正しく構成されています</td><td>☐</td></tr>
<tr><td><strong>負荷テスト</strong></td><td>ガトリングベンチマークに合格しました (p95 < 500ms)</td><td>☐</td></tr>
<tr><td><strong>負荷テスト</strong></td><td>_容量計画の文書化_</td><td>☐</td></tr>
<tr><td><strong>バックアップ</strong></td><td>_レルムエクスポートの自動_</td><td>☐</td></tr>
<tr><td><strong>バックアップ</strong></td><td>_障害復旧計画のテスト</td><td>☐</td></tr>
</tbody>
</table>___プレコード_29___

___プレコード_30___

___プレコード_31___