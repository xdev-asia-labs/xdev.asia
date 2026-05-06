---
id: 019d8b40-f202-7001-b007-rust000000202
title: 'Lesson 6: Closures, Iterators & Collections'
slug: bai-6-closures-iterators-va-collections
description: >-
  Closures, Fn/FnMut/FnOnce traits. Iterator trait, iterator adapters (map,
  filter, fold). Vec, HashMap, HashSet, BTreeMap. Collecting, chaining, custom
  iterators.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: 'Part 2: Advanced Rust'
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: From Basics to Advanced'
  slug: rust-tu-co-ban-den-nang-cao
locale: en
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4170" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4170)"/>

  <!-- Decorations -->
  <g>
    <circle cx="694" cy="212" r="32" fill="#f472b6" opacity="0.07"/>
    <circle cx="788" cy="186" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="882" cy="160" r="26" fill="#f472b6" opacity="0.11"/>
    <circle cx="976" cy="134" r="8" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="108" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="112" x2="1100" y2="192" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="142" x2="1050" y2="212" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="935.3826859021799,98.5 935.3826859021799,125.5 912,139 888.6173140978201,125.5 888.6173140978201,98.5 912,85" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 Programming — Lesson 6</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">Lesson 6: Closures, Iterators & Collections</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust: From Basics to Advanced</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">Part 2: Advanced Rust</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-closures"><strong>1. Closures</strong></h2>

<pre><code class="language-rust">fn main() {
    // Closure syntax
    let add = |a: i32, b: i32| a + b;
    println!("{}", add(2, 3)); // 5

    // Capture environment
    let name = String::from("Rust");
    let greet = || println!("Hello, {}!", name);     // Fn — borrow
    greet();

    let mut count = 0;
    let mut increment = || { count += 1; };          // FnMut — mutable borrow
    increment();

    let name = String::from("Rust");
    let consume = move || println!("Consumed: {}", name); // FnOnce — move ownership
    consume();
    // println!("{}", name); // ❌ name đã bị move
}

// Closure as parameter
fn apply&lt;F: Fn(i32) -> i32&gt;(f: F, x: i32) -> i32 {
    f(x)
}

// Return closure
fn make_adder(x: i32) -> impl Fn(i32) -> i32 {
    move |y| x + y
}
</code></pre>

<h2 id="2-iterators"><strong>2. Iterators</strong></h2>

<pre><code class="language-rust">fn main() {
    let numbers = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Chaining adapters
    let result: Vec&lt;i32&gt; = numbers.iter()
        .filter(|&&x| x % 2 == 0)        // Lọc số chẵn
        .map(|&x| x * x)                  // Bình phương
        .collect();
    // [4, 16, 36, 64, 100]

    // fold — accumulate
    let sum: i32 = numbers.iter().fold(0, |acc, &x| acc + x);

    // find, any, all
    let first_even = numbers.iter().find(|&&x| x % 2 == 0); // Some(&2)
    let has_negative = numbers.iter().any(|&x| x < 0);       // false

    // zip
    let names = vec!["Alice", "Bob"];
    let ages = vec![25, 30];
    let people: Vec&lt;_&gt; = names.iter().zip(ages.iter()).collect();
    // [("Alice", 25), ("Bob", 30)]

    // enumerate
    for (i, name) in names.iter().enumerate() {
        println!("{}: {}", i, name);
    }

    // flat_map
    let words: Vec&lt;&str&gt; = vec!["hello world", "foo bar"]
        .iter()
        .flat_map(|s| s.split_whitespace())
        .collect();
    // ["hello", "world", "foo", "bar"]
}
</code></pre>

<h2 id="3-collections"><strong>3. Collections</strong></h2>

<pre><code class="language-rust">use std::collections::{HashMap, HashSet, BTreeMap};

fn main() {
    // HashMap
    let mut scores: HashMap&lt;&str, i32&gt; = HashMap::new();
    scores.insert("Alice", 95);
    scores.insert("Bob", 87);
    scores.entry("Charlie").or_insert(90); // Insert nếu chưa có

    // Đếm từ
    let text = "hello world hello rust world";
    let mut word_count: HashMap&lt;&str, i32&gt; = HashMap::new();
    for word in text.split_whitespace() {
        *word_count.entry(word).or_insert(0) += 1;
    }

    // HashSet — unique values
    let mut tags: HashSet&lt;String&gt; = HashSet::new();
    tags.insert("rust".into());
    tags.insert("programming".into());

    let other_tags: HashSet&lt;String&gt; = ["rust", "web"].iter().map(|s| s.to_string()).collect();
    let intersection: HashSet&lt;_&gt; = tags.intersection(&other_tags).collect();

    // BTreeMap — sorted keys
    let mut sorted: BTreeMap&lt;String, i32&gt; = BTreeMap::new();
    sorted.insert("c".into(), 3);
    sorted.insert("a".into(), 1);
    // Iteration: a->1, c->3 (sorted)
}
</code></pre>

<p>Next article: <strong>Error Handling & Modules</strong>.</p>
