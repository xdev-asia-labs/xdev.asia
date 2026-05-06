---
id: 019c9618-0302-7000-8000-c1147ba22e13
title: 'レッスン 19: デーモンセット'
slug: bai-19-daemonsets
description: 'DaemonSet により、各ノードで 1 つの Pod が実行されるようになります。使用例: モニタリング エージェント、ロギング エージェント、ネットワーク プラグイン、ストレージ。すべてのノードに Grafana Alloy コレクターをデプロイする実際の例。'
duration_minutes: 60
is_free: false
video_url: null
sort_order: 19
section_title: 'モジュール 5: ワークロード管理'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1387" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1387)"/>

  <!-- Decorations -->
  <g>
    <circle cx="989" cy="37" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="878" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="767" cy="215" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="656" cy="44" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="133" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="147" x2="1100" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="177" x2="1050" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1033.3730669589463,176 1033.3730669589463,218 997,239 960.6269330410536,218 960.6269330410536,176 997,155" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — レッスン 19</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 19: デーモンセット</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 5: ワークロード管理__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>DaemonSets — ノードごとに 1 つのポッド__HTMLTAG_66___

<p>クラスター内の_<strong>すべてのノード</strong> (またはノードの特定のサブセット) でポッドを実行する必要がある場合、__HTMLTAG_70___DaemonSet</strong> が答えです。レプリカに Pod を分散する Deployment とは異なり、DaemonSet は各ノード (セレクターに一致する) が常に独自の Pod を持つことを保証します。新しいノードがクラスターに追加されると、DaemonSet はそのノード上にポッドを自動的に作成します。ノードが削除されると、ポッドもガベージ コレクションされます。</p>

<h2>1. DaemonSet とは何ですか?ノードごとに 1 つのポッドのメカニズム</h2>

<p>DaemonSet コントローラーは次のことを継続的に保証します:</p>
<ul>
  <li>一致する各ノードでは、DaemonSet ポッドが 1 つだけ実行されます</li>
  <li>新しいノードがクラスターに参加すると → 新しいポッドが自動的に作成されます</li>
  <li>クラスターからノードが削除された場合 → ポッドが削除された場合</li>
  <li>DaemonSet を削除すると、作成されたすべての Pod がクリーンアップされます</li>
</ul>

<p>最も基本的な DaemonSet:</p>

___コードブロック_0___

<h2>2.実際の使用例</h2>

<p>DaemonSet はインフラストラクチャ エージェントに広く使用されています:</p>

<h3>2.1 ロギング エージェント__HTMLTAG_94___
<ul>
  <li><strong>Grafana Alloy</strong>: 各ノードの標準出力ファイルとコンテナからログを収集</li>
  <li><strong>Fluent Bit</strong>: 軽量のログ フォワーダー、Elasticsearch/Loki にログを転送</li>
  <li><strong>Fluentd</strong>: 出荷前にログを集約して変換</li>
</ul><h3>2.2 モニタリング エージェント</h3>
<ul>
  <li><strong>Prometheus ノード エクスポーター</strong>: ノードの CPU、メモリ、ディスク、ネットワーク メトリクスをエクスポート</li>
  <li><strong>_Datadog Agent</strong>: 完全な可観測性 — メトリクス、ログ、トレース、プロセス</li>
  <li><strong>Elastic エージェント</strong>: 統合 Elastic Stack エージェント</li>
</ul>

<h3>2.3 ネットワーク プラグイン (CNI)</h3>
<ul>
  <li><strong>Cilium</strong>: eBPF ベースのネットワーキング、セキュリティ、可観測性</li>
  <li><strong>Calico</strong>: ネットワーク ポリシーの適用</li>
  <li><strong>_Weave Net</strong>: シンプルなオーバーレイ ネットワーク</li>
</ul>

<h3>2.4 ストレージ (CSI ノード プラグイン)</h3>
<ul>
  <li><strong>AWS EBS CSI ドライバー ノード プラグイン</strong>: EC2 ノードに EBS ボリュームをマウント</li>
  <li><strong>Longhorn</strong>: 分散ブロック ストレージ — エンジンは各ノードで実行</li>
  <li><strong>OpenEBS</strong>: クラウドネイティブ ストレージ</li>
</ul>

<h3>2.5 セキュリティ</h3>
<ul>
  <li><strong>Falco</strong>: eBPF を使用したランタイム脅威検出 (レッスン 26 を参照)</li>
  <li><strong>NeuVector</strong>: コンテナ セキュリティ プラットフォーム</li>
  <li><strong>_Sysdig エージェント</strong>: セキュリティとパフォーマンスの監視</li>
</ul>

<h2>3. DaemonSet とデプロイメント: いつどちらを使用するか?</h2>

<p>FAQ: 「DaemonSet の代わりに <code> レプリカ: N</code> を使用したデプロイメントを使用してみてはいかがでしょうか?」</p>

<p><strong>_DaemonSet を使用する場合:</strong></p>
<ul>
  <li>ノード リソース (ファイル システム、ネットワーク インターフェイス、ハードウェア) への直接アクセスが必要</li>
  <li>N 個のポッドではなく、__HTMLTAG_187___各特定のノード__HTMLTAG_188___ にポッドが必要です__HTMLTAG_189___
  <li>エージェントは、どのノードで実行されているか (ホスト名、ノード IP)</li> を正確に把握する必要があります。
  <li>インフラストラクチャ エージェント: ロギング、モニタリング、CNI、CSI</li>
</ul>

<p><strong>次の場合にデプロイメントを使用します</strong></p>
<ul>
  <li>ノードの数とは関係なくレプリカの数をスケールする必要がある</li>
  <li>ノード固有のアクセスを持たないステートレス アプリケーション</li>
  <li>Web サーバー、API サーバー、一般的なマイクロサービス</li>
</ul>

<h2>4.ノードの選択 — DaemonSet のノードを選択</h2>

<p>DaemonSet は、必ずしもクラスター全体で実行する必要はありません。さまざまな方法で制限できます。</p>

<h3>4.1 ノードセレクター__HTMLTAG_212___

<p>特定のラベルを持つノードにのみデプロイします:</p>

___コードブロック_1___

<h3>4.2 ノード アフィニティ</h3><p>nodeSelector よりも複雑で、In、NotIn、Exists などの演算子をサポートします:</p>

___コードブロック_2___

<h3>4.3 許容 — 汚染されたノードへのデプロイ</h3>

<p>ノードには__HTMLTAG_222___taints</strong>を設定して、通常のポッドがそこでスケジュールされるのを防ぐことができます。 DaemonSet は、これらのテイントをバイパスするために、特にコントロール プレーン ノードで実行するために<strong>tolerations</strong> を必要とすることがよくあります:</p>

___コードブロック_3___

<p>最後の 2 つの許容範囲 (<code>not-ready</code> および <code>unreachable</code>) は、インフラストラクチャ エージェントにとって非常に重要です。ノードに問題がある場合でも、ロギング/モニタリングを実行し続けて、その問題のログを取得する必要があります。</p>

<h2>5.更新戦略_</h2>

<p>DaemonSet には 2 つの更新戦略があります:</p>

<h3>5.1 ローリングアップデート (デフォルト)</h3>

___コードブロック_4___

<p>_RollingUpdate を使用すると、Kubernetes は各ポッドを 1 つずつ (または maxUnavailable に従って) 更新します。古いポッドが削除され、新しいポッドが同じノード上に作成されます。</p>

<h3>5.2 削除時</h3>

___コードブロック_5___

<p>OnDelete を使用すると、DaemonSet は Pod を自動的に更新しません。新しいポッド (新しい仕様) は、古いポッドを手動で削除した場合にのみ作成されます。更新プロセスを完全に制御したい場合に使用します。</p>

<h2>6.実用的な例: Grafana 合金ノード エージェント</h2>

<p><strong>Grafana Alloy</strong> は、古い Grafana Agent に代わる、Grafana Labs の OpenTelemetry ネイティブ コレクターです。 Alloy を DaemonSet としてデプロイして、各ノードからログとメトリクスを収集します:</p>

___コードブロック_6___

<p>合金構成のConfigMap:</p>

___コードブロック_7___

<h2>7.例: Prometheus メトリクスのノード エクスポーター</h2>

<p>Node Exporter はノードのハードウェアと OS メトリクスを収集し、Prometheus のスクレイピングに公開します:</p>

___コードブロック_8___

<h2>8。 DaemonSet をデプロイするときの優先順位: PriorityClass</h2>

<p>ロギングやモニタリングなどのインフラストラクチャ エージェントは、ノードがメモリ不足に陥っている場合でも、アプリケーション ポッドよりも前にスケジュールする必要があります。 <strong>PriorityClass</strong> を使用して、</p> を確保します。

___コードブロック_9___

<p>次に、PriorityClass を DaemonSet に割り当てます:</p>

___コードブロック_10___

<p>Kubernetes には多数の組み込み優先度クラスがあります:</p>
<ul>
  <li><code>system-cluster-critical</code>: 2000000000 — CoreDNS、kube-proxy</li> の場合
  <li><code>system-node-critical</code>: 2000001000 — kubelet に隣接するコンポーネント用</li>
</ul>

<h2>9。 DaemonSet のテストとデバッグ</h2>

___コードブロック_11___

<h2>10. DaemonSet のベスト プラクティス</h2><ul>
  <li><strong>合理的なリソース</strong>: DaemonSet はすべてのノードで実行されます。各ポッドが 500m の CPU を使用すると、クラスター全体の容量が大幅に失われます__HTMLTAG_285___
  <li><strong>完全な許容範囲</strong>:__HTMLTAG_289___not-ready</code> および <code>unreachable</code> の許容範囲を追加して、ノードに問題が発生した場合でもエージェントが動作し続けるようにします__HTMLTAG_293___
  <li><strong>PriorityClass</strong>: スケジュール</li> を確保するために、通常のワークロードよりも高い優先度を割り当てます。
  <li><strong>readOnlyRootFilesystem</strong>: 可能な場合は有効にし、書き込むデータには emptyDir または hostPath を使用してください__HTMLTAG_301___
  <li><strong>RollingUpdate maxUnavailable</strong>: 同時に多くのノードのカバレッジを失わないように、1 または小さな数値に保ってください__HTMLTAG_305___
  <li><strong>名前空間の分離</strong>: DaemonSet を別の名前空間にデプロイします (例: <code>monitoring</code>、__HTMLTAG_311___logging</code>) - アプリケーションのワークロードと混合しないでください</li>
</ul>

<p>DaemonSet は、すべての Kubernetes クラスターの運用に不可欠なツールです。 DaemonSet の適切な使用方法を理解すると、Kubernetes プラットフォーム上に強固なインフラストラクチャの可観測性とセキュリティ層を構築するのに役立ちます。</p>