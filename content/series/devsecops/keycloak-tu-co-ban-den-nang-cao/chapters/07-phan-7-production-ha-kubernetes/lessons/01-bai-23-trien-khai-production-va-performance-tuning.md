---
id: 019d8b30-b123-7001-c001-e0c5f8100123
title: 'Bài 23: Triển khai Production và Performance Tuning'
slug: bai-23-trien-khai-production-va-performance-tuning
description: >-
  Production deployment best practices, database selection (PostgreSQL
  recommended), connection pool tuning (Agroal), Quarkus thread pool
  configuration, JVM tuning (heap, GC, container-aware settings), --optimized
  build, hostname configuration (hostname-v2), proxy headers (PROXY protocol,
  X-Forwarded-*), HTTP/2 support, cache tuning (Infinispan local caches), load
  testing với Gatling, và production checklist complète.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 23
section_title: "Phần 7: Production, HA và Kubernetes"
course:
  id: 019d8b30-b100-7001-c001-e0c5f8100001
  title: Keycloak từ Cơ bản đến Nâng cao
  slug: keycloak-tu-co-ban-den-nang-cao
---

<h2 id="1-production-deployment-checklist"><strong>1. Production Deployment Checklist</strong></h2>

<p>Triển khai Keycloak trên production đòi hỏi cấu hình kỹ lưỡng về database, networking, JVM, caching và security. Bài này cung cấp hướng dẫn toàn diện từ database selection đến load testing.</p>

<pre><code class="language-text">┌─────────────────────────────────────────────────────────────┐
│                  Production Checklist                       │
├─────────────────────────────────────────────────────────────┤
│  ✅ Database: PostgreSQL + Connection Pool tuning           │
│  ✅ Build: kc.sh build --optimized                          │
│  ✅ Hostname: hostname-v2 provider configured               │
│  ✅ Proxy: X-Forwarded-* / PROXY protocol                   │
│  ✅ TLS: Certificates configured                            │
│  ✅ JVM: Heap, GC, container-aware settings                 │
│  ✅ Caching: Infinispan local caches tuned                  │
│  ✅ Metrics: /metrics endpoint enabled                      │
│  ✅ Health: /health/ready, /health/live enabled              │
│  ✅ Load Test: Gatling benchmark passed                     │
└─────────────────────────────────────────────────────────────┘
</code></pre>

<h2 id="2-database-selection-va-configuration"><strong>2. Database Selection và Configuration</strong></h2>

<h3 id="21-database-support-matrix"><strong>2.1 Database Support Matrix</strong></h3>

<table>
<thead>
<tr><th>Database</th><th>Vendor Flag</th><th>Recommended</th><th>Ghi chú</th></tr>
</thead>
<tbody>
<tr><td>PostgreSQL</td><td><code>postgres</code></td><td>✅ Yes</td><td>Best performance, được Keycloak team test nhiều nhất</td></tr>
<tr><td>MySQL</td><td><code>mysql</code></td><td>⚠️ OK</td><td>Cần InnoDB, utf8mb4 charset</td></tr>
<tr><td>MariaDB</td><td><code>mariadb</code></td><td>⚠️ OK</td><td>Tương tự MySQL</td></tr>
<tr><td>Oracle</td><td><code>oracle</code></td><td>⚠️ OK</td><td>Enterprise license cần thiết</td></tr>
<tr><td>Microsoft SQL Server</td><td><code>mssql</code></td><td>⚠️ OK</td><td>Windows environment</td></tr>
<tr><td>H2 (embedded)</td><td><code>dev-file</code>/<code>dev-mem</code></td><td>❌ No</td><td>Chỉ dùng cho development</td></tr>
</tbody>
</table>

<h3 id="22-postgresql-configuration"><strong>2.2 PostgreSQL Configuration</strong></h3>

<pre><code class="language-bash"># Cấu hình database cơ bản
bin/kc.sh start \
  --db=postgres \
  --db-url="jdbc:postgresql://db-host:5432/keycloak" \
  --db-username=keycloak \
  --db-password=secure_password_here \
  --db-schema=public
</code></pre>

<p>Với environment variables (recommended cho containers):</p>

<pre><code class="language-bash"># Environment variables cho database
export KC_DB=postgres
export KC_DB_URL="jdbc:postgresql://db-host:5432/keycloak"
export KC_DB_USERNAME=keycloak
export KC_DB_PASSWORD=secure_password_here
export KC_DB_SCHEMA=public

# JDBC URL với advanced parameters
export KC_DB_URL="jdbc:postgresql://db-host:5432/keycloak?ssl=true&sslmode=verify-full&sslrootcert=/certs/ca.crt"
</code></pre>

<h3 id="23-connection-pool-tuning-agroal"><strong>2.3 Connection Pool Tuning (Agroal)</strong></h3>

<p>Keycloak sử dụng <strong>Agroal</strong> connection pool (Quarkus default). Tuning connection pool là yếu tố quan trọng ảnh hưởng đến performance:</p>

<pre><code class="language-bash"># Connection pool configuration
bin/kc.sh start \
  --db=postgres \
  --db-url="jdbc:postgresql://db-host:5432/keycloak" \
  --db-username=keycloak \
  --db-password=secure_password_here \
  --db-pool-initial-size=25 \
  --db-pool-min-size=25 \
  --db-pool-max-size=100
</code></pre>

<table>
<thead>
<tr><th>Parameter</th><th>Default</th><th>Production Recommended</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td><code>--db-pool-initial-size</code></td><td>0</td><td>25</td><td>Số connections khởi tạo ban đầu</td></tr>
<tr><td><code>--db-pool-min-size</code></td><td>0</td><td>25</td><td>Số connections tối thiểu duy trì</td></tr>
<tr><td><code>--db-pool-max-size</code></td><td>100</td><td>50–100</td><td>Số connections tối đa</td></tr>
</tbody>
</table>

<p><strong>Nguyên tắc sizing connection pool:</strong></p>

<pre><code class="language-text">Tổng connections = Số Keycloak instances × db-pool-max-size

Ví dụ: 3 instances × 100 max = 300 connections
→ PostgreSQL max_connections ≥ 300 + buffer (20%)
→ Đặt max_connections = 360
</code></pre>

<p>Cấu hình PostgreSQL phía server (<code>postgresql.conf</code>):</p>

<pre><code class="language-ini"># postgresql.conf - tối ưu cho Keycloak
max_connections = 400
shared_buffers = 2GB
effective_cache_size = 6GB
work_mem = 16MB
maintenance_work_mem = 512MB

# Connection timeout
idle_in_transaction_session_timeout = 30000  # 30 seconds
statement_timeout = 60000                     # 60 seconds

# WAL configuration
wal_level = replica
max_wal_senders = 5
wal_keep_size = 1GB
</code></pre>

<h2 id="3-build-optimization"><strong>3. Build Optimization</strong></h2>

<h3 id="31-build-vs-start-phases"><strong>3.1 Build vs Start Phases</strong></h3>

<p>Keycloak có 2 phases: <strong>build</strong> (đóng gói config) và <strong>start</strong> (chạy server). Trong production, luôn sử dụng <code>--optimized</code> để tách rời 2 phases, giúp startup nhanh hơn đáng kể.</p>

<pre><code class="language-text">┌──────────────────────────────────────────────────────────────┐
│              Keycloak Build & Start Phases                   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Phase 1: BUILD (chạy 1 lần, hoặc khi config thay đổi)     │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ kc.sh build                                           │  │
│  │ - Parse configuration                                 │  │
│  │ - Install providers/extensions                        │  │
│  │ - Quarkus augmentation (ahead-of-time optimization)   │  │
│  │ - Persist build options                               │  │
│  └────────────────────────────────────────────────────────┘  │
│                           ↓                                  │
│  Phase 2: START (mỗi lần khởi động)                         │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ kc.sh start --optimized                               │  │
│  │ - Skip build phase → Fast startup                     │  │
│  │ - Use pre-built configuration                         │  │
│  │ - Apply runtime-only options                          │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
</code></pre>

<pre><code class="language-bash"># Build phase - chạy khi build Docker image
bin/kc.sh build \
  --db=postgres \
  --features=token-exchange,admin-fine-grained-authz \
  --health-enabled=true \
  --metrics-enabled=true \
  --http-relative-path=/auth

# Start phase - chạy khi container start
bin/kc.sh start --optimized \
  --db-url="jdbc:postgresql://db-host:5432/keycloak" \
  --db-username=keycloak \
  --db-password=secure_password_here \
  --hostname=auth.example.com \
  --https-certificate-file=/certs/tls.crt \
  --https-certificate-key-file=/certs/tls.key
</code></pre>

<h3 id="32-production-dockerfile"><strong>3.2 Production Dockerfile</strong></h3>

<pre><code class="language-dockerfile"># Multi-stage Dockerfile cho Keycloak Production
FROM quay.io/keycloak/keycloak:26.0 AS builder

# Build phase - pre-build configuration
ENV KC_DB=postgres
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true
ENV KC_FEATURES=token-exchange,admin-fine-grained-authz
ENV KC_HTTP_RELATIVE_PATH=/auth

# Thêm custom providers nếu có
# COPY --chown=keycloak:keycloak my-provider.jar /opt/keycloak/providers/

# Thêm custom themes nếu có
# COPY --chown=keycloak:keycloak my-theme/ /opt/keycloak/themes/my-theme/

RUN /opt/keycloak/bin/kc.sh build

# Runtime stage
FROM quay.io/keycloak/keycloak:26.0

COPY --from=builder /opt/keycloak/ /opt/keycloak/

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
CMD ["start", "--optimized"]
</code></pre>

<h2 id="4-hostname-configuration"><strong>4. Hostname Configuration</strong></h2>

<h3 id="41-hostname-v2-provider"><strong>4.1 Hostname v2 Provider</strong></h3>

<p>Keycloak sử dụng <strong>hostname-v2</strong> provider (default từ Keycloak 25+) để xác định URL cho tất cả endpoints (frontend, backend, admin):</p>

<pre><code class="language-bash"># Hostname configuration cơ bản
bin/kc.sh start --optimized \
  --hostname=auth.example.com \
  --hostname-admin=admin-auth.example.com
</code></pre>

<table>
<thead>
<tr><th>Parameter</th><th>Mô tả</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td><code>--hostname</code></td><td>Hostname cho frontend URLs (login pages, well-known endpoints)</td><td><code>auth.example.com</code></td></tr>
<tr><td><code>--hostname-admin</code></td><td>Hostname riêng cho Admin Console (nếu khác frontend). Không set = dùng chung <code>--hostname</code></td><td><code>admin-auth.internal.com</code></td></tr>
<tr><td><code>--hostname-strict</code></td><td>Chỉ cho phép request đến hostname đã cấu hình. Default: <code>true</code></td><td><code>true</code></td></tr>
<tr><td><code>--hostname-backchannel-dynamic</code></td><td>Backend URL dùng request hostname thay vì fixed hostname. Default: <code>false</code></td><td><code>false</code></td></tr>
</tbody>
</table>

<h3 id="42-hostname-scenarios"><strong>4.2 Hostname Scenarios</strong></h3>

<pre><code class="language-bash"># Scenario 1: Single domain cho tất cả
bin/kc.sh start --optimized \
  --hostname=auth.example.com

# Scenario 2: Tách Admin Console ra domain riêng (khuyến nghị production)
bin/kc.sh start --optimized \
  --hostname=auth.example.com \
  --hostname-admin=admin-auth.internal.example.com

# Scenario 3: Edge proxy determine hostname từ request
bin/kc.sh start --optimized \
  --hostname-strict=false \
  --proxy-headers=xforwarded

# Scenario 4: Backchannel dynamic (backend-to-backend dùng internal URL)
bin/kc.sh start --optimized \
  --hostname=auth.example.com \
  --hostname-backchannel-dynamic=true
</code></pre>

<h2 id="5-proxy-configuration"><strong>5. Proxy Configuration</strong></h2>

<h3 id="51-proxy-headers"><strong>5.1 Proxy Headers</strong></h3>

<p>Khi Keycloak nằm sau reverse proxy (Nginx, HAProxy, AWS ALB...), cần cấu hình proxy headers để Keycloak nhận đúng client IP, protocol và hostname:</p>

<pre><code class="language-bash"># Option 1: X-Forwarded-* headers (phổ biến nhất)
bin/kc.sh start --optimized \
  --proxy-headers=xforwarded

# Option 2: RFC 7239 Forwarded header
bin/kc.sh start --optimized \
  --proxy-headers=forwarded
</code></pre>

<table>
<thead>
<tr><th>Header</th><th>Mục đích</th><th>Flag</th></tr>
</thead>
<tbody>
<tr><td><code>X-Forwarded-For</code></td><td>Client IP address</td><td><code>xforwarded</code></td></tr>
<tr><td><code>X-Forwarded-Proto</code></td><td>Original protocol (http/https)</td><td><code>xforwarded</code></td></tr>
<tr><td><code>X-Forwarded-Host</code></td><td>Original hostname</td><td><code>xforwarded</code></td></tr>
<tr><td><code>X-Forwarded-Port</code></td><td>Original port</td><td><code>xforwarded</code></td></tr>
<tr><td><code>Forwarded</code></td><td>RFC 7239 combined header</td><td><code>forwarded</code></td></tr>
</tbody>
</table>

<h3 id="52-nginx-reverse-proxy-config"><strong>5.2 Nginx Reverse Proxy Config</strong></h3>

<pre><code class="language-nginx"># /etc/nginx/conf.d/keycloak.conf
upstream keycloak_backend {
    server keycloak-1:8443;
    server keycloak-2:8443;
    # Sticky session based on KEYCLOAK_SESSION cookie
    sticky cookie KEYCLOAK_ROUTE expires=1h domain=.example.com httponly secure;
}

server {
    listen 443 ssl http2;
    server_name auth.example.com;

    ssl_certificate     /etc/nginx/certs/tls.crt;
    ssl_certificate_key /etc/nginx/certs/tls.key;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options SAMEORIGIN;

    # Buffer sizes cho Keycloak (tokens có thể lớn)
    proxy_buffer_size        128k;
    proxy_buffers            4 256k;
    proxy_busy_buffers_size  256k;
    large_client_header_buffers 4 16k;

    location / {
        proxy_pass https://keycloak_backend;

        # X-Forwarded headers
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_set_header X-Forwarded-Host   $host;
        proxy_set_header X-Forwarded-Port   $server_port;

        # WebSocket support (cho Admin Console)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
    }
}
</code></pre>

<h3 id="53-http2-support"><strong>5.3 HTTP/2 Support</strong></h3>

<pre><code class="language-bash"># Enable HTTP/2 (default đã enabled khi dùng HTTPS)
bin/kc.sh start --optimized \
  --hostname=auth.example.com \
  --https-certificate-file=/certs/tls.crt \
  --https-certificate-key-file=/certs/tls.key \
  --http-enabled=false

# Nếu cần HTTP/2 cleartext (h2c) cho internal communication
bin/kc.sh start --optimized \
  --hostname=auth.example.com \
  --http-enabled=true \
  --http-port=8080
</code></pre>

<h2 id="6-jvm-tuning"><strong>6. JVM Tuning</strong></h2>

<h3 id="61-heap-configuration"><strong>6.1 Heap Configuration</strong></h3>

<p>Keycloak chạy trên Quarkus/JVM, vì vậy JVM tuning ảnh hưởng trực tiếp đến performance và stability:</p>

<pre><code class="language-bash"># JVM Heap - sử dụng JAVA_OPTS_KC_HEAP (Keycloak 25+)
export JAVA_OPTS_KC_HEAP="-XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=70.0"

# Hoặc set fixed heap size
export JAVA_OPTS_KC_HEAP="-Xms512m -Xmx2g"
</code></pre>

<h3 id="62-garbage-collector-selection"><strong>6.2 Garbage Collector Selection</strong></h3>

<pre><code class="language-bash"># Option 1: G1GC (recommended cho heap ≤ 4GB)
export JAVA_OPTS_APPEND="-XX:+UseG1GC \
  -XX:MaxGCPauseMillis=200 \
  -XX:G1HeapRegionSize=16m \
  -XX:+ParallelRefProcEnabled \
  -XX:+UseStringDeduplication"

# Option 2: ZGC (recommended cho heap > 4GB, low-latency)
export JAVA_OPTS_APPEND="-XX:+UseZGC \
  -XX:+ZGenerational \
  -XX:ConcGCThreads=2"

# Option 3: Shenandoah GC (alternative low-latency)
export JAVA_OPTS_APPEND="-XX:+UseShenandoahGC \
  -XX:ShenandoahGCHeuristics=compact"
</code></pre>

<table>
<thead>
<tr><th>GC Algorithm</th><th>Best For</th><th>Heap Size</th><th>Pause Time</th></tr>
</thead>
<tbody>
<tr><td>G1GC</td><td>General purpose, balanced throughput/latency</td><td>≤ 4GB</td><td>~200ms</td></tr>
<tr><td>ZGC</td><td>Low-latency, large heap</td><td>&gt; 4GB</td><td>&lt; 1ms</td></tr>
<tr><td>Shenandoah</td><td>Low-latency, concurrent</td><td>&gt; 2GB</td><td>&lt; 10ms</td></tr>
</tbody>
</table>

<h3 id="63-container-aware-jvm-settings"><strong>6.3 Container-Aware JVM Settings</strong></h3>

<pre><code class="language-bash"># Container-aware JVM settings (Docker/Kubernetes)
export JAVA_OPTS_APPEND=" \
  -XX:+UseContainerSupport \
  -XX:MaxRAMPercentage=70.0 \
  -XX:InitialRAMPercentage=50.0 \
  -XX:MinRAMPercentage=50.0 \
  -XX:ActiveProcessorCount=2 \
  -XX:+UseG1GC \
  -XX:MaxGCPauseMillis=200 \
  -Djava.net.preferIPv4Stack=true \
  -Djava.awt.headless=true \
  -Dfile.encoding=UTF-8"
</code></pre>

<h3 id="64-complete-jvm-configuration"><strong>6.4 Complete JVM Configuration</strong></h3>

<pre><code class="language-bash"># Production JVM configuration hoàn chỉnh
export JAVA_OPTS_KC_HEAP="-XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=70.0"

export JAVA_OPTS_APPEND=" \
  -XX:+UseG1GC \
  -XX:MaxGCPauseMillis=200 \
  -XX:G1HeapRegionSize=16m \
  -XX:+ParallelRefProcEnabled \
  -XX:+UseStringDeduplication \
  -XX:+UseContainerSupport \
  -XX:ActiveProcessorCount=2 \
  -XX:MetaspaceSize=256m \
  -XX:MaxMetaspaceSize=512m \
  -Djava.net.preferIPv4Stack=true \
  -Djava.awt.headless=true \
  -Dfile.encoding=UTF-8 \
  -XX:+ExitOnOutOfMemoryError \
  -XX:+HeapDumpOnOutOfMemoryError \
  -XX:HeapDumpPath=/opt/keycloak/dumps/"
</code></pre>

<h2 id="7-quarkus-thread-pool-va-vertx"><strong>7. Quarkus Thread Pool và Vert.x</strong></h2>

<p>Keycloak chạy trên Quarkus (Vert.x event loop + worker thread pool). Hiểu mô hình này giúp tuning chính xác:</p>

<pre><code class="language-text">┌───────────────────────────────────────────────────────┐
│                  Keycloak / Quarkus                    │
│                                                       │
│  ┌─────────────────────────────────────────────────┐  │
│  │          Vert.x Event Loop Threads              │  │
│  │  (IO_THREADS = 2 × CPU cores, default)          │  │
│  │  - Accept connections                           │  │
│  │  - Parse HTTP requests                          │  │
│  │  - Non-blocking operations                      │  │
│  └──────────────┬──────────────────────────────────┘  │
│                  │ delegate blocking work              │
│  ┌──────────────▼──────────────────────────────────┐  │
│  │          Worker Thread Pool                     │  │
│  │  (WORKER_THREADS = 8 × CPU cores, default)      │  │
│  │  - Database queries                             │  │
│  │  - LDAP calls                                   │  │
│  │  - Token signing/validation                     │  │
│  │  - Template rendering                           │  │
│  └─────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────┘
</code></pre>

<pre><code class="language-bash"># Quarkus thread pool configuration (qua Java system properties)
export JAVA_OPTS_APPEND=" \
  -Dquarkus.thread-pool.max-threads=200 \
  -Dquarkus.thread-pool.queue-size=1000 \
  -Dquarkus.thread-pool.growth-resistance=0.1 \
  -Dquarkus.vertx.event-loops-pool-size=4"
</code></pre>

<table>
<thead>
<tr><th>Parameter</th><th>Default</th><th>Mô tả</th></tr>
</thead>
<tbody>
<tr><td><code>quarkus.thread-pool.max-threads</code></td><td>200 (hoặc 8 × CPU max)</td><td>Max worker threads</td></tr>
<tr><td><code>quarkus.thread-pool.queue-size</code></td><td>unbounded</td><td>Queue size khi tất cả threads busy</td></tr>
<tr><td><code>quarkus.thread-pool.growth-resistance</code></td><td>0</td><td>0–1, thread pool grow resistance</td></tr>
<tr><td><code>quarkus.vertx.event-loops-pool-size</code></td><td>2 × CPU</td><td>Vert.x event loop threads</td></tr>
</tbody>
</table>

<h2 id="8-infinispan-local-cache-tuning"><strong>8. Infinispan Local Cache Tuning</strong></h2>

<h3 id="81-keycloak-cache-architecture"><strong>8.1 Keycloak Cache Architecture</strong></h3>

<p>Keycloak sử dụng Infinispan local caches để cache metadata (realms, users, keys...) nhằm giảm database queries. Tuning cache size và lifespan ảnh hưởng lớn đến performance:</p>

<pre><code class="language-text">┌─────────────────────────────────────────────────────────────┐
│                 Infinispan Local Caches                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │    realms     │  │    users     │  │  authorization   │  │
│  │  (realm cfg)  │  │ (user data)  │  │ (permissions)    │  │
│  │  max: 10000   │  │  max: 10000  │  │  max: 10000      │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
│                                                             │
│  ┌──────────────┐  ┌──────────────────────────────────────┐ │
│  │    keys       │  │        Revision Caches               │ │
│  │  (crypto)     │  │  (realmRevisions, userRevisions,     │ │
│  │  max: 1000    │  │   authorizationRevisions)            │ │
│  └──────────────┘  └──────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
</code></pre>

<h3 id="82-custom-cache-configuration"><strong>8.2 Custom Cache Configuration</strong></h3>

<p>Tạo file <code>cache-ispn.xml</code> tùy chỉnh:</p>

<pre><code class="language-xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;infinispan
    xmlns="urn:infinispan:config:15.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="urn:infinispan:config:15.0
        https://infinispan.org/schemas/infinispan-config-15.0.xsd"&gt;

    &lt;cache-container name="keycloak"&gt;
        &lt;!-- Realm cache - cache metadata realm --&gt;
        &lt;local-cache name="realms"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="20000"/&gt;
        &lt;/local-cache&gt;

        &lt;!-- User cache - cache user data --&gt;
        &lt;local-cache name="users"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="20000"/&gt;
        &lt;/local-cache&gt;

        &lt;!-- Authorization cache --&gt;
        &lt;local-cache name="authorization"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="20000"/&gt;
        &lt;/local-cache&gt;

        &lt;!-- Keys cache - signing/encryption keys --&gt;
        &lt;local-cache name="keys"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="5000"/&gt;
            &lt;expiration max-idle="3600000"/&gt; &lt;!-- 1 hour --&gt;
        &lt;/local-cache&gt;

        &lt;!-- Revision caches - invalidation tracking --&gt;
        &lt;local-cache name="realmRevisions"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="40000"/&gt;
        &lt;/local-cache&gt;

        &lt;local-cache name="userRevisions"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="40000"/&gt;
        &lt;/local-cache&gt;

        &lt;local-cache name="authorizationRevisions"&gt;
            &lt;encoding&gt;
                &lt;key media-type="application/x-java-object"/&gt;
                &lt;value media-type="application/x-java-object"/&gt;
            &lt;/encoding&gt;
            &lt;memory max-count="40000"/&gt;
        &lt;/local-cache&gt;
    &lt;/cache-container&gt;
&lt;/infinispan&gt;
</code></pre>

<pre><code class="language-bash"># Sử dụng custom cache config
bin/kc.sh build --cache=ispn --cache-config-file=cache-ispn.xml
bin/kc.sh start --optimized
</code></pre>

<h2 id="9-metrics-va-health-checks"><strong>9. Metrics và Health Checks</strong></h2>

<h3 id="91-metrics-endpoint"><strong>9.1 Metrics Endpoint</strong></h3>

<pre><code class="language-bash"># Enable metrics (cần set khi build)
bin/kc.sh build --metrics-enabled=true
bin/kc.sh start --optimized
</code></pre>

<p>Metrics endpoint: <code>https://auth.example.com/metrics</code> (Prometheus format)</p>

<pre><code class="language-text"># Ví dụ metrics output
# HELP keycloak_logins_total Total successful logins
# TYPE keycloak_logins_total counter
keycloak_logins_total{realm="my-realm",provider="keycloak",client_id="my-app"} 1523

# HELP keycloak_failed_login_attempts_total Total failed login attempts
# TYPE keycloak_failed_login_attempts_total counter
keycloak_failed_login_attempts_total{realm="my-realm",provider="keycloak",client_id="my-app",error="invalid_user_credentials"} 42

# HELP vendor_memoryPool_usage_max_bytes Peak JVM memory pool usage
# TYPE vendor_memoryPool_usage_max_bytes gauge
vendor_memoryPool_usage_max_bytes{name="G1 Old Gen"} 524288000

# HELP vendor_cpu_processCpuLoad JVM Process CPU load
# TYPE vendor_cpu_processCpuLoad gauge
vendor_cpu_processCpuLoad 0.15
</code></pre>

<h3 id="92-health-check-endpoints"><strong>9.2 Health Check Endpoints</strong></h3>

<pre><code class="language-bash"># Enable health checks (cần set khi build)
bin/kc.sh build --health-enabled=true
</code></pre>

<table>
<thead>
<tr><th>Endpoint</th><th>Mục đích</th><th>Kubernetes Probe</th></tr>
</thead>
<tbody>
<tr><td><code>/health/ready</code></td><td>Readiness - sẵn sàng nhận traffic</td><td>readinessProbe</td></tr>
<tr><td><code>/health/live</code></td><td>Liveness - process còn hoạt động</td><td>livenessProbe</td></tr>
<tr><td><code>/health/started</code></td><td>Startup - đã khởi động xong</td><td>startupProbe</td></tr>
<tr><td><code>/health</code></td><td>Combined health status</td><td>—</td></tr>
</tbody>
</table>

<pre><code class="language-json">// GET /health/ready - Response khi healthy
{
  "status": "UP",
  "checks": [
    {
      "name": "Keycloak database connections health check",
      "status": "UP"
    }
  ]
}

// GET /health/ready - Response khi unhealthy
{
  "status": "DOWN",
  "checks": [
    {
      "name": "Keycloak database connections health check",
      "status": "DOWN",
      "data": {
        "message": "Unable to connect to database"
      }
    }
  ]
}
</code></pre>

<h2 id="10-load-testing-voi-gatling"><strong>10. Load Testing với Gatling</strong></h2>

<h3 id="101-keycloak-benchmark-project"><strong>10.1 Keycloak Benchmark Project</strong></h3>

<p>Keycloak cung cấp official benchmark project dựa trên Gatling framework:</p>

<pre><code class="language-bash"># Clone Keycloak benchmark
git clone https://github.com/keycloak/keycloak-benchmark.git
cd keycloak-benchmark

# Build benchmark
mvn clean install -DskipTests

# Run token endpoint benchmark
cd benchmark
mvn gatling:test \
  -Dgatling.simulationClass=keycloak.scenario.authentication.ClientSecret \
  -Dkeycloak.server.url=https://auth.example.com \
  -Drealm=benchmark-realm \
  -DclientId=benchmark-client \
  -DclientSecret=benchmark-secret \
  -DusersPerSec=50 \
  -DrampUpPeriod=30 \
  -DwarmUpPeriod=60 \
  -DmeasurementPeriod=180
</code></pre>

<h3 id="102-custom-gatling-simulation"><strong>10.2 Custom Gatling Simulation</strong></h3>

<pre><code class="language-scala">// KeycloakLoadTest.scala
package keycloak.benchmark

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class KeycloakTokenEndpointSimulation extends Simulation {

  val keycloakUrl = System.getProperty("keycloak.url", "https://auth.example.com")
  val realm = System.getProperty("realm", "my-realm")
  val clientId = System.getProperty("clientId", "benchmark-client")
  val clientSecret = System.getProperty("clientSecret", "benchmark-secret")

  val httpProtocol = http
    .baseUrl(keycloakUrl)
    .acceptHeader("application/json")
    .contentTypeHeader("application/x-www-form-urlencoded")
    .disableFollowRedirect

  // Scenario 1: Client Credentials Grant (service-to-service)
  val clientCredentialsScenario = scenario("Client Credentials Flow")
    .exec(
      http("Token Request - Client Credentials")
        .post(s"/realms/$realm/protocol/openid-connect/token")
        .formParam("grant_type", "client_credentials")
        .formParam("client_id", clientId)
        .formParam("client_secret", clientSecret)
        .check(status.is(200))
        .check(jsonPath("$.access_token").exists)
        .check(responseTimeInMillis.lte(500))
    )

  // Scenario 2: Resource Owner Password Grant (user login)
  val passwordGrantScenario = scenario("Resource Owner Password Flow")
    .exec(
      http("Token Request - Password Grant")
        .post(s"/realms/$realm/protocol/openid-connect/token")
        .formParam("grant_type", "password")
        .formParam("client_id", clientId)
        .formParam("client_secret", clientSecret)
        .formParam("username", "test-user")
        .formParam("password", "test-password")
        .check(status.is(200))
        .check(jsonPath("$.access_token").saveAs("accessToken"))
    )
    .pause(1.second)
    .exec(
      http("Token Introspection")
        .post(s"/realms/$realm/protocol/openid-connect/token/introspect")
        .formParam("token", "${accessToken}")
        .formParam("client_id", clientId)
        .formParam("client_secret", clientSecret)
        .check(status.is(200))
        .check(jsonPath("$.active").is("true"))
    )

  // Scenario 3: UserInfo endpoint
  val userInfoScenario = scenario("UserInfo Flow")
    .exec(
      http("Get Token")
        .post(s"/realms/$realm/protocol/openid-connect/token")
        .formParam("grant_type", "password")
        .formParam("client_id", clientId)
        .formParam("client_secret", clientSecret)
        .formParam("username", "test-user")
        .formParam("password", "test-password")
        .check(status.is(200))
        .check(jsonPath("$.access_token").saveAs("accessToken"))
    )
    .exec(
      http("UserInfo")
        .get(s"/realms/$realm/protocol/openid-connect/userinfo")
        .header("Authorization", "Bearer ${accessToken}")
        .check(status.is(200))
    )

  setUp(
    clientCredentialsScenario.inject(
      rampUsersPerSec(1).to(100).during(60.seconds),  // Ramp up
      constantUsersPerSec(100).during(180.seconds),     // Sustained load
      rampUsersPerSec(100).to(1).during(30.seconds)    // Ramp down
    ),
    passwordGrantScenario.inject(
      rampUsersPerSec(1).to(50).during(60.seconds),
      constantUsersPerSec(50).during(180.seconds),
      rampUsersPerSec(50).to(1).during(30.seconds)
    )
  ).protocols(httpProtocol)
    .assertions(
      global.responseTime.percentile3.lt(500),  // p95 < 500ms
      global.responseTime.percentile4.lt(1000), // p99 < 1000ms
      global.successfulRequests.percent.gt(99)  // > 99% success rate
    )
}
</code></pre>

<h2 id="11-production-checklist-summary"><strong>11. Production Checklist Summary</strong></h2>

<table>
<thead>
<tr><th>Category</th><th>Item</th><th>Status</th></tr>
</thead>
<tbody>
<tr><td><strong>Database</strong></td><td>PostgreSQL với connection pool tuned</td><td>☐</td></tr>
<tr><td><strong>Database</strong></td><td>Database backup automated (pg_dump / pg_basebackup)</td><td>☐</td></tr>
<tr><td><strong>Database</strong></td><td>Database replication configured</td><td>☐</td></tr>
<tr><td><strong>Build</strong></td><td><code>kc.sh build</code> + <code>start --optimized</code></td><td>☐</td></tr>
<tr><td><strong>Build</strong></td><td>Multi-stage Dockerfile</td><td>☐</td></tr>
<tr><td><strong>Hostname</strong></td><td><code>--hostname</code> configured (hostname-v2)</td><td>☐</td></tr>
<tr><td><strong>Hostname</strong></td><td><code>--hostname-admin</code> set to separate domain</td><td>☐</td></tr>
<tr><td><strong>TLS</strong></td><td>Valid TLS certificates (Let's Encrypt / CA-signed)</td><td>☐</td></tr>
<tr><td><strong>TLS</strong></td><td>TLS 1.2+ enforced, weak ciphers disabled</td><td>☐</td></tr>
<tr><td><strong>Proxy</strong></td><td><code>--proxy-headers</code> configured correctly</td><td>☐</td></tr>
<tr><td><strong>JVM</strong></td><td>Heap sized (50–70% container memory)</td><td>☐</td></tr>
<tr><td><strong>JVM</strong></td><td>GC algorithm selected (G1GC/ZGC)</td><td>☐</td></tr>
<tr><td><strong>JVM</strong></td><td>Container-aware flags enabled</td><td>☐</td></tr>
<tr><td><strong>JVM</strong></td><td><code>-XX:+ExitOnOutOfMemoryError</code> set</td><td>☐</td></tr>
<tr><td><strong>Cache</strong></td><td>Infinispan local caches tuned</td><td>☐</td></tr>
<tr><td><strong>Observability</strong></td><td>Metrics endpoint enabled (<code>/metrics</code>)</td><td>☐</td></tr>
<tr><td><strong>Observability</strong></td><td>Health checks enabled (<code>/health/*</code>)</td><td>☐</td></tr>
<tr><td><strong>Observability</strong></td><td>Logging configured (JSON format, log level)</td><td>☐</td></tr>
<tr><td><strong>Security</strong></td><td>Admin Console on separate domain/network</td><td>☐</td></tr>
<tr><td><strong>Security</strong></td><td>Default admin credentials changed</td><td>☐</td></tr>
<tr><td><strong>Security</strong></td><td>Brute force protection enabled</td><td>☐</td></tr>
<tr><td><strong>Security</strong></td><td>CORS configured correctly</td><td>☐</td></tr>
<tr><td><strong>Load Test</strong></td><td>Gatling benchmark passed (p95 &lt; 500ms)</td><td>☐</td></tr>
<tr><td><strong>Load Test</strong></td><td>Capacity planning documented</td><td>☐</td></tr>
<tr><td><strong>Backup</strong></td><td>Realm export automated</td><td>☐</td></tr>
<tr><td><strong>Backup</strong></td><td>Disaster recovery plan tested</td><td>☐</td></tr>
</tbody>
</table>

<pre><code class="language-bash"># Complete production start command
bin/kc.sh start --optimized \
  --db=postgres \
  --db-url="jdbc:postgresql://db-host:5432/keycloak?ssl=true" \
  --db-username=keycloak \
  --db-password="${KC_DB_PASSWORD}" \
  --db-pool-initial-size=25 \
  --db-pool-min-size=25 \
  --db-pool-max-size=100 \
  --hostname=auth.example.com \
  --hostname-admin=admin-auth.internal.example.com \
  --hostname-strict=true \
  --proxy-headers=xforwarded \
  --https-certificate-file=/certs/tls.crt \
  --https-certificate-key-file=/certs/tls.key \
  --http-enabled=false \
  --health-enabled=true \
  --metrics-enabled=true \
  --log=console \
  --log-level=info \
  --log-console-output=json
</code></pre>

<pre><code class="language-bash"># Docker Compose cho production
# docker-compose.production.yml
</code></pre>

<pre><code class="language-yaml">version: "3.9"

services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: keycloak
      POSTGRES_USER: keycloak
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    volumes:
      - pgdata:/var/lib/postgresql/data
      - ./postgresql.conf:/etc/postgresql/postgresql.conf
    command: postgres -c config_file=/etc/postgresql/postgresql.conf
    secrets:
      - db_password
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U keycloak"]
      interval: 10s
      timeout: 5s
      retries: 5
    deploy:
      resources:
        limits:
          cpus: "2.0"
          memory: 4G

  keycloak:
    image: my-registry/keycloak-production:26.0
    build:
      context: .
      dockerfile: Dockerfile.keycloak
    environment:
      KC_DB_URL: jdbc:postgresql://postgres:5432/keycloak
      KC_DB_USERNAME: keycloak
      KC_DB_PASSWORD_FILE: /run/secrets/db_password
      KC_DB_POOL_INITIAL_SIZE: "25"
      KC_DB_POOL_MIN_SIZE: "25"
      KC_DB_POOL_MAX_SIZE: "100"
      KC_HOSTNAME: auth.example.com
      KC_HOSTNAME_ADMIN: admin-auth.internal.example.com
      KC_PROXY_HEADERS: xforwarded
      KC_HTTPS_CERTIFICATE_FILE: /certs/tls.crt
      KC_HTTPS_CERTIFICATE_KEY_FILE: /certs/tls.key
      KC_HTTP_ENABLED: "false"
      KC_LOG: console
      KC_LOG_LEVEL: info
      KC_LOG_CONSOLE_OUTPUT: json
      JAVA_OPTS_KC_HEAP: "-XX:InitialRAMPercentage=50.0 -XX:MaxRAMPercentage=70.0"
      JAVA_OPTS_APPEND: >-
        -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -XX:+UseContainerSupport
        -XX:+ExitOnOutOfMemoryError -Djava.net.preferIPv4Stack=true
    volumes:
      - ./certs:/certs:ro
    secrets:
      - db_password
    ports:
      - "8443:8443"
    depends_on:
      postgres:
        condition: service_healthy
    healthcheck:
      test: ["CMD-SHELL", "curl -sf https://localhost:8443/health/ready || exit 1"]
      interval: 15s
      timeout: 5s
      retries: 5
      start_period: 120s
    deploy:
      resources:
        limits:
          cpus: "2.0"
          memory: 2G

volumes:
  pgdata:

secrets:
  db_password:
    file: ./secrets/db_password.txt
</code></pre>
