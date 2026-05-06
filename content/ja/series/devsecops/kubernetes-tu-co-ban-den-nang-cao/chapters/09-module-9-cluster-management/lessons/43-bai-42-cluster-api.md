---
id: 019c9618-060a-7000-8000-c1147ba22e16
title: 'レッスン 42: クラスター API とコードとしてのインフラストラクチャー'
slug: bai-42-cluster-api-va-infrastructure-as-code
description: 'クラスター API (CAPI) v1.9 以降: Kubernetes クラスターを Kubernetes オブジェクトとして管理します。マシン、MachineSet、MachineDeployment、ClusterClass。クロスプレーンの比較。 Terraform/Pulumi を使用したコードとしてのインフラストラクチャ。'
duration_minutes: 75
is_free: false
video_url: null
sort_order: 42
section_title: 'モジュール 9: クラスター管理'
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: 'Kubernetes: 基本から高度まで'
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: ja
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4724" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4724)"/>

  <!-- Decorations -->
  <g>
    <circle cx="706" cy="288" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="812" cy="114" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="918" cy="200" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1024" cy="286" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="112" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="188" x2="1100" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="218" x2="1050" y2="288" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.2390923627308,116.5 975.2390923627308,159.5 938,181 900.7609076372692,159.5 900.7609076372692,116.50000000000001 938,95" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — レッスン 42</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 42: クラスタ API とインフラストラクチャ AS</tspan>
      <tspan x="60" dy="42">CODE</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">モジュール 9: クラスター管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 レッスンの目的_</h2><p>クラスター API を理解する — K8s オブジェクトなどの K8s クラスターを管理する方法。 ClusterClass、マシン管理について学び、他の IaC アプローチ (Terraform、Crossplane) と比較します。</p>

<h2>1.クラスター API とは何ですか?</h2>
<p>Cluster API (CAPI) は、Kubernetes API を使用して Kubernetes クラスターのライフサイクルを管理できる Kubernetes プロジェクトです — <strong>「Kubernetes による Kubernetes の作成」</strong>.</p>
<p><strong>主な概念__HTMLTAG_79___:</p>
<ul>
  <li><strong>管理クラスター</strong>: CAPI コントローラーを実行するクラスター、ワークロード クラスターを管理</li>
  <li><strong>ワークロード クラスター</strong>: CAPI</li> によって作成および管理されるクラスター
  <li><strong>インフラストラクチャプロバイダ</strong>: AWS (CAPA)、GCP (CAPG)、Azure (CAPZ)、vSphere (CAPV)</li>
  <li><strong>ブートストラップ プロバイダ</strong>: kubeadm (KubeadmControlPlane)、RKE2</li>
</ul>

<h2>2. CAPI コア リソース</h2>
___コードブロック_0___
___コードブロック_1___

<h2>3. ClusterClass — クラスター用のテンプレート</h2>
<p>ClusterClass (CAPI v1.4+) を使用すると、標準テンプレートを定義して 1 つの仕様から複数のクラスターを作成できます:</p>
___コードブロック_2___
___コードブロック_3___

<h2>4. CAPI 設定</h2>
___コードブロック_4___

<h2>5.クラスターの作成と管理</h2>
___コードブロック_5___

<h2>6.クロスプレーン — コントロール プレーン フレームワーク</h2>
<p>Crossplane は CAPI の代替/補完手段です — Kubernetes CRD を使用してクラウド リソース (クラスターだけでなく) を管理します:</p>
___コードブロック_6___
___コードブロック_7___

<h2>7. IaC 比較 2026</h2>
___コードブロック_8___<h2>概要</h2>
<ul>
  <li>_クラスター API: K8s オブジェクトを使用して K8s クラスターのライフサイクルを管理</li>
  <li>ClusterClass: 複数の一貫したクラスターを作成するための標準テンプレート</li>
  <li>管理クラスタ + ワークロード クラスタ: 明確に分離</li>
  <li>_クロスプレーン: K8s CRD を使用してクラウド リソース (DB、ストレージ、ネットワーク) を管理</li>
  <li>CAPI + Crossplane + ArgoCD: 完全な GitOps プラットフォーム エンジニアリング スタック 2026</li>
</ul>