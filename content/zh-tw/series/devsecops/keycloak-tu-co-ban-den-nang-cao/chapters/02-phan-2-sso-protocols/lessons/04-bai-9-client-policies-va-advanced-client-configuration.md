---
id: 019d8b30-b109-7001-c001-e0c5f8100109
title: 第 9 課：客戶端策略與進階客戶端配置
slug: bai-9-client-policies-va-advanced-client-configuration
description: 客戶端策略架構（設定檔、條件、執行程序）、FAPI 2.0 安全性設定檔、客戶端金鑰輪替、服務帳戶、受眾支援、機密用戶端憑證（用戶端 ID/金鑰、簽署 JWT、X.509）、標準代幣交換、JWT 授權授予 (RFC 7523) 以及 MCP 伺服器的設定。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 9
section_title: 第 2 部分：SSO 協定 - OpenID Connect 和 SAML
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-99" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-99)"/>

  <!-- Decorations -->
  <g>
    <circle cx="849" cy="37" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1098" cy="126" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="847" cy="215" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="1096" cy="44" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="845" cy="133" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="227" x2="1100" y2="307" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="257" x2="1050" y2="327" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="963.3730669589464,106 963.3730669589464,148 927,169 890.6269330410536,148 890.6269330410536,106.00000000000001 927,85" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 9 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 9 課：客戶端策略與進階客戶端__HTMLTAG_53___
      <tspan x="60" dy="42">設定</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：SSO 協定 - OpenID Connect 和 SAML</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。客戶政策___HTMLTAG_69__HTMLTAG_70___

<p>客戶端策略是一個框架，允許在客戶端上自動<strong>強制執行安全性要求</strong>。您無需手動檢查每個用戶端的配置，只需定義策略，以便 Keycloak 自動驗證和強制執行。 </p>

___HTMLTAG_75__HTMLTAG_76___1.1 為什麼我們需要客戶政策？ ___HTMLTAG_77__HTMLTAG_78___
<ul>
___HTMLTAG_80__HTMLTAG_81__HTMLTAG_82___一致性</strong>：確保所有客戶端遵守相同的安全標準____HTMLTAG_84__HTMLTAG_85___
___HTMLTAG_86__HTMLTAG_87__HTMLTAG_88___自動化</strong>：自動拒絕不合規請求___HTMLTAG_90__HTMLTAG_91___
___HTMLTAG_92__HTMLTAG_93__HTMLTAG_94___合規</strong>：執行業界標準（FAPI、PSD2、開放銀行）___HTMLTAG_96__HTMLTAG_97___
___HTMLTAG_98__HTMLTAG_99__HTMLTAG_100___治理</strong>：控制客戶端註冊與設定___HTMLTAG_102__HTMLTAG_103___
</ul>

___HTMLTAG_105__HTMLTAG_106___1.2 架構：設定檔、條件、執行器___HTMLTAG_107__HTMLTAG_108___
<p>客戶端策略包含 3 個主要元件：</p>

___預編碼_0___<table>
<thead>
___HTMLTAG_113__HTMLTAG_114___元素____HTMLTAG_115__HTMLTAG_116___說明____HTMLTAG_117__HTMLTAG_118___範例____HTMLTAG_119__HTMLTAG_120___
</thead>
<tbody>
___HTMLTAG_123__HTMLTAG_124__HTMLTAG_125___設定檔___HTMLTAG_126__HTMLTAG_127__HTMLTAG_128___執行器集 —定義「執行什麼「___HTMLTAG_129__HTMLTAG_130__HTMLTAG_131___fapi-2-安全設定檔___HTMLTAG_132__HTMLTAG_133__HTMLTAG_134___
___HTMLTAG_135__HTMLTAG_136__HTMLTAG_137___條件___HTMLTAG_138__HTMLTAG_139__HTMLTAG_140___條件決定哪些客戶端受到影響 - 「為誰強制執行」___HTMLTAG_141__HTMLTAG_142___客戶端具有該角色<code>fapi-客戶端___HTMLTAG_144__HTMLTAG_145__HTMLTAG_146___
___HTMLTAG_147__HTMLTAG_148__HTMLTAG_149___執行器___HTMLTAG_150__HTMLTAG_151__HTMLTAG_152____具體執行邏輯 —「如何執行」____HTMLTAG_153__HTMLTAG_154____MLTAGML
</tbody>
</table>

___HTMLTAG_159__HTMLTAG_160___1.3 建立客戶資料___HTMLTAG_161__HTMLTAG_162___
<ol>
___HTMLTAG_164__HTMLTAG_165___轉至 <strong>領域設定</strong> → <strong>客戶端策略</strong> → 選項卡 <strong>MLTAG_170___1HTHTML
___HTMLTAG_174__HTMLTAG_175___點選 <strong>建立客戶資料___HTMLTAG_177__HTMLTAG_178__HTMLTAG_179___
___HTMLTAG_180__HTMLTAG_181___输入 <strong>名称</strong> 和 <strong>说明___HTMLTAG_185__HTMLTAG_186__HTMLTAG_187___
___HTMLTAG_188__HTMLTAG_189___點選 <strong>儲存</strong> → 開啟設定檔 → 點選 <strong>新增執行者___HTMLTAG_193__HTMLTAG_194__5MLG_新增執行者___HTMLTAG_193__HTMLTAG_194__5MLG_194__19
</ol>

___HTMLTAG_197__HTMLTAG_198___1.4 可用的執行器___HTMLTAG_199__HTMLTAG_200___<table>
<thead>
___HTMLTAG_203__HTMLTAG_204___執行器___HTMLTAG_205__HTMLTAG_206___說明____HTMLTAG_207__HTMLTAG_208___參數____HTMLTAG_209__HTMLTAG_210___
</thead>
<tbody>
___HTMLTAG_213__HTMLTAG_214__HTMLTAG_215___安全客戶端身份驗證器____HTMLTAG_216__HTMLTAG_217__HTMLTAG_218___需要特定驗證方法____HTMLTAG_219__HTMLTAG_220___允許的驗證器：client-secret、client-jwt、客戶端-x509___HTMLTAG_221__HTMLTAG_222___
___HTMLTAG_223__HTMLTAG_224__HTMLTAG_225___PKCE 強制器___HTMLTAG_226__HTMLTAG_227__HTMLTAG_228___必需的PKCE____HTMLTAG_229__HTMLTAG_230___增強：開啟（如果客戶端缺失，則自動新增）___HTMLTAG_231__HTMLTAG_232___
___HTMLTAG_233__HTMLTAG_234__HTMLTAG_235___安全簽章演算法____HTMLTAG_236__HTMLTAG_237__HTMLTAG_23 8___僅允許安全演算法__HTMLTAG_239__HTMLTAG_240___預設：RS256、ES256、PS256___HTMLTAG_241__HTMLTAG_242___
___HTMLTAG_243__HTMLTAG_244__HTMLTAG_245___簽章 JWT 的安全簽章演算法___HTMLTAG_246__HTMLTAG_247__HTMLTAG_248___客戶端 JWT驗證演算法____HTMLTAG_249__HTMLTAG_250___PS256、ES256（不允許RS256)___HTMLTAG_251__HTMLTAG_252___
___HTMLTAG_253__HTMLTAG_254__HTMLTAG_255___密鑰執行器持有者____HTMLTAG_256__HTMLTAG_257__HTMLTAG_258___所需的令牌綁定（mTLS 或DPoP）____HTMLTAG_259__HTMLTAG_260___自動設定：ON___HTMLTAG_261__HTMLTAG_262___
___HTMLTAG_263__HTMLTAG_264__HTMLTAG_265___DPoP 證明驗證器___HTMLTAG_266__HTMLTAG_267__HTMLTAG_268___令牌請求中所需的 DPoP 證明___HTMLTAG_269__HTMLTAG_707012720_____
___HTMLTAG_273__HTMLTAG_274__HTMLTAG_275___機密用戶端執行者___HTMLTAG_276__HTMLTAG_277__HTMLTAG_278___僅機密客戶端___HTMLTAG_279__HTMLTAG_280__HTTAG_280__HT
___HTMLTAG_283__HTMLTAG_284__HTMLTAG_285___需同意___HTMLTAG_286__HTMLTAG_287__HTMLTAG_288___需要同意畫面_</td>______HTMLTAG_290HTMLTAU_2911__
___HTMLTAG_293__HTMLTAG_294__HTMLTAG_295___停用全範圍___HTMLTAG_296__HTMLTAG_297__HTMLTAG_298___停用全範圍映射____HTMLTAG_299__HTMLTAG_300__HTMLTAG_30110299__
___HTMLTAG_303__HTMLTAG_304__HTMLTAG_305___拒絕隱式授權___HTMLTAG_306__HTMLTAG_307__HTMLTAG_308___禁止隱式流___HTMLTAG_309__HTMLTAG_310__HTMLTAG_311112G1310__HT
___HTMLTAG_313__HTMLTAG_314__HTMLTAG_315___拒絕資源所有者密碼憑證授予___HTMLTAG_316__HTMLTAG_317__HTMLTAG_318___不允許 ROPC___HTMLTAG_319__HTMLTAG_320MLTAGML_32010GML
___HTMLTAG_323__HTMLTAG_324__HTMLTAG_325___安全重定向 URI 強制器___HTMLTAG_326__HTMLTAG_327__HTMLTAG_328___驗證重定向 URI____HTMLTAG_329__HTMLTAGMLTAG_328___驗證重新導向 URI____HTMLTAG_329__HTMLTAGML_330___/TMLTAGML”
___HTMLTAG_333__HTMLTAG_334__HTMLTAG_335___安全請求物件___HTMLTAG_336__HTMLTAG_337__HTMLTAG_338___所需的 JAR（JWT 安全授權請求）___HTMLTAG_339__HTMLTAG_34014401
___HTMLTAG_343__HTMLTAG_344__HTMLTAG_345___安全回應類型___HTMLTAG_346__HTMLTAG_347__HTMLTAG_348___C請允許安全回應類型___HTMLTAG_349__HTMLTAG_350___允許：代碼（無令牌，id_token）___HTMLTAG_351__HTMLTAG_352___
___HTMLTAG_353__HTMLTAG_354__HTMLTAG_355___安全會話強制器____HTMLTAG_356__HTMLTAG_357__HTMLTAG_358___強制會話設定____HTMLTAG_359__HTMLTAG_360__1TAG_360__132G_360__
</tbody>
</table>___HTMLTAG_365__HTMLTAG_366___1.5 可用條件__HTMLTAG_367__HTMLTAG_368___

<table>
<thead>
___HTMLTAG_371__HTMLTAG_372___條件____HTMLTAG_373__HTMLTAG_374___說明____HTMLTAG_375__HTMLTAG_376___範例____HTMLTAG_377__HTMLTAG_378___
</thead>
<tbody>
___HTMLTAG_381__HTMLTAG_382__HTMLTAG_383___任何客戶端___HTMLTAG_384__HTMLTAG_385__HTMLTAG_386___適用於所有客戶端___HTMLTAG_387__HTMLTAG_388886___適用於所有客戶端___HTMLTAG_387__HTMLTAG_3888886___
___HTMLTAG_391__HTMLTAG_392__HTMLTAG_393___客戶端存取類型___HTMLTAG_394__HTMLTAG_395__HTMLTAG_396___基於客戶端類型（公開/機密）___HTMLTAG_397__HTMLTAG_398___MLTAG_398___ PKCE___HTMLTAG_399__HTMLTAG_400___
___HTMLTAG_401__HTMLTAG_402__HTMLTAG_403___客戶端角色___HTMLTAG_404__HTMLTAG_405__HTMLTAG_406___客戶端具有特定角色_ ___HTMLTAG_407__HTMLTAG_408___客戶端具有<code>fapi相容___HTMLTAG_410__HTMLTAG_411__HTMLTAG_412___
___HTMLTAG_413__HTMLTAG_414__HTMLTAG_415___客戶端範圍____HTMLTAG_416__HTMLTAG_417__HTMLTAG_418___客戶端使用特定範圍____HTMLTAG_419__HTMLTAG_420____客戶端請求範圍<code>付款___HTMLTAG_422__HTMLTAG_423__HTMLTAG_424___
___HTMLTAG_425__HTMLTAG_426__HTMLTAG_427___客戶端更新來源群組___HTMLTAG_428__HTMLTAG_429__HTMLTAG_430___基於來源建立/更新客戶端___HTMLTAG_431__HTMLTAG_432___基於來源建立/更新客戶端___HTMLTAG_431__HTMLTAG_432___透過動態註冊/更新客戶端4___3_U431__
___HTMLTAG_435__HTMLTAG_436__HTMLTAG_437___客戶端更新上下文___HTMLTAG_438__HTMLTAG_439__HTMLTAG_440___客戶端更新時的上下文___HTMLTAG_441__HTMLTAG_4440___客戶端更新時的上下文___HTMLTAG_441__HTMLTAG_442________24ML4146
</tbody>
</table>

___HTMLTAG_447__HTMLTAG_448___1.6 建立客戶端策略___HTMLTAG_449__HTMLTAG_450___
<ol>
___HTMLTAG_452__HTMLTAG_453___轉至 <strong>領域設定</strong> → <strong>客戶端策略</strong> → 選項卡 <strong>策略</strong> → 選項卡 <strong>策略___MLTAGML
___HTMLTAG_462__HTMLTAG_463___點選 <strong>建立客戶政策___HTMLTAG_465__HTMLTAG_466__HTMLTAG_467___
___HTMLTAG_468__HTMLTAG_469___输入 <strong>名称</strong> 和 <strong>说明___HTMLTAG_473__HTMLTAG_474__HTMLTAG_475___
___HTMLTAG_476__HTMLTAG_477___新增 <strong>條件</strong>（決定哪些客戶端受到影響）___HTMLTAG_480__HTMLTAG_481___
___HTMLTAG_482__HTMLTAG_483___新增 <strong>客戶設定檔</strong>（適用哪個設定檔）___HTMLTAG_486__HTMLTAG_487___
</ol>

___預編碼_1___

___HTMLTAG_489__HTMLTAG_490___1.7 實際政策範例___HTMLTAG_491__HTMLTAG_492___

___HTMLTAG_493__HTMLTAG_494___政策 1：所有客戶端的基本安全性___HTMLTAG_495__HTMLTAG_496___
___預編碼_2___

___HTMLTAG_497__HTMLTAG_498___政策 2：金融 API 的高安全性____HTMLTAG_499__HTMLTAG_500___
___預編碼_3___

___HTMLTAG_501__HTMLTAG_502___2。 FAPI 2.0 安全設定檔___HTMLTAG_503__HTMLTAG_504___<p>FAPI（金融級 API）是 OpenID 基金會開發的一套高安全標準，廣泛應用於 <strong>開放銀行</strong>、<strong>支付服務指令 2 (PSD2)</strong> 和金融應用程式。

___HTMLTAG_511__HTMLTAG_512___2.1 FAPI 2.0 基準設定檔___HTMLTAG_513__HTMLTAG_514___
<p>Keycloak 為 FAPI 2.0 提供內建設定檔：</p>

<table>
<thead>
___HTMLTAG_519__HTMLTAG_520___請求___HTMLTAG_521__HTMLTAG_522___說明___HTMLTAG_523__HTMLTAG_524___
</thead>
<tbody>
___HTMLTAG_527__HTMLTAG_528___僅限授權程式碼流___HTMLTAG_529__HTMLTAG_530___不允許隱式，ROPC____HTMLTAG_531__HTMLTAG_532___
___HTMLTAG_533__HTMLTAG_534___PKCE (S256)___HTMLTAG_535__HTMLTAG_536___所有客戶端必需____HTMLTAG_537__HTMLTAG_538___
___HTMLTAG_539__HTMLTAG_540___機密客戶端___HTMLTAG_541__HTMLTAG_542___所需的客戶端驗證___HTMLTAG_543__HTMLTAG_544___
___HTMLTAG_545__HTMLTAG_546___安全簽章演算法____HTMLTAG_547__HTMLTAG_548___PS256、ES256（無 RS256）___HTMLTAG_549__HTMLTAG_550___
___HTMLTAG_551__HTMLTAG_552___寄件者限制令牌___HTMLTAG_553__HTMLTAG_554___DPoP 或 mTLS 令牌綁定___HTMLTAG_555__HTMLTAG_556___
___HTMLTAG_557__HTMLTAG_558___重定向 URI 完全匹配____HTMLTAG_559__HTMLTAG_560___無通配符____HTMLTAG_561__HTMLTAG_562___
___HTMLTAG_563__HTMLTAG_564___需要 HTTPS___HTMLTAG_565__HTMLTAG_566___對於所有端點____HTMLTAG_567__HTMLTAG_568___
</tbody>
</table>

___HTMLTAG_571__HTMLTAG_572___2.2 FAPI 2.0 高階設定檔（訊息簽章）___HTMLTAG_573__HTMLTAG_574___
<p>除了基線之外，高階設定檔新增：</p>
<ul>
___HTMLTAG_578__HTMLTAG_579__HTMLTAG_580___PAR（推送授權請求）</strong> — RFC 9126：在重定向之前透過反向通道傳送授權請求____HTMLTAG_582__HTMLTAG_583___
___HTMLTAG_584__HTMLTAG_585__HTMLTAG_586___JAR（JWT 安全授權請求）</strong> — RFC 9101：以 JWT 簽署的授權參數____HTMLTAG_588__HTMLTAG_589___
___HTMLTAG_590__HTMLTAG_591__HTMLTAG_592___JARM（JWT 安全授權回應模式）</strong>：以 JWT 簽署的授權回應____HTMLTAG_594__HTMLTAG_595___
</ul>

___預編碼_4______HTMLTAG_597__HTMLTAG_598___2.3 在 Keycloak 中啟用 FAPI 2.0___HTMLTAG_599__HTMLTAG_600___
<ol>
___HTMLTAG_602__HTMLTAG_603___轉至 <strong>領域設定</strong> → <strong>客戶端策略</strong> → 選項卡 <strong>MLTAG_608___1HTHTMLTA4101014U41TAG_608___
___HTMLTAG_612__HTMLTAG_613___Keycloak 可用 <strong>全域設定檔</strong>：</p>
<ul>
___HTMLTAG_618__HTMLTAG_619___fapi-2-安全設定檔___HTMLTAG_620__HTMLTAG_621___
___HTMLTAG_622__HTMLTAG_623___fapi-2-訊息簽署設定檔___HTMLTAG_624__HTMLTAG_625___
</ul>
</li>
___HTMLTAG_628__HTMLTAG_629___使用對應的設定檔建立策略___HTMLTAG_630__HTMLTAG_631___
___HTMLTAG_632__HTMLTAG_633___分配條件以選擇需要合規性的客戶___HTMLTAG_634__HTMLTAG_635___
</ol>

___預編碼_5___

___HTMLTAG_637__HTMLTAG_638___3。客戶端秘密輪換___HTMLTAG_639__HTMLTAG_640___

<p>客戶端金鑰輪換允許更改客戶端金鑰 <strong>不會導致停機</strong> — 舊金鑰在過渡期間保持活動狀態。 </p>

___HTMLTAG_645__HTMLTAG_646___3.1 設定客戶端秘密輪調___HTMLTAG_647__HTMLTAG_648___
<p>與執行程式一起使用 <strong>客戶端策略</strong> <strong>秘密輪替</strong>：</p>

___預編碼_6___

___HTMLTAG_655__HTMLTAG_656___運作原理：___HTMLTAG_657__HTMLTAG_658___
___預編碼_7___

___HTMLTAG_659__HTMLTAG_660___3.2 實作秘密輪調___HTMLTAG_661__HTMLTAG_662___
___預編碼_8___

<h2 id="4-service-accounts"><strong>4.服務帳戶___HTMLTAG_665__HTMLTAG_666___

<p>當為機密客戶端啟用 <strong>服務帳戶角色</strong> 時，Keycloak 會為該客戶端建立一個特殊的 <strong> 服務帳戶使用者</strong>。此使用者代表機器對機器操作中的客戶端。 </p>

___HTMLTAG_673__HTMLTAG_674___4.1 服務帳號使用者___HTMLTAG_675__HTMLTAG_676___
___預編碼_9___

___HTMLTAG_677__HTMLTAG_678___4.2 將角色指派給服務帳戶___HTMLTAG_679__HTMLTAG_680___
<ol>
___HTMLTAG_682__HTMLTAG_683___開啟客戶端 → 選項卡 <strong>服務帳戶角色___HTMLTAG_685__HTMLTAG_686__HTMLTAG_687___
___HTMLTAG_688__HTMLTAG_689___點選 <strong>指派角色___HTMLTAG_691__HTMLTAG_692__HTMLTAG_693___
___HTMLTAG_694__HTMLTAG_695___選擇領域角色或依客戶端過濾以指派客戶端角色___HTMLTAG_696__HTMLTAG_697___
</ol>

___預編碼_10______HTMLTAG_699__HTMLTAG_700___4.3 服務帳戶最佳實務___HTMLTAG_701__HTMLTAG_702___
<ul>
___HTMLTAG_704__HTMLTAG_705__HTMLTAG_706___最低權限</strong>：僅向每個服務分配必要的角色___HTMLTAG_708__HTMLTAG_709___
___HTMLTAG_710__HTMLTAG_711__HTMLTAG_712___單獨的客戶端</strong>：為每個微服務建立單獨的客戶端，不共用___HTMLTAG_714__HTMLTAG_715___
___HTMLTAG_716__HTMLTAG_717__HTMLTAG_718___審核</strong>：啟用事件日誌記錄以追蹤服務帳戶活動____HTMLTAG_720__HTMLTAG_721___
___HTMLTAG_722__HTMLTAG_723__HTMLTAG_724___令牌生命週期短</strong>：服務帳戶的存取權杖應該很短（1-5 分鐘）___HTMLTAG_726__HTMLTAG_727___
___HTMLTAG_728__HTMLTAG_729__HTMLTAG_730___輪換憑證</strong>：使用客戶端金鑰輪替或基於憑證的驗證___HTMLTAG_732__HTMLTAG_733___
</ul>

___HTMLTAG_735__HTMLTAG_736___5。受眾支持___HTMLTAG_737__HTMLTAG_738___

<p>受眾（<code>aud</code> 宣告）決定要使用哪個 <strong> 資源伺服器</strong> 存取權杖。這是防止令牌被用於不需要的服務的重要安全機制。 </p>

___HTMLTAG_745__HTMLTAG_746___5.1 問題___HTMLTAG_747__HTMLTAG_748___
<pre><code># Mặc định, access token chỉ có aud = client-id đã request
{
  "aud": "my-frontend-app",     // ← chỉ có client đã request
  "azp": "my-frontend-app"
}

# Resource Server (my-api-service) verify token:
# → aud không chứa "my-api-service"
# → REJECT! (nếu resource server validate audience)</code></pre>

___HTMLTAG_749__HTMLTAG_750___5.2 解決方案：受眾協定映射器___HTMLTAG_751__HTMLTAG_752___
<p>將 <strong>受眾映射器</strong> 新增至客戶端或客戶端範圍，以將資源伺服器新增至 <code>aud</code>:</p>

<pre><code># Cách 1: Thêm Audience Mapper trực tiếp vào client
Client: my-frontend-app → Client scopes → Dedicated scope → Add mapper
  Mapper Type: Audience
  Name: api-audience
  Included Client Audience: my-api-service
  Included Custom Audience: (trống)
  Add to ID token: OFF
  Add to access token: ON

# Cách 2: Tạo Client Scope chứa Audience Mapper
Client Scope: api-access
  Mapper: Audience → my-api-service
  Gán scope cho frontend client

# Kết quả trong access token:
{
  "aud": ["my-frontend-app", "my-api-service"],
  "azp": "my-frontend-app"
}</code></pre>

___HTMLTAG_759__HTMLTAG_760___5.3 受眾解析映射器___HTMLTAG_761__HTMLTAG_762___
<p>Keycloak 具有內建 <strong>Audience Resolve</strong> 映射器（在預設範圍 <code>roles</code>） — 自動為使用者擁有客戶端的用戶端新增用戶端的用戶端新增用戶<code>aud</code>角色：</p>

<pre><code># Nếu user có role "app-admin" của client "my-api-service"
# → Audience Resolve tự động thêm "my-api-service" vào aud
{
  "aud": ["my-frontend-app", "my-api-service"],
  "resource_access": {
    "my-api-service": {
      "roles": ["app-admin"]
    }
  }
}</code></pre>

___HTMLTAG_771__HTMLTAG_772___6。機密客戶憑證___HTMLTAG_773__HTMLTAG_774___

___HTMLTAG_775__HTMLTAG_776___6.1 客戶端 ID 與秘密___HTMLTAG_777__HTMLTAG_778___
<p>最簡單的方法 — 用戶端在請求中傳送 ID 和金鑰：</p>

<pre><code># Cách 1: Form parameter
POST /token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
client_id=my-client&
client_secret=my-secret

# Cách 2: HTTP Basic Authentication
POST /token
Content-Type: application/x-www-form-urlencoded
Authorization: Basic base64(client_id:client_secret)

grant_type=client_credentials</code></pre>

___HTMLTAG_781__HTMLTAG_782___6.2 簽章 JWT (private_key_jwt)___HTMLTAG_783__HTMLTAG_784___
<p>客戶端建立並使用私鑰簽署 JWT，傳送至 Keycloak。 Keycloak 使用註冊的公鑰/憑證進行驗證。 </p>

___HTMLTAG_787__HTMLTAG_788___Keycloak中的設定：___HTMLTAG_789__HTMLTAG_790___
<ol>
___HTMLTAG_792__HTMLTAG_793___客戶端 → 選項卡 <strong>憑證</strong> → <strong>客戶端身份驗證器</strong>：<code> JWT___HTMLTAG_799__HTMLTAG_800__HTMLTAG_801___
___HTMLTAG_802__HTMLTAG_803___上傳客戶端憑證或 JWKS URL___HTMLTAG_804__HTMLTAG_805___
</ol>

<pre><code># Tạo key pair cho client
openssl genrsa -out client-private.pem 2048
openssl req -new -x509 -key client-private.pem -out client-cert.pem -days 365

# Upload client-cert.pem vào Keycloak client Credentials tab

# Token request với client_assertion
POST /realms/my-realm/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials&
client_id=my-client&
client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer&
client_assertion=eyJhbGciOiJSUzI1NiIs...</code></pre>

___HTMLTAG_807__HTMLTAG_808___客戶端斷言 JWT 結構：___HTMLTAG_809__HTMLTAG_810___
<pre><code>{
  "iss": "my-client",                    // Client ID
  "sub": "my-client",                    // Client ID
  "aud": "http://localhost:8080/realms/my-realm",  // Token endpoint
  "iat": 1711800000,
  "exp": 1711800060,                     // Short-lived (60s)
  "jti": "unique-jwt-id"                 // Unique ID
}</code></pre>___HTMLTAG_811__HTMLTAG_812___6.3 X.509 憑證/相互 TLS___HTMLTAG_813__HTMLTAG_814___
<p>客戶端使用客戶端 TLS 憑證（相互 TLS — mTLS）進行驗證。這是最安全的方法。 </p>

___HTMLTAG_817__HTMLTAG_818___設定：___HTMLTAG_819__HTMLTAG_820___
<ol>
___HTMLTAG_822__HTMLTAG_823___客戶端 → 選項卡 <strong>憑證</strong> → <strong>客戶端驗證器</strong>：<code>X.50憑證___HTMLTAG_829__HTMLTAG_830__HTMLTAG_831___
___HTMLTAG_832__HTMLTAG_833___輸入 <strong>主題 DN</strong> 或憑證匹配模式___HTMLTAG_836__HTMLTAG_837___
___HTMLTAG_838__HTMLTAG_839___設定Keycloak伺服器啟用mTLS端點___HTMLTAG_840__HTMLTAG_841___
</ol>

<pre><code># Keycloak mTLS configuration (quarkus)
# conf/keycloak.conf hoặc environment variables
KC_HTTPS_CLIENT_AUTH=request
KC_HTTPS_KEY_STORE_FILE=/opt/keycloak/certs/server-keystore.p12
KC_HTTPS_TRUST_STORE_FILE=/opt/keycloak/certs/truststore.p12

# Client gọi token endpoint với client certificate
curl -s -X POST \
  "https://localhost:8443/realms/my-realm/protocol/openid-connect/token" \
  --cert client-cert.pem \
  --key client-private.pem \
  -d "grant_type=client_credentials" \
  -d "client_id=my-mtls-client"</code></pre>

___HTMLTAG_843__HTMLTAG_844___將 mTLS 與憑證綁定令牌結合：___HTMLTAG_845__HTMLTAG_846___
<pre><code># Access token chứa certificate thumbprint
{
  "cnf": {
    "x5t#S256": "sha256-thumbprint-of-client-certificate"
  }
}

# Resource server verify:
# 1. Client gửi request với TLS client certificate
# 2. Resource server extract certificate thumbprint
# 3. So sánh với cnf.x5t#S256 trong access token
# → Nếu match → token hợp lệ + bound to correct client</code></pre>

___HTMLTAG_847__HTMLTAG_848___7。標準代幣交換 (RFC 8693)___HTMLTAG_849__HTMLTAG_850___

<p>令牌交換允許服務 <strong>交換權杖</strong>接收具有不同權限或受眾的新代幣。 </p>

___HTMLTAG_855__HTMLTAG_856___7.1 使用案例___HTMLTAG_857__HTMLTAG_858___
<ul>
___HTMLTAG_860__HTMLTAG_861__HTMLTAG_862___委託</strong>：服務 A 希望「代表」使用者呼叫服務 B — 與受眾交換存取權杖以取得新代幣 = 服務 B___HTMLTAG_864__HTMLTAG_865___
___HTMLTAG_866__HTMLTAG_867__HTMLTAG_868___模擬</strong>：管理員想要扮演另一個使用者___HTMLTAG_870__HTMLTAG_871___
___HTMLTAG_872__HTMLTAG_873__HTMLTAG_874___令牌類型轉換</strong>：交換 SAML 斷言的存取權杖（反之亦然）___HTMLTAG_876__HTMLTAG_877___
</ul>

___HTMLTAG_879__HTMLTAG_880___7.2 令牌交換配置___HTMLTAG_881__HTMLTAG_882___
<p>Keycloak 中的令牌交換是 <strong>預覽功能</strong> — 需要啟用：</p>

<pre><code># Bật feature
bin/kc.sh start-dev --features=token-exchange

# Docker
docker run -e KC_FEATURES=token-exchange quay.io/keycloak/keycloak:26.2.4 start-dev</code></pre>

___HTMLTAG_887__HTMLTAG_888___設定權限：___HTMLTAG_889__HTMLTAG_890___
<ol>
___HTMLTAG_892__HTMLTAG_893___開啟 <strong>目標客戶端</strong>（您想要交換權杖的客戶端）→ 標籤 <strong>__HTHTMLTAG_897__HTMLTAG_898
___HTMLTAG_900__HTMLTAG_901___已啟用 <strong>已啟用權限___HTMLTAG_903__HTMLTAG_904__HTMLTAG_905___
___HTMLTAG_906__HTMLTAG_907___點選 <strong>令牌交換</strong> 權限 → 設定策略以允許來源客戶端交換___HTMLTAG_910__HTMLTAG_911___
</ol>

___預編碼_20______HTMLTAG_913__HTMLTAG_914___7.3 委託與模擬___HTMLTAG_915__HTMLTAG_916___
<table>
<thead>
___HTMLTAG_919__HTMLTAG_920___模式____HTMLTAG_921__HTMLTAG_922___說明____HTMLTAG_923__HTMLTAG_924___令牌聲明____HTMLTAG_925__HTMLTAG_926___
</thead>
<tbody>
___HTMLTAG_929__HTMLTAG_930__HTMLTAG_931___委託___HTMLTAG_932__HTMLTAG_933__HTMLTAG_934___服務 B 知道服務 A 正在代表其使用者___HTMLTAG_935__HTMLTAG_936974MLTAG_41374MLTAG_sub <code>sub</code> = 使用者___HTMLTAG_941__HTMLTAG_942___
___HTMLTAG_943__HTMLTAG_944__HTMLTAG_945___模擬___HTMLTAG_946__HTMLTAG_947__HTMLTAG_948___服務 B 不知道 — 權杖與直接使用者要求相同___HTMLTAG_949__HTMLTAGML_9501114U41____MLTAG_949__HTMLTAGML_9501114251____42_421_U450_41TAGMLTAG1011_425_42____ <code>act</code>)</td></tr>
</tbody>
</table>

___HTMLTAG_959__HTMLTAG_960___8。 JWT 授權 (RFC 7523)___HTMLTAG_961__HTMLTAG_962___

<p>允許客戶端使用受信任的頒發者</strong>發出的 <strong>JWT 斷言來取得存取令牌，而無需使用者互動。 </p>

___HTMLTAG_967__HTMLTAG_968___8.1 流程___HTMLTAG_969__HTMLTAG_970___
<pre><code># External issuer (ví dụ: Azure AD, Google) cấp JWT cho client
# Client gửi JWT đến Keycloak để exchange lấy Keycloak access token

POST /realms/my-realm/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&
assertion=eyJhbGciOiJSUzI1NiIs...&  # JWT from external issuer
client_id=my-client&
client_secret=my-secret&
scope=openid</code></pre>

___HTMLTAG_971__HTMLTAG_972___8.2 設定 JWT 授權___HTMLTAG_973__HTMLTAG_974___
<ol>
___HTMLTAG_976__HTMLTAG_977___領域設定 → <strong>金鑰</strong> → 新增外部發行者的簽章金鑰___HTMLTAG_980__HTMLTAG_981___
___HTMLTAG_982__HTMLTAG_983___或設定外部頒發者 <strong>身分提供者</strong>___HTMLTAG_986__HTMLTAG_987___
___HTMLTAG_988__HTMLTAG_989___客戶端必須啟用 <strong>服務帳戶角色</strong>___HTMLTAG_992__HTMLTAG_993___
</ol>

___HTMLTAG_995__HTMLTAG_996___9。為 MCP 伺服器設定 Keycloak___HTMLTAG_997__HTMLTAG_998___

<p>模型上下文協定 (MCP) 伺服器使用 OAuth 2.0 對用戶端進行身份驗證。 Keycloak 可以充當 MCP 生態系統的 <strong> 授權伺服器</strong>.</p>

___HTMLTAG_1003__HTMLTAG_1004___9.1 MCP OAuth 2.0 流程___HTMLTAG_1005__HTMLTAG_1006___
<p>MCP 規格需要 OAuth 2.0 進行伺服器到伺服器和用戶端到伺服器驗證：</p>

<pre><code>┌──────────┐     ┌──────────┐     ┌──────────┐
│ MCP Host │     │ Keycloak │     │MCP Server│
│ (Client) │     │  (AuthZ) │     │(Resource)│
└────┬─────┘     └────┬─────┘     └────┬─────┘
     │                │                │
     │ 1. Request     │                │
     │    auth info    │                │
     │───────────────────────────────>│
     │ 2. Return      │                │
     │    auth metadata│                │
     │<──────────────────────────────│
     │                │                │
     │ 3. Authorization Code Flow     │
     │    (hoặc Client Credentials)   │
     │───────────────>│                │
     │ 4. Tokens      │                │
     │<───────────────│                │
     │                │                │
     │ 5. API call with access token  │
     │───────────────────────────────>│
     │ 6. MCP Server validates token  │
     │    via Keycloak JWKS/Introspect│
     │<──────────────────────────────│</code></pre>

___HTMLTAG_1009__HTMLTAG_1010___9.2 為 MCP 主機建立客戶端___HTMLTAG_1011__HTMLTAG_1012___
<pre><code># MCP Host client — ứng dụng AI/LLM kết nối tới MCP servers
Client ID: mcp-host-app
Client type: OpenID Connect
Client authentication: ON (confidential)

Capability Config:
  Standard flow: ON          # Cho interactive MCP sessions
  Service accounts roles: ON # Cho automated MCP operations

Access Settings:
  Valid redirect URIs: http://localhost:3001/callback
  Web origins: http://localhost:3001

Advanced:
  PKCE Code Challenge Method: S256
  Access Token Lifespan: 300   # 5 phút</code></pre>

___HTMLTAG_1013__HTMLTAG_1014___9.3 為 MCP 伺服器（資源伺服器）建立客戶端___HTMLTAG_1015__HTMLTAG_1016___
___預編碼_24___

___HTMLTAG_1017__HTMLTAG_1018___9.4 為 MCP 操作建立範圍___HTMLTAG_1019__HTMLTAG_1020___
___預編碼_25___

___HTMLTAG_1021__HTMLTAG_1022___9.5 MCP 受眾映射器___HTMLTAG_1023__HTMLTAG_1024___
<pre><code># MCP Host client cần access token với audience = MCP Server
Client: mcp-host-app → Client scopes → Dedicated scope → Add mapper
  Mapper Type: Audience
  Name: mcp-server-audience
  Included Client Audience: mcp-tool-server
  Add to access token: ON

# Access token kết quả:
{
  "iss": "http://localhost:8080/realms/my-realm",
  "sub": "user-or-service-account-id",
  "aud": ["mcp-host-app", "mcp-tool-server"],
  "azp": "mcp-host-app",
  "scope": "openid mcp:tools:read mcp:resources:read",
  "mcp_permissions": ["tools:read", "resources:read"]
}</code></pre>

___HTMLTAG_1025__HTMLTAG_1026___9.6 MCP 多伺服器的令牌交換___HTMLTAG_1027__HTMLTAG_1028___
<p>當 MCP Host 需要呼叫許多不同的 MCP 伺服器時，使用 Token Exchange 取得每個伺服器的代幣：</p>

___預編碼_27___

___HTMLTAG_1031__HTMLTAG_1032___9.7 MCP 用戶端策略___HTMLTAG_1033__HTMLTAG_1034___
___預編碼_28______HTMLTAG_1035__HTMLTAG_1036___10。練習___HTMLTAG_1037__HTMLTAG_1038___

___HTMLTAG_1039__HTMLTAG_1040___實驗室 1：客戶端策略 — 基線安全___HTMLTAG_1041__HTMLTAG_1042___
<ol>
___HTMLTAG_1044__HTMLTAG_1045___建立客戶端設定檔 <code>基線安全性</code> 與執行器：拒絕隱式授權、PKCE 強制執行器、安全簽章演算法___HTMLTAG_1048__HTMLTAG_1049___
___HTMLTAG_1050__HTMLTAG_1051___建立客戶端策略 <code>執行基線</code>，條件為<code>___任何客戶端___HTMLTAG_1055__HTMLTAG_105677___
___HTMLTAG_1058__HTMLTAG_1059___測試：建立新客戶端並嘗試在沒有 PKCE 的情況下請求令牌 → 被拒絕___HTMLTAG_1060__HTMLTAG_1061___
___HTMLTAG_1062__HTMLTAG_1063___測試：嘗試開啟隱含串流 → 被拒絕___HTMLTAG_1064__HTMLTAG_1065___
</ol>

___HTMLTAG_1067__HTMLTAG_1068___實驗室 2：FAPI 2.0 合規性___HTMLTAG_1069__HTMLTAG_1070___
<ol>
___HTMLTAG_1072__HTMLTAG_1073___使用內建 FAPI 2.0 安全設定檔建立客戶設定檔___HTMLTAG_1074__HTMLTAG_1075___
___HTMLTAG_1076__HTMLTAG_1077___建立僅適用於具有 <code>fapi-client___HTMLTAG_1079__HTMLTAG_1080__HTMLTAG_1081___ 角色的客戶端的策略
___HTMLTAG_1082__HTMLTAG_1083___使用簽章 JWT 驗證建立機密客戶端___HTMLTAG_1084__HTMLTAG_1085___
___HTMLTAG_1086__HTMLTAG_1087___使用 PAR + PKCE + DPoP 測試完整授權流程___HTMLTAG_1088__HTMLTAG_1089___
</ol>

___HTMLTAG_1091__HTMLTAG_1092___實驗室 3：客戶端密鑰輪換___HTMLTAG_1093__HTMLTAG_1094___
<ol>
___HTMLTAG_1096__HTMLTAG_1097___配置秘密輪換執行器（過期：60 秒，寬限期：30 秒用於測試）___HTMLTAG_1098__HTMLTAG_1099___
___HTMLTAG_1100__HTMLTAG_1101___建立機密客戶端 → 記錄機密 A___HTMLTAG_1102__HTMLTAG_1103___
___HTMLTAG_1104__HTMLTAG_1105___等待 60 秒 → 重新產生機密 → 記錄機密 B___HTMLTAG_1106__HTMLTAG_1107___
___HTMLTAG_1108__HTMLTAG_1109___驗證：秘密 A 在寬限期（30 秒）內仍處於活動狀態___HTMLTAG_1110__HTMLTAG_1111___
___HTMLTAG_1112__HTMLTAG_1113___驗證：寬限期後，只有秘密 B 處於活動狀態___HTMLTAG_1114__HTMLTAG_1115___
</ol>

___HTMLTAG_1117__HTMLTAG_1118___實驗 4：服務帳戶 + 令牌交換___HTMLTAG_1119__HTMLTAG_1120___
<ol>
___HTMLTAG_1122__HTMLTAG_1123___建立 3 個客戶端： <code>frontend-app</code>（公用）、<code>api-gateway</code>（機密 + 服務帳號） <code>支付服務</code>（機密）___HTMLTAG_1130__HTMLTAG_1131___
___HTMLTAG_1132__HTMLTAG_1133___使用者透過 <code>frontend-app</code> 登入 → 接收存取權杖___HTMLTAG_1136__HTMLTAG_1137___
___HTMLTAG_1138__HTMLTAG_1139__HTMLTAG_1140___api-gateway</code>從前端接收令牌，兌換新令牌<code>支付服務___HTMLTAG_1143__HTMLTAGMLTA144442_____
___HTMLTAG_1146__HTMLTAG_1147___驗證：新令牌具有 <code>aud：付款服務</code> 和 <code>act.sub：api-gateway___HTMLTAG_1151__13G1151__131151153_ML
</ol>___HTMLTAG_1155__HTMLTAG_1156___實驗 5：MCP 伺服器設定___HTMLTAG_1157__HTMLTAG_1158___
<ol>
___HTMLTAG_1160__HTMLTAG_1161___建立領域 <code>mcp-demo___HTMLTAG_1163__HTMLTAG_1164__HTMLTAG_1165___
___HTMLTAG_1166__HTMLTAG_1167___建立客戶端：<code>mcp-host</code>（機密）、<code>mcp-tools-server</code>（機密）HTHT70___MLG1721171___（機密）HTML
___HTMLTAG_1174__HTMLTAG_1175___建立客戶端範圍：<code>mcp:tools:read</code>、<code>mcp:tools:execute___HTMLTAGML_1798HT
___HTMLTAG_1182__HTMLTAG_1183___為 <code>mcp-host</code> 設定受眾映射器 → 受眾 = <code>mcp-tools-server____HTMLTAGML_18787878782__41878_____
___HTMLTAG_1190__HTMLTAG_1191___使用客戶端憑證流程取得令牌___HTMLTAG_1192__HTMLTAG_1193___
___HTMLTAG_1194__HTMLTAG_1195___驗證令牌內容：受眾、範圍、權限____HTMLTAG_1196__HTMLTAG_1197___
___HTMLTAG_1198__HTMLTAG_1199___使用 JWKS 端點模擬 MCP 伺服器驗證令牌___HTMLTAG_1200__HTMLTAG_1201___
</ol>

___HTMLTAG_1203__HTMLTAG_1204___實驗 6：簽章 JWT 用戶端驗證___HTMLTAG_1205__HTMLTAG_1206___
<ol>
___HTMLTAG_1208__HTMLTAG_1209___產生 RSA 金鑰對 (<code>openssl</code>)___HTMLTAG_1212__HTMLTAG_1213___
___HTMLTAG_1214__HTMLTAG_1215___使用驗證器建立機密用戶端 = <code>簽章 JWT___HTMLTAG_1217__HTMLTAG_1218__HTMLTAG_1219___
___HTMLTAG_1220__HTMLTAG_1221___將憑證上傳到Keycloak___HTMLTAG_1222__HTMLTAG_1223___
___HTMLTAG_1224__HTMLTAG_1225___編寫腳本來建立和簽署 client_assertion JWT___HTMLTAG_1226__HTMLTAG_1227___
___HTMLTAG_1228__HTMLTAG_1229___使用 <code>client_assertion</code> 而非 <code>client_secret___HTMLTAG_1233__HTMLTAG_1232___client_secret___HTMLTAG_1233__HTMLTAG_1232___client_secret___HTMLTAG_1233__HTMLTAG_123443112353__
___HTMLTAG_1236__HTMLTAG_1237___驗證收到的令牌___HTMLTAG_1238__HTMLTAG_1239___
</ol>