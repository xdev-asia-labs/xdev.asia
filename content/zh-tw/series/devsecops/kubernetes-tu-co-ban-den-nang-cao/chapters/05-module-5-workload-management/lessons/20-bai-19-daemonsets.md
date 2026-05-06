---
id: 019c9618-0302-7000-8000-c1147ba22e13
title: 第 19 課：惡魔集
slug: bai-19-daemonsets
description: DaemonSets 確保在每個節點上執行一個 Pod。使用案例：監控代理程式、日誌代理、網路插件、儲存。在每個節點上部署 Grafana Alloy 收集器的真實範例。
duration_minutes: 60
is_free: false
video_url: null
sort_order: 19
section_title: 模組 5：工作負載管理
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1387" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1387)"/>

  <!-- Decorations -->
  <g>
    <circle cx="989" cy="37" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="878" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="767" cy="215" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="656" cy="44" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="133" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="147" x2="1100" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="177" x2="1050" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1033.3730669589463,176 1033.3730669589463,218 997,239 960.6269330410536,218 960.6269330410536,176 997,155" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 19 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 19 課：守護程式</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 5：工作負載管理__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>DaemonSets — 每個節點一個 Pod__HTMLTAG_66___

<p>當您需要在叢集中的 <strong> 所有節點 </strong>（或特定節點子集）上執行 Pod 時，<strong>DaemonSet</strong> 就是答案。與以副本形式分發 Pod 的 Deployment 不同，DaemonSet 確保每個節點（與選擇器相符）始終擁有自己的 Pod。當新節點新增至叢集時，DaemonSet 會自動在該節點上建立一個 Pod。當節點被刪除時，Pod 也會被垃圾回收。 </p>

<h2>1。什麼是 DaemonSet？每節點一個 Pod 機制</h2>

<p>DaemonSet 控制器持續確保：</p>
<ul>
  <li>每個符合節點都有一個正在運作的 DaemonSet Pod</li>
  <li>當新節點加入叢集時→自動建立一個新的Pod</li>
  <li>當節點從叢集中刪除時 → Pod 被刪除</li>
  <li>刪除 DaemonSet 將清理它所建立的所有 Pod</li>
</ul>

<p>最基本的DaemonSet：</p>

___程式碼區塊_0___

<h2>2。實際用例</h2>

<p>DaemonSet 廣泛用於基礎設施代理：</p>

<h3>2.1 日誌記錄代理__HTMLTAG_94___
<ul>
  ___HTMLTAG_96__HTMLTAG_97___Grafana Alloy</strong>：從每個節點上的標準輸出檔案和容器收集日誌</li>
  ___HTMLTAG_100__HTMLTAG_101___Fluent Bit</strong>：輕量級日誌轉發器，將日誌轉發到Elasticsearch/Loki</li>
  ___HTMLTAG_104__HTMLTAG_105___Fluentd</strong>：出貨前聚合和轉換日誌</li>
</ul><h3>2.2 監控代理程式</h3>
<ul>
  ___HTMLTAG_112__HTMLTAG_113___Prometheus Node Exporter</strong>：匯出節點的CPU、記憶體、磁碟、網路指標</li>
  ___HTMLTAG_116__HTMLTAG_117___Datadog 代理</strong>：完全可觀察性 — 指標、日誌、追蹤、流程</li>
  ___HTMLTAG_120__HTMLTAG_121___彈性代理</strong>：統一彈性堆疊代理</li>
</ul>

<h3>2.3 網路外掛程式 (CNI)</h3>
<ul>
  ___HTMLTAG_128__HTMLTAG_129___Cilium</strong>：基於 eBPF 的網路、安全性、可觀察性</li>
  ___HTMLTAG_132__HTMLTAG_133___Calico</strong>：網路策略實作</li>
  ___HTMLTAG_136__HTMLTAG_137___Weave Net</strong>：簡單覆蓋網路</li>
</ul>

<h3>2.4 儲存（CSI 節點外掛程式）</h3>
<ul>
  ___HTMLTAG_144__HTMLTAG_145___AWS EBS CSI 驅動程式節點外掛程式</strong>：在 EC2 節點上掛載 EBS 磁碟區</li>
  ___HTMLTAG_148__HTMLTAG_149___Longhorn</strong>：分散式區塊儲存 — 引擎在每個節點上運作</li>
  ___HTMLTAG_152__HTMLTAG_153___OpenEBS</strong>：雲端原生儲存</li>
</ul>

<h3>2.5 安全性</h3>
<ul>
  ___HTMLTAG_160__HTMLTAG_161___Falco</strong>：使用 eBPF 進行執行時間威脅偵測（請參閱第 26 課）</li>
  ___HTMLTAG_164__HTMLTAG_165___NeuVector</strong>：容器安全平台</li>
  ___HTMLTAG_168__HTMLTAG_169___Sysdig 代理</strong>：安全性與效能監控</li>
</ul>

<h2>3。 DaemonSet 與部署：何時使用哪一個？ </h2>

<p>常見問題：「為什麼不將部署與 <code> 副本一起使用：N</code> 而不是 DaemonSet？」</p>

___HTMLTAG_179__HTMLTAG_180___在下列情況下使用 DaemonSet：___HTMLTAG_181__HTMLTAG_182___
<ul>
  <li>需要直接存取節點資源（檔案系統、網路介面、硬體）</li>
  <li>需要 <em>每個特定節點__HTMLTAG_188___上的 Pod，而不是任何 N 個 Pod__HTMLTAG_189___
  <li>代理程式需要確切地知道它正在哪個節點上執行（主機名稱、節點 IP）</li>
  <li>基礎設施代理程式：日誌記錄、監控、CNI、CSI</li>
</ul>

___HTMLTAG_195__HTMLTAG_196___在下列情況下使用部署：___HTMLTAG_197__HTMLTAG_198___
<ul>
  <li>需要獨立於節點數量擴充副本數量</li>
  <li>無節點特定存取權限的無狀態應用程式</li>
  <li>Web 伺服器、API 伺服器、常見微服務</li>
</ul>

<h2>4。節點選擇 — 為 DaemonSet 選擇節點</h2>

<p>DaemonSet 並不總是需要在整個叢集上運行。您可以透過多種方式限制它。 </p>

<h3>4.1 節點選擇器__HTMLTAG_212___

<p>僅部署在具有特定標籤的節點上：</p>

___程式碼區塊_1___

<h3>4.2 節點親和性</h3><p>比nodeSelector更複雜，支援In、NotIn、Exists等運算子：</p>

___程式碼區塊_2___

<h3>4.3 容忍 — 部署到受污染的節點</h3>

<p>節點可以有 <strong>污點</strong> 以防止常規 Pod 調度到那裡。 DaemonSet 通常需要 <strong>tolerations</strong> 來繞過這些污點 — 特別是在控制平面節點上運行：</p>

___程式碼區塊_3___

<p>最後兩個容忍（<code>not-ready</code> 和 <code>unreachable</code>）對於基礎設施代理非常重要 - 即使節點出現問題，您也希望記錄/監視記錄，以擷取該問題的日誌記錄。 </p>

<h2>5。更新策略</h2>

<p>DaemonSet 有兩種更新策略：</p>

<h3>5.1 滾動更新（預設）</h3>

___程式碼區塊_4___

<p>透過 RollingUpdate，Kubernetes 會一一更新每個 Pod（或根據 maxUnavailable）。舊 Pod 被刪除，新 Pod 在同一節點上建立。 </p>

<h3>5.2 刪除</h3>

___程式碼區塊_5___

<p>使用 OnDelete，DaemonSet 不會自動更新 Pod。只有當您手動刪除舊 Pod 時才會建立新 Pod（具有新規格）。當您想要完全控制更新過程時使用。 </p>

<h2>6。實例：Grafana合金節點代理</h2>

___HTMLTAG_247__HTMLTAG_248___Grafana Alloy</strong> 是來自 Grafana Labs 的 OpenTelemetry 原生收集器，取代了舊的 Grafana Agent。將 Alloy 部署為 DaemonSet 以從每個節點收集日誌和指標：</p>

___程式碼區塊_6___

<p>合金配置的ConfigMap：</p>

___程式碼區塊_7___

<h2>7。範例：Prometheus Metrics 的節點導出器</h2>

<p>Node Exporter 收集節點硬體和作業系統指標，將它們暴露給 Prometheus 抓取：</p>

___程式碼區塊_8___

<h2>8。部署 DaemonSet 時的優先權： PriorityClass</h2>

<p>日誌記錄和監控等基礎設施代理程式需要在應用程式 Pod 之前進行排程 — 即使節點面臨記憶體壓力。使用 <strong>PriorityClass</strong> 確保這一點：</p>

___程式碼區塊_9___

<p>然後將 PriorityClass 指派給 DaemonSet：</p>

___程式碼區塊_10___

<p>Kubernetes 有許多內建優先權類別：</p>
<ul>
  ___HTMLTAG_268__HTMLTAG_269___系統叢集關鍵</code>：2000000000 — 對於 CoreDNS、kube-proxy</li>
  ___HTMLTAG_272__HTMLTAG_273___系統節點關鍵</code>：2000001000 — 用於 kubelet 相鄰元件</li>
</ul>

<h2>9。測試和調試 DaemonSet</h2>

___程式碼區塊_11___

<h2>10。 DaemonSet 最佳實踐</h2><ul>
  ___HTMLTAG_282__HTMLTAG_283___合理資源</strong>：DaemonSet 在每個節點上運作 — 如果每個 Pod 使用 500m CPU，則整個叢集會損失大量容量__HTMLTAG_285___
  ___HTMLTAG_286__HTMLTAG_287___完整容忍</strong>：新增對<code>未就緒</code>與<code>不可達</code>___的容忍問題，以便代理在執行節點時出現不</code>___的容忍問題，以便代理在執行節點時出現。
  ___HTMLTAG_294__HTMLTAG_295___PriorityClass</strong>：分配高於常規工作負載的優先權以確保進度</li>
  ___HTMLTAG_298__HTMLTAG_299___readOnlyRootFilesystem</strong>：盡可能啟用，使用emptyDir或hostPath進行資料寫入__HTMLTAG_301___
  ___HTMLTAG_302__HTMLTAG_303___RollingUpdate maxUnavailable</strong>：保持為 1 或較小的數字，以免同時失去許多節點的覆蓋__HTMLTAG_305___
  ___HTMLTAG_306__HTMLTAG_307___命名空间隔离</strong>：将 DaemonSet 部署到单独的命名空间中（例如 <code>monitoring</code>、<code>logging</code>） — 不要与应用程序工作负载混合</li>
</ul>

<p>DaemonSet 是每個 Kubernetes 叢集生產中不可或缺的工具。了解如何正確使用 DaemonSet 可以幫助您在 Kubernetes 平台上建立堅實的基礎設施可觀察性和安全層。 </p>