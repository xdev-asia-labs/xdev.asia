---
id: 019d8b30-b101-7001-c001-e0c5f8100101
title: 第 1 課：介紹 Keycloak - 企業中的 IAM 與 SSO
slug: bai-1-gioi-thieu-keycloak-iam-va-sso-trong-enterprise
description: 了解什麼是 Keycloak、為什麼需要 IAM、核心概念（領域、客戶端、使用者、角色、群組、會話）、Quarkus 上的 Keycloak 架構、與 Auth0/Okta/Azure AD 的比較以及企業中的真實用例。 Keycloak 26.x 版本概述。
duration_minutes: 90
is_free: true
video_url: null
sort_order: 1
section_title: 第 1 部分：Keycloak 平台
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
___HTMLTAG_0__HTMLTAG_1___1。什麼是 Keycloak？ ___HTMLTAG_2__HTMLTAG_3___
___HTMLTAG_4__HTMLTAG_5___Keycloak</strong> 是一種開源身分和存取管理 (IAM) 解決方案，最初由 Red Hat 開發，現在是 <strong>CNCF 孵化</strong>（雲端原生運算基金會）專案。 Keycloak 為 Web 系統和 RESTful Web 服務提供單一登入 (SSO)、身分識別管理和應用程式安全性。 </p>

<p>Keycloak 的目標是讓安全性變得簡單 — 開發人員通常需要自己編寫的安全功能可以開箱即用，並且可以根據組織需求進行自訂。 </p>

___HTMLTAG_12__HTMLTAG_13___發展歷史___HTMLTAG_14__HTMLTAG_15___
<ul>
___HTMLTAG_17__HTMLTAG_18__HTMLTAG_19___2014</strong>：Keycloak 作為 JBoss/Red Hat 項目誕生____HTMLTAG_21__HTMLTAG_22___
___HTMLTAG_23__HTMLTAG_24__HTMLTAG_25___2018</strong>：Keycloak 4.0 — 支援授權服務、UMA 2.0___HTMLTAG_27__HTMLTAG_28___
___HTMLTAG_29__HTMLTAG_30__HTMLTAG_31___2020</strong>：Keycloak.X（基於 Quarkus）預覽___HTMLTAG_33__HTMLTAG_34___
___HTMLTAG_35__HTMLTAG_36__HTMLTAG_37___2022</strong>：Keycloak 20 — WildFly 發行版已刪除，正式切換到 Quarkus___HTMLTAG_39__HTMLTAG_40___
___HTMLTAG_41__HTMLTAG_42__HTMLTAG_43___2024</strong>：Keycloak 成為 CNCF 孵化項目___HTMLTAG_45__HTMLTAG_46___
___HTMLTAG_47__HTMLTAG_48__HTMLTAG_49___2026</strong>：Keycloak 26.5.x — 目前版本，支援工作流程、金鑰、MCP___HTMLTAG_51__HTMLTAG_52___
</ul>

___HTMLTAG_54__HTMLTAG_55___2。為什麼我們需要身分和存取管理？ ___HTMLTAG_56__HTMLTAG_57___
<p>在現代企業系統中，身分識別和存取管理在以下情況下變得複雜：</p>
<ul>
___HTMLTAG_61__HTMLTAG_62___許多應用需要通用驗證 (SSO)___HTMLTAG_63__HTMLTAG_64___
___HTMLTAG_65__HTMLTAG_66___需要與外部身分識別提供者（Google、Azure AD、LDAP）整合___HTMLTAG_67__HTMLTAG_68___
___HTMLTAG_69__HTMLTAG_70___需要多重驗證 (MFA) 以實現高安全性___HTMLTAG_71__HTMLTAG_72___
___HTMLTAG_73__HTMLTAG_74___複雜的權限管理（RBAC、ABAC、細粒度權限）___HTMLTAG_75__HTMLTAG_76___
___HTMLTAG_77__HTMLTAG_78___符合安全標準（OAuth 2.0、OIDC、SAML 2.0、FAPI 2.0）___HTMLTAG_79__HTMLTAG_80___
___HTMLTAG_81__HTMLTAG_82___SaaS 應用程式的多租戶___HTMLTAG_83__HTMLTAG_84___
</ul>

<div style="text-align: center; margin: 2rem 0;">
<img src="/storage/uploads/2026/03/keycloak-sso-overview-2026.png" alt="Keycloak IAM/SSO Overview" style="max-width: 800px; width: 100%; border-radius: 12px;" />
___HTMLTAG_88__HTMLTAG_89___Keycloak IAM/SSO 概述：應用程式 → Keycloak → 身分提供者___HTMLTAG_90__HTMLTAG_91___
</div>___HTMLTAG_93__HTMLTAG_94___3。 Keycloak 主要功能___HTMLTAG_95__HTMLTAG_96___
<ul>
___HTMLTAG_98__HTMLTAG_99__HTMLTAG_100___單一登入 (SSO) 和單點登出</strong> 用於瀏覽器應用程式____HTMLTAG_102__HTMLTAG_103___
___HTMLTAG_104__HTMLTAG_105__HTMLTAG_106___OpenID Connect</strong> 和 <strong>OAuth 2.0</strong> 支援___HTMLTAG_110__HTMLTAG_110__11
___HTMLTAG_112__HTMLTAG_113__HTMLTAG_114___SAML 2.0</strong> 支援___HTMLTAG_116__HTMLTAG_117___
___HTMLTAG_118__HTMLTAG_119__HTMLTAG_120___身份代理</strong> — 透過外部 OIDC 或 SAML 身分提供者進行驗證____HTMLTAG_122__HTMLTAG_123___
___HTMLTAG_124__HTMLTAG_125__HTMLTAG_126___社群登入</strong> — 使用 Google、GitHub、Facebook、Apple、Microsoft 登入___HTMLTAG_128__HTMLTAG_129___
___HTMLTAG_130__HTMLTAG_131__HTMLTAG_132___使用者聯合</strong> — 同步 LDAP 與 Active Directory 中的使用者____HTMLTAG_134__HTMLTAG_135___
___HTMLTAG_136__HTMLTAG_137__HTMLTAG_138___Kerberos 橋接器</strong> — 自動驗證登入 Kerberos 伺服器的使用者____HTMLTAG_140__HTMLTAG_141___
___HTMLTAG_142__HTMLTAG_143__HTMLTAG_144___管理控制台</strong> — 使用者、角色、客戶端、設定的集中管理___HTMLTAG_146__HTMLTAG_147___
___HTMLTAG_148__HTMLTAG_149__HTMLTAG_150___帳戶控制台</strong> — 允許使用者管理自己的帳戶___HTMLTAG_152__HTMLTAG_153___
___HTMLTAG_154__HTMLTAG_155__HTMLTAG_156___主題支援</strong> — 自訂介面登入、帳號、管理、電子郵件____HTMLTAG_158__HTMLTAG_159___
___HTMLTAG_160__HTMLTAG_161__HTMLTAG_162___雙重認證</strong> — TOTP/HOTP、WebAuthn、密碼___HTMLTAG_164__HTMLTAG_165___
___HTMLTAG_166__HTMLTAG_167__HTMLTAG_168___授權服務_</strong> — 包含策略和權限的詳細授權____HTMLTAG_170__HTMLTAG_171___
___HTMLTAG_172__HTMLTAG_173__HTMLTAG_174___組織</strong> — CIAM 多租用戶（B2B、B2B2C）___HTMLTAG_176__HTMLTAG_177___
___HTMLTAG_178__HTMLTAG_179__HTMLTAG_180___工作流程</strong> — 管理自動化 (IGA)___HTMLTAG_182__HTMLTAG_183___
___HTMLTAG_184__HTMLTAG_185__HTMLTAG_186___令牌映射器</strong> — 令牌中的自訂聲明____HTMLTAG_188__HTMLTAG_189___
___HTMLTAG_190__HTMLTAG_191__HTMLTAG_192___事件與審核_</strong> — 審核日誌記錄與事件偵聽器___HTMLTAG_194__HTMLTAG_195___
</ul>

___HTMLTAG_197__HTMLTAG_198___4。核心概念___HTMLTAG_199__HTMLTAG_200___

___HTMLTAG_201__HTMLTAG_202___領域___HTMLTAG_203__HTMLTAG_204___
<p>Realm 管理一組使用者、憑證、角色和群組。每個使用者都屬於並登入一個領域。領域相互隔離 — 只有屬於該領域的使用者才能被管理和驗證。 </p>

___HTMLTAG_207__HTMLTAG_208___客戶___HTMLTAG_209__HTMLTAG_210___
<p>客戶端是需要 Keycloak 來驗證使用者身分的實體（應用程式、服務）。客戶端可以是 Web 應用程式、行動應用程式、REST API 或需要令牌來呼叫其他服務的服務。 </p>___HTMLTAG_213__HTMLTAG_214___使用者___HTMLTAG_215__HTMLTAG_216___
<p>使用者是可以登入系統的實體。使用者俱有屬性（電子郵件、使用者名稱、電話等）、屬於群組並被指派角色。 </p>

___HTMLTAG_219__HTMLTAG_220___角色___HTMLTAG_221__HTMLTAG_222___
<p>角色標識使用者的類型或類別（管理員、使用者、經理）。應用程式根據角色而不是單一使用者分配存取權限。 </p>

___HTMLTAG_225__HTMLTAG_226___群組___HTMLTAG_227__HTMLTAG_228___
<p>Groups 管理使用者群組。組具有屬性和角色映射。使用者從群組繼承屬性和角色映射。 </p>

___HTMLTAG_231__HTMLTAG_232___會話____HTMLTAG_233__HTMLTAG_234___
<p>當使用者登入時，會建立一個會話來管理登入會話，包括登入時間和參與 SSO 的應用程式的資訊。 </p>

___HTMLTAG_237__HTMLTAG_238___5。 Quarkus 上的 Keycloak 架構___HTMLTAG_239__HTMLTAG_240___
<p>從版本 20+ 開始，Keycloak 完全在 Quarkus 框架上運行，提供：</p>
<ul>
___HTMLTAG_244__HTMLTAG_245__HTMLTAG_246___超快啟動時間_</strong> — 適用於容器和無伺服器____HTMLTAG_248__HTMLTAG_249___
___HTMLTAG_250__HTMLTAG_251__HTMLTAG_252___記憶體佔用小_</strong> — 針對雲端原生部署進行了最佳化____HTMLTAG_254__HTMLTAG_255___
___HTMLTAG_256__HTMLTAG_257__HTMLTAG_258___建置時最佳化</strong> — 預編譯設定___HTMLTAG_260__HTMLTAG_261___
___HTMLTAG_262__HTMLTAG_263__HTMLTAG_264___本機映像支援</strong> — 能夠本機執行 GraalVM____HTMLTAG_266__HTMLTAG_267___
</ul>

<div style="text-align: center; margin: 2rem 0;">
<img src="/storage/uploads/2026/03/keycloak-architecture-2026.png" alt="Keycloak Architecture on Quarkus" style="max-width: 800px; width: 100%; border-radius: 12px;" />
___HTMLTAG_271__HTMLTAG_272___Keycloak 架構：Quarkus 運行時、Infinispan 快取、Hibernate ORM、管理/帳戶控制台____HTMLTAG_273__HTMLTAG_274___
</div>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>組件</th>
<th>說明</th>
</tr>
</thead>
<tbody>
<tr>
___HTMLTAG_288__HTMLTAG_289___Quarkus 運行時___HTMLTAG_290__HTMLTAG_291___
<td>應用程式伺服器（取代 WildFly）</td>
</tr>
<tr>
___HTMLTAG_296__HTMLTAG_297___無限跨距___HTMLTAG_298__HTMLTAG_299___
<td>會話、令牌的分散式快取</td>
</tr>
<tr>
___HTMLTAG_304__HTMLTAG_305___Hibernate ORM___HTMLTAG_306__HTMLTAG_307___
<td>用於資料庫持久化的ORM層__HTMLTAG_309___
</tr>
<tr>
___HTMLTAG_312__HTMLTAG_313___資料庫___HTMLTAG_314__HTMLTAG_315___
<td>PostgreSQL（推薦）、MySQL、MariaDB、Oracle、MSSQL</td>
</tr>
<tr>
___HTMLTAG_320__HTMLTAG_321___管理控制台___HTMLTAG_322__HTMLTAG_323___
<td>基於 React 的 SPA (PatternFly 5)</td>
</tr>
<tr>
___HTMLTAG_328__HTMLTAG_329___帳號控制台___HTMLTAG_330__HTMLTAG_331___
<td>用於用戶自助服務的基於 React 的 SPA</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->___HTMLTAG_338__HTMLTAG_339___6。比較 Keycloak 與 Auth0、Okta 與 Azure AD___HTMLTAG_340__HTMLTAG_341___

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>標準__HTMLTAG_347___
<th>鑰匙斗篷</th>
<th>Auth0</th>
<th>Okta</th>
<th>Azure AD</th>
</tr>
</thead>
<tbody>
<tr>
___HTMLTAG_360__HTMLTAG_361___許可證___HTMLTAG_362__HTMLTAG_363___
<td>Apache 2.0（自由與開源軟體）</td>
<td>商業</td>
<td>商業</td>
<td>商業</td>
</tr>
<tr>
___HTMLTAG_374__HTMLTAG_375___部署___HTMLTAG_376__HTMLTAG_377___
<td>自託管</td>
<td>雲端 SaaS</td>
<td>雲 SaaS</td>
<td>雲 SaaS</td>
</tr>
<tr>
___HTMLTAG_388__HTMLTAG_389___成本___HTMLTAG_390__HTMLTAG_391___
<td>免費（自營）</td>
<td>35 美元/月起</td>
<td>每用戶/月 2 美元起</td>
<td>每用戶/月 6 美元起__HTMLTAG_399___
</tr>
<tr>
___HTMLTAG_402__HTMLTAG_403___自訂___HTMLTAG_404__HTMLTAG_405___
<td>非常高（開源）</td>
<td>平均</td>
<td>平均</td>
<td>低</td>
</tr>
<tr>
___HTMLTAG_416__HTMLTAG_417___OIDC/OAuth2___HTMLTAG_418__HTMLTAG_419___
<td>完整</td>
<td>完整</td>
<td>完整</td>
<td>完整</td>
</tr>
<tr>
___HTMLTAG_430__HTMLTAG_431___SAML___HTMLTAG_432__HTMLTAG_433___
<td>完整</td>
<td>是</td>
<td>完整</td>
<td>完整</td>
</tr>
<tr>
___HTMLTAG_444__HTMLTAG_445___LDAP/AD___HTMLTAG_446__HTMLTAG_447___
<td>完整</td>
<td>企業</td>
<td>完整</td>
<td>本機</td>
</tr>
<tr>
___HTMLTAG_458__HTMLTAG_459___藝術碩士___HTMLTAG_460__HTMLTAG_461___
<td>TOTP、WebAuthn、金鑰</td>
<td>完整</td>
<td>完整</td>
<td>完整</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->___HTMLTAG_474__HTMLTAG_475___7。實際用例___HTMLTAG_476__HTMLTAG_477___
<ul>
___HTMLTAG_479__HTMLTAG_480__HTMLTAG_481___企業 SSO</strong>：所有內部應用程式的單一登入____HTMLTAG_483__HTMLTAG_484___
___HTMLTAG_485__HTMLTAG_486__HTMLTAG_487___客戶 IAM (CIAM)</strong>：管理組織的客戶身分____HTMLTAG_489__HTMLTAG_490___
___HTMLTAG_491__HTMLTAG_492__HTMLTAG_493___API 安全性</strong>：使用 OAuth 2.0 令牌保護 REST API____HTMLTAG_495__HTMLTAG_496___
___HTMLTAG_497__HTMLTAG_498__HTMLTAG_499___微服務驗證</strong>：使用客戶端憑證進行服務到服務驗證____HTMLTAG_501__HTMLTAG_502___
___HTMLTAG_503__HTMLTAG_504__HTMLTAG_505___社群登入</strong>：允許使用者使用 Google、Facebook、GitHub 登入___HTMLTAG_507__HTMLTAG_508___
___HTMLTAG_509__HTMLTAG_510__HTMLTAG_511____LDAP/AD 聯合_</strong>：整合現有目錄系統____HTMLTAG_513__HTMLTAG_514___
___HTMLTAG_515__HTMLTAG_516__HTMLTAG_517___MFA 合規性</strong>：滿足 PCI-DSS、HIPAA、SOC 2 需求____HTMLTAG_519__HTMLTAG_520___
</ul>

___HTMLTAG_522__HTMLTAG_523___8。課程概述___HTMLTAG_524__HTMLTAG_525___
<p>課程包括 <strong>25 課__HTMLTAG_528___ 分為 <strong>7 個部分 </strong>，涵蓋 Keycloak 26.x 的所有模組：</p>
<ul>
___HTMLTAG_533__HTMLTAG_534__HTMLTAG_535___第 1 部分</strong>：平台（領域、使用者、群組、角色、權限）___HTMLTAG_537__HTMLTAG_538___
___HTMLTAG_539__HTMLTAG_540__HTMLTAG_541___第 2 部分</strong>：SSO 協定（OIDC、SAML、客戶端範圍、令牌、DPoP）___HTMLTAG_543__HTMLTAG_544___
___HTMLTAG_545__HTMLTAG_546__HTMLTAG_547___第 3 部分</strong>：驗證與 MFA（流程、OTP、WebAuthn、金鑰、身分代理）___HTMLTAG_549__HTMLTAG_550___
___HTMLTAG_551__HTMLTAG_552__HTMLTAG_553___第 4 部分</strong>：聯合與授權（LDAP/AD、組織、授權服務、工作流程）___HTMLTAG_555__HTMLTAG_556___
___HTMLTAG_557__HTMLTAG_558__HTMLTAG_559___第 5 部分</strong>：安全與自訂（主題、事件、強化、保管庫）___HTMLTAG_561__HTMLTAG_562___
___HTMLTAG_563__HTMLTAG_564__HTMLTAG_565___第 6 部分</strong>：實際整合（Spring Boot、React/Angular、Node.js、API 閘道）___HTMLTAG_567__HTMLTAG_568___
___HTMLTAG_569__HTMLTAG_570__HTMLTAG_571___第 7 部分</strong>：生產作業（部署、HA、Kubernetes、監控）___HTMLTAG_573__HTMLTAG_574___
</ul>