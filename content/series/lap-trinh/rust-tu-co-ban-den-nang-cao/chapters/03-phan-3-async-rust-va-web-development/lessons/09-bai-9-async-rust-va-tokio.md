---
id: 019d8b40-f301-7001-b007-rust000000301
title: 'Bài 9: Async Rust & Tokio'
slug: bai-9-async-rust-va-tokio
description: >-
  Async/await, Future trait, Pin. Tokio runtime, spawn, JoinHandle.
  Tokio channels (mpsc, broadcast, watch). tokio::select!, tokio::sync.
  Async streams.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: "Phần 3: Async Rust & Web Development"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<h2 id="1-async-await"><strong>1. Async/Await Basics</strong></h2>

<pre><code class="language-rust">// async fn trả về impl Future
async fn fetch_data(url: &str) -> Result&lt;String, reqwest::Error&gt; {
    let response = reqwest::get(url).await?;
    let body = response.text().await?;
    Ok(body)
}

#[tokio::main]
async fn main() {
    let result = fetch_data("https://api.example.com/data").await;
    match result {
        Ok(data) => println!("{}", data),
        Err(e) => eprintln!("Error: {}", e),
    }
}
</code></pre>

<h2 id="2-tokio"><strong>2. Tokio Runtime & Tasks</strong></h2>

<pre><code class="language-rust">use tokio::task;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    // Spawn concurrent tasks
    let task1 = task::spawn(async {
        sleep(Duration::from_secs(1)).await;
        "Task 1 done"
    });

    let task2 = task::spawn(async {
        sleep(Duration::from_secs(2)).await;
        "Task 2 done"
    });

    // Await cả hai
    let (r1, r2) = tokio::join!(task1, task2);
    println!("{}, {}", r1.unwrap(), r2.unwrap());

    // select! — race giữa futures
    tokio::select! {
        val = async { sleep(Duration::from_secs(1)).await; "fast" } => {
            println!("First: {}", val);
        }
        val = async { sleep(Duration::from_secs(5)).await; "slow" } => {
            println!("First: {}", val);
        }
    }

    // spawn_blocking — cho CPU-bound tasks
    let result = task::spawn_blocking(|| {
        // Heavy computation
        (0..1_000_000).sum::&lt;u64&gt;()
    }).await.unwrap();
}
</code></pre>

<h2 id="3-channels"><strong>3. Tokio Channels</strong></h2>

<pre><code class="language-rust">use tokio::sync::{mpsc, broadcast, watch};

#[tokio::main]
async fn main() {
    // mpsc — multi-producer single-consumer
    let (tx, mut rx) = mpsc::channel(32); // buffer size
    let tx2 = tx.clone();

    tokio::spawn(async move {
        tx.send("hello").await.unwrap();
    });

    tokio::spawn(async move {
        tx2.send("world").await.unwrap();
    });

    while let Some(msg) = rx.recv().await {
        println!("{}", msg);
    }

    // broadcast — mọi receiver đều nhận
    let (tx, _) = broadcast::channel(16);
    let mut rx1 = tx.subscribe();
    let mut rx2 = tx.subscribe();

    tx.send("broadcast msg").unwrap();

    // watch — chỉ giữ value mới nhất
    let (tx, mut rx) = watch::channel("initial");
    tx.send("updated").unwrap();
    println!("{}", *rx.borrow()); // "updated"
}
</code></pre>

<h2 id="4-semaphore"><strong>4. Semaphore & Rate Limiting</strong></h2>

<pre><code class="language-rust">use tokio::sync::Semaphore;
use std::sync::Arc;

async fn process_batch(urls: Vec&lt;String&gt;) {
    let semaphore = Arc::new(Semaphore::new(10)); // Max 10 concurrent

    let mut handles = vec![];
    for url in urls {
        let permit = semaphore.clone().acquire_owned().await.unwrap();
        handles.push(tokio::spawn(async move {
            let result = reqwest::get(&url).await;
            drop(permit); // Release semaphore
            result
        }));
    }

    for handle in handles {
        let _ = handle.await;
    }
}
</code></pre>

<p>Bài tiếp theo: <strong>Axum Framework & REST API</strong>.</p>
