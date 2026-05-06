---
id: 019e1a00-aa01-7001-c001-k8sha000701
title: 'レッスン 28: ARGOCD を使用した GITOPS — アーキテクチャとインストール'
slug: bai-28-gitops-voi-argocd-kien-truc-va-cai-dat
description: GitOps の原則、ArgoCD アーキテクチャを理解し、ArgoCD HA をインストールし、Git リポジトリ、RBAC、SSO を構成し、ArgoCD と FluxCD を比較します。
duration_minutes: 150
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai28-gitops-argocd.png
sort_order: 28
section_title: 'パート 7: ArgoCD、Helm、Vault を使用した GitOps'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4740" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4740)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1073" cy="209" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="1046" cy="182" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1019" cy="155" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="992" cy="128" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="965" cy="101" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="79" x2="1100" y2="159" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="109" x2="1050" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1058.444863728671,212 1058.444863728671,246 1029,263 999.555136271329,246 999.555136271329,212 1029,195" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 28</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 28: ARGOCD を使用した GITOPS — アーキテクチャと</tspan>
      <tspan x="60" dy="42">セットアップ</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイ</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: ArgoCD を使用した GitOps、Helm、および保管庫</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 レッスンの目的__HTMLTAG_68___
<ul>
<li>✅ GitOps の原則とワークフローを理解する</li>
<li>✅ ArgoCD アーキテクチャ: コンポーネント、同期フロー</li>
<li>✅ Kubernetes に ArgoCD HA をインストール__HTMLTAG_75___
<li>✅ Git リポジトリと SSH キーを構成する</li>
<li>✅ RBAC と SSO の統合</li>
<li>✅ ArgoCD と FluxCD の比較</li>
</ul>

<hr>

<h2 id="phan-1-gitops">パート 1: GITOPS の原則</h2>

___コードブロック_0___

> **GitOps の基本原則:**
> 1. **宣言的**: Git で記述された望ましい状態
> 2. **バージョン付き**: Git 履歴 = デプロイメント履歴
> 3. **自動**: 変更は自動適用 (または承認)
> 4. **自己修復**: ドリフト検出 + 自動修正<!--kg-card-begin: html-->
<table>
<thead>
<tr><th>機能</th><th>ArgoCD</th><th>FluxCD</th></tr>
</thead>
<tbody>
<tr><td>アーキテクチャ</td><td>集中型 (UI + API)</td><td>分散型 (クラスターごと)</td></tr>
<tr><td>UI</td><td>リッチ Web UI</td><td>CLI のみ (+ Weave GitOps UI)</td></tr>
<tr><td>マルチクラスター</td><td>ネイティブ (単一ペイン)_</td><td>クラスターごとのエージェント_</td></tr>
<tr><td>Helm サポート</td><td>はい (テンプレートのレンダリング)</td><td>はい (HelmRelease CRD)</td></tr>
<tr><td>_カスタマイズ</td><td>はい</td><td>はい (ネイティブ)</td></tr>
<tr><td>RBAC</td><td>組み込み、プロジェクトごと</td><td>K8s RBAC_</td></tr>
<tr><td>SSO</td><td>OIDC、SAML、LDAP</td><td>K8s 認証経由_</td></tr>
<tr><td>最適な用途</td><td>集中プラットフォーム チーム_</td><td>分散チーム_</td></tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-architecture">パート 2: ARGOCD アーキテクチャ</h2>

___コードブロック_1___

<hr>

<h2 id="phan-3-install">パート 3: ARGOCD HA</h2> のインストール

___コードブロック_2___

<h3 id="31-values">3.1. ArgoCD 値 (実稼働)</h3>
___コードブロック_3___

___コードブロック_4___

<hr>

<h2 id="phan-4-app">パート 4: ARGOCD アプリケーションの作成</h2>

___コードブロック_5___

<h3 id="41-project">4.1. ArgoCD プロジェクト</h3>
___コードブロック_6___

<hr>

<h2 id="phan-5-applicationset">パート 5: アプリケーションセット (複数アプリの生成)</h2>

___コードブロック_7___

<hr>

<h2 id="phan-6-notifications">パート 6: 通知</h2>

___コードブロック_8___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>GitOps</strong>: Git はインフラストラクチャの信頼できる唯一の情報源</li>
<li><strong>ArgoCD</strong>: 宣言型 CD、自動同期、ドリフト検出、リッチ UI</li>
<li><strong>HA インストール</strong>: コントローラー、サーバー、リポジトリ サーバーの 2 つ以上のレプリカ</li>
<li><strong>プロジェクト</strong>: RBAC 境界、チームごとのリポジトリ/名前空間の制限</li>
<li><strong>ApplicationSet</strong>: テンプレートから数百のアプリを生成</li>
<li><strong>自己修復</strong>: kubectl の手動変更を自動で元に戻す</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習</h2><h3 id="bt1">演習 1: ArgoCD のセットアップ</h3>
<ul>
<li>ArgoCD HA のインストール</li>
<li>Git リポジトリを追加し、プロジェクトを作成</li>
<li>ArgoCD アプリケーション経由でサンプル アプリをデプロイ</li>
<li>展開を手動で編集 → 自己修復を確認</li>
</ul>

<h3 id="bt2">演習 2: アプリケーションセット</h3>
<ul>
<li>ディレクトリベースのアプリケーションセットの作成</li>
<li>新しいサービスの追加 → 自動検出と展開</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_241___レッスン 29: マイクロサービスの Helm チャート — テンプレート、値、依存関係</strong> では、マイクロサービス スタック全体で再利用可能な Helm チャートを構築します。</p>