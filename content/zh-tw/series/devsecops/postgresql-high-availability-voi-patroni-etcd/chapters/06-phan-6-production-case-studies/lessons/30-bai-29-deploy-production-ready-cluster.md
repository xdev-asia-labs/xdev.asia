---
id: 019c9617-fbbd-7170-9eb6-c3c63e67172b
title: 第 29 課：部署生產就緒集群
slug: bai-29-deploy-production-ready-cluster
description: 從頭開始完全部署叢集、建立文件、操作手冊、知識轉移和課程結束評估。
duration_minutes: 185
is_free: true
video_url: null
sort_order: 29
section_title: 第 6 部分：製作與案例研究
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8705" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8705)"/>

  <!-- Decorations -->
  <g>
    <circle cx="739" cy="127" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="878" cy="246" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="1017" cy="105" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="656" cy="224" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="795" cy="83" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="97" x2="1100" y2="177" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="127" x2="1050" y2="197" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="974.712812921102,131 974.712812921102,163 947,179 919.287187078898,163 919.287187078898,131 947,115" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 29 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 29 課：部署生產就緒叢集</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：製作與製作案例研究</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標___HTMLTAG_66__HTMLTAG_67___學完本課後，您將：___HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___部署完整的生產就緒型 PostgreSQL HA叢集____HTMLTAG_71__HTMLTAG_72___實作本課程中學到的所有最佳實務___HTMLTAG_73__HTMLTAG_74___建立全面的可操作性文件___HTMLTAG_75_ _HTMLTAG_76___執行最終驗證和移交___HTMLTAG_77__HTMLTAG_78___完成頂點評估___HTMLTAG_79__HTMLTAG_80__HTMLTAG_81___1。部署前核對錶___HTMLTAG_82__HTMLTAG_83___1.1。基礎設施準備___HTMLTAG_84__CODEBLOCK_1__HTMLTAG_85___2。逐步部署___HTMLTAG_86__HTMLTAG_87___2.1。第 1 階段：基本系統設定（第 1 天）___HTMLTAG_88__CODEBLOCK_2__HTMLTAG_89___2.2。第 2 階段：etcd 叢集（第 1 天）___HTMLTAG_90__CODEBLOCK_3__HTMLTAG_91___2.3。第 3 階段：PostgreSQL + Patroni（第 2 天）___HTMLTAG_92__CODEBLOCK_4__HTMLTAG_93___2.4。第 4 階段：連接池（第 2 天）___HTMLTAG_94__CODEBLOCK_5__HTMLTAG_95___2.5。第 5 階段：負載平衡（第 3 天）___HTMLTAG_96__CODEBLOCK_6__HTMLTAG_97___2.6。第 6 階段：監控（第 3 天）___HTMLTAG_98__CODEBLOCK_7__HTMLTAG_99___2.7。第 7 階段：備份設定（第 4 天）___HTMLTAG_100__CODEBLOCK_8__HTMLTAG_101___3。部署後驗證___HTMLTAG_102__HTMLTAG_103___3.1。功能測試___HTMLTAG_104__CODEBLOCK_9__HTMLTAG_105___3.2。效能測試___HTMLTAG_106__CODEBLOCK_10__HTMLTAG_107___4。操作文檔___HTMLTAG_108__HTMLTAG_109___4.1。 Runbook 結構___HTMLTAG_110__CODEBLOCK_11__HTMLTAG_111___5。知識轉移___HTMLTAG_112__HTMLTAG_113___5.1。訓練清單___HTMLTAG_114__CODEBLOCK_12__HTMLTAG_115___5.2。移交會議議程___HTMLTAG_116__CODEBLOCK_13__HTMLTAG_117___6。生產上線清單___HTMLTAG_118__CODEBLOCK_14__HTMLTAG_119___7。最終評估___HTMLTAG_120__HTMLTAG_121___7.1。頂點項目要求___HTMLTAG_122__CODEBLOCK_15__HTMLTAG_123___7.2。評估標準</h3>
<!--kg-card-begin: html-->
___HTMLTAG_126__HTMLTAG_127__HTMLTAG_128__HTMLTAG_129___標準____HTMLTAG_130__HTMLTAG_131____優(9-10)___HT MLTAG_132__HTMLTAG_133___良好(7-8)___HTMLTAG_134__HTMLTAG_135___滿意(5-6)___HTMLTAG_136__HTMLTAG_137___需要改進(0-4)____HTMLTAG_138__HTMLTAG_139__HTMLTAG_140__HTMLTAG_141__HTMLTAG_142__HTMLTAG_143__HTMLTAG_144__ __架構____HTMLTAG_145__HTMLTAG_146__HTMLTAG_147___所有元件均已部署、設計良好，可擴充___HTMLTAG_148__HTMLTAG_149___存在大多數群組件，小問題___HTMLTAG_150__HTMLTAG_151___基本設置，缺少某些組件___HTMLTAG_152__HTMLTAG_153___不完整或非功能性___HTMLTAG_154__H TMLTAG_155__HTMLTAG_156__HTMLTAG_157__HTMLTAG_158____HA___HTMLTAG_159__HTMLTAG_160__HTMLTAG_161___RTO < 30 秒，RPO = 0，無停機____HTMLTAG_162__HTMLTAG_163___RTO < 60 秒，最小 RPO，短暫停機___HTMLTAG_164__HTMLTAG_165___RTO > 60 秒，可能會遺失一些資料___HTMLTAG_166607 RTO/RPO___HTMLTAG_168__HTMLTAG_169__HTMLTAG_170__HTMLTAG_171__HTMLTAG_172___備份____HTMLTAG_17 3__HTMLTAG_174__HTMLTAG_175___自動化、經過測試、已記錄___HTMLTAG_176__HTMLTAG_177___自動化、經過測試___HTMLTAG_178__HTMLTAG_179___手動過程，未經測試___HTMLTAG_180__HTMLTAG_181___未實施___HTMLTAG_182__HTMLTAG_183__HTMLTAG_184__HTMLTAG_185__HTMLTAG_186____監控__ __HTMLTAG_187__HTMLTAG_188__HTMLTAG_189___全面、自動化警報____HTMLTAG_190__HTMLTAG_191___基本監控，一些警報___HTMLTAG_192__HTMLTAG_193___僅限手動檢查___HTML TAG_194__HTMLTAG_195___否監控____HTMLTAG_196__HTMLTAG_197__HTMLTAG_198__HTMLTAG_199__HTMLTAG_200____安全_____HTMLTAG_201__HTMLTAG_202__ TAG_203___實作的所有最佳實務____HTMLTAG_204__HTMLTAG_205___大多數安全措施___HTMLTAG_206__HTMLTAG_207___基本安全性____HTMLTAG_208__HTMLTAG_209___不安全的設定____ HTMLTAG_210__HTMLTAG_211__HTMLTAG_212__HTMLTAG_213__HTMLTAG_214____文件____HTMLTAG_215__HTMLTAG_216__HTMLTAG_217___全面、清楚、可操作____HTMLTAG _218__HTMLTAG_219___良好的文檔，次要差距___HTMLTAG_220__HTMLTAG_221___基本文檔，一些缺失資訊___HTMLTAG_222__HTMLTAG_223___文檔品質較差或缺失___HTMLTAG_224__HTMLTAG _225__HTMLTAG_226__HTMLTAG_227__HTMLTAG_228____測試____HTMLTAG_229__HTMLTAG_230__HTMLTAG_231___所有測試通過，徹底___HTMLTAG_232__HTMLTAG_233大多數檢定透過___HTMLTAG_234__HTMLTAG_235___部分檢定透過___HTMLTAG_236__HTMLTAG_237___測驗不完整___HTMLTAG_238__HTMLTAG_239__HTMLTAG_240__HTMLTAG_241___
<!--kg-card-end: html-->
<h2 id="8-t%E1%BB%95ng-k%E1%BA%BFt">8。摘要___HTMLTAG_244__HTMLTAG_245___主要成就___HTMLTAG_246__CODEBLOCK_16__HTMLTAG_247___後續步驟____HTMLTAG_248__CODEBL OCK_17__HTMLTAG_249___資源_</h3>___CODEBLOCK_18__HTMLTAG_251___最終字____HTMLTAG_252__CODEBLOCK_19___