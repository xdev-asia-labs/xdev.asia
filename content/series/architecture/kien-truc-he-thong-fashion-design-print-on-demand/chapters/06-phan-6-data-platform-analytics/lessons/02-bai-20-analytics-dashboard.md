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
