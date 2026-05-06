---
id: 019e1a00-aa01-7001-c001-k8sha001204
title: 第 49 課：故障排除指南
slug: bai-49-troubleshooting-guide
description: K8s 生產的系統故障排除：pod 問題、網路、儲存、效能、控制平面、常見錯誤和診斷工具。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 49
section_title: 第 12 部分：生產營運和頂點項目
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-54" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-54)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1000" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="90" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="70" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="150" x2="1100" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="180" x2="1050" y2="250" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="921.650635094611,87.5 921.650635094611,112.5 900,125 878.349364905389,112.5 878.349364905389,87.5 900,75" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 49 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 49 課：故障排除指南</tspan>
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
<li>✅ 系統故障排除方法</li>
<li>✅ Pod 故障排除（CrashLoopBackOff、待處理、OOM）</li>
<li>✅ 網路問題（DNS、服務發現、連線）</li>
<li>✅ 儲存問題（PV/PVC、安裝錯誤）</li>
<li>✅ 控制平面故障排除__HTMLTAG_77___
<li>✅ 基本診斷工具</li>
</ul>

<hr>

<h2 id="phan-1-methodology">第 1 部分：故障排除方法</h2>

___程式碼區塊_0___

<hr>

<h2 id="phan-2-pod">第 2 部分：POD 故障排除</h2>

___程式碼區塊_1___

___程式碼區塊_2___

<hr>

<h2 id="phan-3-network">第 3 部分：網路故障排除</h2>

___程式碼區塊_3___

<hr>

<h2 id="phan-4-storage">第 4 部分：儲存故障排除</h2>

___程式碼區塊_4___

<hr>

<h2 id="phan-5-control-plane">第 5 部分：控制平面故障排除</h2>

___程式碼區塊_5___

<hr>

<h2 id="phan-6-common-errors">第 6 部分：常見錯誤快速參考</h2><!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_102__HTMLTAG_103___錯誤___HTMLTAG_104__HTMLTAG_105___常見原因___HTMLTAG_106__HTMLTAG_107___快速修復___HTMLTAG_108__HTMLTAG_109___
</thead>
<tbody>
___HTMLTAG_112__HTMLTAG_113___ImagePullBackOff___HTMLTAG_114__HTMLTAG_115___圖片名稱/標籤錯誤，無拉取機密____HTMLTAG_116__HTMLTAG_117___檢查圖片，並加入機密____118HT
___HTMLTAG_120__HTMLTAG_121___CrashLoopBackOff___HTMLTAG_122__HTMLTAG_123___應用程式崩潰，缺少環境/設定___HTMLTAG_124__HTMLTAG_125___檢查日誌--上一個____HTMLTAGML_126HT__HTMLTAG_125___
___HTMLTAG_128__HTMLTAG_129___待處理___HTMLTAG_130__HTMLTAG_131___資源不足，沒有節點匹配___HTMLTAG_132__HTMLTAG_133___檢查事件，節點容量____HTMLTAG_134__HTMLTAG_135___
___HTMLTAG_136__HTMLTAG_137___OOMKilled___HTMLTAG_138__HTMLTAG_139___超出記憶體限制___HTMLTAG_140__HTMLTAG_141___增加限製或修復洩漏____HTMLTAG_1421HTMLTAG_143____
___HTMLTAG_144__HTMLTAG_145___CreateContainerConfigError___HTMLTAG_146__HTMLTAG_147___缺少 ConfigMap/Secret___HTMLTAG_148__HTMLTAG_149___檢查引用的資源是否存在______MLTAG_148__HTMLTAG_149___檢查引用的資源是否存在______MLTAG1501515015____
___HTMLTAG_152__HTMLTAG_153___已驅逐____HTMLTAG_154__HTMLTAG_155___節點磁碟/記憶體壓力___HTMLTAG_156__HTMLTAG_157___清理節點，增加資源____HTMLTAG_158__HTMLTAG_159___
___HTMLTAG_160__HTMLTAG_161___後退重新啟動___HTMLTAG_162__HTMLTAG_163___就緒偵測失敗___HTMLTAG_164__HTMLTAG_165___檢查偵測設定、連接埠、路徑____HTMLTAG_166__HTMLTAG_167___
___HTMLTAG_168__HTMLTAG_169___連線被拒絕___HTMLTAG_170__HTMLTAG_171___服務未準備好，連接埠錯誤___HTMLTAG_172__HTMLTAG_173___檢查端點、服務連接埠____HTMLTAG_174__HTMLTAG_175______
___HTMLTAG_176__HTMLTAG_177___DNS 解析失敗___HTMLTAG_178__HTMLTAG_179___CoreDNS 關閉，服務名稱錯誤____HTMLTAG_180__HTMLTAG_181___檢查 coredns pod，FQMLTAG_180__HTMLTAG_181___檢查 coredns pod，FQC____MLTAGML_183_ML
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_191__HTMLTAG_192___系統方法</strong>：辨識→隔離→診斷→修復→驗證</li>
___HTMLTAG_195__HTMLTAG_196___kubectl 描述</strong>：解決任何 K8s 問題的第一個工具</li>
___HTMLTAG_199__HTMLTAG_200___事件</strong>：kubectl 取得事件 --sort-by=.lastTimestamp</li>
___HTMLTAG_203__HTMLTAG_204___調試容器</strong>：用於即時診斷的臨時容器</li>
___HTMLTAG_207__HTMLTAG_208___逐層</strong>：應用→容器→Pod→服務→節點→叢集</li>
___HTMLTAG_211__HTMLTAG_212___文件</strong>：每個修復都會成為操作手冊條目</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：故障排除挑戰</h3>
<ul>
<li>隊友創建了 5 個損壞的部署（映像錯誤、缺少配置映射等）</li>
<li>僅使用 kubectl 診斷並修復每個問題__HTMLTAG_225___
<li>記錄每個的診斷步驟</li>
</ul><h3 id="bt2">練習 2：診斷工具包</h3>
<ul>
<li>使用 netshoot、pg_isready、redis-cli 建立一個「偵錯工具箱」pod</li>
<li>練習 DNS、網路、儲存故障排除</li>
<li>建構個人故障排除備忘單</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在<strong>第 50 課：Capstone 專案 — 電子商務平台</strong>中，我們將建置和部署整個端對端微服務系統。 </p>