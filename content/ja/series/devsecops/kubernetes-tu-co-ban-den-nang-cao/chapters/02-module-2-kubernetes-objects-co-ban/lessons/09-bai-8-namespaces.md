---
id: 019c9618-0007-7000-8000-c1147ba22e10
title: 'レッスン 8: 名前空間'
slug: bai-8-namespaces
description: Kubernetes の名前空間を使用してリソースを整理および分離します。名前空間ごとのリソース クォータ、LimitRanges、ネットワーク ポリシー。マルチテナンシーとチーム分離のベスト プラクティス。
duration_minutes: 60
is_free: false
video_url: null
sort_order: 8
section_title: 'モジュール 2: 基本的な Kubernetes オブジェクト'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-959" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-959)"/>

  <!-- Decorations -->
  <g>
    <circle cx="704" cy="242" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="808" cy="226" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="912" cy="210" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="1016" cy="194" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="620" cy="178" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="242" x2="1100" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="272" x2="1050" y2="342" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1024.0429399400243,173.5 1024.0429399400243,210.5 992,229 959.9570600599758,210.5 959.9570600599758,173.5 992,155" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — レッスン 8</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 8: ネームスペース</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 2: 基本的な Kubernetes オブジェクト</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia_</text>
</svg>

<h2>🎯 レッスンの目的</h2><p>Kubernetes クラスターのリソース分割メカニズムとしての名前空間を理解します。名前空間ごとにリソースを制御するためにリソース クォータと LimitRanges を設定する方法。マルチテナントのベスト プラクティス</p>

<h2>1.ネームスペースとは何ですか?</h2>
<p>Namespace は、Kubernetes リソースの <strong>name スコープ (スコープ)</strong> を提供します。 <code>nginx</code> という名前の 2 つのデプロイメントは、競合することなく 2 つの異なる名前空間に存在できます。</p>
<p>許可される名前空間:</p>
<ul>
  <li><strong>分離</strong>: 個別の環境 (開発、ステージング、本番) またはチーム (チーム A、チーム B)</li>
  <li><strong>リソース割り当て</strong>: 名前空間ごとのリソース制限</li>
  <li><strong>RBAC スコープ</strong>: 名前空間ごとの権限</li>
  <li><strong>ネットワーク ポリシー</strong>: ネームスペース間のトラフィックの制御</li>
</ul>

<h2>2.デフォルトの名前空間</h2>
<ul>
  <li><strong>default</strong>: 指定されていない場合のデフォルトの名前空間</li>
  <li><strong>kube-system</strong>: Kubernetes コントロール プレーンのコンポーネント (CoreDNS、kube-proxy、metrics-server)</li>
  <li><strong>kube-public</strong>: 認証されていないユーザーも含めて、すべてのユーザーが読み取り可能です。クラスター情報</li> が含まれています
  <li><strong>kube-node-lease</strong>: ノード ハートビート リース — ノード障害検出のパフォーマンスを向上</li>
</ul>
___コードブロック_0___

<h2>3.ネームスペースの作成と管理</h2>
___コードブロック_1___

<h2>4.名前空間の操作</h2>
___コードブロック_2___<h2>5.リソース割り当て</h2>
<p>ResourceQuota は、名前空間で許可されるリソースの合計を制限します。</p>
___コードブロック_3___
___コードブロック_4___

<h2>6.制限範囲</h2>
<p>LimitRange は、名前空間内のコンテナごとのデフォルトのリクエスト/制限と最小/最大を設定します。コンテナーがリソースを宣言していない場合、LimitRange は自動的にデフォルトを適用します。</p>
___コードブロック_5___

<h2>7.名前空間ごとの RBAC</h2>
___コードブロック_6___

<h2>8.名前空間を越えたコミュニケーション</h2>
___コードブロック_7___

<h2>9.名前空間のスコープとクラスターのスコープ</h2>
<p>すべてのリソースに名前空間があるわけではありません:</p>
<ul>
  <li><strong>名前空間</strong>: ポッド、デプロイメント、サービス、ConfigMap、シークレット、PVC、ロール、RoleBindings</li>
  <li><strong>クラスタースコープ</strong>: ノード、Persistent Volume、ClusterRole、ClusterRoleBinding、Namespace、StorageClasses</li>
</ul>
___コードブロック_8___

<h2>10.ベスト プラクティス マルチテナント</h2>
<ul>
  <li><strong>チームおよび環境ごとの名前空間</strong>: <code>team-a-prod</code>、__HTMLTAG_155___team-a-staging__HTMLTAG_156___、 <code>チーム-B-製品</code></li>
  <li><strong>_ResourceQuota を常に設定</strong>: 1 つのチームがすべてのクラスター リソースを占有することを防ぎます</li>
  <li><strong>Use LimitRange</strong>: コンテナに常にリソース制限があることを確認</li>
  <li><strong>一貫性ラベル</strong>: <code>チーム</code>、__HTMLTAG_173___環境</code>、__HTMLTAG_175___アプリ</code></li>
  <li><strong>_階層型名前空間コントローラー (HNC)</strong>: 名前空間をツリーに編成し、親からポリシーを継承</li>
</ul>
___コードブロック_9___

<h2>概要</h2>
<ul>
  <li>Namespace = 名前のスコープとリソースの分離</li>
  <li>4 つのデフォルトの名前空間:default、kube-system、kube-public、kube-node-lease</li>
  <li>ResourceQuota: 名前空間ごとの合計リソースを制限__HTMLTAG_191___
  <li>LimitRange: コンテナごとのデフォルトと最小/最大__HTMLTAG_193___
  <li>_ベスト プラクティス: 環境ごとのチームごとの名前空間 + ResourceQuota + LimitRange</li>
</ul>