---
id: 019c9618-0104-7000-8000-c1147ba22e11
title: 第 13 課：實作 — 配置與存儲
slug: thuc-hanh-3-configuration-va-storage
description: 模組 3 實作：使用 ConfigMaps 和 Secrets 部署應用程序，整合外部 Secrets Operator，安裝 CSI 驅動程式（Longhorn），使用 StatefulSet 和 PVC 部署 PostgreSQL，建立磁碟區快照和復原。
duration_minutes: 180
is_free: false
video_url: null
sort_order: 13
section_title: 模組 3：配置和存儲
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2006" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2006)"/>

  <!-- Decorations -->
  <g>
    <circle cx="713" cy="289" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="826" cy="202" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="939" cy="115" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1052" cy="288" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="665" cy="201" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="99" x2="1100" y2="179" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="129" x2="1050" y2="199" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1078.444863728671,232 1078.444863728671,266 1049,283 1019.555136271329,266 1019.555136271329,232 1049,215" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：練習 — 設定與</tspan>
      <tspan x="60" dy="42">儲存</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 3：設定與儲存</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯練習目標__HTMLTAG_68___
<ul>
  <li>使用 ConfigMap 部署應用程式（環境變數和磁碟區安裝）</li>
  <li>建立和管理安全機密</li>
  <li>安裝 CSI 驅動程式並建立 StorageClass</li>
  <li>使用 StatefulSet 和 PersistentVolumeClaim 部署 PostgreSQL</li>
  <li>建立磁碟區快照並執行復原__HTMLTAG_79___
</ul>

<h2>準備</h2>
___程式碼區塊_0___

<h2>實驗 1：ConfigMaps</h2>
___程式碼區塊_1___
___程式碼區塊_2___

<h2>實驗 2：秘密</h2>
___程式碼區塊_3___

<h2>實驗 3：不可變的 ConfigMap 和 Secret</h2>
___程式碼區塊_4___

<h2>實驗 4：具有本地儲存的持久捲和 PVC</h2>
___程式碼區塊_5___

<h2>實驗 5：使用 StatefulSet 的 PostgreSQL</h2>
___程式碼區塊_6___

<h2>實驗 6：驗證資料持久性__HTMLTAG_94___
___程式碼區塊_7___

<h2>清理</h2>
___程式碼區塊_8___

<h2>摘要__HTMLTAG_98___
<ul>
  <li>✅ ConfigMaps：環境變數和磁碟區安裝</li>
  <li>✅ 秘密：保存敏感資料（記住：base64，未加密）</li>
  <li>✅ PV/PVC：請求與分配儲存__HTMLTAG_105___
  <li>✅ StatefulSet PostgreSQL：穩定身份，持久儲存</li>
  <li>✅ 透過 pod 重啟實現資料持久化__HTMLTAG_109___
</ul>