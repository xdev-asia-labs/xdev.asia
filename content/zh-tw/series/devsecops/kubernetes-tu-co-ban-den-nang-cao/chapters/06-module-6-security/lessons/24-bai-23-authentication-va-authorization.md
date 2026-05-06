---
id: 019c9618-0401-7000-8000-c1147ba22e14
title: 第 23 課：身分驗證與授權
slug: bai-23-authentication-va-authorization
description: Kubernetes 中的驗證、ServiceAccounts、RBAC。 Pod 安全標準 (PSS) 和 Pod 安全准入 (PSA) 取代了 PodSecurityPolicy（已刪除 K8s 1.25）。准入控制器。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 23
section_title: 模組 6：安全
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3461" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3461)"/>

  <!-- Decorations -->
  <g>
    <circle cx="955" cy="155" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="810" cy="110" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="665" cy="65" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="1020" cy="280" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="235" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="165" x2="1100" y2="245" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="195" x2="1050" y2="265" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="999.6410161513776,145 999.6410161513776,185 965,205 930.3589838486224,185 930.3589838486224,145 965,125" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 23 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 23 課：身份驗證與授權</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 6：安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯課程目標___HTMLTAG_66__HTMLTAG_67___了解 Kubernetes 中的身份驗證和授權、如何使用 RBAC 進行授權、替換 PodSecurityPolicy 的 Pod 安全標準（已刪除 K8s 1.25）以及重要的准入控制器.___MLTAG_68___MLTAG_68___MLTAG_68___MLTAG_68___MLTAG_68___MLTAG_68___MLTAG_68___

<h2>1。 Kubernetes 中的驗證</h2>
<p>Kubernetes 沒有內建使用者管理。相反，kube-apiserver 支援許多身份驗證方法：</p>
<ul>
  ___HTMLTAG_74__HTMLTAG_75___X.509 用戶端證書</strong>：kubeconfig 使用客戶端證書，最常見</li>
  ___HTMLTAG_78__HTMLTAG_79___承載令牌</strong>：ServiceAccount 令牌、OIDC 令牌</li>
  ___HTMLTAG_82__HTMLTAG_83___OIDC (OpenID Connect)</strong>：與 Dex、Keycloak、Auth0、Google、Azure AD 整合</li>
  ___HTMLTAG_86__HTMLTAG_87___Webhook</strong>：將身分驗證委託給外部服務</li>
</ul>

<h2>2。使用者與服務帳號</h2>
<ul>
  ___HTMLTAG_94__HTMLTAG_95___使用者</strong>：人類身分 - Kubernetes 中沒有資源，外部管理（憑證、OIDC）</li>
  ___HTMLTAG_98__HTMLTAG_99___ServiceAccounts</strong>：機器身分 — Kubernetes 資源，用於 Pod</li>
</ul>
___程式碼區塊_0___
___程式碼區塊_1___
___HTMLTAG_103__HTMLTAG_104___預期服務帳號代幣</strong> (K8s 1.22+)：短期代幣、自動輪替、有限受眾 — 比舊的長期代幣安全得多。 </p>

<h2>3。 RBAC — 基於角色的存取控制</h2>

<h3>3.1 角色和叢集角色</h3>
___程式碼區塊_2___

<h3>3.2 RoleBindings 和 ClusterRoleBindings__HTMLTAG_112___
___程式碼區塊_3___
___程式碼區塊_4___

<h3>3.3 最小權限原則</h3>
___程式碼區塊_5___<h2>4。 Pod 安全標準 (PSS) — 取代 PodSecurityPolicy</h2>
___HTMLTAG_117__HTMLTAG_118___PodSecurityPolicy (PSP) 已在 K8s 1.25 中完全刪除。 </strong> 替換為 Pod 安全標準：</p>

<h3>4.1 三個安全等級</h3>
<ul>
  ___HTMLTAG_124__HTMLTAG_125___特权</strong>：无限制。僅用於系統元件、叢集範圍控制器</li>
  ___HTMLTAG_128__HTMLTAG_129___基線</strong>：防止常見升級。適用於大多數應用。封鎖：特權容器、hostPath、hostNetwork、hostPID</li>
  ___HTMLTAG_132__HTMLTAG_133___受限</strong>：強化安全性。需求：非 root 使用者、非 root 群組、刪除所有功能、seccompProfile RuntimeDefault/Localhost、無 hostPath</li>
</ul>

<h3>4.2 Pod 安全准入 (PSA)</h3>
___程式碼區塊_6___
___程式碼區塊_7___

<h2>5。准入控制器</h2>
<p>准入控制器在驗證/授權後攔截對 API 伺服器的請求。有 2 種類型：</p>
<ul>
  ___HTMLTAG_144__HTMLTAG_145___變異</strong>：更改物件（例如注入 sidecar，設定預設值）</li>
  ___HTMLTAG_148__HTMLTAG_149___驗證</strong>：僅批准/拒絕（例如：PSA、ResourceQuota）</li>
</ul>
___程式碼區塊_8___

<h2>6。入場 Webhook</h2>
___程式碼區塊_9___

<h2>摘要</h2>
<ul>
  <li>Kubernetes 沒有使用者管理 — 使用 X.509 憑證、OIDC</li>
  <li>ServiceAccounts：機器身分、預期令牌（短暫）</li>
  <li>RBAC：角色/ClusterRole + RoleBinding/ClusterRoleBinding</li>
  <li>最小權限：僅授予最低必要權限</li>
  <li>PSP 刪除了 K8s 1.25 → 使用 Pod 安全標準 (PSA)</li>
  <li>PSA 等級：特權、基線（建議預設）、受限（生產）</li>
</ul>