---
id: 019c9618-0304-7000-8000-c1147ba22e13
title: 第 21 課：動態資源分配 (DRA) — GA K8S 1.34
slug: bai-21-dynamic-resource-allocation-dra
description: K8s 1.34 中的動態資源分配 (DRA) GA — 取代舊的擴充資源。 ResourceClaim、DeviceClass、GPU 共享和 FPGA 分配。具有適用於 AI/ML 工作負載的 DRA 的 NVIDIA GPU Operator。
duration_minutes: 80
is_free: false
video_url: null
sort_order: 21
section_title: 模組 5：工作負載管理
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9415" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9415)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1000" cy="270" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="170" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="250" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="150" x2="1100" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="180" x2="1050" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1021.650635094611,187.5 1021.650635094611,212.5 1000,225 978.349364905389,212.5 978.349364905389,187.5 1000,175" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 21 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 21 課：動態資源分配 (DRA)</tspan>
      <tspan x="60" dy="42">— GA K8S 1.34</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 5：工作負載管理__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標____HTMLTAG_68__HTMLTAG_69___了解 K8s 1.34 中的動態資源分配 (DRA) GA 是什麼，為什麼它比舊的擴充資源更好，如何使用 ResourceClaim 和 DeviceClass 為 AI/ML 工作負載分配 AI/ML 工作負載分配 GPU、FPGA。 </p>

<h2>1。擴充資源問題舊</h2>
<p>在 DRA 之前，Kubernetes 使用 <strong> 擴充資源</strong> 來管理 GPU：</p>
___程式碼區塊_0___
<p>缺點：</p>
<ul>
  ___HTMLTAG_80__HTMLTAG_81___全有或全無</strong>：無法在多個 Pod 之間共用 GPU</li>
  ___HTMLTAG_84__HTMLTAG_85___無結構化參數</strong>：無法指定GPU類型、記憶體、MIG分區</li>
  ___HTMLTAG_88__HTMLTAG_89___沒有拓樸意識</strong>：不知道哪個GPU位於哪個PCIe交換器上</li>
  ___HTMLTAG_92__HTMLTAG_93___無釋放掛鉤</strong>：Pod 結束時不進行清理</li>
</ul>

<h2>2。動態資源分配 (DRA) — GA K8s 1.34</h2>
<p>DRA 提供靈活的 API，透過 <strong>結構化參數</strong>.</p> 分配硬體資源

<h3>2.1 DRA 架構</h3>
<ul>
  ___HTMLTAG_106__HTMLTAG_107___DeviceClass</strong>：定義設備類型（GPU、FPGA、NIC） — 由基礎設施團隊建立__HTMLTAG_109___
  ___HTMLTAG_110__HTMLTAG_111___ResourceClaim</strong>：裝置特定請求 — 由應用程式團隊建立</li>
  ___HTMLTAG_114__HTMLTAG_115___ResourceClaimTemplate</strong>：為 Deployment/StatefulSet 中的每個 Pod 建立 ResourceClaim</li>
  ___HTMLTAG_118__HTMLTAG_119___ResourceSlice</strong>：每個節點上可用設備的資訊（由驅動程式發布）</li>
</ul><h3>2.2 設備類別</h3>
___程式碼區塊_1___

<h3>2.3 ResourceClaim — GPU 特定要求__HTMLTAG_126___
___程式碼區塊_2___

<h3>2.4 Pod 使用 ResourceClaim</h3>
___程式碼區塊_3___

<h3>2.5 ResourceClaimTemplate — 用於部署</h3>
___程式碼區塊_4___

<h2>3。使用 DRA</h2> 進行 GPU 時間切片
<p>透過時間切片為多個 Pod 共享 1 個 GPU：</p>
___程式碼區塊_5___

<h2>4。多實例 GPU (MIG) 分區</h2>
<p>MIG（多實例GPU）將A100/H100 GPU分割成獨立的分區：</p>
___程式碼區塊_6___

<h2>5。具有 DRA</h2> 的 NVIDIA GPU 運算符
___程式碼區塊_7___

<h2>6。比較：擴充資源與 DRA</h2>
___程式碼區塊_8___

<h2>7。其他用例</h2>
<ul>
  ___HTMLTAG_146__HTMLTAG_147___FPGA</strong>：加速推理、加密、網路處理</li>
  ___HTMLTAG_150__HTMLTAG_151___RDMA NIC</strong>：用於分散式訓練的高速網路</li>
  ___HTMLTAG_154__HTMLTAG_155___客製化 ASIC</strong>：TPU、客製化 AI 加速器</li>
  ___HTMLTAG_158__HTMLTAG_159___SR-IOV 網路介面</strong>：高效能網路的虛擬功能</li>
</ul>

<h2>摘要</h2>
<ul>
  <li>DRA GA K8s 1.34：以彈性分配取代擴充資源</li>
  <li>DeviceClass：定義硬體類型__HTMLTAG_169___
  <li>ResourceClaim：使用 CEL 選擇器的特定請求</li>
  <li>支援 GPU 共享：時間切片和 MIG 分區</li>
  <li>NVIDIA GPU Operator：最新版本的 DRA 支援</li>
</ul>