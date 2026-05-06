---
id: 019d8b30-b118-7001-c001-e0c5f8100118
title: 第 18 課：事件系統與審核日誌記錄
slug: bai-18-event-system-va-audit-logging
description: 事件類型（登入事件、管理事件）、啟用事件日誌記錄、設定事件偵聽器（jboss-logging、電子郵件）、事件儲存、事件詳細資訊、事件過濾、透過管理控制台和 REST API 查詢事件、自訂事件偵聽器 SPI、用於集中日誌記錄的 ELK Stack / Grafana Loki 整合、SIEM 整合、審計合規性（
duration_minutes: 180
is_free: true
video_url: null
sort_order: 18
section_title: 第 5 部分：主題、事件、安全性和 Vault
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1835" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1835)"/>

  <!-- Decorations -->
  <g>
    <circle cx="823" cy="99" r="36" fill="#c084fc" opacity="0.14"/>
    <circle cx="1046" cy="122" r="35" fill="#c084fc" opacity="0.13"/>
    <circle cx="769" cy="145" r="34" fill="#c084fc" opacity="0.12000000000000001"/>
    <circle cx="992" cy="168" r="33" fill="#c084fc" opacity="0.11"/>
    <circle cx="715" cy="191" r="32" fill="#c084fc" opacity="0.1"/>
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
    <line x1="600" y1="229" x2="1100" y2="309" stroke="#c084fc" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="259" x2="1050" y2="329" stroke="#c084fc" stroke-width="0.5" opacity="0.08"/>
    <polygon points="967.1051177665153,107 967.1051177665153,151 929,173 890.8948822334847,151 890.8948822334847,107.00000000000001 929,85" fill="none" stroke="#c084fc" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#c084fc"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#c084fc" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#c084fc">🔒 DevSecOps — 第 18 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 18 課：事件系統與審核日誌</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：主題、事件、安全性與保管庫__HTMLTAG_60___

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_65__HTMLTAG_66___1。事件系統概述___HTMLTAG_67__HTMLTAG_68___

<p>Keycloak 提供了全面的 <strong>事件系統</strong> 來監控系統中的所有活動。從登入、註冊到更改管理配置的每個操作都會記錄為事件。 </p>

___HTMLTAG_73__HTMLTAG_74___1.1 兩種類型的事件___HTMLTAG_75__HTMLTAG_76___

<table>
<thead>
___HTMLTAG_79__HTMLTAG_80___類型___HTMLTAG_81__HTMLTAG_82___說明____HTMLTAG_83__HTMLTAG_84___範例____HTMLTAG_85__HTMLTAG_86___
</thead>
<tbody>
___HTMLTAG_89__HTMLTAG_90__HTMLTAG_91___登入事件（使用者事件）___HTMLTAG_92__HTMLTAG_93__HTMLTAG_94___與使用者相關的操作____HTMLTAG_95__HTMLTAG_96____1、註冊、登出、TOK1_HTMLTAG_95__HTMLTAG_96____ML、註冊、註銷、1K1_UUUUUU​​S_UUUU​​S_4UUU4UU44U444U444444EN」4U4%_​​ML
___HTMLTAG_99__HTMLTAG_100__HTMLTAG_101___管理事件___HTMLTAG_102__HTMLTAG_103__HTMLTAG_104___透過管理控制台/API 進行設定變更___HTMLTAG_105__HTMLTAG_106____建立用戶端更新
</tbody>
</table>

___HTMLTAG_111__HTMLTAG_112___1.2 登入事件類型___HTMLTAG_113__HTMLTAG_114___<table>
<thead>
___HTMLTAG_117__HTMLTAG_118___事件類型____HTMLTAG_119__HTMLTAG_120___描述____HTMLTAG_121__HTMLTAG_122___發生時間___HTMLTAG_123__HTMLTAG_124______
</thead>
<tbody>
___HTMLTAG_127__HTMLTAG_128__HTMLTAG_129___登入___HTMLTAG_130__HTMLTAG_131__HTMLTAG_132___成功登入___HTMLTAG_133__HTMLTAG_134_____使用者輸入了正確的憑證使用者輸入了正確的憑證135
___HTMLTAG_137__HTMLTAG_138__HTMLTAG_139___LOGIN_ERROR___HTMLTAG_140__HTMLTAG_141__HTMLTAG_142____登入失敗____HTMLTAG_143__HTMLTAG_144___使用者名稱登入失敗_____
___HTMLTAG_147__HTMLTAG_148__HTMLTAG_149___註冊___HTMLTAG_150__HTMLTAG_151__HTMLTAG_152___註冊新帳號___HTMLTAG_153__HTMLTAG_154______使用者建立公用帳戶___MLTAG1TAG_153__HTMLTAG_154______使用者建立公用帳戶___MLTAG11TAG_15115157___使用者建立公用帳號_____
___HTMLTAG_157__HTMLTAG_158__HTMLTAG_159___REGISTER_ERROR___HTMLTAG_160__HTMLTAG_161__HTMLTAG_162___註冊失敗____HTMLTAG_163__HTMLTAG_164___電子郵件重複，驗證失敗失敗_____
___HTMLTAG_167__HTMLTAG_168__HTMLTAG_169____註銷____HTMLTAG_170__HTMLTAG_171__HTMLTAG_172____登出____HTMLTAG_173__HTMLTAG_174___使用者登出或過17417473章_________174___使用者登出或過173____ML_____74___用戶
___HTMLTAG_177__HTMLTAG_178__HTMLTAG_179___CODE_TO_TOKEN___HTMLTAG_180__HTMLTAG_181__HTMLTAG_182______交換授權碼→令牌___HTMLTAG_183__HTMLTAG_184___V​​D___MLTAG_183__HTMLTAG_184___DC___MLTAG183__HTMLTAG_184___
___HTMLTAG_187__HTMLTAG_188__HTMLTAG_189___CODE_TO_TOKEN_ERROR___HTMLTAG_190__HTMLTAG_191__HTMLTAG_192___令牌交換器失敗___HTMLTAG_193__HTMLTAG_194______
___HTMLTAG_197__HTMLTAG_198__HTMLTAG_199___REFRESH_TOKEN___HTMLTAG_200__HTMLTAG_201__HTMLTAG_202___刷新訪問令牌_HTMLTAG_203__HTMLTAG_204____MLTAGMLUU​​SMLTAG_203__HTMLTAG_204____MLTAGML4___
___HTMLTAG_207__HTMLTAG_208__HTMLTAG_209___REFRESH_TOKEN_ERROR___HTMLTAG_210__HTMLTAG_211__HTMLTAG_212___刷新令牌失敗___HTMLTAG_213__HTMLTAG_21141474_____
___HTMLTAG_217__HTMLTAG_218__HTMLTAG_219___CLIENT_LOGIN___HTMLTAG_220__HTMLTAG_221__HTMLTAG_222____客戶端身分驗證服務106142___2567410224___
___HTMLTAG_227__HTMLTAG_228__HTMLTAG_229___INTROSPECT_TOKEN___HTMLTAG_230__HTMLTAG_231__HTMLTAG_232______令牌內省___HTMLTAG_233__HTMLTAG_234___資源維權
___HTMLTAG_237__HTMLTAG_238__HTMLTAG_239___UPDATE_PASSWORD___HTMLTAG_240__HTMLTAG_241__HTMLTAG_242___更改密碼____HTMLTAG_243__HTMLTAG_1244___使用者更改密碼
___HTMLTAG_247__HTMLTAG_248__HTMLTAG_249___RESET_PASSWORD___HTMLTAG_250__HTMLTAG_251__HTMLTAG_252___重設密碼____HTMLTAG_253__HTMLTAG_254___透過電子郵件____
___HTMLTAG_257__HTMLTAG_258__HTMLTAG_259___VERIFY_EMAIL___HTMLTAG_260__HTMLTAG_261__HTMLTAG_262___電子郵件驗證____HTMLTAG_263__HTMLTAG_264___使用者點擊驗證連結1
___HTMLTAG_267__HTMLTAG_268__HTMLTAG_269___SEND_RESET_PASSWORD___HTMLTAG_270__HTMLTAG_271__HTMLTAG_272___傳送密碼重設電子郵件___HTMLTAG_273__HTMLTAG_274___請求忘記密碼___HTMLTAG_275__HTMLTAG_276___
___HTMLTAG_277__HTMLTAG_278__HTMLTAG_279___UPDATE_PROFILE___HTMLTAG_280__HTMLTAG_281__HTMLTAG_282_____個人資料___HTMLTAG_283__HTMLTAG_284___用戶更新個人資料___
___HTMLTAG_287__HTMLTAG_288__HTMLTAG_289___REMOVE_TOTP___HTMLTAG_290__HTMLTAG_291__HTMLTAG_292___刪除 TOTP 設備___HTMLTAG_293__HTMLTAG_294______刪除 TOTP 設備___HTMLTAG_293__HTMLTAG_294____UMLTAGML
___HTMLTAG_297__HTMLTAG_298__HTMLTAG_299___UPDATE_TOTP___HTMLTAG_300__HTMLTAG_301__HTMLTAG_302___TOTP配置____HTMLTAG_303__HTMLTAG_304___使用者設定P___ML配置___MLG130____303__HTMLTAG_304___使用者設定P___]
___HTMLTAG_307__HTMLTAG_308__HTMLTAG_309___GRANT_CONSENT___HTMLTAG_310__HTMLTAG_311__HTMLTAG_312___使用者授予權限同意___HTMLTAG_313__HTMLTAG_314___OA2同意畫面同意___ML413155_____
___HTMLTAG_317__HTMLTAG_318__HTMLTAG_319___TOKEN_EXCHANGE___HTMLTAG_320__HTMLTAG_321__HTMLTAG_322___令牌交換___MLTAG_323__HTMLTAG_324_____32____令牌交換在客戶端之間________32_____32_____321414232____
</tbody>
</table>___HTMLTAG_329__HTMLTAG_330___1.3 管理事件操作___HTMLTAG_331__HTMLTAG_332___

<table>
<thead>
___HTMLTAG_335__HTMLTAG_336___操作____HTMLTAG_337__HTMLTAG_338___說明____HTMLTAG_339__HTMLTAG_340___資源類型____HTMLTAG_341__HTMLTAG_342___
</thead>
<tbody>
___HTMLTAG_345__HTMLTAG_346__HTMLTAG_347___建立___HTMLTAG_348__HTMLTAG_349__HTMLTAG_350___建立新資源___HTMLTAG_351__HTMLTAG_352______、客戶端、建立新資源___HTMLTAG_351__HTMLTAG_352______、客戶端、工作領域、用戶端、____35353453____
___HTMLTAG_355__HTMLTAG_356__HTMLTAG_357___更新___HTMLTAG_358__HTMLTAG_359__HTMLTAG_360___更新資源___HTMLTAG_361__HTMLTAG_362___使用者、客戶端、網域設定...___HTMLTAG10414UUU​​S____S_MLTAGMLTA_4___ML
___HTMLTAG_365__HTMLTAG_366__HTMLTAG_367___刪除___HTMLTAG_368__HTMLTAG_369__HTMLTAG_370___刪除資源___HTMLTAG_371__HTMLTAG_372___使用者、客戶端、工作階段...___MLTAG_371__HTMLTAG_372___使用者、客戶端、工作階段、____
___HTMLTAG_375__HTMLTAG_376__HTMLTAG_377___操作___HTMLTAG_378__HTMLTAG_379__HTMLTAG_380____執行操作___HTMLTAG_381__HTMLTAG_382____重設_ML，發送驗證_重設密碼
</tbody>
</table>

___HTMLTAG_387__HTMLTAG_388___2。啟用事件記錄___HTMLTAG_389__HTMLTAG_390___

___HTMLTAG_391__HTMLTAG_392___2.1 透過管理控制台___HTMLTAG_393__HTMLTAG_394___

<ol>
<li>登入 <strong>管理控制台___HTMLTAG_398__HTMLTAG_399___
<li>選擇領域 → <strong>領域設定</strong> → 選項卡 <strong>事件___HTMLTAG_404__HTMLTAG_405___
<li>設定 <strong>使用者事件設定</strong>：
<ul>
___HTMLTAG_410__HTMLTAG_411___儲存事件</strong>：開啟</li>
___HTMLTAG_414__HTMLTAG_415___過期</strong>：30 天（取決於合規性要求）</li>
___HTMLTAG_418__HTMLTAG_419___已儲存類型</strong>：選擇要儲存的事件類型（預設值：全部）</li>
</ul>
</li>
<li>設定 <strong>管理事件設定</strong>：
<ul>
___HTMLTAG_428__HTMLTAG_429___保存事件</strong>：開啟</li>
___HTMLTAG_432__HTMLTAG_433___包含表示</strong>：開啟（儲存請求/回應正文）</li>
</ul>
</li>
___HTMLTAG_438__HTMLTAG_439___事件偵聽器__HTMLTAG_440___：新增必要的偵聽器__HTMLTAG_441___
</ol>

___HTMLTAG_443__HTMLTAG_444___2.2 透過 REST API___HTMLTAG_445__HTMLTAG_446___

___預編碼_0___

___HTMLTAG_447__HTMLTAG_448___3。事件偵聽器___HTMLTAG_449__HTMLTAG_450___

<p>事件監聽器在事件發生時會處理。 Keycloak 有以下可用偵聽器：</p>

___HTMLTAG_453__HTMLTAG_454___3.1 jboss-logging 監聽器___HTMLTAG_455__HTMLTAG_456___

<p>將事件記錄到 Keycloak 伺服器日誌（預設為啟用）：</p>

___預編碼_1___

___HTMLTAG_459__HTMLTAG_460___3.2 電子郵件監聽器___HTMLTAG_461__HTMLTAG_462___

<p>發生重要事件時傳送電子郵件給使用者（例如：從新裝置登入）：</p>

___預編碼_2___

___HTMLTAG_465__HTMLTAG_466___4。活動詳細資訊與活動儲存___HTMLTAG_467__HTMLTAG_468______HTMLTAG_469__HTMLTAG_470___4.1 登入事件結構___HTMLTAG_471__HTMLTAG_472___

___預編碼_3___

___HTMLTAG_473__HTMLTAG_474___4.2 管理事件結構___HTMLTAG_475__HTMLTAG_476___

___預編碼_4___

___HTMLTAG_477__HTMLTAG_478___4.3 事件儲存 — 資料庫___HTMLTAG_479__HTMLTAG_480___

<p>事件儲存在Keycloak的資料庫中：</p>

<table>
<thead>
___HTMLTAG_485__HTMLTAG_486___表格___HTMLTAG_487__HTMLTAG_488___內容___HTMLTAG_489__HTMLTAG_490___
</thead>
<tbody>
___HTMLTAG_493__HTMLTAG_494__HTMLTAG_495___EVENT_ENTITY___HTMLTAG_496__HTMLTAG_497__HTMLTAG_498___登入事件___HTMLTAG_499__HTMLTAG_500___
___HTMLTAG_501__HTMLTAG_502__HTMLTAG_503___ADMIN_EVENT_ENTITY___HTMLTAG_504__HTMLTAG_505__HTMLTAG_506___管理事件____HTMLTAG_507__HTMLTAG_508___
</tbody>
</table>

<blockquote>
___HTMLTAG_512__HTMLTAG_513___注意：</strong> 事件儲存預設保存在 Keycloak DB 中。對於大量事件，您應該使用自訂事件偵聽器將事件傳送到外部系統並為內建儲存設定較短的過期時間。 </p>
</blockquote>

___HTMLTAG_517__HTMLTAG_518___5。事件過濾與查詢___HTMLTAG_519__HTMLTAG_520___

___HTMLTAG_521__HTMLTAG_522___5.1 透過管理控制台___HTMLTAG_523__HTMLTAG_524___

<ol>
<li>轉到 <strong>事件</strong> → 選項卡 <strong>使用者事件</strong> 或 <strong>管理事件</strong>__
<li>依下列條件過濾事件：
<ul>
___HTMLTAG_536__HTMLTAG_537___事件類型</strong>：登入、LOGIN_ERROR、註冊...</li>
___HTMLTAG_540__HTMLTAG_541___客戶端</strong>：選擇特定客戶端</li>
___HTMLTAG_544__HTMLTAG_545___使用者</strong>：按使用者 ID 搜尋</li>
___HTMLTAG_548__HTMLTAG_549___日期範圍</strong>：從/到日期</li>
___HTMLTAG_552__HTMLTAG_553___IP 位址</strong>：按 IP 過濾</li>
</ul>
</li>
</ol>

___HTMLTAG_559__HTMLTAG_560___5.2 透過 REST API — 登入事件___HTMLTAG_561__HTMLTAG_562___

___預編碼_5___

___HTMLTAG_563__HTMLTAG_564___5.3 透過 REST API — 管理事件___HTMLTAG_565__HTMLTAG_566___

___預編碼_6___

___HTMLTAG_567__HTMLTAG_568___6。自訂事件監聽器 SPI___HTMLTAG_569__HTMLTAG_570___

<p>Keycloak 允許透過 <strong>服務提供者介面 (SPI)</strong>.</p> 建立自訂事件偵聽器

___HTMLTAG_575__HTMLTAG_576___6.1 建立 Maven 專案___HTMLTAG_577__HTMLTAG_578___

___預編碼_7___

___HTMLTAG_579__HTMLTAG_580___6.2 實作 EventListenerProvider___HTMLTAG_581__HTMLTAG_582___

___預編碼_8___

___HTMLTAG_583__HTMLTAG_584___6.3 實作 EventListenerProviderFactory___HTMLTAG_585__HTMLTAG_586___

___預編碼_9___

___HTMLTAG_587__HTMLTAG_588___6.4 註冊SPI___HTMLTAG_589__HTMLTAG_590___

___預編碼_10___

___HTMLTAG_591__HTMLTAG_592___6.5 部署與啟動___HTMLTAG_593__HTMLTAG_594___

<pre><code class="language-bash"># Build
mvn clean package

# Deploy
cp target/custom-event-listener-1.0.0.jar $KEYCLOAK_HOME/providers/
$KEYCLOAK_HOME/bin/kc.sh build

# Kích hoạt: Admin Console → Realm Settings → Events → Event listeners
# Thêm "custom-event-listener"
</code></pre>

___HTMLTAG_595__HTMLTAG_596___7。 Keycloak JSON 日誌記錄___HTMLTAG_597__HTMLTAG_598___

<p>要與集中式日誌記錄集成，請配置 Keycloak 輸出 JSON 日誌：</p><pre><code class="language-bash"># Bật JSON logging
bin/kc.sh start \
  --log=console \
  --log-console-output=json

# Hoặc qua environment variables
KC_LOG=console
KC_LOG_CONSOLE_OUTPUT=json
</code></pre>

___HTMLTAG_601__HTMLTAG_602___7.1 JSON 日誌輸出範例___HTMLTAG_603__HTMLTAG_604___

<pre><code class="language-json">{
    "timestamp": "2026-03-15T10:30:45.123Z",
    "level": "INFO",
    "loggerClassName": "org.keycloak.events",
    "loggerName": "org.keycloak.events",
    "message": "type=LOGIN, realmId=my-realm, clientId=my-app, userId=abc-123, ipAddress=192.168.1.100",
    "threadName": "executor-thread-1",
    "threadId": 42,
    "hostName": "keycloak-0",
    "processName": "keycloak",
    "processId": 1
}
</code></pre>

___HTMLTAG_605__HTMLTAG_606___7.2 設定日誌等級___HTMLTAG_607__HTMLTAG_608___

<pre><code class="language-bash"># Cấu hình log levels cho events
bin/kc.sh start \
  --log=console \
  --log-console-output=json \
  --log-level=INFO \
  --log-level=org.keycloak.events:DEBUG

# Environment variables
KC_LOG_LEVEL=INFO
KC_LOG_LEVEL=org.keycloak.events:DEBUG
</code></pre>

___HTMLTAG_609__HTMLTAG_610___8。 ELK 堆疊整合___HTMLTAG_611__HTMLTAG_612___

<p>將 Keycloak 日誌傳送到 ELK Stack（Elasticsearch、Logstash、Kibana）進行集中分析。 </p>

___HTMLTAG_615__HTMLTAG_616___8.1 一般架構___HTMLTAG_617__HTMLTAG_618___

<pre><code class="language-text">Keycloak (JSON logs)
    ↓
Filebeat (log shipper)
    ↓
Logstash (processing &amp; enrichment)
    ↓
Elasticsearch (storage &amp; indexing)
    ↓
Kibana (visualization &amp; dashboards)
</code></pre>

___HTMLTAG_619__HTMLTAG_620___8.2 Filebeat 設定___HTMLTAG_621__HTMLTAG_622___

<pre><code class="language-yaml"># filebeat.yml
filebeat.inputs:
  - type: container
    paths:
      - /var/log/containers/keycloak-*.log
    processors:
      - decode_json_fields:
          fields: ["message"]
          target: "keycloak"
          overwrite_keys: true
      - add_fields:
          target: ""
          fields:
            service.name: keycloak
            environment: production

output.logstash:
  hosts: ["logstash:5044"]
</code></pre>

___HTMLTAG_623__HTMLTAG_624___8.3 Logstash 管道___HTMLTAG_625__HTMLTAG_626___

<pre><code class="language-conf"># logstash/pipeline/keycloak.conf
input {
  beats {
    port =&gt; 5044
  }
}

filter {
  if [service][name] == "keycloak" {
    # Parse Keycloak event message
    if [keycloak][message] =~ "^type=" {
      kv {
        source =&gt; "[keycloak][message]"
        field_split =&gt; ", "
        value_split =&gt; "="
        target =&gt; "kc_event"
      }

      mutate {
        add_field =&gt; {
          "event_type" =&gt; "%{[kc_event][type]}"
          "realm" =&gt; "%{[kc_event][realmId]}"
          "client_id" =&gt; "%{[kc_event][clientId]}"
        }
      }
    }

    # GeoIP enrichment
    if [kc_event][ipAddress] {
      geoip {
        source =&gt; "[kc_event][ipAddress]"
        target =&gt; "geo"
      }
    }

    # Detect suspicious patterns
    if [kc_event][type] == "LOGIN_ERROR" {
      mutate {
        add_tag =&gt; ["login_failure"]
      }
    }
  }
}

output {
  if [service][name] == "keycloak" {
    elasticsearch {
      hosts =&gt; ["elasticsearch:9200"]
      index =&gt; "keycloak-events-%{+YYYY.MM.dd}"
    }
  }
}
</code></pre>

___HTMLTAG_627__HTMLTAG_628___8.4 Kibana 儀表板___HTMLTAG_629__HTMLTAG_630___

<p>建立要監控的 Kibana 儀表板：</p>

<ul>
___HTMLTAG_634__HTMLTAG_635___登入成功/失敗率</strong> — 隨時間變化的長條圖</li>
___HTMLTAG_638__HTMLTAG_639___主要登入錯誤</strong> — 依錯誤類型分割的餅圖</li>
___HTMLTAG_642__HTMLTAG_643___透過地理位置登入</strong> — 地圖視覺化</li>
___HTMLTAG_646__HTMLTAG_647___IP登入失敗</strong> — 暴力破解偵測表</li>
___HTMLTAG_650__HTMLTAG_651___用戶註冊趨勢</strong> — 按日折線圖</li>
___HTMLTAG_654__HTMLTAG_655___管理作業審核</strong> — 包含完整詳細資料的資料表</li>
</ul>

___HTMLTAG_659__HTMLTAG_660___9。 Grafana Loki 整合___HTMLTAG_661__HTMLTAG_662___

<p>Grafana Loki 是比 ELK 更輕的日誌聚合解決方案，適用於 Kubernetes 環境。 </p>

___HTMLTAG_665__HTMLTAG_666___9.1 Promtail 設定___HTMLTAG_667__HTMLTAG_668___

<pre><code class="language-yaml"># promtail-config.yml
server:
  http_listen_port: 9080

positions:
  filename: /tmp/positions.yaml

clients:
  - url: http://loki:3100/loki/api/v1/push

scrape_configs:
  - job_name: keycloak
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_label_app]
        regex: keycloak
        action: keep
      - source_labels: [__meta_kubernetes_namespace]
        target_label: namespace
      - source_labels: [__meta_kubernetes_pod_name]
        target_label: pod
    pipeline_stages:
      - json:
          expressions:
            level: level
            logger: loggerName
            message: message
            timestamp: timestamp
      - labels:
          level:
          logger:
      - match:
          selector: '{app="keycloak"} |~ "type=LOGIN|type=REGISTER|type=LOGOUT"'
          stages:
            - regex:
                expression: 'type=(?P&lt;event_type&gt;\w+), realmId=(?P&lt;realm&gt;[\w-]+), clientId=(?P&lt;client_id&gt;[\w-]+), userId=(?P&lt;user_id&gt;[\w-]+)'
            - labels:
                event_type:
                realm:
</code></pre>

___HTMLTAG_669__HTMLTAG_670___9.2 Grafana 儀表板查詢___HTMLTAG_671__HTMLTAG_672___

<pre><code class="language-text"># Login failures trong 1 giờ qua
{app="keycloak"} |~ "type=LOGIN_ERROR" | json | count_over_time({app="keycloak"} |~ "LOGIN_ERROR" [1h])

# Login events theo realm
sum by (realm) (count_over_time({app="keycloak"} |~ "type=LOGIN" [5m]))

# Top IPs với login failures
{app="keycloak"} |~ "type=LOGIN_ERROR" | regexp `ipAddress=(?P&lt;ip&gt;[\d.]+)` | count by (ip) | sort desc | limit 10
</code></pre>

___HTMLTAG_673__HTMLTAG_674___10。 SIEM 整合___HTMLTAG_675__HTMLTAG_676___

<p>將 Keycloak 事件與安全資訊和事件管理 (SIEM) 系統整合。 </p>

___HTMLTAG_679__HTMLTAG_680___10.1 Splunk 整合___HTMLTAG_681__HTMLTAG_682___

___預編碼_20___

___HTMLTAG_683__HTMLTAG_684___10.2 SIEM 用例___HTMLTAG_685__HTMLTAG_686___<table>
<thead>
___HTMLTAG_689__HTMLTAG_690___用例___HTMLTAG_691__HTMLTAG_692___事件模式___HTMLTAG_693__HTMLTAG_694___操作___HTMLTAG_695__HTMLTAG_696___
</thead>
<tbody>
___HTMLTAG_699__HTMLTAG_700__HTMLTAG_701____暴力偵測____HTMLTAG_702__HTMLTAG_703__HTMLTAG_704___來自同一IP的多個LOGIN_ERROR____HTMLTAG_705__HTMLTAGML_706_70707____ML_U_705__HT
___HTMLTAG_709__HTMLTAG_710__HTMLTAG_711___帳號接管___HTMLTAG_712__HTMLTAG_713__HTMLTAG_714___從例外GeoIP登入___HTMLTAG_715__HTMLTAG_716___ML]需要M___HT登入___HTMLTAG_715__HTMLTAG_716___ML]需要M___HT
___HTMLTAG_719__HTMLTAG_720__HTMLTAG_721___權限升級___HTMLTAG_722__HTMLTAG_723__HTMLTAG_724___管理員指派角色admin____HTMLTAG_725__HTMLTAG_726___MLTAD_____HTUML4725_____
___HTMLTAG_729__HTMLTAG_730__HTMLTAG_731___資料滲透___HTMLTAG_732__HTMLTAG_733__HTMLTAG_734___許多異常令牌請求____HTMLTAG_735__HTMLTAG_736___ML +撤銷警報警報器
___HTMLTAG_739__HTMLTAG_740__HTMLTAG_741___可疑註冊___HTMLTAG_742__HTMLTAG_743__HTMLTAG_744___來自同一IP的多個註冊____HTMLTAG_745__HTMLTAG_744___來自同一IP的多個註冊____HTMLTAG_745__HTMLTAG_746____ML41746___ML_74146____746___
</tbody>
</table>

___HTMLTAG_751__HTMLTAG_752___11。審計合規性___HTMLTAG_753__HTMLTAG_754___

___HTMLTAG_755__HTMLTAG_756___11.1 SOC2 要求___HTMLTAG_757__HTMLTAG_758___

<table>
<thead>
___HTMLTAG_761__HTMLTAG_762___SOC2 控制___HTMLTAG_763__HTMLTAG_764___Keycloak 實作___HTMLTAG_765__HTMLTAG_766___
</thead>
<tbody>
___HTMLTAG_769__HTMLTAG_770__HTMLTAG_771___CC6.1</strong> — 邏輯存取安全___HTMLTAG_773__HTMLTAG_774___ML登入、LOGIN_ERROR、密碼變更的事件記錄</td>__HT
___HTMLTAG_777__HTMLTAG_778__HTMLTAG_779___CC6.2</strong> — 使用者驗證____HTMLTAG_781__HTMLTAG_782___MFA 事件、註冊事件____HTMLTAG_783__4MLG_783__4MLG_783__4ML
___HTMLTAG_785__HTMLTAG_786__HTMLTAG_787___CC6.3</strong> — 存取授權____HTMLTAG_789__HTMLTAG_790___角色/權限變更的管理事件____HTMLTAG_791__HTMLTAG_791__HT
___HTMLTAG_793__HTMLTAG_794__HTMLTAG_795___CC7.2</strong> — 安全監控___HTMLTAG_797__HTMLTAG_798______登入失敗即時警報___HTMLTAG_799__HTMLTAG_800___
___HTMLTAG_801__HTMLTAG_802__HTMLTAG_803___CC8.1</strong> — 變更管理___HTMLTAG_805__HTMLTAG_806___帶有表示的管理事件___HTMLTAG_807__HTMLTAG_808___
</tbody>
</table>

___HTMLTAG_811__HTMLTAG_812___11.2 HIPAA 需求___HTMLTAG_813__HTMLTAG_814___<table>
<thead>
___HTMLTAG_817__HTMLTAG_818___HIPAA 控制___HTMLTAG_819__HTMLTAG_820___Keycloak 實作___HTMLTAG_821__HTMLTAG_822___
</thead>
<tbody>
___HTMLTAG_825__HTMLTAG_826__HTMLTAG_827___§164.312(b)</strong> — 審核控制____HTMLTAG_829__HTMLTAG_830___啟用所有事件類型、帶有表示的管理事件____MLGMLGML_832___
___HTMLTAG_833__HTMLTAG_834__HTMLTAG_835___§164.312(d)</strong> — 人員驗證____HTMLTAG_837__HTMLTAG_838___身分驗證嘗試的事件記錄____HTMLTAG_837__HTMLTAG_838_____14________HTMLTAG_839__4839_____
___HTMLTAG_841__HTMLTAG_842__HTMLTAG_843___§164.308(a)(5)</strong> — 安全意識____HTMLTAG_845__HTMLTAG_846___可疑活動的電子郵件通知____HTMLTAG_845__HT84784_____
</tbody>
</table>

___HTMLTAG_851__HTMLTAG_852___11.3 保留政策___HTMLTAG_853__HTMLTAG_854___

<pre><code class="language-bash"># Cấu hình event retention
# SOC2: minimum 1 năm
# HIPAA: minimum 6 năm

# Trong Keycloak (built-in store)
# Realm Settings → Events → Expiration: 365 days

# Trong Elasticsearch (centralized logging)
# ILM Policy:
# - Hot: 30 days (SSD)
# - Warm: 335 days (HDD)
# - Cold/Frozen: 5+ years (S3/GCS)
# - Delete: 7 years
</code></pre>

___HTMLTAG_855__HTMLTAG_856___12。警報自動化___HTMLTAG_857__HTMLTAG_858___

___HTMLTAG_859__HTMLTAG_860___12.1 Prometheus 警報___HTMLTAG_861__HTMLTAG_862___

<p>Keycloak 通過 <code>/metrics</code> 端點公開指標（需要啟用指標）：</p>

<pre><code class="language-bash"># Bật metrics
bin/kc.sh start --metrics-enabled=true
</code></pre>

<pre><code class="language-yaml"># prometheus-alerts.yml
groups:
  - name: keycloak-security
    rules:
      - alert: HighLoginFailureRate
        expr: |
          sum(rate(keycloak_login_error_total[5m])) by (realm)
          /
          sum(rate(keycloak_login_total[5m])) by (realm)
          > 0.3
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High login failure rate in realm {{ $labels.realm }}"
          description: "Login failure rate is {{ $value | humanizePercentage }} (threshold: 30%)"

      - alert: BruteForceDetected
        expr: |
          sum(increase(keycloak_login_error_total[5m])) by (realm) > 50
        for: 2m
        labels:
          severity: critical
        annotations:
          summary: "Possible brute-force attack on realm {{ $labels.realm }}"
          description: "{{ $value }} login failures in 5 minutes"

      - alert: UnusualRegistrationSpike
        expr: |
          sum(increase(keycloak_registrations_total[10m])) by (realm) > 100
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Unusual registration spike in realm {{ $labels.realm }}"
</code></pre>

___HTMLTAG_867__HTMLTAG_868___12.2 Alertmanager 路由___HTMLTAG_869__HTMLTAG_870___

___預編碼_24___

___HTMLTAG_871__HTMLTAG_872___13。最佳實務___HTMLTAG_873__HTMLTAG_874___

<ul>
___HTMLTAG_876__HTMLTAG_877___同時啟用登入事件和管理事件</strong> — 不要錯過系統中的任何活動。 </li>
___HTMLTAG_880__HTMLTAG_881___將事件傳送至外部系統</strong> — 不要只依賴內建事件儲存。使用 ELK/Loki/SIEM 進行長期儲存。 </li>
___HTMLTAG_884__HTMLTAG_885___啟用管理事件表示</strong> — 儲存管理作業的請求/回應正文以進行全面審核。 </li>
___HTMLTAG_888__HTMLTAG_889___設定適當的保留</strong> — 遵守合規性要求（SOC2：1 年，HIPAA：6 年）.</li>
___HTMLTAG_892__HTMLTAG_893___監控登入失敗率</strong> — 設定暴力偵測和帳號接管警報。 </li>
___HTMLTAG_896__HTMLTAG_897___關聯事件</strong> — 將 Keycloak 事件與應用程式日誌結合以獲得全面的了解。 </li>
___HTMLTAG_900__HTMLTAG_901___保護事件日誌</strong> — 日誌資料包含 PII，需要在靜態和傳輸過程中加密，存取受到限制。 </li>
</ul>