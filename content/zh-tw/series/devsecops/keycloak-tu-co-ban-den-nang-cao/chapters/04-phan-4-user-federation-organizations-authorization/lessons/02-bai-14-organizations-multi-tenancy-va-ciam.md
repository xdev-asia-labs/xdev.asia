---
id: 019d8b30-b114-7001-c001-e0c5f8100114
title: 第 14 課：組織 - 多租戶和 CIAM
slug: bai-14-organizations-multi-tenancy-va-ciam
description: 啟用和配置組織功能、建立/管理組織、組織網域、組織屬性、管理成員（託管、非託管）、邀請管理（發送、追蹤、重新發送、刪除）、將身分提供者與組織關聯、驗證成員身分（身分優先登入）、將組織聲明對應到令牌和實際 B2B/B2B2C 用例。
duration_minutes: 180
is_free: true
video_url: null
sort_order: 14
section_title: 第 4 部分：使用者聯盟、組織與授權
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4862" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4862)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1057" cy="201" r="30" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="1014" cy="258" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="971" cy="55" r="22" fill="#a78bfa" opacity="0.08"/>
    <circle cx="928" cy="112" r="33" fill="#a78bfa" opacity="0.09"/>
    <circle cx="885" cy="169" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="211" x2="1100" y2="291" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="241" x2="1050" y2="311" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="933.5166604983954,98 933.5166604983954,124 911,137 888.4833395016046,124 888.4833395016046,98 911,85" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">🔒 DevSecOps — 第 14 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 14 課：組織 - 多租戶和</tspan>
      <tspan x="60" dy="42">CIAM</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：使用者聯盟、組織與授權__HTMLTAG_62___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。組織 — 概述___HTMLTAG_69__HTMLTAG_70___

<p>Keycloak 組織是一項允許在單一領域中進行 <strong>多重租戶</strong>管理的功能。您可以在領域內建立 <strong>組織</strong> 以對使用者進行分組、管理網域並按組織控制訪問，而不是為每個組織（租用戶）建立多個領域。 </p>

<p>這是 <strong>B2B</strong>（企業對企業）和 <strong>B2B2C</strong>（企業對企業對消費者）平台的一項重要功能，也稱為<strong>CIAM</strong>（客戶身分與存取）管理）.</p>

___HTMLTAG_85__HTMLTAG_86___1.1 使用案例___HTMLTAG_87__HTMLTAG_88___

<table>
<thead>
___HTMLTAG_91__HTMLTAG_92___情境___HTMLTAG_93__HTMLTAG_94___說明___HTMLTAG_95__HTMLTAG_96___
</thead>
<tbody>
___HTMLTAG_99__HTMLTAG_100__HTMLTAG_101___SaaS 多租戶___HTMLTAG_102__HTMLTAG_103__HTMLTAG_104___每個客戶公司都是一個組織，使用者屬於其組織____HTMLTAG_105__HTMLTAG_106___
___HTMLTAG_107__HTMLTAG_108__HTMLTAG_109___B2B 入口網站____HTMLTAG_110__HTMLTAG_111__HTMLTAG_112___合作夥伴/供應商有自己的組織，合作夥伴員工透過組織存取入口網站____HTMLTAG_113131413134__
___HTMLTAG_115__HTMLTAG_116__HTMLTAG_117___有子公司的企業___HTMLTAG_118__HTMLTAG_119__HTMLTAG_120___公司有多個子公司，每個子公司都是一個組織____HTMLTAG_1211HTMLTAG_122___
___HTMLTAG_123__HTMLTAG_124__HTMLTAG_125___教育平台____HTMLTAG_126__HTMLTAG_127__HTMLTAG_128___每個學校/機構是一個組織，教師/學生是成員____HTMLTAG_129__HTMLTAG_130___
</tbody>
</table>___HTMLTAG_133__HTMLTAG_134___2。啟用組織功能___HTMLTAG_135__HTMLTAG_136___

<p>組織是 Keycloak 25+ 中提供的功能。啟用：</p>

___HTMLTAG_139__HTMLTAG_140___2.1 在領域啟用___HTMLTAG_141__HTMLTAG_142___

___預編碼_0___

___HTMLTAG_143__HTMLTAG_144___2.2 檢查狀態___HTMLTAG_145__HTMLTAG_146___

___預編碼_1___

___HTMLTAG_147__HTMLTAG_148___3。建立和管理組織___HTMLTAG_149__HTMLTAG_150___

___HTMLTAG_151__HTMLTAG_152___3.1 透過管理控制台建立組織___HTMLTAG_153__HTMLTAG_154___

<p>轉至 <strong>管理控制台 → 組織 → 建立組織</strong>:</p>

<table>
<thead>
___HTMLTAG_161__HTMLTAG_162___欄位____HTMLTAG_163__HTMLTAG_164___說明____HTMLTAG_165__HTMLTAG_166___範例____HTMLTAG_167__HTMLTAG_168___
</thead>
<tbody>
___HTMLTAG_171__HTMLTAG_172__HTMLTAG_173___名稱___HTMLTAG_174__HTMLTAG_175__HTMLTAG_176___組織名稱（必填）___HTMLTAG_177__HTMLTAG_178__HTMLTAAc_179______ Corporation___HTMLTAG_180__HTMLTAG_181__HTMLTAG_182___
___HTMLTAG_183__HTMLTAG_184__HTMLTAG_185___別名___HTMLTAG_186__HTMLTAG_187__HTMLTAG_188___自行產生的唯一別名__ _HTMLTAG_189__HTMLTAG_190__HTMLTAG_191___acme-corporation___HTMLTAG_192__HTMLTAG_193__HTMLTAG_194___
___HTMLTAG_195__HTMLTAG_196__HTMLTAG_197___說明___HTMLTAG_198__HTMLTAG_199__HTMLTAG_200___組織說明____HTMLTAG_201__HTMLTAG_202__HTMLTAG_203___Acme Corp -企業客戶___HTMLTAG_204__HTMLTAG_205__HTMLTAG_206___
___HTMLTAG_207__HTMLTAG_208__HTMLTAG_209___重定向網址___HTMLTAG_210__HTMLTAG_211__HTMLTAG_212___會員貼文輸入後的網址重新導向____HTMLTAG_213__HTMLTAG_214__HTMLTAG_215__URL_1___>___HTMLTAG_216__HTMLTAG_217___
</tbody>
</table>

___HTMLTAG_220__HTMLTAG_221___3.2 透過 REST API 建立組織___HTMLTAG_222__HTMLTAG_223___

___預編碼_2___

___HTMLTAG_224__HTMLTAG_225___4。組織域___HTMLTAG_226__HTMLTAG_227___

<p>組織網域允許 <strong> 根據電子郵件網域自動將使用者與組織 </strong> 關聯。當使用者使用屬於註冊網域的電子郵件註冊或登入時，Keycloak 可以自動將使用者附加到相應的組織。 </p>

___預編碼_3___

___HTMLTAG_232__HTMLTAG_233___域狀態：___HTMLTAG_234__HTMLTAG_235___

<table>
<thead>
___HTMLTAG_238__HTMLTAG_239___狀態___HTMLTAG_240__HTMLTAG_241___說明___HTMLTAG_242__HTMLTAG_243___
</thead>
<tbody>
___HTMLTAG_246__HTMLTAG_247__HTMLTAG_248___已驗證___HTMLTAG_249__HTMLTAG_250__HTMLTAG_251___已驗證網域 - 擁有此電子郵件網域的使用者將自動取得組織資格<td>已驗證網域 - 擁有此電子郵件網域的使用者將自動取得組織資格</td>__MLTAG_253
___HTMLTAG_254__HTMLTAG_255__HTMLTAG_256___未經驗證___HTMLTAG_257__HTMLTAG_258__HTMLTAG_259___未經驗證的網域 - 僅用於匹配，需要管理員批准____HTMLTAG_260__HTMLTAG_261___
</tbody>
</table>___HTMLTAG_264__HTMLTAG_265___重要說明：___HTMLTAG_266__HTMLTAG_267___
<ul>
<li>域僅屬於 <strong>單一組織__HTMLTAG_271__HTMLTAG_272___
<li>域驗證有助於確保組織實際擁有該網域</li>
<li>子網域比對： <code>acme.com</code> 將符合 <code>user@acme.com</code> 但 <strong> 不 ___MLTAG_281符合<code>user@sub.acme.com___HTMLTAG_283__HTMLTAG_284___
</ul>

___HTMLTAG_286__HTMLTAG_287___5。組織屬性___HTMLTAG_288__HTMLTAG_289___

<p>自訂屬性允許為組織保存其他元資料：</p>

___預編碼_4___

<p>屬性可用來：</p>
<ul>
___HTMLTAG_295__HTMLTAG_296___令牌聲明</strong> — 新增組織元資料以存取/ID 令牌</li>
___HTMLTAG_299__HTMLTAG_300___授權策略</strong> — 基於屬性的授權</li>
___HTMLTAG_303__HTMLTAG_304___自訂邏輯__HTMLTAG_305___ — 處理應用程式中的業務邏輯</li>
</ul>

___HTMLTAG_308__HTMLTAG_309___6。管理會員___HTMLTAG_310__HTMLTAG_311___

___HTMLTAG_312__HTMLTAG_313___6.1 託管成員與非託管成員___HTMLTAG_314__HTMLTAG_315___

<table>
<thead>
___HTMLTAG_318__HTMLTAG_319___類型____HTMLTAG_320__HTMLTAG_321___說明____HTMLTAG_322__HTMLTAG_323___範例____HTMLTAG_324__HTMLTAG_325___
</thead>
<tbody>
___HTMLTAG_328__HTMLTAG_329__HTMLTAG_330___託管___HTMLTAG_331__HTMLTAG_332__HTMLTAG_333___使用者完全由組織管理 -生命週期與組織綁定___HTMLTAG_334__HTMLTAG_335___公司員工：離開組織時，帳戶將被停用___HTMLTAG_336__HTMLTAG_337___
___HTMLTAG_338__HTMLTAG_339__HTMLTAG_340___非託管___HTMLTAG_341__HTMLTAG_342__HTMLTAG_343____免費用戶，僅「加入」組織 —帳戶獨立存在____HTMLTAG_344__HTMLTAG_345____自由工作者、承包商：可以屬於多個組織___HTMLTAG_346__HTMLTAG_347___
</tbody>
</table>

___HTMLTAG_350__HTMLTAG_351___6.2 將現有使用者加入組織___HTMLTAG_352__HTMLTAG_353___

___預編碼_5___

___HTMLTAG_354__HTMLTAG_355___6.3 成員角色___HTMLTAG_356__HTMLTAG_357___

<p>可以在組織情境中為組織成員指派角色：</p>

<table>
<thead>
___HTMLTAG_362__HTMLTAG_363___角色___HTMLTAG_364__HTMLTAG_365___說明___HTMLTAG_366__HTMLTAG_367___
</thead>
<tbody>
___HTMLTAG_370__HTMLTAG_371__HTMLTAG_372___成員___HTMLTAG_373__HTMLTAG_374__HTMLTAG_375___預設角色 — 標準存取___HTMLTAG_376__HTMLTAG_377___
___HTMLTAG_378__HTMLTAG_379__HTMLTAG_380___管理員___HTMLTAG_381__HTMLTAG_382__HTMLTAG_383___組織管理員 — 可以管理成員和設定____HTMLTAG_384__HTMLTAG_385___
</tbody>
</table>

___HTMLTAG_388__HTMLTAG_389___7。邀請管理___HTMLTAG_390__HTMLTAG_391___<p>Keycloak 組織支援 <strong>邀請使用者</strong>透過電子郵件邀請加入組織。 </p>

___HTMLTAG_396__HTMLTAG_397___7.1 傳送邀請___HTMLTAG_398__HTMLTAG_399___

___預編碼_6___

___HTMLTAG_400__HTMLTAG_401___7.2 邀請狀態___HTMLTAG_402__HTMLTAG_403___

<table>
<thead>
___HTMLTAG_406__HTMLTAG_407___狀態___HTMLTAG_408__HTMLTAG_409___說明___HTMLTAG_410__HTMLTAG_411___
</thead>
<tbody>
___HTMLTAG_414__HTMLTAG_415__HTMLTAG_416___待處理___HTMLTAG_417__HTMLTAG_418__HTMLTAG_419___邀請已發送，但未接受__HTMLTAG_420__HTMLTAG_421___邀請已發送，但未接受__HTMLTAG_420__HTMLTAG_421___
___HTMLTAG_422__HTMLTAG_423__HTMLTAG_424___已過期___HTMLTAG_425__HTMLTAG_426__HTMLTAG_427___邀請可設定過期___HTMLTAG_428__HTMLTAG_429___
</tbody>
</table>

___HTMLTAG_432__HTMLTAG_433___7.3 管理邀請___HTMLTAG_434__HTMLTAG_435___

___預編碼_7___

___HTMLTAG_436__HTMLTAG_437___電子郵件範本：</strong> Keycloak 使用位於 <strong>領域設定 → 電子郵件 → 範本</strong> 的可自訂範本傳送電子郵件。預設模板包含一個鏈接，供用戶接受邀請並建立帳戶（如果他們沒有帳戶）。 </p>

___HTMLTAG_442__HTMLTAG_443___8。將身分提供者與組織相關聯___HTMLTAG_444__HTMLTAG_445___

<p>每個組織都可以擁有自己的 <strong>身分提供者</strong>，允許成員透過其組織的 IdP 登入（例如，Acme Corp 使用 Google Workspace，Beta Inc 使用 Okta）。 </p>

___HTMLTAG_450__HTMLTAG_451___8.1 將 IdP 與組織關聯___HTMLTAG_452__HTMLTAG_453___

___預編碼_8___

___HTMLTAG_454__HTMLTAG_455___8.2 工作原理__HTMLTAG_456__HTMLTAG_457___

<ol>
<li>使用者在登入頁面輸入電子郵件（身分優先登入）</li>
<li>Keycloak 確定電子郵件網域 → 找到對應的組織</li>
<li>如果組織有連結的 IdP → 將使用者重新導向到該組織的 IdP</li>
<li>使用者使用組織的 IdP 進行驗證</li>
<li>Keycloak 接收回應並自動將使用者附加到組織</li>
</ol>

___HTMLTAG_470__HTMLTAG_471___9。身分優先登入___HTMLTAG_472__HTMLTAG_473___

<p>身分優先登入是使用者 <strong> 先輸入電子郵件</strong>，然後 Keycloak 根據組織成員資格決定適當的驗證方法的流程。 </p>

___HTMLTAG_478__HTMLTAG_479___9.1 設定身分優先登入___HTMLTAG_480__HTMLTAG_481___

<p>啟用組織後，Keycloak 會自動建立流 <strong>「組織」</strong> 用於瀏覽器驗證。此流程的工作原理如下：</p>

___預編碼_9___

___HTMLTAG_486__HTMLTAG_487___9.2 設定組織的現有流程___HTMLTAG_488__HTMLTAG_489___

___預編碼_10___

___HTMLTAG_490__HTMLTAG_491___10。將組織宣告對應到令牌___HTMLTAG_492__HTMLTAG_493___

<p>Keycloak 可以新增 <strong> 組織資訊來存取令牌和 ID 令牌__HTMLTAG_496___，允許應用程式知道使用者屬於哪個組織。 </p>___HTMLTAG_498__HTMLTAG_499___10.1 組織成員映射器___HTMLTAG_500__HTMLTAG_501___

啟用組織功能後，<p>Keycloak 會自動新增 <code>organization</code> 聲明。聲明格式：</p>

<pre><code class="language-json">{
  "sub": "user-uuid",
  "email": "john@acme.com",
  "organization": {
    "acme-corporation": {
      "name": "Acme Corporation",
      "roles": ["member"]
    }
  },
  "iss": "http://localhost:8080/realms/my-realm",
  "aud": "my-app"
}</code></pre>

___HTMLTAG_506__HTMLTAG_507___10.2 自訂映射器設定___HTMLTAG_508__HTMLTAG_509___

<p>您可以將 <strong>組織成員協定映射器</strong> 新增至客戶端範圍以自訂宣告：</p>

<pre><code class="language-bash"># Thêm Organization Membership Mapper vào client scope
kcadm.sh create clients/${CLIENT_ID}/protocol-mappers/models -r my-realm \
  -s name="organization-membership" \
  -s protocol=openid-connect \
  -s protocolMapper=oidc-organization-membership-mapper \
  -s 'config."claim.name"=organization' \
  -s 'config."id.token.claim"=true' \
  -s 'config."access.token.claim"=true' \
  -s 'config."userinfo.token.claim"=true'</code></pre>

___HTMLTAG_514__HTMLTAG_515___10.3 在申請中使用聲明___HTMLTAG_516__HTMLTAG_517___

<pre><code class="language-typescript">// Ví dụ: Express.js middleware kiểm tra organization
import { Request, Response, NextFunction } from 'express';

interface OrganizationClaim {
  [alias: string]: {
    name: string;
    roles: string[];
  };
}

function requireOrganization(orgAlias: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.user; // decoded JWT
    const orgs: OrganizationClaim = token.organization || {};

    if (!orgs[orgAlias]) {
      return res.status(403).json({
        error: `User is not a member of organization: ${orgAlias}`
      });
    }

    // Attach org info to request
    req.organization = orgs[orgAlias];
    next();
  };
}

// Usage
app.get('/api/dashboard',
  requireOrganization('acme-corporation'),
  (req, res) => {
    res.json({ message: `Welcome to ${req.organization.name}` });
  }
);</code></pre>

___HTMLTAG_518__HTMLTAG_519___11。 B2B 和 B2B2C 用例___HTMLTAG_520__HTMLTAG_521___

___HTMLTAG_522__HTMLTAG_523___11.1 B2B 合作夥伴入口網站___HTMLTAG_524__HTMLTAG_525___

<pre><code class="language-text">Scenario: Platform cung cấp portal cho partners

Realm: platform-realm
├── Organization: "Partner A" (partner-a.com)
│   ├── IdP: Partner A's Okta
│   ├── Members: 50 employees
│   └── Attributes: { plan: "gold", api_quota: "10000" }
├── Organization: "Partner B" (partner-b.com)
│   ├── IdP: Partner B's Azure AD
│   ├── Members: 200 employees
│   └── Attributes: { plan: "platinum", api_quota: "unlimited" }
└── Organization: "Partner C" (partner-c.com)
    ├── IdP: Partner C's Google Workspace
    ├── Members: 30 employees
    └── Attributes: { plan: "silver", api_quota: "5000" }

Flow:
1. Partner employee truy cập portal
2. Nhập email → Keycloak detect organization từ domain
3. Redirect đến IdP của partner
4. Authenticate → token chứa organization claim
5. Application phân quyền dựa trên organization + plan</code></pre>

___HTMLTAG_526__HTMLTAG_527___11.2 B2B2C SaaS 平台___HTMLTAG_528__HTMLTAG_529___

<pre><code class="language-text">Scenario: SaaS platform bán cho businesses, businesses mời end-users

Realm: saas-realm
├── Organization: "School A"
│   ├── Domain: school-a.edu.vn
│   ├── Members (Managed): Teachers, Admin staff
│   ├── Members (Unmanaged): Students (self-registered)
│   └── IdP: School A's LDAP → federated via Keycloak IdP
├── Organization: "School B"
│   ├── Domain: school-b.edu.vn
│   ├── Members (Managed): Teachers
│   └── Members (Unmanaged): Students
└── Individual users (no organization)
    └── Free tier users</code></pre>

___HTMLTAG_530__HTMLTAG_531___12。最佳實務___HTMLTAG_532__HTMLTAG_533___

<ul>
___HTMLTAG_535__HTMLTAG_536___使用組織而不是多領域</strong> — 減少管理開銷，共享配置</li>
___HTMLTAG_539__HTMLTAG_540___驗證網域</strong> — 在自動指派使用者之前確保組織實際擁有該網域</li>
___HTMLTAG_543__HTMLTAG_544___託管/非託管差異</strong> — 為需要生命週期管理的員工託管，為外部使用者託管__HTMLTAG_546___
___HTMLTAG_547__HTMLTAG_548___使用身分識別優先登入</strong> — 當多個組織具有不同的 IdP 時，可提供更好的使用者體驗</li>
___HTMLTAG_551__HTMLTAG_552___安全邀請連結</strong> — 設定合理的過期時間，監控待處理的邀請</li>
___HTMLTAG_555__HTMLTAG_556___授權的組織屬性</strong> — 使用屬性依計畫、層級、區域分散權限</li>
___HTMLTAG_559__HTMLTAG_560___監控成員計數</strong> — 在組織超出配額時設定警報</li>
</ul>