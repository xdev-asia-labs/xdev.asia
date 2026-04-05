---
id: 019d8b40-f102-7001-b007-rust000000102
title: 'Bài 2: Variables, Types & Control Flow'
slug: bai-2-variables-types-va-control-flow
description: >-
  Immutability by default, shadowing. Scalar types, compound types (tuple, array).
  String vs &str. if/else, match, loops. Pattern matching deep dive.
duration_minutes: 90
is_free: true
video_url: null
sort_order: 2
section_title: "Phần 1: Rust Fundamentals"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-3266" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-3266)"/>

  <!-- Decorations -->
  <g>
    <circle cx="960" cy="90" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="820" cy="110" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="130" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1040" cy="150" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="900" cy="170" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="130" x2="1100" y2="210" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="160" x2="1050" y2="230" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1001.650635094611,167.5 1001.650635094611,192.5 980,205 958.349364905389,192.5 958.349364905389,167.5 980,155" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 Lập trình — Bài 2</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Bài 2: Variables, Types &amp; Control Flow</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust: Từ Cơ bản đến Nâng cao</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Phần 1: Rust Fundamentals</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-variables"><strong>1. Variables & Mutability</strong></h2>

<pre><code class="language-rust">fn main() {
    // Immutable by default
    let x = 5;
    // x = 6; // ❌ Error: cannot assign twice to immutable variable

    // Mutable
    let mut y = 10;
    y = 20; // ✅ OK

    // Constants — phải khai báo type, compile-time value
    const MAX_POINTS: u32 = 100_000;

    // Shadowing — tạo biến mới cùng tên
    let spaces = "   ";
    let spaces = spaces.len(); // OK — khác type
}
</code></pre>

<h2 id="2-types"><strong>2. Types</strong></h2>

<pre><code class="language-rust">// Scalar types
let integer: i32 = 42;          // i8, i16, i32, i64, i128, isize
let unsigned: u64 = 100;        // u8, u16, u32, u64, u128, usize
let float: f64 = 3.14;          // f32, f64
let boolean: bool = true;
let character: char = '🦀';     // 4 bytes Unicode

// Compound types
let tuple: (i32, f64, &str) = (42, 3.14, "hello");
let (a, b, c) = tuple;          // Destructuring
let first = tuple.0;            // Access by index

let array: [i32; 5] = [1, 2, 3, 4, 5];
let zeros = [0; 10];            // [0, 0, 0, ..., 0] — 10 phần tử

// String types
let string_literal: &str = "hello";       // String slice (stack)
let heap_string: String = String::from("hello"); // Heap-allocated
let owned = "hello".to_string();

// Type conversion
let x: i32 = 42;
let y: f64 = x as f64;
let z: u8 = 255;
</code></pre>

<h2 id="3-control"><strong>3. Control Flow</strong></h2>

<pre><code class="language-rust">// if/else — expression (trả về giá trị)
let number = 7;
let label = if number % 2 == 0 { "even" } else { "odd" };

// match — pattern matching
let value = 3;
match value {
    1 => println!("one"),
    2 | 3 => println!("two or three"),
    4..=10 => println!("four to ten"),
    _ => println!("something else"),
}

// Loops
loop {
    // Infinite loop — break to exit
    break;
}

// Loop as expression
let result = loop {
    break 42;
};

// while
let mut count = 0;
while count < 5 {
    count += 1;
}

// for
for i in 0..5 {
    println!("{}", i); // 0, 1, 2, 3, 4
}

for (index, value) in [10, 20, 30].iter().enumerate() {
    println!("{}: {}", index, value);
}
</code></pre>

<h2 id="4-pattern-matching"><strong>4. Pattern Matching Deep Dive</strong></h2>

<pre><code class="language-rust">enum Command {
    Quit,
    Echo(String),
    Move { x: i32, y: i32 },
    Color(u8, u8, u8),
}

fn process(cmd: Command) {
    match cmd {
        Command::Quit => println!("Quit"),
        Command::Echo(msg) => println!("Echo: {}", msg),
        Command::Move { x, y } if x > 0 => println!("Move right to ({}, {})", x, y),
        Command::Move { x, y } => println!("Move to ({}, {})", x, y),
        Command::Color(r, g, b) => println!("Color: ({}, {}, {})", r, g, b),
    }
}

// if let — match single pattern
let some_value: Option&lt;i32&gt; = Some(42);
if let Some(value) = some_value {
    println!("Got: {}", value);
}

// let-else (Rust 1.65+)
let Some(value) = some_value else {
    println!("No value");
    return;
};
</code></pre>

<p>Bài tiếp theo: <strong>Ownership, Borrowing & Lifetimes</strong>.</p>
