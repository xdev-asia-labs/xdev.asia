---
id: 019d8b40-f204-7001-b007-rust000000204
title: 第 8 課：智慧指針和並發
slug: bai-8-smart-pointers-va-concurrency
description: >-
  Box、Rc、Arc、RefCell、Mutex、RwLock。發送/同步特徵。 std::thread，訊息傳遞（通道）。共享狀態並發。 Rayon
  用於資料並行性。無畏並發。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: 第 2 部分：高級 Rust
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: Rust：從基礎到高級
  slug: rust-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9944" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9944)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1036" cy="38" r="24" fill="#2dd4bf" opacity="0.13"/>
    <circle cx="972" cy="214" r="32" fill="#2dd4bf" opacity="0.11"/>
    <circle cx="908" cy="130" r="10" fill="#2dd4bf" opacity="0.09"/>
    <circle cx="844" cy="46" r="18" fill="#2dd4bf" opacity="0.07"/>
    <circle cx="780" cy="222" r="26" fill="#2dd4bf" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#2dd4bf" opacity="0.15"/>
    <line x1="600" y1="78" x2="1100" y2="158" stroke="#2dd4bf" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="108" x2="1050" y2="178" stroke="#2dd4bf" stroke-width="0.5" opacity="0.08"/>
    <polygon points="1056.5788383248864,211.5 1056.5788383248864,244.5 1028,261 999.4211616751136,244.5 999.4211616751135,211.5 1028,195" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#2dd4bf"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#2dd4bf" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#2dd4bf">💻 程式設計 — 第 8 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 8 課：智慧指針和並發</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 2 部分：高級 Rust</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-smart-pointers"><strong>1. 智慧指針</strong></h2>

<pre><code class="language-rust">use std::rc::Rc;
use std::cell::RefCell;

// Box&lt;T&gt; — heap allocation
let b = Box::new(5);

// Rc&lt;T&gt; — reference counting (single-thread)
let data = Rc::new(vec![1, 2, 3]);
let clone1 = Rc::clone(&data); // Tăng reference count
let clone2 = Rc::clone(&data);
println!("Count: {}", Rc::strong_count(&data)); // 3

// RefCell&lt;T&gt; — interior mutability (runtime borrow check)
let value = RefCell::new(42);
*value.borrow_mut() += 1;
println!("{}", value.borrow()); // 43

// Rc + RefCell — shared mutable data (single-thread)
let shared = Rc::new(RefCell::new(Vec::new()));
let clone = Rc::clone(&shared);
shared.borrow_mut().push(1);
clone.borrow_mut().push(2);
</code></pre>

<h2 id="2-threads"><strong>2. 線程和訊息傳遞</strong></h2>

<pre><code class="language-rust">use std::thread;
use std::sync::mpsc;

fn main() {
    // Spawn thread
    let handle = thread::spawn(|| {
        for i in 1..5 {
            println!("Thread: {}", i);
        }
        42 // Return value
    });

    let result = handle.join().unwrap(); // 42

    // Move data vào thread
    let data = vec![1, 2, 3];
    let handle = thread::spawn(move || {
        println!("{:?}", data);
    });

    // Channel — message passing
    let (tx, rx) = mpsc::channel();
    let tx2 = tx.clone(); // Multiple producers

    thread::spawn(move || {
        tx.send("hello from thread 1").unwrap();
    });

    thread::spawn(move || {
        tx2.send("hello from thread 2").unwrap();
    });

    for msg in rx {
        println!("Received: {}", msg);
    }
}
</code></pre>

<h2 id="3-shared-state"><strong>3. 共享狀態——Arc + Mutex</strong></h2>

<pre><code class="language-rust">use std::sync::{Arc, Mutex, RwLock};

fn main() {
    // Arc&lt;Mutex&lt;T&gt;&gt; — thread-safe shared mutable state
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }
    println!("Counter: {}", *counter.lock().unwrap()); // 10

    // RwLock — nhiều reader, 1 writer
    let config = Arc::new(RwLock::new(HashMap::new()));
    {
        let mut w = config.write().unwrap();
        w.insert("key", "value");
    }
    {
        let r = config.read().unwrap();
        println!("{:?}", r.get("key"));
    }
}
</code></pre>

<h2 id="4-rayon"><strong>4. Rayon——數據並行</strong></h2>

<pre><code class="language-rust">use rayon::prelude::*;

fn main() {
    let numbers: Vec&lt;i64&gt; = (0..1_000_000).collect();

    // Parallel iterator — tự động chia work
    let sum: i64 = numbers.par_iter().sum();

    // Parallel map + filter
    let results: Vec&lt;i64&gt; = numbers.par_iter()
        .filter(|&&x| x % 2 == 0)
        .map(|&x| x * x)
        .collect();

    // Parallel sort
    let mut data = vec![5, 3, 1, 4, 2];
    data.par_sort();
}
</code></pre>

<table>
<thead><tr><th>類型</th><th>單執行緒</th><th>多執行緒</th></tr></thead>
<tbody>
<tr><td>所有權</td><td>盒子<T></td><td>框<T> + 發送</td></tr>
<tr><td>共享</td><td>RC<T></td><td>圓弧<T></td></tr>
<tr><td>內部可變性</td><td>參考單元<T></td><td>互斥鎖<T> / RwLock<T></td></tr>
</tbody>
</table>

<p>下一篇： <strong>非同步 Rust 和 Tokio</strong>。</p>
