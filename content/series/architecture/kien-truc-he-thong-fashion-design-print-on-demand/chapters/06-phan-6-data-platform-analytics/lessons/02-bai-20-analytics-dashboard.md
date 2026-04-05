---
id: 019f0b20-a602-7001-e001-f2b8f9000602
title: 'Bài 20: Analytics Dashboard — Sales, Trend & Niche Research'
slug: bai-20-analytics-dashboard
description: >-
  Data warehouse architecture cho Fashion POD analytics,
  dashboards cho sales, designer, production, trend analytics,
  niche research tools và BI stack.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 6: Data Platform & Analytics"
course:
  id: 019f0b20-a100-7001-e001-f2b8f9000001
  title: Kiến trúc Hệ thống Fashion Design & Print-on-Demand — Từ Domain Analysis đến Production
  slug: kien-truc-he-thong-fashion-design-print-on-demand
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🏗️ Kiến trúc — Bài 20</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 20: Analytics Dashboard — Sales, Trend</tspan>
      <tspan x="60" dy="42">&amp; Niche Research</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Kiến trúc Hệ thống Fashion Design &amp; Print-on-Demand — Từ Domain Analysis đến Production</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Data Platform &amp; Analytics</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-warehouse-architecture"><strong>1. Data Warehouse Architecture</strong></h2>

<pre><code class="language-text">Sources (OLTP + Events)
   -> ELT/CDC Pipeline
   -> Staging Layer
   -> Data Models (dbt)
   -> Data Warehouse (ClickHouse/BigQuery)
   -> BI Dashboards (Metabase/Superset)
</code></pre>

<h2 id="2-star-schema"><strong>2. Star Schema cho POD</strong></h2>

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

<h2 id="3-core-dashboards"><strong>3. Core Dashboards</strong></h2>

<table>
<thead>
<tr><th>Dashboard</th><th>KPI chính</th></tr>
</thead>
<tbody>
<tr><td>Sales</td><td>GMV, AOV, conversion, CAC, ROAS</td></tr>
<tr><td>Designer</td><td>Top designs, royalty earned, repeat rate</td></tr>
<tr><td>Production</td><td>Lead time, defect rate, SLA breach</td></tr>
<tr><td>Channel</td><td>Revenue by Shopify/Etsy/Amazon/TikTok</td></tr>
<tr><td>Trend/Niche</td><td>Top trending tags, growth velocity, competition</td></tr>
</tbody>
</table>

<h2 id="4-sales-funnel"><strong>4. Sales Funnel Analytics</strong></h2>

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

<h2 id="5-production-metrics"><strong>5. Production Metrics</strong></h2>

<ul>
<li>P50/P95 production time theo supplier</li>
<li>Defect rate theo product type</li>
<li>Return reason distribution</li>
<li>On-time delivery rate theo region</li>
</ul>

<h2 id="6-trend-analytics"><strong>6. Trend & Niche Analytics</strong></h2>

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

<h2 id="7-data-quality"><strong>7. Data Quality & Governance</strong></h2>

<table>
<thead>
<tr><th>Rule</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td>Freshness</td><td>fact_orders trễ không quá 30 phút</td></tr>
<tr><td>Uniqueness</td><td>order_id unique trong mart table</td></tr>
<tr><td>Completeness</td><td>channel_key không null</td></tr>
<tr><td>Consistency</td><td>gross >= tax + shipping</td></tr>
</tbody>
</table>

<h2 id="8-tong-ket"><strong>8. Tổng kết</strong></h2>

<ul>
<li><p><strong>Star schema</strong> phù hợp cho dashboard vận hành và tài chính</p></li>
<li><p><strong>Sales + production + trend</strong> là 3 cụm dashboard cốt lõi của POD</p></li>
<li><p><strong>Funnel analytics</strong> giúp tối ưu conversion theo từng bước</p></li>
<li><p><strong>Data quality checks</strong> phải được tự động hóa cùng pipeline</p></li>
</ul>
