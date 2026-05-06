---
id: 019e1a00-aa01-7001-c001-k8sha000305
title: 第 15 課：CEPH 監控、調優與故障排除
slug: bai-15-ceph-monitoring-tuning-va-troubleshooting
description: 適用於 Ceph、Grafana 儀表板的 Prometheus 指標、效能調整參數、OSD 調整、清理、復原設定以及常見問題故障排除。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: 第 3 部分：分散式儲存 — Rook-Ceph
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5846" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5846)"/>

  <!-- Decorations -->
  <g>
    <circle cx="884" cy="222" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="668" cy="286" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="952" cy="90" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="736" cy="154" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="1020" cy="218" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="82" x2="1100" y2="162" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="112" x2="1050" y2="182" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="964.0429399400242,113.5 964.0429399400242,150.5 932,169 899.9570600599758,150.5 899.9570600599758,113.50000000000001 932,95" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：CEPH 監控、調整與</tspan>
      <tspan x="60" dy="42">故障排除</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：分散式儲存 — Rook-Ceph</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<p>完成本課程後，您將：</p>
<ul>
<li>✅ 為 Ceph 設定 Prometheus 監控</li>
<li>✅ 導入適用於 Ceph 的 Grafana 儀表板</li>
<li>✅ 調整 OSD 效能參數</li>
<li>✅ 管理清理與復原</li>
<li>✅ 追蹤 HEALTH_WARN 和常見問題__HTMLTAG_81___
</ul>

<hr>

<h2 id="phan-1-prometheus-metrics">第 1 部分：普羅米修斯指標</h2>

<h3 id="11-ceph-prometheus-module">1.1。 Ceph Prometheus 模組</h3>
___程式碼區塊_0___

<h3 id="12-servicemonitor">1.2。 ServiceMonitor（適用於 Prometheus Operator）</h3>
___程式碼區塊_1___

<h3 id="13-key-metrics">1.3。監控的關鍵指標</h3><!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>公制</th>
<th>意義__HTMLTAG_99___
<th>警報閾值</th>
</tr>
</thead>
<tbody>
<tr>
<td>ceph_health_status</td>
<td>0=正常，1=警告，2=錯誤</td>
<td>> 0 表示 5m</td>
</tr>
<tr>
<td>ceph_osd_up</td>
<td>OSD 啟動狀態</td>
<td>！ = 1</td>
</tr>
<tr>
<td>ceph_osd_in</td>
<td>叢集中的 OSD</td>
<td>！ = 1</td>
</tr>
<tr>
<td>ceph_cluster_total_used_raw_bytes</td>
<td>原始用法</td>
<td>> 80% 容量__HTMLTAG_135___
</tr>
<tr>
<td>ceph_osd_op_r_latency_sum</td>
<td>讀取延遲__HTMLTAG_141___
<td>> 50 毫秒 p99</td>
</tr>
<tr>
<td>ceph_osd_op_w_latency_sum</td>
<td>寫入延遲</td>
<td>> 100 毫秒 p99</td>
</tr>
<tr>
<td>ceph_pg_degraded</td>
<td>降級 PG</td>
<td>> 0 表示 5m</td>
</tr>
<tr>
<td>ceph_pool_stored_raw</td>
<td>池原始使用量</td>
<td>接近滿</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-grafana-dashboards">第 2 部分：GRAFANA 儀表板__HTMLTAG_174___

___程式碼區塊_2___

<hr>

<h2 id="phan-3-performance-tuning">第 3 部分：效能調整</h2>

<h3 id="31-osd-tuning">3.1。 OSD 調整</h3>
___程式碼區塊_3___

<h3 id="32-pool-tuning">3.2。池調整</h3>
___程式碼區塊_4___

<hr>

<h2 id="phan-4-troubleshooting">第 4 部分：故障排除</h2>

<h3 id="41-health-warnings">4.1。常見 HEALTH_WARN</h3>
___程式碼區塊_5___

<h3 id="42-osd-replace">4.2。替換失敗的 OSD</h3>
___程式碼區塊_6___

<h3 id="43-pool-full-emergency">4.3。池已滿緊急情況</h3>
___程式碼區塊_7___

<hr>

<h2 id="phan-5-benchmark">第 5 部分：儲存基準__HTMLTAG_193___

___程式碼區塊_8___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_198__HTMLTAG_199___Prometheus + Grafana</strong>：監控 Ceph 運作狀況、延遲、IOPS、容量</li>
___HTMLTAG_202__HTMLTAG_203___調整時間安排</strong>：非尖峰時段（凌晨 2 點至 6 點）以盡量減少影響</li>
___HTMLTAG_206__HTMLTAG_207___恢復限制</strong>：osd_recovery_max_active、osd_max_backfills</li>
___HTMLTAG_210__HTMLTAG_211___PG 自動縮放器</strong>：自動調整 PG 計數</li>
___HTMLTAG_214__HTMLTAG_215___OSD 替換</strong>：標記→等待復原→清除→更換磁碟</li>
___HTMLTAG_218__HTMLTAG_219___部署前的基準</strong>：rados 基準基準</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2><h3 id="bt1">練習 1：監控</h3>
<ul>
<li>驗證 Prometheus 抓取 Ceph 指標__HTMLTAG_230___
<li>檢查 <code>ceph 運作狀況詳細資訊</code> 並解決警告</li>
</ul>

<h3 id="bt2">練習 2：基準</h3>
<ul>
<li>執行 rados 工作台寫入/讀取</li>
<li>使用 ceph-block PVC 在 pod 中部署 fio</li>
<li>比較 IOPS 和延遲__HTMLTAG_244___
</ul>

<h3 id="bt3">練習 3：OSD 故障模擬__HTMLTAG_247___
<ul>
<li>將 1 OSD 標記為退出，觀察恢復情況</li>
<li>標記 OSD 列印，觀察重新平衡</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 16 課：使用 Patroni 和 CloudNativePG 的 PostgreSQL HA 架構</strong>，我們將開始第 4 部分 — 微服務的資料庫 HA。 </p>