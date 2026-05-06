---
id: 019c9617-fb87-7086-95fc-6fd978990d86
title: 第 13 課：自動故障轉移
slug: bai-13-automatic-failover
description: 學習錯誤偵測機制、領導者選舉過程、故障轉移時間軸並練習模擬主節點故障。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 13
section_title: 第三部分：集群管理
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6466" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6466)"/>

  <!-- Decorations -->
  <g>
    <circle cx="768" cy="234" r="16" fill="#fbbf24" opacity="0.09"/>
    <circle cx="936" cy="42" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="604" cy="110" r="24" fill="#fbbf24" opacity="0.07"/>
    <circle cx="772" cy="178" r="28" fill="#fbbf24" opacity="0.11"/>
    <circle cx="940" cy="246" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="214" x2="1100" y2="294" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="244" x2="1050" y2="314" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="989.1147367097487,149.5 989.1147367097487,178.5 964,193 938.8852632902513,178.5 938.8852632902513,149.5 964,135" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：自動故障轉移</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：叢集管理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標____HTMLTAG_66__HTMLTAG_67___學完本課後，您將：____HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___了解 Patroni中的錯誤偵測機制____HTMLTAG_71__HTMLTAG_72___了解領導者選舉過程___HTMLTAG_73__HTMLTAG_74___追蹤故障轉移時間表詳細資訊___HTMLTAG_75__HTMLTAG_76___在多種情況下測試自動故障轉移___HTMLTAG_77__HTMLTAG_78___解決故障轉移問題___HTMLTAG_79__HTMLTAG_80___最佳化故障轉移速度___HTMLTAG_81__HTMLTAG_82__HTMLTAG_83___1。自動故障轉移概述___HTMLTAG_84__HTMLTAG_85___1.1。什麼是故障轉移？ ___HTMLTAG_86__HTMLTAG_87___<strong>自動故障轉移</strong>&nbsp;=處理<strong>自動</strong>&nbsp;當主副本出現時，將副本提升為主副本<strong>失敗</strong>.___HTMLTAG_94__HTMLTAG_95__HTMLTAG_96___特殊點__ _HTMLTAG_97___：___HTMLTAG_98__HTMLTAG_99__HTMLTAG_100____⚡<strong>自動</strong>：無須幹預手動___HTMLTAG_103__HTMLTAG_104_______&nbsp; _HTMLTAG_105___未計劃</strong>：由於嘗試而發生___HTMLTAG_107__HTMLTAG_108___⏱️&nbsp;<strong>快速</strong>：30-60秒（可設定）___HTMLTAG_ 111__HTMLTAG_112___🎯&nbsp;<strong>目標</strong>：最大限度地減少停機時間____HTMLTAG_115__HTMLTAG_116__HTMLTAG_117__HTMLTAG_118___何時發生故障轉移？ ___HTMLTAG_119__HTMLTAG_120__HTMLTAG_121__HTMLTAG_122___主伺服器崩潰___HTMLTAG_123__HTMLTAG_124___PostgreSQL進程終止____HTMLTAG_125__HTMLTAG_126___網路分區___HTMLTAG_127__HTMLTAG_128___硬體失敗___HTMLTAG_129__HTMLTAG_130___DCS連線遺失___HTMLTAG_131__HTMLTAG_132___磁碟已滿___HTMLTAG_133__HTMLTAG_134__HTMLTAG_135___1.2。故障轉移與複製</h3><pre><code class="language-text">WITHOUT Patroni (Manual Failover):
1. Primary fails
2. DBA gets paged
3. DBA investigates (10-30 mins)
4. DBA manually promotes replica
5. DBA updates application config
6. Service restored
Total downtime: 30+ minutes ❌

WITH Patroni (Automatic Failover):
1. Primary fails
2. Patroni detects (10 seconds)
3. Patroni promotes best replica (20 seconds)
4. Service restored automatically
Total downtime: 30-60 seconds ✅
</code></pre><h2 id="2-failure-detection-mechanism">2。故障偵測機制___HTMLTAG_138__HTMLTAG_139___2.1。運行狀況檢查循環___HTMLTAG_140__HTMLTAG_141__HTMLTAG_142___Patroni 運行狀況檢查組件</strong>：___HTMLTAG_144__CODEBLOCK_1__HTMLTAG_145___2.2。 PostgreSQL 運作狀況檢查___HTMLTAG_146__HTMLTAG_147__HTMLTAG_148___Patroni 執行多項檢查</strong>:___HTMLTAG_150__HTMLTAG_151___A。進程檢查___HTMLTAG_152__CODEBLOCK_2__HTMLTAG_153___B。連線檢查___HTMLTAG_154__CODEBLOCK_3__HTMLTAG_155___C。複製檢查（副本上）</h4><pre><code class="language-sql">-- Check if replication is active
SELECT status, received_lsn, replay_lsn 
FROM pg_stat_wal_receiver;

-- If no data or status != 'streaming' → Problem!
</code></pre><h4 id="d-timeline-check">D。時間軸檢查___HTMLTAG_158__CODEBLOCK_5__HTMLTAG_159___2.3。 DCS 連線檢查___HTMLTAG_160__HTMLTAG_161__HTMLTAG_162___為什麼 DCS 連線很重要</strong>:___HTMLTAG_164__CODEBLOCK_6__HTMLTAG_165__HTMLTAG_166___DC檢查範例</strong>:____HTMLTAG_168__CODEBLOCK_7__HTMLTAG_169___2.4.領導者鎖定TTL___HTMLTAG_170__HTMLTAG_171__HTMLTAG_172___TTL（存活時間）機制</strong>：___HTMLTAG_174__CODEBLOC K_8__HTMLTAG_175__HTMLTAG_176___時間軸</strong>：____HTMLTAG_178__CODEBLOCK_9__HTMLTAG_179___3。領導者選舉流程___HTMLTAG_180__HTMLTAG_181___3.1。選舉觸發器____HTMLTAG_182__HTMLTAG_183__HTMLTAG_184___領導者選舉開始於</strong>:</p>___CODEBLOCK_10__HTMLTAG_187___3.2。候選選擇標準</h3><p><strong>Patroni 選擇的是基於</strong>:___HTMLTAG_192__HTMLTAG_193___優先權 1：複製狀態___HTMLTAG_194__CODEBLOCK_11__HTMLTAG_195___優先權 2：複製滯後</h4>CODEBLOCG_196___CODEBLOC 3：時間軸____HTMLTAG_198__CODEBLOCK_13__HTMLTAG_199___優先權4：標籤____HTMLTAG_200__CODEBLOCK_14__HTMLTAG_201__HTMLTAG_202___範例</strong>：_</p>___CODEBLOCK_15__HTMLTAG_205___優先權5：同步State</h4><pre><code class="language-sql">-- Synchronous replica preferred over async
SELECT sync_state FROM pg_stat_replication;

sync &gt; potential &gt; async
</code></pre><h3 id="33-race-condition-and-lock-acquisition">3.3.競爭條件與鎖定取得___HTMLTAG_208__HTMLTAG_209__HTMLTAG_210___多個副本競爭__ _HTMLTAG_211___:___HTMLTAG_212__CODEBLOCK_17__HTMLTAG_213__HTMLTAG_214___DCS保證</strong>:___HTMLTAG_216__HTMLTAG_217__ HTMLTAG_218__HTMLTAG_219___原子性</strong>：只有一個節點獲得鎖定___HTMLTAG_221__HTMLTAG_222__HTMLTAG_223___一致性</strong>：所有節點看到相同的領導___HTMLTAG_225__HTMLTAG_226__HTMLTAG_227___隔離</strong>：不可能出現裂腦___HTMLTAG_229__HTMLTAG_230__HTMLTAG_231___3.4。促銷過程___HTMLTAG_232__HTMLTAG_233__HTMLTAG_234___獲勝者節點執行</strong>:___HTMLTAG_236__CODEBLOCK_18__HTMLTAG_237___4。 Failover Timeline Detailed</h2><h3 id="41-complete-failover-flow">4.1. Complete Failover Flow</h3><pre><code class="language-text">Timeline of Automatic Failover

T+0s: NORMAL OPERATION
  Primary (node1): Healthy, serving requests
  Replica (node2): Streaming from node1, lag=0
  Replica (node3): Streaming from node1, lag=0

T+1s: PRIMARY FAILS
  node1: PostgreSQL crashes / server dies
  node2: Still streaming (buffered data)
  node3: Still streaming (buffered data)

T+5s: REPLICATION BROKEN
  node2: WAL receiver error "connection lost"
  node3: WAL receiver error "connection lost"
  node1: Still holds leader lock (TTL not expired yet)

T+10s: HEALTH CHECK CYCLE 1
  node2: Check replication → FAILED, wait...
  node3: Check replication → FAILED, wait...
  node1: Cannot renew lock (crashed)

T+20s: HEALTH CHECK CYCLE 2
  node2: Still cannot connect to node1
  node3: Still cannot connect to node1

T+30s: LEADER LOCK EXPIRES
  DCS: /service/postgres/leader TTL expired → key deleted
  node2: Detects no leader key
  node3: Detects no leader key

T+31s: CANDIDATE ELECTION BEGINS
  node2: Check eligibility → YES (lag=0, priority=100)
  node3: Check eligibility → YES (lag=1MB, priority=100)

T+32s: RACE FOR LOCK
  node2: PUT /service/postgres/leader "node2" → SUCCESS
  node3: PUT /service/postgres/leader "node3" → FAILED

T+33s: NODE2 PROMOTES
  node2: Run pre_promote callback
  node2: pg_promote() executed
  node2: Timeline: 1 → 2

T+35s: PROMOTION COMPLETE
  node2: pg_is_in_recovery() → false
  node2: Now accepting writes
  node2: Run post_promote &amp; on_role_change callbacks

T+36s: NODE3 RECONFIGURES
  node3: Detects new leader = node2
  node3: Update primary_conninfo → node2:5432
  node3: Restart WAL receiver

T+38s: REPLICATION RESTORED
  node3: Connected to node2
  node3: Streaming at timeline 2

T+40s: CLUSTER OPERATIONAL
  Primary: node2 (was replica)
  Replica: node3 (following node2)
  Failed: node1 (needs manual intervention)

Total Downtime: ~35-40 seconds ✅
</code></pre><h3 id="42-factors-affecting-failover-speed">4.2.影響故障轉移速度的因素___HTMLTAG_242__HTMLTAG_243__HTMLTAG_244___配置參數</strong>:___HTMLTAG_246__CODEBLOCK_20__HTMLTAG_247__HTMLTAG_248___權衡</strong>:</p>
<!--kg-card-begin: html-->
___HTMLTAG_252__HTMLTAG_253__HTMLTAG_254__HTMLTAG_255___參數____HTMLTAG_256__HTMLTAG_257____較低值___H TMLTAG_258__HTMLTAG_259___較高值值___HTMLTAG_260__HTMLTAG_261__HTMLTAG_262__HTMLTAG_263__HTMLTAG_264__ HTMLTAG_265__HTMLTAG_266____TTL____HTMLTAG_267__HTMLTAG_268__HTMLTAG_269___更快的故障轉移___HTMLTAG_270__ HTMLTAG_271___更多穩定___HTMLTAG_272__HTMLTAG_273__HTMLTAG_274__HTMLTAG_275__HTMLTAG_276__HTMLTAG_277_ __更多誤報____HTMLTAG_278__HTMLTAG_279___較慢故障轉移____HTMLTAG_280__HTMLTAG_281__HTMLTAG_282__HTMLTAG_283_ _HTMLTAG_284____loop_wait___HTMLTAG_285__HTMLTAG_286__HTMLTAG_287____更快的偵測____HTMLTAG_288__HTMLTAG _289___更少的DCS流量___HTMLTAG_290__HTMLTAG_291__HTMLTAG_292__HTMLTAG_293__HTMLTAG_294__HTMLTAG_295___更多CPU/網路____HTMLTAG_296__HTMLTAG_297___反應較慢___HTMLTAG_298__HTMLTAG_299__HTMLTAG_300__HTMLTAG_301___
<!--kg-card-end: html-->
<p><strong>Typical configurations</strong>:</p><pre><code class="language-yaml"># Conservative (stable, slower)
ttl: 30
loop_wait: 10
→ Failover: ~40-50s

# Balanced (recommended)
ttl: 20
loop_wait: 10
→ Failover: ~30-40s

# Aggressive (fast, sensitive)
ttl: 15
loop_wait: 5
→ Failover: ~20-30s
</code></pre><h2 id="5-testing-automatic-failover">5. Testing Automation Failover<stop offset="0%" style="stop-color:#0a1628"/><h2 id="5-testing-automatic-failover">5. Testing Automation Failover</h2>___PostG_308150.進程終止___HTMLTAG_310__HTMLTAG_311__HTMLTAG_312___模擬 PostgreSQL崩潰</strong>:____HTMLTAG_314__CODEBLOCK_22__HTMLTAG_315__HTMLTAG_316____監控故障轉移</strong>:___HTMLTAG_318 __CODEBLOCK_23__HTMLTAG_319__HTMLTAG_320___預期時間軸</strong>:</p>___CODEBLOCK_24__HTMLTAG_323___5.2. Test Scenario 2: Network Partition</h3><p><strong>Simulate network partition</strong>:___HTMLTAG_328__CODEBLOCK_25__HTMLTAG_329__HTMLTAG_330___觀察</strong>:___HTMLTAG_332__CODEBLOCK_26__ ____HTMLTAG_333__HTMLTAG_334___恢復</strong>:___HTMLTAG_336__CODEBLOCK_27__HTMLTAG_337___5.3。測試情境 3：伺服器重新啟動___HTMLTAG_338__HTMLTAG_339__HTMLTAG_340___模擬伺服器崩潰</strong>:___HTMLTAG_342__CODEBLOCK_28__HTMLTAG_343__HTMLTAG_342__CODEBLOCK_28__HTMLTAG_343__HTMLTAG_344_______455KML unavailable.</p><h3 id="54-test-scenario-4-disk-full">5.4.測試場景4：磁碟已滿___HTMLTAG_348__HTMLTAG_349__HTMLTAG_350___模擬磁碟已滿</strong>:___HTMLTAG_352__CODEBLOCK_29__HTMLTAG_353__HTMLTAG_352__CODEBLOCK_29__HTMLTAG_353__HTMLTAG_352__COPatroni 將檢測不健康觸發故障轉移.___HTMLTAG_356__HTMLTAG_357___5.5。測試情境 5：DCS 故障___HTMLTAG_358__HTMLTAG_359__HTMLTAG_360___在所有節點上停止etcd</strong>:___HTMLTAG_362__CODEBLOCK_30__HTMLTAG_363__HTMLTAG_364___預期行為</strong>：___HTMLTAG_366__CODEBLOCK_31__HTMLTAG_367___6。驗證故障轉移是否成功___HTMLTAG_368__HTMLTAG_369___6.1。 Check cluster status</h3><pre><code class="language-bash"># List cluster members
patronictl list postgres

# Expected after failover:
# + Cluster: postgres (7001234567890123456) ----+----+-----------+
# | Member | Host          | Role    | State   | TL | Lag in MB |
# +--------+---------------+---------+---------+----+-----------+
# | node1  | 10.0.1.11:5432| Replica | stopped |  1 |           | ← Old primary
# | node2  | 10.0.1.12:5432| Leader  | running |  2 |           | ← NEW primary
# | node3  | 10.0.1.13:5432| Replica | running |  2 |         0 |
# +--------+---------------+---------+---------+----+-----------+

# Note timeline changed: 1 → 2
</code></pre><h3 id="62-verify-new-primary">6.2.驗證新的主要___HTMLTAG_372__CODEBLOCK_33__HTMLTAG_373___6.3。測試寫入操作___HTMLTAG_374__CODEBLOCK_34__HTMLTAG_375___6.4。 Check failover history</h3><pre><code class="language-bash"># View history via REST API
curl -s http://10.0.1.12:8008/history | jq

# Output:
# [
#   [1, 67108864, "no recovery target specified", "2024-11-25T10:00:00+00:00"],
#   [2, 134217728, "no recovery target specified", "2024-11-25T11:30:15+00:00"]
# ]
#   ↑ Timeline 2 = Failover event

# Check Patroni logs
sudo journalctl -u patroni --since "30 minutes ago" | grep -i "promote\|failover\|leader"
</code></pre><h2 id="7-troubleshooting-failover-issues">7.故障轉移問題故障排除___HTMLTAG_378__HTMLTAG_379___7.1。問題：未發生故障轉移___HTMLTAG_380__HTMLTAG_381__HTMLTAG_382___症狀</strong>：主要關閉但沒有升級。 ___HTMLTAG_384__HTMLTAG_385__HTMLTAG_386___可能原因</strong>：___HTMLTAG_388__HTMLTAG_389___A。所有標示為 nofailover___HTMLTAG_390__CODEBLOCK_36__HTMLTAG_391___B 的副本。複製延遲太高___HTMLTAG_392__CODEBLOCK_37__HTMLTAG_393___C。 DCS 中沒有法定人數____HTMLTAG_394__CODEBLOCK_38__HTMLTAG_395___D。啟用synchronous_mode_strict___HTMLTAG_396__CODEBLOCK_39__HTMLTAG_397___7.2。問題：多重故障轉移（不穩定）___HTMLTAG_398__HTMLTAG_399__HTMLTAG_400___症狀</strong>：群集不斷重複故障轉移.___H TMLTAG_402__HTMLTAG_403__HTMLTAG_404___可能原因</strong>：___HTMLTAG_406__HTMLTAG_407___A。網路不穩定___HTMLTAG_408__CODEBLOCK_40__HTMLTAG_409___B。 TTL 過於激進____HTMLTAG_410__CODEBLOCK_41__HTMLTAG_411___C。資源耗盡___HTMLTAG_412__CODEBLOCK_42__HTMLTAG_413___7.3。問題：故障轉移緩慢___HTMLTAG_414__HTMLTAG_415__HTMLTAG_416___症狀</strong>：故障轉移需要 60 秒以上。 ___HTMLTAG_418__HTMLTAG_419__HTMLTAG_420___診斷</strong>：</p>CODEBLOCK_43__ ____HTMLTAG_423__HTMLTAG_424___最佳化</strong>：___HTMLTAG_426__CODEBLOCK_44__HTMLTAG_427___7.4。問題：故障轉移後資料遺失___HTMLTAG_428__HTMLTAG_429__HTMLTAG_430___症狀</strong>：遺失一些最近的事務。 ___HTMLTAG_432__HTMLTAG_433__HTMLTAG_434___原因</strong>：異步複製 + 複製滯後.___HTMLTAG_436__HTMLTAG_437__HTMLTAG_438___驗證</strong>_v ___HTMLTAG_441__HTMLTAG_442___預防</strong>:</p>CODEBLOCK_46__HTMLTAG_445___8。指標和監控___HTMLTAG_446__HTMLTAG_447___8.1。關鍵故障轉移指標___HTMLTAG_448__CODEBLOCK_47__HTMLTAG_449___8.2。警報規則___HTMLTAG_450__HTMLTAG_451__HTMLTAG_452___Prometheus 警報範例</strong>:</p>___CODEBLOCK_48__HTMLTAG_455___9。最佳實務___HTMLTAG_456__HTMLTAG_457___✅ 應該___HTMLTAG_458__HTMLTAG_459__HTMLTAG_460__HTMLTAG_461___定期測試故障轉移</strong>&nbsp;-每月一次，每季生產___HTMLTAG_463__HTMLTAG_464__HTMLTAG_465___監控複製lag</strong>&nbsp;- 如果滯後 >則發出警報1MB___HTMLTAG_467__HTMLTAG_468__HTMLTAG_469___使用同步複製</strong>實作零資料遺失____HTMLTAG_471__HTMLTAG_472__HT​​MLTAG_473___設定 synchront_mode____ML*允許降級___HTMLTAG_475__HTMLTAG_476__HTMLTAG_477___配置正確的 TTL_</strong>- 平衡速度與穩定性（20-30 秒）____HTMLTAG_479__HTMLTAG_480__HTMLTAG_481_____HTMLTA481_____HTML即使只有一個副本也允許故障轉移向下___HTMLTAG_483__HTMLTAG_484__HTMLTAG_485___監控 DCS 運作狀況</strong>-etcd 叢集必須運作良好___HTMLTAG_487__HTMLTAG_488__HTMLTAGMLTA_489_______MLTAG_488__HTMLTAGML_489____手動程序幹預____HTMLTAG_491__HTMLTAG_492__HTMLTAG_493___記錄故障轉移事件</strong>- 追蹤模式與問題___HTMLTAG_495__HTMLTAG_496__HTMLTAG_497___容量規劃規劃____MLTAG_498___副本應處理主副本載入____HTMLTAG_499__HTMLTAG_500__HTMLTAG_501___❌不要___HTMLTAG_502__HTMLTAG_503__HTMLTAG_504__HTMLTAG_505___不要使用單一副本___HTMLHTMLTAGsp06___&nb&nb___;無故障轉移選項___HTMLTAG_507__HTMLTAG_508__HTMLTAG_509___不要忽略滯後</strong>&nbsp;- 高滯後 = 資料遺失風險___HTMLTAG_511__HTMLTAG_512__HTMLTAG_513____MLTAG_511__HTMLTAG_512__HTMLTAG_513____MLTAG_513____]誤報___HTMLTAG_515__HTMLTAG_516__HTMLTAG_517___不要跳過測試</strong>&nbsp;- 未經測試的故障轉移 = 停機風險___HTMLTAG_519__HTMLTAG_520__HTMLTAG_521___MLTAG_519__HTMLTAG_520__HTMLTAG_521___MLTAG_519__HTMLTAG_520__HTMLTAG_521___MLTAG_519__HTMLTAG_520__HTMLTAG_521___MLTAG_521___處理它___HTMLTAG_523__HTMLTAG_524__HTMLTAG_525___不要忘記舊的主要</strong>&nbsp;- 需要重新加入/重建___HTMLTAG_527__HTMLTAG_528__HTMLTAG_529___HTMLTAG_527__HTMLTAG_528__HTMLTAG_529______ML_529_______-_529______必須知道何時發生故障轉移___HTMLTAG_531__HTMLTAG_532__HTMLTAG_533___不要過載DCS_</strong>&nbsp;- 建議使用單獨的 etcd 群集____HTMLTAG_535__HTMLTAG_536__HTTAG_535_____MLTAG_536__HT。實驗室練習___HTMLTAG_538__HTMLTAG_539___實驗室 1：基本故障轉移測試___HTMLTAG_540__HTMLTAG_541__HTMLTAG_542___任務</strong>：1. 記錄基線：<code>patronictl列表</code>2.停止主要：<code>sudo systemctl stop patoni</code>3.使用<code>watch -n 1 patonictl list</code>4 來計時轉移故障。文件停機持續時間 5. 驗證新的主節點是否接受寫入 6. 重新啟動舊的主節點並驗證重新加入____HTMLTAG_550__HTMLTAG_551___實驗室 2：網路分區測試___HTMLTAG_552__HTMLTAG_553__HTMLTAG_ML554___tablegG_552__HTMLTAG_553__HTMLTAG_ML554___table*2. 觀察 DCS 行為 3. 驗證分區後僅存在一個主資料庫 4. 恢復網路並驗證自動復原___HTMLTAG_556__HTMLTAG_557___實驗室 3：最佳化故障轉移速度___HTMLTAG_558__HTMLTAG_559__HTMLTAG_560___107558__ 2. 將 TTL 降低到 20，測試3. 減少到 15，再次測試 4. 比較故障轉移時間 5. 評估權衡（速度與誤報）___HTMLTAG_562__HTMLTAG_563___實驗 4：負載下的故障轉移___HTMLTAG_564__HTMLTAG_564__HT756_________264__HT產生負載pgbench：<code>pgbench -c 10 -T 300</code>2。載入期間，停止主要 3. 計算 pgbench 輸出中的連接錯誤 4. 計算可用性百分比 5. 記錄使用者影響___HTMLTAG_570__HTMLTAG_571___11。摘要___HTMLTAG_572__HTMLTAG_573___關鍵概念___HTMLTAG_574__HTMLTAG_575___✅&nbsp;<strong>自動故障轉移</strong>&nbsp___;=手動的自我修復幹預措施___HTMLTAG57782457_______* HTMLTAG_580___檢測</strong>=健康檢查+DCS連接+TTL過期___HTMLTAG_582__HTMLTAG_583___✅&nbsp;<strong>選擇</strong>=基於的最佳副本標籤延遲、時間線、1HT741672___ML <strong>促銷</strong>= pg_promote() + 時間軸增量 +角色變更___HTMLTAG_590__HTMLTAG_591___✅&nbsp;<strong>時間軸</strong>=故障轉移計數器，防止發散___HTMLTAG_594__HTMLTAG_595___&nbsp;_ __HTMLTAG_596___TTL</strong>=速度與時間之間的權衡穩定性___HTMLTAG_598__HTMLTAG_599___故障轉移檢查表___HTMLTAG_600__HTMLTAG_601__HTMLTAG_602___偵測到主要故障___HTMLTAG_603__HTMLTAG_604___ DCS 中的領導者鎖定已過期___HTMLTAG_605__HTMLTAG_606___ 最佳副本已識別___HTMLTAG_607__HTMLTAG_608___&nbsp;已取得領導者鎖____wid;升級成功___HTMLTAG_611__HTMLTAG_612___&nbsp;時間軸遞增____HTMLTAG_613__HTMLTAG_614___ 回呼已執行___HTMLTAG_615__HTMLTAG_616___ 重新配置其他副本____MLHTMLTAG_615__HTMLTAG_616___ 重新配置其他副本____HTMLTAG_617__HT 复制已恢复___HTMLTAG_619__HTMLTAG_620___ 群集可运行___HTMLTAG_621__HTMLTAG_622__HTMLTAG_623___下一步步骤___HTMLTAG_624__HTMLTAG_625___第 14課程將涵蓋<strong>計畫的切換</strong>：___HTMLTAG_628__HTMLTAG_629__HTMLTAG_630___計畫的維護情境___HTMLTAG_631__HTMLTAG_632 ___零停機切換過程____HTMLTAG_633__HTMLTAG_634___平穩切換與立即切換___HTMLTAG_635__HTMLTAG_636___計劃故障轉移的最佳實踐___HTMLTAG_637__HTMLTAG_638___