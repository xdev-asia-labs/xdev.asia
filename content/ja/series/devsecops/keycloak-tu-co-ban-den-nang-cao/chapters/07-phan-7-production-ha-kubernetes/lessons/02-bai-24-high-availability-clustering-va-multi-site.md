---
id: 019d8b30-b124-7001-c001-e0c5f8100124
title: 'レッスン 24: 高可用性、クラスタリング、およびマルチサイト'
slug: bai-24-high-availability-clustering-va-multi-site
description: Keycloak高可用性の概念、Infinispan分散キャッシュ（組み込み対外部）、キャッシュスタック構成（kubernetes、jdbc-ping、dns-ping）、セッションレプリケーション、外部Infinispanサーバーセットアップ、マルチサイト/クロスデータセンター展開、アクティブ/パッシブ対アクティブ/アクティブパターン、データベースレプリケーション（PostgreSQL Patroni、PgBouncer）、ロードバランサースティッキーセッション、スプリットブレイン処理、災害復旧戦略。
duration_minutes: 260
is_free: true
video_url: null
sort_order: 24
section_title: 'パート 7: 本番環境、HA、および Kubernetes'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6359" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6359)"/>

  <!-- Decorations -->
  <g>
    <circle cx="711" cy="103" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="822" cy="214" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="933" cy="65" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1044" cy="176" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="287" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="153" x2="1100" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="183" x2="1050" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="977.2487113059643,139 977.2487113059643,167 953,181 928.7512886940357,167 928.7512886940357,139 953,125" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — レッスン 24</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 24: 高可用性、クラスタリング、</tspan>
      <tspan x="60" dy="42">マルチサイト</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">_Keycloak の基本から高度なもの__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: 実稼働、HA、および Kubernetes</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ha-architecture-overview"><strong>1. HA アーキテクチャの概要</strong></h2>

<p>Keycloak 高可用性は、1 つ以上のノードに障害が発生した場合でも、認証/認可システムが継続的に動作することを保証します。 HA は、__HTMLTAG_72___クラスタリング (Infinispan)</strong>、__HTMLTAG_74___データベース レプリケーション</strong>、__HTMLTAG_76___ロード バランシング</strong>.</p> の 3 つの柱に基づいています。

___プレコード_0___

<h2 id="2-infinispan-cache-types"><strong>2. Infinispan キャッシュ タイプ</strong></h2>

<h3 id="21-local-vs-distributed-replicated-caches"><strong>2.1 ローカル キャッシュと分散/複製キャッシュ</strong></h3>

<p>_Keycloak は、異なる目的で 2 種類の Infinispan キャッシュを使用します:</p><table>
<thead>
<tr><th>キャッシュタイプ</th><th>説明_</th><th>Keycloakキャッシュ</th><th>クラスターモード_</th></tr>
</thead>
<tbody>
<tr><td><strong>ローカル キャッシュ</strong></td><td>DB から読み取れるメタデータに使用されるデータを現在のノードに保存します</td><td><code>realms</code>、 <code>ユーザー</code>、__HTMLTAG_115___認可__HTMLTAG_116___、__HTMLTAG_117___キー</code></td><td>ローカル + 無効化メッセージ</td></tr>
<tr><td><strong>分散キャッシュ</strong></td><td>セッション データに使用されるクラスター内の N 人の所有者に分散されたデータ</td><td><code>セッション</code>、 <code>authenticationSessions</code>、__HTMLTAG_135___offlineSessions</code>、__HTMLTAG_137___clientSessions</code>、 <code>offlineClientSessions</code></td><td>分散 (デフォルトは 2 人の所有者)</td></tr>
<tr><td><strong>レプリケートされたキャッシュ</strong></td><td>すべてのノードでデータがレプリケート_</td><td><code>work</code> (クラスター)通信)_</td><td>複製</td></tr>
</tbody>
</table>

<h3 id="22-keycloak-caching-architecture-chi-tiet"><strong>2.2 Keycloak キャッシュ アーキテクチャの詳細</strong></h3>

___プレコード_1___

<h2 id="3-embedded-vs-external-infinispan"><strong>3.埋め込み型と外部 Infinispan</strong></h2>

<h3 id="31-embedded-infinispan-default"><strong>3.1 埋め込み Infinispan (デフォルト)</strong></h3>

<p>_デフォルトでは、KeycloakはInfinispanをJVMプロセスに埋め込みます。ノードは検出プロトコルを通じて相互に検出し、自動的にクラスターを形成します:</p>

___プレコード_2___

<h3 id="32-external-infinispan"><strong>3.2 外部 Infinispan</strong></h3>

<p>マルチサイト展開の場合、または個別のキャッシュ レイヤー管理が必要な場合は、外部 Infinispan サーバーを使用します:</p>

___プレコード_3___<table>
<thead>
<tr><th>機能</th><th>埋め込みInfinispan</th><th>外部Infinispan</th></tr>
</thead>
<tbody>
<tr><td>セットアップの複雑さ</td><td>シンプル、構成不要_</td><td>別のInfinispanクラスタを展開する必要がある__HTMLTAG_199___</tr>
<tr><td>マルチサイト</td><td>❌ サポートされていません</td><td>✅ データセンター間レプリケーション_</td></tr>
<tr><td>_スケーラビリティ</td><td>10 ノード以下に適しています_</td><td>大規模な展開に適しています_</td></tr>
<tr><td>管理</td><td>自動</td><td>別途Infinispanモニター/管理が必要</td></tr>
<tr><td>ユースケース</td><td>単一サイト、単一クラスター_</td><td>マルチサイト、DR、大規模展開_</td></tr>
</tbody>
</table>

<h2 id="4-cache-stack-configuration"><strong>4.キャッシュ スタック構成_</strong></h2>

<h3 id="41-kubernetes-kube_ping"><strong>4.1 Kubernetes (KUBE_PING)</strong></h3>

<p>Kubernetes では、__HTMLTAG_244___KUBE_PING</strong> (dns.DNS_PING) を使用して、Keycloak ポッドが Kubernetes API または DNS 経由で相互に検出できるようにします:</p>

___プレコード_4___

<p>Kubernetes Keycloak が DNS 検出を機能させるには、<strong>ヘッドレス サービス</strong> が必要です:</p>

___プレコード_5___

___プレコード_6___

<h3 id="42-jdbc-ping-cho-vm-deployments"><strong>4.2 JDBC-PING (VM デプロイメント用)</strong></h3>

<p>VM (Kubernetes なし) にデプロイする場合は、__HTMLTAG_256___JDBC_PING</strong> を使用して、共有データベース経由でノードが相互に検出できるようにします:</p>

___プレコード_7___

<h3 id="43-dns-ping"><strong>4.3 DNS-PING</strong></h3>

___プレコード_8___

<h2 id="5-external-infinispan-server-setup"><strong>5.外部 Infinispan サーバーのセットアップ</strong></h2>

<h3 id="51-infinispan-server-configuration"><strong>5.1 Infinispan サーバー構成</strong></h3>

___プレコード_9___

<h3 id="52-keycloak-remote-cache-config"><strong>_5.2 Keycloakリモートキャッシュ構成</strong></h3>

<p>外部 Infinispan に接続するように Keycloak を構成する:</p>

___プレコード_10___

<h2 id="6-multi-site-deployment"><strong>6.マルチサイト展開</strong></h2>

<h3 id="61-active-passive-pattern"><strong>_6.1 アクティブ/パッシブ パターン</strong></h3>

<p>アクティブ/パッシブでは、__HTMLTAG_286___プライマリ サイト</strong> のみがトラフィックを処理します。スタンバイ状態のバックアップ サイト。プライマリに問題が発生した場合に引き継ぐ準備ができています:</p>

___プレコード_11___

<h3 id="62-active-active-pattern"><strong>_6.2 アクティブ/アクティブ パターン</strong></h3>

<p>アクティブ/アクティブでは、__HTMLTAG_294___両方のサイト__HTMLTAG_295___が同時にトラフィックを処理します。より複雑ですが、リソースを最大限に活用します:</p>

___プレコード_12___<table>
<thead>
<tr><th>機能</th><th>アクティブ-パッシブ</th><th>アクティブ-アクティブ</th></tr>
</thead>
<tbody>
<tr><td>_トラフィック処理</td><td>一度に 1 つのサイト_</td><td>同時に両方のサイト_</td></tr>
<tr><td>リソース使用率</td><td>50% (パッシブサイトアイドル状態)</td><td>100%</td></tr>
<tr><td>_複雑さ</td><td>低位_</td><td>高位（競合解決）</td></tr>
<tr><td>フェイルオーバー時間_</td><td>DNS 切り替えが必要 (秒-分)_</td><td>自動 (GSLB)_</td></tr>
<tr><td>_データ一貫性</td><td>強力 (同期 repl)_</td><td>最終的 (非同期クロスサイト)_</td></tr>
<tr><td>DB 要件</td><td>プライマリ-スタンバイ</td><td>マルチマスターまたは共有 DB_</td></tr>
</tbody>
</table>

<h3 id="63-cross-datacenter-infinispan-configuration"><strong>6.3 クロスデータセンター Infinispan 構成</strong></h3>

___プレコード_13___

<h2 id="7-database-replication"><strong>7.データベース レプリケーション</strong></h2>

<h3 id="71-postgresql-patroni-pgbouncer"><strong>7.1 PostgreSQL Patroni + PgBouncer</strong></h3>

<p><strong>Patroni</strong> は PostgreSQL HA (自動フェイルオーバー) を管理し、__HTMLTAG_374___PgBouncer</strong> は接続プーリングを提供します:</p>

___プレコード_14___

<h3 id="72-patroni-configuration"><strong>7.2 Patroni の構成</strong></h3>

___プレコード_15___

<h3 id="73-pgbouncer-configuration"><strong>_7.3 PgBouncer 構成</strong></h3>

___プレコード_16___

<h2 id="8-load-balancer-configuration"><strong>8.ロード バランサの構成_</strong></h2>

<h3 id="81-sticky-sessions"><strong>8.1 スティッキーセッション</strong></h3>

<p>Keycloak <strong> 認証フロー (ログイン、登録) にはスティッキー セッション</strong> が必要です。 Cookie ベースのセッション アフィニティ <code>KC_ROUTE</code> (以前の <code>KEYCLOAK_SESSION</code>):</p>

<h3 id="82-haproxy-configuration"><strong>8.2 HAProxy 構成</strong></h3>

___プレコード_17___

<h3 id="83-nginx-load-balancer"><strong>_8.3 Nginx ロード バランサー</strong></h3>

___プレコード_18___

<h2 id="9-split-brain-handling"><strong>9。スプリット ブレイン処理_</strong></h2>

<h3 id="91-split-brain-scenarios"><strong>_9.1 スプリット ブレイン シナリオ</strong></h3>

<p>スプリット ブレインは、ネットワーク パーティションがクラスターを 2 つ以上のパーティションに分割し、各パーティションがもう一方が機能していないと認識する場合に発生します:</p>

___プレコード_19___

<h3 id="92-merge-policies"><strong>_9.2 マージポリシー</strong></h3>

___プレコード_20___<table>
<thead>
<tr><th>_マージ ポリシー</th><th>動作</th><th>ユースケース</th></tr>
</thead>
<tbody>
<tr><td><code>PREFERRED_NON_NULL</code></td><td>_マージ時に null 以外のエントリを保持_</td><td>_セッション - セッションが失われるよりも優れています___HTMLTAG_443__HTMLTAG_444___
<tr><td><code>REMOVE_ALL</code></td><td>競合するエントリをすべて削除</td><td>データの一貫性が最も重要な場合</td></tr>
<tr><td><code>優先_常に</code></td><td>より大きなパーティションからのエントリを保持_</td><td>汎用</td></tr>
</tbody>
</table>

<h2 id="10-disaster-recovery-strategies"><strong>10.災害復旧戦略</strong></h2>

<h3 id="101-rpo-rto-targets"><strong>_10.1 RPO/RTO 目標</strong></h3>

<table>
<thead>
<tr><th>階層</th><th>RPO</th><th>RTO</th><th>_戦略</th></tr>
</thead>
<tbody>
<tr><td>Tier 1 (重大)_</td><td>0 (データ損失ゼロ)_</td><td>&lt; 5 分</td><td>アクティブ-アクティブ + 同期 DB レプリケーション</td></tr>
<tr><td>Tier 2 (重要)</td><td>&lt; 1 分_</td><td>&lt; 15 分</td><td>アクティブ/パッシブ + 非同期レプリケーション + 自動フェイルオーバー</td></tr>
<tr><td>_Tier 3 (標準)</td><td>&lt; 1 時間</td><td>&lt; 1 時間</td><td>バックアップ/復元 + 手動フェイルオーバー</td></tr>
</tbody>
</table>

<h3 id="102-backup-restore"><strong>_10.2 バックアップと復元</strong></h3>

___プレコード_21___

___プレコード_22___

<h3 id="103-failover-automation"><strong>10.3 フェイルオーバーの自動化</strong></h3>

___プレコード_23___

<h2 id="11-docker-compose-ha-cluster"><strong>11. Docker Compose HA クラスター</strong></h2>

<p>2 つの Keycloak ノード + 外部 Infinispan + PostgreSQL を使用した完全な例:</p>

___プレコード_24___

<h2 id="12-infinispan-cli-va-monitoring"><strong>12. Infinispan CLI とモニタリング</strong></h2>

___プレコード_25___