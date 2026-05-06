---
id: 019d8b30-b113-7001-c001-e0c5f8100113
title: 第 13 課：使用者聯合 - LDAP 和 Active Directory
slug: bai-13-user-federation-ldap-va-active-directory
description: 配置 LDAP/AD 聯合、儲存模式（READ_ONLY、WRITABLE、UNSYNCED）、編輯模式、連線設定（SSL、連線池）、LDAP 映射器（使用者屬性、全名、群組、角色、硬編碼角色、MSAD 使用者帳戶控制）、密碼雜湊、使用者同步、SSSD/FreeIPA 整合自接 APIPA 通訊自訂。
duration_minutes: 220
is_free: true
video_url: null
sort_order: 13
section_title: 第 4 部分：使用者聯盟、組織與授權
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6174" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6174)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1086" cy="268" r="14" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="1072" cy="174" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1058" cy="80" r="20" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1044" cy="246" r="8" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="1030" cy="152" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="128" x2="1100" y2="208" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="158" x2="1050" y2="228" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1015.2390923627308,156.5 1015.2390923627308,199.5 978,221 940.7609076372692,199.5 940.7609076372692,156.5 978,135" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：使用者聯合 - LDAP 和 Active</tspan>
      <tspan x="60" dy="42">目錄</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：使用者聯盟、組織與授權__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。使用者聯盟 — 概述___HTMLTAG_69__HTMLTAG_70___

<p>使用者聯合允許 Keycloak <strong> 連線到外部使用者資料庫</strong>，例如 LDAP、Active Directory 或自訂資料庫。您可以直接從外部來源進行身份驗證，而不必將所有使用者匯入 Keycloak。 </p>

<p>要設定使用者聯合，請前往 <strong>管理控制台 → 使用者聯合</strong>.</p>

___HTMLTAG_79__HTMLTAG_80___1.1 為什麼我們需要使用者聯合？ ___HTMLTAG_81__HTMLTAG_82___

<table>
<thead>
___HTMLTAG_85__HTMLTAG_86___原因____HTMLTAG_87__HTMLTAG_88___說明____HTMLTAG_89__HTMLTAG_90___
</thead>
<tbody>
___HTMLTAG_93__HTMLTAG_94__HTMLTAG_95___集中使用者管理___HTMLTAG_96__HTMLTAG_97__HTMLTAG_98___LDAP/AD已是企業主要使用者來源→無須重複____HTMLTAG_99__HTMLTAG_100___
___HTMLTAG_101__HTMLTAG_102__HTMLTAG_103___保留目前系統___HTMLTAG_104__HTMLTAG_105__HTMLTAG_106___無需將使用者移轉到Keycloak____HTMLTAG_107__HTMLTAG_108___
___HTMLTAG_109__HTMLTAG_110__HTMLTAG_111___單一事實來源___HTMLTAG_112__HTMLTAG_113__HTMLTAG_114___使用者資料僅存在於一處，避免不一致____HTMLTAG_115__HTMLTAG_116___
___HTMLTAG_117__HTMLTAG_118__HTMLTAG_119___Kerberos SSO___HTMLTAG_120__HTMLTAG_121__HTMLTAG_122___從 Active Directory 整合 Kerberos 驗證____HTMLTAG_123__4MLG_123__4MLG_123__4MLG_123__4MLG_123__12
</tbody>
</table>

___HTMLTAG_127__HTMLTAG_128___1.2 聯合提供者的類型___HTMLTAG_129__HTMLTAG_130___<table>
<thead>
___HTMLTAG_133__HTMLTAG_134___提供者____HTMLTAG_135__HTMLTAG_136___說明___HTMLTAG_137__HTMLTAG_138___
</thead>
<tbody>
___HTMLTAG_141__HTMLTAG_142__HTMLTAG_143____LDAP___HTMLTAG_144__HTMLTAG_145__HTMLTAG_146___支援 OpenLDAP、389 目錄伺服器和 LDAP 相容伺服器____HTMLTAG_1478HTML
___HTMLTAG_149__HTMLTAG_150__HTMLTAG_151___Active Directory___HTMLTAG_152__HTMLTAG_153__HTMLTAG_154___Microsoft Active Directory（使用 LDAP 協定 + AD 特定映射器）___HTMLTAG_155HTMLTAG_156
___HTMLTAG_157__HTMLTAG_158__HTMLTAG_159____SSSD___HTMLTAG_160__HTMLTAG_161__HTMLTAG_162____系統安全服務守護程序 — FreeIPA/Red Hat IdM 整合_</td>ML
___HTMLTAG_165__HTMLTAG_166__HTMLTAG_167___自訂使用者儲存 SPI___HTMLTAG_168__HTMLTAG_169__HTMLTAG_170___編寫您自己的提供者以連接任何資料庫____HTMLTAG_171__HTMLTAG_172___
</tbody>
</table>

___HTMLTAG_175__HTMLTAG_176___2。新增 LDAP 供應商___HTMLTAG_177__HTMLTAG_178___

<p>前往 <strong>管理控制台 → 使用者聯合 → 新增 LDAP 提供者</strong>.</p>

___HTMLTAG_183__HTMLTAG_184___2.1 常規選項___HTMLTAG_185__HTMLTAG_186___

<table>
<thead>
___HTMLTAG_189__HTMLTAG_190___設定___HTMLTAG_191__HTMLTAG_192___說明____HTMLTAG_193__HTMLTAG_194___範本值____HTMLTAG_195__HTMLTAG_196___
</thead>
<tbody>
___HTMLTAG_199__HTMLTAG_200__HTMLTAG_201___控制台顯示名稱___HTMLTAG_202__HTMLTAG_203__HTMLTAG_204___管理控制台上顯示的名稱____HTMLTAG_205__HTMLTAG_204___管理控制台上顯示的名稱____HTMLTAG_205__HTMLTAG_206__7MLG_206__7MLG_206__7ML LDAP___HTMLTAG_208__HTMLTAG_209__HTMLTAG_210___
___HTMLTAG_211__HTMLTAG_212__HTMLTAG_213___優先權___HTMLTAG_214__HTMLTAG_215__HTMLTAG_216___有多個提供者時的優先順序____HTMLTAG_217__HTMLTAG_218__HTMLTAG_219____0</code>（最高）___HTMLTAG_221__HTMLTAG_222___
___HTMLTAG_223__HTMLTAG_224__HTMLTAG_225___已啟用___HTMLTAG_226__HTMLTAG_227__HTMLTAG_228___啟用/禁用提供者___HTMLTAG_229__HTMLTAG_230__HTMLTAG_231___ON___HTMLTAG_232__HTMLTAG_233__HTMLTAG_234___
___HTMLTAG_235__HTMLTAG_236__HTMLTAG_237___導入使用者___HTMLTAG_238__HTMLTAG_239__HTMLTAG_240___將 LDAP 使用者匯入 Keycloak本地資料庫___HTMLTAG_241__HTMLTAG_242__HTMLTAG_243___ON___HTMLTAG_244__HTMLTAG_245__HTMLTAG_246___
</tbody>
</table>

___HTMLTAG_249__HTMLTAG_250___2.2 連線設定___HTMLTAG_251__HTMLTAG_252___

___預編碼_0___

___HTMLTAG_253__HTMLTAG_254___連線池設定：___HTMLTAG_255__HTMLTAG_256___<table>
<thead>
___HTMLTAG_259__HTMLTAG_260___設定___HTMLTAG_261__HTMLTAG_262___說明____HTMLTAG_263__HTMLTAG_264___預設____HTMLTAG_265__HTMLTAG_266___
</thead>
<tbody>
___HTMLTAG_269__HTMLTAG_270__HTMLTAG_271___連線池___HTMLTAG_272__HTMLTAG_273__HTMLTAG_274___開啟連接池以最佳化效能___HTMLTAG_275__HTMLTAG_276__HTMLTAG_277___ON___HTMLTAG_278__HTMLTAG_279__HTMLTAG_280___
___HTMLTAG_281__HTMLTAG_282__HTMLTAG_283___連線池驗證___HTMLTAG_284__HTMLTAG_285__HTMLTAG_286___經過驗證的連線池___HTMLTAG_287__HTMLTAG_288__HTMLTAG_289___簡單___HTMLTAG_290__HTMLTAG_291__HTMLTAG_292___
___HTMLTAG_293__HTMLTAG_294__HTMLTAG_295___連線池偵錯___HTMLTAG_296__HTMLTAG_297__HTMLTAG_298___連線池的日誌偵錯___HTMLTAG_299__HTMLTAG_300__HTMLTAG_301___OFF___HTMLTAG_302__HTMLTAG_303__HTMLTAG_304___
___HTMLTAG_305__HTMLTAG_306__HTMLTAG_307___連線池初始大小___HTMLTAG_308__HTMLTAG_309__HTMLTAG_310___頂部初始連接數___HTMLTAG_311__HTMLTAG_312__HTMLTAG_313___1___HTMLTAG_314__HTMLTAG_315__HTMLTAG_316___
___HTMLTAG_317__HTMLTAG_318__HTMLTAG_319___連接池最大大小___HTMLTAG_320__HTMLTAG_321__HTMLTAG_322___最大連線數___HTMLTAG_323__HTMLTAG_324__HTMLTAG_325___1000___HTMLTAG_326__HTMLTAG_327__HTMLTAG_328___
___HTMLTAG_329__HTMLTAG_330__HTMLTAG_331___連線池逾時___HTMLTAG_332__HTMLTAG_333__HTMLTAG_334___從池取得連線超時___HTMLTAG_335__HTMLTAG_336__HTMLTAG_337___30000</code>女士___HTMLTAG_339__HTMLTAG_340___
</tbody>
</table>

___HTMLTAG_343__HTMLTAG_344___2.3 SSL/LDAPS 設定___HTMLTAG_345__HTMLTAG_346___

<p>要連接到LDAPS（連接埠636），您需要將CA憑證匯入Keycloak信任庫：</p>

___預編碼_1___

<p>使用信任程式庫設定Keycloak：</p>

___預編碼_2___

___HTMLTAG_351__HTMLTAG_352___2.4 使用 StartTLS___HTMLTAG_353__HTMLTAG_354___

<p>您可以在連接埠 389 上使用 <strong>StartTLS</strong>，而不是 LDAPS（連接埠 636）：</p>

___預編碼_3___

<p>StartTLS 將常規 LDAP 連線升級為同一連接埠 389 上的加密連線.</p>

___HTMLTAG_361__HTMLTAG_362___3。 LDAP 搜尋設定___HTMLTAG_363__HTMLTAG_364___<table>
<thead>
___HTMLTAG_367__HTMLTAG_368___設定___HTMLTAG_369__HTMLTAG_370___說明___HTMLTAG_371__HTMLTAG_372___範本值___HTMLTAG_373__HTMLTAG_374___
</thead>
<tbody>
___HTMLTAG_377__HTMLTAG_378__HTMLTAG_379___使用者 DN___HTMLTAG_380__HTMLTAG_381__HTMLTAG_382___Keycloak 搜尋的基本DN用戶___HTMLTAG_383__HTMLTAG_384__HTMLTAG_385___ou=人員，dc=範例，dc=com___HTMLTAG_386__HTMLTAG_387__HTMLTAG_388___
___HTMLTAG_389__HTMLTAG_390__HTMLTAG_391___使用者物件類別___HTMLTAG_392__HTMLTAG_393__HTMLTAG_394___使用者項目的LDAP物件類別___HTMLT AG_395__HTMLTAG_396__HTMLTAG_397___inetOrgPerson、organizationalPerson___HTMLTAG_398__HTMLTAG_399__HTMLTAG_400___
___HTMLTAG_401__HTMLTAG_402__HTMLTAG_403___使用者名稱 LDAP 屬性___HTMLTAG_404__HTMLTAG_405__HTMLTAG_406___LDAP 屬性包含使用者名稱___HTMLTAG_407__HTMLTAGMLTA_408HTLDAP 屬性包含______ <code>sAMAccountName</code>（AD）___HTMLTAG_413__HTMLTAG_414___
___HTMLTAG_415__HTMLTAG_416__HTMLTAG_417___RDN LDAP 屬性___HTMLTAG_418__HTMLTAG_419__HTMLTAG_420___用於 RDN（相對可分辨名稱）的屬性_____HTMLTAG_421__MLTAG_ML4142G14241_421__414U421__414U421__4U4U421__414U421__42G1421__414U421__414U421__414U421__414U421__414U421__4U4U421__4UU4421__4UU42124U4U421124U4211202G (LDAP) / <code>cn</code>（西元）___HTMLTAG_427__HTMLTAG_428___
___HTMLTAG_429__HTMLTAG_430__HTMLTAG_431___UUID LDAP 屬性___HTMLTAG_432__HTMLTAG_433__HTMLTAG_434___被用作唯一 ID 的屬性</td>HTMLTAGMLTA_436HT___V (LDAP) / <code>objectGUID</code>（AD）___HTMLTAG_441__HTMLTAG_442___
___HTMLTAG_443__HTMLTAG_444__HTMLTAG_445___搜尋範圍___HTMLTAG_446__HTMLTAG_447__HTMLTAG_448__HTMLTAG_449___一級_</code>或<code>子樹___HTMLTAG_452__HTMLTAG_453__HTMLTAG_454__HTMLTAG_455___子樹___HTMLTAG_456__HTMLTAG_457__HTMLTAG_458___
___HTMLTAG_459__HTMLTAG_460__HTMLTAG_461___自訂使用者 LDAP 過濾器___HTMLTAG_462__HTMLTAG_463__HTMLTAG_464___要過濾的 LDAP附加過濾器使用者___HTMLTAG_465__HTMLTAG_466__HTMLTAG_467___(&amp;(objectClass=person)(memberOf=cn=app-users,ou=Groups,dc=example,dc=com))___HTMLTAG_468__HTTAG_468__4ML
___HTMLTAG_471__HTMLTAG_472__HTMLTAG_473___讀取逾時___HTMLTAG_474__HTMLTAG_475__HTMLTAG_476___LDAP 讀取操作逾時___HTMLTAG_477__HTMLTAG_476___LDAP 讀取操作逾時___HTMLTAG_477__HTMLTAG_478_____4G_478__4000___毫秒___HTMLTAG_481__HTMLTAG_482___
</tbody>
</table>

___HTMLTAG_485__HTMLTAG_486___3.1 Active Directory 設定___HTMLTAG_487__HTMLTAG_488___

<p>選擇 <strong>Vendor = Active Directory</strong> 時，Keycloak 會自動設定適當的值：</p>

___預編碼_4___

___HTMLTAG_493__HTMLTAG_494___4。儲存模式___HTMLTAG_495__HTMLTAG_496___

<p>Keycloak 支援 3 種儲存模式，這些模式決定了 Keycloak 如何與 LDAP 互動：</p><table>
<thead>
___HTMLTAG_501__HTMLTAG_502___模式____HTMLTAG_503__HTMLTAG_504___從 LDAP 讀取___HTMLTAG_505__HTMLTAG_506___寫回 LDAP___HTMLTAG_507__HTMLTAG_cloak DB___HTMLTAG_509__HTMLTAG_510___使用案例___HTMLTAG_511__HTMLTAG_512___
</thead>
<tbody>
___HTMLTAG_515__HTMLTAG_516__HTMLTAG_517___唯讀___HTMLTAG_518__HTMLTAG_519__HTMLTAG_520___✅___HT MLTAG_521__HTMLTAG_522___❌___HTMLTAG_523__HTMLTAG_524___✅（快取）___HTMLTAG_525__HTMLTAG_526___LDAP是唯一的來源，不允許使用者透過 Keycloak 更改資訊___HTMLTAG_527__HTMLTAG_528___
___HTMLTAG_529__HTMLTAG_530__HTMLTAG_531___可寫___HTMLTAG_532__HTMLTAG_533__HTMLTAG_534__ _✅___HTMLTAG_535__HTMLTAG_536___✅___HTMLTAG_537__HTMLTAG_538___✅___HTMLTAG_539__HTMLTAG_540___用於允許使用者變更資訊（密碼、設定檔）並寫回 LD341TAGML_FAP42____
___HTMLTAG_543__HTMLTAG_544__HTMLTAG_545___未同步___HTMLTAG_546__HTMLTAG_547__HTMLTAG_548___ ✅___HTMLTAG_549__HTMLTAG_550___❌___HTMLTAG_551__HTMLTAG_552____✅___HTMLTAG_553__HTMLTAG_554___從下列位置匯入使用者LDAP，然後僅在寫入 ___MLak 中_____
</tbody>
</table>

___HTMLTAG_559__HTMLTAG_560___4.1 編輯模式___HTMLTAG_561__HTMLTAG_562___

<p>編輯模式規格使用者或管理員變更資訊時的行為：</p>

___預編碼_5___

___HTMLTAG_565__HTMLTAG_566___5。同步設定___HTMLTAG_567__HTMLTAG_568___

<p>Keycloak 可以透過 2 種機制從 LDAP 同步使用者：</p>

___HTMLTAG_571__HTMLTAG_572___5.1 定期完全同步___HTMLTAG_573__HTMLTAG_574___

___預編碼_6___

___HTMLTAG_575__HTMLTAG_576___5.2 定期變更使用者同步___HTMLTAG_577__HTMLTAG_578___

___預編碼_7___

___HTMLTAG_579__HTMLTAG_580___5.3 手動同步___HTMLTAG_581__HTMLTAG_582___

<p>您可以從管理控制台或透過 CLI 手動觸發同步：</p>

___預編碼_8___

___HTMLTAG_585__HTMLTAG_586___6。 LDAP 映射器___HTMLTAG_587__HTMLTAG_588___

<p>LDAP 映射器定義 Keycloak 如何 <strong>將 LDAP 屬性對應到 Keycloak 使用者模型</strong>。這是配置 LDAP 聯合時最重要的部分。 </p>

___HTMLTAG_593__HTMLTAG_594___6.1 使用者屬性 LDAP 映射器___HTMLTAG_595__HTMLTAG_596___

<p>將 LDAP 屬性對應到 Keycloak 使用者屬性：</p>

___預編碼_9___

<p>自動產生的預設映射器：</p><table>
<thead>
___HTMLTAG_603__HTMLTAG_604___映射器名稱____HTMLTAG_605__HTMLTAG_606___LDAP 屬性___HTMLTAG_607__HTMLTAG_608___Keycloak 屬性___HTMLTAG_609__HTMLTAG_610___
</thead>
<tbody>
___HTMLTAG_613__HTMLTAG_614___使用者名稱___HTMLTAG_615__HTMLTAG_616__HTMLTAG_617___uid</code> / <code>sAMAccountName___HTMLTAG_620__HTMLTAG_621__HTMLTAG_622__HTMLTAG_623___使用者名稱___HTMLTAG_624__HTMLTAG_625__HTMLTAG_626___
___HTMLTAG_627__HTMLTAG_628___電子郵件___HTMLTAG_629__HTMLTAG_630__HTMLTAG_631___郵件___HTMLTAG_632_ _____HTMLTAG_633__HTMLTAG_634__HTMLTAG_635___電子郵件___HTMLTAG_636__HTMLTAG_637__HTMLTAG_638___
___HTMLTAG_639__HTMLTAG_640___名字___HTMLTAG_641__HTMLTAG_642__HTMLTAG_643___名字</code> / <code>cn</code>___HTMLTAG_647__HTMLTAG_648__HTMLTAG_649___名字___HTMLTAG_650__HTMLTAG_651__HTMLTAG_652___
___HTMLTAG_653__HTMLTAG_654___姓氏___HTMLTAG_655__HTMLTAG_656__HTMLTAG_657___sn___HTMLTAG_658__HTMLTAG_659__HTMLTAG_660__HTMLTAG_658__HTMLTAG_659__HTMLTAG_660__HTMLTAG_658__HTMLTAG_659__HTMLTAG_660__HTMLTAG_661____MLTAGMLTA162____
___HTMLTAG_665__HTMLTAG_666___建立日期___HTMLTAG_667__HTMLTAG_668__HTMLTAG_669___建立時間戳___HTMLTAG_ 670__HTMLTAG_671__HTMLTAG_672__HTMLTAG_673____建立時間戳___HTMLTAG_674__HTMLTAG_675__HTMLTAG_676___
___HTMLTAG_677__HTMLTAG_678___修改日期___HTMLTAG_679__HTMLTAG_680__HTMLTAG_681___修改時間戳___HTMLTAG_ 682__HTMLTAG_683__HTMLTAG_684__HTMLTAG_685___修改時間戳___HTMLTAG_686__HTMLTAG_687__HTMLTAG_688___
</tbody>
</table>

___HTMLTAG_691__HTMLTAG_692___6.2 全名 LDAP 映射器___HTMLTAG_693__HTMLTAG_694___

<p>將 LDAP <code>cn</code>（通用名稱）對應到 Keycloak <code>firstName</code> + <code>lastName___MLG___MLTAG_699___ + <code>lastName___MLG____7070____7____

___預編碼_10___

<p>當 LDAP 僅具有 <code>cn</code> 而不分隔 <code>givenName</code>/<code>sn___HTMLTAG_709_707___/<code>sn</code>_HT​​____

___HTMLTAG_711__HTMLTAG_712___6.3 群組 LDAP 映射器___HTMLTAG_713__HTMLTAG_714___

<p>將 LDAP 群組同步到 Keycloak 群組：</p>

<pre><code class="language-text">Mapper Type: group-ldap-mapper
LDAP Groups DN: ou=Groups,dc=example,dc=com
Group Name LDAP Attribute: cn
Group Object Classes: groupOfNames
Membership LDAP Attribute: member
Membership Attribute Type: DN
Membership User LDAP Attribute: uid
Mode: READ_ONLY
User Groups Retrieve Strategy: LOAD_GROUPS_BY_MEMBER_ATTRIBUTE
Drop non-existing groups during sync: false
Groups Path: /</code></pre>

___HTMLTAG_717__HTMLTAG_718___使用者群組擷取策略選項：___HTMLTAG_719__HTMLTAG_720___

<table>
<thead>
___HTMLTAG_723__HTMLTAG_724___策略____HTMLTAG_725__HTMLTAG_726___說明___HTMLTAG_727__HTMLTAG_728___
</thead>
<tbody>
___HTMLTAG_731__HTMLTAG_732__HTMLTAG_733___LOAD_GROUPS_BY_MEMBER_ATTRIBUTE___HTMLTAG_734__HTMLTAG_735__HTMLTAG_736___根據成員屬性從 LDAP 載入組___
___HTMLTAG_739__HTMLTAG_740__HTMLTAG_741___GET_GROUPS_FROM_USER_MEMBEROF_ATTRIBUTE___HTMLTAG_742__HTMLTAG_743__HTMLTAG_744______MLTAG_742__HTMLTAG_743__HTMLTAG_744_______MLTAG_742__HTMLTAG_743__HTMLTAG_744_______MLTAMLTAMLTA14U4177414U____ML屬性___HTMLTAG_747__HTMLTAG_748___
___HTMLTAG_749__HTMLTAG_750__HTMLTAG_751___LOAD_GROUPS_BY_MEMBER_ATTRIBUTE_RECURSIVELY___HTMLTAG_752__HTMLTAG_753__HTMLTAG_754______MLTAG_752__HTMLTAG_753__HTMLTAG_754______MLTAG_752__HTMLTAG_753__HTMLTAG_754______MLTAG_752__HTMLTAG_753__HTMLTAG_754______MLTAG_752__HTMLTAG_753__HTMLTAG_754___________________
</tbody>
</table>___HTMLTAG_759__HTMLTAG_760___6.4 角色 LDAP 映射器___HTMLTAG_761__HTMLTAG_762___

<p>將 LDAP 角色/群組同步到 Keycloak 領域角色：</p>

<pre><code class="language-text">Mapper Type: role-ldap-mapper
LDAP Roles DN: ou=Roles,dc=example,dc=com
Role Name LDAP Attribute: cn
Role Object Classes: groupOfNames
Membership LDAP Attribute: member
Membership Attribute Type: DN
Membership User LDAP Attribute: uid
Mode: READ_ONLY
Use Realm Roles Mapping: true
Client ID: (để trống nếu dùng realm roles)</code></pre>

___HTMLTAG_765__HTMLTAG_766___6.5 硬編碼-ldap-角色映射器___HTMLTAG_767__HTMLTAG_768___

<p>自動將固定角色指派給 LDAP 供應商的 <strong>所有 </strong> 使用者：</p>

<pre><code class="language-text">Mapper Type: hardcoded-ldap-role-mapper
Role: realm-role-name
# Hoặc client role:
Role: client-id.client-role-name</code></pre>

<p>當您想要使用角色標記來區分 LDAP 使用者和本機使用者時很有用。 </p>

___HTMLTAG_775__HTMLTAG_776___6.6 msad-使用者帳號控制映射器___HTMLTAG_777__HTMLTAG_778___

<p>用於 <strong>Active Directory</strong> 的特殊映射器，處理 <code>userAccountControl</code> 屬性：</p>___

<pre><code class="language-text">Mapper Type: msad-user-account-control-mapper
# Xử lý:
# - Account enabled/disabled status
# - Password expired status
# - Account locked status
# - Require user to change password at next login</code></pre>

<p>此映射器讀取 AD 的位元遮罩 <code>userAccountControl</code> 以對應到 Keycloak 使用者狀態：</p>

<table>
<thead>
___HTMLTAG_791__HTMLTAG_792___AD 標誌（位元）___HTMLTAG_793__HTMLTAG_794___Keycloak 行為___HTMLTAG_795__HTMLTAG_796___
</thead>
<tbody>
___HTMLTAG_799__HTMLTAG_800__HTMLTAG_801___ACCOUNTDISABLE</code> (0x0002)____HTMLTAG_803__HTMLTAG_804___使用者在 Keycloak 中被停用____HTMLTAG_805__16805_________
___HTMLTAG_807__HTMLTAG_808__HTMLTAG_809___鎖定</code> (0x0010)___HTMLTAG_811__HTMLTAG_812___使用者已鎖定___HTMLTAG_813__HTMLTAG_814___
___HTMLTAG_815__HTMLTAG_816__HTMLTAG_817___PASSWORD_EXPIRED___HTMLTAG_818__HTMLTAG_819__HTMLTAG_820___使用者登入時必須變更密碼____HTMLTAG_821__HTMLTAG_822___
</tbody>
</table>

___HTMLTAG_825__HTMLTAG_826___6.7 憑證-ldap-映射器___HTMLTAG_827__HTMLTAG_828___

<p>將 LDAP 憑證屬性對應到 Keycloak 使用者屬性以進行 X.509 驗證：</p>

<pre><code class="language-text">Mapper Type: certificate-ldap-mapper
LDAP Attribute: userCertificate
User Model Attribute: usercertificate
Is DER Formatted: true
Always Read Value From LDAP: true</code></pre>

___HTMLTAG_831__HTMLTAG_832___7。密碼雜湊___HTMLTAG_833__HTMLTAG_834___

<p>使用 LDAP 聯合時，密碼雜湊有幾個重要特徵：</p>

<table>
<thead>
___HTMLTAG_839__HTMLTAG_840___場景___HTMLTAG_841__HTMLTAG_842___密碼雜湊___HTMLTAG_843__HTMLTAG_844___注意___HTMLTAG_845__HTMLTAG_846___
</thead>
<tbody>
___HTMLTAG_849__HTMLTAG_850__HTMLTAG_851___READ_ONLY 模式___HTMLTAG_852__HTMLTAG_853__HTMLTAG_854___密碼始終直接透過 LDAP 伺服器進行驗證______MLTAG_855_____MLG____密碼始終直接透過 LDAP 伺服器進行驗證______MLTAG_855__15G_855__不儲存密碼雜湊___HTMLTAG_857__HTMLTAG_858___
___HTMLTAG_859__HTMLTAG_860__HTMLTAG_861___可寫入模式___HTMLTAG_862__HTMLTAG_863__HTMLTAG_864___根據LDAP密碼策略將密碼寫入LDAP___HTMLTAG_865__HTMLTAGML_866___
___HTMLTAG_869__HTMLTAG_870__HTMLTAG_871___UNSYNCED 模式___HTMLTAG_872__HTMLTAG_873__HTMLTAG_874___使用 Keycloak 雜湊保存在 Keycloak DB 中的新密碼____HTMLTAG_875167585875_____ LDAP___HTMLTAG_877__HTMLTAG_878___
</tbody>
</table>

<pre><code class="language-bash"># Kiểm tra password policy trên LDAP (OpenLDAP)
ldapsearch -x -H ldap://localhost:389 \
  -D "cn=admin,dc=example,dc=com" -W \
  -b "cn=config" "(objectClass=olcGlobal)" olcPasswordHash

# Output ví dụ:
# olcPasswordHash: {SSHA}</code></pre>

___HTMLTAG_881__HTMLTAG_882___8。 SSSD 與 FreeIPA 整合___HTMLTAG_883__HTMLTAG_884___<p>Keycloak 支援透過 D-Bus 介面與 <strong>SSSD（系統安全服務守護程序）</strong> 集成，允許從 FreeIPA 或 Red Hat Identity Manager 對使用者進行身份驗證。 </p>

___HTMLTAG_889__HTMLTAG_890___8.1 先修條件___HTMLTAG_891__HTMLTAG_892___

<pre><code class="language-bash"># Cài đặt SSSD trên Keycloak server
sudo dnf install sssd sssd-dbus

# Cấu hình SSSD (/etc/sssd/sssd.conf)
[sssd]
services = nss, pam, ifp
domains = example.com

[domain/example.com]
id_provider = ipa
auth_provider = ipa
access_provider = ipa
ipa_domain = example.com
ipa_server = ipa.example.com

[ifp]
allowed_uids = root, keycloak
user_attributes = +mail, +givenname, +sn, +telephoneNumber</code></pre>

___HTMLTAG_893__HTMLTAG_894___8.2 設定 SSSD 聯合提供者___HTMLTAG_895__HTMLTAG_896___

<p>在管理控制台中，新增 <strong>SSSD</strong> 聯合提供者 — Keycloak 將透過 D-Bus 與 SSSD 通訊至：</p>

<ul>
<li>對使用者進行身份驗證 (PAM)</li>
<li>取得使用者屬性 (InfoPipe)</li>
<li>取得群組成員資格__HTMLTAG_907___
</ul>

___HTMLTAG_909__HTMLTAG_910___9。 Kerberos 橋接器___HTMLTAG_911__HTMLTAG_912___

<p>Keycloak 可以使用 <strong>Kerberos 驗證</strong> 以及 LDAP 聯合，允許使用者使用 Kerberos 票證 (SPNEGO) 自動登入。 </p>

___HTMLTAG_917__HTMLTAG_918___9.1 使用 LDAP 設定 Kerberos___HTMLTAG_919__HTMLTAG_920___

<pre><code class="language-properties"># Trong LDAP provider settings
Allow Kerberos authentication: ON
Kerberos Realm: EXAMPLE.COM
Server Principal: HTTP/keycloak.example.com@EXAMPLE.COM
KeyTab: /etc/keycloak/keycloak.keytab
Use Kerberos for password authentication: ON</code></pre>

<pre><code class="language-bash"># Tạo keytab cho Keycloak service principal
kadmin.local -q "addprinc -randkey HTTP/keycloak.example.com@EXAMPLE.COM"
kadmin.local -q "ktadd -k /etc/keycloak/keycloak.keytab HTTP/keycloak.example.com@EXAMPLE.COM"

# Set permissions
chown keycloak:keycloak /etc/keycloak/keycloak.keytab
chmod 600 /etc/keycloak/keycloak.keytab</code></pre>

___HTMLTAG_921__HTMLTAG_922___9.2 SPNEGO 的瀏覽器設定___HTMLTAG_923__HTMLTAG_924___

___預編碼_20___

___HTMLTAG_925__HTMLTAG_926___10。自訂使用者儲存 SPI___HTMLTAG_927__HTMLTAG_928___

<p>當LDAP不夠用時，您可以編寫<strong>自訂使用者儲存提供者</strong>來連接任何資料來源（SQL資料庫、REST API、遺留系統...）.</p>

___HTMLTAG_933__HTMLTAG_934___10.1 SPI 介面___HTMLTAG_935__HTMLTAG_936___

<pre><code class="language-java">// UserStorageProviderFactory — tạo provider instances
public class MyUserStorageProviderFactory
    implements UserStorageProviderFactory&lt;MyUserStorageProvider&gt; {

    @Override
    public String getId() {
        return "my-user-storage";
    }

    @Override
    public MyUserStorageProvider create(KeycloakSession session,
                                         ComponentModel model) {
        return new MyUserStorageProvider(session, model);
    }
}

// UserStorageProvider — implement các interfaces cần thiết
public class MyUserStorageProvider implements
    UserStorageProvider,
    UserLookupProvider,
    CredentialInputValidator,
    UserQueryProvider {

    @Override
    public UserModel getUserByUsername(RealmModel realm, String username) {
        // Query external database
        ExternalUser extUser = externalDb.findByUsername(username);
        if (extUser == null) return null;

        // Wrap vào Keycloak UserModel
        return new UserAdapter(session, realm, model, extUser);
    }

    @Override
    public boolean isValid(RealmModel realm, UserModel user,
                           CredentialInput input) {
        if (!supportsCredentialType(input.getType())) return false;
        // Verify password với external system
        return externalDb.verifyPassword(
            user.getUsername(),
            input.getChallengeResponse()
        );
    }
}</code></pre>

___HTMLTAG_937__HTMLTAG_938___10.2 部署自訂提供者___HTMLTAG_939__HTMLTAG_940___

<pre><code class="language-bash"># Build JAR
mvn clean package

# Copy vào Keycloak providers directory
cp target/my-user-storage.jar /opt/keycloak/providers/

# Rebuild Keycloak
/opt/keycloak/bin/kc.sh build</code></pre>

___HTMLTAG_941__HTMLTAG_942___11。使用 kcadm.sh 設定 LDAP___HTMLTAG_943__HTMLTAG_944___

<p>使用 <code>kcadm.sh</code> 透過命令列設定 LDAP 聯合：</p>

<pre><code class="language-bash"># Đăng nhập
kcadm.sh config credentials \
  --server http://localhost:8080 \
  --realm master \
  --user admin \
  --password admin

# Tạo LDAP provider
kcadm.sh create components -r my-realm \
  -s name="Corporate LDAP" \
  -s providerId=ldap \
  -s providerType=org.keycloak.storage.UserStorageProvider \
  -s 'config.vendor=["other"]' \
  -s 'config.connectionUrl=["ldap://ldap.example.com:389"]' \
  -s 'config.bindDn=["cn=admin,dc=example,dc=com"]' \
  -s 'config.bindCredential=["admin_password"]' \
  -s 'config.usersDn=["ou=People,dc=example,dc=com"]' \
  -s 'config.userObjectClasses=["inetOrgPerson, organizationalPerson"]' \
  -s 'config.usernameLDAPAttribute=["uid"]' \
  -s 'config.rdnLDAPAttribute=["uid"]' \
  -s 'config.uuidLDAPAttribute=["entryUUID"]' \
  -s 'config.editMode=["READ_ONLY"]' \
  -s 'config.syncRegistrations=["false"]' \
  -s 'config.searchScope=["2"]' \
  -s 'config.importEnabled=["true"]' \
  -s 'config.enabled=["true"]' \
  -s 'config.priority=["0"]' \
  -s 'config.fullSyncPeriod=["604800"]' \
  -s 'config.changedSyncPeriod=["86400"]'

# Lấy LDAP provider ID
LDAP_ID=$(kcadm.sh get components -r my-realm \
  --fields id,name \
  -q providerType=org.keycloak.storage.UserStorageProvider \
  | jq -r '.[0].id')

# Thêm group mapper
kcadm.sh create components -r my-realm \
  -s name="group-mapper" \
  -s providerId=group-ldap-mapper \
  -s providerType=org.keycloak.storage.ldap.mappers.LDAPStorageMapper \
  -s parentId=$LDAP_ID \
  -s 'config.groups.dn=["ou=Groups,dc=example,dc=com"]' \
  -s 'config.group.name.ldap.attribute=["cn"]' \
  -s 'config.group.object.classes=["groupOfNames"]' \
  -s 'config.membership.ldap.attribute=["member"]' \
  -s 'config.membership.attribute.type=["DN"]' \
  -s 'config.membership.user.ldap.attribute=["uid"]' \
  -s 'config.mode=["READ_ONLY"]' \
  -s 'config.drop.non.existing.groups.during.sync=["false"]'

# Trigger full sync
kcadm.sh create user-storage/$LDAP_ID/sync -r my-realm \
  -s action=triggerFullSync</code></pre>

___HTMLTAG_949__HTMLTAG_950___12。 LDAP 問題故障排除___HTMLTAG_951__HTMLTAG_952___

___HTMLTAG_953__HTMLTAG_954___12.1 連線問題___HTMLTAG_955__HTMLTAG_956___<table>
<thead>
___HTMLTAG_959__HTMLTAG_960___錯誤___HTMLTAG_961__HTMLTAG_962___原因____HTMLTAG_963__HTMLTAG_964___解決方案____HTMLTAG_965__HTMLTAG_966___
</thead>
<tbody>
___HTMLTAG_969__HTMLTAG_970__HTMLTAG_971___javax.naming.CommunicationException___HTMLTAG_972__HTMLTAG_973__HTMLTAG_974___無法連接到 LDAP 伺服器____HTMLTAG_9757、MLTAG_1 389/636___HTMLTAG_977__HTMLTAG_978___
___HTMLTAG_979__HTMLTAG_980__HTMLTAG_981___javax.naming.AuthenticationException___HTMLTAG_982__HTMLTAG_983__HTMLTAG_984___綁定 DN或綁定憑證錯誤____HTMLTAG_985__HTMLTAG_986____驗證綁定憑證<code>ldap搜尋___HTMLTAG_988__HTMLTAG_989__HTMLTAG_990___
___HTMLTAG_991__HTMLTAG_992__HTMLTAG_993___SSLHandshakeException___HTMLTAG_994__HTMLTAG_995__HTMLTAG_996____憑證不受信任___HTMLTAG_997__HTMLTAG_998796____憑證不受信任___HTMLTAG_997__HTMLTAG_998996____證書不___
___HTMLTAG_1001__HTMLTAG_1002__HTMLTAG_1003___連線逾時___HTMLTAG_1004__HTMLTAG_1005__HTMLTAG_1006___LDAP 伺服器不回應____HTMLTAG_1007__HTMLTA____1008 DNS___HTMLTAG_1009__HTMLTAG_1010___
</tbody>
</table>

___預編碼_24___

___HTMLTAG_1013__HTMLTAG_1014___12.2 同步失敗___HTMLTAG_1015__HTMLTAG_1016___

<table>
<thead>
___HTMLTAG_1019__HTMLTAG_1020___錯誤___HTMLTAG_1021__HTMLTAG_1022___原因____HTMLTAG_1023__HTMLTAG_1024___解決方案____HTMLTAG_1025__HTMLTAG_1026___
</thead>
<tbody>
___HTMLTAG_1029__HTMLTAG_1030__HTMLTAG_1031___使用者...已存在___HTMLTAG_1032__HTMLTAG_1033__HTMLTAG_1034____LDAP與本機使用者之間的使用者名稱衝突____HTMLTAG_1035__HTMLTAG_1036___刪除本機使用者或變更使用者名稱對應___HTMLTAG_1037__HTMLTAG_1038___
___HTMLTAG_1039__HTMLTAG_1040__HTMLTAG_1041___超出大小限制___HTMLTAG_1042__HTMLTAG_1043__HTMLTAG_1044___LDLDAP 伺服器限制回傳結果的數量____HTMLTAG_10457144___LDLD__41TAGAP_AP 10457414AP過濾器以減少範圍___HTMLTAG_1047__HTMLTAG_1048___
___HTMLTAG_1049__HTMLTAG_1050__HTMLTAG_1051___推薦___HTMLTAG_1052__HTMLTAG_1053__HTMLTAG_1054___LDAP 傳回推薦而非結果___HTMLTAG_1055__HTMLTAG_105AP 回傳推薦遵循連接中的</code>設定___HTMLTAG_1059__HTMLTAG_1060___
</tbody>
</table>

___HTMLTAG_1063__HTMLTAG_1064___12.3 映射器問題___HTMLTAG_1065__HTMLTAG_1066___

___預編碼_25___

___HTMLTAG_1067__HTMLTAG_1068___13。最佳實務___HTMLTAG_1069__HTMLTAG_1070___<ul>
___HTMLTAG_1072__HTMLTAG_1073___一律使用 LDAPS 或 StartTLS</strong> — 避免以明文形式傳送憑證</li>
___HTMLTAG_1076__HTMLTAG_1077___使用單獨的服務帳戶</strong>進行綁定 DN — 不要使用管理員帳戶</li>
___HTMLTAG_1080__HTMLTAG_1081___限制搜尋範圍</strong> — 使用自訂使用者 LDAP 過濾器僅匯入必要的使用者__HTMLTAG_1083___
___HTMLTAG_1084__HTMLTAG_1085___啟用連線池</strong> — 減少連線建立開銷</li>
___HTMLTAG_1088__HTMLTAG_1089___適當設定同步週期</strong> — 太短會導致 LDAP 負載過重，太長會導致資料過時</li>
___HTMLTAG_1092__HTMLTAG_1093___監控同步日誌</strong> — Keycloak 記錄詳細的同步過程</li>
___HTMLTAG_1096__HTMLTAG_1097___首先使用 READ_ONLY 進行測試</strong> — 首次設定時，在傳輸 WRITABLE 之前使用 READ_ONLY 進行驗證</li>
___HTMLTAG_1100__HTMLTAG_1101___在大同步之前備份 Keycloak 資料庫</strong> — 完全同步可以匯入數千個使用者</li>
</ul>