---
id: 019c9618-0403-7000-8000-c1147ba22e14
title: 第 25 課：2026 年 Kubernetes 安全最佳實踐
slug: bai-25-security-best-practices-kubernetes-2026
description: SecurityContext（非根、唯讀檔案系統、刪除功能）、Cosign/Sigstore 的供應鏈安全性、SBOM、靜態秘密加密、網路隔離最佳實務。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 25
section_title: 模組 6：安全
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7028" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7028)"/>

  <!-- Decorations -->
  <g>
    <circle cx="841" cy="93" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="1082" cy="114" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="823" cy="135" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1064" cy="156" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="177" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="243" x2="1100" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="273" x2="1050" y2="343" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1075.9089653438086,224 1075.9089653438086,262 1043,281 1010.0910346561914,262 1010.0910346561914,224 1043,205" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 25 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 25 課：安全最佳實務 KUBERNETES</tspan>
      <tspan x="60" dy="42">2026</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 6：安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標___HTMLTAG_68__HTMLTAG_69___掌握 Kubernetes 2026 的安全最佳實踐：SecurityContext 強化、透過 Cosign 實現供應鏈安全、SBOM 產生和安全機密管理。 </p>

<h2>1。 SecurityContext — 容器強化</h2>
<p>SecurityContext 定義 Pod 或容器的安全設定。應用縱深防禦：</p>
___程式碼區塊_0___
___HTMLTAG_75__HTMLTAG_76___readOnlyRootFilesystem</strong>：如果應用程式需要寫入文件，請使用 <code>emptyDir</code> 卷：</p>
___程式碼區塊_1___

<h2>2。供應鏈安全 — Cosign/Sigstore</h2>
<p>驗證容器映像是否由可信任來源建置和簽署。 </p>

<h3>2.1 使用 Cosign 對影像進行簽章</h3>
___程式碼區塊_2___

<h3>2.2 Sigstore 策略控制器</h3>
___程式碼區塊_3___
___程式碼區塊_4___

<h2>3。 SBOM — 軟體物料清單</h2>
<p>SBOM 列出了容器映像中的所有套件和依賴項，有助於追蹤漏洞。 </p>
___程式碼區塊_5___

<h2>4。秘密管理最佳實務</h2>

<h3>4.1 靜態秘密加密</h3>
___程式碼區塊_6___
___程式碼區塊_7___

<h3>4.2 外部機密管理</h3>
<p>不要將機密儲存在 Kubernetes etcd 中，而是使用外部機密運算子從下列位置同步：</p>
<ul>
  <li>AWS Secrets Manager</li>
  <li>HashiCorp 金庫</li>
  <li>GCP 秘密管理器</li>
  <li>Azure 金鑰保管庫</li>
</ul>
___程式碼區塊_8___

<h2>5。影像安全最佳實務</h2>
___程式碼區塊_9___

<h2>6。網路安全</h2>
___程式碼區塊_10___<h2>7。審核日誌記錄</h2>
___程式碼區塊_11___

<h2>摘要 — 安全檢查表 2026</h2>
<ul>
  <li>✅ SecurityContext：非根、readOnlyRootFilesystem、dropAll caps、seccomp RuntimeDefault</li>
  <li>✅ Pod 安全准入：生產命名空間的限制模式</li>
  <li>✅ 使用 Cosign 對影像進行簽名，使用策略控制器執行</li>
  <li>✅ 產生 SBOM，用 Grype 掃描</li>
  <li>✅ 靜態秘密加密或外部秘密運算子</li>
  <li>✅ 網路策略：預設拒絕</li>
  <li>✅ RBAC：最小權限服務帳號</li>
  <li>✅ 秘密與關鍵資源的審核日誌__HTMLTAG_135___
  <li>✅ 特定圖像標籤（不要使用：最新），從私人註冊表中提取</li>
</ul>