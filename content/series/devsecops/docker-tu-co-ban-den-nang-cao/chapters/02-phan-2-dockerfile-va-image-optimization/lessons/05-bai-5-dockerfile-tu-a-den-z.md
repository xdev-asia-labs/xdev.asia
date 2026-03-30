---
id: 019d8a21-a105-7001-b001-d0c4e7000105
title: 'Bài 5: Dockerfile từ A đến Z'
slug: bai-5-dockerfile-tu-a-den-z
description: >-
  Hướng dẫn chi tiết tất cả Dockerfile instructions: FROM, RUN, COPY, ADD,
  CMD, ENTRYPOINT, ENV, ARG, WORKDIR, EXPOSE, VOLUME, USER, HEALTHCHECK,
  LABEL, SHELL, STOPSIGNAL. Best practices và anti-patterns khi viết Dockerfile.
duration_minutes: 180
is_free: true
video_url: null
sort_order: 5
section_title: "Phần 2: Dockerfile và Image Optimization"
course:
  id: 019d8a21-a100-7001-b001-d0c4e7000001
  title: Docker từ Cơ bản đến Nâng cao
  slug: docker-tu-co-ban-den-nang-cao
---
<h2 id="1-dockerfile-la-gi"><strong>1. Dockerfile là gì?</strong></h2>
<p>Dockerfile là một text file chứa tất cả các instructions (hướng dẫn) để Docker tự động build một image. Mỗi instruction tạo ra một <strong>layer</strong> trong image.</p>

<h2 id="2-tat-ca-dockerfile-instructions"><strong>2. Tất cả Dockerfile Instructions</strong></h2>

<h3><strong>2.1. FROM - Base image</strong></h3>
<p>Mọi Dockerfile đều bắt đầu bằng FROM, xác định base image:</p>
<pre><code class="language-dockerfile"># Sử dụng image với tag cụ thể (recommended)
FROM node:20-alpine

# Sử dụng digest cho reproducible builds
FROM node@sha256:abc123...

# Multi-platform
FROM --platform=linux/amd64 node:20-alpine

# Scratch - empty base (cho static binaries)
FROM scratch
</code></pre>

<h3><strong>2.2. RUN - Chạy commands</strong></h3>
<pre><code class="language-dockerfile"># Shell form (chạy qua /bin/sh -c)
RUN apt-get update && apt-get install -y curl

# Exec form
RUN ["apt-get", "install", "-y", "curl"]

# Best practice: Gộp nhiều RUN thành một để giảm layers
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        curl \
        wget \
        git && \
    rm -rf /var/lib/apt/lists/*
</code></pre>

<h3><strong>2.3. COPY vs ADD</strong></h3>
<pre><code class="language-dockerfile"># COPY - Copy files/directories từ build context
COPY package.json ./
COPY src/ ./src/
COPY --chown=node:node . .

# ADD - Giống COPY nhưng thêm:
# - Tự động extract tar archives
# - Hỗ trợ URL (nhưng không recommended)
ADD archive.tar.gz /app/
ADD https://example.com/file.txt /tmp/  # Không nên dùng

# Best practice: Luôn dùng COPY trừ khi cần extract tar
</code></pre>

<h3><strong>2.4. CMD vs ENTRYPOINT</strong></h3>
<pre><code class="language-dockerfile"># CMD - Default command khi container start
# Có thể bị override bởi docker run arguments
CMD ["node", "server.js"]           # Exec form (recommended)
CMD node server.js                   # Shell form

# ENTRYPOINT - Command luôn được chạy
# docker run arguments sẽ được append vào ENTRYPOINT
ENTRYPOINT ["node", "server.js"]     # Exec form

# Kết hợp ENTRYPOINT + CMD
# ENTRYPOINT = executable, CMD = default arguments
ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]
# → python manage.py runserver 0.0.0.0:8000
# docker run myapp migrate
# → python manage.py migrate
</code></pre>

<!--kg-card-begin: html-->
<table>
<thead>
<tr>
<th></th>
<th>CMD</th>
<th>ENTRYPOINT</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Override</strong></td>
<td>Dễ dàng với docker run args</td>
<td>Cần --entrypoint flag</td>
</tr>
<tr>
<td><strong>Use case</strong></td>
<td>Default command, có thể thay đổi</td>
<td>Container luôn chạy cùng executable</td>
</tr>
<tr>
<td><strong>Best for</strong></td>
<td>General purpose images</td>
<td>Single-purpose containers</td>
</tr>
</tbody>
</table>
<!--kg-card-end: html-->

<h3><strong>2.5. ENV - Environment Variables</strong></h3>
<pre><code class="language-dockerfile"># Set environment variables
ENV NODE_ENV=production
ENV APP_PORT=3000
ENV DB_HOST=localhost DB_PORT=5432

# Sử dụng trong Dockerfile
RUN echo "Running in $NODE_ENV mode"
</code></pre>

<h3><strong>2.6. ARG - Build-time Variables</strong></h3>
<pre><code class="language-dockerfile"># Khai báo build argument
ARG NODE_VERSION=20
ARG APP_VERSION

# Sử dụng ARG
FROM node:${NODE_VERSION}-alpine
LABEL version=${APP_VERSION}

# Build với arguments
# docker build --build-arg NODE_VERSION=22 --build-arg APP_VERSION=1.0 .
</code></pre>

<p><strong>ARG vs ENV:</strong></p>
<ul>
<li><p><strong>ARG</strong>: Chỉ available trong build time, không tồn tại trong container</p></li>
<li><p><strong>ENV</strong>: Available cả build time và runtime trong container</p></li>
</ul>

<h3><strong>2.7. WORKDIR - Working Directory</strong></h3>
<pre><code class="language-dockerfile"># Set working directory
WORKDIR /app

# WORKDIR tạo directory nếu chưa tồn tại
WORKDIR /app/src

# Có thể dùng nhiều WORKDIR
WORKDIR /app
COPY . .
WORKDIR /app/client
RUN npm install
</code></pre>

<h3><strong>2.8. EXPOSE - Declare ports</strong></h3>
<pre><code class="language-dockerfile"># Khai báo port (documentation only)
EXPOSE 3000
EXPOSE 80/tcp
EXPOSE 443/tcp

# EXPOSE không tự publish port!
# Vẫn cần -p flag khi docker run
</code></pre>

<h3><strong>2.9. VOLUME - Declare mount points</strong></h3>
<pre><code class="language-dockerfile"># Khai báo volume mount point
VOLUME /data
VOLUME ["/data", "/logs"]
</code></pre>

<h3><strong>2.10. USER - Set user</strong></h3>
<pre><code class="language-dockerfile"># Tạo non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Switch sang non-root user
USER appuser

# Hoặc dùng UID:GID
USER 1000:1000
</code></pre>

<h3><strong>2.11. HEALTHCHECK</strong></h3>
<pre><code class="language-dockerfile"># Health check cho container
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

# Disable healthcheck
HEALTHCHECK NONE
</code></pre>

<h3><strong>2.12. LABEL - Metadata</strong></h3>
<pre><code class="language-dockerfile">LABEL maintainer="duy@xdev.asia"
LABEL version="1.0"
LABEL description="My awesome application"
LABEL org.opencontainers.image.source="https://github.com/user/repo"
</code></pre>

<h3><strong>2.13. SHELL - Change default shell</strong></h3>
<pre><code class="language-dockerfile"># Đổi shell mặc định (default: ["/bin/sh", "-c"])
SHELL ["/bin/bash", "-c"]
RUN echo "Now using bash"
</code></pre>

<h3><strong>2.14. STOPSIGNAL</strong></h3>
<pre><code class="language-dockerfile"># Signal để stop container (default: SIGTERM)
STOPSIGNAL SIGQUIT
</code></pre>

<h2 id="3-dockerignore"><strong>3. .dockerignore</strong></h2>
<p>File <code>.dockerignore</code> loại bỏ files khỏi build context, giúp build nhanh hơn:</p>
<pre><code># .dockerignore
node_modules
npm-debug.log
.git
.gitignore
Dockerfile
docker-compose*.yml
.env
.env.*
*.md
LICENSE
.vscode
.idea
coverage
.nyc_output
dist
build
</code></pre>

<h2 id="4-dockerfile-best-practices"><strong>4. Dockerfile Best Practices</strong></h2>

<h3><strong>4.1. Tận dụng layer caching</strong></h3>
<pre><code class="language-dockerfile"># ❌ Bad: Copy tất cả trước khi install dependencies
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci

# ✅ Good: Copy package.json trước, tận dụng cache
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
</code></pre>

<h3><strong>4.2. Giảm số layers</strong></h3>
<pre><code class="language-dockerfile"># ❌ Bad: Nhiều RUN tạo nhiều layers
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y wget
RUN rm -rf /var/lib/apt/lists/*

# ✅ Good: Gộp thành 1 RUN
RUN apt-get update && \
    apt-get install -y --no-install-recommends curl wget && \
    rm -rf /var/lib/apt/lists/*
</code></pre>

<h3><strong>4.3. Chạy với non-root user</strong></h3>
<pre><code class="language-dockerfile">FROM node:20-alpine
RUN addgroup -S app && adduser -S app -G app
WORKDIR /app
COPY --chown=app:app . .
RUN npm ci --only=production
USER app
CMD ["node", "server.js"]
</code></pre>

<h3><strong>4.4. Sử dụng specific tags</strong></h3>
<pre><code class="language-dockerfile"># ❌ Bad: latest tag có thể thay đổi
FROM node:latest

# ✅ Good: Pin version cụ thể
FROM node:20.11-alpine3.19
</code></pre>

<h2 id="5-vi-du-tong-hop"><strong>5. Ví dụ tổng hợp</strong></h2>
<pre><code class="language-dockerfile"># Production Dockerfile cho Node.js
FROM node:20-alpine AS base
LABEL maintainer="duy@xdev.asia"

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Build
FROM base AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production
FROM base AS production
RUN addgroup -S app && adduser -S app -G app
WORKDIR /app

COPY --from=deps --chown=app:app /app/node_modules ./node_modules
COPY --from=build --chown=app:app /app/dist ./dist
COPY --chown=app:app package.json ./

ENV NODE_ENV=production
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

USER app
CMD ["node", "dist/server.js"]
</code></pre>

<h2 id="6-tong-ket"><strong>6. Tổng kết</strong></h2>
<p>Trong bài này, bạn đã nắm được:</p>
<ul>
<li><p>Tất cả Dockerfile instructions và cách sử dụng</p></li>
<li><p>CMD vs ENTRYPOINT, COPY vs ADD, ARG vs ENV</p></li>
<li><p>.dockerignore để tối ưu build context</p></li>
<li><p>Best practices: layer caching, non-root user, specific tags</p></li>
</ul>
<p>Bài tiếp theo sẽ hướng dẫn multi-stage builds và các kỹ thuật tối ưu Docker image.</p>
