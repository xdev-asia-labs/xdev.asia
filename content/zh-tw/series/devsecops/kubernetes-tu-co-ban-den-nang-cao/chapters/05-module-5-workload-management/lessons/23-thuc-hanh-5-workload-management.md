---
id: 019c9618-0305-7000-8000-c1147ba22e13
title: 第 22 課：實作 — 工作負載管理
slug: thuc-hanh-5-workload-management
description: 第 5 單元練習：建立索引作業以並行處理資料集、使用 Prometheus 自訂指標配置 HPA、演示就地 Pod 調整大小 (K8s 1.35)、安裝 KEDA 並根據 HTTP 請求進行擴充。
duration_minutes: 180
is_free: false
video_url: null
sort_order: 22
section_title: 模組 5：工作負載管理
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5663" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5663)"/>

  <!-- Decorations -->
  <g>
    <circle cx="678" cy="64" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="756" cy="162" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="834" cy="260" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="912" cy="98" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="990" cy="196" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="144" x2="1100" y2="224" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="174" x2="1050" y2="244" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="977.7749907475932,124.5 977.7749907475932,163.5 944,183 910.2250092524068,163.5 910.2250092524068,124.50000000000001 944,105" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — 第 22 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 22 課：練習 — 工作負荷管理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 5：工作負載管理__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 練習目標</h2>
<ul>
  <li>建立索引作業以平行處理資料</li>
  <li>具有 CPU 指標的 HPA 設定</li>
  <li>示範就地 Pod 大小調整（K8s 1.35+）</li>
  <li>安裝 KEDA 並縮放至零</li>
</ul>

<h2>實驗 1：索引作業 — 資料並行處理</h2>
___程式碼區塊_0___

<h2>實驗 2：帶有時區的 CronJob__HTMLTAG_80___
___程式碼區塊_1___

<h2>實驗 3：具有 CPU 指標的 HPA</h2>
___程式碼區塊_2___

<h2>實驗 4：就地 Pod 資源更新 (K8s 1.35)</h2>
___程式碼區塊_3___

<h2>實驗 5：KEDA — 縮放至零__HTMLTAG_86___
___程式碼區塊_4___

<h2>清理</h2>
___程式碼區塊_5___

<h2>摘要__HTMLTAG_90___
<ul>
  <li>✅ 索引作業：與 JOB_COMPLETION_INDEX 並行處理資料</li>
  <li>✅ 具有時區支援的 CronJob (GA K8s 1.27)</li>
  <li>✅ HPA：依 CPU 自動縮放，穩定視窗</li>
  <li>✅ 就地 Pod 大小調整：更改 CPU 不會重新啟動 (K8s 1.35)</li>
  <li>✅ KEDA：縮放到零並從零縮放</li>
</ul>