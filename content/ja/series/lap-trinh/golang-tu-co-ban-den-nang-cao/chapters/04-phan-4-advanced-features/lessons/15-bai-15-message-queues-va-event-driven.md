---
id: 019d8b40-b403-7001-b003-golang0000403
title: 'レッスン 15: メッセージ キューとイベント駆動型'
slug: bai-15-message-queues-va-event-driven
description: >-
  Go を使用した RabbitMQ、交換、キュー。 Kafka のプロデューサー/コンシューマー。イベント駆動型のアーキテクチャ
  パターン。サーガパターン、アウトボックスパターン。デッドレターキューと再試行戦略。
duration_minutes: 150
is_free: true
video_url: null
sort_order: 15
section_title: 'パート 4: 高度な機能'
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: 基本から高度まで'
  slug: golang-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-8921" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-8921)"/>

  <!-- Decorations -->
  <g>
    <circle cx="890" cy="260" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="680" cy="250" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="970" cy="240" r="28" fill="#38bdf8" opacity="0.05"/>
    <circle cx="760" cy="230" r="18" fill="#38bdf8" opacity="0.05"/>
    <circle cx="1050" cy="220" r="8" fill="#38bdf8" opacity="0.05"/>
    <circle cx="750" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#38bdf8" opacity="0.15"/>
    <line x1="600" y1="220" x2="1100" y2="300" stroke="#38bdf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="250" x2="1050" y2="320" stroke="#38bdf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="950.3108891324554,102.5 950.3108891324554,137.5 920,155 889.6891108675446,137.5 889.6891108675446,102.50000000000001 920,85" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#38bdf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#38bdf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#38bdf8">💻 プログラミング — レッスン 15</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 15: メッセージ キューとイベント駆動型</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 高度な機能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-message-queue-overview"><strong>1. メッセージキューの概要</strong></h2>

<table>
<thead><tr><th>特長</th><th>ラビットMQ</th><th>カフカ</th><th>NATS</th></tr></thead>
<tbody>
<tr><td>モデル</td><td>メッセージブローカー</td><td>イベントログ</td><td>パブ/サブ</td></tr>
<tr><td>注文</td><td>キューごと</td><td>パーティションごと</td><td>保証なし</td></tr>
<tr><td>持続性</td><td>オプション</td><td>常に（保持）</td><td>オプション（ジェットストリーム）</td></tr>
<tr><td>スループット</td><td>~50,000 メッセージ/秒</td><td>~100万メッセージ/秒</td><td>~1,000万メッセージ/秒</td></tr>
<tr><td>ユースケース</td><td>タスクキュー、RPC</td><td>イベントストリーミング</td><td>マイクロサービス、IoT</td></tr>
<tr><td>複雑さ</td><td>中</td><td>高</td><td>低い</td></tr>
</tbody>
</table>

<h2 id="2-rabbitmq-voi-go"><strong>2. Go を使用した RabbitMQ</strong></h2>

<h3 id="2-1-setup"><strong>2.1.セットアップ</strong></h3>

<pre><code class="language-bash">go get github.com/rabbitmq/amqp091-go
</code></pre>

<h3 id="2-2-connection-manager"><strong>2.2.接続マネージャー</strong></h3>

<pre><code class="language-go">package rabbitmq

import (
    "context"
    "fmt"
    "log"
    "sync"
    "time"
    
    amqp "github.com/rabbitmq/amqp091-go"
)

type Connection struct {
    conn    *amqp.Connection
    channel *amqp.Channel
    mu      sync.RWMutex
    url     string
    done    chan struct{}
}

func NewConnection(url string) (*Connection, error) {
    c := &Connection{url: url, done: make(chan struct{})}
    
    if err := c.connect(); err != nil {
        return nil, err
    }
    
    go c.reconnectLoop()
    
    return c, nil
}

func (c *Connection) connect() error {
    conn, err := amqp.Dial(c.url)
    if err != nil {
        return fmt.Errorf("dial: %w", err)
    }
    
    ch, err := conn.Channel()
    if err != nil {
        conn.Close()
        return fmt.Errorf("channel: %w", err)
    }
    
    c.mu.Lock()
    c.conn = conn
    c.channel = ch
    c.mu.Unlock()
    
    return nil
}

func (c *Connection) reconnectLoop() {
    for {
        select {
        case <-c.done:
            return
        case err := <-c.conn.NotifyClose(make(chan *amqp.Error)):
            if err != nil {
                log.Printf("RabbitMQ connection lost: %v", err)
            }
            
            for i := 0; i < 30; i++ {
                time.Sleep(time.Duration(i+1) * time.Second)
                if err := c.connect(); err == nil {
                    log.Println("RabbitMQ reconnected")
                    break
                }
            }
        }
    }
}

func (c *Connection) Close() {
    close(c.done)
    c.channel.Close()
    c.conn.Close()
}
</code></pre>

<h3 id="2-3-publisher"><strong>2.3.出版社</strong></h3>

<pre><code class="language-go">type Publisher struct {
    conn *Connection
}

func NewPublisher(conn *Connection) *Publisher {
    return &Publisher{conn: conn}
}

func (p *Publisher) Publish(ctx context.Context, exchange, routingKey string, body []byte) error {
    p.conn.mu.RLock()
    ch := p.conn.channel
    p.conn.mu.RUnlock()
    
    return ch.PublishWithContext(ctx,
        exchange,
        routingKey,
        false, // mandatory
        false, // immediate
        amqp.Publishing{
            ContentType:  "application/json",
            Body:         body,
            DeliveryMode: amqp.Persistent,
            Timestamp:    time.Now(),
            MessageId:    uuid.New().String(),
        },
    )
}

// Setup exchange & queue
func SetupExchange(ch *amqp.Channel) error {
    // Topic exchange cho event routing
    if err := ch.ExchangeDeclare(
        "events",  // name
        "topic",   // type: direct, fanout, topic, headers
        true,      // durable
        false,     // auto-deleted
        false,     // internal
        false,     // no-wait
        nil,       // arguments
    ); err != nil {
        return err
    }
    
    // Dead letter exchange
    if err := ch.ExchangeDeclare(
        "events.dlx",
        "topic",
        true, false, false, false, nil,
    ); err != nil {
        return err
    }
    
    return nil
}

func SetupQueue(ch *amqp.Channel, queueName, exchange, routingKey string) error {
    // Main queue with DLX
    q, err := ch.QueueDeclare(
        queueName,
        true,  // durable
        false, // auto-delete
        false, // exclusive
        false, // no-wait
        amqp.Table{
            "x-dead-letter-exchange":    "events.dlx",
            "x-dead-letter-routing-key": queueName + ".dead",
            "x-message-ttl":             int32(86400000), // 24h
        },
    )
    if err != nil {
        return err
    }
    
    return ch.QueueBind(q.Name, routingKey, exchange, false, nil)
}
</code></pre>

<h3 id="2-4-consumer"><strong>2.4.消費者</strong></h3>

<pre><code class="language-go">type Consumer struct {
    conn     *Connection
    handlers map[string]MessageHandler
}

type MessageHandler func(ctx context.Context, body []byte) error

func NewConsumer(conn *Connection) *Consumer {
    return &Consumer{
        conn:     conn,
        handlers: make(map[string]MessageHandler),
    }
}

func (c *Consumer) Register(eventType string, handler MessageHandler) {
    c.handlers[eventType] = handler
}

func (c *Consumer) Start(ctx context.Context, queueName string, concurrency int) error {
    c.conn.mu.RLock()
    ch := c.conn.channel
    c.conn.mu.RUnlock()
    
    // Prefetch: limit unacked messages
    if err := ch.Qos(concurrency, 0, false); err != nil {
        return err
    }
    
    msgs, err := ch.Consume(
        queueName,
        "",    // consumer tag
        false, // auto-ack (manual!)
        false, // exclusive
        false, // no-local
        false, // no-wait
        nil,
    )
    if err != nil {
        return err
    }
    
    // Worker pool
    sem := make(chan struct{}, concurrency)
    
    for {
        select {
        case <-ctx.Done():
            return ctx.Err()
        case msg, ok := <-msgs:
            if !ok {
                return fmt.Errorf("channel closed")
            }
            
            sem <- struct{}{}
            go func(d amqp.Delivery) {
                defer func() { <-sem }()
                
                if err := c.processMessage(ctx, d); err != nil {
                    log.Printf("Process error: %v", err)
                    d.Nack(false, false) // Reject → DLQ
                } else {
                    d.Ack(false)
                }
            }(msg)
        }
    }
}

func (c *Consumer) processMessage(ctx context.Context, d amqp.Delivery) error {
    eventType := d.RoutingKey
    handler, ok := c.handlers[eventType]
    if !ok {
        log.Printf("No handler for event: %s", eventType)
        return nil // Ack unknown events
    }
    
    return handler(ctx, d.Body)
}
</code></pre>

<h2 id="3-kafka"><strong>3. カフカと Go</strong></h2>

<pre><code class="language-bash">go get github.com/segmentio/kafka-go
</code></pre>

<pre><code class="language-go">package kafka

import (
    "context"
    "encoding/json"
    "log"
    "time"
    
    "github.com/segmentio/kafka-go"
)

// Producer
type KafkaProducer struct {
    writer *kafka.Writer
}

func NewProducer(brokers []string, topic string) *KafkaProducer {
    return &KafkaProducer{
        writer: &kafka.Writer{
            Addr:         kafka.TCP(brokers...),
            Topic:        topic,
            Balancer:     &kafka.LeastBytes{},
            BatchSize:    100,
            BatchTimeout: 10 * time.Millisecond,
            RequiredAcks: kafka.RequireOne,
        },
    }
}

func (p *KafkaProducer) Publish(ctx context.Context, key string, value interface{}) error {
    data, err := json.Marshal(value)
    if err != nil {
        return err
    }
    
    return p.writer.WriteMessages(ctx, kafka.Message{
        Key:   []byte(key),
        Value: data,
        Time:  time.Now(),
    })
}

func (p *KafkaProducer) Close() error {
    return p.writer.Close()
}

// Consumer Group
type KafkaConsumer struct {
    reader *kafka.Reader
}

func NewConsumer(brokers []string, topic, groupID string) *KafkaConsumer {
    return &KafkaConsumer{
        reader: kafka.NewReader(kafka.ReaderConfig{
            Brokers:        brokers,
            Topic:          topic,
            GroupID:        groupID,
            MinBytes:       1,
            MaxBytes:       10e6, // 10MB
            CommitInterval: time.Second,
            StartOffset:    kafka.LastOffset,
        }),
    }
}

func (c *KafkaConsumer) Consume(ctx context.Context, handler func(kafka.Message) error) error {
    for {
        msg, err := c.reader.ReadMessage(ctx)
        if err != nil {
            if ctx.Err() != nil {
                return nil
            }
            log.Printf("Read error: %v", err)
            continue
        }
        
        if err := handler(msg); err != nil {
            log.Printf("Handle error (offset %d): %v", msg.Offset, err)
        }
    }
}
</code></pre>

<h2 id="4-event-driven-patterns"><strong>4. イベント駆動型パターン</strong></h2>

<h3 id="4-1-event-bus"><strong>4.1.ドメインイベント</strong></h3>

<pre><code class="language-go">// Domain event
type Event struct {
    ID        string    `json:"id"`
    Type      string    `json:"type"`
    Source    string    `json:"source"`
    Data      any       `json:"data"`
    Timestamp time.Time `json:"timestamp"`
}

// Event types
const (
    UserCreated  = "user.created"
    UserUpdated  = "user.updated"
    OrderCreated = "order.created"
    OrderPaid    = "order.paid"
)

// Event bus interface
type EventBus interface {
    Publish(ctx context.Context, event Event) error
    Subscribe(eventType string, handler func(Event) error)
}
</code></pre>

<h3 id="4-2-outbox-pattern"><strong>4.2.送信トレイ パターン (トランザクション送信トレイ)</strong></h3>

<pre><code class="language-go">// Outbox table
type Outbox struct {
    ID        uint      `gorm:"primaryKey"`
    EventType string    `gorm:"index"`
    Payload   string    `gorm:"type:jsonb"`
    Published bool      `gorm:"default:false;index"`
    CreatedAt time.Time
}

// Save event in same transaction as business data
func (s *OrderService) CreateOrder(ctx context.Context, input CreateOrderInput) error {
    return s.db.Transaction(func(tx *gorm.DB) error {
        // 1. Save order
        order := &Order{UserID: input.UserID, Total: input.Total}
        if err := tx.Create(order).Error; err != nil {
            return err
        }
        
        // 2. Save event to outbox (same transaction!)
        event := Event{
            ID:        uuid.New().String(),
            Type:      OrderCreated,
            Data:      order,
            Timestamp: time.Now(),
        }
        payload, _ := json.Marshal(event)
        
        outbox := &Outbox{
            EventType: OrderCreated,
            Payload:   string(payload),
        }
        return tx.Create(outbox).Error
    })
}

// Outbox publisher (separate goroutine)
func (s *OutboxPublisher) PollAndPublish(ctx context.Context) {
    ticker := time.NewTicker(time.Second)
    defer ticker.Stop()
    
    for {
        select {
        case <-ctx.Done():
            return
        case <-ticker.C:
            var events []Outbox
            s.db.Where("published = ?", false).
                Order("id ASC").
                Limit(100).
                Find(&events)
            
            for _, e := range events {
                if err := s.publisher.Publish(ctx, "events", e.EventType, []byte(e.Payload)); err != nil {
                    log.Printf("Publish error: %v", err)
                    continue
                }
                s.db.Model(&e).Update("published", true)
            }
        }
    }
}
</code></pre>

<h2 id="5-retry-strategies"><strong>5. 再試行戦略</strong></h2>

<pre><code class="language-go">type RetryConfig struct {
    MaxRetries int
    InitDelay  time.Duration
    MaxDelay   time.Duration
    Multiplier float64
}

func WithRetry(ctx context.Context, cfg RetryConfig, fn func() error) error {
    delay := cfg.InitDelay
    
    for attempt := 0; attempt <= cfg.MaxRetries; attempt++ {
        err := fn()
        if err == nil {
            return nil
        }
        
        if attempt == cfg.MaxRetries {
            return fmt.Errorf("max retries exceeded: %w", err)
        }
        
        log.Printf("Attempt %d failed: %v. Retrying in %v", attempt+1, err, delay)
        
        select {
        case <-ctx.Done():
            return ctx.Err()
        case <-time.After(delay):
        }
        
        // Exponential backoff
        delay = time.Duration(float64(delay) * cfg.Multiplier)
        if delay > cfg.MaxDelay {
            delay = cfg.MaxDelay
        }
    }
    
    return nil
}
</code></pre>

<p>次の記事: <strong>キャッシュ、ファイルのアップロード、パフォーマンス</strong> — Redis キャッシュ、ファイルのアップロード、最適化。</p>
