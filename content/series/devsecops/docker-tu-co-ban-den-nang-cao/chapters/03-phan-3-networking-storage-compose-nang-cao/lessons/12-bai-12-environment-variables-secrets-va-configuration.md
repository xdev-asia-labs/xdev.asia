---
id: 019d8a21-a112-7001-b001-d0c4e7000112
title: 'Bài 12: Environment Variables, Secrets và Configuration'
slug: bai-12-environment-variables-secrets-va-configuration
description: >-
  Quản lý cấu hình với environment variables, .env files, Docker configs,
  Docker secrets, Vault integration. Best practices bảo mật thông tin
  nhạy cảm, 12-factor app methodology và configuration management patterns.
duration_minutes: 140
is_free: true
video_url: null
sort_order: 12
section_title: "Phần 3: Networking, Storage và Compose Nâng cao"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6671" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a1628"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6671)"/>

  <!-- Decorations -->
  <g>
    <circle cx="889" cy="57" r="12" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="678" cy="66" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="967" cy="75" r="16" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="756" cy="84" r="33" fill="#818cf8" opacity="0.13"/>
    <circle cx="1045" cy="93" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="147" x2="1100" y2="227" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="177" x2="1050" y2="247" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="983.3730669589464,126 983.3730669589464,168 947,189 910.6269330410536,168 910.6269330410536,126.00000000000001 947,105" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">🔒 DevSecOps — Bài 12</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 12: Environment Variables, Secrets và</tspan>
      <tspan x="60" dy="42">Configuration</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Docker từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 3: Networking, Storage và Compose Nâng cao</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-environment-variables"><strong>1. Environment Variables trong Docker</strong></h2>
<p>Environment variables là cách phổ biến nhất để truyền cấu hình vào containers, tuân theo 12-Factor App methodology.</p>

<h3><strong>1.1. Các cách truyền ENV</strong></h3>
<pre><code class="language-bash"># 1. Docker run -e flag
docker run -d -e DB_HOST=localhost -e DB_PORT=5432 myapp

# 2. Từ file
docker run -d --env-file .env myapp

# 3. Pass từ host environment
export DB_HOST=localhost
docker run -d -e DB_HOST myapp  # Lấy giá trị từ host

# 4. Trong Dockerfile
# ENV DB_HOST=localhost
</code></pre>

<h3><strong>1.2. Variable Precedence (thứ tự ưu tiên)</strong></h3>
<ol>
<li><p><code>docker run -e</code> hoặc <code>docker compose environment:</code> (cao nhất)</p></li>
<li><p><code>env_file</code> trong docker-compose</p></li>
<li><p><code>ENV</code> trong Dockerfile</p></li>
<li><p>Default values trong application code (thấp nhất)</p></li>
</ol>

<h2 id="2-env-files"><strong>2. .env Files</strong></h2>
<pre><code class="language-bash"># .env (auto-loaded by Docker Compose)
NODE_ENV=production
DB_HOST=db
DB_PORT=5432
DB_NAME=myapp
DB_USER=admin
DB_PASSWORD=secretpassword
REDIS_URL=redis://redis:6379
JWT_SECRET=my-jwt-secret-key
</code></pre>

<pre><code class="language-yaml"># docker-compose.yml
services:
  api:
    image: myapp:latest
    env_file:
      - .env           # Default
      - .env.local      # Local overrides (gitignored)
    environment:
      - NODE_ENV=production  # Override env_file
</code></pre>

<p><strong>Best practices cho .env files:</strong></p>
<ul>
<li><p><code>.env</code> - Default values, có thể commit vào git</p></li>
<li><p><code>.env.local</code> - Local overrides, gitignored</p></li>
<li><p><code>.env.production</code> - Production values, deploy qua CI/CD</p></li>
<li><p>Không bao giờ commit secrets vào git!</p></li>
</ul>

<h2 id="3-docker-secrets"><strong>3. Docker Secrets</strong></h2>
<p>Docker Secrets quản lý sensitive data (passwords, API keys, certificates) an toàn hơn ENV:</p>

<h3><strong>3.1. Secrets trong Docker Swarm</strong></h3>
<pre><code class="language-bash"># Tạo secret từ file
echo "mysecretpassword" | docker secret create db_password -

# Tạo secret từ file
docker secret create ssl_cert ./server.crt

# Liệt kê secrets
docker secret ls

# Sử dụng trong service
docker service create --name api \
    --secret db_password \
    --secret ssl_cert \
    myapp
# Secret available tại /run/secrets/db_password
</code></pre>

<h3><strong>3.2. Secrets trong Docker Compose</strong></h3>
<pre><code class="language-yaml">services:
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    secrets:
      - db_password

  api:
    image: myapp:latest
    secrets:
      - db_password
      - jwt_secret
    environment:
      DB_PASSWORD_FILE: /run/secrets/db_password

secrets:
  db_password:
    file: ./secrets/db_password.txt
  jwt_secret:
    file: ./secrets/jwt_secret.txt
</code></pre>

<h3><strong>3.3. Đọc Secrets trong Application</strong></h3>
<pre><code class="language-javascript">// Node.js - Đọc secret từ file
const fs = require('fs');

function getSecret(name) {
  try {
    return fs.readFileSync(`/run/secrets/${name}`, 'utf8').trim();
  } catch (err) {
    // Fallback to environment variable
    return process.env[name.toUpperCase()];
  }
}

const dbPassword = getSecret('db_password');
</code></pre>

<h2 id="4-docker-configs"><strong>4. Docker Configs</strong></h2>
<p>Docker Configs cho phép lưu trữ non-sensitive configuration data:</p>
<pre><code class="language-yaml">services:
  nginx:
    image: nginx:1.27-alpine
    configs:
      - source: nginx_conf
        target: /etc/nginx/nginx.conf

configs:
  nginx_conf:
    file: ./nginx/nginx.conf
</code></pre>

<h2 id="5-vault-integration"><strong>5. HashiCorp Vault Integration</strong></h2>
<p>Vault cung cấp dynamic secrets management:</p>

<pre><code class="language-yaml"># docker-compose.yml với Vault
services:
  vault:
    image: hashicorp/vault:1.17
    cap_add:
      - IPC_LOCK
    environment:
      VAULT_DEV_ROOT_TOKEN_ID: myroot
    ports:
      - "8200:8200"

  api:
    image: myapp:latest
    environment:
      VAULT_ADDR: http://vault:8200
      VAULT_TOKEN: myroot
</code></pre>

<h2 id="6-12-factor-app"><strong>6. 12-Factor App - Configuration</strong></h2>
<p>Factor III - Config: <em>"Store config in the environment"</em></p>
<ul>
<li><p>Tách configuration khỏi code</p></li>
<li><p>Cùng image chạy trên dev/staging/production</p></li>
<li><p>Chỉ thay đổi environment variables</p></li>
</ul>

<pre><code class="language-yaml"># Cùng image, khác config
services:
  api-dev:
    image: myapp:latest
    environment:
      NODE_ENV: development
      LOG_LEVEL: debug
      DB_HOST: dev-db

  api-prod:
    image: myapp:latest
    environment:
      NODE_ENV: production
      LOG_LEVEL: warn
      DB_HOST: prod-db
</code></pre>

<h2 id="7-configuration-patterns"><strong>7. Configuration Management Patterns</strong></h2>

<h3><strong>Pattern 1: Config file mount</strong></h3>
<pre><code class="language-yaml">services:
  api:
    volumes:
      - ./config/production.yml:/app/config/config.yml:ro
</code></pre>

<h3><strong>Pattern 2: Entrypoint script</strong></h3>
<pre><code class="language-bash">#!/bin/sh
# docker-entrypoint.sh

# Generate config from environment
envsubst < /app/config.template.yml > /app/config.yml

# Read secrets
export DB_PASSWORD=$(cat /run/secrets/db_password)

exec "$@"
</code></pre>

<pre><code class="language-dockerfile">COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["node", "server.js"]
</code></pre>

<h2 id="8-security-best-practices"><strong>8. Security Best Practices</strong></h2>
<ul>
<li><p>Không hardcode secrets trong Dockerfile hoặc docker-compose.yml</p></li>
<li><p>Không commit .env files với secrets vào git</p></li>
<li><p>Sử dụng Docker Secrets thay vì ENV cho sensitive data</p></li>
<li><p>Rotate secrets định kỳ</p></li>
<li><p>Sử dụng Vault hoặc cloud secret managers cho production</p></li>
<li><p>Audit access to secrets</p></li>
</ul>

<h2 id="9-tong-ket"><strong>9. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>Environment variables và variable precedence</p></li>
<li><p>.env files management</p></li>
<li><p>Docker Secrets cho sensitive data</p></li>
<li><p>Docker Configs cho non-sensitive config</p></li>
<li><p>HashiCorp Vault integration</p></li>
<li><p>12-Factor App configuration methodology</p></li>
<li><p>Configuration management patterns và security best practices</p></li>
</ul>
<p>Bài tiếp theo sẽ hướng dẫn Docker Security Best Practices.</p>
