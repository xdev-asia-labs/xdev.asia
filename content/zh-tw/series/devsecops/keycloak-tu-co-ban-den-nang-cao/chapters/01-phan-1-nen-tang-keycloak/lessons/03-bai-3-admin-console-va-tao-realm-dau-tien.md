---
id: 019d8b30-b103-7001-c001-e0c5f8100103
title: 第 3 課：管理控制台和建立第一個領域
slug: bai-3-admin-console-va-tao-realm-dau-tien
description: 熟悉管理控制台、建立第一個管理員使用者、建立和設定領域、領域設定（常規、登入、電子郵件、主題、在地化、金鑰、安全防禦）、管理 CLI (kcadm.sh) 和基本管理 REST API。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 3
section_title: 第 1 部分：Keycloak 平台
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-388" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-388)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1001" cy="213" r="34" fill="#34d399" opacity="0.08"/>
    <circle cx="902" cy="274" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="803" cy="75" r="30" fill="#34d399" opacity="0.14"/>
    <circle cx="704" cy="136" r="13" fill="#34d399" opacity="0.07"/>
    <circle cx="605" cy="197" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="223" x2="1100" y2="303" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="253" x2="1050" y2="323" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1005.9089653438086,154 1005.9089653438086,192 973,211 940.0910346561914,192 940.0910346561914,154 973,135" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 3 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 3 課：管理控制台與建立第一個領域__HTMLTAG_53___
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 1 部分：Keycloak 平台</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_65__HTMLTAG_66___1。存取管理控制台___HTMLTAG_67__HTMLTAG_68___

<p>安裝Keycloak（獨立或Docker）後，您可以存取<strong>管理控制台</strong> - 整個Keycloak系統的集中管理介面。 </p>

___HTMLTAG_73__HTMLTAG_74___存取網址___HTMLTAG_75__HTMLTAG_76___
<p>預設情況下，管理控制台位於：</p>
___預編碼_0___

<p>如果您使用具有不同連接埠對映的 Docker 執行 Keycloak：</p>
___預編碼_1___

___HTMLTAG_81__HTMLTAG_82___建立第一個管理員使用者___HTMLTAG_83__HTMLTAG_84___
<p>首次存取Keycloak時，您需要建立<strong>初始管理員使用者</strong>以登入管理控制台。有兩種方式：</p>

___HTMLTAG_89__HTMLTAG_90___方法 1：透過環境變數（建議用於 Docker/生產）___HTMLTAG_91__HTMLTAG_92___
___預編碼_2___

___HTMLTAG_93__HTMLTAG_94___方法2：透過歡迎頁面（僅當從本地主機存取時）___HTMLTAG_95__HTMLTAG_96___
<p>轉到 ___HTMLTAG_98__URL_1___>，您將看到管理員使用者建立表單。輸入使用者名稱和密碼，然後按 <strong>建立</strong>.</p>

___HTMLTAG_102__HTMLTAG_103___方法 3：透過命令列___HTMLTAG_104__HTMLTAG_105___
___預編碼_3______HTMLTAG_106__HTMLTAG_107___管理控制台介面___HTMLTAG_108__HTMLTAG_109___
<p>登入後，您將看到管理控制台介面，其中包含主要元件：</p>
<ul>
___HTMLTAG_113__HTMLTAG_114__HTMLTAG_115___領域選擇器</strong>（左上角）— 選擇目前管理的領域____HTMLTAG_117__HTMLTAG_118___
___HTMLTAG_119__HTMLTAG_120__HTMLTAG_121___左側邊欄</strong> — 主導覽功能表：客戶端、客戶端範圍、領域角色、使用者、群組、會話、事件、領域設定、身份驗證、身分提供者、使用者聯合___HTMLTAG_123__4ML
___HTMLTAG_125__HTMLTAG_126__HTMLTAG_127___主要內容區域</strong> — 顯示所選項目的詳細內容____HTMLTAG_129__HTMLTAG_130___
___HTMLTAG_131__HTMLTAG_132__HTMLTAG_133___使用者下拉式選單</strong>（右上角）—管理員帳號管理，退出____HTMLTAG_135__HTMLTAG_136___
</ul>

___HTMLTAG_138__HTMLTAG_139___2。建立第一個領域___HTMLTAG_140__HTMLTAG_141___

___HTMLTAG_142__HTMLTAG_143___主領域與自訂領域___HTMLTAG_144__HTMLTAG_145___
<p>安裝 Keycloak 時，會建立一個名為 <strong>master</strong> 的領域。主領域是用於管理其他領域的特殊領域 — <strong>不應將主領域用於應用程式</strong>.</p>

<p>最佳實務：</p>
<ul>
___HTMLTAG_155__HTMLTAG_156___使用 <strong>主領域</strong>僅供超級管理員管理Keycloak系統___HTMLTAG_159__HTMLTAG_160___
___HTMLTAG_161__HTMLTAG_162___為每個組織、專案或環境建立單獨的 <strong>自訂領域__HTMLTAG_164_______HTMLTAG_165__HTMLTAG_166___
___HTMLTAG_167__HTMLTAG_168___提供一個有意義的領域名稱：<code>mycompany-dev</code>、<code>mycompany-staging__HTMLTAG_172___、 <code>mycompany-prod___HTMLTAG_174__HTMLTAG_175__HTMLTAG_176___
</ul>

___HTMLTAG_178__HTMLTAG_179___透過管理控制台建立領域___HTMLTAG_180__HTMLTAG_181___
<ol>
___HTMLTAG_183__HTMLTAG_184___點選 <strong>領域選擇器</strong>（左上角的下拉選單，顯示「主」）___HTMLTAG_187__HTMLTAG_188___
___HTMLTAG_189__HTMLTAG_190___點選 <strong>建立領域___HTMLTAG_192__HTMLTAG_193__HTMLTAG_194___
___HTMLTAG_195__HTMLTAG_196___輸入資訊：</p>
<ul>
___HTMLTAG_199__HTMLTAG_200___領域</strong>：<code>我的公司</code>（只包含小寫字母、數字、連字號）</li>
___HTMLTAG_205__HTMLTAG_206___已啟用</strong>：開啟</li>
</ul>
</li>
___HTMLTAG_211__HTMLTAG_212___點選 <strong>建立___HTMLTAG_214__HTMLTAG_215__HTMLTAG_216___
</ol>

___HTMLTAG_218__HTMLTAG_219___從 JSON 檔案建立領域___HTMLTAG_220__HTMLTAG_221___
<p>您可以從 JSON 檔案匯入領域 — 對於在環境之間複製設定很有用：</p>
___預編碼_4___

<p>透過管理控制台匯入：建立領域時，點選 <strong>瀏覽</strong> 選擇 JSON 檔案。 </p>___HTMLTAG_228__HTMLTAG_229___3。領域設定詳細資訊___HTMLTAG_230__HTMLTAG_231___

<p>建立領域後，從側邊欄存取 <strong>領域設定</strong>以進行詳細設定。 </p>

___HTMLTAG_236__HTMLTAG_237___3.1 常規選項卡___HTMLTAG_238__HTMLTAG_239___
<table>
<thead>
___HTMLTAG_242__HTMLTAG_243___設定___HTMLTAG_244__HTMLTAG_245___說明____HTMLTAG_246__HTMLTAG_247___建議值____HTMLTAG_248__HTMLTAG_249___
</thead>
<tbody>
___HTMLTAG_252__HTMLTAG_253___顯示名稱___HTMLTAG_254__HTMLTAG_255___登入頁面上顯示的名稱____HTMLTAG_256__HTMLTAG_257___公司/專案名稱____HTMLTAG_258HTMLHTMLTAG_259____HT__HTMLTAG_259____HT__HTMLTAG_259____HT__HTMLTAG_259____
___HTMLTAG_260__HTMLTAG_261___HTML 顯示名稱___HTMLTAG_262__HTMLTAG_263___HTML 對顯示名稱的支援____HTMLTAG_264__HTMLTAG_265____ + 名稱____HTMLTAG_266671UG_26662
___HTMLTAG_268__HTMLTAG_269___前端 URL___HTMLTAG_270__HTMLTAG_271___客戶端用於連線的 URL____HTMLTAG_272__HTMLTAG_273__URL_2___></tr>
___HTMLTAG_275__HTMLTAG_276___需要 SSL____HTMLTAG_277__HTMLTAG_278___請求需要 SSL____HTMLTAG_279__HTMLTAG_280__HTMLTAG_281___外部</code>（開發）/184281___ （產品）___HTMLTAG_285__HTMLTAG_286___
___HTMLTAG_287__HTMLTAG_288___使用者管理的存取____HTMLTAG_289__HTMLTAG_290___允許使用者管理資源 (UMA)____HTMLTAG_291__HTMLTAG_292___關閉（除非需要 UMA）____HTMLTAG_291__HTMLTAG_292___關閉（除非需要 UMA）____HTMLTAG_2931HT
___HTMLTAG_295__HTMLTAG_296___ACR 到 LoA 映射___HTMLTAG_297__HTMLTAG_298___映射身份驗證上下文類別參考___HTMLTAG_299__HTMLTAG_300___需要升級身份驗證時的配置__HTMLTAG_301HTMLTAG_302___
</tbody>
</table>___HTMLTAG_305__HTMLTAG_306___3.2 登入選項卡___HTMLTAG_307__HTMLTAG_308___
<p>設定登入頁面的行為：</p>
<table>
<thead>
___HTMLTAG_313__HTMLTAG_314___設定___HTMLTAG_315__HTMLTAG_316___說明___HTMLTAG_317__HTMLTAG_318___預設____HTMLTAG_319__HTMLTAG_320___
</thead>
<tbody>
___HTMLTAG_323__HTMLTAG_324___使用者註冊___HTMLTAG_325__HTMLTAG_326___允許新帳號註冊___HTMLTAG_327__HTMLTAG_328___關閉___HTMLTAG_329__HTMLTAG_330___
___HTMLTAG_331__HTMLTAG_332___忘記密碼____HTMLTAG_333__HTMLTAG_334___顯示「忘記密碼」連結____HTMLTAG_335__HTMLTAG_336___關閉___HTMLTAG_337__HTMLTAG_338___
___HTMLTAG_339__HTMLTAG_340___記住我___HTMLTAG_341__HTMLTAG_342___複選框「記得登入」____HTMLTAG_343__HTMLTAG_344___關閉___HTMLTAG_345__HTMLTAG_346___
___HTMLTAG_347__HTMLTAG_348___電子郵件作為使用者名稱___HTMLTAG_349__HTMLTAG_350___使用電子郵件作為使用者名稱___HTMLTAG_351__HTMLTAG_352___關閉___HTMLTAG_353__HTMLTAG_354___
___HTMLTAG_355__HTMLTAG_356___使用電子郵件登入___HTMLTAG_357__HTMLTAG_358___允許使用電子郵件登入____HTMLTAG_359__HTMLTAG_360___ON___HTMLTAG_361__HTMLTAG_362___
___HTMLTAG_363__HTMLTAG_364___重複電子郵件___HTMLTAG_365__HTMLTAG_366___允許重複電子郵件__HTMLTAG_367__HTMLTAG_368___關閉___HTMLTAG_369__HTMLTAG_370___
___HTMLTAG_371__HTMLTAG_372___驗證電子郵件___HTMLTAG_373__HTMLTAG_374___必要的電子郵件驗證____HTMLTAG_375__HTMLTAG_376___關閉___HTMLTAG_377__HTMLTAG_378___
___HTMLTAG_379__HTMLTAG_380___編輯使用者名稱___HTMLTAG_381__HTMLTAG_382___允許變更使用者名稱___HTMLTAG_383__HTMLTAG_384___關閉___HTMLTAG_385__HTMLTAG_386___
</tbody>
</table>

___HTMLTAG_389__HTMLTAG_390___建議用於生產：___HTMLTAG_391__HTMLTAG_392___
___預編碼_5___

___HTMLTAG_393__HTMLTAG_394___3.3 電子郵件標籤___HTMLTAG_395__HTMLTAG_396___
<p>設定 SMTP 伺服器傳送電子郵件（驗證、重設密碼、通知）：</p>
<table>
<thead>
___HTMLTAG_401__HTMLTAG_402___設定___HTMLTAG_403__HTMLTAG_404___說明___HTMLTAG_405__HTMLTAG_406___
</thead>
<tbody>
___HTMLTAG_409__HTMLTAG_410___寄件者___HTMLTAG_411__HTMLTAG_412___傳送電子郵件地址（例如noreply@mycompany.com）___HTMLTAG_413__HTMLTAG_414___
___HTMLTAG_415__HTMLTAG_416___來自顯示名稱____HTMLTAG_417__HTMLTAG_418___電子郵件中顯示的名稱___HTMLTAG_419__HTMLTAG_420___
___HTMLTAG_421__HTMLTAG_422___回覆___HTMLTAG_423__HTMLTAG_424___回覆位址（例如support@mycompany.com）___HTMLTAG_425__HTMLTAG_426___
___HTMLTAG_427__HTMLTAG_428___主機___HTMLTAG_429__HTMLTAG_430___SMTP 伺服器主機名稱___HTMLTAG_431__HTMLTAG_432___
___HTMLTAG_433__HTMLTAG_434___連接埠___HTMLTAG_435__HTMLTAG_436___SMTP 連接埠（587 用於 STARTTLS，465 用於 SSL）___HTMLTAG_437__HTMLTAG_438___
___HTMLTAG_439__HTMLTAG_440___加密____HTMLTAG_441__HTMLTAG_442___啟用 SSL 或 STARTTLS___HTMLTAG_443__HTMLTAG_444___
___HTMLTAG_445__HTMLTAG_446___驗證___HTMLTAG_447__HTMLTAG_448___SMTP 使用者名稱和密碼____HTMLTAG_449__HTMLTAG_450___
</tbody>
</table>

<p>Gmail SMTP 設定範例：</p>
___預編碼_6______HTMLTAG_455__HTMLTAG_456___3.4 選項卡主題___HTMLTAG_457__HTMLTAG_458___
<p>自訂不同頁面的外觀：</p>
<ul>
___HTMLTAG_462__HTMLTAG_463__HTMLTAG_464___登入主題</strong> — 登入、註冊、密碼重設頁面___HTMLTAG_466__HTMLTAG_467___
___HTMLTAG_468__HTMLTAG_469__HTMLTAG_470___帳號主題</strong> — 使用者的帳號管理頁面___HTMLTAG_472__HTMLTAG_473___
___HTMLTAG_474__HTMLTAG_475__HTMLTAG_476___管理控制台主題</strong> — 管理控制台___HTMLTAG_478__HTMLTAG_479___
___HTMLTAG_480__HTMLTAG_481__HTMLTAG_482___電子郵件主題</strong> — 電子郵件範本___HTMLTAG_484__HTMLTAG_485___
</ul>

<p>Keycloak 提供主題 <code>keycloak</code> （預設）和 <code>keycloak.v2</code> （帳戶控制台 v3，基於 React___keycloak.v2</code> （帳戶控制台 v3，基於 React）。您可以建立自訂主題 - 將在下一篇文章中討論。 </p>

___HTMLTAG_493__HTMLTAG_494___3.5 本地化選項卡___HTMLTAG_495__HTMLTAG_496___
<p>登入、帳號、電子郵件頁面的多語言支援：</p>
<ol>
___HTMLTAG_500__HTMLTAG_501___在 <strong>國際化</strong>：在___HTMLTAG_504__HTMLTAG_505___
___HTMLTAG_506__HTMLTAG_507___選擇 <strong>支援的區域設定</strong>：en、vi、ja、zh-CN、...___HTMLTAG_510__HTMLTAG_511___
___HTMLTAG_512__HTMLTAG_513___選擇 <strong>預設區域設定</strong>：vi（預設越南語介面）___HTMLTAG_516__HTMLTAG_517___
___HTMLTAG_518__HTMLTAG_519___根據需要為每個區域設定自訂訊息包___HTMLTAG_520__HTMLTAG_521___
</ol>

___HTMLTAG_523__HTMLTAG_524___3.6 選項卡鍵___HTMLTAG_525__HTMLTAG_526___
<p>管理領域的加密金鑰 — 用於簽署和加密令牌：</p>
<ul>
___HTMLTAG_530__HTMLTAG_531__HTMLTAG_532___活動密鑰</strong> — 用於簽署令牌的密鑰____HTMLTAG_534__HTMLTAG_535___
___HTMLTAG_536__HTMLTAG_537__HTMLTAG_538___被動密鑰</strong> — 舊密鑰仍用於驗證先前簽署的令牌____HTMLTAG_540__HTMLTAG_541___
___HTMLTAG_542__HTMLTAG_543__HTMLTAG_544___停用的鍵</strong> — 不再使用的鍵___HTMLTAG_546__HTMLTAG_547___
</ul><p>預設金鑰提供者：</p>
<table>
<thead>
___HTMLTAG_553__HTMLTAG_554___提供者____HTMLTAG_555__HTMLTAG_556___演算法___HTMLTAG_557__HTMLTAG_558___目的___HTMLTAG_559__HTMLTAG_560___
</thead>
<tbody>
___HTMLTAG_563__HTMLTAG_564___rsa 產生的___HTMLTAG_565__HTMLTAG_566___RS256___HTMLTAG_567__HTMLTAG_568___簽署 JWT 令牌____HTMLTAG_569__HTMLTAG_570______
___HTMLTAG_571__HTMLTAG_572___rsa-enc-產生___HTMLTAG_573__HTMLTAG_574___RSA-OAEP___HTMLTAG_575__HTMLTAG_576___編碼代幣____HTMLTAG_577777777777777777777777777777777777777777退出退出退出息息期權息期權改進時__</tr>_
___HTMLTAG_579__HTMLTAG_580___hmac 產生___HTMLTAG_581__HTMLTAG_582___HS512___HTMLTAG_583__HTMLTAG_584___HMAC 簽章____HTMLTAG_585__HTMLTAG_586___
___HTMLTAG_587__HTMLTAG_588___aes 產生___HTMLTAG_589__HTMLTAG_590___AES___HTMLTAG_591__HTMLTAG_592___對稱加密___HTMLTAG_593__HTMLTAG_594___
___HTMLTAG_595__HTMLTAG_596___ecdsa 產生的___HTMLTAG_597__HTMLTAG_598___ES256___HTMLTAG_599__HTMLTAG_600___橢圓曲線簽章___HTMLTAG_601__HTMLTAG_602___
</tbody>
</table>

___HTMLTAG_605__HTMLTAG_606___密鑰輪換：</strong> 新增密鑰提供者→新密鑰變為活動→舊密鑰變為被動→一段時間後，停用舊密鑰。 </p>

___HTMLTAG_609__HTMLTAG_610___3.7 令牌選項卡___HTMLTAG_611__HTMLTAG_612___
<p>配置令牌的生命週期和行為：</p>
<table>
<thead>
___HTMLTAG_617__HTMLTAG_618___設定___HTMLTAG_619__HTMLTAG_620___說明___HTMLTAG_621__HTMLTAG_622___建議值____HTMLTAG_623__HTMLTAG_624______
</thead>
<tbody>
___HTMLTAG_627__HTMLTAG_628___預設簽章演算法___HTMLTAG_629__HTMLTAG_630___JWT簽章演算法____HTMLTAG_631__HTMLTAG_632___RS256___HTMLTAG_633__HTMLTAG_634___
___HTMLTAG_635__HTMLTAG_636___撤銷刷新令牌___HTMLTAG_637__HTMLTAG_638___使用後撤銷刷新令牌____HTMLTAG_639__HTMLTAG_640___ON（生產）____HTMLTAG_6411HTMLTAG_642____
___HTMLTAG_643__HTMLTAG_644___SSO 會話空閒___HTMLTAG_645__HTMLTAG_646___最大會話空閒時間___HTMLTAG_647__HTMLTAG_648___30 分鐘____HTMLTAG_649__HTMLTAG_650______
___HTMLTAG_651__HTMLTAG_652___SSO 會話最長___HTMLTAG_653__HTMLTAG_654___最長會話時間____HTMLTAG_655__HTMLTAG_656___10 小時____HTMLTAG_657__HTMLTAG_658___
___HTMLTAG_659__HTMLTAG_660___存取權杖有效期____HTMLTAG_661__HTMLTAG_662___存取權杖的有效期限____HTMLTAG_663__HTMLTAG_664___5 分鐘____HTMLTAG_6655__HTMLTAG_666___
___HTMLTAG_667__HTMLTAG_668___客戶端登入逾時___HTMLTAG_669__HTMLTAG_670___登入流程的最長時間____HTMLTAG_671__HTMLTAG_672___5分鐘____HTMLTAG_673HTHTMLTAG_674____HT__HT
</tbody>
</table>

___HTMLTAG_677__HTMLTAG_678___3.8 安全防禦標籤___HTMLTAG_679__HTMLTAG_680___
<p>領域的安全設定：</p>___HTMLTAG_683__HTMLTAG_684___標頭：___HTMLTAG_685__HTMLTAG_686___
<table>
<thead>
___HTMLTAG_689__HTMLTAG_690___標頭____HTMLTAG_691__HTMLTAG_692___預設值____HTMLTAG_693__HTMLTAG_694___說明____HTMLTAG_695__HTMLTAG_696___
</thead>
<tbody>
___HTMLTAG_699__HTMLTAG_700___X-Frame-Options___HTMLTAG_701__HTMLTAG_702___SAMEORIGIN___HTMLTAG_703__HTMLTAG_704___防點擊劫持____HTMLTAG_705__HTMLTAG_706___
___HTMLTAG_707__HTMLTAG_708___內容安全政策___HTMLTAG_709__HTMLTAG_710___frame-src'self'; ...___HTMLTAG_711__HTMLTAG_712___CSP 標頭___HTMLTAG_7131MLTAG_7131
___HTMLTAG_715__HTMLTAG_716___X-內容類型選項___HTMLTAG_717__HTMLTAG_718___nosniff___HTMLTAG_719__HTMLTAG_720___反 MIME 嗅聞____HTMLTAG_721__HTMLTAG_720___反 MIME 嗅聞____HTMLTAG_721__HTMLTAG_722______
___HTMLTAG_723__HTMLTAG_724___X-XSS 保護___HTMLTAG_725__HTMLTAG_726___1；模式=阻止___HTMLTAG_727__HTMLTAG_728___XSS過濾器___HTMLTAG_729__HTMLTAG_730______
___HTMLTAG_731__HTMLTAG_732___嚴格傳輸安全___HTMLTAG_733__HTMLTAG_734___max-age=31536000___HTMLTAG_735__HTMLTAG_736___必需的 HTTPS___HTMLTAG_73771TAG_7373ML
___HTMLTAG_739__HTMLTAG_740___引用者策略___HTMLTAG_741__HTMLTAG_742___無引用者___HTMLTAG_743__HTMLTAG_744___控制引用者標頭____HTMLTAG_745__HTMLTAG_746___
</tbody>
</table>

___HTMLTAG_749__HTMLTAG_750___暴力偵測：___HTMLTAG_751__HTMLTAG_752___
<ul>
___HTMLTAG_754__HTMLTAG_755__HTMLTAG_756___已啟用</strong>：開啟（啟用反暴力破解）___HTMLTAG_758__HTMLTAG_759___
___HTMLTAG_760__HTMLTAG_761__HTMLTAG_762___永久鎖定</strong>：關閉（時間後自動解鎖）___HTMLTAG_764__HTMLTAG_765___
___HTMLTAG_766__HTMLTAG_767__HTMLTAG_768___最多登入失敗次數</strong>：5（5次登入失敗後將被鎖定）___HTMLTAG_770__HTMLTAG_771___
___HTMLTAG_772__HTMLTAG_773__HTMLTAG_774___等待增量</strong>：60秒（增量等待時間）____HTMLTAG_776__HTMLTAG_777___
___HTMLTAG_778__HTMLTAG_779__HTMLTAG_780___最長等待時間</strong>：900秒（最長等待時間15分鐘）___HTMLTAG_782__HTMLTAG_783___
___HTMLTAG_784__HTMLTAG_785__HTMLTAG_786___快速登入檢查</strong>：1000毫秒（偵測到登入速度太快）___HTMLTAG_788__HTMLTAG_789___
</ul>

___HTMLTAG_791__HTMLTAG_792___4。管理 CLI (kcadm.sh)___HTMLTAG_793__HTMLTAG_794___

<p>Keycloak 提供 <strong>Admin CLI</strong> (<code>kcadm.sh</code>) — 一個命令列工具，用於在不存取管理控制台的情況下管理 Keycloak.___HTMLTAG800___

___HTMLTAG_801__HTMLTAG_802___4.1 設定憑證___HTMLTAG_803__HTMLTAG_804___
<p>在使用管理CLI之前，您需要登入：</p>
___預編碼_7___

___HTMLTAG_807__HTMLTAG_808___安全說明：</strong> 在生產中，使用 <code>--client</code> 和 <code>--secret</code> 直接在密碼行命令上使用用戶名命令。 </p>

___HTMLTAG_815__HTMLTAG_816___4.2 使用 CLI 進行領域管理___HTMLTAG_817__HTMLTAG_818___

___HTMLTAG_819__HTMLTAG_820___建立新領域：___HTMLTAG_821__HTMLTAG_822___
___預編碼_8______HTMLTAG_823__HTMLTAG_824___查看領域清單：___HTMLTAG_825__HTMLTAG_826___
___預編碼_9___

___HTMLTAG_827__HTMLTAG_828___查看詳細領域：___HTMLTAG_829__HTMLTAG_830___
___預編碼_10___

___HTMLTAG_831__HTMLTAG_832___更新領域：___HTMLTAG_833__HTMLTAG_834___
<pre><code>bin/kcadm.sh update realms/my-company \
  -s displayName="My Company Production" \
  -s sslRequired=all \
  -s bruteForceProtected=true \
  -s failureFactor=5</code></pre>

___HTMLTAG_835__HTMLTAG_836___刪除領域：___HTMLTAG_837__HTMLTAG_838___
<pre><code>bin/kcadm.sh delete realms/my-company</code></pre>

___HTMLTAG_839__HTMLTAG_840___4.3 使用 CLI 設定領域設定___HTMLTAG_841__HTMLTAG_842___

___HTMLTAG_843__HTMLTAG_844___登入設定：___HTMLTAG_845__HTMLTAG_846___
<pre><code>bin/kcadm.sh update realms/my-company \
  -s registrationAllowed=true \
  -s resetPasswordAllowed=true \
  -s rememberMe=true \
  -s verifyEmail=true \
  -s loginWithEmailAllowed=true \
  -s duplicateEmailsAllowed=false</code></pre>

___HTMLTAG_847__HTMLTAG_848___設定令牌設定：___HTMLTAG_849__HTMLTAG_850___
<pre><code>bin/kcadm.sh update realms/my-company \
  -s accessTokenLifespan=300 \
  -s ssoSessionIdleTimeout=1800 \
  -s ssoSessionMaxLifespan=36000 \
  -s revokeRefreshToken=true \
  -s refreshTokenMaxReuse=0</code></pre>

___HTMLTAG_851__HTMLTAG_852___SMTP 設定電子郵件：___HTMLTAG_853__HTMLTAG_854___
<pre><code>bin/kcadm.sh update realms/my-company \
  -s 'smtpServer={"host":"smtp.gmail.com","port":"587","from":"noreply@mycompany.com","fromDisplayName":"My Company","starttls":"true","auth":"true","user":"your-email@gmail.com","password":"app-password"}'</code></pre>

___HTMLTAG_855__HTMLTAG_856___匯出領域設定：___HTMLTAG_857__HTMLTAG_858___
<pre><code># Export realm sang file JSON
bin/kcadm.sh get realms/my-company &gt; my-company-realm.json</code></pre>

___HTMLTAG_859__HTMLTAG_860___5。管理 REST API___HTMLTAG_861__HTMLTAG_862___

<p>Keycloak 提供 <strong>Admin REST API</strong> 允許透過 HTTP 請求進行全面管理 - 適用於自動化、CI/CD 以及與其他系統的整合。 </p>

___HTMLTAG_867__HTMLTAG_868___5.1 取得存取權杖___HTMLTAG_869__HTMLTAG_870___
<p>在呼叫API之前，您需要從主領域取得存取權杖：</p>
<pre><code># Lấy access token bằng admin credentials
ACCESS_TOKEN=$(curl -s -X POST \
  "http://localhost:8080/realms/master/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=admin" \
  -d "password=admin" \
  -d "grant_type=password" \
  -d "client_id=admin-cli" | jq -r '.access_token')

echo $ACCESS_TOKEN</code></pre>

___HTMLTAG_873__HTMLTAG_874___5.2 使用 API 進行領域管理___HTMLTAG_875__HTMLTAG_876___

___HTMLTAG_877__HTMLTAG_878___取得領域清單：___HTMLTAG_879__HTMLTAG_880___
<pre><code>curl -s -X GET \
  "http://localhost:8080/admin/realms" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" | jq '.[].realm'</code></pre>

___HTMLTAG_881__HTMLTAG_882___建立新領域：___HTMLTAG_883__HTMLTAG_884___
<pre><code>curl -s -X POST \
  "http://localhost:8080/admin/realms" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "realm": "my-company",
    "enabled": true,
    "displayName": "My Company",
    "sslRequired": "external",
    "registrationAllowed": false,
    "loginWithEmailAllowed": true,
    "resetPasswordAllowed": true,
    "bruteForceProtected": true,
    "failureFactor": 5
  }'</code></pre>

___HTMLTAG_885__HTMLTAG_886___取得領域詳細資料：___HTMLTAG_887__HTMLTAG_888___
___預編碼_20___

___HTMLTAG_889__HTMLTAG_890___更新領域：___HTMLTAG_891__HTMLTAG_892___
<pre><code>curl -s -X PUT \
  "http://localhost:8080/admin/realms/my-company" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "displayName": "My Company Updated",
    "sslRequired": "all"
  }'</code></pre>

___HTMLTAG_893__HTMLTAG_894___刪除領域：___HTMLTAG_895__HTMLTAG_896___
<pre><code>curl -s -X DELETE \
  "http://localhost:8080/admin/realms/my-company" \
  -H "Authorization: Bearer $ACCESS_TOKEN"</code></pre>___HTMLTAG_897__HTMLTAG_898___5.3 重要的 API 端點___HTMLTAG_899__HTMLTAG_900___
<table>
<thead>
___HTMLTAG_903__HTMLTAG_904___端點____HTMLTAG_905__HTMLTAG_906___方法___HTMLTAG_907__HTMLTAG_908___說明____HTMLTAG_909__HTMLTAG_910___
</thead>
<tbody>
___HTMLTAG_913__HTMLTAG_914___/admin/realms___HTMLTAG_915__HTMLTAG_916___GET___HTMLTAG_917__HTMLTAG_918___領域清單____HTMLTAG_919__HTMLTAG_920___
___HTMLTAG_921__HTMLTAG_922___/admin/realms___HTMLTAG_923__HTMLTAG_924___POST___HTMLTAG_925__HTMLTAG_926___建立新領域____HTMLTAG_927__HTMLTAG_928___
___HTMLTAG_929__HTMLTAG_930___/admin/realms/{領域}___HTMLTAG_931__HTMLTAG_932___GET___HTMLTAG_933__HTMLTAG_934___詳細資料領域___HTMLTAG_935__HTMLTAG_9361領域___
___HTMLTAG_937__HTMLTAG_938___/admin/realms/{領域}___HTMLTAG_939__HTMLTAG_940___PUT___HTMLTAG_941__HTMLTAG_942___更新領域___HTMLTAG_943__HTMLTAG_944_____
___HTMLTAG_945__HTMLTAG_946___/admin/realms/{領域}___HTMLTAG_947__HTMLTAG_948___刪除___HTMLTAG_949__HTMLTAG_950___刪除領域___HTMLTAG_951__HTMLTAG_952___HTMLTAG_951__HTMLTAG_952___
___HTMLTAG_953__HTMLTAG_954___/admin/realms/{realm}/users___HTMLTAG_955__HTMLTAG_956___GET____HTMLTAG_957__HTMLTAG_958___使用者清單____HTMLTAG_959__HTMLTAG____
___HTMLTAG_961__HTMLTAG_962___/admin/realms/{realm}/users___HTMLTAG_963__HTMLTAG_964___POST____HTMLTAG_965__HTMLTAG_966___建立使用者____HTMLTAG___HTMLTAG_965__HTMLTAG_966___建立使用者____HTMLTAG_96768
___HTMLTAG_969__HTMLTAG_970___/admin/realms/{realm}/clients___HTMLTAG_971__HTMLTAG_972___GET____HTMLTAG_973__HTMLTAG_974___客戶清單____HTMLTAG_HT97576
___HTMLTAG_977__HTMLTAG_978___/admin/realms/{realm}/roles___HTMLTAG_979__HTMLTAG_980___GET____HTMLTAG_981__HTMLTAG_982___領域角色清單____HTMLTAG_9831HTML
___HTMLTAG_985__HTMLTAG_986___/admin/realms/{realm}/groups___HTMLTAG_987__HTMLTAG_988___GET____HTMLTAG_989__HTMLTAG_990___群組清單____HTMLTAG_HTMLTAG_989__HTMLTAG_990___群組清單____HTMLTAG_991HTMLTAG____
___HTMLTAG_993__HTMLTAG_994___/admin/realms/{realm}/events____HTMLTAG_995__HTMLTAG_996___GET____HTMLTAG_997__HTMLTAG_998___事件日誌記錄___
</tbody>
</table>

___HTMLTAG_1003__HTMLTAG_1004___5.4 使用郵差___HTMLTAG_1005__HTMLTAG_1006___
<p>Keycloak 為管理 REST API 提供 OpenAPI 規格。您可以匯入 Postman 或 Swagger UI 以輕鬆探索和測試 API：</p>
<pre><code># OpenAPI spec URL
http://localhost:8080/admin/realms/{realm}/.well-known/openid-configuration</code></pre>

___HTMLTAG_1009__HTMLTAG_1010___6。練習___HTMLTAG_1011__HTMLTAG_1012___

<p>執行以下練習來鞏固您的知識：</p><ol>
___HTMLTAG_1016__HTMLTAG_1017__HTMLTAG_1018___透過管理控制台建立領域「開發公司」</strong>，設定為：</p>
<ul>
<li>顯示名稱：「開發公司」</li>
<li>使用電子郵件登入：ON</li>
<li>用戶註冊：ON</li>
<li>忘記密碼：ON</li>
<li>驗證電子郵件：ON</li>
<li>記得我：ON</li>
</ul>
</li>
___HTMLTAG_1036__HTMLTAG_1037__HTMLTAG_1038___暴力偵測配置</strong>用於新建立的領域：</p>
<ul>
<li>最多登入失敗次數：3</li>
<li>等待增量：120 秒</li>
<li>最長等待時間：600 秒</li>
</ul>
</li>
___HTMLTAG_1050__HTMLTAG_1051__HTMLTAG_1052___使用 kcadm.sh_</strong> 建立具有類似配置的領域「staging-company」____HTMLTAG_1054__HTMLTAG_1055___
___HTMLTAG_1056__HTMLTAG_1057__HTMLTAG_1058___使用管理 REST API</strong> (curl) 建立領域「測試公司」並透過取得領域清單進行驗證____HTMLTAG_1060__HTMLTAG_1061___
___HTMLTAG_1062__HTMLTAG_1063__HTMLTAG_1064___將</strong>領域「開發公司」匯出到JSON並使用不同的名稱重新導入____HTMLTAG_1066__HTMLTAG_1067___
</ol>

___HTMLTAG_1069__HTMLTAG_1070___7。摘要___HTMLTAG_1071__HTMLTAG_1072___

<p>在本課中，您學習了：</p>
<ul>
___HTMLTAG_1076__HTMLTAG_1077___如何存取和使用<strong>管理控制台___HTMLTAG_1079__HTMLTAG_1080__HTMLTAG_1081___
___HTMLTAG_1082__HTMLTAG_1083___透過多種方法建立第一個<strong>管理員使用者</strong>____HTMLTAG_1086__HTMLTAG_1087___
___HTMLTAG_1088__HTMLTAG_1089___建立並設定<strong>Realm</strong> — Keycloak中的主要管理單元___HTMLTAG_1092__HTMLTAG_1093___
___HTMLTAG_1094__HTMLTAG_1095___了解重要的<strong>領域設定</strong>：常規、登入、電子郵件、主題、本地化、金鑰、令牌、安全防禦__HTMLTAG_1098__HTMLTAG_1099___
___HTMLTAG_1100__HTMLTAG_1101___使用 <strong>管理 CLI</strong> (kcadm.sh) 透過命令列管理____HTMLTAG_1104__HTMLTAG_1105___
___HTMLTAG_1106__HTMLTAG_1107___使用 <strong>管理 REST API</strong> 自動執行管理___HTMLTAG_1110__HTMLTAG_1111___
</ul>

<p>下一篇文章將提供關於<strong>在Keycloak中管理使用者、群組和使用者個人資料</strong>的詳細說明.</p>