---
id: 019c9618-060f-7000-8000-c1147ba22e16
title: 'レッスン 47: 実践 — クラウド プラットフォームと本番環境の準備'
slug: thuc-hanh-10-cloud-platforms
description: 'モジュール 10 の実践: マネージド K8 (EKS/GKE/AKS) へのデプロイ、PDB、HPA の構成、スポット ノードによるコストの最適化、本番準備チェックリスト、Karpenter ノードの統合。'
duration_minutes: 180
is_free: false
video_url: null
sort_order: 47
section_title: 'モジュール 10: クラウドと本番環境'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8047" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8047)"/>

  <!-- Decorations -->
  <g>
    <circle cx="747" cy="71" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="894" cy="258" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="1041" cy="185" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="688" cy="112" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="835" cy="39" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="81" x2="1100" y2="161" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="111" x2="1050" y2="181" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="962.1769145362398,113 962.1769145362398,149 931,167 899.8230854637602,149 899.8230854637602,113.00000000000001 931,95" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — レッスン 47</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 47: 実践 — クラウド プラットフォームと</tspan>
      <tspan x="60" dy="42">本番準備</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 10: クラウドと制作_</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 練習目標__HTMLTAG_68___
<ul>
  <li>本番環境に対応したアプリケーションをローカル クラスターにデプロイ (クラウドをシミュレート)</li>
  <li>PodDisruptionBudget の構成とノード ドレインのテスト__HTMLTAG_73___
  <li>カスタム メトリクスを使用した HPA 構成__HTMLTAG_75___
  <li>セキュリティのベスト プラクティスを適用する (PSS、ネットワーク ポリシー)</li>
  <li>_正常なシャットダウンをテスト</li>
  <li>Karpenter 統合の構成 (シミュレーション)</li>
</ul>

<h2>ラボ 1: 本番環境に対応した展開__HTMLTAG_84___
___コードブロック_0___

<h2>ラボ 2: PodDisruption の予算</h2>
___コードブロック_1___

<h2>_ラボ 3: 水平ポッド オートスケーラー__HTMLTAG_88___
___コードブロック_2___

<h2>ラボ 4: ネットワーク ポリシー</h2>
___コードブロック_3___

<h2>ラボ 5: セキュリティ コンテキスト__HTMLTAG_92___
___コードブロック_4___

<h2>_ラボ 6: 正常なシャットダウン テスト</h2>
___コードブロック_5___

<h2>クリーンアップ</h2>
___コードブロック_6___

<h2>概要__HTMLTAG_98___
<ul>
  <li>✅ 本番展開: ローリング アップデート + プローブ + 正常なシャットダウン</li>
  <li>✅ PDB: 最小可用性が違反された場合のドレインを防止__HTMLTAG_103___
  <li>✅ HPA: CPU/RPS に基づく自動スケール</li>
  <li>✅ ネットワーク ポリシー: デフォルトの拒否 + 特定のトラフィックの許可__HTMLTAG_107___
  <li>✅ セキュリティ コンテキスト: 非ルート、読み取り専用ファイル システム、機能なし</li>
  <li>✅ 正常なシャットダウン: preStop フック + SIGTERM ハンドラー</li>
</ul>