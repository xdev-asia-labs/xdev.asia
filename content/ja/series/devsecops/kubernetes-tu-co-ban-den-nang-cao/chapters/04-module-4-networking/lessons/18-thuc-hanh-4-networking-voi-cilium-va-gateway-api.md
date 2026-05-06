---
id: 019c9618-0204-7000-8000-c1147ba22e12
title: 'レッスン 17: 実践 — Cilium とゲートウェイ API を使用したネットワーキング'
slug: thuc-hanh-4-networking-voi-cilium-va-gateway-api
description: 'モジュール 4 の実践: Hubble UI を使用して Cilium を CNI としてインストールし、ゲートウェイ API (HTTPRoute) を構成し、cert-manager を使用して TLS をセットアップし、L7 ネットワーク ポリシーを実装し、Hubble を介したネットワーク トラフィックを観察します。'
duration_minutes: 180
is_free: false
video_url: null
sort_order: 17
section_title: 'モジュール 4: ネットワーキング'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1738" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1738)"/>

  <!-- Decorations -->
  <g>
    <circle cx="627" cy="31" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="654" cy="118" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="681" cy="205" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="708" cy="32" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="735" cy="119" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="221" x2="1100" y2="301" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="251" x2="1050" y2="321" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1052.1769145362398,203 1052.1769145362398,239 1021,257 989.8230854637602,239 989.8230854637602,203 1021,185" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — レッスン 17</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 17: 実践 — CILIUM を使用したネットワーキング</tspan>
      <tspan x="60" dy="42">AND ゲートウェイ API</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 4: ネットワーキング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 練習目標__HTMLTAG_68___
<ul>
  <li>ハッブル観測機能を備えた Cilium CNI のインストール</li>
  <li>API ゲートウェイ (Envoy ゲートウェイまたは Cilium ゲートウェイ) のインストールと構成</li>
  <li>パスベースのルーティングとトラフィック分割のための HTTPRoute の作成__HTMLTAG_75___
  <li>デフォルトの拒否ネットワーク ポリシーを実装し、特定のトラフィックを許可</li>
  <li>Hubble UI でネットワーク トラフィックを観察</li>
</ul>

<h2>_ラボ 1: Helm を使用して Cilium をインストール</h2>
___コードブロック_0___

<h2>ラボ 2: ハッブル UI をオンにしてトラフィックを観察する</h2>
___コードブロック_1___

<h2>ラボ 3: デモ アプリケーションのデプロイ__HTMLTAG_86___
___コードブロック_2___

<h2>_ラボ 4: ゲートウェイ API — パスベースのルーティング__HTMLTAG_88___
___コードブロック_3___

<h2>_ラボ 5: ネットワーク ポリシー — デフォルトの拒否</h2>
___コードブロック_4___

<h2>ラボ 6: ハッブルによる観測__HTMLTAG_92___
___コードブロック_5___

<h2>クリーンアップ</h2>
___コードブロック_6___

<h2>概要__HTMLTAG_96___
<ul>
  <li>✅ eBPF ネットワーキングを備えた Cilium CNI__HTMLTAG_99___
  <li>✅ ハッブル: リアルタイムのネットワーク可観測性</li>
  <li>✅ ゲートウェイ API: パスベースのルーティングとトラフィック分割 (カナリア)</li>
  <li>✅ ネットワーク ポリシー: デフォルトの拒否 + 特定の許可</li>
  <li>✅ Hubble を使用してドロップされたパケットをデバッグする</li>
</ul>