---
id: 019c9617-fb83-7047-bb91-e761d8b60d96
title: 第 12 課：Patroni REST API
slug: bai-12-patroni-rest-api
description: 使用Patroni REST API端點，掌握patronictl指令並透過CLI和API自動化叢集管理。
duration_minutes: 265
is_free: true
video_url: null
sort_order: 12
section_title: 第三部分：集群管理
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9781" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9781)"/>

  <!-- Decorations -->
  <g>
    <circle cx="732" cy="206" r="10" fill="#f87171" opacity="0.11"/>
    <circle cx="864" cy="178" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="996" cy="150" r="12" fill="#f87171" opacity="0.13"/>
    <circle cx="628" cy="122" r="28" fill="#f87171" opacity="0.09"/>
    <circle cx="760" cy="94" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="86" x2="1100" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="116" x2="1050" y2="186" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1071.507041555162,215.5 1071.507041555162,256.5 1036,277 1000.492958444838,256.5 1000.492958444838,215.5 1036,195" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：Patroni REST API</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：叢集管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標___HTMLTAG_66__HTMLTAG_67___完成本課程後，您將：___HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___了解 Patroni REST API 與端點____HTMLTAG_71__HTMLTAREST進行運行狀況檢查___HTMLTAG_73__HTMLTAG_74___與負載平衡器（HAProxy、 Nginx)___HTMLTAG_75__HTMLTAG_76___查詢叢集狀態和設定___HTMLTAG_77__HTMLTAG_78_____REST790HTMLTAGREST____HTMLTAG_77__HTMLTAG_78_____端點___HTMLTAG_81__HTMLTAG_82__HTMLTAG_83___1。 REST API 概述___HTMLTAG_84__HTMLTAG_85___1.1.什麼是 REST API？ ___HTMLTAG_86__HTMLTAG_87___Patroni 將每個節點上的<strong>HTTP REST API</strong>暴露給：___HTMLTAG_90__HTMLTAG_91__HTMLTAG_92___🔍&nbsp;<strong>運作狀況檢查</strong>：負載平衡器檢查節點運作狀況___HTMLTAG_95__HTMLTAG_96_____ _：外部系統查詢叢集狀態___HTMLTAG_99__HTMLTAG_100___⚙️&nbsp;<strong>管理</strong>：讀取設定、叢集拓樸___HTMLTAG_103__HTMLTAG_104______🔄]自動化____HTMLTAG_103__HTMLTAG_104______ CI/CD、編排工具整合___HTMLTAG_107__HTMLTAG_108__HTMLTAG_109___1.2. API 設定___HTMLTAG_110__HTMLTAG_111__HTMLTAG_112___在patoni.yml</strong>:___HTMLTAG_114__CODEBLOCK_0______HTMLTAG_115__HTMLTAG_116___預設連接埠</strong>：<code>8008___HTMLTAGMLTAG11917___：___HT_120118___12012___ API 端點概述</h3>
<!--kg-card-begin: html-->
___HTMLTAG_124__HTMLTAG_125__HTMLTAG_126__HTMLTAG_127____端點____HTMLTAG_128__HTMLTAG_129____方法___HTMLTAG_130__HTMLTAG_131__ __目的____HTMLTAG_132__HTMLTAG_133___使用案例___HTMLTAG_134__HTMLTAG_135__HTMLTAG_136__HTMLTAG_137__HTMLTAG_138__HTMLTAG_139_____ _HTMLTAG_140___/___HTMLTAG_141__HTMLTAG_142__HTMLTAG_143___GET___HTMLTAG_144__HTMLTAG_145___基本節點資訊___HTMLTAG_1 46__HTMLTAG_147___快速運轉狀況檢查___HTMLTAG_148__HTMLTAG_149__HTMLTAG_150__HTMLTAG_151__HTMLTAG_152___/主要____HTMLTAG_ 153__HTMLTAG_154___&nbsp;</span>或<span>&nbsp;___HTMLTAG_157__HTMLTAG_158___/master___HTML TAG_159__HTMLTAG_160__HTMLTAG_161___GET___HTMLTAG_162__HTMLTAG_163___檢查節點是否為主節點___HTMLTAG_164__HTMLTAG_165___LB主節點路由___HTMLTAG_166__HTMLTAG_167__HTMLTAG_168__HTMLTAG_169__HTMLTAG_170___/副本____HTMLTAG_171__HTMLTAG_172__HTMLTAG_173___GET ___HTMLTAG_174__HTMLTAG_175___檢查節點是否為副本___HTMLTAG_176__HTMLTAG_177___LB讀取路由____HTMLTAG_178__HTMLTAG_179__HTMLTAG_180__HTMLTA G_181__HTMLTAG_182___/讀寫____HTMLTAG_183__HTMLTAG_184__HTMLTAG_185___GET___HTMLTAG_186__HTMLTAG_187___檢查是否可寫入（主要）___HTMLTAG_18 8__HTMLTAG_189___LB寫入路由___HTMLTAG_190__HTMLTAG_191__HTMLTAG_192__HTMLTAG_193__HTMLTAG_194___/唯讀___HTMLTAG_195__HTMLTAG_196___ </span>或<span>___HTMLTAG_199__HTMLTAG_200___/備用___HTMLTAG_201__HTMLTAG_202__HTMLTAG_203___GET___HTMLTAG_204_HTMLTAGLB_2017_170____ML_ML讀取路由___HTMLTAG_208__HTMLTAG_209__HTMLTAG_210__HTMLTAG_211__HTMLTAG_212___/同步</code>___HTMLTAG_214__HTMLTAG_215___获取___HTMLTAG_216__HTMLTAG_217___检查是否同步副本___HTMLTAG_218__HTMLTAG_219___同步副本检测___HTMLTAG_220__HTMLTAG_221__HTM LTAG_222__HTMLTAG_223__HTMLTAG_224___/异步____HTMLTAG_225__HTMLTAG_226__HTMLTAG_227___GET___HTMLTAG_228__HTMLTAG_229___检查是否异步副本____HTMLTAG_ 230__HTMLTAG_231___非同步副本偵測____HTMLTAG_232__HTMLTAG_233__HTMLTAG_234__HTMLTAG_235__HTMLTAG_236___/健康_____HTMLTAG_237__HTMLTAG_238__ 239___GET___HTMLTAG_240__HTMLTAG_241___詳細健康狀況檢查___HTMLTAG_242__HTMLTAG_243___監控___HTMLTAG_244__HTMLTAG_245__HTMLTAG_246__HTMLTAG_247_____ _HTMLTAG_248___/patroni___HTMLTAG_249__HTMLTAG_250__HTMLTAG_251___GET___HTMLTAG_252__HTMLTAG_253_ __詳細叢集與節點資訊____HTMLTAG_254__HTMLTAG_255___進階監控____HTMLTAG_256__HTMLTAG_257__HTMLTAG_258__HTMLTAG_2 59__HTMLTAG_260___/config____HTMLTAG_261__HTMLTAG_262__HTMLTAG_263___GET___HTMLTAG_264__HTMLTAG_2 65___叢集設定DCS___HTMLTAG_266__HTMLTAG_267___設定檢查___HTMLTAG_268__HTMLTAG_269__HTMLTAG_270__HTMLTAG_27 1__HTMLTAG_272___/cluster____HTMLTAG_273__HTMLTAG_274__HTMLTAG_275___GET___HTMLTAG_276__HTMLTAG_2 77___所有群集成員資訊___HTMLTAG_278__HTMLTAG_279___拓樸視圖___HTMLTAG_280__HTMLTAG_281__HTMLTAG_282__HTMLTAG_2 83__HTMLTAG_284___/歷史____HTMLTAG_285__HTMLTAG_286__HTMLTAG_287___GET___HTMLTAG_288__HTMLTAG_289___故障轉移歷史記錄___HTMLTAG_290__HTMLTAG_291___審核日誌___HTMLTAG_292__HTMLTAG_293__HTMLTAG_294__HTMLTAG_295___
<!--kg-card-end: html-->
<h2 id="2-health-check-endpoints">2。運行狀況檢查端點___HTMLTAG_298__HTMLTAG_299___2.1。基本健康檢查：GET /___HTMLTAG_300__HTMLTAG_301__HTMLTAG_302___目的</strong>：快速檢查節點是否正在運作。 ___HTMLTAG_304__CODEBLOCK_1__HTMLTAG_305__HTMLTAG_306___响应代码_</strong>：___HTMLTAG_308__HTMLTAG_309__HTMLTAG_310__HTMLTAG_311___200正常</strong>：節點運作狀況良好____HTMLTAG_313__HTMLTAG_314__HTMLTAG_314__HTMLTAG_315___503 服務不可用</strong>：節點運作狀況不佳（PostgreSQLSQL已關閉，等）___HTMLTAG_317__HTMLTAG_318__HTMLTAG_319___2.2。主要檢查：GET /primary 或 /master___HTMLTAG_320__HTMLTAG_321__HTMLTAG_322___目的</strong>：檢查節點是否為當前主要/領導者。 ___HTMLTAG_324__CODEBLOCK_2__HTMLTAG_325__HTMLTAG_326___用例</strong>：负载均衡器运行状况检查用于<strong>写入流量</strong>路由.___HTMLTAG_330__HTMLTAG_331___2.3。副本檢查：GET /replica___HTMLTAG_332__HTMLTAG_333__HTMLTAG_334___目的</strong>：檢查節點是否為副本（備用）。 ___HTMLTAG_336__CODEBLOCK_3__HTMLTAG_337__HTMLTAG_338___用例</strong>：负载均衡器运行状况检查用于<strong>读取流量</strong>路由.___HTMLTAG_342__HTMLTAG_343___2.4。读写检查：GET /读写__HTMLTAG_344__HTMLTAG_345__HTMLTAG_346___目的</strong>：检查节点是否接受写入（主要+不在维护中）.___HTMLTAG_348__CODEBLOCK_4__HTMLTAG_349___2.5。唯讀檢查：GET /唯讀或/備用___HTMLTAG_350__HTMLTAG_351__HTMLTAG_352___目的</strong>：C哎呀，如果節點是唯讀副本。 ___HTMLTAG_354__CODEBLOCK_5__HTMLTAG_355__HTMLTAG_356___進階：滯後容差</strong>：___HTMLTAG_358__CODEBLOCK_6__HTMLTAG_359___2.6。同步副本檢查：GET /synchronous___HTMLTAG_360__HTMLTAG_361__HTMLTAG_362___目的</strong>：檢查節點是否為同步副本.___HTMLTAG_364__CODEBLOCK_7__HTMLTAG_365___2.7。非同步副本檢查：GET /非同步___HTMLTAG_366__HTMLTAG_367__HTMLTAG_368___目的</strong>：檢查節點是否為非同步副本.___HTMLTAG_370__CODEBLOCK_8__HTMLTAG_371___2.8。健康端點：GET /health___HTMLTAG_372__HTMLTAG_373__HTMLTAG_374___目的</strong>：詳細健康資訊.___HTMLTAG_376__CODEBLOCK_9__HTMLTAG_377___3。叢集資訊端點___HTMLTAG_378__HTMLTAG_379___3.1.詳細節點資訊：GET /patroni___HTMLTAG_380__HTMLTAG_381__HTMLTAG_382___目的</strong>：全面的節點和叢集資訊.___HTMLTAG_384__CODEBLOCK_10__HTMLTAG_385___3.2。叢集配置：GET /config___HTMLTAG_386__HTMLTAG_387__HTMLTAG_388___目的</strong>：從 DCS 取得叢集範圍的設定.___HTMLTAG_390__CODEBLOCK_11__HTMLTAG_391___3.3。叢集成員：GET /cluster___HTMLTAG_392__HTMLTAG_393__HTMLTAG_394___用途</strong>：取得所有叢集成員的資訊。___HTMLTAG_396__CODEBLOCK_12__HTMLTAG_397___3.4。故障轉移歷史記錄：GET /history___HTMLTAG_398__HTMLTAG_399__HTMLTAG_400___目的</strong>：取得叢集故障轉移/切換歷史記錄.___HTMLTAG_402__CODEBLOCK_13__HTMLTAG_403___4。負載平衡器整合___HTMLTAG_404__HTMLTAG_405___4.1。 HAProxy設定___HTMLTAG_406__HTMLTAG_407__HTMLTAG_408___haproxy.cfg</strong>:___HTMLTAG_410__CODEBLOCK_14__HTMLTA G_411__HTMLTAG_412___安裝並啟動HAProxy_</strong>:___HTMLTAG_414__CODEBLOCK_15__HTMLTAG_415__HTMLTAG_416___測試HAProxy_</strong>:___HTMLTAG_418__CODEBLOCK_16__HTMLTAG_419___4.2. Nginx（帶流模組）___HTMLTAG_420__HTMLTAG_421__HTMLTAG_422___nginx.conf</strong>:___HTMLTAG_424__CODEBLOCK_17__HTMLTAG_425__HTMLTAGgin_426____27777127：___MLTAGgin_____流模組<strong>不支援 HTTP 運行狀況直接檢查</strong>。需要外部腳本或使用 HAProxy 取代。 ___HTMLTAG_430__HTMLTAG_431___4.3。外部 LB 的運作狀況檢查腳本___HTMLTAG_432__HTMLTAG_433__HTMLTAG_434___雲端負載平衡器的腳本</strong>(AWS ALB、GCP LB、等）：____HTMLTAG_436__CODEBLOCK_18__HTMLTAG_437__HTMLTAG_438___用法</strong>：____HTMLTAG_440__CODEBLOCK_19__HTMLTAG_441___5。監控整合___HTMLTAG_442__HTMLTAG_443___5.1。 Prometheus 導出器___HTMLTAG_444__HTMLTAG_445__HTMLTAG_446___將 postgres_exporter 與自訂查詢結合使用</strong>:___HTMLTAG_448__CODEBLOCK_20__HTMLTAG_449__HTMLTAG1自訂查詢指標</strong>：____HTMLTAG_452__CODEBLOCK_21__HTMLTAG_453___5.2。自訂監控腳本___HTMLTAG_454__HTMLTAG_455__HTMLTAG_456___使用 REST API 的 Python腳本</strong>:___HTMLTAG_458__CODEBLOCK_22__HTMLTAG_459__HTMLTAG_460___運行監控</strong>:</p>CODEBLOCK_23__HTMLTAG_463155.d 查詢範例____HTMLTAG_464__HTMLTAG_465__HTMLTAG_466___PromQL 查詢</strong>:___HTMLTAG_468__CODEBLOCK_24__HTMLTAG_469___6。安全性 REST API___HTMLTAG_470__HTMLTAG_471___6.1。啟用驗證____HTMLTAG_472__HTMLTAG_473__HTMLTAG_474___在patroni.yml</strong>:___HTMLTAG_476__CODEBLOCK_2 5__HTMLTAG_477__HTMLTAG_478___透過驗證存取_</strong>:_</p>CODEBLOCK_26__HTMLTAG_481___6.2。啟用SSL/TLS___HTMLTAG_482__HTMLTAG_483__HTMLTAG_484___產生憑證</strong>:___HTMLTAG_486__CODEBLOCK_27__HTMLTAG _487__HTMLTAG_488___配置patoni.yml</strong>:___HTMLTAG_490__CODEBLOCK_28__HTMLTAG_491__HTMLTAG_492___透過HTTPS 存取_</strong>:___HTMLTAG_494__CODEBLOCK_29__HTMLTAG_495___6.3.防火牆規則___HTMLTAG_496__CODEBLOCK_30__HTMLTAG_497___7。進階 REST API 用法___HTMLTAG_498__HTMLTAG_499___7.1。腳本化故障轉移檢查___HTMLTAG_500__CODEBLOCK_31__HTMLTAG_501___7.2。動態取得主要端點___HTMLTAG_502__CODEBLOCK_32__HTMLTAG_503___7.3。監控複製延遲___HTMLTAG_504__CODEBLOCK_33__HTMLTAG_505___8。實驗室練習____HTMLTAG_506__HTMLTAG_507___實驗室 1：探索 REST API端點___HTMLTAG_508__HTMLTAG_509__HTMLTAG_510___任務</strong>：___HTMLTAG_512__HTMLTAG_513__HTMLTAG_514__ _查詢每個端點上的所有端點節點___HTMLTAG_515__HTMLTAG_516___比較主節點和副本節點之間的回應___HTMLTAG_517__HTMLTAG_518___確定哪個端點在主節點和副本節點上傳回200___HTMLTAG_519__HTMLTAG_520__CODEBLOCK_34__HTMLTAG_521___實驗 2：設定HAProxy___HTMLTAG_522__HTMLTAG_523__HTMLTAG_524___任務</strong>：HTHTMLTA14262____ HAProxy____HTMLTAG_529__HTMLTAG_530___配置 Patroni運行狀況檢查___HTMLTAG_531__HTMLTAG_532___測試寫入流量進入主節點僅___HTMLTAG_533__HTMLTAG_534___測試分發到副本的讀取流量____HTMLTAG_535__HTMLTAG_5 36___觸發故障轉移，自動驗證HAProxy重定向___HTMLTAG_537__HTMLTAG_538__HTMLTAG_539___實驗室3：建立監控儀表板___HTMLTAG_540__HTMLTAG_541__HTMLTA G_542___任務</strong>：___HTMLTAG_544__HTMLTAG_545__HTMLTAG_546___撰寫Python腳本查詢所有節點____HTMLTAG_547__HTMLTAG_548_ __顯示群集拓樸____HTMLTAG_549__HTMLTAG_550___顯示複製滯後____HTMLTAG_551__HTMLTAG_552___反白顯示目前主要____HTMLTAG_553__HTMLTAG_554___每5 秒運行一次___HTMLTAG_555__HTMLTAG_556__HTMLTAG_557___實驗 4：安全性 REST API___HTMLTAG_558__HTMLTAG_559__HTMLTAG_560___任務</strong>：___HTMLTAG_562__HTMLTAG_563__HTMLTAG_564___啟用基本驗證___HT憑證___HTMLTAG_567__HTMLTAG_568___設定HTTPS____HTMLTAG_569__HTMLTAG_570___更新curl指令以使用auth + SSL____HTMLTAG_571__HTMLTAG_572___設定防火牆規則___HTHTMLTAGMLTAGML4741472____ML____MLTAGMLTAG174。 REST API 故障排除___HTMLTAG_576__HTMLTAG_577___9.1。 REST API 未回應___HTMLTAG_578__HTMLTAG_579__HTMLTAG_580___檢查</strong>：___HTMLTAG_582__CODEBLOCK_35__HTMLTAG_583___9.2。傳回錯誤的 HTTP 代碼___HTMLTAG_584__HTMLTAG_585__HTMLTAG_586___調試</strong>:</p>___CODEBLOCK_36__HTMLTAG_589___9.3。 SSL/TLS 錯誤___HTMLTAG_590__HTMLTAG_591__HTMLTAG_592___檢查</strong>：___HTMLTAG_594__CODEBLOCK_37__HTMLTAG_595___10。摘要___HTMLTAG_596__HTMLTAG_597___關鍵端點摘要</h3>
<!--kg-card-begin: html-->
___HTMLTAG_600__HTMLTAG_601__HTMLTAG_602__HTMLTAG_603____端點____HTMLTAG_604__HTMLTAG_605___當___HTMLTAG_606__HTMLTAG_607 ___使用時回傳200案例___HTMLTAG_608__HTMLTAG_609__HTMLTAG_610__HTMLTAG_611__HTMLTAG_612__HTMLTAG_613__HTMLTAG_614___/primary___ HTMLTAG_615__HTMLTAG_616__HTMLTAG_617___節點為主___HTMLTAG_618__HTMLTAG_619___LB寫入路由____HTMLTAG_620__HTMLTAG_621__HTMLTAG_6 22__HTMLTAG_623__HTMLTAG_624___/副本____HTMLTAG_625__HTMLTAG_626___<td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">節點是副本___HTMLTAG_628__HTMLTAG_629___LB讀取路由___HTMLTAG_630__HTMLTAG_631__HTMLTAG_632__HTMLTAG_633__HTMLTAG_634___/讀寫___HTMLTAG_635__HTMLTAG_636__H TMLTAG_637___節點接受寫入___HTMLTAG_638__HTMLTAG_639___寫入端點___HTMLTAG_640__HTMLTAG_641__HTMLTAG_642__HTMLTAG_643_ _HTMLTAG_644___/唯讀___HTMLTAG_645__HTMLTAG_646___<td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">節點是唯讀副本___HTMLTAG_648__HTMLTAG_649___讀取端點___HTMLTAG_650__HTMLTAG_651__HTMLTAG_652__HTMLTAG_653__HTMLTAG_654___/health___HTMLTAG_655__HTMLTAG_656__HT MLTAG_657___節點正常___HTMLTAG_658__HTMLTAG_659___詳細監控___HTMLTAG_660__HTMLTAG_661__HTMLTAG_662__HTMLTAG_663__H TMLTAG_664___/patroni___HTMLTAG_665__HTMLTAG_666__HTMLTAG_667___總是（詳細資料）___HTMLTAG_668__HTMLTAG_669___進階監控_ __HTMLTAG_670__HTMLTAG_671__HTMLTAG_672__HTMLTAG_673__HTMLTAG_674___/叢集____HTMLTAG_675__HTMLTAG_676__HTMLT AG_677___總是（所有成員）___HTMLTAG_678__HTMLTAG_679___拓樸檢視___HTMLTAG_680__HTMLTAG_681__HTMLTAG_682__HTMLTAG_683___
<!--kg-card-end: html-->
<h3 id="integration-checklist">整合清單___HTMLTAG_686__HTMLTAG_687__HTMLTAG_688___可從所有節點存取REST API____HTMLTAG_689__HTMLTAG_690___設定了執行狀況檢查的RESTHAPro___HTMLTAG_6919MLTAG_6919MLG_69191 API___HTMLTAG_693__HTMLTAG_694___ 啟用驗證___HTMLTAG_695__HTMLTAG_696___ 設定 SSL/TLS（生產）___HTMLTAG_697__HTMLTAG_698___ 設定防火牆規則___MLTAG_6990MLTAG_6990MLG_6990ML運行狀況檢查腳本已測試___HTMLTAG_701__HTMLTAG_702__HTMLTAG_703___目前的架構___HTMLTAG_704__CODEBLOCK_38__HTMLTAG_705___準備第 13 課___HTMLTAG_706__HTMLTAG_705___準備第 13 課___HTMLTAG_706__HTMLTAG_707___課程將涵蓋<strong>故障轉移和切換</strong>：___HTMLTAG_710__HTMLTAG_711__HTMLTAG_712___自動故障轉移過程___HTMLTAG_713__HTMLTAG_714___手動切換____HTMLTA G_715__HTMLTAG_716___故障轉移情境與測試___HTMLTAG_717__HTMLTAG_718___領導者中的DCS角色選舉___HTMLTAG_719__HTMLTAG_720___最小化停機時間策略___HTMLTAG_721__HTMLTAG_722___