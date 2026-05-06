---
id: 019c9618-060d-7000-8000-c1147ba22e16
title: '講義 45: Kubernetes のコストの最適化'
slug: bai-45-cost-optimization-kubernetes
description: 'コストの最適化 Kubernetes 2026: スポット/プリエンプティブル ノード、Karpenter 統合、VPA による適切なサイジング、Kubecost、名前空間の予算、アイドル状態のリソースのクリーンアップ、マルチテナントのコスト割り当て。'
duration_minutes: 75
is_free: false
video_url: null
sort_order: 45
section_title: 'モジュール 10: クラウドと本番環境'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6114" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6114)"/>

  <!-- Decorations -->
  <g>
    <circle cx="751" cy="183" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="902" cy="234" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1053" cy="285" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="704" cy="76" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="127" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="73" x2="1100" y2="153" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="103" x2="1050" y2="173" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.2487113059642,209 1047.2487113059642,237 1023,251 998.7512886940357,237 998.7512886940357,209 1023,195" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — レッスン 45</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 45: KUBERNETES のコストの最適化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 10: クラウドと制作_</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>🎯 レッスンの目的</h2><p>クラウドでの Kubernetes のコスト最適化戦略を理解し、適用します: スポット インスタンス、適切なサイジング、ノードの統合、コスト可視化ツール。</p>

<h2>1. K8 は予想よりも高価であることが多いのはなぜですか?</h2>
<ul>
  <li><strong>オーバープロビジョニング</strong>: リクエスト/制限の設定が実際の使用量に比べて高すぎます</li>
  <li><strong>アイドル状態のノード</strong>: ノードが効果的に使用されていません (使用率 < 30%)</li>
  <li><strong>Kube システムのオーバーヘッド</strong>: デーモンセット (Cilium、ロギング エージェント) がリソースを消費</li>
  <li><strong>未使用の PV__HTMLTAG_86___: 削除された環境の Persistent Volume は依然として請求されます</li>
  <li><strong>ロード バランサー</strong>: 各ロードバランサー サービス = 1 クラウド LB (月額 18 ～ 30 ドル)</li>
  <li><strong>データ転送</strong>: ポッド間のクロス AZ トラフィックには費用がかかります</li>
</ul>

<h2>2.スポット/プリエンプティブル インスタンス</h2>
___コードブロック_0___
___コードブロック_1___

<h2>3. Karpenter ノードの統合</h2>
___コードブロック_2___
___コードブロック_3___

<h2>4. VPA と Goldilocks による適切なサイジング</h2>
___コードブロック_4___

<h2>5. Kubecost — コストの可視性</h2>
___コードブロック_5___
___コードブロック_6___

<h2>6.ロードバランサーのコストを削減</h2>
___コードブロック_7___

<h2>7。 PersistentVolume クリーンアップ</h2>
___コードブロック_8___

<h2>8。クロス AZ トラフィックの最適化</h2>
___コードブロック_9___
___コードブロック_10___

<h2>9。コスト最適化の概要</h2>
___コードブロック_11___<h2>概要</h2>
<ul>
  <li>スポット インスタンス: フォールト トレラント ワークロードの 50 ～ 80% の節約__HTMLTAG_117___
  <li>_Karpenter 統合: ポッドを自動的に統合し、アイドル状態のノードを削除__HTMLTAG_119___
  <li>Goldilocks + VPA: 実際の使用量に基づいて適切なサイズのリソース</li>
  <li>Kubecost: チーム/名前空間/デプロイごとのコストの可視性</li>
  <li>1 ゲートウェイは多くのロードバランサーを置き換えます: 大幅な節約__HTMLTAG_125___
  <li>トポロジ認識ルーティング: クロス AZ トラフィック コストの削減__HTMLTAG_127___
</ul>