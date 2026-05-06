---
id: 019c9618-0504-7000-8000-c1147ba22e15
title: 'レッスン 31: Kubernetes のデバッグとトラブルシューティング'
slug: bai-31-debugging-va-troubleshooting-kubernetes
description: 'Kubernetes のデバッグ: kubectl デバッグ、一時コンテナー、kubectl イベント、kubectl トップ。ポッドの障害、ノードの問題、ネットワークの問題を Cilium Hubble でトラブルシューティングします。一般的な問題と詳細な解決策。'
duration_minutes: 80
is_free: false
video_url: null
sort_order: 31
section_title: 'モジュール 7: 可観測性と監視'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2357" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2357)"/>

  <!-- Decorations -->
  <g>
    <circle cx="696" cy="198" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="792" cy="254" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="888" cy="50" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="984" cy="106" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1080" cy="162" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="58" x2="1100" y2="138" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="88" x2="1050" y2="158" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="936.5788383248864,91.5 936.5788383248864,124.5 908,141 879.4211616751136,124.5 879.4211616751135,91.50000000000001 908,75" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — レッスン 31</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 31: デバッグとトラブルシューティング</tspan>
      <tspan x="60" dy="42">_KUBERNETES_</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 7: 可観測性と可観測性モニタリング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 レッスンの目標</h2><p>Kubernetes のデバッグ スキルをマスターする: ポッドの障害、ノードの問題からネットワークの問題まで。 kubectl デバッグ、一時コンテナー、および Cilium Hubble を使用して診断します。</p>

<h2>1. kubectl デバッグ — 一時的なコンテナ</h2>
___コードブロック_0___

<h2>2.ポッド障害のトラブルシューティング</h2>

<h3>2.1 ポッドが保留中のままになる</h3>
___コードブロック_1___

<h3>2.2 画像プルバックオフ</h3>
___コードブロック_2___

<h3>2.3 クラッシュループバックオフ</h3>
___コードブロック_3___

<h3>2.4 OOMKilled</h3>
___コードブロック_4___

<h2>3.ノードのトラブルシューティング</h2>
___コードブロック_5___

<h2>4.ネットワーク デバッグ</h2>
___コードブロック_6___

<h2>5. kubectl イベント — 重要な情報のソース</h2>
___コードブロック_7___

<h2>6. kubectl トップ — リソース使用量</h2>
___コードブロック_8___

<h2>7.アプリケーションが遅い — パフォーマンスのトラブルシューティング</h2>
___コードブロック_9___

<h2>8.一般的な問題のチェックリスト</h2>
___コードブロック_10___

<h2>9。ランブックの例 — CrashLoopBackOff</h2>
___コードブロック_11___<h2>概要</h2>
<ul>
  <li>kubectl デバッグ: distroless イメージの一時コンテナ、デバッグ ノード</li>
  <li>CrashLoopBackOff: <code>kubectl ログを参照 --previous</code></li>
  <li>保留中: <code>kubectl のイベントを参照してポッド</code></li>
  <li>ネットワークの問題: エンドポイントを確認し、ハッブルを使用してドロップされたパケットを表示</li>
  <li>パフォーマンス: kubectl トップ、cgroup 統計で CPU スロットリングを確認</li>
  <li>イベント: <code>kubectl get events --sort-by='.lastTimestamp'</code> は最も重要なツール</li>
</ul>