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
