---
id: 019c9618-0103-7000-8000-c1147ba22e11
title: 'レッスン 12: ステートフルセット'
slug: bai-12-statefulsets
description: 'ステートフル アプリケーションの StatefulSet: データベース、メッセージ ブローカー、分散システム。安定したネットワーク ID、順序付けられたデプロイメント/スケーリング、ポッドごとの永続ストレージ。 PostgreSQL、Kafka、Redis Cluster の使用例。'
duration_minutes: 85
is_free: false
video_url: null
sort_order: 12
section_title: 'モジュール 3: 構成とストレージ'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1531" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1531)"/>

  <!-- Decorations -->
  <g>
    <circle cx="702" cy="196" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="804" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="906" cy="220" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="1008" cy="102" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="610" cy="244" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="96" x2="1100" y2="176" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="126" x2="1050" y2="196" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="972.8467875173176,130.5 972.8467875173176,161.5 946,177 919.1532124826824,161.5 919.1532124826824,130.5 946,115" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — レッスン 12</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 12: ステートフルセット</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 3: 構成とストレージ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>StatefulSets: Kubernetes でのステートフル アプリケーションの実行</h2>

<p>Deployment はステートレス アプリケーションのデフォルトのワークロード コントローラーです。各ポッドは同一で交換可能なため、自由にスケールアップ/スケールダウンできます。しかし、データベース、メッセージ ブローカー、分散システムでは、各インスタンスに独自の <em>identity</em>、独自の <em>storage</em>、および意味のある起動/シャットダウン順序が必要です。これが、StatefulSet が存在する理由です。</p>

<h2>StatefulSet とデプロイメント__HTMLTAG_74___

<h3>デプロイメントを使用する場合</h3>

<ul>
  <li>ステートレス アプリケーション: Web サーバー、API サービス、マイクロサービス</li>
  <li>すべてのポッドはあらゆるリクエストを処理できます__HTMLTAG_81___
  <li>各ポッドに個別の永続ストレージは必要ありません</li>
  <li>操作に影響を与えることなくポッドをランダムに交換可能</li>
</ul>

<h3>_StatefulSet を使用する場合</h3>

<ul>
  <li>アプリケーションには安定したネットワーク ID が必要です (ポッド名は変更されません)</li>
  <li>各ポッドには独自の永続ストレージ (プライマリ、レプリカ-1、レプリカ-2)</li> が必要です
  <li>展開、スケーリング、削除の重要な順序__HTMLTAG_95___
  <li>予測可能な DNS 名に基づくピア検出</li>
  <li>ユースケース: PostgreSQL、MySQL クラスター、Redis クラスター、Kafka、Zookeeper、Elasticsearch</li>
</ul>

<h3>視覚的な比較</h3>

___コードブロック_0___

<h2>StatefulSet の保証</h2>

<h3>安定したポッド ID</h3><p>StatefulSet 内の各ポッドには、__HTMLTAG_108___{statefulset-name}-{ordinal}</code> のパターンに従って名前が付けられます。序数は 0 から始まり、徐々に増加します。 Pod が削除されて再作成された場合でも、同じ ID を受け取ります (<code>postgres-1</code> は常に <code>postgres-1</code> です)。</p>

<h3>ヘッドレス サービスによる安定したネットワーク ID</h3>

<p>StatefulSet では、各ポッドの DNS エントリを作成するためにヘッドレス サービス (ClusterIP: なし) が必要です。ヘッドレス サービスでは、DNS はクラスター IP をポイントせず、ポッド IP を直接ポイントします。</p>

___コードブロック_1___

<p>ヘッドレス サービスでは、DNS レコードが次のパターンに従って作成されます:</p>
<ul>
  <li><code>postgres-0.postgres.production.svc.cluster.local</code></li>
  <li><code>postgres-1.postgres.production.svc.cluster.local</code></li>
  <li><code>postgres-2.postgres.production.svc.cluster.local</code></li>
</ul>

<p>これにより、複雑なサービス検出を必要とせずに、Pod が相互に決定的に検索できるようになります。</p>

<h2>StatefulSet: PostgreSQL の例</h2>

___コードブロック_2___

___コードブロック_3___

<h2>StatefulSet: Redis クラスターの例</h2>

___コードブロック_4___

___コードブロック_5___

<h2>StatefulSet: Strimzi 演算子を使用した Kafka</h2>

<h3>Strimzi の紹介</h3>

<p>Kafka は Zookeeper (バージョン 3.x まで) に依存しており、多くの複雑な構成があるため、StatefulSet を使用して純粋な Kafka を実行するのは複雑です。 <strong>Strimzi Operator</strong> は、Kubernetes 上で Kafka クラスターをデプロイおよび管理し、複雑さを抽象化するのに役立つ特殊なオペレーターです。</p>

___コードブロック_6___

___コードブロック_7___

___コードブロック_8___

<h2>更新戦略</h2>

<h3>ローリングアップデート (デフォルト)</h3>

___コードブロック_9___

___コードブロック_10___

<h3>_削除時戦略</h3>

___コードブロック_11___

___コードブロック_12___

<h2>CloudNativePG: PostgreSQL の新しい標準</h2>

<h3>CloudNativePG を使用する理由</h3>

<p>PostgreSQL 専用の StatefulSet では、ストリーミング レプリケーションのセットアップ、フェイルオーバー、バックアップ管理、監視など、依然として多くの手動作業が必要です。 <strong>CloudNativePG (CNPG)</strong> は、Kubernetes 上の PostgreSQL 向けに特別に設計された CNCF プロジェクト (Sandbox 2022、Incubating 2024) です。</p>

___コードブロック_13___

___コードブロック_14___

___コードブロック_15___

<h2>プレーンな StatefulSet の代わりに演算子を使用するのはどのような場合ですか?</h2>

<h3>StatefulSet Pure Match の場合:</h3>
<ul>
  <li>シンプルなアプリケーション、大規模データベースのような複雑な必要はありません__HTMLTAG_169___
  <li>レプリケーションとフェイルオーバーを自分で管理するのに十分な専門知識をお持ちですか__HTMLTAG_171___
  <li>展開のあらゆる側面を最大限に制御する必要がある</li>
  <li>_アプリケーションには成熟した演算子がありません__HTMLTAG_175___
</ul><h3>演算子が適切な場合:</h3>
<ul>
  <li>データベース/ステートフル システム コンプレックス: PostgreSQL、MySQL、Kafka、Elasticsearch</li>
  <li>自動フェイルオーバー、バックアップ、復元が必要</li>
  <li>チームには特定のシステムに関する深い専門知識がありません</li>
  <li>_2 日目の操作を自動化したい (アップグレード、スケーリング、証明書)</li>
</ul>

<h3>推奨演算子 (2026)</h3>

<ul>
  <li><strong>PostgreSQL</strong>: CloudNativePG (CNCF インキュベート) — 本番環境に対応したアクティブな開発</li>
  <li><strong>MySQL</strong>: Oracle の MySQL Operator または MySQL 用 Percona Operator</li>
  <li><strong>Kafka</strong>: Strimzi (CNCF Incubating) — 成熟した、機能豊富</li>
  <li><strong>Redis</strong>: OpsTree または Spotahome による Redis オペレーター</li>
  <li><strong>Elasticsearch/OpenSearch</strong>: ECK (Elastic Cloud on Kubernetes) または OpenSearch Operator</li>
  <li><strong>MongoDB</strong>: MongoDB コミュニティ オペレーター</li>
</ul>

<h2>概要__HTMLTAG_218___

<p>StatefulSet は、Kubernetes のステートフル ワークロードに不可欠なツールですが、純粋な StatefulSet をいつ使用するか、および Operator をいつ使用するかを理解することが重要です:</p>

<ul>
  <li><strong>StatefulSet</strong> は、安定した ID、順序付けされた操作、ポッドごとの永続ストレージを保証します — ステートフル アプリに必要なもの__HTMLTAG_225___
  <li><strong>ヘッドレス サービス</strong>は、ピア検出用のDNSレコードを作成する必要があります</li>
  <li><strong>volumeClaimTemplates</strong> 各ポッドのプライベート PVC が自動的に作成されます - 共有ストレージはありません</li>
  <li><strong>順序付けられた展開/削除</strong>:展開時は0→N、スケールダウン時はN→0 — 分散システムの安全性を確保__HTMLTAG_237___
  <li><strong>_パーティションのローリング更新</strong> により、StatefulSet を使用したカナリア デプロイが可能</li>
  <li><strong>CloudNativePG</strong> は、2026 年の K8 での PostgreSQL 運用に最適な標準です</li>
  <li>複雑なデータベースの場合、__HTMLTAG_247___オペレーター</strong>時間を大幅に節約し、運用リスクを軽減__HTMLTAG_249___
</ul>