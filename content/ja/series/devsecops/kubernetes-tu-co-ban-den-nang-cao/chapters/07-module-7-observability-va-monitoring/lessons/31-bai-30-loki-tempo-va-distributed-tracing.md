---
id: 019c9618-0503-7000-8000-c1147ba22e15
title: 'レッスン 30: LOKI、テンポ、分散トレース'
slug: bai-30-loki-tempo-va-distributed-tracing
description: 'LogQL クエリを使用した Loki ログの集約。 Grafana Alloy はコンテナからログを収集します。テンポ分散トレーシング。 OpenTelemetry 自動計測。相関可観測性: Grafana でログ、メトリクス、トレースをまとめて確認します。'
duration_minutes: 90
is_free: false
video_url: null
sort_order: 30
section_title: 'モジュール 7: 可観測性と監視'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3228" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3228)"/>

  <!-- Decorations -->
  <g>
    <circle cx="981" cy="273" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="862" cy="94" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="743" cy="175" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="624" cy="256" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="1005" cy="77" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="163" x2="1100" y2="243" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="193" x2="1050" y2="263" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="995.9089653438086,144 995.9089653438086,182 963,201 930.0910346561914,182 930.0910346561914,144 963,125" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — レッスン 30</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 30: LOKI、テンポ、分散トレース</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 7: 可観測性と可観測性モニタリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>🎯 レッスンの目的</h2><p>Elasticsearch より軽量なログ集約システムとしての Loki、Grafana Alloy がログを収集する方法、分散トレースのテンポ、OpenTelemetry 自動計測、Grafana でログ + メトリクス + トレースを組み合わせる方法を理解します。</p>

<h2>1. Loki — ログ集約</h2>

<h3>1.1 Loki 対 Elasticsearch</h3>
<ul>
  <li><strong>Loki</strong>: ラベルベースのインデックス作成 (ログコンテンツのインデックスではなく、ラベルのみのインデックス作成) → 軽量で安価、Kubernetes ログに適しています_</li>
  <li><strong>Elasticsearch</strong>: 全文インデックス付き → 大量のメモリ/CPU を消費します。全文検索__HTMLTAG_81___ が必要な場合に適しています。
</ul>
<p>Kubernetes ログ (構造化、ラベル付け) の場合、2026 年には Loki がより良い選択となります。</p>

<h3>1.2 Loki アーキテクチャ</h3>
<ul>
  <li><strong>ディストリビュータ</strong>: エージェントからログを受信し、検証してファンアウト</li>
  <li><strong>Ingester</strong>: ログをメモリにバッファし、オブジェクト ストレージにフラッシュ</li>
  <li><strong>Querier</strong>: クエリを実行し、インジェスターとストレージからの結果をマージ</li>
  <li><strong>Compactor</strong>: コンパクトなチャンク、保持管理</li>
</ul>

<h3>1.3 LogQL — クエリ言語</h3>
___コードブロック_0___

<h2>2. Grafana 合金 — 統合コレクター</h2>
<p>Grafana Alloy は、Promtail、OTel Collector、Prometheus エージェント モードのすべての個別エージェントを置き換えます。</p>
___コードブロック_1___

<h2>3.テンポ — 分散トレーシング</h2>
<p>Tempo は Grafana の分散トレース バックエンドであり、Loki および Prometheus と適切に統合されています。</p><h3>3.1 概念</h3>
<ul>
  <li><strong>トレース</strong>: リクエストのエンドツーエンドのプロセス (ブラウザからデータベースなど)</li>
  <li><strong>Span</strong>: トレース内の操作 (例: HTTP ハンドラー、DB クエリ)</li>
  <li><strong>TraceID</strong>: トレースのすべてのスパンをリンクする一意の ID</li>
  <li><strong>SpanID</strong>: 個々のスパンの ID</li>
</ul>

<h3>3.2 テンポ設定__HTMLTAG_136___
___コードブロック_2___

<h2>4. OpenTelemetry 自動計測</h2>
<p>OpenTelemetry Operator は、コードを変更せずにアプリケーションを自動的にインストルメントします。</p>

<h3>4.1 Otel Operator のインストール</h3>
___コードブロック_3___

<h3>4.2 インストルメンテーション CRD</h3>
___コードブロック_4___

<h3>4.3 ポッドに自動インストゥルメントへのアノテーションを付ける</h3>
___コードブロック_5___

<h2>5. Grafana の相関可観測性</h2>
<p>_本当の威力は、Grafana 内でアラート→メトリクス→ログ→トレースに進むことができるときです。</p>

<h3>5.1 Loki の派生フィールド</h3>
___コードブロック_6___

<h3>5.2 イグザンプラ — メトリクスからトレースへのリンク</h3>
___コードブロック_7___

<h3>5.3 Grafana Explore — 相関ビュー</h3>
___コードブロック_8___

<h2>6. Loki と EFK スタック — いつ何を使用するか?</h2>
<ul>
  <li><strong>Loki の使用</strong>: Kubernetes ログ、構造化ログ (JSON)、全文検索は不要、低コストが必要</li>
  <li><strong>Elasticsearch (EFK) の使用</strong>: ログ コンテンツによる全文検索が必要、コンプライアンス ログには長期保存が必要、すでに最新の ELK インフラストラクチャが存在__HTMLTAG_167___
</ul>

<h2>概要</h2>
<ul>
  <li>Loki: ラベルベース、軽量、Kubernetes ログに適しています — LogQL クエリ言語</li>
  <li>_Grafana Alloy: 統合コレクター (メトリクス + ログ + トレース)</li>
  <li>Tempo: 分散トレーシング、Grafana エコシステムと適切に統合</li>
  <li>_OTel オペレーター: コード変更なしの自動インストルメンテーション</li>
  <li>相関可観測性: Grafana のアラート → メトリック → ログ → トレースから</li>
</ul>