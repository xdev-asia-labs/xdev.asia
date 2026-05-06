---
id: 019c9617-fbab-73c4-8dbe-d7e05b7e381a
title: 第 24 課：升級策略
slug: bai-24-upgrade-strategies
description: 升級 PostgreSQL 主要版本、Patroni 版本、零停機升級技術、回滾程序和實驗室升級 PG 17 至 18。
duration_minutes: 145
is_free: true
video_url: null
sort_order: 24
section_title: 第 5 部分：安全性與增強功能
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3080" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3080)"/>

  <!-- Decorations -->
  <g>
    <circle cx="866" cy="148" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="632" cy="274" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="898" cy="140" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="664" cy="266" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="930" cy="132" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="168" x2="1100" y2="248" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="198" x2="1050" y2="268" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.2390923627308,146.5 1005.2390923627308,189.5 968,211 930.7609076372692,189.5 930.7609076372692,146.5 968,125" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — 第 24 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 24 課：升級策略__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：安全性與安全性進階</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標___HTMLTAG_66__HTMLTAG_67___學完本課程後，您將：____HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___規劃與執行 PostgreSQL 主要版本升級____HTMLTAG_71__HTMLTAG_7220726_____71__HT pg_upgrade 進行就地升級升級___HTMLTAG_75__HTMLTAG_76___為升級實作邏輯複製___HTMLTAG_77__HTMLTAG_78___安全回溯失敗的升級___HTMLTAG_79__HTMLTAG_80__HTMLTAG_81___11。升級計劃___HTMLTAG_82__HTMLTAG_83___1.1。升級前核對錶___HTMLTAG_84__CODEBLOCK_0__HTMLTAG_85___1.2。版本相容性矩陣</h3>
<!--kg-card-begin: html-->
___HTMLTAG_88__HTMLTAG_89__HTMLTAG_90__HTMLTAG_91___從 → 到___HTMLTAG_92__HTMLTAG_93___方法___HTMLTAG_94__HTMLTAG_95___停機時間___HTMLTAG_96__HT ___風險___HTMLTAG_98__HTMLTAG_99______HTMLTAG_100__HTMLTAG_101__HTMLTAG_102__HTMLTAG_103___17 → 18___HTMLTAG_104__HTMLTAG_105___17 → 18___HTMLTAG_104__HTMLTAG_10512_up _108__HTMLTAG_109___低___HTMLTAG_110__HTMLTAG_111__HTMLTAG_112__HTMLTAG_113___15 → 18___HTMLTAG_114__HTMLTAG_115___pg_110___MLTAG_114__HTMLTAG_115___pg_1upgrade___MLTAG_114__HTMLTAG_115___pg_1upgrade___MLGMLTAG10111_41_Uup 118__HTMLTAG_119___中___HTMLTAG_120__HTMLTAG_121__HTMLTAG_122__HTMLTAG_123___12 → 18___HTMLTAG_124__HTMLTAG_125___邏輯複製___HTMLTAG_126__HTMLTAG_127___無___HTMLTAG_128__HTMLTAG_129___中___HTMLTAG_130__HTMLTAG_131__HTMLTAG_132___HTMLTAG_130__HTMLTAG_131__HTMLTAG_132313131312__HT. 18___HTMLTAG_134__HTMLTAG_135___轉儲/恢復___HTMLTAG_136__HTMLTAG_137___小時___HTMLTAG_138__HTMLTAG_139___高___HTMLTAG_140__HTMLTAG_141__HTTAG_141__HT14G140__HT
<!--kg-card-end: html-->
<h3 id="13-document-current-state">1.3。記錄目前狀態___HTMLTAG_146__CODEBLOCK_1__HTMLTAG_147___2。 PostgreSQL 小版升級___HTMLTAG_148__HTMLTAG_149___2.1。小升級過程（例如，18.0 → 18.1）___HTMLTAG_150__CODEBLOCK_2__HTMLTAG_151___2.2。滾動次要升級___HTMLTAG_152__CODEBLOCK_3__HTMLTAG_153___3。使用 pg_upgrade___HTMLTAG_154__HTMLTAG_155___3.1 升級 PostgreSQL 主要版本。架構___HTMLTAG_156__CODEBLOCK_4__HTMLTAG_157___3.2。安裝新的 PostgreSQL 版本___HTMLTAG_158__CODEBLOCK_5__HTMLTAG_159___3.3。準備升級（節點 2 - 第一份）___HTMLTAG_160__CODEBLOCK_6__HTMLTAG_161___3.4。更新 v18</h3><pre><code class="language-yaml"># /etc/patroni/patroni.yml
postgresql:
  bin_dir: /usr/lib/postgresql/18/bin  # Changed from 17
  data_dir: /var/lib/postgresql/18/data  # Changed from 17
  # ... rest of config
</code></pre><pre><code class="language-bash"># Start Patroni with new version
sudo systemctl start patroni

# Verify node2 is now running v18
psql -h node2 -U postgres -c "SELECT version();"
</code></pre><h3 id="35-upgrade-remaining-nodes">3.5 的 Patroni 設定。升級剩餘節點___HTMLTAG_164__CODEBLOCK_9__HTMLTAG_165___3.6。升級後任務___HTMLTAG_166__CODEBLOCK_10__HTMLTAG_167___4。透過邏輯複製實現零停機升級___HTMLTAG_168__HTMLTAG_169___4.1。架構___HTMLTAG_170__CODEBLOCK_11__HTMLTAG_171___4.2。設定新的 v18 叢集___HTMLTAG_172__CODEBLOCK_12__HTMLTAG_173___4.3。在 v17 上建立發布（來源）___HTMLTAG_174__CODEBLOCK_13__HTMLTAG_175___4.4。在 v18（目標）___HTMLTAG_176__CODEBLOCK_14__HTMLTAG_177___4.5 上建立訂閱。監視複製延遲___HTMLTAG_178__CODEBLOCK_15__HTMLTAG_179___4.6。切換程序___HTMLTAG_180__CODEBLOCK_16__HTMLTAG_181___5。 Patroni 版本升級___HTMLTAG_182__HTMLTAG_183___5.1。檢查相容性___HTMLTAG_184__CODEBLOCK_17__HTMLTAG_185___5.2。升級 Patroni（Python 套件）</h3>___CODEBLOCK_18__HTMLTAG_187___5.3。滾動 Patroni 升級___HTMLTAG_188__CODEBLOCK_19__HTMLTAG_189___6。 etcd 升級___HTMLTAG_190__HTMLTAG_191___6.1。 etcd 次要升級___HTMLTAG_192__CODEBLOCK_20__HTMLTAG_193___6.2。 etcd 主要升級（例如 3.4 → 3.5）</h3>___CODEBLOCK_21__HTMLTAG_195___7。回滾策略___HTMLTAG_196__HTMLTAG_197___7.1。回滾 pg_upgrade___HTMLTAG_198__CODEBLOCK_22__HTMLTAG_199___7.2。回滾邏輯複製___HTMLTAG_200__CODEBLOCK_23__HTMLTAG_201___7.3。回滾 Patroni 升級___HTMLTAG_202__CODEBLOCK_24__HTMLTAG_203___8。測試升級___HTMLTAG_204__HTMLTAG_205___8.1。暫存環境測試___HTMLTAG_206__CODEBLOCK_25__HTMLTAG_207___8.2。升級排練</h3><pre><code class="language-bash"># Practice upgrade multiple times
# Time each step
# Identify bottlenecks
# Refine procedures

# Example timing log:
# Step 1: Stop Patroni - 5 seconds
# Step 2: pg_upgrade --check - 30 seconds
# Step 3: pg_upgrade - 10 minutes
# Step 4: Start Patroni - 15 seconds
# Step 5: Replication catchup - 2 minutes
# Total: ~13 minutes
</code></pre><h2 id="9-best-practices">9。最佳實務___HTMLTAG_210__HTMLTAG_211___✅ 執行___HTMLTAG_212__HTMLTAG_213__HTMLTAG_214__HTMLTAG_215___先在暫存階段進行測試</strong>-多次___HTMLTAG_217__HTMLTAG_218__HTMLTAG_219___備份一切</strong>&nbsp;- 完整備援 + WAL 歸檔____HTMLTAG_221__HTMLTAG_222__HTMLTAG_223___使用 peck_pMLgrade____2221____2223___。及早發現問題___HTMLTAG_225__HTMLTAG_226__HTMLTAG_227___文檔程序</strong>&nbsp;- 逐步操作手冊____HTMLTAG_229__HTMLTAG_230__HTMLTAG_2311MLTAG_229__HTMLTAG_230__HTMLTAG_23111]安排時間段____4________4_____&_&&&&___&&&&&___&___&___&&F&&&&___A&&&T&T&&&&;非高峰時間___HTMLTAG_233__HTMLTAG_234__HTMLTAG_235___密切監控</strong>&nbsp;- 期間升級後___HTMLTAG_237__HTMLTAG_238__HTMLTAG_239___保留舊版本___MLTAG_240___12週內不要刪除___HTMLTAG_241__HTMLTAG_242__HTMLTAG_243___使用邏輯複製</strong>&nbsp;- 對於零停機___HTMLTAG_245__HTMLTAG_246__HTMLTAG_247___HTMLTAG_245__HTMLTAG_246__HTMLTAG_247___HTMLTAG_245__HTMLTAG_246__HTMLTAG_247___1升級升級___MLTAG____2488 PostgreSQL升級後___HTMLTAG_249__HTMLTAG_250__HTMLTAG_251___真空分析</strong>-主要後升級___HTMLTAG_253__HTMLT AG_254__HTMLTAG_255___❌請勿___HTMLTAG_256__HTMLTAG_257__HTMLTAG_258__HTMLTAG_259___不要跳過備份</strong>-關鍵安全網___HTMLTAG_261__HTMLTAG_262__HTMLTAG_263___不要升級全部立即</strong>-滾動升級___HTMLTAG_265__HTMLTAG_266__HTMLTAG_26 7___不要立即刪除舊集群</strong>&nbsp;-保留回滾____HTMLTAG_269__HTMLTAG_270__HTMLTAG_271___不要忽略發布註釋</strong>&nbsp;-重大變更___HTMLTAG_273__HTMLTAG_274__HTMLTAG_275___不要跳過測試</strong>&nbsp;- 分階段至關重要____HTMLTAG_277__HTMLTAG_278__HTMLTAG_279______*高峰時段計畫維護視窗___HTMLTAG_281__HTMLTAG_282__HTMLTAG_283___不要忘記擴充_</strong> - 可能需要更新___HTMLTAG_285__HTMLTAG_286__HTMLTAG_287___10。實驗室練習___HTMLTAG_288__HTMLTAG_289___實驗 1：次要版本升級___HTMLTAG_290__HTMLTAG_291__HTMLTAG_292___任務</strong>：___HTMLTAG_294__HTMLTAG_295ML版本___HTMLTAG_297__HTMLTAG_298___更新軟體包副本___HTMLTAG_299__HTMLTAG_300___在副本上重新啟動 Patroni____HTMLTAG_301__HTMLTAG_302___切換到升級副本____HTMLTAG_303__4MLG_303__4UMLG____303__HTMLTAG_305__HTMLTAG_306__HTMLTAG_307___實驗 2：使用 pg_upgrade 進行主要版本升級___HTMLTAG_308__HTMLTAG_309__HTMLTAG_310___任務</strong>：___HTMLTAG_31131312132132：___ PostgreSQL 18節點___HTMLTAG_315__HTMLTAG_316___執行 pg_upgrade --檢查副本___HTMLTAG_317__HTMLTAG_318___在副本上執行 pg_upgrade___HTMLTAG_319__HTMLTAG_320_____設定___HTMLTAG_321__HTMLTAG_322___完成滾動升級___HTMLTAG_323__HTMLTAG_324__HTMLTAG_325___實驗3：透過邏輯複製進行零停機升級___HTMLTAG_326__HTMLTAG_327__HTMLTAG_328___任務</strong>：___HTMLTAG_330__HTMLTAG_331__HTMLTAG_332___設定新的 v18___31TAGML_3311313____]上建立發布____HTMLTAG_335__HTMLTAG_336___在 v18上建立訂閱___HTMLTAG_337__HTMLTAG_338___監視複製延遲____HTMLTAG_339__HTMLTAG_340___執行切換____HTMLTAG_341__HTMLTAG_342___驗證應用程式功能___HTMLTAG_343__HTMLTA__TAG444451 4：回滾過程___HTMLTAG_346__HTMLTAG_347__HTMLTAG_348___任務</strong>：___HTMLTAG_350__HTMLTAG_351__HTMLTAG_352___模擬節點失敗的升級___HTMLTAG_353HTMLTAGMLTAGMLTAG14___帕特摘要___HTMLTAG_364__HTMLTAG_365___升級方法比較</h3>
<!--kg-card-begin: html-->
___HTMLTAG_368__HTMLTAG_369__HTMLTAG_370__HTMLTAG_371___方法___HTMLTAG_372__HTMLTAG_373___停機時間_ __HTMLTAG_374__HTMLTAG_375___複雜性___HTMLTAG_376__HTMLTAG_377___風險___HTMLTAG_378__HTMLTAG_379___使用案例___HTM LTAG_380__HTMLTAG_381__HTMLTAG_382__HTMLTAG_383__HTMLTAG_384__HTMLTAG_385___pg_upgrade</td>__ _HTMLTAG_387___分鐘___HTMLTAG_388__HTMLTAG_389___低___HTMLTAG_390__HTMLTAG_391___低____HTMLTAG_392__HTMLTAG_393___次要版本跳轉___HTMLTAG_394__HTTAG_394__HTTAG_394__HTTAG_394__HTTAG_394__HTTAG_394__HT 395__HTMLTAG_396__HTMLTAG_397___邏輯複製___HTMLTAG_398__HTMLTAG_399___無___HTMLTAG_400__HTMLTAG_401___高___HTMLTAG_402__HTMLTAG_403___中___MLG________ 404__HTMLTAG_405___零停機時間必需___HTMLTAG_406__HTMLTAG_407__HTMLTAG_408__HTMLTAG_409___轉儲/恢復___HTMLTAG_410__HTMLTAG_411___小時___HTMLTAGTM_412__H12__H__H AG_413___低___HTMLTAG_414__HTMLTAG_415___低___HTMLTAG_416__HTMLTAG_417___舊版___HTMLTAG_418__HTMLTAG_419__HTMLTAG_420__HTMLTAG_418__HTMLTAG_419__HTMLTAG_420__HTMLTAG_421___pg_upgrade --link___HTMLTAG_422__HTMLTAG_423___秒___HTMLTAG_424__HTMLTAG_425___中___HTMLTAG_426__HTMLTAG_427_ __中___HTMLTAG_428__HTMLTAG_429___同一伺服器升級___HTMLTAG_430__HTMLTAG_431__HTMLTAG_432__HTMLTAG_433___
<!--kg-card-end: html-->
<h3 id="typical-timeline">典型時間表___HTMLTAG_436__CODEBLOCK_27__HTMLTAG_437___升級清單____HTMLTAG_438__CODEBLOCK_28__HTMLTAG_439___後續步驟_</h3>__MLTAG_440__4525課程將涵蓋<strong>真實案例研究</strong>：___HTMLTAG_444__HTMLTAG_445__HTMLTAG_446___生產架構範例___HTMLTAG_447__HTMLTAG_448______10000 成本技術___HTMLTAG_451__HTMLTAG_452___從失敗中學到的教訓___HTMLTAG_453__HTMLTAG_454___產業特定實施___HTMLTAG_455__HTMLTAG_456___