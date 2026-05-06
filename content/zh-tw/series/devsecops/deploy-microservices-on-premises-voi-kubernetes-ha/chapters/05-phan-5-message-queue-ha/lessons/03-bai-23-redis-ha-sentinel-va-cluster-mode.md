---
id: 019e1a00-aa01-7001-c001-k8sha000503
title: 第 23 課：Redis HA — 哨兵與群集模式
slug: bai-23-redis-ha-sentinel-va-cluster-mode
description: 在 Kubernetes 上部署 Redis HA 有兩種模式：Sentinel（主副本）和 Cluster（分片）、快取策略、持久化、監控和最佳實踐。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 23
section_title: 第 5 部分：訊息佇列 HA（RabbitMQ、Kafka、Redis）
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2982" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2982)"/>

  <!-- Decorations -->
  <g>
    <circle cx="920" cy="230" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="740" cy="210" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1060" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="880" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="150" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="210" x2="1100" y2="290" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="240" x2="1050" y2="310" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="981.650635094611,147.5 981.650635094611,172.5 960,185 938.349364905389,172.5 938.349364905389,147.5 960,135" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 23 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 23 課：REDIS HA — 哨兵與叢集</tspan>
      <tspan x="60" dy="42">模式</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：訊息佇列 HA（RabbitMQ、Kafka、Redis）</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<ul>
<li>✅ 了解 Redis Sentinel 與叢集模式 — 何時使用</li>
<li>✅ 在 Kubernetes 上部署 Redis Sentinel HA</li>
<li>✅ 部署Redis叢集模式（分片）</li>
<li>✅ 持久化設定：RDB 與 AOF</li>
<li>✅ 快取策略與最佳實務</li>
<li>✅ 使用 Prometheus 監控 Redis</li>
</ul>

<hr>

<h2 id="phan-1-kien-truc">第 1 部分：REDIS HA — SENTINEL 與 CLUSTER</h2>

___程式碼區塊_0___<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_89__HTMLTAG_90___功能___HTMLTAG_91__HTMLTAG_92___哨兵模式___HTMLTAG_93__HTMLTAG_94___叢集模式___HTMLTAG_95__HTMLTAG_96___
</thead>
<tbody>
___HTMLTAG_99__HTMLTAG_100___資料分佈___HTMLTAG_101__HTMLTAG_102___Master上的所有資料___HTMLTAG_103__HTMLTAG_104___分片（雜湊槽）___HTMLTAG_105__HTMLTAG_106___
___HTMLTAG_107__HTMLTAG_108___最大資料集大小___HTMLTAG_109__HTMLTAG_110___單節點RAM____HTMLTAG_111__HTMLTAG_112___所有主控RAM的總和____HTMLTAG_113__HTMLTAG_114___
___HTMLTAG_115__HTMLTAG_116___讀取擴充____HTMLTAG_117__HTMLTAG_118___讀取副本____HTMLTAG_119__HTMLTAG_120___每個分片的讀取副本____HTMLTAG_121__HTMLTAG_122___
___HTMLTAG_123__HTMLTAG_124___寫入縮放____HTMLTAG_125__HTMLTAG_126___僅限單一母版___HTMLTAG_127__HTMLTAG_128___多個母版（水平）___HTMLTAG_129__HTMLTAG_130______
___HTMLTAG_131__HTMLTAG_132___故障轉移___HTMLTAG_133__HTMLTAG_134___Sentinel 法定投票___HTMLTAG_135__HTMLTAG_136___內建（Ggossip 協定）___HTMLTAG_137__HTMLTA_138______
___HTMLTAG_139__HTMLTAG_140___多鍵操作___HTMLTAG_141__HTMLTAG_142___支援___HTMLTAG_143__HTMLTAG_144___僅相同的雜湊槽 ({tag})___HTMLTAG_1455__HTMLTAG_146___
___HTMLTAG_147__HTMLTAG_148___複雜性___HTMLTAG_149__HTMLTAG_150___簡單___HTMLTAG_151__HTMLTAG_152___更複雜___HTMLTAG_153__HTMLTAG_154______
___HTMLTAG_155__HTMLTAG_156___最適合___HTMLTAG_157__HTMLTAG_158___快取、會話（< 32GB）____HTMLTAG_159__HTMLTAG_160___大資料集，高寫入吞吐量__HTMLTAG_161__HTMLTAG_162___
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-2-sentinel">第 2 部分：部署 REDIS SENTINEL HA</h2>

<h3 id="21-helm-install">2.1。使用 Bitnami Helm Chart 安裝</h3>
___程式碼區塊_1___

<h3 id="22-custom-values">2.2。自訂值檔案（詳細資訊）</h3>
___程式碼區塊_2___

___程式碼區塊_3___

<hr>

<h2 id="phan-3-cluster-mode">第 3 部分：部署 REDIS 叢集模式</h2>

___程式碼區塊_4___

___程式碼區塊_5___

<hr>

<h2 id="phan-4-persistence">第 4 部分：持久性 — RDB 與 AOF</h2><!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_182__HTMLTAG_183___功能___HTMLTAG_184__HTMLTAG_185___RDB（快照）___HTMLTAG_186__HTMLTAG_187___AOF（僅附加文件）___HTMLTAG_188__HTMLTAG_189___AOF（僅附加文件）___HTMLTAG_188__HTMLTAG_189___
</thead>
<tbody>
___HTMLTAG_194__HTMLTAG_195___機制___HTMLTAG_196__HTMLTAG_197___時間點快照___HTMLTAG_198__HTMLTAG_199___記錄每個寫入操作___HTMLTAG_200__HTMLTAG_201___兩者20MLGMLG1_20_20_201___20UML
___HTMLTAG_204__HTMLTAG_205___資料遺失____HTMLTAG_206__HTMLTAG_207___直到最後一個快照___HTMLTAG_208__HTMLTAG_209___~1秒（每秒appendfsync）___HTMLTAG_210__1UHT_ML01112201021_210__12GML
___HTMLTAG_214__HTMLTAG_215___恢復速度___HTMLTAG_216__HTMLTAG_217___快速（載入二進位檔案）___HTMLTAG_218__HTMLTAG_219___先使用較慢（重播作業）___HTMLTAG_220__HTMLTA12311212320___
___HTMLTAG_224__HTMLTAG_225___磁碟 I/O___HTMLTAG_226__HTMLTAG_227___週期性突發（分叉）___HTMLTAG_228__HTMLTAG_229___連續（小寫入）___HTMLTAG_230__HTMLTAG131413230_____
___HTMLTAG_234__HTMLTAG_235___檔案大小___HTMLTAG_236__HTMLTAG_237___緊湊____HTMLTAG_238__HTMLTAG_239___較大（重寫幫助）___HTMLTAG_240__HTMLTAG_241___兩個檔案（重寫幫助）___HTMLTAG_240__HTMLTAG_241___兩個檔案_ML
___HTMLTAG_244__HTMLTAG_245___最適合___HTMLTAG_246__HTMLTAG_247___快取（可接受的損失）___HTMLTAG_248__HTMLTAG_249___會話儲存（最小損失）___HTMLTAG_250_HTMLTAG_249___會話儲存（最小損失）___HTMLTAG_250_HTMLTAG_251____MLG1251______HT
</tbody>
</table>
<!--kg-card-end: html-->

___程式碼區塊_6___

<hr>

<h2 id="phan-5-caching">第 5 部分：快取策略</h2>

___程式碼區塊_7___

___程式碼區塊_8___

<hr>

<h2 id="phan-6-app-connection">第 6 部分：應用程式連線</h2>

___程式碼區塊_9___

<hr>

<h2 id="phan-7-monitoring">第 7 部分：監控</h2>

___程式碼區塊_10___

___程式碼區塊_11___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_270__HTMLTAG_271___Sentinel</strong>：簡單 HA，單主，適合 < 32GB datasets</li>
___HTMLTAG_274__HTMLTAG_275___叢集</strong>：水平縮放，多主，適用於大型資料集</li>
___HTMLTAG_278__HTMLTAG_279___持久性</strong>：用於生產的 RDB + AOF，平衡耐用性與效能</li>
___HTMLTAG_282__HTMLTAG_283___maxmemory-policy</strong>：最受歡迎的用於快取的 allkeys-lru</li>
___HTMLTAG_286__HTMLTAG_287___快取旁置</strong>：建議模式，寫入時無效</li>
___HTMLTAG_290__HTMLTAG_291___監視器</strong>：快取命中率 > 90%、記憶體使用情況、驅逐</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：Redis 哨兵故障轉移</h3>
<ul>
<li>部署 Redis Sentinel 3 節點</li>
<li>向master寫入數據，殺死master pod</li>
<li>驗證 Sentinel 提升副本，資料完好__HTMLTAG_306___
</ul><h3 id="bt2">練習 2：基準</h3>
<ul>
<li>執行 redis 基準測試：SET/GET 100,000 個鍵</li>
<li>比較延遲：有/沒有持久性__HTMLTAG_314___
<li>監控記憶體碎片率</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第24課：Istio服務網格架構</strong>中，我們將學習服務網格並部署Istio進行微服務通訊。 </p>