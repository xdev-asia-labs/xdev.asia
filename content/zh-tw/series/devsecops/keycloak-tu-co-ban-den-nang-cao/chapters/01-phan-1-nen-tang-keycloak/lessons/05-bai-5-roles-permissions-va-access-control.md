---
id: 019d8b30-b105-7001-c001-e0c5f8100105
title: 第 5 課：角色、權限和存取控制
slug: bai-5-roles-permissions-va-access-control
description: 領域角色、客戶端角色、複合角色、使用者和群組的角色映射、預設角色、服務帳戶角色。細粒度管理權限V2、領域管理委派、特定資源的權限、策略和權限評估。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 5
section_title: 第 1 部分：Keycloak 平台
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<div style="text-align: center; margin: 2rem 0;">
<img src="/storage/uploads/2026/03/keycloak-rbac-permissions-2026.png" alt="Keycloak RBAC & Fine-grained Permissions" style="max-width: 800px; width: 100%; border-radius: 12px;" />
___HTMLTAG_2__HTMLTAG_3___Keycloak 中的 RBAC 模型和細粒度管理員權限 V2___HTMLTAG_4__HTMLTAG_5___
</div>

___HTMLTAG_7__HTMLTAG_8___1。 Keycloak 中的角色概述___HTMLTAG_9__HTMLTAG_10___

<p>Keycloak 中的角色是分散存取的主要機制。應用程式檢查使用者的角色（透過令牌中的聲明）來決定允許使用者執行哪些操作。 Keycloak 支援兩種類型的角色： <strong>領域角色</strong> 和 <strong>客戶端角色</strong>.</p>

___HTMLTAG_17__HTMLTAG_18___領域角色與客戶端角色___HTMLTAG_19__HTMLTAG_20___
<table>
<thead>
___HTMLTAG_23__HTMLTAG_24___特徵____HTMLTAG_25__HTMLTAG_26___領域角色___HTMLTAG_27__HTMLTAG_28___客戶端角色___HTMLTAG_29__HTMLTAG_30___
</thead>
<tbody>
___HTMLTAG_33__HTMLTAG_34___範圍____HTMLTAG_35__HTMLTAG_36___整個領域____HTMLTAG_37__HTMLTAG_38___僅在特定客戶端中____HTMLTAG_39__HTMLTAG_40___
___HTMLTAG_41__HTMLTAG_42___用例___HTMLTAG_43__HTMLTAG_44___一般角色（管理員、使用者、經理）___HTMLTAG_45__HTMLTAG_46___應用程式特定角色（編輯器、檢視器）___HTMLTAG_47__HTMLTAG_48___
___HTMLTAG_49__HTMLTAG_50___命名空間___HTMLTAG_51__HTMLTAG_52___在領域中唯一___HTMLTAG_53__HTMLTAG_54___在客戶端中唯一___HTMLTAG_55__HTMLTAG_56___
___HTMLTAG_57__HTMLTAG_58___令牌___HTMLTAG_59__HTMLTAG_60__HTMLTAG_61___realm_access.roles___HTMLTAG_62__HTMLTAG_63__HTMLTAG_64__HTMLTAG_65___resource_access.{client}.roles___HTMLTAG__17HTMLTAG17_MLTAG1_ML_MLTAG1_ML
</tbody>
</table>

___HTMLTAG_71__HTMLTAG_72___2。領域角色___HTMLTAG_73__HTMLTAG_74___

___HTMLTAG_75__HTMLTAG_76___2.1 預設領域角色___HTMLTAG_77__HTMLTAG_78___
<p>Keycloak 創造了許多領域角色：</p>
<ul>
___HTMLTAG_82__HTMLTAG_83__HTMLTAG_84___default-roles-{realm}</strong> — 複合角色包含新使用者的預設角色__HTMLTAG_86__HTMLTAG_87___
___HTMLTAG_88__HTMLTAG_89__HTMLTAG_90___offline_access</strong> — 允許取得離線令牌（長期刷新令牌）___HTMLTAG_92__HTMLTAG_93___
___HTMLTAG_94__HTMLTAG_95__HTMLTAG_96___uma_authorization</strong> — 允許使用 UMA（使用者管理存取）___HTMLTAG_98__HTMLTAG_99___
</ul>

___HTMLTAG_101__HTMLTAG_102___2.2 建立領域角色___HTMLTAG_103__HTMLTAG_104___

___HTMLTAG_105__HTMLTAG_106___透過管理控制台：___HTMLTAG_107__HTMLTAG_108___
<ol>
___HTMLTAG_110__HTMLTAG_111___點選側邊欄中的<strong>領域角色</strong>___HTMLTAG_114__HTMLTAG_115___
___HTMLTAG_116__HTMLTAG_117___點選 <strong>建立角色___HTMLTAG_119__HTMLTAG_120__HTMLTAG_121___
___HTMLTAG_122__HTMLTAG_123___輸入：</p>
<ul>
___HTMLTAG_126__HTMLTAG_127___角色 _</strong>： <code>admin___HTMLTAG_130__HTMLTAG_131___
___HTMLTAG_132__HTMLTAG_133___說明</strong>：<code>完全管理員存取權限___HTMLTAG_136__HTMLTAG_137___
</ul>
</li>
___HTMLTAG_140__HTMLTAG_141___點選 <strong>儲存___HTMLTAG_143__HTMLTAG_144__HTMLTAG_145___
</ol>___HTMLTAG_147__HTMLTAG_148___透過管理 CLI：___HTMLTAG_149__HTMLTAG_150___
___預編碼_0___

___HTMLTAG_151__HTMLTAG_152___透過 REST API：___HTMLTAG_153__HTMLTAG_154___
___預編碼_1___

___HTMLTAG_155__HTMLTAG_156___3。客戶端角色___HTMLTAG_157__HTMLTAG_158___

<p>當應用程式需要自己的角色時使用客戶端角色 - 例如，CMS 應用程式具有與應用程式角色不同的角色<code>editor</code>、<code>author</code>、<code>reviewer</code>人力資源.</p>reviewer</code>人力資源.</p>

___HTMLTAG_167__HTMLTAG_168___3.1 建立客戶端角色___HTMLTAG_169__HTMLTAG_170___

___HTMLTAG_171__HTMLTAG_172___透過管理控制台：___HTMLTAG_173__HTMLTAG_174___
<ol>
___HTMLTAG_176__HTMLTAG_177___轉到 <strong>客戶端</strong> → 選擇客戶端（例如：<code>my-web-app</code>）___HTMLTAG_182__HTMLTAG_1823___
___HTMLTAG_184__HTMLTAG_185___選項卡 <strong>角色___HTMLTAG_187__HTMLTAG_188__HTMLTAG_189___
___HTMLTAG_190__HTMLTAG_191___點選 <strong>建立角色___HTMLTAG_193__HTMLTAG_194__HTMLTAG_195___
___HTMLTAG_196__HTMLTAG_197___輸入名稱和說明___HTMLTAG_198__HTMLTAG_199___
</ol>

___HTMLTAG_201__HTMLTAG_202___透過 CLI：___HTMLTAG_203__HTMLTAG_204___
___預編碼_2___

___HTMLTAG_205__HTMLTAG_206___透過 REST API：___HTMLTAG_207__HTMLTAG_208___
___預編碼_3___

___HTMLTAG_209__HTMLTAG_210___3.2 令牌中的客戶端角色___HTMLTAG_211__HTMLTAG_212___
<p>客戶端角色出現在宣告 <code>resource_access</code>:</p> 下的存取權杖中
___預編碼_4___

___HTMLTAG_217__HTMLTAG_218___4。複合角色___HTMLTAG_219__HTMLTAG_220___

<p>複合角色是包含一個或多個子角色（領域角色和/或客戶端角色）的角色。當為使用者指派複合角色時，該使用者將自動擁有所有子角色。 </p>

___HTMLTAG_223__HTMLTAG_224___4.1 建立複合角色___HTMLTAG_225__HTMLTAG_226___

___HTMLTAG_227__HTMLTAG_228___透過管理控制台：___HTMLTAG_229__HTMLTAG_230___
<ol>
___HTMLTAG_232__HTMLTAG_233___轉到 <strong>領域角色</strong> → 選擇角色（例如：<code>admin</code>）___HTMLTAG_238__HT
___HTMLTAG_240__HTMLTAG_241___選項卡 <strong>操作</strong> → <strong>___新增關聯角色____HTMLTAG_245__HTMLTAG_246__HTMLTAG_247___
___HTMLTAG_248__HTMLTAG_249___選擇要新增的角色（領域角色和/或客戶端角色）___HTMLTAG_250__HTMLTAG_251___
___HTMLTAG_252__HTMLTAG_253___點選 <strong>指派___HTMLTAG_255__HTMLTAG_256__HTMLTAG_257___
</ol>

___HTMLTAG_259__HTMLTAG_260___透過 CLI：___HTMLTAG_261__HTMLTAG_262___
___預編碼_5___

___HTMLTAG_263__HTMLTAG_264___層次結構範例：___HTMLTAG_265__HTMLTAG_266___
___預編碼_6______HTMLTAG_267__HTMLTAG_268___注意：</strong> 當為使用者指派角色 <code>admin</code> 時，該使用者將在層級結構中擁有 <strong>allHTMLTAG_273___ 角色： <code>_admin</code>， <code>管理員</code>、<code>使用者</code>、<code>檢視者</code>____821___8____8____ML____ <code>審查者</code>、<code>內容管理</code>、<code>管理帳號__HTMLTAG_289___.</p>

___HTMLTAG_291__HTMLTAG_292___4.2 查看複合角色___HTMLTAG_293__HTMLTAG_294___
___預編碼_7___

___HTMLTAG_295__HTMLTAG_296___5。角色映射___HTMLTAG_297__HTMLTAG_298___

___HTMLTAG_299__HTMLTAG_300___5.1 將角色指派給使用者___HTMLTAG_301__HTMLTAG_302___

___HTMLTAG_303__HTMLTAG_304___透過管理控制台：___HTMLTAG_305__HTMLTAG_306___
<ol>
___HTMLTAG_308__HTMLTAG_309___轉至 <strong>使用者</strong> → 選擇使用者___HTMLTAG_312__HTMLTAG_313___
___HTMLTAG_314__HTMLTAG_315___選項卡 <strong>角色映射___HTMLTAG_317__HTMLTAG_318__HTMLTAG_319___
___HTMLTAG_320__HTMLTAG_321___點選 <strong>指派角色___HTMLTAG_323__HTMLTAG_324__HTMLTAG_325___
___HTMLTAG_326__HTMLTAG_327___選擇領域角色或按客戶端過濾以選擇客戶端角色___HTMLTAG_328__HTMLTAG_329___
___HTMLTAG_330__HTMLTAG_331___點選 <strong>指派___HTMLTAG_333__HTMLTAG_334__HTMLTAG_335___
</ol>

___HTMLTAG_337__HTMLTAG_338___透過 CLI：___HTMLTAG_339__HTMLTAG_340___
___預編碼_8___

___HTMLTAG_341__HTMLTAG_342___透過 REST API：___HTMLTAG_343__HTMLTAG_344___
___預編碼_9___

___HTMLTAG_345__HTMLTAG_346___5.2 將角色指派給群組___HTMLTAG_347__HTMLTAG_348___
<p>向群組指派角色時，<strong>該群組（和子群組）的所有成員</strong>將繼承該角色：</p>

___預編碼_10___

___HTMLTAG_353__HTMLTAG_354___5.3 有效角色___HTMLTAG_355__HTMLTAG_356___
<p>使用者的有效角色 = 直接指派的角色 + 從群組繼承的角色 + 複合角色的角色：</p>
<pre><code># Xem effective realm roles
curl -s -X GET \
  "http://localhost:8080/admin/realms/my-company/users/$USER_ID/role-mappings/realm/composite" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq '.[].name'

# Xem effective client roles
curl -s -X GET \
  "http://localhost:8080/admin/realms/my-company/users/$USER_ID/role-mappings/clients/$CLIENT_UUID/composite" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq '.[].name'</code></pre>

___HTMLTAG_359__HTMLTAG_360___6。預設角色___HTMLTAG_361__HTMLTAG_362___

<p>建立帳戶或註冊時會自動將預設角色指派給每個新使用者。 </p>

___HTMLTAG_365__HTMLTAG_366___6.1 設定預設角色___HTMLTAG_367__HTMLTAG_368___

___HTMLTAG_369__HTMLTAG_370___透過管理控制台：___HTMLTAG_371__HTMLTAG_372___
<ol>
___HTMLTAG_374__HTMLTAG_375___轉到 <strong>領域角色___HTMLTAG_377__HTMLTAG_378__HTMLTAG_379___
___HTMLTAG_380__HTMLTAG_381___查找角色 <strong>default-roles-{領域}</strong>（例如：<code>default-roles-my-company</code>)___MLTAGMLdefault-roles-my-company</code>)___MLTAGML_48387____]
___HTMLTAG_388__HTMLTAG_389___點選角色 → 標籤 <strong>操作</strong> → <strong>新增關聯角色____HTMLTAG_393__HTMLTAG_394__HT
___HTMLTAG_396__HTMLTAG_397___選擇要設定為預設的角色___HTMLTAG_398__HTMLTAG_399___
</ol>

___HTMLTAG_401__HTMLTAG_402___透過 CLI：___HTMLTAG_403__HTMLTAG_404___
<pre><code># Thêm role vào default roles
bin/kcadm.sh add-roles \
  -r my-company \
  --rname default-roles-my-company \
  --rolename user \
  --rolename offline_access

# Thêm client role vào default roles
bin/kcadm.sh add-roles \
  -r my-company \
  --rname default-roles-my-company \
  --cclientid my-web-app \
  --rolename viewer</code></pre><p>之後，每個新建立的使用者將自動具有以下角色： <code>user</code>、 <code>offline_access</code>、<code>offline_access</code>、<code>offline_access</code>、___HTMLTAG_4010___-web-1310___12107____

___HTMLTAG_413__HTMLTAG_414___7。服務帳戶角色___HTMLTAG_415__HTMLTAG_416___

<p>服務帳戶用於服務之間的通訊（機器對機器）－無需使用者互動。 </p>

___HTMLTAG_419__HTMLTAG_420___7.1 為客戶端啟用服務帳戶___HTMLTAG_421__HTMLTAG_422___
<ol>
___HTMLTAG_424__HTMLTAG_425___轉到 <strong>客戶端</strong> → 選擇或建立客戶端___HTMLTAG_428__HTMLTAG_429___
___HTMLTAG_430__HTMLTAG_431___選項卡 <strong>設定</strong>:</p>
<ul>
___HTMLTAG_436__HTMLTAG_437___客戶端驗證</strong>：開啟</li>
___HTMLTAG_440__HTMLTAG_441___服務帳號角色</strong>：ON</li>
___HTMLTAG_444__HTMLTAG_445___授權</strong>：關閉（除非需要授權服務）</li>
</ul>
</li>
___HTMLTAG_450__HTMLTAG_451___點選 <strong>儲存___HTMLTAG_453__HTMLTAG_454__HTMLTAG_455___
</ol>

___HTMLTAG_457__HTMLTAG_458___7.2 將角色指派給服務帳戶___HTMLTAG_459__HTMLTAG_460___
<pre><code># Qua Admin Console:
# Clients → chọn client → tab "Service account roles" → Assign role

# Qua CLI - lấy service account user
SA_USER_ID=$(bin/kcadm.sh get clients/$CLIENT_UUID/service-account-user -r my-company --fields id --format csv --noquotes)

# Gán realm roles
bin/kcadm.sh add-roles \
  -r my-company \
  --uid $SA_USER_ID \
  --rolename admin

# Gán client roles (realm-management) cho API access
bin/kcadm.sh add-roles \
  -r my-company \
  --uid $SA_USER_ID \
  --cclientid realm-management \
  --rolename manage-users \
  --rolename view-users \
  --rolename manage-clients</code></pre>

___HTMLTAG_461__HTMLTAG_462___7.3 使用服務帳號___HTMLTAG_463__HTMLTAG_464___
<pre><code># Lấy access token cho service account (client credentials grant)
ACCESS_TOKEN=$(curl -s -X POST \
  "http://localhost:8080/realms/my-company/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=client_credentials" \
  -d "client_id=my-backend-service" \
  -d "client_secret=YOUR_CLIENT_SECRET" | jq -r '.access_token')

# Sử dụng token để gọi API
curl -s -X GET \
  "http://localhost:8080/admin/realms/my-company/users" \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq '.[].username'</code></pre>

___HTMLTAG_465__HTMLTAG_466___8。細粒度管理員權限 V2___HTMLTAG_467__HTMLTAG_468___

<p>細微管理權限 V2（來自 Keycloak 26+）允許精細控制誰可以管理管理控制台中的哪些資源 — 而不僅僅是使用原始領域管理客戶端角色。 </p>

___HTMLTAG_471__HTMLTAG_472___8.1 啟用細粒度管理員權限___HTMLTAG_473__HTMLTAG_474___
<ol>
___HTMLTAG_476__HTMLTAG_477___轉到 <strong>領域設定</strong> → <strong>常規____HTMLTAG_481__HTMLTAG_482__HTMLTAG____常規____HTMLTAG_481__HTMLTAG_482__HTMLTAG____常規____HTMLTAG_481__HTMLTAG_482__HTMLTAG____常規____HTMLTAG_481__HTMLTAG_482__HTMLTAG____常規____HTMLTAG_481__HTMLTAG_482__HTMLTAG____常規____
___HTMLTAG_484__HTMLTAG_485___查找 <strong>管理員權限</strong> → 啟用 <strong>細粒度管理員權限 (V2)___HTMLTAG_489__HTMLTAG_488___細粒度管理員權限 (V2)___HTMLTAG_489__HTMLTAG_490__
___HTMLTAG_492__HTMLTAG_493___Keycloak 將在領域中建立權限管理資源___HTMLTAG_494__HTMLTAG_495___
</ol>

___HTMLTAG_497__HTMLTAG_498___注意：</strong> 這是 Keycloak 26.x 中的預覽功能。在生產中，啟用前需要仔細評估。 </p>

___HTMLTAG_501__HTMLTAG_502___8.2 資源權限___HTMLTAG_503__HTMLTAG_504___
<p>啟用後，您可以為資源建立權限：</p>___HTMLTAG_507__HTMLTAG_508___使用者權限：___HTMLTAG_509__HTMLTAG_510___
<table>
<thead>
___HTMLTAG_513__HTMLTAG_514___權限____HTMLTAG_515__HTMLTAG_516___說明___HTMLTAG_517__HTMLTAG_518___
</thead>
<tbody>
___HTMLTAG_521__HTMLTAG_522___查看___HTMLTAG_523__HTMLTAG_524___查看使用者清單和詳細資料___HTMLTAG_525__HTMLTAG_526___
___HTMLTAG_527__HTMLTAG_528___管理___HTMLTAG_529__HTMLTAG_530___建立、編輯、刪除使用者___HTMLTAG_531__HTMLTAG_532___
___HTMLTAG_533__HTMLTAG_534___地圖角色___HTMLTAG_535__HTMLTAG_536___分配/刪除角色___HTMLTAG_537__HTMLTAG_538___
___HTMLTAG_539__HTMLTAG_540___管理群組成員___HTMLTAG_541__HTMLTAG_542___在群組中新增/刪除使用者____HTMLTAG_543__HTMLTAG_544___
___HTMLTAG_545__HTMLTAG_546___模擬___HTMLTAG_547__HTMLTAG_548___模擬使用者___HTMLTAG_549__HTMLTAG_550___
</tbody>
</table>

___HTMLTAG_553__HTMLTAG_554___群組權限：___HTMLTAG_555__HTMLTAG_556___
<table>
<thead>
___HTMLTAG_559__HTMLTAG_560___權限____HTMLTAG_561__HTMLTAG_562___說明___HTMLTAG_563__HTMLTAG_564___
</thead>
<tbody>
___HTMLTAG_567__HTMLTAG_568___查看___HTMLTAG_569__HTMLTAG_570___查看群組___HTMLTAG_571__HTMLTAG_572___
___HTMLTAG_573__HTMLTAG_574___管理___HTMLTAG_575__HTMLTAG_576___建立、編輯、刪除群組___HTMLTAG_577__HTMLTAG_578___
___HTMLTAG_579__HTMLTAG_580___查看成員___HTMLTAG_581__HTMLTAG_582___查看群組成員___HTMLTAG_583__HTMLTAG_584___
___HTMLTAG_585__HTMLTAG_586___管理成員___HTMLTAG_587__HTMLTAG_588___新增/刪除成員___HTMLTAG_589__HTMLTAG_590___
___HTMLTAG_591__HTMLTAG_592___管理成員資格___HTMLTAG_593__HTMLTAG_594___管理群組成員資格___HTMLTAG_595__HTMLTAG_596___
</tbody>
</table>

___HTMLTAG_599__HTMLTAG_600___客戶權限：___HTMLTAG_601__HTMLTAG_602___
<table>
<thead>
___HTMLTAG_605__HTMLTAG_606___權限____HTMLTAG_607__HTMLTAG_608___說明___HTMLTAG_609__HTMLTAG_610___
</thead>
<tbody>
___HTMLTAG_613__HTMLTAG_614___查看___HTMLTAG_615__HTMLTAG_616___查看客戶___HTMLTAG_617__HTMLTAG_618___
___HTMLTAG_619__HTMLTAG_620___管理___HTMLTAG_621__HTMLTAG_622___建立、編輯、刪除客戶端___HTMLTAG_623__HTMLTAG_624___
___HTMLTAG_625__HTMLTAG_626___配置___HTMLTAG_627__HTMLTAG_628___更改客戶端設定___HTMLTAG_629__HTMLTAG_630___
___HTMLTAG_631__HTMLTAG_632___地圖角色___HTMLTAG_633__HTMLTAG_634___建立/指派客戶端角色___HTMLTAG_635__HTMLTAG_636___
</tbody>
</table>

___HTMLTAG_639__HTMLTAG_640___角色權限：___HTMLTAG_641__HTMLTAG_642___
<table>
<thead>
___HTMLTAG_645__HTMLTAG_646___權限____HTMLTAG_647__HTMLTAG_648___說明___HTMLTAG_649__HTMLTAG_650___
</thead>
<tbody>
___HTMLTAG_653__HTMLTAG_654___查看___HTMLTAG_655__HTMLTAG_656___查看角色___HTMLTAG_657__HTMLTAG_658___
___HTMLTAG_659__HTMLTAG_660___管理___HTMLTAG_661__HTMLTAG_662___建立、編輯、刪除角色___HTMLTAG_663__HTMLTAG_664___
___HTMLTAG_665__HTMLTAG_666___映射角色___HTMLTAG_667__HTMLTAG_668___向使用者/群組分配角色___HTMLTAG_669__HTMLTAG_670___
</tbody>
</table>___HTMLTAG_673__HTMLTAG_674___8.3 建立權限___HTMLTAG_675__HTMLTAG_676___
<ol>
___HTMLTAG_678__HTMLTAG_679___轉到 <strong>領域設定</strong> → <strong>管理權限____HTMLTAG_683__HTMLTAG_684__HTMLTAG_685___
___HTMLTAG_686__HTMLTAG_687___選擇資源類型（使用者、群組、客戶端、角色）___HTMLTAG_688__HTMLTAG_689___
___HTMLTAG_690__HTMLTAG_691___點擊權限進行設定（例如：<strong>為使用者管理</strong>）___HTMLTAG_694__HTMLTAG_695___
___HTMLTAG_696__HTMLTAG_697___新增 <strong>政策</strong>以決定誰擁有此權限___HTMLTAG_700__HTMLTAG_701___
</ol>

___HTMLTAG_703__HTMLTAG_704___8.4 政策___HTMLTAG_705__HTMLTAG_706___
<p>策略定義授予權限的條件。 Keycloak V2 支援以下策略：</p>

___HTMLTAG_709__HTMLTAG_710___基於角色的策略：___HTMLTAG_711__HTMLTAG_712___
<pre><code>// Cho phép users có role "hr-admin" quản lý users
{
  "type": "role",
  "name": "HR Admin Policy",
  "description": "Users with hr-admin role",
  "roles": [
    {
      "id": "{role-id-of-hr-admin}",
      "required": true
    }
  ]
}</code></pre>

___HTMLTAG_713__HTMLTAG_714___基於使用者的政策：___HTMLTAG_715__HTMLTAG_716___
<pre><code>// Cho phép specific users
{
  "type": "user",
  "name": "Specific Admin Policy",
  "users": [
    "{user-id-of-admin-1}",
    "{user-id-of-admin-2}"
  ]
}</code></pre>

___HTMLTAG_717__HTMLTAG_718___基於群組的策略：___HTMLTAG_719__HTMLTAG_720___
<pre><code>// Cho phép members của group
{
  "type": "group",
  "name": "Admin Group Policy",
  "groups": [
    {
      "id": "{group-id-of-admins}",
      "extendChildren": true
    }
  ]
}</code></pre>

___HTMLTAG_721__HTMLTAG_722___基於客戶端的政策：___HTMLTAG_723__HTMLTAG_724___
<pre><code>// Cho phép specific clients (service accounts)
{
  "type": "client",
  "name": "Backend Service Policy",
  "clients": [
    "{client-id-of-backend-service}"
  ]
}</code></pre>

___HTMLTAG_725__HTMLTAG_726___8.5 實際範例：HR 管理員僅管理使用者___HTMLTAG_727__HTMLTAG_728___
<p>要求：具有 <code>hr-admin</code> 角色的用戶只能查看和管理用戶，不能管理客戶端或領域設定。 </p>

<ol>
___HTMLTAG_734__HTMLTAG_735__HTMLTAG_736___建立領域角色</strong> <code>hr-admin</code>:</p>
<pre><code>bin/kcadm.sh create roles -r my-company \
  -s name=hr-admin \
  -s description="HR Administrator - can manage users only"</code></pre>
</li>
___HTMLTAG_742__HTMLTAG_743__HTMLTAG_744___啟用細粒度管理員權限V2___HTMLTAG_745__HTMLTAG_746__HTMLTAG_747___
___HTMLTAG_748__HTMLTAG_749__HTMLTAG_750___為 <code>hr-admin</code> 建立基於角色的策略</strong>:</p>___
<ul>
<li>前往管理員權限 → 政策標籤</li>
<li>建立策略 → 基於角色</li>
<li>名稱：「人力資源管理政策」</li>
<li>選擇角色：<code>hr-admin___HTMLTAG_764__HTMLTAG_765___
</ul>
</li>
___HTMLTAG_768__HTMLTAG_769__HTMLTAG_770___將政策指派給使用者權限</strong>:</p>
<ul>
<li>使用者 → 權限 <strong>查看</strong> → 新增策略「HR 管理策略」</li>
<li>使用者 → 權限 <strong>管理</strong> → 新增策略「HR 管理策略」</li>
</ul>
</li>
___HTMLTAG_784__HTMLTAG_785__HTMLTAG_786___分配角色</strong>:</p>
___預編碼_20___
</li>
</ol>

<p>使用者 <code>hr-manager</code> 現在可以登入管理控制台，並且只能看到選單 <strong>Users</strong>.</p>___HTMLTAG_797__HTMLTAG_798___8.6 權限評估___HTMLTAG_799__HTMLTAG_800___
<p>您可以使用「評估」標籤測試權限：</p>
<ol>
___HTMLTAG_804__HTMLTAG_805___转到 <strong>管理权限</strong> → <strong>评估___HTMLTAG_809__HTMLTAG_810__HTMLTAG_811___
___HTMLTAG_812__HTMLTAG_813___選擇要測試的使用者或客戶端___HTMLTAG_814__HTMLTAG_815___
___HTMLTAG_816__HTMLTAG_817___選擇資源類型與權限___HTMLTAG_818__HTMLTAG_819___
___HTMLTAG_820__HTMLTAG_821___點選 <strong>評估</strong> 查看結果（允許或拒絕）___HTMLTAG_824__HTMLTAG_825___
</ol>

___HTMLTAG_827__HTMLTAG_828___9。專用領域管理控制台___HTMLTAG_829__HTMLTAG_830___

<p>Keycloak 允許為每個領域建立單獨的管理員帳戶 - 無需存取主領域：</p>

___HTMLTAG_833__HTMLTAG_834___9.1 建立領域管理___HTMLTAG_835__HTMLTAG_836___
<pre><code># Tạo user trong realm
bin/kcadm.sh create users -r my-company \
  -s username=realm-admin \
  -s email=realm-admin@mycompany.com \
  -s enabled=true \
  -s emailVerified=true

bin/kcadm.sh set-password -r my-company \
  --username realm-admin \
  --new-password "RealmAdmin@123"

# Gán realm-management client roles
bin/kcadm.sh add-roles -r my-company \
  --uusername realm-admin \
  --cclientid realm-management \
  --rolename realm-admin</code></pre>___HTMLTAG_837__HTMLTAG_838___9.2 領域管理客戶端角色___HTMLTAG_839__HTMLTAG_840___
<p>客戶端 <code>領域管理</code> 具有控制管理員權限的可用角色：</p>
<table>
<thead>
___HTMLTAG_847__HTMLTAG_848___角色___HTMLTAG_849__HTMLTAG_850___說明___HTMLTAG_851__HTMLTAG_852___
</thead>
<tbody>
___HTMLTAG_855__HTMLTAG_856___領域管理___HTMLTAG_857__HTMLTAG_858___領域的完全管理員存取權限___HTMLTAG_859__HTMLTAG_860___
___HTMLTAG_861__HTMLTAG_862___管理使用者___HTMLTAG_863__HTMLTAG_864___管理使用者___HTMLTAG_865__HTMLTAG_866___
___HTMLTAG_867__HTMLTAG_868___查看使用者___HTMLTAG_869__HTMLTAG_870___查看使用者___HTMLTAG_871__HTMLTAG_872___
___HTMLTAG_873__HTMLTAG_874___管理客戶___HTMLTAG_875__HTMLTAG_876___管理客戶___HTMLTAG_877__HTMLTAG_878___
___HTMLTAG_879__HTMLTAG_880___查看客戶端___HTMLTAG_881__HTMLTAG_882___查看客戶端___HTMLTAG_883__HTMLTAG_884___
___HTMLTAG_885__HTMLTAG_886___管理領域___HTMLTAG_887__HTMLTAG_888___管理領域設定___HTMLTAG_889__HTMLTAG_890___
___HTMLTAG_891__HTMLTAG_892___檢視領域___HTMLTAG_893__HTMLTAG_894___檢視領域設定___HTMLTAG_895__HTMLTAG_896___
___HTMLTAG_897__HTMLTAG_898___管理身分識別提供者___HTMLTAG_899__HTMLTAG_900___管理身分提供者___HTMLTAG_901__HTMLTAG_902___
___HTMLTAG_903__HTMLTAG_904___管理事件___HTMLTAG_905__HTMLTAG_906___管理事件___HTMLTAG_907__HTMLTAG_908___
___HTMLTAG_909__HTMLTAG_910___管理授權___HTMLTAG_911__HTMLTAG_912___管理授權___HTMLTAG_913__HTMLTAG_914___
___HTMLTAG_915__HTMLTAG_916___模擬____HTMLTAG_917__HTMLTAG_918___模擬使用者___HTMLTAG_919__HTMLTAG_920___
___HTMLTAG_921__HTMLTAG_922___查詢使用者___HTMLTAG_923__HTMLTAG_924___搜尋使用者___HTMLTAG_925__HTMLTAG_926___
___HTMLTAG_927__HTMLTAG_928___查詢群組___HTMLTAG_929__HTMLTAG_930___搜尋群組___HTMLTAG_931__HTMLTAG_932___
___HTMLTAG_933__HTMLTAG_934___查詢客戶端____HTMLTAG_935__HTMLTAG_936___搜尋客戶端___HTMLTAG_937__HTMLTAG_938___
___HTMLTAG_939__HTMLTAG_940___查詢領域___HTMLTAG_941__HTMLTAG_942___搜尋領域___HTMLTAG_943__HTMLTAG_944___
</tbody>
</table>

___HTMLTAG_947__HTMLTAG_948___範例：建立僅管理使用者和群組的有限管理員：___HTMLTAG_949__HTMLTAG_950___
<pre><code>bin/kcadm.sh add-roles -r my-company \
  --uusername limited-admin \
  --cclientid realm-management \
  --rolename manage-users \
  --rolename view-users \
  --rolename query-users \
  --rolename query-groups</code></pre>

___HTMLTAG_951__HTMLTAG_952___10。在應用程式中使用角色___HTMLTAG_953__HTMLTAG_954___

___HTMLTAG_955__HTMLTAG_956___10.1 從存取權杖檢查角色___HTMLTAG_957__HTMLTAG_958___
<p>包含角色的已解碼存取權杖：</p>
<pre><code>{
  "sub": "user-uuid",
  "realm_access": {
    "roles": [
      "admin",
      "manager",
      "user",
      "default-roles-my-company",
      "offline_access",
      "uma_authorization"
    ]
  },
  "resource_access": {
    "my-web-app": {
      "roles": [
        "editor",
        "content-admin"
      ]
    },
    "account": {
      "roles": [
        "manage-account",
        "manage-account-links",
        "view-profile"
      ]
    }
  }
}</code></pre>

___HTMLTAG_961__HTMLTAG_962___10.2 Spring 啟動範例___HTMLTAG_963__HTMLTAG_964___
___預編碼_24___

___HTMLTAG_965__HTMLTAG_966___10.3 Node.js (Express) 中的範例___HTMLTAG_967__HTMLTAG_968___
___預編碼_25___

___HTMLTAG_969__HTMLTAG_970___11。練習___HTMLTAG_971__HTMLTAG_972___<ol>
___HTMLTAG_974__HTMLTAG_975__HTMLTAG_976___建立領域角色</strong>：<code>超級管理員</code>、<code>經理___MLTAG_981___、HTML <code>查看者___HTMLTAG_985__HTMLTAG_986__HTMLTAG_987___
___HTMLTAG_988__HTMLTAG_989__HTMLTAG_990___為客戶端<code>我的網頁應用</code>建立客戶端角色_</strong>：<code>建立內容編輯器_____1G______________ <code>內容審查者</code>、<code>內容發佈者___HTMLTAG_999__HTMLTAG_1000__HTMLTAG_1001___
___HTMLTAG_1002__HTMLTAG_1003__HTMLTAG_1004___建立複合角色</strong>:</p>
<ul>
___HTMLTAG_1008__HTMLTAG_1009___超級管理員</code> 包含： <code>manager</code> + 所有客戶端角色</li>
___HTMLTAG_1014__HTMLTAG_1015___經理</code> 包含： <code>工作人員</code> + <code>內容審查者___HTMLTAG_1020HT<code>內容說明
___HTMLTAG_1022__HTMLTAG_1023___工作人員</code>包含：<code>查看者</code> + <code>內容編輯</code> + <code>內容編輯___HTMLTAG_1028__29___
</ul>
</li>
___HTMLTAG_1032__HTMLTAG_1033__HTMLTAG_1034___向群組指派角色</strong>:</p>
<ul>
<li>群組 <code>工程</code>：領域角色 <code>工作人員___HTMLTAG_1042__HTMLTAG_1043___
<li>群組 <code>工程/後端</code>：客戶端角色 <code>內容編輯___HTMLTAG_1048__HTMLTAG_1049___
</ul>
</li>
___HTMLTAG_1052__HTMLTAG_1053__HTMLTAG_1054___啟用細粒度管理員權限 V2</strong> 並建立：</p>
<ul>
<li>基於角色的政策 <code>hr-admin___HTMLTAG_1060__HTMLTAG_1061___
<li>將策略指派給使用者檢視/管理權限</li>
<li>使用角色 <code>hr-admin___HTMLTAG_1066__HTMLTAG_1067___ 的使用者進行測試
</ul>
</li>
___HTMLTAG_1070__HTMLTAG_1071__HTMLTAG_1072___為客戶端<code>my-backend-service_</code>建立服務帳戶</strong>，角色為___HTMLTAGage_10761073__76___]___ <code>查看使用者</code>並使用客戶端憑證授予進行測試___HTMLTAG_1080__HTMLTAG_1081___
</ol>

___HTMLTAG_1083__HTMLTAG_1084___12。摘要___HTMLTAG_1085__HTMLTAG_1086___<p>在本課中，您學習了：</p>
<ul>
___HTMLTAG_1090__HTMLTAG_1091___區分 <strong>領域角色</strong> 與 <strong>客戶端角色___HTMLTAG_1095__HTMLTAG_1096__HTTAG_1096__HT
___HTMLTAG_1098__HTMLTAG_1099___建立 <strong>複合角色</strong>具有層次結構__HTMLTAG_1102__HTMLTAG_1103___
___HTMLTAG_1104__HTMLTAG_1105__HTMLTAG_1106___角色映射_</strong>使用者和群組（直接和舊版）____HTMLTAG_1108__HTMLTAG_1109___
___HTMLTAG_1110__HTMLTAG_1111___設定 <strong>新使用者的預設角色</strong>___HTMLTAG_1114__HTMLTAG_1115___
___HTMLTAG_1116__HTMLTAG_1117___使用 <strong>服務帳戶角色</strong>進行機器對機器通訊___HTMLTAG_1120__HTMLTAG_1121___
___HTMLTAG_1122__HTMLTAG_1123__HTMLTAG_1124___細粒度管理員權限 V2</strong> 以及策略（基於角色、基於使用者、基於群組、基於客戶端）___HTMLTAG_1126__HTMLTAG_1127___
___HTMLTAG_1128__HTMLTAG_1129___建立 <strong>專用領域管理員</strong>，具有有限權限___HTMLTAG_1132__HTMLTAG_1133___
___HTMLTAG_1134__HTMLTAG_1135___檢查應用程式中的角色（Spring Boot、Node.js）___HTMLTAG_1136__HTMLTAG_1137___
</ul>

<p>下一篇文章將引導您了解 Keycloak 中的 <strong>客戶端、客戶端範圍和 OpenID Connect</strong>.</p>