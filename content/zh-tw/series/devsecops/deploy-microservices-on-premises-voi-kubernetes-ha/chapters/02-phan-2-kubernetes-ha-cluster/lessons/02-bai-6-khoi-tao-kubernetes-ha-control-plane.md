---
id: 019e1a00-aa01-7001-c001-k8sha000202
title: 第 6 課：初始化第一個 Kubernetes HA 控制平面
slug: bai-6-khoi-tao-kubernetes-ha-control-plane
description: 為 HA 拓撲建立 kubeadm-config.yaml，在 master1 上執行 kubeadm init，將控制平面端點作為 VIP，處理證書，複製 kubeconfig 並檢查第一個叢集狀態。
duration_minutes: 150
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai06-ha-control-plane.png
sort_order: 6
section_title: 第 2 部分：使用 kubeadm 的 Kubernetes HA 集群
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8567" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8567)"/>

  <!-- Decorations -->
  <g>
    <circle cx="840" cy="210" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1080" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="70" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1060" cy="130" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="170" x2="1100" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="200" x2="1050" y2="270" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="941.650635094611,107.5 941.650635094611,132.5 920,145 898.349364905389,132.5 898.349364905389,107.5 920,95" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 6 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：初始化 KUBERNETES HA 控制項</tspan>
      <tspan x="60" dy="42">第一架飛機</tspan>
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
<li>✅ 為 HA 拓樸建立 kubeadm 設定檔__HTMLTAG_73___
<li>✅ 成功初始化第一個控制平面</li>
<li>✅ 了解憑證結構與憑證輪替__HTMLTAG_77___
<li>✅ 複製 kubeconfig 並使用 kubectl 存取叢集</li>
<li>✅ 了解堆疊式 etcd 拓樸與外部 etcd</li>
</ul>

<hr>

<h2 id="phan-1-ha-topologies">第 1 部分：KUBERNETES HA 拓樸</h2>

<h3 id="11-stacked-etcd-vs-external-etcd">1.1。堆疊式 etcd 與外部 etcd</h3>

**選項 A：堆疊式 etcd**（大多數情況下建議）

___程式碼區塊_0___

> ✅ 伺服器很少 · ✅ 簡單 · ❌ etcd + API 耦合

**選項 B：外部 etcd**

___程式碼區塊_1___

> ✅ 隔離 · ✅ 獨立擴充 · ❌ 需要 6 台伺服器

<p>👉 <strong>為本課程選擇堆疊式 etcd</strong> — 簡單，足以滿足大多數生產工作負載。僅非常大的叢集（超過 100 個節點）才需要外部 etcd。 </p>

<hr>

<h2 id="phan-2-kubeadm-config">第 2 部分：建立 KUBEADM 設定</h2>

<h3 id="21-kubeadm-config-yaml">2.1。 kubeadm-config.yaml 詳細資料</h3>
___程式碼區塊_2___

<h3 id="22-giai-thich-cac-tham-so-quan-trong">2.2。重要參數解釋</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>參數</th>
<th>值</th>
<th>意義</th>
</tr>
</thead>
<tbody>
<tr>
<td>controlPlaneEndpoint</td>
<td>10.10.20.100:6443</td>
<td>HAProxy VIP — 所有組件都透過此處連接</td>
</tr>
<tr>
<td>podSubnet</td>
<td>10.244.0.0/16</td>
<td> Pod IP 的 CIDR（最多 65,534 個 Pod）</td>
</tr>
<tr>
<td>服務子網路</td>
<td>10.96.0.0/12</td>
<td>ClusterIP 服務的 CIDR（1,048,574 個 IP）</td>
</tr>
<tr>
<td>模式：ipvs</td>
<td>kube-proxy</td>
<td>IPVS 負載平衡（當服務很多時比 iptables 更好）</td>
</tr>
<tr>
<td>strictARP：正確</td>
<td>kube-proxy</td>
<td>MetalLB L2 模式所需</td>
</tr>
<tr>
<td>cgroup驅動程式：systemd</td>
<td>kubelet</td>
<td>符合containerd SystemdCgroup = true</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>⚠️ <strong>關鍵：</strong> <code>controlPlaneEndpoint</code> 必須指向 VIP (HAProxy)，而不是 master1 的 IP。這是 HA 的關鍵要素。 </p>

<hr>

<h2 id="phan-3-kubeadm-init">第 3 部分：叢集初始化</h2>

<h3 id="31-tao-audit-log-directory">3.1。建立審核日誌目錄</h3>
___程式碼區塊_3___

<h3 id="32-chay-kubeadm-init">3.2。運行 kubeadm init</h3>
___程式碼區塊_4___

<p>⚠️ <strong>立即呼叫：___HTMLTAG_178__HTMLTAG_179___
<ul>
___HTMLTAG_181__HTMLTAG_182___--token</code>：用於加入節點（24小時後過期）</li>
___HTMLTAG_185__HTMLTAG_186___--discovery-token-ca-cert-hash</code>：CA 憑證的 SHA256 雜湊</li>
___HTMLTAG_189__HTMLTAG_190___--certificate-key</code>：用於加入控制平面節點（2小時後過期）</li>
</ul>

<h3 id="33-setup-kubeconfig">3.3。設定 kubeconfig</h3>
___程式碼區塊_5___

<hr>

<h2 id="phan-4-certificates-deep-dive">第 4 部分：憑證結構</h2>

<h3 id="41-kien-truc-certificates">4.1。架構證書</h3>
___程式碼區塊_6___

<h3 id="42-kiem-tra-certificate-expiry">4.2。檢查憑證是否過期</h3>
___程式碼區塊_7___

<hr>

<h2 id="phan-5-verify-ha-readiness">第 5 部分：驗證 HA 準備情況</h2>

<h3 id="51-kiem-tra-api-server-qua-vip">5.1。透過 VIP 檢查 API 伺服器</h3>
___程式碼區塊_8___

<h3 id="52-luu-join-commands">5.2。保存連線命令（重要！）</h3>
___程式碼區塊_9___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_214__HTMLTAG_215___controlPlaneEndpoint</strong> 必須指向 VIP (HAProxy)，而不是特定 IP</li>
___HTMLTAG_218__HTMLTAG_219___堆疊式 etcd</strong> 對於大多數部署而言足夠好，etcd 在控制平面上運行</li>
___HTMLTAG_222__HTMLTAG_223___--upload-certs</strong> 標誌自動分發用於加入控制平面的憑證</li>
___HTMLTAG_226__HTMLTAG_227___令牌將在 24 小時後過期</strong>，憑證金鑰將在 2 小時後過期 — 必須盡快儲存並加入節點</li>
___HTMLTAG_230__HTMLTAG_231___ipvs 模式 + strictARP</strong> 對於 kube-proxy 是 MetalLB 的要求</li>
___HTMLTAG_234__HTMLTAG_235___節點狀態NotReady</strong>在安裝CNI (Cilium)之前是正常的</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：初始化控制平面__HTMLTAG_243___
<ul>
<li>在 master1 上建立 kubeadm-config.yaml</li>
<li>執行 kubeadm init --config --upload-certs</li>
<li>設定 kubeconfig，驗證 kubectl 取得節點</li>
<li>呼叫連線指令</li>
</ul>

<h3 id="bt2">練習 2：驗證憑證</h3>
<ul>
<li>列出 /etc/kubernetes/pki/</li> 中的所有憑證
<li>執行 kubeadm 憑證檢查過期</li>
<li>透過 VIP 驗證 API 伺服器：curl -sk https://VIP:6443/healthz</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第7課：加入控制平面與工作節點</strong>中，我們將master2、master3加入HA控制平面並將工作節點加入叢集。 </p>