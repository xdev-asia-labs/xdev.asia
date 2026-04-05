---
id: 019d8a21-a114-7001-b001-d0c4e7000114
title: 'Bài 14: Docker Logging và Monitoring'
slug: bai-14-docker-logging-va-monitoring
description: >-
  Docker logging drivers (json-file, syslog, fluentd, gelf), centralized
  logging với ELK/EFK Stack, container metrics với cAdvisor, Prometheus +
  Grafana dashboards, Docker events, health monitoring và alerting strategies.
duration_minutes: 200
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: Security, Monitoring và CI/CD"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7894" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7894)"/>

  <!-- Decorations -->
  <g>
    <circle cx="906" cy="228" r="34" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="712" cy="34" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="1018" cy="100" r="30" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="824" cy="166" r="28" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="630" cy="232" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="88" x2="1100" y2="168" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="118" x2="1050" y2="188" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1025.2390923627308,166.5 1025.2390923627308,209.5 988,231 950.7609076372692,209.5 950.7609076372692,166.5 988,145" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">🔒 DevSecOps — Bài 14</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 14: Docker Logging và Monitoring</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Docker từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 4: Security, Monitoring và CI/CD</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-docker-logging"><strong>1. Docker Logging</strong></h2>
<p>Docker capture stdout và stderr của container process và lưu trữ thông qua logging drivers.</p>

<h3><strong>1.1. Logging Drivers</strong></h3>
<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th>Driver</th>
<th>Mô tả</th>
<th>Use case</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>json-file</strong></td>
<td>Default, lưu JSON files trên host</td>
<td>Development, small deployments</td>
</tr>
<tr>
<td><strong>syslog</strong></td>
<td>Gửi logs tới syslog daemon</td>
<td>Linux servers với rsyslog</td>
</tr>
<tr>
<td><strong>journald</strong></td>
<td>Gửi logs tới systemd journal</td>
<td>Systems dùng systemd</td>
</tr>
<tr>
<td><strong>fluentd</strong></td>
<td>Gửi logs tới Fluentd/Fluent Bit</td>
<td>EFK Stack</td>
</tr>
<tr>
<td><strong>gelf</strong></td>
<td>Graylog Extended Log Format</td>
<td>Graylog</td>
</tr>
<tr>
<td><strong>awslogs</strong></td>
<td>Amazon CloudWatch Logs</td>
<td>AWS deployments</td>
</tr>
<tr>
<td><strong>none</strong></td>
<td>Disable logging</td>
<td>Performance-critical</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3><strong>1.2. Cấu hình Logging Driver</strong></h3>
<pre><code class="language-json">// /etc/docker/daemon.json - Global default
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3",
    "compress": "true"
  }
}
</code></pre>

<pre><code class="language-bash"># Per-container logging driver
docker run -d \
    --log-driver=json-file \
    --log-opt max-size=10m \
    --log-opt max-file=3 \
    myapp
</code></pre>

<pre><code class="language-yaml"># Docker Compose
services:
  api:
    image: myapp:latest
    logging:
      driver: json-file
      options:
        max-size: "10m"
        max-file: "3"
</code></pre>

<h2 id="2-centralized-logging"><strong>2. Centralized Logging</strong></h2>

<h3><strong>2.1. EFK Stack (Elasticsearch + Fluent Bit + Kibana)</strong></h3>
<pre><code class="language-yaml"># docker-compose.yml - EFK Stack
services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:8.15.0
    environment:
      - discovery.type=single-node
      - ES_JAVA_OPTS=-Xms512m -Xmx512m
      - xpack.security.enabled=false
    volumes:
      - es-data:/usr/share/elasticsearch/data
    ports:
      - "9200:9200"

  fluent-bit:
    image: fluent/fluent-bit:3.1
    volumes:
      - ./fluent-bit.conf:/fluent-bit/etc/fluent-bit.conf:ro
    ports:
      - "24224:24224"
    depends_on:
      - elasticsearch

  kibana:
    image: docker.elastic.co/kibana/kibana:8.15.0
    environment:
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch

  # Application gửi logs tới fluent-bit
  api:
    image: myapp:latest
    logging:
      driver: fluentd
      options:
        fluentd-address: "localhost:24224"
        tag: "app.api"

volumes:
  es-data:
</code></pre>

<h3><strong>2.2. Loki + Grafana (Lightweight alternative)</strong></h3>
<pre><code class="language-yaml">services:
  loki:
    image: grafana/loki:3.0.0
    ports:
      - "3100:3100"
    volumes:
      - loki-data:/loki

  grafana:
    image: grafana/grafana:11.0.0
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
    volumes:
      - grafana-data:/var/lib/grafana

  # Install Loki Docker driver
  # docker plugin install grafana/loki-docker-driver:3.0.0 --alias loki --grant-all-permissions

  api:
    image: myapp:latest
    logging:
      driver: loki
      options:
        loki-url: "http://localhost:3100/loki/api/v1/push"
        loki-labels: "app=api,env=production"

volumes:
  loki-data:
  grafana-data:
</code></pre>

<h2 id="3-container-monitoring"><strong>3. Container Monitoring</strong></h2>

<h3><strong>3.1. cAdvisor</strong></h3>
<pre><code class="language-yaml">services:
  cadvisor:
    image: gcr.io/cadvisor/cadvisor:v0.49.1
    ports:
      - "8080:8080"
    volumes:
      - /:/rootfs:ro
      - /var/run:/var/run:ro
      - /sys:/sys:ro
      - /var/lib/docker/:/var/lib/docker:ro
      - /dev/disk/:/dev/disk:ro
    privileged: true
</code></pre>

<h3><strong>3.2. Prometheus + Grafana Stack</strong></h3>
<pre><code class="language-yaml">services:
  prometheus:
    image: prom/prometheus:v2.53.0
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml:ro
      - prometheus-data:/prometheus

  node-exporter:
    image: prom/node-exporter:v1.8.1
    ports:
      - "9100:9100"
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    command:
      - '--path.procfs=/host/proc'
      - '--path.sysfs=/host/sys'

  grafana:
    image: grafana/grafana:11.0.0
    ports:
      - "3000:3000"
    environment:
      GF_SECURITY_ADMIN_PASSWORD: admin
    volumes:
      - grafana-data:/var/lib/grafana

volumes:
  prometheus-data:
  grafana-data:
</code></pre>

<pre><code class="language-yaml"># prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'cadvisor'
    static_configs:
      - targets: ['cadvisor:8080']

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']
</code></pre>

<h2 id="4-docker-events"><strong>4. Docker Events</strong></h2>
<pre><code class="language-bash"># Real-time events
docker events

# Filter events
docker events --filter "type=container"
docker events --filter "event=die"
docker events --filter "container=my-app"

# Format output
docker events --format '{{.Time}} {{.Type}} {{.Action}} {{.Actor.Attributes.name}}'
</code></pre>

<h2 id="5-health-monitoring"><strong>5. Health Monitoring</strong></h2>
<pre><code class="language-yaml"># Comprehensive healthcheck
services:
  api:
    image: myapp:latest
    healthcheck:
      test: ["CMD", "wget", "--spider", "-q", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  db:
    image: postgres:16
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 3
</code></pre>

<pre><code class="language-bash"># Check health status
docker inspect --format='{{.State.Health.Status}}' my-app
docker ps --filter "health=unhealthy"
</code></pre>

<h2 id="6-alerting"><strong>6. Alerting Strategies</strong></h2>
<ul>
<li><p><strong>Container OOM killed</strong>: Alert khi container bị kill do out of memory</p></li>
<li><p><strong>Container restart loop</strong>: Alert khi container restart nhiều lần</p></li>
<li><p><strong>Unhealthy status</strong>: Alert khi healthcheck fail</p></li>
<li><p><strong>High CPU/Memory usage</strong>: Alert khi vượt ngưỡng</p></li>
<li><p><strong>Disk space</strong>: Alert khi Docker data directory gần đầy</p></li>
</ul>

<h2 id="7-tong-ket"><strong>7. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>Docker logging drivers và configuration</p></li>
<li><p>Centralized logging với EFK Stack và Loki</p></li>
<li><p>Container monitoring với cAdvisor, Prometheus, Grafana</p></li>
<li><p>Docker events tracking</p></li>
<li><p>Health monitoring và alerting strategies</p></li>
</ul>
<p>Bài tiếp theo sẽ hướng dẫn tích hợp Docker trong CI/CD Pipeline.</p>
