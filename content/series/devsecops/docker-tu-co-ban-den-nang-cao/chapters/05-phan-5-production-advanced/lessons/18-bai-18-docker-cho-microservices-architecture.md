---
id: 019d8a21-a118-7001-b001-d0c4e7000118
title: 'Bài 18: Docker cho Microservices Architecture'
slug: bai-18-docker-cho-microservices-architecture
description: >-
  Thiết kế microservices với Docker, service discovery, API gateway với Traefik
  và Kong, distributed tracing với Jaeger, circuit breaker pattern, event-driven
  architecture, sidecar pattern và real-world microservices project.
duration_minutes: 240
is_free: true
video_url: null
sort_order: 18
section_title: "Phần 5: Production và Advanced Topics"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-1211" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-1211)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1011" cy="123" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="922" cy="154" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="833" cy="185" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="744" cy="216" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="247" r="26" fill="#34d399" opacity="0.1"/>
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
    <line x1="600" y1="53" x2="1100" y2="133" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="83" x2="1050" y2="153" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="977.2487113059643,139 977.2487113059643,167 953,181 928.7512886940357,167 928.7512886940357,139 953,125" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">🔒 DevSecOps — Bài 18</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 18: Docker cho Microservices</tspan>
      <tspan x="60" dy="42">Architecture</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Docker từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 5: Production và Advanced Topics</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-microservices-overview"><strong>1. Microservices với Docker - Tổng quan</strong></h2>
<p>Docker là nền tảng lý tưởng cho microservices architecture vì mỗi service được đóng gói trong container riêng biệt, có thể develop, deploy và scale độc lập.</p>

<h3><strong>Monolith vs Microservices</strong></h3>
<pre><code>Monolith:                    Microservices:
┌──────────────────┐         ┌───────┐  ┌───────┐
│   User Module    │         │ User  │  │ Order │
│   Order Module   │   →     │Service│  │Service│
│   Product Module │         └───────┘  └───────┘
│   Payment Module │         ┌───────┐  ┌───────┐
│   Notification   │         │Product│  │Payment│
└──────────────────┘         │Service│  │Service│
   1 container               └───────┘  └───────┘
                              4+ containers
</code></pre>

<h2 id="2-microservices-project"><strong>2. Microservices Project Structure</strong></h2>
<pre><code class="language-bash">ecommerce-microservices/
├── docker-compose.yml          # Orchestration
├── docker-compose.dev.yml      # Dev overrides
├── docker-compose.prod.yml     # Production overrides
├── .env
├── services/
│   ├── api-gateway/
│   │   ├── Dockerfile
│   │   ├── nginx.conf
│   │   └── ...
│   ├── user-service/
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   └── src/
│   ├── product-service/
│   │   ├── Dockerfile
│   │   ├── requirements.txt
│   │   └── app/
│   ├── order-service/
│   │   ├── Dockerfile
│   │   ├── pom.xml
│   │   └── src/
│   └── notification-service/
│       ├── Dockerfile
│       └── ...
├── infrastructure/
│   ├── postgres/
│   ├── redis/
│   ├── rabbitmq/
│   └── monitoring/
└── scripts/
    ├── init-db.sh
    └── seed-data.sh
</code></pre>

<h2 id="3-service-discovery"><strong>3. Service Discovery</strong></h2>
<p>Docker Compose cung cấp built-in DNS service discovery:</p>
<pre><code class="language-yaml"># docker-compose.yml
services:
  user-service:
    build: ./services/user-service
    networks:
      - internal

  order-service:
    build: ./services/order-service
    environment:
      USER_SERVICE_URL: http://user-service:3000
      PRODUCT_SERVICE_URL: http://product-service:8000
    networks:
      - internal

  product-service:
    build: ./services/product-service
    networks:
      - internal

networks:
  internal:
    driver: bridge
</code></pre>

<h3><strong>Consul Service Discovery</strong></h3>
<pre><code class="language-yaml">services:
  consul:
    image: hashicorp/consul:1.18
    ports:
      - "8500:8500"
    command: agent -server -bootstrap-expect=1 -ui -client=0.0.0.0

  user-service:
    build: ./services/user-service
    environment:
      CONSUL_HTTP_ADDR: consul:8500
    depends_on:
      - consul
</code></pre>

<h2 id="4-api-gateway-traefik"><strong>4. API Gateway với Traefik</strong></h2>
<pre><code class="language-yaml"># docker-compose.yml
services:
  traefik:
    image: traefik:v3.1
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedByDefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge=true"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web"
      - "--certificatesresolvers.letsencrypt.acme.email=admin@example.com"
      - "--certificatesresolvers.letsencrypt.acme.storage=/acme/acme.json"
    ports:
      - "80:80"
      - "443:443"
      - "8080:8080"  # Dashboard
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - acme-data:/acme
    networks:
      - proxy

  user-service:
    build: ./services/user-service
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.user.rule=PathPrefix(`/api/users`)"
      - "traefik.http.routers.user.entrypoints=web"
      - "traefik.http.services.user.loadbalancer.server.port=3000"
    networks:
      - proxy
      - internal

  product-service:
    build: ./services/product-service
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.product.rule=PathPrefix(`/api/products`)"
      - "traefik.http.routers.product.entrypoints=web"
      - "traefik.http.services.product.loadbalancer.server.port=8000"
    deploy:
      replicas: 2
    networks:
      - proxy
      - internal

  order-service:
    build: ./services/order-service
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.order.rule=PathPrefix(`/api/orders`)"
      - "traefik.http.routers.order.entrypoints=web"
      - "traefik.http.services.order.loadbalancer.server.port=8080"
    networks:
      - proxy
      - internal

networks:
  proxy:
    driver: bridge
  internal:
    driver: bridge

volumes:
  acme-data:
</code></pre>

<h2 id="5-api-gateway-kong"><strong>5. API Gateway với Kong</strong></h2>
<pre><code class="language-yaml">services:
  kong-database:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: kong
      POSTGRES_USER: kong
      POSTGRES_PASSWORD_FILE: /run/secrets/kong_db_pass
    volumes:
      - kong-db:/var/lib/postgresql/data
    secrets:
      - kong_db_pass

  kong:
    image: kong:3.7
    environment:
      KONG_DATABASE: postgres
      KONG_PG_HOST: kong-database
      KONG_PG_USER: kong
      KONG_PROXY_ACCESS_LOG: /dev/stdout
      KONG_ADMIN_ACCESS_LOG: /dev/stdout
      KONG_PROXY_ERROR_LOG: /dev/stderr
      KONG_ADMIN_ERROR_LOG: /dev/stderr
      KONG_ADMIN_LISTEN: "0.0.0.0:8001"
    ports:
      - "8000:8000"   # Proxy
      - "8001:8001"   # Admin API
    depends_on:
      - kong-database

volumes:
  kong-db:
</code></pre>

<h2 id="6-message-queue"><strong>6. Event-Driven Architecture</strong></h2>
<pre><code class="language-yaml"># Message queue cho async communication
services:
  rabbitmq:
    image: rabbitmq:3.13-management-alpine
    ports:
      - "5672:5672"     # AMQP
      - "15672:15672"   # Management UI
    environment:
      RABBITMQ_DEFAULT_USER: admin
      RABBITMQ_DEFAULT_PASS_FILE: /run/secrets/rabbitmq_pass
    volumes:
      - rabbitmq-data:/var/lib/rabbitmq
    secrets:
      - rabbitmq_pass

  order-service:
    build: ./services/order-service
    environment:
      RABBITMQ_URL: amqp://admin:${RABBITMQ_PASS}@rabbitmq:5672
    depends_on:
      - rabbitmq

  notification-service:
    build: ./services/notification-service
    environment:
      RABBITMQ_URL: amqp://admin:${RABBITMQ_PASS}@rabbitmq:5672
    depends_on:
      - rabbitmq
</code></pre>

<h3><strong>Event Flow</strong></h3>
<pre><code>Order Created:
┌─────────────┐    publish     ┌──────────┐    consume    ┌──────────────────┐
│ Order       │ ──────────→    │ RabbitMQ │ ──────────→   │ Notification     │
│ Service     │  order.created │ Exchange │               │ Service          │
└─────────────┘                │  Queue   │ ──────────→   │ (email/sms)      │
                               └──────────┘  consume      └──────────────────┘
                                             │             ┌──────────────────┐
                                             └──────────→  │ Inventory        │
                                               consume     │ Service          │
                                                           └──────────────────┘
</code></pre>

<h2 id="7-distributed-tracing"><strong>7. Distributed Tracing với Jaeger</strong></h2>
<pre><code class="language-yaml">services:
  jaeger:
    image: jaegertracing/all-in-one:1.55
    ports:
      - "16686:16686"  # Jaeger UI
      - "4318:4318"    # OTLP HTTP
    environment:
      COLLECTOR_OTLP_ENABLED: true

  user-service:
    build: ./services/user-service
    environment:
      OTEL_EXPORTER_OTLP_ENDPOINT: http://jaeger:4318
      OTEL_SERVICE_NAME: user-service

  order-service:
    build: ./services/order-service
    environment:
      OTEL_EXPORTER_OTLP_ENDPOINT: http://jaeger:4318
      OTEL_SERVICE_NAME: order-service
</code></pre>

<h2 id="8-circuit-breaker"><strong>8. Circuit Breaker Pattern</strong></h2>
<pre><code class="language-javascript">// Sử dụng opossum (Node.js circuit breaker)
const CircuitBreaker = require('opossum');

const options = {
  timeout: 3000,          // 3 second timeout
  errorThresholdPercentage: 50, // Open circuit at 50% failures
  resetTimeout: 10000     // Try again after 10 seconds
};

const breaker = new CircuitBreaker(callUserService, options);

breaker.on('open', () => console.log('Circuit OPEN - calls blocked'));
breaker.on('halfOpen', () => console.log('Circuit HALF-OPEN - testing'));
breaker.on('close', () => console.log('Circuit CLOSED - normal'));

// Fallback khi circuit open
breaker.fallback(() => ({
  status: 'service unavailable',
  data: getCachedData()
}));

async function getUser(userId) {
  return breaker.fire(userId);
}
</code></pre>

<h2 id="9-sidecar-pattern"><strong>9. Sidecar Pattern</strong></h2>
<pre><code class="language-yaml"># Sidecar cho logging, proxy, etc.
services:
  api:
    build: ./services/api
    networks:
      - internal

  api-sidecar:
    image: envoyproxy/envoy:v1.30-latest
    volumes:
      - ./envoy.yaml:/etc/envoy/envoy.yaml
    network_mode: "service:api"

  log-collector:
    image: fluent/fluent-bit:3.0
    volumes:
      - /var/lib/docker/containers:/var/lib/docker/containers:ro
    networks:
      - internal
</code></pre>

<h2 id="10-health-checks"><strong>10. Health Checks cho Microservices</strong></h2>
<pre><code class="language-yaml">services:
  user-service:
    build: ./services/user-service
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  order-service:
    build: ./services/order-service
    healthcheck:
      test: ["CMD", "wget", "--spider", "-q", "http://localhost:8080/actuator/health"]
      interval: 30s
      timeout: 10s
      retries: 3
    depends_on:
      user-service:
        condition: service_healthy
      postgres:
        condition: service_healthy

  postgres:
    image: postgres:16-alpine
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
</code></pre>

<h2 id="11-database-per-service"><strong>11. Database per Service</strong></h2>
<pre><code class="language-yaml"># Mỗi service có database riêng
services:
  user-db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: users
      POSTGRES_USER: user_svc
    volumes:
      - user-db-data:/var/lib/postgresql/data
    networks:
      - user-net

  user-service:
    build: ./services/user-service
    environment:
      DATABASE_URL: postgresql://user_svc:pass@user-db:5432/users
    networks:
      - user-net
      - internal

  product-db:
    image: mongo:7.0
    volumes:
      - product-db-data:/data/db
    networks:
      - product-net

  product-service:
    build: ./services/product-service
    environment:
      MONGO_URI: mongodb://product-db:27017/products
    networks:
      - product-net
      - internal

  order-db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: orders
    volumes:
      - order-db-data:/var/lib/postgresql/data
    networks:
      - order-net

networks:
  user-net:
  product-net:
  order-net:
  internal:

volumes:
  user-db-data:
  product-db-data:
  order-db-data:
</code></pre>

<h2 id="12-tong-ket"><strong>12. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã học:</p>
<ul>
<li><p>Thiết kế microservices project structure</p></li>
<li><p>Service discovery với Docker DNS và Consul</p></li>
<li><p>API Gateway với Traefik và Kong</p></li>
<li><p>Event-driven architecture với RabbitMQ</p></li>
<li><p>Distributed tracing (Jaeger), circuit breaker</p></li>
<li><p>Sidecar pattern, health checks, database per service</p></li>
</ul>
<p>Bài tiếp theo: Docker với Kubernetes - Migration Path</p>
