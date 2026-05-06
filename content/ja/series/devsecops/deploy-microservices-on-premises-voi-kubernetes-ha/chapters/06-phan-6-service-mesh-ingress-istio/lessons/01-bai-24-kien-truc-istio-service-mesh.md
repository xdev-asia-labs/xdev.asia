---
id: 019e1a00-aa01-7001-c001-k8sha000601
title: 'レッスン 24: ISIO サービス メッシュ アーキテクチャ'
slug: bai-24-kien-truc-istio-service-mesh
description: 'Istio サービス メッシュ アーキテクチャ: データ プレーン (Envoy サイドカー)、コントロール プレーン (istiod)、トラフィック管理、セキュリティ (mTLS)、可観測性を理解し、Linkerd と比較します。'
duration_minutes: 150
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai24-istio-service-mesh.png
sort_order: 24
section_title: 'パート 6: Istio を使用したサービス メッシュと Ingress'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6058" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6058)"/>

  <!-- Decorations -->
  <g>
    <circle cx="857" cy="281" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="614" cy="278" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="871" cy="275" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="628" cy="272" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="269" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="111" x2="1100" y2="191" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="141" x2="1050" y2="211" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="983.5166604983954,148 983.5166604983954,174 961,187 938.4833395016046,174 938.4833395016046,148 961,135" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — レッスン 24</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 24: ISTIO サービス メッシュ アーキテクチャ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: サービス メッシュとサービス メッシュIstio</text> を使用した Ingress

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_66___
<ul>
<li>✅ サービス メッシュとは何か、なぜそれが必要なのかを理解する</li>
<li>✅ Istio アーキテクチャ: コントロール プレーン + データ プレーン</li>
<li>✅ Envoy サイドカー プロキシ — 仕組み</li>
<li>✅ コア機能: トラフィック管理、セキュリティ、可観測性</li>
<li>✅ Istio、Linkerd、Cilium Service Mesh の比較</li>
<li>✅ K8s クラスターに Istio をインストール</li>
</ul>

<hr>

<h2 id="phan-1-service-mesh">パート 1: サービス メッシュとは何ですか?</h2>

___コードブロック_0___

<h3 id="11-why-mesh">1.1。 Service Mesh が必要になるのはどのような場合ですか?</h3>
<ul>
<li>✅ > 10 個のマイクロサービスが通信</li>
<li>✅ mTLS (ゼロトラスト ネットワーク) が必要</li>
<li>✅ 複雑なトラフィック ルーティング (カナリア、A/B)</li>
<li>✅ 分散トレースと可観測性</li>
<li>✅ レート制限、サーキット ブレークの一貫性</li>
<li>❌ モノリスまたは < 5 services</li> にはオーバーヘッドは不要です
</ul>

<hr>

<h2 id="phan-2-kien-truc-istio">パート 2: ISTIO アーキテクチャ</h2>

___コードブロック_1___<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>コンポーネント</th><th>役割</th><th>詳細</th></tr>
</thead>
<tbody>
<tr><td>istiod</td><td>コントロール プレーン</td><td>単一バイナリ: パイロット + シタデル + ギャレー_</td></tr>
<tr><td>Envoy</td><td>サイドカー プロキシ</td><td>L4/L7 プロキシ、すべてのポッドに挿入_</td></tr>
<tr><td>パイロット</td><td>トラフィック管理</td><td>ルーティングルール→Envoy xDS設定に変換</td></tr>
<tr><td>シタデル_</td><td>セキュリティ</td><td>認証局、mTLS証明書ローテーション_</td></tr>
<tr><td>ギャレー_</td><td>構成</td><td>_Istio構成の検証と配布</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>機能</th><th>Istio</th><th>Linkerd</th><th>Cilium SM</th></tr>
</thead>
<tbody>
<tr><td>プロキシ</td><td>Envoy (C++)</td><td>linkerd2-proxy (Rust)</td><td>eBPF (カーネル)</td></tr>
<tr><td>リソース使用量</td><td>中高</td><td>低</td><td>最低</td></tr>
<tr><td>機能_</td><td>最も完成度</td><td>重要な機能_</td><td>成長中_</td></tr>
<tr><td>学習曲線</td><td>急勾配</td><td>_中程度</td><td>低中程度</td></tr>
<tr><td>mTLS</td><td>はい (自動)</td><td>はい (自動)</td><td>はい (WireGuard)</td></tr>
<tr><td>トラフィック管理</td><td>上級</td><td>基本</td><td>基本</td></tr>
<tr><td>マルチクラスタ</td><td>はい</td><td>はい</td><td>はい</td></tr>
<tr><td>_WASM 拡張機能</td><td>はい</td><td>いいえ</td><td>いいえ</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-3-install-istio">パート 3: ISTIO セットアップ</h2>

<h3 id="31-istioctl">3.1. istioctl</h3> をインストールする
___コードブロック_2___<h3 id="32-install-profile">3.2. Istio のインストール (運用プロファイル)</h3>
___コードブロック_3___

___コードブロック_4___

<hr>

<h2 id="phan-4-mtls">パート 4: mTLS (相互 TLS)</h2>

___コードブロック_5___

___コードブロック_6___

<hr>

<h2 id="phan-5-sidecar-injection">パート 5: サイドカー インジェクション</h2>

___コードブロック_7___

<hr>

<h2 id="phan-6-addons">パート 6: OBSERVILITY アドオン</h2>

___コードブロック_8___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>サービス メッシュ</strong>: サービス間通信のインフラストラクチャ層</li>
<li><strong>Istio</strong>: 最も機能豊富なメッシュ、Envoy サイドカー プロキシ</li>
<li><strong>istiod</strong>: 単一のコントロール プレーン バイナリ (パイロット + シタデル + ギャレー)</li>
<li><strong>mTLS STRICT</strong>: ゼロトラスト、すべてのトラフィックは自動的に暗号化</li>
<li><strong>サイドカー挿入</strong>: ラベル名前空間、Envoy の自動挿入</li>
<li><strong>Kiali</strong>: メッシュを理解するために不可欠なビジュアル サービス トポロジ</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: Istio をインストールする__HTMLTAG_306___
<ul>
<li>運用プロファイルを使用して Istio をインストール</li>
<li>デフォルトの名前空間でサイドカー インジェクションを有効にする__HTMLTAG_311___
<li>サンプル Bookinfo アプリをデプロイ</li>
<li>サービス間の mTLS を検証</li>
</ul>

<h3 id="bt2">演習 2: キアリとイェーガー</h3>
<ul>
<li>Kiali のインストール、サービス グラフの探索</li>
<li>トラフィックを生成し、Jaeger でトレースを表示__HTMLTAG_323___
<li>リクエスト チェーン内で最も遅いサービスを特定</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_331___レッスン 25: Istio トラフィック管理 — VirtualService、DestinationRule</strong> では、トラフィック ルーティング、カナリア デプロイメント、サーキット ブレークを構成します。</p>