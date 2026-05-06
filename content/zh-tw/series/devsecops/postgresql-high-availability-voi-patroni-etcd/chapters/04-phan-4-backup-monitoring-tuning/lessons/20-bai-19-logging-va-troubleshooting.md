---
id: 019c9617-fb9b-734d-b723-e97053646091
title: 第 19 課：日誌記錄與故障排除
slug: bai-19-logging-va-troubleshooting
description: 分析 PostgreSQL 日誌、Patroni 日誌、etcd 日誌，解決常見問題和有效的偵錯技術。
duration_minutes: 130
is_free: true
video_url: null
sort_order: 19
section_title: 第 4 部分：備份、監控與調整
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5696" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5696)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1024" cy="102" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="948" cy="126" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="872" cy="150" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="796" cy="174" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="720" cy="198" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="202" x2="1100" y2="282" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="232" x2="1050" y2="302" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="934.0429399400242,83.5 934.0429399400242,120.5 902,139 869.9570600599758,120.5 869.9570600599758,83.50000000000001 902,65" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 19 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 19 課：日誌記錄與故障排除</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：備份、監控與調整</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h1 id="b%C3%A0i-19-logging-v%C3%A0-troubleshooting">第 19 課：日誌記錄與故障排除___HTMLTAG_66__HTMLTAG_67___目標____HTMLTAG_68__HTMLTAG_69_____學完本課後，您將：___HTMLTAG_70__HTMLTAG_71_____學完本課後，您將：___HTMLTAG_70__HTMLTAG_71_____學完本課後，您將：___HTMLTAG_70__HTMLTAG_71_____學完本、72111-7222121__Ugre日誌___HTMLTAG_73__HTMLTAG_74___透過以下方式除錯 Patroni 問題日誌___HTMLTAG_75__HTMLTAG_76___排除 etcd 叢集問題___HTMLTAG_77__HTMLTAG_78___識別並修復常見的 HA問題___HTMLTAG_79__HTMLTAG_80___有效使用偵錯工具___HTMLTAG_81__HTMLTAG_82___建置故障排除操作手冊___HTMLTAG_83__HTMLTAG_84__HTMLTAG_85___1。 PostgreSQL 日誌記錄___HTMLTAG_86__HTMLTAG_87___1.1。設定日誌記錄___HTMLTAG_88__CODEBLOCK_0__HTMLTAG_89___1.2。日誌檔案位置___HTMLTAG_90__CODEBLOCK_1__HTMLTAG_91___1.3。常見日誌模式___HTMLTAG_92__HTMLTAG_93___連線問題___HTMLTAG_94__CODEBLOCK_2__HTMLTAG_95___查詢速度慢鎖___MLTAG_96__CODEBLOCK_3__HTMLTAG_97_____HHTMLTAG_96__CODEBLOCK_3__HTMLTAG_97_____HHTMLTAG_984CODE LTAG_99___檢查點警告___HTMLTAG_100__CODEBLOCK_5__HTMLTAG_101___複製滯後___HTMLTAG_102__CODEBLOCK_6__HTMLTAG_103___磁碟空間不足___HTMLTAG_104__CODEBLOCK_711TAG____1.4。使用 pgBadger___HTMLTAG_106__CODEBLOCK_8__HTMLTAG_107___2 分析日誌。 Patroni 日誌記錄___HTMLTAG_108__HTMLTAG_109___2.1。 Patroni 日誌等級___HTMLTAG_110__CODEBLOCK_9__HTMLTAG_111___2.2。查看 Patroni 日誌___HTMLTAG_112__CODEBLOCK_10__HTMLTAG_113___2.3。常見 Patroni日誌模式___HTMLTAG_114__HTMLTAG_115___成功引導___HTMLTAG_116__CODEBLOCK_11__HTMLTAG_117___無法取得鎖定（副本）___HTMLTAG_118__CODEBLOCK_12__HTMLTAG_119___1301119___136 TMLTAG_121___DCS連線問題___HTMLTAG_122__CODEBLOCK_14__HTMLTAG_123____pg_rewind執行___HTMLTAG_124__CODEBLOCK_15__HTMLTAG_125___設定重新載入___HTMLTAG_12616251261677676767676767676767020072____MLTA。啟用偵錯日誌記錄___HTMLTAG_128__CODEBLOCK_17__HTMLTAG_129___3。 etcd 日誌記錄___HTMLTAG_130__HTMLTAG_131___3.1。查看 etcd 日誌___HTMLTAG_132__CODEBLOCK_18__HTMLTAG_133___3.2. etcd 日誌等級</h3>___CODEBLOCK_19__HTMLTAG_135___3.3。常見的etcd日誌模式____HTMLTAG_136__HTMLTAG_137___叢集健康___HTMLTAG_138__CODEBLOCK_20__HTMLTAG_139___領導者選舉____HTMLTAG_140__CODEBLO CK_21__HTMLTAG_141___網路分割區___HTMLTAG_142__CODEBLOCK_22__HTMLTAG_143___慢操作___HTMLTAG_144__CODEBLOCK_23__HTMLTAG_145___3.4。 etcd 調試___HTMLTAG_146__CODEBLOCK_24__HTMLTAG_147___4。常見問題和解決方案___HTMLTAG_148__HTMLTAG_149___4.1。問題：Patroni 無法啟動___HTMLTAG_150__HTMLTAG_151__HTMLTAG_152___症狀</strong>：<code>systemctl 狀態patroni</code>顯示失敗___HTMLTAG_156__HTMLTAG_157__HTMLTAG_158___診斷</strong>：___HTMLTAG_160__CODEBLOCK_25__HTMLTAG_161___4.2。問題：叢集中沒有領導者____HTMLTAG_162__HTMLTAG_163__HTMLTAG_164___症狀</strong>：<code>patronictl 清單</code>顯示無組長___HTMLTAG_168__HTMLTAG_169__HTMLTAG_170___診斷</strong>：___HTMLTAG_172__CODEBLOCK_26__HTMLTAG_173___4.3。問題：複製延遲過高___HTMLTAG_174__HTMLTAG_175__HTMLTAG_176___症狀</strong>：副本滯後> 100MB___HTMLTAG_178__HTMLTAG_179__HTMLTAG_180___診斷</strong>：___HTMLTAG_182__CODEBLOCK_27__HTMLTAG_183___4.4。問題：偵測到裂腦___HTMLTAG_184__HTMLTAG_185__HTMLTAG_186___症狀</strong>：多個節點聲稱是領導者___HTMLTAG_188_ _HTMLTAG_189__HTMLTAG_190___診斷</strong>：___HTMLTAG_192__CODEBLOCK_28__HTMLTAG_193___4.5。問題：未發生故障轉移___HTMLTAG_194__HTMLTAG_195__HTMLTAG_196___症狀</strong>：主節點已關閉但沒有促銷___HTMLTAG_198_ _HTMLTAG_199__HTMLTAG_200___診斷</strong>：</p>___CODEBLOCK_29__HTMLTAG_203___4.6。問題：無法連線到PostgreSQL___HTMLTAG_204__HTMLTAG_205__HTMLTAG_206___症狀</strong>：連線被拒絕或逾時___HTMLTAG_208_ _HTMLTAG_209__HTMLTAG_210___診斷</strong>：___HTMLTAG_212__CODEBLOCK_30__HTMLTAG_213___4.7。問題：pg_rewind失敗___HTMLTAG_214__HTMLTAG_215__HTMLTAG_216___症狀</strong>：節點在故障轉移後無法重新加入___HTMLTAG_218__HTMLTAG_219__HTMLTAG_220___錯誤</strong>：___HTMLTA _222___pg_rewind：錯誤：找不到常見的祖先____HTMLTAG_223__HTMLTAG_224__HTMLTAG_225__HTMLTAG_226___診斷</strong>：____HTMLTAG_228__CODEBLOCMLK_312155。調試工具___HTMLTAG_230__HTMLTAG_231___5.1。 patrictl 指令___HTMLTAG_232__CODEBLOCK_32__HTMLTAG_233___5.2。 etcdctl 指令___HTMLTAG_234__CODEBLOCK_33__HTMLTAG_235___5.3。 PostgreSQL 診斷查詢____HTMLTAG_236__CODEBLOCK_34__HTMLTAG_237___5.4。系統診斷指令___HTMLTAG_238__CODEBLOCK_35__HTMLTAG_239___6。故障排除運作手冊___HTMLTAG_240__HTMLTAG_241___6.1。主節點已關閉____HTMLTAG_242__CODEBLOCK_36__HTMLTAG_243___6.2。副本不複製</h3>___CODEBLOCK_37__HTMLTAG_245___6.3。 etcd 群集不健康___HTMLTAG_246__CODEBLOCK_38__HTMLTAG_247___7。最佳實務___HTMLTAG_248__HTMLTAG_249___✅ 應該___HTMLTAG_250__HTMLTAG_251__HTMLTAG_252__HTMLTAG_253___啟用適當的日誌記錄_</strong>-平衡詳細資料與數量___HTMLTAG_255__HTMLTAG_256__HTMLTAG_257___集中日誌</strong>&nbsp;- 使用 ELK/Grafana Loki___HTMLTAG_259__HTMLTAG_260__HTMLTAG_261___MLTAG_259__HTMLTAG_260__HTMLTAG_261_______MLTAG_261____2___主動通知___HTMLTAG_263__HTMLTAG_264__HTMLTAG_265___定期日誌回顧</strong>- 每週分析___HTMLTAG_267__HTMLTAG_268__HTMLTAG_269___文件問題</strong>MLTAG_270___-建構知識庫___HTMLTAG_271__HTMLTAG_272__HTMLTAG_273___測驗場景</strong>- 練習疑難解___HTMLTAG_275__HTMLTAG_276__HTMLTAG_277___維持操作手冊</strong>___活動文件___HTMLTAG_279__HTMLTAG_280__HTMLTAG_281___監控磁碟空間</strong>-日誌可能會填滿磁碟____HTMLTAG_283__HTMLTAG_284__HTMLTAG_285___❌不要___HTMLTAG_286__HTMLTAG_287__HTMLTAG_288__HTMLTAG_289___不要在生產中啟用調試</strong> -___HTML也是詳細___HTMLTAG_291__HTMLTAG_292__HTMLTAG_293___不要忽略警告</strong>-它們會變成錯誤___HTMLTAG_295__HTMLTAG_296__HTMLTAG_297___不要立即刪除供___HTMLTAV498_______TMLTAG_300__HTMLTAG_301___不要跳過日誌輪替</strong>&nbsp;- 防止磁碟已滿___HTMLTAG_303__HTMLTAG_304__HTMLTAG_305___不要盲排除故障</strong>&nbsp-首先檢查日誌___HTMLTAG_307__HTMLTAG_308__HTMLTAG_309___不進行更改而不記錄日誌</strong>- 記錄操作___HTMLTAG_311__HTMLTAG_312__HTMLTAG_313___8。實驗室練習____HTMLTAG_314__HTMLTAG_315___實驗室 1：日誌分析___HTMLTAG_316__HTMLTAG_317__HTMLTAG_318___任務_</strong>： 1. 配置 PostgreSQL 慢行記錄 2.3 查詢記錄結果___HTMLTAG_320__HTMLTAG_321___實驗 2：模擬與偵錯故障轉移___HTMLTAG_322__HTMLTAG_323__HTMLTAG_324___任務</strong>： 1. 停止主節點日誌 2. 在故障轉移期間監控時間 5.建立時間軸圖___HTMLTAG_326__HTMLTAG_327___實驗 3：除錯複製延遲___HTMLTAG_328__HTMLTAG_329__HTMLTAG_330___任務</strong>： 1. 模擬主資料庫上的高寫入負載 2. 1945.驗證延遲減少___HTMLTAG_332__HTMLTAG_333___實驗 4：解決連線問題___HTMLTAG_334__HTMLTAG_335__HTMLTAG_336___任務</strong>： 1. pg_hba.conf 設定錯誤 2. 嘗試連線 5.驗證連線工作___HTMLTAG_338__HTMLTAG_339___9。摘要___HTMLTAG_340__HTMLTAG_341___關鍵記錄位置___HTMLTAG_342__CODEBLOCK_39__HTMLTAG_343___基本診斷命令</h3>___CO DEBLOCK_40__HTMLTAG_345___故障排除工作流程___HTMLTAG_346__HTMLTAG_347__HTMLTAG_348__HTMLTAG_349___識別</strong>-症狀是什麼？ ___HTMLTAG_351__HTMLTAG_352__HTMLTAG_353___隔離</strong>- 哪個元件失敗？ ___HTMLTAG_355__HTMLTAG_356__HTMLTAG_357___調查</strong>- 檢查日誌、指標___HTMLTAG_359__HTMLTAG_360___<strong>診斷</strong>- 根源是什麼原因？ ___HTMLTAG_363__HTMLTAG_364__HTMLTAG_365___修正</strong>-應用解決方案___HTMLTAG_367__HTMLTAG_3 68__HTMLTAG_369___驗證</strong>-確認決議___HTMLTAG_371__HTMLTAG_372__HTMLTAG_373___文檔___HTMLT AG_374___-為未來記錄___HTMLTAG_375__HTMLTAG_376__HTMLTAG_377___後續步驟___HTMLTAG_378__HTMLTAG_379___第20課程將涵蓋<strong>安全最佳實務</strong>：___HTMLTAG_382__HTMLTAG_383__HTMLTAG_384___SSL/TLS加密___HTMLTAG_385__HTMLTAG_386___驗證方法___HTMLTAG_387__HTMLTAG_388___網路安全___HTMLTAG_389__HTMLTAG_390___加密其余___HTMLTAG_391__HTMLTAG_392___审核日志记录___HTMLTAG_393__HTMLTAG_394___安全强化____HTMLTAG_395__HTMLTAG_396___