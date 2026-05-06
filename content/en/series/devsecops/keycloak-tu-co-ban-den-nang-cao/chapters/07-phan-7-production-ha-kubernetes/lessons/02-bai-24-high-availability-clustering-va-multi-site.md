---
id: 019d8b30-b124-7001-c001-e0c5f8100124
title: 'Lesson 24: High Availability, Clustering and Multi-site'
slug: bai-24-high-availability-clustering-va-multi-site
description: Keycloak High Availability concepts, Infinispan distributed caches (embedded vs external), cache stack configuration (kubernetes, jdbc-ping, dns-ping), session replication, external Infinispan server setup, multi-site/cross-datacenter deployment, active-passive vs active-active patterns, database replication (PostgreSQL Patroni, PgBouncer), load balancer sticky sessions, split-brain handling and disaster recovery strategies.
duration_minutes: 260
is_free: true
video_url: null
sort_order: 24
section_title: 'Part 7: Production, HA and Kubernetes'
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak from Basic to Advanced
  slug: keycloak-tu-co-ban-den-nang-cao
locale: en
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
<text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Lesson 24</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
<tspan x="60" dy="0">Lesson 24: High Availability, Clustering and</tspan>
      <tspan x="60" dy="42">Multi-site</tspan>
  </text>

  <!-- Series subtitle -->
<text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Keycloak from Basic to Advanced</text>

  <!-- Section -->
<text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 7: Production, HA and Kubernetes</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ha-architecture-overview"><strong>1. HA Architecture Overview</strong></h2>

<p>Keycloak High Availability ensures the authentication/authorization system operates continuously, even if one or more nodes fail. HA is based on three pillars: <strong>clustering (Infinispan)</strong>, <strong>database replication</strong>, and <strong>load balancing</strong>.</p>

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

<h2 id="2-infinispan-cache-types"><strong>2. Infinispan Cache Types</strong></h2>

<h3 id="21-local-vs-distributed-replicated-caches"><strong>2.1 Local vs Distributed/Replicated Caches</strong></h3>

<p>Keycloak uses two types of Infinispan cache for different purposes:</p>

<table>
<thead>
<tr><th>Cache Type</th><th>Description</th><th>Keycloak Caches</th><th>Cluster Mode</th></tr>
</thead>
<tbody>
<tr><td><strong>Local Cache</strong></td><td>Stores data on the current node, used for metadata that can be read back from DB</td><td><code>realms</code>, <code>users</code>, <code>authorization</code>, <code>keys</code></td><td>Local + invalidation messages</td></tr>
<tr><td><strong>Distributed Cache</strong></td><td>Data distributed across N owners in the cluster, used for session data</td><td><code>sessions</code>, <code>authenticationSessions</code>, <code>offlineSessions</code>, <code>clientSessions</code>, <code>offlineClientSessions</code></td><td>Distributed (2 owners default)</td></tr>
<tr><td><strong>Replicated Cache</strong></td><td>Data replicated on all nodes</td><td><code>work</code> (cluster communication)</td><td>Replicated</td></tr>
</tbody>
</table>

<h3 id="22-keycloak-caching-architecture-chi-tiet"><strong>2.2 Keycloak Caching Architecture Details</strong></h3>

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

<h2 id="3-embedded-vs-external-infinispan"><strong>3. Embedded vs External Infinispan</strong></h2>

<h3 id="31-embedded-infinispan-default"><strong>3.1 Embedded Infinispan (Default)</strong></h3>

<p>By default, Keycloak embeds Infinispan in the JVM process. Nodes discover each other via discovery protocol and automatically form cluster:</p>

<pre><code class="language-bash"># Embedded Infinispan (default) - không cần cấu hình thêm
bin/kc.sh start --optimized \
  --cache=ispn
</code></pre>

<h3 id="32-external-infinispan"><strong>3.2 External Infinispan</strong></h3>

<p>For multi-site deployment or when separate cache layer management is needed, use External Infinispan server:</p>

<pre><code class="language-bash"># Keycloak kết nối External Infinispan
bin/kc.sh start --optimized \
  --cache=ispn \
  --cache-config-file=cache-ispn-remote.xml \
  --spi-connections-infinispan-quarkus-site-name=site1
</code></pre>

<table>
<thead>
<tr><th>Feature</th><th>Embedded Infinispan</th><th>External Infinispan</th></tr>
</thead>
<tbody>
<tr><td>Setup complexity</td><td>Simple, zero config</td><td>Need to deploy separate Infinispan cluster</td></tr>
<tr><td>Multi-site</td><td>❌ Not supported</td><td>✅ Cross-datacenter replication</td></tr>
<tr><td>Scalability</td><td>Good for ≤ 10 nodes</td><td>Good for large-scale deployments</td></tr>
<tr><td>Management</td><td>Automatic</td><td>Need to monitor/manage Infinispan separately</td></tr>
<tr><td>Use case</td><td>Single-site, single cluster</td><td>Multi-site, DR, large deployments</td></tr>
</tbody>
</table>

<h2 id="4-cache-stack-configuration"><strong>4. Cache Stack Configuration</strong></h2>

<h3 id="41-kubernetes-kube_ping"><strong>4.1 Kubernetes (KUBE_PING)</strong></h3>

<p>On Kubernetes, use <strong>KUBE_PING</strong> (dns.DNS_PING) to let Keycloak pods discover each other via the Kubernetes API or DNS:</p>

<pre><code class="language-bash"># Keycloak trên Kubernetes - dùng dns cache stack
bin/kc.sh start --optimized \
  --cache=ispn \
  --cache-stack=kubernetes
</code></pre>

<p>Keycloak Kubernetes needs a <strong>headless Service</strong> for DNS discovery to work:</p>

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

<h3 id="42-jdbc-ping-cho-vm-deployments"><strong>4.2 JDBC-PING (cho VM Deployments)</strong></h3>

<p>When deploying on VMs (without Kubernetes), use <strong>JDBC_PING</strong> to let nodes detect each other via shared database:</p>

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

<h2 id="5-external-infinispan-server-setup"><strong>5. External Infinispan Server Setup</strong></h2>

<h3 id="51-infinispan-server-configuration"><strong>5.1 Infinispan Server Configuration</strong></h3>

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

<h3 id="52-keycloak-remote-cache-config"><strong>5.2 Keycloak Remote Cache Config</strong></h3>

<p>Configure Keycloak to connect to External Infinispan:</p>

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

<h2 id="6-multi-site-deployment"><strong>6. Multi-site Deployment</strong></h2>

<h3 id="61-active-passive-pattern"><strong>6.1 Active-Passive Pattern</strong></h3>

<p>In active-passive, only <strong>primary site</strong> serves traffic. Backup site in standby state, ready to take over when primary has problems:</p>

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

<h3 id="62-active-active-pattern"><strong>6.2 Active-Active Pattern</strong></h3>

<p>In active-active, <strong>both sites</strong> serve traffic simultaneously. More complicated but takes full advantage of resources:</p>

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
<tr><th>Feature</th><th>Active-Passive</th><th>Active-Active</th></tr>
</thead>
<tbody>
<tr><td>Traffic handling</td><td>1 site at a time</td><td>Both sites at the same time</td></tr>
<tr><td>Resource utilization</td><td>50% (passive site idle)</td><td>100%</td></tr>
<tr><td>Complexity</td><td>Lower</td><td>Higher (conflict resolution)</td></tr>
<tr><td>Failover time</td><td>DNS switch required (seconds-minutes)</td><td>Automatic (GSLB)</td></tr>
<tr><td>Data consistency</td><td>Strong (synchronous repl)</td><td>Eventual (async cross-site)</td></tr>
<tr><td>DB requirement</td><td>Primary-Standby</td><td>Multi-master or shared DB</td></tr>
</tbody>
</table>

<h3 id="63-cross-datacenter-infinispan-configuration"><strong>6.3 Cross-Datacenter Infinispan Configuration</strong></h3>

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

<h2 id="7-database-replication"><strong>7. Database Replication</strong></h2>

<h3 id="71-postgresql-patroni-pgbouncer"><strong>7.1 PostgreSQL Patroni + PgBouncer</strong></h3>

<p><strong>Patroni</strong> manages PostgreSQL HA (automatic failover), <strong>PgBouncer</strong> provides connection pooling:</p>

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

<h3 id="72-patroni-configuration"><strong>7.2 Patroni Configuration</strong></h3>

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

<h3 id="73-pgbouncer-configuration"><strong>7.3 PgBouncer Configuration</strong></h3>

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

<h2 id="8-load-balancer-configuration"><strong>8. Load Balancer Configuration</strong></h2>

<h3 id="81-sticky-sessions"><strong>8.1 Sticky Sessions</strong></h3>

<p>Keycloak <strong>requires sticky sessions</strong> for authentication flows (login, registration). Cookie-based session affinity <code>KC_ROUTE</code> (formerly <code>KEYCLOAK_SESSION</code>):</p>

<h3 id="82-haproxy-configuration"><strong>8.2 HAProxy Configuration</strong></h3>

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

<h3 id="83-nginx-load-balancer"><strong>8.3 Nginx Load Balancer</strong></h3>

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

<h2 id="9-split-brain-handling"><strong>9. Split-Brain Handling</strong></h2>

<h3 id="91-split-brain-scenarios"><strong>9.1 Split-Brain Scenarios</strong></h3>

<p>Split-brain occurs when a network partition splits the cluster into 2+ partitions, each partition thinking the other is dead:</p>

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

<h3 id="92-merge-policies"><strong>9.2 Merge Policies</strong></h3>

<pre><code class="language-xml">&lt;!-- Infinispan merge policy configuration --&gt;
&lt;distributed-cache name="sessions" owners="2" mode="SYNC"&gt;
    &lt;partition-handling when-split="ALLOW_READ_WRITES"
                        merge-policy="PREFERRED_NON_NULL"/&gt;
&lt;/distributed-cache&gt;
</code></pre>

<table>
<thead>
<tr><th>Merge Policy</th><th>Behavior</th><th>Use Case</th></tr>
</thead>
<tbody>
<tr><td><code>PREFERRED_NON_NULL</code></td><td>Keep non-null entries when merging</td><td>Sessions - better to keep session than lose</td></tr>
<tr><td><code>REMOVE_ALL</code></td><td>Delete all conflicting entries</td><td>When data consistency matters most</td></tr>
<tr><td><code>PREFERRED_ALWAYS</code></td><td>Hold entries from larger partition</td><td>General purpose</td></tr>
</tbody>
</table>

<h2 id="10-disaster-recovery-strategies"><strong>10. Disaster Recovery Strategies</strong></h2>

<h3 id="101-rpo-rto-targets"><strong>10.1 RPO/RTO Targets</strong></h3>

<table>
<thead>
<tr><th>Tier</th><th>RPO</th><th>RTO</th><th>Strategy</th></tr>
</thead>
<tbody>
<tr><td>Tier 1 (Critical)</td><td>0 (zero data loss)</td><td>&lt; 5 minutes</td><td>Active-Active + Synchronous DB replication</td></tr>
<tr><td>Tier 2 (Important)</td><td>&lt; 1 minute</td><td>&lt; 15 minutes</td><td>Active-Passive + Async replication + automated failover</td></tr>
<tr><td>Tier 3 (Standard)</td><td>&lt; 1 hour</td><td>&lt; 1 hour</td><td>Backup/Restore + manual failover</td></tr>
</tbody>
</table>

<h3 id="102-backup-restore"><strong>10.2 Backup & Restore</strong></h3>

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

<h3 id="103-failover-automation"><strong>10.3 Failover Automation</strong></h3>

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

<h2 id="11-docker-compose-ha-cluster"><strong>11. Docker Compose HA Cluster</strong></h2>

<p>Complete example with 2 Keycloak nodes + External Infinispan + PostgreSQL:</p>

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

<h2 id="12-infinispan-cli-va-monitoring"><strong>12. Infinispan CLI and Monitoring</strong></h2>

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
