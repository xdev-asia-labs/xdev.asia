---
id: 019d8b40-f602-7001-b007-rust000000602
title: 第 20 課：Rust 的 Docker 和 CI/CD
slug: bai-20-docker-va-cicd-cho-rust
description: >-
  多階段 Docker 建置（建置器 + 臨時/無發行版）。 Cargo-Chef 用於快取相依性。 GitHub Actions
  CI/CD，交叉編譯。貨物拒絕、貨物審計。 Clippy，rustfmt。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: 第 6 部分：測試、CI/CD 和生產
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: Rust：從基礎到高級
  slug: rust-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-7643" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-7643)"/>

  <!-- Decorations -->
  <g>
    <circle cx="716" cy="38" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="832" cy="214" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="948" cy="130" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="1064" cy="46" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="680" cy="222" r="26" fill="#2dd4bf" opacity="0.05"/>
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
    <line x1="600" y1="118" x2="1100" y2="198" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="148" x2="1050" y2="218" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="996.5788383248864,151.5 996.5788383248864,184.5 968,201 939.4211616751136,184.5 939.4211616751135,151.5 968,135" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 程式設計 — 第 20 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 20 課：Rust 的 Docker 和 CI/CD</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 6 部分：測試、CI/CD 和生產</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-docker"><strong>1. 多階段Docker構建</strong></h2>

<pre><code class="language-dockerfile"># Stage 1: Chef — cache dependencies
FROM rust:1.79-slim AS chef
RUN cargo install cargo-chef
WORKDIR /app

FROM chef AS planner
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

# Stage 2: Build
FROM chef AS builder
COPY --from=planner /app/recipe.json recipe.json
RUN cargo chef cook --release --recipe-path recipe.json  # Cache deps
COPY . .
RUN cargo build --release

# Stage 3: Runtime — minimal image
FROM gcr.io/distroless/cc-debian12 AS runtime
COPY --from=builder /app/target/release/my-app /app
EXPOSE 3000
CMD ["/app"]
</code></pre>

<pre><code class="language-yaml"># docker-compose.yml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
      - RUST_LOG=info
    depends_on:
      - db
      - redis
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
  redis:
    image: redis:7-alpine
</code></pre>

<h2 id="2-github-actions"><strong>2. GitHub Actions CI/CD</strong></h2>

<pre><code class="language-yaml">name: Rust CI

on:
  push:
    branches: [main]
  pull_request:

env:
  CARGO_TERM_COLOR: always

jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: dtolnay/rust-toolchain@stable
        with:
          components: clippy, rustfmt
      - uses: Swatinem/rust-cache@v2

      - name: Format check
        run: cargo fmt --check

      - name: Clippy
        run: cargo clippy -- -D warnings

      - name: Tests
        run: cargo test

      - name: Security audit
        run: |
          cargo install cargo-audit
          cargo audit

  build:
    needs: check
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/${{ github.repository }}:latest
</code></pre>

<h2 id="3-quality"><strong>3. 程式碼品質工具</strong></h2>

<pre><code class="language-bash"># Clippy — linter
cargo clippy -- -D warnings -W clippy::pedantic

# Audit — security vulnerabilities
cargo audit

# Deny — license & dependency checks
cargo deny check

# Outdated dependencies
cargo outdated
</code></pre>

<pre><code class="language-toml"># deny.toml
[advisories]
vulnerability = "deny"
unmaintained = "warn"

[licenses]
allow = ["MIT", "Apache-2.0", "BSD-2-Clause", "BSD-3-Clause"]
</code></pre>

<h2 id="4-cross"><strong>4.交叉編譯</strong></h2>

<pre><code class="language-bash"># Cài target
rustup target add x86_64-unknown-linux-musl
rustup target add aarch64-unknown-linux-gnu

# Build static binary (musl)
cargo build --release --target x86_64-unknown-linux-musl

# Cross — cross-compile dễ dàng
cargo install cross
cross build --release --target aarch64-unknown-linux-gnu
</code></pre>

<p>下一篇： <strong>可觀察性和監控</strong>。</p>
