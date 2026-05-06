---
id: 019e1a00-aa01-7001-c001-k8sha000603
title: 'レッスン 26: 実稼働用の ISIO ゲートウェイと Ingress'
slug: bai-26-istio-gateway-va-ingress-cho-production
description: 外部アクセス、cert-manager による TLS 終端、マルチドメイン ホスティング、CORS、WebSocket サポート、および Kubernetes Gateway API 用に Istio Gateway を構成します。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 26
section_title: 'パート 6: Istio を使用したサービス メッシュと Ingress'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6953" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6953)"/>

  <!-- Decorations -->
  <g>
    <circle cx="626" cy="268" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="652" cy="174" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="678" cy="80" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="704" cy="246" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="730" cy="152" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="148" x2="1100" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="178" x2="1050" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1035.2390923627308,176.5 1035.2390923627308,219.5 998,241 960.7609076372692,219.5 960.7609076372692,176.5 998,155" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — レッスン 26</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 26:</tspan> の ISTIO ゲートウェイと受信
      <tspan x="60" dy="42">PRODUCTION_</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: サービス メッシュとサービス メッシュIstio</text> を使用した Ingress

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<ul>
<li>✅ 外部トラフィック用に Istio ゲートウェイを構成する__HTMLTAG_71___
<li>✅ cert-manager による TLS 終了 (Let's Encrypt)</li>
<li>✅ マルチドメイン ホスティング</li>
<li>✅ CORS、WebSocket、gRPC のサポート</li>
<li>✅ Kubernetes ゲートウェイ API (将来)</li>
</ul>

<hr>

<h2 id="phan-1-gateway">パート 1: ISTIO ゲートウェイ</h2>

___コードブロック_0___

<h3 id="11-basic-gateway">1.1。基本ゲートウェイ</h3>
___コードブロック_1___

<h3 id="12-virtualservice-gateway">1.2.ゲートウェイの仮想サービス</h3>
___コードブロック_2___

<hr>

<h2 id="phan-2-tls">パート 2: CERT-MANAGER を使用した TLS</h2>

<h3 id="21-cert-manager">2.1. cert-manager</h3> をインストールする
___コードブロック_3___

<h3 id="22-issuer">2.2. ClusterIssuer (Let's Encrypt)</h3>
___コードブロック_4___

<h3 id="23-certificate">2.3.ゲートウェイの証明書</h3>
___コードブロック_5___

___コードブロック_6___

<hr>

<h2 id="phan-3-websocket-grpc">パート 3: WEBSOCKET と gRPC</h2>

<h3 id="31-websocket">3.1. WebSocket のサポート</h3>
___コードブロック_7___

<h3 id="32-grpc">3.2. gRPC サポート</h3>
___コードブロック_8___

<hr>

<h2 id="phan-4-gateway-api">パート 4: KUBERNETES ゲートウェイ API (将来)</h2>

___コードブロック_9___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>ゲートウェイ</strong>: 外部トラフィックのエントリ ポイント、TLS 終端</li>
<li><strong>VirtualService</strong>: トラフィックをゲートウェイからバックエンド サービスにルーティング</li>
<li><strong>cert-manager</strong>: TLS 証明書の自動プロビジョニングと更新</li>
<li><strong>マルチドメイン</strong>: 単一のゲートウェイ、複数の仮想サービス</li>
<li><strong>ゲートウェイ API</strong>: Ingress と Istio ゲートウェイの両方を置き換える将来の標準</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">演習 1: プロダクション ゲートウェイ</h3>
<ul>
<li>TLS を使用したゲートウェイの構成 (cert-manager)</li>
<li>3 つのドメインを異なるサービスにルーティング__HTMLTAG_141___
<li>HTTPS リダイレクトをテスト</li>
</ul>

<h3 id="bt2">演習 2: CORS とセキュリティ ヘッダー__HTMLTAG_146___
<ul>
<li>API の CORS ポリシーを構成</li>
<li>セキュリティ ヘッダーの追加 (HSTS、CSP、X-Frame-Options)</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_157___レッスン 27: Istio セキュリティ — AuthorizationPolicy と RequestAuthentication</strong> では、セキュリティ ポリシー、JWT 検証、およびネットワーク セグメンテーションを構成します。</p>