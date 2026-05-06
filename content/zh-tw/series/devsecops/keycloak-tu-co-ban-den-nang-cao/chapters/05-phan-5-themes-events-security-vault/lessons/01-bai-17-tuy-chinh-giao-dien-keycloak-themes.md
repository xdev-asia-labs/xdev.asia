---
id: 019d8b30-b117-7001-c001-e0c5f8100117
title: 第 17 課：自訂 Keycloak 介面 - 主題
slug: bai-17-tuy-chinh-giao-dien-keycloak-themes
description: 主題類型（登入、帳戶、管理員、電子郵件、歡迎）、主題目錄結構、自訂主題建立、主題屬性檔案、FreeMarker 範本引擎、覆蓋特定範本、i18n 訊息、使用自訂 CSS/JS、擴充主題（父級）、部署主題（獨立、Docker、JAR/SPI）、主題快取和主題開發工作流程。
duration_minutes: 200
is_free: true
video_url: null
sort_order: 17
section_title: 第 5 部分：主題、事件、安全性和 Vault
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2678" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2678)"/>

  <!-- Decorations -->
  <g>
    <circle cx="808" cy="174" r="36" fill="#fbbf24" opacity="0.09"/>
    <circle cx="1016" cy="222" r="20" fill="#fbbf24" opacity="0.13"/>
    <circle cx="724" cy="270" r="34" fill="#fbbf24" opacity="0.07"/>
    <circle cx="932" cy="58" r="18" fill="#fbbf24" opacity="0.11"/>
    <circle cx="640" cy="106" r="32" fill="#fbbf24" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#fbbf24" opacity="0.15"/>
    <line x1="600" y1="134" x2="1100" y2="214" stroke="#fbbf24" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="164" x2="1050" y2="234" stroke="#fbbf24" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1059.1147367097487,219.5 1059.1147367097487,248.5 1034,263 1008.8852632902513,248.5 1008.8852632902513,219.5 1034,205" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fbbf24"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fbbf24" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fbbf24">🔒 DevSecOps — 第 17 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 17 課：自訂 Keycloak 介面 -</tspan>
      <tspan x="60" dy="42">主題</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：主題、事件、安全性與保管庫</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。 Keycloak 主題概述___HTMLTAG_69__HTMLTAG_70___

<p>Keycloak 允許透過 <strong>Themes</strong> 系統完全自訂使用者介面。每個主題控制 Keycloak 特定部分的外觀和感覺，從登入頁面到通知電子郵件。 </p>

___HTMLTAG_75__HTMLTAG_76___1.1 主題類型___HTMLTAG_77__HTMLTAG_78___

<p>Keycloak 支援 <strong>5 種主題類型</strong>:</p>

<table>
<thead>
___HTMLTAG_85__HTMLTAG_86___主題類型___HTMLTAG_87__HTMLTAG_88___說明____HTMLTAG_89__HTMLTAG_90___適用頁面____HTMLTAG_91__HTMLTAG_92___
</thead>
<tbody>
___HTMLTAG_95__HTMLTAG_96__HTMLTAG_97___登入____HTMLTAG_98__HTMLTAG_99__HTMLTAG_100___登入、註冊、重設密碼介面___HTMLTAG_101__HTMLTAG_102______登入、註冊、重設密碼介面___HTMLTAG_101__HTMLTAG__102______登入、註冊、重設密碼介面___MLTAG_101__HTMLTAG__102______2____註冊、
___HTMLTAG_105__HTMLTAG_106__HTMLTAG_107___帳戶___HTMLTAG_108__HTMLTAG_109__HTMLTAG_110___使用者帳戶管理頁面___HTMLTAG_111__HTMLTAG_112___帳號控制台（基於 v3 React1TAG_111__HTMLTAG_112______帳戶控制台（基於 v3 React141313）___
___HTMLTAG_115__HTMLTAG_116__HTMLTAG_117___管理___HTMLTAG_118__HTMLTAG_119__HTMLTAG_120___管理控制台___HTMLTAG_121__HTMLTAG_122______管理控制台（基於React）___MLTAG_121__HTMLTAG_122______管理控制台（基於React）___MLTAG12312014_______
___HTMLTAG_125__HTMLTAG_126__HTMLTAG_127___電子郵件___HTMLTAG_128__HTMLTAG_129__HTMLTAG_130___傳送給使用者的範本電子郵件___HTMLTAG_131__HTMLTAG_132___發送給使用者的範本電子郵件___HTMLTAG_131__HT__TAG_132___ML、重設密碼、事件___HTMLTAG_131__HT__TAG_132___ML、重設密碼、事件___HTMLTAG_131__HT__14____132___ML、重設密碼、事件___HTMLTAG_131__HT__14___132___ML、重設密碼、事件。
___HTMLTAG_135__HTMLTAG_136__HTMLTAG_137___歡迎___HTMLTAG_138__HTMLTAG_139__HTMLTAG_1400___預設歡迎頁____HTMLTAG_141__HTMLTAG_142______頁面存取根UR___預設歡迎143HTMLTAGML414311671672____MLL143HT
</tbody>
</table>___HTMLTAG_147__HTMLTAG_148___1.2 預設主題___HTMLTAG_149__HTMLTAG_150___

<p>Keycloak 附帶可用主題：</p>

<ul>
___HTMLTAG_154__HTMLTAG_155___keycloak</strong> — 登入、帳號、電子郵件的預設主題</li>
___HTMLTAG_158__HTMLTAG_159___keycloak.v2</strong> — 用於登入的新主題 (Keycloak 24+)、帳戶控制台 v3</li>
___HTMLTAG_162__HTMLTAG_163___base</strong>（已棄用）- 基本主題，不應再用作父主題</li>
</ul>

___HTMLTAG_167__HTMLTAG_168___2。主題資料夾結構___HTMLTAG_169__HTMLTAG_170___

<p>每個主題都根據標準資料夾結構進行組織：</p>

___預編碼_0___

___HTMLTAG_173__HTMLTAG_174___2.1 主資料夾___HTMLTAG_175__HTMLTAG_176___

<table>
<thead>
___HTMLTAG_179__HTMLTAG_180___資料夾____HTMLTAG_181__HTMLTAG_182___用途____HTMLTAG_183__HTMLTAG_184___
</thead>
<tbody>
___HTMLTAG_187__HTMLTAG_188__HTMLTAG_189___資源/____HTMLTAG_190__HTMLTAG_191__HTMLTAG_192___CSS、JavaScript、靜態影像____HTMLTAG_193__HTMLTAG_194___
___HTMLTAG_195__HTMLTAG_196__HTMLTAG_197___templates/____HTMLTAG_198__HTMLTAG_199__HTMLTAG_200___FreeMarker 範本檔案 (.ftl)___HTMLTAG_201__HTMLTAG_202______
___HTMLTAG_203__HTMLTAG_204__HTMLTAG_205___messages/____HTMLTAG_206__HTMLTAG_207__HTMLTAG_208___多語言檔案 i18n___HTMLTAG_209__HTMLTAG_210___
</tbody>
</table>

___HTMLTAG_213__HTMLTAG_214___3。主題屬性檔___HTMLTAG_215__HTMLTAG_216___

<p>檔案 <code>theme.properties</code> 是每個主題類型的中心設定檔：</p>

___預編碼_1___

___HTMLTAG_221__HTMLTAG_222___3.1 重要屬性___HTMLTAG_223__HTMLTAG_224___<table>
<thead>
___HTMLTAG_227__HTMLTAG_228___屬性___HTMLTAG_229__HTMLTAG_230___說明___HTMLTAG_231__HTMLTAG_232___範例____HTMLTAG_233__HTMLTAG_234______
</thead>
<tbody>
___HTMLTAG_237__HTMLTAG_238__HTMLTAG_239___parent___HTMLTAG_240__HTMLTAG_241__HTMLTAG_242___成功父主題冗餘__ _HTMLTAG_243__HTMLTAG_244__HTMLTAG_245___parent=keycloak.v2___HTMLTAG_246__HTMLTAG_247__HTMLTAG_248___
___HTMLTAG_249__HTMLTAG_250__HTMLTAG_251___導入___HTMLTAG_252__HTMLTAG_253__HTMLTAG_254___從主題其他導入資源___HT MLTAG_255__HTMLTAG_256__HTMLTAG_257___import=common/keycloak___HTMLTAG_258__HTMLTAG_259__HTMLTAG_260___
___HTMLTAG_261__HTMLTAG_262__HTMLTAG_263___樣式___HTMLTAG_264__HTMLTAG_265__HTMLTAG_266___CSS 檔案清單（以空格分隔）___HTMLTAG_267__HTMLTAG_268__9+G_268__9U​​F_267__HTMLTAG_268__9]G_268__* css/custom.css___HTMLTAG_270__HTMLTAG_271__HTMLTAG_272___
___HTMLTAG_273__HTMLTAG_274__HTMLTAG_275___腳本___HTMLTAG_276__HTMLTAG_277__HTMLTAG_278___JavaScript文件___HTMLTAG_279__HTMLTAG_280__HTMLTAG_281___scripts=js/app.js___HTMLTAG_282__HTMLTAG_283__HTMLTAG_284___
___HTMLTAG_285__HTMLTAG_286__HTMLTAG_287___語言環境___HTMLTAG_288__HTMLTAG_289__HTMLTAG_290___支援的語言__ _HTMLTAG_291__HTMLTAG_292__HTMLTAG_293___語言環境=en,vi,ja___HTMLTAG_294__HTMLTAG_295__HTMLTAG_296___
</tbody>
</table>

___HTMLTAG_299__HTMLTAG_300___4。 FreeMarker 範本引擎___HTMLTAG_301__HTMLTAG_302___

<p>Keycloak 使用 <strong>Apache FreeMarker</strong> 作為登入和電子郵件主題的範本引擎。 FreeMarker 允許使用變數和邏輯建立動態 HTML。 </p>

___HTMLTAG_307__HTMLTAG_308___4.1 基本語法___HTMLTAG_309__HTMLTAG_310___

___預編碼_2___

___HTMLTAG_311__HTMLTAG_312___4.2 登入主題中可用的變數___HTMLTAG_313__HTMLTAG_314___<table>
<thead>
___HTMLTAG_317__HTMLTAG_318___變數___HTMLTAG_319__HTMLTAG_320___說明___HTMLTAG_321__HTMLTAG_322___
</thead>
<tbody>
___HTMLTAG_325__HTMLTAG_326__HTMLTAG_327___領域___HTMLTAG_328__HTMLTAG_329__HTMLTAG_330___領域資訊（顯示名稱、允許註冊、密碼、社交...）___HTMLTAG_331__HTML___領域資訊（顯示名稱、允許註冊、密碼、社交...）___HTMLTAG_331__HTMLTAG_332___
___HTMLTAG_333__HTMLTAG_334__HTMLTAG_335___url___HTMLTAG_336__HTMLTAG_337__HTMLTAG_338___URL（loginAction、registrationUrl、loginResetCredentialsUrl...）___URL（loginAction、registrationUrl、loginResetCredentialsUrl...）___URLMLTAG_339__43____________
___HTMLTAG_341__HTMLTAG_342__HTMLTAG_343____客戶端___HTMLTAG_344__HTMLTAG_345__HTMLTAG_346____客戶端正在要求登入（名稱、clientId...）___HTMLTAG_347__HTMLTAG_348___
___HTMLTAG_349__HTMLTAG_350__HTMLTAG_351____登入___HTMLTAG_352__HTMLTAG_353__HTMLTAG_354___表單資料（已輸入使用者名稱...）___HTMLTAG_355__HTMLTAG_356___
___HTMLTAG_357__HTMLTAG_358__HTMLTAG_359___訊息___HTMLTAG_360__HTMLTAG_361__HTMLTAG_362___錯誤/成功訊息__HTMLTAG_363__HTMLTAG_364___
___HTMLTAG_365__HTMLTAG_366__HTMLTAG_367___messagesPerField___HTMLTAG_368__HTMLTAG_369__HTMLTAG_370___每個欄位的驗證訊息____HTMLTAG_371__HTMLTAG_372___
___HTMLTAG_373__HTMLTAG_374__HTMLTAG_375____社交___HTMLTAG_376__HTMLTAG_377__HTMLTAG_378____社交登入供應商____HTMLTAG_379__HTMLTAG_380___
___HTMLTAG_381__HTMLTAG_382__HTMLTAG_383___區域設定___HTMLTAG_384__HTMLTAG_385__HTMLTAG_386____目前區域設定與支援的區域設定清單____HTMLTAG_387__HTMLTAG_388___
</tbody>
</table>

___HTMLTAG_391__HTMLTAG_392___5。覆蓋特定模板___HTMLTAG_393__HTMLTAG_394___

<p>您只需覆寫要變更的範本即可。其餘模板將從父主題繼承。 </p>

___HTMLTAG_397__HTMLTAG_398___5.1 覆蓋登入頁面___HTMLTAG_399__HTMLTAG_400___

___預編碼_3___

___HTMLTAG_401__HTMLTAG_402___5.2 覆寫暫存器頁面___HTMLTAG_403__HTMLTAG_404___

___預編碼_4___

___HTMLTAG_405__HTMLTAG_406___5.3 覆寫錯誤頁面___HTMLTAG_407__HTMLTAG_408___

___預編碼_5___

___HTMLTAG_409__HTMLTAG_410___6。自訂 CSS 和 JavaScript___HTMLTAG_411__HTMLTAG_412___

___HTMLTAG_413__HTMLTAG_414___6.1 新增自訂 CSS___HTMLTAG_415__HTMLTAG_416___

___預編碼_6___

___HTMLTAG_417__HTMLTAG_418___6.2 新增自訂 JavaScript___HTMLTAG_419__HTMLTAG_420___

___預編碼_7___

___HTMLTAG_421__HTMLTAG_422___7。國際化 (i18n)___HTMLTAG_423__HTMLTAG_424___

<p>Keycloak 透過檔案 <code>messages_{locale}.properties</code>.</p> 支援多種語言

___HTMLTAG_429__HTMLTAG_430___7.1 建立越南語檔案___HTMLTAG_431__HTMLTAG_432___

___預編碼_8___

___HTMLTAG_433__HTMLTAG_434___7.2 覆蓋英文訊息___HTMLTAG_435__HTMLTAG_436___

___預編碼_9___

___HTMLTAG_437__HTMLTAG_438___7.3 在範本中使用 i18n___HTMLTAG_439__HTMLTAG_440___

___預編碼_10___

___HTMLTAG_441__HTMLTAG_442___8。使用父級擴充主題___HTMLTAG_443__HTMLTAG_444___

<p>主題繼承允許基於現有主題建立新主題，僅覆寫需要變更的部分。 </p>___HTMLTAG_447__HTMLTAG_448___8.1 工作原理__HTMLTAG_449__HTMLTAG_450___

<pre><code class="language-text">Thứ tự tìm kiếm resource/template:
1. Current theme (my-custom-theme/login/)
2. Parent theme (keycloak.v2/login/)
3. Parent của parent (nếu có)
4. Base resources (import)
</code></pre>

___HTMLTAG_451__HTMLTAG_452___8.2 多層繼承___HTMLTAG_453__HTMLTAG_454___

<pre><code class="language-properties"># themes/company-base/login/theme.properties
parent=keycloak.v2
styles=css/login.css css/company-base.css
locales=en,vi

# themes/company-product-a/login/theme.properties
parent=company-base
styles=css/login.css css/company-base.css css/product-a.css
</code></pre>

___HTMLTAG_455__HTMLTAG_456___8.3 主題變體___HTMLTAG_457__HTMLTAG_458___

<p>從 Keycloak 24+ 開始，您可以定義 <strong> 主題變體 </strong> 以獲得同一主題的不同版本：</p>

<pre><code class="language-properties"># theme.properties
parent=keycloak.v2

# Variant definition (admin có thể chọn trong Realm Settings)
variant.light.styles=css/login.css css/light.css
variant.dark.styles=css/login.css css/dark.css
</code></pre>

___HTMLTAG_463__HTMLTAG_464___9。部署主題___HTMLTAG_465__HTMLTAG_466___

___HTMLTAG_467__HTMLTAG_468___9.1 獨立部署___HTMLTAG_469__HTMLTAG_470___

<p>將主題複製到Keycloak的<code>themes/</code>資料夾：</p>

<pre><code class="language-bash"># Cấu trúc standalone
$KEYCLOAK_HOME/
├── themes/
│   └── my-custom-theme/
│       ├── login/
│       │   ├── theme.properties
│       │   ├── resources/
│       │   ├── templates/
│       │   └── messages/
│       └── email/
│           └── ...
</code></pre>

___HTMLTAG_475__HTMLTAG_476___9.2 Docker 部署___HTMLTAG_477__HTMLTAG_478___

<pre><code class="language-dockerfile"># Dockerfile - Simple COPY
FROM quay.io/keycloak/keycloak:26.1 AS builder

# Copy custom theme
COPY themes/my-custom-theme /opt/keycloak/themes/my-custom-theme

# Build optimized Keycloak
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:26.1

COPY --from=builder /opt/keycloak/ /opt/keycloak/

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
</code></pre>

___HTMLTAG_479__HTMLTAG_480___9.3 使用節點進行 Docker 多階段建置（帳戶 v3）___HTMLTAG_481__HTMLTAG_482___

<pre><code class="language-dockerfile"># Dockerfile - Multi-stage build cho Account Console v3 customization
FROM node:20-alpine AS theme-builder

WORKDIR /theme
COPY account-theme/ .
RUN npm ci &amp;&amp; npm run build

FROM quay.io/keycloak/keycloak:26.1 AS keycloak-builder

# Copy login/email themes
COPY themes/my-custom-theme /opt/keycloak/themes/my-custom-theme

# Copy built Account v3 theme
COPY --from=theme-builder /theme/dist /opt/keycloak/themes/my-custom-theme/account

RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:26.1
COPY --from=keycloak-builder /opt/keycloak/ /opt/keycloak/

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
</code></pre>

___HTMLTAG_483__HTMLTAG_484___9.4 JAR/SPI 部署___HTMLTAG_485__HTMLTAG_486___

<p>將主題打包為 JAR 檔案以部署為 SPI 提供者：</p>

<pre><code class="language-text">my-theme.jar
├── META-INF/
│   └── keycloak-themes.json
└── theme/
    └── my-custom-theme/
        ├── login/
        └── email/
</code></pre>

<pre><code class="language-json">// META-INF/keycloak-themes.json
{
    "themes": [
        {
            "name": "my-custom-theme",
            "types": ["login", "email"]
        }
    ]
}
</code></pre>

<pre><code class="language-bash"># Deploy JAR
cp my-theme.jar $KEYCLOAK_HOME/providers/
$KEYCLOAK_HOME/bin/kc.sh build
</code></pre>

___HTMLTAG_489__HTMLTAG_490___10。主題開發工作流程___HTMLTAG_491__HTMLTAG_492___

___HTMLTAG_493__HTMLTAG_494___10.1 在開發過程中關閉快取___HTMLTAG_495__HTMLTAG_496___

<p>預設Keycloak快取主題，開發時需要關閉：</p>

___預編碼_20___

___HTMLTAG_499__HTMLTAG_500___10.2 用於開發的 Docker Compose___HTMLTAG_501__HTMLTAG_502___

<pre><code class="language-yaml"># docker-compose.dev.yml
services:
  keycloak:
    image: quay.io/keycloak/keycloak:26.1
    command:
      - start-dev
      - --spi-theme-static-max-age=-1
      - --spi-theme-cache-themes=false
      - --spi-theme-cache-templates=false
    volumes:
      # Mount theme directory cho hot-reload
      - ./themes/my-custom-theme:/opt/keycloak/themes/my-custom-theme
    environment:
      KC_DB: postgres
      KC_DB_URL: jdbc:postgresql://postgres:5432/keycloak
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD: keycloak
      KC_BOOTSTRAP_ADMIN_USERNAME: admin
      KC_BOOTSTRAP_ADMIN_PASSWORD: admin
    ports:
      - "8080:8080"
    depends_on:
      - postgres

  postgres:
    image: postgres:17
    environment:
      POSTGRES_DB: keycloak
      POSTGRES_USER: keycloak
      POSTGRES_PASSWORD: keycloak
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
</code></pre>

___HTMLTAG_503__HTMLTAG_504___10.3 開發工作流程___HTMLTAG_505__HTMLTAG_506___

<pre><code class="language-bash"># 1. Khởi chạy dev environment
docker compose -f docker-compose.dev.yml up -d

# 2. Chỉnh sửa file theme (CSV, FTL, properties)
# Thay đổi sẽ tự động reflect (vì cache đã tắt)

# 3. Refresh browser để xem thay đổi
# Không cần restart Keycloak!

# 4. Áp dụng theme vào Realm
# Admin Console → Realm Settings → Themes → Login Theme: my-custom-theme
</code></pre>

___HTMLTAG_507__HTMLTAG_508___11。 React 帳戶控制台 v3 自訂___HTMLTAG_509__HTMLTAG_510___

<p>帳號控制台 v3 使用 <strong>React + PatternFly</strong>。要進行自訂，您需要建立自訂 React 應用程式。 </p>

___HTMLTAG_515__HTMLTAG_516___11.1 Keycloakify（建議）___HTMLTAG_517__HTMLTAG_518___

<p>使用 <a href="https://www.keycloakify.dev/">Keycloakify</a> — 一個用於使用 React 建立 Keycloak 主題的專用框架：</p>

<pre><code class="language-bash"># Tạo project mới với Keycloakify
npx create-keycloakify-project my-keycloak-theme
cd my-keycloak-theme

# Cấu trúc project
my-keycloak-theme/
├── src/
│   ├── login/          # Login theme pages
│   │   ├── KcPage.tsx
│   │   ├── pages/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── ...
│   │   └── i18n.ts
│   └── account/        # Account theme pages
├── public/
│   └── ...
├── package.json
└── vite.config.ts

# Dev mode
npm run dev

# Build JAR
npm run build-keycloak-theme
# Output: dist_keycloak/my-keycloak-theme.jar
</code></pre>

___HTMLTAG_523__HTMLTAG_524___11.2 Keycloakify 登入頁面範例___HTMLTAG_525__HTMLTAG_526___

___預編碼_24___

___HTMLTAG_527__HTMLTAG_528___12。電子郵件主題自訂___HTMLTAG_529__HTMLTAG_530___

<p>每個範本有兩個版本的電子郵件主題：HTML 和純文字。 </p>

___預編碼_25___

<pre><code class="language-text">&lt;!-- themes/my-custom-theme/email/text/email-verification.ftl --&gt;
${msg("emailVerificationSubject")}

${msg("emailVerificationBodyPlainText", link, linkExpiration, realmName)}
</code></pre>

___HTMLTAG_533__HTMLTAG_534___13。將主題應用到領域___HTMLTAG_535__HTMLTAG_536___

___HTMLTAG_537__HTMLTAG_538___13.1 透過管理控制台___HTMLTAG_539__HTMLTAG_540___<ol>
<li>登入管理控制台__HTMLTAG_543___
<li>選擇要設定的領域__HTMLTAG_545___
<li>轉到 <strong>領域設定 → 主題___HTMLTAG_548__HTMLTAG_549___
<li>為每種類型選擇一個主題：
<ul>
<li>登入主題：<code>我的自訂主題___HTMLTAG_554__HTMLTAG_555___
<li>帳號主題：<code>我的自訂主題___HTMLTAG_558__HTMLTAG_559___
<li>管理控制台主題：（保留預設值）</li>
<li>電子郵件主題：<code>我的自訂主題___HTMLTAG_564__HTMLTAG_565___
</ul>
</li>
<li>點選 <strong>儲存___HTMLTAG_570__HTMLTAG_571___
</ol>

___HTMLTAG_573__HTMLTAG_574___13.2 透過 REST API___HTMLTAG_575__HTMLTAG_576___

___預編碼_27___

___HTMLTAG_577__HTMLTAG_578___14。最佳實務___HTMLTAG_579__HTMLTAG_580___

<ul>
___HTMLTAG_582__HTMLTAG_583___總是使用父主題</strong> — 繼承自<code>keycloak.v2</code>，而不是從頭開始編寫。升級 Keycloak 時確保相容性。 </li>
___HTMLTAG_588__HTMLTAG_589___僅覆寫需要變更的內容__HTMLTAG_590___ — 不要複製整個範本。僅為您要自訂的範本建立文件。 </li>
___HTMLTAG_592__HTMLTAG_593___按客戶端分隔主題</strong> — 如果有多個應用程序，您可以為每個客戶端使用不同的主題（領域設定或客戶端層級主題覆蓋）。 </li>
___HTMLTAG_596__HTMLTAG_597___在多個瀏覽器上測試</strong> — 特別是登入頁面必須在行動裝置上執行。 </li>
___HTMLTAG_600__HTMLTAG_601___使用 i18n</strong> — 始終使用訊息鍵而非範本中的硬編碼文字。 </li>
___HTMLTAG_604__HTMLTAG_605___版本控制主題</strong> — 管理單獨的 Git 儲存庫或同一專案中的主題。 </li>
___HTMLTAG_608__HTMLTAG_609___CI/CD 管道</strong> — 在 CI 中建置 JAR 主題，使用 Keycloak 容器進行測試，自動部署。 </li>
</ul>