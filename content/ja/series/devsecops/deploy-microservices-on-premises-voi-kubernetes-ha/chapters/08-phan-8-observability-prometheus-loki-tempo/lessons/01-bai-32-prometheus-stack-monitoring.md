---
id: 019e1a00-aa01-7001-c001-k8sha000801
title: 'レッスン 32: PROMETHEUS スタック — インフラストラクチャの監視'
slug: bai-32-prometheus-stack-monitoring-infrastructure
description: kube-prometheus-stack (Prometheus、Grafana、Alertmanager)、ServiceMonitor、記録ルール、アラート ルール、Thanos による長期ストレージ、カスタム メトリクスをデプロイします。
duration_minutes: 180
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai32-prometheus-observability.png
sort_order: 32
section_title: 'パート 8: 可観測性 — プロメテウス、ロキ、テンポ'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-308" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-308)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1003" cy="79" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="906" cy="182" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="809" cy="285" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="712" cy="128" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="615" cy="231" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="69" x2="1100" y2="149" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="99" x2="1050" y2="169" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.1051177665154,197 1057.1051177665154,241 1019,263 980.8948822334847,241 980.8948822334847,197 1019,175" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 32</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 32: プロメテウス スタック — モニタリング</tspan>
      <tspan x="60" dy="42">インフラ構造</tspan>
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
<li>✅ kube-prometheus-stack (Prometheus + Grafana + Alertmanager) のデプロイ</li>
<li>✅ サービス検出用の ServiceMonitor と PodMonitor</li>
<li>✅ 事前に計算されたメトリクスの記録ルール__HTMLTAG_75___
<li>✅ アラート ルールとアラート マネージャー ルーティング__HTMLTAG_77___
<li>✅ 長期保管用のThanos__HTMLTAG_79___
<li>✅ カスタム アプリケーション メトリクス__HTMLTAG_81___
</ul>

<hr>

<h2 id="phan-1-architecture">パート 1: 観測可能アーキテクチャ</h2>

___コードブロック_0___

<hr>

<h2 id="phan-2-install">パート 2: KUBE-POMETHEUS-STACK のインストール</h2>

___コードブロック_1___

___コードブロック_2___

___コードブロック_3___

<hr>

<h2 id="phan-3-servicemonitor">パート 3: サービスモニターとポッドモニター</h2>

___コードブロック_4___

<hr>

<h2 id="phan-4-alerting-rules">パート 4: 警告ルール</h2>

___コードブロック_5___

<hr>

<h2 id="phan-5-grafana-dashboards">パート 5: GRAFANA ダッシュボード</h2>

___コードブロック_6___

___コードブロック_7___

<hr>

<h2 id="phan-6-thanos">パート 6: THANOS (長期保管)</h2>

___コードブロック_8___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>kube-prometheus-stack</strong>: 1 つの Helm チャートで完全なモニタリング</li>
<li><strong>ServiceMonitor</strong>: 自動検出ターゲット、手動スクレイピング構成なし</li>
<li><strong>RED メソッド</strong>: すべてのサービスのレート、エラー、期間</li>
<li><strong>Alertmanager</strong>: アラートを重大度ごとに Slack/PagerDuty</li> にルーティングします
<li><strong>記録ルール</strong>: 負荷の高いクエリを事前計算</li>
<li><strong>Thanos</strong>: オブジェクト ストレージでの長期保存 (月/年)</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習__HTMLTAG_132___

<h3 id="bt1">演習 1: モニタリングの設定__HTMLTAG_134___
<ul>
<li>kube-prometheus-stack をデプロイ</li>
<li>アプリの ServiceMonitor を作成</li>
<li>RED メソッド Grafana ダッシュボードを構築__HTMLTAG_141___
</ul>

<h3 id="bt2">演習 2: アラート</h3>
<ul>
<li>アラート ルールの作成 (エラー率、レイテンシー、ポッドの再起動)</li>
<li>アラートマネージャー→Slackの設定</li>
<li>アラートをトリガー、通知を確認</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_157___レッスン 33: Loki — 集中ログ</strong>では、Grafana Loki を使用して集中ログ集約をセットアップします。</p>