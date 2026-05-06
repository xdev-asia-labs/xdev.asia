---
id: 019e0a10-a701-7001-d001-f1a7f8000701
title: 第 22 課：FHIR 效能、可擴充性和監控
slug: bai-22-fhir-performance-scalability-va-monitoring
description: >-
  優化 FHIR 伺服器效能、快取策略、資料庫索引、水平擴展、負載平衡、靜態內容 CDN、Prometheus/Grafana 監控、運行狀況檢查、運行狀況
  SLA。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 22
section_title: 第七部分：生產、規模與未來
course:
  id: 019e0a10-a100-7001-d001-f1a7f8000001
  title: HL7 FHIR - 基礎到進階醫療資料標準
  slug: hl7-fhir-chuan-du-lieu-y-te-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9274" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c1222"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9274)"/>

  <!-- Decorations -->
  <g>
    <circle cx="673" cy="229" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="746" cy="122" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="819" cy="275" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="892" cy="168" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="965" cy="61" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="179" x2="1100" y2="259" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="209" x2="1050" y2="279" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1008.444863728671,162 1008.444863728671,196 979,213 949.555136271329,196 949.555136271329,162 979,145" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🏗️ 建築 — 第 22 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 22 課：FHIR 效能、可擴充性和</tspan>
      <tspan x="60" dy="42">監控</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">HL7 FHIR - 基礎到進階醫療資料標準</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第七部分：生產、規模與未來</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-performance-challenges"><strong>1. 醫療保健領域的表現挑戰</strong></h2>

<p>醫療FHIR Server系統必須滿足高要求：正常運作時間≥99.9%，回應時間<500ms，百萬級資源。</p>

<table>
<thead>
<tr><th>因素</th><th>挑戰</th><th>目標</th></tr>
</thead>
<tbody>
<tr><td>回應時間</td><td>大型資料集的複雜搜索</td><td>< 500 毫秒 (P95)</td></tr>
<tr><td>吞吐量</td><td>多家醫院同時查詢</td><td>≥ 1000 請求/秒</td></tr>
<tr><td>數據量</td><td>數百萬患者，數十億觀察結果</td><td>結核病規模</td></tr>
<tr><td>可用性</td><td>24/7 緊急護理</td><td>≥99.9%</td></tr>
<tr><td>一致性</td><td>醫療數據必須準確</td><td>一致性強</td></tr>
</tbody>
</table>

<h2 id="2-database-optimization"><strong>2. 資料庫優化</strong></h2>

<h3 id="postgresql-indexing"><strong>HAPI FHIR 的 PostgreSQL 索引</strong></h3>

<pre><code class="language-sql">-- Index cho search by identifier (CCCD, BHYT)
CREATE INDEX idx_spidx_token_hash 
ON hfj_spidx_token (hash_identity, sp_value_normalized)
WHERE sp_missing = false;

-- Index cho search by name
CREATE INDEX idx_spidx_string_normalized 
ON hfj_spidx_string (hash_identity, sp_value_normalized)
WHERE sp_missing = false;

-- Index cho search by date (Observation.date)
CREATE INDEX idx_spidx_date_range 
ON hfj_spidx_date (hash_identity, sp_value_low, sp_value_high)
WHERE sp_missing = false;

-- Index cho _lastUpdated sorting
CREATE INDEX idx_res_updated 
ON hfj_resource (res_updated DESC, res_id)
WHERE res_deleted_at IS NULL;

-- Partitioning cho Observation (table lớn nhất)
CREATE TABLE hfj_res_observation PARTITION OF hfj_resource
FOR VALUES IN ('Observation')
PARTITION BY RANGE (res_updated);

CREATE TABLE hfj_res_observation_2025_q1 
PARTITION OF hfj_res_observation
FOR VALUES FROM ('2025-01-01') TO ('2025-04-01');
</code></pre>

<h3 id="query-optimization"><strong>查詢最佳化</strong></h3>

<pre><code class="language-yaml"># application.yml - HAPI FHIR tuning
hapi:
  fhir:
    # Search caching
    reuse_cached_search_results_millis: 60000
    
    # Pagination
    default_page_size: 20
    max_page_size: 200
    
    # Prefetch
    search_prefetch_thresholds:
      - 13  # offset 0
      - 50  # offset 1
      - 200 # offset 2+
    
    # Inline resource storage (tránh JOIN)
    inline_resource_storage_below_size: 4096

spring:
  datasource:
    hikari:
      maximum-pool-size: 50
      minimum-idle: 10
      connection-timeout: 5000
      idle-timeout: 300000
</code></pre>

<h2 id="3-caching"><strong>3. 快取策略</strong></h2>

<pre><code class="language-text">┌────────┐   ┌───────┐   ┌──────────┐   ┌──────┐
│ Client │──▶│ CDN/  │──▶│  Redis   │──▶│ FHIR │
│        │   │ Nginx │   │  Cache   │   │Server│
└────────┘   └───────┘   └──────────┘   └──────┘
</code></pre>

<pre><code class="language-java">// Redis cache cho CapabilityStatement và ValueSet
@Configuration
public class FhirCacheConfig {
    
    @Bean
    public CacheManager cacheManager(
            RedisConnectionFactory redisFactory) {
        RedisCacheConfiguration config = 
            RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofMinutes(30))
                .serializeValuesWith(
                    SerializationPair.fromSerializer(
                        new GenericJackson2JsonRedisSerializer()));
        
        return RedisCacheManager.builder(redisFactory)
            .cacheDefaults(config)
            .withCacheConfiguration("metadata",
                config.entryTtl(Duration.ofHours(1)))
            .withCacheConfiguration("valueset",
                config.entryTtl(Duration.ofHours(24)))
            .build();
    }
}

// Interceptor: cache CapabilityStatement
@Component
public class MetadataCacheInterceptor {
    
    @Autowired
    private CacheManager cacheManager;
    
    @Hook(Pointcut.SERVER_CAPABILITY_STATEMENT_GENERATED)
    public void cacheCapabilityStatement(
            IBaseConformance cs) {
        cacheManager.getCache("metadata")
            .put("capability", cs);
    }
}
</code></pre>

<h3 id="http-caching"><strong>HTTP 快取標頭</strong></h3>

<pre><code class="language-nginx"># nginx.conf
location /fhir/metadata {
    proxy_pass http://fhir-server:8080;
    proxy_cache fhir_cache;
    proxy_cache_valid 200 1h;
    add_header X-Cache-Status $upstream_cache_status;
}

location /fhir/ValueSet {
    proxy_pass http://fhir-server:8080;
    proxy_cache fhir_cache;
    proxy_cache_valid 200 24h;
    proxy_cache_key "$request_uri";
}

# Dynamic resources — no cache
location /fhir/Patient {
    proxy_pass http://fhir-server:8080;
    add_header Cache-Control "no-store";
}
</code></pre>

<h2 id="4-horizontal-scaling"><strong>4. 水平縮放</strong></h2>

<pre><code class="language-yaml"># docker-compose-ha.yml
services:
  nginx:
    image: nginx:alpine
    ports:
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - fhir-1
      - fhir-2
      - fhir-3

  fhir-1:
    image: hapiproject/hapi:latest
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://pgpool:5432/hapi_fhir
      - JAVA_OPTS=-Xmx2g
  
  fhir-2:
    image: hapiproject/hapi:latest
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://pgpool:5432/hapi_fhir
      - JAVA_OPTS=-Xmx2g
  
  fhir-3:
    image: hapiproject/hapi:latest
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://pgpool:5432/hapi_fhir
      - JAVA_OPTS=-Xmx2g

  pgpool:
    image: bitnami/pgpool:latest
    environment:
      - PGPOOL_BACKEND_NODES=0:pg-primary:5432,1:pg-replica:5432
      - PGPOOL_ENABLE_LOAD_BALANCING=yes
      - PGPOOL_SR_CHECK_USER=repmgr

  pg-primary:
    image: bitnami/postgresql-repmgr:16
    environment:
      - POSTGRESQL_DATABASE=hapi_fhir
      - REPMGR_NODE_TYPE=primary

  pg-replica:
    image: bitnami/postgresql-repmgr:16
    environment:
      - REPMGR_NODE_TYPE=standby
      - REPMGR_PRIMARY_HOST=pg-primary

  redis:
    image: redis:7-alpine
    command: redis-server --maxmemory 1gb --maxmemory-policy allkeys-lru
</code></pre>

<h2 id="5-monitoring"><strong>5. 使用Prometheus + Grafana進行監控</strong></h2>

<h3 id="metrics-exposure"><strong>公開指標</strong></h3>

<pre><code class="language-yaml"># application.yml
management:
  endpoints:
    web:
      exposure:
        include: health,info,prometheus
  metrics:
    export:
      prometheus:
        enabled: true
    tags:
      application: fhir-server
</code></pre>

<h3 id="prometheus-config"><strong>普羅米修斯配置</strong></h3>

<pre><code class="language-yaml"># prometheus.yml
scrape_configs:
  - job_name: 'fhir-server'
    metrics_path: '/actuator/prometheus'
    scrape_interval: 15s
    static_configs:
      - targets:
          - 'fhir-1:8080'
          - 'fhir-2:8080'
          - 'fhir-3:8080'
</code></pre>

<h3 id="key-metrics"><strong>關鍵指標需要追蹤</strong></h3>

<table>
<thead>
<tr><th>公制</th><th>描述</th><th>警報閾值</th></tr>
</thead>
<tbody>
<tr><td>http_server_requests_seconds_p95</td><td>P95響應時間</td><td>> 500 毫秒</td></tr>
<tr><td>http_server_requests_total</td><td>請求率</td><td>異常檢測</td></tr>
<tr><td>jvm_內存_已使用_位元組</td><td>JVM 堆使用情況</td><td>> 80%</td></tr>
<tr><td>hikaricp_connections_active</td><td>活動資料庫連接</td><td>> 80% 池</td></tr>
<tr><td>fhir_search_duration_秒</td><td>搜尋查詢時間</td><td>> 1秒</td></tr>
<tr><td>fhir_資源_計數</td><td>總資源</td><td>成長率</td></tr>
<tr><td>pg_stat_activity_count</td><td>PostgreSQL 連接</td><td>> 最大 90%</td></tr>
<tr><td>磁碟使用百分比</td><td>磁碟空間</td><td>> 85%</td></tr>
</tbody>
</table>

<h3 id="health-check"><strong>健康檢查端點</strong></h3>

<pre><code class="language-java">@Component
public class FhirHealthIndicator implements HealthIndicator {
    
    @Autowired
    private IGenericClient fhirClient;
    
    @Override
    public Health health() {
        try {
            CapabilityStatement cs = fhirClient
                .capabilities()
                .ofType(CapabilityStatement.class)
                .execute();
            
            return Health.up()
                .withDetail("fhirVersion", cs.getFhirVersion().toCode())
                .withDetail("resourceCount", 
                    cs.getRest().get(0).getResource().size())
                .build();
        } catch (Exception e) {
            return Health.down()
                .withException(e)
                .build();
        }
    }
}
</code></pre>

<h2 id="6-alerting"><strong>6. 警報規則</strong></h2>

<pre><code class="language-yaml"># alerting-rules.yml
groups:
  - name: fhir-server
    rules:
      - alert: FHIRHighResponseTime
        expr: |
          histogram_quantile(0.95,
            rate(http_server_requests_seconds_bucket{uri=~"/fhir/.*"}[5m])
          ) > 0.5
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "FHIR Server P95 response time > 500ms"

      - alert: FHIRServerDown
        expr: up{job="fhir-server"} == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "FHIR Server instance down"

      - alert: FHIRDatabaseConnectionExhausted
        expr: |
          hikaricp_connections_active / 
          hikaricp_connections_max > 0.8
        for: 5m
        labels:
          severity: warning
</code></pre>

<h2 id="7-tong-ket"><strong>七、總結</strong></h2>

<ul>
<li><p><strong>資料庫最佳化</strong> — PostgreSQL 的索引、分區、連接池</p></li>
<li><p><strong>快取</strong> — Redis 用於元資料/ValueSet、Nginx 反向代理緩存</p></li>
<li><p><strong>水平縮放</strong> — 多個 FHIR 實例 + 負載平衡器 + PgPool</p></li>
<li><p><strong>監控</strong> — Prometheus 指標、Grafana 儀表板、警報規則</p></li>
<li><p><strong>健康檢查</strong> — 自訂 HealthIndicator、就緒性/活性探針</p></li>
<li><p><strong>醫療 SLA</strong> — 正常運作時間 ≥ 99.9%，P95 < 500ms，稽核追蹤 7 年以上</p></li>
</ul>
