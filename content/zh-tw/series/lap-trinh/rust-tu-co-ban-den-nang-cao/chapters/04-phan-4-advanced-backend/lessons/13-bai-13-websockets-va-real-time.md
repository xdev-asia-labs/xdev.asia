---
id: 019d8b40-f401-7001-b007-rust000000401
title: 第 13 課：WebSocket 和即時
slug: bai-13-websockets-va-real-time
description: tokio-tungstenite、axum WebSocket 支援。連接管理器、廣播、房間模式。伺服器發送的事件。即時聊天應用程式。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: 第 4 部分：進階後端
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: Rust：從基礎到高級
  slug: rust-tu-co-ban-den-nang-cao
locale: zh-tw
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
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#818cf8">💻 程式設計 — 第 13 課</text>

  <!-- Title -->
  <text x="60" y="160" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">第 13 課：WebSocket 和即時</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="222" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Rust：從基礎到高級</text>

  <!-- Section -->
  <text x="60" y="246" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">第 4 部分：進階後端</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">亞洲開發網</text>
</svg>

<h2 id="1-axum-ws"><strong>1.Axum WebSocket</strong></h2>

<pre><code class="language-rust">use axum::{
    extract::ws::{Message, WebSocket, WebSocketUpgrade},
    response::IntoResponse,
    routing::get,
    Router,
};

async fn ws_handler(ws: WebSocketUpgrade) -> impl IntoResponse {
    ws.on_upgrade(handle_socket)
}

async fn handle_socket(mut socket: WebSocket) {
    while let Some(msg) = socket.recv().await {
        let msg = match msg {
            Ok(msg) => msg,
            Err(_) => return,
        };

        match msg {
            Message::Text(text) => {
                let response = format!("Echo: {}", text);
                if socket.send(Message::Text(response)).await.is_err() {
                    return;
                }
            }
            Message::Close(_) => return,
            _ => {}
        }
    }
}

let app = Router::new().route("/ws", get(ws_handler));
</code></pre>

<h2 id="2-chat"><strong>2. 有廣播的聊天室</strong></h2>

<pre><code class="language-rust">use tokio::sync::broadcast;
use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

#[derive(Clone)]
struct ChatState {
    rooms: Arc&lt;RwLock&lt;HashMap&lt;String, broadcast::Sender&lt;ChatMessage&gt;&gt;&gt;&gt;,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
struct ChatMessage {
    room: String,
    user: String,
    content: String,
    timestamp: i64,
}

impl ChatState {
    fn new() -> Self {
        Self { rooms: Arc::new(RwLock::new(HashMap::new())) }
    }

    async fn join_room(&self, room: &str) -> broadcast::Receiver&lt;ChatMessage&gt; {
        let mut rooms = self.rooms.write().await;
        let tx = rooms.entry(room.to_string())
            .or_insert_with(|| broadcast::channel(100).0);
        tx.subscribe()
    }

    async fn send_message(&self, msg: ChatMessage) {
        let rooms = self.rooms.read().await;
        if let Some(tx) = rooms.get(&msg.room) {
            let _ = tx.send(msg);
        }
    }
}

async fn ws_chat(
    ws: WebSocketUpgrade,
    State(state): State&lt;ChatState&gt;,
) -> impl IntoResponse {
    ws.on_upgrade(move |socket| handle_chat(socket, state))
}

async fn handle_chat(mut socket: WebSocket, state: ChatState) {
    let mut rx = state.join_room("general").await;

    let (mut sender, mut receiver) = socket.split();

    // Task nhận broadcast
    let mut send_task = tokio::spawn(async move {
        while let Ok(msg) = rx.recv().await {
            let text = serde_json::to_string(&msg).unwrap();
            if sender.send(Message::Text(text)).await.is_err() { break; }
        }
    });

    // Task nhận từ client
    let state_clone = state.clone();
    let mut recv_task = tokio::spawn(async move {
        while let Some(Ok(Message::Text(text))) = receiver.next().await {
            if let Ok(msg) = serde_json::from_str::&lt;ChatMessage&gt;(&text) {
                state_clone.send_message(msg).await;
            }
        }
    });

    tokio::select! {
        _ = &mut send_task => recv_task.abort(),
        _ = &mut recv_task => send_task.abort(),
    }
}
</code></pre>

<h2 id="3-sse"><strong>3. 伺服器發送的事件</strong></h2>

<pre><code class="language-rust">use axum::response::sse::{Event, Sse};
use tokio_stream::StreamExt;

async fn sse_handler() -> Sse&lt;impl tokio_stream::Stream&lt;Item = Result&lt;Event, std::convert::Infallible&gt;&gt;&gt; {
    let stream = tokio_stream::wrappers::IntervalStream::new(tokio::time::interval(Duration::from_secs(1)))
        .map(|_| {
            let data = serde_json::json!({ "time": Utc::now().to_rfc3339() });
            Ok(Event::default().data(data.to_string()))
        });
    Sse::new(stream)
}
</code></pre>

<p>下一篇： <strong>gRPC 與 Tonic</strong>。</p>
