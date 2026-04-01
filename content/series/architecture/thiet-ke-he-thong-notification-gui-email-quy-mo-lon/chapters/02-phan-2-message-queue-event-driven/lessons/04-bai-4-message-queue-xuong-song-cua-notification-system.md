---
id: 019e7a10-a104-7001-d001-f1e2d3c4b504
title: "Bài 4: Message Queue — Xương sống của Notification System"
slug: bai-4-message-queue-xuong-song-cua-notification-system
description: >-
  Tại sao cần message queue cho email system. So sánh Kafka vs RabbitMQ vs Amazon SQS vs Redis Streams. Partitioning strategies, consumer groups, exactly-once semantics.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 4
section_title: "Phần 2: Message Queue & Event-Driven Architecture"
course:
  id: 019e7a10-a100-7001-d001-f1e2d3c4b5a6
  title: "Thiết kế Hệ thống Notification gửi hàng triệu Email"
  slug: thiet-ke-he-thong-notification-gui-email-quy-mo-lon
---

## Giới thiệu

Message Queue là **xương sống** của mọi notification system quy mô lớn. Nó giúp decouple producer (service tạo notification) và consumer (worker gửi email), đồng thời đảm bảo durability khi system components fail.

---

## 1. Tại sao cần Message Queue?

### Không có Message Queue

```
Client → API → Send Email → Response
                    │
                    └── Nếu ESP chậm 5s → API response chậm 5s
                        Nếu ESP down → API return 500
                        10K concurrent requests → 10K connections to ESP
```

### Có Message Queue

```
Client → API → Enqueue → Response (< 100ms)
                  │
                  └── Queue buffer messages
                      Workers consume at their own pace
                      ESP down → messages wait in queue
                      Spike traffic → queue absorbs burst
```

### Lợi ích chính

| Benefit | Mô tả |
|---------|--------|
| **Decoupling** | API không cần biết về ESP |
| **Buffering** | Absorb traffic spikes |
| **Durability** | Messages persist qua restarts |
| **Ordering** | Đảm bảo thứ tự (per partition) |
| **Retry** | Failed messages re-process |
| **Scaling** | Thêm workers độc lập |

---

## 2. So sánh Message Queue Technologies

### Feature Matrix

| Feature | Kafka | RabbitMQ | Amazon SQS | Redis Streams |
|---------|-------|----------|------------|---------------|
| Throughput | 1M+ msg/s | 50K msg/s | 3K msg/s/queue | 100K+ msg/s |
| Latency | ms | μs-ms | ms-100ms | μs-ms |
| Ordering | Per partition | Per queue | Best effort (FIFO available) | Per stream |
| Retention | Configurable (days/unlimited) | Until consumed | 14 days max | Configurable |
| Replay | ✅ Offset-based | ❌ | ❌ | ✅ ID-based |
| Dead Letter | Manual | ✅ Built-in | ✅ Built-in | Manual |
| Scaling | Partitions | Limited | Unlimited | Sharding |
| Operational | Complex | Moderate | Managed | Simple |
| Cost (10M msg/day) | ~$500/mo (self-hosted) | ~$300/mo | ~$150/mo | ~$200/mo |

### Recommendation theo use case

```
Email system gửi triệu email:
├── High throughput + replay needed      → Kafka ✅
├── Low latency + simple setup           → RabbitMQ
├── Managed + no ops overhead            → Amazon SQS
└── Already have Redis + moderate scale  → Redis Streams
```

**Chọn Kafka** cho notification system triệu email vì:
- Throughput cao nhất
- Message replay cho debugging
- Partition-based parallel processing
- Event sourcing / audit trail

---

## 3. Kafka Deep Dive cho Email System

### Topic & Partition Design

```
Topic: email-send
├── Partition 0: critical priority emails
├── Partition 1: high priority emails
├── Partition 2-7: normal priority emails (6 partitions)
├── Partition 8-9: low priority emails

Topic: email-status
├── Partition 0-3: delivery status updates

Topic: email-dlq
├── Partition 0: failed messages for manual review

Topic: email-webhook
├── Partition 0-1: ESP webhook events (bounce, complaint, delivery)
```

### Producer Configuration

```python
from confluent_kafka import Producer

producer_config = {
    'bootstrap.servers': 'kafka-1:9092,kafka-2:9092,kafka-3:9092',

    # Durability: đảm bảo message không mất
    'acks': 'all',                    # Wait for all replicas
    'enable.idempotence': True,       # Exactly-once per partition

    # Performance: batch gửi messages
    'batch.size': 65536,              # 64KB batch
    'linger.ms': 10,                  # Wait 10ms to fill batch
    'compression.type': 'lz4',       # Compress for throughput

    # Reliability
    'retries': 3,
    'retry.backoff.ms': 100,
    'max.in.flight.requests.per.connection': 5,  # With idempotence=true
}

producer = Producer(producer_config)

def publish_email(campaign_id: str, recipient: dict, priority: str):
    message = {
        'campaign_id': campaign_id,
        'recipient': recipient,
        'priority': priority,
        'created_at': datetime.utcnow().isoformat(),
    }

    # Partition key = priority để route đúng partition
    producer.produce(
        topic='email-send',
        key=priority.encode('utf-8'),
        value=json.dumps(message).encode('utf-8'),
        callback=delivery_callback,
    )

def delivery_callback(err, msg):
    if err:
        logger.error(f"Delivery failed: {err}")
        # Save to local fallback queue
    else:
        logger.debug(f"Delivered to {msg.topic()}[{msg.partition()}]")
```

### Consumer Configuration

```python
from confluent_kafka import Consumer

consumer_config = {
    'bootstrap.servers': 'kafka-1:9092,kafka-2:9092,kafka-3:9092',
    'group.id': 'email-workers',

    # Offset management
    'auto.offset.reset': 'earliest',
    'enable.auto.commit': False,       # Manual commit after processing

    # Performance
    'max.poll.interval.ms': 300000,    # 5 min max processing time
    'session.timeout.ms': 30000,
    'heartbeat.interval.ms': 10000,
    'fetch.min.bytes': 1024,           # Wait for 1KB before fetching
    'fetch.max.wait.ms': 500,

    # Batch consumption
    'max.poll.records': 100,           # 100 messages per poll
}

class EmailConsumer:
    def __init__(self):
        self.consumer = Consumer(consumer_config)
        self.consumer.subscribe(['email-send'])
        self.email_sender = EmailSender()

    def run(self):
        try:
            while True:
                messages = self.consumer.consume(
                    num_messages=100,
                    timeout=1.0
                )

                for msg in messages:
                    if msg.error():
                        self.handle_error(msg)
                        continue

                    try:
                        self.process_message(msg)
                    except Exception as e:
                        self.send_to_dlq(msg, str(e))

                # Commit offset after successful processing
                self.consumer.commit(asynchronous=False)

        except KeyboardInterrupt:
            pass
        finally:
            self.consumer.close()

    def process_message(self, msg):
        email_data = json.loads(msg.value())
        self.email_sender.send(email_data)
```

---

## 4. Partition Strategy cho Email Workload

### Strategy 1: Priority-Based Partitioning

```python
class PriorityPartitioner:
    PARTITION_MAP = {
        'critical': [0],          # Dedicated partition
        'high': [1],              # Dedicated partition
        'normal': [2, 3, 4, 5, 6, 7],  # 6 partitions
        'low': [8, 9],            # 2 partitions
    }

    def partition(self, priority: str, num_partitions: int) -> int:
        partitions = self.PARTITION_MAP[priority]
        # Round-robin within priority's partitions
        return random.choice(partitions)
```

### Strategy 2: Domain-Based Partitioning

```python
class DomainPartitioner:
    """Group emails by recipient domain for rate limiting"""

    def partition(self, recipient_email: str, num_partitions: int) -> int:
        domain = recipient_email.split('@')[1]
        return hash(domain) % num_partitions
        # → All @gmail.com emails go to same partition
        # → Easier per-domain rate limiting
```

### Strategy 3: Hybrid Approach (Recommended)

```python
class HybridPartitioner:
    def partition(self, message: dict, num_partitions: int) -> int:
        priority = message['priority']

        if priority == 'critical':
            return 0  # Dedicated

        # Hash by campaign_id for normal/marketing
        # → All emails of same campaign go to same partition set
        campaign_hash = hash(message['campaign_id'])
        return 1 + (campaign_hash % (num_partitions - 1))
```

---

## 5. Exactly-Once vs At-Least-Once

### At-Least-Once (Recommended cho email)

```python
# Consumer processes message → sends email → commits offset
# If crash between send and commit → re-delivery → duplicate email
# Solution: idempotency check before sending

async def process(self, message):
    key = f"email:{message.campaign_id}:{message.recipient}"

    # Idempotency check
    if await redis.exists(key):
        return  # Already sent

    await self.send_email(message)
    await redis.set(key, "sent", ex=7*86400)  # 7 days TTL
```

### Exactly-Once (Kafka Transactions)

```python
# More complex, higher latency, but guaranteed
producer = Producer({
    **producer_config,
    'transactional.id': f'email-worker-{worker_id}',
})
producer.init_transactions()

try:
    producer.begin_transaction()
    # Process and produce in transaction
    result = process_email(message)
    producer.produce('email-status', result)
    producer.send_offsets_to_transaction(
        consumer.position(consumer.assignment()),
        consumer.consumer_group_metadata()
    )
    producer.commit_transaction()
except Exception:
    producer.abort_transaction()
```

---

## 6. Monitoring Kafka Health

### Key Metrics

```yaml
# Consumer lag = messages in queue chưa processed
kafka_consumer_lag:
  warning: > 10000
  critical: > 100000

# Throughput
kafka_messages_per_second:
  target: > 2000

# Consumer group health
kafka_consumer_group_members:
  expected: 20  # Number of workers

# Partition balance
kafka_partition_assignment:
  check: even distribution across consumers
```

---

## Tổng kết

- Message Queue là **bắt buộc** cho email system quy mô lớn
- **Kafka** là lựa chọn tốt nhất cho throughput cao và audit trail
- Partition strategy ảnh hưởng trực tiếp đến **performance** và **ordering**
- **At-least-once + idempotency** là approach pragmatic nhất

**Bài tiếp theo:** Xây dựng Event-Driven Notification Pipeline hoàn chỉnh với Kafka.
