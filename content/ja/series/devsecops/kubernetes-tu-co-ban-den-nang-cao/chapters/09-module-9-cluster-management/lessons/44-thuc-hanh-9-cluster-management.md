---
id: 019c9618-060b-7000-8000-c1147ba22e16
title: 'レッスン 43: 実践 — クラスター管理'
slug: thuc-hanh-9-cluster-management
description: 'モジュール 9 の実践: Kubernetes クラスターのアップグレード、etcd バックアップ/復元、ノード ドレイン/メンテナンス、ResourceQuota、LimitRange、VPA、インプレース ポッド サイズ変更、Velero バックアップ。'
duration_minutes: 180
is_free: false
video_url: null
sort_order: 43
section_title: 'モジュール 9: クラスター管理'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6085" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6085)"/>

  <!-- Decorations -->
  <g>
    <circle cx="883" cy="199" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="666" cy="82" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="949" cy="225" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="732" cy="108" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="1015" cy="251" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="209" x2="1100" y2="289" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="239" x2="1050" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.1051177665154,187 1047.1051177665154,231 1009,253 970.8948822334847,231 970.8948822334847,187 1009,165" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 43</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 43: 実践 — クラスター管理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 9: クラスター管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>🎯 練習目標</h2>
<ul>
  <li>ノードをドレインし、メンテナンス ノードを実行__HTMLTAG_69___
  <li>etcd のバックアップと復元</li>
  <li>ResourceQuota と LimitRange を構成する</li>
  <li>Pod リソースのサイズをインプレースでテストする</li>
  <li>VPA の推奨事項をインストールしてテストする__HTMLTAG_77___
  <li>Velero を使用したバックアップ クラスター</li>
</ul>

<h2>ラボ 1: ノードのメンテナンス</h2>
___コードブロック_0___

<h2>ラボ 2: etcd のバックアップと復元__HTMLTAG_84___
___コードブロック_1___

<h2>ラボ 3: ResourceQuota と LimitRange__HTMLTAG_86___
___コードブロック_2___

<h2>_ラボ 4: インプレース ポッド リソースのサイズ変更</h2>
___コードブロック_3___

<h2>ラボ 5: VPA の推奨事項</h2>
___コードブロック_4___

<h2>ラボ 6: Velero のバックアップ__HTMLTAG_92___
___コードブロック_5___

<h2>クリーンアップ</h2>
___コードブロック_6___

<h2>概要__HTMLTAG_96___
<ul>
  <li>✅ ノードのドレイン/遮断/遮断解除: 標準メンテナンス ワークフロー</li>
  <li>✅ etcd バックアップ: スナップショットと検証</li>
  <li>✅ ResourceQuota: 名前空間ごとのリソースを制限__HTMLTAG_103___
  <li>✅ LimitRange: ポッドのデフォルトのリソース</li>
  <li>✅ インプレース サイズ変更: CPU/メモリを変更してもポッドが再起動しない</li>
  <li>✅ VPA: 適切なリソースを自動的に推奨</li>
  <li>✅ Velero: 名前空間レベルのバックアップと復元__HTMLTAG_111___
</ul>