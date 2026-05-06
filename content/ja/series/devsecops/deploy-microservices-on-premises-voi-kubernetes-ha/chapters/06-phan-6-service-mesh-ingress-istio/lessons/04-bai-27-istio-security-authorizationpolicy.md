---
id: 019e1a00-aa01-7001-c001-k8sha000604
title: 'レッスン 27: ISIO セキュリティ — 承認ポリシーと要求認証'
slug: bai-27-istio-security-authorizationpolicy-va-requestauthentication
description: 'Istio セキュリティを構成します: アクセス制御のための AuthorizationPolicy、JWT 検証のための RequestAuthentication、ネットワーク セグメンテーション、およびゼロトラスト セキュリティ モデル。'
duration_minutes: 120
is_free: true
video_url: null
sort_order: 27
section_title: 'パート 6: Istio を使用したサービス メッシュと Ingress'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9488" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9488)"/>

  <!-- Decorations -->
  <g>
    <circle cx="742" cy="196" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="884" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1026" cy="220" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="668" cy="102" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="810" cy="244" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="216" x2="1100" y2="296" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="246" x2="1050" y2="316" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1042.8467875173176,200.5 1042.8467875173176,231.5 1016,247 989.1532124826824,231.5 989.1532124826824,200.5 1016,185" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — レッスン 27</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 27: ISTIO セキュリティ —</tspan>
      <tspan x="60" dy="42">認証ポリシーと</tspan>
      <tspan x="60" dy="42">認証要求</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 6: サービス メッシュとサービス メッシュIstio</text> を使用した Ingress

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_70___
<ul>
<li>✅ 承認ポリシー: 許可、拒否、カスタム ルール</li>
<li>✅ RequestAuthentication: JWT トークンの検証</li>
<li>✅ 名前空間間のネットワークのセグメント化__HTMLTAG_77___
<li>✅ ゼロトラスト セキュリティ モデル</li>
<li>✅ セキュリティ イベントの監査ログ__HTMLTAG_81___
</ul>

<hr>

<h2 id="phan-1-authorization">パート 1: 承認ポリシー</h2>

___コードブロック_0___

<h3 id="11-deny-all">1.1.デフォルトのすべて拒否 (ゼロトラスト)</h3>
___コードブロック_1___

<h3 id="12-allow-specific">1.2。特定のサービスを許可__HTMLTAG_89___
___コードブロック_2___

<h3 id="13-deny-specific">1.3。特定のパターンを拒否</h3>
___コードブロック_3___

<hr>

<h2 id="phan-2-jwt">パート 2: JWT 認証</h2>

<h3 id="21-request-auth">2.1.認証リクエスト</h3>
___コードブロック_4___

<h3 id="22-role-based">2.2.ロールベースのアクセス (JWT クレーム)</h3>
___コードブロック_5___

<hr>

<h2 id="phan-3-namespace-segmentation">パート 3: 名前空間のセグメント__HTMLTAG_101___

___コードブロック_6___

<hr>

<h2 id="phan-4-audit">パート 4: セキュリティ監査ログ</h2>

___コードブロック_7___

___コードブロック_8___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>ゼロトラスト</strong>: すべて拒否から開始し、必要なパスを明示的に許可</li>
<li><strong>AuthorizationPolicy</strong>: サービス間のアクセス制御 (誰が誰を呼び出せるか)</li>
<li><strong>RequestAuthentication</strong>: イングレス時の JWT 検証 (エンドユーザー認証)</li>
<li><strong>mTLS + AuthZ</strong>: 組み合わせ = 強力な ID ベースのセキュリティ</li>
<li><strong>名前空間のセグメンテーション</strong>: 侵害されたサービスの爆発範囲を分離</li>
<li><strong>_監査</strong>: 拒否されたリクエスト、セキュリティ監視のための mTLS エラーをログに記録</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2>

<h3 id="bt1">_演習 1: ゼロトラスト ラボ__HTMLTAG_138___
<ul>
<li>デフォルトの名前空間にすべて拒否を適用</li>
<li>特定のサービス パスに対する ALLOW ポリシーの作成</li>
<li>テスト: 不正なサービス呼び出し → RBAC が拒否</li>
</ul>

<h3 id="bt2">_演習 2: JWT 認証ラボ__HTMLTAG_148___
<ul>
<li>Keycloak を使用した RequestAuthentication の構成</li>
<li>ロールベースの認可ポリシーの作成</li>
<li>管理者アクセスと閲覧者アクセスのテスト</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_161___レッスン 28: ArgoCD を使用した GitOps — アーキテクチャとインストール</strong> では、継続的デプロイのための GitOps ワークフローに進みます。</p>