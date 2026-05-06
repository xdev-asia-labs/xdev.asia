---
id: 019c9618-0607-7000-8000-c1147ba22e16
title: 'レッスン 39: 2026 年のインフラストラクチャ移行 — CGROUP V2 と CONTAINER 2.0'
slug: bai-39-infrastructure-migration-2026-cgroup-v2-containerd-2
description: '移行ガイド 2026: cgroup v1 から v2 へのアップグレード、containerd 1.x から 2.0 へのアップグレード、docker shim の削除、nftables kube-proxy。互換性の問題を検出し、ロールバック戦略を行います。'
duration_minutes: 75
is_free: false
video_url: null
sort_order: 39
section_title: 'モジュール 9: クラスター管理'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3184" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3184)"/>

  <!-- Decorations -->
  <g>
    <circle cx="694" cy="212" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="788" cy="186" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="882" cy="160" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="976" cy="134" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="108" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="212" x2="1100" y2="292" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="242" x2="1050" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1035.38268590218,198.5 1035.38268590218,225.5 1012,239 988.6173140978201,225.5 988.6173140978201,198.5 1012,185" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — レッスン 39</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 39: 2026 年のインフラストラクチャ移行 —</tspan>
      <tspan x="60" dy="42">CGROUP V2 および CONTAINER 2.0</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 9: クラスター管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 レッスンの目的_</h2><p>古いインフラストラクチャ (cgroup v1、containerd 1.x、iptables) から新しいスタック 2026 (cgroup v2、containerd 2.0、nftables) への移行を理解し、実装します。重大な変更を検出し、それに応じて処理します。</p>

<h2>1.なぜ移行する必要があるのですか?</h2>
<p><strong>タイムラインの廃止</strong>:</p>
<ul>
  <li><strong>Dockershim</strong>: K8s 1.24 (2022) を削除 —containerd または CRI-O</li> を使用する必要があります
  <li><strong>cgroup v1</strong>: 非推奨の Linux カーネル 6.x、Ubuntu 24.04 のデフォルト cgroup v2</li>
  <li><strong>iptables kube-proxy</strong>: 非推奨の K8s 1.33、予定されていた 1.37</li> を削除
  <li><strong>IPVS kube-proxy</strong>: 非推奨の K8s 1.35</li>
  <li><strong>containerd 1.x</strong>: EOL、containerd 2.0 GA (2025) でパフォーマンスが大幅に向上</li>
</ul>

<h2>2.移行前に確認してください</h2>
___コードブロック_0___

<h2>3.移行 cgroup v1 → v2</h2>
___コードブロック_1___

<h2>4.コンテナー 1.x → 2.0</h2> の移行
___コードブロック_2___

<h2>5.移行 kube-proxy iptables → nftables</h2>
___コードブロック_3___

<h2>6. cgroup v2</h2> と互換性のないアプリケーションの処理
___コードブロック_4___

<h2>7.ロールバック戦略</h2>
___コードブロック_5___

<h2>8。 Kubernetes バージョンのアップグレード</h2>
___コードブロック_6___<h2>概要</h2>
<ul>
  <li>cgroup v2: Ubuntu 24.04 のデフォルト、cgroupDriver を systemd</li> に変更
  <li>containerd 2.0: ドレイン → アップグレード → 検証 → 各ノードの解凍</li>
  <li>kube-proxy nftables: configmap にパッチを適用 → DaemonSet を再起動</li>
  <li>本番環境に移行する前に必ずロールバック計画を立てる</li>
  <li>K8s アップグレード: 各マイナー バージョン、スキップしないでください</li>
  <li>本番環境に移行する前にステージング クラスタでテストしてください</li>
</ul>