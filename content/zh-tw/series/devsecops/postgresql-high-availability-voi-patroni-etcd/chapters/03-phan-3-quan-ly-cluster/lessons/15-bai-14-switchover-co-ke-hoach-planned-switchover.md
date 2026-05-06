---
id: 019c9617-fb8b-7187-aede-cf5e97de1cd3
title: 第 14 課：計畫切換
slug: bai-14-switchover-co-ke-hoach-planned-switchover
description: 區分計劃切換和故障切換、何時切換、零停機維護和安全切換實務。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 14
section_title: 第三部分：集群管理
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9837" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9837)"/>

  <!-- Decorations -->
  <g>
    <circle cx="639" cy="167" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="678" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="717" cy="85" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="756" cy="44" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="795" cy="263" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="97" x2="1100" y2="177" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="127" x2="1050" y2="197" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1074.712812921102,231 1074.712812921102,263 1047,279 1019.287187078898,263 1019.287187078898,231 1047,215" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：計畫切換（計畫</tspan>
      <tspan x="60" dy="42">切換）</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：叢集管理__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標___HTMLTAG_68__HTMLTAG_69___學完本課後，您將：___HTMLTAG_70__HTMLTAG_71__HTMLTAG_72___區分切換與故障轉移____HTMLTAG_73__HTMLTAG_74___MLTAG_74___ML 6___了解優雅與立即切換___HTMLTAG_77__HTMLTAG_78___最大限度地減少維護中的停機時間___HTMLTAG_79__HTMLTAG_80___自動切換滾動更新___HTMLTAG_81__HTMLTAG_82___處理生產中的切換___HTMLTAG_83__MLG_83__18G___183_____切換概述___HTMLTAG_86__HTMLTAG_87___1.1。什麼是切換？ ___HTMLTAG_88__HTMLTAG_89__HTMLTAG_90___切換</strong>&nbsp;=&nbsp;<strong>計畫___HTMLTAG_ 93___&nbsp;將副本升級為主要副本.___HTMLTAG_94__HTMLTAG_95__HTMLTAG_96___與故障轉移</strong>:</p>
<!--kg-card-begin: html-->
___HTMLTAG_100__HTMLTAG_101__HTMLTAG_102__HTMLTAG_103___方面___HTMLTAG_104__HTMLTAG_105____故障轉移___HTMLTAG_106__HTMLTAG_107____切換<circle cx="639" cy="167" r="32" fill="#818cf8" opacity="0.12000000000000001"/> 08__HTMLTAG_109__HTMLTAG_110__HTMLTAG_111__HTMLTAG_112__HTMLTAG_113__HTMLTAG_114____觸發器___HTMLTAG_115__HTMLTAG_116__HTMLTAG_TM2__HTMLTAG_117主要故障（計劃外___H LTAG_118__HTMLTAG_119___手動/計劃（計劃）___HTMLTAG_120__HTMLTAG_121__HTMLTAG_122__HTMLTAG_123__HTMLTAG_124___停機時間___HTMLTAG_1255__HTMLTAG_126HT 7___30-60秒___HTMLTAG_128__HTMLTAG_129___0-10秒___HTMLTAG_130__HTMLTAG_131__HTMLTAG_132__HTMLTAG_133__HTMLTAG_134___資料遺失___HTMLTAG13556 __HTMLTAG_137___可能（如果非同步）___HTMLTAG_138__HTMLTAG_139___零（受控）___HTMLTAG_140__HTMLTAG_141__HTMLTAG_142__HTMLTAG_143__HTMLTAG_141__HTMLTAG_142__HTMLTAG_143__HTMLTAG_144___控制_MLTAG_ML _____HTMLTAG_146__HTMLTAG_147___自動____HTMLTAG_148__HTMLTAG_149___手動/腳本化___HTMLTAG_150__HTMLTA G_151__HTMLTAG_152__HTMLTAG_153__HTMLTAG_154___時間___HTMLTAG_155__HTMLTAG_156__HTMLTAG_157___不可預測____HTMLTAG_158__HTMLTAG_159____預定___HTMLTAG_160__HTMLTAG_161__HTMLTAG_162__HTMLTAG_163___
<!--kg-card-end: html-->
<h3 id="12-khi-n%C3%A0o-c%E1%BA%A7n-switchover">1.2。什麼時候需要切換？ ___HTMLTAG_166__HTMLTAG_167__HTMLTAG_168___常見情境</strong>：___HTMLTAG_170__HTMLTAG_171___A。硬體維護___HTMLTAG_172__CODEBLOCK_0__HTMLTAG_173___B.軟體升級___HTMLTAG_174__CODEBLOCK_1__HTMLTAG_175___C。資料庫遷移___HTMLTAG_176__CODEBLOCK_2__HTMLTAG_177___D。資料中心遷移___HTMLTAG_178__CODEBLOCK_3__HTMLTAG_179___E。測試___HTMLTAG_180__CODEBLOCK_4__HTMLTAG_181___1.3。切換優勢___HTMLTAG_182__HTMLTAG_183___✅&nbsp;<strong>零資料遺失</strong>&nbsp;-切換前提交的所有事務___HTMLTAG_186__HTMLTAG_187___✅&nbsp;<strong>受控時序</strong>&nbsp;- 維護期間視窗___HTMLTAG_190__HTMLTAG_191___✅&Awid協調、經過測試的流程___HTMLTAG_194__HTMLTAG_195___✅&nbsp;<strong>最短停機時間</strong>&nbsp;- 0-10 秒vs 30-60故障轉移___HTMLTAG_198__HTMLTAG_199___✅&nbsp;<strong>可逆</strong>&nbsp;- 如果出現問題可以切換回來___HTMLTAG_202__HTMLTAG_203___2。切換型別</h2><h3 id="21-graceful-switchover-default">2.1。平穩切換（預設）___HTMLTAG_206__HTMLTAG_207__HTMLTAG_208___進程</strong>:___HTMLTAG_210__CODEBLOCK_5 __HTMLTAG_211__HTMLTAG_212___指令</strong>:</p>CODEBLOCK_6__HTMLTAG_215___2. 2.立即切換___HTMLTAG_216__HTMLTAG_217__HTMLTAG_218___進程</strong>:___HTMLTAG_220__CODEBLOCK_7 __HTMLTAG_221__HTMLTAG_222___指令</strong>:___HTMLTAG_224__CODEBLOCK_8__HTMLTAG_225___2. 3.計畫切換___HTMLTAG_226__HTMLTAG_227__HTMLTAG_228___進程</strong>：___HTMLTAG_230__CODEBLOCK_ 9__HTMLTAG_231__HTMLTAG_232___指令</strong>：___HTMLTAG_234__CODEBLOCK_10__HTMLTAG_235___3。切換先決條件___HTMLTAG_236__HTMLTAG_237___3.1。叢集運作狀況檢查___HTMLTAG_238__CODEBLOCK_11__HTMLTAG_239___3.2.複製滯後檢查___HTMLTAG_240__CODEBLOCK_12__HTMLTAG_241___3.3。目標候選檢查___HTMLTAG_242__CODEBLOCK_13__HTMLTAG_243___3.4。連線可用性___HTMLTAG_244__CODEBLOCK_14__HTMLTAG_245___4。執行切換___HTMLTAG_246__HTMLTAG_247___4.1。互動式切換（建議）___HTMLTAG_248__HTMLTAG_249__HTMLTAG_250___逐步</strong>：___HTMLTAG_252__CODEBLOCK_15___ __CODEBLOCK_16__HTMLTAG_253__HTMLTAG_254___輸出</strong>：</p>___CODEBLOCK_17__HTMLTAG_257___4.2。非互動式切換___HTMLTAG_258__HTMLTAG_259__HTMLTAG_260___直接命令</strong>:___HTMLTAG_262__CODEBLOCK_18__H TMLTAG_263___4.3.計劃切換___HTMLTAG_264__HTMLTAG_265__HTMLTAG_266___維護時段時間表</strong>：___HTMLTAG_26 8__CODEBLOCK_19__HTMLTAG_269__HTMLTAG_270___驗證計畫切換_</strong>:</p>___CODEBLOCK_20_ _HTMLTAG_273__HTMLTAG_274___取消計劃的切換</strong>:___HTMLTAG_276__CODEBLOCK_21__HTMLTAG_277___4.4.使用REST API 進行切換___HTMLTAG_278__HTMLTAG_279__HTMLTAG_280___透過 API 觸發</strong>:___HTMLTAG_282__CODEBLOCK_22__HTMLTAG_283___5。切換時間表___HTMLTAG_284__HTMLTAG_285___5.1。詳細流程___HTMLTAG_286__CODEBLOCK_23__HTMLTAG_287___5.2.活動連線會發生什麼狀況？ ___HTMLTAG_288__HTMLTAG_289__HTMLTAG_290___在切換期間</strong>:___HTMLTAG_292__CODEBLOCK_24__H TMLTAG_293__HTMLTAG_294___應用程式行為</strong>:</p>CODEBLOCK_25__HTMLTAG_297___6。切換後驗證___HTMLTAG_298__HTMLTAG_299___6.1.叢集狀態___HTMLTAG_300__CODEBLOCK_26__HTMLTAG_301___6.2。複製狀態___HTMLTAG_302__CODEBLOCK_27__HTMLTAG_303___6.3。編寫測試___HTMLTAG_304__CODEBLOCK_28__HTMLTAG_305___6.4。時間軸驗證___HTMLTAG_306__CODEBLOCK_29__HTMLTAG_307___7。切換最佳實務___HTMLTAG_308__HTMLTAG_309___7.1。切換前核對清單___HTMLTAG_310__CODEBLOCK_30__HTMLTAG_311___7.2。最小化停機時間策略___HTMLTAG_312__HTMLTAG_313___A。連接池___HTMLTAG_314__CODEBLOCK_31__HTMLTAG_315___B。讀取副本路由___HTMLTAG_316__CODEBLOCK_32__HTMLTAG_317___C。應用程式層級重試___HTMLTAG_318__CODEBLOCK_33__HTMLTAG_319___7.3。溝通計畫___HTMLTAG_320__HTMLTAG_321__HTMLTAG_322___切換前超過</strong>:___HTMLTAG_324__CODEBLOCK_34__HTMLTAG_325__HTMLTAG_326___切換期間</strong>:___HTMLTAG_32 8__CODEBLOCK_35__HTMLTAG_329__HTMLTAG_330___之後切換_</strong>：___HTMLTAG_332__CODEBLOCK_36__HTMLTAG_333___8。切換故障排除___HTMLTAG_334__HTMLTAG_335___8.1。問題：切換指令掛起___HTMLTAG_336__HTMLTAG_337__HTMLTAG_338___症狀</strong>：<code>patronictl 切換</code> 從不完成。 ___HTMLTAG_342__HTMLTAG_343__HTMLTAG_344___診斷</strong>：___HTMLTAG_346__CODEBLOCK_3 7__HTMLTAG_347__HTMLTAG_348___解決方案</strong>：___HTMLTAG_350__CODEBLOCK_38__HTMLTAG_351___8.2。問題：候選人不符合資格___HTMLTAG_352__HTMLTAG_353__HTMLTAG_354___症狀</strong>：錯誤「候選人不符合資格」.___HTMLTAG_356__HTMLTAG_357__HTMLTAG_358____MLTAG_356__HTMLTAG_357__HTMLTAG_358___診斷_____36____ML____] 9__HTMLTAG_361__HTMLTAG_362___解決方案</strong>：___HTMLTAG_364__CODEBLOCK_40__HTMLTAG_365___8.3。問題：舊主節點不會降級___HTMLTAG_366__HTMLTAG_367__HTMLTAG_368___症狀</strong>：切換失敗，舊主節點仍為領導者。 ___HTMLTAG_370__HTMLTAG_371__HTMLTAG_372___診斷</strong>：___HTMLTAG_374__CODEBLOCK_41_ _____HTMLTAG_375__HTMLTAG_376___解決方案</strong>：___HTMLTAG_378__CODEBLOCK_42__HTMLTAG_379___8.4。問題：切換後複製中斷___HTMLTAG_380__HTMLTAG_381__HTMLTAG_382___症狀</strong>：舊主資料庫無法從新主資料庫複製.___HTMLTAG_384__HTMLTAG_385__HTMLTAG_386___17UMLTAUU​​UPU​​DDMLTA_____37_MLTA386___]ML 3__HTMLTAG_389__HTMLTAG_390___解決方案</strong>：___HTMLTAG_392__CODEBLOCK_44__HTMLTAG_393___9。切換自動化___HTMLTAG_394__HTMLTAG_395___9.1。腳本化切換___HTMLTAG_396__CODEBLOCK_45__HTMLTAG_397___9.2。 Ansible 劇本____HTMLTAG_398__CODEBLOCK_46__HTMLTAG_399__HTMLTAG_400___運行</strong>：____HTMLTAG_402__CODEBLOCK_47__HTMLTAG_403___9.3。 CI/CD 整合___HTMLTAG_404__CODEBLOCK_48__HTMLTAG_405___10。帶切換的滾動更新___HTMLTAG_406__HTMLTAG_407___10.1。更新策略___HTMLTAG_408__HTMLTAG_409__HTMLTAG_410___場景</strong>：從 17 更新 PostgreSQL → 18.___HTMLTAG_412__HTMLTAG_413__HTMLTAG_414___步驟</strong>：___HTMLTAG_416__CODEBLOCK_49__HTMLTAG_417___10.2。核心更新範例___HTMLTAG_418__CODEBLOCK_50__HTMLTAG_419___11。實驗室練習____HTMLTAG_420__HTMLTAG_421___實驗室1：基本切換___HTMLTAG_422__HTMLTAG_423__HTMLTAG_424___任務</strong>：___HTMLTAG_426__HTMLTAG_427__HTMLTAG_428__ _檢查目前主要：<code>patronictl清單___HTMLTAG_430__HTMLTAG_431__HTMLTAG_432___執行切換：<code>patronictl切換 postgres____HTMLTAG_434__HTMLTAG_435__HTMLTAG_436___透過連續查詢循環測量停機時間___HTMLTAG_437__HTMLTAG_438___驗證新拓樸___HTMLTAG_439__HTMLTAG_440___41HTUML40___] 2：已排程切換___HTMLTAG_444__HTMLTAG_445__HTMLTAG_446___任務</strong>：___HTMLTAG_448__HTMLTAG_449__HTMLTAG_450___安排2個切換從現在開始的幾分鐘___HTMLTAG_451__HTMLTAG_452___在等待期間監控日誌___HTMLTAG_453__HTMLTAG_454___觀察自動執行___HTMLTAG_455__HTMLTAG_456___取消計劃的切換（重複並_____9____MLTAGMLTAGML_458 3：強制與強制優雅___HTMLTAG_460__HTMLTAG_461__HTMLTAG_462___任務</strong>：___HTMLTAG_464__HTMLTAG_465__HTMLTAG_466___建立長時間運行的查詢：___HTMLTAGECT_467___SEL pg_sleep(300);___HTMLTAG_468__HTMLTAG_469__HTMLTAG_470___嘗試正常切換（觀察等待）___HTMLTAG_471__HTMLTAG_472___取消並使用 --force重試____HTMLTAG_473__HTMLTAG_474____比較行為與停機時間___HTMLTAG_475__HTMLTAG_476__HTMLTAG_477___實驗4：滾動更新模擬___HTMLTAG_478__HTMLTAG_479__HTMLTAG_480___任務</strong>：___HTMLTAG_482__HTMLTAG_483__HTMLTAG_484___從 3節點開始cluster____HTMLTAG_485__HTMLTAG_486___「更新」節點3（透過重啟模擬）___HTMLTAG_487__HTMLTAG_488___「更新」節點2___HTMLTAG_489__HTMLTAG_490___切換到節點2____HTMLTAG_491__HTMLTAG_492___「更新」節點1____HTMLTAG_493__HTMLTAG_494___驗證所有節點操作___HTMLTAG_495__HTMLTAG_496__HTMLTAG_497___實驗5：負載下切換___HTMLTAG_498__HTMLTAG_499__HTMLTAG_500___任務</strong>：___HTMLTAG_502__HTMLTAG_503__HTMLTAG_504___啟動 pgbench：___HTMLTAGbench-___p10 300____HTMLTAG_506__HTMLTAG_507__HTMLTAG_508___在載入期間，執行切換___HTMLTAG_509__HTMLTAG_510___分析 pgbench輸出是否有錯誤____HTMLTAG_511__HTMLTAG_512___計算成功率___HTMLTAG_513__HTMLTAG_514___使用連接池進行測試(PgBouncer)___HTMLTAG_515__HTMLTAG_516__HTMLTAG_517___12。摘要___HTMLTAG_518__HTMLTAG_519___關鍵概念___HTMLTAG_520__HTMLTAG_521___✅<strong>切換</strong>=計劃的、受控的角色更改___HTMLTAG_524__HTMLTAG_525___✅&nbsp;<strong>優雅</strong>=等待交易（較慢，更安全）___HTML TAG_528__HTMLTAG_529___✅&nbsp;<strong>立即</strong>=強制終止（更快，風險更高）___HTMLTAG_532__HTMLTAG_ 533___✅&nbsp;<strong>預定</strong>&nbsp;=在特定時間自動___HTMLTAG_536__HTMLTAG_537___✅&nbsp;___H TMLTAG_538___零停機</strong>&nbsp;=透過適當的架構可以實現___HTMLTAG_540__HTMLTAG_541___切換與故障轉移</h3>
<!--kg-card-begin: html-->
___HTMLTAG_544__HTMLTAG_545__HTMLTAG_546__HTMLTAG_547____方面____HTMLTAG_548__HTMLTAG_549____切換___HTMLTAG_550__HTMLTAG_551____549____切換___HTMLTAG_550__HTMLTAG_551____549____切換___HTMLTAG_550__HTMLTAG_551____549____G_F_52__ AG_553__HTMLTAG_554__HTMLTAG_555__HTMLTAG_556__HTMLTAG_557___計劃中___HTMLTAG_558__HTMLTAG_559___已計劃___HTMLTAG_560__HTMLTAG561___無計劃___MLTAG_561___無計劃___MLTAG_561___無計畫______HTMLTAG_563__HTMLTAG_564__HTMLTAG_565___控制___HTMLTAG_566__HTMLTAG_567___手動_</td>_HTMLTAG_569____自動___HTMLTAG_570__HTMLTAG571 TAG_572__HTMLTAG_573___停機時間___HTMLTAG_574__HTMLTAG_575___0-10秒___HTMLTAG_576__HTMLTAG_577___30-60秒___HTMLTAG_578__HTMLTAG_5798 __HTMLTAG_581___資料損失___HTMLTAG_582__HTMLTAG_583___無___HTMLTAG_584__HTMLTAG_585___可能___HTMLTAG_586__HTMLTAG_587__HTMLTAG_588__HTMLTAG_586__HTMLTAG_587__HTMLTAG_588__HTMLTAG_589___可逆___HTMLTAG_590__HTMLTAG_591___是___HTMLTAG_592__HTMLTAG_593___否___HTMLTAG_594__HTMLTAG_595__HTMLTAG_596__HTMLTAG_597___
<!--kg-card-end: html-->
<h3 id="best-practices">最佳實務___HTMLTAG_600__HTMLTAG_601__HTMLTAG_602___✅ 先在暫存階段進行測試___HTMLTAG_603__HTMLTAG_604___✅ 在低流量視窗期間安排____HTMLTAGML_605__HT___使用優雅模式（預設）___HTMLTAG_607__HTMLTAG_608___✅ 驗證滯後= 0 切換前____HTMLTAG_609__HTMLTAG_610___✅ 過程中監控___HTMLTAG_611__HTMLTAG_612___✅ 過程中監控___HTMLTAG_611__HTMLTAG_612___✅ 有回滾1416112_____41________2___與利害關係人溝通____HTMLTAG_615__HTMLTAG_616___✅ 文件流程___HTMLTAG_617__HTMLTAG_618__HTMLTAG_619___下一步步驟____HTMLTAG_620__HTMLTAG_621___第 15下一步課程將介紹<strong>恢復故障節點</strong>：___HTMLTAG_624__HTMLTAG_625__HTMLTAG_626___故障轉移後重新加入舊主節點___HTMLTAG_627__HTMLTAG_628___故障轉移後重新加入舊主節點___HTMLTAG_627__HTMLTAG_628____pg_rewind____pg_rewind____使用情況和情境____HTMLTAG_629__HTMLTAG_630____使用pg_basebackup完全重建___HTMLTAG_631__HTMLTAG_632___時間軸分歧解決___HTMLTAG_633__HTMLTAG_634___裂腦恢復___MLTAG_635HTMLTAGMLTAGML