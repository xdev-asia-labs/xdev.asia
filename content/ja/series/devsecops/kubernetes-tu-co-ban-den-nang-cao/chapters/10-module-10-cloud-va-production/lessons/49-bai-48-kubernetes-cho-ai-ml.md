---
id: 019c9618-0610-7000-8000-c1147ba22e16
title: '講義 48: AI/ML ワークロードのための Kubernetes'
slug: bai-48-kubernetes-cho-ai-ml
description: 'Kubernetes AI/ML 2026: DRA (動的リソース割り当て) GA K8s 1.34 を使用した GPU スケジューリング、タイム スライシング、MIG パーティショニング。 Kubernetes Inference Extension (KIE)、KEDA スケール トゥ ゼロ、ResourceFlavor、Kueue バッチ スケジューリング。'
duration_minutes: 85
is_free: false
video_url: null
sort_order: 48
section_title: 'モジュール 10: クラウドと本番環境'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9347" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9347)"/>

  <!-- Decorations -->
  <g>
    <circle cx="728" cy="134" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="856" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="984" cy="30" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="612" cy="238" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="740" cy="186" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="194" x2="1100" y2="274" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="224" x2="1050" y2="294" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="969.1147367097487,129.5 969.1147367097487,158.5 944,173 918.8852632902513,158.5 918.8852632902513,129.5 944,115" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — レッスン 48</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 48: AI/ML ワークロード用の KUBERNETES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 10: クラウドと制作_</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>🎯 レッスンの目的</h2><p>Kubernetes 2026 が AI/ML ワークロードをどのようにサポートしているかを理解します: DRA による GPU スケジューリング、KIE による推論処理、Kueue と JobSet によるバッチ トレーニング、リクエスト キューによる自動スケーリング。</p>

<h2>1. AI/ML に Kubernetes を使用する理由</h2>
<ul>
  <li><strong>サービスとしての GPU</strong>: 複数のチームで GPU クラスターを共有</li>
  <li><strong>ゼロにスケール</strong>: 推論サーバーがリクエストを受信しない → ポッドが 0 に減少し、GPU を節約</li>
  <li><strong>バッチ スケジュール</strong>: トレーニング ジョブはキューに入れられ、効率的にスケジュールされます</li>
  <li><strong>再現性</strong>: コンテナイメージにより一貫した環境が確保されます</li>
  <li><strong>マルチクラウドの移植性</strong>: GPU を使用して任意のクラウドでトレーニングを実行</li>
</ul>

<h2>2. GPU スケジューリング — 動的リソース割り当て (DRA) GA K8s 1.34</h2>
<p>DRA は古いデバイス プラグイン API を置き換え、より柔軟な GPU 共有を可能にします:</p>
___コードブロック_0___
___コードブロック_1___
___コードブロック_2___

<h2>3. GPU タイム スライシングと MIG</h2>
___コードブロック_3___

<h2>4. Kubernetes 推論拡張機能 (KIE)</h2>
<p>KIE (2025 CNCF プロジェクト): Kubernetes で提供される LLM 推論の標準化:</p>
___コードブロック_4___
___コードブロック_5___
___コードブロック_6___

<h2>5. Kueue — バッチジョブのスケジュール</h2>
<p>Kueue (CNCF): バッチ ワークロードの公平なキューイング (トレーニング ジョブ、データ処理):</p>
___コードブロック_7___
___コードブロック_8___
___コードブロック_9___
___コードブロック_10___

<h2>6. KEDA — 推論のためにゼロにスケール</h2>
___コードブロック_11___

<h2>7. K8s 2026 上の AI/ML スタックの概要</h2>
___コードブロック_12___<h2>概要</h2>
<ul>
  <li>DRA GA K8s 1.34: 柔軟な GPU 共有、デバイス プラグイン API の置き換え</li>
  <li>MIG: より強力な分離のためのハードウェア パーティショニング A100/H100__HTMLTAG_117___
  <li>Kueue: GPU クラスターの公平なバッチ スケジューリング、チームごとのクォータ</li>
  <li>KIE: キャッシュ認識プレフィックス__HTMLTAG_121___ を使用したインテリジェントな LLM 推論ルーティング
  <li>KEDA: アイドル時に推論サーバーを 0 にスケール → GPU コストを節約</li>
</ul>