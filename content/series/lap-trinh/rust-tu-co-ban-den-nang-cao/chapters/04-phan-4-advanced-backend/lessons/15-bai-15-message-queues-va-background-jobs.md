---
id: 019d8b40-f403-7001-b007-rust000000403
title: 'Bài 15: Message Queues & Background Jobs'
slug: bai-15-message-queues-va-background-jobs
description: >-
  RabbitMQ với lapin, Kafka với rdkafka. NATS messaging.
  Background job processing. Event-driven architecture patterns.
  Redis pub/sub.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 15
section_title: "Phần 4: Advanced Backend"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<h2 id="1-rabbitmq"><strong>1. RabbitMQ với Lapin</strong></h2>

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

<h2 id="2-kafka"><strong>2. Kafka với rdkafka</strong></h2>

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

<h2 id="3-redis-pubsub"><strong>3. Redis Pub/Sub</strong></h2>

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

<h2 id="4-background"><strong>4. Background Job Pattern</strong></h2>

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

<p>Bài tiếp theo: <strong>Caching, CLI Tools & Macros</strong>.</p>
