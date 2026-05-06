---
id: 019e1a00-aa01-7001-c001-k8sha000205
title: 第 9 課：METALLB — 本地負載平衡器
slug: bai-9-metallb-loadbalancer-cho-on-premises
description: 安裝MetalLB為本地叢集中的服務提供LoadBalancer IP，配置L2模式和BGP模式、IPAddressPool，並將服務暴露到外部網路。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 9
section_title: 第 2 部分：使用 kubeadm 的 Kubernetes HA 集群
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8155" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8155)"/>

  <!-- Decorations -->
  <g>
    <circle cx="951" cy="43" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="802" cy="134" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="653" cy="225" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="1004" cy="56" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="855" cy="147" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="173" x2="1100" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="203" x2="1050" y2="273" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="997.2487113059643,159 997.2487113059643,187 973,201 948.7512886940357,187 948.7512886940357,159 973,145" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：METALLB —</tspan> 的負載平衡器
      <tspan x="60" dy="42">本地</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：使用 kubeadm 的 Kubernetes HA 叢集__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<p>完成本課程後，您將：</p>
<ul>
<li>✅ 了解本地的 LoadBalancer 問題（無雲 LB）</li>
<li>✅ 使用 Helm 安裝 MetalLB</li>
<li>✅ 使用 IPAddressPool 配置 L2 模式</li>
<li>✅ 了解大型資料中心的 BGP 模式__HTMLTAG_79___
<li>✅ 公開 LoadBalancer 類型的服務</li>
</ul>

<hr>

<h2 id="phan-1-van-de-loadbalancer">第 1 部分：本地負載平衡器問題</h2>

<h3 id="11-cloud-vs-on-prem">1.1。雲端與本地</h3>
___程式碼區塊_0___

<hr>

<h2 id="phan-2-cai-dat-metallb">第 2 部分：METALLB 安裝</h2>

<h3 id="21-prerequisites">2.1。先修條件</h3>
___程式碼區塊_1___

<h3 id="22-install-metallb">2.2。使用 Helm 安裝 MetalLB</h3>
___程式碼區塊_2___

<hr>

<h2 id="phan-3-l2-mode">第 3 部分：L2 模式配置</h2>

<h3 id="31-ip-address-pool">3.1。 IP 位址池</h3>
___程式碼區塊_3___

___程式碼區塊_4___

<h3 id="32-l2-mode-hoat-dong">3.2。 L2 模式如何運作？ </h3>
___程式碼區塊_5___

<hr>

<h2 id="phan-4-test-loadbalancer">第 4 部分：測試負載平衡器服務</h2>

<h3 id="41-deploy-test-app">4.1。部署測試應用程式</h3>
___程式碼區塊_6___

<h3 id="42-test-access">4.2。測試來自外部的存取</h3>
___程式碼區塊_7___

<h3 id="43-specify-ip-tu-pool">4.3。指定具體IP</h3>
___程式碼區塊_8___

<hr>

<h2 id="phan-5-bgp-mode">第 5 部分：BGP 模式（大型資料中心）</h2>

<h3 id="51-khi-nao-dung-bgp">5.1。何時使用 BGP？ </h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>標準</th>
<th>L2 模式</th>
<th>BGP 模式</th>
</tr>
</thead>
<tbody>
<tr>
<td>路由器請求</td>
<td>否</td>
<td>需要支援 BGP 的路由器__HTMLTAG_135___
</tr>
<tr>
<td>故障轉移</td>
<td>~10 秒__HTMLTAG_141___
<td>~3 秒</td>
</tr>
<tr>
<td>真正的負載平衡</td>
<td>❌（1 個節點句柄）</td>
<td>✅ 跨節點 ECMP__HTMLTAG_151___
</tr>
<tr>
<td>跨子網路</td>
<td>❌ 相同的 L2 段__HTMLTAG_157___
<td>✅ 跨子網路工作__HTMLTAG_159___
</tr>
<tr>
<td>複雜性</td>
<td>簡單__HTMLTAG_165___
<td>需要路由器設定</td>
</tr>
<tr>
<td>最適合</td>
<td>SMB，單機架</td>
<td>大型直流、多機架</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="52-bgp-config-example">5.2。 BGP 設定範例</h3>
___程式碼區塊_9___

<hr>

<h2 id="phan-6-ip-sharing">第 6 部分：IP 共享與進階功能</h2>

<h3 id="61-ip-sharing">6.1。共享IP（許多服務使用1個IP）</h3>
___程式碼區塊_10___

<h3 id="62-cleanup">6.2。清理測試</h3>
___程式碼區塊_11___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_193__HTMLTAG_194___MetalLB</strong> 解析本地 LoadBalancer — 無需雲端供應商__HTMLTAG_196___
___HTMLTAG_197__HTMLTAG_198___L2模式</strong>簡單，適合單機架/小型叢集</li>
___HTMLTAG_201__HTMLTAG_202___BGP 模式</strong> 適用於具有 ECMP 真正負載平衡的大型多機架資料中心</li>
___HTMLTAG_205__HTMLTAG_206___IPAddressPool</strong> 管理 IP 範圍，可以建立許多池（外部、內部）</li>
___HTMLTAG_209__HTMLTAG_210___IP 共享</strong> 允許多個服務共享相同外部 IP</li>
___HTMLTAG_213__HTMLTAG_214___strictARP：true</strong> kube-proxy 中是 L2 模式的要求</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：安裝 MetalLB</h3>
<ul>
<li>使用 Helm 安裝 MetalLB</li>
<li>使用適當的 IP 範圍實驗室建立 IPAddressPool</li>
<li>部署服務類型LoadBalancer，驗證外部IP</li>
</ul>

<h3 id="bt2">練習 2：多個池__HTMLTAG_232___
<ul>
<li>建立 2 個池：外部池與內部池</li>
<li>部署2個服務，每個服務使用不同的池</li>
<li>測試與具有相同 IP 連接埠的 2 個服務的 IP 共用</li>
</ul>

<hr><h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第10課：etcd — 作業、備援與災難復原</strong>中，我們將深入探討etcd作業、備援策略和復原過程。 </p>