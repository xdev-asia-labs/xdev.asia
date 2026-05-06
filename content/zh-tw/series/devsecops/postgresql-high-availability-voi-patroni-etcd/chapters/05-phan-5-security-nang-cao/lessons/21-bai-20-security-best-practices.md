---
id: 019c9617-fb9e-7077-950d-b4fa097ce8b1
title: 第 20 課：安全最佳實踐
slug: bai-20-security-best-practices
description: 設定 SSL/TLS、驗證方法、網路安全、靜態加密、審核日誌記錄和強化叢集安全性。
duration_minutes: 110
is_free: true
video_url: null
sort_order: 20
section_title: 第 5 部分：安全性與增強功能
course:
  id: 019c9617-fad7-7170-97f5-55c1940af2f5
  title: PostgreSQL 透過 Patroni 和 etcd 實現高可用性
  slug: postgresql-high-availability-voi-patroni-etcd
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1290" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1290)"/>

  <!-- Decorations -->
  <g>
    <circle cx="892" cy="146" r="20" fill="#f87171" opacity="0.11"/>
    <circle cx="684" cy="98" r="26" fill="#f87171" opacity="0.07"/>
    <circle cx="976" cy="50" r="32" fill="#f87171" opacity="0.13"/>
    <circle cx="768" cy="262" r="8" fill="#f87171" opacity="0.09"/>
    <circle cx="1060" cy="214" r="14" fill="#f87171" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f87171" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f87171" opacity="0.15"/>
    <line x1="600" y1="66" x2="1100" y2="146" stroke="#f87171" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="96" x2="1050" y2="166" stroke="#f87171" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.507041555162,145.5 1001.507041555162,186.5 966,207 930.492958444838,186.5 930.492958444838,145.5 966,125" fill="none" stroke="#f87171" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f87171"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f87171" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f87171">🔒 DevSecOps — 第 20 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 20 課：安全最佳實務</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">PostgreSQL 與 Patroni 和 PostgreSQL 高可用性etcd</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 5 部分：安全性與安全性進階</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg><h2 id="m%E1%BB%A5c-ti%C3%AAu">目標____HTMLTAG_66__HTMLTAG_67___學完本課後，您將：___HTMLTAG_68__HTMLTAG_69__HTMLTAG_70___為 PostgreSQL 實作 SSL/TLS加密____HTMLTAG_71__HTMLTAG_72___配置安全性驗證___HTMLTAG_73__HTMLTAG_74___強化網路安全性___HTMLTAG_75__HTMLTAG_76___啟用靜態加密____H TMLTAG_77__HTMLTAG_78___設定日誌審核___HTMLTAG_79__HTMLTAG_80___應用HA叢集的安全最佳實務___HTMLTAG_81__HTMLTAG_82__HTMLTAG_83___1。 SSL/TLS 加密___HTMLTAG_84__HTMLTAG_85___1.1。產生 SSL 憑證___HTMLTAG_86__CODEBLOCK_0__HTMLTAG_87___1.2。為 SSL 設定 PostgreSQL____HTMLTAG_88__CODEBLOCK_1__CODEBLOCK_2__HTMLTAG_89___1.3。為 SSL___HTMLTAG_90__CODEBLOCK_3__HTMLTAG_91___1.4 設定 pg_hba.conf。測試 SSL 連線___HTMLTAG_92__CODEBLOCK_4__HTMLTAG_93___1.5。用戶端憑證驗證</h3><pre><code class="language-bash"># Generate client certificate
sudo openssl genrsa -out client-key.pem 4096
sudo openssl req -new -key client-key.pem -out client-req.pem \
  -subj "/CN=app_user/O=MyOrg/C=US"
sudo openssl x509 -req -in client-req.pem -days 365 \
  -CA ca-cert.pem -CAkey ca-key.pem -CAcreateserial \
  -out client-cert.pem

# Copy to client machine
scp client-*.pem app_user@app-server:~/.postgresql/
</code></pre><pre><code class="language-bash"># pg_hba.conf - require client cert
hostssl all all 0.0.0.0/0 cert

# Connect with client cert
psql "host=10.0.1.11 dbname=postgres user=app_user \
  sslmode=verify-full \
  sslcert=~/.postgresql/client-cert.pem \
  sslkey=~/.postgresql/client-key.pem \
  sslrootcert=~/.postgresql/ca-cert.pem"
</code></pre><h2 id="2-authentication">2。驗證___HTMLTAG_96__HTMLTAG_97___2.1。 SCRAM-SHA-256（建議）___HTMLTAG_98__CODEBLOCK_7______CODEBLOCK_8__HTMLTAG_99___2.2。停用弱身份驗證___HTMLTAG_100__CODEBLOCK_9__HTMLTAG_101___2.3。密碼政策___HTMLTAG_102__CODEBLOCK_10__HTMLTAG_103___2.4。基於角色的存取控制___HTMLTAG_104__CODEBLOCK_11__HTMLTAG_105___3。網路安全___HTMLTAG_106__HTMLTAG_107___3.1。防火牆配置</h3><pre><code class="language-bash"># Using ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow SSH
sudo ufw allow 22/tcp

# Allow PostgreSQL only from specific IPs
sudo ufw allow from 10.0.1.0/24 to any port 5432 proto tcp

# Allow Patroni REST API (internal only)
sudo ufw allow from 10.0.1.0/24 to any port 8008 proto tcp

# Allow etcd (internal only)
sudo ufw allow from 10.0.1.0/24 to any port 2379 proto tcp
sudo ufw allow from 10.0.1.0/24 to any port 2380 proto tcp

# Enable firewall
sudo ufw enable
sudo ufw status
</code></pre>___CODEBLOCK_13__HTMLTAG_109___3.2。網路分段___HTMLTAG_110__CODEBLOCK_14__HTMLTAG_111___3.3。 VPN/專用網路___HTMLTAG_112__CODEBLOCK_15__HTMLTAG_113___4。靜態加密___HTMLTAG_114__HTMLTAG_115___4.1。檔案系統加密 (LUKS)___HTMLTAG_116__CODEBLOCK_16__HTMLTAG_117___4.2。透明資料加密 (TDE)___HTMLTAG_118__CODEBLOCK_17__HTMLTAG_119___4.3。列級加密___HTMLTAG_120__CODEBLOCK_18__HTMLTAG_121___5。審核日誌記錄___HTMLTAG_122__HTMLTAG_123___5.1。 pgAudit擴充_</h3><pre><code class="language-bash"># Install pgAudit
sudo apt-get install -y postgresql-18-pgaudit

# Or compile from source
cd /tmp
git clone https://github.com/pgaudit/pgaudit.git
cd pgaudit
make install USE_PGXS=1
</code></pre><pre><code class="language-sql">-- Enable pgAudit
ALTER SYSTEM SET shared_preload_libraries = 'pgaudit';

-- Restart required
</code></pre><pre><code class="language-bash">sudo systemctl restart patroni
</code></pre>___CODEBLOCK_22__HTMLTAG_125__HTMLTAG_126___審核類別___HTMLTA G_127___:___HTMLTAG_128__HTMLTAG_129__HTMLTAG_130__HTMLTAG_131___READ</code>:選擇、複製___HTMLTAG_133__HTMLTAG_134__HTMLTAG_1 35___寫入</code>：插入、更新、刪除、截斷、複製到___HTMLTAG_137__HTMLTAG_138__HTMLTAG_139___FUNCTION</code>：函數呼叫___HTMLTAG_141__H TMLTAG_142__HTMLTAG_143___ROLE</code>：授予、撤銷、建立/刪除角色___HTMLTAG_145__HTMLTAG_146__HTMLTAG_147___DDL</code>：建立、變更、 DROP___HTMLTAG_149__HTMLTAG_150__HTMLTAG_151___MISC</code>：丟棄、取得、檢查點、真空、設定___HTMLTAG_153 __HTMLTAG_154__HTMLTAG_155___ALL</code>：一切___HTMLTAG_157__HTMLTAG_158__HTMLTAG_159___5.2。日誌分析___HTMLTAG_160__CODEBLOCK_23__HTMLTAG_161___5.3.集中日誌記錄___HTMLTAG_162__CODEBLOCK_24__HTMLTAG_163___6。安全強化___HTMLTAG_164__HTMLTAG_165___6.1。停用不必要的功能____HTMLTAG_166__CODEBLOCK_25__HTMLTAG_167___6.2。限制超級使用者存取____HTMLTAG_168__CODEBLOCK_26__HTMLTAG_169___6.3。資源限制___HTMLTAG_170__CODEBLOCK_27__HTMLTAG_171___6.4。隱藏 PostgreSQL 版本</h3><pre><code class="language-sql">-- Change server_version_num (cosmetic security)
-- Note: Doesn't actually hide from determined attackers
ALTER SYSTEM SET application_name = 'myapp';
</code></pre><h3 id="65-secure-replication">6.5。安全複製___HTMLTAG_174__CODEBLOCK_29__HTMLTAG_175___7。合規性與標準___HTMLTAG_176__HTMLTAG_177___7.1。 PCI DSS 合規性___HTMLTAG_178__CODEBLOCK_30__HTMLTAG_179___7.2。 GDPR 合規性____HTMLTAG_180__CODEBLOCK_31__HTMLTAG_181___7.3。 HIPAA 合規性___HTMLTAG_182__CODEBLOCK_32__HTMLTAG_183___8。安全監控___HTMLTAG_184__HTMLTAG_185___8.1。監控失敗的登入嘗試___HTMLTAG_186__CODEBLOCK_33__HTMLTAG_187___8.2。監控權限升級___HTMLTAG_188__CODEBLOCK_34__HTMLTAG_189___8.3。有關安全事件的警報___HTMLTAG_190__CODEBLOCK_35__HTMLTAG_191___9。最佳實務摘要___HTMLTAG_192__HTMLTAG_193___✅ 應該___HTMLTAG_194__HTMLTAG_195__HTMLTAG_196__HTMLTAG_197___總是使用 SSL/TLS</strong>&nbsp;加密所有連線___HTMLTAG_199__HTMLTAG_200__HTMLTAG_201___使用SCRAM-SHA-256</strong>- 強密碼加密___HTMLTAG_203__HTMLTAG_204__HTMLTAG_205___HTMLTAG_203__HTMLTAG_204__HTMLTAG_205___HTMLTAG_203__HTMLTAG_204__HTMLTAG_2051___實施 R____MLTA____bg_Ub;最小權限原則___HTMLTAG_207__HTMLTAG_208__HTMLTAG_209___啟用審核日誌記錄</strong>- pgAudit 合規性____HTMLTAG_211__HTMLTAG_212__HTMLTAG_213___MLTAG_211__HTMLTAG_212__HTMLTAG_213____2113___14HTTAG&nb_212134-___ML413___414813_214U44U444UU444U&**3%的資料。 LUKS___HTMLTAG_215__HTMLTAG_216__HTMLTAG_217___強密碼</strong>&nbsp;- 12 個以上字符，複雜性___HTMLTAG_219__HTMLTAG_220__HTMLTAG_221___網路分段___MLTAG防火牆規則___HTMLTAG_223__HTMLTAG_224__HTMLTAG_225___定期安全審核</strong>- 每季評論___HTMLTAG_227__HTMLTAG_228__HTMLTAG_229___保持軟體更新</strong>___-安全性修補程式___HTMLTAG_231__HTMLTAG_232__HTMLTAG_233___監控安全事件</strong>-警報與日誌記錄___HTMLTAG_235__HTMLTAG_236__HTMLTAG_237___❌不要____HTMLTAG_238__HTMLTAG_239__HTMLTAG_240__HTMLTAG_241___不要使用「信任」驗證_<strong>永遠要求密碼____HTMLTAG_243__HTMLTAG_244__HTMLTAG_245___不要暴露在互聯網上</strong>-使用專用網路___HTMLTAG_247__HTMLTAG_248__HTMLTAG_249______使用預設密碼____HTMLTA G_250___-更改立即____HTMLTAG_251__HTMLTAG_252__HTMLTAG_253___不要超級用戶</strong>-使用特定權限___HTMLTAG_255__HTMLTAG_256__HTMLTAG_257___HTMLTAG_255__HTMLTAG_256__HTMLTAG_257______不要忽略更新___TM AG_258___-安全漏洞___HTMLTAG_259__HTMLTAG_260__HTMLTAG_261___不要簡單儲存密碼</strong>-使用機密管理___HTMLTAG_263__HTMLTAG_264__HTMLTAG_265___HTMLTAG_263__HTMLTAG_264__HTMLTAG_265___HTMLTAG_263__HTMLTAG_264__HTMLTAG_265<strong>TM LTAG_266___-勒索軟體保護___HTMLTAG_267__HTMLTAG_268__HTMLTAG_269___不要忘記etcd安全性</strong>-它具有群集秘密____HTMLTAG_271__HTMLTAG_272__HTMLTAG_273___10。安全檢查表___HTMLTAG_274__CODEBLOCK_36__HTMLTAG_275___11。實驗室練習___HTMLTAG_276__HTMLTAG_277___實驗 1：設定 SSL/TLS___HTMLTAG_278__HTMLTAG_279__HTMLTAG_280___任務</strong>：___HTMLTAG_282__HTMLTAGSL_283__848383__HTMLTAGSL_23__憑證___HTMLTAG_285__HTMLTAG_286___設定 PostgreSQL SSL___HTMLTAG_287__HTMLTAG_288___更新 pg_hba.conf 以要求 SSL___HTMLTAG_289__HTMLTAG_290___測試 SSL 連線___MLTAG_291__HTMLTAG_292___使用 pg_stat_ssl 驗證___HTMLTAG_293__HTMLTAG_294__HTMLTAG_295___實驗 2：實施。戶____HTMLTAG_305__HTMLTAG_306___測試存取權限___HTMLTAG_307__HTMLTAG_308___授予/撤銷權限____HTMLTAG_309__HTMLTAG_310___文檔角色層次結構____HTMLTAG_311__HTMLTAG_31132131312 3：啟用審核日誌記錄___HTMLTAG_314__HTMLTAG_315__HTMLTAG_316___任務</strong>：___HTMLTAG_318__HTMLTAG_319__HTMLTAG_320___安裝和設定pgAudit______MLTAG_319__HTMLTAG_320___安裝和設定pgAudit_______MLTAG_32____232_2_____________2____審核日誌記錄___HTMLTAG_323__HTMLTAG_324___執行審核操作___HTMLTAG_325__HTMLTAG_326___檢視審核日誌____HTMLTAG_327__HTMLTAG_328___與日誌整合聚合__ __HTMLTAG_329__HTMLTAG_330__HTMLTAG_331___實驗4：安全強化___HTMLTAG_332__HTMLTAG_333__HTMLTAG_334___任務</strong>：___HTM LTAG_336__HTMLTAG_337__HTMLTAG_338___設定防火牆規則____HTMLTAG_339__HTMLTAG_340___停用不必要的功能___HTMLTAG_341__HTMLTAG_342___設定資源限制___HTMLTAG_343__HTMLTAG_344___測試安全改進___HTMLTAG_345__HTMLTAG_346___文件安全狀況___HTMLTAG_347__HTMLTAG_348__HTMLTAG_349___12。摘要____HTMLTAG_350__HTMLTAG_351___安全層____HTMLTAG_352__CODEBLOCK_37__HTMLTAG_353___關鍵安全設定____HTMLTAG_354__CODEBLOCK_38__HTMLTAG_3555___後續步驟___MLTAGML____41324_______課程將封面_<strong>多重資料中心設定</strong>：___HTMLTAG_360__HTMLTAG_361__HTMLTAG_362___跨資料中心複製策略___HTMLTAG_363__HTMLTAG_364___級聯複製___ HTMLTAG_365__HTMLTAG_366___災難復原規劃___HTMLTAG_367__HTMLTAG_368___地理負載平衡___HTMLTAG_369__HTMLTAG_370___網路延遲注意事項___HTMLTAG_371__HTMLTAG_372___