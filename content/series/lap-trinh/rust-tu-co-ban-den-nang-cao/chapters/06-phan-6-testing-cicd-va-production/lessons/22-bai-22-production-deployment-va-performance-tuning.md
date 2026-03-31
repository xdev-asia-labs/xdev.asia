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
