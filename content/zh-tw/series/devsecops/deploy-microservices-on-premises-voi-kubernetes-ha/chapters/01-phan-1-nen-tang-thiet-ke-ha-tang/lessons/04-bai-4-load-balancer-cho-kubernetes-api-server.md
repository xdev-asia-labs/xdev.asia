---
id: 019e1a00-aa01-7001-c001-k8sha000104
title: 第 4 課：Kubernetes API 伺服器的負載平衡器（KEEPALIVED + HAPROXY）
slug: bai-4-load-balancer-cho-kubernetes-api-server
description: 安裝並設定 keepalived + HAProxy 為 Kubernetes API 伺服器建立虛擬 IP (VIP)。設定健康檢查、自動故障轉移、與 kube-vip 進行比較並使用 tcpdump/curl 測試 HA。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 第 1 部分：本地平台和基礎設施設計
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5575" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5575)"/>

  <!-- Decorations -->
  <g>
    <circle cx="998" cy="44" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="896" cy="222" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="794" cy="140" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="692" cy="58" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="1090" cy="236" r="32" fill="#fbbf24" opacity="0.05"/>
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
    <line x1="600" y1="204" x2="1100" y2="284" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="234" x2="1050" y2="304" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="937.7749907475932,84.5 937.7749907475932,123.5 904,143 870.2250092524068,123.5 870.2250092524068,84.50000000000001 904,65" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — 第 4 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 4 課：KUBERNETES API 的負載平衡器</tspan>
      <tspan x="60" dy="42">伺服器（保持活動 + HAPROXY）</tspan>
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
<li>✅ 了解為什麼 HA 設定中的 K8s API 伺服器需要負載平衡器</li>
<li>✅ 安裝和設定 keepalived 以實現虛擬 IP (VIP) 故障轉移</li>
<li>✅ 安裝和設定 HAProxy 以實現 API 伺服器負載平衡</li>
<li>✅ 設定運作狀況檢查與自動故障轉移</li>
<li>✅ 透過模擬故障來測試 HA</li>
<li>✅ 比較 keepalived+HAProxy 與 kube-vip</li>
</ul>

<hr>

<h2 id="phan-1-tai-sao-can-lb">第 1 部分：為什麼 API 伺服器需要負載平衡器？ </h2>

<h3 id="11-van-de-voi-single-api-endpoint">1.1。單一 API 端點的問題</h3>

___程式碼區塊_0___

<h3 id="12-architecture">1.2。負載平衡器架構</h3>

___程式碼區塊_1___

<h3 id="13-lua-chon-architecture">1.3。選擇架構</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>選項</th>
<th>優點</th>
<th>缺點</th>
<th>推薦</th>
</tr>
</thead>
<tbody>
<tr>
___HTMLTAG_110__HTMLTAG_111___專用負載平衡節點___HTMLTAG_112__HTMLTAG_113___
<td>隔離、簡單、清楚分離__HTMLTAG_115___
<td>也需要 2 個伺服器__HTMLTAG_117___
<td>✅ 製作</td>
</tr>
<tr>
<td>主伺服器上的 HAProxy</td>
<td>不需要額外的伺服器</td>
<td>資源爭用，複雜性</td>
<td>實驗室/小型</td>
</tr>
<tr>
<td>kube-vip (DaemonSet)</td>
<td>無外部LB</td>
<td>在 K8s 內部運作 → 先有雞還是先有蛋</td>
<td>簡單設定</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>我們將使用 <strong>專用 LB 節點</strong> (lb1 + lb2) 進行生產級設定。 </p>

<hr>

<h2 id="phan-2-cai-dat-haproxy">第 2 部分：HAPROXY 的安裝與設定</h2>

<h3 id="21-cai-dat-haproxy">2.1。安裝 HAProxy</h3>
___程式碼區塊_2___

<h3 id="22-cau-hinh-haproxy">2.2。 HAProxy 設定</h3>
___程式碼區塊_3___

<h3 id="23-advanced-health-check">2.3。進階運轉狀況檢查 (HTTP)</h3>
<p>TCP 檢查僅檢查開放埠。若要檢查 API 伺服器是否確實健康，請使用 HTTP 健康檢查：</p>

___程式碼區塊_4___

<p>⚠️ <strong>注意：</strong> HTTP 健康檢查需要 <code>check-ssl verify none</code> 因為 K8s API 使用自簽名憑證。在生產中，您可以設定 CA 憑證進行驗證。 </p>

<h3 id="24-start-haproxy">2.4。啟動 HAProxy</h3>
___程式碼區塊_5___

<hr>

<h2 id="phan-3-cai-dat-keepalived">第 3 部分：安裝與設定保持活動</h2>

<h3 id="31-keepalived-la-gi">3.1。什麼是 keepalived？ </h3>
<p>keepalived 使用 <strong>VRRP（虛擬路由器冗餘協定）</strong> 管理 2 個以上伺服器之間的虛擬 IP：</p>

___程式碼區塊_6___

<h3 id="32-cai-dat-keepalived">3.2。安裝 keepalived</h3>
___程式碼區塊_7___

<h3 id="33-cau-hinh-keepalived-tren-lb1">3.3。 lb1 (MASTER) 上的 Keepalived 設定</h3>
___程式碼區塊_8___

<h3 id="34-cau-hinh-keepalived-tren-lb2">3.4。 lb2 上的 Keepalived 設定（備份）</h3>
___程式碼區塊_9___

<h3 id="35-notification-script">3.5。通知腳本（可選）</h3>
___程式碼區塊_10___

<h3 id="36-start-keepalived">3.6。啟動 keepalived</h3>
___程式碼區塊_11___

<hr>

<h2 id="phan-4-testing-ha-failover">第 4 部分：測試 HA 故障轉移</h2>

<h3 id="41-test-1-vip-failover">4.1。測試 1：lb1 關閉時 VIP 故障轉移</h3>
___程式碼區塊_12___

<h3 id="42-test-2-haproxy-failure">4.2。測試 2：HAProxy 失敗 → keepalived 示範</h3>
___程式碼區塊_13___

<h3 id="43-test-3-api-server-failover">4.3。測試 3：API 伺服器後端故障轉移</h3>
___程式碼區塊_14___

<hr>

<h2 id="phan-5-kube-vip-alternative">第 5 部分：替代方案 — kube-vip</h2><h3 id="51-kube-vip-la-gi">5.1。什麼是 kube-vip？ </h3>
<p>kube-vip 在控制平面節點上作為靜態 Pod 運行，將 VIP + 負載平衡結合在 1 個元件中：</p>

___程式碼區塊_15___

<h3 id="52-so-sanh">5.2。詳細比較</h3>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>標準</th>
<th>keepalived + HAProxy</th>
<th>kube-vip</th>
</tr>
</thead>
<tbody>
<tr>
___HTMLTAG_218__HTMLTAG_219___額外伺服器___HTMLTAG_220__HTMLTAG_221___
<td>需要 2 台負載平衡伺服器</td>
<td>不需要</td>
</tr>
<tr>
___HTMLTAG_228__HTMLTAG_229___複雜性___HTMLTAG_230__HTMLTAG_231___
<td>需要管理 2 個元件</td>
<td>1 元件</td>
</tr>
<tr>
___HTMLTAG_238__HTMLTAG_239___獨立___HTMLTAG_240__HTMLTAG_241___
<td>✅ 獨立於 K8s 叢集</td>
<td>❌ 在 K8s 中運行（先有雞還是先有蛋）</td>
</tr>
<tr>
___HTMLTAG_248__HTMLTAG_249___先有雞還是先有蛋的問題___HTMLTAG_250__HTMLTAG_251___
<td>✅ 無</td>
<td>⚠️需要在K8s之前初始化</td>
</tr>
<tr>
___HTMLTAG_258__HTMLTAG_259___健康檢查___HTMLTAG_260__HTMLTAG_261___
<td>✅ 進階（HTTP、TCP、腳本）</td>
<td>基本</td>
</tr>
<tr>
___HTMLTAG_268__HTMLTAG_269___監控___HTMLTAG_270__HTMLTAG_271___
<td>✅ HAProxy 統計數據，普羅米修斯</td>
<td>有限</td>
</tr>
<tr>
___HTMLTAG_278__HTMLTAG_279___經過生產驗證___HTMLTAG_280__HTMLTAG_281___
<td>✅ 20 多年</td>
<td>較新，經過較少的戰鬥測試</td>
</tr>
<tr>
___HTMLTAG_288__HTMLTAG_289___實驗室/開發___HTMLTAG_290__HTMLTAG_291___
<td>過度殺傷</td>
<td>✅ 完美</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<p>💡 <strong>推薦：___HTMLTAG_302__HTMLTAG_303___
<ul>
___HTMLTAG_305__HTMLTAG_306___生產：</strong> keepalived + HAProxy（成熟、獨立、可觀察）</li>
___HTMLTAG_309__HTMLTAG_310___實驗室/小型：</strong> kube-vip（更簡單，無需額外伺服器）</li>
</ul>

<h3 id="53-kube-vip-quick-setup">5.3。 kube-vip 快速設定（參考）</h3>
___程式碼區塊_16___

<hr>

<h2 id="phan-6-production-considerations">第 6 部分：製作注意事項</h2>

<h3 id="61-haproxy-tuning">6.1。 HAProxy 生產調整</h3>
___程式碼區塊_17___

<h3 id="62-monitoring-haproxy">6.2。使用 Prometheus 監控 HAProxy</h3>
___程式碼區塊_18___

<h3 id="63-keepalived-monitoring">6.3。監控 keepalived</h3>
___程式碼區塊_19___

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_329__HTMLTAG_330___VIP 對於 K8s HA 至關重要</strong> — 所有組件均通過 VIP 連接，無需硬編碼主 IP</li>
___HTMLTAG_333__HTMLTAG_334___keepalived</strong> 透過 VRRP 協定管理 VIP 故障轉移，故障轉移 < 3 giây</li>
___HTMLTAG_337__HTMLTAG_338___HAProxy</strong> 透過執行狀況檢查將 TCP 流量負載平衡到運作狀況良好的 API 伺服器</li>
___HTMLTAG_341__HTMLTAG_342___nopreempt</strong> 模式可避免 MASTER 恢復時不必要的 VIP 抖動</li>
___HTMLTAG_345__HTMLTAG_346___keepalived 中的健康檢查腳本</strong>，以確保 VIP 僅位於 HAProxy 健康的節點上</li>
___HTMLTAG_349__HTMLTAG_350___測試故障轉移</strong>在部署K8s之前：關閉LB，關閉HAProxy，驗證VIP遷移</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：部署 HAProxy + keepalived</h3>
<ul>
<li>依照指示在 lb1 和 lb2 上安裝 HAProxy + keepalived</li>
<li>驗證 VIP 在 lb1 上處於活動狀態</li>
<li>存取 HAProxy 統計資訊頁面</li>
</ul>

<h3 id="bt2">練習 2：故障轉移測驗</h3>
<ul>
<li>測試 1：停止 lb1 上的 keepalived，驗證 VIP 移動到 lb2</li>
<li>測試 2：停止 lb1 上的 HAProxy，驗證自動降級</li>
<li>測試 3：重新啟動兩者，驗證正確狀態</li>
<li>透過連續 ping 測量故障轉移時間</li>
</ul>

<h3 id="bt3">練習 3：進階</h3>
<ul>
<li>為 HAProxy 新增 Prometheus 導出器</li>
<li>編寫一個通知腳本，在發生故障轉移時向 Slack 發送警報__HTMLTAG_385___
<li>在單獨的檔案中設定 HAProxy 日誌記錄詳細資訊</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第5課：在所有節點上安裝containerd和kubeadm</strong>，我們將安裝容器執行時間（containerd）和kubeadm工具，為K8s HA叢集初始化做好準備。 </p>