---
id: 019e1a00-aa01-7001-c001-k8sha000703
title: 'レッスン 30: HASHICORP VAULT を使用した秘密管理'
slug: bai-30-secrets-management-voi-hashicorp-vault
description: Kubernetes、KV シークレット エンジン、Kubernetes 認証、動的データベース認証情報、外部シークレット オペレーター、およびシークレット ローテーションに HashiCorp Vault HA をデプロイします。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 30
section_title: 'パート 7: ArgoCD、Helm、Vault を使用した GitOps'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7859" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7859)"/>

  <!-- Decorations -->
  <g>
    <circle cx="854" cy="152" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="608" cy="106" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="862" cy="60" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="616" cy="274" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="870" cy="228" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="92" x2="1100" y2="172" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="122" x2="1050" y2="192" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1015.3826859021799,178.5 1015.3826859021799,205.5 992,219 968.6173140978201,205.5 968.6173140978201,178.5 992,165" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — レッスン 30</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 30: HASHICORP による秘密管理</tspan>
      <tspan x="60" dy="42">VAULT</tspan>
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
<li>✅ Kubernetes に Vault HA クラスターをデプロイ__HTMLTAG_71___
<li>✅ KV Secrets エンジン v2</li>
<li>✅ Kubernetes 認証方法</li>
<li>✅ 動的データベース認証情報</li>
<li>✅ 外部シークレット オペレーター (ESO) の統合</li>
<li>✅ 秘密のローテーション戦略__HTMLTAG_81___
</ul>

<hr>

<h2 id="phan-1-vault-architecture">パート 1: VAULT アーキテクチャ</h2>

___コードブロック_0___

<hr>

<h2 id="phan-2-install">パート 2: VAULT HA のインストール</h2>

___コードブロック_1___

___コードブロック_2___

___コードブロック_3___

<hr>

<h2 id="phan-3-kv-secrets">パート 3: KV シークレット エンジン</h2>

___コードブロック_4___

<hr>

<h2 id="phan-4-k8s-auth">パート 4: KUBERNETES 認証方法</h2>

___コードブロック_5___

<hr>

<h2 id="phan-5-eso">パート 5: 外部シークレット オペレーター (ESO)</h2>

___コードブロック_6___

___コードブロック_7___

___コードブロック_8___

<hr>

<h2 id="phan-6-dynamic-creds">パート 6: 動的データベース認証情報</h2>

___コードブロック_9___

<hr>

<h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>Vault HA</strong>: 3 ノード Raft クラスター、自動フェイルオーバー</li>
<li><strong>KV v2</strong>: バージョン管理されたシークレット、ロールバック機能</li>
<li><strong>K8s 認証</strong>: ServiceAccount ベースのサービスごとのポリシー</li>
<li><strong>ESO</strong>: Vault → K8s Secret 同期、GitOps フレンドリー</li>
<li><strong>動的認証情報</strong>: 自動生成および自動取り消しの DB パスワード</li>
<li><strong>シークレットを Git にコミットしない</strong>: Vault + ESO を使用</li>
</ol>

<hr><h2 id="bai-tap">🎯 演習__HTMLTAG_132___

<h3 id="bt1">演習 1: Vault + ESO のセットアップ__HTMLTAG_134___
<ul>
<li>Vault HA の展開、初期化、封印解除__HTMLTAG_137___
<li>3 つのマイクロサービスのストア シークレット</li>
<li>ESO をデプロイし、シークレットを K8s に同期</li>
</ul>

<h3 id="bt2">演習 2: 動的 DB 認証情報__HTMLTAG_144___
<ul>
<li>データベース シークレット エンジンを有効にする</li>
<li>動的 PostgreSQL ロールを構成する</li>
<li>アプリは動的な認証情報を使用しています。ローテーションを確認してください__HTMLTAG_151___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_157___レッスン 31: CI/CD パイプライン — GitOps を使用した構築、テスト、デプロイ</strong> では、ArgoCD を統合する完全な CI/CD パイプラインを構築します。</p>