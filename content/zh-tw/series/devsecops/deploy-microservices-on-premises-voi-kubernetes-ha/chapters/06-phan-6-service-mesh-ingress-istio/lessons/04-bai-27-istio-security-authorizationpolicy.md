---
id: 019e1a00-aa01-7001-c001-k8sha000604
title: 第 27 課：istio 安全 — 授權政策與請求身分驗證
slug: bai-27-istio-security-authorizationpolicy-va-requestauthentication
description: 設定 Istio 安全性：用於存取控制的 AuthorizationPolicy、用於 JWT 驗證的 RequestAuthentication、網路分段和零信任安全模型。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 27
section_title: 第 6 部分：Istio 的服務網格和 Ingress
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9488" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9488)"/>

  <!-- Decorations -->
  <g>
    <circle cx="742" cy="196" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="884" cy="78" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1026" cy="220" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="668" cy="102" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="810" cy="244" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="216" x2="1100" y2="296" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="246" x2="1050" y2="316" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1042.8467875173176,200.5 1042.8467875173176,231.5 1016,247 989.1532124826824,231.5 989.1532124826824,200.5 1016,185" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 27 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 27 課：ISTIO 安全 —</tspan>
      <tspan x="60" dy="42">授權政策和</tspan>
      <tspan x="60" dy="42">請求驗證</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="286" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="310" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：服務網格和服務網格使用 Istio 進入</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_70___
<ul>
<li>✅ 授權策略：允許、拒絕、自訂規則</li>
<li>✅ RequestAuthentication：JWT 令牌驗證</li>
<li>✅ 命名空間之間的網路分段__HTMLTAG_77___
<li>✅ 零信任安全模型</li>
<li>✅ 安全事件審核日誌__HTMLTAG_81___
</ul>

<hr>

<h2 id="phan-1-authorization">第 1 部分：授權政策</h2>

___程式碼區塊_0___

<h3 id="11-deny-all">1.1。預設拒絕全部（零信任）</h3>
___程式碼區塊_1___

<h3 id="12-allow-specific">1.2。允許特定服務__HTMLTAG_89___
___程式碼區塊_2___

<h3 id="13-deny-specific">1.3。拒絕特定模式</h3>
___程式碼區塊_3___

<hr>

<h2 id="phan-2-jwt">第 2 部分：JWT 驗證</h2>

<h3 id="21-request-auth">2.1。請求身份驗證</h3>
___程式碼區塊_4___

<h3 id="22-role-based">2.2。基於角色的存取（JWT 聲明）</h3>
___程式碼區塊_5___

<hr>

<h2 id="phan-3-namespace-segmentation">第 3 部分：命名空間分段__HTMLTAG_101___

___程式碼區塊_6___

<hr>

<h2 id="phan-4-audit">第 4 部分：安全審核日誌</h2>

___程式碼區塊_7___

___程式碼區塊_8___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_109__HTMLTAG_110___零信任</strong>：從拒絕全部開始，明確允許所需的路徑</li>
___HTMLTAG_113__HTMLTAG_114___AuthorizationPolicy</strong>：服務到服務的存取控制（誰可以呼叫誰）</li>
___HTMLTAG_117__HTMLTAG_118___RequestAuthentication</strong>：入口處的 JWT 驗證（最終使用者驗證）</li>
___HTMLTAG_121__HTMLTAG_122___mTLS + AuthZ</strong>：組合 = 強大的基於身分的安全性</li>
___HTMLTAG_125__HTMLTAG_126___命名空間分段</strong>：隔離受損服務的爆炸半徑</li>
___HTMLTAG_129__HTMLTAG_130___審核</strong>：記錄被拒絕的請求、用於安全監控的 mTLS 失敗</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：零信任實驗室__HTMLTAG_138___
<ul>
<li>對預設命名空間應用拒絕所有</li>
<li>為特定服務路徑建立允許策略</li>
<li>測試：未經授權的服務呼叫 → RBAC 被拒絕</li>
</ul>

<h3 id="bt2">練習 2：JWT 驗證實驗室__HTMLTAG_148___
<ul>
<li>使用 Keycloak 設定 RequestAuthentication</li>
<li>建立基於角色的授權策略</li>
<li>測試管理員與檢視者存取權限</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 28 課：使用 ArgoCD 的 GitOps — 架構和安裝</strong>，我們將繼續進行持續部署的 GitOps 工作流程。 </p>