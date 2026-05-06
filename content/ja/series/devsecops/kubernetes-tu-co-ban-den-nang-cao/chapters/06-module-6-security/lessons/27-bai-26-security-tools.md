---
id: 019c9618-0404-7000-8000-c1147ba22e14
title: 'レッスン 26: セキュリティ ツール'
slug: bai-26-security-tools
description: 'Kubernetes セキュリティ ツール: kube-bench (CIS ベンチマーク)、Trivy (脆弱性スキャン)、Falco (ランタイム脅威検出)、OPA/Gatekeeper (高度なポリシー)。セキュリティパイプラインを構築します。'
duration_minutes: 80
is_free: false
video_url: null
sort_order: 26
section_title: 'モジュール 6: セキュリティ'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5616" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5616)"/>

  <!-- Decorations -->
  <g>
    <circle cx="716" cy="158" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="832" cy="114" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="948" cy="70" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1064" cy="286" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="680" cy="242" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="118" x2="1100" y2="198" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="148" x2="1050" y2="218" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="946.5788383248864,101.5 946.5788383248864,134.5 918,151 889.4211616751136,134.5 889.4211616751135,101.50000000000001 918,85" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — レッスン 26</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 26: セキュリティ ツール</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 6: セキュリティ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>🎯 レッスンの目的</h2><p>重要なセキュリティ ツールの使用方法を理解します。コンプライアンス チェックには kube-bench、脆弱性スキャンには Trivy、ランタイム検出には Falco、ポリシー適用には OPA/Gatekeeper を使用します。</p>

<h2>1. kube-bench — CIS ベンチマーク</h2>
<p>kube-bench は、__HTMLTAG_72___CIS (Center for Internet Security) Kubernetes Benchmark</strong> — 広く認識されているセキュリティ強化標準に対して Kubernetes クラスターをテストします。</p>
___コードブロック_0___
___コードブロック_1___
<p>優先修正: セクション 1 (API サーバー) と 4 (kubelet) の FAIL から始まります。</p>

<h2>2. Trivy — 脆弱性スキャン</h2>
<p>Trivy は、コンテナー、ファイル システム、Git リポジトリ、および Kubernetes クラスター用の包括的なセキュリティ スキャナーです。</p>

<h3>2.1 コンテナ イメージのスキャン</h3>
___コードブロック_2___
___コードブロック_3___

<h3>2.2 Kubernetes マニフェストのスキャン</h3>
___コードブロック_4___

<h3>2.3 実行中のクラスターのスキャン</h3>
___コードブロック_5___

<h3>2.4 CI/CD のトリビー</h3>
___コードブロック_6___

<h2>3. Falco — ランタイム脅威検出</h2>
<p>Falco は eBPF を使用してシステム コールを監視し、実行時に不審な動作を検出します。</p>

<h3>3.1 Falco のインストール</h3>
___コードブロック_7___

<h3>3.2 デフォルトの Falco ルール__HTMLTAG_96___
___コードブロック_8___

<h3>3.3 カスタム Falco ルール</h3>
___コードブロック_9___

<h3>3.4 Falco サイドキック — アラート転送</h3>
___コードブロック_10___

<h2>4. OPA/ゲートキーパー — 高度なポリシー</h2>
___コードブロック_11___
___コードブロック_12___

<h2>5.セキュリティ パイプライン</h2>
___コードブロック_13___<h2>概要</h2>
<ul>
  <li>kube-bench: CIS ベンチマーク準拠、優先度の FAIL 項目を修正</li>
  <li>Trivy: イメージ、マニフェスト、クラスターのスキャン — CI/CD 統合</li>
  <li>Falco: eBPF ランタイム検出、カスタム ルール、サイドキック アラート</li>
  <li>OPA/ゲートキーパー: 変更ポリシーまたは複雑な rego ロジックが必要な場合</li>
  <li>セキュリティ パイプライン: シフト左 (CI でのスキャン) + ランタイム (Falco)</li>
</ul>