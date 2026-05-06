---
id: 019e1a00-aa01-7001-c001-k8sha001201
title: 第 46 課：生產準備檢查表
slug: bai-46-production-readiness-checklist
description: 全面的生產準備審查：基礎設施、安全性、可觀察性、可靠性、性能、合規性檢查表和上線規劃。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 46
section_title: 第 12 部分：生產營運和頂點項目
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6526" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6526)"/>

  <!-- Decorations -->
  <g>
    <circle cx="889" cy="237" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="678" cy="46" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="967" cy="115" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="756" cy="184" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="253" r="20" fill="#818cf8" opacity="0.1"/>
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 46 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 46 課：生產準備檢查表</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 12 部分：生產營運與生產頂點專案</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_66___
<ul>
<li>✅ 生產準備審核架構__HTMLTAG_69___
<li>✅ 基礎設施清單</li>
<li>✅ 安全強化清單</li>
<li>✅ 可觀察性與可靠性檢查表</li>
<li>✅ 上線規劃與變更管理</li>
</ul>

<hr>

<h2 id="phan-1-infrastructure">第 1 部分：基礎設施清單</h2><!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_85__HTMLTAG_86___#___HTMLTAG_87__HTMLTAG_88___類別___HTMLTAG_89__HTMLTAG_90___項目___HTMLTAG_91__HTMLTAG_92___狀態___HTMLTAG_93__HTMLTAG_94___
</thead>
<tbody>
___HTMLTAG_97__HTMLTAG_98___1___HTMLTAG_99__HTMLTAG_100___K8s 叢集___HTMLTAG_101__HTMLTAG_102___3+ 控制平面節點 (HA)___HTMLTAG_103__HTMLTAG_104HT____________MLTAMLTAG105016
___HTMLTAG_107__HTMLTAG_108___2___HTMLTAG_109__HTMLTAG_110___K8s叢集___HTMLTAG_111__HTMLTAG_112___3+工作節點（反親和力）___HTMLTAG_113__HTMLTAG_11415115157674_____
___HTMLTAG_117__HTMLTAG_118___3___HTMLTAG_119__HTMLTAG_120___K8s 群集___HTMLTAG_121__HTMLTAG_122___etcd 備援計畫（每小時）___HTMLTAG_123__HTMLTAG_1241_25124123__HT
___HTMLTAG_127__HTMLTAG_128___4___HTMLTAG_129__HTMLTAG_130___K8s 群集___HTMLTAG_131__HTMLTAG_132___Kubernetes 目前版本 (N-1)___HTMLTAG_133__4MLG1Kubernetes
___HTMLTAG_137__HTMLTAG_138___5___HTMLTAG_139__HTMLTAG_140___網路___HTMLTAG_141__HTMLTAG_142___安裝的 CNI (Cilium) + 網路策略___HTMLTAG_143__HTMLTAG_1441454147453__
___HTMLTAG_147__HTMLTAG_148___6___HTMLTAG_149__HTMLTAG_150___網路___HTMLTAG_151__HTMLTAG_152___已設定MetalLB負載平衡器___HTMLTAG_153__HTMLTAG_152___已設定MetalLB負載平衡器___HTMLTAG_153__HTMLTAG_1541_MLTAGMLTAG156
___HTMLTAG_157__HTMLTAG_158____7___HTMLTAG_159__HTMLTAG_160___網路___HTMLTAG_161__HTMLTAG_162___Istio 服務網格 + mTLS___HTMLTAG_163__HTMLTAGML_164_HT72G164_HT72G163__HTMLTAG
___HTMLTAG_167__HTMLTAG_168____8___HTMLTAG_169__HTMLTAG_170___儲存___HTMLTAG_171__HTMLTAG_172___Rook-Ceph 175________________（3 個叢集 OSD）___HTMLTAG_173HTMLTAGML_MLGMLTAG
___HTMLTAG_177__HTMLTAG_178____9___HTMLTAG_179__HTMLTAG_180___儲存___HTMLTAG_181__HTMLTAG_182___儲存類別預設設定___HTMLTAG_183__HTMLTAG_184_______________MLTAG_184_____HT
___HTMLTAG_187__HTMLTAG_188___10____HTMLTAG_189__HTMLTAG_190___儲存___HTMLTAG_191__HTMLTAG_192___已設定 VolumeSnapshot 類別___HTMLTAG_193__HTMLTAGML_194_HTU​​T.
___HTMLTAG_197__HTMLTAG_198___11___HTMLTAG_199__HTMLTAG_200___資料庫___HTMLTAG_201__HTMLTAG_202___PostgreSQL HA（3 個副本，同步複製）___HTMLTAG_203__1TAG12020142020____
___HTMLTAG_207__HTMLTAG_208___12___HTMLTAG_209__HTMLTAG_210___資料庫___HTMLTAG_211__HTMLTAG_212___自動備份 + PITR 測試___HTMLTAG_213__HTMLTAG_212___自動備份 + PITR 測試___HTMLTAG_213__HTMLTAG_2142_MLTAGMLTAGMLTAGML
___HTMLTAG_217__HTMLTAG_218___13___HTMLTAG_219__HTMLTAG_220___資料庫___HTMLTAG_221__HTMLTAG_222___連線池 (PgBouncer)___HTMLTAG_223__HTMLTAG_224________________HTMLTAGML425251]
___HTMLTAG_227__HTMLTAG_228___14___HTMLTAG_229__HTMLTAG_230___MQ___HTMLTAG_231__HTMLTAG_232___RabbitMQ/Kafka 叢集 HA___HTMLTAG_233__HTMLTAGML3_234123_233__HT
___HTMLTAG_237__HTMLTAG_238___15___HTMLTAG_239__HTMLTAG_240___快取___HTMLTAG_241__HTMLTAG_242___Redis 哨兵/叢集 HA___HTMLTAG_243__HTMLTAG_242___Redis 哨兵/叢集 HA___HTMLTAG_243__HTMLTAG_244_HTMLTAGMLTA2465
</tbody>
</table>
<!--kg-card-end: html--><hr>

<h2 id="phan-2-security">第 2 部分：安全檢查表</h2>

<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_256__HTMLTAG_257___#___HTMLTAG_258__HTMLTAG_259___項目___HTMLTAG_260__HTMLTAG_261____狀態___HTMLTAG_262__HTMLTAG_263___
</thead>
<tbody>
___HTMLTAG_266__HTMLTAG_267___1___HTMLTAG_268__HTMLTAG_269___RBAC：沒有應用程式的叢集管理員____HTMLTAG_270__HTMLTAG_271___________HTMLTAG_272__HTMLTAG_273___
___HTMLTAG_274__HTMLTAG_275___2___HTMLTAG_276__HTMLTAG_277___Pod 安全標準：限制執行___HTMLTAG_278__HTMLTAG_279___________HTMLTAG_280__HTMLTAG_281___
___HTMLTAG_282__HTMLTAG_283___3___HTMLTAG_284__HTMLTAG_285___服務帳戶：自動安裝已停用___HTMLTAG_286__HTMLTAG_287___________HTMLTAG_288__HTMLTAG_289___
___HTMLTAG_290__HTMLTAG_291___4___HTMLTAG_292__HTMLTAG_293___機密：儲存在保管庫中（不是普通的 K8s 機密）___HTMLTAG_294__HTMLTAG_295________</td>__MLG_296_____
___HTMLTAG_298__HTMLTAG_299___5___HTMLTAG_300__HTMLTAG_301___網路策略：每個命名空間預設拒絕所有____HTMLTAG_302__HTMLTAG_303___________HTMLTAG_304__HTMLTAG_305___
___HTMLTAG_306__HTMLTAG_307___6___HTMLTAG_308__HTMLTAG_309___Kyverno：強制執行驗證策略___HTMLTAG_310__HTMLTAG_311___________HTMLTAG_312__HTMLTAG_313___
___HTMLTAG_314__HTMLTAG_315___7___HTMLTAG_316__HTMLTAG_317___Falco：運行時安全監控處於活動狀態___HTMLTAG_318__HTMLTAG_319___________HTMLTAG_320__HTMLTAG_321___
___HTMLTAG_322__HTMLTAG_323___8___HTMLTAG_324__HTMLTAG_325___Harbor：掃描影像，無關鍵 CVE___HTMLTAG_326__HTMLTAG_327___________HTMLTAG_328__HTMLTAG_329___
___HTMLTAG_330__HTMLTAG_331___9___HTMLTAG_332__HTMLTAG_333___映像簽章：已啟用共同簽章驗證___HTMLTAG_334__HTMLTAG_335_______________HTMLTAG_336__HTMLTAG_337___
___HTMLTAG_338__HTMLTAG_339___10____HTMLTAG_340__HTMLTAG_341___審核日誌記錄：已啟用，轉送至 Loki___HTMLTAG_342__HTMLTAG_343________________HTMLTAG_344__HTMLTAG_345_____
___HTMLTAG_346__HTMLTAG_347___11___HTMLTAG_348__HTMLTAG_349___啟用靜態加密___HTMLTAG_350__HTMLTAG_351_______________HTMLTAG_352__HTMLTAG_353___
___HTMLTAG_354__HTMLTAG_355___12___HTMLTAG_356__HTMLTAG_357___TLS 無所不在（Istio mTLS + 入口 TLS）___HTMLTAG_358__HTMLTAG_359_______________________HTMLTAG_3601HT
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-3-observability">第 3 部分：可觀察性檢查表</h2><!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_371__HTMLTAG_372___#___HTMLTAG_373__HTMLTAG_374___項目___HTMLTAG_375__HTMLTAG_376___狀態___HTMLTAG_377__HTMLTAG_378___
</thead>
<tbody>
___HTMLTAG_381__HTMLTAG_382___1___HTMLTAG_383__HTMLTAG_384___Prometheus：所有服務的指標收集____HTMLTAG_385__HTMLTAG_386___________HTMLTAG_387__HTMLTAG_388___
___HTMLTAG_389__HTMLTAG_390___2___HTMLTAG_391__HTMLTAG_392___Loki：使用結構化 JSON 進行集中日誌記錄___HTMLTAG_393__HTMLTAG_394___________HTMLTAG_395__HTMLTAG_396____HT__HTMLTAG_396____HT__HTMLTAG_396____HT__HTMLTAG_396____HT__HTMLTAG_396____HT__HTMLTAG_396___
___HTMLTAG_397__HTMLTAG_398___3___HTMLTAG_399__HTMLTAG_400___Tempo：使用 OTel 進行分散式追蹤____HTMLTAG_401__HTMLTAG_402___________HTMLTAG_403__HTMLTAG_404___
___HTMLTAG_405__HTMLTAG_406___4___HTMLTAG_407__HTMLTAG_408___Grafana：3 級儀表板（平台 → 服務 → 請求）___HTMLTAG_409__HTMLTAG_410___bury___HTMLTAG_4111HTMLTAGML
___HTMLTAG_413__HTMLTAG_414___5___HTMLTAG_415__HTMLTAG_416___相關性：已設定追蹤-日誌-指標連結___HTMLTAG_417__HTMLTAG_418_______________________HTMLTAG_419__HTMLTAG_420___
___HTMLTAG_421__HTMLTAG_422___6___HTMLTAG_423__HTMLTAG_424___定義的 SLO：每項服務的可用性 + 延遲____HTMLTAG_425__HTMLTAG_426_______________________HTMLTAG_427__HTMLTAG_428___
___HTMLTAG_429__HTMLTAG_430___7___HTMLTAG_431__HTMLTAG_432___警報：多重燃燒速率 SLO 警報___HTMLTAG_433__HTMLTAG_434_______________________HTMLTAG_435__HTMLTAG_436___
___HTMLTAG_437__HTMLTAG_438___8___HTMLTAG_439__HTMLTAG_440___警報路由：嚴重 → PagerDuty、警告 → 鬆弛___HTMLTAG_441__HTMLTAG_442________________HTMLTAG_443__HT
___HTMLTAG_445__HTMLTAG_446___9___HTMLTAG_447__HTMLTAG_448___已設定待命輪替___HTMLTAG_449__HTMLTAG_450_______________________HTMLTAG_451__HTMLTAG_452___
___HTMLTAG_453__HTMLTAG_454___10___HTMLTAG_455__HTMLTAG_456___連結到警報的運作手冊___HTMLTAG_457__HTMLTAG_458___bury___HTMLTAG_459__HTMLTAG_460___
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-4-reliability">第 4 部分：可靠性檢查表</h2><!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_470__HTMLTAG_471___#___HTMLTAG_472__HTMLTAG_473___項目___HTMLTAG_474__HTMLTAG_475___狀態___HTMLTAG_476__HTMLTAG_477___
</thead>
<tbody>
___HTMLTAG_480__HTMLTAG_481___1___HTMLTAG_482__HTMLTAG_483___為無狀態服務配置的 HPA___HTMLTAG_484__HTMLTAG_485___bury___HTMLTAG_486__HTMLTAG_487___
___HTMLTAG_488__HTMLTAG_489___2___HTMLTAG_490__HTMLTAG_491___所有關鍵工作負載的PodDisruptionBudget____HTMLTAG_492__HTMLTAG_493_______________________HTMLTAG_494__HTMLTAG_4995___
___HTMLTAG_496__HTMLTAG_497___3___HTMLTAG_498__HTMLTAG_499___所有容器上的活躍度 + 就緒性偵測器___HTMLTAG_500__HTMLTAG_501___________HTMLTAG_502__HTMLTAG_503____HTMLTAG_502__HTMLTAG_503____HTMLTAG_502__HTMLTAG_503____
___HTMLTAG_504__HTMLTAG_505___4___HTMLTAG_506__HTMLTAG_507___在所有 Pod 上設定的資源請求 + 限制____HTMLTAG_508__HTMLTAG_509___________HTMLTAG_510__HTMLTAG_511____
___HTMLTAG_512__HTMLTAG_513___5___HTMLTAG_514__HTMLTAG_515___Pod 反親和性：跨節點分佈____HTMLTAG_516__HTMLTAG_517___________HTMLTAG_518__HTMLTAG_519___
___HTMLTAG_520__HTMLTAG_521___6___HTMLTAG_522__HTMLTAG_523___已設定斷路器（Istio DestinationRule）___HTMLTAG_524__HTMLTAG_525_______________________HTMLTAG_526__HTTAG_526__HT
___HTMLTAG_528__HTMLTAG_529___7___HTMLTAG_530__HTMLTAG_531___VirtualService 中的重試 + 逾時策略____HTMLTAG_532__HTMLTAG_533___________HTMLTAG_534__HTMLTAG_535____
___HTMLTAG_536__HTMLTAG_537___8___HTMLTAG_538__HTMLTAG_539___Velero 備份已測試（已驗證復原）___HTMLTAG_540__HTMLTAG_541___________HTMLTAG_542__HTMLTAG_543___
___HTMLTAG_544__HTMLTAG_545____9___HTMLTAG_546__HTMLTAG_547___DR 操作手冊已記錄並經過測試___HTMLTAG_548__HTMLTAG_549_______________________HTMLTAG_550__HTMLTAG_51___MLTAG_51___
___HTMLTAG_552__HTMLTAG_553___10___HTMLTAG_554__HTMLTAG_555___混沌工程：GameDay 已完成___HTMLTAG_556__HTMLTAG_557_______________HTMLTAG_558__HTMLTAG_559___
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-5-go-live">第 5 部分：上線規劃</h2>

___程式碼區塊_0___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_570__HTMLTAG_571___清單</strong>：系統審查可防止「忘記設定 X」</li>
___HTMLTAG_574__HTMLTAG_575___類別</strong>：基礎設施、安全性、可觀察性、可靠性</li>
___HTMLTAG_578__HTMLTAG_579___上線</strong>：流量逐漸增加，總是有回滾計畫</li>
___HTMLTAG_582__HTMLTAG_583___審查</strong>：製作前同儕審查清單</li>
___HTMLTAG_586__HTMLTAG_587___即時文件</strong>：每次事件後更新清單</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：準備狀況審核__HTMLTAG_595___
<ul>
<li>運行叢集的所有清單</li>
<li>記錄差距並建立補救計畫</li>
<li>與隊友進行同儕審查</li>
</ul>

<hr><h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第47課：第2天操作與維護</strong>中，我們將學習日常生產作業。 </p>