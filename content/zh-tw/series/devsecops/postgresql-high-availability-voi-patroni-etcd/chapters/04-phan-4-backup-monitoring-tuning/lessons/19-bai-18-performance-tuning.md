---
id: 019c9617-fb98-7319-877d-16408c323ce3
title: 第 18 課：性能調優
slug: bai-18-performance-tuning
description: 最佳化 PostgreSQL 配置，實現連線池 (PgBouncer)、負載平衡 (HAProxy) 和擴充唯讀副本。
duration_minutes: 130
is_free: true
video_url: null
sort_order: 18
section_title: 第 4 部分：備份、監控與調整
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7034" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7034)"/>

  <!-- Decorations -->
  <g>
    <circle cx="739" cy="267" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="878" cy="86" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1017" cy="165" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="656" cy="244" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="795" cy="63" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="197" x2="1100" y2="277" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="227" x2="1050" y2="297" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="974.712812921102,131 974.712812921102,163 947,179 919.287187078898,163 919.287187078898,131 947,115" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 18 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 18 課：效能調優__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：備份、監控與調整</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標____HTMLTAG_66__HTMLTAG_67___完成本課程後，您將：____HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___最佳化 HA 叢集的 Postgrecer ___配置_HTMLTAG_71__HTMLTAG_72___設定連線池___HTMLTAG_73__HTMLTAG_74___使用下列指令實現負載平衡HAProxy___HTMLTAG_75__HTMLTAG_76___使用多個副本擴充讀取____HTMLTAG_7 7__HTMLTAG_78___調整查詢和索引____HTMLTAG_79__HTMLTAG_80___監視和解決效能問題___HTMLTAG_81__HTMLTAG_82__HTMLTAG_83___1。 PostgreSQL 設定調整___HTMLTAG_84__HTMLTAG_85___1.1。記憶體設定___HTMLTAG_86__HTMLTAG_87___shared_buffers___HTMLTAG_88__CODEBLOCK_0__HTMLTAG_89___ effective_cache_size___HTMLTAG_90__CODEBLOCK _1__HTMLTAG_91___work_mem___HTMLTAG_92__CODEBLOCK_2__HTMLTAG_93___maintenance_work_mem___HTMLTAG_94__CODEBLOCK_3__HTMLTAG_95___1.2。檢查點調整___HTMLTAG_96__CODEBLOCK_4__HTMLTAG_97___1.3。 WAL 設定___HTMLTAG_98__CODEBLOCK_5__HTMLTAG_99___1.4。查詢規劃器___HTMLTAG_100__CODEBLOCK_6__HTMLTAG_101___1.5。連線設定___HTMLTAG_102__CODEBLOCK_7__HTMLTAG_103___1.6。自動真空調整___HTMLTAG_104__CODEBLOCK_8__HTMLTAG_105___1.7。記錄效能___HTMLTAG_106__CODEBLOCK_9__HTMLTAG_107___1.8。應用配置</h3><pre><code class="language-sql">-- Reload configuration (no restart needed for most)
SELECT pg_reload_conf();

-- Check what requires restart:
SELECT name, setting, pending_restart 
FROM pg_settings 
WHERE pending_restart = true;

-- Restart if needed:
</code></pre><pre><code class="language-bash">sudo systemctl restart patroni
</code></pre><h2 id="2-connection-pooling-with-pgbouncer">2。使用 PgBouncer 的連線池___HTMLTAG_110__HTMLTAG_111___2.1。為什麼要使用連線池？ ___HTMLTAG_112__HTMLTAG_113__HTMLTAG_114___沒有池的問題</strong>：___HTMLTAG_116__CODEBLOCK_12__HTML TAG_117__HTMLTAG_118___解決方案PgBouncer</strong>：___HTMLTAG_120__CODEBLOCK_13__HTMLTAG_121___2.2。安裝 PgBouncer____HTMLTAG_122__CODEBLOCK_14__HTMLTAG_123___2.3。設定 PgBouncer____HTMLTAG_124__CODEBLOCK_15__HTMLTAG_125__HTMLTAG_126___池模式說明</strong>：___HTMLTAG_128__CODEBLOCK_16__HTMLTAG_129___2.4。使用者驗證___HTMLTAG_130__CODEBLOCK_17__HTMLTAG_131___2.5。啟動 PgBouncer___HTMLTAG_132__CODEBLOCK_18__HTMLTAG_133___2.6。測試連接___HTMLTAG_134__CODEBLOCK_19__HTMLTAG_135___2.7。應用程式配置___HTMLTAG_136__CODEBLOCK_20__HTMLTAG_137___2.8。監控 PgBouncer___HTMLTAG_138__CODEBLOCK_21__HTMLTAG_139___3。使用 HAProxy 進行負載平衡___HTMLTAG_140__HTMLTAG_141___3.1。 HAProxy 架構___HTMLTAG_142__CODEBLOCK_22__HTMLTAG_143___3.2.安裝 HAProxy</h3>___CODEBLOCK_23__HTMLTAG_145___3.3。設定HAProxy</h3><pre><code class="language-bash"># /etc/haproxy/haproxy.cfg
sudo tee /etc/haproxy/haproxy.cfg &lt;&lt;'EOF'
global
    log /dev/log local0
    log /dev/log local1 notice
    chroot /var/lib/haproxy
    stats socket /run/haproxy/admin.sock mode 660 level admin
    stats timeout 30s
    user haproxy
    group haproxy
    daemon

defaults
    log     global
    mode    tcp
    option  tcplog
    option  dontlognull
    timeout connect 5000
    timeout client  50000
    timeout server  50000

# Stats page
listen stats
    mode http
    bind *:7000
    stats enable
    stats uri /
    stats refresh 10s
    stats admin if TRUE

# Frontend for write (primary)
frontend postgres_write
    bind *:5000
    mode tcp
    default_backend postgres_primary

# Backend for primary (writes)
backend postgres_primary
    mode tcp
    option httpchk
    http-check expect status 200
    default-server inter 3s fall 3 rise 2 on-marked-down shutdown-sessions
    server node1 10.0.1.11:5432 check port 8008 check-ssl verify none
    server node2 10.0.1.12:5432 check port 8008 check-ssl verify none backup
    server node3 10.0.1.13:5432 check port 8008 check-ssl verify none backup

# Frontend for read (replicas)
frontend postgres_read
    bind *:5001
    mode tcp
    default_backend postgres_replicas

# Backend for replicas (reads)
backend postgres_replicas
    mode tcp
    balance roundrobin
    option httpchk
    http-check expect status 200
    http-check send meth GET uri /replica
    default-server inter 3s fall 3 rise 2
    server node2 10.0.1.12:5432 check port 8008 check-ssl verify none
    server node3 10.0.1.13:5432 check port 8008 check-ssl verify none
    server node1 10.0.1.11:5432 check port 8008 check-ssl verify none backup
EOF
</code></pre>___HTMLTAG_147__HTMLTAG_148___設定說明</strong>：___HTMLTAG_150__CODEBLOCK_25__HTMLTAG_151___3.4。用於執行狀況檢查的 Patroni REST API 端點____HTMLTAG_152__CODEBLOCK_26__HTMLTAG_153___3.5。啟動 HAProxy___HTMLTAG_154__CODEBLOCK_27__HTMLTAG_155___3.6。測試負載平衡___HTMLTAG_156__CODEBLOCK_28__HTMLTAG_157___3.7。應用程式使用___HTMLTAG_158__CODEBLOCK_29__HTMLTAG_159___3.8。監控 HAProxy___HTMLTAG_160__CODEBLOCK_30__HTMLTAG_161___4。閱讀擴充策略___HTMLTAG_162__HTMLTAG_163___4.1。新增更多唯讀副本</h3><pre><code class="language-bash"># Add 4th node as read replica
# On node4:

# Install PostgreSQL + Patroni (same as before)
# Configure patroni.yml with tags:

tags:
  nofailover: true  # Don't promote to primary
  noloadbalance: false  # Include in load balancing
  priority: 0  # Lowest priority

# Start Patroni
sudo systemctl start patroni

# Verify joined cluster
patronictl list postgres
</code></pre><pre><code class="language-text">Before (3 nodes):
Write: 100% → Primary
Read:  50% → Replica1, 50% → Replica2

After (4 nodes):
Write: 100% → Primary
Read:  33% → Replica1, 33% → Replica2, 33% → Replica3 ✅
</code></pre><h3 id="42-cascading-replication">4.2。級聯複製</h3><pre><code class="language-yaml"># For geographically distributed replicas
# node4 (remote datacenter) replicates from node2 instead of primary

# In node4's patroni.yml:
bootstrap:
  dcs:
    postgresql:
      parameters:
        primary_conninfo: 'host=node2 port=5432 user=replicator...'
</code></pre><pre><code class="language-text">Topology:
Primary (node1)
  ↓
  ├─→ Replica (node2)
  │     ↓
  │     └─→ Replica (node4 - cascading) ← Reduces load on primary
  └─→ Replica (node3)
</code></pre><h3 id="43-application-level-read-routing">4.3。應用離子級讀取路由___HTMLTAG_168__CODEBLOCK_35__HTMLTAG_169___4.4。監控讀取分佈___HTMLTAG_170__CODEBLOCK_36__HTMLTAG_171___5。查詢最佳化___HTMLTAG_172__HTMLTAG_173___5.1。啟用 pg_stat_statements_</h3><pre><code class="language-sql">-- Add to postgresql.conf
ALTER SYSTEM SET shared_preload_libraries = 'pg_stat_statements';

-- Restart required
</code></pre><pre><code class="language-bash">sudo systemctl restart patroni
</code></pre><pre><code class="language-sql">-- Create extension
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- View top queries by time
SELECT query,
       calls,
       total_exec_time,
       mean_exec_time,
       max_exec_time
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 20;
</code></pre><h3 id="52-identify-slow-queries">5.2。辨識慢速查詢____HTMLTAG_176__CODEBLOCK_40__HTMLTAG_177___5.3。解釋分析___HTMLTAG_178__CODEBLOCK_41__HTMLTAG_179___5.4。建立索引___HTMLTAG_180__CODEBLOCK_42__HTMLTAG_181___5.5。索引維護___HTMLTAG_182__CODEBLOCK_43__HTMLTAG_183___6。最佳實務___HTMLTAG_184__HTMLTAG_185___✅ 應該___HTMLTAG_186__HTMLTAG_187__HTMLTAG_188__HTMLTAG_189___從保守設定開始</strong>-逐步調整___HTMLTAG_191__HTMLTAG_192__HTMLTAG_193___之前和之前監控之後</strong>&nbsp;- 衡量更改的影響____HTMLTAG_195__HTMLTAG_196__HTMLTAG_197___使用連接池 HTMLTAGML&U&F&F&Kw&KU&U&_197___。應用程式至關重要___HTMLTAG_199__HTMLTAG_200__HTMLTAG_201___分離讀寫流量</strong>&nbsp;-獨立縮放讀取____HTMLTAG_203__HTMLTAG_204__HTMLTAG_205___MLTAG_203__HTMLTAG_204__HTMLTAG_205_____ 206___&nbsp;-基於查詢模式___HTMLTAG_207__HTMLTAG_208__HTMLTAG_209___定期VACUUM</strong>-保留表統計資料已更新___HTMLTAG_211__HTMLTAG_212__HTMLTAGEXINPLA ANALYZE</strong>-了解查詢執行___HTMLTAG_215__HTMLTAG_216__HTMLTAG_217___設定statement_timeout</strong>-防止失控查詢____HTMLTAG_219__HTMLTAG_220___MLTAG_220__2G____ML____2G_219__HTMLTAG_220__2G____ML2012G___ PgBouncer___HTMLTAG_223__HTMLTAG_224__HTMLTAG_225___測試配置更改</strong>-分階段中首先___HTMLTAG_227__HTMLTAG_228__HTMLTAG_229___❌不要___HTMLTAG_230__HTMLTAG_231__HTMLTAG_232__HTMLTAG_233___不要過度分配work_mem___HTMLTAG_232__HTMLTAG_233___不要過度分配work_mem</strong>&nb&nbsp; ___HTMLTAG_235__HTMLTAG_236__HTMLTAG_237___不要建立太多索引_</strong>- 減慢寫入速度____HTMLTAG_239__HTMLTAG_240__HTMLTAG_241不要忽略自動清理______ML會導致膨脹____HTMLTAG_243__HTMLTAG_244__HTMLTAG_245___不要跳過連接池</strong>&nbsp;- 連線開銷會造成影響___HTMLTAG_247__HTMLTAG_248__HTMLTAG_249___-m____]事務模式更好____HTMLTAG_251__HTMLTAG_252__HTMLTAG_253___不要忘記分析</strong>&nbsp;- 過時的統計資料=糟糕的計畫___HTMLTAG_255__HTMLTAG_256__HTMLTAG_257_______MLTAG_255__HTMLTAG_256__HTVTAG_257_______了解你的情況變更____HTMLTAG_259__HTMLTAG_260__HTMLTAG_261___不要將shared_buffers設定得太高</strong>&nbsp;->25% RAM浪費___HTMLTAG_263__HTMLTAG_264_____MLG_264__57G_264_____MLTAG_264__57G_264__57。實驗室練習___HTMLTAG_266__HTMLTAG_267___實驗 1：PostgreSQL 調整___HTMLTAG_268__HTMLTAG_269__HTMLTAG_270___任務</strong>：___HTMLTAG_272__HTMLTAG_273147473__HTMLTAGbench_273__HTMLTAGb23174273__HT對目前效能進行基準測試___HTMLTAG_275__HTMLTAG_276___Tune記憶體設定（shared_buffers、work_mem）___HTMLTAG_277__HTMLTAG_278___調整檢查點設定___HTMLTAG_279__HTMLTAG_280___比較結果___HTMLTAG_281__HTMLTAG_282___文件改進___HTMLTAG_283__HTMLTAG_284__HTMLTAG_285___實驗2：設定PgBouncer___HTMLTAG_286__HTMLTAG_287__HTMLTAG_288___任務</strong>：___HTMLTAG_290__HTMLTAG_291__HTMLTAG_292___在主節點上安裝PgBouncer___HTMLTAG_293__HTMLTAG_294___設定事務池___HTMLTAG_295__HTMLTAG_296___更新應用程式使用PgBouncer___HTMLTAG_297__HTMLTAG_298___監控連接計數（之前/之後）___HTMLTAG_299__HTMLTAG_300___C_303___HTMLTAG_301__HTMLTAG_302__HTMLTAG_303___HTMLTAG_301__HTMLTAG_302__HTMLTAG_303___HT__實驗室 3：HAProxy___負載平衡___HTMLTAG_304__HTMLTAG_305__HTMLTAG_306___任務</strong>：___HTMLTAG_308__HTMLTAG_309__HTMLTAG_310___安裝與設定HAProxy_ ___HTMLTAG_311__HTMLTAG_312___设置写入和读取端点___HTMLTAG_313__HTMLTAG_314___测试路由（写入→主，读取→副本）___HTMLTAG_315__HTMLTAG_316___模拟故障转移，验证HAProxy 是否適應____HTMLTAG_317__HTMLTAG_318___監控流量分佈____HTMLTAG_319__HTMLTAG_320__HTMLTAG_321___實驗4：查詢最佳化___HTMLTAG_322__HTMLTAG_323__HTMLTAG_324___任務</strong>：___HTMLTAG_326__HTMLTAG_327__HTMLTAG_328___啟用pg_stat _statements___HTMLTAG_329__HTMLTAG_330___運行範例工作負載___HTMLTAG_331__HTMLTAG_332___辨識最慢的10個查詢____HTMLTAG_333__HTMLTAG_334___使用EXPLAIN ANALYZE 了解計畫___HTMLTAG_335__HTMLTAG_336___建立索引進行最佳化___HTMLTAG_337__HTMLTAG_338___衡量改進___HTMLTAG_339__HTMLTAG_340__HTMLTAG_341___HT8。摘要___HTMLTAG_342__HTMLTAG_343___效能調整清單___HTMLTAG_344__HTMLTAG_345__HTMLTAG_346___調整shared_buffers (25% RAM)___HTMLTAG_347__HTMLTAG_348___設定 seffect_cache___HTMLTAG_347__HTMLTAG_348___設定 seffect_cache___ RAM)___HTMLTAG_349__HTMLTAG_350___&nbsp;仔細調整 work_mem___HTMLTAG_351__HTMLTAG_352___&nbsp;優化檢查點____HTMLTAG_353__HTMLTAG_354___&nbsp;優化檢查點____HTMLTAG_353__HTMLTAG_354___&nbsp;降低 SSD 的random_page_cost___HTMLTAG_355__HTMLTAG_356___&nbsp;啟用pg_stat_statements____HTMLTAG_357__HTMLTAG_358___&nbsp;設定 PgBouncer 連線池___HTMLTAG_359__HTMLTAGsp_30HA&nbProj;負載平衡___HTMLTAG_361__HTMLTAG_362___基於建立索引查詢____HTMLTAG_363__HTMLTAG_364___監控與迭代____HTMLTAG_365__HTMLTAG_366__HTMLTAG_367___關鍵概念___HTMLTAG_368__HTMLTAG_369___✅__ _HTMLTAG_370___连接池</strong>-减少连接开销显着___HTMLTAG_372__HTMLTAG_373___✅&nbsp;<strong>负载平衡</strong>&nbsp;-跨副本分配讀取流量___HTMLTAG_376__HTMLTAG_377___✅&nbsp;<strong>讀取擴充</strong>&nbsp;-將副本新增至處理讀取負載___HTMLTAG_380__HTMLTAG_381___✅&nbsp;<strong>查詢最佳化</strong>-索引+解釋分析___HTMLTAG_384__HTMLTAG_385___✅&w&m* CPU___HTMLTAG_388__HTMLTAG_389___後續步驟___HTMLTAG_390__HTMLTAG_391___第 19 課將介紹<strong>日誌記錄與故障排除</strong>:<strong>日誌記錄與故障排除</strong>:___QMLTAG_394__MLTAG_394__​​PostG.日誌分析___HTMLTAG_397__HTMLTAG_398___Patroni日誌解釋____HTMLTAG_399__HTMLTAG_400___etcd問題故障排除____HTMLTAG_401__HTMLTAG_402___常見問題與解決方案___HTMLTAG_403__HTMLTAG_404___偵錯技術與工具____HTMLTAG_405__HTMLTAG_406___