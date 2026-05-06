---
id: 019c9617-fbb5-7070-ba8e-a4ee3baf3c1d
title: 第 27 課：災難復原演習
slug: bai-27-disaster-recovery-drills
description: 災難復原規劃、測試程序、事件應變流程、事後分析和完整災難復原場景模擬。
duration_minutes: 110
is_free: true
video_url: null
sort_order: 27
section_title: 第 6 部分：製作與案例研究
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8633" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8633)"/>

  <!-- Decorations -->
  <g>
    <circle cx="863" cy="39" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="626" cy="42" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="889" cy="45" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="652" cy="48" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="915" cy="51" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="249" x2="1100" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="279" x2="1050" y2="349" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1087.1051177665154,227 1087.1051177665154,271 1049,293 1010.8948822334847,271 1010.8948822334847,227 1049,205" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 27 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 27 課：災難復原演習</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：製作與製作案例研究</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標____HTMLTAG_66__HTMLTAG_67___學完本課後，您將：____HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___規劃全面的災難恢復程序____HTMLTAG_71__HTMLTAG_72___科學地執行災難復原演TMLTAG_73__HTMLTAG_74___測量並最佳化RTO/RPO___HTMLTAG_75__HTMLTAG_76___進行事件回應練習___HTMLTAG_77__HTMLTAG_78___記錄並改進災難復原流程___HTMLTAG_79__HTMLTAG_80__HTMLTAG_80___110G_801___災難復原規劃基金會___HTMLTAG_82__HTMLTAG_83___1.1。關鍵災難復原指標___HTMLTAG_84__CODEBLOCK_0__HTMLTAG_85___1.2。要測試的災難復原場景___HTMLTAG_86__CODEBLOCK_1__HTMLTAG_87___2。災難復原演練準備___HTMLTAG_88__HTMLTAG_89___2.1。預演檢查清單___HTMLTAG_90__CODEBLOCK_2__HTMLTAG_91___2.2。災難復原團隊角色___HTMLTAG_92__CODEBLOCK_3__HTMLTAG_93___3。情境 1：單一副本故障___HTMLTAG_94__HTMLTAG_95___3.1。鑽取過程___HTMLTAG_96__CODEBLOCK_4__HTMLTAG_97___3.2。預期結果___HTMLTAG_98__CODEBLOCK_5__HTMLTAG_99___4。情境 2：領導者故障轉移___HTMLTAG_100__HTMLTAG_101___4.1。鑽取過程___HTMLTAG_102__CODEBLOCK_6__HTMLTAG_103___4.2。預期結果___HTMLTAG_104__CODEBLOCK_7__HTMLTAG_105___5。情境 3：資料中心完全故障___HTMLTAG_106__HTMLTAG_107___5.1。鑽取過程___HTMLTAG_108__CODEBLOCK_8__HTMLTAG_109___5.2。預期結果___HTMLTAG_110__CODEBLOCK_9__HTMLTAG_111___6。情境 4：時間點復原（資料損壞）___HTMLTAG_112__HTMLTAG_113___6.1。鑽取過程___HTMLTAG_114__CODEBLOCK_10__HTMLTAG_115___6.2。預期結果___HTMLTAG_116__CODEBLOCK_11__HTMLTAG_117___7。災難復原演練指標和報告___HTMLTAG_118__HTMLTAG_119___7.1。練習記分卡___HTMLTAG_120__CODEBLOCK_12__HTMLTAG_121___7.2。練習後分析___HTMLTAG_122__CODEBLOCK_13__HTMLTAG_123___8。 HA 的混沌工程___HTMLTAG_124__HTMLTAG_125___8.1。用於 PostgreSQL 的混沌猴子____HTMLTAG_126__CODEBLOCK_14__HTMLTAG_127___8.2。自動化災難復原測試___HTMLTAG_128__CODEBLOCK_15__HTMLTAG_129___9。最佳實務___HTMLTAG_130__HTMLTAG_131___✅ 執行___HTMLTAG_132__HTMLTAG_133__HTMLTAG_134__HTMLTAG_135___安排定期練習</strong>&nbsp;-每季最低限度___HTMLTAG_137__HTMLTAG_138__HTMLTAG_139___測試所有場景</strong>&nbsp;- 不只是簡單的____HTMLTAG_141__HTMLTAG_142__HTMLTAG_1433___MLTAG_141__HTMLTAG_142__HTMLTAG_143______MLTAG_141__HTMLTAG_142__HTMLTAG_1433________ML________S_&nb____b&w____b________________S____S____S____S____S______________S____S____S_______一切一切都應該___-________S____S____S________S____S____S____S____S____S____S____S____S____S____S____S____*一次___HTMLTAG_145__HTMLTAG_146__HTMLTAG_147___記錄一切</strong>&nbsp;- 帶時間戳註釋____HTMLTAG_149__HTMLTAG_150__HTMLTAG_151___測量 RTO/RPO___HTMLTAG_1520__HTMLTAG_151___測量 RTO/RPO___HTMLTAG____追蹤改進___HTMLTAG_153__HTMLTAG_154__HTMLTAG_155___事後分析每次演習</strong>- 學習與改進____HTMLTAG_157__HTMLTAG_158__HTMLTAG_159___更新作業手冊___ML-G_160___保持文件最新___HTMLTAG_161__HTMLTAG_162__HTMLTAG_163___讓所有團隊參與</strong>-跨職能實務___HTMLTAG_165__HTMLTAG_166__HTMLTAG_167___測試備援</strong>-復原驗證必不可少___HTMLTAG_169__HTMLTAG_170__HTMLTAG_1 71___盡可能自動化</strong>-減少人力錯誤___HTMLTAG_173__HTMLTAG_174__HTMLTAG_175___❌不要___HTMLTAG_176__HTMLTAG_177__HTMLTAG_178__HTMLTAG_179___不要跳過練習</strong>&nbsp;-「太忙」不是藉口___HTMLTAG_181__HTMLTAG_182__HTMLTAG_183___不要只測試簡單的場景</strong>&nbsp;-困難的場景很重要最___HTMLTAG_185__HTMLTAG_186__HTMLTAG_187___不要忽略操作項</strong>-跟進改進____HTMLTAG_189__HTMLTAG_190__HTMLTAG_191___不要重複使用相同的場景</strong>- 改變練習___HTMLTAG_193__HTMLTAG_194__HTMLTAG_195______ 依賴一個人_____總線係數1961是危險的___HTMLTAG_197__HTMLTAG_198__HTMLTAG_199___不要急</strong>-正確的測試時間___HTMLTAG_201__HTMLT AG_202__HTMLTAG_203___不要跳過事後分析</strong>-學習機會___HTMLTAG_205__HTMLTAG_206__HTMLTAG_207___10。實驗室練習___HTMLTAG_208__HTMLTAG_209___實驗室1：執行故障轉移演練___HTMLTAG_210__HTMLTAG_211__HTMLTAG_212___任務</strong>：___HTMLTAG_214__HTMLTAG_215__HTMLTAG_216___規劃與排程演___HT AG_220___執行領導者故障轉移___HTMLTAG_221__HTMLTAG_222___文件時間軸____HTMLTAG_223__HTMLTAG_224___計算RTO/RPO___HTMLTAG_225__HTMLTAG_226_______]-19UUU起分析____ML282982828982：289_UUUUA_UUUU428：2829UU4UU4UU4：UUU4U44444：UUS：UUU4U444447：287：20707：20007C：UUS：UUU7：CUUS：UUS：UUS：UUUS：CUUS：USU​​Sif.復原練習___HTMLTAG_230__HTMLTAG_231__HTMLTAG_232___任務</strong>：___HTMLTAG_234__HTMLTAG_235__HTMLTAG_236___建立測試資料____HTMLTAG_237__DMLTAG_UU​​TUU​​T23241____237__ PITR目標時間___HTMLTAG_241__HTMLTAG_242___恢復到單獨的實例___HTMLTAG_243__HTMLTAG_244___驗證恢復的資料____HTMLTAG_245__HTMLTAG_246___記錄過程___HTMLTAG_247__HTMLTAG248__HTMLTAG288297__HT DC故障轉移___HTMLTAG_250__HTMLTAG_251__HTMLTAG_252___任務</strong>：___HTMLTAG_254__HTMLTAG_255__HTMLTAG_256___設定2-DC集群___HTMLTAG_257__15GDC_257__15021257___ TMLTAG_260___手動升級DC2___HTMLTAG_261__HTMLTAG_262___更新應用程式設定___HTMLTAG_263__HTMLTAG_264___測量停機時間___HTMLTAG_265__HTMLTAG_266_______HTHTMLTAGMLTAG_265__HTMLTAG_266_______HT 4：混沌工程___HTMLTAG_270__HTMLTAG_271__HTMLTAG_272___任務_</strong>：____HTMLTAG_274__HTMLTAG_275__HTMLTAG_276______實施混沌猴子___HTMLTAG_2771HTML TMLTAG_280___監控群集行為___HTMLTAG_281__HTMLTAG_282___文檔故障與恢復____HTMLTAG_283__HTMLTAG_284____識別薄弱環節___HTMLTAG_285__HTMLTAG_286___HA配置1HTMLTAG_287828784___8_____摘要___HTMLTAG_290__HTMLTAG_291___DR鑽探頻率___HTMLTAG_292__CODEBLOCK_16__HTMLTAG_293___成功標準____HTMLTAG_294__CODEBLOCK_17__HTMLTAG_2 95___要追蹤的關鍵指標___HTMLTAG_296__CODEBLOCK_18__HTMLTAG_297___下一頁步驟___HTMLTAG_298__HTMLTAG_299___第28 課程將涵蓋<strong>架構設計 HA</strong>:___HTMLTAG_302__HTMLTAG_303__HTMLTAG_304___需求收集___HTMLTAG_305__HTMLTAG_306___架構設計文件___MLTAG_MLTAG_305__HTMLTAG_306___架構設計文件___MLTAGML_MLTAG184____TAG_309__HTMLTAG_310___成本估算___HTMLTAG_311__HTMLTAG_312___設計審核流程___HTMLTAG_313__HTMLTAG_314___