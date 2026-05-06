---
id: 019e1a00-aa01-7001-c001-k8sha000703
title: 第 30 課：使用 HASHICORP Vault 進行秘密管理
slug: bai-30-secrets-management-voi-hashicorp-vault
description: 在 Kubernetes 上部署 HashiCorp Vault HA、KV 機密引擎、Kubernetes 驗證、動態資料庫憑證、外部機密操作員和機密輪調。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 30
section_title: 第 7 部分：GitOps 與 ArgoCD、Helm 和 Vault
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 30 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 30 課：HASHICORP 的秘密管理</tspan>
      <tspan x="60" dy="42">金庫</tspan>
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
<li>✅ 在 Kubernetes 上部署 Vault HA 叢集__HTMLTAG_71___
<li>✅ KV 秘密引擎 v2</li>
<li>✅ Kubernetes 驗證方法</li>
<li>✅ 動態資料庫憑證</li>
<li>✅ 外部機密操作員 (ESO) 整合</li>
<li>✅ 秘密輪替策略__HTMLTAG_81___
</ul>

<hr>

<h2 id="phan-1-vault-architecture">第 1 部分：Vault 架構</h2>

___程式碼區塊_0___

<hr>

<h2 id="phan-2-install">第 2 部分：安裝 VAULT HA</h2>

___程式碼區塊_1___

___程式碼區塊_2___

___程式碼區塊_3___

<hr>

<h2 id="phan-3-kv-secrets">第 3 部分：KV 秘密引擎</h2>

___程式碼區塊_4___

<hr>

<h2 id="phan-4-k8s-auth">第 4 部分：KUBERNETES 驗證方法</h2>

___程式碼區塊_5___

<hr>

<h2 id="phan-5-eso">第 5 部分：外部秘密操作員 (ESO)</h2>

___程式碼區塊_6___

___程式碼區塊_7___

___程式碼區塊_8___

<hr>

<h2 id="phan-6-dynamic-creds">第 6 部分：動態資料庫憑證</h2>

___程式碼區塊_9___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_105__HTMLTAG_106___Vault HA</strong>：3 節點 Raft 集群，自動故障轉移</li>
___HTMLTAG_109__HTMLTAG_110___KV v2</strong>：版本化機密、回滾功能</li>
___HTMLTAG_113__HTMLTAG_114___K8s Auth</strong>：基於 ServiceAccount 的每項服務策略</li>
___HTMLTAG_117__HTMLTAG_118___ESO</strong>：Vault → K8s 秘密同步，GitOps 友善</li>
___HTMLTAG_121__HTMLTAG_122___動態憑證</strong>：自動產生、自動撤銷的資料庫密碼</li>
___HTMLTAG_125__HTMLTAG_126___永遠不要向 Git 提交機密</strong>：使用 Vault + ESO</li>
</ol>

<hr><h2 id="bai-tap">🎯 練習__HTMLTAG_132___

<h3 id="bt1">練習 1：Vault + ESO 設定__HTMLTAG_134___
<ul>
<li>部署保管庫 HA、初始化、解封__HTMLTAG_137___
<li>儲存 3 個微服務的機密</li>
<li>部署 ESO，將機密同步到 K8s</li>
</ul>

<h3 id="bt2">練習 2：動態資料庫憑證__HTMLTAG_144___
<ul>
<li>啟用資料庫機密引擎</li>
<li>配置動態 PostgreSQL 角色</li>
<li>應用程式使用動態憑證，驗證旋轉__HTMLTAG_151___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 31 課：CI/CD 管道 — 使用 GitOps 建置、測試、部署</strong>，我們將建立一個整合 ArgoCD 的完整 CI/CD 管道。 </p>