---
id: 019e1a00-aa01-7001-c001-k8sha000804
title: 'レッスン 35: GRAFANA ダッシュボードと SLO モニタリング'
slug: bai-35-grafana-dashboards-va-slo-monitoring
description: Grafana 統合ダッシュボード、SLI/SLO/エラー バジェット モニタリング、Grafonnet を使用したコードとしてのダッシュボード、アラート ワークフロー、運用グレードの可観測性スタックを構築します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 35
section_title: 'パート 8: 可観測性 — プロメテウス、ロキ、テンポ'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6432" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6432)"/>

  <!-- Decorations -->
  <g>
    <circle cx="996" cy="218" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="892" cy="194" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="788" cy="170" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="684" cy="146" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1080" cy="122" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="158" x2="1100" y2="238" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="188" x2="1050" y2="258" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1036.5788383248864,191.5 1036.5788383248864,224.5 1008,241 979.4211616751136,224.5 979.4211616751135,191.5 1008,175" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — レッスン 35</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 35: GRAFANA ダッシュボードとSLO</tspan>
      <tspan x="60" dy="42">モニタリング_</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 8: 可観測性 — プロメテウス、ロキ、テンポ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<ul>
<li>✅ マイクロサービス向けの Grafana 統合ダッシュボード デザイン</li>
<li>✅ SLI/SLO/エラーバジェットの概念と実装</li>
<li>✅ ConfigMap/Grafonnet を使用したコードとしてのダッシュボード</li>
<li>✅ アラート ワークフローとオンコール ルーティング</li>
<li>✅ 本番環境の可観測性チェックリスト</li>
</ul>

<hr>

<h2 id="phan-1-sli-slo">パート 1: SLI / SLO / エラー予算</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>コンセプト</th><th>定義</th><th>_例</th></tr>
</thead>
<tbody>
<tr><td>SLI (サービス レベル インジケーター)</td><td>サービス品質を測定する指標</td><td>99.2% のリクエスト__HTMLTAG_103___</tr>
<tr><td>SLO (サービス レベル目標)</td><td>SLI の目標値_</td><td>99.9%/月の可用性_</td></tr>
<tr><td>エラー予算</td><td>許容ダウンタイム = 1 - SLO_</td><td>99.9% → 43.2 分/月</td></tr>
<tr><td>SLA (サービス レベル アグリーメント)</td><td>結果を伴う契約_</td><td>99.9% または返金クレジット</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

___コードブロック_0___

<hr>

<h2 id="phan-2-slo-prometheus">パート 2: PROMETHEUS による SLO の実装</h2>

___コードブロック_1___

<hr>

<h2 id="phan-3-grafana-dashboards">パート 3: GRAFANA ダッシュボードのデザイン</h2>

___コードブロック_2___

___コードブロック_3___

<hr><h2 id="phan-4-alerting">パート 4: ワークフローのアラート</h2>

___コードブロック_4___

<hr>

<h2 id="phan-5-checklist">パート 5: 本番環境の監視可能性チェックリスト</h2>

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>カテゴリ</th><th>アイテム</th><th>ツール</th></tr>
</thead>
<tbody>
<tr><td>メトリクス_</td><td>サービスごとのREDメソッド</td><td>_Prometheus</td></tr>
<tr><td>メトリクス_</td><td>ノードごとのUSEメソッド</td><td>ノードエクスポーター</td></tr>
<tr><td>メトリクス_</td><td>SLO/エラーバジェット</td><td>記録ルール</td></tr>
<tr><td>ログ</td><td>一元化された構造化ログ</td><td>Loki + Promtail_</td></tr>
<tr><td>ログ</td><td>ログベースのアラート_</td><td>Loki ルーラー</td></tr>
<tr><td>トレース</td><td>分散トレース</td><td>テンポ + OTel</td></tr>
<tr><td>トレース</td><td>トレースログメトリック相関</td><td>Grafana</td></tr>
<tr><td>アラート_</td><td>マルチバーンレートSLOアラート_</td><td>アラートマネージャー_</td></tr>
<tr><td>_アラート_</td><td>オンコールルーティング</td><td>_PagerDuty</td></tr>
<tr><td>ダッシュボード</td><td>3 レベルのドリルダウン</td><td>Grafana</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>SLO</strong>: エラー バジェットを定義し、バーン レートに関するアラート (しきい値だけでなく)</li>
<li><strong>RED メソッド</strong>: サービスごとのレート、エラー、期間</li>
<li><strong>ダッシュボード階層</strong>: プラットフォーム → サービス → リクエストの詳細</li>
<li><strong>コードとしてのダッシュボード</strong>: ConfigMap + サイドカー自動プロビジョニング</li>
<li><strong>アラートルーティング</strong>: 重大→PagerDuty、警告→Slack</li>
<li><strong>相関</strong>: メトリック → トレース → ログ = 全体像</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: SLO の設定</h3>
<ul>
<li>サンプル サービスの SLI を定義する (可用性 + 遅延)</li>
<li>録画ルール + 書き込み率アラートを作成</li>
<li>ビルド エラー予算ダッシュボード</li>
</ul><h3 id="bt2">演習 2: 統合ダッシュボード</h3>
<ul>
<li>3 レベルのダッシュボード階層を作成</li>
<li>トレース ログ メトリックのリンクを構成する__HTMLTAG_288___
<li>インシデントをシミュレートし、可観測性スタックを使用して根本原因を見つける</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_296___レッスン 36: RBAC とポッドのセキュリティ標準</strong> では、セクション 9 — K8s クラスターのセキュリティ強化を開始します。</p>