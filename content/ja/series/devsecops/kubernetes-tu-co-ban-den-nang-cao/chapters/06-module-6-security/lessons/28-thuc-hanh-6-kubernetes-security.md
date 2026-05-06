---
id: 019c9618-0405-7000-8000-c1147ba22e14
title: 'レッスン 27: 実践 — Kubernetes セキュリティ'
slug: thuc-hanh-6-kubernetes-security
description: 'モジュール 6 の実践: ServiceAccount と RBAC の最小権限を作成し、CEL で ValidatingAdmissionPolicy を書き込み、Cosign でコンテナー イメージに署名し、kube-bench でクラスターをスキャンし、PSA 制限モードを構成します。'
duration_minutes: 180
is_free: false
video_url: null
sort_order: 27
section_title: 'モジュール 6: セキュリティ'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2402" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2402)"/>

  <!-- Decorations -->
  <g>
    <circle cx="755" cy="275" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="910" cy="270" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1065" cy="265" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="720" cy="260" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="255" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="65" x2="1100" y2="145" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="95" x2="1050" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="999.6410161513776,145 999.6410161513776,185 965,205 930.3589838486224,185 930.3589838486224,145 965,125" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 27</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 27: 実践 — KUBERNETES セキュリティ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 6: セキュリティ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>🎯 練習目標</h2>
<ul>
  <li>CI/CD ServiceAccount の最小権限で RBAC を作成__HTMLTAG_69___
  <li>CEL を使用した ValidatingAdmissionPolicy の作成</li>
  <li>ポッド セキュリティの入場制限モードを適用</li>
  <li>Trivy で画像とクラスターをスキャン</li>
  <li>Falco をデプロイしてランタイム検出をテスト__HTMLTAG_77___
</ul>

<h2>ラボ 1: RBAC — 読み取り専用 ServiceAccount</h2>
___コードブロック_0___

<h2>_ラボ 2: CI/CD デプロイヤーの RBAC__HTMLTAG_82___
___コードブロック_1___

<h2>ラボ 3:AdmissionPolicy の検証</h2>
___コードブロック_2___

<h2>ラボ 4: ポッドのセキュリティ アドミッション - 制限付きモード</h2>
___コードブロック_3___

<h2>ラボ 5: Trivy Scan</h2>
___コードブロック_4___

<h2>ラボ 6: Falco ランタイム検出</h2>
___コードブロック_5___

<h2>クリーンアップ</h2>
___コードブロック_6___

<h2>概要__HTMLTAG_94___
<ul>
  <li>✅ 監視および CI/CD ロールに対する RBAC の最小権限__HTMLTAG_97___
  <li>✅ ValidatingAdmissionPolicy: CEL</li> を使用して最新の画像をブロックします
  <li>✅ PSA 制限モード: 強化されたセキュリティを適用</li>
  <li>✅ 重要: 画像とマニフェストのスキャン__HTMLTAG_103___
  <li>✅ Falco: eBPF によるランタイム脅威検出</li>
</ul>