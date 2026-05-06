---
id: 019d8b30-b123-7001-c001-e0c5f8100123
title: 第 23 課：部署生產與效能調優
slug: bai-23-trien-khai-production-va-performance-tuning
description: 生產最佳部署實務、資料庫選擇（建議 PostgreSQL）、連線池調整（Agroal）、Quarkus 執行緒池配置、JVM 調整（堆疊、GC、容器感知設定）、--optimized 建置、主機名稱配置 (hostname-v2)、代理標頭（PROXY 協定、X-Forwarded-*）、HTTP/Infin 支援
duration_minutes: 240
is_free: true
video_url: null
sort_order: 23
section_title: 第 7 部分：生產、HA 和 Kubernetes
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1555" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1555)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1090" cy="120" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1080" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1070" cy="180" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1060" cy="210" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="240" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="120" x2="1100" y2="200" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="150" x2="1050" y2="220" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1000.3108891324554,152.5 1000.3108891324554,187.5 970,205 939.6891108675446,187.5 939.6891108675446,152.5 970,135" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 23 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 23 課：部署生產與</tspan>
      <tspan x="60" dy="42">效能調整</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：生產、HA 和 Kubernetes</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。生產部署清單___HTMLTAG_69__HTMLTAG_70___

<p>在生產中部署 Keycloak 需要仔細配置資料庫、網路、JVM、快取和安全性。本文提供了從資料庫選擇到負載測試的全面指導。 </p>

___預編碼_0___

___HTMLTAG_73__HTMLTAG_74___2。資料庫選擇與設定___HTMLTAG_75__HTMLTAG_76___

___HTMLTAG_77__HTMLTAG_78___2.1 資料庫支援矩陣___HTMLTAG_79__HTMLTAG_80___<table>
<thead>
___HTMLTAG_83__HTMLTAG_84___資料庫___HTMLTAG_85__HTMLTAG_86___供應商標誌___HTMLTAG_87__HTMLTAG_88___推薦___HTMLTAG_89__HTMLTAG_90__________HTMLTAG_9推薦___HTMLTAG_89__HTMLTAG_90__________HTMLTAG_91__HT
</thead>
<tbody>
___HTMLTAG_95__HTMLTAG_96___PostgreSQL___HTMLTAG_97__HTMLTAG_98__HTMLTAG_99___postgres___HTMLTAG_100__HTMLTAG_101__HTMLTAG_102___✅ Key 是___HTMLTAG103010410302____團隊最嚴格測試認可___HTMLTAG_105__HTMLTAG_106___
___HTMLTAG_107__HTMLTAG_108___MySQL____HTMLTAG_109__HTMLTAG_110__HTMLTAG_111___mysql___HTMLTAG_112__HTMLTAG_113__HTMLTAG_114___⚠ InnoDB、utf8mb4字元集___HTMLTAG_117__HTMLTAG_118___
___HTMLTAG_119__HTMLTAG_120___MariaDB___HTMLTAG_121__HTMLTAG_122__HTMLTAG_123____mariadb___HTMLTAG_124__HTMLTAG_125__HTMLTAG_126___⚠類似___HTMLTAG_129__HTMLTAG_130___
___HTMLTAG_131__HTMLTAG_132____Oracle____HTMLTAG_133__HTMLTAG_134__HTMLTAG_135____oracle___HTMLTAG_136__HTMLTAG_137__HTMLTAG_138___HTMLTAG_136__HTMLTAG_137__HTMLTAG_138______⚠️好的___HTMLTAG_139__HTMLTAG_140___需要企業授權___HTMLTAG_141__HTMLTAG_142___
___HTMLTAG_143__HTMLTAG_144___Microsoft SQL Server___HTMLTAG_145__HTMLTAG_146__HTMLTAG_147___mssql____HTMLTAG_148__HTMLTAG_149__HTMLTAG_150___⚠150___1151F環境___HTMLTAG_153__HTMLTAG_154___
___HTMLTAG_155__HTMLTAG_156___H2（嵌入）___HTMLTAG_157__HTMLTAG_158__HTMLTAG_159___dev-檔案</code>/___HTMLTAG_161_ __dev-mem___HTMLTAG_162__HTMLTAG_163__HTMLTAG_164___❌否___HTMLTAG_165__HTMLTAG_166___僅供開發___HTMLTAG_167__HTMLTAG_168___
</tbody>
</table>

___HTMLTAG_171__HTMLTAG_172___2.2 PostgreSQL 設定___HTMLTAG_173__HTMLTAG_174___

___預編碼_1___

<p>帶環境變數（建議用於容器）：</p>

___預編碼_2___

___HTMLTAG_177__HTMLTAG_178___2.3 連線池調整 (Agroal)___HTMLTAG_179__HTMLTAG_180___

<p>Keycloak 使用 <strong>Agroal</strong> 連線池（Quarkus 預設）。調優連線池是影響效能的重要因素：</p>

___預編碼_3___

<table>
<thead>
___HTMLTAG_187__HTMLTAG_188___參數____HTMLTAG_189__HTMLTAG_190___預設____HTMLTAG_191__HTMLTAG_192___推薦生產___HTMLTAG_193__HTMLTAG_194____192___建議生產___HTMLTAG_193__HTMLTAG_194_______說明
</thead>
<tbody>
___HTMLTAG_199__HTMLTAG_200__HTMLTAG_201___--db-pool-initial-size___HTMLTAG_202__HTMLTAG_203__HTMLTAG_2 04___0___HTMLTAG_205__HTMLTAG_206___25___HTMLTAG_207__HTMLTAG_208___初始連線數___HTMLTAG_209__HTMLTAG_210___
___HTMLTAG_211__HTMLTAG_212__HTMLTAG_213___--db-pool-min-size___HTMLTAG_214__HTMLTAG_215__HTMLTAG_216_ __0___HTMLTAG_217__HTMLTAG_218___25___HTMLTAG_219__HTMLTAG_220___維持的連線數最少___HTMLTAG_221__HTMLTAG_222___
___HTMLTAG_223__HTMLTAG_224__HTMLTAG_225___--db-pool-max-size___HTMLTAG_226__HTMLTAG_22 7__HTMLTAG_228___100___HTMLTAG_229__HTMLTAG_230___50–100___HTMLTAG_231__HTMLTAG_232___最大數量連接___HTMLTAG_233__HTMLTAG_234___
</tbody>
</table>___HTMLTAG_237__HTMLTAG_238___調整連線池大小的原則：___HTMLTAG_239__HTMLTAG_240___

___預編碼_4___

<p>伺服器端 PostgreSQL 設定 (<code>postgresql.conf</code>):</p>

___預編碼_5___

___HTMLTAG_245__HTMLTAG_246___3。建置最佳化___HTMLTAG_247__HTMLTAG_248___

___HTMLTAG_249__HTMLTAG_250___3.1 建置與啟動階段___HTMLTAG_251__HTMLTAG_252___

<p>Keycloak 有 2 個階段： <strong>build</strong> （打包設定）和 <strong>start</strong> （執行伺服器）。在生產中，始終使用 <code>--optimized</code> 來分離這兩個階段，使啟動速度顯著加快。 </p>

___預編碼_6___

___預編碼_7___

___HTMLTAG_261__HTMLTAG_262___3.2 生產 Dockerfile___HTMLTAG_263__HTMLTAG_264___

___預編碼_8___

___HTMLTAG_265__HTMLTAG_266___4。主機名稱配置___HTMLTAG_267__HTMLTAG_268___

___HTMLTAG_269__HTMLTAG_270___4.1 主機名稱 v2 提供者___HTMLTAG_271__HTMLTAG_272___

<p>Keycloak 使用 <strong>hostname-v2</strong> 提供者（Keycloak 25+ 中的預設值）來定義所有端點（前端、後端、管理）的 URL：</p>

___預編碼_9___

<table>
<thead>
___HTMLTAG_279__HTMLTAG_280___參數___HTMLTAG_281__HTMLTAG_282___說明___HTMLTAG_283__HTMLTAG_284___範例____HTMLTAG_285__HTMLTAG_286___
</thead>
<tbody>
___HTMLTAG_289__HTMLTAG_290__HTMLTAG_291___--主機名稱___HTMLTAG_292__HTMLTAG_293__HTMLTAG_294___前端 URL的主機名稱（登入頁面、眾所周知的端點）___HTMLTAG_295__HTMLTAG_296__HTMLTAG_297___auth.example.com___HTMLTAG_298__HTMLTAG_299__HTMLTAG_300___
___HTMLTAG_301__HTMLTAG_302__HTMLTAG_303___--hostname-admin___HTMLTAG_304__HTMLTAG_305__HTMLTAG_306___管理控制台的特殊主機名稱（如果與前端不同）。未設定 = 共享 <code>--主機名稱___HTMLTAG_308__HTMLTAG_309__HTMLTAG_310__HTMLTAG_3111___admin-auth.internal.com___HTMLTAG_312__HTMLTAG_3___admin-auth.internal.com___HTMLTAG_312__HTMLTAG_3___admin-auth.internal.com___HT
___HTMLTAG_315__HTMLTAG_316__HTMLTAG_317___--主機名稱嚴格___HTMLTAG_318__HTMLTAG_319__HTMLTAG_320___僅允許對配置的主機名稱的請求。預設值：<code>_true___HTMLTAG_322__HTMLTAG_323__HTMLTAG_324__HTMLTAG_325____true___HTMLTAG_326__HTMLTAG_327__HTMLTAG_328___
___HTMLTAG_329__HTMLTAG_330__HTMLTAG_331___--hostname-backchannel-dynamic___HTMLTAG_332__HTMLTAG_333__HTMLTAG_334___後端 URL 使用請求主機名稱而非固定主機名稱。預設值：<code>假___HTMLTAG_336__HTMLTAG_337__HTMLTAG_338__HTMLTAG_339___假___HTMLTAG_340__HTMLTAG_341__HTMLTAG_342___
</tbody>
</table>

___HTMLTAG_345__HTMLTAG_346___4.2 主機名稱方案___HTMLTAG_347__HTMLTAG_348___

___預編碼_10___

___HTMLTAG_349__HTMLTAG_350___5。代理程式配置___HTMLTAG_351__HTMLTAG_352___

___HTMLTAG_353__HTMLTAG_354___5.1 代理程式標頭___HTMLTAG_355__HTMLTAG_356___

<p>當Keycloak位於反向代理（Nginx、HAProxy、AWS ALB...）後面時，需要配置代理標頭，以便Keycloak接收正確的客戶端IP、協定和主機名稱：</p>

<pre><code class="language-bash"># Option 1: X-Forwarded-* headers (phổ biến nhất)
bin/kc.sh start --optimized \
  --proxy-headers=xforwarded

# Option 2: RFC 7239 Forwarded header
bin/kc.sh start --optimized \
  --proxy-headers=forwarded
</code></pre><table>
<thead>
___HTMLTAG_361__HTMLTAG_362___標頭____HTMLTAG_363__HTMLTAG_364___用途____HTMLTAG_365__HTMLTAG_366___標誌____HTMLTAG_367__HTMLTAG_368___
</thead>
<tbody>
___HTMLTAG_371__HTMLTAG_372__HTMLTAG_373___X-轉發至___HTMLTAG_374__HTMLTAG_375__HTMLTAG_376___客戶端IP位址___HTMLTAG_377__HTMLTAG_378__HTMLTAG_379___x轉送___HTMLTAG_380__HTMLTAG_381__HTMLTAG_382___
___HTMLTAG_383__HTMLTAG_384__HTMLTAG_385___X-Forwarded-Proto___HTMLTAG_386__HTMLTAG_387__HTMLTAG_388___原始協議(http/https)___HTMLTAG_389__HTMLTAG_390__HTMLTAG_391___xforwarded___HTMLTAG_392__HTMLTAG_393__HTMLTAG_394___
___HTMLTAG_395__HTMLTAG_396__HTMLTAG_397___X-轉送主機___HTMLTAG_398__HTMLTAG_399__HTMLTAG_400___原起始主機名稱___HTMLTAG_401__HTMLTAG_402__HTMLTAG_403___x轉送___HTMLTAG_404__HTMLTAG_405__HTMLTAG_406___
___HTMLTAG_407__HTMLTAG_408__HTMLTAG_409___X-轉送埠___HTMLTAG_410__HTMLTAG_411__HTMLTAG_412___原始連接埠___HTMLTAG_413__HTMLTAG_414__HTMLTAG_415___x轉送___HTMLTAG_416__HTMLTAG_417__HTMLTAG_418___
___HTMLTAG_419__HTMLTAG_420__HTMLTAG_421___已轉送___HTMLTAG_422__HTMLTAG_423__HTMLTAG_424___RFC 7239組合標頭___HTMLTAG_425__HTMLTAG_426__HTMLTAG_427___已轉送___HTMLTAG_428__HTMLTAG_429__HTMLTAG_430___
</tbody>
</table>

___HTMLTAG_433__HTMLTAG_434___5.2 Nginx 反向代理程式設定___HTMLTAG_435__HTMLTAG_436___

<pre><code class="language-nginx"># /etc/nginx/conf.d/keycloak.conf
upstream keycloak_backend {
    server keycloak-1:8443;
    server keycloak-2:8443;
    # Sticky session based on KEYCLOAK_SESSION cookie
    sticky cookie KEYCLOAK_ROUTE expires=1h domain=.example.com httponly secure;
}

server {
    listen 443 ssl http2;
    server_name auth.example.com;

    ssl_certificate     /etc/nginx/certs/tls.crt;
    ssl_certificate_key /etc/nginx/certs/tls.key;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options SAMEORIGIN;

    # Buffer sizes cho Keycloak (tokens có thể lớn)
    proxy_buffer_size        128k;
    proxy_buffers            4 256k;
    proxy_busy_buffers_size  256k;
    large_client_header_buffers 4 16k;

    location / {
        proxy_pass https://keycloak_backend;

        # X-Forwarded headers
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_set_header X-Forwarded-Host   $host;
        proxy_set_header X-Forwarded-Port   $server_port;

        # WebSocket support (cho Admin Console)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
    }
}
</code></pre>

___HTMLTAG_437__HTMLTAG_438___5.3 HTTP/2 支援___HTMLTAG_439__HTMLTAG_440___

<pre><code class="language-bash"># Enable HTTP/2 (default đã enabled khi dùng HTTPS)
bin/kc.sh start --optimized \
  --hostname=auth.example.com \
  --https-certificate-file=/certs/tls.crt \
  --https-certificate-key-file=/certs/tls.key \
  --http-enabled=false

# Nếu cần HTTP/2 cleartext (h2c) cho internal communication
bin/kc.sh start --optimized \
  --hostname=auth.example.com \
  --http-enabled=true \
  --http-port=8080
</code></pre>

___HTMLTAG_441__HTMLTAG_442___6。 JVM 調整___HTMLTAG_443__HTMLTAG_444___

___HTMLTAG_445__HTMLTAG_446___6.1 堆疊配置___HTMLTAG_447__HTMLTAG_448___

<p>Keycloak運行在Quarkus/JVM上，因此JVM調優直接影響效能和穩定性：</p>

<pre><code class="language-bash"># JVM Heap - sử dụng JAVA_OPTS_KC_HEAP (Keycloak 25+)
export JAVA_OPTS_KC_HEAP="-XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=70.0"

# Hoặc set fixed heap size
export JAVA_OPTS_KC_HEAP="-Xms512m -Xmx2g"
</code></pre>

___HTMLTAG_451__HTMLTAG_452___6.2 垃圾收集器選擇___HTMLTAG_453__HTMLTAG_454___

<pre><code class="language-bash"># Option 1: G1GC (recommended cho heap ≤ 4GB)
export JAVA_OPTS_APPEND="-XX:+UseG1GC \
  -XX:MaxGCPauseMillis=200 \
  -XX:G1HeapRegionSize=16m \
  -XX:+ParallelRefProcEnabled \
  -XX:+UseStringDeduplication"

# Option 2: ZGC (recommended cho heap > 4GB, low-latency)
export JAVA_OPTS_APPEND="-XX:+UseZGC \
  -XX:+ZGenerational \
  -XX:ConcGCThreads=2"

# Option 3: Shenandoah GC (alternative low-latency)
export JAVA_OPTS_APPEND="-XX:+UseShenandoahGC \
  -XX:ShenandoahGCHeuristics=compact"
</code></pre>

<table>
<thead>
___HTMLTAG_457__HTMLTAG_458___GC 演算法___HTMLTAG_459__HTMLTAG_460___最適合___HTMLTAG_461__HTMLTAG_462___堆大小___HTMLTAG_463__HTMLTAG_464____462___堆大小___HTMLTAG_463__HTMLTAG_464_______1464____46]
</thead>
<tbody>
___HTMLTAG_469__HTMLTAG_470___G1GC___HTMLTAG_471__HTMLTAG_472___通用，平衡吞吐量/延遲___HTMLTAG_473__HTMLTAG_474___≤≤ 4GB___HTMLTAG_475__HTMLTAG_476____MLTAG1476_____
___HTMLTAG_479__HTMLTAG_480___ZGC___HTMLTAG_481__HTMLTAG_482____
___HTMLTAG_489__HTMLTAG_490___Shenandoah___HTMLTAG_491__HTMLTAG_492___低延遲、並發___HTMLTAG_493__HTMLTAG_494___> 2GB___HTMLTAG_495__HTMLTAG_496___MLGMLTAG107____MLTAG1496_____
</tbody>
</table>

___HTMLTAG_501__HTMLTAG_502___6.3 容器感知 JVM 設定___HTMLTAG_503__HTMLTAG_504___

<pre><code class="language-bash"># Container-aware JVM settings (Docker/Kubernetes)
export JAVA_OPTS_APPEND=" \
  -XX:+UseContainerSupport \
  -XX:MaxRAMPercentage=70.0 \
  -XX:InitialRAMPercentage=50.0 \
  -XX:MinRAMPercentage=50.0 \
  -XX:ActiveProcessorCount=2 \
  -XX:+UseG1GC \
  -XX:MaxGCPauseMillis=200 \
  -Djava.net.preferIPv4Stack=true \
  -Djava.awt.headless=true \
  -Dfile.encoding=UTF-8"
</code></pre>

___HTMLTAG_505__HTMLTAG_506___6.4 完整的 JVM 設定___HTMLTAG_507__HTMLTAG_508___

<pre><code class="language-bash"># Production JVM configuration hoàn chỉnh
export JAVA_OPTS_KC_HEAP="-XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=70.0"

export JAVA_OPTS_APPEND=" \
  -XX:+UseG1GC \
  -XX:MaxGCPauseMillis=200 \
  -XX:G1HeapRegionSize=16m \
  -XX:+ParallelRefProcEnabled \
  -XX:+UseStringDeduplication \
  -XX:+UseContainerSupport \
  -XX:ActiveProcessorCount=2 \
  -XX:MetaspaceSize=256m \
  -XX:MaxMetaspaceSize=512m \
  -Djava.net.preferIPv4Stack=true \
  -Djava.awt.headless=true \
  -Dfile.encoding=UTF-8 \
  -XX:+ExitOnOutOfMemoryError \
  -XX:+HeapDumpOnOutOfMemoryError \
  -XX:HeapDumpPath=/opt/keycloak/dumps/"
</code></pre>___HTMLTAG_509__HTMLTAG_510___7。 Quarkus 執行緒池和 Vert.x___HTMLTAG_511__HTMLTAG_512___

<p>Keycloak 在 Quarkus 上運作（Vert.x 事件循環 + 工作執行緒池）。了解此模式有助於正確調整：</p>

<pre><code class="language-text">┌───────────────────────────────────────────────────────┐
│                  Keycloak / Quarkus                    │
│                                                       │
│  ┌─────────────────────────────────────────────────┐  │
│  │          Vert.x Event Loop Threads              │  │
│  │  (IO_THREADS = 2 × CPU cores, default)          │  │
│  │  - Accept connections                           │  │
│  │  - Parse HTTP requests                          │  │
│  │  - Non-blocking operations                      │  │
│  └──────────────┬──────────────────────────────────┘  │
│                  │ delegate blocking work              │
│  ┌──────────────▼──────────────────────────────────┐  │
│  │          Worker Thread Pool                     │  │
│  │  (WORKER_THREADS = 8 × CPU cores, default)      │  │
│  │  - Database queries                             │  │
│  │  - LDAP calls                                   │  │
│  │  - Token signing/validation                     │  │
│  │  - Template rendering                           │  │
│  └─────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────┘
</code></pre>

<pre><code class="language-bash"># Quarkus thread pool configuration (qua Java system properties)
export JAVA_OPTS_APPEND=" \
  -Dquarkus.thread-pool.max-threads=200 \
  -Dquarkus.thread-pool.queue-size=1000 \
  -Dquarkus.thread-pool.growth-resistance=0.1 \
  -Dquarkus.vertx.event-loops-pool-size=4"
</code></pre>

<table>
<thead>
___HTMLTAG_517__HTMLTAG_518___參數___HTMLTAG_519__HTMLTAG_520___預設___HTMLTAG_521__HTMLTAG_522___說明____HTMLTAG_523__HTMLTAG_524___
</thead>
<tbody>
___HTMLTAG_527__HTMLTAG_528__HTMLTAG_529___quarkus.thread-pool.max-threads____HTMLTAG_530__HTMLTAG_531__HTMLTAG_532___200（或最大 8 × CPU）___HTMLTAG_533__HTMLTAG_534___最大工作執行緒___HTMLTAG_535__HTMLTAG_536___
___HTMLTAG_537__HTMLTAG_538__HTMLTAG_539___quarkus.thread-pool.queue-size____HTMLTAG_540__HTMLT AG_541__HTMLTAG_542___無界___HTMLTAG_543__HTMLTAG_544___所有執行緒繁忙時的佇列大小___HTMLTAG_545__HTMLTAG_546___
___HTMLTAG_547__HTMLTAG_548__HTMLTAG_549___quarkus.thread-pool.growth-resistance____HTMLTAG_550__H TMLTAG_551__HTMLTAG_552____0___HTMLTAG_553__HTMLTAG_554___0–1，執行緒池成長阻力___HTMLTAG_555__HTMLTAG_556___
___HTMLTAG_557__HTMLTAG_558__HTMLTAG_559___quarkus.vertx.event-loops-pool-size___HTMLTAG_560__HTMLTAG_561__HTMLTAG_562___2 × CPU</td>__Vert_563__4MLG.事件循環線程___HTMLTAG_565__HTMLTAG_566___
</tbody>
</table>

___HTMLTAG_569__HTMLTAG_570___8。 Infinispan 本機快取調整___HTMLTAG_571__HTMLTAG_572___

___HTMLTAG_573__HTMLTAG_574___8.1 Keycloak 快取架構___HTMLTAG_575__HTMLTAG_576___

<p>Keycloak 使用 Infinispan 本機快取來快取元資料（領域、使用者、金鑰...）以減少資料庫查詢。調整快取大小和壽命會大大影響效能：</p>

___預編碼_20___

___HTMLTAG_579__HTMLTAG_580___8.2 自訂快取配置___HTMLTAG_581__HTMLTAG_582___

<p>建立自訂 <code>cache-ispn.xml</code> 檔案：</p>

<pre><code class="language-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;infinispan
    xmlns="urn:infinispan:config:15.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:infinispan:config:15.0
        https://infinispan.org/schemas/infinispan-config-15.0.xsd"&gt;

    &lt;cache-container name="keycloak"&gt;
        &lt;!-- Realm cache - cache metadata realm --&gt;
        &lt;local-cache name="realms"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="20000"/&gt;
        &lt;/local-cache&gt;

        &lt;!-- User cache - cache user data --&gt;
        &lt;local-cache name="users"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="20000"/&gt;
        &lt;/local-cache&gt;

        &lt;!-- Authorization cache --&gt;
        &lt;local-cache name="authorization"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="20000"/&gt;
        &lt;/local-cache&gt;

        &lt;!-- Keys cache - signing/encryption keys --&gt;
        &lt;local-cache name="keys"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="5000"/&gt;
            &lt;expiration max-idle="3600000"/&gt; &lt;!-- 1 hour --&gt;
        &lt;/local-cache&gt;

        &lt;!-- Revision caches - invalidation tracking --&gt;
        &lt;local-cache name="realmRevisions"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="40000"/&gt;
        &lt;/local-cache&gt;

        &lt;local-cache name="userRevisions"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="40000"/&gt;
        &lt;/local-cache&gt;

        &lt;local-cache name="authorizationRevisions"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="40000"/&gt;
        &lt;/local-cache&gt;
    &lt;/cache-container&gt;
&lt;/infinispan&gt;
</code></pre>

<pre><code class="language-bash"># Sử dụng custom cache config
bin/kc.sh build --cache=ispn --cache-config-file=cache-ispn.xml
bin/kc.sh start --optimized
</code></pre>

___HTMLTAG_587__HTMLTAG_588___9。指標和運行狀況檢查___HTMLTAG_589__HTMLTAG_590___

___HTMLTAG_591__HTMLTAG_592___9.1 指標端點___HTMLTAG_593__HTMLTAG_594___

<pre><code class="language-bash"># Enable metrics (cần set khi build)
bin/kc.sh build --metrics-enabled=true
bin/kc.sh start --optimized
</code></pre>

<p>指標端點：___HTMLTAG_596__URL_1___>（Prometheus 格式）</p>

___預編碼_24___

___HTMLTAG_598__HTMLTAG_599___9.2 運作狀況檢查端點___HTMLTAG_600__HTMLTAG_601___

___預編碼_25___<table>
<thead>
___HTMLTAG_604__HTMLTAG_605___端點____HTMLTAG_606__HTMLTAG_607___用途____HTMLTAG_608__HTMLTAG_609___Kubernetes 探針___HTMLTAG_610__HTMLTAG_611___
</thead>
<tbody>
___HTMLTAG_614__HTMLTAG_615__HTMLTAG_616___/health/ready___HTMLTAG_617__HTMLTAG_618__HTMLTAG_619___準備就緒 - 準備好接收流量___HTMLTAG_620__HTMLTAG1211621201620___
___HTMLTAG_624__HTMLTAG_625__HTMLTAG_626___/health/live___HTMLTAG_627__HTMLTAG_628__HTMLTAG_629___活躍度 - 進程處於活動狀態___HTMLTAG_630__HTMLTAG_6311141631____ML
___HTMLTAG_634__HTMLTAG_635__HTMLTAG_636___/health/started___HTMLTAG_637__HTMLTAG_638__HTMLTAG_639___啟動 - 開始完成___HTMLTAG_640__HTMLTAG_641____ProProwML414646___
___HTMLTAG_644__HTMLTAG_645__HTMLTAG_646___/健康___HTMLTAG_647__HTMLTAG_648__HTMLTAG_649___綜合健康狀況___HTMLTAG_650__HTMLTAG_651___—___HTMLTAG_65121_____
</tbody>
</table>

<pre><code class="language-json">// GET /health/ready - Response khi healthy
{
  "status": "UP",
  "checks": [
    {
      "name": "Keycloak database connections health check",
      "status": "UP"
    }
  ]
}

// GET /health/ready - Response khi unhealthy
{
  "status": "DOWN",
  "checks": [
    {
      "name": "Keycloak database connections health check",
      "status": "DOWN",
      "data": {
        "message": "Unable to connect to database"
      }
    }
  ]
}
</code></pre>

___HTMLTAG_656__HTMLTAG_657___10。使用加特林進行負載測試___HTMLTAG_658__HTMLTAG_659___

___HTMLTAG_660__HTMLTAG_661___10.1 Keycloak 基準項目____HTMLTAG_662__HTMLTAG_663___

<p>Keycloak 提供了一個基於 Gadling 框架的官方基準項目：</p>

___預編碼_27___

___HTMLTAG_666__HTMLTAG_667___10.2 自訂加特林模擬___HTMLTAG_668__HTMLTAG_669___

___預編碼_28___

___HTMLTAG_670__HTMLTAG_671___11。生產清單摘要___HTMLTAG_672__HTMLTAG_673___<table>
<thead>
___HTMLTAG_676__HTMLTAG_677___類別___HTMLTAG_678__HTMLTAG_679___項目____HTMLTAG_680__HTMLTAG_681___狀態____HTMLTAG_682__HTMLTAG_683___
</thead>
<tbody>
___HTMLTAG_686__HTMLTAG_687__HTMLTAG_688___資料庫___HTMLTAG_689__HTMLTAG_690__HTMLTAG_691____已調整連結池的 PostgreSQL___HTMLTAG_692__HTMLTAG_693___________MLGMLGML
___HTMLTAG_696__HTMLTAG_697__HTMLTAG_698___資料庫___HTMLTAG_699__HTMLTAG_700__HTMLTAG_701___資料庫自動備份（pg_dump / pg_basebackup）<td>資料庫自動備份（pg_dump / pg_basebackup）___HTMLTAG_702__41G1070207G_702__47G_702__5
___HTMLTAG_706__HTMLTAG_707__HTMLTAG_708___資料庫___HTMLTAG_709__HTMLTAG_710__HTMLTAG_711___已設定資料庫複製___HTMLTAG_712__HTMLTAG_713___________HTML___已設定資料庫複製___HTMLTAG_712__HTMLTAG_713___________HTML___已設定資料庫複製___HTMLTAG_712__HTMLTAG_713___________HTML___已設定資料庫複製___HTMLTAG_7141515_____
___HTMLTAG_716__HTMLTAG_717__HTMLTAG_718___建置___HTMLTAG_719__HTMLTAG_720__HTMLTAG_721__HTMLTAG_722___kc.sh 建置</code> + <code>開始--最佳化___HTMLTAG_725__HTMLTAG_726__HTMLTAG_727___________HTMLTAG_728__HTMLTAG_729___
___HTMLTAG_730__HTMLTAG_731__HTMLTAG_732___建置___HTMLTAG_733__HTMLTAG_734__HTMLTAG_735____多階段Dockerfile____HTMLTAG_736__HTMLTAG_737___________多階段Dockerfile____HTMLTAG_736__HTMLTAG_737___________
___HTMLTAG_740__HTMLTAG_741__HTMLTAG_742___主機名稱___HTMLTAG_743__HTMLTAG_744__HTMLTAG_745__HTMLTAG_746_ __--主機名稱_</code>已設定（主機名稱-v2）___HTMLTAG_748__HTMLTAG_749___________HTMLTAG_750__HTMLTAG_751___
___HTMLTAG_752__HTMLTAG_753__HTMLTAG_754___主機名稱___HTMLTAG_755__HTMLTAG_756__HTMLTAG_757__HTMLTAG_758___ --主機名稱-admin_</code>設定為單獨的網域___HTMLTAG_760__HTMLTAG_761_____________HTMLTAG_762__HTMLTAG_763___
___HTMLTAG_764__HTMLTAG_765__HTMLTAG_766___TLS___HTMLTAG_767__HTMLTAG_768__HTMLTAG_769___有效的 TLS 憑證（Let's Encrypt/CA 簽章）___HTMLTAG_770HTMLTAG172172_FMLTAGMLTAGMLTAGMLTAG1721_UFMLTAGMLTAGMLTAG
___HTMLTAG_774__HTMLTAG_775__HTMLTAG_776___TLS___HTMLTAG_777__HTMLTAG_778__HTMLTAG_779___啟用 TLS 1.2+，停用弱密碼___HTMLTAG_780__HTMLTAGMLTA_781_HTHTML47223_HTMLTAGML_78123_HT
___HTMLTAG_784__HTMLTAG_785__HTMLTAG_786___代理___HTMLTAG_787__HTMLTAG_788__HTMLTAG_789__HTMLTAG_79 0___--代理標頭_</code>配置正確___HTMLTAG_792__HTMLTAG_793___________HTMLTAG_794__HTMLTAG_795___
___HTMLTAG_796__HTMLTAG_797__HTMLTAG_798___JVM___HTMLTAG_799__HTMLTAG_800__HTMLTAG_801___堆疊大小（50–70% 容器記憶體）___HTMLTAG_802__HTMLTAGML_8038_HT480_____2__HT
___HTMLTAG_806__HTMLTAG_807__HTMLTAG_808___JVM___HTMLTAG_809__HTMLTAG_810__HTMLTAG_811___選擇的GC演算法(G1GC/ZGC)___HTMLTAG_812__HTMLTAGML_813HTHTHTU415____
___HTMLTAG_816__HTMLTAG_817__HTMLTAG_818___JVM___HTMLTAG_819__HTMLTAG_820__HTMLTAG_821____容器感知標誌已啟用___HTMLTAG_822__HTMLTAG_823___________MLTAG_824__HT
___HTMLTAG_826__HTMLTAG_827__HTMLTAG_828___JVM___HTMLTAG_829__HTMLTAG_830__HTMLTAG_831__HTMLTAG_832___-XX:+ExitOnOutOfMemoryError___MLTAGrr833設定___HTMLTAG_834__HTMLTAG_835___________HTMLTAG_836__HTMLTAG_837___
___HTMLTAG_838__HTMLTAG_839__HTMLTAG_840___快取___HTMLTAG_841__HTMLTAG_842___<td>Infinispan 本機快取已調整___HTMLTAG_844__HTMLTAG_845_________________HTMLTAG_846__HTMLTAG_847___
___HTMLTAG_848__HTMLTAG_849__HTMLTAG_850___可觀察性___HTMLTAG_851__HTMLTAG_852__HTMLTAG_853___已啟用指標端點(___H TMLTAG_854___/指標</code>)___HTMLTAG_856__HTMLTAG_857_______________HTMLTAG_858__HTMLTAG_859___
___HTMLTAG_860__HTMLTAG_861__HTMLTAG_862___可觀察性___HTMLTAG_863__HTMLTAG_864__HTMLTAG_865___已啟用執行狀況檢查(<code>/health/*</code>)___HTMLTAG_868__HTMLTAG_869___________HTMLTAG_870__HTMLTAG_871___
___HTMLTAG_872__HTMLTAG_873__HTMLTAG_874___可觀察性____HTMLTAG_875__HTMLTAG_876__HTMLTAG_877___已設定日誌記錄（JSON 格式，日誌等級）___HTMLTAG_878__HTMLTAG87988__HT
___HTMLTAG_882__HTMLTAG_883__HTMLTAG_884___安全性___HTMLTAG_885__HTMLTAG_886__HTMLTAG_887___獨立域/網路上的管理控制台___HTMLTAG_888__HTMLTAG_887___獨立域/網路上的管理控制台___HTMLTAG_888__HTMLTAG_889________________
___HTMLTAG_892__HTMLTAG_893__HTMLTAG_894___安全性___HTMLTAG_895__HTMLTAG_896__HTMLTAG_897___預設管理員憑證已變更___HTMLTAG_898__HTMLTAG_899___________MLTAG_190109G________
___HTMLTAG_902__HTMLTAG_903__HTMLTAG_904___安全性___HTMLTAG_905__HTMLTAG_906__HTMLTAG_907____已啟用強力保護___HTMLTAG_908__HTMLTAG_909___________MLTAG_9091010G
___HTMLTAG_912__HTMLTAG_913__HTMLTAG_914___安全性___HTMLTAG_915__HTMLTAG_916__HTMLTAG_917___CORS 設定正確___HTMLTAG_918__HTMLTAG_919___________HTMLTAG_91201120201920_____
___HTMLTAG_922__HTMLTAG_923__HTMLTAG_924___負載測試___HTMLTAG_925__HTMLTAG_926__HTMLTAG_927___透過加特林基準測試（p95 < 500ms）<td>透過加特林基準測試（p95 < 500ms）<td>透過加特林基準測試(p95 < 500ms）___HTMLTAG_928__9MLGMLG
___HTMLTAG_932__HTMLTAG_933__HTMLTAG_934___負載測試___HTMLTAG_935__HTMLTAG_936__HTMLTAG_937____記錄容量規劃____HTMLTAG_938__HTMLTAG_939___________HTMLTAG____HTMLTAG_938__HTMLTAG_939___________HTMLTAG____4021
___HTMLTAG_942__HTMLTAG_943__HTMLTAG_944___備份___HTMLTAG_945__HTMLTAG_946__HTMLTAG_947____領域自動匯出___HTMLTAG_948__HTMLTAG_949___________HTML____領域自動匯出___HTMLTAG_948__HTMLTAG_949___________HTML____領域自動匯出_____TAGML
___HTMLTAG_952__HTMLTAG_953__HTMLTAG_954___備份___HTMLTAG_955__HTMLTAG_956__HTMLTAG_957____已測試災難復原計畫___HTMLTAG_958__HTMLTAG_959________</defs>HTMLTAG_958__HTMLTAG_959___________HTMLTAG_66011960211970_HT
</tbody>
</table>___預編碼_29___

<pre><code class="language-bash"># Docker Compose cho production
# docker-compose.production.yml
</code></pre>

<pre><code class="language-yaml">version: "3.9"

services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: keycloak
      POSTGRES_USER: keycloak
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    volumes:
      - pgdata:/var/lib/postgresql/data
      - ./postgresql.conf:/etc/postgresql/postgresql.conf
    command: postgres -c config_file=/etc/postgresql/postgresql.conf
    secrets:
      - db_password
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U keycloak"]
      interval: 10s
      timeout: 5s
      retries: 5
    deploy:
      resources:
        limits:
          cpus: "2.0"
          memory: 4G

  keycloak:
    image: my-registry/keycloak-production:26.0
    build:
      context: .
      dockerfile: Dockerfile.keycloak
    environment:
      KC_DB_URL: jdbc:postgresql://postgres:5432/keycloak
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD_FILE: /run/secrets/db_password
      KC_DB_POOL_INITIAL_SIZE: "25"
      KC_DB_POOL_MIN_SIZE: "25"
      KC_DB_POOL_MAX_SIZE: "100"
      KC_HOSTNAME: auth.example.com
      KC_HOSTNAME_ADMIN: admin-auth.internal.example.com
      KC_PROXY_HEADERS: xforwarded
      KC_HTTPS_CERTIFICATE_FILE: /certs/tls.crt
      KC_HTTPS_CERTIFICATE_KEY_FILE: /certs/tls.key
      KC_HTTP_ENABLED: "false"
      KC_LOG: console
      KC_LOG_LEVEL: info
      KC_LOG_CONSOLE_OUTPUT: json
      JAVA_OPTS_KC_HEAP: "-XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=70.0"
      JAVA_OPTS_APPEND: >-
        -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:+UseContainerSupport
        -XX:+ExitOnOutOfMemoryError -Djava.net.preferIPv4Stack=true
    volumes:
      - ./certs:/certs:ro
    secrets:
      - db_password
    ports:
      - "8443:8443"
    depends_on:
      postgres:
        condition: service_healthy
    healthcheck:
      test: ["CMD-SHELL", "curl -sf https://localhost:8443/health/ready || exit 1"]
      interval: 15s
      timeout: 5s
      retries: 5
      start_period: 120s
    deploy:
      resources:
        limits:
          cpus: "2.0"
          memory: 2G

volumes:
  pgdata:

secrets:
  db_password:
    file: ./secrets/db_password.txt
</code></pre>