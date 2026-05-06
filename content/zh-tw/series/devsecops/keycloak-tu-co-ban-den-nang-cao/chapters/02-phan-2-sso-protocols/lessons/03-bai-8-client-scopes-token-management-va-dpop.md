---
id: 019d8b30-b108-7001-c001-e0c5f8100108
title: 第 8 課：客戶端範圍、代幣管理和 DPoP
slug: bai-8-client-scopes-token-management-va-dpop
description: 用戶端範圍（預設和可選）、範圍參數、同意設定、領域預設範圍、評估範圍、管理存取/ID/刷新令牌生命週期、會話和令牌逾時、離線存取、令牌撤銷、輕量級存取權杖、DPoP (RFC 9449) 和用於令牌安全的用戶端策略。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 8
section_title: 第 2 部分：SSO 協定 - OpenID Connect 和 SAML
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2449" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2449)"/>

  <!-- Decorations -->
  <g>
    <circle cx="817" cy="61" r="10" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1034" cy="158" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="751" cy="255" r="12" fill="#a78bfa" opacity="0.08"/>
    <circle cx="968" cy="92" r="13" fill="#a78bfa" opacity="0.09"/>
    <circle cx="685" cy="189" r="14" fill="#a78bfa" opacity="0.1"/>
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
    <line x1="600" y1="191" x2="1100" y2="271" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="221" x2="1050" y2="291" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1013.5166604983954,178 1013.5166604983954,204 991,217 968.4833395016046,204 968.4833395016046,178 991,165" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：客戶端範圍、令牌管理和</tspan>
      <tspan x="60" dy="42">DPoP</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：SSO 協定 - OpenID Connect 和 SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。客戶端範圍___HTMLTAG_69__HTMLTAG_70___

<p>客戶端範圍是用於管理 <strong> 群組協定映射器和角色 </strong> 的機制，可以在多個客戶端之間共用。您無需將映射器新增至每個單獨的用戶端，而是建立客戶端範圍並將其指派給必要的用戶端。 </p>

___HTMLTAG_75__HTMLTAG_76___1.1 預設範圍與選用範圍___HTMLTAG_77__HTMLTAG_78___
<table>
<thead>
___HTMLTAG_81__HTMLTAG_82___類型____HTMLTAG_83__HTMLTAG_84___描述____HTMLTAG_85__HTMLTAG_86___將聲明新增至令牌時____HTMLTAG_87__HTMLTAG_88___
</thead>
<tbody>
___HTMLTAG_91__HTMLTAG_92__HTMLTAG_93___預設客戶端範圍___HTMLTAG_94__HTMLTAG_95__HTMLTAG_96___自動自動套用至每個代幣請求___HTMLTAG_97__HTMLTAG_98______ - 無明確請求要求____
___HTMLTAG_101__HTMLTAG_102__HTMLTAG_103___可選客戶端範圍___HTMLTAG_104__HTMLTAG_105__HTMLTAG_106___僅當客戶端在 <code>scope</code>參數中明確請求時適用___HTMLTAG_109__HTMLTAG_110___僅當客戶端發送<code>scope=scope_name___HTMLTAG_112__HTMLTAG_113__HTMLTAG_114___
</tbody>
</table>

___HTMLTAG_117__HTMLTAG_118___例如：___HTMLTAG_119__HTMLTAG_120___
___預編碼_0___

___HTMLTAG_121__HTMLTAG_122___1.2 內建客戶端範圍___HTMLTAG_123__HTMLTAG_124___
<p>Keycloak 根據 OIDC 標準提供可用的客戶端範圍：</p><table>
<thead>
___HTMLTAG_129__HTMLTAG_130___範圍____HTMLTAG_131__HTMLTAG_132___類型____HTMLTAG_133__HTMLTAG_134___新增的聲明____HTMLTAG_135__HTMLTAG_136___
</thead>
<tbody>
___HTMLTAG_139__HTMLTAG_140__HTMLTAG_141___openid___HTMLTAG_142__HTMLTAG_143__HTMLTAG_144____預設___HTMLTA G_145__HTMLTAG_146___sub、iss、aud、exp、iat、auth_time、nonce、acr、session_state___HTMLTAG_147__HTMLTAG_148___
___HTMLTAG_149__HTMLTAG_150__HTMLTAG_151___個人資料___HTMLTAG_152__HTMLTAG_153__HTMLTAG_154___預設___HTMLTAG_155__HTMLTAG_156______姓名、姓氏、名字、使用者名稱、性別名稱、定義於出生日期
___HTMLTAG_159__HTMLTAG_160__HTMLTAG_161___電子郵件___HTMLTAG_162__HTMLTAG_163__HTMLTAG_164____預設___HTMLTAG_165__HTMLTAG_166______電子郵件、電子郵件_已驗證___MLTAG_165__HTMLTAG_166______電子郵件、電子郵件_已驗證_____
___HTMLTAG_169__HTMLTAG_170__HTMLTAG_171___角色___HTMLTAG_172__HTMLTAG_173__HTMLTAG_174____預設___HTMLTA G_175__HTMLTAG_176____realm_access.roles、resource_access.{client}.roles___HTMLTAG_177__HTMLTAG_178___
___HTMLTAG_179__HTMLTAG_180__HTMLTAG_181____網路來源____HTMLTAG_182__HTMLTAG_183__HTMLTAG_184____預設____HTMLTAG_185__HTMLTAG_186___ML*允許
___HTMLTAG_189__HTMLTAG_190__HTMLTAG_191____acr___HTMLTAG_192__HTMLTAG_193__HTMLTAG_194____預設___HTMLTAG_195__HTMLTAG_196___acr（驗證上下文類別參考）___
___HTMLTAG_199__HTMLTAG_200__HTMLTAG_201___地址___HTMLTAG_202__HTMLTAG_203__HTMLTAG_204____可選___HTMLTAG_205__HTMLTAG_206________、街道地址、地點、地區郵政編號
___HTMLTAG_209__HTMLTAG_210__HTMLTAG_211____電話___HTMLTAG_212__HTMLTAG_213__HTMLTAG_214____可選____HTMLTAG_215__HTMLTAG_216___電話號碼，已驗證電話號碼___HTML
___HTMLTAG_219__HTMLTAG_220__HTMLTAG_221___offline_access___HTMLTAG_222__HTMLTAG_223__HTMLTAG_224____可選___HTMLTAG_225__HTMLTAG_226_____17811UML
___HTMLTAG_229__HTMLTAG_230__HTMLTAG_231___microprofile-jwt___HTMLTAG_232__HTMLTAG_233__HTMLTAG_234___選用____HTMLTAG_235__HTMLTAG_236_____upn，群組（Microcro_HTfile1235__<td>MLupn，群組（Microcrop
</tbody>
</table>___HTMLTAG_241__HTMLTAG_242___1.3 建立新客戶端範圍___HTMLTAG_243__HTMLTAG_244___
<ol>
___HTMLTAG_246__HTMLTAG_247___轉到 <strong>客戶端範圍</strong> → <strong>建立客戶端範圍____HTMLTAG_251__HTMLTAG_252__HTMLTAG_253_____
___HTMLTAG_254__HTMLTAG_255___輸入資訊：</p>
<ul>
___HTMLTAG_258__HTMLTAG_259___名稱</strong>：<code>我的自訂範圍___HTMLTAG_262__HTMLTAG_263___
___HTMLTAG_264__HTMLTAG_265___說明</strong>：說明範圍</li>
___HTMLTAG_268__HTMLTAG_269___類型</strong>：預設/可選/無</li>
___HTMLTAG_272__HTMLTAG_273___在同意畫面上顯示</strong>：如果您想向使用者顯示它，則開啟</li>
___HTMLTAG_276__HTMLTAG_277___同意螢幕文字</strong>：同意螢幕上顯示的文字</li>
___HTMLTAG_280__HTMLTAG_281___包含在令牌範圍內</strong>：ON，以便範圍名稱出現在 <code>scope</code> 令牌聲明__HTMLTAG_285___ 中
___HTMLTAG_286__HTMLTAG_287___GUI 訂單</strong>：同意畫面上顯示的訂單</li>
</ul>
</li>
___HTMLTAG_292__HTMLTAG_293___新增 <strong>協定映射器</strong>到範圍___HTMLTAG_296__HTMLTAG_297___
___HTMLTAG_298__HTMLTAG_299___如果需要限制角色，請新增 <strong>Scope</strong>（角色範圍映射）____HTMLTAG_302__HTMLTAG_303___
</ol>

___預編碼_1___

___HTMLTAG_305__HTMLTAG_306___1.4 將客戶端範圍指派給客戶端___HTMLTAG_307__HTMLTAG_308___
<ol>
___HTMLTAG_310__HTMLTAG_311___開啟客戶端 → 標籤 <strong>客戶端範圍___HTMLTAG_313__HTMLTAG_314__HTMLTAG_315___
___HTMLTAG_316__HTMLTAG_317___點選 <strong>新增客戶端範圍___HTMLTAG_319__HTMLTAG_320__HTMLTAG_321___
___HTMLTAG_322__HTMLTAG_323___選擇範圍並將其指定為 <strong>預設_</strong> 或 <strong>可選____HTMLTAG_327__HTMLTAG_328__HTMLTAG_329_____HTMLTAG_328__HTMLTAG_329_____
</ol>

___預編碼_2___

___HTMLTAG_331__HTMLTAG_332___1.5 領域預設客戶端範圍___HTMLTAG_333__HTMLTAG_334___
<p>領域預設客戶端範圍在建立時自動分配給 <strong>所有新客戶端</strong>：</p>
<ol>
___HTMLTAG_340__HTMLTAG_341___轉到 <strong>客戶端範圍</strong> → 查看清單___HTMLTAG_344__HTMLTAG_345___
___HTMLTAG_346__HTMLTAG_347___範圍具有 <strong>分配的類型</strong> = 領域層級的預設或選用將自動指派給新客戶端__HTMLTAG_350__HTMLTAG_351___
</ol>

<p>透過管理 CLI 進行設定：</p>
___預編碼_3___

___HTMLTAG_355__HTMLTAG_356___1.6 同意設定___HTMLTAG_357__HTMLTAG_358___
<p>當客戶端需要 <strong> 需要同意</strong> = ON 時，使用者必須在客戶端收到令牌之前同意每個範圍：</p><ul>
___HTMLTAG_364__HTMLTAG_365___每個客戶端範圍都可以設定 <strong>在同意畫面上顯示</strong> 和 <strong>___同意螢幕文字____HTMLTAG_369__HTMLTAG_3701MLTAG_3701MLTAG_369__HTMLTAG_37011
___HTMLTAG_372__HTMLTAG_373___使用者可以在 <strong>帳戶控制台</strong> → 應用程式___HTMLTAG_376__HTMLTAG_377___ 中撤銷同意
___HTMLTAG_378__HTMLTAG_379___每個使用者每個客戶端保存的同意條目___HTMLTAG_380__HTMLTAG_381___
</ul>

___預編碼_4___

___HTMLTAG_383__HTMLTAG_384___1.7 評估範圍（範圍評估）___HTMLTAG_385__HTMLTAG_386___
<p>管理控制台提供了根據範圍預覽令牌內容的工具：</p>
<ol>
___HTMLTAG_390__HTMLTAG_391___開啟客戶端 → 標籤 <strong>客戶端範圍</strong> → <strong>___評估___HTMLTAG_395__HTMLTAG_396__HT
___HTMLTAG_398__HTMLTAG_399___輸入：<strong>使用者</strong>（選擇使用者測驗），<strong>範圍參數</strong>（選用範圍）___HTMLTAG_404__MLTAG_404__4040405
___HTMLTAG_406__HTMLTAG_407___點選 <strong>評估</strong>查看：</p>
<ul>
___HTMLTAG_412__HTMLTAG_413___有效的協定映射器</strong>：將套用映射器</li>
___HTMLTAG_416__HTMLTAG_417___有效的角色範圍映射</strong>：令牌中包含的角色</li>
___HTMLTAG_420__HTMLTAG_421___產生的存取權杖__HTMLTAG_422___：存取權杖的預覽 JSON</li>
___HTMLTAG_424__HTMLTAG_425___產生的 ID 令牌</strong>：ID 令牌的預覽 JSON</li>
___HTMLTAG_428__HTMLTAG_429___產生的使用者資訊</strong>：使用者資訊回應的預覽 JSON</li>
</ul>
</li>
</ol>

<p>這是一個非常有用的工具，可以<strong>調試令牌內容</strong>，而無需實際請求令牌。 </p>

___HTMLTAG_439__HTMLTAG_440___2。令牌管理___HTMLTAG_441__HTMLTAG_442___

___HTMLTAG_443__HTMLTAG_444___2.1 存取權杖___HTMLTAG_445__HTMLTAG_446___
<p>存取權杖是包含授權資訊的 JWT — 決定哪個 <strong>user__HTMLTAG_449___ 有權存取哪個 <strong>resource</strong>.</p>

___HTMLTAG_453__HTMLTAG_454___存取權杖結構：___HTMLTAG_455__HTMLTAG_456___
___預編碼_5___

___HTMLTAG_457__HTMLTAG_458___2.2 令牌 ID___HTMLTAG_459__HTMLTAG_460___
<p>ID 令牌包含身分資訊 — 確認使用者 <strong> 是誰</strong>。僅適用於客戶端（依賴方），不傳送到資源伺服器。 </p>

___預編碼_6___

___HTMLTAG_465__HTMLTAG_466___2.3 刷新令牌___HTMLTAG_467__HTMLTAG_468___
<p>刷新令牌用於取得新的存取令牌，而不需要使用者再次登入。刷新令牌的壽命比訪問令牌更長。 </p>

___預編碼_7___

___HTMLTAG_471__HTMLTAG_472___2.4 會話與代幣逾時___HTMLTAG_473__HTMLTAG_474___
<p><strong>領域設定</strong> → <strong>令牌</strong> 選項卡和 <strong>會話</strong> 選項卡：<strong>會話</strong> 選項卡：___HTMLG_482______HTMLTAG_483__HTMLTAG_484___令牌壽命：___HTMLTAG_485__HTMLTAG_486___
<table>
<thead>
___HTMLTAG_489__HTMLTAG_490___設定___HTMLTAG_491__HTMLTAG_492___說明___HTMLTAG_493__HTMLTAG_494___建議值____HTMLTAG_495__HTMLTAG_496___
</thead>
<tbody>
___HTMLTAG_499__HTMLTAG_500___存取權杖生命週期___HTMLTAG_501__HTMLTAG_502___存取權杖生命週期____HTMLTAG_503__HTMLTAG_504___5 分鐘（生產）___HTMLTAG_505__HTMLTAG_506___
___HTMLTAG_507__HTMLTAG_508___客戶端登入逾時___HTMLTAG_509__HTMLTAG_510___完成登入流程的最長時間____HTMLTAG_511__HTMLTAG_512___5分鐘____HTMLTAG_513__HTMLTAG_514____
___HTMLTAG_515__HTMLTAG_516___登入逾時____HTMLTAG_517__HTMLTAG_518___登入頁面的最長時間____HTMLTAG_519__HTMLTAG_520___30分鐘____HTMLTAG_5211HTMLTAG_522____HT__HTMLTAG_52211HTMLTAG_522___
___HTMLTAG_523__HTMLTAG_524___登入操作逾時___HTMLTAG_525__HTMLTAG_526___所需操作的時間（驗證電子郵件，...）___HTMLTAG_527__HTMLTAG_528___5 分鐘_</td>__TAG_530___
___HTMLTAG_531__HTMLTAG_532___使用者啟動的操作生命週期___HTMLTAG_533__HTMLTAG_534___使用者啟動的操作的時間____HTMLTAG_535__HTMLTAG_536___5分鐘__HTMLTAG_537__HTMLTAG538___
___HTMLTAG_539__HTMLTAG_540___預設管理員啟動的操作生命週期___HTMLTAG_541__HTMLTAG_542___管理員啟動的操作的時間（重設密碼連結）___HTMLTAG_543__HTMLTAG_544___12 小時____HTMLTAGMLTA1456
</tbody>
</table>

___HTMLTAG_549__HTMLTAG_550___會話壽命：___HTMLTAG_551__HTMLTAG_552___
<table>
<thead>
___HTMLTAG_555__HTMLTAG_556___設定____HTMLTAG_557__HTMLTAG_558___說明____HTMLTAG_559__HTMLTAG_560___建議值____HTMLTAG_561__HTMLTAG_562___
</thead>
<tbody>
___HTMLTAG_565__HTMLTAG_566___SSO 會話空閒___HTMLTAG_567__HTMLTAG_568___會話在一段時間不活動後過期__HTMLTAG_569__HTMLTAG_570___30 分鐘____HTMLTAG_571__
___HTMLTAG_573__HTMLTAG_574___SSO 會話最大值___HTMLTAG_575__HTMLTAG_576___會話絕對過期（無論活動如何）___HTMLTAG_577__HTMLTAG_578___10 小時_</td>__MLG_579_____MLG_579_____
___HTMLTAG_581__HTMLTAG_582___SSO 會話空閒記住我___HTMLTAG_583__HTMLTAG_584___“記住我”打開時會話空閒記住我___HTMLTAG_583__HTMLTAG_584___“記住我”打開時會話空閒時MLTAG___HTMLTAG_585__HTMLTAG_586___30__HTMLTAG___HTMLTAG_585__HTMLTAG_586___30__HTMLTAG___HTMLTAG_MLTAG___
___HTMLTAG_589__HTMLTAG_590___SSO 會話最長記住我___HTMLTAG_591__HTMLTAG_592___打開“記住我”時最長會話___HTMLTAG_593__HTMLTAG_594___30 天____HTMLTAG_595__HTMLTAG_596___
___HTMLTAG_597__HTMLTAG_598___客戶端會話空閒___HTMLTAG_599__HTMLTAG_600___客戶端會話空閒（影響刷新權杖）____HTMLTAG_601__HTMLTAG_602________4________
___HTMLTAG_605__HTMLTAG_606___客戶端會話最大值___HTMLTAG_607__HTMLTAG_608___客戶端會話最大值（影響刷新令牌）____HTMLTAG_609__HTMLTAG_610___繼承 SSO 會話____HTMLTAG_609__HTMLTAG_610___繼承 SSO 會話____HTMLTAG_6111HTMLTAG_6112___
</tbody>
</table>

___HTMLTAG_615__HTMLTAG_616___會話和令牌之間的關係：___HTMLTAG_617__HTMLTAG_618___
___預編碼_8______HTMLTAG_619__HTMLTAG_620___在客戶端層級覆寫：___HTMLTAG_621__HTMLTAG_622___
<p>每個客戶端都可以覆寫選項卡中的領域級令牌設定 <strong>進階</strong>:</p>
___預編碼_9___

___HTMLTAG_627__HTMLTAG_628___2.5 撤銷刷新令牌（輪換）___HTMLTAG_629__HTMLTAG_630___
<p>當啟用 <strong>撤銷刷新令牌</strong> 時，每次使用刷新令牌取得新的存取權杖時，舊的刷新令牌將被撤銷，並發出新的刷新令牌。 </p>

___預編碼_10___

___HTMLTAG_635__HTMLTAG_636___為什麼我們需要刷新令牌輪替？ ___HTMLTAG_637__HTMLTAG_638___
<ul>
___HTMLTAG_640__HTMLTAG_641___如果刷新令牌被盜，攻擊者只能使用一次___HTMLTAG_642__HTMLTAG_643___
___HTMLTAG_644__HTMLTAG_645___合法用戶端使用相同的刷新權杖 → 兩者皆無效 → 偵測到代幣竊盜___HTMLTAG_646__HTMLTAG_647___
___HTMLTAG_648__HTMLTAG_649___這是 OAuth 2.0 安全 BCP 中建議的 <strong>最佳實務_</strong>____HTMLTAG_652__HTMLTAG_653___
</ul>

___HTMLTAG_655__HTMLTAG_656___3。離線存取___HTMLTAG_657__HTMLTAG_658___

<p>離線令牌允許客戶端 <strong> 即使在使用者不在線上時</strong>（無瀏覽器會話）也可以存取資源。離線令牌的壽命很長，並且可以在伺服器重新啟動後繼續存在。 </p>

___HTMLTAG_663__HTMLTAG_664___3.1 離線存取設定___HTMLTAG_665__HTMLTAG_666___
<ol>
___HTMLTAG_668__HTMLTAG_669___確保將範圍 <code>offline_access</code> 指派給客戶端（可選範圍）___HTMLTAG_672__HTMLTAG_673___
___HTMLTAG_674__HTMLTAG_675___帶有 <code>scope=offline_access___HTMLTAG_677__HTMLTAG_678__HTMLTAG_679___ 的客戶端請求令牌
___HTMLTAG_680__HTMLTAG_681___在「領域設定」→「會話」標籤中設定離線會話逾時：___HTMLTAG_682__HTMLTAG_683___
</ol>

<table>
<thead>
___HTMLTAG_687__HTMLTAG_688___設定____HTMLTAG_689__HTMLTAG_690___說明____HTMLTAG_691__HTMLTAG_692___建議值____HTMLTAG_693__HTMLTAG_694___
</thead>
<tbody>
___HTMLTAG_697__HTMLTAG_698___離線會話空閒___HTMLTAG_699__HTMLTAG_700___離線會話在空閒後過期___HTMLTAG_701__HTMLTAG_702___30天____HTMLTAG_703__4MLG_703__4MLG_703__
___HTMLTAG_705__HTMLTAG_706___離線會話最大限制___HTMLTAG_707__HTMLTAG_708___啟用生命週期最大限制____HTMLTAG_709__HTMLTAG_710___ON___HTMLTAG_711__HTMLTAG_712___
___HTMLTAG_713__HTMLTAG_714___離線會話最長___HTMLTAG_715__HTMLTAG_716___離線會話最長生命週期____HTMLTAG_717__HTMLTAG_718___60 天____HTMLTAG_719__MLTAG_719_____
</tbody>
</table>

<pre><code># Request offline token
GET /auth?response_type=code&
  client_id=my-app&
  scope=openid offline_access&
  redirect_uri=...

# Token response — refresh_token là offline token
{
  "access_token": "...",
  "expires_in": 300,
  "refresh_expires_in": 0,          // 0 = offline token (không expire theo session)
  "refresh_token": "offline-token",
  "token_type": "Bearer",
  "scope": "openid offline_access"
}

# Sử dụng offline token để refresh
POST /token
grant_type=refresh_token&
refresh_token=offline-token&
client_id=my-app&
client_secret=CLIENT_SECRET</code></pre>___HTMLTAG_723__HTMLTAG_724___3.2 管理離線會話___HTMLTAG_725__HTMLTAG_726___
<ul>
___HTMLTAG_728__HTMLTAG_729___管理控制台 → <strong>會話</strong> → 選項卡 <strong>離線會話</strong>：查看所有離線會話___HTMLTAG_7344_____
___HTMLTAG_736__HTMLTAG_737___使用者帳號控制台→ <strong>會話</strong>：使用者可以檢視並撤銷離線會話___HTMLTAG_740__HTMLTAG_741___
___HTMLTAG_742__HTMLTAG_743___管理 REST API：以程式方式撤銷離線會話___HTMLTAG_744__HTMLTAG_745___
</ul>

<pre><code># Revoke offline session cho user cụ thể
DELETE /admin/realms/my-company/users/{user-id}/consents/{client-id}

# Revoke tất cả sessions (bao gồm offline) cho user
POST /admin/realms/my-company/users/{user-id}/logout</code></pre>

___HTMLTAG_747__HTMLTAG_748___4。令牌撤銷___HTMLTAG_749__HTMLTAG_750___

___HTMLTAG_751__HTMLTAG_752___4.1 令牌撤銷端點 (RFC 7009)___HTMLTAG_753__HTMLTAG_754___
<p>Keycloak 支援令牌撤銷端點，允許客戶端撤銷存取權杖或刷新令牌：</p>

<pre><code># Revoke refresh token
POST /realms/my-company/protocol/openid-connect/revoke
Content-Type: application/x-www-form-urlencoded

token=REFRESH_TOKEN&
token_type_hint=refresh_token&
client_id=my-app&
client_secret=CLIENT_SECRET

# Revoke access token
POST /realms/my-company/protocol/openid-connect/revoke
Content-Type: application/x-www-form-urlencoded

token=ACCESS_TOKEN&
token_type_hint=access_token&
client_id=my-app&
client_secret=CLIENT_SECRET</code></pre>

___HTMLTAG_757__HTMLTAG_758___注意：___HTMLTAG_759__HTMLTAG_760___
<ul>
___HTMLTAG_762__HTMLTAG_763___撤銷刷新令牌 → 使刷新令牌和關聯的 SSO 會話失效（取決於設定）___HTMLTAG_764__HTMLTAG_765___
___HTMLTAG_766__HTMLTAG_767___撤銷存取權杖 → 基於 JWT 的令牌，只有當資源伺服器執行令牌內省或使用令牌撤銷事件時，撤銷才有效____HTMLTAG_768__HTMLTAG_769___
</ul>

___HTMLTAG_771__HTMLTAG_772___4.2 不早於政策___HTMLTAG_773__HTMLTAG_774___
<p>撤銷某個時間之前發出的所有代幣：</p>

<pre><code># Set not-before timestamp — tất cả tokens issued trước thời điểm này bị invalidate
PUT /admin/realms/my-company
{
  "notBefore": 1711800000   // Unix timestamp
}

# Hoặc qua Admin Console:
# Realm Settings → Sessions → "Set to now" → "Push"
# "Push" gửi not-before policy đến tất cả clients có Admin URL</code></pre>

___HTMLTAG_777__HTMLTAG_778___4.3 令牌自省 (RFC 7662)___HTMLTAG_779__HTMLTAG_780___
<p>資源伺服器使用令牌自省來驗證令牌有效性並檢索聲明：</p>

<pre><code># Introspect token
POST /realms/my-company/protocol/openid-connect/token/introspect
Content-Type: application/x-www-form-urlencoded

token=ACCESS_TOKEN&
client_id=my-resource-server&
client_secret=RESOURCE_SERVER_SECRET

# Response — token hợp lệ
{
  "active": true,
  "sub": "user-uuid",
  "email": "user@example.com",
  "realm_access": { "roles": ["admin"] },
  "client_id": "my-app",
  "token_type": "Bearer",
  "exp": 1711800300,
  "iat": 1711800000,
  "scope": "openid profile email"
}

# Response — token không hợp lệ
{
  "active": false
}</code></pre>

___HTMLTAG_783__HTMLTAG_784___何時使用令牌自省與 JWT 驗證：___HTMLTAG_785__HTMLTAG_786___
<table>
<thead>
___HTMLTAG_789__HTMLTAG_790___方法____HTMLTAG_791__HTMLTAG_792___優點____HTMLTAG_793__HTMLTAG_794___缺點____HTMLTAG_795__HTMLTAG_796___
</thead>
<tbody>
___HTMLTAG_799__HTMLTAG_800___JWT 驗證（本地）___HTMLTAG_801__HTMLTAG_802___快速，無需呼叫 Keycloak____HTMLTAG_803__HTMLTAG_804______無實時，撤銷延遲____HTMLTAG_805__HTMLTAG806___
___HTMLTAG_807__HTMLTAG_808___令牌自省（遠端）___HTMLTAG_809__HTMLTAG_810___即時狀態，完整聲明____HTMLTAG_811__HTMLTAG_812___網路延遲，對Keycloak的依賴____HTMLTAGML_8131HT4_____4_____4_____
</tbody>
</table>

___HTMLTAG_817__HTMLTAG_818___5。 DPoP — 所有權證明示範 (RFC 9449)___HTMLTAG_819__HTMLTAG_820___

<p>DPoP 解決了問題 <strong>承載令牌盜竊</strong> — 如果存取權杖被盜，攻擊者可以在任何地方使用它，因為令牌和客戶端之間沒有綁定。 </p>

___HTMLTAG_825__HTMLTAG_826___5.1 DPoP 如何運作？ ___HTMLTAG_827__HTMLTAG_828___
<p>DPoP 將令牌綁定到客戶端擁有的特定 <strong> 非對稱金鑰對 __HTMLTAG_831___。客戶端每次使用令牌時都必須證明私鑰的所有權。 </p>

<pre><code>┌──────────┐                     ┌──────────┐
│  Client  │                     │ Keycloak │
└────┬─────┘                     └────┬─────┘
     │                                │
     │  1. Generate key pair          │
     │     (public + private key)     │
     │                                │
     │  2. Token request +            │
     │     DPoP Proof (signed with    │
     │     private key)               │
     │───────────────────────────────>│
     │                                │
     │  3. DPoP-bound access token    │
     │     (contains cnf.jkt claim)   │
     │<──────────────────────────────│
     │                                │
     │                          ┌──────────┐
     │                          │ Resource │
     │                          │  Server  │
     │                          └────┬─────┘
     │  4. API request +             │
     │     DPoP-bound token +        │
     │     DPoP Proof (new, signed   │
     │     with same private key)    │
     │──────────────────────────────>│
     │                               │
     │  5. Verify: token.cnf.jkt     │
     │     matches DPoP proof's      │
     │     public key                │
     │  6. Response                  │
     │<─────────────────────────────│</code></pre>___HTMLTAG_833__HTMLTAG_834___5.2 DPoP 證明 JWT 結構___HTMLTAG_835__HTMLTAG_836___
<pre><code>// DPoP Proof Header
{
  "typ": "dpop+jwt",
  "alg": "ES256",
  "jwk": {
    "kty": "EC",
    "crv": "P-256",
    "x": "base64url-encoded-x",
    "y": "base64url-encoded-y"
  }
}

// DPoP Proof Payload
{
  "jti": "unique-proof-id",           // Unique ID, ngăn replay attacks
  "htm": "POST",                       // HTTP method
  "htu": "https://keycloak/token",     // HTTP URI (token endpoint)
  "iat": 1711800000,                   // Issued at
  "ath": "access-token-hash"           // Hash of access token (khi gọi resource server)
}</code></pre>

___HTMLTAG_837__HTMLTAG_838___5.3 在 Keycloak 中設定 DPoP___HTMLTAG_839__HTMLTAG_840___
<p>DPoP 透過 <strong>客戶端策略</strong>:</p> 強制執行

<ol>
___HTMLTAG_846__HTMLTAG_847___建立 <strong>客戶資料</strong>：</p>
<ul>
<li>領域設定 → 用戶端策略 → 設定檔標籤 → 建立</li>
<li>名稱： <code>dpop-profile___HTMLTAG_856__HTMLTAG_857___
<li>新增執行者：<strong>DPoP證明驗證___HTMLTAG_860__HTMLTAG_861___
</ul>
</li>
___HTMLTAG_864__HTMLTAG_865___建立 <strong>客戶策略</strong>:</p>
<ul>
<li>策略標籤 → 建立</li>
<li>名稱： <code>dpop-policy___HTMLTAG_874__HTMLTAG_875___
<li>新增條件：<strong>客戶端存取類型</strong> 或 <strong>任何客戶端___HTMLTAG_880__HTMLTAG_881___
<li>同事個人資料：<code>dpop-profile___HTMLTAG_884__HTMLTAG_885___
</ul>
</li>
</ol>

<pre><code># Token request với DPoP
POST /realms/my-company/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded
DPoP: eyJ0eXAiOiJkcG9wK2p3dCIsImFsZyI6IkVTMjU2IiwiandrIjp7Imt0eSI6Ik...

grant_type=authorization_code&
code=AUTH_CODE&
client_id=my-app&
redirect_uri=http://localhost:3000/callback

# Response — DPoP-bound token
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "token_type": "DPoP",              // Token type = "DPoP" thay vì "Bearer"
  "expires_in": 300
}

# Access token chứa confirmation claim
{
  "cnf": {
    "jkt": "thumbprint-of-client-public-key"   // JWK Thumbprint
  }
}

# Gọi Resource Server với DPoP token
GET /api/resource
Authorization: DPoP eyJhbGciOiJSUzI1NiIs...
DPoP: eyJ0eXAiOiJkcG9wK2p3dCIs...          # DPoP proof mới (htm=GET, htu=API URL)</code></pre>

___HTMLTAG_889__HTMLTAG_890___5.4 DPoP 隨機數___HTMLTAG_891__HTMLTAG_892___
<p>Keycloak 支援伺服器發出的 DPoP 隨機數，以增強針對重播攻擊的安全性：</p>

<pre><code># Server response header khi DPoP nonce required
HTTP/1.1 401 Unauthorized
DPoP-Nonce: server-generated-nonce

# Client PHẢI include nonce trong DPoP proof tiếp theo
{
  "typ": "dpop+jwt",
  "alg": "ES256",
  "jwk": { ... }
}
{
  "jti": "new-unique-id",
  "htm": "POST",
  "htu": "https://keycloak/token",
  "iat": 1711800001,
  "nonce": "server-generated-nonce"    // Server-issued nonce
}</code></pre>

___HTMLTAG_895__HTMLTAG_896___5.5 DPoP 實作範例 (JavaScript)___HTMLTAG_897__HTMLTAG_898___
___預編碼_20___

___HTMLTAG_899__HTMLTAG_900___6。令牌安全的客戶端策略___HTMLTAG_901__HTMLTAG_902___

<p>客戶端策略允許執行與令牌相關的安全要求：</p>

___HTMLTAG_905__HTMLTAG_906___6.1 令牌相關執行器___HTMLTAG_907__HTMLTAG_908___
<table>
<thead>
___HTMLTAG_911__HTMLTAG_912___執行器___HTMLTAG_913__HTMLTAG_914___說明___HTMLTAG_915__HTMLTAG_916___
</thead>
<tbody>
___HTMLTAG_919__HTMLTAG_920___DPoP 證明驗證___HTMLTAG_921__HTMLTAG_922___令牌請求所需的 DPoP____HTMLTAG_923__HTMLTAG_924___
___HTMLTAG_925__HTMLTAG_926___密鑰持有者強制執行者___HTMLTAG_927__HTMLTAG_928___所需的令牌綁定（MTLS 或 DPoP）___HTMLTAG_929__HTMLTAG_930___
___HTMLTAG_931__HTMLTAG_932___安全簽章演算法___HTMLTAG_933__HTMLTAG_934___僅允許安全演算法（RS256、ES256...）___HTMLTAG_935__HTMLTAG_936___
___HTMLTAG_937__HTMLTAG_938___PKCE 強制器___HTMLTAG_939__HTMLTAG_940___授權程式碼流所需的 PKCE___HTMLTAG_941__HTMLTAG_942___
___HTMLTAG_943__HTMLTAG_944___機密客戶端執行器___HTMLTAG_945__HTMLTAG_946___所需的客戶端驗證___HTMLTAG_947__HTMLTAG_948___
___HTMLTAG_949__HTMLTAG_950___安全回應類型___HTMLTAG_951__HTMLTAG_952___僅允許的安全回應類型___HTMLTAG_953__HTMLTAG_954___
___HTMLTAG_955__HTMLTAG_956___拒絕隱式授予___HTMLTAG_957__HTMLTAG_958___禁止隱式授予___HTMLTAG_959__HTMLTAG_960___
</tbody>
</table>

<pre><code># Ví dụ: Policy enforce DPoP + PKCE + Secure Algorithm
Profile: high-security-profile
  Executors:
    - DPoP Proof Verification
    - PKCE Enforcer (S256 only)
    - Secure Signing Algorithm (RS256, ES256)
    - Reject Implicit Grant
    - Confidential Client Enforcer

Policy: high-security-policy
  Conditions:
    - Client Role: has role "high-security"
  Profiles:
    - high-security-profile</code></pre>___HTMLTAG_963__HTMLTAG_964___7。練習___HTMLTAG_965__HTMLTAG_966___

___HTMLTAG_967__HTMLTAG_968___實驗室 1：客戶端範圍___HTMLTAG_969__HTMLTAG_970___
<ol>
___HTMLTAG_972__HTMLTAG_973___建立客戶端範圍 <code>組織</code> 與映射器：org_id、org_name、org_role___HTMLTAG_976__HTMLTAG_977___
___HTMLTAG_978__HTMLTAG_979___首先將範圍指派給客戶端作為默認，然後變更為可選___HTMLTAG_980__HTMLTAG_981___
___HTMLTAG_982__HTMLTAG_983___測試：請求令牌沒有範圍參數 → 無組織宣告___HTMLTAG_984__HTMLTAG_985___
___HTMLTAG_986__HTMLTAG_987___測試：使用 <code>scope=openid 組織</code> 請求令牌</code> → 是組織聲明___HTMLTAG_990__HTMLTAG_991___
___HTMLTAG_992__HTMLTAG_993___使用 <strong>評估</strong>工具來預覽令牌___HTMLTAG_996__HTMLTAG_997___
</ol>

___HTMLTAG_999__HTMLTAG_1000___實驗 2：令牌生命週期___HTMLTAG_1001__HTMLTAG_1002___
<ol>
___HTMLTAG_1004__HTMLTAG_1005___存取權杖設定壽命 = 1 分鐘___HTMLTAG_1006__HTMLTAG_1007___
___HTMLTAG_1008__HTMLTAG_1009___啟用撤銷刷新令牌，刷新令牌最大重複使用 = 0___HTMLTAG_1010__HTMLTAG_1011___
___HTMLTAG_1012__HTMLTAG_1013___取得令牌→等待1分鐘→呼叫API→接收401___HTMLTAG_1014__HTMLTAG_1015___
___HTMLTAG_1016__HTMLTAG_1017___刷新令牌→接收新令牌→API呼叫→成功___HTMLTAG_1018__HTMLTAG_1019___
___HTMLTAG_1020__HTMLTAG_1021___嘗試刷新舊令牌 → 收到錯誤（撤銷）___HTMLTAG_1022__HTMLTAG_1023___
</ol>

___HTMLTAG_1025__HTMLTAG_1026___實驗 3：離線存取___HTMLTAG_1027__HTMLTAG_1028___
<ol>
___HTMLTAG_1030__HTMLTAG_1031___將範圍 <code>offline_access</code> 指派給客戶端___HTMLTAG_1034__HTMLTAG_1035___
___HTMLTAG_1036__HTMLTAG_1037___透過 <code>scope=openidoffline_access___HTMLTAG_1039__HTMLTAG_1040__HTMLTAG_1041___取得令牌
___HTMLTAG_1042__HTMLTAG_1043___檢查 <code>refresh_expires_in</code> = 0（離線令牌）___HTMLTAG_1046__HTMLTAG_1047___
___HTMLTAG_1048__HTMLTAG_1049___重新啟動Keycloak→使用離線令牌刷新→仍然有效___HTMLTAG_1050__HTMLTAG_1051___
___HTMLTAG_1052__HTMLTAG_1053___在管理控制台中查看離線會話___HTMLTAG_1054__HTMLTAG_1055___
</ol>

___HTMLTAG_1057__HTMLTAG_1058___實驗室 4：DPoP___HTMLTAG_1059__HTMLTAG_1060___
<ol>
___HTMLTAG_1062__HTMLTAG_1063___建立客戶端策略以強制客戶端 DPoP <code>dpop-client___HTMLTAG_1065__HTMLTAG_1066__HTMLTAG_1067___
___HTMLTAG_1068__HTMLTAG_1069___產生金鑰對，建立 DPoP 證明 JWT___HTMLTAG_1070__HTMLTAG_1071___
___HTMLTAG_1072__HTMLTAG_1073___帶有 DPoP 標頭的請求令牌 → 接收 DPoP 綁定令牌___HTMLTAG_1074__HTMLTAG_1075___
___HTMLTAG_1076__HTMLTAG_1077___使用令牌呼叫資源伺服器，但 <strong>沒有</strong> DPoP 證明 → 資源伺服器拒絕___HTMLTAG_1080__HTMLTAG_1081___
___HTMLTAG_1082__HTMLTAG_1083___使用令牌呼叫資源伺服器<strong>和</strong> DPoP證明→成功___HTMLTAG_1086__HTMLTAG_1087___
</ol>___HTMLTAG_1089__HTMLTAG_1090___實驗 5：令牌撤銷___HTMLTAG_1091__HTMLTAG_1092___
<ol>
___HTMLTAG_1094__HTMLTAG_1095___取得存取權杖和刷新權杖___HTMLTAG_1096__HTMLTAG_1097___
___HTMLTAG_1098__HTMLTAG_1099___透過撤銷端點撤銷刷新權杖___HTMLTAG_1100__HTMLTAG_1101___
___HTMLTAG_1102__HTMLTAG_1103___嘗試刷新 → 出現錯誤___HTMLTAG_1104__HTMLTAG_1105___
___HTMLTAG_1106__HTMLTAG_1107___透過管理控制台設定「不早於」策略 → 推送___HTMLTAG_1108__HTMLTAG_1109___
___HTMLTAG_1110__HTMLTAG_1111___嘗試使用舊的存取權杖 → 自省代幣傳回 <code>active=false___HTMLTAG_1113__HTMLTAG_1114__HTMLTAG_1115______
</ol>