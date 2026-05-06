---
id: 019c9618-0202-7000-8000-c1147ba22e12
title: 'レッスン 15: ゲートウェイ API — Ingress に代わる新しい標準'
slug: bai-15-gateway-api-chuan-moi-thay-ingress
description: 'Gateway API v1.4 GA (2025 年 10 月) は、Ingress コントローラーに代わる新しい標準です。 GatewayClass、Gateway、HTTPRoute、GRPCRoute。トラフィック分割、TLS、ヘッダーマッチング。実装: Cilium、Envoy Gateway、nginx-gateway-fabric。'
duration_minutes: 100
is_free: false
video_url: null
sort_order: 15
section_title: 'モジュール 4: ネットワーキング'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5724" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5724)"/>

  <!-- Decorations -->
  <g>
    <circle cx="860" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="230" x2="1100" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="260" x2="1050" y2="330" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="951.650635094611,117.5 951.650635094611,142.5 930,155 908.349364905389,142.5 908.349364905389,117.5 930,105" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: ゲートウェイ API — 新しい標準の置き換え</tspan>
      <tspan x="60" dy="42">INGRESS</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 4: ネットワーキング</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 レッスンの目標_</h2><p>Gateway API v1.4 は従来の Ingress に代わる新しい標準であり、GatewayClass、Gateway、HTTPRoute を使用してトラフィックをルーティングする方法、カナリア展開のためのトラフィック分割、TLS 終端、および一般的な実装について理解します。</p>

<h2>1.従来の Ingress の問題</h2>
<p>Ingress API は K8s 1.1 以降に存在し、多くの制限があります:</p>
<ul>
  <li><strong>アノテーション地獄</strong>: 各コントローラー (nginx、traefik、haproxy) が異なるアノテーションを使用する → ベンダーロックイン</li>
  <li><strong>表現力の制限</strong>: 組み込みのトラフィック分割なし、ヘッダー変更</li>
  <li><strong>単一リソース</strong>: インフラストラクチャとアプリケーション チームの役割を分離しない</li>
  <li><strong>TLS の制限</strong>: ネイティブ TLS バックエンドなし</li>
</ul>
<p>Ingress-NGINX: <strong>メンテナンス モードに入ります (2026 年 3 月)</strong>。新しい機能は追加されません。</p><h2>2.ゲートウェイ API v1.4 GA — 2025 年 10 月</h2>
<p>Gateway API は Kubernetes SIG-Network プロジェクトであり、</p> でトラフィック管理を標準化します。
<ul>
  <li><strong>役割指向設計</strong>: インフラストラクチャプロバイダー、クラスターオペレーター、アプリケーション開発者の役割を明確に分離</li>
  <li><strong>表現</strong>: トラフィック分割、ヘッダー マッチング、URL 書き換えは第一級国民</li>
  <li><strong>移植可能</strong>: 同じマニフェストはどのゲートウェイ API 実装でも機能します</li>
  <li><strong>拡張可能</strong>: TLSRoute、GRPCRoute、TCPRoute、カスタム拡張</li>
</ul>

<h2>3.リソース階層</h2>
___コードブロック_0___

<h3>3.1 ゲートウェイクラス</h3>
___コードブロック_1___

<h3>3.2 ゲートウェイ</h3>
___コードブロック_2___

<h3>3.3 HTTPRoute — パスベースのルーティング</h3>
___コードブロック_3___

<h2>4.トラフィック分割 — カナリア デプロイメント</h2>
___コードブロック_4___

<h2>5.ヘッダー マッチングと URL 書き換え__HTMLTAG_130___
___コードブロック_5___

<h2>6. BackendTLSPolicy — TLS からバックエンド (v1.4)</h2>
___コードブロック_6___

<h2>7. ReferenceGrant によるクロスネームスペース ルーティング</h2>
___コードブロック_7___

<h2>8。 GRPCRoute</h2>
___コードブロック_8___

<h2>9.実装ゲートウェイ API</h2>
<ul>
  <li><strong>Cilium Gateway API</strong>: eBPF ベース、Cilium CNI とのネイティブ統合、最も効果的</li>
  <li><strong>Envoy ゲートウェイ</strong>: Envoy ベースの機能豊富な CNCF プロジェクト</li>
  <li><strong>nginx-gateway-fabric</strong>: nginx ベース、安定版</li>
  <li><strong>Istio</strong>: サービス メッシュ Istio</li> との統合
  <li><strong>_Traefik</strong>: v3.0 から Gateway API v1 をサポート</li>
</ul>

<h2>10. Ingress からゲートウェイ API</h2> への移行
___コードブロック_9___

<h2>概要</h2>
<ul>
  <li>Gateway API v1.4 GA (2025 年 10 月) = Ingress に代わる新しい標準</li>
  <li>ロール指向: GatewayClass (インフラ) → Gateway (クラスター操作) → HTTPRoute (アプリ開発)</li>
  <li>トラフィック分割、ヘッダー マッチング、URL 書き換えは最高級</li>
  <li>BackendTLSPolicy: バックエンドへの TLS (v1.4)</li>
  <li>Cilium Gateway API: eBPF ベース、Cilium CNI で推奨</li>
  <li>Ingress-NGINX: メンテナンス モード 2026 年 3 月 — ゲートウェイ API に移行する必要があります</li>
</ul>