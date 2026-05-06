---
id: 019d8b40-f101-7001-b007-rust000000101
title: 'レッスン 1: Rust の紹介 - パフォーマンスと安全性の両立'
slug: bai-1-gioi-thieu-rust
description: >-
  なぜ錆びるのか？ゼロコストの抽象化、GC を使用しないメモリの安全性。 Rust、Go、C++、Zig
  を比較してください。錆び、カーゴ、錆びアナライザーをインストールします。 Hello World、貨物プロジェクトの構造。
duration_minutes: 60
is_free: true
video_url: null
sort_order: 1
section_title: 'パート 1: Rust の基礎'
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: 基本から上級まで'
  slug: rust-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9249" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9249)"/>

  <!-- Decorations -->
  <g>
    <circle cx="754" cy="252" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="908" cy="66" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="1062" cy="140" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="716" cy="214" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="870" cy="288" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="92" x2="1100" y2="172" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="122" x2="1050" y2="192" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="965.3826859021799,128.5 965.3826859021799,155.5 942,169 918.6173140978201,155.5 918.6173140978201,128.5 942,115" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 プログラミング — レッスン 1</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 1: Rust の紹介 - パフォーマンスの向上</tspan>
      <tspan x="60" dy="42">安全性</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 1: Rust の基礎</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-tai-sao-rust"><strong>1. なぜ錆びるのか?</strong></h2>

<table>
<thead><tr><th>基準</th><th>さび</th><th>行く</th><th>C++</th></tr></thead>
<tbody>
<tr><td>メモリの安全性</td><td>コンパイル時 (借用チェッカー)</td><td>GC</td><td>マニュアル</td></tr>
<tr><td>パフォーマンス</td><td>水平C/C++</td><td>良好 (GC 一時停止)</td><td>最高</td></tr>
<tr><td>同時実行性</td><td>恐れを知らない同時実行性</td><td>ゴルーチン</td><td>スレッド + ロック</td></tr>
<tr><td>コストゼロの抽象化</td><td>✅</td><td>❌</td><td>✅</td></tr>
<tr><td>ヌルセーフティ</td><td>オプション<T></td><td>なし</td><td>nullptr</td></tr>
</tbody>
</table>

<h2 id="2-cai-dat"><strong>2.Rustをインストールする</strong></h2>

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

<h2 id="3-cargo"><strong>3. Cargo — パッケージマネージャーおよびビルドツール</strong></h2>

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

<h2 id="4-hello-world"><strong>4. ハローワールド</strong></h2>

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

<p>次の記事: <strong>変数、型、制御フロー</strong>。</p>
