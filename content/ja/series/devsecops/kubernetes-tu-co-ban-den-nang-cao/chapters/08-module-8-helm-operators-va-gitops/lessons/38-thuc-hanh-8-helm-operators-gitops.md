---
id: 019c9618-0605-7000-8000-c1147ba22e16
title: 'レッスン 37: 実践 — ヘルム、オペレーター、GITOPS'
slug: thuc-hanh-8-helm-operators-gitops
description: 'モジュール 8 の演習: Helm 4 チャートを作成して OCI レジストリに公開し、cert-manager オペレーターをインストールし、ArgoCD GitOps をセットアップして Git からアプリケーションをデプロイし、App of Apps パターンを作成します。'
duration_minutes: 180
is_free: false
video_url: null
sort_order: 37
section_title: 'モジュール 8: ヘルム、オペレーター、GitOps'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-580" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-580)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1061" cy="213" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="1022" cy="274" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="983" cy="75" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="944" cy="136" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="905" cy="197" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="203" x2="1100" y2="283" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="233" x2="1050" y2="303" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1035.9089653438086,184 1035.9089653438086,222 1003,241 970.0910346561914,222 970.0910346561914,184 1003,165" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — レッスン 37</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 37: 実践 — ヘルム、オペレーター、</tspan>
      <tspan x="60" dy="42">GITOPS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 8: ヘルム、オペレーター、およびGitOps</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 練習目標__HTMLTAG_68___
<ul>
  <li>Helm チャートを最初から作成してインストール</li>
  <li>Helm フックとテストを作成</li>
  <li>cert-manager オペレーターをインストールし、TLS 証明書を生成</li>
  <li>ArgoCD をデプロイし、アプリケーションを作成</li>
  <li>アプリパターンのアプリをセットアップ</li>
</ul>

<h2>ラボ 1: Helm チャートの作成</h2>
___コードブロック_0___

<h2>ラボ 2: ヘルム フック</h2>
___コードブロック_1___

<h2>ラボ 3: Helm テスト</h2>
___コードブロック_2___

<h2>ラボ 4: cert-manager オペレーター</h2>
___コードブロック_3___

<h2>_ラボ 5: ArgoCD のデプロイ</h2>
___コードブロック_4___

<h2>ラボ 6: ArgoCD アプリケーションの作成__HTMLTAG_92___
___コードブロック_5___
___コードブロック_6___

<h2>ラボ 7: アプリの中のアプリ</h2>
___コードブロック_7___

<h2>ラボ 8: GitOps ワークフローをシミュレート</h2>
___コードブロック_8___

<h2>クリーンアップ</h2>
___コードブロック_9___

<h2>概要</h2>
<ul>
  <li>✅ ゼロからの Helm チャート: 構造、テンプレート、値</li>
  <li>✅ Helm フック: アップグレード前の移行ジョブ</li>
  <li>✅ Helm テスト: デプロイメントの検証</li>
  <li>✅ cert-manager: 自動 TLS 証明書</li>
  <li>✅ ArgoCD: アプリケーション + 同期ポリシーの自動化</li>
  <li>✅ アプリのアプリ: 1 つのルート アプリで複数のアプリを管理</li>
  <li>✅ GitOps 自己修復: ArgoCD 自己修復ドリフト</li>
</ul>