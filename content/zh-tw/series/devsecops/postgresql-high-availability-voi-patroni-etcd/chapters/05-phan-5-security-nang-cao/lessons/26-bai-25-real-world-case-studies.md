---
id: 019c9617-fbae-719f-bd83-5b4c737bb570
title: 第 25 課：現實世界案例研究
slug: bai-25-real-world-case-studies
description: 分析實際的生產架構、擴展策略、成本優化以及從實際專案中學到的經驗教訓。
duration_minutes: 130
is_free: true
video_url: null
sort_order: 25
section_title: 第 5 部分：安全性與增強功能
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9241" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9241)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1029" cy="257" r="22" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="958" cy="246" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="887" cy="235" r="36" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="816" cy="224" r="13" fill="#818cf8" opacity="0.13"/>
    <circle cx="745" cy="213" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="167" x2="1100" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="197" x2="1050" y2="267" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1003.3730669589464,146 1003.3730669589464,188 967,209 930.6269330410536,188 930.6269330410536,146 967,125" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 25 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 25 課：現實世界案例研究__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：安全性與安全性進階</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標___HTMLTAG_66__HTMLTAG_67___完成本課程後，您將：____HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___從生產 PostgreSQL HA部署中學習____HTMLTAG_71__HTMLTAG_72___了解高流量的擴充策略____HTMLTAG_73__HTMLTAG_74___分析成本最佳化技術___HTMLTAG_75__HTML TAG_76___研究事件事後分析____HTMLTAG_77__HTMLTAG_78___應用真實情境的最佳實務____HTMLTAG_79__HTMLTAG_80__HTMLTAG_81___1。案例研究1：電子商務平台（高交易量）___HTMLTAG_82__HTMLTAG_83___1.1。公司簡介___HTMLTAG_84__CODEBLOCK_0__HTMLTAG_85___1.2。架構___HTMLTAG_86__CODEBLOCK_1__HTMLTAG_87___1.3。配置亮點___HTMLTAG_88__CODEBLOCK_2__HTMLTAG_89___1.4。挑戰與解決方案___HTMLTAG_90__HTMLTAG_91___挑戰 1：連線耗盡___HTMLTAG_92__CODEBLOCK_3__HTMLTAG_93___挑戰 2：限時搶購期間的複製延遲___HTMLTAG_94__CODEBLOCK_4__HTMLTAG_95___ 挑戰賽I/O瓶頸___HTMLTAG_96__CODEBLOCK_5__HTMLTAG_97___1.5。關鍵指標___HTMLTAG_98__CODEBLOCK_6__HTMLTAG_99___2。案例研究 2：SaaS 應用程式（多租戶）___HTMLTAG_100__HTMLTAG_101___2.1。公司簡介___HTMLTAG_102__CODEBLOCK_7__HTMLTAG_103___2.2。架構___HTMLTAG_104__CODEBLOCK_8__HTMLTAG_105___2.3。多租戶實作___HTMLTAG_106__CODEBLOCK_9__HTMLTAG_107___2.4。挑戰與解決方案___HTMLTAG_108__HTMLTAG_109___挑戰 1：對租戶影響較大___HTMLTAG_110__CODEBLOCK_10___<h4 id="challenge-2-backuprestore-for-specific-tenant">挑戰 2：針對特定租戶的備份/恢復___HTMLTAG_112__CODEBLOCK_110HT 挑戰：跨13 701372__CODEBLOC的架構遷移租用戶___HTMLTAG_114__CODEBLOCK_12__HTMLTAG_115___2.5。關鍵指標___HTMLTAG_116__CODEBLOCK_13__HTMLTAG_117___3。案例研究 3：金融服務（合規性較強）___HTMLTAG_118__HTMLTAG_119___3.1。公司簡介___HTMLTAG_120__CODEBLOCK_14__HTMLTAG_121___3.2.架構___HTMLTAG_122__CODEBLOCK_15__HTMLTAG_123___3.3。合規性配置___HTMLTAG_124__CODEBLOCK_16__HTMLTAG_125___3.4。挑戰與解決方案___HTMLTAG_126__HTMLTAG_127___挑戰 1：7 年備份保留___HTMLTAG_128__CODEBLOCK_17__HTMLTAG_129___挑戰 2：對資料遺失零容忍 (RPO = 0)___HTMLTAG_130__CODEBLOCK_ML 3：災難復原練習___HTMLTAG_132__CODEBLOCK_19__HTMLTAG_133___3.5。關鍵指標___HTMLTAG_134__CODEBLOCK_20__HTMLTAG_135___4。案例研究 4：社群媒體平台（閱讀量大）___HTMLTAG_136__HTMLTAG_137___4.1。公司簡介___HTMLTAG_138__CODEBLOCK_21__HTMLTAG_139___4.2。架構___HTMLTAG_140__CODEBLOCK_22__HTMLTAG_141___4.3。閱讀擴充策略___HTMLTAG_142__CODEBLOCK_23__HTMLTAG_143___4.4。挑戰與解決方案___HTMLTAG_144__HTMLTAG_145___挑戰 1：用戶可見的複製延遲___HTMLTAG_146__CODEBLOCK_24__HTMLTAG_147___挑戰 2：熱分區（名人貼文）___HTMLTAG_148DCODEBLOC_251個讀取副本___HTMLTAG_150__CODEBLOCK_26__HTMLTAG_151___4.5。關鍵指標____HTMLTAG_152__CODEBLOCK_27__HTMLTAG_153___5。經驗教訓（跨案例分析）___HTMLTAG_154__HTMLTAG_155___5.1。常見模式___HTMLTAG_156__CODEBLOCK_28__HTMLTAG_157___5。2. 成本最佳化技術___HTMLTAG_158__CODEBLOCK_29__HTMLTAG_159___5.3。何時不使用 Patroni___HTMLTAG_160__CODEBLOCK_30__HTMLTAG_161___6。實驗室練習___HTMLTAG_162__HTMLTAG_163___實驗室1：計算容量規劃___HTMLTAG_164__HTMLTAG_165__HTMLTAG_166___任務</strong>：___HTMLTAG_168__HTMLTAG_169__HTMLTAG_170______估計您使用的查詢次數。 HTMLTAG_173__HTMLTAG_174___實例大小（CPU、RAM、儲存）___HTMLTAG_175__HTMLTAG_176___估計副本計數的複製延遲____HTMLTAG_177__HTMLTAG_178___計算總基礎架構成本___MLTAG_1791]GMLTAG_18110_______ 2：設計多租用戶架構___HTMLTAG_182__HTMLTAG_183__HTMLTAG_184___任務</strong>:___HTMLTAG_186__HTMLTAG_187__HTMLTAG_188___選擇租賃模型（共享與專用）___MLTAG_189190___4安全性___HTMLTAG_191__HTMLTAG_192___為每個租用戶建立備援策略___HTMLTAG_193__HTMLTAG_194___設計遷移過程___HTMLTAG_195__HTMLTAG_196___測試雜訊鄰居緩解___HTML]G_197__HTMLTAG198__HT 3：實作唯讀副本擴充___HTMLTAG_200__HTMLTAG_201__HTMLTAG_202___任務</strong>：___HTMLTAG_204__HTMLTAG_205__HTMLTAG_206___將唯讀副本新增至叢集_______MLTAG_205__HTMLTAG_206___將唯讀副本新增至叢集________現讀/寫路由___HTMLTAG_209__HTMLTAG_210___測量複製滯後___HTMLTAG_211__HTMLTAG_212___使用副本測試故障轉移____HTMLTAG_213__HTMLTAG_214____監控查詢分佈_____MLTAG_215110GML 4：成本最佳化分析___HTMLTAG_218__HTMLTAG_219__HTMLTAG_220___任務</strong>：___HTMLTAG_222__HTMLTAG_223__HTMLTAG_224___審核目前基礎設施成本___HTMLTAGMLTA1_25HT16化機會___HTMLTAG_227__HTMLTAG_228___實作連線池___HTMLTAG_229__HTMLTAG_230___大小適當的實例___HTMLTAG_231__HTMLTAG_232___計算節省的成本___HTMLTAG_233__HTMLTAGMLTA234HT757。摘要___HTMLTAG_236__HTMLTAG_237___架構模式摘要</h3>
<!--kg-card-begin: html-->
___HTMLTAG_240__HTMLTAG_241__HTMLTAG_242__HTMLTAG_243___模式___HTMLTAG_244__HTMLTAG_245___最佳對於___HTMLTAG_246__HTMLTAG_247___複雜性___HTMLTAG_248__HTMLTAG_249___成本___HTMLTAG_250__HTMLTAG_251__HTMLTAG_252__HTMLTAG_253__HTMLTAG_254__HTMLTAG_255___單一領導者+副本___HTMLTAG_256__HTMLTAG_257___讀取繁重___HTMLTAG_258__HTMLTAG_259___低___HTMLTAG_260__HTMLTAG_261___低_ __HTMLTAG_262__HTMLTAG_263__HTMLTAG_264__HTMLTAG_265___多重資料中心___HTMLTAG_266__HTMLTAG_267___地理分佈___HTMLTAG_268__HTMLTAG_269_________HTML TAG_270__HTMLTAG_271___高___HTMLTAG_272__HTMLTAG_273__HTMLTAG_274__HTMLTAG_275___分片___HTMLTAG_276__HTMLTAG_277____水平縮放___HTMLTAG_278__ HTMLTAG_279___非常高___HTMLTAG_280__HTMLTAG_281___中___HTMLTAG_282__HTMLTAG_283__HTMLTAG_284__HTMLTAG_285___多租戶___HTMLTAG_286__HTMLTAG_2 87___SaaS應用____HTMLTAG_288__HTMLTAG_289____中____HTMLTAG_290__HTMLTAG_291____低___HTMLTAG_292__HTMLTAG_293__HTMLTAG_294__HTMLTAG_295___
<!--kg-card-end: html-->
<h3 id="key-takeaways">要點____HTMLTAG_298__CODEBLOCK_31__HTMLTAG_299___後續步驟___HTMLTAG_300__HTMLTAG_301___第 26課程將介紹<strong>自動化Ansible</strong>:___HTMLTAG_304__HTMLTAG_305__HTMLTAG_306___用於 Patroni 部署的 Ansible手冊___HTMLTAG_307__HTMLTAG_308___配置管理自動化____HTMLTAG_309__HTMLTAG_310___自動化測試框架___HTMLTAG_311__HTMLTAG_312___資料庫的 CI/CD 整合變更___HTMLTAG_313__HTMLTAG_312___資料庫的 CI/CD 整合變更___HTMLTAG_313__HTMLTAG_312___