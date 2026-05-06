---
id: 019c9618-0404-7000-8000-c1147ba22e14
title: 第 26 課：安全工具
slug: bai-26-security-tools
description: Kubernetes 安全工具：kube-bench（CIS 基準）、Trivy（漏洞掃描）、Falco（執行階段威脅偵測）、OPA/Gatekeeper（進階策略）。构建安全管道。
duration_minutes: 80
is_free: false
video_url: null
sort_order: 26
section_title: 模組 6：安全
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5616" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5616)"/>

  <!-- Decorations -->
  <g>
    <circle cx="716" cy="158" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="832" cy="114" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="948" cy="70" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1064" cy="286" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="680" cy="242" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="118" x2="1100" y2="198" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="148" x2="1050" y2="218" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="946.5788383248864,101.5 946.5788383248864,134.5 918,151 889.4211616751136,134.5 889.4211616751135,101.50000000000001 918,85" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — 第 26 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 26 課：安全工具</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 6：安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標___HTMLTAG_66__HTMLTAG_67___了解如何使用基本安全工具：用於合規性檢查的 kube-bench、用於漏洞掃描的 Trivy、用於運行時檢測的 Falco、用於策略執行的 OPA/Gatekeeper。 </p>

<h2>1。 kube-bench — CIS 基準</h2>
<p>kube-bench 根據 <strong>CIS（互聯網安全中心）Kubernetes 基準</strong> — 廣泛認可的安全強化標準測試您的 Kubernetes 叢集。 </p>
___程式碼區塊_0___
___程式碼區塊_1___
<p>優先修復：從第 1 部分（API 伺服器）和第 4 部分（kubelet）中的失敗開始.</p>

<h2>2。 Trivy — 漏洞掃描</h2>
<p>Trivy 是一款針對容器、檔案系統、Git 儲存庫和 Kubernetes 叢集的綜合安全掃描器。 </p>

<h3>2.1 掃描容器影像</h3>
___程式碼區塊_2___
___程式碼區塊_3___

<h3>2.2 掃描 Kubernetes 清單</h3>
___程式碼區塊_4___

<h3>2.3 掃描運行叢集</h3>
___程式碼區塊_5___

<h3>2.4 CI/CD 中的瑣事</h3>
___程式碼區塊_6___

<h2>3。 Falco — 運行時威脅偵測</h2>
<p>Falco 使用 eBPF 監視系統呼叫並偵測執行時間的可疑行為。 </p>

<h3>3.1 安裝 Falco</h3>
___程式碼區塊_7___

<h3>3.2 預設 Falco 規則__HTMLTAG_96___
___程式碼區塊_8___

<h3>3.3 自訂 Falco 規則</h3>
___程式碼區塊_9___

<h3>3.4 Falco Sidekick — 警報轉送</h3>
___程式碼區塊_10___

<h2>4。 OPA/Gatekeeper — 進階策略</h2>
___程式碼區塊_11___
___程式碼區塊_12___

<h2>5。安全管道</h2>
___程式碼區塊_13___<h2>摘要</h2>
<ul>
  <li>kube-bench：CIS 基準合規性，修復優先失敗項</li>
  <li>Trivy：掃描影像、清單和叢集 — CI/CD 整合</li>
  <li>Falco：eBPF 執行時期偵測、自訂規則、Sidekick 警報</li>
  <li>OPA/Gatekeeper：當需要改變策略或複雜的 rego 邏輯時</li>
  <li>安全管道：左移（在 CI 中掃描）+執行時間 (Falco)</li>
</ul>