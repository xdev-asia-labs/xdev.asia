---
id: 019e1a00-aa01-7001-c001-k8sha001205
title: 第 50 課：CAPSTONE 專案 — 電子商務微服務平台
slug: bai-50-capstone-project-ecommerce-microservices
description: Capstone 專案總結：在本地 K8s HA 上設計、部署和營運完整的電子商務微服務系統，應用先前 49 篇文章中的所有知識。
duration_minutes: 480
is_free: true
video_url: null
featured_image: uploads/2026/04/k8s-ha-bai50-capstone-ecommerce.png
sort_order: 50
section_title: 第 12 部分：生產營運和頂點項目
course:
  id: 019e1a00-aa01-7001-c001-k8sha000001
  title: 使用 Kubernetes HA 在本地部署微服務
  slug: deploy-microservices-on-premises-voi-kubernetes-ha
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7400" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7400)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1070" cy="280" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1040" cy="190" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1010" cy="100" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="980" cy="270" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="180" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="60" x2="1100" y2="140" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="90" x2="1050" y2="160" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1040.3108891324553,192.5 1040.3108891324553,227.5 1010,245 979.6891108675446,227.5 979.6891108675446,192.5 1010,175" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 50 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 50 課：頂峰專案 — 電子商務</tspan>
      <tspan x="60" dy="42">微服務平台</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">使用 Kubernetes HA 在本地部署微服務</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 12 部分：生產營運與生產營運頂點專案</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="muc-tieu-bai-hoc">🎯 課程目標__HTMLTAG_68___
<ul>
<li>✅ 電商微服務架構設計__HTMLTAG_71___
<li>✅ 在本地 K8s HA 上部署整個平台</li>
<li>✅ 應用前 49 篇文章中的所有最佳實務__HTMLTAG_75___
<li>✅ 生產就緒：安全性、可觀察性、災難復原</li>
<li>✅ 效能測試和上線</li>
</ul>

<hr>

<h2 id="phan-1-architecture">第 1 部分：系統架構</h2>

___程式碼區塊_0___

<hr>

<h2 id="phan-2-services">第 2 部分：微服務設計</h2><!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_90__HTMLTAG_91___服務___HTMLTAG_92__HTMLTAG_93___語言___HTMLTAG_94__HTMLTAG_95___資料庫___HTMLTAG_96__HTMLTAG_97___非同步事件___HTMLTAG_98__HTMLTAG_99______
</thead>
<tbody>
___HTMLTAG_102__HTMLTAG_103___用戶服務____HTMLTAG_104__HTMLTAG_105___轉到___HTMLTAG_106__HTMLTAG_107___PostgreSQL（用戶資料庫）___HTMLTAG_108__HTMLTAGML_109___.1010110107_____FMLTAG109____F1010107_____F107_4107_F105_7_F107_7_U​​U5_____​​UTU​​D5_​​1105_____​​1015_4105_7_​​UMLTAG109____​​11010107____]
___HTMLTAG_112__HTMLTAG_113___產品服務___HTMLTAG_114__HTMLTAG_115___前往___HTMLTAG_116__HTMLTAG_117___PostgreSQL（產品資料庫）___HTMLTAG_118__HTMLTAG_119___ostgreSQL（產品資料庫）___HTMLTAG_118__HTMLTAG_119___MLTAG11911502013000707070700707070707070707070707070707070707070707070707070707070707_UpMLTAG_119.
___HTMLTAG_122__HTMLTAG_123___庫存服務____HTMLTAG_124__HTMLTAG_125___執行___HTMLTAG_126__HTMLTAG_127___Post greSQL（庫存資料庫）___HTMLTAG_128__HTMLTAG_129___stock.reserved，stock.released___HTMLTAG_130__HTMLTAG_131___
___HTMLTAG_132__HTMLTAG_133___訂單服務___HTMLTAG_134__HTMLTAG_135___開始___HTMLTAG_136__HTMLTAG_137___PostgreSQL（訂單資料庫）___HTMLTAG_138__HTMLTAG_139___0.com
___HTMLTAG_142__HTMLTAG_143___付款服務____HTMLTAG_144__HTMLTAG_145___開始___HTMLTAG_146__HTMLTAG_147___PostgreSQL（付款資料庫）___HTMLTAG_148__HTMLTAG_149___ostgreSQL（付款資料庫。
___HTMLTAG_152__HTMLTAG_153___通知服務____HTMLTAG_154__HTMLTAG_155___Node.js___HTMLTAG_156__HTMLTAG_157___Redis（隊列）___HTMLTAG_158__HTMLTAG_159___訂單/Redis（隊列）___HTMLTAG_158__HTMLTAG_159___訂單/16116161____
</tbody>
</table>
<!--kg-card-end: html-->

___程式碼區塊_1___

<hr>

<h2 id="phan-3-deployment">第 3 部分：部署步驟</h2>

___程式碼區塊_2___

___程式碼區塊_3___

<hr>

<h2 id="phan-4-testing">第 4 部分：測試與驗證</h2>

___程式碼區塊_4___

<hr>

<h2 id="phan-5-checklist">第 5 部分：頂點評估清單</h2><!--kg-card-begin: html-->
<table>
<thead>
___HTMLTAG_177__HTMLTAG_178___#___HTMLTAG_179__HTMLTAG_180___要求____HTMLTAG_181__HTMLTAG_182___積分____HTMLTAG_183__HTMLTAG_184_____182___積分____HTMLTAG_183__HTMLTAG_184_____182___積分____HTMLTAG_183__HTMLTA_____184_____182G_188183_________狀態___
</thead>
<tbody>
___HTMLTAG_189__HTMLTAG_190___1___HTMLTAG_191__HTMLTAG_192___K8s HA 叢集（3 個主節點、4 個工作節點）___HTMLTAG_193__HTMLTAG_194___10___HTMLTAGML_1958HT
___HTMLTAG_199__HTMLTAG_200___2___HTMLTAG_201__HTMLTAG_202___Rook-Ceph 分散式儲存___HTMLTAG_203__HTMLTAG_204___10___HTMLTAG_205__HTMLTAG_206_HTMLTAG1020715_2020_UMLTAG_206_HT
___HTMLTAG_209__HTMLTAG_210___3___HTMLTAG_211__HTMLTAG_212___PostgreSQL 高可用性 + 自動備援___HTMLTAG_213__HTMLTAG_214___10___HTMLTAG_215__HTMLTAG_216187HT
___HTMLTAG_219__HTMLTAG_220___4___HTMLTAG_221__HTMLTAG_222___訊息佇列 (RabbitMQ/Kafka)___HTMLTAG_223__HTMLTAG_224___5___HTMLTAG_225__HTMLTAG_22627_726_28_2828_HT
___HTMLTAG_229__HTMLTAG_230___5___HTMLTAG_231__HTMLTAG_232___Redis 快取層___HTMLTAG_233__HTMLTAG_234___5___HTMLTAG_235__HTMLTAG_236___MLTAG_23______HTMLTAG_235__HTMLTAG_236__HT
___HTMLTAG_239__HTMLTAG_240___6___HTMLTAG_241__HTMLTAG_242___Istio 服務格 + mTLS___HTMLTAG_243__HTMLTAG_244___10___HTMLTAG_245__HTMLTAG1_246_HT747_48__HTMLTAG1_248_HT747_UUU​​PTA_248__
___HTMLTAG_249__HTMLTAG_250___7___HTMLTAG_251__HTMLTAG_252___ArgoCD GitOps 部署___HTMLTAG_253__HTMLTAG_254___10___HTMLTAG_255__HTMLTAG_256_HTMLTAMLTAG___257_7]
___HTMLTAG_259__HTMLTAG_260____8___HTMLTAG_261__HTMLTAG_262___CI/CD 管道（建構 + 掃描 + 簽章）___HTMLTAG_263__HTMLTAG_264___5___HTMLTAG_265__1TAGML_26682G1_265_____
___HTMLTAG_269__HTMLTAG_270____9___HTMLTAG_271__HTMLTAG_272___Prometheus + Grafana 監控___HTMLTAG_273__HTMLTAG_274____5___HTMLTAG_275__HTMLTAGMLTA_276_HT787872__
___HTMLTAG_279__HTMLTAG_280___10____HTMLTAG_281__HTMLTAG_282___Loki 集中日誌記錄___HTMLTAG_283__HTMLTAG_284___5___HTMLTAG_285__HTMLTAG_286________________HTMLGML_28682___
___HTMLTAG_289__HTMLTAG_290___11___HTMLTAG_291__HTMLTAG_292___Tempo 分散式追蹤___HTMLTAG_293__HTMLTAG_294___5___HTMLTAG_295__HTMLTAG_296________________TAG_296________________TAGMLG
___HTMLTAG_299__HTMLTAG_300___12___HTMLTAG_301__HTMLTAG_302___SLO/錯誤預算警報___HTMLTAG_303__HTMLTAG_304___5___HTMLTAG_305__HTMLTAG_306____MLGMLGML_306___
___HTMLTAG_309__HTMLTAG_310___13___HTMLTAG_311__HTMLTAG_312___安全性（RBAC + Kyverno + Falco）___HTMLTAG_313__HTMLTAG_314___5___HTMLTAG_315__1TAG_315__1314___5_____
___HTMLTAG_319__HTMLTAG_320___14___HTMLTAG_321__HTMLTAG_322___Velero 備援 + DR 測試___HTMLTAG_323__HTMLTAG_324___5___HTMLTAG_325__HTMLTAGMLTAG_326_HTMLTAGMLTAG_____HTMLTAGMLTAG126_HTMLTAG
___HTMLTAG_329__HTMLTAG_330___15___HTMLTAG_331__HTMLTAG_332___負載測試通過（500訂單/分鐘）___HTMLTAG_333__HTMLTAG_334___5___HTMLTA__G_335__HTMLTAGML_33638_74_77_
___HTMLTAG_339__HTMLTAG_340__HTMLTAG_341__HTMLTAG_342__HTMLTAG_343___總計___HTMLTAG_344__HTMLTAG_345__HTMLTAG_346__HTMLTAG_347___100</strong></td><td></td></tr>
</tbody>
</table>
<!--kg-card-end: html--><hr>

<h2 id="key-takeaways">💡 重點</h2>
<ol>
___HTMLTAG_360__HTMLTAG_361___Capstone</strong>：將所有 49 篇文章整合到一個實用系統中</li>
___HTMLTAG_364__HTMLTAG_365___GitOps</strong>：整個基礎架構 + 應用程式即程式碼</li>
___HTMLTAG_368__HTMLTAG_369___生產就緒</strong>：安全性、可觀察性、可靠性、DR</li>
___HTMLTAG_372__HTMLTAG_373___測試</strong>：整合+載入+混沌+安全驗證</li>
___HTMLTAG_376__HTMLTAG_377___操作</strong>：SLO 監控、事件回應、容量規劃</li>
</ol>

<hr>

<h2 id="ket-thuc">🎓 課程結束</h2>

<p>恭喜您完成「使用 Kubernetes HA 在本地部署微服務」課程的 <strong>50 課__HTMLTAG_386___！ </p>

<p>您已掌握：</p>
<ul>
<li>☑️ 基礎設施規劃與 Linux 系統調優__HTMLTAG_392___
<li>☑️ Kubernetes HA 叢集設定與操作</li>
<li>☑️ 分散式儲存 (Rook-Ceph)</li>
<li>☑️ 資料庫高可用性（PostgreSQL、Redis、RabbitMQ、Kafka）</li>
<li>☑️ 服務網格 (Istio) 和 API 閘道</li>
<li>☑️ GitOps (ArgoCD) & CI/CD & 秘密管理</li>
<li>☑️ 完整的可觀察性堆疊（Prometheus、Loki、Tempo、Grafana）</li>
<li>☑️ 安全強化（RBAC、Kyverno、Falco、Harbor）</li>
<li>☑️ 部署模式與自動擴充</li>
<li>☑️ 災難復原與混沌工程</li>
<li>☑️ 生產作業與故障排除__HTMLTAG_412___
</ul>

___HTMLTAG_414__HTMLTAG_415___繼續學習，繼續建置！ 🚀___HTMLTAG_416__HTMLTAG_417___