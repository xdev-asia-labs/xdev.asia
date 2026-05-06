---
id: 019c9617-fbba-71f4-a5c3-d75c9087a96e
title: 第 28 課：建築設計 HA
slug: bai-28-thiet-ke-kien-truc-ha
description: 收集HA生產系統的需求、設計架構設計文件、容量規劃和估算成本。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 28
section_title: 第 6 部分：製作與案例研究
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9221" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9221)"/>

  <!-- Decorations -->
  <g>
    <circle cx="742" cy="136" r="30" fill="#f87171" opacity="0.11"/>
    <circle cx="884" cy="258" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="1026" cy="120" r="22" fill="#f87171" opacity="0.13"/>
    <circle cx="668" cy="242" r="18" fill="#f87171" opacity="0.09"/>
    <circle cx="810" cy="104" r="14" fill="#f87171" opacity="0.05"/>
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
    <line x1="600" y1="216" x2="1100" y2="296" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="246" x2="1050" y2="316" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1042.8467875173176,200.5 1042.8467875173176,231.5 1016,247 989.1532124826824,231.5 989.1532124826824,200.5 1016,185" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 28 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 28 課：建築設計 HA</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：製作與製作案例研究</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標___HTMLTAG_66__HTMLTAG_67___學完本課程後，您將：___HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___收集 HA叢集設計的需求___HTMLTAG_71__HTMLTAG_72___建立全面的架構文件___HTMLTAG_73__HTMLTAG_74___執行容量規劃計算___HTMLTAG_75__HTMLTAG_76___估算基礎設施成本___HTMLTAG_77__HTMLTAG_HTMLTAG_76___估算基礎設施成本___HTMLTAG_77__HTMLTAG_178___要求收集___HTMLTAG_82__HTMLTAG_83___1.1。業務需求範本___HTMLTAG_84__CODEBLOCK_0__HTMLTAG_85___1.2。技術要求___HTMLTAG_86__CODEBLOCK_1__HTMLTAG_87___2。架構設計文件___HTMLTAG_88__HTMLTAG_89___2.1。高階架構___HTMLTAG_90__CODEBLOCK_2__HTMLTAG_91___2.2。網路設計___HTMLTAG_92__CODEBLOCK_3__HTMLTAG_93___2.3。資料流程圖___HTMLTAG_94__CODEBLOCK_4__HTMLTAG_95___3。容量規劃___HTMLTAG_96__HTMLTAG_97___3.1。計算能力___HTMLTAG_98__CODEBLOCK_5__HTMLTAG_99___3.2。記憶體容量___HTMLTAG_100__CODEBLOCK_6__HTMLTAG_101___3.3。儲存容量___HTMLTAG_102__CODEBLOCK_7__HTMLTAG_103___3.4。 IOPS 計算___HTMLTAG_104__CODEBLOCK_8__HTMLTAG_105___4。成本估算___HTMLTAG_106__HTMLTAG_107___4.1。 AWS 基礎設施成本___HTMLTAG_108__CODEBLOCK_9__HTMLTAG_109___4.2。成本最佳化機會___HTMLTAG_110__CODEBLOCK_10__HTMLTAG_111___5。設計審核流程___HTMLTAG_112__HTMLTAG_113___5.1。設計審核清單___HTMLTAG_114__CODEBLOCK_11__HTMLTAG_115___5.2。檢討會議議程___HTMLTAG_116__CODEBLOCK_12__HTMLTAG_117___6。風險評估___HTMLTAG_118__HTMLTAG_119___6.1。風險矩陣</h3>
<!--kg-card-begin: html-->
___HTMLTAG_122__HTMLTAG_123__HTMLTAG_124__HTMLTAG_125____風險___HTMLTAG_126__HTMLTAG_127____可能性___HTMLTAG_128__HTMLTAG_129____影響_</th>__ _HTMLTAG_131___嚴重性___HTMLTAG_132__HTMLTAG_133___緩解___HTMLTAG_134__HTMLTAG_135__HTMLTAG_136__HTMLTAG_137__HTMLTAG_138__HTMLTAG_139___1TAG_137__HTMLTAG_138__HTMLTAG_ML1391414U4141____ __中___HTMLTAG_142__HTMLTAG_143___低___HTMLTAG_144__HTMLTAG_145___中___HTMLTAG_146__HTMLTAG_147___使用Patroni進行自動故障轉移___HTMLTAG_148__HTMLTAG_149__HTMLTAG1515_MLTAGML_15_ __資料中心中斷___HTMLTAG_152__HTMLTAG_153___低___HTMLTAG_154__HTMLTAG_155___高___HTMLTAG_156__HTMLTAG_157___中____HTMLTAG_158__HTMLTAGG159___多可用站部署AG_161__HTMLTAG_162__HTMLTAG_163___資料損壞___HTMLTAG_164__HTMLTAG_165___低___HTMLTAG_166__HTMLTAG_167___高___HTMLTAG_168__HTMLTAG_169____HTMLUUU​​D170備份，啟用校驗和___HTMLTAG_172__HTMLTAG_173__HTMLTAG_174__HTMLTAG_175___容量耗盡___HTMLTAG_176__HTMLTAG_177___中___H TMLTAG_178__HTMLTAG_179___中___HTMLTAG_180__HTMLTAG_181___中___HTMLTAG_182__HTMLTAG_183___監控+自動縮放___HTMLTA G_184__HTMLTAG_185__HTMLTAG_186__HTMLTAG_187___安全違規___HTMLTAG_188__HTMLTAG_189___低___HTMLTAG_190__HTMLTA G_191___嚴重____HTMLTAG_192__HTMLTAG_193___高___HTMLTAG_194__HTMLTAG_195___加密、網路分段、審核日誌____HTMLTAG_196__HTMLTAG_197__HTMLTAG_198__HTMLTAG_199___成本超支___HTMLTAG_200__HTMLTAG_201___中___HTMLTAG_202__HTMLTAG_203___中___HTMLTAG_204__HTMLTAG_205___中___ LTAG_206__HTMLTAG_207___預算提醒，費用最佳化___HTMLTAG_208__HTMLTAG_209__HTMLTAG_210__HTMLTAG_211___人員流動___HTMLTAG_212__HTMLTAG_213___高___HTMLTAG_214__H TMLTAG_215___中___HTMLTAG_216__HTMLTAG_217___中___HTMLTAG_218__HTMLTAG_219___文檔，交叉訓練___HTMLTAG_220__HTMLTAG_221__HTMLTAG_222__HTMLTAG_223___供應商鎖定____HTMLTAG_224__HTMLTAG_225___低___HTMLTAG_226__HTMLTAG_227___中___HTMLTAG_228__HTMLTAG_229___低___HTMLTAG_230__HTMLTAG_231___使用開源工具（Patroni___與 RDS）</td></tr>___HTMLTAG_234__HTMLTAG_235___
<!--kg-card-end: html-->
<h3 id="62-mitigation-strategies">6.2。緩解策略___HTMLTAG_238__CODEBLOCK_13__HTMLTAG_239___7。實驗室練習___HTMLTAG_240__HTMLTAG_241___實驗室1：需求收集___HTMLTAG_242__HTMLTAG_243__HTMLTAG_244___任務</strong>：___HTMLTAG_246__HTMLTAG_247__HTMLTAG_248___________]業務需求___HTMLTAG_251__HTMLTAG_252___定義技術需求____HTMLTAG_253__HTMLTAG_254___確定約束___HTMLTAG_255__HTMLTAG_256____建立需求文件___HTMLTAG_257__HTMLTAG_2588 2：架構設計___HTMLTAG_260__HTMLTAG_261__HTMLTAG_262___任務</strong>：____HTMLTAG_264__HTMLTAG_265__HTMLTAG_266___建立高階架構圖___HTMLTAG_2672HTMLTAG10266_拓撲___HTMLTAG_269__HTMLTAG_270___文件資料流程___HTMLTAG_271__HTMLTAG_272___定義安全控制___HTMLTAG_273__HTMLTAG_274___提交給團隊審核___HTMLTAG_275__HTMLTAG_2767HT 3：容量規劃___HTMLTAG_278__HTMLTAG_279__HTMLTAG_280___任務_</strong>：____HTMLTAG_282__HTMLTAG_283__HTMLTAG_284__ __計算計算需求___HTMLTAG_285__HTMLTAG_286___估計儲存需求___HTMLTAG_287__HTMLTAG_288___確定IOPS要求___HTMLTAG_289__HTMLTAG_290___3年增長計畫___HTMLTAG_291__HTMLTAG_292___文件假設____HTMLTAG_293__HTMLTAG_294__HTMLTAG_295___實驗4：成本估計___HTMLTAG_296__HTMLTAG_297__HTMLTAG_298___任務_</strong>：____HTMLTAG_300__HTMLTAG_301__HTMLTAG_302___AWS/GCP/Azure上的基礎設施價格___HTMLTAG_303__HTMLTAG_304___比較託管與自託管選項___HTMLTAG_305__HTMLTAG_306___確定成本機會___HTMLTAG_307__ HTMLTAG_308___建立預算提案___HTMLTAG_309__HTMLTAG_310___提交給管理階層___HTMLTAG_311__HTMLTAG_312__HTMLTAG_313___8。摘要___HTMLTAG_314__HTMLTAG_315___設計原則____HTMLTAG_316__CODEBLOCK_14__HTMLTAG_317___主要交付成果____HTMLTAG_318__CODEBLOCK_15__HTMLTAG_319____後續步驟____HTTAGMLG132150_______條將涵蓋<strong>部署生產就緒叢集</strong>：___HTMLTAG_324__HTMLTAG_325__HTMLTAG_326___完整的端對端部署指南___HTMLTAG_327 __HTMLTAG_328____生產部署清單___HTMLTAG_329__HTMLTAG_330___操作運作手冊___HTMLTAG_331__HTMLTAG_332___知識轉移</li><li>最終評估___HTMLTAG_335__HTMLTAG_336___