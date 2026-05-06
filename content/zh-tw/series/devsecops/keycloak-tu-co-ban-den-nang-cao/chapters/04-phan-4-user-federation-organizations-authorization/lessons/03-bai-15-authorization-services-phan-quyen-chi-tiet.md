---
id: 019d8b30-b115-7001-c001-e0c5f8100115
title: 第 15 課：授權服務 - 詳細授權
slug: bai-15-authorization-services-phan-quyen-chi-tiet
description: 授權服務深入研究：資源伺服器、資源、範圍、權限、策略（基於角色、基於使用者、基於群組、基於客戶端、基於時間、JavaScript、聚合）。 UMA 2.0 支援、權限 API、策略執行器、推送聲明、資源屬性、聲明資訊點、評估 API 和授權整合到 Spring Boot / Node.js 應用程式中。
duration_minutes: 240
is_free: true
video_url: null
sort_order: 15
section_title: 第 4 部分：使用者聯盟、組織與授權
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8946" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8946)"/>

  <!-- Decorations -->
  <g>
    <circle cx="789" cy="77" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="978" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="667" cy="195" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="856" cy="124" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="53" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="147" x2="1100" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="177" x2="1050" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1083.3730669589463,226 1083.3730669589463,268 1047,289 1010.6269330410536,268 1010.6269330410536,226 1047,205" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：授權服務 - 部門</tspan>
      <tspan x="60" dy="42">詳細權限</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：使用者聯盟、組織與授權__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。授權服務 — 概論___HTMLTAG_69__HTMLTAG_70___

<p>Keycloak 授權服務提供 <strong>細粒度授權</strong>，允許在資源和範圍層級進行存取控制，而不僅僅是依賴角色。本系統符合 <strong>UMA 2.0</strong>（使用者管理存取）標準並支援多種策略類型。 </p>

___HTMLTAG_77__HTMLTAG_78___1.1 主要概念___HTMLTAG_79__HTMLTAG_80___<table>
<thead>
___HTMLTAG_83__HTMLTAG_84___概念___HTMLTAG_85__HTMLTAG_86___說明____HTMLTAG_87__HTMLTAG_88___範例____HTMLTAG_89__HTMLTAG_90___
</thead>
<tbody>
___HTMLTAG_93__HTMLTAG_94__HTMLTAG_95___資源伺服器___HTMLTAG_96__HTMLTAG_97__HTMLTAG_98___應用程式需要保護資源（是Keycloak客戶端）___HTMLTAG_99__HTMLTAG_100_____10100___
___HTMLTAG_103__HTMLTAG_104__HTMLTAG_105___資源___HTMLTAG_106__HTMLTAG_107__HTMLTAG_108___要保護的物件____HTMLTAG_109__HTMLTAG_110___、API 端點、頁數
___HTMLTAG_113__HTMLTAG_114__HTMLTAG_115___範圍___HTMLTAG_116__HTMLTAG_117__HTMLTAG_118___可以對資源執行的操作___HTMLTAG_119__HTMLTAG_120__HTMLTAG_121___HTMLTAG_119__HTMLTAG_120__HTMLTAG_121___ <code>編輯</code>、<code>刪除</code>、<code>發佈___HTMLTAG_128__HTMLTAG_129__HTMLTAG_130___HTMLTAG_128__HTMLTAG_129__HTMLTAG_130___
___HTMLTAG_131__HTMLTAG_132__HTMLTAG_133___權限___HTMLTAG_134__HTMLTAG_135__HTMLTAG_136___將資源/範圍與策略結合____HTMLTAG_137__HTMLTAG_138___「誰可以檢視文件G」___13135____ML_138___
___HTMLTAG_141__HTMLTAG_142__HTMLTAG_143___政策___HTMLTAG_144__HTMLTAG_145__HTMLTAG_146___必須滿足允許存取的條件____HTMLTAG_147__HTMLTAG_148___「使用者必須有編輯者____HTMLTAG_147__HTMLTAG_148___「使用者」必須具有編輯者____HTMLTAG_147__HTMLTAG_148___「使用者」必須有編輯者____HTML410G1047____ML_148___「使用者」。
</tbody>
</table>

___HTMLTAG_153__HTMLTAG_154___1.2 授權流程___HTMLTAG_155__HTMLTAG_156___

___預編碼_0___

___HTMLTAG_157__HTMLTAG_158___2。啟用授權服務___HTMLTAG_159__HTMLTAG_160___

<p>在 <strong>客戶端層級啟用</strong>（非領域）：</p>

___HTMLTAG_165__HTMLTAG_166___2.1 透過管理控制台___HTMLTAG_167__HTMLTAG_168___

___預編碼_1___

___HTMLTAG_169__HTMLTAG_170___2.2 透過 kcadm.sh___HTMLTAG_171__HTMLTAG_172___

___預編碼_2___

<p>啟用後，選項卡 <strong>授權</strong> 將顯示在客戶端設定上，並附有子選項卡：設定、資源、範圍、策略、權限、評估.</p>

___HTMLTAG_177__HTMLTAG_178___3。資源___HTMLTAG_179__HTMLTAG_180___

<p>資源代表 <strong>要保護的物件</strong>。每個資源都可以有 URI、類型、範圍和屬性。 </p>

___HTMLTAG_185__HTMLTAG_186___3.1 建立資源___HTMLTAG_187__HTMLTAG_188___

___預編碼_3___

___HTMLTAG_189__HTMLTAG_190___3.2 資源屬性___HTMLTAG_191__HTMLTAG_192___

<p>屬性允許向資源添加元數據，可在策略中使用：</p>

___預編碼_4___

___HTMLTAG_195__HTMLTAG_196___4。範圍___HTMLTAG_197__HTMLTAG_198___

<p>作用域定義了 <strong>actions__HTMLTAG_201___ 可以對資源執行：</p>

___預編碼_5___

<p>常見範圍模式：</p><table>
<thead>
___HTMLTAG_207__HTMLTAG_208___模式___HTMLTAG_209__HTMLTAG_210___範圍___HTMLTAG_211__HTMLTAG_212___
</thead>
<tbody>
___HTMLTAG_215__HTMLTAG_216__HTMLTAG_217____CRUD___HTMLTAG_218__HTMLTAG_219__HTMLTAG_220__HTMLTAG_2 21___建立</code>、<code>讀取</code>、<code>更新</code>、 <code>刪除___HTMLTAG_228__HTMLTAG_229__HTMLTAG_230___
___HTMLTAG_231__HTMLTAG_232__HTMLTAG_233___內容管理___HTMLTAG_234__HTMLTAG_235__HTMLTAG_236__HTMLTAG_2 37___查看</code>、<code>編輯</code>、<code>發佈</code>、 <code>存檔___HTMLTAG_244__HTMLTAG_245__HTMLTAG_246___
___HTMLTAG_247__HTMLTAG_248__HTMLTAG_249___API 存取___HTMLTAG_250__HTMLTAG_251__HTMLTAG_252__HTMLTAG_253___讀取</code>____<circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>MLTAG_254____<circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/> <code>管理員___HTMLTAG_258__HTMLTAG_259__HTMLTAG_260___
___HTMLTAG_261__HTMLTAG_262__HTMLTAG_263___檔案操作___HTMLTAG_264__HTMLTAG_265__HTMLTAG_266__HTMLTAG_2 67___下載</code>、<code>上傳</code>、<code>共享</code>、 <code>刪除___HTMLTAG_274__HTMLTAG_275__HTMLTAG_276___
</tbody>
</table>

___HTMLTAG_279__HTMLTAG_280___5。政策___HTMLTAG_281__HTMLTAG_282___

<p>策略是決定允許或拒絕存取的<strong>條件</strong>。 Keycloak 支援多種類型的策略：</p>

___HTMLTAG_287__HTMLTAG_288___5.1 基於角色的策略___HTMLTAG_289__HTMLTAG_290___

___預編碼_6___

___HTMLTAG_291__HTMLTAG_292___5.2 基於使用者的政策___HTMLTAG_293__HTMLTAG_294___

___預編碼_7___

___HTMLTAG_295__HTMLTAG_296___5.3 基於群組的策略___HTMLTAG_297__HTMLTAG_298___

___預編碼_8___

___HTMLTAG_299__HTMLTAG_300___5.4 基於客戶端的政策___HTMLTAG_301__HTMLTAG_302___

___預編碼_9___

___HTMLTAG_303__HTMLTAG_304___5.5 基於時間的策略___HTMLTAG_305__HTMLTAG_306___

___預編碼_10___

___HTMLTAG_307__HTMLTAG_308___5.6 JavaScript 政策___HTMLTAG_309__HTMLTAG_310___

___HTMLTAG_311__HTMLTAG_312___注意：</strong> JavaScript 策略需要透過 <code>--features=scripts</code> 或上傳 JAR.</p> 啟用</code> 或上傳 JAR.</p> 啟用

<pre><code class="language-javascript">// Script-based policy (upload dưới dạng JAR provider)
// Filename: my-policy.js
var context = $evaluation.getContext();
var identity = context.getIdentity();
var attributes = identity.getAttributes();

// Kiểm tra custom attribute
var department = attributes.getValue('department');
if (department && department.asString(0) === 'engineering') {
    $evaluation.grant();
} else {
    $evaluation.deny();
}</code></pre>

<p>將 JavaScript 原則部署為 JAR：</p>

<pre><code class="language-bash"># Tạo cấu trúc thư mục
mkdir -p META-INF/keycloak-scripts/

# Tạo file descriptor
cat &gt; META-INF/keycloak-scripts/keycloak-scripts.json &lt;&lt; 'EOF'
{
  "policies": [
    {
      "name": "Engineering Department Policy",
      "fileName": "engineering-policy.js",
      "description": "Allow only engineering department"
    }
  ]
}
EOF

# Package JAR
jar cf my-policies.jar META-INF/ engineering-policy.js

# Deploy
cp my-policies.jar /opt/keycloak/providers/
/opt/keycloak/bin/kc.sh build</code></pre>

___HTMLTAG_319__HTMLTAG_320___5.7 綜合政策___HTMLTAG_321__HTMLTAG_322___

<p>透過決策策略將多個策略合併為單一策略：</p>

<pre><code class="language-json">{
  "name": "Full Access Policy",
  "description": "Kết hợp Role + Group + Time policies",
  "type": "aggregate",
  "logic": "POSITIVE",
  "decisionStrategy": "UNANIMOUS",
  "policies": [
    "Editor Role Policy",
    "Engineering Group Policy",
    "Business Hours Policy"
  ]
}</code></pre>

___HTMLTAG_325__HTMLTAG_326___6。決策策略___HTMLTAG_327__HTMLTAG_328___<table>
<thead>
___HTMLTAG_331__HTMLTAG_332___策略____HTMLTAG_333__HTMLTAG_334___說明____HTMLTAG_335__HTMLTAG_336___何時使用____HTMLTAG_337__HTMLTAG_338___
</thead>
<tbody>
___HTMLTAG_341__HTMLTAG_342__HTMLTAG_343___一致___HTMLTAG_344__HTMLTAG_345__HTMLTAG_346___所有政策必須允許___HTMLTAG_347__HTMLTAG_348______ML] 所有政策必須允許___HTMLTAG_347__HTMLTAG_348______ML — 所有條件必須符合嚴格限制
___HTMLTAG_351__HTMLTAG_352__HTMLTAG_353___肯定___HTMLTAG_354__HTMLTAG_355__HTMLTAG_356___至少一項政策允許___HTMLTAG_357__HTMLTAG_358_____ 只滿足滿足一個條件___MLTAGMLTAGMLTAGMLTAGML_4141.
___HTMLTAG_361__HTMLTAG_362__HTMLTAG_363___共識___HTMLTAG_364__HTMLTAG_365__HTMLTAG_366___允許數字>拒絕___HTMLTAG_367__HTMLTAG_368___投票 - ___ML_MLTAGMLTAGMLTAGMLTAG_368___投票 - 7_ML
</tbody>
</table>

___HTMLTAG_373__HTMLTAG_374___7。權限___HTMLTAG_375__HTMLTAG_376___

<p>權限將 <strong>資源/範圍與政策</strong>結合以建立授權規則。 </p>

___HTMLTAG_381__HTMLTAG_382___7.1 基於資源的權限___HTMLTAG_383__HTMLTAG_384___

<pre><code class="language-bash"># Tạo resource-based permission
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/permission/resource" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Document Access Permission",
    "description": "Ai có thể truy cập documents",
    "type": "resource",
    "logic": "POSITIVE",
    "decisionStrategy": "UNANIMOUS",
    "resources": ["Document Resource"],
    "policies": ["Editor Role Policy", "Business Hours Policy"]
  }'</code></pre>

___HTMLTAG_385__HTMLTAG_386___7.2 基於範圍的權限___HTMLTAG_387__HTMLTAG_388___

<pre><code class="language-bash"># Tạo scope-based permission
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/permission/scope" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Document Delete Permission",
    "description": "Chỉ admin mới được xóa documents",
    "type": "scope",
    "logic": "POSITIVE",
    "decisionStrategy": "UNANIMOUS",
    "resources": ["Document Resource"],
    "scopes": ["delete"],
    "policies": ["Admin Role Policy"]
  }'

# Permission cho publish scope
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/permission/scope" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Document Publish Permission",
    "description": "Editor và Admin được publish",
    "type": "scope",
    "logic": "POSITIVE",
    "decisionStrategy": "AFFIRMATIVE",
    "resources": ["Document Resource"],
    "scopes": ["publish"],
    "policies": ["Editor Role Policy", "Admin Role Policy"]
  }'</code></pre>

___HTMLTAG_389__HTMLTAG_390___8。 UMA 2.0___HTMLTAG_391__HTMLTAG_392___

<p>使用者管理的存取 (UMA) 2.0 允許 <strong> 資源擁有者管理 </strong> 對其資源的存取。用戶可以與其他用戶共享資源，無需管理員幹預。 </p>

___HTMLTAG_397__HTMLTAG_398___8.1 啟用 UMA___HTMLTAG_399__HTMLTAG_400___

<pre><code class="language-text">Clients → my-app → Authorization → Settings:
  Resource server settings:
    Policy Enforcement Mode: ENFORCING
    Decision Strategy: UNANIMOUS

Resources:
  Resource → Owner Managed Access: ON</code></pre>

___HTMLTAG_401__HTMLTAG_402___8.2 UMA 撥款流程___HTMLTAG_403__HTMLTAG_404___

<pre><code class="language-bash"># 1. Client gọi Resource Server → bị deny → nhận permission ticket
# Response 401 với header:
# WWW-Authenticate: UMA realm="my-realm",
#   as_uri="http://localhost:8080/realms/my-realm",
#   ticket="permission-ticket-value"

# 2. Client exchange permission ticket lấy RPT (Requesting Party Token)
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket" \
  -d "ticket=permission-ticket-value" \
  -d "client_id=my-app" \
  -d "client_secret=my-secret"

# Response chứa RPT (access token with authorization data)
{
  "access_token": "eyJhbGciOi...",
  "token_type": "Bearer",
  "authorization": {
    "permissions": [
      {
        "rsid": "resource-uuid",
        "rsname": "Document Resource",
        "scopes": ["view", "edit"]
      }
    ]
  }
}</code></pre>

___HTMLTAG_405__HTMLTAG_406___9。權限API___HTMLTAG_407__HTMLTAG_408___

<p>權限 API 允許 <strong> 以程式設計方式檢查權限</strong>，無需 UMA 流程：</p>

<pre><code class="language-bash"># Kiểm tra quyền truy cập cho user hiện tại
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket" \
  -d "audience=my-app" \
  -d "permission=Document Resource#view" \
  -d "response_mode=decision" \
  -d "client_id=my-frontend" \
  -d "subject_token=${USER_ACCESS_TOKEN}"

# Response:
# { "result": true }  → PERMIT
# { "result": false } → DENY

# Kiểm tra nhiều permissions cùng lúc
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket" \
  -d "audience=my-app" \
  -d "permission=Document Resource#view" \
  -d "permission=Document Resource#edit" \
  -d "permission=Admin Panel#access" \
  -d "response_mode=permissions" \
  -d "client_id=my-frontend" \
  -d "subject_token=${USER_ACCESS_TOKEN}"</code></pre>

___HTMLTAG_413__HTMLTAG_414___10。推送的聲明___HTMLTAG_415__HTMLTAG_416___

<p>推送聲明允許客戶 <strong> 在請求授權時發送額外的上下文資訊</strong>，幫助政策擁有更多資料來做出決策：</p>

<pre><code class="language-bash"># Request với pushed claims
curl -X POST "http://localhost:8080/realms/my-realm/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=urn:ietf:params:oauth:grant-type:uma-ticket" \
  -d "audience=my-app" \
  -d "permission=Document Resource#edit" \
  -d 'claim_token={"ip_address":["10.0.0.5"],"device_type":["desktop"],"risk_score":["low"]}' \
  -d "claim_token_format=urn:ietf:params:oauth:token-type:jwt" \
  -d "client_id=my-frontend" \
  -d "subject_token=${USER_ACCESS_TOKEN}"</code></pre>

___HTMLTAG_421__HTMLTAG_422___11。聲明資訊點___HTMLTAG_423__HTMLTAG_424___

<p>聲明資訊點允許 <strong> 自動從多個來源收集聲明__HTMLTAG_427___（HTTP 請求、外部服務）以在策略中使用：</p>

___預編碼_20___

___HTMLTAG_429__HTMLTAG_430___12。評估 API___HTMLTAG_431__HTMLTAG_432___

<p>Keycloak 管理控制台提供 <strong>評估工具</strong>，用於在部署之前測試權限。 </p>

___HTMLTAG_437__HTMLTAG_438___12.1 使用評估工具___HTMLTAG_439__HTMLTAG_440___

<pre><code class="language-text">Clients → my-app → Authorization → Evaluate:
1. Identity Information:
   - User: chọn user cần test
   - Roles: chọn roles (hoặc tự động từ user)
2. Resources:
   - Thêm resources cần evaluate
3. Contextual Information:
   - Pushed Claims (JSON)
4. Click "Evaluate"

Results:
  ┌─────────────────────────────┬────────┐
  │ Permission                  │ Result │
  ├─────────────────────────────┼────────┤
  │ Document Access Permission  │ PERMIT │
  │ Document Delete Permission  │ DENY   │
  │ Admin Panel Permission      │ DENY   │
  └─────────────────────────────┴────────┘</code></pre>

___HTMLTAG_441__HTMLTAG_442___12.2 透過 API 進行評估___HTMLTAG_443__HTMLTAG_444___

<pre><code class="language-bash"># Evaluate permissions cho user cụ thể
curl -X POST "http://localhost:8080/admin/realms/my-realm/clients/${CLIENT_ID}/authz/resource-server/policy/evaluate" \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user-uuid",
    "roleIds": [],
    "resources": [
      {
        "name": "Document Resource",
        "scopes": ["view", "edit", "delete"]
      }
    ],
    "context": {
      "attributes": {
        "ip_address": ["10.0.0.5"]
      }
    },
    "entitlements": false
  }'</code></pre>

___HTMLTAG_445__HTMLTAG_446___13。政策執行者___HTMLTAG_447__HTMLTAG_448___<p>策略強制執行器是 <strong>Java 程式庫</strong> 整合到應用程式中以自動執行授權策略：</p>

___HTMLTAG_453__HTMLTAG_454___13.1 Spring Boot 整合___HTMLTAG_455__HTMLTAG_456___

<pre><code class="language-xml">&lt;!-- pom.xml --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.keycloak&lt;/groupId&gt;
    &lt;artifactId&gt;keycloak-authz-client&lt;/artifactId&gt;
    &lt;version&gt;26.0.0&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.keycloak&lt;/groupId&gt;
    &lt;artifactId&gt;keycloak-policy-enforcer&lt;/artifactId&gt;
    &lt;version&gt;26.0.0&lt;/version&gt;
&lt;/dependency&gt;</code></pre>

___預編碼_24___

___HTMLTAG_457__HTMLTAG_458___13.2 keycloak.json 設定___HTMLTAG_459__HTMLTAG_460___

___預編碼_25___

___HTMLTAG_461__HTMLTAG_462___13.3 Node.js 整合___HTMLTAG_463__HTMLTAG_464___

<pre><code class="language-typescript">// authorization.ts
import axios from 'axios';

interface PermissionResult {
  rsid: string;
  rsname: string;
  scopes: string[];
}

class KeycloakAuthzClient {
  private readonly baseUrl: string;
  private readonly realm: string;
  private readonly clientId: string;
  private readonly clientSecret: string;

  constructor(config: {
    baseUrl: string;
    realm: string;
    clientId: string;
    clientSecret: string;
  }) {
    this.baseUrl = config.baseUrl;
    this.realm = config.realm;
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
  }

  async checkPermission(
    userToken: string,
    resource: string,
    scope: string
  ): Promise&lt;boolean&gt; {
    try {
      const response = await axios.post(
        `${this.baseUrl}/realms/${this.realm}/protocol/openid-connect/token`,
        new URLSearchParams({
          grant_type: 'urn:ietf:params:oauth:grant-type:uma-ticket',
          audience: this.clientId,
          permission: `${resource}#${scope}`,
          response_mode: 'decision',
          subject_token: userToken,
        }),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          auth: {
            username: this.clientId,
            password: this.clientSecret,
          },
        }
      );
      return response.data.result === true;
    } catch {
      return false;
    }
  }

  async getPermissions(userToken: string): Promise&lt;PermissionResult[]&gt; {
    const response = await axios.post(
      `${this.baseUrl}/realms/${this.realm}/protocol/openid-connect/token`,
      new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:uma-ticket',
        audience: this.clientId,
        response_mode: 'permissions',
        subject_token: userToken,
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        auth: {
          username: this.clientId,
          password: this.clientSecret,
        },
      }
    );
    return response.data;
  }
}

// Express middleware
import { Request, Response, NextFunction } from 'express';

const authzClient = new KeycloakAuthzClient({
  baseUrl: 'http://localhost:8080',
  realm: 'my-realm',
  clientId: 'my-app',
  clientSecret: 'secret',
});

function enforcePermission(resource: string, scope: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const allowed = await authzClient.checkPermission(token, resource, scope);
    if (!allowed) {
      return res.status(403).json({
        error: `Permission denied: ${resource}#${scope}`,
      });
    }
    next();
  };
}

// Usage
app.get('/api/documents',
  enforcePermission('Document Resource', 'view'),
  documentsController.list
);

app.put('/api/documents/:id',
  enforcePermission('Document Resource', 'edit'),
  documentsController.update
);

app.delete('/api/documents/:id',
  enforcePermission('Document Resource', 'delete'),
  documentsController.delete
);</code></pre>

___HTMLTAG_465__HTMLTAG_466___14。 kcadm.sh — 授權管理___HTMLTAG_467__HTMLTAG_468___

___預編碼_27___

___HTMLTAG_469__HTMLTAG_470___15。最佳實務___HTMLTAG_471__HTMLTAG_472___

<ul>
___HTMLTAG_474__HTMLTAG_475___從粗粒度開始→細粒度</strong> — 先使用基於角色的，根據需要添加基於資源的__HTMLTAG_477___
___HTMLTAG_478__HTMLTAG_479___使用資源類型__HTMLTAG_480___ — 將相同類型的資源分組，而不是為每個單獨的資源建立權限</li>
___HTMLTAG_482__HTMLTAG_483___使用評估 API 進行測試</strong> — 在部署到生產環境之前始終測試權限</li>
___HTMLTAG_486__HTMLTAG_487___謹慎決策策略</strong> — <code>一致</code>更安全，但更限制性 <code>肯定</text>更安全，但更限制性 <code>肯定___HTMLTAG_492__HT
___HTMLTAG_494__HTMLTAG_495___限制 JavaScript 策略</strong> — 優先考慮內建策略類型，僅在真正需要時才使用 JavaScript</li>
___HTMLTAG_498__HTMLTAG_499___監控權限評估效能</strong> — 太多巢狀策略可能會減慢</li>
___HTMLTAG_502__HTMLTAG_503___匯出/匯入授權配置</strong> — 使用 kcadm.sh 進行版本控制授權設定</li>
___HTMLTAG_506__HTMLTAG_507___將權限檢查與業務邏輯分開</strong> - 在中間件/攔截器層級強制</li>
</ul>