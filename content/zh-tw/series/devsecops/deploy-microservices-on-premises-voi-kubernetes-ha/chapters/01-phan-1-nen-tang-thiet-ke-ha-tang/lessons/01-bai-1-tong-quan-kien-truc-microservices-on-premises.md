---
id: 019e1a00-aa01-7001-c001-k8sha000101
title: 第 1 課：微服務本地架構概述
slug: bai-1-tong-quan-kien-truc-microservices-on-premises
description: 比較本地、雲端與混合、微服務生產系統的核心元件（K8s、DB HA、儲存、訊息傳遞、可觀察性、安全性）、學習路徑和實驗室環境設定。
duration_minutes: 90
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai01-microservices-on-prem-overview.png
sort_order: 1
section_title: 第 1 部分：本地平台和基礎設施設計
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6986" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6986)"/>

  <!-- Decorations -->
  <g>
    <circle cx="980" cy="50" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="860" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="150" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="70" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="90" x2="1100" y2="170" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="120" x2="1050" y2="190" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1061.650635094611,227.5 1061.650635094611,252.5 1040,265 1018.349364905389,252.5 1018.349364905389,227.5 1040,215" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 1 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 1 課：微服務架構概論</tspan>
      <tspan x="60" dy="42">本地</tspan>
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
<li>✅ 了解微服務本地部署、雲端部署和混合部署之間的差異</li>
<li>✅ 了解生產系統的架構概述和所有核心組件</li>
<li>✅ 了解選擇堆疊中每種技術的原因（Kubernetes、Ceph、Patroni、Istio、ArgoCD...）</li>
<li>✅ 設定整個課程的實驗室環境</li>
<li>✅ 了解 50 課程的路線圖以及各部分之間的連結__HTMLTAG_81___
</ul>

<hr>

<h2 id="phan-1-tai-sao-on-premises">第 1 部分：為什麼選擇本地微服務？ </h2>

<h3 id="11-boi-canh-thuc-te">1.1。實際上下文</h3>
<p>在雲端原生時代，許多組織仍選擇本地部署，因為：</p>

___HTMLTAG_90__HTMLTAG_91___📊 實際統計資料（2025-2026）：___HTMLTAG_92__HTMLTAG_93___
<ul>
<li>~60% 的企業工作負載仍在本地或混合運行 (Gartner)</li>
<li>擴充時雲端成本每年增加 30-40% →「雲端回流」趨勢</li>
<li>受監管產業（金融、醫療保健、政府）需要資料主權__HTMLTAG_100___
<li>延遲敏感應用程式需要接近使用者/裝置</li>
</ul>

<h3 id="12-so-sanh-on-prem-vs-cloud-vs-hybrid">1.2。比較本地、雲端與混合</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>標準</th>
<th>本地</th>
<th>公有雲</th>
<th>混合</th>
</tr>
</thead>
<tbody>
<tr>
___HTMLTAG_122__HTMLTAG_123___初始成本（資本支出）___HTMLTAG_124__HTMLTAG_125___
<td>高（購買硬體）</td>
<td>低（即用即付）</td>
<td>平均</td>
</tr>
<tr>
___HTMLTAG_134__HTMLTAG_135___長期費用 (OpEx)___HTMLTAG_136__HTMLTAG_137___
<td>縮放時較低__HTMLTAG_139___
<td>高且不可預測__HTMLTAG_141___
<td>取決於工作負載</td>
</tr>
<tr>
___HTMLTAG_146__HTMLTAG_147___資料主權___HTMLTAG_148__HTMLTAG_149___
<td>✅ 完全控制__HTMLTAG_151___
<td>⚠️ 取決於區域</td>
<td>✅ 大部分是本地的</td>
</tr>
<tr>
___HTMLTAG_158__HTMLTAG_159___延遲___HTMLTAG_160__HTMLTAG_161___
<td>✅ 最低</td>
<td>取決於區域</td>
<td>適用於邊緣情況</td>
</tr>
<tr>
___HTMLTAG_170__HTMLTAG_171___自訂___HTMLTAG_172__HTMLTAG_173___
<td>✅ 無限制</td>
<td>受提供者限制</td>
<td>彈性__HTMLTAG_179___
</tr>
<tr>
___HTMLTAG_182__HTMLTAG_183___操作複雜性___HTMLTAG_184__HTMLTAG_185___
<td>❌ 高（自我管理）</td>
<td>✅ 低（託管）</td>
<td>最高</td>
</tr>
<tr>
___HTMLTAG_194__HTMLTAG_195___縮放速度___HTMLTAG_196__HTMLTAG_197___
<td>❌ 慢（購買硬體）</td>
<td>✅ 分鐘（自動縮放）</td>
<td>靈活</td>
</tr>
<tr>
___HTMLTAG_206__HTMLTAG_207___合規性___HTMLTAG_208__HTMLTAG_209___
<td>✅ 最容易回應</td>
<td>需要共同負責</td>
<td>好</td>
</tr>
<tr>
___HTMLTAG_218__HTMLTAG_219___供應商鎖定___HTMLTAG_220__HTMLTAG_221___
<td>✅ 否</td>
<td>❌ 高 (AWS/GCP/Azure)</td>
<td>平均</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html--><h3 id="13-khi-nao-chon-on-premises">1.3。您什么时候应该选择本地部署？ </h3>
___HTMLTAG_234__HTMLTAG_235___✅ 在下列情況下應選擇本機部署：___HTMLTAG_236__HTMLTAG_237___
<ul>
<li>工作負載穩定、可預測（不會不斷地上下波動）</li>
<li>高合規性要求（HIPAA、PCI-DSS、GDPR 資料駐留）</li>
<li>基礎設施投資（資料中心、伺服器、網路）</li>
<li>雲端每月費用超出門檻（~50K-100K+/月）</li>
<li>具有營運經驗的DevOps/SRE團隊__HTMLTAG_248___
<li>需要超低延遲 (< 1ms giữa services)</li>
</ul>

___HTMLTAG_252__HTMLTAG_253___❌ 在下列情況下請勿選擇本機：___HTMLTAG_254__HTMLTAG_255___
<ul>
<li>早期新創公司需加快上市速度</li>
<li>工作負載突發，難以預測__HTMLTAG_260___
<li>团队 < 5 người, không có infra engineer</li>
<li>PoC/MVP 需要快速部署__HTMLTAG_264___
</ul>

<hr>

<h2 id="phan-2-kien-truc-tong-the">第 2 部分：整體系統架構</h2>

<h3 id="21-so-do-kien-truc">2.1。总体架构图</h3>

___程式碼區塊_0___

<h3 id="22-cac-thanh-phan-cot-loi">2.2。核心组件和角色</h3>

<h4 id="layer-1-infrastructure">第 1 層：基礎設施基礎</h4>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>元素__HTMLTAG_280___
<th>技术</th>
<th>角色</th>
<th>课程__HTMLTAG_286___
</tr>
</thead>
<tbody>
<tr>
<td>容器運行時</td>
<td>容器 2.x</td>
<td>依 CRI 標準運作容器</td>
<td>第 5 课</td>
</tr>
<tr>
<td>K8s 编排__HTMLTAG_302___
<td>kubeadm（K8s 1.31+）</td>
<td>HA 控制平面、調度、自我修復__HTMLTAG_306___
<td>第 5-7 课</td>
</tr>
<tr>
<td>CNI 网络__HTMLTAG_312___
<td>Cilium (eBPF)</td>
<td>Pod 網路、NetworkPolicy、哈伯可觀測性__HTMLTAG_316___
<td>第 8 课</td>
</tr>
<tr>
<td>負載平衡器</td>
<td>金属LB</td>
<td>將外部 IP 授予裸機上的服務</td>
<td>第 9 课</td>
</tr>
<tr>
<td>API 伺服器 HA</td>
<td>keepalived + HAProxy</td>
<td>K8s API 端點的虛擬 IP__HTMLTAG_336___
<td>第 4 课</td>
</tr>
<tr>
<td>集群状态</td>
<td>etcd（3 個節點）</td>
<td>K8s 分散式鍵值儲存</td>
<td>第 10 课</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h4 id="layer-2-storage">第 2 層：分散式儲存</h4><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>元素__HTMLTAG_360___
<th>技術</th>
<th>角色</th>
<th>課程</th>
</tr>
</thead>
<tbody>
<tr>
<td>儲存編排器</td>
<td>車操作員</td>
<td>管理 K8s 上的 Ceph 生命週期</td>
<td>第 11-12 課</td>
</tr>
<tr>
<td>區塊儲存</td>
<td>Ceph RBD</td>
<td>PV 用於資料庫（PostgreSQL、etcd）</td>
<td>第 13 課</td>
</tr>
<tr>
<td>共享儲存</td>
<td>CephFS</td>
<td>ReadWriteMany 用於微服務__HTMLTAG_396___
<td>第 14 課</td>
</tr>
<tr>
<td>物件儲存</td>
<td>Ceph RGW (S3)</td>
<td>備份、Loki 日誌、Thanos 指標</td>
<td>第 15 課</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h4 id="layer-3-data">第 3 層：資料層</h4>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>元素</th>
<th>技術</th>
<th>角色</th>
<th>課程__HTMLTAG_426___
</tr>
</thead>
<tbody>
<tr>
<td>主資料庫</td>
<td>PostgreSQL 高可用性 (CloudNativePG)</td>
<td>ACID 事務，關係資料</td>
<td>第 16-17 課</td>
</tr>
<tr>
<td>連線池</td>
<td>PgBouncer</td>
<td>連線池，減少資料庫負載__HTMLTAG_446___
<td>第 18 課</td>
</tr>
<tr>
<td>資料庫備份</td>
<td>pgBackRest</td>
<td>完整/增量備份，PITR</td>
<td>第 19 課</td>
</tr>
<tr>
<td>訊息佇列</td>
<td>RabbitMQ HA</td>
<td>非同步訊息傳遞、任務佇列__HTMLTAG_466___
<td>第 21 課</td>
</tr>
<tr>
<td>事件流</td>
<td>卡夫卡 (Strimzi)</td>
<td>事件溯源、日誌聚合</td>
<td>第 22 課</td>
</tr>
<tr>
<td>快取</td>
<td>Redis HA</td>
<td>快取、會話儲存、速率限制__HTMLTAG_486___
<td>第 23 課</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h4 id="layer-4-networking">第 4 層：服務網格與網路</h4><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>元素</th>
<th>技術</th>
<th>角色</th>
<th>課程__HTMLTAG_506___
</tr>
</thead>
<tbody>
<tr>
<td>服務格</td>
<td>Istio</td>
<td>mTLS、流量管理、可觀測性__HTMLTAG_516___
<td>第 24-25 課</td>
</tr>
<tr>
<td>入口控制器</td>
<td>NGINX 入口</td>
<td>HTTP/HTTPS 路由到叢集</td>
<td>第 26 課</td>
</tr>
<tr>
<td>TLS 自動化</td>
<td>憑證管理器</td>
<td>自動核發/續訂憑證</td>
<td>第 26 課</td>
</tr>
<tr>
<td>網關 API</td>
<td>Istio + 網關 API</td>
<td>下一代入口，金絲雀路由</td>
<td>第 27 課</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h4 id="layer-5-platform">第 5 層：平台操作</h4><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>元素__HTMLTAG_560___
<th>技術</th>
<th>角色</th>
<th>課程</th>
</tr>
</thead>
<tbody>
<tr>
<td>GitOps</td>
<td>ArgoCD HA</td>
<td>來自 Git 的宣告式部署</td>
<td>第 28、30 課</td>
</tr>
<tr>
<td>包裝</td>
<td>頭盔</td>
<td>K8s 清單範本</td>
<td>第 29 課</td>
</tr>
<tr>
<td>秘密</td>
<td>Vault HA + ESO</td>
<td>集中式機密管理</td>
<td>第 31 課</td>
</tr>
<tr>
<td>指標</td>
<td>普羅米修斯 HA + 薩諾斯</td>
<td>指標收集，長期儲存</td>
<td>第 32 課</td>
</tr>
<tr>
<td>儀表板</td>
<td>Grafana HA</td>
<td>可視化、警報</td>
<td>第 33 課</td>
</tr>
<tr>
<td>日誌</td>
<td>洛基 + 合金</td>
<td>集中日誌聚合</td>
<td>第 34 課</td>
</tr>
<tr>
<td>痕跡</td>
<td>節奏 + OpenTelemetry__HTMLTAG_634___
<td>分散式追蹤</td>
<td>第 35 課</td>
</tr>
<tr>
<td>政策</td>
<td>Kyverno</td>
<td>存取控制，策略即程式碼</td>
<td>第 37 課</td>
</tr>
<tr>
<td>運行時安全性</td>
<td>法爾科</td>
<td>威脅偵測</td>
<td>第 38 課</td>
</tr>
<tr>
<td>影像安全</td>
<td>Trivy + Harbor</td>
<td>漏洞掃描，私有註冊表</td>
<td>第 39 課</td>
</tr>
<tr>
<td>備份</td>
<td>Velero</td>
<td>叢集備份/還原</td>
<td>第 44 課</td>
</tr>
<tr>
<td>混沌測驗</td>
<td>混沌網格</td>
<td>彈性驗證</td>
<td>第 45 課</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-3-tai-sao-chon-tung-cong-nghe">第 3 部分：為什麼選擇每種技術？ </h2>

<h3 id="31-kubernetes-kubeadm-vs-managed">3.1。 Kubernetes (kubeadm) — 為什麼不使用託管 K8？ </h3>
<p>本地沒有 EKS/GKE/AKS。選項：</p><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>工具</th>
<th>優點</th>
<th>缺點</th>
<th>相關</th>
</tr>
</thead>
<tbody>
<tr>
___HTMLTAG_716__HTMLTAG_717___kubeadm___HTMLTAG_718__HTMLTAG_719___
<td>官方K8s工具，靈活，生產級</td>
<td>手動設置，需要深入理解</td>
<td>✅ 製作</td>
</tr>
<tr>
<td>k3s</td>
<td>輕量級，易於安裝__HTMLTAG_731___
<td>刪除功能，使用 SQLite 取代 etcd</td>
<td>邊緣/物聯網</td>
</tr>
<tr>
<td>RKE2</td>
<td>FIPS 相容，Rancher 整合</td>
<td>供應商特定</td>
<td>Rancher 使用者</td>
</tr>
<tr>
<td>Kubespray</td>
<td>基於 Ansible，可重現</td>
<td>緩慢、Ansible 複雜性</td>
<td>大型叢集</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>👉 <strong>選擇kubeadm</strong>因為：官方工具，生產級，有助於最深入地了解K8s內部。 </p>

<h3 id="32-cilium-vs-calico-vs-flannel">3.2。 Cilium CNI — 為什麼不是 Calico 或 Flannel？ </h3>
___程式碼區塊_1___

<h3 id="33-rook-ceph-vs-longhorn-vs-nfs">3.3。 Rook-Ceph — 為什麼不是 Longhorn 或 NFS？ </h3>
___程式碼區塊_2___

<h3 id="34-istio-vs-linkerd">3.4。 Istio — 為什麼不是 Linkerd？ </h3>
___程式碼區塊_3___

<hr>

<h2 id="phan-4-lab-environment-setup">第 4 部分：環境實驗室設定</h2>

<h3 id="41-minimum-hardware-cho-lab">4.1。實驗室的最低硬體</h3>
<p>您至少需要以下資源來練習整個課程：</p>

<h4 id="option-a-vms-khuyen-nghi">選項 A：功能強大的主機上的虛擬機器（建議）</h4>

___程式碼區塊_4___

___HTMLTAG_779__HTMLTAG_780___總計：</strong> ~26 個 vCPU、58GB RAM、520GB 磁碟</p>

<h4 id="option-b-cloud-vms">選項 B：雲端虛擬機器 (AWS/GCP/Hetzner)</h4>
___程式碼區塊_5___

<h4 id="option-c-bare-metal-production">選項 C：裸機（類似生產）</h4>
___程式碼區塊_6___

<h3 id="42-network-layout-cho-lab">4.2。實驗室網路佈局</h3>

___程式碼區塊_7___

<h3 id="43-tao-vms-voi-vagrant">4.3。使用 Vagrant 快速建立虛擬機器（可選）</h3>
___程式碼區塊_8___

___程式碼區塊_9___

<h3 id="44-cau-hinh-ssh-keys">4.4。為所有節點設定 SSH 金鑰</h3>
___程式碼區塊_10___

<hr>

<h2 id="phan-5-lo-trinh-hoc-tap">第 5 部分：學習路線 50 課程</h2>

<h3 id="51-dependency-graph">5.1。各部分之間的依賴關係圖</h3>

___程式碼區塊_11___

<h3 id="52-thoi-gian-du-kien">5.2。預計時間</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>部分</th>
<th>貼文編號</th>
<th>時間</th>
<th>時間線（2小時/天）</th>
</tr>
</thead>
<tbody>
<tr>
<td>第 1 部分：基礎</td>
<td>4</td>
<td>~8小時</td>
<td>第 1 週</td>
</tr>
<tr>
<td>第 2 部分：K8s HA</td>
<td>6</td>
<td>~14小時</td>
<td>第 2-3 週</td>
</tr>
<tr>
<td>第 3 部分：Rook-Ceph</td>
<td>5</td>
<td>~11h</td>
<td>第 3-4 週</td>
</tr>
<tr>
<td>第 4 部分：PostgreSQL__HTMLTAG_847___
<td>5</td>
<td>~12小時</td>
<td>第 5-6 週</td>
</tr>
<tr>
<td>第 5 部分：MQ HA</td>
<td>3</td>
<td>~8小時</td>
<td>第 6-7 週</td>
</tr>
<tr>
<td>第 6 部分：Istio</td>
<td>4</td>
<td>~10小時</td>
<td>第 7-8 週</td>
</tr>
<tr>
<td>第 7 部分：GitOps</td>
<td>4</td>
<td>~11h</td>
<td>第 9-10 週</td>
</tr>
<tr>
<td>第 8 部分：可觀察性__HTMLTAG_887___
<td>4</td>
<td>~10小時</td>
<td>第 10-11 週</td>
</tr>
<tr>
<td>第 9 部分：安全性</td>
<td>4</td>
<td>~10小時</td>
<td>第 12-13 週</td>
</tr>
<tr>
<td>第 10 部分：部署</td>
<td>4</td>
<td>~9h</td>
<td>第 13-14 週</td>
</tr>
<tr>
<td>第 11 部分：DR</td>
<td>2</td>
<td>~5 小時</td>
<td>第 15 週</td>
</tr>
<tr>
<td>第 12 部分：操作</td>
<td>5</td>
<td>~15小時</td>
<td>第 15-18 週</td>
</tr>
<tr>
___HTMLTAG_936__HTMLTAG_937___總計___HTMLTAG_938__HTMLTAG_939___
___HTMLTAG_940__HTMLTAG_941___50___HTMLTAG_942__HTMLTAG_943___
___HTMLTAG_944__HTMLTAG_945___~123小時___HTMLTAG_946__HTMLTAG_947___
___HTMLTAG_948__HTMLTAG_949___~18 週___HTMLTAG_950__HTMLTAG_951___
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-6-conventions-va-quy-uoc">第 6 部分：慣例和課程中的慣例</h2>

<h3 id="61-naming-conventions">6.1。命名約定</h3>
___程式碼區塊_12___<h3 id="62-ky-hieu-trong-bai-hoc">6.2。課程中的符號</h3>
<ul>
<li>💡 <strong>提示：</strong> 有用的提示、最佳實務</li>
<li>⚠️ <strong>警告：</strong>小心，可能會導致錯誤</li>
<li>❌ <strong>危險：</strong>絕對不要在生產中這樣做</li>
<li>📋 <strong>清單：</strong> 清單</li>
<li>🔬 <strong>深入研究：</strong> 技術說明</li>
<li>🛠️ <strong>實驗室：</strong> 練習</li>
</ul>

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_993__HTMLTAG_994___本地微服務</strong>適合需要資料主權、可預測成本和超低延遲的組織</li>
___HTMLTAG_997__HTMLTAG_998___Kubernetes HA</strong> 是一個編排平台，結合 CNCF 工俱生態系統建立生產平台</li>
___HTMLTAG_1001__HTMLTAG_1002___全端__HTMLTAG_1003___包含6層：基礎設施→儲存→資料→網路→平台→安全性</li>
___HTMLTAG_1005__HTMLTAG_1006___每項技術依標準選擇</strong>：生產級、CNCF 支援、社群活躍</li>
___HTMLTAG_1009__HTMLTAG_1010___實驗室環境</strong> 需要至少 7 個虛擬機器（3 個主節點 + 3 個工作節點 + 1 個 LB），總 RAM 約為 58GB__HTMLTAG_1012___
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：評估基礎設施需求__HTMLTAG_1018___
<p>適用情境：金融科技公司需要部署 20 個微服務，每秒處理 10,000 個請求，儲存 500GB 數據，需要 PCI-DSS 合規性。 </p>
<ul>
<li>計算所需的節點數（控制平面、工作執行緒、儲存）</li>
<li>估計 CPU、RAM、儲存總量</li>
<li>繪製網路拓樸圖</li>
<li>從上面的堆疊中列出所需的元件</li>
</ul>

<h3 id="bt2">練習 2：設定實驗室環境__HTMLTAG_1032___
<ul>
<li>使用選項 A 或選項 B 建立 7 個虛擬機器</li>
<li>設定虛擬機器之間的網路</li>
<li>設定基於 SSH 金鑰的驗證</li>
<li>驗證所有節點之間的 ping 連接性</li>
<li>記錄每個虛擬機器的 IP 和主機名稱</li>
</ul>

<h3 id="bt3">練習 3：技術比較__HTMLTAG_1046___
<p>詳細研究並比較兩對技術：</p>
<ul>
<li>Cilium 與 Calico：效能基準、功能、社群</li>
<li>Rook-Ceph 與 Longhorn：可擴充性、功能、操作複雜性</li>
</ul>

<hr><h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第2課：硬體規劃與網路拓樸</strong>中，我們將深入研究CPU/RAM/磁碟的詳細大小運算、帶有VLAN的網路拓樸設計、綁定和生產環境的MTU。 </p>