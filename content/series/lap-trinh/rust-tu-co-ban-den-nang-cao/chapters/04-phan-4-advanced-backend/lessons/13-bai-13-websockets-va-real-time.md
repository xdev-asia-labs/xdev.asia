---
id: 019d8b40-f401-7001-b007-rust000000401
title: 'Bài 13: WebSockets & Real-time'
slug: bai-13-websockets-va-real-time
description: >-
  tokio-tungstenite, axum WebSocket support. Connection manager,
  broadcasting, rooms pattern. Server-Sent Events. Real-time chat application.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 13
section_title: "Phần 4: Advanced Backend"
course:
  id: 019d8b40-f100-7001-b007-rust000000001
  title: 'Rust: Từ Cơ bản đến Nâng cao'
  slug: rust-tu-co-ban-den-nang-cao
---

<h2 id="1-axum-ws"><strong>1. Axum WebSocket</strong></h2>

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

<h2 id="2-chat"><strong>2. Chat Room với Broadcasting</strong></h2>

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

<h2 id="3-sse"><strong>3. Server-Sent Events</strong></h2>

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

<p>Bài tiếp theo: <strong>gRPC với Tonic</strong>.</p>
