---
id: 019e1a00-aa01-7001-c001-k8sha000901
title: 第 36 課：RBAC 和 POD 安全標準
slug: bai-36-rbac-va-pod-security-standards
description: 詳細的 Kubernetes RBAC、Pod 安全標準 (PSS)、ServiceAccount 最佳實務、最低權限存取、審核日誌記錄和叢集安全強化。
duration_minutes: 150
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai36-security-hardening.png
sort_order: 36
section_title: 第 9 部分：安全強化
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-103" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-103)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1025" cy="65" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="950" cy="250" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="875" cy="175" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="800" cy="100" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="725" cy="285" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="75" x2="1100" y2="155" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="105" x2="1050" y2="175" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="950.9807621135332,110 950.9807621135332,140 925,155 899.0192378864668,140 899.0192378864668,110.00000000000001 925,95" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 36 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 36 課：RBAC 與 RBAC POD 安全標準</tspan>
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
<li>✅ Kubernetes RBAC（角色、叢集角色、綁定）</li>
<li>✅ Pod 安全標準（特權、基線、受限）</li>
<li>✅ ServiceAccount 最佳實務__HTMLTAG_73___
<li>✅ 審核日誌記錄配置</li>
<li>✅ 安全強化清單</li>
</ul>

<hr>

<h2 id="phan-1-rbac">第 1 部分：KUBERNETES RBAC</h2>

___程式碼區塊_0___

___程式碼區塊_1___

___程式碼區塊_2___

<hr>

<h2 id="phan-2-serviceaccount">第 2 部分：服務帳戶最佳實務__HTMLTAG_84___

___程式碼區塊_3___

<hr>

<h2 id="phan-3-pss">第 3 部分：POD 安全標準</h2>

<!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_91__HTMLTAG_92___等級___HTMLTAG_93__HTMLTAG_94___說明___HTMLTAG_95__HTMLTAG_96___用例___HTMLTAG_97__HTMLTAG_98___
</thead>
<tbody>
___HTMLTAG_101__HTMLTAG_102___特權___HTMLTAG_103__HTMLTAG_104___無限制___HTMLTAG_105__HTMLTAG_106___系統層級（CNI、儲存驅動程式）___HTMLTAG_107__HTMLTAG_108___
___HTMLTAG_109__HTMLTAG_110___基線____HTMLTAG_111__HTMLTAG_112___防止已知的升級___HTMLTAG_113__HTMLTAG_114___大多數工作負載的預設值____HTMLTAG_115__HTMLTAG_116___
___HTMLTAG_117__HTMLTAG_118___受限___HTMLTAG_119__HTMLTAG_120___強化，所有最佳實踐___HTMLTAG_121__HTMLTAG_122___敏感工作負載____HTMLTAG_123__HTMLTAG_124___
</tbody>
</table>
<!--kg-card-end: html-->

___程式碼區塊_4___

___程式碼區塊_5___

<hr>

<h2 id="phan-4-audit">第 4 部分：審核日誌</h2>

___程式碼區塊_6___

___程式碼區塊_7___

<hr>

<h2 id="phan-5-hardening">第 5 部分：安全強化檢查表</h2><!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_137__HTMLTAG_138___#___HTMLTAG_139__HTMLTAG_140___項目___HTMLTAG_141__HTMLTAG_142___狀態___HTMLTAG_143__HTMLTAG_144___
</thead>
<tbody>
___HTMLTAG_147__HTMLTAG_148___1___HTMLTAG_149__HTMLTAG_150___已啟用 RBAC，應用程式沒有叢集管理___HTMLTAG_151__HTMLTAG_152_________________HTMLTAG_153__HTMLTAG_154___
___HTMLTAG_155__HTMLTAG_156___2___HTMLTAG_157__HTMLTAG_158___強制實施 Pod 安全標準___HTMLTAG_159__HTMLTAG_160_________________HTMLTAG_161__HTMLTAG_162___
___HTMLTAG_163__HTMLTAG_164___3___HTMLTAG_165__HTMLTAG_166___ServiceAccount 令牌自動安裝已停用___HTMLTAG_167__HTMLTAG_168_______________HTMLTAG_169__HTMLTAG_170___
___HTMLTAG_171__HTMLTAG_172___4___HTMLTAG_173__HTMLTAG_174___網路策略拒絕所有預設___HTMLTAG_175__HTMLTAG_176_____________HTMLTAG_177__HTMLTAG_178___
___HTMLTAG_179__HTMLTAG_180___5___HTMLTAG_181__HTMLTAG_182___已啟用審核日誌記錄___HTMLTAG_183__HTMLTAG_184_______________________HTMLTAG_185__HTMLTAG_186___
___HTMLTAG_187__HTMLTAG_188___6___HTMLTAG_189__HTMLTAG_190___etcd 靜態加密___HTMLTAG_191__HTMLTAG_192_______________________HTMLTAG_193__HTMLTAG_194___
___HTMLTAG_195__HTMLTAG_196___7___HTMLTAG_197__HTMLTAG_198___僅限專用網路上的 API 伺服器___HTMLTAG_199__HTMLTAG_200________________HTMLTAG_201__HTMLTAG_202___
___HTMLTAG_203__HTMLTAG_204___8___HTMLTAG_205__HTMLTAG_206___Kubelet 驗證/授權已啟用___HTMLTAG_207__HTMLTAG_208_______________________HTMLTAG_209__HTMLTAG_210___
___HTMLTAG_211__HTMLTAG_212____9___HTMLTAG_213__HTMLTAG_214___已簽署/掃描的容器映像___HTMLTAG_215__HTMLTAG_216_______________________HTMLTAG_217__HTMLTAG_218___
___HTMLTAG_219__HTMLTAG_220___10____HTMLTAG_221__HTMLTAG_222___Vault 中的秘密（不是普通的 K8s 秘密）___HTMLTAG_223__HTMLTAG_224_______________MLTAG_225__21TAG_225__1TAG_225__241
</tbody>
</table>
<!--kg-card-end: html-->

<hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_234__HTMLTAG_235___RBAC</strong>：最小權限 — 僅授予所需的動詞/資源</li>
___HTMLTAG_238__HTMLTAG_239___ServiceAccount</strong>：每個工作負載，停用令牌自動掛載</li>
___HTMLTAG_242__HTMLTAG_243___PSS</strong>：對生產命名空間強制實施限制</li>
___HTMLTAG_246__HTMLTAG_247___審核</strong>：記錄秘密存取、RBAC 變更、pod 執行</li>
___HTMLTAG_250__HTMLTAG_251___SecurityContext</strong>：runAsNonRoot、dropAll 功能、readOnlyRootFilesystem</li>
</ol>

<hr>

<h2 id="bai-tap">🎯 練習</h2>

<h3 id="bt1">練習 1：RBAC 設定__HTMLTAG_259___
<ul>
<li>建立具有不同權限的開發人員/操作角色</li>
<li>使用 kubectl --as=developer</li> 測試訪問
<li>啟用審核日誌記錄，驗證已記錄秘密存取__HTMLTAG_266___
</ul>

<h3 id="bt2">練習 2：Pod 安全性</h3>
<ul>
<li>具有受限 PSS 的標籤命名空間</li>
<li>部署特權 Pod → 驗證拒絕</li>
<li>修復 Pod 以符合限制等級</li>
</ul>

<hr><h2 id="bai-tiep-theo">📚 下一篇文章</h2>
<p>在 <strong>第 37 課：Kyverno 策略引擎</strong>中，我們將為叢集實作策略即程式碼。 </p>