---
id: 019d8b40-b401-7001-b003-golang0000401
title: 'レッスン 13: WebSocket とリアルタイム'
slug: bai-13-websockets-va-real-time
description: >-
  ゴリラ/WebSocket、接続ライフサイクル。チャット ルーム、ブロードキャスト パターン。リアルタイム通知、ハートビート、再接続。 WebSocket
  のスケーリング。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 'パート 4: 高度な機能'
course:
  id: 019d8b40-b100-7001-b003-golang0000001
  title: 'Golang: 基本から高度まで'
  slug: golang-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-4143" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-4143)"/>

  <!-- Decorations -->
  <g>
    <circle cx="899" cy="287" r="32" fill="#818cf8" opacity="0.12000000000000001"/>
    <circle cx="698" cy="286" r="29" fill="#818cf8" opacity="0.09"/>
    <circle cx="997" cy="285" r="26" fill="#818cf8" opacity="0.060000000000000005"/>
    <circle cx="796" cy="284" r="23" fill="#818cf8" opacity="0.13"/>
    <circle cx="1095" cy="283" r="20" fill="#818cf8" opacity="0.1"/>
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
    <line x1="600" y1="77" x2="1100" y2="157" stroke="#818cf8" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="107" x2="1050" y2="177" stroke="#818cf8" stroke-width="0.5" opacity="0.08"/>
    <polygon points="954.712812921102,111 954.712812921102,143 927,159 899.287187078898,143 899.287187078898,111.00000000000001 927,95" fill="none" stroke="#818cf8" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#818cf8"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#818cf8" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 プログラミング — レッスン 13</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 13: WebSocket とリアルタイム</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Golang: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 高度な機能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-websocket-fundamentals"><strong>1. WebSocketの基礎</strong></h2>

<p>WebSocket は、単一の TCP 接続を介してクライアントとサーバー間の全二重接続を提供します。 HTTP リクエスト/レスポンスとは異なり、WebSocket を使用すると、サーバーはプロアクティブにデータをクライアントにプッシュできます。</p>

<table>
<thead><tr><th>特長</th><th>HTTP</th><th>Webソケット</th></tr></thead>
<tbody>
<tr><td>接続。接続</td><td>短命</td><td>永続的</td></tr>
<tr><td>方向</td><td>クライアント → サーバー</td><td>双方向</td></tr>
<tr><td>プロトコル</td><td>HTTP/1.1、HTTP/2</td><td>ws://、wss://</td></tr>
<tr><td>オーバーヘッド</td><td>リクエストごとのヘッダー</td><td>最小限のフレームヘッダー</td></tr>
<tr><td>ユースケース</td><td>REST API</td><td>チャット、通知、ライブデータ</td></tr>
</tbody>
</table>

<h2 id="2-gorilla-websocket-setup"><strong>2. ゴリラ/ウェブソケットのセットアップ</strong></h2>

<pre><code class="language-bash">go get github.com/gorilla/websocket
</code></pre>

<h3 id="2-1-basic-echo-server"><strong>2.1.基本的なエコーサーバー</strong></h3>

<pre><code class="language-go">package main

import (
    "log"
    "net/http"
    
    "github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
    ReadBufferSize:  1024,
    WriteBufferSize: 1024,
    CheckOrigin: func(r *http.Request) bool {
        // Production: validate origin
        origin := r.Header.Get("Origin")
        return origin == "https://example.com"
    },
}

func echoHandler(w http.ResponseWriter, r *http.Request) {
    conn, err := upgrader.Upgrade(w, r, nil)
    if err != nil {
        log.Printf("Upgrade error: %v", err)
        return
    }
    defer conn.Close()
    
    for {
        messageType, message, err := conn.ReadMessage()
        if err != nil {
            if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseNormalClosure) {
                log.Printf("Read error: %v", err)
            }
            break
        }
        
        log.Printf("Received: %s", message)
        
        if err := conn.WriteMessage(messageType, message); err != nil {
            log.Printf("Write error: %v", err)
            break
        }
    }
}

func main() {
    http.HandleFunc("/ws", echoHandler)
    log.Fatal(http.ListenAndServe(":8080", nil))
}
</code></pre>

<h2 id="3-chat-room-pattern"><strong>3. チャット ルーム — ハブ パターン</strong></h2>

<h3 id="3-1-hub"><strong>3.1.ハブ (接続管理)</strong></h3>

<pre><code class="language-go">package ws

import (
    "encoding/json"
    "log"
    "sync"
)

type Message struct {
    Type    string `json:"type"`
    Room    string `json:"room"`
    Sender  string `json:"sender"`
    Content string `json:"content"`
}

type Hub struct {
    mu         sync.RWMutex
    rooms      map[string]map[*Client]bool
    register   chan *Client
    unregister chan *Client
    broadcast  chan Message
}

func NewHub() *Hub {
    return &Hub{
        rooms:      make(map[string]map[*Client]bool),
        register:   make(chan *Client),
        unregister: make(chan *Client),
        broadcast:  make(chan Message, 256),
    }
}

func (h *Hub) Run() {
    for {
        select {
        case client := <-h.register:
            h.mu.Lock()
            if h.rooms[client.Room] == nil {
                h.rooms[client.Room] = make(map[*Client]bool)
            }
            h.rooms[client.Room][client] = true
            h.mu.Unlock()
            
            log.Printf("Client joined room %s (total: %d)", client.Room, len(h.rooms[client.Room]))
            
        case client := <-h.unregister:
            h.mu.Lock()
            if clients, ok := h.rooms[client.Room]; ok {
                if _, ok := clients[client]; ok {
                    delete(clients, client)
                    close(client.Send)
                    if len(clients) == 0 {
                        delete(h.rooms, client.Room)
                    }
                }
            }
            h.mu.Unlock()
            
        case msg := <-h.broadcast:
            h.mu.RLock()
            clients := h.rooms[msg.Room]
            h.mu.RUnlock()
            
            data, _ := json.Marshal(msg)
            for client := range clients {
                select {
                case client.Send <- data:
                default:
                    // Client buffer full, disconnect
                    close(client.Send)
                    h.mu.Lock()
                    delete(h.rooms[msg.Room], client)
                    h.mu.Unlock()
                }
            }
        }
    }
}
</code></pre>

<h3 id="3-2-client"><strong>3.2.クライアント</strong></h3>

<pre><code class="language-go">package ws

import (
    "encoding/json"
    "log"
    "time"
    
    "github.com/gorilla/websocket"
)

const (
    writeWait      = 10 * time.Second
    pongWait       = 60 * time.Second
    pingPeriod     = (pongWait * 9) / 10
    maxMessageSize = 4096
)

type Client struct {
    Hub    *Hub
    Conn   *websocket.Conn
    Send   chan []byte
    Room   string
    UserID string
}

// ReadPump: đọc messages từ WebSocket connection
func (c *Client) ReadPump() {
    defer func() {
        c.Hub.unregister <- c
        c.Conn.Close()
    }()
    
    c.Conn.SetReadLimit(maxMessageSize)
    c.Conn.SetReadDeadline(time.Now().Add(pongWait))
    c.Conn.SetPongHandler(func(string) error {
        c.Conn.SetReadDeadline(time.Now().Add(pongWait))
        return nil
    })
    
    for {
        _, data, err := c.Conn.ReadMessage()
        if err != nil {
            if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseNormalClosure) {
                log.Printf("Read error: %v", err)
            }
            break
        }
        
        var msg Message
        if err := json.Unmarshal(data, &msg); err != nil {
            continue
        }
        
        msg.Sender = c.UserID
        msg.Room = c.Room
        c.Hub.broadcast <- msg
    }
}

// WritePump: gửi messages qua WebSocket connection
func (c *Client) WritePump() {
    ticker := time.NewTicker(pingPeriod)
    defer func() {
        ticker.Stop()
        c.Conn.Close()
    }()
    
    for {
        select {
        case message, ok := <-c.Send:
            c.Conn.SetWriteDeadline(time.Now().Add(writeWait))
            if !ok {
                c.Conn.WriteMessage(websocket.CloseMessage, []byte{})
                return
            }
            
            w, err := c.Conn.NextWriter(websocket.TextMessage)
            if err != nil {
                return
            }
            w.Write(message)
            
            // Batch queued messages
            n := len(c.Send)
            for i := 0; i < n; i++ {
                w.Write([]byte("\n"))
                w.Write(<-c.Send)
            }
            
            if err := w.Close(); err != nil {
                return
            }
            
        case <-ticker.C:
            c.Conn.SetWriteDeadline(time.Now().Add(writeWait))
            if err := c.Conn.WriteMessage(websocket.PingMessage, nil); err != nil {
                return
            }
        }
    }
}
</code></pre>

<h3 id="3-3-handler"><strong>3.3. Jin を使用した WebSocket ハンドラー</strong></h3>

<pre><code class="language-go">func WebSocketHandler(hub *Hub) gin.HandlerFunc {
    return func(c *gin.Context) {
        room := c.Param("room")
        userID := c.GetString("user_id") // from auth middleware
        
        conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
        if err != nil {
            log.Printf("Upgrade error: %v", err)
            return
        }
        
        client := &Client{
            Hub:    hub,
            Conn:   conn,
            Send:   make(chan []byte, 256),
            Room:   room,
            UserID: userID,
        }
        
        hub.register <- client
        
        go client.WritePump()
        go client.ReadPump()
    }
}

// Router
func SetupWSRoutes(r *gin.Engine, hub *Hub) {
    r.GET("/ws/:room", AuthMiddleware(), WebSocketHandler(hub))
}
</code></pre>

<h2 id="4-heartbeat-reconnection"><strong>4. ハートビートと再接続</strong></h2>

<pre><code class="language-javascript">// Client-side (JavaScript)
class WSClient {
    constructor(url) {
        this.url = url;
        this.reconnectDelay = 1000;
        this.maxReconnectDelay = 30000;
        this.connect();
    }
    
    connect() {
        this.ws = new WebSocket(this.url);
        
        this.ws.onopen = () => {
            console.log('Connected');
            this.reconnectDelay = 1000; // Reset delay
        };
        
        this.ws.onclose = (event) => {
            if (!event.wasClean) {
                // Exponential backoff reconnection
                setTimeout(() => this.connect(), this.reconnectDelay);
                this.reconnectDelay = Math.min(
                    this.reconnectDelay * 2,
                    this.maxReconnectDelay
                );
            }
        };
        
        this.ws.onmessage = (event) => {
            const msg = JSON.parse(event.data);
            this.handleMessage(msg);
        };
    }
    
    send(type, content) {
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ type, content }));
        }
    }
}
</code></pre>

<h2 id="5-scaling-websockets"><strong>5. Redis Pub/Sub を使用した WebSocket のスケーリング</strong></h2>

<pre><code class="language-go">import "github.com/redis/go-redis/v9"

type RedisHub struct {
    *Hub
    redis *redis.Client
}

func (h *RedisHub) Subscribe(ctx context.Context, room string) {
    sub := h.redis.Subscribe(ctx, "ws:"+room)
    ch := sub.Channel()
    
    for msg := range ch {
        var wsMsg Message
        json.Unmarshal([]byte(msg.Payload), &wsMsg)
        
        // Broadcast to local clients only
        h.mu.RLock()
        clients := h.rooms[room]
        h.mu.RUnlock()
        
        data, _ := json.Marshal(wsMsg)
        for client := range clients {
            select {
            case client.Send <- data:
            default:
                close(client.Send)
            }
        }
    }
}

func (h *RedisHub) Publish(ctx context.Context, msg Message) error {
    data, _ := json.Marshal(msg)
    return h.redis.Publish(ctx, "ws:"+msg.Room, data).Err()
}
</code></pre>

<p>次の記事: <strong>gRPC とプロトコル バッファー</strong> — 高性能 RPC 通信。</p>
