---
id: 019c9617-fba4-73b9-bb9a-c345301dc226
title: 第 22 課：Patroni 與 Kubernetes
slug: bai-22-patroni-voi-kubernetes
description: 使用 Patroni 運算子、StatefulSets、持久捲和 Helm 圖表在 Kubernetes 上部署 Patroni。
duration_minutes: 155
is_free: true
video_url: null
sort_order: 22
section_title: 第 5 部分：安全性與增強功能
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9992" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9992)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1057" cy="281" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1014" cy="278" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="971" cy="275" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="928" cy="272" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="269" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="211" x2="1100" y2="291" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="241" x2="1050" y2="311" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="933.5166604983954,98 933.5166604983954,124 911,137 888.4833395016046,124 888.4833395016046,98 911,85" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — 第 22 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 22 課：Patroni 與 Kubernetes__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：安全性與安全性進階</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標___HTMLTAG_66__HTMLTAG_67___完成本課程後，您將：____HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___在 Kubernetes 上部署 Patroni 叢集____HTMLTAG_71__1TAG_72 PersistentVolumes___HTMLTAG_73__HTMLTAG_74___使用 Patroni Kubernetes運算子___HTMLTAG_75__HTMLTAG_76___實作環境類別和磁碟區管理___HTMLTAG_77__HTMLTAG_78___在K8s_MLTAV1_ML_MLTAV1701U4170UUUU​​A_MLTAVU​​DMLTA_MLTAG170707070707_UUUML_MLTAD。 Patroni 的 Kubernetes 架構___HTMLTAG_82__HTMLTAG_83___1.1。組件___HTMLTAG_84__CODEBLOCK_0__HTMLTAG_85___1.2。 K8s 的優點___HTMLTAG_86__HTMLTAG_87__HTMLTAG_88__HTMLTAG_89___不需要單獨的 etcd</strong>&nbsp;- 使用 Kubernetes API 進行 DCS___HTMLTAG_91__HTMLTAG_92__4MLTAG_U&m&U&K_______ML_92__4____]92_____ pod放置____HTMLTAG_95__HTMLTAG_96__HTMLTAG_97___儲存管理</strong>&nbsp;- PVC 自動設定____HTMLTAG_99__HTMLTAG_100__HTMLTAG_101___服務發現___HTMLTAGsp_102&nb&nbsp;服務端點___HTMLTAG_103__HTMLTAG_104__HTMLTAG_105___滾動更新</strong>-本機K8s功能___HTMLTAG_107__HTMLT AG_108__HTMLTAG_109___資源限制</strong>-CPU/記憶體有保證___HTMLTAG_111__HTMLTAG_112__HTMLTAG_113___2。先修條件___HTMLTAG_114__HTMLTAG_115___2.1。 Kubernetes 叢集___HTMLTAG_116__CODEBLOCK_1__HTMLTAG_117___2.2。 kubectl 設定___HTMLTAG_118__CODEBLOCK_2__HTMLTAG_119___2.3。頭盔（選購）___HTMLTAG_120__CODEBLOCK_3__HTMLTAG_121___3。使用 StatefulSet 手動部署___HTMLTAG_122__HTMLTAG_123___3.1。建立命名空間____HTMLTAG_124__CODEBLOCK_4__CODEBLOCK_5__HTMLTAG_125___3.2。設定映射___HTMLTAG_126__CODEBLOCK_6__CODEBLOCK_7__HTMLTAG_127___3.3。秘密___HTMLTAG_128__CODEBLOCK_8__CODEBLOCK_9__HTMLTAG_129___3.4。 StatefulSet___HTMLTAG_130__CODEBLOCK_10__CODEBLOCK_11__HTMLTAG_131___3.5。服務___HTMLTAG_132__CODEBLOCK_12__CODEBLOCK_13__HTMLTAG_133___3.6。 RBAC（服務帳戶）</h3><pre><code class="language-yaml"># rbac.yaml
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: postgres
  namespace: postgres-ha

---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: postgres
  namespace: postgres-ha
rules:
  - apiGroups:
      - ""
    resources:
      - configmaps
    verbs:
      - create
      - get
      - list
      - patch
      - update
      - watch
      - delete
  - apiGroups:
      - ""
    resources:
      - endpoints
    verbs:
      - get
      - patch
      - update
      - create
      - list
      - watch
      - delete
  - apiGroups:
      - ""
    resources:
      - pods
    verbs:
      - get
      - list
      - patch
      - update
      - watch

---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: postgres
  namespace: postgres-ha
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: postgres
subjects:
  - kind: ServiceAccount
    name: postgres
</code></pre><pre><code class="language-bash">kubectl apply -f rbac.yaml
</code></pre><h2 id="4-verify-deployment">4。驗證部署___HTMLTAG_136__HTMLTAG_137___4.1。檢查 Pod___HTMLTAG_138__CODEBLOCK_16__HTMLTAG_139___4.2。檢查 StatefulSet___HTMLTAG_140__CODEBLOCK_17__HTMLTAG_141___4.3。檢查服務___HTMLTAG_142__CODEBLOCK_18__HTMLTAG_143___4.4。檢查 Patroni 群集</h3>___CODEBLOCK_19__HTMLTAG_145___4.5。測試連接___HTMLTAG_146__CODEBLOCK_20__HTMLTAG_147___5。使用 Zalando Postgres 運算子___HTMLTAG_148__HTMLTAG_149___5.1。安裝運算子___HTMLTAG_150__CODEBLOCK_21__HTMLTAG_151___5.2。建立 PostgreSQL 叢集____HTMLTAG_152__CODEBLOCK_22__CODEBLOCK_23__HTMLTAG_153___5.3。檢查叢集狀態___HTMLTAG_154__CODEBLOCK_24__HTMLTAG_155___5.4。連接到叢集___HTMLTAG_156__CODEBLOCK_25__HTMLTAG_157___6。儲存管理___HTMLTAG_158__HTMLTAG_159___6.1。效能儲存類別___HTMLTAG_160__CODEBLOCK_26__CODEBLOCK_27__HTMLTAG_161___6.2。磁碟區擴充____HTMLTAG_162__CODEBLOCK_28__HTMLTAG_163___6.3。備份磁碟區____HTMLTAG_164__CODEBLOCK_29__CODEBLOCK_30__HTMLTAG_165___7。在 Kubernetes 上監控____HTMLTAG_166__HTMLTAG_167___7.1。 Prometheus ServiceMonitor___HTMLTAG_168__CODEBLOCK_31__CODEBLOCK_32__HTMLTAG_169___7.2。 Grafana 儀表板___HTMLTAG_170__CODEBLOCK_33__HTMLTAG_171___7.3。 Loki 的日誌___HTMLTAG_172__CODEBLOCK_34__HTMLTAG_173___8。縮放和更新___HTMLTAG_174__HTMLTAG_175___8.1。規模集群___HTMLTAG_176__CODEBLOCK_35__HTMLTAG_177___8.2。滾動更新___HTMLTAG_178__CODEBLOCK_36__HTMLTAG_179___8.3。手動故障轉移___HTMLTAG_180__CODEBLOCK_37__HTMLTAG_181___9。疑難排解___HTMLTAG_182__HTMLTAG_183___9.1。 Pod 陷入待處理</h3><pre><code class="language-bash">kubectl describe pod postgres-0 -n postgres-ha

# Common issues:
# - Insufficient resources (CPU/memory)
# - PVC not bound
# - Node affinity rules not satisfied
</code></pre><h3 id="92-replication-not-working">9.2。複製不起作用___HTMLTAG_186__CODEBLOCK_39__HTMLTAG_187___9.3。領導者選舉問題___HTMLTAG_188__CODEBLOCK_40__HTMLTAG_189___10。最佳實務____HTMLTAG_190__HTMLTAG_191___✅應該___HTMLTAG_192__HTMLTAG_193__HTMLTAG_194__HTMLTAG_195___使用StatefulSet</strong>-穩定的網路身分___HTMLTAG_197__HTMLTAG_198__HTMLTAG_199___設定資源限制終止___HTMLTAG_201__HTMLTAG_202__HTMLTAG_203___啟用 PV 保留</strong>&nbsp;- 刪除時不要遺失資料___HTMLTAG_205__HTMLTAG_206__HTMLTAG_207___HTMLTAG_205__HTMLTAG_206__HTMLTAG_207___HT使用無頭服務____ML____&G&&nb___&m.發現___HTMLTAG_209__HTMLTAG_210__HTMLTAG_211___使用 Prometheus 進行監控</strong>- 追蹤運作狀況___HTMLTAG_213__HTMLTAG_214__HTMLTAG_215___使用運算子______使用運算符___161簡化管理___HTMLTAG_217__HTMLTAG_218__HTMLTAG_219___測試故障轉移</strong>-定期驗證HA___HTMLTAG_221__HTMLTAG_222__HTM LTAG_223___備份到外部儲存</strong>-S3、GCS、等等___HTMLTAG_225__HTMLTAG_226__HTMLTAG_227___使用反親和性___HTMLTAG_228_ __--跨節點分散pod___HTMLTAG_229__HTMLTAG_230__HTMLTAG_231___文件程式</strong>-用於操作團隊____HTMLTAG_233__HTMLTAG_2 34__HTMLTAG_235___❌不要____HTMLTAG_236__HTMLTAG_237__HTMLTAG_238__HTMLTAG_239___不要使用部署_</strong>&nbsp;-使用 StatefulSet____HTMLTAG_241__HTMLTAG_242__HTMLTAG_243___不要跳過資源限制</strong>- 可能會導致節點崩潰___HTMLTAG_245__HTMLTAG_246__HTMLTAG_247___MLTAG_245__HTMLTAG_246__HTMLTAG_247___MLTAG_245__HTMLTAG_246__HTMLTAG_247___________ML*不確定資料遺失____HTMLTAG_249__HTMLTAG_250__HTMLTAG_251___不要忽略 Pod親和力</strong>&nbsp;- 同一節點上的所有 Pod = 錯誤___HTMLTAG_253__HTMLTAG_254__HT0G_253__HT_U_253__HTMLTAG_254__HT0G_253__HT_____254__重新啟動時資料遺失___HTMLTAG_257__HTMLTAG_258__HTMLTAG_259___不要跳過備份</strong>&nbsp;- K8s 不是備份解決方案____HTMLTAG_261__HTMLTAG_262__HTMLTAG_263___11。實驗室練習___HTMLTAG_264__HTMLTAG_265___實驗室 1：使用 StatefulSet 部署Patroni___HTMLTAG_266__HTMLTAG_267__HTMLTAG_268___任務</strong>:___HTMLTAG_270__HTMLTAG_271__HTMLTAG_272___建立命名空間和RBAC____HTMLTAG_2731MLTAG_272___建立命名空間和RBAC____HTMLTAG_2731MLTAG_2721UUU44____HTMLTAG_2731 Secret___HTMLTAG_275__HTMLTAG_276___建立具有 3 個副本的 StatefulSet___HTMLTAG_277__HTMLTAG_278___部署服務____HTMLTAG_279__HTMLTAG_280___驗證叢集狀態___HTMLTAG_281__HTMLTAG_28828328281__中測試故障轉移___HTMLTAG_284__HTMLTAG_285__HTMLTAG_286___任務</strong>:___HTMLTAG_288__HTMLTAG_289__HTMLTAG_290___刪除領導者Pod___HTMLTAG_291__HTMLTAG_292___觀察自動故障轉移___HTMLTAG_293__HTMLTAG_294___驗證新當選的領導者____HTMLTAG_295__HTM LTAG_296___檢查應用程式連接____HTMLTAG_297__HTMLTAG_298___文檔RTO___HTMLTAG_299__HTMLTAG_300__HTMLTAG_301___實驗3：使用 Zalando Postgres 操作符___HTMLTAG_302__HTMLTAG_303__HTMLTAG_304___任務</strong>:___HTMLTAG_306__HTMLTAG_307__HTMLTAG_308___安裝運算子應用程式運算CR___HTMLTAG_311__HTMLTAG_312___連線並建立資料庫___HTMLTAG_313__HTMLTAG_314___向上/向下擴充叢集___HTMLTAG_315__HTMLTAG_316___測試滾動更新___HTMLTAG_317__HTMLTAG_3181HTMLTAG_319___MLTAG_319__ 4：監控Prometheus___HTMLTAG_320__HTMLTAG_321__HTMLTAG_322___任務</strong>：___HTMLTAG_324__HTMLTAG_325__HTMLTAG_326___11127128___MLHTMLTAG_325__HTMLTAG_326_____128_____ ServiceMonitor___HTMLTAG_329__HTMLTAG_330___查詢指標Prometheus___HTMLTAG_331__HTMLTAG_332___建立 Grafana 儀表板____HTMLTAG_333__HTMLTAG_334___設定警報規則___MLTAG_HTMLTAG_333__HTMLTAG_334___設定警報規則___MLTAG_33511TAG_335157G_3____MLTAG_335157G1_3_7。摘要___HTMLTAG_338__HTMLTAG_339___Kubernetes 與傳統</h3>
<!--kg-card-begin: html-->
___HTMLTAG_342__HTMLTAG_343__HTMLTAG_344__HTMLTAG_345___外觀___HTMLTAG_346__HTMLTAG_347____傳統___HTMLTAG_348__HTMLTAG_349___ Kubernetes____HTMLTAG_350__HTMLTAG_351__HTMLTAG_352__HTMLTAG_353__HTMLTAG_354__HTMLTAG_355___DCS____HTMLTAG_356__HTMLTAG_357___etcdetcd API___HTMLTAG_360__HTMLTAG_361__HTMLTAG_362__HTMLTAG_363___儲存____HTMLTAG_364__HTMLTAG_365___本機磁碟___HTMLTAG_366__HTMLTAG_367___PVC__ _HTMLTAG_368__HTMLTAG_369__HTMLTAG_370__HTMLTAG_371___服務發現___HTMLTAG_372__HTMLTAG_373___DNS/HAProxy___HTMLTAG_374__HTMLTAG_375___K8s服務___HTMLTAG_376__HTMLTAG_377__HTMLTAG_378__HTMLTAG_379___縮放___HTMLTAG_380__HTMLTAG_381___手動____HTMLTAG_382__HT MLTAG_383___kubectl規模____HTMLTAG_384__HTMLTAG_385__HTMLTAG_386__HTMLTAG_387___更新____HTMLTAG_388__HTMLTAG_389___手動SSH____HTMLTAG_390__HTMLTAG_391___滾動更新____HTMLTAG_392__HTMLTAG_393__HTMLTAG_394__HTMLTAG_395___監控___HTMLTAG_396 __HTMLTAG_397___單獨設定____HTMLTAG_398__HTMLTAG_399___服務監視器___HTMLTAG_400__HTMLTAG_401__HTMLTAG_402__HTMLTAG_403___
<!--kg-card-end: html-->
<h3 id="key-concepts">關鍵概念___HTMLTAG_406__CODEBLOCK_41__HTMLTAG_407___後續步驟___HTMLTAG_408__HTMLTAG_409___第 23 課將介紹<strong>Patroni設定管理</strong>：___HTMLTAG_412__HTMLTAG_413__HTMLTAG_414___動態設定變更___HTMLTAG_415__HTMLTAG_416___基於DCS的設定儲存___HTMLTAG_417__HT MLTAG_418___patronictl編輯配置使用___HTMLTAG_419__HTMLTAG_420___零停機時間更新___HTMLTAG_421__HTMLTAG_422___配置驗證___HTMLTAG_423__HTMLTAG_424___