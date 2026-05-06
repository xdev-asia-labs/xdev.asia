---
id: 019c9617-fb94-7137-99fe-08685ac4ab93
title: 第 17 課：監控 Patroni 集群
slug: bai-17-monitoring-patroni-cluster
description: 使用 Prometheus + Grafana 設定監控堆疊，使用 postgres_exporter，配置 HA 叢集的警報規則。
duration_minutes: 175
is_free: true
video_url: null
sort_order: 17
section_title: 第 4 部分：備份、監控與調整
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8943" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8943)"/>

  <!-- Decorations -->
  <g>
    <circle cx="905" cy="185" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="710" cy="150" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="1015" cy="115" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="820" cy="80" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="625" cy="45" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="115" x2="1100" y2="195" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="145" x2="1050" y2="215" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="940.9807621135332,100 940.9807621135332,130 915,145 889.0192378864668,130 889.0192378864668,100.00000000000001 915,85" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：監控 Patroni 叢集</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：備份、監控與調整</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標___HTMLTAG_66__HTMLTAG_67___完成本課程後，您將：___HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___了解 PostgreSQL HA 叢集的重要指標____HTMLTAG_71__HTMLTAGeus_72______HTMLTAGeus_72______HTMLTAG進行監控___HTMLTAG_73__HTMLTAG_74___設定 postgres_exporter和patoni_exporter___HTMLTAG_75__HTMLTAG_76___建立儀表板和警報規則___HTMLTAG_77__HTMLTAG_78___監控etcd叢集運作狀況____HTMLTAG_79__HTMLTAG_80___實作可觀察性最佳實務叢集運作狀況____HTMLTAG_79__HTMLTAG_80___實作可觀察性最佳實務叢集運作狀況____G_81__1UG_81__182_8212_____81__28為什麼監控很重要___HTMLTAG_84__HTMLTAG_85___1.1.監控目標___HTMLTAG_86__HTMLTAG_87__HTMLTAG_88___可見性</strong>：___HTMLTAG_ 90__CODEBLOCK_0__HTMLTAG_91__HTMLTAG_92___要回答的關鍵問題</strong>：</p>___CODEBLOCK_1__HTMLTAG_95___1.2。四個黃金訊號___HTMLTAG_96__HTMLTAG_97__HTMLTAG_98___延遲</strong>：請求需要多長時間？ ___HTMLTAG_100__CODEBLOCK_2__HTMLTAG_101__HTMLTAG_102___流量</strong>：多少請求？ ___HTMLTAG_104__CODEBLOCK_3__HTMLTAG_105__HTMLTAG_106___錯誤</strong>：出了什麼問題？ ___HTMLTAG_108__CODEBLOCK_4__HTMLTAG_109__HTMLTAG_110___飽和度</strong>：有多滿資源？ ___HTMLTAG_112__CODEBLOCK_5__HTMLTAG_113___2。監控指標___HTMLTAG_114__HTMLTAG_115___2.1。叢集層級指標____HTMLTAG_116__HTMLTAG_117___叢集運作狀況____HTMLTAG_118__CODEBLOCK_6__HTMLTAG_119___複製運作狀況____HTMLTAG_120__CODEBLOCK_7__HTMLTAG_121___2.2.2.2.12 Postgre指標____HTMLTAG_122__HTMLTAG_123___連線指標____HTMLTAG_124__CODEBLOCK_8__HTMLTAG_125___資料庫大小與成長____HTMLTAG_126__CO DEBLOCK_9__HTMLTAG_127___事務率___HTMLTAG_128__CODEBLOCK_10__HTMLTAG_129___快取命中比率___HTMLTAG_130__CODEBLOCK_11__ HTMLTAG_131___索引使用____HTMLTAG_132__CODEBLOCK_12__HTMLTAG_133___真空和自動真空____HTMLTAG_134__CODEBLOCK_13__HTMLTAG _135___鎖定____HTMLTAG_136__CODEBLOCK_14__HTMLTAG_137___長期運行查詢____HTMLTAG_138__CODEBLOCK_15__HTMLTAG_139___2.3。 Patroni 指標____HTMLTAG_140__HTMLTAG_141__HTMLTAG_142___透過 REST API</strong>(<code>http://node:8008/metrics___HTMLTAG_145144___http://node:8008/metrics</code>):___145_1146126____________ML____ML_1414。 etcd 指標____HTMLTAG_148__HTMLTAG_149__HTMLTAG_150___透過 etcd指標端點</strong>(<code>http://node:2379/metrics</code>):___HTMLTAG_154__CODEBLOCK_17__HTMLTAG_155___2.5。系統指標___HTMLTAG_156__CODEBLOCK_18__HTMLTAG_157___3。普羅米修斯設定___HTMLTAG_158__HTMLTAG_159___3.1。安裝 Prometheus___HTMLTAG_160__CODEBLOCK_19__HTMLTAG_161___3.2。配置 Prometheus___HTMLTAG_162__CODEBLOCK_20__HTMLTAG_163___3.3。建立 systemd 服務___HTMLTAG_164__CODEBLOCK_21__HTMLTAG_165___4。導出器設定___HTMLTAG_166__HTMLTAG_167___4.1。 postgres_exporter___HTMLTAG_168__CODEBLOCK_22__HTMLTAG_169__HTMLTAG_170___自訂查詢</strong>（選用）：___HTMLTAG_172_ _CODEBLOCK_23__HTMLTAG_173__HTMLTAG_174___Systemd服務</strong>：___HTMLTAG_176__CODEBLOCK_24__HTMLTAG_177___4.2。節點_導出器___HTMLTAG_178__CODEBLOCK_25__HTMLTAG_179___4.3。 Patroni 指標端點___HTMLTAG_180__HTMLTAG_181__HTMLTAG_182___已內建！ </strong>Patroni 在下列位置公開指標：____HTMLTAG_184__CODEBLOCK_26__HTMLTAG_185___5。 Grafana 設定___HTMLTAG_186__HTMLTAG_187___5.1。安裝 Grafana___HTMLTAG_188__CODEBLOCK_27__HTMLTAG_189___5.2。新增Prometheus資料來源___HTMLTAG_190__CODEBLOCK_28__HTMLTAG_191___5.3.導入儀表板___HTMLTAG_192__HTMLTAG_193__HTMLTAG_194___PostgreSQL儀表板</strong>:___HTMLTAG_196__CODEBLOCK_29__HTMLTAG_197__HTMLTAG_198___Patroni儀表板</strong>(自訂):___HTMLTAG_200__CODEBLOCK_30HTMLMLBLMLTA201142020__CO 仪表板</strong>:___HTMLTAG_204__CODEBLOCK_31__HTMLTAG_205__HTMLTAG_206___节点导出器仪表板</strong>：___HTMLTAG_208__CODEBLOCK_32__HTMLTAG_209___6。警報規則___HTMLTAG_210__HTMLTAG_211___6.1。 PostgreSQL 警報___HTMLTAG_212__CODEBLOCK_33__HTMLTAG_213___6.2。 Patroni 警報___HTMLTAG_214__CODEBLOCK_34__HTMLTAG_215___6.3。 etcd 警報___HTMLTAG_216__CODEBLOCK_35__HTMLTAG_217___7。警報管理器設定___HTMLTAG_218__HTMLTAG_219___7.1。安裝警報管理器___HTMLTAG_220__CODEBLOCK_36__HTMLTAG_221___7.2。設定警報管理器</h3>___CODEBLOCK_37__HTMLTAG_223___7.3。啟動警報管理器___HTMLTAG_224__CODEBLOCK_38__HTMLTAG_225___8。最佳實務___HTMLTAG_226__HTMLTAG_227___✅應該___HTMLTAG_228__HTMLTAG_229__HTMLTAG_230__HTMLTAG_231___主動監控</strong>-不要等待使用者報告問題___HTMLTAG_233__HTMLTAG_234__HTMLTAG_235___設定值閾值 基于您的工作负载___HTMLTAG_237__HTMLTAG_238__HTMLTAG_239___测试警报</strong>&nbsp;- 确保通知有效___HTMLTAG_241__HTMLTAG_242__HTMLTAG_243___文档运行手册</strong>&nbsp;-將警報連結到解決步驟____HTMLTAG_245__HTMLTAG_246__HTMLTAG_247___保留指標</strong>- 至少 30 天，建議 1 年___HTMLTAG_249__HTMLTAG_250__HTMLTAG_251___-0_249__HTMLTAG_250__HTMLTAG_251___-0_251___-251251_25____用於過濾和分組____HTMLTAG_253__HTMLTAG_254__HTMLTAG_255___監控監視器</strong>-- 如果 Prometheus/Grafana 停機則發出警報___HTMLTAG_257__HTMLTAG_258__HTMLTATA___ML_HTMLTAG_257__HTMLTAG_258_HTMLTAG_259___根據需要更新變更___HTMLTAG_261__HTMLTAG_262__HTMLTAG_263___追蹤 SLO/SLI</strong>- 定義與測量服務等級___HTMLTAG_265__HTMLTAG_266__HTMLTAG_2677關聯關聯指標查詢時間一起___HTMLTAG_269__HTMLTAG_270__HTMLTAG_271___❌不要___HTMLTAG_272__HTMLTAG_273__HTMLTAG_274__HTMLTAG_275___不要過度警覺</strong>&nbsp;-警報疲勞是真實的___HTMLTAG_277__HTMLTAG_278__HTMLTAG_279___不要忽視警告</strong>&nbsp;-它們成為批評者____HTMLTAG_281__HTMLTAG_282__HTMLTAG_283___不要忘記更新</strong>&nbsp;- 儀表板和警報不斷發展___HTMLTAG_285__HTMLTAG_286__HTMLTAG_287____28287___-88___安全風險___HTMLTAG_289__HTMLTAG_290__HTMLTAG_291___不要依賴單一監控</strong>&nbsp;- 有備份___HTMLTAG_293__HTMLTAG_294__HTMLTAG_295-___MLTAG_293__HTMLTAG_294__HTMLTAG_295-___MLTAG_293__HTMLTAG_294__HTMLTAG_295-___MLTAG_293__HTMLTAG_294__HTMLTAG_295-___-___ML收集所有內容___MLG&nb____296重要的是___HTMLTAG_297__HTMLTAG_298__HTMLTAG_299___不要忽略基線</strong>-了解你的正常情況____HTMLTAG_301__HTML TAG_302__HTMLTAG_303___不要跳過測試</strong>-測試故障轉移偵測___HTMLTAG_305__HTMLTAG_306__HTMLTAG_307___9。實驗室練習___HTMLTAG_308__HTMLTAG_309___實驗室 1：設定監控堆疊___HTMLTAG_310__HTMLTAG_311__HTMLTAG_312___任務</strong>： 1. 在監控伺服器上安裝 Prometheus 2.配置抓取目標 5. 驗證指標收集6. 安裝 Grafana 7. 新增 Prometheus 資料來源 8. 導入 PostgreSQL 儀表板____HTMLTAG_314__HTMLTAG_315___實驗室 2：建立自訂儀表板____HTMLTAG_316__HTMLTAG_31719MLTAGML_138_U_MLTAG_31719707070707：UU_MLTAG_31719707070707070707：UU_MLTAG_31707070707：UU_MLTAG_ML中建立新儀表板 2. 新增複製滯後面板 3. 新增連接計數面板 4. 新增面板用於 TPS 5. 新增快取命中率面板 6. 建立節點選擇變數 7.儲存並共用儀表板___HTMLTAG_320__HTMLTAG_321___實驗室3：設定警報___HTMLTAG_322__HTMLTAG_323__HTMLTAG_324___任務</strong>： 1. 安裝 Alertmanager 2. 為 PostgreSQL 建立警報規則 3. 為 Patroni 建立警報規則 4.設定 Slack 通知 5. 觸發警報規則 6.驗證通知傳送___HTMLTAG_326__HTMLTAG_327___實驗室 4：模擬與監控故障轉移___HTMLTAG_328__HTMLTAG_329__HTMLTAG_330___任務</strong>： 1. 開啟 Grafana 儀表板 2. 停止警報板 3.根據指標計算停機時間___HTMLTAG_332__HTMLTAG_333___10。摘要___HTMLTAG_334__HTMLTAG_335___關鍵指標摘要</h3>
<!--kg-card-begin: html-->
___HTMLTAG_338__HTMLTAG_339__HTMLTAG_340__HTMLTAG_341____類別____HTMLTAG_342__HTMLTAG_343____指標___HTMLTAG_344__HTMLTAG_345___三應該___1 46__HTMLTAG_347__HTMLTAG_348__HTMLTAG_349__HTMLTAG_350__HTMLTAG_351____複製____HTMLTAG_352__HTMLTAG_353___滯後位元組___HTMLTAG_354__1TAG_354__5___ 10MB___HTMLTAG_356__HTMLTAG_357__HTMLTAG_358__HTMLTAG_359___複製___HTMLTAG_360__HTMLTAG_361___延遲時間___HTMLTAG_362__HTMLTAG_363___< 10s___HTMLTAG_364__HTMLTAG_365______HTMLTAG_366__HTMLTAG_367___連接___HTMLTAG_368__HTMLTAG_369___使用%___HTMLTAG_370__HTMLTAG_371___< 80%___HTMLTAG_372__HTMLTAG_373__HTMLTAG_374__HTMLTAG_375___快取___HTMLTAG_376__HTMLTAG_377___命中率___HTMLTAG_378__HTMLTAG_379___> 95%___HTMLTAG_380__HTMLTAG_381__HTMLTAG_382__HTMLTAG_383___查詢____HTMLTAG_384__HTMLTAG_385___長時間運行___HTMLTAG_386__HTMLTAG_387___< 1小時___HTMLTAG_388__HTMLTAG_389__HTMLTAG_390__HTMLTAG_391___磁碟___HTMLTAG_392__HTMLTAG_393___使用%___HTMLTAG_394__HTMLTAG_395___< 85%___HTMLTAG_396__HTMLTAG_397__HTMLTAG_398__HTMLTAG_399___CPU___HTMLTAG_400__HTMLTAG_401___使用%___HTMLTAG_402__HTMLTAG_403___< 80%持續___HTMLTAG_404__HTMLTAG_405__HTMLTAG_406__HTMLTAG_407___
<!--kg-card-end: html-->
<h3 id="monitoring-stack">監控堆疊___HTMLTAG_410__CODEBLOCK_39__HTMLTAG_411___後續步驟___HTMLTAG_412__HTMLTAG_413___第 18 課將介紹<strong>__1114U141____ML4141____ML____MLTAG_418____PostgreSQL 設定____HTMLTAG_419__HTMLTAG_419__HTMLTAG_420___使用 PgBouncer 進行連線池___HTMLTAG_421__HTMLTAG_422___使用 HAProxy進行負載平衡___HTMLTAG_423__HTMLTAG_424___查詢最佳化技術___HTMLTAG_425__HTMLTAG_426___讀取副本擴充策略___HTMLTAG_427__HTMLTAG_428___