---
id: 019d8b30-b104-7001-c001-e0c5f8100104
title: 第 4 課：管理使用者、群組和使用者設定檔
slug: bai-4-quan-ly-users-groups-va-user-profile
description: 建立和管理使用者、設定憑證、使用者屬性架構、使用者設定檔配置、自訂屬性和驗證器、建立群組和子群組、群組屬性、群組角色對應、使用者自行註冊、所需操作、模擬和個人資料管理。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: 第 1 部分：Keycloak 平台
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<div style="text-align: center; margin: 2rem 0;">
<img src="/storage/uploads/2026/03/keycloak-users-groups-roles-2026.png" alt="Keycloak Users, Groups, Roles Hierarchy" style="max-width: 800px; width: 100%; border-radius: 12px;" />
___HTMLTAG_2__HTMLTAG_3___Keycloak 領域中的使用者、群組和角色分層模型___HTMLTAG_4__HTMLTAG_5___
</div>

___HTMLTAG_7__HTMLTAG_8___1。管理使用者___HTMLTAG_9__HTMLTAG_10___

<p>Users 是 Keycloak 的中心實體 — 代表可以登入系統的使用者。每個使用者都屬於特定領域，並且可以具有屬性、憑證、角色和群組成員資格。 </p>

___HTMLTAG_13__HTMLTAG_14___1.1 透過管理控制台建立使用者___HTMLTAG_15__HTMLTAG_16___
<ol>
___HTMLTAG_18__HTMLTAG_19___從領域選擇器中選擇領域（例如 <code>我的公司</code>）___HTMLTAG_22__HTMLTAG_23___
___HTMLTAG_24__HTMLTAG_25___點選側邊欄中的<strong>使用者_</strong>___HTMLTAG_28__HTMLTAG_29___
___HTMLTAG_30__HTMLTAG_31___點選 <strong>新增使用者___HTMLTAG_33__HTMLTAG_34__HTMLTAG_35___
___HTMLTAG_36__HTMLTAG_37___填寫資料：</p>
<ul>
___HTMLTAG_40__HTMLTAG_41___使用者名稱</strong>：<code>john.doe</code>（必要）</li>
___HTMLTAG_46__HTMLTAG_47___電子郵件</strong>：<code>john.doe@mycompany.com___HTMLTAG_50__HTMLTAG_51___
___HTMLTAG_52__HTMLTAG_53___名字</strong>：<code>約翰___HTMLTAG_56__HTMLTAG_57___
___HTMLTAG_58__HTMLTAG_59___姓</strong>：<code>Doe___HTMLTAG_62__HTMLTAG_63___
___HTMLTAG_64__HTMLTAG_65___電子郵件已驗證</strong>：開啟（如果電子郵件已驗證）</li>
___HTMLTAG_68__HTMLTAG_69___已啟用</strong>：開啟</li>
</ul>
</li>
___HTMLTAG_74__HTMLTAG_75___點選 <strong>建立___HTMLTAG_77__HTMLTAG_78__HTMLTAG_79___
</ol>

___HTMLTAG_81__HTMLTAG_82___1.2 透過管理 CLI 建立使用者___HTMLTAG_83__HTMLTAG_84___
___預編碼_0___

___HTMLTAG_85__HTMLTAG_86___1.3 透過 REST API 建立使用者___HTMLTAG_87__HTMLTAG_88___
___預編碼_1___

___HTMLTAG_89__HTMLTAG_90___2。設定憑證___HTMLTAG_91__HTMLTAG_92___

___HTMLTAG_93__HTMLTAG_94___2.1 透過管理控制台設定密碼___HTMLTAG_95__HTMLTAG_96___
<ol>
___HTMLTAG_98__HTMLTAG_99___轉到 <strong>使用者</strong> → 選擇使用者 → 選項卡 <strong>憑證___HTMLTAG_103__HTMLTAG_104__HTMLTAG_105______
___HTMLTAG_106__HTMLTAG_107___點選<strong>設定密碼___HTMLTAG_109__HTMLTAG_110__HTMLTAG_111___
___HTMLTAG_112__HTMLTAG_113___輸入新密碼___HTMLTAG_114__HTMLTAG_115___
___HTMLTAG_116__HTMLTAG_117__HTMLTAG_118___暫時</strong>：開（使用者首次登入時必須變更密碼）或關閉（固定密碼）___HTMLTAG_120__HTMLTAG_121___
___HTMLTAG_122__HTMLTAG_123___點選 <strong>儲存___HTMLTAG_125__HTMLTAG_126__HTMLTAG_127___
</ol>

___HTMLTAG_129__HTMLTAG_130___2.2 透過 CLI 設定密碼___HTMLTAG_131__HTMLTAG_132___
___預編碼_2___

___HTMLTAG_133__HTMLTAG_134___2.3 透過 REST API 設定密碼___HTMLTAG_135__HTMLTAG_136___
___預編碼_3______HTMLTAG_137__HTMLTAG_138___2.4 密碼策略___HTMLTAG_139__HTMLTAG_140___
<p>在 <strong>身份驗證</strong> → <strong>策略</strong> → <strong>密碼策略</strong>:___1TAG____1481TAG_14747________:___
<table>
<thead>
___HTMLTAG_151__HTMLTAG_152___策略___HTMLTAG_153__HTMLTAG_154___說明____HTMLTAG_155__HTMLTAG_156___範例值____HTMLTAG_157__HTMLTAG_158___
</thead>
<tbody>
___HTMLTAG_161__HTMLTAG_162___最小長度___HTMLTAG_163__HTMLTAG_164___最小長度___HTMLTAG_165__HTMLTAG_166___8___HTMLTAG_167__HTMLTAG_168___
___HTMLTAG_169__HTMLTAG_170___大寫字元___HTMLTAG_171__HTMLTAG_172___大寫字元____HTMLTAG_173__HTMLTAG_174___1___HTMLTAG_175__HTMLTAG_176___
___HTMLTAG_177__HTMLTAG_178___小寫字元____HTMLTAG_179__HTMLTAG_180___小寫字元____HTMLTAG_181__HTMLTAG_182___1___HTMLTAG_183__HTMLTAG_184___
___HTMLTAG_185__HTMLTAG_186___數字____HTMLTAG_187__HTMLTAG_188___請求編號___HTMLTAG_189__HTMLTAG_190___1___HTMLTAG_191__HTMLTAG_192___
___HTMLTAG_193__HTMLTAG_194___特殊字元____HTMLTAG_195__HTMLTAG_196___需要特殊字元____HTMLTAG_197__HTMLTAG_198___1___HTMLTAG_199__HTMLTAG_200___
___HTMLTAG_201__HTMLTAG_202___不是使用者名稱___HTMLTAG_203__HTMLTAG_204___密碼不得與使用者名稱相同___HTMLTAG_205__HTMLTAG_206___-___HTMLTAG_207__HTMLTAG_208___
___HTMLTAG_209__HTMLTAG_210___不是電子郵件___HTMLTAG_211__HTMLTAG_212___密碼不得與電子郵件相同___HTMLTAG_213__HTMLTAG_214___-___HTMLTAG_215__HTMLTAG_216___
___HTMLTAG_217__HTMLTAG_218___密碼歷史記錄___HTMLTAG_219__HTMLTAG_220___不要重複使用舊密碼____HTMLTAG_221__HTMLTAG_222___3___HTMLTAG_223__HTMLTAG_224___
___HTMLTAG_225__HTMLTAG_226___密碼過期___HTMLTAG_227__HTMLTAG_228___密碼過期時間（天）___HTMLTAG_229__HTMLTAG_230___90___HTMLTAG_231__HTMLTAG_232___
___HTMLTAG_233__HTMLTAG_234___雜湊演算法___HTMLTAG_235__HTMLTAG_236___演算法雜湊密碼___HTMLTAG_237__HTMLTAG_238___argon2___HTMLTAG_239__HTMLTAG_240___
___HTMLTAG_241__HTMLTAG_242___雜湊迭代____HTMLTAG_243__HTMLTAG_244___雜湊輪次___HTMLTAG_245__HTMLTAG_246___5 (argon2)___HTMLTAG_247__HTMLTAG_248___
</tbody>
</table>

<p>透過 CLI 設定：</p>
___預編碼_4___

___HTMLTAG_253__HTMLTAG_254___3。使用者個人資料___HTMLTAG_255__HTMLTAG_256___

___HTMLTAG_257__HTMLTAG_258___使用者設定檔</strong> 是一項允許管理員定義使用者屬性架構的功能 - 控制使用者擁有哪些屬性、如何驗證這些屬性以及如何在介面上顯示這些屬性。 </p>

___HTMLTAG_261__HTMLTAG_262___3.1 啟用使用者設定檔___HTMLTAG_263__HTMLTAG_264___
<p>從 Keycloak 24+ 開始，預設啟用使用者設定檔。對於舊版本：</p>
<ol>
___HTMLTAG_268__HTMLTAG_269___轉至 <strong>領域設定</strong> → <strong>常規____HTMLTAG_273__HTMLTAG_274__HTMLTAG_275___
___HTMLTAG_276__HTMLTAG_277___查找 <strong>已啟用使用者個人資料</strong>：ON___HTMLTAG_280__HTMLTAG_281___
</ol><p>啟用後，存取<strong>領域設定</strong> → <strong>使用者個人資料</strong>進行設定.</p>

___HTMLTAG_289__HTMLTAG_290___3.2 屬性架構的定義___HTMLTAG_291__HTMLTAG_292___
<p>每個屬性都有設定：</p>
<ul>
___HTMLTAG_296__HTMLTAG_297__HTMLTAG_298___名稱</strong> — 屬性名稱（小寫，用於 API）___HTMLTAG_300__HTMLTAG_301___
___HTMLTAG_302__HTMLTAG_303__HTMLTAG_304___顯示名稱</strong> — UI 顯示名稱（國際化支援：<code>${profile.attribute.department}_____MLTAG_307___）___MLGMLG107____4_307___)___
___HTMLTAG_310__HTMLTAG_311__HTMLTAG_312___權限</strong> — 誰可以查看/編輯（管理員、使用者）___HTMLTAG_314__HTMLTAG_315___
___HTMLTAG_316__HTMLTAG_317__HTMLTAG_318___驗證</strong> — 驗證值的規則___HTMLTAG_320__HTMLTAG_321___
___HTMLTAG_322__HTMLTAG_323__HTMLTAG_324___註解</strong> — 用於 UI 渲染的元資料____HTMLTAG_326__HTMLTAG_327___
___HTMLTAG_328__HTMLTAG_329__HTMLTAG_330___必要</strong> — 使用者、管理員或兩者都需要___HTMLTAG_332__HTMLTAG_333___
___HTMLTAG_334__HTMLTAG_335__HTMLTAG_336___多重值</strong> — 允許多個值___HTMLTAG_338__HTMLTAG_339___
</ul>

___HTMLTAG_341__HTMLTAG_342___3.3 內建屬性___HTMLTAG_343__HTMLTAG_344___
<p>Keycloak 具有可用屬性：</p>
<table>
<thead>
___HTMLTAG_349__HTMLTAG_350___屬性____HTMLTAG_351__HTMLTAG_352___說明____HTMLTAG_353__HTMLTAG_354___預設____HTMLTAG_355__HTMLTAG_356___
</thead>
<tbody>
___HTMLTAG_359__HTMLTAG_360___使用者名稱____HTMLTAG_361__HTMLTAG_362___使用者名稱___HTMLTAG_363__HTMLTAG_364___必填，唯一___HTMLTAG_365__HTMLTAG_366___
___HTMLTAG_367__HTMLTAG_368___電子郵件___HTMLTAG_369__HTMLTAG_370___電子郵件地址___HTMLTAG_371__HTMLTAG_372___必填（可以關閉）___HTMLTAG_373__HTMLTAG_374___
___HTMLTAG_375__HTMLTAG_376___名字___HTMLTAG_377__HTMLTAG_378___姓名___HTMLTAG_379__HTMLTAG_380___必填___HTMLTAG_381__HTMLTAG_382___
___HTMLTAG_383__HTMLTAG_384___姓氏___HTMLTAG_385__HTMLTAG_386___姓氏___HTMLTAG_387__HTMLTAG_388___必填___HTMLTAG_389__HTMLTAG_390___
</tbody>
</table>___HTMLTAG_393__HTMLTAG_394___3.4 建立自訂屬性___HTMLTAG_395__HTMLTAG_396___
<p>建立屬性範例 <code>phone_number</code>:</p>
<ol>
___HTMLTAG_402__HTMLTAG_403___轉至 <strong>領域設定</strong> → <strong>使用者個人資料____HTMLTAG_407__HTMLTAG_408__HTMLTAG_409___
___HTMLTAG_410__HTMLTAG_411___點選 <strong>建立屬性___HTMLTAG_413__HTMLTAG_414__HTMLTAG_415___
___HTMLTAG_416__HTMLTAG_417___設定：</p>
<ul>
___HTMLTAG_420__HTMLTAG_421___姓名</strong>：<code>電話號碼___HTMLTAG_424__HTMLTAG_425___
___HTMLTAG_426__HTMLTAG_427___顯示名稱</strong>：<code>電話號碼___HTMLTAG_430__HTMLTAG_431___
___HTMLTAG_432__HTMLTAG_433___屬性組</strong>：（選擇或建立新的）</li>
___HTMLTAG_436__HTMLTAG_437___啟用時間</strong>：總是</li>
___HTMLTAG_440__HTMLTAG_441___必要</strong>：使用者必需</li>
</ul>
</li>
</ol>

___HTMLTAG_447__HTMLTAG_448___3.5 驗證器___HTMLTAG_449__HTMLTAG_450___
<p>Keycloak 提供了許多驗證器來檢查屬性值：</p>
<table>
<thead>
___HTMLTAG_455__HTMLTAG_456___驗證器___HTMLTAG_457__HTMLTAG_458___說明____HTMLTAG_459__HTMLTAG_460___設定範例____HTMLTAG_461__HTMLTAG_462___
</thead>
<tbody>
___HTMLTAG_465__HTMLTAG_466___長度____HTMLTAG_467__HTMLTAG_468___長度限制____HTMLTAG_469__HTMLTAG_470___最小值：3，最大值：50____HTMLTAG_471__HTMLTAG_472___
___HTMLTAG_473__HTMLTAG_474___電子郵件___HTMLTAG_475__HTMLTAG_476___檢查電子郵件格式___HTMLTAG_477__HTMLTAG_478___-___HTMLTAG_479__HTMLTAG_480___
___HTMLTAG_481__HTMLTAG_482___模式___HTMLTAG_483__HTMLTAG_484___檢查正規表示式模式___HTMLTAG_485__HTMLTAG_486___^\\+[0-9]{10,15}$<td>^\\MLU874________
___HTMLTAG_489__HTMLTAG_490___整數___HTMLTAG_491__HTMLTAG_492___整數檢定___HTMLTAG_493__HTMLTAG_494___最小值：0，最大值：999999____HTMLTAG_495__61G_495__6
___HTMLTAG_497__HTMLTAG_498___雙___HTMLTAG_499__HTMLTAG_500___測試實數___HTMLTAG_501__HTMLTAG_502___最小值：0.0，最大值：100.0____HTMLTAG_503__4___MLG_503__41TAG_503__4___
___HTMLTAG_505__HTMLTAG_506___uri___HTMLTAG_507__HTMLTAG_508___檢查有效網址___HTMLTAG_509__HTMLTAG_510___-___HTMLTAG_511__HTMLTAG_512___
___HTMLTAG_513__HTMLTAG_514___選項___HTMLTAG_515__HTMLTAG_516___限制清單中的值____HTMLTAG_517__HTMLTAG_518___["vn","us","jp"]___HTMLTAG_51920___MLTAG_51920___
___HTMLTAG_521__HTMLTAG_522___人名禁止字元___HTMLTAG_523__HTMLTAG_524___禁止名稱中的特殊字元__HTMLTAG_525__HTMLTAG_526___-___HTMLTAG_527__HTMLTAG_528___
___HTMLTAG_529__HTMLTAG_530___使用者名稱禁止字元___HTMLTAG_531__HTMLTAG_532___阻止使用者名稱中的特殊字元___HTMLTAG_533__HTMLTAG_534___-___HTMLTAG_535__HTMLTAG_536___
___HTMLTAG_537__HTMLTAG_538___多值___HTMLTAG_539__HTMLTAG_540___驗證數量值___HTMLTAG_541__HTMLTAG_542___最小值：1，最大值：5___HTMLTAG_543__HTMLTAG_544______
</tbody>
</table><p>範例設定屬性 <code>phone_number</code> 透過 JSON（使用者設定檔標籤 → JSON 編輯器）：</p>
___預編碼_5___

___HTMLTAG_551__HTMLTAG_552___3.6 UI 渲染的註解___HTMLTAG_553__HTMLTAG_554___
<p>註解允許自訂屬性在註冊/帳戶頁面上的顯示方式：</p>
<table>
<thead>
___HTMLTAG_559__HTMLTAG_560___註解____HTMLTAG_561__HTMLTAG_562___說明____HTMLTAG_563__HTMLTAG_564___值____HTMLTAG_565__HTMLTAG_566___
</thead>
<tbody>
___HTMLTAG_569__HTMLTAG_570___輸入類型____HTMLTAG_571__HTMLTAG_572___HTML 輸入類型___HTMLTAG_573__HTMLTAG_574___文字、電子郵件、電話、號碼、日期、選擇、多選、文字區域、html5-___MLMLU​​D15757572______
___HTMLTAG_577__HTMLTAG_578___inputHelperTextBefore___HTMLTAG_579__HTMLTAG_580___輸入前顯示的幫助文字____HTMLTAG_581__HTMLTAG_582_______58382____5835
___HTMLTAG_585__HTMLTAG_586___inputHelperTextAfter___HTMLTAG_587__HTMLTAG_588___輸入後顯示的幫助文字____HTMLTAG_589__HTMLTAG_590______文字_______HTMLTAG_591__HTMLTAG_591_____
___HTMLTAG_593__HTMLTAG_594___inputOptionsFromValidation___HTMLTAG_595__HTMLTAG_596___從驗證器取得選項____HTMLTAG_597__HTMLTAG_598________名稱（例如「選項」）___HTMLTAG_597__HTMLTAG_598________7名稱（例如「選項」）___HTMLTAG_5911060160____
</tbody>
</table>

___HTMLTAG_603__HTMLTAG_604___3.7 漸進分析___HTMLTAG_605__HTMLTAG_606___
<p>漸進式分析允許逐步收集使用者訊息，而不是在註冊時要求全部資訊：</p>
<ol>
___HTMLTAG_610__HTMLTAG_611___使用 <strong>必需</strong> 建立屬性 → <strong>使用者必需</strong>：ON___HTMLTAG_616__HTMLTAG_617___
___HTMLTAG_618__HTMLTAG_619___當使用者登入時，如果該屬性沒有值，Keycloak將顯示一個要求填寫的表單___HTMLTAG_620__HTMLTAG_621___
___HTMLTAG_622__HTMLTAG_623___與 <strong>「啟用時」範圍</strong> — 僅當客戶端請求特定範圍時才需要屬性____HTMLTAG_626__HTMLTAG_627___
</ol>

<p>例如：僅當客戶端請求範圍 <code>phone</code>:</p> 時，才需要屬性 <code>phone_number</code>
___預編碼_6___

___HTMLTAG_635__HTMLTAG_636___4。群組和子群組___HTMLTAG_637__HTMLTAG_638___

<p>群組有助於組織使用者並將角色和屬性一次應用於使用者群組，而不是單獨分配每個使用者。 </p>

___HTMLTAG_641__HTMLTAG_642___4.1 透過管理控制台建立群組___HTMLTAG_643__HTMLTAG_644___
<ol>
___HTMLTAG_646__HTMLTAG_647___點選側邊欄中的<strong>群組_</strong>___HTMLTAG_650__HTMLTAG_651___
___HTMLTAG_652__HTMLTAG_653___點選 <strong>建立群組___HTMLTAG_655__HTMLTAG_656__HTMLTAG_657___
___HTMLTAG_658__HTMLTAG_659___輸入<strong>名稱</strong>：<code>工程___HTMLTAG_663__HTMLTAG_664__HTMLTAG_665___
___HTMLTAG_666__HTMLTAG_667___點選 <strong>建立___HTMLTAG_669__HTMLTAG_670__HTMLTAG_671___
</ol>___HTMLTAG_673__HTMLTAG_674___4.2 建立子群組___HTMLTAG_675__HTMLTAG_676___
<p>子組繼承父組的屬性與角色映射：</p>
<ol>
___HTMLTAG_680__HTMLTAG_681___點選群組<code>工程___HTMLTAG_683__HTMLTAG_684__HTMLTAG_685___
___HTMLTAG_686__HTMLTAG_687___點選 <strong>建立子群組___HTMLTAG_689__HTMLTAG_690__HTMLTAG_691___
___HTMLTAG_692__HTMLTAG_693___輸入名稱：<code>後端</code>、<code>前端</code>、<code>DevOps___HTHTMLTAG_697___、<code>DevOps___HT​​MLTAG_697___、_____70___________________
</ol>

<p>群組結構範例：</p>
___預編碼_7___

___HTMLTAG_705__HTMLTAG_706___4.3 透過 CLI 建立群組___HTMLTAG_707__HTMLTAG_708___
___預編碼_8___

___HTMLTAG_709__HTMLTAG_710___4.4 群組屬性___HTMLTAG_711__HTMLTAG_712___
<p>群組可以包含鍵值屬性 - 對於元資料、群組配置有用：</p>
___預編碼_9___

<p>透過管理控制台：點選群組 → 選項卡 <strong>屬性</strong> → 新增鍵值對.</p>

___HTMLTAG_719__HTMLTAG_720___4.5 將使用者新增至群組___HTMLTAG_721__HTMLTAG_722___
___預編碼_10___

___HTMLTAG_723__HTMLTAG_724___4.6 預設群組___HTMLTAG_725__HTMLTAG_726___
<p>建立帳戶或註冊時預設群組會自動新增使用者：</p>
<ol>
___HTMLTAG_730__HTMLTAG_731___轉至 <strong>群組___HTMLTAG_733__HTMLTAG_734__HTMLTAG_735___
___HTMLTAG_736__HTMLTAG_737___選擇要設為預設的群組___HTMLTAG_738__HTMLTAG_739___
___HTMLTAG_740__HTMLTAG_741___或前往 <strong>領域設定</strong> → <strong>使用者註冊</strong> → <strong>_746____使用者註冊</strong> → <strong>__
</ol>

<pre><code># Qua CLI
bin/kcadm.sh update realms/my-company -s 'defaultGroups=["/Engineering/Backend"]'</code></pre>

___HTMLTAG_751__HTMLTAG_752___5。所需操作___HTMLTAG_753__HTMLTAG_754___

<p>必要操作是使用者在成功登入之前必須執行的操作。 </p>___HTMLTAG_757__HTMLTAG_758___5.1 可用的必要操作清單___HTMLTAG_759__HTMLTAG_760___
<table>
<thead>
___HTMLTAG_763__HTMLTAG_764___操作___HTMLTAG_765__HTMLTAG_766___說明___HTMLTAG_767__HTMLTAG_768___
</thead>
<tbody>
___HTMLTAG_771__HTMLTAG_772___更新密碼___HTMLTAG_773__HTMLTAG_774___需要更改密碼___HTMLTAG_775__HTMLTAG_776___
___HTMLTAG_777__HTMLTAG_778___驗證電子郵件___HTMLTAG_779__HTMLTAG_780___驗證電子郵件___HTMLTAG_781__HTMLTAG_782___
___HTMLTAG_783__HTMLTAG_784___配置 OTP___HTMLTAG_785__HTMLTAG_786___設定 OTP (TOTP/HOTP)___HTMLTAG_787__HTMLTAG_788___
___HTMLTAG_789__HTMLTAG_790___更新個人資料____HTMLTAG_791__HTMLTAG_792___更新個人資料___HTMLTAG_793__HTMLTAG_794___
___HTMLTAG_795__HTMLTAG_796___條款與條件____HTMLTAG_797__HTMLTAG_798___接受使用條款____HTMLTAG_799__HTMLTAG_800___
___HTMLTAG_801__HTMLTAG_802___設定 WebAuthn___HTMLTAG_803__HTMLTAG_804___註冊設備 WebAuthn___HTMLTAG_805__HTMLTAG_806___
___HTMLTAG_807__HTMLTAG_808___更新使用者區域設定___HTMLTAG_809__HTMLTAG_810___選擇語言___HTMLTAG_811__HTMLTAG_812___
___HTMLTAG_813__HTMLTAG_814___刪除憑證___HTMLTAG_815__HTMLTAG_816___刪除舊憑證___HTMLTAG_817__HTMLTAG_818___
</tbody>
</table>

___HTMLTAG_821__HTMLTAG_822___5.2 指派所需操作___HTMLTAG_823__HTMLTAG_824___
<pre><code># Qua Admin Console:
# Users → chọn user → tab Details → Required user actions → chọn actions

# Qua CLI
bin/kcadm.sh update users/$USER_ID -r my-company \
  -s 'requiredActions=["UPDATE_PASSWORD","VERIFY_EMAIL","CONFIGURE_TOTP"]'

# Qua REST API
curl -s -X PUT \
  "http://localhost:8080/admin/realms/my-company/users/$USER_ID" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "requiredActions": ["UPDATE_PASSWORD", "VERIFY_EMAIL"]
  }'</code></pre>

___HTMLTAG_825__HTMLTAG_826___5.3 預設所需操作___HTMLTAG_827__HTMLTAG_828___
<p>在 <strong>驗證</strong> → <strong>所需操作</strong>:</p> 處為所有新使用者配置預設所需操作
<ul>
___HTMLTAG_836__HTMLTAG_837___啟用列 <strong>設定為預設操作</strong>所需操作___HTMLTAG_840__HTMLTAG_841___
___HTMLTAG_842__HTMLTAG_843___將自動為所有新使用者指派預設操作___HTMLTAG_844__HTMLTAG_845___
</ul>

___HTMLTAG_847__HTMLTAG_848___6。用戶自行註冊___HTMLTAG_849__HTMLTAG_850___

___HTMLTAG_851__HTMLTAG_852___6.1 啟用自行註冊___HTMLTAG_853__HTMLTAG_854___
<ol>
___HTMLTAG_856__HTMLTAG_857___转至 <strong>领域设置</strong> → <strong>登录____HTMLTAG_861__HTMLTAG_862__HTMLTAG_863___
___HTMLTAG_864__HTMLTAG_865___在 <strong>使用者註冊</strong>：在___HTMLTAG_868__HTMLTAG_869___
___HTMLTAG_870__HTMLTAG_871___登入頁面將顯示「註冊」連結___HTMLTAG_872__HTMLTAG_873___
</ol>___HTMLTAG_875__HTMLTAG_876___6.2 註冊驗證碼___HTMLTAG_877__HTMLTAG_878___
<p>要保護註冊表單免受機器人攻擊，請啟用 reCAPTCHA：</p>
<ol>
___HTMLTAG_882__HTMLTAG_883___透過 ___HTMLTAG_884__URL_1___>___HTMLTAG_885__HTMLTAG_886___ 註冊 Google reCAPTCHA
___HTMLTAG_887__HTMLTAG_888___轉至 <strong>驗證</strong> → <strong>流程</strong> → ___HTMLTAG_893註冊1___流程</strong> → ___HTMLTA_____930___註冊____
___HTMLTAG_897__HTMLTAG_898___查找步驟 <strong>reCAPTCHA</strong> → 從「停用」切換到 <strong>___必需___HTMLTAG_902__HTMLTAG_9<strong>___必要___HTMLTAG_902__HTMLTAG_9___HTMLTA1
___HTMLTAG_905__HTMLTAG_906___點選齒輪圖示 → 輸入 <strong>網站金鑰</strong> 和 <strong>秘密金鑰</strong> 來自 Google___HTMLTAG_911__10G_</strong> 來自 Google___HTMLTAG_911__19019112
</ol>

___HTMLTAG_914__HTMLTAG_915___6.3 自訂註冊表___HTMLTAG_916__HTMLTAG_917___
<p>透過使用者設定文件，您可以控制註冊表單上顯示哪些欄位：</p>
<ul>
___HTMLTAG_921__HTMLTAG_922___具有 <strong>使用者必要的屬性</strong>：ON 將顯示在表單上___HTMLTAG_925__HTMLTAG_926___
___HTMLTAG_927__HTMLTAG_928___根據使用者設定檔設定中的<strong>排序順序</strong>顯示順序___HTMLTAG_931__HTMLTAG_932___
___HTMLTAG_933__HTMLTAG_934___使用 <strong>屬性組</strong>對相關欄位進行分組___HTMLTAG_937__HTMLTAG_938___
</ul>

___HTMLTAG_940__HTMLTAG_941___7。冒充___HTMLTAG_942__HTMLTAG_943___

<p>模擬允許管理員以另一個使用者名稱「偽造」登入 - 對於偵錯和支援很有用。 </p>

___HTMLTAG_946__HTMLTAG_947___7.1 使用模擬___HTMLTAG_948__HTMLTAG_949___
<ol>
___HTMLTAG_951__HTMLTAG_952___轉到 <strong>使用者</strong> → 找到您需要模擬的使用者____HTMLTAG_955__HTMLTAG_956___
___HTMLTAG_957__HTMLTAG_958___點選下拉選單（kebab 選單）→ <strong>模擬___HTMLTAG_960__HTMLTAG_961__HTMLTAG_962___
___HTMLTAG_963__HTMLTAG_964___瀏覽器將開啟一個新選項卡以該使用者名稱登入___HTMLTAG_965__HTMLTAG_966___
___HTMLTAG_967__HTMLTAG_968___事件類型為 <code>IMPERSONATE___HTMLTAG_970__HTMLTAG_971__HTMLTAG_972___ 中記錄的所有操作
</ol>

___HTMLTAG_974__HTMLTAG_975___7.2 透過 REST API 模擬___HTMLTAG_976__HTMLTAG_977___
<pre><code>curl -s -X POST \
  "http://localhost:8080/admin/realms/my-company/users/$USER_ID/impersonation" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json"</code></pre>

___HTMLTAG_978__HTMLTAG_979___安全說明：___HTMLTAG_980__HTMLTAG_981___
<ul>
___HTMLTAG_983__HTMLTAG_984___只有領域 <code>領域管理</code> 中具有角色 <code>impersonation</code> 的使用者模擬____HTMLTAG_989__HTMLTAG____
___HTMLTAG_991__HTMLTAG_992___記錄所有模擬事件 - 對於審核很重要___HTMLTAG_993__HTMLTAG_994___
___HTMLTAG_995__HTMLTAG_996___在生產中，將模擬權限限制為僅超級管理員___HTMLTAG_997__HTMLTAG_998___
</ul>

___HTMLTAG_1000__HTMLTAG_1001___8。搜尋與管理進階使用者___HTMLTAG_1002__HTMLTAG_1003______HTMLTAG_1004__HTMLTAG_1005___8.1 搜尋使用者___HTMLTAG_1006__HTMLTAG_1007___
<pre><code># Tìm theo username
bin/kcadm.sh get users -r my-company -q username=john

# Tìm theo email
bin/kcadm.sh get users -r my-company -q email=john.doe@mycompany.com

# Tìm theo attribute
bin/kcadm.sh get users -r my-company -q "q=department:Engineering"

# Tìm với pagination
bin/kcadm.sh get users -r my-company --offset 0 --limit 20

# REST API - tìm với nhiều tiêu chí
curl -s -X GET \
  "http://localhost:8080/admin/realms/my-company/users?search=john&amp;max=20&amp;first=0" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq '.[].username'</code></pre>

___HTMLTAG_1008__HTMLTAG_1009___8.2 刪除使用者___HTMLTAG_1010__HTMLTAG_1011___
<pre><code># Qua CLI
bin/kcadm.sh delete users/$USER_ID -r my-company

# Qua REST API
curl -s -X DELETE \
  "http://localhost:8080/admin/realms/my-company/users/$USER_ID" \
  -H "Authorization: Bearer $ACCESS_TOKEN"</code></pre>

___HTMLTAG_1012__HTMLTAG_1013___8.3 停用使用者（而非刪除）___HTMLTAG_1014__HTMLTAG_1015___
<pre><code># Disable user - vẫn giữ data nhưng không cho login
bin/kcadm.sh update users/$USER_ID -r my-company -s enabled=false</code></pre>

___HTMLTAG_1016__HTMLTAG_1017___8.4 批次操作___HTMLTAG_1018__HTMLTAG_1019___
<p>從 CSV 建立多個使用者的範例腳本：</p>
<pre><code>#!/bin/bash
# bulk-create-users.sh

REALM="my-company"

while IFS=',' read -r username email firstName lastName department; do
  bin/kcadm.sh create users -r $REALM \
    -s username="$username" \
    -s email="$email" \
    -s firstName="$firstName" \
    -s lastName="$lastName" \
    -s enabled=true \
    -s emailVerified=true \
    -s "attributes={\"department\":[\"$department\"]}"
  
  bin/kcadm.sh set-password -r $REALM \
    --username "$username" \
    --new-password "Welcome@123" \
    --temporary
  
  echo "Created user: $username"
done &lt; users.csv</code></pre>

___HTMLTAG_1022__HTMLTAG_1023___9。個人資料管理___HTMLTAG_1024__HTMLTAG_1025___

<p>Keycloak 透過 <strong>帳號控制台</strong> 支援 GDPR 合規性，允許使用者：</p>
<ul>
___HTMLTAG_1031__HTMLTAG_1032__HTMLTAG_1033___查看個人資訊_</strong> — 電子郵件、姓名、屬性____HTMLTAG_1035__HTMLTAG_1036___
___HTMLTAG_1037__HTMLTAG_1038__HTMLTAG_1039___編輯資訊_</strong> — 取決於使用者個人資料中的權限____HTMLTAG_1041__HTMLTAG_1042___
___HTMLTAG_1043__HTMLTAG_1044__HTMLTAG_1045___查看會話</strong> — 活動登入工作階段____HTMLTAG_1047__HTMLTAG_1048___
___HTMLTAG_1049__HTMLTAG_1050__HTMLTAG_1051___管理設備</strong> — 查看並撤銷已登入的設備____HTMLTAG_1053__HTMLTAG_1054___
___HTMLTAG_1055__HTMLTAG_1056__HTMLTAG_1057___檢視應用程式</strong> — 已被授予存取權限的應用程式___HTMLTAG_1059__HTMLTAG_1060___
___HTMLTAG_1061__HTMLTAG_1062__HTMLTAG_1063___刪除帳戶</strong> — 自行刪除帳戶（如果允許）___HTMLTAG_1065__HTMLTAG_1066___
</ul>

<p>帳號控制台 URL：</p>
<pre><code>http://localhost:8080/realms/{realm}/account</code></pre>

<p>啟用帳號刪除：</p>
<ol>
___HTMLTAG_1073__HTMLTAG_1074___轉至 <strong>驗證</strong> → <strong>所需操作___HTMLTAG_1078__HTMLTAG_1079__13G_1079__1
___HTMLTAG_1081__HTMLTAG_1082___啟用操作 <strong>刪除帳號___HTMLTAG_1084__HTMLTAG_1085__HTMLTAG_1086___
___HTMLTAG_1087__HTMLTAG_1088___轉到 <strong>領域設定</strong> → <strong>登入</strong>___ → 開啟<strong>刪除帳號___HTMLTAG_1094__HTMLTAG_1095__HTMLTAG_1096___
</ol>

___HTMLTAG_1098__HTMLTAG_1099___10。練習___HTMLTAG_1100__HTMLTAG_1101___<ol>
___HTMLTAG_1103__HTMLTAG_1104__HTMLTAG_1105___為領域 <code>我的公司</code> 建立使用者個人資料</strong>，具有自訂屬性：___HTMLTAG_1109
<ul>
___HTMLTAG_1111__HTMLTAG_1112___電話號碼</code>（必需，國際格式的正規表示式驗證器）</li>
___HTMLTAG_1115__HTMLTAG_1116___部門__HTMLTAG_1117___（必填，選項：工程、人力資源、財務、行銷）</li>
___HTMLTAG_1119__HTMLTAG_1120___employee_id</code>（僅限管理員編輯，模式：EMP-[0-9]{4}）</li>
</ul>
</li>
___HTMLTAG_1125__HTMLTAG_1126__HTMLTAG_1127___建立群組層次結構</strong>:</p>
<ul>
<li>工程 → 後端、前端、DevOps</li>
<li>營運 → 人力資源、財務</li>
</ul>
</li>
___HTMLTAG_1137__HTMLTAG_1138__HTMLTAG_1139___透過CLI建立5個使用者</strong>，每個使用者屬於不同的群組，臨時密碼____HTMLTAG_1141__HTMLTAG_1142___
___HTMLTAG_1143__HTMLTAG_1144__HTMLTAG_1145___啟用自助註冊_</strong>，並進行電子郵件驗證和註冊測試____HTMLTAG_1147__HTMLTAG_1148___
___HTMLTAG_1149__HTMLTAG_1150__HTMLTAG_1151___配置密碼策略</strong>：最少 10 個字符，1 個大寫字母，1 個數字，1 個特殊字符，歷史記錄 5 個，過期 90 天___HTHTMLTAG_11533154___154_____
</ol>

___HTMLTAG_1156__HTMLTAG_1157___11。摘要___HTMLTAG_1158__HTMLTAG_1159___

<p>在本課中，您學習了：</p>
<ul>
___HTMLTAG_1163__HTMLTAG_1164___透過管理控制台、CLI 和 REST API 建立和管理 <strong>使用者</strong>___HTMLTAG_1167__HTMLTAG_1168___
___HTMLTAG_1169__HTMLTAG_1170___設定 <strong>憑證_</strong> 與 <strong>密碼原則___HTMLTAG_1174__HTMLTAG_1175__HTMLTAG_1___HTMLTAG_1174__HTMLTAG_1175__HT
___HTMLTAG_1177__HTMLTAG_1178___使用 <strong>使用者設定檔_</strong>使用驗證器和註解定義屬性架構____HTMLTAG_1181__HTMLTAG_1182___
___HTMLTAG_1183__HTMLTAG_1184___建立 <strong>群組</strong> 和 <strong> 子群組</strong>，其中包含預設組結構、屬性和預設組____10GML
___HTMLTAG_1191__HTMLTAG_1192___設定 <strong>使用者所需的操作</strong>___HTMLTAG_1195__HTMLTAG_1196___
___HTMLTAG_1197__HTMLTAG_1198___啟用 <strong>使用 reCAPTCHA 進行自我註冊</strong>___HTMLTAG_1201__HTMLTAG_1202___
___HTMLTAG_1203__HTMLTAG_1204___使用 <strong>模擬</strong>進行調試___HTMLTAG_1207__HTMLTAG_1208___
___HTMLTAG_1209__HTMLTAG_1210___管理 <strong>個人資料</strong>以確保 GDPR 合規性___HTMLTAG_1213__HTMLTAG_1214___
</ul>

<p>下一篇文章將引導您了解 <strong>Keycloak 中的 <strong>角色、權限和存取控制</strong>.</p>