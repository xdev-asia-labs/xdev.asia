---
id: 019e1a00-aa01-7001-c001-k8sha000803
title: 'レッスン 34: テンポ — 分散トレース'
slug: bai-34-tempo-distributed-tracing
description: 分散トレース、OpenTelemetry インストルメンテーション、ログ/メトリクスとのトレース相関関係、戦略、およびトレース対応モニタリングのために Grafana Tempo を導入します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 34
section_title: 'パート 8: 可観測性 — プロメテウス、ロキ、テンポ'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1892" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1892)"/>

  <!-- Decorations -->
  <g>
    <circle cx="833" cy="129" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="1066" cy="162" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="799" cy="195" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1032" cy="228" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="765" cy="261" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="159" x2="1100" y2="239" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="189" x2="1050" y2="259" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="988.444863728671,142 988.444863728671,176 959,193 929.555136271329,176 929.555136271329,142 959,125" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 34</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 34: テンポ — 分散トレース</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 8: 可観測性 — プロメテウス、ロキ、テンポ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_66___
<ul>
<li>✅ 分散トレースの概念 (スパン、トレース、コンテキストの伝播)</li>
<li>✅ K8s に Grafana Tempo をデプロイ</li>
<li>✅ OpenTelemetry コレクターおよびインストルメンテーション SDK__HTMLTAG_73___
<li>✅ トレース → ログ → メトリック相関</li>
<li>✅ サンプリング戦略 (ヘッド、テール、アダプティブ)</li>
<li>✅ TraceQL クエリ__HTMLTAG_79___
</ul>

<hr>

<h2 id="phan-1-concepts">パート 1: 分散トレースの概念</h2>

___コードブロック_0___<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>特徴</th><th>テンポ</th><th>_イェーガー</th><th>Zipkin_</th></tr>
</thead>
<tbody>
<tr><td>ストレージ バックエンド</td><td>オブジェクト ストレージ (S3/GCS)</td><td>Elasticsearch/Cassandra</td><td>Elasticsearch/MySQL</td></tr>
<tr><td>コスト_</td><td>非常に低い</td><td>高（すべてにインデックスを付ける）</td><td>中</td></tr>
<tr><td>検索</td><td>TraceQL (強力)</td><td>タグベース_</td><td>タグベース</td></tr>
<tr><td>統合</td><td>Grafanaネイティブ</td><td>スタンドアロンUI</td><td>スタンドアロンUI</td></tr>
<tr><td>トレース検出</td><td>メトリック → トレース_</td><td>手動検索_</td><td>手動検索</td></tr>
<tr><td>プロトコル_</td><td>OTLP、Jaeger、Zipkin_</td><td>Jaeger、OTLP_</td><td>Zipkin、OTLP</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-deploy-tempo">パート 2: GRAFANA TEMPO の展開</h2>

___コードブロック_1___

___コードブロック_2___

<hr>

<h2 id="phan-3-otel-collector">パート 3: OPENTELEMETRY COLLECTOR</h2>

___コードブロック_3___

<hr>

<h2 id="phan-4-instrumentation">パート 4: アプリケーション手順__HTMLTAG_170___

___コードブロック_4___

___コードブロック_5___

<hr>

<h2 id="phan-5-traceql">パート 5: TRACEQL クエリ</h2>

___コードブロック_6___

<hr>

<h2 id="phan-6-correlation">パート 6: トレース-ログ-メトリクス相関</h2>

___コードブロック_7___

___コードブロック_8___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>テンポ</strong>: オブジェクト ストレージ上のトレース ストレージ → コスト効率が高い</li>
<li><strong>OpenTelemetry</strong>: ベンダー中立の計測標準</li>
<li><strong>_OTel コレクター</strong>: 中央パイプライン、テール サンプリング</li>
<li><strong>TraceQL</strong>: 属性、期間、ステータスによるトレースのクエリ</li>
<li><strong>相関__HTMLTAG_199___: トレース ↔ ログ ↔ メトリクス = 迅速な根本原因</li>
<li><strong>サンプリング</strong>: 常にエラーを維持 + 低速、サンプルは通常</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: テンポ + OTel の設定</h3>
<ul>
<li>Tempo + OTel Collector のデプロイ</li>
<li>インストゥルメント サンプル Go/Node.js アプリ</li>
<li>Grafana でトレースを表示__HTMLTAG_217___
</ul><h3 id="bt2">演習 2: 相関関係のトレース__HTMLTAG_220___
<ul>
<li>Grafana でトレースからログへのリンクを構成する__HTMLTAG_223___
<li>エラーを挿入し、トレース→ログフローを通じて根本原因を特定</li>
<li>低速/エラー トレース用の TraceQL クエリを作成</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_233___レッスン 35: Grafana ダッシュボードと SLO</strong> では、統合ダッシュボードを構築し、SLO/SLI モニタリングを実装します。</p>