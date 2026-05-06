---
id: 019e1a00-aa01-7001-c001-k8sha000702
title: 'レッスン 29: マイクロサービスの Helm チャート — テンプレート、値、依存関係'
slug: bai-29-helm-charts-cho-microservices
description: 'マイクロサービス用の再利用可能な Helm チャートを構築します: テンプレート関数、値管理、チャートの依存関係、ライブラリ チャート、Helmfile マルチ環境、ベスト プラクティス。'
duration_minutes: 150
is_free: true
video_url: null
sort_order: 29
section_title: 'パート 7: ArgoCD、Helm、Vault を使用した GitOps'
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: Kubernetes HA を使用してマイクロサービスをオンプレミスにデプロイする
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9620" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9620)"/>

  <!-- Decorations -->
  <g>
    <circle cx="873" cy="89" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="646" cy="282" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="919" cy="215" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="692" cy="148" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="965" cy="81" r="32" fill="#c084fc" opacity="0.1"/>
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
    <polygon points="958.444863728671,112 958.444863728671,146 929,163 899.555136271329,146 899.555136271329,112.00000000000001 929,95" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — レッスン 29</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 29: マイクロサービスの HELM チャート —</tspan>
      <tspan x="60" dy="42">テンプレート、値、依存関係</tspan>
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
<li>✅ Helm チャートの構造とテンプレート エンジン</li>
<li>✅ 再利用可能なマイクロサービス基本グラフの構築</li>
<li>✅ 値の管理: デフォルト、オーバーライド、環境</li>
<li>✅ グラフの依存関係とライブラリ グラフ</li>
<li>✅ 複数環境デプロイメント用の Helm ファイル</li>
<li>✅ ベスト プラクティス: lint、テスト、パッケージ化</li>
</ul>

<hr>

<h2 id="phan-1-structure">パート 1: HELM チャートの構造</h2>

___コードブロック_0___

<h3 id="11-chart-yaml">1.1. Chart.yaml</h3>
___コードブロック_1___

<hr>

<h2 id="phan-2-templates">パート 2: 詳細なテンプレート</h2>

<h3 id="21-helpers">2.1. _helpers.tpl</h3>
___コードブロック_2___

<h3 id="22-deployment">2.2.導入テンプレート</h3>
___コードブロック_3___

<h3 id="23-values">2.3.デフォルト値</h3>
___コードブロック_4___

<hr>

<h2 id="phan-3-multi-env">パート 3: 複数環境の管理</h2>

___コードブロック_5___

___コードブロック_6___

<hr>

<h2 id="phan-4-helmfile">パート 4: HELMFILE — マルチサービス展開</h2>

___コードブロック_7___

___コードブロック_8___

<hr>

<h2 id="phan-5-testing">パート 5: HELM テストと CI</h2>

___コードブロック_9___

___コードブロック_10___

<hr><h2 id="key-takeaways">💡 重要なポイント</h2>
<ol>
<li><strong>ベース チャート</strong>: すべてのマイクロサービスに対する 1 つの再利用可能なグラフ</li>
<li><strong>値の階層化</strong>: デフォルト→サービス→環境</li>
<li><strong>_Helmfile</strong>: マルチサービス、マルチ環境デプロイメント オーケストレーション</li>
<li><strong>テンプレート ヘルパー</strong>: DRY、一貫性のあるラベル/名前</li>
<li><strong>テスト</strong>: CI での lint + テンプレート + 単体テスト</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 演習__HTMLTAG_133___

<h3 id="bt1">演習 1: 基本グラフの作成</h3>
<ul>
<li>_マイクロサービス Helm チャートの作成__HTMLTAG_138___
<li>異なる値を持つ同じグラフを使用して 3 つのサービスをデプロイ__HTMLTAG_140___
<li>HPA、PDB テンプレートを追加__HTMLTAG_142___
</ul>

<h3 id="bt2">演習 2: Helmfile マルチ環境</h3>
<ul>
<li>ステージング環境と本番環境のセットアップ</li>
<li>helmfile sync を使用してすべてのサービスをデプロイ</li>
<li>helmfile diff で変更を確認</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 次の投稿</h2>
<p>__HTMLTAG_158___レッスン 30: HashiCorp Vault を使用したシークレット管理</strong> では、一元的なシークレット管理を構成します。</p>