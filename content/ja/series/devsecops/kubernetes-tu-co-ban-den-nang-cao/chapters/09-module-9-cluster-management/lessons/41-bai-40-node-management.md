---
id: 019c9618-0608-7000-8000-c1147ba22e16
title: 'レッスン 40: ノード管理'
slug: bai-40-node-management
description: 'Kubernetes でのノード管理: ノードのライフサイクル、遮断、ドレイン、テイントと許容、ノード アフィニティ、トポロジ スプレッド制約、ノードの問題検出、正常なノード シャットダウン。'
duration_minutes: 70
is_free: false
video_url: null
sort_order: 40
section_title: 'モジュール 9: クラスター管理'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-204" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-204)"/>

  <!-- Decorations -->
  <g>
    <circle cx="600" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="50" x2="1100" y2="130" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="80" x2="1050" y2="150" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="921.650635094611,87.5 921.650635094611,112.5 900,125 878.349364905389,112.5 878.349364905389,87.5 900,75" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 40</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 40: ノード管理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 9: クラスター管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>🎯 レッスンの目的</h2><p>運用環境でノードのライフサイクルを管理する方法（メンテナンス、汚染/許容、ノード アフィニティ、トポロジの広がり、およびノードの問題の自動検出）を理解します。</p>

<h2>1.ノードのライフサイクル</h2>
___コードブロック_0___

<h2>2.非常線と排水路</h2>
___コードブロック_1___

<h2>3.汚染と容認</h2>
___コードブロック_2___
___コードブロック_3___

<h2>4.ノード アフィニティ</h2>
___コードブロック_4___

<h2>5.トポロジースプレッド制約</h2>
<p>可用性を高めるためにポッドをゾーン/ノード全体に均等に分散します:</p>
___コードブロック_5___

<h2>6.ノード問題検出ツール</h2>
___コードブロック_6___

<h2>7.正常なノードのシャットダウン</h2>
___コードブロック_7___

<h2>8。 Karpenter によるノードの自動プロビジョニング</h2>
___コードブロック_8___

<h2>概要</h2>
<ul>
  <li>Cordon + Drain: ノード メンテナンスの標準プロセス</li>
  <li>Taints/Tolerations: ワークロードの配置を制御します (専用ノード)</li>
  <li>ノード アフィニティ: バインディング インスタンス タイプ、アーチ、ゾーン</li>
  <li>トポロジ分散制約: ポッドがゾーン/ノード間で均等に分散されていることを確認</li>
  <li>_ノード問題検出ツール: ノードレベルの問題を自動的に検出__HTMLTAG_99___
  <li>Karpenter: クラスター オートスケーラーよりも賢い自動プロビジョニング</li>
</ul>