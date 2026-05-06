---
id: 019c9617-fba8-7143-940f-93cdbbdcd4a1
title: 第 23 課：Patroni 組態管理
slug: bai-23-patroni-configuration-management
description: 動態配置更改，基於 DCS 的配置，使用 Patrictl edit-config 並更新配置，無需停機。
duration_minutes: 110
is_free: true
video_url: null
sort_order: 23
section_title: 第 5 部分：安全性與增強功能
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8608" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8608)"/>

  <!-- Decorations -->
  <g>
    <circle cx="883" cy="219" r="16" fill="#c084fc" opacity="0.14"/>
    <circle cx="666" cy="282" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="949" cy="85" r="24" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="732" cy="148" r="13" fill="#c084fc" opacity="0.11"/>
    <circle cx="1015" cy="211" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="109" x2="1100" y2="189" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="139" x2="1050" y2="209" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1047.1051177665154,187 1047.1051177665154,231 1009,253 970.8948822334847,231 970.8948822334847,187 1009,165" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 23 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 23 課：Patroni 設定管理</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：安全性與安全性進階</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標___HTMLTAG_66__HTMLTAG_67___完成本課程後，您將：___HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___動態管理Patroni設定___HTMLTAG_71__HTMLTAG_72___使用patronictl edit-config___HTMLTAG_73__HTMLTAG_74___了解DCS儲存設定___HTMLTAG_75__HTMLTAG_76___執行零停機設定變更___HTMLTAG_77__HTMLTAG_78___驗證與回溯配置____HTMLTAG_79__HTMLTAG_80HT11。配置層___HTMLTAG_82__HTMLTAG_83___1.1。配置層次結構___HTMLTAG_84__CODEBLOCK_0__HTMLTAG_85___1.2。配置範圍____HTMLTAG_86__CODEBLOCK_1__HTMLTAG_87___2。查看目前設定___HTMLTAG_88__HTMLTAG_89___2.1。顯示 DCS 設定___HTMLTAG_90__CODEBLOCK_2__HTMLTAG_91___2.2。取得具體參數___HTMLTAG_92__CODEBLOCK_3__HTMLTAG_93___2.3。與本地組態比較___HTMLTAG_94__CODEBLOCK_4__HTMLTAG_95___3。動態配置變更___HTMLTAG_96__HTMLTAG_97___3.1。以互動方式編輯配置</h3><pre><code class="language-bash"># Open editor with current config
patronictl -c /etc/patroni/patroni.yml edit-config

# This opens in $EDITOR (vim/nano)
# Example changes:
</code></pre><pre><code class="language-yaml"># Before:
postgresql:
  parameters:
    max_connections: 100
    shared_buffers: 256MB

# After:
postgresql:
  parameters:
    max_connections: 200  # Changed
    shared_buffers: 512MB  # Changed
    work_mem: 8MB  # Added
</code></pre><pre><code class="language-bash"># Save and exit
# Patroni will prompt:
# Apply these changes? [y/N]: y
# --- 
# +++ 
# @@ -5,7 +5,8 @@
#  postgresql:
#    parameters:
# -    max_connections: 100
# -    shared_buffers: 256MB
# +    max_connections: 200
# +    shared_buffers: 512MB
# +    work_mem: 8MB
# 
# Configuration changed
</code></pre><h3 id="32-automatic-vs-manual-restart">3.2。自動與手動重新啟動___HTMLTAG_100__CODEBLOCK_8__HTMLTAG_101___3.3。檢查掛起的重新啟動___HTMLTAG_102__CODEBLOCK_9__HTMLTAG_103___3.4。觸發重新啟動___HTMLTAG_104__CODEBLOCK_10__HTMLTAG_105___4。設定模板___HTMLTAG_106__HTMLTAG_107___4.1。透過命令列設定設定____HTMLTAG_108__CODEBLOCK_11__HTMLTAG_109___4.2.儲存和復原設定____HTMLTAG_110__CODEBLOCK_12__HTMLTAG_111___4.3。版本控制___HTMLTAG_112__CODEBLOCK_13__HTMLTAG_113___5。常見設定任務___HTMLTAG_114__HTMLTAG_115___5.1。增加最大連線數____HTMLTAG_116__CODEBLOCK_14__CODEBLOCK_15__HTMLTAG_117__HTMLTAG_118___注意</strong>：如果減少則需要重新啟動，如果在限制範圍內增加則需要重新載入。 ___HTMLTAG_120__HTMLTAG_121___5.2。啟用查詢日誌記錄___HTMLTAG_122__CODEBLOCK_16__CODEBLOCK_17__HTMLTAG_123__HTMLTAG_124___注意</strong>：無需重新啟動（動態參數）。 ____HTMLTAG_126__HTMLTAG_127___5.3。調整記憶體設定___HTMLTAG_128__CODEBLOCK_18__CODEBLOCK_19__HTMLTAG_129___5.4。 Tune checkpoint behavior_</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml edit-config
</code></pre><pre><code class="language-yaml">postgresql:
  parameters:
    checkpoint_timeout: 15min
    checkpoint_completion_target: 0.9
    max_wal_size: 4GB
    min_wal_size: 1GB
</code></pre><p><strong>Note</strong>: Dynamic or reload, no restart needed.</strong>: Dynamic or reload, no restart needed.</strong>HT. pg_stat_statements_</h3><pre><code class="language-bash">patronictl -c /etc/patroni/patroni.yml edit-config
</code></pre><pre><code class="language-yaml">postgresql:
  parameters:
    shared_preload_libraries: 'pg_stat_statements'  # Requires restart!
    pg_stat_statements.track: 'all'
    pg_stat_statements.max: 10000
</code></pre><pre><code class="language-bash"># After restart, create extension
sudo -u postgres psql -c "CREATE EXTENSION IF NOT EXISTS pg_stat_statements;"
</code></pre><h2 id="6-validation-and-testing">6。驗證和測試___HTMLTAG_138__HTMLTAG_139___6.1。檢查參數值____HTMLTAG_140__CODEBLOCK_25__HTMLTAG_141___6.2。驗證配置___HTMLTAG_142__CODEBLOCK_26__HTMLTAG_143___6.3。測試配置變更___HTMLTAG_144__CODEBLOCK_27__HTMLTAG_145___7。回滾過程___HTMLTAG_146__HTMLTAG_147___7.1。立即回滾___HTMLTAG_148__CODEBLOCK_28__HTMLTAG_149___7.2。緊急恢復___HTMLTAG_150__CODEBLOCK_29__HTMLTAG_151___8。進階配置___HTMLTAG_152__HTMLTAG_153___8.1。每個資料庫參數____HTMLTAG_154__CODEBLOCK_30__HTMLTAG_155__HTMLTAG_156___注意</strong>：這些會覆蓋群集範圍的設定.___HTMLTAG_158__HTMLTAG_159___8.2。條件配置___HTMLTAG_160__CODEBLOCK_31__HTMLTAG_161___8.3.自訂回呼__HTMLTAG_162__代碼區塊_32__代碼區塊_33__HTMLTAG_163___9。設定最佳實務___HTMLTAG_164__HTMLTAG_165___✅ DO___HTMLTAG_166__HTMLTAG_167__HTMLTAG_168__HTMLTAG_169___使用 DCS 執行時變更</strong>-跨群集一致___HTMLTAG_171__HTMLTAG_172__HTMLTAG_173___版本控製配置</strong>&nbsp;- 追蹤 git 中的變更____HTMLTAG_175__HTMLTAG_176__HTMLTAG_177______MLTAG_175__HTMLTAG_176__HTMLTAG_177______MLTAG_177____UmG_176__HTMLTAG_177______-4在生產前驗證___HTMLTAG_179__HTMLTAG_180__HTMLTAG_181___文件更改</strong>&nbsp;-為什麼、什麼、何時___HTMLTAG_183__HTMLTAG_184__HTMLTAG_185______更改前備份___輕鬆回滾___HTMLTAG_187__HTMLTAG_188__HTMLTAG_189___更改後監控</strong>-監視問題___HTMLTAG_191__HTMLTAG_192__HTMLTAG_193___安排重新啟動</strong>-在維護時段___HTMLTAG_195__HTMLTAG_196__HTMLTAG_197___使用panictl edit-config</strong>-不是手動etcd更改___HTMLTAG_199__HTMLTAG_200__HTMLTAG_201___驗證參數</strong>-檢查pg_設定___HTMLTAG_203__HTMLTAG_204__ TAG_205___定期查看</strong>-季度設定審核____HTMLTAG_207__HTMLTAG_208__HTMLTAG_209___❌不要___HTMLTAG_210__HTMLTAG_211__HTMLTAG_21不要___HTMLTAG_210__HTMLTAG_211__HTMLTAG_212__HT_21213___辑postgresql.conf</strong>-使用panictl相反___HTMLTAG_215__HTMLTAG_216__HTMLTAG_217___不要直接更改etcd</strong>&nbsp;-使用Patroni工具___HTMLTAG_ 219__HTMLTAG_220__HTMLTAG_221___不要跳過備份</strong>&nbsp;-始終在先前儲存變更____HTMLTAG_223__HTMLTAG_224__HTMLTAG_225___不要套用未經測試的變更</strong>-首先測試___HTMLTAG_227__HTMLTAG_228__HTMLTAG_229___不要忽略掛起的重新啟動</strong>- 可能不適用正確___HTMLTAG_231__HTMLTAG_232__HTMLTAG_233______ML需要完全重新啟動___HTMLTAG_235__HTMLTAG_236__HTMLTAG_237___不要忘記副本</strong>- 更改適用集群範圍____HTMLTAG_239__HTMLTAG_240__HTMLTAG_241___10。設定監控___HTMLTAG_242__HTMLTAG_243___10.1。追蹤配置漂移___HTMLTAG_244__CODEBLOCK_34__HTMLTAG_245___10.2。設定變更時發出警報___HTMLTAG_246__CODEBLOCK_35__HTMLTAG_247___10.3。設定變更的審核日誌___HTMLTAG_248__CODEBLOCK_36__HTMLTAG_249___11。實驗練習___HTMLTAG_250__HTMLTAG_251___實驗1：動態設定變更___HTMLTAG_252__HTMLTAG_253__HTMLTAG_254___任務</strong>：___HTMLTAG_256__HTMLTAG_257__HTMLTAG_258___查看目前設定____HTMLTAG_259257__HTMLTAG_258___查看目前設定____HTMLTAG_2592HTMLTAG_2591 ections____HTMLTAG_261__HTMLTAG_262____應用變更而不重新啟動____HTMLTAG_263__HTMLTAG_264___驗證新設定____HTMLTAG_265__HTMLTAG_266___儲存設定檔_____HTMLTAG_267__MLTAG_267__HT14267__16267_____ 2：設定要求重新啟動___HTMLTAG_270__HTMLTAG_271__HTMLTAG_272___任務</strong>：___HTMLTAG_274__HTMLTAG_275__HTMLTAG_276___更改sha red_buffers參數____HTMLTAG_277__HTMLTAG_278___觀察掛起的重新啟動標誌___HTMLTAG_279__HTMLTAG_280___執行滾動重新啟動___HTMLTAG_281__HTMLTAG_282___驗證已套用的變更____HTMLTAG_283__HTMLTAG_284___使用 pg_settings 查詢進行測試____HTMLTAG_285__HTMLTAG_286__HTMLTAG_287___實驗室3：回滾設定___HTMLTAG_288__HTMLTAG_289__HTMLTAG_290___任務</strong>：___HTMLTAG_292__HTMLTAG_293__HTMLTAG_294______備份目前設定___HTMLTAG_2951MLTAG_2951MLG_295135更改___HTMLTAG_297__HTMLTAG_298___觀察集群行為___HTMLTAG_299__HTMLTAG_300___回滾到備份___HTMLTAG_301__HTMLTAG_302___文檔恢復步驟___HTMLTAG_303__HTMLTAG_304__HTMLTAG 4：設定自動化___HTMLTAG_306__HTMLTAG_307__HTMLTAG_308___任務</strong>：___HTMLTAG_310__HTMLTAG_311__HTMLTAG_312___建立 shell腳本以應用程式設定___HTMLTAG_313__HTMLTAG_314___實作驗證檢查___HTMLTAG_315__HTMLTAG_316___新增備份/回滾邏輯___HTMLTAG_317__HTMLTAG_ 318___叢集上的測試腳本____HTMLTAG_319__HTMLTAG_320___新增至cron以進行計劃的變更____HTMLTAG_321__HTMLTAG_322__HTMLTAG_323___12。摘要___HTMLTAG_324__HTMLTAG_325___配置管理流程___HTMLTAG_326__CODEBLOCK_37__HTMLTAG_327___按鍵命令____HTMLTAG_328__CODEBLOCK_38__HTMLTAG_329___參數參數______
<!--kg-card-begin: html-->
___HTMLTAG_332__HTMLTAG_333__HTMLTAG_334__HTMLTAG_335___類型___HTMLTAG_336__HTMLTAG_337___操作___HTMLTAG_338__HTMLTAG_339___範例__HTMLTAG_340__ HTMLTAG_341__HTMLTAG_342__HTMLTAG_343__HTMLTAG_344__HTMLTAG_345___動態___HTMLTAG_346__HTMLTAG_347___立即___HTMLTAG_348__HTMLTAG_349___work_mem，立即___HTMLTAG_348__HTMLTAG_349___work_mem， effective_cache_size___HTMLTAG_350__HTMLTAG_351__HTMLTAG_352__HTMLTAG_353___重新載入___HTMLTAG_354__HTMLTAG_355___SIGHUP___HTMLTAG_3561HTMLTAG_357__HTMLTAG357（_____nmax_n__] log_statement____HTMLTAG_358__HTMLTAG_359__HTMLTAG_360__HTMLTAG_361___重新啟動___HTMLTAG_362__HTMLTAG_363___完全重新啟動___ _HTMLTAG_364__HTMLTAG_365____shared_buffers（向下），wal_level___HTMLTAG_366__HTMLTAG_367__HTMLTAG_368__HTMLTAG_369___
<!--kg-card-end: html-->
<h3 id="next-steps">後續步驟___HTMLTAG_372__HTMLTAG_373___第 24 課將涵蓋<strong>升級策略</strong>:___HTMLTAG_376__HTMLTAG_3777__HTMLTAGgre_378_____HTMLTAGgreost主要版本升級___HTMLTAG_379__HTMLTAG_380___Patroni 版本升級___HTMLTAG_381__HTMLTAG_382___零停機升級程序___HTMLTAG_383__HTMLTAG_384___回溯策略___HTMLTAG_385__HTMLTAG_38686___