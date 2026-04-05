---
id: 019d8b40-f604-7001-b007-rust000000604
title: 'Bài 22: Production Deployment & Performance Tuning'
slug: bai-22-production-deployment-va-performance-tuning
description: >-
  Release profile optimization, LTO, codegen-units. Memory allocators
  (jemalloc, mimalloc). Connection pooling, request batching.
  Scaling strategies, microservices with Rust.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 22
section_title: "Phần 6: Testing, CI/CD & Production"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-6905" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-6905)"/>

  <!-- Decorations -->
  <g>
    <circle cx="874" cy="132" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="648" cy="166" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="922" cy="200" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="696" cy="234" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="970" cy="268" r="20" fill="#f472b6" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#f472b6" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#f472b6" opacity="0.15"/>
    <line x1="600" y1="52" x2="1100" y2="132" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="82" x2="1050" y2="152" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="925.3826859021799,88.5 925.3826859021799,115.5 902,129 878.6173140978201,115.5 878.6173140978201,88.5 902,75" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Lập trình — Bài 22</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 22: Production Deployment &amp;</tspan>
      <tspan x="60" dy="42">Performance Tuning</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 6: Testing, CI/CD &amp; Production</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-profile"><strong>1. Release Profile Optimization</strong></h2>

<pre><code class="language-toml"># Cargo.toml
[profile.release]
opt-level = 3           # Maximum optimization
lto = "fat"             # Link-Time Optimization — binary nhỏ hơn, nhanh hơn
codegen-units = 1       # Single codegen unit — tối ưu tốt hơn
strip = true            # Strip debug symbols
panic = "abort"         # Không unwind — binary nhỏ hơn

[profile.dev]
opt-level = 0
debug = true

# Custom profile
[profile.profiling]
inherits = "release"
debug = true            # Debug symbols nhưng optimized
strip = false
</code></pre>

<pre><code class="language-bash"># Build size comparison
cargo build --release
ls -la target/release/my-app  # ~5MB (stripped, LTO)

# Analyze binary size
cargo install cargo-bloat
cargo bloat --release --crates
</code></pre>

<h2 id="2-allocator"><strong>2. Memory Allocators</strong></h2>

<pre><code class="language-rust">// jemalloc — tốt cho multi-threaded workloads
#[global_allocator]
static GLOBAL: tikv_jemallocator::Jemalloc = tikv_jemallocator::Jemalloc;

// mimalloc — tốt cho general purpose
// [dependencies]
// mimalloc = { version = "0.1", default-features = false }
#[global_allocator]
static GLOBAL: mimalloc::MiMalloc = mimalloc::MiMalloc;
</code></pre>

<table>
<thead><tr><th>Allocator</th><th>Use case</th><th>Pros</th></tr></thead>
<tbody>
<tr><td>System (default)</td><td>General</td><td>No extra dependency</td></tr>
<tr><td>jemalloc</td><td>High-concurrency servers</td><td>Giảm fragmentation, multi-thread</td></tr>
<tr><td>mimalloc</td><td>General, latency-sensitive</td><td>Fast, compact, cross-platform</td></tr>
</tbody>
</table>

<h2 id="3-performance"><strong>3. Performance Patterns</strong></h2>

<pre><code class="language-rust">// Connection pooling
let pool = PgPoolOptions::new()
    .max_connections(20)
    .min_connections(5)
    .max_lifetime(Duration::from_secs(1800))
    .idle_timeout(Duration::from_secs(600))
    .acquire_timeout(Duration::from_secs(5))
    .connect(&database_url)
    .await?;

// Request batching
use tokio::sync::mpsc;
use tokio::time::interval;

struct Batcher {
    tx: mpsc::Sender&lt;BatchItem&gt;,
}

impl Batcher {
    fn new(pool: PgPool) -> Self {
        let (tx, mut rx) = mpsc::channel(1000);

        tokio::spawn(async move {
            let mut buffer = Vec::new();
            let mut tick = interval(Duration::from_millis(100));

            loop {
                tokio::select! {
                    Some(item) = rx.recv() => {
                        buffer.push(item);
                        if buffer.len() >= 100 {
                            flush_batch(&pool, &mut buffer).await;
                        }
                    }
                    _ = tick.tick() => {
                        if !buffer.is_empty() {
                            flush_batch(&pool, &mut buffer).await;
                        }
                    }
                }
            }
        });

        Self { tx }
    }
}

// String optimization — avoid allocation
fn process(input: &str) -> &str {
    // Trả reference thay vì clone
    input.trim()
}

// Cow — clone on write
use std::borrow::Cow;

fn normalize(input: &str) -> Cow&lt;'_, str&gt; {
    if input.contains(' ') {
        Cow::Owned(input.replace(' ', "_"))
    } else {
        Cow::Borrowed(input)
    }
}
</code></pre>

<h2 id="4-scaling"><strong>4. Production Checklist</strong></h2>

<table>
<thead><tr><th>Category</th><th>Item</th></tr></thead>
<tbody>
<tr><td>Build</td><td>LTO enabled, single codegen-unit, stripped</td></tr>
<tr><td>Allocator</td><td>jemalloc hoặc mimalloc</td></tr>
<tr><td>Logging</td><td>tracing + JSON format + RUST_LOG</td></tr>
<tr><td>Metrics</td><td>Prometheus + Grafana</td></tr>
<tr><td>Health</td><td>/health endpoint, readiness/liveness</td></tr>
<tr><td>Shutdown</td><td>Graceful shutdown (SIGTERM)</td></tr>
<tr><td>Security</td><td>cargo audit, cargo deny</td></tr>
<tr><td>Docker</td><td>Multi-stage + distroless/scratch</td></tr>
<tr><td>DB</td><td>Connection pooling, migrations</td></tr>
<tr><td>CI/CD</td><td>fmt, clippy, test, audit, build</td></tr>
</tbody>
</table>

<p>Chúc mừng bạn đã hoàn thành series <strong>Rust: Từ Cơ bản đến Nâng cao</strong>! 🎉</p>
