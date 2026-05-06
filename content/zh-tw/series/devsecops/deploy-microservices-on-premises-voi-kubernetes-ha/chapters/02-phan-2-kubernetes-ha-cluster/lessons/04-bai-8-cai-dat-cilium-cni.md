---
id: 019e1a00-aa01-7001-c001-k8sha000204
title: 第 8 課：安裝 CILIUM CNI — eBPF 網絡
slug: bai-8-cai-dat-cilium-cni
description: 使用 eBPF 而非 kube-proxy 安裝 Cilium CNI，啟用 Hubble 可觀測性，設定 NetworkPolicy L3/L4/L7，並驗證 Pod 到 Pod 網路是否正常運作。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 第 2 部分：使用 kubeadm 的 Kubernetes HA 集群
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-501" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-501)"/>

  <!-- Decorations -->
  <g>
    <circle cx="964" cy="182" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="828" cy="146" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="692" cy="110" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="1056" cy="74" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="920" cy="38" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="222" x2="1100" y2="302" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="252" x2="1050" y2="322" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1004.0429399400242,153.5 1004.0429399400242,190.5 972,209 939.9570600599758,190.5 939.9570600599758,153.5 972,135" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：CILIUM CNI 設定 — eBPF</tspan>
      <tspan x="60" dy="42">網路</tspan>
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
<li>✅ 了解 eBPF 以及為何 Cilium 優於傳統 CNI</li>
<li>✅ 使用 Helm 安裝 Cilium 並驗證連線</li>
<li>✅ 將 kube-proxy 替換為 Cilium eBPF</li>
<li>✅ 啟用 Hubble 進行網路觀測</li>
<li>✅ 編寫 NetworkPolicy L3/L4/L7</li>
</ul>

<hr>

<h2 id="phan-1-tai-sao-cilium">第 1 部分：為什麼選擇 CILIUM？ </h2>

<h3 id="11-so-sanh-cni">1.1。比較流行的 CNI</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>標準__HTMLTAG_93___
<th>印花布</th>
<th>法蘭絨</th>
<th>纖毛</th>
</tr>
</thead>
<tbody>
<tr>
<td>資料平面</td>
<td>iptables/eBPF</td>
<td>VXLAN</td>
<td>eBPF 本機</td>
</tr>
<tr>
<td>網路策略</td>
<td>L3/L4</td>
<td>❌ 不支援</td>
<td>L3/L4/L7</td>
</tr>
<tr>
<td>效能</td>
<td>好</td>
<td>平均</td>
<td>優秀</td>
</tr>
<tr>
<td>可觀察性</td>
<td>基本</td>
<td>❌</td>
<td>哈伯（深）</td>
</tr>
<tr>
<td>kube-proxy 取代</td>
<td>❌</td>
<td>❌</td>
<td>✅ 完整</td>
</tr>
<tr>
<td>加密 (WireGuard)</td>
<td>✅</td>
<td>❌</td>
<td>✅ 原生</td>
</tr>
<tr>
<td>服務網格整合</td>
<td>❌</td>
<td>❌</td>
<td>✅ Istio/Envoy</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="12-ebpf-la-gi">1.2。什麼是 eBPF？ </h3>
___程式碼區塊_0___

<hr>

<h2 id="phan-2-cai-dat-cilium">第 2 部分：纖毛設定</h2>

<h3 id="21-cai-helm">2.1。安裝 Helm</h3>
___程式碼區塊_1___

<h3 id="22-xoa-kube-proxy">2.2。刪除 kube-proxy（可選 — 替換為 Cilium）</h3>
___程式碼區塊_2___

<h3 id="23-cai-cilium-bang-helm">2.3。使用 Helm 安裝 Cilium</h3>
___程式碼區塊_3___

<h3 id="24-giai-thich-tham-so">2.4。重要參數解釋</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>參數</th>
<th>值</th>
<th>意義__HTMLTAG_198___
</tr>
</thead>
<tbody>
<tr>
<td>kubeProxyReplacement</td>
<td>正確</td>
<td>Cilium 完全取代 kube-proxy__HTMLTAG_208___
</tr>
<tr>
<td>k8sServiceHost</td>
<td>10.10.20.100</td>
<td>VIP (HAProxy) 到 Cilium 連線 API 伺服器</td>
</tr>
<tr>
<td>ipam.模式</td>
<td>kubernetes</td>
<td>使用 K8s IPAM（適合本地部署）</td>
</tr>
<tr>
<td>hubble.relay.enabled</td>
<td>正確</td>
<td>啟用 Hubble Relay 進行流量聚合</td>
</tr>
<tr>
<td>hubble.ui.enabled</td>
<td>正確</td>
<td>啟用 Hubble UI（網頁儀表板）</td>
</tr>
<tr>
<td>operator.replicas__HTMLTAG_244___
<td>2</td>
<td>Cilium 操作員的 HA</td>
</tr>
<tr>
<td>bpf.masquerade</td>
<td>正確</td>
<td>eBPF 偽裝替換 iptables SNAT</td>
</tr>
<tr>
<td>loadBalancer.algorithm</td>
<td>磁浮</td>
<td>一致的雜湊可減少擴充時的中斷</td>
</tr>
<tr>
<td>頻寬管理器</td>
<td>已啟用 + bbr</td>
<td>基於EDT的速率限制+BBR擁塞控制</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="25-verify-cilium-installation">2.5。驗證 Cilium 安裝</h3>
___程式碼區塊_4___

<hr>

<h2 id="phan-3-cilium-cli">第 3 部分：CILIUM CLI — 連結性測試</h2>

<h3 id="31-cai-cilium-cli">3.1。安裝 Cilium CLI</h3>
___程式碼區塊_5___

<h3 id="32-cilium-status">3.2。纖毛狀態</h3>
___程式碼區塊_6___

<h3 id="33-connectivity-test">3.3。連線測試</h3>
___程式碼區塊_7___

<hr>

<h2 id="phan-4-hubble-observability">第 4 部分：哈伯可觀測性</h2>

<h3 id="41-cai-hubble-cli">4.1。安裝 Hubble CLI</h3>
___程式碼區塊_8___

<h3 id="42-xem-network-flows">4.2。查看網路流量</h3>
___程式碼區塊_9___

<h3 id="43-hubble-ui">4.3。哈伯使用者介面</h3>
___程式碼區塊_10___

<hr>

<h2 id="phan-5-network-policy">第 5 部分：CILIUM 的網路策略</h2>

<h3 id="51-deploy-test-apps">5.1。部署測試應用程式</h3>
___程式碼區塊_11___

<h3 id="52-deny-all-policy">5.2。預設拒絕所有策略</h3>
___程式碼區塊_12___

___程式碼區塊_13___

<h3 id="53-allow-frontend-to-backend">5.3。允許前端 → 後端</h3>
___程式碼區塊_14___

___程式碼區塊_15___

<h3 id="54-cilium-l7-policy">5.4。 Cilium L7 策略（HTTP 感知）</h3>
___程式碼區塊_16___

___程式碼區塊_17___

<hr>

<h2 id="phan-6-troubleshooting">第 6 部分：故障排除</h2>

<h3 id="61-common-issues">6.1。常見問題</h3>
___程式碼區塊_18___<h3 id="62-cleanup-test">6.2。清理測試資源</h3>
___程式碼區塊_19___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_319__HTMLTAG_320___Cilium eBPF</strong> 優越：O(1) 查找，取代 kube-proxy，L7 策略</li>
___HTMLTAG_323__HTMLTAG_324___kubeProxyReplacement=true</strong>：Cilium 處理所有服務，不需要 kube-proxy</li>
___HTMLTAG_327__HTMLTAG_328___Hubble</strong> 實現深度可觀察性 — 查看流量、DNS 查詢、HTTP 請求</li>
___HTMLTAG_331__HTMLTAG_332___網路策略</strong>：預設拒絕 + 白名單是最佳做法</li>
___HTMLTAG_335__HTMLTAG_336___CiliumNetworkPolicy</strong> 擴充 K8s NetworkPolicy 新增 L7 規則（HTTP、gRPC、Kafka）</li>
___HTMLTAG_339__HTMLTAG_340___cilium 連線測試__HTMLTAG_341___：執行 46 項測試以自動驗證網路</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：安裝 Cilium</h3>
<ul>
<li>安裝 Helm，使用 kubeProxyReplacement 安裝 Cilium</li>
<li>驗證所有節點就緒</li>
<li>執行 cilium 狀態和 cilium 連線測試</li>
</ul>

<h3 id="bt2">練習 2：網路策略實驗室</h3>
<ul>
<li>建立命名空間並部署 3 個 Pod（前端、後端、資料庫）</li>
<li>應用預設拒絕所有</li>
<li>建立策略：前端→後端 (HTTP GET)，後端→資料庫 (TCP 5432)</li>
<li>驗證只有授權流量才有效</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 9 課：MetalLB — 適用於本地的 LoadBalancer</strong> 中，我們將安裝 MetalLB 以在叢集外部公開類型為 LoadBalancer 的服務。 </p>