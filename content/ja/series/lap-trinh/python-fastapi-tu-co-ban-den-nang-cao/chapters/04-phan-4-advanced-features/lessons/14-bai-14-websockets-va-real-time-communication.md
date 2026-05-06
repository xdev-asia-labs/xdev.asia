---
id: 019d8b40-a402-7001-b002-fastapi000402
title: 'レッスン 14: WebSocket とリアルタイム通信'
slug: bai-14-websockets-va-real-time-communication
description: >-
  FastAPI の WebSocket エンドポイント、接続マネージャー、ブロードキャスト、ルーム パターン。リアルタイムチャット、通知。
  Server-Sent Events (SSE) とロングポーリングの代替手段。
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: 'パート 4: 高度な機能'
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: 基本から高度まで'
  slug: python-fastapi-tu-co-ban-den-nang-cao
locale: ja
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 340" style="max-width: 100%; height: auto; border-radius: 12px; margin-bottom: 1.5rem;">
  <defs>
    <linearGradient id="bg-9441" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#121a2b"/>
      <stop offset="100%" style="stop-color:#1e293b"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="340" rx="12" fill="url(#bg-9441)"/>

  <!-- Decorations -->
  <g>
    <circle cx="1037" cy="281" r="20" fill="#a78bfa" opacity="0.060000000000000005"/>
    <circle cx="974" cy="278" r="11" fill="#a78bfa" opacity="0.07"/>
    <circle cx="911" cy="275" r="32" fill="#a78bfa" opacity="0.08"/>
    <circle cx="848" cy="272" r="23" fill="#a78bfa" opacity="0.09"/>
    <circle cx="785" cy="269" r="14" fill="#a78bfa" opacity="0.1"/>
    <circle cx="750" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="750" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="778" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="806" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="834" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="862" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="80" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="108" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="136" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <circle cx="890" cy="164" r="1.5" fill="#a78bfa" opacity="0.15"/>
    <line x1="600" y1="151" x2="1100" y2="231" stroke="#a78bfa" stroke-width="0.5" opacity="0.1"/>
    <line x1="650" y1="181" x2="1050" y2="251" stroke="#a78bfa" stroke-width="0.5" opacity="0.08"/>
    <polygon points="973.5166604983954,138 973.5166604983954,164 951,177 928.4833395016046,164 928.4833395016046,138 951,125" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.12"/>
  </g>

  <!-- Accent bar -->
  <rect x="60" y="50" width="4" height="60" rx="2" fill="#a78bfa"/>

  <!-- Category badge -->
  <rect x="80" y="50" width="121" height="28" rx="14" fill="#a78bfa" opacity="0.15"/>
  <text x="92" y="69" font-family="system-ui,-apple-system,sans-serif" font-size="13" font-weight="600" fill="#a78bfa">💻 プログラミング — レッスン 14</text>

  <!-- Title -->
  <text x="60" y="140" font-family="system-ui,-apple-system,sans-serif" font-size="34" font-weight="700" fill="#f1f5f9">
      <tspan x="60" dy="0">レッスン 14: WebSocket とリアルタイム</tspan>
      <tspan x="60" dy="42">コミュニケーション</tspan>
  </text>

  <!-- Series subtitle -->
  <text x="60" y="244" font-family="system-ui,-apple-system,sans-serif" font-size="15" fill="#94a3b8" opacity="0.8">Python FastAPI: 基本から高度まで</text>

  <!-- Section -->
  <text x="60" y="268" font-family="system-ui,-apple-system,sans-serif" font-size="13" fill="#64748b" opacity="0.6">パート 4: 高度な機能</text>

  <!-- xDev watermark -->
  <text x="1140" y="320" font-family="system-ui,-apple-system,sans-serif" font-size="12" fill="#475569" text-anchor="end" opacity="0.4">xdev.asia</text>
</svg>

<h2 id="1-websocket-basics"><strong>1. FastAPI の WebSocket の基本</strong></h2>

<pre><code class="language-python">from fastapi import FastAPI, WebSocket, WebSocketDisconnect

app = FastAPI()


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    """WebSocket endpoint cơ bản."""
    await websocket.accept()
    try:
        while True:
            # Nhận message từ client
            data = await websocket.receive_text()
            # Gửi message lại client
            await websocket.send_text(f"Echo: {data}")
    except WebSocketDisconnect:
        print("Client disconnected")
</code></pre>

<h2 id="2-connection-manager"><strong>2. 接続マネージャー</strong></h2>

<pre><code class="language-python"># app/core/websocket.py
import json
from dataclasses import dataclass, field
from fastapi import WebSocket


@dataclass
class ConnectionManager:
    """Quản lý WebSocket connections."""

    # Tất cả connections
    active_connections: list[WebSocket] = field(default_factory=list)

    # Connections theo room
    rooms: dict[str, list[WebSocket]] = field(default_factory=dict)

    # Connections theo user
    user_connections: dict[int, list[WebSocket]] = field(default_factory=dict)

    async def connect(
        self, websocket: WebSocket, user_id: int | None = None, room: str | None = None
    ):
        """Kết nối client."""
        await websocket.accept()
        self.active_connections.append(websocket)

        if user_id:
            self.user_connections.setdefault(user_id, []).append(websocket)

        if room:
            self.rooms.setdefault(room, []).append(websocket)

    def disconnect(
        self, websocket: WebSocket, user_id: int | None = None, room: str | None = None
    ):
        """Ngắt kết nối client."""
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)

        if user_id and user_id in self.user_connections:
            conns = self.user_connections[user_id]
            if websocket in conns:
                conns.remove(websocket)
            if not conns:
                del self.user_connections[user_id]

        if room and room in self.rooms:
            conns = self.rooms[room]
            if websocket in conns:
                conns.remove(websocket)
            if not conns:
                del self.rooms[room]

    async def send_personal(self, message: dict, websocket: WebSocket):
        """Gửi message đến 1 client."""
        await websocket.send_json(message)

    async def send_to_user(self, message: dict, user_id: int):
        """Gửi message đến tất cả connections của 1 user."""
        connections = self.user_connections.get(user_id, [])
        for ws in connections:
            try:
                await ws.send_json(message)
            except Exception:
                pass

    async def broadcast(self, message: dict, exclude: WebSocket | None = None):
        """Gửi message đến tất cả clients."""
        for ws in self.active_connections:
            if ws != exclude:
                try:
                    await ws.send_json(message)
                except Exception:
                    pass

    async def broadcast_to_room(
        self, message: dict, room: str, exclude: WebSocket | None = None
    ):
        """Gửi message đến tất cả clients trong room."""
        connections = self.rooms.get(room, [])
        for ws in connections:
            if ws != exclude:
                try:
                    await ws.send_json(message)
                except Exception:
                    pass

    @property
    def connection_count(self) -> int:
        return len(self.active_connections)


# Global instance
manager = ConnectionManager()
</code></pre>

<h2 id="3-chat-room"><strong>3. リアルタイムチャットルーム</strong></h2>

<pre><code class="language-python"># app/api/v1/chat.py
from fastapi import APIRouter, WebSocket, WebSocketDisconnect, Depends, Query
from datetime import datetime

from app.core.websocket import manager

router = APIRouter(tags=["Chat"])


@router.websocket("/ws/chat/{room_id}")
async def chat_websocket(
    websocket: WebSocket,
    room_id: str,
    username: str = Query(...),
):
    """WebSocket endpoint cho chat room."""
    await manager.connect(websocket, room=room_id)

    # Thông báo user joined
    await manager.broadcast_to_room(
        {
            "type": "system",
            "message": f"{username} joined the room",
            "timestamp": datetime.utcnow().isoformat(),
        },
        room=room_id,
        exclude=websocket,
    )

    try:
        while True:
            # Nhận message
            data = await websocket.receive_json()

            # Broadcast to room
            await manager.broadcast_to_room(
                {
                    "type": "message",
                    "username": username,
                    "message": data.get("message", ""),
                    "timestamp": datetime.utcnow().isoformat(),
                },
                room=room_id,
            )
    except WebSocketDisconnect:
        manager.disconnect(websocket, room=room_id)
        await manager.broadcast_to_room(
            {
                "type": "system",
                "message": f"{username} left the room",
                "timestamp": datetime.utcnow().isoformat(),
            },
            room=room_id,
        )
</code></pre>

<h2 id="4-notifications"><strong>4. リアルタイム通知</strong></h2>

<pre><code class="language-python"># app/api/v1/notifications.py
from fastapi import APIRouter, WebSocket, WebSocketDisconnect, Depends

from app.core.auth import get_current_user_ws
from app.core.websocket import manager
from app.models.user import User

router = APIRouter(tags=["Notifications"])


@router.websocket("/ws/notifications")
async def notifications_websocket(
    websocket: WebSocket,
    token: str,  # JWT token qua query parameter
):
    """WebSocket cho real-time notifications."""
    # Authenticate WebSocket connection
    from app.core.security import decode_token
    payload = decode_token(token)
    if not payload:
        await websocket.close(code=4001, reason="Unauthorized")
        return

    user_id = int(payload["sub"])
    await manager.connect(websocket, user_id=user_id)

    try:
        while True:
            # Keep connection alive, nhận ping/pong
            data = await websocket.receive_json()
            if data.get("type") == "ping":
                await websocket.send_json({"type": "pong"})
    except WebSocketDisconnect:
        manager.disconnect(websocket, user_id=user_id)


# Service gửi notification
async def send_notification(user_id: int, notification: dict):
    """Gửi notification đến user qua WebSocket."""
    await manager.send_to_user(
        {
            "type": "notification",
            **notification,
        },
        user_id=user_id,
    )
</code></pre>

<h2 id="5-sse"><strong>5. サーバー送信イベント (SSE)</strong></h2>

<pre><code class="language-python"># app/api/v1/events.py
import asyncio
from datetime import datetime

from fastapi import APIRouter, Request
from fastapi.responses import StreamingResponse

router = APIRouter(tags=["Events"])


async def event_generator(request: Request):
    """Generate Server-Sent Events."""
    while True:
        # Check nếu client disconnect
        if await request.is_disconnected():
            break

        # Gửi event
        data = {
            "timestamp": datetime.utcnow().isoformat(),
            "connections": 42,  # Example data
        }
        yield f"data: {data}\n\n"

        await asyncio.sleep(1)  # Gửi mỗi giây


@router.get("/events/stream")
async def stream_events(request: Request):
    """SSE endpoint - alternative cho WebSocket."""
    return StreamingResponse(
        event_generator(request),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",  # Disable nginx buffering
        },
    )
</code></pre>

<h2 id="6-websocket-vs-sse"><strong>6. WebSocket、SSE、ロングポーリング</strong></h2>

<table>
<thead>
<tr><th>特長</th><th>Webソケット</th><th>SSE</th><th>ロングポーリング</th></tr>
</thead>
<tbody>
<tr><td>方向</td><td>双方向</td><td>サーバー → クライアント</td><td>リクエストとレスポンス</td></tr>
<tr><td>プロトコル</td><td>WS/WSS</td><td>HTTP</td><td>HTTP</td></tr>
<tr><td>再接続</td><td>マニュアル</td><td>自動（ブラウザ）</td><td>マニュアル</td></tr>
<tr><td>バイナリデータ</td><td>はい</td><td>いいえ (テキストのみ)</td><td>はい</td></tr>
<tr><td>プロキシのサポート</td><td>時々問題が発生する</td><td>フル</td><td>フル</td></tr>
<tr><td>ユースケース</td><td>チャット、ゲーム</td><td>通知、フィード</td><td>簡単なアップデート</td></tr>
</tbody>
</table>

<h2 id="tong-ket"><strong>概要</strong></h2>

<p>この記事では、以下を実装しました。</p>

<ul>
<li><strong>WebSocketエンドポイント</strong>：双方向リアルタイム通信</li>
<li><strong>接続マネージャー</strong>: 接続、ルーム、ユーザーを管理</li>
<li><strong>チャットルーム</strong>: ルームパターンによるリアルタイムチャット</li>
<li><strong>通知</strong>：WebSocket経由のプッシュ通知</li>
<li><strong>SSE</strong>: 一方向ストリーミング用のサーバー送信イベント</li>
</ul>

<p>次の記事では、バックグラウンド タスクとセロリについて学びます。</p>
