---
id: 019e1a00-aa01-7001-c001-k8sha000702
title: 第 29 課：微服務的 HELM 圖表 — 範本、值、依賴項
slug: bai-29-helm-charts-cho-microservices
description: 為微服務建立可重複使用的Helm圖表：模板函數、值管理、圖表依賴項、庫圖表、Helmfile多環境和最佳實踐。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 29
section_title: 第 7 部分：GitOps 與 ArgoCD、Helm 和 Vault
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 29 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 29 課：微服務的 HELM 圖表 —</tspan>
      <tspan x="60" dy="42">範本、值、相依性</tspan>
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
<li>✅ Helm 圖表結構與範本引擎</li>
<li>✅ 建構可重複使用的微服務基礎圖表</li>
<li>✅ 值管理：預設值、覆蓋、環境</li>
<li>✅ 圖表依賴項與庫圖表</li>
<li>✅ 用於多環境部署的 Helmfile</li>
<li>✅ 最佳實務：檢查、測試、打包</li>
</ul>

<hr>

<h2 id="phan-1-structure">第 1 部分：HELM 圖表結構</h2>

___程式碼區塊_0___

<h3 id="11-chart-yaml">1.1。 Chart.yaml</h3>
___程式碼區塊_1___

<hr>

<h2 id="phan-2-templates">第 2 部分：詳細範本</h2>

<h3 id="21-helpers">2.1。 _helpers.tpl</h3>
___程式碼區塊_2___

<h3 id="22-deployment">2.2。部署模板</h3>
___程式碼區塊_3___

<h3 id="23-values">2.3。預設值</h3>
___程式碼區塊_4___

<hr>

<h2 id="phan-3-multi-env">第 3 部分：多重環境管理</h2>

___程式碼區塊_5___

___程式碼區塊_6___

<hr>

<h2 id="phan-4-helmfile">第 4 部分：HELMFILE — 多服務部署</h2>

___程式碼區塊_7___

___程式碼區塊_8___

<hr>

<h2 id="phan-5-testing">第 5 部分：HELM 測驗和 CI</h2>

___程式碼區塊_9___

___程式碼區塊_10___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_110__HTMLTAG_111___基本圖表</strong>：1 個適用於所有微服務的可重複使用圖表</li>
___HTMLTAG_114__HTMLTAG_115___值分層</strong>：預設值→服務→環境</li>
___HTMLTAG_118__HTMLTAG_119___Helmfile</strong>：多服務、多環境部署編排</li>
___HTMLTAG_122__HTMLTAG_123___範本助手</strong>：乾燥、一致的標籤/名稱</li>
___HTMLTAG_126__HTMLTAG_127___測試</strong>：CI 中的 Lint + 模板 + 單元測試</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_133___

<h3 id="bt1">練習 1：建立基礎圖表</h3>
<ul>
<li>建立微服務 Helm 圖表__HTMLTAG_138___
<li>使用具有不同值的相同圖表部署 3 個服務__HTMLTAG_140___
<li>新增 HPA、PDB 範本__HTMLTAG_142___
</ul>

<h3 id="bt2">練習 2：Helmfile 多環境</h3>
<ul>
<li>設定暫存+生產環境</li>
<li>使用 helmfile 同步部署所有服務</li>
<li>使用 helmfile diff 查看變更</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 30 課：使用 HashiCorp Vault 進行秘密管理</strong>，我們將設定集中式秘密管理。 </p>