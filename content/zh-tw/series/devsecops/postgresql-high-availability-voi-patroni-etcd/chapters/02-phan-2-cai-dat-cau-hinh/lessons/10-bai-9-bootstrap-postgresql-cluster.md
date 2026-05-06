---
id: 019c9617-fb7a-7138-be78-f6d8b1653656
title: 第 9 課：引導 PostgreSQL 集群
slug: bai-9-bootstrap-postgresql-cluster
description: 首次啟動Patroni，監控自動開機進程，使用patronictl 檢查狀態並排除常見問題。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 9
section_title: 第 2 部分：安裝與設定
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3343" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3343)"/>

  <!-- Decorations -->
  <g>
    <circle cx="623" cy="99" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="646" cy="122" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="669" cy="145" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="692" cy="168" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="191" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="129" x2="1100" y2="209" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="159" x2="1050" y2="229" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1017.1051177665153,157 1017.1051177665153,201 979,223 940.8948822334847,201 940.8948822334847,157 979,135" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：引導 PostgreSQL 叢集</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：安裝與安裝設定</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標____HTMLTAG_66__HTMLTAG_67___完成本課程後，您將：___HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___了解 Patroni 叢集引導程序____HTMLTAG_71__HTMLTAG_72___在 3 個節點上首次啟動 3 個節點上啟動Patroni____HTMLTAG_73__HTMLTAG_74___使用下列指令檢查叢集狀態patrictl___HTMLTAG_75__HTMLTAG_76___驗證複製是否處於活動狀態__HTMLT AG_77__HTMLTAG_78___解決常見問題__HTMLTAG_79__HTMLTAG_80___測試基本故障轉移___HTMLTAG_81__HTMLTAG_82__HTMLTAG_83___1。預先引導清單___HTMLTAG_84__HTMLTAG_85___1.1。驗證先決條件___HTMLTAG_86__HTMLTAG_87___在啟動 Patroni 之前，驗證所有組件均已準備就緒：___HTMLTAG_88__CODEBLOCK_0__HTMLTAG_89___1.2。網路連線測試___HTMLTAG_90__HTMLTAG_91___驗證節點之間的連接：___HTMLTAG_92__CODEBLOCK_1__HTMLTAG_93___1.3。清理資料目錄___HTMLTAG_94__HTMLTAG_95___如果資料目錄不為空，則刪除到新的開始：</p>___CODEBLOCK_2__HTMLTAG_97___2。了解引導程式進程___HTMLTAG_98__HTMLTAG_99___2.1。引導流程___HTMLTAG_100__CODEBLOCK_3__HTMLTAG_101___2.2.競爭條件預防___HTMLTAG_102__HTMLTAG_103___Patroni 使用 DCS 來防止多個節點初始化__HTHTMLTAG_104__CODEBLOC104__CODEBLOC10141]G10____MLBLOC_102141]如果____MLBLOC個節點同時啟動</strong>：___HTMLTAG_108__HTMLTAG_109__HTMLTAG_110___更快的節點取得<code>/初始化___HTMLTAG_1 12___密鑰___HTMLTAG_113__HTMLTAG_114___另一個節點看到密鑰已經存在→等待並從leader複製___HTMLTAG_115__HTMLTAG_116__HTMLTAG_117___3。引導叢集 - 一步一步___HTMLTAG_118__HTMLTAG_119___3.1。在節點 1 上啟動 Patroni___HTMLTAG_120__HTMLTAG_121__HTMLTAG_122___節點 1上的終端</strong>:___HTMLTAG_124__CODEBLOCK_5__HTMLTAG_125__HTMLTAG_126___預期日誌</strong>：___HTMLTAG_12 8__CODEBLOCK_6__HTMLTAG_129__HTMLTAG_130___驗證節點1</strong>：___HTMLTAG_132__CODEBLOCK_7__HTMLTAG_133___3.2。在 etcd 中驗證___HTMLTAG_134__CODEBLOCK_8__HTMLTAG_135___3.3。在節點 2 上啟動 Patroni___HTMLTAG_136__HTMLTAG_137__HTMLTAG_138___節點 2上的終端</strong>:___HTMLTAG_140__CODEBLOCK_9__HTMLTAG_141__HTMLTAG_142___預期日誌</strong>：___HTMLTAG_144 __CODEBLOCK_10__HTMLTAG_145__HTMLTAG_146___驗證節點2</strong>：___HTMLTAG_148__CODEBLOCK_11__HTMLTAG_149___3.4。在節點 3___HTMLTAG_150__HTMLTAG_151__HTMLTAG_152___節點 3</strong> 上啟動Patroni：___HTMLTAG_154__CODEBLOCK_12__HTMLTAG_155__HTMLTAG_156___預期日誌</strong>：與節點類似2.___HTMLTA G_158__HTMLTAG_159__HTMLTAG_160___驗證節點3</strong>：___HTMLTAG_162__CODEBLOCK_13__HTMLTAG_163___4。驗證叢集狀態___HTMLTAG_164__HTMLTAG_165___4.1。使用patronictl___HTMLTAG_166__CODEBLOCK_14__HTMLTAG_167__HTMLTAG_168___列意義</strong>：___HTMLTAG_170__HTMLTAG_171__HTMLTAG_172__HTMLTAG_173___________ __HTMLTAG_175__HTMLTAG_176__HTMLTAG_177___主機</strong>：連接位址___HTMLTAG_179__HTMLTAG_180__HTMLTAG_181___角色</strong>：180__HTMLTAG_181___角色</strong>：18011821838383______LTAG_185___狀態</strong>：正在運作、串流、檔案復原中___HTMLTAG_187__HTMLTAG_188__HTMLTAG_189___TL</strong>：時間軸（所有內容均應相同）___HTMLTAGML_191HT滯後</strong>：複製滯後___HTMLTAG_195__HTMLTAG_196__HTMLTAG_197___4.2。檢查拓樸___HTMLTAG_198__CODEBLOCK_15__HTMLTAG_199___4.3。使用 REST API___HTMLTAG_200__CODEBLOCK_16__HTMLTAG_201___4.4。檢查來自 PostgreSQL 的複製____HTMLTAG_202__HTMLTAG_203__HTMLTAG_204___在主節點（節點1）上</strong>：___HTMLTAG_206__CODEBLOCK_17__HTMLTAG_207___輸出：</p>___CODEBLOCK_18__HTMLTAG_209__HTMLTAG_210___在副本節點（節點2、節點3)</strong>:___HTMLTAG_212__CODEBLOCK_19__HTMLTAG_213___4.5。驗證複製延遲___HTMLTAG_214__CODEBLOCK_20__HTMLTAG_215___5。測試基本操作___HTMLTAG_216__HTMLTAG_217___5.1。創建測試數據庫和表___HTMLTAG_218__HTMLTAG_219__HTMLTAG_220___在主節點上（連接到任何節點，panictl 將路由到主節點）</strong>:___HTMLTAG_222__CODEBLOCK_21__HTMLTAG_223___5.2。驗證複製___HTMLTAG_224__HTMLTAG_225__HTMLTAG_226___在複製時（節點2或節點3）</strong>：</p>___CODEBLOCK_22__HTMLTAG_229___5.3。測試連續複製___HTMLTAG_230__HTMLTAG_231__HTMLTAG_232___終端 1（主 - 節點 1）</strong>:</p>___CODEBLOCK_23終端______HTMLTAG_235__HTMLTAG_234______CODEBLOCK_23終端______HTMLTAG_235__HTMLTAG_236___ 副本-節點2)</strong>:___HTMLTAG_238__CODEBLOCK_24__HTMLTAG_239___資料應該每秒增加→複製工作！ ___HTMLTAG_240__HTMLTAG_241___6。常見引導程式問題___HTMLTAG_242__HTMLTAG_243___6.1。問題：Patroni無法啟動___HTMLTAG_244__HTMLTAG_245__HTMLTAG_246___症狀</strong>：___HTMLTAG_248__CODEBLOCK_25__HTMLTAG_249__HTMLTAG_250______檢查檢查____H TMLTAG_251___：____HTMLTAG_252__CODEBLOCK_26__HTMLTAG_253__HTMLTAG_254___常見原因和原因解決方案</strong>：___HTMLTAG_256__HTMLTAG_257___A。設定檔語法錯誤___HTMLTAG_258__CODEBLOCK_27__HTMLTAG_259__HTMLTAG_260___解決方案</strong>：</p>___CODEBLOCK_28__HTMLTAG_263___B。無法連接到 etcd___HTMLTAG_264__CODEBLOCK_29__HTMLTAG_265__HTMLTAG_266___解決方案</strong>：___HTMLTAG_268__CODEBLOCK_30__HTMLTAG_269___C。資料目錄權限被拒絕____HTMLTAG_270__CODEBLOCK_31__HTMLTAG_271__HTMLTAG_272___解決方案</strong>：</p>___CODEBLOCK_32__HTMLTAG_275___D。連接埠已在使用___HTMLTAG_276__CODEBLOCK_33__HTMLTAG_277__HTMLTAG_278___解決方案</strong>：____HTMLTAG_280__CODEBLOCK_34__HTMLTAG_281___6.2。問題：叢集無法初始化___HTMLTAG_282__HTMLTAG_283__HTMLTAG_284___症狀</strong>：Patroni啟動但不初始化叢集.___HTMLTAG_286__HTMLTAG_287__HTMLTAG_288___檢查日誌</strong>：___HTMLTAG_290__CO DEBLOCK_35__HTMLTAG_291__HTMLTAG_292___常見原因</strong>：___HTMLTAG_294__HTMLTAG_295___A。資料目錄不為空____HTMLTAG_296__CODEBLOCK_36______HTMLTAG_297__HTMLTAG_298___解決方案</strong>：_</p>___CODEBLOCK_37__HTMLTAG_301___B。初始化卡在 etcd 中的金鑰</h4><pre><code class="language-text">INFO: Another node is initializing
</code></pre><p><strong>解決方案n</strong>：___HTMLTAG_306__CODEBLOCK_39__HTMLTAG_307___6.3。問題：副本無法從主副本___HTMLTAG_308__HTMLTAG_309__HTMLTAG_310___症狀</strong>：節點 2 或 3 無法進行基本備份。 ___HTMLTAG_312__HTMLTAG_313__HTMLTAG_314___檢查日誌</strong>：___HTMLTAG_316__CODEBLOCK_40__HTMLTAG_317__HTMLTAG_318__________HTHTMLTAGMLTAG_317__HTMLTAG_318__________HT網路連線____HTMLTAG_322__CODEBLOCK_41__HTMLTAG_323__HTMLTAG_324___解決方案</strong>：____HTMLTAG_326__CODEBLOCK_42__HTMLTAG_327___B。驗證失敗___HTMLTAG_328__CODEBLOCK_43__HTMLTAG_329__HTMLTAG_330___解決方案</strong>：_</p>___CODEBLOCK_44__HTMLTAG_333___C。空間不足____HTMLTAG_334__CODEBLOCK_45__HTMLTAG_335__HTMLTAG_336___解決方案</strong>：____HTMLTAG_338__CODEBLOCK_46__HTMLTAG_339___6.4。問題：節點具有不同的時間軸___HTMLTAG_340__HTMLTAG_341__HTMLTAG_342___症狀</strong>：___HTMLTAG_344__CODEBLOCK_4 7__HTMLTAG_345__HTMLTAG_346___解決方案</strong>：___HTMLTAG_348__CODEBLOCK_48__HTMLTAG_349___7。啟用開機自動啟動___HTMLTAG_350__CODEBLOCK_49__HTMLTAG_351___8。基本叢集管理___HTMLTAG_352__HTMLTAG_353___8.1。重新啟動節點___HTMLTAG_354__CODEBLOCK_50__HTMLTAG_355___8.2。重新載入配置___HTMLTAG_356__CODEBLOCK_51__HTMLTAG_357___8.3。暫停/恢復自動故障轉移____HTMLTAG_358__CODEBLOCK_52__HTMLTAG_359___8.4。顯示配置___HTMLTAG_360__CODEBLOCK_53__HTMLTAG_361___9。測試自動故障轉移（可選）___HTMLTAG_362__HTMLTAG_363__HTMLTAG_364___警告</strong>：僅在非生產環境中測試！ ___HTMLTAG_366__HTMLTAG_367___9.1。模擬主要故障___HTMLTAG_368__CODEBLOCK_54__HTMLTAG_369___9.2。監視叢集故障轉移___HTMLTAG_370__CODEBLOCK_55__HTMLTAG_371___9.3。驗證新的主___HTMLTAG_372__CODEBLOCK_56__HTMLTAG_373__HTMLTAG_374___注意</strong>：時間軸從 1 → 2 增加（表示發生故障轉移）.___HTMLTAG_376__HTMLTAG_377_____HTMLTAG4。重新加入舊的主要___HTMLTAG_378__CODEBLOCK_57__HTMLTAG_379___10。實驗練習____HTMLTAG_380__HTMLTAG_381___實驗 1：引導與驗證___HTMLTAG_382__HTMLTAG_383__HTMLTAG_384___任務</strong>： 1. ✅ 依序在 3 個節點上啟動 Patroni 1. ✅ 21583 13 個節點上。驗證叢集清單</code>3. ✅ Check replication status 4. ✅ Create test database and verify data replicates_</p><h3 id="lab-2-test-replication-lag">Lab 2: Test replication lag</h3><p><strong>Tasks</strong>: 1. Insert 10,000 rows into primary 2. Measure replication lag on replicas rows into primary 2. Measure replication lag on replicas rows into primary 2. Measure replication lag on replicas 3. MonUg_stat_ML_ML495_ML_ML3. 3：模擬節點故障___HTMLTAG_396__HTMLTAG_397__HTMLTAG_398___任務_</strong>： 1. 停止主節點 2. 監視自動故障轉移 3. 驗證新的主節點是否適應 4. 問題停止加入舊的主節點 5.MLTA1010140___11010141] 5.MLTA10101757010140___。摘要___HTMLTAG_402__HTMLTAG_403___關鍵要點___HTMLTAG_404__HTMLTAG_405___✅&nbsp;<strong>Bootstrap___HTMLTAG _407___：第一個節點初始化，其他節點複製___HTMLTAG_408__HTMLTAG_409____✅&nbsp;<strong>Leader選舉</strong>：自動，基於DCS___HTMLTAG_412__HTMLTAG_413____✅&nbsp;<strong>複製</strong>：透過 pg_basebackup自動設定__HTMLTAG_416__HTMLTAG_417___✅&nbsp;<strong>patronictl</strong>：主要管理工具___HTMLTAG_420__HTMLTAG_421___✅&nbsp;___HTMLTAG_420__HTMLTAG_421___✅&nbsp;___ML_U420_____HT2G20____20_____0____]____]____]____ API、pg_stat_replication檢查___HTMLTAG_424__HTMLTAG_425___✅&nbsp;<strong>故障轉移___HTMLTAG_427_ __：主要時自動失敗___HTMLTAG_428__HTMLTAG_429___檢查清單稍後引導___HTMLTAG_430__HTMLTAG_431__HTMLTAG_432___&nbsp;所有3 個節點顯示在<code>patronictl 列表___HTMLTAG_434__HTMLTAG_435__HTMLTAG_436___1 領導者，25 副本___HTMLTAG_437__HTMLTAG_438_____&nbsp;所有節點時間軸相同____437__HT40U438_______]所有延遲節點時間軸相同____ MB____HTMLTAG_441__HTMLTAG_442___&nbsp;測試資料複製到所有節點___HTMLTAG_443__HTMLTAG_444___ REST API 在所有節點上回應節點___HTMLTAG_445__HTMLTAG_446___Patroni 啟用自動啟動___MLTAG_445__HTMLTAG_446___Patroni 啟用自動啟動___ML4ML叢集運作良好___HTMLTAG_449__HTMLTAG_450__HTMLTAG_451___目前架構____HTMLTAG_452__CODEBLOCK_58__HTMLTAG_453___準備課程10____HTMLTAG_454__HTMLTAG_455___第 10課程將深入研究複製管理：___HTMLTAG_456__HTMLTAG_457__HTMLTAG_458___同步與非同步複製___HTMLTAG_459__HTMLTAG_460___設定同步模式___ HTMLTAG_461__HTMLTAG_462___監控複製滯後___HTMLTAG_463__HTMLTAG_464____處理複製問題___HTMLTAG_465__HTMLTAG_466___