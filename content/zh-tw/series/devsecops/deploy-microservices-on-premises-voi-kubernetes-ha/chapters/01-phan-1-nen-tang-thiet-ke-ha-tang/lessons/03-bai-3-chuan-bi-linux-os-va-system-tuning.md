---
id: 019e1a00-aa01-7001-c001-k8sha000103
title: 第 3 課：準備 LINUX 作業系統和系統調優
slug: bai-3-chuan-bi-linux-os-va-system-tuning
description: 安裝 Ubuntu 24.04/RHEL 9，配置 K8s 的核心參數（net.bridge、ip_forward、inotify）、關閉 swap、配置 chrony/NTP、防火牆規則、SSH 強化並在安裝 K8s 之前準備所有節點。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 第 1 部分：本地平台和基礎設施設計
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-77" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-77)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1048" cy="254" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="996" cy="242" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="944" cy="230" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="892" cy="218" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="840" cy="206" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="154" x2="1100" y2="234" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="184" x2="1050" y2="254" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1029.1147367097487,189.5 1029.1147367097487,218.5 1004,233 978.8852632902513,218.5 978.8852632902513,189.5 1004,175" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：準備 LINUX 作業系統與系統調整</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：平台和平臺本地基礎設施設計</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_66___
<p>完成本課程後，您將：</p>
<ul>
<li>✅ 為所有節點安裝並更新 Ubuntu 24.04 LTS</li>
<li>✅ 設定 Kubernetes 所需的核心參數</li>
<li>✅ 永久關閉交換並了解原因</li>
<li>✅ 為整個叢集設定 NTP 同步__HTMLTAG_77___
<li>✅ 強化 SSH 並設定防火牆規則</li>
<li>✅ 標準化主機名稱、主機檔案與 DNS 解析</li>
</ul>

<hr>

<h2 id="phan-1-cai-dat-ubuntu-2404">第 1 部分：安裝 UBUNTU 24.04 LTS</h2>

<h3 id="11-tai-sao-ubuntu-2404">1.1。為什麼選擇 Ubuntu 24.04 LTS？ </h3>
<ul>
___HTMLTAG_89__HTMLTAG_90___LTS（長期支援）：</strong> 12 年支援（Ubuntu Pro 至 2036 年）</li>
___HTMLTAG_93__HTMLTAG_94___核心 6.8+：</strong> 對 eBPF (Cilium)、cgroup v2、io_uring</li> 的良好支持
___HTMLTAG_97__HTMLTAG_98___systemd 255+：</strong> 改進 cgroup v2 管理</li>
___HTMLTAG_101__HTMLTAG_102___廣泛採用：</strong> 使用 K8s、Ceph 和 CNCF 工具進行了全面測試</li>
</ul>

<p>⚠️ <strong>注意：</strong> RHEL 9 / Rocky Linux 9 對於企業來說也是一個不錯的選擇。本指南使用 Ubuntu，但會在不同時註明 RHEL 指令。 </p>

<h3 id="12-cai-dat-co-ban">1.2。基本設定</h3>
___程式碼區塊_0___

<hr>

<h2 id="phan-2-hostname-va-dns">第 2 部分：主機名稱與 DNS 解析__HTMLTAG_114___

<h3 id="21-dat-hostname">2.1。在每個節點上設定主機名稱</h3>
___程式碼區塊_1___

<h3 id="22-cau-hinh-hosts-file">2.2。在所有節點上設定 /etc/hosts</h3>
___程式碼區塊_2___<p>💡 <strong>提示：</strong> 在生產中，使用內部 DNS 伺服器（CoreDNS 或 BIND）而非 /etc/hosts。為簡單起見，本課程使用 /etc/hosts。 </p>

<hr>

<h2 id="phan-3-kernel-parameters">第 3 部分：KUBERNETES 的核心參數</h2>

<h3 id="31-tai-sao-can-tuy-chinh-kernel">3.1。為什麼需要客製化內核？ </h3>
<p>Kubernetes 需要啟用一些核心功能：</p>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>參數</th>
<th>值</th>
<th>原因</th>
</tr>
</thead>
<tbody>
<tr>
<td>net.bridge.bridge-nf-call-iptables__HTMLTAG_145___
<td>1</td>
<td>透過 iptables 規則橋接流量（服務所需）</td>
</tr>
<tr>
<td>net.bridge.bridge-nf-call-ip6tables</td>
<td>1</td>
<td>透過 ip6tables 的 IPv6 橋接流量__HTMLTAG_157___
</tr>
<tr>
<td>net.ipv4.ip_forward</td>
<td>1</td>
<td>在介面之間轉送封包（Pod 網路）</td>
</tr>
<tr>
<td>net.ipv6.conf.all.forwarding</td>
<td>1</td>
<td>IPv6 轉送（如果使用雙堆疊）</td>
</tr>
<tr>
<td>fs.inotify.max_user_instances</td>
<td>8192</td>
<td>對於許多容器需要inotify（檔案監視）</td>
</tr>
<tr>
<td>fs.inotify.max_user_watches</td>
<td>524288</td>
<td>Inotify 每個使用者觀看的次數</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3 id="32-cau-hinh-kernel-parameters">3.2。配置核心參數</h3>
___程式碼區塊_3___

___程式碼區塊_4___

<hr>

<h2 id="phan-4-tat-swap">第 4 部分：關閉交換</h2>

<h3 id="41-tai-sao-phai-tat-swap">4.1。為什麼必須關閉 Swap？ </h3>
<p>Kubelet <strong>需要停用交換__HTMLTAG_203___（儘管 K8s 1.28+ 有 beta 交換支援）。原因：</p>
<ul>
<li>交換會導致 <strong>容器延遲無法預測</strong></li>
<li>K8s 調度程式依據 <strong>物理記憶體___HTMLTAG_212__HTMLTAG_213___ 計算資源
<li>交換隱藏的<strong>OOM問題</strong>，使調試變得困難</li>
<li>etcd 和資料庫在交換時表現非常差__HTMLTAG_219___
</ul>

<h3 id="42-tat-swap-vinh-vien">4.2。永久關閉交換</h3>
___程式碼區塊_5___

<hr>

<h2 id="phan-5-ntp-time-sync">第 5 部分：NTP 時間同步</h2><h3 id="51-tai-sao-ntp-quan-trong">5.1。為什麼 NTP 極為重要？ </h3>
<ul>
___HTMLTAG_229__HTMLTAG_230___etcd:</strong> 使用時間戳進行領導者選舉，需要時脈偏差 < 500ms</li>
___HTMLTAG_233__HTMLTAG_234___TLS 憑證：</strong> 根據時間驗證，時脈錯誤 → 憑證無效</li>
___HTMLTAG_237__HTMLTAG_238___日誌相關性：</strong> 節點之間的日誌時間戳記必須符合</li>
___HTMLTAG_241__HTMLTAG_242___Ceph:</strong> MON 仲裁請求時脈偏差 < 50ms</li>
</ul>

<h3 id="52-cau-hinh-chrony">5.2。定時配置 (NTP)</h3>
___程式碼區塊_6___

<hr>

<h2 id="phan-6-ssh-hardening">第 6 部分：SSH 強化</h2>

<h3 id="61-cau-hinh-ssh-an-toan">6.1。安全 SSH 設定</h3>
___程式碼區塊_7___

<h3 id="62-setup-ssh-key-auth">6.2。設定 SSH 金鑰驗證</h3>
___程式碼區塊_8___

<hr>

<h2 id="phan-7-firewall-configuration">第 7 部分：防火牆設定</h2>

<h3 id="71-ufw-cho-control-plane">7.1。用於控制平面節點的 UFW</h3>
___程式碼區塊_9___

<h3 id="72-ufw-cho-worker-nodes">7.2。用於工作節點的 UFW</h3>
___程式碼區塊_10___

<p>💡 <strong>替代方案：</strong> 許多生產環境直接使用 nftables 或 iptables 而不是 UFW。 Cilium 也可以用主機策略取代節點級防火牆。 </p>

<hr>

<h2 id="phan-8-cac-tuy-chinh-khac">第 8 部分：其他自訂</h2>

<h3 id="81-disable-unattended-upgrades">8.1。停用無人值守升級（生產）</h3>
___程式碼區塊_11___

<h3 id="82-cau-hinh-ulimits">8.2。配置 ulimit</h3>
___程式碼區塊_12___

<h3 id="83-disable-transparent-hugepages">8.3。禁用透明大頁</h3>
___程式碼區塊_13___

<h3 id="84-cgroup-v2-verification">8.4。 cgroup v2 驗證</h3>
___程式碼區塊_14___

<hr>

<h2 id="phan-9-automation-script">第 9 部分：自動化 — 準備所有節點的腳本</h2>

<h3 id="91-script-chuan-bi">9.1。節點準備腳本（在所有K8s節點上執行）</h3>
___程式碼區塊_15___

<h3 id="92-chay-script-tren-tat-ca-nodes">9.2。在所有節點上執行腳本</h3>
___程式碼區塊_16___

<hr>

<h2 id="phan-10-verification-checklist">第 10 部分：驗證清單</h2>

<h3 id="101-checklist-cho-moi-node">10.1。每個節點的清單</h3>
___程式碼區塊_17___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_293__HTMLTAG_294___核心模組</strong> K8s Pod 網路需要 Overlay 與 br_netfilter</li>
___HTMLTAG_297__HTMLTAG_298___ip_forward = 1</strong> 允許 Pod 到 Pod 的流量通過節點</li>
___HTMLTAG_301__HTMLTAG_302___交換必須永久關閉</strong> — 如果開啟交換，kubelet 將拒絕啟動</li>
___HTMLTAG_305__HTMLTAG_306___NTP 同步</strong> 對於 etcd、TLS 憑證和 Ceph 至關重要</li>
___HTMLTAG_309__HTMLTAG_310___SSH 強化：</strong> 僅基於金鑰的驗證，停用密碼登入</li>
___HTMLTAG_313__HTMLTAG_314___自動化腳本</strong>幫助一致地準備所有節點</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2><h3 id="bt1">練習 1：準備所有節點</h3>
<ul>
<li>在所有 7 個虛擬機器（或伺服器）上執行prepare-k8s-node.sh</li>
<li>在每個節點上執行 verify-node.sh，確保所有檢查通過</li>
<li>1個master和1個worker的verify-node.sh結果截圖</li>
</ul>

<h3 id="bt2">練習 2：基準 NTP</h3>
<ul>
<li>檢查所有節點之間的時脈偏移： <code>chronyc 來源 -v___HTMLTAG_336__HTMLTAG_337___
<li>確保偏移 < 1ms giữa tất cả nodes</li>
<li>嘗試中斷 NTP，更改時間，看看 chrony 需要多長時間才能重新同步</li>
</ul>

<h3 id="bt3">練習 3：RHEL 9 變體__HTMLTAG_344___
<ul>
<li>為 RHEL 9 / Rocky Linux 9 重寫prepare-k8s-node.sh</li>
<li>取代 apt → dnf、ufw → 防火牆</li>
<li>在 1 個虛擬機器上進行測試以驗證</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第4課：Kubernetes API伺服器的負載平衡器</strong>中，我們將安裝keepalived + HAProxy來為K8s API伺服器建立虛擬IP，確保控制平面存取的HA。 </p>