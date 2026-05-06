---
id: 019d8b30-b119-7001-c001-e0c5f8100119
title: 第 19 課：進階安全性與 Vault 集成
slug: bai-19-bao-mat-nang-cao-va-vault-integration
description: 安全性強化 Keycloak、內容安全政策標頭、暴力檢測配置、密碼策略（每個策略的詳細資訊）、會話管理（會話限制、空閒/最大超時）、CORS 配置、點擊劫持保護、HTTPS/TLS 最佳實踐、憑證管理、Vault 整合（HashiCorp Vault、Kubernetes Secrets、基於檔案）、控制台存取憑證、基於文件）管理。
duration_minutes: 220
is_free: true
video_url: null
sort_order: 19
section_title: 第 5 部分：主題、事件、安全性和 Vault
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6341" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6341)"/>

  <!-- Decorations -->
  <g>
    <circle cx="900" cy="170" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="700" cy="130" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1000" cy="90" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="800" cy="50" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="600" cy="270" r="8" fill="#38bdf8" opacity="0.05"/>
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
    <line x1="600" y1="50" x2="1100" y2="130" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="80" x2="1050" y2="150" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="971.650635094611,137.5 971.650635094611,162.5 950,175 928.349364905389,162.5 928.349364905389,137.5 950,125" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">🔒 DevSecOps — 第 19 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 19 課：進階安全性與保管庫</tspan>
      <tspan x="60" dy="42">整合</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：主題、事件、安全性與保管庫</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。安全強化清單___HTMLTAG_69__HTMLTAG_70___

<p>在Keycloak投入生產之前，需要全面實施以下加強措施：</p><table>
<thead>
___HTMLTAG_75__HTMLTAG_76___#___HTMLTAG_77__HTMLTAG_78___類別____HTMLTAG_79__HTMLTAG_80___等級____HTMLTAG_81__HTMLTAG_82___狀態__HTMLTAG_83____HTMLTAG_81__HTMLTAG_82___狀態__HTMLTAG_83__HTMLTAG_844___
</thead>
<tbody>
___HTMLTAG_87__HTMLTAG_88___1___HTMLTAG_89__HTMLTAG_90___HTTPS/TLS 強制執行___HTMLTAG_91__HTMLTAG_92____嚴重___HTMLTAG_93__HTMLTAG_94____________</td>______HTMLTAG_93__HTMLTAG_94_______________HTMLTAG_95__HT___ML
___HTMLTAG_97__HTMLTAG_98___2___HTMLTAG_99__HTMLTAG_100___更改預設管理員憑證____HTMLTAG_101__HTMLTAG_102___嚴重___HTMLTAG_103__HTMLTAG_104________________HTMLTAG_105__HT
___HTMLTAG_107__HTMLTAG_108___3___HTMLTAG_109__HTMLTAG_110___暴力偵測___HTMLTAG_111__HTMLTAG_112___高___HTMLTAG_113__HTMLTAG_114________________HTMLTAGMLTAGMLHT
___HTMLTAG_117__HTMLTAG_118___4___HTMLTAG_119__HTMLTAG_120___密碼策略___HTMLTAG_121__HTMLTAG_122___高___HTMLTAG_123__HTMLTAG_124___________HTMLTAG_125__HTML
___HTMLTAG_127__HTMLTAG_128___5___HTMLTAG_129__HTMLTAG_130___會話逾時___HTMLTAG_131__HTMLTAG_132___高___HTMLTAG_133__HTMLTAG_134________________HTMLTAG_135__HTML
___HTMLTAG_137__HTMLTAG_138___6___HTMLTAG_139__HTMLTAG_140___CSP 標頭___HTMLTAG_141__HTMLTAG_142___高___HTMLTAG_143__HTMLTAG_144441TAG_143__146
___HTMLTAG_147__HTMLTAG_148___7___HTMLTAG_149__HTMLTAG_150___點擊劫持保護___HTMLTAG_151__HTMLTAG_152___高___HTMLTAG_153__HTMLTAG_154________________HTMLTAG_151HTMLTAG_153__HTMLTAG_154________________HTMLTAG_155__HT
___HTMLTAG_157__HTMLTAG_158____8___HTMLTAG_159__HTMLTAG_160___CORS 設定___HTMLTAG_161__HTMLTAG_162___中___HTMLTAG_163__HTMLTAG_1644HTMLTAG_163__HTMLTAG_16441TAG163__161_164
___HTMLTAG_167__HTMLTAG_168____9___HTMLTAG_169__HTMLTAG_170___機密保管庫整合___HTMLTAG_171__HTMLTAG_172___高___HTMLTAG_173__HTMLTAG_174HTMLTAG_173__HTMLTAG_174
___HTMLTAG_177__HTMLTAG_178___10____HTMLTAG_179__HTMLTAG_180___管理控制台存取限制___HTMLTAG_181__HTMLTAG_182___高___HTMLTAG_183__HTMLTAG_184___________________TAG_184___ML
___HTMLTAG_187__HTMLTAG_188___11___HTMLTAG_189__HTMLTAG_190___停用未使用的功能/端點___HTMLTAG_191__HTMLTAG_192___中___HTMLTAG_193__HTMLTAG_194_HTMLTAGMLTAGMLTAGMLTAG19____
___HTMLTAG_197__HTMLTAG_198___12___HTMLTAG_199__HTMLTAG_200___靜態資料庫加密___HTMLTAG_201__HTMLTAG_202___高___HTMLTAG_203__HTMLTAG_204________________HTMLTAG_2051202050_____
___HTMLTAG_207__HTMLTAG_208___13___HTMLTAG_209__HTMLTAG_210___令牌安全性（短暫）___HTMLTAG_211__HTMLTAG_212___高___HTMLTAG_213__HTMLTAG_2142_HTMLTAGMLTAGMLTAGMLTAG1_21_2116
___HTMLTAG_217__HTMLTAG_218___14___HTMLTAG_219__HTMLTAG_220___已啟用審核日誌記錄___HTMLTAG_221__HTMLTAG_222___高___HTMLTAG_223__HTMLTAG_224________________TAG
</tbody>
</table>

___HTMLTAG_229__HTMLTAG_230___2。內容安全策略 (CSP) 標頭___HTMLTAG_231__HTMLTAG_232___

<p>CSP 標頭透過控制允許在頁面上載入的資源來防止 XSS 攻擊。 </p>

___HTMLTAG_235__HTMLTAG_236___2.1 在Keycloak中設定CSP___HTMLTAG_237__HTMLTAG_238___<p>Keycloak 透過 <strong>領域設定 → 安全防禦</strong>:</p> 設定 CSP

___預編碼_0___

___HTMLTAG_243__HTMLTAG_244___2.2 透過 REST API 進行設定___HTMLTAG_245__HTMLTAG_246___

___預編碼_1___

___HTMLTAG_247__HTMLTAG_248___2.3 重要安全標頭___HTMLTAG_249__HTMLTAG_250___

<table>
<thead>
___HTMLTAG_253__HTMLTAG_254___標頭____HTMLTAG_255__HTMLTAG_256___建議值____HTMLTAG_257__HTMLTAG_258___用途____HTMLTAG_259__HTMLTAG_260___
</thead>
<tbody>
___HTMLTAG_263__HTMLTAG_264__HTMLTAG_265___X-Frame-Options___HTMLTAG_266__HTMLTAG_267__HTMLTAG_268__H TMLTAG_269____SAMEORIGIN___HTMLTAG_270__HTMLTAG_271__HTMLTAG_272___反點擊劫持___HTMLTAG_273__HTMLTAG_274___
___HTMLTAG_275__HTMLTAG_276__HTMLTAG_277___X-內容類型選項___HTMLTAG_278__HTMLTAG_279__HTMLTAG_280__HTMLT AG_281___nosniff___HTMLTAG_282__HTMLTAG_283__HTMLTAG_284___反MIME類型嗅探___HTMLTAG_285__HTMLTAG_286___
___HTMLTAG_287__HTMLTAG_288__HTMLTAG_289___X-XSS-保護___HTMLTAG_290__HTMLTAG_291__HTMLTAG_292__HTMLTAG_293___1； mode=block___HTMLTAG_292__HTMLTAG_293___1；過濾器___HTMLTAG_297__HTMLTAG_298___
___HTMLTAG_299__HTMLTAG_300__HTMLTAG_301___嚴格傳輸安全___HTMLTAG_302__HTMLTAG_303__HTMLTAG_304__HTMLTAG_305___max-age=31536000； includeSubDomains___HTMLTAG_306__HTMLTAG_307__HTMLTAG_308___強制 HTTPS (HSTS)___HTMLTAG_309__HTMLTAG_310___
___HTMLTAG_311__HTMLTAG_312__HTMLTAG_313___引薦來源網址策略___HTMLTAG_314__HTMLTAG_315__HTMLTAG_316__HTMLT AG_317___無引薦來源____HTMLTAG_318__HTMLTAG_319__HTMLTAG_320___不傳送引薦來源網址標頭___HTMLTAG_321__HTMLTAG_322___
___HTMLTAG_323__HTMLTAG_324__HTMLTAG_325___內容安全策略___HTMLTAG_326__HTMLTAG_327__HTMLTAG_328___限制frame-src、object-src___HTMLTAG_329__HTMLTAG_330130130____UUS_____29__HTMLTAG_330_______
</tbody>
</table>

___HTMLTAG_335__HTMLTAG_336___3。暴力檢測___HTMLTAG_337__HTMLTAG_338___

<p>Keycloak 對於登入嘗試有內建的反暴力破解機制。 </p>

___HTMLTAG_341__HTMLTAG_342___3.1 暴力配置___HTMLTAG_343__HTMLTAG_344___

<p>轉到 <strong>領域設定 → 安全防禦 → 暴力偵測</strong>:</p>

___預編碼_2___

___HTMLTAG_349__HTMLTAG_350___3.2 透過 REST API 進行設定___HTMLTAG_351__HTMLTAG_352___

___預編碼_3___

___HTMLTAG_353__HTMLTAG_354___3.3 暴力偵測的工作原理____HTMLTAG_355__HTMLTAG_356___

___預編碼_4___

___HTMLTAG_357__HTMLTAG_358___3.4 解鎖 使用者已鎖定___HTMLTAG_359__HTMLTAG_360___

___預編碼_5___

___HTMLTAG_361__HTMLTAG_362___4。密碼策略___HTMLTAG_363__HTMLTAG_364___

<p>Keycloak 支援多種密碼策略以確保強密碼。 </p>

___HTMLTAG_367__HTMLTAG_368___4.1 設定密碼原則___HTMLTAG_369__HTMLTAG_370___

<p>前往 <strong>驗證 → 政策 → 密碼策略</strong> 並新增原則：</p><table>
<thead>
___HTMLTAG_377__HTMLTAG_378___政策___HTMLTAG_379__HTMLTAG_380___說明____HTMLTAG_381__HTMLTAG_382___範本值____HTMLTAG_383__HTMLTAG_384___
</thead>
<tbody>
___HTMLTAG_387__HTMLTAG_388__HTMLTAG_389___長度___HTMLTAG_390__HTMLTAG_391__HTMLTAG_392___最小長度分鐘___HTMLTAG_393__HTMLTAG_394__HTMLTAG_395___12___HTMLTAG_396__HTMLTAG_397__HTMLTAG_398___
___HTMLTAG_399__HTMLTAG_400__HTMLTAG_401___最大長度___HTMLTAG_402__HTMLTAG_403__HTMLTAG_404___最大長度多___HTMLTAG_405__HTMLTAG_406__HTMLTAG_407___128___HTMLTAG_408__HTMLTAG_409__HTMLTAG_410___
___HTMLTAG_411__HTMLTAG_412__HTMLTAG_413___位數___HTMLTAG_414__HTMLTAG_415__HTMLTAG_416___最少字元數___HTMLTAG_417__HTMLTAG_418__HTMLTAG___ML_419_1___MLTAGMLTA2014201420142074120142020741202074120207070707070707070707_UMLTAG
___HTMLTAG_423__HTMLTAG_424__HTMLTAG_425___lowerCase___HTMLTAG_426__HTMLTAG_427__HTMLTAG_428___小寫字元數（最少）___HTMLTAG_429__HTMLTAG_430__HTMLTAG_431___1___HTMLTAG_432__HTMLTAG_433__HTMLTAG_434___
___HTMLTAG_435__HTMLTAG_436__HTMLTAG_437___大寫___HTMLTAG_438__HTMLTAG_439__HTMLTAG_440___大寫字符數（分鐘）___HTMLTAG_441__HTMLTAG_442__HTMLTAG_443___1___HTMLTAG_444__HTMLTAG_445__HTMLTAG_446___
___HTMLTAG_447__HTMLTAG_448__HTMLTAG_449___特殊字元___HTMLTAG_450__HTMLTAG_451__HTMLTAG_452___特殊字符的最大數量最小值___HTMLTAG_453__HTMLTAG_454__HTMLTAG_455___1___HTMLTAG_456__HTMLTAG_457__HTMLTAG_458___
___HTMLTAG_459__HTMLTAG_460__HTMLTAG_461___不是使用者名稱___HTMLTAG_462__HTMLTAG_463__HTMLTAG_464___密碼不能與使用者名稱相同___HTMLTAG_465__HTMLTAG_466___（無值）
___HTMLTAG_469__HTMLTAG_470__HTMLTAG_471___不是電子郵件___HTMLTAG_472__HTMLTAG_473__HTMLTAG_474___密碼不能與電子郵件相同___HTMLTAG_475__HTMLTAG_476____ML（無值）___HTMLTA___ML____476____（無值）___ML____
___HTMLTAG_479__HTMLTAG_480__HTMLTAG_481___密碼歷史記錄___HTMLTAG_482__HTMLTAG_483__HTMLTAG_484___不要重複使用最近的 N密碼___HTMLTAG_485__HTMLTAG_486__HTMLTAG_487___5___HTMLTAG_488__HTMLTAG_489__HTMLTAG_490___
___HTMLTAG_491__HTMLTAG_492__HTMLTAG_493___雜湊演算法____HTMLTAG_494__HTMLTAG_495__HTMLTAG_496___雜湊演算法密碼_ __HTMLTAG_497__HTMLTAG_498__HTMLTAG_499___pbkdf2-sha512___HTMLTAG_500__HTMLTAG_501__HTMLTAG_502___
___HTMLTAG_503__HTMLTAG_504__HTMLTAG_505___hashIterations____HTMLTAG_506__HTMLTAG_507__HTMLTAG_508_ __循環雜湊數____HTMLTAG_509__HTMLTAG_510__HTMLTAG_511___210000___HTMLTAG_512__HTMLTAG_513__HTMLTAG_514___
___HTMLTAG_515__HTMLTAG_516__HTMLTAG_517___forceExpiredPasswordChange___HTMLTAG_518__HTMLTAG_519__HTMLTAG_520___在 N 日期後強制更改MK___HTMLTAG_521__HTMLTAG_522__HTMLTAG_523___90___HTMLTAG_524__HTMLTAG_525__HTMLTAG_526___
___HTMLTAG_527__HTMLTAG_528__HTMLTAG_529___regulxExpression____HTMLTAG_530__HTMLTAG_531__HTMLTAG_532___正規表示式模式可選編輯___HTMLTAG_533__HTMLTAG_534__HTMLTAG_535___^(?!.*(.)\1{2}).*$___HTMLTAG_536__HTMLTAG_537__HTMLTAG_538___
</tbody>
</table>

___HTMLTAG_541__HTMLTAG_542___4.2 透過 REST API 進行設定___HTMLTAG_543__HTMLTAG_544______預編碼_6___

___HTMLTAG_545__HTMLTAG_546___4.3 雜湊演算法建議___HTMLTAG_547__HTMLTAG_548___

<table>
<thead>
___HTMLTAG_551__HTMLTAG_552___演算法____HTMLTAG_553__HTMLTAG_554___迭代（建議）___HTMLTAG_555__HTMLTAG_556___註解____HTMLTAG_557__HTMLTAG_558___
</thead>
<tbody>
___HTMLTAG_561__HTMLTAG_562__HTMLTAG_563___pbkdf2-sha256____HTMLTAG_564__HTMLTAG_565__HTMLTAG_566___MLOWG_567__HT建議___HTMLTAG_569__HTMLTAG_570___
___HTMLTAG_571__HTMLTAG_572__HTMLTAG_573___pbkdf2-sha512____HTMLTAG_574__HTMLTAG_575__HTMLTAG_576___210,000___HTMLTAG_577__HTMLTAG_576___210,000___HTMLTAG_577__HT推薦___HTMLTAG_579__HTMLTAG_580___
___HTMLTAG_581__HTMLTAG_582__HTMLTAG_583___argon2___HTMLTAG_584__HTMLTAG_585__HTMLTAG_586___不適用（Keycloak 24+）___HTMLTAG_587__HTMLTAGML_588_____
</tbody>
</table>

___預編碼_7___

___HTMLTAG_593__HTMLTAG_594___5。會話管理___HTMLTAG_595__HTMLTAG_596___

<p>強大的會話管理對於安全性非常重要。 </p>

___HTMLTAG_599__HTMLTAG_600___5.1 會話逾時___HTMLTAG_601__HTMLTAG_602___

<p>在 <strong>領域設定 → 會話</strong>:</p> 進行配置<table>
<thead>
___HTMLTAG_609__HTMLTAG_610___設定___HTMLTAG_611__HTMLTAG_612___說明___HTMLTAG_613__HTMLTAG_614___推薦__HTMLTAG_615__HTMLTAG_616___
</thead>
<tbody>
___HTMLTAG_619__HTMLTAG_620__HTMLTAG_621___SSO 會話空閒___HTMLTAG_622__HTMLTAG_623__HTMLTAG_624___SSO 會話的最大空閒時間____HTMLTAG_625__HTMLTAG___1626162625__HT
___HTMLTAG_629__HTMLTAG_630__HTMLTAG_631___SSO 會話最長___HTMLTAG_632__HTMLTAG_633__HTMLTAG_634___SSO 會話最長時間（無論活動如何）___HTMLTAG_635__HTMLTAG_6361013635__
___HTMLTAG_639__HTMLTAG_640__HTMLTAG_641___SSO 會話空閒「記住我」___HTMLTAG_642__HTMLTAG_643__HTMLTAG_644___啟用「記得我」___HTMLTAG_642__HTMLTAG_643__HTMLTAG_644______啟用「記得我」時空閒____MLTAG_64511TAG_64517G_64511TAG_64511TAG_64517G日期___HTMLTAG_647__HTMLTAG_648___
___HTMLTAG_649__HTMLTAG_650__HTMLTAG_651___SSO 會話最長記住我___HTMLTAG_652__HTMLTAG_653__HTMLTAG_654___啟用「記住我」時的最長生命週期___HTMLTAG_655__5MLG____啟用「記住我」時的最長生命週期___HTMLTAG_655__5日期___HTMLTAG_657__HTMLTAG_658___
___HTMLTAG_659__HTMLTAG_660__HTMLTAG_661___客戶端會話空閒___HTMLTAG_662__HTMLTAG_663__HTMLTAG_664____客戶端特定會話的空閒逾時___HTMLTAG_665_HTMLTAG___ML_客戶端特定會話的空閒逾時___HTMLTAG_665_HTMLTAG___ML____ML]
___HTMLTAG_669__HTMLTAG_670__HTMLTAG_671____客戶端會話最長___HTMLTAG_672__HTMLTAG_673__HTMLTAG_674____客戶端特定會話的最長生命週期___HTMLTAG_675__HTMLTAG___ML_客戶端特定會話的最長生命週期___HTMLTAG_675__HTMLTAG___ML_7618676______HT
___HTMLTAG_679__HTMLTAG_680__HTMLTAG_681____離線會話空閒____HTMLTAG_682__HTMLTAG_683__HTMLTAG_684____離線令牌的空閒逾時____HTMLTAG_685__HTMLTAG_186868685_____
___HTMLTAG_689__HTMLTAG_690__HTMLTAG_691___離線會話最長___HTMLTAG_692__HTMLTAG_693__HTMLTAG_694___離線會話的最大有限生命週期___HTMLTAG_695__HTMLTAG_696_____
</tbody>
</table>

___HTMLTAG_701__HTMLTAG_702___5.2 詳細會話設定___HTMLTAG_703__HTMLTAG_704___

___預編碼_8___

___HTMLTAG_705__HTMLTAG_706___5.3 會話限制___HTMLTAG_707__HTMLTAG_708___

<p>限制每個使用者的同時會話數：</p>

___預編碼_9___

___HTMLTAG_711__HTMLTAG_712___5.4 檢查並撤銷會話___HTMLTAG_713__HTMLTAG_714___

___預編碼_10___

___HTMLTAG_715__HTMLTAG_716___6。 CORS 設定___HTMLTAG_717__HTMLTAG_718___

<p>CORS（跨來源資源共享）在 Keycloak 中為每個客戶端<strong>配置</strong>.</p>

___HTMLTAG_723__HTMLTAG_724___6.1 為客戶端設定 CORS___HTMLTAG_725__HTMLTAG_726___

<pre><code class="language-text"># Client Settings → Web Origins

# Cho phép specific origins
https://myapp.com
https://admin.myapp.com

# Cho phép tất cả redirect URIs (sử dụng "+")
+

# KHÔNG sử dụng "*" trong production
# "*" cho phép tất cả origins — nguy hiểm!
</code></pre>

<pre><code class="language-bash"># Cấu hình CORS qua REST API
curl -X PUT "http://localhost:8080/admin/realms/my-realm/clients/$CLIENT_UUID" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "webOrigins": [
        "https://myapp.com",
        "https://admin.myapp.com"
    ]
  }'
</code></pre>

___HTMLTAG_727__HTMLTAG_728___6.2 CORS 最佳實務___HTMLTAG_729__HTMLTAG_730___<ul>
___HTMLTAG_732__HTMLTAG_733___總是指定特定來源_</strong> — 請勿使用萬用字元 <code>*___HTMLTAG_736__HTMLTAG_737___
___HTMLTAG_738__HTMLTAG_739___使用 <code>+___HTMLTAG_741__HTMLTAG_742___ — 自動從有效重定向 URI 衍生來源</li>
___HTMLTAG_744__HTMLTAG_745___客戶端分離</strong> — 每個前端應用程式都應該有自己的客戶端和自己的 CORS 設定</li>
___HTMLTAG_748__HTMLTAG_749___徹底測試</strong> — 使用瀏覽器開發工具測試 CORS 回應標頭</li>
</ul>

___HTMLTAG_753__HTMLTAG_754___7。點選劫持保護___HTMLTAG_755__HTMLTAG_756___

<p>點擊劫持攻擊將 Keycloak 登入頁面嵌入到 iframe 中以竊取憑證。 </p>

___HTMLTAG_759__HTMLTAG_760___7.1 設定 X 框架選項___HTMLTAG_761__HTMLTAG_762___

<pre><code class="language-text"># Realm Settings → Security Defenses → Headers

X-Frame-Options: SAMEORIGIN
# - DENY: Không cho phép iframe dưới bất kỳ điều kiện nào
# - SAMEORIGIN: Chỉ cho phép iframe từ cùng origin
# - ALLOW-FROM uri: (deprecated, dùng CSP frame-ancestors thay thế)
</code></pre>

___HTMLTAG_763__HTMLTAG_764___7.2 CSP 框架祖先（首選）___HTMLTAG_765__HTMLTAG_766___

<pre><code class="language-text"># Content-Security-Policy header
frame-ancestors 'self';

# Cho phép specific parent origins
frame-ancestors 'self' https://portal.mycompany.com;
</code></pre>

___HTMLTAG_767__HTMLTAG_768___8。 HTTPS/TLS 強制執行___HTMLTAG_769__HTMLTAG_770___

___HTMLTAG_771__HTMLTAG_772___8.1 主機名稱與 TLS 設定___HTMLTAG_773__HTMLTAG_774___

<pre><code class="language-bash"># Production: Strict HTTPS
bin/kc.sh start \
  --hostname=auth.mycompany.com \
  --hostname-strict=true \
  --https-certificate-file=/etc/certs/tls.crt \
  --https-certificate-key-file=/etc/certs/tls.key \
  --https-port=8443 \
  --http-enabled=false
</code></pre>

___HTMLTAG_775__HTMLTAG_776___8.2 具有反向代理的 TLS（流行）___HTMLTAG_777__HTMLTAG_778___

<pre><code class="language-bash"># Khi sử dụng reverse proxy (Nginx, HAProxy) terminate TLS
bin/kc.sh start \
  --hostname=auth.mycompany.com \
  --hostname-strict=true \
  --proxy-headers=xforwarded \
  --http-enabled=true \
  --http-port=8080
</code></pre>

<pre><code class="language-nginx"># Nginx reverse proxy configuration
server {
    listen 443 ssl http2;
    server_name auth.mycompany.com;

    ssl_certificate /etc/ssl/certs/auth.mycompany.com.crt;
    ssl_certificate_key /etc/ssl/private/auth.mycompany.com.key;

    # Strong TLS configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # HSTS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    location / {
        proxy_pass http://keycloak:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port $server_port;

        # WebSocket support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # Timeouts
        proxy_read_timeout 90s;
        proxy_send_timeout 90s;
    }
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name auth.mycompany.com;
    return 301 https://$host$request_uri;
}
</code></pre>

___HTMLTAG_779__HTMLTAG_780___8.3 相互 TLS (mTLS)___HTMLTAG_781__HTMLTAG_782___

<pre><code class="language-bash"># Bật mTLS cho client authentication
bin/kc.sh start \
  --https-certificate-file=/etc/certs/tls.crt \
  --https-certificate-key-file=/etc/certs/tls.key \
  --https-trust-store-file=/etc/certs/truststore.jks \
  --https-trust-store-password=changeit \
  --https-client-auth=request

# --https-client-auth options:
# none: không yêu cầu client cert
# request: yêu cầu nhưng không bắt buộc
# required: bắt buộc client cert
</code></pre>

___HTMLTAG_783__HTMLTAG_784___8.4 憑證管理___HTMLTAG_785__HTMLTAG_786___

<pre><code class="language-bash"># Sử dụng cert-manager trong Kubernetes
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: keycloak-tls
  namespace: keycloak
spec:
  secretName: keycloak-tls-secret
  issuerRef:
    name: letsencrypt-prod
    kind: ClusterIssuer
  dnsNames:
    - auth.mycompany.com
  renewBefore: 720h  # Renew 30 ngày trước khi hết hạn
</code></pre>

___預編碼_20___

___HTMLTAG_787__HTMLTAG_788___9。保險櫃整合___HTMLTAG_789__HTMLTAG_790___

<p>Keycloak 支援在外部保管庫中儲存機密（LDAP 綁定密碼、SMTP 密碼、用戶端機密），而不是在資料庫中儲存明文。 </p>

___HTMLTAG_793__HTMLTAG_794___9.1 HashiCorp Vault 整合___HTMLTAG_795__HTMLTAG_796___

<pre><code class="language-bash"># Cấu hình Keycloak sử dụng HashiCorp Vault
bin/kc.sh start \
  --vault=hashicorp \
  --vault-hashicorp-paths=/secret/data/keycloak \
  --vault-hashicorp-address=https://vault.mycompany.com:8200 \
  --vault-hashicorp-auth-method=token \
  --vault-hashicorp-token=$VAULT_TOKEN

# Hoặc sử dụng AppRole authentication
bin/kc.sh start \
  --vault=hashicorp \
  --vault-hashicorp-paths=/secret/data/keycloak \
  --vault-hashicorp-address=https://vault.mycompany.com:8200 \
  --vault-hashicorp-auth-method=approle \
  --vault-hashicorp-approle-role-id=$ROLE_ID \
  --vault-hashicorp-approle-secret-id=$SECRET_ID
</code></pre>

___HTMLTAG_797__HTMLTAG_798___9.2 在 HashiCorp Vault 中保存機密___HTMLTAG_799__HTMLTAG_800___

<pre><code class="language-bash"># Cấu hình Vault KV secrets engine
vault secrets enable -path=secret kv-v2

# Lưu LDAP bind password
vault kv put secret/keycloak/my-realm \
  ldap_bind_credential="LdapS3cur3P@ss!" \
  smtp_password="SmtpP@ssw0rd!" \
  my-client-secret="Cl13ntS3cr3t!"

# Cấu trúc path trong Vault:
# secret/data/keycloak/{realm-name}/{key}
</code></pre>

___HTMLTAG_801__HTMLTAG_802___9.3 在 Keycloak 中使用 Vault 引用___HTMLTAG_803__HTMLTAG_804___

<p>在 Keycloak 中，使用語法 <code>${vault.key}</code> 而非純文字：</p>

<pre><code class="language-text"># LDAP User Federation
Bind Credential: ${vault.ldap_bind_credential}

# SMTP Settings
Password: ${vault.smtp_password}

# Client Secret
Client Secret: ${vault.my-client-secret}
</code></pre>

___HTMLTAG_809__HTMLTAG_810___9.4 Kubernetes/OpenShift Secrets Vault___HTMLTAG_811__HTMLTAG_812___

___預編碼_24___

___預編碼_25___

<pre><code class="language-yaml"># Mount Secret vào Keycloak Pod
apiVersion: apps/v1
kind: Deployment
metadata:
  name: keycloak
spec:
  template:
    spec:
      containers:
        - name: keycloak
          args:
            - start
            - --vault=file
            - --vault-dir=/mnt/secrets
          volumeMounts:
            - name: vault-secrets
              mountPath: /mnt/secrets
              readOnly: true
      volumes:
        - name: vault-secrets
          secret:
            secretName: keycloak-vault
</code></pre>

___HTMLTAG_813__HTMLTAG_814___9.5 基於文件的保管庫（開發）___HTMLTAG_815__HTMLTAG_816___

___預編碼_27___

___HTMLTAG_817__HTMLTAG_818___9.6 輪替憑證___HTMLTAG_819__HTMLTAG_820___

___預編碼_28___

___HTMLTAG_821__HTMLTAG_822___10。管理控制台存取限制___HTMLTAG_823__HTMLTAG_824___

___HTMLTAG_825__HTMLTAG_826___10.1 專用管理領域___HTMLTAG_827__HTMLTAG_828___

<p>使用 <strong>主領域</strong> 僅用於管理員，不建立使用者/客戶業務：</p>

___預編碼_29___

___HTMLTAG_833__HTMLTAG_834___10.2 管理控制台的 IP 白名單___HTMLTAG_835__HTMLTAG_836___

<pre><code class="language-nginx"># Nginx: Restrict Admin Console access
location /admin/ {
    # Chỉ cho phép IP nội bộ
    allow 10.0.0.0/8;
    allow 172.16.0.0/12;
    allow 192.168.0.0/16;
    deny all;

    proxy_pass http://keycloak:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}

# Block admin REST API từ external
location /admin/realms/ {
    allow 10.0.0.0/8;
    deny all;

    proxy_pass http://keycloak:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
</code></pre>

___HTMLTAG_837__HTMLTAG_838___10.3 Kubernetes 網路策略___HTMLTAG_839__HTMLTAG_840___

<pre><code class="language-yaml"># NetworkPolicy: Restrict Admin API access
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: keycloak-admin-restrict
  namespace: keycloak
spec:
  podSelector:
    matchLabels:
      app: keycloak
  policyTypes:
    - Ingress
  ingress:
    # Allow user-facing traffic from ingress controller
    - from:
        - namespaceSelector:
            matchLabels:
              name: ingress-nginx
      ports:
        - port: 8080
    # Allow admin traffic only from management namespace
    - from:
        - namespaceSelector:
            matchLabels:
              name: management
      ports:
        - port: 8080
</code></pre>___HTMLTAG_841__HTMLTAG_842___11。令牌安全性___HTMLTAG_843__HTMLTAG_844___

___HTMLTAG_845__HTMLTAG_846___11.1 短期代幣___HTMLTAG_847__HTMLTAG_848___

<pre><code class="language-bash"># Cấu hình token lifespans
curl -X PUT "http://localhost:8080/admin/realms/my-realm" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "accessTokenLifespan": 300,
    "accessTokenLifespanForImplicitFlow": 900,
    "actionTokenGeneratedByUserLifespan": 300,
    "actionTokenGeneratedByAdminLifespan": 43200
  }'

# Per-client token lifespan override
curl -X PUT "http://localhost:8080/admin/realms/my-realm/clients/$CLIENT_UUID" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "attributes": {
        "access.token.lifespan": "180",
        "client.session.idle.timeout": "600",
        "client.session.max.lifespan": "3600"
    }
  }'
</code></pre>

___HTMLTAG_849__HTMLTAG_850___11.2 令牌自省___HTMLTAG_851__HTMLTAG_852___

<pre><code class="language-bash"># Introspect token (kiểm tra validity)
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token/introspect" \
  -d "client_id=my-resource-server" \
  -d "client_secret=$CLIENT_SECRET" \
  -d "token=$ACCESS_TOKEN"

# Response
# {
#   "active": true,
#   "sub": "user-uuid",
#   "aud": "my-app",
#   "exp": 1710492645,
#   "iat": 1710489045,
#   "realm_access": { "roles": ["user"] },
#   "scope": "openid profile email"
# }
</code></pre>

___HTMLTAG_853__HTMLTAG_854___11.3 令牌撤銷___HTMLTAG_855__HTMLTAG_856___

<pre><code class="language-bash"># Revoke refresh token
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/revoke" \
  -d "client_id=my-app" \
  -d "client_secret=$CLIENT_SECRET" \
  -d "token=$REFRESH_TOKEN" \
  -d "token_type_hint=refresh_token"

# Revoke access token
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/revoke" \
  -d "client_id=my-app" \
  -d "client_secret=$CLIENT_SECRET" \
  -d "token=$ACCESS_TOKEN" \
  -d "token_type_hint=access_token"
</code></pre>

___HTMLTAG_857__HTMLTAG_858___12。生產部署 — 強化___HTMLTAG_859__HTMLTAG_860___

<pre><code class="language-yaml"># docker-compose.production.yml - Hardened Keycloak
services:
  keycloak:
    image: quay.io/keycloak/keycloak:26.1
    command:
      - start
      - --hostname=auth.mycompany.com
      - --hostname-strict=true
      - --proxy-headers=xforwarded
      - --http-enabled=true
      - --metrics-enabled=true
      - --health-enabled=true
      - --vault=file
      - --vault-dir=/mnt/secrets
      - --log=console
      - --log-console-output=json
    environment:
      KC_DB: postgres
      KC_DB_URL: jdbc:postgresql://postgres:5432/keycloak
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD_FILE: /run/secrets/db_password
      KC_CACHE: ispn
      KC_CACHE_STACK: kubernetes
    volumes:
      - ./secrets:/mnt/secrets:ro
    secrets:
      - db_password
    deploy:
      replicas: 2
      resources:
        limits:
          memory: 1G
          cpus: '1.0'
        reservations:
          memory: 512M
          cpus: '0.5'
    healthcheck:
      test: ["CMD-SHELL", "exec 3<>/dev/tcp/localhost/9000 && echo -e 'GET /health/ready HTTP/1.1\r\nHost: localhost\r\n\r\n' >&3 && cat <&3 | grep -q '\"status\":\"UP\"'"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s

secrets:
  db_password:
    file: ./secrets/db_password
</code></pre>

___HTMLTAG_861__HTMLTAG_862___13。最佳實務摘要___HTMLTAG_863__HTMLTAG_864___

<ul>
___HTMLTAG_866__HTMLTAG_867___HTTPS 無所不在</strong> — 切勿在沒有 TLS 的情況下部署 Keycloak 生產。使用 HSTS 標頭。 </li>
___HTMLTAG_870__HTMLTAG_871___保管庫中的秘密</strong> — 請勿在資料庫中儲存明文憑。使用 HashiCorp Vault 或 Kubernetes Secrets.</li>
___HTMLTAG_874__HTMLTAG_875___強密碼策略</strong> — 至少 12 個字符，使用具有高迭代次數的 Argon2 或 PBKDF2-SHA512。 </li>
___HTMLTAG_878__HTMLTAG_879___會話限制__HTMLTAG_880___ — 限制並發會話數。設定適當的空閒/最大超時。 </li>
___HTMLTAG_882__HTMLTAG_883___管理員存取受限</strong> — 管理控制台的 IP 白名單。管理員帳戶需要 MFA。 </li>
___HTMLTAG_886__HTMLTAG_887___短期令牌</strong> — 存取權杖 5 分鐘，啟用刷新令牌輪替。 </li>
___HTMLTAG_890__HTMLTAG_891___暴力保護</strong> — 適當啟用與設定。監控登入失敗率。 </li>
___HTMLTAG_894__HTMLTAG_895___定期安全審核</strong> — 定期檢查 Keycloak 配置。更新到最新版本。 </li>
___HTMLTAG_898__HTMLTAG_899___單獨的管理領域</strong> — 僅將主領域用於管理。請勿混合管理用戶和企業用戶。 </li>
___HTMLTAG_902__HTMLTAG_903___監視和警報</strong> — 將事件日誌記錄（第 18 課）與安全監視結合以進行偵測和回應。 </li>
</ul>