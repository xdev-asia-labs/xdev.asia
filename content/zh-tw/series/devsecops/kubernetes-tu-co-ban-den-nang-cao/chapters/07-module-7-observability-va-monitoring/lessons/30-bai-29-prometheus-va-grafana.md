---
id: 019c9618-0502-7000-8000-c1147ba22e15
title: 第 29 課：普羅米修斯和格拉法納
slug: bai-29-prometheus-va-grafana
description: Prometheus Operator 和 kube-prometheus-stack。 ServiceMonitor、PodMonitor、PrometheusRule。適用於 Kubernetes 叢集的 Grafana 儀表板。 AlertManager：路由、接收器（Slack、PagerDuty）。記錄規則和 PromQL 最佳實踐。
duration_minutes: 100
is_free: false
video_url: null
sort_order: 29
section_title: 模組 7：可觀察性和監控
course:
  id: 019c9617-fbc2-7158-96c7-1eaa77391b4e
  title: Kubernetes：從基礎到高級
  slug: kubernetes-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7102" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7102)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1074" cy="32" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="1048" cy="206" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1022" cy="120" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="996" cy="34" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="208" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="52" x2="1100" y2="132" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="82" x2="1050" y2="152" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.3826859021799,138.5 975.3826859021799,165.5 952,179 928.6173140978201,165.5 928.6173140978201,138.5 952,125" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 29 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 29 課：普羅米修斯與格拉法納</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">KUBERNETES：從基礎到進階</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">模組 7：可觀察性與可觀察性監控</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2>普羅米修斯和格拉法納__HTMLTAG_66___

<p>Prometheus 和 Grafana 是 Kubernetes 生態系中密不可分的二人組。 Prometheus 負責收集、儲存和查詢指標，而 Grafana 提供強大的視覺化層。隨著 Prometheus Operator 的引入，在 Kubernetes 上管理 Prometheus 變得聲明式且完全自動化。 </p>

<h2>普羅米修斯資料模型</h2>

<p>在進入 Prometheus Operator 之前，您需要了解 Prometheus 的資料模型才能撰寫有效的查詢。 </p>

<h3>時間序列與標籤__HTMLTAG_74___

<p>Prometheus 中的所有資料都是 <strong>時間序列 </strong> — 隨著時間的推移一系列值 (float64)，由指標名稱和一組鍵值標籤唯一識別。例如：</p>

___程式碼區塊_0___

<p>Labels 是 PromQL 中過濾、聚合和連接資料的主要工具。良好的標籤設計很重要 - 不要使用高基數標籤（例如使用者 ID 或請求 ID），因為它會創建數百萬個時間序列並減慢 Prometheus 的速度。 </p>

<h3>指標類型</h3>

<p>Prometheus 定義了四種基本類型的指標：</p><ul>
  ___HTMLTAG_86__HTMLTAG_87___計數器</strong>：值只會增加，不會減少（重新啟動時重設為0）。用於：總請求數、總錯誤數、發送的位元組數。查询通常与 <code>rate()</code> 或 <code>increase()</code>.</li> 一起使用
  ___HTMLTAG_94__HTMLTAG_95___Gauge</strong>：值可以自由增加或減少。用於：目前記憶體使用情況、當前 Pod 數量、佇列大小。 </li>
  ___HTMLTAG_98__HTMLTAG_99___直方圖</strong>：測量觀察值的分佈（通常是請求持續時間、回應大小）。建立後綴為 <code>_bucket</code>、<code>_sum</code>、<code>_count</code> 的時間序列。用于使用 <code>histogram_quantile()</code>.</li> 计算百分位数
  ___HTMLTAG_110__HTMLTAG_111___摘要</strong>：與直方圖類似，但在客戶端計算百分位數。不如直方圖靈活，不建議用於新指標。 </li>
</ul>

<h2>普羅米修斯運算子</h2>

<p>Prometheus Operator 協助以聲明方式管理 Kubernetes 上的 Prometheus 和 AlertManager。您無需手動編寫設定檔並重新載入 Prometheus，而是建立 Kubernetes 資源，Operator 將自動更新配置。 </p>

<h3>Prometheus Operator 的 CRD</h3>

<p>Prometheus Operator 提供以下 CRD：</p>
<ul>
  ___HTMLTAG_124__HTMLTAG_125___Prometheus</strong>：定義 Prometheus 實例</li>
  ___HTMLTAG_128__HTMLTAG_129___AlertManager</strong>：AlertManager 叢集定義</li>
  ___HTMLTAG_132__HTMLTAG_133___ServiceMonitor</strong>：定義如何從服務抓取指標</li>
  ___HTMLTAG_136__HTMLTAG_137___PodMonitor</strong>：定義如何從 Pod 抓取指標</li>
  ___HTMLTAG_140__HTMLTAG_141___PrometheusRule</strong>：定義警報和記錄規則</li>
  ___HTMLTAG_144__HTMLTAG_145___探針</strong>：定義黑盒監控目標</li>
</ul>

<h3>普羅米修斯 CRD</h3>

___程式碼區塊_1___

<p>Prometheus Operator 根據標籤選擇器自動發現 ServiceMonitors 和 PodMonitors — 新增新目標時無需重新啟動或重新載入 Prometheus。 </p>

<h2>ServiceMonitor — 從服務擷取指標</h2>

<p>ServiceMonitor 是將抓取目標新增至 Prometheus 的最受歡迎的方法。它定義了 Prometheus 如何從一組服務中尋找和抓取指標。 </p>

___程式碼區塊_2___

<p>服務需要公開具有正確名稱的指標連接埠：</p>

___程式碼區塊_3___

<h2>PodMonitor — 直接從 Pod 抓取指標</h2>

<p>PodMonitor 用於當您想要直接從 Pod 中抓取而不通過 Service 時，或者當每個 Pod 需要獨立抓取時（例如，每個 Pod 公開不同的指標）。 </p>

___程式碼區塊_4___

<h2>PromQL — Prometheus 查詢語言</h2>

<p>PromQL（Prometheus Query Language）是查詢時間序列資料的強大工具。以下是最常見的模式。 </p><h3>速率和增加</h3>

<p>使用計數器指標，您始終需要使用 <code>rate()</code> 或 <code>increase()</code> 來取得有意義的值：</p>

___程式碼區塊_5___

<h3>直方圖百分位數__HTMLTAG_176___

___程式碼區塊_6___

<h3>Kubernetes 特定查詢</h3>

___程式碼區塊_7___

<h2>Grafana 儀表板__HTMLTAG_180___

<p>Grafana 是一個視覺化層，與 Prometheus（以及 Loki、Tempo）連接以建立豐富的儀表板。 </p>

<h3>從 Grafana.com 導入儀表板</h3>

<p>Grafana.com 擁有數千個社群儀表板。 Kubernetes 的一些重要儀表板：</p>
<ul>
  ___HTMLTAG_188__HTMLTAG_189___ID 315</strong>：Kubernetes 叢集監控（基本）</li>
  ___HTMLTAG_192__HTMLTAG_193___ID 12740</strong>：Kubernetes 監控（高級，需要 kube-state-metrics）</li>
  ___HTMLTAG_196__HTMLTAG_197___ID 15661</strong>：Kubernetes 節點概述</li>
  ___HTMLTAG_200__HTMLTAG_201___ID 15760</strong>：Kubernetes 視圖 — 全球</li>
  ___HTMLTAG_204__HTMLTAG_205___ID 14205</strong>：Kubernetes — Pod 概述</li>
</ul>

<p>導入：前往 Grafana UI → 儀表板 → 導入 → 輸入 ID → 選擇 Prometheus 資料來源。 </p>

<h3>儀表板變數</h3>

<p>Variables 將儀表板變成互動式工具。 Kubernetes 的常用變數：</p>

___程式碼區塊_8___

<p>使用此變量，使用者可以選擇叢集 → 命名空間 → pod，儀表板中的每個面板將根據該選擇自動過濾。 </p>

<h3>重要面板</h3>

<p>完整的 Kubernetes 儀表板應具有：</p>
<ul>
  ___HTMLTAG_222__HTMLTAG_223___節點概述</strong>：每個節點的 CPU 使用情況、記憶體使用情況、磁碟 I/O、網路 I/O</li>
  ___HTMLTAG_226__HTMLTAG_227___Pod 指標</strong>：CPU/記憶體請求與限制與實際使用情況</li>
  ___HTMLTAG_230__HTMLTAG_231___部署狀態</strong>：所需副本與可用副本</li>
  ___HTMLTAG_234__HTMLTAG_235___容器重新啟動</strong>：1小時、24小時內重新啟動計數</li>
  ___HTMLTAG_238__HTMLTAG_239___錯誤率</strong>：每項服務的 HTTP 5xx 速率</li>
  ___HTMLTAG_242__HTMLTAG_243___延遲 P50/P95/P99</strong>：請求持續時間百分位數</li>
</ul>

<h2>AlertManager</h2>

<p>AlertManager 接收來自 Prometheus 的警報並對其進行處理：路由到正確的接收器、分組以減少噪音、抑制以避免警報風暴以及在維護期間靜音。 </p>

<h3>路由樹</h3>

<p>AlertManager 路由在分層樹中設定。每個路由匹配警報的標籤並將其發送到相應的接收器：</p>

___程式碼區塊_9___

<h3>禁止規則__HTMLTAG_256___

<p>抑制規則可防止在另一個警報處於活動狀態時發送警報。例如，當整個叢集宕機時，無需為每個服務發送警報：</p>___程式碼區塊_10___

<h2>PrometheusRule — 警報規則__HTMLTAG_260___

<p>PrometheusRule 定義警報規則和記錄規則。 Prometheus Operator 會自動將這些規則載入到 Prometheus 中。 </p>

___程式碼區塊_11___

<h2>記錄規則 — 預先計算昂貴的查詢</h2>

<p>記錄規則預先計算複雜的查詢並將結果儲存為新的時間序列。這顯著提高了使用大量查詢的儀表板和警報的效能。 </p>

___程式碼區塊_12___

<p>記錄規則的最佳實務：</p>
<ul>
  <li>名稱格式為 <code>level:metric:operations</code>（例如：<code>job:http_requests:rate5m</code>）</li>
  <li>僅為在多個地方使用的查詢建立記錄規則__HTMLTAG_277___
  <li>記錄規則的評估間隔必須小於抓取間隔</li>
  <li>不要為一次性查詢建立記錄規則</li>
</ul>

<h2>生產最佳實務</h2>

<h3>普羅米修斯尺寸</h3>

<p>Prometheus 記憶體使用量與活動時間序列的數量成正比。估計：每個樣本 1-2 個位元組，抓取間隔為 15 秒，10,000 個時間序列將使用約 1GB 的 RAM。擁有 100 個節點和數百個服務的集群，預計 500K-1M 時間序列。 </p>

<h3>高可用性</h3>

<p>使用相同的配置來執行 2 個 Prometheus 實例。 Grafana在查詢時會去重。使用 AlertManager，在叢集模式下執行 3 個實例，以確保警報不會遺失。 </p>

<h3>長期儲存</h3>

<p>Prometheus 應僅保留資料 2-4 週。對於長期儲存（數月/年），請使用 Thanos 或 Grafana Mimir — 兩者都支援物件儲存後端（S3、GCS），成本比 Prometheus 本地儲存低得多。 </p>

<h2>摘要</h2>

<p>Prometheus Operator 徹底改變了 Kubernetes 上的監控管理方式。使用 ServiceMonitor 和 PodMonitor，新增目標完全是聲明性的，不需要手動幹預。 PrometheusRule 幫助警報規則作為代碼進行管理（GitOps 友好），AlertManager 具有靈活的路由樹，可確保正確的人員收到正確的警報。 </p>

<p>下一課將充實可觀察性堆疊的其餘部分：用於日誌的 Loki 和用於分散式追蹤的 Tempo。 </p>