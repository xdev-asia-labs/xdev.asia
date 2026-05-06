---
id: 019d8b30-b124-7001-c001-e0c5f8100124
title: 第 24 課：高可用性、叢集和多站點
slug: bai-24-high-availability-clustering-va-multi-site
description: Keycloak 高可用性概念、Infinispan 分散式快取（嵌入式與外部）、快取堆疊配置（kubernetes、jdbc-ping、dns-ping）、會話複製、外部 Infinispan 伺服器設定、多站點/跨資料中心部署、主動-被動與主動-主動模式、資料庫複製（PostgreBounroni、PostgreBounroni、黏滯性原則
duration_minutes: 260
is_free: true
video_url: null
sort_order: 24
section_title: 第 7 部分：生產、HA 和 Kubernetes
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 鑰匙斗篷從基礎到高級
  slug: keycloak-tu-co-ban-den-nang-cao
locale: zh-tw
---
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6359" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6359)"/>

  <!-- Decorations -->
  <g>
    <circle cx="711" cy="103" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="822" cy="214" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="933" cy="65" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="1044" cy="176" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="287" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="153" x2="1100" y2="233" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="183" x2="1050" y2="253" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="977.2487113059643,139 977.2487113059643,167 953,181 928.7512886940357,167 928.7512886940357,139 953,125" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — 第 24 課</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 24 課：高可用性、叢集和</tspan>
      <tspan x="60" dy="42">多站點</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">從基礎到進階的鑰匙斗篷__HTMLTAG_59___

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 7 部分：生產、HA 和 Kubernetes</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

___HTMLTAG_67__HTMLTAG_68___1。 HA 架構概述___HTMLTAG_69__HTMLTAG_70___

<p>Keycloak 高可用性可確保身份驗證/授權系統持續運行，即使一個或多個節點發生故障也是如此。 HA 基於三個支柱：<strong>叢集 (Infinispan)</strong>、<strong>資料庫複製</strong> 和 <strong>負載平衡</strong>.</p>

___預編碼_0___

___HTMLTAG_79__HTMLTAG_80___2。 Infinispan 快取類型___HTMLTAG_81__HTMLTAG_82___

___HTMLTAG_83__HTMLTAG_84___2.1 本機快取與分散式/複製快取___HTMLTAG_85__HTMLTAG_86___

<p>Keycloak 使用兩種類型的 Infinispan 快取來實現不同的目的：</p><table>
<thead>
___HTMLTAG_91__HTMLTAG_92___快取類型___HTMLTAG_93__HTMLTAG_94___說明____HTMLTAG_95__HTMLTAG_96___Keycloak 快取___HTMLTAG_97__HTMLTAG_98_____]_HTMLTAU_991HTMLTAG_97__HTMLTAG_98________HTMLTAG_99__HTMLTAG_____
</thead>
<tbody>
___HTMLTAG_103__HTMLTAG_104__HTMLTAG_105___本地快取___HTMLTAG_106__HTMLTAG_107__HTMLTAG_108___儲存目前節點上的數據，用於可從DB讀取回的元資料__<td>儲存目前節點上的數據，用於可從DB121109_____109_109___ML_ML <code>使用者</code>、<code>授權__HTMLTAG_116___、<code>金鑰___HTMLTAG_118__HTMLTAG_119__HTMLTAG_120___HTMLTAG_118__HTMLTAG_119__HTMLTAG_120___HTMLTAG_118__HTMLTAG_119__HTMLTAG_120___HTMLTA___1HTML
___HTMLTAG_123__HTMLTAG_124__HTMLTAG_125___分散式快取___HTMLTAG_126__HTMLTAG_127__HTMLTAG_128___分佈在叢集中N個擁有者的數據，用於會話資料___HTMLTAG_129__HTMLTAG_1301313013130_____ <code>authenticationSessions</code>、 <code>offlineSessions</code>、 <code>clientSessions</code>、<code>clientSessions</code>、 <code>offlineClientSessions___HTMLTAG_140__HTMLTAG_141__HTMLTAG_142___分散式（預設為 2 個所有者）___HTMLTAG_143__HTMLTAG_144___
___HTMLTAG_145__HTMLTAG_146__HTMLTAG_147___複製快取___HTMLTAG_148__HTMLTAG_149__HTMLTAG_150___在所有節點上複製的資料____HTMLTAG_151 __HTMLTAG_152__HTMLTAG_153___工作</code>（集群通訊）___HTMLTAG_155__HTMLTAG_156___已複製___HTMLTAG_157__HTMLTAG_158___
</tbody>
</table>

___HTMLTAG_161__HTMLTAG_162___2.2 Keycloak 快取架構詳細資訊___HTMLTAG_163__HTMLTAG_164___

___預編碼_1___

___HTMLTAG_165__HTMLTAG_166___3。嵌入式與外部 Infinispan___HTMLTAG_167__HTMLTAG_168___

___HTMLTAG_169__HTMLTAG_170___3.1 嵌入式 Infinispan（預設）___HTMLTAG_171__HTMLTAG_172___

<p>預設情況下，Keycloak 將 Infinispan 嵌入 JVM 進程中。節點透過發現協定相互發現並自動形成叢集：</p>

___預編碼_2___

___HTMLTAG_175__HTMLTAG_176___3.2 外部Infinispan___HTMLTAG_177__HTMLTAG_178___

<p>對於多站點部署或需要單獨的快取層管理時，請使用外部 Infinispan 伺服器：</p>

___預編碼_3___<table>
<thead>
___HTMLTAG_183__HTMLTAG_184___功能___HTMLTAG_185__HTMLTAG_186___嵌入式Infinispan___HTMLTAG_187__HTMLTAG_188___外部Infinispan___HTMLTAG_189__HTMLTAG_190___
</thead>
<tbody>
___HTMLTAG_193__HTMLTAG_194___設定複雜性___HTMLTAG_195__HTMLTAG_196___簡單、零設定____HTMLTAG_197__HTMLTAG_198___需要部署單獨的Infinispan叢集__HTMLTAG_199__HT
___HTMLTAG_201__HTMLTAG_202___多站點___HTMLTAG_203__HTMLTAG_204___❌不支援___HTMLTAG_205__HTMLTAG_206___✅ 跨資料中心複製____HTMLTAG_207__HTMLTAG_208___
___HTMLTAG_209__HTMLTAG_210___可擴展性___HTMLTAG_211__HTMLTAG_212___適合 ≤ 10 個節點____HTMLTAG_213__HTMLTAG_214___適合大規模部署____HTMLTAG_215__HTMLTAG_216___
___HTMLTAG_217__HTMLTAG_218___管理___HTMLTAG_219__HTMLTAG_220___自動___HTMLTAG_221__HTMLTAG_222___需要單獨的 Infinispan 監控/管理___HTMLTAG_223__HTMLTAG_224_____
___HTMLTAG_225__HTMLTAG_226___用例___HTMLTAG_227__HTMLTAG_228___單站點、單集群____HTMLTAG_229__HTMLTAG_230___多站點、災難復原、大型部署____HTMLTAG_231__HTMLTAG_23232
</tbody>
</table>

___HTMLTAG_235__HTMLTAG_236___4。快取堆疊配置___HTMLTAG_237__HTMLTAG_238___

___HTMLTAG_239__HTMLTAG_240___4.1 Kubernetes (KUBE_PING)___HTMLTAG_241__HTMLTAG_242___

<p>在 Kubernetes 上，使用 <strong>KUBE_PING</strong> (dns.DNS_PING) 讓 Keycloak Pod 透過 Kubernetes API 或 DNS 相互發現：</p>

___預編碼_4___

<p>Kubernetes Keycloak 需要 <strong>無頭服務</strong> 才能進行 DNS 發現：</p>

___預編碼_5___

___預編碼_6___

___HTMLTAG_251__HTMLTAG_252___4.2 JDBC-PING（用於虛擬機器部署）___HTMLTAG_253__HTMLTAG_254___

<p>在虛擬機器上部署時（不含 Kubernetes），使用 <strong>JDBC_PING</strong> 讓節點透過共用資料庫相互偵測：</p>

___預編碼_7___

___HTMLTAG_259__HTMLTAG_260___4.3 DNS-PING___HTMLTAG_261__HTMLTAG_262___

___預編碼_8___

___HTMLTAG_263__HTMLTAG_264___5。外部 Infinispan 伺服器設定___HTMLTAG_265__HTMLTAG_266___

___HTMLTAG_267__HTMLTAG_268___5.1 Infinispan 伺服器設定___HTMLTAG_269__HTMLTAG_270___

___預編碼_9___

___HTMLTAG_271__HTMLTAG_272___5.2 Keycloak 遠端快取設定___HTMLTAG_273__HTMLTAG_274___

<p>配置 Keycloak 以連接到外部 Infinispan：</p>

___預編碼_10___

___HTMLTAG_277__HTMLTAG_278___6。多站點部署___HTMLTAG_279__HTMLTAG_280___

___HTMLTAG_281__HTMLTAG_282___6.1 主動-被動模式___HTMLTAG_283__HTMLTAG_284___

<p>在主動被動模式下，僅 <strong>主站點</strong> 提供流量。備份站點處於待機狀態，準備在主站點出現問題時接管：</p>

<pre><code class="language-text">┌──────────────────────────────────────────────────────────────────────┐
│                  Active-Passive Multi-site                          │
│                                                                      │
│  ┌────────────────────────┐      ┌────────────────────────┐         │
│  │     Site A (Active)    │      │   Site B (Passive)     │         │
│  │                        │      │                        │         │
│  │  ┌──────┐  ┌──────┐   │      │  ┌──────┐  ┌──────┐   │         │
│  │  │ KC-1 │  │ KC-2 │   │      │  │ KC-3 │  │ KC-4 │   │         │
│  │  └──┬───┘  └──┬───┘   │      │  └──┬───┘  └──┬───┘   │         │
│  │     │         │        │      │     │         │        │         │
│  │  ┌──▼─────────▼───┐   │      │  ┌──▼─────────▼───┐   │         │
│  │  │ Infinispan      │◄─────────►│ Infinispan      │   │         │
│  │  │ (External)      │  Cross-  │ │ (External)      │   │         │
│  │  └────────────────┘  Site    │  └────────────────┘   │         │
│  │                       Repl.  │                        │         │
│  │  ┌────────────────┐   │      │  ┌────────────────┐   │         │
│  │  │ PostgreSQL     │◄─────────►│ PostgreSQL     │   │         │
│  │  │ (Primary)      │  Repl.  │  │ (Standby)      │   │         │
│  │  └────────────────┘   │      │  └────────────────┘   │         │
│  └────────────────────────┘      └────────────────────────┘         │
│                                                                      │
│  DNS: auth.example.com ──► Site A (failover to Site B)              │
└──────────────────────────────────────────────────────────────────────┘
</code></pre>

___HTMLTAG_289__HTMLTAG_290___6.2 主動-主動模式___HTMLTAG_291__HTMLTAG_292___

<p>在主動-主動模式下，<strong>兩個網站__HTMLTAG_295___同時提供流量。更複雜但充分利用資源：</p>

<pre><code class="language-text">┌──────────────────────────────────────────────────────────────────────┐
│                  Active-Active Multi-site                           │
│                                                                      │
│  ┌────────────────────────┐      ┌────────────────────────┐         │
│  │    Site A (Active)     │      │    Site B (Active)     │         │
│  │                        │      │                        │         │
│  │  ┌──────┐  ┌──────┐   │      │  ┌──────┐  ┌──────┐   │         │
│  │  │ KC-1 │  │ KC-2 │   │      │  │ KC-3 │  │ KC-4 │   │         │
│  │  └──┬───┘  └──┬───┘   │      │  └──┬───┘  └──┬───┘   │         │
│  │     └────┬────┘        │      │     └────┬────┘        │         │
│  │  ┌───────▼────────┐   │      │  ┌───────▼────────┐   │         │
│  │  │ Infinispan      │◄═══════════►│ Infinispan      │   │         │
│  │  │ (Cross-site)    │  RELAY   │  │ (Cross-site)    │   │         │
│  │  └────────────────┘   │      │  └────────────────┘   │         │
│  │                        │      │                        │         │
│  │  ┌────────────────┐   │      │  ┌────────────────┐   │         │
│  │  │ PostgreSQL     │◄═══════════►│ PostgreSQL     │   │         │
│  │  │ (Multi-master) │  Sync    │  │ (Multi-master) │   │         │
│  │  └────────────────┘   │      │  └────────────────┘   │         │
│  └────────────────────────┘      └────────────────────────┘         │
│                                                                      │
│  GSLB: auth.example.com ──► Site A (50%) + Site B (50%)             │
└──────────────────────────────────────────────────────────────────────┘
</code></pre><table>
<thead>
___HTMLTAG_299__HTMLTAG_300___功能___HTMLTAG_301__HTMLTAG_302___主動-被動___HTMLTAG_303__HTMLTAG_304___主動-主動___HTMLTAG_305__HTMLTAG_306___
</thead>
<tbody>
___HTMLTAG_309__HTMLTAG_310___流量處理___HTMLTAG_311__HTMLTAG_312___一次 1 個網站____HTMLTAG_313__HTMLTAG_314___同時兩個網站____HTMLTAG_315__HTMLTAG_316___
___HTMLTAG_317__HTMLTAG_318___資源使用率___HTMLTAG_319__HTMLTAG_320___50%（被動站點閒置）___HTMLTAG_321__HTMLTAG_322___100%___HTMLTAG_323__HTMLTAG_32______
___HTMLTAG_325__HTMLTAG_326___複雜性___HTMLTAG_327__HTMLTAG_328___較低____HTMLTAG_329__HTMLTAG_330___較高（衝突解決）___HTMLTAG_331__HTMLTAG_332___
___HTMLTAG_333__HTMLTAG_334___故障轉移時間____HTMLTAG_335__HTMLTAG_336___需要 DNS 切換（秒-分鐘）____HTMLTAG_337__HTMLTAG_338___自動 (GSLB)____HTMLTAG_3394MLTAG_33941TAG____
___HTMLTAG_341__HTMLTAG_342___資料一致性___HTMLTAG_343__HTMLTAG_344___強（同步複製）____HTMLTAG_345__HTMLTAG_346___最終（異步跨站點）____HTMLTAG_347__HTMLTAG_348___
___HTMLTAG_349__HTMLTAG_350___資料庫要求___HTMLTAG_351__HTMLTAG_352___主備___HTMLTAG_353__HTMLTAG_354___多主或共享資料庫____HTMLTAG_355__HTMLTAG_356___
</tbody>
</table>

___HTMLTAG_359__HTMLTAG_360___6.3 跨資料中心Infinispan設定___HTMLTAG_361__HTMLTAG_362___

<pre><code class="language-xml">&lt;!-- infinispan-xsite.xml - Site A Infinispan Server --&gt;
&lt;infinispan xmlns="urn:infinispan:config:15.0"
            xmlns:server="urn:infinispan:server:15.0"&gt;

    &lt;jgroups&gt;
        &lt;!-- Local cluster stack --&gt;
        &lt;stack name="tcp" extends="tcp"&gt;
            &lt;!-- Node discovery within same site --&gt;
        &lt;/stack&gt;

        &lt;!-- Cross-site (relay) stack --&gt;
        &lt;stack name="relay"&gt;
            &lt;TCP bind_addr="match-interface:eth0" bind_port="7900"/&gt;
            &lt;TCPPING initial_hosts="infinispan-siteA:7900,infinispan-siteB:7900"
                     port_range="0"/&gt;
            &lt;MERGE3/&gt;
            &lt;FD_ALL/&gt;
            &lt;VERIFY_SUSPECT/&gt;
            &lt;pbcast.NAKACK2/&gt;
            &lt;UNICAST3/&gt;
            &lt;pbcast.STABLE/&gt;
            &lt;pbcast.GMS/&gt;
        &lt;/stack&gt;
    &lt;/jgroups&gt;

    &lt;cache-container name="keycloak" statistics="true"&gt;
        &lt;transport cluster="keycloak-cluster"
                   stack="tcp"
                   node-name="${infinispan.node.name}"
                   site="${infinispan.site.name:siteA}"&gt;
            &lt;!-- Relay configuration for cross-site --&gt;
            &lt;relay site="${infinispan.site.name:siteA}"&gt;
                &lt;remote-site name="siteA" stack="relay"/&gt;
                &lt;remote-site name="siteB" stack="relay"/&gt;
            &lt;/relay&gt;
        &lt;/transport&gt;

        &lt;!-- Sessions cache with cross-site backup --&gt;
        &lt;distributed-cache name="sessions" owners="2" mode="SYNC"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-protostream"/&gt;
                &lt;value media-type="application/x-protostream"/&gt;
            &lt;/encoding&gt;
            &lt;backups&gt;
                &lt;backup site="siteB" strategy="ASYNC"
                        failure-policy="WARN"
                        timeout="15000"/&gt;
            &lt;/backups&gt;
        &lt;/distributed-cache&gt;

        &lt;distributed-cache name="authenticationSessions" owners="2" mode="SYNC"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-protostream"/&gt;
                &lt;value media-type="application/x-protostream"/&gt;
            &lt;/encoding&gt;
            &lt;backups&gt;
                &lt;backup site="siteB" strategy="ASYNC"
                        failure-policy="WARN"
                        timeout="15000"/&gt;
            &lt;/backups&gt;
        &lt;/distributed-cache&gt;

        &lt;!-- Thêm các distributed caches khác tương tự... --&gt;
    &lt;/cache-container&gt;
&lt;/infinispan&gt;
</code></pre>

___HTMLTAG_363__HTMLTAG_364___7。資料庫複製___HTMLTAG_365__HTMLTAG_366___

___HTMLTAG_367__HTMLTAG_368___7.1 PostgreSQL Patroni + PgBouncer___HTMLTAG_369__HTMLTAG_370___

___HTMLTAG_371__HTMLTAG_372___Patroni</strong> 管理 PostgreSQL HA（自動故障轉移），<strong>PgBouncer</strong> 提供連接池：</p>

<pre><code class="language-text">┌─────────────────────────────────────────────────────────────┐
│            PostgreSQL HA with Patroni + PgBouncer           │
│                                                             │
│  ┌──────────────┐                                           │
│  │  Keycloak     │                                          │
│  │  Instances    │                                          │
│  └──────┬───────┘                                           │
│         │                                                   │
│  ┌──────▼───────┐                                           │
│  │  PgBouncer    │  ←── Connection pooling                  │
│  │  (VIP/DNS)    │      Transaction mode                    │
│  └──────┬───────┘                                           │
│         │                                                   │
│  ┌──────┴────────────────────────┐                          │
│  │               │                │                          │
│  ▼               ▼                ▼                          │
│ ┌─────────┐  ┌─────────┐  ┌─────────┐                      │
│ │ PG Node1│  │ PG Node2│  │ PG Node3│                      │
│ │(Primary)│  │(Replica)│  │(Replica)│                      │
│ │ Patroni │  │ Patroni │  │ Patroni │                      │
│ └────┬────┘  └────┬────┘  └────┬────┘                      │
│      │            │            │                            │
│      └────────────┼────────────┘                            │
│                   ▼                                         │
│            ┌─────────────┐                                  │
│            │    etcd      │  ←── Consensus store            │
│            │   cluster    │      (leader election)          │
│            └─────────────┘                                  │
└─────────────────────────────────────────────────────────────┘
</code></pre>

___HTMLTAG_377__HTMLTAG_378___7.2 Patroni 設定___HTMLTAG_379__HTMLTAG_380___

<pre><code class="language-yaml"># patroni.yml - Patroni configuration cho Keycloak
scope: keycloak-cluster
name: pg-node1

restapi:
  listen: 0.0.0.0:8008
  connect_address: pg-node1:8008

etcd3:
  hosts:
    - etcd1:2379
    - etcd2:2379
    - etcd3:2379

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576
    synchronous_mode: true            # Synchronous replication
    synchronous_mode_strict: false
    postgresql:
      use_pg_rewind: true
      parameters:
        max_connections: 400
        shared_buffers: 2GB
        effective_cache_size: 6GB
        work_mem: 16MB
        wal_level: replica
        max_wal_senders: 5
        max_replication_slots: 5
        hot_standby: "on"
        synchronous_commit: "on"      # Synchronous cho data safety

  initdb:
    - encoding: UTF8
    - data-checksums

postgresql:
  listen: 0.0.0.0:5432
  connect_address: pg-node1:5432
  data_dir: /var/lib/postgresql/data
  authentication:
    superuser:
      username: postgres
      password: postgres_password
    replication:
      username: replicator
      password: replicator_password
    rewind:
      username: rewinder
      password: rewinder_password
  parameters:
    unix_socket_directories: "/var/run/postgresql"
</code></pre>

___HTMLTAG_381__HTMLTAG_382___7.3 PgBouncer 設定___HTMLTAG_383__HTMLTAG_384___

<pre><code class="language-ini"># pgbouncer.ini
[databases]
keycloak = host=pg-primary port=5432 dbname=keycloak
           auth_user=keycloak

[pgbouncer]
listen_addr = 0.0.0.0
listen_port = 6432
auth_type = md5
auth_file = /etc/pgbouncer/userlist.txt

# Connection pooling
pool_mode = transaction         # Transaction mode cho Keycloak
max_client_conn = 1000
default_pool_size = 100
min_pool_size = 25
reserve_pool_size = 10
reserve_pool_timeout = 3

# Timeouts
server_connect_timeout = 15
server_idle_timeout = 600
server_lifetime = 3600
client_idle_timeout = 0
client_login_timeout = 60
query_timeout = 0
query_wait_timeout = 120

# Logging
log_connections = 1
log_disconnections = 1
log_pooler_errors = 1
stats_period = 60
</code></pre>

___HTMLTAG_385__HTMLTAG_386___8。負載平衡器配置___HTMLTAG_387__HTMLTAG_388___

___HTMLTAG_389__HTMLTAG_390___8.1 黏性會話___HTMLTAG_391__HTMLTAG_392___

<p>Keycloak <strong>需要黏性會話</strong>進行身分驗證流程（登入、註冊）。基於 Cookie 的會話關聯性 <code>KC_ROUTE</code>（以前稱為 <code>KEYCLOAK_SESSION</code>）：</p>

___HTMLTAG_401__HTMLTAG_402___8.2 HAProxy 設定___HTMLTAG_403__HTMLTAG_404___

<pre><code class="language-haproxy"># haproxy.cfg cho Keycloak HA
global
    log stdout format raw daemon
    maxconn 4096

defaults
    mode http
    log global
    option httplog
    option dontlognull
    option http-server-close
    option forwardfor except 127.0.0.0/8
    retries 3
    timeout http-request 10s
    timeout queue 60s
    timeout connect 10s
    timeout client 60s
    timeout server 60s
    timeout http-keep-alive 10s
    timeout check 10s

# Frontend HTTPS
frontend keycloak_frontend
    bind *:443 ssl crt /etc/haproxy/certs/auth.example.com.pem
    http-request set-header X-Forwarded-Proto https
    http-request set-header X-Forwarded-Port 443

    # Health check endpoint (không cần sticky)
    acl is_health path_beg /health
    acl is_metrics path_beg /metrics

    use_backend keycloak_health if is_health
    use_backend keycloak_health if is_metrics
    default_backend keycloak_backend

# Backend với sticky sessions
backend keycloak_backend
    balance roundrobin
    # Sticky session dựa trên KC_ROUTE cookie
    cookie KC_ROUTE insert indirect nocache httponly secure
    option httpchk GET /health/ready
    http-check expect status 200

    # Keycloak servers
    server kc1 keycloak-1:8443 ssl verify none check inter 10s \
           fall 3 rise 2 cookie kc1
    server kc2 keycloak-2:8443 ssl verify none check inter 10s \
           fall 3 rise 2 cookie kc2
    server kc3 keycloak-3:8443 ssl verify none check inter 10s \
           fall 3 rise 2 cookie kc3

# Backend cho health/metrics (không cần sticky)
backend keycloak_health
    balance roundrobin
    option httpchk GET /health/ready
    server kc1 keycloak-1:8443 ssl verify none check
    server kc2 keycloak-2:8443 ssl verify none check
    server kc3 keycloak-3:8443 ssl verify none check

# Stats dashboard
listen stats
    bind *:8404
    stats enable
    stats uri /stats
    stats refresh 10s
    stats auth admin:admin_password
</code></pre>

___HTMLTAG_405__HTMLTAG_406___8.3 Nginx 負載平衡器___HTMLTAG_407__HTMLTAG_408___

<pre><code class="language-nginx"># nginx.conf - Keycloak load balancer
upstream keycloak_cluster {
    # Sticky sessions via cookie
    sticky cookie KC_ROUTE expires=1h domain=.example.com httponly secure;

    server keycloak-1:8443 max_fails=3 fail_timeout=30s;
    server keycloak-2:8443 max_fails=3 fail_timeout=30s;
    server keycloak-3:8443 max_fails=3 fail_timeout=30s;
}

server {
    listen 443 ssl http2;
    server_name auth.example.com;

    ssl_certificate     /etc/nginx/certs/tls.crt;
    ssl_certificate_key /etc/nginx/certs/tls.key;

    # Buffer sizes cho Keycloak
    proxy_buffer_size        128k;
    proxy_buffers            4 256k;
    proxy_busy_buffers_size  256k;

    location / {
        proxy_pass https://keycloak_cluster;
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_set_header X-Forwarded-Host   $host;
        proxy_set_header X-Forwarded-Port   $server_port;

        # WebSocket support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # Health check (no sticky needed)
    location /health {
        proxy_pass https://keycloak_cluster;
        proxy_set_header Host $host;
    }
}
</code></pre>

___HTMLTAG_409__HTMLTAG_410___9。裂腦處理___HTMLTAG_411__HTMLTAG_412___

___HTMLTAG_413__HTMLTAG_414___9.1 裂腦場景___HTMLTAG_415__HTMLTAG_416___

<p>當網路分區將叢集分成 2 個以上分區時，就會發生腦裂，每個分區都認為對方已死亡：</p>

<pre><code class="language-text">┌─────────────────────────────────────────────────────────────┐
│                    Split-Brain Scenario                      │
│                                                             │
│  Partition A              ║  Partition B                    │
│  ┌──────┐  ┌──────┐      ║  ┌──────┐  ┌──────┐           │
│  │ KC-1 │◄─►│ KC-2 │     ║  │ KC-3 │◄─►│ KC-4 │           │
│  └──────┘  └──────┘      ║  └──────┘  └──────┘           │
│       ↕                   ║       ↕                         │
│  ┌──────────┐             ║  ┌──────────┐                  │
│  │ PG Primary│            ║  │ PG Replica│  ← Có thể       │
│  └──────────┘             ║  └──────────┘    promote sai!  │
│                           ║                                 │
│  Network Partition ═══════╝                                 │
└─────────────────────────────────────────────────────────────┘
</code></pre>

___HTMLTAG_419__HTMLTAG_420___9.2 合併策略___HTMLTAG_421__HTMLTAG_422___

___預編碼_20___<table>
<thead>
___HTMLTAG_425__HTMLTAG_426___合併策略___HTMLTAG_427__HTMLTAG_428___行為___HTMLTAG_429__HTMLTAG_430___用例___HTMLTAG_431__HTMLTAG_432___
</thead>
<tbody>
___HTMLTAG_435__HTMLTAG_436__HTMLTAG_437___PREFERRED_NON_NULL___HTMLTAG_438__HTMLTAG_439__HTMLTAG_440___合併時保留非空白條目____HTMLTAG_441__HTMLTAG_440___合併時保留非空白條目____HTMLTAG_441__HTMLTAG_440___優於保持會話遺失___HTMLTAG_443__HTMLTAG_444___
___HTMLTAG_445__HTMLTAG_446__HTMLTAG_447___REMOVE_ALL___HTMLTAG_448__HTMLTAG_449__HTMLTAG_450___刪除所有衝突條目___HTMLTAG_451__HTMLTAG_452___當資料一致性最重要。
___HTMLTAG_455__HTMLTAG_456__HTMLTAG_457___首選_始終___HTMLTAG_458__HTMLTAG_459__HTMLTAG_460___保留較大分區中的條目____HTMLTAG_461__HTMLTAG_460___保留較大分區中的條目____HTMLTAG_461__HTMLTAG_462___4___MLTAGML4_____
</tbody>
</table>

___HTMLTAG_467__HTMLTAG_468___10。災難復原策略___HTMLTAG_469__HTMLTAG_470___

___HTMLTAG_471__HTMLTAG_472___10.1 RPO/RTO 目標___HTMLTAG_473__HTMLTAG_474___

<table>
<thead>
___HTMLTAG_477__HTMLTAG_478___層___HTMLTAG_479__HTMLTAG_480___RPO___HTMLTAG_481__HTMLTAG_482___RTO___HTMLTAG_483__HTMLTAG_484_____482___RTO___HTMLTAG_483__HTMLTAG_484_____482___RTO___HTMLTAG_483__HTMLTAG_484_____482___ML____488483_______________
</thead>
<tbody>
___HTMLTAG_489__HTMLTAG_490___第 1 層（關鍵）____HTMLTAG_491__HTMLTAG_492___0（零資料遺失）____HTMLTAG_493__HTMLTAG_494___< 5 分鐘主動_HTMLTAG_4951HT同步資料庫複製___HTMLTAG_497__HTMLTAG_498___
___HTMLTAG_499__HTMLTAG_500___第 2 層（重要）___HTMLTAG_501__HTMLTAG_502___< 1 分鐘___HTMLTAG_503__HTMLTAG_504___< 15 分鐘</td>__MLTAG_自動故障轉移___HTMLTAG_507__HTMLTAG_508___
___HTMLTAG_509__HTMLTAG_510___第 3 層（標準）___HTMLTAG_511__HTMLTAG_512___< 1 小時___HTMLTAG_513__HTMLTAG_514___< 1 小時___HTMLTAG_515__HTMLTAG_516___16___手動故障轉移___HTMLTAG_517__HTMLTAG_518___
</tbody>
</table>

___HTMLTAG_521__HTMLTAG_522___10.2 備份與還原___HTMLTAG_523__HTMLTAG_524___

<pre><code class="language-bash">#!/bin/bash
# backup-keycloak.sh - Automated backup script

BACKUP_DIR="/backups/keycloak/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

# 1. Database backup (PostgreSQL)
echo "=== Backing up database ==="
pg_dump -h db-host -U keycloak -d keycloak \
  --format=custom \
  --compress=9 \
  --file="$BACKUP_DIR/keycloak-db.dump"

# 2. Realm export via Admin API
echo "=== Exporting realms ==="
# Lấy admin token
ADMIN_TOKEN=$(curl -s \
  -d "client_id=admin-cli" \
  -d "username=admin" \
  -d "password=admin_password" \
  -d "grant_type=password" \
  "https://auth.example.com/realms/master/protocol/openid-connect/token" \
  | jq -r '.access_token')

# Export từng realm
for REALM in $(curl -s \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  "https://auth.example.com/admin/realms" \
  | jq -r '.[].realm'); do

  echo "Exporting realm: $REALM"
  curl -s \
    -H "Authorization: Bearer $ADMIN_TOKEN" \
    "https://auth.example.com/admin/realms/$REALM/partial-export?exportClients=true&exportGroupsAndRoles=true" \
    -o "$BACKUP_DIR/realm-$REALM.json"
done

# 3. Compress backup
echo "=== Compressing backup ==="
tar -czf "$BACKUP_DIR.tar.gz" -C "$(dirname $BACKUP_DIR)" "$(basename $BACKUP_DIR)"
rm -rf "$BACKUP_DIR"

# 4. Upload to S3 (optional)
# aws s3 cp "$BACKUP_DIR.tar.gz" "s3://my-backups/keycloak/"

echo "=== Backup completed: $BACKUP_DIR.tar.gz ==="
</code></pre>

<pre><code class="language-bash">#!/bin/bash
# restore-keycloak.sh - Restore from backup

BACKUP_FILE="$1"
if [ -z "$BACKUP_FILE" ]; then
  echo "Usage: $0 <backup-file.tar.gz>"
  exit 1
fi

# 1. Extract backup
RESTORE_DIR="/tmp/keycloak-restore"
mkdir -p "$RESTORE_DIR"
tar -xzf "$BACKUP_FILE" -C "$RESTORE_DIR"

# 2. Restore database
echo "=== Restoring database ==="
DB_DUMP=$(find "$RESTORE_DIR" -name "*.dump" | head -1)
pg_restore -h db-host -U keycloak -d keycloak \
  --clean --if-exists \
  "$DB_DUMP"

# 3. Restart Keycloak
echo "=== Restarting Keycloak ==="
# Docker Compose
docker compose restart keycloak

# Hoặc Kubernetes
# kubectl rollout restart deployment/keycloak -n keycloak

echo "=== Restore completed ==="
</code></pre>

___HTMLTAG_525__HTMLTAG_526___10.3 故障轉移自動化___HTMLTAG_527__HTMLTAG_528___

<pre><code class="language-bash">#!/bin/bash
# failover-check.sh - Health check và auto-failover script

PRIMARY_URL="https://auth-primary.example.com/health/ready"
BACKUP_URL="https://auth-backup.example.com/health/ready"
DNS_ZONE="example.com"
DNS_RECORD="auth"
MAX_FAILURES=3
FAILURE_COUNT=0
CHECK_INTERVAL=10

while true; do
  # Check primary health
  HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" \
    --connect-timeout 5 --max-time 10 \
    "$PRIMARY_URL")

  if [ "$HTTP_CODE" != "200" ]; then
    FAILURE_COUNT=$((FAILURE_COUNT + 1))
    echo "[$(date)] Primary UNHEALTHY ($HTTP_CODE) - failure $FAILURE_COUNT/$MAX_FAILURES"

    if [ "$FAILURE_COUNT" -ge "$MAX_FAILURES" ]; then
      echo "[$(date)] FAILOVER: Switching DNS to backup site"

      # Check backup is healthy first
      BACKUP_CODE=$(curl -s -o /dev/null -w "%{http_code}" \
        --connect-timeout 5 --max-time 10 \
        "$BACKUP_URL")

      if [ "$BACKUP_CODE" == "200" ]; then
        # Update DNS (example with AWS Route53)
        # aws route53 change-resource-record-sets ...

        # Send alert
        echo "CRITICAL: Keycloak failover executed at $(date)" | \
          mail -s "Keycloak Failover Alert" ops@example.com

        FAILURE_COUNT=0
      else
        echo "[$(date)] CRITICAL: Both sites are down!"
      fi
    fi
  else
    if [ "$FAILURE_COUNT" -gt 0 ]; then
      echo "[$(date)] Primary recovered"
    fi
    FAILURE_COUNT=0
  fi

  sleep "$CHECK_INTERVAL"
done
</code></pre>

___HTMLTAG_529__HTMLTAG_530___11。 Docker Compose HA 叢集___HTMLTAG_531__HTMLTAG_532___

<p>具有 2 個 Keycloak 節點 + 外部 Infinispan + PostgreSQL 的完整範例：</p>

___預編碼_24___

___HTMLTAG_535__HTMLTAG_536___12。 Infinispan CLI 與監控___HTMLTAG_537__HTMLTAG_538___

___預編碼_25___