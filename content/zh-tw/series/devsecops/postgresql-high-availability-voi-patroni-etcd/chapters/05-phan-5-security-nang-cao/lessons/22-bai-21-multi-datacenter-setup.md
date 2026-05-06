---
id: 019c9617-fba1-7128-b313-6412f33f40cf
title: 第 21 課：多資料中心設置
slug: bai-21-multi-datacenter-setup
description: 跨DC複製策略、非同步級聯複製、災難規劃復原和地理負載平衡。
duration_minutes: 135
is_free: true
video_url: null
sort_order: 21
section_title: 第 5 部分：安全性與增強功能
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4136" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4136)"/>

  <!-- Decorations -->
  <g>
    <circle cx="922" cy="96" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="744" cy="118" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1066" cy="140" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="888" cy="162" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="710" cy="184" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="156" x2="1100" y2="236" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="186" x2="1050" y2="256" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="982.8467875173176,140.5 982.8467875173176,171.5 956,187 929.1532124826824,171.5 929.1532124826824,140.5 956,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 21 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 21 課：多重資料中心設定__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：安全性與安全性進階</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標____HTMLTAG_66__HTMLTAG_67___學完本課程後，您將：___HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___設計跨資料中心複製架構____HTMLTAG_71__HTMLTAG_72___實施拓撲LTAG_73__HTMLTAG_74___處理網路延遲與失敗____HTMLTAG_75__HTMLTAG_76___為多個站點配置災難復原____HTMLTAG_77__HTMLTAG_78___跨位置的負載平衡____HTMLTAG_79__HTMLTAG_80__HTMLTAG_80___1。多 DC 架構模式___HTMLTAG_82__HTMLTAG_83___1.1。主動-被動（災難復原備用）___HTMLTAG_84__CODEBLOCK_0__HTMLTAG_85___1.2。主動-主動（多主）___HTMLTAG_86__CODEBLOCK_1__HTMLTAG_87___1.3。中心輻射型（級聯）___HTMLTAG_88__CODEBLOCK_2__HTMLTAG_89___2。級聯複製設定___HTMLTAG_90__HTMLTAG_91___2.1。架構___HTMLTAG_92__CODEBLOCK_3__HTMLTAG_93___2.2。配置級聯節點(DC1)___HTMLTAG_94__CODEBLOCK_4__HTMLTAG_95___2.3。配置下游副本 (DC2)___HTMLTAG_96__CODEBLOCK_5__HTMLTAG_97___2.4。在級聯節點上建立複製槽___HTMLTAG_98__CODEBLOCK_6__HTMLTAG_99___2.5。啟動 DC2 副本____HTMLTAG_100__CODEBLOCK_7__HTMLTAG_101___3。網路延遲處理___HTMLTAG_102__HTMLTAG_103___3.1。測量 DC 間延遲___HTMLTAG_104__CODEBLOCK_8__HTMLTAG_105___3.2。針對高延遲進行最佳化___HTMLTAG_106__CODEBLOCK_9__HTMLTAG_107___3.3。使用 WAL 壓縮___HTMLTAG_108__CODEBLOCK_10__HTMLTAG_109___3.4。限制複製頻寬___HTMLTAG_110__CODEBLOCK_11__HTMLTAG_111___4。災難復原方案___HTMLTAG_112__HTMLTAG_113___4.1。 DC1 完全失敗___HTMLTAG_114__CODEBLOCK_12__HTMLTAG_115___4.2。 DC1 故障後恢復___HTMLTAG_116__CODEBLOCK_13__HTMLTAG_117___4.3。腦裂預防___HTMLTAG_118__CODEBLOCK_14______HTMLTAG_119__HTMLTAG_120___注意</strong>：要真正預防腦裂，請考慮：____HTMLTAG_122__HTMLTAG_123__HTMLTAG_124148566767676767676767676767676767672777777202777772關係全DC）並有見證人節點___HTMLTAG_127__HTMLTAG_128__HTMLTAG_129___防護機制_</strong>(STONITH)___HTMLTAG_1 31__HTMLTAG_132__HTMLTAG_133___基於群體的決策___HTMLTAG_134__HTMLTAG_135__HTMLTAG_136__HTMLTAG_137___5。地理負載平衡___HTMLTAG_138__HTMLTAG_139___5.1。具有地理感知功能的 HAProxy____HTMLTAG_140__CODEBLOCK_15__CODEBLOCK_16__CODEBLOCK_17__HTMLTAG_141___5.2。基於 DNS 的路由___HTMLTAG_142__CODEBLOCK_18__HTMLTAG_143___5.3。應用程式層級路由___HTMLTAG_144__CODEBLOCK_19__HTMLTAG_145___6。跨 DC 監控___HTMLTAG_146__HTMLTAG_147___6.1。監視複製延遲</h3><pre><code class="language-sql">-- On cascade node (DC1)
SELECT client_addr, application_name,
       state, sync_state,
       pg_wal_lsn_diff(pg_current_wal_lsn(), sent_lsn) AS sending_lag,
       pg_wal_lsn_diff(sent_lsn, write_lsn) AS write_lag,
       pg_wal_lsn_diff(write_lsn, flush_lsn) AS flush_lag,
       pg_wal_lsn_diff(flush_lsn, replay_lsn) AS replay_lag
FROM pg_stat_replication
WHERE application_name LIKE '%west%';
</code></pre><pre><code class="language-bash"># Expected replication lag for cross-DC:
# - Low latency WAN (&lt; 10ms): 0-10 MB lag
# - Medium latency WAN (10-50ms): 10-50 MB lag
# - High latency WAN (&gt; 50ms): 50-200 MB lag
</code></pre><h3 id="62-prometheus-exporters">6.2。普羅米修斯導出器___HTMLTAG_150__CODEBLOCK_22__HTMLTAG_151___6.3。跨 DC 的警報規則____HTMLTAG_152__CODEBLOCK_23__HTMLTAG_153___7。多 DC 的備份策略___HTMLTAG_154__HTMLTAG_155___7.1。每個 DC 備份___HTMLTAG_156__CODEBLOCK_24__HTMLTAG_157___7.2。地理複製備份儲存___HTMLTAG_158__CODEBLOCK_25__HTMLTAG_159___7.3。備份驗證___HTMLTAG_160__CODEBLOCK_26__HTMLTAG_161___8。最佳實務___HTMLTAG_162__HTMLTAG_163___✅ 應該___HTMLTAG_164__HTMLTAG_165__HTMLTAG_166__HTMLTAG_167___我們級聯複製</strong>&nbsp;- 減少主節點上的負載___HTMLTAG_169__HTMLTAG_170__HTMLTAG_171___獨立的 etcd 叢集</strong>&nbsp;- 每個 DC獨立___HTMLTAG_173__HTMLTAG_174__HTMLTAG_175___監控複製滯後</strong>&nbsp;- 高滯後警報____HTMLTAG_177__HTMLTAG_178__HTMLTAG_179ML___MLTAG_177__HTMLTAG_178__HTMLTAG_179___ML定期測試故障轉移。每季災難復原演練___HTMLTAG_181__HTMLTAG_182__HTMLTAG_183___使用複製槽</strong>&nbsp;-防止 WAL 刪除____HTMLTAG_185__HTMLTAG_186__HTMLTAG_187___壓縮 WALHTHTHT8477741877-187___ML頻寬___HTMLTAG_189__HTMLTAG_190___<strong>限制基本備援速率</strong>- 避免 WAN飽和度___HTMLTAG_193__HTMLTAG_194__HTMLTAG_195______實作地理路由______MLTAG_196___減少使用者延遲___HTMLTAG_197__HTMLTAG_198__HTMLTAG_199___文件拓樸</strong>-清晰的架構圖表____HTMLTAG_201__HTMLTAG_202__HTMLTAG_203___自動故障轉移</strong>-但經過人工批准後才能進行災難復原___HTMLTAG _205__HTMLTAG_206__HTMLTAG_207____❌不要___HTMLTAG_208__HTMLTAG_209______HTMLTAG_210__HTMLTAG_211___不要使用跨DC 同步複製</strong>&nbsp;- 太慢___HTMLTAG_213__HTMLTAG_214__HTMLTAG_215___不要跨 WAN 共享 etcd</strong>&nbsp;-腦裂風險___HTMLTAG_217__HTMLTAG_218__HTMLTAG_219___不要忽略網路延遲</strong>&nbsp;- 調整逾時___HTMLTAG_221__HTMLTAG_222__HTMLTAG_223___MLTAG_221__HTMLTAG_222__HTMLTAG_223___MLTAG_221__HTMLTAG_222__HTMLTAG_223___MLTAWAL 保留不___使用插槽____HTMLTAG_225__HTMLTAG_226__HTMLTAG_227___不要跳過 DR 測試</strong>&nbsp;-必須定期驗證___HTMLTAG_229__HTMLTAG_230__HTMLTAG_231___MLTAG_229__HTMLTAG_230__HTMLTAG_231___MLTAG_229__HTMLTAG_230__HTMLTAG_231___]異地複製____HTMLTAG_233__HTMLTAG_234__HTMLTAG_235___不要過於複雜</strong>&nbsp;- 從簡單開始，增加複雜性需要___HTMLTAG_237__HTMLTAG_238__HTMLTAG_239___MLTAG_239___。實驗練習___HTMLTAG_240__HTMLTAG_241___實驗1：設定級聯複製___HTMLTAG_242__HTMLTAG_243__HTMLTAG_244___任務</strong>:___HTMLTAG_246__HTMLTAG_247__HTMLTAG_248___在以下位置配置級聯_DC1___MLTAG_DC1___MLTAG_DC1___1248___在下列位置設定級聯中設定下游副本___HTMLTAG_251__HTMLTAG_252___建立複製槽____HTMLTAG_253__HTMLTAG_254___驗證複製滯後___HTMLTAG_255__HTMLTAG_256___使用 Prometheus 進行監控)___MLTAG_255__HTMLTAG_256___使用 Prometheus 進行監控_____TAG_25751TAGML 2：測試DR故障轉移___HTMLTAG_260__HTMLTAG_261__HTMLTAG_262___任務</strong>：___HTMLTAG_264__HTMLTAG_265__HTMLTAG_266______ C1故障（停止所有節點）___HTMLTAG_267__HTMLTAG_268___提升DC2到主要___HTMLTAG_269__HTMLTAG_270___驗證應用程式連接___HTMLTAG_271__HTMLTAG_272___記錄RTO/RPO____HTMLTAG_273__HTMLTAG_274___規劃故障復原過程___HTMLTAG_275__HTMLTAG_276__HTMLTAG_277___實驗室3：地理感知負荷平衡___HTMLTAG_278__HTMLTAG_279__HTMLTAG_280___任務</strong>：___HTMLTAG_282__HTMLTAG_283__HTMLTAG_284___在每個 DC 中設定HAProxy___HTMLTAG_285__HTMLTAG_286___設定基於地理的路由___HTMLTAG_287__HTMLTAG_288___測試讀取/寫入路由___HTMLTAG_289__HTMLTAG_290___測量延遲改善___HTMLTAG_291__HTMLTAG_292_____第 l 次檢查____HTMLTAG_293__HTMLTAG_294__HTMLTAG_295___實驗 4：跨 DC 監控___HTMLTAG_296__HTMLTAG_297__HTMLTAG_298___任務</strong>___:___HTMLTAG_300HTMLTAQMLA__________ DC抓取____HTMLTAG_303__HTMLTAG_304___使用 DC 標籤建立 Grafana 儀表板____HTMLTAG_305__HTMLTAG_306___設定跨 DC滯後的警報規則___HTMLTAG_307__HTMLTAG_308___測試模擬故障的警報____HTMLTAG_309__HTMLTAG_310___文件運行手冊警報___HTMLTAG_311__HTMLTAG_312__HTMLTAG_313___10。高階主題___HTMLTAG_314__HTMLTAG_315___10.1。三資料中心設定___HTMLTAG_316__CODEBLOCK_27__HTMLTAG_317___10.2。具有邏輯複製的主動-主動___HTMLTAG_318__CODEBLOCK_28__HTMLTAG_319___10.3。基于仲裁的提交___HTMLTAG_320__CODEBLOCK_29__HTMLTAG_321___11。摘要___HTMLTAG_322__HTMLTAG_323___多 DC 策略</h3>
<!--kg-card-begin: html-->
___HTMLTAG_326__HTMLTAG_327__HTMLTAG_328__HTMLTAG_329____模式___HTMLTAG_330__HTMLTAG_331____RPO___HTMLTAG_332__HTMLTAG_333___RTO______MLTAG_33334__ TAG_335___複雜性____HTMLTAG_336__HTMLTAG_337___成本___HTMLTAG_338__HTMLTAG_339__HTMLTAG_340__HTMLTAG_341__HTMLTAG_342__ HTMLTAG_343___主動-被動(DR)___HTMLTAG_344__HTMLTAG_345___分鐘___HTMLTAG_346__HTMLTAG_347___分鐘___HTMLTAG_348__HTMLTAG_349_ __低___HTMLTAG_350__HTMLTAG_351___低___HTMLTAG_352__HTMLTAG_353__HTMLTAG_354__HTMLTAG_355___級聯副本___HTMLTAG_356__HTML TAG_357___秒___HTMLTAG_358__HTMLTAG_359___秒___HTMLTAG_360__HTMLTAG_361___中___HTMLTAG_362__HTMLTAG_363___中___HTMLTAG_ 364__HTMLTAG_365__HTMLTAG_366__HTMLTAG_367___主動-主動___HTMLTAG_368__HTMLTAG_369___接近零___HTMLTAG_370__HTMLTAG_371___接近零___HTMLTAG____HTMLTAG_370__HTMLTAG_371___接近零___HTMLTAG____HTMLTAG_370__HTMLTAG_371___接近零___HTMLTAG____HTMLTAG4TM AG_373___高___HTMLTAG_374__HTMLTAG_375___高___HTMLTAG_376__HTMLTAG_377__HTMLTAG_378__HTMLTAG_379____中心輻射型___HTMLTAG_380__HTMLTAG_381____秒___HTML AG_382__HTMLTAG_383___分鐘___HTMLTAG_384__HTMLTAG_385___中___HTMLTAG_386__HTMLTAG_387____中___HTMLTAG_388__HTMLTAG_389__HTMLTAG_390__1MLG_390__
<!--kg-card-end: html-->
<h3 id="key-metrics">關鍵指標_</h3>___CODEBLOCK_30__HTMLTAG_395___清單___HTMLTAG_396__CODEBLOCK_31__HTMLTAG_397___後續步驟____HTMLTAG_398__HTMLTAG_39982___ Kubernetes</strong>:___HTMLTAG_402__HTMLTAG_403__HTMLTAG_404___StatefulSets 設定___HTMLTAG_405__HTMLTAG_406___Patroni Kubernetes 運算子___HTMLTAG_4071HTMLTAG4071U41371UFHT設定___HTMLTAG_409__HTMLTAG_410___Helm 圖表用法____HTMLTAG_411__HTMLTAG_412___K8s 特定注意事項____HTMLTAG_413__HTMLTAG_414___