---
id: 019c9617-fb71-7108-9898-0733dd6d13bf
title: 第 6 課：安裝與設定 etcd 集群
slug: bai-6-cai-dat-va-cau-hinh-etcd-cluster
description: 下載、安裝和設定 etcd 叢集 3 節點，建立 systemd 服務並使用 etcdctl 指令檢查運作狀況。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 6
section_title: 第 2 部分：安裝與設定
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7951" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7951)"/>

  <!-- Decorations -->
  <g>
    <circle cx="785" cy="85" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="970" cy="190" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="655" cy="35" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="840" cy="140" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="1025" cy="245" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="155" x2="1100" y2="235" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="185" x2="1050" y2="255" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="980.9807621135332,140 980.9807621135332,170 955,185 929.0192378864668,170 929.0192378864668,140 955,125" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 6 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：安裝與設定 etcd 叢集</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：安裝與安裝設定</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標____HTMLTAG_66__HTMLTAG_67___完成本課後，您將：___HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___了解 etcd 在 Patroni 架構中的作用____HTMLTAG_71__HTMLTAG_721__HTMLTAG_72 etcd___HTMLTAG_73__HTMLTAG_74___使用 Raft 設定 etcd叢集共識___HTMLTAG_75__HTMLTAG_76___為etcd建立systemd服務____HTMLTAG_77__HTMLTAG_78___檢查etcd叢集的運作狀況____HTMLTAG_79__HTMLTAG_80___使用基本介绍 etcd___HTMLTAG_84__HTMLTAG_85___1.1。什么是 etcd？ ___HTMLTAG_86__HTMLTAG_87___etcd 是使用 Raft 共識演算法的分散式、可靠的鍵值儲存。由CoreOS開發，目前是CNCF（雲端原生運算基金會）的專案。 ___HTMLTAG_88__HTMLTAG_89__HTMLTAG_90___主要功能</strong>：___HTMLTAG_92__HTMLTAG_93__HTMLTAG_94___🔐&nbsp;<strong>強一致___HTMLTA G_96___：確保與Raft___HTMLTAG_97__HTMLTAG_98___🚀&nbsp;<strong>快速</strong>：讀取的亞毫秒延遲___HTMLTAG_101__HTMLTAG_102___🔄🔄 103___分散式</strong>：執行多節點叢集quorum___HTMLTAG_105__HTMLTAG_106___📡&nbsp;<strong>監視機制</strong>：更改的即時通知___HTMLTAG_109 __HTMLTAG_110___🔒&nbsp;<strong>TTL支援</strong>：自動金鑰過期（對領導者）鎖定）___HTMLTAG_113__HTMLTAG_114___🌐&nbsp;___&nbsp; + HTTP API</strong>：輕鬆整合___HTMLTAG_117__HTMLTAG_118__HTMLTAG_119___1.2。 Patroni 架構中的 etcd___HTMLTAG_120__CODEBLOCK_0______HTMLTAG_121__HTMLTAG_122___etcd已儲存的檔案 </strong>:___HTMLTAG_124__HTMLTAG_125__HTMLTAG_126__HTMLTAG_127___/service/postgres/leader</code>: 領導者鎖定 (TTL 30s)___HTMLTAG_129__HTMLTAG_130__HTMLTAG_131___/service/postgres/members/</code>：節點資訊____HTMLT AG_133__HTMLTAG_134__HTMLTAG_135___/service/postgres/config</code>：叢集設定___HTMLTAG_137__HTMLTAG _138__HTMLTAG_139___/service/postgres/initialize</code>：引導狀態____HTMLTAG_141__HTMLTAG_142__HTML TAG_143___/service/postgres/failover</code>：故障轉移說明___HTMLTAG_145__HTMLTAG_146__HTMLTAG_147___2。下載並安裝 etcd___HTMLTAG_148__HTMLTAG_149___2.1。架構注意事項____HTMLTAG_150__HTMLTAG_151__HTMLTAG_152___叢集大小建議</strong>：___HTMLTAG_154__HTMLTAG_155__ HTMLTAG_156__HTMLTAG_157___3個節點</strong>：生產建議，容差1故障___HTMLTAG_159__HTMLTAG_160__HTMLTAG_161___5個節點</strong>：高可用性，可容忍 2 次故障___HTMLTAG_163__HTMLTAG_164__HTMLTAG_165___7+節點</strong>：對於大多數用途而言過度使用案例___HTMLTAG_167__HTMLTAG_168__HTMLTAG_169__HTMLTAG_170___部署拓撲</strong>：___HTMLTAG_172__CODEBLOC_1HTMLTAG_171___：___HTMLTAG_172__CODEBLOC_1HTML 2</strong>（位於同一位置）保存資源。 ___HTMLTAG_176__HTMLTAG_177___2.2。在 Ubuntu/Debian 上安裝 etcd___HTMLTAG_178__HTMLTAG_179___在<strong>所有 3 個節點上執行</strong>.___HTMLTAG_182__HTMLTAG_183___步驟 1：下載 etcd binary___HTMLTAG_184__CODEBLOCK_2__HTMLTAG_185___輸出：___HTMLTAG_186__CODEBLOCK_3__HTMLTAG_187___步驟 2：建立 etcd 使用者和目錄____HTMLTAG_188__CODEBLOCK_49MLTAG.3。在 CentOS/RHEL 上安裝___HTMLTAG_190__CODEBLOCK_5__HTMLTAG_191___3。設定etcd叢集3個節點___HTMLTAG_192__HTMLTAG_193___3.1.網路拓撲___HTMLTAG_194__CODEBLOCK_6__HTMLTAG_195___3.2。建立設定檔____HTMLTAG_196__HTMLTAG_197___節點 1 (10.0.1.11) - /etc/etcd/etcd.conf___HTMLTAG_198__CODEBLOCK_7__HTMLTAG_199___節點 2 (10.0.1.12) - /etc/etcd/etcd.conf___HTMLTAG_200__CODEBLOCK_8__HTMLTAG_201___節點3 (10.0.1.13) - /etc/etcd/etcd.conf___HTMLTAG_202__CODEBLOCK_9__HTMLTAG_203______3.3。參數說明</h3>
<!--kg-card-begin: html-->
___HTMLTAG_206__HTMLTAG_207__HTMLTAG_208__HTMLTAG_209___參數___HTMLTAG_210__HTMLTAG_211___義大利語意義___HTMLTAG_212__HTMLTAG_213______HTMLTAG_2 14___<tbody><tr>___HTMLTAG_217__HTMLTAG_218___ETCD_NAME</code>___HTMLTAG_220__HTMLTAG_221___成員的唯一名稱簇___ _HTMLTAG_222__HTMLTAG_223__HTMLTAG_224__HTMLTAG_225__HTMLTAG_226____ETCD_DATA_DIR___HTMLTAG_227__HTMLTAG_228__HTMLTAG_229___保存目錄data___H TMLTAG_230__HTMLTAG_231__HTMLTAG_232__HTMLTAG_233__HTMLTAG_234___ETCD_LISTEN_PEER_URLS___HTMLTAG_235__HTMLTAG_236___<td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">URL偵聽對等通訊（連接埠第2380章第2379章到___HTMLTAG_254__HTMLTAG_255__HTMLTAG_256__HTMLTAG_257__HTMLTAG_258____ETCD_ADVERTISE_C LIENT_URLS___HTMLTAG_259__HTMLTAG_260__HTMLTAG_261___供客戶端連線的URL至____HTMLTAG_262__HTMLTAG_263__HTMLTAG_264__HT MLTAG_265__HTMLTAG_266____ETCD_INITIAL_CLUSTER____HTMLTAG_267__HTMLTAG_268__HTMLTAG_269___所有成員的清單引導___HTMLTA G_270___</tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ETCD_INITIAL_CLUSTER_STATE___HTML TAG_275__HTMLTAG_276__HTMLTAG_277___<code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">新___HTMLTAG_279__HTMLTAG_280___</span>（第一次）或___HT MLTAG_282___&nbsp;___HTMLTAG_283__HTMLTAG_284___現有___HTMLTAG_285__HTMLTAG_286___&nbsp;</span>（新增成員）___ HTMLTAG_288__HTMLTAG_289______HTMLTAG_290__HTMLTAG_291__HTMLTAG_292____ETCD_INITIAL_CLUSTER_TOKEN___HTMLTAG_293_ _HTMLTAG_294__HTMLTAG_295___唯一叢集的令牌（避免混淆）混合）</td></tr></tbody></table>
<!--kg-card-end: html-->
<h2 id="4-t%E1%BA%A1o-systemd-service">4。建立 systemd 服務___HTMLTAG_302__HTMLTAG_303___建立檔案<code>/etc/systemd/system/etcd.service</code> on <strong>ALL 3節點</strong>：___HTMLTAG_308__CODEBLOCK_10__HTMLTAG_309__HTMLTAG_310___重新載入systemd並啟用服務</strong>：___HTMLTAG_312__CODEBLOCK_11355。啟動etcd叢集___HTMLTAG_314__HTMLTAG_315___5.1。在節點上啟動 etcd</h3><p><strong>重要</strong>：同時啟動或在 30 秒內啟動，以便形成叢集。 ___HTMLTAG_320__HTMLTAG_321__HTMLTAG_322___終端 1 (節點1)</strong>:___HTMLTAG_324__CODEBLOCK_12__HTMLTAG_325__HTMLTAG_326___2 (節點2)</strong>:___HTMLTAG_328__CODEBLOCK_13__HTMLTAG_329__HTMLTAG_330___終端3 （節點3）</strong>：___HTMLTAG_332__CODEBLOCK_1415.檢查日誌____HTMLTAG_334__CODEBLOCK_15__HTMLTAG_335__HTMLTAG_336___成功啟動日誌</strong>：____HTMLTAG_338__CODEBLOCK_16__HTMLTAG_339___6。檢查etcd叢集的運作狀況___HTMLTAG_340__HTMLTAG_341___6.1。檢查叢集成員___HTMLTAG_342__CODEBLOCK_17__HTMLTAG_343___6.2。檢查叢集運作狀況___HTMLTAG_344__CODEBLOCK_18__HTMLTAG_345___6.3。檢查端點狀態___HTMLTAG_346__CODEBLOCK_19__HTMLTAG_347__HTMLTAG_348___解釋輸出</strong>：___HTMLTAG_350__HTMLTAG_351__HTMLTAG_352__HTMLTAG_353_______ML_____D_____D____:D_____S_____S_____S_____S_____S_&_&&34____4_4_____74__74_74_7_7_70_70_77_70滿滿只有7_7_UUUS_U_U_U_U_UUU4U4U4444：___滿33332__HT目前為Leader___HTMLTAG_355__HTMLTAG_356__HTMLTAG_357___RAFT TERM</code>：選舉任期（每次選舉增加）___HTMLTAG_359__HTMLTAG_360__HTMLTAG_361___HTMLTAG_359__HTMLTAG_360__HTMLTAG_361___HTFTFTFT INDEX</code>：日誌數量條目___HTMLTAG_363__HTMLTAG_364__HTMLTAG_365___7。 etcdctl 基本指令____HTMLTAG_366__HTMLTAG_367___7.1。設定環境（選用）___HTMLTAG_368__CODEBLOCK_20__HTMLTAG_369___7.2.基本操作____HTMLTAG_370__HTMLTAG_371____放置/取得/刪除鍵___HTMLTAG_372__CODEBLOCK_21__3MLG_377721212127212121370373073373分字段的鍵結編號____HTMLTAG_374__CODEBLOCK_22__HTMLTAG_375___監視變更___HTMLTAG_376__CODEBLOCK_23__HTMLTAG_377___TTL鍵（用於領導者鎖定）___HTMLTAG_378__CODEBLOCMLK_249173_MLTAG_231.73。進階操作____HTMLTAG_380__HTMLTAG_381___交易（原子操作）____HTMLTAG_382__CODEBLOCK_25__HTMLTAG_383___快照備份____HTMLTAG_384__CODEBLOCK_26__HTMLTAG___快照備份____HTMLTAG_384__CODEBLOCK_26__HTMLTAG_385___8.實驗室：完全設定。群集___HTMLTAG_386__HTMLTAG_387___8.1。實驗目標___HTMLTAG_388__HTMLTAG_389__HTMLTAG_390___✅ 在 3 個節點上安裝 etcd___HTMLTAG_391__HTMLTAG_392___✅ 叢集設定___HTMLTAG_393__HTMLTAG_394___✅ 叢集設定___HTMLTAG_393__HTMLTAG_394______ML0ML測試基本操作___HTMLTAG_397__HTMLTAG_398___✅ 模擬節點失敗___HTMLTAG_399__HTMLTAG_400__HTMLTAG_401___8.2。逐步實驗指南___HTMLTAG_402__HTMLTAG_403___1。在所有節點上安裝 etcd___HTMLTAG_404__HTMLTAG_405___在第 2 節完成.___HTMLTAG_406__HTMLTAG_407___2。建立設定檔___HTMLTAG_408__HTMLTAG_409___在第 3 節完成.___HTMLTAG_410__HTMLTAG_411___3。建立 systemd 服務___HTMLTAG_412__HTMLTAG_413___在第 4 節實現.___HTMLTAG_414__HTMLTAG_415___4。啟動叢集___HTMLTAG_416__CODEBLOCK_27__HTMLTAG_417___5。驗證群集___HTMLTAG_418__CODEBLOCK_28__HTMLTAG_419___6。測試寫入/讀取___HTMLTAG_420__CODEBLOCK_29__HTMLTAG_421___7。測試領導者選舉___HTMLTAG_422__CODEBLOCK_30__HTMLTAG_423___8。測試資料持久性____HTMLTAG_424__CODEBLOCK_31__HTMLTAG_425___8.3。常見問題故障排除___HTMLTAG_426__HTMLTAG_427___問題 1：無法形成叢集___HTMLTAG_428__CODEBLOCK_32__HTMLTAG_429___問題 2：無法連線到 etcd___HTMLTAG_430__CODEBLOCK_33__HTMLTAG_431___問題 3：節點不會加入群集___HTMLTAG_432__CODEBLOCK_34__HTMLTAG_433___問題 4：裂腦或多位領導者___HTMLTAG_434__CODEBLOCK_35__HTMLTAG_4359。效能調整___HTMLTAG_436__HTMLTAG_437___9.1。 etcd調整參數___HTMLTAG_438__CODEBLOCK_36__HTMLTAG_439___9.2.監控etcd___HTMLTAG_440__HTMLTAG_441__HTMLTAG_442___要監控的關鍵指標___HTM LTAG_443___：___HTMLTAG_444__HTMLTAG_445__HTMLTAG_446___延遲（第99個百分位數<50毫秒）___HTMLTAG_447__HTMLTAG_448___磁碟fsync持續時間（< 10ms)___HTMLTAG_449__HTMLTAG_450___領導者變更（應該很少見）___HTMLTAG_451__HTMLTAG_452___資料庫大小___HTMLTAG_453__HTMLTAG_454___失敗的提案___H TMLTAG_455__HTMLTAG_456__HTMLTAG_457__HTMLTAG_458___檢查指標</strong>：____HTMLTAG_460__CODEBLOCK_37__HTMLTAG_461___10。摘要___HTMLTAG_462__HTMLTAG_463___要點___HTMLTAG_464__HTMLTAG_465___✅<strong>etcd 叢集</strong>：用於生產的 3節點叢集HA___HTMLTAG_468__HTMLTAG_469___✅&nbsp;<strong>連接埠</strong>：2379（客戶端）、2380（對等）___HTMLTAG_472__HTMLTAG_473___✅&nbw;共識</strong>：自動領導者選舉與資料複製___HTMLTAG_476__HTMLTAG_477___✅&nbsp;<strong>Quorum</strong>：叢集需要 2/3 個節點_______MLHTMLTA14801HT鍵</strong>：用於 Patroni 領導者鎖定___HTMLTAG_484__HTMLTAG_485___✅<strong>etcdctl</strong>：用於管理和故障排除的 CLI工具___HTMLTAG_488__HTMLTAG_489___稍後檢查清單實驗室___HTMLTAG_490__HTMLTAG_491__HTMLTAG_492___etcd 叢集 3 個節點正在執行___HTMLTAG_493__HTMLTAG_494ML&nbsp1UMLTA___ML491147____ML&nbcii____ML&nbsp 3 個成員___HTMLTAG_497__HTMLTAG_498___&nbsp;<code>etcdctl 端點運作狀況 --cluster</code> 全部健康___HTMLTAG_501__HTMLTAG_502___ 有 1 個領導者和 1 個啟用者啟用___141416_7_ML_ML_ML*服務，並且將在重新啟動時自動啟動___HTMLTAG_505__HTMLTAG_506___ 防火牆允許連接埠 2379 和2380____HTMLTAG_507__HTMLTAG_508__HTMLTAG_509____目前架構___HTMLTAG_5103DEBLOCML課程___HTMLTAG_512__HTMLTAG_513___下一課將安裝 Patroni 並與設定的 etcd 叢集整合。 </p>