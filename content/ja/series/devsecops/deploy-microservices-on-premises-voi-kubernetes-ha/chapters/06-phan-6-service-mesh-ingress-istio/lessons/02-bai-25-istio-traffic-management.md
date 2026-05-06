---
id: 019e1a00-aa01-7001-c001-k8sha000602
title: 'レッスン 25: ISIO トラフィック管理 — 仮想サービスと宛先ルール'
slug: bai-25-istio-traffic-management-virtualservice-destinationrule
description: VirtualService、DestinationRule、カナリア展開、A/B テスト、サーキット ブレーク、再試行、タイムアウト、およびフォールト インジェクションを使用してトラフィック ルーティングを構成します。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 25
section_title: 'パート 6: Istio を使用したサービス メッシュと Ingress'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-807" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-807)"/>

  <!-- Decorations -->
  <g>
    <circle cx="795" cy="175" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="990" cy="50" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="685" cy="185" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="880" cy="60" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1075" cy="195" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="85" x2="1100" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="115" x2="1050" y2="185" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1069.6410161513775,215 1069.6410161513775,255 1035,275 1000.3589838486224,255 1000.3589838486224,215 1035,195" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 25</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 25: ISTIO トラフィック管理 —</tspan>
      <tspan x="60" dy="42">仮想サービスと宛先ルール</tspan>
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
<li>✅ VirtualService: ルーティング ルール、ヘッダーベースのルーティング__HTMLTAG_71___
<li>✅ DestinationRule: サブセット、負荷分散、接続プール</li>
<li>✅ トラフィック分割を使用したカナリア展開</li>
<li>✅ サーキット ブレークと異常値の検出</li>
<li>✅ 再試行、タイムアウト、フォールト挿入</li>
<li>✅ EnvoyFilter によるレート制限</li>
</ul>

<hr>

<h2 id="phan-1-virtualservice">パート 1: 仮想サービス</h2>

___コードブロック_0___

<h3 id="11-basic-routing">1.1.基本的なルーティング</h3>
___コードブロック_1___

<h3 id="12-canary">1.2。カナリア デプロイメント (トラフィック分割)</h3>
___コードブロック_2___

<h3 id="13-ab-testing">1.3。 A/B テスト (ヘッダーベース)</h3>
___コードブロック_3___

<hr>

<h2 id="phan-2-destinationrule">パート 2: DESTINATIONRULE</h2>

___コードブロック_4___

<hr>

<h2 id="phan-3-circuit-breaking">パート 3: サーキットブレーキング</h2>

___コードブロック_5___

___コードブロック_6___

<hr>

<h2 id="phan-4-fault-injection">パート 4: フォルト インジェクション (カオス テスト)</h2>

___コードブロック_7___

<hr>

<h2 id="phan-5-mirror">パート 5: トラフィック ミラーリング (シャドウ テスト)</h2>

___コードブロック_8___

<hr>

<h2 id="phan-6-rate-limiting">パート 6: レート制限</h2>

___コードブロック_9___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>VirtualService</strong>: ルーティング ルール - トラフィックの行き先</li>
<li><strong>DestinationRule</strong>: ポリシー — トラフィックの処理方法 (LB、サーキット ブレーカー)</li>
<li><strong>Canary</strong>: 重みに基づくトラフィック分割、段階的なロールアウト</li>
<li><strong>サーキットブレーカー</strong>: 外れ値検出により異常なポッドが排除</li>
<li><strong>フォールト挿入</strong>: 遅延とエラーを伴う回復力のテスト</li>
<li><strong>_トラフィック ミラーリング</strong>: 実際のトラフィックを使用して新しいバージョンをシャドウ テスト</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習__HTMLTAG_138___

<h3 id="bt1">_演習 1: カナリア デプロイ</h3>
<ul>
<li>サービスの v1 と v2 をデプロイ__HTMLTAG_143___
<li>90/10 のトラフィック分割を構成</li>
<li>Kiali でのエラー率の監視</li>
<li>徐々に 0/100 に移行</li>
</ul>

<h3 id="bt2">演習 2: サーキットブレーク__HTMLTAG_152___
<ul>
<li>外れ値検出の構成 (エラー 3 件 → 排出)</li>
<li>Fortio を使用してテストをロードする__HTMLTAG_157___
<li>Envoy 管理で削除/回復を確認</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_165___レッスン 26: 本番用の Istio ゲートウェイと Ingress</strong> では、外部アクセス、TLS 終端、およびマルチドメイン ホスティングを構成します。</p>