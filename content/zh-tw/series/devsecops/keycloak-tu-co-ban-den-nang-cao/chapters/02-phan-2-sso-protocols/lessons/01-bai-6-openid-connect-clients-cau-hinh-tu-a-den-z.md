---
id: 019d8b30-b106-7001-c001-e0c5f8100106
title: 第 6 課：OpenID Connect 用戶端 - 從頭到尾的配置
slug: bai-6-openid-connect-clients-cau-hinh-tu-a-den-z
description: 詳細了解 OIDC 用戶端類型（公共、機密、僅承載）、透過管理控制台建立和配置用戶端、OIDC 身份驗證流程（授權代碼、隱式、客戶端憑證、裝置授權、CIBA）、設定 PKCE、CIBA 策略以及與 React 和 Spring Boot 的實際整合。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 6
section_title: 第 2 部分：SSO 協定 - OpenID Connect 和 SAML
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8643" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8643)"/>

  <!-- Decorations -->
  <g>
    <circle cx="968" cy="254" r="26" fill="#fbbf24" opacity="0.09"/>
    <circle cx="836" cy="242" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="704" cy="230" r="14" fill="#fbbf24" opacity="0.07"/>
    <circle cx="1072" cy="218" r="8" fill="#fbbf24" opacity="0.11"/>
    <circle cx="940" cy="206" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="114" x2="1100" y2="194" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="144" x2="1050" y2="214" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1039.1147367097487,199.5 1039.1147367097487,228.5 1014,243 988.8852632902513,228.5 988.8852632902513,199.5 1014,185" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — 第 6 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 6 課：OpenID Connect 用戶端 - 設定</tspan>
      <tspan x="60" dy="42">從頭到尾</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：SSO 協定 - OpenID Connect 和 SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。 Keycloak 中的 OpenID Connect 概述___HTMLTAG_69__HTMLTAG_70___

<p>OpenID Connect (OIDC) 是建置在 OAuth 2.0 平台上的驗證協定。 Keycloak完全支援OIDC規範，並為企業擴展了許多功能。在本文中，我們將深入介紹建立、配置和整合 OIDC 用戶端。 </p>

___HTMLTAG_73__HTMLTAG_74___Keycloak 中的 OIDC 端點___HTMLTAG_75__HTMLTAG_76___
<p>Keycloak 提供 OIDC 標準端點。您可以透過 <strong>眾所周知的設定</strong>:</p> 取得所有端點資訊

___預編碼_0___<p>重要端點：</p>
<table>
<thead>
___HTMLTAG_85__HTMLTAG_86___端點___HTMLTAG_87__HTMLTAG_88___URL 模式___HTMLTAG_89__HTMLTAG_90___用途____HTMLTAG_91__HTMLTAG_92___
</thead>
<tbody>
___HTMLTAG_95__HTMLTAG_96___授權___HTMLTAG_97__HTMLTAG_98__HTMLTAG_99___/realms/{realm}/protocol/openid-connect/auth___HTMLTAG_100__HTMLTAG_101__1TAG_101__130100___2____101__
___HTMLTAG_105__HTMLTAG_106___令牌___HTMLTAG_107__HTMLTAG_108__HTMLTAG_109___/realms/{realm}/protocol/ openid-connect/token___HTMLTAG_110__HTMLTAG_111__HTMLTAG_112___取得/刷新令牌___HTMLTAG_113__HTMLTAG_114___
___HTMLTAG_115__HTMLTAG_116___使用者資訊____HTMLTAG_117__HTMLTAG_118__HTMLTAG_119___/realms/{realm}/protocol /openid-connect/userinfo___HTMLTAG_120__HTMLTAG_121__HTMLTAG_122___取得使用者資訊___HTMLTAG_123__HTMLTAG_124___
___HTMLTAG_125__HTMLTAG_126___註銷____HTMLTAG_127__HTMLTAG_128__HTMLTAG_129___/realms/{realm}/protocol/openid-connect/logout___HTMLTAG_130__HTMLTAG_13113121312_____啟動）註銷）___HTMLTAG_133__HTMLTAG_134___
___HTMLTAG_135__HTMLTAG_136___令牌自省___HTMLTAG_137__HTMLTAG_138__HTMLTAG_139___/realms/{realm}/protocol/openi d-connect/token/introspect____HTMLTAG_140__HTMLTAG_141__HTMLTAG_142___檢查令牌有效性___HTMLTAG_143__HTMLTAG_144___
___HTMLTAG_145__HTMLTAG_146___令牌撤銷____HTMLTAG_147__HTMLTAG_148__HTMLTAG_149___/realms/{realm}/protoco l/openid-connect/revoke____HTMLTAG_150__HTMLTAG_151__HTMLTAG_152___撤銷令牌___HTMLTAG_153__HTMLTAG_154___
___HTMLTAG_155__HTMLTAG_156___JWKS___HTMLTAG_157__HTMLTAG_158__HTMLTAG_159___/realms/{realm}/protocol/openid-connect/certs___HTMLTAG_160__HTMLTAG_161162160__HTMLTAG161162160__HTMLTAG16162162160__HT驗證的公鑰___HTMLTAG_163__HTMLTAG_164___
___HTMLTAG_165__HTMLTAG_166___設備授權___HTMLTAG_167__HTMLTAG_168__HTMLTAG_169___/realms/{realm}/protocol/op enid-connect/auth/device____HTMLTAG_170__HTMLTAG_171__HTMLTAG_172___設備授權授予___HTMLTAG_173__HTMLTAG_174___
</tbody>
</table>

___HTMLTAG_177__HTMLTAG_178___2。 OIDC 客戶端類型___HTMLTAG_179__HTMLTAG_180___

<p>Keycloak 支援三種主要類型的客戶端，每種類型適合不同的應用程式架構：</p>

___HTMLTAG_183__HTMLTAG_184___2.1 公用客戶端___HTMLTAG_185__HTMLTAG_186___
<p>客戶端無法保護客戶端機密 - 通常是完全在瀏覽器或行動裝置上執行的應用程式。 </p>
<ul>
___HTMLTAG_190__HTMLTAG_191__HTMLTAG_192___功能_</strong>：無客戶端金鑰，透過重定向 URI 進行驗證____HTMLTAG_194__HTMLTAG_195___
___HTMLTAG_196__HTMLTAG_197__HTMLTAG_198___用例</strong>：單頁應用程式（React、Angular、Vue）、行動應用程式、桌面應用程式___HTMLTAG_200__HTMLTAG_201___
___HTMLTAG_202__HTMLTAG_203__HTMLTAG_204___授權流程</strong>：授權碼+PKCE（必要）___HTMLTAG_206__HTMLTAG_207___
___HTMLTAG_208__HTMLTAG_209__HTMLTAG_210___設定</strong>：<code>客戶端驗證</code> = 關閉___HTMLTAG_214__HTMLTAG_215___
</ul>___預編碼_1___

___HTMLTAG_217__HTMLTAG_218___2.2 機密客戶端___HTMLTAG_219__HTMLTAG_220___
<p>客戶端有能力保護客戶端機密－通常是伺服器端應用程式。 </p>
<ul>
___HTMLTAG_224__HTMLTAG_225__HTMLTAG_226___功能_</strong>：具有客戶端金鑰或私鑰，在呼叫端點代幣時進行驗證__HTMLTAG_228__HTMLTAG_229___
___HTMLTAG_230__HTMLTAG_231__HTMLTAG_232___用例</strong>：伺服器端 Web 應用程式（Spring Boot、Django、.NET）、後端 API、服務到服務通訊____HTMLTAG_234__HTMLTAG_235___
___HTMLTAG_236__HTMLTAG_237__HTMLTAG_238___驗證流程</strong>：授權代碼、客戶端憑證或兩者___HTMLTAG_240__HTMLTAG_241___
___HTMLTAG_242__HTMLTAG_243__HTMLTAG_244___設定</strong>：<code>客戶端驗證</code> = ON___HTMLTAG_248__HTMLTAG_249___
</ul>

___預編碼_2___

___HTMLTAG_251__HTMLTAG_252___2.3 僅承載客戶端（舊版）___HTMLTAG_253__HTMLTAG_254___
<p>用戶端僅接收並驗證不記名令牌 - 不啟動登入流程。 </p>
<ul>
___HTMLTAG_258__HTMLTAG_259__HTMLTAG_260___功能_</strong>：無重定向 URI，僅驗證傳入令牌____HTMLTAG_262__HTMLTAG_263___
___HTMLTAG_264__HTMLTAG_265__HTMLTAG_266___用例</strong>：純API服務，微服務僅接受經過驗證的請求__HTMLTAG_268__HTMLTAG_269___
___HTMLTAG_270__HTMLTAG_271__HTMLTAG_272___注意</strong>：在 Keycloak 25+ 中，僅承載已被 <strong> 棄用__HTMLTAG_275___。相反，建立一個機密客戶端並僅啟用 <code>服務帳戶角色____HTMLTAG_277__HTMLTAG_278__HTMLTAG_279___
</ul>

<table>
<thead>
___HTMLTAG_283__HTMLTAG_284___特殊____HTMLTAG_285__HTMLTAG_286___公共____HTMLTAG_287__HTMLTAG_288___機密___HTMLTAG_289__HTMLTAG_290___ML僅承載（已棄用）___HTMLTAG_289__HTMLTAG_290___ML
</thead>
<tbody>
___HTMLTAG_295__HTMLTAG_296___客戶端驗證___HTMLTAG_297__HTMLTAG_298___關閉___HTMLTAG_299__HTMLTAG_300___開啟___HTMLTAG_301__HTMLTAG_302____300___開啟___HTMLTAG_301__HT__TAG_302_______*不適用___MLG_______________
___HTMLTAG_305__HTMLTAG_306___客戶機密___HTMLTAG_307__HTMLTAG_308___否___HTMLTAG_309__HTMLTAG_310___是___HTMLTAG_311__HTMLTAG_312______HTHTMLTAG_31314________
___HTMLTAG_315__HTMLTAG_316___可以初始化登入___HTMLTAG_317__HTMLTAG_318___是___HTMLTAG_319__HTMLTAG_320___是___HTMLTAG_321__HTMLTAG_3222________
___HTMLTAG_325__HTMLTAG_326___重定向 URI____HTMLTAG_327__HTMLTAG_328___必要___HTMLTAG_329__HTMLTAG_330___必要___HTMLTAG_331__HTMLTAG_332__________MLTAG____HTMLTAG_331__HTMLTAG_332__________
___HTMLTAG_335__HTMLTAG_336___PKCE____HTMLTAG_337__HTMLTAG_338___必需___HTMLTAG_339__HTMLTAG_340___可選___HTMLTAG_341__HTMLTAG_342______不適用___MLTAG____HTMLTAG_341__HTMLTAG_342______不適用___ML4G____43____43___________
___HTMLTAG_345__HTMLTAG_346___使用主要案例___HTMLTAG_347__HTMLTAG_348___SPA、移動___HTMLTAG_349__HTMLTAG_350___伺服器應用___HTMLTAG_351__HTMLTAG_352____APIHTML352_______4
</tbody>
</table>___HTMLTAG_357__HTMLTAG_358___3。透過管理控制台建立 OIDC 用戶端___HTMLTAG_359__HTMLTAG_360___

___HTMLTAG_361__HTMLTAG_362___3.1 建立客戶端的步驟___HTMLTAG_363__HTMLTAG_364___
<ol>
___HTMLTAG_366__HTMLTAG_367___存取 <strong>管理控制台</strong> → 選擇領域 → <strong>客戶端</strong> → <strong>建立客戶端___HTMLTAG_373__HTMLTAG_374__HTMLTAG_375___
___HTMLTAG_376__HTMLTAG_377__HTMLTAG_378___常規設定</strong>：</p>
<ul>
___HTMLTAG_382__HTMLTAG_383___客戶端類型</strong>：OpenID Connect</li>
___HTMLTAG_386__HTMLTAG_387___客戶端 ID</strong>： <code>my-app</code>（唯一識別碼）</li>
___HTMLTAG_392__HTMLTAG_393___名稱</strong>：我的應用程式（顯示名稱）</li>
___HTMLTAG_396__HTMLTAG_397___描述</strong>：客戶端描述</li>
___HTMLTAG_400__HTMLTAG_401___總是在使用者介面中顯示</strong>：關閉</li>
</ul>
</li>
___HTMLTAG_406__HTMLTAG_407__HTMLTAG_408___功能設定</strong>：</p>
<ul>
___HTMLTAG_412__HTMLTAG_413___客戶端驗證</strong>：開（機密）或關（公開）</li>
___HTMLTAG_416__HTMLTAG_417___授權</strong>：如果需要細粒度授權則開啟</li>
___HTMLTAG_420__HTMLTAG_421___驗證流程__HTMLTAG_422___：選擇適當的流程</li>
</ul>
</li>
___HTMLTAG_426__HTMLTAG_427__HTMLTAG_428___登入設定</strong>:</p>
<ul>
<li>根 URL、主頁 URL、有效重定向 URI、有效登出後重定向 URI、Web 來源</li>
</ul>
</li>
</ol>

___HTMLTAG_437__HTMLTAG_438___3.2 使用管理 CLI 建立客戶端___HTMLTAG_439__HTMLTAG_440___
___預編碼_3___

___HTMLTAG_441__HTMLTAG_442___3.3 使用管理 REST API 建立客戶端___HTMLTAG_443__HTMLTAG_444___
___預編碼_4___

___HTMLTAG_445__HTMLTAG_446___4。客戶端設定詳細資料___HTMLTAG_447__HTMLTAG_448___

___HTMLTAG_449__HTMLTAG_450___4.1 常規設定___HTMLTAG_451__HTMLTAG_452___
<table>
<thead>
___HTMLTAG_455__HTMLTAG_456___設定___HTMLTAG_457__HTMLTAG_458___說明___HTMLTAG_459__HTMLTAG_460___註解____HTMLTAG_461__HTMLTAG_462___
</thead>
<tbody>
___HTMLTAG_465__HTMLTAG_466___客戶端 ID___HTMLTAG_467__HTMLTAG_468___客戶端的唯一識別碼___HTMLTAG_469__HTMLTAG_470___建立後無法變更___HTMLTAG_471__HTMLTAG_472__</tr>HTMLTAG_471__HTMLTAG_472___
___HTMLTAG_473__HTMLTAG_474___名稱___HTMLTAG_475__HTMLTAG_476___顯示名稱___HTMLTAG_477__HTMLTAG_478___本地化金鑰支援：<code>__${我的客戶名稱}___HTMLTAG_48018420________
___HTMLTAG_483__HTMLTAG_484___說明___HTMLTAG_485__HTMLTAG_486___客戶端說明____HTMLTAG_487__HTMLTAG_488__HTMLTAG_489__HTMLTAG_490___
___HTMLTAG_491__HTMLTAG_492___總是顯示在使用者介面中___HTMLTAG_493__HTMLTAG_494___總是顯示在帳號控制台____HTMLTAG_495__HTMLTAG_496___用於內部工具____HTML_HT_497__HTMLTAG_498___
</tbody>
</table>___HTMLTAG_501__HTMLTAG_502___4.2 存取設定___HTMLTAG_503__HTMLTAG_504___
<table>
<thead>
___HTMLTAG_507__HTMLTAG_508___設定___HTMLTAG_509__HTMLTAG_510___說明___HTMLTAG_511__HTMLTAG_512___範例____HTMLTAG_513__HTMLTAG_514___
</thead>
<tbody>
___HTMLTAG_517__HTMLTAG_518___根 URL____HTMLTAG_519__HTMLTAG_520___根 URL，新增至相對 URL 之前____HTMLTAG_521__HTMLTAG_522__HTMLTAG_523__URL_1___>___MLGMLTAG_522__HTMLTAG_523__URL_1___>___MLGMLG
___HTMLTAG_526__HTMLTAG_527___首頁 URL____HTMLTAG_528__HTMLTAG_529___重新導向至客戶端時的預設 URL____HTMLTAG_530__HTMLTAG_531__HTMLTAG_532___/1板____MLTAG_MLTAG_531__HTMLTAG_532___/1板____MLTAG_MLTAG_531__HTMLTAG_532___/1板____MLTAG1_1353____413____
___HTMLTAG_536__HTMLTAG_537___有效重定向 URI___HTMLTAG_538__HTMLTAG_539___有效重定向 URI 清單（通配符 *）___HTMLTAG_540__HTMLTAG_541__HTMLTAG_542__URURURL_240__HTMLTAG_541__HTMLTAG_542__URURL_2____HT
___HTMLTAG_545__HTMLTAG_546___有效的登出後重定向 URI___HTMLTAG_547__HTMLTAG_548___有效的登出後____HTMLTAG_549__HTMLTAG_550__HTMLTAG_551___++MLHTMLTAG5312____ML____ML____ML（___MLHTTA___412____ML____
___HTMLTAG_555__HTMLTAG_556___Web 來源___HTMLTAG_557__HTMLTAG_558___CORS 允許的來源___HTMLTAG_559__HTMLTAG_560__HTMLTAG_561___+</code>MLTAG_562___ML_561_____541TAG_562___ML
___HTMLTAG_565__HTMLTAG_566___管理 URL____HTMLTAG_567__HTMLTAG_568___用於反向頻道操作的 URL____HTMLTAG_569__HTMLTAG_570____後端 URL（登出、政策執行）___MLMLTAGMLTAG172122______
</tbody>
</table>

___HTMLTAG_575__HTMLTAG_576___重定向 URI 的安全說明：___HTMLTAG_577__HTMLTAG_578___
<ul>
___HTMLTAG_580__HTMLTAG_581__HTMLTAG_582___絕不</strong>使用通配符<code>*</code>作為生產中的重定向URI -這是一個漏洞<strong>開啟重定向___HTMLTAG_587__HTMLTAG_588__HTMLTAG_589___
___HTMLTAG_590__HTMLTAG_591___聲明 <strong>正確__HTMLTAG_593___必要的重定向 URI____HTMLTAG_594__HTMLTAG_595___
___HTMLTAG_596__HTMLTAG_597___在生產中使用 HTTPS___HTMLTAG_598__HTMLTAG_599___
___HTMLTAG_600__HTMLTAG_601___避免在生產重定向 URI 中使用 localhost___HTMLTAG_602__HTMLTAG_603___
</ul>

___預編碼_5______HTMLTAG_605__HTMLTAG_606___4.3 能力設定___HTMLTAG_607__HTMLTAG_608___
<table>
<thead>
___HTMLTAG_611__HTMLTAG_612___設定____HTMLTAG_613__HTMLTAG_614___說明____HTMLTAG_615__HTMLTAG_616___何時開啟___HTMLTAG_617__HTMLTAG_618___
</thead>
<tbody>
___HTMLTAG_621__HTMLTAG_622___客戶端身份驗證___HTMLTAG_623__HTMLTAG_624___ON = 機密，OFF = 公開____HTMLTAG_625__HTMLTAG_626___對於伺服器應用程式為ON____HTMLTAG_627__HTMLTAG_626___對於伺服器應用程式為ON____HTMLTAG_6278___ML
___HTMLTAG_629__HTMLTAG_630___授權___HTMLTAG_631__HTMLTAG_632___細粒度授權 (UMA)___HTMLTAG_633__HTMLTAG_634___當需要基於資源的權限時__HTMLTAG_635__HTMLTAG_636___
___HTMLTAG_637__HTMLTAG_638___標準流程___HTMLTAG_639__HTMLTAG_640___授權程式碼流程____HTMLTAG_641__HTMLTAG_642___大多數案例____HTMLTAG_643__HTMLTAG_644______
___HTMLTAG_645__HTMLTAG_646___直接存取授權___HTMLTAG_647__HTMLTAG_648___資源擁有者密碼憑證___HTMLTAG_649__HTMLTAG_650___舊版應用程式（不建議）____HTMLTAG_651__1TAG_651_____
___HTMLTAG_653__HTMLTAG_654___隱式流程___HTMLTAG_655__HTMLTAG_656___隱式授予（已棄用）___HTMLTAG_657__HTMLTAG_658___不建議____HTMLTAG_659__HTMLTAG_660___
___HTMLTAG_661__HTMLTAG_662___服務帳戶角色____HTMLTAG_663__HTMLTAG_664___客戶端憑證授予___HTMLTAG_665__HTMLTAG_666___機器到機器驗證____HTMLTAG_667__HTMLTAG_668___
___HTMLTAG_669__HTMLTAG_670___OAuth 2.0 設備授權___HTMLTAG_671__HTMLTAG_672___設備程式碼流程___HTMLTAG_673__HTMLTAG_674___智慧型電視、CLI 工具____HTMLTAG_6751HTMLTAG_6767715____
___HTMLTAG_677__HTMLTAG_678___OIDC CIBA 撥款___HTMLTAG_679__HTMLTAG_680___客戶發起的反向頻道驗證____HTMLTAG_681__HTMLTAG_682___銀行、電信____HTMLTAG_683__HTMLTAG_683__4ML
</tbody>
</table>

___HTMLTAG_687__HTMLTAG_688___4.4 登入設定___HTMLTAG_689__HTMLTAG_690___
<table>
<thead>
___HTMLTAG_693__HTMLTAG_694___設定____HTMLTAG_695__HTMLTAG_696___說明___HTMLTAG_697__HTMLTAG_698___
</thead>
<tbody>
___HTMLTAG_701__HTMLTAG_702___登入主題___HTMLTAG_703__HTMLTAG_704___此客戶登入頁面的主題____HTMLTAG_705__HTMLTAG_706___
___HTMLTAG_707__HTMLTAG_708___需要同意____HTMLTAG_709__HTMLTAG_710___向使用者顯示同意畫面___HTMLTAG_711__HTMLTAG_712___
___HTMLTAG_713__HTMLTAG_714___在螢幕上顯示客戶___HTMLTAG_715__HTMLTAG_716___在同意畫面上顯示客戶名稱____HTMLTAG_717__HTMLTAG_718___
___HTMLTAG_719__HTMLTAG_720___客戶同意螢幕文字___HTMLTAG_721__HTMLTAG_722___同意的自訂文字___HTMLTAG_723__HTMLTAG_724___
</tbody>
</table>___HTMLTAG_727__HTMLTAG_728___4.5 登出設定___HTMLTAG_729__HTMLTAG_730___
<table>
<thead>
___HTMLTAG_733__HTMLTAG_734___設定___HTMLTAG_735__HTMLTAG_736___說明___HTMLTAG_737__HTMLTAG_738___
</thead>
<tbody>
___HTMLTAG_741__HTMLTAG_742___前端通道註銷___HTMLTAG_743__HTMLTAG_744___透過瀏覽器重定向註銷（OpenID Connect 前端通道註銷）___HTMLTAG_745__HTMLTAG_746___
___HTMLTAG_747__HTMLTAG_748___反向通道註銷 URL___HTMLTAG_749__HTMLTAG_750___從 Keycloak 接收反向通道註銷請求的 URL____HTMLTAG_751__HTMLTAG_752___
___HTMLTAG_753__HTMLTAG_754___需要反向通道註銷會話___HTMLTAG_755__HTMLTAG_756___在註銷令牌中包含會話 ID____HTMLTAG_757__HTMLTAG_758___
___HTMLTAG_759__HTMLTAG_760___反向通道註銷撤銷離線會話____HTMLTAG_761__HTMLTAG_762___登出時撤銷離線會話____HTMLTAG_763__HTMLTAG_764___
</tbody>
</table>

___預編碼_6___

___HTMLTAG_767__HTMLTAG_768___5。 OIDC 驗證流程詳細資訊___HTMLTAG_769__HTMLTAG_770___

___HTMLTAG_771__HTMLTAG_772___5.1 授權程式碼流程___HTMLTAG_773__HTMLTAG_774___
<p>這是 <strong>__HTMLTAG_777___ 對於大多數用例最推薦的流程。使用者被重定向到 Keycloak 登入頁面。身份驗證成功後，Keycloak 傳回授權碼，客戶端用該代碼交換令牌。 </p>

___預編碼_7___

___HTMLTAG_779__HTMLTAG_780___請求授權代碼：___HTMLTAG_781__HTMLTAG_782___
___預編碼_8___

___HTMLTAG_783__HTMLTAG_784___兌換代幣代碼：___HTMLTAG_785__HTMLTAG_786___
___預編碼_9___

___HTMLTAG_787__HTMLTAG_788___回應：___HTMLTAG_789__HTMLTAG_790___
___預編碼_10___

___HTMLTAG_791__HTMLTAG_792___5.2 授權程式碼流程 + PKCE___HTMLTAG_793__HTMLTAG_794___
<p>PKCE（代碼交換證明金鑰，RFC 7636）保護授權碼流免受授權碼攔截攻擊。 <strong>公共客戶必需</strong>和<strong>建議所有客戶</strong>.</p>

___HTMLTAG_801__HTMLTAG_802___運作原理：___HTMLTAG_803__HTMLTAG_804___
<ol>
___HTMLTAG_806__HTMLTAG_807___客戶端建立 <code>code_verifier</code>（隨機字串 43-128 個字元）___HTMLTAG_810__HTMLTAG_811___
___HTMLTAG_812__HTMLTAG_813___客戶端屬性 <code>code_challenge</code> = Base64URL(SHA256(<code>code_verifier___HTMLTAG_SHA256(<code>code_verifier</code>)1HTHTMLTAMLTAG8182___
___HTMLTAG_820__HTMLTAG_821___在授權請求中傳送 <code>code_challenge</code>___HTMLTAG_824__HTMLTAG_825___
___HTMLTAG_826__HTMLTAG_827___在令牌請求中傳送 <code>code_verifier_</code> — 透過雜湊和比較進行 Keycloak 驗證___HTMLTAG_830__HTMLTAG_831___
</ol>___HTMLTAG_833__HTMLTAG_834___Keycloak 中的 PKCE 設定：___HTMLTAG_835__HTMLTAG_836___
<p>到客戶端 → 選項卡 <strong>進階</strong> → <strong>進階設定</strong>:</p>
<table>
<thead>
___HTMLTAG_845__HTMLTAG_846___設定____HTMLTAG_847__HTMLTAG_848___值____HTMLTAG_849__HTMLTAG_850___說明____HTMLTAG_851__HTMLTAG_852___
</thead>
<tbody>
___HTMLTAG_855__HTMLTAG_856___代碼交換代碼質詢方法的證明密鑰___HTMLTAG_857__HTMLTAG_858___S256___HTMLTAG_859__HTMLTAG_860___使用 SHA-256 的強制 MLTAG_859__HTMLTAG_860___使用 SHA-256 的強制 MLTAG_859__HTMLTAG_860___使用 SHA-256 的強制
___HTMLTAG_863__HTMLTAG_864__HTMLTAG_865__HTMLTAG_866___plain___HTMLTAG_867__HTMLTAG_868____純文字PKCE（不安全）____HTMLTAG_869__HTMLTAG_8870___
___HTMLTAG_871__HTMLTAG_872__HTMLTAG_873__HTMLTAG_874___（空白）___HTMLTAG_875__HTMLTAG_876___可選 PKCE___HTMLTAG_877__HTMLTAG_878___
</tbody>
</table>

___HTMLTAG_881__HTMLTAG_882___PKCE 流程：___HTMLTAG_883__HTMLTAG_884___
<pre><code># 1. Tạo code_verifier (client-side)
code_verifier="dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"

# 2. Tạo code_challenge = Base64URL(SHA256(code_verifier))
code_challenge="E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM"

# 3. Authorization request với code_challenge
GET /realms/my-company/protocol/openid-connect/auth?
  response_type=code&
  client_id=my-spa-app&
  redirect_uri=http://localhost:3000/callback&
  scope=openid profile email&
  state=random-state&
  code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM&
  code_challenge_method=S256

# 4. Token request với code_verifier
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=authorization_code&
code=AUTH_CODE&
client_id=my-spa-app&
redirect_uri=http://localhost:3000/callback&
code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk</code></pre>

___HTMLTAG_885__HTMLTAG_886___5.3 隱式流（已棄用）___HTMLTAG_887__HTMLTAG_888___
___HTMLTAG_889__HTMLTAG_890___ 不應使用。 </strong> OAuth 2.0 安全最佳目前實務 (RFC 9700) 建議不要使用隱含串流，因為令牌是透過 URL 片段傳回的，很容易透過瀏覽器歷史記錄或引用標頭竊取。 </p>

___HTMLTAG_893__HTMLTAG_894___替換：</strong> 對所有客戶端（包括 SPA）使用授權代碼流 + PKCE。 </p>

<p>如果被迫支援舊系統：</p>
<pre><code># Bật Implicit Flow trong client settings
Capability Config → Implicit flow: ON

# Request (trả về token trực tiếp)
GET /realms/my-company/protocol/openid-connect/auth?
  response_type=id_token token&
  client_id=legacy-app&
  redirect_uri=http://localhost:3000/callback&
  scope=openid profile&
  state=random-state&
  nonce=random-nonce</code></pre>

___HTMLTAG_899__HTMLTAG_900___5.4 用戶端憑證流程___HTMLTAG_901__HTMLTAG_902___
<p>用於 <strong>機器對機器身份驗證</strong> — 無使用者互動。客戶端使用自己的憑證進行自身身份驗證。 </p>

___HTMLTAG_907__HTMLTAG_908___用例：___HTMLTAG_909__HTMLTAG_910___
<ul>
___HTMLTAG_912__HTMLTAG_913___微服務呼叫微服務___HTMLTAG_914__HTMLTAG_915___
___HTMLTAG_916__HTMLTAG_917___後端批次作業___HTMLTAG_918__HTMLTAG_919___
___HTMLTAG_920__HTMLTAG_921___排程任務需要 API 存取權限___HTMLTAG_922__HTMLTAG_923___
___HTMLTAG_924__HTMLTAG_925___CI/CD 管道___HTMLTAG_926__HTMLTAG_927___
</ul>

___HTMLTAG_929__HTMLTAG_930___設定：___HTMLTAG_931__HTMLTAG_932___
<ol>
___HTMLTAG_934__HTMLTAG_935___建立 <strong>機密客戶端</strong>（<code>客戶端驗證</code> = ON）___HTMLTAG_940__HTMLTAG_941___1
___HTMLTAG_942__HTMLTAG_943___在功能設定中啟用 <strong>服務帳號角色</strong>___HTMLTAG_946__HTMLTAG_947___
___HTMLTAG_948__HTMLTAG_949___將角色指派給服務帳戶：客戶端→ <strong>服務帳戶角色</strong>選項卡___HTMLTAG_952__HTMLTAG_953___
</ol>

<pre><code># Request token
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
client_id=my-service&
client_secret=MY_CLIENT_SECRET&
scope=openid

# Response
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "expires_in": 300,
  "token_type": "Bearer",
  "not-before-policy": 0,
  "scope": "openid profile email"
}
# Lưu ý: KHÔNG có refresh_token và id_token trong Client Credentials flow</code></pre>

___HTMLTAG_955__HTMLTAG_956___5.5 設備授權 (RFC 8628)___HTMLTAG_957__HTMLTAG_958___
<p>適用於有輸入限制的設備 — 智慧電視、物聯網設備、CLI 工具。使用者使用代碼在另一台裝置（手機、筆記型電腦）上進行身份驗證。 </p>___HTMLTAG_961__HTMLTAG_962___設定：___HTMLTAG_963__HTMLTAG_964___
<ol>
___HTMLTAG_966__HTMLTAG_967___客戶端 → 功能設定 → 啟用 <strong>OAuth 2.0 設備授權___HTMLTAG_969__HTMLTAG_970__HTMLTAG_971___
___HTMLTAG_972__HTMLTAG_973___領域設定 → 設定 <strong>OAuth 設備代碼</strong> 生命週期（預設 600 秒）___HTMLTAG_976__HTMLTAG_977______
</ol>

<pre><code># Bước 1: Device request — lấy device code và user code
POST /realms/my-company/protocol/openid-connect/auth/device
Content-Type: application/x-www-form-urlencoded

client_id=my-tv-app

# Response
{
  "device_code": "GmRhmhcxhwAzkoEqiMEg_DnyEysNkuNhszIySk9eS",
  "user_code": "WDJB-MJHT",
  "verification_uri": "http://localhost:8080/realms/my-company/device",
  "verification_uri_complete": "http://localhost:8080/realms/my-company/device?user_code=WDJB-MJHT",
  "expires_in": 600,
  "interval": 5
}

# Bước 2: Hiển thị user_code và verification_uri trên TV/device
# User truy cập verification_uri trên phone/laptop, nhập user_code, đăng nhập

# Bước 3: Device polling — kiểm tra xem user đã xác thực chưa
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:device_code&
client_id=my-tv-app&
device_code=GmRhmhcxhwAzkoEqiMEg_DnyEysNkuNhszIySk9eS

# Response khi user chưa xác thực
{
  "error": "authorization_pending",
  "error_description": "The authorization request is still pending"
}

# Response khi user đã xác thực — nhận tokens
{
  "access_token": "eyJhbGciOi...",
  "refresh_token": "eyJhbGciOi...",
  "id_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "expires_in": 300
}</code></pre>

___HTMLTAG_979__HTMLTAG_980___5.6 CIBA — 用戶端啟動的反向通道驗證 (OIDC CIBA)___HTMLTAG_981__HTMLTAG_982___
<p>CIBA 允許客戶端發起身份驗證，而無需透過瀏覽器重新導向使用者__HTMLTAG_985___。相反，Keycloak 透過另一個管道（推播通知、簡訊、電子郵件）向用戶發送身份驗證請求。 </p>

___HTMLTAG_987__HTMLTAG_988___用例：___HTMLTAG_989__HTMLTAG_990___
<ul>
___HTMLTAG_992__HTMLTAG_993__HTMLTAG_994___銀行</strong>：銷售點透過行動應用驗證付款____HTMLTAG_996__HTMLTAG_997___
___HTMLTAG_998__HTMLTAG_999__HTMLTAG_1000___電信</strong>：基於 SIM 卡的驗證___HTMLTAG_1002__HTMLTAG_1003___
___HTMLTAG_1004__HTMLTAG_1005__HTMLTAG_1006___呼叫中心</strong>：代理透過電話驗證客戶____HTMLTAG_1008__HTMLTAG_1009___
</ul>

___HTMLTAG_1011__HTMLTAG_1012___CIBA 設定：___HTMLTAG_1013__HTMLTAG_1014___
<ol>
___HTMLTAG_1016__HTMLTAG_1017___客戶端 → 功能設定 → 啟用 <strong>OIDC CIBA 資助___HTMLTAG_1019__HTMLTAG_1020__HTMLTAG_1021___
___HTMLTAG_1022__HTMLTAG_1023___領域設定 → 驗證 → 選項卡 <strong>CIBA 政策</strong>:___HTMLTAG_1026__HTMLTAG</strong>:___HTMLTAG_1026__HTMLTAG_1027___
</ol>

<table>
<thead>
___HTMLTAG_1031__HTMLTAG_1032___設定___HTMLTAG_1033__HTMLTAG_1034___說明____HTMLTAG_1035__HTMLTAG_1036___預設值____HTMLTAG_1037__HTMLTAG_1038___MLTAG_1037__HTMLTAG_1038___
</thead>
<tbody>
___HTMLTAG_1041__HTMLTAG_1042___反向通道令牌傳送模式___HTMLTAG_1043__HTMLTAG_1044___輪詢、ping 或推送____HTMLTAG_1045__HTMLTAG_1046___輪詢、___HTMLTAG_104788___MLTAG1048___
___HTMLTAG_1049__HTMLTAG_1050___過期時間___HTMLTAG_1051__HTMLTAG_1052___驗證請求過期時間____HTMLTAG_1053__HTMLTAG_1054___120____HTMLTAG_1055__HTMLTA___
___HTMLTAG_1057__HTMLTAG_1058___時間間隔___HTMLTAG_1059__HTMLTAG_1060___輪詢請求之間的時間間隔____HTMLTAG_1061__HTMLTAG_1062___5秒_</td>MLTAG_1063___
___HTMLTAG_1065__HTMLTAG_1066___驗證請求的使用者提示___HTMLTAG_1067__HTMLTAG_1068___使用者提示類型：login_hint、login _hint_token、id_token_hint___HTMLTAG_1069__HTMLTAG_1070___login_hint___HTMLTAG_1071__HTMLTAG_1072___
</tbody>
</table>

<pre><code># CIBA authentication request
POST /realms/my-company/protocol/openid-connect/ext/ciba/auth
Content-Type: application/x-www-form-urlencoded

client_id=my-pos-app&
client_secret=CLIENT_SECRET&
scope=openid&
login_hint=user@example.com&
binding_message=Xac+nhan+thanh+toan+500k

# Response
{
  "auth_req_id": "eyJhbGciOiJSUzI1NiIs...",
  "expires_in": 120,
  "interval": 5
}

# Polling for token (giống Device Auth)
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=urn:openid:params:grant-type:ciba&
client_id=my-pos-app&
client_secret=CLIENT_SECRET&
auth_req_id=eyJhbGciOiJSUzI1NiIs...</code></pre>

___HTMLTAG_1075__HTMLTAG_1076___自訂 CIBA 驗證頻道提供者：___HTMLTAG_1077__HTMLTAG_1078___
<p>預設 Keycloak 在內部使用 <code>CIBALoginUserResolver</code>。若要傳送實際的推播通知，您需要實作 SPI 自訂：</p>
<pre><code>// Implement interface CIBAAuthenticationChannelProvider
public class MyCIBAChannelProvider implements CIBAAuthenticationChannelProvider {

    @Override
    public void requestAuthentication(
        CIBALoginUserResolver.CIBALoginUser user,
        AuthenticationChannelRequest request) {
        // Gửi push notification đến user's device
        // binding_message: "Xác nhận thanh toán 500k"
        pushNotificationService.send(
            user.getDeviceToken(),
            request.getBindingMessage(),
            request.getAuthResultUrl()
        );
    }

    @Override
    public boolean verifyAuthentication(String authResultId) {
        // Verify kết quả từ user's device
        return authResultStore.isApproved(authResultId);
    }
}</code></pre>

___HTMLTAG_1083__HTMLTAG_1084___6。將 OIDC 用戶端與 React 整合 (SPA)___HTMLTAG_1085__HTMLTAG_1086______HTMLTAG_1087__HTMLTAG_1088___6.1 使用 keycloak-js 適配器___HTMLTAG_1089__HTMLTAG_1090___
<p>Keycloak 為 SPA 提供官方 JavaScript 適配器：</p>

<pre><code># Cài đặt
npm install keycloak-js</code></pre>

___HTMLTAG_1093__HTMLTAG_1094___為 React 設定 Keycloak 用戶端：___HTMLTAG_1095__HTMLTAG_1096___
<pre><code>Client ID: my-react-app
Client authentication: OFF (public client)
Valid redirect URIs: http://localhost:3000/*
Valid post logout redirect URIs: http://localhost:3000/*
Web origins: http://localhost:3000
PKCE Code Challenge Method: S256</code></pre>

___HTMLTAG_1097__HTMLTAG_1098___在React中初始化Keycloak：___HTMLTAG_1099__HTMLTAG_1100___
<pre><code>// src/keycloak.ts
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "my-company",
  clientId: "my-react-app",
});

export default keycloak;</code></pre>

___預編碼_20___

<pre><code>// src/App.tsx
import Keycloak from "keycloak-js";

interface AppProps {
  keycloak: Keycloak;
}

function App({ keycloak }: AppProps) {
  const handleLogout = () => {
    keycloak.logout({
      redirectUri: window.location.origin,
    });
  };

  const callApi = async () => {
    // Tự động gắn Bearer token vào API calls
    const response = await fetch("http://localhost:8081/api/data", {
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    &lt;div&gt;
      &lt;h1&gt;Welcome, {keycloak.tokenParsed?.preferred_username}&lt;/h1&gt;
      &lt;p&gt;Email: {keycloak.tokenParsed?.email}&lt;/p&gt;
      &lt;p&gt;Roles: {keycloak.tokenParsed?.realm_access?.roles?.join(", ")}&lt;/p&gt;
      &lt;button onClick={callApi}&gt;Call API&lt;/button&gt;
      &lt;button onClick={handleLogout}&gt;Logout&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>

___HTMLTAG_1101__HTMLTAG_1102___6.2 使用react-oidc-context（取代keycloak-js）___HTMLTAG_1103__HTMLTAG_1104___
<p>另一個選項是使用基於 <code>oidc-client-ts</code> 的函式庫 <code>react-oidc-context</code> — 它不依賴特定於 10101370707372_U +107___m

<pre><code>npm install react-oidc-context oidc-client-ts</code></pre>

<pre><code>// src/main.tsx
import { AuthProvider } from "react-oidc-context";

const oidcConfig = {
  authority: "http://localhost:8080/realms/my-company",
  client_id: "my-react-app",
  redirect_uri: "http://localhost:3000/callback",
  post_logout_redirect_uri: "http://localhost:3000",
  scope: "openid profile email",
  automaticSilentRenew: true,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  &lt;AuthProvider {...oidcConfig}&gt;
    &lt;App /&gt;
  &lt;/AuthProvider&gt;
);</code></pre>

___預編碼_24___

___HTMLTAG_1111__HTMLTAG_1112___7。將 OIDC 用戶端與 Spring Boot 整合___HTMLTAG_1113__HTMLTAG_1114___

___HTMLTAG_1115__HTMLTAG_1116___7.1 Spring Boot OAuth2 資源伺服器___HTMLTAG_1117__HTMLTAG_1118___
<p>將 Spring Boot 設定為 <strong>資源伺服器</strong> — 驗證來自 Keycloak 的 JWT 令牌：</p>

___預編碼_25___

<pre><code># application.yml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: http://localhost:8080/realms/my-company
          jwk-set-uri: http://localhost:8080/realms/my-company/protocol/openid-connect/certs</code></pre>

___預編碼_27___

___HTMLTAG_1123__HTMLTAG_1124___7.2 Spring Boot OAuth2 用戶端（伺服器端登入）___HTMLTAG_1125__HTMLTAG_1126___
<p>將 Spring Boot 設定為 <strong>OAuth2 用戶端</strong> — 伺服器端登入流程：</p>

___預編碼_28___

___預編碼_29___

___HTMLTAG_1131__HTMLTAG_1132___Spring Boot OAuth2 用戶端的 Keycloak 用戶端設定：___HTMLTAG_1133__HTMLTAG_1134___
<pre><code>Client ID: my-backend-app
Client authentication: ON (confidential)
Valid redirect URIs: http://localhost:8081/login/oauth2/code/keycloak
Backchannel logout URL: http://localhost:8081/logout/connect/back-channel/keycloak
Web origins: http://localhost:8081</code></pre>

___HTMLTAG_1135__HTMLTAG_1136___8。進階客戶端設定___HTMLTAG_1137__HTMLTAG_1138___

___HTMLTAG_1139__HTMLTAG_1140___8.1 進階選項卡___HTMLTAG_1141__HTMLTAG_1142___
<p>客戶端的 <strong>進階</strong> 標籤中的進階設定：</p><table>
<thead>
___HTMLTAG_1149__HTMLTAG_1150___設定___HTMLTAG_1151__HTMLTAG_1152___說明____HTMLTAG_1153__HTMLTAG_1154___建議值____HTMLTAG_1155__HTMLTAG_1156___MLTAG_1155__HTMLTAG_1156___
</thead>
<tbody>
___HTMLTAG_1159__HTMLTAG_1160___存取權杖生命週期___HTMLTAG_1161__HTMLTAG_1162___覆寫此客戶端的領域級代幣生命週期____HTMLTAG_1163__HTMLTAG_1164________=使用領域。
___HTMLTAG_1167__HTMLTAG_1168___客戶端會話空閒___HTMLTAG_1169__HTMLTAG_1170___覆寫客戶端會話空閒逾時____HTMLTAG_1171__HTMLTAG_1172_______使用領域____HTMLTAG_1171__HTMLTAG_1172______=使用領域等級____14GML
___HTMLTAG_1175__HTMLTAG_1176___客戶端會話最大值___HTMLTAG_1177__HTMLTAG_1178___覆寫客戶端最大生命週期____HTMLTAG_1179__HTMLTAG_1180_____2=使用領域等級____HTMLTAG_1180__18
___HTMLTAG_1183__HTMLTAG_1184___客戶端脫機會話空閒____HTMLTAG_1185__HTMLTAG_1186___覆蓋脫機會話空閒逾時____HTMLTAG_1187__HTMLTAG_1188______ML=使用領域等級。
___HTMLTAG_1191__HTMLTAG_1192___客戶端脫機會話最大值___HTMLTAG_1193__HTMLTAG_1194___覆蓋脫機會話最大生命週期____HTMLTAG_1195__HTMLTAG_1196___留空=使用等級____HTMLTAG_1195__HTMLTAG_1196___留空=使用層級____198GML
___HTMLTAG_1199__HTMLTAG_1200___PKCE 程式碼質詢方法___HTMLTAG_1201__HTMLTAG_1202___所需的 PKCE 方法____HTMLTAG_1203__HTMLTAG_1204___S256___MLTAG_1203__HT20120120___
___HTMLTAG_1207__HTMLTAG_1208___需要推送授權請求___HTMLTAG_1209__HTMLTAG_1210___所需的 PAR (RFC 9126)___HTMLTAG_1211__HTMLTAG_1212______對於高安全性應用程式啟用___HTMLTAG1212___
___HTMLTAG_1215__HTMLTAG_1216___ACR 到發言者映射___HTMLTAG_1217__HTMLTAG_1218___映射 ACR 值 → 確保等級___HTMLTAG_1219__HTMLTAG_1220___
</tbody>
</table>

___HTMLTAG_1225__HTMLTAG_1226___8.2 憑證標籤（機密客戶端）___HTMLTAG_1227__HTMLTAG_1228___
<p>管理客戶端憑證：</p>
<ul>
___HTMLTAG_1232__HTMLTAG_1233__HTMLTAG_1234___客戶端驗證器</strong>：客戶端 ID 與金鑰（預設）、簽章 JWT (client_secret_jwt)、帶私鑰電話 JWT (private_
___HTMLTAG_1238__HTMLTAG_1239__HTMLTAG_1240___客戶端金鑰</strong>：如果外洩則重新產生___HTMLTAG_1242__HTMLTAG_1243___
___HTMLTAG_1244__HTMLTAG_1245__HTMLTAG_1246___註冊存取權杖</strong>：用於動態用戶端註冊___HTMLTAG_1248__HTMLTAG_1249___
</ul>___HTMLTAG_1251__HTMLTAG_1252___8.3 服務帳戶角色標籤___HTMLTAG_1253__HTMLTAG_1254___
<p>將角色指派給服務帳戶（客戶端憑證流程）：</p>
<ol>
___HTMLTAG_1258__HTMLTAG_1259___開啟客戶端 → 標籤 <strong>服務帳戶角色___HTMLTAG_1261__HTMLTAG_1262__HTMLTAG_1263___
___HTMLTAG_1264__HTMLTAG_1265___點選 <strong>指派角色___HTMLTAG_1267__HTMLTAG_1268__HTMLTAG_1269___
___HTMLTAG_1270__HTMLTAG_1271___選擇要指派的領域角色或客戶端角色___HTMLTAG_1272__HTMLTAG_1273___
</ol>

<pre><code># Ví dụ gán role bằng Admin CLI
# Lấy service account user ID
SERVICE_ACCOUNT_ID=$(bin/kcadm.sh get clients/$CLIENT_UUID/service-account-user \
  -r my-company --fields id --format csv --noquotes)

# Gán realm role
bin/kcadm.sh add-roles -r my-company \
  --uusername service-account-my-service \
  --rolename admin

# Gán client role
bin/kcadm.sh add-roles -r my-company \
  --uusername service-account-my-service \
  --cclientid target-client \
  --rolename manage-users</code></pre>

___HTMLTAG_1275__HTMLTAG_1276___9。練習___HTMLTAG_1277__HTMLTAG_1278___

___HTMLTAG_1279__HTMLTAG_1280___實驗 1：為 React SPA 建立公共客戶端___HTMLTAG_1281__HTMLTAG_1282___
<ol>
___HTMLTAG_1284__HTMLTAG_1285___建立客戶端 <code>react-spa-lab</code> 並使用 <code>HTMLU​​D</code> = ___HTML
___HTMLTAG_1292__HTMLTAG_1293___設定：有效重定向 URI = ___HTMLTAG_1294__URL_3___>，Web 來源 = ___HTMLTAG_1295__URL_4___>___HTMLTAG_1296__HTMLTAG_1297___
___HTMLTAG_1298__HTMLTAG_1299___啟用 PKCE：進階 → PKCE 程式碼質詢方法 = <code>S256___HTMLTAG_1301__HTMLTAG_1302__HTMLTAG_1303___
___HTMLTAG_1304__HTMLTAG_1305___建立React應用程序，安裝<code>keycloak-js</code>，整合登入/登出___HTMLTAG_1308__HTMLTAG_1309___，整合登入/登出___HTMLTAG_1308__HTMLTAG_1309___，整合登入/登出___HTMLTAG_1308__HTMLTAG_1309___
___HTMLTAG_1310__HTMLTAG_1311___在瀏覽器開發工具 → 應用程式 → 網路標籤中驗證令牌___HTMLTAG_1312__HTMLTAG_1313___
</ol>

___HTMLTAG_1315__HTMLTAG_1316___實驗 2：為 Spring Boot API 建立機密客戶端___HTMLTAG_1317__HTMLTAG_1318___
<ol>
___HTMLTAG_1320__HTMLTAG_1321___建立客戶端 <code>spring-api-lab</code> 並使用 ___HTMLTAG_13241321325ML____1325____]
___HTMLTAG_1328__HTMLTAG_1329___啟用 <code>服務帳號角色___HTMLTAG_1331__HTMLTAG_1332__HTMLTAG_1333___
___HTMLTAG_1334__HTMLTAG_1335___將角色 <code>admin</code> 指派給服務帳戶___HTMLTAG_1338__HTMLTAG_1339___
___HTMLTAG_1340__HTMLTAG_1341___使用 <code>spring-boot-starter-oauth2-resource-server___HTMLTAG_1343__HTMLTAG_1344__HTMLTAG_1345___ 建立 Spring Boot 專案
___HTMLTAG_1346__HTMLTAG_1347___實作端點 <code>/api/me</code> 從 JWT 回傳使用者資訊___HTMLTAG_1350__HTMLTAG_1351___
___HTMLTAG_1352__HTMLTAG_1353___使用 <code>curl</code> 傳送不記名權杖___HTMLTAG_1356__HTMLTAG_1357___ 進行測試
</ol>___HTMLTAG_1359__HTMLTAG_1360___實驗 3：客戶端憑證流程___HTMLTAG_1361__HTMLTAG_1362___
<ol>
___HTMLTAG_1364__HTMLTAG_1365___建立客戶端 <code>batch-worker</code>僅客戶端憑證流程___HTMLTAG_1368__HTMLTAG_1369___
___HTMLTAG_1370__HTMLTAG_1371___透過<code>curl___HTMLTAG_1373__HTMLTAG_1374__HTMLTAG_1375___取得令牌
___HTMLTAG_1376__HTMLTAG_1377___使用剛剛檢索到的令牌呼叫 API 端點___HTMLTAG_1378__HTMLTAG_1379___
___HTMLTAG_1380__HTMLTAG_1381___透過 <a href="https://jwt.io">jwt.io</a> 檢查令牌內容（僅用於開發）___HTMLTAG_1384__HTMLTAG_1385___
</ol>

___HTMLTAG_1387__HTMLTAG_1388___實驗 4：設備授權流程___HTMLTAG_1389__HTMLTAG_1390___
<ol>
___HTMLTAG_1392__HTMLTAG_1393___建立公用客戶端 <code>cli-tool</code> 啟用裝置授權___HTMLTAG_1396__HTMLTAG_1397___
___HTMLTAG_1398__HTMLTAG_1399___使用 <code>curl</code> 模擬設備流程：</p>
<ul>
<li>請求設備代碼</li>
<li>在瀏覽器上開啟驗證URI，輸入使用者代碼__HTMLTAG_1407___
<li>輪詢令牌</li>
</ul>
</li>
___HTMLTAG_1412__HTMLTAG_1413___驗證收到的令牌___HTMLTAG_1414__HTMLTAG_1415___
</ol>

<pre><code># Script test Device Authorization Flow
#!/bin/bash
REALM=my-company
CLIENT_ID=cli-tool
KC_URL=http://localhost:8080

# Bước 1: Request device code
RESPONSE=$(curl -s -X POST \
  "$KC_URL/realms/$REALM/protocol/openid-connect/auth/device" \
  -d "client_id=$CLIENT_ID")

DEVICE_CODE=$(echo $RESPONSE | jq -r '.device_code')
USER_CODE=$(echo $RESPONSE | jq -r '.user_code')
VERIFY_URI=$(echo $RESPONSE | jq -r '.verification_uri_complete')
INTERVAL=$(echo $RESPONSE | jq -r '.interval')

echo "========================================"
echo "Mở URL sau trên browser:"
echo "$VERIFY_URI"
echo "Hoặc truy cập: $(echo $RESPONSE | jq -r '.verification_uri')"
echo "Nhập code: $USER_CODE"
echo "========================================"

# Bước 2: Polling for token
while true; do
  sleep $INTERVAL
  TOKEN_RESPONSE=$(curl -s -X POST \
    "$KC_URL/realms/$REALM/protocol/openid-connect/token" \
    -d "grant_type=urn:ietf:params:oauth:grant-type:device_code" \
    -d "client_id=$CLIENT_ID" \
    -d "device_code=$DEVICE_CODE")

  ERROR=$(echo $TOKEN_RESPONSE | jq -r '.error // empty')
  if [ -z "$ERROR" ]; then
    echo "Xác thực thành công!"
    echo "Access Token: $(echo $TOKEN_RESPONSE | jq -r '.access_token' | head -c 50)..."
    break
  elif [ "$ERROR" = "authorization_pending" ]; then
    echo "Đang chờ user xác thực..."
  elif [ "$ERROR" = "slow_down" ]; then
    INTERVAL=$((INTERVAL + 5))
    echo "Slow down, tăng interval lên ${INTERVAL}s"
  else
    echo "Error: $ERROR"
    break
  fi
done</code></pre>