---
id: 019c9618-0607-7000-8000-c1147ba22e16
title: 第 39 課：基礎設施遷移 2026 — CGROUP V2 和 CONTAINERD 2.0
slug: bai-39-infrastructure-migration-2026-cgroup-v2-containerd-2
description: 2026 年遷移指南：從 cgroup v1 升級到 v2、containerd 1.x 到 2.0、docker shim 刪除、nftables kube-proxy。檢測相容性問題和回滾策略。
duration_minutes: 75
is_free: false
video_url: null
sort_order: 39
section_title: 模組 9：叢集管理
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3184" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3184)"/>

  <!-- Decorations -->
  <g>
    <circle cx="694" cy="212" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="788" cy="186" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="882" cy="160" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="976" cy="134" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="108" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="212" x2="1100" y2="292" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="242" x2="1050" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1035.38268590218,198.5 1035.38268590218,225.5 1012,239 988.6173140978201,225.5 988.6173140978201,198.5 1012,185" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 39 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 39 課：2026 年基礎設施遷移 —</tspan>
      <tspan x="60" dy="42">CGROUP V2 和 CONTAINERD 2.0</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 9：叢集管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標____HTMLTAG_68__HTMLTAG_69___理解並實現從舊基礎設施（cgroup v1、containerd 1.x、iptables）到新堆疊 2026（cgroup v2、containerd 2.0、nftables）的遷移。檢測重大變更並進行相應處理。 </p>

<h2>1。為什麼我們需要遷移？ </h2>
___HTMLTAG_73__HTMLTAG_74___時間軸棄用</strong>：</p>
<ul>
  ___HTMLTAG_78__HTMLTAG_79___Dockershim</strong>：刪除了 K8s 1.24 (2022) — 必須使用 containerd 或 CRI-O</li>
  ___HTMLTAG_82__HTMLTAG_83___cgroup v1</strong>：已棄用的 Linux 核心 6.x，Ubuntu 24.04 預設 cgroup v2</li>
  ___HTMLTAG_86__HTMLTAG_87___iptables kube-proxy</strong>：已棄用的 K8s 1.33，刪除了計劃的 1.37</li>
  ___HTMLTAG_90__HTMLTAG_91___IPVS kube-proxy</strong>：已棄用的 K8s 1.35</li>
  ___HTMLTAG_94__HTMLTAG_95___containerd 1.x</strong>：EOL，containerd 2.0 GA (2025)，具有許多效能改進</li>
</ul>

<h2>2。遷移前檢查</h2>
___程式碼區塊_0___

<h2>3。遷移 cgroup v1 → v2</h2>
___程式碼區塊_1___

<h2>4。遷移containerd 1.x → 2.0</h2>
___程式碼區塊_2___

<h2>5。遷移 kube-proxy iptables → nftables</h2>
___程式碼區塊_3___

<h2>6。處理與 cgroup v2 不相容的應用程式</h2>
___程式碼區塊_4___

<h2>7。回滾策略</h2>
___程式碼區塊_5___

<h2>8。 Kubernetes 版本升級</h2>
___程式碼區塊_6___<h2>摘要</h2>
<ul>
  <li>cgroup v2：Ubuntu 24.04 默認，將 cgroupDriver 改為 systemd</li>
  <li>containerd 2.0：排出→升級→驗證→解壓縮每個節點</li>
  <li>kube-proxy nftables：修補設定映射 → 重新啟動 DaemonSet</li>
  <li>在遷移到生產環境之前始終制定回滾計劃</li>
  <li>K8s升級：各個小版本，請勿跳過</li>
  <li>在遷移到生產環境之前在臨時叢集上進行測試</li>
</ul>