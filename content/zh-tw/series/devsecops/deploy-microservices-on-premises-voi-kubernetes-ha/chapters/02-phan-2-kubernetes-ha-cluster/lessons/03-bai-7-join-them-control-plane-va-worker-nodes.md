---
id: 019e1a00-aa01-7001-c001-k8sha000203
title: 第 7 課：加入新增控制平面和工作節點
slug: bai-7-join-them-control-plane-va-worker-nodes
description: 將master2和master3加入HA控制平面，加入工作節點，驗證具有3個成員的etcd集群，檢查領導者選舉和集群準備。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 7
section_title: 第 2 部分：使用 kubeadm 的 Kubernetes HA 集群
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2466" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2466)"/>

  <!-- Decorations -->
  <g>
    <circle cx="816" cy="198" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1032" cy="254" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="748" cy="50" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="964" cy="106" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="680" cy="162" r="26" fill="#2dd4bf" opacity="0.05"/>
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：加入新增控制平面和工作器</tspan>
      <tspan x="60" dy="42">節點</tspan>
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
<li>✅ 再加入 2 個控制平面節點，形成 3 個 master 的 HA 叢集</li>
<li>✅ 將工作節點加入叢集__HTMLTAG_75___
<li>✅ 驗證 etcd 叢集 3 成員是否正常運作</li>
<li>✅ 檢查調度程序和控制器管理器的領導者選舉__HTMLTAG_79___
<li>✅ 根據正確的角色標記和污點節點</li>
</ul>

<hr>

<h2 id="phan-1-join-control-plane">第 1 部分：加入控制平面節點</h2>

<h3 id="11-chuan-bi-tren-master2-master3">1.1。在 master2 和 master3 上準備</h3>
<p>確保master2和master3已完成：</p>
<ul>
<li>✅ 作業系統調整（第 3 課）</li>
<li>✅ containerd + kubeadm 安裝（第 5 課）</li>
<li>✅ 可以連接到 VIP 10.10.20.100:6443</li>
</ul>

___程式碼區塊_0___

<h3 id="12-join-master2">1.2。將master2加入控制平面</h3>
___程式碼區塊_1___

<p>⚠️ <strong>--apiserver-advertise-address</strong>：每個主機在叢集網路上使用自己的 IP。 </p>

<h3 id="13-join-master3">1.3。將master3加入控制平面</h3>
___程式碼區塊_2___

<h3 id="14-setup-kubeconfig-tren-master2-master3">1.4。在 master2 和 master3 上設定 kubeconfig</h3>
___程式碼區塊_3___

<hr>

<h2 id="phan-2-token-het-han">第 2 部分：處理過期令牌</h2>

<h3 id="21-tao-token-moi">2.1。建立新令牌（如果令牌過期）</h3>
___程式碼區塊_4___

<hr>

<h2 id="phan-3-join-worker-nodes">第 3 部分：加入工作節點</h2>

<h3 id="31-join-workers">3.1。加入worker1、worker2、worker3</h3>
___程式碼區塊_5___

<h3 id="32-verify-all-nodes">3.2。驗證所有節點</h3>
___程式碼區塊_6___

<hr>

<h2 id="phan-4-verify-etcd-cluster">第 4 部分：驗證 ETCD 叢集</h2><h3 id="41-etcd-member-list">4.1。 etcd 成員列表</h3>
___程式碼區塊_7___

<h3 id="42-etcd-endpoint-health">4.2。 etcd 端點運轉狀況</h3>
___程式碼區塊_8___

<h3 id="43-etcd-endpoint-status">4.3。 etcd 端點狀態（領導者檢查）</h3>
___程式碼區塊_9___

<hr>

<h2 id="phan-5-leader-election">第 5 部分：領導者選舉驗證</h2>

<h3 id="51-check-controller-manager-leader">5.1。檢查控制器管理器領導</h3>
___程式碼區塊_10___

<h3 id="52-test-ha-failover">5.2。測試 HA 故障轉移</h3>
___程式碼區塊_11___

<hr>

<h2 id="phan-6-label-va-taint-nodes">第 6 部分：標籤和污點節點</h2>

<h3 id="61-label-worker-nodes">6.1。標記工作節點</h3>
___程式碼區塊_12___

<h3 id="62-kiem-tra-taints">6.2。檢查污點</h3>
___程式碼區塊_13___

<hr>

<h2 id="phan-7-haproxy-verify">第 7 部分：驗證 HAPROXY 後端</h2>

___程式碼區塊_14___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_150__HTMLTAG_151___加入控制平面</strong>需要加入<code>--control-plane --certificate-key___HTMLTAG_154__HTMLTAG_155___
___HTMLTAG_156__HTMLTAG_157___令牌將在 24 小時後過期</strong>，憑證金鑰將在 2 小時後過期 - 如果需要，請建立新的</li>
___HTMLTAG_160__HTMLTAG_161___etcd 3 個成員</strong> 允許叢集承受 1 個成員宕機（法定人數 = 2）</li>
___HTMLTAG_164__HTMLTAG_165___領導者選舉</strong>自動：領導者宕機時調度程序和控制器管理器故障轉移</li>
___HTMLTAG_168__HTMLTAG_169___標籤和污點</strong>節點具有幫助準確調度的正確角色</li>
___HTMLTAG_172__HTMLTAG_173___NotReady 狀態</strong> 是正常的 — 需要安裝 CNI（第 8 課）才能轉換為 Ready</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_179___

<h3 id="bt1">練習 1：加入完整集群__HTMLTAG_181___
<ul>
<li>將master2和master3加入控制平面__HTMLTAG_184___
<li>加入worker1、worker2、worker3</li>
<li>驗證 kubectl get 節點顯示 6 個節點</li>
</ul>

<h3 id="bt2">練習 2：etcd 運作狀況檢查</h3>
<ul>
<li>執行etcdctl成員清單、端點運作狀況、端點狀態</li>
<li>確定誰是 etcd 領導者__HTMLTAG_196___
</ul>

<h3 id="bt3">練習 3：HA 故障轉移測驗</h3>
<ul>
<li>停止 master1 上的 kubelet</li>
<li>透過 VIP 驗證叢集是否仍處於活動狀態</li>
<li>驗證領導者選舉到另一個master__HTMLTAG_206___
<li>再次啟動kubelet，驗證master1回傳__HTMLTAG_208___
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第8課：安裝Cilium CNI — eBPF網路</strong>中，我們將安裝Cilium作為容器網路接口，解決NotReady狀態並啟用NetworkPolicy。 </p>