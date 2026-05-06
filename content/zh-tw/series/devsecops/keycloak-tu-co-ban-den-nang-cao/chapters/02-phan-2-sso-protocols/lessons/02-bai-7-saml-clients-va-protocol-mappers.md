---
id: 019d8b30-b107-7001-c001-e0c5f8100107
title: 第 7 課：SAML 用戶端和協定映射器
slug: bai-7-saml-clients-va-protocol-mappers
description: 建立和設定 SAML 2.0 用戶端、SAML 綁定（POST、重定向、Artifact）、斷言配置、XML 簽章和加密、實體描述符匯入、IDP 啟動登入。 OIDC 和 SAML 的協定映射器、輕量級存取權杖、成對主題識別碼。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 7
section_title: 第 2 部分：SSO 協定 - OpenID Connect 和 SAML
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7385" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7385)"/>

  <!-- Decorations -->
  <g>
    <circle cx="809" cy="37" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1018" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="727" cy="215" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="936" cy="44" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="645" cy="133" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="207" x2="1100" y2="287" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="237" x2="1050" y2="307" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1043.3730669589463,186 1043.3730669589463,228 1007,249 970.6269330410536,228 970.6269330410536,186 1007,165" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 7 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 課：SAML 用戶端與協定映射器__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：SSO 協定 - OpenID Connect 和 SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_65__HTMLTAG_66___1。 Keycloak 中的 SAML 2.0 概述___HTMLTAG_67__HTMLTAG_68___

<p>SAML 2.0（安全斷言標記語言）是一種基於 XML 的身份驗證協議，在企業中廣泛使用，尤其是在與遺留系統、SaaS 應用程式（Salesforce、ServiceNow、AWS）或政府組織整合時。 </p>___HTMLTAG_71__HTMLTAG_72___SAML 2.0 與 OpenID Connect___HTMLTAG_73__HTMLTAG_74___
<table>
<thead>
___HTMLTAG_77__HTMLTAG_78___功能____HTMLTAG_79__HTMLTAG_80___SAML 2.0___HTMLTAG_81__HTMLTAG_82___OpenID 連線___HTMLTAG_83__HTMLTAG_84______
</thead>
<tbody>
___HTMLTAG_87__HTMLTAG_88___格式____HTMLTAG_89__HTMLTAG_90___XML___HTMLTAG_91__HTMLTAG_92___JSON (JWT)____HTMLTAG_93__HTMLTAG_94___
___HTMLTAG_95__HTMLTAG_96___傳輸___HTMLTAG_97__HTMLTAG_98____HTTP 重定向、POST、工件____HTMLTAG_99__HTMLTAG_100____HTTP REST____HTMLTAG_101__HTMLTAG_102___
___HTMLTAG_103__HTMLTAG_104___令牌___HTMLTAG_105__HTMLTAG_106___SAML 斷言 (XML)____HTMLTAG_107__HTMLTAG_108___JWT___HTMLTAG_109__HTMLTAG_110___
___HTMLTAG_111__HTMLTAG_112___大小___HTMLTAG_113__HTMLTAG_114___較大（XML 詳細）____HTMLTAG_115__HTMLTAG_116___緊緻（JSON）____HTMLTAG_117__HTMLTAG_118___
___HTMLTAG_119__HTMLTAG_120___移動支援___HTMLTAG_121__HTMLTAG_122___差（繁重的 XML 解析）____HTMLTAG_123__HTMLTAG_124___HT（JSON 原生）____HTMLTAG_125__HTTAG_125__1TAG_125__2
___HTMLTAG_127__HTMLTAG_128___主要用例___HTMLTAG_129__HTMLTAG_130___企業單一登入、舊系統___HTMLTAG_131__HTMLTAG_132___現代網路/行動應用____HTMLTAG_133__HTMLTAG_134______
___HTMLTAG_135__HTMLTAG_136___複雜性___HTMLTAG_137__HTMLTAG_138___高___HTMLTAG_139__HTMLTAG_140___較低____HTMLTAG_141__HTMLTAG_142___
___HTMLTAG_143__HTMLTAG_144___註銷____HTMLTAG_145__HTMLTAG_146___SLO（單點註銷）___HTMLTAG_147__HTMLTAG_148___RP-啟動、反向通道、前通道____HTMLTAG_149__HTMLTAG____MLTAG____
</tbody>
</table>

___HTMLTAG_153__HTMLTAG_154___何時使用 SAML？ ___HTMLTAG_155__HTMLTAG_156___
<ul>
___HTMLTAG_158__HTMLTAG_159___與需要 SAML 的 SaaS 應用程式整合（Salesforce、Google Workspace、AWS）___HTMLTAG_160__HTMLTAG_161___
___HTMLTAG_162__HTMLTAG_163___與僅支援 SAML 的 IdP 或 SP 關聯___HTMLTAG_164__HTMLTAG_165___
___HTMLTAG_166__HTMLTAG_167___需遵守政府組織標準___HTMLTAG_168__HTMLTAG_169___
___HTMLTAG_170__HTMLTAG_171___從 ADFS 系統遷移，Shibboleth___HTMLTAG_172__HTMLTAG_173___
</ul>___HTMLTAG_175__HTMLTAG_176___SAML 術語___HTMLTAG_177__HTMLTAG_178___
<table>
<thead>
___HTMLTAG_181__HTMLTAG_182___術語____HTMLTAG_183__HTMLTAG_184___說明____HTMLTAG_185__HTMLTAG_186___OIDC 等效項____HTMLTAG_187__HTMLTAG_188___
</thead>
<tbody>
___HTMLTAG_191__HTMLTAG_192___身分提供者 (IdP)___HTMLTAG_193__HTMLTAG_194___使用者驗證器 (Keycloak)___HTMLTAG_195__HTMLTAG_196___OpenID 提供者 (OP)___HTMLTAG_197__HTMLTAG_196___OpenID 提供者 (OP)___HTMLTAG_197__HTML
___HTMLTAG_199__HTMLTAG_200___服務提供者 (SP)____HTMLTAG_201__HTMLTAG_202___身份驗證請求方（應用程式）____HTMLTAG_203__HTMLTAG_204______依賴 (RP)____HTMLTAG_2051_MLTAG_206___
___HTMLTAG_207__HTMLTAG_208___斷言___HTMLTAG_209__HTMLTAG_210___包含身份驗證資訊的XML文件____HTMLTAG_211__HTMLTAG_212___ID令牌____HTMLTAG_213__HTMLTAG_214___
___HTMLTAG_215__HTMLTAG_216___AuthnRequest___HTMLTAG_217__HTMLTAG_218___來自 SP → IdP 的身份驗證請求____HTMLTAG_219__HTMLTAG_220___授權請求請求請求項
___HTMLTAG_223__HTMLTAG_224___ACS URL____HTMLTAG_225__HTMLTAG_226___斷言消費者服務 URL____HTMLTAG_227__HTMLTAG_228___重定向 URI____HTMLTAG_229__HTMLTAG_230___
___HTMLTAG_231__HTMLTAG_232___實體 ID___HTMLTAG_233__HTMLTAG_234___SP/IdP 的唯一識別碼____HTMLTAG_235__HTMLTAG_236___客戶端 ID/頒發者____HTMLTAG_23723MLTAG_237213G_23721
___HTMLTAG_239__HTMLTAG_240___元資料___HTMLTAG_241__HTMLTAG_242___描述端點、憑證的XML___HTMLTAG_243__HTMLTAG_244___已知的設定___HTMLTAG_245__HTMLTAG_246__</tr>__HTMLTAG_246__</tr>
___HTMLTAG_247__HTMLTAG_248___名稱ID___HTMLTAG_249__HTMLTAG_250___斷言中的使用者識別碼___HTMLTAG_251__HTMLTAG_252___子聲明___HTMLTAG_253__HTMLTAG_254___
___HTMLTAG_255__HTMLTAG_256___屬性宣告___HTMLTAG_257__HTMLTAG_258___斷言中的使用者屬性___HTMLTAG_259__HTMLTAG_260___JWT 中的宣告____HTMLTAG_261__HTMLTAG_262_____
</tbody>
</table>

___HTMLTAG_265__HTMLTAG_266___2。建立 SAML 2.0 客戶端___HTMLTAG_267__HTMLTAG_268___

___HTMLTAG_269__HTMLTAG_270___2.1 透過管理控制台建立___HTMLTAG_271__HTMLTAG_272___
<ol>
___HTMLTAG_274__HTMLTAG_275___存取 <strong>管理控制台</strong> → 選擇領域 → <strong>客戶端</strong> → <strong>建立客戶端___HTMLTAG_281__HTMLTAG_282__HTMLTAG_283___
___HTMLTAG_284__HTMLTAG_285__HTMLTAG_286___常規設定</strong>：</p>
<ul>
___HTMLTAG_290__HTMLTAG_291___客戶端類型</strong>：SAML</li>
___HTMLTAG_294__HTMLTAG_295___客戶端 ID</strong>：基於 URL 的實體 ID，例如 ___HTMLTAG_297__URL_1___></li>
___HTMLTAG_299__HTMLTAG_300___名稱</strong>：我的 SAML 應用程式</li>
</ul>
</li>
___HTMLTAG_305__HTMLTAG_306___點選<strong>下一步</strong>並<strong>儲存___HTMLTAG_310__HTMLTAG_311__HTMLTAG_312___
</ol>___HTMLTAG_314__HTMLTAG_315___2.2 從實體描述子（元資料）匯入___HTMLTAG_316__HTMLTAG_317___
<p>建立 SAML 用戶端的最快方法 — 從服務提供者匯入 XML 元資料：</p>
<ol>
___HTMLTAG_321__HTMLTAG_322___存取 <strong>客戶端</strong> → <strong>導入客戶端___HTMLTAG_326__HTMLTAG_327__HTMLTAG___導入客戶端___HTMLTAG_326__HTMLTAG_327__HTMLTAG_328___
___HTMLTAG_329__HTMLTAG_330___上傳 XML 元資料檔案或貼上元資料 URL___HTMLTAG_331__HTMLTAG_332___
___HTMLTAG_333__HTMLTAG_334___自動填入 Keycloak：實體 ID、ACS URL、SLO URL、憑證、綁定___HTMLTAG_335__HTMLTAG_336___
</ol>

___HTMLTAG_338__HTMLTAG_339___服務提供者 XML 元資料範例：___HTMLTAG_340__HTMLTAG_341___
___預編碼_0___

___HTMLTAG_342__HTMLTAG_343___2.3 取得 Keycloak IdP 元資料___HTMLTAG_344__HTMLTAG_345___
<p>服務提供者需要 Keycloak 元資料 (IdP) 進行設定。元資料 URL：</p>
___預編碼_1___

<p>元資料包括：實體 ID、SSO 端點、SLO 端點、簽章/加密憑證。 </p>

___HTMLTAG_350__HTMLTAG_351___3。 SAML 用戶端設定詳細資料___HTMLTAG_352__HTMLTAG_353______HTMLTAG_354__HTMLTAG_355___3.1 設定標籤___HTMLTAG_356__HTMLTAG_357___
<table>
<thead>
___HTMLTAG_360__HTMLTAG_361___設定____HTMLTAG_362__HTMLTAG_363___說明____HTMLTAG_364__HTMLTAG_365___建議值____HTMLTAG_366__HTMLTAG_367___
</thead>
<tbody>
___HTMLTAG_370__HTMLTAG_371___客戶端 ID（實體 ID）___HTMLTAG_372__HTMLTAG_373___SAML 實體 ID — SP 的唯一識別碼___HTMLTAG_374__HTMLTAG_375___URL 格式：HTML]___HTMLTAG_374__HTMLTAG_375___URL 格式：HTMLTAV_37617676_________
___HTMLTAG_379__HTMLTAG_380___名稱___HTMLTAG_381__HTMLTAG_382___顯示名稱____HTMLTAG_383__HTMLTAG_384___應用程式名稱____HTMLTAG_385__HTMLTAG_386___
___HTMLTAG_387__HTMLTAG_388___需要客戶端簽章___HTMLTAG_389__HTMLTAG_390___SP 必須簽署 AuthnRequest____HTMLTAG_391__HTMLTAG_392___ON（生產）____HTMLTAG_3939ML
___HTMLTAG_395__HTMLTAG_396___強制 POST 綁定___HTMLTAG_397__HTMLTAG_398___對回應強制 POST 綁定____HTMLTAG_399__HTMLTAG_400___ON___HTMLTAG_4HTMLTAG_399__HTMLTAG_400___ON___HTMLTAG_401__21G_401__2
___HTMLTAG_403__HTMLTAG_404___前端頻道註銷___HTMLTAG_405__HTMLTAG_406___透過瀏覽器重定向註銷___HTMLTAG_407__HTMLTAG_408___ON___HTMLTAG_409__HTMLTAG_410___
___HTMLTAG_411__HTMLTAG_412___強制名稱 ID 格式___HTMLTAG_413__HTMLTAG_414___必要的名稱 ID 特定格式____HTMLTAG_415__HTMLTAG_416___可選____HTMLTAG_417__HTMLTAG_418___
___HTMLTAG_419__HTMLTAG_420___姓名 ID 格式___HTMLTAG_421__HTMLTAG_422___姓名 ID 格式___HTMLTAG_423__HTMLTAG_424___電子郵件或永久____HTMLTAG_425__HTMLTAG_426___
___HTMLTAG_427__HTMLTAG_428___包含 AuthnStatement___HTMLTAG_429__HTMLTAG_430___在斷言中包含 AuthnStatement___HTMLTAG_431__HTMLTAG_432___ON___HTMLTAG_433__HTMLTAG_433___
___HTMLTAG_435__HTMLTAG_436___簽署文件____HTMLTAG_437__HTMLTAG_438___簽署整個 SAML 回應____HTMLTAG_439__HTMLTAG_440___ON___HTMLTAG_441__HTMLTAG_442___
___HTMLTAG_443__HTMLTAG_444___簽署斷言___HTMLTAG_445__HTMLTAG_446___在回應內簽署斷言___HTMLTAG_447__HTMLTAG_448___ON（建議）___HTMLTAG_449__HTMLTAG_450___
</tbody>
</table>

___HTMLTAG_453__HTMLTAG_454___3.2 SAML 綁定___HTMLTAG_455__HTMLTAG_456___
<p>SAML 支援多種綁定 — 如何在 SP 和 IdP 之間傳輸 SAML 訊息：</p><table>
<thead>
___HTMLTAG_461__HTMLTAG_462___綁定____HTMLTAG_463__HTMLTAG_464___說明____HTMLTAG_465__HTMLTAG_466_______HTMLTAG_467__HTMLTAG_468___
</thead>
<tbody>
___HTMLTAG_471__HTMLTAG_472__HTMLTAG_473___HTTP-POST___HTMLTAG_474__HTMLTAG_475__HTMLTAG_476___透過 HTML 表單自動提交發送的訊息___HTMLTAG_4777__HTMLTAG_47881U478_____HT
___HTMLTAG_481__HTMLTAG_482__HTMLTAG_483____HTTP-重定向___HTMLTAG_484__HTMLTAG_485__HTMLTAG_486___透過 URL 查詢參數發送的訊息____HTMLTAG_487__HTMLTAGquest488（___MLA411A_____HT
___HTMLTAG_491__HTMLTAG_492__HTMLTAG_493___工件___HTMLTAG_494__HTMLTAG_495__HTMLTAG_496___僅發送工件參考，SP通過反向通道獲取斷言____HTMLTAG_497__HTMLTAG_498____MLTAG145____MLTAG_497__HTMLTAG_498___V
</tbody>
</table>

___HTMLTAG_503__HTMLTAG_504___在客戶端設定中設定綁定：___HTMLTAG_505__HTMLTAG_506___
<table>
<thead>
___HTMLTAG_509__HTMLTAG_510___設定____HTMLTAG_511__HTMLTAG_512___說明___HTMLTAG_513__HTMLTAG_514___
</thead>
<tbody>
___HTMLTAG_517__HTMLTAG_518___主 SAML 處理 URL___HTMLTAG_519__HTMLTAG_520___所有 SAML 綁定的通用 URL___HTMLTAG_521__HTMLTAG_522___
___HTMLTAG_523__HTMLTAG_524___斷言消費者服務 POST 綁定 URL___HTMLTAG_525__HTMLTAG_526___POST 綁定的 ACS URL___HTMLTAG_527__HTMLTAG_528___
___HTMLTAG_529__HTMLTAG_530___斷言消費者服務重定向綁定 URL___HTMLTAG_531__HTMLTAG_532____用於重定向綁定的 ACS URL____HTMLTAG_533__HTMLTAG_534___
___HTMLTAG_535__HTMLTAG_536___斷言消費者服務工件綁定 URL___HTMLTAG_537__HTMLTAG_538___工件綁定的 ACS URL___HTMLTAG_539__HTMLTAG_540___
___HTMLTAG_541__HTMLTAG_542___註銷服務 POST 綁定 URL___HTMLTAG_543__HTMLTAG_544___POST 綁定的 SLO URL___HTMLTAG_545__HTMLTAG_546___
___HTMLTAG_547__HTMLTAG_548___註銷服務重定向綁定 URL___HTMLTAG_549__HTMLTAG_550___用於重定向綁定的 SLO URL____HTMLTAG_551__HTMLTAG_552___
___HTMLTAG_553__HTMLTAG_554___註銷服務工件綁定 URL___HTMLTAG_555__HTMLTAG_556___工件綁定的 SLO URL___HTMLTAG_557__HTMLTAG_558___
</tbody>
</table>

___預編碼_2___

___HTMLTAG_561__HTMLTAG_562___工件綁定詳細資料：___HTMLTAG_563__HTMLTAG_564___
<p>Artifact 綁定與 POST/Redirect 不同 — Keycloak 不透過瀏覽器傳送整個斷言，而是只傳送 <strong>artifact</strong> （參考 ID）。然後 SP 直接呼叫（反向通道）Keycloak 以取得實際斷言。 </p>

___預編碼_3___

<p>工件綁定更安全，因為斷言不通過瀏覽器 - 當斷言包含敏感資料時很有用。 </p>

___HTMLTAG_571__HTMLTAG_572___3.3 XML 簽章與加密___HTMLTAG_573__HTMLTAG_574______HTMLTAG_575__HTMLTAG_576___簽章設定：___HTMLTAG_577__HTMLTAG_578___
<table>
<thead>
___HTMLTAG_581__HTMLTAG_582___設定____HTMLTAG_583__HTMLTAG_584___說明___HTMLTAG_585__HTMLTAG_586___
</thead>
<tbody>
___HTMLTAG_589__HTMLTAG_590___簽章演算法___HTMLTAG_591__HTMLTAG_592___XML簽章演算法：RSA_SHA256（建議）、RSA_SHA512、DSA_SHA1___HTMLTAG_593__HTMLTAG_594___
___HTMLTAG_595__HTMLTAG_596___SAML 簽章金鑰名稱___HTMLTAG_597__HTMLTAG_598___簽章中的金鑰名稱：KEY_ID、CERT_SUBJECT、NONE___HTMLTAG_599__HTMLTAG_600___
___HTMLTAG_601__HTMLTAG_602___規範化方法___HTMLTAG_603__HTMLTAG_604___XML 規範化：獨佔（建議）___HTMLTAG_605__HTMLTAG_606___
</tbody>
</table>

___HTMLTAG_609__HTMLTAG_610___加密設定：___HTMLTAG_611__HTMLTAG_612___
<p>啟用 <strong>Encrypt Assertions</strong> 來加密斷言 — 只有具有對應私鑰的 SP 才能解密：</p>
<ul>
___HTMLTAG_618__HTMLTAG_619___在選項卡<strong>密鑰___HTMLTAG_623__HTMLTAG_624__HTMLTAG_625___上傳SP的<strong>加密憑證</strong>
___HTMLTAG_626__HTMLTAG_627___加密演算法：AES128、AES256（建議）___HTMLTAG_628__HTMLTAG_629___
</ul>

___預編碼_4___

___HTMLTAG_631__HTMLTAG_632___3.4 選項卡鍵___HTMLTAG_633__HTMLTAG_634___
<p>管理 SAML 用戶端的憑證：</p>
<ul>
___HTMLTAG_638__HTMLTAG_639__HTMLTAG_640___簽章金鑰</strong>：SP 用於簽署 AuthnRequest 的憑證 — 用於驗證的 Keycloak___HTMLTAG_642__HTMLTAG_643___
___HTMLTAG_644__HTMLTAG_645__HTMLTAG_646___加密金鑰</strong>：Keycloak 用於加密斷言的憑證 — SP 使用私鑰解密____HTMLTAG_648__HTMLTAG_649___
</ul>

<p>從 PEM、JKS 或 PKCS12 檔案匯入憑證：</p>
___預編碼_5___

___HTMLTAG_653__HTMLTAG_654___4。 SAML 斷言設定___HTMLTAG_655__HTMLTAG_656___

___HTMLTAG_657__HTMLTAG_658___4.1 名稱 ID 格式___HTMLTAG_659__HTMLTAG_660___
<p>Name 決定Keycloak如何在斷言中傳送使用者識別碼的ID：</p><table>
<thead>
___HTMLTAG_665__HTMLTAG_666___格式____HTMLTAG_667__HTMLTAG_668___說明____HTMLTAG_669__HTMLTAG_670_______HTMLTAG_671__HTMLTAG_672___
</thead>
<tbody>
___HTMLTAG_675__HTMLTAG_676__HTMLTAG_677___urn:oasis:names:tc:SAML:1.1:nameid-format:email位址____HTMLTAG _678__HTMLTAG_679__HTMLTAG_680___電子郵件地址___HTMLTAG_681__HTMLTAG_682___熱門大多數___HTMLTAG_683__HTMLTAG_684___
___HTMLTAG_685__HTMLTAG_686__HTMLTAG_687___urn:oasis:names:tc:SAML:2.0:nameid-format:persistent____HTMLTAG_688__HTMLTAG_689__HTMLTAG_690___每個 SP 的唯一持久ID___HTMLTAG_691__HTMLTAG_692___不想透露電子郵件___HTMLTAG_693__HTMLTAG_694___
___HTMLTAG_695__HTMLTAG_696__HTMLTAG_697___urn:oasis:names:tc:SAML:2.0:nameid-format:transient____HTMLTAG_698__HTMLTAG_699__HTMLTAG_700___HTMLTAG_698__HTMLTAG_699__HTMLTAG_700___HT ID，更改時間會話___HTMLTAG_701__HTMLTAG_702___隱私敏感___HTMLTAG_703__HTMLTAG_704___
___HTMLTAG_705__HTMLTAG_706__HTMLTAG_707___urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified____HTMLTAG_708__HTMLTAG_709__HTMLTAG_710___使用者名稱或 Keycloak使用者ID___HTMLTAG_711__HTMLTAG_712___彈性___HTMLTAG_713__HTMLTAG_714___
</tbody>
</table>

___HTMLTAG_717__HTMLTAG_718___4.2 斷言壽命___HTMLTAG_719__HTMLTAG_720___
<p>領域設定中的設定 → <strong>令牌</strong> 選項卡：</p>
<ul>
___HTMLTAG_726__HTMLTAG_727__HTMLTAG_728___斷言壽命</strong>：有效斷言時間（預設5分鐘，建議保持較短）___HTMLTAG_730__HTMLTAG_731___
___HTMLTAG_732__HTMLTAG_733__HTMLTAG_734___不早於</strong>：在此時間之前斷言無效（時脈偏差容差）___HTMLTAG_736__HTMLTAG_737___
</ul>

___HTMLTAG_739__HTMLTAG_740___4.3 SAML 斷言範例___HTMLTAG_741__HTMLTAG_742___
___預編碼_6___

___HTMLTAG_743__HTMLTAG_744___5。 IDP 發起的登入（未經請求的回應）___HTMLTAG_745__HTMLTAG_746___

<p>在正常流程（SP 發起）中，使用者存取 SP → SP 重新導向至 IdP → IdP 驗證 → 重新導向至 SP。透過 <strong>IDP 啟動的登入</strong>，使用者從 IdP (Keycloak) 啟動，無需先通過 SP。 </p>

___HTMLTAG_751__HTMLTAG_752___IDP 啟動的登入設定___HTMLTAG_753__HTMLTAG_754___
<ol>
___HTMLTAG_756__HTMLTAG_757___開啟 SAML 用戶端 → 選項卡 <strong>進階___HTMLTAG_759__HTMLTAG_760__HTMLTAG_761___
___HTMLTAG_762__HTMLTAG_763___查找 <strong>IDP-Initiated SSO URL 名稱</strong>：輸入 URL 名稱，例如 <code>my-app___HTMLTAG_767__HTMLTAG_768686869_____
___HTMLTAG_770__HTMLTAG_771___IDP 啟動登入的 URL 為：___HTMLTAG_772__HTMLTAG_773___
</ol>

___預編碼_7___

___HTMLTAG_775__HTMLTAG_776___安全注意事項：</strong> IDP 發起的登入有 CSRF 風險 — 斷言沒有 <code>InResponseTo</code> 屬性。僅在產品需要時使用（某些 SaaS 應用程式僅支援 IDP 啟動）。 </p>___HTMLTAG_781__HTMLTAG_782___IDP 啟動的設定___HTMLTAG_783__HTMLTAG_784___
<table>
<thead>
___HTMLTAG_787__HTMLTAG_788___設定____HTMLTAG_789__HTMLTAG_790___說明___HTMLTAG_791__HTMLTAG_792___
</thead>
<tbody>
___HTMLTAG_795__HTMLTAG_796___IDP 啟動的 SSO URL 名稱___HTMLTAG_797__HTMLTAG_798___IDP 啟動的登入 URL 的最後部分____HTMLTAG_799__HTMLTAG_800___
___HTMLTAG_801__HTMLTAG_802___IDP 啟動的 SSO 中繼狀態___HTMLTAG_803__HTMLTAG_804___傳送到 SP 的預設中繼狀態___HTMLTAG_805__HTMLTAG_806___
___HTMLTAG_807__HTMLTAG_808___斷言消費者服務 POST 綁定 URL___HTMLTAG_809__HTMLTAG_810___SP 接收斷言的 URL___HTMLTAG_811__HTMLTAG_812___
</tbody>
</table>

___HTMLTAG_815__HTMLTAG_816___6。協定映射器___HTMLTAG_817__HTMLTAG_818___

<p>協定映射器決定 <strong>令牌/斷言中包含哪些資訊</strong>。它們將使用者屬性、角色和元資料轉換為聲明 (OIDC) 或屬性 (SAML)。 </p>

___HTMLTAG_823__HTMLTAG_824___6.1 基礎知識___HTMLTAG_825__HTMLTAG_826___
<p>協定映射器可以在兩個層級新增：</p>
<ul>
___HTMLTAG_830__HTMLTAG_831__HTMLTAG_832___客戶端層級</strong>：映射器專門套用於該客戶端（客戶端→客戶端範圍→專用範圍）___HTMLTAG_834__HTMLTAG_835___
___HTMLTAG_836__HTMLTAG_837__HTMLTAG_838___客戶端範圍等級</strong>：映射器適用於使用該範圍的所有客戶端____HTMLTAG_840__HTMLTAG_841___
</ul>

<p>每個映射器都有通用設定：</p>
<table>
<thead>
___HTMLTAG_847__HTMLTAG_848___設定____HTMLTAG_849__HTMLTAG_850___說明___HTMLTAG_851__HTMLTAG_852___
</thead>
<tbody>
___HTMLTAG_855__HTMLTAG_856___名稱___HTMLTAG_857__HTMLTAG_858___映射器名稱（用於管理）___HTMLTAG_859__HTMLTAG_860___
___HTMLTAG_861__HTMLTAG_862___映射器類型____HTMLTAG_863__HTMLTAG_864___映射器類型（使用者屬性、硬編碼聲明...）___HTMLTAG_865__HTMLTAG_866___
___HTMLTAG_867__HTMLTAG_868___新增至 ID 令牌___HTMLTAG_869__HTMLTAG_870___新增至 ID 令牌 (OIDC)___HTMLTAG_871__HTMLTAG_872___
___HTMLTAG_873__HTMLTAG_874___加入到存取權杖____HTMLTAG_875__HTMLTAG_876___加入到存取權杖 (OIDC)___HTMLTAG_877__HTMLTAG_878___
___HTMLTAG_879__HTMLTAG_880___新增至使用者資訊___HTMLTAG_881__HTMLTAG_882___新增至使用者資訊回應 (OIDC)____HTMLTAG_883__HTMLTAG_884___
___HTMLTAG_885__HTMLTAG_886___加入到令牌自省___HTMLTAG_887__HTMLTAG_888___加入到令牌自省回應___HTMLTAG_889__HTMLTAG_890___
___HTMLTAG_891__HTMLTAG_892___新增至輕量級存取權杖___HTMLTAG_893__HTMLTAG_894___新增至輕量級存取權杖___HTMLTAG_895__HTMLTAG_896___
</tbody>
</table>

___HTMLTAG_899__HTMLTAG_900___6.2 OIDC 協定映射器___HTMLTAG_901__HTMLTAG_902___

___HTMLTAG_903__HTMLTAG_904___使用者屬性映射器</strong> — 將使用者屬性對應到令牌宣告：</p>
___預編碼_8___

<p>JWT 結果：</p>
___預編碼_9______HTMLTAG_909__HTMLTAG_910___使用者屬性映射器</strong> — 映射內建使用者屬性（使用者名稱、電子郵件、名字、姓氏）：</p>
___預編碼_10___

___HTMLTAG_913__HTMLTAG_914___使用者會話註解映射器</strong> — 將會話資料對應到令牌：</p>
<pre><code>Mapper Type: User Session Note
Name: client-ip-mapper
User Session Note: clientAddress    # hoặc clientHost, identity_provider, etc.
Token Claim Name: client_ip
Claim JSON Type: String
Add to access token: ON</code></pre>

<p>可用會話註解：<code>clientAddress</code>、<code>clientHost</code>、<code>identity_provider</code>、<code>identity_provider</code>、___ <code>identity_provider_identity</code>.</p>

___HTMLTAG_927__HTMLTAG_928___硬編碼宣告映射器</strong> — 新增具有固定值的宣告：</p>
<pre><code>Mapper Type: Hardcoded claim
Name: environment-mapper
Token Claim Name: env
Claim value: production
Claim JSON Type: String
Add to access token: ON</code></pre>

___HTMLTAG_931__HTMLTAG_932___群組成員映射器</strong> — 將使用者的群組清單新增至令牌：</p>
<pre><code>Mapper Type: Group Membership
Name: groups-mapper
Token Claim Name: groups
Full group path: ON                 # /parent/child hoặc chỉ child
Add to ID token: ON
Add to access token: ON</code></pre>

<p>結果：</p>
<pre><code>{
  "groups": ["/Engineering", "/Engineering/Backend"]
}</code></pre>

___HTMLTAG_937__HTMLTAG_938___受眾映射器</strong> — 新增受眾以存取權杖：</p>
<pre><code>Mapper Type: Audience
Name: api-audience
Included Client Audience: my-api-service   # Client ID của resource server
Add to access token: ON</code></pre>

<p>結果：</p>
<pre><code>{
  "aud": ["my-api-service", "account"]
}</code></pre>

___HTMLTAG_943__HTMLTAG_944___腳本映射器</strong> — 使用 JavaScript 的自訂邏輯：</p>
<pre><code>Mapper Type: Script Mapper
Name: custom-role-mapper
Script:
  // Combine realm roles và client roles thành flat list
  var roles = [];

  // Realm roles
  var realmRoles = user.getRealmRoleMappingsStream();
  realmRoles.forEach(function(role) {
    roles.push(role.getName());
  });

  // Client roles cho client cụ thể
  var client = keycloakSession.clients()
    .getClientByClientId(realm, 'my-app');
  if (client) {
    var clientRoles = user.getClientRoleMappingsStream(client);
    clientRoles.forEach(function(role) {
      roles.push('client:' + role.getName());
    });
  }

  exports = Java.to(roles, "java.lang.String[]");

Token Claim Name: all_roles
Claim JSON Type: JSON
Multivalued: ON</code></pre>

___HTMLTAG_947__HTMLTAG_948___注意</strong>：腳本映射器使用 Nashorn JavaScript 引擎。在 Keycloak 24+ 中，腳本映射器需要部署為自訂 JAR 提供程序，而不是內聯腳本。請參閱 Keycloak 文件中的 <code>部署腳本</code>。 </p>

___HTMLTAG_953__HTMLTAG_954___6.3 SAML 協定映射器___HTMLTAG_955__HTMLTAG_956___

<p>SAML 映射器與 OIDC 類似，但輸出是 SAML 屬性而不是 JWT 宣告：</p>

___HTMLTAG_959__HTMLTAG_960___使用者屬性映射器 (SAML)：___HTMLTAG_961__HTMLTAG_962___
<pre><code>Mapper Type: User Attribute
Name: department-saml
User Attribute: department
Friendly Name: Department
SAML Attribute Name: urn:oid:2.16.840.1.113730.3.1.241  # hoặc friendly name
SAML Attribute NameFormat: URI Reference                  # URI, Basic, Unspecified</code></pre>

___HTMLTAG_963__HTMLTAG_964___角色清單映射器 (SAML)：___HTMLTAG_965__HTMLTAG_966___
<pre><code>Mapper Type: Role list
Name: role-list
Role attribute name: Role
Friendly Name: Roles
SAML Attribute NameFormat: Basic
Single Role Attribute: ON    # Tất cả roles trong 1 attribute (khuyến nghị)
                              # OFF = mỗi role 1 attribute riêng</code></pre>

___HTMLTAG_967__HTMLTAG_968___硬體編碼屬性映射器 (SAML)：___HTMLTAG_969__HTMLTAG_970___
___預編碼_20___

___HTMLTAG_971__HTMLTAG_972___SAML 屬性名稱格式：___HTMLTAG_973__HTMLTAG_974___
<table>
<thead>
___HTMLTAG_977__HTMLTAG_978___格式____HTMLTAG_979__HTMLTAG_980___說明____HTMLTAG_981__HTMLTAG_982___範例____HTMLTAG_983__HTMLTAG_984______
</thead>
<tbody>
___HTMLTAG_987__HTMLTAG_988___基本____HTMLTAG_989__HTMLTAG_990___簡單名稱___HTMLTAG_991__HTMLTAG_992__H TMLTAG_993___電子郵件</code>，<code>名字___HTMLTAG_996__HTMLTAG_997__HTMLTAG_998___
___HTMLTAG_999__HTMLTAG_1000___URI 參考____HTMLTAG_1001__HTMLTAG_1002___OID格式、標題標準___HTMLTAG_1003__HTMLTAG_1004__HTMLTAG_1005___urn:oid:0.9.2342.19200300.100.1.3___HTMLTAG_1006__HTMLTAG_1007___MLTAG_1007___MLTAG_1007___
___HTMLTAG_1009__HTMLTAG_1010___未指定____HTMLTAG_1011__HTMLTAG_1012___未指定格式___HTMLTAG_1013__HTMLTAG_1014___可選___HTMLTAG_1015__HTMLTAG_1016___
</tbody>
</table>

___HTMLTAG_1019__HTMLTAG_1020___7。輕量級存取權杖___HTMLTAG_1021__HTMLTAG_1022___<p>預設情況下，Keycloak 存取權杖包含許多聲明（realm_access、resource_access、電子郵件、名稱、preferred_username，...）。輕量級存取令牌透過僅保留基本聲明來減少令牌大小。 </p>

___HTMLTAG_1025__HTMLTAG_1026___7.1 為什麼我們需要輕量級存取權杖？ ___HTMLTAG_1027__HTMLTAG_1028___
<ul>
___HTMLTAG_1030__HTMLTAG_1031__HTMLTAG_1032___減少頻寬</strong>：較小的令牌 = 透過 HTTP 標頭傳送速度更快____HTMLTAG_1034__HTMLTAG_1035___
___HTMLTAG_1036__HTMLTAG_1037__HTMLTAG_1038___減少敏感資訊_</strong>：存取權杖經常傳送到許多服務，不應包含太多 PII____HTMLTAG_1040__HTMLTAG_1041___
___HTMLTAG_1042__HTMLTAG_1043__HTMLTAG_1044___安全改進</strong>：資源伺服器使用令牌自省在需要時取得完整聲明____HTMLTAG_1046__HTMLTAG_1047___
</ul>

___HTMLTAG_1049__HTMLTAG_1050___7.2 設定輕量級存取權杖____HTMLTAG_1051__HTMLTAG_1052___
<p>預設情況下，協定映射器具有選項 <strong>新增至輕量級存取權杖</strong>。使用：</p>
<ol>
___HTMLTAG_1058__HTMLTAG_1059___對於每個映射器，關閉 <strong>新增至存取權杖___HTMLTAG_1061_令牌中不需要的宣告中的輕量級___HTMLTAG_1062__HTMLTAG_1063___
___HTMLTAG_1064__HTMLTAG_1065___使用客戶端策略（請參閱下一篇文章）為特定客戶端強制執行輕量級令牌____HTMLTAG_1066__HTMLTAG_1067___
___HTMLTAG_1068__HTMLTAG_1069___資源伺服器呼叫令牌自省端點以取得完整聲明：___HTMLTAG_1070__HTMLTAG_1071___
</ol>

<pre><code># Token Introspection — lấy full claims
POST /realms/my-company/protocol/openid-connect/token/introspect
Content-Type: application/x-www-form-urlencoded

token=ACCESS_TOKEN&
client_id=my-resource-server&
client_secret=CLIENT_SECRET

# Response chứa full claims
{
  "active": true,
  "sub": "user-id",
  "email": "user@example.com",
  "realm_access": { "roles": ["admin", "user"] },
  "resource_access": { ... },
  ...
}</code></pre>

___HTMLTAG_1073__HTMLTAG_1074___8。成對主題標識符___HTMLTAG_1075__HTMLTAG_1076___

<p>預設情況下，Keycloak 使用 <strong> 公共主題識別碼 </strong> — <code>sub</code> 聲明值對於所有客戶端都是相同的。這允許客戶端跨服務關聯用戶。 </p>

___HTMLTAG_1083__HTMLTAG_1084___成對主題識別碼</strong>為每個客戶端建立不同的<code>sub</code> — 防止跨服務使用者追蹤。 </p>

___HTMLTAG_1089__HTMLTAG_1090___8.1 成對識別碼配置___HTMLTAG_1091__HTMLTAG_1092___
<ol>
___HTMLTAG_1094__HTMLTAG_1095___新增協定映射器類型 <strong>成對主體識別碼</strong>到客戶端或客戶端範圍___HTMLTAG_1098__HTMLTAG_1099___
___HTMLTAG_1100__HTMLTAG_1101___設定：___HTMLTAG_1102__HTMLTAG_1103___
</ol>

<pre><code>Mapper Type: Pairwise subject identifier
Name: pairwise-sub
Salt: random-salt-value-keep-secret   # Salt dùng để hash, PHẢI giữ bí mật
Pairwise Subject Identifier Algorithm: SHA-256
Sector Identifier URI: (tùy chọn)     # Nhóm clients share cùng sub</code></pre>

___HTMLTAG_1105__HTMLTAG_1106___結果：___HTMLTAG_1107__HTMLTAG_1108___
<pre><code># Client A nhận sub:
{ "sub": "hashed-value-for-client-a" }

# Client B nhận sub khác:
{ "sub": "hashed-value-for-client-b" }

# Cùng 1 user nhưng sub khác nhau → không thể correlate</code></pre>

___HTMLTAG_1109__HTMLTAG_1110___磁區識別碼 URI：___HTMLTAG_1111__HTMLTAG_1112___
<p>如果您希望一組用戶端共用相同的 <code>sub</code>（例如，相同服務的 Web 應用程式和行動應用程式），請使用 <strong>磁區識別碼 URI</strong>。此 URI 指向一個 JSON 數組，其中包含同一扇區中客戶端的重定向 URI：</p>

___預編碼_24___

___HTMLTAG_1119__HTMLTAG_1120___9。將 SAML 與 Spring Boot 整合___HTMLTAG_1121__HTMLTAG_1122___<p>使用 <code>spring-security-saml2-service-provider</code> 整合 SAML SP：</p>

___預編碼_25___

<pre><code># application.yml
spring:
  security:
    saml2:
      relyingparty:
        registration:
          keycloak:
            entity-id: https://myapp.example.com/saml/metadata
            signing:
              credentials:
                - private-key-location: classpath:credentials/sp-private.pem
                  certificate-location: classpath:credentials/sp-certificate.pem
            assertingparty:
              metadata-uri: http://localhost:8080/realms/my-company/protocol/saml/descriptor</code></pre>

___預編碼_27___

___HTMLTAG_1127__HTMLTAG_1128___10。練習___HTMLTAG_1129__HTMLTAG_1130___

___HTMLTAG_1131__HTMLTAG_1132___實驗 1：建立 SAML 用戶端並測試斷言___HTMLTAG_1133__HTMLTAG_1134___
<ol>
___HTMLTAG_1136__HTMLTAG_1137___使用實體 ID ___HTMLTAG_1138__URL_3___>___HTMLTAG_1139__HTMLTAG_1140___ 建立 SAML 用戶端
___HTMLTAG_1141__HTMLTAG_1142___設定 ACS URL、簽署文件、簽署主張 = ON___HTMLTAG_1143__HTMLTAG_1144___
___HTMLTAG_1145__HTMLTAG_1146___使用 <a href="https://www.samltool.com">samltool.com_</a> 或 SAML 追蹤器瀏覽器擴充功能來擷取 SAML 回應____HTMLTAG_1149__HTMLTAG_1150___
___HTMLTAG_1151__HTMLTAG_1152___分析 SAML 斷言：NameID、AttributeStatement、條件、簽章___HTMLTAG_1153__HTMLTAG_1154___
</ol>

___HTMLTAG_1156__HTMLTAG_1157___實驗室 2：OIDC 協定映射器___HTMLTAG_1158__HTMLTAG_1159___
<ol>
___HTMLTAG_1161__HTMLTAG_1162___在使用者個人資料中建立使用者屬性 <code>employee_id</code>___HTMLTAG_1165__HTMLTAG_1166___
___HTMLTAG_1167__HTMLTAG_1168___建立使用者屬性對應器：<code>employee_id</code> → 令牌聲明 <code>emp_id___HTMLTAG_1172__174141172__141172__1415_ML
___HTMLTAG_1175__HTMLTAG_1176___建立群組成員映射器：群組 → 令牌宣告 <code>群組___HTMLTAG_1178__HTMLTAG_1179__HTMLTAG_1180___
___HTMLTAG_1181__HTMLTAG_1182___建立硬編碼宣告：<code>env</code> = <code>staging___HTMLTAG_1186__HTMLTAG_1187188___
___HTMLTAG_1189__HTMLTAG_1190___測試：在 <a href="https://jwt.io">jwt.io___HTMLTAG_1192__HTMLTAG_1193__HTMLTAG_1194___ 中取得令牌並驗證聲明
</ol>

___HTMLTAG_1196__HTMLTAG_1197___實驗 3：SAML 協定映射器___HTMLTAG_1198__HTMLTAG_1199___
<ol>
___HTMLTAG_1201__HTMLTAG_1202___為 <code>部門___HTMLTAG_1204__HTMLTAG_1205__HTMLTAG_1206___ 建立 SAML 使用者屬性映射器
___HTMLTAG_1207__HTMLTAG_1208___使用 <code>單角色屬性</code> = ON___HTMLTAG_1211__HTMLTAG_1212___ 建立角色清單映射器
___HTMLTAG_1213__HTMLTAG_1214___設定名稱 ID 格式 = 電子郵件地址___HTMLTAG_1215__HTMLTAG_1216___
___HTMLTAG_1217__HTMLTAG_1218___擷取 SAML 回應並驗證 AttributeStatement___HTMLTAG_1219__HTMLTAG_1220___
</ol>___HTMLTAG_1222__HTMLTAG_1223___實驗 4：成對主題識別碼___HTMLTAG_1224__HTMLTAG_1225___
<ol>
___HTMLTAG_1227__HTMLTAG_1228___建立 2 個 OIDC 用戶端：<code>app-a</code> 和 <code>app-b___HTMLTAG_1232__1TAG11231231232__
___HTMLTAG_1235__HTMLTAG_1236___使用相同的鹽將成對主題標識符映射器新增至兩個客戶端___HTMLTAG_1237__HTMLTAG_1238___
___HTMLTAG_1239__HTMLTAG_1240___在兩個用戶端上使用相同使用者登入___HTMLTAG_1241__HTMLTAG_1242___
___HTMLTAG_1243__HTMLTAG_1244___比較存取權杖中的值 <code>sub</code> — 必須不同___HTMLTAG_1247__HTMLTAG_1248___
___HTMLTAG_1249__HTMLTAG_1250___設定磁區識別碼 URI，以便 2 個客戶端共用相同的 <code>sub___HTMLTAG_1252__HTMLTAG_1253__HTMLTAG_1254______
</ol>