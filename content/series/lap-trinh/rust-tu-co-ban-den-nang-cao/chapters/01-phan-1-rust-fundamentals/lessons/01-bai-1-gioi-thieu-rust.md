---
id: 019d8b40-f101-7001-b007-rust000000101
title: 'Bài 1: Giới thiệu Rust - Performance meets Safety'
slug: bai-1-gioi-thieu-rust
description: >-
  Tại sao Rust? Zero-cost abstractions, memory safety without GC. So sánh
  Rust vs Go vs C++ vs Zig. Cài đặt rustup, cargo, rust-analyzer. Hello
  World, cargo project structure.
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: "Phần 1: Rust Fundamentals"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<h2 id="1-tai-sao-rust"><strong>1. Tại sao Rust?</strong></h2>

<table>
<thead><tr><th>Tiêu chí</th><th>Rust</th><th>Go</th><th>C++</th></tr></thead>
<tbody>
<tr><td>Memory safety</td><td>Compile-time (borrow checker)</td><td>GC</td><td>Manual</td></tr>
<tr><td>Performance</td><td>Ngang C/C++</td><td>Tốt (GC pause)</td><td>Cao nhất</td></tr>
<tr><td>Concurrency</td><td>Fearless concurrency</td><td>Goroutines</td><td>Threads + locks</td></tr>
<tr><td>Zero-cost abstractions</td><td>✅</td><td>❌</td><td>✅</td></tr>
<tr><td>Null safety</td><td>Option&lt;T&gt;</td><td>nil</td><td>nullptr</td></tr>
</tbody>
</table>

<h2 id="2-cai-dat"><strong>2. Cài đặt Rust</strong></h2>

<pre><code class="language-bash"># Cài rustup (Rust toolchain manager)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Verify
rustc --version
cargo --version

# Update
rustup update

# Components hữu ích
rustup component add clippy     # Linter
rustup component add rustfmt    # Formatter
</code></pre>

<h2 id="3-cargo"><strong>3. Cargo — Package Manager & Build Tool</strong></h2>

<pre><code class="language-bash"># Tạo project mới
cargo new my-app
cd my-app

# Cấu trúc project
# my-app/
# ├── Cargo.toml    # Manifest (giống package.json)
# ├── src/
# │   └── main.rs   # Entry point
</code></pre>

<pre><code class="language-toml"># Cargo.toml
[package]
name = "my-app"
version = "0.1.0"
edition = "2021"

[dependencies]
serde = { version = "1.0", features = ["derive"] }
tokio = { version = "1", features = ["full"] }
</code></pre>

<h2 id="4-hello-world"><strong>4. Hello World</strong></h2>

<pre><code class="language-rust">fn main() {
    let name = "Rust";
    println!("Hello, {}!", name);

    // Formatted printing
    println!("Decimal: {}", 42);
    println!("Binary: {:b}", 42);
    println!("Debug: {:?}", vec![1, 2, 3]);
    println!("Pretty: {:#?}", vec![1, 2, 3]);
}
</code></pre>

<pre><code class="language-bash"># Build & Run
cargo run

# Build release
cargo build --release

# Check (compile without codegen — nhanh hơn)
cargo check

# Format code
cargo fmt

# Lint
cargo clippy
</code></pre>

<p>Bài tiếp theo: <strong>Variables, Types & Control Flow</strong>.</p>
