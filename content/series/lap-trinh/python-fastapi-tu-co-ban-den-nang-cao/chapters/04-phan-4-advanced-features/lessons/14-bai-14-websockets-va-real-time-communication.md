---
id: 019d8b40-a402-7001-b002-fastapi000402
title: 'Bài 14: WebSockets & Real-time Communication'
slug: bai-14-websockets-va-real-time-communication
description: >-
  WebSocket endpoints trong FastAPI, Connection manager, Broadcasting,
  Rooms pattern. Real-time chat, notifications. Server-Sent Events (SSE)
  và long polling alternatives.
duration_minutes: 120
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: Advanced Features"
course:
  id: 019d8b40-a100-7001-b002-fastapi000001
  title: 'Python FastAPI: Từ Cơ bản đến Nâng cao'
  slug: python-fastapi-tu-co-ban-den-nang-cao
---

<h2 id="1-websocket-basics"><strong>1. WebSocket Basics trong FastAPI</strong></h2>

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

<h2 id="2-connection-manager"><strong>2. Connection Manager</strong></h2>

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

<h2 id="3-chat-room"><strong>3. Real-time Chat Room</strong></h2>

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

<h2 id="4-notifications"><strong>4. Real-time Notifications</strong></h2>

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

<h2 id="5-sse"><strong>5. Server-Sent Events (SSE)</strong></h2>

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

<h2 id="6-websocket-vs-sse"><strong>6. WebSocket vs SSE vs Long Polling</strong></h2>

<table>
<thead>
<tr><th>Feature</th><th>WebSocket</th><th>SSE</th><th>Long Polling</th></tr>
</thead>
<tbody>
<tr><td>Direction</td><td>Bi-directional</td><td>Server → Client</td><td>Request-Response</td></tr>
<tr><td>Protocol</td><td>WS/WSS</td><td>HTTP</td><td>HTTP</td></tr>
<tr><td>Reconnect</td><td>Manual</td><td>Auto (browser)</td><td>Manual</td></tr>
<tr><td>Binary data</td><td>Yes</td><td>No (text only)</td><td>Yes</td></tr>
<tr><td>Proxy support</td><td>Sometimes issues</td><td>Full</td><td>Full</td></tr>
<tr><td>Use cases</td><td>Chat, Gaming</td><td>Notifications, Feeds</td><td>Simple updates</td></tr>
</tbody>
</table>

<h2 id="tong-ket"><strong>Tổng kết</strong></h2>

<p>Trong bài này đã triển khai:</p>

<ul>
<li><strong>WebSocket endpoints</strong>: Bi-directional real-time communication</li>
<li><strong>Connection Manager</strong>: Quản lý connections, rooms, users</li>
<li><strong>Chat Room</strong>: Real-time chat với rooms pattern</li>
<li><strong>Notifications</strong>: Push notifications qua WebSocket</li>
<li><strong>SSE</strong>: Server-Sent Events cho one-way streaming</li>
</ul>

<p>Bài tiếp theo sẽ tìm hiểu Background Tasks và Celery.</p>
