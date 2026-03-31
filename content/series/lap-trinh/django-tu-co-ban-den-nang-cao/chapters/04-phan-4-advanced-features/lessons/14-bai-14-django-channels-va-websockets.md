---
id: 019d8b40-c402-7001-b004-django00000402
title: 'Bài 14: Django Channels & WebSockets'
slug: bai-14-django-channels-va-websockets
description: >-
  Django Channels setup, ASGI configuration. WebSocket consumers,
  channel layers với Redis. Real-time notifications, chat application,
  broadcasting patterns.
duration_minutes: 150
is_free: true
video_url: null
sort_order: 14
section_title: "Phần 4: Advanced Features"
course:
  id: 019d8b40-c100-7001-b004-django00000001
  title: 'Django: Từ Cơ bản đến Nâng cao'
  slug: django-tu-co-ban-den-nang-cao
---

<h2 id="1-setup"><strong>1. Channels Setup</strong></h2>

<pre><code class="language-bash">pip install channels channels-redis
</code></pre>

<pre><code class="language-python"># settings.py
INSTALLED_APPS = [..., 'channels']
ASGI_APPLICATION = 'config.asgi.application'

CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {'hosts': [('127.0.0.1', 6379)]},
    },
}

# asgi.py
import os
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': AuthMiddlewareStack(
        URLRouter([
            path('ws/chat/&lt;str:room_name&gt;/', ChatConsumer.as_asgi()),
            path('ws/notifications/', NotificationConsumer.as_asgi()),
        ])
    ),
})
</code></pre>

<h2 id="2-consumer"><strong>2. WebSocket Consumer</strong></h2>

<pre><code class="language-python">import json
from channels.generic.websocket import AsyncJsonWebsocketConsumer

class ChatConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group = f'chat_{self.room_name}'

        await self.channel_layer.group_add(self.room_group, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.room_group, self.channel_name)

    async def receive_json(self, content):
        message = content['message']
        user = self.scope['user']

        await self.channel_layer.group_send(
            self.room_group,
            {
                'type': 'chat_message',
                'message': message,
                'username': user.username,
            },
        )

    async def chat_message(self, event):
        await self.send_json({
            'message': event['message'],
            'username': event['username'],
        })
</code></pre>

<h2 id="3-notifications"><strong>3. Real-time Notifications</strong></h2>

<pre><code class="language-python">class NotificationConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        user = self.scope['user']
        if user.is_anonymous:
            await self.close()
            return
        self.group_name = f'notifications_{user.id}'
        await self.channel_layer.group_add(self.group_name, self.channel_name)
        await self.accept()

    async def send_notification(self, event):
        await self.send_json(event['data'])

# Gửi notification từ anywhere
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync

def notify_user(user_id, message):
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        f'notifications_{user_id}',
        {'type': 'send_notification', 'data': {'message': message}},
    )
</code></pre>

<h2 id="4-frontend"><strong>4. Frontend WebSocket</strong></h2>

<pre><code class="language-javascript">const ws = new WebSocket(`wss://${location.host}/ws/chat/${roomName}/`);

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  appendMessage(data.username, data.message);
};

ws.onclose = () => {
  setTimeout(() => connectWebSocket(), 3000); // Reconnect
};

function sendMessage(message) {
  ws.send(JSON.stringify({ message }));
}
</code></pre>

<p>Bài tiếp theo: <strong>Celery, Signals & Caching</strong>.</p>
