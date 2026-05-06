---
id: 019f0b20-a602-7001-e001-f2b8f9000602
title: 第 20 課：分析儀表板 — 銷售、趨勢與利基研究
slug: bai-20-analytics-dashboard
description: 用於時尚 POD 分析的資料倉儲架構、用於銷售、設計師、生產、趨勢分析的儀表板、利基研究工具和 BI 堆疊。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: 第 6 部分：資料平台與分析
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: 時裝設計與按需印刷系統架構－從領域分析到生產
  slug: kien-truc-he-thong-fashion-design-print-on-demand
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2772" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2772)"/>

  <!-- Decorations -->
  <g>
    <circle cx="941" cy="33" r="14" fill="#34d399" opacity="0.08"/>
    <circle cx="782" cy="34" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="623" cy="35" r="20" fill="#34d399" opacity="0.14"/>
    <circle cx="964" cy="36" r="23" fill="#34d399" opacity="0.07"/>
    <circle cx="805" cy="37" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="243" x2="1100" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="273" x2="1050" y2="343" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1025.9089653438086,174 1025.9089653438086,212 993,231 960.0910346561914,212 960.0910346561914,174 993,155" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ 建築 — 第 20 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 20 課：分析儀表板 — 銷售、趨勢</tspan>
      <tspan x="60" dy="42">& 利基研究</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">時裝設計與按需印刷系統架構－從領域分析到生產</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：資料平台與分析</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-warehouse-architecture"><strong>1. 資料倉儲架構</strong></h2>

<pre><code class="language-text">Sources (OLTP + Events)
   -> ELT/CDC Pipeline
   -> Staging Layer
   -> Data Models (dbt)
   -> Data Warehouse (ClickHouse/BigQuery)
   -> BI Dashboards (Metabase/Superset)
</code></pre>

<h2 id="2-star-schema"><strong>2. POD 的星型模式</strong></h2>

<pre><code class="language-sql">-- Fact table
fact_orders(
  order_id,
  date_key,
  shop_key,
  product_key,
  channel_key,
  supplier_key,
  gross_revenue_cents,
  shipping_cents,
  tax_cents,
  discount_cents,
  quantity,
  status
)

-- Dimensions
dim_date(date_key, day, week, month, quarter, year)
dim_shop(shop_key, shop_id, segment, country)
dim_product(product_key, product_id, category, style, tags)
dim_channel(channel_key, channel_name)
dim_supplier(supplier_key, supplier_name, region)
</code></pre>

<h2 id="3-core-dashboards"><strong>3. 核心儀表板</strong></h2>

<table>
<thead>
<tr><th>儀表板</th><th>關鍵關鍵績效指標</th></tr>
</thead>
<tbody>
<tr><td>銷售</td><td>GMV、AOV、轉換、CAC、ROAS</td></tr>
<tr><td>設計師</td><td>頂級設計、版稅收入、重複率</td></tr>
<tr><td>生產</td><td>交貨時間、缺陷率、SLA 違規</td></tr>
<tr><td>頻道</td><td>Shopify/Etsy/Amazon/TikTok 收入</td></tr>
<tr><td>趨勢/利基</td><td>熱門標籤、成長速度、競爭</td></tr>
</tbody>
</table>

<h2 id="4-sales-funnel"><strong>4. 銷售漏斗分析</strong></h2>

<pre><code class="language-text">Impression -> Product View -> Add to Cart -> Checkout Start -> Payment Success
</code></pre>

<pre><code class="language-sql">SELECT
  date,
  SUM(impressions) AS impressions,
  SUM(product_views) AS views,
  SUM(add_to_cart) AS atc,
  SUM(checkout_start) AS checkout,
  SUM(purchases) AS purchases,
  ROUND(SUM(purchases)::numeric / NULLIF(SUM(product_views),0), 4) AS view_to_buy
FROM mart_funnel_daily
GROUP BY date
ORDER BY date DESC;
</code></pre>

<h2 id="5-production-metrics"><strong>5. 生產指標</strong></h2>

<ul>
<li>根據供應商的 P50/P95 生產時間</li>
<li>按產品類型劃分的缺陷率</li>
<li>退貨原因分佈</li>
<li>按地區劃分的準時交貨率</li>
</ul>

<h2 id="6-trend-analytics"><strong>6. 趨勢和利基分析</strong></h2>

<pre><code class="language-typescript">interface TrendInsight {
  tag: string;
  weekGrowthPct: number;
  monthGrowthPct: number;
  competitionScore: number;
  opportunityScore: number;
}

function opportunity(trend: number, competition: number) {
  return 0.7 * trend - 0.3 * competition;
}
</code></pre>

<h2 id="7-data-quality"><strong>7. 資料品質與治理</strong></h2>

<table>
<thead>
<tr><th>規則</th><th>例如</th></tr>
</thead>
<tbody>
<tr><td>新鮮度</td><td>實際訂單遲到時間不超過 30 分鐘</td></tr>
<tr><td>獨特性</td><td>order_id 在 mart 表中是唯一的</td></tr>
<tr><td>完整性</td><td>channel_key 不為空</td></tr>
<tr><td>一致性</td><td>毛額 >= 稅金 + 運費</td></tr>
</tbody>
</table>

<h2 id="8-tong-ket"><strong>八、總結</strong></h2>

<ul>
<li><p><strong>星型模式</strong> 適用於營運和財務儀表板</p></li>
<li><p><strong>銷售+產量+趨勢</strong> POD 的 3 個核心儀表板集群</p></li>
<li><p><strong>漏斗分析</strong> 幫助逐步優化轉化</p></li>
<li><p><strong>數據品質檢查</strong> 必須透過管道實現自動化</p></li>
</ul>
