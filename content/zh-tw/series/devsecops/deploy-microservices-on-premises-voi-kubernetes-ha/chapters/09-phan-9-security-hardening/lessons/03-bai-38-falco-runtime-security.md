---
id: 019e1a00-aa01-7001-c001-k8sha000903
title: 第 38 課：FALCO 運行時安全
slug: bai-38-falco-runtime-security
description: 部署 Falco 進行執行時間威脅偵測、自訂規則、系統呼叫監控、容器漂移偵測和事件回應自動化。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 38
section_title: 第 9 部分：安全強化
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1414" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1414)"/>

  <!-- Decorations -->
  <g>
    <circle cx="674" cy="132" r="22" fill="#f472b6" opacity="0.07"/>
    <circle cx="748" cy="166" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="822" cy="200" r="36" fill="#f472b6" opacity="0.11"/>
    <circle cx="896" cy="234" r="28" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="268" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="152" x2="1100" y2="232" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="182" x2="1050" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="975.3826859021799,138.5 975.3826859021799,165.5 952,179 928.6173140978201,165.5 928.6173140978201,138.5 952,125" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 38 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 38 課：FALCO 運行時安全</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 9 部分：安全強化</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_66___
<ul>
<li>✅ 運行時安全概念（左移與運行時）</li>
<li>✅ Falco 架構（eBPF 驅動程式、規則引擎）</li>
<li>✅ 在 K8s 上部署 Falco</li>
<li>✅ 自訂安全規則__HTMLTAG_75___
<li>✅ Falcosidekick 事件路由__HTMLTAG_77___
<li>✅ 事件回應自動化</li>
</ul>

<hr>

<h2 id="phan-1-architecture">第 1 部分：FALCO 架構</h2>

___程式碼區塊_0___

___程式碼區塊_1___

___程式碼區塊_2___

<hr>

<h2 id="phan-2-builtin-rules">第 2 部分：FALCO 內建規則</h2><!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_90__HTMLTAG_91___規則___HTMLTAG_92__HTMLTAG_93___偵測___HTMLTAG_94__HTMLTAG_95___優先權___HTMLTAG_96__HTMLTAG_97___
</thead>
<tbody>
___HTMLTAG_100__HTMLTAG_101___容器中的終端 shell___HTMLTAG_102__HTMLTAG_103___kubectl exec -it___HTMLTAG_104__HTMLTAG_105___注意___HTMLTAG_106__HTMLTAG_107___
___HTMLTAG_108__HTMLTAG_109___在/etc下面寫入___HTMLTAG_110__HTMLTAG_111___設定檔修改____HTMLTAG_112__HTMLTAG_113___錯誤___HTMLTAG_114__HTMLTAG_115___
___HTMLTAG_116__HTMLTAG_117___讀取敏感檔____HTMLTAG_118__HTMLTAG_119___/etc/shadow、/etc/passwdwdHTMLTAG_120__HTMLTAG_121___警告____HTMLTAG____HTMLTAG_120__HTMLTAG_121___警告____HTMLTAG____HTMLTAG_120__HTMLTAG_121___警告____HTMLTAG_12221.
___HTMLTAG_124__HTMLTAG_125___啟動特權容器___HTMLTAG_126__HTMLTAG_127___特權標誌___HTMLTAG_128__HTMLTAG_129___嚴重___HTMLTAG_130__HTMLTAG_131___
___HTMLTAG_132__HTMLTAG_133___修改二進位目錄___HTMLTAG_134__HTMLTAG_135___寫入/usr/bin、/sbin____HTMLTAG_136__HTMLTAG_137___錯誤</td>__TAG_138__137G_138_____
___HTMLTAG_140__HTMLTAG_141___出站連接___HTMLTAG_142__HTMLTAG_143___意外網路呼叫___HTMLTAG_144__HTMLTAG_145___通知___HTMLTAG_146__HTMLTAG_147___
___HTMLTAG_148__HTMLTAG_149___加密貨幣挖礦偵測___HTMLTAG_150__HTMLTAG_151___已知挖礦流程___HTMLTAG_152__HTMLTAG_153___嚴重____HTMLTAG_154__HTMLTAG_155___
___HTMLTAG_156__HTMLTAG_157___容器漂移____HTMLTAG_158__HTMLTAG_159___新的可執行檔不在映像中____HTMLTAG_160__HTMLTAG_161____錯誤___HTMLTAG_162__HTMLTAG_163___
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="phan-3-custom-rules">第 3 部分：自訂 FALCO 規則</h2>

___程式碼區塊_3___

<hr>

<h2 id="phan-4-response">第 4 部分：事件回應自動化</h2>

___程式碼區塊_4___

___程式碼區塊_5___

<hr>

<h2 id="phan-5-falco-grafana">第 5 部分：FALCO 監控</h2>

___程式碼區塊_6___

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_180__HTMLTAG_181___Falco</strong>：透過 eBPF 系統呼叫監控進行執行時間威脅偵測</li>
___HTMLTAG_184__HTMLTAG_185___內建規則</strong>：容器中的 Shell、檔案寫入、加密挖掘</li>
___HTMLTAG_188__HTMLTAG_189___自訂規則</strong>：條件+輸出格式、優先權</li>
___HTMLTAG_192__HTMLTAG_193___Falcosidekick</strong>：將事件路由到 Slack、Loki、PagerDuty</li>
___HTMLTAG_196__HTMLTAG_197___事件回應</strong>：自動隔離受感染的 Pod</li>
___HTMLTAG_200__HTMLTAG_201___漂移偵測</strong>：套件管理器執行 = 容器漂移</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：Falco 設定__HTMLTAG_209___
<ul>
<li>使用 eBPF 驅動程式部署 Falco__HTMLTAG_212___
<li>觸發內建規則（執行、檔案寫入）</li>
<li>在 Slack 和 Loki 中查看警報</li>
</ul><h3 id="bt2">練習 2：自訂規則__HTMLTAG_219___
<ul>
<li>編寫規則以偵測來自資料庫 Pod 的出站連線</li>
<li>編寫規則來偵測套件管理器執行__HTMLTAG_224___
<li>配置自動回應：隔離標記的 Pod</li>
</ul>

<hr>

<h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 39 課：Harbor 註冊表和鏡像安全</strong> 中，我們將透過漏洞掃描設定私有容器註冊表。 </p>