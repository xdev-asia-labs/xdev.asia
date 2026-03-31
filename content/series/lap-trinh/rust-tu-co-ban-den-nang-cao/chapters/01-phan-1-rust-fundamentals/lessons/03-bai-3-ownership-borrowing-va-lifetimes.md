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
