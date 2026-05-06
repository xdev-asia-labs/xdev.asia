---
id: 019c9618-0603-7000-8000-c1147ba22e16
title: 'レッスン 35: サービス メッシュ 2026 — CILIUM、ISTIO、LINKERD'
slug: bai-35-service-mesh-2026-cilium-istio-linkerd
description: 'Service Mesh 2026: Cilium Service Mesh サイドカーレス eBPF (オーバーヘッド 40 ～ 60% 削減)、Istio 1.24+ アンビエント モード、Linkerd Rust ベースのマイクロプロキシ。 mTLS、トラフィック管理、可観測性。比較して、いつ何を選択するべきか。'
duration_minutes: 95
is_free: false
video_url: null
sort_order: 35
section_title: 'モジュール 8: ヘルム、オペレーター、GitOps'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1387" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1387)"/>

  <!-- Decorations -->
  <g>
    <circle cx="671" cy="143" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="742" cy="94" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="813" cy="45" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="884" cy="256" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="955" cy="207" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="233" x2="1100" y2="313" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="263" x2="1050" y2="333" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1057.2487113059642,219 1057.2487113059642,247 1033,261 1008.7512886940357,247 1008.7512886940357,219 1033,205" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — レッスン 35</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 35: サービス メッシュ 2026 — CILIUM、ISTIO、</tspan>
      <tspan x="60" dy="42">LINKERD</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 8: ヘルム、オペレーター、およびGitOps</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 レッスンの目的_</h2><p>Service Mesh が必要な理由を理解し、2026 年の 3 つの人気のある実装 (Cilium Sidecarless、Istio Ambient、Linkerd) を比較し、特定のユースケースにいつ何を選択すればよいかを理解します。</p>

<h2>1. Service Mesh が必要な理由</h2>
<p>_マイクロサービスは多くの課題を引き起こします:</p>
<ul>
  <li><strong>mTLS</strong>: サービス間のトラフィックの暗号化、ID の認証</li>
  <li><strong>トラフィック管理</strong>: カナリア、サーキット ブレーク、再試行、タイムアウト</li>
  <li><strong>可観測性</strong>: 分散トレーシング、サービス間ごとのメトリクス</li>
  <li><strong>負荷分散</strong>: L7 負荷分散は kube-proxy よりも賢明です</li>
</ul>
<p>Service Mesh はこれらの機能をインフラストラクチャ レベルで実装します。アプリケーション コードを変更する必要はありません。</p>

<h2>2.サイドカーとサイドカーレスのアーキテクチャ</h2>
<p>従来のメッシュ サービス (Istio サイドカー モード) は、Envoy プロキシを各ポッドに挿入します:</p>
___コードブロック_0___
<p>サイドカーレス アプローチ (Cilium、Istio Ambient): プロキシはノード レベルまたはカーネル レベルでポッドの外側に配置されます。</p><h2>3. Cilium サービス メッシュ — サイドカーレス eBPF</h2>
<p>Cilium は、eBPF</strong> を使用してカーネル レベルでサービス メッシュ <strong> を実装します。Pod にサイドカー プロキシは必要ありません。</p>
<p><strong>利点</strong>:</p>
<ul>
  <li>Istio サイドカーと比較してネットワーク オーバーヘッドを 40 ～ 60% 削減</li>
  <li>最小レイテンシ (カーネル空間処理)</li>
  <li>サイドカーを挿入する必要がない → シンプルでアップグレードが簡単__HTMLTAG_117___
  <li>Cilium CNI とのネイティブ統合 (ネットワーキング + ポリシー + メッシュ用の 1 つのスタック)</li>
  <li>ハッブル: L7 可観測性の統合__HTMLTAG_121___
</ul>
<p><strong>欠点</strong>:</p>
<ul>
  <li>Istio フルより機能が少ない (フォールト挿入なし、高度なトラフィック管理)</li>
  <li>Cilium に CNI になるよう依頼</li>
</ul>
___コードブロック_1___

<h2>4. Istio アンビエント モード — 安定版 Istio 1.24+</h2>
<p>Istio アンビエント モード (Istio 1.24 以降で安定) は、サイドカーを使用しない代替モードです。</p>
<p><strong>アーキテクチャ</strong>:</p>
<ul>
  <li><strong>ztunnel</strong>: ノードごとの L4 プロキシ、mTLS 処理、およびすべてのワークロードの基本ルーティング__HTMLTAG_145___
  <li><strong>_ウェイポイント プロキシ</strong>: ワークロードごとの L7 プロキシ、オプション — 必要な場合にのみ導入 L7 機能</li>
</ul>
___コードブロック_2___
___コードブロック_3___
<p><strong>_Istio Ambient</strong>: サイドカー モードと比較してリソースを最大 40% 削減します。必要に応じて Istio の全機能を利用できます (ウェイポイント)。 Istio エコシステムと互換性があります。</p>

<h2>5. Linkerd — Rust マイクロプロキシ</h2>
<p>Linkerd は、Rust で書かれた <strong>linkerd2-proxy</strong> を使用します。これは、サイドカーを使用した最小かつ最速のサービス メッシュです。</p>
<ul>
  <li>Sidecar ですが非常に軽量: メモリ/プロキシ最大 10 MB (Envoy と比較して最大 50 MB)</li>
  <li>_Rust: メモリセーフ、ゼロコスト抽象化、超高速</li>
  <li>構成なしの自動 mTLS</li>
  <li>HTTP/1.1、HTTP/2、gRPC のサポート</li>
  <li>単純な再試行とタイムアウト__HTMLTAG_171___
  <li>サービス プロファイル: ルートごとのメトリクスと再試行__HTMLTAG_173___
</ul>
___コードブロック_4___
<p><strong>Linkerd vs Cilium vs Istio</strong>: Linkerd は、最も軽量で最も単純なサイドカー モデルが必要な場合に適しています。</p>

<h2>6. Service Mesh 2026 の比較</h2>
___コードブロック_5___

<h2>7. Istio</h2> によるトラフィック管理
___コードブロック_6___<h2>8。いつ何を選択すればよいですか?</h2>
<ul>
  <li><strong>Cilium Service Mesh</strong>: Cilium CNI を使用、サイドカーレス、優先パフォーマンス、mTLS および基本的なトラフィック管理が必要__HTMLTAG_189___
  <li><strong>Istio アンビエント モード</strong>: エンタープライズ、Istio の完全な機能 (サーキット ブレーク、フォールト インジェクション、高度なトラフィック) が必要、すでに Istio の専門知識を備えている__HTMLTAG_193___
  <li><strong>Linkerd</strong>: サイドカー モデルが必要ですが、最も軽量で単純な、リソースに制約のあるクラスター</li>
  <li><strong>_サービス メッシュを使用しない</strong>: 小規模なクラスター、少数のサービス、NetworkPolicy で十分な分離</li>
</ul>

<h2>概要</h2>
<ul>
  <li>サービス メッシュ: mTLS、トラフィック管理、インフラストラクチャ レベルでの可観測性</li>
  <li>Cilium Sidecarless: eBPF カーネル レベル、最小のオーバーヘッド、使用されるクラスターに適しています Cilium</li>
  <li>Istio Ambient: L4 ztunnel + オプションの L7 ウェイポイント、最も完全な</li>
  <li>Linkerd: Rust マイクロプロキシ、最軽量のサイドカー モデル__HTMLTAG_213___
  <li>トレンド 2026: サイドカーレスが進むべき道ですが、エンタープライズでは依然として Istio サイドカーが使用されています</li>
</ul>