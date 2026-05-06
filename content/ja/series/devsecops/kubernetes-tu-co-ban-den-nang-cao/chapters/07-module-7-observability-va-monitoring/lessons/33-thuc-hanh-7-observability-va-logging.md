---
id: 019c9618-0505-7000-8000-c1147ba22e15
title: 'レッスン 32: 実践 — 可観測性とロギング'
slug: thuc-hanh-7-observability-va-logging
description: 'モジュール 7 の実践: kube-prometheus-stack のデプロイ、Loki + Grafana Alloy のインストール、OTel 自動インスツルメンテーションを備えた Tempo のインストール、Grafana ダッシュボードの測定メトリクス/ログ/トレースの作成、アラート ルールの作成。'
duration_minutes: 180
is_free: false
video_url: null
sort_order: 32
section_title: 'モジュール 7: 可観測性と監視'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9746" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9746)"/>

  <!-- Decorations -->
  <g>
    <circle cx="822" cy="196" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="1044" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="766" cy="220" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="988" cy="102" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="710" cy="244" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="156" x2="1100" y2="236" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="186" x2="1050" y2="256" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="982.8467875173176,140.5 982.8467875173176,171.5 956,187 929.1532124826824,171.5 929.1532124826824,140.5 956,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — レッスン 32</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 32: 実践 — 観察力と</tspan>
      <tspan x="60" dy="42">ログ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 7: 可観測性と可観測性モニタリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 練習目標__HTMLTAG_68___
<ul>
  <li>kube-prometheus-stack + Loki + Tempo を使用して完全な PLG スタックをデプロイ</li>
  <li>Grafana Alloy でログを収集__HTMLTAG_73___
  <li>OpenTelemetry Operator を使用した自動計測アプリケーション</li>
  <li>アラート ルールと Slack 通知を作成__HTMLTAG_77___
  <li>_相関オブザーバビリティを使用したデバッグ__HTMLTAG_79___
</ul>

<h2>_ラボ 1: kube-prometheus-stack をデプロイする</h2>
___コードブロック_0___

<h2>ラボ 2: カスタム アプリ用の ServiceMonitor の作成</h2>
___コードブロック_1___

<h2>ラボ 3: AlertManager — Slack 通知__HTMLTAG_86___
___コードブロック_2___

<h2>_ラボ 4: Loki + Grafana Alloy の展開__HTMLTAG_88___
___コードブロック_3___

<h2>ラボ 5: LogQL クエリの作成</h2>
___コードブロック_4___

<h2>ラボ 6: Tempo と OTel 自動インスツルメンテーションの展開</h2>
___コードブロック_5___

<h2>ラボ 7: 相関ダッシュボード</h2>
___コードブロック_6___

<h2>クリーンアップ</h2>
___コードブロック_7___

<h2>概要__HTMLTAG_98___
<ul>
  <li>✅ kube-prometheus-stack: Prometheus + Grafana + AlertManager</li>
  <li>✅ カスタム アプリ指標用の ServiceMonitor__HTMLTAG_103___
  <li>✅ AlertManager: ルーティング + Slack 通知</li>
  <li>✅ Loki + Grafana 合金: ログ集計</li>
  <li>✅ 単純なものから複雑なものまでの LogQL クエリ__HTMLTAG_109___
  <li>✅ テンポ + OTel 自動計測</li>
  <li>✅ 相関可観測性: ログ ↔ トレース</li>
</ul>