---
id: 019c9617-fb74-7100-9272-7839bac3bdac
title: 第 7 課：安裝 Patroni
slug: bai-7-cai-dat-patroni
description: 安裝Python依賴項，透過pip設定Patroni，分析patroni.yml結構並在3個節點上建立systemd服務。
duration_minutes: 165
is_free: true
video_url: null
sort_order: 7
section_title: 第 2 部分：安裝與設定
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3503" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3503)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1014" cy="112" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="928" cy="226" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="842" cy="80" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="756" cy="194" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="670" cy="48" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="172" x2="1100" y2="252" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="202" x2="1050" y2="272" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1045.38268590218,208.5 1045.38268590218,235.5 1022,249 998.6173140978201,235.5 998.6173140978201,208.5 1022,195" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">🔒 DevSecOps — 第 7 课</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 7 课：安装 Patroni</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：安裝與安裝設定</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標____HTMLTAG_66__HTMLTAG_67___完成本課程後，您將：____HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___安裝 Python 和必要的依賴項____HTMLTAG_71__HTMLTAG_72___透過 pip 安裝Patroni____HTMLTAG_73__HTMLTAG_74___了解檔案結構<code>patroni.yml___HTMLTAG_76__HTMLTAG_77__HTMLTAG_78_ __為Patroni建立systemd服務____HTMLTAG_79__HTMLTAG_80___在3個節點上安裝Patroni___HTMLTAG_81__HTMLTAG_82__HTMLTAG_83___1。簡介___HTMLTAG_84__HTMLTAG_85___Patroni 是一個 Python 應用程序，因此它需要 Python 運行時和依賴項。在本文中，我們將：___HTMLTAG_86__HTMLTAG_87__HTMLTAG_88___安裝 Python 3 和 pip___HTMLTAG_89__HTMLTAG_90___安裝 Patroni 軟體包___HTMLTAG_91__HTMLTAG_92___Patroni 建立設定管理服務來管理服務 ___HTMLTAG___MLG____ Patroni守護程式___HTMLTAG_95__HTMLTAG_96__HTMLTAG_97__HTMLTAG_98___目標體系結構</strong>：___HTMLTAG_100__CODEBLOCK_0__HTMLTAG_101___2。安裝 Python 依賴項___HTMLTAG_102__HTMLTAG_103___2.1。在 Ubuntu/Debian 上安裝 Python___HTMLTAG_104__HTMLTAG_105___在<strong>所有 3 個節點上執行</strong>.___HTMLTAG_108__HTMLTAG_109___步驟 1：安裝 Python 3 和 pip_HTHTMLTAG130102____10 2：安裝系統相依性____HTMLTAG_112__CODEBLOCK_2__HTMLTAG_113___2.2。在 CentOS/RHEL 上安裝 Python___HTMLTAG_114__CODEBLOCK_3__HTMLTAG_115___2.3。升級 pip（建議）___HTMLTAG_116__CODEBLOCK_4__HTMLTAG_117___3。透過 pip 安裝 Patroni___HTMLTAG_118__HTMLTAG_119___3.1。安裝 Patroni____HTMLTAG_120__HTMLTAG_121___在_<strong>所有 3個節點上執行_</strong>._</p>___CODEBLOCK_5__HTMLTAG_125__HTMLTAG_126___解決方案像___HTML TAG_127___[etcd]____HTMLTAG_128__HTMLTAG_129___:____HTMLTAG_130__HTMLTAG_131__HTMLTAG_132___Patroni支援許多 DCS 後端（etcd、consul、 Zookeeper)___HTMLTAG_133__HTMLTAG_134__HTMLTAG_135___[etcd]</code>安裝新增<code>python-etcd</code>客戶端庫___HTMLT AG_139__HTMLTAG_140___可以安裝多個後端：<code>patroni[etcd、consul、zookeeper]___HTMLTAG_142__HTMLTAG_143__HTMLTAG_144__HTMLTAG_145___3.2。已安裝的軟體包___HTMLTAG_146__CODEBLOCK_6__HTMLTAG_147___3.3。驗證 Patroni 指令___HTMLTAG_148__CODEBLOCK_7__HTMLTAG_149___輸出：</p>___CODEBLOCK_8__HTMLTAG_151___4。檔案結構 patoni.yml___HTMLTAG_152__HTMLTAG_153___4.1。 patroni.yml概述___HTMLTAG_154__HTMLTAG_155___檔案<code>patroni.yml</code>是Patroni的主要設定文件，包括：____HTMLTAG_158__HTML TAG_159__HTMLTAG_160__HTMLTAG_161___範圍</strong>：叢集名稱____HTMLTAG_163__HTMLTAG_164__HTMLTAG_165___命名空間_</strong>：DCS中鍵的前綴___HTMLTAG_167__HTMLTAG_168__HTMLTAG_169___節點資訊</strong>：節點名稱、REST API設定___HTMLTAG_171__HTMLTAG_172__HTMLTAG_173___DCS連線_</strong>：etcd端點____HTMLTAG_175__HTMLTAG_176__HTMLTAG_177___引導___ HTMLTAG_178___：初始叢集設定____HTMLTAG_179__HTMLTAG_180__HTMLTAG_181___PostgreSQL</strong>：資料庫設定____HTMLTAG_183__HTMLTAG_184__HTMLTAG_185___標籤</strong>：節點元資料___HTMLTAG_187__HTMLTAG_188__HTMLTAG_189___看門狗</strong>：選用硬體看門狗___HTMLTAG_191__UMLTAG_190___：可選的硬體看門狗_____MLTAG_191__HTTAG19191953_191__4.G191192G191_____基本結構___HTMLTAG_194__CODEBLOCK_9__HTMLTAG_195___4.3。主要部分說明____HTMLTAG_196__HTMLTAG_197___部分：全域____HTMLTAG_198__CODEBLOCK_10__HTMLTAG_199___部分：REST API____HTMLTAG_200__CODEBLOCK_11__HTMLTAG_2011] API端点</strong>:___HTMLTAG_204__HTMLTAG_205__HTMLTAG_206__HTMLTAG_207___GET /</code>：集群信息___HTMLTAG_209__HTMLTAG_210__HTMLTAG_211___GET /health</code>：运行状况检查(200 = health)____HTMLTAG_213__HTMLTAG_214__HTMLTAG_215___GET /primary_</code>：檢查節點是否為主____HTMLTAG_217__HTMLTAG_218___：檢查節點是否為主____HTMLTAG_217__HTMLTAG_218__HTMLTAG_219___ /replica</code>：檢查節點是否為副本___HTMLTAG_221__HTMLTAG_222__HTMLTAG_223___POST /restart_</code>：重新啟動 PostgreSQL____HTMLTAG_225__HTMLTAG_224___：重新啟動 PostgreSQL____HTMLTAG_225__HTMLTAG_22672726725__HT /reload_</code>：重新載入設定___HTMLTAG_229__HTMLTAG_230__HTMLTAG_231___部分：etcd (DCS)___HTMLTAG_232__CODEBLOCK_12__HTMLTAG_233___部分：引導____HTMLTAG_234__CODEBLOCK_13__HTMLTAG_235__HTMLTAG_236___注意</strong>：引導部分適用於首次定義叢集時。 ___HTMLTAG_238__HTMLTAG_239___部分： PostgreSQL___HTMLTAG_240__CODEBLOCK_14__HTMLTAG_241___部分：標籤___HTMLTAG_242__CODEBLOCK_15__HTMLTAG_243___部分：看門狗（可選）___HTMLTAG_244__CODEBLOCK_164555。建立 Patroni 設定檔___HTMLTAG_246__HTMLTAG_247___5.1。建立設定目錄___HTMLTAG_248__HTMLTAG_249___在<strong>所有 3 個節點</strong>:</p>___CODEBLOCK_17__HTMLTAG_253___5.2.節點 1 - /etc/patroni/patroni.yml___HTMLTAG_254__CODEBLOCK_18__HTMLTAG_255___5.3。節點 2 - /etc/patroni/patroni.yml___HTMLTAG_256__CODEBLOCK_19__HTMLTAG_257___5.4。節點 3 - /etc/patroni/patroni.yml___HTMLTAG_258__CODEBLOCK_20__HTMLTAG_259___5.5。設定權限___HTMLTAG_260__HTMLTAG_261___在<strong>所有 3 個節點</strong>:___HTMLTAG_264__CODEBLOCK_21__HTMLTAG_265___6。為 Patroni___HTMLTAG_266__HTMLTAG_267___6.1 建立 systemd 服務。建立 systemd 單元檔案___HTMLTAG_268__HTMLTAG_269___建立檔案<code>/etc/systemd/system/patroni.service</code> on <strong>ALL 3節點</strong>：___HTMLTAG_274__CODEBLOCK_22__HTMLTAG_275___6.2。解釋 systemd 單元檔</h3>
<!--kg-card-begin: html-->
___HTMLTAG_278__HTMLTAG_279__HTMLTAG_280__HTMLTAG_281____指令___HTMLTAG_282__HTMLTAG_283___解決方案例如____HTMLTAG_284__HTMLTAG_285__HTMLTAG_286HT MLTAG_287__HTMLTAG_288__HTMLTAG_289__HTMLTAG_290___After=etcd.service____HTMLTAG_291__HTMLTAG_292__HTMLTAG_293___在etcd之後啟動就緒___HTMLTAG_294__H TMLTAG_295__HTMLTAG_296__HTMLTAG_297__HTMLTAG_298___類型=簡單____HTMLTAG_299__HTMLTAG_300__HTMLTAG_301___程序正在執行前台___HTMLTAG_302__HTMLTAGTM_303__H LTAG_304__HTMLTAG_305__HTMLTAG_306___User=postgres____HTMLTAG_307__HTMLTAG_308__HTMLTAG_309____與使用者postgres一起執行___HTMLTAG_310__HTMLTAG_311______HTMLTAG_312__HTMLTAG_313__HTMLTAG_314___ExecStart___HTMLTAG_315__HTMLTAG_316__HTMLTAG_317___啟動指令Patroni</td>___HTM LTAG_319___<tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">ExecReload_</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Send HUP signal to reload config_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">Restart=on-failure_</code></td>___HTTAG_331uto_____332 fail</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">_RestartSec=5</code></td><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);">Wait 5 seconds before restart_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">_LimitNOFILE=65536_</code>___HTMLTAG_348HTHTMLTAG_349___U​​p files_</td></tr><tr><td style="padding: 5px 10px; border-top: 1px solid rgba(255, 255, 255, 0.18); border-right-color: rgba(255, 255, 255, 0.18); border-bottom-color: rgba(255, 255, 255, 0.18); border-left-color: rgba(255, 255, 255, 0.18);"><code style="font-family: Menlo, Monaco, Consolas, &quot;Droid Sans Mono&quot;, &quot;Courier New&quot;, monospace, &quot;Droid Sans Fallback&quot;; color: rgb(215, 186, 125); background-color: rgba(255, 255, 255, 0.1); padding: 1px 3px; border-radius: 4px;">_StandardOutput=journal_</code></td>___HTMLTAG_357dLogto) journal</td></tr></tbody></table>
<!--kg-card-end: html-->
<h3 id="63-enable-v%C3%A0-verify-service">6.3. Enable and verify service</h3><p>On&nbsp;<strong>ALL 3 nodes</strong>:</p><pre><code class="language-bash"># Reload systemd
sudo systemctl daemon-reload

# Enable Patroni service (auto-start on boot)
sudo systemctl enable patroni

# Verify service file
systemctl cat patroni

# Check status (should be inactive/dead - not started yet)
systemctl status patroni
</code></pre><h2 id="7-verify-installation">7.驗證安裝___HTMLTAG_370__HTMLTAG_371___7.1。 Check Patroni installation</h3><p>On&nbsp;<strong>ALL 3 nodes</strong>:</p><pre><code class="language-bash"># Check Patroni version
patroni --version

# Check patronictl
patronictl --help

# Verify config file
sudo -u postgres cat /etc/patroni/patroni.yml

# Validate YAML syntax
python3 -c "import yaml; yaml.safe_load(open('/etc/patroni/patroni.yml'))"
# No output = valid YAML
</code></pre>___HTMLTAG_377.2.2.2.連結性___HTMLTAG_378__CODEBLOCK_25__HTMLTAG_379___7.3。飛行前檢查清單___HTMLTAG_380__HTMLTAG_381___在啟動 Patroni 之前，請先驗證：</p>___CODEBLOCK_26__HTMLTAG_383___8。疑难解答___HTMLTAG_384__HTMLTAG_385___8.1。問題：pip 安裝失敗___HTMLTAG_386__CODEBLOCK_27__HTMLTAG_387___8.2。問題：找不到 PostgreSQL 二進位檔案____HTMLTAG_388__CODEBLOCK_28__HTMLTAG_389___8.3。問題：資料目錄的權限被拒絕____HTMLTAG_390__CODEBLOCK_29__HTMLTAG_391___8.4。問題：YAML 語法錯誤___HTMLTAG_392__CODEBLOCK_30__HTMLTAG_393___9。 Summary</h2><h3 id="key-takeaways">Key Takeaways</h3><p>✅&nbsp;<strong>Patroni</strong>: Python application, install pip___HTMLTAG_400__HTMLTAG_401___✅&nbsp;<strong>相依性</strong>：Python 3、pip、psycopg2、 python-etcd</p><p>✅&nbsp;<strong>Configuration</strong>:&nbsp;<code>patroni.yml___HTMLTAG___:&nbsp;<code>patroni.yml</code>&nbspconconntain; settings</p><p>✅&nbsp;<strong>systemd service</strong>: Patroni daemon management</p><p>✅&nbsp;<strong>Security</strong>: The config file has permissions 600 (contains passwords)</p><h3 id="checklist-sau-lab">Checklist after Lab___HTMLTAG_420HTMLTAG_421___<li>&nbsp;Python 3 and pip 38 ___<li>&nbsp;Python 3 and pip 3lled on nodes</li><li>&nbsp;Patroni 3.2.0+ installed on all 3 nodes</li><li>&nbsp;File&nbsp;<code>/patc/Um​​wm/Um​​m*&nb* create on each node with its own config</li><li>&nbsp;systemd service&nbsp;<code>patroni.service</code>&nbsp;created and enable___patroni.service</code>&nbsp;created and enable___patroni.service</code>&nbsp； (600, owner postgres)</li><li>&nbsp;etcd 叢集運作正常___HTMLTAG_437__HTMLTAG_438__HTMLTAG_439___目前架構____HTMLTAG_440__CODEBLOCK_31__HTMLTAG_441___準備第 8 課____HTMLTAG_442 11442 的詳細課Patroni設定：___HTMLTAG_444__HTMLTAG_445__HTMLTAG_446___分析<code>patroni.yml中的每個部分___HTMLTAG_448__HTMLTAG_449__HTMLTAG_450______引導設定選項___ 451__HTMLTAG_452___PostgreSQL參數調整___HTMLTAG_453__HTMLTAG_454___驗證設定____HTMLTAG_455__HTMLTAG_456___標籤與約束____HTMLTAG_457__HTMLTAG_458__HT 9 課：引導叢集___HTMLTAG_460__HTMLTAG_461___安裝並設定 Patroni 後，第 9課將指南：____HTMLTAG_462__HTMLTAG_463__HTMLTAG_464___首次啟動Patroni____HTMLTAG_465__HTMLTAG_466___自動引導進程動態___HTMLTAG_467__HTMLTAG_468___檢查叢集狀態___HTMLTAG_469__HTMLTAG_470___故障排除___HTMLTAG_471__HTMLTAG_472___