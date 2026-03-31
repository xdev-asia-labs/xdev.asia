---
id: 019d8b40-f602-7001-b007-rust000000602
title: 'Bài 20: Docker & CI/CD cho Rust'
slug: bai-20-docker-va-cicd-cho-rust
description: >-
  Multi-stage Docker builds (builder + scratch/distroless).
  cargo-chef cho caching dependencies. GitHub Actions CI/CD,
  cross-compilation. cargo-deny, cargo-audit. Clippy, rustfmt.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 20
section_title: "Phần 6: Testing, CI/CD & Production"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<h2 id="1-docker"><strong>1. Multi-stage Docker Build</strong></h2>

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

<h2 id="3-quality"><strong>3. Code Quality Tools</strong></h2>

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

<h2 id="4-cross"><strong>4. Cross-compilation</strong></h2>

<pre><code class="language-bash"># Cài target
rustup target add x86_64-unknown-linux-musl
rustup target add aarch64-unknown-linux-gnu

# Build static binary (musl)
cargo build --release --target x86_64-unknown-linux-musl

# Cross — cross-compile dễ dàng
cargo install cross
cross build --release --target aarch64-unknown-linux-gnu
</code></pre>

<p>Bài tiếp theo: <strong>Observability & Monitoring</strong>.</p>
