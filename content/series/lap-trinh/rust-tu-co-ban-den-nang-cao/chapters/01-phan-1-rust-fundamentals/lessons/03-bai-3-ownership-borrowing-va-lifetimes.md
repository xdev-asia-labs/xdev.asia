---
id: 019d8b40-f103-7001-b007-rust000000103
title: 'Bài 3: Ownership, Borrowing & Lifetimes'
slug: bai-3-ownership-borrowing-va-lifetimes
description: >-
  Ownership rules, move semantics, Copy trait. References, borrowing rules,
  mutable references. Lifetime annotations, lifetime elision, 'static lifetime.
  Borrow checker.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 3
section_title: "Phần 1: Rust Fundamentals"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8672" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8672)"/>

  <!-- Decorations -->
  <g>
    <circle cx="911" cy="203" r="24" fill="#34d399" opacity="0.08"/>
    <circle cx="722" cy="174" r="17" fill="#34d399" opacity="0.11"/>
    <circle cx="1033" cy="145" r="10" fill="#34d399" opacity="0.14"/>
    <circle cx="844" cy="116" r="33" fill="#34d399" opacity="0.07"/>
    <circle cx="655" cy="87" r="26" fill="#34d399" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#34d399" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#34d399" opacity="0.15"/>
    <line x1="600" y1="53" x2="1100" y2="133" stroke="#34d399" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="83" x2="1050" y2="153" stroke="#34d399" stroke-width="0.5" opacity="0.08"/>
    <polygon points="977.2487113059643,139 977.2487113059643,167 953,181 928.7512886940357,167 928.7512886940357,139 953,125" fill="none" stroke="#34d399" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#34d399"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#34d399" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#34d399">💻 Lập trình — Bài 3</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 3: Ownership, Borrowing &amp; Lifetimes</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Rust Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-ownership"><strong>1. Ownership Rules</strong></h2>

<pre><code class="language-rust">fn main() {
    // Rule 1: Mỗi value có đúng 1 owner
    // Rule 2: Chỉ có 1 owner tại mọi thời điểm
    // Rule 3: Khi owner ra khỏi scope, value bị drop

    let s1 = String::from("hello");
    let s2 = s1; // s1 bị MOVE vào s2
    // println!("{}", s1); // ❌ Error: value borrowed after move

    // Clone — deep copy
    let s3 = s2.clone();
    println!("{} {}", s2, s3); // ✅ OK

    // Copy trait — stack-only data (integers, bool, char, tuples of Copy types)
    let x = 5;
    let y = x; // Copy, không phải move
    println!("{} {}", x, y); // ✅ OK
}

// Ownership transfer qua function
fn takes_ownership(s: String) {
    println!("{}", s);
} // s bị drop ở đây

fn gives_ownership() -> String {
    String::from("hello")
}
</code></pre>

<h2 id="2-borrowing"><strong>2. Borrowing & References</strong></h2>

<pre><code class="language-rust">fn main() {
    let s = String::from("hello");

    // Immutable reference (&T) — nhiều cùng lúc OK
    let len = calculate_length(&s);
    println!("{} has length {}", s, len); // s vẫn valid

    // Mutable reference (&mut T) — chỉ 1 tại mỗi thời điểm
    let mut s = String::from("hello");
    change(&mut s);
    println!("{}", s); // "hello, world"

    // ❌ Không thể có &mut và & cùng lúc
    // let r1 = &s;
    // let r2 = &mut s; // Error: cannot borrow as mutable
}

fn calculate_length(s: &String) -> usize {
    s.len()
} // s là reference nên không drop value

fn change(s: &mut String) {
    s.push_str(", world");
}
</code></pre>

<h2 id="3-lifetimes"><strong>3. Lifetimes</strong></h2>

<pre><code class="language-rust">// Lifetime annotation — chỉ ra reference sống bao lâu
fn longest&lt;'a&gt;(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

// Lifetime trong struct — struct không thể sống lâu hơn reference bên trong
struct Config&lt;'a&gt; {
    name: &'a str,
    value: &'a str,
}

impl&lt;'a&gt; Config&lt;'a&gt; {
    fn display(&self) -> String {
        format!("{}={}", self.name, self.value)
    }
}

// 'static lifetime — sống suốt chương trình
let s: &'static str = "I live forever";

// Lifetime elision rules (compiler tự suy):
// 1. Mỗi reference parameter có lifetime riêng
// 2. Nếu chỉ 1 input lifetime → gán cho tất cả output
// 3. Nếu có &self → lifetime của self gán cho output
fn first_word(s: &str) -> &str {
    // Compiler tự thêm: fn first_word&lt;'a&gt;(s: &'a str) -> &'a str
    let bytes = s.as_bytes();
    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[..i];
        }
    }
    s
}
</code></pre>

<h2 id="4-borrow-checker"><strong>4. Borrow Checker Patterns</strong></h2>

<pre><code class="language-rust">// Non-Lexical Lifetimes (NLL) — Rust 2021+
fn main() {
    let mut data = vec![1, 2, 3];
    let first = &data[0]; // immutable borrow
    println!("{}", first); // last use of `first`
    data.push(4); // ✅ OK — NLL biết `first` không còn dùng
}

// Splitting borrows — borrow different fields
struct Point {
    x: f64,
    y: f64,
}

fn update(point: &mut Point) {
    let x = &mut point.x;
    let y = &mut point.y;
    *x += 1.0;
    *y += 1.0;
}
</code></pre>

<p>Bài tiếp theo: <strong>Structs, Enums & Pattern Matching</strong>.</p>
