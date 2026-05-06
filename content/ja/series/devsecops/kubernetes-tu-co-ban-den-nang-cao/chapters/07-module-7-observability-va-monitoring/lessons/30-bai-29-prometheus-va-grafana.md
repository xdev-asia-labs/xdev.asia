---
id: 019c9618-0502-7000-8000-c1147ba22e15
title: 'レッスン 29: プロメテウスとグラファナ'
slug: bai-29-prometheus-va-grafana
description: 'Prometheus Operator と kube-prometheus-stack。 ServiceMonitor、PodMonitor、PrometheusRule。 Kubernetes クラスター用の Grafana ダッシュボード。 AlertManager: ルート、受信者 (Slack、PagerDuty)。ルールと PromQL のベスト プラクティスを記録します。'
duration_minutes: 100
is_free: false
video_url: null
sort_order: 29
section_title: 'モジュール 7: 可観測性と監視'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7102" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7102)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1074" cy="32" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="1048" cy="206" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1022" cy="120" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="996" cy="34" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="208" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="52" x2="1100" y2="132" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="82" x2="1050" y2="152" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.3826859021799,138.5 975.3826859021799,165.5 952,179 928.6173140978201,165.5 928.6173140978201,138.5 952,125" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — レッスン 29</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 29: プロメテウスとグラファナ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 7: 可観測性と可観測性モニタリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>プロメテウスとグラファナ__HTMLTAG_66___

<p>Prometheus と Grafana は、Kubernetes エコシステムにおいて切り離せないコンビです。 Prometheus はメトリクスの収集、保存、クエリを担当し、Grafana は強力な視覚化レイヤーを提供します。 Prometheus Operator の導入により、Kubernetes での Prometheus の管理が宣言的かつ完全に自動化されました。</p>

<h2>Prometheus データ モデル</h2>

<p>Prometheus Operator に入る前に、効果的なクエリを作成するには Prometheus のデータ モデルを理解する必要があります。</p>

<h3>時系列とラベル__HTMLTAG_74___

<p>Prometheus のすべてのデータは <strong>時系列</strong> です。これは、メトリクス名と一連の Key-Value ラベルによって一意に識別される、時系列の一連の値 (float64) です。例:</p>

___コードブロック_0___

<p>Labels は、PromQL でデータをフィルター、集計、結合するための主要なツールです。適切なラベル設計が重要です。カーディナリティの高いラベル (ユーザー ID やリクエスト ID など) は使用しないでください。使用すると、数百万の時系列が作成され、Prometheus の速度が低下します。</p>

<h3>指標タイプ</h3>

<p>Prometheus は、次の 4 つの基本タイプのメトリクスを定義します。</p><ul>
  <li><strong>Counter</strong>: 値は増加するだけで減少しません (再起動すると 0 にリセットされます)。用途: リクエストの合計、エラーの合計、送信されたバイト数。 <code>rate()</code> または <code>increase()</code>.</li> でよく使用されるクエリ
  <li><strong>ゲージ</strong>: 値は自由に増減できます。使用目的: 現在のメモリ使用量、現在のポッド数、キュー サイズ。</li>
  <li><strong>ヒストグラム</strong>: 観測値の分布 (通常はリクエスト期間、レスポンス サイズ) を測定します。サフィックス <code>_bucket</code>、__HTMLTAG_103____sum</code>、__HTMLTAG_105____count</code> の時系列を作成します。 <code>histogram_quantile()</code>.</li> でパーセンタイルを計算するために使用されます。
  <li><strong>概要</strong>: ヒストグラムと似ていますが、クライアント側でパーセンタイルを計算します。ヒストグラムよりも柔軟性が低いため、新しい指標には推奨されません。</li>
</ul>

<h2>プロメテウス オペレーター</h2>

<p>Prometheus Operator は、Kubernetes 上の Prometheus と AlertManager を宣言的な方法で管理するのに役立ちます。構成ファイルを作成して Prometheus を手動でリロードする代わりに、Kubernetes リソースを作成すると、Operator が構成を自動的に更新します。</p>

<h3>Prometheus Operator の CRD</h3>

<p>Prometheus Operator は次の CRD を提供します:</p>
<ul>
  <li><strong>Prometheus</strong>: Prometheus インスタンスを定義</li>
  <li><strong>AlertManager</strong>: AlertManager クラスター定義</li>
  <li><strong>ServiceMonitor</strong>: サービスからメトリクスを取得する方法を定義</li>
  <li><strong>_PodMonitor</strong>: ポッドからメトリクスを取得する方法を定義</li>
  <li><strong>PrometheusRule</strong>: アラートと記録のルールを定義</li>
  <li><strong>Probe</strong>: ブラックボックス監視ターゲットを定義</li>
</ul>

<h3>プロメテウス CRD</h3>

___コードブロック_1___

<p>Prometheus Operator は、ラベル セレクターに基づいて ServiceMonitor と PodMonitor を自動的に検出します。新しいターゲットを追加するときに Prometheus を再起動またはリロードする必要はありません。</p>

<h2>ServiceMonitor — サービスからメトリクスを収集</h2>

<p>ServiceMonitor は、Prometheus にスクレイピング ターゲットを追加する最も一般的な方法です。これは、Prometheus がサービスのグループからメトリクスを見つけて取得する方法を定義します。</p>

___コードブロック_2___

<p>サービスは正しい名前でメトリクス ポートを公開する必要があります:</p>

___コードブロック_3___

<h2>PodMonitor — ポッドから直接メトリクスを収集</h2>

<p>PodMonitor は、サービスを経由せずに Pod から直接スクレイピングする場合、または各 Pod を個別にスクレイピングする必要がある場合 (たとえば、各 Pod が異なるメトリクスを公開する場合) に使用されます。</p>

___コードブロック_4___

<h2>PromQL — Prometheus クエリ言語</h2>

<p>PromQL (Prometheus Query Language) は、時系列データをクエリするための強力なツールです。以下は最も一般的なパターンです。</p><h3>レートと増加</h3>

<p>カウンター メトリクスでは、意味のある値を取得するには、常に <code>rate()</code> または <code>increase()</code> を使用する必要があります:</p>

___コードブロック_5___

<h3>ヒストグラムのパーセンタイル__HTMLTAG_176___

___コードブロック_6___

<h3>Kubernetes 固有のクエリ</h3>

___コードブロック_7___

<h2>Grafana ダッシュボード__HTMLTAG_180___

<p>_Grafana は視覚化レイヤーであり、Prometheus (および Loki、Tempo) と接続してリッチなダッシュボードを作成します。</p>

<h3>Grafana.com からダッシュボードをインポート</h3>

<p>Grafana.com には何千ものコミュニティ ダッシュボードがあります。 Kubernetes の重要なダッシュボードのいくつか:</p>
<ul>
  <li><strong>ID 315</strong>: Kubernetes クラスター監視 (基本)</li>
  <li><strong>ID 12740</strong>: Kubernetes モニタリング (高度な、kube-state-metrics が必要)</li>
  <li><strong>ID 15661</strong>: Kubernetes ノードの概要</li>
  <li><strong>ID 15760</strong>: Kubernetes ビュー — グローバル</li>
  <li><strong>ID 14205</strong>: Kubernetes — ポッドの概要</li>
</ul>

<p>インポートするには: Grafana UI → ダッシュボード → インポート → ID を入力 → Prometheus データ ソースを選択します。</p>

<h3>ダッシュボード変数</h3>

<p>Variables は、ダッシュボードを対話型ツールに変えます。 Kubernetes の共通変数:</p>

___コードブロック_8___

<p>この変数を使用すると、ユーザーはクラスター→名前空間→ポッドを選択でき、その選択に従ってダッシュボード内のすべてのパネルが自動的にフィルターされます。</p>

<h3>重要なパネル</h3>

<p>完全な Kubernetes ダッシュボードには次のものが必要です:</p>
<ul>
  <li><strong>ノードの概要</strong>: ノードごとの CPU 使用率、メモリ使用量、ディスク I/O、ネットワーク I/O</li>
  <li><strong>ポッド メトリクス</strong>: CPU/メモリ リクエスト、制限、実際の使用量</li>
  <li><strong>展開ステータス</strong>: 必要なレプリカと利用可能なレプリカ</li>
  <li><strong>コンテナの再起動</strong>: 1 時間、24 時間の再起動数</li>
  <li><strong>エラー率</strong>: サービスあたりのHTTP 5xx率</li>
  <li><strong>レイテンシ P50/P95/P99</strong>: リクエスト期間のパーセンタイル</li>
</ul>

<h2>アラートマネージャー</h2>

<p>AlertManager は Prometheus からアラートを受信し、それらを処理します。正しい受信者へのルーティング、ノイズを低減するためのグループ化、アラート ストームを回避するための抑制、およびメンテナンス中のサイレンシングを行います。</p>

<h3>ルーティング ツリー</h3>

<p>AlertManager ルーティングは階層ツリーで構成されます。各ルートはアラートのラベルと一致し、対応する受信者に送信します:</p>

___コードブロック_9___

<h3>禁止ルール__HTMLTAG_256___

<p>抑制ルールは、別のアラートがアクティブなときにアラートが送信されないようにします。たとえば、クラスター全体がダウンしている場合、各サービスにアラートを送信する必要はありません:</p>___コードブロック_10___

<h2>PrometheusRule — アラート ルール__HTMLTAG_260___

<p>PrometheusRule は、アラート ルールと記録ルールを定義します。 Prometheus Operator は、これらのルールを Prometheus に自動的にロードします。</p>

___コードブロック_11___

<h2>記録ルール — 高価なクエリの事前計算</h2>

<p>記録ルールは複雑なクエリを事前計算し、結果を新しい時系列として保存します。これにより、大量のクエリを使用するダッシュボードとアラートのパフォーマンスが大幅に向上します。</p>

___コードブロック_12___

<p>記録ルールのベスト プラクティス:</p>
<ul>
  <li>名前の形式 <code>level:metric:operations</code> (例: <code>job:http_requests:rate5m</code>)</li>
  <li>複数の場所で使用されるクエリの記録ルールのみを作成__HTMLTAG_277___
  <li>記録ルールの評価間隔はスクレイピング間隔より小さくする必要があります</li>
  <li>使い捨てクエリの記録ルールを作成しない</li>
</ul>

<h2>本番環境のベスト プラクティス</h2>

<h3>プロメテウスのサイズ</h3>

<p>_Prometheus のメモリ使用量は、アクティブな時系列の数に比例します。推定: サンプルあたり 1 ～ 2 バイト、15 秒のスクレイピング間隔で、10,000 時系列は約 1 GB の RAM を使用します。 100 ノードと数百のサービスからなるクラスターでは、50 万から 100 万の時系列が予想されます。</p>

<h3>高可用性</h3>

<p>同じ構成で 2 つの Prometheus インスタンスを実行します。 Grafana はクエリ時に重複を排除します。 AlertManager を使用して、クラスター モードで 3 つのインスタンスを実行して、アラートが失われないようにします。</p>

<h3>長期保管_</h3>

<p>Prometheus はデータを 2 ～ 4 週間のみ保持する必要があります。長期ストレージ (月/年) の場合は、Thanos または Grafana Mimir を使用してください。どちらも、Prometheus ローカル ストレージよりもはるかに低コストでオブジェクト ストレージ バックエンド (S3、GCS) をサポートしています。</p>

<h2>概要</h2>

<p>Prometheus Operator は、Kubernetes での監視管理方法に革命をもたらしました。 ServiceMonitor と PodMonitor を使用すると、新しいターゲットの追加は完全に宣言的であり、手動介入は必要ありません。 PrometheusRule は、アラート ルールをコードとして (GitOps フレンドリーに) 管理するのに役立ち、柔軟なルーティング ツリーを備えた AlertManager は、適切なユーザーが適切なアラートを確実に受信できるようにします。</p>

<p>次のレッスンでは、可観測性スタックの残りの部分を具体化します。ログの場合は Loki、分散トレースの場合は Tempo です。</p>