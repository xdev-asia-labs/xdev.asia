---
id: 019d8b30-b111-7001-c001-e0c5f8100111
title: 第 11 課：多重驗證 - OTP、WebAuthn 和金鑰
slug: bai-11-multi-factor-authentication-otp-webauthn-va-passkeys
description: 使用 TOTP/HOTP（Google 驗證器、FreeOTP）、OTP 策略設定、復原代碼設定雙重認證。 WebAuthn 設定（FIDO2 安全金鑰）、WebAuthn 無密碼原則。金鑰整合（條件和模式 UI）、透過 AIA 註冊金鑰、Kerberos 驗證和 X.509 用戶端憑證驗證。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 11
section_title: 第 3 部分：身份驗證、MFA 和身份代理
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2380" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2380)"/>

  <!-- Decorations -->
  <g>
    <circle cx="945" cy="65" r="28" fill="#fb923c" opacity="0.1"/>
    <circle cx="790" cy="250" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="635" cy="175" r="18" fill="#fb923c" opacity="0.1"/>
    <circle cx="980" cy="100" r="13" fill="#fb923c" opacity="0.05"/>
    <circle cx="825" cy="285" r="8" fill="#fb923c" opacity="0.1"/>
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
    <line x1="600" y1="135" x2="1100" y2="215" stroke="#fb923c" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="165" x2="1050" y2="235" stroke="#fb923c" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1010.9807621135332,170 1010.9807621135332,200 985,215 959.0192378864668,200 959.0192378864668,170 985,155" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 11 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 11 課：多重驗證 - OTP，</tspan>
      <tspan x="60" dy="42">WebAuthn 和密鑰</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 3 部分：驗證、MFA 和身分代理</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。 OTP 驗證 — TOTP 和 HOTP___HTMLTAG_69__HTMLTAG_70___

<p>OTP（一次性密碼）是最受歡迎的 MFA 方法。 Keycloak支援兩種類型：</p>

<table>
<thead>
___HTMLTAG_75__HTMLTAG_76___類型____HTMLTAG_77__HTMLTAG_78___描述____HTMLTAG_79__HTMLTAG_80___演算法____HTMLTAG_81__HTMLTAG_82___
</thead>
<tbody>
___HTMLTAG_85__HTMLTAG_86__HTMLTAG_87___TOTP</strong>（基於時間）___HTMLTAG_89__HTMLTAG_90___OTP 程式碼隨時間變化（每 30 秒）___HTMLTAG_91__HTMLTAG_92___MLC14U4UU​​T_UUU​​T_UUU​​US_UU​​Ds_UU​​UsU​​Ds_UU​​UsU​​UTU​​DDGML*
___HTMLTAG_95__HTMLTAG_96__HTMLTAG_97___HOTP</strong>（基於 HMAC）___HTMLTAG_99__HTMLTAG_100___OTP 代碼根據計數器進行更改___HTMLTAG_101__HTMLTAG_102___RFC MLTAG_102___
</tbody>
</table>

___HTMLTAG_107__HTMLTAG_108___建議使用 TOTP</strong>，因為它更安全 — 程式碼會隨著時間的推移而過期。僅當設備不支援精確時鐘時才使用 HOTP。 </p>

___HTMLTAG_111__HTMLTAG_112___1.1 OTP 政策設定___HTMLTAG_113__HTMLTAG_114___

<p>在 <strong>驗證 → 政策 → OTP 策略</strong>:</p> 設定 OTP 策略<table>
<thead>
___HTMLTAG_121__HTMLTAG_122___設定____HTMLTAG_123__HTMLTAG_124___說明____HTMLTAG_125__HTMLTAG_126___預設值___HTMLTAG_127__HTMLTAG_128____126___預設值___HTMLTAG_127__HTMLTAG_128_______ML____
</thead>
<tbody>
___HTMLTAG_133__HTMLTAG_134__HTMLTAG_135___OTP 類型___HTMLTAG_136__HTMLTAG_137__HTMLTAG_138___TOTP或HOTP___HTMLTAG_139__HTMLTAG_140__HTMLTAG_141___totp___HTMLTAG_142__HTMLTAG_143__HTMLTAG_144__HTMLTAG_145____totp___HTMLTAG_146__HTMLTAG_147828___
___HTMLTAG_149__HTMLTAG_150__HTMLTAG_151___OTP雜湊演算法___HTMLTAG_152__HTMLTAG_153__HTMLTAG_154___演算法雜湊____HTMLTAG_155__HTMLTAG_156__HTMLTAG_157___SHA1____HTMLTAG_158__HTMLTAG_159__HTMLTAG_1____HTMLTAG_158__HTMLTAG_159__HTMLTAG_16_HTML15G_____________ <code>SHA512___HTMLTAG_164__HTMLTAG_165__HTMLTAG_166___
___HTMLTAG_167__HTMLTAG_168__HTMLTAG_169___位數___HTMLTAG_170__HTMLTAG_171__HTMLTAG_172___位數OTP___HTMLTAG_173__HTMLTAG_174__HT MLTAG_175___6___HTMLTAG_176__HTMLTAG_177__HTMLTAG_178__HTMLTAG_179____6</code>（最佳相容）___HTMLTAG_181__HTMLTAG_182___
___HTMLTAG_183__HTMLTAG_184__HTMLTAG_185___前視視窗___HTMLTAG_186__HTMLTAG_187__HTMLTAG_188___接受的上一個/下一個代碼編號get___HT MLTAG_189__HTMLTAG_190__HTMLTAG_191___1___HTMLTAG_192__HTMLTAG_193__HTMLTAG_194__HTMLTAG_195___1</code> — 若使用者經常出現時間錯誤，則增加___HTMLTAG_197__HTMLTAG_198___
___HTMLTAG_199__HTMLTAG_200__HTMLTAG_201___OTP 令牌週期___HTMLTAG_202__HTMLTAG_203__HTMLTAG_204___每個程式碼的生存時間（秒）—僅TOTP___HTMLTAG_205__HTMLTAG_206__HTMLTAG_207___30____HTMLTAG_208__HTMLTAG_209__HTMLTAG_210__HTMLTAG_211____30___HTMLTAG_212__MLTAG_212__142G13212_____
___HTMLTAG_215__HTMLTAG_216__HTMLTAG_217___初始計數器___HTMLTAG_218__HTMLTAG_219__HTMLTAG_220___初始計數器 —僅HOTP___HTMLTAG_221__HTMLTAG_222__HTMLTAG_223____0___HTMLTAG_224__HTMLTAG_225__HTMLTAG_226__HTMLTAG_227____0___HTMLTAG_228__HTMLTAG_299__
___HTMLTAG_231__HTMLTAG_232__HTMLTAG_233___支援的應用程式____HTMLTAG_234__HTMLTAG_235__HTMLTAG_236___設定說明中顯示的應用程式___HTMLTAG_237__HTMLTAG_238___FreeP、Google身份驗證器___HTMLTAG_239__HTMLTAG_240___新增更多應用程序，如果需要___HTMLTAG_241__HTMLTAG_242___
</tbody>
</table>

___HTMLTAG_245__HTMLTAG_246___1.2 使用 Google 驗證器/FreeOTP 設定 OTP___HTMLTAG_247__HTMLTAG_248___

___HTMLTAG_249__HTMLTAG_250___步驟 1：在驗證流程中開啟 OTP___HTMLTAG_251__HTMLTAG_252___

<p>預設情況下，瀏覽器流已具有 <code>瀏覽器 - 條件 OTP</code> 子流。僅當使用者設定了 OTP 憑證時才需要 OTP。為了 <strong> 要求 </strong>，所有使用者都必須設定 OTP：</p><ol>
<li>轉到 <strong>驗證 → 所需操作___HTMLTAG_262__HTMLTAG_263___
<li>查找 <strong>設定 OTP___HTMLTAG_266__HTMLTAG_267___
<li>開啟 <strong>預設操作</strong>：開啟 — 所有新使用者都必須設定 OTP</li>
<li>或在「設定為預設動作」欄位中啟用 <strong>必需的</strong>，以強制現有使用者實施</li>
</ol>

___HTMLTAG_277__HTMLTAG_278___步驟 2：使用者註冊 OTP___HTMLTAG_279__HTMLTAG_280___

<p>當使用者首次登入時（或管理員開啟「必要操作」後）：</p>

<ol>
<li>Keycloak 顯示頁面 <strong>「行動驗證器設定」___HTMLTAG_286__HTMLTAG_287___
<li>使用者開啟 Google 驗證器或 FreeOTP 應用程式</li>
<li>掃描二維碼或輸入手動密鑰</li>
<li>輸入應用程式中的確認 OTP 代碼</li>
<li>為使用者保存的 OTP 憑證</li>
</ol>

___HTMLTAG_297__HTMLTAG_298___步驟 3：OTP 驗證___HTMLTAG_299__HTMLTAG_300___

<p>從下次登入開始，輸入使用者名稱/密碼後，使用者必須輸入應用程式中的 OTP 代碼。 </p>

___HTMLTAG_303__HTMLTAG_304___1.3 管理 OTP 憑證___HTMLTAG_305__HTMLTAG_306___

___預編碼_0___

___HTMLTAG_307__HTMLTAG_308___2。恢復代碼___HTMLTAG_309__HTMLTAG_310___

<p>恢復代碼允許使用者在遺失 OTP 設備時恢復存取權限。 </p>

___HTMLTAG_313__HTMLTAG_314___2.1 啟用復原碼___HTMLTAG_315__HTMLTAG_316___

<ol>
<li>轉至 <strong>驗證 → 所需操作___HTMLTAG_320__HTMLTAG_321___
<li>找出<strong>恢復驗證碼</strong>（如果沒有，需要註冊）</li>
<li>已啟用 <strong>預設操作</strong> 或 <strong>已啟用___HTMLTAG_330__HTMLTAG_331___
</ol>

___HTMLTAG_333__HTMLTAG_334___在 OTP 設定後強制執行恢復代碼：___HTMLTAG_335__HTMLTAG_336___

<p>要強制使用者在設定 OTP 後立即建立恢復程式碼，請依照下列順序設定所需操作：</p>

<ol>
___HTMLTAG_340__HTMLTAG_341___CONFIGURE_TOTP</code> — 首先設定 OTP</li>
___HTMLTAG_344__HTMLTAG_345___CONFIGURE_RECOVERY_AUTHN_CODES</code> — 產生以下復原程式碼</li>
</ol>

___HTMLTAG_349__HTMLTAG_350___2.2 使用復原碼___HTMLTAG_351__HTMLTAG_352___

<p>當使用者遺失設備 OTP 時：</p>

<ol>
<li>在 OTP 輸入畫面上，點選 <strong>「嘗試其他方式」___HTMLTAG_358__HTMLTAG_359___
<li>選擇 <strong>「復原碼」___HTMLTAG_362__HTMLTAG_363___
<li>輸入已儲存的復原碼之一</li>
<li>每個程式碼只能使用<strong>一次___HTMLTAG_368__HTMLTAG_369___
<li>使用完所有程式碼後，需重新產生</li>
</ol>

___HTMLTAG_373__HTMLTAG_374___3。 WebAuthn (FIDO2) — 安全金鑰___HTMLTAG_375__HTMLTAG_376___<p>WebAuthn 允许使用 <strong>硬件安全密钥</strong>（YubiKey、Google Titan）或 <strong>平台身份验证器</strong>（Touch ID、Windows Hello）进行身份验证.</p>

___HTMLTAG_383__HTMLTAG_384___3.1 在瀏覽器流程中設定 WebAuthn___HTMLTAG_385__HTMLTAG_386___

___HTMLTAG_387__HTMLTAG_388___步驟 1：將 WebAuthn 新增至驗證流程___HTMLTAG_389__HTMLTAG_390___

<ol>
<li>重複瀏覽器流程 → <code>具有 WebAuthn 的瀏覽器___HTMLTAG_394__HTMLTAG_395___
<li>在表單子流程中，新增 <code>WebAuthn 驗證器___HTMLTAG_398__HTMLTAG_399___
<li>流程架構：
___預編碼_1___
</li>
<li>綁定流程： <strong>驗證 → 綁定 → 瀏覽器流程 = 使用 WebAuthn 的瀏覽器___HTMLTAG_404__HTMLTAG_405___
</ol>

___HTMLTAG_407__HTMLTAG_408___第 2 步：啟用所需操作___HTMLTAG_409__HTMLTAG_410___

<ol>
<li>轉至 <strong>驗證 → 所需操作___HTMLTAG_414__HTMLTAG_415___
<li>查找 <strong>WebAuthn 註冊</strong> → 啟用 <strong>預設操作___HTMLTAG_420__HTMLTAG_421___
<li>新用戶將被要求註冊安全金鑰</li>
</ol>

___HTMLTAG_425__HTMLTAG_426___3.2 WebAuthn 政策設定___HTMLTAG_427__HTMLTAG_428___

<p>在 <strong>驗證 → 策略 → WebAuthn 策略</strong>:</p> 進行配置<table>
<thead>
___HTMLTAG_435__HTMLTAG_436___設定___HTMLTAG_437__HTMLTAG_438___說明___HTMLTAG_439__HTMLTAG_440___值___HTMLTAG_441__HTMLTAG_442___
</thead>
<tbody>
___HTMLTAG_445__HTMLTAG_446__HTMLTAG_447___依賴實體名稱___HTMLTAG_448__HTMLTAG_449__HTMLTAG_450___使用者的顯示名稱___HTMLTAG_451__HTMLTAG_452__450___使用者的顯示名稱___HTMLTAG_451__HTMLTAG_452__HTMLTAG_451或公司名稱___HTMLTAG_455__HTMLTAG_456___
___HTMLTAG_457__HTMLTAG_458__HTMLTAG_459___簽章演算法____HTMLTAG_460__HTMLTAG_461__HTMLTAG_462___字母演算法簽章___HTMLTAG_463__HTMLTAG_464_HTMLTAG_4651VMLTAG_463__HT <code>RS256___HTMLTAG_468__HTMLTAG_469__HTMLTAG_470___
___HTMLTAG_471__HTMLTAG_472__HTMLTAG_473___依賴方 ID___HTMLTAG_474__HTMLTAG_475__HTMLTAG_476___Keycloak 域____HTMLTAG_477__HTMLTAG_478__HTMLTAG_4778__147478__（47478__483____] =自動）___HTMLTAG_481__HTMLTAG_482___
___HTMLTAG_483__HTMLTAG_484__HTMLTAG_485___證明傳送首選項____HTMLTAG_486__HTMLTAG_487__HTMLTAG_488___來自金鑰的證明請求____HTMLTAG_489__HTMLTAG_ML49091MLG_ML49012G___或<code>直接___HTMLTAG_494__HTMLTAG_495__HTMLTAG_496___
___HTMLTAG_497__HTMLTAG_498__HTMLTAG_499___驗證器附件___HTMLTAG_500__HTMLTAG_501__HTMLTAG_502___驗證器類型___HTMLTAG_503__HTMLTAG_504__HTMLTAG_505________HT金鑰與平台）___HTMLTAG_507__HTMLTAG_508___
___HTMLTAG_509__HTMLTAG_510__HTMLTAG_511___需要常駐密鑰___HTMLTAG_512__HTMLTAG_513__HTMLTAG_514___密鑰必須儲存於設備上___HTMLTAG_515__HTMLTAG_516__HTMLTAG_517___未指定___HTMLTAG_518__HTMLTAG_519__HTMLTAG_520___
___HTMLTAG_521__HTMLTAG_522__HTMLTAG_523___使用者驗證要求___HTMLTAG_524__HTMLTAG_525__HTMLTAG_526___設備上需要使用者驗證要求___HTMLTAG_527__HTMLTAG_528__14G_528__53____或<code>必填____HTMLTAG_532__HTMLTAG_533__HTMLTAG_534___
___HTMLTAG_535__HTMLTAG_536__HTMLTAG_537___建立逾時___HTMLTAG_538__HTMLTAG_539__HTMLTAG_540___註冊金鑰時的逾時（秒）___HTMLTAG_541__HTMLTAG_542__HTMLTAG_543____0</code>（無逾時）___HTMLTAG_545__HTMLTAG_546___
___HTMLTAG_547__HTMLTAG_548__HTMLTAG_549___避免使用相同的驗證器註冊___HTMLTAG_550__HTMLTAG_551__HTMLTAG_552___避免使用相同金鑰註冊2次___HTMLTAG_553__HTMLTAG_554__HTMLTAG_555___關閉___HTMLTAG_556__HTMLTAG_557__HTMLTAG_558___
___HTMLTAG_559__HTMLTAG_560__HTMLTAG_561___可接受的 AAGUID___HTMLTAG_562__HTMLTAG_563__HTMLTAG_564___白名單安全密鑰模型___HTMLTAG_565__HTMLTAG_566___MLTAG_566___ML_76767677____ML_566___
</tbody>
</table>

___HTMLTAG_571__HTMLTAG_572___3.3 管理 WebAuthn 憑證___HTMLTAG_573__HTMLTAG_574___

___預編碼_2___

<p>使用者也可以在 <strong>帳號控制台</strong>（位於 <code>/realms/myrealm/account/#/security/webauthn</code>.</p>___HTMLTAG_581__HTMLTAG_582___4。密鑰___HTMLTAG_583__HTMLTAG_584___

<p>Passkeys 是 WebAuthn 的下一代發展 — 允許使用指紋、臉部辨識或裝置 PIN 進行 <strong>無密碼登入__HTMLTAG_587___（無密碼）。 </p>

___HTMLTAG_589__HTMLTAG_590___4.1 金鑰與傳統 Web 驗證___HTMLTAG_591__HTMLTAG_592___

<table>
<thead>
___HTMLTAG_595__HTMLTAG_596___功能____HTMLTAG_597__HTMLTAG_598___WebAuthn (MFA)___HTMLTAG_599__HTMLTAG_600___密鑰（無密碼）____HTMLTAG_601__HTMLTAG_601__HT2___
</thead>
<tbody>
___HTMLTAG_605__HTMLTAG_606__HTMLTAG_607___目的____HTMLTAG_608__HTMLTAG_609__HTMLTAG_610___MFA — 在密碼後加入步驟____HTMLTAG_611__HTMLTAG_612___1TAG_612___141141414132_____
___HTMLTAG_615__HTMLTAG_616__HTMLTAG_617___驗證器____HTMLTAG_618__HTMLTAG_619__HTMLTAG_620__HTMLTAG_621___WebAuthn驗證器____HTMLTAG_622__HTMLTAG_623__HTMLTAG_624__HTMLTAG_625___WebAuthn 無密碼驗證器____HTMLTAG_626__HTMLTAG_627__HTMLTAG_628___
___HTMLTAG_629__HTMLTAG_630__HTMLTAG_631___政策___HTMLTAG_632__HTMLTAG_633__HTMLTAG_634___WebAuthn 政策___HTMLTAG_635__HTMLTAG_636___WebWebAuthn 政策___HTMLTAG_635__HT__TAG_636___WebWebAuthn_______ML
___HTMLTAG_639__HTMLTAG_640__HTMLTAG_641____所需操作___HTMLTAG_642__HTMLTAG_643__HTMLTAG_644____WebAuthn 註冊____HTMLTAG_645__HTMLTAG_644____WebAuthn 註冊____HTMLTAG_645__HTMLTAG_644____WebAuthn 註冊____41TAG_645__HTMLTAG_646___WebAuthnML
___HTMLTAG_649__HTMLTAG_650__HTMLTAG_651___常駐密鑰____HTMLTAG_652__HTMLTAG_653__HTMLTAG_654____可選___HTMLTAG_655__HTMLTAG_656______MLTA___ML____MLTAMLTAG157172________ML_7_7)____ML
___HTMLTAG_659__HTMLTAG_660__HTMLTAG_661___使用者驗證___HTMLTAG_662__HTMLTAG_663__HTMLTAG_664___首選項____HTMLTAG_665__HTMLTAG_666____ML（生物辨識/PIN）HTMLTAG_665__HTMLTAG_666____ML（生物辨識/PIN）
</tbody>
</table>

___HTMLTAG_671__HTMLTAG_672___4.2 啟用密鑰___HTMLTAG_673__HTMLTAG_674___

___HTMLTAG_675__HTMLTAG_676___步驟 1：設定 WebAuthn 無密碼原則___HTMLTAG_677__HTMLTAG_678___

<ol>
<li>前往 <strong>驗證 → 政策 → WebAuthn 無密碼原則___HTMLTAG_682__HTMLTAG_683___
<li>配置：
    <ul>
    ___HTMLTAG_686__HTMLTAG_687___信賴方實體名稱</strong>：<code>我的公司___HTMLTAG_690__HTMLTAG_691___
    ___HTMLTAG_692__HTMLTAG_693___簽章演算法</strong>：<code>ES256___HTMLTAG_696__HTMLTAG_697___
    ___HTMLTAG_698__HTMLTAG_699___使用者驗證要求</strong>：<code>必需___HTMLTAG_702__HTMLTAG_703___
    ___HTMLTAG_704__HTMLTAG_705___需要常駐密鑰</strong>：<code>是</code> — 需要密鑰</li>
    </ul>
</li>
</ol>

___HTMLTAG_713__HTMLTAG_714___步驟 2：建立無密碼瀏覽器流程___HTMLTAG_715__HTMLTAG_716___

___預編碼_3___

___HTMLTAG_717__HTMLTAG_718___步驟 3：啟用所需操作___HTMLTAG_719__HTMLTAG_720___<ol>
<li>轉至 <strong>驗證 → 所需操作___HTMLTAG_724__HTMLTAG_725___
<li>開啟 <strong>WebAuthn 無密碼註冊</strong> → 預設操作：開啟</li>
</ol>

___HTMLTAG_731__HTMLTAG_732___4.3 萬能鑰匙 UI 模式 — 條件與模態___HTMLTAG_733__HTMLTAG_734___

___HTMLTAG_735__HTMLTAG_736___條件 UI（自動填入）：___HTMLTAG_737__HTMLTAG_738___
<p>密碼會自動在使用者名字段中建議 - 使用者只需選擇並使用生物辨識技術進行身份驗證。這是最流暢的體驗。 </p>

<p>要啟用條件 UI，請將 <code>WebAuthn 無密碼身份驗證器</code> 放在流程中的第一個位置，並要求 <code>Alternative</code>___.___

___HTMLTAG_747__HTMLTAG_748___模態使用者介面：___HTMLTAG_749__HTMLTAG_750___
<p>瀏覽器顯示一個對話框，要求進行金鑰驗證。使用者必須與對話框互動。當您需要明確的使用者體驗時使用。 </p>

___HTMLTAG_753__HTMLTAG_754___4.4 透過 AIA 註冊金鑰（應用程式啟動操作）___HTMLTAG_755__HTMLTAG_756___

<p>使用者可以隨時透過 AIA 連結註冊 Passkey：</p>

___預編碼_4___

___HTMLTAG_759__HTMLTAG_760___如果存在則跳過：</strong> 如果您想在使用者已擁有金鑰時跳過註冊：</p>

___預編碼_5___

___HTMLTAG_763__HTMLTAG_764___JavaScript 整合：___HTMLTAG_765__HTMLTAG_766___

___預編碼_6___

___HTMLTAG_767__HTMLTAG_768___5。 Kerberos 驗證___HTMLTAG_769__HTMLTAG_770___

<p>Kerberos 允許登入網域（Windows AD、MIT Kerberos）的使用者自動<strong>單一登入__HTMLTAG_773___。使用者無需輸入憑證 - 瀏覽器自動發送 Kerberos 票證。 </p>

___HTMLTAG_775__HTMLTAG_776___5.1 Kerberos 伺服器設定___HTMLTAG_777__HTMLTAG_778___

<p>請求：</p>
<ul>
<li>KDC（金鑰分發中心）正在執行 — Active Directory 或 MIT Kerberos</li>
<li>Keycloak 服務的 SPN（服務主體編號）</li>
<li>Keycloak 的 Keytab 檔案</li>
</ul>

___預編碼_7___

___HTMLTAG_789__HTMLTAG_790___5.2 為 Kerberos 設定 Keycloak___HTMLTAG_791__HTMLTAG_792___

___HTMLTAG_793__HTMLTAG_794___選項 1：Kerberos 使用者儲存提供者___HTMLTAG_795__HTMLTAG_796___<ol>
<li>到 <strong>使用者聯合 → 新增供應商 → Kerberos___HTMLTAG_800__HTMLTAG_801___
<li>配置：
    <ul>
    ___HTMLTAG_804__HTMLTAG_805___Kerberos 領域</strong>：<code>EXAMPLE.COM___HTMLTAG_808__HTMLTAG_809___
    ___HTMLTAG_810__HTMLTAG_811___伺服器主體</strong>：<code>HTTP/keycloak.example.com@EXAMPLE.COM___HTMLTAG_814__HTMLTAG_815___
    ___HTMLTAG_816__HTMLTAG_817___按鍵選項卡</strong>：<code>/etc/keycloak/keycloak.keytab___HTMLTAG_820__HTMLTAG_821___
    ___HTMLTAG_822__HTMLTAG_823___允許 Kerberos 驗證</strong>：開啟</li>
    ___HTMLTAG_826__HTMLTAG_827___使用 Kerberos 進行密碼驗證</strong>：開</li>
    ___HTMLTAG_830__HTMLTAG_831___更新首次登入</strong>：開啟</li>
    </ul>
</li>
</ol>

___HTMLTAG_837__HTMLTAG_838___選項 2：LDAP + Kerberos (Active Directory)___HTMLTAG_839__HTMLTAG_840___

<ol>
<li>前往 <strong>使用者聯合 → 新增供應商 → LDAP___HTMLTAG_844__HTMLTAG_845___
<li>為 AD 設定 LDAP 連線</li>
<li>啟用 <strong>允許 Kerberos 驗證___HTMLTAG_850__HTMLTAG_851___
<li>輸入 Kerberos 領域、伺服器主體、金鑰選項卡</li>
</ol>

___HTMLTAG_855__HTMLTAG_856___5.3 在瀏覽器流中啟用 Kerberos____HTMLTAG_857__HTMLTAG_858___

<ol>
<li>轉到 <strong>驗證→流→瀏覽器</strong>（或自訂流）</li>
<li>搜尋 <strong>Kerberos</strong> 執行</li>
<li>將要求從 <code>已停用</code> 更改為 <code>替代___HTMLTAG_872__HTMLTAG_873___
</ol>

___預編碼_8___

___HTMLTAG_875__HTMLTAG_876___5.4 跨領域信任___HTMLTAG_877__HTMLTAG_878___

<p>允許一個 Kerberos 領域的使用者信任另一個領域：</p>

___預編碼_9___

___HTMLTAG_881__HTMLTAG_882___6。 X.509 用戶端憑證驗證____HTMLTAG_883__HTMLTAG_884___

<p>X.509 允許使用 <strong> 用戶端憑證</strong> 進行驗證 — 常見於企業、政府或 mTLS 環境中。 </p>

___HTMLTAG_889__HTMLTAG_890___6.1 將 X.509 新增至瀏覽器流程___HTMLTAG_891__HTMLTAG_892___

<ol>
<li>重複瀏覽器流程 → <code>使用 X.509 的瀏覽器___HTMLTAG_896__HTMLTAG_897___
<li>新增 <code>X509/驗證使用者名稱表單</code>至流程</li>
</ol>

___預編碼_10___

___HTMLTAG_903__HTMLTAG_904___6.2 設定 X.509 驗證器___HTMLTAG_905__HTMLTAG_906___

<p>點選 <code>X509/驗證使用者名稱表單</code>:</p> 旁邊的 ⚙️<table>
<thead>
___HTMLTAG_913__HTMLTAG_914___設定____HTMLTAG_915__HTMLTAG_916___說明____HTMLTAG_917__HTMLTAG_918___範例____HTMLTAG_919__HTMLTAG_920___
</thead>
<tbody>
___HTMLTAG_923__HTMLTAG_924__HTMLTAG_925___使用者身分來源___HTMLTAG_926__HTMLTAG_927__HTMLTAG_928___憑證中用於識別使用者的欄位____HTMLTAG_929__ HTMLTAG_930__HTMLTAG_931____主題的通用名稱</code>、<code>主題的電子郵件___HTMLTAG_934__HTMLTAG_935__HTMLTAG_936___
___HTMLTAG_937__HTMLTAG_938__HTMLTAG_939___將來源對應到使用者屬性___HTMLTAG_940__HTMLTAG_941__HTMLTAG_942___將身分來源映射到使用者屬性____HTMLTAG_943__HTMLTAG_944__HTMLTAG_945___使用者名稱或電子郵件___HTMLTAG_946__HTMLTAG_947__HTMLTAG_948___
___HTMLTAG_949__HTMLTAG_950__HTMLTAG_951___正規表示式___HTMLTAG_952__HTMLTAG_953__HTMLTAG_954___正規表示式從憑證中擷取身分字段___HTMLTAG_955__HTMLTAG_956__HTMLTAG_957___CN=(.*?)(?:,\|$)___HTMLTAG_958__HTMLTAG_959__HTMLTAG_960___
___HTMLTAG_961__HTMLTAG_962__HTMLTAG_963___CRL檢查已啟用___HTMLTAG_964__HTMLTAG_965__HTMLTAG_966___檢查憑證撤銷清單___HTMLTAG_967__HTMLTAG_968__HTMLTAG_969___開啟___HTMLTAG_970__HTMLTAG_971__HT
___HTMLTAG_973__HTMLTAG_974__HTMLTAG_975___CRL 分發點___HTMLTAG_976__HTMLTAG_977__HTMLTAG_978___URL或路徑CRL</td><td><code>ldap://ca.example.com/CN=...</code>___HTMLTAG_983__HTMLTAG_984___
___HTMLTAG_985__HTMLTAG_986__HTMLTAG_987___OCSP檢查已啟用___HTMLTAG_988__HTMLTAG_989__HTMLTAG_990___檢查線上憑證狀態協定___HTMLTAG_991__HTMLTAG_992__HTMLTAG_993___開啟___HTMLTAG_994__HTMLTAG_995__HTTAG_995__
___HTMLTAG_997__HTMLTAG_998__HTMLTAG_999___OCSP 回應程式 URI___HTMLTAG_1000__HTMLTAG_1001__HTMLTAG_1002___OCSP 回應程序URL___HTMLTAG_1003__HTMLTAG_1004__HTMLTAG_1005__URL_1___>___HTMLTAG_1006__HTMLTAG_1007___
___HTMLTAG_1008__HTMLTAG_1009__HTMLTAG_1010___憑證金鑰使用___HTMLTAG_1011__HTMLTAG_1012__HTMLTAG_1013___所需金鑰使用強制____HTMLTAG_1014__HTMLTAG_1015__HTMLTAG_1016___數位簽章____HTMLTAG_1017__HTMLTAG_1018__HTMLTAG_1019___
___HTMLTAG_1020__HTMLTAG_1021__HTMLTAG_1022___憑證擴充密鑰用法___HTMLTAG_1023__HTMLTAG_1024__HTMLTAG_1025___擴充擴充金鑰用法___HTMLTAG_1026__HTMLTAG_1027__HTMLTAG_1028___客戶端驗證___HTMLTAG_1029__HTMLTAG_1030__HTMLTAG_1031___
___HTMLTAG_1032__HTMLTAG_1033__HTMLTAG_1034___憑證策略驗證模式___HTMLTAG_1035__HTMLTAG_1036__HTMLTAG_1037___驗證憑證策略____HTMLTAG_1038__HTMLTAG_1039__HTMLTAG_1040___否指定___HTMLTAG_1041__HTMLTAG_1042__HTMLTAG_1043___
</tbody>
</table>

___HTMLTAG_1046__HTMLTAG_1047___6.3 憑證對應策略___HTMLTAG_1048__HTMLTAG_1049___

<p>有多種方法可以將憑證對應到Keycloak使用者：</p>

<pre><code class="language-text"># 1. Subject's Common Name → Username
# Certificate: CN=john.doe, OU=Engineering, O=Example Corp
# → username: john.doe

# 2. Subject's e-mail → Email
# Certificate: emailAddress=john@example.com
# → email: john@example.com

# 3. Serial Number → User Attribute
# Certificate: Serial=1A2B3C4D
# → user attribute "x509_serial" = "1A2B3C4D"

# 4. SHA-256 Certificate Thumbprint → User Attribute
# Certificate SHA-256: ab:cd:ef:12:34:...
# → user attribute "x509_thumbprint" = "ab:cd:ef:12:34:..."

# 5. Subject's DN với regex
# Certificate: CN=john.doe, OU=Engineering, O=Example Corp, C=VN
# Regex: CN=(.*?)(?:,|$)
# → Extracted: john.doe</code></pre>

___HTMLTAG_1052__HTMLTAG_1053___6.4 CRL 和 OCSP 檢查___HTMLTAG_1054__HTMLTAG_1055___

<p>確保憑證未被撤銷：</p>___HTMLTAG_1058__HTMLTAG_1059___CRL（憑證撤銷清單）：___HTMLTAG_1060__HTMLTAG_1061___
<ul>
<li>Keycloak 從配置的 URI 下載並快取 CRL</li>
<li>檢查客戶端憑證的序號是否在CRL中__HTMLTAG_1066___
<li>如果 CRL 不可用且 <code>CRL 檢查已啟用=開</code> → 驗證失敗</li>
</ul>

___HTMLTAG_1072__HTMLTAG_1073___OCSP（線上憑證狀態協定）：___HTMLTAG_1074__HTMLTAG_1075___
<ul>
<li>即時查看憑證狀態</li>
<li>Keycloak 向 OCSP 回應程序發送請求__HTMLTAG_1080___
<li>比單獨檢查的 CRL 更快</li>
<li>缺點：取決於 OCSP 伺服器可用性</li>
</ul>

<pre><code class="language-bash"># Test OCSP check
openssl ocsp \
  -issuer ca.pem \
  -cert client.pem \
  -url http://ocsp.example.com \
  -resp_text

# Test certificate info
openssl x509 -in client.pem -noout -subject -serial -fingerprint -sha256</code></pre>

___HTMLTAG_1086__HTMLTAG_1087___6.5 Keycloak mTLS 設定___HTMLTAG_1088__HTMLTAG_1089___

<p>為了讓Keycloak接收客戶端證書，需要直接配置反向代理或Keycloak：</p>

<pre><code class="language-yaml"># Docker Compose — Keycloak với mTLS qua nginx
services:
  nginx:
    image: nginx:latest
    ports:
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
      - ./certs/server.crt:/etc/nginx/certs/server.crt
      - ./certs/server.key:/etc/nginx/certs/server.key
      - ./certs/ca.crt:/etc/nginx/certs/ca.crt
    depends_on:
      - keycloak

  keycloak:
    image: quay.io/keycloak/keycloak:26.0
    command: start --proxy-headers xforwarded
    environment:
      KC_HOSTNAME: keycloak.example.com
      KC_HTTP_ENABLED: "true"
      KC_PROXY_HEADERS: xforwarded
      KEYCLOAK_ADMIN: admin
      KEYCLOAK_ADMIN_PASSWORD: admin</code></pre>

<pre><code class="language-nginx"># nginx.conf — Forward client certificate
server {
    listen 443 ssl;
    server_name keycloak.example.com;

    ssl_certificate /etc/nginx/certs/server.crt;
    ssl_certificate_key /etc/nginx/certs/server.key;
    ssl_client_certificate /etc/nginx/certs/ca.crt;
    ssl_verify_client optional;

    location / {
        proxy_pass http://keycloak:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port 443;
        
        # Forward client certificate
        proxy_set_header ssl-client-cert $ssl_client_escaped_cert;
    }
}</code></pre>

___HTMLTAG_1092__HTMLTAG_1093___7。比較 MFA 方法___HTMLTAG_1094__HTMLTAG_1095___

<table>
<thead>
___HTMLTAG_1098__HTMLTAG_1099___方法___HTMLTAG_1100__HTMLTAG_1101___安全保密___HTMLTAG_1102__HTMLTAG_1103___UX ___HTMLTAG_1104__HTMLTAG_1105___防網釣___HTMLTAG_1106__HTMLTAG_1107___使用案例___HTMLTAG_1108__HTMLTAG_1109___
</thead>
<tbody>
___HTMLTAG_1112__HTMLTAG_1113__HTMLTAG_1114___TOTP/HOTP___HTMLTAG_1115__HTMLTAG_1116__HTMLTAG_1117___中央平均___HTMLTAG_1118_ _HTMLTAG_1119___好___HTMLTAG_1120__HTMLTAG_1121___否___HTMLTAG_1122__HTMLTAG_1123___流行，易於部署___HTMLTAG_1124__HTMLTAG_1125___
___HTMLTAG_1126__HTMLTAG_1127__HTMLTAG_1128___WebAuthn (MFA)___HTMLTAG_1129__HTMLTAG_1130__HTMLTAG_1131___高___HTMLTAG_1132__HTMLTAG_1133____好___HTMLT AG_1134__HTMLTAG_1135___是___HTMLTAG_1136__HTMLTAG_1137___企業、合規性___HTMLTAG_1138__HTMLTAG_1139___
___HTMLTAG_1140__HTMLTAG_1141__HTMLTAG_1142___密鑰____HTMLTAG_1143__HTMLTAG_1144__HTMLTAG_1145___非常高___HTMLTAG_1146__HTM LTAG_1147___導出身分___HTMLTAG_1148__HTMLTAG_1149___是___HTMLTAG_1150__HTMLTAG_1151___消費者+企業___HTMLTAG_1152__HTMLTAG_1153___
___HTMLTAG_1154__HTMLTAG_1155__HTMLTAG_1156___Kerberos___HTMLTAG_1157__HTMLTAG_1158__HTMLTAG_1159___高___HTML TAG_1160__HTMLTAG_1161___優秀（透明）___HTMLTAG_1162__HTMLTAG_1163___是（域）___HTMLTAG_1164__HTMLTAG_1165___企業、Windows域___HTMLTAG_1166__HTMLTAG_1167___
___HTMLTAG_1168__HTMLTAG_1169__HTMLTAG_1170___X.509憑證___HTMLTAG_1171__HTMLTAG_1172__HTMLTAG_1173___非常高___HTMLTAG_1174__HTMLTAG_1175___透明___HTMLTAG _1176__HTMLTAG_1177___是___HTMLTAG_1178__HTMLTAG_1179___政府、軍事、銀行___HTMLTAG_1180__HTMLTAG_1181___
</tbody>
</table>

___HTMLTAG_1184__HTMLTAG_1185___8。摘要___HTMLTAG_1186__HTMLTAG_1187___<table>
<thead>
___HTMLTAG_1190__HTMLTAG_1191___概念____HTMLTAG_1192__HTMLTAG_1193___說明____HTMLTAG_1194__HTMLTAG_1195___
</thead>
<tbody>
___HTMLTAG_1198__HTMLTAG_1199__HTMLTAG_1200___OTP 策略___HTMLTAG_1201__HTMLTAG_1202__HTMLTAG_1203____TOTP/HOTP 設定 — 演算法、數位、週期、前瞻____1203____TOTP/HOTP 設定 — 演算法、數字、週期、前瞻____10GML
___HTMLTAG_1206__HTMLTAG_1207__HTMLTAG_1208___恢復代碼___HTMLTAG_1209__HTMLTAG_1210__HTMLTAG_1211___設備遺失時的備份代碼 OTP____HTMLTAG_1212__HT
___HTMLTAG_1214__HTMLTAG_1215__HTMLTAG_1216___WebAuthn___HTMLTAG_1217__HTMLTAG_1218__HTMLTAG_1219____FIDO2 安全密鑰 — 防網路釣魚 MFA_<td>_FIDO2 安全密鑰 —ML201 MFA____HTMLTAG_120120120120120120120201202012012012020120202020
___HTMLTAG_1222__HTMLTAG_1223__HTMLTAG_1224___密鑰____HTMLTAG_1225__HTMLTAG_1226__HTMLTAG_1227___無密碼身份驗證 - 可發現的憑證 + 生物辨識____HTMLTAG_1288___無密碼驗證
___HTMLTAG_1230__HTMLTAG_1231__HTMLTAG_1232___Kerberos___HTMLTAG_1233__HTMLTAG_1234__HTMLTAG_1235___網域使用者透明 SSO____HTMLTAG_1236__HTMLTAG_1237___
___HTMLTAG_1238__HTMLTAG_1239__HTMLTAG_1240___X.509___HTMLTAG_1241__HTMLTAG_1242__HTMLTAG_1243___客戶端憑證驗證 — mTLS___HTMLTAG_12444HTTAGMLTAG_MLTAGMLTAG
___HTMLTAG_1246__HTMLTAG_1247__HTMLTAG_1248___CRL/OCSP___HTMLTAG_1249__HTMLTAG_1250__HTMLTAG_1251___憑證撤銷檢查___HTMLTAG_1252__HTMLTAG_1253___
</tbody>
</table>