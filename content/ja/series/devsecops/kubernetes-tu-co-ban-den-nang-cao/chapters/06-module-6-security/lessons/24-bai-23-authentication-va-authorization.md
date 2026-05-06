---
id: 019c9618-0401-7000-8000-c1147ba22e14
title: 'レッスン 23: 認証と認可'
slug: bai-23-authentication-va-authorization
description: Kubernetes の認証、ServiceAccount、RBAC。 Pod Security Standard (PSS) および Pod Security Admission (PSA) は、PodSecurityPolicy を置き換えます (K8s 1.25 は削除されました)。アドミッションコントローラー。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 23
section_title: 'モジュール 6: セキュリティ'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3461" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3461)"/>

  <!-- Decorations -->
  <g>
    <circle cx="955" cy="155" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="810" cy="110" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="665" cy="65" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1020" cy="280" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="235" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="165" x2="1100" y2="245" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="195" x2="1050" y2="265" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="999.6410161513776,145 999.6410161513776,185 965,205 930.3589838486224,185 930.3589838486224,145 965,125" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — レッスン 23</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 23: 認証と承認</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 6: セキュリティ</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>🎯 レッスンの目的</h2><p>Kubernetes での認証と認可、認可に RBAC を使用する方法、PodSecurityPolicy に代わるポッド セキュリティ標準 (K8s 1.25 は削除)、および重要なアドミッション コントローラーを理解します。</p>

<h2>1. Kubernetes での認証</h2>
<p>Kubernetes にはユーザー管理が組み込まれていません。代わりに、kube-apiserver は多くの認証方法をサポートしています:</p>
<ul>
  <li><strong>X.509 クライアント証明書</strong>: kubeconfig は、最も一般的なクライアント証明書を使用します</li>
  <li><strong>ベアラー トークン</strong>: ServiceAccount トークン、OIDC トークン</li>
  <li><strong>OIDC (OpenID Connect)</strong>: Dex、Keycloak、Auth0、Google、Azure AD</li> と統合
  <li><strong>Webhook</strong>: 認証を外部サービスに委任</li>
</ul>

<h2>2.ユーザーとサービスアカウント</h2>
<ul>
  <li><strong>ユーザー</strong>: 人間のアイデンティティ — Kubernetes にリソースはなく、外部で管理 (証明書、OIDC)</li>
  <li><strong>ServiceAccounts</strong>: マシン ID — Kubernetes リソース、ポッドに使用</li>
</ul>
___コードブロック_0___
___コードブロック_1___
<p><strong>プロジェクト化されたサービス アカウント トークン</strong> (K8s 1.22 以降): 短期トークン、自動ローテーション、限定された対象ユーザー — 古い長期有効トークンよりもはるかに安全です。</p>

<h2>3. RBAC — ロールベースのアクセス制御</h2>

<h3>3.1 ロールとクラスターロール</h3>
___コードブロック_2___

<h3>3.2 RoleBinding と ClusterRoleBinding__HTMLTAG_112___
___コードブロック_3___
___コードブロック_4___

<h3>3.3 最小特権の原則</h3>
___コードブロック_5___<h2>4.ポッド セキュリティ標準 (PSS) — PodSecurityPolicy</h2> を置き換えます
<p><strong>PodSecurityPolicy (PSP) は K8s 1.25 で完全に削除されました。</strong> ポッド セキュリティ標準に置き換えられました:</p>

<h3>4.1 3 レベルのセキュリティ</h3>
<ul>
  <li><strong>特権</strong>: 制限なし。システム コンポーネント、クラスタ全体のコントローラにのみ使用</li>
  <li><strong>_ベースライン</strong>: 一般的なエスカレーションを防止します。ほとんどの用途に適しています。ブロック: 特権コンテナ、hostPath、hostNetwork、hostPID</li>
  <li><strong>制限付き</strong>: セキュリティが強化されています。要件: 非 root ユーザー、非 root グループ、すべての機能を削除、seccompProfile RuntimeDefault/Localhost、no hostPath</li>
</ul>

<h3>4.2 ポッド セキュリティ アドミッション (PSA)</h3>
___コードブロック_6___
___コードブロック_7___

<h2>5.アドミッションコントローラー_</h2>
<p>_アドミッション コントローラーは、認証/認可後の API サーバーへのリクエストをインターセプトします。 2 種類あります:</p>
<ul>
  <li><strong>変更中</strong>: オブジェクトの変更 (例: サイドカーの挿入、デフォルト値の設定)</li>
  <li><strong>検証中</strong>: 承認/拒否のみ (例: PSA、ResourceQuota)</li>
</ul>
___コードブロック_8___

<h2>6.入場 Webhook</h2>
___コードブロック_9___

<h2>概要</h2>
<ul>
  <li>_Kubernetes にはユーザー管理がありません。X.509 証明書、OIDC</li> を使用します。
  <li>ServiceAccounts: マシン ID、投影されたトークン (有効期間が短い)</li>
  <li>RBAC: ロール/ClusterRole + RoleBinding/ClusterRoleBinding</li>
  <li>最小権限: 必要最小限の権限のみを付与</li>
  <li>PSP は K8s 1.25 を削除 → ポッド セキュリティ標準 (PSA) を使用</li>
  <li>PSA レベル: 特権、ベースライン (推奨デフォルト)、制限付き (運用)</li>
</ul>