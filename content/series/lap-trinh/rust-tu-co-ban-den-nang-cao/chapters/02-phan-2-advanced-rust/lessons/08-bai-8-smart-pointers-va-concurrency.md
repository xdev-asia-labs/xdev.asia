---
id: 019d8b40-f204-7001-b007-rust000000204
title: 'Bài 8: Smart Pointers & Concurrency'
slug: bai-8-smart-pointers-va-concurrency
description: >-
  Box, Rc, Arc, RefCell, Mutex, RwLock. Send/Sync traits.
  std::thread, message passing (channels). Shared state concurrency.
  Rayon for data parallelism. Fearless concurrency.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 8
section_title: "Phần 2: Advanced Rust"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<h2 id="1-smart-pointers"><strong>1. Smart Pointers</strong></h2>

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

<h2 id="2-threads"><strong>2. Threads & Message Passing</strong></h2>

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

<h2 id="3-shared-state"><strong>3. Shared State — Arc + Mutex</strong></h2>

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

<h2 id="4-rayon"><strong>4. Rayon — Data Parallelism</strong></h2>

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
<thead><tr><th>Type</th><th>Single-thread</th><th>Multi-thread</th></tr></thead>
<tbody>
<tr><td>Ownership</td><td>Box&lt;T&gt;</td><td>Box&lt;T&gt; + Send</td></tr>
<tr><td>Shared</td><td>Rc&lt;T&gt;</td><td>Arc&lt;T&gt;</td></tr>
<tr><td>Interior mutability</td><td>RefCell&lt;T&gt;</td><td>Mutex&lt;T&gt; / RwLock&lt;T&gt;</td></tr>
</tbody>
</table>

<p>Bài tiếp theo: <strong>Async Rust & Tokio</strong>.</p>
