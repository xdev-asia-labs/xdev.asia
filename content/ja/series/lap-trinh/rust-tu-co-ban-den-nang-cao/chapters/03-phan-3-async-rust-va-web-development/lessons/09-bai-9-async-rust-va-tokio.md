---
id: 019d8b40-f301-7001-b007-rust000000301
title: 'レッスン 9: 非同期 Rust と Tokio'
slug: bai-9-async-rust-va-tokio
description: >-
  非同期/待機、将来の特性、ピン。 Tokio ランタイム、スポーン、JoinHandle。 Tokio チャンネル (mpsc、ブロードキャスト、視聴)。
  tokio::select!、tokio::sync。非同期ストリーム。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 9
section_title: 'パート 3: 非同期 Rust と Web 開発'
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: 基本から上級まで'
  slug: rust-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-2595" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-2595)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1059" cy="207" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="1018" cy="266" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="977" cy="65" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="936" cy="124" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="895" cy="183" r="20" fill="#818cf8" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#818cf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#818cf8" opacity="0.15"/>
    <line x1="600" y1="157" x2="1100" y2="237" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="187" x2="1050" y2="257" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="984.712812921102,141 984.712812921102,173 957,189 929.287187078898,173 929.287187078898,141 957,125" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 プログラミング — レッスン 9</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 9: 非同期 Rust と Tokio</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust: 基本から上級まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 3: 非同期 Rust と Web 開発</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-async-await"><strong>1. 非同期/待機の基本</strong></h2>

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

<h2 id="2-tokio"><strong>2.Tokio ランタイムとタスク</strong></h2>

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

<h2 id="3-channels"><strong>3. トキオチャンネル</strong></h2>

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

<h2 id="4-semaphore"><strong>4. セマフォとレート制限</strong></h2>

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

<p>次の記事: <strong>Axum フレームワークと REST API</strong>。</p>
