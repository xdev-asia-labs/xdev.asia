---
id: 019e1a00-aa01-7001-c001-k8sha000701
title: 第 28 課：帶有 ARGOCD 的 GITOPS — 架構和安裝
slug: bai-28-gitops-voi-argocd-kien-truc-va-cai-dat
description: 了解 GitOps 原理、ArgoCD 架構、安裝 ArgoCD HA、設定 Git 儲存庫、RBAC、SSO，並比較 ArgoCD 與 FluxCD。
duration_minutes: 150
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai28-gitops-argocd.png
sort_order: 28
section_title: 第 7 部分：GitOps 與 ArgoCD、Helm 和 Vault
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 28 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 28 課：GITOPS 與 ARGOCD — 架構與</tspan>
      <tspan x="60" dy="42">設定</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：GitOps 與 ArgoCD、Helm 與保險庫</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<ul>
<li>✅ 了解 GitOps 原則與工作流程</li>
<li>✅ ArgoCD 架構：元件、同步流程</li>
<li>✅ 在 Kubernetes 上安裝 ArgoCD HA__HTMLTAG_75___
<li>✅ 設定 Git 儲存庫與 SSH 金鑰</li>
<li>✅ RBAC 和 SSO 整合</li>
<li>✅ 比較 ArgoCD 與 FluxCD</li>
</ul>

<hr>

<h2 id="phan-1-gitops">第 1 部分：GITOPS 原理</h2>

___程式碼區塊_0___

> **GitOps 核心原則：**
> 1. **聲明式**：Git 中所描述的期望狀態
> 2. **版本化**：Git 歷史記錄 = 部署歷史記錄
> 3. **自動**：自動套用（或核准）更改
> 4. **自我修復**：漂移偵測+自動校正<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_89__HTMLTAG_90___功能___HTMLTAG_91__HTMLTAG_92___ArgoCD___HTMLTAG_93__HTMLTAG_94___FluxCD___HTMLTAG_95__HTMLTAG_96___
</thead>
<tbody>
___HTMLTAG_99__HTMLTAG_100___架構___HTMLTAG_101__HTMLTAG_102___集中式（UI + API）___HTMLTAG_103__HTMLTAG_104___分散式（每個叢集）___HTMLTAG_105__HTMLTAG_106___
___HTMLTAG_107__HTMLTAG_108___UI___HTMLTAG_109__HTMLTAG_110___豐富的 Web UI___HTMLTAG_111__HTMLTAG_112___僅限 CLI（+ Weave GitOps UI）___HTMLTAG_113__14MLG_113__14MLG_113__14MLG_113__14
___HTMLTAG_115__HTMLTAG_116___多集群___HTMLTAG_117__HTMLTAG_118___本機（單窗格）____HTMLTAG_119__HTMLTAG_120___每集群代理____HTMLTAG_121__HTMLTAG_122___
___HTMLTAG_123__HTMLTAG_124___Helm 支援___HTMLTAG_125__HTMLTAG_126___是（模板渲染）___HTMLTAG_127__HTMLTAG_128___是（HelmRelease CRD）___HTMLTAG_129__1TAG_12911TAG_1291
___HTMLTAG_131__HTMLTAG_132___自訂___HTMLTAG_133__HTMLTAG_134___是___HTMLTAG_135__HTMLTAG_136___是（本機）___HTMLTAG_137__HTMLTAG_138___
___HTMLTAG_139__HTMLTAG_140___RBAC___HTMLTAG_141__HTMLTAG_142___內置，每個項目___HTMLTAG_143__HTMLTAG_144___K8s RBAC____HTMLTAG_145__HTMLTAG_146___
___HTMLTAG_147__HTMLTAG_148___SSO___HTMLTAG_149__HTMLTAG_150___OIDC、SAML、LDAP___HTMLTAG_151__HTMLTAG_152___透過 K8s 驗證____HTMLTAG_153__4MLG_153__15
___HTMLTAG_155__HTMLTAG_156___最適合___HTMLTAG_157__HTMLTAG_158___中央平台團隊____HTMLTAG_159__HTMLTAG_160___分散式團隊____HTMLTAG_161__HTMLTAG_162___
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-architecture">第 2 部分：ARGOCD 架構</h2>

___程式碼區塊_1___

<hr>

<h2 id="phan-3-install">第 3 部分：安裝 ARGOCD HA</h2>

___程式碼區塊_2___

<h3 id="31-values">3.1。 ArgoCD 值（生產）</h3>
___程式碼區塊_3___

___程式碼區塊_4___

<hr>

<h2 id="phan-4-app">第 4 部分：建立 ARGOCD 應用程式</h2>

___程式碼區塊_5___

<h3 id="41-project">4.1。 ArgoCD 項目</h3>
___程式碼區塊_6___

<hr>

<h2 id="phan-5-applicationset">第 5 部分：應用程式集（多應用程式產生）</h2>

___程式碼區塊_7___

<hr>

<h2 id="phan-6-notifications">第 6 部分：通知</h2>

___程式碼區塊_8___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_189__HTMLTAG_190___GitOps</strong>：Git 是基礎設施的單一事實來源</li>
___HTMLTAG_193__HTMLTAG_194___ArgoCD</strong>：聲明式 CD、自動同步、漂移偵測、豐富的 UI</li>
___HTMLTAG_197__HTMLTAG_198___HA 安裝</strong>：控制器、伺服器、儲存庫伺服器的 2 個以上副本</li>
___HTMLTAG_201__HTMLTAG_202___項目</strong>：RBAC 邊界，限制每個團隊的儲存庫/命名空間</li>
___HTMLTAG_205__HTMLTAG_206___ApplicationSet</strong>：從範本產生數百個應用程式</li>
___HTMLTAG_209__HTMLTAG_210___自我修復</strong>：自動復原手動 kubectl 變更</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2><h3 id="bt1">練習 1：ArgoCD 設定</h3>
<ul>
<li>安裝 ArgoCD HA</li>
<li>新增 Git 儲存庫，建立項目</li>
<li>透過 ArgoCD 應用程式部署範例應用程式</li>
<li>手動編輯部署→觀看自我修復</li>
</ul>

<h3 id="bt2">練習 2：ApplicationSet</h3>
<ul>
<li>建立基於目錄的ApplicationSet</li>
<li>新增服務 → 自動發現與部署</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 29 課：微服務的 Helm 圖表 — 模板、值、依賴項</strong>中，我們將為整個微服務堆疊建立可重複使用的 Helm 圖表。 </p>