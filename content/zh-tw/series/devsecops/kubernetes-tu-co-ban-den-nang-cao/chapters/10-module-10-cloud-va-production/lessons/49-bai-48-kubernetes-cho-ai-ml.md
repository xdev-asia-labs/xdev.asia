---
id: 019c9618-0610-7000-8000-c1147ba22e16
title: 講座 48：用於 AI/ML 工作負載的 Kubernetes
slug: bai-48-kubernetes-cho-ai-ml
description: Kubernetes AI/ML 2026：使用 DRA（動態資源分配）GA K8s 1.34 進行 GPU 調度、時間切片、MIG 分區。 Kubernetes 推理擴充 (KIE)、KEDA 縮放至零、ResourceFlavor、Kueue 批次調度。
duration_minutes: 85
is_free: false
video_url: null
sort_order: 48
section_title: 模組 10：雲端與生產
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9347" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9347)"/>

  <!-- Decorations -->
  <g>
    <circle cx="728" cy="134" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="856" cy="82" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="984" cy="30" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="612" cy="238" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="740" cy="186" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="194" x2="1100" y2="274" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="224" x2="1050" y2="294" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="969.1147367097487,129.5 969.1147367097487,158.5 944,173 918.8852632902513,158.5 918.8852632902513,129.5 944,115" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — 第 48 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 48 課： AI/ML 工作負載的 KUBERNETES</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 10：雲端與雲端製作</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯課程目標___HTMLTAG_66__HTMLTAG_67___了解 Kubernetes 2026 如何支援 AI/ML 工作負載：使用 DRA 進行 GPU 調度、使用 KIE 進行推理服務、使用 Kueue 和 JobSet 進行批次訓練以及透過請求佇列訓練以及透過請求佇列進行大量訓練。 </p>

<h2>1。為什麼將 Kubernetes 用於 AI/ML？ </h2>
<ul>
  ___HTMLTAG_72__HTMLTAG_73___GPU 即服務</strong>：為多個團隊共享 GPU 叢集</li>
  ___HTMLTAG_76__HTMLTAG_77___縮放到零</strong>：推理伺服器不接收請求→減少到 0 個 pod，節省 GPU</li>
  ___HTMLTAG_80__HTMLTAG_81___批次排程</strong>：訓練作業有效排隊與排程</li>
  ___HTMLTAG_84__HTMLTAG_85___可重複性</strong>：容器映像確保一致的環境</li>
  ___HTMLTAG_88__HTMLTAG_89___多雲可移植性</strong>：使用 GPU 在任何雲端上執行訓練</li>
</ul>

<h2>2。 GPU 調度 — 動態資源分配 (DRA) GA K8s 1.34</h2>
<p>DRA 取代了舊的裝置外掛程式 API，允許更靈活的 GPU 共享：</p>
___程式碼區塊_0___
___程式碼區塊_1___
___程式碼區塊_2___

<h2>3。 GPU 時間切片和 MIG</h2>
___程式碼區塊_3___

<h2>4。 Kubernetes 推理擴充 (KIE)</h2>
<p>KIE（2025 CNCF 項目）：標準化 Kubernetes 上的 LLM 推理服務：</p>
___程式碼區塊_4___
___程式碼區塊_5___
___程式碼區塊_6___

<h2>5。 Kueue — 批次作業排程</h2>
<p>Kueue (CNCF)：批次工作負載的公平排隊（訓練作業、資料處理）：</p>
___程式碼區塊_7___
___程式碼區塊_8___
___程式碼區塊_9___
___程式碼區塊_10___

<h2>6。 KEDA — 推理縮放至零</h2>
___程式碼區塊_11___

<h2>7。 K8s 2026 上的 AI/ML 堆疊概述</h2>
___程式碼區塊_12___<h2>摘要</h2>
<ul>
  <li>DRA GA K8s 1.34：靈活的 GPU 共享，取代裝置外掛程式 API</li>
  <li>MIG：硬體分區 A100/H100 以實現更強的隔離__HTMLTAG_117___
  <li>Kueue：GPU 叢集的公平批次調度，每團隊配額</li>
  <li>KIE：具有快取感知前綴的智慧 LLM 推理路由__HTMLTAG_121___
  <li>KEDA：空閒時將推理伺服器擴展到 0 → 節省 GPU 成本</li>
</ul>