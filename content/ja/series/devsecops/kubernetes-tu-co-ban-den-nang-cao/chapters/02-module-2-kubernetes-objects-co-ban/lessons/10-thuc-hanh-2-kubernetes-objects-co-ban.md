---
id: 019c9618-0008-7000-8000-c1147ba22e10
title: 'レッスン 9: 実践 — 基本的な Kubernetes オブジェクト'
slug: thuc-hanh-2-kubernetes-objects-co-ban
description: 'モジュール 2 の実践: デプロイメント コンテナーとサイドカー コンテナーを使用して Web アプリケーションをデプロイし、ローリング アップデートを実行し、サービスを公開し、一時コンテナーを使用してデバッグし、名前空間とリソース クォータを管理します。'
duration_minutes: 150
is_free: false
video_url: null
sort_order: 9
section_title: 'モジュール 2: 基本的な Kubernetes オブジェクト'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2645" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2645)"/>

  <!-- Decorations -->
  <g>
    <circle cx="732" cy="226" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="864" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="996" cy="270" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="628" cy="162" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="760" cy="54" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="86" x2="1100" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="116" x2="1050" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1021.507041555162,165.5 1021.507041555162,206.5 986,227 950.492958444838,206.5 950.492958444838,165.5 986,145" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: 実践 — KUBERNETES オブジェクト</tspan>
      <tspan x="60" dy="42">表</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 2: 基本的な Kubernetes オブジェクト</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 練習目標__HTMLTAG_68___
<ul>
  <li>デプロイメント + サイドカー コンテナー (ログ フォワーダー) を使用して実際の Web アプリケーションをデプロイ</li>
  <li>ローリング更新とロールバックを実行__HTMLTAG_73___
  <li>NodePort を使用してサービスを公開</li>
  <li>一時コンテナを使用したコンテナのデバッグ</li>
  <li>複数チームの名前空間とリソースクォータを管理__HTMLTAG_79___
</ul>

<h2>準備</h2>
___コードブロック_0___

<h2>ラボ 1: サイドカー コンテナを使用した Web アプリのデプロイ</h2>
<p>Grafana Alloy をサイドカー ログ フォワーダーとして使用して nginx をデプロイします (シミュレーション済み、実際の Loki を設定する必要はありません)。</p>
___コードブロック_1___
___コードブロック_2___

<h2>_ラボ 2: サービスの公開と負荷分散のテスト__HTMLTAG_88___
___コードブロック_3___

<h2>ラボ 3: ローリング アップデート</h2>
___コードブロック_4___

<h2>ラボ 4: 一時コンテナーを使用したデバッグ</h2>
___コードブロック_5___

<h2>_ラボ 5: ResourceQuota を使用したマルチチームの名前空間</h2>
___コードブロック_6___

<h2>ラボ 6: カナリア デプロイメント</h2>
___コードブロック_7___

<h2>トラブルシューティング — 一般的な問題</h2>
<h3>ポッドが保留中のままになっている__HTMLTAG_100___
___コードブロック_8___
<h3>ImagePullBackOff</h3>
___コードブロック_9___
<h3>CrashLoopBackOff</h3>
___コードブロック_10___

<h2>クリーンアップ</h2>
___コードブロック_11___<h2>概要__HTMLTAG_108___
<p>次のことを練習しました:</p>
<ul>
  <li>✅ サイドカー コンテナを使用したデプロイメント (K8s 1.33 以降)</li>
  <li>✅ ローリング アップデートと安全なロールバック</li>
  <li>✅ NodePort と EndpointSlice を使用したサービス</li>
  <li>✅ 一時コンテナを使用したデバッグ</li>
  <li>✅ マルチチームの名前空間 + ResourceQuota + LimitRange</li>
  <li>✅ カナリア展開パターン</li>
</ul>