---
id: 019e1a00-aa01-7001-c001-k8sha000102
title: 第 2 課：規劃硬體與網路拓撲
slug: bai-2-lap-ke-hoach-phan-cung-va-network-topology
description: 計算控制平面、工作節點、儲存節點的 CPU/RAM/磁碟。網路拓撲設計：管理網路、叢集網路、儲存網路、外部網路。用於生產的 VLAN、綁定、MTU 大小調整。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 2
section_title: 第 1 部分：本地平台和基礎設施設計
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4678" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4678)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1069" cy="217" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1038" cy="106" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1007" cy="255" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="976" cy="144" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="945" cy="33" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="87" x2="1100" y2="167" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="117" x2="1050" y2="187" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="973.3730669589464,116 973.3730669589464,158 937,179 900.6269330410536,158 900.6269330410536,116.00000000000001 937,95" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 2 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 2 課：規劃硬體與網路</tspan>
      <tspan x="60" dy="42">拓樸</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：平台和平臺本地基礎設施設計</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<p>完成本課程後，您將：</p>
<ul>
<li>✅ 計算每種類型節點（控制平面、工作執行緒、儲存）的準確大小</li>
<li>✅ 設計具有 VLAN 分離的生產級網路拓撲__HTMLTAG_75___
<li>✅ 設定 NIC 綁定以實現 HA 網路</li>
<li>✅ 了解並為每個網段選擇適當的 MTU</li>
<li>✅ 為實際專案建立完整的硬體計畫</li>
</ul>

<hr>

<h2 id="phan-1-sizing-control-plane-nodes">第 1 部分：調整控制平面節點</h2>

<h3 id="11-thanh-phan-chay-tren-control-plane">1.1。在控制平面上運行的元件</h3>

___程式碼區塊_0___

<h3 id="12-tinh-toan-resources-cho-control-plane">1.2。計算控制平面的資源</h3>

<h4 id="etcd-la-thanh-phan-critical-nhat">etcd 是最關鍵的元素__HTMLTAG_91___
<p>etcd 效能主要取決於磁碟 I/O。以下是 etcd 文件中的大小調整指南：</p><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>簇大小</th>
<th>節點</th>
<th>Pod</th>
<th>etcd CPU</th>
<th>etcd RAM</th>
<th>etcd 磁碟</th>
<th>磁碟類型</th>
</tr>
</thead>
<tbody>
<tr>
<td>小</td>
<td>< 10</td>
<td>< 500</td>
<td>2 核</td>
<td>4GB</td>
<td>50GB</td>
<td>SSD</td>
</tr>
<tr>
<td>中</td>
<td>10-50</td>
<td>500-5000</td>
<td>4 核</td>
<td>8GB</td>
<td>100GB</td>
<td>NVMe SSD</td>
</tr>
<tr>
<td>大</td>
<td>50-100</td>
<td>5000+</td>
<td>8 個核心</td>
<td>16GB</td>
<td>200GB</td>
<td>NVMe SSD</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>⚠️ <strong>嚴重：</strong> etcd 需要磁碟延遲 p99 < 10ms. Dùng NVMe SSD chuyên dụng cho etcd.</p>

<h4 id="kube-apiserver-sizing">kube-apiserver 大小調整</h4>
___程式碼區塊_1___

<h4 id="tong-hop-control-plane-node">控制平面節點大小調整的綜合</h4><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>組件</th>
<th>CPU 請求</th>
<th>CPU 限制</th>
<th>RAM 請求</th>
<th>RAM 限制</th>
</tr>
</thead>
<tbody>
<tr>
<td>kube-apiserver__HTMLTAG_193___
<td>250m</td>
<td>2000公尺</td>
<td>512Mi</td>
<td>4Gi</td>
</tr>
<tr>
<td>etcd</td>
<td>500m</td>
<td>4000公尺</td>
<td>1Gi</td>
<td>8Gi</td>
</tr>
<tr>
<td>kube 調度程式</td>
<td>100公尺</td>
<td>500公尺</td>
<td>128Mi</td>
<td>512Mi</td>
</tr>
<tr>
<td>kube-controller-manager</td>
<td>200m</td>
<td>1000公尺</td>
<td>256Mi</td>
<td>1Gi</td>
</tr>
<tr>
<td>kubelet + 容器</td>
<td>200米</td>
<td>500米</td>
<td>256Mi</td>
<td>1Gi</td>
</tr>
<tr>
<td>纖毛劑</td>
<td>100m</td>
<td>500米</td>
<td>256Mi</td>
<td>1Gi</td>
</tr>
<tr>
<td>作業系統開銷</td>
<td>500米</td>
<td>-</td>
<td>1Gi</td>
<td>-</td>
</tr>
<tr>
___HTMLTAG_276__HTMLTAG_277___總計___HTMLTAG_278__HTMLTAG_279___
___HTMLTAG_280__HTMLTAG_281___~2 核____HTMLTAG_282__HTMLTAG_283___
___HTMLTAG_284__HTMLTAG_285___~8 核___HTMLTAG_286__HTMLTAG_287___
___HTMLTAG_288__HTMLTAG_289___~3.5Gi___HTMLTAG_290__HTMLTAG_291___
___HTMLTAG_292__HTMLTAG_293___~16Gi___HTMLTAG_294__HTMLTAG_295___
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>💡 <strong>生產建議：___HTMLTAG_302__HTMLTAG_303___
___程式碼區塊_2___

<hr>

<h2 id="phan-2-sizing-worker-nodes">第 2 部分：調整工作節點的大小</h2>

<h3 id="21-tinh-toan-tu-workload">2.1。根據工作負載要求計算</h3>

<p>Worker節點計算公式：</p>
___程式碼區塊_3___

<h3 id="22-sizing-guidelines-theo-quy-mo">2.2。依尺寸劃分的尺寸指南</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>規模</th>
<th>服務</th>
<th>工人</th>
<th>CPU/節點</th>
<th>RAM/節點</th>
<th>磁碟/節點</th>
</tr>
</thead>
<tbody>
<tr>
<td>小型（實驗室）</td>
<td>5-10</td>
<td>3</td>
<td>8 核</td>
<td>32GB</td>
<td>200GB SSD</td>
</tr>
<tr>
<td>中</td>
<td>10-30</td>
<td>5-8</td>
<td>16 核</td>
<td>64GB</td>
<td>500GB NVMe</td>
</tr>
<tr>
<td>大</td>
<td>30-100</td>
<td>10-20</td>
<td>32 個核心</td>
<td>128GB</td>
<td>1TB NVMe</td>
</tr>
<tr>
<td>超大</td>
<td>100+</td>
<td>20+</td>
<td>64 核</td>
<td>256GB</td>
<td>2TB NVMe</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="23-system-reserved-resources">2.3。系統保留資源</h3>
<p>Kubernetes 需要為每個節點上的系統元件預留資源：</p>

___程式碼區塊_4___

___程式碼區塊_5___

<hr>

<h2 id="phan-3-sizing-storage-nodes">第 3 部分：調整儲存節點 (CEPH)</h2>

<h3 id="31-ceph-components-tren-storage-nodes">3.1。儲存節點上的 Ceph 元件</h3>
___程式碼區塊_6___

<h3 id="32-tinh-toan-storage-capacity">3.2。計算儲存容量</h3>
___程式碼區塊_7___

<h3 id="33-sizing-ceph-osd-nodes">3.3。調整 Ceph OSD 節點的大小</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>組件</th>
<th>尺寸規則</th>
<th>範例（4 個 OSD/節點）</th>
</tr>
</thead>
<tbody>
<tr>
<td>每個 OSD 的 CPU</td>
<td>每個 OSD 1 個核心（分鐘）</td>
<td>4 個 OSD 核心</td>
</tr>
<tr>
<td>每個 OSD 的 RAM</td>
<td>每個 OSD 5GB（BlueStore 預設）</td>
<td>20GB 用於 OSD</td>
</tr>
<tr>
<td>Ceph MON RAM</td>
<td>~2-4GB</td>
<td>4GB</td>
</tr>
<tr>
<td>系統 + K8s</td>
<td>~4GB RAM，2 核心</td>
<td>4GB，2 核</td>
</tr>
<tr>
___HTMLTAG_450__HTMLTAG_451___每個節點總計___HTMLTAG_452__HTMLTAG_453___
___HTMLTAG_454__HTMLTAG_455___
___HTMLTAG_456__HTMLTAG_457___6 核，28GB RAM___HTMLTAG_458__HTMLTAG_459___
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>💡 <strong>推薦：___HTMLTAG_466__HTMLTAG_467___
___程式碼區塊_8___<p>⚠️ <strong>重要決定：</strong> 專用儲存節點與融合（工作節點 + 儲存）？ </p>
___程式碼區塊_9___

<hr>

<h2 id="phan-4-network-topology-design">第 4 部分：網路拓樸設計</h2>

<h3 id="41-4-networks-cho-production">4.1。 4 用於生產的網路</h3>

___程式碼區塊_10___

<h3 id="42-ip-planning">4.2。 IP規劃詳情</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Node</th>
<th>管理（VLAN 10）</th>
<th>叢集 (VLAN 20)</th>
<th>儲存（VLAN 30）</th>
<th>角色</th>
</tr>
</thead>
<tbody>
<tr>
<td>lb1</td>
<td>192.168.10.9</td>
<td>10.10.20.9</td>
<td>-</td>
<td>HAProxy/keepalived 主</td>
</tr>
<tr>
<td>lb2</td>
<td>192.168.10.10</td>
<td>10.10.20.10</td>
<td>-</td>
<td>HAProxy/keepalived 備份</td>
</tr>
<tr>
<td>VIP</td>
<td>-</td>
<td>10.10.20.100</td>
<td>-</td>
<td>K8s API 伺服器 VIP</td>
</tr>
<tr>
<td>master1</td>
<td>192.168.10.11</td>
<td>10.10.20.11</td>
<td>-</td>
<td>控制平面 1</td>
</tr>
<tr>
<td>master2</td>
<td>192.168.10.12</td>
<td>10.10.20.12</td>
<td>-</td>
<td>控制平面 2</td>
</tr>
<tr>
<td>master3</td>
<td>192.168.10.13</td>
<td>10.10.20.13</td>
<td>-</td>
<td>控制平面 3</td>
</tr>
<tr>
<td>worker1</td>
<td>192.168.10.21</td>
<td>10.10.20.21</td>
<td>-</td>
<td>工作节点 1</td>
</tr>
<tr>
<td>worker2</td>
<td>192.168.10.22</td>
<td>10.10.20.22</td>
<td>-</td>
<td>Worker Node 2</td>
</tr>
<tr>
<td>worker3</td>
<td>192.168.10.23</td>
<td>10.10.20.23</td>
<td>-</td>
<td>工作节点 3</td>
</tr>
<tr>
<td>儲存1</td>
<td>192.168.10.31</td>
<td>10.10.20.31</td>
<td>10.10.30.31</td>
<td>Ceph OSD 節點 1</td>
</tr>
<tr>
<td>儲存2</td>
<td>192.168.10.32</td>
<td>10.10.20.32</td>
<td>10.10.30.32</td>
<td>Ceph OSD 節點 2</td>
</tr>
<tr>
<td>存储3</td>
<td>192.168.10.33</td>
<td>10.10.20.33</td>
<td>10.10.30.33</td>
<td>Ceph OSD 節點 3</td>
</tr>
<tr>
<td>MetalLB Pool</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>10.10.40.200-250</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html--><h3 id="43-nic-bonding-configuration">4.3。 NIC 綁定配置</h3>
<p>NIC 綁定 (LACP) 提供鏈路冗餘和頻寬聚合：</p>

___程式碼區塊_11___

___程式碼區塊_12___

<h3 id="44-mtu-sizing">4.4。 MTU 大小</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>網路</th>
<th>MTU</th>
<th>原因</th>
</tr>
</thead>
<tbody>
<tr>
<td>管理</td>
<td>1500</td>
<td>標準，與所有設備相容</td>
</tr>
<tr>
<td>叢集 (K8s)</td>
<td>9000</td>
<td>巨型幀可減少 CPU 開銷，提高吞吐量__HTMLTAG_688___
</tr>
<tr>
<td>儲存 (Ceph)</td>
<td>9000</td>
<td>對於 Ceph OSD 複製效能至關重要__HTMLTAG_696___
</tr>
<tr>
<td>外部</td>
<td>1500</td>
<td>面向互聯網的流量標準__HTMLTAG_704___
</tr>
<tr>
<td>Pod 網路 (Cilium)</td>
<td>8950</td>
<td>MTU 底層 (9000) - VXLAN 開銷 (50)</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>⚠️ <strong>巨型訊框需求：</strong> 路徑上的所有交換器連接埠必須支援並啟用 MTU 9000。部署前請與交換器管理員聯絡。 </p>

<hr>

<h2 id="phan-5-switch-va-firewall">第 5 部分：交換器和防火牆需求</h2>

<h3 id="51-switch-requirements">5.1。切換要求</h3>
___程式碼區塊_13___

<h3 id="52-firewall-rules">5.2。網路之間的防火牆規則</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>來源</th>
<th>目的地</th>
<th>埠</th>
<th>協定</th>
<th>目的</th>
</tr>
</thead>
<tbody>
<tr>
<td>管理</td>
<td>所有節點</td>
<td>22</td>
<td>TCP</td>
<td>SSH</td>
</tr>
<tr>
<td>外部</td>
<td>工人/LB</td>
<td>80、443</td>
<td>TCP</td>
<td>HTTP/HTTPS 入口</td>
</tr>
<tr>
<td>外部</td>
<td>VIP 大師</td>
<td>6443</td>
<td>TCP</td>
<td>K8s API（如果需要外部）</td>
</tr>
<tr>
<td>叢集</td>
<td>叢集</td>
<td>6443</td>
<td>TCP</td>
<td>K8s API 伺服器</td>
</tr>
<tr>
<td>叢集</td>
<td>叢集</td>
<td>2379-2380</td>
<td>TCP</td>
<td>etcd 對等點 &amp;客戶端</td>
</tr>
<tr>
<td>叢集</td>
<td>叢集</td>
<td>10250</td>
<td>TCP</td>
<td>kubelet API</td>
</tr>
<tr>
<td>集群</td>
<td>叢集</td>
<td>10259</td>
<td>TCP</td>
<td>kube-scheduler__HTMLTAG_827___
</tr>
<tr>
<td>叢集</td>
<td>集群</td>
<td>10257</td>
<td>TCP</td>
<td>kube-controller-manager</td>
</tr>
<tr>
<td>集群</td>
<td>集群</td>
<td>30000-32767</td>
<td>TCP</td>
<td>節點連接埠範圍</td>
</tr>
<tr>
<td>叢集</td>
<td>叢集</td>
<td>4240、4244</td>
<td>TCP</td>
<td>纖毛健康，哈伯</td>
</tr>
<tr>
<td>叢集</td>
<td>叢集</td>
<td>8472</td>
<td>UDP</td>
<td>Cilium VXLAN</td>
</tr>
<tr>
<td>儲存</td>
<td>儲存</td>
<td>6789</td>
<td>TCP</td>
<td>Ceph MO_</td>
</tr>
<tr>
<td>儲存</td>
<td>儲存</td>
<td>6800-7300</td>
<td>TCP</td>
<td>Ceph OSD</td>
</tr>
<tr>
<td>集群</td>
<td>儲存</td>
<td>6789,6800-7300</td>
<td>TCP</td>
<td>Ceph 用戶端存取</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html--><hr>

<h2 id="phan-6-disk-layout">第 6 部分：磁碟版面配置與分割區__HTMLTAG_918___

<h3 id="61-control-plane-disk">6.1。控制平面磁碟佈局</h3>
___程式碼區塊_14___

<h3 id="62-worker-node-disk">6.2。工作節點磁碟佈局</h3>
___程式碼區塊_15___

<h3 id="63-storage-node-disk">6.3。儲存節點磁碟佈局</h3>
___程式碼區塊_16___

<hr>

<h2 id="phan-7-bill-of-materials">第 7 部分：物料清單 (BOM)</h2>

<h3 id="71-bom-cho-production-medium">7.1。生產 BOM（中 - 20 個微服務）</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>#</th>
<th>組件</th>
<th>數量</th>
<th>規格</th>
<th>角色</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>伺服器（控制平面）</td>
<td>3</td>
<td>8C/32GB/500GB NVMe，2×10GbE</td>
<td>K8s 高手</td>
</tr>
<tr>
<td>2</td>
<td>伺服器（工作人員）</td>
<td>5</td>
<td>16C/64GB/500GB NVMe，2×25GbE</td>
<td>工作負載節點</td>
</tr>
<tr>
<td>3</td>
<td>伺服器（儲存）</td>
<td>3</td>
<td>8C/64GB/500GB NVMe + 4×2TB NVMe、2×25GbE</td>
<td>Ceph OSD</td>
</tr>
<tr>
<td>4</td>
<td>伺服器（LB）</td>
<td>2</td>
<td>4C/8GB/100GB SSD，2×10GbE</td>
<td>HAProxy/keepalived</td>
</tr>
<tr>
<td>5</td>
<td>ToR 開關</td>
<td>2</td>
<td>48×25GbE + 8×100GbE 上行鏈路</td>
<td>網路</td>
</tr>
<tr>
<td>6</td>
<td>UPS</td>
<td>2</td>
<td>3kVA線上雙變</td>
<td>電源保護</td>
</tr>
<tr>
<td>7</td>
<td>PDU</td>
<td>2</td>
<td>託管，雙饋送</td>
<td>電源分配</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

___HTMLTAG_1034__HTMLTAG_1035___總計：</strong> 13 台伺服器 + 2 台交換器 + 電源基礎設施</p>

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_1042__HTMLTAG_1043___控制平面</strong>需要用於etcd的NVMe SSD，8個以上內核，每個節點16-32GB RAM</li>
___HTMLTAG_1046__HTMLTAG_1047___Worker 大小</strong> 根據 pod 請求總數 + 30% 緩衝區 + 系統保留計算得出</li>
___HTMLTAG_1050__HTMLTAG_1051___Ceph 儲存</strong>每個 OSD 需要 5GB RAM，原始磁碟未格式化</li>
___HTMLTAG_1054__HTMLTAG_1055___4 個獨立網路</strong> 按 VLAN：管理、叢集、儲存、外部</li>
___HTMLTAG_1058__HTMLTAG_1059___NIC 綁定</strong> (LACP) 用於鏈路冗餘，巨型幀 9000 用於叢集/儲存</li>
___HTMLTAG_1062__HTMLTAG_1063___磁碟佈局：</strong> etcd 需要單獨分割區，Ceph 需要原始區塊裝置</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習__HTMLTAG_1069___

<h3 id="bt1">練習 1：計算尺寸</h3>
<p>適用於包含下列系統：</p>
<ul>
<li>30 個微服務，每個服務 2 個副本，平均 1 個 CPU/2GB RAM</li>
<li>PostgreSQL 3 個節點（每個節點 4 個 CPU/8GB RAM）</li>
<li>Kafka 3 個代理程式（每個 4 CPU/8GB RAM）</li>
<li>完整的可觀察性堆疊</li>
<li>資料保留：90 天日誌，1 年指標</li>
</ul>
<p>計算：工作節點數、儲存節點數、所需磁碟總容量.</p>

<h3 id="bt2">練習 2：網頁設計__HTMLTAG_1089___
<p>畫出上述系統的詳細網路拓樸圖，包括：</p>
<ul>
<li>每個網段的 VLAN 分配__HTMLTAG_1094___
<li>所有節點IP規劃表__HTMLTAG_1096___
<li>NIC 綁定拓樸</li>
<li>防火牆規則矩陣</li>
</ul>

<h3 id="bt3">練習 3：實驗室設定__HTMLTAG_1103___
<ul>
<li>使用第1課中的Vagrantfile，為儲存網路新增NIC</li>
<li>在虛擬機器上設定 VLAN（如果管理程式支援）</li>
<li>測試連線：所有網路之間的 ping、iperf3</li>
<li>驗證 MTU 9000 在叢集網路上正常運作</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第3課：準備Linux作業系統和系統調優</strong>中，我們將在安裝Kubernetes之前設定核心參數、關閉交換、設定NTP、SSH強化並準備所有節點。 </p>