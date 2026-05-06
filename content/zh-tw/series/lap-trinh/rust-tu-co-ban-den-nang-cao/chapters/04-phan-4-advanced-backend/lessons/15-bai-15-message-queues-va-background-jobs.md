---
id: 019d8b40-f403-7001-b007-rust000000403
title: 第 15 課：訊息佇列和後台作業
slug: bai-15-message-queues-va-background-jobs
description: RabbitMQ 與 lapin，Kafka 與 rdkafka。 NATS 訊息傳遞。後台作業處理。事件驅動的架構模式。 Redis 發佈/訂閱。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: 第 4 部分：進階後端
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: Rust：從基礎到高級
  slug: rust-tu-co-ban-den-nang-cao
locale: zh-tw
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-5654" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-5654)"/>

  <!-- Decorations -->
  <g>
    <circle cx="894" cy="232" r="12" fill="#f472b6" opacity="0.07"/>
    <circle cx="688" cy="126" r="14" fill="#f472b6" opacity="0.09"/>
    <circle cx="982" cy="280" r="16" fill="#f472b6" opacity="0.11"/>
    <circle cx="776" cy="174" r="18" fill="#f472b6" opacity="0.13"/>
    <circle cx="1070" cy="68" r="20" fill="#f472b6" opacity="0.05"/>
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
    <line x1="600" y1="212" x2="1100" y2="292" stroke="#f472b6" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="242" x2="1050" y2="312" stroke="#f472b6" stroke-width="0.5" opacity="0.08"/>
    <polygon points="985.3826859021799,148.5 985.3826859021799,175.5 962,189 938.6173140978201,175.5 938.6173140978201,148.5 962,135" fill="none" stroke="#f472b6" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#f472b6"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#f472b6" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#f472b6">💻 程式設計 — 第 15 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 15 課：訊息佇列和後台作業</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階後端</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-rabbitmq"><strong>1.RabbitMQ 與 Lapin</strong></h2>

<pre><code class="language-rust">use lapin::{Connection, ConnectionProperties, options::*, types::FieldTable, BasicProperties};

async fn publish(channel: &Channel, message: &str) -> Result&lt;(), lapin::Error&gt; {
    channel.basic_publish(
        "",           // exchange
        "task_queue", // routing key
        BasicPublishOptions::default(),
        message.as_bytes(),
        BasicProperties::default().with_delivery_mode(2), // persistent
    ).await?.await?;
    Ok(())
}

async fn consume(channel: &Channel) -> Result&lt;(), lapin::Error&gt; {
    channel.basic_qos(1, BasicQosOptions::default()).await?;

    let mut consumer = channel.basic_consume(
        "task_queue",
        "worker",
        BasicConsumeOptions::default(),
        FieldTable::default(),
    ).await?;

    while let Some(delivery) = consumer.next().await {
        let delivery = delivery?;
        let message = String::from_utf8_lossy(&delivery.data);
        println!("Received: {}", message);

        // Process...

        delivery.ack(BasicAckOptions::default()).await?;
    }
    Ok(())
}
</code></pre>

<h2 id="2-kafka"><strong>2.Kafka 與 rdkafka</strong></h2>

<pre><code class="language-rust">use rdkafka::producer::{FutureProducer, FutureRecord};
use rdkafka::consumer::{StreamConsumer, Consumer};
use rdkafka::ClientConfig;

// Producer
async fn produce(producer: &FutureProducer, topic: &str, key: &str, payload: &str) {
    producer.send(
        FutureRecord::to(topic).key(key).payload(payload),
        Duration::from_secs(5),
    ).await.unwrap();
}

// Consumer
async fn consume_kafka(brokers: &str, group_id: &str, topic: &str) {
    let consumer: StreamConsumer = ClientConfig::new()
        .set("bootstrap.servers", brokers)
        .set("group.id", group_id)
        .set("auto.offset.reset", "earliest")
        .create()
        .unwrap();

    consumer.subscribe(&[topic]).unwrap();

    let mut stream = consumer.stream();
    while let Some(result) = stream.next().await {
        match result {
            Ok(msg) => {
                let payload = msg.payload_view::&lt;str&gt;().unwrap().unwrap();
                println!("Key: {:?}, Payload: {}", msg.key(), payload);
            }
            Err(e) => eprintln!("Error: {}", e),
        }
    }
}
</code></pre>

<h2 id="3-redis-pubsub"><strong>3.Redis 發布/訂閱</strong></h2>

<pre><code class="language-rust">use redis::AsyncCommands;

async fn publisher(client: &redis::Client) -> redis::RedisResult&lt;()&gt; {
    let mut conn = client.get_multiplexed_async_connection().await?;
    conn.publish("events", "order:created:123").await?;
    Ok(())
}

async fn subscriber(client: &redis::Client) -> redis::RedisResult&lt;()&gt; {
    let mut pubsub = client.get_async_pubsub().await?;
    pubsub.subscribe("events").await?;
    let mut stream = pubsub.on_message();
    while let Some(msg) = stream.next().await {
        let payload: String = msg.get_payload()?;
        println!("Event: {}", payload);
    }
    Ok(())
}
</code></pre>

<h2 id="4-background"><strong>4. 後台作業模式</strong></h2>

<pre><code class="language-rust">use tokio::sync::mpsc;

enum Job {
    SendEmail { to: String, subject: String, body: String },
    ProcessImage { path: String },
    GenerateReport { user_id: String },
}

async fn job_worker(mut rx: mpsc::Receiver&lt;Job&gt;) {
    while let Some(job) = rx.recv().await {
        match job {
            Job::SendEmail { to, subject, .. } => {
                println!("Sending email to {} - {}", to, subject);
            }
            Job::ProcessImage { path } => {
                tokio::task::spawn_blocking(move || {
                    // CPU-intensive image processing
                }).await.unwrap();
            }
            Job::GenerateReport { user_id } => {
                println!("Generating report for {}", user_id);
            }
        }
    }
}
</code></pre>

<p>下一篇： <strong>快取、CLI 工具和宏</strong>。</p>
