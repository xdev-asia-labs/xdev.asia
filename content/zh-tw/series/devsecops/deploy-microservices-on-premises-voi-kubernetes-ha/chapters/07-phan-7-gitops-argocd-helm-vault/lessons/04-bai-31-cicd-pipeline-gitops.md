---
id: 019e1a00-aa01-7001-c001-k8sha000704
title: 第 31 課：CI/CD 管道 — 使用 GITOPS 建置、測試、部署
slug: bai-31-cicd-pipeline-build-test-deploy-voi-gitops
description: 建立完整的 CI/CD 管道：GitHub Actions 建置和測試、容器鏡像建置、漏洞掃描、GitOps 觸發器、ArgoCD 自動部署和升級工作流程。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 31
section_title: 第 7 部分：GitOps 與 ArgoCD、Helm 和 Vault
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4035" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4035)"/>

  <!-- Decorations -->
  <g>
    <circle cx="640" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="720" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="170" x2="1100" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="200" x2="1050" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1041.650635094611,207.5 1041.650635094611,232.5 1020,245 998.349364905389,232.5 998.349364905389,207.5 1020,195" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 31 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 31 課：CI/CD 管道 — 建置、測試、</tspan>
      <tspan x="60" dy="42">使用 GITOPS 進行部署</tspan>
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
<li>✅ 為微服務 + GitOps 設計 CI/CD 管道</li>
<li>✅ GitHub 操作：建置、測試、lint、掃描</li>
<li>✅ 使用多階段 Dockerfile 建構容器映像__HTMLTAG_75___
<li>✅ 影像漏洞掃描 (Trivy)</li>
<li>✅ GitOps 觸發器：自動更新 Git 中的圖片標籤</li>
<li>✅ 環境升級工作流程（開發→暫存→生產）</li>
</ul>

<hr>

<h2 id="phan-1-pipeline-design">第 1 部分：CI/CD + GITOPS 管道設計</h2>

___程式碼區塊_0___

<hr>

<h2 id="phan-2-dockerfile">第 2 部分：多階段 DOCKERFILE</h2>

___程式碼區塊_1___

___程式碼區塊_2___

<hr>

<h2 id="phan-3-github-actions">第 3 部分：GITHUB 操作 CI 管道</h2>

___程式碼區塊_3___

<hr>

<h2 id="phan-4-promotion">第 4 部分：環境宣傳</h2>

___程式碼區塊_4___

___程式碼區塊_5___

<hr>

<h2 id="phan-5-harbor">第 5 部分：私人註冊表（港口）</h2>

___程式碼區塊_6___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_102__HTMLTAG_103___兩個儲存庫</strong>：應用程式儲存庫 (CI) + GitOps 儲存庫 (CD) 分離</li>
___HTMLTAG_106__HTMLTAG_107___CI 管道</strong>：測試→建置→掃描→推送影像</li>
___HTMLTAG_110__HTMLTAG_111___GitOps 觸發器</strong>：CI 更新 GitOps 儲存庫中的圖片標籤</li>
___HTMLTAG_114__HTMLTAG_115___ArgoCD 自動同步</strong>：偵測標籤變更 → 部署到 K8s</li>
___HTMLTAG_118__HTMLTAG_119___促銷</strong>：自動到登台，基於公關到生產</li>
___HTMLTAG_122__HTMLTAG_123___Harbor</strong>：具有內建漏洞掃描功能的私人註冊表</li>
</ol>

<hr><h2 id="bai-tap">🎯 練習__HTMLTAG_129___

<h3 id="bt1">練習 1：完整管道</h3>
<ul>
<li>為範例 Go 服務設定 GitHub Actions CI</li>
<li>建置 + 推送到 Harbor，使用 Trivy 掃描</li>
<li>自動更新 GitOps 儲存庫，ArgoCD 部署</li>
</ul>

<h3 id="bt2">練習 2：促銷工作流程</h3>
<ul>
<li>實作暫存 → 製作推廣 PR</li>
<li>新增所需的審查者和檢查</li>
<li>測試完整週期：程式碼變更→生產部署</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第32課：Prometheus Stack — 監控基礎設施</strong>中，我們將使用Prometheus、Grafana和Alertmanager來設定可觀察性堆疊。 </p>