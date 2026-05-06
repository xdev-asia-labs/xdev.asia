---
id: 019c9618-0606-7000-8000-c1147ba22e16
title: 第 38 課：生產集群設置
slug: bai-38-production-cluster-setup
description: 設定生產 Kubernetes 叢集 2026：帶有 Containerd 2.0 的 kubeadm HA、cgroup v2、kube-proxy nftables 模式、etcd 備份、Velero 災難復原、多區域節點池、資源配額。
duration_minutes: 90
is_free: false
video_url: null
sort_order: 38
section_title: 模組 9：叢集管理
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-693" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-693)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1093" cy="269" r="26" fill="#c084fc" opacity="0.14"/>
    <circle cx="1086" cy="262" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="1079" cy="255" r="14" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="1072" cy="248" r="23" fill="#c084fc" opacity="0.11"/>
    <circle cx="1065" cy="241" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="239" x2="1100" y2="319" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="269" x2="1050" y2="339" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="968.444863728671,122 968.444863728671,156 939,173 909.555136271329,156 909.555136271329,122.00000000000001 939,105" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 38 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 38 課：生產叢集設定__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 9：叢集管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>🎯 課程目標___HTMLTAG_66__HTMLTAG_67___了解如何在 2026 年設定生產級 Kubernetes 叢集：高可用性控制平面、containerd 2.0、cgroup v2、nftables、etcd 備份策略以及使用 Velero 進行災難復原。 </p>

<h2>1。 2026 年生產叢集清單</h2>
<ul>
  ___HTMLTAG_72__HTMLTAG_73___控制平面 HA</strong>：3 或 5 個控制平面節點（etcd 仲裁為奇數）</li>
  ___HTMLTAG_76__HTMLTAG_77___容器執行階段</strong>：containerd 2.0 + cgroup v2（systemd 驅動程式）</li>
  ___HTMLTAG_80__HTMLTAG_81___CNI</strong>：Cilium 1.17+（eBPF，無 kube 代理模式）</li>
  ___HTMLTAG_84__HTMLTAG_85___kube-代理模式</strong>：nftables（IPVS 1.35 已棄用，iptables 遺留）</li>
  ___HTMLTAG_88__HTMLTAG_89___etcd</strong>：外部etcd叢集或堆疊，具有自動備份</li>
  ___HTMLTAG_92__HTMLTAG_93___作業系統節點</strong>：Ubuntu 24.04 LTS 或 Flatcar Linux（不可變）</li>
  ___HTMLTAG_96__HTMLTAG_97___TLS 無所不在</strong>：使用 kubeadm 自動憑證輪替</li>
</ul>

<h2>2。準備節點</h2>
___程式碼區塊_0___

<h2>3。安裝containerd 2.0</h2>
___程式碼區塊_1___

<h2>4。安裝 kubeadm、kubelet、kubectl</h2>
___程式碼區塊_2___

<h2>5。使用 kubeadm 初始化控制平面</h2>
___程式碼區塊_3___
___程式碼區塊_4___

<h2>6。加入控制平面節點 (HA)</h2>
___程式碼區塊_5___

<h2>7。 etcd 自動備援</h2>
___程式碼區塊_6___

<h2>8。 Velero — 災難復原</h2>
___程式碼區塊_7___

<h2>9。憑證管理</h2>
___程式碼區塊_8___

<h2>10。節點池和污點</h2>
___程式碼區塊_9___<h2>摘要</h2>
<ul>
  <li>控制平面 HA：3 個以上節點 + 外部負載平衡器</li>
  <li>containerd 2.0 + cgroup v2 + systemd 驅動程式：生產標準 2026</li>
  <li>kube-proxy nftables 模式：取代 IPVS/iptables</li>
  <li>帶有 kubeProxyReplacement 的 Cilium CNI：完整的網路堆疊</li>
  <li>etcd自動備份+Velero：災難復原策略__HTMLTAG_131___
  <li>憑證輪替：kubeadm 憑證在過期前更新所有憑證</li>
</ul>