---
id: 019c9617-fb6d-73ff-ab92-84838b979806
title: 第 5 課：安裝 PostgreSQL
slug: bai-5-cai-dat-postgresql
description: 從軟體包儲存庫或來源安裝 PostgreSQL，在叢集中的所有 3 個節點上配置 postgresql.conf 和 pg_hba.conf。
duration_minutes: 110
is_free: true
video_url: null
sort_order: 5
section_title: 第 2 部分：安裝與設定
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-843" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-843)"/>

  <!-- Decorations -->
  <g>
    <circle cx="945" cy="125" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="790" cy="70" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="635" cy="275" r="8" fill="#fb923c" opacity="0.1"/>
    <circle cx="980" cy="220" r="23" fill="#fb923c" opacity="0.05"/>
    <circle cx="825" cy="165" r="8" fill="#fb923c" opacity="0.1"/>
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
    <polygon points="1060.9807621135333,220 1060.9807621135333,250 1035,265 1009.0192378864668,250 1009.0192378864668,220 1035,205" fill="none" stroke="#fb923c" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#fb923c"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#fb923c" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#fb923c">🔒 DevSecOps — 第 5 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 5 課：安裝 PostgreSQL</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：安裝與安裝設定</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標____HTMLTAG_66__HTMLTAG_67___學完本課後，您將：___HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___從軟體包儲存庫安裝 Postgre____HTMLTAG_71__HTMLTAG_70___從軟體包儲存庫安裝 Postgre____HTMLTAG_71__HTMLTAGSQL_72___gre （選用）___HTMLTAG_73__HTMLTAG_74___配置<code>postgresql.conf</code> HA 基本___HTMLTAG_77__HTMLTAG_78___了解<code>pg_hba.conf___MLTAG_78___了解___HT138____4_2_2_2_7_7_7_FML_7_20_7_2_2_7_FML____個節點上為 Patroni 叢集準備 PostgreSQL____HTMLTAG_83__HTMLTAG_84__HTMLTAG_85___1。從套件儲存庫安裝 PostgreSQL___HTMLTAG_86__HTMLTAG_87___1.1。準備工作___HTMLTAG_88__HTMLTAG_89___在安裝 PostgreSQL 之前，您需要安裝官方 PostgreSQL 儲存庫套件（PGDG - PostgreSQL 全球開發小組）。 ___HTMLTAG_90__HTMLTAG_91__HTMLTAG_92___PGDG 儲存庫的優點</strong>:___HTMLTAG_94__HTMLTAG_95__HTMLTAG_96___✅ 最新 PostgreSQL版本___HTMLTAG_95__HTMLTAG_96___✅ 最新 PostgreSQL版本</li>__ML 快速安全更新____HTMLTAG_99__HTMLTAG_100___✅ 许多可用扩展___HTMLTAG_101__HTMLTAG_102___✅ 支持许多发行版___HTMLTAG_103__HTMLTAG_104__HTMLTAG_105___1.2。在 Ubuntu/Debian 上安裝___HTMLTAG_106__HTMLTAG_107___步驟 1：新增 PGDG 儲存庫___HTMLTAG_108__CODEBLOCK_0__HTMLTAG_109___步驟 2：安裝 PostgreSQL___HTMLTAG_110__CODEBLOCK_110__CO 3：測試服務___HTMLTAG_112__CODEBLOCK_2__HTMLTAG_113___步驟 4：停止並停用 PostgreSQL 預設叢集___HTMLTAG_114__CODEBLOCK_3__HTMLTAG_115___1.3。在 CentOS/RHEL/Rocky Linux 上安裝___HTMLTAG_116__HTMLTAG_117___步驟 1：新增 PGDG 儲存庫___HTMLTAG_118__CODEBLOCK_4__HTMLTAG_119___步驟 2：安裝 PostgreSQL_</h4>MLTAG_119___步驟 2：安裝 PostgreSQL_</h4>ML 3：建立符號連結（可選，但方便）___HTMLTAG_122__CODEBLOCK_6__HTMLTAG_123___第 4 步：不要初始化資料庫（Patroni 會執行此操作）___HTMLTAG_124__CODEBLOCK_7__HTMLTAG_125___2。從原始程式碼安裝 PostgreSQL（可選 - 進階）___HTMLTAG_126__HTMLTAG_127___從原始程式碼安裝允許自訂編譯選項，但更複雜且難以維護.___HTMLTAG_128__HTMLTAG_129___2.1。什麼時候需要從源安裝？ ___HTMLTAG_130__HTMLTAG_131__HTMLTAG_132___🔧 需要二進位套件中沒有的自訂功能___HTMLTAG_133__HTMLTAG_134___🔧 使用開發版本進行測試___HTMLTAG_135__HTMLTAG_136___*針對硬體進行了最佳化可以___HTMLTAG_137__HTMLTAG_138___🔧應用自訂補丁___HTMLTAG_139__HTMLTAG_140__HTMLTAG_141___2.2。來源安裝過程___HTMLTAG_142__HTMLTAG_143___步驟一：安裝相依性___HTMLTAG_144__CODEBLOCK_8__HTMLTAG_145___第2步：下載來源___HTMLTAG_146__CODEBLOCK_9__HTMLTAG_147133672UU​​S____ML LOCK_10__HTMLTAG_149___第4步：設定環境___HTMLTAG_150__CODEBLOCK_11__HTMLTAG_151__HTMLTAG_152___注意</strong>：從來源安裝不會自動有__53_70____MLd服務，需要手動建立153_MLG151____4153____ML_153_ML4。基本的 postgresql.conf 配置___HTMLTAG_156__HTMLTAG_157___Patroni 將透過 DCS 管理大部分 PostgreSQL 設定。但是，了解重要參數非常重要。 ___HTMLTAG_158__HTMLTAG_159___3.1。文件結構 postgresql.conf___HTMLTAG_160__CODEBLOCK_12__HTMLTAG_161___3.2。 HA</h3>__ 的重要參數_HTMLTAG_163___复制设置____HTMLTAG_164__CODEBLOCK_13__HTMLTAG_165___内存设置___HTMLTAG_166__CODEBLOCK_14__HTMLTAG_167___检查点设置____HTMLTAG_168__CODEBLOCK_15__HTMLTAG_169___日志记录设置___HTMLTAG_170__CODEBLOCK_16__HTMLTAG_171___3.3。 Patroni 將覆蓋設定___HTMLTAG_172__HTMLTAG_173___Patroni 透過 DCS 管理下列參數，<strong>NO</strong> 應在 postgreHTsql.conf 中設定：___HTMLTAG_176__CODEBLOCK_17HTsql.conf 将自动设置它们在<code>postgresql.auto.conf</code>.___HTMLTAG_180__HTMLTAG_181___4。了解 pg_hba.conf___HTMLTAG_182__HTMLTAG_183__HTMLTAG_184___pg_hba.conf</code>（基于主机的身份验证）控制客户端身份验证。 ___HTMLTAG_186__HTMLTAG_187___4.1。 pg_hba.conf 的结构____HTMLTAG_188__CODEBLOCK_18__HTMLTAG_189___4.2。列____HTMLTAG_190__HTMLTAG_191__HTMLTAG_192__HTMLTAG_193___TYPE</strong>：____HTMLTAG_195__HTMLTAG_196__HTML TAG_197___local</code>：Unix套接字连接___HTMLTAG_199__HTMLTAG_200__HTMLTAG_201___主机</code>：TCP/IP（明文或。 TCP/IP___HTMLTAG_211__HTMLTAG_212__HTMLTAG_213__HTMLTAG_214__HTMLTAG_215___DATABASE</strong>:____HTMLTAG_217__HTMLTAG_218_____20UMLGML_19217_______20_218______ HTMLTAG_222___：所有資料庫___HTMLTAG_223__HTMLTAG_224__HTMLTAG_225___replication</code>：複製連線___HTMLTAG_227__HTMLTAG_228__HTMLTAG_229__HTMLTAG_230114231429__HT _:___HTMLTAG_233__HTMLTAG_234___用户名___HTMLTAG_235__HTMLTAG_236__HTMLTAG_237___全部</code>：全部用户___HTMLTAG_23 9__HTMLTAG_240__HTMLTAG_241__HTMLTAG_242__HTMLTAG_243___位址</strong>：____HTMLTAG_245__HTMLTAG_246___IP/網路遮罩： ;<code>10.0.1.0/24___HTMLTAG_248__HTMLTAG_249__HTMLTAG_250___主机名___HTMLTAG_251__HTMLT AG_252__HTMLTAG_253___0.0.0.0/0</code>：任何地方（不是推荐）___HTMLTAG_255__HTMLTAG_256__HTMLTAG_2 57__HTMLTAG_258__HTMLTAG_259___方法</strong>：___HTMLTAG_261__HTMLTAG_262__HTMLTAG_263____信任</code>：不需要密碼（本地開發僅）___HTMLTAG_265__HTMLTAG_266__HTMLTAG_267___md5</code>：MD5雜湊密碼（已棄用）___HTMLTAG_269__HTMLTAG_270__HTMLTAG_271___scram-sha-256</code>：現代、安全（建議）___HTMLTAG_273__HTMLTAG_274__HTMLTAG_275_____er___V​​U​​URAUr_Us____UsU​​U​​U​​R.使用者名稱____HTMLTAG_277__HTMLTAG_278__HTMLTAG_279___cert</code>：SSL 憑證驗證___HTMLTAG_281__HTMLTAG_282__HTMLTAG_283__HTMLTAG_284__HTMLTAG_284___MLTAG_283__HTMLTAG_284281413。 Patroni 集群的 pg_hba.conf___HTMLTAG_286__CODEBLOCK_19__HTMLTAG_287___4.4。 pg_hba.conf 的最佳實務___HTMLTAG_288__HTMLTAG_289___✅&nbsp;<strong>具體更好</strong>：請勿使用<code>0.0.0.0/0</code>___否則需要___HTMLTAG_294__HTMLTAG_295___✅<strong>使用 scram-sha-256</strong>：現代身份驗證方法___HTMLTAG_298__HTMLTAG_299___✅<strong>單獨用戶</strong>：應用程式、複製的不同用戶，監控___HTMLTAG_302__HTMLTAG _303___✅&nbsp;<strong>文檔</strong>：每條規則的註解___HTMLTAG_306__HTMLTAG_307___✅&nbsp;<strong>限制複製</strong>：僅允許來自允許來自於Patroni IP 的複製使用者節點___HTMLTAG_310__HTMLTAG_311___❌&nbsp;<strong>避免信任方法</strong>：即使在開發環境中___HTMLTAG_314__HTMLTAG_315___5。建立必要的使用者和資料庫___HTMLTAG_316__HTMLTAG_317___5.1。创建复制用户___HTMLTAG_318__CODEBLOCK_20__HTMLTAG_319___5.2。创建 Patroni 监控用户___HTMLTAG_320__CODEBLOCK_21__HTMLTAG_321___5.3。建立應用程式資料庫和使用者</h3><pre><code class="language-sql">-- Tạo database
CREATE DATABASE myapp;

-- Tạo user
CREATE USER app_user WITH ENCRYPTED PASSWORD 'app_password';

-- Grant permissions
GRANT ALL PRIVILEGES ON DATABASE myapp TO app_user;

-- Connect to myapp database
\c myapp

-- Grant schema permissions
GRANT ALL ON SCHEMA public TO app_user;
</code></pre><h2 id="6-lab-c%C3%A0i-%C4%91%E1%BA%B7t-postgresql-tr%C3%AAn-3-nodes">6。實驗室：在 3 個節點上安裝 PostgreSQL___HTMLTAG_324__HTMLTAG_325___6.1。实验室环境___HTMLTAG_326__CODEBLOCK_23__HTMLTAG_327___6.2。在所有 3 個節點上執行___HTMLTAG_328__HTMLTAG_329___步驟 1：更新系統___HTMLTAG_330__CODEBLOCK_24__HTMLTAG_331___步驟 2：安裝 PostgreSQL 18___HTMLTAG_332__CODEBLOCK_255325325_____CODEBL 3：停止並停用預設值cluster___HTMLTAG_334__CODEBLOCK_26__HTMLTAG_335___步驟 4：為 PostgreSQL 資料建立目錄___HTMLTAG_336__CODEBLOCK_27__HTMLTAG_337___步驟 5：測試 PostgreSQL二進位檔案___HTMLTAG_338__CODEBLOCK_28__HTMLTAG_339___6.3。在每个节点上验证____HTMLTAG_340__CODEBLOCK_29__HTMLTAG_341___6.4。疑難排解____HTMLTAG_342__HTMLTAG_343___問題 1：資料目錄權限被拒絕___HTMLTAG_344__CODEBLOCK_30__HTMLTAG_345____問題 2：PostgreSQL 服務仍在執行</h4>___CODEBLOCK_31437757____2346_CODEBLOC 已存在使用___HTMLTAG_348__CODEBLOCK_32__HTMLTAG_349___7。摘要___HTMLTAG_350__HTMLTAG_351___要點___HTMLTAG_352__HTMLTAG_353___✅<strong>套件儲存庫__HTMLTAG_355___：從 PGDG 儲存庫安裝 PostgreSQL以取得新版本most___HTMLTAG_356__HTMLTAG_357___✅&nbsp;<strong>停用預設服務</strong>：Patroni 將管理 PostgreSQL，不使用預設的 systemd 服务定义___HTMLTAG_360__HTMLTAG_361___✅&nbsp;<strong>postgresql.conf</strong>：了解重要参数用于 HA和複製___HTMLTAG_364__HTMLTAG_365___✅&nbsp;<strong>pg_hba.conf</strong>：配置連接和複製的身份驗證___HTMLTAG_368__HTMLTAG_369_____ML&m_______ML_MLTA___4___________ML將自動引導cluster___HTMLTAG_372__HTMLTAG_373___實驗後檢查清單___HTMLTAG_374__HTMLTAG_375__HTMLTAG_376___ PostgreSQL 18 已安裝在所有 3個節點上___HTMLTAG_377__HTMLTAG_378___&nbsp;預設叢集已刪除___HTMLTAG_379__HTMLTAG_380___PostgreSQL 服務已停用___HTMLTAG_381__HTMLTAG_382___&nbsp;使用正確識別碼建立的資料目錄中已存在二元路徑___HTMLTAG_385__HTMLTAG_386__HTMLTAG_387___準備第 6 課___HTMLTAG_388__HTMLTAG_389___下一課將安裝並設定 etcd 叢集- Patroni 的 DCS 層.</p>