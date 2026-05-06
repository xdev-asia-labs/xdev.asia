---
id: 019d8b30-b110-7001-c001-e0c5f8100110
title: 第 10 課：身分驗證流程 - 自訂身分驗證流程
slug: bai-10-authentication-flows-tuy-chinh-luong-xac-thuc
description: 了解 Keycloak 中的身分驗證流程、瀏覽器流程、直接授權流程、註冊流程、重設憑證流程、第一個代理登入流程。建立自訂流程、新增執行和子流程、條件驗證器（條件 - 執行的子流程、條件 - 用戶端範圍）、逐步驗證、ACR 到驗證等級 (LoA) 對應和會話限制。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 10
section_title: 第 3 部分：身份驗證、MFA 和身份代理
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9250" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9250)"/>

  <!-- Decorations -->
  <g>
    <circle cx="645" cy="185" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="690" cy="150" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="735" cy="115" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="780" cy="80" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="825" cy="45" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fb923c" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fb923c" opacity="0.15"/>
    <line x1="600" y1="235" x2="1100" y2="315" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="265" x2="1050" y2="335" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1010.9807621135332,170 1010.9807621135332,200 985,215 959.0192378864668,200 959.0192378864668,170 985,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 10 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 10 課：驗證流程 - 自訂</tspan>
      <tspan x="60" dy="42">驗證流程</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：驗證、MFA 和身分代理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。驗證流程 — 概述___HTMLTAG_69__HTMLTAG_70___

Keycloak 中的 <p> 驗證流程是使用者在登入、註冊或執行安全性操作時必須執行的 <strong> 驗證步驟序列__HTMLTAG_73___。每個流程由有序的 <strong> 執行 </strong> （驗證器）組成，並且可以透過 <strong> 子流程 </strong>.</p> 嵌套

<p>要檢視和管理流程，請前往 <strong>管理控制台 → 驗證 → 串流</strong>.</p>

___HTMLTAG_83__HTMLTAG_84___1.1 內建驗證流程___HTMLTAG_85__HTMLTAG_86___

<p>Keycloak 提供預設流程：</p><table>
<thead>
___HTMLTAG_91__HTMLTAG_92___流程___HTMLTAG_93__HTMLTAG_94___說明____HTMLTAG_95__HTMLTAG_96___何時觸發____HTMLTAG_97__HTMLTAG_98___
</thead>
<tbody>
___HTMLTAG_101__HTMLTAG_102__HTMLTAG_103___浏览器流程___HTMLTAG_104__HTMLTAG_105__HTMLTAG_106___浏览器登录流程___HTMLTAG_107__HTMLTAG_108___用户首次访问应用程序或会话过期___HTMLTAG_109__HTMLTAG_110___
___HTMLTAG_111__HTMLTAG_112__HTMLTAG_113___直接授權流程___HTMLTAG_114__HTMLTAG_115__HTMLTAG_116___使用使用者名稱/密碼（資源擁有者密碼）進行直接驗證______HTMLTAG_117__HTMLTAGant_181860 _117__HT呼叫___HTMLTAG_119__HTMLTAG_120___
___HTMLTAG_121__HTMLTAG_122__HTMLTAG_123___註冊流程___HTMLTAG_124__HTMLTAG_125__HTMLTAG_126___新帳戶註冊流程___HTMLTAG_127__HTMLTAG_128126___新帳戶註冊流程___HTMLTAG_127__HTMLTAG_128126___新帳戶註冊流程___HTMLTAG_127__HT__MLTAG_128___1
___HTMLTAG_131__HTMLTAG_132__HTMLTAG_133___重設憑證流程___HTMLTAG_134__HTMLTAG_135__HTMLTAG_136___重設密碼流程___HTMLTAG_137__HTMLTAG_138136___重設密碼流程___HTMLTAG_137__HTMLTAG_138___使用者點選「
___HTMLTAG_141__HTMLTAG_142__HTMLTAG_143___首次經紀商登入流程___HTMLTAG_144__HTMLTAG_145__HTMLTAG_146___透過身分識別提供者處理首次登入的流程____HTMLTAG_1477HTMLTAG_14882158通過透過識別
___HTMLTAG_151__HTMLTAG_152__HTMLTAG_153___Docker 驗證流程___HTMLTAG_154__HTMLTAG_155__HTMLTAG_156___Docker 註冊表驗證____HTMLTAG_157__HTMLTAGcker_158___DoDocker客戶端拉/推映像___HTMLTAG_159__HTMLTAG_160___
___HTMLTAG_161__HTMLTAG_162__HTMLTAG_163___HTTP 質詢流程____HTMLTAG_164__HTMLTAG_165__HTMLTAG_166___透過 HTTP標頭進行驗證____HTMLTAG_167__HTMLTAG_168___非瀏覽器用戶端（Kerberos、X.509）___HTMLTAG_169__HTMLTAG_170___
</tbody>
</table>

___HTMLTAG_173__HTMLTAG_174___1.2 流類型___HTMLTAG_175__HTMLTAG_176___

<p>每個流可以包含以下類型的元素：</p>

<table>
<thead>
___HTMLTAG_181__HTMLTAG_182___類型___HTMLTAG_183__HTMLTAG_184___說明___HTMLTAG_185__HTMLTAG_186___
</thead>
<tbody>
___HTMLTAG_189__HTMLTAG_190__HTMLTAG_191____身份驗證器____HTMLTAG_192__HTMLTAG_193__HTMLTAG_194___特定身份驗證步驟（例如，使用者名稱密碼表單）_</td>__
___HTMLTAG_197__HTMLTAG_198__HTMLTAG_199___子流____HTMLTAG_200__HTMLTAG_201__HTMLTAG_202____子流包含多個驗證器 - 允許建立複雜邏輯____HTMLTAG_203__HTMLTAG_20______
___HTMLTAG_205__HTMLTAG_206__HTMLTAG_207___表單___HTMLTAG_208__HTMLTAG_209__HTMLTAG_210___供使用者輸入資訊的顯示表單（使用者名稱、密碼、OTP...）____HTMLTAG_2112HTMLTAG_2112
</tbody>
</table>

___HTMLTAG_215__HTMLTAG_216___2。瀏覽器流程 — 詳細資訊___HTMLTAG_217__HTMLTAG_218___

<p>預設瀏覽器流程具有以下結構：</p>

___預編碼_0___

___HTMLTAG_221__HTMLTAG_222___運作原理：___HTMLTAG_223__HTMLTAG_224___<ol>
___HTMLTAG_226__HTMLTAG_227___Cookie</strong>：如果使用者已經有有效的會話cookie→跳過所有，登入成功</li>
___HTMLTAG_230__HTMLTAG_231___Kerberos</strong>：預設停用 - 如果啟用，請嘗試 Kerberos 票證</li>
___HTMLTAG_234__HTMLTAG_235___身分提供者重定向器</strong>：如果存在 <code>kc_idp_hint</code> → 重定向到該 IdP__HTMLTAG_239___
___HTMLTAG_240__HTMLTAG_241___表單</strong>：顯示登入表單
    <ul>
    <li>需要使用者名稱 + 密碼</li>
    <li>如果使用者已設定 OTP → 請求輸入 OTP 碼</li>
    </ul>
</li>
</ol>

___HTMLTAG_251__HTMLTAG_252___2.1 執行要求___HTMLTAG_253__HTMLTAG_254___

<p>流程中的每個執行都有一個 <strong>requirement__HTMLTAG_257___ 定義行為：</p>

<table>
<thead>
___HTMLTAG_261__HTMLTAG_262___要求___HTMLTAG_263__HTMLTAG_264___說明___HTMLTAG_265__HTMLTAG_266___何時使用____HTMLTAG_267__HTMLTAG_268___
</thead>
<tbody>
___HTMLTAG_271__HTMLTAG_272__HTMLTAG_273___必需___HTMLTAG_274__HTMLTAG_275__HTMLTAG_276___必需且成功__HTMLTAG_277__HTMLTAG_278____配置時的使用者名稱/密碼、PU​​D1792____41484445_7075_UU​​個版本。
___HTMLTAG_281__HTMLTAG_282__HTMLTAG_283___替代方案___HTMLTAG_284__HTMLTAG_285__HTMLTAG_286___成功的替代方案之一就足夠了___HTMLTAG_287__HTMLTAG_288___CookiePU​​DMLM_UU​​D287____MLTAG_288___
___HTMLTAG_291__HTMLTAG_292__HTMLTAG_293___有條件___HTMLTAG_294__HTMLTAG_295__HTMLTAG_296___子流程僅在條件為真時執行___HTMLTAG_297__HTMLTAG_298___ OTP___HTMLTAG_299__HTMLTAG_300___
___HTMLTAG_301__HTMLTAG_302__HTMLTAG_303____已停用___HTMLTAG_304__HTMLTAG_305__HTMLTAG_306____完全跳過____HTMLTAG_307__HTMLTAG_308_306____完全跳過____HTMLTAG_307__HTMLTAG_308________停用步驟而不刪除___MLTAG1________
</tbody>
</table>

___HTMLTAG_313__HTMLTAG_314___重要規則：___HTMLTAG_315__HTMLTAG_316___
<ul>
<li>如果流程中所有執行都是<strong>替代</strong>→只需要<strong>1透過____HTMLTAG_322__HTMLTAG_323___
<li>如果至少有 1 個 <strong>必需</strong> → 所有必需的都必須通過，替代項將被忽略</li>
___HTMLTAG_328__HTMLTAG_329___條件</strong>常與子流程一起使用：第一步是條件檢查器，下列步驟是驗證器__HTMLTAG_331___
</ul>

___HTMLTAG_333__HTMLTAG_334___3。建立自訂身分驗證流程___HTMLTAG_335__HTMLTAG_336___

<p>內建流程無法直接編輯。您需要 <strong> 複製 </strong> 然後自訂.</p>

___HTMLTAG_341__HTMLTAG_342___3.1 複製與編輯___HTMLTAG_343__HTMLTAG_344___<ol>
<li>轉到 <strong>驗證 → 流___HTMLTAG_348__HTMLTAG_349___
<li>選擇要複製的流程，例如 <code>瀏覽器___HTMLTAG_352__HTMLTAG_353___
<li>點選 <strong>操作 → 複製___HTMLTAG_356__HTMLTAG_357___
<li>新名稱：<code>我的自訂瀏覽器流程___HTMLTAG_360__HTMLTAG_361___
<li>新流程將出現，並且具有與原始流程相同的所有執行</li>
</ol>

___HTMLTAG_365__HTMLTAG_366___3.2 新增執行___HTMLTAG_367__HTMLTAG_368___

<p>複製後，您可以新增/刪除/重新排序執行：</p>

<ol>
<li>在自訂流程中，按一下 <strong>「新增步驟」___HTMLTAG_374__HTMLTAG_375___
<li>從清單中選擇驗證器：
    <ul>
    ___HTMLTAG_378__HTMLTAG_379___使用者名稱密碼表單</code> — 使用者名稱+密碼輸入表單</li>
    ___HTMLTAG_382__HTMLTAG_383___OTP 表單</code> — OTP 輸入表單代碼</li>
    ___HTMLTAG_386__HTMLTAG_387___Cookie</code> — 檢查會話 cookie</li>
    ___HTMLTAG_390__HTMLTAG_391___身分提供者重定向器</code> — 重定向到外部 IdP</li>
    ___HTMLTAG_394__HTMLTAG_395___拒絕存取</code> — 拒絕存取</li>
    ___HTMLTAG_398__HTMLTAG_399___允許存取</code> — 允許存取</li>
    ___HTMLTAG_402__HTMLTAG_403___使用者名稱表單</code> — 僅輸入使用者名稱（密碼分開）</li>
    ___HTMLTAG_406__HTMLTAG_407___密碼表單</code> — 僅輸入密碼</li>
    ___HTMLTAG_410__HTMLTAG_411___WebAuthn 驗證器</code> — 使用安全金鑰進行驗證</li>
    ___HTMLTAG_414__HTMLTAG_415___WebAuthn 無密碼驗證器</code> — 無密碼驗證</li>
    </ul>
</li>
<li>設定適當的要求（必需、替代、有條件、停用）</li>
</ol>

___HTMLTAG_423__HTMLTAG_424___3.3 新增子流程___HTMLTAG_425__HTMLTAG_426___

<p>子流程允許對多個執行進行分組，並建立更複雜的邏輯：</p>

___預編碼_1___

___HTMLTAG_429__HTMLTAG_430___如何新增子流：___HTMLTAG_431__HTMLTAG_432___
<ol>
<li>點選 <strong>「新增子流」___HTMLTAG_436__HTMLTAG_437___
<li>給予名稱，例如：<code>MFA 子流___HTMLTAG_440__HTMLTAG_441___
<li>設定需求：<code>有條件___HTMLTAG_444__HTMLTAG_445___
<li>將執行加入到子流程</li>
</ol>

___HTMLTAG_449__HTMLTAG_450___4。條件驗證器___HTMLTAG_451__HTMLTAG_452___

<p>條件驗證器允許 <strong> 在執行子流程之前檢查條件 </strong>。如果不符合條件 → 跳過整個子流程。 </p>

___HTMLTAG_457__HTMLTAG_458___4.1 可用條件___HTMLTAG_459__HTMLTAG_460___<table>
<thead>
___HTMLTAG_463__HTMLTAG_464___條件____HTMLTAG_465__HTMLTAG_466___說明___HTMLTAG_467__HTMLTAG_468___
</thead>
<tbody>
___HTMLTAG_471__HTMLTAG_472__HTMLTAG_473___條件 - 使用者已設定___HTMLTAG_474__HTMLTAG_475__HTMLTAG_476___使用者已設定對應的憑證（OTP、WebAuthn...）<td>使用者已設定對應的憑證（OTP、WebAuthn...）___HTMLTAGMLTAGMLHT
___HTMLTAG_479__HTMLTAG_480__HTMLTAG_481___條件 - 使用者角色___HTMLTAG_482__HTMLTAG_483__HTMLTAG_484___使用者有特定角色___HTMLTAG_485__HTMLTAG_486___
___HTMLTAG_487__HTMLTAG_488__HTMLTAG_489___條件 - 使用者屬性____HTMLTAG_490__HTMLTAG_491__HTMLTAG_492___使用者俱有具有所需值的特定屬性____HTMLTAG_493__HTMLTAG_494_____
___HTMLTAG_495__HTMLTAG_496__HTMLTAG_497___條件 - 客戶端範圍___HTMLTAG_498__HTMLTAG_499__HTMLTAG_500___包含特定範圍的請求（例如：<code>acr_500___MLTAMLTA14U4____4____ML
___HTMLTAG_505__HTMLTAG_506__HTMLTAG_507___條件 - 子流程已執行___HTMLTAG_508__HTMLTAG_509__HTMLTAG_510___子流程之前已成功執行____HTMLTAG_511__HTMLTAG_512___
</tbody>
</table>

___HTMLTAG_515__HTMLTAG_516___4.2 範例：根據角色的條件 OTP___HTMLTAG_517__HTMLTAG_518___

<p>僅為具有角色 <code>admin</code>:</p> 的使用者請求 OTP

___預編碼_2___

___HTMLTAG_523__HTMLTAG_524___設定條件 - 使用者角色：___HTMLTAG_525__HTMLTAG_526___
<ol>
<li>新增 <code>條件 - 使用者角色_</code>到子流</li>
<li>點選條件旁邊的 ⚙️（設定）圖示</li>
<li>輸入：
    <ul>
    ___HTMLTAG_536__HTMLTAG_537___別名</strong>：<code>檢查管理員角色___HTMLTAG_540__HTMLTAG_541___
    ___HTMLTAG_542__HTMLTAG_543___使用者角色</strong>：<code>admin</code>（或 <code>realm-management.manage-users___HTMLTATAG____8___
    ___HTMLTAG_550__HTMLTAG_551___否定輸出</strong>：<code>關閉</code>（如果您想套用於沒有角色的用戶，則開啟）</li>
    </ul>
</li>
</ol>

___HTMLTAG_559__HTMLTAG_560___4.3 條件 - 客戶端範圍___HTMLTAG_561__HTMLTAG_562___

<p>當客戶要求特殊範圍時需要 MFA：</p>

___預編碼_3___

___預編碼_4___

___HTMLTAG_565__HTMLTAG_566___5。升級驗證和驗證等級 (LoA)___HTMLTAG_567__HTMLTAG_568___

<p>逐步驗證允許 <strong>敏感操作需要更高層級的身份驗證__HTMLTAG_571___，而不強制使用者完全重新進行身份驗證。 </p>

___HTMLTAG_573__HTMLTAG_574___5.1 ACR 和發言者映射___HTMLTAG_575__HTMLTAG_576___

___HTMLTAG_577__HTMLTAG_578___ACR（驗證上下文類別參考）</strong> 是 ID 令牌中的聲明，指示已執行 <strong> 驗證等級__HTMLTAG_581___。 Keycloak 將 ACR 值對應到 <strong> 驗證等級 (LoA)</strong> — 整數.</p>___HTMLTAG_585__HTMLTAG_586___ACR 到揚聲器映射配置：___HTMLTAG_587__HTMLTAG_588___
<ol>
<li>轉到 <strong>驗證 → 流___HTMLTAG_592__HTMLTAG_593___
<li>開啟正在使用的流程（例如：瀏覽器流程）</li>
<li>每個子流都可以分配一個 <strong>LoA 等級___HTMLTAG_598__HTMLTAG_599___
</ol>

___預編碼_5___

___HTMLTAG_601__HTMLTAG_602___預設 LoA 映射（驗證 → 流 → 齒輪圖示）：___HTMLTAG_603__HTMLTAG_604___

___預編碼_6___

___HTMLTAG_605__HTMLTAG_606___5.2 請求升級驗證___HTMLTAG_607__HTMLTAG_608___

<p>客戶端透過 <code>acr_values</code> 或 <code>claims</code> 參數請求特定 LoA：</p>

___預編碼_7___

___HTMLTAG_615__HTMLTAG_616___令牌 ID 的結果：___HTMLTAG_617__HTMLTAG_618___

___預編碼_8___

___HTMLTAG_619__HTMLTAG_620___5.3 檢查應用程式中的揚聲器___HTMLTAG_621__HTMLTAG_622___

___預編碼_9___

___HTMLTAG_623__HTMLTAG_624___6。直接撥款流___HTMLTAG_625__HTMLTAG_626___

<p>直接授權流程處理 <code>grant_type=password</code> — 無需透過瀏覽器直接驗證：</p>

___預編碼_10___

<pre><code class="language-bash"># Ví dụ: Direct Grant request
curl -X POST \
  https://keycloak.example.com/realms/myrealm/protocol/openid-connect/token \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=password' \
  -d 'client_id=my-backend' \
  -d 'client_secret=my-secret' \
  -d 'username=user@example.com' \
  -d 'password=user-password' \
  -d 'totp=123456'    # Nếu user đã setup OTP</code></pre>

<blockquote>
<p>⚠️ <strong>注意</strong>：不建議在生產中直接授予（資源所有者密碼憑證）。應改用授權代碼流 + PKCE。 </p>
</blockquote>

___HTMLTAG_637__HTMLTAG_638___7。註冊流程___HTMLTAG_639__HTMLTAG_640___

<p>註冊流程控制新帳號註冊流程：</p>

<pre><code>Registration Flow (mặc định)
└── Registration Form (Required)
    ├── Registration User Profile (Required)  → Nhập thông tin profile
    ├── Password Validation (Required)        → Nhập + confirm password
    └── Recaptcha (Disabled)                  → reCAPTCHA (tắt mặc định)</code></pre>

___HTMLTAG_643__HTMLTAG_644___7.1 啟用註冊___HTMLTAG_645__HTMLTAG_646___

<ol>
<li>前往 <strong>領域設定 → 登入___HTMLTAG_650__HTMLTAG_651___
<li>在 <strong>用戶註冊</strong>：在</li>
<li>可選：啟用 <strong>電子郵件作為使用者名稱</strong>，以便使用者可以使用電子郵件作為使用者名稱</li>
</ol>

___HTMLTAG_661__HTMLTAG_662___7.2 自訂註冊流程___HTMLTAG_663__HTMLTAG_664___

<pre><code>My Registration Flow
└── Registration Form (Required)
    ├── Registration User Profile (Required)
    ├── Password Validation (Required)
    ├── Recaptcha (Required)                → Bật reCAPTCHA
    └── Terms and Conditions (Required)     → Yêu cầu đồng ý điều khoản</code></pre>

___HTMLTAG_665__HTMLTAG_666___ReCAPTCHA 設定：___HTMLTAG_667__HTMLTAG_668___
<ol>
<li>透過 ___HTMLTAG_671__URL_2___></li> 註冊 Google reCAPTCHA v3
<li>在流程中，點選 <code>Recaptcha___HTMLTAG_675__HTMLTAG_676___ 旁邊的 ⚙️
<li>輸入：
    <ul>
    ___HTMLTAG_679__HTMLTAG_680___驗證碼網站金鑰</strong>：<code>您的網站金鑰___HTMLTAG_683__HTMLTAG_684___
    ___HTMLTAG_685__HTMLTAG_686___驗證碼秘密</strong>：<code>您的金鑰___HTMLTAG_689__HTMLTAG_690___
    ___HTMLTAG_691__HTMLTAG_692___使用 Recaptcha.net</strong>：開啟（如果中國需要）</li>
    </ul>
</li>
</ol>

___HTMLTAG_698__HTMLTAG_699___8。重設憑證流程___HTMLTAG_700__HTMLTAG_701___

<p>流程處理密碼重設：</p>

<pre><code>Reset Credentials Flow (mặc định)
├── Choose User (Required)                → User nhập username/email
├── Send Reset Email (Required)           → Gửi email reset link
├── Reset Password (Required)             → Form nhập mật khẩu mới
└── Reset - Conditional OTP (Conditional) → OTP nếu đã cấu hình
    ├── Condition - User Configured (Required)
    └── Reset OTP (Required)</code></pre>

___HTMLTAG_704__HTMLTAG_705___9。會話限制___HTMLTAG_706__HTMLTAG_707___<p>Keycloak 允許限制每個使用者的並發會話數。 </p>

___HTMLTAG_710__HTMLTAG_711___9.1 在驗證流程中設定會話限制___HTMLTAG_712__HTMLTAG_713___

<p>將 <code>使用者會話限制</code> 驗證器新增至流程：</p>

<pre><code>My Custom Browser Flow
├── Cookie (Alternative)
└── Forms (Alternative)
    ├── Username Password Form (Required)
    ├── Browser - Conditional OTP (Conditional)
    │   ├── Condition - User Configured (Required)
    │   └── OTP Form (Required)
    └── User Session Limits (Required)</code></pre>

___HTMLTAG_718__HTMLTAG_719___設定使用者會話限制：___HTMLTAG_720__HTMLTAG_721___
<ol>
<li>點選<code>使用者會話限制___HTMLTAG_725__HTMLTAG_726___旁邊的⚙️
<li>配置：
    <ul>
    ___HTMLTAG_729__HTMLTAG_730___最大領域會話數</strong>：領域中的最大會話總數（例如：<code>3</code>）</li>
    ___HTMLTAG_735__HTMLTAG_736___最大客戶端會話數</strong>：1 個客戶端的最大會話數（例如：<code>1</code>）</li>
    ___HTMLTAG_741__HTMLTAG_742___達到限制時的行為</strong>：
        <ul>
        ___HTMLTAG_745__HTMLTAG_746___拒絕新會話</code> — 拒絕新登入</li>
        ___HTMLTAG_749__HTMLTAG_750___終止最舊的會話</code> — 終止最舊的會話</li>
        </ul>
    </li>
    ___HTMLTAG_755__HTMLTAG_756___錯誤訊息</strong>：被拒絕時的自訂訊息（例如：<code>「您已達到登入工作階段限制」</code>）</li>
    </ul>
</li>
</ol>

___HTMLTAG_764__HTMLTAG_765___10。將流綁定到領域和客戶端___HTMLTAG_766__HTMLTAG_767___

___HTMLTAG_768__HTMLTAG_769___10.1 領域綁定流程___HTMLTAG_770__HTMLTAG_771___

<p>建立自訂流後，將其綁定為領域的預設流：</p>

<ol>
<li>轉到 <strong>驗證 → 流___HTMLTAG_777__HTMLTAG_778___
<li>點選選項卡 <strong>「綁定」</strong>（或 <strong>所需操作</strong>）</li>
<li>為每個綁定選擇流程：
    <ul>
    ___HTMLTAG_787__HTMLTAG_788___瀏覽器流程</strong>：<code>我的自訂瀏覽器流程___HTMLTAG_791__HTMLTAG_792___
    ___HTMLTAG_793__HTMLTAG_794___直接撥款流程_</strong>：<code>直接撥款___HTMLTAG_797__HTMLTAG_798___
    ___HTMLTAG_799__HTMLTAG_800___註冊流程</strong>：<code>我的註冊流程___HTMLTAG_803__HTMLTAG_804___
    ___HTMLTAG_805__HTMLTAG_806___重設憑證流程</strong>：<code>重設憑證___HTMLTAG_809__HTMLTAG_810___
    </ul>
</li>
</ol>

___HTMLTAG_814__HTMLTAG_815___10.2 特定客戶端的綁定流程___HTMLTAG_816__HTMLTAG_817___

<p>您可以覆寫每個客戶端的領域流：</p><ol>
<li>轉到 <strong>客戶端 → 選擇客戶端___HTMLTAG_823__HTMLTAG_824___
<li>選項卡 <strong>「進階」___HTMLTAG_827__HTMLTAG_828___
<li>第 <strong>「身份驗證流程覆蓋」</strong>：
    <ul>
    ___HTMLTAG_833__HTMLTAG_834___瀏覽器流程</strong>：選擇另一個流程領域預設</li>
    ___HTMLTAG_837__HTMLTAG_838___直接資助流程</strong>：選擇另一個流程</li>
    </ul>
</li>
</ol>

___HTMLTAG_844__HTMLTAG_845___11。使用客戶端策略進行動態流選擇___HTMLTAG_846__HTMLTAG_847___

<p>從 Keycloak 25+ 開始，您可以使用 <strong>客戶端策略</strong> 根據客戶端屬性自動選擇驗證流程。 </p>

___HTMLTAG_852__HTMLTAG_853___11.1 建立流選擇的客戶端策略___HTMLTAG_854__HTMLTAG_855___

<ol>
<li>前往 <strong>領域設定 → 用戶端策略 → 策略___HTMLTAG_859__HTMLTAG_860___
<li>建立新政策：<code>安全客戶端 MFA 政策___HTMLTAG_863__HTMLTAG_864___
<li>新增 <strong>條件</strong>：
    <ul>
    <li>類型：<code>客戶端範圍___HTMLTAG_871__HTMLTAG_872___
    <li>範圍： <code>[“需要 MFA”]___HTMLTAG_875__HTMLTAG_876___
    </ul>
</li>
<li>新增 <strong>設定檔</strong>（來自客戶設定檔）：
    <ul>
    <li>設定檔執行器：覆寫瀏覽器流程__HTMLTAG_884___
    </ul>
</li>
</ol>

<pre><code class="language-json">// Client Policy — ví dụ export JSON
{
  "policies": [
    {
      "name": "Secure Clients MFA Policy",
      "description": "Enforce MFA for clients with mfa-required scope",
      "enabled": true,
      "conditions": [
        {
          "condition": "client-scopes",
          "configuration": {
            "scopes": ["mfa-required"],
            "type": "DEFAULT"
          }
        }
      ],
      "profiles": ["mfa-enforced-profile"]
    }
  ]
}</code></pre>

___HTMLTAG_888__HTMLTAG_889___12。匯出/匯入驗證流程___HTMLTAG_890__HTMLTAG_891___

<p>驗證流程包含在領域匯出中：</p>

<pre><code class="language-bash"># Export realm bao gồm flows
/opt/keycloak/bin/kc.sh export \
  --dir /opt/keycloak/data/export \
  --realm myrealm

# Trong file realm-export.json, flows nằm ở:
# "authenticationFlows": [...]
# "authenticationExecutions": [...]</code></pre>

___HTMLTAG_894__HTMLTAG_895___透過管理 REST API 部分導入：___HTMLTAG_896__HTMLTAG_897___

<pre><code class="language-bash"># Lấy danh sách flows
curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/authentication/flows" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq '.[].alias'

# Export 1 flow cụ thể
FLOW_ID=$(curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/authentication/flows" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | \
  jq -r '.[] | select(.alias=="My Custom Browser Flow") | .id')

curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/authentication/flows/$FLOW_ID/executions" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq .</code></pre>

___HTMLTAG_898__HTMLTAG_899___13。摘要___HTMLTAG_900__HTMLTAG_901___<table>
<thead>
___HTMLTAG_904__HTMLTAG_905___概念____HTMLTAG_906__HTMLTAG_907___說明____HTMLTAG_908__HTMLTAG_909___
</thead>
<tbody>
___HTMLTAG_912__HTMLTAG_913__HTMLTAG_914___驗證流程___HTMLTAG_915__HTMLTAG_916__HTMLTAG_917___驗證步驟序列 - 可以透過子流程嵌套____HTMLTAG_918__HTMLTAG_919___
___HTMLTAG_920__HTMLTAG_921__HTMLTAG_922___執行要求___HTMLTAG_923__HTMLTAG_924__HTMLTAG_925___必需、替代、有條件、停用___HTMLTAG_926__HTMLTAG_927___
___HTMLTAG_928__HTMLTAG_929__HTMLTAG_930___條件驗證器___HTMLTAG_931__HTMLTAG_932__HTMLTAG_933___在執行子流程之前檢查條件___HTMLTAG_934__HTMLTAG_933___在執行子流程之前檢查條件___HTMLTAG_934__HTMLTAG_935___
___HTMLTAG_936__HTMLTAG_937__HTMLTAG_938___升級身份驗證___HTMLTAG_939__HTMLTAG_940__HTMLTAG_941___敏感操作需要更高的發言者__HTMLTAG_942__HTMLTAG_943___
___HTMLTAG_944__HTMLTAG_945__HTMLTAG_946___ACR 到講者映射___HTMLTAG_947__HTMLTAG_948__HTMLTAG_949___將 ACR 值對應___
___HTMLTAG_952__HTMLTAG_953__HTMLTAG_954___會話限制___HTMLTAG_955__HTMLTAG_956__HTMLTAG_957___每個使用者的同時會話限制____HTMLTAG_958__HTMLTAG_957___每個使用者的同時會話限制____HTMLTAG_958__HTMLTAG_959___
___HTMLTAG_960__HTMLTAG_961__HTMLTAG_962___流綁定___HTMLTAG_963__HTMLTAG_964__HTMLTAG_965___在領域層級或每個客戶端覆蓋綁定流____HTMLTAG_966__HTMLTAG_967___
</tbody>
</table>