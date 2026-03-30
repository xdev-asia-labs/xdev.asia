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
