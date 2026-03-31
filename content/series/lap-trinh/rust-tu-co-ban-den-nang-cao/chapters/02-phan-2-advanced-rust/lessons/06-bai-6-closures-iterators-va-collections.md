---
id: 019d8b40-f202-7001-b007-rust000000202
title: 'Bài 6: Closures, Iterators & Collections'
slug: bai-6-closures-iterators-va-collections
description: >-
  Closures, Fn/FnMut/FnOnce traits. Iterator trait, iterator adapters
  (map, filter, fold). Vec, HashMap, HashSet, BTreeMap. Collecting,
  chaining, custom iterators.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 6
section_title: "Phần 2: Advanced Rust"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

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

<p>Bài tiếp theo: <strong>Error Handling & Modules</strong>.</p>
