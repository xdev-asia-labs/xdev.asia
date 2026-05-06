---
id: 019c9618-0402-7000-8000-c1147ba22e14
title: 第 24 課：驗證入學政策 — GA K8S 1.30
slug: bai-24-validatingadmissionpolicy-ga-k8s-1-30
description: K8s 1.30 的 ValidatingAdmissionPolicy GA — 使用 CEL（通用表達式語言）編寫策略，無需部署 Webhook 伺服器。與 OPA/Gatekeeper 進行比較。模式：阻止最新標籤、強制標籤、驗證資源限制。
duration_minutes: 85
is_free: false
video_url: null
sort_order: 24
section_title: 模組 6：安全
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3013" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3013)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1074" cy="172" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="1048" cy="46" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1022" cy="180" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="996" cy="54" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="188" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="152" x2="1100" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="182" x2="1050" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.3826859021799,138.5 975.3826859021799,165.5 952,179 928.6173140978201,165.5 928.6173140978201,138.5 952,125" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 24 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 24 課：驗證入學政策 — GA K8S</tspan>
      <tspan x="60" dy="42">1.30</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 6：安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標____HTMLTAG_68__HTMLTAG_69___了解 ValidatingAdmissionPolicy GA K8s 1.30，在沒有 Webhook 伺服器的情況下編寫 CEL 策略，並了解何時仍需要 OPA/Gatekeeper。 </p>

<h2>1。傳統准入 Webhook 的問題</h2>
<p>基於 Webhook 的准入（OPA/Gatekeeper、Kyverno）有缺點：</p>
<ul>
  ___HTMLTAG_76__HTMLTAG_77___網路開銷</strong>：每個 API 請求都需要對 Webhook 服務進行 HTTP 呼叫</li>
  ___HTMLTAG_80__HTMLTAG_81___可用性依賴</strong>：如果 webhook 服務關閉 → API 請求失敗</li>
  ___HTMLTAG_84__HTMLTAG_85___操作負擔</strong>：必須維護 webhook 部署、TLS 憑證</li>
  ___HTMLTAG_88__HTMLTAG_89___延遲</strong>：增加所有 API 呼叫的延遲</li>
</ul>

<h2>2。 ValidatingAdmissionPolicy — 內置，無 Webhook</h2>
K8s 1.30 中的 <p>_ValidatingAdmissionPolicy GA 允許使用 <strong>CEL（通用表達式語言）</strong>.</p> 直接在 API 伺服器中編寫驗證策略
<ul>
  <li>在 API 伺服器進程中運作 — 零網路開銷</li>
  <li>無須部署額外服務</li>
  <li>沒有單點故障__HTMLTAG_105___
  <li>比 webhooks 快 ~10x</li>
</ul>

<h2>3。 CEL 基礎知識</h2>
<p>CEL 是一種簡單、安全的表達式語言（無循環、無副作用）。 </p>
___程式碼區塊_0___

<h2>4。驗證錄取政策結構</h2>
___程式碼區塊_1___

<h2>5。驗證AdmissionPolicyBinding</h2>
___程式碼區塊_2___

<h2>6。通用政策</h2><h3>6.1 標籤「最新」的區塊影像</h3>
___程式碼區塊_3___

<h3>6.2 所需的資源限制</h3>
___程式碼區塊_4___

<h3>6.3 需要標籤</h3>
___程式碼區塊_5___

<h3>6.4 限制副本</h3>
___程式碼區塊_6___

<h3>6.5 防止權限升級__HTMLTAG_128___
___程式碼區塊_7___

<h2>7。帶參數的策略</h2>
___程式碼區塊_8___

<h2>8。比較：ValidatingAdmissionPolicy 與 OPA/Gatekeeper</h2>
___程式碼區塊_9___
___HTMLTAG_133__HTMLTAG_134___在下列情況下仍需要 OPA/Gatekeeper：</strong>：需要變異策略（自動注入欄位）、比 CEL 支援更複雜的策略邏輯，或需要變異 Webhooks.</p>

<h2>摘要</h2>
<ul>
  <li>ValidatingAdmissionPolicy GA K8s 1.30：內置，無需 Webhook</li>
  <li>CEL：策略邏輯的安全性表達語言</li>
  <li>需要绑定才能激活：ValidatingAdmissionPolicyBinding</li>
  <li>操作：拒絕、審核、警告</li>
  <li>使用參數（ConfigMap）重複使用策略</li>
  <li>OPA/Gatekeeper：仍然需要變異和複雜的 rego 邏輯</li>
</ul>