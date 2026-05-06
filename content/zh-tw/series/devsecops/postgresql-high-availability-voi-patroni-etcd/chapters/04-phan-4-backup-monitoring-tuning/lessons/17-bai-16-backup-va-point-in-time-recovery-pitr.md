---
id: 019c9617-fb91-71b3-893f-1f4d0ad10625
title: 第 16 課：備份和時間點復原 (PITR)
slug: bai-16-backup-va-point-in-time-recovery-pitr
description: 使用 pg_basebackup，配置 WAL 歸檔、連續歸檔並執行時間點恢復 (PITR)。
duration_minutes: 205
is_free: true
video_url: null
sort_order: 16
section_title: 第 4 部分：備份、監控與調整
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1285" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1285)"/>

  <!-- Decorations -->
  <g>
    <circle cx="610" cy="140" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="620" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="630" cy="40" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="250" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="650" cy="200" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="180" x2="1100" y2="260" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="210" x2="1050" y2="280" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1060.3108891324553,212.5 1060.3108891324553,247.5 1030,265 999.6891108675446,247.5 999.6891108675446,212.5 1030,195" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：備份與時間點復原__HTMLTAG_53___
      <tspan x="60" dy="42">(PITR)</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：備份、監控與調整</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標____HTMLTAG_68__HTMLTAG_69___完成本課程後，您將：____HTMLTAG_70__HTMLTAG_71__HTMLTAG_72___設定 WAL 檔案____HTMLTAG_73__HTMLTAG_74___使用 pg_執行備份___HTMLTAG_75__HTMLTAG_76___配置連續存檔___HTMLTAG_77__HTMLTAG_78___將資料庫還原到特定時間點____HTMLTAG_79__HTMLTAG_80___自動備援策略___HTMLTAG_81__HTMLTAG_ML82___MLTAG_82___ML_UUU​​T_UU​​T_UU4_​​D_UUU​​T5_​​D_UUU​​T5_​​D____ML82___417_ML備份策略概述___HTMLTAG_86__HTMLTAG_87___1.1。備份類型___HTMLTAG_88__HTMLTAG_89___A。邏輯備份</h4><pre><code class="language-bash"># pg_dump / pg_dumpall
pg_dump -h localhost -U postgres mydb &gt; mydb.sql
pg_dumpall -h localhost -U postgres &gt; cluster.sql

# Pros:
# ✅ Easy to restore specific tables
# ✅ Portable across PostgreSQL versions
# ✅ Human-readable (text)

# Cons:
# ❌ Slow for large databases
# ❌ Not suitable for PITR
# ❌ Requires downtime for consistent backup
</code></pre><h4 id="b-physical-backup">B。實體備份___HTMLTAG_92__CODEBLOCK_1__HTMLTAG_93___C。連續歸檔（WAL 歸檔）___HTMLTAG_94__CODEBLOCK_2__HTMLTAG_95___1.2。 RTO 和 RPO：目標）</strong>= 可接受的資料遺失量是多少？ </p>___CODEBLOCK_4__HTMLTAG_105___1.3。備份策略決策矩陣</h3>
<!--kg-card-begin: html-->
___HTMLTAG_108__HTMLTAG_109__HTMLTAG_110__HTMLTAG_111___要求___HTMLTAG_112__HTMLTAG_113___解决方案___HTMLTAG_114_ _HTMLTAG_115__HTMLTAG_116__HTMLTAG_117__HTMLTAG_118__HTMLTAG_119___零資料遺失____HTMLTAG_120__HTMLTAG_121___同步複製+ PITR___HTMLTAG_122__HTMLTAG_123__HTMLTAG_124__HTMLTAG_125___快速恢復（<1 小時）___HTMLTAG_126__HTMLTAG_127___流式傳輸複製___HTMLTAG_128__HTMLTAG_129__HTMLTAGML4130功能___HTMLTAG_132__HTMLTAG_133___WAL 歸檔 + pg_basebackup___HTMLTAG_134__HTMLTAG_135__HTMLTAG_136__HTMLTAG_137___長期保留___HTMLTAG_138__HTMLTAG_139___定期p g_basebackup___HTMLTAG_140__HTMLTAG_141__HTMLTAG_142__HTMLTAG_143___災難復原___HTMLTAG_144__HTMLTAG_145___場外備援+ PITR___HTMLTAG_146__HTMLTAG_147__HTMLTAG_148__HTMLTAG_149___
<!--kg-card-end: html-->
<h2 id="2-wal-archiving-setup">2。 WAL 歸檔設定___HTMLTAG_152__HTMLTAG_153___2.1。了解 WAL 歸檔___HTMLTAG_154__HTMLTAG_155__HTMLTAG_156___WAL（預先寫入日誌）</strong>=交易日誌檔___HTMLTAG_158__CODEBLOCK_5__HTMLTAG_159__HTMLTAG_160___WAL段</strong>：___HTMLTAG_162__CODEBLOCK_6__HTMLTAG_163___2.2。設定WAL歸檔___HTMLTAG_164__HTMLTAG_165___PostgreSQL設定___HTMLTAG_166__CODEBLOCK_7__HTMLTAG_167__HTMLTAG_168___參數說明__ _HTMLTAG_169___:___HTMLTAG_170__CODEBLOCK_8__HTMLTAG_171___建立歸檔目錄___HTMLTAG_172__CODEBLOCK_9__HTMLTAG_173___2.3。高階存檔指令___HTMLTAG_174__HTMLTAG_175___A。存檔到遠端伺服器 (rsync)</h4><pre><code class="language-bash"># archive_command using rsync
archive_command = 'rsync -a %p backup-server:/mnt/wal_archive/%f'
</code></pre><h4 id="b-archive-to-s3-wal-g">B。存檔至 S3 (wal-g)___HTMLTAG_178__CODEBLOCK_11__HTMLTAG_179___C。壓縮存檔___HTMLTAG_180__CODEBLOCK_12__HTMLTAG_181___2.4。監控歸檔</h3><pre><code class="language-sql">-- Check archiving status
SELECT archived_count, 
       failed_count,
       last_archived_wal,
       last_archived_time,
       last_failed_wal,
       last_failed_time
FROM pg_stat_archiver;

-- Example output:
--  archived_count | failed_count | last_archived_wal        | last_archived_time          
-- ----------------+--------------+--------------------------+-----------------------------
--            1234 |            0 | 000000010000000000000056 | 2024-11-25 10:30:15.123456

-- If failed_count &gt; 0, check logs!
</code></pre><pre><code class="language-bash"># Check PostgreSQL logs for archive errors
sudo journalctl -u postgresql | grep -i archive

# Common errors:
# - Permission denied on archive directory
# - Archive directory full
# - Network timeout (for remote archiving)
</code></pre><h2 id="3-base-backup-with-pgbasebackup">3。使用 pg_basebackup___HTMLTAG_184__HTMLTAG_185___3.1 進行基本備援。基本 pg_basebackup___HTMLTAG_186__CODEBLOCK_15__HTMLTAG_187__HTMLTAG_188___輸出</strong>：___HTMLTAG_190__CODEBLOCK_16__HTMLTAG_191___3.2。壓縮的 tar 備援___HTMLTAG_192__CODEBLOCK_17__HTMLTAG_193___3.3。備份到遠端伺服器</h3>___CODEBLOCK_18__HTMLTAG_195___3.4。使用複製槽備份___HTMLTAG_196__CODEBLOCK_19__HTMLTAG_197___3.5。驗證備份___HTMLTAG_198__CODEBLOCK_20__HTMLTAG_199___4。時間點恢復 (PITR)___HTMLTAG_200__HTMLTAG_201___4.1。 PITR 概念___HTMLTAG_202__HTMLTAG_203__HTMLTAG_204___PITR</strong>= 将数据库恢复到<strong>任何时间点</strong>（不仅仅是备份）时间）____HTMLTAG_208__CODEBLOCK_21__HTMLTAG_209__HTMLTAG_210___要求</strong>：____HTMLTAG_212__HTMLTAG_213__HTMLTAG_214___基本备份。準備PITR___HTMLTAG_222__HTMLTAG_223__HTMLTAG_224___建立復原目錄</strong>:___HTMLTAG_226__CODEBLOCK_22__ HTMLTAG_227__HTMLTAG_228___恢復基本備份</strong>:_</p>CODEBLOCK_23__HTMLTAG_231___4.3。設定恢復___HTMLTAG_232__HTMLTAG_233__HTMLTAG_234___建立恢復設定</strong>:___HTMLTAG_236__CODEBLOCK_24__HTMLTAG_237__HTML TAG_238___恢復參數</strong>:____HTMLTAG_240__CODEBLOCK_25__HTMLTAG_241___4.4.恢復目標選項___HTMLTAG_242__HTMLTAG_243___A。恢復到特定時間</h4><pre><code class="language-sql">-- In postgresql.auto.conf
recovery_target_time = '2024-11-25 10:30:00'
</code></pre><h4 id="b-recover-to-specific-transaction">B。恢復到特定事務___HTMLTAG_246__CODEBLOCK_27__HTMLTAG_247___C.恢復到特定 LSN___HTMLTAG_248__CODEBLOCK_28__HTMLTAG_249___D。恢復到最新的___HTMLTAG_250__CODEBLOCK_29__HTMLTAG_251___E。恢復目標（包含/排除）</h4><pre><code class="language-sql">-- Default: exclusive (stop BEFORE target)
recovery_target_inclusive = 'off'

-- Inclusive: include target transaction
recovery_target_inclusive = 'on'
</code></pre><h3 id="45-perform-recovery">4.5。執行恢復___HTMLTAG_254__CODEBLOCK_31__HTMLTAG_255__HTMLTAG_256___日誌輸出</strong>:___HTMLTAG_258__CODEBLOCK_32__HTMLTAG_259__HTMLTAG_258__CODEBLOCK_32__HTMLTAG_259__HTMLTAG_260___如果暫停複</strong>：___HTMLTAG_262__CODEBLOCK_33__HTMLTAG_263__HTMLTAG_264___驗證恢復</strong>：___HTMLTAG_266__CODEBLOCK_34__HTMLTAG_267________HTMLTAG6。 PITR___HTMLTAG_268__CODEBLOCK_35__CODEBLOCK_36__HTMLTAG_269___5 之後的時間軸。使用 Patroni 實現自動化___HTMLTAG_270__HTMLTAG_271___5.1。 Patroni WAL歸檔___HTMLTAG_272__HTMLTAG_273__HTMLTAG_274___在patroni.yml中配置</strong>:___HTMLTAG_276__CODEBLOCK_37______HTMLTAG_277__HTV​​TAG_276__CODEBLOCK_37______HTMLTAG_277__HTPatTAG_278___Pato___ML MLTAG_280__HTMLTAG_281__HTMLTAG_282___在主資料庫上設定存檔____HTMLTAG_283__HTMLTAG_284___在副本上設定還原___HTMLTAG_285__HTMLTAG_286___處理時間線變更___HTMLTAG_287858285858_____備份腳本___HTMLTAG_290__CODEBLOCK_38__HTMLTAG_291__HTMLTAG_292___使用 cron 進行計劃</strong>:___HTMLTAG_294__CODEBLOCK_39__HTMLTAG_295___5.3. WALG-G整合___HTMLTAG_296__HTMLTAG_297__HTMLTAG_298___安裝WAL-G</strong>:___HTMLTAG_300__CODEBLOCK_40__HTM LTAG_301__HTMLTAG_302___設定</strong>:</p>CODEBLOCK_41__HTMLTAG_305__HTMLTAG_306___收回p 使用 WAL-G</strong>:___HTMLTAG_308__CODEBLOCK_42__HTMLTAG_309__HTMLTAG_310___使用 WAL-G</strong> 恢復:___HTMLTAG_312使用 WAL-G</strong> 恢復:___HTMLTAG_31216___CODEBLOC_431315312312512312572。災難復原計畫___HTMLTAG_314__HTMLTAG_315___6.1。災難復原策略___HTMLTAG_316__HTMLTAG_317__HTMLTAG_318___3-2-1規則</strong>：___HTMLTAG_320__CODEBLOCK_44__HTMLTAG_321___6.2。災難復原清單___HTMLTAG_322__HTMLTAG_323__HTMLTAG_324___準備</strong>：___HTMLTAG_326__CODEBLOCK_45__HTMLTAG_327___6.3。 DR 場景與流程___HTMLTAG_328__HTMLTAG_329___情境 1：資料庫損壞___HTMLTAG_330__CODEBLOCK_46__HTMLTAG_331___情境 2：資料中心故障___HTMLTAG_332__CODEBLOCK_47_____情境3：意外資料刪除___HTMLTAG_334__CODEBLOCK_48__HTMLTAG_335___6.4。恢復指標___HTMLTAG_336__HTMLTAG_337__HTMLTAG_338___RTO（恢復時間目標）</strong>：___HTMLTAG_340__CODEBLOCK_49 __HTMLTAG_341__HTMLTAG_342___RPO（恢復點）目標）</strong>：___HTMLTAG_344__CODEBLOCK_50__HTMLTAG_345___7。監控和警報___HTMLTAG_346__HTMLTAG_347___7.1。關鍵備份指標___HTMLTAG_348__CODEBLOCK_51__CODEBLOCK_52__HTMLTAG_349___7.2。普羅米修斯指標___HTMLTAG_350__CODEBLOCK_53__HTMLTAG_351___7.3。備份驗證___HTMLTAG_352__CODEBLOCK_54__HTMLTAG_353___8。最佳實務___HTMLTAG_354__HTMLTAG_355___✅ 執行___HTMLTAG_356__HTMLTAG_357__HTMLTAG_358__HTMLTAG_359___啟用 WAL 歸檔</strong>&nbsp;- PITR所需___HTMLTAG_361__HTMLTAG_362__HTMLTAG_363___自動化備份</strong>&nbsp;- 透過 cron/systemd 計時器進行每日 pg_basebackup____HTMLTAG_365__HTMLTAG_366__14G_366__138_365%________366__F____366__F________366__演練___HTMLTAG_369__HTMLTAG_370__HTMLTAG_371___監控存檔</strong>&nbsp;- 失敗警報___HTMLTAG_373__HTMLTAG_374__HTMLTAG_375______ 每天保留多個世代___ 403407 次備份;次___HTMLTAG_377__HTMLTAG_378__HTMLTAG_379___場外備份</strong>-S3，不同區域/資料中心___HTMLTAG_381__HTMLTAG_382__HTMLTA G_383___加密備援</strong>&nbsp;-靜態與傳輸中____HTMLTAG_385__HTMLTAG_386__HTMLTAG_387___文件流程</strong>&nbsp;-用於復原的操作手冊___HTMLTAG_389__HTMLTAG_390__HTMLTAG_391___驗證備份</strong>&nbsp;- 每次備份後的 pg_verifybackup___HTMLTAG_393__HTMLTAG_394__HTMLTAGTO_395___MLTAG_393__HTMLTAG_394__HTMLTAGTO_395____​​Um​​_ 從R4_____HT了解您的限制___HTMLTAG_397__HTMLTAG_398__HTMLTAG_399___❌不要___HTMLTAG_400__HTMLTAG_401__HTMLTAG_402__HTMLTAG_403___不要跳過測試___MLTAG_404___MLTAG_404___403_F否備份___HTMLTAG_405__HTMLTAG_406__HTMLTAG_407___不要只在本機上儲存</strong>&nbsp;- 資料中心故障=資料遺失____HTMLTAG_409__HTMLTAG_410__HTMLTAG_資料遺失____HTMLTAG_409__HTMLTAG_410__HTMLTAG_資料遺失____HTMLTAG_409__HTMLTAG_410__HTMLTAG_資料遺失____HT)445444444444164113元-____無提示資料遺失風險___HTMLTAG_413__HTMLTAG_414__HTMLTAG_415___不要過早刪除 WAL</strong>&nbsp;- 需要 PITR____HTMLTAG_417__HTMLTAG_418__HTMLTAG_419___MLTAG_417__HTMLTAG_418__HTMLTAG_419_____儲存成本與復原需要___HTMLTAG_421__HTMLTAG_422__HTMLTAG_423___不要備份到同一磁碟</strong>&nbsp;- 磁碟故障 = 一切遺失____HTMLTAG_425__HTMLTAG_426__HTMLTAG_427___不要跳過加密</strong>&nbsp;-安全/合規風險____HTMLTAG_429__HTMLTAG_430__HTMLTAG_431____不要假設它有效</strong>- 驗證、驗證、驗證___HTMLTAG_433__HTMLTAG_434__HTMLTAG_435___9。實驗室練習___HTMLTAG_436__HTMLTAG_437___實驗室 1：設定 WAL 歸檔___HTMLTAG_438__HTMLTAG_439__HTMLTAG_440___任務</strong>：___HTMLTAG_442__HTMLTAG1_43__4HT43__441442__HT和archive_command___HTMLTAG_445__HTMLTAG_446___建立存檔目錄___HTMLTAG_447__HTMLTAG_448___強制WAL切換：<code>SELECT pg_switch_wal();___HTMLTAG_450__HTMLTAG_451__HTMLTAG_452___驗證檔案中的WAL檔案目錄___HTMLTAG_453__HTMLTAG_454______監視 pg_stat_archiver___HTMLTAG_455__HTMLTAG_454_____HT45456___ 2：取得基礎備援___HTMLTAG_458__HTMLTAG_459__HTMLTAG_460___任務</strong>：___HTMLTAG_462__HTMLTAG_463__HTMLTAG_464______使用pg_basebackup____MLTA_463__HTMLTAG_464___使用pg_basebackup________ML_466 ifybackup____HTMLTAG_467__HTMLTAG_468___計算備援大小與時間____HTMLTAG_469__HTMLTAG_470___壓縮備份並比較大小____HTMLTAG_471__HTMLTAG_472____15____MLTAG1_473HTMLTAGML_47412___ 3：執行PITR___HTMLTAG_476__HTMLTAG_477__HTMLTAG_478___任務</strong>：___HTMLTAG_480__HTMLTAG_481__H TMLTAG_482___建立帶有時間戳記的測試表____HTMLTAG_483__HTMLTAG_484___進行基本備援___HTMLTAG_485__HTMLTAG_486___插入更多資料___HT MLTAG_487__HTMLTAG_488___注意特定時間戳___HTMLTAG_489__HTMLTAG_490___在時間戳後插入「錯誤」資料____HTMLTAG_491__HTMLTAG_4 92___恢復到時間戳記（錯誤資料之前）___HTMLTAG_493__HTMLTAG_494___驗證恢復點是正確___HTMLTAG_495__HTMLTAG_496__HTMLTAG_497___實驗4：自動備份___HTMLTAG_498__HTMLTAG_499__HTMLTAG_500___任務</strong>：___HTMLTAG_502__HTMLTAG_503 __HTMLTAG_504___編寫保留的備份腳本____HTMLTAG_505__HTMLTAG_506___新增錯誤處理和通知___HTMLTAG_507__HTMLTAG_508___使用cron 排程___HTMLTAG_509__HTMLTAG_510___測試腳本執行___HTMLTAG_511__HTMLTAG_512___監控備援日誌___HTMLTAG_513__HTMLTAG_514__HTMLTAG_515___實驗室5：災難復原鑽___HTMLTAG_516__HTMLTAG_517__HTMLTAG_518___任務</strong>：___HTMLTAG_520__HTMLTAG_521__HTMLTAG_522________整個資料庫遺失（刪除資料目錄）___MLTAG_MLHTMLTAG1522_____145____ML_ML）___ML TMLTAG_526___重播WAL到最新觀點___HTMLTAG_527__HTMLTAG_528___測量RTO（恢復時間）___HTMLTAG_529__HTMLTAG_530___驗證資料完整性___HTMLTAG_531__HTMLTAG_532_______1記錄。疑難排解___HTMLTAG_536__HTMLTAG_537___問題：存檔不起作用___HTMLTAG_538__HTMLTAG_539__HTMLTAG_540___症狀</strong>：failed_count > 0 列印pg_stat_archiver____HTMLTAG_542__HTMLTAG_543__HTMLTAG_544____檢查</strong>:____HTMLTAG_546__CODEBLOCK_55__HTMLTAG_5 47__HTMLTAG_548____通用原因</strong>：___HTMLTAG_550__HTMLTAG_551__HTMLTAG_552___存檔目錄的權限被拒絕___HTMLTAG_553__HTMLTAG_554___存檔目錄不存在____HTMLTAG_555__HTMLTAG_556___磁碟已滿___HTMLTAG_557__HTMLTAG_558___網路問題（如果遠端存檔）___HTMLTAG_559__HTMLTAG_560__HTMLTAG_561___問題：pg_basebackup慢___HTMLTAG_562__HTMLTAG_563__HTMLTAG_564___優化</strong>：___HTMLTAG_566__CODEBLOCK_56__HTMLTAG_567___問題：PITR失敗 - WAL不找到___HTMLTAG_568__HTMLTAG_569__HTMLTAG_570___錯誤</strong>：<code>無法開啟檔案「000000010000 000000000007」：沒有這樣的檔案或目錄___HTMLTAG_573__HTMLTAG_574__HTMLTAG_575__HTMLTAG_576___原因</strong>：WAL文件不在存檔或restore_command 中錯誤___HTMLTAG_578__HTMLTAG_579__HTMLTAG_580___修正</strong>：___HTMLTAG_582__CODEBLOCK_57__HTMLTAG_583___11。摘要___HTMLTAG_584__HTMLTAG_585___備份策略摘要</h3>
<!--kg-card-begin: html-->
___HTMLTAG_588__HTMLTAG_589__HTMLTAG_590__HTMLTAG_591___方法___HTMLTAG_592__HTMLTAG_593___RPO___ HTMLTAG_594__HTMLTAG_595___RTO___HTMLTAG_596__HTMLTAG_597___複雜性___HTMLTAG_598__HTMLTAG_599___使用案例</th> </tr></thead><tbody><tr><td style="padding: 5px 10px;">pg_dump</td>___HTM LTAG_607___小時/天___HTMLTAG_608__HTMLTAG_609___小時___HTMLTAG_610__HTMLTAG_611___低___HTMLTAG_612__HTMLTAG_613___小資料庫，遷移___HTMLTAG_614__HTMLTAG_615__HTMLTAG_616__HTMLTAG_617___pg_basebackup___HTMLTAG_618__HTMLTAG_619___上次備份___HTML TAG_620__HTMLTAG_621___30-120分鐘___HTMLTAG_622__HTMLTAG_623___中___HTMLTAG_624__HTMLTAG_625___定期備份___HTMLTAG_626__ HTMLTAG_627__HTMLTAG_628__HTMLTAG_629___WAL存檔___HTMLTAG_630__HTMLTAG_631___分鐘___HTMLTAG_632__HTMLTAG_633___30-120分鐘___HTMLTAG_634__HTMLTAG_635___中___HTMLTAG_636__HTMLTAG_637___PITR功能___HTMLTAG_638__HTMLTAG_639__HTMLTAG_640__HTMLTAG_641_______HTMLTAGML____2__42142________ __HTMLTAG_644__HTMLTAG_645___30-60秒___HTMLTAG_646__HTMLTAG_647___高____HTMLTAG_648__HTMLTAG_649___HA，零資料遺失____HTMLTAG_650__HTMLTAG151__
<!--kg-card-end: html-->
<h3 id="key-concepts">關鍵概念____HTMLTAG_656__HTMLTAG_657___✅<strong>WAL 歸檔_</strong>&nbsp;-交易的持續備份日誌___HTMLTAG_660__HTMLTAG_661___✅&nbsp;<strong>pg_basebackup</strong>&nbsp;-整個叢集的實體備份___HTMLTAG_664__HTMLTAG_665___✅&nbsp;<strong>PITR</strong>&nbsp;- 使用下列指令還原到任意時間點基本備份 + WAL___HTMLTAG_668__HTMLTAG_669___✅&nbsp;<strong>RTO</strong>&nbsp;- 恢復速度有多快___HTMLTAG_672__HTMLTAG_673___✅ML&nbsp;___MLTAG_672__HTMLTAG_673___✅ML&nbsp;___MLG_F___4____4_____F&&&nb&___&F&&nb&___4____4&F&F&&F&&&&&&44&___資料遺失量是多少可接受___HTMLTAG_676__HTMLTAG_677___✅&nbsp;<strong>3-2-1規則</strong>- 3份副本，2種媒體類型，1份場外___HTMLTAG_680__HTMLTAG_681___恢復清單___HTMLTAG_682__HTMLTAG_683__HTMLTAG_684___停止PostgreSQL___HTMLTAG_685__HTMLTAG_686___&nbsp;還原基本備援___HTMLTAG_687__HTMLTAG_688___&nbsp;建立復原.訊號___HTMLTAG_689__HTMLTAG_690___設定Restore_command___HTMLHTMLTAG_689__HTMLTAG_690___配置Restore_command___HTMLHTMLTAG191121212___設定恢復目標（時間/xid/lsn）___HTMLTAG_693__HTMLTAG_694___&啟動 PostgreSQL____HTMLTAG_695__HTMLTAG_696___ 監控恢復日誌___HTMLTAG_697__HTMLTAG_698___ 驗證恢復點____HTMLTAG_699__HTMLTAG_700___ 如果滿意則升級___HTMLTAG_701__若滿足則更新複製需要___HTMLTAG_703__HTMLTAG_704__HTMLTAG_705___後續步驟____HTMLTAG_706__HTMLTAG_707___第 17課程將涵蓋_<strong>監控和可觀察性</strong>:___HTMLTAG_710__HTMLTAG_711__HTMLTAG_712___Prometheus + Grafana設定___HTMLTAG_713__HTMLTAG_712___Prometheus + Grafana設定___HTMLTAG_713__HTMLTAG_712___Prometheus + Grafana設定___HTMLTAG_713__HTMLTAG_712___Prometheus + Grafana設定___HTMLTAG_713__HTMLTAG_7114___ 關鍵指標_監控___HTMLTAG_717__HTMLTAG_718___日誌聚合___HTMLTAG_719__HTMLTAG_720___警報策略___HTMLTAG_721__HTMLTAG_722___效能儀表板____HTMLTAG_723__HTMLTAG_724___