---
id: 019e1a00-aa01-7001-c001-k8sha001203
title: 第 48 課：效能測試和最佳化
slug: bai-48-performance-testing-va-optimization
description: 使用 k6/Locust 進行負載測試、效能分析、瓶頸識別、K8s 叢集調整、應用程式最佳化和基準報告。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 48
section_title: 第 12 部分：生產營運和頂點項目
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6665" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6665)"/>

  <!-- Decorations -->
  <g>
    <circle cx="687" cy="251" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="774" cy="238" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="861" cy="225" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="948" cy="212" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="1035" cy="199" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="201" x2="1100" y2="281" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="231" x2="1050" y2="301" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1032.1769145362398,183 1032.1769145362398,219 1001,237 969.8230854637602,219 969.8230854637602,183 1001,165" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — 第 48 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 48 課：效能測驗與效能測驗最佳化</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 12 部分：生產營運與生產頂點專案</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_66___
<ul>
<li>✅ 使用 k6 (Grafana k6) 進行負載測試</li>
<li>✅ 效能設定檔類型（負載、壓力、尖峰、浸泡）</li>
<li>✅ 瓶頸辨識方法</li>
<li>✅ K8s 叢集調校（核心、containerd、kubelet）</li>
<li>✅ 應用級最佳化</li>
</ul>

<hr>

<h2 id="phan-1-k6-setup">第 1 部分：使用 K6 進行負載測試</h2>

___程式碼區塊_0___

___程式碼區塊_1___

___程式碼區塊_2___

<hr>

<h2 id="phan-2-test-types">第 2 部分：效能測試類型</h2><!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_88__HTMLTAG_89___类型____HTMLTAG_90__HTMLTAG_91____目标___HTMLTAG_92__HTMLTAG_93___模式____HTMLTAG_94__HTMLTAG_95___持续时间___HTMLTAG_96__HTMLTAG_97___
</thead>
<tbody>
___HTMLTAG_100__HTMLTAG_101___負載測試___HTMLTAG_102__HTMLTAG_103___在預期負載下驗證 SLO___HTMLTAG_104__HTMLTAG_105___逐漸達到目標____HTMLTAG_106__HTMLTAG_105___
___HTMLTAG_110__HTMLTAG_111___壓力測試___HTMLTAG_112__HTMLTAG_113___找到斷點____HTMLTAG_114__HTMLTAG_115___增加至失敗____HTMLTAG_116__HTMLTAG_117___3+___增加至失敗____HT158________
___HTMLTAG_120__HTMLTAG_121___峰值測試___HTMLTAG_122__HTMLTAG_123___測試突發流量___HTMLTAG_124__HTMLTAG_125___瞬間跳至峰值____HTMLTAG_126__HTMLTAG_125___瞬間跳至峰值___101012112____
___HTMLTAG_130__HTMLTAG_131___浸泡測試___HTMLTAG_132__HTMLTAG_133___查找記憶體洩漏、效能下降___HTMLTAG_134__HTMLTAG_135___持續中等負載____HTMLTAG_136__HTMLTAG_1374-MLTAG1374-13136__
___HTMLTAG_140__HTMLTAG_141___斷點測試____HTMLTAG_142__HTMLTAG_143___找出最大吞吐量____HTMLTAG_144__HTMLTAG_145___逐步增加直到出現錯誤___HTMLTAG_146__HTMLTAGML_147變數變數
</tbody>
</table>
<!--kg-card-end: html-->

___程式碼區塊_3___

<hr>

<h2 id="phan-3-bottleneck">第 3 部分：瓶頸辨識</h2>

___程式碼區塊_4___

<hr>

<h2 id="phan-4-tuning">第 4 部分：叢集和應用程式調整</h2>

___程式碼區塊_5___

___程式碼區塊_6___

<hr>

<h2 id="phan-5-reporting">第 5 部分：基準報告</h2>

<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_165__HTMLTAG_166___指標____HTMLTAG_167__HTMLTAG_168___目標___HTMLTAG_169__HTMLTAG_170___實際___HTMLTAG_171__HTMLTAG_172___狀態___HTMLTAG_173174174___狀態_____
</thead>
<tbody>
___HTMLTAG_177__HTMLTAG_178___最大吞吐量____HTMLTAG_179__HTMLTAG_180___1000 請求/秒___HTMLTAG_181__HTMLTAG_182___1250 請求/秒</td>__MLTAG透過___HTMLTAG_185__HTMLTAG_186___
___HTMLTAG_187__HTMLTAG_188___P95 延遲___HTMLTAG_189__HTMLTAG_190__HTMLTAG_191__HTMLTAG_192___320ms___HTMLTAG_193__HTMLTAG_194_____196_HT
___HTMLTAG_197__HTMLTAG_198___P99 延遲___HTMLTAG_199__HTMLTAG_200__HTMLTAG_201__HTMLTAG_202___780ms___HTMLTAG_203__HTMLTAG_204___20_____HTML
___HTMLTAG_207__HTMLTAG_208___錯誤率___HTMLTAG_209__HTMLTAG_210__HTMLTAG_211__HTMLTAG_212___0.02%___HTMLTAG_213__HTMLTAG_214___✅1214___ML
___HTMLTAG_217__HTMLTAG_218___CPU 處於峰值___HTMLTAG_219__HTMLTAG_220__HTMLTAG_221__HTMLTAG_222___65%___HTMLTAG_223__HTMLTAG_224_____
___HTMLTAG_227__HTMLTAG_228___記憶體處於峰值___HTMLTAG_229__HTMLTAG_230__HTMLTAG_231__HTMLTAG_232___72%___HTMLTAG_233__HTMLTAG_234✅✆____HTMLTAGMLTAG13234___
</tbody>
</table>
<!--kg-card-end: html-->

<hr><h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_244__HTMLTAG_245___k6</strong>：現代負載測試工具，可編寫腳本，Grafana 整合</li>
___HTMLTAG_248__HTMLTAG_249___測試類型</strong>：負荷、應力、尖峰、浸泡 — 每個都有不同的目的</li>
___HTMLTAG_252__HTMLTAG_253___瓶頸分析</strong>：逐層、追蹤引導</li>
___HTMLTAG_256__HTMLTAG_257___正確調整</strong>：VPA 建議 → 減少浪費</li>
___HTMLTAG_260__HTMLTAG_261___核心調整</strong>：增加連線限制、檔案描述子</li>
___HTMLTAG_264__HTMLTAG_265___報告</strong>：文檔基線，最佳化後比較</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：負荷測驗</h3>
<ul>
<li>為 API 端點編寫 k6 腳本__HTMLTAG_276___
<li>運行負載測試、壓力測試、峰值測試__HTMLTAG_278___
<li>在測試期間監控 Grafana 儀表板__HTMLTAG_280___
</ul>

<h3 id="bt2">練習 2：最佳化</h3>
<ul>
<li>從測試結果中辨識前 3 個瓶頸</li>
<li>應用最佳化（快取、調整大小、調整）</li>
<li>重新測試並比較改進</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第49課：故障排除指南</strong>中，我們將學習K8s生產的系統故障排除。 </p>