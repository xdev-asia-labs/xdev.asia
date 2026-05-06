---
id: 019d8b30-b116-7001-c001-e0c5f8100116
title: 第 16 課：工作流程 - 使用 IGA 實現管理自動化
slug: bai-16-workflows-tu-dong-hoa-quan-tri-voi-iga
description: 引入用於身分治理和管理 (IGA) 的 Keycloak 工作流程（預覽版）。了解工作流程、工作流程定義、工作流程表達式語言、管理工作流程、定義條件和步驟、加入者-移動者-離開者 (JML) 流程、自動入職/離職、存取審查和企業常見用例。
duration_minutes: 160
is_free: true
video_url: null
sort_order: 16
section_title: 第 4 部分：使用者聯盟、組織與授權
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3397" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3397)"/>

  <!-- Decorations -->
  <g>
    <circle cx="870" cy="240" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="640" cy="50" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="910" cy="120" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="190" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="950" cy="260" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="160" x2="1100" y2="240" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="190" x2="1050" y2="260" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="940.3108891324554,92.5 940.3108891324554,127.5 910,145 879.6891108675446,127.5 879.6891108675446,92.50000000000001 910,75" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 16 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 16 課：工作流程 - 自動化管理__HTMLTAG_53___
      <tspan x="60" dy="42">與 IGA</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：使用者聯盟、組織與授權__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。 IGA 與工作流程 — 概述___HTMLTAG_69__HTMLTAG_70___

___HTMLTAG_71__HTMLTAG_72___身分治理與管理 (IGA)</strong> 是身分生命週期管理領域 — 從使用者加入組織（加入者）、變更角色（移動者）到離開（離開者）。 Keycloak 工作流程是一項功能 <strong>preview</strong>，可實現這些 IGA 流程的自動化。 </p>

___HTMLTAG_77__HTMLTAG_78___1.1 為什麼我們需要工作流程？ ___HTMLTAG_79__HTMLTAG_80___

<table>
<thead>
___HTMLTAG_83__HTMLTAG_84___問題____HTMLTAG_85__HTMLTAG_86___無工作流程___HTMLTAG_87__HTMLTAG_88___有工作流程___HTMLTAG_89__HTMLTAG_90___
</thead>
<tbody>
___HTMLTAG_93__HTMLTAG_94__HTMLTAG_95___新員工入職___HTMLTAG_96__HTMLTAG_97__HTMLTAG_98___管理員必須手動建立帳戶、指派角色、新增至群組____HTMLTAG_99__HTMLTAG_100___自動：建立帳號→依部門指派角色→新增群組→傳送歡迎電子郵件___HTMLTAG_101__HTMLTAG_102___
___HTMLTAG_103__HTMLTAG_104__HTMLTAG_105___部門調動____HTMLTAG_106__HTMLTAG_107__HTMLTAG_108___管理員必須手動刪除舊角色，指派新角色__HTMLTAG_109__HTMLTAG_110___自動偵測部門變更→更新對應的角色/群組回應___HTMLTAG_111__HTMLTAG_112___
___HTMLTAG_113__HTMLTAG_114__HTMLTAG_115___關閉___HTMLTAG_116__HTMLTAG_117__HTMLTAG_118___忘記撤銷存取權限→安全風險___HTMLTAG_119__HTMLTAG_120___自動停用帳號停用帳號從/1201120____ML_120____
___HTMLTAG_123__HTMLTAG_124__HTMLTAG_125___存取稽核___HTMLTAG_126__HTMLTAG_127__HTMLTAG_128___無法定期審核__HTMLTAG_129__HTMLTAG_130___自動檢查並未使用的非___ML
</tbody>
</table>___HTMLTAG_135__HTMLTAG_136___1.2 什麼是 Keycloak 工作流程？ ___HTMLTAG_137__HTMLTAG_138___

<p>Keycloak 工作流程是一個 <strong>事件驅動、基於條件的</strong>系統，允許定義自動化流程，包括：</p>

<ul>
___HTMLTAG_144__HTMLTAG_145___觸發器</strong>：觸發工作流程的事件（使用者建立、屬性變更、登入事件...）</li>
___HTMLTAG_148__HTMLTAG_149___條件</strong>：執行工作流程必須滿足的條件</li>
___HTMLTAG_152__HTMLTAG_153___步驟</strong>：條件符合時要執行的動作（指派角色、新增至群組、傳送通知...）</li>
</ul>

___HTMLTAG_157__HTMLTAG_158___2。啟用工作流程（預覽功能）___HTMLTAG_159__HTMLTAG_160___

<p>工作流程是一項功能 <strong>預覽</strong>，需要明確啟用：</p>

___預編碼_0___

___HTMLTAG_165__HTMLTAG_166___注意：</strong> 預覽功能可能會變更版本之間的 API。未經徹底測試，不應在生產中使用。 </p>

___HTMLTAG_169__HTMLTAG_170___3。工作流程概念___HTMLTAG_171__HTMLTAG_172___

___HTMLTAG_173__HTMLTAG_174___3.1 工作流程元件___HTMLTAG_175__HTMLTAG_176___

___預編碼_1___

___HTMLTAG_177__HTMLTAG_178___3.2 觸發器類型___HTMLTAG_179__HTMLTAG_180___

<table>
<thead>
___HTMLTAG_183__HTMLTAG_184___觸發器____HTMLTAG_185__HTMLTAG_186___說明____HTMLTAG_187__HTMLTAG_188__________HTMLTAG_189__HTMLTAG_190___
</thead>
<tbody>
___HTMLTAG_193__HTMLTAG_194__HTMLTAG_195___USER_CREATED___HTMLTAG_196__HTMLTAG_197__HTMLTAG_198___新建立的使用者____HTMLTAG_199__HTMLTAG_200___MLTAG_200___2GML
___HTMLTAG_203__HTMLTAG_204__HTMLTAG_205___USER_UPDATED___HTMLTAG_206__HTMLTAG_207__HTMLTAG_208___使用者屬性變更___HTMLTAG_209__HTMLTAG_210___MLD：偵測部門變更___11211210___1210___
___HTMLTAG_213__HTMLTAG_214__HTMLTAG_215___USER_DELETED___HTMLTAG_216__HTMLTAG_217__HTMLTAG_218___使用者已刪除___HTMLTAG_219__HTMLTAG_220___清理：撤銷外部存取權___
___HTMLTAG_223__HTMLTAG_224__HTMLTAG_225___USER_DISABLED___HTMLTAG_226__HTMLTAG_227__HTMLTAG_228___使用者已停用___HTMLTAG_229__HTMLTAG_230___關閉：撤銷會話取消
___HTMLTAG_233__HTMLTAG_234__HTMLTAG_235___GROUP_MEMBERSHIP_CHANGED___HTMLTAG_236__HTMLTAG_237 __HTMLTAG_238___在群組中新增/刪除使用者___HTMLTAG_239__HTMLTAG_240___自動指派相關角色___HTMLTAG_241__HTMLTAG_242___
___HTMLTAG_243__HTMLTAG_244__HTMLTAG_245___ROLE_ASSIGNED___HTMLTAG_246__HTMLTAG_247__HTMLTAG_248___使用者指派的角色___HTMLTAG_249__HTMLTAG_250___級聯1HTML
___HTMLTAG_253__HTMLTAG_254__HTMLTAG_255___ROLE_REMOVED___HTMLTAG_256__HTMLTAG_257__HTMLTAG_258___使用者已刪除角色___HTMLTAG_259__HTMLTAG_MLTAG_258___使用者已刪除角色___HTMLTAG_259__HTMLTAG_260___
</tbody>
</table>

___HTMLTAG_265__HTMLTAG_266___4。工作流程定義___HTMLTAG_267__HTMLTAG_268______HTMLTAG_269__HTMLTAG_270___4.1 工作流程結構定義___HTMLTAG_271__HTMLTAG_272___

___預編碼_2___

___HTMLTAG_273__HTMLTAG_274___4.2 YAML 格式___HTMLTAG_275__HTMLTAG_276___

___預編碼_3___

___HTMLTAG_277__HTMLTAG_278___5。工作流程表達語言___HTMLTAG_279__HTMLTAG_280___

<p>工作流程使用表達式語言<strong>定義動態條件__HTMLTAG_283___和<strong>引用使用者屬性__HTMLTAG_285___.</p>

___HTMLTAG_287__HTMLTAG_288___5.1 變數___HTMLTAG_289__HTMLTAG_290___

<table>
<thead>
___HTMLTAG_293__HTMLTAG_294___變數___HTMLTAG_295__HTMLTAG_296___說明___HTMLTAG_297__HTMLTAG_298___範例____HTMLTAG_299__HTMLTAG_300___
</thead>
<tbody>
___HTMLTAG_303__HTMLTAG_304__HTMLTAG_305___使用者.使用者名稱___HTMLTAG_306__HTMLTAG_307__HTMLTAG_308___使用者的用戶名___HTMLTAG_309__HTMLTAG_310__HTMLTAG_311___john.doe___HTMLTAG_312__HTMLTAG_313__HTMLTAG_314___
___HTMLTAG_315__HTMLTAG_316__HTMLTAG_317___user.email___HTMLTAG_318__HTMLTAG_319__HTMLTAG_320___電子郵件地址___HTMLTAG_321__HTMLTAG_322__HTMLTAG_323___john@example.com___HTMLTAG_324__HTMLTAG_325__HTMLTAG_326___
___HTMLTAG_327__HTMLTAG_328__HTMLTAG_329___用戶.名字___HTMLTAG_330__HTMLTAG_331__HTMLTAG_332___名字___HTMLTAG_333__HTMLTAG_334__HTMLTAGMLTAGMLTAGMLTAGMLTAG13___
___HTMLTAG_339__HTMLTAG_340__HTMLTAG_341___user.lastName___HTMLTAG_342__HTMLTAG_343__HTMLTAG_3 44___姓___HTMLTAG_345__HTMLTAG_346__HTMLTAG_347___Doe___HTMLTAG_348__HTMLTAG_349__HTMLTAG_350___
___HTMLTAG_351__HTMLTAG_352__HTMLTAG_353___user.attributes.{名稱}___HTMLTAG_354__HTMLTAG_355__HTMLTAG_356___自訂屬性___HTMLTAG_357__HTMLTAG_358__HTMLTAG_359___user.attributes.department___HTMLTAG_360__HTMLTAG_361__HTMLTAG_362___
___HTMLTAG_363__HTMLTAG_364__HTMLTAG_365___user.groups___HTMLTAG_366__HTMLTAG_367__HTMLTAG_368___列出群組路徑___HTMLTAG_369__HTMLTAG_370__HTMLTAG_371___* “/VPN-用戶”]___HTMLTAG_372__HTMLTAG_373__HTMLTAG_374___
___HTMLTAG_375__HTMLTAG_376__HTMLTAG_377___user.roles___HTMLTAG_378__HTMLTAG_379__HTMLTAG_380___列出指派的角色____HTMLTAG_381__HTMLTAG_382__HTMLTAG_383___[「員工」、「開發人員」]___HTMLTAG_384__HTMLTAG_385__HTMLTAG_386___
___HTMLTAG_387__HTMLTAG_388__HTMLTAG_389___事件.類型___HTMLTAG_390__HTMLTAG_391__HTMLTAG_392___事件類型___HTMLTAG_393__HTMLTAG_394__HTMLTAG_395___使用者_建立___HTMLTAG_396__HTMLTAG_397__HTMLTAG_398___
___HTMLTAG_399__HTMLTAG_400__HTMLTAG_401___事件.時間___HTMLTAG_402__HTMLTAG_403__HTMLTAG_404___事件時間戳___HT MLTAG_405__HTMLTAG_406__HTMLTAG_407___2026-03-30T10:00:00Z___HTMLTAG_408__HTMLTAG_409__HTMLTAG_410___
</tbody>
</table>

___HTMLTAG_413__HTMLTAG_414___5.2 運算子___HTMLTAG_415__HTMLTAG_416___<table>
<thead>
___HTMLTAG_419__HTMLTAG_420___運算子___HTMLTAG_421__HTMLTAG_422___說明____HTMLTAG_423__HTMLTAG_424___範例____HTMLTAG_425__HTMLTAG_426___
</thead>
<tbody>
___HTMLTAG_429__HTMLTAG_430__HTMLTAG_431____等於____HTMLTAG_432__HTMLTAG_433__HTMLTAG_434____比較等於___HTMLTAG_435__HTMLTAG_436__HTMLTAuser_437_____HTMLTAuser.等於「工程」___HTMLTAG_438__HTMLTAG_439__HTMLTAG_440___
___HTMLTAG_441__HTMLTAG_442__HTMLTAG_443___not_equals____HTMLTAG_444__HTMLTAG_445__HTMLTAG_446___不等於___HTMLTAG_447__HTMLTAG_448__HTMLuserTA_447__HT​​not_​​_448__HTMLuserTA_447. 「無效」___HTMLTAG_450__HTMLTAG_451__HTMLTAG_452___
___HTMLTAG_453__HTMLTAG_454__HTMLTAG_455___包含___HTMLTAG_456__HTMLTAG_457__HTMLTAG_458____包含值___HTMLTAG_459__HTMLTAG_460__HTMLTAG_461___user.e包含「@acme.com」___HTMLTAG_462__HTMLTAG_463__HTMLTAG_464___
___HTMLTAG_465__HTMLTAG_466__HTMLTAG_467___開始於___HTMLTAG_468__HTMLTAG_469__HTMLTAG_470___開始於___HT MLTAG_471__HTMLTAG_472__HTMLTAG_473___user.使用者名稱開始於「svc-」___HTMLTAG_474__HTMLTAG_475__HTMLTAG_476___
___HTMLTAG_477__HTMLTAG_478__HTMLTAG_479___以___HTMLTAG_480__HTMLTAG_481__HTMLTAG_482___以___HTMLTAG_4 83__HTMLTAG_484__HTMLTAG_485___user.email以___結尾「@acme.com」___HTMLTAG_486__HTMLTAG_487__HTMLTAG_488___
___HTMLTAG_489__HTMLTAG_490__HTMLTAG_491____在____HTMLTAG_492__HTMLTAG_493__HTMLTAG_494____屬於列表___HTMLTAG_495__HTMLTAG_496__HTMLTAuser_49771." “DN”]___HTMLTAG_498__HTMLTAG_499__HTMLTAG_500___
___HTMLTAG_501__HTMLTAG_502__HTMLTAG_503___存在___HTMLTAG_504__HTMLTAG_505__HTMLTAG_506___屬性存在___HTMLTAG_ 507__HTMLTAG_508__HTMLTAG_509___user.attributes.employeeId存在___HTMLTAG_510__HTMLTAG_511__HTMLTAG_512___
___HTMLTAG_513__HTMLTAG_514__HTMLTAG_515___不存在___HTMLTAG_516__HTMLTAG_517__HTMLTAG_518___屬性不存在___HTMLTAG_51 9__HTMLTAG_520__HTMLTAG_521___user.attributes.termination_date不存在___HTMLTAG_522__HTMLTAG_523__HTMLTAG_524___
</tbody>
</table>

___HTMLTAG_527__HTMLTAG_528___5.3 函數___HTMLTAG_529__HTMLTAG_530___

___預編碼_4___

___HTMLTAG_531__HTMLTAG_532___6。管理工作流程___HTMLTAG_533__HTMLTAG_534___

___HTMLTAG_535__HTMLTAG_536___6.1 CRUD 操作___HTMLTAG_537__HTMLTAG_538___

___預編碼_5___

___HTMLTAG_539__HTMLTAG_540___7。定義條件___HTMLTAG_541__HTMLTAG_542___

___HTMLTAG_543__HTMLTAG_544___7.1 使用者屬性條件___HTMLTAG_545__HTMLTAG_546___

___預編碼_6___

___HTMLTAG_547__HTMLTAG_548___7.2 群組會員條件___HTMLTAG_549__HTMLTAG_550___

___預編碼_7___

___HTMLTAG_551__HTMLTAG_552___7.3 基於時間的條件___HTMLTAG_553__HTMLTAG_554___

___預編碼_8___

___HTMLTAG_555__HTMLTAG_556___7.4 基於事件的條件___HTMLTAG_557__HTMLTAG_558___

___預編碼_9___

___HTMLTAG_559__HTMLTAG_560___8。定義步驟___HTMLTAG_561__HTMLTAG_562___

___HTMLTAG_563__HTMLTAG_564___8.1 指派角色___HTMLTAG_565__HTMLTAG_566___

___預編碼_10______HTMLTAG_567__HTMLTAG_568___8.2 刪除角色___HTMLTAG_569__HTMLTAG_570___

<pre><code class="language-json">{
  "type": "remove_role",
  "role": "contractor",
  "scope": "realm"
}</code></pre>

___HTMLTAG_571__HTMLTAG_572___8.3 加入到群組___HTMLTAG_573__HTMLTAG_574___

<pre><code class="language-json">{
  "type": "add_to_group",
  "group": "/Company/Engineering/Backend"
}</code></pre>

___HTMLTAG_575__HTMLTAG_576___8.4 從群組中刪除___HTMLTAG_577__HTMLTAG_578___

<pre><code class="language-json">{
  "type": "remove_from_group",
  "group": "/Company/Marketing"
}</code></pre>

___HTMLTAG_579__HTMLTAG_580___8.5 發送通知___HTMLTAG_581__HTMLTAG_582___

<pre><code class="language-json">{
  "type": "send_email",
  "to": "${user.email}",
  "template": "welcome-employee",
  "params": {
    "name": "${user.firstName}",
    "department": "${user.attributes.department}",
    "manager": "${user.attributes.manager}"
  }
}</code></pre>

___HTMLTAG_583__HTMLTAG_584___8.6 呼叫外部API___HTMLTAG_585__HTMLTAG_586___

<pre><code class="language-json">{
  "type": "invoke_api",
  "url": "https://hr-system.example.com/api/v1/employees/provisioned",
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "X-API-Key": "${env.HR_API_KEY}"
  },
  "body": {
    "employeeId": "${user.attributes.employeeId}",
    "email": "${user.email}",
    "department": "${user.attributes.department}",
    "provisionedAt": "${event.time}"
  }
}</code></pre>

___HTMLTAG_587__HTMLTAG_588___8.7 設定使用者屬性___HTMLTAG_589__HTMLTAG_590___

<pre><code class="language-json">{
  "type": "set_attribute",
  "attribute": "provisionedAt",
  "value": "${now()}"
}

{
  "type": "set_attribute",
  "attribute": "accessLevel",
  "value": "standard"
}</code></pre>

___HTMLTAG_591__HTMLTAG_592___9。加入者-移動者-離開者 (JML) 流程___HTMLTAG_593__HTMLTAG_594___

___HTMLTAG_595__HTMLTAG_596___9.1 加入者 — 自動加入___HTMLTAG_597__HTMLTAG_598___

<pre><code class="language-yaml"># workflow-joiner.yaml
name: "JML: Joiner - Employee Onboarding"
description: Auto-provision new full-time employees
enabled: true

trigger:
  type: USER_CREATED

conditions:
  - type: user_attribute
    attribute: employeeType
    operator: equals
    value: full-time

steps:
  # Base provisioning cho tất cả employees
  - type: assign_role
    role: employee

  - type: add_to_group
    group: /Company/All-Employees

  - type: set_attribute
    attribute: onboardingStatus
    value: completed

  - type: set_attribute
    attribute: onboardedAt
    value: "${now()}"

  # Department-specific provisioning
  - type: conditional
    condition:
      type: user_attribute
      attribute: department
      operator: equals
      value: engineering
    thenSteps:
      - type: assign_role
        role: developer
      - type: add_to_group
        group: /Company/Engineering
      - type: assign_role
        role: gitlab-user
        scope: client
        clientId: gitlab

  - type: conditional
    condition:
      type: user_attribute
      attribute: department
      operator: equals
      value: sales
    thenSteps:
      - type: assign_role
        role: sales-rep
      - type: add_to_group
        group: /Company/Sales
      - type: assign_role
        role: crm-user
        scope: client
        clientId: salesforce

  # Notify HR system
  - type: invoke_api
    url: https://hr.example.com/api/onboarding/completed
    method: POST
    body:
      employeeId: "${user.attributes.employeeId}"
      email: "${user.email}"

  # Send welcome email
  - type: send_email
    to: "${user.email}"
    template: welcome-employee</code></pre>

___HTMLTAG_599__HTMLTAG_600___9.2 移動者 — 部門轉移___HTMLTAG_601__HTMLTAG_602___

<pre><code class="language-yaml"># workflow-mover.yaml
name: "JML: Mover - Department Transfer"
description: Handle department changes
enabled: true

trigger:
  type: USER_UPDATED

conditions:
  - type: event
    attribute: event.details.updated_attribute
    operator: equals
    value: department

steps:
  # Lấy old department từ event details
  # Remove old department group
  - type: remove_from_group
    group: "/Company/${event.details.previous_value}"

  # Add to new department group
  - type: add_to_group
    group: "/Company/${user.attributes.department}"

  # Log transfer
  - type: set_attribute
    attribute: lastTransferDate
    value: "${now()}"

  - type: set_attribute
    attribute: previousDepartment
    value: "${event.details.previous_value}"

  # Notify managers
  - type: invoke_api
    url: https://hr.example.com/api/transfers
    method: POST
    body:
      employeeId: "${user.attributes.employeeId}"
      fromDepartment: "${event.details.previous_value}"
      toDepartment: "${user.attributes.department}"
      transferDate: "${event.time}"</code></pre>

___HTMLTAG_603__HTMLTAG_604___9.3 離開者 — 自動離職___HTMLTAG_605__HTMLTAG_606___

<pre><code class="language-yaml"># workflow-leaver.yaml
name: "JML: Leaver - Employee Offboarding"
description: Auto-deprovision disabled/deleted employees
enabled: true

trigger:
  type: USER_DISABLED

conditions:
  - type: user_attribute
    attribute: employeeType
    operator: in
    values:
      - full-time
      - contract

steps:
  # Revoke all active sessions
  - type: invoke_api
    url: "http://localhost:8080/admin/realms/my-realm/users/${user.id}/logout"
    method: POST
    headers:
      Authorization: "Bearer ${admin.token}"

  # Remove from all groups (except audit trail groups)
  - type: remove_from_group
    group: /Company/All-Employees

  # Remove sensitive roles
  - type: remove_role
    role: developer

  - type: remove_role
    role: admin

  # Set offboarding metadata
  - type: set_attribute
    attribute: offboardingStatus
    value: completed

  - type: set_attribute
    attribute: offboardedAt
    value: "${now()}"

  - type: set_attribute
    attribute: accountDisabledReason
    value: employee-departure

  # Notify IT and HR
  - type: invoke_api
    url: https://hr.example.com/api/offboarding/completed
    method: POST
    body:
      employeeId: "${user.attributes.employeeId}"
      email: "${user.email}"
      offboardedAt: "${event.time}"

  # Notify admin via email
  - type: send_email
    to: it-admin@example.com
    template: offboarding-notification
    params:
      employeeName: "${user.firstName} ${user.lastName}"
      department: "${user.attributes.department}"</code></pre>

___HTMLTAG_607__HTMLTAG_608___10。存取審核工作流程___HTMLTAG_609__HTMLTAG_610___

<p>存取審核允許 <strong>定期檢查__HTMLTAG_613___以查看使用者是否仍需要目前權限：</p>

___預編碼_20___

___HTMLTAG_615__HTMLTAG_616___11。常見企業用例___HTMLTAG_617__HTMLTAG_618___

___HTMLTAG_619__HTMLTAG_620___11.1 承包商生命週期管理___HTMLTAG_621__HTMLTAG_622___

<pre><code class="language-yaml"># Tự động disable contractor khi hết hợp đồng
name: "Contractor: Auto-disable on contract end"
enabled: true
trigger:
  type: SCHEDULED
  schedule: "0 0 * * *"  # Daily check

conditions:
  - type: user_attribute
    attribute: employeeType
    operator: equals
    value: contract
  - type: user_attribute
    attribute: contractEndDate
    operator: before
    value: "${now()}"

steps:
  - type: disable_user
  - type: set_attribute
    attribute: disabledReason
    value: contract-expired
  - type: send_email
    to: "${user.attributes.managerEmail}"
    template: contractor-expired</code></pre>

___HTMLTAG_623__HTMLTAG_624___11.2 從 LDAP 同步自動設定___HTMLTAG_625__HTMLTAG_626___

<pre><code class="language-yaml"># Khi user được sync từ LDAP, auto-assign roles
name: "LDAP: Post-sync provisioning"
enabled: true
trigger:
  type: USER_CREATED

conditions:
  - type: user_attribute
    attribute: LDAP_ID
    operator: exists
  - type: user_attribute
    attribute: department
    operator: exists

steps:
  - type: assign_role
    role: ldap-user
  - type: conditional
    condition:
      type: user_attribute
      attribute: memberOf
      operator: contains
      value: "CN=VPN-Users"
    thenSteps:
      - type: assign_role
        role: vpn-access</code></pre>

___HTMLTAG_627__HTMLTAG_628___11.3 合規性 — 密碼輪替提醒___HTMLTAG_629__HTMLTAG_630___

<pre><code class="language-yaml"># Nhắc nhở user đổi password sau 90 ngày
name: "Compliance: Password rotation reminder"
enabled: true
trigger:
  type: SCHEDULED
  schedule: "0 8 * * 1"  # Weekly, Monday 8 AM

conditions:
  - type: user_attribute
    attribute: lastPasswordChange
    operator: older_than_days
    value: 80

steps:
  - type: send_email
    to: "${user.email}"
    template: password-rotation-reminder
    params:
      daysRemaining: "${90 - daysBetween(user.attributes.lastPasswordChange, now())}"
  - type: conditional
    condition:
      type: user_attribute
      attribute: lastPasswordChange
      operator: older_than_days
      value: 90
    thenSteps:
      - type: set_attribute
        attribute: passwordExpired
        value: "true"
      - type: invoke_api
        url: "http://localhost:8080/admin/realms/my-realm/users/${user.id}/execute-actions-email"
        method: PUT
        body: ["UPDATE_PASSWORD"]</code></pre>

___HTMLTAG_631__HTMLTAG_632___12。監控與故障排除___HTMLTAG_633__HTMLTAG_634___

___HTMLTAG_635__HTMLTAG_636___12.1 工作流程執行日誌___HTMLTAG_637__HTMLTAG_638___

___預編碼_24___

___HTMLTAG_639__HTMLTAG_640___12.2 常見問題___HTMLTAG_641__HTMLTAG_642___<table>
<thead>
___HTMLTAG_645__HTMLTAG_646___問題____HTMLTAG_647__HTMLTAG_648___原因____HTMLTAG_649__HTMLTAG_650___解決方案____HTMLTAG_651__HTMLTAG_652___
</thead>
<tbody>
___HTMLTAG_655__HTMLTAG_656___工作流程未觸發___HTMLTAG_657__HTMLTAG_658___功能未啟用或工作流程已停用___HTMLTAG_659__HTMLTAG_660___檢查<code>--features=工作流程____MLUU____________features=____ML_U4________fe已啟用：正確___HTMLTAG_664__HTMLTAG_665__HTMLTAG_666___
___HTMLTAG_667__HTMLTAG_668___条件不匹配___HTMLTAG_669__HTMLTAG_670___属性名称或值错误____HTMLTAG_671__HTMLTAG_672___通过管理控制台验证用户属性____HTMLTAG_673__HTMLTAG_674___
___HTMLTAG_675__HTMLTAG_676___步驟失敗___HTMLTAG_677__HTMLTAG_678___角色/群組不存在____HTMLTAG_679__HTMLTAG_680___在工作流程中引用之前建立角色/群組____HTMLTAG_681__2HTTAG_6812HT
___HTMLTAG_683__HTMLTAG_684___API呼叫失敗___HTMLTAG_685__HTMLTAG_686___外部服務不可用___HTMLTAG_687__HTMLTAG_688___檢查網路連接，新增重試邏輯__HTMLTAG_689__HTMLTAG_690_____HT
___HTMLTAG_691__HTMLTAG_692___電子郵件未傳送___HTMLTAG_693__HTMLTAG_694___SMTP 未設定__HTMLTAG_695__HTMLTAG_696___設定領域設定 → 電子郵件____HTMLTAG_697__HTMLTAG_698______
</tbody>
</table>

___HTMLTAG_701__HTMLTAG_702___13。最佳實務___HTMLTAG_703__HTMLTAG_704___

<ul>
___HTMLTAG_706__HTMLTAG_707___從簡單開始</strong> — 先實作基本 JML，然後增加複雜性</li>
___HTMLTAG_710__HTMLTAG_711___在生產前徹底測試工作流程</strong> — 這是預覽功能，可能存在錯誤</li>
___HTMLTAG_714__HTMLTAG_715___冪等步驟</strong> — 確保可以再次播放步驟而不會造成副作用</li>
___HTMLTAG_718__HTMLTAG_719___錯誤處理</strong> — 外部 API 故障或電子郵件退回的計畫</li>
___HTMLTAG_722__HTMLTAG_723___審核追蹤</strong> — 始終設定屬性來記錄工作流程執行（時間戳、狀態）</li>
___HTMLTAG_726__HTMLTAG_727___關注點分離</strong> — 將 JML 分離為單獨的工作流程（加入者、移動者、離開者）</li>
___HTMLTAG_730__HTMLTAG_731___版本控制</strong> — 將工作流程定義匯出至 git，使用 CI/CD 進行部署</li>
___HTMLTAG_734__HTMLTAG_735___監視執行日誌</strong> — 設定針對失敗的工作流程執行的警報</li>
___HTMLTAG_738__HTMLTAG_739___逐步推出</strong> — 首先為小組使用者啟用工作流程，然後擴充</li>
</ul>