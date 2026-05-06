---
id: 019c9618-0405-7000-8000-c1147ba22e14
title: 第 27 課：實作 — Kubernetes 安全
slug: thuc-hanh-6-kubernetes-security
description: 模組 6 實作：建立 ServiceAccounts 和 RBAC 最小權限、使用 CEL 編寫 ValidatingAdmissionPolicy、使用 Cosign 簽署容器映像、使用 kube-bench 掃描叢集、設定 PSA 限制模式。
duration_minutes: 180
is_free: false
video_url: null
sort_order: 27
section_title: 模組 6：安全
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2402" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2402)"/>

  <!-- Decorations -->
  <g>
    <circle cx="755" cy="275" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="910" cy="270" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1065" cy="265" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="720" cy="260" r="33" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="255" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="65" x2="1100" y2="145" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="95" x2="1050" y2="165" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="999.6410161513776,145 999.6410161513776,185 965,205 930.3589838486224,185 930.3589838486224,145 965,125" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 27 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 27 課：實作 — KUBERNETES 安全</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 6：安全性</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 練習目標</h2>
<ul>
  <li>為 CI/CD ServiceAccount 建立具有最小權限的 RBAC__HTMLTAG_69___
  <li>使用 CEL 寫 ValidatingAdmissionPolicy</li>
  <li>強制 Pod 安全存取限制模式</li>
  <li>使用 Trivy 掃描影像和簇</li>
  <li>部署 Falco 並測試執行階段偵測__HTMLTAG_77___
</ul>

<h2>實驗 1：RBAC — 只讀 ServiceAccount</h2>
___程式碼區塊_0___

<h2>實驗 2：CI/CD 部署程序的 RBAC__HTMLTAG_82___
___程式碼區塊_1___

<h2>實驗 3：驗證入學政策</h2>
___程式碼區塊_2___

<h2>實驗 4：Pod 安全准入 — 受限模式</h2>
___程式碼區塊_3___

<h2>實驗 5：瑣碎掃描</h2>
___程式碼區塊_4___

<h2>實驗 6：Falco 運行時偵測</h2>
___程式碼區塊_5___

<h2>清理</h2>
___程式碼區塊_6___

<h2>摘要__HTMLTAG_94___
<ul>
  <li>✅ 用於監視和 CI/CD 角色的 RBAC 最小權限__HTMLTAG_97___
  <li>✅ ValidatingAdmissionPolicy：阻止：帶有 CEL 的最新圖像</li>
  <li>✅ PSA 限制模式：強制執行強化安全性</li>
  <li>✅ Trivy：掃描影像與清單__HTMLTAG_103___
  <li>✅ Falco：使用 eBPF 進行運行時威脅偵測</li>
</ul>