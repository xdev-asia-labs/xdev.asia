---
id: 019c9618-060a-7000-8000-c1147ba22e16
title: 第 42 課：叢集 API 和基礎架構即程式碼
slug: bai-42-cluster-api-va-infrastructure-as-code
description: Cluster API (CAPI) v1.9+：將 Kubernetes 叢集作為 Kubernetes 物件進行管理。機器、機器集、機器部署、叢集類別。跨平面比較。使用 Terraform/Pulumi 進行基礎設施即程式碼。
duration_minutes: 75
is_free: false
video_url: null
sort_order: 42
section_title: 模組 9：叢集管理
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — 第 42 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 42 課：叢集 API 與基礎架構為</tspan>
      <tspan x="60" dy="42">代碼</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 9：叢集管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標____HTMLTAG_68__HTMLTAG_69___了解叢集 API — 如何像 K8s 物件一樣管理 K8s 叢集。了解 ClusterClass、機器管理，並與其他 IaC 方法（Terraform、Crossplane）進行比較。 </p>

<h2>1。什麼是叢集 API？ </h2>
<p>Cluster API (CAPI) 是一個 Kubernetes 項目，允許使用 Kubernetes API 管理 Kubernetes 叢集的生命週期 — <strong>「Kubernetes 建立 Kubernetes」</strong>.</p>
___HTMLTAG_77__HTMLTAG_78___主要概念__HTMLTAG_79___：</p>
<ul>
  ___HTMLTAG_82__HTMLTAG_83___管理叢集</strong>：執行 CAPI 控制器的叢集，管理工作負載叢集</li>
  ___HTMLTAG_86__HTMLTAG_87___工作負載叢集</strong>：由CAPI建立和管理的叢集</li>
  ___HTMLTAG_90__HTMLTAG_91___基礎設施供應商</strong>：AWS (CAPA)、GCP (CAPG)、Azure (CAPZ)、vSphere (CAPV)</li>
  ___HTMLTAG_94__HTMLTAG_95___引導程式提供者</strong>：kubeadm (KubeadmControlPlane)、RKE2</li>
</ul>

<h2>2。 CAPI 核心資源</h2>
___程式碼區塊_0___
___程式碼區塊_1___

<h2>3。 ClusterClass — 叢集範本</h2>
<p>ClusterClass (CAPI v1.4+) 允許定義標準範本以根據一個規範建立多個叢集：</p>
___程式碼區塊_2___
___程式碼區塊_3___

<h2>4。 CAPI 設定</h2>
___程式碼區塊_4___

<h2>5。建立和管理叢集</h2>
___程式碼區塊_5___

<h2>6。 Crossplane — 控制平面框架</h2>
<p>Crossplane 是 CAPI 的替代/補充 — 使用 Kubernetes CRD 管理雲端資源（不僅僅是叢集）：</p>
___程式碼區塊_6___
___程式碼區塊_7___

<h2>7。 IaC 比較 2026</h2>
___程式碼區塊_8___<h2>摘要</h2>
<ul>
  <li>叢集 API：使用 K8s 物件管理 K8s 叢集生命週期</li>
  <li>ClusterClass：建立多個一致叢集的標準範本</li>
  <li>管理叢集+工作負載叢集：清楚分離</li>
  <li>Crossplane：使用 K8s CRD 管理雲端資源（資料庫、儲存、網路）</li>
  <li>CAPI + Crossplane + ArgoCD：完整的 GitOps 平台工程堆疊 2026</li>
</ul>