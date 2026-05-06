---
id: 019c9618-0104-7000-8000-c1147ba22e11
title: 'レッスン 13: 実践 — 構成とストレージ'
slug: thuc-hanh-3-configuration-va-storage
description: 'モジュール 3 の実践: ConfigMap と Secret を使用したアプリケーションのデプロイ、外部シークレット Operator の統合、CSI ドライバー (Longhorn) のインストール、StatefulSet と PVC を使用した PostgreSQL のデプロイ、ボリューム スナップショットの作成と復元。'
duration_minutes: 180
is_free: false
video_url: null
sort_order: 13
section_title: 'モジュール 3: 構成とストレージ'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2006" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2006)"/>

  <!-- Decorations -->
  <g>
    <circle cx="713" cy="289" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="826" cy="202" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="939" cy="115" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1052" cy="288" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="665" cy="201" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="99" x2="1100" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="129" x2="1050" y2="199" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1078.444863728671,232 1078.444863728671,266 1049,283 1019.555136271329,266 1019.555136271329,232 1049,215" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: 実践 - 設定と</tspan>
      <tspan x="60" dy="42">ストレージ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 3: 構成とストレージ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 練習目標__HTMLTAG_68___
<ul>
  <li>ConfigMap を使用してアプリケーションをデプロイする (環境変数とボリューム マウント)</li>
  <li>安全なシークレットの作成と管理</li>
  <li>CSI ドライバーをインストールし、StorageClass を作成</li>
  <li>StatefulSet と Persistent VolumeClaim を使用した PostgreSQL のデプロイ</li>
  <li>ボリューム スナップショットを作成し、復元を実行__HTMLTAG_79___
</ul>

<h2>準備</h2>
___コードブロック_0___

<h2>ラボ 1: ConfigMaps</h2>
___コードブロック_1___
___コードブロック_2___

<h2>ラボ 2: 秘密</h2>
___コードブロック_3___

<h2>ラボ 3: 不変の ConfigMap と Secret</h2>
___コードブロック_4___

<h2>_ラボ 4: ローカル ストレージを使用した Persistent Volume と PVC</h2>
___コードブロック_5___

<h2>ラボ 5: StatefulSet を使用した PostgreSQL</h2>
___コードブロック_6___

<h2>_ラボ 6: データの永続性を確認する__HTMLTAG_94___
___コードブロック_7___

<h2>クリーンアップ</h2>
___コードブロック_8___

<h2>概要__HTMLTAG_98___
<ul>
  <li>✅ ConfigMap: 環境変数とボリューム マウント</li>
  <li>✅ 秘密: 機密データを保存します (base64、暗号化されていないことに注意してください)</li>
  <li>✅ PV/PVC: ストレージのリクエストと割り当て__HTMLTAG_105___
  <li>✅ StatefulSet PostgreSQL: 安定したアイデンティティ、永続ストレージ</li>
  <li>✅ ポッドの再起動によるデータの永続化__HTMLTAG_109___
</ul>