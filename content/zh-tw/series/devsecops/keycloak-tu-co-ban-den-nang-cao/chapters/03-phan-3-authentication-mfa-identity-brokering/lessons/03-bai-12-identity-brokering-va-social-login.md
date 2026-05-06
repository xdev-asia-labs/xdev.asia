---
id: 019d8b30-b112-7001-c001-e0c5f8100112
title: 第 12 課：身份代理和社交登錄
slug: bai-12-identity-brokering-va-social-login
description: 身分提供者概念、社群登入設定（Google、Facebook、GitHub、Apple、Microsoft）、OpenID Connect 身分提供者、SAML 身分提供者、OAuth v2 提供者、Kubernetes 身分提供者。首次登入流程、帳戶連結、身分提供者對應器、同步模式（匯入、強制、舊版）、用戶端建議的 IdP (kc_idp_hint) 和 IdP 登出流程。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 12
section_title: 第 3 部分：身份驗證、MFA 和身份代理
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8909" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8909)"/>

  <!-- Decorations -->
  <g>
    <circle cx="943" cy="239" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="786" cy="222" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="629" cy="205" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="972" cy="188" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="815" cy="171" r="32" fill="#c084fc" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#c084fc" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#c084fc" opacity="0.15"/>
    <line x1="600" y1="89" x2="1100" y2="169" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="119" x2="1050" y2="189" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1027.1051177665154,167 1027.1051177665154,211 989,233 950.8948822334847,211 950.8948822334847,167 989,145" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 12 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 12 課：身分識別代理程式與社群登入</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：驗證、MFA 和身分代理__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_65__HTMLTAG_66___1。身分經紀 — 概念___HTMLTAG_67__HTMLTAG_68___

<p>身分識別代理程式允許 Keycloak 充當應用程式和外部身分提供者 (IdP) 之間的 <strong> 驗證中介__HTMLTAG_71___。它們不是每個應用程式都與自己的 Google、Facebook、SAML IdP 集成，而是透過 Keycloak 進行連接。 </p>

___預編碼_0___

___HTMLTAG_73__HTMLTAG_74___優點：___HTMLTAG_75__HTMLTAG_76___
<ul>
___HTMLTAG_78__HTMLTAG_79___集中式</strong>：在 Keycloak 上設定 IdP 一次，所有應用程式都可以使用__HTMLTAG_81___
___HTMLTAG_82__HTMLTAG_83___協定橋接</strong>：應用程式使用 OIDC，外部 IdP 使用 SAML → Keycloak 橋接</li>
___HTMLTAG_86__HTMLTAG_87___使用者管理</strong>：Keycloak集中管理，包含來自外部IdP的使用者</li>
___HTMLTAG_90__HTMLTAG_91___帳號連結</strong>：將多個外部身分連結到 1 個 Keycloak 帳號</li>
</ul>

___HTMLTAG_95__HTMLTAG_96___2。社群登入配置___HTMLTAG_97__HTMLTAG_98___

___HTMLTAG_99__HTMLTAG_100___2.1 常規身分提供者設定___HTMLTAG_101__HTMLTAG_102___

<p>新增任何 IdP 時，常規設定包括：</p><table>
<thead>
___HTMLTAG_107__HTMLTAG_108___設定___HTMLTAG_109__HTMLTAG_110___說明____HTMLTAG_111__HTMLTAG_112___值___HTMLTAG_113__HTMLTAG_114___
</thead>
<tbody>
___HTMLTAG_117__HTMLTAG_118__HTMLTAG_119___別名___HTMLTAG_120__HTMLTAG_121__HTMLTAG_122___Keycloak 中 IdP 的唯一識別碼___HTMLTAG_123__HTMLTAG124124124124_____ <code>facebook___HTMLTAG_128__HTMLTAG_129__HTMLTAG_130___
___HTMLTAG_131__HTMLTAG_132__HTMLTAG_133___顯示名稱____HTMLTAG_134__HTMLTAG_135__HTMLTAG_136___登入頁面上顯示的名稱____HTMLTAG_137__HT MLTAG_138__HTMLTAG_139____Google</code>、<code>登入Facebook___HTMLTAG_142__HTMLTAG_143__HTMLTAG_144___
___HTMLTAG_145__HTMLTAG_146__HTMLTAG_147___已啟用___HTMLTAG_148__HTMLTAG_149__HTMLTAG_150___啟用/停用IdP___HTMLTAG_151__HTMLTAG_152__HTMLTAG_153___開啟___HTMLTAG_154__HTMLTAG_155__HTMLTAG_156___
___HTMLTAG_157__HTMLTAG_158__HTMLTAG_159___在登入頁面隱藏___HTMLTAG_160__HTMLTAG_161__HTMLTAG_162___在登入頁面隱藏（僅供傳遞使用） kc_idp_hint)___HTMLTAG_163__HTMLTAG_164__HTMLTAG_165___關閉___HTMLTAG_166__HTMLTAG_167__HTMLTAG_168___
___HTMLTAG_169__HTMLTAG_170__HTMLTAG_171___儲存令牌____HTMLTAG_172__HTMLTAG_173__HTMLTAG_174___儲存來自外部 IdP的存取權杖___HTMLTAG_175__HTMLTAG_176__HTMLTAG_177___關閉</code>（如果需要呼叫外部，則開啟API)___HTMLTAG_179__HTMLTAG_180___
___HTMLTAG_181__HTMLTAG_182__HTMLTAG_183___儲存的令牌可讀___HTMLTAG_184__HTMLTAG_185__HTMLTAG_186___用戶可讀取的儲存令牌____HTMLTAG_187__HTMLTAG_188__HTMLTAG_189___關閉___HTMLTAG_190__HTMLTAG_191__HTMLTAG_192___
___HTMLTAG_193__HTMLTAG_194__HTMLTAG_195___信任電子郵件___HTMLTAG_196__HTMLTAG_197__HTMLTAG_198___來自 IdP 的信任電子郵件（無須重新驗證）___HTMLTAG_199__HTMLTAG_2011202020120_____ Google/微軟___HTMLTAG_203__HTMLTAG_204___
___HTMLTAG_205__HTMLTAG_206__HTMLTAG_207___僅帳戶連結___HTMLTAG_208__HTMLTAG_209__HTMLTAG_210___僅用於鏈接帳戶，不允許建立新___HTMLTAG_211__HTMLTAG_212__HTMLTAG_213___關閉___HTMLTAG_214__HTMLTAG_215__HTMLTAG_216___
___HTMLTAG_217__HTMLTAG_218__HTMLTAG_219___首次登入流程___HTMLTAG_220__HTMLTAG_221__HTMLTAG_222____流程處理首次登入___HTMLTAG_223__HTMLTAG_224__HTMLTAG_225___首次經紀商登入___HTMLTAG_226__HTMLTAG_227__HTMLTAG_228___
___HTMLTAG_229__HTMLTAG_230__HTMLTAG_231___登入後流程___HTMLTAG_232__HTMLTAG_233__HTMLTAG_234___流程在每次通過 IdP登入後執行___HTMLTAG_235__HTMLTAG_236__HTMLTAG_237___無___HTMLTAG_238__HTMLTAG_239__HTMLTAG_240___
___HTMLTAG_241__HTMLTAG_242__HTMLTAG_243___同步模式___HTMLTAG_244__HTMLTAG_245__HTMLTAG_246___同步使用者屬性____HTMLTAG_247__HTMLTAG_248__HTML TAG_249___導入</code>、<code>強制</code>，或<code>舊版___HTMLTAG_254__HTMLTAG_255__HTMLTAG_256___
</tbody>
</table>

___HTMLTAG_259__HTMLTAG_260___2.2 Google OAuth2___HTMLTAG_261__HTMLTAG_262______HTMLTAG_263__HTMLTAG_264___步驟 1：在 Google 建立 OAuth2 憑證___HTMLTAG_265__HTMLTAG_266___

<ol>
<li>前往 <strong>Google Cloud Console → API 與服務 → 憑證___HTMLTAG_270__HTMLTAG_271___
<li>點選 <strong>「建立憑證 → OAuth 用戶端 ID」___HTMLTAG_274__HTMLTAG_275___
<li>應用程式類型：<strong>Web 應用程式___HTMLTAG_278__HTMLTAG_279___
<li>名稱： <code>Keycloak 登入___HTMLTAG_282__HTMLTAG_283___
<li>授權重定向 URI：___HTMLTAG_285__URL_1___></li>
<li>複製 <strong>客戶端 ID</strong> 和 <strong>客戶端金鑰 ___HTMLTAG_291__HTMLTAG_292___
</ol>

___HTMLTAG_294__HTMLTAG_295___步驟 2：在 Keycloak 中設定___HTMLTAG_296__HTMLTAG_297___

<ol>
<li>前往 <strong>身分提供者 → 新增提供者 → Google___HTMLTAG_301__HTMLTAG_302___
<li>輸入：
    <ul>
    ___HTMLTAG_305__HTMLTAG_306___客戶端 ID</strong>：<code>123456789.apps.googleusercontent.com___HTMLTAG_309__HTMLTAG_310___
    ___HTMLTAG_311__HTMLTAG_312___客戶端金鑰</strong>：<code>GOCSPX-xxxxxxxxxxxx___HTMLTAG_315__HTMLTAG_316___
    ___HTMLTAG_317__HTMLTAG_318___預設範圍</strong>：<code>openid 個人資料電子郵件___HTMLTAG_321__HTMLTAG_322___
    ___HTMLTAG_323__HTMLTAG_324___信任電子郵件</strong>：<code>於</code> — Google 已驗證電子郵件</li>
    ___HTMLTAG_329__HTMLTAG_330___同步模式</strong>：<code>導入___HTMLTAG_333__HTMLTAG_334___
    </ul>
</li>
<li>保存</li>
</ol>

___HTMLTAG_340__HTMLTAG_341___重定向 URI 格式：___HTMLTAG_342__HTMLTAG_343___
___預編碼_1___

___HTMLTAG_344__HTMLTAG_345___2.3 Facebook___HTMLTAG_346__HTMLTAG_347___

___HTMLTAG_348__HTMLTAG_349___第 1 步：建立 Facebook 應用程式___HTMLTAG_350__HTMLTAG_351___

<ol>
<li>轉到 <strong>開發者元資料 → 我的應用程式 → 建立應用程式___HTMLTAG_355__HTMLTAG_356___
<li>應用程式類型：<strong>消費者</strong> 或 <strong>商業___HTMLTAG_361__HTMLTAG_362___
<li>新增產品 <strong>「Facebook 登入」___HTMLTAG_365__HTMLTAG_366___
<li>設定：
    <ul>
    <li>有效的 OAuth 重定向 URI：___HTMLTAG_370__URL_2___></li>
    </ul>
</li>
<li>複製 <strong>應用程式 ID</strong> 和 <strong>應用程式機密___HTMLTAG_378__HTMLTAG_379___
</ol>

___HTMLTAG_381__HTMLTAG_382___步驟 2：在 Keycloak 中設定___HTMLTAG_383__HTMLTAG_384___<ol>
<li>前往 <strong>身分提供者 → 新增提供者 → Facebook___HTMLTAG_388__HTMLTAG_389___
<li>輸入：
    <ul>
    ___HTMLTAG_392__HTMLTAG_393___客戶端 ID</strong>：套用 ID</li>
    ___HTMLTAG_396__HTMLTAG_397___客戶端金鑰</strong>：應用程式金鑰</li>
    ___HTMLTAG_400__HTMLTAG_401___預設範圍</strong>：<code>電子郵件公開_個人資料___HTMLTAG_404__HTMLTAG_405___
    ___HTMLTAG_406__HTMLTAG_407___信任電子郵件</strong>：<code>關閉</code> — Facebook 允許未經驗證的電子郵件__HTMLTAG_411___
    </ul>
</li>
</ol>

___HTMLTAG_415__HTMLTAG_416___2.4 GitHub___HTMLTAG_417__HTMLTAG_418___

___HTMLTAG_419__HTMLTAG_420___步驟 1：建立 GitHub OAuth 應用程式___HTMLTAG_421__HTMLTAG_422___

<ol>
<li>到 <strong>GitHub → 設定 → 開發人員設定 → OAuth 應用程式 → 新建___HTMLTAG_426__HTMLTAG_427___
<li>應用程式名稱： <code>Keycloak 登入___HTMLTAG_430__HTMLTAG_431___
<li>主頁網址：___HTMLTAG_433__URL_3___></li>
<li>授權回呼網址：___HTMLTAG_436__URL_4___></li>
<li>複製 <strong>客戶端 ID</strong> 並產生 <strong>客戶端金鑰___HTMLTAG_442__HTMLTAG_443___
</ol>

___HTMLTAG_445__HTMLTAG_446___步驟 2：在 Keycloak 中設定___HTMLTAG_447__HTMLTAG_448___

<ol>
<li>前往 <strong>身分提供者 → 新增提供者 → GitHub___HTMLTAG_452__HTMLTAG_453___
<li>輸入：
    <ul>
    ___HTMLTAG_456__HTMLTAG_457___客戶端 ID</strong>：GitHub 用戶端 ID</li>
    ___HTMLTAG_460__HTMLTAG_461___客戶端金鑰</strong>：GitHub 用戶端金鑰</li>
    ___HTMLTAG_464__HTMLTAG_465___預設範圍</strong>：<code>使用者：電子郵件讀取：org</code>（新增 <code>讀取：org</h3>（新增 <code>讀取：org</code> 如果需要組織資訊）___HT70___1170___
    </ul>
</li>
</ol>

___HTMLTAG_475__HTMLTAG_476___2.5 Apple 登入___HTMLTAG_477__HTMLTAG_478___

___HTMLTAG_479__HTMLTAG_480___第 1 步：在 Apple Developer 處設定___HTMLTAG_481__HTMLTAG_482___

<ol>
<li>轉至 <strong>Apple 開發人員 → 憑證、識別碼和設定檔___HTMLTAG_486__HTMLTAG_487___
<li>建立 <strong>應用程式 ID</strong> 具有使用 Apple 功能登入</li>
<li>建立 <strong>服務 ID</strong>：
    <ul>
    <li>識別碼：<code>com.example.keycloak.login___HTMLTAG_498__HTMLTAG_499___
    <li>返回網址：___HTMLTAG_501__URL_5___></li>
    </ul>
</li>
<li>建立 <strong>Key</strong> 用於透過 Apple 登入 → 下載 <code>.p8</code> 檔案</li>
</ol>

___HTMLTAG_512__HTMLTAG_513___步驟 2：在 Keycloak 中設定___HTMLTAG_514__HTMLTAG_515___<ol>
<li>前往 <strong>身分提供者 → 新增供應商 → Apple___HTMLTAG_519__HTMLTAG_520___
<li>輸入：
    <ul>
    ___HTMLTAG_523__HTMLTAG_524___客戶端 ID</strong>：服務 ID (com.example.keycloak.login)</li>
    ___HTMLTAG_527__HTMLTAG_528___客戶端密鑰</strong>：從.p8密鑰產生JWT</li>
    ___HTMLTAG_531__HTMLTAG_532___預設範圍</strong>：<code>姓名電子郵件___HTMLTAG_535__HTMLTAG_536___
    ___HTMLTAG_537__HTMLTAG_538___信任電子郵件</strong>：<code>日期___HTMLTAG_541__HTMLTAG_542___
    </ul>
</li>
</ol>

<blockquote>
<p>⚠️ <strong>注意 Apple</strong>：Apple 要求客戶端密鑰是帶有 .p8 密鑰的簽名 JWT，並且此 JWT 將在 6 個月後過期。您需要定期刷新客戶端金鑰或使用自動腳本。 </p>
</blockquote>

___HTMLTAG_552__HTMLTAG_553___2.6 Microsoft（Azure AD/Entra ID）___HTMLTAG_554__HTMLTAG_555___

___HTMLTAG_556__HTMLTAG_557___步驟 1：在 Azure 中註冊應用程式___HTMLTAG_558__HTMLTAG_559___

<ol>
<li>前往 <strong>Azure 入口網站 → Microsoft Entra ID → 應用程式註冊 → 新建___HTMLTAG_563__HTMLTAG_564___
<li>名稱：<code>Keycloak SSO___HTMLTAG_567__HTMLTAG_568___
<li>支援的帳戶類型：相應選擇
    <ul>
    ___HTMLTAG_571__HTMLTAG_572___僅限此組織目錄中的帳戶</code> — 單一租戶</li>
    ___HTMLTAG_575__HTMLTAG_576___任何組織目錄中的帳戶</code> — 多租戶</li>
    ___HTMLTAG_579__HTMLTAG_580___任何組織目錄和個人目錄中的帳戶</code> — 包括@outlook.com</li>
    </ul>
</li>
<li>重定向 URI：<code>Web</code> → ___HTMLTAG_588__URL_6___></li>
<li>前往 <strong>憑證和機密 → 新客戶端機密</strong> → 複製值</li>
</ol>

___HTMLTAG_595__HTMLTAG_596___步驟 2：在 Keycloak 中設定___HTMLTAG_597__HTMLTAG_598___

<ol>
<li>前往 <strong>身分提供者 → 新增提供者 → Microsoft___HTMLTAG_602__HTMLTAG_603___
<li>輸入：
    <ul>
    ___HTMLTAG_606__HTMLTAG_607___客戶端 ID</strong>：應用程式（客戶端）ID</li>
    ___HTMLTAG_610__HTMLTAG_611___客戶端金鑰</strong>：客戶端金鑰值</li>
    ___HTMLTAG_614__HTMLTAG_615___預設範圍</strong>：<code>openid 個人資料電子郵件___HTMLTAG_618__HTMLTAG_619___
    ___HTMLTAG_620__HTMLTAG_621___信任電子郵件</strong>：<code>在___HTMLTAG_624__HTMLTAG_625___
    ___HTMLTAG_626__HTMLTAG_627___租戶</strong>：輸入單一租戶的租用戶 ID，或 <code>common</code> 對於多租戶__HTMLTAG_631___
    </ul>
</li>
</ol>

___HTMLTAG_635__HTMLTAG_636___3。 OpenID Connect 身分提供者___HTMLTAG_637__HTMLTAG_638___<p>除了可用的社交提供者之外，Keycloak 還支援連接到 <strong>任何 OIDC 提供者</strong>.</p>

___HTMLTAG_643__HTMLTAG_644___3.1 新增 OpenID Connect v1.0 供應商___HTMLTAG_645__HTMLTAG_646___

<ol>
<li>前往 <strong>身分提供者 → 新增供應商 → OpenID Connect v1.0___HTMLTAG_650__HTMLTAG_651___
<li>配置：
    <ul>
    ___HTMLTAG_654__HTMLTAG_655___別名</strong>：<code>corporate-sso___HTMLTAG_658__HTMLTAG_659___
    ___HTMLTAG_660__HTMLTAG_661___顯示名稱</strong>：<code>公司單一登入___HTMLTAG_664__HTMLTAG_665___
    ___HTMLTAG_666__HTMLTAG_667___發現端點</strong>：___HTMLTAG_669__URL_7___></li>
    <li>或輸入手冊：
        <ul>
        ___HTMLTAG_673__HTMLTAG_674___授權 URL</strong>： ___HTMLTAG_676__URL_8___></li>
        ___HTMLTAG_678__HTMLTAG_679___令牌 URL</strong>： ___HTMLTAG_681__URL_9___></li>
        ___HTMLTAG_683__HTMLTAG_684___使用者資訊網址</strong>：___HTMLTAG_686__URL_10___></li>
        ___HTMLTAG_688__HTMLTAG_689___JWKS 網址</strong>：___HTMLTAG_691__URL_11___></li>
        </ul>
    </li>
    ___HTMLTAG_695__HTMLTAG_696___客戶端 ID</strong>：在外部 IdP 處註冊的 ID</li>
    ___HTMLTAG_699__HTMLTAG_700___客戶端機密</strong>：對應的機密</li>
    ___HTMLTAG_703__HTMLTAG_704___客戶端身份驗證</strong>： <code>作為帖子發送的客戶端密鑰_</code> 或 <code>作為基本身份驗證發送的客戶端_____MLGML_70170_70_______
    </ul>
</li>
</ol>

___HTMLTAG_714__HTMLTAG_715___發現端點</strong> 允許 Keycloak 自動取得外部 IdP 的所有 URL 和功能。 </p>

___HTMLTAG_718__HTMLTAG_719___3.2 Keycloak 到 Keycloak 身分代理程式___HTMLTAG_720__HTMLTAG_721___

<p>連接 2 個鑰匙斗篷實例：</p>

___預編碼_2___

___HTMLTAG_724__HTMLTAG_725___4。 SAML 2.0 身分提供者___HTMLTAG_726__HTMLTAG_727___

___HTMLTAG_728__HTMLTAG_729___4.1 新增 SAML IdP___HTMLTAG_730__HTMLTAG_731___<ol>
<li>前往 <strong>身分提供者 → 新增提供者 → SAML v2.0___HTMLTAG_735__HTMLTAG_736___
<li>配置：
    <ul>
    ___HTMLTAG_739__HTMLTAG_740___別名</strong>：<code>corporate-saml___HTMLTAG_743__HTMLTAG_744___
    ___HTMLTAG_745__HTMLTAG_746___從 URL 匯入</strong>：匯入外部 SAML IdP 的元資料 URL
        ___預編碼_3___
    </li>
    <li>或 <strong>從檔案匯入</strong>：上傳 XML 元資料檔</li>
    <li>或輸入手冊：
        <ul>
        ___HTMLTAG_755__HTMLTAG_756___單一登入服務 URL</strong>： ___HTMLTAG_758__URL_12___></li>
        ___HTMLTAG_760__HTMLTAG_761___單點登出服務 URL</strong>：___HTMLTAG_763__URL_13___></li>
        ___HTMLTAG_765__HTMLTAG_766___NameID 策略格式</strong>： <code>电子邮件</code> 或 <code>持久___HTMLTAG_771__HTMLTAG_772___
        ___HTMLTAG_773__HTMLTAG_774___想要簽署驗證請求</strong>：<code>於___HTMLTAG_777__HTMLTAG_778___
        ___HTMLTAG_779__HTMLTAG_780___想要簽署斷言</strong>：<code>於___HTMLTAG_783__HTMLTAG_784___
        ___HTMLTAG_785__HTMLTAG_786___想要加密斷言</strong>：<code>關閉___HTMLTAG_789__HTMLTAG_790___
        ___HTMLTAG_791__HTMLTAG_792___驗證簽章</strong>：<code>開啟___HTMLTAG_795__HTMLTAG_796___
        ___HTMLTAG_797__HTMLTAG_798___驗證 X509 憑證</strong>：貼上 IdP 簽章憑證</li>
        </ul>
    </li>
    </ul>
</li>
</ol>

___HTMLTAG_806__HTMLTAG_807___4.2 Keycloak SAML SP 元資料___HTMLTAG_808__HTMLTAG_809___

<p>外部 SAML IdP 需要 Keycloak 元資料（充當服務提供者）：</p>

___預編碼_4___

___HTMLTAG_812__HTMLTAG_813___5。 OAuth v2 身分提供者___HTMLTAG_814__HTMLTAG_815___

<p>對於僅支援 OAuth 2.0（無 OIDC）的提供者：</p>

<ol>
<li>前往 <strong>身分提供者 → 新增提供者 → OAuth v2.0___HTMLTAG_821__HTMLTAG_822___
<li>配置：
    <ul>
    ___HTMLTAG_825__HTMLTAG_826___授權 URL</strong>：OAuth2 授權端點</li>
    ___HTMLTAG_829__HTMLTAG_830___令牌 URL</strong>：OAuth2 令牌端點</li>
    ___HTMLTAG_833__HTMLTAG_834___使用者資訊 URL</strong>：端點傳回使用者資訊（如果有）</li>
    ___HTMLTAG_837__HTMLTAG_838___客戶端 ID/客戶端密碼___HTMLTAG_839__HTMLTAG_840___
    <li><strong>User Info JSON Path</strong>: JSONPath to extract user attributes
        ___預編碼_5___
    </li>
    </ul>
</li>
</ol>

___HTMLTAG_848__HTMLTAG_849___6。 Kubernetes 身分提供者___HTMLTAG_850__HTMLTAG_851___

<p>Keycloak 可以充當 Kubernetes 的 IdP，反之亦然可以從 Kubernetes 接收身分。 </p>___HTMLTAG_854__HTMLTAG_855___6.1 Kubernetes OpenID Connect 提供者___HTMLTAG_856__HTMLTAG_857___

___預編碼_6___

___預編碼_7___

___HTMLTAG_858__HTMLTAG_859___7。首次登入流程___HTMLTAG_860__HTMLTAG_861___

<p>首次登入流程處理 <strong>第一個 </strong> 使用者透過外部 IdP 登入。此流程決定：</p>
<ul>
<li>我可以在 Keycloak 中建立新使用者嗎？ </li>
<li>有目前使用者的連結嗎？ </li>
<li>是否有檢視/更新個人資料的請求？ </li>
</ul>

___HTMLTAG_874__HTMLTAG_875___7.1 預設第一個經紀商登入流程___HTMLTAG_876__HTMLTAG_877___

___預編碼_8___

___HTMLTAG_878__HTMLTAG_879___7.2 詳細工作原理___HTMLTAG_880__HTMLTAG_881___

___HTMLTAG_882__HTMLTAG_883___場景 1：全新用戶___HTMLTAG_884__HTMLTAG_885___
<ol>
<li>用戶首次透過 Google 登入__HTMLTAG_888___
___HTMLTAG_889__HTMLTAG_890___檢視個人資料</strong>：顯示來自 Google 的個人資料（電子郵件地址、姓名）以供使用者確認</li>
___HTMLTAG_893__HTMLTAG_894___如果唯一則建立使用者</strong>：電子郵件不存在→建立新的Keycloak使用者</li>
<li>將 Google 身分與 Keycloak 使用者關聯</li>
<li>登入成功__HTMLTAG_900___
</ol>

___HTMLTAG_902__HTMLTAG_903___情境 2：Keycloak 中已存在電子郵件___HTMLTAG_904__HTMLTAG_905___
<ol>
<li>使用者透過 GitHub 登錄，電子郵件 <code>john@example.com___HTMLTAG_909__HTMLTAG_910___
<li><strong>Create User If Unique</strong>: Email already exists → fail → switch to alternative</li>
___HTMLTAG_915__HTMLTAG_916___確認連結現有帳戶</strong>：詢問「帳戶 john@example.com 已存在。您想要連結嗎？」</li>
___HTMLTAG_919__HTMLTAG_920___驗證所有權</strong>：使用者透過電子郵件驗證或輸入Keycloak密碼</li>
<li>將 GitHub 身分與現有 Keycloak 使用者關聯</li>
</ol>

___HTMLTAG_926__HTMLTAG_927___7.3 自訂首次登入流程___HTMLTAG_928__HTMLTAG_929___

<p>例如：透過電子郵件自動連結帳號 <strong>無須驗證</strong>（僅在信任外部 IdP 時使用）：</p>

___預編碼_9___

<blockquote>
<p>⚠️ <strong>安全警告__HTMLTAG_937___：<code>自動設定現有使用者</code>僅應在您<strong> </code>僅應在您<strong> </strong>時使用外部。如果 IdP 允許自由設定電子郵件，攻擊者就可以透過註冊其他人的電子郵件來接管帳戶。 </p>
</blockquote>

___HTMLTAG_944__HTMLTAG_945___8。帳戶連結___HTMLTAG_946__HTMLTAG_947___

<p>帳戶連結允許使用者將多個外部身分連結到一個 Keycloak 帳戶。 </p>

___HTMLTAG_950__HTMLTAG_951___8.1 透過帳戶控制台連結___HTMLTAG_952__HTMLTAG_953___

<p>使用者可以在帳號控制台中連結/取消連結自己：</p>
___預編碼_10___

___HTMLTAG_956__HTMLTAG_957___8.2 透過應用程式啟動操作 (AIA) 進行連結___HTMLTAG_958__HTMLTAG_959___

<pre><code class="language-bash"># Trigger account linking từ application
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid&
  kc_action=oidc-link&
  kc_action_parameter=google</code></pre>___HTMLTAG_960__HTMLTAG_961___8.3 透過管理 REST API 進行連結___HTMLTAG_962__HTMLTAG_963___

<pre><code class="language-bash"># Xem federated identities của user
curl -s -X GET \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/federated-identity" \
  -H "Authorization: Bearer $ADMIN_TOKEN" | jq

# Response
[
  {
    "identityProvider": "google",
    "userId": "google-user-id-123",
    "userName": "john@gmail.com"
  }
]

# Thêm federated identity cho user
curl -X POST \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/federated-identity/github" \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "identityProvider": "github",
    "userId": "github-user-id-456",
    "userName": "johndoe"
  }'

# Xóa federated identity
curl -X DELETE \
  "https://keycloak.example.com/admin/realms/myrealm/users/$USER_ID/federated-identity/github" \
  -H "Authorization: Bearer $ADMIN_TOKEN"</code></pre>

___HTMLTAG_964__HTMLTAG_965___9。身分提供者映射器___HTMLTAG_966__HTMLTAG_967___

<p>IdP 映射器允許 <strong> 將 </strong> 屬性從外部 IdP 轉換並對應到 Keycloak 使用者屬性、角色或群組。 </p>

___HTMLTAG_972__HTMLTAG_973___9.1 映射器類型___HTMLTAG_974__HTMLTAG_975___

<table>
<thead>
___HTMLTAG_978__HTMLTAG_979___映射器____HTMLTAG_980__HTMLTAG_981___描述____HTMLTAG_982__HTMLTAG_983___範例____HTMLTAG_984__HTMLTAG_985____
</thead>
<tbody>
___HTMLTAG_988__HTMLTAG_989__HTMLTAG_990___屬性導入器___HTMLTAG_991__HTMLTAG_992__HTMLTAG_993____將屬性從 IdP 宣告導入到 Keycloak 使用者屬性____HTMLTAG_9941MLTAG_994 <code>圖片</code> → Keycloak <code>頭像_url___HTMLTAG_999__HTMLTAG_1000__HTMLTAG_1001___
___HTMLTAG_1002__HTMLTAG_1003__HTMLTAG_1004___硬編碼角色___HTMLTAG_1005__HTMLTAG_1006__HTMLTAG_1007___為 IdP 中的所有使用者指派固定角色____HTMLTAG_1008HT角色<code>外部使用者___HTMLTAG_1011__HTMLTAG_1012__HTMLTAG_1013___
___HTMLTAG_1014__HTMLTAG_1015__HTMLTAG_1016___硬編碼群組___HTMLTAG_1017__HTMLTAG_1018__HTMLTAG_1019___分配固定群組____HTMLTAG_1020→HTMLTAG_1021___使用者所有 G___組<code>/external/github___HTMLTAG_1023__HTMLTAG_1024__HTMLTAG_1025___
___HTMLTAG_1026__HTMLTAG_1027__HTMLTAG_1028___使用者名稱範本導入器___HTMLTAG_1029__HTMLTAG_1030__HTMLTAG_1031___建立使用者名稱範本___HTMLTAG _1032__HTMLTAG_1033__HTMLTAG_1034___${ALIAS}.${CLAIM.preferred_username}___HTMLTAG_1035__HTMLTAG_1036__HTMLTAG_1037___
___HTMLTAG_1038__HTMLTAG_1039__HTMLTAG_1040___外部角色到角色___HTMLTAG_1041__HTMLTAG_1042__HTMLTAG_1043___將外部 IdP 角色對應到 Keycloak 角色_<td>將外部 IdP 角色對應到 Keycloak 角色____HTMLTAG_104441041044104104410410410 <code>admin</code> → Keycloak 角色 <code>realm-admin___HTMLTAG_1049__HTMLTAG_1050__HTMLTAG_1051___
___HTMLTAG_1052__HTMLTAG_1053__HTMLTAG_1054___硬編碼屬性___HTMLTAG_1055__HTMLTAG_1056__HTMLTAG_1057___為來自 IdP的使用者設定固定屬性___HTMLTAG_1058__HTMLTAG_1059__HTMLTAG_1060___source=google</code> 對於所有 Google使用者____HTMLTAG_1062__HTMLTAG_1063___
___HTMLTAG_1064__HTMLTAG_1065__HTMLTAG_1066___SAML 屬性到角色___HTMLTAG_1067__HTMLTAG_1068__HTMLTAG_1069___將 SAML 斷言屬性對應於 Keycloak 角色____HTMLTAG1070107G10701___ <code>部門=IT</code> → 角色 <code>it 團隊___HTMLTAG_1075__HTMLTAG_1076__HTMLTAG_1077___
___HTMLTAG_1078__HTMLTAG_1079__HTMLTAG_1080___對角色的高階宣告___HTMLTAG_1081__HTMLTAG_1082__HTMLTAG_1083___將複雜宣告（JSON路徑、正規表示式）對應到角色___HTMLTAG_1084__HTMLTAG_1085___聲明<code>群組</code> 包含 <code>「管理員」</code> ___ 角色<code>admin___HTMLTAG_1091__HTMLTAG_1092__HTMLTAG_1093___
</tbody>
</table>___HTMLTAG_1096__HTMLTAG_1097___9.2 設定映射器___HTMLTAG_1098__HTMLTAG_1099___

___HTMLTAG_1100__HTMLTAG_1101___範例 1：屬性匯入器 — 從 Google 匯入頭像___HTMLTAG_1102__HTMLTAG_1103___

<ol>
<li>前往 <strong>身分提供者 → Google → 映射器 → 新增映射器___HTMLTAG_1107__HTMLTAG_1108___
<li>配置：
    <ul>
    ___HTMLTAG_1111__HTMLTAG_1112___名稱</strong>：<code>導入頭像網址___HTMLTAG_1115__HTMLTAG_1116___
    ___HTMLTAG_1117__HTMLTAG_1118___映射器類型</strong>：<code>屬性導入器___HTMLTAG_1121__HTMLTAG_1122___
    ___HTMLTAG_1123__HTMLTAG_1124___聲明</strong>：<code>圖片</code>（聲明來自 Google 的名稱）</li>
    ___HTMLTAG_1129__HTMLTAG_1130___使用者屬性名稱</strong>：<code>avatar_url</code>（Keycloak 使用者屬性）</li>___
    ___HTMLTAG_1135__HTMLTAG_1136___同步模式覆寫</strong>：<code>繼承___HTMLTAG_1139__HTMLTAG_1140___
    </ul>
</li>
</ol>

___HTMLTAG_1144__HTMLTAG_1145___範例 2：硬編碼角色 — 將角色指派給外部使用者___HTMLTAG_1146__HTMLTAG_1147___

<ol>
<li>前往 <strong>身分提供者 → GitHub → 映射器 → 新增映射器___HTMLTAG_1151__HTMLTAG_1152___
<li>配置：
    <ul>
    ___HTMLTAG_1155__HTMLTAG_1156___名稱</strong>：<code>指派外部使用者角色___HTMLTAG_1159__HTMLTAG_1160___
    ___HTMLTAG_1161__HTMLTAG_1162___映射器類型</strong>：<code>硬編碼角色___HTMLTAG_1165__HTMLTAG_1166___
    ___HTMLTAG_1167__HTMLTAG_1168___角色</strong>：<code>外部使用者___HTMLTAG_1171__HTMLTAG_1172___
    </ul>
</li>
</ol>

___HTMLTAG_1176__HTMLTAG_1177___範例 3：使用者名稱範本 — 使用 IdP 別名作為使用者名稱前綴___HTMLTAG_1178__HTMLTAG_1179___

<ol>
<li>配置：
    <ul>
    ___HTMLTAG_1183__HTMLTAG_1184___映射器類型</strong>：<code>使用者名稱範本導入器____HTMLTAG_1187__HTMLTAG_1188___
    ___HTMLTAG_1189__HTMLTAG_1190___範本</strong>：<code>${ALIAS}.${CLAIM.preferred_username}___HTMLTAG_1193__HTMLTAG_1194___
    ___HTMLTAG_1195__HTMLTAG_1196___目標</strong>：<code>本地___HTMLTAG_1199__HTMLTAG_1200___
    </ul>
</li>
<li>結果：Google 使用者的使用者名稱 = <code>google.john.doe___HTMLTAG_1205__HTMLTAG_1206___
</ol>

___HTMLTAG_1208__HTMLTAG_1209___範例 4：外部角色到角色 — 映射 SAML 角色___HTMLTAG_1210__HTMLTAG_1211___<ol>
<li>配置：
    <ul>
    ___HTMLTAG_1215__HTMLTAG_1216___映射器類型</strong>：<code>外部角色到角色___HTMLTAG_1219__HTMLTAG_1220___
    ___HTMLTAG_1221__HTMLTAG_1222___外部角色</strong>：<code>admin</code>（來自外部 SAML IdP 的角色名稱）</li>
    ___HTMLTAG_1227__HTMLTAG_1228___角色</strong>：<code>realm-admin</code>（Keycloak 角色）</li>
    </ul>
</li>
</ol>

___HTMLTAG_1236__HTMLTAG_1237___10。同步模式___HTMLTAG_1238__HTMLTAG_1239___

<p>同步模式控制 <strong>Keycloak 如何在使用者每次登入時從外部 IdP 同步資訊__HTMLTAG_1242___.</p>

<table>
<thead>
___HTMLTAG_1246__HTMLTAG_1247___模式___HTMLTAG_1248__HTMLTAG_1249___首次登入___HTMLTAG_1250__HTMLTAG_1251___後續登入____HTMLTAG_1252__HTMLTAG1253_____
</thead>
<tbody>
___HTMLTAG_1258__HTMLTAG_1259__HTMLTAG_1260___導入___HTMLTAG_1261__HTMLTAG_1262__HTMLTAG_1263___從 IdP 導入屬性____HTMLTAG_1264__HTMLTAG_1265___ Keycloak___HTMLTAG_1266__HTMLTAG_1267___使用者可以在下列位置編輯設定檔鑰匙斗篷___HTMLTAG_1268__HTMLTAG_1269___
___HTMLTAG_1270__HTMLTAG_1271__HTMLTAG_1272___強制___HTMLTAG_1273__HTMLTAG_1274__HTMLTAG_1275___從 IdP 導入屬性____HTMLTAG_1276__HTMLTAG_127777776__HTMLTAG_127777776__HT的新資料覆蓋___HTMLTAG_1278__HTMLTAG_1279___IdP 是絕對真理的來源___HTMLTAG_1280__HTMLTAG_1281___
___HTMLTAG_1282__HTMLTAG_1283__HTMLTAG_1284___舊版___HTMLTAG_1285__HTMLTAG_1286__HTMLTAG_1287___從 IdP導入屬性____HTMLTAG_1288__HTMLTAG_1289___如果屬性為空則更新，如果已為空則保留___HTMLTAG_1290__HTMLTAG_1291___向後相容，合併資料___HTMLTAG_1292__HTMLTAG_1293___
</tbody>
</table>

___HTMLTAG_1296__HTMLTAG_1297___同步模式設定：___HTMLTAG_1298__HTMLTAG_1299___
<ul>
___HTMLTAG_1301__HTMLTAG_1302___在 IdP 層級</strong>：適用於此 IdP 的所有映射器</li>
___HTMLTAG_1305__HTMLTAG_1306___在映射器層級</strong>（同步模式覆寫）：覆寫特定映射器的同步模式</li>
</ul>

<pre><code class="language-text"># Ví dụ: Google IdP với sync mode = import
# Mapper "Import Avatar" với Sync Mode Override = force

# Kết quả:
# - Email, name: import 1 lần, user có thể sửa trong Keycloak
# - Avatar URL: luôn cập nhật từ Google (force)</code></pre>

___HTMLTAG_1310__HTMLTAG_1311___11。用戶端建議的 IdP (kc_idp_hint)___HTMLTAG_1312__HTMLTAG_1313___

___HTMLTAG_1314__HTMLTAG_1315___kc_idp_hint</code> 允許應用程式 <strong> 自動將 </strong> 使用者重新導向至特定的外部 IdP，___ 自動將 </strong> 使用者重新導向至特定的外部 IdP，___ Key Keycloak 繞過頁面。 </p>

___HTMLTAG_1320__HTMLTAG_1321___11.1 使用 kc_idp_hint___HTMLTAG_1322__HTMLTAG_1323___

<pre><code class="language-bash"># Redirect trực tiếp đến Google login
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid&
  kc_idp_hint=google

# Redirect trực tiếp đến SAML IdP
GET /realms/myrealm/protocol/openid-connect/auth?
  client_id=my-app&
  redirect_uri=https://myapp.example.com/callback&
  response_type=code&
  scope=openid&
  kc_idp_hint=corporate-saml</code></pre>

___HTMLTAG_1324__HTMLTAG_1325___JavaScript 整合：___HTMLTAG_1326__HTMLTAG_1327___

<pre><code class="language-javascript">// keycloak-js adapter
const keycloak = new Keycloak({
  url: 'https://keycloak.example.com',
  realm: 'myrealm',
  clientId: 'my-app'
});

// Đăng nhập qua Google
function loginWithGoogle() {
  keycloak.login({
    idpHint: 'google'
  });
}

// Đăng nhập qua corporate SAML
function loginWithCorporate() {
  keycloak.login({
    idpHint: 'corporate-saml'
  });
}</code></pre>

___HTMLTAG_1328__HTMLTAG_1329___11.2 瀏覽器流程中的身分提供者重定向器___HTMLTAG_1330__HTMLTAG_1331___

___HTMLTAG_1332__HTMLTAG_1333___身分提供者重定向器</code> dalam瀏覽器流程自動處理<code>kc_idp_hint</code>:</p><ul>
<li>如果請求有 <code>kc_idp_hint=google</code> → 立即重定向到 Google</li>
<li>如果沒有提示→繼續正常流程（顯示登入頁面）</li>
</ul>

___HTMLTAG_1346__HTMLTAG_1347___預設 IdP</strong>：您可以為身分提供者重定向器設定預設 IdP — 沒有提示時，自動重定向到預設 IdP：</p>
<ol>
<li>點選 <code>身分提供者重定向器___HTMLTAG_1353__HTMLTAG_1354___ 旁邊的 ⚙️
<li>輸入 <strong>預設身分提供者</strong>：<code>google___HTMLTAG_1359__HTMLTAG_1360___
</ol>

___HTMLTAG_1362__HTMLTAG_1363___12。身分經紀人註銷___HTMLTAG_1364__HTMLTAG_1365___

<p>當使用者從 Keycloak 登出時，您可以設定 <strong>傳播註銷</strong> 到外部 IdP.</p>

___HTMLTAG_1370__HTMLTAG_1371___12.1 反向通路註銷___HTMLTAG_1372__HTMLTAG_1373___

<p>Keycloak 支援 <strong>backchannel 註銷</strong> 與外部 OIDC IdP：</p>

<ol>
<li>在 OIDC IdP 配置中，啟用 <strong>反向通道註銷___HTMLTAG_1381__HTMLTAG_1382___
<li>外部 IdP 必須支援反向通道註銷端點__HTMLTAG_1384___
<li>當使用者從 Keycloak 登出 → Keycloak 向外部 IdP 發送註銷請求</li>
</ol>

<p>對於 SAML IdP，註銷傳播是透過 <strong>SAML 單點註銷 (SLO)</strong> 協定自動處理的。 </p>

___HTMLTAG_1392__HTMLTAG_1393___13。同一社交經紀人的多個實例___HTMLTAG_1394__HTMLTAG_1395___

<p>Keycloak 允許新增 <strong>同一社交提供者的多個實例 </strong>，每個實例都有不同的別名：</p>

<pre><code class="language-text"># Ví dụ: 2 Google IdPs cho 2 Google Workspace domains
Identity Providers:
  - Alias: google-corp        → Google Workspace domain corp.example.com
  - Alias: google-partner     → Google Workspace domain partner.example.com

# Mỗi instance có Client ID / Client Secret riêng
# registered tại Google Cloud Console khác nhau</code></pre>

___HTMLTAG_1400__HTMLTAG_1401___如何新增：___HTMLTAG_1402__HTMLTAG_1403___
<ol>
<li>新增 OIDC v1.0 提供者（第二個實例請勿使用內建 Google 提供者）</li>
<li>別名：<code>google-partner___HTMLTAG_1409__HTMLTAG_1410___
<li>發現端點：___HTMLTAG_1412__URL_14___></li>
<li>客戶端 ID/秘密：第二個實例的單獨憑證</li>
</ol>

___HTMLTAG_1417__HTMLTAG_1418___14。在帳號控制台中顯示/隱藏 IdP___HTMLTAG_1419__HTMLTAG_1420___

<p>控制哪些使用者可以在帳戶控制台中查看和連結/取消連結 IdP：</p><ul>
___HTMLTAG_1424__HTMLTAG_1425___在登入頁面上顯示</strong>：未選取<code>在登入頁面上隱藏____HTMLTAG_1428__HTMLTAG_1429___
___HTMLTAG_1430__HTMLTAG_1431___從登入頁面隱藏</strong>：勾選 <code>在登入頁面隱藏</code> — 仍然可用 ___HTMLTAG_1435</code> — 仍可用 <code>HTMLc_id_h______41341374135___
___HTMLTAG_1438__HTMLTAG_1439___在帳戶控制台中顯示</strong>：預設 IdP 在連結帳戶中顯示</li>
___HTMLTAG_1442__HTMLTAG_1443___僅帳戶連結</strong>：IdP 僅顯示在帳戶控制台中，而不顯示在登入頁面上</li>
</ul>

___HTMLTAG_1447__HTMLTAG_1448___15。摘要___HTMLTAG_1449__HTMLTAG_1450___

<table>
<thead>
___HTMLTAG_1453__HTMLTAG_1454___概念____HTMLTAG_1455__HTMLTAG_1456___說明____HTMLTAG_1457__HTMLTAG_1458___
</thead>
<tbody>
___HTMLTAG_1461__HTMLTAG_1462__HTMLTAG_1463___身份代理___HTMLTAG_1464__HTMLTAG_1465__HTMLTAG_1466___Keycloak 在應用程式和外部 IdP 之間進行中介___HTMLTAGML_1467___Keycloak 在應用程式和外部 IdP 之間進行中介___HTMLTAGML_1467146868467__
___HTMLTAG_1469__HTMLTAG_1470__HTMLTAG_1471___社交登入____HTMLTAG_1472__HTMLTAG_1473__HTMLTAG_1474___Google、Facebook、GitHub、Apple、Microsoft___HTMLTAG_1475__HTMLTAG1476___
___HTMLTAG_1477__HTMLTAG_1478__HTMLTAG_1479___OIDC/SAML/OAuth2 IdP___HTMLTAG_1480__HTMLTAG_1481__HTMLTAG_1482_____協定標準連接任何 IdP____MLTAG_114831482_____14___
___HTMLTAG_1485__HTMLTAG_1486__HTMLTAG_1487___首次登入流程___HTMLTAG_1488__HTMLTAG_1489__HTMLTAG_1490___首次處理：建立新使用者或現有連結____HTMLTAG_14914HTMLG_1491__2___
___HTMLTAG_1493__HTMLTAG_1494__HTMLTAG_1495___帳戶連結___HTMLTAG_1496__HTMLTAG_1497__HTMLTAG_1498___將多個外部身分連結到 1 個 Keycloak 帳戶_____HTMLTAGML_1499__%
___HTMLTAG_1501__HTMLTAG_1502__HTMLTAG_1503___IdP 映射器___HTMLTAG_1504__HTMLTAG_1505__HTMLTAG_1506___轉換屬性：屬性導入器、硬體編碼角色/群組、使用者使用者名稱範本___MLTAG11501150___
___HTMLTAG_1509__HTMLTAG_1510__HTMLTAG_1511___同步模式___HTMLTAG_1512__HTMLTAG_1513__HTMLTAG_1514______導入（一次）、強制（總是覆寫）、遺留（合併）</td>導入（一次）、強制（總是覆寫）、遺留（合併）___HTMLTAGML_1515__16
___HTMLTAG_1517__HTMLTAG_1518__HTMLTAG_1519___kc_idp_hint___HTMLTAG_1520__HTMLTAG_1521__HTMLTAG_1522____跳過登入頁面，直接重新導向至特定 IdP____MLTAG_152152____152____
___HTMLTAG_1525__HTMLTAG_1526__HTMLTAG_1527___代理註銷___HTMLTAG_1528__HTMLTAG_1529__HTMLTAG_1530___將註銷傳播到外部 IdP（反向渠道/SLO）<td>將註銷傳播到外部 IdP（反向渠道/SLO）___HTMLTAG_15331153________
</tbody>
</table>