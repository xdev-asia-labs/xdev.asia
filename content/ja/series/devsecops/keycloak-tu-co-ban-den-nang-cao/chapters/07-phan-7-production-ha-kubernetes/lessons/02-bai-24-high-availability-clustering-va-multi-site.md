---
id: 019d8b30-b124-7001-c001-e0c5f8100124
title: 'レッスン 24: 高可用性、クラスタリング、およびマルチサイト'
slug: bai-24-high-availability-clustering-va-multi-site
description: Keycloak高可用性の概念、Infinispan分散キャッシュ（組み込み対外部）、キャッシュスタック構成（kubernetes、jdbc-ping、dns-ping）、セッションレプリケーション、外部Infinispanサーバーセットアップ、マルチサイト/クロスデータセンター展開、アクティブ/パッシブ対アクティブ/アクティブパターン、データベースレプリケーション（PostgreSQL Patroni、PgBouncer）、ロードバランサースティッキーセッション、スプリットブレイン処理、災害復旧戦略。
duration_minutes: 260
is_free: true
video_url: null
sort_order: 24
section_title: 'パート 7: 本番環境、HA、および Kubernetes'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: 基本から上級までの Keycloak
  slug: keycloak-tu-co-ban-den-nang-cao
locale: ja
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — レッスン 24</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 24: 高可用性、クラスタリング、および</tspan>
      <tspan x="60" dy="42">マルチサイト</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">基本から上級までの Keycloak</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 7: 本番環境、HA、および Kubernetes</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ha-architecture-overview"><strong>1. HA アーキテクチャの概要</strong></h2>

<p>Keycloak の高可用性は、ノードの認証/認可を容易に行うことができます。 HA は 3 つの柱に基づいています。<strong>クラスタリング (Infinispan)</strong>, <strong>データベースのレプリケーション</strong>、 そして<strong>負荷分散</strong>.</p>

<pre><code class="language-text">┌──────────────────────────────────────────────────────────────────┐
│                    High Availability Architecture                │
│                                                                  │
│    ┌──────────────┐                                              │
│    │ Load Balancer │  ←── Sticky Sessions (KEYCLOAK_SESSION)     │
│    │ (HAProxy/     │                                              │
│    │  Nginx/ALB)   │                                              │
│    └──────┬───────┘                                              │
│           │                                                      │
│    ┌──────┴─────────────────────┐                                │
│    │              │              │                                │
│    ▼              ▼              ▼                                │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                          │
│ │Keycloak 1│ │Keycloak 2│ │Keycloak 3│  ←── Embedded Infinispan │
│ │          │◄─►          │◄─►          │      (cache replication)  │
│ └────┬─────┘ └────┬─────┘ └────┬─────┘                          │
│      │             │             │                                │
│      └─────────────┼─────────────┘                               │
│                    ▼                                              │
│         ┌──────────────────┐                                     │
│         │   PostgreSQL     │  ←── Primary-Replica Replication    │
│         │   (Primary)      │                                     │
│         └────────┬─────────┘                                     │
│                  │                                                │
│         ┌────────▼─────────┐                                     │
│         │   PostgreSQL     │                                     │
│         │   (Replica)      │                                     │
│         └──────────────────┘                                     │
└──────────────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-infinispan-cache-types"><strong>2. Infinispan キャッシュの種類</strong></h2>

<h3 id="21-local-vs-distributed-replicated-caches"><strong>2.1 ローカル キャッシュと分散/レプリケート キャッシュ</strong></h3>

<p>Keycloakは、異なる目的で2種類のInfinispanキャッシュを使用します。</p>

<table>
<thead>
<tr><th>キャッシュタイプ</th><th>説明する</th><th>キークロークのキャッシュ</th><th>クラスターモード</th></tr>
</thead>
<tbody>
<tr><td><strong>ローカルキャッシュ</strong></td><td>現在のノードにデータを保存し、DB から読み取れるメタデータに使用します。</td><td><code>レルム</code>, <code>ユーザー。ユーザー</code>, <code>認可。認可</code>, <code>キー</code></td><td>ローカル + 無効化メッセージ</td></tr>
<tr><td><strong>分散キャッシュ</strong></td><td>クラスター内の N 人の所有者に分散されたデータ (セッション データに使用される)</td><td><code>セッション</code>, <code>認証セッション</code>, <code>オフラインセッション</code>, <code>クライアントセッション</code>, <code>オフラインクライアントセッション</code></td><td>分散型 (デフォルトでは 2 人の所有者)</td></tr>
<tr><td><strong>複製されたキャッシュ</strong></td><td>すべてのノードにデータがレプリケートされる</td><td><code>仕事。仕事</code>(クラスター通信)</td><td>複製された</td></tr>
</tbody>
</table>

<h3 id="22-keycloak-caching-architecture-chi-tiet"><strong>2.2 Keycloak キャッシュ アーキテクチャの詳細</strong></h3>

<pre><code class="language-text">┌─────────────────────────────────────────────────────────────────────┐
│                    Keycloak Cache Architecture                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  LOCAL CACHES (mỗi node giữ copy riêng, invalidation khi thay đổi)│
│  ┌──────────┐ ┌──────────┐ ┌──────────────┐ ┌──────────┐          │
│  │ realms   │ │ users    │ │authorization │ │  keys    │          │
│  │(realm cfg│ │(user data│ │(permissions) │ │(crypto   │          │
│  │ metadata)│ │ profile) │ │              │ │ keys)    │          │
│  └──────────┘ └──────────┘ └──────────────┘ └──────────┘          │
│                                                                     │
│  DISTRIBUTED CACHES (session data phân tán trong cluster)          │
│  ┌───────────────────┐ ┌──────────────────────────┐                │
│  │ sessions           │ │ authenticationSessions   │                │
│  │ (user SSO sessions)│ │ (login flow state)       │                │
│  └───────────────────┘ └──────────────────────────┘                │
│  ┌───────────────────┐ ┌──────────────────────────┐                │
│  │ offlineSessions    │ │ loginFailures            │                │
│  │ (offline tokens)   │ │ (brute force tracking)   │                │
│  └───────────────────┘ └──────────────────────────┘                │
│  ┌───────────────────┐                                             │
│  │ actionTokens      │                                             │
│  │ (email verify,    │                                             │
│  │  reset password)  │                                             │
│  └───────────────────┘                                             │
│                                                                     │
│  REPLICATED CACHES                                                 │
│  ┌───────────────────┐                                             │
│  │ work              │ (cluster-wide notifications)                │
│  └───────────────────┘                                             │
└─────────────────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="3-embedded-vs-external-infinispan"><strong>3. 組み込み vs 外部 Infinispan</strong></h2>

<h3 id="31-embedded-infinispan-default"><strong>3.1 組み込み Infinispan (デフォルト)</strong></h3>

<p>デフォルトでは、KeycloakはInfinispanをJVMプロセスに埋め込みます。ノードは検出プロトコルを通じて相互に検出し、自動的にクラスターを形成します。</p>

<pre><code class="language-bash"># Embedded Infinispan (default) - không cần cấu hình thêm
bin/kc.sh start --optimized \
  --cache=ispn
</code></pre>

<h3 id="32-external-infinispan"><strong>3.2 外部インフィニスパン</strong></h3>

<p>マルチサイト展開の場合、または個別のキャッシュ レイヤー管理が必要な場合は、外部 Infinispan サーバーを使用します。</p>

<pre><code class="language-bash"># Keycloak kết nối External Infinispan
bin/kc.sh start --optimized \
  --cache=ispn \
  --cache-config-file=cache-ispn-remote.xml \
  --spi-connections-infinispan-quarkus-site-name=site1
</code></pre>

<table>
<thead>
<tr><th>特徴</th><th>埋め込み型インフィニスパン</th><th>外部インフィニスパン</th></tr>
</thead>
<tbody>
<tr><td>セットアップの複雑さ</td><td>シンプルで構成不要</td><td>Infinispan クラスターを個別にデプロイする必要がある</td></tr>
<tr><td>マルチサイト</td><td>❌ サポートされていません</td><td>✅ データセンター間のレプリケーション</td></tr>
<tr><td>スケーラビリティ</td><td>10 ノード以下に適しています</td><td>大規模な導入に適しています</td></tr>
<tr><td>管理</td><td>自動</td><td>Infinispan を個別に監視/管理する必要がある</td></tr>
<tr><td>ユースケース</td><td>単一サイト、単一クラスター</td><td>マルチサイト、DR、大規模展開</td></tr>
</tbody>
</table>

<h2 id="4-cache-stack-configuration"><strong>4. キャッシュスタックの構成</strong></h2>

<h3 id="41-kubernetes-kube_ping"><strong>4.1 Kubernetes (KUBE_PING)</strong></h3>

<p>Kubernetes では、使用します<strong>KUBE_PING</strong>(dns.DNS_PING) Keycloak ポッドが Kubernetes API または DNS 経由で相互に自己検出できるようにします。</p>

<pre><code class="language-bash"># Keycloak trên Kubernetes - dùng dns cache stack
bin/kc.sh start --optimized \
  --cache=ispn \
  --cache-stack=kubernetes
</code></pre>

<p>Keycloak Kubernetes には Keycloak が必要です<strong>ヘッドレスサービス</strong>DNS 検出が機能するには:</p>

<pre><code class="language-yaml"># headless-service.yaml - cho Infinispan cluster discovery
apiVersion: v1
kind: Service
metadata:
  name: keycloak-headless
  namespace: keycloak
spec:
  type: ClusterIP
  clusterIP: None           # Headless service
  publishNotReadyAddresses: true
  selector:
    app: keycloak
  ports:
    - name: jgroups
      port: 7800
      targetPort: 7800
      protocol: TCP
</code></pre>

<pre><code class="language-bash"># Environment variable cho DNS_PING
export KC_CACHE_STACK=kubernetes
export JAVA_OPTS_APPEND="-Djgroups.dns.query=keycloak-headless.keycloak.svc.cluster.local"
</code></pre>

<h3 id="42-jdbc-ping-cho-vm-deployments"><strong>4.2 JDBC-PING (VM デプロイメント用)</strong></h3>

<p>VM (Kubernetes なし) にデプロイする場合は、次を使用します。<strong>JDBC_PING</strong>共有データベースを介してノードが相互に検出できるようにします。</p>

<pre><code class="language-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!-- cache-ispn-jdbc-ping.xml --&gt;
&lt;infinispan
    xmlns="urn:infinispan:config:15.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:infinispan:config:15.0
        https://infinispan.org/schemas/infinispan-config-15.0.xsd"&gt;

    &lt;jgroups&gt;
        &lt;stack name="jdbc-ping-stack"&gt;
            &lt;TCP bind_addr="match-interface:eth0"
                 bind_port="7800"
                 recv_buf_size="20M"
                 send_buf_size="640K"/&gt;

            &lt;JDBC_PING connection_url="jdbc:postgresql://db-host:5432/keycloak"
                       connection_username="keycloak"
                       connection_password="secure_password"
                       connection_driver="org.postgresql.Driver"
                       initialize_sql="CREATE TABLE IF NOT EXISTS JGROUPSPING (
                           own_addr varchar(200) NOT NULL,
                           cluster_name varchar(200) NOT NULL,
                           ping_data BYTEA,
                           constraint PK_JGROUPSPING PRIMARY KEY (own_addr, cluster_name)
                       )"
                       insert_single_sql="INSERT INTO JGROUPSPING (own_addr, cluster_name, ping_data)
                           VALUES (?, ?, ?)"
                       delete_single_sql="DELETE FROM JGROUPSPING
                           WHERE own_addr=? AND cluster_name=?"
                       select_all_pingdata_sql="SELECT ping_data
                           FROM JGROUPSPING WHERE cluster_name=?"/&gt;

            &lt;MERGE3 min_interval="10000" max_interval="30000"/&gt;
            &lt;FD_SOCK/&gt;
            &lt;FD_ALL timeout="60000" interval="15000"/&gt;
            &lt;VERIFY_SUSPECT timeout="5000"/&gt;
            &lt;pbcast.NAKACK2 use_mcast_xmit="false"/&gt;
            &lt;UNICAST3/&gt;
            &lt;pbcast.STABLE/&gt;
            &lt;pbcast.GMS join_timeout="5000"/&gt;
            &lt;MFC max_credits="2M" min_threshold="0.4"/&gt;
            &lt;FRAG3 frag_size="60K"/&gt;
        &lt;/stack&gt;
    &lt;/jgroups&gt;

    &lt;cache-container name="keycloak"&gt;
        &lt;transport lock-timeout="60000" stack="jdbc-ping-stack"/&gt;
        &lt;!-- Cache definitions... --&gt;
    &lt;/cache-container&gt;
&lt;/infinispan&gt;
</code></pre>

<h3 id="43-dns-ping"><strong>4.3 DNS-PING</strong></h3>

<pre><code class="language-bash"># DNS-PING cho Docker Swarm hoặc Consul DNS
export JAVA_OPTS_APPEND="-Djgroups.dns.query=keycloak-tasks.keycloak"
bin/kc.sh start --optimized \
  --cache=ispn \
  --cache-stack=kubernetes  # DNS_PING nằm trong kubernetes stack
</code></pre>

<h2 id="5-external-infinispan-server-setup"><strong>5. 外部 Infinispan サーバーのセットアップ</strong></h2>

<h3 id="51-infinispan-server-configuration"><strong>5.1 Infinispanサーバーの構成</strong></h3>

<pre><code class="language-xml">&lt;!-- infinispan.xml cho External Infinispan Server --&gt;
&lt;infinispan
    xmlns="urn:infinispan:config:15.0"
    xmlns:server="urn:infinispan:server:15.0"&gt;

    &lt;cache-container name="keycloak" statistics="true"&gt;
        &lt;transport cluster="keycloak-cluster"
                   stack="tcp"
                   node-name="${infinispan.node.name:node1}"/&gt;

        &lt;!-- Distributed caches cho Keycloak sessions --&gt;
        &lt;distributed-cache name="sessions" owners="2" mode="SYNC"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-protostream"/&gt;
                &lt;value media-type="application/x-protostream"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="-1"/&gt;
            &lt;persistence passivation="false"&gt;
                &lt;!-- Optional: persist to disk --&gt;
            &lt;/persistence&gt;
        &lt;/distributed-cache&gt;

        &lt;distributed-cache name="authenticationSessions" owners="2" mode="SYNC"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-protostream"/&gt;
                &lt;value media-type="application/x-protostream"/&gt;
            &lt;/encoding&gt;
        &lt;/distributed-cache&gt;

        &lt;distributed-cache name="offlineSessions" owners="2" mode="SYNC"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-protostream"/&gt;
                &lt;value media-type="application/x-protostream"/&gt;
            &lt;/encoding&gt;
        &lt;/distributed-cache&gt;

        &lt;distributed-cache name="clientSessions" owners="2" mode="SYNC"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-protostream"/&gt;
                &lt;value media-type="application/x-protostream"/&gt;
            &lt;/encoding&gt;
        &lt;/distributed-cache&gt;

        &lt;distributed-cache name="offlineClientSessions" owners="2" mode="SYNC"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-protostream"/&gt;
                &lt;value media-type="application/x-protostream"/&gt;
            &lt;/encoding&gt;
        &lt;/distributed-cache&gt;

        &lt;distributed-cache name="loginFailures" owners="2" mode="SYNC"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-protostream"/&gt;
                &lt;value media-type="application/x-protostream"/&gt;
            &lt;/encoding&gt;
        &lt;/distributed-cache&gt;

        &lt;distributed-cache name="actionTokens" owners="2" mode="SYNC"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-protostream"/&gt;
                &lt;value media-type="application/x-protostream"/&gt;
            &lt;/encoding&gt;
            &lt;expiration max-idle="-1" lifespan="-1" interval="300000"/&gt;
        &lt;/distributed-cache&gt;

        &lt;replicated-cache name="work" mode="SYNC"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-protostream"/&gt;
                &lt;value media-type="application/x-protostream"/&gt;
            &lt;/encoding&gt;
        &lt;/replicated-cache&gt;
    &lt;/cache-container&gt;

    &lt;server xmlns="urn:infinispan:server:15.0"&gt;
        &lt;interfaces&gt;
            &lt;interface name="public"&gt;
                &lt;inet-address value="${infinispan.bind.address:0.0.0.0}"/&gt;
            &lt;/interface&gt;
        &lt;/interfaces&gt;

        &lt;socket-bindings default-interface="public" port-offset="0"&gt;
            &lt;socket-binding name="default" port="11222"/&gt;
        &lt;/socket-bindings&gt;

        &lt;security&gt;
            &lt;security-realms&gt;
                &lt;security-realm name="default"&gt;
                    &lt;properties-realm groups-attribute="Roles"&gt;
                        &lt;user-properties path="users.properties"/&gt;
                        &lt;group-properties path="groups.properties"/&gt;
                    &lt;/properties-realm&gt;
                &lt;/security-realm&gt;
            &lt;/security-realms&gt;
        &lt;/security&gt;

        &lt;endpoints&gt;
            &lt;endpoint socket-binding="default" security-realm="default"&gt;
                &lt;hotrod-connector name="hotrod"/&gt;
                &lt;rest-connector name="rest"/&gt;
            &lt;/endpoint&gt;
        &lt;/endpoints&gt;
    &lt;/server&gt;
&lt;/infinispan&gt;
</code></pre>

<h3 id="52-keycloak-remote-cache-config"><strong>5.2 Keycloakのリモートキャッシュ構成</strong></h3>

<p>外部 Infinispan に接続するように Keycloak を構成します。</p>

<pre><code class="language-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!-- cache-ispn-remote.xml - Keycloak side --&gt;
&lt;infinispan
    xmlns="urn:infinispan:config:15.0"&gt;

    &lt;cache-container name="keycloak"&gt;
        &lt;transport lock-timeout="60000"/&gt;

        &lt;!-- Local caches (giữ nguyên trên mỗi Keycloak node) --&gt;
        &lt;local-cache name="realms"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="10000"/&gt;
        &lt;/local-cache&gt;

        &lt;local-cache name="users"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="10000"/&gt;
        &lt;/local-cache&gt;

        &lt;local-cache name="authorization"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="10000"/&gt;
        &lt;/local-cache&gt;

        &lt;local-cache name="keys"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="1000"/&gt;
            &lt;expiration max-idle="3600000"/&gt;
        &lt;/local-cache&gt;

        &lt;!-- Distributed caches backed by remote Infinispan server --&gt;
        &lt;distributed-cache name="sessions" owners="2"&gt;
            &lt;remote-store xmlns="urn:infinispan:config:store:remote:15.0"
                          cache="sessions"
                          purge="false"
                          preload="false"
                          shared="true"
                          segmented="false"
                          raw-values="true"&gt;
                &lt;remote-server host="infinispan-server-1" port="11222"/&gt;
                &lt;remote-server host="infinispan-server-2" port="11222"/&gt;
                &lt;security&gt;
                    &lt;authentication&gt;
                        &lt;digest username="keycloak" password="changeme" realm="default"/&gt;
                    &lt;/authentication&gt;
                &lt;/security&gt;
            &lt;/remote-store&gt;
        &lt;/distributed-cache&gt;

        &lt;distributed-cache name="authenticationSessions" owners="2"&gt;
            &lt;remote-store xmlns="urn:infinispan:config:store:remote:15.0"
                          cache="authenticationSessions"
                          purge="false" preload="false" shared="true"
                          segmented="false" raw-values="true"&gt;
                &lt;remote-server host="infinispan-server-1" port="11222"/&gt;
                &lt;remote-server host="infinispan-server-2" port="11222"/&gt;
                &lt;security&gt;
                    &lt;authentication&gt;
                        &lt;digest username="keycloak" password="changeme" realm="default"/&gt;
                    &lt;/authentication&gt;
                &lt;/security&gt;
            &lt;/remote-store&gt;
        &lt;/distributed-cache&gt;

        &lt;distributed-cache name="offlineSessions" owners="2"&gt;
            &lt;remote-store xmlns="urn:infinispan:config:store:remote:15.0"
                          cache="offlineSessions"
                          purge="false" preload="false" shared="true"
                          segmented="false" raw-values="true"&gt;
                &lt;remote-server host="infinispan-server-1" port="11222"/&gt;
                &lt;remote-server host="infinispan-server-2" port="11222"/&gt;
                &lt;security&gt;
                    &lt;authentication&gt;
                        &lt;digest username="keycloak" password="changeme" realm="default"/&gt;
                    &lt;/authentication&gt;
                &lt;/security&gt;
            &lt;/remote-store&gt;
        &lt;/distributed-cache&gt;
    &lt;/cache-container&gt;
&lt;/infinispan&gt;
</code></pre>

<h2 id="6-multi-site-deployment"><strong>6. マルチサイト展開</strong></h2>

<h3 id="61-active-passive-pattern"><strong>6.1 アクティブ/パッシブパターン</strong></h3>

<p>アクティブ-パッシブでは、のみ<strong>プライマリサイト</strong>トラフィックに対応します。スタンバイ状態のバックアップ サイト。プライマリに問題が発生した場合に引き継ぐ準備ができています。</p>

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

<h3 id="62-active-active-pattern"><strong>6.2 アクティブ-アクティブパターン</strong></h3>

<p>アクティブ-アクティブでは、<strong>両方のサイト</strong>両方が同時にトラフィックを処理します。より複雑ですが、リソースを最大限に活用します。</p>

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
</code></pre>

<table>
<thead>
<tr><th>特徴</th><th>アクティブ-パッシブ</th><th>アクティブ-アクティブ</th></tr>
</thead>
<tbody>
<tr><td>交通処理</td><td>一度に 1 サイト</td><td>両方のサイトを同時に</td></tr>
<tr><td>リソースの使用率</td><td>50% (パッシブサイトのアイドル状態)</td><td>100%</td></tr>
<tr><td>複雑</td><td>より低い</td><td>より高い (競合解決)</td></tr>
<tr><td>フェイルオーバー時間</td><td>DNS スイッチが必要 (秒-分)</td><td>自動 (GSLB)</td></tr>
<tr><td>データの一貫性</td><td>強力 (同期リプル)</td><td>最終的 (非同期クロスサイト)</td></tr>
<tr><td>DB要件</td><td>プライマリ-スタンバイ</td><td>マルチマスターまたは共有DB</td></tr>
</tbody>
</table>

<h3 id="63-cross-datacenter-infinispan-configuration"><strong>6.3 データセンター間の Infinispan 構成</strong></h3>

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

<h2 id="7-database-replication"><strong>7. データベースのレプリケーション</strong></h2>

<h3 id="71-postgresql-patroni-pgbouncer"><strong>7.1 PostgreSQL Patroni + PgBouncer</strong></h3>

<p><strong>パトローニ</strong>PostgreSQL HA (自動フェイルオーバー) 管理、<strong>Pgバウンサー</strong>接続プーリングを提供します。</p>

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

<h3 id="72-patroni-configuration"><strong>7.2 パトローニの設定</strong></h3>

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

<h3 id="73-pgbouncer-configuration"><strong>7.3 PgBouncer の設定</strong></h3>

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

<h2 id="8-load-balancer-configuration"><strong>8. ロードバランサの構成</strong></h2>

<h3 id="81-sticky-sessions"><strong>8.1 スティッキーセッション</strong></h3>

<p>キークローク<strong>スティッキーセッションが必要です</strong>認証フロー (ログイン、登録) 用。セッション アフィニティは Cookie ベースです<code>KC_ROUTE</code>（前に<code>KEYCLOAK_SESSION</code>):</p>

<h3 id="82-haproxy-configuration"><strong>8.2 HAProxy 構成</strong></h3>

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

<h3 id="83-nginx-load-balancer"><strong>8.3 Nginx ロードバランサ</strong></h3>

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

<h2 id="9-split-brain-handling"><strong>9. スプリットブレインの処理</strong></h2>

<h3 id="91-split-brain-scenarios"><strong>9.1 スプリット ブレイン シナリオ</strong></h3>

<p>スプリット ブレインは、ネットワーク パーティションによってクラスターが 2 つ以上のパーティションに分割され、各パーティションがもう一方のパーティションが停止していると認識するときに発生します。</p>

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

<h3 id="92-merge-policies"><strong>9.2 マージポリシー</strong></h3>

<pre><code class="language-xml">&lt;!-- Infinispan merge policy configuration --&gt;
&lt;distributed-cache name="sessions" owners="2" mode="SYNC"&gt;
    &lt;partition-handling when-split="ALLOW_READ_WRITES"
                        merge-policy="PREFERRED_NON_NULL"/&gt;
&lt;/distributed-cache&gt;
</code></pre>

<table>
<thead>
<tr><th>マージポリシー</th><th>行動</th><th>使用事例</th></tr>
</thead>
<tbody>
<tr><td><code>PREFERRED_NON_NULL</code></td><td>マージ時にエントリを null 以外に保つ</td><td>セッション - セッションを失うよりは維持したほうがよい</td></tr>
<tr><td><code>REMOVE_ALL</code></td><td>競合するエントリをすべて削除します</td><td>データの一貫性が最も重要な場合</td></tr>
<tr><td><code>優先_常に</code></td><td>より大きなパーティションからのエントリを保持する</td><td>汎用</td></tr>
</tbody>
</table>

<h2 id="10-disaster-recovery-strategies"><strong>10. 災害復旧戦略</strong></h2>

<h3 id="101-rpo-rto-targets"><strong>10.1 RPO/RTO 目標</strong></h3>

<table>
<thead>
<tr><th>階層</th><th>RPO</th><th>RTO</th><th>戦略</th></tr>
</thead>
<tbody>
<tr><td>レベル 1 (重大)</td><td>0 (データ損失ゼロ)</td><td><; 5分</td><td>アクティブ-アクティブ + 同期 DB レプリケーション</td></tr>
<tr><td>レベル 2 (重要)</td><td><; 1分</td><td><; 15分</td><td>アクティブ/パッシブ + 非同期レプリケーション + 自動フェイルオーバー</td></tr>
<tr><td>階層 3 (標準)</td><td><; 1時間</td><td><; 1時間</td><td>バックアップ/リストア + 手動フェイルオーバー</td></tr>
</tbody>
</table>

<h3 id="102-backup-restore"><strong>10.2 バックアップと復元</strong></h3>

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

<h3 id="103-failover-automation"><strong>10.3 フェイルオーバーの自動化</strong></h3>

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

<h2 id="11-docker-compose-ha-cluster"><strong>11. Docker Compose HA クラスター</strong></h2>

<p>2 つの Keycloak ノード + 外部 Infinispan + PostgreSQL を使用した完全な例:</p>

<pre><code class="language-yaml"># docker-compose-ha.yml
version: "3.9"

services:
  # ============ PostgreSQL ============
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: keycloak
      POSTGRES_USER: keycloak
      POSTGRES_PASSWORD: db_password
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U keycloak"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - keycloak-net

  # ============ External Infinispan ============
  infinispan:
    image: quay.io/infinispan/server:15.0
    environment:
      USER: keycloak
      PASS: ispn_password
    volumes:
      - ./infinispan.xml:/opt/infinispan/server/conf/infinispan.xml
    ports:
      - "11222:11222"
    healthcheck:
      test: ["CMD", "curl", "-sf", "http://localhost:11222/rest/v2/cache-managers/default/health/status"]
      interval: 10s
      timeout: 5s
      retries: 10
    networks:
      - keycloak-net

  # ============ Keycloak Node 1 ============
  keycloak-1:
    image: quay.io/keycloak/keycloak:26.0
    command: start --optimized
    environment:
      KC_DB: postgres
      KC_DB_URL: jdbc:postgresql://postgres:5432/keycloak
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD: db_password
      KC_DB_POOL_MIN_SIZE: "10"
      KC_DB_POOL_MAX_SIZE: "50"
      KC_HOSTNAME: localhost
      KC_PROXY_HEADERS: xforwarded
      KC_HTTP_ENABLED: "true"
      KC_HEALTH_ENABLED: "true"
      KC_METRICS_ENABLED: "true"
      KC_CACHE: ispn
      KC_CACHE_STACK: kubernetes
      KC_BOOTSTRAP_ADMIN_USERNAME: admin
      KC_BOOTSTRAP_ADMIN_PASSWORD: admin
      JAVA_OPTS_APPEND: >-
        -Djgroups.dns.query=keycloak-headless
        -XX:+UseG1GC -XX:MaxRAMPercentage=70.0
    depends_on:
      postgres:
        condition: service_healthy
      infinispan:
        condition: service_healthy
    healthcheck:
      test: ["CMD-SHELL", "curl -sf http://localhost:8080/health/ready || exit 1"]
      interval: 15s
      timeout: 5s
      retries: 10
      start_period: 120s
    networks:
      keycloak-net:
        aliases:
          - keycloak-headless

  # ============ Keycloak Node 2 ============
  keycloak-2:
    image: quay.io/keycloak/keycloak:26.0
    command: start --optimized
    environment:
      KC_DB: postgres
      KC_DB_URL: jdbc:postgresql://postgres:5432/keycloak
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD: db_password
      KC_DB_POOL_MIN_SIZE: "10"
      KC_DB_POOL_MAX_SIZE: "50"
      KC_HOSTNAME: localhost
      KC_PROXY_HEADERS: xforwarded
      KC_HTTP_ENABLED: "true"
      KC_HEALTH_ENABLED: "true"
      KC_METRICS_ENABLED: "true"
      KC_CACHE: ispn
      KC_CACHE_STACK: kubernetes
      JAVA_OPTS_APPEND: >-
        -Djgroups.dns.query=keycloak-headless
        -XX:+UseG1GC -XX:MaxRAMPercentage=70.0
    depends_on:
      postgres:
        condition: service_healthy
      infinispan:
        condition: service_healthy
      keycloak-1:
        condition: service_healthy
    healthcheck:
      test: ["CMD-SHELL", "curl -sf http://localhost:8080/health/ready || exit 1"]
      interval: 15s
      timeout: 5s
      retries: 10
      start_period: 120s
    networks:
      keycloak-net:
        aliases:
          - keycloak-headless

  # ============ HAProxy Load Balancer ============
  haproxy:
    image: haproxy:2.9-alpine
    volumes:
      - ./haproxy.cfg:/usr/local/etc/haproxy/haproxy.cfg:ro
    ports:
      - "8080:80"
      - "8443:443"
      - "8404:8404"  # Stats
    depends_on:
      keycloak-1:
        condition: service_healthy
      keycloak-2:
        condition: service_healthy
    networks:
      - keycloak-net

volumes:
  pgdata:

networks:
  keycloak-net:
    driver: bridge
</code></pre>

<h2 id="12-infinispan-cli-va-monitoring"><strong>12. Infinispan CLI とモニタリング</strong></h2>

<pre><code class="language-bash"># Infinispan CLI - kết nối đến server
bin/cli.sh -c https://infinispan-server:11222

# Xem cluster status
[infinispan-server:11222]> site status --all-caches
[infinispan-server:11222]> cache ls
[infinispan-server:11222]> cache info sessions

# Xem cache entries
[infinispan-server:11222]> cache entries sessions --limit 10

# Cache statistics
[infinispan-server:11222]> stats

# Xem cluster members
[infinispan-server:11222]> describe

# REST API monitoring
# Cluster health
curl -u admin:password \
  "http://infinispan:11222/rest/v2/cache-managers/default/health"

# Cache statistics
curl -u admin:password \
  "http://infinispan:11222/rest/v2/caches/sessions?action=stats"

# Cluster members
curl -u admin:password \
  "http://infinispan:11222/rest/v2/cluster?action=distribution"
</code></pre>
